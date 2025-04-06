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
    "31fSKwxZrKrgUuHCgLmEVhr2nBYMguPnocZhCbwT2QeD85XMpuBEWWfefjPEczkuDHeb1aUUJRJ1u8SpgjKa24QL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FAnERa8VBH7NVa3rqAXCsqQic9Swoqr9kG3Zm72F2ypvifSqrvr9bjW6MfTp7z6EaPDCYwfpJSmgZYoq5rAxgJF",
  "key1": "5Zmj1zzHs8SXKCstEVAEa8zoWMjZm2KMwMXrKdqkYXoZLGHnLqKdywqDFFqwy4DHvXoidTfD9TgH97uDKEphv9tv",
  "key2": "CPhAKMq7DqKECz3cAMK7N4yMxVEAh1cZRHzSuqWdJDdxTWUX7Cpfd1EQS3HGXnJ3dtA2Q8pp5q6N74TAKWQXcwJ",
  "key3": "3nQfj1CPu2QEeyz1xS1taqxVFT1UjZvkbZE8ABC5xYdCeg4uiuJz7KQCQpACmnjyNkANSmK93LousxQdUA3eVybN",
  "key4": "2i1cY96EChwFVZVTJ5BYic3ss7bYpBDJS2hn7GcZEWNmLBFkhx9R9gRaeEZKvLUU2gSDWsuWd5mhPGbAR2TRe5iw",
  "key5": "dkCtmNdNE2Bu1PGHhWfcWFg62zMuoZq9GjhEpDbVLQmDEPwRBuaV5ZTFZmupUeTaAfC4EHscsQTYm5AUvXqMmTF",
  "key6": "4bfyGHTYo7VZjbf7m3cX2FaZm8vtma6oVBm7snp7gTY4UitS58Rfd618zfd1KLoYNp9sHRco5G4iD52E9dV3CLJx",
  "key7": "2YzQDVHrSieQoQXY9MstMZdgB3jzm7bTg7dHy22UJJqZT1kCsfEULLDyUB3obRhThk3myukwMvcF3m7qmeggM1xX",
  "key8": "QZA44jCjSWLXGcedV2g46s39mfsZmGprEQ9UUCQmApzgfTu42vTQ6haCNN9snU3XMpF7DCcrMfHkRpJE9hWZv8a",
  "key9": "3pcpgowm8uJqDAQePEXsTgf6DazPHjmKRWuEg6w3voprTWDDWmEMdtFjwgBFuKtfyJEp6P1Zet8xhyCi4khm1HHR",
  "key10": "31PHYcticaszFUBCz7tWEpxuAMUSSDSQEbqyeASukrxij1U4HMWWDNTDfbHnKv36uKPu6gU26dYC1oAaunAJ4apo",
  "key11": "iYHhNJMgZFqbmBKNig4fj3gmuYuoFVTN79tRfeqEj1w24obREgv6FYkyfXjFDbDSajUBQ5KDdzNAQcU463EErfk",
  "key12": "5QoBom5rRz1q1QCaFDQahE3rbmJbWkWMuXwzKhmkxDDrsiZQVLNxe5MNrmDxD5PscJcmAU3C4Dv1GBHMg6fYoHmR",
  "key13": "545fjN9Spmhx2Dmytp6sia2mRh2r8gZsBEZ22WqPHaLShjZFFtjeGkYTvgFUpk9odfACDUqQd5vaLB4XRWtHsKDS",
  "key14": "4t5ybgazwexGjta3v5d3QYoTj3KpqELBpd6ZbC5NiGaeivU7pCcWdJRm11miafg6A5iVKnrxWXHoxPfHSLVJm8Fu",
  "key15": "3ixzsZSXs2g13RtTyoEBD9Gy33hcxmSmdGFUSS6eWuoPdtz4qJ42KyfJ1UzqPWw7UkJ9B6du7tVBgaqLpJTbE2AW",
  "key16": "44sBASyshgygqLR3YHwYBnQtD95p8TWK3wYQnE1EQueiaHZ8Sp9JaJMuyyvjZkSgJRzeqHSjRPYdaWKm4jU7h3Gz",
  "key17": "5yN5QxU6SLgs1p3U69DWH2vkenzxfHpA5zrbnkEQbiqmpEWfba8o1UbrTAhQktq8UZ24X64vCJvgu49BSWP3CF89",
  "key18": "5D9zR4gqxM51uXmiso9vKqETcrtnRL9QkbMhQVsAH6y3bumqkKzgKmzV9CNPuocxhKtogfMYBgWwk5yNXiu7dBnF",
  "key19": "5S7DKYZeGUjAJRA42xfqoUiXc6GBeXMEEtQCqKXnS4SzMJzXZ9U4tKAvytKbeESSvGfErCCTnuUrTCDf4XKHsp8u",
  "key20": "3JsrNV4UwNuwvCteXYWyuB9JGYeGUvy6bPhaVChh5iacnwnM82KjDPaxvbYmfFnwDfcFsbk9FUWzJ8NmY9YghHz8",
  "key21": "2xLN6Q6NYwedjeW5QCsATPULzZKfNcPNBuenDeSrmmpw41JoyBdfF6exsdhKWb6tExXJa1C3gcy1RfSm9FvkYcRa",
  "key22": "2HN3G2Z1KmgqsvF8TgVx9RnYWumFCQWJNgw6y625DZVGQr4h8bQYTr435n81hnniANm2UesTFQe1e3hiLZ9J72c9",
  "key23": "3dNqKwB8KFgYMbu3ZM3YPLCsHmLFHAxidTj6tcqtJYJkCZUBca54kCc6JLnZvvXJ3EMeHrwX78BKAdNZ8iDGPxzF",
  "key24": "5nzfFheP4Umfd2WfTV63jKHrSPogWNADttMVedxwVT8EfzBYmHMfMscsnCxQAqtwnexLS8i1QDnP4ufymWp59bN8",
  "key25": "3euDYkcyqUhrN1bEAAWkdyfsma5P2g6B7r2GJGQmkSY1PmE3dYAgvYYWuvcqoJAijMMsZiFi4oMNGN7ZdR7bVy4N",
  "key26": "5UkRhy6V2vhSgCS2UXHYR4o2yinyE17Z4SMUFAvxzgJgu7ZKbXuEcpQtpmCJQvVpGxsA1cVG9LNSaSeFbFm8Tdvw",
  "key27": "3mghPFwgZWrPNKg8yDhTAkmMQ5xhdn9S4amZoiyyZrGQ5VHeWETh3Gn9LPeM998w4dkwjQxNe7b4EWcbJcehsSWG",
  "key28": "5HeJxNvFKXxARZxq1JwSBsWPHakXT1JY3mZT4gkRRPeh9SGQ1qu9aPDdDNkvRzrDkFUSP8ncDhPpqs1bnA2YTZvn",
  "key29": "3pEX4PLqq94Wo3ixiTCWgTADZL3mxAVZ22XKUujkmjNtiPTV6KPxw5uy6FbQs8Ucpksn8GuGz9V1WKQm8AKF6ruH",
  "key30": "2nPMCgPnRMeFSHax4RnzcuHHFLEhwfRp3ZA52XLyahwi1d7CcLFFujtuXT96ShaCpkcwJ5uMi24897VXGfR7F4E8",
  "key31": "31367ZBhkYbsh1iHAJ38qXwzuN88DueSWCmNYRFtBHaird81bqzrcCFoD8rtojaXWamEKg2rfqhf19sHUTymdPbP",
  "key32": "4LU4JxP94aKrx95Fug3cy2KUB8DenmX22DV8FrCLdPLxvjwLSy1phuNwqcvyYkcaB5zicA8WghXR2ZRacdxGu9tx",
  "key33": "5sqnzferfuBWcMVL8XoiepcMBPu2unxb9ZNoLJP8YkAiBhmj2FmQej2HpFHKxBvDuLG6m97usX3cYTbFQFFRqpyN",
  "key34": "9rwHvMrKWxKG12eeWWkBnCGVhNZExDbFQeQDRTnFaRdUKhN12RjkmhUGt38h7ESyMUUPm89We4Lm3j8h31ETcSq",
  "key35": "4GjMb8T2eZJM6qnysG5FoCKQ1Nd3FHBjRQV55MBhi2Tak6YGCFWQb2owjgTBvUDCGu3bSqLVecQeerRaboSpuqpP",
  "key36": "4yPDVmfQ7qZQ37Cpgo53jK1pXLRVeFvzEco6DhrtbwJw5xVReBvt56reFDKYGNZEryVP1mA1xWRaTQqXaTgfc3un",
  "key37": "227aFpLRCJXcaeSx71Q8EALU5KcAMi9rtsYFq5r8kaP68HER14e6PZvZMj9LbKryP8DoTpZLwVw1KbC3jLMHcoFe",
  "key38": "3M8wpndAjq6ssFrCQw7Wx6q2WjucFgobpVsGsBrmU7GvZiVxJsuxd8qQe9BdUSeCrRq5ZL2TCuzWEziNMibRptZp",
  "key39": "35NiJGfjmH1yV5i228CnEVt45hNgE7qxZmrfqtvA9iEFvwihgH58dNnePwEA6gkvwL5EmuhRameh9VWMDzvCSL3n",
  "key40": "5AJhTaEuiMeUQAZtDfsuoyQYAxqX3SUR7vRdfgbSB98Pkg6vi1iYw3cdzqTU7HmeVcQYZMUSTb3b4UessodZeU8a",
  "key41": "wqx3DBoRv5soiSvEkz3dqUzuLyKKeC7i2aHpb7TG5KaQMnjXY3duKWendXfekjU2joNHUSZjjP4tKCMrP8G5Rbb",
  "key42": "3JusRKnPhjsX1rH5FPFm9twC6rxaEPF4ZQ45sNtHwdPuJT9vmqRFQFtnk3GS2LRyxLPAw2J5nAF4rAH7Soe6bE4j",
  "key43": "8GF2sn8JVyp6Ce7bay4UJ4tEMoWLa8kMcETWMw1PHSJTeMeSX2kqVKaost1tCaVkNCL9kaQzootmm7piqTxZKho",
  "key44": "4xfNdVVLr3boEsMBtDzv8aHeTtZYV9Pv2JrDQb7nte9Tww5Dy5K6kGgYSbpbL2qkdcducbjDWEQyJqYPLxcr8MGT",
  "key45": "4tkhZmvTBFzYUB1Ap91Btd7xoSVNQiL5NwZnMswGr21akwCykGZ5b8otPg3DnywGNGSQ155pPtQxMBjHQnCiXZ6f"
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
