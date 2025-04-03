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
    "qM7hRZ6RnK7VdLjLTJFkmm5b1HYgSEcCZeqD3LFAotYGgWPjt5V2sYDZsJMSg9hxZ8Wqc5g8LXWvY9pJbYWo6qX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GUku87gz1itBV6TFYmq3Ygd9XpJTqXowgkda43fvWeyCA5BNhXzCnqGkM6HZHUNZ5icpjDtWjCyk6YxVWMqgvWV",
  "key1": "3G9KaDXd1XtYCZVD56tKjr1yBJijaFof3bGkc3bSBqJCE2ZsExKxYQEwFvCPZnB3G5q8eaQjLjzyg1qnE2VysBS9",
  "key2": "3sDkGwYHyZEzYSnia5bckJ7iT8vr5CQhRh6jwjvbdLXUk1oH3Y4nfF6CYxadB9VQsNaHHAeUdZbFCogtXSRbTLLz",
  "key3": "4T62gnb1eWFyg4Q1ZJZ225ehgQysf8t3gmHzvWLsFpmBfC4f2u5kApdApGpU5p5NVDuVndfGosHwpPBqhYzeYLR8",
  "key4": "ncr1HrUvXGoBuUc61gYFLsegauEqtBMaUz8HaBJVn8oUFJxzeeG8LRuK1h1io7wxDFAbczzbPVSiUTSiuGD7P3U",
  "key5": "23kkYRbidyqBNgUmSowUNvh9ZYYcYaKCMYHWdAZyjisrp5Ei7txBURxafi77CNLhhbAwemCdhNvAjP1SHKUVsqVY",
  "key6": "3uZT39RBax9iSwomxuogQmTMY7bhe7ozvnFHAyngxQ3C3388TqYHExu37a3ZrJQMKGzYkTpKiuxVtMrNEUyQjrgc",
  "key7": "5bvhBkmuddsGtuCSXhgtvYNnhj91WSYpvzjrHuWknNN25o7wCVsCjsf3J17pqUkvdBJ2aoxukR2n4EZ2ffiULtDN",
  "key8": "4XG2v2y2YFRpfMQDLCxaW6oy47ceetiqXm5ddMg1emW934s81tmXYy4NB8bBTk5PtcyqRfKbSz7zgrPQzYNZieF",
  "key9": "2155fmjZg4RdSpZdct3UukBg47Tqfz3sRsdzBDyPsFs3KpzANPxED8WHFBSk9c55gVRrtkqQBWTXaVNrZujTUnfd",
  "key10": "4aP7QYvj5mViaXG3dYRHySnDrKciuLL9g1wQZohfGNJum4R5NwUdm1R46ZwUJTjaq9KGEvhX1Pjj2FWRhAstWrY6",
  "key11": "DVNbwkLGf6PevcbGhTEHcif3VgQtpyvjAStWwHK6XsSr1FFGtgzGc5FjRckaHnsf6G7S7ficLGtT52ihGvQyMAU",
  "key12": "3P6KSzEvbatyRPKNm1vdzZtw6JqGAfnLWT8DVBC4uaK5gCQRYApqeqgiHg9g5wJFCwHaKHsEEUZPEKsveAdohZy9",
  "key13": "5ZtVshfSh4yLzHWMJ3bpFVT8s6Wf5kQWAvcuF1tqUivjUZdbgXjS8HVDNpvJFehytgFpEXx9ksznosTo98iD5WLA",
  "key14": "3ZQ9dXgFh8eBn2T5S5x6bQac3KFUQziVTFop4TBCqoWCQrJDXeUjhUGfeFRojZAut3i3tJFCcCWSd4cHRP7abKdk",
  "key15": "5MPm73K2PiSguCKnABWK1ApuELNpZWt9f2vpKyyP5xKyJPtZs8PmF2HN3Y2wfjZLwg72y4d7N1Y2zyk2nRCfTAji",
  "key16": "2TjQVM6tFYkshYKrctsC2iipodVpxZqKtCTYfNwuX98dHP4ByUbmKLnC7Znn9R5SdgiJ39sUkESyCs6x89eGXoxD",
  "key17": "33ggBUVHJEZFbLPANHj37MrasDfJzm9VhjfRD3kYi9Qqew6tYJTpYeiyH62uMYKTZ5dTwJvN5nxnRcKvEVch3W2H",
  "key18": "4X6cCRVADhPAkKxMLwmGnd22LbJEYZPYbWUeWUcLor8T9F9nrDoh64prkkUYMU7QcPa1kKRgB5ByuKZmaLpcbaZi",
  "key19": "cs45pdeyp9HxejqZBnJ9zXsq6XQmnMv4YrSypUvwgEhyyZ4G4y739jzKFiDQ2QhZQa5L7qN8jsFTeekgc2m3ZKy",
  "key20": "x3Bo3X5SmDLPtQwu1xF1SmUXJLgCZm3RNDWsF538o2BGDnK7T8ibQNm2sJbSsukhG2WebRYKWWuAheiQBoVcR3z",
  "key21": "2ucwbaqpuGaNFfoFwExE5dXYsCoZVxVbAxE1KYWZcU73zV78U1rbSsuC9PuQMJfuVvR67mt2KaYcVu1zvjtdN4tR",
  "key22": "ryhhkyjD1JZpuzoiwyMEMYnNrUuxCQwwu5Xi4rQKGdN78XRo1AYUvKpiGtZPvFcV8SGzERQm2J373PpQfikjvjf",
  "key23": "66HvkjT4gXCafGB1a1zfvDsSMkNjfgTgiF8nRBD1nJWvZazRQJekV7cUj5qdSHXk7HTRLZZoYhzS7ab2e5AYjy6z",
  "key24": "3PNizU8RF2ZkjeArPT5E6bAiZggmKEvin116XH48PVfpmMD27vWnk31n5dSDsAFxmV2gFCACMuRZ4yskyztaS9uS"
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
