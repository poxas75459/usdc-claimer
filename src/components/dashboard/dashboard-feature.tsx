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
    "NDNijjvuz9beQkLg8pr942wz1qLk1PQxRutgzBb988LJpE4X4f8nQnD3ktWwnqqxREvAzBF42E4jaMee9ggCgNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lz1sdKZKhHkVu6jQ946i1duHPo8XDVfNUuaoaUXhQ5PjhcPYYxLPgL7TQK22QktiLSLv3eYXP3QndJSFkgTL2eQ",
  "key1": "FADpCKafSv6zed2dZZHi1Y5FtxGhGmfrUFQg37mjBaZeSwPN7sAfy3Ex46cJWQuKux98yzKjGG5usBgZVqi8npR",
  "key2": "3rESm2vytcSus8wJk1nyVfGau7ZaMveXmUNtGWX9PDwJmo3tA4jhRCQR9wsuF5eJd7KGjvFd6h8VTz6yGNYYpZ6Y",
  "key3": "4hfs8zAzyxhyFvgyidnJyCHTwzUhFUgHophXwhREJNoPCTAJgChdN2MrbRwEAQqgEAiz5CdTw2qsKdDGCRH3rRdR",
  "key4": "3U4Ej66mMRi4QPUMpDV3kc4AUTNPjWLhXfKYyK7qwwRBFmDTkC7Hq7ZYWX5VGgyqeknjmP3rBh4jXy9kaqw9t32f",
  "key5": "4wAYpRzH8Q1vfPxqXA7zVeXaxFXatKnQk4wd8Hg6EG6dN1wPxFfkLQc6NvrXnKGkWGdAuuZmppuhkreuaFxBGvTn",
  "key6": "4QjPnVbN1gymdVW7C5DcjTxX34ZUF2Z3HoNxZMTYWWw5LxxSSEpREdkYwVbKfm8yZuAHjaTpQrCuiCbFLL9aH76d",
  "key7": "2quSaEpHdoPDbuJkabXSrhf7WBwtq6NvsJUQV9v6UM6FGa9Kq5UXnP5d6qyU4xojhc9WgJiCppJWnuseiuLKz7Fd",
  "key8": "3YFudWrqoaUhMBbx2uQwTQFHritC7axXFXRA1ErVJaLRA2nPVh6y91qzCcK58HKQpW7EZ767XimgtCYykXDqTn99",
  "key9": "5ygCYrZoBDUvDF6cYGnFsKoeaJ58DBc6agVAoRt6jTTCEL1HzEYPUMdhJs3aXiKzKs7y3waRWzS8GfsPZzunUSHc",
  "key10": "2MLQgWjpKBUvtx58TVTBxuML4Beu57fR4qmXDZ78MiFeZDATAiMZkKy1mQhiZsvSCVyYJUBajhktmSi5yuGZqDgq",
  "key11": "3LNcdxBrh4AypoiCfWJrY497SHumZyLX5wmz7LunjQJ4EwSVF8kYwecmFaU37nD24nEqfPc1WJ939dMVEk13Nvpb",
  "key12": "2Y3bbhsrW9sKSiY1CVQ1NRLkvFp6rZ97kv2pHPrgUrq4npLg8GPT1AKRyci4TLWYTJZdoGdcrFxob94kEqLCfxUh",
  "key13": "KteA44wBM24u6ifqBTDLeHYsVvJoA4cyEdZPmXFmxrJvBVkTDHdUyLSFcVdA8mtzr2GXCfq5Gph1HV3QcMiLzyx",
  "key14": "LKdnvZg8bUrgR98UCBJwaTg3AWc8q3WazcWRU2W2ihmSafqhLwAJT2J27hmEiDSLrK5NRYftndqdq2KDEsyR9iq",
  "key15": "4RGcsXNyEsMTUtv32pQHtKnQCLmRiCQMhekbLBv4DiHoh7dS23YqqsEZngFYJJjjvodN5wKSnphaCooJQTPuYcNi",
  "key16": "354Kcosq7SxWHjxGTyJSAfoe3QK4RTMx9CsDEpGAN7zxLtcKiLvKGRzoTbuYaGLq6kcGCQYdaUpCRUenMj8hWhDX",
  "key17": "Fiwknh3hxYaUpShNYjQuMa4bjhDS4Spa9oXC8i62MCumNSXsDSGMM9tXsDWHZSKf2H4Ycc22zaWnFuv6NavGe2P",
  "key18": "pF1QRLFg4ukx8PJS8LHHESfD4XeQbzg7BXmbY97R62Z1c2mtzG4LopM6tjM8oLWw1MAZrmG2K17fsEmqbs8n6pd",
  "key19": "4MZV3A1JvWpRrkhP68QtecAAi5X6cMQL6DVUQnztX4449wW3Q6jjhsVYjmaCFJCpmFrdPZcm2CDztjWz3jPmnTL9",
  "key20": "3bWEogJ5KMG6VvSic7B9VGeXj9VDCYEiWZgQgqPymiVS54sjfiHA28jMxfnJpDwjeRe54WZzXRBqQqbtZ4WGZhz3",
  "key21": "3Ai7qJsndandGTF8HT2sfriYrhNBQtxXxgudXF1XXdMaVk7NsgxFuRxNckC4PRKN2pm544SbTAhH9VV1qByLaECe",
  "key22": "ykYu6juNDSAPSrV9iE32bu6hmADBHAp26ntJLtP4aGYNnRA9JwuZ3kpsG7D4YHYeLAhtLFdqQXXKR4u8EfbAM7S",
  "key23": "2pNzXkKeTGU52Hf2qR3LPMHkCSUZ9JNAb6m5KGzVhHbrbW8DHzeJzXkA3WWyUsYHJr3MRNxKTzPK5nS7vT5nu7S5",
  "key24": "7opFcDfNtywTXyFpv8A7hwN5xiTga1ugzXEnCXdNyDJzjbBLNoNRrFNs7tJ4cKYLvTpzixfgz9trLDaZ73sGJVV",
  "key25": "2R2dMLSecMBmVGx11QEFM1Aoqx2gSirGyzCiur9gF3bcMzfyujLVDwnwUKXewNi2aMjGRdEoqndJpbHpyyEej3KC",
  "key26": "4ttGYLABwcbRtCYLL76QvzcBDWpjV912VZLjgG9viNmcQynp6JBVYaQUTWoSiqcR79Yw9icB3iMnyuKvcgh1ELp",
  "key27": "4gHAaPz1KrHXmEfgkN4uzZLXoDwYePMyEvF9NGhDq6qtYyF2Jj5L2qoxK3nGA2auFUtnTGriCHmMpV8DNMbMjdsR",
  "key28": "49rFSP59RagdxxnF3j8J42r7EyYvuistVZoBp1Q2zS3gvs2bAV8B1HTy6Dh5xNBaHxW6LkAyoNH4PErhFf7qZZSB",
  "key29": "5hdzcTuNLZVUZu9YGG4rjyADq8TzWBnuTactvyaLP6Ze9XxC8CAYQRE1fh3ixr44iF5qt9MKJbb67YZjQYHyCJKw",
  "key30": "65hhTboMvnaWHsVhZkPKg8LWLyH8jpGnr65qYVDuDRsy5ed4H4wzy93ZE36Nvw5YUzbeMJRCVkcvzeTCqBBtoFfi",
  "key31": "43LRuyJqsEgq54kyU2FRfXJmku8fGWcwkCq7PkEWQXauDzw6iARoaHeqgYDmUd7qaXKqadvjnupYrHPqNAuYqWQ2",
  "key32": "5ZVAZhh2kq2yyced2MR7PND5v485sLhMyw2WJcoKpLHKwgBzHZFXWyvTrsfouFiJ5Rc5zWyXGicaWdvjnzroLVM8",
  "key33": "4SKJBwJ741gxbgEr4eoA3annjQXTP9hi5Y6mnZqbe9DUmMXf7KgmaQQCPgFP8xxqpcr7hcFGxfoisG4iWJwPYZMF",
  "key34": "3ZGkUx6DWUqNShnWLNMFqyZHRiEd9X9AL8c77jE79GJHmrWPKAjtEW6B3KmXhX2mxN1onboySmdd9iSwuQNhfr7G",
  "key35": "4g7yTYvstwJjzDyvvBscxdDPQxqT5MVtieF2HSoXd7yyAgHu617FpuBZvL22wZruvVP4bWgFQ6rvRSSSUVgFbdkC",
  "key36": "5k1YCK5W3ta5FKa5VVSF3AB6Dco4cUmzZBdBMXbfUVmswk26itRTnqwrBKVRZaD1genxyjCcUrhqr8pTP9XaAsYY",
  "key37": "yx1cCnUyD4mzYABgQk8ZbkTokWPrtHpRCrpspZLqdTmKiKrGyFexq3inp5rjzKk2hymMEB22edgs6kvy98aG5Ys"
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
