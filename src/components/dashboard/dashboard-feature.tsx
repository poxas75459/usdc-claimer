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
    "3mupiwkjGrNzmYGyapFdq78Yax8uBpbz6w5PLk9REGDRXMiC4ZeT157EbhQ6sxUyCx9EjMP9HhnmLEabfN9LMr3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cKPNRT1Mx21XyEJzpnVyiiYirJ5hR4CMiukTBQNQ1dDdLWaTWsH7BDGRzTaK3JwioUxfTt4d6Jt9EE3e8qLLP2q",
  "key1": "2pcThCWTo442N2wL1xGNXfZ9NKKdbuJky5AHt2nk43Tz9byGMUcVau21k8iZgJpjJsNvJo75M5748P2dYw5BQKcd",
  "key2": "2SAVX8upQNQGjnmwzvm937S2wpSVu9wJccXHSzyeHqYPo9vwMjJL8j2REQvoVtuvtuf2mZa82Y4rswjhCtKWYgQ7",
  "key3": "45YXhdSQVxprXbaG9aHSmmxJfk9mV3wYTXqCztSnyfKwmEYUQhTpikKKVguBxK1tZgNsQEUoxcja2CLDn5o9Z7up",
  "key4": "53NseDq6vCCchyap6H9R3yGmNdT32wfGGSnqEEzoiU7y5QfvUbSNP5D5YM5ocpUMQHva7ub228MGLC6TaS2ZXA4z",
  "key5": "2CKswQTC9y4vZs1D6znU8SRg9uEArDHoqU5x6Y3n8bSj2CBwUE41uqPjNvcowsp64JnV9sWUincW8m4NN4rpwauS",
  "key6": "4bxHCGyc2CNvfoo8qA4EYwwvUwFQjq773K9hnMdM99n5Bx5c6wBJ3TqqeGnvG5sqswqEEimRRiSx4niwT3Z3u4uQ",
  "key7": "5mHSUTcGnN56vm7uC7z1rbM9EbsRxPvUvb7xfGF3Ynn563FzvJr3sQsV5kA9wXyUw5iZfkKBYjNShTAGdv3Ay8vz",
  "key8": "4ApwV3JVDEDxSdf6NiDc7hsSYDAv2AruPNPcg1Hhhxxr1SvYaroNf8Wi2EeEyacRCM6RT5BN8feVwtAuEqBsfrN9",
  "key9": "3YCYdGRcpFK9msPwVvJH1rDNLrNwshR5YYvxqeNoz9caMc2BnES4xmSeyHUCRvqwoGNSP2FQJQWm7hUBG7GdiS2D",
  "key10": "vezWcFqTJ8Sjv7M4Ror4VDkKjAy3WkxZFVG74Sk8hXoPZMdjb656jR1dS3dFY5MAZUzYcvTpFH47NhysbyMp5Hg",
  "key11": "2NhpB2PAP6t1cevgt32RdHbsDtH4Gds3VshunMoscuM2gpSV2J4T4EngvJWRGoUMQVgJLFiCTkjN6bbZ1owfD6iF",
  "key12": "5VB1bWMGhhoDEUherQyJsqHyLWoZXNBtwi1XfWmDxPiMp2s41rWwEhZLXFaczNvYgHzGtYJtqvDFw6s8HA6ywNWP",
  "key13": "3FSzJu2LKrkMpAqE7wBG4UioZhLNfP58RyiAponstown6TjVCRSrjSydWzxXykCQe5R5oMwWrqjpfu8YCJH96D1D",
  "key14": "29zqSqAQxQWSY6QDQgUfstEDqw5atXL8hbVYuzsZjvw5MueJGCQpqFonxUL5qS7fJos8KYD9eWUgST4h4j95JnQo",
  "key15": "M6AJMKr41VAkBxT9ts1ZgicdpERhV5E4YZgLjWWGgZKuamwodrR5dHk18U9ZG1yw8mpi6MKgk5SJLmoF1xH6QjS",
  "key16": "256xBMU3gawWUsSt12onKt7S9F5cHN7kfw4zr8ViUFn9bFd29Y2YCETcP4YeVPYy8sVb2ys2AGGwUnuXp9AxnpPq",
  "key17": "21ShvwqfvNtqetGqM2nR9dzLnVbqnGwDoUWJbEttBFoCki7uCmCGoAjsr5RnCL82gcozZ4ZjDp1DTB35fp1iS9DP",
  "key18": "64pr9D4HcWkEiZzCvwdVhDuYS8LQJ8BibZqVrFGMUZ8dZozKnFKRbBQdC1RPBvJLdYcde62yLMVMxxqbUmzdE7QX",
  "key19": "2hdwFZViRxudN1CZVpUXqaN9Zf3qL7TEDTBw3NLQZArxkYDDCM9XJikhE1gg8Nga2At2ntAdvYHdwonHSbjsZYtW",
  "key20": "22b5aJX3CZpU2GMZqrcbPsMqxYFCxM3BBtby9qcYBSziTJ6FvLiRmytGpdKrS6N7tTYpygtVscNaYrPxyyEs8wbV",
  "key21": "3N3L99hzResHUyG87HHzJa3qmEcM668eMhqTJ12V9a9exc6oKWvRBNtvnaq4jAXXRwCwWnCxefaELfFxG6yfRKW5",
  "key22": "3gFJ4CMXxZHM9SHuNeCtsZGs4NgqxKx2XcS3GY6inJU7XzJdXxdXsT8W14cGqK96G2UDdCk5cjsdXhgrKdE7N5pR",
  "key23": "EvxbpAwJ4MfRVbWyZrwTT2MnEvYakaftMLzJkBSJJ9i179GqWp8TpRWo7P6QWEhnTEx3MwsjZsEyHt5k2AqwqRY",
  "key24": "3Db5pA3jffMtAcobs92wHLTUkVkZMKssmZTRFWs4ts2NhNP1z187vJnzF2zNdc1s5uSThFzKXv8xDFVtozms3H81",
  "key25": "3GmudrkNWBGZ6epccofDhEedb2c6nXB4B1HFnubjcSRUcBjryKihtfcnkBVhbdmrH63tfLxi2GaKNa17wiEZz1tq",
  "key26": "3gufVTkKeB45h66AyULQeqjMVQcLtvGiGkxXjBhc5GR2ceSfJwXDAnwtXEvMn3m3uT19q1hteYf4oN7uQ3jw9mmw",
  "key27": "faosDnaQSh2374dSpXuU9aoYvLqJQ7523RPuxM4Lj7HZkWgU4yMgfN1YNdPEtVsTvngxBADgWLQGrSbhvAJnaR9",
  "key28": "3Bfowbpv1eXQjNQf3PEWDsjzWRSmc5kE7FJQ7Jsne3sE7vsuegvZ14jFsX59BiJ9z8xAT2Y6XREcCLqnEg5RjVtH",
  "key29": "3GnsEfn3WSWtBWK3yGUDGW8Fp4CZWmKVP92qYjj7AdaQbpZA4RjN23LsxodqDtrPSxAkndzCK2gvPcbkjHADSAqV",
  "key30": "2XkD4BMSgGXZWAfMn2PKz2ydFxNz6AED3Ly3AYVd8uZn8AfrD6X9z7HTxH6TUByjAZ2U9AC4v5kDCGeLtpQmM2kT",
  "key31": "WzZnBqfEXqsX1AJLaiRymg3t9ApSiztbAwPH7yq7ECDmFa8MNQG8NQEHJQBzQViv23h5EFsJ5cD7Df45r6NRFdt",
  "key32": "49Gb2MmVc8wWndLqaXjD8Fsm11m35SQN94oK9Jut4NaPW3WELozJQj49a74wt5hNk5PMqCRQfhGfeQBxhWbLDTPN",
  "key33": "5yqJDiexmptewWGV8ruD14z5mDt87gSKPDaFVUafvWhcDdWjNAfCuiSw4oc3886sKy47qBuNbXqrMGrGshWMNUvn",
  "key34": "4cSbugECNYeU6pECAHXrDKQgKevzeKEBsJZ6p6WUf8dtSz3QwGHNkbFUwvyck8R4ReBNTN487P4SYUXvN3ecpp39",
  "key35": "3ZrapAt3S3F2kbZKgsj7trMaXspqzHrbaTjicH3sARB4qsJK7fe62aPNQRRVza1T969MBProN7F1Pq2VusAFGj3Z",
  "key36": "3uiampX3X9Bsn2NBD37AcFSRpe18UjSoDvZkgj1dPe5xvSnkbdddg6Nx6M7hJfEJfRh9DnrHqu5E3nBRpjFcVjs3",
  "key37": "2keGWQMLVeFoRw6StMXnbvXtKYokpex638WkV5TXtcg84AeGTTm7bTwJafmFqEsjx1sVZj73jYTrMfJXaMcK1hS1",
  "key38": "MrBac162Uv66NSZQKwGVWQNkDmu7GkUCiQCn4WCvU63BfNQC111cy2QVs95h7AJ4uxNe2oQ92iDJ5TRCC7KioMz",
  "key39": "2cFAZfTa5Ehe7DXwGR5QhFuEnSayxvzNKWfgwqm5vQY4rxeh8Jej5ySc6HQGb6xoDJkV8HtiZ3mutUUvuwwFDxAF",
  "key40": "qFgYoufssNbefAc9GceozE4ZsvRRAXVGYSrr1HzYwDVEcNLzgs2WK37L15qJrqj1xXT6g8wRQhqnwHdRFBNbNnL",
  "key41": "5NjUjLTaKsp7Eb3nDtoZvq3M5jH8fpVSsKXrKJUCw8tpQRqAeug9tTqzxpEboUxGLXsSg55tXYpWvH1aJF1Fd1bV",
  "key42": "Z1VoANtzZGKD1y8YadmzQ1XkDc5QCBWiYWa33k7XTpm748D1NTT1vHnXm9vqUEeEDCsYJ4F8PfcsCkZVvXhq169",
  "key43": "2euXw1xmvD6VC9gBu5zsM9yDoFJvx3vtKX8VZBA27oLCxWurJUntPuZpRvzgXBDSBdD7H3ehYH3kcuoXUpyAR91f",
  "key44": "2aXfwY25pfV4hkwKG4rcoaA59kb3JDuj3Bx1E7pADr6Z3a8gXxraXX1vAQXjpCqP6YNA113kCjPTjdtUKwod2FHM",
  "key45": "32sfjpYN4v6Mehu8yNU2FXZRtfNMwsVbxn4T2xxgkoxdDbz986vxQ9TXXTEXyYS2U4s3KGpV4uSMJPsvADBTcTih"
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
