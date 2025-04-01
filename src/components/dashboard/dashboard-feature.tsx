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
    "5uoVtiV7jGV6ktisCLymaDX6E3GTVHUTspyWNAhd9ki3KTMFBojCwda9nswLCNJjTSQq9Gsviku2C6RyGdidHZg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kMuZ9zGa7z4FyMFSzrFM7kXR1TdqmZ4U38mpQV17WY38mVYNu1upoZjZW6cKWHdioruMzyGtajuo4nu5KRrmU9K",
  "key1": "2LypeVzYQVw43LFpyip5NXvZ51TqGBUe56DUDcB4tUyn5cUvnP53nrB3smgha59C9sUm12a7pFPymL3PAgmyEXkh",
  "key2": "374CPb44k3jbu74btYTYed1kX76bLZhe7Dv6nbcUUrFzAMt4Ww8EcJJ8Y97VgdXjdiJJ2FnGshSnbSG23MtKVp24",
  "key3": "5JsPHzs16rJq5StJ6u86KPyRnaji2WfFAidBEqT7EbJ6BF7i3EZVYg82gJh3f9pKJQAHQYoeUqQMYasr9t9YeJ8L",
  "key4": "3XEJmDa7qatNLVadBS6JdqfipPLU3vZRbq6zPgmTNLnbkCCasYwBFoYsYn2XQqvHPNDrfEjmYTeFXUCxBwWToRAN",
  "key5": "2c2v4ve5fA1xnYn7oPpRBcSbgJEbTS18oAyrJgGZS8YJcXYJykqBUT5mGHCjzGGh8tGAytNP9qW2ByepxhMPMyAB",
  "key6": "59EdNB8G3EG694tCPPGxi8Q5wQP8ArtkHx93LryV9xZJxknd4UyisMnBYhB57WZt4B4gRuKueZ7iVeYS6m8fQAsR",
  "key7": "3YFdWYSQDiAqSqZDQ4BYNJkeyRuXbRLw3ufo3qDgdrt6bxoDUeRzgWCHFM27STG5fYfm8xMWTZ1xx7cC74PwAUi5",
  "key8": "1EHPyT2tGP23vfdAAE37jrXjgdTThQznLa3tgHtmFG4BMR2DwqwTYvp8Gezuhu9EXKxPSTirKwEa74BkNxhzuge",
  "key9": "3iHB4JRXn9nwgB6YLAAF51yrqwPdp323eiwvMAf42rJ2wb3Rk7VagGZLxKRjKnsqSxaZmrrKcgaMeDxS9zCvJqw7",
  "key10": "4LYSYVBAs6vnW6uXZ6djRqBBNE5h8azNmknrTarwERAPKCjQw2niZT3esBC8nRbbz6JEGniaEGkv6zighciisFfY",
  "key11": "5kJdZaqwYMQwmavQF9LAf2u1Yu1rgaP6eVt3Sf6nzHSr6cJo2Epu1pfhxVEGAMBAEBYfdgVHuaYqeracSTCB11kS",
  "key12": "4zubonEMQwpjHQ32EvqRirKdS3KC5Ab6dNZemWw6uXZ9TcKWz8JNVGtDB5bPVprtJECmkCEENAe8ReVHDKb2XoF6",
  "key13": "2Fh8iQ6qV2R3P2ZSNo38gq4KZT833vdhmFUno6oNtzqigLkHpBZBcKF1u1eUNJfRLVeMNy8ocx87suMFKjymE1oY",
  "key14": "3L3h2YwffsNDzJdGEip8dk35CAcqckRdaXvzMM8Vw29nNdimeD8s95wLCFxkpJ2ToMPgFSDVLCd5AuCrD6xr9NNT",
  "key15": "2WAR16Au3Bq7vMmP49LWFmQX2eAPtNx39wkSpb4YuTWFVshZ5pCq7e8nKMAjzgnrEjv7qXHZYrc5svHSVKH6Xt2t",
  "key16": "bUEdiqXQJyjgeYDLasrTeua3Rbfsa96vwAgSPo3hx1VtyH1RKF6cpPxQJ9AvqAcA6NirzVhh3HuVVxTkLB2bdDY",
  "key17": "5QGuuh8EY5F5cm3Xq7XP25k97ri8tboFww8EZPZFCt8dxYtYd9cpZ694DJvFSFhbC99bgCJtJw68Wg7zrBuVMVDk",
  "key18": "2ppQ8ofCP9m6QJifMnjkgvB5Jd7mzZh76fVDSW27waDSvb1tSP2mHqL4uPPjb4ejCj5uiGRnLJf8WVF294k9T6GJ",
  "key19": "5ghVupaoH2euawSbW5ob536MARcdToWjWg1Fiek7fduV2Rue3VTu7VkrYpLymcE8NQCM94HcDZayv1QM5cGrXmHv",
  "key20": "6dPznaDQXP8wvtyk4DgM5cQ5oVo8kKffHaWoJ3kBvLrrzET1JPBZcKiJdJhCqvM61rRYvGt16fExCSb4PKoB2YY",
  "key21": "dGGq18n2BW3E1L2VDFETmtJdMg9YeP4T7U4gtqb7d1SiaHVdBis7r6GSwJbj2itEmTwXPSrKBwhujpMCicdnPKi",
  "key22": "2E5iHavPDCgBfRsVxkcSGuXR1empNPyx7s4VLjRDiefMxaFie77bhoR2DhPwEyy53xkkqgSkphUnaz5y6zXhZuN3",
  "key23": "3jJ2iZiiZfbD4JDPqEzyHyaomkHW4ZXEWgRazcqDfjQ8YuPbcNScwTHwAxZgKqoG7np3j35FtsGY5h7cBTCpFgAi",
  "key24": "3cnyc7tSL39ZExYqpv8pde5jmqRNP6U1MGcrQzQkYzhDhk8JtMWFQ7uT7J4qUFBRdRZgArccSuAjA2WkwqG4JwLH",
  "key25": "3xm35zcSNpGR1rCFFXQuf9kPm8GcivuudE1WQtDNauYM1AQ9nMoJ2mto5ut8k2yU3uPTCgKzFLuZdobLcySY5azk",
  "key26": "v6WTzRDDr2Zx2ErBEjC991Ys8ssfZkGDDMvXxaoEZTxWjMyvZtoTDtFo683c4C5ZMZUPG4NwH9ryPKFg4BuUM37",
  "key27": "3G5WcNLfi5PT8hgU9azHDpn5aju53DUZkjSPXz3oB6D43Lvo5RwATFo43GpCh5eCaTukHycoekNv2Qdaatxu6rK3",
  "key28": "bAhsBANUnFRGGurmaTzn5u8yZPQGNu15BxNxKXD9Zg4CVqpe9eKbvt8NKRzD7pwVs36vFs7GArPDEwhWG9SudSH",
  "key29": "5EfDrLSBhgRtmXrdRERuo4dLqgLozP1jiZRHURtZTnnLKW4CppGNCAiNjBvpdwP1X1dVHpy8yztFm3FqpYsxJtXU",
  "key30": "4UY3k32nYGTdLTmvWJ1qMB1as4EDQ3sWAfusv5ZV8VaL3GxNqL9xx5euNthLBpg1mvF4rwLfWBHTu2vsn1wsvkqp",
  "key31": "5HfLD5KBNTy6nx7112zbuEGkWApBZRfGCboFy6f41gqsQvmCVmpV6SCQDNHEzuFesSRMN64PgeGKqyeWTykG8ZX3",
  "key32": "3HTDZkcxha6M4fwRyyfQz9xUDCE5fMjkkYMU9ewsesG2SrkFg2AfZGXSuHTK37kSet5tHwGM2xxJhWDPNbxYrPuN",
  "key33": "2vwmGCmFWSgiMpvnt5FwZqNmLwvrD2VQbAurcwpexwe17dcd7v9Htjxa6Q7Kq1ZTfmWhU5xxS2WepKmYsqKhuM7N",
  "key34": "3L2c7xtn3fE1rNV6hsToocSs5SEQ8afUqvC7UTygQeY8BCDQmY6AS2bzDoF4HD3dzcTg9DUXCFiwWPo5JbAn5F4S",
  "key35": "65prTyNybzRBaDqFckT6g5bsoE1oa58aSDQm4F8sUtKV8M2VoZx681MeG1JE1R3VjRqqTdqQttJHX1pS4C77MNqj",
  "key36": "2gjYuJfg8ErsTUuwUWUmBtGcvL7NCtotWFhLGxwkoEomVJ4L7QTYcZ4eYDZPJ8YRYTHVWYea9WLsEghiurf4dXc1",
  "key37": "2o3dCaKPKCketqNWJCx2XZvEPECqwRSoUmpNbZUETscFxZsPV8VC5yJ4E5pYgCkDp7UWN9PghBSsZYMJ3t5Nc2KA",
  "key38": "ZeXDS4FYFHj7Sqnhm8THMUK1u1d5D8vM38XJep5WXZq5TeAyf9YYWmSqoVYnR4dSWkcJc5zfLooNmpvBS4NXPK9",
  "key39": "hbcKcu3KrAXrz9apxRKtA2LSzhxPWwXSC4PRMWQ87Fk3FfckLn6pyckAs248LaNYwTg7twCx4rvnZ1CU87ZYY4i",
  "key40": "4hcRqcbuPombLZmi3yTPHBWekD6P9VWUu5DG6vBFSnUCrcBohVr3N7YpJZdzQeb4k45sU7c3FFJx8XLrUVd69HFh",
  "key41": "2VJudYmayz8n9cNvrH7MHLvqZyeeCpHpzbqKgQqaB66awdgckZBZBpM4BBgrBD2FWoV77CKZtkiS1KFd1TPdxNJG",
  "key42": "56mziiCGwx6Vh1f493wsSs17n5rWu7gA5wUfWoW1DrpjVB3FdHzGdXxjLB2sxhhp9kUGbkVBppHpZVRqJbTTByfE",
  "key43": "2oKfkKZGGK9HfNKB6fcV3Km2PvFcb6uprTgdAkiT2S24VzArzDyARqQG8q9Afmzm1FbonXVZ17iM69Ntpie7jQ5K",
  "key44": "2t8wMXE1v3PkksM2vqZQR1suaAJUn8X3HD5cUHZxmt2LNdRaULoCmJyxyRtPEgQj63JhXKbEcArh93gnAYJDJfh9",
  "key45": "4Jb9vvWNFGf5VzK5SJy7n7HtNGfmwjXmsGvJbeS1saYPrdtZp3coEH9YpLktj4jonbgNsrYdFs9S7MspbyYK45ih",
  "key46": "4j3rER4ECKHaxBGFGiFH162i1UuPRjkx69Q73JaE8n8cqRSwi7NuCDp9t2qkx9q7jrek1nNew5fDQkmXDkqwGtB1",
  "key47": "47J2c9GTArS1V9tD47ekNZ7oxmoymHE7yGbzDnDqmgzSGJgAuo1Vgtf61cDRdwpbu1JGePYG8zeEYMrMjmSjazpD",
  "key48": "4eBPWaPRVGwS985FLw1LKWzGGzQZQ8RpcvrtifpLRKU4EbknoeYn7itTfTghJPZze73diZMthPsb4gcgJZoCLcyx",
  "key49": "43QNtS2B1EyPWosVs697qgMQmNHFUdPMLxf2GV3hk3tHdPjuQ55XZ1tiqnc2yd22fnFsXwEMxcKZGuftxMpJfaDF"
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
