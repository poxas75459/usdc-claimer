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
    "2rR2z3grKjGmoQiRHkeZV3RLmGWa5fXJ8NRkujjFUpWELGbrnNTQv5ruvTSFyNdCVxCkBP9dLNAxdZ6bfR3kbMWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hveCoQARyooLiCSLmRGPWLdo7GB8ZpffBzNcS2b35kRjKdU7kMLQYWbeUjGba7BNTKQ9mkNRiuKpcod3HNqZWJH",
  "key1": "5ioJeQ9RoUPwkLDiuNbPSWqaKugQc9jkw1GJuqAfEcMyDHMee6GSx426YHS7bVBpqz7vgDX5oNjqu1poGxjBPxRh",
  "key2": "2jwYErfWcDvZGeATGacp1nw5wDTWek6AxjyURqqtJRYx1TfE7XZnuuZpD999cC9ABhFTBEVYcFdyjngcrPWaFP3F",
  "key3": "RJ1ZSctxWRZ58fYRtYdKmam1Fj8dffBqmip7k7VDQkVxwuJUF1RJZioyXwtK2U1pdipf5TVwJKXeeMqRV68JkLL",
  "key4": "42gb7tCQMaCcTf3m23hC3bVeuDnVbFWBMkiQHHn5iKsMRMzTpGY11tf1Zspa8VuXaW7bpPEZL6meVKUzuZef95Eb",
  "key5": "2v1hfPyHmitXCvzE3DWCo1zwENa5w3pjZUawq7TVym4JfX5hqccewhGttNSJ5m5xmgYGb2svLdUx21AJMi3CW9ir",
  "key6": "5gV1w8FJ8vjoMibBE6S1shkBFpZe7u7kmfCrmqjWnTi6xS1293Zs6za4EB8suJMjBXFvHn3EvDGcYgtdRFxvDNNF",
  "key7": "xAByUqjdtoCXiBEbXS1CpzvR2QAgUCn9Y6AGGAyJjFTBxCzccpCNJvboXY5RqozPhoVYLQ3jGofhWdLX4Uo4h8T",
  "key8": "3qQe8FgNeRpMW81tv9WNfk66BNrvZEak2JNG4RVtRmak1aQdyAr4fHvtpDZer1mZZ9iQ2xbNUzedQhHYaGqm9DqR",
  "key9": "4E4Qjg998PySpM8PEhsdYCU8wrcyNoXWxRNegYuVEbV5KwBFkUvQZnna8e4HJmiPZSENjqsgaop9K3DmjR2j9cFt",
  "key10": "2oNxinEs2hbX4hEVdEMNmKz44iqNjkGzLc6WccQ86VnLRn3yujjqTHAc1p8R7F2zehBaCEgdnTv9TM7dTZcekxaP",
  "key11": "5qY5WuadTmZmxoiT58b1qjzwiQFTo9hxbCPRU6cBdQH3ZhbT8SqjPawKdQZV72zYRU9V5nJ47fzmed5tjuC6KHsH",
  "key12": "3LTVbuaUeQMkmCPGN6NJaVEGn3EcrCQKLVU7xRw37ZZuUtWDDeAdnC7knggVLovHkZYMxuH2GLDGQoFy1pDJZ8pr",
  "key13": "5ddnwC2MWFwKDnVFqHgrgPXMXe95YC3LNJNpUEN2Beco3nAiHZbGeTjhPhDF7Pbg7n9Dwtj8MKwMSDLKVH9Sc574",
  "key14": "5YEvbTovCE7tUpFkPCt2TamHzx5gHMzSpu1cPQKpYBvx35PM3EYyCHLzDhJgBS4QL8JPHp4Jx7cSSihBSfozBK6S",
  "key15": "4cfje5AKwiU3n5mdmsTN5crzJHMnnwh24sqMLCFR46txBeHXqM98QRjQGBQB6VQAKTAfwVvfHiCXAwFVt28HALgP",
  "key16": "2g1J2UY7UgAkbNz22RgRdSCDoEXkrssW9QD5aT5cYDHQZd7UDPcL5FHvheqhyNLbWaHEbDKExJLLg9LvRmUD7d5r",
  "key17": "Z6jVrPR6vEBrLagmmHh5L19B731s4ASaBWuSPYPgjn8QXWZNxaaXUnuHSmMqyiXu4Aqvn5Ray5KxoWj9CFNjjqY",
  "key18": "5MAxD7HGu1EqWdiWHMHVhobE8bi7MTa5P2mmP8PEgxxsLQ5i6KREHswAcvUfy899QKMJtKBq2dunTjVe9QrfTXW9",
  "key19": "HerUqnRY4jdcT4B7t55BvXhiNtzdHNZgSzQ6ytJL8TtgbQQLXrJ9dVCF7Z1axiGKkW6QJoRKqRHPSBL3rkCW9sV",
  "key20": "2acq3Kr9KeyXxmC1brscQvqEkmr7irqZv4FVKXQcxyf5GX27i8KTG4rMowsCsBr87r5FFezTfw8x6WEAKJTkPAzk",
  "key21": "UatxReRnaPDwXZxpUpzt1gHJqqUJRY8jjfD8Fkyv1VVcYMueb8qfAwt8bmTMfLJ8cAYGa2qQYjk9Z9P3CxNUYEe",
  "key22": "5GKrQPwewGU2VNMXUEoqMsS5MiYqcNs6bYfPMbPNiVZB37YxW1WK6jCsTKSo6ZQAXDHLHkwSgPKW7krnXNFaEAW2",
  "key23": "3t1RAsuY5b6WPfPWrAhV1Ht26bjxoJdmgiiZ2hrRqnmSoWhPiYCeHipGC9ddojx7LNAkCaYNz8xSr1VzpcbCGjv3",
  "key24": "uCoz7i9ozfCBEAqdmVmfa1a1Z7hpMfPErX7st5PLg8sYFu6ajPDMCCxoMFxbnZwsdxCQbiShF3Ai5Q6jbHFbr8r",
  "key25": "34s2NkjMaiDuhJRbzXuPvC3RNYnrLvipcvs4tNQxRrYq99xvNnodjZyxjbHRT2wCkNF1rRHpqqc4dWRWvjHA5bR9",
  "key26": "5bfzc7TPth8hJ7i9sWds4Ev3fLDhkp6YQTVP7sNSA2EjiypSd5WnXHTrVWSwn14VXGQ5tQqXxXyp7QHZay4mxSFr",
  "key27": "45c6RnzoMP8uV4o2Zz6NB3WLkmAdWgwrZ3hB3yxAj5jUSvgyadZWbWmQyAaJBpF62KVZ2sJSzRYG6y6GE7na589q",
  "key28": "2PTgyXbhutH41qeSdfDtxsXdYDMrectHTevNRfraNMXXHH8kQ82Yx1F3TnvajsHMfkjAhmwKQCTZ5qpJxBLYKYbC",
  "key29": "42rYDratg9SU9pNCFWmLbnRkR4chgBAuu1Sh8dgWdq6XfVq71AtREV1mnRQNqoXn7Q5USGXbuzH7SkLSpb9oQEN1",
  "key30": "zRzQqZpaSGWsk4WztUgfGsuchDpW6eoJACfzivxiAZrsix3QARHGdTcjYXQzE613drBLaz8WJFbFjVZyDTWcs6d",
  "key31": "5NapQaFCy9A2gGYSN9EXE3px3dE8UoXwYeC8aui4XEGiTojMXWXckNRzdFuuR3M6hUTGAhu8w9o8az44rEYd8EDt",
  "key32": "5JQu87sQCiSKoixq9ZVsr3cUSLRSbYcuZXf24rhdXxUmXuPCond5yTVwHX11FZmankFWG4xuThZ2ajhYmiQtYrUn",
  "key33": "5Kv7QqNw5nJmyyz75yCaxzMfDXCzt8b564NtFSYkdPLUDYYEiwWdkJ54qKdWQRiZMjMqCVsEaKTwvPejKc3GRuB2",
  "key34": "2LDbzt3fVTbNtRpKjeEXhcLNbz7vjtS6ndmJkWTdM3v6Nw72L5SdsDtwkS7bhfiusLeBHH8aR25Kr6wXNZRsiCcN",
  "key35": "4GCU3CZoRtptQEnis6uiXwjJ7tE68WpAatpBEYQYk5CFTcu5TGd37fnXuLNaJoLaMzEzykMgucWhgm16NjqVBwSX",
  "key36": "5nAZ7jjs98ViwESpn2rxtd6pMFcg5UjUvrrWKp4TbvpgzPeavpUUCDuKEwjj6LWRcQMGzDgocjppubMLJMeqEKJr",
  "key37": "kiGsGESPnTbEuX6DK3x3F9wptamdTr5LHjnqrQGjmJamNv8E8iG5HemRAue7nVWQjEN4fLNGmyUHDNiLAgyqtnf",
  "key38": "GenbVwx76we1o41L1R4uGTX8T2mYNrAFBb61CufYbN1UELJV1a4q3BRZkZZ1Jw5KZTtLKHqL9DLtTHDntTkcz93",
  "key39": "HqswyBZoL8FCfBtH9oseeVYfEGafKojcbywmB8mMsBySR9sB9x5U4oK46P4sVKhoi5Cx5cu2wrhQKk1UonRKhwv",
  "key40": "45UvboLrMmy8viWaXsgNBWqV2Mqga5c1HniActurvHA1nxNsCGaTGdYuDHrQEohkybmw31pANJpsFo7o9Z3jZ3az",
  "key41": "PYTTaCtT1t7JCHx3n2ZqaoSRpb3xC3tkLRh216bXRsfWPvXVZB3GJQ2x5m2RDEFbXyH2r16G2ZJTG9MM9yfHKbY"
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
