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
    "3WspjYWub5duwE6GUxYniEKUGr719ATBrE98B6k5ctTViwMvie61ZT2w3jgKgGf45J6Mut9cd1SpzdraymHacxjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eeoaNix4jan8EV12zr3eoKTgwSv1k2FZPBAPyF2r8SzSahXm2DHdmKtLFj7JPRQ4o4sm47FCgbSZTxaJzV63FPL",
  "key1": "295BfNCuLdjZcm3g4u2iLhBjPEZMibP2QZuA7fvrCCLc2WuKKhvBBn6vjye42YkGuMHA2VaXk1Qdt1ktbVgzDsyu",
  "key2": "41qc1k4E9RAKmRh4yY5kMMRMqWxHr57qXFngPKe7M8etLbuGquB4b8dhZkmncY9EMGMo1THrrWYkCsnKKtmb1iYk",
  "key3": "4wnHZkTCMc2pPDzQX5DQUDRyNmabP7Ab9P4JT825WwtBXSrYXDkaTjTvL9vqeeKyUja6831ydAudW8BPcLE4ZtTs",
  "key4": "uPMDwRgc2ztuhtFtePCcQQgiHzjFdz4b3hSmMXvu19L9XApggoBeVHi3KpQudMUjzdiATUt3enCGH7WfP6MVt3A",
  "key5": "5SE1TTwJf1X5dhDGMfDVjwzgDPgpbrYNrS4EfFbe7pgycJEGm9Wcy6ADGytP7vdhKAV7GcD6BowboEwJS15mudR8",
  "key6": "NpFmSjyUFVim5qUEfdrnuA5py1ZXhZRQuPvv2XnGdosc4V22zqkz9yuUfvgqjoUJnQLzBnNqEMR7JqHg1hXWbjj",
  "key7": "4vfAGxzJUzhNDTCK7Ne97YuY5bfJRWXYe6aHFN3ji3b9GjxKHSHrQ3msJVSHs5ppKKHok5pZG3WXyHjw2PQd3np5",
  "key8": "2dy7NJRHat3CW3suyK5in8dNERA4Ai2VUoQp5M6HEJc7aZJzCcBWoEf3hspBRyLVBwwBpYRibeBgHATLniJvPDGf",
  "key9": "5LkL783jiaz9Fm6ySxP5XfMn2MTjkecv8cmfyfaUMpxZxR5cL7sp5vThKd9wgMwSYkjzLPrNPq8F8FnPEzyr5eZv",
  "key10": "3dSmbx1iHVGkrqcw4rn2tDyEmzDRQEyHtVFvqgsHCU36pxsCAvMdm7Rna1bEozeykLgV8HSHopwyv9z4z13sM2Yj",
  "key11": "5MKYZ6inz3UF3nSLpeVb2Dg8NzaKuayqM3FTdUBcBjm4oYew26XwFU5dA1AgryEmb9acWcrYLdBbafnPDQprHX6Q",
  "key12": "2uQZtBZcKFpTDyFRMe3iUt8LHPdsvdfQHkyJYFZuYiyJJF2v1sg7Vwsgrd8K85hwVo81RQTNkFfmUo73d8PAZeFy",
  "key13": "3GcgsC98Xn1PhcZeBUn7d2bbA2JDi9aJZzVVVWTvXWqX4jKuoH6KPRyggHR4bJTe7RHpvDDM6djbB4Vps4QPrcUz",
  "key14": "5WHGMgAhbehDvkyjWNXr31XfBN7293CNk1BvXJSV5ofQVaLZNu3L35tnWssR3uqdPavY9Gm5rBTY3BR5u8xcfVQu",
  "key15": "2RAgxn5N5Gz9xrZJJaAUbvLGPTSCmg2wUWi7LP8d5Ghh987ZKkgLSZ4W4JNMQ7dxASmvRwrbj2ghXoFxrxcFawvD",
  "key16": "TnRsbhHs8zWUsRC1vhumfwyAa2wVGF4d3QW71RAsoyuWUpEhmisJ5x2RQNQ74caRaJkQHfZDvRbXiXmM2JauYH3",
  "key17": "58KqAMmgM7U73Y7rbdjMsWxhpny7kBd6D71BEkSwYAsMEEfhBtiw99c7CNqsr4nUKNwDSzovkDnBEfP69d3243sP",
  "key18": "tEmJHzdbwDfEEwsrzGxTdBN5YY8UCkAQa8AxQDitdJT8DFUEheHdqGAesC513XTZvR9LQn6rG2HubfcTMqSprZ3",
  "key19": "3awHshJrz4nk4zxWcYwz5wMPfHdV8RhozXJPvwCLuTzstYweqWWe4N5a85Cz994QxGZDkFtXxvTnJKoezdYzLBuQ",
  "key20": "4UhoueNwGF6NWwfALzDGCiJrNtXpczaU8F5gfjLMaJ5SGEH7rFWzmxfFGbUXyE91gwss8NjhRVGTbZrPqX4gNkN5",
  "key21": "3TME2897QKqMcfmtyocotMS7nSxtQSFevxHX8XPyQpYgxkgcTixVH3VFbfhKqyfBy1x4zxVLm7Rsu1vV46w7zNRo",
  "key22": "4t31YGwoHV6jEdgME5DEwf5MwQL2qWNs2QGN7KZ9dkQswAqmUf55HSdpMCvx3wK2hxrry5sqZmyZ29uYKbQcttDM",
  "key23": "29u5LAAfqrHcWjFST4T5EegKy9mvELFoLoWKtkyGLvbWrTB5DqSzmg51LtbnLJ6Sh6bWQZSP6sx4MtfxML1ya2Z6",
  "key24": "62MEY4Sg5oeUirqSAGXLueXmRmLsJbmH1HNJQe1YcEVGQnu2jmv8pCoVEppCYqSj4unHjg63C1YMCirwQH5tD7hr",
  "key25": "FQsyghpU6om29gaYyKVUCi7PtrUPQDXLmXyj892hFM2y5KXaw2EyHTNSgW59RFeGEfbxJvXqooPNSvMqyR4jJnu",
  "key26": "3UGziDrmTXfiFcmE1RjAcG3V8SdMTGBSc1kdw8Qhvk9mXCcaCTEZM1RnXUwm9c8L57hXtEpxVGidvJRYskKEGtqX",
  "key27": "5nRXTwBheuS5RTdNL6TbTHiA6iLc1WYMKk8KSGVnt7h2sKHHVfF2HcevTe4y7s2Sk4Qe4sNdD8WqvdknVxK2vStt",
  "key28": "5MVeq6gC77eDmYNvrt5MFkT2XjNmGF4LHibWnkWvvwzY79SuDAzCXARTYgGoG67o1Y4KL7opE52pZ7KdybkTixzx",
  "key29": "4CNNsFCkN78onmuQbHHrVG85KKZSLwVDLwYr7YrA38CmoXwMPvBAZYroGwX3D5LLrgVRBXAtH5byXfh1JFe5bDLo"
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
