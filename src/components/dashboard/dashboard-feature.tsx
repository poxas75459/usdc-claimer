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
    "53dyxdXXGKr73QdNbYZxGX8cBQNwf1tyyTGww7VtL9sEwG5E4RbWpEusX8uC93r2FxSzAVetCHHFxvMnRd85K8Vg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RNf2uBC6t6YuhVaGtt3TUWcpidHBUJKz3Nd879AgggoEpzCQu3S7ar4ZW2zWMvZy19v6AJ6REsyyvUKeFC1hHcT",
  "key1": "5EcTySDwUWsXgobDLBVquY87Rtc34SYSV6uivdmTDX8Bf8kESQpUJqWwJ8RiixUiiWLqhmQG6bivrspufbNkCzvG",
  "key2": "5ZZsywads8ETMj1U3wRMMmUHdsjZ8SxScYPioMfLGHqHp2XajcDZdicLAs6ktXGH239aoAFN2AmBggjeiWcZcBuz",
  "key3": "5d8Z9VRJFfrrYtabBZfN89HGG5z7FfCRDuN4DWxccHYt1PrH7vLz8PV7imQHpsZhb4nNFLDWLgLWwEyXmBpVRNAQ",
  "key4": "43VJDxQ4j7aNRpUom3eyjZFEprtdd5b7G6FWDVsMojhJBTrwhuoHmCxT1MqppbvBjJgW8HsXDb26pafkHzDBqdt2",
  "key5": "Fn7jkE7GRbRs3DU94XJP1Pz9GEe18fiLaXXcpNoTDwkH1KUqXv8qAMtgpNTo4kJYJjsCoDWKwzVgpvEFhLank5P",
  "key6": "2iwG2NgLnGj9qW8hS2JXSkHDdBDjKuffNnKswrNiiZMAXj37rZnZmwXjh57b6TLXBK5FcwHBvpi47ezz4CKM3YMc",
  "key7": "5e1sZ9MhHDAS7Nuwt9fSQugrpVs1PebbJc9x2fF5TVaBzWzrr2CcZYkf8qma17xBuJ5eDtiaCVw5iWHgziBpTgNv",
  "key8": "4d53ETUiz8XbBVFpGKEpXg5FtZoRpAHTX8s1NktBU6Hc5zvnBCWZaZ3m84CoVPfjRsiLXr3zb3hHxo7BHwAv58Ro",
  "key9": "3kLudUTWFGE9JcJ2T4LAuzxQXVmumVULPRPMtP6dr6Ki9ak5aVcTaMFwsczjFCikdqGUa1FGB695akctpsiqjng1",
  "key10": "5gF4NySSVWZoMpuYNZzeTP4EUv3chRJmH4q6U1QWoWjmxCno5kJrxEpTh9RA3yBtyLLtNwWbH524JSGDjXhAK6G3",
  "key11": "keUpX6e46bW4HyaCdTnj9uRohga45ocPCxBrWuLrqFdubsCouBwdHyw4yfoZc8Dvz1Xk72na2sMaVy2zfTiDSZH",
  "key12": "4bBBECvcsC8udL7JHkHAPDK8P4bW8dm1TUeGFspRd1tG8ZM1HvqXo9AF1C67ki72JP1PRj7Djtn328tbxsbJmwWi",
  "key13": "2FR5pPnau8acEM9qS4UsVQLaqwTQF8FxYujjfcXMTehzQTvFwr32h6BhEzbb9guVXsYomr8bcgknqtQAtYKSMABo",
  "key14": "36hhoFzqkuiAAzRgqaKDFNZLWoo6cagPyUwC2jaMyVvXXLMrubKkAmmxgDvcDrKDusnP9tGksudttLAkdD8G5tDQ",
  "key15": "3XHKRUrTBGwwCiZJ6hCUQWnAJs8RU87EYg7L72kmqsrVxGuVyGVD41dL8cMD9X8agWwFkoJDmHFCzNjQuhRi15qx",
  "key16": "578GyekqL4ZNAWc2dQA82M4PVrVFXPPRWkyrg8GmTECDDSCMwtk7QynP8anU2cfvbYjHztvN9aoRhxyxWoT385e7",
  "key17": "4qqcAx8cgixPQG5XAxEjxtwkPEitDgpCZtRD4mUJC1hE8VBjeo1ff5ScSNPrqhrTZLYw2nnQEGVAEsvVoJZNCgCr",
  "key18": "3uvwcoRSXZAJLVwe6Js5HyZJfr4BqJGy2Lg7S7GqBGQkjDVsnr4PtPKFaj1FkSw3p8MJ1BuMDjgcAGP7zJkfeyNL",
  "key19": "4FNso3qE523wh8wcwXKh2sqAwuLkLwuGkE2LqgN1mdEE6rdPuPyXWG9GR6WCfMrCSB59X43HFWA2N2BvZp2CGkkN",
  "key20": "3cj8FK7nUxry9DNHfRuNE6VNRMZ5y7Y6191P6xaudSPN48UAywuLk83dJzvAvshEhLRhHZwScVjFiQhyC3wdDK9j",
  "key21": "4qfqUGrrk8uVsNyGqkN8DcpHJv9QA8j9CWb4UfDB9TmQDnhHrowHjHGLB25XYDUgWMtZGVuWSRULmsFQaQhD3CVd",
  "key22": "kK3tgPmtpyuSUKcP7d7zv4HXCBATgco281HH5As94rTnEhi91AGwETK45EXJVtoAsZpfz1zeut5GYSjxNJvxCqr",
  "key23": "2q2WRBAsjV1SUpoy8gbobBJfvkoWMW2m9PoGJCFUwfAGduZ7dZ5BMRkyMBSZmLPYg45uKSNNZQbSz7jPueA7UhvU",
  "key24": "4Dwt3uRmy65yPeVFQyaGNKuLNjmCH4oz1yiUfzjfCfjm8HVALJ81xpK4p4Vx6QyFjuFEsvQgRjn1BC1LtCQmkgNC",
  "key25": "5VPefm1GywmpMoLbCiGvyW4tNW911Zs6AaBgFke8Mvg3bm81CwaHALxtzaBmKrBp3X5fCRWv4nEJiVNX7qEkRjZD",
  "key26": "3zrs9JbDeb87GeB6r93NH63FrygHewdVHe4LAhE7vL7p2XT4CvNg3LR8PBNsGpWDQmuZ396HE6ocuCDJzQQwsq7r"
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
