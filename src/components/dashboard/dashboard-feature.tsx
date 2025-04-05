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
    "4RdYfZcjhvbGmSKpYmA1oYis1ktUUKdWXHphVPbBMb7AzLYAFHxBRd4V74BSwLgNNa1Cf5npbeqfKmBWw89Cfwik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RbiUmrbKz9UJfuYbeQhBy7nJH4KKfJFtD7GWeJ6UsLTAEkeoRo9Y3a9Yo3jUKfAuGmj8eF2CiDtPfXfAnWG3gCj",
  "key1": "5k6uJ2TaWZoupc4xoE38NdGnm4LhhHa5Xjw3W7jh33iEeuLhsRNH2eewnxw9TFoAdABwFQdwNxAfV6Wp7TPEbiiC",
  "key2": "21gRNiWnnbYJdQprVizz6rP4d8BPGLLigwdHtBFdDDff3xZ7wZrkMTYXzfQZZPmpsRe1fBazh86ZGCkteh6yT5o1",
  "key3": "8NjgwQXGfsdtLynTnCFNckkkhaTRowVkxUQC1ZcQdw7LzDCJCPfBaZSQ4eRz6iUpPTa48XrdczvoTHW6RHR5nwc",
  "key4": "4sCvoisA4LjdhZXH3nh7pAmYAp7kxyka4zYtmYak76wchDHMZB9evoG71T4TacxXCaGfjVxW47gcmmcxJtCphY8a",
  "key5": "3xw3GTyaPdUwcDi2KwSsTfrpZCzdot1fNKvS3mxVnBtFP8zLJ3cdhAHFwVcpPFfjmf1TGeLkwPvkHnbGgzvon9bn",
  "key6": "4x7dLnHX1hjvLGxv2JBTNzXAmYnmoLeWP1LmZvvzZgEjqT4q9oZcUVtiEQsofmtiDqDSTogGxmnya86G1atNZZqr",
  "key7": "3WP1fn7CvYWvzijErrY1M99WLmj6Qm8u2QEnADtyHxBZgc6k4oAhVT8WJ1VHwAvgdo9PwDAcBWFbBAmUZJFwWjf9",
  "key8": "BhB2Y7beAGADEC5WUpcbRyv24JqnTEADzKd7zXUVXBqEY8KnjQdyyTvw8ntZrhNi1eyempk544SEfJe4oh75ygf",
  "key9": "4NjMVbWgXq9mNyTdocpALYsNYDEAL92BXTPAUk3Yg7kfrTAWjztXLB52Tr9fwfRtc6k8GKRuRFhGp6jqdf6XxJiL",
  "key10": "57W1jgVrXw8ctBnMf3RLHnVB95xjtDQrQzgvFBCDrP9JomMRP97hhrDmGNhkTTjffcUyNAfLq24ebTKfYutRSmz6",
  "key11": "4d3S9cXSCE4Lvi4ojUpRXUmeT7kyb8tKK1qNta2xCwxhkHoKktebjKxn6EiqRtnHNsH8jzPykzW5ucWGyrUmLjmN",
  "key12": "EXQNgRtEyYcYMNCQVW9yNnyoRGoziK1e1RSuPMtFhLxLbZLN9rGk6YAXyiqqjGNgSuSppR8bDAHPrZuKPtueFag",
  "key13": "53MB23r579NBGTdScwU99szaf8EZSY1PwRiDGkGLRzqoFq5CW2kiWsNx5uqGR7G5aVsYBPWqGwb1jYMsRU6U6TeW",
  "key14": "3TdB3G8aTKGLpmQPuxzxYpi2Kz3dRC5KvdwWphUCaS5HT3Vxemre83DoMQaQv4TpqdgXfEUN7EXTyBjN3JCimCmz",
  "key15": "3ivmtnnfEBrGWJVKZ5mwvu67yUKG3DzQVFLBypXmTAYuQDM3JEPqsJ1ZfaEnBZYGeCD8SJYsvXYCpDki3Yxokukn",
  "key16": "2uczAPw6DRanQqn8B8D4d7nMGucLcpE2pYix4yGrZdHjKPkhEByUP74iQE4kMZ8aVDzxkbRhXznrr1fNSA6PQnkR",
  "key17": "58DuwyiRDwWUHVixZHD75nhUSj1j35T7qPcUjSdKUQhPsKfyCX6TqrW6AoUohoVcjGUNQEpwohTZsUBQ8QnShHH8",
  "key18": "2Ev9CxwAoRYMTLbWNc8yPdKVJxgQHmm3reATov2DrjzTmvzLRC6XJSMtZ4JxH4R5iJ6MRjkRFQQbja8QUUVk9qXp",
  "key19": "397JTwiLsZicYjVFRMfRbfKzLLyQaa9DNPFfnSkRoZu98XusD6LW7EgUDi8GoUKZ95YRQsEAnhU6qG7735iNYhtJ",
  "key20": "2zgECqfNc32CeFgxs3e4RC2orvW5A4p1TnnWdSB9LybCwigHrVWq6KxE47MaYMsS5Q2wEG3iGWfEviuzqEMjExMV",
  "key21": "4dtzfaMYiqsLmcBEurpd4WrErwigZ1vG4U6uPeJfBEiQyUYT2B7r1MqWUtKALaLM3TUm8UC8oggdd9FzCH8uWXt3",
  "key22": "5qayYT4yJft6sxkaCU8q3BpJtDk3dgmZYnB7L5PwVrE941JmqQQoNq6k8Ww2hzR87MnuZkbWAJSCXycrXikuhAVz",
  "key23": "eUGZUrJhyU44Ve8Gh94jLasJYSAiXTBoEMJ8bmKLfZSrzgCKnbKYhFG4Yv293oNrLhHeRVc9smrWZNaCRYmZfRQ",
  "key24": "5kE2QYTLHq8AYjxj6Hi5PMhmYhR8dxmHEdfWYd9fop8PPL8DPczcvXZQxzwKqpfjrjoe36tDSkWHXt6Z21SAp7g3",
  "key25": "uv9wyVocwdYv5rgK23yjcfRiBEvxDVdgPD46rWfRNBP35g4DoXsLDVkdcnF2PezHe3rQecAmzVGt5BfrMTVRNLf",
  "key26": "2656hXyY7NKZYwbpFUhNzCGZoFE98TntVcRruh7CgCgLsChf8oyuHGj5kD47GP6ZddVBESyEREezpiR7MMvg2MLT",
  "key27": "4NUfVxvfKEi6ZsEeBfD1ERfm5YmKFDmmDB5wiAakyZKJmZTQ5rq46kSVkdwEDauZ6gUzESfDgrYG2TpTxVKD4pvt",
  "key28": "44y7ebZhr3CdMEw4KzBXm1RqEUwHyGaGEEL9Qpqvg1Zq4RACqiZvxF7PRX97GygfCoyb6ng9hVN11sdTCaco8Mh9",
  "key29": "5sMLMH2FeZhJwA3cd86BbK3FLB8rqS4vuHuqKxb1C2YD7TWKJdLNSVTDSMksWoAGfvqqrt9UP7gvdeSdBGt1bxbd",
  "key30": "5q9tGidpowLC4jR1YqZorZ3TDgiZ7rtnQephHTeqmLSXZdbwehqGvPFG4fvCw6cttR7HGCcvGjGoMdiCQcvuJWdN",
  "key31": "5oesxUnP1ZWmkhjrhd2LnpPencm2YamExfBU9315wJM5t3GaBe7ziyC1Np3dNDSEmhUcSAE6nfuKMLMZejGjbfPc",
  "key32": "2G9YkH8bNC951z6sMnqYthTdF3fU9CuX9bYfKdeR2psMoBVmt879edwjVD7F2genjPHucsgQQzHrmE192zpMf6fC",
  "key33": "3Cd6pX98wuh1t4Az36JSgwdAK4n7pAybYksLTHoWYDNnMRr1NjgigKyYzxAGQJq87KrxfHa8a1R9fQnXkBSirAc9",
  "key34": "3HDCmENr1Ys44kzpZZDsFpD5g6QPh3BUsrEw8WxeW2KzUz6YfSY3AzzAyGyqPSEgsnBWGrosiHgL1HsXnm6pNzW7",
  "key35": "2BbQivkfsSQ5His7oebJuhkuJDapqTg3C8w376NieEhKdJyshnUtQ6JDH4iTbsA1wakMZ7oKHFcik5ff23r816j7",
  "key36": "5jkmmuZuJ4CxxYGDME6oKmME3pr7Hpsw3dkASRMGg4bdDaZnnbSuXXWgj6xmJHQ6cdH1NWLBDwwnjpFrgk2YsWsm",
  "key37": "5FkW7oyANVYg3gnfR9XaDSfLo7hKCtENkHCgvbMPqNcN9ucTzhDihEFTaz8E2ooBiF42p8px8ntpSBMggN6MxrAP",
  "key38": "4pyFWYFFiMnu3n581jK7eiHS62Urt4qjbLCDs4MmWqdSjVBEonTVcBA8ba3UFUJ5uwjuP1aVURjmyxFB5Po4KNgN",
  "key39": "FTkKELdiB4WjtUxBapBTMG3vQgMvyYXT6ZRfrbJxTy7WbH95nawGUmCGtPcFiW7Cvu47jvcx8PSLHdNwTWsjRfz",
  "key40": "5gEhkJY3HduDMg2rXTzZ375PE4i2eYa3VXW9k5enVXp6TDfhmbJkgWnz9arSFJdbviSGQgeVMBdEbv87ABd9X74x",
  "key41": "4yhaVoq9tuWMcpz1mjLRNnoF5mysJVYwNAzfuVjr8qt86LYAfhLzgZUXHAqP4RSidy6hzG6NxiYwV7XTzgRtJ5Ty",
  "key42": "54GiVzK75p3LpDFUMCbhP5SPwZ16As2r4Ec8N3mXnajEKHurS7RRe1JEJMKYKksuobKenAthVG2e1BeGX3BdX6WY",
  "key43": "58nALJBG7B84rfuu7jfFbLA5pEvKew2tVY4kUPFgvkhJ5LMXtTg7L65TS65W7ymqmmKNZDVBNGAKwQMCVssLGRir",
  "key44": "4M4X5zh2BdRZfJDkXvi3xsaBXazJvNJc813NaiGNHUd9nb9w3nqZJTSV8PJ42hMELMgzrsHcHWm5UnT91pM8nLrR",
  "key45": "2BLLpnkQmosW3TacrWasTGVVskwfS6mLMBsG3UbuRaJxMZ2sWycgstSBZYHyYo5wQ3E6kTebrqd4GCMszg8xJw1S",
  "key46": "3tFy1B97xS3xMGv4MQXKZamNsAAvy186GmegXVt6k9NWSDs9KDo4N4o5z2ABgnA1LsvLrGXey9TQUzub2GAbdzdf",
  "key47": "4iTTvFHQ5arV6MUqEJFBdYNogu4sxjf4KB739FYcJNG3bYry4gA75tm4fZ1Kxxur82w913JMKyo8UgT1EDPC8w8f",
  "key48": "4PYeA29Azgbk1mcXqqsj2PKbeVnZWbNaE3tkZd6ae5eUPhve9hhoBE3HW2mSDs2uFTydhAhcViHJ32vrpUkzEZe1"
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
