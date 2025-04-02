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
    "4SraPvmkRqajbn4tHY5GertbqFuMZRWic9L3vjwALJnmUv9Dt3Xc12uuiVWgSYKNbDVDEYvTjFME5gL1SYFuhq6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PLZ2eeT4w6jbaYJvNR4enn8FjWaDr12bb8rjSZHZ4JHrtahh9CeNpZbX9cEczxbug2BwxQEWM2FQ79u1NdArc53",
  "key1": "j43bPaH2zosHhyyJWP7oAUUVvDEBTA1eTQjGfsSZdybzyi66xJypaLU1gsrZmbhtMqd2Lvu8zRem2BnrUh8zrCd",
  "key2": "4ZgUiff2RtuYs8P44C7bkeB1eo13r2vBLPTTnwaQJQgTXDfEtX7iTkRQnUkdoVXUDRusPDYwgFSS8si4Wp7Ce1wY",
  "key3": "5PMNv2pwFVrAdwUsVomHivjieaD1W3EGzGdAdopE2SJJGixa8wFT8eivPgx876sSQUKhN8C66u6y24B8ZXnGqtig",
  "key4": "3JArSGcicVJZPp1EShZEk8weWaLAS4RoaHyFCd4vJnnGNAdmvRSLo9ssvqHksxv354vj8NwtqqPxxHxZ3dy787fm",
  "key5": "4xwqv6kE9TyqgbJgULLwFNRxKNu7TNDftaAWgwKSSzqqogdpGzXW5RtNLUr6zJEwXCzK6ibTskZA5DHRVxwoLBRH",
  "key6": "kRSnpfszCrLgcPaFSn2VEoNGhN7iE16QNq5RkHnG2b8XMndvBSpyfymtNgbnm1smRh8yJ7gNyD2F97UQL36Wbuw",
  "key7": "5SeAC7y4sLfPkHXY6kYaczzrUTv7ShQsBmUZGTSvc7RUYax8QiDkSzYYioba1G1gmhevdRYgW7XoKBnLSobiZvhV",
  "key8": "2nasGN3oPbam92ZNCQw4TLJmqP49t7n66rCR2xhhDNZJSp8U3hUBZeaBch9Uwsz8zRLf5Bp7FmeFjVxxo2LYqFXW",
  "key9": "5i7rMdVuf3Ej5dnAPVxBRscTQpTnPh77Ryb5jucjTLuFWR4m5CMocqQkWYxjSjkxec9hsjzTgvRZRqkdy3qYzGCi",
  "key10": "4yfkCNfXLdsF6mocig378pKkWRkUriYXTuRD87sXQMSwLMaUFdjnVBwoth1D77Nho9qTnANx4aziv7f4REBmiytr",
  "key11": "3yA1hwCrUoV7mWTbiX8UZMEdAkJV47L9yNtZG1654br5CP6vxM6KP4RG7g9rtrrWur1chxTDNBz6py6TusF6Bt37",
  "key12": "3HVx9syrAu7SWrGhLi6uixP7YdDqGQstm9Sd8cd84NdkeYnUFDmrM2QxAjv76dn68PiksU1GXHdKAieYA696D8hw",
  "key13": "5zFMbvZmFrD5tysqcPUWsL1wEBBkdZMVPNea696k4Tdxuxu4ki9De4pASduqZL5HrWuKiPaVTQwVYyHswudE5aRx",
  "key14": "mUTp1H5rSd94bLn4Zc2Ji9TDsEUEz8SXoisEXEUSgQmG3yxFDaL3g5oP26ZUQ9smEpfCJfUF4eoAdEFu3YbR5as",
  "key15": "5mCT1hjrg18JwEgP5MHJRxR1iCXAAHNmdcJdM9gbSsGftPavvBS3xTcfoAqWiFva9Sc1LjQU1x7FD1a7Sn2oP8xy",
  "key16": "4VaVtY9c1Cwt8sSKwpt9fTkZsv1unnEhuQvxSaenjKZLjnxUzetDrn7HxVvMEFGspxAaT4sdqPTkHwzY7Q2edpCU",
  "key17": "63Dqp58CyxaoeZiSdEEMLKUWBM8UxpLDaKtMn2sCoPECS7czTp5WMyprSN5R9nTmis3AjstMQNPCeZEwY9ungLav",
  "key18": "3AvXmvsrnY6VHvZf5JhdG8wJAXwsXw2TP8Wsf1cG7GisxTfQxREpxyMsjutLYpxFFu8yrQTaJKPcH9L5oSkEYBNG",
  "key19": "4ZKCqsL4HAQrhohSGhpXMDS2eSCxcgMj7mcuJa7WSAgNpdwJ2fHSda7SDg1AdJ3u6pGong9ofLuLNNaQFxZ6zef2",
  "key20": "HZUfnABqw9jQhQ79sUpf19FBt3o3vZN6ci7FwDtdiD4bT1WZza2FHTYqRQty6qdQRqHNbhahWPSivrFRQTszXnU",
  "key21": "mzy7nGsG6XfJD7qenRijS183KHuW89tcYfub9yZJ8TRzphABBqH2eVVnpYQA42QXJJGXxsdZFArjXP7u7XR546k",
  "key22": "2exm1V7VcgDUYt4FinjsaEAvkyMrQp6epPNDXCEMy5vURLbHWGTB8WA6nma6m4aCMPAKNMiihYm1K8ztBtGdcWtx",
  "key23": "51AbEM7MfuctGr45P4WCpopfkrmpNMmSLRbkAYSiTAVP2XS3h5ubKoXKWGteF33sqaLuBJYpRcg1732ihREYpVGa",
  "key24": "2AtNbQFGESEzRBvJGbDVxYKzjxiyYEP34JzbBnB29zNnCLGm1tKwfZAFSt2CPQsG8RXBE5PWGEPy6y5RFWbprqw1",
  "key25": "2tSvYLsXXHC6ZEHCLir4pSYwzbACskpiCdf1XzybfTBHHDqRBMARJ5J38Bsk6YScHaNw1CDtEhyDDyAzT76guivx",
  "key26": "4WLpAhivXbunLiVATSU5cY7xakUTDmUpndB4oMbgxoZAJ7BLWVp3j7miQp4sr4sfJowFtEu3MJUqo4i6AeBLQANi",
  "key27": "y33VN34FF2axeDC53TBt61QtreV4gJN2rWxrn2prWnNEhRc6LGWmfH1FjMqCxwmBP99XeDrhRZgk1Vg6vdYbwUs",
  "key28": "5Wb88qhd7cxCivhkfs22zqGsG2nU7Pu4Ay5FAe6jsgkng6GNhJxTJedR49ak1ygegGtPiiNXirz6Axa2r9i2TpP2",
  "key29": "JYiYsyS8AqRjtbv5Sbjj4JxYdUqN2Ep9HWLkeunXmdhXj11xzyRMMF3hVG1Zc6zhXSk4ZwZ4NQUsB1o5mGcY1m7",
  "key30": "gxNYeQUo96bx4DaXDNrYdKkKphjiBBicxzcq4UinekQ97HnkNQ9h57sb6DXWCJALodGCw2F76xDzuFbHnUTmK86",
  "key31": "3RH5s72pmH1n27QNh8yRC8hd5CJLsXF7LkPhHc4b4jshb9S1PNGtHpX6EiY78ts3LzSozCUWNJmsUsnCxzYKjd5Q",
  "key32": "373C8rEgXKwy4D9fjpRF78ztt3Gd44XXcGtEPUscv9kcc6ppDhfHBWdwM24v8yLUUULJETHU5mivFLMJMALJKFr7",
  "key33": "4RqxNo2wqivWmHitrpggAPqfCc6fNSakdA5zgFyBgWxRAA8kydo47QGkhgsTDoD75HGEJd5X1JG9k1W2ybD7TisZ",
  "key34": "bTxvkbZzTkFdescNRaH4Qm6uj9kpvKgWQJSpBK4kKjMVs2SvUwroZfMXqpgAXGraideT9uys8ecMpVFXhf1MGmL",
  "key35": "41WZrdptt9hzA4YARB9JZBoHRetuqUbGYfqw1HPVP5Aq9owgnGh6UNBvr8LLQq5ggqEQkUtRmqh1cnQcbekVEhXM",
  "key36": "5tATdsinkfwGzCgr26hg11oVbrg9sPDrxeYxicWHu4qwHBb3nbDJ6nqmxy3zMtqCtNq9SkQH2jz4RvXDoEjgpVY4",
  "key37": "4TVhhrc4xxEYDwkPemBV3YLuZeRninHb4qyGsHBmF2byJPt4MvGqmAJpHvYJSZee4JQopjwDatvTEunWgauEsMBN",
  "key38": "3hyDEZvK3LG2yrHYFPuYxGW3j7Gp1rxoBdJHphhBmgZhnhtAkDofVyak9JTkLn55xys91gcXsE3p7EJNDPeziVUK"
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
