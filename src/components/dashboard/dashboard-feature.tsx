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
    "MKv72ZXbgR6bVeyeJBum2Wxvebae3tTGdVYWvtjXP5G1nCP3Nde7jbcn3FhCepv51573ymC6BpyrUtd9NZNyR34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49KXuqsg4GnKfaSY2tmAoQM7XTzq7kSs93Gfrv25dppxPC4pHaXa2BrpMdwYusDZSuVTntMtkijReFcVGVGes3fF",
  "key1": "PiUMBSfPXyaJeqiyGB9V5C21b3BMp3ygEJtBHwM7qxLiNT1j5xqCXF7g9mbJg9Fpcq8NStc8pAPT1KDRWavEPYR",
  "key2": "2DJYBVTEBj8HSkSWAr9tQRqAxvcv8XzGB7Kfsc4sBHCNFZpugtSdHAxzboM44rFsuvk9byeXf7ZseEA9416ZQXBn",
  "key3": "n7DHcW2dBmkhngewK2EEWBDsqMhiWTP4TN7SRiFSdmvK8QwwGgdeZScwE16TUJRtmX9bw19XMQAbZLBf78kbvqF",
  "key4": "YR3moZmZtEHYPfbEdyZUeT2DVijNUu9GH9mf6456q4V78zsmqh7HbAQYRbZi6vTvubg2cciQpRcq1DG5jXeCW9e",
  "key5": "3TSXzxEVUxTDdfF37zk57WE7aPv6MhinbbbmJNYdB11VstpMxEzYTRNCA6AYakYke4fHSiTdA4PY7AMsacpLLzmb",
  "key6": "4EwBW9xsTujwbfF9HVeA1rHAnWqyjdeKrioxvNrvSVKSNEsxY5XqRBwEBHc5VNpoV6Q1ZQtgXi46PPSp7yaqyHgy",
  "key7": "63FyKWsTfotKnCp9abqsCBoe1XsE5wMCuQ5sRh9gwkNWGgcS9gxHzp2k1Lqy9kCPdAXSDES8RuMQXBWUeNZDoDUj",
  "key8": "5Ctt6CkXm6cvCH83rP8zzbfHtLdgfDMSwrBX8MKvRW7oqCt7jgiMXXG3VYXNeodKwrxZ5m5AGAiwPFAjxw5yEgLW",
  "key9": "XSn8rX64MJZHES4r88A1LYvG6jS3xBarq8jmTMjUYZpJ9SgmUzUkwrgmpd5p2tTf32eMn5wTHCuYNS9Hm7PMGgd",
  "key10": "K2AbBFxt7tupdPtuoM8JJWFnG3zX444ySbQjZ2JG2dR5tRD2xpzAqKp4azmBKEWkWXGieBPj96985eBZzL2mG1t",
  "key11": "5TZNE4yU8DzS53PYQyx8x9q5eLmyqeHJR3Q3orA9YsyjoTRMxNcTtbZE38CQHkZD8eomYUNK7GeuRQTS7RYrVYsV",
  "key12": "4kfJBvcHQ8hKoDhEBX9VWC4VJDUWR8QRoqNxHjdzNAAtiW6doHJKfzMmAPbKA4ZcUWaCbfR6zP31DQcv8z3Yxrho",
  "key13": "4Q4PY2GhkQPHdXmoMmVRGMKXnqCbpqWyVprKqFzHeiofvRnm2pvznujC349UCpizyRLpXeR1Wcxez4VsqMsYL5x5",
  "key14": "4ZstZwpbiAuDxYFtc6bPtBRFMiYjfCoo6Qhn41dU5ePL8hg2XqK96gJAzrJ3JPWtjgitQuU2HCCMX21vipnoFqJn",
  "key15": "2jXzfmpjp5F4Mo24SbSLftKGwWwUq86F1VQDpfxzMGntZpq7Ry4qcrAp8jubCyaTDC9fLktekQpe66FTzbvmZgKc",
  "key16": "3gDseSJZ3629FSMLteA6UjT6iknoNC8Mf2t1jibcZzmqt5XWNjeGQV8wPfHxRxEEnsSGnCyTb3du1ri2a4u992Dj",
  "key17": "2AbW1Sy3EVbAFbnB1K7RrQYZ2JTNvd3MPq1VZL4eagXmp7zkcdPwpdPwnxFbsqgVUwqXfYbTXyVivNePRREWhGFd",
  "key18": "3Y1dHFhfCFqRsuzy3H4DG8v8m3yX8U5y33NzULNcGNmp8Yg4cJDozPoJZhifCq8TeJPv6BagTMSriqshqHnXbAyo",
  "key19": "2jX6cqBo4eYBMMvHzYyWSRtJf2jy1AHRZfXcvX9DL3f1BdDbTi53dkWUU4Cb9dx5Q7EbhNZzvqDhL2xoZnGqqnE6",
  "key20": "3t5Bt2JAq4CwpN5iHuTPpTodpxn8VyFhvGXZ5CAkyZ2WXm8XLnzHR2cuDqocrFXRrzKANzTpVb4QbqYjAzGyitQM",
  "key21": "32AgY9t3hZass2iVG6ZcRUK3ZFz39utfNTSACScyv7DA7dvKsCWSNgCykJMYSS2pSVxS9MMzpCfN12X4Z4dcwSU2",
  "key22": "2MxCoymVCaybckN4MHGbUPd2MxU1MX7Tsb6Rs42BkK5ncWeophtekkmEzZZWKTS3r7Xf8EACMWmCeursonhyL945",
  "key23": "32WvRj8X5zDSoDLEbQA6LgLGFotzFNV34V9WqSeLinRswotx7hPPa55QNNANwAFwLE2N5XmDwSuYe2gdurnZfqYs",
  "key24": "3FeDnbebyAeMnkVKb9qgr1EH2QJ24362kVuknSzniw3zTWoJVVGeq8zQqbDtngghqEGGFnwadtgDqKyVcjwsQzFW",
  "key25": "5bjiXrQX9bRs9h7Ly3iVYzyd6UCr45Q8L2nYaEpBrjGzmosqS1sRDz68QP79b9CCSb33mHdJJmi9SmBpCmDhCg73",
  "key26": "564njbBymBUW1hLPnjLkgE4aoX9ETvjoJtyV7f4aCGmih8pcp9xVrBj7EyKfm2zxPzdWskscLD4Ab6uiFuY4hEiy",
  "key27": "52Wndu8ud7g5hHoQECAoAMAccGs4LjryKDA4FDfR5f3ZaAjkDSsqH4ePWJ3pbwEBkBfPiKmQTYkAWVLamqaTVB8y",
  "key28": "2MnDaNa3FJJvREfEru5dwTDqYhbqAZbbhH1SqTdfFJJrzpazWGSpjkKEhVYFpwYWB9kdQLt58pgUdSv9QTk3YZ88",
  "key29": "31sFygyARDMvbTLk8CRpvx7fpowQmgQSsgojnNbpog2haAZcb5RiEdNT8rtTq1PYvxdkcGY2STBdUFBQSQiGyJEa",
  "key30": "2EH3RXUk2auADs1jNd6L1mtWGNyxkgih3g1j8hacMgYQzHMLKXC3Rbngn9SQ1qevoQoGPqzxMNH3DP9KagYhEwXN",
  "key31": "SW68A7cmrdR1V3HU1KjiajTm5UVDBogBZCMEcm1g9kbniChSYjhFYbWqben9RyM1XF7fM4zrW1gYcscfBqpkVBD",
  "key32": "PgKD8otHyVTWCeipmT6hWdRDNZaoC9HneVw1sS3AWYPfxksubdbMDEQrSSnPdLeL4q3SvurZ7H4vjKTMUHPQj4s",
  "key33": "3EuSYeJSpd7WS5sW2v6X9GgHtAsFaMR9cumE24nMb1aa5M8yR7m9LtLmVTSmdyhDJ5Zdb4nFtH8qBAsuymSEdpoX",
  "key34": "4MTUhJqz6TxToFXigj9ek2s5H6ZfAfMdeZydpJrW3E48zyYnCfgFKvLXMxqNtLw81QrQRz8sQT1zeD1o3KHe7cL",
  "key35": "2rB54U57AiEVMbryPtjZAYaUVrcAqatGTitWdBgPWnPE7BhNBdS6wFxcVARzjSin4bFQVCcBCjN3W44toWESR64c",
  "key36": "foEAJuFGJV7UBbtfMgFNU9gQdLGsQbNE6NkV8f19hbFsLwCjFUxo8YvQnNh7RFSoUX6WKiiALXCwJGcrVpA1YBM",
  "key37": "2fSZTxhz428MtgTFBrLfQhxyeMKqm9FCuSX68t1jUcgu8m6enFUHrbJJ4jfBHqoesAfV2QUboP9XVLAzx42Rh6Yh",
  "key38": "4aKFK2chw9x3gR68xrP1omCPwwNQr6Yw4hKHubwqyprW7T8yb6AwnkjHXG7UCtiuEhpViaeJWByADYexLHfREtrT",
  "key39": "rvKcXZS68e3J4yv9MtN49ntu9hmPkWAQDBHAcYfRiQpRfiusWYXJRo9AcPnX7jpCpJfUEsNaAxphQzwJhdYdiC3",
  "key40": "6cDXSzKybWcCrNevfVbtoXncnyRuUBJ6rxHqvKGvDL6fad1u1bBXt5595Qb3JP6y97C8GAh1gRKTdYsFJsuRmZ2",
  "key41": "5GVdQS27GXWDmXJkFUMXto2jsqsBcdF5t8DTAuHFrDMSnMxEMNs3CRb4pZYjJ9YGhmC4yZkpTTPb1MP5SnH3Mebj",
  "key42": "4sJeyAUJ8sdu57ZsiFYbEE7B9A2G5CsusYkHA3pszWCgHtxx9gFCrSycwiJft7fQRT62suubfEwzFcV7TGmVB9dW",
  "key43": "3nDusBceGyDHauMFiHdtDhjiwq49fWzNJUs51c37xBHm3Jf1gzYNVNM4PAdzyMz67VWPEsW85bH8Jm6xq8LBXu4v",
  "key44": "5Q9wBemerrLoWFiZqN9H6PjEaq4Qcyzd6yvT3YTQoYzAvhDKw5gMXGMdZWP5WAADrdfXecnxN2mfdF5PfW3TBdNY",
  "key45": "2MgUscZQfQUxSqf7iLi3MdSTSxr2jYTA5dUq3raiAQ8WgQMKSY4FP53rJh16byECbpnFebPTRPiJ4K8mNN5FRcKe",
  "key46": "5Bof9WoFsNAkW9fTiAXJABCE8QcDbjHHi8w9QDFezQMQpv8KfkcmooHtwvfyoTFzEHWEKKJbqLPWnYzRvcWV1pHz",
  "key47": "ePH1T6uVyixvaEXeaV3BNL1s1q17FiKt3tnFtCXffkErq9kpfMPD6gJaQifYoABSs1hYntH4VJuRnqD6FJNbVvy",
  "key48": "4GKU4ZfBvTiL1KjdoECF8QBnrWQbLtSP1Z1NH4bU6kFHSnLeXVm7q9M2ZCtrWHDM5KMtva7XjGyMoBDVeWwwiGGp"
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
