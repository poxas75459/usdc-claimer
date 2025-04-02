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
    "2a7ZMTyStRUvx7SNmgyoTt1RAxB3vUva9XuLBzTZuzjGwbgoZLTzV5ZpguBAeEMPPUH256ht9PHETAqvXzniyfV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ahE8g8CYvWJQpT2jKT8tZGbtt5T3Z9U3NrtZkQQhQ2AwDY8biECXrs2DZo6BWUMqZ4MBNsduWW81HY7tQeS7Z8U",
  "key1": "3wVeGbT86DLLTdqQZkGrSjH9YctvwHmbMi3fiLKjyALysMzkhQqgvmjLWBDXHBZ8EqVM8wQwudcnbFAvnQK2Bk6P",
  "key2": "5dK2WAGYTuAoVfVzECtffWou5TNaC61PcKQPAK47voXRsNg413EGGK1pFshtZoS2iv9iovDWsmvLJfttF2JHQLHm",
  "key3": "mprk61qdDmkFGh1dqUkHFJgJXs5xnJP6pmZr771BWkdGra2AZMcKkp81Vvc38uY1A7j9EehambsjkiqvvzEYKSC",
  "key4": "2TknPFAfTLTTpovEZBDwtYK5JyvRsL71iogZibD7yTGX2X6sf27D7p6ntiBih4sL6ENQzS2UisLYtePggwYhXLmE",
  "key5": "2sSRpxdarr4wg9Bi9iK8jQ6g9HSSCDMn6NEDLbJu5SVrPGKLyVnfJn3AWZhrkMT7AGKVYzsBbVm1FRNhn1mAhAqG",
  "key6": "4NFjwNYRTesdqe1F7K8haQa99mSfDGLbvF2xiH9DEh63bH3a5yUGgQkdLGqFVt6nhge4BfeXUWyQQtD2EbdktpKm",
  "key7": "3ccnZ8GjdYBiKUuSWxeuHjLmh35PDujGUVqdKDxPyFrGBC2Rs4PcYC4XpZm7YZ2sph3JgZfgWLeptCFRNLoBAmDN",
  "key8": "5WcuUJamo89e7hxX9RfH3SkhB4XPN6yaAPjPAxBN8Hcz4USXrE1C4nAZdUGJe9ozNeJkCMCYfPDfetcC3qWz7rkz",
  "key9": "51GADaoyjP9dqyoPNeZg9CifcBZDtqeG6cpekaezV8wwZGUWFBzPWu6XoQi9NjCQc8hCzEPfwWFTB91WdeDPqbPr",
  "key10": "3axqNLyeS7M98cAdaEmqKP91TeKYTrzhH8FtVCH8fZJVurw2XhPg4DTvA7ttYwhrjgEQaEYEXsgCmdYSc6iMy2ca",
  "key11": "4gTzh5CkLuKUcWBp98EcU3HLi4cA1ue9tc9zjF28dSCakD6Mb6R1xKTRqC5DyhjfBvimCYAnnba4UGqsNnSEgzSj",
  "key12": "AXG6TRZw5FsvVZRGtdiJEP55pSwteoT1aLphx1G1mMkj8ukHvpQtoMPd49pLMoNSxy8B8LujUfqq9wvuBWZ9ehP",
  "key13": "2omUubv9dx6SPrbpCtnaTrYd7sCWwPzgE21ubASqQXnrxKZLNtKGAQCDssmPLSogsfj2ByUvybmbfYsMTgfMorYm",
  "key14": "5qmx43S3QT55aCxT2cWsTWMPm8pfVDxfV5mbTyFatmP4hnGFHqwGSG49rJLdVUJQCSTT5CWQ2EA3xNw7fYdL2EVm",
  "key15": "2Zk7yNBBv5jcnrMi7GtUYKjjdnPzbDKFEeth9ygSVMZPWeVqdpCPqZrZNtmAucZtyVvQzc5ew4yCWj3QxUC7Au3t",
  "key16": "4heSAu25p7V2ARNasByUZtq7bH1S6C8cQS5gfQCsg6TV14uDjp3CvUUNyD26WuAskE7EGzkc98cQXd5CrJBgoS11",
  "key17": "438gv7iWCHdyqjkXdzakJs8KQv4w7YXjQJPXKsoKeLpQsbr9eDWBiSTGR263Kt1WQzj2TMp7YvH1LKZriF5VJdE6",
  "key18": "2CWpbueqdTXD4FMvgN7Nkg3gkFCgRHvE9XiBBFiXT67dWW2JQFhPZZVTMYbozGYSx8Zdz2eXGvAtDp9Z5hL437kq",
  "key19": "3LH1a2LQ56QuMcx3GWfv7qhpU9SRsZdQAWNJRHBmrg3HaaTah2gTV4QULDcn6PPdHogT8zSL96HU5AGzd2QPRUeA",
  "key20": "3Hx9yNBLWX3vMPzYacMTLL5ezGdqfMmgsChj3wd2LC75rnedkXozQi8f3huuWqgKsSqoj5KFtUbow47uiqiQmhts",
  "key21": "2i2upVXJNreyaXVi4NGiq1AMBsjB3PCJYDJTCYbwGZ75ZUBeMwS96sSKYJiTSvS45KtAB6sGsPKVnvLDJtSbtnxH",
  "key22": "9qMXuGn7zU7JiDVUkSaahU8897PiAhRcAKr9awMBFMQB6UT67UscLGdMShvKYyoT6bieCYXbLHmqwWES7TZtJmd",
  "key23": "2EySHzmycyDLxtZBEyC8eaveATjYM4hFgm8GxzA9BfeTozbYzvdriwR7yZ4KW1fVCtQ6pfA3oLcqi4hwTBqNa9hp",
  "key24": "4CYbZ4qpY9MzH2eXft7TCdcX2jqmwJ3p61xNsVhEbR1GfZnF2ysGhPSTpbMr8cbBRjDdMF26dyh3734CKpvMSJaV",
  "key25": "2WLZ4GNBfsdJ9rnAD5xx2yA2p5hhB9KiD8w1hVz9RZBoKfD4imQKNYnoBngfGu6qCRvvS3mZ4yAKCMduegGZTQPs",
  "key26": "3GdDyybsG8tqQ2XQEnzQMyw9NBur7VNZkCcoXh9ipwLkuqQQ6FcfG3QSJB1nCEa4L1mdh4Y8re1ZfxgqhD7CKGF9"
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
