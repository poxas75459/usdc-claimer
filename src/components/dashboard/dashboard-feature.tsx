/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4uk1vPAghLdfoLT3JCVDaof2vit7e95gwdAo3psQzCS85kKWxsYPMvy8BM4z8d1U9QNWvFcJFrBzmLdFa3RqDzb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37T2hbqX5n7uyHkt8mmBXHDcxMPH6byCfQzwgVitumgDXQM6HFQNkNTFHZJ3svWSKYKuhZyPB6QNb9xqrEjY8VdL",
  "key1": "3SNvipGhfPr21SpZv4j7Pa4qGCSBp46vh9G369E5JB4vMBJEHtyRMz3Fj8vgm5A3RanzvnK5EnDNZPLUczTif3hw",
  "key2": "4DbAz5a8RC5tc6PGSUdT5QizhzKvRTnsahxSJsnxYjRdv46LiihXkobQzfqvLHxAEvsLodTUSG9zKdoR1fdZ9zzw",
  "key3": "5HLGcX4fLAH5aUWFWu3zmx9zstWxjyNePTQ3Fs5Cs13ALsVSYYvsyebFYv84tVSfjz5oQLyUZyCB6hEs3uZsUbAF",
  "key4": "3DPzo5nZyctMfFgQJnXJFj6tDuUdhSBCpUC6x9Fwa4Hsy5JSdLUNmfTf4EtWLYi7zN3My8p1Vtg37YHvt1WCe8bT",
  "key5": "9UTDbpAeELZ7Z4WMW1Y98QZ4ZBcYhjHw8ywJxaxcCzB4ioY8icKnrvN4LKQag2s9LW4nRksE6wR8tx4rqXp7WnC",
  "key6": "2Hsz9LeEdjPTksBojW3g2omHuZWbUBn3VHqb888ZjuqdsVGUU4JyNoEgDgjrqWBQTXU6fo6w5JVxXCEjqL3EiLdw",
  "key7": "3XjrkXxWS4gRX8d5oggf3kbuWfo1Ejqp9G6R1e6QYF3FaYJEnVrCLr9BByQEzuuRcHisvJ2ZyfVNaTfiC3PbtbAS",
  "key8": "55xLjXn9CGc3yeiWhnMxsHoRQPbiA7CM11rJq7vjbGw5ZS4eK6xVXNHrpx5sY55hSCE3i3wBFv6q4CXjNYbE3Pun",
  "key9": "5Ai6ZARZMq9ad3qYuxShRvuRbpmB9SiD3JHGK86ZWesqFUggoNjMH6Qnt2iPDCxvBFygUu9NhMwarE9sRXH5jRSo",
  "key10": "5w87hyDFBL2mzoNLZZh9m3cvSFAdtpYRjLSRRrQKgCUs3qykfT6rt5xuuiQySgLqtr1H7GLBnV8spz52WRWShu4i",
  "key11": "4swPcpQvhvCULd5k287KyrtoupmiErtBbaE5AC9Upa7MHbcaHSuZ7cV9Az5oBFhz5u1sGME4XZd6gBFJSzmvUGGR",
  "key12": "4S9zqPddfE5tafkDv57whGLnXT82nmd2SZDfs1WoBM1njZcuYf11SDBhRWFTaABeSKhctVnnwwir5xuLmCnpGQxw",
  "key13": "2DVZaRLnwL6hbXfbTNLYN87xtrmyyLSiWRDeJR8XfX8tQfwiG3ZAuv8krLRRQVS7AdzeaqzfBS282FT4HcTy2rQk",
  "key14": "2bSPqE76mzimygNha5yyQLoFPFs8qwMesF1XLErZSU389gShZj8y6T5PXuQ5rkRoxQM1Mus4rgyBJKMUMhGhmjGL",
  "key15": "2C3ajcWHddCfb1ceTx5tWnjQLUDAaMrsXCnLk2Bv6VZGF1yuguLgHEY2TQSc9ebb1bUvUYXLvZcvFE84TCxVuuvw",
  "key16": "36wWbEHnf4N9feNW5xYXVdj5r7AyUm9uBcgsFCJBuPUAxYLkFJKZya2tMxE4gd4uBpN8JdgZSNz2hTCMmsTTVHTj",
  "key17": "2e2AHEMDo1zF5t1ZMrGhk1otcs31nrpEzXNL26hSESwU8iStsoe5VzAzoCcDK7PGCgRssKuBb5uR2QssC4KsJFFV",
  "key18": "4nDGK7sBzNYhhmjfrCXCXRJfg1nH6DoevAtmQZWjXyPGMJgM3jX9dfeDHFWxo9KFzYgAneY3yVQM8eY4HMjbLAC9",
  "key19": "5g73TijvaZLo1N5s4H5xUHMRiioRZYKqt9ojaPDFXxR62WqNAXJNd5CESojgUV33xghvGoHHup2wwoXNqWcQx9Jw",
  "key20": "494fiKSRry9vVdJfMEpW5E8PaK8LucQBTp1yQxvChESMBxcZtHuA7nUqE6k2zNdJSSKU8wnu8Wv9bj6Qg9QrjWDW",
  "key21": "5WBL5gYrBusA8fgeC8yvZfNUjF8SoQFakMnzqzvwLvWGn12XGdxggyNnK6PcRamsniQuokCZ7WoKPg8EXD77YzXR",
  "key22": "57t81dCxDPK5jkCZgJQwKdifFsZSiUT8sk2Rt8YCdpvqdoR8om1FMZNHFr9FbYNrUf6X4Z1Na6a1S1bCyPBezMgk",
  "key23": "24kTHEoAwAaz9kHvigLqfEkNegTLHYRosQg2yrjLTXxHRDQMFr4zPTswMGDQchbrQWKKBe7XkEPYdpExGhq9mNRr",
  "key24": "5pRDqfKx4qkzmRUevWordKsb1juT1xfzUkS2rKRP3RNffGREu4gV7eR6imWAxRrPDfAhCdo16HN4yV9bzQj7qXV9",
  "key25": "38vJGswcJp9Pfuu4gJLh98xWVxxnFDUkw88FsBSWppjVrFTcq6fFpBBQVvAiEk1QGQcYbf6Aqyo3KGhxgq3VkfDQ",
  "key26": "566dGjWKftn8RRZtuCvk1rWbTFjErjvrf9F7Pvjv779bc453pcrX1JmksKTLR1vuunPU3mSTMkmPcCgnCRzGu4D2",
  "key27": "4YRr13rUR4sk1tEweB32j9Px17f8shwKQYct5qyhA1qYyAyJStDopS7sYbtF4WYxLcx6GarQAYXgCDoKHH2VraV",
  "key28": "49aUjfTfZuyjrHWUicx4HeK4cNG6cn8Sob66txnxvaxUSCQMW8CeixqzR9cXz6TD6zEJjESnNPZFWyT6CbkZpd7X",
  "key29": "5BiNJWeycK6cxVEyk3mPivUknmbprnUcZR8rbymYKBvaBwEUYzqWvc5nXP3ySGPJvnGV2u5zYJ7STW2qbEgzNEAp",
  "key30": "dCBw7XL1uw8KLwijhVm265AtsHFmaTkTzSCu6NZfsbk65M3m493oYaMHxY2o6od5oMTiMMEfv4RskiyQtBGh3BQ",
  "key31": "3vH8vSMKKBNKv7WctVTEHn19XsPVvJPE1pGG64YNX9MymE6XKX6EkEbZ2yK2WfsWpBZb9RoyBqmD2WgSnbvPwdBi",
  "key32": "mMKfcoiLyuEkTbXGTE6Q7Gp4XcDhXgrXmYPWtmbu1NaSWnk7AyQqGPuyxuae7REqsdDZ5fApMUALteormNuN1SZ",
  "key33": "5DJp6x949JVha2gcnn47vZd8tc43aUmFAfNE4GAhrmznFpMfsoxsm7KxpfKqG3ZG4Fwuu3PrGjPRaFRw5t83EPcP",
  "key34": "4b45r3X1znS8nWtH2DDdDD3yY22BYFJVLC2BMJEoYBWKSemoxEhQnjXnbyaHR9bKvHYWJpvhuad5zaXr8WQLs9ka",
  "key35": "3sv3N2yyRUfBnPxHgtRKhaAmF26BUD3C9yU1j18CtkZhciXo5GELDJ5kkKgoc1bfbXTEuecDK469Bjhg6SJ1qtih",
  "key36": "2BpBE4tKznsCr3Chtt6DpWLxGbre4pthCda3edjBXw3eKVreJD1Q1595SHgfbaF5mt18Z8mzqNYVLMMyhct4B3K1",
  "key37": "3gserAXHgk6E6yUF7hUwfKpDXfxdKX2aKY3egBxaLbGAapLEevKdgMq6XWJE79xwWy181Pfuastab5qeXPc9PBRc",
  "key38": "2sHCtDbrqtRHrf6eHuhfct7wTuWTkYqRitfdMNozQfYsCjsu3EQYdZFU7kkGZLtBceMoVVCvdr2EDSDmUnr1LAf3",
  "key39": "5tYChnNcqsp9YWrH5CtUwPpAVKB6AtmLfCJifxPhSMYjA7WehE1xpyUPowJrqJu1KsC9npeQi47PrH3S6zAi7H2Y",
  "key40": "3yiTJsM6dUhEQ8F7aJm7eRMpK7bCaRXM8gLsJkPehrY69Jgk97j3rxTSpNCujj8hXkNDGxdkLgmsMiCDzgBbHpNE",
  "key41": "2i7xBSfM6VyjRotyNkVU5ozg8UxtYU5XSG1hoFQTjiUguKdsQPZb8WrkeE6eF9FdLycD8eouisDjGeikTgSKnGcP",
  "key42": "kRwUKQ683TQYkdGseiJP6KeRzD1887SqKZB4Bni5Q2peiV49EYL3T6CkMAXGHBWKtFnvJor14DBvSx7fhx1iXch",
  "key43": "xc6LqNYXrzhP6o2gzNGe2kyvZk6dwPqagEuwRFrS3dvEpP81LfZaxbwQFo9jeC7oVcwNvacSG4PM8g3cmhGBYSv",
  "key44": "4b9o8sKKmDimfDynvVkJTebAYGMP9Jt5UXESEzkMtcj7ZXgw9x2VGcA1QXaSLQ3623oxShR6WBbeV5sfQV5jQned",
  "key45": "5DbEEMkeN7RLnYpQg5KVNk2iFt9ksUUuYEar1F9ovNLtqwF7oSNbhej7jrnp9CWeXAysg1cpWJgNkndTZhkADt7Z",
  "key46": "53MPAVYmegKoTncXRjqpkvHc9Yi1XGxEfXyEZXW8kK4bTvmNSweyPdFFiW71ZYigfRH1p7hD1rK8FFxAikMiwJKW"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
