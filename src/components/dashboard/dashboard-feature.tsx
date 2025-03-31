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
    "BGi4Ay7qrJoJrrEXVCvktA6p5LACXStZnHwztL8dTRs87PgwFeAeu2kWrKP7qZ86WXRupJZ3LUD87DQEPC96Hgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HaXgDAziLjHEJjpRzCmqDALwf36MjeoG2foa82DimhBDLh1CH2nuVx1QevsvQB28BGxdyxwAobnWHfgc7y43Ze1",
  "key1": "3VsseQVrmqqsHpZRhX5PKvzSWYFSG1Vg8sjfojvybSNBuCG8quutM3fQjBWaGCC7sKD8U8SgLyq1KQ874r32pUJk",
  "key2": "3Atmnja8koStYNPwmGbueX8ZXujTAJLozw8cXH5kWa8ScMf6KscBJ5bdZnhkdRiex5KCggFHJ1KgaYgG21kaqEP",
  "key3": "qsui81gs8pvKvTZJt4T6m3RfVaWwCDhP8GwribrYLXzp9Phs8q5rzuqCUV2hdSHyFbw7VT2nhEvGL4PEopurhPe",
  "key4": "2TGvHqm6dx6AeBMoRk4uS814yvuX818MSEmtAPRfZwNFQqtKAUuSC9GLZQCGNqSN4JDSjVMr6d1jBFFkcY4Er3Ka",
  "key5": "4BBbE7sL4N1HeRa4SnecKAuu2YUm89Td31G2GEx5vSk9K4JcWWPnTJuZCcz4vB53T6HFpJNwinK3NoAVXiRUxrKP",
  "key6": "3fwZEkLB3SuNGsjmqPA65z7ACicH3tU57dYrEpj9emVxYWeshmhGipXJVn8hRo5ECTSibwTJ5XVmsKe2Gn2oy8RP",
  "key7": "2oSyDU5pWEUpz9873aHxsk9hj92DRNgkCujUx9boHz6zTininA1VzZGRFTNzMJj2iWcLEzr9dta9vQz6EqoVt7VY",
  "key8": "3JjFN53nmyM7XrxyenRVCzvNx9EJdWZPsvCh7jtuod645QSuPQY1g9j6dUWdCoaTw1NFfXgaMzFq4fLUzwrUSj1p",
  "key9": "FFfkmbiLTBgZARGdnp4BVqapwrFG1hQMRHCYT33r5PWocqaVg6WCt3DqVPR8wuASnmyYG4tQDmMLMsvtEukwk3a",
  "key10": "LNenD7aACAq5iGiEfFEVcwazKEX3ZumCdpe3krbW55hvq4nu6YATH6nYd4GeXMYtA4bcds7pJWupCrJtAGcZxkR",
  "key11": "2kQppEsvQGiN1aYFnAPfa3nphrGogKPjt8TevXqZUPE3AowwwLPoecnyUtMgGdvW7J2tAkrb7t3GgC4sQamPfVcr",
  "key12": "62cLHz8WbRQjGRKAvfMtXFVkWHiN7xMt4XVWcJ2QtUtiJTe2HzN4f2hvn4qN2mgoVPfgxAyRcFZVVfAyAW4i2RwM",
  "key13": "4bfNCqEC3h1DZDhxEwBU61r6FJpozpL6Q92nS2rkrttZYd1vv7DcwPdy3HjrGjitqoR8UF2c7B7mnbGQWL1F6YEU",
  "key14": "3dVCGmqMMSnbKdw5jxUWf5SM9BwxDF1pGgs2LExZivkpe1Uy5T6urC2xQsmubEvvAqngXLNTnDztBcAXb6jiBgtk",
  "key15": "2UsRNaHCydJqAMZmvCaH5vaQxaJ9n4Ja74bPq1cdFq2y1NDAq9nARweXRpRK8oXXzHFdZMVGWr5odR5UeKskMrSE",
  "key16": "3XEs1v1Sh1BEyTVT82Zz8pmGQCi6Lxcz4wTtVeypX4xaks89VVgXbrS5q4Ebo8EYK7W1SNHCQ86T4S5ocHfA6XYf",
  "key17": "3Luc68KP5hnAfkK34Qge5B4NhvvwYm2mAffRER83P9i2cHrV3fAEQq5EGyEuTfbCFt1UHGG7YCGhDddyDYCZ7w37",
  "key18": "2f9QEpyxzRDGY9nPDYXK3Ujev75NL441KC2CRVDDCJDW4R5zrjG2HsB5DHHGVvnpABX53Ea6mhX7wNd5ctBBdvVD",
  "key19": "4tcmq9dSKcCP2hKVh8g2LZggtEcsUWduRL8sm3ZProBQQDvmQCFEHCquKUqWAGvuA3Xo66eQcSUP8cwrKJNeDs82",
  "key20": "5cnjmMwXN3nntBBAF9nZTP5Xf2anFRVhSzbuQpdoz1jR8WYvAVvjSw4MfdiJy5Wh3svwGVHJD6KKodVr9KYnQqVm",
  "key21": "279ixMHN79Tz1tL8Mr9qZwFF8sLYnB8NT6B2j3ueLQAi37w1om7EQQKGR8Xz2WpzZFx8FDbo7XkGnvMYb71d244m",
  "key22": "4WPK8E4ZAQfNgmphURyympCDxUJmrA8pDx3mrbLGLBEok6J3wiYsdugivkk9yyoF3yPQb6KSX6JaCdUmLYEKrzx1",
  "key23": "5mjKXrECeYBVS7PAdKW5Y4uYdNfowatUa2u7KUBZH3kV9NMNXgtQa5FbMuv29GwuqmChRnzTXV41GF3uiGLF3gu",
  "key24": "xwx9Gs61XRjQNFhPTQn1Nh5HQkPSaXsg56uSTtvmShvkpu7uGCsdKkocC2xKP9J4P5SbLXPcfDWEHEuFYJRx7K7",
  "key25": "2XYfpPZcCmnFoEmAiMhMotnThoGEn51kjjZudN3JeapEakdMqxWEfNAH7i3ifx378fGn6a4nNkCtqN4jL37o8Hvx",
  "key26": "2HDxca5tqsvvCNX7fgrtH8ZC3Z2GAZY8ocXoYqMngXjWPQSCjZ4h3VycnyEZFpsfSmRnHQmeBvtwHaf4VEEQQ1Dh",
  "key27": "4tKRYfh6CU1tL5AwucobaSMg6eN97CGe8mHcYRLvjUUbUDuqeKTGHije5brQBJgKZtmbQT5H1aS5fW6uGmP7gkmN",
  "key28": "5U6Umnx7bE6xbxB5dHTKc18DEwhH6PaR77sy67wgNYFkJfgDUysABppfXTVotjyWi7ATQmhcFRc2USgUj1v9AAjA",
  "key29": "QPd31ZLdsnC76pzxuRHcn6bJNaESJM2EKcZSxxUYNAX151vsmkDSAkW7Ne7PHVk1P76m6PcsS24U3WeNeWKnpv5",
  "key30": "MYrQE7cdtgJJyjmr1S2J7rS17Ugz1GXGVMASJxKSQJT6fjaSpnKL8SFZhFf2aeSySYb7V6axjw3c4QLXitY3rRf",
  "key31": "5vUutqmru6yNCUVaZvkbmarmYsQAup1QgqZYLvm4JdHB6RWR3SNffQvn8PjUZS578z4aGMxmorvCaMQsHCAshfpW",
  "key32": "5hBKF7QXeMvr4YsbUtu9t3JZaeKVMEUYNnP8B6uHnGGEHDxXVk9uaVxb1GXVVADdBgdRpLMPLHA45nRsuvCiaT4x",
  "key33": "63g3PZPdJTKrn96HNACu6JhPxvT7UEcb2KbspxoHj8ZX4nh4x68VzjEkZ2Y32RjeQYcSey7415FdwkH1yTKnqL4",
  "key34": "48LBhdC25wrW5YVjZXVoHqFhnsZ1z1LMNrrj9yTtBA4nXQR5WsSfrGRyWkG5QDWf5aZHSyZkJYCM14fzSsGD7cnA",
  "key35": "5J3aWU3u7421poTTKYBdZ4PB97bQL8Q4WVCPhDsSTD9UgWNk3ULvKdC6CRXzTKDEPXtJK7He74WZ4EmCSwxXs7p1",
  "key36": "4TXNBVFPvrHtk7FsBTH9k9eFYSveK8kRRkymSJhdcmJZCmx36DPXctfbswzYvXzNfDT2AUz77PU9EUxSbz2xsv5S",
  "key37": "3BGjtCHVjQ4DRrTHZeYCwVzbHNopoehroe2Xnwh6b2iq6bKnP6G2WosfdtpwjyUdTyQuRAPUok5rri9hmYxwNEtE"
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
