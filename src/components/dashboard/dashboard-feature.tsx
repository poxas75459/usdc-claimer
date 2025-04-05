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
    "3fkqeWtYpwfaxgKJWUBoTpxw4yrJvwPwPR9BQwpSDfXnAnbdF9f5zAcb6g1hkdTvvSoQgJP7VKcMi1EAhVhtWua4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59tWPm1vMNDKHXFg6jZQrBsWwkzibZ6bZVBWgMXC2arwg3ANmm36BgAPcMnuhmSbV1ycYJXgiQvDtJ3NZ6zmvuNn",
  "key1": "39swyvsudCJJHyciCS9Up6vGZjg3YB8XqWUUctGnPgYReT2ahqrUqT5721SCV5qpFhVPW33H4fRePKVar3xywhS9",
  "key2": "iNSy3zmL299p9TxjhuRC8AGXcsGyeHJ4WegrJYBuPERaBGJPYvisfsTKHGy6eVZhn7rhvUazAe1f8dwFFGbb3if",
  "key3": "4edw1JaUGU6hoyJ1E5dEgqZqbBcfiZmFSFwZRUppbzdGZw5V79tcsDXgnoC6JAQT7rVQAHrijNPEEeBesRmiFZRb",
  "key4": "42ezmXf1Eu1PiPUf5sadtnmAKBxaRLqaaeVhT5X9TsCkeWyvcbHzLaxu34rYQJe4x1xeocv1CXzhJduguLKgPT6C",
  "key5": "BfGVH3G4NVAozoYjjfi3nrEHoefAQ64Vw7CAodLnhKqJXeg9aBNKe2gL8cmCdF1MzFp6h1va5MYhw3Ho1y4WhWe",
  "key6": "4vcgwAyn9s9eye6ibA8UkaVXKvD2NB4pAzSkoP4dSzcZtS91vspa3uTDruc1YSxDaN2LCQBmxmDLjgEWXXYwdGKF",
  "key7": "4HX3vzGFCHocgLrmXWfFSm3P58qtbSBch51ksTKYmCHjbjMSY6tHFm3Gfy3boPvfiE3D1HBuhT6MDFVbgkkTPB33",
  "key8": "4P5Wxdaxw97jmrev1q1qRjHCYkRh94bxSseK8mWWUTqzjwKa7EsfY5yZNAXkVyWWgbB7SGvsqpkFKYsQhskUwikn",
  "key9": "QCcmPGBAUr8GFyMPtT8G7VtKxs4f5ETsjdY5WsUtTWD7Pt4sXH8YHijJYUPyTWNf3gwbVLBtjUNu5wLbo6d8tAy",
  "key10": "4A2XhWVqi4y3fk3ftiYMDC81uZAm8GCHMi7x5PK9JpSU722CtxPMkcnACzWTxEYFYiFYBCafCj4HSbsuH4GTYRqe",
  "key11": "3eS9QYKj7EvdUxAiuzAjpvrCAeaziUrVyWd3tc3JzEjZZkE9HUHnnRmx62ViPX3Q2EkWNBKyGTVWySZWh7rZkHjj",
  "key12": "2McqnpQebHy6waNkidEyj5z1CTrjWfpuo976q3Ax1zH9bzg6J6FzYTdg5zHP9CCyM2zovtvpfFoWkX2fmL65eMWW",
  "key13": "5YiWvwFgGRATr3ZuXwYab14MVbYnm4cYHG5ryYdW781pyF9ro8XeMADcZHKB5enJvP7hmVoUijmSVjcQ9tUVwTM8",
  "key14": "273KTvW5rBgNrqtnukLqRggDtNP8BFwFfs9CX7buS7315NaCmgUdTBxN9kQJeAy97bG3AE985DvhwmDrQA9MUP1T",
  "key15": "4d5mAEgUZmP1ktCyiFToa4haf1s6rnUv7KVHvQQauXoE86hzUmaocq2jVdJutDBE461BPKz39EX9vw4iXizEKEVT",
  "key16": "2LLMmyvRTU4kZ7RxUKpCaupnQ852gY9EgpbihDnfNgDBXHPtyRfFeTBeqVkf6pJKTTs8mJkqnbbfUaroQHoxAdDP",
  "key17": "3WG7R7TCVGNPMCXQXMVNAS9QpJbxFbEptw3V3gs99eHhVAikPWhKakuUDUDEVFU2Nji5wzKf1cDGZc9KWuLGG2ds",
  "key18": "tKZbE7yR2a4hGU5JZrGtmisGcWCXTesmYzUWQctpyKRwgYwgEUDzKoM5pueYJP7pUTuUDMnahgYdhAR22nMpiYn",
  "key19": "ToT5stCgv24tiAMkuBLGogEytQHW1CC7EiejPCgzdvk7LNte6WwZF7wVS6jqGHBv8xD2X7Zj4r3gvqaYuPStTbc",
  "key20": "5uNctRCF9gRMZrQ9PnbVcHdXUga2Y13mcwFG81Pmb5hx8wHvpi1daQx84PiVNBbwvCLZ2Acfm2Sr3y3wSi5DgvXg",
  "key21": "3wZxUFREwmdgh7EBXLGrK6SFSt91h7iGWPwDypd2fNfJPpULEV3BbKJL2tvDZ5HV6CyXUEquQy6L3owLvrNQ1BDY",
  "key22": "4k91jEd9cfumJbzqS8GANnqg48CDQcDBZJrdcWndZrq2cMSsukabMoQTM3QXZgnGtLDBrEGb9aDCDqUzvatojdM9",
  "key23": "3Ltb3FzYK67128QH886YBGUkm39c4jGycan6Fse52bxcHMynZkLXDZZP7gmP2bSrrzW7pjjPXBRZk1ibgAcVoLRJ",
  "key24": "4UcUyNR8SeZ5eoJFXm8ZwUFTf5VuJP3Bc8QNDo6RSSdYH7G57ifECWmqdaVfCPFkYkYbTYq6xMQUE9vehsHACUsH",
  "key25": "47b3iV4atRVeGJCkpgt88J7HSrbznrt74TxWWh15sq5ULqjD38fWsWPEZJhPUhSd6JE7cnrs6jFR8aX7pMHrhsCp",
  "key26": "5HSxqwm69HgEGE5Z9So2wcHtkGn6Zd1bEPZX3Yr8K9d6SAX95x3nrY6Gpv7qsdKFNGwQ7BQyELkCqAd2wrGefhzw",
  "key27": "4QWcapmKBqYZ1BtQsPhkz3Gd9RAbK8VKJdwzGgRuhEDDtVwJ5e7iMmMA6esFWECouPTnsVWuXNjzthMq5ry4vz5M",
  "key28": "4dQuyx8eTdxQuSbWLVMn7cyo7usxrkeXsX6fCmNGKhCY9Pp3SHPQtmbxhPY8jxZxo363ipPevVFT6HbygnU1M9a4",
  "key29": "2Xyeut23JYKu7gJuD8PhqVLRGR9T6vtbDJddTt6uENk2KyZreiSDT2w8A6FiM4ETPyfiQP5LeBLjdp6V2ob4eLHM"
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
