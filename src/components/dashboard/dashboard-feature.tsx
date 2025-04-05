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
    "55hNPe7a2HPVqy3vASJtF54UPNqmEmzYsC55BoPFxBJcb9gbH7BHsUrku8FNHovAQnAgHnZZchDsbGLQR28dGnmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yUgTKraJzh3FitCWu63ALD9VWYH1YwX8MXrAjjC5ZsrjkBPLss43QoLAnRssNUbysqgaLpGe6Zf4SacNdCQ3omE",
  "key1": "47vt1F3FvKzQWzk5CYDVvG6691zqrj98NuHvk1JJiZTfaSFXoW3mggkcDPQYB4dKqhvYpCE9y9fWGdXDCdj7Knmr",
  "key2": "5f28qJjDpXQrroJGHETuZ64j92fLWmQjv8biXvudTSPRN2jbL6fCQuwzeYyTKVXucKrEUB5SJQuuAqDCK4cq34YC",
  "key3": "3GmVQerywyMq4fuYgn86JM8uZwN2LTJPwRxUkbn99zkk2QEdREEkCuQAa6Nng7LjcJPu5mySHbVqM2PJq56p4ii8",
  "key4": "4Kr5oZ2wkLFiRdQsaRsqqesXaLz45A8j42Vt4cWdxUS4t2T7R4AotUVsuwz5ryLD8rnvA1bu2vXpf8SoPNGvb5ox",
  "key5": "CTdNCetLnUoD5WLCMsTwQtQ6ZkDgy6ChyiPhjSikc54pmiVLoU5GWx1LeLCVdpKpUX9L7mdyUzccT7d73JeGVU5",
  "key6": "AboVGAZKHswcC1kE1SwsEK2bNY6h75HSYMh6tAB3uXAXfqpoe4R2cqbudTiQKaFGHK99PGfGPH4db8YqRgGogC9",
  "key7": "4hh9Qf6YBUSvxszBFMGfUQTjk1pD9dE78bPRjMjc8WJVVCWs1bd6K8fVViKf4zwzjnxbzzxzxJZEU5VnbVygRsat",
  "key8": "2VHrBB3g2bi8QCeKqY5q8YKntgixeRjVswh4w8g1aPEMrRzfcxpXoRgpZXzaSrvELGAfXYiAddedYdUtAXwvScQq",
  "key9": "5UFox5E3jKY7koc7aRZfrh6s7oFFagwseVd2JwreajD9umRMTMDxKdhapERisQkwzteXq2M3SFQEn43r1UZygshZ",
  "key10": "eKbMU2n2iHGnh9kxh87MnJ1xExBAq3M5NKLA78ihe9LnCi3ncTaDrjEP9aXTmJDv1JT6nqzNmAQdLWPVUC3CWfi",
  "key11": "4qcBpHVf6pauECun6425uCfgdaAz19m8uy5shYFBybzGCRjJ9KDPGVhbAfEPrxZWGNGFPpwsimZbv2tTyHndXVss",
  "key12": "3G5VCpiCCZa67qzj1HC4xmbGSAzhEvcigUywypgRDfgQjU8ighf1FfcUmoCJmdF7zP22FiBbWaq2Azv77XFmLsfP",
  "key13": "5GNbci7NZotNqTwi8EgT2fYBjuoVzeYZPNeUDcE3BA6uRpNM6ovEsHwAJGaLvVymJdDHg5JRqUF2dyWxYuscUYNM",
  "key14": "TcFqyFt5gGpXvfHjS7nVFkmW52sQVCJEfd9DkaAJrkee4wRcWh64TBtP5nzipR2AbWD8QTmaBfEa9Rg3nMebmiG",
  "key15": "4U82v6Hf3dp23n71UkLGftbRnev8XUE4s48bWzN3edUD1E9poz1rCAMc7CKT5ifZ1t34FTUqYfRvTDVaP1rF39B2",
  "key16": "57pawqZgjHGJ9Xy1fXzdYdAqB7A6BopSAhwpNb1ebdxCGHYmxiMb2CeE7swszkeqYNdAwQcC2asP7rMmmShjKdiL",
  "key17": "4u78REcXQ2uGZuV1D7ygExyf4JAbxTnVV4uEQvtzx68Zaj1GQUfnvvTw9X79PBK7zgVueEZyaJv8QZSHvxALfT3j",
  "key18": "2eYcv4kVLrA41TDPCrFzoJphJEd8PqtEME3Ci93HHUsJTkYXS6vf88QUqAKfWcBkaCj4emELaY4C6z1ooocEQDNB",
  "key19": "3Jjz1UPKKECEEyvd9F3w4X5VVsj118ydtf84gR71RpjH4ZCPinAtuo3mKu27qQPjb8uyi6ae9UxnEy1LTQVDyETm",
  "key20": "5YqcU46hz4mHxsECGJ3jgTnLx67sfPg9hknRvVi7Hg7mp2jiXyMjp5DeMdL7zPdDoBRzJx6NA6HbTMvDbaG7tiqL",
  "key21": "5ShFcnBZrK4xj56p6EneqiUbG88KmTDcuZi3eG1GY7q91uyEDsTszUePvcDt83kyKEymAXUuv43JQUtKFo2Cqk86",
  "key22": "3YXHtKmFaHKNktZHBbV1PhzKHVuG7eDnPi9CVAfy2j1Knjt1wcn3qZB5ezoznpmuk8htZw4U1p5m4qL5LgfiLJ6i",
  "key23": "8w2XSVfoXJAu6b6u7PtpKSkcurWnhJsWwXhpv2zUJC9JLKHsfZhtL7J1cUqjn4ZHptPGPxmZBXURQ5oWvnwp53Z",
  "key24": "4FxAMXRuLiFVksC9RnJUxqvafw4MdXAUZTwVA47q4ytZsybWsgj5XhHVgHaxT53AgZXjvQ1DEzgTRBF76vYBQVLo",
  "key25": "5DMkeF6bD7cp3WoD96TquyWB8uyPwREYXhjbfuwrepje1LMq9RioSzNyACGXHiyAzcqAkWVtoFqu1NAo2it5fN5b",
  "key26": "2WUucK8H6MrQbS3TJ6464X6XhEyYa5R58Yt1c5z7pmvFWYuDT8HuawJdMAYsWxnpGZJxNcr6cQwpyr6JwjiqSK1n",
  "key27": "3p954Pn2rQToMF2yMyVomr4jVL9xybAf5V52dKbhjhVR2pPtTD4BRp22i8SQ9uLS3DGF6dCesxXJRhVriEQmfyk4",
  "key28": "2Bvaz47R3BZsNRw2ycNshiAPtgRfBY7wCMf4c7idtry29xf4XHSbXTiaApusAdwYmZ1CWdsc3n1iquQjSWKJJqeZ",
  "key29": "QtFMFJrW5t7X7nvEcaQpVdr1DvSWVM7vzYtYpg7aoKGhgEtsZoASeCr9bHBvPwa6q2i2iz5hfXWKGNdyu4uU622",
  "key30": "3RTfjoFkFXNY9E4rJn2g1essDEYd95CwE4LyVfBxL9P4pz5KLSmKqUTvw5mMjXnijmrpb5ApMEVtEzUNGyqq3nMa",
  "key31": "8nm9Y33UR49wL3tYLkCZKjTBc3SPSAHNQDWK4wwbfGNptnywNddMX4zEM4pLtoLcEkzCdny96uXDfmwuAaDVAkg",
  "key32": "w7isFZSzv6f1Tp3pyCme6EE4x9U5Dd8up5st2D3cuWac2wHcpqG912KT4zU7B39YWVKgsAE3BeuKK6frKECwN6L",
  "key33": "2urHq3CK3oEMaZ31xPdfXmQgp9jHyJCVTXxD4Yi4o1yx6q7ngVeexwP9hEipnnnZDio8AM1Lvt9KD53mDjME9yHh",
  "key34": "4Veacj6mhKV7my4s8VHE23KZ8xGSHL6FyNcxmGG8kHnTPxh6dbJjZHXCv2YRCumJyZqKyHkEsh1wTk15j7VWWvCR",
  "key35": "5CXC5W86bikBWvpFGjdBwrTtLD1soThkWn9QA3SLqvtshNWJEVLeZW8w4Gc4z4WWbZz9LgLb1sRKeCQJrU4DPkSZ",
  "key36": "5aPki3iGgAab7ZGbscRyLN91oC9zdd4bntDh6eYaZcagx4XWf1cYH9KV9t86jnvupDBLN8rhtkdHWrfni89jqr6h",
  "key37": "3MsYWNvGw4JJ5vqKbw8YGZr73472yF1Nb2htPorUNFQuEWAuMnRSK8FMM5qCpdJHS9uNm5HZoEyn54bwWF5mCjGE"
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
