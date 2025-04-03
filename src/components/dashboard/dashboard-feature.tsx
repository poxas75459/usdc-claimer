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
    "2Fz5MjcGTVMyNhNyvG4t32TeA6dqGQy6NbvQAA9VVEfLzuk8R31QF14S9RJ73b2DrcV69HnRW4KtmLBWaqNWqM5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RsVLHF2nbkAK9dTjAnQzuX71LvvMenn8G5zkzerkF6AWeHNeF24Te4E9guFuJYSvD8Y4J1N8Zr5sjAtu6UcPeoJ",
  "key1": "2UmXUSUdH3o3y4ojgZK9XADA4GLd8fyekqGRcmVK1Kg6VbETe1RuMJL1CvDU3xirAo3KG52d37hV7ffzNebQVjnW",
  "key2": "4o2Rin7EKWvF6a3remCwpN7TzDRgNeVABdnVN45k7fytsE2zh8Wvwj5nitnoQ1eyqXY4yDPvtuEnuWeRi9o6xh7D",
  "key3": "63ddRU7MPZi2dxVqLRMMHF3iTcU52B9VU7PLcuGSeAiUzkhCtRxEnN54QZG5nMU6cwkwQ1cyv49Ez8S8wdHWc27Y",
  "key4": "Wr13VmWmhoNjk2us5tirC6LBjs1QFLviqE49qrYVSzhbpHacfYrpG5BNktZw3w75cGi6VLrXFRJ49RtRT38hiun",
  "key5": "4pHVtikMEmAnFKN1kRQFKKcZJkfWys4aNgw1PZVGHWhfVBt9hFrP3XDtm5Ztep18gm8jbP6vMJaDhG8QKH3h98W",
  "key6": "5QWh3VZRCc5Lt575Nr42ZUaLCpQPUiPRt2rVb2oung6StTwV4G8bkJLizueXYwKM7TNML5NEzn2urtreitjs5wzJ",
  "key7": "2yCRqcGyXyhmEMsS7D8kirTSYA4FLChuZSEHVNdqSQsee8FAvvMvejSWUFWcek5aM2zL9DQfXcpEXduwq9hGkzQw",
  "key8": "a93CeHfL3fZeSgsJ7kNBmhwwXo6TMh9C7wzWKwvXPFfZPLQMkHBQhAi83JzaNfMyLinHXoJskeDucoUe3oAzEXN",
  "key9": "3mBt85PeYcXHqRDPCvwsEsJzJBBetrfFWi5qgGQFV89ghYUQpRvHWQHnmzk2LBZDUeft26ucVwAPmqfYLwDuoVFW",
  "key10": "RKMVZMkBPvRcWtpoimuzbwgo9mCJfnorzgVUmcfdYF1twNry1fgPevEfPkFxJVTCdPKvW9odworKtM2LcdQdA5L",
  "key11": "5N5JmbKA83LmV79GEpUntsT4X55bbeQAmH16eymh2GjvUK9BWMoHjMkWDLgZ6JhDb9kNaaGHB36bmun9NkZwVoKz",
  "key12": "2YpT98MBFbcF9Ssndxqnwa8P7SLq9gigNY5R7gDhMfdEArMutwJye8JjLjVJZYyLiBttPRZh7Bmas83QjHqNx8nc",
  "key13": "4Lhmi2GXWnDJ26ZUnpmUGDYnpijuLZarY8LnmFJFzqRaFWvmcXVVKBddogxxt7FKmFHEF8fWfuamJs8eM9uiXo6X",
  "key14": "Bj1izN98yxrx2LdZ9oCap6kN71bMQPoWZ3fneUegzzuKkzHKyqjfpEfhQTLUonzWC56gzVEVkw5gfsSV9mPgjHu",
  "key15": "nEW7Y4XvXJHexSwzGHbXewgc6HnJZrV6E5CiWoXA2a4Dx8ymBhaNUpQs43Hgbd1Yb1rt3S3fbGt5W9r2Lcyjptm",
  "key16": "26PbCHZrq5NiVRDT44VZtX8F9uVm6Pq3vSp9QoETfCMEGKe7uLK1cXzcegDej64J19QTKCLiCZ2GqK5qmYgkv2Nj",
  "key17": "2RaX4HEKBaYAjVuQB8pCsQewqreoYVGyCHBhSaEnjotFYuhtXdMc3vp4jAfnxKVWduHVxDc8VAWq2ak4PTWzuwW1",
  "key18": "1PZ5hbMSCRBfpTzeJpL9KnYKT9iWSi2sPzp56xzXi1iYiEVUvthTwYxhairXTKis7SzwhcoJGzENrvbwg24DXwj",
  "key19": "HWTPjQmVS4d7w3y8sPbhNVKuUYnLosGBiYFRdWyY9k3Nrxij9zyoHNKqxCHtNnhkLoz9oTb8H8jnPm3TCeK1wrQ",
  "key20": "wRvmnfEUJgetAA44pkXMdGUEwrGvBKpDdLPM417TRYmXb3W7LiDs2Bfi7LL8pqePGnSpqRCWTH3UHuUtKZyXCUw",
  "key21": "4uhgHcFDhkXMoDMzAPftEhSPeyCjnpUdvPSNGctmyPCVKaczDzg5KNcG2tHPYbD2AbUe3mHmiHhyWZuVJd8AbRh1",
  "key22": "26J9Vdmev1QqkaEPR8kHBCZXGSh9LCuy13FN8ecUhiu47GuArUeNDRuoj49HiRSP9fcWP4vnHM8y1aLCZ4RLXJDo",
  "key23": "5VWY6LYv6FE9ADJWA7giW6wZqCJhLAw5RKHYSn65q18ZLP5SFmmHanEvf6G1G4WioqB5Jq7LSixP9NEqFVzM7Exg",
  "key24": "3pCSKB5DyGP7PgQsf7ueKNNRyC8vWDBnK8yCRCWvgmMmaney5spT9Tg8WdKDKv2f8MDNfRkxx6iLoz7hgdmkyV6A",
  "key25": "2hG6fKtsmVHUjBtnbXjSn6rXtfjN5cgBfYXQ5su3H7wyd6YV5Kus8EdSmtWo9xSiKZUnsxytGXVvCscyzaAJfwK1",
  "key26": "5Q6AdPDRLgssgMr1t5YFxvyU4nYL9rzqZwTncnUDXfANmBwhAQc4NZ5kkU6uqjUzdQZWeCRjvs2Zf1uFkDgnqLyG",
  "key27": "4frTa5hn7Gc1ry8mChdPsV44ptiNsRLFWKYpFbqzqn48guDg5QRfkubzjGtV9i5o3Cy9tE5AwveXi3AnwkWEvMJf",
  "key28": "3jpJ8xq7XmL6w3aPy49vcET8emSXHGGiuT8Cg8aUjJWjjEqQrrXceeuXeVJz1MjQJSAonXaKEYz4i6A9B1jvR4aV",
  "key29": "3bWDEjQMitZZNqPFnCNfHUUzM7nV6P5GkB3Vi9XARUAHhpeLvXz3xuNWNaJsmH1jTkxcKpn8bqVVJLgG6H4LQTHF",
  "key30": "3UMjHmjZKfm5vQsD9WK7jVCQfgkwLU8ydL9SJ7ZkXFif9G1gRuYN3KZPNaaMiVZEgBdfFPd9Ei1s42Q2SEai8wFV",
  "key31": "3cyxXc2xDCj3VfLjzi8SxWX9JzbrCBAL1GZWE5LBjivvtXmoQhnxcUaBGhuJbNZrEPUVF4PKG8ULnn4dP8y6EeQv",
  "key32": "5ai9fYq6tyLPXTyamJHuCAFvyzy2d8R5b52aWqi4nBiDz5XP6kcx6DrsZCAP3sK7Da72rrBjLuWfMhpeBLH61zHV"
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
