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
    "4MYjSTrJyZTKrokiSAqVRQ5eR6LgzExAJBDJ14N1oSTeMH5xPhXWaWkGeARxHp2CEu18gc8HRuFFbyP18ox9oX5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qTDcQVTrHEvLgfiMpefcxqAp7JfrGfWw2JXnNawQQhefquMHe1kKcnbk8siNcTfBPEg9PSkRczKG5L3HT4xNXHk",
  "key1": "HCAoLfjuFmXc6rVtFGxeHGAsYZz6iYnUYBvwv86urij54zk31MKMYeYJnB68bXNqyC4T7fRgPsgzxAH4J2fxbfV",
  "key2": "4eWDePP1uCWTzz66yRozL8UHkGQ4YLnfGYrmVjuCVxwyQBUaaKr3xeSVDjQ4oSZtYMQe5XWfE2cndYXqTLWPVbev",
  "key3": "5e1mwhR3N6QZdtYBtPZfePcNRs3pBEoYysUAHavEDX3MFBJwxkpSHurs37LiUviXfpySbCXYyJdzNF9nRfLMYTb5",
  "key4": "5Jra3HGJTdJiJPTBmMwxbj2VTBw8qjRZzZ7Xuq9xDrX6sTGNur1CB1jy3BBbKLtkq8By4NrQyx41hQt61wuK4n7d",
  "key5": "55pqkntF73xdeTLEjLLzBtnfMshv1ADrJ3yffogjPdX8RMFFT7nnRsSg4kyBZvbd1rj1d6GH6EcM18nMSdJnPVWj",
  "key6": "2Tz9M4FpnbFNkc96p1mpPs9ZWkb7t9qiojsLnBdeExkDqChJZC5poPCzTHgWCNKRaMxcL4qxtkth1KCdVVwHaqnH",
  "key7": "evmwenL84icHod48HjqPCVnDad2y6PuA1WHSFreKEz1TNRY7j1HfyFkWJceFDLHaHiksHvT5Yc11LcQsa2Mc366",
  "key8": "5aMSAEL6Vcn69E1o5VG7Kw99pveP6BovbhF3boinSJ9Zr5FSQz4bseva9x64CPdhaLxLXYcC7FarKqcSceUPq8wh",
  "key9": "5LN9Rp6HRriTiMQunJ9zghXRmH5oZzajXX6QNs2u1Kk82XuwrknBcdwAN12k8eZWUMq5jvY2wRtdBSJ134HV8P26",
  "key10": "4NKTN7E3Wv635stN3W4vrXUpmBa64ArPK6kP82DnhyoQvYis7AQXoRV2bGgPg2UzZ6TMvTd7zz34gyfQjzoDZGes",
  "key11": "5MFRTFb1vkiNHc4HvcY8KvheWeEXAQYJncDxLhEm2DLjk7ZuQhrZVAvPKEZGXQ5Yq7p3u5P8myS6TQ1x6TrjRhjk",
  "key12": "63LBhUuvDMdQpVSBz6sf9PhmbBGUu5HcM7pcWSYzfUzA6vt7fHAkPKrxvawdNandD8VxmKswx4odav7Vvw83abeH",
  "key13": "5n3GNAWwAUmXDct9XCxgBcak8ScUSPeu8cgvb5wNN7CiNjT6tYD9JTqRhRyx7U6PENuMwuVeo4HDiKWCHRufKyEr",
  "key14": "3todKsKyfuyVD9Uckh4SwoG1FNSkkFGQUrrgd2gg83cwpX26Bb6jCLng6vbu6hkU1u4ntTda3aTnQBtQSWKnNR5z",
  "key15": "3xjZF7p5KgEELVJ65X1AjQcmWo1XhNP7BNBS4RkDzTt9EWH8bPUPaT4NVDtZfYBgCQrK9ijeM93cdqtfJvFgMZ3S",
  "key16": "2FnC2pSMivmZ3ipxfFjChMoACUMe1Tb5kbSRKASGL9tCeYJMrp7LkPQLHHZkV8XeCtyRpsxfYbbEabiXL4mSwVDg",
  "key17": "3NbGWnFd235n2RjruAtHiboF2rokbnTnbWZJPpTcrard1LpQ4e1r6dJgHVT6PxNmP23RvF4pTgc3KhaKEUPXcAiP",
  "key18": "4fBDP8wmVUZNHHjkogLk2kt5T4hvxzNw2mcMqhirKBVerZV68m4hEpaw2oJr8e4RKbSuYijumV59pwJfgGoJV3Wf",
  "key19": "3SnFX438VqZHsZ8n8DHVJTUK5mGxmzPKiEVm32vCfVSRMKdAoWBcN4BFGnyuMqTQAYdYQqM7oAtCMgaSvqzipvpz",
  "key20": "62aKBBcDuqt5hxSteaVXnvsbybUiiNZ3gPbDBF5NcV18B7AmQGgrbxZSQvfEVJiZgfnf8z39oacFPRbkVY5pC9Mt",
  "key21": "36JoXKFXQfzchQn7RQDazUtyKvMKsC7sNmCPQegNRy9mpFud9R58soY94Yy3RJLbyQgneLefC7YMrrgB5SPHCqgP",
  "key22": "5EEh2n5nKyAb9YMs5jZUrqnbT59qNqEWVJU2kE9KbS7qaKUVk52XMhuq9KcPNg7vjnYhUmRDvNU56LkhpbEXYRgE",
  "key23": "3ShpuXr6TUetQvZ1YHH3bX7SQRPNm8YRF9yBcKuiGhXgfAEBrk7BVgq9CTwhzMdYH3KKMyX44uKpRSuRp4G3TeQM",
  "key24": "5Vgbit75Z4CXJYYiksy95cb1AWm3oEZGcyMwHcABVMfSiarmCUUhzfgduNPopACWhXDgR5dp7xwj1XCrrvkbTWrS",
  "key25": "455XUML3Ru9D7qhwFc32zJPijBwf9mJtq1kiykYtxG9jJ4h3PAtFwHdmDw1LR3shciaStwx89bW64mg9UQenPE9B",
  "key26": "nj1Dq6N5qsE3gjJM1xMzLwBKGU1SNe9ZZpLmJjUGpvrx3Px5ucHhVkh5XBFjoGtHDL6WCW1t79aC7siKpMCjfiD",
  "key27": "2mD7kZ5cZj2tJ7D3Bk3xMkge4hXpap8oH2GXKQ3w6WSsRg5jcAwYPuNdxxJmqXuK73FEoP5t7HcY3YexAQyqB5uo",
  "key28": "2KsSpCtkQuU5iujNkHtusZTpFkyXPBRr7QFCwn3dYPDDXoDgFHvdQxJRd7ccQBvK2DBvHhuXDEK9nNtQgwMa2i49",
  "key29": "2SnyWf1aWJLKoimbjKQCHELZZa3qgwYFe5RidYyH3EKqyH1mZCBkuR8RCFDBQufthb2buG4sPQUsVbs7XADAn4bA",
  "key30": "3BaRLVc9umwM4m7evp3zuMQ6m3t57usLMQ452gz66Hh2h7smd7sA1pLAQJ8E5NkVsER5EKcPzmPtkHpyTFG1eCuM",
  "key31": "57v9r2tCV8T2dMADjxABxRjx3Xaa2pbHAnFywTEZzoV8URLqeC4xezjP1L8UG5NY58ex1vAXx7VYeHqZyW7U4Gki",
  "key32": "36Nfk8Ny69n7cpey6MpHGioE12Yi3Pxfw78QHYbSDDZGC4NKCXuD9cCyLLMEZXYzFuwNbx7gmhyzhFr2CJwKiuzc",
  "key33": "4EbkV4Hd2k39xW7eFz1y2xEoHSkZr83LVtHaZ1QCZgqTW4jL58AGECo3UHrtw9yMr1J2ZsU2RHJZJbbb29MSRxxP",
  "key34": "4vS2LGKyTpMB25Rmp5SXCJycKuA7YHs89qDoLqkoFB5FxeVGrd6Xambb2m5aHFbdjLCQG5RNa4HoQ1oRyXsehVMb",
  "key35": "5aZdTLnzZLNeWGLgaJ4VYBYw82WF78qx3L7EanGZ5kqY5VUMMvTj7edLj2S5TnPGbbuzinJxj8ongPeMZFgbJzAQ"
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
