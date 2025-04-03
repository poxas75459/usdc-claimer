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
    "3gVqZXZvWDaLAAv9xL6MgwZgMf5FSQMTV2EL23icTZDpw1C8usYSwBcNQTE7mV6VPPCznPFfTBxCdY1GQY7Spbaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vbq28ZP63zCE1eLnmPVshPCPjFAzzTYZnwTUDuJqPR8opamRYdns1E8tnRqBNH3sLeru2StsArW7bSUcmx7BYws",
  "key1": "2ThZMKa3v4v1w19e8zPuMys7y3PSV5odpkEFPWagi5mDfbhFqLbgQbVJVsoXJc7rxPGTCzCEpHi7RBGKiYUn4dFJ",
  "key2": "5imxzrGrf1y8idHiXdmJuvVpgGf6MPFLQXWXBxqteNXncjadrdDEkL5x6i3Wg3YRKHmqJNDbvVHjKCwVLMiwMiCh",
  "key3": "4hsmRPjmm5do5dNG9D8Rpfb3zsRFS3d1ct9puC5CmGG42bzEqQKipf63Q16X69YsrwSbvfNUwAxX21H1ZcyyT5gm",
  "key4": "2w6niB7EeAj9r4MjLk3iSynCMGftSdmTSYnqnDRXCgtMKWXZbqLm2hbUriZdMuoKwQ4meA5w1mpNg32QSDzV6bM4",
  "key5": "JKWtcETFDgRPM5cH8VsqCSz6QZa4SNime1gx2vBhAqaMJCHfJ6YjodkMHY5yHK1aBKyEx2g5H4JR5Hqy8LciuUQ",
  "key6": "4nAjxmGGiwRoTiN1NMcd8E1jjJgmt5dsVGhnS3yrgQm9e3QpYnxRtggL3n6ozq1AgM1GTTRtLgLjoWEADdtV1qp3",
  "key7": "2yU3EmDcBqAWNDbLDgvaYbkCUSVK9URhFzspWjQw66zM1CF2EApQbzui2bQaJ3tQw247YcgY9Jff3iPmeSPW1Bou",
  "key8": "5UhhDNZtQY5zi4jCDzdGAEiJzrf62EPJYYhgBEgcZmT3hiGpmCrAtSt3v9UNFLDXLbYcGf48U4gkXhPfBEq3CZjB",
  "key9": "PJbtPVi3gmzfKw7HBGu1WtGX26Jb84uXoZ3otBg3cVNYMKnJYw15AC11iyLpdpWmf6Y8SXxTMFwFTJEmTQYRJtd",
  "key10": "3J8pYbNfeKE2stXzV8icAJHrSMt6ZNraxg9up1ZLkZMenMjfZ2QJDw3gKzak45EYWeBrZra8L6TmCbSQK7By9uLY",
  "key11": "2fXNCASXQeRSuA3tbvXfLDU7dzKdvR5ph3khd3zZpxiRkb6PiRHi8tsrCRNzo6m1J3jeoMr8B2un3k1VGjVeaFJk",
  "key12": "5eGK8bJQa9o7k6QRrqFEXJivS8a8WdYq2xM9rL1G4Laa1bWzsfxsWGKf2z8WSxfd9WVHS1hXwUoa6XhbgqDAA6GC",
  "key13": "3JkW5pvef1Luup3qCyJvCVN8TbuB6ZkDiYrq3BTEWRNDGUawL8QpcHHcg2jk9xEba8aJs7ooxs1myJhFNk9gfPy1",
  "key14": "4KvRa9USim8PXxX4EWEEw5LiyYZkpjPTTTis2tL9ZpbtcyG8F8175MirWWupk5EBKayrU8j72d6ox22B5B42dKRi",
  "key15": "5wvDX8VZEZkKBM81CbauvXEMw8aiDLJkgb2pWfipgQdPS4LwM19DxfxDSEqEkSkAtsqzggWxv5nfQVAxYb53W3oy",
  "key16": "2kK86Xe9PnkY13DBmtCzK72DdnHtF4coMexeX241UriPfZpWnjnwqzLJGTTFG7q2w2MDdPrJRndcpS6gcmswDMSu",
  "key17": "4q1PsPccGvYjWjyfibziSqb2BqSJq54Y95pkQrGaePzJHTP6MNtvJb2PrrR6E6ZpokZC1v4Y1FEfGwd4fFECYuvj",
  "key18": "4k5hLdJBYWJEeiERyinj6NZutcZQs1oP8uCempUTbnS6mFMh8PCmBjVoUe7RHuqYrYkoww75mxMhAJ58xh2wBJS5",
  "key19": "5UqxAbj9EGLLSNGkHc3a4pEYbXSv7BS9QAemZgJFJcHQzS6zCNxFrGxrEwQC6q5Ucq723sf5Hfp11MGhycZxePAV",
  "key20": "2CZHTtswuYS7Fdy4sSnq35MqtiPDvx5gkR9gxi6JTECzGuBeYWsm2tHvtd4yhEBjMWS4naLHhypBFHLq3hnLQDQd",
  "key21": "2c2wiTiT7fgfoKW9yfYf4C9isqZTQt1UdDvNxX4bfZcC1q424JzQ9nPe8M7oyVrqzoGBZ3bs6RubEgKYpRAPhYFg",
  "key22": "2ejeNfpMDQnSDpjz2xhEkoLLH3rehiPPJY83RQDwwfvENs3RJdjnioy5oPt2w5suninsyfG5ZogwC4NSosuXSo7E",
  "key23": "56z4CySxFCqZr1wLqYSQdy9bw93RdxBtnXBYHNU8gTVxMeWEBkupcYP7BveJMPs9X1msW3MnZ4rGQZQQpu8KHiBw",
  "key24": "5TQ613cmrxnnCbSpowPDGzs2e6LMqjDyfoDBn3Z6NoBVizqGvsxgPR1smyccXVx7zsaeRkcwfBMriJ24GPwdwyVi",
  "key25": "2hFxP4xAbbT5KhX9pVekmFqzNM2M5U76e3upenk9GCcB7DLbxyJEqes7LRb1o2Yxzmb957MPYxHLLUTm7wsgy48W",
  "key26": "uJziNEgqF125SnK2ohYJpKgCvzSXxeL4tvW5XdGn98h3wLb6xUPvQUyzAG2mevmAEoUsVfsR2Ld7353vS86kqvt",
  "key27": "3AXsNyZaszb9CaohbsfeYHziCrTvGcybLuamWuGWx1edbHpepsp5ChbkZHKGeBxVNrRo6HmJG9Sz6ievyd2SzQHZ",
  "key28": "nBBUN3BJ2sCXAhySAbQCmme4jhqGEXMCaisSAjbVueQwTfvDvqPDF417vsmWm9cPf2c3b7wY9q2HBoWQcsRRpgd",
  "key29": "2sWSQfxhv5kNRAs33rtZEjN5LEz4Zt4aWT1oDYRVFNvzt1zi3x8HhFEikuqaenPtpPww4ifsaw5mhfuGiHYCGCA3",
  "key30": "2QQU5f4h7YEwC6eKpAejCCvAfdrPFPp5ttTPfyTEdhGj2eFHcctfyVj4YiV6dBcCRPHQxJVzcEXFzC5p4KJvmty",
  "key31": "4Gp4p4UC1ArUkqREm2Jrq7GgkP7zYazMMMGx5mYdSdpg9fXui89HFJ97QYpyPFZDCGswjsrEB4TQsDAuE5zzpMha",
  "key32": "5at9KEi7Fx47UsM6SXVdymDki2ucyimM7Fn1Mefuj5P1RQS37XcgXnc4chJCmrGqKjwvyD8oBLUj4YPjLs13mjcJ",
  "key33": "3S7EoV6wZRrp2TUFT2cpkUuKdurJ3MtGimrgGgMmDqhqeJcgsQkZRzFBbWL93vyKfemqBLUQ2ecNBswP9kg1Ghd8",
  "key34": "5Xhfunp8Kj39MwCYhb1h1v7GWhQqehMNtKYo8hqxkyWqfEsnc6uaZ3ugEcJfMV1oiu4hHWyoKM8U8FpbVZm2C1ox",
  "key35": "5kmHZybtf8DE3SMbsTo5oECqUVuK5t57F6dyhe3YanrGpLE9kvJbu9tEv6cMw8ex22x249QkWTAocZMFHviJVvy",
  "key36": "4Uark3gneEDHaRHiCQyYqc3EijZAY2huCiiYGiSQiF3nr2sxK2jfLWpkhyxJuYwjKXk626Mk2nr6Y2uSwjN4UKnY",
  "key37": "319FCewQKEo8HhVG14Mxjx2m2YUtnuK4jQgs4CNbkivvNMrZt2RpTJh8TVCZNefYYdQiDf8mvNWx7jWFdZwVjqzg",
  "key38": "4VLoQjAx2RxPUi4qUqeJUpGX9RSdiGayVnXQFbDuQNm5LygwP37dDshR5zzP43sBhRPsENdEbGLnfEhEy7qCbY4p",
  "key39": "37LAc9cMAhGrAthjCGZEeR16qJYS2wnFeuqcKMfG7vUpeudsZpAeoBcGA6ypGEyEem4aXryuH7HTRYWTaKhm8Nn",
  "key40": "5nauNXccbe82rwcm8iQZno2korUtidsoTonejjR2DDP8tJw5msbn6Lq3MA1krhcC3U6uCww8Kte1JyzZML8uo5LL",
  "key41": "4qyh8YaeguBfR5go9WJWFrLFE2okFDWuUAXU7PAQm1cZqCvzumYVxYAL1QvccX9riTzzMLcK1a5vbk7e82XCBD9W",
  "key42": "4fXQgNffuhyVANYLXCPcKo5F3T9qQPh41Q3GLRBKgeAGihHhcFNDERFhDVyxvP95ayVNVzoYfFDbXENLNRPAujYx",
  "key43": "4pxzcE2AvtYTojurWWwtSd1Brg69dALgXaPkicKUFwZN4AJFB4UGq1Z7x3fQVYqoU7TQB8vzXWfLUSL2vfh4xqYM",
  "key44": "3ELiX9wcRQuFS2Nc95BmSGcAfbqFMnNPM5XVSSe9VdqWjAyh3D3utnU1wNsUWJUYAM2fJ3kLo3CzmNQQwMKfJS9U"
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
