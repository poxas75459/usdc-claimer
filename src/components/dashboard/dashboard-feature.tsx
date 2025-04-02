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
    "5YSg7axiNzRuH8W8jCn1JckgMNdDdYeMKQixeSo5CseBKrBPgBhDfHyKs4TXtRwzpbsR7GypXwMgPpveifpBFTN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mLZm8TTnCQ9DM8aHbF2Wcsg8iMrw2oTv2EdNnBDJM3oiKYCj4ZvXBPQw8GTUCvyPSpDRaEhKC7Dpj3BqCaaKNH8",
  "key1": "2zVHAQSBFQpfJ51N8AUcUBdsHkd24Gnp136Ka58fQP6Kd5mwkcxD4mN6ikzKHJG14Vnigmst1XWSdZMAjknYGHT7",
  "key2": "2NS7fkydJrE1aJTvgT13szegxJ3K1KhDNLBhAcjcUGsmgqK8TRPjHihuvwEAvxtSkGNLjTz9VGP5xRrv7tKeoY1S",
  "key3": "5qf5pZXmmRM4q2L5uFBhBCDFisqF3x1XrSN3dLsavvXCYk6AyhKzc2FsGgv6VgTPMLFq2iu5oEZ1bikFKynkktSx",
  "key4": "5zkkup1MMCqpLWh3GLDJvWQMfMkzTucRDciAJDvYYkhuMo2gajD5q5afquzU2JoTGgRf1rvs7NAiWUET2D6xm29z",
  "key5": "2EH5DTZbGFhZqQk2jhZFJpKW5pDc3R2JajuuCa8rr6mLwJp3vKyidEPR5KpPtqqHuPAFDRfAHA9vqhSLSaaBwbJ6",
  "key6": "4st5UEyocd45YSdzZrA7WdehckYDs2cfNpfN18meGMvUFvC2C5BtkaxpiCkd2LF3swL7FZdVDFoRUvdCsmVm1692",
  "key7": "4JCjQvpB8ku1Ndy287ErFUxryAQYKw6sJqyLTVwNgW1vhn9byt3b7jxk8C5j7u96u5ip5Ec1QGBP9xsXnguwUeij",
  "key8": "2yb9GL4guvgu6LmkAfSEQAASkzJ6mVpRYUvtNbokeniNgphEzzD9fV9udKVvHkZN1nSUhiGHy3oS28uRQJt2dADW",
  "key9": "23mZCYj3mwQ5TJC9DKnrz3uUVgmCtFAYS6R5wUygp4xcDULHy7ZQc4TjhYBiUmBCQN7yj3ceKS88PBhf7th35vuu",
  "key10": "5bYRpG6pWkTyajP3shBmXpbyF32dYj6oCxiDBfYK2qURGKbWDYEh3YB3AgEptkcXr3Ca2ZgugSx6GfGF3yENy3LM",
  "key11": "5HGLbYLJrDritf4GnRjEcZL8RGVSDkCgTdoQ4FPB3FR357ChLCHAjtLPH6mptvpSnBdCnsjanM2HZA5H1uH6aR5b",
  "key12": "vPvU5R3jcgcjAKYfSJGiXTEWWxjaMJCU6CCgGyuV94JZf47pNkGT5jpC8q8XCXCNupxCb5yRfKLEkCtsejrLpoN",
  "key13": "46fzunn3cQPDy42eWxcicVjQ89K2uvYk9y8mcFoSvRQUfqqsVp9oqNZca37QmU5xEn49bGnWwSJvoHvahHPha9dC",
  "key14": "LyAZm1reWcf4eCtCxupWJne5VJzxvZ2jbJsTF5a1enFJypgwpG6rxiTBPdhuesvkMbuV9ETkd9U4u3D2Taw2qu9",
  "key15": "41Fb4JpJRPDZ6TLPKz6J7BTU8CeQSXXDyHvmY9mqLq4AaK1fRf5CHBsoNHQ5ex7ZKsrBwZTWh8fj9NAz4nCznPiW",
  "key16": "5r2RvJdqbavHzFasnk1FXeeBjPFKQdSdPTGtxk8pW5nLxVDYTAmNibCLrLkSB4eLnMMCCr2rVgLHPSUQhSqJ5eqj",
  "key17": "zXLum3j88af6ciiTSoDUCZ6XHctLxa3T94ctfcAFeKp31565yGBvLSenFk8pxAPCNA8SBSd1TL8eTeiLzVss4xE",
  "key18": "6SG6xmmQzfPdB8znnRSXKeQWPYVukBheMDkN5EVTFjw3Te8Xec6vzHZ7rvcpt9VpKrqi319PF8QJK1tgrm14LTZ",
  "key19": "4F8Bm5UytkSwipX86vBxE9vadKGDdRPHeqs1fti1bGAvCwggv3K61KacKohUueR1Yu9nZ9qVkTT4xhZCYBuqFzbK",
  "key20": "NjB8DXjRbTyzoWpRbtc1XeAazJrnm6Qjw1DchyZPaKTAQzv6MRDDWeuWK7HqBcb14kVu8JhvvrutqdGmxT2uxdf",
  "key21": "5jFyxR22JznxQSiwcm3CqJ4chkds5kfJ1C1Jr9aPpjnh3BxoRgeRqPzj6zAYcRK7YKSPDReDHv3FMD9fJP1VBEt6",
  "key22": "boKPUE61XmzXg7NyFfhcavVX4bNxEDQYgoagqkGcxyitN7eVcugqgd1ebbyMzZ8f8aoJXtLtho9oJr9kqbyLM34",
  "key23": "4vZjMuigJqpADh2yg2Ax4RzHPLuGYN6qV9jTGDbB5arwzV6MAkXnCkyXLt4y1cibnD9w9DSyWBnRv2xooyciY5K5",
  "key24": "2ZWRBNZsAXS7TbRJfC4aks8S6aqt3aQZdjdoVYcS3EqxCM9Hj9xHWe3WLYcTAWM6UnpRBCdyGr6Y1Tmb39zcGHZ8",
  "key25": "2Bb4KK96YwRqqn1i5NB23RyxvJjRNLKfRjRQZaCy9UxVzBLoAS2oeTZnie4BHbWAyv6ouLY5YiPeqhBJnxLzBCMt",
  "key26": "4tmmjjP9vVkiVQsKHEzaWS8dDhkTta8ptFkQGFKGbtq7qqUvgeRi9kJKynDH1PGGvZZkvT3EWekYcZNH7WJZPheb",
  "key27": "2M6ddTb6UpwXRtuK1PWzjzi9ypJ2hoMK7VNvak8SLbpmeKEKTFrsovVF7BxXrcA4hUHNH3vxGVpnLaHFBWqPaBsH",
  "key28": "43ZQw3ihpkt3LxLWkujX4p7RyhXMuCUST2FQ6VREa5VeTmkLc9X3fBAB36MmfNZQbKs94iVoAM1a75ZZUdxfyd8C",
  "key29": "25Lha4HVH159XYUsLPRWTNQA4EXQVGDpVr9MTxj7cF8AvaUSenMWx1CBZrtaAD1hTPyaJNbyKd2v2m1cvjiHVRsD",
  "key30": "2dtsjnDL3HrVJMTnzpyPo88sr5Ee7Ha27QhGReK3CLLGbh7b6bZcwcS7xAkuSkvcernXTDoCGzZfYy1DVXQFYKgz",
  "key31": "66oH7VRCUp64SQQ7WfRUpvfNsz8Mr4AgBJeCkZ6KLY6VpZKr8cQLh1VAYZ6M72kLCpw1XHTz719YeLKoxWCUUmZQ",
  "key32": "5DJ9dqY3EgQRqaWUqgLU9P7bkhSgyyyuAL17S4sRHwYXx3bGzFjefKWJz7Mpu6z2AU54AwMZX5L2oXUfUbdYhMAn",
  "key33": "3qmk2G32cJdxCoHBWHAjQtVbYgRMtNkBfqx7Au97nFWskWpNPaxaYYFoKW6KLj9qQXPotW5x9Bum6Fyuu344L1eF",
  "key34": "rr4T4TA97uX1oQ9czorN7w46oBL2B3W5VZJo6jkx7HRXAWKcB5DkSeBR49o8ytrwYxxRvjAT52z7P3haBYm5yWX",
  "key35": "svG3asNCk9w2D9qC2B4AMe78Q9wtz1veV6UQUsJQSc95cqHL8VBMJyynRuedmS5f3Eih42taJukGiWyj1CJHz5X",
  "key36": "BqeJW2yfjTMCdLWmjrDTsk8vuaX7mht1BKXCG3evFJRRFpwYobpso2CGJ7QNQetnmYCnyjTsDvHrHLSuD1PeDt3",
  "key37": "3GA2UzMnhFvFy2qwhD3DvWH5gEydUzYn2husWoapLF6WY17LeutVQaAibrWy3GesARAjzX9r6cgfcPzAjscouqnh",
  "key38": "2pcNUMnuFGWY8TZ9ttz8namaa1kyG2ArmwTtDs92yZnzmBf5Nq7rpc6wnWqwmZmWrDm2fCW6A1r75LwJfyup4Vpu",
  "key39": "3iCABH9yTajmA5115qwM9xC4mekYfTQV4fm7n85Q93A8jBzAYSXS4Ri8oncA1j5tRWEt5L6CA97Y7i93ZhDa3mZr",
  "key40": "42tWneYmbKySM7dehHmgxz6E162o2tUjtSX4gQmow9BdmhfBfjgRpWgqoL9hE3UpoLHboKrzeYxkWtGjam3D4KnQ",
  "key41": "5yXc3wG3yzkT5QWEkJgwuESbcwttb6gZAi9hZxuMJT9UHWKJrGiBeFYL5ADBmaeZGVUQj5V9MzpMY3xVcCiwFmt6",
  "key42": "252GcbvbnKBKjZj1yvJWcj537a5aN5zYdDEquAaLsVEZEC3BFsk7ieaQZF65YnHbi34ieJ48vYirWBkMKE15Azgh",
  "key43": "4tE898aB3ugTJotTiXxY1DaHMEDTCRWMW6v64oAhScAAPA3pJ6w3JstjRLum6sfzau5SZV7pYwhHRpVHkvgKXnB3",
  "key44": "4a5buZEzcwuLsuNk2Zukdv1yEYRyBeXxM3YahZTpaJcL9XfZmnRbYa6ZB9ZdUxdQrJFQviYQ1oZmgeFAg1PW8qbp"
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
