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
    "3TsY8U285FRtyQXMEzoCNMKZqpLWhqYQnVjx5MZSzrjwS1qHCQ7JWzC3nnPfBMZou1wGNaXVZnJnZ5zsfo3XU6pR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24keZfVShECiAqYSD9dPkEaoELfs8Y3NDgwxUXignPYnHW9XsnBEs7AeJ732nCeLqpUM2QsgxeQpWmVrMmXTpvH3",
  "key1": "3PmzKM8KWU9EVJJ12bmGsKXLK4rpxFfY9hTN9JTU3eEpz1SYQSepESVhouvRGL4Wy8vTzPoGpyrkWW3irf1AvT9V",
  "key2": "5hgK4DmFFFhcVfAUEVigRsw7mTEebJfaicDbfCgmJVssr8VzYc9a1KWL6fAvr6bDqQCsLbP3pYhRDx9wVYZFkUni",
  "key3": "3JWRz9Eik7SJHdsfdz4wsx8SbdoJE4z8Mw114CQticRwHb9aaL17nCt4FkVxa5jbAXMibMbjynnBMyofkKqN6aKf",
  "key4": "5rLvoR8s53mR9hkbtgw2MzL3Q1WhfwzbP8Dpk4HL4tvxPMXSVFVrPfkBthRqtVz2hc8GvaoGQMfNc8xQmcZJryXv",
  "key5": "4v6mkFiN1L9b1u4be5KJTtAoTkH8XTHDW1So4PZY2mBhLJWjpcvZwGuXtVJ8Ci6kBU8yuRxVRXg5pTDvrXE5ZaY1",
  "key6": "5JtFnjWeDCbRdJtNFHFNGwoAWaYm2LZQefMSpD3VNfEHmkpDqNt61WzcqquoM7dVfUGsMMrdd6siaW6Q7DJe1S8F",
  "key7": "RpWHEj6Cg19KvTBPqR4Nn6wB2LrbvRn9JZ9x2Tb4gPjufN5QxCchHMym8wADaqb3eEEY4unXadwZnJEPjUw5Aji",
  "key8": "2fy5qbktiUm19F9eYRxWiGDEk8zsU3UbdvP7wuuwG15wodTvbJF3uindPfy2b9b4FwtZWTZLHhfJrnQPHvpGGoXU",
  "key9": "2J384B6bQpsisfyNTe4Sq3n9nTVX3K9bVYgVRovVbubNFTnXJzcjGqj7vabAuTiCLQWt2ScAZ9YKg61WzVkAw5KF",
  "key10": "4eHCiaaKWL3ApZk1scubcEC5xmGaytsxTuFYucbLpWuRHyBvUtXnx6BVHXBbazVPQTiB8wGhCLhQM6QMToDEUP1w",
  "key11": "6WPVNFVVDChrdCxGMUEy9svSxrdEYPFCSYa6uVkGGPdw6u5xVGWPoctfYMoxypKX2veP4DRrPp2h5Z8Fvg3Hzso",
  "key12": "4zyeqNL2b2rSqFVb5o8bZDG85vvXM2oxq693e7ME6DTbiNioakv6R5GRApA9gWX777PjC4jLtUQfrpcRatec2vRZ",
  "key13": "2qoQAiGo3dBLKsfV48F5mGmiMG9ydjHA5LnzcFfV6patnsfx7Vv5GihEC73JBVHdtoeHf3NshxMwdnGDSm7bB1Va",
  "key14": "5CPYV4u4pxg7vQ4AntEw8s2yyqpxaGsssg4SjyL5uwHzxyVPtAM1r9T4EuALPKGy23PkztNGJ7aboqTqs146kQbW",
  "key15": "4CqbzVU6iF7GwRsUnUT2NuKaTzLNPx4jXTBwZheWqzHjLcsjvY9tqodTwvDz6Rgh2wBeC4shMkJiHQEJtFPnCgpM",
  "key16": "Ej7SsCrc2QUa7kp3m3NCa33SnGBQReuUMESty3PHZV18sMyg5ScP3B9xQn6ch3TSsB9QpWGERPqctVbrZJEf3t2",
  "key17": "51w8vSfGymGtfEEn4hwXjfGzAMRJGrQkyFGRRns9iB1y9Wj8BgYEJv6xVVJ4YQ639mXdUcJGnh61yD8iHz8AE1MV",
  "key18": "25skKtu5LfzCGvkqc9qeKvHvchPna3u4oQPRNscvMZcTVvSRzvZsk1G8hgwUxagHyBKdJ9b2mfZsMsNoEcJpNXj5",
  "key19": "4H2ddD7aUcMFFb415po6S65HEq6BAfZgaiBaduMxv2smzS2hNwEWpW8X2B5YTaxGkYH38UhoXgKGg4KXD8rxBYiC",
  "key20": "VmRb8qJxVEb4B5rQAXpEpLPv7PSh63kh79xEcdnDvFprfocEwSg1cFW81Vao9BmT1piPWRFAGUWA5BXYVhnSPjC",
  "key21": "5k3n18xQA3pdZh97ZCoFs5rc6SvjAsGvsD9VxJ1mMnSiBirKskHEjdMvVPJfhqxGHsjmP8sNuRr7Jbcv25XmGSm6",
  "key22": "3JwdBGw51LeMZjKt62a6MrRBag22gvtS58GKnLRTWm17o9zmtR5edp9uZy9KDJFanQKAjhXtHYUJW5jn2axPaFhC",
  "key23": "Fdd4qLDUyfRJ6dzEhQcqv5XMug3Zq8RGBKRLBHaGSjHvuCEArWZzb5Z9TXyNeZvNwgAS4C14HeUo9WR9ZqbmWxn",
  "key24": "4XsCqVuCKhBgztcGDivYmEcCm34xG8Ew6d3CsSnK4PzioM8z7741nABQcZZjdLvsFERYoJ1Mrm1PYBDXmMg2YhXW",
  "key25": "3oGUCsLF7x9MUC9XFnHHD6xsemTVwVDgyVgRYRnjn9ybddCFoNP565wWm1pdhTxLpFgEvP6y41XqGMghC1d5c1uU",
  "key26": "2nh2gQUxQNBYpyPeyrDcP8cbRESdtqnYL9e4Zc6g7wBs4LSg5rSTrVHQ1sdhJa9rxExQRUAFuGY6JbKjMQ4MS4Ni",
  "key27": "32d53eJxJvLVkW81CAUZ26h1ruRMJYXpXSM8y14ng4Fk965UKB9N53h5ZLPC3TqM8yQVb8AF6NjYvFsxcbdgm3Db",
  "key28": "ErDqEcVe8HkZCdDzxGMvsB5Jv22UiijtsRR4PLiQyRjV2WdVajgG5BKDLnqmkVPVQPFwbThBgQTDAiZpQPU8Lpj",
  "key29": "2WAcGbkPbVJrgHk3zsBfF6VdHM1LfdsKVD8G8M5NkWmA4GDrhrU5np5VtsG8z4eRETTdWoRnCzmLqdzLoPnxnyUN",
  "key30": "4iHrAoaUxo5gaixr5r1d2jbSL6VCyLVqy3qvEEsc82zmSsQdcViPc5Boxdr2o9DyWVpb5mEavMhFp6jSEjxYekgW",
  "key31": "5YCmUM8cXrcppC41aqK22WazZSRZSYqWq2mSFdv7VMA87BHtsmx6ZVWNNP1x4BCeGqzmTxPqTszcTT9bjdTN91VJ",
  "key32": "64foDZxAkpz9jLYsACtXzWx1coF2JEeAGDRxYM5TRJfsRsq23626bpH1wZkWiQNPXRBBA9MDsnjuURaTjbpQLKqa",
  "key33": "5Xs6Uv1u5oQAmc65vXvYytoWZnyfrvbo3phnYUJZWM9RG5V3Bn8a6axPFNjQLtLUdVRcYQAq3qK1go5yuCuAwxoL",
  "key34": "5yj3oKJs6dnZy86NeXBmiCKbsHGw6RvfpirBscQ3yTjq7mn6QTDAjFX485uFiWEoU2azoyqjC2EEhrnXyQpdwbHH",
  "key35": "5z9hHhrDDXBp481im1e6SEMA1EujwcFv6gCnwWxqHRa3ckp8muw5iD9Q5DhZcwMwgqGmfCWkh5t3cRiDrepdSbwV",
  "key36": "5XyZuAXc7SUBvJUmocMWjUvjq3n9BuFHsJPpQv3QoLBDXvK6TxvfK6GPo3ZY5NoDieYSyMdrdBrjzUhvsWeYDMqX",
  "key37": "563zW2sT6kpKNKsXGiM8GhKBcc3zVhmBG7RzdfgN9bUt46bUjftWt6SK7eJrmJ6Jn2dHbF8QXzTfy7HMBmCifHoU"
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
