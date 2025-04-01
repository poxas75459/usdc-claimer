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
    "57FpYcGMe8vAcivcqYNqygfwpg28uBgQN3J9Fx55EbqdxKtgZ7QweWkv5UGpUfHLnwu67ZdyF54WkfATzDou6ojo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xw5RSiHJm78McvCDGjzSxgsDpstNH1gaeMiDN51U36sggnA5NxizoyGohb29JKYThyKkyhBAS9nqZHh9gehdmUw",
  "key1": "4NpwuqcMw3eudvsfgHdiCo69TVbtM5EqTViuibjxKLGVVXhgX8ftGfWhEw2yRUQrKNSVnAhubTBzLmTo2vzL7RrC",
  "key2": "wCdb7kq4e6e2htkYy8tdB1UQSKFtV74CQ6NXFR818Wj6et87HSE1Sx5GkZAVxTHpaZSMNbQTPq2d3swAJhaTjxA",
  "key3": "5wZYDWD18JbewK9Sq8upqDXLkEhDak7PqXoQAkCTHTL7TCpYiLTJLNNFDA6AtF6X87RFtfcDwinsjE9HCrywFLEW",
  "key4": "2Hq2bYArM9tPJXG1TnJmm6dHkabvr95Zssxk57ttjHCQco3yjouGyzy16NREBiDNNjK8Rs7VSPFkFTyojWapasYC",
  "key5": "36XG7m81sB7oXvwFdEcn8PW5ncHV1LVPiw1WtYLhyGrF7WJvZBpBdxVkLDdkhwXzgVbzX6CXBS38Unss8SmBbPK7",
  "key6": "4mrKqkDdWhChUgxveyCPWFZmZ3cBKbx3P6BbiKfki4h8HAy5cEd8QMd5Su9RySkMH5p9MzG3B7Z9Bi9rLRQfD6TW",
  "key7": "kZweyrLWehEqAmzGzWRsWYuAuKdmwRwL2LDFBiz2pbHb8UAUEnCYZTQWmyTaV8aQdEasJ5v7eWVnKRjvFL18eL1",
  "key8": "PGZ4B5eHkRtdEtA1fSKWZMQ5o5bRDi8vQQKTWpUqrBxTtui5m9oub2SSZrJxc52oqqKJ7dH9rKX8UeNY4WgvprG",
  "key9": "2Aod2GjBUfBwvFNVHeBSGctZKi7iGiLVgJ6YrozgwPakEEaZ3dYetpdUptS9GfWgnftJR7NFkye9UBX7N8Qa8JHC",
  "key10": "253WsrTyZf4tNcA5SCgaUqij8SPuNcvFDHuUudKfDstFyrCpe8C3YKaW7HzDXfYZKUVARHEGjs1Aqjwk5gTPmwhL",
  "key11": "4t3LajAWWaGMJq62gqnZc6AAYqYeX7G9VZYziUMyXJW9mUvvMsBeidDkiEshC9DiwXXeuz28eZsFG32muQkHmN4H",
  "key12": "5P1rCoQrQmkPNxkCFb9KcmnyxmyqnyvDpFpm9Rd41Z9A4K8U5uF9YeD1mW2vuMM52qZXAxE3Kw59UDZoyMNECv4M",
  "key13": "LJJvoUug6wUfd1nmWtbkcRt2qZNVEQ1mcEbBe3CJVKn5QTNnd8zEoARr8mps6cd7tFT24veDidcRhdDapt3hJ3P",
  "key14": "4byXTbWeTCSiQRuXouMKrtR1wqnZeSX43BjeykNLo8cXNCVXEAKQGKRUW5XwSfX1q2u6Pv2yadn2KWz8Qmsq1ZTk",
  "key15": "2HitPpmHmvkiuZkdLUKbzWDsSTozMHZWM5J41j7iauvx2pvVsRkbjfwWCAz6RnXzPBsNmqPDDDyj7J7tHChaxkyc",
  "key16": "3HukAZBqZ9mewA9wHYb1h79gsT5FicTfaASU7nfrig59Hc53oDjnUFWhgXsQZ2sPVi8b9VLtAnzF51K3ivVHBbpR",
  "key17": "2mqBPFqLtEfa6Udx3Mco3ue6JKiZypfGWb1XnUNwgkdgqVKtMnKa7eyJhaa8T9LEYwauos2wHZMJdUpkiu7j3YUs",
  "key18": "4y8CjYNpzZAY1aFKcksaW1obAmqVBZU16vuYJzqHLoBA5ydqJfEbXyTk4YuX33D9yn3V2bXw9GEwWtNrwNFpVFw",
  "key19": "fAEKzjV13qUFn5rgxB5r9ZnwcPqz6AVfCzpuCttLj7eJMGci5cwGntkzASUGg2VRbmLKWmF6cY6WmF4p3gSbTdJ",
  "key20": "2bi3cAaD4uXgAZmTdjduuMt1Zmu2rhXfjrvkX9aSKiDZcP73B89XqrM87ci4AiqeqXNhKRcq4egagM5bhuJXy4q4",
  "key21": "3PpQt6j9YEMUyiGbxRDD3ULx2tFcnwDVDeGESkjdir5ikB8FEh8DJuGBVNfXfJX5kH6mKKmn41z5n3XFGjPUmdGJ",
  "key22": "2kxDHNs3gGnGz2EeiJkPZLnreHGoNQV2q3wrjk1ahYPNDdUP298MANBh16ds5JK9MEEo6XEqqNMptxXq2GTXxwTw",
  "key23": "3XHXm6cwMkUgKSvf81MT1CzUhtt18NwG9Qv3UUAUJeMZJEaT7iQcSmbPy6JhE7DJzyCjgkVRWS6KTKoLFaxB8uxJ",
  "key24": "2243j82sxTsZBmLoZyhZUV2zf1DHypptvNk9a77Kv1AHh5MX9zM2Vgu7wJGWM4vf18FpDDP6W3cBNBxJXjmJgsq6"
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
