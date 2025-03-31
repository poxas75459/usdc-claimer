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
    "4Jj1CfHun6GwpyspqnWHMDMVbhrh66tSMaLPi4rStEs2CkV9YrjkB8Rgqxyf4cgyQvP7qxBi7afNzRWHTbiGirke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a5gd2SRkaFZD3M3Sxbus1xqV4Uwz2SfbczMhtYy2MhBRxxp85ZHVdfjKaRqBPbTxou9E3uEFASJwUFEiABjoQQj",
  "key1": "3QGYvD8g24JmMvV3LRQJ2tSY7xdm9JMQ86N1kX2bh2fFVHtfiobQf4tjogQt4NXrE2qj1DnGQiziS2pB3TDWjknn",
  "key2": "4ySJgm1omSchigGek4pUmpbUzGZRV71W6CXiYVtxFYLGbUw5N3KC2jfc8aktJvMqSTi3UFdKJ2bRsmNFqBsZdBqe",
  "key3": "fQmRcZ7QHHgPPBAbWbcjQcLt64yr33PnERVH5tnxDixoGBw8k4tSQGLLuYS5LEPMWnCJBA9MHroK442NUGeZRfg",
  "key4": "4cY2v7CBx2FuDdCEsyJzhkCdkT4kEHf5t2cBwzje4XmFZbn9wbKutodAUGNZqbbG8DPFZPoCRpC5SL5KpsUxAf6d",
  "key5": "gBueR644W5NfTiAG3ED4T3UgKpV9FMbC5tnb1cQqsoVcit1AwDKU1XBLvPbkBPeYD9vPx7CjDNiheVpwMNfnFTk",
  "key6": "4Kfj85R7XJcPbGt3n1NNjzHsTfLRnc23MyE2EqzjFcDHFY67LEuuu9Z69Tt7JQEh8YVtNSWd8vti4KfXAaR9YSyj",
  "key7": "61Em2nGY4xdVYy6nxpxF4KdYjhnTRPsxUDmreH9APSZFe7hpU9xCdy3E8GavGh1PdyaR11NNwTm9n6sJLyhyLfo5",
  "key8": "5t9D79muWkWHqp9vcZuZ3zYF3m3CQs1JpMxcAaKNLgDvYKQeU8iXDnirq5HhPzLUEgror1Xh85PxM1ENLZb7dQR4",
  "key9": "TttoG1TAFxbysvTGYEHfe8AfKphXHQDVV2kwoJuBCiXewBp2nf2wPNKvGWrV1zfHUthQ12HHGHRCDHT2TFRgTii",
  "key10": "4baWthgznCrk2Yo7D1FzrLHM4XYKyz7ekHFsVYZkoXh9gZAwfvKxkUf9iuiuGrAXaJ2zdzvFqwDnDQdzpJUEjeD3",
  "key11": "DLcMv8HsnKd55yhGUAd3HmMWvJdt3dfqhYx161aq319L1VqRkGT2s5BTuBUtz7616FpTp7C6DWZvE9SvvNmKoYa",
  "key12": "4CVPXPdPxrXqUBoq7hqJMzu3rYgaPpz23yjjUDuNPG3NAkayk2opaL75XZ3KayT5GZkXbFGwHTu9ioLinZSuHLPx",
  "key13": "zbNnSqRJk27nSzshcRmfS5hycaMza5vsPE9em5hCFJsL59c7KHZqUxBTRhL5VDBUn8NKSWQqupfRqyBneQ7sdTW",
  "key14": "4p8bQx2fo9Nr6GhcyszWh4uuWT8FPJqzNpjeg5ThmutBqhKGS4WC6rjTadCBa8TdV3DDcP4RPAUN6ieHCJzXrzig",
  "key15": "59qK47rMFsbuF98y3DuPLbPyzoDwczdmX5mktEu2TfBeMH8YuSjPgAKHWb5BeASD53UAGWzpPpV2yPVvX9fBuFqK",
  "key16": "isvZNr3NPJompsbhbK9vwgG9DusMVuP5X8kNBgfT3TB5n78csfUb8wya7gP3sxSREAKSoxehrZB8QQhdf9QkVnF",
  "key17": "3Vw6eGU6oGYVugkyJkkNaekMD3kP8fbLHg33H3P2FEx8fX4wyEHjsE4wWwrZRhWeSaarC8Ns85EtLTMnXAKJrNg1",
  "key18": "gHJBoprDSLJZ5LCYB7mEcKZeuDQjk955zspepe3Za5CyJy2gueSjEU4CKFSHdNGPtdC62KgaSbwFyvkWttCS1Fr",
  "key19": "htqZwDDArfsCurtBRRXCfYE43yexLCc9QKqVkWr8kMn7dcJk3LLxDbo1CdZCkkFRjpLs2TBuSFopzE21wZ2UA6N",
  "key20": "hLssmgjeVMwniLqv4bpfswKWo9uQSbFsg9rRz9esBU1KZmgmnMv1dE9FdaMirMMjRucifscfnDuXKon69hqDCxF",
  "key21": "2gDNvHaKP7auaau8pFgH8Zz9RGniurNnYa5r4A82J3WenrRLXHfr6BzmBgPhSfgfxuTfM52aHvaETtk2xNV95dpJ",
  "key22": "3ZEoBjVdBdNscMaoC6FijyCmgUrXDn3SxX7LykeHJXrMRkVUnCqaSggU5VC6H7i6FTGtKKa1h31Min8TCtLiyK4E",
  "key23": "SbqESfeFF3iT512wc6J8KbGBmJB8qTMTYfHLDwtEWuepMr41KMd5wd2sC9dzAUYty4KN4Zx2ecr5twGFKxqNWSp",
  "key24": "3nN4DUu7n3RixoLtJUkhe1REDupWaksJvVbRpKc5sGx7wC6WFanh1SSJxPhgF31VJ5R5wa4LAfbFnyPJSXjLGZpX",
  "key25": "4AhA4D7sMWb1nCQaLLpV98XPKeP9igWHcxJsEaV8TUQd66wndbqKPr1bkh3LRWobHv5519UbAnztx6WWGPX9Lvkz",
  "key26": "2CU4zc1fhmZMNymuDL8yVGocwaF9Yg7UwNNepA8ipW6Gi93HqfmW4dV9jHBtNwMdAggj8uDBsB95nhucX7zzqKxX",
  "key27": "3BQRB1W36xvGd1BoocimazSkXXgvjNNGYMYmKThJUbNDwzTVaKR25pRoZtkx7wERLtyYsuxTCJZgyXUrLT81oFyV",
  "key28": "3D1yc7pLkPTBzGjE5vf26qgvQGDKKKhpJYuurN4Cs5CtRsQfWocaV5EVttvp46Nhn2RxpmnJ3tS9y4zLEkBKPPrV",
  "key29": "5ZQwnhxpzhAWs7ZccQJA6ihNejRnJ2omECs89UhEbeoHfPrWrmzN5EeXLanromFBuAHYpR6DbTQCh5aTFed2mY9o",
  "key30": "5gooYcWp4ac3k8M63LNYgb8TNuMjfCcNtMs8zWeZejHTJxE9eNVptj572jx6E7bXckX1uTDbPnHcX8j7Vcm7ewCN",
  "key31": "2Ny7cMswCreBk8TT1UpfFCZpF6dYR2zTADUcW5frFqZCjsgrx3eUXSeKULtvwtNP9HPzzwz2PYuyvV8Ekt6xqTyd",
  "key32": "3XVE4bEW8V17pHSBvPyUTBGZG58rhJhjVr5Hud83ZerM6sFZ4TdaB9zJPvU6hGDCeDa5d3ZttvSzxGB5TEC7nnxs",
  "key33": "EVh4s4KqgHLQyyeDYuxbkc793kH5cjt4e5RdYyd5gn9qcN6peHCx6wd2SKnz9ce3Rqkd5QmwCq4urHQHfcMcgDL",
  "key34": "26QSYL2agpZbEfxpUH3o2cW2HcJW5MoXd9BRU8s2vYUMEAdaRcST5nx9zF1JLDm7yPdqXCUr9YgkJmgf8t1Aj7Pm",
  "key35": "C9pnQ4Jtqct4sBtAvVEsAXWwn7YnDYVAy37KRin6ZtngBN5d8oUeL6UGDoWFxsKPifbrMu2Tpm6vEZVh1HUMmcT",
  "key36": "4mwR5tBBrwSkN6TF6PL2Fk1nxF6RG73saDHy8GFMBULzzkaZYt4YJ9vpnZ3CeLTbcEtN7XdXGVjAz7mLna8i9Eye",
  "key37": "4jdVjG9MT28QsFody3JFCPzKmXk2SULiS9USPnZnUccNcKCLUaPTSbLcSaRV2GHf6vzHbW9FVERSUAoBMvYbou6D",
  "key38": "ii9QBpjEbaXrFLZRSfrga14RrQbTziESPnHfEYTcHi7vpT3WP5QXPX3UYFiANY2bzg2ispX1pSFzHq1E7Gb4HAc",
  "key39": "2pum99evv4KvANSGyuSTDXNo7m5uQCjTegHHkKyyN2dPZ8zz4upbXzSmb6eLNcGYNdyZhcHF5EXVV6JFqLffgKZM",
  "key40": "5qK55xgfwyUBt8zPwZjrfsspCtvgNcNSntabuwHcddHsevDkjgZ2A13T2WUBU2JP8hN9MPgi4jHgemYywNFvr92F",
  "key41": "2NJcvYgn1pzPK32o1b7m8euA1bLB6L8oHXen6yCYGuU6YwRYE8CTGEcW4uNMjZGhqnTGwgz6My1m3ffaeYjLbYFs",
  "key42": "4SRpoQovkcRZk4WXYnA7i9cXMtj9qWokRE1awvuJ9zDh9ZsTbpfcxiJn2DAJj422GnMKW3rmhCSqiTmWa5uWgLko",
  "key43": "3GSLz3quDJuNwQA1GCTC1bC93zcQP7351r3hdVybfWA4VBzuAxYLXKyiuo2HDiJkJm8k6LYyLJhCXEMmzx7SUz5X",
  "key44": "62YTTSFuGdKtpAiwRtK564RZEvyLVstPAYqgfhiyU3nNVesw18GYcXLDYFgXX7rgLt5LFi9StTZS6j9CNK5w1DdG",
  "key45": "28RSjU3U3pgS4TDRjmA2vkaw43cKCUcAzUMpHJgYk6fPAHV78CSTwLSjH5SsLzvAZh5gNnjWUuVSVXgjsZDrrao2",
  "key46": "R1om8TvEfCKckHgZ4WadxEnf1QQfiZuhxQL21AF9fdVJgx62M1tbeSfh1cW8QWnBUSZzFq6hLVzrzdSBhPguxG1",
  "key47": "5LZMsXzvQYSqh49g1HsuCBwut9Y4DRgRNF3HhMzKNSYEcBkwqXsA1TtosNJHtfA5qyuA2yimmgXX92FwL3Ey9TrW"
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
