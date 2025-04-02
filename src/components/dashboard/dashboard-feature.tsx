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
    "49yUBfPrPzUaE8sEEZagEQiPFpwRo3D5ShtjmuXhskUZwmXJdVD1VzGvnMjTuKEMsUpCt6nNMPkr8wKdeE6ZUx9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QpRWAUP2Sjxhdo1SCCztZm1wszgUgdcwGaUuD16Prw1nAjVop2jqSXBX8XEJNPLSgQyyw4Q4GomYxa9cWdPdnJY",
  "key1": "44siawNqMt2x6WJVS7mBStVxgYqSZWhZwFHXv8hT586PyJwhQR2UTx7uYDjuSwVxuWsNtDMhiui7H5eoq8Nuzt2v",
  "key2": "44FpyHbSzQa9KwRG4jNMj3ejtxC4r9j9ACVj4cVmt2LKpxN4ybFVZaZETohohTDMsKFR2Rz173amX9bLvFTcv3J7",
  "key3": "2pSRQ3K2WUmjtGVq8F9aRFtpoLys3yHEqvSmRzVcv8CVR1CWwPd72abekBVyTS314ULAsQvCAMbYMZRy1aFR8RFq",
  "key4": "51eQKbvyMKYh2yG3BPCFf3mP3Rs6yG3AzPVfiXpxtuDH7aKSKVyWy6xwN7YJz8AU9Egxj6u782cE2oEpdUajTmXA",
  "key5": "2FbiU4CsBxE7mW5veoh9mGEsiwDTno5CxBDv43xyWbUoapNSTM3jHdi8PEzTZibDVVcRZrYkmw9xYDYX3DX2kXno",
  "key6": "4cj5jxs3N6ZVDTBdovqXe4YPqeAFZJ7KVWm4RWcpM6aRCdD6D4YnVWAuswRr5AmgxTZkWoy69fVJCb8VFL81ckj8",
  "key7": "rktzswtAsa2GFJCp6XaGcJt6cT9TFsaXyNpRTSm1yW9FzfU3HRCgmGRsJxJhPu6XAqpXBQebpcKxhJTTEXNFqdg",
  "key8": "3gFrN9VC4FHwFd4bH1MEdnbnugjgE3pTPnoro474qs5bE5dGN2X3vwopZPzNyK6LW6BqtvyswoWHde3ospb6yFQo",
  "key9": "5rjhcoSLHYdyZr1WFAFgtBF7GqZhLaFfaLWphqVZxHeEEGMjorXwgVMXzt2tL4SUt9s6ZPaRvTjizXGbMwvHh6x6",
  "key10": "j5c65xm6LKh53ZNZTS8xUnyagyEVa9smEY5S5uqrtyAV8ezJdmWcPh4booQGBRBymM8JUu8ENLkyDLD8eHuWp8S",
  "key11": "1KFAAbmU2hS27JEKVop8oN2hgtM2KA5p5LjUt3BCTtdQkexYKDCKvKVn2WdshvNKMk6HbiVWNhaed44hgNs7qyg",
  "key12": "5SDrmVfd7A53ibMHfMDVpbrmjefquapszDrn7NFU12CjxhMKfXm31zsV96ZuAT7FxtXwRMTZ46wsMw4ooDMKfmBW",
  "key13": "49Nx7jrAvy2yUyUfRQFRQoATYS89cjvJtSCKUiPDntt6mtBsCJ7QG73Gf631xYVKTxguXeYy2GyE4LDTD31fR58K",
  "key14": "KRhzNH6AEUAxyPjTdYoBS5Q6GPQXkJTDCAep4jRqdQ83JsVrMGxcmQPgsS6QgLXqnFhaHNB7MDRGfucYnMtZSgc",
  "key15": "3QZEpNGvBorHjzqe8P8Rramx9EacnuiC8diRCRQVvycPkNK4DW5xqvYPgsCZennWEgjhH87on3ky67vsrXPW9yFC",
  "key16": "v3dgR7ua6fPHhUazivnCUZgk8Qei4nHVMAnHj7hASAvo4HXbNmm8qJzHedd948xQ6xp5ovF5nkahYrZWAcY4uq6",
  "key17": "4sjnksLAfotHtZnWCmx3R8eAKCsubK7Y2S4j22qQgfdq7PeTGqmhjm2D528Pp3CQ46BrftzBBdinAztZbc6YRktm",
  "key18": "EFM8GWSyYbGSMYGbSsm8xeacUczZT7p7B4zRVMd1NgGdBjVof4MqExCM9syAryBL5yc1Dr1eTLNd2W6G88u5dzM",
  "key19": "D4vNsZzxi8o7v2B6mjbStwbgfgHbUTiCFKnD26VVhU2JkD5BJAAQB5ZVRsowtNY2rprf39YgHw5Y25NjFrtLjsx",
  "key20": "3JePe75ZD4BBVTyc3yraUAtV6yTbZUU2K8T8RSfSCTc5Jr2s9ZiEx13F6iDSd9138r9hs6VXb5iorqkhrt4LLKUG",
  "key21": "2jQxD2WnpSqmGQPqTAS5a1kcnb4vwvAs4wNvc9nJe7UaLMw2gXjoitPzGvSQhnK8MZwecVnPKVYUhcd6AMoZJ84X",
  "key22": "4FwdwswXPbU7y89kYCfF9KhpUdYxiUS3C1ZTmQhocvtnpbfuY2XdHvWeTsR8LQMe39wVXBQhqsS7ZEHopymTpGyj",
  "key23": "3tfKm17Xh94RvJr6NUWSP5iVSGVeaF78akCFbKQSDqbWNEhDXLgJtCWAsKdaXmMZLh235Y5d2KJgVyKU6UqxqiEf",
  "key24": "61a9wcgX2BMtmnLQzDFeacnSCPxF8Cm7oT6kyZ5h6LBC7NVFF3e9ddUfi7X5vQnyWnPNjYj3dHziaXvTqfsudAUJ",
  "key25": "61UZWJzpYDDqGrS2UEJwjquxXeM3JiZR3pXyjMxWxHqRCynnHkYBVcWjunGuM6aCw1hrw7kSVhx4UyLLCJGE5TJk",
  "key26": "8DMjfwEdfWwfVqtLecT26bZvk3u2mQv7xEk7BYpHmTJGoFfnkEfuqZTYPwu6ojF3kZivq2FrAP2RU56S8RF2gVY",
  "key27": "614JkV4SmLLJEqPj7nj3vibGT13b5kjbv8SywCriQsMH3ZrewZPfi4SpJMnSNF1sgSnCBKR9djpA698jvRVJZDXA",
  "key28": "58dBKkikNQ4uByKXvUMinsenciBC1gwU7fYwNUYY6x6xXqAsP8Uo77Xfhx1FJmNKCibuLTQWAHYEMkQFZ3hFqDRJ",
  "key29": "456HpuvSswATCNabxH3jJbXpG7tasmu8Y66hsY7dhDgMGwBjTiTmLJFEfq9oiFj5up8GfB2j2ZAr5FrDUHJ5UzSQ",
  "key30": "3ivzRjT82QuJdESrfp7TLtwpPxx7yfc7FhYUTbqCvrPCN4ZPjVrEV9RMgiQbAivKjy4qwxZy2TJZP4CvSPXq1Zoe",
  "key31": "5Gg5HwGyoQjKnvq6bAydatMPVXTPW4qUF2YktuMqGPQ2jm1xHN9W7fSBksuSdgC38XKouiG6XScKFpwzcSeCuK6w",
  "key32": "dXVhmTfVxaTFfRhHfqRcHbJeVd6HnWJ5sqCBnixigWGasBdWXDy9E45WX515t9VaX5Lwh3rNk4DuE4cyNe9bEmc",
  "key33": "31NA8L8YZj8uDdneJ1GykVE5tmj9c9sNzAivyHBEkSQJK5NbyyJ3RP2sehLMjsq5qHF54W1CRsGPP5fTLaLkvKo",
  "key34": "2TjZ2qTpKc6yjbZBeVLwKTjQoTRQaogWFxhQmx6T9LuyUZUjZWJu6TeuqsGUM6BcEZvbbRc6Wxnuj66VAggrUYim",
  "key35": "3wfDSkB1ezHLnZdsdXzkHknQDyoxxzLDmfcGpt47VTGyDEoL5efjnPrukki28GuKBtFp3yjYHv3LUhBBWY7mo16V",
  "key36": "5M42Ez32RAnsgaymEJGvKJbwu1pckFLM1wH8kaB9weJE31GS8UX3ytnomruDgnd8kd3ahdqUHh6g1YYLzQG1SBAC",
  "key37": "3Jtu8yY5GtzZ9DhCJb5ZNL12HzFbgqUDYhHU27rATxDXPisSLkHzmSbLMW1SNQBip7FnHCBzrP2fYBN37LUkYEEf",
  "key38": "tD8NGbjEjQFdAjv8mWf3DEupQDN5qViGYFAEhGuW6Rf28tadBBB6U4HeoFbnbgvXR2DwaR4PPEnh23bV2HQFbbf",
  "key39": "2Hkov3s2eGFvsB1dNczfi7Ez5Laf2pXq6MobSzSadRLoeBNbLXZTpw37FC2Q9cKjbhfLm425YjAXqPDLwMB2YGhB",
  "key40": "4utRKHhuB1SprQvvsbqNxyNYf1YqPJwKtDUw9mejs4AvDvkKa3c4bnLzKPZoA8WG4PNqL8CMibDVXpWMgQ6wb3jp"
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
