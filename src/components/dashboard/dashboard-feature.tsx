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
    "6KJ8hQu4FN3N7cbUt9usqK5xkH4v4CZD369AjeBeL3QgqKQVkV62PGAETz8aXKPELzw5jbVUbXi4ZQVnbBEDU2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NAXrXKibvh1x6TCgqXM62YUjNyohRhSrXARk9aP7HeQuvNP63isMWee4eR2yuScSkCBRzVzwbDdzBJxKK6hFrbw",
  "key1": "3W2ESL75TzNNS11PQhKJPmEv758t3wF56AWN6zEmoqmBBbj7ea63YgK41Xm96378mxQtkr7cggjMCeX4rwmjASRY",
  "key2": "sACLQhoYLs7qvMAKjmSFWKibZyjPsCpJ4GtUfkEFZMmWXn3eY6XEGYPDWkcPqweJVAbDwaNMDtffW2V5vwyv8c2",
  "key3": "2Rtc81aWJTxqqFXxkqhqqPs9G6K9BLHxfoonSDsZqnuNuYypYQhy8hyYdQVah5VLop7niW4WGHK2Vi2PQS3bHLsg",
  "key4": "5fmwqjvviNxshBsDmLn8xiJSAg9fmJdd4vz1K5wAr9YxLFHZa3BhtzHrkX3viWoQmE3Azo4m93bnwwHUXenYWEqM",
  "key5": "4R1gzEDjH9dy1xVXoUX8oqFgZ2ReNFjGcGtMBQ7J3neNoQyvqvqVXr3bB1Gakr7b4gPz9fmfVXBDWehvSMe6wkUc",
  "key6": "3xkKTRq95BfGwmqew3kpPaGyHZ2ZCCxvKYzjvrMqKHvwvR8vG1qY8wuvCBCQiGRyWYk1mQDjnsfCmtvws8fVD77G",
  "key7": "2AZnG2Zv5HnmBSsSLkcJsfAGQAUt5zz127gmWfDEXpYTHRD6VYE3ikqdUnDN6XADSphZCRMnQN6BzNrBc7aK4YXg",
  "key8": "3N8yr7YowE6cPYz34U5fXxqxQzKb5S1LJsz3i8AapjCfa2AZq3d9KbBSyqY3uCCyxF93gBT3rUmSmxwtQCZKsm6p",
  "key9": "2RJAL83oz5iqLpyV8Lak7JT8R6wqt5JP4Rm7BPATNJaoosf2EW3NZ9P3K7mNeEGH8EJYpWr3GwKNGGmi6VXNAeTy",
  "key10": "3BHUnwFeghNd5Z7QDc5SWxEC7fGimHGauoVadAmnzv4Zhpj3Dz1wDyJxxQ9WVnmnsMUab8FcJWuP1sMTg7evVb8L",
  "key11": "37auPkn3rB5NfuA7g9BhUjYhFA8F9yCRYvdMMPgMAnNGokacEvR15ggWmYU5v7hWXzBLYHma7U1zxn3Ho3HcDXo3",
  "key12": "3rnsvjAsT6rjF7sYXBBNZN4TTLHZpMYUsj6Q4hxerngDwVCciwcSMKGkMrhqRgbNBVvffHZu6SyGkgNihB3o5x1p",
  "key13": "sJb1JyxY2XArDP9XD3A2KVy9NQzsUp3kYFfNRaefDMwWdCKbRvpQBrnPAnH614WKZ5HQJgGH9aDwqP2Wjs1yMHQ",
  "key14": "2X2GuDQ5ofiRhikk6iUBt5ReLisDLm43jttPFjod3huGL7jKEyDPFKbxNiJ7QDH9YMAbAPqQgCtRZ765WF8kLb9o",
  "key15": "rDpLvpaMadpjuS7LG11zRX54oMj2W7qKfgEYhFmTQR6T95JD7miRHzEBPQeX5sx1sDcAqKKtLHWdySqDWTx9kdU",
  "key16": "2nyhcmE2PnqPKDBpe7B2jJJUyeNmX73kuQH46k7Fu6PK6dVpTWsAWGxrJxexdGFwoidUvYiBAVkQUTN4g8wztsKX",
  "key17": "a5ZS7rbyAB6Fs8xemFr7YouNYr6CzVwLKxYSkX7SYBiHymb2vY3NKYiaCjD2uET1MtX2FZ5NPvsV51YjtmEjXRt",
  "key18": "23eHEE7gnpK1tHje8LnnmXm5cUsPMFWaFdo9MnH1sLHFdRjmMAhDuBTyiCXnKmcF72AZDvCnP7J3NGjebBXQPLYE",
  "key19": "TVbXxJBWFEv3zJ2K7zLcsgtbVs9foRjAKVpvXU5VSkFKp52ZLRMjKhHH65ZL9vDBz7ZkN1af5Mabebo4KxBVrCE",
  "key20": "NvJEXt1sKuJSTpdhB4zvNryTDyGY2kv1YzNVZPrcgyZYprz8VQBUgn38BXUod6NqiGJ65RX4HgGFYVW3km24d6k",
  "key21": "2KA5x8GJ2tcm7PhzEsNVmFi8YKLuCV6WtoRiM2qoDbHMFijdJTaA4myJy8GPBdewURXBhNMRrDdLYkkRot9qffCq",
  "key22": "42suxiAhqx7J5ipLKpS3fzjH2zDXvYMMTNoSwD3a67ArvMQSq5fVJ7BvxsdmNGxrJPovbGRYw6wzyjCYtyGqhBT7",
  "key23": "2xYkNiLn7tSkTGF7MippHJbfvBusvqr2ckF7FnRSDcsbioxj7GFk8WCbKPRFvkND8GS42u3CD9Wb45WAshsAm674",
  "key24": "3EMkSkDh6BoLspgiSRi475Y7X9WFyFQH4u5MXZsz6jtnVo76N6sN5unMX9cYB9MDa1tJe49i3v5E1mpWc17eCYpH",
  "key25": "3fjfuc3apG9trWqdq5DaD2uEi5Gu4YvK8MAxGuo1ZzqbFaQ8PmxRctH4sGn92R25HLe3JqAVouJx8bf2pLNZDdhB",
  "key26": "3wmewbLCBf9UjMnyHhkAjzgQ8yCZ2cfb6VHZktZysEQmqmC2UkBU49xhHxCMR3zYPzXRujh9LH3wchxacETaC47j"
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
