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
    "3TfjWMvzGtTU9tzNdBeCbBtdhoxko7MXYwYQsXwtC6ARJ4HEQSDs7Xq6uH7iow5eyWDbGGFsPCdivZCCMKyJmvoN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "15H3h1yNBKCyQyKmNev1fWHCbW7b6CcGUxocEwuhquf5LwhU5pHk9mJ9HFcesPDB4mFuCLBmNXUM1dHpYqraRpD",
  "key1": "59NAwDKh62Lp48zoNLLopZGcZVna7JS2irqMG5JyjFjSgcNzFaKzroB4TJFryU8QRFnzvCePKSZSitwRKsMCV42u",
  "key2": "5MD3cyaj6gKD5H5pQ7UwF7GsNp1Aq6iGrJ5pUGb5pUesKTYcaoTc7togVwX13nC2gxaAxjpwgZvmYT5RNi3qkG8C",
  "key3": "5vMyXCKpm7j9u5iFccoTHVdg5ndLvnpF5KJB5WvtWXhYwwWdKHPtAUDJ4W4759hiyv1urK3e1RuSjYAiLk5UfmFR",
  "key4": "Wav8orHihMpE5N5ZBBUZ5tEaKi8biitQ6DGev2JWVQhaNc4CXcPjFP1nsFfsW7ZDSsL8a28ZqV1zBSgsHtojAtA",
  "key5": "3FvvkseGx49EgJD8UWfDBCG8i3YQud8C9fRDDyCybfEUDdfrpeNi7EHKsPgG6y7oe6cLooTFntS2mPNGwoFY4aj5",
  "key6": "5iNFoizdprWC3jN184wMs3hydH5vdFLz8sEQ9ZqJsHvbjxaNBo1DvBipZvvqHw3AmZfq965gWP4TXcUa5p7jZa4G",
  "key7": "3w2U4LQamiPUKSwCt1xoJ7gCw1kE4MTJQGpNXGn9BGfKLFmQhxVDf4dq1hN53k57HSdvEztmpq4FgQnqoNSGD7Pz",
  "key8": "51VEb7picTCjEQG8iMBzj3LQh5GvLrJPzxttzs653QgwxEDeF7z9iLKVJuhFzcaT8jdvAZdf1tfDaSDG5gMUaU51",
  "key9": "4xEcwzYaTWmEXJEDyucNCyYUkVCSpMohPU881X49c2s7GN4qoLMNeJ3WxHAhDd9ggsXQR6QiZL8MxAaYH3wFKstS",
  "key10": "3BkDv51DThHALoZc2DHfyuuHJNhpm8h3YE6cstXfoZsnHxsgzLqenSnCEMHLeBfsiETNKqwKpJKVJN91oak9vt7n",
  "key11": "3vHBa5PVKCuP9tCmHURBCvdGNTaaCiHnCeusGJUBv4BMesWvh9o5j2XrvtuiiNNEetpmmGK1z6rEJ8f1C4R2kk6k",
  "key12": "4dVeadLcqoa5hoTTUgdyhd2xc3D4RebHW86qVKwnges4KQzPo64PFiH4QvD1p1AYwf4Ps9pSdrmm1pH33pJCphmJ",
  "key13": "2c1uz78oMfjsznqByRMsJ14WrQBAW8MpcMY2kU2vEfckbEQVUarPPneqPJLJTKdXh4Gy4JNCTsKBGNQbZU8UA5gm",
  "key14": "66o1S2fF8sn4Tcrdwv6LkCfNxa1Tn8G1UQpBqBGRUypFuMJ7E1KV5BFvT5M6drfSWSdwaB8AtrQ9hMq8C5GM5GZv",
  "key15": "YXMRARYDDpJd6r7s3WRBrFsisfbxgrW96YmdNanfRLmpC7tbYYF52UzTM4p4WuAeDCmVuUpvVT2Rrita6TQaZqL",
  "key16": "4M5HFb1L592YJKRP3Px3e3Q4yq9nmRsxaxWshU1AYMQcx1zRYpK49DY9fLfWqMw2Gfi2bhuL4vhAVxZvaKR1A1Yd",
  "key17": "4oiJ6WemKhYdBguaNC2cH6eYwfzHjZ5mFJZcy86gbEjHJjuakSPQZdfyXPsQPQ5aaxnzx5sNtLMXcpzsqXtUMu1V",
  "key18": "5Zrb3tiCDuQbDkCzBCDyzMmHD5fvf17GhLjV8iyfyVkfu47JgppDwKKmN9fnucwgiZFzzHzxUmDhfWUfBiv4SWFL",
  "key19": "5iho2AWkspY9j5B63doy2W1SE9CSBwqVQu1nDZRVo7fDk3yNJUtRM81xipmzY9hMEiyY13F34YZRLK6A4rWPoTFe",
  "key20": "CCwysRxfN1D5Tv1YRtwQVPm1LgFRjedH8hBYNfgVaWtjpQB51yicwxinF5dovYZavDDogmEiYbz8xycDoo6X4Qu",
  "key21": "3Uuknw9b5oeLfKngcBcaowTfYdX3enTwSryK7SSu261hjmW4MBpdGhXpyycWG7ZBctV8qHVHcKrh2iVr4SVQpbmu",
  "key22": "4dLTsQe7bCPSftHFJa7SQ3FQiHWNdWqwsdx8jVumn6psxhcW1AZ5fF14aXBCSLnefS9UoSRhicKYccuL8oMWq3cY",
  "key23": "4E8C1Yp5WBJomGykwX4xFipcQAWYDkvNMGcUqBk3gi6BewVRCvE1FwD7mSz4a81erorVq3do8rqsGGrYABc8GKcW",
  "key24": "4ysR1V12mfc2uoX9Mp6AQGxYqcNE4qTokpeQLFF8eYbuBAonU4vFf898aXU5nRDcG7LJAYmWds6TNRcR2JhtMwRi",
  "key25": "vcTdw8WMQas9LBKuH6UMCQHM2j8wzEHNgX4yxqGTXqmUhpoEV1x7sfbcVVu3xQpiDLrAg8q4VpZBNJP71gqZ4W6",
  "key26": "4DCDsi6Z9YSTUH7fkU1SdrUezjjbAeEMaMVRrHnNgqreQ19xbNpREJWR9fvEJeEK2QTYojSLasmkySwyArWiBmxX",
  "key27": "5kTMnoxvL88c4GULh54CLAMzbreUp1sZuob2hwLAXoGyjKaWi7FfhjLMTJHNoEYiM1cw5z4rL8K2X3MjSKtMbdE1",
  "key28": "2JSUB4JkT4WK8zfiJj1CAPXgaxijnpKkmfEBQJPibYMpbhESiSfefo9vXzmULeDGxUwBHf1JTTBEfKxPzSU7dnv1",
  "key29": "4S8eusTnPA8fC41v5jMpowpN5kebDxogD37sQuYZAjVs1ZqYr9SbEraGEiAqUsK2GUNaPM6TKeK89MKw2aVP7qgu",
  "key30": "24WoFPw1TPXfsmARajFzKrJaoQ29EGnUf5hiUZAQCXZcxDA7Kt9FiNUZCriSxWWRWgBtCXCRas1EXfcy4VKmvZwY",
  "key31": "VAns9BHuvR6nUXtwdzJqM61kdYcGVDJruzcm9Gc6gyawzyqvmbeWYvAskgsAuxVPxhYoTohTU589oxvRadnBk5M",
  "key32": "p45EtGLMXByLj2YDUMjw41mHC4Frxn6tbkGboGGDYxrM9UkSmQd6tBeHhfu79NajQvWsoqXo81JkwzdtxUhpspW",
  "key33": "4hSZxwfFmwMQZscJFgsh86GawPePMUb7xmCs9FGVN17Zfu4s1rp18LRF4stfgzQ2a45ptN4wqKHjpTea58yM6oRS"
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
