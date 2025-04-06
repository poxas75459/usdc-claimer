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
    "5QzBqZ4Je5KN8vL6Lq2aXZQ8d6TTVBaXWw1X1oiRcav2SQ4XDgJH1b8iGsJeFdZY2tEYh9XWwjex6Wbg4vsq7Xvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VR4DUk5KwtbwEmdBzdD4bPxa98MKyNqKsZMq4wnHvEA5gH4dBH456tqNLVmv6sFQQqU3EfL7VBQuDJpgcNDJaKo",
  "key1": "2pF8GPmPLVtumnrztqeaFAyMveMxLh5s9Yi1b2577hCburJC7RNjetDp1Q3LtJK9aXeu11qDxZfxSQoT9HiyQDMv",
  "key2": "oCyDPHMNuBJRauYQQGD8bgnHR8MU6bmpv45YuACqofatEfkohQXftnCnzNQFiR4ErVqRyCis2Es88PtjrxnyvT4",
  "key3": "3r6rL64X9TnCZhJrimBFA4EDd9raoHdtEB23d4z8z7JThnEuthopNxNKSNdJZCuhvmjuxx1raCDz81E1K7GLGrRj",
  "key4": "2UNs8nyYQG6Ke8oRizpC72oxwpXS6Pd39RAjFDGjRR3xpReJjdKi5rBtczPX7SnHdrSu87gM5FbigwDtzFeexe8p",
  "key5": "5JaWQpdqn7WvB5Xy6MeAgCAmLxw7KbJZetXi434nBCJC4JUoc2FAMSafizakbMBefzmSfE136hzmbo5bFriLhFeY",
  "key6": "537FukiidR5nKktny5EDzEmYcuAaTHJz8dDqoWERN8VkCL5KZ5SwWVsT3Wb72y2vqij6BLVSd8KLkoXpRPpCHpb3",
  "key7": "4TNuE3r387m43RZR94knEMCiaPkWpS4QeCiMfZZXC2P1yBKjr4CYvM7Z5rrdWk1aWFJH3ZJJmHRj6sm1QuLCgEPR",
  "key8": "2zxS8WrBPpE21y2o9MHGAyu6s3nygJzK2pNQR8o3fnyDNZUgq9Vgv9T7NbU4YWjyw42TJkKJx6K7uA2oMYXdrQzK",
  "key9": "3rmkDorg3o3YkhihVnNiQcGoGAbLYQ8YdxJM8n74wiiMhiQVLjKzYUyC5MAH4SSwDkZKZqgdqkzL1fikCecvQ9xp",
  "key10": "RoJszKuW7gTzLJQsxaE7XPRwarZujRdyw7QA1Gv3VgR3wu6eZfywrV9XudEXhwjsq4SHPwVk2e3cD7U4oJvoJMG",
  "key11": "35SE4FtpijWuuam9mDdh3RVYDtLyeteofZiJtgF6TqbjKMN5wy3mTCLH2uU6ZeM2pxjbLTFRzaFDX8yb36TBAip4",
  "key12": "55EJXx45B9QJ8AAE3XjSxFpxZoS3HB73VZDWpKeiEqi8PjGL9hGQcbhHcxL3i2KVtH74unPqDLCT3X9fZDqHSppm",
  "key13": "uWxBjQwDuWV3duPMyVGdH8tsSbdgc8jBmpQiPpCcrgEgnkpHrNzj9a7dsTiJ3cSkSqzULfrLe99Y6tPwUmo8PeK",
  "key14": "3BugXNj88cq8BW7z4RNmXYC2zmsiwyYBCGPAuJC93kvoJKncY4Sw83J9hoL3pTDxvRrUtzPo5z5tPQ5qjmoWKEm5",
  "key15": "61aM2STPdeSiZ2j95JujcwhqVx4RY7UWywucH6sGgKDMsNb8scbfkPrk4ghheiGZ5tqPiRdGwTiegZezi6LCLyPc",
  "key16": "64mGxkfCsVoFF8kFLykgWNhcc1iaTqQr5T1kj3ibipLDb3xiX2DSzNjJU45s2oizqet1vPxUXPZ69bh9nfeJBBn6",
  "key17": "5QUEqG1TkMwxeuW6xDHDu4sLnEWo3SZe9cm1yucy9nyiB2dMbjvMA5aYmF1grJUWs5vnbuATT2Tq1ADTYWdTfFnD",
  "key18": "3o8JojTKjB26q9Q5Tqw3bRKx2hrWBVCL49T5mvBNsXaNGhHkigjFdsvmzxBGt3MZYJfGpFJppYT1tUGcE9mnAwNM",
  "key19": "wuXL4vwEYCWDNB8p34q2jN7VqXi5sc6wQ5FMEuknJRougZUBgEbbh3caDvNfSnfue2V87w62ruJKrWnnX9Utgtu",
  "key20": "3JYKGPARUSEYH72HqJCZmS3TNR3KJEyub6jruJcyuWrXorQMenZvHy6Be11EKcKM4a5DeBDJPkFTFizx6j158oPd",
  "key21": "5GEjXhCCMriLar2e8vqayFpv47vJrmdxk9JH8iANJ7MSDE4otrbec9zKriKLJkTZ2iHaQhmbR6ShrEoyrtcYEBiz",
  "key22": "3TrrAgKMPdAUr2nScSQsyxiqhKHZPQuDqgMwUbshXDJdAXXNnubf1gVZvQugg9aZnN3WnQrGHMCXPBPoK277BrVT",
  "key23": "2NtY7QXUDK3VV4bk3mvcCPdp89BhjZ2ExkH24544bW2nmNyZHC7XFUTKKA3J3SRayQmm7UupaNQQMBbYpZiVo4H5",
  "key24": "5J5YoupvuxrpvF1gdyqwzKYmRsQGbURG6t8rTWuXd4PvsHvYHtEsy1oBV8uqQkipsXsR78PS8MtxX7FJ6vbRgFrK",
  "key25": "2igt7JY1RbR1mX5Sv6Cups9hirQTYX3wb48JnxnQgF3ePAUKSaUfMoF2mCm2xkG2nakkVjyieQ6v7R3bDa84oJa4"
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
