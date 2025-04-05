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
    "48tKGnMjBiditdJ3s9NamR64nfpTj7xhJT4g3QgK3ZPfbvXB815Zt1cYjD5NRzFwPFAj2RXSaNXnStWDxZaV7Do2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tek3GhbPA5FX1kKqhQwHCcoH3WLpR4KGXSwdYMMFwCcojGsJfkPDKDHiB7mMyeUsywvYmUBG8w8kDweaBMX3M11",
  "key1": "4HzBVz2KoTbbK98zh8d4k66ra7YeasprK87ebyk9XaHdHWV6CDfMxAuzPXMaWyrU5Lf8N3UaEqA6btdVhk8CYdaX",
  "key2": "3rnPJ6ZcNPc6EKXtRYTsAXgJKAHw9grzkQsfSnpAEy2Rp36RkZaB9UHyCoHfopARKqGLjfTtQfWqpfHne3KmS5Rb",
  "key3": "L9W7ATRktyrWJFxCsAekyFyjup55M4QTM7GsmbzxYvPoC3uZLguvy4qqnbtqdGp6FAAHXhqemEW1wQWnZdLGkCh",
  "key4": "5coKaEDHxwbgDMENEeALELyNi9iHh4aZcY94gDzJCbrdAjrcdmrJJ1xns4oudrNq65cNEn4yizjnt41MhWxbr4NV",
  "key5": "5DWnaBRGkMjZAK3UQD8avme2kNPHQTVzwJMuueFkivYBP7ua4C2FVsTJT2Rh9m459aZpe4znSX564KeYrTrbynbT",
  "key6": "NDbDD7t7iF9urAiZHtw3ZXJhf9XG1C91Kyir7BZgev5T5yaMejccjhYjobV77JL5aLXPgMxbbnUGTYhbqXb5YiV",
  "key7": "qga9XpbdC2VB3PLVPSCvT8XMHntQFntHcDVBVVdoGGxRu2tLsMt5iymtyFRrNMgRhGV7Nfc2Jvk5wp18aSoz1oY",
  "key8": "4MZmM5P3F1gvkNBSBkymLwQrVkyAs27VPjQZgEGHcKM2DdUeKnpQwhvhHe75MTgdfasoTMKQWH6qj6XwUFbb7pTC",
  "key9": "5sE3ueFjBGYBGRu4SNm88zq3dZ6XnKiCyDefkNt4eGXYAj56iMWVN76DiusPPdPZyEUs4ouUAgDe6j6nhBPmeUYB",
  "key10": "32tF1vtRsNJn9qi4hmZ5k6YGF9yXZp4ShZzGRfRwaBU5n3gUDHH7iZfMLS5q1HCH4hshXU1rCx46HopqUHkdzjos",
  "key11": "4xRb6PF1ymrSRaE2gwgse7miSUgEqrYBtZG5NcpXpUwG6gwm2oEj56fnXfu9F3bh4Zes3qLJJQcLhnpo1m7spAiE",
  "key12": "3Q1vfQQjzSmcPXXR3iFEGCB7b2B7sJx3QhbM5ufgeuFGH6tbQtiqBkZaE5Ff3nEZTFCuSg9RbkzNQow7fDFRuYgG",
  "key13": "325DSnXYNabzTyHoF2iHhLSVMor2bVW4UZTye8fPeQZtBmqz6A2pNNqL6r2T2naG48NGHL3sVt3TkgJaikpLN9nq",
  "key14": "2WmkPHXEVYjPF9qCcUFmfEPvGXPx9sGoXT775rj9aY5RtfsvDpYGoS8fCvrLaPG8LRnYU3hPFDhWH3RiBqs2KSGj",
  "key15": "4x4qUTUgr8jSjJcjMJNrRoshE2EC9iHU697shmQPHMx77DS7KN7tmYj63cNPEvSo4Ux3f5bpEZCsaAem5JcDqaij",
  "key16": "YVvnLGyzuV6V2c8QEXokMQhy35FQWLMqF3jnPuRX2gKuaVEJyvijqDvtXt7jfALkPQXsJqYgMPiG1wQpYcM7v1Z",
  "key17": "2jK5iVSLrVnG4pfKXMNsNDSKcPsoXZWoyY2559mAVyXfwYXmEXEkvj4yFMtS5uUikUkX7VdU33bHbEo7LNuaWM2d",
  "key18": "4KeGCE41qhH7TVGaUmSwQ9FHW4d1oSZs2WhNbU9fGN6RzxNCdGe3WoMKZ5zZrkgCc6KnfTAhpuLiEoGzgE445vPz",
  "key19": "3MUUXzgVVZCmKSYnXX11cBEpy3LTV7xPe9rStspePqcGxsS69jEQ2hBngMMsuU2wKWLs6YGBGLSmGRoTmm4cBu8j",
  "key20": "2ttittdF5bg1srmEG3BAkf7YsmbF6DTWWjairmqzgDCZ7UU6Dy7fsPYe1Ru9szVBeP7tYwFySxcAcpD5Pa6XbHAQ",
  "key21": "3UgmH7merpHXwDqjXPtKp48VYiD5f9ghJTunXdFn2iuBSUTnaWJv5CNe572t41D2o4q5XXecDSQbZySBP4FzEngW",
  "key22": "4hxqgNtAfyyViiHYsdZJu5UQkqJha3VLQKKiEuNykDQz4MTA76ZtpExr841jioJHXkH1a3aSzmmnvn67kNNZcP8P",
  "key23": "25ed9yppYsHp9bZsLPDFLUuRaTTRmf93d8p1kZYqt61wTqNbPXBWeKDm53Xuw28YHbt8QPMrqtAk3EEj9odDXY8E",
  "key24": "r3KYNAzW86YawS3h13RRmVSxHavsv5gSbjjN9GbGyHqjTQgjbpEMk978SGjuVmhKtTkBYHPrAWHDo7ZpvFMZeii",
  "key25": "2EMhHMwTbY1fPjx77XqSZRnGs2hENhwLXeD1x6vJKYk1EpvxyZyQUwSEi3thgR73XT5kW27gZkzZfGDBCovMY4kk",
  "key26": "2xHkJt4nCrcAPWGjJEuPhhXbZhuyEUMwC39bBrUV6rdXMXWNpMjvN9NYPViWUVfpAx1vu3Rp9nngJ7norzChqdk2",
  "key27": "3VkmkLkLEPX5vJam1tcGikD9B7a58QvY6gwtQ4tcjXN4ExaXi9sN2bArx7uBaBjWZDvq1sUzVTEZ3Uinz1LABcwm"
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
