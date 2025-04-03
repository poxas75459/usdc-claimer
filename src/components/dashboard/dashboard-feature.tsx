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
    "42YbUmJYzidvdFrbQ5CKZwz3Bdy5KJbChLctVjY3YDfudodpvribSXddjHA3WYoZySa2dQfiCeVp45Y4vUBtg69x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65jreEwx92KzTMZiZQh7naSkUdQy4MeVFwLqW8cFJ6BGGp1EyEjNWTe5in8817vULxWXnfDmTtwZ143UMF6RwFML",
  "key1": "26WkMGSeUNDyz4vAMV3R7BEvnd1Fh5a3PxvLg5ZAWazY95Zb7PehHsxnztPdqeTLczt3ErKDD147E5h3XkQ5xBm9",
  "key2": "2egVvqXDspKo7EScsABiQUAtEZgG5bfYzT9Tc6yyGUbXosvkgYQiAroreVCnt5RUzjG61V3PM5TWc9UnbhCStcKg",
  "key3": "xM89R49iWfxDBQSW7veBLPUzQMJrGk9qe8vP8dG3TAJs9SRYAdmijwmcwwqhvDCKVfJpCN9r1eVYL5Rjg2kCWRC",
  "key4": "SmiDN2i14pwjjzQDeSfKt7pJJ8eGXWhTnPm22q9REfSfuujXHAmGucfoB1Pir9xPhfD86oFWQiQ6Ca8NAtFtj5T",
  "key5": "2kc2apk2FfXsn1uM4gVtC28WB51gyDsfmW3eU8u2vNUwRrzZXDga5ufXtctSbDF2jmZYAr1EzP7MpCxugd63b142",
  "key6": "3Dve1qB3j662RJB1phWu3rudRMqhBVW9boBUL2wffutmke5qwhRb4ZQWAWVR1ReiuZKrrHEzCoGnXPhito9zWpo4",
  "key7": "pfy1kEq6NGdzYgQE3ECuSAExC7yqhD6ZEamy2Ns9WcAYwWgqaUBueN6qkkjnrdaLGAC6hvoUseELWxxcTXgEhKy",
  "key8": "2Jh9ZMmES6a8THD5KfuruzpSMyrMX8Wuswt7dXmQG76EEekMksRnBrvVQegB8pr9p6oNEUg6Fgt7Ji2kJP3son9q",
  "key9": "oMxpjDx1iJo5TPMNAo5by3uQNvH2x5RSiepe6SXU1Jcn9zVprY5C6SQkszActH3noq29To71epy8bP8gLcn8Ecn",
  "key10": "2DMyB2wmHP5iNe4zaUh1UoZ6ZCtyiu1fWpe8EAtK6Co2ZR48koPFVUYsWALLjkUCToQZK6ZPjQHqCJfN56kPwipt",
  "key11": "4m1yUdGxrHs6zybzgRT35J3yadLcsEtXwxQi6Dek9hHNnWUmcnAR48Gd6761Z5fhBG1ZLecvRxXD5WCiD2ECkWUJ",
  "key12": "bUdzxfReC3tBjT1QiChM349rWfX9MRrpN9h87y4Lnn19qUFujaySZ7h6F3LXQy4o8vJQwkoZ4sYcGJMSu48RgS3",
  "key13": "3tUQTWD1qGYm8ThcwJfoix3Qx19hCUgQHXf7sxtoLRZcgMTKNY1z5DSJiwgtXbt1GrsQPdP7nmczpgjAD5jVzfZM",
  "key14": "37QFZatw5fjgo9Saea2iKyYxJEbTJEnMCoy3R8SwFhNrymwtLhVWRabLhKZWtiNAR6XeApGhFRg3Q3e3m7FNuJ4C",
  "key15": "2FZhEfu5D3rBQGf53j5T4AkB8qzFA8Ni5nDLxjsZSeMT15HotZ8gebyEJUR3bKWEVjcsWWoT2mjGM63NVQJPGvwX",
  "key16": "232g5StkAoJE1U4DKd6UPdmiHJycpd86t17eKYTR1135tATPkmngGuVwAVEZxT73X2RMBMBqraAc59AB84Zoj4RF",
  "key17": "TMm7mCqiuDBWouGYL4iLGp4R6m2xezRnEWJgWCqor8KYz1Vn7mtYrYqkmoozBMjYDUGvnMSKK8z8NGRPUVidNoi",
  "key18": "4MHDpC6iscdJDcKCrnLvWFZGDdLDaYce9nKHyow6RboHwNejbAfqofcuxhpQeQn6dS3BuuR3tFYxanZKmQopeQvB",
  "key19": "2KLGo6SSqxci8VKiaJBKc8yh27urFmHhmN68eeh5N8JqyrQ2s9RcckgP1P8GWHaVmzw4qVoyFRAMR1L6Z6j37UMQ",
  "key20": "59dedLUnt8P7uyuXc6As2kVHdhjovUCX874rtarWnDj3bBzZS5TgEc511FWPtY9M73Sw6iukvbL5ztY94ohR8jAT",
  "key21": "3C1HD9ZU3NJ34VntHEqmNJz17YvvkmhdHLy4Ar1a5Vqh2ck624sTmq2BT5e5uaUyyfe4T85vN6zW3jiNfz2RXKMx",
  "key22": "31tC1XXWD1SpkpkViKaVyD9GNnYP5tV6A5n2dm1HXinWDNRNy1LQFBTYcQCDrEKFvCkenDzx82mnLMK8mqprVHU",
  "key23": "TQZnJVM4GoRRgyCU28v5HZzC3XYsVaZfaqvUGzPr1oBaf9fGMn1MCRSypy8eKcZPRQwf5ci7UaF8thzJwy4Bww3",
  "key24": "5Rbpaj6a7vvugosAY6G18JmtE9VzrnPe24CEg8y2FuQc8v7rvWXUPqQEPhk59sKpCErUGg2CDJUdYkuNcf4hk88i",
  "key25": "RYyDfdpkZrtjsyvz6dmd5GSR8aEzJJ4eed1cyNBSYKLAuM7utuwx6EsrLUC3DgfLFWQvkJ1SQmTZ6rDsqMezSxc",
  "key26": "436JPmRkxg5tNDYDbGri5TrdJq5TsiixkWbVWHkhXyzN9cnR88sWrybAt7SB7iUZzjpdwjFuHffmTFwma2JLtovk"
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
