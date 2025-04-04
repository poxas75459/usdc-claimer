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
    "FGdXJBTdZcd126ZeHV5QAJCWhNW92KexhmkCa3hZ5vSyhBgtQLVSzYMCsAtGADPofjMBbjYzw7iFKK8vGSQ6iTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SAX6Xc2pSqhLkYGXHeG2pkuSFf6acqQnpF6eSRBKdZcpZ2HfSGeHajj7H3NYC6EV4oLi28JGFs9xUfdo9MeJaRa",
  "key1": "3KGLVHur8PJFkDKCHmxPTq2r4Q4dWRMp2BKFXvGfmkGCmDEvtNFh6gd2kYqRinvVuoj7SHmHiozSa1eSARmoMHHQ",
  "key2": "3b3f4uLbmBmezMbeDXca2vF8aCVb6taZonKseixWDggAUmFLWBdmXvjNK9JqovwznkERWYLEFcMYhawt7aURGcKD",
  "key3": "3BFdMk99Ns1RQMdVEoMj17WBFPkTgLi15eCBFVMJDWuohvcQGb8zBMwLvLZVCgEWfu4q9msDzxKRK9fSUM2Pbp34",
  "key4": "4BLQZSvgQ8yh6vBLRMWybs3s9N2JR5G5zvtBXZC4LVoC3hZrGFEDnfKzWUavw2dQFJgAXX3iGp76tqwNMJmcWrTY",
  "key5": "52D2Cfb67sWR9auNvbUZ4ywrEXhnSiXc8FLkA88F4NqCdaiiudFYrrGuxC9KoV8PRN8iY3YxWRTupJjionitjT5r",
  "key6": "5RdzMLbvTJxMWfpqQTaXaTTyGzWTtAABHeTeWAMcKh8RRDKFLqZdDMQ1T9Bd85eqDiYNfceLPkVCVTxbg1vyKAQ4",
  "key7": "4QpLzNpoeKucGdgZ1cPm1y3RAWKo9QqEGg7dxyQRpBMErbvA6ZAxUL2zpFdJVSF5y8LXj9ZSmcd69EcY2Hqc2rES",
  "key8": "5Y2vakWfJZzBwUz5kNGkTdYNnsv3FKMsPEVgfuq7bUwUudSRKHFzP5EDvxzwALz9H5Sqd2tpouawqUB2pZuF9FZf",
  "key9": "43iq7tPtMJ3Saj4Grj4L7xYDRHmFs2DWtZyULXV4X4wBKd2cdiZdrbS9bAjvUvCpRBaYDJ1XFTm7rnjjvrsBPMNA",
  "key10": "5v9jkHrA3C3cUat9tsAR23TtoiruWbFSjG1Ypqdt37UdsBfYq1iC88EbrWPhsoBrspxGTeAiNtmc3EQ783VGm7Ca",
  "key11": "5GJMP2rWm5srngASbRtFPDymnN2xqeDCrgAZXgeDuDzirDtpktWpHQynhqFANvVwppASXSpSwsJQJMAm1amRHDCy",
  "key12": "2PptgpRfTFUpfA6HJhiiGRaBtJVWWr5wepZ6yHJnBvZGdAxqH8GFcUPWm3JEBhYQrayPgo9cLXHWXuDiB22JG6E8",
  "key13": "4uu72NvCxgvpYAQH6oWXn9RGR2qsdEsvBi29WsFiTZ2zQpsZ72mTPrcdaWQ364QR3tZJk12kpsdr3N4WLft21Qvx",
  "key14": "5wrbsfg7tXKqgzSPYRhm8rUnnZZSAd7qTHaRrapssAHZqTYEhFwppGxoFg5xVjmaVUMe55RmbBVYviKSKsJLQ66M",
  "key15": "3xaeUk9WFDRK5K6XkL81acXvty3V9WqYqwTjpMVqjriqvnZZ3CVsNA8R42dC7y6SB1LEzFzbSJeFZaCjnKDK6qgW",
  "key16": "2RhtyJKh6tTaeEsVe5J9qtThWGnkkv85GNh121hU7GdNriYGuKn832tCL2i6N8BtHvTUAfE4GQeQa2DLCZ7t7k2r",
  "key17": "32xdbeh4mveMdvKAW2F9jr3mFMTEKfvc4C4vjEUS7iRaf8pC7FCQcTQP77TEVd4iaToyTFWeceTx9x3rGcW4NUnY",
  "key18": "2J5FjVb9VNBByfdGvHV33UW5sRA7ybA53PiC8MT6PiZP969pvYtmc8fQ4Xhc9QjyG2z8bope8nkMSLD6gxkGihrA",
  "key19": "4dYUAeZm1GRzxpaV9hTL4Ke67rspibdR8s3gskfNU2m87DvGXFKpQ8EixddwoaCMUP9tVBWk5TuaEgZcGobGHJAe",
  "key20": "2BpGkE7BNVtEGjwgEUYUL1vpzNPJP93osHSL88nMLNWRQAhf5PrigDQgrytdG81K4d957MWUocf4EZzvn1rKm384",
  "key21": "6276MSEtZmj6PmbT9aMmd2z1ddjgFzpJ6aVsa3R2PVz7YQrVJm9kv1iiQf4STiT4LfjDEifVsghCAZGZqSvJCLZB",
  "key22": "2U758wc36bkRtvMjLzUq8sRPqmmjggpeKcqjdBUdF4UcoENSTLXFz4kkHp8V2RSWWQpt67eEzAuKPwzuD6yL7n1Y",
  "key23": "4MxpYEAA7LeQpKxPShNFi1GbKvoeYb6P8womS66RapGhi37GXXGmtzzLi3tcEJrci6bpd5se5pxoFn396qwAw76P",
  "key24": "5p4pS72cJyk8A4vq939XEi4hEmm2CoTNWnrajNQeq5P72CbYuCdy8qrCe1FoaEy66zyzrvLNsDNwcwSAXpePoaXU",
  "key25": "4SjrzpL1XQtmY7jPqJgjoaAn8ptRE3T46aHVqEa4EsLQDJdh6QVaZdQAyrvvZ8DZypUCFdxtEBDTWwXZrFNZVrfz",
  "key26": "2AWHJPHtK2dtDjjmSAE1zk3iyxqLFtv4LtLjWSiFqcqu7R8eXjcu9G82FvTcJ1cpM8UctSYYJ83HUEfv2kJPxmPC",
  "key27": "X6CF9SREbDsk2kE3KXv33fitpqcZCneuXLfYZFGmsynxKoExzYKSnFCiLu28TypSiuLytPivFXzPVWkf6hwvdBd",
  "key28": "4pSYQ52UBvx9AJwTxSVhaZA6gq9VorHJryTogp9FZnXocAztGt9rw6cEeukjsCxnBRWFGicGLDffhY8w6q8iMRH7",
  "key29": "5g83T4a5Boc4ZixEWxFMdZtVcL9nRb8W4DQDF9Ve1tHHj9AUDQxNr58JoNKBHMetToQUBuEjbMK7RJ2L2m46KVo1",
  "key30": "2CeE85yrM1F4FoXLWZ1RhV3PEy18tovjcNQGEChMAoubtaUVfMPDyqaeo58MysqPSyHE8jybm96gxYqL1XqaYRsj",
  "key31": "KvLjcvrVsVv4B4MGcUwVU7on1YgMMipQUf1GF6xE3ASkrDdp9uu5ppD6kzhEdcZQSV2de5oHCptUowKvSMzdhSk",
  "key32": "4x79xFhZRUMSy6My6LUJyaNdeTwd7kPuVeX2eadG2aSwQEyxUoUipruDKH3a128JHaLSvGhPUN4TZPUGkxMgs24g",
  "key33": "rZFkFrENi5HcgdWrnzFtq79vsxafZ77uDaC9d1gWusrKhwMD1kcvBBCq6woNRYFfcATJaEdxUWPb9VNoJznNNBG",
  "key34": "2YY3aT5WMLFgnBRUTp9Ji176EjdK4bfHp4vCTP58vy6wRES3kSAnK484cMRdHMu5uUxk7iL4mqhhrXfWSxyzmvCE",
  "key35": "23a6cAudEfcmrzRG4AyjowGX9taKSecCvofrKQjqjSz2cra6fsTyxk3SmEemHmRuBU5QEwKpa2s9nP13NN7J1UA9",
  "key36": "5DUDNHhpQXsno5JZpUNZXXjqMDCdUusSkTizw1hkiEBcnje3CE1vpkXG5X8eA7HaPox7ZYGBpjTZq65q8bEBU4LR",
  "key37": "5wcCK4ZSprYANVFSgAp3TfZWo1yvAmyefAtVWEYpyW3vhKCFagoAe17sXLqhmxGQta2yk46KLbdkCQtd4rN6xyNg",
  "key38": "3mxi2VrRGByM7rbENrVSkTLyKFrwqtv12mogws747KTyDH2mZw97ZKhzZyXqGA2RJixFjPDmwJXYW4jFSDqp5XAi",
  "key39": "5jMsnjdx8Cex3GaCXBqFQArw8FBGsSLtcjgV7twx7mYtwWQ966UAEtFJqehQT7md93XFz2LPiN3N7BoQEfDPeMXT",
  "key40": "3VCDbLEWSXV4Z6UbPF2TU4nQZaqopthhswv8JKRwdeET3sS8i9fmiW66LcrDp957EZWHWCMQNp3XARPNAyLhR7GB",
  "key41": "TsLe3pCsbSrucGFkT69xezEtySBrmJfotaxGPmJfHm659BDmmXfJyrfz3Cd9sNnPinu4mgDmSYZeHn8W8dZTeAE",
  "key42": "4JUcjgoQD91aXQuWhgAR1mhF4vnfAXTf3VkY4Be2S9MiQLbrSkkDnr7fWwz6MWnDQjHgdWCMjte6aMtgLtjnZAQZ",
  "key43": "Hb4NNUAyWwqakNTDDTsot3AVsfHzdxzuzsw4T6hS9mZo9gHNXP4dwpfBW6AdU9mvvCnbFiVUGsTrA6GNM4Xqptu",
  "key44": "3UEbS7Yk9r6jqC9VL7BZwBQ5AaGkrLAJhr7mk3JZm4FTyzk5ZZdH8xTPEpEAnPTzC3wxuKtPdqesbzth57rasHuQ",
  "key45": "4rAqSsT3BvW91nLG4wWQdgfpfSyNGc6KTuzikn92YVccjqEQve2UAuE7ZaF6tqLKMfyKWJqpZefNBqnVEqi2hyoV",
  "key46": "5UG5bsmRo4DdCsK2cwEQE2HAaTRQpeUSX48RKyG51T3kRiX1PPEreNkXMLXT1qiCvY34iZ7KbUvxbqmTGDJwvjRh",
  "key47": "ZMGD6WpVkPUhCmBt71jNXJQZG24ZtLDYcdz4afcKpoCoNTw5oniZAWK7Rypa7k9CLBBh8DTZDDEnTvL4pxvsGiz",
  "key48": "5U5UzsDjaed2tyx6NQY3hCUMwgtwsChRXeWiVaDAJj37wHe3ZrJtw68cd6qyDTbEvGw4ZsTF5qMSh1PPvguCRcuF"
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
