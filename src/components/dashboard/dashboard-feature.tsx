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
    "3e5y4ip9daUNBnGdxUbcRgJrS53NjFUxzMxNPDw6v82WH3YVxQXuompjBusA2oUyUkdw6wdtsr8uriGgJwmZS9g1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KseGEnbLWx1pfc5JV355WSZgrJLHx48fugpZxPRDoqAzivagSDfUReMoipq5e98RSaqvoVTviqqRknQFHmAagoX",
  "key1": "5as8caw7WxE2ENJXmmJgp2SNDazR2udnHCsPtxpKkX5nQr7LgLYKY4E5LWVGMhZ7zDmcWAGAZKiAVjUaBUuQUUks",
  "key2": "5cNLF6wYx32C7GAHAoPH9RsimhRuyrbyws8TVde39SNgadeXDkzTkq3va3gGSsN4De1wo9bdnS3pZ1kVuRnBQ8Xr",
  "key3": "4YQfQyKLS2z5wcqQD4mevrtNbzANTq1HuwoJTmX7mWzqQuez6HNbKsHZE8cyG8hmgHjuqCekMjtg2Bdfwdc1vMB7",
  "key4": "4PfeZ1HzcT3abkhSHTZ9ikL1kzKqWdNKVwrC25nH5H76wxKs5quYYGGFwZaqAR1Y8t6XfBQQtW67Ciz3KT8spdr2",
  "key5": "aRLty8LxLhSype2ceFZQ6LTy48eSyGGF79vkW2vNtkxn8eioAKAQ9bqgJpnVCn6T3nbno3A446KQEf5vJyjpsQV",
  "key6": "3T614nANnocDvKqEgHye7ftR31RN5btH5QFxvnhVU6Y3JyBVFMRVxyAQtKAoeKSb5sUg24pSqE5uUobqvRfhdmKn",
  "key7": "4mwDvLiDM349ysyqxsVzZbZyBRJHBud1ac3MHCw4qpdGLk4Brfd9mmDE5i7SmpNNvUpMHsuaKQHftMcCgZjDBeqE",
  "key8": "RC3PfL14aQ23aUTWsPJPbP6W9LSPFnfG4bX2pvVBVGRbcrKR2wAiYZvWYZaALzKovYMAPTBEmB2RoyYqTMUqr9h",
  "key9": "3TdK9aSF3RFQPFRv9C9P9axxH4kHFEz9tiU9zxg1i8ExFtHy8dRdtedHwrgHFZeY2iE7Q8uySWqhFk6EGS5hS1Do",
  "key10": "61uYbkdoXoixVMfcnKM2GbMtBvQk1fxjHFvJcrgXf7G9japjsGpF8jxfTdWFW5Cf3hcf1qt4AKudCLNfcsppNRy2",
  "key11": "2dB9ku8bhcuH6ym88AqNgWQaQ4SKW2zbzhDzqGr9hag3gGZeiYukzgN8EsJYjSX5NRESfEJyFPbuvVBvqJvKs813",
  "key12": "5csj6e1VWnGmADzeijtYw3Kdgb1xntGWH3nsWPWncm9eu4Nqrn7qpZ6XDGio2A6kmAskocu3pmj56CpNxLPs1q3E",
  "key13": "3qe1Q1knREAdfepDogC87xw8i9aC6UksxCoDgRxo46jFRL1qT6Kdj2SRAgmhy2n2V4TR9APvjHFQyaxi9eVoTV7U",
  "key14": "5ruvQ4vmw2ag97VrP7se9RNGn8KTpeqJa2aYTvTMbbAn278snCvv38AuQVGVak9ZMJbmKGyyfN722us6Z5BwvU8V",
  "key15": "4tsqbdHQvdTTz6x5s4QjEV4m6FPRe9aMADUxVx5AmiPFnzduK8DxhHwrtMd3D57GYpcWK5dWxLvzuodMCMrSfYgc",
  "key16": "qie65yQiJtjxF6SuSCZhWEaBakPhg3Hfo2aSnGdSzkYqzbaEoDL8MT8PZ7ooNPTgVcW8aWFUgRcFeCMmKaA92gL",
  "key17": "2oiUfNkathHYoYZZnnnJ1u8i7V462zbuBr1DqzHsp2erEr1Ddn9BxAQTvuXj3La5bNLYsBzgEKBaT33fKowo9ZGt",
  "key18": "3RcsH5oxMBtgQmzdK98LhYDU96oZtmfM83Hcxr9fEgMKJ82gCwco3kK6qZUkkPooPr4PZJ2yW5EJ2u9mKCbNvdqu",
  "key19": "3cNqJPfMkLmRGqnZHgUBEJEKMYwjXVMC2SkrqjpSjRBpoQp97U2HnLFc1XvcMJ2Mqz9d2DUQ5gwuKbFz4ACBRJ5P",
  "key20": "2QXz5veo3jYq6GA9i4gtzSuVd1bHung5Dnz2ziQPit3xLSguegi5yV1rhaEwpt9LJnGiYzZpL7i5DQmqhPCYsHUR",
  "key21": "3ayXBUdhKJ6P2svAEDvNVdo59BGtXGpee3AcfKaoLU3RgCiL21w1NYDkx9fq88f2F2yEt4HXd6w2jn1K49gbiD81",
  "key22": "56q8R1sUb3QvKM18Y1RtL8MsDVv2ptrhk2QN9igXGNQjP1QaYcf4TyJGuR5CJy1BSbuVLiXNLKzZE5Ea6p8irk6B",
  "key23": "3Z1ggQRhaMQc2fQDVWvPQpbnaMwwMzuvrwbJ1G1C9BdMkrtM1EJWLezGMVLE7SSzZeEqnPxtr7AnNkX67pbakvpN",
  "key24": "4bShWQTge1NW9i5p6LEBVRjTBYW2NJ1g5u7mLk5EdkhDimYyKsKKcjNBp1iRPDevirDWQcrsbPrsC5TcJpDw8Fib",
  "key25": "y4Yityc35ZrARCVXB1XWdijDNeJxSH4AN3mtxqksJnqVS2xFHGBXvSCC5FUydN9MhbLdspS8AKb8dAthh2Z7GWY",
  "key26": "DyDwJykTVyjaL971uBKAby6Z9vSGWva2Kq7Tz1z4K7gZbwaVhxTWY9wVYoxqZATNRjfhSk5WiWge8BcWKbAwdza",
  "key27": "3YDZ8bCqbkwN99PBBwM498HMPKvix44V1cjNCmt7zKguQkB5xrLGTLnFpimkbH5Gm5tvj7XRd9tQ6hHKXQNrKpR9",
  "key28": "41LFWEnuCGxXneu5ncngqA82VJqbfHny5UnZ1qXHCjXT6S3WvNoLDMTaL4ydgY3uUHGJTLS25R5Esv2g1hk9BtLd"
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
