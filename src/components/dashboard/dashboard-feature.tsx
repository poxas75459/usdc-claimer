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
    "37yFx28r7JemdKCc84b5SjMqRdBniTsSE1QwifhgGoXpEkF4euSdtC1M23bxTnk29EPW4hhRvXntERnMjdtGUfJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QWFdAYzVCdRTviSB3984JCSnt3MQyZNQcDyK8LNb6SDuZpEf3EdCvJTRz1Sq7ZBspYUqzvRN8baEsVZhoXY6WBg",
  "key1": "3FtjN7tAn9YMBLLog9PBSFM5bwyo4B2uz6gq8vCQcNph6LwbncA9wo1Sgro1sr8MJX4qe51uDZ8tdYfPDZXEeN11",
  "key2": "3HwYPamuCoK9LX1y85Tp9bUkASgYqQ8iMwZ2bfRxmUVEF5bgBtKW7i72kfhfjiDK5QipsDy2pHeHCc6aa4BmANLh",
  "key3": "4jxEUQb9fKWM21jmymqaP13aZzMrpKfN7TXrKxzFbNVzhUQ9N7wrpeQZCGho8Hc4WXYprjr8e2KMRDqb9t73CAwL",
  "key4": "2XykAGeiDXeXhffiM68MYHWyLvCU1Yf4fQ2tRuhK78EXUB9UyGfFrvUcAPEPiSwHsKygKyBK6XhaT1aMfePAxrDU",
  "key5": "2rBNDq2ehYykbu5raeWoS5MCzBu6Ew1pNFLJGBnsCwm1BikZSkWEfniLKHCub6PCV5ePnQeK5bsaCZcJmdD2mXzd",
  "key6": "WWBxWuT9zc6KW5K45aweyCzkPC17hq2pRdHwYyJKXma7epq7oG547EZEYP4U5RiVSYnVqbJGBSEkXJert54JAoq",
  "key7": "2bthQ1dWWof476pyiXcT2AWzZYaXYfy9GcwxgAhWk42ZgvfhKP58yqhMW16yb86xvhidGj6Qc5NHzGGrANhzNtuG",
  "key8": "5MjC6L2GbaYRif4xnhtLUzjXUHVdBp9hH84P586JCbbqi4dVQJdxyzGEJ1Zz74ZqjYa5g75NR6YxSMK5dWbCkTks",
  "key9": "3iUuKttXaHyZwuntqRDikymgfFWvBUJ5vBqeCXfZimP3qbFjVa2ko4R9yRZqZQsRKS8ymCiEvD3mNH7UAbAzmtUT",
  "key10": "5oJHerg8iW6T4JmzGDkbqqr4YEwbd4LFmHF7KVnzm1T5RHcZGGuiqbFEmqErnHNKktrNYZYa1fX8HpyMRuEsPU5Q",
  "key11": "a39WCGwSmmKWGRawN4LYThg5K6ywkFMxEVR7FrZJCW3wnFPWYDUTmQjS2hRabozyWEuVbFqBjd2buXicxVeutFz",
  "key12": "pDma17QfVHHEmq2pHDzetgS3Qh6qu1Hyik2GKnXuZogQF9Zr8ECMHTHarov4xhXw6VtpRzBnETgpAsYcbTgBXFD",
  "key13": "54UhHt7rhDqpev9mJzCrJFvK8rGzqQg53VzVpvWNBV2n49vdvXqRMaXAMGkdm9ndFm3sf7T6uPy9xUHjquRieXRJ",
  "key14": "5qYNQSZhfv4TAEUmxHNfYiq7VKigXTsSpwjaXj53cpwF4aB5FNk64qZ2TUN6AV2uVTUkt9tninqa7M7aoaLR3Nyg",
  "key15": "2nSXsdDoYhCwYprzwuZMxKsqQKBVz6Pwe46EoWcwMVhYf8nrGQQDySqKnQZ9iZFVBhU5fDMcWeeBuMFqj3B17nzV",
  "key16": "3GdvsbM62XM53ZFPgvGsMVk3J7jGT2aDNB9k2RD5jiUTF8H1PCekAjauEJDy6fDhiesonNSRnSoQExaJBHWryteP",
  "key17": "44eRNUewG2nhHVKp6NfRNBVAA3Qf8doc53ojxuBhrRd7Qjf2md4LFmqd5zoK98QLgGGNbwg75uoVfUofHFD9uHKR",
  "key18": "2CJSJivYYpRNwokMwDJajw9kSF8j19QFijJYKJ4nEktPberUQadegv2seWAxyHzGyQ2qHstkYMhrXc1pKix5tLY7",
  "key19": "3YP7aDnzR1agi4WivRAvdbw2QJxLxztrxLUHmYW46STPNSKgmAJdjJ97ebaGkUDJPQ9Kpwwu3QcTczFNnuLPssv",
  "key20": "5VCs7Ci5H5GrdzWphzgu7HDabrJ4yZ5Prbd88RVwHVGqGPjKy1QX28etUbLucudvWMgXeND1pFeHknzXX4UA12i5",
  "key21": "3ZuDxacafGqDYhWh6S8vLk1UWxPbCvoGUnb2EaeTm1WrMnnvjdYDJNjVs8fC8JAuJTgATuigPCfAyW5hYWoGjL3E",
  "key22": "5RVWAcmy7eahfP8qF5hAAma2Xk2MrJJu8u6PUdUE81fhzjL7JhgNcQVqavF2A9qeonQP71RCYqfy5fPQAGwrTGMq",
  "key23": "3CZVsbMKzrpkgpFeCSPppXFrKs6bo4mPjQdk3pvkBXniDfV8MrbzzfVw3uvEWJP82KwXKWfppVxxDGucSAAxFTzc",
  "key24": "gPpW32ztqCTGrSpB9jXaJpihqLfC43je4VETNPARMahexb5oWz8egWQT5wo9JCKaAjPWdrvXd2mEBbJV6qQEff3",
  "key25": "4dnj5gV1QELDD3VEAyhsgrqZ4Q4DMFyYz5kr7ck4Et1FCRMHbgkCU7HteWUJRJiKz1oSp7GtfrkoJpeMy5LSMVX2",
  "key26": "2JeTp7njuepkFM84Cr4GCfibrqS2fWSf6EwAyf17LvgXi8KpA4JcxYky28u6HxCBDvh1WFb2bJkYDiKvtML3ZorF",
  "key27": "5ga2XR4BbYaJzFr196vhE2Pe2WdvEtwCWoapmcnVgZppLRQiwmVNgGzGxvo9FWg4xrH3KmEfdTaPMB5o44JSayCp",
  "key28": "xYjZedqV6BrAa157Sfi4ZAM9oup6D4jDMzm8NHdPfatAnKtgUR7vzsiFFQfCXTViBHt77keBe7VcpqEDRK4oXaV",
  "key29": "5K2xNAzAEVL5ZN2a8sRWpWfMTKiJHbZBGnVfiNPYKLRa3aopYJvgJANa9DTV5qLhgLWcv5Ydwu2ydHyL7xhAvwfN",
  "key30": "3YKxerz5LczqUj8pBMyPL87APgNtsMKYPXSpbr8VEtcWqkjL9csFQX6RNLhtTaa3nJMr5zcj974hfaxjp7s9gHgT",
  "key31": "5shZhurGxuTcvb4K1LC2xKSriknJuTfEJVK87bYyApNVN7x3pdGSj1e2GknnSYV7zZPUPjsPYnxe1yNvunhQjW3X",
  "key32": "eaZSTLP8bwBG8ufdFiykJsqVqcspLG347v51fwuMUTnXdpN4ukeufcBPEHE8DW71ftoWVN9esHtTSVmKbV1bv4c"
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
