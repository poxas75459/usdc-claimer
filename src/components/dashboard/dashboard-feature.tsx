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
    "2BHsnxr8iyJZK8Wifiw4aJRNKXngqctsqkPseL4b3Vwro2LCJL13nEZRWUgxXNYgB9BzZ7Bru24E2skPLGEnmhUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34denbFyQF9eqMEZmPkadG2zeKbGdEvRcBMPjm7Vs7c6zAoyU8z1fedoLgpc7C2FtYCUFvD1GmsUk4vD9g7hApDH",
  "key1": "5QVybt8WfXCCv11n6t6PApHjembYp8EukrMGvZQfEf5YniHVDUKmVRqQtTSYmWbBVydYotnMUx1xTf8fxsbZaRPv",
  "key2": "2FYoBtSdM52ceeCQiHt98gkaFShFQerkfmh24HKuGmEJQadMMCzE8G2w7ybFgdEgrCxrzYrssqtTc6PjSDLY945j",
  "key3": "2CoUeqdLK68Zv1MQgnv6iaShVSgEHbWW3uvZhRajiE3RM8ZxkFRq72ex9aYPDQpkQmcg3sNDoEK8zxjiJVDACqsH",
  "key4": "2eDPjMzHJRLY2ZLCGrnayr1iwQmRkFAkcdKV3Lp1FGfyzbD7unEjbahXQXrJsRS9SFVTs2buEmaSCu5Lknd3ve3G",
  "key5": "3wbtXWbBEamwid5K6ByTyg1aJcUjvuvXBidcpmsPugKee3y6yjDSVfiygWN7LqvaUbJrWTCnnm5T419UzHQCHi6P",
  "key6": "3ohvuUHQ9A742z52BGJoGwNeUy9mbi5o4uiNCEVPmZj3D6jCEu9zFWAsSdQ3SJNARxoooFYzxFKvmrf1T9X2RYJf",
  "key7": "vrXX3UTq7bGDz3SRKewVT2YFqB2CH3ofHpR2w59bhxe2RdoFf1eKAUTbUii97RCkpXLhteA8Yvpthip7D4Y38vo",
  "key8": "534g8Fhw5cgiE46rB9Q1ZPXi8ep7EAM6uizz1KNaeN2THVRGmHgn2Hd1MgETe1hKsTokwKKfnu4AUAfP4y1LbffU",
  "key9": "2uVzabdWq9vxcCJeVmNkTmFQpi4CFfFnZiQz5BK85MJsonQQy6bWeLmrh8LrsXVLWaGwdcU2D7AWYEmHXo1R8fhs",
  "key10": "4UAXWsxzMajAXUm4nvCcitNEemBeW88ZvwUVEp34YdGaE1HErQTZKwnPECts5NzqRWS7P5454Ect2AATpVXb7DNS",
  "key11": "4XGrPTYnXH7cVbZVcrwtFBRm2D3j6Aqjdic7UDaTU67c2XCi6JxJLjvMN348UY41YoPSWyYVScbDTLJzbRrFPUBU",
  "key12": "5W7EYCgLxT6T4W5ggDBxY7kFoA8FfCX3tNZQdWaBToAXbkJULKKsewuLjDw5Pkp2aRUsQMsh2AhYtYR48RokQdmG",
  "key13": "3hTyYhF1sfk8mqT8imGd8R5hdwhF9izj4RvVNwG1NMDvhcygzT8Pi5vsvusqgs3R2cXXLBDZ7Ty821SVQo5HC9v3",
  "key14": "5YxG1a88LgszyGJht8QySvBo3EktToVMLNsSuJJo9d4RCH4Vc9UFM1e8MG3kTezMUDidegFF85EPWCnhaaWMqWxP",
  "key15": "hv2UAPrJrf4MtaEdFLG2Evhs3xuooPyvxhEhqSM4M9NkyPZWxEExpM1T4REZ2W5Gx1THHKF8ELdWfBZn4ByF579",
  "key16": "2xnnZJA9CpTJw9cQx3jusx7wriyvDDxkGx4sf2G8YTJBcwYheqBMTr7duH878RkYB8ZLeH33Ajoop57nyAYu59aB",
  "key17": "2fX9jWuEH3H4bqBpzeeFKUMCfUog9Ch6PS31dCgPta3SWLSAekL789P6aVnCdyxpUtrb7XA3cKGHSas3cAjri5de",
  "key18": "3tDPUJL14mL52yFXQB58frTgAMJD4Zj1hy8pioMnHUpGvabhzr7XjPYAo7AXBLxRpBREnamodyAZA3XfKYhvaVNc",
  "key19": "E3rAY7c3KkWSWHsmcso2Wgy7JV4XGqXM3hCuRA9F851d6Aq9tRHuACDGmPBttCCghHxUEfKkEzaeaFHbH2pUuNL",
  "key20": "67ZPM2NCvCs5UrkcVbUVBqA4RextVYSVjiswLtcVEDBG35VTN1XAdGzbqCR5v8o9ckZavvkbiJqZ61fzcKyoikYK",
  "key21": "4esuo2U6Cqxp8yQGE5KRjdL9zF5oCFigXm7ycK1NzY6LCkERwpRq38g8DVUNMNJdkyrsMxvHLVBTS6qybdz2t3MB",
  "key22": "49t7yTNgGyxg5Hmd39eDJvcdh3FtUuDn6H6srL6MvMWXXYKqc5gidVsPKsKD2qzCcFxKKYbjXzJaerDoeawS1H2p",
  "key23": "4jPCzymajS1qpy5RgDM8eAqwmmDCXqbgDPnJXTnZLCbZv61vFnRmKYVq5QsvEShs6QuzcTbgpYqxqPrTNYT9kv2L",
  "key24": "2UmAaWaxsqYakj4rtLQH7YPz8QWyg47gVtZ5CBPqhCKyXNppggxijQofhdx8BrQfWDp8jkiizvJpesFP8jbpkTTo",
  "key25": "2pPZEC6RANBhHRQJxaJQknfjnq1F8iH64BeECWcoMe17xgCcSoH3jKCTvuxrCqmEwCA4DwtDgZSS9yvyzoc5WG6i",
  "key26": "2c1BX4TLtUiPZ9K35hg8VoT1HkuvMtQThSaYFnKFwzReTKEKQ9LPnzNwvwsez4ZdBPUNwxeRmuHUg6McTXn31fQy",
  "key27": "4Wd2YXdvEZRYamixqDkivChU8echHs7LveQKga9kHf51YX8Smm2Tc3EA6iL36dRuEDJp8wt9kNP4EzekA713Qw7Z",
  "key28": "67YHeKCKNCZsAybPPwxx1m5NcyQvB61YDMLZavjQiRpNf9ME9Xewb37RKdMJXnLudNx2RGvnX5kYiZdxwaLNiJ6P",
  "key29": "3vdZRum6ZcKmBFzEqmVB2DVEopfPYjRq1AnAG2s2r6JVv6HN9KFLVsqMNpNbPpu58oNjEHUH29w5epcPdZkpXLAG",
  "key30": "4N22wtmawUbLMh3PjgpQcBd9Qq3xRKPcFQxLmjE2fVTzJHtm51fNx6rDy3ASKUcRpbBg6LrVVEgiWU1hEiLeTiup",
  "key31": "2G6ruSkQcRybmBr64D9NKmUgV4SH9aewc8aikRNSWA2a8wG1H8pHQBNZgRq5PeJXvmoDZH9wY8Qqx92MZXMigwXB",
  "key32": "5e65FU3b9dgviNSoafx81bgSyZisP4fYYsep7pKvsWWZE2LBVuwAf3xp5ZvNTeYfJt6VQLs3eY8eHg1oQPED4Zu2",
  "key33": "4pvFEqU2AZHi5mVEjb3r8QHCKGs1XaaUFiziFanUeqdSqzRadwKFjBYxNmgW6fTkzYvjh3cavjVXCCWVSL259N11",
  "key34": "M2kvNogNBvMnQkmgqYdwZm13Pz1hQidcoXRrxrbKzeuHu259u3XPCmJoN1vQ1kyQGG91eqh4vufdwXumnCbLyzP",
  "key35": "4naeZzTaQPpa5qSELwEN7JFYkcozpypgQqDFwyF2X9wmfay6a1oUbfhYzbfsfvfndDrPMHdqsaDuaTt2mdKrSZvA",
  "key36": "3Qe64fhgogCaL677xndtCP1zMPHZmp1mmcabF758qKhRiRPXBSuuKU6ZbtUz44VcU6oLYBin44H8FASq9vJ5o4zZ",
  "key37": "65ezJ7hNX5hufHNY6jAhPPR49sSPG5CDugYq2ApH6VcuA16rSB7X9gmSeHRabqawH9tUnbHbj1MDw6M3VVWbzJg",
  "key38": "5jah5fJazq2TkS45tSZC5X5tdxs8pWS8exZUvDPwnawS3M5k6fasAa6DtDqC7BJtX4TF1bsApgnEiEYh1YU8FQT8"
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
