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
    "5yNmUEFA7cpT4pEBBQF6Q5c3jVJzKfnEEZp4eHWBeWPnWCiqcVAZr379j2G9EpXVMYH7uHyWNzBKjdbG4RzeHMpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NYK23fgxyu45FskUcwynwdZBhTPZxEKwfGpURyqmGFgJ4XNhqErw8iWssT9DyKHx166ERDAsZg1HiksgZo6N8tB",
  "key1": "4qmoBPh3zddS1rT4tt5TP7qmWxBZp4fwfY5gpcf4gP2zkqnEeS7Wtzx7gkRJ3dYpWV8LPvS7v7Ldpm1QS7HqQuGv",
  "key2": "RcR7Kaz9NVSMP6Pf2fsKzjNrLzh1LvASj6DYFsP8Pqe3Si8UBP9tFSvisJV5ntkJEHMQpa62vhExrbrq9VeJcqD",
  "key3": "667YuYYzPkaSz8GFA4WS7TzDj8hEmcU8aXxjisUKNrsYXCBXud2CHaBtDDC6EfpRUghTMGyCos8HWNYXPLS2t8Pe",
  "key4": "5fbww1iadP9oijV92ukUU973jnjSpCeiR5pv7x3Hyck46DvrCDv5aQZ2hbAycRXX7M1iMiM5Drdub8Y6bX9k4nyL",
  "key5": "2bgVusfs7x1ZJzibND4cxoKMi5BHM5byKEuCrADE8d25RY7gALA9z6cRrECj5g9B1LX3gYW6sFFySktfw3orTyd7",
  "key6": "2V3fGpnt9AgTCbamBeRCcTHdButMh9uooxdQS6B6Pjoaw89FdzNd8N8isGNWRmZAMzanWq6fZiKXLHc45Z2FGhTm",
  "key7": "56jzpMK8EzTZR2RCMRnkc2ZAUVTXcDLXvq8osQPUaejZGkgGMSeEbVSJ5urBH1ytuF9KanA4JFEZS8KyrDGrphvf",
  "key8": "2ptdvs61od6h2GnkYQ3T8cvbkh4RxJduGXnar8kxw1cHqC4ctotXG7pgNc31SnFcasuDqnZsKKcxoGosJ8ghW2Da",
  "key9": "2PbqNnoMEGSmAyxNNpPWjuaxymRViAXpPKmkNKR73jwBDPgH3RTQxe2UUjgZNMs1Pt7sGZSeWAvJVP4ve9r4tWrd",
  "key10": "45QL9PUdGgZGY858zuYwh16fTesZyG6g4SsNoNegejpD99tBvA6rWbagu8fWcQfjJVBsWC5AKgh3zLkS7Z5APowL",
  "key11": "3X3nSeEHKe5coKUuZ2fm12dpP49yZE4X7rUZAnfCUX2GpiR82QiG6gYakd4CK5X8RrRNcpPjPmvCDvN3wxWJXCsy",
  "key12": "PxYMsUiHYkHJWY373TYPWvTpqrSMArzcWKFdatTqL6yWefodXpA74FaV8cEkbJR6uXUZBrp3i7FCGL9JF2nvZf7",
  "key13": "2RjyVocskyVnALXGMGi16ZY1sAe1uxqKWtE8kvRv7j7ctEi49y9Ft5XmawJZkAGFvmp6jqDBcCwGYUAm84mHduDc",
  "key14": "3nmWgRbxKbgNMiu9UhJgukNtwqL2S1UnEguY7nbRkgjvxBUb2uCpQ2U8VVk7xE78mCPKZiKRrGAHfND6AJPcBEuH",
  "key15": "3ipDhXNHdwgmizFMitFjYr3HBaDnLBQvkHyMhxgabwT6chTyYTQmeuswCfJeoEpGbf5iEkqBq9QA92hREdzXENev",
  "key16": "4qPGgT1P37SXME7VqRxsoiVV1y4N8gVXYBeWKBF7BeYAtHkRqGK7uyynkFyftxiUBdBLD9bjS5DdFAJM7aM8peTq",
  "key17": "3x5METhF7jdHVq4hvAsWV3yzLW6sz2eSetHiEk6FeZJBaDDANNMYticEsSrWChBbGtYdNhxR4PXhV7qUDD3JEPR7",
  "key18": "4Y5VwR14pv1UPSh1PQ4iqWt51pv1HKBz39JiQyPduWxPpxQn4EQkwEvSsnsZc7M5Pvkxmc93BgHuhQXup4d3aKKV",
  "key19": "hm4Hk9rdaDkXgRS9sUpRG3g3pAMdmD63FRQA2NZ5tAdWRkqTt3EUW2e6T7gBhXvrGp7HrZujDDa3q56RcZ9VL9f",
  "key20": "4yfmHk8ywUdxedenPWq5Pt3PhKDJBco9GrC7VWn4qj2VSn7xGAwj7HcM6Uannk8rLEXBfvA4AwTbfAa3WZgbrkjm",
  "key21": "iLuZvVZWRaYxQoawFPcMfsww7PZfdA6PdooYCuS4pfvDnXu5iKTpbxWaQfKs3fHcdkUkjNDQZSfgz6MLpZb2RjL",
  "key22": "3dfJaAkxpuHG7yu7H2An11fM3RjZg89W8Up6RMqYjA2WwBPfYL2R8cKJyYKHpUqF5heWDx2hK5Q7VQfLbfQ5bXU9",
  "key23": "7u5XqubkfCvW5DvaR7ykK5xVAhdLZN6Aojk4GhCXBgnFv2bDZ7TKo3D42yuoYbGKXLiLRrz6rvLdMHXiyj78Wap",
  "key24": "wczuK7GKksHmerDoEZkebWDR9RHFi9rvxp4w3avZ7knRmWT1MAJHxxTytVsRYeyc827CCakXqMojkBEqiLvSXtN",
  "key25": "2vTMyWbD9gbhZjAiW6nzCnuV4NqeRGHKGXvZfkdL7duVgih4Xevw6mUgmbeK3aZZbes4JwcR9jw9czLADTET1t91",
  "key26": "4ygs1xgydXvkSJabjj4K2VeERi6rvC4T79nHMa3P7SJL1DNBFBa5Tcg1Rty6SbygHsj6ymZxHJKYd1SnxyHWH7TU",
  "key27": "2m7fBCUurqs6amKHSrBzVtpUBVgihYbV4eSwPzh9EzMznzFkHXBQKjgQZ2Zeqvr8jMa7HXhrCKofZFC8SLcmrxBF",
  "key28": "36RYo3h1M2g6Aefve16XPUZebW2Wvpr8StWmZnV7kj7QDhA4PfBN3fv84gcrkbd2tWjbmRMpJuqt6nbtyUqT3nhL",
  "key29": "2SqrqcBJAe6Ha6nkx3AgM6VxGsdXqsUf6A58Azsn5JGua87pqw2KkGZkdt2M1jvtVVSGrJEeWyigvwnnc38xhYoY",
  "key30": "45iXtQkZZrwyqQfeciYtcBfNM8yQZVCJDPLC7v5ay1tNcrsZ7QtH7ae53LdnGsZdTeCNavi44ZdqB1t3GcXRMRoe",
  "key31": "51MGR3mK7XnFBPgZUv27nCpjCjLKjwPkSRSqM3dsy71AHiSAjikrqUx5yUDcVVajx7UEMuxfBrjixVoHPEoLNBn5",
  "key32": "Wyqu8iMJxoBGXRUwdY6B4EnGjTJdmytiuiQKnAUTx2L5n9jWKY6BH6a5jZMtG4SfMcT3onzmqnUWBGeHtWh95xe",
  "key33": "3XXTEnKytyJ1xrauzhuPfEM1Kz6gCp1cKs72QsQZ4enwMUR1PNeFzzz8YaueP8FPsbEVhsQRDM8YP29E9idhFqPx",
  "key34": "3StVXWBwRqW8VtMTxR2UdGEh2X9eCxpus5YsxLG5oV96TLkF2nN4iFUwGrGDAMrWT5ALL7DcmchijGifdtEPkpzK",
  "key35": "4N7UZXpAchCh7fNj4jjqLnZogAbfbCnzH9WW75p1SrupZ8qxganKMwMWHaT2UP2ssQYJ94LhvcnKu4WqZZ6K35jA",
  "key36": "4Peyj8BnQ3mPQ4iUb55U6Y1qK9BcJqRJoUJFw9VtX2cepWwPSxdFe7Uh32KvFDpHzZdqpFBms1UXxmK8iv2HUuX8",
  "key37": "2bKiHdSz5WZ2rkzBRGd3Uid1ZdTr2wksT3boxsixq1yx4psE6zaJCQ6QBPmnqBakscW7ZqpnpsQSHrAQCKAkZba8",
  "key38": "57GMd1cz5WGncqkmPWY2KYotVDLDDLv1y11BuFE3D46MgHT2HYuyatLf2LfNzsvm7hyNnRTEK839YJdg63DEdBZG"
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
