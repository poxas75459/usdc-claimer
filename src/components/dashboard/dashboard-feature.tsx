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
    "5XQqku7JaxZgrQNVnDy92KKtDSRWe6HBnoUydASFk4ACnFyJqGEq2H3RZBPervdme4ZMxG5higxLLMQjpvyPxfTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mvrjc7q7gZDzc7MaKdDKM3rMLNit97FAMKnZQUA59HsFUrfhtRa1AWxrivXC5G3NM8dcEChuLeCa4ZQcpRYZa64",
  "key1": "jwvFDSkXKXL2TocBUSCa9LvfNEVzUe5QjaoSypFasZgioovVXCYbCxoe9BrA7Nswm5aEuu2gyFcE6QDQQ92wrsj",
  "key2": "4n232EUSE3aYbqEAvsYDhhaWpDe8ycUsALxGfNexpa9L1rUjTLAJT3u6t79HxrBLUVKdAVwET1WbnkmYFKeJB9t7",
  "key3": "59sVj8QbnkpDn5HXtkJuqCFUzFd4wbVqv2vCLT25L7mW51fWd6VxMh5o4V4mHorHstvXJsvGkLVKg9wTTFaTFxzK",
  "key4": "3YSD7mauUxPyVRjiREiJoMphrtFjM5bP2rqSHPPssvYvZUYsyzbLqdBYUUMn7zgTU7aNjPsRjy6rTRndzVX3bFDs",
  "key5": "4NNoewYwXSvjxz8SaUFdAQmeDrS5G1kyRXPrpSvysCaEXhTm3GTqFgaQtNfRg8NBxNyq3MkkFQyuDZuhH7MdwJ3b",
  "key6": "39peJ7XuT57Yn9PjNLGHxmUhbhY9LA27s8BXU2HNLZZAWyAc2edYwWhYNczJPifXFq4A5wDLbBznZiaABjw2gk65",
  "key7": "3vuLKSbN7iuduUyRjWZKMbbHv2RHkR9Z5hMgm6qyj7vQ5djNNVh8j3t3TnRWrdCpV76ZT1aYxb8uNvdtESRDQxkv",
  "key8": "3TxPx5nfiYcejpDrv8GngVawRX1jWpt72YuL5g2fCWgR5v6YyAvRn6sDu1KvkKfpPRauTQGsMDujGCYAifKSbQ3w",
  "key9": "CRPpQCtwKPeGyCUWRVwE5EZwTQgVXpE6FVTRRqapaRN7AijG8MNH6tTSYdBeFpL1k7qsLWMUqeiBkThF6pp3tgF",
  "key10": "3kaihZKH23WhhkANAzszmrpi4kGvrkDa3XiwwhTvCs18ZZRN6The7frC3JJT9JuhnXuWfgFGyzPRT1FtxHTJcJ8a",
  "key11": "5qk2VjQVwMvmJeeXavy8t3XKmMQZ97J1dWocxQkLQVd8L9ukFTeroqK4G61kRJwArxLNnEYUsRRyVqGnx6JxwptS",
  "key12": "2X98gMQMrJzExVYdSLvodjuaoiF51SGqnYRLKwdzgeb2AhWqgd8PuJ2WMRCiWbnRCLNa39KrA3qWX9x2Ex4DBQAN",
  "key13": "2N8Rg76q3P13phd9Mw2hJvqBDSMm3grZ9qVvrVhgFv3WWFcSNaKpRNCd16LCX64pgHgBU4s9fYizt1DSYqZgTHNb",
  "key14": "4oT8bvg7P1fNyBCMt9z4HSxdX5d6siUBn5e1w8SXne3xHEJfZR97xTeCsBeFVwMT9D8z2RnvL9yRxhDJGqPPRa3R",
  "key15": "674HapBqF6GHfkZhjWdcSQNNLTSn7M2a8TXofPzAFob3sLrJaYpVSnsFQjPYjqKsHXeT1MbopWUT1d4P1uQRj516",
  "key16": "z7dZ99pgmEPCDPgMeQpQGfvUgxgURoGwgtQojhapdQ62MC5kVZiwvCncc7X6ah6kxqc3rGuxg1meapbRnopEzBi",
  "key17": "2TdXuDdENjatB7BpzyX6sgpzepwVFYhwE3dwcc44NX5djyePoKvRDzydepHoSoQgQRVnMNtvYA5Rihu7BzoSC3ek",
  "key18": "3qtWkQKNHQdARnpvF4AtHxdBT31FPWZ5HdoPCVWQtz7Z4YHB1obDbM2ntc9ZW2xHNMMM74PKm6zuMNgBSi9U4yQL",
  "key19": "4hjGTKPVjJSSwuvDGmBgze2WwGDFdqhzZogDS9VVgRAFtNW2kuZmUGKLyWDJKAhz2yFHcP71GMKBdTewPVcbj66A",
  "key20": "2S3HpN61phSNWEZqATA1iQVSeCV9GWT7T5eGbS1mCtQ3QY54s9qkBZmruhWACZx22Eg4s6y7Xy1xBDRXda8pToJp",
  "key21": "4Vj1LxtmEWfLeRcdPPH9Z8hrufDEn6GboqKg4DeLfYWjypnJ1mGBz9hnAQGy57b3YJ9CF1itjtxvDQQekbogdcBg",
  "key22": "5dHvjxV38ff3KRg5yN3NdNDXtm6csyjNxNzxXbnNrqzx2Px1qwavNYqxScyhAJE1YmQNJUPRTos2F7nMyhn7F1xm",
  "key23": "314MjP3yb2aj7eCQgFgYyoDoAiJeGf9ZbWeoRAiFpHGvkM1aLsCSq5XB3vxQCswGLcBHnhSP3sXHtGKeGvWSaK5L",
  "key24": "3rq5SCrTijTEfzSgJuGGQaUqbaeE8LyZaTRzzzJM4wMe4roLTrp1s9wHv4ga9vrj2C3RmU5LMFvhuri7UiapFAwM",
  "key25": "2DaD7j48jriaXQrYGLNResXxCUrnbsvzSYmEevbkboS4dvrRoMrMmfhKVD37vFgUAeSAyuNNkPe6LwiYSg49gsUi",
  "key26": "2KRRcgN39gSSH1ckuHAgb2Qt9Gu7vpBDj2HUtJ53uCT1QyPExbuWohHsTY2soQELfZMii2x6RRcrZcfdw2UQ5YfB",
  "key27": "ymffiikyg4CdAu4bismFsAS7qth2uW31QX1xJ6bUcX2bRE4ot5GcNUGeZWY2oY5JfgmXy3gGeouDfWsPm39ceXB",
  "key28": "4WnKdmDTsXT8GzBww28RjyF2pqPVv6e33o54er2BEzWz1hXARNs2UCnZ3tiQZKXwrPYEKaE8ZhTFJ4Drkd6cD7NL",
  "key29": "62j9eC4FUT5U4vTNAq3ZYRX7FXtXw3vmZWD2RXe3UJXufPdxpjYhZn3JpQvU54YNWS6oWzirVfxoEkTVUWhbFEnL",
  "key30": "5SAYGHmxvfYq5QmUzqjr5kp3534Nzvw8zp29RjDDLnaQSBT3HHU9c9ekdYmHYnryDzyNeQ8pGXfV8RRzUUVhVHCw",
  "key31": "2gF5mRvMsk1PYRJK5zLVioUrAWN5cCnAeUBv2X6rSZp5XTQgUbY1WmLEbhWUMgrTeKBUKvFGP4hPwkQipTqZNGPa",
  "key32": "MhUKxqz1dv5QvFhM9GaBCq6b4EhyqoYnneqcuoddJrwbbCR5aGZizrNjVJFnPnrBcN2sLhz5ZK2Wn6M4yvV75MF",
  "key33": "2Vk917TeEWo7nRJY3a44uZuTRcoVpepjUH5qZmVK7nsu7ojcxeQuYfgiwYoadMW1YeRoxUqMH9iSVU8RrHhuKd9D",
  "key34": "2VmwHwo4LQGJk7HrCepGGuZaXRgdLG5GEotXKeuMfsjf9ngZP3wkTicHrKkusJZZwdL9a6Wp7iq2XiaDphWBvaYH",
  "key35": "3W4ziWjsj5CrnWZwmLmA97HaWhjFhrqkNMVtrapTtJjrGLU2KBsom8ESBopgFcKYYpT2qh7iNjmyi35a4W1aiWmt",
  "key36": "249rb9bmqD36aezTtgFaPhzBuY2CmZ9hkANrb1iWehuiDpkej1WbVoa2KfMYKjfWnRBitPvratZuzC2QrmfvUxEu",
  "key37": "5ZDMW2b3F9kZksB2cDARoYvDxGv3Bx76GtBKYvSjQtk8mpNTEz7Hkw4SK7HNJArCPYJ1pqLHHxyZPNTdvZrJa8K5",
  "key38": "cmWLnRccx8M8FyBnZ79qqQyu1UsEkUAQZvWetzncexQabQ2SftJMyzMjTScWhhS5D3yGqtpZy9PLD4KhSBkqBCh"
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
