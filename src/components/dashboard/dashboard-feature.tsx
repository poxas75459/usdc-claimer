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
    "4jKmwxaroxoQ8H8ChPjQF7thMSZGSfAV5MwZ9GomZ2KJNzsuZWB4wTPCMMAyBWeEY8dPKUfxrHSPwiiwwEJe43d8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ky6cPf2gJQRWHzUYVn9hwHhwBYHnq52HYWtDTZBg2U8mCS1MRyQk7haxM1YpW6foCTK9JHUhy6bGw3ZP38oNLBb",
  "key1": "5a18BCVG3kDZkAkxAo7HTKQrAsG8kUVTPm5XcywRWMXejXZAuMQAPoBBW3LamvfEoPqqy46DQrXWqvc1JT56Xhvz",
  "key2": "5fpaBFTjZeaQWqNSq3AbJYcLiniDSSL6GbKZtT3TqVBu22wiNtk3NYYNBSZZg9sT9NJnXnq5YtdK6imVbYy8uKX2",
  "key3": "4Vt7futQNBdGMEWwFzjkadzCwQtJhf2h8a9wfjoHgrtRS2zPrEeRL3jNfWP4rgsjQ89mEu9156Y1VpXtRV3k4Wky",
  "key4": "4PzLmBAUAF7KNoZgztKnHD2SZ6e34wXgZ1WwCpuRJVAo274rmfXHRt2ZyGzCYJnU51od7wGZeMTW1rVtEA3j24FU",
  "key5": "3DnKqbvp9pREwEhKQUDwkya9CX59cpSk1aBDMTPeAQVKLsQSR9JkvmzDXLL4ubQKatDP324MTozB8Ww6tZSrd2m1",
  "key6": "5W4ZpCj2iptkEge82SZMg3quHSH4KakbmCxtgs6UJfa7dMuo9Wkeub3j1Ru4p9BTmTGPZXwqsGczcB4b4FXCUfFx",
  "key7": "54goawNHxWQmJxPv8G9HetaWXA3mk2a5mzBgx1m9p4iKmdwuowKNMcfcEDwDfvnFQmLoQGBp2zAxvoM8PdYMJxJL",
  "key8": "JZm8AXfg6LVKEVRN1PCEzFrWhfczSfunxi12F2AnbbajHK1QHaT17RV6iVxUoG1wtKEGUF9iCGyAwYmCq4eUy2T",
  "key9": "cQSYF6XXKzKGWqe8mnNJLdaK8yZyBroLhJ2KjPi1Ay7KXdS6t6i4QgBA89Xy7VP3wqdUQ1g4prRZBqBJmKrgosV",
  "key10": "1D2K1KmUuR6j5mdEfDxJRjSxc7i1GajFkRcTtMmTrbKz4iA5PeNhN1ekqDEYQ6CTiHJyJBfQc9BDZuAEgvEdVjW",
  "key11": "4ovL9mACNNm6xs8PKwVQ6GkHinpVksTbnFj9QzaDeAR6aCRWZZR7GbrrsgVccy8BbzEvjhF9AVGQ73eQN9eJHsTD",
  "key12": "5VfJRnL2ymSd7w1ka558QCWBZPhUgBbk2DRNkxy25NeSYd7SYGxjGxh61omCLuQTvZex5NdhGKgwJHDkquAgjBjY",
  "key13": "5b2pnVUgpWo1W2yNwqJTFo1VCKUttXTMxcwMJhHHB2ipNba6ZUkPhhqoQcYu9LPqGabYkvghsoMwkcuWGgiJ5YLp",
  "key14": "4QNbS3t33Nn1TL4ptppTNGs3Y2FoJynpvu6DdSQeY3skfJq4KnqvGxwUp8hwjnMWHtZXXgV74eK5fVjD5H1bC9vV",
  "key15": "XL6ymvUx95Ehgpa8cSstsEoqtrFsKgCAboBH5h4WjMZAB3sHZpwaKX4MXW1HR9UFDHX3bgG2fAdiB2rkxWribjE",
  "key16": "L1sYoozeCzMi5vkXpBfCy3Y4M9vjky8CNGhJ1A7JnhD4iibTSrQNiNRgx7xmY5JDgmK2psPHsnWRqZvxd4np9hq",
  "key17": "4LiKgD9wzYVFH5pQEkKjJGeswcBgRhs8kngsAQf3vmguL1ChA5ooncBca8yHd7etgHi2LLjRzZG138y1Yy4uggjP",
  "key18": "sCTJ2hTbmQMVHJbwVQuTrGX9sP7AQeTLBtDXSHdf6T4y1qK2AxtUWmPti69mMTvVpGbyuUXtVa56TgHVZAvGgvX",
  "key19": "3LxN7absg2KXdnfjEnUyoNwzXLhKfGoKkQKVsZSQ2Pw8d6dEXQ5WMxT4uR8oa47H8haNHmeQyjBijznsRpezRYRt",
  "key20": "3yDjdj79wSorpLsUDUVfPtPkv99SpLr18WFwHqeEBLyNFHuKEbteJGqLLMgdyDpYqPcwN9VPN8KSk4oLE7wSxeEi",
  "key21": "27emnoBBArmu9r2mNYV4aafC7sCr7KYdKAsxsA2RnAHwqYhsK1JBU3vJyfm8UrEWRQRgEVJ7Ko9hJVyhZes4v4HV",
  "key22": "666CKbJTpqDnZrnVoRpmj9JfsaLYj8US7oyndwZgZGPwbhgdXx4J9pmCfSCxU5dUmvX9J78STvMYVCCkWzN2a1NJ",
  "key23": "35Cm2mj4xcT3Wi3PDm3dKrB97fVUTyEbzRZxzLxuvB1NGZFf44h2GA3Q9uNq4Dxd5XRho6LXq1LsKqfRt3qY4dPp",
  "key24": "2s6hazjf7mRgWum4mc8pcS356CfNqmYsWZa8yD4ktnzDELF7EF1ArDZVgMa7RynWYFyppM5xNMhnQAhnmFwwgipg",
  "key25": "2JsDwsLWRj7ay1kUqkzbUXvgWEm76ATgXDYYthNWoyxKTc9nZa6PZvvPaQbj72mSYCFeChhfuKEvszqQgEYB6eNe",
  "key26": "CvYAwcydtYgEEuf45GxvmXYrSQCZXqgpAskwq8Dy1mWm8Bu6a3grd8awuj89QVLwa9kjLcnGwGHHwqKeD8TtHP7",
  "key27": "5HsNqa7Uh3hZHjJSzRGZjj99jjJEgwaYeUTyHxydU5eFGjLmhp1ubsBdqLfBaZ4zDVXH6BibVnVDUbvbbhJ4PtHz",
  "key28": "3N6LHXMjWk6yugLAuUoBVXSd7PZYZ2vyb9Fw4Vgy71hFubTUTec5UzEEu1e2SkKjVL6eFoqRCEqPos4HP9Nk2GnK",
  "key29": "4EpNEjJCxhb4ZfQYGsGDAotqhjMNhVhVzvzUsdBA6QbaxNsdMJDmMrwFRN9zsoYafmKktQfCNhMD6wk16bqYTSY6",
  "key30": "5Ph5SF9j3weuAJTmTwtqtqhJrRdjMDr8znLJvPz7QNQGFdomnHEbcnxvRNQF9nhfm8KNvybdaF73crYLNpFRfTcj",
  "key31": "126MpmmPsAXkUNaqy8auSeJPVzVzxtid4nri5t4f3eAd8G7ouTnmzCgMXDb8oHVBiKTnd81ui7ZbGrMLjadt1hhM",
  "key32": "64iy7Ed2pjRmLggPev9gvwo6y35eLqMEGYc9cZQYDyxo9hSKg77q5NvGKKAABv9qYhAu58iv6yUb4CrdgVWJqxT1",
  "key33": "37YqSjTD9o1j1LLYuPzHhm3oqiqjWPQ8itQdfu79Yb7RHc4nVbu8CmLj4jwsCsvqgWqHV6zaL3ANbt9aNByZgfzh",
  "key34": "4kZ5f2BG3njCQVvVP7HyFU2tThbfpi3zM73iDPuBZAbaXRfDEE2a4Xf8yxZrMLbWtb6pcWVvGWYRn9qMdVrFiNqB",
  "key35": "5nSxTEzd9iarqQB1V1eRGp4RtU7ryNtFzxsGaRnuy3GazeE9bYQpW1KujSV3kbYyGCfqhHnuhuG3WQWBoa1bZuuc",
  "key36": "tJzv4HkybSVggghEcP3JvCiVuwjJDy7RMiPtzgYnQHzEpBaKQLBCpSJhPMWw7hzxnVvy4e3S1qpVWMB4WTVZrcF",
  "key37": "5R3ztNhtvP5rqzRf7aeFJwQE8mvRbHFGmXstdMuNrmEixh3UHA2Nc7cpZH6ppC3FSZiU7whKeHb5HAMtzdXgY7SL",
  "key38": "r6fNe6Xpuzi5d6uWA71kG353CT9MToCUYruZjs9fA9xmjxDgn8kVN3apzMe4Yq46eCfpFBtwy6bbuQpAayYffyR"
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
