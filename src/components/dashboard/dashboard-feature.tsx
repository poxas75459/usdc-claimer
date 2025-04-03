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
    "4cSLZRYEhCL8fv4qNzVbnBjKvwfuqBFNLaqtT7KpmB5Mhfv6uFVXbg4q4H3ViyWmGrvzhvny3528CcDAJN9b87rt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k4WmUiEySDAjrpXe74BCbHMNG6VHPuENkoVhqwTyiNSYXkpywopFT74YQpRW1QQmLEwMyMj6QVGqiyJbwhDekg1",
  "key1": "g2BVZjGv9AH3ryVyepxVJmL2qDQSwiqy8R6tY3MrbjswkQtKFRZYKHfWpsV3yD5hjannYYhCAYMKnQJQVjhCBCv",
  "key2": "3FA8NEXTbikEpnpPtsAVtwJMaRx6MmjHzhAbjvQcAeEwWxtAfvfKeLrWCMegPEZcvSmMu4DrqCLE2YW6Ryxzz4Qh",
  "key3": "47GyHDhtkwnPyEUtiiKRvg7M9CwsR5f7YDFDTJq5egXuZLoYjEYJ1NE2T2jgnqE48EVtfhqhBw7RCsdwjv8cQA5A",
  "key4": "c2WMne8XP15Vuh3Yh3nWDhBt3FmG3MkqVfFujQdA4E5R3drt6wyt9jjvCvo9ojQJXg72iypt7sRehkmbvnGXucv",
  "key5": "k6rNV5Wd1cq1FJGUe52xuv4z3PXoZhdciRRGKTN9etWM2ro1hgmAgZ71nz4dX9TDKvLGqXWxvVTySmvEuM2mSPv",
  "key6": "exz6TqVMJiccC9pkKayXJJm6s86hs2qCoMsg38BDFRE72kVw8E8kEk7Z9r5vHifW8AhjsFXpYdvydai4gvHVo4L",
  "key7": "5eEH7vAic8WSc19xinC7AfFmd2Mr6KrBr4T4wkPcPQtsZxtRxFkqM9oxDb34THqaYZik4MoQtWefWnebguz61jNV",
  "key8": "2vH3vynayGtcSHfGnuDxZmvbaxJdb8zzimbcPFSsTsZpypmxVersG5yg7uCGB2B7Z8BwfisdYsu3AMUijFth8zPq",
  "key9": "5y5Whhj7AheoSYc28yFcxTMuMz2AZhZ1BLhJsPz9S3EjzZPGH4dcfd7BXpzu9HukgyNDTvcUci1uoQ7dguW4V2H5",
  "key10": "5fckUpmV4XvRhXLC6NMpZYNC6CWPvSi4gKYChC3hphbDonrksKs81mhoJ5khm8wTuoy6V74VkK7GqgYT1Qzysegm",
  "key11": "vUTjq9LoCeZgsMWqisPn8E1FtBp43CZNCughd3A8roVNjw1CEscsmFScAxTufBiqBwoYaru8gJ6Cxm46SXpqxej",
  "key12": "2sziNWBDEtT3JbR4YuNB5dba9Tt31rNSM1tcmgW45QvbMQoZ2c8cEnu7djBYFwMtU1bULYfiSdH41wUB2wm4jy7A",
  "key13": "3UVwdo76H1cQCL833rG2Uq2BLj84kgpwDwyHW5bQ9Ewc4wN2wYXJydMCfa2ZHXYX68R2QFmxZAyre4N5gnzcyvKx",
  "key14": "34cLNYxKZR9UzXE1rLWBJuKpX7wxQP6MhvsFFsdnaYBD6qvuART1ADKFm6zAqNqA9Gk3iEVunpP1TQSKNhiAqChS",
  "key15": "65cdRoevTA3pxVreqoq29pQwCwnXia4oMMmgBDBuy25gr7KzNUhcNm9gVBGzjSF5ac11xQDC8nUwedsCCdQ5kgZ6",
  "key16": "5LafoWre46Z1tTNQC5eQoV5s86TKAuanJjYkBTHJ5vc9yJegTBnSG5GmjZMDqVqdNB9CTt71xmUHWGqYFW3oTx3J",
  "key17": "4cwruEVUVPMyh5q5nEZsN7GSU8bprsaLcBfEStVzzDJoQ2f5tmqNnRFvN8GdZmDseA1fJfN1NLDoG6JqnNLty6P8",
  "key18": "2zxxReLMQPKrUoPktUrtUxnXUDNGG2C34jCmPhvvpfXQTx78UbnHiC8Ef99eNzcgsG8uWLEnLrDfMqBFPCJ9A1vS",
  "key19": "67ANE1fgQLWJiZJnEdtXh4TR8SUML6PDTHuQVLhVWtNhyRcwFDnUTrSSozyTTGFjgnffnuBJURxNh89LKNkFf1a9",
  "key20": "4cYmkoFVoV2djJXLsx1v7J2ENKfBNYChidU391W2S3D3Hi7E72ey4fpSMzc2kydcCNTyg3LGubSiQ9DigVyKnrDV",
  "key21": "5ekdvFgnbMvqgAGEo7pgiqq5om2hDYiEZKb96X13g8Z7MibL5MbkyfHyYqyRj5Ny1YJ1qnnQA1iPyEzMnQhNvZZ8",
  "key22": "4yz9jfwG9gRWNL64emHvNtXLexa5ycgdWkKTEw2GSjHJP2aD7FBZ332VCXZfpeiAGMEQZ1mUBejEC4bAL99W6buB",
  "key23": "UDwxxX8mWpe8JJMxD1utJzq5bPvx4ZepE3UDqzXcPuSR5ZNpiX2rryzgED6UcbsbSVDPiApTZugPaUGiTMRnGPC",
  "key24": "5xXLSE4YxGYdhTgKTvKmoWTpf1mLRtrjK196gZU2cfkYYwSMc3pPNmDoKjPznXDNFhaV4z9zr6JRMqiCKoNYYNHA",
  "key25": "3rdw9nZdv2Lq3FdvNRPo8AU1SPqtbNxs7FZb27HsH32bLSYQ6uBcWKZMpgAq2dHVHdhx1Hyk15tU31jH8cAsUjzt",
  "key26": "433pA8EEL3V7E2o9SJjoQdVDcWx66HhVdC7D37kj3wpFbvEzqdu4KdqfVigoBKVn1mKhAPdkC3HvaU1TCL4Wp253",
  "key27": "29XpZymmACDeyQJr4yzhBEYcm8ujvdGXAobnk5USX8D8J31twY9v2HNLGQWRGHsJjv7C8Xe2My1pbqCeq4qK2jR8",
  "key28": "3wyKpPP3iStx7CNEsY2orJHghjxeYHqo9GqextzLvHEGkwB6ANuhvVPCLfHAFbs1M3Uk4u3vzFtieddbxrVzfCe2",
  "key29": "5gXXwuxbMQ2eWrXsVuatJgKRJdeaMfn5W5S5jjMwm7QGd7b2eXyGeXbqkEPWvGsziZitaxcUytiJaiTUu4Zwvyyn",
  "key30": "2Lwi7RuYMcrchhApZu2QCeQUaUaSt1X8FTXoVukpHJf2zpgnChcmT5aDKEKsW6vQ3TV5BBGe2hjvxYXrERjuhPE8",
  "key31": "51Sw8K9SBSQuhVByupDZnHTYDmbpMoPL6GRpJRzN1vzgrM13sMWJ3R9u7ptLUnVfZhwWLPvwmcAQEdPagbJNruza",
  "key32": "4kYyZ1dKfUEjCQSsuGv8AUQEmsJV8etSyy6DrrQbnNMcT4c2MxoQwYoPGs3mPZfTtEhoTDUyqSwREdaqbfDK7mmF",
  "key33": "5SGPW4fZJCzN3qLyvxQoLdBumaxsQBw5a6pQCARvXG6NVHuaxWZQCy96ELwStvPPZHj6XLKgF4JH5KP3L4UeMAab",
  "key34": "5RacRdhtk5KT2S7wRvnepuDoDimVrfZa4wgZGisZFsg5ecQNjpsxYbjqjiYqP91RdJsiKc6L659uVfvDJi7NWpAN",
  "key35": "4u9AC8tJSkSMia8F5caAbL4sFqxDYMStmNNu7T9j5yN698dE3C86DWzb6YoAqg4jzA8kqABJwB77cZuDnYqbJ9dC"
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
