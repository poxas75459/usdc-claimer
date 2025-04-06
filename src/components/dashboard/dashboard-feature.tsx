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
    "2TJrcfG7U5B8kYzxf2fi4PBLUD5XYfyKNZb6wRGnpLQ6pK6QrG1KummWjfct9ZTfUvijdft4or91n2s7iUJRmdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EpHRgBPr8AeiZqpXVLBdivRtFGQ8KGU8pwBYaJS6zMCYyxrsq4UdjLdxgXG8uLJvWe6czErPNCmtUS2oWBhd149",
  "key1": "4YHdnzW9YbXpKYNpDtrFxPgved3Z83GMHsPynh6Khkb4M79MFvukzHooqrNu9QggeJLToeFvSDsUFbtzowRzDSzU",
  "key2": "pcWqUi19v5YjjusLs6nF3BhcTPCn8qnXUjqMF87E7bjWBRUSE6L2GasS4xuU3SB3GSaBmN5AiweNDY3WR6vE2sD",
  "key3": "4PqhiJs1cAidH3bjoLGDTMEaoyVb9qBn5KvyQXWVBf2LTNW2FnU7hY8Lny673kSMH9wsexTsYYD4DLMKJ6M4idHe",
  "key4": "29PWan2v7mPQTb3sf6eMYdby612JvtRXW6LSvUzDsTAAAan4bkhNJzpJ2xcaao1akkUK9YwuvoBi9MGYbPvLA7rb",
  "key5": "2SE2U7sWRZYdPBbXubRLDXtJpxpAEznJgHwiy98XQLkR9eUQnNbq1HdktSzhX4mgHtJwWnuGLk8Set88gYbccBxP",
  "key6": "3YCqCdqXkvxhX2nT67q5KzpognCWmkVmTo8f1zNKFaiEztezqLeFb8Nj2wxpQbbBo33zCsaf6v2zDHUTR7Gwd2ZS",
  "key7": "8rqG5NogQXD7CWzYu21AbHA6DUf8fgzroHzvNiRh4iUHVHSQGnfphv8iDQ9i2YMGSfkRkTp1cePfSXRK1GoiWvw",
  "key8": "4aUSMKVGjYBqMDuJLJEPgFcG68mKCGS4sbdhHFUqosPuCHbC8VQHD2stTHxPcL2S1rfQuJYe5t54XYxuxuZR4yuz",
  "key9": "kcwJAa3ZZKXtAj7G5rdQEjYSMejajVdzgKyux8dvVJoYfX5EUMBSJ5mGFQ5jGhoUDyhupr4go545HHbckMFCSJK",
  "key10": "5Qseg9FtXZPBopTc2DWKLHKp4FzAhyeHBprG2dbrNek63En3CtgSr9fW1G1iDraLXV5SH5iwbpCz8458Y3JC1JRp",
  "key11": "otoJw8dnf2txuor1hM9pNxe3Jymsr7ZmhkFRxvPv1kiFteF3RNt3y2R3SBwamF81tASDk6u24EYfBfmTL2aon8n",
  "key12": "2pj3cArWg7Ueuoc7GubAwXZArLU2kRG4z2V3VEHqoWZb5iKgxsoKeMsS7kHP1ch5T6wgTWFAwNB7mtuSRAR6mCza",
  "key13": "mnuzM9uQxETHst7RK8ThGBTGc6rXtEDAh85C6eWffubhQpYF1bSD5eZdeavKqgU8cxrXfkpe5q1kPwgX7pEJoNA",
  "key14": "3g8sjEQa1p7QfSzRU4WoBbz3uX4CXcoHyUt9LwvQ7ciG9gPpaBa1ZBkEnM8JKD3yEAkTR1Ecak3GhVd48gBpbCjj",
  "key15": "2xwkuZ2CXVnCqRLkr7Vz9T1eRLos7n63w23kLtkXYrgU3nXmZxEzUTPaB9Dw1a27fEERKygYF3kH88hFGavATYCL",
  "key16": "Y7UtFwe3Q23XPiJMh4eP5vA3dJgYjZtEVh74piGAEnaMaUu6dgJ4QXHbwD9tkQL1cP7VTNpaQh9jUTYZnPhpBXo",
  "key17": "3treV6J2ukyFtmz9VjkBZ7vSHC5EChQSbGJLNjYGx13JP7G9dM28tkfz4B7Pq2VpNxwH8YcNjeuoiCSoxak95bzf",
  "key18": "3XZabYSEZiu7Hc4vqDMb3yiJXAFh1GfWtyDYwq9yoCB7S7CSrbD6YxXor9ru5TppGqtbX43S7KsB7XeaL5ttcXBx",
  "key19": "41WjrAWfa4Cx9XKMxJqdvaQuU5nSJRQfw3SjZzDvcbxwdDeeyyCgi8ACZcpKqLMphjaSea1xsd2PRafj3EGLvybv",
  "key20": "2okb7YWfRGuSYH7cakGQQRFJXBkDba7P62LadhSvgTzZGvb5UEvCu8MgPLfmuNFftVnuX3NwJXm7NC23YFdzeR2Y",
  "key21": "389wv9VzQ15o1FkebPrygCD9ZCydBdVxw4stwQTzogDifpWnkR5aECoGw7DzFAC2eTRzZM3ZBV5VuLH18D1fd2do",
  "key22": "3zNizzD5fsm4xzvdRVRFETrAnpKBSi2kqhcZaxrmZ7aAatBWbUdQkzWM7JtnvcCYV3wUy41pMd9LQ1xXWw9PZrbL",
  "key23": "2UKqk59smQ4d8kojkcmQRdgYAKw8nQsKYqcfziz8ysKwrkxdvLboLeL2xWETnGCQSbjuhye7uvAkjgmBjfxTnKDx",
  "key24": "HUUi8m98nRmcBwobUhDs4ArQM9NfHapjESyrkmdKdaScvnoXMtXTYTyu6Qv9jmvMix4b2KonDrJXKhKAzgPCpaR",
  "key25": "4bF7Ete6P2jCCxhRLh2yCmjGvtRATuZ3PXc56SAktirrbiyfWYFa73WL51HGiNV2AM8qxjdNF3UVaHw7RWwygQTC",
  "key26": "3nLjwcSnsLXHhpw5K2Wvk32MkLZbqUya8ji5YBuKXh7iJmdKTbdESvfvf5GrzKTfBchCpjnLJfNu2eVpXSaLHcNZ",
  "key27": "5WYhYSe9MAamBFx2BjB4cZ43wpFPG7r7NYvHtiUnmWYVgxgZqubk6HgR1tk5THBk12hRBU8PQKKnsxxpa4RNv2zB",
  "key28": "51JKz4fBAkHZeuGuQ81yXR2gcyKirzn4m5ff31ad2Fm1N4daYAqJYhsCbVgb8FjQZV69nzN76m8nAHAWgPaYbdgB",
  "key29": "3nX8EXtL6YZkxpsWGoPATKb4YvB5iFQF2M5T9bRpSk6Ku8brz5GuxueoFvwVJnzBPpbutsUoPET32z5wUX6i2Aqu",
  "key30": "wnuGiiNxQxX2Y8w7GRC5eJLadgjX8mB3uvzCrN4m5XSyvoya5NEz1JBNcgTqKzb6HzBw9rxWV73StYpCd1PTSNF",
  "key31": "SBwjQRqnkNHsDWZPzV2Tctt8H5S6XK3ZeBxMtENb686BqSyX9skkaj9E8jgBqhHTif61ZBEy715xJJbgbZ3r9fe",
  "key32": "58DsPqv6Pu4AD5g7S9khyGhVs8FLvMUihHkNoceUjhY6KzMo3MXbZ7f8EU7LuCtbL7c65srKfZhr7G8MMmZNdmCm",
  "key33": "2Ar5AJzBU8ULXHRGfwXa3tStpbsZerUtBqj8zGdEbdeyZT7WL4YJpPJU4R69TppvNaiQQzcLSY8vU3V2jUNkzLvo",
  "key34": "29Hr3mXQ9exHfQbgchQ3W3MKzZQfQN7w6szbRKRByy7ENh1jZ6WWVrggW3vg3jE3RxF8acEANfBoaK6raWYhXNm6",
  "key35": "2udi5mZJu91BuEbGHht9X7UCRmRLTzndfn3EXGRZ7muugvE9uNmZx4azQxWqSzzjo7TgwNxQv6mpvR9z26y26tvi",
  "key36": "5AeMr38566vuS5XsP3R17sJ4rmhPYXScQu5aqt2pdsuUGFngkesubGBksfxA7EQAmyfVa4r1xWrmt2LdBnzbXqXJ",
  "key37": "2cMdRWGyow3pkNZ5WYas942Apmx7hfUYopJNZ4QWcRtjPdGk4xWPkgDeMtbVA1XEMnWs1uuP5RxykvwRQyyEFAS7",
  "key38": "2ezF1vmW3vUhQo7BMxc1wQnjTCvLjyWAG3smh4K2ZyteACBbpNBgzYo2hhDYDrhkYHN8yyX7rnarPrEsLLZiY4AV",
  "key39": "2HpVTXcDzkUV2LYsALF3doSouvVQQvWxs9mQ4DhsFZ5kJ8o3cxR755K7w2hVtaNvNYuxZ668CKHGkNY4g1nUfMKg",
  "key40": "2u1yn9WWdYm1vGE96DktDG8YnP6qpSTvSV5YFpdx4qsoVCbs73Ka7RdpuuyYi5HV6Acmg3Fkn7vfKpEGEacACyky",
  "key41": "5iB2vMjV1UefFsAkmyt9oWyxSazkVd7xvFaxcLUYnevc8kzdaVZiZ9acCNy23NDFbPJxSvEv836FZoYS4DHHash3",
  "key42": "3arXigVWpSSpdgYN7LzT4MMXPLCqvcRpE2qWzLUvHmXevp8biggojk83SFXBQr2qqHLPxZGZdZddE5tG1t3aZNgi",
  "key43": "63FvCnat3P6Z1nguAbYvYkcABEV1RA9brLqTHiwHWUWwfJ7NuELrxALmm5nyouzrCURzAr25aGprDTo3ZtEnwdHy",
  "key44": "5gvCYH4TThPCusLqeCWB8PUw6EJg16SHKgztmTtuzLnjdznDCFqJkzB9h5kYZkPxRwZy6gPe2sTyXAkbQXaLQ4Lv",
  "key45": "81bEdg5YEijjG9YEtvGKCgnqGJRj7wraRh2PkXXmD8eBPdgN1Qg5xzVSf8pocexQkAhnueQNNg2xyS8pJgWAyVE",
  "key46": "5xtH41a7XkUMZfTuTPY7GEH6eT51exaWP5Kecmkg8nfhmMW1G2ASfuPP1SfwxDn4jwkfsUp3EuD51WPLGVP3ESq2"
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
