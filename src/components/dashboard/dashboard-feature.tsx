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
    "3YcVYeMXJgsthhSDCwrzHnKFDFBYxqe9cDsDNy4ok2EdCzzmagaTkxuYM4rhbndQWmxVKTkWH2ZcYvuxLfqZEvMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31UhiUUx4159XLDv2YvqwRbfPfqgKhs1V5auq8qmh5gtxSKLBVbC42XP5AvvMTnqmwQqJ27cSf7GPV37Yp85FTUJ",
  "key1": "2TvD2XkEbSbWT7vXyuT96yE48YcnAwj5ddiXcJtJeBgpgsXBtqmDjE3cFC5e6gdZjk3HaiMbMTTRFZ19YhoHRduw",
  "key2": "5jmDm5jP7Q1VkCH5i1nLwTuT1rJk4M99bcWPBd7ZKJ5rsrYXQVUmTsrRmGvUNL8LkswoLebvGbKfZkdRCYzaMZ6v",
  "key3": "65PEnFmUyns1jdocepJUqUiSs7GdadmW5JJCLBeHkx53oSpwykS69d2pY78fqETDV19Ph5g6Rfn78YiDKycK239H",
  "key4": "KFmqp7DWMTE3FkZggqCx1PN236KHEKYzk5Vo6zyQhWxxD5v22B4o2PcgFnD8FT6D9auojYi6fFMNRnsprELqh2t",
  "key5": "4Ag9rNaPyq9vG59qNtpBUn8kv8HUaxfzqNzWb571QSS1HEpbVApuLTGSPp5N1T9vjMeMCYKrrbYYjTz9g3TG8mHm",
  "key6": "huTpzN6nR2c6ByL1Zno5jKNUdJyHjzjKtwH3cQVG6qFKDarx7MFxBVc3YvAo5mwWEcce7GqDHaRPKzpU4kvbRub",
  "key7": "2cdFeBigRXEpoKhXX9Yy1jyapz2TwLK2kjeVHdBRmoVwPpAR9tGHwaY14bGs7bE6V9oYMJMdw2BeSqNv8GzW5jtG",
  "key8": "43NKy9of1mcUqDxScGjn8hZF6npQHSGgR7eeonEPHruN3KmJqGKC343bNzdCsoCFHaG6DJG1gKKvaVoFj6a4qXtm",
  "key9": "3TvG2ZNpJCzAWLAH5VdcXSE8AE9s7gobmuu7zy8yJ7EHefBrmZ6sHEyWZzcwedVDE8KQspxdtKW3kWSbVnKXjpgM",
  "key10": "4zV13buPHoHnrgkJKPwzNTCNXU9kEnXXmbxhsBYiBLVAMpBCRzB91pjiPj6Y4Cn6hTDeEXMaUJczde3uVrqw5JEJ",
  "key11": "4nssHNnZnbZb4UZ6MKsUAA8Le4wfZdHRonskbDNvmVZzzNEdNR8u57S2newXAj4Hk6DXqW9VEDsa3JUvYhyiYYYP",
  "key12": "YXk53kGbk5rWxNZEUPPtJFfYbMDTce8jYxeAGWsde1KKJqhu1faifGLN48DJTNWZdqqFaXpUVqmZ9was8aP4LNZ",
  "key13": "2DHJURqNJEasC6ks7G98byZvXDEtmNuRVSywr2yk18tuP8ABz4fStVrQnJUXZ43qwmR8rDmVGx58jsfqZJdoETjY",
  "key14": "WuJQwjMLkYqrqtHDetCMesC3t8uxpmRu1B3ctCoYEwqfrpbPRqj45akJWwnRQYLEyKYUpPYePzrjejCv1oC417g",
  "key15": "2nx7iV8uU2qTZKNY5Wu4h3H33iB1yF6ykEPnfUFFiAXNdd1AkBCtTtEYHAuCzb1Z5SrFBaLw27GLQWiNymMQKkY4",
  "key16": "FLQ3BokvxGgKWgubHNeQ6LLHSTtKU7SF8eJN8igFtTXiVZRnjkwedh6U3eauNBwngce2vxFVSHBkrJ7dSNtvNQ3",
  "key17": "4CBCqYPbV7TsNrroeqvX8UQmDCnTCsMMzx4ewYwqZ4kgxRnFhedoGZ4qahQZt6XLgn86Dov9GbjJF6MkW21Ct6sB",
  "key18": "E39b792SfL15v4QM9K9TdVaDiUKhck1yn45PWTUqfnfjJNWhgtAhtcs4JAGa228PhnSNoBinuu5P12mNqE23Q9C",
  "key19": "4HErcTA1ootHbjgT4xuPoom3B9EPixD3K8tL5EwJujVrWUTS7trXbundX7ZNaKLq8JXwWPaFxxjLFT4Sc9p2ENAU",
  "key20": "4htEPeqHETHah1nnFu2M81au22L2VZRCrhH63PrzAYKEys1uVXcpyaXmV1km6KDoVBav2noucURm5sBGVkKh6LbT",
  "key21": "3H2cxnzfENwtARQ6UhFGNkouJqNXui4exWpm1fytJGH32XjoucQwGa9D5otBRQ1Jfq5uZ4WpYqpU5zgAbMdNPDyA",
  "key22": "5u6Eu2fvJGKDo2W4dt4ZtCQBTNPSn6CF2LiV7ADDuQwpXTVBywdg63PswhMZwG6dfBhwCDAxLCHN7xjj3Zz26MWm",
  "key23": "2sa5HnXkTBMmHLGjQy2QKhs8ZRkFxpa3Bzoc8qoZ9toyTHqn54Y6ntbX6mF4YCyW35eB7Bi3Qn1b1sQ1CVeWDxxk",
  "key24": "3T3NcS4jEAN126psnL9ysQHbRVF1AEjDoFDbopSRwMCAU3DGQJTXPTXVfp3hiYCiJqe6jbqaqZeuYRgepcEqonog",
  "key25": "2Yr8mfS9Tk9kUpy46zwe9V2kZrbSGny723SzQR938XHX9AWHLgSB8ekSMjGEQaeuqsnp2RjzrZJMYDEheBKyeJEJ",
  "key26": "3hqeuomUXFMAUoDauXXF8PcRJWeVY67Zi2TS8td1fuDgDGvniJknmuG1hHmdrNdQ856QawgaiKxfv6ScVZ4XqPVx",
  "key27": "5SkwWHV97yz3DDsa4RSQ75vBSUekAPG8X181eKAsYHuVT4qQ5Su5UkdsCFhC8wXHUEyHmLFfLBTb4EhSSERoZXyi",
  "key28": "71C6fZCRpcVhH4t7dhQFEoNTT1KqiLELSfMVVQ75xNmsCpZqZCvGPb4RzdZLTusnKqRwxRnNkE1CqBvvsNzkk6Q",
  "key29": "3MbQQe34REoiGUBNsErgih46eJ3paZcAgYBnDVy8LcHCJdK3s9eoP322HUPbPBGFKWmzyPrwLT7CkmudBQheiU7s",
  "key30": "5nVKdShbpRmuk4KtcibiXf7e23iDFHtWBPKDTFNozjrUjmW7YmbjPJWYRV4QQ8w5bUgLEJG3Hq1gVksqYFvJSQJn",
  "key31": "2hWXCrnX2SFb7LJ1xEdm674McyRov5og5qA7FX4CZ86AY3dxvJQQuUptZyrctnzaHVpqZr5sxEvuipeUw6MPsJMP",
  "key32": "26CiHrqNM4jB4qA9JGoTfQcedgqvYQP9nxriA9TqpjiJuEeCVh96BzBAbkfe3soofoFg7jDJE1ark7fDJF9xewr4",
  "key33": "5TVBNawzVFyzWG5hgu8ENU43TEPFRue5jY7ohfgyjz5pVWLx6smNHpKQBBPuCi8vFBqh6ZoYWpBufmXePZhEgBa3",
  "key34": "2UeFdYNjEHGHesTdKUrTagoj2PPFwUijwurt4ixFhXWvPXX7XphP8Zk51muNj4aci49BnfVH3zA36bUN7vvKo2Tz",
  "key35": "AisANhXTyLs2XSq25HtdLNmDtmGaEXrEJswhXU43a2jRdqzsEHvBNetADok1pYYHH2ejbkHCPzH2aoArk3bdMpK",
  "key36": "aM2weNxJw6kp5874bkCCAiBKgMV2Hkh4Z8Ay2gTL2nTJTbLsUkAARQ1NadfbZJ8bV2AB6Tzk4gjL3UPqgBbtj1T",
  "key37": "2NEiByMzZZgETfp1W3ZXu3HkEeDU2sDXuLTQce2U3Q5Saq173S1iLuoZHbMd4hYFbQQfc5wtLjg7qEBK8KVSJPBW",
  "key38": "41tZcaQNeFAttduiXAqkqYN5RWCM4muD2KBWxpByzLVzRrBBRYyn8EiQxKgKqfyfycxURzgoJHr9wZgFudaw3oWt"
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
