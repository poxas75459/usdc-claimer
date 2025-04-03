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
    "2c94w4Gp4FhAnwKFkGhj26DnfXaUrAM1ft68kaaiCtkc5aM46Qp6BgnJhUB6YnqLiVufxCwGCMjYWrbMn1LAbf9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "obTZdexyLCD7QZwRZXL28KNKCsD3pSAsg7es6UA6mMN5EBhhXvE6MDxgrFDeKcvfZ34xS7NKR1J1eBeTrsAZ4YU",
  "key1": "5aNniWJ3gA4L9wzVyegnEwh63YfDSr5FLydkmpXuJ6vnTN5GLTkFC37kiXqMAkCxCQdLRGEf95qsVHErKRWVH7JT",
  "key2": "4HLu1omsDbnaKpRnsLGm2KirpqVXw5Hxq7CHGarupjvneV3ABhH154nTecVFa5w2fSEiH4RaqdShj7GK3iKhD1fk",
  "key3": "5w5sU86W3t9V3mw5eyBFnsFGnopyBKXpxfMPbMDnDJLs8LvGMhAfMoaEoKCBXwsHL5Sj5jQfLdEyV9W6xDNu1Y2s",
  "key4": "5UcvBufagQjXDerf1mgjbqoUastc3cUudsMzKB7jyksseY9Q64YPvYBkMRTZkMby95xwvrKF2ijTsmeqgcynZLQL",
  "key5": "t6izjS9Eugrh3dc2e5axzA7VHMXEYg556HeBLSnYkQq3CuxPy3EiYwzKsy7XcS63DLeU4J1iNDq5BQALBe7AUkr",
  "key6": "3SjJfm76eFJuqdhNKbRpCnAij9zGQL3QtyXRGeLTLNWCPSnsacZh81RELMhg6X5eH15wcvDpxcLCwGKnvyhSfi5J",
  "key7": "5puMtz7AoBwWAymXBmmGwBxqfrsygWuftfuBnbPj2J4L6mRQo6FkFtRhXLCphKCgYDH8dnxGrRziErac2rgRsbYs",
  "key8": "5P4wtPpi45HTh19Zr6JgXPiFmiAab5ESKEwEBAWtLvCFyx6KhyzMD8GzSBeTeeX5bwAsBaS8HNjwUgRHovxoZyQp",
  "key9": "4u6pCG1qqDw5PyuBEGjshLZou7Tj7msgPHWjxtHQSENeegbpqB5Wsmcewffza837F1ryqhtKG5HRiRA4dAuf8mG",
  "key10": "4pFd6cSzi5Pb1Zex52tZNpY3P7YQtMyEakoyoVEvmdRRiaS4jEsPeApWB5w1a3mSrJp3eC5ScbJAfCpiYQKycmex",
  "key11": "2rTBW2KitiNRa8uQU5emMfoTQD7x1c9PDV8FFZdpVpT7vHc1Nb54YH7bC3CRNff9empZ6eSv38NHUjDdgkYEfWBo",
  "key12": "5Kq2Y6BzS87aLDi7eZaGwT5uvjn2U2vbUbJ5GYsC9Zsdh8MWQbFc5Jo6Yw9c8GNpTGiLrVeP9PuiTZCbxbxjLS9a",
  "key13": "3uCrnz2hAw9fDVRZ54vxB2HXhVAqZHnzVzYXhDRrdjv5nUqyhjSd1PeRBx4vuJPWimP1H4SEhLv3rTsUpEqUJVkS",
  "key14": "tWisT1kndG5tWJ9mx4BPWNYpJrjUxknNR8mav3f2V6Qa2Lmjy4Y9xf3aSGxyExALPUgLJfEptvj7iaoTPnPEEhT",
  "key15": "5sFxPoYJiqXH8xxdA3faooePTARZpnJEyNuwnHYnTDr7yMpiUWbygxTVHFMc3BDLfurB7YQyq4dnw3ZLMSaEXLnh",
  "key16": "646m2Y4Kc34TabCYaAYLkjMdzHajyipcu4XY7KEw6EF5N3xmPAEUsbM3wkuPDtMXNRdeQhPYADrp1E6UGfynDWuW",
  "key17": "4XgY44Wz6xEgXbF6hS4nWTKUpMuGY3rTg7n1dsAwnYUQWTqycW7nvN7hFGGMNA7iLNUfjgobH777Gu2wR2VLMpCz",
  "key18": "2fLnGFTvtaHAKxd8ys1Kb61tHTYmqwb6gmrRkwdRiDzjVJx2B9mTpNPg5DAopLfWQLxrban5hFLk2n22RWpqfNbH",
  "key19": "5W2tc2Xka6meaEuR6bAUWHNUVNjtGCjzq7knfLe7gjuVssYAYsj3FtBWdHSH4GkeXhp87DgkggLPJTA2iVVDC7fb",
  "key20": "3gsxRLVVnLpTgZYLriSb3vnnYKb2pZ3swz6BWL8JhUCJcxF5ShgkwdQQBPTHkNFYVA344wV99iQdytYWzbzxw2Ww",
  "key21": "o7tKV2HLYW6EmKF5eo1QVjDVspSR7hgXio7MxZ37wD7o6ZyW6cTjrU5upKZcWfi4aHYRvBZhXFYu2RFoxcrk2CV",
  "key22": "5mQtSChFS9FBe64SdNdpH1uiJ3yXX95PW51gqR1UsjbE64wS1ZCLXY3rF957xJqsP6XNE4stWLDY8z1cwKy7RWUp",
  "key23": "KejadRqrZ6Wv6dgSxTyx48qhDM4i8ztz4vcxhjeRRQDpgkbXEX3yYnpaqPDdsC1tKEBK6A2uTTGLeDsrjkfAQ7s",
  "key24": "3KBLdYexbsG9JGFRLa6V1wnmHTQP4K6zL3Nm65ohpM6iq6kEXVFD37SSXtwkuYeMqF53vEucMTJ9XShxTJFWbxwJ",
  "key25": "3pamJvZJTqdhZwPKswr55Cd8SUUQKg1bGFzpgvBkXYqqgK2tYppoFcU9u9mSuoq9EeKQPJrJo9WGTjgxqMNoL7XB",
  "key26": "4r5DHVUdqkp1fVfmnpSEB1XV9peLuTmScqiihm8Lb7HYqGrrZ5bLK9dEyUnXUdZeZnRd9EEQdfzyG4zUe8JdPCKm",
  "key27": "3cCS6UnjN9bYdTHYknXLxo8mtfdoYQAZUZuiBTh4j6wscyisyA54w5msU8xUfZUKicnPqep5TyEwUA4RG8ywqqfU",
  "key28": "39Vp6friBDj6U88xvPc7N7YXzSczxSHd6bkQfapsRaoqqjDH8AAJSBfF2k733TDgsmTKhVFMEg27f62nJjudSGzj",
  "key29": "LsURkX27KCTWRp2Yf7QL9twXryrN4AvV527iuLZrpYEWuhodAbnDLzXsPqc1KkViShpPjg9cn2vJJgMrcaZZ72r",
  "key30": "3H3kFXZ3Kpn6pfcUZfcguipue3uXEpWHGSSJFxfQQE6ovEmN3PG1kfR3DEwpDb5YGrA6FqBuQRdsfRAbt4u9jMMe",
  "key31": "4Dk2kEXoCiic4ukkpa5dMD57t4HJGNwpzQR7nuE82e6BdyBNaE8GyV9nmxiGtpP94YyD6V1ghjyX9ggcueqx13Wa",
  "key32": "4yuy6RivBhnjBFs379iKfSAnxLGJVsBfgJnLKGnrSv1AzWnUv4oMdc6m3iX97irBgfC2TbeEyfDRKneYVAsaoqkJ",
  "key33": "k9o6fEAC3x7VHTmrz7sn7XgtFnyxtj4g4E3xvVBAAjavuZkDdaZ78EWHQ7jGhAVBACupgyXB3TDU9yHNRFs98kS",
  "key34": "2kUrbtTKhrpZP3HowSvCuRWQ8PAKWUmu7uUCeeAhDYSc5Pva6oRMbPDfgp7uKGGVQtMjcBvbyShfNFmVnfeLqYEs",
  "key35": "3fXpXFGMdwCKfhxXutsMGMN7XWpsCEosSzsx3KBjjDtAUTews5nnpWhnHRThRG93DuvVbfuHWUMLLW1Vz8txzjt1",
  "key36": "2jN8NBeGtjktu33VocCx7x3bzm6BsLQCDtXZsBG9z6i8nDDWg35VaPRsMvJHJEw33BpUfCjDDTdUaBsMMPeLNUxB"
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
