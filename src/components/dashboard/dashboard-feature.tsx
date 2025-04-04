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
    "aem58WyWaMy5RqrigMLSzdUMKgMbbzDWaCcTKtcaAN1maFUdSWxyi1mCqMQMyUNnmrovvGxLj7kTgKBNHhM3gaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58w6HC5PTkrth8VPpnvHPSiDafVertpTFj89CNattqjaAKZBEWgaAnkYLXW2vojYsEQ4hW4VZmXkWAYoK3H2hk1Q",
  "key1": "2WL8FZLEAxPNzA9AHKu7h7LRoweiqUuWze9uVMZTv1QNg9KZkLAx1Qs8Ua5rzd1UZTfmEkZciELpw3LAc858udqy",
  "key2": "5ST41S63LbAN7EtP28vfHNXBJNwyyR78xhmZ4cSYwdz6ufSFcykr7Hbc2pd9PVkf6D4NE5SsnNK7L8qdNFsFV7Ap",
  "key3": "4RTm8sEF9AUFEx2pWuVs5vWAAYaUYpmsb4RADGRShgd6Ccw7emTtjtoqraJ9epfUQuC1kJzuRVpKTL5pLEcWKJH3",
  "key4": "5CshxFT9AKdffjHxUUxgWusNFjjZjgSb8Eb9XQdvJTjWyjRBnbk7C7QZEsYHwsNNNQMxwAGsJ2jUoYj2DDLWLiQF",
  "key5": "4akFSSyx5VAnVXtxkEe3kwjSGD6mDaTyStHNR4MVePsT782Gsn2NeFg38jS6eiXySc7zKE6NymPJZVZ5db5LeXFb",
  "key6": "4buSXc2oCWQD8SAgVLatPraK7fTiwy24qoyxQ9aWLxWDuuJBiEoAr72LFy268LFN2Mbt4MYzrSMAsoVhxyxsqHCf",
  "key7": "3ZzW6cBHeBAumRStbQeaftwbzpWjKRr1iSsFWFRTKfTagEed7XL4k3uQnWmtqCCpVkGtWa12FUuW2F26RELJv654",
  "key8": "2zJeJ9wmHaXDcrVUgDYZziJaxscZKuxo3ZjLUZ35W6G7UKvVDYeuGhKksX9LB46Bws6VcxEARx4fCaPMjn2mH7pM",
  "key9": "3ZuEkSkpMmEDenTRBwo3ySFQ2JJZnCnHkrjJg5EqRykTvvBx4vvQEkXMEHiD24wgVyMvuHPUHyUfSbdzYx6J6vPg",
  "key10": "5KMbM2xDUv35ZZHPHagief9YKSVMuDRu7AC9AxdgRP5qACuJt8KhsJ3CDMNKcxJY24iYvR1bh47qi9EbyPzTtNwG",
  "key11": "3puU6oT1x9tSs6C1AM7w2L7d248veZFaVM2Sk9Gtb3GiiRgCef8ZN2LsLdoLpZYKtcouLP6w3wnTbf7cT2Bxsk7k",
  "key12": "4xdk538v7He4XGSQBUyRCznF33RHQAGFXwh5hcy1kKgjchMZqrAzG9xUcXgkKvG4syPo71pYJpxbdv42PFjkbaQ2",
  "key13": "53KtwXxpSBww2aQMVS9SWqTsEW2LM3P4xKfLf27b1WgwbR2LhwsxKT216tppDQMfu6wbiKsuQPqnJgvkVTLV9y6k",
  "key14": "2mwR1ow54twNM5DckJcTh2hNG9uo4uSMZ7BWRidC4ZGmf2J5t7SFq7reiAdkfaHgP1HNgBVdNDJ7hNmviE8LJS2A",
  "key15": "5xNjrjrFhnFs2YJxetJTFTw7eVwFpsNVA1CbyscB7hbBwQZuqyDRrz6YvD7LP9savjYCEcvvSvY8XpRCYghCYzCQ",
  "key16": "22W5BdfKvpdq5EvMU7XR1NDxaEtFU9n4P4JdYVGZa8FXmfKAdFgGMUXy1hoybQE4LBuMbmaqMjK8RFjP5bzEJq5P",
  "key17": "3DRCu2MTp5vrCLsfPVjLvMDKCdMGkx8rSSUU3WMK6EEAXaTRv2gZqQLgorqkWqzwHDJMqj4fZWYD7YCm9DzmFtjL",
  "key18": "57qjGZyE5MTHidApbxgsxy7C2RixZ4wQk4YZv442MFPpbZa3Tibs18Gq2NQ9ru35sQLpzR3uFAoezf56HrYpkVyi",
  "key19": "EYFwbg4TnJeoNbEXGCFwNeM52rKUwVEQhUNjT2WkXcPtaguDQnGfUgdKo7Swahhn2zsp66YzMHndNZYXU5igDUu",
  "key20": "3EXSMCudMcS2jZwBiMCaWe53t8RhZY6rmnUUCRLSYnSZRKRkTPByHQcbDd6PddhtHGA68rUzEdsvcG7Y8hXfANiG",
  "key21": "4vdCKKwPCFnLrc8d3EugH64oenWPjeV23RbCFpA7tJWap5ddyjtB6zstV69aC8NngGGsE91D7jcb7mXJRL1EM4v1",
  "key22": "3Mok4TwCHUqyXfMpStPp3nw2bUAPZqJu9easmDiF8geDhU95S9VGqHwfizb8jxQqN4aBQctPkv8qsf5NSQMxRetk",
  "key23": "yBCdoeWnEGSsxXmFPGHHuwHxktLfUkAQep9QaDBTfbt9y61paheFefjXFTfiZ8hS2chmPA3jutpxWNYVhj1RqJk",
  "key24": "497F2dPqaBqdh9NnhASCufSG5C29XmPQPud9KV2ZXAM3tVPuecPa9SBF6J5tPHmbjuWQHUAGr8bnBWwsbHt6NAt",
  "key25": "3z66ddRXGxPN3Jwv6uJ1hNaP7P4rWtvNU9MEdCGhgjbVtYBgVBxWAJsEQugwrznpWz6yzyKMLjbQSJHUkydGHdb7",
  "key26": "2v5hsiMX1NwFABRKuZ7zjmu2ZmRTfqZadjPEehQihyGK19oWdfEcwbvTJVmvPt94meamWL41Dg6FPAbHnZJxUF2c",
  "key27": "5fVcDrhNxKUGJ1urNDTokXxwk1PrebBtvN8DyvB3fsz8Dom3Fc6ddUrzoDGziQt1Y6NMCK9NTsk3eCTgUDgHEgYN",
  "key28": "3dJmA9j9v8X9KYJzgUUpFDLGP2vv9uQFzhUJrF4mMbeds2SmUKoJnJb7bEfbzzAb8ujFCRjbSVnA6hVroZcimL5o",
  "key29": "5ddA32nZNGkU1fcjyB1myrm9tPiUaH5Nh5evftDCvzExLKTmaaUSWjxACh98LeUWptJn3cBd5gSN8CPAF17mAaX",
  "key30": "5S6XwFxcvQpR98J2PZabao1EZxA2G4CbTeX1qnv2XA7y7cHx4Dm32VdCqY8fRn7D9nagqRKtK3fQx1RzPvrknvqz",
  "key31": "3P73MJ7kbswyrKg6VoTb8kLyye2h18taiHL8E4xyPGSHycFuhm6sAZ2ar6xsYSqgmAmEFhb1GPmzGCahcLmKjXy",
  "key32": "4XqDCXoAWNjpy3jtT8HVwrrPpmiVB4WmGzmnCzRMnSNmGUGVKUarQeU2if8RS7QT8mwv6BfiUXq1q7aCr9eYMthG",
  "key33": "5qJ9zNKPnMVtiNMCRbccXAAWzg25UwPQoaXhmjNjyENzuwEdBfRdRMJgzn7naH4iXy14jfVFZxtGGJicL8McHtgM",
  "key34": "46RGCBEzdarmRQ2tWVBKH7vuyKzD7PsGZG7mmvvgLWbxMe7AZNBoK4ai55CitAQjgtMoow8JmcBZbWyB6GSG2eUn",
  "key35": "4E3vBZLtpUk89W1tAj7S9CBS3dZjaG5JnAk1QKGgFenfC9YK32LGaeDYQVtB8mQohDSqvrPMUid62iUyDtoEFEUu",
  "key36": "3XoKQZcgKF8ntMMou19mtAFCcjo9yBzK5WUDhUBkKLCEDyqU4cW8UjHWw9JykEUDVWQszthEo57aGbpkrcHmavdX",
  "key37": "4YXS21pFsZ2s8i17WkiBFvhuJT9EBfGEnpX96kyU1frZPuM7Y6uiU4aEUMLGi7vNevK6sp9fWisMAFV2Rh6qcPqL",
  "key38": "4kDpVyuWCNKrweJgwzZrsb36F2uCDm9VLmR8Z2AjSahdu9M69peQMKTREwx5mKSz8HFvkR8KxV1KuseYh5KUGXjY",
  "key39": "Vn1pxZVDPZqKrksSGRQj1GUT8ovF6G71ByRibMXAxQJ3F4LGNR2nTASyfH5VhvVVWtiuWEn7pDG3yjg4JFSeDnV",
  "key40": "jpQNB3eTCRsHpwJc8pVaxBM13hKQYw69yKogcL6nKtYe9938y6vSV3ogdH1cDozNdihHNiBt1DmVjK8JHCCEz4f",
  "key41": "3QVDRLJ9vppYZVC1PMjnw5fKdUVkF6mduQKBjp3TaPKo4sSkuepi45cnnRNxRLYLYva2dUhG2gDoTKTWrRSGTB1A"
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
