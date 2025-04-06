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
    "4cNoWDpYJyS83PAgruwHGAT8WanvbBHB8A2E32w27NJfehBrVTbzYAf5GkK9z2koSjMnnqiVvUsHM33yc2DbkBq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xyyaf8Ct8MwmDCnSkEMumdXo66X6aPJvsQrK5pYKcKindgomZwtoBDsTYvqtgxAKQfKzTtpXgoYVs9cEMB2mDRJ",
  "key1": "5gfxnXmY7GzNar6AZi83zgudaHQN657MfLA7uAEpQ9CeNdMuVNHStKwTcpZCABwZNZkeYjfaa2ZPP4m3Ma2hyBGw",
  "key2": "T263tj2yUC7BuA8ipXVgfnJJVx3bjnWCh89eQCFRei7PZhU7KY9S8R9yFMAzxR2Hgx84s7y1Wfwtd9V5RVCHsuu",
  "key3": "62JtcaunTQ334huDjWr62ofv7hpDRftTfEN6TWZjquGgnetmHApTuDZfLh39GgjvMqNcSPABJbAWrvWVLUAHLTeb",
  "key4": "2vNQhToVwR22VabQiztgqawAitHSikJZoKrWZVC8gU9R5dK2XgqCF49SAGsxTtMDyHb7kGGdaDwiKcnNX4DiyFFx",
  "key5": "5pCoZsfH8qrj33XU9ybagZ6HFgB3RG99yoNba5R9kdY6fMCAWbYL5dwghHH5fygR7qXNjDHV4aB1ERq9aJVByTKd",
  "key6": "4nJUgZ1GHpHLZjLd3bQqWrPYr3wqLCLHgnew1Yf2DxyjHHcizVX3y6nKDpfoc8t9db6d9aic4YFWXkF9ZXdHjr8t",
  "key7": "sAEWxVRcfkhvkPmT2vwFyEHKCnPDvc4T8qWkhjDx5CrGPUdc9H9KjxCCDvQggCXXu7YLqKMsZA1HQP4bcAEw5bD",
  "key8": "4ePNGGuyDxg4EwFVPjgWvpRZwDUqFEoq9JpMoZ3nKWjNL77GvGvGMCxmmR3dDNaV1qBV21tXsxVMNiYFqsKPeGWv",
  "key9": "AomcPSWXEWY1uZh5PsmCHF1mzUQ6WQ5pQYtdn15otcQcw4zgAg1Jm8TyidaKPVH9z3Z76ht4aGRr3S17STnLBmN",
  "key10": "4W6JrABTVQNAQqfHyoRaJ4UiZvm9MaAPvwSPtJkkA2DgFEcLd5qRR2SuHdvvUWRgBqfX6hzUcSdq1L4y9LavncUQ",
  "key11": "4RNRfPSWBT6QrY9mnQiWvXxjJYY47M7SdhbNRfaH2EWanrzLcfSwWAxSjvhd12wJvMQ9HsgoUYNwARSaYKvsVyyE",
  "key12": "64dELSTupTYd2Yy1xywMocT3BRhbRjAkGF693cSLCkCwpEF8YmCiYHufH6L7qKRQV9fZgBj84wgmZroPRjgvobxp",
  "key13": "5dChtB3tiwg6a9YcUjP2PREVr136MP7CxLJZ31o4FkQBUK8HtRwnbiiWmNbJjzmc66jToZCdjfaXZWnuahhyn6NK",
  "key14": "2ZC1KdjpADiW3QTyZwVtCjBrFV5PTvxLD7XSk7ZGpNKqQANhaTYji2qfYvYdiYMVuDBrTPS4NtmXoYHseMFXvzbL",
  "key15": "EeYG7wjYpcRpHKhmeoTofSRWoutku16twQbpfw1oHHztAvLie9PMEhLFGXZUe64XAcFhkEJHGYo7dbfyoKKv1Dm",
  "key16": "2WDKVFqgBh8m92QdUY5p96pYqnpPGxfsxgV24iXG69sGJjeMiHVWRGyAFDEWuf6bw34HJHbdJhum5TRR1Yz6SVQB",
  "key17": "4uan5Yaj9sP8cDY596yWbZm8Rbd6TzYQ9gDWCoUw7DyFN8gzSeQUsbUyrruyf4UvGFRKmxMBqi8NAjSmHqpdsVDh",
  "key18": "5jKuAL8aDeQJSGXiZbZbho58ArVT7zhV1mcDfMJZUsEtKW8ttYMjH4HSEXgh7ZAELoUqNTCiFxXsRdviZHLywHsw",
  "key19": "3YEdHRvifdnk3ZFJupb8j7VqJqWvjJTsPXvxeW5z4JANxFEJrLu2PoChktEuDKQKrtq9NrHbNnnTSraWhNXZ8BeX",
  "key20": "vnXNk72NKWPJkKr7HhM54nARw428Y98uS6rwg78riqHPmbmAomWdHrdBW5YPYdiGHEw2sqaxB4z2MnvSbs8a3xd",
  "key21": "41Cx3QfJQjg7LPCgx6uyqmRxaWHYboF2Z3rmSKt42UmVY1Y7br3BRQxdR465UQSh44Q2wpDjhTm1fgevUbSsGp8K",
  "key22": "4CeUqUejJCcjV4vHctdQv86HK6yLYiE5bRp25iBeoZDgEWQYRQrEaF9e5Fsx2aVHv5x7yThmCnJqWQL1haLbJC8F",
  "key23": "2nvG9k2yrkxUPGXb51oyxkWnLx5LVt2CdVEupL4sKAEw4XW6pnayRoR5HphncjuirQnBkZnefCD79rdMi1EnaGd",
  "key24": "4VfpGrp6PZKap7siApazkGFsD6uC8yxcAFzus57b8DHRBaqcWw4pUF8wC63rQc2x6BsxNc44cJXgpD6Q7kwYWnUg",
  "key25": "2zopMUi2VHSb58Bkrw3nrd1fqXiiQbAm3WYep475ySscuXbKaeD4zv9Yht2M9Z75MrYTSUp6pTLH1PKsDTd2ij4e",
  "key26": "2LMwEnXJ5jRaLmKKtRRcKnjmXHDhieVmiFFSNpoWQ78tkBtWoQniXMknrbXENAGkM8e9rHZSfU3d5MjXxGKjrpcw",
  "key27": "5fKBvYFSftogHweF9vcuDL6HSg8ubvumQWVU9PgkMVf4abQy5poHokYjs5zuiWnXjtqGm2bYTLkGsm6sQQ27DaE2",
  "key28": "NyTJFVa2QcKFJ5D6bgFvPrkfbNXoYBx8zMEfJuGwA1xmGPr17LybzfBUo6fVTZbiLY9fEVgz5x1oEeSnURn6Z34",
  "key29": "n9JMJYW7wRxuPwWmouyJfbK6fMvyGgQwCHYfNZqFAUJfe5EM6r9ooCTPWaSiU7y5RchRHGzvnCR3rAp5TuWnHVY",
  "key30": "4szJPcEKWMSyDBPuQ2oRH9QHYkJ51C2XfDh2Y4AuWYh18v7B9pGUfGayAmJxbqABqEL8U51jNHdf9TMyJHngwxe9",
  "key31": "4rcPjEpZJAe8hfZ8Cjh7z4enaqccNYQS9K2tQyMZGMMvV46KKkdfo9EKTuGZsdSCp1VJW2XWQ5bV3gzKinmPTZYp",
  "key32": "3tZQoizPaF1X9ZoU94kXLn9TjZhryKesUE4DUJ6YyCT1nb9MkhfwYqAsjDmnxFiDHVKj2exjP8SgJYxjgLyBtSW5",
  "key33": "5ruUUhjmy1q5CkrvrqNNHpkPdbb1sZwJYLAJyyD3fuDkxPd3uTYgj4aRemvpcVSjDyeZJmVCUhu9ydWUTGgYtpPv",
  "key34": "5T6w14kSN7NiLz4hqf4zgFh1AFEUX7kQ6niUQxwWtHvi4AXG9aeKnx14gquKj63USnAyY7srBqBKcgjtiiahFAuk",
  "key35": "5PqV2L5iqZqtSkBUYDRzwaeDYP57WbhKd4ZpFoNUjfNXFZwgpHmh5vbfXbVA15VmdgWCDBR54MJGxFkR3LvWUTCM",
  "key36": "5JBWnM5kuz2WPTFz4BksYoJs18poABU26Rxtq4kkuy28fyuZSgqZ6Vs9yDqzSV4iUp8jE1ziSzeBeGyyBxwWad46",
  "key37": "4Em2GubaCXTWMMxWKRbR6u3on2JU8bwUZTP3aNfRvSebe73a45ovyYy7ZFjQVXcYZU8EXu44MVApucJSPNU9DqSS",
  "key38": "5U2KHawd3nKEk9hLFHCdgoxycJ6XKfeNQGFtgcTaxuj4AJ6i8Xf9gWpXMq8g1Di12Kzt2kX44uPJV7kH3DRSduwF",
  "key39": "KNwj5iERDvyu2QQdY2RkHAtrJDyhHGJCQzVENhHc5BKxMrRrV1tc5WbHgM7ZSQ1hCfo1NeGBCXeoUg7cnhQ1LzG",
  "key40": "2iyswEjSqQhxy7kdqiiDfYYUgsQNxq89yAyUgozXUF28RBNyW7v15eDmgLwDq1rURN3izN4zwehkLhJTrUsVw1gq"
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
