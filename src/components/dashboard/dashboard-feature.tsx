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
    "3PGu4a51pXgfvFVPhPnpFfqdAQU8PLm8qjmgnHVkA5yZzufYemx99T8wd99K2DXx4ErY5rkMkCE4yBpcbxwebNtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pdrkCv5nmZUpQ4hLtFcsUqTQKMqzbWjSrzQLzzctEgGhAz414WyiFLaccXWg3CegBibSME7CDApwioS7PoeTjrg",
  "key1": "nYqgabfVWf8sTxTQ1p64qjWcZvnkifgvtFDktkqSXzEYT3jxcekg1yZYFUfF9sehqz1wag16deuYfnB2GkjSwpR",
  "key2": "4uZSafY93iUtjdBCV86qLWGZzt1Ha1XkA7tWupHB6yrcvKwbRiYBer8VZqjkCRp3d8PXQNTrMjYtmsyfa2exsCgY",
  "key3": "2HMuBdC7tASXMdnHxtAFRhLAYVj3fBz9vG4nEHamzUYL45JVtFSm9oEMSv4Z64AkiPPmMAgS486r4vpDeXuWJyqG",
  "key4": "4PorZ6wyhuF8XpTZLiBuf6yfkkgt9UB63wXZW3UJ1BHYbJR7W6dCK9N564xdiQRZt7SYVcna72DEFaW5KPb1MoVw",
  "key5": "38snW3eJujTuEVqmMUtSaoYxRryREsCawKrWS9msnAyxBd6bvDAqgSvtSeqQmKYE8LbMWp8c3br12FZCX7QkWzgn",
  "key6": "GjSbtZ3E3QRKZ7p94jGSTH4obKM5WUcbbzFmSZraL6g71tF1ZCs4KJAVztJnqPxLT56jD1QRyRCkZXdEdDsN1yt",
  "key7": "56UW2pW6ubpfFzB8v9qhYYBKZEUJoro35eU5bv6KbV93qbeBRBmHxK6DA68wQguNFjKFnfKPjC5R6m4M4EZXYeqU",
  "key8": "31w9Be4dJJoX3uAkfteKx1ht1fTHrKiLWNRwb4iXzTWdXQ69p1v6rAqqbRmJBWYXdVgS2PKYmdyoLrJY64womSyf",
  "key9": "2GUAKmdrVprt3fHhpfhr5NWtEnfi4yV86D7vJi5VgZ1bmquYd4WyrsGQuBnciJ6EStGxXqHDC68Qna9uRFMGcBFw",
  "key10": "67UyVCDXdC8kMa7Lsb1CdPi8fxxWVnMH5FKJ8nfJ41wa7ZYTssEfLN4cbCxaYxCMNQxVcZpzcDH4t2QEf8z3BXh9",
  "key11": "3zWk2DLshEY1La1JB2e46tFi1xVq7732rbFUnsvSHmhxZjanq7TP9AQyfnTz959eWyhSEtcRcMz1fts4bfBcXR1H",
  "key12": "594JQ326rzpuJ15Gt2tH35TevtzDgZXKGS1YpnoPo4mNacFReyJpBQX4ciTmzdpiyD4vux4BLuHJgkvx7qUgxeGV",
  "key13": "Q6G1VW3t1mPcx9KrXE4pDoW51BykJpxZHSUp7MDhcWqYsUsJBzentb3c65Qt9yEtAGdn9w8CpHBLibxuJZg5bdD",
  "key14": "2MipRPGj2eNeFPTDCGHYt9kNxCUdq93qSPuHHdh5M5SAzZct6pBrRaBHKaFEt8PMNwnFo8ujiqTPW46L7DRULboa",
  "key15": "4uSMwQBUHQbsmtnd22vKCkYo9WYdxUyPy8duLi17UcgPSVsiaXxa2g6cUaEP6T6p4ethZij7nT2SJk2kxtq9DECA",
  "key16": "37Kj4KkvcssEvXDP6ndFvum2xoZ2kXghxqgRSXT5fAdhiWtjdeWvd9i9nibHAijwrmkLZEGvQAyBAtUHgkLmd6zZ",
  "key17": "4ZCQr3XqitbzrxXZM7NbVkoobb91x3R5LVZh8vdJ5FmxCzq5wVh4UWeED2TUB3GYBbciCQGoRUZPeXtifMnQQzbt",
  "key18": "5qhxRp3nfz3y6v1xJzWWVooxtFNYUFvXubLRNruDT8osUh9Xd32M9jdy5X7Kd8c34EGT83FUJoTUkoC9xZUwtN9w",
  "key19": "i5kBR3q5RogZ8dySWSmvmf1NqXoqARdhW9Ck1MMazxer6WCx5PiYDt5xKQSF4MdShv6t5vW3S4J36YySTZ3pDjM",
  "key20": "2mZ4CqNea2fGFV4nrjYK7AfDrSvnEsFBGbGh8YT3PyX3dDQfFdzvHcNvyHHN6en2HwehmYCFmrLBvw2Rgx2jRQ97",
  "key21": "3x24yaijQfSuzkmSxj4rbpGHjvYQdFijTtpC9TfYRrzQEsdXYjJYKhAiaBNSPJqjfZsH1brN3ZhPYezZoAwCbZ72",
  "key22": "3oSVxNKxxB6U92whud9QEXsdfznudVBnVpS6JtsxJbtkunzZjRsK3cYhw8QpVnEnFmAkqJiUZjtxpYYfL1cs6dPY",
  "key23": "36oYHNMrzjWE5gGa67pjBcXpeScrmqTVu1JYnoWpghMouDXtgthYWk5GyCPTNWTB5THSuanZGmShzzLsGYzo1rxR",
  "key24": "kVNRy997swj2QW3GJvMXbAnPWuc4Pn3i5y3gdUto8Rb4P7cLdBVTkLc3t7U4gVY7tqSBqRUX6wCUT26mbFx5bif",
  "key25": "3Ua5s2qzg6ayJcQ3nHZMxMsLe26BuBsT2WZXNJYgd6oVPxiku8FX5tzJxscG39gEwmujKY7b2YAbrJSuVUaPv1Tb",
  "key26": "5NsjokjRwrnBVyS5hg8osjqPPz9nCcdMUZvtceLmWuYBfzbHucxTZaeTNMMBio3dTPDMMMC9eQTiQBcBD8qTzwSu",
  "key27": "2ps5fo2gBimmcTXmtcyNz189u51TB3vq6kKHitbVxHg6EEKbfd3Ns3xzuYXCgbuf4Bzw9sEdSQ8Qd13hst5t43KE",
  "key28": "42Hq8GovHx6JrVyig8QThjCcCL1XBsxCZvRJTR9YRH1tT8C8GmyMbERPNx84pJY1dgTZ7dW7YQxjkYm7RZHeC3pT",
  "key29": "3sdgm6ogNemFMB6NsNGGPGjw8Z58GJucjCVsVZACpcjjuEuTo17N4QN2r79UU1TpEUbpiip7hXwNcdnuDEoKBqhh",
  "key30": "43Qz9cMfvE6UJd4Ad3gKFboYeuEVMqwc4Q7wqGuY65yETdoh8q8gbipH2MibDQsRVHcyp3LkGhEaVbmfDFvu2TeG"
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
