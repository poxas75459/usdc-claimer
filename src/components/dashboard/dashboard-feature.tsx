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
    "49AEA46dUK7JdQ9EgMm4icZ6rKAhHGxi9C1L61fdvW6wCakKuBNNUiBVswGVwcMHUj3WfnDcG3Cv3wSCmKYhyz3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eLQhLFXSvMsnJpKBk79LyEqPEJLFdKbmPZ4ehEoasGwLcxu3j1iyrfgJet9EJoScLKndXPd7JZj4MBZPvPDY1HN",
  "key1": "ohCrx6osuKFbXvZTxhjkPpVR7xmiNLvmyswjvVTrocs9etJ5DHfK1rMPcYFxGtYoLHU63eYQkgfxN2VScG8bap5",
  "key2": "66gq7DE2KB9MpHifGS2FsoTNrdRwx4Ty8FmZkpLXJMcipu1TjMrCRdifSbfERiViViMFBTAydXg1rt1ReTj1N9SY",
  "key3": "63ybF38MFGGx7V7A2feCXT7oRU88meKnWEAmGZ7cbQUMhmvDuqoXDWKV5c5ej3GtGgrzouawFSJ2xxix1Z5SjAjp",
  "key4": "378B47Cnq2A3TYZFHMC6QjeWPAttLEswfAFNWJWTp8u5iddJA39V3reu6trMg7XRzDbrWFEr25vUXUrzhcBwS8hR",
  "key5": "4xph8goZfEwMqRftaDH7Refihc7RVKf4PADo2bkpNKyoBo1CRtQBbfoqP6uuR6GNmjF1mxB98cxufnSVw7iu11JR",
  "key6": "66ixrkrBj3kDho9fawJzfHAVzSN8PzJ8WwK9RyybyxELXUJx5KbkR3mhbxq7GTgp7EhEwzRTfUcC3PzyQbBv4W4W",
  "key7": "4WUBwjy1TcsUs6QgYT2yDEGTrP2zYcpWdsHQ9X7kerPjywURTSE8Kc1R6PkaGuY8VqqCDKWV1Hn62UVJKrGq7Ato",
  "key8": "3Eax73BdpSHfk6zNgMt6kiK8uPGwdfXcL8BjWawMHYnE4c8QuzM1JLfLeMuQycoYjNUoh71x7rVmzAJJBQCxMQjS",
  "key9": "3iYxugBfgUV27oGS2RUzhy8sydSaFnhkBcKfTjPEE7GpVeRJuiFeWDGz4zXqdJkknvofu3PJnuuPyuASeW6BQksX",
  "key10": "4u4DGTkWM4T5uiXiH9fTjFVz4LSVobmiNH3H2NAVsLrRhARioyYc6GSk9aEHnDYQv8Z2ias5iBjpHwBYzQoN1m7s",
  "key11": "3bHrJSWDRx3ixeP3dnq32TEiMTfD19Y9RjhqAvhCMQ8YrZ2DbG6dL5HvQMZPytyPeZegZYQUEUqvJ5hctpZcTsHi",
  "key12": "49CJWpcpseuUqVk8cbZa1WzTnw9YALzb2P1oyaJ7ydd4LWz3BSZ16bo8N23E3nwPjHaum9G8DcqD65Lbnt98ZkJZ",
  "key13": "2ZfybAJ1mhbwfoujgEmUuYrvAEwUdzJVHiG895PEdF3NjftH7Mk4jZNJ37Dp4YHV5wYxVPHmoo324i9EioynwaAQ",
  "key14": "9f7jZcMgvekJurqthj4pwCNHEtvXEeZGKwREawpHej32xxrefLJggF5DmPvKqB8XGSrvALWEfziymw4e4qaBQYQ",
  "key15": "2tFN28gUbyY75JqwBHQZrpBQTkJwtTFC9sTWvfJ5i5o3qsGECSPZGtNtqwFCxvMeDjbWywtBEZLda62gHBian56r",
  "key16": "fuDPBGwBNp5GCAJvMBU1n62tA1uoJisZowq5RjT5yTYrVE6pn99WFLT6Ah9mE5ytYhjaEBgns4qtDnq4D1Xp3hi",
  "key17": "4xSmiMmSm1kCEDaXa1jGna5ZzSXfXJZpEHaJp4KWu8foXNse2h8eiVpTNsub74fQpuGTEZBNPt3Dhd3x1EctbYum",
  "key18": "56PRThT3a9uuXz7hvZ6tDn5umwnJNr2gxGzxgHgwA3MWFwy2SpDX4n8sqqA8636sdiroUc7AWEjgRxT2j13Mh8rY",
  "key19": "2QGpku1SA6qVHSPDVjC5UhpcjiJXXShRHq2e6mBiMzPqvz6y6y5b6LxSn7XcDhUudbFaZyLurNj7rBGymGiWu53b",
  "key20": "3FT4hDRBjszbaPT3xh5nDjqQQyJ1e375bRtoKyton6GseZnZgkyGsrqrCcww53zgv8vQ3saKgBRGpsgFLLoL7PQp",
  "key21": "WbUGGUqSAQbVxHZCzZDMPTY4wAo4sWR5bxdq2Xh7ytie7Rh5xetEv3YQVoZwjsoujDfAHXq5cb8cRRVckwhwhvc",
  "key22": "58WLTp7R5nc6RxZ4GY2Rj5wPkZossnnvqi9XATLLRTTkeANgHYdpBJTe8YseqD644XJQpKkzUeHQgXoBc5TjhWET",
  "key23": "5eJcKpgVdu1WELpHv4hmve64r8WYovs2QmWQL35DSxL5LwXcvUoHWGyJhWRS5sDTK1Dz2cGwaHTR3WvjAyQWw15J",
  "key24": "4ubptb1Y4LmyqaBXmaGiE9fwwiteExuCiduqCrxsWANcuq1yLqcBjkJdxNARNGKBxNf9n115LL3u9ixNd3mdJqJv",
  "key25": "AVG7DZ4Tk2aNFq9bM6GzQnwZPGJhqP7rL9n5TjQXewGPYNUmmrEi7UMgYFLWeA8G1uqUEgykEA8nv4Ty45zDZpN",
  "key26": "AueHDBTfP6VHFt61WGgixHGvEVbN8BpMzVm4bJZgkmUZPeKSZo5dE6HqtgmNGEXeBDV9zWMK762KtB4hKH2X43U",
  "key27": "5KZgC9A4gkEhCcA7e2LhGJuobfHZw2vHfBY31g1zAaFohTxez2GYvBxEdpM7a3mLEdDbDha4RdtH4tXrtsv4jFLm",
  "key28": "3MYs3ArjVSC2Bd4NKeVzn6xmHpJBREWwELrH2pukxS6CCi7SA7syEN3thTfRiHM7moJLm3wkLty16CJf1HjrCpgW",
  "key29": "2pq9hwCshamThuViWoFSNbWCeKFfMXRAPRnyTwTNax3Lcm3sFu65wwcU8du3UruixZsR7pbo5WqmXZTwVo3T1bhK",
  "key30": "6nRFdJD217iytZhBaYYTq4rpTiJFEEC6W2qmHt6asnDc826nnn9MVAyhHpmAJL7L3cdByd2AmRLkdgrccf3n2fX",
  "key31": "5PYAnqMcTCybpzGPvPe5AXKMF8oPazfDZmfQp7fCTeDvYZ1LcEqiJsf7hWDEaLhjQAWAVv34eLKkbvWDTr1DtQfY",
  "key32": "42GBZGE4QvVjbo42nLELnuKKAbsLGhCXzKv1NwRwDrvqUdVnFQmHmzbGqhBMC8SXrESmLkzwxt4Yiwdi2cdbCBhe",
  "key33": "3op1UcTLAxGmroPyrb6KcqJGLv62FjZYYwPkQTo2dGyPt2yjjWrr7nbhgn7aWBrXPjtyKcm2mbJYjjffSG2n2b1S",
  "key34": "3VSXSZoFHB75SfNSGc7Lje6hQ3Pu6XNDvHuZkGmhkf4UqupsFDse4bnirEKA5BXtyMB2Mm8nPuTFrBWbQGS2jddw",
  "key35": "2geVkXCadgUdEPvW3DXyJcnYbTx5Yrf2c3uvKzhXNmsHmaGCrt5e165ifcfE1xYcUoGQTezKpnmp9BtKMrcwt2jS"
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
