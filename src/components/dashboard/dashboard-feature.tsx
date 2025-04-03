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
    "4XFLeyQHHKGbuM1HbTHoomm3eKSVQcirDUT4Ptp3ucSrvGSdSEbjw6RBtEELYi1GraJp3txcpF8WLj7LHCqARG3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9LwNu8eaZ4ksThEmeUrhgKKHFTbCkSQ9qR7ALoxYAUWhKFtP9tP6s47W7cvkqBsmd457ERCyjphHWrnJ8Y6Nto",
  "key1": "3NDkVn6LBGGR8aNurTtZhdg7HsvJFG65NhdiKFwHBGmdhc2VANFWNAMRc6hm6XANoeumgEWSKGRpeaddoWiMQyjj",
  "key2": "5Rq4YwmwpBYQ1z9VP8vcEyPGrp74MrsKNnxLSMyzqbJd5YRM8tDXpuQBS246CivS9SipvYCN1iKbfLi7VS2sH8pq",
  "key3": "48RgqrVH4Zskiv8q2BcqNY7jwJgxBcfmhJirSJKYrftf6YDr9UHrppcPov9ErBdY7qgLoWqe3xmBmEyXbp3rrJsG",
  "key4": "5CtmcSiRhC2Drw6NUxANs5N4CzimMGZL5NVNSYtpuQmjTpFuQpPATq5hREE1ApiXq5vD1zJdzBkegMkQWfNgf35X",
  "key5": "4sW7zFNn82dmHuywTKERxh1Vsarhxni1DGyoAQrHwbGb7ebrF66TR6yjh8RCsKKV1NUpHAZgy2mqdRzCBwMmwrZc",
  "key6": "2wxrwXxqdtTuXQv95Z7y5NCFVEK9HBoLkKCG3z3YGzty849BCYjLhyGRTpLqQG8GG4xq7av3Ym2ALmXPLibbp3fL",
  "key7": "Smk8LRy1SKrxzKLLKYcsa2zYA3hhaTWsCqMSa3bmRFj6JzUUg1EJtBYhZaYdAacJ8QYUjbvM5DXuBzntDDtyguf",
  "key8": "2r7kTpbq4Mv6JGn8gW7tknq1BUFJggbQiESSbhyU16Kf8YeCS7bAF6FQ3QwPwvNF7ki4Ht8C3RU4w7JqapM1JrKQ",
  "key9": "knntD7PZPYYjpu2MAxtLC2CjYCGsWb9RU4Zjng2iY8AD1QuNqSdouFas6EEftUNrz4hZxwErBQYPje1QYs5W1Hd",
  "key10": "613kxEcfc9RNtDuqKA55ZiCxWceCozfFUzzC7v5Q5iX5zbjwduxGtEtBHgtvRLVPyP2rdzVz26H3MSG7BKXqBH8w",
  "key11": "4UrfR8Y7vhWqij9EiGpuzuDYDrFDroSCW9ZorpjMcmbtoK6tLEdZx8Ya6MrCz1UmnFVSgM3YCVYo6ruSu8M1uJkw",
  "key12": "4yQXWSoB5SwMH6CRevQ8VgdXimaAp6pc6oAZmimQL2hFaJSsDS5MCt6i3JMfnLtc1R6hCXZ3J3aLaHF8msumjhWV",
  "key13": "rPB2yEP5pLCHP67XbRjMmrk6a9r3nHUCUdWVCJrmAQqYoJEArBwyZzJQdtQ7LDGsAVPBb2RzMrTGvHFJzBdj7CE",
  "key14": "4PLg89BMLqy1ypjk3xv62UyJpcDQWpsaCEiLXx5DHTzXGtkihYKMViBQcicXxUSVFXBFHSpqwL7samjZtqWWjHmF",
  "key15": "DiU1itun2Vd2EKDkC7AE8QYtG3cfPFn1ZxVHJzpCMEjqFT94NWzuFeD4rr7nawzSxCyKEiKjsPHjYBA4LFoPY6E",
  "key16": "4f9zBcf165BmL1WKkQy9D8Lu5XBCdCQUytbn5T72MnFtBfti4Kb35PK81W2iH2GJDPsL8EvkvGG6piULudTMoryA",
  "key17": "4z3qYymba8cccUBLTxZD85TqiKDYVj7AYU1ZjNa2XQAQA8DQ2XbNP4d57gKy8oiEHpoqng1YZobypzqajfAuSbaX",
  "key18": "3NiYmQoKdE1xC5ArAtsBt4s89wjHUz6inZY5skSfJqnyoo2wBuyutuJSnNFxaWAyVxKTqxeTFfqivkYWwjsj7QLh",
  "key19": "2uu5mzu61WKjCAQwbghXM9RgyxzL88Mumz9sGdvr8oNXgLcRB9Pv4QHwT886ku2bmWi2ci531es1hdywf4TxtcbE",
  "key20": "3spvrH6FbzdT69jJDYzjaySmALWTP22Qp8oHXCDuhQrbuYPFw48MDGeTubiGP1rB3h7gidJ7jjLz3nHzLcd64jjr",
  "key21": "5TEMdWC2NxAYbjQoLhQ91u7pq2NUBUJ6xiYQMSxXmrujhhQYQd5q5dz1nXTzaJAn8XWgc7KKrvv2xRW7HRnMAtei",
  "key22": "5uKq4CL5UEZpgN8BQN9vSSmEEemhhYsKPahZLoEZ85AYRhMAgyAWFyZzqpTJZBKL165n7EUrBrTZVRxiaxMPsbD",
  "key23": "5rnTLfMAfpSUFdesVTWTeCiPBY89z4Q4AV2wKXmSXe3mDjP1MZTJtD36pEh5NMF822Xw4B5jAAs369hnfV8kUUTQ",
  "key24": "41nCCexM8kVqJSDDCaAAMA3B1ccSqWD3MtP46MgLkLPRwYR37YmfR8ngN6d2LVKYvr1uvx8P1WJuy2iWmn8UtVzA",
  "key25": "2YAoVh83GrRpdwWz3vhV1nDRnDAFd8MZSHeDNyAYuYZw56rBPa5npsw1HsrNW4ktE3nfExSvnKd6ADimM2ZgKo3y",
  "key26": "JNnpRbwmBwQezqT3MANnXwz2mmWhKtkqQ4Dy3LJSxi8W5p5RJM1t33ZhSrUbs2wBMjGZ1JDbnYFj9LSqKtBBAyw",
  "key27": "5vyqSDcVjGAHDYvQ3s2inxty6eALtxqgWj2k3mbha7GCkWRHYcfDpyKF9M7H1tTvkLU2MhdzSey62278tuShbgta",
  "key28": "5UQEBi4F5SkxbXc8PyvDSvYCFZcSAqr3DBEU2eLbHfNuN3gtxqrrJcPLhKodL3Ds8CRFkxwJ9pYPJwDfYcoDZVCs",
  "key29": "3AxQQfn8aTvEi79PgrrrEpXjt9iaGvabRceDi4dePzDz56kE2VMEcGLHdedpvxdBPkk8LrNF724JneThnAnP5b75",
  "key30": "4iTCG63L3cJDbbDk6zLGsY9BPXFN8bvs9snLN8qQ6pF7chtXTrMEoGd7RNwB79cNJ2pSxHFjG9aQ5JyYKtFC1hdZ"
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
