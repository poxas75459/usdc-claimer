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
    "2CjaTyhtZo2FN6gK2BQzEYhtpdE5UtMLGjbuginBb5DniqABNBod3xLDb8bSeGEsu3Yv9oUBKuvuUFh95UZeKfeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "znhRaFUCPYntME95RbzY4B1sWdTkDpZg9xXnSxLDVsFeBp4qL4PxgTjieh72SENyQYj2Ez7ZbxxTVi8GhAm2JYw",
  "key1": "2gYKwEdyFa1BeQK98ugfxxwbAc8ZKCbtFcdbWkSVd2AX85iAaD9owgSMKJJaBvRsmPpPjcSE1fDgfFfFaDGrfenX",
  "key2": "3h6492r7X1BwqkKgagkguXVhCwKmTHupRoEQ8w7G48WmbEdipQAsrXyXZr487qTinFRkMJM5DZNkWPJf6mUEaF1Y",
  "key3": "4menAmhsCR1kQgNESkj1CRXGvQPX81bLMzFAybuMPnRweMJVTpZ5yhGufXajhGRZ3VTXGAvQK4fndr2GHbhPciJZ",
  "key4": "y3LRs5BBiZR36yEiptYTLBbLTDZRR2Sg2b6RWfH3UaJssH5n9BLdLjXoTo6J9xiF81Psx1uhAEttaB17giHV2wn",
  "key5": "2m2K9ajSpY4GuVyXvGPtthk6zUnXAQ17yugRhY5XW1CfcWqzG66nRsT1jGKX1UytZYox1ZobydLeLwEgsrmAkQfm",
  "key6": "hV1jRdyS4GDJ9NWHtjndR3ni7Y1YuGpWuxDYLwVAj1hUKzkf1YJTee5EaqgBnQx9qzh5jhbi9xsoGmQEJPPMbrk",
  "key7": "4fzYwmG3fNNrGt8ZeM6qCQLKQSL7K2wXjGxkKP3FAaNx7vZXiB3kiSRTYmeU6PUgNsU2RmN2pmv5zjBAp7S72zzp",
  "key8": "2pv7hv5XN1WBiNBJKMFo4xSp5fAN8qoJhUi34ZSQvBdXWzA92qqPbcu2cAwwacjUz3uXCjoQMPkkeqdnfwMiC6s6",
  "key9": "5o9Y4Urt1EoUaZqsrE67obR9HNJhm55CZnjUCxfN9jEbKMVUMWNVJ9AzCsfS3p8bBMdrwQohzwFnha6F9Gmr4oV3",
  "key10": "48LTFEDvSrBYQCHYktcAUyfjpUMPSZWxHh8V95EGqcThuTF6zea8y8GPWmdVJovGeuwBz7ocmGDgYhxLVEKcszrA",
  "key11": "7Mmtnj2HQvmqmQ1GkP5auRJHMAi2vD1CkVgftoUPYg4wVQEVa3udfjChsdHWLANDiPuSpi87LLynkZgiTfdHyWX",
  "key12": "5U8q7BVN9RjXZVYbi3V2tXmeamvycmSDhfvJd9r59LThfcRPCXF2SzwhWf5s6bwqrnpoU7Xc12Zthmn8VHYdiTKp",
  "key13": "2xL4ekQnBLcVaFGArot8kGYJHpFuVTx52Gde2RNkKNzj3Km6iaCWy78oo6haodM7WJWUpHpQT1PJScCbkmEm2e85",
  "key14": "2GqrcPkBgVAdCCVZqSbEnNimvMp9RPszGwdrRbo4f7NJjc6SrMEeACpxXLLvA3FXynLRxJpdpFG5ax8iKzs9bR9g",
  "key15": "2zjoacEMtMszxSQJkiEy64SndLBbKEFhhGxeLryzzx1r6VNyggybxqMV2TaQVLzWsBTHZS1NuBAMjw8JkaTVB8tu",
  "key16": "5QbTA8JH3pWKzRJtFuAHvWMnXeEQBnydqUaoZ8Dtz6yfUxweDhX3PjtkLhzVGAf7YrCLPAZuWMZiYxt2EEGtdQVX",
  "key17": "3w4pmNvBbJDbKKFsfFQ4CuxGyuVaQvgsCQJvZiR9JvNntwsD4V9pPodENP1SJiotLJfxPsyLkiQLnNgb8arXLQYS",
  "key18": "5n1qkVTyzb5uYiV8DSDw4pka17SpRiXn33a5ec6oEMMCPwz8MYEkZbUKs6h2MLS9zwm7kCuXc5A6rLJxj2wnnwEd",
  "key19": "27iuBnSogk6tgpv9DYZVRKK9RqnPpwEwzhKgRUkYFbR7XytmSevYvyVLni8QXFg3sr4kmsTB7TpJwep6SfnsrExF",
  "key20": "2GPL5oCJYtYa83ASKbtE3JsHe78EtChGjCwm7STgFHe96JsEi81YjMGFgmowkcsu4fUWWMwoZEhfub3xEgdUXiU2",
  "key21": "XHVsBDXYoUPoGBEkjLwsDKm86UyH8EtNdutSM5grgo4pgJ5sXSQsDV8zFkT4CRzfejmPB7p65rWSvgNg89tjED5",
  "key22": "MLYEkFmTiofjnFLa6p6KAvLTZTrgg5gWkVXHdth99bogeKxaBGs8A1WunXzY8YdggQx3TPWoy6YoesLxYNaUF3B",
  "key23": "3tTRTjN29dE8tb7uq85ejjQeosz9PEYqnwmduEZZUPLxXRjWBDQFdVazbkxLMQEmcY2yLYAkQ2oVuZivYrehMMbW",
  "key24": "2HMH1EHzTmbbmQzN1pxpWB5QPJRkFCE8x9VXAQ9WPiYUjKRn69uFegfTYqj59G5V5VjG9qR2WqXhW812uXAGL3F",
  "key25": "5nWmGzFYxEK2xkYP43P5YV5PmV4uyAFXi5L2TQX4ZnjVvXDg7SzmL3DiFWJFxP9LcA22xt475VDBKQvFA1VfkWsf",
  "key26": "4SSTJbBRyTQe8dYqWjaqSoXs4ZcAanuFHaJxk4GHx8rHoZm79qSSmA8DomRX1tVaoiUmeaMJKiPkpXwhDFuhKBaK",
  "key27": "2RHUQ39KbmGh3qWjkKwX33XPL6iag1meE2UXtGJVnYFLfptVMS2qSXmfZdFnxVa3TkNjsB7E5pDoAD5XY5XXBN38",
  "key28": "4JFkdsPDzMNjNAFgM8UzcMqvAEc87YWF6LAJTJACPmhcyHfF4GgwEYg1RawF1b8bZ449DgAK1L3Lx7ZoNBuhsnsh",
  "key29": "36W8HkNXnYUgu3bGKyBrTuAVkJvRe1adnFXttLn7DRPzdq9KUqpp2tbzb3VVqLZJiL9ZdPiuNN3SpPymqfniTDk5",
  "key30": "2urCDQ4KFtaNkMPnVrrUc6m5bkADnZvy7fEXiSuYsjFb6Z9endwXqSD3pALB5kEh3eY5AwRnzWRKm1vQQ72tm2LA",
  "key31": "5bD6EJ34MUzPRbEcmCS8sVqSP5996odT7xJs4Hf5QUhetaqg3hoeLTU6HMd81dzyEWNiE5UxDTa7HYv9unpVoMgW",
  "key32": "5aF1hY2xZXfUBm6RHUSvd5Bhaofjy3v8R3U3RiwRpdPq32qzg5K8nx4qafmxVRn7QRv16MPAwme1a54n3SunQyBT",
  "key33": "4WCW8pJvVdyhev2WcEZJVqARxB8nUK39jMmUTSZHUvnK9EQzK6mNK7bg1qvbD8q6bAKZJSM3vtvwiYmR6X3TY7Qa",
  "key34": "3wF8W9xsvd9cXTtp6HKV4WtEkd6XT4LTxFp5jHrE3xCShitobBswrgY1ug7Qr6C2wDS4rFfYiRCDnHhZcwGpZBCB",
  "key35": "4u8zoftRBDUaMQqqT6Bi8d8fAwrj6X5RCZ5F2h8ZTtDg9bR2N3S8hUHKo1Nq4PJrs8qHhw7CApV4gXeqB1PAkweP",
  "key36": "2ek23jyHmny76L2Z1qvtNWZU5YbxCN4RbpeP2Jzb5cDKRRC5XpZuTDyk8rtVLKs16yGdHWdRny1ghQndZLcRPnkf",
  "key37": "42KbHSqCh9YRv2pA3wuD2ifdpLj66GeNPHe7LQZffxF8ir68TQHbz1sw7cyyMeGqxjEAJq47xxkupFW8SiYc448s"
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
