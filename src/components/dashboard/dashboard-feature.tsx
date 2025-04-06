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
    "2qij9vmuXVHZiRpTRiPtcNUpLDoU57ivJysvwSJP2iA9kMKvbWDQpKACduCVrbeQpu483Abz3VCcwbM1EsxDhNtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BaMiYrBb3wnzuqCb5EgpyBVc646VCDtXhyASRia9yPJ4kBiz114uS1JYTZ4auX4HZPD8G6c4LxovWtfZweisRXz",
  "key1": "2ShX6pEQ1qdncoToWQC2FHUAMXYUSKudqQcTWNfjKkBRBg4RLgBRLGwXW3AzpGuzFvnMkoHoZ4is72hDrRWJnEww",
  "key2": "4Po5F2Hv85FjcsRATubootNyvERio1rKtWiggAXMAcLt5H9DEd5anMUvXej2CHebHnthNk2DDp9pkt2dRHp6Lm92",
  "key3": "2WoozVtbe2pjtnjh3WfFhi8eeLfsHEwmBxAHivhFCvSmvDh9mDLV61uVsbcN8Lr3V2y1cTaGEmZdpzJN8omi1YZw",
  "key4": "5jTA4W6Uh83vdZjaH7pZJiG5UwYjGytJQcKQhF2bZ67Ejs4tNfWzb2qCZBsWQxUe9W1S1TS9YFbns8DPqqc1azRF",
  "key5": "5XWoDGQtFMEzSHACkZCqevmjbGwiW73RA87nWcPeGqgR3sju36bfYPGsDWq5X5kKWbFx7WyiwFmVweBxQZsk4p6a",
  "key6": "2t5gFHQYFz1jJxebFWESyA4CtfU2uex49ahhQe4m71BFtwW42LeMLZpysEB1vxFohSXGQG5VG5EHNi5agLjMXt3u",
  "key7": "4YhnWq3LouYGtJcBdfpsK77aaLwgFfz6Sk1sgoaRGsd5WVXPDEmtmjEWLbT1RtMtaQDPJBbK2E43iH2RmVFGT3Rr",
  "key8": "46xQfG6uZA75b57VbvdNvPERVMme3JrDAc7RUo8wtehxX9Lni5tKNtPtpFnxoFYbScH5Sy7b6b4oHFMDfMFWq1jY",
  "key9": "5K7SiF2TW6nJPD9HZFyeSGPcLzuqCGCiPSEaNnpcaHyFT5qT4Y1FwMjWPyFobGhZg9ZDSz5Hm332HJfQHNppGuuM",
  "key10": "3ULrJ3FpHp9UzrMMWdMQQcoyZ6AgDrQ2fLVvPSzrLgZ2uvzuejF1NqEjFUK7L57Zinh4cK84JvfyWCFouFgnibeY",
  "key11": "32kCVeeBg8ygH1yjzzHXgx37gPqrrQMLsSamv2AYU4oN5xc2ALXoJYX3fE8RXdZkDfsDvnK1hdne1frc4H7tiBmz",
  "key12": "33FgsVv5ndTtCYuchE37VYuPk6TA3gh1PCNts9CmMvktWz3qVLG99Psj8NMKE8JtZ5ZV162a62CQ6xcYKsciftF1",
  "key13": "5Swn4gjvZSc22BxT2hXsfjEy3DpkY8TwCz4dxcXxusDTEMCvepjRDm7T75GJMgTrbBEaWNsnagBSh4DiQq4L8LYi",
  "key14": "4iqhuJZ9BW54soqWo7L7TFuhVQbpHjNt3nwWGR2cF2Ptzjp2UGPeuJza2vCkZzcfCzxvkTEn6kFEyUcWxTRLASdg",
  "key15": "fiM8M1XjiHBZCRoRf7B6g2knsYteKq47wXfHLqKNFjgiyBaLWq6iFGYarQYQ5LAoLuu37cazgKasGd8JJiHRofX",
  "key16": "4G3g8h84JUmZmkcSGqXzrTLti3APYi6BG1pwLrWAbWxYU1w3mXKTN4hnx294jUHrjacuqk3JMCV8dvcMkjgQDCFU",
  "key17": "4mnyqgrzSdLJdKuzWhQZyMvLg58ZRf9e4SHtJZE7MAzviHd3d5b9qoh71S6oqL6paYq7tLiRREpXz3NSnJhNoRLM",
  "key18": "S7FZXUKU5DqzVXX9eTQVbRQbQQg9yWQPuiZW8aFbCHd6gAyr2ToJLUKv71u6KKvAXBnRhkpKv314FGcBACsbKGx",
  "key19": "2Td512naWJkvxZ54QcYuvaqgh997Z1qdGESqeTXBYqH9YSzXpmN2nGwgaKHn8AuLf1XAzAmj4WEJtKvtmRQQrWB2",
  "key20": "2GDRTMGk4TW6sPCPB5QBceG5mT2Tm5xqNPRTf8kEFm8GSGGwrKYntuA4pfhNAXVFVFrNGyi88V7so9wrFm7r2fBy",
  "key21": "CE8cNExgR87jDFp4PzuA46A7aTKXRTuivBcRzB9CGPt5h2114czL8jwsh2ZNbrxH3oTxy5rZPeGUgBng4eUppK8",
  "key22": "56pRkQWUPBFRZZvQPGaPEbWuwUdgBqjGBGsSXHKUyJFCMtxRpBzB5h716JNMESvE1MwvX4PSpYESKA5XQEeBNaPw",
  "key23": "65mEVSVZtYjCktFA8QAgguDG8E25yv9N2ov9aJEMvNSBKr4LcSocJZo3UQUVtDmXAzwcvdPtS4MUMZEyqJUwMs13",
  "key24": "4jVwZDu8NjxD9LvD7MB5oj6pnCKafvuBMTZptfx7vRFJtd6TrH9NmeB8MhX8ywbuSDPksdoPybGmjy1CVFML24XY",
  "key25": "yLhpLRQ9g2qCmDr7VEDsDbjSXE1NAtv3v7xTmUx9ipv6WovsBZAt51Ct3oxdsfBovedUS6cXsJCppWot6mhC9Nk",
  "key26": "3temhiv6hmmvAzF2AY4uZRsGYQ93dWedHDsADXc9nEPjckhc5MdJnDf3vLrBeLjY7uiW6bkvJEpiMd866vPN7R3M",
  "key27": "3gi6HFZGyQG7GLuVp5aQEPFdoRsue7ZWZRafrUe9TmUBt8Uo95KpSMmpKFhbVwPkR2ohstYWZZXTueAkya5NP4YA",
  "key28": "3jyi8dEuoWwsihrT4q9pzgadcnucF51fPD5e5zwtWqTa4UxmWxTWkp1aeStgP3ezNMSw5pw8yvia1YCgvx9aDSFo",
  "key29": "23ev7aGtBWEuGRcaNVbHdKugCawCHkwWaBfXjjG1LSXV879X4ipNegUKoq3GMC7gXzQHdBQ8VvXq6T1m9FdYTDqA",
  "key30": "2tWVCjqo1E6kigjCBkF9X81a35z3GwPegWHTABPxRWGhJa9TEbGLeSfgaQQf2axEsMZ3bSvFcoBPktLZT9etFNvd",
  "key31": "32LVNsvynU9abeLZRod8ak2z7CmezAFhNqeGj7VdCU3wYiKLb63C5ZzeK8imf7ELREyWjggxVvHw6WbFevzYsqGJ",
  "key32": "37fY6jaCgVDHAsYNTLePKvH2UcCy2TaqaSeSzR7LgoBfrBASyf91ph3UukDRKUnRrVJHqPJf4Wyut5rQYupjekCN"
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
