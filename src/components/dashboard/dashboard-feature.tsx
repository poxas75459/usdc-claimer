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
    "5MD96uMx5UxQy1APFUwEUYDjxpqdENnGeK5eShD6UVxY2LF7in6jPwgMdcR2ofUoANwdQug6F6oqtLeZ1TnYTAX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kYnDs1b7Xjku3bpHtaDgP2wYD7r3oTT43pF2UECf8Rydkqtac42TzYaq3PgzuFgBa12woT5wE6Qb6NZ4ZnvZg5E",
  "key1": "KHuQb5V2wf3519YjZHUv5H76oiSdDDVAf4Y8gJT5xoKoHTTKgPdX1Q9NN2JecH7hUGhhX8M3EZs4AE5DVnaL3VY",
  "key2": "Zhfyr6M4R5gBB2VLawYk2Ct5PaSQUVVHYtTfnk3KCpnXLuzUbG15rDFGRMB9cxy5o7331Vben4PBTPmtUXACtxL",
  "key3": "2zVjsjVAQhe51rWA2FSRpZUT9Y4i7knjnGJ3uABHPnNes7pxKMuu6v2tznb4bnc9T9s6vrkLBBPz2sEaqz8s5UaT",
  "key4": "2YWDdfUsFMVPXW8MnkjiuL9FFEStoKv7WjBSYTb2ojfRhF7EP7ZZnu2X8Cdx7rRHuJDYGgiCWYEBSkT4Rqr61GQ6",
  "key5": "3RZ6feLXv26YUq2wr8ieXSHL37AqfhdDF2DqdG89citX5kbFvokiuinJCTf6guA917YbLUU9WiYrDQayuG5qzW7V",
  "key6": "2CPLgLCYhwAbsUthJSQcT9EBKV1u9NS6ZEfxpZpjbYLfXvHb5p1soWWSzNQcBypqbramwPKqXKp29yGy9nrxgs9e",
  "key7": "5sCdFVA9jFUA6ZUMKQ61Ush5Kdp42zRGX9SfMAuRxMpgRGZPcRrUYv7AtsEPodPAQWgDRLdZ9PKBzRDp7G681DPW",
  "key8": "5QE2NX81F8inDN91QoZTCvxrb5tiWbmVU2ZbyeMwhqAXbt2V8nXYDiwjVW467E43bChaTmRNUXMyvRjRCyn72dNL",
  "key9": "3gXHfkWdfhoUQv53RRuq33pQVvvXwFCmAnFak8XHVzdATNqEs9qzbRuvGaQNqNsZaEqRBGdmAuEeH5Dvxc87Ja6o",
  "key10": "vpHthXBZrDotikeU2mMPSRHxMdDHRF4p1aMT6roGtxPg9eeFxGPBGtyyXCE5jqkbXuYYzG2j4zpYTmVuAhtzqCF",
  "key11": "3vfaKfB8gLkDAdgqjmcYrzG2VBo3VaCQPGP9YfGmiR5iSsjgfVvCrn5X9r42ZuiA6rFFg5FLpUR7QyP4PCG6gX3V",
  "key12": "32GFT3XnpGMVyPKHn3ma1JrRkiYxyuZCCnz5tTiAvPAeRKK8ehYftwb9E1i3xTUaMNjVcghJucmFKQb8ar7KEk1B",
  "key13": "2tYzo8PjCiAjfQ9hGzN261JJxdKGsUXGG44dGxkdXxzq15Pfixi8nAWAZBECwXu6v5bZeSBrt2MXFWLbwiipUy7z",
  "key14": "bc1Nwi1aQMvE3XsNo2ixBqhustKtbi4ae22DouQdjocJb8c7vE1Cgh3PpxGLfFgw3j8MQwfciL3Rub2EjeofTV8",
  "key15": "2kh2ZfkqD7JEzJ4vW67CNPpbByvS2oRF5sxccrSr3EgXHZweTLTHSzyAebpKBNo5a6Cozh8CZ166Eqfn64YRVQSH",
  "key16": "2T9sB3mqzbESn9jjsPtJLSRaVVyXKKDfaZjDyza8DUHnnUDUW9jH8CuYCYkcrY5qto7DqkwQ5uES9PStx1WCU3Ph",
  "key17": "24gyRhs2TRLcqaupbvvbKQq7pvijRP4EssJuocPWowYrn6UMweXvpBdBN6GENwWtUbDTg7ZHqrMNuknvuxqwG7yr",
  "key18": "4F9Det98fWZ5itoYHdpkiXd1A6uBVsarh5oBuzVQsvAkwBmD4j38BVHs7xofsaK6XrZL45zSkEiGBUnBrN2S9WgG",
  "key19": "5SaTKz7HYc4cRro2JDjaFwpziZrMPjobFX6wE1MVFNRYcZ9HMsiAD9QUCseRKTaLbjNJULMPSCrPeLHvgRhUgYZd",
  "key20": "yK6u7HbKRkdnWNrK1t1Mwwme1gJGoNxDqskEC5S2MhKc6ZUVfKX6CbzAPa4DT8ZjbH3Zcjum3wAbEVBnCsTfEvk",
  "key21": "5WXgg8ekqAV6qbfztjyBj94Nu1bSTWszvHit9dJHnAfcmb2ywA7L8ygcamvNn8UZGHHZsVYTym8jS2PzquPGvjS",
  "key22": "5vqECSKd4cLhYC1JfEbALUGQiR5T7ehSPCFGAeWiWDt3KGdWWiK9W96N1Yk1hSCub2t892prqeCPKsUyiybNP3Uu",
  "key23": "5wZ2fne9K9PUoW41yNpUAy7JASopd6gtF2CEsuCi9162e6B8dgbgQLJqx8JFSHFcTofp28DQf2BYuVFyPfa6E1G1",
  "key24": "2218P3uBhzuBYVTth7So7kzXZqVErhDDRZeAZSwHexiEqpC2UAyq6YNTwnXGfGdCFwYscmeKEeHKHiUjsgHHfABq",
  "key25": "5f4Mfgbc9JG4JHVbXL77SgZLmGDbQjxnL8GBrW7PS12DvqRFTKtwYfzRChw9yrNCBVsPf2NcnpWD16e5aEw9mzdA",
  "key26": "qwpDj59Y2XUCtoDbijHWyvaiiusUenuhi5oxBjdqFbgQDCMdMWwQ9r5Bm6GP9Pmmb4wzKt9XUaSSrQgkPnVkmcv",
  "key27": "QRGve8sRE3vKkakEHrsZLUtHmUBkbv72CBGLa5bDre3pTG2UDBFnDRBvS9jVAgCmZsYj32Qy7iAeEVajnNr4RkX",
  "key28": "3vNvKeE7RUv7izrq61uG8jfmSAnzc6qwYs8RrgVxaiTRw3jH84gStNSByKqKPrGXisM6QS1TwoecdfvBoqNeyEZP",
  "key29": "5ieBx1mXxhirXHdyiEPipqR6pnpFfbaZcTfqEEDfJUp19ghtg23j6x6cmQjq7M1TnVrLJhWEwkbZBjWrr3jTAHng",
  "key30": "4yhWXhJQX5KXkufTzYtWDFYHwF3gekrP4ULNkLHmxn3i8ZKXyKdtChzB4vsqRSxuAQ51PjKhdoec7iteLYxJo8BD",
  "key31": "Lm5DYcZCXGqh2ExzKTtMc5iLdiwv9aAvBxrvjabRgKWeP4uHEr5tTHcXGLdV2WJ2SQXmNHAZ8oHpMFyonCZspgc",
  "key32": "kJEnUqhhrGR1RDXWY2XdwsSsnwuDy5pW8EtLoRszCrbqfcR3GZhdVodT9Zzx7KydBMUByQUZ5v7erag8zVeRRSE",
  "key33": "bhhb91bW6PvGRMbM5zSpxWxiAqPQHZ75JWv6BBiSsNexsNjPtaajotQdcouxJxk4DgoqkWS7ifQ4xARxpJSRodu",
  "key34": "5VBsdHiVyUTobgtkmrANqCveT3wfZ4BySjXMKsbu3fPyoC1gffRUW8SHaFXHwEHNW1GMg5SRggf9Jwyd3iDdE4D1",
  "key35": "2CrE5FpGAGThaXpg7NKdsGQsokgYqgTyzRcw6i4pkigT4uFuf89vpnKkcEgZBf26satrejQeoToduyXBqp6k76CY",
  "key36": "49p7VfP224nRcGEP3d1ontwDBSJdRyTxdAQ6G4yoA3g8x7d2CR7uARtVZ8FucA1sRRxdcZRBR4vbpxK4fCKHPiTv",
  "key37": "4sCYWtSYC3XFzHKW6vGoViMuQpQ91NyPqmPHAzu9dmV33dWXcagPAkTAEg2NUHmtiM9LXVUQgNFPZE9HiqAGezBJ"
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
