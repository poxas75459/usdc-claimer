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
    "29ucCrxTdiTZA3f2TPUbckxZkPQebCaZkVwtvR1nfsNUo9D9nexLLHFmftqEUperwCQmcqmFtJyvNHVvVz2Vzt5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eH3WQFUTdRvAXQ3AmyGr2F1NVkuM4GUoFnnS81oU9XSoWpsR7XyJnR6ZmuPBgx5v2eEJXserszdp46y9oz7mfTs",
  "key1": "4R7pTPQsjAR2TpSQXA93dWmYAGgkBwidovxLeXxU9mYyf2xizcrkikn4RerqcGVCVq28Pr69szRBxrt9odqBNHhx",
  "key2": "5b1a17gUfVzC3mKRjZaj96k3s1SnVNwABXukYpHpXGrV1z93yJ7QgWAfaRp6E2JAiKmRCEDhSyjGyoQG3HQAF4gr",
  "key3": "58Toeh9incUDAfC4aCP9PRJEk1sjSp4cdJWPayXagbc2anZsCViqTmHGdMgzWGkxgZj74ju5edKSMJ8y4s2nRysu",
  "key4": "3YV2hGFWNE5gxmUmPkXLLYi33ySo9t6Rjd28dUvDJqSSCuR2YJdVwJQAbmyJ6632FTAJ6mMRi8Ei4RuZyzYuNGoq",
  "key5": "2VsAMqnnFq1xT9fmMsUPrT9dLgtbgocDBVALrMx5c1Z5weCVdkaBRyz2Y3v3votLnCDH59uio5p442RXxbpuJbQy",
  "key6": "3xUdrzm9e2iBTgFN6Fk6tkQ4NKjg1s3x68anHNvKG19XNqzdNC4rJS2GycqFf3sH6RJaPTvaSgJuDfYamFVmgmZL",
  "key7": "3pMg6vofxheSYn9QCwRXHqzC8ba1HWBhwbw2mgqjoz18epiJRM4YFyta7PtTjgCFxqt19uTiu3PNQbS14Wd9P6np",
  "key8": "3QnStKW8JYbyc8VA6emqPpvfjjTgW8TxAnSvpojPDy5c4ZTBdUB1k4A4xDwe5nzESTZUZWptsYKJ4cdxZCduUbJH",
  "key9": "2VspZeTg8DpSbHicYz4CbVPJ1hb4yWGEumJQvRHAxmSXxjxgKELUeL1q5cU1nWkRijzi2JKENvuXqs7GZk5ad7nA",
  "key10": "5tjbbqLYoTHDBUpz6aWRv9bH6Yt67dN3kra1aeysBDndySj3hLovLjC6TnxixdEmtrfKytHwoE8dq8fTewbovM8m",
  "key11": "5cX6wecy3R59xiAS7FwKL4yaSTuCULyzFnA51byA9MyRHuMwRdpQYjtQwnXd1pJjYUp7GYoLzj64kE5KD2q4PLTG",
  "key12": "4nqwnjydGj2QfN7E1bfcrt6hyucu2yzgAmdw9iHcu5MRrMEzZ5vFe2Ud7cFWQPhezwpWxUjApDEKvGqkfyDr2viV",
  "key13": "3mWfjwTGqJhPeADnHxgyKfKq2kDSC3gc7MRFDs49PTjRUAuYfWmw5tj7nsUGSW5HvHM5by6mYzP56EpBHAp3Us6d",
  "key14": "5ifJomVat8KKc1rhiMYbmdZCRmUzb8JGP1bqH5T4RbCWZNPL4a1ooQFL5nV5b2XhjLu3mZBLY6DxxKKUpVHiHXG7",
  "key15": "3uQ31MUspd4EyiXKRb5xhcDPUEWSuGisooRZgcFvuB3bcCTZYQgNywWc8UJyc2zJyR7jx2xREXQNCpjxe2bz7Sca",
  "key16": "3ZTvw47cVUsqfeivVDCLc8b8QghbyvFpvQWGafY95iHa8D7igoi1gQ6tZGvtTjMZtxXc3LwSDRb86MR8JH4mMH6a",
  "key17": "46kxcRxYiKsrgY8VeAWLjfpC4asTJ54nzdScNcpcoHKd7zBgopeCL5RDRRd1v9mBPaBEooocWmazgUobNH3UmZLj",
  "key18": "2JbNJAPtTLDZaefJJsgDsvAJTB9iCKjzovqToVAsX5tttDzVFt6G8ikQWCWos6pG7HfWXvDZ7gHYvDVf1bCHCrAY",
  "key19": "22f3H3pfRgbSThHN3zedeYu2g7TntVYJGxRGUwrsHfQrqo5SZ1heSdDYAytgu6vJyaSnCbMVfJpEmVHFK48W71RJ",
  "key20": "5YMr5QCd5KRKR37cFpGKmufukX3QumbJeKwXcCqz6mbBpLXYMqsXVYHDRQq3bzDZJ8qqQteJ9kUhxWjwPfmvTnyr",
  "key21": "ZaUNBNgB5a8BgLuHkLZHHy7L3ckaq4KeEqLTNmE14DZkyqEmtAnyaMokDbAGKLEEu54iKCmJzDGvfiPTv4dj4t5",
  "key22": "3BXzAr7utddu42AGP7fRCWRcbZXc9FEtnCoj3x2r3KrzCjZHu6GoJsv4DZDV1wXnTiCJyRUyrf22ZNMkeVHeMXUh",
  "key23": "BRTzoFRzRWpF7idbYSZKEWn8TBKh1z4uSkxHPx9MeVtA7oPUUa2KMuUjdFiqSMQ6WPxLw337T6eKTXhqv93vWqF",
  "key24": "4CWd5KhCHdLBuuhxpUWL9AKDGDWeUdAawEhfmMENkDufhrk3U5c3WyQL5iVnWDd52G88C8X9puTSs318kFKL8khH",
  "key25": "3V1cVEDeVtRLQRZsFCBbdyrtmtLULRHk4yU2gUeHxLmGaMsXLhcZKbM1iaFzPpzvpzY6dCQZ2gbKLWL9DAircNTd",
  "key26": "5S5CFM8xkYmqJNrErrq8MBcYUQyHD4htsC5qaJ8a6ScFVAeMWEGAbidBQRNvcSGgxZdeEGKYq5ipBDMcsLH2uhtk",
  "key27": "ncM19rmgXhNoZQyuidhXNZ8U97UFyigErtjPqKq8wjGSbYjJ5fJiTgZuz31QLKu12mEXJBKa4WVLxfDsr7XwygR",
  "key28": "iVRFBrPhQpFgU7CcvJ5A25QMs52A2Xg2ASLTiFuiNqReYKt5iuf2zvZa8n8gdoeVFUCN1DrVWy8H3dPXCXGvNoY",
  "key29": "u7eCcVTT6AdKYokEG7NW4K8eqJRLi4RT75J78uAuhKtz35b7xL63r3s6wftNu1kPanzy2zh2fhYrcHXvwML3Vq7"
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
