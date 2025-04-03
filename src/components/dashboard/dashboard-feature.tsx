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
    "29srRaL2HEgvWXxzsWu1EkRyuc3ERjAVr4EUb5VyrkzqkMTRvp73ESgdiMhdksfC1cjRCKpZ3qc8DCjjUApgNvc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VUE4tBC78QNVGuUEECsUMXmmT8UaQRU3F6Tr4n9mxpsDRytkmfQFPuTWwiNEpYWP8DyBYU72ExfQGfRJou9gZRU",
  "key1": "kefaW2BsahaB3wTrsBEbkdw6zv4MFEgwXmraCMcoduPyc98HNYk1zJpf9cY9YCq3MLWBmaxYSDy9VTsMKt6Pvsb",
  "key2": "5aBjRaABVYkjpqdLncFTraNNfgjg85eEQXYN1aiddY7VjaRk2FCmiBHmGMoAQbrucnGBKWQWew1nXqCU1zYPJvnB",
  "key3": "32FhwRWzBJJ4jw2s3qDawJMVCapbPvvx76yzuUrYJ2G3ZXDykuAw2o74jYLQjonDwYVt1zCH7qmgUzx8VkT8j7Zk",
  "key4": "79MEKDsSjSATT9W7GptsKnyKVeoRpAgdnoePiBvoVdAffgWG1umx2c8vkrLX4aoPS6y2HuuWWZjBrVMdSBw2CEm",
  "key5": "4AZMNQoAtS4qnzMwxJXJ62JcxPnNiejbyFQXUKctGLKrEBFs8kBsrVzDaqhWhvVakAuGoJ2hpKb5VANQfb3vYRYK",
  "key6": "sSnVnAXBGEDhpsyhWsqS7DdX5gu37hFVBtFeR1ETAKsFvzVHAt8MnSnaJuRyGuKG8neHs1rt8yDsy4VEhhDuHL2",
  "key7": "25u6KpVdKB92ChVTsCVkmwhZL49mJPbGA27whCgXi6W5S6yYD6LDAQb7djxigAxG35oMJ6gsmxKTvNx82HSw7RRh",
  "key8": "5KYFrGu3b7ixnCjCiigRuWSx8yXn9rJbVKiVah7E9mAX1ddsD1KUYqCo6epsBpaaojh1vtwBqrDNzR2EjaXSfcdS",
  "key9": "4irDjBqvV3fXkn1dXa1sPJfX3ypHXsXuuZaYQ38nLbXx7ch8M1paTRFAkTd7Wg4iSja1TRhqJdncMj5TKjafnDqU",
  "key10": "5QQFz7wY5TiMYQK1HYLC1FCqHYtYNQ6PdhBevAd5y4pbaz2MSyjeeyRupDdVY7pZLGnVVRDLweUCiBvfg85Yq9vm",
  "key11": "51JTMsgqwBRZdEYz5C65Q1UDZjWE8us3KbZHcFv4EECwFmQs7faVoVLuYHK7o4kQTQpEG8pcv9Uvw9uDkASmBgRw",
  "key12": "4n2fF7otoFtJG5gShRhpX5ByUuEkGK5WDzWYeoF6AbndB3fMQKfwvFCWan4ZLBWXi3f3miELMVR9DoJ8QxpqNF54",
  "key13": "W1X7KowzAh7VvRyJgWJTF8xXn22S2rZVr7c7Tqa1P8Qztj6SwWu1jqPcG7efo9pZ8bgGFCNBGMHe49pZRLvSv5m",
  "key14": "3guyDy2uUkX7ryGjDTLRgC8PMuMoRDsCJ2rax3fV9gK5UaA78eb11eBSxC95LYoj6ggsvsJQpxnv2rcvRjNzyQLH",
  "key15": "5D1ozSMREgFz559nRmswGEbYPiFCM8HwuJH7AMspwp5MBgdCoCuFKY6hdpVCjLYC61kriNyJa6ZgWsXMFb2EUXsB",
  "key16": "4LPjZndRZeon12WWYCdiZuvc5EiYNAeKXDCS4Jxs7jaSWB3gHAEdzWGZXyo2zyhxCASEDCpi4Y6v5NThoaMuFhK6",
  "key17": "2cMnA3mcb5VDECKuGqVxfSkY7Ys1fhdjimYkHsSEe5yGpQJaS2iU2owfs41aBmaMz18zmB6UGPz5ZKT7bSRxvj2K",
  "key18": "219NKNjkdMBDWWhjPjdJHk7oq5UJdNGw9kXsQBgrKE7nB3pBQ6LnhBAJ5wRYHVCii7qm63NJxBdt2qr6Zq3SKArd",
  "key19": "3pdXvvAA3nRZuWSYkJhtBdko5TduRbqKDTvdCnGZjrxfeuKpF9BWKJuttBtTqzXnbrEqMPRy8Eq64rHeQcsD6mQY",
  "key20": "5gCZUwhDhbuifTQhGoVYsp7myzCUeKc4HCGD7tbk2katgNANMxwKGVMMBdrRQRsXhn55jRtSf4L272svYAmTcapZ",
  "key21": "37uSo6ZjHAevnYvt7F8GN9VufLw2BymohekP8SE2gSC1Zvjn9XSLQFM36hEpayWste7D4mmzAjXmcjd3PmcP2jwk",
  "key22": "5x3xDUi3J8rEGAAU14JckP8WMMFrVCZK2buPv73SguqdLCw2cNszUinEsTzkhjxi3xSpSN9y7wuucf6LPCfzawdb",
  "key23": "5c7K4iuJYKsu58fGHKzxxnHXnY8EY956nQTUp61rtnokJJY56hZS589GUfuHEbFwrdeEiiMg4qYreivafhGg2g7o",
  "key24": "AETjzWPgW7j9c2xxNxk3F53Gi2LoeFyqwsAfJRbBYh1Pm8rixCd37G5Y1m2zQmAssc43S1j91jSbJvesmEQvVM1",
  "key25": "2rMEZRZfMLbMto9GecDVSqki9gVpRS5CABiWY6QnHeH7Ka2xuMbfKeSw9bHYvdfffYKciERaMUBEHkyhjk5DAxjf",
  "key26": "5PZUx6BZdSVq3J8L3edqh13ShyKBnQXnUtcyLYedqquAjdzZYz9u47CRfxgQofE2RpKRuveJeamsUnCiHvxA9Yfm",
  "key27": "43sDAG1PyJvgRpomnyJe8pW7mSda6PTrJiTy31hkFfMeJt3puCEwVP6upPAG5CCjb49PYNbpReRkFTHKbtSUihAa",
  "key28": "wzouns9fFyT48at1gBJ35nZmAFU1VrcUEuAqUNp8QVS6NekkAwzKrCXNsVb9NZmijHChy8G1T4hQALhYZZiyCPu",
  "key29": "M3RBaiFEafqp4xTbaseBSTxHLQTgTWQetiQtT5QeH97t3sykev1BNLCJso1qKgCjGxhL1AHVxLJNg8DwTCdikzX",
  "key30": "un3DocULnu7e5HKzhEpCqXaJFgqnFz8qf1ezBeTForgSkenJGzcfqmfS8FmPkWB6uLqTRpCM4UrWDuyiKwxYS45",
  "key31": "5R4rN9jET6i95tDqQjCXsb7bv1yMLjSPMoyVhUjjyyAYPJktwSLGsEWVrekeuTZwDcQNt4YWqoiqrzn5NVwZFCQg",
  "key32": "2wYGkcB35ucf467StXJ82QSQVyBPF1At5yvrX6nEaGc9ZpPZRiHHDXzejdtRmm8oEnuPjUuWseHyngoCWiD64ZpY",
  "key33": "5oZwiqsDi2YvLy2ZPrakRfAUPEuWHy4tPAuQTSPAtZ2qtuujisdJhNmwG2x15cDxtajwzjEW6nuSMnjm1R8mAr1W"
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
