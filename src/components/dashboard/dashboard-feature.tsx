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
    "QJwNhfcMCyDUcTjLiRv8jJuCyXnGtjzyLTE2SJM6atKZk7ba59BTkpz1aypWgHWKsjv4sbnbLuZ2FnYyX7HFhKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RPWH8CZrcqHS63vChJ9Y8DuSi1YFa4r2rsQPdf6irmPo21bxQJCX1td8fVY2fo8oaFukcR4Kc3qemwfg2nGX4db",
  "key1": "jcAkBjvkTqReoR23BurYRYf1Xixz2MrGZS2kBV4mD5Tqna1rxGqRE2sLZnYgUNqhUKZwDYDtVMqVCjzgpLmEWLu",
  "key2": "3PGWgTVoYgc8ExofjB8zVe9QJtx6UN4kC2jcBecscG9gdLVWicCyfAakQwE2yQoPXU4tyJjxPsDEi6bdDNYFVxYC",
  "key3": "3yA8rKnhhEQpCphUKTjxPg8saoEpySMeZeMFk1dGZ5QSt41XCsNppUpxTHaT8Lx3mUcWHYPWM3qd1vzPDLXUd7cx",
  "key4": "jk66oFrCNCTH7KmN2Kg4fyenGEkWU1QCYXd11HkHds4uZrXB2nu55mTcyr3v4g8kWepVzunbFWM5RcNNrS1qu3o",
  "key5": "gH92TQyjLgfiAjqtWxqf24Xu3rfarm6xXiAtFAPannMeXVnQpJywBX2jivDHvn7uKVzLCsydKCHAuUyxMQAKdEw",
  "key6": "5ya6d5WFSDQwB5c12BjZh428WoBE2HMRQetzn7CPJqMDimJCuuEkBpAozzo63Nbcw8rMva9GAq1P3CvUvoxd75Xa",
  "key7": "1XQaixBitbMoi5LxAMhCPvLWADa3XZxfmfuLJLh2vucGxanSZo5PzXwPGCHtcBGkJycrrL7H4WqpVvbAvDfo46a",
  "key8": "2QhdC7fJBbmhtLwCiAAhDy1fiu19FLUdbnCgmpVcMBeHMTaL5KpYSJ9EhEmWg18MatCH5yKe2AQWe98jbsLEVN7a",
  "key9": "3dHn7L2xUCkTkWbaPpG3vYhpBoLGa8X1xZbxipq8qB7EqB8mBTpc9kitM1JXrWZf8vdgWWGduauKekTyeBKLj64v",
  "key10": "96aCg4z843FjWFRH6GX6ugKTzpg74oRZmasQ5jPDemvtCEDwv4b5XdLxS8zuYwkiE5eGFt8UNZ4mPPmyLBdzXks",
  "key11": "4XKC79uGdYkbgACq55AXg6s52XC2Hd1ZNb5ZiTFarwti7Skdo9Q7aq2WfBUHH7k5kBcpdK8P6LCJrqR4u6D9aQBG",
  "key12": "2PWPyuezBmoEbxjwFV1YGnCZiR4ogy2hqvjfj7jdDANzdh1Ph5TTuovF7VKL5z4CtkiitmBoi3brKPxTVYw2T9bn",
  "key13": "5Zji34LdvLMWuH2dMkB4YZoCsoeZUA3kbhjyhzkmEwpJhXsdMiac5GHp6DVzdbzdMw6oLQz6f3wgrEd2SztrFn8e",
  "key14": "4aDF6ykzupREpMVMfUWy52NWp1rPhznYDzm63GU14yggFYcLpLWF9u21HZjcFD5M4T9LevT1hMHNtHsv4skzaoKS",
  "key15": "4Xbh2z5nMto4EqNKPg1FAatzMLonFerX9ev3vfFabz8DVMkMdDfjzTrdTQhxJYDtWq3EDVyZF7Ed25GAjdoZEdj4",
  "key16": "32dxADCviXg3N2NJw5DMMrTwUWKd4QWJrc5TBJBmDLtYfah68y3bqwmj2bQJz5r5WnuCD2kqMCCsowywyR9EQTCe",
  "key17": "2TP1V324wbmAMv9JddwRW7vkuqSFJhLtpEhoJ8EnymkRn1wogR2u5sTki1yZYpQywVnCjGyF4idJ1wHi9b8hYjWb",
  "key18": "2jxsWwxXkVthBzsEtCNydcE1DVXVpgEMCaokL6MCtqFP2cMn7q7icLZveeweXdv1mX5vD7N5qsJmpG2g4bjuz6ZN",
  "key19": "3LzUNBXfzCyLy3goHDyS43H1qKgRjFkk11ctKL2886MRfVQ8CAV2WXPVkdSPhbnPsuknzTTtxSQhpJAVyjYTGMBF",
  "key20": "3CLK93sHv6grzegHt66c4DtcSVX9YzLEHRos72YTT5fiSArU8jppSGM5UkNfmFdtimSm1GPTQQoqSUxv2cjDLzpL",
  "key21": "36pPiUkyp6CGMsXyDhBsbRmqFKdidDtwWhCmdZz9GnMkJ64Wt2wXtTdv3NBoUBqxQePHj86Nt9zudtYn6qdzSQ1s",
  "key22": "3Dv1F7wNeMpa1d7F6xDRHLrXMb4TcU2ausg7aRgVeysvNaYm8BUCcJi5SQNYW6J6UK1j1qZtMtV4C8wSvziJvM2U",
  "key23": "5mg8yaUDiQwDexbJD8Y1Vt7yGQfdXqncFMikJ7DWErJMwkLUY4CvsGpT7wsz8WUTM5E85aJ9WodhPGx7vvE34aMc",
  "key24": "4o6Udc843wJFBqcz3WQb6LpGmnNVNHd9P2x2HWbgePfB6MNRzvGmDE2keX5wLtNjgCt2LqEcnfTu3KCdqG3xWzYs",
  "key25": "cA1tDoXEQZHNSqZhgr3gjKZ13TT7fuKSZF4fPM97u76uDonfMtWQq8LiPR9pdKtEfQWxdhJiJ3p1FftbR5dJxQH",
  "key26": "5UWiuYVfkZzLr5Ec5QHqdaBPFyxrbpp9G1dPcy418S3CQZuZHhk9vnfk61y4nGT5miZZCv45HQLRsAxotdXVD7s5",
  "key27": "235tqTmz7J3cTKebGGD9P7hMmVJUtn9jmLZrUrbTy19Vhur21KHnwYnivTFHLmk5Bap1oyo5yR5yRwgXZan8auJh",
  "key28": "2QyJ9wRyXr8XpGD1sVJNZb37MMkVAWap6kwYdtR3NF3NkYbvBywCAAWfbiD1G1BAvenMaeUC6zeW6wefhsoeKCTR"
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
