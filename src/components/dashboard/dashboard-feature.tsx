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
    "2kd9SyQ9mdpQC2Yb96BepDTM5PxHBKA2BafPxMGrcUuqkZ5FVs9dJbTH6K8eiKmiaCPj9Bxq3k5hmSe5ufY9mvyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25xoU9CkQGLFjZDHwCwKGMMY5Jm66np34KhXiraQdyz1ALMTFHA4akABt5jXxv3v9155aVCa6RqgewKNEkiTLaat",
  "key1": "tsessuqTuFjqVBjeXnfPi5bZLhvtAEPyCSTNuMqnk1AE7EV69HQvciap8dhPjM26YFPwvq2yiV599cBUsrhmXC7",
  "key2": "3yFGDhPVZdKvSobXXbmTUCYRErm2vdG41hbceikxgBydZp4NwaEWJng36U7NbyG2v3Ne3sskjiq2iyGi3MMF3pdQ",
  "key3": "274PuCQ2nxHiqNHPEMzcfNRQc9aBBEAmMngj9KGVpoEymRxKucJrsuLJ3TEqc1AFW4WiYcw2n26Mw77cqjgQpWDJ",
  "key4": "4qzqXuZWn1TdUAnCwAfKtkRZEia1xuSNfS4yjMb7c1XUaNktQraxGGJvfHFusMzXzHYWT5cEc45tCkD3JVoLTqxd",
  "key5": "5Sk5WRD6EzoLTskcC78FGvAgRujmaRizWYNwVbcaY3S4A6pwSRUsD2sQAJNuwpLhncbYBnH5KXvXCLNzpXf64Jjj",
  "key6": "2Vh2gSfpsCimpvHvvpwoqKtpdWcE9Z4G4gGhCpiB2mHPaRBZof6use9WwuxwaUrwVnuiaXPbxWqyuqxaHgQBTe98",
  "key7": "4G7BsK8ia8ARhCTS1V6qyd6SzTuHFtpNDbsusfH8PFZYTtnQHYdai9ujQhnuA4AXmKTGAwNRQPXxH1f4YXxiHPqo",
  "key8": "dgFNhUoU2Q4o1TtUk2wdYk6znnphGvyAAgsnemyCUo7oyc7K3We1NSiCgTemh472vT7Fw9pnoptrUN68qrtor1F",
  "key9": "3Z2WHE9shmPxXaVH9PyJ7B81XLou7aHwuqSC6nAEYGPsyYiASyAEkWCtoTh2e8nT66mg12bGFWrinv9sUH35JxiR",
  "key10": "sJj5GAuqTwZ2BVrwosYiX93xmBaFAKn3SvxiZKQXM6Mc7orQNWVYmDGKJRBEDcsWseP7QHzsobrvERuDba5C4Pc",
  "key11": "2X4RPw8GdZep7nNqLcLJD7pcY8khFq3aTyKXVAwWmeS27gsa6FgNvYY32t2JWdswTRjx5HHpJiHJB5Dv8g4tSGKK",
  "key12": "VgMzasgXBPoyKkHMiNcGpB9pfN56EvnQhhZioyzKzTa629skNPPiMgdHaXEAEV8kHwaRVBrKmy6TG4wBbmfPYPB",
  "key13": "4mdmdSG4B6Jvb5DRjyKcqVeLcjd2f5Kz8XMjs8AKkJ8zfdGCuLEvjcfJictR6wSVCsiZ4iWpWujRwK9d1d2WeMRC",
  "key14": "5nEivgub36dtfJ1mEeAEw5h1hSeu87dwWx2TxDgy6uSgK279QtBpRk7gDNqYwoaMRrz6WiBA5wAr4iCnR4Jr2Ao7",
  "key15": "6ixysB5esXCpaPGBVUZMtNp6s9mwnhZziC4muxFbY885SFX19dTYUgWGzGyRK7rvR44w9Yw8SUL9xRUBb649W49",
  "key16": "5yDNZqtdPRy49zg7nhqHVUGYa1Lchz1niBn6H7u4i5c1ncHuTqBe5SwHa7RMsR6fYCZgtbboNSy9jTRP8NyYigN6",
  "key17": "2ouwMFNz8VG4U6qDiDobghDSEv769TMfRdDdBk6ir5TVmUR8dEn8t6MGGqivpM2sucaoBy1235T7SK8ZYcMZ93aW",
  "key18": "4znGpsyK4n6sMcq25VYk6JVkgJXqH6Ua2QD4LCnzr4CzGLD24Ksfimb9wtPUwx8xv2LM3t6un6XTWxCiuUhAgzFs",
  "key19": "2xr6DKLcnbCysR1BRAF2gCJHQAGQJ6uEoz2Eo1JccgEsExyBHZ9WUhBH7J25ar4GaPADPtmGzZgppaUpJfv6dHqo",
  "key20": "4MRuzzSi2eTWngY8ceAu2UhnhoHEP7RwRW99se1hWTJ6QYqdjqTZBJWuS2zsyR1gqaRKnGpf82jNYT36o7Pc6p4j",
  "key21": "62tJB1WZMA5VMxUy5qJkxMJGyQnCG5veuoDZuD8QhThw577hXkxMXFvTNVHz9z1k94GhH11F5x9MaJ86w826cqrM",
  "key22": "4X7dALV6hkAUz5QjLdzscNbL7tco3iHx3i4YogudfmGfK79H7MsS58FZg8btmzM3WygvLRaJehRTeU7yXjm2KS2o",
  "key23": "26yr2rKKfFY6gQTUdEPuDhNV7DpHbnPuPq5CmTTNY8AEc9h3H1h2hjs3TcnymR4PQXHehxYm2hf8mcw5cTURpQiM",
  "key24": "4v9NhPiuuRXfa6QvB5mxBeWwLhn6EVZwJypaiDHfQg3dzmWQfcvgrCxqWXAX6dQauw519j6NxSRkxVTmBMwZAkBb",
  "key25": "5NzPt22w2Yh23SSdPtLsCrAbdiEBXD7sCP5fL4JGxGrVB8UxiqhzRi3HQ133rUNoP6X1GcoQ8nZAwMWDxsVogGG7",
  "key26": "2mHn7SKK8UAvYKmQgn8nvEt2okFmtnXxf5cQVfjVeYdTjU5nfrq26jibaWxTxETfxK6AtVPhwEwwfikTbAQd15Z9",
  "key27": "4MvRUAS9gsiqidV31j95HgkbVRYZNUjKFPqEyjBBeor1rMdEGMGmYX2tAWP2uZaYzQZZxV911sGMqzgtuFJPbByn",
  "key28": "JUc4cUyEfHafEMe2mpfSS5bwG1q5UpLNYN7h3GdRsHbTzdnZSE6HPX5aRJDKqcqUCzVwte98Ugiuv3qnyk3GGXU",
  "key29": "5vCdBFgVoMfH27Zh6qXbJS14QdRUqTm5rZcickDhErCgRbA2kTCE4PUHupNH26XDqFJM5qyZX21qUDFcNkHGDgJi",
  "key30": "YdLSwtoL6bxJt9BM9QhAEEvy68kNSudWESfE9WBtAeLApnFyXhVhoan4UoQQqDYXzi9JUAgpzYNR3ExFCk2kgfD",
  "key31": "2SwwYZX3mCffew9o4U6ursqpXTJ1crhykuaR6iQUc3VqotoVR6sStHnSxFCvjTRTSgPh8Dcwo54Y1nkdywxdsmSo",
  "key32": "3Xof4Ekx2xtu678wsYZcZnH8vXcrrQXqAxxLFinAGvQR4kcc3MMgEbXuRvjkP6dQQpTPhKojJGma6Z5vJf4iB174",
  "key33": "2AyGmzjgn9w5AU3aR17WA19RLqNkYMfzEzgHbA5qkY3bPAKSQH7cmnHgaCEJKPVXzT3odAjpgA99mgmjzGVCVFi9",
  "key34": "qJ3evMt6qKvVEubzfqLfe7P6FLEmyp8McukawC6pxm3gRWeU9Z8D63qz34n9UbdaV8BhSNNMrLs8LTvA8eb4fyp",
  "key35": "38BRodA3FP7fSR1MhdFvZ1Uychy52ECKiizMR9RDxGN4Z65HeAV7mUY6TPLYVNyzNDR9w5wu61RQCWJHZK52aTgf",
  "key36": "2JuvuCX1nTQo6mY2JnZiLyUXhFZndxbLBgJer22xWFkTygAQoadi38y9d2TxP4yECZCv7Xqk3zoYKDFdr7jcky16",
  "key37": "5E6qxu2a9YE11e56o4EBH8ZmV16afZo8PG8Q3hCp8rCiB3VRJyLdANJtJMouRrkJ8bv2F9GNtsVgdX3MdAG4rHFG",
  "key38": "2S9V5g214tfnVTkSKuMqAZFMvpFfv4mFVbpNKjRqP46mALsJjAcYw9jS5TpQ8a3KfuWHsPjiB98FNnZ7bHzF6fax",
  "key39": "53oGDFbnASHhjqjt5msPJyhg8n4tDV6LmooPSrqykSLVnRabHmg6SkZtETh8gxjmfJ6NHQ2WEJ9Ys3bnqNoLyica",
  "key40": "3qXjVfCMP6NyYyujCg2hcD2kBE5d8Sq2d7CxSAiagrTySZh3QH8qEYoe5GSjZeM1AEA41vBNm27Vq8zNrqvFXDbp",
  "key41": "4hu11Jfhm9R5QHbqWwu5xiwp6daU8wQbkQ7gCrQKNGQEyK7ZRC1C7kLwmAotvHCMSTZoz4WhjnANafospuGQjiHf",
  "key42": "5sXKvEoExaQQfPodoFcq3HqnJcR84rvzuzDpufsbFD9MEy4Yi3FKWqyHJLUANTbKnMZWJGqSYUUJiVLEYRzsLuNj",
  "key43": "2WBc8mNxyWCXDbsy5HkzX36qNBwa2kCebBcp6nXnS43qQzBr9DKw29Tid17BgNZHdTUmwwqajCnU1LQ3YPPc5nkp",
  "key44": "gcf8UDoaE6fmDxQCpfaGWchtzPexuYKnJ7t1erqX1mrf28DjAZxtNRZHSafTa79ADr5eb2QmYvfQ8sT61ymVvyT",
  "key45": "2r51vmsHqLoJZx1ovJ7tBJZM7rrnsf3PxG5xdbTdwE1ktD1go1MXs7DkC6nZ6tomMWdG1dBMAMBHRonJZB2EvJdW"
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
