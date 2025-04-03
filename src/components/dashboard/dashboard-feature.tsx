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
    "5rLFU4kmPQxDpXtYqMoT2n3j4bGHaKfcQzaX3MES4py5CbiJPVMjhfJEZ49UmWZfXoznMBPX6zrq1DQc2EJs52nF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KRV2wDo2tQf2g6THmhWUe86xmDh3nLFcgZ5URLZuZUHeCLznugiCvjbJQm2F1q4Rm6tdqKgcUNwiw6QEqMJZF4f",
  "key1": "5q3r5XbF3Ae2ptbSqXAfzK4mCC7HXNm8QrDJh1qXQsDtmSqBmDkRQhBxPg6aFHxbP9RfYRwesdxVeTF5qHgM6Bhy",
  "key2": "4kwm7TgatCrgjfYNfTm7TCdf6opVYdWc1hznK7xgoeoxcbX4zwPqCx4JrXnNuCTGSse1NFJkhMMN6SbCHkVSVmr9",
  "key3": "4FKiQ7GygpTnDuKm8G5J47Kz2nDDJwDjCoZLKFdg6vRDnzjCiHAnF43v7qdaCcrqV5RsjcZK5dgYRETQaBQfT16j",
  "key4": "LU2wguC41vP1rtYjj73bHg5BTYukfpKZpHwbFhSWVELtbJQ28ak71QR8K4Fdw5TJ3PTfTGwfa3qrnosYfGrmqf6",
  "key5": "3htmDFA5pHTnNejDN4EerpX5WGxKDNMU14dxTEhxwravfnYte1naSaArTjqptv2DV4kqQpccEY4aJjzVDan9TCLz",
  "key6": "2ixzBZS6z1q56MJDXjYXupQtki9XP5nay6fT6ZXDt7LHkMnqaAQ9ouxqVyWQGnxhH6RqjKm4YghEQsMqAtTDKsWt",
  "key7": "5gxDuHNXisTdA8E2QW2suH16j6Po4eqyiYmoVrEiob4N4qv3sDTzz2GeJTdyz9p8gBnANZundDvvDfR2MkcMAZYJ",
  "key8": "5RGbPewW5gMZB12uuUq9iiBjtpAU7z3uvoyeFzRD834u4GBQF8hTkeYqNwLGJ79Mxzax6zVWp7e2TRW6yy5dWB18",
  "key9": "4eAxsEaC8jnY8o7kCgih92Wav34uL2JH6jQ3oUduduPGHMHG68QQSYuLdF5xaUKjdGaoLEDvr4QeKMndLqiLAATL",
  "key10": "2RBgpMkjnT8tV9sDW3GKx4KoZX8ddo8q7n8gWKwEMk8NeuWCA83Pe4pqvs6yv9opvkDAWAz9jMn3YYz2ZcToxYcA",
  "key11": "5x7rcXa8KhY9ZVZi5HCKoyZX4Y3XGynPA2MtRgNg562qD1siA6u46EAy4CzQ9pFfU7hLyojCpchxp42xP4HfxQMX",
  "key12": "5636tHFPA17HyFTW91pT52f6L29uPKyYETJk9LuU2ppsETqodKP3xEwVPUn4Akj2xvihAjq5ZMbUvbhqWc7gUegg",
  "key13": "4RH4o5JmMvLwCuw439kxVm1iLhiXM321MdVsj3289keSWGbntGDA6oCkRFSWzRDkdhb6YXvowUmdfXe4MUE2C2f4",
  "key14": "3ZxhJfY6nKSBFAHznjJNjCvHzKeqfYCT2ETaAsi9EvNM5G1ETsTxXAeswNGVQQrZv6hCMc31kJ1VU3hKUgHzWQiK",
  "key15": "4vavpJsJp68t7b3wtakXgEbwY4nGU4xEGUPpzvPW6nHr5tgEYWX4DoftuwjdjSCT9Y4JsEpk74L1kQcMVCxvjm7K",
  "key16": "3BVXcYH2kjVCWZMKRbHHZdu2Q35FpSikPvqJksfCAZ53jzxdcpU1F74ShnaoVikDd43Bxi77XSgcYuHExvgJHXwb",
  "key17": "3n4fBWoGoA2MApbqB4u8snKqKxht8x8DnKuPmTr2wQkuLXr6FRpRbNbrLNJg8qjes9AzZ25JeFnLpGT2Kd4ZKS6H",
  "key18": "2v5uWbSCgNHdeH1nqu86ENcnszoYBqSEKJULjnvfRZMdcC9rj8Q1yqAHo33se5QgsRGcVtjZJoea8MbQ3BKw7yza",
  "key19": "2zBgnTBynpFrTz6SFyvdCVMGryZiaJpEtixNLB4UEZe3BGQ3ZBfF3cvnvvmis35Qczp2Ubps1mSn8Ffypc1zwSHA",
  "key20": "67mTGbWbG4bUVCgBhqvM5UQ23o5zpnHaguftYArdkuEwj7b2N9hQaZCyUf5uEoEjmcZV2ngy9uH8mxVPcNxK25FJ",
  "key21": "ZEQHZGyrn3kXx1au8Suogy6M2wad2Q3PLRYgG5GAxCsKgLYqydw7VQfF9xtrXRApseWQhnPGbPcKGJ4JEboQaKM",
  "key22": "DgUiRArvQHtmwLHRwMc6u5HAnVemuxCctz5nSrcabPz5GQakELcyi1v2ctcvveXCULiiCQw5CqMkX2XQaQLeyTL",
  "key23": "3sair6rZruhTqGwrEDTkcMzFPpcDWAoRc7oxKuDCp7LznCttFMzfNrBgx569z4iS5HKwdzCQqw5tH4q1eN2Rx4e1",
  "key24": "4VNwsS7gYDpN4mAQUjtiAuYjhWYj99Uw76TLFGARDRraTbMNTkQoYT4hJ2Zwcj3iVfLida8m1GBDCSuF3MgoeLYN",
  "key25": "2uc6MiZaAZ3bSkHU9FAf2KnWgHTNKoe2Ahoo2eTjWsQaoe69THUVrXBGuaSfiWB817yKoi7BXpEsPDEktfGVeZKV",
  "key26": "3AmWQmgDYq81gT1piS2cNQtC98PpYgqdBenKMacYu8vhPrBMRMfM4L5dgsDpqwLMvSqpzs1ioJxXNM7UgzxX1Ykn",
  "key27": "4YrGTHTHy27NU3x3B5EDbxAxMreYk3jCFw7mt9J1P7y5pE4ahEYDsrJSzpcswJwFgBYpZSzqebrcBuktc75hJi92",
  "key28": "5wQT7QhdLVpj5BsW9KhWFjpSJor4DRqe44gBxzDGxbgjdRAWTAwZs4vk8CFKf2jjaSQomQb9maEPRWspJUsocU6A",
  "key29": "31iM8DX2FZM5YN4zmeNjtAU567My7cWVZLeEANA53N64CPpNnYqnAmeBTgiJr9QNPJ6492CVHhzH1kHUdevQdD4p",
  "key30": "4GLXTNtoqC1a5fd39SkU2151WhV87dnEEhp4rBG4hf2pDtrME8F7L2No6bBconixvdSqTQDkMu8EPYubygRsKTE3",
  "key31": "5tanNA4yqp53JSPE8Sfd9WU6bmdwVr4CxrV8F8LHsCB5vJtKbf14ye7b6ygSV4cr96MgmfJ1fRVeH11aPUiMuxGu",
  "key32": "3HvvHQEZgrWTN7MtKGvRa62kj5pWsMmRrzxpcewCLYHixQ2Lc2Qg1oFoaTB9gMShiD85acgj6W5xtKtLeWy5c1xf",
  "key33": "5KvDfdan2RhNdTxnkJNp8upyB99DTRfHeJfBVxQanTpzRfgtiAtiNmDZsSBH72rM21nYbP1jEw6HXvJ7ezkdMeip",
  "key34": "31gzd3faEVztSZpb2TMaUvyz4jQ9b9nQok6BuPAVonKAKyZweUnsxwpmAAzm7ZQ1CNWh4S8QWpAhVfSvBexbgxEv",
  "key35": "4n1zE5oeBo12aeXACBpq1b2ty8Dzbr7tz5z532HXNSRpWHv3dqjvh6Hc2GGqyuf2uDSxF8pSgUwrViiXR9sDQYA8",
  "key36": "3SNj1DNiLkqpvSQeAYxN9bsfo47XfwUgSR9R8VPWPfB8MSzximxpqAVMkmKe3tgrMWYqcitnMRHLPbxSz4rnsfYH",
  "key37": "2JJh2NH1KoDCh9Qvtxnx1gdM6XXWeZpNBVCkYpwrA3j2XvcVReURrnsR7o3nYYTaUmh367AEB6D5v4C4oozQs4H9",
  "key38": "2TyXaxG3NsWjEzPTnYxFoSYAcYDvFLwkRzGdF2tdC9LZtQipNncfR8Lreg5vBARHVPjSirftVxuHL53EukH1ZuTz",
  "key39": "5anSvFzjpPaF1pZNVrgLAtKwBGBTsw4Chftp3TCsEwviUHSFxqPcKnpH9oM8X8LTJbwyR77CuTaBi4N1eEdPwiQN",
  "key40": "66LkUBHTfN7QKcc7bPHGJ2nZ9uwB33rzR8os7fJq83usqSqjggCaWgW5SynNoWjsipYuT4tNM5nNFSJeGQAkzi6k",
  "key41": "fqNAeSYNDzRx7oM7DVgfX84Au2NfgpUPzdBBx8rPWYUaxsvWWkwAc2QXmCn8ELGN1ZUiFAPP7352hWagyAV5ugy",
  "key42": "2vmUdg4Tf66MLy6ykZm4pDUvNgv2AmtA8RofqU4BGmTDExz9fL1mJn8GNAiTnRGL4avysSkkPgXpZWpaiU4hT8sS",
  "key43": "4m1UCzNmccvzvYZitGfakE3uL6PNCBJMPZGzMqqkeqgLJEobYrwGePrdVkYaTEeYq7RHtA3dj6twJtyks9KwpGro",
  "key44": "HiGQY9naJzhj9GeDtsW2D2CA6qoYgnSRQsmQ6Hg6mmp789Q3fzjyVfm1XMuufwqopT2SF1PRQM2g16fqqWZVP52",
  "key45": "j3QJ7uzCK4uUNWdU6pbyKzvkUPj4NhbjaSboVB1XcFppicBvAroQYrtqU2WSuXWgrUnUxvy7DDhscEiGGfBnNMw",
  "key46": "WyodgEZLdmDwwRSYwmsAqwhMBaH2EQ8SYKChVx5kpfWjCYBrLBxhGR53pk6v9871F65xPA4S252nvtu5pw9ekA9",
  "key47": "4KeakmW3ahZeikRm6h61BSqgoFiG5tA4gfJC9qEMgYnvb2aLjLVTq1NgZN8Ka53yGD8YrY3iWytcp7ujob8bYYS4"
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
