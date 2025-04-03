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
    "BU3oTwfPhanKZQZ4zZpuvijnBcZcFMTwwmD1V4zxnuno6ZmVaJkustU5xrhLEVif3WofLkSUMwhB9tS4wMGzEhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46sm6hMcsbCjbn5XGq89A95DzE9WBZcNzvrev8vjTu6nZLrMXxmdjp3ffaszJe4U8tiVBAhf5ySZz6rsMRBs3LV",
  "key1": "4HFUU28o4BkmcRjXtouVAvrNN1dapfPzTuTLEMt3i9jcMA6NVRqCwPve9VpWMwaQVrVnnzMRhASG5SysxYrNkTM9",
  "key2": "5MBwft6WzofxMjX2jxowCEPdZQTXNzutGLGJALo3Nm9NDrh6AEjxWVcauYhSN7DPxZu3yfVDBeJfAHansN4zeTCQ",
  "key3": "3ZtNcRUVA9HCmivzDdU8h6S72yTW5FQUSLEbvyWd4Fh6GiwDQDwK5qWJauksnUYo5egcBG5s2oaMfXZZue5CzpwG",
  "key4": "6VXTKpMWHbVi8iXosfawbXzFEA3iTSToukiryMP5YKPPMerz8ymZ4aYmVZx3C98gKdR2ioTrCoT2eLpz52oiavz",
  "key5": "2ESnaD38YKnXYvSGdpowG3im3vTG8BpC1MD7xy5pQ5Lfx4414WU6Rx8dfKJGAPBkWzGC1MA9LfDCYS4pSfty85A4",
  "key6": "3CPQZubVbuR2k9rP7sd6mto1dXSnPWksy8ZUUudK14Uz8XPRMTYcbZNtBhWYEbG3ArFspHDpNBPuRRC42iELx1WC",
  "key7": "3Y1gkgnr1vwZ86ukBYuZmFAaVX8p6wtSEDoGXiLSZYEagq5TSftmSY9FYFhpNrUKDZzw5LveZNtaHmf7iswdBaV3",
  "key8": "6unvtrE5sJsrt3CycPujKKQ7RQoYfRvTjYqqJ883DPCvwsDwK1eEYjMyS6P28axkAJEhhLAj9uNk49FoHGn8mGz",
  "key9": "jpNFco6n3ZUDmc8pt8WjAqupygLXt9KYx7i4jV8jw5huxDE4Kygp6ppC8hBt7sEnyDa7iyy79wSGvdn4sD6oNC7",
  "key10": "2LpjNZsfFSXi153jtfRmMjQBNP8YFgc84fRNC3qorjyb4zJHz5PgGPBi1KrZyJPqRFri69qCtyjzypDcMsUv1z7s",
  "key11": "3gHknZhQxVHLLh4rN6mdrQZPMfLgzMFUhUXmT8mZd9khfHepfQQXF4eJZLwEFxu8qpeVqLYdc1dbCwVg26H75udw",
  "key12": "4ye7xqGuvzY66ayewfKee8Et8fZkbxaCgg9uj7mMyt6CeGmixYrVTRevUCFnBE6zrHBW9tcdn4tnPufqn73qWrkE",
  "key13": "2jXFAL2GzWZCq3XJAyFLw7GuwEDAaKxMW9u4z92xhkaZ7b1QmuZA4PvFt9gTg8zbLZF3AuEkqAdBn5yRczjfHn61",
  "key14": "4Vs7AKsQ2wqqzQ75wFpeFGK3MyFWkpGdGjnXMcnXFF3wbjG9Grd4ppiKuNawjdM9Rb8ZDu3G1mYt7meqNfzZUQY9",
  "key15": "2aN6X4qTjh2PWH6EYehyXzV6j1ACX7TGKyAiJepLDkjC38s9SPatM7yt3gGkYXf5jvUa7TTZsQdgQjbe9BYgVwdX",
  "key16": "5TukQd1bHeLc9NrPtm6Q1EkJVNfuMtYPCCreqQBmP8YtoPYDPDWqjfsRecdZJemx4XVjk1EZSUHUo4BE6gtQxiU6",
  "key17": "5dYQhfkJnErzfnoNdbdh4QA17spiLGvQi2DiRsFZ9WfS252atnTK7uB5FNQcQFKRRNnDG8PC4zs5Aiiq39jFuXqx",
  "key18": "3PTxPVfhnaTwU6rssZt7R1x75Jv1ncVxRu38Wrx7JqymrvZ2CQviTjwWSgs2RRYLTqsmCssXTUF6y2sFHCW82ozR",
  "key19": "2VyResSrgv7NyyJ8omggxBSnLhvj6LVE6m3kvXW8zvCK41iSWjrHzZnaRT38hPSpxrMVt4iLJ46oLho17cBvyvot",
  "key20": "5C4ycHDnCbfop2P2PP84vwuJQUQrtD628YuQ5PvDGZGzWJ6xj4KVbkvH6B7DhTXAohtY21wPCAEWj37U7AypRrZF",
  "key21": "3LBH6CPwGSdSdknKkNJnVFELCMrFiRZoMgq63rocewAR2vAkq7UX2QejZSroV1TSybPHzdybex8orWb7Efi8vnHB",
  "key22": "53xYi75xDbvcceNigMWnv58Vs7zwHFYBgFKx983unRJA85WGzfdTZA7vaCBrdfuLZjpsZr6NoYkpKc5nvyp1an7a",
  "key23": "22RDhJwxyno99hSSS6tA5dc4CEHhTqV4iUr2z4CLhV7HswRzyqW7hv7rRBWGEQLt84YbVkc1525J1mavmsjfZB9e",
  "key24": "2St37qKMTDmbQCbxsZHiBgEQRUWD7vMyd5HpYCzLdpXmsWHfZ2fWX5iTjA96Y48hxPupiPDWkfEyPghDaqM8KsTt",
  "key25": "2THc7t6mCLgWKHw5BzatEKS12KVG4WsFTeLVEZDUqPKZhvaB2LaRkM33gXkRm7AoNzSFHB6SRVt3noQqpoSnGZuY",
  "key26": "5kiFRPEKvfQWbF73nYdoPdZvcDCJFLVpw644zL1ZxmHoJVMYB77uuJDjggqLnwP5Sms6eRzHRs2u6ySarQG9L4d7",
  "key27": "Twjr2RRY2imLdZgeYwgmdQXhh6wC6qx9nKg1kXb7x1N3YrRrCa69LucJPrhoPwvq9LbzgANr2q1LsN7dfhqk9zj",
  "key28": "hUJeJ784Q9D62qjUWMphRtkQjxNbxJwe4hsZJT6h1gbbN6rzufXTMdfLYCfwYMbykdgL4qWwy6Lw9PFhLUcz6xb",
  "key29": "67h3Y39BtHBbdgCJXqCRRCs2WH4o1wWurjJN7RJPpF7WsNaFs1FyeHxa6kXG6eSQni8Nz5xorzfhaArgzD7aECXq",
  "key30": "tEsW43V3ri5bcingXkkbJ6vyrGDnq7g9GaYenAi9XKnLnDA4ZcZ8imVWJYevpJ8wvr81Ej6j5N4qu8nBhQkSpdX",
  "key31": "4bdENcTDPtaYaedtjz3zdhYW2v7E5EXLwKu3oUL21JX6ojvLbhR8XvLL88QktpWZyUPMFA2RuZW7AschoLkvCtae",
  "key32": "2LTEJVLcSW6YKL6apr9XuUbg4NAjLSUVN3q1Fk7BXyReFgNhJvkjUoJgS8NLgZbJ5fz9GWD97E3iJtE9fSQv6ayw",
  "key33": "3sD4q3FM3ZXwWdTjHQU9H5nADkfUQUyZZFehLh8w9v233Ai85CmwKb4qB5h8eqWJ6r4GhqsP898EVnpQBrnfmvPk",
  "key34": "5EXv5pC62vUMxQYbcoBeVWA7Hndz3Ce5cfrqdr7YY4dbhwKwNjjqnXPXtZsFj1998cTpGURHMW4QSdxLNsdmehCM",
  "key35": "5BVZgHA9dQHP7i9T2DsYCRw3hJNrJMuAhGxNfj2bfDLBqLG78Zg9TppsGoWXvgyCAS4fmL9FEgQJRHrPGST7vbdM",
  "key36": "4Vee8uVe2vdsAAk7pieyYPaGByJ2MkemY3yC6tUHJArQAt7bLtQVp7TqpT4VE9if8NnwwFG4m6jwtmtLGLaQnSiF",
  "key37": "w4ZnR6CRjgE5CAzjNKZc3a9Y22isxGLDVrNW6QhJAXh88RWXkXVeFA3YevKd5eBviccx7HcE3JbovjrkNge8GSs",
  "key38": "5jP6LT3WdxgfwPdDoRMgMccgCiYq4ewHEuiQweNd6HUu545qs6VshcTVvpahazL2Mrs4zYrDGChkaV9jPPWYrMft",
  "key39": "4DmMzGueiHjdJygUoEDFc32eDPR4G7sf2Jz3xoLVaVqn1xY4eq55qr1ePtPpU2nKmUtB8LFLWaD8UCQzUKDYgtFw",
  "key40": "2j1et1MrsDjJ5dbgcKXXNWQKsze6FTRcTVKKDHYDunXBgPzSnMf5KoVuYsUWvNL9r3caHt2TQrVD2QRUWDLEi3oD",
  "key41": "3hZNCFkGXPzRrKDuFH2S5TPpamQCH8FzTU6gayTB4aTBfF9aJEx5FgkS2eBrjHVXaTQr1XM1U843oBVktWSgajtq",
  "key42": "3Bb9reksEev3sHMo5DVu6m3A2WHPJneRwNRGHLNaGouwZRK1UbqRRcjfdGu7QByU4KQVHiBt5iMZy76e4DJ8C49b"
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
