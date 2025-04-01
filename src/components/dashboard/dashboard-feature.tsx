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
    "58mHVQoGqQyTQjAtpRAvmWP6FPHiFSxdrH1mpCN8dBodYzTMhwPu7X6p8i5ubY9jDpFh2JbCe6Y7Y7JNoUsWgv6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ne7ecTKuivrEA8eVcjvULNMUQAwZXsfciYN5wbta71hAWit9YasunZGQfYCcKUgbMBtmuj2b7P1W5jKJSFRS3b",
  "key1": "Y9as3ZXV928mmSo9dMiu1VaGBahjtJXonDGQxAhucE22w7XGcEq79PBX66X3NqdQWeq2JauadbRSoWcRAVThCfq",
  "key2": "4F77fKgCdjxbnh7nUSbKjCHHjiScRuNSKqZznV32RbbaUvYuvDxYzeKSzJpTAUt6fka4MCsDWxLy4qXnEp3FhUG",
  "key3": "XVKHTahLqn936ce7FDkRH6TQu6bKLCTiBbUX7hMe9Ry5kFmGF9NCQhwnvWay2qYAXdXBc8sFbxEwq7DtFCwD4BD",
  "key4": "123WCzkoCfC7cz8TAEx2aTzUfq3Ex5c24Ve1rVPFH4sFTj6QEoHLKpZHcMqHLhuGnNJ5QYah9HW2fUaYSeraee7g",
  "key5": "5z8C61V3cm2PVWpxwvrZPwr3ctUQrGkuDjBqGTLd1E6ufpo88znrE7nsM3SAt13JmHWFHt4mQ6KDC7nNd7iPvqUG",
  "key6": "2KTx9yR2ySYZxpsNkPaxTGbYJaWiRVGWHfGiFC1FDm89NPg76EdmfuPvDXBJRgsSyDQnPs7aT5Eo3Q8cpsF4p8Xt",
  "key7": "5Ce6mApNawzHjQaCtEUHsVi7Yfjhs75NuJv7mCWJTgY7J866GWEi62Gsj9ipVk8U2ad5Eiu7Q943hYthNXfcGEKK",
  "key8": "46zfbyev7iGFaQkv2HgiquyU7qzDTedCXgXcNiKSgUDT8vXkmuyNdncVcAFHYmcqJ7YMgKHC1xyY9qTJq2DV7WLQ",
  "key9": "444YshwDfcic2M43RTJHGmeZRkRz4EfM8H2YKwiX2wsMtUSNieRWFj3t3TRk9Jgk6K5PRHiuKmcFVAxi1k8qtHVJ",
  "key10": "yvaVsG7r4dENFWnGoAYg1zJAuxhCgMtwhs7imjKyTY2mwT1axyizAGdTCK76y53QtBgud2XK4m6Xp5Nmqv29ZmV",
  "key11": "61LNMiHNqQMXCPkn1wP3bsmBcnJv4aeGE5X5RVHBqdwbcugnAoxjj7WfsCUwB18RmKqAhEfSm6tpYxn2BF2TjX93",
  "key12": "5edKRBW5iaTkPxQg3qmNphqWCxDkrxLMLHWZHCjiup95KMt6MCD79wGQ5tb1BwmyLsQfqaqdHnA4NvCyrkw7NUbc",
  "key13": "2heNDU3x6Gx3RUPZrFM7xnQZb9iRcSuN6cpu5JvDk2uT3TgdBmnbZ2BnTjwMPhM9PzPAesLvqNZk4MZwCzMWkm7X",
  "key14": "64jFMdUNyg5gWs4EtrChM3TSgSPmrgi2MDdVoukaawnQGde7ZfRtPHdiBuZK9x6qi7AzbrjKdg7ztw91A1mqLfBv",
  "key15": "2MakawVvZDtJJf5bLak8cNFW5Bbh27EnxGKvUrxAH1SLHayjnnWLS4HpzbKVkXi2KJqW3TPS8B1HU5BLFTwrbHpX",
  "key16": "5cCK9MhBtpD5TQy3xvPbp16zXSc56wqmcDpmL36aEKDgdqP4DKuqdwNPgFosJYwKGxFkfxH7dcukeuTqP5bPRBM8",
  "key17": "5kTdHhtNLpFYEb4Szh5LuXgPNqDdi34u5Jg6BSCmTrk5GZHGLkgEANhZ1kr7RHXZeAnqTLLWcZJvhjSzorRFExm6",
  "key18": "67BoxwUo5TJVBtWhNMPUr9PEXFb9JHhuSJqvq8akZqF9LzuAAmA3LsGLQBxzuPAsXH2UHLDzmpRJrZjPB441Zf8Q",
  "key19": "2xKmiUA1YB89Ne9Ed4fFRHxtpxCF1ciUuFdaTgWGQWgB2hYuadqh1bFaLZrWbkZdJHxaVDR4mqwArRdYWvqr5DNu",
  "key20": "5gB5SWSDMitm2bupyD1MpQgj2xQMCBUA6BkLYchDytRqgxfk9MsRjk7x7QnxerzV8HVUDHz6YA7bGC4HAa9VMqRE",
  "key21": "371Wy6wVDqmbWsV33xf1vYhJj9DBxAaatYGPuNfxrL6WraZCqSMiLCGvY3tGQu66c2vbUYeDhyDerADajLiWkQm7",
  "key22": "3EXuzb1BJiS4UL6YVz3n7L9cizF9CuK8xCC1QctcWqCikYrVk2iSThbPqfgnY4xfNee2ZaLYxTpK56E8FK7QHvYQ",
  "key23": "xhkTJEc7KiBk7svjKtU8UNSAeLvxKrTxBi6NaWDeApA6r92qSWPfB6X1qeatxehk8Xt1mgZGxYiahzgtzhye9W4",
  "key24": "4AivF8fTRFKEX3UK9TtoR67tvC1aBShdfm6GCvPEJbrFz8n5yDWYfxCC7a3YkjJDHiVReBJHLce8u4FB2MmYGhU3",
  "key25": "4xQ2xdvZZtyXzZH141b414AZPoC5rKZVExZTRBvEJSwAFs3KxPaXrMSjzfnTdcMscaeuhumJGBf13KmTGCGqtarA",
  "key26": "HjgpLZmeLTYUh6ZtFLv9D24Qwu3ZHijen5GSbAswjqZE5YyH8LNnvsYTodv6JwFoGUt2XUphFTWSdyBCLFKXWML",
  "key27": "ctf8CbSqZpBGTAsD3eLPQuzsLGL41HJci4xivNkuxS7rDocDuquJY6Z5sV6qzpj2tdEt8bWubD1LtpxT2pBDbP7",
  "key28": "4h39WpiNRk5HJz2Hy9SMwzQn6u6MPtu9fjfNuSvrV4ErdpYNkG5bYbttqqCWfK612JxEiXbHFrtuumhjv1AnZLo",
  "key29": "2j5A7t7sFvXwNXHj5uCepGJNWzuScHrvyvKuStcZMnNB7MgHBu1bWqvRHfvcbKWm6E9SC1UmfFH9ZW5aMFqB7RaJ",
  "key30": "3bYCaJKjdLZhywEyptMEEbsQY14j2t3tTwCG7NWua2V3da99vQhCGmzY6WPvnSJcECa24v1X5cy1uMDHByHUnunT",
  "key31": "LjdQun4ZkP741tJiFJxYgLGu19SyJQMhNKnJzXpwvB8M8M4AUgxeMxGRyZwSBPTAJLDwgReXLpvqMSFGaCvdN5T",
  "key32": "4YZi9kexKC5vcRWmJhVt7ZWngYCSW5iA3xUeRxetjbLZb2kBw19sBZFMWmkYLqYrKCRuC7X8pTqEnSuPJcX3wwBD",
  "key33": "5sMBNo3xUc97fFBq7YHAfxbFP97DvKPcdEU1sW2UUfSUYGLZh54NyzYkQPUSBtxNTNPnXQnnJWvuki7FbXNEejLF",
  "key34": "4557o5iT51FkjDeSXtxJRv7yTiyoin8jgiqPmRpGTNG4A19MvYYUSnzoix4Mu4Ahdj8zac8vkNVb66jBGgeo95Ti",
  "key35": "4ifC2xi6noyrCoRY7cat1EaFDP8ZCRMitrQzMn8HNLmbv3WSttvDsAEb2pUKJujkUNzbSCGQwhVwjzqUvyQqZJbm",
  "key36": "67RJRu55b4DRKWcmW1tDMPNevLNYXZ4XJyFHQQbLPQBy7WBLaqcGuhH1DW9ECUJH3px1dfy5A7BqwfT4SqCD8nrc",
  "key37": "2pSA9eVquB8xux6yHRBwrXD9k1ZKt3xXuu9RzqjJfrQP9bvQX9RBLhWs2HuQFRzNek5pEuwM8fVUs2NTLTDRUNUn",
  "key38": "36CXaHkfzH4zS98hNMkVvUxYtMeymWHt3pwDNd3Mebyx2fPwUbVRGxvoVKUvmVWK7XAZAL1yXa1bUALyTJ8gP4g6",
  "key39": "2uGvhGMNZVX8HhbHskaBcKwN6A3imSGV1vCbvraawaUqQe2skT6RnjA54KYUrWbmHM5vnfw2Ba5cnLpsTxjkRpFh"
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
