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
    "5PRehYpetM8ibZxzN9W2mZgzKb2SWQGg7YyqNfTqUpGofhZ8hDu5nWinRb5hVjyuxb3Vbp1kR7LSAtuCLbLByEbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bdA3C6o7N7rvJeJ3HiG9oTmkN9turPwzLfJB15v8aVy5oabPmf4gQ4fK61RCbawwWPqLMgQ6c6tUXfwctrnCFqG",
  "key1": "XjZWgYHg1b5r8Mveh7J7EXyiiaihaN8GJQi7EgykDAHF56eRfWW5tPTQAzK15VXNeJmm6VxJ1B1aqEpYxkRCotm",
  "key2": "61EpmQwzK9RUfzRK32tThpAjvg6eNHFbpC2S2LGSDsRufTDo31vDV2YQNkVD45u6Y1zFx7T5y1W3CF1mqSChSHiL",
  "key3": "3Fko8pbSxFD7t7978JNZ7RGAAVu7VzjF9RE6CyjWoVLabGrogjP4s1dK62z3EA5fkXaPV6Ga7CDvtJcrCNv2jpje",
  "key4": "4suP8NnGcSsvmhkThgH4Er4jVHiefhBmqgidAdhDXjW7p4fjFEDSKrqWDjjR3yQG8fPqNbq2LkgG6pvY6aGzX5Sz",
  "key5": "4ZtGs4cccP1SFmwXcPScZhR6F3niVdor6fSU94gfE5WL2hVHK7dDUXF7szQbf3pe8vW6P8cwq3acSoYqRqmkz7C8",
  "key6": "42qz7XX2HcfKePfLM6FFhSwHgpCDFWKq7zka1Zg4wLgvJ58DRV25AgcCwzMZdYKzoMcomxvCtxswZnXxBJ5YUHRX",
  "key7": "3pBfFgf3SsuD9bjnycpd3jtyW8YCpfdkdZd4vbo5TWjdZeCDPxaPE81UrsJhCL2488cJtJN9cN62fzAzSPmTNKJK",
  "key8": "62aiKFcW6Tc8hKDrmRR9frrSatdSMAHYbjLSh8aDtuJz4uRngPxnAS3j22uY2PZSUTrfzi11ZXnzDWf9hShPfTFg",
  "key9": "3kLSgyebvcH8yXxPdjgyA95RGqabPCa3WhZPkU3HGJLSzu4Lc1wyRovXgv2A48cipTeeg3SBAKr82fDQ7G1DzxY2",
  "key10": "4sj9KhZRF46nToq8mmQwHh4hAjoTxjDWCFuAozJVtkhECaMYoX1xsdNPXWS4fcVv1VskbwEuSQbiGJSt5kzmZUWP",
  "key11": "3zMfKjvrBo3T9hWeSCQ2UrAZCiquYeauUoFSbzY5U1ZzwTZn9hdiestscHs4iepSjQubtqDFWuxifSGZmMZ56ekb",
  "key12": "DLMXRqDGvRU1vByzdo8CdEQUrTCo1B46bd7ARsENux7DgqKLGd7wV7AwQ1qqwJjqrU6HDTRSQj76gkGuPLgvuYn",
  "key13": "25eypLWpNxfYMPK9RQhiKf6veLtJzXv24UVNMCu8fqaQ8YnqU5kJV5b9HvyPds9EiYVijkGXTuWM6doMyhTQaT6y",
  "key14": "3bHwVwrNfF3JQxjGVvFtBJuL2PWajYLGrPLH7xzUriCLF9szZBurqw4LRcufa6sRpVryzh4Dh9DzbLvNFcqPdsvX",
  "key15": "4cozJP1FeCctb5FueVnamQaCt1hGUkJkmW7T2Nc9XPFHnmWXKHdv9ggwRh1yeVedfXb8L5EpcS3Z3nPqm8uCqpBv",
  "key16": "475YaXCBvHeLLkcJt7bhrmNp97z8KJzTVZLZ3xnKM4MPNpKZLVRq69sEf2s5shqCe5ZSNdB5hsUDzS8bY2u5nQVk",
  "key17": "51u22FBN6ba2gWpv8FHowteS9AQdYcctqSoG1tVJyU4t8tW6RWDkJ7jBZzZn9fNf4w3XunQ2RtC8FjbmS7nQs65F",
  "key18": "2iYvK2t79xaYFRJmibWqm6xBxy5YGise7kSEeVdcL8YMFi7T7NeKyHPWzzphhiLvGR6vhC5kgL9XFHB5qxmyknPR",
  "key19": "34iirJLSiszN6JHE1wASeqKtyapYyVbiHxxCZTsK5w77UoL5cjiSVgMVVXKsyCPm1NLgDaJF7uoLDKkX4gHMfFVb",
  "key20": "Pb4qxLm2EBPsTThcCJQQAr2FyVDDM95rAR3e12gs1XVS3LGmMcbKhVhH9hzF6nNxLw3XNG2uqLbpmrrsX9wFdGr",
  "key21": "5qhcWifoaoTKf3Xpehc7sjYkwYVxc2yajjXtz8bDP1d9xp7WpCQAcNjTaVezmnXegJee7e4scXQR18xZRFVnejwL",
  "key22": "Acp18AEAYzEigve7jvpKbebV7zictMkJCMxLzr6fYAsJxG6ce1Tq7s7L1bwRF96t9AbovHEjzxQCanwBuF2gZmH",
  "key23": "2j7f7a4TbAEG9udEaY4xKthvt8BCkkfnHGCtmYSkVrx26hksUqCxtsTgs1wpeazfaEJF21yFAH4JMcNgjykRfKUL",
  "key24": "2QmqrdrhyvdM7enReCMTXyvWRqiv2sj1r4Y6evsTnqepoi6jSE2Sf6xedT7mH1Ju8Er2GaqrDGzDJvDZrZaxvdSS",
  "key25": "b4nE3PxdaPYmq1JQDAfwQ9ryCBAhob6UtCciYmSxb7BkrN1M4G5hFxzLQ5HYDbgtv2TiR1U5p9MSLkEnDuS83fG",
  "key26": "45nQ7DdHvEVaUYMJqSAHeE39zaSqFsUPcvNGr4voez8RFb3q3FJbgYUvRFCBJpvbVvLHUU3bD3345fyJrZy4TmUi",
  "key27": "5PEPjxXb6CB8WQtDv4RURXvfGa2LvLwQBKcYABuw14EhsduoGPT4cpQrZyuAAYPKbkr4sqwqUyn6fLHwQSuCfD54",
  "key28": "5LfTWRX9Ee5ncpNfaR3YJurGDdubpEuAzuUvvmQVk7ySoZcgPkgpUtMaafcVjZPu66itTTWqAWb9v3ct9v3fKgyf",
  "key29": "4ZyDvZKnZWSzM8WujV88gkUCzpH4BFjRoTK8q3Fr5XvDAQvwp5F8AaTooANyTYCWjSCPKG5JsouPdH1cfoHJgjQx",
  "key30": "3yyEjazjjv4aReUdVHZH8a6c16KDwb6Tz99XyJLtyaiAT1McEVuwagr2Kjrs37i4g2bcrz1bgjSrNwhRF6BmkKfj",
  "key31": "3tac295gkeVE5KRGpFVRZvAD55sZMgoB3SEKe4ra2hnSaLaNQN9mpP4v5T5gk5mfDZni8VKRNM2KQ3TZT2JSNBtr",
  "key32": "8KzwWX3aegwrPqaDQgqPzw85ikaGWEYoBJ7cSDmi4ZsdNWRRSE2neWza9kEYDMgPvD9bHktPM11F6wMriP5N7PJ",
  "key33": "5QhQHyvg2JUnRUFDLr6W78j1rR5r5dMARAwQZMdif52BkM1jSgtoqiFPw2tE9RSJbF6Z2jzktNndgTJyANCj3pHa",
  "key34": "Dg9YtcpuzceWuHy7FreJsexNHSGMPoQWnh3G4d5zRHE3G62AR4KwctX1kesY7J6Pc6EPMj9o5SrtpBuEC4MnZPV",
  "key35": "4comkhDWUDie2Zs89NPKZRG8c6Ef5HXuLf7tVgkm76QPF8PMomVFi3gsnQXyD5LvyWYgBPmtGMdooCKNJCzfGXAq",
  "key36": "CmKQ97RNZ2S9UP5pwbjoebUgPH1Y8TveRd4Ptr8wmKjtjUu7ywgypdDhd5gYh4apHTzXRFjHLQy12YGRZUe6t2F",
  "key37": "3ucGaEJBkT7Ej2sJGnwYCKAEXbA4vGHKZcSncNtozqCk6kEDeqinbsV2yWxBWgxcSz5ZbbbmYZTFKFrAA5qHuNiT",
  "key38": "4hF3E4nGc5cPC4X5e8nAHjjjkBoaeV9dnBicCzWyp3MetKUMPDVC4dMWoZjWkteLKxyBqFTytpwH58gezH2zPYN5",
  "key39": "4Xq4EpZffmdNb4HH5ARgi8Rxg4skQ1DS4bjn2r2uSZ5vr1KAEJB4rpyZ4gQXNYPuXrXtzycxsP5xMkJ2R885rtwE",
  "key40": "gR1nEksyA8uxC9aextVYZYsY3VT2aL2kb5VemUDoKezpbwgXpnanuq3pFA5yPDCm3FCCEonFppHrpXsTM72hyGg",
  "key41": "SshwtzDP8V1CVQJyUPFntj77P46Y4RAv4ybnDw4aDvqio99xtkVDJDU15KHunuByzkXwTPfELwUWREXSqdcrfjN",
  "key42": "cYZvJ4viX87KoEW5vUD8eWXrYdick7kW1smX8eaXkvy6yej7WU38MBANACB261aesDVgedM14uo2cN4dTbmsgcY",
  "key43": "5FZH8GmhCLLstgLVjRmzhSikhXcyEPJvcS7DDK6WQZ9fF9vB32k2TbmzQRtUPFY5haXPaJqVmxmF1uBRNmPgknm2",
  "key44": "25c84LBenFXgQaZRrdfy4RxEgojVq7VwPXSCLnPBQpQLuDNNUDcYGFrRmgEXoSFPiyKTEzb9guMaHcu2APMpd5mA"
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
