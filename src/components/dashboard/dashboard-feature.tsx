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
    "28KA2wGu5QVLofLVB1eWZmJFqEhNbVUDXgqKn7WFrWxGzURAnTtmNtKVxbtKQLCpNwx89qEtBZgSuCewA1DEFiPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iik2dp2j75QKqvhzvGs8dZSX9HRDVhPRgoZYmnD8RNoANWcohFDJs9Ltdk4vDEypmqyrAMfVncyPfiCiSchsiJo",
  "key1": "XRdSYDJQpBhfKgxckJUqMydmpAv5vnQq1fHH9zo2pLvP57YGRHggRtW1o4qLgzZrWVdDx3BUZov2VX1s9mQF9Sa",
  "key2": "SsxkkUohfuRrJXqrWtTu3WyPZDBZqF5hAHgbabEM5T2aCa183hEEuwMLqnJccRhVPdTPBTtgdymzk6YSk5JC9Gm",
  "key3": "4vQvx8y45KqzFNU4XApJ9LVAniTfRCrkULFDnpojXw3FVQMnGhAzLMWFJSSqMqQDdbvjEKtyGuhryeGSyYGcp5bC",
  "key4": "4eeTqpnxUZdvijkHYTMSo5LNpwBWjhydWMXvaZebSqYN5AY3phVkEDCiA4xYZAn74uSpZtRaw7iZMv2n5nLQFjGp",
  "key5": "3BdPvzV9eQTR6fQ4V23JHiKTWJFFh8iAsJARXvEU2cWZEBn8xbWyL3TUFx5tJAZMcjW2EqUto9awo71tbQp9dmuQ",
  "key6": "3JArxUuP3x9C9iExvfDY3WwuVwdcY4X71xbhNGY8obsfCTCynCs5Qz1L56J3Aq2bDXYsDWBRcRjTYjofyYmkqeTy",
  "key7": "2N24a5HYM183rpenkJjZNWgN9rh93Ku5ojT8Xmja6azdiWGmZ3qTXKwcjfv1r6JN8MHx6xAGcXBvozGJCP8xTXSC",
  "key8": "42cVDNorNHo3pRaTXuVEij31qXSgxkqAcPuRWXPi53VVezDrmgZbJ2V7NK56a4fMVCoAjm3tjFpZLbnqxBfETv5b",
  "key9": "57mFKDaeQh2pDuRmj5M7nc5xGeiohupqtFfFvxr4cYf4YHp7zabDiC2m1PgnSBFT97EWaFHZZNycS9pPHAWJ6PSA",
  "key10": "2j81X8mvLB3QyNEuqNuZUgPgX7oa5Q9zAD2sYAffAYNozV9Nk9KJL7DYGvr42DDcjZEMtSZge3gAwd44z8xsbNwp",
  "key11": "5GQncdvTWanTNvhvLMxWvjS2NWzF1GdBmWGq1WMTqwAJxQ5Z9HELN7eHVzCg37bEQeVHiMxiaEHyoY8EZiyGDJAd",
  "key12": "4Fc1zmyzUVuZPQzQ9Tt6W3m2PumLUDnX8iHVgGpK1DkuuYY2CQTRiHZXhd2yagxEMKAYL9Nouwb3VnBZU5M5QYsG",
  "key13": "5PQmdh5gkbqtrkno3Xxt5dmbm9RJLjL8z8GNXBveyP4eesHEJgdjQ28KqPLaUCCsL8YwVoFBKbZMmwwS1fKkMjNQ",
  "key14": "5aQT1bBbEutggK5Pteurkf19cXhPQekaZKigA1ojwnVUJoKrpQMPvYQjXMuBSrGbxYbWh4Y4NNKmsZ6SM4kuJk9L",
  "key15": "42TNZWCbAqoH3qitQybb3a46K5qxWFhvJi8EafFLywKP5PHC6hYZHAMraRFKTFmD7CnnR1wYxMXDrXRhrAKEzNFR",
  "key16": "2Fwxp5ZLkAkU22jsYhuAh2F8c7nGkAA7XAzdwZ5wgqJ1smnUZymu7mt17AY68wo2UxgUY1Gkvp9nSqrThJdJYBDB",
  "key17": "4s4qjd94a9ExwbURTVYN5mwKwXec5FnJKTAo19mfiyjLH31oTi2zFLB1XqMYkVBBTQTaKts7ujca52nZx9g9SHJ5",
  "key18": "3DWC1sz8JEFo2mMucygo56w6pFdMat794wqMiAsPKK7ccfwWjZnvqAbSwC1vDes4cXCuBs2jBHLyr2gTuZXNrLnY",
  "key19": "5DfZN4g1WD5DZ12CywgProQHoRqJ517yaApQuJDWJ1Z5qi1J16d7CBiKsPUyXniKQD5MJ6TfMSDwBLSH1G7Zmnqg",
  "key20": "39taP6vNtevYsoBBN3yrTFi2kFGbXre4fJZ8hky9yq2YdtTTuKX48CPhk2RKB3SY8yzpXBTbB9i9gtSTe2vQSCbF",
  "key21": "46jXrS31aQREczBzsTe9YuoAoLnyohCx51MmbjNHKHtwiVKxgPzZjZ4am7j92JwhZAWvfddM1JJwDqSnFWasMdWw",
  "key22": "5PYwH2cqRHKKfA2F2bHVrkSbJA7NjgsCyZgGZQJawUJoo5JQGFRu16MqvkzBrjN6b9MatUnm6f4puDgPVJBeUDwo",
  "key23": "e7c5j4HwcmzC9EG1jbJqYqDX6vX3jK7T9tBdfSjP33P4hYYyrYtTktyA9v3J7ABtbTppWN5aVvitxLdadRmwPrp",
  "key24": "3Jzku5UcqerVKU5cM2K61sztXJPuDXbeirrFJyYhQRZ9Bdf85ekkMiANf2sDzTnjqo6UwdZX3i4CnxVDpPwsqDjY",
  "key25": "67hT2ivsc9mQn6jmJsU37xw7yh4XuX4kqLLbc2a7XUTmMPPAumzGUTr4okHNvrs4Zb1gTL5f2FEVPVAp7Jqqix6p",
  "key26": "35kNmhLN8neTyCt9RSX6Q83b1957rNqsRKgpsQkWf8ZoXfTmVyBLyJDgx2pj77fBejVrz1817zo3sBzUPeqwEs6Z",
  "key27": "4HZkVgu5FABgtaAWVSpN7JWEZP4V3qURwfbkXW7GUk5K3NWikChLowvMH3qZbGAXenXrW9uiD67f33tKBtJ4NXkR",
  "key28": "2q5R3AQxGgsFXLpiFv3bHHAYQGwQZAeTfSfn5yNtVtsSnaUAveye4Ty6Pebyd14ydCmX9ZTjCo64ZzJXcEWTNYtF",
  "key29": "4LjdFcfVDFwovkevD196sDrzK2UwSv2RfYzYuunu2WYXTMv2y1e7sLiYaCrmrHiH9pZ2hyQ4suzkQUn5v1bfuUP1",
  "key30": "3SJjrH14bXyWEaPyqgj4YguwZNabmMfw6csMueBdXj4NecMvyw9zVR5ofmw8uf42yo8ScpmDv5ZvpvFrM9Q2ytjY",
  "key31": "2Pr9sYzQzit6eVH3b2wQPG1Ndcf8NaWfneqvB9KVKuY7Ze9Q5crt1HcY45fxDGJkfsxaajFD5jWQikv8nM7kwvXm",
  "key32": "3iTfvFfL5KZwYkzcpLecD8d2nVKCv2zYWGSUBEYACKQ1eDjf3Z6SmLwDsus4x82vqxhMVA5ssEncropRcMPndMw5",
  "key33": "LRKVHqijmXcsTUE5XCdN37HJgPctcW2jiAhqJyiTbLBv88fezVxsnw7X3UPaQeJdMGcP9zUTjEebbBqHKwi9wWT",
  "key34": "3HD7yM3mh2iXt2ngxsPde51dQGuaPiMn7cBNeSbargTzqnsakVyQffJHdQRmNLvCcrPXC9fVrhFuwFtt1TKKYDtr",
  "key35": "Y3fxKGyR7cj5mT1JvY3dJXNo9vmGzimKx3pC2Qx6gtaSm6DU18n7LmaFZJpxsZPpdrUBTjNaUcmZmK1tFY9ttsJ",
  "key36": "5n3n8XysPeFQo1Q28a7Qducwc3o2BifNuFdZ5KRHC9vsmDdkmX1DgTucGq76RawUR4dHUu59UZdVLVq3DJhGCkwy",
  "key37": "3vfBBLtby5nPr4PBLNofvPA7oKk2xCZHKwyNcbS6KTQumvWh99JikdDrR7hPnSzfB1oCqWwjEbMXdYwnZpvw9fCs",
  "key38": "WU5QW6WcUwreidAYhah2UrLGo3s3h8cMSHQdQcvYccF35JxbK6h11nNLFrRY7srMW2v94M52EPS4M8DSBK1dRwX"
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
