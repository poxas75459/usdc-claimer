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
    "53MGeyzaiVryj7tG3LMgaANM1xdyVtq8ZoKL2gd8ZLLChAJtFBFGgTpFoGkkhaof6vSx1PwPWQzerFiBrcdXMX9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gYsMMsxqh1QQdyxU5N2XbV5aYFsMn75q5viMKuMBveGjoBVCZmoW6WDJHjRns2fvT2DiSA2ieB77LPaViVA8haf",
  "key1": "4L7oTxSWDFiW6bsaJNyJ9pxBnGkAkz128V9mornBKYMUGA2KUqsJqqWQh8ZFa2f9FhcxmCbdk8YSoSZ577yNTpmg",
  "key2": "4YKVNuWkJn7oREdTKnR2fcvmfA9Sje9cfNAkMeuupJJ9e8MHcoHkA6KRUUcrdLxVsVxUSBh7TzVVDzy6SxW2j2H",
  "key3": "36Wqntpshb9mEaCYUcswR76v2pNFh7T4nmqoM8c66vsQZhZJw1Xoiv6B4qk1QjyexVixVTi7MVVQJzPM2tG9k1Kv",
  "key4": "n6bqYTsJfhNxgkbKrXBUkFoQ384Ewt9wfph5gRRcgTeHE1J3fAy84BAxHW9ZGBxLHQGTrAdh4QsqvMLMti3NJgV",
  "key5": "541g454zBC74MkmkMAHMy9aFgUewjEfZCnLC9iTigRXReaFiTw2f2ktNRgPsz8sEzSTz9TS9XdRZJN26vEKHS6jo",
  "key6": "fnMEycUc9d45zi1quGkzoVYgYAtFBmjEcdjzJGDG7vZ9vdDf61yfGheLSA2bucX53VWUuAJZ6rXf2KaCoGg2Npn",
  "key7": "2AfubFoe9WvrwsMPD8ZyXFuNgJKq82nCVGeZBCbupX7p4PeShA1uYaHcPgGT4LV37drxuAhyAP64xtp2FC3yrged",
  "key8": "2mkPvRokYUjDPhmqsgW1jb8EVdp6yivgon34NYj2CJvB3Mqgn2MuyHr1KRRn8mx7Ay66youHTKb1Z8jN86fDJzn7",
  "key9": "7P6fS6xdFAFVciZnVpmKGa9HiYX1ds3gDjt5ykAzA64WGRkC7RDNZecnRoK9JkrdMJkhqtRkHZRcGJZ26g7aWHY",
  "key10": "5hW9btJegrJBHfJNwZ8MH66zhB58515Eu223oTXB9Nhyzr5h7pL1ApHT1XFFURRfUvnVVt8KfXYa8X1TpiKs6LUd",
  "key11": "4KtJUKNigABCHa4MEAvHJ52P6EU5tXU9qbd3ZsJs22BBDchuVXSQPZ4d5pvBwJMeL92UZg9gsXekN6nvyyyrduAV",
  "key12": "BeaQDFh4ksrdgLs59C6NG8PrUCJWhyHgXkYrPXDM3hZKxUKPvRMYyhspf1wfETdt7ZMDj23Li3vm2QAYcWukCie",
  "key13": "2MwLj6qUeBPNhM7iNCERXxKfsF8qfYq3tQ6PcLj83utcMemsDWRB8wuqDD4eZzKFutn3pdX9QKRKyqVQLHpnm4qB",
  "key14": "KbFYqRnzv7JdubMrLpXrVZFVY1BynKMQm5gA9MCHANdmpbmukujbq2pjZZqksP1wPAHxgauZHfnuf3ywmCJ31vH",
  "key15": "XYxcCz8TbgZz7bwbH2L3uoYXRkER5e1RpumffCSDp3pTab24jLMa6gTaQzZUdmq3Xgyq5dFUgSVVSqBCye4N62P",
  "key16": "3kK1DLaniNuHxT8CcfURN89SjLZHwk4a3tnrCaGZaNP1wUMf2YUQGWV6n33e3YDiDnCa4ERiAKpmCdme7DHM7boH",
  "key17": "4cFe6vukqXpn7VkWv7jp89Qezhefnfz3DgEesUUWLgLuUGywFDpPLTjhGXDEnwP1AbuuH87vripVTFgKw6Tptysi",
  "key18": "33KFdYaTg9SdY7ptYbGRX2UKUbozFQapNFeACyRUzgTdZu8eHarkd3fsuLdrK7YJaFK62V8zS2yyEWJFuiAT6knq",
  "key19": "x67UAY1KtzGfqPBRFEBFtdLY2d2LWamwTYNNZdA9m5fzee6tRYAZrs3iV2dNDjhxRRGCdgwe7SKJ2jCmQxdfWpy",
  "key20": "3xLFbc9HCWdLz5goXpNubSmHBzZvgYCzKSaw2bDYkLbEDrtA54MJ7dvYCMKFQG43MvFzAfksPegU79TZVE29Fuda",
  "key21": "3AUuMFBdUxiTdxTC3XRUCQ9geH6i3eujxA9oifgR2Y2gqkdY1cUtP6mDrFwUwKiowwJFzxAqMGcpMA73CSHGo3wq",
  "key22": "2xVNSTCsjwga8PUopTCU68Uorqjukgrb5R9gAw9NcHinEzBabtGiKCvx9TxomHwLtyE4iBNqaBJT4yYWs3QHMYuv",
  "key23": "5WsMSxu4THPBSFUG3uT6J7cWSAStuAWQ6BbAkeWPARdtDHvykRkkuiHwNQHS5Cp7CMAAYDjFo9QvBDamTpgyHBAo",
  "key24": "57GyDnVMkGMr1wUCjVJC92G98VJem5Ubq73jC72qc4zARkT2jT1Ua6rq7ZD1qUbZoEfdJfkQggDeHdqC9i655rLg",
  "key25": "51WdV1Pa4TGY5vzwzQdzZziztptG7vHGSa1t6pTcEPwgxGt96txEKLCY2Bm1omG2cGHbx9ccaos94su2RsmDDwEN",
  "key26": "44AgnCaVAEF8ts9tax2rxttSfiTJVkEVfvwLNpZLxWEtuneSBFCk8WPpx2HcYCQwzMEvsxyzBGXDescDyQGFVLBL",
  "key27": "4Kw7p9xFTQzuGcqyZCqfXqNjRQkVQ92fMVwhj25aiepbrXNzH6dmsZWSmEKXu4zHWidrRspekjzFz7Dq8c1GTz8p",
  "key28": "3mqLPLQS9wWDXT4zXAVEDLDoLsmPEUhhiiJTLmNfFDYVMNVcBnsTrmCRXXxGnTNB1CWBY5b1SrKF9v9J68VJX5zU",
  "key29": "4Qa8YhBsYi5BeWrGuEjFSDDLykhSWmGFgZpjJrTawx7nhsiUVL1gHvqDxiahpdZddEA5sygJ1qxCAQUYigRYVwAR",
  "key30": "3zHgp77F349qU4saC9zDB8ijcQTdFoe2BCgyYyDwCprym8iae7mNaeamrSBkRzXPhhEegsHsz8kjLJrdor8DkAaV",
  "key31": "4QTY1xeJMqqp99TFme3u8nBbW683yteJooddNrpCiNJ6sosoqZYscw66Pj7XqP2QgH2zmFjoZm1uY42o3jMiWjVf",
  "key32": "i1kdS42HRV7NSRCKrA4mrePn2gasPxd4WJZdyMKzdezCgHLLbP1auYqEi7cunEBtJmvSLPfMFPTymDqAzZZPzuA",
  "key33": "5iPNW7krbd7gexyNnfQnTHYU92y6YhdzNLDYv6ujUKPvcrQVckJvxhHQW4qzrn6jsh1KhENhYtc39BF8R6NJLaBA",
  "key34": "3B65ZcwyWozakzJGW3ZUWrM6dQxzhDgfTvXwrgUFSGge7mWgMxmzSa16S5Ebh5XjUdFyBiFJ6bYRuDt4kvux5N18",
  "key35": "34tgpHxRaYfaacGX9GrszWeYpiXwdoyhBBs94uTDRzahWvddGZpX4QYHpMid3Y9569twnwWSHZKyr9YygHf9kKXU",
  "key36": "e1tCBkDsLgDafErqVXCjfBAq8TMQRHY2xrJZRTCakqP3d1Hp6inXaj32d4vQ9JXD24WvWiR47NNg7jz7FnYEYF4",
  "key37": "2k9yV8PR2ia55WwhCoHpJ9TkSKEu57VexR161fHrkBJwRiHMWpvPLajz8QjdBXx58R5E7nyozZaPETf3r1EABgM8",
  "key38": "4YsnUSiejp7g2rMY6yHCw2i4NH5TH1PsupX23JFWmgbGEKu5LuzoJzouDuiVdjjBDPr2TXzSvn569GmgBZAVq6mK",
  "key39": "2SPLvVvaFSJ2WY6BQACGQ43bJHnXrW1HU9f6VdqGQ66J5EnFASvLBvLNWDbpqR8Y2NN3WS98DpaXtphHaQvvxV5F",
  "key40": "4nwP28ZywUMMaXnbsfvdLpw8ApsLsi4YAXbsYoCq85NkRTgHhe8xH4XMqejWz8BZ8bMqpJYhb1xCg15ZpeWkuaNA",
  "key41": "vAnAoDTS4r1A4GbNJAm3iAT1U6CCkTkaPuJUzizywzqzHxACSwFJjKbxUeNqRQqEbvmNjpFXWtqfZJ5GUJfz76W",
  "key42": "4z6innN9D3Ayxv6ft3gDKH7BQaqtrT1mLVHdiRkWiJLULXD8r4fNGPHVPYxjh6uhM35DnJ6nYNQQEdqNQGiZ1ee6"
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
