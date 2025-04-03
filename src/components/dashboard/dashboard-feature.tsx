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
    "5ohZ1AZmtvKRquqt4xRi3S5GbkxTWviBng35tQcRqPSVVhBb3DtodvhFaTiFTnK92qpYsdUHQ94E3rHE1mpcGdk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xet391hqLTivzvU6YqTAcrzwtubobxgNKoPcoEn4XopxVP9mKZvLedSamPpQVDT2jNn3a9yzT8F4gmsBk88GG2K",
  "key1": "Xg3MMAMvLieeSNDxJZQ56xxJ4x1zY7UEDfn3RXtXoDw6Y1AtEYAZAHsnkM1HqjjcMkvwFXh94pSkvLZT8v8PvjR",
  "key2": "56T3RcTR3ESVeNZ6pFpmjKi5heu3AM1aboKM9YesGdehrRXK4eqUSeFYjVGCUbNPAVtzLHmLbqCde3nvbQkGp6nk",
  "key3": "3V1tTR8nEuHrNj385G8kzwRceibsGRFXAVJoCUA6dHVPrcVm8P4V4q2p2gmAqb25xvySFoR58uNTKap1tCrakGnC",
  "key4": "67aSmiMpusv3uywGsNjMCWL4MGyfdXDCWkzkNdXnHSqiP7eqTveCDLA6JMX4RGPsY5ohXXVVtLJ24RVjucaS382U",
  "key5": "3jycKaq8HNH6mAKdAFr8jVaPxPudNK4og7b6ZdfVrv1DyX9sdkmYCp7n6GdDHYD1E42ckb6hRmji4nqUk7cLbauk",
  "key6": "25durxA1sYj57qVVzx5ofRaYSf822wDLaYie2MfjH9eUpBvJ2FseyRHWb5QQmuCYg2XX6kfusc1VbAzCiGJikM4e",
  "key7": "3GVgHViE9vFjLrs48ETAPhxjmKriJkgENBL7h5hkdZJAh8xDejDT1PzFXYCCK85ww3hP1Wf6kNdSPYMgHXAqJTHu",
  "key8": "29yfd3RL354QpB9RA4bCKaehY6FdBLTUcjTE4FTk4um5XiG7pibHVhWciUu68ZbCsd5Z9WayaWprQofdA2fKveyB",
  "key9": "41J5QCStKjtJm2mjVAUiHbHsDVWxmWe1JY9Pcj48XscDf3SEyXnb98YQEB52pqGTF6H7g4rKboroZ3JW74ZC5oRP",
  "key10": "3TzdcizU14cKWGVy4YKfVrMe1h8DWYq5gDwuB89UwRY7yu7aA7chVF27auesj2oxPx54U4DVbNkVbpD53Hbb1SSB",
  "key11": "4ciufeMPcjfwdRk3ZkZZAm6p8g4XTYF9y4XSi5jg2Rc1A49iTafDAcxh2JxqWLfkYz2BCoa1mrT2WaPtHn7UeZSS",
  "key12": "4G7vEy2XszY1ekGod2gszmakLqS9LnaBLqzFUfTi2oi2iBi1bWvYSp6S8vWQfqznhp1GPCxdswsyaB9eqqRpHuyP",
  "key13": "3ubTqCMbzVGYbhx4HHVK4JtuZEAWXkefiG2Vbw5KAC4drYQWxDeMQXNELKRZ1YmEfkKV3tBsvmHQu9eUEHuFV7H",
  "key14": "X748WLpFjRx8CQ29qEA9XUsUkneNc1wpRVsjBHrs7RCgerfsNVcnmnbb2nYDm9PFcTVQ7esJN5VKMJfoRVt3aRp",
  "key15": "5Ff2Haj3dVQBBQd6Q6zzphhjUSei1BPsnBAckbamatVcFueEtD4FoP7JnN6iq9FxEP49KDTm4CspufQeLN4yx9v2",
  "key16": "3fNJSXTc8wApLX4u2X2mGtoGoDhjzecCoMZpyirEmPmKtJNXEj4PJi6B5yPFhLhVW5iuqASBkehEW7q4rkE47wWb",
  "key17": "4pEpXv8ayghEbEcdbL63DcphkP9BXtgr9CQSCkneuuP7rPAuA2ijQ2NbGCNKESW6CWW6q25MUogXt1ZfRnTRH9gg",
  "key18": "gGdVx1i6nNaTpCL8rMbuwL9xUBY68coVF3qM9H93Wsnqr6hr8Fk6TeHsz2Tt4owwWWPfXp527HwBRrZnxZC9MAM",
  "key19": "2m58kuzarFJ4xv762nEXuNtNFJmhLbiwb6GzM4YxwDUo62Nwb2wm3WqkeuiYQbnDKRvgjjaTS7n8VjmaiT7rZkS1",
  "key20": "4t3dQkTXRSYu5p39qVMBaw9ThSZJnoTm1WsiiwcgGK2HcZnqaVWQricJH5931jmSS1GmCZt4P5VTtTghNtBS2DrK",
  "key21": "3zDXEa4vA7gub7Mq6L5Kv8cm2TJLSuLMdEcLfgh3ySTB7xnUw3q3uNCNsdASvgr948eCdCWNHzFxaK3pB7W5EVa8",
  "key22": "4dUdiuiaCEaZMf16re153W7G8anLm9wTQAuY9YgswnXv62zriFEiVzxhyW41DW7HLTkSs13fuMBAG6G35nTcbGy2",
  "key23": "5fULMYULHQ5j1fU7BTPodhroPzKwna67HXVb5xiPapWxTN6MDEUpxWAFguD9hsQY5cyYFN6JXk14irMzLH9oESV5",
  "key24": "4pomcuJoMGg2T6NyNXbYfq7KJRdWNEv762S6EEFyWabLpoK7Y9gfA6Uww5EAohxcsBtihNLRY8bycDuq4Auo2UoL",
  "key25": "48kgWAdtKbQcMTrZwusyQicjFeJNcJqBBLd3ZUKvzpJR9bZUSE2uqrhjYoD8x3ycEXXtYrKN2iN7RuQYi1BN2YfS",
  "key26": "2RLV8nhVR5j94RTzZRd3qb5sBvMDEjUKQsmPUNRZCvCPYQmRNHfMYEVrPnGBKBRWQHectALmnyfPkWnnbukPyiGc",
  "key27": "2wreroudR7eHiZfK6FDEejmJWvkm7Ynwpy8CZ6tvbxHRdtJoXtX8YPqw6ZRbHonKqfHiKVhpWHgEr3J23Ku98bVA",
  "key28": "LR8zA1a7Sm5W5QPN4xTntkT2dNKcY9bPaxUtN2sFis8vgXs9MtbSRJiXpncvdHPNEA6rHfRgF6fyWm9YhLqKf2Y",
  "key29": "5KqTUocQiXGd84ha6b33HQxadb9my7vkGFLe3VX4dhPgdTKrTt6CnrkcA3LKB5VBgyzzu8DpsTTBCB5s5Wxe5Jip",
  "key30": "4x9BfsiHLsKasVZCrBUKv7SC41jd4mr3WfSEPC3pw2z4WtLPanHAGReSD8HLzkL9afbNVjDS6bUKoxfqJFmzB4KN",
  "key31": "amcrQ3LKsVFUcaEw63iKNqtxNpotqM4rE5o8wyF1xoZyjDASB8qMKZzc2cjK3n4fYirtWJME9NxxTGqq3KTcvgm",
  "key32": "4B4PmPLHFV3ReBZmihAfGBzHSKwXiCUW8GxnSpXT1eLNh4iM6M8TaL79dybZ9qPFkkHiEhKMygDwGUi6ZBE4shUk",
  "key33": "3Rm4YD77DFLi4iKS28Nd1WCSeKKQEPzyR1JwyEPeFQ3xY6LygGJxx6a4ZVd2aa4zCiQgXdUg4yKkrwEkUWtKNrFr",
  "key34": "66EawQDbGK7a8gRZQ7BQa9CG9Aw6xcC3C2QSh54Mot9yPhFy3Dmhu1ek89gq2STRpoKDYKZrLgtuqxZDdt9kvSLx",
  "key35": "4jYdNi29Uh2pGQnk7EZGAonMng1D6ma8HT7B3NYkt1QCXaQQ9jVfk9S7R7UUEsU3RBr2WJibDuJQADsgkXy9XLkm",
  "key36": "2kkqJfXBkjGbsLwLJgtGWtPGQ2N1qtmYde5uS8BQK4UDrhFA3L5CrThhhWj1eDKUEfRVZvtmcDLhbN4MrRfPShod"
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
