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
    "2tVw4Eop7xeKji1FUp36UA8kpnGu3B1eHykggo7gBHqGP2gSG8pjbpwb9zp74vvCJP8CAZfRHDAFuiPF5F7XzqKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PRU5P48kvinWpHUDyEcCnbRPSTW6rDo8xNeqNdURFfDUtHbdxaef9BeMgDXcVi4dAZfkuTcuJ9Y8fDgbAZTNSYe",
  "key1": "4C8TsqgvKhMijv3nPMyaPToMyJ1GkgowAFd9C8JXYkjJCimY4Vkh6G3gKQ8wvWkQvkDcLXraWQy9tRRptAQTJjcG",
  "key2": "2C4nWtUF7HNhmJhsZuTGB7d6Tq2xMZmcmBBinjpqrUs4pZ2fJa8sTWM66jSrugDUJvSYH2dfZWeasWZD8kEwq8fb",
  "key3": "23nbnDkW2iUjoDef85K63TKkDNNq2HqtmCtarxsm5hjiPLwoTwTAfXu1HKn7bkYPKZnHcvfjRdtR2ZKGyV1ywJDR",
  "key4": "5kMWzocjrGtQrRqEjeZLWMT8AWMowgZs3FTUV2MDjaqZyqBkVCBrzokAWdV1VVjsAjAKBzUPka9nZhDDoZGZF5EZ",
  "key5": "5izFipjrLUzNvdR86aDxYLvsVsho4at67RxV8bL5gqhU9fSdgnBvUvZtsfDn6bAoCp8GGHz8teTJoQPyH1cTGtM2",
  "key6": "3FSC3yE6PNUawyrJr8bNJuofJexidc3gBT6U7EZARrHE6UbUGw5up8rgM39zxWS4PJTUkwgLj4UvgCGhLpC7usaH",
  "key7": "3P23eypsTuGyof8VDQStQaU2n1EbKDaKayJQTEB2yVPYPrz1sgwuxNUg9SzFB1fba9uJVW6C84SkBFMrPZy2gjkg",
  "key8": "24gv6Yad7ibdZAJMogpay3hBjNK7i9KMmFSidS4ZfEkSd7hujfqMb1iNmCXrEFKe4KMBEWJDqv33xMaBGRcyWbNJ",
  "key9": "5PCcYS931GqEKpeDREBwjYNnAfYXu5xPDKvQ4Ko9ymo9tpFWPzme86yaS6egwrHT3A2XuC8CQSkPovnPgdesEdho",
  "key10": "2ySNTYykobRUjzfpPFE3yNHp58v6uZ4mzYQC9zBHdZH49Dd2CughS2ZuU6j1yh94gqzFCDHLpVtZTphs6NZwboyR",
  "key11": "41DzKjvjDWym21QsTTGBcdyuZnVPrHFHkRhBcNNX2RyDy8QYfTeoWrQATf9bkCNukwkY4j5Q5qevVbr5K6zLmsy7",
  "key12": "3bS8pdtWEf83exMG5CikFQjfEuiAUVYMyoTxqY71YBXBKaucdrq8tZzVzziws1fHADiZVkpxDRMnWFu6qLBqqgxR",
  "key13": "UJfVkfgNqm8oup6cf9ZequSM5UhAU5XJgwjxAyXfPBJ39EfkWHq2UuRcN2ZhK2bHaWhSbN75CUKcLvguZzVMUsV",
  "key14": "enaz9Wd3MqWRdckze91cbsXyWkL4u6ak9oqBkHD7KDJjTX8JJRygtwD7kzeefMxtwJ4qAr22vfhaa69Jfh3MYFd",
  "key15": "5ZCn22b4NMuHDnvzhDa6LS8DCxq48rcMf1YGqkW31t2jjD6MYQbWx9RzBzDXeD8LE8Net2mziH4JY55TVn5tXYEd",
  "key16": "WX2HnJon5cV2BEPGUbrYAJAWWpWtvrccAEyp9gevx1m382XFfSwux4f6NeSPPyVyWZ3vzefup4tfY15fTcxCK2P",
  "key17": "4ZnbajwP89VsjJnNXEUiHacNU8XMCRnYxCwVpkWnKKM2vywAyWB3FptRVeR1y825G5KLhMycVo1QdTA22zeRfm54",
  "key18": "5U8m4fTPjW86ukK7V4bDiduGXnwujbV4JeRw3weaTeCemxFeZSmDZCbHSEW2yBSkXNfncFqv9ucAc2D6jhpccCTR",
  "key19": "65WLKtLvejSKcGVe8bx4n8ptnnMJDtDHuqFGnKaL6zi4Pa4cbFTnssrQP1FCNKX6KtxY7uWmtYeBJoStGJY6u3Bc",
  "key20": "5EBKoAFBDTfEmtTcFDF6m8H3jHxow52V6FvJ9xHKMPe9WQoZAckbyoySVwEY2agofjEUMdF7tXmX3kfsnPzfTPAi",
  "key21": "2JNS17vrczTQ5hRCU2VYpF2QE4VWjhWiV54QtA9536uR472z4oSLj8Z4TGBHKFARiqjbkYpBHAgC3tF4kdAr9o9P",
  "key22": "GuLKcpZnGz35L96gULZJ9hR1BxhoPQtWvudbGezh5WmVqpVqU6QAeavXAacsqxHQ9Etd1tAV1ZxRXpGKaexjsnK",
  "key23": "54rjL112WktGECHEBSaWBtAbd6eCn5FU4ZypZpfnNrkNWMHneg2x6fBqTM8BAQwd2h2TvLbndDV7um2qU6Sy6Lkw",
  "key24": "5JuvudbNQTzMpa4nAmvRuQPVkbXWHpp1vEvaV3JbWC3bsGBGp2h2hFU3heUiuUYD5K9HifeP3ovqU5EKBUH4FKM",
  "key25": "5numSq3JKgKr6HV18r6i6zQwrJa68BpMWBzYWSHZZUM67mxRJss4BKqdspPbvU9F1QsvUnc1XrxWTDW9cMdubWxJ",
  "key26": "5izVk7op5YunZ21tMEjybRTPhd1GKUsrz6KaBFkaHNSXcVjmEXDhSECzBVDDASkcRykBpKT4WiGmuAaSLxkJ8Czp",
  "key27": "4PbhnWStuS87mRy6kZL2gYBhBBamzd1K8umAmwkCMYy2wqEm1nBVusANFsetteqt3uNLQGincSWGSQ192dJNwHG3",
  "key28": "4FtjnrHjs3PJekAaTX444TLauY9vQBmvugH3s1FzXpEkpRXCPkUQfoBhcdkm2B3pwLxuSQzxH7jXi2NE5LTRpnmp",
  "key29": "3Ay5WhSgyAVCDsr4YFNw2SnzEyraWskU1Rrt2LkwYiJaLMk1QbnkB1N5M894agjroP3u4QS3XWyueoT4DddK5o3E",
  "key30": "svagvpy8rJQVVFPQBMub5PfYJRhbQcXwrjvBXqZGQqPQdLd36Pka8F1qLg146X6qN3x1sTvncKBkRSyYA8XJBpt",
  "key31": "2h2WTu9LCzFe8Wy2LHXYf2KXBnndd3SPBgJ9nk4DqxBvQcaDSSzX1FzDPZnXm3A14EwziX9pr4B5tic8JsALjEcY",
  "key32": "5tR9KAXech5gCudkuW2zEtx9uLFYRXnwMS1fWwH3FnNWP6mAq7nseUX2Wr1bq2edfuV5woPsXKrDAYjiDfvYsZUY",
  "key33": "3ZNDCrLQio2mfy2Zk3tWwW6ZPM1U3h8P49XEoat4bgSvoaG2uTDKKRxzvkxcVkDtwpuvG9Fsgj7HiyQehtF6rYp",
  "key34": "6p1Ew5hxJJvj57CW25sxbKmqb8hRtCnN6rH82uNkRLK1iV2Fk9a4BnTHWkfjHzF6KWNwiav9ApQTR5iAxZeYaEZ",
  "key35": "31T9R9i3CCneJfFSA2E1euyDXzAwrjgYdUbRuBtfov7bM4157u5GotKrkTPh7zpSquaBcwARF8Ti3enTEzcksUPM",
  "key36": "5XGCJ3nhaaagj5kEMSXjmpjaQYMoKGDKNgtEwYL9wSVSJ8TgyKdhSh3xR3oADuADkfXcN9ePWiFWsVRD5YKciYZx",
  "key37": "3AAFGGqr2dgds8DUbkCY1wg3jEVFDgG7HDb8C7qnAXvtFFnXrRjneNwqJun32zcGAMHhSWmu4iioYfCJJWqzvySf",
  "key38": "5N9GVwiDdnm5hKX8Lr1AVgCqd4DLfemQY8LUM96JzD12AWoYBHqCKaLuZSUMiaJoEr5jA3cqzdF7LrMJ6VHiA3C4",
  "key39": "4YpFJJDQCREfEJGS1YBSnRpxMMNoFFqkePhkvgwgcJWsrgmGXXJvuvrjN8FpgKYQhwXBm9NiH1t2ggVzGufXyi4i",
  "key40": "2NLLZe5QeYKaepteLxPjAwr9s6UDGKqwhYmgXPYCLMgkgPgFbKM84GorPbeBbLsgT3jdtUo8xiZfuVXEtjn9YfhS",
  "key41": "59zHaz4dJeJ2xEq5S1bp8oTFVDs5zYPiZJ4q1NWMNTk1s1dkTUvRaNwSru8oqkebzSpQhZqP3rEgZiRRyryVRQD5",
  "key42": "2LMonTtnz4ykvRTgH8qt23WCYNL5tq2Tue9AjuD7cnQQKyYRrcuTPNceyYgicHvvtiqbxeUN87eUqwf4BhTJ2ooE",
  "key43": "3e1254FH7SVa9Sw9r6AgthuUdkgfDYHf6afeA8pkSTVixhVLcnEijPEX3xWabT8vnMWYbWAFVUMb2gdRhgg7JBpu",
  "key44": "55T9rU9dVeEbv6heaEiWqFKhJzF77CHFvnUUxcmmkcQKtw15sBXLPyq6bgHZsfg65atHxYsKDK4zJk6MfXmqauev",
  "key45": "3eySrHe4atyfeLun2T13THJ8Dr1m4csNzTTcSJFDpY1MeMXupKLTicQZoAsPefzX9WaE2LT2qJd7TSynHhWMmJk6",
  "key46": "2TFRp9QaTDJMc8tVKnWXL1dhXWSgFSt9gPLNM8md82trJQ5hEx9D3UKmaL2yZP5zDF53dNe8LCqEQyVRgkERmVFm",
  "key47": "3uBix1KRyhixgkhgPFcvCoW3mai4N9pdKde3vRMJtCxzG6isUhvFPG2QsrD7Bca7DpdPGCfmVDxpDa9Wfs1DLphA",
  "key48": "63uchXG3muoZka7Qatzgq986jMr6gQDHhb7u6p41uUJzQt6uuGdVCcdqwGUGL5gt7RV3rBC8Ufrj8xuSRUQNJFfh"
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
