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
    "5tU1NpKL3cbLGiyg9RTXCTzF3P8AUKAM1FNZPMk9vrUKCzExBeYy8QELnDJqbY9zMjs7pHsxE5yYGQx7VPoPeS55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cE3LUeLS5Fhbr1RJ13a4oqXBf8SsgC6ya8Awx77NqKfqDYryzBZiw8y5oZt24D7398o9NjuxS8yBeEY5CNwNvNL",
  "key1": "4JS5BParuXxau3XeNnwnVnXS8GFY6tNP5W5njMCCEYA1UWFoLNVK5AJwLAqcRSGg7ACt7Gq1H1m3pwFvD4mehGeK",
  "key2": "3AdFcxzH4SRTaxkSmGmrRfwApMo3iA6H33xDTeE32XwEh8nwzKtX3MEfBvT63pxftYshRbsQC6zE5XixGDwdGAjC",
  "key3": "2Cti4rVnum1qTda6o8L8WoNnk8cvLfugEZVXLQYVB5c9VsoB1spQC7mcF48r2maMpQ31Zw8b4Hx25yWLXfj3qnpY",
  "key4": "4tCxJAYQPwTz6y4vxxJ9eVmcDaVnbMcS4Rp3qAQVt84JHXAXm4bLN3xRSVGHKd6CgmkcE6rAAP4o5HrwWwo34yB8",
  "key5": "5BP9Db6Re8yFEWsPmgdwfWJoHVgVPPt2xYdLtUfjVDXgDhBFtjNQsrmqVoUs7x5DBSCgYttBgUELqKmKyWSBbkHd",
  "key6": "4W3QkcYeq22JUiTnPo36ZA7C93MDpDGHk883ePqwFGPP2MZkLyRczBS27ykb4wULfn1Ds94bdgqYz2bgRVbVVhkG",
  "key7": "4DJcrvvZGjkwu1eNi4UVPEr3s2s1Vmw3KxRH9gUJkeGBCTTH5Pw6Bd17uZeeVNDTLKSFnhDqnHcVVzPX8vENmxoA",
  "key8": "3af7UkZsy7zSExo2qTTirCLyFKADXn89Y56LctfmZeoaWSML8JoA1sGszQGkkSFEuArZZYDbeGUUUovqAf5kdUaY",
  "key9": "3CvvJprbvXSnfz9EekSjnv66YqybetxBgZr6KkpFzX2yMCr3AJzpUv2BytzbeqmcDALycTyzN84xAi4CFs5ACVE5",
  "key10": "FY15CBFHqp3JRhSJcxtWfhiV1AevjWKvRGYwBqtkJ9in7J2Xz7GmmLAk8u4a3gwUcYbvG3Acx3Ai5YzosLKKbbt",
  "key11": "43Bx38Y3t1GjHm8LfYAwM4vyfJpVv7VfBMBqueTNdDa4az216JnJe7rKGXMMAbGdMRH7VsomTcLsHpc9ofkhAbhx",
  "key12": "t8eCmVgVhjDR2NLQ1eQKqCCxiHthd38TJ8ewtT2qfiVfzSgVR9jJq7bPgS5KzZciRmT7XcghQAG8iCtUAvefEu5",
  "key13": "3uVTT3ypgWj1CyNuCm9WmDwdemi2F714ZoyYVySvHxjEoUUg2DB5iLLH6sLWHNVZCJMbxByNfe9D4eGZw56CWV3j",
  "key14": "3p4QzrJxJpT5ghgTRpdZZzzdoceuARAcLgzjs6Q946hMiK1o5qHF8tXHKNzx3pV7JjdxZDyKNci1GL5HsK39eQYR",
  "key15": "EGP3WEEjcMJLaJV3dRFTmfS1ujyPJrAWMjLvk1Y7NFz65KQMabwJ4eFFd9schk9n7M6pHdvQAXnoEaEEiNf4ZfA",
  "key16": "5iTpvS32MvJiQotattBy7QUY3cyupyxwreP7x6DWRtn7thbh5bfvK3tLZFYnvcQECka7JBqAQdWvAyFwGQbtW3Yh",
  "key17": "25Fqx6Gy8WrDSLJLzEHgnms7hoMyZmh1w9L48sMBVCo4oNhBQ2zHaWtXQGt9npSeVCJjDTMtAaxFAcd9GCUgeXkM",
  "key18": "oqHDQXRzxryhLqU9oCKfdCfCqxzXbysJSPAxcv5FiALcppdwhArXnuxA55dA6Q2KCQKxHDZ1ZckNvib4hYs5ffx",
  "key19": "3x9sEh27aoNGaQAskQLDWoqqqV14jZLsnhT49MRRsyitMK3awMyoT3g7ueRgNXoz3kjdawPirDLxmLiHoTS4ZxoW",
  "key20": "3ZKRfpdJVrf2fFhNMECDonssHhuGhcdTZBx8yh78e7Uc7hrPxZN7c95hq5Gjn2AMXbw87PMogK4iv1araeLdnzrS",
  "key21": "PSjdaZYwNK1od5uRb3Wny4quBB9uCVPrFsDt5JhPdJEG5kcaF3F8BEk3K4LU5gZJeGSiFjm4Ckn4bJdJwkiFR6J",
  "key22": "3myNjFWiAX4DpRJ1zUkf8YwLdRZcEcPPZ3TpNtthLhZzAipwZYJyHBAVz76YQLdtEznH6qrTmfuuyKht2X2iTD2X",
  "key23": "2P9rxKxBNoFxDQ9XFxH9qGes6BfE8t3Ms549CLn9CHeGnMdck8BgAHAxwjVh6jgvhJxQwSVTosRvEeAMaUvcYc6W",
  "key24": "3mRgbbEBcXPXFj3m4ccdrtTjziGLjhqe2UsRi3wDGcz1wQ7jfZc4pj3NCmksTwffV32rZAhau15w1x1yb35EUop2",
  "key25": "3yxuHmu9vnd8nPmePU1FCDD6s4Rr6pcg8PqQFMdYrfyiSF1M6usiPixhtLHbVZRXX3pyptNt47FhFNvPYbkP4Now",
  "key26": "2Jb2VWxrA9t75qM6ry7AabUMCrs8h9hqzAgihn7d6UXc7N8CEViPAEmkew4eUEnQuA6LSGRvT7wd5gRywmtgP2gi",
  "key27": "4Bj6cwJavNUVKxo1fmnqyzDW7mY4Vh19i9QFrAMagedtPq6FAHuLeQBfeU1WKBTVM7Gu4b84eDtqsqo1cfi6MnjP",
  "key28": "51tN3ZB9naYeNJMrZU9tgQQQy13XmWfow7NQ71zzuzuxHxzgMav3L1dAtMSqTFiaYmozF5BeCUWGdfyxyYSifga9",
  "key29": "4N7157HfgAMKgCEViTU4dEGoyNTtSPMyhT7rpL3J4TgxExAm5fnAkp2y8xeF2YtoCGBAeDkzQQJay8ScDrPedT9",
  "key30": "35SspeftHCUw1uLy4omBmGi9uQHxW8EjtMTZJqrGQHuuDUiyP7D8jGEW9YXumga7GjQA3pNRL3CgE8ccqGPxX2jX",
  "key31": "4rx8NM7LtVMKV5zWsMhKnozY5sQJstn8U9TJt3wJpBdKGqke5GtkKQc8i3BaSD1ZWJ6L9UQ4Yb8jdzEoU9rKZ6Df",
  "key32": "2SLqzMs166zbWzHUN4NKLwTmU3TasumMtn3YW5qZvjo6Z6wMTNqJdsHrw3xyM8PPjUYtN7DDkMxaVRPLHM3LDfP7",
  "key33": "5GFwdCGPZBiPvyzMp8WSG1zC1c7zV4VrCt5NH64ujz6RDACbqbVUkDeZ8AZF9GUCudQNqyayV3Bb3XjbQUH74q6m",
  "key34": "2KLJEKZ4xftTi5cNnwGXDSY5hYbB3zs6R4LJ8ibGePPftoY5CeykJgMJ9icZyiYbwuPRhn1sgVb98gnhFrsesjQk",
  "key35": "55u6dHDQt7Tzbh9DM6GFy2a4JhFtUgDp7jFW2Qj4qoQ8L8satsMyUZxpuL7P8wtK3BfZGVjdyjDDZ4vkC8edN4nE",
  "key36": "268QWWd1xekvQRP18hKnXaHPxLi6M4ByPyGvyWnX4TvUSoSgeVDUHvCsUBbnzDchgJy34iw6Apqj8HnTSzahM68L",
  "key37": "245zynoFa4iisqzXuai8proBvYLn1caQTwycFcmEsTNrLyY1UH2e1BHuoGodmUsgkpEaYxhCMZG6umqn9m9umbgb"
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
