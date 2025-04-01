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
    "a3bReMsE91driGdHyNzEbgTJsWcF6hGxgL8GUXHrPVPxfEGZEXk7vVqQ1Q2QMnUhFddkq8qPC7KTtkt77KXGyuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cy227UGrsKVuvuAm86PHtZZnQYWLSXGMp5AiHw2TiNA5snLSArMR3tVQ9tFkLbaAuKLYsjmCH4hK1ngMHEySSLP",
  "key1": "4NQBj5F9Byj3Kw8H5H6znKDKYWWWhMxjr3y8663ByJp2vQuzN9fAHZCp4MS51eqnJjfmycjpQKxS6P5jqBVJUnci",
  "key2": "3udFaqmd2HWpNvMRCvg3MAVEiSTPw5ku9wn8w3QYZB92x2sgcC9eev19rYgBuLCx8oxbRz5b6EYJmrUTmuaWJPrZ",
  "key3": "3CMjz2rPKTEj4tFiPcVRxwTVGM6sKAycQSAKBxfo3AFeqpWgH6aSm3ubasRkCGMunvqcU2xtKGcJ246KrUALptuH",
  "key4": "5ri1kNRrerw8261QYkjUNCJeuCU67MnVgxouyet8mNu6T3o3jgnwtc89Rhv4gb4EmD3QyW3sr7VybmoNxDUkRxng",
  "key5": "5rKcsEevajnFMKhA4C6bfiR1ddfvroDBiDrNU9eoHGEEHMKoU8Cz4n3fdtzGChzkijBuyxbz5FmSudLrGnHdFaUx",
  "key6": "4N5XH8uWAVaA9aG46vX66GoLi5BcjpcJsCTsXFvCn2MXeKWhX4ZbNwzJim9CpAo68UyVUXKKTsoaBWmcBnxsyfT9",
  "key7": "3tXx8rJShVyu9rDvmpv9wZhetGYe3bHg3EvFmJNvxfnKXagQCrJ7HDj9H1tFDWvVpJYcuSeG4zePoaw5vjzcykoh",
  "key8": "3MfHbodsV2MQbntkYv8bGcoMNHPbF9o75E3QxTxwfS6FebC1evDK7JXH6bWGVK6tZWQwkvXEoZArf77ddzr9a4cE",
  "key9": "2x5AEYpMJGWN6u89XMqFe3dZsUzNQbcU7mqZAySpmCaY9oVWJRmwvs1q16mr4vRRhvYzET3rxfEcLq9ShSnrdEhP",
  "key10": "4vk5JcBBRxCRqAs2y294gSdaqdxVEvpyxc8yFF1U8mL3MYX39ZeX2AnNaB6AZbkLdzM98R98kMmaAbjJgY9p2toV",
  "key11": "2cWhwBN6sLevvB8FLYynZDyBKfyn95FH9jJNRb8koXtcDovSVkYC4FLpw3YNYjgSqt3Dbv6owhvb96PJVX2JTuC9",
  "key12": "5dz1ePWKdZY4JejMopf7YL3uQFc475mW5ZUbD6RBjyeJtVshroX6oroeBPnbqsE16o8HNTrkJ9EqdwjjAqJHobcU",
  "key13": "3o1LfyaNWg33BwV2pAAUWEXadShhJkC8KNhp81YdHz4HrVZ5FbstPLk1xNbGpnkYWPaUSFABJXxCBukaPEeCkKgM",
  "key14": "xV3ovSKRnCJjNwomdVtQ2FqvieuHe1g7Phfjn3sJCGbqwniQqDckk19WjwufGKdGKyPvN3Dif17xN4ehYqXCojM",
  "key15": "43ktJhM7NEXfecsgvVBj2SLhfADpcpzCvn1PVmCrqNve1ti4KbcAVoFRwEZvgzczaBJp662BoZMBk79FiKexNcgg",
  "key16": "4hGREroKLPtCJqmti4mnZfuRdRSy82YKar4stCfrFyoaDiD4PKU4wS2a6EcL7SwQMWM8LLdtUzjrxphYwP423VU",
  "key17": "5jSQRuUqvF6bUMXK17XtvwYHZwJB4MPmAtJ7iDPAtZFmepvdDMUTtbEZZjgXVHA4PL4pVqTmQibnkbFTMDrFK61x",
  "key18": "5qunYi6VxhJHFY9G2wQh9FKE2f4ZBofYkZ5i65sikMhfj5oPAApWK1dyuJHhpmxHLGecTXr48c257DGTpYKpRQfK",
  "key19": "3QdQeKwRYQgvw2dcBimR8sp79myQH8FYf7or1mh7CZhW85KRTuMPJPcwmjrGtEjdyVEAmzhz7cGPPr47FA9nVEwq",
  "key20": "5ua7UGqJ7p8zEDLG1rqwkNQzG9DPDKdGFUUMZxB2e5x22o776YcMPbXvxzrjAPNyndREcj9TTiWnj8DgsgQhv9Ua",
  "key21": "2Rvwa4v1wvknGwoJqVbtFya5D1uuhsLi9sgawc5pzET6NXgtfgZBTVAd7RoEKC8Xx8rAcBNqtCBExNWefp65eucC",
  "key22": "4CrDpLv2i9ohkLWxxnjeC8apJHEobeEHocgovqM7HH7GFU4UxJ5oQN3oCprUi6FZKuyFgnWUGjXYG1pusBrkpz6c",
  "key23": "41PTaAi4QKaagZtdQvK1vNYCWvna5FnZTDiGgio5hw6HykTLuK5WjLYAtpSVZpTKcqjktBJTxRB8qEz3Un9HcXVY",
  "key24": "4yXuREhVFU2wHGJJZAc7ns5A6Lx5YYTzi9Kp8KWA42bMcxXkY57K5BHeBdXqsznQJFxPtrBk4dmfTmGtaYLywn7m",
  "key25": "5WZhL1EKGKbmTYZCWQTpegqL6TKGoA4X8sgicduiWeT9XUAurVNVdNhD6EtZiNgHKKFTD7xX1zspqrQU9S7LGQ97",
  "key26": "3SBKdjpj7MA4Gwx9bfcFnhrMhQUmbsTN5SopJknhNFGegBLe4cWb2SEupkWADSGpqDT7otyLBuzjcGUvbHuJHC2w",
  "key27": "2H9bedQEh8hof8mXti3bnczAgY3heiBnWvonSQtRV61oCs5r3iVAopppqX4ww12uwtuDstqcaoaA8m2sj4f8WN8g",
  "key28": "21EtKLX2MYV3D9Rs6gx3UtApJC3uThHhNQ3KJrmgbQV3j7byCRHAedCnvjEzHVgK4AK1cVxaKPeFuDPRNCSrrRxq",
  "key29": "5Ar24U4RNseM2mtACdDYtBWq9sCeMTKtenTMtmiXN7KY6LvK7bc8kgbjQ8sNAGphcaPXqHWnTErcPHrGTJcjP6mt",
  "key30": "5kNPqhAyG2QfbLxuy5LR1yYQP9zbSNMAdSZyTiCsXsSd6zTKKrmUi2zPhHsfvGMQh6X1BrrXbBxxm41bX2HEWdDT",
  "key31": "3D2WuvhR8YK3jNwNPgGK7FiwErQE5XWeUfhEHUeXasUeZ4aMLJUrhQ9b2BFGK5cBLE4ExGAHNvrL9MkN2jQCuVNr",
  "key32": "GKQ9Zkeggj9KG5kfFBRPdqSYAyWa13k99SeBeL1qQ3csS24te7e4HWCZGNzXbiMYHMdgbGYGPkJPAaPrrpcJ1Qi",
  "key33": "tRScsGLiGsM3Dk2yywJ3dR4ebx3N415eedsweT5U2qKLn4eW8gdysyceEnojYcGqDduPhGiwFfybeU2NWrSW4G5",
  "key34": "5ctMRXqRotquyE12quPKkF2WYkNNK7hKJeeJ972o92WE3FHxrGDatRvj1yEn1RW2sXtPYhHSL2Pekyvz3b2W2WvT",
  "key35": "4h47QkaiGVe1hpk6iDC2jJNw2pp91qobtoCAq1Muq8T3WhuKF5RZT2X6Eji82JL68n8kJiCnr4biBS7JTWTHFELN",
  "key36": "4j7cNCut8wZoCH8E6nDsoMQukfRvys3LNGWmJX7oAaZhSdcc9NUALMfdgwcXuqPeyyvRavHMygzMu37YwR8nGYis",
  "key37": "2gqJjPZhooWdZBgxYLu2T8ai4qCDdebCQhRMS5SuHuwCRDQmdTBUMeQ5yHZXoBeuyrxkcXVDe4gJdvJoEtUqwiaU",
  "key38": "4ftQGGuQfH2aUG2n4Funm7pK6AXRjg8gQVUR87qHFv1W3ryn5Ybmq1gYEMPyewzaM353wnCBUVVDTrtQ9AcJMVkk",
  "key39": "22D4ySfN4rZTE3KXJRHCV7SP9VSiHUogc5q34EBzX5wztF839bE8N1zs3UrfckhnuyL6wpDg67qvLw5u2HNnNrKF",
  "key40": "D8VZx7NoKPTsW7fR458XAKSGEPL4b5mLJvHDYzp4VDA4YuyoKGwHSu6rx6hCA8jKh2Go9rZFyBo7RihLxkBuudN",
  "key41": "4XNqfov9ARNuQzK1yrnSYZvxt97HdQY363iMxnkxVFJkH5XxaCMBzYaYDJMfjQApe5minUsabyuh5SK9AE8Xf9jK",
  "key42": "3K6td423xFibwTvroStA1hEF7stYhTiwJjxCdGKRWXtAUBM72yoEkueUyzP4SCAK81Wqmbnr5YreJyq7Xf9Xzi86",
  "key43": "8gCsx6d9imPN98UcuWbEp57iN4MXdk9EDaCqSyibscpmvgQW7zMes6gcQ5ukkrLiFzuxsSfQD6FcBk5fCDKKEdQ",
  "key44": "31iz92LxAiyaJGZ2tA2bz484GyyNtdc2YHYZGRG6yND9naSkT1qtnoT89mx4D5zgeeLr54Keaj7vNVCrZUePn2PT",
  "key45": "5PfQNhdGLBbNryvom1GP4YbQiamczX9AAsVg9VF9WoLbQrCW7WBoXUp24S3pM5SbEytQdcLJBTxVWGt9DxUw3Xxm"
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
