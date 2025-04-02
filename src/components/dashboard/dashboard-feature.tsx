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
    "3jszffgcHBMSAk7GXG47Sn7w84deupcK7gWXBEJoSue3aVPXDJa4h1Q1C3DWMrXd1AFTsuR2CnYHSs5TaadpDZvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zUhSuFdiV5SiLQJJmHgjXNVtMLMUFu3SuszG4AMfzNKrngXYnYTht9REhhYtYeWz6zVdvi16MyUkfNgLZ66F5VN",
  "key1": "nUKbdwCVvGccAve4CAu7G6hySHaJPoTdiomjFA5Ks9X3dksobeH7SGukvfm5FpNjSkMwapQc8PxAyHLAZYRh4FN",
  "key2": "2uZYccRoCd4xg1ie5KBCbmETVzhep4Fq5BCrkzFJSwZX6rmTYTb7excShteGYyg4skRVqh9f3ERmorqeF5RjYR5q",
  "key3": "3SzHAgUHRYuKdqB86vrSQBeT3A9CuVNxHSD5EBKw8gyENmULypaabGjSSqCo3hCZ8uxWThfNxNDWGJujNHRWMdQS",
  "key4": "5F37KxXtxKcdU4gVbi5RMuEr4Xn4AHMBXM8Qqchrn6umtZqgarZkgDSws3nCgK4DfaZaqqeoLfV8gVUVL32CMNL",
  "key5": "hX4sWNdhnNDyB2c9EC6zf5g2t5ZB9Z5L4EtLeqkq5ZEFi1nRGWxf6n3jCWuHSugiKzbCnhYfrAtL5p7axT5eo2n",
  "key6": "49iNa87ULujQNZBugGsVQy4PLFpYL9bJgK2GURWTx29fwbZ4eJTJ8CDfThmhjNrqxFUGdzwGa7qDk8VR366PSB22",
  "key7": "5VF9tsezZQCKst2Da294xLPU4j1d2GbcWrgtQ1JkDdiXviMbf1ftgFNNmaTFgu1LnFVY4VQTrv7wPuoQqzAcVNzY",
  "key8": "67PfPmSsEzz66TZ7okvXaoay9SsRS6Cf2uT5dkpSGMaHn9YQxuLLn1NksCeSuuaKhdERN4pm6axxD3z4xoSx41RR",
  "key9": "3JLEu3yzUHriuNfsttBFk8wPzC3VXqzKsnwZnEtFrW7ZyjZPwRoy85DqVJnyAdLehmhXhzXywEcxF4Mjhm9XDW9t",
  "key10": "3iTyKVt5UdzNJW46Panbmz9yGKN1N9WWrm1GHSBVJksE4ztTrkafUhEMa7UtfGzMcFBZyaw3Y5JDhb2PR6aQfFE6",
  "key11": "2pxPoya5NwvrwQyaYPJaYNaWVaw4CtVv4dTRR5aK6vEQCREgwsfkK6dvSv9ydFLTFnTKKQmqtcsnskWrrfTcadMY",
  "key12": "51MkphUUtAacynmPezSnLvS75nLRrKDG9Zx54bgM4467ihBmfuDsJqg9nrNWpDwR2mJZ4gXU9jK47ssFvPp6NdxP",
  "key13": "4nviiH3pBKhi81iK7Wsn4frMEnJe85H6LtsL1yJPrHq8YM1FpmXZLtRNYBC2sRbx4qmr6V6ExcZn2vTcctuYPtcV",
  "key14": "4wE63NLa5kGjTQ1PP6uJe9mf2xhfQ5u3AcZDoBsG22Ldp6oYxsvwMvGhukJzBeAFyUW2kWoyB5utXi6822QMwPHq",
  "key15": "3N48WiZZsNJrGC414apzyKLhKPGuvutFU5GQLHXeqTKfwwPjmnkaLAYqBEFf9tWd29Kipsw8kYXuLPWPLMTN4L6H",
  "key16": "dAG6rfwnFi6CRL6jB4HgYksAuuayK1cXnL9nBfSwCYgXKqdXVqwTnYEbPeXGa8ytJo4Cw6oe7dMdbaid1ZJuNZq",
  "key17": "36z2gWrtpPFXEagzKcFVRDbNXnmrdcjjAKL7xUF3AqGQvNqpqpUjKUZuhh6is3yhksxZZ1mro4fMiFvhk75skQFi",
  "key18": "3Wqf9ydAkTKq7det9EuWxH7BJDArYzeneFhX1ayc27ZapYqKc8fvDNEUYfoaUYcbqpkfrYKL6QUJvCZ1bEzWeE8Z",
  "key19": "3wqm74VL1T3ELzN6o4oBDMRYhPnfwZ1ef3CtESgEazS8YuA8zZfCMCdh9M5UiXS3tVoggNcW3LaaLUw1s8mMi9Mi",
  "key20": "5phCrwrsZy9th1nVZo2RLBKE7Vix5YHXrvttQoumMT763CRHCrCXPnKP1cekuR8GpsFRRcTDqMFQU3pjyVGQaerW",
  "key21": "2ETn8zniz32wb1MT2L8SF5BVQBvLwpZB8oz1BbVAbGDRyg6s5ssMigAAwCbX2ZM4q5X6ayu4rYqn6Ap9fH3onvEf",
  "key22": "62aFXg6ThYGC8eXakeX67D9SF2R7eZUjXbAWHSqCPRz4HHafYorMGb8Si5jXu5LHsvmveM5mcKDH3GAo7X7CwYVt",
  "key23": "4jd4K9544BCQPrBosnDu8cR13r7Gd6WicjNs2XXF6tYRXbFsfPoqxcg4oaNiTe2osDj6SymYf2nMLLJbU4jT3Em3",
  "key24": "46SATYf7D5qH6Wf76P66ZzBuGc5NBPyfazGPkgafc36hW6c6GQruvWvN1P3BH1vhaygZEKpHfSB3CRD5iVfEW9ft",
  "key25": "56ribQvVwDtbUxAfhq7YxpdUdcHfu3go2iGKc5DHJ9Tndzkb85stn9UujtYK3eegLYRWJmqsJ3YxHeCEc62Z2Heg",
  "key26": "5U4yjVUEG5EHTBWCMUVEtDivTL5Xi7MSroniheSfrnPSv8HycXHBgdmT9gmbFid1BfhKyD7jtu1TJuw8kYmcWBwS",
  "key27": "2iCYRUQFqDkQXKxc6Zem5yry3Me84Ayv3MGJzWJpv61uWKgMvC9Ug2LDr3wqvDyX6k6ngCT3v3detGwD3PGiyEbe",
  "key28": "438USbLFXksQJaayA6CGoAGVub1dVuiua4VM4tPCStXVEhp86KgHSgUTFBRL2LCMQbDhupRMNRkW5ngA3RjPhQkF",
  "key29": "5r4E6DpFNJc9hxyJQ37Kaj44NKsXeCceaFBrJP5Xhkg1tiSKTjkFb35pa35EDSYPU79MM71FJNMm1p27RkGeFkRM",
  "key30": "4GJBpUddjX6DJo3PuuDN5nfXCU44zndZLJaxn9L5SLi2PkBSWA4ZfHCegtNaedXnzN4D96SRREt7doSTZypcHwr8",
  "key31": "2iTswfTQNpAnKvieu29o5XqyMy7v9hA86Hudr9rkkYr1x8ckK65dCFvX98mdAvZnrjzvwW5GAemem9V3R1FP2oSz",
  "key32": "22Zyj3HC9v6PkDCaX7jEZQ3R9M64n7VU5krNN8pPYACkaALSVNfZYLmw6g4WctUiTA3WyEcWR9R2CkzSeo84SmHz",
  "key33": "3QN6ws6nAkXnZdbRXnWk2QtfXztKJhbEY1y9Z34prHvfbchoCPBLuapjeysXiAg4y2oXAw3xvtrepti3nm6Npf1t",
  "key34": "3TwDYWZ2LmcuZpZnzJRFXLRh8c2C6Kg59GEefxB6zqvkW3tZR2EbG45UaVyH7vz4RLqb4gGciMYvW7PZVDXLVoQH",
  "key35": "2XGDCG5FpfXLvCZne6dmxqUA7FQkVXVa4w2fJTysTKxhusDw7bxw57ycX82pmfAWQbXibLw5yyBei8xtY7v8NkLS",
  "key36": "4LPWQMzEUmPH6yyHoS3FLXwQNs4X1CrjVffN1DuiLYWgNSWgG9ybu4xhXgkRY84imkZVz8qfpNkVkCoYoBdUmL7G",
  "key37": "66RRXtEpEawtAw2Z96oW22wfurvTiEFqyRx1x7W43eJzk2A18XmPs8U1TFScZ6yhzFQmjp8VKkefQtVqsdj2PNQ2",
  "key38": "5EHcCy5M8izXPRYanKg1781NmD1SV6aA7SGb5cyjTak2ZFy44K2BXmgeBukrsuZDfznHKe3BfaB393Je1XoggfLL",
  "key39": "3ENsqzTLXjYbmb14Az5ipRvEVzGUDZKL3AFaGmU4oTrraM44zVz1Fo9qVq6TNwZJQCsxCWhfGXx3uCLaopsdMgSa"
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
