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
    "4fh3ofV8hEgCxTQoAVJdyx2r2qaqh4okWe8igQXz7b6o2Ap4LjrxPs6mXnjdYwB6BznSuD81T3sxLMJ2svnAM6PG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nx7gEButxaX3HPFiHwyrrwFK2kWrhydvmNdgKnxqr3UpourCZ28G2Ay7PkQ9Wx6aKM52LxwKTsMG7WUW5badhoj",
  "key1": "2jrKo2PSWScMtL72PKfit2cxvkxapFf5USFVLeFuT1QPBYUWXTFNE4Ke2XYBcjRKpzMWAFJF2XFCLGhHbvMmdGd3",
  "key2": "2xUhR6c9Kv1Ydyjpd26Ze48kYj62HLLyQqASY2MkBP6B7epUk1GJwhMUsFnsw731dwFd8B2PuoydFFMyzbQx778W",
  "key3": "66esYjKquWsmfE7ZTY1eYUL6w7vCxuFLRFiUZoJ4Rsj1S8CRyPe8qgjVbsgjiggQWWrVwZKypziPQZJjfwuxtxFu",
  "key4": "4RNEU4ZRCXd6bPdfZQwjW8wqW3xFZnDNTjQXE4KnM1ewpB336d2uC4KSTAiiCGuYNt6g6TJf1sgWp1WzzxjMYsj",
  "key5": "4MrcivSWXm3EC3qWoeb7u6XmNVXNGhnH5Hs5QiLGRQYKNZmAUnBRwVYUVhkf5gZ6dccxPrhC1bi194necsi9um3z",
  "key6": "gDVwZchPat7acMzo6KNViHD7qgJ9MzNRA4C1Qg9HY3eSzqnnWfEVJuJ4HDMSTpN4AUwLuMFYrLLzV9pmtjpmRPY",
  "key7": "hdK2ddCG1McgGd6GPG46rU8aRtcBRyuaFd3UvLiB9wtDhF4kcckxZU5Bx1EYQSPmcGNdtDwjXL9LiH69zJ9uMVQ",
  "key8": "fU7GRTMj3Zzs4oNN27sxGgm16AHYEZFSLXAn287cP9J1UJTwYTg2nYnD1wN6qPQ9sktX29qnvhBF7D1ezyRWsQc",
  "key9": "5FYyPUJLRe4bqi4iYH48x8XbePGw6EqXHonzQ9s4AQUCUp1waQbsMFZoehmZS8a8WBVDMmUq54nCvg5zVBGiRGsp",
  "key10": "rJuGBdqtuZmrvNGVDHuYrPUj3mgjB6g75ww1ttSLGcv8pdfCLDEz41isrzw4muPAr4vRyU8YwebFBEosD5eyqaL",
  "key11": "ktoHKv7iM1cXZ5Q1FhzS3nvnKx8sCQ55JyP8V25FPfwcJf84BWvsjKHdhBL2SdPmmxrbCCc9HCAhKsJTaFXB7cj",
  "key12": "5iLRwYSHdwNXXNZ56GFLd98jjJbySHdfuA9KH5ratqs9EK8hJtqacFzDgSRt1EoKcgR7v8vLiuYDfq8LYZAQp7rQ",
  "key13": "5oA4GyieQCZW9JgBYD8p9JvbnkMUCyti4MT2xSuWwRhMzAiD5FNSoE9mev4TMYb3JXvS2EUSe9QxHFY2iJPdwoWt",
  "key14": "2ep9m72EbUb4NJkVXRDWGwBMnScHWmf1q4NR2g23P979fDcqEu6r38WaNPKTahCh6zYwqSNC7E2L7zijrgwseaM1",
  "key15": "3LFGWATKTb6wSpWGHbSVGr9x5VtLe9NgBeH8UZwjeY39q424tcshucQEecKLncMG4tLQW1T7qPybnhbf1PApGToE",
  "key16": "3sBsa8CTQjmr4u4dgUwfSzk6gLmUE1PHUuzNMB1rW8cNZZcDkD9oSATkRqW4CTuh3MXwTtK5JY19vFQwQuEcB2C8",
  "key17": "3S48ub6kn4jpAd7cwXq2eRhxmXTnpT7z6Lqm92mS5jc2AD3qFVUPhyJ1R6TtZccMiRyHaT1v3qecjSxdSvwEeP8q",
  "key18": "25K1bvWDH2b1mCDLGKHryrrbWgtseuK8KBUZUNNTzYX2NLgEvfahqH9qwTyyhDv8LAuf54edSoL6iyKZQrz2pr1V",
  "key19": "341gt7XX13VhurYbQbpXscFAAP4TYMJRSqUV9eBULKotW8LCwFeNRfyyjJ2t6oD7oeHPSCV8Sp1cmx3bBDBg4QKm",
  "key20": "4XpCuYcuQW9sGws9j5NJXD7Gvp3tK7Ebr58QogCCvsN78eHiKXxANUtjn6ymUp8dNCWa9AxyMqvfQpded6tFnBw5",
  "key21": "2LRzYKH9xsAmYVCcZrTUDgS5uCJTjTo1ptL2G27736de5TRsv9nsWZXk4jswQonmzZmz9K6pvupuo4PEYn7Yuv9b",
  "key22": "5jGYthJsrg3o55XwUdcYiv5yopsw1gtbtVmCC1nMQNiAERyXzmqzrFzfcrpzsA4qcr83uzg571pdjkxWFFFQu4Rq",
  "key23": "2QYa3jTWs2xyZRToWj6LqkEiX8UYoLw1vtV1JagwSQmBnZ8qxrrFQ4iJUcXfkuL7wEPACTPeDiaKZ3S2oAd6xYVc",
  "key24": "2eGMAXkinf5tBqse9XKM18kDvmu1tNuH3w1Pkj6npEzW7hHqaw21pAFNTNWd9UDEdkiKfYJKH5K5KJyKrhDnsQRU",
  "key25": "2khhStGH4jwToyen7hfqkdymyJFeUFBDgVWfqvfcVD4A3mgMeVbuU9FYuUcJTRvufKhy1tu6gyGDZXLwSKYi9zQX",
  "key26": "24zU8a4Fmqvz7RiLQTuVRqxXJ4vTsizS6H34yj45WVrjpHJtdG7a9XjAUc44XndAzBAQKtHEuNpMFdiAjLbhGBJT",
  "key27": "34s5tHFyHPPTBt5Q5kbaToRi1Gx6CtNkqwWJ9e9gdgKgE7Dy78rGBmzPiXFmFApyLB2y2k5rUFzLmyvLYnbzFwK",
  "key28": "EwsByKPJ7HWwo9uVGqDHkcP8bjYD15FdEcwsX4QepcZ8chiCXL5UbYuD5mnwgVWerec7xQYqDdrZBYJGqGfoMVK",
  "key29": "4JrzVBgjjj67j5cvtWD4ACWQMsoENmC3J54zew4DhpiVquEScW34XJWwmGGKQyJJCiZzmUeB9LiGFcSpLtWpQo36",
  "key30": "3JxVopTCQpcjmqirxcQxL2anoSyW9Joijps3UXPWkH1BX9t6bED2JK8ZvTamxZX5hPTjF2UVdQvWtBnRYCMKMBTq",
  "key31": "4nJWuTFeGtLoZEn1tEjiy4Nr4uNKMQRjsdka3nhbB98TXSUJz3kUgtgTQmjZ16j56Jk7RkcRNYuMxm3J41gHEa6a",
  "key32": "4GjGCNJMRYaQxAkMZH9qgzcTnwbhFyTv4PCuFNpmJrfKehsGoECRjURQ54EoxJ5Qz5xik6FGFVucYdA7hRLaWZYo",
  "key33": "5afArKZ61LY3j935fwvBvsyTc44gkpseE26oshtnFNEFcTNVT1g634DWFnYUfqDA9D4hRq36QU4fD9zLr1dn1U65",
  "key34": "WqebtwRtn4HHEJhfkAwNRJraaeCtNsascpjn2kUzhsf23mRV25n33pduibyfJSj62x8kix4ErcxrpF1jt7Mwqwv",
  "key35": "kp9dr5JgdMoEXedmHJG3z4Czq2xbXHtjRtGbpM2vhpEhKyBAnrLrZF41dMWDtWz6ZyT4vQ8dHPr8oGtd3s8MMXZ",
  "key36": "WxpTw9UG9pKqrxTcz4TuMagRtjR5VYpQvAyo4hSEsyXjiQKdZAtpYye4onhDFZ4qwsuPNLAHT1qur2De2xesRBo",
  "key37": "3LKfH6eQdvgWXMvRf6MmEXQgTZcmg4f52ZSy6WDgQEAomTB6QyzSCrgsCGrvJHNA7Pwxk5C2ZHJECsJn3jurjKGq",
  "key38": "37JyGXoTkJvuw8BfdgvrcNFG1iVp6nbXvN55x7pr1CEpH1HMrrn5z6tP2n339HY7cAMFts39Me5a2bipbPiarLeV",
  "key39": "2uG2CT5WD7p4tQTry3zkFuShEKj9nV4LNmsCE26i7LC7YbBvSKWuKdXWjcAmWfZD8w2HZr4cvwkU4aki4RGmwq27",
  "key40": "ofHBb8Cg7hmJTMHn6ATBWr7vucffsZuKaDuNLcvXrnwtzeE6qPRBkc8Tv2vXdCpMy6uJfLmXb5ZxGyCHfwEXzgi",
  "key41": "33LZEm1bp8GxHsRfqDrW5TXNu98pkYWB54LmTHc7Q74kVMyFsK8ygwQcJompRLoBuG4VQDrwKDHGQYGkDznArtrK",
  "key42": "mWsHkjUVVKHC39JhD5YgvtvN3u5wUbAc2zUMUBy78zisnGxgPnDAj3JZjBFVi962QKmj9HThFZuffJszPu4DcoE",
  "key43": "3MTXd5MDNjVYHX7yN1sCkfnCmMwYFpwJA7mqcFp3Qajj2rnPjq1Ae7ezdoj32H9TP5UkzpFDF7cMiNNkzRAf6a5B",
  "key44": "2vj6jgFYA5PX6MWeU5nFonqZxNwqmzekWtEn5xVJKYfeUvZHKKKWJgyRrLpL8Tqvhshytozkaf6JiNymGhMVds7T",
  "key45": "shx5SFCbVG1cjwUzfUcCYcKKV7wBcL2gnT1r1G9nG5ZizASUU9b8QXjxdbUzXL2uLGU6jbXGVuWWRWA8A7ePdzz",
  "key46": "3nnRuZ3wwQ7QfKUqLG2psdS5NtcFQv2gRVxyGAtfVJ671Yr5itdekhZ7Qbgmsbj2qtQnSg59p1ubiE7DR5oSawY1",
  "key47": "3VSHxXcuFv5M1PXdd7UmmKdCTiZ5nXmYWnWhiMgJN6C6DkFhvVCgLBM4wvVha59BLLGPyMBBfb2PxFoEwFHmwnEK",
  "key48": "5amDz4VVycgBQp9Zn7NuQ1U51z6swxUphQo1iR3Dp7V39XvefbJw2VnAQachpC9Xx42BdyUz5Xf4jGDzDXxRmMQ1"
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
