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
    "2LWu5FYjyDDcFqsqfbhzefqvVvDDjUcTwh2qjkKhamvA21Nwc13DWiN6fqPxghA9qafYYZoeuoDszTpymCsmQHnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uGiAcLeRJ99kVjqzacUabqUs8MAwiMjTrWbBb413ULyhjJ8wfUQtgCfXLmBrnvUJspQ1RTRj9LAF8gfwLwnhns",
  "key1": "AEcYMyVjj5dsHnEeYQbDJLbjYMUEknEkgnba9JwsrfwJNpwSpkn9TaNPGvnLegvKQpKyMxyzdwchXWd1dzkRi68",
  "key2": "5UFzNWW6tU978SikAdL2DM9dEvwynMF4GqU4ociXiZkGjiFgajYSfPMAur1NYwJptoESvvVEg6hvhfGeZJa3WWGy",
  "key3": "24XqFPWKQgheW7eMccQ2RpKyHcQ4q8YxpHZMxwn6ip3C37c9dFWdMczpbSgWZM9soXRjXhRm2DaCk6SdDRRC7Z8P",
  "key4": "61AAcSe7UojaFHF81erBWGtwV9F6sJVkfnyTgzhYimHCBnGokhpTuLEkEu13F5PV8VBEmCQSnZrF1wM5e1MRYqnf",
  "key5": "DYuVkAukDXSFLpWGvcWJJAdcEZpjZ2G4Ej1e6VgEtzDrKmevPkWNE5rfiH19wEVGzPGW5q8fzY5jbE5ZkmzVwnP",
  "key6": "5EsDyvP5NR2RDrwWkXoqNxq1AfHDFCnNu4JgCeoBn51Z5YtC1ZSc7jkAedjzcv9Q56PkVFH5DccQxdFT2WpWE7zA",
  "key7": "4dZmaXRjEsmNCtpJyGNVzncpzcC4dtfvB4T2UbqqUBCRM7k3xtpYysoEaVDG5rYCTqH7tHrUw1UaAyanpamD4u23",
  "key8": "4oFxuDkmbSrmaRRYRsvYhPRMEQ7vdG1pRKejoMFJXwQn2DxbQGN7LJDiVDNBSC1bowzGboyeo9aQQSFNP5hHsngq",
  "key9": "32KssCwQXdmwtno1iia7A4S4YiN5TTDpMTfwrwwGgMFd67Xv6hmokHxzRcjAmr16azf9RvLmcVRxCEfNcoPXXz1w",
  "key10": "5rnnAuwzEq8mD4dcURK6vP4usEUnhcS7aAbMYt1MATr5VN9SUBn9SkPiiFrYH8wLWebreQcRcFta6u5apu5dEaAh",
  "key11": "2yCTsaBXkGyQo7MsPeDW9C3s6fjmCBikVVTWss4tbDrBftQKSxwTs7TADeR5bMpgy89KFSqBjc7okXsuKQTuJhzZ",
  "key12": "2BuZi9ESsJXCtECXNVHznDJGNbusmfu6gqM89di32G18wr3xqLEiBdFFsgc5eGrt6mxtkM12ThEhtvV348G29WYe",
  "key13": "58EDyVjm9Jci5v5Y7CV8ENgy1hsUF7tL7Jo1QPr8RrjV54bYiAoPti7RZnEDWtdiqBMFFPqh4SK3GLMfocmfNx8r",
  "key14": "CaHoJ6jPch3f6rLGoYTTa8PoiYiayqALYGqH84Q3V8U46ppNVCJox2fjnHU5jyw57xYMb5m8aHNqK6GzKa1fdub",
  "key15": "2ajHJ9oVMUTMh3s7WapNjPqEPfm56nHRAyujDDEkWmmW9dqfisp9KTyqBkUcuJjeprQum37ZyHxWr5DmhgABGMmg",
  "key16": "5w1zCUUJFnywXm1bhj17ue9XRTeEkNsjGVtmSjjS1M1MTTkyaqkFEyw4E5MhGsqDGyLVKEWU5jS3ja89bhj7JRiZ",
  "key17": "3Czf8ZjtjBerAgmSeazC4qgjpt8VuzAMXLiow6H5ronULPb2vdgZL8ypFuvqtZfox25euWe9PF6j9xA7AMZZK8np",
  "key18": "24KSMXFth2ospuNNLpFDSnmQn4G7VhTcTQ2Uo1Xug5V5YRVFQmEjRa81M6Ze2ozdahNvd6o1nwd8pYXURXrAdD7s",
  "key19": "tiyL8kENxn1owEttgF8j1nuqqcVAARojmexcMYxjw7H9L2Vn265zjYZNmL4oz26zCg12aLZ2E7pA6uqn1iqVNtz",
  "key20": "65R5T3JkZgjZFNjnySvxxS9QPLnBxsCfsxdEJpQCEQuyr9GUyh2iaz7inYfyADDU4U3jBZfShMwmoneTDBM7mKZA",
  "key21": "4ugREhbo3dD8UnMGFsLAekmemEQDUWygzQnfVnPfTNuvt5sKHgmKo8ZuC21EjHnAPaqzMpfdXwvVuBKrJ8SyQFHR",
  "key22": "HmQXn5PzJZC7JLeJVzXtcG1m8GESXiNKEAsNhspXueE2EYno6zywA9AgQ5Qvp411rEuK3rT2qVaGbdVW4WF98Ma",
  "key23": "4v4LARoPvmv75a98ErohZUTws4UHUfofTfPfQSx3ga9WYwbcVyyfpstg3nsV2BB25UTmAv5ycW3KB7nz7ib2MKv2",
  "key24": "62ugsurBEgHaVym9B8eeLBV66hLJjYSubNWP3qbnTiJcYJGV9AZ2tQqNUierQ61XfRGrJ8j8Z3JVPxBh3tacb4qx",
  "key25": "3jYqUXKaHS1LeNFnX3caQrTdVFP7bC8nStSLFE6QKBsbmvvDrDkusk1QvbpGnaFtk7JXkVzi1e1gb4oac9GZu6bU",
  "key26": "4sUTfj3tQWoULgJRfHrcLbP6HCHeUQ1CBNBZjo2L3DP2wu9Q53NzrRbjd9RURVFeg6WgytyMrbUdfDswYNu5Urts",
  "key27": "463arT777dL81kF3QBTKWqFYAqWNhJikh8TRSrtbjZ2JB2KRqzV5SKvnFwvv65pp6jmfrwEb243bNFCHeYd347tk",
  "key28": "62rqR9ATMovQnbpZH7WXMFRiVM2Zyia67SG6GTUkCEWbC3VRf8qde68HZUKFTdG5txur2cSe2mzAsZJwwevZhber",
  "key29": "3D8fbTC4PaJ841UQQPEkbtzNaoQ2zd9skFP4k4LwhXoPJUWiGZYczyXvfYMAgVJDXJPDwbGsJYRAiSdJeHr3WBcX",
  "key30": "5E1iA7w8TCRJk8txyYyyenG7uDSGYkvuxHihzqiSQoFc3HrmfbyPkytkdZtXdc3WwGMyiQbtca41dLhKGAzEkxWu",
  "key31": "4TNQQmVxoHDpyXhuuSQcKfJxL7tucwDmzSFkh3upUbutgSJrpCH1efo4x2Lc2aquwjRxUPKXvLUrCuAKFg7fwtE7",
  "key32": "4bTVmipT88VqBS4S1z7He8yQjc8YKqSWL1BunrDrmPu1r8TN224wxngNfCvGjMCk5JdiCbNphb1pa2V8yKdJeX7U",
  "key33": "4qFmiA5nV3jwFCbUisYMyneU3Ubx7t7AJQHjJKWvfrgNokXoAxD5gQTaTwodKywsooJUei9ASvDf1qtEdZG2UFEE",
  "key34": "5X7NokmJKXqpFKsnC7ABPdooiqqYwTfi8mYViuJaQggo3jbBiuooHVbDSmwTxAwGkVLczpC1bNfqVZp5aejYcqC5",
  "key35": "r385uoJo8FwHkg5smfsgHwFfS61rsQTRwwuC4SMNtp2Y4uBvFfJMLM248xKAvUPAoRPptJVYRJLUERnfw7dZdxG",
  "key36": "42UbmGXFkmYGb5qbpQvbNKVb1XSJ8q98WeykVjmZzCzrhjTAbAq83pKqQqwfjWbUBDqBgCJuBKhC41oMZh7WFDMT",
  "key37": "4ZdHzwJ4tzhB4aex9FtgG2u2V262R32ceAgUemfY8nRVDcuqmbHeDLMPu1VMcFoD49TmVCeKASvnEyEgzU6J33ek",
  "key38": "2C7fSnyNqtngXRPMyJTXzkjXDHtumqvZSsYxThEqvpFMPLEUw8mrRWfY2oVjjMAsiUuV6uQD1gQTdQKN8Drd46Yu",
  "key39": "4iE4ZFR8hX3tRseL5UGnAYA9MPfGhywKkX28gC5rSHvmTKHR9X6i737Mzxzwdn5jqsrW3F5ipZMfNQZ3mQgc4UaR",
  "key40": "52EzbmJg7UkcHR2QDrLf3ThvaYRB1BNahYes6VA9X3vAvfqaHxJcE7YoR2XKVy9y4P83kraYxZa8vAVfG3YvvVBF",
  "key41": "4tkaQ4qDga2HNz5HmB3VrbhcW8TZf62aZz5GprGzDcbA8JwnmprBdDsbgMXADhrikTwPDBLdoBePskvXukdQLwid",
  "key42": "gb2CrDtdJ2PWBC8UwYERMSGURimeoLgc79tVDZWjHkgww1DWoYm5wbxYDVcWEMKp7NQNQgHrj9Vs4HBrfhqnd4w"
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
