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
    "3LbuByLWPXqLLPMKyGix4rg9x5G8FDutBtTteH4jG2kDyTKCdhavhbtc1vPfqC8YgTPqkxLzWdwm9vPmY4RCsaoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48G6nmzM7nPAXgMmCQbBkqFadVJKtqPZyUQhYSrh2WBbXDcLzgkfJXTxkTbEm9yF3ZXXXeKrAJCYi5Zd5FwsjR6C",
  "key1": "R47sC7ZpXimWLUp6tfz2EWkSGhLKznbNvW3j8mM5tyFPSNRC98QULm6hNCfTr78TJ6sfaFYmJkUodiaGED4gqaP",
  "key2": "2oMBv7BQM8MiSb4H9ToA4uRPeXoEACBHaasE1CWfjhjQz99DSWebBEu4vXAF43fwmaBnWaaKcwBzZzvcomn2EmUK",
  "key3": "2r6VMiAhYWhKPykFs2vU49aK71wZXQnxK7gd3mZ5TBbyhLafXAY35V13PJpszrKH3aH9XLdzNCBdsaqsu5GFjUc2",
  "key4": "5qZb9TRBYuR9JyyyqEeurjccum9zgtfDpgQmUGepynyo5G1eqJWVP5py82XSPuk57Q1J8HkJUPe4GCbf4MpkFCjk",
  "key5": "4wQg1NiRuh7tYQUa5vjipSpJWY2d873ufX8cpWSBAodZaPGVSwakjhiTGGeUDe6ifw8ak5eQ2ucqd9RYoWWVxABA",
  "key6": "9npHdDq9aF4ozssPBF4kvh7g9f7GhVxRPvPZQaFt351kvv6Jycvoee23vwcHwu9mbAYW6kGs2s2NU6du7EVtToJ",
  "key7": "5qBihqKPenZEocLTuaGJ55gxvsXvRAdtmE4Wf2w3B2PHwd7Q1B47B33JeBjLqegKmP7BgeEopX5qUwWN4gbFABqP",
  "key8": "5tsEQeU1YXDPhAeufidpjipP1agVwZt6zYVykgaPsnnm1pBSUjPe8jsX1R2t9iaYHwyGgPx8GEyvixhU1cb4S74H",
  "key9": "4V53ajUxpZdJdqSLSzr433mmSEgFkjpBFp4VZU8Amriy2mUtcHhDK7e1xQqND6G18Efy1wunzz6rJVfnRx5fVWJv",
  "key10": "4LPBrkuY4gyPxktWswb1Qa9SUKvXfFCYeFCmSDFRET1Sp3KhuPuRbg7eTK1j2W7MLLJdofG9WgT3Ro2Euhe3yckE",
  "key11": "37S4GqdLAZ9LXbtHW1WUtDsKwV3wvGKS2VyatGFh4DfgnfgwuiDEsTLFFpZkKCe5WTBubHa2rWgxmuRmqqd2fFw2",
  "key12": "TzhKTvuy9RUq3XMiQstvD4FmXb59ebvKRi7Lknz3KmCnhDK3iKovTk6jPsqnzxiC4GewZEELfYkSBakBsCZ8DcR",
  "key13": "2HSasB1LAq3bPsKAw3eY71Ff3WDJ71FjMKUD1HoqLc2HL8ZCXfxJ6ZE54HGBLBHhiBcbHSrySRM4Ks6F4JsDcn5V",
  "key14": "54NgL2fKq8Eti8To3EWmUQk2suhF7VsMhi6aeZt5gFUpo8X3zJWgLigdR14mAJ6T7WL8hjCChf1tyHCXKk2Ajzkq",
  "key15": "5jmaZNMEMaUygnnuLyGmD4upEgYkVAk5WqZ2v9gRksKR6CeF2yN1cb5ourL23JZb6XduWxRMEP88jcyUHcQi8bib",
  "key16": "ASAa61do3b1HizCAop7o77JKM2LdsTAnma7x1SrJo7LvU9c8YeL8GNHXnAfzrTNdk1Y5vrReH4q5KZMCnzCyWtQ",
  "key17": "2aWQBi2rdzazj2M6nqEbvHZ2zszHxrtrvTuX5nN5MvWP3VqW3HqtnXEqN8rmXNMvJBPX9H1nd9Vssr1MuiiGtZF8",
  "key18": "5rcrhHiSZNhxpUwNSoy9dsgZLXoJ6duPU2etvkHQCRgFvX7r8rkTRFoiV5skre7LKVjD2rRHvEH1Aj9Dv6XWfkLG",
  "key19": "5yHYCwUZ5GdS6Mh6xLwRRSBs1eJMX1cc2JvvsUPb2QxNWSWgWrvv2EV1pVipNYPno3pE6v1aYdPKMYL39jskgQL",
  "key20": "34df3L5PfhWZCiiGEetoZFzZ2KAamFJDmgarQoaqBk211ZQ1ZRCNkoTBGe2Dpz37FKRSKZiPpy2J9oEoyroabvWs",
  "key21": "HsyPAkiwXUnwgvD7BKqjw3krrCgzUQD7CsqAoFoGZV9vpUWnayPN2Ha3DSCzfbY8UyRZ5QH2xAokNW2gkhWDBBT",
  "key22": "3SVrgxKf7G9HapYPBJGHs5ZuFvAExyWJk2CKKwY5tk57dbhT8sqxFyzc6okJhwJu8PAX8quHjLvPZdFYmu99T5tL",
  "key23": "2wxdBUj1hP4TyKTkFhm8rN8cG6jrJRTWhhmnprnuYT6kBjFB1T8pcXGSXCzWYsmxn8XVnfaR2RizxC3Sryf9tyRt",
  "key24": "2xwqiNuf2iX2XGt6e2EgzehXFnpfHxnynZHVq1wvU6SYxkixRzHYCL3aJHEAH2uLZUsjMsBJobfkTme4rgG2FT2",
  "key25": "48hk9DaWYCAWHcypmtor3R1o9fAvR6KnaJCLnaXQw5kcpofFN7peW4GikWZTzkYKXuQ1Y55t7ZQyTiayn4wmuwVH",
  "key26": "3gQsFcFx9fHSNQZUsqPRKgtsnevHYUHJeuspnLrKxTrdYsDrFAgcMHy7t1WvUXtXDZddbuSjSA8y3aewGHfN87g4",
  "key27": "3J1iCTCf6xDiPEUZGFEnKbvfvrqs7ow7zBg2Fg92nmtgHYXYH43UxYC6nEjBrSTK1iycGkRmNf1Eim45qQwEHPdi",
  "key28": "33gFcnKjq19XRWJ2hyFssajBxDxfZRN7KABdYgSYVZyyWkHQ6NqTUcPjDZFqGxg7gv79Dy8QQgjDPdcSWKZYbx84"
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
