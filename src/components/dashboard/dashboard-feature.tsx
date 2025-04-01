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
    "4kKgkxdCihStf8H4k8dVCAaJdpSWpGbm3H5QxeTzE5L5X6HeboZaWauGcjP5yF9MGUCT3kCdX2E6Nrej1pkwwhd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yYtnhBHJVUXjeMyTwkAxdvvQSs6KiiRssA5y2LWkJJkHN5CksWka6CysGiCcwVACaBmwzcNakp3eWShTy5gZMro",
  "key1": "2kZBFSV3FfJqVQYiMfTSAeTj3WRBVGA7KJeUD4SCktcsAsQ5mxQx4utVGSzyUCT4a8wjuvmWqHeC6G4GWPAekmbC",
  "key2": "2H25fpHKmsAavpsHopmVNLRY5MYTeHJuVZABeximjUnSkEEXZxet83ef82CXDc5NskXRFUTG9t7KwMAxrhQcL1qF",
  "key3": "4Rr8ZLb6UHwya9DiKTh2KEs5Rjf4WjduR674niQ2jTb4U5JUb19Mp6EoKwKDjti2k1owP9fmLy5tWAi7h29S5kmC",
  "key4": "JB8j13wVGcggtpwXuq3mNUKu1LAdBV6VqJFjDvADsMQHxifjt8svfbtTXA4eCr9vzkDnXPB28buU8srvHMH3M9Q",
  "key5": "NN98zBmtyRTQUywTPsHFhGsLY7T7JSMgPpdrCFiC4SJMeBfWqW2DxTKP74Aqk9Syei992FDpmb68yWe7wptHced",
  "key6": "5MaXMEeGP6iVpQd55xYggD14E6i7VrNsf8uYuTs5PG37HG1mcZymN38Ai1ni3AQeAhKs9EyNpNDFcoKt2BZAaTaq",
  "key7": "4DSZDS9PTSq6LJihdLWFVU4ZEP7pgrcq8G7vWC1DS85yeAuumZHixzJmThovBrwVXNsN83bbxZuY4YJvtVnAkDLP",
  "key8": "5LGzTBqnKKWrojBSZDcwaLrv8uzTqCsxDGxv32ohrA4mpW81UesFrbhXVDCpLsdz9ttSYZTQn8coSN7uKVLJ5Skn",
  "key9": "3ujidSNFK7nWzqzxeZYWPu9qLbgXqiuN9jdLrXbQDnZSqqGGhgjMtgH245bF6Bvyrq1yqTVGXem5x9Re3DM8btMJ",
  "key10": "bGHDpzfngEtXoqWhDzpp1P17jn7dgm3xQkxZeZasnjcUy23RVh6dzpjSokehhNCvQ4ESfUM6SPNjXGJm9p39jgG",
  "key11": "pqRCEB1VenrN1JWEMyjKu2Y5Bnm41hHEEbK1atcRtQNgM8KkTeax4dRAHgRCmfYw3xm3kQwJGxf1ABHQkPJmCpC",
  "key12": "2mgE3zhFBTQaDEPEhNCiwi6TK1EJjW3kByv8v31mV5eVQTMqt8jxPmqf4oRjyDcA32z4PcLqZaxcWRfJiJw5YHuC",
  "key13": "516nhDuidEnx2pa3Kuy3qBvqpKr4MxggRrnCtmCbXKa7VZH64zgvFZePHQ685AgvKYpUh5BnTJyRWFzS6gnZ9dV3",
  "key14": "Jhx9FZrfDx2UqntHX4v8zzueiPVHdxHZjRfwn8xXPuh8wnTc5V8o3sskaJThpM9nCr9C8XPpj7JHSjZGPaGh4US",
  "key15": "4Shc3JG5qukcVWQv6KAdYKxT1m8q2gWFMDzgfMbR3spgMEFiH4Jb9ERN2JKqW5szqPtMp26HJk7bCvro4KNThbBv",
  "key16": "2Rf9yzgf3oDdvxdKC2FGN7zDLKdJt35GXvKQ2kf2UyojLkFVLoyQQiCnQ1q7rwuDCGKEtbDx6Uh9gjgN9FeYahWA",
  "key17": "41JvtRj9L6RctZRrto2oxT89ZQcypiTyDbbRY7VHKmHjFnBQs25KBeC7hg1KYUVSWDPj8KjFscUrUuu6NdzqqHyK",
  "key18": "67c3vChyoWwqnS8kS942huhzgSKz3peomjBHBUnscic47TWvnpugmoTevQ3amuZJ5YbbWCBSE51pb6AL8gXb3AwK",
  "key19": "3XUTZkD81S8kgX1BLPzAY8SYEC9SHK8vXHVzni45t1tujAumCzTcbG5Sgz95jxneBWGw7b5Sr9MPdvbCK4b65hgK",
  "key20": "5KucvEnHNr9KdVZzSh3c8Nb8giVNShEpMr4zkywwPxJYbbfXea3ke6EifnRnz6Dgd9q4xZyqdVYDx8nQNiipZ75",
  "key21": "3rG1KnfPsDt4dn28E2uLDZJ6vnkR1BJQyUx3EVetr8bvg2cR8GSpQ4GpG6pZffTLD3YYJA9x1eAiCm21da2SbjKT",
  "key22": "33FigoNySVzBsQA9GjybbGyoxr4ziTAPPoFzJUqkjJqDGbfXGStQA6LAyA5CXwUMddFGu2CKjnWqPGUptoeGwJUG",
  "key23": "33G6ocrNnr8g1VS9Nv5fvKvJnEXz1b8SgCqaFoFwzqb4op7j7XCXfjeAd1XviDRkzXapFBEVwTQEEKHwLBiXA7oD",
  "key24": "pcUJBTchpsyfqZ8LJMpYXNLkHmeszS8Qf9zG4EdQRuUta6zCtVVHpP9Re3zyC3xoKgQL842aFMHv5PNowCgTosx",
  "key25": "42F2gfjTrmfyiMJHVQEUHzWpqavJtRUVJyT5TWhAL9nm1CgvmbqYS51xxdQYqbDJg9B4JMYHp41fTCAb6mrbKGjp",
  "key26": "etrEZGXrFYqtAnesXqUGHRMDCPcPy2Gr7XSdWu6mDyGm6yHBJhjKWLkG4cciermyhDvjmyZtedC3EMPA3Nueegu",
  "key27": "5ai2ytfxzCpjVa3KWTjzcvhkTgYUrYXnXF7L4QXaLCCPsWosi8kYr5h57WbiU2rfedkbKP1g3hfzB8Tqz24mN8hm",
  "key28": "XagDYuMGgbqhGR66c3re5yA3gDBbxHSwVriffztsF9wr4DTgPovSsXiiKEXKr2LkJwyuzYbsH1AHHaC4s4VHYoS",
  "key29": "4eSSxusZyRAMJWVGQbaTZiUddoDRnGe4TjdjP2JtFyuLYN9pGMUwwGyWD5CStJfF4ohCj3AYCLNMTbtVBrteNZ9s",
  "key30": "T2uo7uFscZiFCrYuTqAvxR9qCbTKUM4Fr1xeVzYxKGkbrhw2kH4QWurQ5gpqZeqtJNxpZZNxQB8LFwAiUyCMHqe",
  "key31": "23F5UMq2rUoXbneaP9EAPHEotiJun5hUT3iRTD4C6f7svH9Z9zwTVCF7VSv1wQ2uvRts8UiBCxQGQaQaKQ8inaMP",
  "key32": "3ReEzuv6BReSUuyTUyRuU5fv3gXABd8D6vbV7RdUi9mM9zrERUg6aHrpx1hfmXTDMm6eCfjHAZFJUwuDXyKHHCXs"
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
