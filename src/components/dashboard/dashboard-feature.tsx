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
    "3gvyuauQFvhDCrzzixCmoRnWhNt6Hr8YJWkaGJvARuFdh658BZmMtwaPr4S9AjJhncfEuUq1boZMs8mjyfEzBea8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53K24zFikxJT4abkCSFo8novB7YnwPUMZHr24C1wwrK3bHQwh76g2LfuxRikBmDFDgjdrCE2XmDyejocXhr9afhb",
  "key1": "47VKQADsyQVZ1aT2za8G14AFEEyE9M9sKLrVyxYT6bx17V4yQrZjmRDrkA3ALxrstFPtPaYoa56WkWB46iW4NSsc",
  "key2": "3EsHBHzUnpGmsRJZXzdFQESkbG4QBhb6fVkAGB47axuDm6NhuQKoErSEH2W1KmmUPcRh8DktK15fJZLzzHoEwLoC",
  "key3": "27YLSszkpVSpYjFUHFQzxnXc24EBRoViQeBCgPYE3NiE51L8J55FGr9HPvasKCtXs8K7sn4qqhP155VVGjp3FqeR",
  "key4": "44He9zzbtED8szgARBshzd4JZ2PLHWVz4WyXwLjLV3x2TZDDP3oqQqvkSTtYujJYfB9y9NGdZYJ4EKa4R2Fm2JG6",
  "key5": "5NPxgeaK2eyhBo78QQDfvttFRKg7dvyRLWb7MftjX4iec7gVxB6WS23Ed8ExnLxP9rdAsMr5Zhe4EVisJARktXcy",
  "key6": "36M9PmwQT3miquZcnVw5ZitJfqfEFvFANQwwRSrfRjqHcucoh8wLFdm2X3mGH3ZLGWPh4ogHZo7bPibTnch2skJr",
  "key7": "3LnDnY5UYHLDBnPTXgWBZ8XYc3X8rHYyqU46TkzefN6mo3Mtu3HBBcBqfQnm97FmTXfxrnqv1NxVQovZJAPVGTS5",
  "key8": "4UYfSj4M7vnjZd1vphdDGYny6RG7zN8dhx6rSuET3LchJt84jL9mbHjXVwLDynFaZB4mWNhkxmRHELnBr3caqh64",
  "key9": "4qzH92JEK3s9NR3kRhGP2qMFNRzbwQnvEtJAofjtme2H9bDLECgBBzPLwMq1er19bBYDJbaymmw88xpX5qs1n6hy",
  "key10": "3mLvDwwaEAazsMrKAdpYnTVSU77wtTe4zivJEN4objAWiLtTLEjnzYze41VtJNzyQ1BG6v4t2NBwcJMxMidRnVM",
  "key11": "2Z66b6KiGKz1iXEUiA1MYyoTs6JEBVvss1fBLN8NDBhRhsN7XDbzHCXB3ZXwdqw5HMYTh1RCNXK9DUUCKt3fhVBU",
  "key12": "pxy1awd9fdePwxpNtomDv9oZ7PoT2c2SaM1Yw44xaWQ7qywJv4RBGiNU7fFD5NzsvXiScWqqnVdUbpNHRaoLLUk",
  "key13": "4kAxvR4GkfGSDzscU91xWoJGPXTMMjFVP2o6iy68HG8aN2JBNWfMQz5TurBvHA5Y1K1ULXmnHhroCrPrZsBmZz6X",
  "key14": "58XsZMQCzjPmE3JrpAoLMW9GW4Y79AFgECwe3krrcbfVspiZMvNHM85fLqJbZqpEKKJqXxkoe4ToDVuZKVzFwCyj",
  "key15": "4PDD5UEDg7CMHiC9rwvEfFKpwKhYiuue4r1VYdEUMxh1bGUqTMBWsud9nRo7Pg7gFVZodnaRWzewfNdWwFUpvnig",
  "key16": "4yqQ2fa21xpCVgPv5PbWM7bcPtg2V7YhVJHk4g4Kv2bJpqBJP9gpAzU3xYuFWYtHhh2f6SBeN5BqFmzN2SJjDMCP",
  "key17": "2ryf5iVgHgLcYX4wqphgzHfDzuQ3MM7noSm759QtgZYpXkvhwx9kN2XQVqZ6RNVFd6C2oHZZXRKqh9MyqSweAnQv",
  "key18": "4sTax4KhYn7hGzBAnB9gm6sBhkSLd1wt7ujvnmv3qB1pqmQYa3fVHr77DYBkNMoJycSQzLAgw5opDQ93QFfcF5cV",
  "key19": "2CPzwQUq1zEaM5jHRUGJ4pzCtuexN66uL2x3dGAcyUYNiyLLYusFhCqYBAASzGP6XtFSecs57GftURLtnrjjiZta",
  "key20": "3onCcXC3Ap7tSbpds7qoxmcEAPZ5rAFX9jCAw1Ms1E4u38NxT2arNeDdAQmpPUXMJV5c3gc7QnfXbzuGPstF5s8c",
  "key21": "3zoMexvvkzXcaQvdqRGGQtASYsDqnCw8it4GvpJcXEKN97PNcqEyTNdR3sZxBMkd9oqEmjs5SUmEddHS34Y7a7mr",
  "key22": "5D3hx6TzLNGWpXoiaU3or1tMvCZQ2AGSvDPhWGaGm3uBvhAz8yTrMBQjBbtnGijnkBGmekbVV1noWnAjFpRfLQoN",
  "key23": "nzcv8As5PdqGDNYL8etg2kmRecV2rKFPtocm1T8JM2s4ovUoapnhL9KA2axncVteTLmAQHfYZLj6FbDJmCPDgc5",
  "key24": "2YpYETRzXjCjimgUu1EnPn5bL9J6CZakpJCaCha21n2GMUf8NQM2ibXewF1GPNhH3fTbQTTF87Yhn2ZTYTVFuZeo",
  "key25": "5HtbXhDXn6RCQrXNXz1aGdDW38K2ArMzekoF2Usvx3Na4wH5oK3XNJPqyX6o3j4AUUeCGdqWDgtakN8w2JFusjAX",
  "key26": "3cw3qXUddqypxaH1oekS2D7aoqBdwKe1GnAQzLVvPkFHqpLzrsjHwoXNn9fP837HeA5Kie6cphpok7okgwswJYsj",
  "key27": "4gubhgVMgerb5NGMEoisnxqDTTiKkRUKs4GthGBznioD12T1VwvEc4saqZbA3fF8kdyK2BpTiYBbCFnyN1TCo9Rw",
  "key28": "41V4age8Gg1PSutpKJqACCDT6kNsvFFGmYfbKodycGMza39p6hfLajUpdR9uLBdK7kE67tNdUA816oX6nErza1QT",
  "key29": "4RiruaHyADsYc4DHfSuvb7Tzjdh9sWGUwqYw6UA3YuUEP9gN4Y9z5VmdwXCS1v3j6bK2oPFWgfVqqJX41nV9qfsC",
  "key30": "5hCyQisbL9fuxoJFNzJAP2QNVpym5t7nWYoKuAAuLyVi3T6yTHz9cSXPzXxvLpcqxT5Ss6Se2ZmGG6oCgWYVbNdX",
  "key31": "3X4JzZE84FGGbYbC7zTxrE2U7TbCgiRoZm8MwvtjJp49Nw7qrjYPVFfhnoeQfcCxzhP1gdZdWhLxRDG6KJt7BHNy",
  "key32": "5c8ZR2XtYsRjUVd1iMBWbLA3GcVBXY24JGfopkFgVu5RqWBQjyc9q8KUwC5vxsqJfV7Nt4Rbpt7YM2foKr4bNvLH",
  "key33": "2pH9JQ8ugGa77tfRaCARqDWJhh45fwcprHGxnzqL9apyEQUefJHURDUYyekjEroAYK7kTweHP5iaUfr2NFxnqeVP",
  "key34": "BsaDuHZbpxn3wzeH3Q4nCSwPUjws9TgVHL75j3hdKaAFpSK95CS6TsuN87UMp5dHZpz72Bv9MPntm3mdT8tSKPp",
  "key35": "Ud99xB7ZwceSpEC5FasWVCNkBaRFRKJqcxEvfhHgr3FUGu36c1s85FqAAu3uj71TCjLmQtMZpVPyFbXAZKL6Cwj",
  "key36": "4CrPZ36oh7M3vsXYp1DzNUcgeSSj3q7prmNr1VShs9sr26a7sCyGWwufMY2MWVE9FTufrEZ4eUANa2A5PGev62Rz",
  "key37": "3t9X1f6z5zw6ypj95iSRC5wbTEkSuoJSfusz3uWtYviPJrcCZ5C3kiit853qnuY1Ywz2NbiDcUBJYAbHsXccC93P",
  "key38": "4oJdeFasAJu1hq1GFYxEzcsuBtC2Fdmr9FGPd71Vqj8eYK5z6wtYB7W7fcEAt5UUdsZsPXoNz7Sd3L6qTbVanHsv",
  "key39": "2h1QnKJppbRkCtJerhc5ju1pWkn2d6cLYpuFYBW4ApgGbHA5AbVgUWzhHqaNzJUr48o8kvAy1GrW8vBHtpURuJmW"
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
