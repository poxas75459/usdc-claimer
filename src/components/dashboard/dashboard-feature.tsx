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
    "3AfC6vURrRq9zEUqc38E6TcH3RQ6aS7swZrHDgxjiyY7h6a6ZMDPU7WvBwWrtQPxu7K1F91LZAcneJMiFZSggncQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22TTv1UuqufYv1Ffq2XZ8hwgWMz11dsE34mWbaahXGc8JV7R7PrbBwpamGCh195pfTdfKX5gr3xUP44XJKpC5Ubp",
  "key1": "5St8Sgb6Rh2L6gkCSmHzRMtKszbSFh8k2Q9kppoWPrYHPQYNuiy1jB4F8DKLxSfmGpZgr6HrybaUPmmDkdWLdJYW",
  "key2": "5yQijtRLk22Ur7EsrvQgUBT9Ks67SbKmQUYnLkCU5G9iZg1aGMgwxXhgBHeY5AD2b8hs9ytjgjWvcc64mMkMAYgr",
  "key3": "5XDzmsyVyeCUadEJqm43hQErsofEiZVuM21vL9dYueBCN2Mre4sxhWZzGNENXPEW2F5NibAkPqMCVYfXPpSJPFke",
  "key4": "3C81qKfEVqfxrEGccdc28q2mPQuzPZTJELpbeCHwJzzhrxQuMyT6CBYYGuSLQt4rmwGXcTunS33mv6tz11cRjDdm",
  "key5": "2qENEYaNkRmjC1BkTjvt32vhh1PTxJgw4AEVWCkcvhEEXadyWJz4UxtMhDQwsSVfPwwz1HMwrCLb4cXmMDuJZXGh",
  "key6": "2mi3WdzzGcdyMfmXGwwiZYhA9sirTc5nYXctqc9BsprgN4ALNK9bGAUJH7FSnJx1M2YHAwXmWWSaWTu8CRH8PKsV",
  "key7": "5z3PMrkHH74fGJGvzdB5EmCsAaEwDQzQesfLh3LvvfeRsXoeHc1NNCy2R2EDcFmWjgrb9w22QN3XdgLUx5ZsKBDd",
  "key8": "azCyTtjsrU81LTkAvA9KjatGfj9mftdqiWmKqb7NYa1eVYTgz9726UAtwhBXBotqP3FrVrebK4EcXxbtiYowciY",
  "key9": "5MowF5GGCGvh1hsQHDHB1p3UikDg1eZXVtrYTRa6Sym1MMcgje6cmjaGTiMxJSLCHAvyRYgBvAuXy4Ynr4w8uHns",
  "key10": "3A6ch7LUny9Ye4j4xdZHE6p3VCeRN4AktKescZ2iR99RqUdMDU6JtJPVzWMYH7w5FG1uRodhFkQ4ebpzEjheBsod",
  "key11": "5wKAsgC9AvCeKim7BdeAujHNVbSedEYYgWkbFCiW4FBe4bYwMKoQ4UDbbHyAbAvXRN2AvwFXyLjRE6Y1NT8Znz48",
  "key12": "66ZDRW7zn9F1RaCdhY4pVG44arEkZb7fPhc8HF5R4ViBGdgmSAWhQVNQSjerhy6J728aQYMpS5QG5CrWj1BeMGT5",
  "key13": "4hCn2STCVmyC4AnX4fa5FmYpbnNviPxxWZyeJEG4dP6ZQDK8Zd1xx2wXvehpsTeDMbWiRPZvXF5saink7CjgUt45",
  "key14": "3vE8SyRyekqigTbWB5cDt6kRQ4FUKYTyj5oGRF8NkZDDBisc7UoaFKtGM6S3FpW5v67pxqZM3xBw6KyAiKPJn1VJ",
  "key15": "3pJrvviWVHqUHwhtWmCVXsYwWGGTJ1Gs4UNHAcDyKvacTWaoSrWtyGeMs3z465JoyJy3GiTaaK5mKSiHEkURsRMo",
  "key16": "2nD9Sx4ympTiQtpRbuMB2EkDsv6GtD4tSkd7ZKYq614e9TGtEC7VEfxxQudxha4kHxs7xBa1fUqV2ZMje1a7495j",
  "key17": "mTgzoMeFL1wUnFZPzFNrn7BWQPYKBja55dTrrZL5FRZLM3ZvJM9CCTvenBauVUbuYrLPFMm1cz7TsVjJgv4s7i7",
  "key18": "4uiSQPcZ3pD5c2XgW82RwLZ5WEJH3irJVqPHcDcXbuCZAV6Y714nJKAYGdoXwkQYbAnVGdG9A8nwHwvPq1zBNK5z",
  "key19": "2zQsFHVfvHx7ysUhnyqjwHYGfHP7cti4X1Jx9DCrcBxGVfbEB8q3WshGoeM4yYsjwa4fFk1pZttg9MYETfzW61Ck",
  "key20": "2SHRNbDa31dLoUnpMtT3tLx8RHSZ3j7GT1Q8iTEE1W6CUSXzPes7hA3j4v3uVWz8qXzbgStbMX5GS6s9pTiH2rqy",
  "key21": "295hkqd5HSktX5GfamwSewF1o5VxHssc866MQGCi5ziySjFjT1izwyPDXfLMVeyhgJyVvsoz4Qu2kbzgX3JB4kuw",
  "key22": "2EBfzDgbe6hpTHssMbZg69uC8m4c4bfJJpijpFgdfdr6dAk9XxpCKySXGbqXYC7X1z6AJA65KqbbxMQfsKNRqogP",
  "key23": "5yKwzs2pyVhzBfQ8aDHj13ZawGHEKg4fhn64qSmtZ8dnYJFojBHFJVxtbCihjkfcRXkjeFgvRK4JPi1Y7bNy33Y5",
  "key24": "26dFQowfyUnj8HtVibeeWmfitpZQu3MaNGJ3vwJ1MZkvDsUrUw3B9EVMWdBhMjrdPv86UaH93RaHB6ECXTJRZJe3",
  "key25": "c4jV5h4iiGEmWCxcwuv22QCzNDL1XstdXPB93RmNXdnwzYGNuLyaGNqgZX8PsZoZn1v7iUvpTiq6XRQFaSEzphC",
  "key26": "3EVfVBwXDUmFJw4riFiUH4hjWUMre6dnUWt69t13Pv5HBTKRnJLG2ZMRkX1MEpc6jkvCeKgzqtnQSRTnJktiKkZq",
  "key27": "4AYSz49H6E9GaijcQBrjZNcYn1tZET2YRj2ojwf39px5s94RNNtugBrJhYKfAxCzacB53wqbf1woXDL1YxHFDGGj",
  "key28": "3QLf8WE6BzqRXw8LRua9DfYWBYN1i4eCN1YqX7Fwde3JEM5XJM9QYu98YJqbGxnSmVbD2iGyRx5t5Qytq3Q31xpw",
  "key29": "ZoKJrZL7eWCityez1aryngnx6fp2bhgY7NtZePVyPnpBAD2p6qcd8bpqppNuRBQcJ1NAmpfY2AocjmqkVtSAsJa",
  "key30": "3WX1KUuMucnc6D7ojVMmMUTzpcpdwwAP5Yhfd7TFE4YqN5N76D9ZkSjLkKgVUrbeNksU2u8vccqZYodbsS1di9RH",
  "key31": "3uxqfKjkFB3x4KfrNSBQEYMvds9dgQcMtmTnH1wA2DwJ8CYaN7fDp1xKEABi6U9hzMF6KTc4kWiMd6nnE6XMZn4t",
  "key32": "2RtpYpjQJfAsgkgy3KCVuVGyVL14fbwo35ipejXngnoBRw1C475RnGJuJUtL779RDeK6NRXbiFUctec2ymFbkagL",
  "key33": "37j1zf3oSHg4prms7VoZ7aGTzzQg2UYTm9Nz2cQ1eKPfFP27Efvwfuydhdu6ixaEKJvrGdcfbqSwuZWRYQmAw9Jt",
  "key34": "ER8W3UKLn1yKJA4wMswVHg2GmkiR1gCTZ8f5zWEHiaPPcbq1aBgfo7geyySAmAE8v5hCuS7aSok4gux2VWvQ6hi",
  "key35": "k9UDzWTTmghnWjea33JY3HDTXpjDxWZYb4GVvA7X1TCbf3RHU8VP96mGKAp2Qsw9NLJ41Ch8nu7ey3dWrA9G1Xj",
  "key36": "3pgD5vMMrLbJNfMfSsUYoMcrXggdNcTpihYC4JUPdiF2SLaXUPFQDF4RR7uffaDg6CkJcb719ueY58ACQtne6m7c",
  "key37": "3Awi41BuHgvN6N4nBPhtBU9GxWUqJ5uSLF9DZtAdKjCynZd7UmUehVrK2JLApKJcrnnQPr4A4u74ibWbMwSnui7e",
  "key38": "5q65nvQWd8J51g4hMf5qFZ2yLTDDC1DqyUxkaMkxTr39sx1enjYiRcG5XApDJbhtLYoFJbgBp7i8e5paGNY6LQ2T",
  "key39": "4v4Kq657x5tHoJV6JsZeW1AdJZBVhDNwDWd6JS6814GNhGsVwbMfPBayr9pj4sYYXV17rvgAGL5aA4gBhUnDC3fs",
  "key40": "2EHvupEK21UefrLCsPo6pfLx4GaTGpnA9LWsvja8TFtEdUqhV9DZjdDtgQ8abvt7zF49JsMPQJbkYqRKGp2WXpqZ",
  "key41": "5N1h4cy9vboCMyPH4DrDjP6Lff8DbP6YuKMS3mBPFhaTfEa4CrCGRFYNb1ucP3SUde6RPDzV4w6e71vrFLAZhZE2",
  "key42": "44kZuFdV6LUc9D2NxPcFnmjYo2CRVpfaKXTEzWVPKfYX8P9Nq5xZieKve4VcN778juVai9DcT6h5TKBN1uBEfV1X",
  "key43": "j7PsPjDn7HTTGUE52QMfvj2o1FWtyCtRaZ9N8L8vydwxGbVpwYA9Tks75EzLRA321FxDQZb4ozGVPNTN6Tjsf5f",
  "key44": "4YTTVMzEF9BFieM6nA5L6YuHyKucn6z4M6mJ2dkac99xHtD2np7nbaoXMW3TgYNxiuQU58mZFbB6zuTktdhbBW9B",
  "key45": "3s3VNJpYo8JJiqXLGpjuE5ZMnpYJULH9ae4XkFZDGWQRq36pgkTGd6bCJFaobRYWgB1HfJHwMPXq4LErhT4jbRkY",
  "key46": "2esMxsVHfY9PyLByg6sqrWk4H7AXBLDSKU2ZrrwgcFaSvqsMBoHruccrAgJngMcHGbkfZPxVggDC6ZLT1XH7HNXL"
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
