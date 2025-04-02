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
    "5iRnAQuR4cpUxoJqoRMaSJtvRMi4g8WfMWVnH3vmBUBAbdmaeTEULCViamQ7FmCSZCg3WnWTxjoy5moW2WTD5Kve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qKzTsy96seAJDErmo9YTZHQGxBpMLhtU9fDytZuecLtQb7XcSLqCHZsQ6Yt1k3RqfZZxLxbjxYUaz5TnWeg6w1",
  "key1": "2aKHeopcxcTZ7rL8CYSWYS6igT9JuMYYbQq9P4gHxMTjQV6KemHy3CiBJRvxWtbNz79D5bLaS6fEqBVQwKaaPECD",
  "key2": "3SzYcrb2AoVoRj85fu3np56eWKYiyoW2PLo6YgttAsGfudFJRejEMtu1QiDBeENWMwaWAnsaHZvwvH6pEAs9ikgK",
  "key3": "62i5Hcicp1WE2GBoCg2FZ8vhHauFAANL6Gb8oe5xBNmvz7fPLYVpL2qdtgvceuNbYyLxQ32kJSHWnk523cHmG5Av",
  "key4": "3DDEA9Zsws5UXDGrbyui2M1g5BYmp4vxLYNgrNDyb9WXfZ2YEueypnZFsWbZez7a8Zik5YRmyZiitXPB7Rr44sre",
  "key5": "5MWiM8K3ZQunpPGfJfXyWxGDCifp888Jze9GXPw9rZBWwUwoGmiGvkQjAvPVwaiVtuX9Fso9ckTmUssbApNEAvWH",
  "key6": "5dp92MgHcWa7yBRHy52MvEWFMtFGqWBLUGVxhVLCR6MDGW6sRZ7T1APir37kSAaXry24H4MKFyBAp41kGHjn6cJp",
  "key7": "qgvjAzCAunhf4H9rDX2BaMciQEHgEHmT7fs7BC2JittK5Mox24fg9vR38RVruYZVDGpVmPp1nfSjmLvfPMdBzez",
  "key8": "XtdU2azU6JV7zNvuXGp5EofGbFX6XUwkLnYWcNkQznwiJzS89BHNQhPiUxkGk7YSA5smQ7A5wQAjBRtFEDn8BqG",
  "key9": "4aJWgUQKtYLnNA8tPdFT1oRaCnZ7jFFg5rbYHiLQXYiRjJ29veo5odAJtN22jJhRBt1FcosVoSS8mjTHtk6PhJih",
  "key10": "2BxE1F5Yn5jdE8NkDXVRcwbEpFSK3NiG9zTs7TviSXYC1XXGhbYveLRPHa1TtdcYsEFrpMxFVTTBjpz9YPjsG6fW",
  "key11": "363bcLmxkjkdQzpgFMLs9cZZsBmNg5RkmCqqBM4eoPsV9y1KFbuRQrU1YALatYp49b34Jb67s3Zjo3URBqUbWi6g",
  "key12": "2NeB8FhKJymZovA7KsCwY7o5RfiEVPGKRMUqE7jjuhPezvRizHixgYfi5Y6AtGt3fogYPkXxLPYjoqzK1a9gYBkd",
  "key13": "637aYMJwCwyWUuDm8HbSuqPfcm43qjFLTsgx9Hen31qZXPNthgU6ERtwYb73SSi6CQhg6exSMBufsj7D2ND4kQEx",
  "key14": "2TvQZfeQkdcGQyCgpcWKSw7cXHZ5FSaQS4PgXcWZitnmuMPNeXAkKPq2S98GicBL81PNW6XUgdVh9q9iHdDzaNpR",
  "key15": "3DFBNHH6xxFPqbnNU59p8ubXvBFHSFCcRS9TdedDXhAKSSgyMtJfckAnVZbFmfv9CnvXuyazqohhscTkm9tzjuzn",
  "key16": "3UoZKfquBGRLtMBGB564vktvx1SyKCHTt6kCrYMGR9n22Bmxm8jwaSZFLgnLEC8zzgwyiyZ34LSWUFkJcFCcVeGe",
  "key17": "5FQBMgc3RENPPHtDodW1jzjv3vWDgnrhSznJafcqjUEYZBmxSK1hErD5mdi17mxzThfPTKwJDNoTEJUXVBd36XCM",
  "key18": "4xmc2vpvrzD4J8huqAFvVHzLxVgAja84aBZQxEyAtX1DUrMXQzPu5zFaMmZCid43GdRQjdUDmVRDabB4k8HBFwoc",
  "key19": "2B6GVHmJBp5osQ3wLeFEfcF9R5H37D6GMpjXUh74bj61nN5rSNj3qfcGCvjsbCZV32cFRrgzEqWFEAX2crGWwzGM",
  "key20": "5tzLX3r44AM4KrxEksqTYXgqQVrHNP8N8mWTVfxHY6hQk45whhjyM1NBWxdzzFVws8qQy5eaLop8AWWCGJykRr6i",
  "key21": "XY6xKfpsrJp1JB7oRgjemw1sbt41hZ8cDcP3LPrE42bo2KMJ24A3VcAJpd2EVaGrv78ZVXivpEJGEPYpYu8Nb1J",
  "key22": "5o1o9MJUMnGYPXUsAWmNJhJn1vfW5AKkEzNWQTXgbq5id7LK9jMZP6ywD5RyBNVanHuNWUcuiXtZHG92scEHihFh",
  "key23": "613FWsc7DJy51xMgBzSo5ivQXbfg69XpNgVC3TceCEhAs4kSwsEbUmoJFV2EDgoqCvPYgVskqbTkhmvxQhSs3T16",
  "key24": "45dCmPdLerbUbLVzgRbQVzEeLftKbekbsaYM96MHAyphauzomAwDND5kLogvxCLynsAS6u2MtE1LmbypCvi3Xb1s",
  "key25": "4a5r5uHndesnUEh6bBwAT5tEJwSoPnbLEMNVPHxUu59Eq4qGSWUT3rjpJp5gm3Q8hPsJ7KYvCh22dz99W2FVk5GG",
  "key26": "2qUXY8ddqygoodPbtgGscmL8rLsEVq7XiTboNL1Hp4z3nTSszQMZDqCAY4DFcP18QHzeSC19Vp8JgGxq945C4fd7",
  "key27": "5yXLUoYqV7qdLQ7SW1r8S2a9SjBEfLTeV2DTToKHsHWnP5dyGMDy8kxb7tHSzwQFwESZh5uToLbKpS6H6CePZ5Lo",
  "key28": "675L1i1YKws2JW9eWeeQ32EMw51GphjNjyrMG2onBmbobTn6MM4PcZsuJ28JGPF3vpSMS3Rvtha5ixzLpwcjR9yw",
  "key29": "2RnV9hLsj5ThZpJECWmfkAcCAJVetZxekiCZ8wRcbgpCyVmugyj1uWMPVkfjjqU66dZk1WNYuYSpg66nHZofrav",
  "key30": "4mQAbSs1ng7JBePXVTRJqX2PF8KxitqwAtwH22YkxWmxXZRp8VsKzWUFjxVzH3tiPQ6QJpXc58NNZCJr8AWEbLZk",
  "key31": "2LpbNBfceSc6hAb9YQ7GNfAfaBAsAFWBzg6EXARuw1xJxTsRhQgan3nGNXqH6vLtR6sMkwcWoXwKJ7Z74kZbJ4XE",
  "key32": "wyTwd4bR6oEt4MRzk2CEMUQm7djcpYnnw2zybinxXSWbRYupQPCs3U8C1bsNJRoftrR6R1gnMNrydR7oz242iKY",
  "key33": "2DrAbL53aMV2RzohtUUfLYqmXSo3R62k3Jvq7ynNQUJJpG7txA3sHZtefPYrfo6WNFSTxtkuSzuDhifZbcBtS2wM"
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
