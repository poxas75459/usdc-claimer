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
    "3qaeLmT2yAW1Pk5m1y9GdzmYYErd3K9k2Z3hXwmo7wd8SkZQgV28bozVHqGfkVh7HFhDxDfM7hXdQrWm7aaHS36e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fmBx4686zH2qQJFFxBvTQ7SzBXt33MZDLS1ik8XD4gYiUM7kPweXTrazmNb53YKDb2U9GekLexC4DYR894v7KVk",
  "key1": "43kHWF5SaAbaoGZ6sXi7FxZ5dHQtj73d5LB3nCT17vKbmHH1QQq8pz9NzohNRYYm7C2S3yycJM4RccY1hRj9wF1J",
  "key2": "53K9jpYeriGWctDCuq1Af42y1wMsrCsREczZEFoE6BFvQ7oug6BQDGXwEiQsNixhJGoNXFmPbdcZMg1MgCD8BXmZ",
  "key3": "3A6MKKQTfZiTU1mf5o1gniNfTdrW1ndvxcmbfZknBLDBJcMaBXg2YRpUb3hqsyQznByhTdkkDmYatEJpbYM7PH1y",
  "key4": "dWp4ex6A3M22RGuiGtYDRTG9Acpnmb3i8nnAu9ZHRxBNcovaR7QjzS4CCRhBVvi7V1waW6c1eRBN22BhS28U6w7",
  "key5": "24Y8cYmLhYkW7CxACYSzsZwUt6CKV9vqWcY1cpznwoGQofDaUPXwtjFK3jZ7hmRiJmUdikzUV98pASapRvAbRLdJ",
  "key6": "36MbJ88D4dG1ZDUKjXv2kzJo3hRhj7Aj1c9oinuKLsPe3cV5vpgBPQ7a6iDYahdPXrAZYSUvRwBG5cRDKwWXiqAD",
  "key7": "3KWe31i2arcv3KZhpXUDYL63oBFjoC187h2oGLKhZtQNQNRkPmocMmLPvVBpiE8YP6BXcaKf842n8V3aCj7knSXb",
  "key8": "3ZMvVT2tH7RRMcnnjbnKVWhsX4hV6Gj57izQuxgu1YAw9VahrRvrBzw8jHT6T9HVy2C6eCSEoZeQep2pbAHdrvyf",
  "key9": "4jVv17jsDDqbdptv5kQwAe7dfsAG5ufHPtsj5DbkxAfDoWEbGMfuNNaNwf3wefvCv7xqpMwkD8kzF3Noj2yaRLey",
  "key10": "2q14hd7QUBrUCUhddZTvYEoRZdh4FfhRceCh3n5GkTGvqLHWWRZYZDRWWMa41hCX7LpP82YgtnSjMTj8cmuHKLQa",
  "key11": "5xD8zqRfhCGVV9CtVg9LkMrA8AxvA2rwJfW5mo8ykZW61Phtr1RLLTQAfFsaLSi91LyyzRTTzyZJTWkfVtymYKti",
  "key12": "254y3hFw9P9kktdVkXNXDsk6BoBnAZy1Bg6N561wciJzdLq5sevHLYotniq8ENq2KbUM3Uh7qoGHFkVhJnTK9uKN",
  "key13": "T4i1JF3tmy4tPmAo3mEt73MkHwGtEVyfduzgGNGupTbaq5bvB9Fc8st6o8Lpj89PuUqsPCUVpwLHc5WvkFb99SC",
  "key14": "4QN1ecNwUzmqHQEep7bnEQCBYXzbL7RQ6WxyfJGqQRK8VNa5Q2Edt5A4ZxmWqgazeD2zb7eWw3uPMqrPnV6y8VAY",
  "key15": "3iq5S5eKsKRodzNZTwVSQxwbfFDcJP3gWscr2TWc5pQ6FJxxz9whfmtsERe7XXXzWqiXWxz7WbpnEUBL8QAhA5Kw",
  "key16": "5k9YKFtHS6FugmocKQKTxMrrKRZ4zfsNPYk5qPMgcNUxcBucyoBeNxiUQYFZTKD9fTK6em4iiT86fCDHW84Sc9jD",
  "key17": "67ARPaEzuYyKvfHkGPLmNhZuMufrbFDqrVxnZrDcAjcgE4otRv2QaVJgvymyQF2icdzLtsqbkeBoT6pAsYmK5BqR",
  "key18": "3xBfo23W6dGm6KV4o9tHCdkhLkmMB6orCY8jNZXsfGegD9h5HFUzGxEuN5S768cPVjeBffkia7NEN5AB9cMHYL6n",
  "key19": "4peECDN3XezwoJpK2RVzyjHQTkduF2Lq4Dr5kamwfFE3gF18Nt3k9DYJJeo2Yb7JhfeCGmY9NxbpqHFiuC11T86f",
  "key20": "4E1NQvVam9QTaWWafH3PtCAfKsCAh8ZiGH7kUSC5DbFt6GXWBCvY1GehfhEfps3VjwcFiwMmDxhZEe2FaHb5e32d",
  "key21": "2HBic7z6vv8NdwAj2r54te3WcGLEPKoyuPwQt6J3guh5xnK6KHuddbgxoEUGqiB4aJwaAHehVb9kBLeYJr2ivBaG",
  "key22": "5ozaexCx5wo5WziDMwPN8DPV9jS74y474jWVxMSqjDZRFgzAuRjtUheyy6GtaYgqUbHkWkkDcXW843V2sdnxLPe7",
  "key23": "WvuMbcxCoGp6Kabh6vk5fLG2UHgxbftjw2RP29b5eiTan5UTdfEQ6FQQyVYHTbwdaKmMrhs4ESzr4dEEsxW5zuD",
  "key24": "3qWaGeMgeAniMb1CiHR3jwoJrmB8vuvaQ9Dw8Hg63HNwP3daFs978uMhFmytW4iJBZf99ruZ6iMRoPVN11oSJVdJ",
  "key25": "4WbKaT6WUABgraF6ws3E2HwiYTBK9nie8DC25EuMxLA3GYo6Z7yS3zRPGiQjWMjhbWcTD2nzfUciCZpd7zDqytcG",
  "key26": "4ZeScQxHm5q6wu1EvXEzh1YYwdUp7ytNiqPtcxru1yQicNWHo4KY6xZfm5D4PqYAroVp1xwz8fVUHHnxQSkYW4ad",
  "key27": "5n9cUySZbNBb9C8PA7TPSZvaf2XLomGGU2B8u9A4vc9fzQWERP1YWMUGRGw4wAqntrYeiraxYx6kbeRCmLP8VfSy",
  "key28": "3GT6nwPTj1ZQ7SiqUbyZCwXiVmdzZWFNtzfu3NJChYDtJYJ3sTZgib1b2vi7k5XY9DrMyNxCYoMF1QJrAHT1iytj",
  "key29": "5uYda2ci8usAGvgVJ4fu6cB88aJKdBkwgUbgg11oTPcYZdkDD7NrCx8PsUPudnTfeX9Zx5nkywpwKPtAcqq8FPoT",
  "key30": "5tVK3eHRCTwhrwaVM8SfjvsuNEdNzfVgBEzjavrehTWJ1qweuhvMEht6YTuWUpsNQJY3XaifnoKWVNp35Ed9amQe",
  "key31": "3DbEKYWonhYhcTj5S6E34gsWjYUvyvwaTyNtWSBsNqu3ZbB48Fc8r56hcAsHJaVV9uXP5NCwo3c2963ejZoQvuR4",
  "key32": "4tkz4tmfiKXNdPtdCUxqCqPUfGWUYV6dNqw6SJHH2zGsDfs7tg6pyfsYfpaF6LERmC9V3V9axDYBYYU18Ddv9HXL"
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
