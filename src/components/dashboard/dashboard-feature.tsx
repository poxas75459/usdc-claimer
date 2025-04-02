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
    "4MVQfNTPQFVzvwBRMzV8ZppnzyDZGbUmVRyCkANGUkdZf8sdi8k8wskcjskC4MwbTJaEqSC9D44yDUX8fhZrw9oa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Se3BBQxFX84skW5cqrwiBgbdDeUpGjiWVme8p8R6qXUbdzNAvAnz5yhR9oDinENCY1YXa3BKmx9YSKS7G2YgSCz",
  "key1": "26AUw2PvptYLZMpFmwpAacGgPz1H1CMqPXFz7qhAQHj4KY2mzbkTGCzL8bmbJ3dckuc2ziAtL3kWy17Y4DJVnNeU",
  "key2": "D8rNrp64LxBuaqfuNCD41WYhYNv4DJhn8XgS3kzXbNCGMcJNUY5mtv8FqjXL19jLNfDj76gZHXYJhmzp7o4FJef",
  "key3": "2yRbWwmaqk4zg1RbtVDMJCsTQa9fbXrau5GEXoHCSgHQwrAE7betndFGMKSUbLGsZ3mGmoyUsqo4uG2ydFNXp5ke",
  "key4": "2c3L3xYFhYf2RTM8yy3zALSiSNYdVh8PEurPZDmXJnpWLfDXYHQiZVhHU1Vy8CA6fSEkJJmbBaJm89GSsqNsBVZ",
  "key5": "32CqWve1rawfYqfH87LAhTGU1zqJ3tSEmamRD6oXCVdvaFqCyVgzjNPqv9NRdWFT6y7vqKg46mXqW8bnYdTGTjtc",
  "key6": "2eKNSCmBxHZuwbFRhz7YPw4qq4VTDXFw6kY4JGqMJneTTG33y5LgvAMpUgTD1gvQxsADpGw7LzLvYrpoyi6J1F6z",
  "key7": "4YNLfoqJ6MszAi72xQjMrFZFjDZDMEW4Bw2h9VeLz2xJ4kHAHjhhdtW1AuDsxBM76Uiqpd4q6AGaVMY1EcMnkJGD",
  "key8": "2yGzJXkFfKDCAHFus7ztQHVkrCSapMC6Lg338so4WsW5GLcZXcsZqg2t3nrjJHfggsXr4zfgFVk5JfcqPZMSxtKu",
  "key9": "eYCGVfGLq1yR1BcmrGVWZEdg6fVFixr8LnySjphBTfyDySAWzLZUEP5yMBt5Pn98XfqiEdfuS3gMsvpzzwSfpR1",
  "key10": "47hgFZ5xE6ggANBabLg66ZYwTBustce1gKZDMXwKf3U5VQYZW6MbzLRDV5LnyST5BGz5Qdb9U4gfuUBAjrcDv63h",
  "key11": "5KWYTnArguAh3eHkvda5gPMhowf6mNVDrJ3ge92pokuqnFtX4tgmHKS7bycMKZJ5QN3pWEb9e7DMCF6Sxb2wVopU",
  "key12": "3H88FWo3kDbgfMqx2AXdi1euPPJwcLWhLwjtqTHrPumPwRMY5AmhTEsTT9j9ownC4KNdxSjFDJG9kHavaeVy8TeA",
  "key13": "2udopuK69UKDa8VHNGHmxmcwyixDTCvevVUTRFWcytdbhnYfKUpQcjQzSiuDTGVNoX8jDM7s78Ruu7LC54zjv4wX",
  "key14": "4NPf4cD86dqCerAC5ZEcBEX9QCQZYzPr82YU3x4UxiSXHTY1Yk7i3Bhxntq1hub4eesyzqtMBChPnm18jtB2Kwtz",
  "key15": "3T3txcTwzPELLeuKUAYgafpDrst74aDvjj4e7gcuTc6LPKJiemMSEJRHTYqf3ZsP5qKsssyc8tjZsZCDapicaiMy",
  "key16": "ZRAufnHYyVkDKBQcK1HgGy9XtFLV9eKKaKRYAZZidLqQmy1CBUi8CmAxdCKFs7Z7DqMjSvHukb26JhiqBSoXdsj",
  "key17": "5K2MZCwkYZCfxbjoiURtspaPGrhxRoQVxsz5gSvFj8GUWXKHiEy4yLHydZKPYRXGJXzbwLLDM5TY9VpyAWEWDXh4",
  "key18": "45Z2pgVrAgDtjHYJHqvNzc3YQA7MAbvpDcuysY9Vz1xgLPcHoZdCY1SJFu4if6LBoMoimiRDj2SyerrgxgRV3dyY",
  "key19": "oV75ykJXT337XJwcqr6vbyGar2oev7nxy8mytioXwBE5ZMkAVdfCuowbp47s4aQa3cZJ1asZTW6szUicdE8dD7G",
  "key20": "Pn4rfbhHqhajDfA5h7ZbiSvGwpc7pE4fke2S7tqB59BitE4xupx722dQ35nkoKAfrTHkYqYWWjyFytLCYEEVBD7",
  "key21": "45hHw9Dv3V1qsWGyzdWwYN4iV2fg3qPSLWyUnqi1uZfqAntBTCJTdyboWoMC1PtWxdxz2bUxmUsRHoRLoNov8fPe",
  "key22": "2g4k4QkaRDpzuTtjhskNKs29tMRoh9T8y6nbx2CV3dd3WZuSJdXPFZZCYTBz3ctfzwL7LAfXXKixWseTLFkw8sir",
  "key23": "5ePogqFQPXQpnap4phR14evfq9h6KExTdaKEyXzAZU8ngtE7rnRoWVmyhJmDLBVUG1GrScJ1XcmRGsLKr8CDk596",
  "key24": "2TzwQPwwNWftajoz1ujmHJgp8QTAezs5SgMKLZS8B7UpxjF1fsiyQWv4y472YJRHerXNAcAVpw9ENordp2Bo6u5n",
  "key25": "YhW2wvoLtrJWUsrkLxLKTwFEmWFzzG9ABiiSMEt7ij6bd2N39jaTPPGQ8yoDLEhv1icwYdWTkAspomakSkdAPey",
  "key26": "67nW8uFarFzdZvJBNWeE3JovLWSuYukaLQsef7h779CMadQKFGHGgmz518fhSb8qVDaVjN1oMrHwA8iB1uMkFbtc",
  "key27": "4JsNHicDoCCoGYAA7HLXNS8ppEDnYteFfsrJ3GJ6pbjKK5N18MEyZLCiiKrT18mFYwXTK6NkjWwJtM149YUHg51P",
  "key28": "23Nc4vX4dqKisM1iXeq6Q6qiyuof374YCksmZ634CXXyLbhXypABqZfzaoPPr2PVKAjLDfxBPvteN5ck4j5jnWZL",
  "key29": "4qYb3JYrGCCBwLk4M4jQ2yAMnEBLNG9xgodYaqLCgGNFZMx2ZCtfBhgf5tUooJngFaRPUXMK5daez9eZDu21hfvy",
  "key30": "2Z3bHqsTxFrBK472RjXERhfSLeNZxTLKnt5avygzoCukkGfHyYjmER9ThReqqWxY5V3U9vcTEPKew8a1R2oujjpV",
  "key31": "5gAKdCTMuS6StpTyuQvu8oSwYzmFRiNgStbH6BDsKeKYnx2nBJYjzEgaF1PRtBhL3cBaWRHYeY42fFcAZCG4wuaq",
  "key32": "5zbDE7RzA2dJwK7w8WZH8aXkKFCMzYCTWi6vrQCCTjniePbUAh95mr9geomdoxGLrbMDF7zJ1VKFtVvTDossfqpS",
  "key33": "kdfEE2UzRG751rCWUW4XB5nbdkHdNNp7GJeg3Q4HgFK21DMhS79j8AVGy4miWifAoCQiSikfKsHgbKUaYB3Led5",
  "key34": "2bu5ggq6Q1LExUDKKFK2axfpok8gCuiQBQN9e3Cuf9vPkQhCiJaZDa9g6t8G9BorUGE7jGhzXBqY4jFhrz8YgbGr",
  "key35": "4dq7CCG3UMEfQFVY9YmLE3oMiNWt1mUebuwQxHYmxPRh6ABfBmz3sSM6mM1hcfwQANJAYEhKabGnJ3vszPsJY95N",
  "key36": "2ACNfEUurJfhD2Qy4v9a53YTo2KpWeVvkCLs78nXV4yctDpgbjGhKTfhXfkkEcy7RzN3qS212Nsi6pctQfje2q8K",
  "key37": "4NxU74KhCvpDXGNwSy2f3so58q4xeRbn7mPBfBXZ7UgM11vmJR8hK11jHGGcJLtpwmJUozSryXLpGmpkATnZga5Z",
  "key38": "3JYSw7pNyWt3J1BcBsmj5Hn2Pzhffm72ApRCZ2aJAiDzm7cQG6f2m7SR6WwBKBx8uAwEH79cuGw18nuPV2uCYWfB",
  "key39": "3vuKu5uY17rcbG8nWh3p8WQDinnvazFBrPEi7GDoy5V35Wdj29L18q2QagmU5joRHG2oBnRDDjBDxRgQhb9E44Sr",
  "key40": "3wE8mWyZ1ugUT6XCr9TDLEpVDtQHtLznFWCYuzaB5dK59Y8xgJY8FFDTU3xBEVtowpoMyEibvWwEakceX8MHtG3C",
  "key41": "5dEhY2pWoVK8NZzFqPTr5QkRhcTgQa23VwkYhhTZMQNkRNkCiz7XtTETxED4C1e33gd3wSWwgn4AfFKH64zDVmej",
  "key42": "5SQT6is8meoUeCQ9Z2pAU5MkcMwVEgbQuUS6CnKY1CQdsMG6VA3TA7gLekEvfqfuSGg6j7jt4JMWCHHqQ12Mucxn",
  "key43": "3gUxtkuw8BZdQ7LHK2AhasnYZ4N74AeJxNkYhVigXAEZESHx7RQUWH5CYbCRmpCViC8uCFyVUZqes5er9egHTchN",
  "key44": "2iheLrA158Tn53z5BqJpipGGjyXkfF1mGEm85ec63G8taGMqZBmtxaseiMTsFDg4aj5LHZG1TbcMbN19i8wVy8iD",
  "key45": "36fX9mTPsEhPE1uNrtFCh6VQ8npXt4Gjrkp28G4qxR45h7oonDRta81JjBFasKrmkAbCxppt5efrwDfMEm1KNARj",
  "key46": "26iTWxv2nHNbiXnc3AcNxuYsEFPr8a1NGumsfziEjeMo7eQGBz9d9Zh6joTzu75vkbZfw8tFy6hGwEeMHC7gNrmr",
  "key47": "NGgWQMBeyKYGTDVTcjsZWGHKr3TrvyJiiRKqXZDy7RMJeeS2qxYrsJoRoxqPwNxqL85u89RzkMkoCCzFGz5BuwQ"
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
