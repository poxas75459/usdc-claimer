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
    "3C5y88yrBEGBXFGHXZ1qb6LpDhmM7rcsmdKMvYng46AsQqS7yxQ9uXLpD76mMHTCW1TLR173A8UqHK6bGeevUBtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "drG6cVjdZAUCYpbjwR7doynpR69PiAq7uGn7291uSawGvTf1HTjpWpvf4s9x3L1FEVFBKniKDxbrZEfPh3yyK18",
  "key1": "28mKehAwq9eDvw2XXErH7XfwktfEYcNpB4jeFRbEkLSpZJ3szw1mi66GFNHX3rr24gYipvR1JCuGMMo479Mz1egg",
  "key2": "2H91w8KWnaYy7NUPR4JVQSidTK1beyRNazuEiRHG7cU5h8gdvi22XF7KS8LDca7CRk97ELWS1P47Y2YWyxCEZz9A",
  "key3": "3C7rUbowQNzS3UiRd2snULd2AaDRkmck3jBaGL9VQiSqKCbY6Du4V2ae64oHDJkARoJBZjmMaNzqJzdfZMuaEQNM",
  "key4": "3nb6NiJv7NMwVAr9GjsDqTUTeEdzxwMsojRyUKEcRBiTMv7gsnQbjVRDpXez65FmQWkK1KAaLvb5BycGsxZZts1c",
  "key5": "3wFZKvJmyGnVw1iG2u3NV4Rj4aaPuYvbvBXa5hci3APvnfDijp4LHcV6rAt1gZf1BsoDjtn5L763v5aaTDXQVx9a",
  "key6": "iqBLGQXyVpqeb3yRVs7r8LkZ6V3pZMB4r5bfMhY11J9MieYFbGrvCDqAy2hwnibKi8R4624QwcaErncF5ZdK7Ai",
  "key7": "2dXMBXiwDSCWV4aoXbJQu7GCDFLMYnqKryvuEggVfzNGzuNqCjmzTA6zBvEjAC2mpHMhFekw16pGZUrvq57UGFSr",
  "key8": "3qntY2Tc88PEaGqTpsNVa6y2QUMTJG7gue7z9FVaCKsUxfCWQfbjrjeW7X8tBmvhmpkKn6Xir4NiWoBWYmdexzw7",
  "key9": "27tZUSgyEbYCFLD1oCZ1YjFWsyTJH4PiZVmxAHAG9KYNjEwXDLR8SJABea3p2pyrriRNz2mjG6DgesDqhSE5J1f1",
  "key10": "5TH4J7ERvBxaTSAJK6D8gmS64ZTGCvwfUjHD7dVBKyy5onGtPYzMSuFe6XY4ZBxEygatfr1ScR29RQTY96G5jV5T",
  "key11": "66VVvxRRG8a1AuDjhGEWxLnWdtYMnpdxHv75WAFXjBbUvHPuf5Xvnx7kQFsrHSs1dHUH8XKEsW1GDaXpQTxaeStZ",
  "key12": "493bT3KLBjYCN62ECrTKmRAizz57wD5v1nuyTzuUuNRA9Yp9Y24PuLy5NoGdBwsQuLYs26RKRXpryUUChRGr8ecZ",
  "key13": "zqWdSG6QrHRbDT3c1hkfaHd1QMvqFgSHNy3ua8nv4P581eMNYCd1FM1EGkFNZNLXeQEBcR1vi3FB67E1sif1wK4",
  "key14": "44NixswSWREWKuQZN6n6p4gnucRWrdym2F5RNEbMfKuG8RynEzSDoU9LesVyfvKED4uDcCk51mkm1923r9ToCMLv",
  "key15": "3mm8CdeTcoSSYXXnhr3s5CiyHTBWMKoTy7x3vxMREoHWSRwpsZ44aqKwP6J2qecv8Wm4wUV5t4yZG5TiJknUYvDp",
  "key16": "2hxDkAaEUfM8mGAtGY7TKXzKZpbGFPo7imgxbpmmhMkHrzBMiuixo4BHQfG3YHgfQ11iWwCpXbUGVVKcDjd7xxaB",
  "key17": "CBSuipHVqvbGYUTvgA89V157vyy8AALwxzN2VKffESjRwMhi2zSEgztGBpjtYZbGS82RoKEfKTBWFmQv8gCTLZi",
  "key18": "da75V8Fa8FkFWxRDE4PhcgEtPxWRwFLgJ4oCzEV5YYJoxshyDvMb6FKGEeToCxHEjAgqLBrr6jU5jnRVg9EpeJm",
  "key19": "5kaWRsvEthvGbULfLRN2XtpEebPtjg9z4ZJkX4MxUTuEgfaWHjH8aS26Ujpd8YTzFxqQtwGAcZjTsrbPGLoAbgrp",
  "key20": "WpCGPM2NWHExtiiKFBZaqxUeBqqhpSopPfgVMcJpdfSczzV6DRXgyt3W4EdUtSfzm1XgKiwVLeQhMmEvT9moLYG",
  "key21": "4nfM8bjcbvDTe7rzEzLiqkuR6fZzmKESnd3YiayWmMJuFNhrTN79jqyGRdzRZTtcwQrdL2rhbFLGqvNpCAPtceYU",
  "key22": "2J71FYZtBLXp7L4ydPF485tgznYXWMDXh2VK8zcWtxJixCaye7BHXCvsVizqArfsEZEzzALVPXe31GoFHMv12p7D",
  "key23": "4L1LPfHgSSPDzspwXESibMGEDR2kWw5WmB7XKT7WJmgAwwE7QgevTNqFGejyNhhptx25RuXwEwfvUWYyKNijPvne",
  "key24": "31DweUzd1z5QAWQuVzCWf8iArpUGBZ68UFH1tJ46HKxfCmmbBYuDuEvvC79hw4Rxh622DpMNS1SrjkKe6zednuXG",
  "key25": "8TdmNRVZcgUoPLhp5qxhupaCs8sv5VXiejs4yQtqXtzVYNpxH17Uikp7SNByGXfRT3c7rSD1G3AvMHR8MyiBG6i",
  "key26": "6ujZ8nksecGKMpdqiTbZW4MhaiJw93AxcSwqU1aULZN4jd1nrSxPQyRgo46588EbTYVx52FeBMqUWTKCndSCgTR",
  "key27": "3JLKm59pjWFUdo9q2bZgzMkDLQjAqGvXGdWCyq9unriATE2NaEiR8ZXSzUWm98aioFP5L7h2LHjGvYCxyxcMUAWy",
  "key28": "XfTM8pykBEqQb944WAoGwLtvo5mKdMbqmqGQRowsjKCQNtMT2Kz2e5pV1mjU7DDjQKixHR7Mw28n9B7wiLKXJot",
  "key29": "4f13xUNcfhJndVsayV2JSbyjaqs7m94oi5gjVUFZorFWLvy12XFJNJBpVoDxdE2goEZD8bAvshqcUjzGsj4eHvNj",
  "key30": "McdbMiy9zgh4WaK6X6tB9jE1ASjGk4Jn68JGED6QUFHzpjqjhEMMEoACoime8HwhC2bgnYLnTBbqtyZPkbwcMxR",
  "key31": "2zdcMjgjpoQpPRmWX5sVykKK5jPbT9wzSBcwsfjLbrU1vyksFSdsQstPwYEje6AaPEHWo9XUvFqKTfjRxCSWYBVX",
  "key32": "4RpNRhSng6FCLmHHhXXdCHn99rhU6yVo5NzUvCfzBeS8L6dooKrTS8wmQX35pJi1Y8javTQar2wpref3pkc6nqkf",
  "key33": "56UTqveeeWudyAj2UTedHSQ5CYi1czaAThc54kgrVnE96Vi4UNDJ4HgyhbnPTcYabKRkhmEJWPXSWXG8ppwokFcT",
  "key34": "3ogfLWDYRWg2XbZZ9S5nGFUF3keZQkaF1eXFRcqirGNkgk7b7dRJMdLUCGWApzndiMXkPL3QcwYNatW98RxxXcP"
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
