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
    "34i1GcyJtwWBZb6oKWV4MS4d7pd252WM2Nng4eUwEFpfkbY3utL61UVv4e1MtdigoSTVztUobyMfTnqZuv4UjT45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qTyskmD2MMcyTBR7BcAe7X5DSJoj6Kj55HDYNXrjSXcK3tqaHqLCm7RSfkm4GGLTgqrb3qzDEx7t3XNMYTMegiV",
  "key1": "4aXBc7LVhdZvTd2S5gDbYj5kjZef5AXxE9subkaRs93J7b4PLSnn3HBWp42HxvsKQ96vE7qPqnWsC5UaFQ8PWhiA",
  "key2": "4pjsNsUxbxugUb3P4XLPc5XuNTcjXGPxxA6WvDTx9Na8ZDjcZ57rEg9WyZxi8SK2EvYVra8b8NbTKFrWvgk2mfum",
  "key3": "3eJW7SkfuwWze6ci5xwiR9XeafJHBznBmyMsUYw3XekiXfBaZbrXCha9gZpxVikK5B3S6imMwe5JfgpD3DevQwUH",
  "key4": "ciPxhCNgVoK6fvz4TpXAeMJaDxNXAp3Pv7ggEgo7vK1HdoyiRkKFBdpV1Y5fQRL4Gdu53TXrCyZ51UVx1AkiZyu",
  "key5": "5nZ51ikQCCunuD8Tsy8f873h8ELnucXTZVMCRuW5wK11Q3tSAYDnPHABVB6CJezw7VvdRcax2VkD9joPJmcX86YN",
  "key6": "42pXZciGn3fZe49oNFaPNNJyiLGajxmW94PsGL9quyjsSKhPhCjojqamH2XGpoWUc5umRkkTQP1aHdKpXaiGSiVa",
  "key7": "9JpZZTdUzekUure89jooBU9yoeCbqhfjFWs4oUjspADMgGLGA9vSGxMQnVFRbkzqCXJoU5i3SUpdpWi3Jdkqxfi",
  "key8": "5cWM8xzNMvyzLW9oS4AYxSuhn4H4BPBznUPtUY5pdbxxTpQmpY7LQn6qDbY87t9YjCXv4GG4K7UUdCZbEB5vtDjx",
  "key9": "25Nwjxns8gVt9KCugNcBakvsPzeznW39m6N2ErCXVFatD7Xiv1tKHUaJMDWKhBqKNCzWDQy9V8xohxd8LkNS3E4p",
  "key10": "4p5Q5CmdzNWyqWAoAjSXzjoFGEEpHQ9ZPbEoK5z9Y9aEqn37ZDnUnwwnmWkscvJdbHPW2LrJNPdgaCJE4KoQdA62",
  "key11": "2fcSoUod54cFnmuJ5ERwkWfUQmvBinwv6mu9f8y6EbUmosGJoAdSW2Kn25YNLNYtGaQpFkJRSx8WtrcxHSHHRR5v",
  "key12": "E92avkqeVpXKV8YA7hpmQ1iRuZeDBMCEFtKKqaoNR2jxqJRLqEb6BNXKpN7bPQu4biQbMGy27i8gPXjqkioWUdr",
  "key13": "5TRTNc1DsSN1kshVg9hDHbmTcnBnntsLZCaJB6yyhCHvCQ93zNqmRoxzrADF6iTLe4oSjHghcHVP3uMAYCe1GQmv",
  "key14": "5Pcb5h1qBsT7exnie3R1H35LRKpvs1UkypBhdvfCHfbLa3CrFVJN18iRBdUi6B4QMdEV563wNDxX3vZWUyGUP1T1",
  "key15": "zveqRCJaHzwzoDqAt7wUTbVZZ6o4ZugiVxAiEpQ5hG44JB93rnmyoeVDFdvLr66wot6TrgJcyfqfxzs2fYh9gkw",
  "key16": "5MdT5hFuMVuR2NUi1tQERv95WyKeUzwXTu4rMf1DPmCmtnPUFMXrrRJxP76n7NAzFMjEznykv8TtrZBrcmpsrZKG",
  "key17": "4JwBHoWzRu1E14jnZ7iG4X5N9XU3PcaAcytmCW3XcWNTsmoJVmrwuxjhEUGLRrc7ajg8H9CxvVWRw9E3CU2orLtE",
  "key18": "yycoUcB9s2fczerJX2qATvGu2sRnyqg6a9V4MHdDATEuqSGBZ9fs1q6MmCYJQD8BKx8xEp7QhcSRYkJ6df4Z9Fb",
  "key19": "tRavPrQWCJrnwrn9yXYwCxGd62qB39gjHaPCDHK5JxxqxpCaCbSZC7KVFZHvCqc8EwHoP24biDrT2Y9yraExNbb",
  "key20": "5XbaqMpxxZ9aue3ieE2Qzq98VMaFdJyXXfc2BR7giyetiSkZcSWBRdZUfjrjPXDPiW4rDDdj6dp6bTXH5GS5PfpG",
  "key21": "2Wb7gCWQwbHsyJ1jshPCtanmTADz2YPdaCVA1XDVkAzHtWXvk2zsg8GTJhHw6Vchm6izP8CjdPwEqb6RpAK71SQ6",
  "key22": "94SQ1JgxpF7yutCtmpeSG9yGjjva5TcBeFReTC9foU2VQ8TTbVFYRXZ6m53QGSkd6XFyN4XoL3YkeZff9kbSdrT",
  "key23": "2fXSAtsd4aQracqHKNG7TGn7rKzRRuiLgjagEkRU4keJHJxBGkwqydVyoXHTHNPjoSNvXLgJdo4XmAmNzoroPoqm",
  "key24": "2pFXgdhfxgNyQg78wkY1C7VJXnvp62xAQZFRmuQGiaEGKnBitPVtjR87U5hLHLNhZLt6Xt6DjpfaBdky5Nb1mxcW",
  "key25": "2VSwMXmbHgMDACBwB1WpF1pEsmYcydr9wuqbNi5nc13wSakj9SwojjNjuUc8Sb4YTm9KeR1NRbFueK17cT3aMLhx",
  "key26": "peMkVEyGBuZNyGhhoULdojiTB84ruXZCkD5fmrgrKnFNq9upcnN55PjKQT66uLn3vXubXoBWQtfBHJuXkcxgazr",
  "key27": "4Pfhic3tpP4eabPA2hbcUATg6a1zx9nDyaHt9qhw1ZBWV359ZMcArtg7VeHv6SCfJ745wAMu1ZUEFmsgeBZGnnJu",
  "key28": "ZGtjCmziX953mibW7v5D69QfH4tjyjThUFwn11jPjYWLxi2Ps8PDoUajjQrTafSdjzjTN2k6Bj5oBnpNHHDSTUB",
  "key29": "E5QSocQE99qQmrMPnDiYHRSjv9GagYgNabBWAJRPoM7HbwnLeyFXda9rTMHJZxNm5y7zGu6yFeowq1z15yg1ARf",
  "key30": "2Qcum7EE5eAT81YEitvy7uNAx3qDFM8yEuNfNKJPxksdaj4zDs3oacLKsMVJwDc3LGxTBVkfXSEKTS7tu22GfgHq",
  "key31": "3GXeSkU6aAg6RVgEyQMFgbpDy4rJNznah5GeDthokFFPip2eQKffhPgDv6Z9KyP9tJ2uacEUXSxMHerRgJ9CVFeM",
  "key32": "5L9eQtdwihzYz2bJ5JBBr1XSycfqjjybbGPgW3L8WBy7DuFh6mk13sCRepEPgZNN4uZaJaa5KcG5McE4ahAEhJhH",
  "key33": "5xne5TG6RKPXzqKxw3XBFjE5m1WvPt9pHvmG2GCrNePBU8wFT9kJdRGpLWVHvnb5dqxtTyLUpCVgAoikYYezNdDE",
  "key34": "4E6EcK728wRapv6XF6yiHBi7w8nZYRk2BDGTk4kqu6ab6jhogG3rkFEMXrW5Uano3mDtwHmik85q7dMk25eMAfBX",
  "key35": "4ZbS4SL8c1kYm3vpUQv6Kwcdcpody9knkEjCxixhEbWUnbqToiGVKiT9i7KSKs1Xy6UXftGPkoFJBXpZxqwbNsLU",
  "key36": "5wUq46BygpEd7hmgKeN5PNkUhGHf4GNtUPBCKEaBzHsLuyDjBGKSgGRyxT9pinps5vzig9zeGdgUfSj2DsMxbnAX",
  "key37": "4GKdW6qS1LcWPiF7ydQquea45CNAEWh7mdGeLxm7QmyA2TsRsePZQQiPhEGz2QR6pB2yhJ1yC2bnv66RJDwnGjak",
  "key38": "Ai8TpLFcQPbQjo6hHHXzuyVHiMnEppcUvxKHUiSkuDzW3QPXmsZrVKf9NbZJUBAb8L4dhWUpQk6B83AAwuzRJUx",
  "key39": "5bhppNXUjKyhFG8gVMxUDpsLtgFVMTpVujtsPrqsL2Bqp7tuCiwAncC6pwhB1zec4LYnE1AWdXhmjkqcLMEmu4fG"
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
