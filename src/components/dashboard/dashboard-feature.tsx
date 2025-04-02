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
    "2rThUEDumiacSzNHn2sUdSYkzh9cnsVFmGntGibPXrfh3MctbTbmYMYmDHZYGf3m3K9tQZtf9CS2o4fsDb4ZneLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yeLfC7yQdbcA1vxLsfJugrxuV2XmYv4pJH4R7ShQUkXuQQw9wEhKouDRumEEV5Fs6d3okuKoW6LNaJyTNTDjPkL",
  "key1": "RZqKB4kiR4fPR9tENvjsD1NpDfZdoUSKxQgTKrcugr4t568a4Ns4e4MzjVppUHa6GoV49v1PSPXW7RFQxbf7FPn",
  "key2": "3qYh62SXm6R2mHRwnEiHhXEuzxdmN51mvks9VrGkXsz76VyBpBnw2Zrt8VzTFyHUgzbZcb9XowAGwyLd7r6xccHD",
  "key3": "23HEjE1Fj1r9RPh5qM5TthzoZG6z6Thc6UKhnbctMJui3knUdxs25oE6HiMJdnJrW8DyojDD4wxoinafyGzR9aaS",
  "key4": "4KEJKca222M8pJaaP1ni2Z4vSXeYHafArDXaX3E64H7S4Gd3Bk4kYYuHnbZi2Ecb6zWMbJW6MdcMNVowgf8PKuVJ",
  "key5": "5UxJ6JPQm91CvDshANbaHekqU24VU8hyEiLavj1BU9RghaZ6wLFutcCy4kGQ5GAnaYNohr8PDCNMrD5fBT5Mee6P",
  "key6": "3Uurtsm88wAq8URwbbvecSTECDGpbs9LgQMD5aRixAeUZtUWmiZRSZMnu9Gwx92MWf8C9r33sCVbrK9emdHYfuZ5",
  "key7": "5pRZkfdWktmrXn792R3ruTFLiuVThan4kGPC9hZvv5mXSm98Y5hGBwVzCwW3hsXexYWjwirxTfRcbLtwcJPVVDwc",
  "key8": "4VALTEQpmnuSZikizVe574KVUhYFa3CsCNwWh3V5khCZcGj32weVUykBJnQDKt2ER5mPMVJEPwqrq2htFvEmgqna",
  "key9": "51iW6Au4BjMGfR7M6cMsigN9iy1WP3o9mo9jX6Z1wdHPWV4iyHVdb5SzxJtjqcDE1mmFEbKG14341XXcP3SD12ud",
  "key10": "3W8tynoQ6n5sHXfHBGFpebxAyUzLfb9hH68Tdp3DFjU4CrKjMm4fxxS8MVeayNWm5vxTU99q88Z547bm5EF5mUah",
  "key11": "3genw7jayMhZeV2mNXMYUxb2nx2App8i9vfScE8FkhXN2oaJsag1VG3SoguAWH7w7wdubnRLXonEcudKZ66SD4dx",
  "key12": "jvHcq1k9ARhetbNPckYLpFG6K74ojNH2C89FQMd1wk6gGiZmCFfetkF1x9Po3kZj6KRmYm2z8V4fqte3QEasU1o",
  "key13": "67JmnFp3cRyscvTSJVt21187ArAMP8n6hwT4sFasYKCdZsEGurLfsFwHZWeF9eHTzufeiwCxzwE5NhUfT5Nm7pQ2",
  "key14": "2rqyvY7XU37tTeTwz4oPuAsE8VWdaWEg2Me8b3GX8iqHpvyq5FDd1oMxYcYrG94SxDpqzHLqmsUSwQftde9d1hJr",
  "key15": "5Zp32WwkCi4HXyJv6vSS6zggcxcxyyHck7aeHBwavZuXq4k2JGisaSr6nemkBkLJA4Brx9YvEm8VWNgcr9n4bU8P",
  "key16": "3rcsWJmLvZYZBextfUz4v2HrE9uGJM7dQzZAUQ3euW3VHVBVa3yZTv1bi1X2Bspfpd3b9uAbPTF33yqJ95ChLVJ",
  "key17": "4i6zNqBFxRkzckpvaBYu2uqadqLuueYxMyCpphWCR5PqEeifjNiHm1k8VzhHJPgjikY22YZGbJCGWLuBm8QPRDXs",
  "key18": "ceywv1MsJ39pWaRKThyMhvb6NXUVHKjm6BKWMHohLm9F9uEohPNDfmcfxfq6hgCye4HbbArV2wsxLXyDGE5T4v8",
  "key19": "ZbCTdMfKbqyG6M2qQ6cS4cbjEYJVEq9GmHjeK8fdcqHYW8mRvMTmYCBqZB3a5wSBYXKvDQ6PooGhyTz1bpN5HNp",
  "key20": "2m3k9jgy5hPBXt6Xoz4AEqZ2Rn8ExFnf15TX4qBxRDZXos8AwRjgDZjwA1yCiNZu3Wj8peiFjFo4HDdLqdhPrDuj",
  "key21": "4LuNdLwF75UEHeguqvt4HZRYKvZqrtEoyx1CxrS2Kb6tVX1LJLag4AenM5vJuRvrjJQjdS4XmteTgVE1SK9ZDpiD",
  "key22": "GYQ2A6fmb64LM5ZptfTqHMyo997mag9AiimVG79kaVM4qpdJBCS8kqaZuXB3b1ZztCQpcDiinaAxmouDBvEix9R",
  "key23": "4UEgyPHxgS593P2xNArisyzSq8iij6jjU6xmhnthZHh9PVdJj8Q3UMxJNNQgDchyQHH69KCwcg2yUSHZATTq9fFu",
  "key24": "5TrkPVHB9fEtft8VogEUDVVkoAv2KDn8AUCZmLBSGsKDV6qvEAvjZ7FzSLKReHFNTwuZfookMtYdfQDjqTRFdgsL",
  "key25": "22umDicfHhXGQ88mg7RqtwV3GD5DUBWRSKeKpeUJawCAakZQF6CQUeghTQu6pfkcpWyjm7ZLNUfHuUTJwJ6jng1r",
  "key26": "6Q7YsK394gEUGwfSPQRc8q7qKxgpatZKq2GEVAHGcpWPVsZkmSUqXS1JNcfYQxGa6AkmrDbnYUWnmKihTFhCL5h",
  "key27": "4fo5FiEQF6eWFD24SG6QoCtku2A4LWF4QxGySXhsPcb4sg4LCz6gL9aDmjrUADhWxJtaepPeWir3iVRyKXEawf7i",
  "key28": "5SqVZxHFQ1tfSXTFstRF4kSimEwy4SGT7NKj9BTmSex7mZqjGhBDRBz8Wzd77eYnGrigwFwbaG7PTjr83AVmGbcm",
  "key29": "4xyVEPrETruXAmT1jkqwMReV5BgKBzqBNWNPHGurKK1vDz8gNyiD73R8gNMVqUcGGEvenRC7ACVZFPfRtGuXY2u",
  "key30": "2tJe5AeSzy5zThocTKBSykdfosv7ZtX2vKJg5AxgXJQuzEvyWQtGyjUEvfERrC2Q6Q94JFUmxqYCEkHyYYvk3aDs",
  "key31": "4iPe9pSjDPqgwaZadP4XZs2ycomQFk7W9sAMTkkEVk7KdtMGYU3XHZsm9RYwNd2is1JYDQviEbv2QDC189xftCXH"
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
