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
    "5crSkwpusp6ksL18GpZijkHeoaomoZQEuCJT4jxyEjysW8GQrrPn2kezqFsLUvqwRJKs7oA185ChmVfotYqDffH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GwHLGxjnrDzZUKgU5rAAVz7rkZ6QbzYxTuuZW7UAKJb9v2bcS9ZWLHCqUu6ZwZmCwYDvp6VpNvGwqKSBkFZJcWV",
  "key1": "LohuZdxeXwzowefkY1bLuCKiaXHd3k8HNYNEKBGwWf1rqZXHCb3dpDGM72uqszUgBdtUPFstxnCQxnroKc44Jdm",
  "key2": "53pP2AZJpzCRYWWA6r5WtKwsZSoEKzi7iAsM6tFgKjntWJvsMiSGbBhQje48JhrX4rTk9yk5Zh3Sjd8WNhEXymSN",
  "key3": "3MKocRnnq4E6PS4ySuYH3zkDKTRypyWywQM2EQeSGU58A5Ww278dkcYtzh4szFwJXdd1Gf7dDMQ8LJQiNL4EbaTs",
  "key4": "3JySFMe6LUf7EvhDE21Vvi5daACpaw3qNH6S6YcwpXE32YdeZM35Bajzc98DK4CweutBieprRWUmjXLhnJkR2noM",
  "key5": "3w38gzskxKSZNc8jXZ7ANnw65KvFs8tZ3dLcoYACeemkfL4qjmqNGnB5PbuG51tdJuEEnz711KHYJxDSSZJt8Nto",
  "key6": "4ENwhKDLoeSmNKrtcb3pA24qYKvsJonq6KSdRnuqDuf2x426MQ3S68G3B6Lqp1ZBDfeJE4j1yVFAJ7ho5N8bzifN",
  "key7": "5DxPBLLcrkojw26LR4sKtUP8fcdoWhndv1vwDi7GjYGw9yTpECL86gWb8vs5a7spvUxC3XsSacfFs9eTBa8aqSFY",
  "key8": "p64ZSPjG2FYYu96K3WRN39BJTG8RPYi48DUHuue2ZxsBpzu58kdJHRaJsgRww5Vyv8SysvEqQPZssQvCUZE33hd",
  "key9": "3VKmFr4kBRjyJaTescnGcJChB3yycxrP8zPkFZLy3q8nuTifvs93nRgS45aVU8SMKD4eYL8T69UTWq4NT4t9zTu",
  "key10": "3cpASct8ipuRyXkFNWb485q7GpokH7PjbcPF3rjczT9vaKosB5cdgU7DN5mGe6XW4czFRLs48jR4DagQ9JmjSV6V",
  "key11": "3u6tyYh73ha4epPTqwzaXEwvNPtaf3yANt5yncRhQ1vNUVjBfgSLxpTLiBgo8jL39ms1skN5Rie6rzmYoCXyeiKQ",
  "key12": "2MhUTZMQirt3CKKMQApEDTTEM5DbkeCeikCp1injAuFsJAzpxeQbzijQjxYusKRdzagYcE8oSz8XqnaTqMSVWmiq",
  "key13": "2N2ZAYBpUnhRtkfuqdYHgavxkk8F6srqvZJnjciHkoDvy89iyvErCYuxNZdxxccRvejT6n1wmwEJPF1s4VNgFRW2",
  "key14": "3xWhxa8iEzyPGnfbg7A3nMmsY49tMSJmg5Btd1zFTgG4dAv85pdCSrRfnZDkXasb74vSJfNaE6mDZRzcVyAGube7",
  "key15": "5hi9Soi1KXtrLyfjkW1MgkfxGJ8zpF3By3bEvZqyRTC5hwRHozpypr4x6XjFkZterKFixQX86tTAD8F9zZidi1X8",
  "key16": "5zsgc8d6P9j8iR8qqX8YkjKXYdGY3xQg91KQ1RYrboMYkSSNARXeJP9z7mMaRqjPnfUXpwTmNfNRHvywy8ZbC9gV",
  "key17": "5N3WLAjNDFnYynUfvFnB4zuJ2WSQHEeDPbY6KVomWCWnLWZrPMJG6jv3qQsSsKVEuNwCtTMdLPHAAdBpbZrZD8UX",
  "key18": "3T7U6xv4v7bq3YSc8JZiwpYPbGes1DCQjyxNk8YjE3Js37hTBQhVGZcxAe6hqGTVyoy54JTqN5iZLCjtyJKwZ14A",
  "key19": "4CKnaPEPayyqmqhbKHu3LnQQW5ejUSCjusmsLmr967fRLFgXbwrRfq5FGoy9nC44vjnUNSim3QDMcg84HShuxKCs",
  "key20": "2dFWzLV91Di2jjSZkHetRnFTwzPWkFBc8V4vtBeBEgfqhbkYahWnTShWF9UbqUPGCDbLETKnAWfw4mwiuEum7tyA",
  "key21": "nLKM522fy5TuBLcQ5Yyk1FCbpAUMayimaHBFRd2BtsxcYECGMZzQGoE6sSxBXGEX4kqD5LUJFb3KpP949AxUjw1",
  "key22": "4qwFuqpA9gTc1BLMzt6JkR7BaFUXC1guQwEEvV61JS7T8YTzadRedY2EXz2mB1CoYyZpkuw68xT39DcUg7MQLWXj",
  "key23": "3e3irtmKDYpawjiYmDquDbczWa7MHbiXbYLYBZWwVrKxxR1faoQ2qNYceQaMvDTkKUGJu11KMi4Emz4iLyAihtNa",
  "key24": "2j4Ky7wKsYfeqiASGtnfKs9Hau1KkwfxLwTz2bA9mP2rQVJMDFVZdpnx6bYq9sGdBc1Hcfef9Pkf7oHG34fNx1ug",
  "key25": "2w64BtZrbJvPa7Attz9LxbSoEffeeQ5LxnnNC84BpPtDTWvGAJsUGDad55g2Pcm4tihMd8DqpwkjxGHudT7ufQcw",
  "key26": "4mimVBJpbutqbi6E6NgfpNhEXrtinBQDZpwdwPmTFSYb6BtN6QrNZH1gL6NiyH739z2GPKvqLHG9FfbCgpzsGsoW",
  "key27": "5hgh9MjDd3XVhQyX2A3yc9r4byPgiEYk69C8H16ACWfQ4ejdMhZqJMCUXoE9hjLPzuVLQKFMfPbgikdpFZfWT3dM",
  "key28": "67rQBimmqBPkF7SogCw2UdSd4GPfr6nxktvEHX4hUE8hbMTVqYBMnrdMcxjNpNKDzc921SnwbyjGCdrbMFWk1Wot",
  "key29": "5e8y3mVSLEXDKWkmnoz6ifcaCM54YHBJgpxAsFoghQyhQm72geeRXxYuWP47PP6WPc3c21W8SpaGa1ukCgE8Kuci",
  "key30": "3szYv14JL9Bvf8GifC7uxLvxvseZ1hmMUxshtD4Qm1ZeHqQFifo8wnzfV5H4yvJb3XtFqkWnG6QYsPLbJ7uYy61K",
  "key31": "5yxRBcmqzKWH5vWAK4SNMgedVVWixyxJnMXkKtB2RqRxr8RQCFeUfD4cJ9G2CnJe37n9eisnLmwodsRJg14jdfXT",
  "key32": "5n2Ub8FGvJnUAQPkDAHf3J7D36CQjJ37KmEKa2MfVUA1CncpzRsax3gSouDpXwJM2fRdg2mvDpx2NhD9kr2sjYVQ",
  "key33": "ojFkzpVJnfmov8GLjMTPwCtNdLz8Y9HUWEYCvJtQVvtFtpkWY3Y3342F5FiFHm7WnEkknYze7veDJFfLD6zBppg",
  "key34": "5u6mdNzmtauzWeLLHrbRSUxYJn7hVy1vJyGK94zQQenJGwufuKY8UVU6rXt4yCL5eksUnf82fEcazd8x6PRF558e",
  "key35": "w3KStK9EfauAv6DGTb2UfCFhXuFb63p83Y3dCYoLKJxy5LSzvy3Xahn7ZNS5PxESUaXfUzVPVHoA87vUmXjAZma",
  "key36": "3DDtVJUMKxVW14UbKMr32mUwT9ie1WksGbiBwEVGSdGmsAufdoYtnmdUVtRnrYV2aoAsgGfB75jZGPNB5waBEpYj",
  "key37": "5Ze39f95snYLrMf5Z7f7J6KxxKJQRd2WheBPkvx3zHYZTkRNpidS3mmyivpNSudtKFhRuPvjqFia3MTTurYvtFo1",
  "key38": "54E9GevEq2FXvEs3Sk3srEe1qMVWWXXewWeFTKNjdhBEq4Kw4PMuTxx4TZDJD2ogPyMTDma8MgHdBpuA8vTsKeft",
  "key39": "3SdEq23TqaTyz3qfQadXAqNPeipdUfVVajf9MDUau74NmAH2U4yvN6NFTvnqaVmhT9EBBmVbtBGKfbvXoWt5yayu",
  "key40": "319wcrfnsC19E4YfFkFCTMCoufp7jMDjo6D4Z1Q2c3GzaGNLmu5dSkigjVj5cjwitzEcobk8QdBe1HAEesPLHc4w"
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
