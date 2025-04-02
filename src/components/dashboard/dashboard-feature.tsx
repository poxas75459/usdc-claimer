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
    "5N4LC1hF3iPzShbMAvu5CzGTzPgYQDkKDc58sSxCAwjMPLifd1VxWZy6nrCYFsnGL9DuUzGjp25HQpsGVd6jsZf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iyEo7DxxFnGMpuhHaDd33urNLJcubHzkWvyM31TqSaNWxNRgaMwqDXB6tCueu3EFe5HGUzzDdHitsVk6B8ZkPpY",
  "key1": "3Bqnrnc83skz4JZSUhyvMEptewfZ19gzt8LA8kxcbKi69gsgHq6wAyPMA7LSXV1uVXPHgtTinEaFNWWeCb9Z6hPu",
  "key2": "7T7Un7Xfyw6B1TjKiLdtNA694sooKtK6i4QfvYZAsd5a2WfpzPMh6kCV2fCUg8yUQRrukcVWSVi7jtn5G4ALYeW",
  "key3": "5Bq615yyTBv9kxAAGmz9bEWfo8pcRRWrADxhCTwcLjEGUnhSABYf9cqb29NKoLtivm9fbbD4Nzw2DT1coXYCWNn7",
  "key4": "49mij1SocoLge76Nsf5rAjWP4ka3VVk92VzdM4bQWU9T5zVrBJdBfiqCVT5comPy1mGbR2uAxM5qpF8F29tZShEW",
  "key5": "51KLczYGwGwiaBe6wt4uMRGF4bLRTt2HZw5vd8oHp4dfarbwfFTTGYD2fQaZf4VBWZbNr84Be86kfkXWMdi5QtyS",
  "key6": "TzxTHq9RQAsVqXVULnATKXK4jzFogyPDrE2sXdsoZamYLGhsFGE7YJbbqy73nGp1zX2wRKNxrFzxZWJDpVuzrpS",
  "key7": "4gQkFqwjA8H3jsfVGdDzDyE9GRPhbfokWU8GestjBqSigGXnQFagz9aLyKUw5AK131TFZJYA7md5NkicueZcMb7H",
  "key8": "1Hkmwy6pnSuyHUxk66wiHubcTeUBZYKoBN5WRtvchXku4t3PZ26w8erqcTXTATJuBvhgi8JvSg3oyEg4vJGG9JX",
  "key9": "4n7FeGUw4R1wTq62bGSsobYSwUvks888pySkgb2DNhGCPHsfg8xRYoLxAHsLcx2QeemEzJFDLwHJkJM9hKDbwtnK",
  "key10": "3H2C96PTnZ2N33EW6TuFjKkS1Yu52VgRt5eJC2QJYvxjAi7ik679mHS9QD25wMwsHoLEEihZF4zEJBdETMszk5Uu",
  "key11": "3ht2u1zXaV7TaMPL6AXiJS6QfemuopgEzTXawowD1uTUxDhmV6PYAKgYqQSBupgpkr12JjWUdSvb6LvWuvjNGN4F",
  "key12": "2jbXn5A7CPZUjER5s6NSsLhhEo25VHg4eWTJCQnL9Vqr6MhboZJKPXJpL1jdyXUsWKLf6Z6Qo5Dv5cBGXQZHQY7E",
  "key13": "2CLSx3Cbayv2Q5rG28jaJmkHWdCisxLsSAfBEq9nhnxL6S4naVcFVTkXMQ1TxKEZFirEtCvn4PScy6mri9k2dW7i",
  "key14": "4qxDXLtekHuq1Gct6M6BQfgnQgZLJ2sCWokD3fWqH23aztfswAjXmiH2XiPasSKVnFv89HGdszZYBFnxoaVvgrw7",
  "key15": "3YFEUFP2tGKw9idyjuKyA6LAeJzDkWPws2bfD7mMKm8JVKD2DjZpvwuPnQFJKyP8TQDErB2ZD41UaAGaG9ZGgJWi",
  "key16": "2ErSS3otE4hyQWiTKSoUbzqpABH3ezr1g4HtdFygCf3gXFbM1VJVc4EoM1TjEf3CBSqD3NcEvSsa6MiBUTs8iEJk",
  "key17": "2T4iLbQkwWEEN2Nd1Eipdog4aQs7cTLozx7CpDRY4d99v9UxZ2e2yeA5AMYEYwLxW7g3ZevVfGpYns9yeuGExYLT",
  "key18": "3EsYQC4gjGSTWwLWkUwbB3NkYHaEffSqEVCzpRFjrCRHYk4ENVgGgFpEkAH9EFnFx3VNrnwteApfd1yaAsx2bdnb",
  "key19": "DVtFCXABDpkiqNDc7ACxvUp4cu5vnrF5wEZj5Xnnn2LoC2Jv47FJ5cmLz4xFqDjiLoh2Zmvme9wcQimLnhcrRzA",
  "key20": "5RaU4kKRpmhhEx35w7GxS5aSqUXGrW3ptnnGKQw8Ea6RkGUbeUaFKV4ctpea7MKyYKtgNEUL9N9p9aGpzivj5JNB",
  "key21": "Rfu7tYJpob7uE3aQEiUJ8rj2raSFNgpmcDxu8fVjtVdYdGuth4Fn3jS8q8mbtXLuTuXozawWSCreHZYkga2d4tp",
  "key22": "4dunc6rYB8LWNMbg6RLt7r7o21NEo8nUwSwDF9BLChU9ewdPrLeqYJbtSyS4BpLmjkwgFWBrJub6yzNbQVefZ8AW",
  "key23": "vFtG4XV12eHPDdQ1uHMvaGicjXdfA8JjDKn61AZpVqAoPiYHh9rQ2q3HTshQv1B48FswkpkuXrVqPRE4yFbWiKh",
  "key24": "567svtSUnpjRMDcz4YtXRNddLWA58rJGDbKseikksP9GsvKsPgo92Xu5ZmQQTS4U5unt5WXvLiGmj9s3UK7GTqcL",
  "key25": "4JuZoihfCTeTCHrUjPq6JL3Ns2DGGCAC7WXgAgiawkg9NZXe4EaQ3NFhtAReMk2oFA141VgXAFu8fd6FexzFVNHY",
  "key26": "5ej754oQDG5EqbpE24h1sknaat9Z6oLiYGb82WhUgAw91iXGRbsjgLX8fZn39rKxS4xeehmxERknERwxv2rXRw6s",
  "key27": "2xpncdgyVQ78PCG8XxYbgujmnnbvBD28z3cAEKdJAqVakwKQckBx3rvy9R8GwTifC1jgsUuPTWo2TAYZh4TLvn3R",
  "key28": "4z8GRkqBNJsezLcvn7mamCtLV2GXPb29mCtAwYr5tejajBWmJ5dBFTJ4moorBRFdxyLNNM1XNXfjWvFD5o3eSGpV",
  "key29": "gshWqyKHKAf3AyLAwGvarkgJrcSnUcZjU8No5qshggADELH8Fr1uVEZ33qDqxv7HjRMuB4WKUVaRobrg3EAM1Ea",
  "key30": "3nQgThHPkQqfd1ncqmRnLGtgfhpBfxNpXfnQpmvtkkTzEyEYgSA5jnxXuXwR6KmTGaBN2zxqfnfsTVnk9xLAwgzQ",
  "key31": "3bY97FiDNQ3XmGiBDJBPcVJZotMRYyRmHwUqgfzYXWcVCnqsnQ6PMwtEHmxz7fsNGF6fSYfyETxbhSqXzChMadtE",
  "key32": "5hEQRGgbRJQWLzGTnM2stV4LPpYE57eoqoRqcK8zCUe329bFpu8U4JiM9S4df4HYFjigomQLqaBdYX4eP2NYo2U7",
  "key33": "4MQrvbzEe5imtpxWPBRHqjnHi6LGmstfQewwVbkDWJ5EozZjpkdxBLrUwFrFgkSgPYJ19cLG9o9GSC4uLaTbZrLX",
  "key34": "5hFSwC5iJnHkF8nukER6ASxKaGAJ3Zyr6EDd4pikXSy7JghpovC27XTSxD8Fq1ru7YmJfR9yzH7zXXLe1d7AFUAU",
  "key35": "fuaB5znJaiJQ1CZ24LeBqdFvVs6aHA1r4vM28v6MzwEEShZuCFEiFXf3ZYHGimDNvVYjStvVmcThk7eYWj7GETh",
  "key36": "3UAxvkNDeqXpydYh7sSfZcLXgPHhWaVRTtCDmeVUxQEcsv1KRsfLtkwtMKiTwDa1mjvZgeo9rDhg4Pu4g1hZz3ar",
  "key37": "3t1t5Dyn8XuEDWKfeBApDjfjQ8H7oaKN6RrY77YerD42Xp5o8CGMkAL8w8K9Z2sssGpDySZhqeQs3vQyVxjmWiUk",
  "key38": "5dkDxyNoQaeycuCh7hEVvzp7LMSUC3qczR4WHHkFsYTCoTCV5GnCVBhAiSdTybgPMLbkAsYCBwo23EBLPGNeqa48",
  "key39": "32Hsq7nVUQjvxrSVh9RrcBFwtKG2CaGEmWn7T7vxyZqyeNBVq8ub2cLxa88EXjzNw6bUsCqcJthRoci5RftnkWLa",
  "key40": "bkFkgUvpRAaRTJNYQF7hFq5EnRtjETmQzX6TdVh9VQDy2Nto6tsMwo5kg9tSAydJstXPF7Tf4LtnuYu7kbKUJ4S",
  "key41": "5sg9kSxrDqWzyvpuyASMDzFtT9MXvSyS8zYyfBdCqHcUuJtNu1rTgwTB5ELfCoKVh3PH7KZydMWtsJwEQ6urushq",
  "key42": "muZ2abdCsufwcrbpY4o1wJx58QpvRjEoKurkHz2DnigxuwXn3jvxjqNS2KpzPBqV2BdZpLkvesrhjsmGghW4Mxs",
  "key43": "3Xx7g8vYHm7U5w8NhWRBhwhPY4rotfsK5s9YvxNt9ScbgMH68yMHWHugCqgPECNdgH6oA5xbiAXxbGJP3UvPoS5x",
  "key44": "34bSL3kb4aMB4EvmGo3LFoNbmyXLrodH73CV2tr2fpsTaeaAwP4bVQEQyRqLTFWszPDPdk3Ae7a5fHbY176kAMpi",
  "key45": "PyNQYUgrqw9X3q87gmjgk8K126BvHdhEi4g6Gjtu4QwF5cKst2XYkeKgizzi9ANFM7n9ntid8EFhBE9P2S1JzP8"
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
