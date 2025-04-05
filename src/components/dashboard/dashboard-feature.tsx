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
    "4viZQd3TSNy7B8dfrGTsAcbu4dfEVXH269RmF3RR5HVbkUzFpgm1fuBofD1F1RFAsoyrJFXWdvnop8wGaS4wiXHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63cp59pdmLqBKpTQ6YBB1srhVv5iMLL5n8akvLMshkEnLRsPj4AaowTCFJnaxgiZP4vMoXfgBz1s6Wf1fkcWb5A9",
  "key1": "4KeTAAqq9S78xay8sFtkYnwPviXtJAPFzScoveF1do5rTqpobkSgKFMnsnReoviUKbf4E5zggot4DVCZJAshSbRW",
  "key2": "2FM1vaBzEpCUhTEqc2fCnyy9zSjuGEutGu4pzu9N4kUeQee9KyaRafxCxgjvwA7m98Ti3LTMxFbE2x6ksk6GwzAi",
  "key3": "XWZX5R4ysMc1dy8t8aiCHggs3SRSyBtm6qH3H4iiPo4rakzA65doQSE5PptjMWqcr65CZcrP55HDwzPsq3N8xMc",
  "key4": "2gTN7JHByYrko7ixWB9ik6qg3DqGdSN7sFw4rSdUcKzBYm55YVKehVJ6UsFs9topVfbmSBWPBxqSfCzz8gW37zt2",
  "key5": "xvG6nZuEy2z6RnFxfjFAFgctwsMEiJuqSydRZef4PMQ9Dw8v1Tvkk4TzG7nL5Y5HZuHpe6rZfSYQG4rsUxx71CB",
  "key6": "3oC9fszotMJhzNSegHfd37FDkkY1bpkFRPrp2V7FXRBgQCnQdyVfu4vv1NrM1nyb6VAxqZuH7LtDR5igV5ZjGQtb",
  "key7": "4aqqEWEDvuabj3hD89HdKyx9xZL6jpVnmHyjCQUbg3NZnWjgkwhgA5gWfdZwWJs13Gkgimj5WxmPTFga5LfZfCi4",
  "key8": "4fbV34p5eABPC8w8WgotdDL5x3S2wWFkYaGoSnxhDRqkjsSDLT3WUVYypitS4rFZK3Pqqqf2xAxCTCd3NWm9MNGg",
  "key9": "3goVeEK2BEDvoj1oZps3KWjo8X1PSNkRneoqhZ1kAxtHQuptDBngF5rLZngaUaAhdsW6GcsqK7B9CjWqk1tfaJ7R",
  "key10": "5jCQ4igZH7YkyhGxTKxZMLeufyeNMnuDzjaukC5u6od6TmDyX4TQQm96nckoQGTuxyFCcLM9TFV4TMkweW3MudgP",
  "key11": "2d4iLPHbeHoEKKBCBKb5TaXserMW8EpeSM1Rmdzwn1utPkX65DpWb243Vasa3W9LJr2HQv9aADmcggfaeWx9z3JY",
  "key12": "64VUiFHw2vGLmswhyfUVGzZokGYGxGiYrB6bJyGAjrYch7Tg2i9i96b4fMSS3vDN2dTftQ2RJtsuGt5kWuUfeGiN",
  "key13": "5FsaNHAUqyZaZyMScJcHEdFbq3kjjqhqZUqByAEeX9Ffhm9uxVsteKd6q4ZSKF2XLanse1v6phN9hUsiqgmnUNWe",
  "key14": "4eUEbK3DaHg698jSS42HGJUVWVTMZUCA22k4nqkfvzH26AEoH1FFRnsMW8HRC4aH8iNYCdvATvV5LE5PxDgDSwVS",
  "key15": "2EyhrRC7XGZX4K91t3PJMQSDwGSvqVKAJWRnNpTywcrATM3XCpm4USzYQiDmD5vpWS9cfPheS5jAxL1csPufeJTE",
  "key16": "2dTga2EXr5ERz3WDSTQZRRdirLTv2WfiRvMPhcUs3kiEWsEavKo3DwEpFEDCNQcikLagc7TieoT78UnHUYM2xZUa",
  "key17": "33tf2KrpHr6pGM32FvC55qgQCUpxRrhiub59LTK2BzJtuAXS5zejNJwWUSqWhix42K4YPTx62zmzwz3LwR4g7dmR",
  "key18": "397ZeDQiHKTnGGzieaGGCLd6gzn9fgVX13DqcmZY9EwvFsxiar78axe3zUoQXQ1WQXthxUeTKnbZpZuPfXfmkuVk",
  "key19": "LBPnjUgZS4pAJu8csjevVmVzyF4j6yuQ26xcuEVAqqTB42D53FXqSY9zhemURn49uS8sSXAqu5awzo7P2jByad4",
  "key20": "2wgGzjp3CRZKebVz4KfeSQmwgEMffi8nwC98i123xbAFkSBwZuSDU44ce4mUGJecG74ogPK44sr2CdnwiUyv1SCY",
  "key21": "4BJeNwzq2QvFtqajgHPsiUmGiAd2NcJSgCZ916ahQrMLMFkwzcNd8ZvrfiHjuBXe8ht3WQfBW3FTZi3UuXG75JHt",
  "key22": "4mJqhaYEd3hCcGHQKUivDqFVEEyBqj1UwgSLXd86zFbcsp5pLNcYNZERPLE52sN2UJKMhvkjhhUmVzUBN4M7q3f2",
  "key23": "2zfjkt43yDK22kpVm9nSKT5M7Sg9JTDEZFBvDWTUxwcYxqUx7vaCrVkRQCioPZB3XMQE4RA5bsQCFmBvPWeAxYf9",
  "key24": "3Lg84duu7xqkKzC1ECyFDxeavmw6WF7wA7f7oqrVh6qovCsKn5qoUZQvcf25vVtMZvpWkN35dzesNSQvbMYyhnNn",
  "key25": "21Vrzf7BoB7eEuqwN5FuBxcctwB53NQkn9rG1fRMcauT32RVexK4yd5s5zbHEvkHphYuauaXMfYo37SfijFXj7Ae",
  "key26": "5HSDGLNFJrKo51uEXG9R59VqsLdBFvk97NLxAfRXMzX8tqZqMCeFPy1rZKS1YAAsyKD6gj3h7cENd9RqzVuXKwhz",
  "key27": "3RMooUUP7FwthTMpSTNKaw8rGFkieYGPeaKr2Zj1jma37oaFRQWxmBswpoGHdjGJ53njEnFb9XovA5TLNKjeo9G2",
  "key28": "peyUnzR67ZUWevKNKif3XmFP6RmwLzPMPDjVcEihFJ3YRwoCYj7b5ue5BVw3K3Ky9qUgPwNyp1kkV3Ex4rkxKDG",
  "key29": "26ApwRCmNtswG99FtF7MA5HHVz4vyTvgSCaErisD2uDVTz8iPtgWcq3BFVDJwcDfmA4gJpKJRCrXzwK19THTVMGr",
  "key30": "3e58REP3YSiXqkSvtYEjapyFsB8nicqDVETJxCUFGssWbD2Nc1ege8m5qqQTh9Zzv3KL5QWWXT2f18MtjtoRfiP4",
  "key31": "2AwzWQpmzFWTvfJqUWJX2RbxTmzmRfF8eYDWq3zoTrsNx8LqeFv6GkrMw1PQ9Eq6srh98dhKVRBQ4yXMtiKFiQk1",
  "key32": "3SPfP1T9exdh5wYocyVD56sE337WiyKRZoMgWyp1vCdgb6n7tgHJB8xngdnN1okwEUx2FMuLj4qF3ounJKQeRgpz",
  "key33": "4iiv3MPzW3yLy8LXbLp8wcaFne5FZdEzGWZDKXksQQmjATBjU5LSpSwRXcrJ2uR5tieAxPLfCotU3P91RsuaQpnp",
  "key34": "646g6KjGLvJbPqvQADJEUv6Ybkv6hLDhfwsnpuhsJ8yex5Vm7v3M9Ldo4ni1Dm73A8WKWKEwB9PPCojx429WUV2k",
  "key35": "277swkWUhyDWtfisuuaceNZXyx8BHaZMZtTmsZ32C7HARBMvSsmLyc8gi9vJN1Q86BDiD5wDmATvssWZTsyt6FiL",
  "key36": "wiYH3mXnmiss6vPzEzZUYLgTqAMSgbeCJvJnpFHdnK9zHvkKnu2RW9FYXEouG2NtQdQZQcXSg2cQVAo1Xafqe9T",
  "key37": "3ADwxrfYUNgr4KjjgFb3hExxRYVuHw7T2wbnmvBVWMRRrzDqfhsa84z1nZegXtCyPqrDzD3VUZGNBRGTRDLKYNPB",
  "key38": "275gu3pE4WtNJx8S5WL8uMtugjVnRvVAWcuG1LjA13KpnfXbgYBzW61i6Ki4DMvueKpsnQkg8hRDXzFQYebAmkgK",
  "key39": "2CV3vRwgas3bfPfMH6Bn1pCw3Cj7qaoqJtDZq2CnjdtHJvMkrfZ2N4ejuMJ98cQ91qtNQkCHgzYUWUyU6NbZbcg6",
  "key40": "5B8bAV3hsJBHNwitMwwoS6Him3DHBU8WpxssRJnk3LeysRMPH5WVso4U7PrZxNPtkvyZzXuigtsJ9ZpP3dp6jxSp"
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
