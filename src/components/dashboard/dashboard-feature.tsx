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
    "3cuQNUDLd4MtJXgRSwF3N3uQBUWxthQ7F5ueETKHkMRoHWzz2TFPNHVHdP31gmxGYJPc66dgYiU6oxkxmq1n3EeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66g6UMMc4nQE5Wjee8ZBBEFTjoUjaxhSKwvJD11A1PYXwNSRA53ZwdYfm44Ts1qmnTsHaUNLZXCwapnPFDnDhDyq",
  "key1": "FZhiSLp7Zvgwu47NwaXdDgiJ6wZfiX8y4JLYUo6SEH9xv5WR7fwwWPcBDQQcAdf58qeTEFULzyoRFCgKDU6Eg7u",
  "key2": "66LmNmZwXcBJiQ1nVzqknFCdZn3HedPB2Sa5qc7KqGKzBu15hhisg5TccJVMLTrnPG1LcqZ6gVbS11jjiahWR3eK",
  "key3": "2qt6hrFu1EUfboD9CfZpHzRkzo1H77r7a7jEzppKLTyihinmmqfTL8z5rYjYaYWJjxHD2hK5PecU1YhDsbEALho6",
  "key4": "34bQbKFnAWEosNSJjiJE3fuBqBj8kSfF65vmGzYeaTFTguFfmhkb92yprZzweW6kj7xXKXANXHLKpKJqZESzaErP",
  "key5": "3MDjJ6VUuAL4xtvgyms3s9n5ZDwCeX1MvkYH7KbHixamaYJEqCtpC8hiPcqUxrRxgUrcNyWRGoPfDzxQXRsoz1kw",
  "key6": "4QWQfC5msrVG2Xrd9FhTayhu7z64qdxf4rwjvP2GNs1jWXgGw1pemiAbxBarosED9xLy1Nnaq6YoF3F836x7Vdxx",
  "key7": "4YVkgDDTY96bg68m7eHtemwPcFLBgKp4aFz6g673FPGnp3h44br91NPvZ2htfA4UStFXAMt7huF65jBRCWJm6fGg",
  "key8": "2qsnS7AYSTi5s9Yw5U8mbMRtJ4Z5BwAXQgRjpJdS81MyfuuMqFCHJJyGhmLA16SCX1GTgC85vtQ9eZAScioC1sDX",
  "key9": "skVTxedf3wqHMrAGyQZDEi4MxjYKfnTrgHWinPJ9GjrrNw883AjRX8uZ4CyHBwnYoccRcdwLZ2c6Rrr8BCKJFCh",
  "key10": "iZ18Tov55VstpcYYvffS5LY7NLVZShG18dA3uUUJVcA8Kgu78sPWfZCMUJs8swYsMUXR5KrwUPTNEUnwVRwVSVk",
  "key11": "43FAjbAwcbvNQcFQAT1gfJgemJMjKgyRea3XTw3D8zxgmaWWazeC7mmEPfA1mKcjTwYhXek3d36bHCK6mjtHFGuf",
  "key12": "4Tzi5EvFQKGaonbNdQPtTC3pYjTZRLWvCnrLmEMY9Lf5Y2t7DcUTUQe8gAVwEpESkgHhmv4XMYURRVzpF24RKqyd",
  "key13": "3LGooZvdXtG7RdwC4P4FZatDSusdW8N8xrbiFcUhDsxGthKV19T8Mv4RzPgmPy16urkGme2PztQnJ4zLL1DzvCFD",
  "key14": "3VZAb4fLML5DPkZJrbL3ja3WnGo9LefBXCeEb5mfGQwD9Dj8rgPaB3LfCggipjn5XsDAbqgNk1A6EuEB7vef5asw",
  "key15": "5jc93DmcUG5fC7oWG18oW6Q5C44fXV3dYGWN3UaGJEbFqMQ5xAzBqGPf9RVvH88z6bCWUhKZNfxm4A2EVNDohsxQ",
  "key16": "KPEWHPSMSToVa9LuzHBFheRPkcjBo1PTnvwkGpgpUZbcMpJDVm24pgvV8bvE3wMHe75NQEMD5JnoDhuxs3qjDMR",
  "key17": "LXqEyKeCcutEf6ZyJ4K1SGKQvhMQtC5XNSEj2RoaK7LHzJQc5tpDYZfNJDkAawqLdiTRTF5cnfJ5Ajf8HM92GWa",
  "key18": "5ZyjTKdU7NJdM35s8SaRwAWo1D9VfisAAfXu7Zj8uQBjyr756NELuYBBq1RmjuEmVHW8tRjAXT5uXhu9ABmpZprk",
  "key19": "k5CSb9bpRZ69hXHhjBtzjATJDMSScUpCPfGVtrM5ovNDWm4DrYxkBWbfvuAVEHhoBzDGiMDgAvdbWfxtDgW81mE",
  "key20": "4QpyiSAVpZeoA1nDuajbQqacwShuHnfWpu84gVAXuDg56nEvJswUs6pSHTZ54LQXnRN4nkvF7H9DjhyV8GdBBvYH",
  "key21": "5bTZnt27jTCvBX4Pu1fMv6TK2SYpbHm5743HSDhyDgMg1Co9MxYzvWhGtojJ8YxqAc9GS85dRU5LfqreZrvn6T1F",
  "key22": "5Fr1tFYsTBxCEKh4S2y5TSEbX9mDvU3DWBJKbxABXJamgnm6CqtNE9DePaZGuPv9PYZDCPraZu8tYyNFiXJdjofg",
  "key23": "wNuTHYb6NRdSFH8KmrdePtZNWivbgbhEEXib8Rjw8bG1VL2HCq7hw4GiAPzu7Jz445CYj9i7HiPw37TK5GiYxYa",
  "key24": "5HJJohd7JysPN9SnEZwbm5j8nwTiEoRDb75DLcLs7fwuq8gbDk3DYxf5314bhPrcqr84hub2cFqJo26RySLA9ZQm",
  "key25": "3qrTwLThwPm1G9xavYZKLVgGQpVAyVTMhVpxJQ9J73z97ZFAWJGMQbizHgH5rz8RHFyPhekGuZ26vqvTXQWKDMDt",
  "key26": "3fruAsrudXWGvAtv6etXp73m9EoeZhufV363ZVvQAJWbtLGePEHSi1Ge16QNiX3kEBjzdcJUatCQQto6wkSzV4Mm",
  "key27": "28b98Rjg4NQxgpnfssEL7aVpu83mVe4YG4TpqJoFLgJrRtzdSC4ys9xCXqBSprbsmAN1wDsxVxrA5HfYcPqAZkPa",
  "key28": "5MbMpDspZfwz9gUBmYFFhs5hkVLMnxFKtuuawnSKn5kw3ynQtGRgfnBwpHSAB8SMweTyAo8sdGF9np8jxMBddRrj",
  "key29": "2JwJff5SrAyHwqXX91ubVhXGocJyFq4fVDVHDyMrd4dCsEXFZr1QguWvDPXpSc6d7RwhVZVLL5ddjXd314K6bxDA",
  "key30": "4HjLu7AS4wxYPcojKqMAwUwViu538ZoPajWGajLPUKPyopsJn2MQMBNiwhLUnQPpwTiLgCay7HfrjGaowrt4BuU9",
  "key31": "3WHVCaoYqcCda3bWHMCPKMBpT3Pdpwkk6RB3FxvrEa5SxNYQMCuq67juQN8r9QbVWNRf8m6n78FthW8RkRR4QN1E",
  "key32": "f6XGcjSzQC7Vxek1okmzxPjBotadN4CHxjUT1K123ERXJ126h7xLs2CCtXSzibeXcyR9M8CQVhpZ9ov8d7xHWJt",
  "key33": "5we9tZF4pKbxg2Y84ewzF3rCS8incZKtXB1efFvuurT9FXizZzwaWWbLomT6FUAdkX8dyd9WUMrWShD7oWLFrLo",
  "key34": "3WhAvAkrRqDWC1PzhXYnPccm1ouXfWJRDSib7NTdC49a4oNKssgw8LjssoSAWr4K7gpukmMnmzJKYdvALJmyTqfe",
  "key35": "3kM61sV9jBo1RQ7For456VA5WoegWUPQ8p6tjoMN6wu4zQLUTpZKymjiD9jXax63S7ZCsrd1XVQypoDhx7RAA8JJ",
  "key36": "63fjKkk7kCVmRRZA68Adi8fDgBnj7VtBdaCWChyhWaXDn9Bru5NBgT77S48wE79jNrTkp5FQSk3TH1aUfsFsieCp",
  "key37": "4s1vrB2TmRkcKW3idZ9ZDH2YmQLDt3HeRsmYUaxY2hj2E9WMpzHxtg8P9gAJAq5pmM8BRQhx7hpSA4KqcdVfNYUK",
  "key38": "671hyJdZ3pyoYumJ5kp7ed7WE3rpVHk2EpnLHLGHiajK3WgFntzEKQyjr2XrTU3PncHNmHtLUFr5AmTcgkLWFmgN",
  "key39": "3tKAdTxjgxSE5xLDCsSM2ckPQm8XvibEttzB7naG9PTmUGMR8pXWc86pAwHu1wr2GHHSDYry9y67AGveRxstQkp7",
  "key40": "38fKqaF9EaC5JWhVNkmkr3CcSRjZtqyVWmW2mtmssBrVewEpGGykq2q8WbQqbBeuGTk3XH8YEFc2HPEiswECwvN5",
  "key41": "2KW5wbWB2zYaVjqYLJ8zUXghU7yHakSAVbWkDLLCL2x13W2xY694gb1LQqTLYRE5eEaxht4hdhPeu9NNm8441TEx",
  "key42": "3RxsmBTirWYawoJcXEXJoxipYngdw7EFHZ74MYNJMwdH7FHgCtxmE1ctuXA6cftUCTUbpoy5qD2tfgfNa1yX4ThE"
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
