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
    "4GzMzWb6A5KZEjTtubT95MjzF6tQoNr4wVAfm3jTLQD4JhiPVqi3qnzmNsj7ZJk4kfa5adBYn9uiGcJKpGSw6wGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gXkLDw6M3Sfyz3G4TjfLmd2oHYZCdu5cfRbc2fDGJiAc2QUwJxmNQAq9WFaBfs1d7uNt2eAXKukTjTNzSqH3hez",
  "key1": "3prDDb5K88gt2oNbPKecx5B94cWxWJ7xuCWFpBqQjXG6ifscYEWEybWmeCfj4TH9Hz3ZExQzhiGKYjnNJnzecSDS",
  "key2": "4DjxQYCS3w7qYVzVGcFtKLsz4Yd93ofWbFNEXh37FhPJ7BGGJWvfuq2UcRuCd8yWNkBLUriePB3EymgXGeym7n4t",
  "key3": "3n8axAd8wQfeEWLotnbbDR9ewimziy1mCQ9YZUsLLm7tvPTMnwEMsd8mpXXLAJDQ3X2L9csM16N5xoVPyCL225FJ",
  "key4": "2yRsaiGhazfSy1DbiUAucLasJMEJrdmPGimEurPvYjcGDtKBu3DyD9pSDS5pNoXVUe196JLPca4DPxTfKaUmWZrk",
  "key5": "54D8SpaqkGh2ujbwXpYQDNEX573npPiMNHL3AEFNjSYwHtzihSwXH5XFtGd8uU79BZXw8cZpoiVXDj2tBZJNjPVV",
  "key6": "5LUN2QLtWMckoMfhSHoWwXcHGYq6LEJ81nqhKU7N1YdoDtLt2KjeapqGmY98E9SqUKFHiiTYwxGRuLLgpzJuYjY7",
  "key7": "zbGW6ph4FJfNc4CtJ8oB54vjEfkRnKaqSZw9JezkyLEecA4oUwT1TiANqQwzjcw4eAhP3xn1q8xzJf5WRrFzthZ",
  "key8": "5XirLb6ZKNMeEz6ArCrPLBa73jTYKw3JMBrcqQQyF7vgLCg2oHEUYkgtuUgFhdzoPtmUiFGz66gUvjXdASYgjqyx",
  "key9": "jkzdrqKURGgM7rat4AvF3c1pT5axrhJevfcbvjPoLKfVPkABCtGWMistVkFcUXnghWJ7M3S2WFFRzD5q7iapr3d",
  "key10": "425V6YziQKw27ECD5WbEZtigdf9t7cdjV1z2cprqeBVZabZ59cDLGTFpLKALqQdcuVgPmmWn5MPnrkBCJ6AsnxzK",
  "key11": "5ST6WkAqQY24PZW4jg7D9xZAWRZcwMUEyt9reMtPAUvfiwVTJx7nyDbmAvTXCvxdFFRbdqaVr4JEUYDNuCf36nRV",
  "key12": "5vZggoq1g1PpdeXrjyyryAjqRv5BpATf2Hya6yEd1jw6e8Hiky39ThwxNip1nCrD6qSvFAqDhyXRMkRomAqQhSnt",
  "key13": "5sRb5r32W2wuJXfmbHFrUCk9MM1zAhiayRcsMyqeWyCDxgKPLfjCJUWHTxPsfZEWE4Hr8rFoq5voa8kRRyYk55rQ",
  "key14": "vAnSn8z2s6YXQmsFWsUQMBi6tnPjwoKphMkJRbvd5njrwBcyNFHqRWjbALe7iLYxHH6LeH2qKpZxak7e4zF3NY1",
  "key15": "5QiSWUihpd8ZH1WgqktFKyiRZdJZZXj8Aa4cv4zC3SNJUfmt4bu29rp5ZxWMDcvQXjv1RNWeU1J8Qw65w8PF2z4q",
  "key16": "3uiDKhJ8sV2oXhPvnLDBmehJXrkd6cqcLLTMmEXWWRUBpbNv56qpwx73xJYY7gdpNKJQBGK8U3VUoYCMhixRFpBQ",
  "key17": "26AdAUYw7LDry7rSuXrm5SGU79qgjiMhKjirTA6dks8A1VNW4DzDpdgTZJ7bavo7xbQP2THzGFHrakjDoHqTwhRN",
  "key18": "Nm1XvVfzEqcWMeBtRcm4sk9EwjFyJbmzgMsr6UBg5RLzbhWLdX6GwCc7ETZYcbWB1ZyBCoJENfGGBkdGGkR6KrF",
  "key19": "PuwM22wpFe4YHhSzSP7Khajr2UFM6uCrNfRxh2usHFVwWvHzLwgL67EsfLpXdQeX6RHcHVK72m4i7Gry9vyMpw1",
  "key20": "2JnuMUYG4YWKCnxiqZCpASKYuDzwwpDFRAZLutyCbQGvFVGBNnPe9ZpXKPx7CaGVJfUJpynYF3Bp3r8hVxDv9QNG",
  "key21": "5rtiCGhS7pUtLbbdUK5RZAbBRBzTKtTfegtBhtKcT2tsTX88HrR3tZzSgL6YFgFQyW8tDCzrc2JtyRkJcBmUCEm1",
  "key22": "3Jkxq6DaazHgCKUpAg2pbTWs4dXcwuwgygk9XdtaXNUEKLZk6EeEBSTWMzrtP4Fz6sy4mm5qZqB9dGZUVVnhTryN",
  "key23": "ZBJHN1wfrTZqtB6YtCJ45DXVt6C4uan4vEYkCUeodCjKS7cYDYRv8zZUAENx3JfKKSkQpJDaJDTMsZinPCsqeRs",
  "key24": "5W2yGd4sGkmUcYCoYhhpjQgGfd1cTGmMjGaYZgsSPi3rYQJiajkrgoqifwnbepEaM6CCuKoAUzVUE6peoEMhey77",
  "key25": "26uu1c4o59ommtXNUN7DNnVWk2JK5V3gVDemyGheoJ8tDhmLioAM6KVbBSZb1AuNsT76zxNoF66ohvVX7Jc8gZgF",
  "key26": "3GUcbpTrnwnEsN2FmV1djRjfo9apxwsKAC8YniKsdJHWP9w5XGoVmhZnSjz7JhKRrEqVfBtfDobVScpnYm3Me4LY",
  "key27": "5vE7w1Dd2sGn4Bsudx23MDbzahkHYzHmdakFvMATZEaDHSkNRrvEA4N7WFjvhp5gK9NhQpp5XNE3pDg15wBzarXA",
  "key28": "35XkvC9nsHSytJQnHQxUVibv2MCye7b1iwVKd3DTHLPN772KkuhaeVRH6L74CQhx6VjZXbFGmfEDwuqVPeKHLjcW"
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
