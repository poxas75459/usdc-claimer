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
    "2nDDEbCYST75dzqU1muUx14vuLzokqHoggvrT2VUxAPBzzniMgi9bs19ePToDjpCapaQCrGnUEiYY8y1ipZzCJv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49xwDf3Es6Ki1vogxUNwjjkDaWsdK3FwidJ7hERQ9JktUKNAkyFFo4PBJ2GyDRx6UEzXHwXvbf7bB7ftymhxqFPH",
  "key1": "2bJDSiKyiUKiN8LsaFhcv8CX6HdBQqa739zZPWypgrQuGoYNnHQUsJsknsLARBHxq3MnNd9CuocXhacV5fbtVwfK",
  "key2": "3aWKZQ4DvBs4F7cYPgLmmGWAvZQmAbTATHSefzGvWtHS3MeAQtoaD7yZiqWXczZKvYTS8QG1mMuGZq7wegdedfef",
  "key3": "3srzQvq6agAUfjfsrAgWge7TnChJ4KKNRz8sLAH2ekZUnrbrk3sNuGuLRDxXDMDsUwdXLjgn4YD6pXWB8a1P9cYX",
  "key4": "2vJzWx5dnuMgrqiaP8MznTJz5YgdVeMfvWZsNWxUYjeu2pHoUhBJpLUCsZeFAr6hGU129dc33rjcD94B1Tq7Kws9",
  "key5": "5aozcqd6tfN5hbYe2Bis4Uh67aYymDbp2jefdkacE3VrkAh3LHb21L9wyQBrRgyzxYx53jDy2LkPseXf8a2SodsX",
  "key6": "2yd26F4gZVa14KC7TLdSG6kHEeyozDxQjuGN63XFA1PUdXSP3BnZJ8qxi63VSFuSabpTwdALUyJKZ2Vi8o25aj4h",
  "key7": "3xrkcwiwvvP4pg4imsudFXyxpFnNttKeJfCQoqAaZy475HRDbjgzFKW8jDcnLYFgLMzNnqduep4MYSvhMhXQRJvL",
  "key8": "4PSjW3Xb45Cus2ThY5h1cxbErFjSzG8bCBojfBDqeFvcLrrvkL9XQpun1snBwPFWiJDfZgYF9NG8SnwuqmcyTHPe",
  "key9": "2HohxAiCn348eDHb191JB9UgHC45LWNT7f2MMhJeLF6ZkC7nMuAwfupfoQrDcCWNAMXMUyXWXRXJ3ayzKhMxWRZc",
  "key10": "XZnBhJSC6zymfktohUiXsZApz8xfjPmvJSrwPouNNSmsLCFL5sJm2BdL3vdiUNHgrRDwAyNksv9sUViDhgbsyC2",
  "key11": "xeXR7hXzRJ9aipLNteWZHbxJdNKpJURovrnR9JZiBTQ5uhqBLh3xeiPUdVwXjWfqEWYe9MjFujzXG3Jg868Pti4",
  "key12": "tsWYruxQbikLUSBswhUZVDjgnXVSae5TQu1jBrnDKuU8o4D2c2wJn6wad9A2xzvRDnqCYkrVPj9E3gPqzGs31Qy",
  "key13": "2tdpDfdzDCcTSGR9yXf3Cmj8QoDC5ivCvbbPXLTcE7MhZ6xYz8x8DbyZizxZA82nDTmsvPiz7KitZediAWcqeioY",
  "key14": "52HJruAZzpZKFSH6JDwr9LvLnNsCGj8T3U2VE6ti3cU9Moq6GoZQbFNeoW6ov1srnrNZj9kvNQeRBknSiTV3mjon",
  "key15": "xem2h5KdFtop9pPYHuvkHhb1NnxvYN4HQNcUqESvgjN2BgCFn6rsbtiBAtEHaRGjRgaosuYn374Ci77HKZzE8Yo",
  "key16": "3RAJ83SQn1g7QdcBF2RqQ9fbf6FdATtrZU1zTZWMZn12FSqX8MLKgVUDUq8jdxKjCTDpdTjx9vrBntgxWz6KXeno",
  "key17": "3RrBEC1djyJKiRDfAzKh9rizJchvLfbyvKpkuzQavFvNUNc5S7TNYkE3un51VTa4AW3wTZBgVKnMBCJ7MJtCcVEG",
  "key18": "CauZoeGZmMsKERqgyqx6VvmPJWUiUFGdBpXB3gJ3xbXUdvzfDLUqoo3Gdqf8e1PX94SHbetkaWjT5buEuwEUwUT",
  "key19": "3jPTTr1FesX1sz7VonA7eNsfFT7dSpUjaE7KfmLe6ztCwPJJWjtBvVNYFFy677CxK6DzGPDUu1HpDVBsQ5KBrhda",
  "key20": "2tJzt9kd4kkHx5CEJ1ppB6Qwi5H9qc2NeyfYTmRU8NtW3ySWAEdHPyAUNpwwN48DUaEpsTiWF6ncRXsGyzNviUdF",
  "key21": "3QNnEhyncVHxy8Gj6hC6i1BFkndvNA1sLHwoR8fQTiL2jMUBJNFfXuQVXUSawDhxo1DsXFjAyq77CRmEZpGSnHGm",
  "key22": "5FAgrg9kgFqtYDY4cFx1s6pqUkHQA7yFKfLHQPTuCRQZ17JM6DjHs9crgGropuJuhgZ612QhFbeM3rihDaaLnY4J",
  "key23": "65cDcuz5qH5ykhf2Cs3TfF1DhVR9EDD6V1KwBNaAP1LXB2z3F3xZvCbX5NcMAh87MornoYWAAr4BZfxBEaqZMpU4",
  "key24": "5ZXHFRv8tx4ndiwKiSH49yYAr3qWxqSTEgCEdrDSUVEMUP58oBHtJttcJrioMuh4c9wmVe8gGHCtTNxfNCKtStoY",
  "key25": "36ZCMCMrs1tK2SWZxSiK9To237EERLgdRv3avgxNDdQkUK7jiH4rvkTT1yc2ahHX7gzMJ2GTzzomHfaCqUg6FnsF",
  "key26": "8a7WDK7EsAFMUe8jMSjCB9AExPXZRUWbwgEQHEutbqhfbUGPxodBmZZuvJFV8Jf9k1qBpMNu8sLwPPhs6YoBm9n",
  "key27": "5NCdz2JJWU3nhN9jQd4ZeftHdDgq2tzcyxp9az8Aqb4HVUv3C9YXRvXME53FEQqpT9PjLF2sVuJ58SMRqd4p3bta",
  "key28": "5nyqeXe4MHEocBy5tFGVUSTiTSCw9ARjiBF4UxFHGy7B7itPdTvjFwE5pgpEpy4MEAs6LHrEKXozCpE9exvhteVj",
  "key29": "rqjF6oDkJFzW8hDxvrpVckesXwoSvtxKFMNNuj2Bqa6ym1wEtBq6CVfHWFfdYG4N5e5ooDYAy71mmZDCrponG3R",
  "key30": "5uDrsNrMQ17NPMRRvHLKSw5Ycy2Aog71entn7T5u3UDuQCuf8ePpwNbSQH6tPWSJwcGWUVQTiCcc1hYCU9y3mDH6",
  "key31": "2aNcj75fycsw4skeR9KdvFgrzchxbAe6jmJvCdnoQvYRbVDWS1qNntucRefFHJnPBdN5jEcLWNopscuwDB3ULxu5"
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
