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
    "3u9kHgMqD6SBs2Qaj7ptts91GNc5DpTjurqBhKZMaiVBmQXj1WC3XES7Mw1c2bcjG8tuR5xz3b6aqfUmV5nDSjJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A96GzfFHgUXAxkqEbgWYj4meeLgAEXR8nN67MnTq6q9JPEZEQq432Lpsxb58s5icMR8uAFjicRuBru3kiwDiUeh",
  "key1": "325yaUK5BM8hcvtwepd5GNeSLE7Uy4uGMuXmT43JGVfsPXnL3dTrTASieiDTWYCH24t4kTvvexT6i4vansqMyw8A",
  "key2": "43XtmZCqQDt3ToWKv22GXGxGy7EznCoa78TWQGxs1phyM9dxT6z2FU16fkKfASZDaSNTkx2D7ofmn2MZJsQNzdiR",
  "key3": "2M34K7Y2Qt74Lak5uo3hszPRdTGepZZhoogg1swf88Ei4Bynd7KryDFgNpmq8EkQErEUM2dKj3gnpJsQNXLSYLQJ",
  "key4": "4ruKEJM6NB8HrTxYkWHV78A7Lt8qiwrjLNs83VQnsbqpHtszexkJmVqp4rKzfcUXfW1HKs5PxP5dHWo7SgRcP5fi",
  "key5": "4s5d4usPQPGKJjaNddivfRkXuczUvtJ3TqXaJJkMoMLRoErm1phhUqLsNaLY2ip9PtuQ4w6nogy6EwKUakpR7zbv",
  "key6": "54fpw2EYgGiWnsb9e8kN2gEoAFh7VGzxPuBrDCXiZE2AZg2ZQ4bsGrqYGyoDHMVeUtDS9LxqmFT5yFQZqFc3iscD",
  "key7": "8mccZAfjcDLAfeSRkMXsoSGivxTHBWPGDzmUySviLZ6XYQPemdKcv1UDLjDKLjUJ3qzfD4yvNMTModqsob7L4Ti",
  "key8": "2gpCZQY3d97ahDF5huPyVDa8CcoY3xBCLrWdba1CajZ6M2UfT2omU1XDK4pJxTtf27RnDjG6UgUMUxKFBfDcbHUc",
  "key9": "2XyvG4NbFzFJyuZ5e5UVif9VDB6nAaAUZfBUW9gN5PppgLKNGHryiiHuoDzJWC2A9YKSLAPdL49oKgnmqiLgEDH1",
  "key10": "3N5knWpNjVEMrFiKt4wAtjpULj6C43DnVzUPYuTfT83SXJLFjPYnthdHRpEi1LuRYoxG4WmESCCYwU2juhmxLQP1",
  "key11": "3qCb57PvMd3GxQkNdbLqYVqS6z34U8Tw7GTzpDmxR2wFY2GZVw64nEDexzgfyTfNB6cDNikGi6N99Snj2TKq9pzw",
  "key12": "3vSteVfGA54er4VPV32zqt91tASsAF2F8hkMxtkwHVMNiaaGFU3vEnMyzP8AozGoiDLT8YyrgeN5jQzy4BwWikdq",
  "key13": "3FE8E9utSc1UmwqsxjiDArBTxYYXnchpd9rCxkKCMTX9rFBy4oKe33g5vXYmBjYz7edHYV9vg3AKVzCsGp8kmNxo",
  "key14": "2jjieEi7cbviqhTCXrQfphZpbiDcocx4Y6oLhZSXBjpPkZVi561txk3dYgsxmS8KSw5gvA3aRop8VRmUm3N6shyW",
  "key15": "2zXUAJzajYKy2TWzopoNo3QjDzebNWZe5T33KfKyrC6UhvcLJJuWWCQg1XM2RVDeyy1DF7yFvhW9mSxYnVrsNTWt",
  "key16": "1z4PAo3HxuVMC8in3jxJcYtB8W64jb1xH1ALM9gGYA9gi9LwGUftgCffgzmqvTcRbFeTpeDPYW74vezHeaVX2yQ",
  "key17": "5GEF5qJTc4jnHPbuBFkB6dYygph8hZz6tQVAeKDf2hj78ZBVUPwhccZtkXXsynk12DDke1vGoWATMJursob7wpzG",
  "key18": "39iXZ5wrgVrWoYPqJvYakFWY5nzA2quP44rsC6hHFeZnopFbVxZ9TDdx61iAiL1SQK4fRxWXtkcw2D6rAbm1KYDi",
  "key19": "4kn1cNAQWXSKf7t9jze5AEKS6WienwQs2Di6cct5uyKpwxy4DweryvPG1mNae8LrcTa3A2RALGREy5f1nMr12EjP",
  "key20": "2iBbcqezyTKA4YW39YLV2BaWaFt4kbjfynm7oBdB9czq7AXAeCuMwvvZGbv3vzqXXnTs51qxAb71K1ahdZuK6ZMq",
  "key21": "2MtrMkSguXMDCt9vps4cw6QbrHJ1SxjcAb7Tck1wiymCPXFeuUHqf4B5UeFWgHmmQyy8tak8qbicEP4kX5eUtPru",
  "key22": "5dr4jvdBa4VGKvTZHhwMzjVN7QuU6wSzmBCanCFAnBvdSVVt2CXw37eadCWzbPRHate7vZSjU3th7PZqptL26N7W",
  "key23": "3zhYJANhAFMeKMCSYweKfc5QayVRCrDi2KfGHUJ147YF6zX7ehXw3t716bik3G7dFVAEcXPqyvTvYaF7RSeVMXPz",
  "key24": "2KMYmE6oSvYPSYE11GUMNghbUDoubqtHLwk46iViQWrBdAc2Hy3EDXchTUuZeSB9WUcZrydPojTjfzeGaqRooHVD",
  "key25": "29CmbsXuANgQJqi3ivpSdx2RSCar8wbbpeXXvZ9QuL6bT48pcdURRB5qUjHp9B7Ayt8iWWAGnubxNpvSCtebucBk",
  "key26": "2JNJPZxunyMf5ZhLhfdxoTC3dkZA8iMuFrwspzWw1Q4Pb1Z9CdHP9dKVwP9HsJqZp34c4FmsdGbMZduVRGnBnDGi",
  "key27": "3YH6D8TnDDokwmat8cmvdhrWn2qvZmYzuVTUfz8ZGjkvPThMv9AsQGKKEcv2DRc972FhietpbA41vU6St2XvZ6jo",
  "key28": "5mjk5DkasNw9rWGFQ8YQ7pcSYWBxUnc71u9DuRX7Nck5v1QAqP6qF1zCzWqfnnPNNBAQYbzJ7QMB25KRHJ9rkBRh",
  "key29": "2ic3vuJnUH4ahUeYLTPDhzghu6MNXzEceFjCSftFMz6NE9QpAB5AwH3KtdYYwoTyy6oTRnG94ZqRR3AhQupQ37Qi"
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
