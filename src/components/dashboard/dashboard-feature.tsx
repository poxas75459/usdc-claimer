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
    "5iPbUQHhVXdwqichazVppDkNZdLPTTWsuVZTMWGHUjmvZ9H8CwvH2WPTC3T3KzfZaUqzKzgkHgbPoRSJMBdyYXjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61F6cuqP9f5zQMrzRTZqjk1QHAvGvYMQVf2wnCgMvCXrx3TquxzekdrJKmzoesEn9xuU3dPGHfH7C6BPLaCT2kfy",
  "key1": "2PDbbsvXTS64xrHuVnJNrqWykhf8t24Pq9wQxokfmGhrHih3VhjHtkw9ZgHwQKBxgdynhYVw7B8xHQ1Az84ZgPS",
  "key2": "3wUgSpmoXsbpcTmt2rhHgJLFEGd4xHXXrD7eEAahU1uRrhdqP9NcvEHcWVPrTdZ7Xqt3i8vURgpi1RvCzW5YtwVi",
  "key3": "2o7Z8vgwEthCR9zZnYkk3qvQ8hvnfvSFEAebwHu7NJ4pRK34bcC74XV75yvvkK7EiBRQ3SXZdHLvy1FhoyHcZr3V",
  "key4": "5t3WiN1owm6xHHvxMqa4fjAvXM2mqhFM7mVReT2tFqdSdm6JajDE2iHE1acoBs3eERUn72MnHwVJ3xqmPNgAGvK",
  "key5": "3aAePqwZaoKKqHEGHa47gpevX87Q3fcwmjMFLXZcCUY6U4r6m4yNqMFwhTJdEu9QBWW9CrxPoe8TZfbiapAWw6qR",
  "key6": "rV9NWmYMWzkxVB5eBjpequrp8nFb5k1VBW8baereyPUtTajWHPgb7h55Yh4JMmunvqTpBTHUiJLaiSKxKmSra4x",
  "key7": "26T1DBWvRAoxSWSJFLVwYDf21ai5xgHmhPsCmF3XFkAbNhTLEJFV9FN647RKwKC9BqKo427UXHp1fDfYWn3LcbkE",
  "key8": "65Nqa3uJEUYEs2bHYuDoPPuBE3REaNDWMn9Gv7YTritKTWnu2v4pkuUSMxBiD3xCTegGDP5ZC7ZoxzbmXnieeTJp",
  "key9": "45NqggUA7t5dwiGJ5ZXuvNBy6FTgRj9ZERoGqaCy6RZzaRG6fECLeT2rTeT9gexj7z3JfyujSw4y5DYHjJnnJ8Z3",
  "key10": "2QuTB7QTb4cSGe4kvaXs3dw8R4rrWvZooFLZopGuZNbMq2ivYRmVYqVtJoea1F19GpqiCFBpgAtLcstAMqfFrvyx",
  "key11": "2J6rztbJ5KvX6cxG446r3HdRJCWxzBjbxqkiMPWd4vYBEbeYrBaV3FhDzZ6xaYjzwgHBK7Cy7v3chPUk8caF6xfx",
  "key12": "4xSsu8btahWWxFyvS5zjwKfbYhng6MaEM8Q6ouyhcXriBWhZph7XvLnsR8kDH8yBoiQA3Pw52sE3uTpaDzRTkMrb",
  "key13": "MmTND4ZshFF8Sk6V34N2f5zTSXhMwKfpjxYuLxhe72p2BusXfYz3aXBpfAWx82zTySTPnaLeyz8SCFy8X7hXnzF",
  "key14": "3GzL33dzZtUbyoZvtfi8kniYWoKzmEVmZFgtppibSFC97hf6i5mvuKWkmReF36FtyyS6R7pVQdukK1SfSevkfy2j",
  "key15": "2s5BArneR3M3XKBLoTUMXhF6yQVjzSZe492DvCJwuHnye4FtZRsVZUVXfLGuNknwazRvKuzpeBuNbWgGYr7dSvuA",
  "key16": "HAPmbfAyX8KgLJu3Q8BD1r5teCAJgA16LHbjNoUwNbDfAoqy4wVCbRDR6gWguW6ai4U2umJo5NGxKcSCf4yBo1t",
  "key17": "3HdXDnSX28rR48EptYm3wrL6rsrePNedBhWU66DrEQ8HFxoBAk5DDLh2MEXmFr75qPWCCfSTh1dmTkZ9V6fQXVze",
  "key18": "22ruTSvrggUjXDg9YkwJ5kxsxFUBqptti865yictJ4uHZ2C1biFXkZdTdDqR5Ks2HPCCUnEniFScA2Wvq1rc3yPF",
  "key19": "59UtHjUvy5t9vBzPC9aH4ghjp6oa4T2WSLLz8ejYk5RseiiHFJUqxhpTrqMhL1x455GMLLdSwvHjBfrjSx5uZBGs",
  "key20": "54hhyKaXgpWyD7E5GerdvvS5o4CUXQGedBMro9Ex6eibfWRhZjP1CdvJktyM5EhJDWMsicx66jbwDPbqeq2rSBBf",
  "key21": "3NYRk3Vqq1qNaeoEGM3E2yzeNC2hW7A7rtpV63pZVzmTCPPywvb75RydPNCY4xoiWM5Q4TvhRbE51MHjASN62Qdd",
  "key22": "42Di1iMxL31RXSnFNap6cNYqRg4oMyzbpecuDq3rp7vRJ7LZoDkcFbjEZrvqEjpVAmT81tCwZ1hnN5VvcnigGb92",
  "key23": "5bodH2aGNKUJtsdpjYarx29mMk6Drke3xa23WExGuD4UBeoP1G5fDJGZen4kqe13icrM7LNL7Lyf65nJ3F287wmb",
  "key24": "8Z9WPuRTsCmWyvVaWKuDsLuu9b24J625auJpruEnn2yDDMJdsAKTKEpsYip4JY2RU1ymESQMk4LsrkXtCjxdd9T",
  "key25": "3aAR5GkAoSDixRm9RMSPELkqmJGjPJFfBFijzk5rYfK9VaXVunUvb4DTNPLYH1ZPY711h9kKbnNzLhnxXpgUaqyQ",
  "key26": "59PnnqprdA34vd58oPfpRkkhEwFeem5qXWTAb1gvwnaFsZVWVXGct5ewvEd8awFurqh1S1yaDY7Gdt8Fr5a1NQ1p",
  "key27": "55VvSfdTkHUkaQSAcNbSssKwY9toJ4iBV1FRHDvXd2suKJ8udGzhHJdkSf8ffxKU5VxAxpiKsBXyULjThFkvEPxD",
  "key28": "3KtjbGwbjnAMouG4magcWwLS3JAm434WPLNCS7no15fyiRcu8s8cBUnXi7Vu5pzZ5eBPw536vX7nDCEWD5SZKmgR",
  "key29": "5ZAJZbsGPf9TGoZUWRXxGXJ8iQ5cFJ5HSm8CtV26QGbZ34Q6C1XL7cpnhgq7hL3pxmA3HeB4RCykT4XTjK1eAmAA",
  "key30": "4w6eCu11UKpNQgPRpD9tMFygcqWTZZoiBntfHq9Kz5W4vt18s4WJoXUNPgPEKd7m8yMtKa3zXN5hZsUXwEAm3mGg",
  "key31": "XVdob4R5WWppJRAb7Zr8M5fLYeX6YRPuVhCnfqLLs8hoCdFWttwCZmCe5KqASfdJDz5dCD7rhyxycebMpVHfKpe",
  "key32": "4k8Ysf5Yb6WapLhG2ouGiHR9WPhaL7sWbpD6N1NGy9u6zqcYW5YyaWLhzHmEyKzbvsz4ycFY4eZ3n16pQHdXGamr",
  "key33": "58zBTD4Vq4wCq4GBqSi1bzTW9Px8Ecow8RcrVCR9ziwS9y5yf3ktKWL9Pa9WMLGsJGRWE3Y4qJUpPPfCE91RzqZP",
  "key34": "2zrSEyQFsuKJXujZwSB1k6dZK6xhkUKyRU3S96QXBFA8UM4CQ5d5PrXW87jMDAyDXpSijaVVV4mTvS6FvZXL5MW2",
  "key35": "2YywLyzMeTq2aLqsNmS8yjiSPQZNWr5WFw1rGDiEaU7hvPNBkGmScJEs5PXBCBqwWNdMpzgXvPsxHvAjFVb8bRDU",
  "key36": "53RKgAVAJa7uj2PMbhz8MXpT3k4kpmw1ckYnxb5WKYs1UUUECgrkQAsqaPrM6EHXkcXmYjiLPCJ6zuQCy36K8dfX",
  "key37": "5eQ6MaQ9tCaFSYErwuVdMXKi8TUUCWJtFJRbWJaWd9jgVRGjoH9ah7AmuMHK6hk1yQScYov3YUDhiZxow2JcJMSc",
  "key38": "4SFh4CUjeyiEPe2zCJfyTsRVatrRscd24HVLPyFfFgDmVjfwhr1vZcz4QtN4tqFTHN8QPWnQEUmpTkfZXbVAb6AE",
  "key39": "TT5jAKynyFWbcD5XGNmyb2tp8Nq6G1QQ9hEJgMuFKeMnaB3HZnfUdd3czrpV5HeVF8BR8v5HKk9qBn4TcC7dLwG"
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
