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
    "5dnxg6FkaovmYNUkiHYbUqSY62xmSABSz2riZujN4BkyZbMpFRbw8rp44cRKaFV3681k2ZRWUSckcWLE6J9p7Cbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ZQeq7gHnQrintiy5TjskcCrveaxs3r63jKXqgfEW3ERL89KYLN1P4Zx2CdPY4CZGY8RxpZF6djJwSVftF187ND",
  "key1": "3EDh76aMLoLKdJuRb6wK6oqDvyRuqBiCepTJP599h9njGSdmC4Jb2tiht5xgXuADujU4e5YjZB3aZgmKe6vh4S1q",
  "key2": "3TapkyeViMTboJXZvpDWcRVinpoXDiFTSCLzwomPwDtdYh3osbJx5smFX6wCn5xr3jwiZcZbBkCq8QTWuVXiNum8",
  "key3": "3n44EuJA9dfS9qiGoH6j6RtZ2eYc6ExixCSUQZbmgFmzyr5n3f8MoeuHhS6aU19tnp2QG5zyCLUrJmoPfe52ArEv",
  "key4": "2sSmD4Q9hKktePuHexXRK33BoVjFTpqqMtiQauxx3MEmaqHT8d2vAG3hH9ZN1WhqNB28E6JeWZPbdqAevTMkpywG",
  "key5": "3aSsWXMFp5Tn1Z6EJfR6bKUnMpeWc6fSvqWPwXzVGJNdXau44BQ63EE5ywiApppHm1vYLB3fKt5T2e3FVA7sMu1G",
  "key6": "3K7ddjvC84qE6dHgGmpB2n5ANKkngMsjNACPbv4VqSArSHi35pqKcD49HkAPtdfWH6sAHMsjVUBdiqAEHNXax2k1",
  "key7": "3QQtWmcRvMiRRupGkfgiD8ycCqQZZyxoNz3Yj4anFqjYdtcFeb7fsZPz5YGS6QfBDey7kZ1XdBdQBkLL5Etw5DX3",
  "key8": "4CYwXvKQHKKLN1KWp84gv2wgfXcP65AMZ48Nk9YeiBbervdZoYze87Wsv9hojvge8G6YeX8jEbXC9RNAhvd8vMvi",
  "key9": "3tSdD3cA722Y1n4qeRyWCHfKnBY6qsvaPNt1TnPTRKoo3bVQXXrBcNwBE6p92G7Rs7oKAur9TRwUMLA9sVHfz4ZP",
  "key10": "3vhMCT2LeLUKvjzREThUPe8dTkWDkKVQ62yz3gnXFZWyC4p7aetDGZJTMY7qBRiR6XTmCCtAPuTUVw72HMhudJET",
  "key11": "dEVXZtsm8SAxy41p2iAqm7GLfMDFEUTAwEHqVQ2XzQ2stLYpPQuni5devCn6etPSQfvBoBdFCkXjWpPWptzhxpY",
  "key12": "vUXuRPyF7h1qmpEfhhTX9yzxeR9HJcGC3QJ6YHPXqJXAZ5G9XtffEiQgi5TPhXRa2e6mtvCpmLymCSrVqchFnA5",
  "key13": "2rjdrJWJ1V3Y8QrCJqtT2k5XqMo43wXgGkBbVdnsg1NtYemehqqgw1EwUQn4R78QZ6NFuBV1pq7NoCQTCdXB6gdF",
  "key14": "5oRkWRcmWtheSr4Sdj7S6dmX7Tt4LwMMHsi5D8r7LJ7LGYnJ3k1xrqL8VTGy5op1UKg9272S14qBE71AFNtpoBna",
  "key15": "67axasnoFSg8Guhg7Y4eXLSv5UT1KUjhHeKY7bTWExQuA1HLDYBXZtzNUGipDFkMV4SUeBncENouYMFjy4qy95L1",
  "key16": "4gnkQctrjVefdYHGUATnr8CQfrS3CXdwFgmdLbvp1LntSV7A5zMaQ91Pj8zS2UV4Q8fk3eoX8ozooTyYBb5FTMci",
  "key17": "YrmvVBiBsDP1GZTfjbU5PouBWsZ81FkobBB4GnttYRvn2wEYoLzXjgF4G1pxx4EGjkFnKz9DLai5yoYFRGeMWDF",
  "key18": "2Db6iU7A5Vw9awd3Y2uKw7m6S27rnqfiUvb36YFDwDX5Rpx64cx3aGzBxKXiShHA5eQPSRqZGvQ1boCkbZvUz3RG",
  "key19": "5fYszqqimKv8Z7XrYHiwcy3gqGTuqyieeYaz1uBi8wFy47ZUK59WgPq1cgCo4Qa5tNqmSijXcbnnn1MWFiJcKDH5",
  "key20": "33eN3JvpqAkvqboS5XARYgDoHHLvmJj8rqjH1GStcMeUKjkGNKKCYfYoc41cSpsySA2pBiAHXMfGSWCeBW5CuzNY",
  "key21": "UUH9Z1u8zymiVCjjnXv1otWErm2QRdimksKvyfiKL1vJZALbRewZHPfK3PbTXcdgcB5HrLrqj4WzPyeArB3ZUiT",
  "key22": "azRZuzjjtNDZEea4T3TxpH9yFfawjpGyaePn1qyHVjGiWRuPsvWArQM7dPYZUVTsVdZDer6bhFY3WyFPF28gvEn",
  "key23": "2gtdvEsYBPFuX2NpZLZVKUNB8kBgHWhyrvTk42XFctsQCSnpeEmE5mLVip4YGC4i8tUW4ZAZm47NqFsgwz7kkUD5",
  "key24": "3Po6ksCUNjT8DCtFdBTZVZjogG8ZESwH4WCeny6SRrwR4dbWZccVaZBzLAwxqNbfa81M4CNay8eQkGu4YB3VXazr",
  "key25": "2cbxRgNKG6nQbNkRWQ7LgDMoTajFS2PXWfcbmGFLHDhbYPmwDDf1JDDV1xqgokvvssnaoDty41kCsqoTrjCXkAa2",
  "key26": "4cgB3tPgVfeGjBFot2Ki6N5P1aGW1YVnuzVMjVduKwiBD3nxqd6QCkgzyCVSKrLVnGZk3Ldq48Uu5y3j4XUKai6d",
  "key27": "9A6PdrarNhMECiaEUeck7ZNmKBJ665uY1waCStqxZR2vmRz7sYBzL4xrk5vS9bqkmFRsd4gPTA8fbSsCf3S7uHe",
  "key28": "2M972cnJ52X46hYDDEjTaKxr68dZcvLWwJ9RQFpdiTsQ4zQKw8BWc2n3t3kh8zV9NegFiidAuNEH54NCgnGbWAHy",
  "key29": "5zXKH91sWkf3MiY7jGpkyph2DSqybsQLhtxjub4iDm4yEsS4APqe3VTmWZUCosWG5YmvradEzNZabCR7gjVYZBx8",
  "key30": "4SHuUicXNTio2cKH3ckWigbByFEMiiSDod76f839VY84nSZnmUrEFwDrhd6bCo2mnmMv6iMWt9PbEWkUM7cR4cvX",
  "key31": "4B3o2rdnw9me8a2cQ2mbSZp9VrBSuHps9mGykwn3PPzVAGGyfHcV9hj4BjKBZPLVW5CVA3UszniXb68vw3FUPdbN",
  "key32": "123adC4Cxb6YgNMT5bmMaeAf345D1KW7jGzsLeeym57Frch67QHwJ2Vh4S1hA1R9rxjuPguuNY9oGiUYEhwtc9B6",
  "key33": "2YxkzCFZR9pAJNVkZm3We1Mp5Bm8uWzqZrf6WMryTC9uhorsWhVDdegrQqyWKnq5DbKyoZYXJY1fxQxtuC3UaWk",
  "key34": "2jY65rcF4jtAPgrr3pBNZ4x6dQqjFfugyvvQwP1jkr5d1zrwdEuMYvhWXnJ81ihBJ587e46xdgGD38AJAzicrbw9"
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
