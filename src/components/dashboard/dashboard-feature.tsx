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
    "2jnaZUBiyC3zXnqHREW1FutUSb7cTo4i4vQrxUzhrBEnAmUdYwqxfhm79o8q81VRFZeRdLb1G3EjdMoUxDHzdUro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "415A4CQLVxGajmGKvEKnCPSZtAEhgx3KQBWF6f8rjXWzobbnSz8J9XHNZvLa1v6mR2LCHRPLLRNgWdjUpyM54zdW",
  "key1": "4faHjsdxKQb69hjYmXcSPHUKhEo1mKQ5uUtCxGKazEJ1TidqnmLVMj9F1nSuh3n7BH4tgx2wEd9RJRoh2q1FZYur",
  "key2": "3g3qL1dmLpgTtQ5Vm4ydMfLpL6jWuBKKoiq6NRoj1YdCqGsPKyUJcavUWEmsr6p489ey9c42zmahLwbd8GhppW3f",
  "key3": "4Eiqpmya4WqdCHfvajQWC7eAsYbKYjW8pTwfcn7toNpu5d7uNC8JAPqNngfbFNjLW2roCEFQ3XHx1qrJajJqkfox",
  "key4": "4GZQgz2UBy1sBjv3JfKMGSpL8ZSgmGqnfyBnm7k5MLKYECerSh43yyPP5oUs8F3hPTwmCi79Bbx1PuGzwDvBVLhY",
  "key5": "4BUVcqobTPjs6H1dNZmJQR44iNJfSVwvbof9GV1mD6AUUQzfBnN72oSQUgLmo9JmBHx35RR3F6hDBCPntLRMvJrM",
  "key6": "iPZS8BhMdCAcT4Q1C79bB3VbGXiaNCHwhFVwHvywQ8t9EWsBr3sT6bRhhXU5txFxmyyqB3bFx3mxrSF2m2YVvGv",
  "key7": "3EwS9CF2Eu8DvHj4xWVr2qQuZLUpJQpaYv69VS5vwa85HaXxyJRBrMTTdQABUcT3XmrbfuFMfGqshcvoeNddCFxP",
  "key8": "2gkytYw9hAMWi698TDiewCuaAwhbTCif4bpQyeCZnqo4GEV6XcdYFTgFcCRJttTMbVykXpfgdiJqHv3PSTNm1oLT",
  "key9": "2FxctgujSza7AY4R28jBkNZHyjjSFkVUkdd1oxiWKdPzDKBdcd4KXQWRRAj1GtSxFjpakmc3U1XPwARcG9m2ETn7",
  "key10": "4fmvibWLbKY3dN6ih2HbLWbXAJvN23MkJf74wfQd73CtAoBufE5V5DbQYsub5tk8ZF1k5SqaciXk8wi5vtEsYwrC",
  "key11": "2xhnGmYDBdDNjEf73dRDufSX3PtHAWP7433foegg8748ZgundETfQT2Bm41ks1usqcn8wHbNFZuD6zTVXQCxNUtn",
  "key12": "637uonkv2DQHzzr3UuhkksLeRqMUvdZZCWQwSchdtZhZskd6wM23Ud8XgLcN8RkqqoSxkhKjXg2RzW9mTFLBrwew",
  "key13": "3gAiepZ87zmoYJjwXz1PFFWDmRDt83hUc2tBsSsgPMhS7wZsPTCKGtYTNUdxqVdCRHcVUA3aZkD9cV4V9T6hqynw",
  "key14": "61gDUYCUvj5UoQmwRQvKD37cMCn6K4zuqGg4rjPKkDhN9ejLLXTxviBqpvwHN92E9FPiARtEedUTABznoToLRNWL",
  "key15": "22Nbtn8Fp7f56EEZp3LGRWM4bM75263higJvg2iU44YmSZ43FrYvNtHVxLzkXRzFkXvLRPdDANhUUT4BGW6crmNt",
  "key16": "s5JY2KCz4n5HjPvpCQATNrr6DPSUShos2zDqzLxg7EQHGxgXivHwFJPB8eLtAVd1a1kNa7qR2myKMcYV4XXs3YR",
  "key17": "3TdxQo4oEmmr3CdQjyxwoc3UomZx5SXAu74f9YUDn9WJSbWio5m6TMU3XiWy2VNk68LxCRLKdUY1ck1zN4MELEoi",
  "key18": "52vypHY9Ct9xdNZreuTP1B8GDxiCf1D9QHJ3VKyqbdK2AmX34j2MoKHD6p4LWB34dYxvsR9pCorSZq1ZnYkFa4iP",
  "key19": "3zgKo2NHvzNS8BZjiG7CXpiyKg4EZL2VHjLTZtwgtLmXSUefy8HCZdprqqLZi3ErY13T5uScBcdbANrSMA79zBJg",
  "key20": "2RZitfJE6zJY326SFKzQnvbPXTnQvQwMryaw24fBoxj5nBWV4gPaDyjoDMepRpjo5mxqYtC2RvoGjmrLGqYtuuix",
  "key21": "2NyYyMKaDXdgYhK8uD9AErjTJn2EwCxgBkXEgUbjrZJRiGMNMz1H629v95V4R4jY2rJT1ANWL2TMbwmdHr2aVNqM",
  "key22": "2fWaadY7RTtUJ524mPWEUKQM8J7cHj8WPC1rodbMuFSfT8ait5VEN8EsRDaAeq1JscybMdqULWDFbGWVmk8NpPx6",
  "key23": "4BXCqaDFFGht2ALW8sbcqLSaJm9nQhPkHsQ7oWtfCcRJqhw7UUxFWPG8mYDsWQXchFMTkxHZSRKPX342dEkUapA5",
  "key24": "2HKCc2pSgEXCj8sjjG5Dx5czxZJrTs9DQcoetwCcKReezXxqBvTmrtXMGgBewu4J5JKnHD8k7qs9TBt13V2nYMZ9",
  "key25": "3YV2YXmxgveWsUbVkT4hqssn7piwDWARpg35LyQk14wjtpdvqRCiEznxBQZdWjbomqtfn2FiircYjQD4woeNp4o9",
  "key26": "43HRsCLDRqGWUQftWnXDCtkBwkcfXRQwBvPKzHqSHXUXvWUh6s4MWviwCRGYSFJnczBsCaThwiuBfixdjVHYHp6n",
  "key27": "2MHUcFX8hhfX2KV31cdnRCzhfmQGELcEdfcfBwDpiT4U7wNtHhtEAdsaVc4q8rUcc9s6Wcm29teSAQdyrjZyAQ6S",
  "key28": "Ww9opcyK2mtTV61M4MgriFpG7dUurZj5DRY2JfE5Ueh5rda1ZAFohcENhmoAdK2qekbjZMXjanYxL1j5waDQfZg",
  "key29": "5QiFMEm738TYLPn4BmwLrD28D97BJaGgBwoqVDnUQEJqWW5F3ZbK98TmG86DizSj6q44V9WveGy7EVokropUfTGU",
  "key30": "4zPiZVfdKNY68F1gmUgTRUDaVMJBQWY1xeMURnJTU5ja2SpSDG5xFgFXp67YnPz4kmChaibZcevpwH4vdzP5zX9M",
  "key31": "3noksyTpqDLE3Axq2fkU9cYNaqgaDBSivV1BBKM4X5179hayruDgbH9xU1d7KHtt7LPv5Q6qp4TFbCdHE58wS6yG",
  "key32": "532HJvrBSDh1QvzBkKRDGa1WVze2vb2whQ52nKcpJCbp8wCpRbX91wjj1PMvdUWPLT7CHr4tt5ZdkUkoaKk4EF33",
  "key33": "2BnwWu29BDTPCqedBXHjXYGSDUXcBXZDiy6wSqqGFPGvowsg1SM5Tmkm8p72wtm7fHmXG5hZwiyn6G6fs36NVGds",
  "key34": "nSHiAmQfUj6P2yJLUDAgEpQK8qvNXCDd11NtRsoYiAxaqayFnYgwgicHRNbwCfG7gYmXFZf58mYGTsJFQHxoM2t",
  "key35": "2zS2KpAf6EJXNEaPDqXGhHNqKMx2fphZG65ijDhHE8Gft7o4gs9KDXatdcuueaGTX5LcVFVvMtbZsCPugKcjHLzy",
  "key36": "9H2Dh5KWFSBQjEbGm4gurb5iSR8X7nsXiF9TPvvgunHL2AQeiSXKHdZLpSDr99MPcFyh1s46XBW76Q3QkpC8uWq",
  "key37": "4GmmWoRvX3W9Epm5eJo5VUoVmp6YUeA6CEhe8oAQu711LmMEMVvXhDZDfcYhCk3vjBcdgyiUsX5K89rvtEEckKaz",
  "key38": "5srC9t3w5neCX38WXm8tbDpeV7eExuh5P4Qko25KDzGfutdi2FxN3HsUQnEpBeqYWsoHBF6KHYdKqsN4zADj13xr",
  "key39": "2NRb16jdXUKbjmadhBnYTXEJzUtt2jsu5b3QvSryUv8PbTog8UqeeJrffenz3CYR8UDgGmFaHQYndiv9yFKdNiTo",
  "key40": "4DwuhcPxz1tPi9JHeubvp3uffgcfjsfbmdCFbxca6sJFskWSiUpiSdSNxagfnagE34EfDmm8oySP4PnTt46CJy5M",
  "key41": "5PE3bVt3LitWDmQCrocK7XL55rbLNNswvbQXdN2JufTXFjzt2fcD4dFvrPJdt8vjctuMayScZqJG7x8kevTj1z6Z",
  "key42": "586t4ScWGSXXxEW9wvL1ACPYDtMYhTaUYRcWeiW1YQ6eWeNtge9Em1mYAxEW8ah18DyDjmAmwKk3YMHkEP491M7s",
  "key43": "3kag59Xx9z2CyhpYqshjCQcuADx6oGcHHT47hmyADpW1NGBxBdbigX941zgBfspJDfkK846UwYTLhh76QtiZfY3w"
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
