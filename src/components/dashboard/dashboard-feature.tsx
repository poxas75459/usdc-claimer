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
    "3kRfSpdeFPFq2NA46SfM3ZtmWbMHzoKuakMv5UgFQ7LB9D6SSkmZSUe5ScavEAVevqQ55arbrw7MrQrDH3AzZ7de"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DbUqZj19frFGf1kdcn6xX85fBCVCMgpY5BMzGJzgu2ap1n3gFqQUgk6oyzqjzprCq2ej4iNrUKUMmocpjCJaPrZ",
  "key1": "3XV5Y5AdNuMv9RTEP7MYKiBpziVz2p8UCdvufEjUSU5L7qv3mxwA464z4KbManxWqm6jqiuxE7GCDhisC1gWCi5n",
  "key2": "4cWiumi3sH4yve2a1X9PMEho6TA2Cu88tn35hwuSxEzeZ2kCtMRgB6qhB7G2LrD6HqRqG5RG1T3mhrnjdAvz5cuY",
  "key3": "3EuZNqzc52oizgfWedZ9siViWxi5mRvRH6oS7o2udvC1W3XxxnRjYVAY1nfHth1kHRGvw9rA1xmizL5kPhcF8C7D",
  "key4": "5v8W53dM6aKubqtxco71zHZGTKvb3d17xaaNzAyovBjDHhFc9RapRi7WH4dHmENgEVnGzHEoWwi9noCFWi9iucwH",
  "key5": "2jyhjZK87cT13ztznssKdZCp8rDs2MSBmqABUXsekCxq9RNeRS1kwfitXccxiQfNZm957xNbsGfZxX9Lsxiivt9H",
  "key6": "4iaQkzcV49vbgUs3N7z68bQNskoF1Yb3s18BrJKnaFdsLtrt31HgczTcfJ8iSeDZ7fVrD4RoY8z1nzWzqaia1d29",
  "key7": "o7votkYBCVYY5S7je7mPuLxhNTQsEc7ndrb5PFigqpcrY92oBpp5YJGzTjZkHtMLyQsS2p27L7TQ3199J8rcWTP",
  "key8": "5HDZCHFuvJwDUnX4t9HMqsCekUuRF5qk7jQW7muucGCkZ8SvDRVYb82f6VXRW938K3EtqBtBuj5o8xDEUkuM91Qi",
  "key9": "3F6T3a1NuAmHLjtV433oUwN4CXRLzS5wAmqZB5A7yJgAjfkbY2cVxk7yrvp2ArBL7wcn9gwesLbSFAWyugKzMkPV",
  "key10": "52s3vTuV1kQfRcob2asZnQyjgTWutg9EiSLhqXECDS7GnEVGEvf1KiieTtR35LoCnvBJYnpUAtNeTpc4fEFMCumE",
  "key11": "4cjymFDW9GmHMwnDC8aNgUXqoiMvbkiVt1whUsYa7GNrwhrg5efZ6wAKnD633DBczsHgrLZkyn1h4ZhEKLbQmp91",
  "key12": "4g8g1ygqhspnM1LsFN23TuqdUxHt52vEzoVCbNWDyQ5FNAdLhLvCwQ56ZwobEBT4CaGUxA1BP7JJzbNNGdXZG8LY",
  "key13": "2BGcxXejPe4Em7wooSZ8X3HQRS4M6gnixn3YNMnTSq7u5qUyeCnDU2FFFJDfwZtFcKaESR1p2ZR3dTHpVWaS1ypc",
  "key14": "55rFxRWhTy9A3JvAjNrhedbC9hw6LzBNWwHcJYNTU2AvBAfFvY7pHtr4L8xKUDwqoFcwef8P82WcnPorzQ3o2MuT",
  "key15": "5rLjTNbFZwA8GHAmw672UVEaKuM1ecfnGo87UFesfgXaeThsUsAuG2pCFiRwReYsPrKaD6UaqskjwSRjL2MWFhwC",
  "key16": "bXnbHaNJHgMUAH1NqeMsob4772DMwgFDSMzNALfxH2JNBozdiScf5sWWx259GPFUfuVZcTA1XExeKHAmDQBiHvy",
  "key17": "3oXGKuohLaCZGiBFFpTi5FRggJN5GDAXJvwcCnbCdLqdHEuTnv5urzNQsViTZMniPaEJFGCto7shkiAL6NpVS2Uq",
  "key18": "5Qrr6A4nAqPL1ozX6bJXamKwEE4SDipbbaYoUe49o3xqeVpcroWD5gZ2wDQYSY6UyATJMphDhtHqgEB3cX6yXe16",
  "key19": "29nftajWMcXo3ESHFFUd9CFnXcAcHLR9JnJNJgqBnLxKMQyQ5Yi8ihkb9ymTooacNxsTZNtWkuQWxLYYLQmP1PVK",
  "key20": "uCBGkjuEWEZUWYX14hskJ7sFu13w1HVfu22bMZySNgtkCXHbe6RxQVHthSkQKbyJc9f1LA7J5tdAtLwGSWDU6Sd",
  "key21": "3272ihxxJA2ps6dDHvr6eJhGM7tBRDkustKxiBkE6q389fQymtma7am2jayaiWva5aWfMNKikiBM1GAJKfw6nmFe",
  "key22": "5KeqQ1pt9yj9QfFPvRY67cJvfAz4ewqj9Qk568j7Ce8pFavG9qE5ReMy4MapbBZGA2FVtaaepfaEtReduXSKFKBh",
  "key23": "4sfmxfn634Wc3nufEF7DY5EVy1UN5iiGFwww4iCxTqQXBoGu2iHAh78dNKir9nyky9mHPCMXur8eHLimKuJij3bg",
  "key24": "47GcRZSXmtFP9Pn7oHJa5K7KTP5fBdu5MWnjq18Ga8x3hnr66g2cVePqYbqqySk8mFhZ1VW6ut8qLUPRYRys4udo",
  "key25": "4ZQMtqVbeKPEQepKeHUUc9gkjox6XsLx3KCiZaCnBT9mooZbUe4ZoJ9nQtRkL8vW5mtiQcJFqFVPcFGsseqPH4Vj",
  "key26": "2Xk3kHZBTWZd24jT5Stncqi5Dw1QtCW7gzkrjoiuTfiu2mi3n3robmLorZV2jagnMaN8h8Fc4jzwVvatP3yTDv53",
  "key27": "2HNLgGTCAERwzkdXT32RKu2apJSLoWYBLgiNZX8SqKLSC7UsFnQwn1ZrG2YATBBzrJqoTcVhauX1Cr3daULvsbBn",
  "key28": "LQoSAHRNmKUAQJVfYbQ9Wyy233CfSJETsqFgp7KWg61oxnuRY4Dcc7YSj54afw52CNrxW7TVw5fk3iEeDZpvxJL",
  "key29": "2AuKUsnQT6cJ13kFYJgLKPmfZ9ecLkrwkakhEmenSqSDgsNt9iWFRLCbse4uNyhH9kd9H8qNpB5bRg41vC424jWd",
  "key30": "4LzsoSyTSiefwBD6Vf5ADoHEZPDsueSZR182YUQ5vu1NpJfdd37hoHsEx7nWwzMTbTCtzPbi9yWc1VfGh49HXWnr",
  "key31": "62Jux5cZS7DhxK5XViDdMjocj5CBxrALNFgs4uaK7WJcvmBhQQNoDVxbfZbLrEFPPfPnwWzgin6GYpqNEEKJW6GV",
  "key32": "3cARnGatxdMsceG2Kio4iWt39MJJHdshteBaRj3EtZiSAdKgNt6CAxgDkCbNWa8mkfn2r9dsm8kq7dG1y5z1DfVe",
  "key33": "4dnP9gvYyhoFUbXyNpANcV6t28q4Z1datSVSwV9dNDCLCYVeTBi4r7atCKMju7XR5TqdAwWCEEsKtj5Ps1zXng1y",
  "key34": "4k991K7jFvdEvAErKgip6GwNz5jJaP72s9jVAgdM52BCAX1PjoFB9MVvVJ7D9BzbPrcnBurgfBaRiFnpRXFqqC47",
  "key35": "LK2dBG9ahEFwL6gea76wr3Ha4g1Se2JCLsTGKUHeYwgnZpnEuDkMbQYsuiVbGUCPP8c7g2arFp5xPKBatp3FXGD",
  "key36": "31SGsZLe5p5WpwLNLN4Qunzq5mMMbgVuG3zNjvqisBNF27Suk84U366ajQ1GhX65YmGnUD2Q8AFTUidMLTne6ZQ4",
  "key37": "5D17vUJ3tEb4snM8hao7gstRuycyLzaFSDP9tJLPXDwGw4BRRvbanEsxrvyvKkS7T9tWumZL7P2D9mwN8jKmvqzi",
  "key38": "5huL8EbvVCYDVPK75MSj3SRipnKXsBcxhQ5CV88BgA7sdLYE37o2rByFzyDRdCE9pKQ1VDfknACeqNz5y3Wb7AJ4"
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
