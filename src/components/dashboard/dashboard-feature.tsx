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
    "5qxWnQzobcMbaTrbaNFJSPqXXELmPv9oEpXPw2N8nt8f5Qaos6A7LfvYbbwy75vBP1PsHqQdmGiMQaXguvV4wRmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VB9xW8ekusNNf4efBzTQXokyu5c1gkhDYPZX6mnEhTEaojfYQduzzifKrhahUtZFRg5wpfoR5LstPEcQUmTXt2i",
  "key1": "4S77vmKDeT77p323aKuG9pD5fbEtfjzjm3gFL7fs9utKBgLB7Z8KrZ31x9BP8uhoX2GSEvwoyhBP9LYHvRDSoR8f",
  "key2": "4HabTQdRsYkcUQrqPJRNy3zeHKYcj7CMWJj27GUP7mgXvb76Ppa86q1zndeXZKeVtYJyRrrCPxtDgBxbyuedpZ6d",
  "key3": "3y4QExy6hCnhYgMBC34dPs5eciuFSRXVfHtiCXH3YKi9y5XW7STWshnUxPb1j18kjwdyPBQqCf7XLUJDENNdsciu",
  "key4": "2ZvyTCGtPv62ZCKdx7Bv4Yc7WR7zhFMuKwYoSaoptqxdEG4JtQrNtbLM632Mrosrm6Hto4ZUEMerM6pgYh6vc1Qx",
  "key5": "n6XWaaaiXXxebYRMhTPVoN58ZgXLgFnTqaZpdfEJ9kX3PvtRhnMZvNmCvje71phDZZoWWtAqep53LA8oVqe6wWY",
  "key6": "5nviBof7vRLXaVMpJaQ9JkJKHi8cLvDMypLscPzFhAskpZQJG3tWi2AHtQEZniffPvGVDjSZaBWhG4oXMZnB6n62",
  "key7": "at6nu1rmRBAaKc2pRe8AbwE9PFTAjShYVZ5QyeXE1ee4pSHzcXM1ECxQwVvoWzbWTYKQ76vRiYczoyTqq3R5HH1",
  "key8": "3wTDfGwYczBrdboD8WWC1BRQescEcMWQ5UYXB7L3T1dw8c8EP6W1Srzf16CWVfXRZipjhCgT3wKd3XiyasnhcY8i",
  "key9": "4wpjQpMK5UVMQSDHtULu5AKNLE6KmWtSsufg4YKcgg1mhSpjmHqa3FdaiuSac1ND158QTB4cJgLCRLrE4d3uppcC",
  "key10": "4Z7FDbEx6DrXSR7W1JQK58WZNuaUMGKB9tBV2r87qiRQPrNkGSAChZjcu2xSyN1o5rvYYFPsqT3P3pPD7LonMnFc",
  "key11": "2rRqisWcy6n5k6Wi3e5Mg7ag3jskA1SavGghuTt7Mq54EHzAViC3xGnsQ7ni1qdWzNPjNDSm6ixmpKpzhgGH9bVV",
  "key12": "32dytdSSgFWVrRVXFuGFzZbAW46hBiHW4U3ahkreYG7ikj3Ps7A1uTQPZBxxWgHok3bP47VxmndVNczxLNSB6uo5",
  "key13": "3wumrWfmUvUBVioSFUWujFbrXyyUMekEbTS5pZU24GQVVQAg7D57jD8eX1825FsgZGgGom7VGU358UgbofqrC1sK",
  "key14": "5vgixTTzWrF8DQXNxhjFBtzR3ACv5Bxq1pmxkoQZ894ssE9PH5KUot2GfxKJcmQaiokUdewF4Mwcn4bRcEK96r3Q",
  "key15": "2436Lbi1qjDkFUQJVZ73xR7AsXD7BR5KF8Y2qngjb7RsZDHGfiJbVNxKpj7MkJgyxjMyeVF27Gu2rBLbBhMmE33b",
  "key16": "8tBU526QxpDkX7j3oYThfaTogKireSWoT7ophkATyXYisf53XSfa629MKkR4zMH5PcCdRegXHE75kYGFmK85LQB",
  "key17": "uXiC2xQCGct1gV64FFgSAAJN3M26FQiB2ttx5ERSs6KRnXyD8cxgwVaTFs2CNkb1NPWLWL3XAStqCob5cktEZok",
  "key18": "424iAw8T3KiyXYnWXreEpHJFbyfY2HXPBiNtb57jyHwQFKRPgGEqrfeWs1eJNxqoQMqLR5NGDok8V4qT982MEskY",
  "key19": "X6ZiQZftgc9LZkktyCUNAQdmm1y7C32mKDrNqGR2jB3ERwauMcoMjnSbm9ezgfSs9oDBBfKNDTv5MHiqyvLEx6A",
  "key20": "64pkBXTrbSCSYwAdZMJuXMMtpxtFwetozhUbGhfW7hPvDKvNg8r1354AhMbYLxH66KB3XkWErmD6ZCgGJ7vw3WAk",
  "key21": "5BxMx5Xa7CJFMZ26ZHsmXM1mDsv5xV5dUQrXoDNVKMSVBMoRy58mpqvVUkwdo9xQTKSZUf85M8kNpjxvixCcLvKf",
  "key22": "3y6fzxvL6qpGkvvjGoyikU6QdaSks3msUkEt14K1dUW7USihbrg185S3HjMXmRviHm9iVeER3V7N264yb7RNiNzL",
  "key23": "3VyaFq8x1Gd98XT2ztWEa4SAiNZpA9nJiSAozxVhqem5kR5AjYUNAFqjoCEBCLTNFT5bsHBXuLufLgjo8A8YhRQV",
  "key24": "KcSEfdDUMyV6YW7GMDgx5diit2wtWUmJdPpS7TKLwsCFDhASPLQx78BMZ37cbYyHCdL2DkTP6iF4Lw8zFpvi3gJ",
  "key25": "4JsUGh8VkVqoH3XahMcAhgUxVkADaoPP42L2okAynNJocebCMbmtfRrEnqbmRWEfohBNJuLnjbqJKr8Hyf4GrDU7",
  "key26": "VaKQzE4gATRD6CqE5q1jJiz73z5nkq4PHL34RbQgVwWpyUKRGrjyBrbC2UrvNwVd15Ye7U8LkuC1NFCebiPCddK",
  "key27": "2TVedwAZdUh8GCXZKkkR3yeBGfDLeFc2LZm86vhbVVY2aoc78DFR6jR199gMLojoCw5teAAxnn9oxcuPssQ1rSDb",
  "key28": "3WM7dCcy3aEntEQ6VUh4jHqbMPoJMBDqKaR4Ynh9V8U8o1CijmBL3NScWZ7vkL5jxakHPFeDBfRfwueZHQ6VWhDQ",
  "key29": "3dkSY1tbuMYvTzqQCAQeFT8JCXBDhQcfAHt5PdsyzUcPHn6vdEptEmW748M8J8UKBrsyJi6VD37tgYDZBxhqfBSE"
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
