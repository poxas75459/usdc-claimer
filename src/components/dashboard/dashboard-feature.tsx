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
    "5hN6gjsN2cMHStejn6u7Ci1uaBHLDv5f4aqXV66nnGsJjnXrCTCPfyujsAHULyEh8XrQjwWQLFQCYP19nGDrmJmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JHJvBs3Uj2aVnP732JdeChGhb2TPNnFWD9Ucj3P3g9ZZzCCNsnUuEyKpgZHMdz43p8Z64ykbv3XzqLYTcNAMBNA",
  "key1": "VovS1uA54kBoC9BhVEz3Mcrjtsh1vZUYoTLoSDhvLcA1Wofn6QDZS31hnxX4bGmZPgmCcC2GacQ6kSAxbSEkSAi",
  "key2": "3fDcK5AjEnY9PqK4TaXaREY3EQ2GbqoqWBozAjwZgCXvkpXfL8GhmvArYWw6fhBfAE37uxVFGUYfs5DvGz7ttBb1",
  "key3": "62osu3LJ8LUuWyR16a2PL265r3cfZLLvqgXbKKCRXxQgneFKL7BEkcGmdpzcbSRz8pD8tahTmbp58zvxuRLCwoYA",
  "key4": "3SoNt9n4LEnfC21C8jirBwiXmJGPHs2fsRX4MBJFEodutYkdYSLuLRDRhqcTfbMKh6un8wQuzp4uKdxjsET56u6h",
  "key5": "2u4PwQtHnoLLWMAJAHvuJGyAZ8iEpJAtxmMHnp6nonSH7i5X8KPxeXCHEqo9HhoUDqZ4rb2k5XyNTvMqjWy1jHpy",
  "key6": "3eA12WN5gR9iBze4rfzmYgAADEDn2FJB98FttgGYgim738cpUWfxNXgUGTxkaAJDmKpikkd7ChPaY5npdXjPQGT3",
  "key7": "5uyVT1Z4RsgDaF6XPUupx22KiQ26eK5v8kTgW1svbZChJoWc63ozfrhqeaK6PZ6M7wMhV5ybnKi2ckFdPCMmuecC",
  "key8": "BdPXLqurdJx4Y2dx5J52FzRyXeaMFzgLAt1AZx6VcgAPJF5tyHyBcGo8zGbDK3356igbNXoCbTY6tibo37WhPtV",
  "key9": "4yxFYFoHx77c7CAewBEb3fD14adgSUtocsdzmaSWhZhW16asRziBiriW3eHBGysuqWnEo7U2tLbaiBMBmvgq792X",
  "key10": "3GtfKmRHo8dJz9FnpC5uv4ogKb3QK7jSy2oLJN61a6YqvZF76GdcBDbraesNFphoCcLKoCFh3LoeGBXM2wYeHeTt",
  "key11": "4ypwgyRkfJ8Nm8pt5P85kuqANnMNcnCovgUnKCCz48uFx7Bwt4RQPSjhj9e1CY2Yj66FRKP3xvT2Kv7U9i9jemNe",
  "key12": "3o9WejALrXDB3YvmCVA2eenDiSzQA6Eih2NF838RUrP9kxewuKdGVoT8n36zWjHvuMzbNcG9SGtXaPFJzcHP4ari",
  "key13": "2uLfJkRmtK23ouyFf3bfSVP54jtFSmx5GGPej16UCj2BGETionw7uzFZAHdkRSEmBYhCxuCEQJ5fG1fn9Ad1ZhC8",
  "key14": "Wh89dL9mq4myCQbrZzdJSkHLDNAPFJVUP4t8F7CUUwpsR9979KF1sx2xqUq6PXCNZQuenzWMpxk8h3VJhUdaSKp",
  "key15": "631AmAqzWBB7ZRvZ9EhWzQcpmpVLZGXJYkjV9PsAXja5S1Ac3GfSqPwyncPWbZXivt4KJg1hxtk4azb3ptQWm8so",
  "key16": "z3SnS8n6HtgD9fpphn8JqviLW72p7LJbu8mPPC4U1A5VHSPQEJGuCNV1uSGLrrgtBjSkWjpXVX9xnp2vuwhsPxi",
  "key17": "4vwUjeMgxPo52NreJqptywBAfQE6n2vRNSSuW4NwPo9xFfQoUMuTvNYoGBXSgTR219ho4fCyRo7hTLQrJqkFuSTQ",
  "key18": "3GS4uqYFwGXrTBuTY3AWM1mvsidR4Q8EU4JoMRmtWybSBmjmvfpwT9HDRGYWPJCb34TeiY4rSeU8JgxJbshC5JQe",
  "key19": "2wfa9J8Bb3reJH3H1iFxCL3eDUboRzCGqdZGMyTXSfsV99RekkLnvzbJkMuuxNJnGAnbqXn8wMn7DPh3Dwxud9wv",
  "key20": "2gfiDdVc4vXTufhLmiQAsRsGQThtjfpWMnj61oedcLvGZEjzC4yGQTuVp1UV6ZfaTEd2Tv2kK18yg5Aovvas5cwz",
  "key21": "353xqg5ShXBXWykVVZYrwV3ZHwNVN3cPWV2HY8DPvi6oAXKCz1pQ4UeaHGfwAgJYhPB2XjKXnVtXVPzJvhLpHRk9",
  "key22": "2nMTGdJZUs88ypoyMHaxLjhHEEMLfwyRwooSUcTVj2yykAA73RUVintqzpvRdMVp7tZzW5Y4FZWjZwrBj7KgqfXQ",
  "key23": "2ApA7sJXkGzY2Z161T2RRb3juQYpy8G9Vi7niDDv5ocAQXZhpu7aRZxP3P5Gn6QDrwCAPdtcP3fmAr6kVG7e2LsT",
  "key24": "S6hbQV4ZN8vH6PLXM9zxDuBcg4SCpdcHKySham8KUCQzUPFQ8NoNFrfpANGyTZaifiBhETio47sgEFt6uVJPQMw",
  "key25": "3eQaVi14P9AMPWxCN7jV4fqoz8t5d4wzxjxV36sAHuHKctsV7BUc4gPJYYAjnay5izwt74cQkTekWmf1sewbA6n8",
  "key26": "2wcWHjozZoLiNRPwCNKgpywd9mMfBcoCZ6ytKbnfwpvb9B11SGMp54EUi4X3GAoJ4DnedF7Yrpn6Eb162q7xJ7PV",
  "key27": "42pCiBtG7TuUtXeZ2vJZPBnGMFUCshjRoyjnwzLwSru2UjTca46tjxL53Wb5BHZM65Ni6VbxnsznuDAB88gh8kph",
  "key28": "5xmagwxhnArM6iq4H1yoeC2NAjGoS9KsUtvECYzgPWXV9EraDw3GWDBbyaJs3L2rhVURA5RbrLTZjMJYwcgh3iMh",
  "key29": "2HJeqyG8Qje9t2Ug4ei1oyyx77W5rRQePXUjXKvwkcfPJwuqik5CyZ5d314tN7HYWactxKu7dGLsLk6zmpQFjkKT",
  "key30": "3AtM8uMrRgVbGRmFkNgndCSqgPYkNVUv2D6JwuZ5hJQbEKRFbRBacF3uLyuemwhFUm3QYwRKjTJB7JCchXy3Sp6q",
  "key31": "2Z1tbuic4JmnexeTLLX9vRW64rfTBWM71ebs3nh6kPuQZz8gn1jZ7bdwycU5A3hYBNeLBZbWshB3AkGevi71KCvY",
  "key32": "2JcFfwdKumzyBXKFpXeS5yqk5vbzmHvNZrtxtheK83B3So9hKAmNaPAHCrjN8P23QesSsBgSH32XWM3k33eFLNme",
  "key33": "2d66ChVRGeZgax2Aapqn1PgHwFJdyLyxXA1Tib4cbdawKRLjsqupsCFJgWHGCvg18E8QkrrtUusXwXV3KVuCZUvE",
  "key34": "5iTMdktcivvXmPVZTqpYCNbN8Cq5QbEdy2REctzcb64EhPTYFDXKPispyFFvars2zqSiPDPRzK6Cq872nLvP47vS",
  "key35": "399vopfm3e9vvX6iQ8SGBuHyae1FLWy4f7NnDWG7qSNEtqf5GtG53cQGYVUGdPfDaKJKqMyJ26nkykPVyjn1GfQ7",
  "key36": "4a4hkodgyFf47Fz3D72Fx7zWfc3Dhcq5Wnxvq9GqWzZ4s9jkh1NWrwdLvpni9tMtZPpfXkKFjsVwg7Wqfzf24C14",
  "key37": "5B2rJ9HXLcqDfUniC8zHNnbhvn51mHqfJwZZxqrzEWRfCu9Vv6d8fcNTAFcBeiU6B3kS2kRyaup3d1ThtPjLBe4t",
  "key38": "5B62NX9m3pyAJsbMSrtMoSYHmS1Qjo23UATwaJfW1r5YM3JBsD3D7YgqwZQQFd82UoFAPPQFYaz2WpSgchZMm8P3",
  "key39": "2r41Ht5ifWP2rDqEYRGoTpntXvfaBUZWmGFyggPXwW6aBsLZCHLaU5mfbzTGzVYuPhjna3gYJ66VaQs6ugSy5zMa"
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
