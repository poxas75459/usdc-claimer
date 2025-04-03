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
    "56pyY5bWxQqCGToFSNpHevPZFFKPypxUBTASYQcK4BxyYPQ3xvc9p2fq8Ycj3CLZkVj1wsWfDeo83iuSVo8YxxcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DhEdHJb6kpT65vGkbumdqQ9o6rYkykEE7oepxCfBC8SmcSm6z4Nn1K8amVEV1cP7xxVdN2P9tN95NKXxjAX63aU",
  "key1": "5ZYthUXNVJPRLj3vF1VtMdDuKmXAgi1ggVL97mLYqntnfHafvLZgNKEANiqdphezTwxGEQEGsc7T3uF7bb2JtV8t",
  "key2": "3vQEDMY9KxnV9hm6CigVb5F8P1AxFd3Tk1BCmptQwQ3Y71ppKNYS748ZPG5trtT3hkQwG88AV13FKzUXpYqx2y5P",
  "key3": "2e6EHpKGovZHEAZFW8AqQX9weraHPkuGSkN393SXrySNaji5YB3BpwwLb4HotZLKQiV8x7BorxpwbZYANJQ1ZnFg",
  "key4": "7rLh1maYwxmrkfMKPx6kRcySe9N5rLRmCGZTvsyFxAfCGGk7jDix445YEGsMGhehaaKYQKiRu1QhpC759ta82Fb",
  "key5": "3u4Yrsn8Nq6NFZn3G3ZSM6W9tRJv3Z6TmQZUTto3FAWxCgzHijpGTZXV2RjiZkLstXsJVnHGz7beV5XiyajntnEi",
  "key6": "3ESY1hqsYJp4SAbC3GoFYmHZd6Egyy1CGRKyvJmCKffFzBci5782HnMCq1tJkzPAWVJZ96TLk8zusyzn6Vg981MQ",
  "key7": "4vVzPGsKYYBeGSuahkqP6puYRM8GeFuoxXD2GXEsJinsqsgB5q33yYAsaMKiphxYKX6sp7Fr6tw2B4K2XicK9LGY",
  "key8": "5bbJVqjnzFaiYq8FG48CiC5F8yEbumQPZToHssA4NC1P5zEPeujB48m36qekMnPV46w9zU448J9tnvXgRMEcLuAb",
  "key9": "644QrSL8S1eXaKfTqrrUYns9BU3DTerBrh8aRUrqfa9shE1mRS1GgVHGnUNSDxNZqLGWYkKNuPxanRaKvPNYYkDG",
  "key10": "3eoSvTy7LfUbfaz6Wnd1AgAAR2Ny2yCkR36z5Awm7aLzgfrpQno3HPEWnVF9x1RSjohxwTYNkCob83qAMGA4x3r2",
  "key11": "e1CEZ7x8eGWaRz2qCpckeSGGX46izR14ybEfPZZmtNDzr4Ki7sAmYnL8xFJUWi9xxA6cz8z7LpmC3MLd6fqLQbL",
  "key12": "4LFGRLax8evVawaGhD2Sy7RujEQCESeSkDSRVyntFUM1porqQ8oLXf76h4Wna3K63eW64gcwePVVaVrnvyBjVjbb",
  "key13": "32ZzYBZU6JBmxAheRCYyrcaFnCvetR4tmDPvWnbG2eR1DPANJaMZBmbGHi1SfgzRTjZX24Py3N1XeEPNfMbAbdn4",
  "key14": "2pLRA6th11aMhnCe6QZG8y483dopC7eRxeegqjbBDoZmPCWfUUhc8Usvo2VW5UVhKKZpZdYxGrpHsBoCbvudUvA5",
  "key15": "3LH769QnvB1FmgEW92dAtGMHEinvW7n1iwuErBgW9Wo2HsAkwgXRfVpJJ2sfjAnMuB5fmRZD341K2BP3cQoJg6pJ",
  "key16": "5NHhNn1tk7q5nLoYzstDE57mNdmPLkSyeC3ceCsM24WjU7qCtuCTdFmEzbg6KszxZd6BSDxAc4xZ9WSrS2WmnLJ6",
  "key17": "5B29cPTqL9hipAxDScDwnfRcoFwhqVMw3Sk1HfVhzBHFMdyisFwFVBHzKq1Qby8y8tPUwyLTi7v2JLHa7UkMb9xM",
  "key18": "3BNdCgkDXg7eLeHRchsB4AHkhvbXoxg1CdM8QKhZdTSpHwPkr4SntkdAUMcnMJ2TrGkULVqSvrgfJbDGvvcbLf9R",
  "key19": "4Yyz2Tx5R7cjZiCgLgQS4WP7DcfCP8Gdk5takJKgQn6a8YdcXkBY2PHwSaDCy9ekgd4Ysh4eL4JprShNzyGtWbpH",
  "key20": "4t7r3F6Dii2G1DL5RTMHFZhE6XKkGhXz9Ph8KKDQaABDMGU9BF7vSBC4TfrmNMGaAuGEuDGPNP9RVCZ4sBxQ5HN3",
  "key21": "3DY7SXuD8qKfD9Lkbwnho8AiD9g4CC8gPty7W743CsLEvTM11CrX4mPsVt5U3o6j7aw15iGr96tE8CNxfYD3eZu",
  "key22": "5VLsSrkE3fTmmnxCDpB9Ua8EAjptiLgUyubxkWP9tyUWXjq8jkw8REgrBA3AXS5NfgdRP8Xy9mhHy3QkbgiR6QYC",
  "key23": "5kMEPc73mkMAhjPtptb945zkCCU52eNCHbW6vUUA2jqX8RSYdTHjcDW4ggb1vJB7Q3xioxu1i8TnjrMF5bM7Ccpy",
  "key24": "3NK5joPPu6fCVWkc1Ufr2h5i8JTFMqVu9SspBVvUw4azpVseTWeNuF4WqQMTS5z86QihbHQFb3GY9NntBbFizghL",
  "key25": "5Hbc5Q6i1gMCQRwrBwL17SaxMub1UvFD1BVopxvAP8t1mwnKiZAwDEsYKDawM5RGxyM7ZgWUBS5MzwLrZogfTEpp",
  "key26": "5xUv7thd4qVRoJA3gZaG9hvzb4nTww64axCa6dszLAZpdZobmq3hodaJCBzhR7DA8pdLVX5HRsDSFKYBwqecxp9T",
  "key27": "sjVRkNswq5GtgkN9Zw7onSiJtgxJztUpfsf77YJW9oM7yxsf1SHysUawWwTcRLzs58hiqxmYRyrCmZwnzEAjzYi"
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
