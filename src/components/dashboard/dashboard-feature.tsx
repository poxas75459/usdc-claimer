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
    "2yy9yY3JA6UNWsabyj9M9daYTJzJC73BzsyqBfsmEqqwekctBF4ERDopiJbDhz5xqKPbWoJtBwKhjGURyDMRgUuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "459YRCgju6CCVsL9WNXhCE24ZHsTXk8GoeNKdeLJmFu5mKSg8EBDPgTmCWFi8fCkipZHhhcgCiSAD8uaUjSGghFG",
  "key1": "2kyvKA6VPQEnapbLBJkPP4De9NKYPSrxd9thiZ5ZPw6Zhzxtyi5Rg3zWxoADofFUPnfWLeWPXLZeai233siSVVou",
  "key2": "FmdeMFWYjhFZBMmgZzFK6ZogvR4AzLFF7VLy8NaxiiVEskFfrm6TX1LMjLk2uHFqSZTW3MhuJKS8WfP3e7jRJ94",
  "key3": "8QA4k41y97NnxL7ZphaU52p7EPvigpRGYKHh31ufyKN9t5TgDxTsYMMNeNE2i823fz3SxPbReEbVSk7UQJwRJQW",
  "key4": "5kpMr2XrxMDHzbwZnRc9vHDgQPsrVHG15yQRsr9EqYV1k3Xi1RGFeRRXsu3UEHdxfUV9kpL4cSoNMpMKb8xx7WHV",
  "key5": "3yLRcCMFFAhUXTr76sMcjmMCqBwZf3UceGig9QkUp71NV4dsmmeBUSgSCuCAM6d5ZnCmbKfNrqtW9LeuYqKBUHE9",
  "key6": "5nsSFogmJKzDRNCpZ97V1mn85cd84MabjqcejtRncrcgUZYtGcLVK2B8NMkqzptvM5Q51Q2DKpGeQeHmb438ha1W",
  "key7": "487zkRRLunDVWbTDaFLQQbNG6y9bKQ9rtF6k623vsuvxJDgfvHtgNFqm558u1jLDyBEuSJ1AgTiA5LU5moxTB9FN",
  "key8": "gv7wLLqCjboXQvrNz8dKvPECcq9sBzTwUXranWsDsWFCBdPGeiLtYNT2B2j2UfgMKV99ocGBVAG8vTxRxauxGoF",
  "key9": "2nLmrqKNCA5UjBoNfbAVgAbgDSoha6QMPMsbkwYTEVGB9kfDnt3fUG72sNVUVhu8pbHXSD4omEGCUUFoR1Uyc1Tb",
  "key10": "4ydx4qPW1sEK6cDsoJjJu1NAAANaUEiBQF373LRK5AdKu3VCsJ19scDZuBacaLaLomA4gsqYXVHaiq3x75TVVJ3n",
  "key11": "3FDLPZBreXuEnEvs1ns9NFF63BUZ7srukN2ayKvahJyxHCR4a8T14jpS7n9FuRZJLjfzR11cLmPvZdweJ1uWjuNJ",
  "key12": "WcYDHGVxP8szHGfutUyJKsd7VkujgD5nju7ZPBNuCewJSWzrCtZA9m61i7dd4mschHug6dYPUr7aDion7FWMkyH",
  "key13": "2HSirE7WaGrhZeziNWEhZKZVHvbzvGPjFPmk1j1xYg8RndTbhFRVWSPj1o5JwRJLd22SQMkCTBZZFdvY8JzhL4Ph",
  "key14": "3p7PiX3ofxGBKSFekhuzxhWH3mDF2aSJ2HqyCQ9VnoP4rMrSKuPk7p9L9yr6TZ6SvybT6gHj51p1qTaisH7xhAwp",
  "key15": "5kUPAEwnh5stu7UVpn75QXbet3483chbfReQpLqUBa4UqDJTa9tt7aKojyJF9qrUbeLG3VTsgik26BAoiHz6ybwH",
  "key16": "354rW64oUbPQURDDa5Xz6Cpis4MDgohNR7vVvW6aAfqz8ftdf6xN8atBNeLDyGKvobpPLYxNVDR7Bu4dUBhpADZ4",
  "key17": "3fxUbvb16xJmZxvPx7ksHWtLW3aAMor8scZRXHeGcegpdWcGeEp6dgreQtA7nbiF9xp7N7VUBdB8nEe8CMVr5i7X",
  "key18": "53s7PSrVLraXwf8AZNhDerPwjF3JKnb1bN4XXne7rkFFFzhkAsuCyktCKx9C4xPV5NEC7MaYB6AGfmnaeQt5fXvp",
  "key19": "3rEqzvKKPDz2etdryD96KfxS92Wnt3T4czKbdGYf9nTrCuKry8BwrXuBd6Xy6vjSbnJ2WAWzWiWRzw6J2k7hLmHD",
  "key20": "2rboSdrLHu7KsBQbDS9say9HsZbSnh9mWn3Tu3cAQdCahvdy16yLGsFit1BzoPbpmCi7Js24z3TNASWNiNSo888r",
  "key21": "2xSzppZkhp7GExqWU3AgpHzUpdb1g4dSxki7mGB1vcYCWU75g4q25gtKJdXXxBYEoLf1CMdKSKvnuGEtMsHAeJNy",
  "key22": "5fhrBhdh83WkBSDxQWXyMLdjCaaAPRaK2PMjehUkxPR2kgJ5GPjiVBbp8VhVADf5ZMVKtsnvJsWr69tjZUw7S2od",
  "key23": "ZcwNei7J5gscEq8UCjSjLou3BzbT35BiVERuhe3aQ51um5ELbpiRyBJFo7Atgztbetcm6D6GgKHTJ7QZTp9WN9A",
  "key24": "5mSGzxraJvXdj8HEvYQprSsF2JSEhD4EPr2fUUCtqX2sVu2tEQtBoXT1x7vf18B6h3J89Jr9NdZ99t7yJqV2MUsH",
  "key25": "4FL9kHbmDmbxtGY7kDiHgn1BPAghLa7yZfp7cMYXMBojhaNJiAQoVsV8whMtLfgWBoLBHUoSQantJ2dArWhHTcTV",
  "key26": "3cqmHG29atFHTtr2bHqGtAfPxRPuXtF2RQ3XcytQA5XyongS5xEFCBS7NKhPwiqDSGSBCAxJJ9JYLLmBrGnRaA8B",
  "key27": "4Hp3BowvrusdEtq659ELX5E9KxhgiCXhKRhurftkYDzD1kHQvcWEdjM9sw8GPix5B2qbEr89h7kfhfc6dAHQ7KFh",
  "key28": "2SNXcKFVdEtZPQAcAFeEzfCKJXxbZ6hMFU1fRf5jkcpE8bT7jRVvkHTtZm3e9988VfUqQ3HBeKGW63sxnxBd11Eb",
  "key29": "43LgR4XVPGpbUes3yHcV2NivGfazoWkGB6pCFCqU7avNFsuc1FHx8W8s5CGzho3rzyyWaNY6y97tVULSJtfSGfnN",
  "key30": "5UoQc85mLv6RfqWP9AegNr5MyXNtPpfdCmc942mmm4rgDJnxsdpR6Ej2Z7b5W9bs2TXDoTcVeUikBfQW3wXE4gxb"
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
