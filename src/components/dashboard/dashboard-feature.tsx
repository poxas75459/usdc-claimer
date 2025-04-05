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
    "CXTRiJ7pEGfaFiTXkRqrx2dR19MRMKXG6M7yNVFf9PJgFgiiH8B8T3XBb8MmQJoeCXrb21nx747pt8PUfsmigpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zyDsbzcDJgBfgND2kiufR3M1ZZRnks17aZYVxmnKzj5EicQq68f7eyWqAbiVA8yRiS7FN1mwgxrtLgrmot3fsqW",
  "key1": "4SikTEMbcSBhNowKyxsoLo5FKRiGTdaAjHcx6Qfjn1hkMH1f9goeRA7mixnxVd4Zi2W2etWrubhjY1ps1YEQH9Qb",
  "key2": "3RKghLiUeupn8AadDRxxiemPST1AiU47NMhut8RT72sWMPEqWVzgwJkrLpBEgYL63YsG35KbDAqc6te4nB1GhZrj",
  "key3": "2vHXCiUqUrzAhUw9mW3tS7f8RqG6Y7SVvTMZi3Jih2572doqpDnkq8j3ZCZvFXYz4XxJzvocUxCccxukaRJfqXZf",
  "key4": "3Lk4LRLF4BPkYMPukLrsHaaVQqch1SwzSnBMVJWGh2awmSCqEA5PvmF3R5tTioyCXcU3KKnXimae4todhMyCNGk8",
  "key5": "2JLhgsAmhXUnMA2gMTFbv6QTmejByxBXU3kJ8hKkVA4jc49L3UHJy8JTaRnr3c4oX6uv1AnYi63KxTmLwJdNMZ1s",
  "key6": "251vfBDMQQHJNmvsBQKW3kGmgDmnn16expQJh54H7HcqnFbfTGuJQYyjVdx3AyLFeCUToxWgsSEyCqZxbEfKTcJ9",
  "key7": "qNfJghLzMbMZiwmafnSsbasbt2Y3pWi8xV8sh8ACcdf154myD2Drij1aifWBzdAaMUgbReT2odckta6PZuiDAgp",
  "key8": "5uU6AYSUTn8YFXc1fFcD1VWUumbS2JdC9bRB48KNxBXynxCzrJYG2t4Tj3nJzAmhkuMdVHgnQxNLt9Rijj4mAbUY",
  "key9": "42hmWWdpX1uLee3FxCg9fZ5uAUz5GeySCgcNpMeedDAubPv3JZo62J26q9rnWnv2asHvC5xDpHBcwFesJjTrYT8M",
  "key10": "2hKRfXgPrZ5NjF4QAbZSBAYnAM9WJQzWuS2XFA1pZAV5wAGtBodzWGtdyQcBDf1KfarJsMQEpoGNMGmEwoEQ1Yd2",
  "key11": "23Effx1fmtH5FxNReXDzPDa9SZ3uu7PngEENvWDwEDhdvx5nczjMu8fpithGBecAWKRmHtrHh8sdnHc1rrcp4uWg",
  "key12": "5dSn7PBAbR6o6fSKAht4y7jeQ1qAbzQbCMSHjSnB6AhcMxWYhu3Y9FxZMKVfYAf3xQYbFHR3FLUDQAJ5Hp9kkMR9",
  "key13": "5Kw9n346shvVA1aWRJ17FDjpLHbwPcncVMmCiBLSp7LfMsfuCVhttsiEnoyLsKVgQNWxv82SHFVRVUNkzwRJ3VQV",
  "key14": "2XjXgWwvVeUjUoVUkWHQP9S18hKKM2CWTdwuPKWP1JNifLdPoyv51bZbKksknsUVhA9M73TxGwcXPGw4fgyp33Y5",
  "key15": "3Cyj1Z2o4oAEA4boRXmiEwjGqGLqF36rBaVQmhKLQRoynnPiz2mcDef2suG7sK6Gh3Xa7GZYryaRCWyaD9ZskAKK",
  "key16": "5ERSXzsm6zagPd56HGzWpTWvTq577wuY3cHMhwVps6vD99k4Ch9QzbXUP2qasVRHP7X7jYuvonuv3DyJS25mygLn",
  "key17": "2TXCPzLHgnDppvBxW6eUmxea5m8w4d1bD3SkX3jadDJQYihCFkvwef1qaEyCAh8FhT1ZeC3vNicgAST1weKKE5RF",
  "key18": "2ZDcok4LY5NkkJBPiSQyRB7vwFUx9gMDAvXk9GLZfz2vuKy3M6tAdz1fmNL6ckYEtieA7wPyRPyvE4sjS3TzNGnL",
  "key19": "5wzFB5Kh6jX5vEZCsC6dA9uwyedzH8xz92zGVbKEYNjtW6YeJsHaZPHKDJ3D1Cz3HsquyDTvDFh59uSNyFUpkNMa",
  "key20": "2HdWFQc3BWbQddHfYtK1GpPnTUxwFgfrojvuWBy29dX5J4GzS8comQ5kdcNKTqFwAfJzUQ7cWNopD51cSstibTJx",
  "key21": "49uQyEWkRd4QGGSS2X5VtCrSDhDAV3dmwVgQTrhD8hp88grQUkX6faUBveNUVcgJxJToGFjyEWsVPAECtANY4iMH",
  "key22": "arFL63fzBbKwp8qV4452LNcZgnE6EQdtQULnHJbeHAnW2euXnL6wX9yqpToxDX4hsUprzPZxfpMFjbUHhS2zxGh",
  "key23": "A9szed1WAEtobkotkLHdsiGNAr4fv84MoGpwEdQU6LvjZunkUMySRKLd5H57s28tiYWNEnkzLPJRKBiAMY8WLni",
  "key24": "4Gn5jFk1vXGatC9i4ZQnbTNrFcxFkukV9wRWvy8ihgp561NqgD9FrLb7of8i4w8JUszsRFmeCRAEaAsWoUxmzCqS",
  "key25": "5H3BwfR1CVDJjoFMwuZJzifzXCQBv53TNKCDAooWqPbNZdW7v5EC4AQjc6efm4XNPuMEjJ9dv1d6wz7qcrxV6QwL",
  "key26": "2JYEj5qgDZiYgpeR2Kxe3E43XEEx8BxjcdosjrdgXvhVwjMMVByPfWC3jjzoam6QWYQZrmDFXU5DbL66GV8kwtiY",
  "key27": "3w9DEfTVBYimYaHG9HJLxhqU5gdhc5aaKJorEEjSnYWFR2UjQMfLv7M296ZZTYETr2vaLDpfAivG2KGbZEhYNZAi",
  "key28": "4LbiFUuvnxSwzZUMjDuXoeN8KmwQ9UZrr7qB3B5QSBDhqziMpr9Buke2TDtcM5VZvLdKYmtVq6Bz72KMuBdwuCvM",
  "key29": "3WQJ9YCqgAGQ8Uiq5fdBQn9y8WLU1aA3Y28iNR3VmjXiwmZEw3x8PoVMxcRjkVzJaYe93upD8FpmSdU6EakYDCLd",
  "key30": "5vSXM1JM9YZCpY7zbg4ANEVpr91EEHZRufWgKT8VGswmnQfJzkiBCdywNviju1ki6VUeUXSNjivYpMkRcHCKj4e7",
  "key31": "27sWZz6azshrX2qR22fv9poNBAQ8TexgNz8vDjo3gnNNMqipjG5kVPmQHBRZffaK2TkW8xYgeRJdz6eAjyqzRwQX",
  "key32": "4KAAnVRgz2YNyNcQcxk6ZTSVugq6SWQz4mfhDh4cGJNkXgKgipaZFyLzdhzhxkCA85YT1xByWPnkvYfGSYST3c8s",
  "key33": "38xfvoPc5zgguDwe9ycrbTCmhF2ib6SWQqVpUFPFRivhQVkGjtbtgeiC8mF5Q3H9fLwA7r1bsLWzjT7ti92E9oim",
  "key34": "2csU6r3a7cBmcyWhSNVLj8WZHwjqT3DvvTsgr6ipg6Wr4EPBNpkMVYH4soahxJdg4bhy9zJG4UPDNtDQtjsZ4Gsb",
  "key35": "4oKbo1zFcPH7HRsrTfbPhwabTLXtuZiZ9VeMNcKXGuxNn8DgNuiz78mKcFsBNkG8AfENS8gvzhYd4D3XtYMdgXSz",
  "key36": "4VB6PYecdF9kMGVKLHJAWX9WzmmKx6YoCC8bCgxaBhMe3FxvzQH84PWKc2u6ifqVeuh5fPr4Hj7bYZ8eXBuo8ZFa",
  "key37": "4PCPxGmqkis95KFQnzvMQcQ8JskGpUGPEZXyJ3aXNkBZkwzZzzNYqUSyzAP3TGrq2tFXBAo5VZH1xCQAtXGiRsp2",
  "key38": "1XWp5evyMCrWwyn2MFwUjuPVLXYhptNwiJRnLpWsxfe6eDSUMYW7dyyXDFwaFtiq4L44P171k2aTfRgG8mgM83h",
  "key39": "4R21Fr4P9xoqehcgw45Ln2TT1o9c5Vs2AGhpqtYxg7PJTafpcgSMGGTjw9TSRkKGiwZTDwLKkGB91jWQQL3SXtmb",
  "key40": "ovQ3cRgQJw2gn7SHceZAhL4VFx9Usw2XX3CYpWd1v2uBxyVn42Rx8xv5rRUnorjNWD7XtodGHGGgqL2ct7A3SzL",
  "key41": "53DF7NR5RWWdDPbHVnuiCCw8guYR5BAhWKmsjukYn36xuQuuYPpnGPLmLqwcT2En4eEmQQwUWqTQNjXe7RtnWixd"
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
