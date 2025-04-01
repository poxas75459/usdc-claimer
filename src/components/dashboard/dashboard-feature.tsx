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
    "45EGgvwR7PxcvriZK8b9egU8DqifTrFYAitYfXzbsuRfB4HyZrGc7yUuciijubqfqJroecYo84sK9e23sPts2eU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c5PdC7ibWxzVgd6sRLU7R3c5Qwzu2wDzEpToZW5hBGbnzh4qmiXMEiVH9CaydQjWGkfT3U4wcVFU3MgSezyEFRC",
  "key1": "ZGbSoZLq5KsXwQ1QZShyx6vZaJW9GE1igWxv3pFVnB6711pLA23VQM2kTFsmv9YgGh8dn5z6QMxnPJWWncZgiEN",
  "key2": "35hii9PrrzBZUrCBBfrF4TA4pDp9Bvq7joixursd8YWPgAhz2KCY4W8B978J4zBnZsTHEeQN7maQNDPXEgCj3Y9p",
  "key3": "2Jt4xqeBRwyGpFK7e4sRVRwEjDavX1ZhsYYvcZF6PsPCrWPuyEgKWYSyDMyKi9QQKKwuRc91bs6ssVWXExzhcR1r",
  "key4": "4MwwpwHGVt266LzkKzeW9aqb1yyqQq85vqF2KCpSr8fQ4tB1JTWFnR1ZPjkox3myrQmFWCTs88mLKLPwLLoNexDK",
  "key5": "5fAkTxHizJwiYaHSX8NVEPyQ9bCkCmzbc6GX219q8u2jntnjLy6jcYFUjVwEyjqSn4bLhda555QyuhhfWcaEbYfz",
  "key6": "GUdnsVv3sth9y1gFN5n6HrrMj6385tNQHLmk69dKKkPacqrmbndkve4zumz4hvByGkXmNtcQhBGFcoCR4LDprKh",
  "key7": "4bY35Z5kekJ6CcXyi6eBrQZ4FMrj31kpwWuxhRwmoqkaXDUj5gmcJ2pdUiHCTDhmufNZX62xgeFUcAFkTW9QNTtq",
  "key8": "VdWqpoDRge5raqNMvuijXnD3f3cFZHcW6X8AHN47itcXzmvqajBv3uZLo67KfphXUMiigPj6ZsV57y5tgsGK7HR",
  "key9": "tMQLjXUkceRyuAvpdPuh5c4sySaKSB77E6Kht4Dt6RKLcPMQg4j6puBW2mA5BMT74wWnNP9HAn8o4x9kAwG86XG",
  "key10": "5eoHViCay8EQRnRe2ws8HVJFE2Cz3mVkw4xcT3r5gpChwjkHVRsqmnVtcriqLf3b4cuuZ7SbghLH2DW6vBoW8sd8",
  "key11": "5Tp5QXq9uUrXChDp1W1EKUcDHpQ2mkiv7naBdnW2c9V37TE4JPJKgkgoQB6uqJXrDtdYewQMtBedpfprNHUJm3vk",
  "key12": "2NeHXnYLKgswZNkczdvAUEHu6LzmGphneJtrApBfKFq7ZTuPri4rSGwqXfAoMEYK5viDRjbVXtHHnv9qZXKMggRP",
  "key13": "3rTMw7sis5T37Ug2q1jHwaD8AsYCy2Dt7D3bA2rC1uCMDWeu8SEEZMqcMxnpsoeanxDMxHBaPvTfgSzR3dvKcu2E",
  "key14": "2uQqKeZFQbtG3UznaWd5jwWCeyymY1UP9UK6WWBBi9b9fBnbEmd2Qc5o7u5xYQSBnresMxXVQBB2FA6Wn7wNmAVZ",
  "key15": "J7Ui8KjsbKotSxC9oNunEeh4ByVwuBi83R2keocqFhgSxcbkdDvqAi89bw5JANzMHZU54yck5z5G1eTFWDayVav",
  "key16": "LzyzsC24cvUgiDbycmYSoMrjfLyHyxYWuz9hhX9evPUMRPjwC1maV9ng1RCRvSpnXwj1WBHaGnGj4Q1jz7DQLWh",
  "key17": "4LozEg8ithp5MugbQwnAR7tKdtudqLt2Dvxb6iiPYkLrG7sNk6HWfsE23Z8VsMsjjQCT4vrJ5gtGqfdUmYn3AwWt",
  "key18": "3Fy32Urs6XuZq9s75N8TboNdeejcmSRuuVBTZmGePe4NYycK6j68rrvvrUieHJv8rd6dKD4DeSwNWk5fuChcrPvY",
  "key19": "6npGSxKi3dsE43Mxpbxxd1sBZR2LJXoMPmkhgeCbBGhqvJjeRaMjttyTSeAw5WaXazS3M2LERzVCrU7dpzKW8B4",
  "key20": "jmzLb7L5jh4tijEDL1eKed6JAQV5vCt7rNz1bXVP8qR6Xdb6WPR7wAfxUCuTqf38aubtmJoi46TvsVmPUo9rDbT",
  "key21": "5Vhs9svf8hJkAnuwzXQShEKN4TG7gt4XgrHC6Yk42EHKHuFyGigQ7XHiYvYCtnAoHsEpSqChYySEqpSNGH4h4iFV",
  "key22": "5HAWrpnVsXL8UBNHRr4d1FWBVSNeUipFb13v4Xm6CFxFGV3GW8gJTm1YW3UZDiYpPKRFdb3KB6NZz1XBnGuHPcia",
  "key23": "2TEZ2xhpbNCzrzbCaEB5GFoW7dj3a5nvv4YgSVrGTmBLhDWJ7pCMAJCMctH17L3hZrdjErViMqDeTHMCxvEb8hyQ",
  "key24": "yZ3dYkfBf1AFH8fqtbbnpqT5hiixbc2FLbg7zM2D2Q38aU5EN8fTf8y16trkWALTqm8EojHvbXiN6bJJqCTE9v2",
  "key25": "2TWm1kFhdoxfbbLyEjKrtYcBtY6qB4FnP8j85QDoxfLsYhry6sVxf1PLmmjxiRauew7RMDSMxnCHaronbcKw3o8J",
  "key26": "394X34fykaTP6uRiShnmG3MZFoSrxHYH8CGhs6j66NyAdbTrvxfJPWTqgK9Qg2uvbCmTEJDx7PrtcgxHc3sBvFJ3",
  "key27": "5xETRcBPgUPvmRKm6VBg5gbkNsFkXAzWfQhQHPy2cwHr3ZJYbc11YvMLZJVHDvd9KSM7bomP74TdWDvRR8S4QUBe",
  "key28": "4wHcJRdzpcSiaCviQwz9Q5yXXLgCwGj6SHTW53ZP6LfPw5qYNHvSpQsDAiaQwR4Md1yV5sgMWKqja8N1J8BnrZrw",
  "key29": "348gNT2xAex2rpQxNnkmnzCgU8WN1eFQRzk36qekU4ZWRYGX3Nj49yEn8mcqTGnDvu3DfGX6siVr5i5m1u5VAnpx",
  "key30": "CTrb5pUv12LBDjVWQ1XoALaU8gQvCcDSQfYgvY4veasZ7k5KeYJ4nk74GGRsSk4yfdoJrn5mFxhDxi6afEzJxdz",
  "key31": "4koKhMUs5QcS9RbZP9tQPLehmBP5q64616xmrKhgzMDMCNZM4Uppn8XA86Tsyk3hf6qCwYY93JzG4BiXSLJzefMv",
  "key32": "3SCm3DnAGVCZjhNkP2H1R2ws4aqtL3v7ZvYpA9zrfonTsDQvoV9PuN9cMRodqoVTj8GKHjh9yn5MRaQMynffLMKm",
  "key33": "44gV3Jwsb7PYdg3LkiPbUKmgh3PnLxZjYGwguDW5VoxWNj1JjaW5pPvPhQb9NXN5GmHEGS5HAxShitFKFiA2KADd",
  "key34": "2KMt9FfvK26qNJckhXKcRQ3DbNdTM5GzX8E2kGHHCA5yxmWqY2WJm6Cnb5Yqbe7LGLcAzF43b2R7dc1QFkaD5WqX",
  "key35": "5hdjRkkXvdxyZhqh9uydGXnTwKBd2KhLoHAzmpSHCrvvhszTDDGHKj6wXTXG9amLiXpSQ3VARQG6D8b4N4r9ebLN",
  "key36": "5jX7gLPe3uhiuXuuR2KhgLfah7ybxshYjUQYgafyZgSjARgdTrokFDs8pPcUGwjfN8KMCeDKSJpCCBgCpMkpfXbA",
  "key37": "2EkF7oPfsciUAHMM37wkgorm3Wv2mQweRWBfVRxyJHNrYCDpQ4ApkTodATcT3uok44KCaqGy8Wv7MgdgoxfDWbz2",
  "key38": "441Kfyn5Cu9oQXfoWRbfNVc4Bieb4XVF7eVs5FaKYjyrbLM8jBfRtiFz4qhBjrU6SthH2g6ppc7UULNAnKPk8Ydh",
  "key39": "2ZiCxyndxd8d8mWFVRTNenCmRHpQEGapBG27gw6zJfnJaREeNT4vunQrAdYPjZsDQRcEtSzJM2ypJhdqPLbAtEEa",
  "key40": "9tX9kh7rzssZYekRwgYdPHZ1UAqCfMXCxs9aL17YQjz8ApibbRZwGqBbYDJrUZ5pvuETyd5iUZMurk8DSWScCsQ",
  "key41": "62eiw663bwbTgvCEtWmp66pLFPoJiM4R3tptmcHDpo1H6eFiQkUX2VwnjzXqCQLoVv1N9s4zLgW71VZknWbs56K",
  "key42": "xZP9GDVzoyYCvMjrwNx219jAiwzXXke5r3N3sA21BMNPAm1CEJ9d7KnNW5nmejc1qQpp23ueifhsGy6bjYACBph",
  "key43": "4N7aSBypAKZufhRBnjUeWmCjjuDEui5T5rNKAhgz856kgyt1HmafuyQJR3pLms4A2nqzNh3XXkGutV2bjNYr8QK7",
  "key44": "4AC3CoVe8DmMz6pEHE7sjEo7TTS3fcCJVeuMJQ3NmatQTJoNL8hYyH6yVjspBVQBVq5GiEfDQ7etArNMPeBndZuG",
  "key45": "2WwJKccnDyzXgraHqgrwBrU9eNB8FuzoYUVfmrR4n9Uw8DN3gczSL8ac2LAcXMiJQ6xBiDBMR38cHUGxE3LBj7c4",
  "key46": "3vDJBfinLJpc8D4Q7Qh4BXmj2mGrRzqXjR1Q2bxAgL2uDFzVu393fYMyZcyseRXDLBvef6i5MqotyyzbAdVeGUz6",
  "key47": "3ouqHKW4QdyJQaUN5FxLDLHfS5deh1JxLRJtGixGs9aKcToguYhPaU1eceBzk2VwgGTVwjUPAjV6GxfasabHsJ7w",
  "key48": "4MovAvFEzvJnF4fEe4oDVTMMFTkpQsEYax9ZV2atafEBSMQyhyUwBqsoUZ7AY2W6GSLJUPxkHsnnLiWh1WjhbaGF",
  "key49": "2vjjhqdbn6CQrhAzLmRmihtBz3Mrbz9iBPdyfvznnwHuAnb2iE6CzdDnPrFp8xVMF1AsyjLWAeJGcpReY2jwAD7d"
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
