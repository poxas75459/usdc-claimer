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
    "5MUqSubrYDPwmASxLmor75aWjMHkManZgYJUtuRDGnAhkKkuJe7qzfrRePDNaVE8BQ7duBFinggG8QqJ3GZjreX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HPJnowxKYyLtYNB7rXVYRDzcQyHvvkNBwe4K7xMwopMwnefhhxnNmkzF2QGSMBHz4jBbj29theCniayKnLianS5",
  "key1": "4At7Yp96U9Fe84WP5stp5d3mLyAMZHfKbRWmqMfhbaN6qZSXD8LVFtNPs2GFjRAfgCfYpWXHNKEdLwTv3rQFwHm6",
  "key2": "5dPZJDqtH2DUnkb8xtLyBAWRE1dSuuYq6g7TZK5Pe3BQ84CxYx7to17wnL9RDJz8EbaQGtiba4U5HYKhbgcYzH3c",
  "key3": "3dyrADPCZwe2Wd5hzRchsvy2VxZXB7hhApCtTrXdMdFQFa1dmMUgDxtssm6cjsbB2Enk7ZiDTQQMRBGnYYETY3HP",
  "key4": "3hdyJRJms8yrrPFAHiBKS3H7rN4pLTS7NYbZX7PULTg9EDqyoqSrHCYbAASGTLvWpdJpAJBkwBARCDSLgDq4dWCL",
  "key5": "3ybFp7VCSazdvdBbSyPCgzfWoQaRBRsqEpuYkPdBhxfqvcURMCyMCXsNoYzYUEwvJdyLq18Sd4S6PsdbXcFfd2GG",
  "key6": "4txwWxL5HCQ969T6XUvzFmFwSDUGsMi1jUzVL9Fd3hLxTyK2yNQByXQg1t7P3F31DvuocqXpd5UjdpdjeRW7d1qV",
  "key7": "5rteD3dP8pmdpG91zi4rEx5VFGtPAXQLmK9TgiPrjXEcFBLi2z1dbM2CAuwEsYtnZWGcp9eWfT3An6wuPfbSGznW",
  "key8": "SUEv1WuFPwxuJyqz5sKW3msXPGUizj5kdXFPn7XL7ugMAMe7u7yyVozpjBqTdnZtQ8fNC9ryFdFmMUU7b4MzzBK",
  "key9": "5gcBBmQu4HTT7sB8jPat3WSc1a7nPomCa4q7XDoPRs99iGnnWs92xvdrZ975WwZNSwShw3fwwY1TjZViX5WssFwn",
  "key10": "d3d9zW8zQ92Hkp3eDHktv3VEuS8hcjm4UMVVu51oUmesw9NzPGnZ7d2WQu6xZH8ta5bD2BAyvg8LBCEhGzc4p1f",
  "key11": "2u6BsfngaaxP6A769GSddYpqpj2TDQ3wZSQwAKGqBqEucy8ZSU3wv7o4HWXWWojzR3bpgevg6jiUJbDC7Thvic2q",
  "key12": "3siin6wY6tDyRCGCC4ibmjFADiQUPVyaMRFXcnKWfGVqTZcGicSTthNcqQNpa99gAUrxqdNkVtRgm3WQMM83FBbp",
  "key13": "4DxYadToTNqQkhMkZb5wqt2Huk9QCHUL6LLZ7LXK2rdz8HHeQ9cS1mqphGF4oTsTW5K55Jt8cET6g3e3eHQGsmE7",
  "key14": "2G3BzmnAsUzh1NGMqVa6CvmNMZka9Se7wrJcnqwYV2bY3SbYpDZ44UN5Y55YFVXj6ej5t7aLdm9gkpNXqVFp2Wzt",
  "key15": "2fJTmFxTP9afocC7ZC554FkfRNyS1DKPhV9FYZmc3oisyUPtJFXj5V37DwsB3r9qSKLdRrrYt1FKSrfikc98Q8Nb",
  "key16": "4apzCk3MmPq8VqekHQFiKsBBtwd5DBFTbeyo647kty4shebuc2dDb88RuWRPAB5uVSwEnHJr8Mpx8grj42o2PPC1",
  "key17": "3dbVzvhrXdMCKWMprDdWzxgNCn1j3zXhNVraH5RAtBYLxDgQZJrWxmBdFaMdiTV8U9H6KYLXnGWMwQwUgVfZfFfj",
  "key18": "23Tgq6tCnjZe6igRSRxWVepXma8yWvNZgooPiBM8N3sEKU5jze3737S8p5gFxk9CeqeLNX2HHgzRkiUK7ZREw9Do",
  "key19": "34DJf4uWFGgj7Kpp5LQzWjcR2vV8paH66RpZdLnxHaymnH5n2Pxrz3dfTJoLqYrLz7y3eu6MRBvTNcrxKzaLFCjQ",
  "key20": "4eGHWeuyCqKcPihRT81EGBEwZWeU3nCpF9PRCzwr6JcukjyKzFR3WWki1ddTH5JrkAhL4wtjiuraHZZF45KtR4AM",
  "key21": "2ytMbs9U9SKYnarG8rGbXe1iUVi9iVLHf2oWHqU7CBFtz8bkrsLDW77M6mCrk7VzgrWGdkRVdsSDiR5wy8wfwTYR",
  "key22": "on3uLxs7kcVDZupE9AZuw5hfuKJHUb5o9x6GnoF5LNHofu5B1DoBjB4BQPYAuNEQGFpuRN7FPMY8CvPUAgrjXoR",
  "key23": "2pWSBxzbeCVHBCfQ87FfpkJnR8T2U6y9Rx6wbYwPKZqypWRw2hWpXorzo4qweWcac12W3hHEtk8Vrv6CsSU6jejM",
  "key24": "2i35ZPqdnzg3hrHjtSyiwRCoyc8LavNKH1sQAwXJ5mJ1Nnft7Nv9HdPADiDrKkKN4FaDJBAjLTm2QQnzK8X4Fao1",
  "key25": "3TCbd7Q2P9S2eeNGbBsEeXN3U6tVLYUZnFQL7pLRKHS1FbmpqW87YKBo4YAJXviL2xy6nYLxtzZm186JS2t1xq8r",
  "key26": "2gqenumGP9wywUqi1JGdTzKEJsXaRSAQGtLLgPF5W8QcRJuZML3xnViQyyiAu39mztkQ2nA5ahnVwV2Hzfy94y9R",
  "key27": "4LbbUjy8MCePxjWJdPCogZQKTWcrooNB5pHJZZ8joPu1GQYFU1JJA3ThGFKAJhsYh3SYXTF7v1FYfcnejHa7aLFN",
  "key28": "2EGFdA5d4E6cKAPQhH2HnyBskM9ndu5SQDE1gqnF2rNVaWQSkuGK4hkZQEnpX7MVo1VK1FE9EiM7SgPpBGTfPvgz",
  "key29": "4K5rVoe96KgpzU3XJon5KPttWG9MVvHWCYARvpvp9akzBhmPm2KqwHnB2J1w37jMQvDoZwBQ8iXUjaHai2ZEuJT4",
  "key30": "5UT6VEj7SDZavzbKmvxrRhSrLdAAc4JYHCEuppsAPUwcYVNZvM4rkmJSUAGAc2zcjeNAUEPMSgPwZvacQmewtEnv",
  "key31": "fCq1y9TprnoKecW7nmiNXeEPuemMDTBn2sL7TcgxRhfEYRGxeoJiBz4ZQVmzcPw6mRUW8G3oixwatsgPW81FmuE",
  "key32": "2yZL9HAbTTbjNmvvKNGnGhLdsrFPndDoeTbVx4PPBdX5iK87q2BTW4yteu3wTyKKfMrrVoqh4trvxR3BjXm365Lg",
  "key33": "2RpQFLNnzddVCib1mmnmrnnUVegjDWc2XSGeGUdZqYJ6p1F8qbuFdpYVnVVTvBcZzDBA1iY7LRciJ1mQhXUBYXFi",
  "key34": "2WZAkKtkAbkvg5oMtRAJXT599hKwWACaVSGx7KRP5KBRY8RLvVkWT9npMiJo5MWyBvDojW2LZdP4pi78yzPLu4ni",
  "key35": "2XJcRsnP7nfdHxTPGijf67XhsDU6iUioQ5tAYv721Koz6SZen8rvdhxvbwrPvHR1dneRzx8ZfVJtSyJshkAy6kQL",
  "key36": "22XtNzREr3YYr3hkX3rUb3krvCoBGPQvn8U4sW8WgmymKDNRLpLKiDt8QnKahLcDwVCrnMmUS7VRkBDPmWN8TG2d",
  "key37": "4oqUDW6vgev4eu5CzkpxCKZREZH62YgsfXCPpddh9ryQyVW4BwrM3WErKhxmSY2tRDq3D8UtgXhZB17wLJVKNbMX",
  "key38": "3aZk2oLD2oxionP3VP14xfLYbAUBwTva9A6BQpjW4WgfX8enB4pMmKfT1mEWUPdikAEmBpWE6qvsyZxYdTqs9xKL",
  "key39": "5MrCwin46wpjLbCtgq6gwUb5aWDCo2nS8H3XMgr4YTnRwATk73GjaFksE5fCntJphVwWJ2GyyCu6RVsKRQC1H7LE",
  "key40": "2EJ1E7CAgEvABFyUpTqtTh1ZAgo7YDf73nnoA2RzjSTaM4agPmE4nKTLa5uumY2srvMrd7yto4zVhVkbdVnYFs4T",
  "key41": "41fcbVMVhYkx91tMhLPa4BtKKnJ37tXkkKrLjbcCp25kiBPWcTshizBv6cCzWBapEPLBqbNCtcb4EGSqvaCcYjTf",
  "key42": "5MxBf1CyzMKKX5EHCraBDK4k1dmo7cQ7wQqCLxyZPQzcaQgHL1V2MSXYX8uVoRtQjmg7GpY9c4j5voD4dpgQanrT",
  "key43": "aFff4FQ6eiiYqT6cwsQSnZDk4oDFyQaA5poX5pWL4WeYnJBBtiELrDo85mxKeoh6oszTRAwQ3JjPHH95Ln9dWNd",
  "key44": "4yjv9jQV3qKn1b6d1iEi5umY6nPFy7VVroPUJgFuEbUGjvWf6qbPVtD8H2oE8y1Lwm4UdLYi83RZ2QjEsFGewnug",
  "key45": "ZPykBtFSt3mL12XyBJkn7oRxzYHKLiwaKgVXmSgL7KmxGSrimxWCX2SCvQXiztnbCNKnzXPQDkDZekqWTpHFbqk",
  "key46": "2xFTMzLkmGrXcfEsSGu2gfeDZ2L2wRBQdwPU1hc5YnnGwv82wewns686G61xbS7rbhC3LWfVJQpsYvp4VoTvtUpW"
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
