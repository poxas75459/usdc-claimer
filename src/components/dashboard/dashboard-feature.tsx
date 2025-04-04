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
    "8Bwm3GtoDrn6xUTVi4Smi6ZUBFBArRmh689qmQHXp3Tih2MTojXxgNzoCShRACRwbKyDfhvyitHvqcdfVRYevn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HU7jgveyQdE7e9ySC1x6VCdvBZbqihRoaQ7uwSmANsnJYpAqd3LCLrajoWDDpTVUGVRqnSTzf1bcgsEJKQeNiNT",
  "key1": "4cLx7FmacbdYoKHb66g8CxcGB5KCTzbhYrXZwPCqLTroK8nJar1aFRPw6jQyWHuZRgeWGuXwPWxuQxdRJEcZUbtD",
  "key2": "4cNDD44kwnuD95AqP8NaoBVoQ9FuRTHGLuSECht22PRkfPzRYHuD7x2hyB1KrS1ufmg7C1Bna7YZfPWXwab3oQFv",
  "key3": "LBqmU1qgQf8Y35C4jfGY9BCCqLSLota2WXTbaUzTYzT6k2M26rwcGftESUgztW3g6ZAuQa3T2wFkCtf5vxJqUB8",
  "key4": "3iu9DKrAuEgxjNmr5Kg2vPiHd3tib84WHvnsqQc3AJmwrekBjLboAiZGmtvQKNZHMCzU2bbfoHinR4PCGemHYYaL",
  "key5": "33WasGffWig7sRuREZC7EJPjg77fAr3GDf9dNKdJqvdU8ruPcDg5praTRPExcWV6gUMomQftKjYzwc3PLWtYrELk",
  "key6": "2VHFWbbsvpXJEwXkJCBJ3yFkwJMrr7vLrUzZvxFY65apiLDbUeLeG8zAiBomWr1SwUSVF3PnYZkXYtkUpFLZ8EtT",
  "key7": "2nZM5wu9uJ6ZPYrqr547FiYm8KAASbNfGKKXFsVfSQzQHRUfvbVf5U6MeHK4W7XSTmW454yTuRzAU8f625Ka8t8r",
  "key8": "2eUCviPDTUkwPGBYs3TWKZr38GUfbTcinHSH27wmGfd5GohEYhcKiNWtpt2yXbmgtRGkRVYGePHUANSLR44m3yya",
  "key9": "3dHs75zYom9rUdNfFKH22uixnGp6YL7XxmEC9PLDTbNVZ9ZHW5JSZrDaRt87DdBzNimFrWBgusxAts3gZ43wj7R6",
  "key10": "3nHJE4tzUmDutKVzVzLPERGE7u6myJfhYpthBfQ7YcKXJDkc6CZzoeUirVRj4QvYegSHMhcdkXoGGrLCp5AAEPVd",
  "key11": "5EvMKNHjpcQCQm3WZzv6iUMitMNZfbQwu7KbZfajZ6zTtD2xza7srCDs4CjMisXerbWTgBHJF4bnZstv2CuUpuGB",
  "key12": "4wuf4Vw87FovvGtEMtaSZcKSuroQaj9wmGwfM26aQCqfT4EYjXHxB5dEcFgbmJiEE7WQKUs3F9Z4JSXSpHDm5Bvz",
  "key13": "Mz2XF58eDNWfDL7JztbE7n2eKvap22GdrUAS1fF5uvyVWWNSHAF7sBvckNqcSiz5FT44BkvHiqLvQM6DATVGdw1",
  "key14": "2X8PpsCDGkxZhxv7E2d36w4r5rfCTEA3u6aoE57SmBSUKZDhNmu2F29ri4PSknDGft213iWH18aKadXpE4d7KyMd",
  "key15": "3AbPE6EZSSVf3BWgEZLZnT1XhTGYJbhDpHcqpmLxrwKqPahXRpnxLz5zeNKXe7zRFv6Vi1sJQWaroWZyWNZRKH1G",
  "key16": "2hTKHYvxjHjMHXfr1URJKyFRs5BhP669GLh2CFMrkV2d1La9oq6xANXUgZxMp4vTpy74xm8PGCa4rGCxyu15NqCo",
  "key17": "4qZ66PY8qoGooxvar6Ym6pfHaCoRD1wNCdcRyP9JQKCyoMep1pjuzaBSrdT4if6zyxUmyrWgiCTAsHGQeRZw2vz5",
  "key18": "31qbYQog6iRcdG9XXKCU8L5xUxEnJWhvu2XrQBwMyARfLQk8DUmZStQBhxBi6F2m7cT2tomkWYsQZyfPUy5m6d6s",
  "key19": "4B8pmEsmrQG43RxS3PzsbczkvrPRzYWb1Q3dQC3MbRDgKf692vTFYFiHd4auDRZTGMM3F7BH9TCVETJkkdmefYek",
  "key20": "kpDpUd3uQc8K7EgWkNSpVrkCEKLjuutaRxP2aw2FggyFgSUCUANbuyRwpCvGFF4ZrVSF4mDpHuSvTokiZDADk8W",
  "key21": "4kekToVKRTGsZgMWNTXBYMLkxoZ8MseWcDY7YJhH1jPb8kNXDzEpN4o2KWwbE7BN3pxyV6GP1KHHNhDbybxyidi1",
  "key22": "4oyrrUkHdgUhqcfqyhMcpAAPCUTGjLVsNT5iwn1g7QVXWXttrYpBQusgQJngSTp7afG8zMXiDwjVoNGX1Jawi2Eh",
  "key23": "4nEwkhLtgQFuYXZa56TSNWk1rf5wsAqn6u2jibCoTNBk11qGuaNRmywiWrxoCSxL2KVQcjXgdnnqGQ9YrcE42MnZ",
  "key24": "31sWjWSWbomMMjLZDNmT9zAxQufZQFAChCnvkboZaPKaZL2REzZX1JtV21PoYNmZLgoVdAKRSXKwvznspFyATxqz",
  "key25": "5Ax6SNArg52F8L2pzxBKGgKC7uJXcnXz3N1nM7zDY4LtZaSBCZRicYnd6tQWaU3tZez5pQNUb3yfvSsNg5C9dpVX",
  "key26": "3dEnP3NgDfq41jn5Y9YwXE71YL63bmQFrdYhfQWEMNnkfTXiwnzy5yp55buJR5wuSkZRHFATmjtNy4LiBpS5dcuz",
  "key27": "3YqCkAhKa6xRojBM7GSLQT6B2XQMDvc3r8Gs9zoCXmKxX9jYxx5VfBx1FGpqMHupHovNZMdP8t1wgHG7AamH85QD",
  "key28": "4p8UMK7cavgvmKCN3ABEWBcYsuFiHVR864Pv5ib4nRHmsQd329NWAMQAggUnc47HyBtz1W6eCo4TRkSFT4nDdUor",
  "key29": "4nrvQ4kg4CxA1DsciHf4Trwz45kux3zYVpwzjqKuGorxLouHxycuhA9J2DkAaKPzQe3DJEFNGyUxaRFi7kpMQ1o5",
  "key30": "3jzV121hvbfBzr2Nk3m9vjY2rkQgTTw8RtR51PsryXSxsPdyDCJ5HxQmUdkBUa78WFN9oizzWN1zjBrNUssuic4H",
  "key31": "5jW3yDNR56Ma8MrPX4gRraVTk2W9ZWZxsmuUxBp8XZy9KBTTusLDpDAjzQFpz7521jKyRKJ9DLE3oGeS1Jo2C7R9",
  "key32": "3aUTGfQwFxhULo7o6JKA6J5k1nZd7ProQNAFEnh7ekgvL1aN6GomdWaeb5BmiFx5sc1xA4JT7RBLe4LhsryccX4G",
  "key33": "5nE2QeWU6RNNgKTxnkkeAc1ohAvYWwxai7HkXUzmmcjT31ymiw3ormejqxuYrHQhDpUi9Y8czrnVDkhez3KKfFuB",
  "key34": "5oERGpn4KFFKterB4iBksDfeT1pfAJBDYYuW2SyCjpVxuWyvS3cSdbaCta8oXz5W3BHnEjP3jTEiPBuDvkLykLpN",
  "key35": "2QCpo9qm5TH16xU87CabzuBTLpSjJu31z2CRyq9RdUKmD8g4137FzbYGLzKYRY96nvfuro7noPHbg4Ww9bxYhWrM",
  "key36": "5jJsnsbWXRn9oFdzy6tFV1N7UbbrrS1WbC7hFF9yxJJYArUzx9j8ZeSw1TfDY3ExCYGizxC4F9ay1XDVMKkQUX2Z",
  "key37": "52vRrFEfzFUxhhgmg5eK9h3FRgAsfTww1YtC48q9MRiCBdGkaihcGLLiYqVTP2pU97LZCfRPJGjKwqDGm3UUFf8C",
  "key38": "3176GBQsFjzRWi6cNyaHGEn21NrAmcLFb7QtakY9kY62U19ZuWWMeGwupQRQpttMwKYEuJLQ8wXinCsMXJKZxQ6u",
  "key39": "3TW7xYJ8VfaZJk14CKkDdhSqULSfF9PrtwV22cmgFB3TahAkSwis8pjQsTdSrMGpLWLQdKcRgTJSQ1fhPvD49j9e"
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
