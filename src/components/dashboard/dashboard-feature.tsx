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
    "4E5RDBD1uYaXC7hezom3NPtUgeHocKXXNgWGaiaUV7YGs8k6aNJhNfqgRo1zunmyW8eXjLTeLpg85c9a4MniLbVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59fCnisbtmDhQsaX9SqsJRrgovTWhK6BQfYpjoHwF6j733QLXNxah5WCjLpa2ZoG16ojL5TUwEHu68d6F3hGA2ck",
  "key1": "4QA5FG6rfNJSopLWWQCAFdmZdP7x6azUJBJx5SupxNYgaaaywsdALg9QeymFiHFNnRQmLG9q9jEAW9fhhP8eb6NG",
  "key2": "4jDeJe8fnt5qJERPTitU7zZaWeaAAEefboJfTtvjM97UFNqwRWGab569DdBVkkvusTsDppKPDx7sb7jqVwcW4rPh",
  "key3": "5fd5QHoqf6K6To3ay19QKeaoNRAhBy3RYrGSYrkDVGmuxS3Vrn9pFbjaftwq8B6KEZRYbfYUy5pVQ62BcUtbCzzu",
  "key4": "xiepfvdWcCch5ge66NkomuGrC1ULegzxdpeuAU6eLgq6bhPT2ey4a9cEYpuPCMno2r86giD4UXt3jqTT3zqWUBc",
  "key5": "2GUUcoUngHJ52EX39ecYLoZo7fqbyp8QKJ9vRaG4zkUsowFegj1ufpMxFBP3wer2G7BKghfN18givytyWsmUwA29",
  "key6": "3WsnsVrG59VBp5LGLXHrRgHPpEeZTDsU1XnGDkBs4GkfcsLr5HVKuSAHxC5J2uEDi9wsf7J1iWLZsnStWMLLGArc",
  "key7": "3enFFqrhFJ2KDsWXt6wD5P7xNC6BpyTsmbcWP2LksuNYnsCJrhfkecwkW27sSgupK4EuxfWTVyRRCkG8MB9SqXqm",
  "key8": "U9rsEMrk9Ta66WdVNfGvpm8WtwvH27qh2CUfaZqgTcr8Xg6z6Sr2M9WgT9hd6pyRZS7HqMYnPGNW666BQ7o34aa",
  "key9": "62ZUZJyr14K1gJ3N8cw2MCswx8BsnLLr6iEhSknZFnvXVBQrYaA6n5HoYfKhQtUBMw9MyDi74PCrKJB1556By5YM",
  "key10": "2US7fRNKJzM6Q3yhq4wHj7BFQseZNyuEDtb5Q13KpGVtbZR4J6Bp9zqSNLb86HY1GvFMm9NEkSb8XPyDqBWPSdrT",
  "key11": "5vX8ttHgb3YZLDne3DLvMT7JcCHkGqLoszeAfswPtADDhU3ACQiP4cwgpnvXYE6xY7cuCFvJ4rVSiXVjy5vTVoYM",
  "key12": "44KqW5jnqUHi3DUMM18KJkHMQbXLixekbFXoEMaxhL7JqfMEnRqWCgP1bg65WrshH3EJY7BDudkPiEaiX6RERDof",
  "key13": "5QyJTY9gomTy8cUa3cba1tv1MuNTj9P5EfKr1byVogwSD5cYNqS1fht5f3p4sp1r2E7yxPpQoZuNLh61z6UkCnGY",
  "key14": "3ea1kUcAmNQEYRHmPyhh3vnNNh56xTL1ygLjdK3zDxqzgE8ZyjprvdwNPZHw9NfU5gVCdy3HmQbgEgXZTisdt6h8",
  "key15": "4U34iayiTCG9KxNctBb1jXBMJV1ZpNs6Um2DMhjw88gm4BSy13uBAEyuUxJC2uYzMrdxaAzu3tqtFBLaYJ3s4XcL",
  "key16": "3RnyiQqfjFPufmzcaPRQFHQ46yeQ469tJYsNDUE1HJ2U3gfuCuH7X9f6n7MHo8UCwERmhPTgvdt7DLoLZyhUajbZ",
  "key17": "3vWkAeVoE2EhHGCcYqHXDYaKXxUFWRq1ypAmiQcJXMJ7LibYWzXNTkUpPDtcU7RDSgGj57KMY566JcE7kQEzp8FB",
  "key18": "3w6xVsTpoWKcUy1rBTYHLBPcropVkzMb8GzQLoJf1qvNnbzHTrHWmz1rJuJVzzUd7CAm7uM8dP1ahm8UBvjun4sB",
  "key19": "4R2x9aQfU1Uh6Nn9Wrjvjo4TrU47sL7zTs8LyST8yqFiff71acmcVpFKuzovidBXfqArR1eGwRBanrYbz2cNdHMr",
  "key20": "5DWYvL4rFqi74UQuzzdiExfYLTMaGC5bgn7R8mRfUSq6QC9pA785sHJfvxRzsC65qFGkFCeQsQ91GosEtynyPzhu",
  "key21": "3hS581AihU85HUZVRSRimzgS6drnq72gGpAHP3oFygmWqTNWDk3phQDCMQXuMpxK3Kh4rwN7jpL1Ax1KXLRAaEdW",
  "key22": "2aZodaNYccu98WFVCqo3prJVk3nYjnb3hbrtexLF9RziQzXCNa1dmpBPL2puy38kjg8Q5gDaqYK7cJFa9Pqk7HMM",
  "key23": "5Cw3Ja3vgUwnNY31oSoZ2LUi5p77HSwVr36twThwRGKL7DCGgAijnU1ShuYLymSPbZ9YpJhfcYEWw61LWrPazuqq",
  "key24": "63M3RVrGBFoXH21U3TK6Z3U8wpY44zdsSRQMuzKi7bomzSvYtjidnWPund5j2VM5bxfJ6FrJnR49srNa4NVW6BEh",
  "key25": "4vS3gjSnZyUsnWTVgaGAATwEx3FmUiGPNzGD41oRW4iqgsmBxyUHfRVaLU9LFKC8kgLPPfmKsfdLaFpZ7QidA54T",
  "key26": "Lgahuu1RVP5M81LQEtSbXrp6T54gNz6AzeWfnazHSXuFuUfVBg1d86amn5g1eLLucfta92sTD71rT1ZDq7EXt6F",
  "key27": "Jmuyf6J4T1i4PaTAVRBFxh4jGdxED4PMvUay5YdexKKwhdjuBwShGKJfYXKUYznX1N4EupjvTbTL6XCtMAgm7UK",
  "key28": "1hJsk5TeZWeXaWTJ6RJoeP77gDqq1ydjbGoUuygNskvT2RcxbsGkeogB8NCU8yW2jM24fnBkBJdVsiEk4NmPFx",
  "key29": "4xpuEqVuae3QNLy77p7kEs9xYB3NnZFABErxvh2nSagx6XYN9U4haAcDqsTNxPxhDd4KzGHBP5SiwRt1jSNuXHE1",
  "key30": "2kTUsyW9EbvjgVrVkdJg7nqNr1D8Y7EifYpntgm4WUtkMSJeRsvDXY5BtqsyiJeZD8KHQJEvNs18VVVy9e7hin8H",
  "key31": "V8m7457Hy9HQbPLAN4awqpNW65AaYDUfRpX95gzneSTnn7cTG2E8pQajBd7xK7rU7tEVbPcCmd3mgiT6nmapyz4",
  "key32": "4nU7QZkdSwYQvVhjpoAEpNWXYRfyz295eGNNuoZizfF99ad8jVoBj56jJYRb718GX4Hhetxr2aqvYjHdGZhQUQ4a",
  "key33": "61Exm1aGKDSS9coFCXBm3EFC9cZBhEMCScX51rAh69Lw3bZ13uSjKC4uiYf3tpM7tvzYX4ECKTsP9BDWNCMX8fLX",
  "key34": "36FgVisZKhgMgjeoPfDj4qe7zFq2ERVF3tfygC9vaa5hdxVjutWK2zNz7tg3ypLzQZ2nuQKrHA8DPNsNFzwNFojA",
  "key35": "5LtRE26NPiJuzqrZhYW7cLvACu5Q339aRsgJq1KzJeztdthKcZeZf93BV4DfMftHfw6h2Cr8eMDgtkS73sZM9Qpr",
  "key36": "4DVpnXvRkDRDr8vYubEpP2GQ65gHwXWpUVNr7zuApQSfgPbRaw2q11PxQwbXhASnSiY3EqjNBkaPRtnoD5uMY9Wv",
  "key37": "64mwvdhmbiSV3KfuczDT7jDVHqpgFoFENiSgg37Mj1AVGX7hz1XtRDCi1sVT9wuKmtP5jQkGTBMJjWbqYG4DdrKd",
  "key38": "2gYkcF5t4HiMbVVwpB6iXyqREBEQ8kieUcAff5Yat37WouRZW3Nrtc5nUyhStV8XcH72EwBf6hQj1RTBwWiu6CL7"
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
