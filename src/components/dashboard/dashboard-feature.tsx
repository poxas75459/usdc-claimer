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
    "59fDtxiYYmh1YCkSMRRSpYvwdNQkhpS3h4A2BxxpXHJbn8uZR9g79Zc2RCbPfknTgnzto3aMqUa7YywTtVAHKz8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fvb8mvdwAviz7BF2k3ehHUkoDGa7TnR14TgNuPXBLfWK1virFxKot4kmtLx1VDbduV2EVnniuKb2uhWv73rpyGS",
  "key1": "5mbDPCrkJ7ZM4DTL5Gpuf6P2bpdaxJEXGCrxHRxaEJBhXUD5SFHpH9DJtmZdirWtiNQ48Y4V84JQtkTgEp43Zzjz",
  "key2": "6x1S7ZneyZUnxjUyVvDsv8YLxKp3XvRGAkh88xB12UuUYH3fmDWUYUhbodmL3MHJHVqQApezgCNMDta8PzPpP5j",
  "key3": "5rMiW9bsd95xaPkdAKfTgXZwJ1NLHxyamQBQHeNMpc3aSzEbanUf3AuAD8UdA49gbEsqhy3fK93f5XpfaM97NxvB",
  "key4": "2j9dwW7Xg5d4V4MGEZBT5HdizusL8v6HCn4fszHYy825yyfUfQ3KfuKgnwujRRZ6E18PP1kkW7nHrqrKCZKkZhjW",
  "key5": "4Ye5peqRtFYZXGswDo1d5nDkNKTXzDZ6CFZfmr96ZBSryyTX6cbNDKW3mSV55aq5MDBpzr7Fk8FqNmu1STN26Zr6",
  "key6": "tupxbmAwwUTyvkHhggUscfYF51M6BuC3CJ3ZyWZRZEB7jBe4BTBgUQ8Z9Q16mTFteAg3Pmfd3hbW3Egs7EcKbje",
  "key7": "4wgGe8B2Zw4MtFciyvXvfso2QcH4A8Q1iufWNyK4SJHydEYh6GqQ3yivknurz4fucvu93quhqhJEAcVd14tMUAV2",
  "key8": "2NFf9QTXjiwFZ5ktDQBG7sTn7W9Cw6WnvKPrEj8vqqS7uF2k7jjohh9WSdwkmtHLHGCoNYkwsfmJg9VZGA22TRCH",
  "key9": "3YFq1s2uBjuvAkECKemVtCMW3rGh2qSrhWvtc8GatXwNUeFGoQmFqeWaD9HfZfCmig5KdG8YMXqZ9HqtbGNhrBn2",
  "key10": "37JqykpHE6eGPktah3bMkAdFtLexXjVcAu6WG56CXHKuz681xm1bqxFHhEpQcL8WrmWUp8nyq7Pv4gUmWoaB1tuq",
  "key11": "3QQXpdy1iJB2xDd7khmmQYXtTppdEDZr6vpdGUQMwgBLxrL7V7niW8Cak4s8pCUktSK5228nUvJEL5kAeKGpbWyn",
  "key12": "2fwUkCjX6fh1iLTFp8tgeUpQdQT9Byi5xKncXATC5qSvxE6jgqbp1G4hBXv2hbPu5JHCGJ3VMWAkMe27hTJqztgw",
  "key13": "3Nw5NpuYBzxr8AhjwQTZStKcYiSJuNCNAa6Fr2CLgGPVcNofk1eqPtVAKRcQk5mQEmoEo6ENnoe3tn1Qy6GRDqdK",
  "key14": "5epEeAYUYh77ek6cLU7yAbjCuJUb9ZK52sWPUo9koH8zQqErjVKNUcqE291d3SivbWNTEXnzndrKDDtTb9AD2cLs",
  "key15": "2go4r1ZGnz8QunmuXu2TDwXSnnNrqzV2ypfPA4mL83ymEGuSAJmp3jaFAbWX5SmvPeGAoKYU6FzTWaY3R9LPyo87",
  "key16": "2bkhyj8KP1pYtGj5XfdL7nkWwekrSQBapez9m2WwA7YGr7fzJbw2kWc6NAUYseRE6pj5XXwBpZn2wfthw5XQgJKV",
  "key17": "3kbGWkEs2N972nvxqviMmwVo2DdzpK79ArVD61cAp1535hCGM8CxsmwSdeXPjKWX7sUJsCwKbWYYZSK1uy9NtX1Y",
  "key18": "25rSX2arNpLJutW4aTdCanL96pqdfTGHdThauGK72JwNibi4c6YmQza422X3JGxKh22sKAqdJXXsCcAumDUmNVNj",
  "key19": "4E6FrsvCD3uMZp9wJTSvXs44kUgvsLxYPV5SLuxJRJhdXyrisiqeH5r6UYitQ4pz33gCBw7VK2Q6rHY5T5sempLh",
  "key20": "eqddWiifjb3yMDBT7N9LnyUmigzjzL4364Vxbm6RGZPBQngqHpitd3L1T5Q9xHNWMVVJCEr1YV5MMhV4nhspu6T",
  "key21": "DPrSdcW6j8MzZF3oLgpCWTMzAMBJta8BF1zraLDRPUeSMQVUx48FWBiqiM4MHZyCcsm5uVUPhZsMdDfcwcHvsai",
  "key22": "5hhjNi5yNhZbkbygvj8B17Gk66DDjB1PJ7441bbQKMtYNkUxgyBngQSn1krsvzmoQsVDWaLFseTy3AcLrhErXdUY",
  "key23": "45skZZoiNep8DxSpZ5gAwJLmwnvSYXx5U5kaRLZUm6Q2c8beb6iQxk8K7tqwjRafRgJKMwBm33Me8xzmqTs4xbAN",
  "key24": "5hFgp39L3YKBezKBtmpUVU3wUEbc1JBv8mHqaPRZXQ2worhxbWFPxw6y7ShTUsKDG7Dxx6R1PgyT445voV8rkupN",
  "key25": "DFoHBuqwRd1YW4BR2zEhZ8EVoCRM9jDN3JEZotgiy5jKT3N6hfjkzcgdMCAnRouDM8kRx2hgySCk7gT9Y9fBXx1",
  "key26": "3ic5wBrtDyCRTHk7zXuYwqjmazFqkFt7WTHsJY4SHTJyWNNtt1fH9qfs8uRBXf7MXgycxF9tcZX4Sk6Eyeb9PuR3",
  "key27": "3nCR7UGa6ckT7JJWHuQKpnCaeS8FvbYPkvQjpKmJBzHxG1861GeZD2bJcjfLEXkZHWdL8Qx5AwqjrxSwDJpFw3gd",
  "key28": "zGbey2twEqpmLi9EUiPvqVe4VXhPsGNDxg7RvcqZzoWq7zbJPkJon77gSLrpZMSH1E6hmfWb1gQ5DyhtihMqtLS",
  "key29": "63EfMLS7MxE6mfr9HvGpnEV5Vxm1rD44BsttVoETwZ2Xj4E6H5GowsrJEtHxQdENsWk4VvTzU2FtMtoDBPmmsQtb",
  "key30": "y5bAwPmSSsNCqAHPdsC6uxDMNeqPsS7FV6PftpLsxGhPWKoNHCuQj8L6ccxbn483zYE2JC9FLb7Z9qDHXnffAce",
  "key31": "qWrqpDLp4c9FLSZSp8jb15nJoAxfPnzUFRew3KHHDxiX9HrrDdbEwf9QwwVQjggKiMMEevu8cmbycm7omkGkjrd",
  "key32": "5WJKjxBtL7KMXY2M18iaspdXdaG8fe44HDnbXnNDAgqtJuXj6K9KeoTZW6qWbFqhZXtefdkPJfwwx5CR1DWUZeXC",
  "key33": "5j7bVbC8siveP3MHPiq3TxJWe9ToBntDAb1YEEVksJ4AgcAmFd1me5dGPpTWZNLGoQgGpQbiP71jomiuuwiY5CFi",
  "key34": "2sYu3B6qXVa4ehA71FdxwJX8DHx9vYaYDBWVs6HwcrnLQTGHbDKiaFEjTt8vWCeCkxs3jJ1FQehiSCVxKfBoMW6Z",
  "key35": "zGbk5MBrkuPtyQDzuVSnSRyeUz7CvCuCbVjgYTdKyKndAHr3ZJV5ZAWyBD531fgegi1xe8CSZEVMsiEQso6egr9"
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
