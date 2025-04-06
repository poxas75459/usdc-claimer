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
    "3EaGMKkgWUD92S1vFf9xbEkWScEseV9xXEQ3Cqjb4Hio8uA7t2QUVvCGt8hD96VXrnv314Tud7diAZbre6GosTKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z5ZJMt3u2StW3msasYnaFudo7rYk5AybDSQRGobJP7KdXzLn9maTio5H8xKduR6uTentywyuHepVmsJqtGGBgdH",
  "key1": "hyTFZ4aTaAEhwUHMfb75Gtew8sftWghfMgrp4sokFhBcrg3eWGuubCKrXhbHH9Ut8TWi7agZpaSXBwaKVFBKoHF",
  "key2": "5Z6jrED7jMWS7ChwDL4ZPxUYjoebkTeQEoKB6YMuG1Hy9PNDVj8ZRXbJB43GEbfxjwAN6Kq6CSCxYrh5K4hDxoSp",
  "key3": "3SbpNPURv2hpwKqpRBt42JpVcUY3pa3cyhUxFgWsiBegixEYQUQnSmoMYgfkvSaBzHJgqi5Ng1wHMCiLYChM4wka",
  "key4": "4aAeAmJTGX1kFB32WuGpLHFyhCQJMpsWCZshUdP3CXcAbHRimKymHZetBw2ysM2vfFrcy3rQRDMDn5J477n3fe15",
  "key5": "XMStJZxhmydfREX281k4LucQnjDj24URJdpKxTqWN1BkvQogcneHhfZ1uJG6zKnrCArrikvkVpi9uZ9QyiKeS8N",
  "key6": "4LFky5rHxFyAc9jTr7HkXQnJ1KBBebtAyWaM3s9iDxju7g3ZxjJkVy7Cs5xNNKetVTMq93wTEiE3BgVpcpJp1zVe",
  "key7": "57eoR7Z4i89fjReu7BfutP1gaNXymekxQXTmja3mYKk9ETd7kazhgcicBsg782JJZ9Js1t5dhjHCGTEHjLTZABVK",
  "key8": "5FpcksVKWq5L4CT79wzPPVgFtfKxuBHaQDbktkryR5yEZc2d7aKhR8Fn6e299h5uRG3Khe1g3D4DFUg5MfaWFsoe",
  "key9": "3hpg4h8uGKa8mB1BWDUTtQRZbx6vBZQ5FKMkp9yxDXzUABMays1C9XUu7YoXLeGu6NBCvRKV2YRNxRX4w3AwmwpP",
  "key10": "5HCh7c14BBnGnamKDRCDzJZzWbFfey8JsxysnSoVHDuA9BGmAJ1nTsVZxbcYKBXpYfYBCqQKqccxRPNBKEdVtbfP",
  "key11": "4HNcX74N8JcJaZCjkYEdQUVtdbdR6anX17YBrvvQqiBHStfJe4WnRgxYF8dG6bpGWPuVeFnHtWdP5cBYiiV7pkgf",
  "key12": "jbthQL1Vjpb34Zypxuqoicyg7XTnx8kf1JVrxQPub8KBPupRcNmHY7twh1weC2JNe5rYxLn3Lw3YqHZrCb9EwbT",
  "key13": "TJbJggyetZjHZGnHnqt31WSnZgWTDv7XeBeiUizwpSDVek18aTFbbYykCzf9b8Gh9uj9QJyVTHbhPCmZpy99594",
  "key14": "5wnVKmjd1u65psEtQ27UT3bG2dE1MdSx5D2hJ7ut6Sp1rjkA2ZKHFmSNxRJVeEMwyFzfDZ2sCFKVegr7XBUWu61p",
  "key15": "2DDvwcbxK3k9KkhqTHyj4fqhQYvmSExjb4hLGHwMYaKwCBLXDJbBcEZGhD6oM18CNgcKvtZx1zBBuJ3CjBjY7bYL",
  "key16": "3eeogTsLKZLE9woHy4j1bsTet1UQDwLxuKELuMZqDn5uw4rqVE3E4nHXfoSmfaggEvyCXJdNQCMdQYgT36twDVnu",
  "key17": "622pZcEcW7kARrMaTXyBurr8K5REjMSuDtvH5i2tYpamqoHmmwX5PS9pinaxd968cYPK1ScSjxS8RUT8eiX8tKSQ",
  "key18": "2YTxpzhJExCBxKrxi5DUEy73FV2dVfTYhyKcKZmvFBWasTpFGcrjAnPy4FTngamJ4gDWuykjFbsqet9SJ5X1FmdL",
  "key19": "3XAEX3ZDf9Jbd4RTPu9CE1XQPdPvEP2UUstX5cV3jfGERMjeTMn8rNDPpP332adfEoUT2FTcYFxAYKGFfkPabHBs",
  "key20": "5XjcB2niEugERyguwvpR3vm97w77j7uZQnCxuq1g5HmkhM8E7ncYG5G6FqoKvLQRfnkaayjh817o379n9D7UM6W1",
  "key21": "36T4M3UD8gJvgSkQN7bPKEZq3mTqh37j6xn8jzP7DVErVhjKJeD74Vu8Ap11ZZy9iWv5PeiWFwBkvQEBN2D1VmhU",
  "key22": "3TezG3wPnc7KKhcDxs7Ju7BryQ7ZwvVvxsmqmqZHiVKmw9gV7c5PUGZ7DAGVTe4ZQL55KPErsXPHpSRAbPFwu1hJ",
  "key23": "9ukBbhksiwptREDymjNdzWxY91j6dPJGiC8wdCrYTZwNjrAFPYNqYC9FPzEPMJFiYwwQwo9wLJqbv681knCeQHb",
  "key24": "3NFpeV2UKgSyYbWxh9qkTBPJoyBPBoiy32VNVEQxFuhGU79eS2fGbWbE4RzT9bXgtv2Rc6mujXJAKCe8L1chsPFm",
  "key25": "4AMNDcwxRTK8iKqiDn7Cm8pmtAb7XrV8id1dFDw6BKJJEuX6JqtQPCLqFv6gkzgZaxCUS8waLxy3UNZNihsj1zCj",
  "key26": "5TxWw82jeeJ1gQJo7PuypPn9B7GoaUCUMfrxHVCU8ck4GkwVATkMcgi3WnjtmYeTLysCCZYzVxjvNHRDWbQyfxsk",
  "key27": "4d74dpyx21a2j9RrMKuVFRWXsTLqQ7TZ2RStnwsJr5doz14L21faYSwdiL34ZtxNbdx9VREGztrMvMPeFDW4eqnm",
  "key28": "DHPzvDu4mURNaWJCPsEiJZZa3tCRhQZsyy6Taq4E52dMUQCjQsKUnznKXJRq7Lk3KsuGoabHxUffbroXFzd8kTi",
  "key29": "5LMAo5np2oT4QRM6ddFwuJVQ8Jbd7nbqgujDohM947ERv3pctDzaJPqcEHTTwRH8SfQxxZ5Uw7MWRYg3ETGqsY7b",
  "key30": "2TmaCjVLtquoD96A1MSjNhh5TB3i5g9zX8mGw6KmjsUbpDKzjMff9b5xFHTmtShAduB2ru61piCx8qa8urjN1Dir",
  "key31": "3g5XCMv6FoT9p5ajbiBux8bh3RKfdYjYW6vj1KdZ274kZsteTYwz8JFbskcrGe23W87G51EbMMRBwh5q8BvG9LcJ",
  "key32": "4j7LXohd8g9a6mSqG8e8tUimX7JaJtwCgL7YUAnm1FcB8Eu7uLuvkMXTKpi6J8xcZjSsXPFfF1G6yVQasLGwaCMs",
  "key33": "3TPVgqrrPAnv682R7xHWEXZ54EjNfvJ3iG5qRRYWJ3T3qVEsZKjXSEaVPWdfFXCW9otEJbuSsxw8j6q2fM6MRjvJ",
  "key34": "W1PJubmKfD9gEvu6zr8L14u6nVPhZV4YYas1m4M8tQbQUvAUcVsqRFJMkyJdQjgmb1cg2QND2QctNjbkBNQUmiz",
  "key35": "37Fqtqa2NomocWX4WoaaGVDk3uSmLPo4Toghb3BFP4igddwpXbJqBZ6N9mVyE8ktpnFExZoifXPxXSVH1y3RZ21o",
  "key36": "4MyJ2nShaykBic3Fzwd5W9cRhHXiMSnrN39CGSeTdzZC5iNZaebaD9i2TtvAfDUtHYJVsxQvSg1GQPF3YD3e1DWc",
  "key37": "3S2997gmkEJvPAqRRGMtnab4FqCZQYxjCJRQcHfoagNB5XZzEUiHbtSwokQgFfiJKVKXZ3A8nZrpfZmhKEAbyY7r"
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
