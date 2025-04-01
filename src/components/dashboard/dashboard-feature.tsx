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
    "3CN9gVMABAjhBM8r73gR18QArDBH14892jTC7sSBdLTJD4yt2erTTA7FVtfj8XxWJnrGUchyr4U9U81xFXonTPeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vnr1yARd7fTmrYrA13KrCtKyJzZTpadSh4toNBgomuoYEhhrQCtziACxdQRZQAUGw42EeNZ2AfcDdqq4Losa3qp",
  "key1": "3ysoq13RF6dmiNxQVWc6iagKTyqEiKq11UsRWhtVbsAyGWqxvudcwRJ7t9AmwtzowK85TryGmjnna52j6epSUuwK",
  "key2": "4PsuvW7JJbjQaX4HqhUMEgHh8QYw8kUPcmDspdLqtbi9TXegmnanB1DCCXrRwknw2ro4TBVxvkPpsFtJqVPS3oG",
  "key3": "kq337tiHBU1ZH5v8bJ5QdtUeV3RsUxrMCyu4EKott966EzLaPxUHcCQryjnN7xUJgaEwPpvzkguUCFS9Dwm3x1j",
  "key4": "3msvLquU1WXoJDvJW1TNkaWdsZkRqYXQEVJNHy1CYxnJjSZBVvTy6BjGDQXShLTv19YjnX7xDHpcn4k7oxpYmQ9D",
  "key5": "3Znf5AFQe8TR9k3bAniCjK6sbEBBjZ21TexuCS2mDU7XyuHRk1N2n3bTSbHVZPvVsdnTnGQHWvG3u6KXPqfs9WN9",
  "key6": "4rae1gv36xYHgW1ToF6yMS84cWqWUDQ2ZVEXYX9LH2mfiMAa1XFUAh3Dqfoiwse3QKguV5vAKYKru538UWSwJNga",
  "key7": "tCzowMDDRpc1yj8V1nonTFUwBM7KYbMVBNcrcC5xPWMk1EKwzWAgtpAr89JzR6HjPWv2oRg6ezg2fJccuRnH1YV",
  "key8": "4PF4YtdF9Lzb1SaxxCyvE6Wtk2jMXw46pyunZsrV7vCqG8BLMR5LFV6C3fFYP87J7DxB7xXP81e4HFhQ8Ujh8Vgy",
  "key9": "2x5XbZKRHjQD6N7EAConYK4VwufW9p6er4azsiE7uxTpqtRLgNMc3cFbtRs9idjTtGmt2aY3YPsFiPDRG1FTDrbx",
  "key10": "3VJNFAirEBR46MnH2afHmTRgcUR4R8ax2QcLruxy8umCZ5WUfL6CbBCqTZLeGPjEDSbbNBuUbNeFX9VE4q1377b6",
  "key11": "5HEPxzJ4rX4fqFcH9bJkMbMhXidFd8eLKURLmzDNBzs5XyQsUSTGVx26kvUvtg2PVsB6SX2GHHzWmup6YpWwdZr8",
  "key12": "5Ria1Pr1uL4c1iyxkUepgQzTpH9Sos6za4nEf2fe67gR2aa81wdtLRBp8dtVJ39cTMF3yusZAQyrPeFeSf9se18Z",
  "key13": "62HWKukSiZSZZqj62HgwrhJ2ECHq8jtq5BzvbXad3o7hYcSQfZGy5aYimZ7u22RFti6SN67wMVHfVdNzz7s7GoCX",
  "key14": "kMBLs7QvT7922R8tYYrPQ3GB1DpB3uY6VMTr2o3KmCru3fw8NshpaJw5tDjEd9ExEBxX3UWLziy9ua2fmSzS4JZ",
  "key15": "37TiTWyM51h3kPiCckxUQEraL35bLXdW33tJ4rrSHfrBabLxpM4YjxwegQtdqcmyT2NSBkRh6UfP1T7oMwwGxMQt",
  "key16": "iSC7HK1h3c4fVpCKxcb9PZVW5E2syJcqK9MyASjra7vH97hpmiknUpoVVXmuma2vuXLVWXg6zQvq62oJ2NzHpM4",
  "key17": "4PpdKBcD6Uju8e7ARmKNbnh2WB3fNTuEaDMT19KCgfiQtsQZrYdRxyAMp7JrcAUZXyHb4yiRoeiuNs7EKvsDobKD",
  "key18": "2s7xdYG9qdyBZ1fPr2NF1o58JywwBu5NhG4ywxgJkeQYsXtyZiVQWoL1iHcSTbUgQjntrrGXASa9EEj7Hsm9bmLk",
  "key19": "4aX9azagcXbSrkZAwcssNr7NBQbKUgSUjGwB5CVZZCzKVtYBCsZy8yM8C5hH1xsjPqTDPDH4NyPmFSUn8ezZtySh",
  "key20": "27axPeXyCeUUyF62Khq25i2a4FGWqUoQsF6QsEvdJQKg6rYSboU6xJ7sx6ZENULykp9EZythUoFUDR53HT1f6YRd",
  "key21": "1EGY63T2tYisccRxKgR79u3Peu9k4gHmgg5LqYLS6Cyyn1fBFg9sE6sPrgEpWizD2eZmBZ2cvgfS5oJwVLAgVDb",
  "key22": "2JNSrmf4BGoztR1Gs9EXStxbUHnAY86rGnuCP4xiNNFeJuFGJfJxw79tQzSmr85EqNcSX1cGGvNzWKd7wtsAMfwQ",
  "key23": "3SVEydEnaNCu14qU1tUcfJGbtHafvTmvQkNdywgoXakr3eEZktLaLw9DSfShioRArR9iagL1zxAtbcsKMvMGmbyP",
  "key24": "2UEYvb1cLm6x3asK211ZE84BqGyA5ZNEvDaJZZS1AwxDakapk52z7aevKro5paTw3KRepQCsm9d3kjeJkrJ9MBJC",
  "key25": "3dGdSXTbgHyn6dcprxm7qLWFBGuY1a2DYAjmZMtz4z9dnDiJKPxmtxhFokodWWdZmuRmQ9HpWdsGkiUNt8hcNqfA",
  "key26": "5UunyY1BEf1MtX2NJDCQ79eA5kXnhVasGu2yGNpPfJDBGShiUPAmcQJiWoZATHNqBupFy6pzyqJHmMxc4hEA1mH7"
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
