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
    "46fwXxWkunXz2DXh3SQv1gGHkcB3KdDMeXWHr3XC4nBeFv8DpGqU64ZKEBt5smrSYaNpabs9f2WA32o8p336r6eo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y1goisW4szQoLdEqrWKknV7bbmGrebp8EQTnQry7A8xA5C3Ri8rKNAMVsXYCEFrANF6srVFSz8xoSVtAo6gA9vD",
  "key1": "4UjUxGCVM61cnRgFnuzxFgWbu1iVvtddSbZwj7UuU3rwciezovsRwYwFsvbkJkCTVrR5qZLo2qxWuJ9JcWboELy9",
  "key2": "b5p3S3c1DUxZaFqrvBZRPkoqmw91WynAqykbSemaU2Lj3uGLeuNAoy787FsFy9XYiafrVVckVWAWvtGRptmfm3y",
  "key3": "2RWSYWzTmVRCMXmXZppKvTXmBnVe6hQKoj2qAfF4LHEMr4fpMDn9ck9M1Le6qEc56vsGqDeqvKcJTcWskDjL5Uaf",
  "key4": "2dgctbaHw1i9oEcunvcrRKn2gNAyQV2PWgVwtwf2Z8w4wUxQg3XRey31ZRmgb965Zst2GRqxSX24XrZzJRVsvPK7",
  "key5": "2ZgUMcpMhYtnVDUuGYErHFWBRaE7zCu2MF6bV8zJPhNeDVhduoK8o6tmn3W6xtLWX7LAGgY9fzS49fp9gWg1kM1e",
  "key6": "63rnwwzb66eiTfNoeFmAZgtZ6Z768MiaGbqgp4zD68XJaVHChNZPkdNTTcU8Yy98dXScVUyuwfQnNBUvVeYjUCCa",
  "key7": "FGoTLa1wnpAA6XSZam21ffAdpk9agRW3UdvUyfmecwXcgrnXgzqsdLqNYSgDUfrAx9cmiwyXRYNYi16xdJELaof",
  "key8": "5peqA6Rwv1bJAZkjyfSaG1BiLHsTELJNttfZSUo5ec1MpUPSUGRopprcdycQrUkvgrUa8YwegZW52FgfyBA48xiM",
  "key9": "3ZNVn5TyVUQgAYTgLQBRJdtzrPYMHsiN3ddUUehf8jfpfx4uWRwAukfkWyCbebVYTH7j8U9nfXvQvqaVrHKHV9xr",
  "key10": "2xqxAd8gWC6x1ZSogUtacT53ZRSw2tPcuvZPnN9D8Qfd556iFmp7J4rirxUxpBXHBz64uZfLPMRrNzTmjCNtxWbV",
  "key11": "2vRJqWrAPTRKPNT4N3MJ7arzrm7DKXDtFNeY93eA9fqKcmeEpZg2qGT3aa7cPhJs5E1YhtDDuFUzkKA9XzAUwDbd",
  "key12": "8xnKr11LJWgaydCBk5UVtMszKNFP211uAdwNcNKJ1KamCT313uQBErqxE2XbMbMmz3QLCU6hoq3V1iBZtPsyFyR",
  "key13": "GUBDVJzHVSswbQrSp98jrerDFemLPntvfW6F6yWX6ukkga6fCG6bRTdtYye5Gpvo4gniWYeZQBUzgZ8FePkQrRj",
  "key14": "5M16PoGkLxAkAgHZE9yfmDqPekeytRAAjJRYnMzdmH8PsqHvbjcAC5qVfNTA9WezfmSqfqCL5sfWn1R4FLKfD7rW",
  "key15": "5dGnraB3jxv5W2nWq318uWkbWX33NGkKScRDyEAWxpvEE1JKsaF4juhVCzPaGCS3oihzn8TD7BpGFpukv75cvV1c",
  "key16": "4gpJcsyP9sXyQMBCibFhKek3RuRaAjcDZvywkDoWqEs7npNvfUKYut8rVMxDSMLN7eaYDZ2LZ7MQ9MRYsZW6bdFW",
  "key17": "4rC5QmW1pMTqJyfnH5za8xxewyqs1RjiLjfsp4eqLbF9Rzks9LRnaQaRkn5Ek9B53ugcJBQjvo14L7L1DpiSKWwz",
  "key18": "4Ds1Z9WBRLtHCv5zH6jNZB1op7g48u67H6u36MH5EZRxeNteHNTCxQFhtWC1cBpi5wE6eQwTzSRE2id6WBLssmwe",
  "key19": "59MG6QGmyHc8tVJamGRkRcTxaCa95PpCR485p7GGPuvvCcr3oBDQexsvcsgXboCM5zX588ud9os7e6eNVNKbnM7F",
  "key20": "QNfC5MYf6fuyM1EhCzDzUatrG9ZtX9vUd627JhdBDGFMfPAXvabxyjs5wxhgXrQ6WqYVXD2y6G85socnY3DCnzC",
  "key21": "4LZjoYn7GMESF5Acqzwuv92iMVuzxANrverr6mXMyii56k6r5KqceESkbQ4ux8echQvDcqukpP3Et4KJiYDHwNy",
  "key22": "3FkRqqywQLvSqQnyh7zFXskoUbZHCm1RsQcnBqyNzJGy6B7tLSSiHBLzJN6gqfteNorHZe88YimAiES2qvca8cD9",
  "key23": "4vqkoWcQfT6kUcogLGXXEF2pdEvFQn1gHA2K3eQDwoKnkpqbVr5gJhpMopRHvfewqGTT6Cp77868YxXxU4XxHq8F",
  "key24": "5uqjE6w4Gcc8m17bnsRLyRDUX9PN3uBBtvLa3EF3eRawyNrFCh8q4ZDYxhMGvW8fvZvDKQT4JqL51r1ALTsDatfC",
  "key25": "2D49nykvK9i45x6BLRuWxmtayrft72dJiefqjoEKTKREzJz5e1yn58D1JjiQUzzPnbLtgwAYsLLcdbMmPfwmrz7r",
  "key26": "bzbyFFhQuqxpSmTtmbLhqWPtkeAbYSP4h6pzpuP7A31oTa1XjmREo9P7rYx8gQJ7TNopGoP3C8v1hjMHY2jjfR8",
  "key27": "4CwbUXQTuUDYFgc72uwfRBBDh8Yb8M1L1Ftzs9iGCueBeGUxKfrzViMErSnefM3tQwoqsq9boBYjp3BiAZdaJ6bS",
  "key28": "25Du4Fx8Ria9dxUy1inVrJ2jAzG1FSncf3dYLyzdWPyh3YhGd4yE8kqrzS5MMWmUdGgPugiHuznNFvpk29PsLXLh",
  "key29": "2WzEc5LUfBavge1jUUtfnrrYAZg3pPZiDgSJpQLUsxHZbbHGZiLDCsyYyZss6RBSBU2LcTscZxf1k6VfcrbLd7dg",
  "key30": "2EDheDhHEicTGAvt5XqF84uzYCdSuma2cy7up3tta9ednD8k11DtSgvrEgKaNPaYM8wWHKQDAizYCvxbQL8V92x7",
  "key31": "29gwbSoyGbmth2YoPhKQxjeBimsuJPEUy4hHhf81yJAXpm38aWdETQk4JqbhWydaEGvA7RRcQvqBuGwTrThyZrXX",
  "key32": "4r1wW3spiWynrrzkdbMxhR4PYSPMeFsQ8G56VqcN4yVfNJcNjtAc4DpkevT2PSqLs1mtzvSaZMGnqfmL6QffimAp",
  "key33": "25RkYB28bF2n8uA5YokZmrh9FUhcXJKATxj5RgUfSYnQsEeYNHpcgjtYdYVQpGkPC2dTMBPbPhRcFszsrLSE1uvU",
  "key34": "3NVRGmhHUX1qsoZ1NoNqunALY5nVqFMPj3gK8B8doq2isZXTf9NHTxXTpntYntnNTPRPVi483Heg8XAFakwaRWth"
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
