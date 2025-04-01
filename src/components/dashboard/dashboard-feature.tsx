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
    "5ndAxz1Wu4qcNvkWU7SexyCe19Mon5ux9Py8RX8ZcyLXcmmWJ4gPV973n75c2QWHh3xhSFEkA5iQj7qJJ3kW3hnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S4WhwmAp3bpC9MpNdgGQLph2469UhyeZrajmZuSuWjD95miqxi9vi2Xjc5Qo3kpYbeGGgq91VwLiURPWypz3gtH",
  "key1": "3N3ZXTp8txhvqNAhEgsN8yYoYRCTHj428CtJSowh5cW4BgkWkK48W8Xx8cE89itTLwBBh6JfrnFyV9aMiWAy6Go6",
  "key2": "2pLei8QgkqnoRFaJSSPd8f2P5wFqFcC99oR1HVnEgiKQjeVo4XY93YjK7YXPyyPrv1x7HxwFEAxrQSGMRRLdT1sM",
  "key3": "44VxGXsssfGFaPqt4TTf85yw6DQ4JLKbEdawydVRJA2biwdat62DHqKAtE1x1ERt7uaXhrkiDEL25tMD6nMSFy31",
  "key4": "28k9TcmGCTPqMutiboTrrhxX1tyHc6sBStqisZEC5EWvM3PXMEk8f3B1oPZSCUTS1jof3a9rkugoZSkEQxhQs4BQ",
  "key5": "64Jvz8cWBUVM9MfNURcZMmwxBp78kRFpqh9e5v8FoshzMck5rx1f8zkR9PRQxe4bs2q2fYQQZdBd4T4xiWLkkFYw",
  "key6": "4tqpSfw8ESdeXzaGVuCfd41R7Jhz9SzVLxbeajZZuhge6cWJaDfsdz1WoXyN6xL9K8wQRXXYVWyX2htAwSpanXgt",
  "key7": "654GR3kmESfr5HkZYwCvEvZWDJSA5Sus2Rb7x4Rnan1SQjrJvSXkWWkz2FdShLKDgVJAGTBJvvSzvpoJfuP5rdmF",
  "key8": "qki2sZA8ZPWmio74kfnxw8dV7z2k4T8Y4sXGPdWksVGdePPSm3GEz6MyzkBtxk2VzoQ3vaLBiVrFT3HLCgnrUfN",
  "key9": "4L96wHRWFb8h1iY53q9zWcHAFfCrqRrxTsEZJgv42Xkx7TUmF1qXYymjTeA1b5ZGfVLn45NeqAVQn7XrFYfKQePZ",
  "key10": "4JAZm1ypE2CxssQSJ1FBvMSNjn7LGd61coJPDYcsKAS4coXMTrtnTftGmdWW1ku2ZbF2ZMuUQGfKzw5CRKpmbtkL",
  "key11": "38yHLYt3qWTgP8MfoC1AoH6hT5eRcoQUeqCqN8XLHTK1ABEKf5vY9AdBwCkH2tr9eCYst8gaPKZAc4XTWzpP4pQy",
  "key12": "26e7gbjBGnmrfTMtahpc7z3fjen7uKWibGBVo6B7t3YRBBXhRpHyqD7ALYaFrUx9u7EqbEVh41awWkbFa7ZAEsRg",
  "key13": "4vmwcnU8Xv7DqMKXPfdKsMDP316RvPXbc7b4pshYXxd92qW77wbJG2HM3B181NvZUW6CtrMsEYi26gH21KrPmJRF",
  "key14": "4JKaM6tG14JyCJP9BUmTaP1SN9JAduiXtr3hSJrG6aSNruzoSbhpNck2mFNLvL3TJoKsNhpd8uhoPBY2BmnE4xWf",
  "key15": "2fzmRTF2EDDuyKkRmNSCTzF7kJ8GGwDTsaR5x4KgWKJrFgHgpWqN2PNhBkDQyKf6XJjpK8Jx7JBYWAd9dP5pSzS3",
  "key16": "5rhnUaK3cLySfLP8ye4xQfiBCax4UCs3kiVMQDBkosVbsLbth1oZLfbbvzT3YzRdoUqoGiXmbmeTcf4SceMShDvs",
  "key17": "4KxSFMzEqbPyjrXHTH8Xb48otcgjcqckerLBJzfCWEkqf86vZBwgWavtiatohsweNLSKUJ6KNTKapRxcLqyBt7QN",
  "key18": "2wNuDRi8HBXG7jr5C7KFcN7wZmK5Qpu4czXQLF4aofX5WDt7urh5vfKWPUj33388oEyZu2HtBM5c6trYCTWwHr5i",
  "key19": "65FYr1Hf1Z7jwAVzZitnWDdBuZMJTmBnMSLoHSNqvTikQsPVjhnVqNQPpojdgpkSMdRpaXu27Cu2AsNx4eZTb52K",
  "key20": "3uU9XcTFrrT8eSB5jUv96awtUwakbiXxjcyzSGmaYwMwRrHKAXLHdbxqmmFDZXMv8EqdATwDuHjQMvuDNJ84YpsB",
  "key21": "4aaD6WKNCUYCBDa5ZHEWK9dpZKRJB28jqAHH3LDhZHJbtNmbpmN2QmsFiKF3v5TwcYwzdLTF5kXdzWaSF3u7vAaY",
  "key22": "5x5CM59y6tQ6E4ud89iJohsw6auBKuBJZwtLFPKbbPd5zaZx72rJVbTjt2Rfwn3sc4Vv1Wr1hpxNeZ8tHtoNwvBw",
  "key23": "3x6APNwouu9nMsMjXHLXWAYUC9F1Th9Svh5vYRuqFjr42f7UMJpP61r8gTQAGeS7Hu8xcRKuYn4JhiBcYgsuYT81",
  "key24": "3MmKSDeccgHfqsrvdz89CTUK7Ja3fb7xgaQHCDS1qh38U6D7htYqtx85d8tFrp3QmLLyN6DZ7SmJP4NMoxuKgxYq",
  "key25": "3UKYzEC8436oHNF9ySs5Ch2gYwYdnN5skRc2pk5K5G8Diugy1pMVrdEeRdrZfJ4uhKxsQ3w3s6GS1RfJKpAGZ4hG",
  "key26": "3SWM6BLG2F4Ewxo9ErPDtSyk7PMvYup8xHD61W9GtZsCryqysy4JvnptbMGdhjmKiGcYMm4nHhbfnB2jSDRCmfkM",
  "key27": "5DfQ6NWuhk3zDhHJ4NHGwjmBP8xAE1Uc7DcwVoXpeo53aJuT19Kwc5pEMwyX21oKHsg9UkFn7A4GeM2gUk28AvfD",
  "key28": "MCk7mw2ZACTjfWFSgMwUmTvMfkcsiE5kkRuhomACbiXpUW1N7WbG1AqTY4mEtDLsmfvJb73zT9pDFp52nPVqWeX",
  "key29": "3GzWbMPXtdq9jRuDCfbVWiP94DfeNVmugimLVwaNZuY5UynyJGNrXrkFH33oDt5jyYBWwKhTcpJFVbDkDjGzWBeu",
  "key30": "5KFzqkVALU49QScknMtonNiKXDpGFs19WYUX1cdmvikiKFecutxcfgotFZK4F7514dcNbJ5gjUo3HVdjsjNwRyYo",
  "key31": "5LHZtzfCwbYiHfng1aPsRXrAaRbyoiGVJrU4s1cNiXv9Qfm9E4p7dmoUto7EC8W2HKNhYAiipfipp3g7qra7bqVj",
  "key32": "4dXNQz7hyVNrArWZKvD9jDrLj6tdpMQ93RzAwDHWYBQs9cvyn3kPQDQcEYPMFvEx6zayutMsYewjAm4Dxq3QuUWi",
  "key33": "5zUZS9foZifupPTJ4LcxuAPWqUmviQ8CUP4P9cmsXjcckgkybg7jaFWJAcY7QNm7eJBUUEUyJFmwP6KaQYq7sVm9",
  "key34": "3rHpNvN7fwN1FdeCmt5bAfRTFiRwFxX5irnZeBZEFZMPimu4SJbXvtUZNyVXiT7Kc5cZvf8xzqVRkUEjG8YJTgRu",
  "key35": "37GswG353ydwJLkw4pmMdP1AzCMr6Zw18HkLSQxKLyeGcFQ5JCyS2ND2YAsAVz2z8DgLjfff6VEP637KfrLhSGrx",
  "key36": "5MX2DZ8hrzQLR4miXUZVTGvCtm7pgy15c1XxTucH43KuzpytPQgNCW2Y8L3RzQvNjDM4c6o9ot79bwLcycscEdtK",
  "key37": "KABYQEpCxbTcX6avWgTP2djHmPHYuDquNKwQua4Wkm6PWAPzXWcA75Tz8pb6yNrV1vjCV5ctbwbrsMfh6rB1Dap",
  "key38": "3sxtgVfsP6DzkRXeWzWxUonr8L82qhTA7CkwKoj6CfedCvGYt8Nh5PR3q71qpy2pq7Jobyn1SoE2bG3TLH1PYrGA",
  "key39": "4hyXV4gnxJPmsA44kZd6oeEYTT1kzV31RHzinJZSSzVd7zb8pwR1xg1tTtdkbgQzyvEBaTRA2j4ydA176NJCUbsX",
  "key40": "3qXuQupxkxm2UoQ5CwZAvNs8sLWLqtdLZ2QUoKUN2vCQ8baxsNavPEJCuq3EPcyH52uV5QxP8sEX4FjWCLB554u8",
  "key41": "3hA1g4XdTnmfe9pxcnhheiZjB3dikGz8TjeKUDtyDubFCpCi8SRUbizGZVR5tSeLFLZYu8tcqt2WoEREBnvcaxks",
  "key42": "5pzYpGM7aB9ac992m6UdL4mNvu4f8dhFQMs7NPEVopLDMSvU5rt3wLQTsY72Vsrp5421GsjVdikM7mnu1sFbpPim",
  "key43": "41ay6yHYQDAacWcqR7Uq3kC2ugeRYfYie53W2gsQFovRVq3n1Bhmw9Z8oST2XNyuXyhTr4L6r3xMwAA9QvsZGk5u",
  "key44": "64A9Q54HjVdUfjinYrUJEHi3qqWBazqLChu1R592KyQdMemuaVH33DQ3tjB78F61VMnSxkhyw6ZRcfBBhKRXWx67",
  "key45": "29A1bNiksT8mTaPQWwCENxaJEQSenu3wcQ617AQm9ZzftdgopEHb2Y6B19BMjHrAZMBNZWsNofsAb6KpbZP6qEbw",
  "key46": "5T1ahfAursoxd42rcBwdvbLtRgfAHczTqHspcz3wUh2Zs2LinosR42ZyNDq7BtLJZEkpRf7YC7hgL5XnpTJpkyDm"
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
