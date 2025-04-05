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
    "5qDxiT3qTDP31zvMwbmKiUiosCnA1JPfBsupdEJE4oUA65k62kZnRLey4SKayqTdtHStQiGWZHRA2GDFAciXPyV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExbAtj9MDLLUyNNagqizrs5y1sq6S3YWcmBjNUgWPXyRS5GLiaK9TEREuiKFZmZV9zcJx8xcymVq43FKwcxpzZG",
  "key1": "5chGBp35R6NbAdmWTt44QXZes6LZDJZTe4hyKeYhsf6xJyr1H7LNXQUASiFTJ55zgdxsGZMXdeZEsuaChZTtqpsv",
  "key2": "3dWpuXz3WNJouthT9QLgadz2Vh8NaapRvxHxu4PagPzi5KS4VCxW7YaniWrPXMHnPDAgbofuajtv55Ri6kY7oPEA",
  "key3": "34aJnCshRdDPZdREMxfRhJFGeFxdqg3R5WxHXgMZiXUxN3bbK27jhcCBAZdELcJuBxQnx6ovvmLffEnP92h26Kcu",
  "key4": "2EY4j9Mrbo2UC8kpnC3e6Vpum6nU4sUtcUPcCvGpk5WpFa33LYr2f5UDgqKPpaCbqVFAn4euiDVRFnQKxwNwn9kZ",
  "key5": "aqPiMm25TvcU23Y8qf2bhvVfq3S4DXnAej36xcrEzRntWu7y6mBFepypXTAYiJFwYRMJrpKYMiXfMAgH8JKzGLv",
  "key6": "2M5iGTRxPsDZY7BBbjTrUoNYidu78nKqZRVgNhJjtQXgQj8XgzaAXyYYsuHQqC8DRh7HFgy71rvchSL47Cxe1rmF",
  "key7": "3MeHv1zVHNhBRv3un7NJvuJgeZy2LoCysWuTC73H99Rd5oaTAxvRFbJxeyggXVUTzHKhMxDMZJSBk3eLP4uPRAyk",
  "key8": "2mEgJwAMTmwMz2xc644PYti8ew9e82ycUzSP9s7Lo4HP5g4EyBdiP2PMts9N219A5BMxP4JzgKdFnW3uihkrgG5",
  "key9": "5rUfM8zrAfuS9hC1S37F8CerLQwEy8TssPXe9JbbtK9LiEZy9L2z6b6mBpiUoCXAUG5VLkKTAMBUAhKrBhvdQuar",
  "key10": "2C242VjBoNJVFSRhhtNwfLxgWwhFqujV8JKWJQWWzLPFkmcSvBU2YMAqE1vH1c6jiVFZVEBn7MoHerQ6mkyrpzZx",
  "key11": "YnMzKiJyXQ4naHZXoyxhy252eDH2iJbj2tpE7EZ2ScsQZwamQqHvRc6CCZ9Pu48G26rt5NwwdScUnVLVaeHZbJE",
  "key12": "L7RUSG7dySiWVcAymRaf2n66GYCRFTsbT8gN1bfbtvwEGbsioM8auVtyyJfzkfFNYC9vm3g9jUfxuQEnR7eTMWZ",
  "key13": "34tf1iFhF3u7epYNJpA5H2jhhsR6UBjSo2MhZUML4kSkDJ9k8N4NBVYVRmpu3Y6YoTAvgpU6E5CZhUyqdcuBqhue",
  "key14": "5kdVxKPrcTxgwyHFgBWyKKocZEUns2JHBJ7RrRPikpAG18yNUSpThKQnXPZsSeovQX5ffiAdPK3yJSXdCgpCzxqk",
  "key15": "54UuYtmQLHQ38wL3LFvsWgU3xjgSeDehfSLJMHiWz4cSzwniGeouRpbJWbomSaWGXHVJtHJtdzpwWxWJenkWqWtz",
  "key16": "mRi5e7a1xEh5HUA8S41CMgGYhUKXkTA96Ae2i5KaK8WJmc2cLiqqVyHgX8NiMp3QBtSEnZFNk2HQ6JQAGrXUYqc",
  "key17": "4YdmM8HToUTpGGn62nDv8B5JPveHa8oJ4KePwWqPRthC3H1Wyh7t9rpXpoVnw3NwJoAo4Jj69R3fTKN4ZDyKeqV4",
  "key18": "5qzGQoU1BLSGtASkj82bjRKPuPKfGqHUvrn7iwQXZJqiWJwTijgSNxZ6qoENTgeEM6qoFY23CGyZa6p1mbrainmy",
  "key19": "34MM8BX7U8JG3sKASD3zLZ9k79sAuwFmkrFCRPyVT67pr7yW5okiNLdAk6bxrYXdPAyNvZQb6qA2fZooCqKMhevk",
  "key20": "2bvZnA9YP3vtkq2Z6ToRXbszyUEYy7DLNfg6P8fp21QmmFmwiCdR75sVKcW82jmCVMEZRouoNRk84VkCU5riajQi",
  "key21": "2EEWi1coSSoYqL51AA5jCkdZ5MumzJdrmuoetFgrkS8zCDQqwXmvdUWQY7yeMCcaWNhZv5k1vT6yLMmN3gGNgHdL",
  "key22": "72eEXsegK7rEiwAd6aHvaHU27hpkj2ehPj9B3P94PXTywdThFo9o2nB3gYDwXAArdGDPEKNMsLHU8wC7Pin2aFK",
  "key23": "YtfwkkF1giPFreV9qmf4sb4jwLriKsq68oJZfKs5eujJMhTKYsNBTZUQXSuTLWurBmNYEDLwQkNaG8yxvJTFqMG",
  "key24": "3ojSkCkM3Byj8bDkfhb7APoM6gZMKXWEhutbtnUTpubd7iw6FDwwjaVov9MGE9TFF9ZyCnPkZ1m5DoXCPAEq6eGp",
  "key25": "1T6vuKyQd5hL2Z5xwAJqtU3kUMgzrVaqn22DsPMTXW5kYnPQCvHUFmorfrMpnZHox6cLdukSTmLhinARjdkYaT9",
  "key26": "2XAUnBDzqdq6kfZHA1EwhemuzJjn3hTbEPGHJtFG4tKecToMyLMPsyAQvxhXfu56XhyKchcuxU3wX9NHhztZkW3C",
  "key27": "2dnqgEh7LEvEcQfgXrTQ2B1CrgJWyUvAuE5t6nubSPxEuoTwnCex61rSVRaxF9xtthrPEamF3H7JxPXFcwVjMDpN",
  "key28": "4KVKMJZN6nS2njJL8XzTg1Xwcd5x2uSUdmgEKLnArrDvxPNbAr4TSTk19zyyY9czsxMBxxf5x4168rReZkd4x1en",
  "key29": "pHAVXh4m7ieqiPHoFeWMeGsKEyUe6FpbsYmPuDkFFsfpnYNtf3pQ7D72q98HzoLEciV1jyFEF9P3BZhBRpEYTG4",
  "key30": "5EsquSPp3J3EVKgWToZJ8RvzgzQWvkXHYgjtY4gNGLYgKNSajA2ZpebFWLGNGwCf7JduL5cctmEQWrqMtobLidNC",
  "key31": "22oxdnUimyZutyDz2oCH5jMiyduhL7t7VD6M3kAZdeVrZ28xC6UvF2CFRxq7STa4KTZJHPCZJ9rpFBsUBuc9L7NG",
  "key32": "2KXJEn2mdTLgzCgy7NfEq7TTvfeMXxWFbDFARx36RGqT39pEsD7neDkj7ApHCcRjnnXyMp9iPJbLvyundCzA8ZMc",
  "key33": "29cy5zRky7GbMjPX6jfAaFDaxQD9unCdDssdJ9MettKWX15pxiHx9odWP4KCjq6KqvYj2sbiuzgVdtW7jjVzqxpq",
  "key34": "2oweocasqqd4nWvsA5JXjCuutm5c19cZE1WzD6hQC5WTuVfZWAu5g6TEZ9puno86qsD2pmUwpZb2c5hAm1caeMeh",
  "key35": "34f5suNdhq8NP8j8trgKntCg4fX3Tv6gZp82cp66uCfQiJ7n8BnSsPXv8CqjpCEL9B5GdmFcD7Hs37h3uiBjp2eV",
  "key36": "pRuEY6Kvh4tJWuVviLNuFFn63aymnUFWTvgjQEJmxZzhLKMPDgDPsuwbotZCC6oUo8FkmzLC1tYbj9i3ZmPgA9D",
  "key37": "4qanv5KffkGmy7jauHcmh9YgVEy1EeNSbDQFysBH3GHRr8UTnxdMbdvXc4uWGay4oZP9NNrtVEfb9u2wPJwApSFg",
  "key38": "5fspp6KJtTVSMCF9nHgF5YcW6DCsLf7RHJ2Da83Cepi5e8TWKkGg5T17HkS8yaKDuaBPwmsM4NSNybWkiQJ3tC4M",
  "key39": "TKbmQpb4Gc3H2xPyQA28vvc28z2EZgKkqAVFS6KNAoZiPu5wnS4WRST7GgHmL3AQp34jyBaCbxEyGGb3UG9RiWH",
  "key40": "5eJ1nL1kwzyQnS45vuMDp4usM9Txd4nHcYaqmaoKBmWaTzv99bAkjc9eqy7E9Q7ManLsG5BFFStJfwVNRksocmUT",
  "key41": "5b7mboxSoByLgXgnLCbHT7nb4pzNdUrsH6sxJ45A195fzJYvqoo6H3LrweH8MkwCp3yoGMg199jLWA9Sd9ttgfTk",
  "key42": "FDEq3rYNq8sj1mPX9Zc9TMxUkLCXHXB7uYAfRtSsDEZRZVAC1rxeV2AcdfwtLKFoecjNDStF7VNWVqXRySjvGUL",
  "key43": "4EH1NENASgGwxuRtPmcdv1GRqqMT9cZ7mn5Unyqo567uqWd21HsYHzJwGEXyLEmRceJxjAjvAWWGBZ7uTqYov9Ae",
  "key44": "5EV6tjSBn4NUKxwyfjvA8YqWwZivhWCQNPwJjjKg2NUib9p2W8Sbgg1KonnJBebGXVvSh3sECmGSm84uuMWXPc9o"
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
