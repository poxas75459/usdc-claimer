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
    "wr18em5nLSSmJWhLoJRuH1x8KGHKwrrKTt98fsE9WQ9fmKkfYkihMZ1wa2iaTD5d7xfPS1JBojr9hvBgJrXbTZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39PCD32SMbCv1ft7QWJ1sKAEQku4MNG8rwmCurhkhdfsdAJtHJguRHJsUAFj4Co32cWiUwcm7EUGzpE3ZoKYdhB4",
  "key1": "544pDMBHiS4Q5aZPNqETLampvaE1rD5G423FqtsgzNe2GMSkWemZ3AfBUtuoWKdHxge3mfUEFvoCyLp2DsFBTpAD",
  "key2": "D3cnBkiqcYjKAZ722SdXt4sRLqKsZwMkWnV29hrb6XTaRo9r4TwKz23Sj8GoFnHprW9fuUtGwLRrVJKiG4kzQ5V",
  "key3": "3z8cpNfj9NkBvAxMJe7koJbjYNpGtFoFeubqtPN4LshbMN3uXkC4eXDSbEDPsGh5wubHed695ryWR9GxMn6u66SR",
  "key4": "GyaUDqBKdT3MnhFHuGLN6nYGkdZzSyW6Acj3KahKzo6eUqGcfjKQCcHGJ15Jbbwxs7wHHSRqp6o8DKKZh6JCHZQ",
  "key5": "4Ry7McH8LrD2FAZfjAjTGrBrE7CFuBfkDov9xYygxSyuCvtriPMgG81LyZMb5szHX3MSLJWXn5LAYcoQxngUYERv",
  "key6": "3XNK27vby2i71NSHtGqay5tcZJ5mEgxYXLdccfhz4Lr7GFjBKV1tL8YqLSnmdGiFSxVEaEgaafQwxBZ5RtgtDthJ",
  "key7": "2TewmoQBxtiYTCYkJDrWB26vWGjJ5Z3Up3DWhDsbyhPgbG9pQnk1n5Ra5fxSH5FZcdD1UTAUgdUK6XnWwDCw9tjB",
  "key8": "4pnqh6xPbS6x2UF4Guaz7czTazPa8wiKKZ11WvGPtmu7pjhj6F6gy7qeAntFLqLoX1arbkDceFDxjPxj5hctu4Zk",
  "key9": "49aT7TJrzCZmi7V3tMSv2WiQgGLz5k5cvXMheTdZMmAn8NbMgHWzeet5H7gZRNmCMorWuTBZaUqm7yhnJsmcaGA1",
  "key10": "5aUVdL1ZFZTvQBnTRUjqV52jqwEeCYfuiuCwQbvFMjSjcLZZr1pUcMHDp4TNsUUAgm3NrZHf9otypHTcm8jY3mHe",
  "key11": "31dWStCzY5LEtDGHYfs69TxdmHFYxJE3HUiBcKn6FKBxgN9bGovBNK471z51Ds67dcXqr1wYs6hSn1V5siWpjZjs",
  "key12": "49SYKedfvycRvYVn7q5tF1VEyoLfXM8W5SiWyS8tQvYFCMi98Sto7CB2No2SMsHdfXpSpMvxaeGYU57uhP6YxSs6",
  "key13": "3pijJjaZo7U5jLxdnv4jMD5UJmFSGcVnyvsvSVLXpEKc2LNFJyPok17RrtsRHCqNQqxyj14hdJHQ6uMYq8gF3bgE",
  "key14": "iEfYD42AZEMtZ9YiBrBDQ7yLdH6vUgA4u7WMX6SETVFQTssQf8xQR3v82RcD5HfbVsJJFY8RJRLv5nqopCteWjG",
  "key15": "62SSC9cucGk3yLC9dJMWpEEnqFUHiBt5L1zLDZcbKadeq8Qh3LURzRtFKpVWyfbT4Ab8nK3cch1LLE7GMc9dRAoX",
  "key16": "23JK8KEy533pzNqvTz5hyJvRB3cZEwRNfLkSgbrpzA5nh7xSxqvcnPuxzqWucCDBJ628azpeZeD1DB3jrbgufYt6",
  "key17": "2mPW6od3Ytj5tNWNkvRRYr6GK5P2NVttAcUXdNCsSkcNR7rbZ4bkayxPNQtgy1AdcDsdwHs1697SV4yVnWh9GiS9",
  "key18": "3QQhGcd4sj6AF8WcqsjthrychUUYrGiSx5HkaXQgohaWXS6hUCDhvtKMUxRhWxcjuEnB7NNe7isC8Ju2nMdU5Amm",
  "key19": "Fah23fknnyvkcUWqaFpHT4tX6dMtKHY93epWCjtF4i4qestrUZivyKrY49AYFoJ3bFuzNVqd48H9qQwv6MMnQeC",
  "key20": "2RqzsK3hk6bQR6PmZh3pJCJPTXw6ZKoKQXZ4J1frEt7kG5D5cuPGXtx45mrUTJqF4ixDCP6b9jeiWfBBXQnEmAAr",
  "key21": "2mVFRDFhbvNuLx4zzdAoZKcfMfhc8j6njvSi4Qi9Fi1vZTdqAG2XhMSSLa9MLVujkH35mnYPw8WALVTVDVDnoBLw",
  "key22": "57FxDDMXPiEft7ALjsbGFUHuUDdbLVaSkwnDBjS1u3KrnPXHiqG1YobYKCvPShPdN1swme1bhd9RJvUkXso1wHW3",
  "key23": "RKZysur36HxPbjcFr2m7fdVZB2Dp3S7smCULYUHGksCfsmurU6pbYj9k3BBcMARqagjNRk7gPRus3pWeJWtbMUr",
  "key24": "3Dr3ZeDBm6eQUVqjZXACAU8XchpPwR2tYXQLGmazTDcb6fB6ojAkjTckfUFnuKp2rkikDsYoXHzG1mew1akC8cDQ",
  "key25": "5oikbkDh5zMJufBsiAnR9Uy2B164x5wsMdnsJBTqmUaM8HDbc9nHn7SWuTnwwYfqmSsi5RA3EvMXRCBmcgADck9d",
  "key26": "CSAjV1k6uGQsGfvQQhKyMG9XxxGoTqN5o2HXTi3sUvY5VsRh5sohdKTwGyGtm4vAY9eFh1u6pfCmFnbVJfMVnzH",
  "key27": "4Pgro1aNo6FfQiLMsfAV3ggzebtCvbRqaEdWCPeUNjZQwEfzB8GP8y11CQqQ4rTGvS3nLj2vqY5VK5j51pLg9x4Y",
  "key28": "2iWWspixgzik6HNoYLtDVZqgTU6U1XRUAdmaSmqCGSwzqhps5VqdEVc2XJCvqXHHfbEshV9WsF1V2CBP9dF74aJe",
  "key29": "5kCsZX6S3Jbe8pgB19DnX35SL8cz2Yfph6qVXQGkaroM2hN9ccnrxKtgKA136A81bE2WVhRPLyce9cQw2FnZZJ4U",
  "key30": "5w6xoffCNd4X2XGhVLAQcfDzuoVBTNhVkeVkHpRJDNFZeCi4zLzRWmcNNtLfnxLNYd1GuTGhdsuXrkycUkB4iZyJ",
  "key31": "3rPoQiSMCApUye13mkGrdnwD8vo4jXvkCcyJYyfyyHiry8Y84JHKxzbn7K2vh797rrjH5aX4PMuT6pXvt5xD8hXx",
  "key32": "3hximpV5x343NNnTJv1dQUipENioH4SUMiYZLoGeWppa3idKjDH3LP2YJct7Q9zeHfSs6jDE4cZ596zvBSFpBmpv",
  "key33": "3xJ9p5xW8RFJSgpJfxyNUdSd2ZExj5t5czctkhudR9Q7b2qoZ3Mv1TtZrdeKfbYP1q7z5mMJtRxfoJRJ65YECFF3",
  "key34": "3ALNyNKzrBNg83HQ3zpwxHeZDz4LrhnwnTajjQ7BrC1rHtFT4mzC8Ac924iKmGmXQ3rUxbchuRExz2bJeah3ygdt",
  "key35": "4qsvfDKm9KeDDYHHBoEN7e8zyvp7nBHzLjPhTtBdKDUrGrPW7Amj2UMutRXviU25nyWkbv1ApLiS8cjZeuyHemsk",
  "key36": "4YH254YCXjLsTU4n7MVufDY6N4S7ap7M7jNYPwfckvgcpiNCeBR3zL5Mz92Ts9vZ9K59WuDfJXPzsodqfXJ3iLHg",
  "key37": "51fGtkPCXR5NzY5DveLZEf4VXFXuJKau4AnJz1ZmhiGAwitP5LixozBKWmUSbSFcYwYmBApKLLmeyQ84qmEPAfh"
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
