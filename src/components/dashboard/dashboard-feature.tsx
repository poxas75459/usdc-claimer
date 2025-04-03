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
    "2g1MTUNqQaNWjMoZDquHSRS2WgeToiZY7oggPeiH7T5VPZUxXdMY7F93A3Lk8exGB6DDC3HuWg7L1dMfjhSgrWnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "445Lq7829LQ1mYfddZiS13w1eJmF8mUp6Bto7QrvmaQiQmPmrQaxVpXTEY9uA5z4b2rvehs5wtxxt7Y9UQHwo3B1",
  "key1": "39AKZwcWahou5fZBQtK92WsMPsrMFakH831jkoCBQ1Xuoujf7W2SWDPKcTk6oppitkf4M1fWCHJBZSS2ou3UiaL9",
  "key2": "2hzWjEtBtXzrchp4VqbrKF8DoGzn4qAdZ8mbbLN74GkFuKwJndU3THKg2LxCnBSfGdG4jRWd2tFAakQ3fzgPeaVb",
  "key3": "nhAzgJ2AdrzvtUeQAd9LVpKcavVTkjJ6Fjk7Lz1HnxQyHj4qVeLsMh5LFvkWX6WqnGuPQhnXuWx3mz6ww8Zah74",
  "key4": "4UxfEoEguTqusswtWn4YsDyfzHqNLJoD7dUWCdk8MMkThGA2Fa7ih4i7BtePNEopGqNcuP26YpqbTuWqWhnvxYJd",
  "key5": "4DkZh5jioVytww3Ju4JLQBYe9VQJtUJL8bJ88nxPErmubj9bGdXvM3mTR1MXswnSY1iwEuDGfFsVifhQPvWSd5H3",
  "key6": "h61HSNg7m2XzgBrfdbUaAyLjj3PVNqgzZASdtNafsfrUkpZYXouZn23PW1sEhBVkzugz9BQEz7ujtCFHzSqLVMy",
  "key7": "TBqY6JwDwwQujTbVDCqNZ2S3pjuuB6qoQ7L3hS8NiovPDcepVPZgjqu787fZhX1tb48chBtj32LSJKS1DLYnYqe",
  "key8": "2T3FuJvjV4hAxkoyZA9LNNpAWaYN9hNEv1vLP6HWCAsv91bHBue26ebVUkCnbranNNQuWfsUxHuheNxsyfZnTY3K",
  "key9": "8UjpbKFWYGCHDj7fVbgBWPwBng3UqmeWjCV1frTBToSfRVqeeDjjEGHDpa2WdeLjijUzd9LLCtUErLQAXgzp7Qj",
  "key10": "4fKzqDmqEgpDq4V4vikyUvKMD42XFMNtGzEncD8QvakZAMUAgvEYhfpbEubUA3m9MzX8B9wbMHPBTg4a9UKgd4iB",
  "key11": "2bhwrxBasD91iY4iUYbTpHBK4XQEzXmp9T2a73D7j8nJCUMbUcopXo9uDKCesCbp4SHLDykDByDM2ZrxY3eaRNYQ",
  "key12": "5aBoER5zx8j4MPhNRTdiZghbsmDaJpg4np7QAqxKynVbQ7Q2NX4nggVBGbnj8tuCDBcMUxL7xcboEz1dcNnxmqKk",
  "key13": "2BmVT6imtht5uJW7vLbheVDffvbGTv7Fb6hViqmbQvLQ3woXrsAugNcYz6BcFckbntTGVHa5oHUcyDhXB8f9A8Gr",
  "key14": "2FvNaMTzxDMj3TcaUmKDNvjURoZPGM4koff9Giyioo3bVwTmsMUjyGeoCnSUMuVwx1AhWuwCTXY7WztnsPkegr7Q",
  "key15": "3pMtMbEGU3rrxyimyoBChnbjN3zLyAsg4RnBzDpDMTfMYdbxkkV3WjadAHkUuUZRY4y7XywYmJjMaqWPibdUtzLz",
  "key16": "5RN8a6L2QKqp7CXtfFLBrEtXMMNdx68CEGCBRPBP2GHAeFKnruk3rAEdTXw9Tdw1wVkHW6LKUUsf5y6WnUWm12uC",
  "key17": "2xjN64FpcwiSTVhCiPmJTVb7RKqkFAk6HS9751ATyyauS8JH33EyCFQRqoy4aGmjHiduDKZmHjGgXmckpf4z3LiP",
  "key18": "8uNLzdjSA8QzkUtHAMCCxBkcZyiFkP5CVQu8rBytvw7L1gkaX3vkL7aY7UyVJozWi9tqi2tm3bkLQEwVQP93ntH",
  "key19": "3ag3Xrsy3obDoe9mhbvx4YkajsJEpj8A4sZXcpb8ftcWTXDWdCBFC76W46P1gba3grWAmRKUB2k8chqTPLpSykuR",
  "key20": "3CkoqJ7httkb9kvEXNVv5HMkLq7DzPM2nQJxo3hJGXEtjHiy8mXvonifoHFEdspJSq7iDWtp5L8JRYnN5wsw4zVk",
  "key21": "3LYnShZUE3BZdcqWCNbb4nUJ4gLt8k4LXXZfZFi6CvG2EHihiZAXbp9YVYbHVvB3Xfksxxb7s4wJPCXKMSXAqLfG",
  "key22": "2HbCp9Qd9abx5UibuE834SEuCZUy1sLiQp1h7NtXV4BbWf1PqYiJ8jWNtVuaZ5hu5X6dNNqQzSopwLjkqSbhsEwp",
  "key23": "5afC1d3jtnx8nnxScH6FGP5mqnutgaMioxSXoXbyRz7N9LGQiyGZwD8LwmEUnGzHCLxRVirSk1c7y1mKDE7kEBKw",
  "key24": "675Mi38DMUQKBZMLUFvhEXtFXNoWGx3HPBShdQuuCWbNwYemLhMYxoqVhSJHjBLKL6s5pQ5t16hWtLZZnw2QDsvN",
  "key25": "2WcYYqb3VZ4a8wxRdqWidTWPZo7mRLHapZiSKNxtBYdog9K2Mf2YLTYNixXbfXyDZKBy5mMky8cAVgGLZ8U9fSBV",
  "key26": "jMRqawDgaoSQ51HcWczhrua1UpdenMvUGtnPX5hMhGvABSeYZvu4ETwBFYb1NGWFHkC9Nux3JmU6faheCVficKN"
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
