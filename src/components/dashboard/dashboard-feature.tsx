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
    "5nLKcEWiP3H4NJV46tkmnT1Nj2iLGLaeyk8uwg1ZN1tu5VYuguqSfYhYmnXf2g9P56tkzMf3AXTTQEFrUQrc7P8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qMvLeNbfXdMR5qQkG5vmiGpKn9H6QRpUrT5ozSKLWbtDepJsrgPjD5YbBwX7Hv2Ck2GBMWaM55697GiAP9cLyo6",
  "key1": "2dfm1CC3ez3kh7PHQnYq4QPuv6y2UkwuA9nst8hxDasuxMq66mcA9SHLDnzKE6prVXahdY6rWPaNcT34odKbzxUK",
  "key2": "4tCYj1ecQwU2tau2f16brhGrw7muwSKCP82e77Ft5gM1Pk7YYSHaz6Z7KtC1v3pq8UqFco9ZxKiLe3ucWwz4GutX",
  "key3": "629YWgjVmivp8QoaFwdaMTEidtcHGrR9CMtcp6QUYkw2oVkPMDAT4acYMGLKSmdWBc3sBfkkn2dHxQGHiqHmEzPj",
  "key4": "YVfUkaf7s5HrcbeZ7z7n5b5335XCn9GayjCwqUiszwbPoSsjhkz2FkGLXa2Qq6kheLe7pqdep2W2yAZhVKviW6c",
  "key5": "2vigJq7us17YTvQgJC8ipLr2nFrbBnRcD7wDt3vakRqLFpgQPxTVCfnPXSzMp38jhw5kkqgqZiPLa2Lnox5TEtiX",
  "key6": "3JNcqnQLtebmL3KM1pPHBF9yYHer8itXDaPY5Vg9x25kmEfxS9ECKUvkky7qLD8MN94MfCzTQxKvJny4umQQ2R8J",
  "key7": "497NdC8yLGPKyh7s2i6Pmr58XqQMd7rFWCUHZS3eN793G7QcxziVwFQWxb7764nzhpBg11q3n6yvzvE1hqrfEHe4",
  "key8": "4yJo4zhsjxjjBnRyWFmrg8iZveGoJ7JS8cxmRpHma3LW8sWnkFs8bxYRk9H8DD64JfgvJaMki6m8CUGwJwgtrWCS",
  "key9": "2jp36djGjycsrAWtWjLZirefSZEWPNaFHYnP2j5gZ5CR9Rs6Eu6bcTT93WjzZpQ3cSvatT4MWJvytYXwZu8HuXH8",
  "key10": "5SB6dKMwkLxK4ggkqt2FrusmbzdgyCox2rPVtSnCcZSJy45JdTMtchr8c7JgyNsLvoAKwnqSFdh6ZR4zmi48TdHp",
  "key11": "3gvbBFvhrYdVYiuJruyoHghjttsb6joVzpfLNbdDTbFF6ynDx5rqtDesbhgnCvtpS6hthgKnAmgwY1cZqUetJtXV",
  "key12": "3KcUqN6cmUaCnPNnHGMRxwtXLXCdV2sSmAJWyB5Lhwq2gR9B85rswaMkvAx8YBuKfokYa6KFi7zSHYZKd9PafRZD",
  "key13": "5nwFQJYijDZsUKeVtuJFwPF5rfxvZsmiSCW9BEaTmu2Jg53KhvpvsZznyWXDT42Rs8iJqpk8HNkw33PZ1tcnK7rQ",
  "key14": "3ymcELcVoDCZza1gEJBYEnjoLdNX5T3nD9zwvWvq8qymMNAiao9eQwppAEM3ztRt9gqvath44Lpa1T3gkh8BJaLS",
  "key15": "5zCgw2vaxU8aEDghF1djMEBs5e2GZnpM6WT8rPYdcC8GypReV5nR5s168mMXrD1bq9LUqRXiYZqmvVwFvGfo5dSQ",
  "key16": "5e5JVtHPJGgLStvaeptM7PJmKr9ctzVqB9adrehpoK81nYk2YMRhJ34WrSDrf9HHuV6NeJq7yE2ZMHPD3xsGitrS",
  "key17": "3ZfH5i3fzEcjGMAoRrXuAiJJUdrcbXyy8EwSCdY6dgp74Ca7QN7MBmemxaEMYkUdtdqwAWbaaaabZsS4D78gG7YX",
  "key18": "5NUo4s7bEKvVi11u6K6Di3dxYYhx841vodcGkuHxWUCP9tqTUxu9bYAgDKXGkzHF7P678YJuEVCCnFqzREC4UWuq",
  "key19": "5tzphG1BU6k1w6NfeZdjgB3s98GR4cFr6vCyfMwY3TiuAz7YQXf9B1SvSxZZEvWVe5pEYC1nit1HG6uVLbnSKLaE",
  "key20": "bdM8gRMASfAvvyXb1ffbzDjbvb5meTkgsGLFGK1K5JikaZLVENBrEi6V91MU1ccUj45wheedEha3VrVs2WqVGkn",
  "key21": "4qJ6J5QvVYBg4iL1kAKjZApWREiYNMAqwfCmYYa3KCnEdaE2VwP7BwvNAzb2GtfvWhKvzjggjmCeoLUCYBpa4xAQ",
  "key22": "JWke4AWit2fER3M7yNNFqMpNUcPiLukkXVyHQts3zFsMg2qMZDP4RCMeVDcECKNt77w2BbuRGTdkwcbsteD69Me",
  "key23": "MfGThhmMatc7e6DMCrrN9TNqqbZFrM68avgVMsRt2f9CL25yzAUwh7WsSRp8AcoJmNZKHTtMtgg1oNGDf1owfwK",
  "key24": "kVd1KrgAaSbbDXBforEEwV3diAYxkYR3WJgB6LtJUFXMQtpbZv1MRfbspbNknUxuVarVtRXmwUgYYpLV8SuK7DH",
  "key25": "3k6yWzDCxXjpNdAWcukqvGQnD3LCN889qje6RceR1XXX1w1SCdCxhqgBVu9tBCtvxPtZ8qn4FAmnHQbHYxsApZ8",
  "key26": "5By5Hs1nBDhP9qNTfYLPBBpdEsRYUWE9zwdKNhHqG84A8Dj4kRPfQahfzyZ3E6DiTDTfexyQjGdrDEzrHhp2Cgci",
  "key27": "54PrexX1PdctPntgWC9A9zN8YxvZsy4Se543rrcHwK4zHSRU1pvBYi2b75jte4KUYtYvm5NQhdWbb2gcjUpnEx7v",
  "key28": "59pxYFSnPPtiCztEX4BrwKGXzhXc372wdYFKmhkD5iFY2w26uZ2aEBoLZrZENxxZZ8uFSzqNhbQwECi8yEJr3yum",
  "key29": "3F5GJSS7puCMmhp8k5r4LtTZ6WbkuHcQYzygfyNmeeHBvisUovny8rPGpvtkNjB4XP5TBXb6M19RFExG6QUAHrag",
  "key30": "4bymfVy6poKEjqMaUU79bB7LPnShxm93a1BjuBCWppMBtgn1PFiiqpSQu8ZiUcR71YLVX3Ge2GnjbJqJzgittfgW",
  "key31": "29192ikDTwAJxkzoR5TiH7gwHjgQM7tEzoGiUwKZor37dEwYhza9vrPhhK98csKdPxEFCrNB2h8qv1sNW7NuEqpA",
  "key32": "3NQpgcsfhNPrSkhv5T5QRPbTqDpWJSSGge3jBzvundjAxSDn7SxuBFbLuRGhDCbor9e57AHaiTzqWZQ3ax6PVNtz",
  "key33": "35djY3qDB5HapsxMF3jkw6UoUWQ24CEzUJGkSH1dAfaTrrYua9pDceFfKRQeq3HdSbN9U6djqZNb3qUHfP4rozap"
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
