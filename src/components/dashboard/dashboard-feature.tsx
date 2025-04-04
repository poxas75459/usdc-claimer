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
    "3GP1eCNBra7VXW1wvpmv3H4qXehVbNHTdxPHanD7ZJiiVeGMZUSedkfgwNeCjBn7F6StWkotjBG9XyzvxkTowxWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pce3WAxYAvmiaFJEnkMAQC3fPryjLqTYf8Mydpy8fJjaSGoxhFtMeCNMHghhpBeJUiuXGEsuV5kwX4P2vja8hwK",
  "key1": "4LK1hugzADHzSJhHCrp5jsbrNkuwUU2Q5U9wnmxNnkEv2Jjyag4tAApGfkzzXjDBuVMfaMG77EKzzsYqWnZXigLz",
  "key2": "5Qu6yobQH5xGaqzFmJmtYk8Ujgudv449WUbbXpHodE1i2YwKY8LCrp6CUbUUxfYWiCbPTwvteDugAJzkxKLLgCrg",
  "key3": "2qQTgbFxL5rMcsEsXZCqikyswF7DAjjUgNxAp3xcEDq3YTELr4ygACEYi1HddTQhK7ha58kKETr3cUEbtGgR13ms",
  "key4": "2B3Bp9z68uVFjAiqHv9T5ZVYbLiys8VJjoJdzMHLGMfAcXc3dD7pZDQtXUrzXaXyTEQV7y7T31M3WDEGy6gVyhQp",
  "key5": "5iuiA27grsyeMqH7eT2FWTRdhaLEc13j56Dzo1FqVWbbvmU8HUsa9yTTBSdcsZn8C4EAxGUZzny7Js9Xnaq1FuMg",
  "key6": "4ZzDEPRpAVh1rLSto9pghnNG84ciKakfzBZQAQmszvTUriJY9e1z9Ty5ZtQCDS97Y4Mp51HGUAmYCG8YAsnT1v3v",
  "key7": "5JyPy3TqdFxGYJuFjh6ywTmVHD3uLTF42Z1DAXSUxgHK5WE9vDseiCmQY5sjyPWVaqv2uwjo1MMbqofcaaH5CNp5",
  "key8": "61hNsoBXRBrA1Xb92P33anLWg6HNJKWFDaovznxq2ThRgWMMUkChWNNDMwYwogcjLHmJcdRAZamfjdUoHWZSh6ZT",
  "key9": "4sSKmQtpHmZdKUFBvYeW1ARGXJdpQERXZVBxBps8xVurQjvdX1UuxUeWKaGrWRXw2vdhZBFW5LNxnxcEjUUrKZr9",
  "key10": "62pGjwrVNJNvK87qdzR8GdX4kpYtkyh4DChoE1mV2DW1CmKnY88SwoDXSbyycvnPrUyw5DSakZS6B8UkY7k4ccdv",
  "key11": "AnvaezVRnwR1MEreHnnqqFKxWPGNK34mc7L1rn6SnQR6s29BdJwAQdr1vMLeYpVJnXzYygtjGKxz2e2sdqAaVKV",
  "key12": "43YuqKzjxAEGRTmNmpgtd9JFUK4do8sNprkXNVoewaQTzzW9k6ajkman96TseiadyGDYdGpH9oVCM92971nmDrP3",
  "key13": "iuMVQbbyBbni6G1NacCtnwuXUgS8Muz9J3pFHra5utb5nfxkXdeny9Q43nZwoiB5CxxGRRdrPF6oeAT7HdGoXxZ",
  "key14": "2sYCwhcZen4W6PrM7qm3H1PKrBo3ePKtaFyyR8M8omaSZvVy683fonkVCa6PCPPxjw7LozuRUpetXmqKNmFTKct4",
  "key15": "2No6jnfdwocoE73wBnYiMNv5CK6kauJ3C5URD5XP8u61krsChvxHPH5WeX3Tpv3yygExT5BdoYE7UMXKD2CXAZJY",
  "key16": "3GhsHkz6t1GKpSvfshX6cgShya9kmhMNSwYtKmFxZsrpFpjCwSXkzz2azz1M2tTwiX4DTHLjJ1QWrVYyaJSQS6tT",
  "key17": "3YZqLxFQDXpCTF58v5MDqQhHqKmYnvQVfWcokDiWKseNH5GKUmj5qyMCFpuFNECQLUPi4awNhVEjSEEgf7F2JsFi",
  "key18": "4HzeRiAkWmGNdimDTH7FR7Fghy252MXTBAw7cimZRQdBpLD64QmGxPtTcCDDZYseiqE2ZZmM72j1Vgnri5auM9Mn",
  "key19": "2ggV7Vp5Tq9CY4qNFSwGJrxPyBE9W12nzKhuKuB27yZevwq83jV2gJGCXYy5J1aF6wsrCFJwhAidKz8msWXpynvH",
  "key20": "63FVT19npqrPkwVmoGuPCuy46NZzEaJVpEFqXhAp4HYzmdbMRHoZEopv59NCAYb3bigVBaUgLst8PsMj9Yyoyrq6",
  "key21": "31UZJnZfuT3NaJoSRhctNzxQKASWzdJL2BaCv2iJeoTLn5sfh2GrWguqZi9fLSkxspYhU68V5eccVqzuh1GrLyqp",
  "key22": "5fgZDp8v5x9RTPxzVR4uX1BrVVWPBMQAyjpwS2qajLvSPEj4ZTNYPAyn9qYWFCw5ThnKdWq3FpRfKvoVtFkrcc3b",
  "key23": "46VuQqpXzgDnsTf6hUnoVDPxdZpGpiztjJfB9GGP4urorB6ww1K1Ch5JrW6C5xojLPubYruHRje48c3inUFByoM",
  "key24": "2EQb9H9zkRSAYe7hnU1PFExN4EKRJPzTPkc95S3Z3gHi5Lzd6g6yYCrPJSmZFNsMJHddYa18ohW47NEe12t2cjCs",
  "key25": "27mwV8kHeHjUrw5mezmU3zT1SnexQdYS2ZtuVRzxoqNSoHzgXf94aPKWYt2ms7vPeuog14R5W4SDyj36YZEj4Yun",
  "key26": "4cwqzKb7oYmTtdiMpp6V6vWvFFw8Cxr6uGxxsQxbWHYfH8ao1JdszJCtvSvAwFEBFFRa3mWB1hDyqKYZtoEiv9K3",
  "key27": "25wFf5NMTWJWUWHv8ZATbuaxHYL1nMtZbmwwB3KAsrcAyKnEVZLutMpCJD9sXF7uCtbanSw6EtPm4YDKPGHK8gr8",
  "key28": "vkwpPLjB1H3xKYecTn3n3HQdn6ZaBvhBRZ49Gpge9vsMD1h2wnmYNV2AHxZVezzNC7N55NWtGMSRJHYm5Gzq79n",
  "key29": "37YrJmxAqBfZKspNxv5MjtcZ7LzmBAEcBykx4H5wpLQqLdyDQHJPFXNcT4ynFBfsJDWrmv7LatHbMu67ou9kQwKd",
  "key30": "4gXGvpAHjFq2GPR9GWByWDnL13JgcBHJaNUjx3PpfapPZmLV6ouWFMGigA1VnGoi5JBRVkyVqn8gGfLYriKpZTbr",
  "key31": "3VhyXfNvfmQvhp4qSYRpSgkZv4PZbTWRR5SqhRYdQnTmiwp5Rb184igWzEWMPcGF5713L8JcN7Wfp7nMyXmqqCa2",
  "key32": "4DrLVccB2kMfobL1GExBr6QEpB3T8VSyneyWCzuhNbBqKovUDKct1Dp3M1HiqmRCP476tMXMyeofcapwG7qm32bB",
  "key33": "35PfV1khbp2XQNP1jUN62y3Q9Cyp7z1UqHJsvyvK6tjFun2WneUTaALsrf8Vvzju1WNsxsCQ74rxxFEHdyR316bg"
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
