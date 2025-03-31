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
    "3CgSQsmnzgRAVwgk1BjJVw6RxnaKr3pg66M3DP46cJod9HqhYNVFf4hBu8yQ5aQ5DkrBkrX5Rw3TK4QifcGM87jc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gTn87NuahynWZvm675pmDx2eBXgLdjdBomHtgShEbHdcjgmqo4E4vcsQ7ajPv9RynyEy3rHXewfgCYJijXH1o3q",
  "key1": "5jmussZGef5BGTBmsCuw3WVz7LTB4n3PxQsvD6zC55BfvnCXLxzgzZcQUiZ3m2nMgBe1XSj17xhRfXUrFkuUd3d9",
  "key2": "3sznjvpcfc8rpPru9XmY4Cuo8NPssMqXuRbTdBH3nHZprh6PiRVbzEm2AVCDtccLLkWZ7nGq6DbkAVfzL55eDxyE",
  "key3": "5DsWaHGkmPsdvYLusUYAzu1cBqXJP8k6eU8i21ZW3MhEbeBLpidQa2JLmyCgVy5cgJqhAZ2x4g4y4Q1AFVKA9RMg",
  "key4": "4QTWymWL1ttSRoHRM7BUpxjWAivswzMEbTYzw6Y7UYNPvg21mChnCUhA5Qs6BzzyTJKaWws1CSJdnkVo3DR1yu6Z",
  "key5": "3fmN6AtPcTnCAF7phUZe4Nnr5iRXaKF5HemCRX7DJvEinmvWYoC7aRXPcH11VkGmvezW3idpR8RGQ7fdv1bv7kmM",
  "key6": "3ppMFZcHy1z7kL5ZGuY3gaSmuk5LSEjPC9gg4nwWSW4DNXKoDMgsSHvdoDoY94b3c7Km5W6QUruK4z3URjETV4dP",
  "key7": "3VwHdB4Ty3ENpJjBwrEh61B3pCvDoc3LWCV52xFA6G72zUvUKTN77uYuY3k3YHas5otnUaEJuu7Y2XwZFbMr8DTA",
  "key8": "4iHA1vs4ESoUJfaidSoUj4WLzV9d5wVXLwv7JDrFDaZvb5yLYb2aAQva81gU4a4pxZ7RqjBC4XZEoPYuAFmEh8K",
  "key9": "4mHmZxPirbXn3A2wKkfwp9TXR3rSRu6cViMLPTWmGkmqgjJVCdbzx5nDs1W9rRFM1oaqPuZxqqthg3EuwbjMWhyZ",
  "key10": "3XUEYTEnSYWs6MzjvFQbSjNTMmSowRCYaxYPAPdekEnBg1ZAYGqnZA9iyPs6d7S1TQ1LpUTLx97Bq4roJf4bwWUd",
  "key11": "3q1cRYB5Q9UQqjCkZcYNxXoUdxpE7eTCfrWjvbBHqWGEf79ifdkQ9J7qj6kabVYm58EMZ71KW3LeUnSqpDt5MqWp",
  "key12": "5TfkmAytobsFsskni8DJwxup8DSpDSYpNRPZnPJs5sKGPEQgSjHy1h2R36SYP3RQXsRyuQ21fJaSg422y3RSe7ZP",
  "key13": "5bsrM6kqeaHg3FQPdLFGW73d2LqU4yi4bhfRLk6uZ3eXKCzJQ6Yf8n7XDU1wSgqYf3E2AVDW1qH8cZjDRn7NggQ6",
  "key14": "3eqJ9oLijrm7YrHuGUnEYWAqCPJ2Aix3PPTmRsDTUCPvp2NErzHu4CuUa8KtjE9R4jz2rQNzeJQmToYxNCADukR",
  "key15": "4dT1ySbpk3vvoNo5syjmFmpiWQHg64exiSAS7c8y9y6XhCbR5FFHhpxk2McPDkW6DmgW8FRBUQfhtygVGAWp6GKk",
  "key16": "5zBHoSt89z7g2nScCG6B1eHYThF5Lv6ruxCCHYeCfKCvjkd8jFFRo3TBZeSa3DCCgDAZ6yc1Uds2Hpf5P8q6wU9h",
  "key17": "uE5Kt7Rt26fjQnE6XQiBKmwZ6SqZ6RyyEqKA4YTBr45eTBvZnJWAjCDCzKoBUwg7GtKkNoTjvsZfCuosd971BUd",
  "key18": "UEwUUmfXogrs3sYBC39ouBXzzMimih3abiH7CbPYsPdiKXSJ6v8mgFa6t7b4Auvk5BDFWZeygkwbyPXRRm3YsRh",
  "key19": "3KVi6CJaSrBTc6ANdogymp3bMtGW48mX3yvxPMpNVNKCsYM91eK96FfxSkhzvZSDDd8nsJkp2bcD6mNSuNFUr8X3",
  "key20": "4XK5vTBEFL2eLMCUB7Gi9KtnxWH36wso3eZwkcde28QNmq8WcSK1j5U876V9Y84NmNq9AW3Ga1oBueXdyj3doe2b",
  "key21": "4bmKn2AjywpST4XmBkDx1FRdKEpxn42tfzVf8P3fecF3zCZ3XNh2jFfWdVdXCck97Ltym5Jg62b1cww43t6ycaRM",
  "key22": "2VpJSn4ryuPmjWkgffjLJgHSkZqRA11D5aa1iph3Mi6H1mEV82s2DrtgWqb8dEcRun6RTrMZ6yjs5xZ4ie3yNHrn",
  "key23": "3DWPUPFmeD6sbGZYKg2p2n6XV33g7dCRTHtxSi1UD8sesYMoznptTiUNtGjz7YxKS3pC4AK4zr15aSCmpzLh6b6T",
  "key24": "BLtVHyNsDBPSL7Gvy9ufqD76hXJpsZmd4P1m53K5TyAMNv5TMeZmdSqDp4UNmq92qx2XsZ2CvEgeFjS2bXf4ia4",
  "key25": "3fYkjKfG2wMwH4XBcBfsH1hJHuQk6RYKSZDsRyUhqg5JqpKVJ4dEktymWuS3bzmEcqxKdfdpJkQUszNjxy2yEpbF",
  "key26": "28Ybot2rGtWcNL9Mwm6qarHwUzYhynDfbHDoNuC9tzc8kiRcJiK4xEJVV1WFiv4kGcjDV4w751Eupx7zWxwvcVnU",
  "key27": "4UvpHUW4iPvzZVKYgzePJBXuLmkm8SU6TBceA3zdTbBKHQ59UnoTgFaW2BUXBvjJw55AZAE3jfbXX9zaNjtVYFkr",
  "key28": "4VMaZEUU6kQ1Tri37QYfVoRQjVjM6bGq26ja8h33woz6jG7AqmJnMkjW5rWBUud2ZrTGWhaAmN1BEPWgqYPCXYrC",
  "key29": "4bpmzNr58LbScktFyn3QChcS4Gi8YMSkyp9DgydqPWptTMgmUxCjFfMNXQkKHwVLGcgyfAp1MSKiWcqhJMf4KDHM",
  "key30": "4SkNd6xpiCL5qMUbAEW3bjJG5Sj1txKAhHzhGMfbr1ceFJsGRThuceiQi14RoMpeK2rTNKTcWWDcRisfQs2qjXYW",
  "key31": "3yQznFHvCU7xNiJQp8AY2M6XY4rZTNFHxwPmVxvwubQDfkWCwAGbrtARU4XtCxMdF8Wp5qaNrRrtsNZFRKqSZAr1",
  "key32": "3JmmpxrysBtEvz73scNJ8dd7CKzYQDPvXWNSKkxJNNKCP4Zwje4BHtbTg5RJuyrrdqL2H2PCtpHW31GVr9iSA4kX",
  "key33": "2sVPTmqGLMbQfpfitrf5VsVRgshjVJ6wjMgZ9kujdzNzSr7JiwKVBPcFUVymiCzHSobHxKyqrxmNqR3DXV4KR4Wq",
  "key34": "3eXhwLcHAGuoMAtcwEm8QrAWmbKgrHrLpYvLVo5uowRDjBNa8buGpyXu7AdkLq5ioShWcfa3PNcTqBi293DgKRqT",
  "key35": "DjxRtay5q8Y5fzNjVWNyutAHBwKXN8Z8LLntSrnmeXzKjdnqkFWvNDSPudZEJPFHfrgYrSpMngayLK4Lhxaxoxp",
  "key36": "64aV6aqYnAH7ANDRAE3w7UiNqUajgsr2TZnDatEKxDH4H2ym9vBZ4wz4b7NqaWWgDcf1wDFPWcwTYAMctxGHf2wX"
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
