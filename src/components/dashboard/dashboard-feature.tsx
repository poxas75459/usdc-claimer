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
    "39HSbW6rqWXTLjJ41941Pc58uQgKTpyaNh5Lo9dYJRaUvkMKbMioE3ofwCxshAv8dvAUU51vXdbABsX8FDHDyo7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1i72X2BhEBHYrkzpGqtRM3bZGZsTXB5ziC3uhKgtuzd3ZZ8Gx7u6X1zrYAVrQRy2LZuNaxQEmBTHXbKJAE3GJ65",
  "key1": "4XbGEHG8upMjsRXgDr3pq7GWodUX1m1bWTjeovEApSjdR2LC5ctQp5n34xc769d7debtKtMxz6hwVk4yBHbQpnEC",
  "key2": "5u3uwLDZJ2za5vjSdUKcEWbwZ81Hsza8UAeqhT64U4Wc67Jeo3bMnYVCXKqZM6o97XAKf3gkhn1G3Z8LiCn8XK1d",
  "key3": "5oRaH7aWTRTwBoyK2pLuywmu9SALh9dDLVrfzmMHopsiuMzspvXiykGjPzs6otEupS2DTRzTuSDy1B3Z9Mj1Dgur",
  "key4": "3qPVTs1VoUuLYbazsoUk4iPiTohALm9d7gVro3VHunuVMcaaLdVoNh86DQAGS5gwmSe1odffNitvdtqZamUTioCT",
  "key5": "59sDxqPZmLqedYLsQDtaFkdDpRYba1aDm6oBeynys2bzPu3haa8ia7Pbqm6436RxAA3guATrkgAaeDHGmScBH6jR",
  "key6": "2fm5Y6AxptxceV6L4BdD44kiu1L96MqrfDCxir7WEdWXQupiBnM36W17YeZXiuRcWKADdCuVMc32EVSkSNAHLKQP",
  "key7": "2rNN6K92CUBvHmxdVh9HXyqKvn3vYuWX2GSJeFDf76gmr6h7Ld4EXxMJrEFqPbtU89yjFcJKRCr6XGYeW6qFSjXN",
  "key8": "UVxckDp9VqJLd6SKcYSanjdrWQv73bjfW29gSh7vr1mBF6WLgdnU7cpPkLMNJ8LCgHHkq4pLKMegw76XRUGZM9W",
  "key9": "VbpHKk7BvkMfc1w45GzvDVTuC4j8aszRJf4xoBKGMdufLvLyNR88awqqZERsePpSkDLbsJVnZfhCCxY22Lchkuo",
  "key10": "4kpBJVxWPeKrJiiNYZNg4VJ545KhkbrozAeT4fNYd21q65LXnWTtwfk3RrJD1CJF92DmSzvb59qdVFZ6hepSGE6Y",
  "key11": "5G9W473jHSZufMXBZQQfvX2sTxZznybZKiKkdFqeGgjR5a66FhQd8zSBEDwgXyF2pfXpAH5VR1LdHqCqoZh1H83a",
  "key12": "3LWt8b7zFdBLrNmHF8dKZX8eE49P4WBFCayJgu1QvmYwpK2Bd2wm1m3uikrGyRuaFbmjc2t9zZo3B5BiVnhfRcr1",
  "key13": "rL7giNMwu9QK94aUU1kk6LpErxjPqmu1NXWLxyj78WGKqHwFnpsGuveXvoY9t5KxNFAFRWYSzbBhPdy8QFvnx3g",
  "key14": "4J3QPvCc6GRkTWv3nSizhDy1HZjYHBRdJyubYAZFCH6A5eiBXBYLD8yX8ZGJJZ6Ukf5x3hJXhyqenLXeqDWr8bSM",
  "key15": "3Lm7zaUUc7fWRPp7jXC769Ro4pW98f1Md6kZaAQ8QiuiKFqeZjrCSbN9Rt3HpThijDc5yC97BDR3UeU6mFMGceeq",
  "key16": "2uAqEsS6W6tGbTxzbM59oaTmnU3j97bcpU32Pei3ZTAixZ3BBa46eZfK6a2zzc53CdR4qaLKehUxJkEpxYyVPbGC",
  "key17": "5AZm7xrpgwL4ndqZqJnYHLf5Af61u9XxqehadCHunYsBUPvDMvwT8NrpEvymRq6KdP3docJH1HBh3HhVHQxwcMqM",
  "key18": "CgmPUpbFmeSdpqC3zgSS7fPCwKK2kg4jsVPohTmPJeqNP8wXnFntrFNXQfg4ssis9NPuFZngf9H7c4vMewddQuZ",
  "key19": "KdB5TtTxgaKLbevLybdRcVECWkNciEBabHXN8mhnpt5htHbW3cZxA7vgVZ4CH81F4Bu9Uvyz8nnWgjUsRSrZHWB",
  "key20": "3i68WNH5nLnYfhJXBXdtZQ7nEijKupL1mz14CjvkgPBgqGhLzCUE95dWWkgVan6K4z7v1ZJU6riSsYv87cog1899",
  "key21": "5tXE3qqLLmK8UTyg6gxZ6b9dxwXP2hHUtdCQWdnUTdNdVBpUg2Xu2zLMevRG2J62aueUvzNHTPM7uekESvyja4Xt",
  "key22": "2pq4cbPQAHW4UEWYP1HnFf8TUpsQvfFQRH3J7JjUC3oCaVY6Sjwh2qJDJnazEVsZcseALKRcQBgcj8WTJUwAuKTp",
  "key23": "4HG4s3bW41BLwUUNTkCnSpsfrYR8DWQfxPc4j9bUDqRsra7Y2LEaKNG7F9zQfuCMhrwnQZuia9MKBURjPJjH5Ecu",
  "key24": "X7FffqFrS3iETfGqgor1LyBSzvZ2zmXgRmEVqUxDvrwTBpdXSGuG5hwuDJxRSAktxLStTGmQF36ENHnRKioCgvz",
  "key25": "5WLvkNbnUnfBUPQcpe2yFfqNVjDMULxmL945qLyBJy33BGaAASLxdwPh5jJ7jfNH8rpvSsfezNJppAa6CRkML3a6",
  "key26": "3xYR1pnmLmQsNw933LoCh8XUDxgteeyQRNsUSwyXU9quekmSa8oF66oKRYi1YmyfjzWqs6KxwUvaTFCeVjywZBn3",
  "key27": "GQx9DeixXdxGoZAnq3J7isnJrqFQZY19SByXcRp1rKryQN4iHvPfaevuFY5mMfFrk8ypbx5xRV31MmTTcGi36Pd",
  "key28": "d8qZcofQ5A3i8FJu3Hdb6KKLoHoQcb3jpdREzWri1JohHL8Kz99YSUDU65c3u2nYpozMz1ZsUm9qKrZ6ziaX26j",
  "key29": "383D1as3vFXFwezuxmjBzkPReocVsSWBL1CKzojdXdU7gyhPwP2FWxPaPQdALX5TubyFfRZyjD7m97iCRWMJspeG",
  "key30": "5sCpLFnUbQQBnnrjNcHzyW3poGkfvTPh8Ds31PhHinvF2pSQHLe5fyF5mBxKdFenMdkKzcom4kFbTmBiVgq1YEpC",
  "key31": "4iYQKVwYue9KKB8vEEkHehP6YogXS5Smn4NgLpwMFiAPqWCsH97n5Pnedz2hZLz9RxjDuwGcGwwCmoVgBJpvsSw7",
  "key32": "3KG34q8kMPY2kg5SBrTmvxaCLjrttz7xa7tN1TJGXq4F3X6jYAnSYQzmp6uHgwNE1sqPFmTrnLzxM65szGv8dvXc",
  "key33": "5EmdsVA1SwUxRSK4XqyjYeNjQksERQiaQCQAj63hjBWa1bkkn1Hwh17XDDiGYkJSifuzUqy7QmjHDWesmkRAVoQa",
  "key34": "3mXDDF79mnSo4DXPbWQXyZ6kr8eZwV66W2udVChRNMkALRYbGUzxzn9912pMPoH3omL2H7i1iSSQgVMrVo44upUX",
  "key35": "5pvdCcB6tUTgDjFfJ1qBdagLFGT9pHsp9o69xbHX7HG4in76yihFBF2WrKE15QwoG4rszjXZEYLonMDjaByUvHs2",
  "key36": "oEhbYLCvkSQTBPpDuqhERk7okmBqVVvBiDvJh2fVpsAcV84xyYHdHHbHj2ZCGb7XPQRfJArBdbi31mejwy91ueq",
  "key37": "3YJVeUVamftJQiqki3XQKJoWV5bntbEQxsJANCkj4UGu9oCnhaqgCXwt4f15ErxXVkTCWBwWYCpyYjaCnXDBfc7m",
  "key38": "4Qer3LB8gpuJCY7DmgYitWEdqnFckfVD8SE7114inM9e1A74idVRXDeAibnpxcExnXozcXUdo23CAALCkJt7YDm6"
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
