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
    "SmCawMJevuYeQZ1N1rrBpNWyZY4L9Xg9EBAv3nM5SCo4DgCG5u4yspGsUVQBfZWpUB2BQbVFRU3EQPobAdmLv1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53yFL3Di6tdV3K6aUmxsukHHomZqvKWGuKkL8EayZBYNTEVxDjFiCWzb8BRBGEV3hSXwScaSfBzSJgpq4ev9fF5r",
  "key1": "3KPf5b5XUdee8xHT3cKTAKCj92N8bPodiDGKzMQmiSKcr3dvk6tQXeH5PeXB1mAzB7pSDFFwbGUknUJ3PycaoEfX",
  "key2": "4yf2Y1X8gm7bcP8T1uXG1DghPpWHKurZ8kQTfPpxQYtpAouJSgUvchK2tb57nvBTo1uSTDhHzhTwEAdbb9zY578u",
  "key3": "5ZwhWBWpGrzGNKPxwvHstWJGvjwX97Rrnbb17MouRqNmRjruKLKSVCDvfELjC2vv41qcjx3iaTF2vA9yKk95eJT",
  "key4": "4bUnueeKLCu9FuXKG5bs4xux5CzQtfJCBTixe3DZou8neZPc3dCrB8LSNfk2XaHK8z3NZAKqFRWt99AyJmEyhUTk",
  "key5": "2GAuxsBxLsAmqgHm1MzN5PnNk8LvKdRwNb4KtAqLGdmd8B8qskXUcYSjXoEn9DUt3nbk2kQ2hrFEzxaTyFxmzjHv",
  "key6": "3jLUYbGVTZqPvM5rziLLTZR6fjbyeHGwByWR7UApoDUJEj57tkt7pkDDet1gPBju3BxwuNNnEDRcBXtpfRgywPZx",
  "key7": "5JM1TZjhsf4QPMiT6uVJG7yTkYb6VKBkyAQcdW5BkirLe6JAhNVQGZSFSW6cm1fNbG1XsBH9QqDTyaizziyAuFfB",
  "key8": "35A8t6UbqTc1dUGiREx8eUyg5h3asFCTMc7HxuJpG87JUfD9TEA2QG3Y597gwiAqbberrkF22Uc6hNFeswWNRmiU",
  "key9": "C2kwewAnUDWrf9kGTJtan4ZsykWqJ8WWuhNEVxiCJT4ekSUQGr7PuhHBwa4oqViE8HH6XYhtMcNNNge9bZzk8z6",
  "key10": "3pyGYoVNETVVQo1E5i97XskhnhbK5H4Gck64tfKtf7qVtRxUH3vBBCH4H2XSNK9y8akeBVwZVEbF9Y56rrCEkfCa",
  "key11": "3oEQAD2yjsYZXAigRn4eckxNgo3QzfKiZXPeFhXqjK3MHmrLqVAc5wekt8oGZ9u9ADryvjsmgBriNQsocgRQmtJ5",
  "key12": "4PkMMDk7p8Liz8cxB6P2WzCd6gzWXwzr1oxuAbFv3f7Qs5odSLmEnSVkGecoYViiaYGn4k1iQkJ3USd2R4ESSFUC",
  "key13": "STWqp54tXedjVYcVAvjJ1hCFjMeFQKy4P1TopQyGubB9iwcotxDHYfpzPcHHFRveiLnZELt2oSw9ZJHi6cxmViN",
  "key14": "57sUKsEvW5n71h8FN8ronFj3ZoFj74QFAb9xrMhR4MePPABxzxkzPuXTw4GXhz7Xo6eVbsg9r9HyiUbim3VeaygH",
  "key15": "4NfhAuLgHruqTURseL29ivjL69bUB95VgQvwiYdCBSVib7YXSRzZba58GEYs6xh4k1i59GXVytFsw4pi6pACAsKM",
  "key16": "3UXrEqkbN6iM4w1fMrgkaJUbBMdYpoJXLHs3G6utfE7oYw99TW4afvdgiMXWwMazK2prS74XJq1ujdcswr1rLthz",
  "key17": "4bEN63cHCiqVt4BHLfyXc7MgVm8TCcKzs5mmhFjdiksBEYX8Pgy3ZbT61qvUCuAX36YgwbiKEVRVsUQLtEbE9q4J",
  "key18": "5BrVAVLWnFyn3k8GNWzeLJ9NkjePsA3FBB8jrVTExzUzUkr482xK9ynE5CJxozoVtcCf1hMzQnmVm4FqzjcLBbTA",
  "key19": "3ZpxheQgKtsi26dGMm9z5HMsnqQXg46HNTCZbUBVSZxgriEKbSUb6GXCMFSXY4MFdHEFLYMBGD5ZbnYhF3N6G4AS",
  "key20": "42STKTt3Mwn1sofDGaD56ZZTBv8e15XA1tzNd6U2qMJfSmy6uFbwwSCrtfKNPE9pjayZKb42WUaBUJh9rnbioyX4",
  "key21": "4YuLe3G3zeyqpsN9krZT3gZFwH9qrFoMKm1nGVdA2BEREUGKTMhZ3W254o6GmDPGdtvqu8BgLGF7JQJLz5mw5g2K",
  "key22": "64BCQshuHiCqpUk4HGemN9zKoHRtRngzbvfaBC9Q2jp3nBXTZA2gpxPJZceZCkEM4LYV2wi1ky4JQvNudbDqXQws",
  "key23": "2uTsTjHNgC9Jjw6WSQ7T1LbhfwKFUX4qqFGRgpZqTeyxp7C7meMSKCFmSLQWfVHcQbZt7y6Y2cVT51MzSciCiu4F",
  "key24": "2fADtE5anwJKEe6i9Rpks9b8rX5Dt3egA26YVx3vxGuUVbNo6H6B1DvsGfDwHyMhpd7vGYTvaBs3nYzsWXNn2ywR",
  "key25": "4XTZrJWV3m1QxHDfDnHp9hrZ63qNzxJDcbE2xVcwX5xoDccTim6SfPZgk6BMxeeNVKnhUwtJ8kt2zvCqqCkhbVJE",
  "key26": "2hwYudhya6jqzie2YAMvyCjJodangkoztYuGKQYNTHFQjQDQjJ9mxBYaSdAvBzi7eU45VJqyoiK11q6FJ1AtsheM",
  "key27": "3m9SVuAJuAWXQTdBiNBCRpRLMfXH5PJ9imt8DKfTSP9D1wcYVtphmK7b9Y7GoQbbQYaJ97Nd2oDaFq4QhHQQhxDz",
  "key28": "4bCRyq4dmHVcFVrhVqaGd5qDUuYgkfbRbgvtEGd3zQJF2cpwUgNgZpe4gtZ3Lj9pAsA5oGcPdPZN5jLGniSEQ8QL",
  "key29": "4Z4moQCCQYQGYRpxvPZRq1FkfvLM2XSKdqAx6ogScXq1pWscrrch7fKueJUZjXDgXpKDbQ2LkWmF3PCvcqJ28sn9",
  "key30": "3QpkeoqVzwYcWKMijjDgzd4twQBhWvCrGViadcDbkNJGaoMFqkKKFongwpXhY8JDFE5JGdnTmid5ftrnVJpFwqi8",
  "key31": "ibDqNwe9o9ZCfkEJk714envBKBh8YZDGbWmKMJfKv931ZRg5gCTFCthd5y2hmXVgeZiQfwRTerLUDR66EDKTQC7",
  "key32": "3BoyL28ahgA4x4UUmLsRSdp4bjPkPULR8FfSyBJLEH4wjuqghkFZtJmKLEs1qVkyus1Fzf2angGj1eMi9mGbUMxj",
  "key33": "3d5PTEz2XpzbqWLBvvHZ7BMyK4Pz2R1HHD63hnh3x7ZW7XQ9sWfCns4QfDTnVCrvgWTcLcbTQF5Jxzfn4jba7tcz",
  "key34": "74KtfZkkR1eU2AJmPfPVdRBvVHc1eC3kCFYgH1UNcVwsur4S6TVyNwNzmENBebVNcZj6d2HWHjkqhVHnFu6zTm8"
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
