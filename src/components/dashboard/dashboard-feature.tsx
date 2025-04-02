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
    "5D5ABgmZD1jSdmuRjiLfqfW5Lu4asU1v2ffq3JCCgEtmNdmPNRvmah88iZqauBwtTgU3xDYULVuS9enXGoF3LehJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WAWBksTDZ3S1AnPPGShTGDAMhZtnC6TqPFyEFkRrHRkrC7rdRsPHR4NJKAqkJWKqK266vJMxXxcZZtJMMzeEw3x",
  "key1": "53u3wu2ztFv2KYNiguBMwfon9CUuBLY2qbpNUcxjzBsFrviMyC4aSdyfP8Lwhj2aT3B8U9N1VB7foUjgNPPwGkfz",
  "key2": "2WUt3VQBJV7QMyVMBeeEEQuty9qcr292GmGfi5XxEBtdSTv87vwyXigFm2T9rVjzHedTPDSswJaBoHvXQZkLXD38",
  "key3": "2WrAgf9fUXuyhTAUb8Uf4PA1w9JyRtvft6ygzLcuywyJHePjyQY4hDGeuCnR3uuMjq2ndFgW7qvY6ynULW5t1Sxr",
  "key4": "EN4r1hVLoStYZ5NpA3jfS5VU65eZ5SUV9Mb4PKeFSyftawbMXfyA4BydCfgRs5qKExHw1L2e3GEdYoMMhek1QQw",
  "key5": "zdnYCtWaQwCVQKGKbFYtMwua8UJcQpFDz4xhihxMqJrfhDJJFYct4T8jiNb6zPac7aAKZZ6DiQNmSPMUDDzCU28",
  "key6": "2Y24s1xic3km1m74P1CGHL2dz7K7TogNvY693zkpBNbZWbBCbDqA1oXGoah3irGgfu88KjYJEgxJVPVv8gjzhNMR",
  "key7": "66amszQB6TDJ6QTrHb1oFvLeKmkZwn3SbXxuQv4HeinCYtUVuw4ebLT3KEkPBCqcrNAVxtHnYoKqBLFK11j6g5Qo",
  "key8": "3DiQd5urh4ydJxccKKdqwWUGJ1sfMTXPEcdgTxSU99hFKi9yR4SXCXGUcATSRPmqE2VW83p5CcX76MjFJ99ukxbn",
  "key9": "5M9grjYFZigJSusXP9nC4MboCZ1XAbiqoZcZQUmrzxJJMyVuWQE9bqp1kiAVpuUXbW37hJM7fGCiV897ZGJqFi7o",
  "key10": "2hPchxNGuMdHp5RseAUzpEGzRmPZdAZC5FJDg15x3PjnnQLqYt4hPyK3H3m9LdZAydqh4Dau86pHinS28etW8uvk",
  "key11": "4p6XJE4hP74ZRJATXfo4D8hqqBfV4jaDjmzXMvVyQ73UqDNn1p66gzv4DwehJprbxpETL1ijHg5XvWpEmsUt1qsq",
  "key12": "3VUby9Fg1toMmKqPNgFWHWq9Ao7wm52Uzq9d2NRg8oHxJCRJf7xFJaVHteQG1LgWyDDp7RWChaLUoccLLqDtK7Li",
  "key13": "4xnu3FuVS44kHT8xkM4kEkewQaC52ddaMfCVBaGWLWAZ39nzeT2oVCLA2gWZn8UXngmviw9avqdy2ERoJLasJmhp",
  "key14": "siK6zGfSdkjmTegvjMwxUYRHufJXLTHGUkETZTNBuwQMBX1Pk6jxrGuvh6df5B5gD6cAzVKwKJ1RJfTuEUT2qTY",
  "key15": "tc2y1VLDcT5gJEpK9EAUqsg44Yjchf66sALikHA5PpX5c5FbSRvv9975Buk1qDVAg6iwy2WqNwmH4ZaBw9cCMKK",
  "key16": "4KWjRqhDx5d1ENgjYLz75dsegGf8fqd3iDBXkSSeU1p4CXPNnfsn9jVogVg8wYVUuwAjKHmGnDQvHJC86iinFn4b",
  "key17": "2TpQkCYgTTDXMf4MX3QtpvuYcWLNYb6xYWXknxY7r2AVEnmk9AGUHwxMgNkVGkW6xtCgJSjs6ZxsWiBCKajx21ZY",
  "key18": "2y8hmoDfWcJBJZExFNZo3148mYXJcdw6RTZn6YCNHoQ1ijCGQ8A33eDtUAaHC6772RajGXzZb18V3fq8tFE9HjmF",
  "key19": "49bBoJf6cfExX3c1YpqxTCmgbQdJmnQLfpyiehcZz9L7KrQhZcqf7TncNFPaMgxMHRAakWEcXZvy6EDf698xTaXy",
  "key20": "4jTEWHsBokUd8k7dMTDb9iDU1jxf5QnxY2dSPVhzzEkXcCZoVZSDntnCtBvnhDVRsJh3FLKaNX4b3R5p9AHJ1XoU",
  "key21": "gwK37gevKKqrqGprkkX1nVDurtD83wq4hKXGTVfZGM3mKdRa2noVhi5LCZfVsgxbVGuCL5D2emnbnivHcbJREgJ",
  "key22": "2ucnqGbY8R8L3tWi6ePbP39F6wu27g9XUa62toQ1AsL9d5GyLDw4xoyLtXAsBa9KwGEPHLk3gQyoN2XHzwqeb6ub",
  "key23": "53fsqWJSqQHtBYksHTPt1JaE3JgKuSojHtuoL8YSVR59HhAHjyfqong2urvqqjzcyrzkxNehGAgciBmSicgqJCma",
  "key24": "237E8tkw4hNEiUEKLSwAz8incCxBdWGvAu1zdGs4urZxSt4AMir3vjrYF9ZZZGPS7GZoHPLgkSWxGoTQzG148rSB",
  "key25": "41cbDp6uY3F2ss6bmJ6nc1oq4x55Hx18FvWA4a7QkegiySXufJwvnNAhZuA4unovTbE53za24s9aBpHFMGV1WcVL",
  "key26": "3W7Z3wCeNDkaCJG3AEMWHVEu8TFgCzp8K5pXo1P85B66ttoxmVputRqmMVtFmLehWUrhh2LJd2HXfQpMaf9HByYn",
  "key27": "55EkX1ogLjL1MSqvcyQHFZuvGqLCmScahPD5UijbZcG4BriA6KDCqSWiHfckf8bnCGSW2TMLaTcdtbGwXfBmEthc",
  "key28": "4Rmxxtf3J4M1Nzr2cFmnpxmqu8c9Yi4bXWUF4CtaUvTWorRHHfALm69uYAyCRx9tRCrtfaU1qiCmKMMXzCDEX5nD",
  "key29": "kH6P1BtGC9smpBbagcYNnGprxHWmzucJLPFQqsQetKFEyFR7u4G44YmbBNWCA1CxauMpCsj6RN4ggZjekfrDAoH",
  "key30": "2VU5QW8LEKqFhWM4UMWwMnwXoVpGMEYwco6mzKVYtZEQxS5hwJi7XhrKQJmQW84mVqpzDJ2YRFT3arg2T3cCn7n7",
  "key31": "3Tr7wNeLpFAUSE5VtMH6UBv4TiKKG99a3Xj9r2uBgmGjEGA4wU5w17WejSJ6ttofxchsWoSJntDp3NdgWxGjovmS",
  "key32": "2qgimhLwxYbsZH1rozuxAqvWsNJc6jqLok8yvR2BPBetdGFbCR58ziRHD2YhCsPcGHTKmDogHTZV3aHnDpR83d1Z",
  "key33": "4RkoVA2kCvEyKyQW7eRaGN6UCGAL1qXiuYhgacBdZL2wF5tPKDM3PM1mTB1Y32SrkKXvSDJKFqXjvtbVnJVnNCPg",
  "key34": "37KM72qgw3t3NgZ3s2XJkCxYaPX2FS9aRxA5GRPc7a5r5J98XBvpooDmfmJK3JYKdtcgPxiqQSxFP7GpVWMvAnTx",
  "key35": "5H1e9KsJ9QJUmMic37D5UMA2XNomow51yzynSe1Z2XzRgUrunMAZ971CZ62wSGmRxccH5NWQ3iwYFfcXgCjsz629",
  "key36": "2ezLLtVxJpjdXr7q12TMst1ZKrHaiw9m6maSpU6wLLEDnJuS7759TfmXY4fBjyb3zWz6GJfxD9uFCC33yeJcMzfJ",
  "key37": "31WraVFWfCehXG6RoqYgG2TQ3bkGbppEvxDT5YmMLyjX61RwrCN4H83p8iiPf2qKWNegw9jgjCy7XhkWjt49cJxw",
  "key38": "4WbjCKWNrKunAd6BsGtUJXSHQ4X7c9MjMDyo4FWd8FjjMAsTK1etj7oiAhNwTLp8BXW91sdNT534N5j5QYY1x2p9",
  "key39": "PfhgsBg4WNkV8j3h6CAwmhvMkRhZmHn1LKUriM8czjeVwQM33Wf1ngcdY523aLp5Y4jNYKZe5KtLYhidhwzgeic",
  "key40": "4HwQ4VzL5EKSA93woCmNxqXq1Y3pEoVimPSdpjRicm22NuUtakEyh3zyE4cScDk2EdxL6PnUn7gcBEF4swSWki89",
  "key41": "fYcJ29aEnXJ8Md1yTPU2TFQKy1LNbj7Yy881kWP7FQAv5Emwb3QDyy32VQWmMgfqEP8dTNzJvyzEwXcc4YP8doA",
  "key42": "2fwjPvsg3V9UQJuWvVhMdAbKTCch9iaMUorPbBtyUjxXgFG5q1X3MbaKT7zohCqwinnmcmJUxB9p2EhxbizC722j"
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
