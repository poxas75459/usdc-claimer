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
    "39CPtjwGhdYGYwDGq1pmfHnUvmSdjxTrq95apV3j3UauFiAzZwXUoB8bY4yatTSwNVEQ5DoSde5BCAJYXiCtEV81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27JZKBywafEeJGB9pGMBdywF3VT8oxdzExLjsSs7hLKmyGgtwRwWmEePiksmmVZKf9KoHaxDLeBBCdEHwCV3AG3H",
  "key1": "dYkFvwPutiShvYJQX6zoPmUX9gPUvVFBidjY68hAC5xFdtYQMVaViUoJ8D4sabDawuedBLsMMtsRn6UL3sYY8KF",
  "key2": "hBkc4j4p6q6eT54FPZtPuS188f5Ycg8RdSkQUkyTUEJoEmTLE8MjmsherLFSkN2fHEz1nmPzyYijepXnGV5ecu2",
  "key3": "3VvF8N1T7DNZ8PFeDErsuuZygDu3RVtBj1Hj7jw8wih75zyYAqMzkcHCagMt3zTPRVuEnjHAQpHkw2mHnHizhcYK",
  "key4": "5ydrQaYtoAJnfVxMQno865L1mXfJgHGktxxYbHDAc2GVBAC359ysUF9oj88bJFFygeVzNdjMeTAACZgDf22Xoors",
  "key5": "5udV4BqitJ3okkhCXuBYGSbQkaTJMZo3KRH9TzF6cBu3uMC95GaGM9zNnaZw66ebXNpqLpnH3FFWcNym6gafBGxg",
  "key6": "3F6fACw4Vfg8osWv3V1C3KULkoHAcKH6xartcu7gJqe31PN5Tinw7f91FYnjYvDXrhnPyGsLmUsxsuEEQjAUGJY5",
  "key7": "2jhbbiHvveZjdoRgEzyHPWTka27SAJbUEs7Pg5XiN1SkVHqqr7k8aNm4XrKDYb2Tu55mwCCUPFu5NGSiaKV6vGtR",
  "key8": "6iQUNmKMC9jyEp3qPnnrQnmVGfNT6gaDehAs4jA5dMVEhriuxoTWssJhJE4iDvYELRmQTaP81HMRryiFSXbEdhC",
  "key9": "5AuaP8JTTpCkdDRaB7ejMQwaX9Hi81sjT54cQ153rMNm2MfHN3qj5HZebAoozPCCusoKsQNrt2nrPpszwVzExh7o",
  "key10": "3uK2vfjZnkfSQ7cfmpu6igpRJA7F8xEJ9HiRMVHVoPusiVBwXEcUmi9MzzwDUWTJNAyn31rAqpBgdairz7CU7tRE",
  "key11": "FWibVRsPpoyuXpYeekiHjGRXXPJhjZ4at7FJjxhEtViY5EGp292VwW7igm74f37ta2XyFeJy4iWh8qnCjds5TGD",
  "key12": "43njvFofVJMzqoPaUyTEJ9NtXwgQbQKYCWhm7SuBoUhrMgQtNQyWAzHC2xsxryCamgFi6na6jQAjG5vMr9mDAN8G",
  "key13": "LJmdkdnxGcUsbjSqLDZz3tyjNjcrZJ2dMqsevm9qQ5zqjQWUoQZkzwX1aJdnPz5o71dWg1UhbLCRmHaycPvJQkV",
  "key14": "3qJWzy5DnpUQVJR4G18BG9b5yGNERWcYnwqkzj8AUAWZ48Nb5UwjdZRecVPA6QQRZ8Q8L1EN7TvuGiwfD6Uy4SHN",
  "key15": "5ocWw7hCh859c6ABQNbNhe3ugu2Zh9DsDkzz6knXqXEDdQ3Q3xwezkPU85i5QUZjmnsa28tkzW3cuiQ2pJFLsEzU",
  "key16": "23Je6wosobH1xLL3HAmABy1FBDdMKxpUFgHcKcP3vdPmwVEt6mhnfSbnEDNfjp4wQ3vM2ctrPMNuBykRCrE24gNX",
  "key17": "38pUjjrEkGBxyyHLsxyXgTfxnnfECd1wSW7wAzGLrxTjRwJvM1RRPNuqcquFLxrVY35Ub6rFTkmGoRrbg9tbu6YP",
  "key18": "2hMXtutZP9F2DFLSfVcCY6ysKeAAaBZVqnLbXoArWWni7His9E1fzWng7ahcrXRGfpiq2GLgKmB4B2qgNjifH6N",
  "key19": "26GQeu1XJmvWvJkZ9EQAEQpQiMMJLK3v72dKcWqPcnWKAGMBhVE8AmVsnJpvJYvVBTfzyaLBQizUeGfZLZ6NXzFC",
  "key20": "4VwiSWbwVP3HGF3e728xnVH3JRQd9pDG4LoqTowzBAYJjTuUmMX7ZxpFhMH5Vo9bXT7SQ9EVm7aYAEGmv5TdqSzJ",
  "key21": "4vUqTQphxUccq5KBauiQf6vmdwUouppMtDxsN8dS1R3c5gSogWrJvHvYGzeqFTsTuGU8M4juivEPa55EqLGKH19o",
  "key22": "3Ja7bZFrr7RmnT8vTVA1KXKWNJLu3yTGgh8oYTrK88s7GZZLPwQJPEYcyKTRrTK8KvBGKE5pQAfhFwko5NUbkjtt",
  "key23": "4uTt5jtgbbtYnM1aTGASBq1uwr6BjXPmtNVhGF3jKsxFWmb8JvjnrGjAk1r1YKFXnrtfDm5siT9jkecRcvRJf3tb",
  "key24": "3jV5cJQuh2bb4xSpEzNkggn2WT5EjxHaf3y8y9Mt3b4XzksPjtV4aM8odSk8QTGUaUEaUtTzCXHVLCBXsGMXmyEd",
  "key25": "5kGn34Zj8KHHqtAknVxauz3RXCDYYy5DJeqxvKYmmvX7qvkwncXLSzCVa2KDXKSdF6WXzZa6Ubu96jJAnxdhWNHJ",
  "key26": "5aB9APRekwWC6UnBbXWiFb9TuSnGrGLMmuw7ganVtdZUhdhAxnD4F6QjfHjs7ajC9dXrrmfmDqgVXPJU7dhZ6YTo",
  "key27": "5pBLLJhd8hWQdEnUNwhoeGd1W3nEFU6nu4GTkW3d64UXKX7fTzty5X5R6xwGGPgamyVohpfvg9v4qn1qG2kvkAEo",
  "key28": "4aN99AuwgChV7QqvU9YoBtNiVpH66GhKfwHcp6arrUjN7XQ3umSetJfq2Lyb2ZnLZr7jCgkF52n6j8JGGJcKg8V6",
  "key29": "thwXhgj8zSgUjuVTVSpNHLWyw7SYRTVe2qFGFyHHgFTwLaTpm2FxDCbKd3pDMx53o5zWEM6q9FJPvCyssrhsLvT",
  "key30": "4QbsaPMFpCKbCE29Y5Mp7yeKVtJPeXWHXdmuj4GitWCXof2DVj9YBM8Pg9gr5p18KmR6VBJLoyKyivc1oJBxKDVv",
  "key31": "2Qb1xUC5pZgPgNwAJFaUoHF2GSnqgFJ9i2gGhPA9QkJzzb9dMREK3zQDCSEKBXutsjbCmXezWbAJHnRQv2MMUpb4",
  "key32": "24iWQU52irmtJmkj9x3jPAEWuWV5rhNUk3qvJe94UhiQkhnGgUgtDfkJPECLNZWsWGpMK5rrDV2Uhtuv3ruzf3Eq",
  "key33": "4FYUg3stzhRyNzvkDRKUkERcNjE1nKd9TZpz1pFhRGbpUnKB8pQ6gUbWLrBPP6CRJRbhmLfPxq2mV1jnBTVpTNj6",
  "key34": "4CV7joGRGRESrKpGbNTN4UMrkWHBEySav7yMevZghBT1PGxti1Ejcpq1oUfD1w7H6ewam8PG8VgPisSaQk8iKFnJ",
  "key35": "3w4Uo2EYpafUfQzfbfurxfSjitkvD8ETzCauqKfSjZahDuv5DEc9uK8t2ewGVbYNV3d2k5Ct9UF6eeNPothzraHY",
  "key36": "2vEjba3KH7qTfNz4jg8sNVTKwi4cv2J85JVqP1WFtg34BP1atDW1Up8JCtBrmCzraZKTCVcneLB1YiLqutry8bNm",
  "key37": "5miMRW3CboigRqqQ97iJbKkPv5j2jdJdaXP4myUwpzePDZ8b8826aJYixHewau2cm5UYCj81inukVRrC4Q18WgMz",
  "key38": "5AFK6pWdLYvRxjuxuo5JA7t3BJvG849QrSEJfKCmmPeBPiibAnqWfefQhQdcVLqq7vQfoWbufJmGoAfSWHZH8t1E",
  "key39": "mSB9hPhJujygCEEcwzEv5HBLvMM9rk8g5YbjH4ewEJJ69jmZqZ3vUn2aq73SqMfYnCay6tfWKRKq15bxrUY5NAG",
  "key40": "t13s8irbCw6XidLnKw6ywEsgjXcYi1Ty8LESUdphQwsyJBHdmfX9hBnxTjDKt7pHnwDvRWAvDX6m9LCUiiS37CV",
  "key41": "5jCfnZtfNJQ8Kd1dMxWdtUYsWrmryYWnRqM2sBoWta8rRZQqMLQb9uBZXWkt6Hh3EMWWRBENGAuEiq7jvK6uf1s9",
  "key42": "4neC8v5wzzwBUKxfbsSD1QUk8ZgmpJZ9fM4sFzLBSPuDwJDB9bA6P2jFXigi67yDZAuUz5kPrrP23p9LSAg92oNZ"
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
