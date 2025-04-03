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
    "2NiJnqvxhbmvGkBoWZFToXctcpzRFJLg6jaQTce8PnxRPKxk5NxjmXgaR6RqgmZeEUTcjn9nfQUrNWqFnjpKw5cY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CudDuQRzZRFLFBRMeCapz3PqJEvtbHuebsg4zGjDxuWKB2P5tAUYr5Ka7aZbw1cpfTu4Amba2omm4RUUtPP76mw",
  "key1": "E3Nug6WxNcx9uzB7ssHdVt6yWvKpr1NqHjbvqmist36rKTSJTa4NPwEnv4fWdEb4tykTw1eH3KifiNfujGoQ4c9",
  "key2": "zBKJvmacFAvhV1o9jTU9vHo9mrwo8ESeF1PMa71CTLwnxVSystBrZteeqkfgsUHxLEV22pY1qhumXpJ9RXGAEPt",
  "key3": "2pHGYxsVXU21rLUUtiZZX8YHNPpgj6BHDZYchUTiiFXYGtWpL5ASryzTTe7K7kEca3uJngqwnGDdkTz8VveMqokX",
  "key4": "2rS2BQNrJCPeM77SE3HCb8eNQUb9Loz6G8LsnaYJyXB5ma1DEhYudJtJFUsUNTpxhJoF5VgbkWGx9LvXSGois7R3",
  "key5": "WwUieZ3QeEsPdXwQGc8s3iQxDoUJNPcuSMndoAKjQyUJ42j64HDRA49B42RXFVBb5QB6PfdUjFpz5kvdxacSV8e",
  "key6": "27g8R3opvRj9y8WdGuWj37c6bc3iC53YNTnncdCuCuSnsVVAbyYUzShz8PeMuKnawzHpBzbuXD6bGQvvF6f5bKjf",
  "key7": "6z9BGbpCezwJFEy83QQSchtJf3YxUmwiEpg1LU8YwHKYcBwecgFwq6y9pWB9tnp3tLASaVGahL1JAuaTYSB6rcT",
  "key8": "2UnMZTqgXs2JRQHGTMNHxArazknuvZmjDwxYtxqLAdYH837AnH54zdTYWRwe363H4Ruh7JCPtAGoNWkHo52Vmgct",
  "key9": "3Jzg9qD7G1nTH8c1YxhUtyKZEd38YGWEbysXiVFvjDZ93oRV1SbUhSUtEQeiaSFDbPhDxHV3ek3jd14Jh6u6Wz5g",
  "key10": "4Ewx6CWmjbHSqAfKXaW5yewm2unmrBYweakxerCQ9gyiUrv6it5u5S6W9CvTm3dHTRhu18CYAdUZURcaRDPYZkfg",
  "key11": "4vvhwJg851dERDuNNFgCy6jEVq1utkzP85NpjhJEA6YuKSf88Pjc37CyBSYbFmWRTvk6ztkorDCGGoeLsEh5Pxst",
  "key12": "125423kZcTFrnRM1TtJmoRW7XrQQPFKX8nkfRsbnjdVPnX3C51AuXC1MbT2jfXrmHqyv5FeJXwGJtkPi1R7JUhZ8",
  "key13": "5gkwXUerBeZEmrBfZHfyRxb2Qmfr8L9s6ufVp19LL5pvWRqNRwRNZid1m8ZiiJQHcvtyEJpwqAWM5RWo7d5sEP2k",
  "key14": "qmGrBMNaaVYm6UuKFvmwzdwwdDTo4ynNSDAdUnLx67pJgGZv1XMerzyKrgcupSrjoKNEcYWPuHviuk7b5sReiP7",
  "key15": "59szQ8uZuvv8VbjJLw7tnKUYweo7rLVL9Zwe2pKSh9washNXT8snxENzSnKSTcS3RYbCwM8HuN9cxt1vv6tmVAkP",
  "key16": "2uYR659hzFyAq8DtsJv1a2N27AYi9br3vZVxT4Nok9mAoYiMBF6woyvx14rLEZ62gEhcsoh72e484Zs43C8TXxf6",
  "key17": "2kxv7Jaz6pjy7dvRbdwKMZLcc3JjALtf7hnSvAwzW1CPAHoQ7MoYQPzL5Rn3nLYGuJ1hCR71Bie62trTFUPZVAiZ",
  "key18": "3Byxb2vrc7ajE6RoTrmytHGdYbFmHShaP4dfW4fpUkhYw455Zd2TAjpkk9GypFG6SpQ8SK9jKB9VMUJmWRyW3RXc",
  "key19": "4d7fdfrKJj9TZjqMvPDwCzLxRTPziSzPB28FMB42QhmjQbxugiC6XVj8VMqvF6mdnahiP42s61kJULh2sX5j5Mmc",
  "key20": "2DzQ58WB6m94TdNAhpBsdgf8cFZXfYPc9cehWfHGXQrkptRP58f72LTec7EVu53ocWTrCFt95dkB3GNhyLbxFVpC",
  "key21": "cZLjGSnjeShaN21qe3SKonFbK7XYEg6NqHXfzMUb2o3G2V1coVpdCAP5h1ejtD9scRwbFKxcXXRaD97sGozZQDY",
  "key22": "Ro5YeUcgnRiyLDWUKtPtEGBZfXU8oCPjMWoFjoXXGqgAXZT5X29oQfNaoeewVx6v5JGX8GcFFq5n1jcVoQAbApo",
  "key23": "2DyYAWvTqxnadqwCyJy1s35A7eoZmG3ieYps1pJ9x7tJxDp5SmmbeJrXQkw45qEiCRoRgXp5UsgxZaxwmbb1MBzo",
  "key24": "4jcURui2D6HMsfCRemLqc1YKHyyuZf2zoj8dyBiGGmR5xRyeXBNXiy7NKJFnS2rvsrSsJS4Pdbuzo2FsxERWPqDe",
  "key25": "5dBeSRda7Hq2fWSpAWyoYFpwZSyj27561zmCJD8K5Yapr9nP1ZhevWCLxgiKKsLA3vFevL8xXa9tuFCYwLbQwud2",
  "key26": "4hpDTsZZ8CHwLR5Px4weSsmpHCyXDfbqZDP6Vgk7Vz2ThUE3AuDLeSNhHnkHWRVNPmP1mwXDto8usaAXHwc62dCe",
  "key27": "3F19YQGgJ5amY9fSahiEf1pkc25weR7LKo22MGLzvUkN1Boyoxrjc92suFLwHFzEzmhKBiUm4xpjQThPw5fbdjkw",
  "key28": "3Yz15PuJu4hUoJLJngXvt5ody6QDuhxXUyNLbLSQGtn77Pf2heqVzghi42Zfj9c92W9fZ5h2LKBRWwhw5F2QGWYf",
  "key29": "5gQGzwDfZuG2TZyBLVKXqxutaojpVDUAL38BVTBfqPrraBCr7dq9bUq7hpe7MwZs7FixgDsGoA1SdsmgrRwx8x6t",
  "key30": "MCg7ixxXm8c5r4WmP1b4XRsZoJLJiUtNed7djHB98dk752xi4iMZRSujyzJvXAVs7S58vammVGjWHWBvA1AwoRr"
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
