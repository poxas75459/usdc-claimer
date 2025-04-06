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
    "2fVQFyM2TXYVYgwjjUG4oUtKyCs8K8xnuk2ifeeZV9wuYuE4FydP9ecJnmJMzCH8rg3rq6TJo4bdfDR85w9u9qdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HaBdEtA6f7mwe7z3RK4zmZNjHxKiZ7cWdTrhU2yuWq69eo1otBFtnB47KHVJeNPA7NTV5ksYWGwhsQxiDqxSzbs",
  "key1": "3L4yBzpEKsqiAA2L9iYeMUAHwfquXjxJ5bn3AkuWU49DAe2TPAZCTZdqUq7pPLCVEKXrtPCL2RupDD8PNJY5VM1T",
  "key2": "3VP9AZTYGKAgLhXRtHyzA7FgSUQaDy53raDVa7dNyz82PsqyiWguserYiLmnY3FT7Ht3tBoJf3UrQob5JhHyS4yd",
  "key3": "4XRk4LbSHqRzHSCJMxR1vAs9saiTBB2gnzA3gkw2AynBvd6HBD2TmktZBcFzsmBRmWDWAYxikHg7BQdk5LU2t9xU",
  "key4": "4tLUaVC1KdwazPyfosSManE2ZU94drUzMdiuVJVnADJ2kj8PXQUCScGnTaNmJ6d7ayET8VQxShJgE3V3jKoSBoZA",
  "key5": "4VanAFJumcEfR9sezrUXQWJyx9ouc9dsENssvwdRoMvcKVjMkkJYGyhdyJ48dW95HJFGyb3oNssLwgrJXr82cMb4",
  "key6": "3EB5qU87sobmmdXWVvzr9ybqrmEQ6erpqcwqxHVpcADdcRJnz5p6ZvS2oZ25TpgpJVSk4LMAgLuFUxbhvqeSrEZ2",
  "key7": "yHE2GPADuWSzpEAJ1iiMWrps5YQemqs7KEffTfDxCbZrQ8honSoit4x1DMcX6An9n3iFTDCroNisCkojhL8jq1o",
  "key8": "56KphPstvTbaMpB56YmwamgVJ5kzsM6KXbDiaQuQS8WvjqE5J3XW5ovmxcvw15dTzvEmnkSjtsdvDHu6uSruCQSr",
  "key9": "4mHYw4Vgh2catMfMoZL7FzTsEJVPSTh3DM1Tz9jia6cC93xeNJvv9yjUQGHoBi16cEsyEcayFtRAchzRpbN7scJV",
  "key10": "2Fpsmht25nZ9yBU4JNVWjhYZNJzwt6GGUcejcy5w2QMT6BrVmjvgwGQJRzWqPqQgfRQhcsopkUCEFnpbgfGVt1hW",
  "key11": "5mqoPqsxwkFwxqkPSihMfjphVA2hFqKFwzsmSQCic16ieBvMbEDRJCrY2yZkeHVQZiQgDCRSkqfXFNwUpZywxBMb",
  "key12": "5qriP7ZQBKvs9N4wyohZC5SkoDdEptw7BtBERZpDYi9JskrZksvhmtvabAXLztNnRk93WiRbCqxmSR51fp6aHjMz",
  "key13": "28oE51XVdZJd9nMpF29XTUB84dLHwoKmEi1N7eSLUb2gwSGriREveMHHDTprXHTdCrxUd7EMSTX4KrdbCa5iEuDF",
  "key14": "kc7Kx9cJsLotC9dH1pzkSwKdaBkQ4RjL1N2FnHuHWP2qrnkmMKD9syYyUVjErrYnKMQG8bTxQJu52Z1uCq5yobj",
  "key15": "5FvbeVpPtmE5RgaLA4Sv7q4LVMAnxQ7hvcaJufdojM4gSzDyd9gcuzmcnoZrdamF3j1zN6sVr5Yro4Zsh9Tp3p8H",
  "key16": "28a4Dy3Zdufbj1UiF5PP69Q3kQWrxjWmVEcfRjJcr4BrcCCwRWbcK2QrWPobvFXwQ4HAXXtaQcDkNEhtGtWanmcE",
  "key17": "3xG8d32ienCuqbhXocYDNWTUKx9PmAFCRZZE81gx5dyYsJnCJNa3jRv4c5yoA2D7N39LiQCqEE5z2eKSRwxssMnb",
  "key18": "Buf3z6MrQRUr6UpMbpxsRkYpHEj9g8ccbwedf6aCmyFHYv18Cabbonnqcg5eG5MUjAB9GESTVrpZCnukEVXEQj7",
  "key19": "5BvonSHBTmHdJL5zmAUrdd35NnRwLDr6MiDKaKCoycCkG7UX435nku3UiJme3yE3vAW6eQBwjnRrefVymYJPg8mS",
  "key20": "4yjos9W9p44quezTJtRdzJCvouAWHoYDKE3y11K2m7gCG5AetApHF6Gvvd9vtwoBg9B1KAogFbSYP81HiWqXBXWY",
  "key21": "2Ggm8C1sxNzwCHYJftTnjeoXgmxYHJvbouXiGjNsLs8m1jvtamimicHsGFg9oV5NZ4huN5MfiA2EVdwZ76Kukzh8",
  "key22": "35vpeV6ujXAJXcwHneUyWUbt5e38DKnypbF5nxJYMqnenoGaEB2oR2Fm7Qi9GfULktnhxp3LTBbH1mptXpNPZHsv",
  "key23": "2MUEWFmsqFvaPAhqpBjyCvTVizfHNMXygE4g1sEgZ43KD4QNz6F7JJ37SUzmG9X7xyXxs32rKKeXZChB464BRjmc",
  "key24": "5LE5USnMXEfFAFCFochW1BiRs8DJKv3EdaiE9prMHgiWwJaCQJGDFaxjpRyiiTb2MDi91je2GGyEH2mPWmANYA8Q",
  "key25": "2irEFKegtZUWrP3CPPfXt3hgL83YDDYeiLFRTycFv5t8Z6ZsfUMEbfeAS5tMXGwtM9aQBQBhMzBCiohwrb6ZFUHE",
  "key26": "GcPXRRTHNnMrHEXdQPaajkiJQ1jcbxCpp698w7FjDoKfRCg3QNZdocMDmwBhApVcb7BEEgo1kgQMvNCidGU4XQd",
  "key27": "4Ktt9j2334e7yMR823Zkjc2bakPJmADJTrpWdhVKiPhG6PDmfEYQM7rw79twDJ1iHX2b4fysHcYZEZGPRtpj3z6G",
  "key28": "4PquXngiYx5GSVr7xXvmf7CznwAZZMdJt9rBoisXBinVNjqE66t4jiJnxj2n16BUcbSzte9Yw8i1SyT3jGpC1C6u",
  "key29": "4cWce5nzRQeMxCYAffVoXnkNQH9iUyeM955NaC7w5tZgXzTDdzMxqHHiDXw4StR9yqgaYYdqDPxbC4NUuRwcSMXz",
  "key30": "5p23Qx7CX2H4WYkHwR9HiWnEKQYrytnUWXyHN2vDY39vk3jbFxzcaERVh2ydRZSwRNSGfWa6E9cd7wpSvVU3znq8",
  "key31": "3kUrJKAJDXEv7gW7t1PobUReUDpYsWYMkJnWNQAMq9yViHUjzur4D1uDXHc1Mfvxdj2mQW9mvcCwmWChEmBvZstM",
  "key32": "4iJx62QXD538jarDdJziXoj3f8MM1Cz77xDYdmJ4tLMh1Qq3EUC6QihnYykhp5AKKfSh48sg9hoyxMw2Dhe4SQGX",
  "key33": "4ipFCuWoDeGucpmvviinnpvumwJenEGDbiJrg5CCvC5CjWtM1nzq5jxhouiLxmCyEKoUsSkn2yd1JyniATYZcgUH",
  "key34": "3HJZWz3PBTSDNNzh9TubYVjpHrpSyKACy9VGg1GF1XM6nrF15CfzmJ4mvKTKs7XrKfhf4bDxBPgK8xp1hatRF9gR",
  "key35": "3cgJpqBmWch3YXsyb24bYU9iNKFzaFo6wQir6pXohXTwKCdcQer3LxAKSX3DPeE2iLvD32hURtbixy2gKJryn8pu"
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
