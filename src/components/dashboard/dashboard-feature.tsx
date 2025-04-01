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
    "3ZHfHxmcqcsCdysHbCcKTTeQotxTzwa3q8skWWKn7urM7W5qGAWSUTiig5zajXHHdS7r2Q8mYekKj6QuCSDLq9im"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oC81cTAvDLdb6SxQG47i1pqVzc6n1K17negiqynaP8YEzvzTomC298WsMmHX4sNRM2wdahcWs7WQgRcUoGJChNs",
  "key1": "5ahPA1LvxxTCMyR5FfADRnN2xsrFbC9PAW52VFiFXeHo2eaNbdUwZhhyMd1Acruwc9JLP2SCX6dJVmiyL7ig8Nrx",
  "key2": "2x8cPCSjNQ3HK4nFiBS2GAeraQT9zTQcvNW6166N7ojShVay64jtoTDFtvuRK3HCtXwT6euuCtMfANUdd5ch1Cdz",
  "key3": "4HCjqzmH6eVX6u2LbCA8ZycGWiThbZ8mvYN8ZSsRwPueKz2ujPmWnmTPvx2o3i8VCw6dtmVuvUrr6v6P8TZrqDte",
  "key4": "5YhYMHfjRCQJo5jBnD7XtL8N5xLLXh83EnTDivqdtKWs7fJgmGTDXUba3YnkDvkVFuqDShdH4Vq2Anmk1ti9hi32",
  "key5": "3VgJMFibDNGNpFp4bdMWfyY9V6mTuGdmhQc7Jk2HQnikzJxdR9Q5pgAy5DXCkULBUk5v8pK8TpMdF3yTbadEu97J",
  "key6": "VvkcLT3Dw1og1QiDhmKTvnQBhN2JwqhnfHxdKo1426Uq7KFTZP8UDHqaCKxBecG5AFTpyr1fpt8BSVAWQ2urbnd",
  "key7": "4fxQJG4Zn2rRzKDbR81CiNur5obV2XgdY72dmXLyFzd8a1727nxULM1ayxQn7MectugZA9Xj5pMGcvMZsS7Q2Pe6",
  "key8": "3eAqBcW1HrXuUsyytJ6HrKMjm7knB4SNAmUqo1Txsqb3YD6aAc5rXt4hMGX5GsBDH4DifzEQHEv395eDPtMwkQUu",
  "key9": "2rrLPyQFhgsm5kPyt7TRVcvqcNEmodBaPxy2snq4FEj1nne1akP1E47WAPojmtSXCvLuWkGPV5SkNZYyjJrt58Xf",
  "key10": "33jvBayTKEDim3r3T2S3MBxVC1ateVKK4qWuBGQSaBFShDBx9Qzp9Kf3BAZKFZcCiBhuLMT6iJ3ouhhqcWzuvwbz",
  "key11": "5rYUc6gQQEHHUbe1gCRCRSJXgtH64J6He1gb993pahfatvE5dUtbRyu9y5VaM9wFcd61CNj8sPErJFtaXM4ivrFo",
  "key12": "3P6NwVzEfat9HFSLoFJMwQaHhNLjob9KTQ5KArBKkRd7pycBvJfV6YYZd65MiNDxkPp9wNFTGhs7hRNAAMck21Cj",
  "key13": "2tEw1z3sEVE4qNQRFdbPvm4ujFBMrWP9tfg1TAncb3hcbwSz71uPducPVJ28mZWth9VWPrfdcsYPrwoYRC6qfzLH",
  "key14": "53K82KCUcuv8Cf5zheSgadpkn3zLbLjpzPvKGQHcvVVESQYFgUpcZ6NxFFTcxQT5odoEwr3kVugHwYct1VpBrXfQ",
  "key15": "3yVAtPCARGd6WvnroNMpQVhMZnAFkgD8tMmWKpUHCtmFYxaBqQS6x7sPTuReKoK3gL94zGTRuqwZKDYNEVwYp5r3",
  "key16": "iBTGuabDpnKUcxagmqSZWfk6qGmF6S24HX43UfYnrofCkTcx5XEXguBGJATU9HEFaw39YjJzRDmhG96r241bUVR",
  "key17": "bSibpffPkR5cVUwkzni9cD3XGKwDNcsB5XVQTB2ME6Ki468eHJhLLSuWUrML1SVcDzT8S7B61FoQkuEeWA5SDSH",
  "key18": "yLVSzJ1zh13DSgMusfWNd8F7JFHof9GcRmX65NV74fThciUP9bmpnr8sJatL7srT56PDQrYfU5JAmPArDXcKToE",
  "key19": "Uq3iARwDk6skyizK1YL1hLwasP2vhd24nyriXLfqqR9gSnRkY6VC4uioiZGaqgWy1982SLfLzv61S2a937w3C2d",
  "key20": "4287YCRaWdZ1mKGwrNPwk6KLiTZrDYsrm91w2DjhgwzLrindvmxxANfGD5QY6VcWkLGDK1GGM8Mm6Qp3Amw54c2h",
  "key21": "2QZKnjHbctVWr6MtabMeRtTSVjdDJuVtXniAUQU3YpcbR8RaoR4tHRLa3dRDY31tvv7JFw7SdTRkL25ZkHkk3q6k",
  "key22": "2sh1GUT1e5BNNfykdyKpVHrDHs46TDbZryw9oQSDZUEqcrYGJQv2KhPQgbZgKLon37amAhNVdXKsbWFBF31xYhgA",
  "key23": "M2puqQY5KopdF3mnNyg5kFtETmiFpTRVgbMvaFrYddx8iddW4myyaom9C4S4M4aeXyXEgAwU1yqEp6oyiHb4pxn",
  "key24": "5X1W1yiWRXsGmk5gcAjqYM9i4H7HsC9XhA4Ve22Tk8ALoymSz2BfjBzPEGMZ5Gb3afqW3hHNQWa8eTvwC1oZtb7z",
  "key25": "4zY6Arfvrnw7fTEtQ8GnaCcwTKyuuCn42oahSrPgw4x6qLtL7tVjzQy6uUh3m7s2Ux1cgqYBbETk6gSBSaY28b4d",
  "key26": "GBRC46U9YQDWPFXEB6BUGztQNDWa16MmStGtpx7Fczbw2d3NXumeWRXncYpEBcX1jJnrLQCkbmxtxhcWUjW1D2V",
  "key27": "2LiocRsB4qdMDZCywx2DSbGtjmRMxecnGYZdFpWADc8mpijuo4Z1KmYAyqZ2NHMM1FKFeJQ6SGTqEV9qkGiUWFJC",
  "key28": "3n39eLpKr9oM7Z7rSvMRU9u1E95ZNFLN25McVncuP1HzcoKyiNEvaAWSXLxVFh6uL2szYjPmcy1b8eLBzpeQ8LF2",
  "key29": "2YJLxnb8Jcc1jcHzcJdTBX726qeuhUVpVGib5snK1wCMReCRWA1jSfD6R5jpSjydS7yKEXgZ4XBY5UuwovzwuTm2",
  "key30": "5VUXFtSw56Cuc4UGVtFmZ1behtBDiq1GvXQgc9qmttW8cujeBiKVhqADEsMCuAC8wMsPBRYrSrdt3qHW8z1WtS7A",
  "key31": "4svoJNGENZK3T1RA7wBriASTRrdyZycQB2P2KWoJswbrCdBd2zmVhH1YdhEECPdqqtpghue4Rxdwcb58Djc1J9Xv",
  "key32": "ao99EEKCDYfYLTeW3VnE86nuGgRVfMYohjXubZDiHWSgtadcqzwgZ1K94RXTpevjkUuBmxGtKnCNr3jpPA3DUdW",
  "key33": "NjfK5TNewfkbBV9E6VWxPBQHDq9ceGwwjQe663BdshQDmtyc5g25kFgKypEX6QWgZdnDcb3iM2o6kh1YWaZ6rGb",
  "key34": "5mAJqX42npRJ2zok9ZkRgEYBrdAbkU2bRJYne23X2raJFHYw83Zrmb5rnPsmTVZr4cddeKxuZVwL1ZR49DjQwEPs",
  "key35": "3ivrjN5juojyfqKTXVnU8m4odmw8XgA6oo7UHYBsT9CWQWWWXDBmZmdtLuhjXCzZiicnhXmWzX4kKvzcnRgMo8qb",
  "key36": "444T99XkXk1XG9UNscKdbF7fkDtDjMrPAAv6g6fgsjjqrZitLfPuB8SpFAvhFL2SVyZ5qzoTqkJffng3ZB1VAGXt",
  "key37": "35f9AyX6QgVmnXsnUPMXrkT21otjJuGcDPoQqSuNhsCd284B7n5EJ1NvsGhjgbiTjG4ZuVeGmVCdoZfFZRYzc6eM",
  "key38": "65RBErHNJNBT4F2dqmPXMSfRHMZU4NVZMHqGE6hYsE5KkWyR6VuCvp6TxezDPBEGL8mnSFdfbGJRDX6dMraBA192",
  "key39": "2VJRrpPHBKY3vbpkKLw8qDpmJ6YU8zdMqVes7yLHmVTqEJdRV45YYw85cV8wM78mCBHJHZJC6ZMu5TcG1ByCkPbd",
  "key40": "2GD9WP5ZebCfaYUPqWbrmZoZxDAhPnNRGvufArmiiXG41ew3citdPmLTtf55mVhRJ6jx7LmuwQM4QtUn26NCPrmm",
  "key41": "5sTQCSrDcZqQW7BAaDa8Cdd9iUYmnnR52qFmY2fAUTCXmqMUcH4gf2axo4PvYGLQ5CTv6VedprhUQa5NB1sMY4sB",
  "key42": "5bDWDpuJDGRpdcwJpWcqrVu3LXF6Qx224bhUzd1921GQuhLFLa5ZGUipn7iG4dqHZRr2n3fAYPmJgxVS7b45EAmc",
  "key43": "2cmqwaG9P4YWbAkZnCdrBGjaeA28TrMfA5Nd6q8zyZ6BoWjkgmgnFY9HPCUYpXqgQpSQfv31auyhgfYQEZevBoBJ",
  "key44": "5P9qaAYGqY5GNGYHTz7pNAnpF7WqAo1hqZUefPKN4iDK2Ecz2jzUpRUpwjsuDJoSfCkNLyyqZMQynAFUkuBRSm2F",
  "key45": "3xcTrVEmFYkFYrty5gMJ8KHBEUbh1mmYqEU4VQJ9YhGJnGJzvTAcbVrNFTqvViaHvBuQ5ymbGJFU3bxvYNvcx6mQ",
  "key46": "34Q99VyBdB7Zpqi6Zr59yjBC5xn6ofwgD5mGUHb3N9d79xQxvhz8ZNZNApM6EWRkXtgofEF76sx9VWkrSesNS8aY",
  "key47": "sVS4M5mGgqW6TMBbcxAHYdGQ4tfqABKj9mWr7Qx28bYU579h2QoCiNR9cvXtADVjss5bb3CKLhkXSLZZmQXev1C"
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
