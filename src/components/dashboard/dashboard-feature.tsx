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
    "5dNredp8bYPiusUgVxPAxuQrYSTkwJzRxDjJE9pXSMLeYWqtUCeWJdEqqMnTRQrsA2cRKpUzYWQsaXnWk4hfexmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sd9HF2FQGKKd7y1QZJxdtzxMoN2y1GLRmDvLqc9qJZVL6PmNGnzFLBoikm1cpPUUuzntSXtcANEHHs4Q2aZrkM6",
  "key1": "4sCbspJMvnjqLzXuTrUr7759JkKMcrjBX76aZeqfwwwp4HrvVHg5HXXYexEL41k1pkCQfhvfDskMfCWJSQiW8YeB",
  "key2": "5eKGhGsYopvu3zNiFRbCeQ1Mr6VputnaeEHHgPCuKz1QhgmDgaafebCdpwYuFHaeF3Xa3YofPJrGFWRFKRsh1tQd",
  "key3": "peW5UmymqS171J8g37c1WRma3DBJHAHMfpAgn3Wzqq3nSWJR9re9rLWSAYBV8z9MVxtRpLi5jSJUu7C4HVGeWM7",
  "key4": "2naGzwnxdJgnydZgd6vfe6dV4ciVfBxkYcPSqspqZPy2CLxUwkG8DfB4qgHBWkQATqXDQhn4i6F9YP1bHrTgnxMj",
  "key5": "62mpWwBVRFbEK7zMx8f7pMTUzM58zHyATHG7ezJPntDzNPMZby64UvAVuXA4jX9fNjWbYVpFkzavQ8pLQp6J5ash",
  "key6": "4re6CjmqXUUhF5j3d2zTYqJRN7Cvbj2nVAn6AQm4JDtdCixx9WUK5A54PurmdMLjgcrCtvphibDJ6B7AyiYFE1N9",
  "key7": "34wGaCu6DPFEMCVGMmcDs6mvqz2vz6FzazeYmpcWbpPjeUTJksqoohFNYaDsMyRgM7vwLBgU95m8Eh2AZSTzY7xS",
  "key8": "5t7b5ch9rDE4M3iCUGRuwHj7UmAdFFZe9pZUK8pNhnDCXuVKGwbphctsuvv2ci8g6oQ4xBz9hrbV8KnZJT3gSyNq",
  "key9": "4ZZWtnmGDGHwrhAvaB9vqBxjnJHDh3ncntyAoewWWrsY9MALkASwTPyq4r2gdKAJ51dMe5PTAYoLgqf7H7p9HbJD",
  "key10": "2Md5yceZphrEqye2Vnh5YMHDSMZpVifqGaDhcrqX3GXVQJwk1F6VvjDNpUN76XK5BiSo5Q55AfejNrNQmQ17sCFz",
  "key11": "2Qfr31ZGSzsdq6UYnV7ae9EmoocsT93XLW5xH8QAWc5RNsZnpr2RrePsLyk2Zx8d3QfcmJeg8vQEwzrHtnfs22KP",
  "key12": "3e3y8DYiWZb3cQhFJDiCf25sKxS4cZtpDsfT8jFvaWsERXZ1Rpy52G4LDJg3HsXrzeQSHZnSJYNSBDNvZfw4migw",
  "key13": "4eFDpoJLUG1koKNXH9doaBt1RZtRyQqU186815EwZA5zNGwfCq5oXAGq4DCutGfXPkZ5Jn91vmZ52Ehv4SmgmFw6",
  "key14": "55WvTXejJnx1v9ZRmTGme9HVo9rhXFC25HSWdhQUHQ21BQmf4tQ1AxFSZx1tKjcBb67yUTEF81UFfQakcwKrWzdb",
  "key15": "jTLdyDEDkoxtd336xJFHTuT42AmjpqCsnVr7KxBLy1UN5SJyMUJ35zo9GBfKpSR1GQVCX5jVkiGVep4KPTtUL2L",
  "key16": "2E6BYfsojrgbWeh9E4g2ysDuD4CSEqYT3aXpgEzYcsJS1rDMrmgyMXRnm7cdYdn6DNyPPV7xZq5CSo5X1Ayra9aL",
  "key17": "5pPVieP1Mq4FRGFZYXohuFGk8zuJ3wTEe84Q1VsCUgvQ9Ae4AnDRY4Pmn83vw1U3m3tYG2KA4G1toRQw6gYbnWbM",
  "key18": "3Sp91c2iATFjfs21USPyZ5Pta8AFCSAh3umFiSyEQctAZ9JkgxB5nUzhv1acKDBSg2j9U9zVoZDp84ijB2SwM3Sw",
  "key19": "2z6BqPTuczsyGtzdhUU1sAUE9rPZHAUTbU4U3vKEBQQNUxj3KX8GPxJKd6sPz3bCxESkuvh8ifs7Mi36KenTsjoM",
  "key20": "3hB9oz29baYVQwrCKjzLJoun1UxEPMSJSuo1qwTk3qHreLzVN6sWnKeeV1G6xgMFTtwrJvxQRnBGPUtPJg97xYgY",
  "key21": "SckWPxRhew5RWCfuj8wDY4ooyeZAzXoG1aDABLHYp8StdjgWcs3Axr7KcnMjLnPgt7cbGqCeHk9MmAA2MX23pJW",
  "key22": "4HUVkEuhC4V2iJq6EYDAqBHo8X6Bq8tNqqnfuNu48aWNJKz9h3pds9ibz3CKDvEUKfectSXQMaTcwzFzv4wTCSoQ",
  "key23": "3VwAC1QnAEmim7kqU4dC6bfKLrhyKDfRFEzLSoubWoLma9zGp1biccrLVCLN9fDSorCPxwt8N27rAXVKhjFQUzbJ",
  "key24": "47Q8hsGwgMZRvAx3CV7twhX4HLpqUPYTi86Xb3H5bbfoWJu7wSz3A3XQHQMdcjKmaRhyFcUbTsCLLF4X7Yznxi5N",
  "key25": "zmD7cRGKs6Ap84VKemqrYNBjsFrYkfk4r1t31G9DfyVPwGUzzc9AczdjDWbbQt9ggN4xqLoW4U7mqjdVGcj2JKT",
  "key26": "4xPeFXipC5bhaMJGaaUXqtE7ZYrkGP915fRVYBPpftBPqE3jU5mU3uExZnPZuBcPNrwZRQL3gfQLhHBXYdhWqcRn",
  "key27": "2CDepag7kJuxwxCatZt3Ji5qfeCteB6sSveZv5Mie9M9pTDrfANKnUBQuxmUgoUWSUN9YZkpiWdpBgFnWZDkvWVn",
  "key28": "y1DvvycwNupLQ1EqPCHsj6GTtoiJr7c4QTPWNjkSQuqJH1N9FchURVJ8xrjguJZBpHf7RazkMXkgRiw3Eff84yp",
  "key29": "4KUrgjqdniaxDL1mkQ68gvJyem4c3wwwY91u4yTBdEeUcrJUTTg7k37ZBEtx4aSFFAJjTr6Mgbtbu5Jr6sB6jA3F",
  "key30": "3nFhNmkxL6AYFMuadMVHc7N3w172rN9yWinoXVP4XS4ku6uMWsuTxooGymqXLd5eY9Bb4CiNQUwX2qftQaPP27Zh",
  "key31": "2MFKoqxGWjfFxuFUgPvohj9voJx1NtEwArLTmcQe1RQHUpf41xUJgV8E8S3A7FyUXEBSgqcrXGU3X9eGdSHvNk8b",
  "key32": "NNGDgik2onupTx3qTiobp6Amo4i4dUSjQVLBuV41inRRVJF1iUUfhUPCDng2db3hiqvDYr7TuTMgm2cXEwc9g9r",
  "key33": "3toYgUnwAYvvsjACkQWwDeDwn9i5kMBabLBN9dhjTGCPFMAhy85ASHUWCzHW5PXhaeZA3oyuNrtGGno9YAHJYrbE"
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
