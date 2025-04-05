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
    "2DQT5LUe9HMwE6h1MeGv2gSDhc4LTJwoi1FrTZxCzHCq5MYq8QXnzgZRqu6Qvqd3ux4WhE2NwKcRVR2p8cjTfz4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v9gavtFmbmJdBvkQqA75RsNKV5pFJmADgSPPnx9KubLdgHRmYPTePQa2VxPjUmgy4BsTGKMGSRMsC82CAkSVPtK",
  "key1": "2Sx1oD2AAxbkLECx26EyCpBgkipB755sD3krSPvkv6YNXHsxxGw4YFAaRbvsZUYDZmqEKiqXiuyFN95qCCXtAMuT",
  "key2": "2pzBAWNzyTT3TADj6kvujeTPGxhKnpaXF2GugNqbfc77gWSwNkdoMQRQb1bCNzDZJciDtcVdgFAtqj3ewq32DYvz",
  "key3": "Yrb5arEB63jHTHaPRGGrN3ov2LiuAUk1iDJRKHVmmxJntBoP7V3QHeJBCZRvNAPz42Av9BJScgC6D3pMkBmaTW8",
  "key4": "3faVZDVBdSgkPsuAxf9w6vnYynqhHMnvXAbb6ePFG95niV4Pj8y6VzWAsALxTeftDmqWXfqVmkTMCGmaS6MfZjXr",
  "key5": "qhEiXiDk4njnHQ4sUFtXZw9rD3NFqdTLMyhMkfBdyaeHR4p494LWdUWjtcY94SL9Hq1wY9LzrgoG6FnH68a3VhU",
  "key6": "2KQpB3J3qeV5TBQ3ZzVUZYnYNQATtbyy9mRGPrWS8kpGP9kSY1B96NNzS83aVjXHcJdbF9DNtMqZDKz2UhWZf3bT",
  "key7": "4iFi5h1w1CrBAiurLQZz48pPV5aYPFPi4st1VV8nSfz97tyZ38ydkxKr3amavvGdf3dH4kktQinh8rjemJMaSRTN",
  "key8": "4DrMGWKPjwsEgBiETN8hn33jGBFcJfg7US5RAy3Dw6MAGH6aRE81CTh7UnhQkEK7tjpgzai8FBobWiGvnHm8MGW5",
  "key9": "2iXdikCExEKHhkoCyq8qrWbg7begkgXf52j4h3AUxtKd8GquauZC5AjvWhTvpRWazLTxWBvm7YYZEvaqgMxsBTXB",
  "key10": "59qhg9DEyNGQMp1qw4TzmzkXMUTpxszZodTc4msriYLqJEtNRZruQBxPwNJxyRX8Lot4nvLg2fvwkLyWd9tnhDJd",
  "key11": "2KkcGLNY58uKkWMQW6sLJVtjAZD5GWvEqqxemSZybs1DZshJtkRScBnBohQTyBgX5EdaPnjeULBqvEM8pmDQp7Eu",
  "key12": "3dRmBWaSmE9ZL9kU98LSqum6CpevNHyjaCQEudJhKGjea6zEgsqyPE9stpvCoVbNcs5Tgn4vd1LaVZrYrBaEp8So",
  "key13": "rYQzcJU9Pci5cQcaNSVEck98ajMCW4oXwYm65rCb8e5yK3YfnVM3DgaMxjrjFqV7QRdehxP4gn14yn9Hs3FDFoJ",
  "key14": "24xSjdrvBx4Fv7iXH92uUpALghd3QQGSpimsQNjUb3RTmAdeWYZ6TcooSAMWLKtY936GZw3Begs9BufQeioQ6CHp",
  "key15": "5f6zs1MfLQU5kEkQ322jghytdhno8bRN22955y7PBmer3Fh4p5qPLSAR8TJinmVrncJTMyk6AhQPAKcoMLerY1ZQ",
  "key16": "2shbtXLNz3PV6bdcedKaqjHV9EnMaUAe3PKdEVp4KeCmuSYs3NEToSmiB28SzaXCEh5bQpnaP2UzRQPrUqBiCcmM",
  "key17": "3CdVvwrS6JtRitQs7c33pvimEUy8bEJ2niP4eAYyhc8c6YCt1GNpeL8Y6bG9nCHRoqJ44tQ5WHoB9C7Q1hU6SxiX",
  "key18": "Wq65vn3mZBYMHWBiwhAsWPMYWXemHpwQ9QRpgWTQ1sx3TCJ5rLmqsSQQ8z5Ys3eJskRc4vvJnwjezyFncCn5uBd",
  "key19": "2FF8xf7U7fmGMXNBoJ7VgZ3KsuQBsb9SmDb7AbFzitSXCtFYn88PUdXwRqRtMVavjRfXidyxp76WqwtiTsYMHX2E",
  "key20": "54iHxNzmqDjQ7eftw4FtWaqo4g2oD4K4c524G6oHdrzofVnzgg47oN6fdFWdanomLWmxjKoTepVxjJgKwFEkpyGT",
  "key21": "4qEFx7Twb2on5QkUtCa1tzZ1po8yTpqTDN3BLd3WZQU3e7MhVMSMJKahFgiTAsrTh4yjUbYyYn9jhCqbazTwZJeK",
  "key22": "3BGTQ5qCRrLLConHzm44Xw9uAwgutviaVttXTTottptiQHYUiHPWmZ2gC4BUvHX1Hzb324R78ouXgv2HJY8KBkkN",
  "key23": "HKtxpCN2FtuYqEUPodD1bGVsUssGauw1UCZ7JGYoSGQfnTbJkeF6c7Nw4WSRW1taLKDUCPjw6jYTS8ssZc6potq",
  "key24": "5ZoSU6oWtRCTmw92PZ4CMLFBzX43fCb6jcAN4h7SojyT1WPL1nmJPLfWWmZ6chmfGcTR1PC3XPUHwWQ5hvtomjBW",
  "key25": "XTNNRHTEykK1Nee3xBeCvCSmsp2YvcoUiWY8WBHQWSpQgsktxpLvXCAmrfyMYuHW2gHR1dMsyNYUJqRxogio38F",
  "key26": "21wVuXtxS5qPF2Nx3XdwNrgTtU5P86pHFDC4mAiAXBsSjvMrRLQ44A5gM8woFUzgr3uw1nqMhzbdAgRbjHPhxvna",
  "key27": "2dSPgBnwwKKG3sKS3e5aYZ7fPeHVTDHDaauAnmXwuTVhBXWgeNJiP9yY7TEG49GiyEtERPwA7VwaRc7UFMuUqpkA",
  "key28": "5KkU8bKDa84CW7iid5mEhbmQj9szeQwfFork4oX8CbWS7znxd7Xp84xGHMHqzWZH4vRcoZRXRwNVBndRSvMg73kG",
  "key29": "4GPNAU1nk7Ku8mDunqnkNDyxGGuoVEyCfvnwd7VBGpgq6Pc91QNsJpcd2kduNdKa8yCUZnBtpjcioc9RtkhqTvoV",
  "key30": "3mgctcoa7YkEAEiG7nQX2GeYSEtPPEQcm4psTHiDErHjc8dWe72aYJ8BKoYkoVM5Ve2hxpUNyKcoMA6XG6ifJmyR",
  "key31": "5F9MqyDESopsCHUK9tGSZfZtnSX2xo7SHarcvWTSqYpumH7vEk9d1oncSKtkA2SqyNMjsWeEa4cji5ZhJgcoUXNG",
  "key32": "3SWoyNvDFZ7wfA25XYSJYLafuoNbEefLLTvp5qbdWUbsSnbwwsVkN5v1nmtggjr5kbR3JJegB5EGULboYJiiBDyN",
  "key33": "2omErADkmyf9qDufd2y4efihPDmBRPAd6WDvU5Feqs8uviLqamCQdmd5kkMLUVmj37kN3SCWFQPnYfgjWR6PiNqx",
  "key34": "5XHtWzW7CyfhNmCMPU2tCmqYT7Bp5N1z5PqEzsdSTM6WEqjYW1uq6MkYwuHRDtH1AzbqhfcYVdkZ8VmqBndfMUv5",
  "key35": "mbNEz6ga8LkpwsEMZx1GT9L2hDziwNUQKQssDXAsAkJPAKmAvPzimcd29QFgWAm8oJjzFZ8J4XsjyGd2hoyntCQ",
  "key36": "5NW7wBUEhWCtjVZTsNHj3jQTC2gF4wWYVB9fsqebwzep9dfSZ5zAjySwvvTPvyhjmBbYXRmLv2vum9deQvL3PHLm",
  "key37": "39w5oZg3WTmFu691fq77cRkWMnUtb2BQ4JfTxwed1fzEBJRUQUyGf8iccXyKK8stmDcSJytFYiky8pz1hAXGk5i4",
  "key38": "5pXgi4oFMiCVL9HxBdYAEd6HvW5BAEWwwGqpbteRqKYziWt2yFsGw5THXVwcdqfD3VPqqsY2Jdb6LdYf5zcspfkh",
  "key39": "3rBbmwyCkWkhnWToJasf75omXdwFqGE123U7zQyN89VnMbDVtCvwsVty41qTk44BPTd1hWanWqZMgMsSSWNcA3EL",
  "key40": "DoMgXy2rS88sVPcrdhCWyp6iQeBdhiawLexjpVnhoadv9ZJ9Y95AJ5u9Z91LvWwVY5oX13A7r2Wn1tiomtXg3DF",
  "key41": "46cnzHXM7G3m1K3Gi34fbYe5n4WepFzVB1JpUfTE39TCWgJdfBJNw2F723moae4fxe6qS4W3nJqHi1QCXkK3Dp6T",
  "key42": "2jzv6vvZuvPjYPSDuJSi4gqXRBAUWJ8QP3jCfd4R4zDvQ3aE4VjWCgth1HfHKY6Memzs2eszeQY8Gt3oNzsAmGqC",
  "key43": "5VDx9cNy4265hUxpNeq4gVd3yCVTGhmthP9wN8svfSpfCWFGRoqRGYTR9DBhbf1PF9PeqTJGaGuqpzKzdeEPUmAB",
  "key44": "4yMZixqbDVAw2nRrKcRWXDqX1JExaaWJe8J9xNk1ntNw17cDxxYVg9J1jV4CuRgthRLASkrpNR9vzNWs1rEPUYe1",
  "key45": "3DhWCassdHFnUAVrk7sc83fVqevtfoyxL4zxtP5fzsZbgwnJSGDNGzRHsiQwB97BD5ANSsPQ2bhtc6jn2ST9fDc2",
  "key46": "3KUHE6n8qX7MrMhzdyvsBuLzSF9mcisxgbZ33uggxMVqXCHJ5qrrHYQdAD3zSJ2Pxq6FrBddyvDjcRSmFn5DBGNf",
  "key47": "3GSDGwxtfmpphJUJQa3THXtYjcD4SUiGVBYXWfs4TArYgfyDLtSaeDeVhszKsQ9FgcG1EQsP8rg8EysBARWEAxtK"
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
