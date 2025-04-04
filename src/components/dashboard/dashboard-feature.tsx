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
    "2iuRhdwMrsf1XWx92dbVQtWzvYURGKu6Q5L7SVYch4zKUerNY5RB8W8gwzJQG7i3Lk1cb7FYH9aphRG1CpT2PdjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5naKyxcA7r2ik4TPyMgs6JMJc7bGmPHUCt6FUuJ6pdWw26NNi31nD7osQBnmaLendRBoYufdcKisqB4ztB2Y433U",
  "key1": "2oAeHt9gyxfzpWCRgn3L9aNRtUdZLcgi42S8dvZXR2PguCPqvpzGbowccPmxLNQJCU77HySZjtxcG9ScnWQA6vCf",
  "key2": "4FXBuuA2uABP8xGvntMAoLHvf4vB7v7SdkduHtRuKtpziSQ9HvX3nhueJArypcftfDcCrSaPx2eoVew8kGpgGZc8",
  "key3": "2cq28Wdvt7MvogNxehE6c5k9q7AhH9m5DabBmEoMcn33CLNeE3tADgrkTrhXFgg47Y38hJRJo6MDSDy32acCaf9c",
  "key4": "3sC8yUXuvKS4gDD3k58ZGqMStSfdqiDVMPqZx119HyWcftT8XMbWpBhxTuAiNdDyTtYAzau7RjrsTBfuzD9KnzaM",
  "key5": "3Tb5A3R6t1VHf9eyzvis9ETyNVfsSmiKGxqXR95TzEURNRs5D8XrFPdoKjngfMoQn1Vqv7yL5VNhdzgF1q7QTkVM",
  "key6": "4zoADjRYqKVgGgEv99oxFcTWT9u9fR91z4TZHJRR35HaXmkF9qga8AFtnhMEXq6G5Jc19PBuoWMWgEDq1AShjGEc",
  "key7": "4rLqmPPVu1QYoCGWEr9uHu1CUcnxreRgxxLZiyN5ZVAq9KehgPhc5TTm9yWPKRR6htcq34KQPuYCyk7hrnLF3wok",
  "key8": "3txC2RP1YeZk135ddvw62yNWYf9c6zpb5Z3jUzPifLxotrssHAoqNnvdvpa4iusSzM7mnHgFNJdpCZVyR1VANmAs",
  "key9": "5UopRWSHyo7hq9425B2fEttxtZ21w39UykY7BYXwTQy2GguEADBeGRSzz764MQSh13hcfi6pBNuqYppe1D6U9Jb8",
  "key10": "4doQj5vK7tCHcGgJ3ue8EJNJcP165mffMTQvM33KMiidX8QVZuNxRa7shwMvXGZ6N8qnKWx6M69VZa6cAw9P1LUS",
  "key11": "2GU2FKn6J4cKHMus7dTggJjyPM3qLmTc8CHiYQrDnoWeW2cQ4yKfgoVFYnLmD6uEb7KzFkfYcgDfEj3o36fYwU93",
  "key12": "3t6rVH4ejKd4KaAWHNasm9o7YiBGoypHdn4Emk9hBpCtLiqTptUuf2kCw5cMU2cphPkeaBzRHWRdbVNdG5XY4uuz",
  "key13": "657GMbUKNKUzMqFYCuaWYcj2ZDfkqi91ZBE5gdXvwxTMrcf11n7sU2gNc5ptSt3rbZb9EN868u4Pw4dkfvxRafxL",
  "key14": "3Rbd1W8b1oncu4Xpi9Vi9unjdpJWzmQ7sCMsU14PrTTJmzm5dfYxhUvy1kmsMPMg8mejWisddsTfTsBibErphRLo",
  "key15": "49yoBcZdhZjLcyCGQBa9xYuaRMteDhyCcHHgAfdxuaf9ECs3WLByuezNJRY617W8J9i9gnBe56TmUFvpDTpbqJ3u",
  "key16": "3SwQSBk6EMVqzVG3johHxCKByqLaHVqcfyfN3gnis9iq8em5UfTZmswj99Z9hNxdWB8KM8pQ3iazNX98ZDkeijHm",
  "key17": "4dhXfHH61ZWyHWvNy1ryyfw8pToPUx6zWW4e92rtnyX1Q4DnBBExHTEHaLLMtuoacNrcSNyPSp3DNwbrC3Vskc7T",
  "key18": "5vajpCxVuJWpqWW2EWAiTdsudk41yDY4YBiR11gMvUtTDYyfiye4GneJo1dpTXg9CU9pbaPA74iae7YCnUBeUJ8D",
  "key19": "3kgPdX97RrM9sHxJRNiBvqMAfUD8y43r7VsRBn5Dcr2etUgXgedLdjjprcNRKUpEgcCTNCbvBtZxNEteSGjGHC9x",
  "key20": "2UgvupB8o8L1DgQaSMb9oYPBMasW3XUiR8sNgj4cQwerFcCfyybiFa2nL4PRNJ5DeGtE2ATM1qmNTgQisCy5SZS2",
  "key21": "5q3P8iVwdZvx9CEnNZxG1YNm8ZvcDGWZ9Q49eP6NiW6DPfRidtbgfFXzC5UucrGegzEzCMunJ6Z3ZcrYiG1pp7qF",
  "key22": "Gf4bCNR5inLxLVbNSB4935QUKtxpQw7Z1ioB2KmTVMPVWsAEb4moAykbFXYWME1DWeN2jduwNynPRgDwVDTXkXB",
  "key23": "3amojXMEapzgWsrn7RSeAQqYqGqa6TbmDudnNPsL5BwwUuHiyejbwTqnUYCjuSEE93npFqvQ7KVE4GRuHDyNDQ3w",
  "key24": "Qfxr412ZCUHhq5zBpFYkPok6bH2m1EEDbN2o8K92Yg2H2yiQ675RQtgAZKzGREK7TxJA2May4BwfVzajf1ejCzC",
  "key25": "5nFGREyKy1eRJ1WHWnJV76T6HDEvVpDJamGRQvzsxLJWxxZTYRLgcvEGm4jozFDz7oZkbtw2wrE4sGjWLMxjz8KA",
  "key26": "JbsfC92iPfATStFih2fBXk5hQDsYDuhXi65VuFekhJvQEhWZGSZLKMVb4Fx6JjA9vg2uhWXx48Da5wtuWCwRi2P",
  "key27": "5CD74FYXpV3PPaZsas6P9QRDm2mBpzsbNrm71AmDTX3Rm38mehwsUpTczbWEprV2Vazic1PB9k4xGZZACmfCjTnu",
  "key28": "5sPKu9ktiRqsS3CZuydNvjEzd4e2oL74qtoJti2EwbgBQeVk5pEmGbhmXu8stUwbM5Js6bQDKse1TnFbSxDZn3rg",
  "key29": "5kmnHer1CQEBaNuJYjJvHxybgcaJJpzuBrfnXhUswSKw6vKGoMBvCayapBLAkXppQBB6P55x53vPvfKDjv2WLf48",
  "key30": "3EiUappRDVVxWwBq65rFAkC4e6wpXSHtZFeRsuAcn33tbq6RxdoHFNbzLRWrxNH9R6asaTno4NmHpYJrDTToPGFz",
  "key31": "5gtWZ6ig8SvRf7knMyKjHP8PyPrfeSsMqdv7pMXLHAoGHsSxoFuov7WmAngo4LWbhHzGA6btefiMhBA6o5n5y7Ao",
  "key32": "NWWUb4ooD1GkGRxoFXTem3WNaok5Y9DMynFpiKD1sNpPSdmxbpLuZyHrNDN93s1KtRB8JHUKkofsxVtmcbi3v2F",
  "key33": "3LhLb9G8ZEniFbXbqHWLfuCtAzeesXjuToK1i6C63FSWYdU82YawReB78uWFn9VQhF92UzU6UW9w2zAvomyj1GsD",
  "key34": "31B7mycWqVFKtjSNrH6bUTLmVjmxEVG3XRSSFzHzbDvhyWFv5DLiRYFMvoJ94NGbY2YMQWhWSaEHbPbm34D1pwwd"
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
