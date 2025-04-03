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
    "3vaRDbf2S5VoKfu9cjRp5SPkJ5gPy72BtDSqYZRnZ9z1zmtfT6bbYAbMBpgaMD9JY3HGXmqnq6SH9nfRcY7Xa3y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ngyb5SUEiEqLPfRFofGEYTjKuqnTbLHhQkG9Sjtmz3RKKAf5LkDAzfi6kbtpHoEK5KecDV6A6t2W4uouCQomynk",
  "key1": "2u6sSb1BVnT8gx6pawMbt1JpsmCGbCBZXGtRUTUL9UiW7m3JqcRGShr2akEAdx3Phbo2Ak1qZuedyi3EGKELvq2t",
  "key2": "2jswp8NZhtx4jZMVbrGyuoKQtofgRwQFBEAKdcWx1PpneZYCXV15bk3Ft4BrNcvi8Si9wuc8zsPdxiWVCDHBYDP3",
  "key3": "5TCtZpN7hpoo3EqB18uiJxrcfaPyWga4VWM8qqUQvkbHFq7tdMLaRjTfuULB1RpHPZiZxaiYJa1MhaWmcRGKUrbp",
  "key4": "4uEdPBFpuVdhfqWVFxNu11oiHPC77KyRHgMxVK6e2ztQnFgCGFGFucETDU9c5ezy6YZSKrBmC5W1qoGbnvwVNyex",
  "key5": "4DWyX3RUKd1Wz8rsAS7pk677sbEyE1HP8gx8KeaBjfGvbCu66MJo76eyhBZ6giDJEieAvKgyc8kzcYkm15pMBJjW",
  "key6": "5XpBSetkLetPYB3Ui2VapBubErgyu3ogs1hhpwnTk9Hw2mJy9ZwEv8yap5ptkuHgLvz4o3tmG4CaJRqtxewpci32",
  "key7": "3QEjQ4JedArzTgQ7AfwSH9G6hzxQhwqoHndKLk7WQAwMXkoFL2sqtafhDGf8ZL1axmwUkc13fFGxmcsuBBtC9Uuc",
  "key8": "4vHqh1DBC7BA4EGdtH4ujtyGMNhMfQDjvnnfyq3wgPUsbQ23ofjpYZvALg9QepKkrTcsXXoPdzuu75tU9iGf47yb",
  "key9": "3Ayuw4nfjMkfaeNEEqRTCVE3bzXVUiJcX5QTnxiGgzMnbKyWsxVQA5hENAbPkUfBdxa5pNBS7QUQ2vRqHshPNeXC",
  "key10": "4vWJzoAdpb3RxjD2jcxNBHRMUFwpQWd7CvQFA3dZBSPA4hjfT9FbbJnE4vMMQDMCy2GBiSh8ihwRiqRoycUZAF6w",
  "key11": "3Amotx1Ban4Rx21oRqFnQ2KGG9WzWFCpFaww9daWS9Gu49Aq5ceUt3SsTyEtVLDdhFoScKoPWewkjftP9LH6TiFc",
  "key12": "54M9GbxeKTQoaV2qKEP8XrE2JUDDQbNWfvLCiwQfQnNmUwNziV8u7dQaud4q25DUXn5EA2GuLB3TDYaveHJurTuZ",
  "key13": "3vnXLYivPfuHdgNrB7bNjnBh9GmvzBiJaQR6gqc9zUdfo3GDwo9aS1wnfmLKDcXA1Kse8ktdwPrEji1F8EBZjGJq",
  "key14": "3jviHca7Nn5bLmei4UjYLtwfsNF3reyND4TaXLTsUeVjCm1X31MTkyMbNcmLuMwpP5sdv8Pn1wwgGXnrgYtZL2YQ",
  "key15": "oDugbN6MTjNiCJt4FFrT5Ma8ybD56g8uiERvxpf7RBi8ZNgbsqdey3ofM2oy4RzWPggQP6dHCPkJeKBLw1aa9m5",
  "key16": "5QSxbjtzBZc6jbBpa76W5sQRiCWo4yQRoGKuJ7UuQNzMq8CzRNuB1ywRxyvfdUVBSr6g24FX1Q2d5KB8oW6WCuW6",
  "key17": "guqsqcKat9ksVYztBqzbhdiotF8F2yivhRQHrLpVHDsoPDyX2Fg8Ka9EGKRvnJ75ARyqm5VSJmnfuynGwFucZeQ",
  "key18": "1SUp9RQ6xUFUDibGu3wGiLWycu15gNamVdnWdP7Wu1dMgjAf7NW6rX4dY8Y8WvCnEmheURkEzyvxyCv8qwH9JwZ",
  "key19": "2yPi6AHaqupEL2Y7kaTgZS6wsXW8hhBPRy8pztoGbUknG4VKhNR5zbYhrUF6ShiRRcigYC2i2LesPVS4iUS3KDD7",
  "key20": "4mmSfdSUak5c722iiPqsARTRqs6ij1PL9776RfAWsEdBnxyLEqT1zt8rjGC81eWov9CAE8buUUfXvhgbE3fUvmsb",
  "key21": "2DccWQb9Bn2ESxMtqveXk3m8bcqWF7M5VHg6kdLmBe22FA3Ci2r5evUrCZ5CozFJuddTZC4VRhgQjxCWgiGvNnbj",
  "key22": "4KqK8jfYCXVwiTEQ91uFWKibSSXv5g3ftiG9dz659keHzERNYGiveX2rzyjDTi5X9hDNdukRVVmg2xcZdJKBVUL",
  "key23": "3S4PcKQNkLf29CVv39Jyx6zrb7cUcP4d683Uj7WvMVQDmhZRRUGRP9NjBbevX4m86Qip3Yct7J7ubEE64qCqVbDG",
  "key24": "5fa3E6SsrBUBAMDZa83r67HfMmoektjK3Rqk33efHEgzyb6PRdXyBYLXQGmEzoj75Mh6RgN1oHS3vhG7nNKhirrs",
  "key25": "3XWQWHWKcsYzp5vgvaw44NZxkMc58vf7RaBbmKFQSQbwLf8sH8WFCgUrafFJqS18AidobLTGmWMF6yshGqerxMwJ",
  "key26": "4F8y8PgTyvbdtNohih3sMWDjMPQSaqcweCyeKAUcnoH9XQd1bRGAxZ86H3DXcdMs3qrqnwssSmYeeEjt1NUtir4U",
  "key27": "4MV8wMd36WPC9hve1mQDPcbMryoKuZaNBHRgC1QAyamq8NBvxzegUywsN42gpnjrwz98BK9FkvKMHmtcCcWbS1iw",
  "key28": "4i2g31yhaHYyhJuQZCyX7GKQj3ym2ErrvqwkDDLgvXctutczWGMG3DkTPdex2G6zESQb9WuvAPSR7qDjP2NcsFLs",
  "key29": "4GXsUDqDkNairHAHR2BKaVhughPq86s83FkTXpS3sG61QN6ZZHVXcXq8Ude4qqb2n3hDQQxkAazDJPjPDTPangum",
  "key30": "q1HeFP8aZmW7nvbJKm5KkGgVzYD43zGebtWstN7LJLrX3Ana7S1Niw7pETW6HqudZTJhVa6nDL2zzc8QKC8ciV7",
  "key31": "2tyFhWvZJpoBVFW1emX5HsBLMCgkXgDCmngzzWaNGcTJTRZx7TGnkUet2qzUENsJuyq4kx3X466EPUaeqfUg4zrE"
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
