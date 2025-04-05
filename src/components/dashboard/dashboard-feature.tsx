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
    "29WF425TBw2y5qoZ52UZJKmhB1oFZYAmrCtCwHrq6J2HPAR1bCzwVeqVi1ydT72VjHe69WAbbU7Q1jEQCm5pbfEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uKJUjhLkEKwKMxqawBAADDgDbaYogV5maEPcuU6FWN7dgWPxq632GKpHNuFx4Gw2XjFF85EQTTTfjrNvjFfgREA",
  "key1": "3yNes6AdnNhyowBtm81xumUjE6TAT9YpmquH8gNVdafCUjouTGw1jPsVEZtj8PugJQnDymHQMQ2RmoaWojYEA8t9",
  "key2": "5axKFJPLMTinztnvWQ6TGw9WMxSUs8CnX2mzfCM4vaejdyZzM6rHcf6sBF12cuADzZoUjty6ppC5vdmQXaBSJbx6",
  "key3": "4S7cRarkJvTsSFn8NZGDNHmDCcNBREJfUpgP8cjqATzXkG5eURMYUnnHUJnsAj1QoCYjex5zv435yXEdrPttDdaK",
  "key4": "2qmHaEwjRXgfvHNb38oZSfnswHYB9mnryNormdhnCYPR5dmF3DUxrDNm4te71Xvb1KYLr3KRqRMv7HiRC8x4yH2u",
  "key5": "4V6WYiMJUCmoRoNm4PZ7RBSVqQHtWF73PhamU5YVHpnTv9nZeeBKTdStrwBZ7CD5wi7Jdi69SpLMyuQ1eAQ2YmGz",
  "key6": "5z3d1R5tUG6aGu2naSu82ye9g7NfYrmHixqu79C9xHPN6h7sEGAzGMtTZM2Fea7W33D58shsUpfAMAEeXWsDeLDT",
  "key7": "2koZsGGr9NrwycwUT5JmXGLSbQkEakrsRzp65UhjJavnQJmAJRumf3iwrvv8uNJJzdh9BWsQB6eTh33EHpmy41So",
  "key8": "448bZe81ahHWwp4oaMErdkGYQzwk1Fq8qwpeYSLGogbVtuH47DPqqYZekTCekfpLS1pDJNXFMUpSMsyVN1GctgG2",
  "key9": "4oLXwx3UqipAoP4hRL6fgro6NZ5C9D1Av3vQKUD7dL7mytsz6FoQYAdrAqpbgkqe5SkbKyEYRfED5WduxPX5XK7g",
  "key10": "SG8cyvhyAYTTPdA1vvBP8iVpFVTpN6gHQiWovgrsyVkuQif2rMJRbU7zs6ZEAotvGXGJYK9rLXFaqFhCco8JDAn",
  "key11": "mWZzuzmnUCS1K65xMASkBFDXizzhLAM5X1YA6THLLgBmwRZMYqsdsV5zK7RweRDTF3EdCbR7k7cG7sAWqfXC5tX",
  "key12": "2MTosnBKXnfLRD2R3bAFc7fNSDGq53juojVwUJqirhhgs8UixiBDFKwY4Z2TzNf4S5mqkRWTMtGv5EAYirb1Xdqp",
  "key13": "61tgEH834YjbsuVMJ9EtVpyrYvynKbwp68ZrnQBdo16BMXc6wKBJ9wC6k7aXHPun1FWFSesFYjsrspeLHQtfUpaC",
  "key14": "3FkrUSqELNZYf8z49XjWFZDwQQGvmkuxCZNfkT4hgeqehMm8pbaFmbP8TrPUKWqu4ZqUWWWdNRboRxmyuUVXs2TT",
  "key15": "zpLKQan4q3fwizLRLbiyE754msA1AEo3ZubYu2j5foRSexG62jbxbQqEQgKdPwtW5MLr2j7yBJZRV38NwauU1DF",
  "key16": "3p8L7fQ95PWvcQkPfuxxT1g3Rpj3pnJJXmnqNwFz1MxRk6tCXxm97t3Ji6c4HQy5gQ1bkEqg19VP3ph16sVz1Cu",
  "key17": "wbbZpmyujTQF4vga3QNot6q6bywx1RS7mhPZxEgGDXMs9NPQVG6E6SheuknRetCuKvcAPAS6AAoK3jxcjSnChkm",
  "key18": "2D5AApb2UFmCzKVZ187ve9ovMaXMD6YiMoANATgXAq136ncBq93DcK1y6ptASLNahZ3NhTJkFQnN7L3nw3Nu6N6C",
  "key19": "4e1TzQVckkibPM5fC3k1Bw65mZZYHKH4xQkLi2xnWoNXyJLPbs6ykUE1WWAWpwccJk8CPhpkFrFbqyDRWua6KDBs",
  "key20": "59PsmSskawjy1oVqLyJ91KkiBRYe3kt2G6iiukhBH7BCuqfdmEPVfNt4MWDAimTnLWwpfoibVNvVHuv9iSK7ZpvM",
  "key21": "4R532ismWDpmKFQ5xtHXcWM9XvwD8fuyjtAuEhexhfZD1vcvwb8WgUmf6bVdfjoYLwez4ZaFmTHknizbBwNqopmf",
  "key22": "4pccq2ubbzbUHddGXRYTUPvzBpJUjjAauGmhjPJ423QJeZAxynsXUhpajseeHpciPttznwuEhLsBURKdY6dVnvDH",
  "key23": "3kBFCyWPqVFjLvWXszAW6UHnMA6BKiQx4MXhqDsb41Vmgn6BhpndcUPfSf19Ym1AcTipfvpi2Qn2wggeZ6igA3ua",
  "key24": "3kPSECRGscNP9HwfPr1hHZ2cJ11kd492cGqKzYmdztzd6duFLS5jWRykamCjzZbnTKscdu4D2oH4D9d8QMQd6iaJ",
  "key25": "2kKoiWg5aPBzJHa2CG7zwsRotsXrNAHvBnDiduWoxcYCZex8GijYc5yWEYB6Tp67Qero7PSujaVBbFjwJjWFDnaz",
  "key26": "65P1WFwV4goWcFiRS1kmY6UUhXwTB8jqmVCquit9bz2G2GNdE87TkNdn9Whb4TbrYs8ABifpwkNrLT3bYucCgV9h",
  "key27": "3DzdtjyNNmKL1VzxTHFJM4ZLqFM1GzdEp2LVjgxzKDkte1moorHZJEuj8Jj3gVdBgMxwSLyNsJZDbrpoDZGUE3m2",
  "key28": "3cxzHV71QGEEBuJ72gFkUwCajb7sNWS98P9yy9XVLMuMaqmNSBgabGbgU6ixNqyNQDqjvdp8brkKPZ2ECcrDmysm",
  "key29": "4oNqK2q3Nuocj6tTf2FNfFkGY6qeB5KNfFo1MdqbXTC3qp4Fd39Khqc1TjnTMn5tC93xGpwDF7ynkv615LK2a444",
  "key30": "5dw4o1TSvdxSc4ifBX9L9DzCe9jt7M8dpW6GDS3HezydNJpnZ2cfAVLbs3K14GEvpZD5WMrMUK9dzXvoRBqAx7dK",
  "key31": "9TTHLvCw9B581BTU8M9DxrQWbE4JNbioJCzVb1gvKnva5VfN13MMqYDrB5vYU3KqKkdwTn3vQS8mn95mRbbcJTT",
  "key32": "m1YhzGbm6eNkdjniq2FDbDQpHHnrzwooJAgNw5YPTtQzz6RiNUuBX8bY99rDRveZzoDgAKeazeF6zk3AMsDkveK",
  "key33": "3HCq4PgdzrSJH4PQvDLGhQeaXGRnTYaBGqUppYW58j4YTLDsaQfREJzhQyoDiBRjpVRMxJb2pjehrsZAbMPd5bpf",
  "key34": "ZuvrHz9P6e57f2ZVHKQXgQoEhKzg5dqGAuZmxycC1Z4GosBT6BjK9B3c3pQNMrs2nYQrmLDYXHWUrCk1N9YjSVg",
  "key35": "5sxsZ3tVph7LJcmytZGNij1BqkWj7hHMhBVM6sUR4sqs7Z6qEhxUBzYtajVwnNWjzgWrUUF5A2XiXrEVF4zjEd19",
  "key36": "5vu5FbmYPAQoJkjNTSG8Fyohxu2t8xaGNMeZFhPbY959qVYgYyQBktM7PXdwDgLxRPFx4znV1KcqY2UAtv6h5vcp",
  "key37": "5EtfEnZpf6yz1dwJrsEriF4VqrFmJGzTADQH77ZFnDytdbQKuzupL73qZNmeAYfkXywjvzHNNtaxEZQkudvkxbuQ",
  "key38": "FKU31WzcmLBgMvmLTAYYsRyJk5ATnoxC2iR4T4PDS9QFD3HrheHFHDZdEwiFYHFwY2rfamk9GixHMCCYYmbipC5",
  "key39": "2rMkvCnVfM4kmyYeActjjrte1Q3RnQE8hoWzFNuGmxL5364uyrTb4m8G5BaBtZsC8aSkN7EvUoqAcozoPHcM1N41",
  "key40": "2SD7VoYuoWqYXnvZCJiYR3LJQGaAaPwKAtZRdwpM33Hmi7yboNeRM4EhUuAnmifK8i6uy8U5mvbTpFNEQxFPhdHT",
  "key41": "HULYdnvgAVmYZiHpBAP76xPmoQj9EBV5Bdr5mPcXGmPhB2dDwixnWED88nav9muEBwBTk75NX6hMdRy4o4hX4Er",
  "key42": "5AFA7vez75adVQcAXPpfNVv197dC36Bqjiv1eh4A3hnmjL5AgqEPGWG2acZbAfS7HVcyTdoVyMjAfX7N7XHHzZML",
  "key43": "4VuRdk4udFi2WQX1VFwGee5wBEvF3swwNKzF6hMPXaHdGFvxhiHgRLmKsukuzunsgfWTEaboZoUmHVJH7pxukEqw",
  "key44": "4fgbrSCYg43Y72hM8Z2Ljffppf34sFa9xVC1XVRUZEsTMhvuWGoXeCVwW45UynaMB33EGRoUhnH1sWaLo3xmhaeF"
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
