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
    "PaemZybsUnonYCjhCmk2rEhBDr3L3au63CcdsUVCNMcGyBZYWCC7PPACMdMrB4DF2AVzes1RdRtHXxkUQvfa1Hk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nGeL17gd8Cvod1cFP9Tu4CTPG2Emd6z4MzQ8M5hb3iB3TDrk9ffYtXqf31XRjyNNQnqPP1HzA9wmn1rXcR9hq9v",
  "key1": "3pcjoX6WSGGkN5jSxiTqi5VXwHhEuoe59XzcmDzbq3cqp9GsPYySB9UY4d2rfK5o3wZhygWzUd1b57NWPCdWrcE1",
  "key2": "3PEkX3tQBv4W9kUvd7iY3hG9mmr1wSwteckWhCz4o7dcporn4FcdP3FoCdSWABRsfTbjJRQrvbXifiFcV4BAayTq",
  "key3": "yKmfFLLeHG8bXhDqmQ5oEVkEKHZfC5JkwDq9pStmebPJmrQ2Aqv4BRoTgVFYyYBBu1J4aBxxWBPAXf2jP8AEhWP",
  "key4": "5ntBp3ZhRJGwJW5Xr8Qy7pB4fee3ZV98JxLx5SjVeTjphtrnhtbvPRtAjiQBFfzakaGmpPpKt5GsEtGPTKqg9kj1",
  "key5": "PWohT3pzWwyu94idPbS6hAqzdZvsPgTu9qHvpvFaxV1nnKn4qJ2iEkvCWs8HBBoa95mdTdKEzy3BPNJgVDpADDg",
  "key6": "3vQegfS2zZFuPeVTXXUdB9ujmKKJ4bFD9qrRMquFeFLdgFZK4eeZTJuPckwNpbDF5wsKwmiUagGW47jHRpck1wdN",
  "key7": "5k336szDQt52zzj29adjCkoncktBRkmSu4yLMpNNBvPM8aTGKVWkAhrv81f2EHFbqSJYUAKoovcw977jia899mxX",
  "key8": "38mV317tu4Na6pgwfue6t9xpNnD1FCA3LMsKsnw4ti5RbBtoPA6vgBoEmt6pGh1aT4SC8XVTBmGrWiUP92dM59CB",
  "key9": "sRn7zJ9MwgwV5xzjKPA1PMJjin418b6nTmGhqzCesbhmYvY1hoa2eJnX3wTdrc7pKe7Vgbf6DszRZvCbBBn7G8H",
  "key10": "4hwTDCrunCpcAEcscevLqVcDGqjjrFBVCQwNEY1DEmFy82JEXYL14rFZeyTJvmmpybyFxHv33QZhs2HjB9TyvnAA",
  "key11": "kGxC7pEfvzywxADwqjcFUuF18ttWxAEN6FUgQsxRvLTPNyjuDBoXB8tjuXFwhJsWoZ2DGJRsLPKj4don7GThM2W",
  "key12": "2EY8HQp9yJbG5TZ63LtoV1sJ4eAnNFnBvEhLDPUWLjvaiEZyWi14RWy52fUbLcneTbc37ET1MRoZftJRChGRctSn",
  "key13": "2xEckvGji5goG5xHTcXZqwwy55fdPQgYtV5vgdDnT9vBLyzBSF7Xfaab7E7KYi3A1ApTKWk14q5TtN3zPHx49arc",
  "key14": "pqjFT3JGxe1cYdvWaY4peCgrYHPxoAh1HSB3iPwBmjEJSnNT3LRHeia8CtYtQNAmYD1MnRUnPnexULsvSfL3dhy",
  "key15": "24JMXMVEwh3ySrfbNr2TJVLTMhePQeYwMPZt9dbPBToXsC6AzuM4HWTBZB2oH72NnH82VqgBiAamNNqinXm5UPbx",
  "key16": "5eK67BWYG2LajfYNCQvv8zkX7Ptv7bM8FXpY7wiRbrL5L6CPVTEDC7J8s9YJsJTXxCJ4GTZndvR9612a9aj4UFyV",
  "key17": "2vfumhoarjJMjm3WcgvNk1XT8YQ36euvJk7nRFtzS4Y9HXSr4MTpDmPmsubvDm3urR1NhdyvSDx4Mcj395wZHdWW",
  "key18": "5EgmUJWm1uB4i8uYiU3PK8sVGvG5YffyPiZyHDRanAqzuKKpqukAdWmKEgHFnyVYunoouYS7MrWBZ96tsH5FHDBa",
  "key19": "22LczjDthPadFxWSSk8ujh8UuriKwC3d3k2L6aD94R1fkSpCwBwYffEq8nMkrkotM7pZqzAtiKvq1h7Ro8TGUx12",
  "key20": "2oZoyRfajMwEK4ZBw8ScH1ziUpM2WaV7fVGwashsVZpv7BDNLjwuPJbRZr6GtCuefCrhS83KY6BKKMqaD9TWHC5v",
  "key21": "5vEdSHCgNEDrAEA6aMBsxqiGEvQMLDmTXDFNtGeDdBBmi8LCykqEr6a6B4HfaFXhR5zhZUSYUYfpHtiXASjLfwLU",
  "key22": "5SSRLHXR3s3TR79PhDoBpRvLXj8M2xEWQHz88jokpui3gCt3v9jBBJ1uFGsdpFHf8sbQWrV5kPJqSmgLMqW1wN3j",
  "key23": "4YuojW1U7bDS9YMcbJVsNAPngUrpEfnKyLBsBJaPNR6pacZtB4NpG626CD7jKMRoSBLkpEicZJDje2d7UzkLPdNs",
  "key24": "oMMyndf7tn1UT5XsgXvC3oKVw1JXXrNWPzBKwUnpBRhfBHNQR4cuBRaUVcM7BkCTaxpuqMDnJRbvcSEWTF6d8Um",
  "key25": "5VDNARdDqeTTAXHpZqwLiYEyGeUfgUpffySTPysEWL4c1CBkQVhY1ZbTe6nUAzjTCaeLFVePRuWascArZgxKPc9K",
  "key26": "2TK4PWDrCdMvTzLKa7onBzRGYhXtYn4GV3bVtcugeSfXy3hu56ECN56PiSun53HSWL8BK3KfuLPDgzK8gKtFP63H",
  "key27": "3ST9TZUr1TFXi4iqCyKZmRm1dMKuNaev5jwvSTURD1Sg99vEdJK7zY3au5yuKz8kZJgH42VmhfWu87vLsP25AakH",
  "key28": "2sfZzfn6ukrj88pcoNi21vTVK1xcFrGyx9Tzf1qjWk3qMYkw2aqkxic7G4HQ9mkruRiCSFiNFjE3nG7iPn8wJ9yV",
  "key29": "2LPri52xZnEGtu8cBG9bSUA1YPDSaqR93TP4en7JURAj928Pbg55dzyvgEFRncnV7a7LgdfC8WEB3NrcJNrfcBm1",
  "key30": "HSEJqTTouHC4ixsHnhsRm8KdF53EEAoKwZBbQN1QcGXFg324wJ3eFMn6bpGjXAS8xFf1xHLmwUYm4nxBeEhkVxk"
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
