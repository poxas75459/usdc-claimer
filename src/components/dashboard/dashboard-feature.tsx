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
    "1b8zT9Y3MP7KtUshtaUAh4YvzwumdG7EAbeaGemiFv1x6YxkBhfUuizv1ek8kcjccHsoC8JwBVsB7AtooFsTxNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FaszZZvW4sTkngqHeS9JvJb7ZVC2K2fDDiW3einjZUBEweo1HRWRBro4rykqKbXLuzQz7gzmUjMKEnRM5yJH9HC",
  "key1": "2KrZriBp9GRq8JsRa1AcXgZHgjQ3aohv3Bf2YzuQoK8FKd9jgoTyHbAq2Wqbs5PDC3uzug98rYqgZgyLM4dEeZMP",
  "key2": "52gRdAAa8fBYBjWgf5o5Xd7Xv3LcsL1tMQiXw3Mzc3e49vycKKu67QH3CsggUHQXpawKuwuuq2VCLP4gNds36CNE",
  "key3": "48PAQFMN2hXLZta918zAxRwgk7UQHqCQhBbPBqPVNoLEWdiYB4gqqsQKtEPyQ1pZPqN7Q4mPxmRkeJk9E3DWPVhC",
  "key4": "5KjbnMQMkaTpAokmg3jWk15PLrEJMELQdFqXYujp1QHMKxPNaWedSHqrwHjieYDNwK1r9CveNGM7drQz9ZMGeQHe",
  "key5": "VnQnMQi8pYA3uWYqbBuKfJL1S32qCwZsbZp9yU3CdzW8gELhJjYSeY3b6JekjoEeanSnj3JJkjGaxWmXBTuLf3C",
  "key6": "31fVCjTAfVBrGgnGHvpYHfUm2mpghCNQJGYUyEHbu85WMJsh8SZDhWUDABwXkLMMFK1Uny2VtLp9WM7RHRDHB6iL",
  "key7": "5TFrVvahAGpiaEHuzPEy2huuppAqyPounsz77YHgiADbr9xHZiF9rJyoxGKwKrWC6WcyhPmQuqDDJYg3d8sGZRt4",
  "key8": "3sZ7NY4wufwUchBXDXZnhD3WeB5EwBVC75CEzCS5JhpodbNsJwCbEtGNRAgWdJf8kvcmfQa4ouw3isPtta1hKhay",
  "key9": "3wMrD9igV26EYPeHCZjyBRW7wEcTq1UD1r3TaEvgkGgEr2LQWyJZGjPyjEVHRHZYTzX1GXDfNUB6rSqvkgRRiiUq",
  "key10": "6E8PVKPMCZB7LVGMyxr6Wbn1rQnSTZ65X7JK4utsKYLQQppbe6RpY1EXXQ8RiaTMv2QaLuGhR7qqck48e3YNJnM",
  "key11": "57fzNqBN4fL1UcaZQG6ECgWg6wtjjwP5vmPXtRfS1938X39iex6kkqWHW3UZyN58RtTqnA4S92uK8iivEG3oJDCS",
  "key12": "347Tjk2coPfeMv3QV5GdxbFkqeu7P9ogEqrv9PyY2CB1C7hkbpz9fSetpq8BdVyXxmR3vmkHvnmLN7dra92mF2UB",
  "key13": "dEHJW2RDn6BL3oosyGF1RNdy9aLcuvb4KMGxQmx87k6PSxQgcbjRcvYTmWMNNQyc6nJzodG5R4ze34AEd9aEkHb",
  "key14": "52PF71wd4Vqxb8mCeiunGjpDNekXre9MWHZJBsMUYTSzHFed4ki8y1N8HpcyQBnKM3BTdTmeT9s5XmwehyLa6tcm",
  "key15": "5hhYJqKbAweByGo1xZAem5WeHPzgjoNVL7sLQj4iNrybqeHPGUmoKAEbUWMrnp8h3LEoGKeKZHuJ1AnnERuS3QSx",
  "key16": "5Jm3XRCYWHjuUTtNpAXBTgpBviRHswpLw9DiKgbyHyL8oTXaHUVojMwGUCmkn37L71uUfBHkXiTBMN6jjBEAvGcD",
  "key17": "Kcz8DzobKVSGHp5AgQTMR9AgsQ1vpbvEZuEMbVxTryiW2J7azVKFXa2zQvCNKpqE8Z6df33MnzVaqE3hcfDX9Vu",
  "key18": "3rA1BQ4ogupq5XfDTMrocBGykbQLMEk6UNGw6aZcdUZCCWnkxx8eU7wuRrqVxdrfDB3buEJskDWxtAVFm7z2nStt",
  "key19": "2J1umTMJpBFDVF4gEPaVC5B1NDTT5VeYmMmoFvCfxPyYQySdSN1Kyy21VvUJ5BvQszQocjLoReeWEKygA2rJ2zoj",
  "key20": "3ukt9eBukCSWDQiGDP2mAxxVCAxw19FT73arT5vb3aRYKHYxWMUvNrBVCdWB6nLssMkQUM3GChRhvFSCzy89vJnJ",
  "key21": "3tbPDQvmqvZCTnbKXk6YKqoUwDTdQLiFijAQCEYBd2USLAAMEopJ2xkjRPKph4b3VUF6FXc1BeJmoVeT2cXZ3CYj",
  "key22": "gch78GukL18rMNjNv5D4iu9vfBiNCN3BPg6v79C37HDzx4RTFxVU6T399sCaGXryR95didoXSVcc1bsUvjfU7YH",
  "key23": "4dEQajwrAkNRQNjiUVJpmtLAPuLoqV1oqS63G8uCc4xeAzF7MZF93d2Gr42N9EeWFuWFAiarq2fiSkjjFGHkbPvj",
  "key24": "4KFDoaSH8Meeozm1sGhWxKoDWfbt14XeYz8iGEd4sjJ8x8paWFfo2ybgAf22AQZFV5ag1Q9eMRFxm3AGzYVt5MYt",
  "key25": "626NB9ubrnLxWDZvzf7qLcD7rxvMATJydzJqYjiD1BWZ5uq1oUzuvaANB5jGCzjJWa4tY9wdUhWVkAVj2hBPFVCd"
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
