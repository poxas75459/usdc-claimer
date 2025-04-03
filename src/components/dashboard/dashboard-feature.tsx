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
    "2YQjoDMJZr2BrXbUUmBZezMz5SSqzmm2ddjQp1KFEEoYqqGTShsCHvMsqo8ZXnUZSFqTKpBcNbXcVPavSmhzNWsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ewkFR9M5dsAuoiankZEodD3hfQdKkBNFjmYsqMArcqApt82BtseWhoswJk2n9wywDuxYGFwAiEJKyDDiPE2sM3o",
  "key1": "3vs3wAw85LDq2K3diM4ZECkvZ9o1Z8CHgqpPnD9chYHhBGUZDWJm55aDfUf8fJW2EzHtiw9Sjrgr3tBq1LABGNtc",
  "key2": "6qNgHMhiYmw46RrQgfUpYeNnkhUzLC6VUm4kiVbhvXyvGUwc49QHc74b25yqSAmPXBACW6i5TRwnFgM73poQcT9",
  "key3": "2h1sFn38McRFfUDB3t6eNp3ZaY4P4zMzHGBaJxvSasYEWG1gqQNSqGcrP1Q2SJMwDrBKuaoeRT9uxdKTk9R2ppek",
  "key4": "5BLx1gmhsxiQxhuLE7aA3mPvi7bAe8gLG9zxkF4pVC4y2qsvJ6EkgK2hwHqoX6GfyZWmnHiDmB2h6ysER2QBmTJ6",
  "key5": "5c2fgjuM8BfMeBLr5DVkQs9KXg6qjSdgPmM2L3Qp7BERCaFC2s6nZ8jQhoxshEpaxu5K6dZFiXYFQLpnpcp46n8i",
  "key6": "2Q2zH124oeF96u5wx3EhaGA7PUM8CPaFXjn8Lg5QLemsuN6nLW827KB8yjjYm2ehjLBqjzhgvZhU4JcNRJi81Mym",
  "key7": "3NpRxogScTZWkW6oUvYEn2saH3ZMvyCX2wdg4is6eW82EEZNKW9ebFBiBfzpF9h1HUc6uLY4472K1PJaDTYQZi32",
  "key8": "4kbd9RYhXyGc122mTftrZ2FhKYwNRmVpEZoGhjPqLq5BYT4PFUxcQLbQctKVrr5kaD7sa5NA73aWWqbrs2KLvqyq",
  "key9": "3fbUVr8b9PGy54q4ZQvRbdG5WeVCoSmjBEiPP2hEnTCJa5nsMN22utjB4Z6s4j6yM7qyePJyyjmZJdZd2g72r8Mj",
  "key10": "2NnZzpjtCwm4tmTZ1xj4gpAUh7akYYJia5z7itva92gFJKZdbEaGaYXTAPd4RzhosrRdpvuspM8R5dz9HGgLNvEo",
  "key11": "2gPKMRUyXCAe6ZF39QDH8Fi9uDYbUZJVzDbKnmi8hgGWDUUxBAPoWP3kp3R5t2T3kAzkc8bPvSBvTk3htAkJNyLi",
  "key12": "4SBFpKK9mVNw1iGFoFiUX9uQwZqxF1jcxN5beJkvWcUUvWoSLqdg7MKo9Tp1eLCx3RoSdJKMn1vreNbdHpzScMRd",
  "key13": "5RcsVL27w5Cd42pB9h35HVETHNKZooyt71ALKwvBoqWjKuqy9HeC9yMAJHcr6DQz9rjUqhwaLb8BHLaaBB5JrJJb",
  "key14": "5J1518iKvkESsxJN1vShgSupi4tz47ujdt66HvP5aiQWYEFLHXyDgdpPMpGMuTH8iGY9xW4RGSz2gnb3aFoQk3XH",
  "key15": "49ksSXUimAbii1rJisJLqVU763opBtN1TSf2qbTGLuzUD2KEMbMeJcfh5xtjexWvaEXKLkv7na19SmsHLQ29UGcs",
  "key16": "4nWETiz9KRSrWCQnzHaZaWmc6VGkD7sU2YnR6fEkLYbasXNPsN4xExydZqW6h1g1JaKucGJ2cE3KS3MxSPXKW55c",
  "key17": "41t88ERdoKpmfo5XESCWQqwsUJXMQhV8351zkpEHVw2CCjf8zxeDyS85h5JD4WJEaKe5dy7Dc8sM5jFmvaf2XnCW",
  "key18": "5QyPtFqZ8FKzPW8xMEAMjfZEucPCBXEzLNYHyrAQrwexxdVLg4tPPEyTvQpayVGzsnpnAFzhXypxvBFy6gwjJGvk",
  "key19": "2wCuWYw3ArAuhx6gCaXwu1Z38M2MquzbXmwQU7eyDvr6v9gHZu7jNKm2KyrKN5CrbMVEfUNxMuT3agvtWaNGtdsn",
  "key20": "48zH9sxEMewpbbxCCRBGKhSxc9AeqKLMPLwFfpDw8o4Nzoj5bA4pLnX14HQcqAQW8TUGmCTJaFJTSPggeBXScdzB",
  "key21": "54sjLXi2Qt6FKRAYYsMLbJ9oA7jdLxN4T9uquZRt6LzmPX2sqZvfFswWQ1G6mkkmYd7JPi5UPHLJXrgQw7cx2mzY",
  "key22": "5LDfRz8eNaWWo1aLiToBoJeHJVYho1AgKceGGNpDxhtzJpVr1mQR1q2jo4Y7BDsVKncs7bw4vLtCKstJXE4EiwiD",
  "key23": "2nzLPt3tDvoM3EqQdwXc1PUG5CNBZddpXZTAuKjkHaZTTrHLGdLuL5idHDkDjiUF5xeiiL6Q1EftzSjG1bYpVkCb",
  "key24": "5xYGqnSWADUKRFJgFhnhn4NZchmK96bHhzMTPyTmiCpQhznZhu2M8LK2wqTd8f99EDx2yWsvR5g9db3aakVM7vRM",
  "key25": "5KtNWVjiqfTtAFw6oDBY7WpHppFWp4CvYzSps4kyqSSNoFrXnSECvPzQMRsD7eMHh6XPzRirvKAM8Fx8BWur81VC",
  "key26": "5aTaTL3qqTxHFpqUaqSqzdgG2xyLPDEdHMCHqMoHeRvh5hQfHFS3oyYN2J7nR4VmQRD62HSAsJhEEdLTFvd5bmSG",
  "key27": "3se6wgCkLj5XuMyrucka7xy4qqM31AFh4ssvx5c8J3icHgCwXmENKzN9P12KK8UYhNPhDH1La9wwfYJWQPCAMNBe",
  "key28": "3uZqTwFPoj8j9wx4sVU3bW2sGbYzj9LtLQs3UGnG61z8z47kPyF4QSLc49qDiny2jdjMUwgfgPK1gXrJwxFUJWhj",
  "key29": "2F1ZTe8LQ2wBvetXE4RfQgxcLqoKohGyJscnn4u7yFgZBNtvMndMjhHeNqScxy2vutiQoD2bwoqR6MQmdSvexjgK",
  "key30": "JQZh82tUCPEvfeq1yL8m4SsxQ6jDc2uVbegV1QyqXojZgENLhBJb5Me6uEvcHmwxTLux9BfaszP46X6fu4abWA9"
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
