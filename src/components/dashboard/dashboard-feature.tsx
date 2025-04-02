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
    "27gAk9okitoH8sVzoutRvovMBntZTba6Fk9E6AqWJGGrtyomaXfuzuHnJBtiv9uwkGKRkoPxYMARZHDT4BeJTEw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPnMWnr7SYzeWw5Pjf3qg5qtDFeb8kANmh7CYpMiNRNZ2Bj5L2Xqr4DtdPvkaBgvLqV9eUVDpxexEhfWu9EfMi8",
  "key1": "42xHKxahzHtQAgwU8Nsj6d5n83aELXXyuUrKK893feAt7ocFcMf9mawKFgtANqULtjxy3WzTG5VPaUCovDdeGMd4",
  "key2": "2wSLmLrRz1JdSLWCWxBnFpDEN6RziL1nZtYQQFr57uwZm2ofBZZ4as68CtRxXn5teUyFY9FiwGjJ7zX9iMgUTeY8",
  "key3": "btnCabrBqoCbM6ytMM8muMJ1w8fM3Dwr2VcguJyDoNUuu4LtYtkqfT2QHMseseX4K1ubNCBMCbXEqSXGhkYQ8dm",
  "key4": "3vso3VxLx1qtTGQtzS8vKiqQJEhTvkTdFZABfZRECqr7MgHPEqMmDwJ9XpfEkD7WGLaf4EC5UCwSVadWJ5z5imD7",
  "key5": "3GXPbwihsta13mvEwtqju68hH3ipj1s7xTvCSdGHy5FJ16K2qmcNN2Sh1St2Npy6SM1apgswbucpbbPg7FbU4CYz",
  "key6": "2fntDjUsrsXucENsh8LhKe9MpSJXUHa1KQnixc7jc3U9MXufGSGh6Ut6MQ15wx1sACfmDxHSdcmAYES6DyD3hFXE",
  "key7": "5H7tED3RGjE6NKmCuGXBNrrN9mupstiffHUejvqaVo1Dctwkc3KZB4MrEYdVjTsoenuSZpmdpBpoHTp2V9B6bEBW",
  "key8": "oe17zwbu8iDty7oxRKePUTBJxJ3orYykFkRy49eFHkotXLREMerp5Z6zRQHydaskzzwMLZPDFaGjiyxj9VcsTrm",
  "key9": "tFbjBvU2k5qsSZKZpo66doweMp4SXrEQ77Qita3LqY7UeEGJ4em2LLjKYHtn6zPzXaiWZgphbcV9WNeAicNCUhE",
  "key10": "GiqfMxJTU2HGZJmCrHyaoVvN7Ys9KpHLg2L5KkeUPVmJsaj5q9GctHi5uVuu3r1hZeSZkq6kt1ngtozMsRXZJrW",
  "key11": "3nyaYMGfQSZQPyzqrVW5RdBdziqrc9nASmx74N5jDJqaXPgUsAB9a5HhU8D1BS9P4ME88FnkWQuaDTMvFRAhNW5q",
  "key12": "cG2jJW5X6Ewbeee98Jn6ynsVdSMXHrKBkbC34cDecKphjt1m5hVniJTMXDfYCpeFhQyESW2uaChmW35nDXikwrs",
  "key13": "2CjPCbQLuH66rr3N27iJjjPNeE1ZHkWgGerFzya2fJ4UBuovyFeHqkADHxEELkBv49rk5oceztBXCkmb4akh7Kzp",
  "key14": "4Y1VPR9cmTt3M4WSuw3e3XNjA9XU64PejvK3ZuNUT6snT2sSrbJMvdksE3rD3ucmaCP2XLv8qiqwdDL5WSYXN3nV",
  "key15": "r6jEq7Hwcb1rLMb4Frp3HL7TrzUJKjzWFR2aCbB69t8PFocmbsWhC9hAM7xhKH6UnKvDYpen6W3SVt2beXAJv4x",
  "key16": "4Nc9YRW6VC7w6MKjJmh75GTPDhRXgUQzs6ZNdQ8BZPtvfZRbPNkXS6Ugb38ERvyEGQ68YQJWVej59ybhAXVED8jX",
  "key17": "3WJSXYXRrixNNzb6eeQLwrsxTALT7t8eXfEZapHMAqTVTwXV8P7aXvzq2x95H2XFeQr8iGufKz3QoJXGEbwHxHt3",
  "key18": "bA3PWZEagTWrWPHhEomxknqAzzE5NpLcYzM2q4XLx9Cohoa8drxjbSDibGGjW3WyGTQb5MjNMbkxevEY6KmK5Xg",
  "key19": "4ZjUYEjRjJoqtQoFzg5f3xW848MSe9zKFfTbPxWAudgdRhAYpHqVUagRXax8Rf4ujS6mdmBWYqHzKHcgPtC8RJti",
  "key20": "4ZZHb4MxRroNbbuG9NrQzpnDtn6bv3v4PS6HGaraezrRp7PNm1sEyxJGQcorpP45Sr9QZxujJqf3JzSH8tDYauYG",
  "key21": "4VTp1B6UY3zdQC6rEiSomFiqYtMyKz64cBdV3WEcSwbfHginyzYy77sRvm6Mf2gkb7MwovPYDidwCpjNutXbxPsC",
  "key22": "5i3WG2C92fXNJdq4ueTpWmo3QV2CdHydchq8gxrZhfnw7iH1ToUpigjQH5b8njhmgjynpAkbHrJ2t5vMrJWc5Eh5",
  "key23": "4r7Ns4BMz8dwryoXz1vTo2bp4L76JEcdjuEV9Ba5A57YVBVMFp6SEPGfdzrdJdQbQBitv7W1rmMMvyT6yxkf2RAx",
  "key24": "3CiEeUyvYqGJ1mTweuCtqjRvVg8NEy1TLEzhJuzR4Agiapke9k97hSBe2j66MBWFyaB6Nsc5bVBhJWXkHtoNvpvS",
  "key25": "4hqmnuCGjKSSZYeZUApytqfWWvytj1tvwk4DfBUKRjDUbjb1iM9fHEXz1C4CaiFUzmcVKW33W7bcRNwKdfPBkAc2",
  "key26": "4aRDYKvxQi386TuFTPUdj8wUGAkEEAFcj5UACEkLxNKkMQeTGxDcTiZLPmtoGKnhLKbDofMrz57Zq2kj9SQWZvic",
  "key27": "3tYcHyR2xsVYP5j8bv28H6hhzrD9Uo21cMk9VgpG7uRoGNdYTh76xS89GjFTnYZPf6io3bS5kMKEtNzVqztJsr1N",
  "key28": "4eDwv1jgDDnAntTiSWBrQTaTGfPdtQ3Mq62eMAVzRJJmmedNhnW7Bf7Sm1DPkhXfapzVFdbL57zo3HT5QzY8oAUf",
  "key29": "yJRi8GsLvAwnSpjkdjiaxgMabxPuxFnavp9tvqxJiDbuYTjRR8FBzDj67VCVtnakfSdkPemrZomiR4bEQXCZwLY",
  "key30": "5aYPJkfft1qk1c6KFucJdvTh2Aswjm1m9A9CDPGzpVVQDh8PgzxjSnTkd5soUodsoLp6iM2Dzs1AjMdHeNHz9rJh",
  "key31": "3yXNFDPtNhzG3R2SVVNNyv6K36h8vhGrTfDjN3T9qEgUankHGMUj3Hf35Yr2Ey9MB728eGJpUJo1AbQxFjsbL18f",
  "key32": "4vxARPtrdF34q3hMB6hN5pykmVfLW8HTdAvHNRHdGvV4sTpDaUVhLtTywovh3BtXdhXcLTh9XdyXf63EpT7RzSd6",
  "key33": "yJSBaDZjpUmBP7r9BoUAhWEF2Vs5DUL3eGCQR386v5NBYNfS8bT1sDDW2XAtLavEXuJfHviiPKJ4rAXBB86U8Zk",
  "key34": "4BLYTaVzVXR5roc5B5pSSj68guXVE8wXuUCeSFAsqMuJFoDwJUmE9yGknVGhPhMnDUbPsmHqPS6ke2QsTUu9uSpA",
  "key35": "2NMcuq7kwRGqCL9QtEM8uLYWP6JFyaJxvyyQC1xef6BzvHK1VgLvMVSxreZD2Ar7vBe8H6tW3M2TVEzHAyUjUm6m",
  "key36": "42Hiihn5YdHNz4X8JArPGk1Q317EN6SABLBHLDTXi2dCFXPqNytnkCMFiBzCZKbt1wTA7EjVCYPXsrGwqTutghsK",
  "key37": "4nQAUhwKWY2o3bcKR3ub5bTH2e2ynCkqzVuYRr83uimn7ZhvhPgTeiuZPSFTWdsREZUa1XaHexJj8sVLp74s4fff",
  "key38": "93UtHeXzq2EewVSjMFhfcNroEUxW1UXKx8LvDAT8oc2GbWwSW6WLTrSwd9bptJZo7rH3kckmKCTVfjYPVXttS2j",
  "key39": "qQ9P7qGnnxFmtwbUSG9T1RffFciSHGFRftfV7keDX5xP1yQxkXyWm7H2nqn7PfW1hKBoNvjTiB1HcHDw6DyxMvT",
  "key40": "55HHUcFc5GkMdjycRPVd2rwgpAZzgZ4cSWBn7uHm8BbyMEeUADAzQs3VZ5KzmGpWS5RkVLqt2pJUo84PknFrxyY2",
  "key41": "EekEiHJVi4dzVkQiteALLtbS1LNu2JiKp8Dax3V8sZ4iicDFxHLwdajXqK8FbjqSgJRbD23xmLCGgUYxE5TjKM2",
  "key42": "ariSp1hJ8Cj3nfBdeSLYzPp2bV5CEM8DxoHCTSN4QQCnch1EakZz3cxBv2RNs6GTntYVYg2xxcX2EffPY7wymW5",
  "key43": "2UoRVHCmyzefRmFJxhFAkxigjwJRgmtXMEPKsok3ZSKWbr1CSTxxPLcrz1FgaRf8BVobtELLESCDQbPZAuRcuhWr",
  "key44": "5MsfAa66CvZtvgNsR1dADD2v94UothXL9Xu6wESzg8vrgJHopVSB26S6uSQvS8p1gfPzP9FuPkhXxw83qQ7W7Gdy"
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
