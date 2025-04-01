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
    "5su4oHvya2iZLinK4B5LouUNnshj5UX48yx5YARimVNqDyxSKp4m9Yu3UwGZUad5nU4YA2EggF28inVDiTSAphUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32zgKTqiK7uiMnWuubzxPkq7NPUqby5vuxU52aQBcheafRb5BoU1VfTwsnuu99vrcU78UE4wMkcdAczjTrEYeP7j",
  "key1": "3Vbv7pNwoFtrACp9Arih9nCCLt98HNX9MZkVTJmZeAMzvnNySjQ2kq552qPN9RVdMfxXhyzY7eWSeFNNJpkTvfnh",
  "key2": "5AFH57jQNH5jtgvQfh6tTyR43HYErqb68JKrfJRZAkBdRbtLrX8f4xdTrdoCjqTuR5QAL9PFE5TF2RxvsnZBVTpC",
  "key3": "2QHB4jPWwDfprnn36S7tFT1S3YNZ5vKnBHDiaTUu6aJnoC4B5aAJMHstzNyoAHsqJpCLvUJ1JW6SVpfB8DD2VG9v",
  "key4": "2JNa3tg8BEzvrEJfVFQyxTSU6VNrKG5hE8DSvvpUHirtxLiZgEsR34kC1nz569vXUVRRJ6TQPoz6g45AGTY1ryQc",
  "key5": "2kHTpfxXBZKuNxwmJ5v4McfG7qVnaimW5AxMynKT7kEj2MqHc24kcnTsKfvjc1pyFDLEgbMg1J9zpSkboAGy3DCj",
  "key6": "4aLUQTSpc7iaRSasXSiwiFn1VC7V9cH8TviYTp8BNMXgS1YZzji72oJN4eZcQS1AEfhAnm8hWVDt1NhHTALUXJ45",
  "key7": "2XE91fA5oJZG2UdcvpeuYsjkicD1ekzZm7F1oE1REhecCGsaVEFpVQDtpiBM3R478uQjedX8sZVrJv9ruei86jy4",
  "key8": "rARDAM1hTssFtfBm1BvD17CjrwuK1oeNMxBMiWPKJec9bWXXq2nn4hkX7hSi1YzL3WSKKZGmK6aAjnZkNFP2ngg",
  "key9": "5Pe2kbbewYzMv3bKsdYgtkKZ7qsfTP9GgbpUkTqpjPCeWHXEm2PTbH1iyhJNtYxUdgAwNNKZdSZ9x3RHSyZvxXZc",
  "key10": "4M7ZoTbuNUjvNJsRtVgg7dprcVNPgpdx5ympovSjBYpWBaoF5evVsy4KTrVrEATncfSSeHVk6WkixqPFjBARY2ri",
  "key11": "hLCufGfRWoGhAbtC3EPt8KXhdc4CKMREMXjdRmKJJtfs8u4tmQKq4uKGrDvNep68tov8xRZb62NXxnWvwDcy5QW",
  "key12": "4ZHNtuyESLQtk9J6bCA2paWE7pPcg9VU6ftPf785Vu2M9YdkcGcHC7S1yarAkgu1JWoCxjGexiZReFBLRtNhKFbm",
  "key13": "2oQqDUsCfBVfyGmipqAFWGwY2vbDt3iX2NCyipJysmgk8uVbWFauiya4GGbna8nYM96CDM7txWpL6QC2GkpFxSiV",
  "key14": "3ESKhkaj5xprxKTUwyevHo2QN37XtcmtTXapZiMgbY9gU9eDFYx354fQhLpkPSX9L1JCm29qavj8CurKmwSHxsfb",
  "key15": "3racN7pGFi2bynpxnvz8nePCWNqgZrRTAUp8h2mdshi67TCJmLeq7gvTsPGWKNPZ2Ldi6bYJWTuAF5G4J5ZGhtgf",
  "key16": "4eDhrTBQyrRNsTYbzr6i8XeQQCTEQEfN32UesfPSRTHwAHrVminDVCWHsNVtGk7UuNvRALLeFn3P3vZ4vNWFSiFH",
  "key17": "2zJZnbA3t2cgqEQ644tpfcGa5Ba6pQz5quWgnGfnHNQhb7Rzmg5FokxqCGFxrxNtuT39mdkhywaRbGX5d2osCeZQ",
  "key18": "2qb6FqESezgj4dcJKwA8fmPTxttGtVNs2pHscpvijx8ipUB5rjrGqWpomWkGBUVVqksUPgoki1McNEwVBsygrE3n",
  "key19": "4SLSntPun6wFmCzywKdn9avgKHTFKjce3QbrtYVym4fDPPeSXmpTxhBmRXCD1M9ZL6Ef4tiVNVpULx1kpuDDfWGM",
  "key20": "jvCRD4LqZEHGbVys55j7FsgxYEegPpPcr7oqMqUeGLQMZC8HdKimJksf1rZwcS7CBd4dZ3qn3UbemxKnmQfhPF5",
  "key21": "5skpdPgVaDvATFkB7x9tTVaMcRP1RPSzhSwgAKpGf2YsrUqoGjA2bnC2F2vLSFeJvgfsxJfnHHw6hM5DGhmjcYyt",
  "key22": "4cr57eWuCGoZ4CepeLt4iT9BrpKfq7kT9FpkBuD3GsmhaXfcWXzjkizNmHu1WqRKjexJrfdxTPmh8cpUXmtrmNpU",
  "key23": "3QVYnTCRoYY99bQ2oyNnNqwfrSUKPcB2yyvVpjZ5wm9xnEo4QxxsaXXqQPDbCRALkGPtAb7j9BZT7mBuUURntF2m",
  "key24": "YrCAqxhqKN4LeHEHgYEKVyhyZjwixC71jXg8qV924WcsjDY86fMtdiFwjxqQVxNkAcZRYgNRUCQFi8JdhmNpbcS",
  "key25": "5MBvjE8GrVbG3T97Dv4GwfovLRZUhFZSyymRxQp63ydp7h2qvZ2urK48dx4pbu7zrp1CRsRAHVgS46b9prteEsky",
  "key26": "2asT66nxzVKGN8bjMpMZWrTgTeaPZS9n9eavqqXkJ9vrSoNMsL8b9APWeKMLvjsYTtWkqy3KQFoUNXNC9kuJp1jL",
  "key27": "5jXjWUV7gPMkgR2xREJ8x42yXZZWo89e8RP6rUo5neaPJnd2Q12CtET3Vbb6EnYyjPwFWpwLLeDJ2cWqsvRpkK42",
  "key28": "5L14gecsowGCe86W3U6xZgFxWgD6QzzKjmy5qTgovSEQTeyTQHH1XaAMwBiMb1TxraCcFBCZTVHTDQe7oqJ9tfzh",
  "key29": "4B9PKFCEUMtUKunVusQTDD6pTVHMQvtLCWHEzq9c6tpTCGJ3cZjip2myLkh5Lf2pCkjPWsqL9ZYF9Tra7KFr4P9T"
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
