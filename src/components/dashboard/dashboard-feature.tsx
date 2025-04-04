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
    "5Z3KmQ6yhNruRqpX6E8Re2hvhZzdJEhTcchQhXwNggrLKkBk1HJ8jtFuecTnAACoAL5JWh9M2mZdrKEmExTJmup8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JosSch6M8iracVGoo3XNhLtuGBd4xWBudNXt7QTWTvcVdu2rYSs6bXStvrSNmdk7FV1JuZ7bQ3hJQzwTj8DeyiV",
  "key1": "PxR6znWeaGi2GcjAw7t1xgnRiyoKtEL2ceuRkmt67FzsKqtzmy3Q4UgUpioUswKYQySoPHtSFQBdcg1npLQc5C7",
  "key2": "2XqhGeimbPBUqSdnZyZJp95sUVHc1TJmaofLr67KWLyikZYjjJskVgNiTBuJRdhrZrz3b5E4DbbE4chmyhWBpsj3",
  "key3": "4hozLvMKhekbEnikKjPXZ3D8AjWVZriZSD2iZpQDJyNqfFdE7U8SXGxY7jYGKH5hoiyafKrLd73WxFJWUDWK5J8",
  "key4": "44fnfaQfFnSPobp5uKgcQJEe8XXwonQvCbXYKGZH4HJvWXCVRWG5jEEY9jvxursgF8JVCWTQn7LTSd9VEBDJrN7f",
  "key5": "3WKCQBbpDGVn7XXdhbG3ekSMyCnZLmEdyBbePQo4diCjDf753my91U239nNvvShnJgFii3Zaai8covsVq9YpTHko",
  "key6": "8SrhjpwwWuCmDSmxmn9Fv5JBVKsixCc5QSCBvCa6QkFAVPdE9Z4yfpnCY1thPWrJB1XUi684ztHZZr4Q7HWDhpD",
  "key7": "581Mvy4HBVhRVKkKruv26vs8Lg4g2o7GaLiejVqzhJXXNFQtgXr3kNuNs2FYXNEGBTwXxSJgQ6jBNTgjNJPLvSi8",
  "key8": "9Tduz95PqxbDHfCA7PRPhC4QLRgFeK71bvabqataacSTQP4MQNbG22NwaPp64B7do8t8S4dEFh6Sz62gBuJPvVQ",
  "key9": "3CFprLEQ11tTpJYBh6fRgotPPVyvEVe6rm1McvAZk6wLLaySTkMbTr3wAwMvJ6KJw5b8fHtXid2cny5JL6JCocHg",
  "key10": "4DfGvVvQsA6D3ZK91zWm9JA37qFWPiU8qs7GWt3MXvEmCqR2U2TD84msPzUqAtDpe1SUz6CuFXUyx4TSYszUmjbi",
  "key11": "2SHvWvzkN6gtXq4FUKH6EuaDqgoidZijfsYNpkaqMQ8Z3AVF6Nenb9LYxBugbDrKF8XmPopeMGhb92WpWP3MtGtS",
  "key12": "35rCpRjcWqqaF5ph96aaEHG3Lqvsh7ATN8J5txS14rA61ZsWgiQ4SpMhTMZEe4w4n24QwtxoZmTpsnmgFuYdVekk",
  "key13": "5iaXp4ZEEUCBWBdnx2pQMaBYGEmafcawENpAgeupC86SnRwWqpCcCveW3hGR7HWKy9uo8zMRk6Bu2sUW5AMmyBhu",
  "key14": "5NvUZFRXa9TfxH5HDW2yBiVru7QUJfkobxUiSLdKy4AgdVZLGQwejWpynpRkGQo4MvnZmAJrJJszS8CrFQ51RqgR",
  "key15": "3884xo6WboVt7vV49wjETmF37kUd1Ucw2HMz8QThbRA5SYPMojHifUMrFYn1SggPVraqT2sqieeKtvRC6sv9Q4HW",
  "key16": "4fWguQM2ndYSKf8iQZgmHw9V9zwKzMhfvC6n63heJa9QhsWtgZRoppAiypzYMxkyh82Tuhf1TTVErDSCjxGLnyJZ",
  "key17": "2LdpYf9t4qGTpGuhZL6GosAX1XqzuiLpwALQJjS8G4igRkCvduaTvm7qTrPUhfagunHGfsVAAbB3nVH5eaWF9soh",
  "key18": "o3A6BqS3gsxfgJ368XhyZMTxZ9C5LPxYNdAUDyUzcvFikcEgcg39mgh6v3cnvHSVvixjRuUKNs94NgoYbpsf3ND",
  "key19": "4TWmyVktNaRy9Sc7MNZXZBBFqsrZTCGMvpBMdMMZq9uGoC5kTqZuQgPVoQe9x4gA4r7qdHxygVJCiwQrpbKGgKEr",
  "key20": "38q4D5WiebcSgU8EYQxJmggDVU2nLrLfqUevqKSqwazSLJxbqCQrmbh3JhZvpF4bJASzojMw5Y8CbLjMGmbQkuxw",
  "key21": "48Wa5La6acs69jG1qTY2c9Ebyi9cfVYR63mtxNBCu7AKzqGW46pFBuJ5sdKmmT5YDjvs8nxQwLunJgo7TotjwGD",
  "key22": "3YzNEDjAKW5Sbr6anpJeRkQxoba66te4cYK3bGAqtokJCaG88rpAbqorFKJxYoGkAyUCMzRRmkuAqyjGokcKYykX",
  "key23": "4Let3Mzhhhk2VZGBW3T1ogKPb2PQAPqz6veBR4damBUTbuyv9jPVKG9pZdvJXvWLj675rTFdvnFS3H2FwsuNiMQ3",
  "key24": "5gQSYkTxpLgFtWQiJtj1VG9WXnaLzeLKZjUDmp5uaWeShc3a6hupPe9FiK7um8GxjwzVR9peeqRUKSWFsrRP4mV7",
  "key25": "5i1XvwAS26mPBaoSbyfsXnD9pP1Sm1X7TDuDJ6b2AYghZAMhQ2ZYxdP2TVC4wqBWptkQFQsUebt8s89mcR72gYXv",
  "key26": "4R6qhr4VtgVf8egiomRFYwDPHUgpDWKYZ7xx6W2Z4XUGMySidbAd4Uo4Qtd2ne8VURUDF2RnpzUfn9rRRuZan6Sm",
  "key27": "3Q8RJmDVdqoTrNV5ptiHbp1JwK94RorN6RXSHAg8jN4ZS2zTbVh4vkmjm8N73wxxNp5QMFieDLQYNzc8jEKbGDpX",
  "key28": "584mEjrcr9LRJmUThVj9FEymmXRSZU2DTcXtZANBhX4ZJ46VsUcyxKivaMwDfaMZjUmsZd3ZQHV6yD8N6bqYZ92G",
  "key29": "5qe8gJAM6bpx8hsn3KxVcLA6761dFUzq4R1YXq2xfvp1RKt5K7AYDz2Byqw9wFZPQ5we9Gt6ZQrQbpJMG9uNahcx",
  "key30": "4ufG4rSd1mjftYtoAK5bsTEgac36thmh9iF6Nfd6caoFzcYvNJHAbpcKkvnGKSZTzbaFNWNi6z2RiqUESA9DNaBa",
  "key31": "4Ubb7FCaYxLrZ5EQ4AuNhz5fgrCVVyefy1KYGaL5fWWBMUYDAfgu5hPLB54beHkh9bcNqVVfyPB7cL2fnXAknKUK",
  "key32": "4DQgRUBtXk8ZT4QHggFW6qz4sep9UnqssZeTF5yZPBhKbKfgHyMY1kjpumzjTEcZMaPha1y3fko6TX7ZfBH4W45A",
  "key33": "2uMA4Lbxmv7qeUerHzHH4b1gcuKyyRu6mQcw7gzURoXy2ecWNebenWuhPRTuuPb1BqWVvvhWws5m9g8KF31W6Scs",
  "key34": "37b1kPJqjwD8t9NyvHR13g4wX4qXiPfAnu7LY5tHJkom1ck9iaaYTVu7N2fQKxfs9GPVmQ8YeSnfPKtMNjUYYHZj",
  "key35": "3J5c7u9N7PFg3FXsky2xXu5mfrgRk4pbksraQomkg9sJSnVLm381tzj8reMfckGMGtetdtDdpSfJoMnEipH5kmX8",
  "key36": "5JvxwKEsFS3MGjpGvxwbp2fS4cMFyKpusaPVH33FWsybNT4DNs7kX6JKR3usGVHFbNSt9SsyK937d3u3tjaQyic1",
  "key37": "8UJztTfqwC2Fte6yPJixnbykcJq5c5VMGPsou4jrAj1jEJgamNzPpXUtz2hhoSq4Eej8ahKEHhxsaVKfGXUaHfk",
  "key38": "2HhtNZ3JFAtCNymuUf5uHFmNz6ZJP5xUUeXHNWF3gdgWsWHjNbbLVa4y6NKvwXtRFYU2qyF5jRQZozFq2FSvKrXu",
  "key39": "5sTUFfyEz2e7P2EPCLzB5JaWRTrCy958Knet5sxGMPnvzXobG7NUuhvDTVD6d8VHKB2XSrqV6BKyus8FKihWwqq6",
  "key40": "4KxRG9PMCyo5ooAhRvW6qpndvXw2UUPNfVBRUfKpkxjHdagkDRBW5ZWP8uyrcyvJGKGkRqtgvQuWSbhumxzKtoTP",
  "key41": "A4A2TxDehFp9znhFSWp66Hy4unAD4cpgzhnmfQ4y14s63yBruiM9WJ1kNg1Zz5izgrnYRo6GWETUMVVy3mSvPSp",
  "key42": "2kfCGEuP55skauLSevFraYy3J9s8wT6Gcby7tSrvwMB1SCm44YekvX8HDfBufJN7Avhmt5yMTsV2YWz4ACXTBtwS",
  "key43": "5wnHG7PvnnypSAAMFmsvNfg1qdAJetHuX7SEiACZLFuezAHYUXVWJwEWbyNdDn9aLiLsUfNitxBVWXvxvF6eqHzX",
  "key44": "4BuES1M32qggLyqbWtHwbykgy6Gz66Pn6MZD57crF8jwkJr1QojbyUcv8BrrXTXBoBKgm9jNbYBZJLozaE3SrCUS",
  "key45": "yh6KJXgzMb7BpwXjLhpvtwyRRMLgUdMQqCERM3rAYYhFGgm55RdWny1v64FoifKGqryrfJtV5z3VoXbdhBy9bz9",
  "key46": "2vMA98EL6Hr9JtzG53sL7CF1MLDL84tmanMWP6cN9RvZUkVktyHALAjQguSMi4y5agj9A7ppHXNtDeVN1Bpz6srP"
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
