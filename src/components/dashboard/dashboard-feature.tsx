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
    "3fs3Y38y1Z6RudVFF9AFFZCE1NXTBoZkg64yKLKvEQWtJWhBwbzenwko21USApTBscp1piBMPkKVPC23hht1f1p8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V1qvSLi1UtyTC5vx61iLGBUASXXiNHCM593Cju8inrvcXve1um26EqYRHbsvNGsyfv8d69AVjJErLPq3kgnUofu",
  "key1": "3B57XkkaiE6ePdMgC6cmgNUqB6nAzqBhXhNe8uBCXHB9rqF3ySxeCMfZcZHqruWQDxWNqxhvvJt1CqVKA5AMWdgD",
  "key2": "4CVbzVKmc3E7bJ2T972vtPXfsnP1s2RcDyY88FHkBLWAZkGoAbTnBenoMTW6c1WskqFVBvJqf6Kdzg4uXbRzPj6R",
  "key3": "3FJTUb5Wf9jxqAmbeqjVSZwLp9g7KgAfWn1SayJow1VfLd1LxhQhhojLKn1819Lteb4PKyt6EGVk7HLGdAY1EwD2",
  "key4": "5Hbefd7X3ywPx9srQpMTbQo7kohWmNc29w9G94iX5A8ijjiPMQxY9tszEqiEB77cHeQkWBZqKapef6HhiuYit6iM",
  "key5": "4zWBmtypiHo6rajZnvKT5zBrUJKJvmaJVaWBzN7BDYBTzas6fS4H6KyxdJDMVEUosXt1os61oRuQbsWgsRpJwjjV",
  "key6": "4nMtZD7fxgKBzpfsQDShiCv3r1mXi9n8JDUJXj2N8FaWbeJqWAj616wmWVH448EjG4s2MsmWhZUeXXF5jhk786JC",
  "key7": "5aj4p6XvRrqgDMs1oRUbpQmWGdxcVYKG8nnvuF6ZRzbgygaJdrzE1QGgYFDmSEqtzzFYGgzVuEuch4sqWaUmDu24",
  "key8": "53xFTvyKLxeLMbYhiCUJgePUZTQmijJAXyiLS7JLYQk4QDFPcfm5sepdMS8mJCgy5dRCrkMf69ijnQiy7b5xFkCj",
  "key9": "4BgWQ2s327dKqJFdn5DBGacroTrDLN16aw7f1oAsDWVoNFca5QFuLzoTThbr8qv7VYdTD3UptaFbbZPfPKwzXf1r",
  "key10": "5mpRLfaAHX1nCX85h6C6j5hoKHmQZyzKjW3yyN4bM1DTV8WvCeyS5ry9Kjc8t4U3BPorh8aEXBEsVjRRaz7iXSos",
  "key11": "5PC4VBUFsSDBa36gnkiLdkUVHRt26JcporUkKxZ1Td18VcmCXtFNGaJ5AmS4VE5n6GN3n5tn314YyCyEbAPya3BE",
  "key12": "2W9H7MRjcdsjoo43zt3Ahqx1cyynJNP2otj3Fk2ZiNmZrkVpuvSkaJ9ZVkjrjbPGohUdFcY7gLdWpDVafot7nD6P",
  "key13": "5pX4S7JjAimCd5C9z4xTAWXxh9DFUevHv3gkzQw4fZV7YQTL65ocwdyaQCAiZhstQGcDaEAauCTa7EWpsSzz7ky3",
  "key14": "5vzzDk3i5cUcqAVWcCmUjM5zz1TLPMQeAMVfRV2KDzv6422qWgkYwrhZawLaKz5T6nwtM4R3eF7GNkevMQb2jRW3",
  "key15": "47FWx4qMTZoYdjjoZG9SEhfixjxAHtiUtbdsRXR1SVVTj5RvEV7tQCLxCggSJ5DLVNcDnAA7c1odYA94iu3SU9Bg",
  "key16": "9WTaXPZRgDycAykoC5Rx5pGW7Rw6K8nFbSiqHvZg9qXDKxbuDYBMhWKWFUcoR8M1oustYokxFivSCQiDdobd2xC",
  "key17": "3bFm9d6a59RzGKZtnBS1137SfjYAyJ198xRKdFpkJmYKS1DMVHBxPuXKyDNnVXQufeMZVV99h47tuocnViBs6oYV",
  "key18": "3uCD2VGmr8eCSrBEjunnjMnKE67JqTZwoddFHsUxzHdbo9MLBy3cruvBJhySagUeJfdMJz62JPsM75ooD67ywaSU",
  "key19": "2SGTitzXQWnFdRkCjsnrVB971mYpQ71HPwL7FJTHyhh9Vx2QNTjDTtSqnssifMPp25xfnB2dJGU77scUGNZmGZqX",
  "key20": "51gB4YLQrG1Wr2ctSvq2iszC7eZqCVEU3rgKzNMLmDf3AKF6ARhHtXLGkPA6UpQ1TRdpwcsX2pJoTR3mw9Ssc9PD",
  "key21": "4x5JLzRSeZYn4er4R4xW6HcFYbfb76Hcs9eM6EoKhrJQp7LfuYJWxyqvraRJDwrycd9m3vDYuHhUMprgNcq3wv5z",
  "key22": "5Pab4wiMCi9LzV4XyrboCpXTBaieeTsWrQ5myApy8hMyCrGpNDzfMgSde12JGETwP3k7jMtHiRgg9yNuRkXmNopD",
  "key23": "k5tp95M4yfg86Y7W3VSPq3fKyoydmQRqn4P54oxfx4tmoHfbUL7p4X1Jhsa3gYAL7nzotdKj1Ajz3AtsifUanEr",
  "key24": "8KWBZS32MQvPoDhkXw86CRwjmE4ziNLhRQscn8zxYT5se12dbg6i9HyudRdXcHJan5Pw2GGKnLLheE2XsWsHiig",
  "key25": "FX5hje6rx5spobmho3bsN7KAxLrxoBtSfKvXogChWLvswwgxUE9cfvdcLPbZTMANFHt1xg1yvqdQCr7ujaSCKX5"
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
