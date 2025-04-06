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
    "3ZtCaaCBexVVSEXGS3EKN4KsQsH9dtATr7Up5RzbhrtfATKyctVZXsoPyq9V3cY1HF86Ru593mDhmWueT3wP54EM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bpULXyBN2hALdHmv1mL57B3AF4EBnSJ5dRwEySyZouGiRm2w27b3b32YUrVzqdoXLM3FpC3HyHUGqUySb5Lmkdz",
  "key1": "5gQ6aFG9YdgwbJUrM38oLvZ7onUf7W6qDYqTR2ts1Sg3Ktbt1p92Ntji9ugYJDN2do2excThqbSibJkw65o4Jj5D",
  "key2": "JP6QqjkTkcdLW4MJVf6EzH5vK4ZBemgUNh9rfL1QXWahS6fkYgEMMnskBKstRa4oPzXEhxwn8DsjUFBBfDCx7L3",
  "key3": "dDxVzZQ2yoDx1oBNweCZDm8YQQycZKEgn4PoeuqToReF1Te5Cfs9hTKqmAnFWPBJNwVN5V3MEd4a6ccVQsGfRjL",
  "key4": "5Sw1MY4feZr41udDk1hLopsQskmMTiSf4gqEnDQTaavxDbpq8YmWXGzu2qUGW8xc4vC7vHjb88i89sasz9UBmK8d",
  "key5": "4qG1YGXo5XGzE8R1vXohqwgZGg8ojovgi8dYF3nZiqkwD1xg5vYeuC3caCMccs5e1UAX7MGBRF3CXcaV45xSHVNK",
  "key6": "5w16TmdSgjAafrRDkMVjKkeJ4sujBxzqHYcKp5iau6aLQrwivSB1JvywjKsUvfQn3moVhbE1q62ZA4uV3zSYCHkG",
  "key7": "36NX5YAcjkngAho4TeVeivQFpVe4rzactrdzyotrJF1Hmsq814A6hf5zBwjBqV4dwYYe3DHnoqXLhLAQxUYM2FaN",
  "key8": "3pyEPqLx87gRcWqJdWAvAoHJDnRLJtHDoHK1gjDH47DZBhr5SiLgAzFFYUyN2LfcRWQgCNeh9d9g9Ft9AfdPJhR8",
  "key9": "Pv3VdBnHDtp1D9pRgHVCXcPggx6EHjAmN1TjrzQMi1rwarRyJkXecU2HD8n5AjvB8k96k9DRumzs88caeniuG7s",
  "key10": "2EgwcXVPm7ohA99ckovUNTKAEZSnRwyLSsQhiDxvUMP5VQ1G8S19eBWt9tgT66VBXZbwnXrekz5SkACvYe4etfy",
  "key11": "4JHDX9An7B7rH7HBbBQPKqaF2RoTLCgSvKHtkgFwTu9ANAHEswnBouL492AY4AE2xDy2MHTKBKt2jBYMVAREinNk",
  "key12": "4Tbub3VdAwMwGAdRkPwE5rdANGEKa79mmnu6ZV3BNoWSNvGkV2UZARqZm7bKvTY2kD9JEao4hpuv84oPAsvCZqbu",
  "key13": "5H655vJmFQrheXxmKt1iUT7ZPTURpqTyjpTHgTQEbiURQghDHAm2ryzVdUnYNhodNrFXksTqGugcnGBYkzfx2ukX",
  "key14": "5HJLM7CqrLgyPPinDUeUKUNNw6aNin5xe2mnHFQjx3WgWusejx4kSTWgJ6JP2nzuVDTpsJrgLioT1auuhNtgHB2N",
  "key15": "5Kk6auakVCAWRVVxKacXGrz8TLokem28aoHvveVpN83z4FnfqaVpdUdHTBsdmosBgw8EpS1aB7wEtS7uyQCCCFgt",
  "key16": "2Sdez3f1exLreAynwykzS6At3A2jpN9PMFg153CpDqmzDuRs5NY81sHm9cWpJjWvcRhfAcqdK8vT52cf4LzF5CtJ",
  "key17": "2B9RvqgN6BFjDrwvdLgQDkArATbi3fxTaAoGQb2RcJNremdHf2vMqFGw3S6u49rbrLMie1j2oEwiKMjXaB6efUyB",
  "key18": "44pBcWSRUSa8nMWHtgCJ5uk2Wd16KRrZsf5yp9zLidaxsm1FVh4HKwVcNZ3T338TfPzXVPt9nUHmU8RJi1QNoGF9",
  "key19": "4dKTCSMJRhfg9MnHbvFrJsQvmWtj4orjEKhZpdRz2D25USMRuUAx5fiCTeSUCf8SXrvFHtMNLBayw5veaafkY8KP",
  "key20": "5R7bNqH5CTBSKD1pXk8VJ5wuQ5aML8gd6t3HNZnT7x8oAaQLGJGzDrcWiLAyzp6y8zDvsYKqGnEnvPc6T1mubMAQ",
  "key21": "2cjejqJrdxJYrdPaQaqzuZiz1G8VjVHj38BZNPMxrAdh4ho4CRCumPqf6DqAnFvsgsGuYJEdfCN1BDCnAubUPzDA",
  "key22": "2A5jyyziJRKWmSQUECqhoT3STbcCdnxUkZJFxL3Dif4QymLPbBEHD24Zmr6ERh3unCo1ibhJf2empHuLiVAbCagP",
  "key23": "RBTXF6uU3WzNJoorsevTyrnsCu8Z3aMeFgNhSveidoSq813CUX9De1JVAgZxUUiGw5ykXErxBtzgagaNEGGfsJv",
  "key24": "moBR3QzewWbsot3AbwhC1qDfGLpqz6tiR8dNFGir2svLJvkzkEB1Y7Nsw1vWJavnb6DDLTxPi3GCyeEq1bxkGjV",
  "key25": "9eZymqok9XNuwk13dT7v2XtcNM4dbs4RS7uRCkvEzd3E8LPorBiQysBdjSQvpNHLzspxkDN6tNpHVvcshCusTRo",
  "key26": "5uzVLddT3Q7tXQwvNvtztcmhnVEe7W7P74XzFDiJ196Vv9VVkiJmnMykJZykzahRyc9aPUz7DoysWDftvMWe5S57",
  "key27": "5s8coMuJ7SL7LdGQPHUhnFZhngp26aPyg6zCtkNyiFz9CaBE7FVBcSPi7S7mQZnSgpiHdX6emQU3kaum6xkwPBBZ",
  "key28": "4H3jSygGS8QDiJy88G4NsoLJ3Qor4qCWcuXTugx2gxQScbYDgViewXxUXFb9veqQCfGqdBjqvd6p48LbwU3VEkxT",
  "key29": "5vy5QnUZnj7T4jHqz6FXhFTT9TuDPLXUiPsBZyLX9StCEkZsPPDR87pqShmWt5anzh4M9gFjg1AETtyJL7gRXdVd",
  "key30": "t15XxHAcarc3eTNoBR8RSCyMhsJxedVAW1ruyT7yXRcctsMUQqkZ5zGmsaAwp5zGoPyb2DnEHU4Hk9y5NQikUGR",
  "key31": "3tEsXwHGAurLHWuDjHBv46GArnvYBpEQ36k96yqrGKp7qToTdWJBPQqbiAgqsxuK3okx8XArccg3u5i5CBGhRMu6",
  "key32": "3tEi5og3W3tX3peugA2ZsRUcqrGRFhWxvseQVBYBerPffweTKdFnmPqQUrfaLiusPLF7DTu1q8oYX8zerN6aMVbW",
  "key33": "2jwwrfFbvQNNLGneTJxaczxDf9dovyVbYYtMoKPTzeCdogfwqqgPjsknGgPvC2K1G5w3ru65pozJFLcGtiUwjVXM",
  "key34": "65vetxxdKdqA5vyZM1b3W5JsrFNrowE2Je1XggxZBVrVgJ69AfAxiaZcqfgY4cuCqhQ6m3BMgWFTqEz9ZrzAjFLz",
  "key35": "4qNkBKVWUhJm79Qko2Dtwyw7ZmNy6qqwX4jvgbHHtfUdxLmMhzEEtunhJbDnGdPtVbQx9wZHz7sLGmu4Fw9Buo6",
  "key36": "3Y2f8xmq6MAr7AyuSbxKtHRaUrCwF7QUxfoKtxdK2sgxMJWvfuZp1ZT6ZF9P3qJtnYiK5ZEv1fmvZ9YmFoSf5x7N",
  "key37": "2CQua5xEZXn9Bk5Xm428bD2XJYc2R1MQPLXEKYgmoJ1XtEdHPbnJumMQwoFvu7SwUB6M7ryXVqdLJoRnvbtBXzhU",
  "key38": "5en1VyAo35W9ZkSTWjeqg61DrdMwk9SANoqR84m67XB6pbei5ezvtCU464f1Cqy85XQ13PmauWun5qXe6DMqsSuz",
  "key39": "61JNUB4LrkLi41rbvNzYe8SV2jshVa2hypczLRnMNK48n5yT3ZxGAFHstHpUtc7Ch9Hj6GDoCuriBUEAbgSDm9nG",
  "key40": "2QAuFuafaL3mtXEGGCAXkdiFXFeHU53MsAj7b83ktNYZrfHS1Jpii91SSrnmSNVMAaG3fmSyHDZWT8QaVTmFWNyU",
  "key41": "4hWBurgmAV5vbJtYxc2sn6uKVvEYuqyoqTGzCFZVyM5GnnwDBP7WwThrgeBZjLWGWSJYpqEGqgbvWdneK29HAKaq",
  "key42": "5NArzPNLxWof3n1vadx3f3vr87yhheuLFCPZTAaKPK8y3FhTvtwxpXKBnaE292SAv8WcZ552pK3RCGY47WSDocVF",
  "key43": "3hDZpAG3L7XuqH99uyqRAmBa62cMrzNamrEPJdyAa7NgxBMouf9JQYEqNmiaKbvyAMeDdKgTs2UoBSSdFVhj3m1e",
  "key44": "3qsTTt8GH7tBnV3sHioTStKyzkmwtieAKcXrfxZVNYi7yFC7N5KJfqbKKB8SiG6ghXcH3dByeLoSQ1AShxCxx7Br"
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
