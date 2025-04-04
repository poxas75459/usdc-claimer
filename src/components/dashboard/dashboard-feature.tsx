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
    "xJhzE8MyAuMrJvMB3rMMtqpVNRC5eWGg7Z4gtjYbrLX5bsLr5MARDV6y7tW3mmtUwAG46ahNfQFia19hgyesWoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "499iA4WPb5qTKv4RxKFtTeuHKGtsWfpzPhwJerUHPZfnJskAPtHmKPZYqBagwParCGVCenmqLDexrbGSaREQ3bqJ",
  "key1": "AqACTNAepahqAGWgzcjKwhTXYui41m5YKxys6x4G9zYJgV4F8pYoNSw5ZjEF2E8BYnbgqRwjQ55BH3rAD2hAged",
  "key2": "5ukZNVTuTvpQeHdL4JjLBGBeEz2XwCJj9r8vnNsxcdfUJdEFZ5MRLsrh9MKL7gcnWSLJcAyWrVKgyQex4KupgVe1",
  "key3": "ZfTKUt2GTrFr9FcbprSF2wEF5cf6xcZsr5S8tVzABvW9U3JZfX5gAY1Dj5TKs2ZBZ82FASg2ArGffny7aU4m2eJ",
  "key4": "Hj5Fd74xGMTpJFEdHe2rLBoRKF3eeantXTBHA9VHqDtwdrZGgo2aB5WxsbXA3epZPj2CwFwuFr27oRcgfAVa5v4",
  "key5": "31GYfX4HyBSNNFFtPdpJ3CJTwVk4rgikg1nRvF67LzDVCudWZy9VYYp2fjCzs2BqGz9bAzPyT8MTXrdZjpchj8bV",
  "key6": "414xjEUT7gSbWwRGq8hBRRzPHTJswhtWUKRJM3xkGNPbjdiLEkGtjzhMqHNScTTWWHn1P9aoAQtHc3Z3BaciBjcS",
  "key7": "4FNRwT6UraPfBFVFXK12Qv8D2JCyCVKovxEvcgW7CwdZuBVtyHPi6F8sxzPZPCspQA9ftAUXPPND4jcEeQWV6G3J",
  "key8": "3eAD1wzY8gAMhetiyXLpXnWfYjgA5vz1MfBoB9tVhKUA3XUMDmCt7TrLqoK5BJ1HXtvASby7f4PxwZowW8wg4UPD",
  "key9": "3TSYBCW2V9q1AsM9ZiohzDgptyUGxkxoezWwFpLb98LbFsP3X9r9NQFwtbiFxmzxjYrjg6fX9sxTznvcbXzeMDeW",
  "key10": "3y3gJAfSHMp4etfbHsY7D3CjfzYP8mqJjZaamxCyTWdinTe1pcMSqDGK99dvdhr7dzjeNPJjYyw5pfDQmmziQPNs",
  "key11": "aBUaLp5V9rZXeBMnKyMxoLihhMq1BDPafvRUYtEws5a9hE5pMj2DfJEuqYfsKJXFqg5xYeBGM3AEHDQpVJawDPs",
  "key12": "3re3BzmGqgV9J5Xz9UF3JrwEbugiSXvsGwhEsphupitZtkEnVHR4uxbCtvfcEpGk3SeNGYMdeotuqnNYNf2TwNYm",
  "key13": "2EH14AdYuXJi4R5AuiLRtM2ZrghbFzAUyC85C65HKpMHcG5ddhY7BJ82Lztw8juZ9rqskLbLdFR7KQvmedVquuSJ",
  "key14": "3jDM3hjXbRPdJ8kggpFsdjYq5axCASSY8zFRWVWvcGYFUNE9wj7dgfbfzCDwa5hapmDAULZrMAUwq6nHyMhU2U4N",
  "key15": "cjHgf3pYzcdUYjMLZdPjPjdZayxF6i2YR949kT9PWRw1qSQ3TmxjDR6c9m88eXtiMdZsWo8L9J2TMw916tKz7Vj",
  "key16": "2MYcUgfECTdrsHNmbmd6Mt6tqLv4bFtmjXNnuu4kctQvsZETcMZALMF7t3meK7SToJUyFpuZGqfH7913AeGteDw3",
  "key17": "5SBF2qph8wxEVGwQw12MBD7MZry2GiWVu2eEnD4tAEYg5hwHVnJQkPxrfxsS7VfF8FMWeZKSgMza53yER9c6HGP4",
  "key18": "2qWxJ2o5qVhpemNbKAZkWYwoPUJJEfXZp8XVASFYvooP5yVKP2Xw5BKy39pPUxtnnhZMCyiSRXoYsajPDtNFZGgm",
  "key19": "3dgBFhTeJjeNeaYnCZUdiYcPCD4NXnSvL6LLDDftJ3jD988VvjRGNk9gM5YyUDnYzUix7rMMni9rgvbWA6rJz2cf",
  "key20": "56oPemcUGE7K7UvtHHtfvZc3C3gAHw7zfNnBRods8z5p1ACyEvhgbcG9YCmUrKAngQFXtJprSZBmKK8PozZAaeGf",
  "key21": "tFBBqnVGhKwuj8PZGEwjkVwZdm2uhGZYJe4E8zfaZuNbSWKoA2RL9xMBAu4fd3mn8win1s1gYk888uDNAmcqqEB",
  "key22": "3bsKnrAtpkDoedV41fMUpY5A4RjutBSDy5JkMhCp6Qb2myEszjGYiNh21USBrhpjNrq6tCWzmC8kqB3orNiWmFTx",
  "key23": "4JK9rbEmdzRNBTZHTZHWtnqTBpALEuEabb2KTQJRKefq6UMfNbCGbq4L32tE8Jz47fHCAonNVRtyp59e2XTjwJZa",
  "key24": "5rcDUP5ZxXour386XYUVDpNDuZH2DvmXHAGRfUkPtudqZrGPqJJAZ8b9RrKFwZtBxk9qLFftUtpjpDyhiLKGLdK3",
  "key25": "qvZmDfy1URU1yfTWktZokRBXJrFE1WxV9Rhz1hPqeRwJzPeEV1uZEu19rfPcsFBzTcV15pJAa4oeG65PvJouVQC",
  "key26": "NGKDNx1XAUAKPu5p7vaQZdw8ef299HH7KqhuWbpxmv1BjrbyNTWeVnRdVeRPeRd85G46fiSV6LaNpdM4QUMiJQh",
  "key27": "cVLh5cPbayzj8p91FyZ9otNawjhUeyfU5wJw6pTffm7xd1h1xLJ1TNYdHgdE2ddCJuU2Vp1iebjAqMNMs8VBrZc",
  "key28": "5yBHdcJGncqHLq55rmuz8hdsrN7o45uaDSng95Fu4r4qasqNzaPwWGakxeGH2mXiUJVUqJD5cVj3eToCYcFEd9uf",
  "key29": "5NCR5HAtCRzukBrx5XxNp2QS2dAEB2FopGoNEmgxdcgDmM3TSSFGyidQw6egLhN2Sug6Mi5FcwC83BKA35LMUdKF",
  "key30": "TRf4k2rTLVPQBRMDvTHpqbUgF19zNSCoMaffs2LoDoNXrBmr6mET2jtkYskBDfv4AH4qPeLgkimSEQYicx8yJ6L",
  "key31": "2DDCYJige9ZuEbHJpDYNzvg87rhHRfHBdU6aZvqPZu8YXpqXbVGJ7bsRcKpixotAPBHtR5RZ5BYegqcGnNT6bwQD",
  "key32": "4oMBEe2Cx8mA9J52FUmuz4pAnd9emrnLQFgL6jToW2C5j1etduyXcyfzXGGx5tSJ3GFDQFkzZCVGEY7f2hRk6iCJ",
  "key33": "3GTiYjyWGGKLgeWXrVFKt5P3gVcqy3fZsJ4pMkjApziDabT7zezmSjAEcx1jvvdQPVHEwHPaDdYHbfqBjqGYVFi5",
  "key34": "2VMi4nCombTBAcCG7xq9iAuHBotDGxEzEb1puhwyuT2uN4pxNPxUjGTLpLgLPdY4mc48DZ78gKQmAdArfn4aMPVp",
  "key35": "91n3S54asEMEGRwNmXkAq9AcbF5yt7cULH4b9pnUd7YB5EFm4EzGa1LhBBgUzj62WXq7YzkLgtCVDEJANEqJMgC",
  "key36": "4VLpeE7gR6zErQkgJaaDab96u8WShz166MNZ2bzzrpC8L64UwhpBdabt8gZ6PmhpYKy316GzwdHdTFibaVBXNjzv"
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
