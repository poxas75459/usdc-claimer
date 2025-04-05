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
    "67B1GUfRC7ZR4NngnbJzdAtFU1K5AM5Mfpb2eQ2nDkErtoyZB35S17fhhWtWyjp6nt9pk2U6wh6pNS266pUg13WD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dg2pvb8cGoBtzdNd4xyiZP5tDPS7UJdgMGeQrZvNaH1xw2VKxTq5SFhTEm78QpMbHgkoVdJzFokQuCEkmAvCyxz",
  "key1": "5HbwFrXz84U4qrQwoRBxsCjoS3qBbF8EH1xJtA7xv4C2o152EzUHdNE2R8kQ1fzecbyLMAN9n8BYr4fHz5yufKrn",
  "key2": "4tPhVjwbzLPveAwUxw9dte6CSPrnVUnujXhUPo2vnZzkWnt4UPMrKzAqj83UHHmWiybyJQncmBezx1r4S5YnTk1d",
  "key3": "44hHg7nDqZmwpBirm8mquSnisbffg2GyUA1JZBHBEHyEYzz4NvDHkxH3Be3ZZg7X1MxmjXoUwrs7npkJRgtYLrvV",
  "key4": "2ciT29NENpVJtDoZsKMT5wLcQLr4D4v3eV3G1PCoSfw2ex9p2EFV9nnAWaQPiZE9uoER3zu7sxy2NjaX7F8shCF1",
  "key5": "4rN72faCeJvSXHNAwmvxZnNXGin12J89z39m23NHrBXxmE6fEbgSBRKMdRwZ9hvTer4wu34kAMvZPpruEznQCe8H",
  "key6": "VdQaaVypRQXas8AGqmPAuRvBvMCF3P9D8ikxo1WWm6tjyd25W8XCZDbgqHyW824BohNqoWgDVUTKbE7PLDqAY9J",
  "key7": "2QdnsniXu2kjYk41PFXqYpxegYbNLa6UHCiDuyoTef8P71pm7EZsExqqG77xYpY2sDxa72A49dbGRmfBdw35VYo1",
  "key8": "5Fia2HaBr7mjyhZuHtd1y4dy7yaqYEuWsR5X9xDY2xR9M7Xd1QGEKB4rYKSVdE9L9EJ2pBiGtr8zK4MVqtqiLtwR",
  "key9": "3zc7oLwyW8pt5uk5rKSJ3foDLsuZ3Z8keEQamuUvFjVqwmj6MXz3bKyjwQrxDn8VFqGpSxYx9adb16Biwtb7H97i",
  "key10": "3wpSGYr1ahzcXVtu5DtHGULheWm4q17xCw2ECAJwd2UifZkUdm3cHYSvhH2to3CGCrmFV9mDNQVQxxrqFL1bvu7Y",
  "key11": "5HrDbFjpL4pJivKw2i7vXdB2kGAoo8VdrQGWKwkMU9Fhrvz6mXpdoQHysqMrvRyDzj1zdxoBDeto2weSMCv5kKJJ",
  "key12": "D6aw9QsLGFTgbNxB4CczTJMR4oKwBTEmXYcokmkSu7NUrNsgKJ1kLpYWXW1kdUzQYQLzF4DAJdQxdAsTFFbyKJ8",
  "key13": "4iTNBcMC8FWrJibJUevxZSy68WNWxjfqm5f9eNATQxNvMxDAyBv2MYK4frN1ZcACgf3zso3EDR6zupnuXDz9BZSK",
  "key14": "363NPNgP2xnRbhhf8WQnLwbfganWYfkAJ72QPRzKxnLpECKL1ANqfvQQC8Nvfs6UCXffha7QfKuTnQb7ih5DTu7N",
  "key15": "2DppYYCFfHJpq7BbCBjzUZdASzXtJD1hvVALu6DYeC2EjqhcxJrdGE1QuE9nSnUvrQySzX8wgJXUwudBfzLzMoPR",
  "key16": "57cCkBBZkixxAEDZss4Dq9xQEpEKKYHefciR43g8mtup2VeiDH9RTdf6N6otDPHpygw6djszudB136y6ap5B4hdp",
  "key17": "4VGfPwXhzyE9ePZhLAaK47hNrkXiXscMuPtyL5v3pcMKQApMkYXhmPqCg1kbL5tE8UCx5AJzW6Sr41YeEoWZkv4j",
  "key18": "5cXtW5JwVPDD89WSKe7dDaBytr5zTEmXDZttBuMnqVXhuihTNajunJkiLCz2978WrKEjGUrpoHi7hydTY82oVhRQ",
  "key19": "3canbrteZxSooKgLXnmbYnqXZ6pu6K3xtDHucd2czuAcXfHefRNjx225ag59oMAcGkiz9MqdqkQ1ZQSfQ6Qovibe",
  "key20": "5cNL5dknQ8ahaZGXUYzbAJvd7DhNV5WtY4W1AKKL5mPLGxJykw1PBz2TvwTH6eFfswW2PPPYKADh8WfrfFtgDEYh",
  "key21": "2MfLMYfZnx8kGFgeoGsJBQqyHrX359pb1Pt9rb3GSz8BnfxaDDHzWKJE8mZYWbZC4DBhrQ5vkgdMY9xvUc9a289e",
  "key22": "CR8MSfuzPKExtZYbeBHt1u29ittcGrATAyzJvg36VWE94MFQjv3t4DgFAJgYyRKqJEmEN53JBq8xjvaLeMrZgVQ",
  "key23": "2HjvCcZhWeQrYrNxDa51Rusw21FBDCbwopv6rATunDQZiXbfWTV7iYoKqRfdQqwiXBdcdq5JPAdbch5t7fa8xM8B",
  "key24": "4eQTjMv4u4XY12U5ME3wUzuEcjrC57tkHhrVHL5r6F6uVeyB4e12DAq67NQmpF5ka7gTjkqqbZ3RWRQ517RoSPuj",
  "key25": "4rpiV6Y4gS8rweFmsYZxnEcfVXRp8en27quxfXgzmhv7ABCXnTCGRuvdqt1uXYkDshjs6qqEpkrNYov2aTjwUgf5",
  "key26": "oqoyJLnnAueKgvdNNRKvcyeZw1aNM75mFrukPFSRX2AEvEqAQdeWvbGqaoV1UxGdjmLyC1NgE1j5dSHy67YdVD6",
  "key27": "5X8RPxvQZYuajerWBGokPGaDwyDdRtm6tBKViLS781RfPN4pj5Fu5QpKupguyYDwbtYqsmMScAME3Ae2cG5w2Z4F",
  "key28": "QPfUWP2FgbFPZ2EnkUu6iRAky4JtZ8UVoVD26BojsvEXezeGnFcqipZGSvNx1D9Y6frSQVsp7bQGLDGkqgts4xx",
  "key29": "42XUSZ9YHUEaU8texmNjnhKH7t9uXg9aZtGz3DwsoX94ZdXFSZqhjr2pR3QYqa2GsqLX9X7Fq2ZeBgKTp5e8nxvh",
  "key30": "5Dt1CQfr6Q7hvSSozxA2YXUzo4sp3gcsX9eDuc2a6atvmiFXBFSYmeDaVwcNAZtKXkqeNSHH9QWPtjiPKE2fYNyY",
  "key31": "2r2uzpLEcBzDFoEVTXDAer7oCevAP9rZu7QhsHsSHdZEWPSW2MPWytetzcdE6YTdKNLFPJ3EdNkemFsNzVDLrprc",
  "key32": "2LTTqhF6qrZ9hJHxzKRnhX3VsyQx17fhq5gdd4imR8SbQjMZcTFxC1fNTkDhGFiKgJ5NLQZKy7pUwxpobD4hDAeH",
  "key33": "NjSGnrtutQ1jNX82q5ax2hce3uv9uAhyz8fDw3Z7dpC7QZYoy85nDsr3ThABvxBju55GFtNe3xrDwXM3RV4P3Ri",
  "key34": "GJvGKXZNhuSuduhPN29nVuY8aioLN2xDRtmpgUbHgV3aVBnNLPz2aYcpq3xfr4WZhheS4rBhYBVNsbHGSCMz6x2",
  "key35": "3hD5pDgTDdJYPb3TaEqXj1soLT4KjLXvjYnetNupg2KKKC9dZAyYdTVECyT6PXHkRUpMMxaEoUj6wnJY5fW4HNTV",
  "key36": "3mLkxoRhBjn1Akao79hLCZ5HkKWUGgcHLiTzLhfYLw5zWHjU8VVqhuoyTfhkD6utFHDWaT4enF7heDgqEnTpdDys",
  "key37": "4mW8pX9bVrp58xhybtdXtiYVZf2J5axudVP8vefEL8LoSxwAVbUMkWqtX4YFuDctbFGdttUGZX3thLqmCDaeVKa"
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
