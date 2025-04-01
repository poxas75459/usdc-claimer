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
    "5zrw2srky69bizKGTr2nzcaRqRKuEBbMgNveqQZEjZdq6u29YktFghpBV7EPzvPuP4vU4WRfKma2sKZD47ieAez1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ecFbjdAzBGqrQqf22f1HF9Q9Q6WdQCKctypARL4j4EtCUawSLRh6F13kqpCXQNATNnh8HfXCCE7J2zdWcdr45UJ",
  "key1": "5kcxgDcDT13VNWNGDzVpwve8wRAioH2k4B7hKL6AQC1XFAXqMqHeLtyUiCD8QaHrqthtFLpYG1gVTkJ3ih9kR9cY",
  "key2": "4AecLCgXr6NXy21UTiSkSnw6rTLfurRzkKjHaEHgJjZe7wBheAHfYex3DTafTgn9cDfHjShs7ViW9gYxFuKvtcTG",
  "key3": "5p2UX3nYKrBoCezBfcavx72eTe6iue1FcFHmFkwsaHTJHdhr9FQsPByShJ4PvHSULvtBhLzbi21hFdyKMzR1BNUv",
  "key4": "5SLKYu48ZaNLXJ9dKfWMonvvsqrFM8v8bLyhURxN5HAK2HigdTo4wAptwRu6nzQMSVEb7VVRY55U2dnry5oCdqr4",
  "key5": "22SsGJ1Uz9qR3z4xDWiLerYYcnVNrL4guPk4SeydrTYe1itKoSJUbKePewcwdHTtAbPN36fsaroBY2tsqRLLPjMq",
  "key6": "GreiYiJa4MNhtfUQceJuFSaQd6wMt885bGuLdM1bRXRsdUz6EVyyBN5tQnL9772q4C7C4e4BPcaPLEMsmZE3k8N",
  "key7": "2xRUQ3acuDJ3Mdvt1wa68arpgkUkgv7YieQKwFpg3io4uCHmsFZxqJfY4Aevvbu3cV7e5xNQhWruNxRQK7HmqPKp",
  "key8": "eiMQU4QLgv6TtiFWKzGjsawBJ73nm9TB7YgMh1J7DPNLiebvvuiuumcYDU3sM7KRH83bgqTDvPegLyzXuw1659G",
  "key9": "3oFLy2Pti8ij7bwmtgZesNEumyi8n6LM3MTrjagB9q3eorTw7Kr5hdzRuANDstc7hxipRnwfZd9ksaYi8cfQb7iC",
  "key10": "BRMV7GZD5hRS2DnVCPrpXTnoUD8DVrpMJbFx1iKXunVYLFc5QhLmsF8Znq8LvVgqtjQ7Yyh6RwnmxzWdv9Xf9TE",
  "key11": "2PEJE1fwsDu77SKGRHwQnGNGwjYwfkdb36Z9sSmz5ah6CN6DJF2tMjjkd696yp9fYpFtxhB321brwar4q8RKegeR",
  "key12": "64kU3QTHku5zmeqCJRkzJQGop9aiTCdFikg7uN6sdqcBBVwZ3CAkjVfH2U3SnTDGNpnrZJ9DLuF6yscCmr73X9Rg",
  "key13": "2ZxKNqWZDoN1jj2ZvjunwitnRkXrdkJpCJSqMCp5v1EkCnWQC34dhpGAz4Zuyoy8vFQS4vijRvJcDiE6JHmeaWsP",
  "key14": "4R11PWC93z4YaoQQfgXgJr52VBfeMShvVF8J2CoVeidUCKGVAcRCEnTmgVTfV715YL45bG7bBzu5S63NGHxGoCcH",
  "key15": "5n6LQkGc53H1JUdggfweh9g9on4Rpx52uWQ2iy6ksf7aC4Pj3o6Z8jTbDKTPKANPZZh8D9PKKVM7e4NU1buwTURX",
  "key16": "5hQJYeHaLpnhuiB8NYDPi4usdwLC8pw5h2FjCPUbKTHeTvdPNCPrViw2w3cccMzioCcFqyABVdTg2broxEvvtYRo",
  "key17": "4m5HCKDnsPnyeksT1hZ5vwSmJK84S5vyYnCUwenuzpy52BNCwCRZLU5kWEp5Qic7FByCJhNjEjVDwKpMUqSBbsHK",
  "key18": "5iHdE1Jkv6unwPQFZKu8A1TV76x6Cyuiy4fbk7dk1xyUzSy5K8jzCvqyUsd3u3gJrxSAYBNMQE9yudze4T1Y8YAY",
  "key19": "4Bqz1iyCtGtdCnUfzyw7d2deRMBGqYQv4v8r6TdhLXgYp3dy6GiPWEkqnCvmUwyKRWWMovY9YjC3BjSedvMeiu6X",
  "key20": "5Fuu9zymBC5CcgvErgisjr9ZavpthMyERm7ZQuTt3fCDp9vSNFS85qfcZrKc6r3EgH1oQ5sL59jXDyhXKspwPBvW",
  "key21": "tbVbiV6BLr4vPLhkdLPtSXYxVjnQYmDRjqLxdAk9u9uN3ExaZuJkRRWxpgzHuyyWxbxpViMnvg1CBt98TXXEVPh",
  "key22": "3zBPWSrVvYW5HehSsKeqah5jThZ9rKkUhX6NHupaTYT5VAT6i2L7AiPRYbyBnDoiMaeUDKFcM9cwa2kX1gLYc9vP",
  "key23": "5ymisWgXXaYSTJfpALCbQ2hpwtrA44GaiQPGhipgJVNzxAyJrsk2K3TX5Gm8NmCccqc7ykbNsPf47xTL4uuSxBcL",
  "key24": "2DewSS45VjiVjL5uZKucAL6TVs4UGpkqZn4KLwXkrmydDo2SKXDYqTbuQT1AXqvARA7Qgz24r9pk5u6vtLjAZjx4"
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
