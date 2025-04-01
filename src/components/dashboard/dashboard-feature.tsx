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
    "57k1fNSnkPGPK2Z7KiCzCn1T2JTq7KnEARBqFykvftFUNYP6CQFJA6KmSzp9uSjgASTwSdPjR2hKg6WfLnVFPFLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KMrG4t352GKpLeJiTXosvLxPB4ghD4vCx31BjQ9ChmpUfm1NxgvmDFwsroMkicXQqXRgjndRdQ3yBQL22aB2eKm",
  "key1": "D5GpdgPBbGUGWew6K1oWqHsSHQLzZsk65CnFVHu9HiWzPfWwKutH7EVf1hLE2qqdx86mLKakzUrVr9G1usR3wG4",
  "key2": "4wsnMYb2bUTukTKbbDy8BhKGQppRmD1KNgknUCHiNUQEs7yQWFL5WBW9yZgcZGsu2NBwTVmUULa3zR8YngEzyNK1",
  "key3": "2sVcUXPbg7KfPvY6v7s4NZN9ESmRYyA7SQbLKfy1VetAX2KCp41nUKYeQL2k1mgicu98rnWKPMNSvmCWx5Zqk4cF",
  "key4": "3PY7srUC5FZvzRS7tsfHWEf2wFrog57ShyDk9Ji3EpKkdBJ56nmbua2uCHXW4s1qkV4mVr3aCZkzfDZkv5Wdk9GT",
  "key5": "3McmUeNnBFs7q3QAB3jv7QCdmm8TqV2wUyoZEHy9jZqVbhRZ3z7qywi3GqpWC1nVpaeqkjFXCue99bvXpJ8urVH4",
  "key6": "y4rsCCjuUeNzs6zWWnTwu62HybLwgP2gHfmcv6DJnCwgQPtWWwsK5o3npgCvRmUcbfpbMQPWPNtd24qinjKNnrd",
  "key7": "4estXTURFRDtQJsFSkyVLUHjq9PZcLNke4n8JP9tjDZ8VBdECVtnz6niPN6NBq1W2Pi2eu3q7m5wJdjUKNHBxrCR",
  "key8": "5WAu9aScchE2mSc9kRPLB81VyELG1njjjiuATXpMeSuPbKdu9woiZq59bdsPbUMFgibDoGkA7Ejq6aT6utXjaUau",
  "key9": "5CXWvjMSTT4m8K2stZLoocty7iEt3WW6qP4BwUYRfKYnnDNqn2FYqSeWFxCFBiZYjHZjV9o7Rp5QxjwUBHpmQSrc",
  "key10": "3s9iYpMGmPa2YfT45ojXCyAUEMgpg6gwtviWQBDcfp1KgGccorgka2iMfjZVE17JLVRN1nBgdD6mAaRcy8wHUbPo",
  "key11": "2NSYNUuhDJY3pWP6jHkQQH7AdF3doGZpXQJETY8xp6QPPVSWM2tX1EKXUaffxtFxdGdg2uyEhNeExiB2RSNGhR5T",
  "key12": "43DNtguyPq6Jid3kAUg8m5zvBpR7KCW14kYn2RaXhbHLkDHngX5UQy7i7uGf8BkrwtGb5RkPkTHQMwpS7iJ8vdJJ",
  "key13": "4y5TUPnZLyTrn1khacWi8bMj2gVd4LSdkm6LqJNszeyzZDSLNKJfkZJzH67MMTWM7xTNrNTK3RQCVrehTToeJYwu",
  "key14": "38uhGKRMF8Uk1GLVLbzmy4egWVx8KhCCYczZTFm2GzpajG8YG1dZZDR88pWUTQnXW46Qdu1KqMbdtjuWtXGjTkyN",
  "key15": "4LUorxQxTun75eNGpQGtMUS77NFFi631u2e7W6JACf3r1HPXqNQxMK7QkFLQe9bLbEtdnbJzsgNWFWcKDqPeWSdf",
  "key16": "rXECZJFCrgXKMudWRDcQEfAN2Jr1dd4xjxVfzyQGPN6eG2MuQQEy8m4j9eifXSzsrJAFNwndKfBMHtT6LzU6VtJ",
  "key17": "4YiffpSGd7LSNJvfaqkoNV7jVP9FVV7tAatsfpL3v7EKDSiCcRZ7oqsU4zC6jdWtmF44Ls27WhFdkwiXQo8GpdRz",
  "key18": "qG6Ynwy2au4rMUCh1BPqkoHRbzWXsiHCDuQgXARHBNFG5ev9hpW4J3JEeJikgFEGF7Tz1NkSq3CqFNFhKauPmBp",
  "key19": "2utSXtzrdoHXzxWVhaJW7Mh2hKHXXNX5S4k1hrRqiBLvzau24KDRhWRqccUYfGpvVy9mo5kJ7hYFgEGx5XtrfmqW",
  "key20": "2vMQSpzv5C9KKvj1uitHonVLE87FXeEwgxsN4eFRYuUWPmmhUU2BkaKjV2i91h94b7TMYYeBQwMT1YsXnsxF1pND",
  "key21": "3ZMDzqdnGoaMKeqXsZ1tJopUP8sieNBao8BedK1GgsAe3f1sdWXSGtWzcmJjzqH5L12fe6QM53FNEu6JcjCYoUA4",
  "key22": "2HqnkwMzKbCxJaDA8pzUyWfhppbKNo1dstYddY6iU8MvUjbXmvLFzxKZnCrtDkT3DCguEtey7RyXtSNmDJ4BF1xQ",
  "key23": "5f4HaHxeoDRXeCjXFNYQsaPLxNtchje7yUnNAMF8Qwwe5Su7bik1stK8iqqQT5c4SjVDHLwzCkxChZvnHcDgEBVi",
  "key24": "2Dv8QFSQchM3qnvGvmqR4ZAAEmjaXUH4gTpe9FR1isQrmLKESZ2yGcsWv91TyAQragdz2pWFJ2NxjKA3ErWJ8xA7"
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
