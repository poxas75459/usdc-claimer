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
    "4R3SiUAe12mYa631k7nJx6HzEbBtTMoDiwgFTFGvemvmp1mnPcEXd4RV7yksYQ1fwLu5NJMyRD7he6bcJBYuonRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vpzq5pgzV8WT2nSqHgDevRZdHYmUPwT73NtRS4A9R9DWYWAvD19TVEzyNiYDLtHnCgkHGyZt4x6dYZ5w4mB3pHu",
  "key1": "5S7uz45dzpwZZ8E6dvX1mb9Rf8dxzjDkSQjYmhAmJY2WjcNqZRhwJgsdFNM3GkPYEiRgYVM6X7i3ztvzNsbtxvQ8",
  "key2": "2AnPkqsQZJxJ54kzJab6q3qbjEU58YNee5gnc43wyp5B7GRQWKpUEE6bSxr7W3vT93wgGcEMbiAiooMriafkU27q",
  "key3": "5cb9id36PKQ4cBttAxjrbW9cC6cfuSafddSTJsFsUagqKsVJDeiJZEKUFyRmKMgH5sMcALXUiNHtvhHT7tHrLFz2",
  "key4": "2RDqeb5NEKBLiAUnVhd8Qt5jgz3LN3cwxWeLwQXTfopyfjjYm7sUTBtsWUo2P7XqVUAN63BrzxAEp9i7HXxyDkwm",
  "key5": "5eVgpXrR3uAQcur3JZKZfaL6azhRdrt4MQcd7z1kkQRb3xzoh3FebJYpm4NEDJK7C6zc8wTyPpXgeT63dbA9QfNE",
  "key6": "3xwM9JshrvnbohowNWFJ1TM9hvgRWzynvGEPhFzykapkxesQZuRDb8nYvrcb586YwT1hhmbdf1ezi3oVaS2DwgC7",
  "key7": "3Tw9ip28nPZkBbzj6givf5pbCHVzqZJ5thuvW8Ge41Pw8jjB5SuyfRq5cU5bwsueSfhSutgLSjNvhpMpngyg2ap",
  "key8": "2ugbxm8nhTzbGScyDpvT5D9J6FdtPed527HHYk6Wstg8gkiXyyQqfK7cDKNuMovy11vqz1vdQCS7vsPC3TVrrsS8",
  "key9": "449UgPeJoCuTaenY7UHRJfaxQdVTWG4wTgETTWtUyYPC2D2UVsmbxgkzuePsyAsw2Wyi1FigtATz4FWW3BqqoW74",
  "key10": "48xeYwgESh4zJYHjRHNeY8G31A8eBT6JT8gquCk8mnxDCFkBSRj1yTq91Kp5dJoc9hneoQTiMhsWpknyoqWg9pX5",
  "key11": "4aSbegdjtoQ3C56CpYdZcRDirAevZJ9UqBFcg2ayqWDcMMW9bM8q73oG627U9nJk8ZypS5bEfhY3GR4EAQZfzc6L",
  "key12": "3f8vX5cxdjzQcxhGk2Hr6gWfG2HYBtmsZnymnP69L9dQyHMKnYCPpUEhswXPXkn3N1Za1kFaQ4om9T8g4DuTUQgP",
  "key13": "5uhLZKNXNGMX8bDbJnAMhRpE1wJMVK1CVfypdWFaYv55CsfETm4ozu3qDDWq3Mr4qUoC9LtExtrxpKd3xpFSgcNR",
  "key14": "5qiUx9vWGVTaMmAepeyWrdG1ZG1uEbyQ9CkTZ38n86UntLi9329i6jPkbee2xavJ2cdpwv3TshuzHjJQVDEGU8Fd",
  "key15": "2yrEj7f71s8ZpxFAuY2qFpkeKvievmB7gARaNp4BHFrK1VkaQckgJVMCBww7pozHXkzUqvnBiGsmpjrQFqd4Lrov",
  "key16": "2ktjsuXbAqgrhL8cye2CWcqctb7uucpavYrfY39LspZ5PcJXoUAi44EYW3wn6iRWwYGh12rDUmdD2GD5KiojTPpC",
  "key17": "2q1GoZ8iHVWm1WPzfpNBjzmjHGtpfmw271fnNixfCG7FFPAmTEdJpvs7Yy9dgfpFRjBVxv5YvBvTyczUjkJi2HW3",
  "key18": "5mDGWfDJKKuBqEV6wzPQ4TFrb8YJK8Txia5aJARVoi1rFyyrikPDSksYCwqC4c78R8VnNB93wqJvxqmZuvsDsdii",
  "key19": "3DRgcaRFwcwidxsa4YinkHq3vv7zEKJxwAtE9Uk8Woyqau8bAf5fK6Smg5aANATC6iVid38Zi8vQj2kJZkEBMYsE",
  "key20": "55k9gN3UcsbvQ5B2XFgcaWXD6VqKNJopgpWoFtrxRjHDEMwkV4Dm3BbNznkgYTUNp7BhBtDM1QGZhKGCPvLw1tXF",
  "key21": "4KsTXNDD6WSdN8k5xEDXQa5Q4A34DhEWJrPjSW6SbQd66YcFib7siGaU8v35bqFBaQMsZvrFqFTxJAh9JTkaf5Fu",
  "key22": "3PMXtMnLhr2cGv8tuVKhBpbAsDH7ajDWYUSDr4ADuSB6QHZeBB93oBywXHDb6u6wBmBaqHfzL9y47FoJtqAmBQZD",
  "key23": "2zi54SeM2dKRK9up9SHNUVx399hKnfYr8VVixpWLrQVe2gW9Eb49MNyi2Stxi73XQc3P2JVTprHddEz4uBWLcBpZ",
  "key24": "5HyXeNe4oc8pP53u2uoLicRWJPCPa1Fs4C4CCpmaAdmEg93UBisQLmajHDFpGw2U1yfTLCbEN2UNqvTf9UZxcY8m",
  "key25": "3fh4BJiRhJ45xXFbWjEpPNHh17sHJ7o3Fftbw4QSqXLRSp7eohh8k7nTPiZrNzJuPEXKErU9YX2GtfYk4U9VQmHy"
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
