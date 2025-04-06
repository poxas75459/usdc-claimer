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
    "2ChcCHVX5abjdwvx72dwiQHzgbXreUoSB5TbMbioeqAA1kZTSnMDA935XsL5mcvN23vawKQ8D6xw3jzNxwLE7WGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EesYn6tF1QuQ42AhaLfoxhEeus6fCX8g8D3rbbcgmaXBn4zXK2ca7NwUMNFLPVF1LpJHZKhGa8tTQir6AXZ8PMq",
  "key1": "3f4vwKwnp49HH3pCzbHS8s3iRSfX1oPjifjBpWdtrjuZATU9vMjHhJDMz1FH7yjr7fQovZj2kZ5GDTGVupvK7kCe",
  "key2": "5MwxS4k7zULCGQf5hgQjYrPRa4RucUqHEKcsJRnbgvk9BCtrJ8maup5uAJJ8KreWXMSaXHziLY8CfeXWKTZVYW9d",
  "key3": "3ttdak9TGBErRFfyuukNEYE6JinmKk3ACWRRKxTGeecR7pEDZbjyD4CuSLN8VTgJP3EJGLPULRHovCU81PVg6ppH",
  "key4": "3sS8UsmVdNMBVrH7P3qxNHktQB4jYqiUTSg4CwjzRjxrTJCxz6CnwHogDnbqPnx57F9QB7Rf8wWmuMNDq4WtgpVm",
  "key5": "2BVCtHGwHRGUQYLrxJ2TjTNGhc1vcUYsTd9A2zFUT83eJZCYTY4rCAX7e2TSaFyGT6BqPh5ZFCRRxtk5ZX2KZrCR",
  "key6": "4NVokkxXAskieSmH4HdoHdVr8XrpCkcXwvanvzGKBC79ZGueme7jM4GpE1LEejt7cZhs8AZmQ7aR3ftP2iq8ZEDZ",
  "key7": "d9t98f9yke9UqtEMAttJb2uUwttxw8MjZ4zCMzzfHj5YBnjNYUgDrn9vP2AGf1yvLuT6m2Js159KRwjF9Vm2Vxt",
  "key8": "4hkVNadorQW8UhoLaRM8Y2dMvRQUqvetQL2WuVazb3oZLZqVt1YgJTNdBGJDKZTQnMkoMubn66ncFsUB6RrGGuxm",
  "key9": "3aWwoMM6KyHDev4Dj5c1oAQkPJgMsuZ2DJutKAdj5b3VDmQkXqayNj1ySbJ7Q8jKmK1aPggnx1HXQ9jfg4QX5qfc",
  "key10": "4mzkqSzpm1ASkYUJ7x97W5Vw2D421Eho2AgkFHHMyisHm9EMtihqWsvRSPSpMpMEfCRKYQnBwQVdbNqNdD6wQM5w",
  "key11": "5XLCDx21dVQEznEaaRJZyiwVkPVBhSqnSH7sMRRAANZDJfD9y6G3XyZVuq6uR8tqCufmgsavj4KrETECCRC6qtBB",
  "key12": "3nHrqjC1gACDkBfmw63R5mpSRSkSEm8QgbSB5RcvGY5EGi7GV82AemkBNmoiRt2jyXXoEV7jkCv13C1ScuRykXdJ",
  "key13": "NoQZd2bV4zPeRgt3qXemMTg1i8Kf82TuWZyP2fThcyooajT1uopcvagUZAzyEmZjStd6yAgnt6dDNFHhEXRUKKr",
  "key14": "45cjmBYfTRLWffa5j6XjYY24Qqg1qZvheoZeK3GummiM8LhcPM1X62ZnRv1vqTsKdE5A7iLHTGCsqsMMVAYo7ghE",
  "key15": "2eKdPESZ5KgE6a5BWh4v6TP7pMjKbNJPfryyX83Rzq8wdPpcxbqZNn6oyfczjUgLUZ3bdWXBGtUw6WbqDBqxaBUC",
  "key16": "2Y6LS4msnRATC4LTKHTceRgstFbCN5yEEJtrN8zfnFKnGqHb3qxfffC92aSgUtwYNPdGJKQuWYz3nZ2pu54EZXJb",
  "key17": "HqYk1dGczfm5g1DjP6P5g4a1qSBB3KYtySnu5Anktf935PuDA1HnZt98J7GXmeZb2cSYfNpAfQYm2mfQ8LMeEbL",
  "key18": "3yhyWEKvVQFJENAQCHTNP4y17PaUaW7qxNnE5eAsBj1U8jGvNrL4JuX9oM5jFHBVLfjck7PfeNVio8wsBjpaEayp",
  "key19": "3ucr7rLLrR34KjKnKtx719chSmymGWHguYHnERfWWGbfrXTdNY7x8rMo7PYAuKspty5EbY1Pxp9rMSVeqvQ49RYd",
  "key20": "LQ5wfagJvtxw9Y9mKPi7bMcVHscR6rPJoRHKR5wuv1mCrpDt8Vn2iWzdqL2nVpTuXktGq264dFSZFHmaLufvbPc",
  "key21": "4cLaZymtYPFh8tTFWdhMLAByNa5fMVhcoud5oTqmpgvakhJJYDhaYCgpX98Go9UCPdMMSvVkBpFHEWq5XitFu4F8",
  "key22": "2jarQGD1iNygd5hS4AJukn1QZUp4J9pDGC8o5FZ4Z42KLNRigEYtCGTz4nYCvteGsCaiTKNjK33zZ6zHZc4XxWJe",
  "key23": "3T28YWfp1cStQ8U6R3TF8mfuHpSwhuNsjQxpxcCDv5P8wN1jXzkW8T1Ja38Yd1yDzJ4S1D6umt3kmKy7UKZhWL4d",
  "key24": "3f8RDVM4jH4t5wiye172HwUbPb8Akfh8shxMAhijUV1YhRbP1g2XFX4nLccvasfMbS7QsNDberqQD7h9KydRnnSr",
  "key25": "35EyEDbWCFymehS63TMv8xi94uZ24Cpj8zsw2MUH9iy9UBfeUmfuKWt5vEHCL26xfJJuKkDpvBrT96SEmoir2n1v",
  "key26": "4PhpzEcd8P3WgwMJwSbdYvapMvjRG1JFUFhoATrskBR15sqS7MUmX7qKVtE2MXSZB4irnKNG7S137u3JBSFYxGsi",
  "key27": "2BqEVq7WCJs96Bpu6R7niEnRtmpGLuCfzSgP2fKCHcdsD41DoeTnhMXUKKfqgKyFJZFqNUcGY8aP55HTTyAtSX1",
  "key28": "3VyoBVYKQtEhzQ2faoBByD2Z67rHF5Bwv71opHYxWqTLRiPKxBjny697JnD71M6H6HZeLjyhWXgH1KD6DgeGCmob",
  "key29": "5JYitnMVFLUip4zsXp3oCPxaiswEjErCR2srANjrmFHyemndEx2CPz95StbpMmSwdJBBuWpeNLgUk4MyaKHTkzHZ",
  "key30": "226wLxzpzRQQ2iuH1kukaL4qzk1mEGWU8ohEga2dTNQpx38jXSogpyf54qKVQmnxwfs4oDyJJcmKHF5WZmShSwS1"
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
