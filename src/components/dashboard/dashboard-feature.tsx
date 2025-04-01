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
    "UnwCoHqJDUaGGACfA7soVJiqkot9HybnFxzihtYgeCgTv1iwnRgpNUWqKozgzXCQgtP1ab1fVyyaMGVKMGJv5zy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WZTg9QTxKLRb24ZCoKqZNFeKybsUuEsDRx3KyGSz3gaJSMKrm73CG58iFqJpPnoV2BWHuXcXzcpaQDe1oYaaPf9",
  "key1": "47TvDtfdKNz5j5NG9er96JV8mFmDVpAErzu3jbVxM4Fd2KBxK8WHz5yT5hTb9jbaTNFmP8rwdMA5N2rsZ17khKHZ",
  "key2": "3Ws6fsij8KUFAV9cREtLxLovVn1ikfiAYHrwZNUooYzGo7eBqeeh9Ut69kPrx45YPTFSh8DPpx6Hnf7U5NQYS3uU",
  "key3": "tgkTJH23zqwuZBkUoJAKgdYo3SZAdz3ASXeC6KzRtS8nqeBYysPuFY416ofGSrwKebjcWv6K5HdXenYi3uB3reY",
  "key4": "2nhyxhGEzZ6jZAeichV9Tx22UKKf5kfSXhjcnn8jdUrTpprjzSSV5pam1b5kyaKgZzxqbV8cC5eWFcT2zHAfo88u",
  "key5": "4dvvoHediWaWAyG37EDwrwjzYjQMbr4Cz4CUgiDsfzG3ATJmtLNiSRYNXq4sWaG2ySKZWj3tGMDi3KoN7oHRxfSo",
  "key6": "XAn8GSubWK8fUXgJfqWhFLjVHC1ehCuqZAkSMUKyN1pNggwobPj6AoJzKPr1CrvPeJGXsSDRzmzJzhG4jRPGFzV",
  "key7": "3wmLcABTvQrMP8Ph6XeBdrsJG5937dFTuqYFnEbrTEnVAuXzWDHBm8N4EeGdcBssxYpQZhX7EzpZzax4j8Cu3tTU",
  "key8": "4EuGoWSjmAWQryshJrPfDYb8dsjYhG2GwcBqr66iYZrRrEq8PWKFUJNm2BdvLEg51pp9suyTEb9ceW8EdEifE4P9",
  "key9": "5pnqFAcb25vMsjA8fdqdFWcG7Zm8cQfWj3rGM6WUTtMPigFRL7gtzjnVU9wRJmfMcKaoWWycir3PsJjqGMU5vQb6",
  "key10": "pWkbNzaugLXEEj3Aofd6EWPvtcoy9jxbRE1VgLXej8CF5f6bY6i6WM1tTgdPfc226Jj1AKnR7vpYXtHi5p54RJm",
  "key11": "GjaF6Xe6BgrZ86WF1wdME5tqwXRXCJn3UkwyXq43p7ZRprD5UQHzktvhYP4H6V5fkuryUkHqm92iwztCDdvtKPY",
  "key12": "3DR7V5wuFbWxp3unTMcmmEjrvKSNKieTUUHsyz6JQuE1NqvyziPibjiAwZoD8k9pFFuPcM6bxKoSbw6dpjVjkmTx",
  "key13": "2A8WHbL3w5SHBQYuXouyw9xax1DWAV1VLorJhbcdGwwx6skNnpNtG11Si4P4muUFSTQ2tbYYqSs1Y7n98xPuGw5K",
  "key14": "5tP6cutY6c9BrZjc1qWZ6qM6Ann5g6DRL94QM2Sx1tAFCm5gUkvUT4q3MTekKSpEkYK7JAPHs2g6qqFHvLNR1AAc",
  "key15": "54ELjRV5cnnbu6jszdRQYVv3LUR2LVbPSd7a7AMKEf7Ev6rP7qKLj8QCpbGi3B57ciGpa61KUb2XMJUBXxzMKk9u",
  "key16": "1nHDJeUm16WnshonskdVHpriEpaAGjz6cvAdb1qGXFXDEPfWJCY5QcnJPmZDPJFRirBaKB3AGUsYuZgVVUxQ4h4",
  "key17": "NgnCgPuP2RYPapeqiYKMAmXFPWtxU5uxj9jBCyyCB2APhY9juCZpDvjqWi3HxZhaT3CoUVK1CXhspi7T39ZCnqW",
  "key18": "Meg1EGkfxFZWAFZbSMtJqPAMFcrd45fpNgoV3HVUSJ9cRHXZHWWhqrqpejhAVLpeiZv3TrzmTojjpU6fEanEfwN",
  "key19": "265NLPAUN9DP8FmxXNJsjjUfGJ27VsmWbpXWETJYjYLzBsETyJhjEF28oLUyzwUpx9hLzyxEivuRvAn9wbu6dpCq",
  "key20": "3xZKFSYazeDd9e8CTjLmdwxcj8XfkBVa78xZNvRoeG9TBuqB3XFRegqdxevmGm6AZobPhSKDJnsPAT7HybhS5bNR",
  "key21": "74NY3Srihbri47CuWFEpDJEeTxTQExJjZcjSBVyArZwoDVaNkmdb8wUXKB7xcCTi2d3oawUNozNo1fBkSFhY1Nw",
  "key22": "mNFC11KS6wNS8gstfSuhBT7CuFBcypeYnktuYFqhduZaQDmKSCFga3TaxzRj9cm3aMYHcvYsRyaiWkXLszXgd3s",
  "key23": "3PDjuqPedyweEJDWHmEuz1ZHSi17h3e57Ybwt7i8aDmHm4Msvap2Kbx4t5mTKLp3oCB3aB7aBKHz8ZUbEmPMsNf7",
  "key24": "4wFkRnXr35X3CDuR27NJCFrrAwrpQjQRr5uoBdnHPFQRXYg7EUnBfEpxUFtLkVPyzuyr7pjutawE64f5hxoynSwB",
  "key25": "4vnH2biTPxerFYck2kt1bVhZyoESt8durY63PrboPmebrYzfrp2obvAjwU79iJecSjzFyYaURn36ay8KJ5PttVrG",
  "key26": "3dobJN9UdeDYQyvgzhYSwL52XmNYyBQYd9vJzmP77Gb3Ap17uaxmGKkvhtCSzjaZQoAGUiwDQWaWBR9kti6KxCMv",
  "key27": "7etyzFsXvAVDforE9EQXwv62HHLUcTYYPmwGMYZoC7P64woAMz4mAegUKXdftxth2QMfJ52PCAQMBMxEV53Y5xm",
  "key28": "2ADMKyQpomGMtELZfhdst76N1qL9qfdni9mqDJBgrbaFUWD7UfgQzZM2fePSNSSa1qKrvcyXJc28mN4rqmFChYSC",
  "key29": "39dWu9G33dTFWc1WAu58trGfbqKbGmz95Zufaq8AfvSVjE9xtCmJqW31qHRC1Sq8eH7jkqSuSzN2dEzeqM9RJqnE",
  "key30": "5GoCBS1FkXkNaoo2sJxDJFkAW5yxmYs17BDf5Lct4kb7ULJ2aqXUfT3brpebjKvhtCtz5Pi35qDdWuo4512FC7ks",
  "key31": "MpUqhECEaqKB3EyfzubXu5xHCn61pHiv22UMckmc4HREpD1n8LHpvuX1ig3Rx6oKdJueoU3mfdQRuL61JpCC1hG",
  "key32": "56smvFVuY6cyv2X2rTZ554maHhFxHu7AW2JgwrXUHozKyqovdGWXSPhHHmr3EaKAJa3x8BTmjFHHRoFG4gnNuUpA",
  "key33": "2LnUxguZvoTEK1KLAdqDxM4SRxxJBQ7XgFw3k551Lx2hshjD5qMkhv36zvtvHETdazt27eQRS6qG7upAhfkBdvDZ",
  "key34": "5Sexth6XiK6cBixWYyw8vGPBhMp8HLgSWPAkNUP1KEEYou7vn26YMdVFyJUaEF4x5YJrK2S8ThKT9T9kWhuVRLzE",
  "key35": "53DL41HJu9kPMWamxPiYRGydbsRKV3GfCHn5xEA5zpRW8xf6QARzwneSzXMihKw9R7JZh3qLiULs1fo7xoS12egb",
  "key36": "41Kce6zoP8ruEWsyPHXyYS5XeeKsGdm9n3N7gzDvUFGeDhQq4tTXo8X4zzy87d3LM8ASuFxWmNfqQZHSxEJSHcAA",
  "key37": "5xon9imutijytuuBbwrZ2RBFkVS236P6nY4DBVnjSopRxDhDsMUitW4wrqwvECWeuGgjxk7zNNHtVQjuNP5uwgAj",
  "key38": "6enHKphasMiPDnfr8nbBUgCkDgUjaGgSjf5KU1qCeNFp23Ati2aSsbQYpJT7hAx6jwUU65TXPxRhPswXBzGENzJ",
  "key39": "3d2R3NFUmJQPuBx2kwtCVFvHg5sJKvcv7s3DX8t8LzVusyJMvXAdBnC2dmHmq5kFpuKcSj75u4qMpVb2hh3btJyR",
  "key40": "3V5xCe1XEa8LdqBDwaL3Niqcoc3eov8WFfXhpaMZ3Zrr2ZwiHtqAiAAwBa6rjue3JUKXWrqjeRsQu1WxjmkButr4",
  "key41": "Xm75M5AaA9aWEwYkJuGnXjvvgdDDqSvzFCS2YrVCHWgD4W4nREq6vup5j7YTmTbbY4by59KbHCoh33Ae3ecDT3z",
  "key42": "4QqobashYbTumY3xUtmq9Bf4EegxTqw7bf7JRHhSs8gACteiEUYMLEUZHK1z2ydDsToFdT77eomDqDzF8BSPesEH",
  "key43": "WbQzBxJkkPDWminXb7wmvYHX2yA35rTwyy2dv7zjY2JJmTKrFjXYg8Eiq2sM43gNHWJKJ94fSQ3h6EWnEKxMUGj",
  "key44": "3djjh1Ct7tnPJVFFGB1UB6GaqNurQ78nVbyBMuRkNXy6BSqTwh7VhzKfsowHck3gKAuRjQqKS5YWwfHeGDbLzme4",
  "key45": "5CYSUD3UjNMFaJ4dTwFCvRAKVXRHnEhK1J4k3mHWvQoXtm4QPHHj9HMuECxSPXJUqrtrxMMfFtbF6kyCJUaTG6bH"
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
