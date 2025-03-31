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
    "4R4c3eKu1xhshyfHyKX8kzZpJSKnThcXb7KDt243EXkagemhSAhnkG6B2ZPQsCUaiiXt7LQnypXp44uk2aM1LQtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dPSiHZuKXDtZBkAVRCTrPrLDFYT9TgpVLSYuqEy5LhPn36uXo7WxMDhbmNqMcNt61tKz4wyjti8xxpGnC3yCAWZ",
  "key1": "2FULRhMRch6TncZRqdqsVTdemQsqJvSkPTaCfqisuW71BAB883CJpuwjXF7PcUQHjmqH3TwScb1yvcTXwHcD6hg9",
  "key2": "4aXLSsjd2v63cSQTfLm3x5iQA9pFambQnG3nWxVHgEbXjVowPP7yqoCQBefryK79RkvjCDHYfqeSkkFgrHQVJumv",
  "key3": "2yfM6EhjTfCafkE4ukxh9CbmaW4yRurue1Sq8zuKbXYxednUdBokWrgPSdfqfXN1XNFuokULr46Q82KS7Lig5w4L",
  "key4": "3kwBeFHp9J1McAfbtzikawtEWMjpDESQCMemCMXUhuMadwhjPjTmJx6eEvzNmVQ9BbLL2zgBpNdPS48ZHSJZWzFg",
  "key5": "bHZVojcx5wPCMNE2L5EHQsB9p77ZVfVLCFctgGHCGGZJzvVsDES38Kryypxko7K3corZbxQBaKvd1bZWDzxuGqP",
  "key6": "2RckDWCV37gdM3cAxrnX39PHRVPdHKYiTrKUDyw2zqHcSuzXhJ2gdiRC5WBWX8t2QpNCAp1zfQitC42942DQEdwa",
  "key7": "5ehEacRMJiUxZBZoDVZci9SGYK5xGx7YY5SRAS4aVko5PoWhvZa8AAy4XxukTbFeTCb3QcbN3J23orLu8tbde5aY",
  "key8": "v5FgAmcdfGisZDvQNEmvUxA6J5HG1JXHhFi1LiBeGYjvZUht2WaLVSrMe7rSGeHZ1rvirXSPhc3iH8SHAUDj6cm",
  "key9": "4c7BfSgwVd6iEeTAQaSJqeZt3qsz1de6DR3PSeqVnrrtjvB3cH2EFErduaeA5X5vK79iQxA5bGzJjN7aCA4Na4qV",
  "key10": "2M5KGZmbk89vPBYVgZKyTucsnKZoxYVtdeSTMSTivKzHTVocGnZiUh8VYarj21W82kmatdnyErdziE3Z6BmyJQRn",
  "key11": "33yWgApwrs7uBSukRPve9UsKHtkw7q6Nk6eyoirSWXg8sNg42HeaVR1irKJTjDXXzEDZQ6ekrrg45KCbtP9qFEVy",
  "key12": "qx6LXGGbHi9i84vPag4t9nPreRX7tatkiyK4AbinmMPUyxJbh8weusLXGKbY3QxmnT9xHkU1vzu9oEu6A9FMEbf",
  "key13": "42TWcRsaN7horcMsM2Z4wwfwjcrSRBKCede5a4Ymb9TorjuxfCtZk96zvGK1LsXVxqW6xTb4hFWW67B7qUaguKeU",
  "key14": "eBmpG16VcnfPVU3vpKTTkiv5zyMHvnN97yQ5KtNq5NhkiP7jiRHXyCsqP6wBH4cuGMyrFPoi6ESS79yAK5NM7vS",
  "key15": "4KXXYx4y1BAZY8m3jRo1JxNbKotRPmJ5Snd2PyjiasWJr2hiZrwZuYcfKj2o3uZ2sBM1rs87LLonBiNUUueB67oi",
  "key16": "34j5v6f6yztnnHLpe5nF4HyBRRHvBMVb3WRPcCWdZoG4rrUcsWiKiChmvHFn3jN38Lxg5ioPyQMvDRnvDMqmZJR4",
  "key17": "2vwFEkC4PpkNnYG8kFQi5Lu1EdHtEpZLBrtFDTsS5CKvMWiDE2a7cKshJv3GVpLXgQZzj3GiwR9uqWZSY4qg6qeJ",
  "key18": "258m12CtuaNkJtRNWpzmw9FdD8k1wC6hbZ9LSUqVqnVtbfvYLBD8tYFPQsvJQ9f63pGtMB3nk5h8h3DP14HpknYZ",
  "key19": "BrjcqtM2xxF1bjaqo3bQUkZ9Rotr5ARFjMRgxt8kmwBiRLMaoM5y7FfdYrsASg9nunbtixfPHhB5BpjEUNeDXqa",
  "key20": "b87YEnxMiERR4CYgpZY9EHjExSjmWqF6dcUoYFmQk2MtKexrsEpVW2eA2N7aCZscXBLpgT3qTHKdYrGaESvWVXg",
  "key21": "5CqoXFytdjgaXypLA5eVCbcddGe32HKDXYwqZ2J2uZPpZS7cVzE3NAug73vCBSYCgkg3HAKYkYLk6JUrvy3i9aoR",
  "key22": "4j9BAXVdrZs6VDwkbG7MpKYbjnRR7mQAue6zzQd62saHjznZsutqjEZTe8hoSawzRzmDUozaJqJKYb9sBUfg5Pws",
  "key23": "2Z9jP8zVw9cQXmGXXVsXb8E6WMZzDmiQWz3pXSgUwXQ1sur3aBV1DShQEjsdgsYj7hk5hTJfv6Uir4NZnQPW96YE",
  "key24": "5gRQzJdtdDQTqrtPaDJKyRkFgNFo29gEb7Ug3qLVCS4bFrtS6pGf916qcvzGVSRDnYjpFNqJ68gjzBGgcM1jQVYb",
  "key25": "hYC4XG8TqMzc2eE56LE9omuQ8o7unqnqr5Nz87MqadJmwLZsBSQY6dyiK9zknivFmFU3dT21kP2wCLZzRtkRPo5",
  "key26": "i7Lw7z8cQegqg2d53dFC2Gv6mnBP7jY3CM13jvYF6FN57KxtsryzGS4vQauQknpsQspPogi2cm7D4MBQKTTS8yG",
  "key27": "4pgDc7fsX3ZCBvZqJoumBcu18Aq2cAd7EuBpsGxdZRdPxR1YBKPyWv85jwRxqdLJYeRNP3y2d1f1CXwaxFCJW8UV",
  "key28": "387oERmTcvWHS7vGbxu37ig9maJVZqYFTGT6V35wN2Ve7yj1K27vVW3CfyYWxaMncncpxUp3TsVF5tCKxgdPfGqQ",
  "key29": "bVFVHSDm6qaXRHGVEjRFCA5szQeLBAKDaJsLMYp8j69Yf6NGdxiLinLix29SDs1kSFTSY3n7CAyogKu2GRawwAp",
  "key30": "2QJt4oh6LgcQPBfzzGuLwRysAHjyAMnPuvKSPpw3jEB1CALuUnGhFhYSvSqpYzKTvNa6GTZkMWo6SNfF3mp6V6bk",
  "key31": "3hQxmzucH4YKqZZ6PRgnxA32mGZJ5RHgLKykR5Vm6DC2TqD1TZGTdcm2GgrKGjtexrWJR4HupuwXQh5ESbuRS5M7",
  "key32": "3xJKX8jJHaZHh4J7jhTDeAp7EJ3ViZJCLmzfQSjDajXwyzxArpEZeES5ckbug3z7Nhn15mdx5DkSjtA6dp2z6F93",
  "key33": "5tcSRaEiyjuKY9JrCrWp2MnAeffVhj5Hamh6bNyuYxTAnX5BjXb21jsRyNhFR1fzFrFo9HEr5kqTJ3CqyqV3NxGc",
  "key34": "5msZCtYsFAUjiazK4NBSHB2qPgYzxn2iQAfJmCHdaD8ZtMjo8ycfcyz3svD316cZgrxuqPM1rMMH7t3FCFvRVNoU",
  "key35": "5cVwRTxbgfPemNhuzPag4tVnLmoJkCzZSi6HTYXU5uUVQhnitwBp31Kh86ETA8Zf8gtDFs56tewHmJcSUymroTpv",
  "key36": "59pDKMrEDiMPnD6YARwQhVZuN1APVNmGLX8RiAacKm9KRLmTyCCEBYQiQzCAPMkozmKauNH99GknMkca9gobrrJ4",
  "key37": "1YjakESvA1LV8yzNoiVxHq5jysrkRCh6kfGqyHmY8AQp8MW9Geq1jD49KLEqqAAd13yuHM3dDSiN5KhqnywbyL4",
  "key38": "4j5QK2DxxTf68T8kZcjYY4aLiJwbJij3y1vMbaxJtzyk7jDxgyEQzUchYx6oBb4qVDDNmcK4tvfzx4y18MR47juT",
  "key39": "3hGjiVmr7d2wDPbiaLBGrJuFdigYZRw9c79FkYxowMY2s46mh5ugn4owWghoNNLHwBXqr9hZmWiqvWP9WKm6qLhk",
  "key40": "38Gsm4YYNSuDzEJjAgWrEfBspXK6JfAdLnoZ3FqVLgKucaqZb3T7zzFwxYJVZtSTPh7Sn3eyATUYSGfGhToL6mrM",
  "key41": "42Ce4NojJwJJL9LzNrFXHH5Uu2EngBYeLT5eQP16fvSC4fAKS3Z3DUvDsHwzUrzJbiEazaDC2rY4GrkhXDqSaTCo"
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
