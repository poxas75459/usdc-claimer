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
    "5zXFHp64s28412BB46KiimSGeFiN7f8ATjToAuiRwKyRWGxcDgDHUzPmnMoqKt2FusPVJjiuyZi2UjkM8SMzjcQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nHhFniP2cK8dVo9kykkzy9uyMtMyDJWQzPRvgN31erHvShMVV8RGtaC1gma2GPJZcfxZnTkCTq63kjFspLVvwqQ",
  "key1": "38NnDmMWf8aBc6C5ynjXjMXVevVvoZA4pnAwd1dknSucbGLHoPR5DDiYZf9gTFfxgTDxdbH6zzafpJK34GWUepWk",
  "key2": "5yYEVsSgo3TXrcpX9HpHsxLqz84WmxHMAzyxSMPxdKDb4MZ2jdMSEg5JK6GUhFLcv8KdAZwzsoNXHRydHHqm2WRq",
  "key3": "3QEwNDrTuQBkFBv3rYZRUaDWuS7SRmoDPxjLAsH3M3BoEDvfJjdYwy19732PFCDcKmW7v3PtQ93NpeSNqjvviMH9",
  "key4": "2UXe8LHCR3RTXVTcQR3pxG6jaX23PQyUHBcrbWw9nnxFvMZPkAWnZCVNGvnLWDV74UCWLy2K953z14P4nZDrFiZZ",
  "key5": "35YsLdz2cUDvVEt7MsA7mqCZtLFx1KrVL4NZtGA9RKpbpeKsm17QUpkLPS2NZPsF6MDWz17u7rGTgXxLwQvDX4tA",
  "key6": "RBrqDWjkdmSwH2QrGJzQiwnQHdF9tkmc7zvKtxXCtGWJ5KZo2EsZacSXEBjeatKQhvgEmBVXLurz2uRUHDjGJfx",
  "key7": "273PtVfKPQN5P4FuzoM29jHMCLfxKJVLHLknN8v4fMUfcNueorC5UpmWcrr97EA3p2NNo2ueyg9Pq9NjTE2RLzxC",
  "key8": "tW9sSDs9TPPm7FboKJtuZJU65mqNJJ1Lq5H1smpTpeJMZHu3qpdAwK5B3TBiZwEcsBgWbSaiuW8xsF4LeneVaPk",
  "key9": "5rAZBE8AjRPn1ehZP1sXgWaRH2mYBU6NbrY3uxXyJyR8NfK2Garnu3GoLjXgGbNRnjv99zuS3KjtTxTsFuGjEHmf",
  "key10": "4ZJoExodnsah5EnwPtNTDXfSqzZZtjMoidvxnVwchiDfEBtKt7WJLSzHQmBMmnbTGn3C9yfnU8CEqLMMB3LQHWiF",
  "key11": "4NHf6uupApYhmaxCwe1HBms3PynAYQSnfeAE6YT8ZDL42z7HZDMtJAYWryo9hfLfKdec5NJrCztiRT8Dh5n3f2oB",
  "key12": "4BF7qBuEa5mBMqZrkioNAhknFMvJMmJgKsBSFFSQvwu6yY2oKVucgz9Xxf6AuucnyzKibErX6QyvgyUqZQh43QH2",
  "key13": "3izsnyCPu93Ms3HV14bN5pZDcukJN5LmQcfpAYJqi2oczM7JoAQQEuSrcnbnrzo7b74sLCgtZkjmpVLDkUJQTqZs",
  "key14": "9tMKB8gSooCvd14DXDttvMXtYxQEk65PCF5VKTDh3eKPjuNt8TMEe1hktbHodgov9u6GktonYFBkWKL9aoLBvwv",
  "key15": "4sAoo6WXahtgVK1SBxXoVxEcaMDm6Z27Sax8tPH4mj633H4trnRejb5i6ZCvgfAt5oftjNoSJA8SV2DJYLPJJJtK",
  "key16": "3EyhJ1F7ZMQoD9o3bbc5NDgZnsrKBYyrGiVWVs6T8LjCAAyadkgdnqVibRsLYw55rFtJqod2AxXhXrYY6resPfaY",
  "key17": "2zytuU9JCqK8SQSUjyW1R5w2zxWE2srLaU82PFghj5iWscAtkR2oSM3keJNEEdUGeeuQxDVCinvp5TSf9QkBAbY",
  "key18": "3ZUzHiAiXRFwTcF1c2Negr26FGHcXYmqNDfJsQWYpohpknHnyJha77R7dYshrJxMP5VUteqS2Mk5Jfbj6X4sX5sb",
  "key19": "2tXukPmSXjn7BxfJoH1U7o1RSExRfUvj9StmmiLGyWSSkdvPSaJtQ8Gh6ty1yvxvETPFQtzjA9C9qTYzL9YxebNA",
  "key20": "31WBdxirDmE7QfGbFnF7hm8ZUCviUFHNviBrM1Fpc6oVDk9Kvo798BB8baupT5eLfuSJfgqwe3MRtSwWkUEdDEa5",
  "key21": "5iWfqA3mm4ujmZk3QzmdEbzVJVkWWRjEYcwMwevnF863xcRi6GWJaz4Tp9rEBJesFXzisFkTR8zGGbgGS1y9xwhF",
  "key22": "3wLeHLJAGhyEDeSS1GURNfg7k69Wguhigq5JNfjSQMX6ypbCCFFmR3VfuitkaJWHBBCrQ8tbh4A7VN2mHoiGCF4m",
  "key23": "M5SzCLt2Vhpk7AsDR9iwg48sFj3KbebdLDaJ8Sj1dfeFfBHw1X1Nqy1fEmvMGCNCKjnAxm2E7eP5uGYYS4gJzmh",
  "key24": "3XpYTshJRdiavigRix2ubf3uo1bpwpGMH6p4KTFcVkJCAbhV9jdnyaTEJvqoQmY91A5qLwGUCHJhRfNycLyZuJAf",
  "key25": "21rvC8W2hD4pcMuzUbwJTMmee7wTi5FQt7eyAj42jsDKDeLrG9M197phomKp21NobbBqs4MrvdWXRhSUKh7iyx1b"
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
