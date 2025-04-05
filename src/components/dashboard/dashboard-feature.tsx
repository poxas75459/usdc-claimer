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
    "5iAoSQNAgiREckKqrmuDNxZWMEeyjvfoGnaTQGzi3qDKXQJibbWsEZJwhaqcGqiq8vXxc9skaQ6boYczYf6Aa9XF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pzLGjNHJzXaDMtMS8KF4ZjRUTpe4KhfebB46aW2JtuqLQRytHDTFTZhfFqbXjfSSn53vx4CMQgq3Y17o3YQ1oac",
  "key1": "3GHVotXZ4do4NBfs3NDAtcntP2kiPKv6PFQR7PGJVrp9X8NHmGvSa2d2qoUa9iwwKrrjTZikFm1AYNTS8FsdjcuR",
  "key2": "eveBPivmGZRWb3Rz9ZYNEjnxb6WEhL3wucP22eiVMc8MJdP1BuvkpzXW1fTjXTUNnxVWP1KtfUcnNkeG5eWYeei",
  "key3": "3iuC2sjpAhNJwYMTMv6r2YtCW7tbdrJoUoMXeFrsDZzGZBTY7greLcDfbzwpgQtcndEkVKtQBtq4ffpGg64ieocH",
  "key4": "3pX2aXpUc3wRM9Jo7bJJzEMdD7EuDSEczZQgmxBz9EsWww68h8nSQkLawMbiM6QkP1MPCF6826uU5N9Gw2aRUb5T",
  "key5": "2VJuodQACrevmvouCLFtkzspWxohPqkiEDkYFtLnie5HWNsZ89a3ETq7AzsdZYnMrqQ6z8K3ypHJvn9jBc373Nqp",
  "key6": "56tXc8gLy1VyAtGPhptt4e4zrx9AECpvqUQ8Pxpa9TYjShFTmqmTNuKoAmCkoXcPFLwrEhTDi8mTMJkUsqtWNqUr",
  "key7": "2yEyeg3496cMcDgmxJ3Fa5sHJCH2FXKtTSp6fUw63TvM7EyuxjgvhhwgnxGtTcUeroBhQw1fn527it35YLGC7rU5",
  "key8": "4pzaquJpfmsVbo4XEayZF4jyp9x7EBk8BnatZY9Dt8L8RS6dNuP2Q3zGnTPwjpMCM2MwBh37vXoBePL5sk8A19iq",
  "key9": "59vf8r712RREqAXZNysT3ast1oKLw3wZwBmJAey7JN5yh2ANSawzHoyxqF6h1gVgypXfZiSVAapYzMaaCpHpLMH5",
  "key10": "31fCJVxrjjUqSAXoPDBhpFUvBXwD8nGjpcu4RVWZFewoX9yLnxZU5Tu3iNHMAN8vGewF4rZ6krahKTYos3A3Yjat",
  "key11": "pGKDEiVRfH65M42wQbMHKHUEcDkHSUZ2zZjWmjccpt7Q3AwrTxH2wtHykQiVddi8kTupCVsy6dFf83SVzs6vEL3",
  "key12": "4KBagqxQQoquhQXbMwhwjCMHjsL1zz7dvYctBkT9eoEa3WTdhu5WvMnohb6pEx9mGGZeaxSatVNNfCxJdQUczejC",
  "key13": "W8cmzW59uBjYkk4WH58fwyXNAijTd9wqhp7GWSiYd36rfiYXKBRRAjsvHyk2zRWZFH1ssp4B9dhLwQfq3UFus64",
  "key14": "yAwxjequGkrw6zV4F8kWsx2feGv9YkCvdVij6mgb1LSBrWMFwxnyTiazUQbPGmWYMpPQLuijnKWHh74h3TPrYfu",
  "key15": "pkS4jqoKBE5kge1cNmT5FPZfmqinKZyqnLJM3WmnTxapUQDyHcpKQnNMssAfPjCWpn5bHmxEXiiQRbzrrViER8w",
  "key16": "28cRxmsgdnULuH3DVnvTjuFs1oMg5gEGYiA72fSMZsFgaooFTKkmTvg9kMQMyJhcPZKVPwYUZE1QT4Q6bNZQCnun",
  "key17": "46nbkJPJByyJeJNZS2PbQwZbpnQW1oxLDeAXhtcmWt2FYTCPLSwhbZW2sJapmeGbwohu2XyH43fpU8Ja76cSoMGR",
  "key18": "5Z7FX11UZsSA9uri2ZTq1c9wF3wf8PfMBe9PrzGorfFM1KdHwP5KLbh296mtaCgLpKeAwWoNWs1xnJxuecazHXwR",
  "key19": "3htppSXoUBLRGaZ6MDJrP2euMG49d1HtfZvTxJKfn8RnkAUpcz15LhQgbVQ4TufJJTpKFyz3RzbaeKQHgz9G6CaD",
  "key20": "4cMMKMMqqjPUBqzALdKxbrxvh2a4jqrgwwv8wanZAk3eqo14bNXRWspQFHxrtAtRQdRHWVAGFmM6DXGnhVW7eMrK",
  "key21": "5rrTVi2gZ9YAbh1YP6mXeR9Anbcj7sazR7mshsSaC4peVBwcczoXSe3VFZ1TSAjWAfkd5LBczfNoknuA6bw3FqNT",
  "key22": "5i4md8yQKgJ8AzSiqxPFbUebDMhbRJLsQegwPgGgY2ZWWpxgMGU7K7rpnzb3K5dZcB1Rp2NPRJRukmzquhHfvQC9",
  "key23": "5np9E5NJMyzKvdWF7ucQ9RuQtwsgxVXPnvsPhnopN9KpLXTt6EYxNZCUUrL6ShMhK9Bg2d9UXfnG1jtBtayWRhho",
  "key24": "UqEJG1S9WRY4nc2K5cnSS1yYicF9XvHEuvAK4rqyeVUeFizX5fMn6imtRyikrUgEy3PaNJogtDQggQMrFyVrtdk",
  "key25": "26DMAkgfo1nho7kuB5xUxKbQ3Da741fWYv6SDvxdT3Pyd5n5n32Zfiv428oTm8k7ggCCCbdTbvtiFDjEKzXqaXkz"
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
