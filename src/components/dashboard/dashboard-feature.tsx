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
    "2ZTuSJULjfZ86BPY116jitVKyVcvNbEpKLDWzYfyqnCRrkJGTvjUZ6Daf6voAizWzVmkzczHEMraNSPvosSNdg5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GVpPSACbNqks6urwjXmUT9YvsvHBPqLcKEHpsymMYnK4QHpxTBiLaP4gv6hS3Kv6xUsFeu1cJYWMPhS2Tx28eLs",
  "key1": "4MNRFP3ZNP29rpGKbKBnoNjZAXbYHKA1UU1vjnM9pkvZfTAgvszwpBJm8aaZGwtpnepSR5T5pVecSfj14H2Gmt27",
  "key2": "UAw6NZAQzK6KpiKjGRtPkkF1u37QTkiUreG64RYmZzA3VMMcR6xDyCtNQbrxri3Q75kD1WBnCnEJpvLoCsFC1sv",
  "key3": "286QLfRrnr5cck7SLqzP2Fv7iD6T2FKCkJxUVw2jyqyAYqDmHMLjYCdoYEhFkyNoo4XoL1ce75H4Zu85ZQCdfZas",
  "key4": "2jwGJ8sncA5yWTJt1dGztYTumxiXVrVxVa3FfGEzr4zGoEXev1YquwcHif4SWmHY1YTChqHVB1FsxfK65igaXQuV",
  "key5": "4d8dMcJSvWizCDs3BAsvjTFGfoFYhDdEJ36eUi9JzcaVpJV2EF4q25wBKQCiJfphHJiUSN9qHnyd2qJNR5MKTZRD",
  "key6": "49CE2Hx9DY2EKpNSGr2CR8V5vaaBF7sG7nw4Js3oBEhvyGwpA7ANuBTfw12Bhvg1LTbFXJVFJ7BgSY7ssV9Cp2hQ",
  "key7": "3spNKrf33aDZ1Nk4BCkgwF5x5CZq2jhVJshdx1GTEDQrpMbUrmTUgqH6v9UCHmYQvPkRopTHkGbsqPs4a2YJkNms",
  "key8": "2HznqovbGWKAza5wxoPWwvBSkioty1kqTzaV6HofsFPGmDdvPqbav4Lr9khZZmAKeP78vRy6G63bDhMe976ajVg4",
  "key9": "2ZHJWZVpSfFF73op5zBp9HcAtCpk38QySK2utedWEbTmwuek4qTMyUUPT9EavKZDeQbvcz8ExK2nyLViiHAnRisZ",
  "key10": "bEMSK38wxQw2HXqosaGC78uDW9Vq1h3zFzKxnJhV97wdbVcFBWrvqDsPvPjNB8vvxtma26zjgx7tNAvwAxdZt4R",
  "key11": "2fTkAvCZZKNk8k6temrXaAscGSdFYua4d8urvmcEkyZG5dgkoxPh122zV6D7rPiFyCksfck9uVK5UN3Kfke3h5Zj",
  "key12": "4h3rGEKeWumPuS2eBjk8YzSy5JKCtEkerJtFNjQHFwEseFvaQRp5vxYCirV5cd4kJUE9kZPMwBdUbYidhiowFPoX",
  "key13": "61ohMWhTRsZkxRprX86Y5njtCcQre3FwD2vesPwPHGgpwTVQ74SK73y4b3uuvqJXR1kFHabFC8oJVHDw8TP1JznM",
  "key14": "3AjqVHChUyqToWwfuzvFpWiu6FbeNYXa9QPaembMUUiGQXaZpvvGTb3WCUygimYhaVrykF383AHQz465UjY9kpz2",
  "key15": "579cZUXukq6XT9DKL781N8WKw6K5C1huGuHAukk1XP6AucswC9EHj8FDvJofDwy3S9vBFSaToXkvQB7vmNtCWX77",
  "key16": "WLyaAphBuztpuN2YwD3nWbgMdHtFDd61gd4z441EN65hoapMyx5rprn78hQ7fgJmAsCCkJ31Ti21b9L8ZLeeeaR",
  "key17": "RzfAmNTYTPXoXw58JrbdFArXVJJcF9oQc6q4m8CoqzPAimuxBG4yjVwcXgzLAMLmvZFXR7FbGbHog6TuCJHoxsi",
  "key18": "3yPQF71Vp9TZqNgkfZzZco1yX4c96WY2nVgQSjhBfraNCAVwDVrq7AACrMUC2W9iiEPjorRiFF1xNugEC5jaZQMW",
  "key19": "FZneLkR3ghmWR95qvZddayDRPnqEJ1B8vhNqu7ZPxygVKosv25GQUvbCv5HHYza3paQ95UdYmUHxEMV98DAXB76",
  "key20": "5EHkvSmgnpXzPsheVbxZC1nyHSYWtLo3GvMvjuDuUe8TdxuNVxKQVGt7xfhP5atcPNnLgWnUQQWcgArCKi4F4X9B",
  "key21": "572XGs6fYgVUDpta4ky7NsaPDjPEAqkzsRheZ1vYv61afozq2e9AwKhpWtGvY373NSjMQyuf6VsLL2Ef189NLT4v",
  "key22": "5pPrpQjTPyfVEadhtDAyK2xEFVcFrecw7FeKew6PPkZrMrZQCfeSRE331FSj6weroWLXfuVvGBJNupqcPsGyTmDL",
  "key23": "ACtTFQ4vN8HLsntqsX6TijH4dNPZccs4MNT8DakRxAG8VpiWKDYmCQoQNhGEfat2BQ6iTnaC9wM6YLLRYwRWNoU",
  "key24": "j3JSqzy7dzofDR1aCoewwsireBGjDViYSFFXDjQTE89MUYApbsGeo3LGLfHNb8eBZ7oZPTiG2tLDJJVW8nYrKCW",
  "key25": "2hATCw8Xv1Yie3p18grw59Mhps1kkfT4LpLS93JZS4wqBByidZBT7m2fQnLJq6AymBXTBeXDhurQNsAhqNgtZsp5",
  "key26": "4E8spxS2371e782mCLgBScHxJu9pckJr4yDAGMrQbmQcRWGwjJF63av4WsxFB8vFVVgBemeDxNH7po7Awg7Ngx9j",
  "key27": "Y6KHZpqUJYpvDUjobeNtw5ZAiqixJoignsBVcvYhxCMA1Ptgwtk7L5xH4Gko1cwriEi1gipqbGwdVys8y9XNPih",
  "key28": "aQEgsrua4TUg2FwzZBDNybLecfkyiRQDy7hMCYjgGPB8Yw78mjnHJVJoHm3iQFTDoic6QdrvkA1jcv89YKJZHTk"
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
