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
    "3VLazfZ7yAPRBjbgf48pDKWXF3PVzwtrSmoRRRmUsrfKjW2JyUECt8TKSiAr541QVLq81Ba3jTYW3idcbUF7N9it"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cud2PLanohHkKmUNBDwf2wbJdE2NVLJgofBoqwbM1boqoHLDBjg4x8GtRPaczsBMGUTwH2i2btJKNtZPkh4QTzZ",
  "key1": "3kogJuPnYMHqC5kkQyfQjCc744Lu3d2MrpVzGQr9PKVmmE7QUxgPH5j2CJyKNs9tktDmezu5q1csJUuXT9enA7H",
  "key2": "298NDxxM2yJg6hxnYkiYKb1y4LTVwgYZoA5M4zCSC55VjyPTTmj5pfamv98aaBD3AgYEieYP8yjDmVHTqBg75GCb",
  "key3": "joW5voK137zLYiTqPdCoLiTyBTJJCMBzzqRWbbYN8FWvmvPoWTUHBhXAJhb2VNu2rGoLWxmtncQDXV1m6RDobC6",
  "key4": "4avDbesVLWLd45zi5qXoq5qFVemykdeNAMVuNFPQzmW6cx4gfsrvfFzmEAdkXxV8cK8q2MGiLrKRZG9XR7euKDkd",
  "key5": "5kBPh2jyz6E1K41cUjmNHob9fcLL1uq5a3rh9EL7pmW8ugai6MxEGkSBaSbt5nwSbocQiHQqKi2XZqeouiGLbKcp",
  "key6": "3r8GgUqEoA9AaTT7pSgLZdmjox5vfmB6QTAu7yTybkG6j98pMupfJ8SC7RtGUKfWUY7znZZ13GoJHfEyfMbBiud7",
  "key7": "4rCDkYoYUEVhbHK9NocHY28Cf54UmCk1MJnwsZuiT8KaMSBKfdjF5YTP8NTzoYDX9xhw7L7eAtHnE4axfzGLbvsy",
  "key8": "2zXMCkKycUmmcjcJjLZHtcnQmxUQQeWksk4zzeYnvwMqV1yA5dCgmxMkr1N26brDeUnrqHJGsipA9ArbFfgAkYxq",
  "key9": "4J2PaLXdSK7PN95wQEV8Zif6r4q22WikhRSjMeBZCphCrsgHN5C1CLos6AjqT26zntcadSHieN4TSrWwgV1fKVDU",
  "key10": "2QDHAbKic7GRZXW6V8hCdbVUeGea4wbg6PrwiY82QNtdAq1Fkn1gFM15jssd5uHiWFrEdbx764f4aVFPZxv48fXN",
  "key11": "92ZAzUaQYq6qk4FdXwQxQckcdrJhFXMpooYHmhNEEmGhhT9gnasPEkXg6dbWp49qCi9LhFsDdRUYVPxBUkBUN3W",
  "key12": "4S5Vm3xoxggaksmAdmsVMxRJXrz13DNW75Ujt5KajGDW8WWbdUtjnN5zgRSFt8Mv9QK2y7FafrFXPkJuKHwLmXvV",
  "key13": "49SmEs7E1DwfV6EWUvVVLQJrSfskha4CU3ACp6xpZW2SUcCLRDGmzUU3gotp5N6Pdep8RcAaKf5DZZij5nZKhtpD",
  "key14": "5gNoHnXEQXuCtncP1te7da241VwgAtekwycaHqt81hGZpoVgvWrpmNyT4EXiHknKpCxasW8o3YwDqvCcyi83nvN9",
  "key15": "5Ng83sSfy6dU5MezfnBf2M7jWPdf6wzdhgbj7auZSpkxUYVkFkF7kgBpBMxHRAZxc9Q42sWKZ6LYr4n53Q3mzT5h",
  "key16": "bkdEefbVYNLGobaQCSEAozSSfSxV3kNAA59qffZVTbudKCsZHbAQ5ZpvbiFYfV5jrGoyQ5pZnb2dAsjecMz3Xab",
  "key17": "65QuAGavNKBDhr6efCKjpBr9UtncXYMtUNkKnfTKc4tMSbaBVGnxEnGSSAK3deEpkuB9PHdCA6wknmhdBL6mVWCd",
  "key18": "2ewJg5W3AXLn2hY6TxGLnMimiMy86Zz92G5fDtHWHkKwbJhd3dKTTBZ61u6pu6Xbr2A5PsQv3TXzT19v81mZYxsh",
  "key19": "3dpRzvnSzCcvbzD4Azwivap1TuM8GBgMRSNxsr2i6uaBjb21ujAsqdoMXrSXCDteVW8nuHByRxKouT8h2pzv1Qgk",
  "key20": "soojZRxisqVGRw4uoD6D9VoaUXYazpE4yGBjqqngmXJTgjafSz2FkKDwa6k2p5JPDmMEswiSsLzoUbFordQQLw7",
  "key21": "3NfsiBcHMjEFcBrH3XFbmQ1pCVmcyRpmRUZW56S5CvSqjKDcjz1zZ2ZnmaYt31GUxPaK7LRbjSRkCC91XsUG9hUX",
  "key22": "3NvT5ykgkczpLdcErMkhaPJawx6NYCQ63Gxwe9Zzuq5X5FkJcUTxq2VWgqSmBeDL7vZoDL3e9FAppA3fgdi76BfC",
  "key23": "3Wmo2N7xA8kX33sify9JV8h5ppFuhZ8aZ1ESebSj67NY2BLaUseaVEMYFc8e14roeTneVzspqGetmTjAeaX1dHMH",
  "key24": "5BjAoqLJE3BuYQ5x16tkr6Y1xc2xjT8FQqXy3EB9DDhn6z4UPx9JMNj4YR6DkRjrnuF8GR7UJMSRtuxWP5SP3FYb",
  "key25": "3C7U3npW55BapQBhgS8oz93sJZmudLRnTpso8Z3KrNgvXjoU63XuFn1ZqGbVqExLjt54Rbp4PL376YE9EFnmKvht",
  "key26": "4P5mF5DHRRhdixtUBERp3oRWA4aQrg3MEVK8fmxTTkdhwdR18F7eMqfE22cKuU1WtPVnKULt8HNtfynxoxMnmMcY",
  "key27": "4cdZBpREBavYW2UyDYSDk7WC3sJ5AoPbs5q44qzvAekkYyhwtZwBqmN73b5evUfaT4c5s3DUdvtSTXznfTVFmvVG",
  "key28": "4k3g9pfpRg8deNVDCSEciFbYt1KHHjywq1RThdtKr2g663ypQR3tg2qiYgWb9bYcNgwvosa62QS2aY2A1cgJac4n",
  "key29": "qN7tJsTygue7GEVG7vRLfcGw7PhoBPNs5YdVD1Zjeujcnp3manABgdVtwvau9vKEavXEmnSBjEC4LgqfCzhw8KW",
  "key30": "5ufXaPFM5cPkHk1zajSVUQ89rpyHynNEmNBcybt11JpTUKT6C67YPfUjdZ5YxkdoapphQguoNebZ5PgMVVm67R93",
  "key31": "3RYhSE7TJFNZVNG5TqgCFBJemm9t3aiqN75Kg73W3dZDSDHcc5bMqkANm2r3rNVRTmw2vJqDNnUaEmcErhM27ySh",
  "key32": "2ULxuChb64MyZaqAHvNaPR5cRvQWJyiEK8FFXDHsmiS7ka7e3tV7SatWfXWs29AcYFa9E896qSUBwh8agiKkrEJV"
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
