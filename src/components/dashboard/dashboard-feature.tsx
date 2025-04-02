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
    "5hHnzTZZ39qREE2o8uA5x8BAChnPCoGemztNBxi4dWoDyMsM6zw66WxBjKek5VZmpwiCjHeCftsSjucixutyEuAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r7K5vXqc1rsn3zbvRtPjdiMeTqDJU9CAqivnLRhcFg5cppUaKcebjaMDXknyMaDv4iKr5soDzK5PPQ6YHyU8zBD",
  "key1": "55vhrJNA6qbvVQhka2FaR9xhEUcA1p1tXq4JWeBamk9MWRY8PqECRLmwbWuxGaMyvXd5MD3Yhkq9ccd9etnrSU4i",
  "key2": "41XyGPxyvkzcC5UGzb8o4gL7BY6zcgCovsoMbSQS4E9wJHUJyALciB2khTEE5xPTytjwFj8rjYsXnLtDjse9DQzh",
  "key3": "UwpUdrcFcufTdtPtavu8uvt6GyTXYiKxUQ4MHSRmxWYAUvoG5ZVn3njADsxj1vcxPmB42ZcUVEhuZRZnzqxvxXL",
  "key4": "3hfPppLQpbkJn1bYqXimraTHnFDWsXyVSWvndGbF6deMDMg1wrHZpL9zgsNDHtdwBov2F2dYEwUpDbn2YdwUREbD",
  "key5": "3mSpGTTQTP2NQ7hu2gKvXZmqaHeSD9depmWFXCqnq45CLYxfWuEBiQPSddde8Gu43eGNv4T93nUGALQg4BV639V9",
  "key6": "63P4Qi3zvqZ3MRHAvbufAjzR3TVHCYexhNp9Wakteav4sPAk2D9R1AehFVky19CsmrXUBjKrRyHrxA2rQ8bJhwM",
  "key7": "5GdEWiJJ9XLkfCjmZgNSyn57orbZnVADdnZ8e6QYCoBPrGnFqvt2FbFQKen3rEw1SfRCcvAAuDZLjsyMmyn1LyXf",
  "key8": "2sPjh2djmUqkF9Hi35NgVadda9rxFK2DER7hXwvx197t3qQz8r6zDKdFwbmpMUPL7NdC5Xx3zCxxQpobDrA2h3MV",
  "key9": "5RxuVbCB4VcTSAGQc6cvbur13S9SvDWTy2FyR8hfZ2iXMVqkdpU4gVy41Ph8oPi21WwT4SAic2ECyoLMdoqkiihu",
  "key10": "adCzusnHvzhUSewx53DiNLwEAGAEcTcpjiDUrCLQ58job2sXF4sdozLbYuwNZ9kCExrLKzS5pY1ufanqn8k84cg",
  "key11": "2TDUnL5UqeX1KUf6AgosWUXd4qMMiT7UGpdU8ooPQG6nVRuA5rx1hTKtjpCtTe89E93CRzmhwLfMBaf8bozD5hHc",
  "key12": "29DLiTiua5fbXvH878KdgjShMxh1RzD8ch6TkEeQiUrkRqLZc4RKQB3Fqqds5LpRJrt73TyxbiEUqZi7RyCzSrs8",
  "key13": "5wcimwbUYrn69AreW1DTRSQia7S5C56ouub6g3JTz17BWYvGp4WE1R81ZNaPgHyDkifU9fL6omApuvVkuscYrefZ",
  "key14": "Mo3DY17KXQLcBoqdd3qYyt2m5To1ASjMSfWEcDQUp9bp7YjR18XpopJhtF69ryY4W7iC86rFsMd7rTTnyeDcXss",
  "key15": "4e4VZNdDVbLJKWHbN7pcMtzXuA94YduSiG8ZwoacxweeuYzPqt8W4DcjvA9oiM1TS21NkBjb716k88FfNqG3X6m8",
  "key16": "4uCzVDxTejiy2ZtTkqbLRr5vsN6MBUVwJbnLcP7hEsGjxP5s9YRPFWdvkd1PhDVhWpey3RRdmkwRSe99kDn9xa9H",
  "key17": "4fDY3sWw6uLbzb7rjLkiFUz7AVMJf2JM3MXTLLFwc8ruEiTzz4sqb5soMQQet9Sk2dcZK6bXc1F5LQ6ZzuvhFpDu",
  "key18": "4wyQNyfBgFftXGQuGeWkSPhEhjBvzTeMnF3Hd9VrW1KrGscTEr5sr1Fp7cR7iM1uw2hFaqcCQPE8bFiJnpX5cy5H",
  "key19": "5oJzS38haBW59zdSNY5RiuRs3DKzqWrtm17rHg6j1PEFE6snmJynvHSjso6nMTYqD6eimWJRy4DyXSP2kwEnZ2mh",
  "key20": "5KSojkRTu4Dxm27ho248ubTfeRNwZBkqdAi22CWsMipnrfryPDb3EXSnvvuG8ojfacpvx3Sehe7Smrxn3CqXsdg7",
  "key21": "4mVr8NmJ7AgvifwRJu5ubsa3Cs8UtJvXPdb5yMh5U7yPr7xhmabz82Df1Tad47J4xsoxmsUibDTr1xDWf83rugFd",
  "key22": "3TXybGsayo7KeGQtfoWEkvZYRq8CmXSUi7h36tFLZ6rnkTv8mkEkXvpjm9Tty3PNvvrMtexSnBJ2JeZeoYph3iLs",
  "key23": "2cAovnsRcrverKX2GViCVtazBKcKKgzES8FHVz6qKaPQCT1kxVhGNqnB5ZtmJKeKCeaYHSvLfLn1fzmb4FBY7TSA",
  "key24": "jnEfRzfqiMYXfJj1ri3GjAjBpmCak2EB7c7ovuzBoqYqNV5hoYw5aL8a96dpKEzemMHPY5Ecfe9XrGZUKKfDmV4",
  "key25": "4eYiPzrvFpdLvaYr6NzhHHPfTLacjepZPys4oKdnhrq8mRL8M9gGAcBHm4aUmcegoFFAsNe4Wh5kKUWuQXG5q4kf",
  "key26": "4tgyPFKQXgGbLRpMAeARh9iP5rV7311nFz7ybv72GfR8JN5YZR4N4BXhiiJtsBdkYtF4JQCtQAFj49iXhTxfVUks",
  "key27": "4A6rb85NHJTmLtXDLPa6n7tFsYhipfCxZfMvkFB2zrBNGsmAwA2nXXhc4c7WPE62qbGuMmqQD1SSTGD3r9iGvQpi",
  "key28": "2uUhjCsi9qgp7mvtHX9xK8A5yjCjKzxoEhdUzUKLgpeQS1uw9WgHaNJ5TkcVZRab2SqhV8Cs8j1MTzxqPJQavi3p"
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
