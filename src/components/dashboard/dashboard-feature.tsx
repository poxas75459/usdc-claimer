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
    "4AmRPSxs2Vc79d4ADpbkeHvq4oUXZHQCpUpYbz5CBmfWpNpgaYo4Uvf3LrH5UEe8pRmTwZQH33JJYdop7gtGtZcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "caUHYNMmyCw5EW3TAZFRLurNiaTtxZJ8fbEgkAhEfegqxad1q8BSKiAodZp417ooqYThZxDu3yfGYiTLg2zhuUe",
  "key1": "44nNJCpqH3zheFo59gwWyCTdXR2g1S1JuCmM6zq8Nm34Twpo8arRX9yjHT55whEoHiaqzNAYB44TajyYRUe3YWa5",
  "key2": "32EnSPfcBRPFeuDtm5uZkK9Qt85rRSpi4rGaDgfuiSfjzdCGMHaXdSGTWFUWJZxLoLrxe3uHWzeTSNywQasS6YXw",
  "key3": "2my77AbC81VczopSEFxgNwnJdHHmgCcQyFemSxTyiZnbH5z6BFbFNsFnm9jbPdvu1x38xHZptF7RYj1QqM6iRkSz",
  "key4": "tkjF8UsFQSHhH2Uc2vyMPfcosiJbFtJ3jwC5WBu3b7hFG76oR2SRTtSP77XAMakdmw4tLy47sx3ewjch3W8YtEY",
  "key5": "4w865oNPKrTWvehp2Q418zrjJc9W41hvjbEwWhaZY7D4ZrrHkibqANrtFQQfAfQQxLGsjza4r3YwDVADvMUKkfAB",
  "key6": "r8kpEtLpVR68UvCCMXUXcfF3XGAsM7gyjoR95zJ2Qw4TSxwPZp1Mhmgs4s926nFvgEJWKCPhNRWmXEbcLugttRM",
  "key7": "46CAJ7s3A4PJzGjcmoobVsc7V2hHR4EBsisBpBYTAi5Yr2KiAwK7w6ZuMbLjNUTY2CoqFEsvDod99eWEmY499j4C",
  "key8": "61JrPTtSxyvTZMNWNzUoX4FfgXxV85KV3KfEUb3zkD7nFeqQpBmhy8tP12fuBrX3rHR2417disZPCFvkrxsqhq2d",
  "key9": "5LrSXZwqrKMb4YNrtcPUKwWL2oCd7C6uQmHHnCr9w3XtYRuhsmUQThjEEe4VHasDq9ccb4f8JarW2jYhfmcUqfK1",
  "key10": "UAmEAGx1GXzRCiky7e4FFok81bQCBrneQL4y7gFqxt79mshKZHBJVnHJdg25hmviK9LkLZyKrFCiPYWbf4E2AzY",
  "key11": "2jvRYG3NZ8TffPe7seJBVeU4btKm8SjtkW9hevVpoZavzeDYtiGXjppBZL1U6vuAfbe6ysztyFci8HYGePDTWsQV",
  "key12": "3HutKdwm7XuNgooZJ9kuLR6Dqq9owQgosTEkpnPrh6QswxnMpvsyfq9fEJheEe4VqZE2GN94JcuDr7KugrDGUBfH",
  "key13": "36DKGKxSJ4YpLt8vXb1vAriqL14isQqfqFh3R1cymXLsHonryezSCrvPkvJpcyRULLfPSP8bMLbWzpsyd6RRBqJs",
  "key14": "2XfrCq4o4GiowNJZVFWfSJJiPGz2jD1TNxwo4yJ2xLT1cwiFskW2G9Bdo3YiKMpqcvkEfm8ceUAq4Eq9FcgRNgDq",
  "key15": "4o9gtWL8QMhbAG3zPUqqBzbW3KyvWrvQpHQi1HZSX9utR9Qm7e8j5WaWfwJDdKDGGmtgSbseQFZVyi5STvNsyPqu",
  "key16": "qnLcbWN2L8QyHvfnasCb8jLERuQT6rVYpHhxyVZVwHsbsA4LBEkwdt759JRmjGRfQ2o5V2ukAbUCz3axPtGuKzx",
  "key17": "c6DFq9phruKj7rXatqLa6Xa93yxjG1BsfVcSzK4rxeDYFShK7iveAypUxXhJK3pvWQwgc9PEBJfZfXNE9yRcJAo",
  "key18": "4t3tudn1mC6rVsc1EmFbgPSKbm454VXvWYwkRU3SLppVwytZ4ABsEhDSGdfqecv8qRpWpC3p8euPm6NZBVQtTenY",
  "key19": "894439Bnibd4EEfdH67W12mYb1PFpPTB8oajQbsgj5E9k2eT5tmjpHMcQ88FbTzDRdALWAeHtJpW5Woaj1Tue8e",
  "key20": "3aTngXFBVN2qHpVi7eoBHaBfqQEobMQDgDCmy8FMRRy1LRPEW1DLUYwVRFGaX7UdRcsvjkTC9qi7RbMoyEzdkjty",
  "key21": "2DTacKKUvc1AA5564rVkuo9WZHcLjroN7sLQBThdoWR2KEr1YUwGjKW3kZviyC3ADZMBoDb2Pt9vohxg7bEu3xMY",
  "key22": "4ePMbHt2xQXjG6AMt29R5yJFgbeqYEmTogmUCQwsdcY2hKDWxJfTwyWyqpVNvmHE88MFnSuqpNTkwTnYr2fiEiH",
  "key23": "2DDA8VsU6KqBax6Gd9oM5hsrSjoPDRDWyA3MncUoY11tceuowNHzdK1h4bEQrBSwqnMfymp7QCm8z2LJmhPxiAW7",
  "key24": "4uqKvjfTgn4ikpv25VTKPMYRum9JHB5vLcGV6Fwo1EdJAVzLJKQcK2z8CRk2a7vmgXuNvhN4Z3UtPgZy6gNQLpGu",
  "key25": "4ZMM1qx1KpmcfuoAJSqEQ3sQrrG7LNGb6TopjLgioKsw2AKAgaqi5cE8V5cs3DVk5c4rmAEzx7uaTYjyVEQ2uKNe",
  "key26": "7QXeBgNmH7QeDQLbsd7arRN67UE4biATPtx1o3h23VJyaHVLoxkmAiyGxo7pYwYyAceWhmDk4xB6opcrT5MRRRD",
  "key27": "xeg9hrpYhsanza2wpsmz8wSQ47Ubmm7dieRa17QB6Epd6gepsUJ8q5sXraAN2ESryJYKikWu4ZPX5DRdGnT5kqD",
  "key28": "angamy58E7figigFwBM82wn5o2t6r1UophSfvkdyCkwEnyxovPwvB5RKVQvvJvz3a6ncr4mH3pX6zdgqquy9Q9S",
  "key29": "39SQrzdLaXnFwzBQQYCWJbSVGUQQjRQFrp8z61kn3TkNP53Xdq4aMaMNd7t2zz4q7BRYLGHFV9PVae7jpkvfWLnN",
  "key30": "3cfwPKnYdn8rLiTn2PNL8YxLVZk9TrVDzWzkbXeFSq7tjWnZ6FRmxVCV7HoJZtjftVuxjUZR6nEYZGmZ5ZicdPnm",
  "key31": "3YcjPVCwTLqLWRde7v5avbcYiHR1HthNDwin84jxaHnCxs3i68XeE7US2XbT1k4S7JgkRGQq5Py2KT3o2pZXtahW",
  "key32": "389Mi7k1rNf7KQrZD1DYrxKgNLt1PTwbXkrLqymJz2MR5C9wnnaeiwogjn3bXa39HYKDxybZ1wSqbSX7opcLAwfY",
  "key33": "2DkXVowwW6bTqqLWGb8Psjndw1tNMftFNr6qeGGTC1oZgGNG8Ntdrpkj4M9QZHh114XWbEEia5yK2gxPSpDsWdNt",
  "key34": "433Pwvupgn1JWHdmqVEomcyNoAzK3WLxe5nQykJ6XbemPQazg77hTmLERaHRG78jduuKFdrGPft9JEYDaLoz97AV",
  "key35": "2LHDx85H7t32kXwoFtaz1Y1WH15buzn1mev1g6xJtxdC3z7YrbboVwssf4y7H8M1aPsP6ATKymjyWPqafSWqikyp",
  "key36": "28xyjnU8Bom6XyYBabxFiFtbwCkckZtgYiQA8nB3s65f1r2bfhsKoxWaFNkTBX8TUqEnGCvAsWuoRNmP6kdGJwHq",
  "key37": "3N7yoU2FpRWAbauNVgJDM7DuCBqnbZLd94zXqkdXKYYFo8ahpLjNp8nnyQ87JbephBR7Ybqk2VD3ZFPNSMYJFuLN",
  "key38": "5D5ZSzKHj7FqnoLbYcMEJxyrzj99m9QTFTPbAZ2THzJkwNmZfp2tJyzaAx7ARPES861TrwAmvt6Hi6MgU9f6grex",
  "key39": "gzkWfzwpA4u7xoX21bTXsHFtfhj6GW8n1uoXhasF9MA4nJjcxSSE76A4o1xFHnyR9Lj7Y3ZjU75ctEcwncCHepU",
  "key40": "3kX48v3iD6TMuQBTviZJn989wH8obfu8pecvgZGQZ9q4d3ZSC8L7NgBndwSJavMxDaenwscBhw8fHBxMejyMNTYn",
  "key41": "67BtzgjaF8ReKurbrsTu8Rsfy3SupstsB1odrGzBYZ3foDXJ5BybyoAiET4NspgfJ6yCDhcZCduuUw3LFKqfmjiP",
  "key42": "5gzDt7tpuCWz9fn6egQNe9JJPJne5CHSqgGn7hoGSwyyeoPpNmcQDmsazLGpsUjytRDME4aeVvPTVfmkgdww9EeZ",
  "key43": "2Pvh6xW8y9zSRKfPwNrLNsfAjL6hdZC5Ag2KrctuQG8nJDpCs3Erf8aeuxEoghykd4rWK9YnLTTwbRs5zhwJNQtZ",
  "key44": "2Z4NnTsm9BVMFbaYwzv4MmvmrPNMz3RJGMJy6THS6weqWbhFeURN5GkxVHe67kkUVj8TfvPLNw1zNA9XWNqu3eY3",
  "key45": "4SX3sHie6rYMRFwT5ZKpg1C7s7k7RHeAGBsCFqeA9Dx1hZbdactPdZtZBEeoUFtD6QUczJwCSG9KDi7V4otNdcgb"
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
