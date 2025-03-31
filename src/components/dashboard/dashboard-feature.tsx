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
    "43YL7uqM7PUBV3fox1fBor4bxbSPSNCzRidiyN1YwtyesoJSDRXh8hHSgVoXsiVWknHNuGKEX5c9nfkAfC18XXkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qhdXFQc2SG8ADwNexfcmUnHVH65XsXMbWdtChUjZB6emGteaevx9Pi9MWCHcahy2yPvJTEZmk1aKKT6su4ero24",
  "key1": "4TPfEX5AsSpB27epHjRdi1qXhiXVqt6c8NWdhY4qpG9aPnfb2UwzcM3cHA3mp7VYDFsX2EknfdFDe1YnGYz5qBkS",
  "key2": "4LQswamCayXYYvMkyEfKYpr86LBNm1BZwyLusKYiJBgUTZiP1mR7te8oPMATc2Cdm1LZZVQ2FL61n4Q4rgscnF6t",
  "key3": "5MEkcC41BPQ6ceJCuaDEStkbGT34jPy3FtxNPpNGf75YsbXqS9yRnef2LQMT8EMev8wbRsNdK7GRHU3UGtabBYC7",
  "key4": "27z6ycgicKEaHSMME9SB12EYo7UFtKHxgPcELH9EnVc7PjJfkDEytgU692DDNt4EHsXgFiX3koNB7TE8TbutW9yU",
  "key5": "4hF8kqZFyYYt3VAth7z9oB9WjBDGK1CT9Lh86eFm6tkJH2w3Kt3bBrhzhUkCp2PwTHnNzM94SwgjN1UCFeqJNTiv",
  "key6": "5tLvRysfjmTDgqN4n2H6u7qpPiyJ2ReuMys5NAVReuR5DC1S7pZkKffqC5YAAvCPECgP84VKxHHoayvLTgYq8TbF",
  "key7": "5NWqvQiKKBWpNyQnJK3qKzsYswhMgYNERojpKFkcY1HiEjz9cXD9gvXAKY3AEmxHuL8RYaQcdhnNU3vgsB841wGp",
  "key8": "2LXowMe8HWtvKSDb761H82x3rSaJsvAwJRjyQUqgt4M3AxMMwvvAKLRxRU7U2yKGyodRBaN91grPiF1hSPY7BBYs",
  "key9": "3Y8KHAgu8a4T3YVW48aJHT2cbnKx99tZRFHhT9teL6VSiCguJq9h5WxZmuDHcZu8s3whRNvVbHkeYZt938gR8q8o",
  "key10": "2bWUvz3xUjUvDJpeGfvpBvdSUCo7rfM2QsVQAuy6Y2Uy5h4rkcPt3X2j2SjTbGHh2rFaiQo985ACTPzFYhq4ZW5m",
  "key11": "4wxnPWVsyGHoWLdhVAZp5QDAKmiMf3VRDnkzQiMaD7mCB88k56VvRJozYRFidCUPcuNUxY2WCMRnsJGWtnSEweX9",
  "key12": "3BU1T4Uaz2yuBGhZiA18f1xbBbTw5wAquXQq4jqGs5iHWrPiCYqwmsNAZKPamKLdYR7S4PGyNWVJ6XpM7Wr3sbRA",
  "key13": "2x62fNSa9wJLqFkmkiJB4kAgDJXQaZXXMATNx4k3BWCbkfMVeRCHpCnw6pFKd53qs1r6n6GGdqudMrSZ4Rt9Qtao",
  "key14": "315N8vGWt8qLrZLUraK3pHE2BW9cuBNLbjh1e5NBgKSyfTf1Qna11Vt1Dc9CQHzF5rPthB9Pbk2zrKkpVmnFFZxC",
  "key15": "4WTgRWnX4XtrfqVygaQ78UDMkC8eBnnafJsSdZR8CLBszxDmj8HNTsFFTWkn6BGy3rdrzJVKLy7wUsEAAUL1gJ7W",
  "key16": "2QstFJVHWFEKTqqjyGqg3ZnEMPfPsa5WR5Hf5aHYeT6DinB8oZ9pQgh25BjYoLZpseqoJ6GZHLrqzQXhheWgQ9HA",
  "key17": "61GLAvmSwz4P17DsbiiJoyNEfs68LMefoVSkStX6nVYgu2GoVXHYAsBdsSymNgrrHhpyRGuTvd5cpPjfL6RaXawg",
  "key18": "5eFaojpwb7UBU4MRMVoWyBDzQrqSXusUVoKbMsPj6gvpJvLao2fgxffW5v9b2yefYdRUbMmATkpWHa8GFSfVnpn7",
  "key19": "2UZAZLe6WTFVksyyPZmKmV2QBJxvqqL4P7ywenTvJo3gLnT7VW8BFrS64MwFVWMDBMAko3tCSvU9nC3CxcJuseB",
  "key20": "2S1CJytqnGP7BRbgahQtctjYWwaSsvJi3qmgGZGxS3XJCpLgQniFiTxGvS9YWFCK74rXh94tr9URfyrpjcMVsbhT",
  "key21": "2H3dnumnXgxMQxK7GgN6MQR1kGuvpc9WHwKTuRqNS6Vn5K76KipAzAL2HEhmNzsptjwwEVKFKPZttW1P8cp6kzPm",
  "key22": "51c3sN7BrGcPrmWTMEaBAv8uTRbdvrL45KAs6o6Xs98P91AgZ9MU4XJZgNwNXRvW5QDWUMAVgTm58qoNLGxCoDxZ",
  "key23": "34Lx8fgJdGpNerbt2hPvQrkuFRYSju746tV7PRQASwwHgBWNXHzoXv1rsKjr8VZPowdVfsCbrGAdwJGU3Z3oadQ3",
  "key24": "1WHn31aSo4tDqc8kha9EtF1XJDhgRWuVvR8zZfKQSWRfucLaRBc3rFsYfvdMyxgGKFZyfzaE36ngBqv1qryKja4"
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
