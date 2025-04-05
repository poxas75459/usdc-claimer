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
    "5hTNjVohXrYi4qDCgvfw9jLwBCcXrRKGzx47sUCBHcYZMJ5oYgk2LHsufG7hmapFh284NP6T8nCKvbRvomHzZN9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vErecMh579FmqL2FTKurbneaGkugVQkMRJ4MdaTHfHca3Hwybk3xkkQNufphQb2vbZ5DZqLM6xJ7K1W74wLzWMv",
  "key1": "5PGwsKE4BqicZCeTp7hKc1uEi1v6vhRiASbVRwUqmP57MMV8c7rwq2YsKgVSdsUxaikySaoCWJmQ2JrZN7tVWfks",
  "key2": "4CgtdpY8K8mHLrMHLBVUrWGXsz8eMEJLrM2yar7dS58v63Gnv831RkVRRK2mFKAPfKQJjA4bVSkCXHHRFZE9TWmv",
  "key3": "5kzphERrAVBrpefFugbYvTVeBYa5wh9KcUV1jvJKUH3dtzfSPjjjwVxJpEnQCKUHvqa1CcbfbqDx4KiomXsR695L",
  "key4": "25D8Wjok488o55vpmDsJYT79DpJZAaHg6Kfg28GPRY4iY7x1aGqFsNFshmVm8rJFFfukyrPuKDMP44J9nNkoS1jE",
  "key5": "5vj6b2xMWKs7dqzZp5qMdCohRzRrDs6ZnTwzuNCCbYRfD6KH2dKFnPJA4T1dCLKKBPqJkaccsfaioL8VxRj1BE2B",
  "key6": "38KJoTqRqNyWkhNoCz5MEawJxhX6j5xZjqGmo2GSZPjxsS2UPRSpZFk2Z9WV4JYG2MkcuVQKxRdDJzdsSjNgkhpF",
  "key7": "3pq8tVLMAdsYTGk3s3kVb5d97MKHQmStKjwRb1boA6LQw59n88gcnq9pk4wf1cTbkx61Xm5n6vofAGLyuwYaaMCx",
  "key8": "4ghUdU3qccgDJNHjg8spyR9RFNp8NscQxx5VqwgLxrCV4gw6Ee6eE7uVSc1ApadmJxaKtmcs2YSRLncfnEucWzdS",
  "key9": "3RprvcS2AfAn2LmFuHf8fum36WRoefLPUqzNwUkErciYdxxEum84NMYCVgFgjyXb7zqLoU37DWGqtvkH36JK7i4p",
  "key10": "47RRTgkVibBDK5DpnYmwme49UwgAZaGjdntmbsyHXK8GjPi8L8GYErMsDNWdY28JGCr3d3JT5pMhcFswTpYPDTym",
  "key11": "RoVG6J7x1HDG7ARDNMChn2PyHVTqK5w1X3b7VqEK36urXpoytJMQTuQegGqeJsut3emJrfzwRMBcipLu5514Ju3",
  "key12": "5r5Fissjp9eRRLV8YRVzTrvYDfv2vxF24AsCypDt9yEHD2Px7aVhX9jr1L89LYBMsrBPVzrnRZxHhrSrSRnnCf9V",
  "key13": "3EeEqVnnWUF1cr7TczmjW6aGaMDiDRjo2w3Bc1mGJUP8w85crL5yhwoCpGi4mGAmo1qKb21KQnR7CwD9NVUAHGoN",
  "key14": "3hUG2YkeDoUmuvK6V22eCDCkd7PaJ7gcMUCQjGKqA8skqNPwbauF5K6WcSD9hQd91FSzVb9cBx4iYQYCFrGMyAvQ",
  "key15": "2CZGed3fvurLiVD3SBrAvJGVVTM4FQ9QQKYM2SUUSunoT6SPL1y1p7i7ic89hnovXPFicJLKr2Y8S8pVxCo5H5dY",
  "key16": "5hc5CDW3HtqfWpir2dLBm6K5uU1LgkNikv4A2aGSDNrUVM1u5Xhomph9aBQ4U2XXE8pk5qnY6e4UiGs7eZTGw7ha",
  "key17": "ko5ShQs5Ka2JAWW8SazCPt8Xkf4TMBGjtdiZJnkPBHsJrAkeejLn1pnAYS44bBeat3hT7ndeb5d9szZEnBijUEW",
  "key18": "5DevwuDKaipgZxwcxyQaK9dwxgkzgg6uMmgNTX34hkmZn3zm4RPqXVWsoyrE9JkxCuvDR5U9oHx8AqKNgov6riQr",
  "key19": "5f3v6kWsbqcrMyrZkn2NxWk4NokjQrDKk9BqCC83nCkvMfpPSEyofZQwLi3VXgLMMEHm9xGvaN6mk3GPaFtvbete",
  "key20": "3qoMtDsFoguJitFewZoVWsWdfpkwVUXyrnqhxeLZscDfJ8f4TVXs4vpC1QshBJPTeyq9XkwkG9mAzSftMsHXqmgt",
  "key21": "2itVCYTLLnPFMab7AnmdKyvgi8YPL8RrkfQe9TMtbyQ6QJ96T7tE9vkqmrtH5iPvxCdmHBv1bF9zS9EodbT8XZFP",
  "key22": "3nGizy7iqUWWzy3ccKSabp5rj3bqd2s7DS4bHsvtPEJ1gjc9xKLrUtL4NYPZjqUQ8QhbZDPNhpYMqupMeKpeUrtQ",
  "key23": "WtKm8nqeVDKeMMYofBCoo7XU3gLz8xr9fNKsfVL9uNVqvCE4G2CNFHE9oBrFg9KPPkRMfHkh78FDLsJn2cihefQ",
  "key24": "5ykEtUy8n2mjFjSPHBRyiaRJZC5wZ7QLHRZUZr6nw98L8hirTud2biBF9uDoAHenUnu9QDxS9aQQJSzR5dGhQdLJ",
  "key25": "3AmvoczWY789atZtzJo3vmYyYgMiaaxT9SzXdtCPyQTU2iWCLfouG3XgTXfeddD3WT5CqLfR1Zx8EwLoPNFzAXHZ",
  "key26": "4u7VGLo3BjsJTcfrVNy65MshCt8NTMcvBHt9VH29kB9RAjm5V9xBe4zKnJ7P9bjtRCmkkjWT8gj9gtXqaCN7Cqqz",
  "key27": "5CMgED88UyiSWLDAam5S3xfLbySSPBAQpEJaC2Lm7kQBmnjyZZZR9sXG2V3ToSuxtwKvRinH8zhw37vEp1hV9EXX",
  "key28": "fCSYQTs8GpiA4DeQDef38apxMio2EQS4wBHwGU4NDMZRkKu2jFmsLbNinMf7rs5ioTMZr7J6CYP8jZhPF6ARb2k",
  "key29": "58r1WK3d9e7ztioBRzbwrvuBK7NRVP9Aerd9bvvkAyPizv75mEaBUVXbKBZLCjnnQKKrwBm7NZV15haoEDgnTP77",
  "key30": "63kdtwS2reyDZQVcVKBmrb5rCmcWApU8YBRPsKYDpqmd5mvgUptJxopqft1bS1TcE7FaLGHpkyXapzGwZK66gKqU",
  "key31": "125e2B3c9vDwJr4xQnS8WHcEswAkwPN6GNSBdiicwUPunnPZxBzFiVCCnKiVxiB4zr4ipD8bbWkNpTsjTzw9uFff",
  "key32": "3sfoVWCJYUsnaSTng6mrU2RMkry2fpkRvKEoouXrphCCqYCfx9AopA4HuNYKZNkqUy1DupXYJytdkPkKTMTjLaXH",
  "key33": "5HoC4iDDEHWB3u6SyZEEJydoiw4T68xJnVGjjiziFNHkAzrUT93VZzgxG3n9ZerWiB4EURshteusGrqKgomaSjee",
  "key34": "2B3DtjExoMiFx5UPA5fRJaQRYkNUEa1ouE6GnZGcLztqgfyx7VNT9iwzh6iD8GBnEQV9bp44AYNJaEKYN6p9m5no"
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
