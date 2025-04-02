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
    "BxwH82v5bvvrAJNx9Z9PZC1ydBHvGSk9E91GeurFnRToXUJV5uXmi4RjzaNKXqFUjJxiangK6i9G11pfNG65EuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62VyWx5qZXFDakpT8bNiRA1YGLr4eReZ7KJzkPyrgFrxgEWmZjNGVuF85cPRsNL8sTeVybajhAYX7RdBUFMsUS96",
  "key1": "3GPi26kmX4KSqYCAzYkA6vqS15bTk1qhHePe1kb7XHQhN3LMQk3KpJuGCZ66i7ChcMWnxAerHzcDgjFerCnhmmmw",
  "key2": "4XMCmiBTEMyJvSFL9Di2TFoygXpE8n6KVka4VGbSwcSMuXQwvg8557EKLWZY9R3aGEQ3whLCsZUteTbKQ2Rpjauu",
  "key3": "4HENgf4iUqg7eZfzykdmGTSJfAYQfmgbGF1mVpnVBGvQ2pMcDYMuyAKAPmi2qhVDS5PuTda8GxrazzTr2bYtDWWE",
  "key4": "BYKDqiYNHUfDJV47CHS7R8bPtgSNdmG9zpuMJHTHviPFk5SK9M3HKV4Z93eGuMU1Ye6dzQaeDSjhfwHWe6NB95J",
  "key5": "5X6swQujcuNNAJ2MPR61B5N6JfTkzQWRGAYqM6a5hiP5quU9vBb1nFVrWsJGeueTwc1P48FLWvfi5xsd9y5i9d8c",
  "key6": "3cgCoQj2ZGQuhxsYjPamPEcQSq3ko2wMshu4WAooKuQeDwcqesL8WZZjVidPK3K8fX5K1MDqx9dtsqNRJn4EYZwc",
  "key7": "335spLTDa7wpCGBcHSrghTzdK1fxoVJ58bJFJsUaYCx8A7QjNymgSsR5nkpoBZkedKxeyGdwQEF4RBrNXXFgEjaf",
  "key8": "4vpWA4UhujJhcXTigZutkumabaxARYfJfFCFJeMftYyBeCSUEkuTDrF1ERbmz4Y4DG7pxpf7Skpb39PB8un7cUC7",
  "key9": "t9dYZNCYuDELoYh3CnNRCHYoFL35qE6XmrKZ2ttsSHSu2CycQEcLSxtCQr9mdMcAyRWs5NSKMEgHBkAkEG4GxxW",
  "key10": "e5PcLRzQJZcH2dpWSMkb2BG7j4nTj2sN78GtrmuE8ZkDTzTLj5tW7Tv6hyQcyJguKXVZYaamoi5z7kW986kx1nA",
  "key11": "3BLHK3Nsb7TiGqcsxdd511jyKbyoyb7E9HYGmhSGv5puFcT32WKfWQMDTd3xrGzow7un8QpqGNgJCuHwBLLtosvp",
  "key12": "4gPmmnqVKYW9SYv2F9EZQxA5yzNJsfvXmpF8yf9AhXo88QnGDVUCmGEYvCFxywKtwxERTEYAZs1ZZKajR3K37EdB",
  "key13": "4RkzFUtV5j314dwix4BpsM6pN5BXSTc4WtynyBENjQro6kTC9CbQPXGoFJXRBvViSwgCzLRS2xrSvWYj3eYZp2bm",
  "key14": "5QXMt5L483t23up1GuG5P4nYeCjbVPF82qZwmkhkgK84XNXeHW2JEjBEKdj83uM7BNqnj9ktUZHRksWDsxLeKytv",
  "key15": "3tYfyc79KJnhUxyzXvsVG7DZg4TPw8X4iXAX9cAaFc5cNmwZrPQWvzziNM8Epf8pskm4bjbiMzqqAQkkzzqSpRqD",
  "key16": "v2LtUi1kCFXvR7b6i81a4bHtUMMNksUqjHp4fwed8fQcc5JtkvkG6MwnTfq8sggtSrFnmbQZdy9Sv24GwXk3iiw",
  "key17": "3MXq3oAEBZXHWXrckQqZxmYBukeHYEWECy6KUgzwQTsJGewcrVHxH4fLPiT6jGo6rjR6En1ZmGxTrYYHTivDenHE",
  "key18": "4BWLW3M6ojNrq9gR1S9pjgAEMtGoFzJda9txs1QvgDSFydhKvu8X4vPQ1pd36APGmCL2Th4vmst8wpfVDinQVBZz",
  "key19": "5SACxL1ZGuQqCYWgY7SECJxb94yxCRt8KP8AWuQTzcCWV32Q4QGVmdTksnGupsv7w4bX8fp5cH7j1yusFadTmeyn",
  "key20": "28ixi7Uda3DTpitUFRfsNPA2AebAFY9LSHgRS83GsdbWX8pt68mvWK2kH91BDmCVLABKyDxAFKThcaveJeUsVgif",
  "key21": "61ALUFp5X1sFBKrJEdgqHbEZqqPPg358LdsRreeG5SoNq3ThNB8BZ2at1jf81dRunq2GAoNY4tXRXVyMh5LqDvv8",
  "key22": "3YAbieEyBXU38mj2SZGVEnmkbhayqRBS3pTcUokyc9wBLrncAC4o2U9C4Fuf158FWk4doSjvpEYfrWPU4ioiNaCH",
  "key23": "5EepAaF1L1jsWpN5es6qHJXPCe9MfvXTXoDTvWoKmRCVMDFGcLbszWFToooAUKVcy9easYpbzrQq6gRFDQdESmZA",
  "key24": "2oxzdxR4hvdyQSwfXQXTpmAu2wkj9fEdj3fXk4VgdWN58LyTQc9ZkfiHRpg6vRTVMgYo5ubhmRa5m7QnbPBGrCpM",
  "key25": "2AHrZ7aT1nJuZZDafmorALUsYqx3qbyoAjTyf99MjjiYUuiEVc6qgxk1VdmPwU28pzEpm6Fi7wthoZ2k5CV4KotQ",
  "key26": "k76WEAezXNeG7ZhxGgZvoxSnvEKywGF1qW9kctAmMXREFnJbfsgxYJUXLZDg2BNsnV7rXWaWvAHd3LLYoQH8T3t",
  "key27": "3TrEwK1y6eUK3g1gF9mpJL4LdSGWHJiHSsJZ8YfGa8ijyG5w9dvB7DCKhnY5i7d75uHfmKtPtEzd7BZVgiRiyHr9",
  "key28": "4dNU6fP3KFRgNQtvFWh1A6gCMfkFsGsLG3tcW6ThtKiCKcBGDJsKB6HrzCbUgd2N7tsS8yU2rpbSLeUgSa1zTNgA",
  "key29": "UPJvkEBGtk3NPLsJfxG11PYwQWb68Gtf72w493fmjEM4XRxzKsgjwWxNw4Q1WhY7GYYptZri72kZ6Vw5MXcA3hu",
  "key30": "5Gn3piw1HCWBZrrJmtPsgNdK1a5Q4kW8UKYUrSEM8ACxzsqJeRrt2pcEhG8DuZUQo6LMFEa89yd2hhs7X1gkGvEV"
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
