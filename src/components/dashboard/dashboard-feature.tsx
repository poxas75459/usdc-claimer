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
    "2n2vSZaobtcQ5mBmQrtDN3jQrzHASu4upiune6QNNUVKjpHt8Ur7Joj4N8tt1WrdRQ4hPB6zYtct56dKkx9NcVUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZTWRfUrcAUQHy1rCF2cHEgETiu8zUc2PbZpBwdfMNduKbEoYFLT3SxVya3H5dPwh9vgtd9CP6HymBeABo5HF8Pw",
  "key1": "5VBT6CAhMwPUUBWLR9yQvRCNXVdEuNJjU84B6KSr8jkWE6NEQXJynjTepSTD4sL7taNDge4hDppZF63UNNwao4HZ",
  "key2": "3KGHTtJAQwV3ZNwgWpUHSzkga5quGqFivrY7GEH71SpV6YcTXuFANPw96KRCTNPRxusB3GCgd1akqRfHCgrHaeLb",
  "key3": "LAfVgeyt2nq9KE8K2SLV6LKtmByGh48vX4dNVLunndbak9aMSCvNjv33Qe6gG2FcuepcbafxLshdp6JJgBJ89UD",
  "key4": "3WRtwkw23d36nrSER3etpYQZgvAGVmrajJYDhnCchr2mJsaMKkkTAAiigaQs4V4q8ehru8ZD7rUt9RkfmDFoabZH",
  "key5": "6aEYrLcWs8Rg1QLBZTb2rtRHBNhcWZsnQAWHmQTcETg9SNprzM3mzJ4isGQgNvsaNChsW8mQW52QAQEpU8rSsjn",
  "key6": "3Gp39XQ77VG618C3BErYuDyD382G694ELseo4qXXkQocNaUx7d4CLKyWMAJttnCcu9c1u1KLvJaBuzCyCPk7sbRn",
  "key7": "5KdKfu32o2XZ39dEF1H4QZwT4srn28QzMvMCaZNjuLnqrSoVoAVhUY9ywF6vK8fGzrE6Ft1qQzorTVExBqCV5f3d",
  "key8": "44UCs3MRxtWnarFc2c8XBKNSGVNmexrPBeCjYueAv2ddXBMzGbhkCwk4EffK1LZxbYdRfwa5rpQ1mSykrBVcfaES",
  "key9": "5JXjH7eTbSavKc2zGHe6j8TBmKfpQzzF1FFZFE22yzyXzqFV1wJQcfJxuGKPbhBZwPYscn29WGMCAU9PfXgLLj53",
  "key10": "5pfB6Gcz6fEihbrgGJw6vmzMQwFG6Cd38ekfXRMtHcam1kqgcRsNq8vyh7PBNSo2jJ5jutqGZRp5qm5iro27gbPw",
  "key11": "33M6om9fED6rfEKJXQuJbyWPyNDctKEboiCP5BPFVzZuVRNj8DdA874jarvuLob5EsStusyviKBaNo9Gp8SYS55w",
  "key12": "4wbhhdne4vfzJgrNF7uFf5hNNnY4SP1tbXuRNcjPX8kddeuTYvSgxtSEGStGxXa2MftJMKDY25UGYnUGJWqhsb1E",
  "key13": "3Wm86sqTVTPqwJQ8CfXv8KqNk7FothepjwnJuwQu8d162KMqMPoFdEUSViXS4iB5szP8s1eUdUDJThnJExwouTzW",
  "key14": "3G7fBpcDoBJwrm44a2nZYzfEMBW2zhvTkSDyHxvBrjshWJ5hoLwYAGh1SNZM92jCYeYyKrkLBBdBxngU2WafNBVW",
  "key15": "63L3cnuEzo13XJ5L1GBb2h5cgcNLpASoAg2mMqV5UKDgegf7Bxww5LUGYeVvozbA4k7jYSNCmMuEkCah9pJzM75v",
  "key16": "66YZH33NmESaP9S25MyXAVsycf6gYtLcGcVzSjj6xk7bEVGsNqqaKTy4ziCXAwYNFSoBBFNWxgW7KM2kxKuW23bm",
  "key17": "4w7LoLwpoX5iunKJ4qdy2bRTARoDcp1RtWuuyDEtkLqt1bwHCmMR96CAN9fFSbLr1wZLewp761dzcCHxddjHonJh",
  "key18": "2cfREbjh5F9oyLLmqVuFCG37R3sMJ82bZjFSy6XwU3JXqFAmeiBbmejpfcy7MS85mJa7WQk2JLtWhXGEMVeygGgo",
  "key19": "2v7iv8DRjb17TF1ZHx3VChBtuBzpDoM33khALcmSQWaDrRHe26c5J594nTmvmKwQmSE1QCHFFoCApZPDji86CuTo",
  "key20": "2r6uvxhH68YbvguEY73WzzLhLx8QmTbGJgt34ugL62MXzCmGjyW55BRimP57Y8YrnWBynDzrAJCY2RCCrUc4XXAn",
  "key21": "5qx8zdFvpTqwoTtnrfa94GAvFYiieydrNJeyb171zUQ6GfYLoyeQy6aCMtnJZ3NkNqkS6DVvDAezpGxLx6U6pJMt",
  "key22": "4A8x3MS1S4ghGoCU38oMJRXZZNDT4WWTU8og9bFFELDBmmarhCA7T4BCXx8VvuKxLwUjn1x1oAhiufPfHFCKjJ2s",
  "key23": "63duF4XFZY4CrV3RGNWitB9oqT1T1zGF4pCFP6moz1sNkaVoEEmL39sRsYJDopKuMLAJNU6P78ycGut3bk4mPNQx",
  "key24": "2WdeDcsfF2c2uYFxpfGeSnevdWfa2fYDCxCg2w7rRzNjrWTm6hTVdbv3BX9dezLMoWiKAuXrP3xaLwNZtMPqR1sR",
  "key25": "4Ss74bEmzdqzmtPvd4PhSP6FUx4foqQubdmPFNyxGfVKb1RH2LkK984VCsfvc4h4Fo9W7PtUtAyXNx6PfjT7Btr9",
  "key26": "4RcS6ThKrcQy7em5DoGaaaTkq2MXMmQWriLmbPrfuWUYCNQ5KZCtYii667ooUMq4M9yZfnKCDZeQ3DCeCyni8MuX",
  "key27": "gL4ksA6tsi4akFrHA7PUgBBuScFKiQes5fHqwi7brk8AT4VdoPrYQ84LK1Z2GWuAxs7PZtTyoztTvbq3hj1M4uz",
  "key28": "3oWJjsqoXFY1KJp26fFNjDK8vpUd4K9nEeFsNeQR3xSGeYvFB4nA4pT5GAKTz2WmHuqe1n6cqz5c87xiTCYamNbD",
  "key29": "Rs1PkfYP9cyRQMVUZQzDAmQDqVUKe5PLVjEj8cvY7pzpouvyz1cpe3X8phszHcSNqTe8ev8AKZJvzMzLZJKHX2z"
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
