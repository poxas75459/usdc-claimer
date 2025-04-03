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
    "5CRvMVsM18Qk6Y8WXgQR1MA4wCLjYBNu3d1iJYjYyv1iozVmSmNUYth3RsTkJRUgAk4tC8sfRBoGZLDFwstjzE5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZmCcHMKsDaJ9rUqjmhDWFVX7oK6NDxgAD9pL729Jc4WymHfWzxMb64XpYT1hHceFZ5YTahLFPNiuKRRhMTPMwNG",
  "key1": "2Zwmu3JCSX5LLDfTKK6fNBLLF9XWppndr3bqTbDFdrxPXtxb1Ka7G1Bg9UVa8EZLBdK5GcFru1P3SqL7KcmCd2ZN",
  "key2": "62ZG5mERWMMsuPiDX9cUR7BGcUvJyqhHkEZsmGpcAXjh6E8ixWNmKSKdoFbF2NYBEH4QQpRqUREXrYReXkbKGjtz",
  "key3": "2YAZuqasLdh6aX9YhUQGB6fgNk73yZxjQt3uwZLnANotu3uvRH3raBr9cpAEreGJUM5Kbtay9VNecHqZHaxKrbAF",
  "key4": "8Y7u5Mvg6j8oZbKjid94gYs9keLNLMn2d8DbhTzQ19J2DbCWP3yTrxnQAeVt8FBXcYARN6HffMWugkzpcPch1eb",
  "key5": "44D5BwhypU3RAWnfGeFDyq86GHuHh5iJni3M4iT3wc5gR7Jc7hwBzruWhjgYFeJh9wbgKHZjUkGSj9D5yjivFzH2",
  "key6": "jJUuPRdR44e8g42k8Cvu7aX8qRyKdui3RJptYwxoMM6qiXhx7gvUmZHzHtPoLuQhneNBaNtykJQ4tjbR9jj7nt3",
  "key7": "QJWZaDAAfNjFNqHVStHXYoLPZrn2mL5aST5tYntV8HocLEqzU2ytLmfzSqVcddL7Gf2VawnE7LmkJdnvFta9zU6",
  "key8": "BxY3H32b8oj2mVfjJhY5mdjLduV4QTX7LrsGb2Vq4ARPx5bnhTauYxmVTJTAQQVfyoEZkNSbzLyRmQMv3eBFot5",
  "key9": "bwDPaQs3WEmrnB4P6FPaxvqg7Yna9H9qttWBAQ3nEYGMUAdMU8nU8BHAT6X4tQ9RULKy7xuuRVASDQzVeeqo7dR",
  "key10": "2mEo86xSREvxnrBD4kyY7f34oeEnVmvigxAJcynYHMhg17j6wmPBpaRjRJuDZLLGJ5UDchhJBkkN7Pc1aLpFo43P",
  "key11": "23rjpPb555HFaQrW6r9reymuPREC9EYK8yAoxV58UfejrNmdXGAoorNPtzhJRVRCYaJuapdFP4YpAarHNi3WW25n",
  "key12": "5F98dHqZaVWwqKWZY4z6QyZkTTBA9hqWzP4kRiXpvT9LkZ7HiU7nDeGQwRyMQbUDjwkRtDez1GsQBW3orL77ZwJX",
  "key13": "KqEbpheuETvf4mjA4amiak3x9ayP2LWatJEmAMQwnKs3TSELvKi4CBrv7pJ9quS3oHjBdyCdtooiL97qZ53c7kb",
  "key14": "66qWGKfbGQ2xQG1g9fRY6496mtvhAPeC9seFaMXjq97dM8VmjEEPiCTL3oPQviCHCJwhdudDST25QtH9TmXkL1cF",
  "key15": "4uyk9EEnGB9RRuqBuo78ZX4gauZTMqnorjnEaL2bFHGDoxMoLB89e1zaE7HfM7vDge2y2pMgjiW1M3ZQQLmoPnzV",
  "key16": "4YqAuAr6sM319zD2zs1Ypsj8omXzyvxJqKYzDkVwVWaeQKEqS1obU2vnyYZBQAwxECuaVpQ8oqdBhoT7hmkhveMm",
  "key17": "5teksSAQAcZW4idtha6cX2YeuyVUKsFS7m5V9sz2dU1aNUqZS9npcrW7itCuXGp5kDj3pBohvWbNRVnYFXW1X99h",
  "key18": "2HbiPZVaZG2yG15YjQbeJvbouc6rVUwiMfeAk21BMM51TKJykqZmsgz1UvuGFFhGfGKz9KB687beLDNHWqbuxewv",
  "key19": "2eJoZEvcpCGHK7nSGPrqfqmCPv41WzkSTgtWDUwXTWrGJPvdHEYahZCGkYto71redYbi36UDRap86268qU6ELUjD",
  "key20": "4DvkqXMb1yL6zB5NkQAEFmjNnVTtf4Sv39hZysbeVcy6NqTDYJGiz9M1A5G3W9cz21q5siDiFfwpPFB5WKDxfv9h",
  "key21": "5fWpfhmtcpUC5LDvTxzBsCKbDGWaRSTGqsduW8C2m846MksLcWL6hqDSub7c2CCu5T1cnnqtMxpvw4XvCEMxpdVv",
  "key22": "4LCzbSYhf8Xwz1kY5fRFcrQkT61zrHWiQzDYNZuJbdsJyB2JksgTHwQ1SKgHzKrDMu6FbjcvAWPsTPShf4EoV4Sq",
  "key23": "44qJV76QJaWHxT8Y76ecxg4MX9odY9MRUoqEAi9kVci4NKg3X1pY8fyHPFoWBSDPcsKziQLxyfcvVJVbN8iGyHgx",
  "key24": "52AT1Z84dnGTHrDQPy9Z53ctvKKa86QJVt4KXn6iNKGGhN7ggg7KsPDKwcayNhqPmB7htDVB729YWQ1MwKreJM7V",
  "key25": "3gN3My7jFtHTsufuhrzEQHUf6CAdCabURZYTDzkpCp2RP1DdjH6qz3B3p57XsQbqVqFAe77bYak56LtSDKu3Hh26",
  "key26": "63uNpEcLaASnBJzLUBKsWxuYMuxQ464XAemhMe2oSVUKC48FmqGwr66VaQb1DMjJRgzSQx2WjY7mh42GoSNSn1Fr",
  "key27": "2kg4ViT7247tmDH586bbhYPyC7HJfpJYLGc2z2Ug2tHNREo9JAmgkXVVEGXmFMH9L8aWwqFVyJNS3xeatLT2STUv",
  "key28": "31CDHwKoY7FhuynJskjXHaRmWShQANK2GpegZS8aj65NjePC6VaoknzB4b56FzDmsctuidJQjcLeUokvBk9ignTA",
  "key29": "2BeKC2FUB2hEDwF638H1UFSt2TCrTrS2HCX5Y8TxfLNLvmNm3EBfynnafEKye2DW4greN24EkYXsZHzi2JzZgtf7",
  "key30": "4dng1FuZxJY6QKEJr3HKnWqRRSXnZuPCGboUp64Y5fk3ADszf8YeWet9MswdWX4TDSrvhxtSGFVcha2ZSz2gvhgk",
  "key31": "2B62mRhJaT8mhVQfSkCZRbfeLMLAeqSD9JZxqYe1TSoZKHPbYA8wMqPsoYVY9HVtiJvmc7iFiWHbj2X6Z4XnHKLq",
  "key32": "1WzAZdCik5LB5En2Yaf3k4ANgkq4LxerMaBxx5WGDwfDwc9N3yoeNNBdx8qYGgEx2DZydKf1PcsTrsUe3qAyKrn",
  "key33": "5rRzpje5yLfhgTkDvXxdznMLWdURu2PjHNiZnXEz4bgPxpqNjizeFomtozqfELo8CZBxiJbWNiKuuZMHugXsEjMS",
  "key34": "3or8XS3p6VW318gNNxsdzrzZLuzmTMMGaDCt2tv4tFBq2ke1mBHipqP6uYqTXrgdA3oABuSTjjEemsovd5D1prcP",
  "key35": "57YKxgeqHDXcDBsD4SHK7YnZvJj1fjbtD1Rc37h4ci6eBnueoEX8KoqxaRpDa1txi94mxdJhuz2wvEmM6Vrp28SR",
  "key36": "3TWAhRmsweu3b7LaxzPjWnQmSkuhbB8TQNj24YHNv6uJpMwUAkHQT15aA2ih2heygUKgnepZR3nUXhY6bUVkxcoP",
  "key37": "42zSb8A6UE2mUfDBHBVv6qrZ8uBfa9c5FRQeCgFHGP8kv7xDnd2Ppq8jPuMjaK2MHqVDtsmNA6ynHtWCDEcV2R9p",
  "key38": "vpaju1VwkyNgTs7pYKKiCyjyJZwmW86e3ZCDz58RkyKF2UvLwSrff6KjkucaEivfGPJqNzcFT9W9CM9QqUsaTax",
  "key39": "WEMBs9VfSJvXqdUwn5RaY1Bar5bXvr1f7uKmYptvaLjVAbCbiHmWtWFqjgVynxPRCoCmdchcW2jFSv2MRdgBvjw",
  "key40": "5JLGGBRrBnNr1SEoxGrH5Uk5Va9H8rkVcwK79ZdfUc3FM4QYK2cABNDjk2ZZ9GZqLQU3UQRL6cZj9TvXw3Qqaetx",
  "key41": "2GwixnXt8z5roGqL4EoTuBE48KasoYkNw8YJJ1MkHJpXdX6JvjW41KA8AyPjZPSFLnVupEZhZTRuiB8FCETS8GsX",
  "key42": "3ms6ssbWyWrWzEVoZyFd3EVrwGzrypqLmroxpDdPbMrUfh1AAVNvV135vsSMkXdnAVK2o1iQhAwJjghHfVuZjkWc",
  "key43": "5L7KLtm5NnAug8nooEpvbN72VEb7YPCbmfSuyKBcUg92J5F6MeN6GCmcsnYyEeqFC9HftxtNbwQaqQjbb51iQn2K",
  "key44": "fRSPFRT9Bufh4nhyWhuyxBbHveFkPSBzxywnZnneoR8RniMe3thLb9cJpSp9EVtqvz15THiqwVYRTrK5nbAe4L9",
  "key45": "4h9XY1NuTNhLjEmdojPCG7gknrL7xasNMKkXk2PaVxpGHzp76tjJmM8mxkiy8miw3Hd7WUrc3c4bqSEip76VHGW"
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
