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
    "5FD3riP1zrMThSQHe43WjZa85Mmo32fPa1HecCKvnWtng74UKVFtegN4EuQN7CihS8vEqug6CyhCX3a1AvEQUY7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YYvpLpGF7J722L9apUKnuZbuSJ3tKBQgV9rzss1GJiGRWdhmrhPXdxMxPbjz57zA1BvB1q8nE7PyDJXhjTpYFWx",
  "key1": "3WbFrA4M54eFuGVaWFa6smKgpPCNd4A5e7331Hzk3LfA1gNjyx5dacKbr71XY35jf7j6VjTPuoQ1wk6GcztNg5G7",
  "key2": "3BvBnGe8FcdYFQozqD5943WBmF6PSC4JRP3FknH1JA7k6oWuHzb8PY6PS71kqtNWEunVsXsT1aL5EQwfEZ1dWYTK",
  "key3": "G6fGWD9iMFS3dHbDgyQLa9UQ9yi2KY56ktRKDU776hKCZ9UiREZcZx9r2XW1gJnted2MfvYkz9zn7FreoDWAvCm",
  "key4": "357McxQwWypcibBXYjadEydseoFsdR41drp9Wq6dAdyoMiKbwxa5zxrZN6ChBFFyzTs5zugi16SQsF9m8JdgyEmi",
  "key5": "GpzBMo7X32EaJ7GyhLNsLGEYfjx7WGbQwKVaqFfnvNZ7MpgPXbE8uJvqLPReo7CTC6BZTxmeqXJGNgjeGWegrAJ",
  "key6": "dWnBVs6sYXWjAukDXbsyQRkc1EesCxjsa8VPYx8vcayMKYL3d2JKEHmeJAMKAp2xCSk41xhmrFYavNdJx8b2WRq",
  "key7": "4wT8nkxJurMCXya6fcP2e8ZHhU8FaagzcmoF8HMChmMQQrhJGkJn2CgW3dCHLF5sJWBw45oX99wwLvYjCHDgWbc8",
  "key8": "593VxG3pw4jH3qkYxQMCf7GtSxs9VmMUi9K3xV7m846wHmoExynWNGH881A4DMRD2w9zzPZVLjF8uA5rP6hJXmgS",
  "key9": "28ux5rDcepyekyKA8U33rPquvxtXSQYBdipd5FdubCxRFTxUW3wMasSZegDbna1uLth3SWyumigx5Y36ssnH2Fcb",
  "key10": "2sM2v3HXdxmpVEgtStUsQ7Zqeddi7cyyaLF6gvp8CRCP57J7dUpVFmptykiZ5cELqhVBupMMjB4yrotP5Wm8tCzj",
  "key11": "5iwn9rvjm3E2NFN4f2G6ZAZ4jKnKGRh4QN3doKFannjahoTLZifyKYwh49qYHhzyNPLssVwmswHxGv1txyXfbMGg",
  "key12": "3rwxDf5ujfWB4soQbbrEg9yufvnL2jnnSfyABHPyPnyCovLCPbyCA65vAzCHW3VEHn9S8tASTp4PbeT5TmTMM7gT",
  "key13": "4JsfqCRp7FSnw9Rfk7vdtsLGuGA8QoTtDe31QFBvofSx4GYehkcrypGDuAmjoN7QG8ccLAZobn1BhJsmM6hQtmiG",
  "key14": "3DuTZaBTo46AZbZpZFd9Sn1indcZidhs93vDjRyDVbxw4KvJr8D4dpkiJEcUyp5eJ6gi5hwi4sMfXMqnjrYorJtA",
  "key15": "3HPhUC5NaRWW18dvqeeF7S5npzWmS5EZf6MUnfmfM7T8iNo3pj8MNFyXkDU9xTAjVwnsvHWCkds8CYNnSuNetKkn",
  "key16": "56zk6Quf4rDJP8R54cJ3FNMYBw2aCx4xbUTLD7qFs7yFML8yec2wMtZWbkcfvUUYtwWtq1u8WaqdLwk1rJJrUsaD",
  "key17": "pgNuVPBKLQcqttaxWhcW4y54fgQJ7aA4dCHfrZDkGW5Jfj8HgVmVFR7219itdwE1e4HhBiE7eaTgQBgm6bnv7NT",
  "key18": "3U68vFuMLWrQnv5AjkebJCkhKHEH8tYF35ndkMD2cPGnd1mGLiVhNfbiWTvhb2oEsNvhzqM6nL8QuBjFxMHtyuYz",
  "key19": "2diefPVo5tWD1ujUsYmWN9CFbVN5KKgSo89iAAPFxs2DyfMS2nBWEhfoi9WX9Fu7F6fVT3r8XPsvUDD6oXC7JiNR",
  "key20": "2PuGF4zz7A4fRwBSbu5vdrwqCiQcPEB7ra58TczsjQpvLYJUi4vyHL1nsaiBxFvst2QTUJbHSdMYUehsrN3nyirN",
  "key21": "47CRjDoNBjVAqqxPVsDwH6hVBcDvPspcjcSevcpjnN4GEqkRJYW9JU4rqB4nxbLpvAqzNGLBWkWL3D2AvThTycB2",
  "key22": "RwqZmoBXDUyv4djWTuSrhJjuJb7adF8kWPkvgJtMq1mxiPDpgpjHppDaHYrMkXCBhSJYvgp6PZ6BrYy1oACUF73",
  "key23": "3EHsAWqZu7EETqtQXVf77xk4Pj1WBAanRJhVv1ZAXq4S9c6YL6B1jLnMKLXQwMRgVnnJGw3oVJxBnn5kDyyG3crY",
  "key24": "2FtTyawWP8dTmtauBC3wHcU88BUmpPj5H2vNEtg3q2hoDfAC1s8w9dv5uVgiHs81qJPn9kqm1CRtmhNeFKKQ2kb",
  "key25": "2ibbZidiHCw54tSBzEPT5EbTZpRVtmAkQEW47NU9GPf4yLvG1qJfqDchigUK6hwJRnuXbRNKHG5kL1WqycGpyESg",
  "key26": "3zkv44CqwuHv6Lq39XbW3eo6xQrqa95kNGUpusbBm2Ezvm5Q5BPhzA9MYX592pHKeCKtqNX6VxES3KzDJiZUwgD6",
  "key27": "2xWDGnTaLEarjFUtkGd5mnFFQJUsp3WkTyeMCepqUpBhq63yrkNjWPvGSwQiUMxEuE7TPWxK7SRjo13kJ18edRR1",
  "key28": "5ozvYrB173RLf65NoSFVZ6oN5F7FLjKzeuW2pLCHRbPC1ZfcAseAEvTd4gi2VYjbdx7BPXnE7XZp5kpFN9wM7LJK",
  "key29": "2ceymS285AuVTtGBfM43GUJ3ont8tcqXw4VEquBHj7VQhBWzseGkX9Hmb3ZnAPAvXDT7q85XCYDTnJ4WaZc49LFK",
  "key30": "4Vt5NMrbyELu3hFnSJf685yaozBPc1xWB1ZqSduBRhS3bPQjXue2vKdd3wBw7YjtoS7ZdCL6cs1uy12QhzkvSwjA",
  "key31": "2sLk7VKkB7TVkAm33n7xqdB9bjRtqSHUEeXLSJHnCYKSaGEhDvLV5KprP5M3kJUcGMsgbUodePukHpDEjbr5ndb5",
  "key32": "3Af4cxnV3EiAoxzVY5D2kgG85mESu3kEgHeamJ6iLxcMm3a6Pq8hTRbaLXmsYhjfJfmMYmr28BV4iaWygqCGSyAB",
  "key33": "5RFqeuNkmnmoMoppwhaZq2NgLbgPxc1EGMWCqaKhUjFNinoepj7eFSMS9MnqRg1S8YS32hDxSJPTWKgbEW1qwGBi",
  "key34": "39aDgwvepDD7Uiyx1KxvFi3vJ2Bxeoum736SDEGE6u1LvjsbJnqDbuoFcyjXVo4vwsWdXHTMLgjYHHjYdR2PSNb9"
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
