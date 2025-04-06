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
    "3oQ3Kc16T8LLfNqD6yLECPY1AXcQresPByQRsJ49JYvzNNBGK8PZZguND7wPwWLJWytmJXL1e2W4M12zLapmrBkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "347MetNZ3LNub6fZZ3FWi9qP4Q8xRXVbLH127RfmRdQd28G9Wv5MT5HrDVy1Y5qoat2fSYW535RTVdymRtgGxumF",
  "key1": "3JH4LkNKHnLWRFMxrdMEjxkQZRo81BuMBkL8roQkAWS5eDexWVo52iBJJNebJ8D2gyiXyAz9mM8nFeMfaR55dG8i",
  "key2": "5DH4H4nCJYKkiSR1XPtWDfNMUqLwMaBHbYzAnsTTUnJUz1xjHPzff1CcoUk4f1B9uvt9ZhoVQg99JN8ACBvKzW8T",
  "key3": "3MgFsc4GxM14tRRFcEqPanX3MLf6LJ47YNLJwGD6A91qwBmqHw7pRDPyGpea16BSZayr4RwwXXYMgwrYFmE333WS",
  "key4": "2GAQHwshPoFhmspBDFgGhVVTc1uTZQdLTDQXnb5FDo4pBvo3atGkVj6SLho4gJ9X6GV3xNbz1Yjdbak21JKs8hyT",
  "key5": "2emnxmkDMDnAHrBv9kjU9uNovPmHxteTspdWvvE3SS3b9kdftbjPCxoQYrPBEjiZAhZ1hJMs339HY89w7BfabaHX",
  "key6": "4a5bnp3ESx1aqh7N633jNdKRuJv4ieypPminxdaDFZEkTZwTHYfnHWEAV3ZBweusk84CY9AAPzQAVndUbNW3QvNY",
  "key7": "4x6WwQ9g2w3G8mSfE2am3NjCx2LEpVBT1Gnyk7QW28GdhCaQML5rG2qghWvwYByXmAU33xd1f55oXzwq962KTCU5",
  "key8": "34UKjLaq1RednuN66SSe12iAWnECw2ZZ3UUZCXRasqNtztnw2G7Rze9kqYkFu7gqGMb4gyzDdy9xE4fujDg8Udy6",
  "key9": "5tGQeEbSCB5KBqMxwtvbkQ7wK1gbDw1XwvMwCwUGbLMzMGH7J2tAfZqQW7eEjQE8sZCo32eUCu4JHoyUCE6u8dMH",
  "key10": "5ydE9q4WoXecPfCXUzNdF92s5KhUJXcShmXcqkaAeDk4RgsuaSnzCS2wRppJgQe9Hzui7Xb8taJa35WzZw2iKdQW",
  "key11": "4422SGfM3gopTfUm9z1mSDLVNuC8vv4Z7iAAedAhmUVhVW9eVmC8YcLFaSdz7qgbYT8EU25bh7oYJwZNVgTF69aM",
  "key12": "59L7m4KZyncbSUJ5ztGtwAnrtgketkaA2B69aCaLwGv39vUt966JzapGXamS8noRTYchwJkUmpAm2yukCzyhBomW",
  "key13": "4L3vTJABjZVQyQnPS7Fd4aYxdhytfp8uFaNZWbHFvWxBzvgmRmf2iTz7ugaL2AAHvmuPbvunLvnfngGtXy6Wchxf",
  "key14": "5BiWtLhNQEk6KzohWzMWhVVKGk6kjazLAM1f8uKLUqeoS1bajP2NoBsUtsgwBae7gwHbQ6e7ZVW9LhayEY6zSNVP",
  "key15": "5ZvcGCSYUzRqU2vDuyYj31ZSN1d7ekaY45bvC2JyeznDrDejqmJbe8v7CeLWTaVndCCSvt83ZsAEt5CrqXSar5nW",
  "key16": "26vissjCFcMbi7ct5zjscPFJMkXJx4FWrfq8i571ix8pYTZoaWoyqnj5u7vaZc4Xr2pEsT8JowqvEkg4sHMY4iWu",
  "key17": "3L1M6LNoA5sxDxLQUsaJnr6mvaTpZWbELKQSGkjRSgCsndbAeeuD3nuuLrB8kgdXQwStzJiuFZvyemvV6JL7eTg2",
  "key18": "4uT7cv8YCapDgg9SWGJbybpBifeg39dTUKsaJpEEi7neEkbMretVHUKgRYwZu2K8RTNyjbUuqnHw5oPPBqrfu3CX",
  "key19": "4vCsx9wmbDq2scF8qfs3jQ8bW4kWVnk41nPqHRL8f6RxorySGR2q58s9GuopwwcK2ULaMUQLAmDUTSNnU9242w3e",
  "key20": "4pnJKF7U26qM6oW6ZZiUTz3gDKseS5DJySECjrPHpEhsZWE3kX4kii68ZNydU3sut8tRCna5ExvTg48La7qhPD9x",
  "key21": "2YwT4JkZpzkBFUdMK6T4tnS1RUHNMopFGN71JrZZYxUmS9HmizuqAZS1M91fJedfx6NZ7Srs4T7AV62bKn7bp8Gq",
  "key22": "5pd4WeJgXQjGQPexMT56K9SrP1cQR5kAwhdciT9Jvx7rE6kQcFpB9xuXKk8ieYKNfxm5YxdGouXwK8zZqnjBKSVX",
  "key23": "48U1bqGsVSbdewwR3RtGZhZBEpnchfyei3AaJMucBQUcS9dbh1hDSc1B7CCH9tK5BxPaEKaxxBDYjiqaEHhJJVnP",
  "key24": "jA26cisGrMehMxgfLGGdkuwxvTvUqfHivA7D8NveqjF1AVi6kwesW71m1JaBmcR2E5hhWGnyt2C8tSXdjcYPGRt",
  "key25": "63sRP1N7pf6VfRhxi7QUJWHzwaVz1peHV5YY4EDUJ7Vrej9uiXCUHhGgAu8AZi8nNkHbW1cZsDo2PiChZCW9jJrE",
  "key26": "3wP6mHxRnRBD5nGRNhWDCU5m5YtusJqi2AbNrtjZzyRdTTrgzQQSp5VXo8SizzqWhRtbmswq2yQqyCbDywrNinyc",
  "key27": "nus8na7wDfFCqKTJfuJTquEnuDD9NBkM9TyGZZG3YyJ15wtL2cu3o6sfZeHb6QAShi8865JfZZ14jiE61nw1XsC",
  "key28": "2b6RrV6591eLsEkQpcmrAg5mQE336p8vWz3Lnmp1K9h9oGzLfk8RQDQCoajaqCjGaRC72M3TtoTK5iXaGDeHewnK",
  "key29": "Antorhbp6R2bE5R4FZ4MvDimagvbRofr8sxWDLW1S1TB1wWmAhBWsf2xfaRrAFvsj1PgUy4n4p3c8fWaeRewxpR",
  "key30": "5kh9ZJnXWj8roxybbdk2pyt1ciNuyE7bmyhbHDDDznA3yZzgCMMdg5LjRndKDmcsRRmffwRvij82weZBF3aVw2NV",
  "key31": "3tnFfx2isPkVdh1SrhtRAhyahrXmT9Z4Ktu8fXLp61BZqVhpvSUL6f6WxreXpm9P38ZVos3us9fJZqJBAprdf7E1",
  "key32": "2UWNRppWRRSkJFdkjZhw49cgL22jgMiuFCgid5FtcWLKXQn3vWB6T1k72E9xr5ATNX4hsf8nYD6x7AZxdsFDgbrx",
  "key33": "2jQk5opEznEWgPSCCqxnwLAxuLwmav3r7Be8vgrpW5kfENV52myF5ooLrDuW1sF3UmMmMtDGprWz6omJtYjRomQ2",
  "key34": "4SSu4JXiW9SacikAEsWzyhzJKECFZh1yyFbYh4xcwhbiwfXfdyZRvT7nHTm7j8bKou3vLZazyX8tyXy3tvGMRcLc",
  "key35": "2hy2x52RCTYrfyEDx3tAeyKFa4qv3jyF9AKjNiz6iktWjmAEEGxBLML5CumEmDmPou6kWxdGMVyCUEgBR4Uj4i7q",
  "key36": "66tMzSXgSi6QV8eQFb34B4eVpepW9jYYPFioZniBKcD6MbuNYCEDtL1fNDnqXpivaR79MZWH9CG79cM1HTz7ecWt",
  "key37": "2YWhUbw4xgyL9a9MLW3PcYKm3gUbNqUqVhxaoUEJKmQMef7DrcRhXFtrcsYCeGxifrzBWyTkjxUv3XPF13B7HW4T",
  "key38": "2roM5xEo22wLgBVdCBNej6aML5hYtGM92CZNbbvzoAEGCjcKBFojaPPDYiB5TwrJhyZJtpu7yXJbBQLwJXdueTd3",
  "key39": "5QnRtPpge2peouk6EAvSWXXXA9C3fTF4Y9X7vecyg2Bmyib3SPGR9pJFWbF8xotP6Hnvo5xFy29dUru3xKDr1XTF",
  "key40": "svzqnhR3g5sNGXiJKFGuJwkkzv1zpu7sYjvap9A79gg55RgwoqEe4pTaoWh1ZqNcC5Zyfd6Uy5rEj53QUAKo1JY",
  "key41": "4p381KTuAJtBouaGeYN5mNkopzMCVqg4F6Xha7vY1A1ovaTyc2RZy3JZz7aDr8tw5o5pi3ParzJrCZ8nvgrHutnC"
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
