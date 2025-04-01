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
    "5VjmM9i9Yecr2izUBQSg8ZpxMwhqGgPXp6gJgJ2BvFrua6KmRNrUWFcWb4NhUAWu9NUbndZuu6ay5yJiQBgwC1Ba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59peBkvabn9CaX5FRsbQfaPE7xYCdiwh4bNrF9XQyYQYhZnxh14VL7LY2Aq7AWxcFS3rcwzv4focdkJDboFdYp3o",
  "key1": "4pmde4hbTu7ySm83e8AL5bCDtyvy3mtedqK5zjaTT1X1RiaubHj3SvtJUE5sqPJS3v3C5nfUVio4tBJYFPJghSgp",
  "key2": "4HQbtguy3E1rpt7vBJFBB5Y4YBndGQ8Dx6dCaGS9YuXTTNHc4DYxtxyLVqv6NM4Zf7uVF6ofrmRtevkfV6D3EbU9",
  "key3": "rnKgocMFBBvJZ6SonV9uNaa3CSqoadeFrbNY6rkGBVWZDv62gD1775KcG7xNt6dmaGDd3KZbtnwkYdQXpqsjUe3",
  "key4": "55XWaSh2qsV5LGhiNu7AwknMVB4jFj8r96rpZbtQyG3FBJQVkZdUHmaF5qRhamQ1jyhvHhi779SNqUJmWeRSpqgK",
  "key5": "46oLb5c5gs68pfNmF15pPg5BGhGZAoUwp7jtL6YGE8uQfM7472sQ18dVH6ZkJTmrXqXvUF8tS1hog34DCo9ThnoH",
  "key6": "L7AQpNAXfw42XV8hbufGsbihGei8NZNVWr9SL3RrDDdjmqpoJuWcfyx2XZctqUjkUyg9kkKbFvvoZFP679E2zch",
  "key7": "4k995gWDvLzBjNhXjgXs5YjWhykag5c9pmRQc7bZfJB6gfFcyv933GK3rKJ8RLgAHiYuQngt4BwxYJdtPhquPq4b",
  "key8": "61xMMSZomuhEZNQVpkhXVRq67qpwjHtKrvRhrPWY3LK1KBSjdvQGLkr6f7Zmw9wdT6A6pJJRmoGSZvkMkvZN6cMC",
  "key9": "569FyGvqqZWeQs6oA3exCoS46EXfTK2hBKNqGH6Ac9WPNACEpkcVuSMdcpXsTqyPpZLaCiTjE1X2363nsqxzatRo",
  "key10": "3gbyBGQv5SaCJ1vtjaJHk5GPNmxvowAPAUx3Czi2XtoGiTJVyNJvBR65c3TEkkVvkqbzKMTCcdwEQBANCFAzxBJk",
  "key11": "4ZncwkqYrFy39p2wtt1YDWPNv8KZ4RFDLtTJFzRTTGSSBkS2TdiRQM5PeBxoKJT5B8FH7kvuv7nmMRTeV32sy8kf",
  "key12": "Wr58DmCgAGoGm5ehQAzTnyRCFvHa7LqGyjLfR8nZf2FHoPnfQjpapE3UZNmSXLPyDvcpSGcHgze4qg1RAaJgvq3",
  "key13": "4Jzd9Gn1oWUQudYgMye8yZpMV4wayPysyjvqDVJakPSiugHokTE8gzs5mRmtqct2pmakNPgLrrbnjneFwn2oDHES",
  "key14": "5Hw2qTyqeazsMCsv7iuNzpFS3zUSE2sN1cA3rNUdjYPG5hc3C1cnoJazcqQ2pRYjmthGEeLBJpvSY2nUmQ8snk88",
  "key15": "4L5Q2jYyoWAKe5sAJ3yR9u9ZVNBPWrZFAauQcUSgDS33QERsPbfVMQ3Jz9RktCfP7bjtFv9i1E3zeGhV7Ri1HnXH",
  "key16": "2aeEKJW3dF9AKyKumHbGcxP2QtLtQP5t4H3p4X9KhfUQXGRpgkkabWD4LzHotGotPcbWQAHzFdLRj75UrHwbWWji",
  "key17": "5SnS3txhu2eu2qUcCeHtGputeBV2qW2xNxExuvAxr55sH5PP5tMLVnbMqurJdNj853vLJGZbVk3339WgEvNBUp1T",
  "key18": "XAFsxR8mfqkgr3hmAvju3rPD5c6hBsbPg4oo59Zz3sLuuRKGseL6mDp2qKrWJ3ZEaei4v9KtkgaqHmjboLJCa3z",
  "key19": "Fj1qK5CVrdqYmcQe3Fa1jeXiK54Am1Ksj2iraYZ7pNrrJJo7un6vQAEYMQTkEUf5KxSa6FfaAqrcyqFsa17pMcv",
  "key20": "3kjAdDMeYNwmcHG1jAZJsaBTVB6Nrm67N8pQsvVtJmtXrwESGWAAFVE4xJNJXRNgPU7vjtL7ejXmH7qxHKvLSxjd",
  "key21": "5hXRTaiNa69GBuzsEGgHrQ8ogyD97eKEzoCvhug3XnAyjnQxN6DracsjZ3UyUYKcH9tyCC85dpWap4p1cEehPwdx",
  "key22": "dx4AYhf2CnRSBRPh9dDNfXfAR9D35S1afkMzM6kz4zNzCqQiiFC8vLGHZQFKQNMdVqvsxbKpmteBQ4VScCHD4z8",
  "key23": "22rNhP2VTnq5Y64XVRToc2ETVqiJdFYcY3dtb2tKeAwiQmYbt9vHVmKoBmQtdqVE9AjtmXvqJEByR7CtDnu5CMxX",
  "key24": "3hRTEfwTk21ZCsXEa1eZR2saMYsVPz4jhyGECvid4obwCNSkGaASnD3zTxQ9s21sC6zVaJvjqvamK3x98d9EeNpp",
  "key25": "47FbEynQB9hfTg9PZ44WCbvbmiLik8vewGqau3VAHizYDkZ2T8btCTyfQqVxkoptjtcavSDEWRcWX5xutdYKoec9",
  "key26": "5KhvcbCxwtjkNLeH9q2SR6eRZLXmgiVVTKWBKQnhzMP5rZAwqWtu84EuGcCJYkrwtVH9s2hr2GF6g9USFtvhS3e5",
  "key27": "9XQZeotWnBYfqBrvynMWKAWgyj3ZdjrFx9q5TKjPubcafnQnBensZh7dqUkAQRfvrYsrcYfNCJ3oxiJrdNBrNiL",
  "key28": "2cooprA2xpYH5rx9mhuPsP92ikaiNAH8RrLFBgxGnUSsTXcejVDmLJFv9gYr7HTHxQiQG8FB1J5n7BFX9yqnSHtN",
  "key29": "2cJCJ8vfFm2sPaPwk4ZskU4VNCmyNxSEoyxq4bx7GtTBDHCJdFiZYMzHStkWRmwx289f99wrcv3tezYa42F4fge9",
  "key30": "3zYGKYd1Nde6zKbXMmCJuHCzXx5vnD5hCeZrHmmjU3iQZsz9L8WmhUEcbnRbEAN7tBeSneRjuuR51UcCgszCAa5L",
  "key31": "npwrRHjBx9jxkjPimT77z2nZxkFhJnVre5QCHTKkqW6x7Z8mkyMcuAm6h8R8nwoCFjzukth1KZms3CF6xFbDawq",
  "key32": "5j77rfazNgYDu6UWWE8VikYVnUyZL9QYBGYno59RJqE8rzCSLKNsyVD8gs49QgnPqmQRsyV61yrjt6LBKbwry86R",
  "key33": "4wf1F2SPS4jefpAoWWVRddvApY43jy8qtikwt7YQcr6MCmBQ2y2g8CwRWLCwb7h9qkUMP5znBV3Q2yis5y8ywTxh",
  "key34": "4fYheaugC4M2r9AhUVDYSvfQYZwthTwNRpFz1Y8E6qS9YT1k7gCBnrzLuXFEMFLCTnXip7THPkH6pW9f2EfLZ8zM",
  "key35": "2mtAmjmJr9JJj1yzWw5BSgA3CRnHZnmsFwtfe5FBEEvkR2t3bTd2BriJbe9XRQJgMDwW9GD7UFc3YCEv66PjMXzp",
  "key36": "3hm4rZEjQhFrGfdJcrVTqXk5eciU4vpNyLpdDm3ASJYeihiq1ZDAeVNrxeL2eYh5vEj3RDpNn3wtBf73suUaHzwo",
  "key37": "5xFG4gL8xjtjrJiNP38tAVj44EQ2kEgdZb5pcjGzkMhYmcM68wr2rtJ8rJVrww7FMbtEPNyv2KYiNXfZ9xNoN9VN",
  "key38": "3RVyVt764gnRz4q1uW9uxkw8XtjFjq4kHNp53wEFW9N2Ex5jEtNR9pUGDjEvnyf3yiVq6djytgyEwetqUus14ghX"
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
