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
    "3LKqWkjhqbdAp5ocWhfF926jCMN658AkMaQtVQtCCoj5WZiCUSvrvmtiZSDGUsPcCng87iJAeEoQmHD68FJH5Noy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3As8uZu88rMA7TSdjquttVj1sHs9WQoYVJokXyhUCSwNHrCjfgEhMjZwWcK2vetXtw3vD6Hd3BjtZPPs8xE8SvRj",
  "key1": "2n5hvMCGJpH4KfHH6SNTA5oo9drVZCysdVQsiNBWzwc1HRHmwV97QtfLbKr5S3fKAbcBGF6nHyqZPcR8seRixzA5",
  "key2": "5adqJTU92wVamGfc28Sm3zVUSphjM5MBJgGNNQpbT3awB9Rc197HhEEi86ewP2Q2n8gZRJs89Amk9TVgzyTkvyE9",
  "key3": "r6x8NNxYsNVsKKBgF3dMqWDuLPzgMoswuHPaJeMQPUw5JaYZC755DGMKgPe7dCzv1xcWnvSEAuirMGkCvKFdN1N",
  "key4": "4jGwNhfAd7ejR5KAPnqdv8YCfMdVjjzqNdcVkNMP3fqYULozbST6UarAVpb8niue5ZJeGQVyKB3VooWY5XsJhwSz",
  "key5": "2f2T5ZKsMyEvWu1LdiknU3TZhT1ughTvZGjvGxtiojDPj1x2EsR3bQqoiVrkFQP1r3tsB2rS24wzLMmr9ja9eeAq",
  "key6": "5Ezh8asRpgkApdf7ycN7wKaAwR1JXQyZuq13LTV14NDqttDgzYsAwYQjJRtCfLfhQYtPtN8k9YJC2jcvzQQyqy6s",
  "key7": "4yHrVHa3C9WtHVJ9jPwMnRB1A73co14jUcjXCpQwyKgoa2FHFMACFArvmEE2FetKZdivCNAZJA6XqZN7ZK6RWyXk",
  "key8": "5vBytfKxWJZecrJRcv8dTZ1kEC3fGbJ3CRqnqgod757j7HpNKVJrYQoWSGZpoHXX8gXYZMdfRWDSWbJYsjdtdJB",
  "key9": "54TwE6ZqCnUDer4FrSinFSEX774GcYVHXUaKuwJJ79bGKEiP9wjoJ978kW6HuojHbanToGJ3asuFqcGaaYaTFCGU",
  "key10": "4G51QGrZmSXMZNdg21kRNNRrA1r3QuPANeGg8s464rLyTZ2iH9ghuepFpK7Jb5xqrhYt3GDWRsuxALYXsMwfZxam",
  "key11": "612tnPMcryW6AAnfHnwNjPko9eqTUcupRYR3PCtPWVEFj5XzA2eCNQ2rrpRwxD91B16gwWxz4Y5ZbwKTXtcHZB5E",
  "key12": "4kRe9CejuXsuwGYtaYXnUEUb9e1squVqPcuMvpi4Lt8K2BQ8SJSzsrVx3TCi59tVVVvu1U3d875PBS6cVXiaU8Vi",
  "key13": "SU16NXTkm4Co8goqCAuhc6Nx1LsbRaNTc6dUfhsG1BaYjE4kB5QihustqpFh2TFXdDa9PMqQAcQaxwZ7nCFecVs",
  "key14": "mhA39hvy1dWxYktazBGdD2az8tfu4QJ4zM87gJQrcZ91jjtAV9PhZF8xMaVXrZdivKNzWBQkj5bGnfr64eBiVPJ",
  "key15": "6uhrbuzuWDS9Zx7PzT8wxJq8nL6LRgJPd4y35eEyip1CdspzUFqM3xnzeEpnPBojmam4EeB5B5xXFF5nrP2NEPW",
  "key16": "3Fwxb83xockz8E4FzPeUGPDVam32VSJi1cNzUvJqQFQj7neH1tW9kcQmffbeZ2qFqTTN5WGTsJ7UurxThpJFhk1H",
  "key17": "h1GuUSFcbWtYSrR1mMhtJC9bvjwh2dWQpzBNsneifx8SKEmY7YHvNg4cCQwpihJDgVNFgnjjbqWqEp6cK627x1d",
  "key18": "66iK941sB5ZYR24xUWszFsASDQsUPPsDJwKFdEBRfuFZ8FWZTgxu3Jptfytn1Lwof2ZPAwmsLjcgHi4qzhiCWuGw",
  "key19": "ajDAufxvbG9Pj6eH4aLwzc4mSWTUUoUDeTYwBTfBppUUHB5KeB26Xy1Di5uziCDejySy5cjUDZfTobVQeGRSkyK",
  "key20": "47VnLQpexHBJfVPKVooxMjbiD36DHcFG9kFM9C9tsNc5viupQuk3k395JyTLXcMbaHcUWNcUjR1saQcr3M9g7kgF",
  "key21": "FUMf5QTNLFTTaixBAKVRcDMSvVJJMJ27sx9fU4LjYue1B3PePCFdzc53LRx46eXLXvmW6kUUkp5TaGG6bT98Lmc",
  "key22": "4utrbsvdNxtoUD6mJySjgCikQ9qnXFA1dHzFGYaHDnuCxLQfXJ1Geg3J2rH5zZYkCj8RpTw2TSYC4QAP6ZwYJb9L",
  "key23": "j6p6Kd9Kb36bXHGTw3DD2kXRmKzbSeb9SYoXchBhx8XmPdEHWnHwXTbKaHMVcptYXUHbph6ECRCWmHHKBLN16tv",
  "key24": "5kist7Gs1VtQCe2cxyBigCpnaTE3hUxHGh8BA9kUEzY1YGidBLr55z5Gh6tDSTBjbmTEjCqL7LcrBdfkjoLyerAU",
  "key25": "4NWaee9WoaTPC2teJKbN6KeqP1uX3PBgfNqn6BePrGWWUp1LEbQMHRLHJ8UXDuAPRMwnLXxEBJhNorUum7o7G95Q",
  "key26": "g5GYyPhKLutUPUrVvWjRGmJ6jw84J63hCkwtnBxwaWhEqRXPY9X5e5VxqXZVAfaNqjY7ZJxtie2CtmsXyJprKcr",
  "key27": "4jmx8HmWn5nhodA3kHbE1j6iP7eGotQwRJErEeUyXafZeeBVyxnmqWAuEw57fc7w5WGFqSKxzw5xuka5gW9FgYZi",
  "key28": "3uaAXpHDT1uK93btpspMiEQrZPBsEHf8YGqsb6nqRpFRmiwoyi5WoNh2wn8hxXi79196NU3LVQsgKcFEN3jL9fPa",
  "key29": "3zwyiKsFG7LYpz4ufcxqZtKqTTwyASwN84vqrEdr1vQXW9tcSvf36tDmX99TTzTh3ZzUhWJ48PXwG2h3De5aaMxr",
  "key30": "22joigoVqNuvM6MjhtVYDsgiDQQ9bT8dzZr1wQfj9saeGKDZau6hbGbGiQ9W78cnUssA9LdSryFL4xMnvAdRLBRT",
  "key31": "KizYRvoHwLbq3GhuunJgEy4Qsk93aZFvK2Cea9KUJijsU4UcztrQK4jWioLAQwcDMz8uPf5vcdw2kTEoSuYKogy",
  "key32": "5UyRcS9ynN9YeG6kugJ8eNSvhi4aC1NtuUXe1PEQdWhgPhqRVU1vaXhehmwFYSxzd1fUGcGN1TcDUXodYRfgCCbP",
  "key33": "5D2RXVMNCV3mMiYV5pP9svG3dASy9UHLdL7fm2hvoRctQhBpiyFRkYN8YS8aJvzdqZ2gPrjkCSyi94ZX88ifXQ1G",
  "key34": "3b3TXoNNVyuFwdkAhm1WXFGwWXbjAmT4pg1LH3DVJU3DzAjPM76HkYFn4XpSnYrTSwmtWhbuuUUXgeZFr7w9NTsd"
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
