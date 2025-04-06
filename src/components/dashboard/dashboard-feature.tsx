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
    "2iLx9GfzXcLhthsKhUcWUjwWvGudGRLCcGuFf1grCczjMiYdHjXPJGce1v2TxHZQMBowm3Mrs3x2vTnGNtgavHG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wStsnRVZnkERMJRsEzaexTovLmx11GfXU69J6L4nvoLeqUwi8snuwNS81RuxwceXr4zjeawGef5i1jbALFjgoXd",
  "key1": "4ockgSeEy4JHi3DMV7XkFj1UoEzuzT3k9kYkm7TCi6ao75J4MA8BdTQr3bUh77rVwqYBX5rPQ1Y34chMknVxcuPj",
  "key2": "3nCVoHRj3oTUiHjoG52oAKwuRoS9aNHFWpTKBf3VgD9LCtjRoUb5214mJ3d8AwfZ5UKWnbPDiGKje3q4VQuy5KHB",
  "key3": "389kRctyAZ18Z8JujdHXzZdjRJFuxi9QGrnamH1Snp5xxqx4rcEB6DNvfNhBqsRdhz67LWfAuaGRxDairQCDjDtB",
  "key4": "5A9r8Z4J43jymwQDLK4W9KEEFz4NvtF8tEoE6dzj25MLxYie1X7wo7F2Vsjm8AzrHFnZj4LYMVEGnVar9fxKY4T1",
  "key5": "4tTYXmSUbJxRswx6KbevrL3rbNeVnBffv4QjvAtucawKVrdCziLPKCHiFPRGkDE4LKjRcFj1obWjoJh85BcEeKeQ",
  "key6": "31t32pJpex5gSntkE85AkP3JgRrpuf8bsokRxQe1KyYtiC2mRAjW6a8MZLNQ9ynedSBEqSEqH8QJ2LHvye8qT2mC",
  "key7": "395fY9vY683Janak2naQfFMA5TJ9wowdfNJ72R7tZCdJbzQbSEp2qfYooyD5VhXUfMcCH4tg3VMHZvMTfsXiA26s",
  "key8": "565dUpQmSU2rG665cZWMUgzmtykpP7LJPNGz3ubzuwveMhcf9eUFtDrv8S1Y37te95thEEwXUV8qqA6yTuwD3uFo",
  "key9": "5625tRk86yubhiDLVNhrg9QfhHCd6kfu4rKBht9gAn1gbMrvtV4CNhyePvzM5X83ruATBbZuFg1riRurpVycmTwA",
  "key10": "3evjAgWGwn9Be3TfuRb7qx454MKV3umqi93d1xBFdVJzLgdWYTtCyjYs9m8ees2TUfuw9hqMaU8vRrJxQt4xekZf",
  "key11": "5ZJNoZLY9iBvtprmtHmFnBUCpanoYgzBBDLroGPYRQr3wLnwWvH5xg2btZnoDTN6cfSvY2NMnRdouCUek8ibq8CL",
  "key12": "ksw6kFFBiZb5qKkbD3pKTcaHMR8nABvgMCA9MpyFsRSth3DZ99838GtRY8NYD5JqzS2jrcX5vEkUk3S5gqZt1Jj",
  "key13": "BGccHTgwEwnGDjqQfKgkHqCrLHu2htNRiuZ2BX3GuvWh9Jze1RkvZC9Vrf3YUzaAWBUFECQxpQMK569xvzHtxBN",
  "key14": "3f8yGsnqbX9gqaxP4qS4rhTBKg4kxRkDcoFY7HsSsG1sC9b8wsAyz6gapUw2KQYnRJSiTxSAycJenh6N9ZAFFiAH",
  "key15": "3Em5bhihYjNXbXRkTrp1DJyPNtMFGR8cgu4NgPNMAtQuxVywQFhVvFJ2Ws3uqEDqtLNY8tskgYoEswJG96RQkTX9",
  "key16": "4JkByScqc2fyYbkG3tAU4WJMurALWSD3VJtxaY1ienk77b4w39gFMdSptsHqbcAmoSYbqmbUF6xUv17Q2uhfyYzk",
  "key17": "VLZNXjP6h7WW4URep1iTSR4BXiTXzMivzZZbbKnYDQ4yrmpvq1jmZwCNDtBmCd4vJTinDSPNPhomL47QPN33Mii",
  "key18": "UdrZUrqcH89BeB1cj4NqnEiEfBqP61ZNphmk5Amj65dfB5PvzX49yVxTaqb8DdhWN2x1zaKMf5tn7heZ741M1jf",
  "key19": "4U77sYZstxgJA2F8R37bvtzPCsUaebHdZNpEs2ysRBp3XBNVvWn4cpCjUodCSE6jRmAyP2anTgKjQDAKoe6c4ZAr",
  "key20": "3Lywts8Jn4ZxFgcFuxy4P8nB6TLqB9RYixfJKL7bc1g4dRFDztxQ8VVBuDN7NkQyvhnAKdTTvuFz5fBokZ7wx5wB",
  "key21": "45CNRN6frsNjaNkAGRoamFVbTP7bfHT8JAifdfZx9iEhu2uV5rh5Xd3m1NL53zALWMAzDjNAQtStDdN4m2QfNHNe",
  "key22": "2XN9WYgbF3DyoXwi77xsoMNsKSfXLjqTPSEUFANTq5RDfwAaNf6Be8zzWVjVUWimTeXr3UXZPZRCHeMn5m8JHwsL",
  "key23": "5jEWgWwzykuL3ALQXgzHQ7jfT2e5RtcajLw81rpqAu8Tg6CzyFg1st4h6acqdC6NY2DdGDxbP5H2oJnt59Q9mDBn",
  "key24": "3YvrLuYhboQB2PJwVV5FdHoydCNxrLZc24UYutsCQDMunKXjvVTkKNpS8JfgtuUGFoeHxt2bNLL8mA4Z4GMBhkF3"
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
