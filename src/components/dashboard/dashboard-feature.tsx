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
    "3qUj46nY7PFMhTusePDTP22GadognJtth8GuQeZ7NCMx4VqJ4BSjj9k9gbkxW9qRMmmjDcWFQjLPiGi1rAWCVTcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yj4HXRX9VdSaZrcNFUBAT5NB9k1To1SNLjhzjJLJhLi7xV7ew2tXQ31Zx6FJ2TdqXb6dFETZ9t9KJVP4LhgeQjF",
  "key1": "5npibL3zzZEvQwBiF1qqPz2sCRyrfeqc2T7rxCuDz6ium31WwniTEfCE6rAxXR369Eni4dyLTkyXKnbbbFqtK4mV",
  "key2": "2Xs9hD5fHp7mmXj1NeVPGKEdyxwpKQba6RvPMLgZQBxTW9vTXbMwafpnmuw3nxtPZbWV8ouNcfFoFDSfHRtxxgy7",
  "key3": "Mo2C8rwYanzVXqUyhtEUwQMs6UC1hvNXJwTS33rTfDC9LtxrP64vMoArdLZtfFH7wx5JEpVnLdp7ALba9xSxXLv",
  "key4": "4tVDEc9U5PdfU1DjP1vfN3kEX6bvAyZ4q8TySTvoF76BveczHViDcnAj8XcwndyedCWhv26TsiqpDcUqDfcPq94H",
  "key5": "52kxzAW2cmwVBhoyvhec3t4yjKB7gT5UafjRqypymUaZf4PScqPohmPVgshhr9PMgGK8UbjjYJqBZk4yTxXb946C",
  "key6": "1SoCZv5mz3eKGGk7c1fTca5LUVyu8GNCvbyYjR6mzHa6bJA66UUHQMcVDTuBD19z4eC8gHhqG39BUpo4cidpMAw",
  "key7": "4yXDKU2Sk2EkJwZgbogsX9Apde7mQf97oDijRVAGTUYLfKZHtf3h6RfTZGM1xDab4H675PPenvRkdjtL9ByGkK35",
  "key8": "2rTbcy8wxDTyMRBXbG7vQQGb8jNwWqP2S6faK5HFfrZze1DQW163XGEb7pSHBN7PsPLgnLfa2zKGye31RxpaA1WJ",
  "key9": "2fA4atyYu396tG6Ubcprh22XXViJ3mhkoWLoroxS3MTNqnpeuDJfQJ4jh8ADkfauyhHC92JN5oaHMbKAphkMcX7b",
  "key10": "3eRmUZWi5XCuTDBiMp79qiCeUrpMQFhjxDaPxMMuo1wcubEAxCt1tUS6HRMyBiXkAj1iYVgWbE6J8Uc76gr69GSc",
  "key11": "5FVVbzNHdyi78nHvK6EJuoo3EAvsCKPxkqnPnQwofbCW75yXbEgyszzGCCqTZAD1jqh2SEN4mNkugr5DUU7qnrka",
  "key12": "2ZxTCYuL3psZmfpSkymtybTbp4WNMeg5kZ91oD9K5XWAmrZukHTptz1YNAya1G5dSYSzBD6S5H2CCnj4oacZzfAS",
  "key13": "34kN1phq6cCrhjWDZxBxoRxUSpd78BXE6De5i4MpBppMEzkUB6pM1zRKa5aQkK7NHQDG1k93AsuF2gjjHZLoXhbi",
  "key14": "dcKAYCovgyeiPShy3JmXHXzTFK3HaodW1WascMPrzw29u7Md51M677rZxFqYik2qULZJe5xPzT7LpABwv2nVMQ9",
  "key15": "QHwsJBvgDrbfegB1rZQ4q2drDkwc2biXwP1Ryx8t9hc2mUmGSfefPhS4wQKts73ewhgaLT4o7Yda5oa3XGHhwP7",
  "key16": "573PcsswkT78LecZfwzQNefPM9vfTjoR4fqYhJ2aB3zG57hkDjhfhrpfYzqW2B17XiSpSKzP9MSPqNPYat4Vjhtk",
  "key17": "4noNbGZ31z6v8zmJBw2bcsFyUVTfWUj6rdZpzp7rXDdbPeMtY7bTw3kAAWr5Yudk2P1V87WSoCymWdCPKDSuBzms",
  "key18": "5untjEdeCcQTuQ39ZRPPVjei395UbmCVD6sVnftDgPpsmESwQ3bcDUygooVSaJM19HS6ipuE1Nxk2gyib6P41fKZ",
  "key19": "34gMSKdb5S6RF4PnfooVew5Lq3iFsKWs77Ltd2p8Mt2fpAAAamg48cF6vd9XgGEPD4cp3aWbNk8oB4Ls5R5MCYTN",
  "key20": "xvSXaXiDZf5UR578eYLmMepcsQS776s3m9BNrEQg2vUKiAtYDjXqRyn7N6zfQfKWswEzaQPm2KuxxWMPpxSB1yU",
  "key21": "uREmxyE9t37HwfYRc4v8bxdgX7URehQK75XQCD86Txrd38CKYW1rGpiR3JFLG1Uz1XyKBBbGtJpkCzqoP2pjotd",
  "key22": "631hgRbAQtDcGyFkTZp8CEk9wE3c4BM9zfoQAbjvmnggxHsqvuJ9dbU7u8kTntSnEhcKhF2JdywnFsMrQymxE4Tn",
  "key23": "4GoQnF1FtCps5UF34v8smwSNgXSQSB7wDh5pkTyYXkg8R6wYpvEd6Tz6mKzasQNU2kbZxzfcF2m29iHTHNoyqLuH",
  "key24": "2eMWxr2ajraSgLePXiTWiFP8pTknAnHgMuVcdPJcn7rz2ivgaYk2XFxRaWyUA4v1r3MFTjpY9k6br4FREtpcDtQ8",
  "key25": "5TRRjwjywSyMTwowS6nn1qmGULz2sM9pw1JmQfjT1XGFCMwbKq7Zgd8wseSq4Q1L3RsgnsjqbY9sNAi4Yrx6ZMsm",
  "key26": "5pUrZsW1MyQ1Mrq95zZ7trfKhYCLs2ftiYSxP59283TtQ69Nqu5wAZhdnmt7KUiDYZA5XMWXRipiPZdpdgfu4pW5",
  "key27": "5zDREfx5Sm3d8p7ixVgP77SByV1J3XfmoF91Zaw6oFycpwECn34HwRPPbptYYzTkJZWFVE3MmXCwQowdziKnkb5q",
  "key28": "5KRTuoh6Cnnb92GKpimkQ8ShinNUfZ46e2HdgDQzT4vQwuRx7G1CpUa1VGxkofo7heCMzTVVmWoirckkHwavz5YL",
  "key29": "4iV79sYbGbTc78KptecSBy7dDGfEVZTWoodU2GrRY3nwcq2EsdMJFuCNzva39pCTTW1eBLG86gfRktUAhuicTSK3",
  "key30": "4UuCLLqVBvVFzuBk7mYJwTkeKgf7DEpb3htDAQ17nJ3XntDtTk9WhEh6zZZEdKNeDpkXpz53mH6i34XYR4T6tRfk",
  "key31": "3pwpRHKHqC3HL4rcboniGGtdFLt4R8VxmL335YtXKhhvnshuTve9ysmP4uXxTGmBVN2oPoGrzfaWVohXRHH4hv4c"
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
