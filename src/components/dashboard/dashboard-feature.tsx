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
    "ZtxeavEHJDSbo6cuM8i3RhHbS4GqRADjBpE1j1iKQNmLHqGeFVEAks1kubKfQgaHVtwwJDsKGPZqkSnbvFj5nny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ck4Sr3FSvsX6xNYxUjb5un9kwpicKE5RiaBKWewV9Nvg4zJbnbb2BcfR1XtXLGYUjbG6cjrebKy9ueff3Ch7TPR",
  "key1": "HzkDitsiQhJPKWHvWfRQpwh2RX6x4SD9HDfUu6JCVJLDP6KS4chKKjGk4wDTvZG2U2XEt2RaqaQfx872ChVksqs",
  "key2": "WBaWAx75p3RHCvwvha1jwnBG7MN24hCboM3tkgsKwtFqoijhghaRhSy3uDUcn8R7DMM7soj4QPxGrLTjiN6PzHE",
  "key3": "4TKQL4GrEdiatQN9UrHVDLooMKPqRGCmVcBPDR8aRYgzBF3LRFF5CtXyJHuef9eLF8Su8PauuX8YZKyynyaqu2jf",
  "key4": "4uuHcw9Ufx2D73A1WntS7t9MLR74gA3dngUJdxT8Sh8aoo3UFD85gW7U4k2qbfnNqpDihuJSzBf4ECzqjAzuP8hW",
  "key5": "3BVEEnspZH9nqeodBetUzqbFsRe7a3k4o3aUXz6CeJuNigoiBEUcRWdBi9sbow3oVHYS1RaXPVCU71F3na4UoXct",
  "key6": "4gtABFsnLaMXgKG6oDeehC8NfVrnLdfJ9dDA5cHbCaYciq5YPohnfhshJVDC68Vhh6iUUtAdedvhXAdnMUkTKmR8",
  "key7": "pijK19SF2zHV6xnswdvnUieJCntHr2QPrF6RTpb2nSN5mf2KmCWeaf6knEfdJyJ7MZNbpYg3Lb2RdoXMs3RP1AM",
  "key8": "44AFfbJxX5YBqECKzVKyMEVQMnDhi8q9nhYeQQpbn2JLHUhK39bpF5B18UWjJnTM2uYdKhhKB5Qgo1FvXx53VWCd",
  "key9": "3HEqCge6GsEr9RTXkgWKdvESY5S3Mnm7qVoFypUBdCBcenVLYL5XPu4MJfXFRCBjWvENnM8kua22xbF8xwRHs4dA",
  "key10": "419fsN3nmsEQZgSGZXbjZWrekLYE5nQv4PzbeJjUcoReCRpnPghohqLSEHBkiH9EgS34HA1tf9jsu18RdHKo3e8H",
  "key11": "3JYxj1TqXtbvbb6AuzfSStu1mkG7e78s1VYj9XADF9B3jZfxb47PJYhGL4Amv1MssJpwpdi3A6qy4TXtqVZY41Nv",
  "key12": "3YkCg2gWTkVyGGDYPNCq5Cm4ZEEyUGc99yxX8gjQQzYu8TG5nip9at8STdDskw5q9Uy2Z4KrfBYpTZNMiNDmHrYM",
  "key13": "h6fBGBDdimZiHxM718N6jfGZF5YkbZq1sxW9cMd2X7zJhXsEUfpV1jHuN4ss5FpmVMdNVKCFq8aYVuEZG9ejXQf",
  "key14": "wdqsuUhzAKWA7yywqkUQDVjVGDULDauHVn8sDYzZpgg5NmZ89CK3ovUx5soyNZZueokecwZHfVt7JtCNq5Pm2CQ",
  "key15": "2SCHfYCmogUTR2Eavv7nR4Xs6XuUf1rnyar2VkPSRkT6GjTyxTi8yUeWcDtg5ughWABcHFc6JmAgiB83eShB7kCC",
  "key16": "2XQM47hXaEzS3kRAiW3q5mw9ZMyohJJ9T2X6XuRxY6PaFWtrsJoQDkcKHEqGirpz6A6NtWSSy21XN2zpWdc5P5K3",
  "key17": "392CMT6sfAse7RaGktBHRBuiWPVnaGE3wpP4RZBE8HShdLm24JgEmRdPZgFELHZkWLVbztHZPiG33dtgr4Jrn4Dc",
  "key18": "2XvehK2gKs7mXJrWRaZEZrLi5b7k6ceLLQoT4qMwNvb9p2mYMs5kJAijkAeVEewgBGedYKZUCJSszWxLkBRMbnAi",
  "key19": "4sJnpe8xwxj4LPbZ75w8VFtm32P7GwacLnKkjGxND3zdFJVBgLTwfmoRzmyZBatPdGKdL14FWJEZhY7L6w8XW6xw",
  "key20": "3WtXAwunZ2JjNf4xVowhr2tffKXqjDS3KEHqjGZ4rzz4rdAgQTcaodZHqHpZyJBCk1HwbF1ZJEh6RXFfnVEpQyvC",
  "key21": "4uikw9Sk47MofxX1Jaad7ZKvyBTUuCvSA6o6psyXEBszRiV39k4erTm1tX6XDj8ca3TsNSDCp4eXTNzqnAV6kpoe",
  "key22": "5SUJBgEYhBM49Wa3h9nemcNpyX4gkTJ7CaxRXAxAXW71KtAQFZBrzke8ggf4nBkvQ4MwHAXsSgBcSnXR2BKm2Esb",
  "key23": "4Z3aLcUt3amhhwsBHVdmvKY85zrWfxYBknTi86npGUkfGzfh5PPsLNBtPoVCBA26qvy2R1FYpfqpctmXo3VDMncg",
  "key24": "3EeAMLQ1e7Myt5a6hBw4g4avKd7WZysDPcKfjK5gJ6ubasnqbpwXoam6DrgRFiuzaxW7pHuW6nFQAXxpZEuyxGUM",
  "key25": "67NBxEyiYFjToU9C2Ukf7zYhjjUz2LQyj4hBUgDsaVR37p9amSCA1yAJirxMPZxTZzv8qCvwTPn1cbxF5N4oPCD7",
  "key26": "35WmC2zNVWzP9VHSBHhdnwhuJrtNGkP2KDdwnQFmdwcD31ZbfXrRmqSLTs93GnLBTPnhDtEKDzNBA6BAzAYSHKYq",
  "key27": "2ZBkoAEnbN9c2qzNnJzKxvNYWQdRDQ1payE6oQsWH3LwLqHgN8QdWuXVCBAXEB4yfKRRSQ7tifCZ47gqE9HK36fQ",
  "key28": "3wyPebY9Mi4afWvQ9c7cR7iKcg82U6Dk6sS8Y9chwMUxXv5ga9vfCjm71Lpvk2HZHWPt95W5EcQy5d4BdKNGWjJJ",
  "key29": "566G9dKBDBZBNgZqofGVAypestnSSBRgueFnVYsxEqGpRFKR1e72xVYnsNfxadMXek1JLPG72WjDccgx6UXrD1Uk",
  "key30": "4fF9rA8ZReajntr258Mm1ar5Uf8wDYA6EpTruVgxp7GjYoxur91GSBWFW7gxqKnynCUcio59cxtSdR2iyfYDY9bb",
  "key31": "58vA2FNjopaJvvaKpPeLaj9mSYYToAtXQj1WGTLZwaDcvD8XChmZvK21peSFtxPYEszFxux6R6Ej8mrS2BjkTnSE",
  "key32": "ez8HvVbZN3Q4Vw9esZ1vuifQSX1AavHs3tttLSZEZQKnKCxj2xVFaJXc4qLumPfzj24DV6hFstbH9qdZY5wMFRz",
  "key33": "4f1EDio13GXGYYsfdwZfSCWTV7pMjq121ncGKUCh8KZ36Xz1uUXr4UzbwytgVvQXqk7JFjAv25yJgnvnpyZJCJTd",
  "key34": "5UdvPrU7RHj5EHxNNzjiFJxxXXLX7wDmhVnLr8NKLL7tYxjHecP2wUZHV7x5utGDp7Lzu9Zt6iGy7TMhJm33MFuW",
  "key35": "4mmEuqTfSfBBzVxdDCr1E4FuQsrWhsxpKBezpEzQWywnLbQsGAZAhr4BJd2fi6vWNX8C2GtuxEJ2TunEQ1Z797aJ",
  "key36": "2wSGKcDrQrHXPDsVvu2aY2BZmd632cyRGHSTFD1FcSWp5N8hYvwL1T86rUPS4pUzzKNnTzCqqqQyGj65sFcV2t9i",
  "key37": "3AFuKWeZozew8jiaDbMLB5w72tK7pHNijX3BwbyfXShVXpDygCXHe1VavYB84NqfVZNyu6x1RDnQkhTXWEuZkRmh",
  "key38": "2Z3o89cWZ68W3r8YmaUbWYcMZHnQKDucRsD8QThR1s35r9G6WzY61eT6MnSopYJZQzwz3AEakqRA9fSKM7pEbCAP",
  "key39": "65AQ6NAJGeBebNxBmb8kK3oUXv5jDd9TtbMkXTV8cbfQ4r2guW9EzYiuCWB3Kyb7q5UW36g8pvqx2sByZnoteaPY",
  "key40": "4eGXZh2Xm6mT6QxKu33TJuBnP6FYNPKtewBD5nWfcrKVfAmj8Wd88L6dHvWuBoy32HJ1yyiE2y429jXffkjZf47c",
  "key41": "2mhno9M3tXGtbM7Ccz6J7RxVx5tcRsgToPkvoKA89TDNTKMmmNf6u6vYfZeQbQA1FtXyz72ieKtLw2rfp7n8jcDv",
  "key42": "44nxciJiozk4QxJvmwCc7Mp4YXqxSGHuC3jtQQ1nVaXBoWNTcXgyiQVrKxf6HvBertHE4AXPGkjYFND8scTNivfU",
  "key43": "4VJ9izTHjSw3i26ZAzPkbPAUBp3Vwv4V7YN2a5SeqLh3cc7rBUGRZAuB77YYiWngTMcKQ26K7z8MuB2Uj5Nonqov"
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
