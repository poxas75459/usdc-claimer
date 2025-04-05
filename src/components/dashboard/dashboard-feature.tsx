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
    "3HFfkfELLjkfms3UZkeEu5CppGsocecfCrWRxsKw2rpyYDJq8UTnkR9AeDcjRdr221PFTcFhJwwtehUA7mUkLqpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65EJACAS2yTaFUfzHBR9BAfrHfZJexc3cwatGPUgQNxC8t17ASD5wFNymy6AeexLSYwX89dmXDYyDqCuMfma1Qd",
  "key1": "3yKuKLAJYjTVp5VGXAaXDmNyBENfXkZiTW2REzcecFQHKayQTJtU5rKyQpS44YTQj5pJWi5P8DXQuBBmEtecAm4g",
  "key2": "5SS2iVU6FybjoHSam1vHAWQ3QJYk6qkTHN2t2UEgo5FTE8kFmuWxaj8Mqwam57XQzEScWVLVgHYentHmGKw37tmS",
  "key3": "47SkgcBJ6zGHsTWSpzd9k8FTLWrzAWsQHqCB2YrHo38pUyYrrHrp5sXjz7AEiMXRSqDrj6vwisD19dPkLuJydvQJ",
  "key4": "4YoD5kMcuVcE4rzM4iLTjJH6rmRCyuQCRc5GnBQkKwxTwAPu5vPP9nhfj5gYLP3woR4ZBSw3PqWrzq5iqYJtxaab",
  "key5": "65LsQJJBE29jy3561QJXc8RzDWNvpdG7Z14grrGNgeKT4DgZLmhU4nWQmCXHGuaQS7CK4Nm5ZjdXHRkhKXktYe93",
  "key6": "58s3rmDZLEBM7uRQFCWV3a5RvdS4Ao99YYxaHTQz7tSGLqJUWaLamGf9U6aX6oM3Uxt5VFDNSvo79m4SKREyq4Fn",
  "key7": "2usFiaskoQxBvZmGTJoGzbQb9HAEfG9W2FRXLbpEtdRUi7wsJ3o7cw9eGMbUvotEJbLSy7aas5zH5gVRQARqeaw8",
  "key8": "4C6mSo13LbhF6YoZDTXzTmAW1th5vXga2butbQuG59VLXjZAhRnbxdwtL2fX2hxhdhg1aaUap398G9MzwwG4rfuo",
  "key9": "3TUchikPFzkYenKQhDBbiGyGAv5erVSeFT9M1kpNMi7CWjPTvi6HqQ9SCRDMvorR46EnWQHMBxRLsQXMDgp2Wjv1",
  "key10": "53ywwp4AYnPcwNn54FG7W1uAoAzhg8W41u96ZDf725iaep5dbTBytyUVmZWhtWmDMgDBoztkWjLBdB34uWbcEC1",
  "key11": "5xEtd1RQ3KEKT4tr6NYyBAb2dra7fsVrnaCsKVZD5pL2npitpHVadK7MHeSJDZq865T8bzgmb9Wr4FaG7QwuxCPo",
  "key12": "67hy2smxLYWGZkoyU4GAXAtx6cc1EZMvwFLC1vYnQ2n9LpgFLYvF5RcuqatpyCwRCjh2cJBQpLnCCzpEFuVBw9TJ",
  "key13": "2qvnP61Bd6vCK3uUKtJkHnvhQ7wEuDcu8dfchSBFLs5RdZFrV4HniuK5pprSt6FsEdcQZVusTaWEoXniNVgxTGcU",
  "key14": "5PEw1sXVNM2SYBxY7tpoqqGxvtogm9SqUh9BSaSTsgWDwMLewdSo69wki4VA6NkunrKRdf9WJufaR9X1jz4fxahE",
  "key15": "379zdfb56pCZTz8XbxpgRcSkahr5cYXb8PVVHZ7oQ5ykwLTAiModNHoLdYyWeHr1QNewcDTu5v1Dsqyhn9d8yXgC",
  "key16": "53fivvNRVncLV31yEnRomJepeWdguNKnHtAL8ZUqc6ADoTVkudnxgrmUWwJxci7rx1XeYt4iSpcBpQoN13wZUoMY",
  "key17": "4dZsPDGy6r9UXH3NTAUDfmEQMNT7oJFrqbYyQ3row6ZfZY1VFCY6ce75nCvgPKDKUw5RfusgQPtLtV59Lu8PEfFR",
  "key18": "4QwbyvjE4XZcmcZxpEhGex5E2DeUerZL7DH2BXxqmijdWEk7DrJxdkEEP6Dd2X2kbLL3LqeDVSeBACVzykKB8vr",
  "key19": "5jZLbGRddnefGcfRtd9j7t3htaaMLWUry5GzauDFgE2L3zazzz4meDmZyi7azHE6mFQBMxEw8qpM5LbSfRkLq5Gv",
  "key20": "5d5iMRhoCfktmKJoDMqz9Ugyc4Ny83GEhAJNebhF715Wc2r9dkQrqKDHzbn2C6SB3bjx72dZzJhmigKMsrwGLUTX",
  "key21": "5MjKcYW5smUZzAAV8fNHXihnsBHiaA6S9WAHzKXAwwfYo2JhgzrugQF8VkpGiy4Jah2QJgkNviez6QACybhn6U1H",
  "key22": "5YPbUwW6vYLRsBXSpDs7pMtyNBbhJkmKiQmGRsyY6E2gDR9pj5U9pvhCKDXhfoRdhJb6YwtkKoY21oHM16Hy2v1F",
  "key23": "32o8xyZcKndUZGTzMoJjFUxvLkMFmeNGSBv7t9hHSkeMdbLaxa3E4yK1fGndfULMLAG9wHtoNfenHPnAPZZDYKF8",
  "key24": "3YT145QodHBQ6biQbGoWfKpniznagi5fUXi3kke4g7zHoCAaJHAwpcaePuX3jauCRF7JnBpDMy6QxtKiQbvcT5ug"
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
