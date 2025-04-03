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
    "8dKqkD3sWADKXUqE3p2BFejaxUNfexhMkxN6VJrHx1DT37dBvd8kNXDRbWDmmgmrQTTvVGJxnooYBM3AyCCsfZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NnxbnZ84ExZnsU5jgX4F3VKvtwJZKYw19vBU4dm4Y3TUL1UMB1ophKTTq7xFuii8ow9h2JrqA9E9X79VUzKThAY",
  "key1": "qG3c6tfAmHHaHxqNiyf81quohGZsMarqGH9nRnP1tuLZn8snyWrbBGwahmfX5AUjrtJJyCaWHzjnrtyS1DzpNMp",
  "key2": "3oNN1XdHjAeEYUdWTarFAfKbF4EvcktsUmAyv1qTPCwvYVGtdy2uc7Xg4nRDdsh4ap7YGFw28PkjBPKJKMn44KZS",
  "key3": "55KsvDv2wXBKXQbAQPxjaRQUmboZ198DpnSmrKJMZYcdUG58CaxxyJ2gH3sDJyiU1Yzdo5j7RUTJBmQcUB9BYeqx",
  "key4": "52PHBXA1cMsMW1FKtfNcWEWnW7AhRHtuPRb7BDzdkyWLD3vDYr48GkCSy3ytGwXVEMZqWGG5sLNhKjzLbntoVeLG",
  "key5": "2FAiRLr5aRhKhYRnpeckT2C9mG3C5bWTPe9pPzEWgTzdEfC1JeLEePSKVcAzFeg4b3cVR8eu6ChWgxUNpRvNx2Vu",
  "key6": "pteR6EjnucyCo6YdiSSWvjBPzQTwxiNDnGQkApkybZXRNQXiu7hJPcYWirLTs9sRS37jtgXjrXZ37GHnE6cFtbX",
  "key7": "48kLKMhvkEQ637EzqnoxdwFjmqGZXtcD9QyejZwUaGUKjBBRAjfNep5eMZ4bezLp5aQAJvw5vdfteQUgVStPfU9c",
  "key8": "Arxq95cee1qL7is3qC6bfaAxreqiA3geosHUxZjSuFWzkXk85ZKgni7gRLWsK75NhZ5ypaiDK4SLE6EvxkF9fLP",
  "key9": "4kf6JQDxmGEkjznmNvwn2xHYjkYFDg7rhvk1zrsyn9YjfCdBiEUKHnke21Wh1YhGWTCsp9afE15oAS4Lu8Mw3Qaf",
  "key10": "5SYSsPhf3qD1LaoBz2FfAuquw9Tc7cC87X9WTncrcKCDHDteWBumDjm8SmfNQmr9s5pBUnL2xv4CaVHFDacJfRdY",
  "key11": "2cfvXmB9NcVD8WksFreHihAMt3KXe4Hq4YsC83f1fL6EHQBnWoX5kAUbM6gRdoRXVisiiRvRjekqknbchF1Z9E3a",
  "key12": "4dWuorBbE9CQi7vHz7dVy6hkaknCG6dK9YVqMhETSU1Cg4zco5cEMLixAXSaHhkoX4CkChZ5Y3mWHNcSEdrdE9K2",
  "key13": "66KaaTfG4SKLGVfKRh3MSQd2DBvztkvZ8ZvjLmMwa9X2BWfKXsnWU5uXjGZJ1fE2Wm69pRx52wj8SoPMdwJAgbnM",
  "key14": "5PNCvsSKYdFQJatPrPLc5fiW9tExbuAJi7FGiboVjSFzuz6wNFutTKb71X5ygzEZQdVCCyTijVFFZ3zQoZAXrpM7",
  "key15": "Zc2KXJVCie1cxRr3k8gE3q1f7q9Brj1pCWM7A3szyfJVt2DfSG6KteemhxWfYT33UgZuVH3zmBBu5XpgEA2Hk1o",
  "key16": "22G7DrH4xsQRhifB6zW7cYVphJKFVCGVRiMGWiKVq7WxLgm8fNPGaZV6smf5ZL5uJMBPJuqyAA1EhfaEK3u6EaKA",
  "key17": "33fEWtqmDZQvnDCgHWebTaiKxy6nvrDAQsvfQrCDGTBHLZ8zLA92n8JfXUhmkUQvNugG5ZzKg1qFKRE1B2r9gMSa",
  "key18": "66qJm1QTSLv1MLZ5bzzniwAr7dFE9sRgMjke4jBMTZJHJSirPebgH1fR5A827vAsf2Nmk8Pr7BmGQoy1ENrT1LxQ",
  "key19": "4tMHioM3k2twjY1tonrbtHG6PqfszhMQp76SxMi6g5fmnBNjMN8gyRAHrgw8xVmTC1B6DuKKK4xCoTYiit1HCFo",
  "key20": "4rdAXxiRcUm6AD2p6XVXA9ygJwm2AKB37X2QDhHucTb9Win6LdeedhCmsQgY4vpG1X3YtTpDKEtnwGT48H53owtD",
  "key21": "3fexMVdkmoJnyTiBL2s2wisMuZ3TBZtk1Mjt7h9Yi5YuMymJdxKCW46wewMhdwAdEwPWML6P6EhtFVUizKcJnuFo",
  "key22": "27xYuR64yVhjDRCZxYrYiz1FGLQS9A1HWfdBHwrCCT8fZXrJKKSQ7W4RN7pH2TnZfkw8ituxL5kW7W8pcG35S4cv",
  "key23": "3Yx28TmTwnyoaeyvxTGWW1XUqEsmVNqAUwRDm5ms914ePeuboktCX5CQ4gGTajAWfwMDX5zcS4HhVXbgB7X6A4Qb",
  "key24": "3oPQzsvYzqhsLu4yUgzT6wYmCJ13UCWptKT9xUNPjrBnjrECxTAQVbUdozMNbAjwSAh8qomzrLF1CLw9USjvGrrk",
  "key25": "3K5gvQ9GhLX6go7oYMLGN8WpV24qBJWZV6biThy5p48ND9bqf3XstyEKa4hyo4PSeoQXv4FEEs6YH2CdJzhoMzms",
  "key26": "4DUTtUV2d3BGWsE8A3mCPknFoB3xLyUgbnQbQq8uJPy45Q9b6LKEdErxSrHy9bLShbkVAqdYPcNDYRu1PmP5naSi",
  "key27": "AQSEKz4Hr8kDMRSPbnrh6GUdoV5mQPX5VvQGYzqiZhyNVuyLwSvWxjs3WUuBJgBzT9evdfB5E78o6AuScHA7Giu",
  "key28": "58rgGMcM5tw3SMNQx1S4nMhcKztu3ExB3k27bjqANeC2xCY5v25y4hkTJ8A14y9Sd28UdcisvTJRC7cqH4qBb84",
  "key29": "2MgXDFQTWnVVFQp1UvWy7Zhgx6yLhhooHskisgHFJ4nCCF36xsuBV2cQEmuXsQuCeN8Q6fByxgeXQPBDrzE9b6kr",
  "key30": "Vx3RnLZxmhG9tPdB61svZofN65RqVDSiFMdc27q5a2wh9iTj81cvnmsqGZ2hoN8qC28mcdmmQt7GXpYHtcBEjXp",
  "key31": "4n76j7LpkTbCjTNdpAMaDk1tyykSKJy2iADRDGTCUBPLWvJgGg2bas548M1N4FGqqB9q8rC5c9KHmzmmsEonaGXf",
  "key32": "4Gwhqm4THicV3yRg38XXiJDn18yBiX8rD3R5RfBqdDJtKAaem2YXAh6mfA3xFiwfoeE8sLWoPv1SFVmSohfuw1kd",
  "key33": "E6K1dr18mh2VidRdvLgxrw4bZrrizMY1qVFjgXthrFKzGzR2u2Nhj3ovwYDSYdFSv9V5WpnVgFmBmZ5BM5LZrx3",
  "key34": "4j4jBrEGvyBQmEJQ6G8kSFjP1Y2nJpxrvetQU4JCwJveWWEksXn28s6nkk4FTP8sXiXbhXeGnJeMTxhkrzoiLeKG",
  "key35": "2AwfsHmDb8zp2Aj1x7SKQeeHtZjdcAnvSRDQJNfQFFDZJbCrP2JX9KjtMCCFTdBEfjaf8Xhp6LMWsd5T3UgtaFD1",
  "key36": "3Euu1ySDQY7j1wP5nraxa2vZNkAc3XYLcgh7nR9F1hQnidxm42XswH1eYnxiCZduB7PuYnRpH5RDpf9bnF8zxbMh",
  "key37": "3SSgRvQK7i3xEkAsp8Ugn8i6mip26SvHyS1EzcoTcZjSGBuSiDTCaZRvy3szgMK9VQmi4i3oRjtzG8rY1po3rrLe",
  "key38": "52GUdFYc6kxRVgQvZsVSuZLaJJJJEL7Dzxy394cpK8S5Y6qk6mxDJG2ZjHV3QmU7CKhquSVfnUK5J4vcrXwWoQBf",
  "key39": "2TkXwDpZdZweEHLFA5D1QN8e1qKx6XdjFn9VUYkNM7ZQ5JYqjeVDYqFrqHWXUiCoD1eCNegEZMpstmbigcwqFY84",
  "key40": "qpS6qAg9p4bpzDnc3nVuVtkYKsg2fPYB2pxhyP8CbtMTW2hvWjPL5URZoEwR6pv7EH4uEM1sDF6gJv366fcWk2J",
  "key41": "5GPGJe3TLYpnxRVUBnDSF1U8SsURqafp6LzXZXeTjKVirD2ZGHPhEE43KBXBNnKNPbwip5ddHGEsfBjm4x3p31nc",
  "key42": "5jUuu5Evy9u8TqeCEKZgPjNM7Bzqdbwcvdj9wGsn4bqa5SbrBPJ83gVpdnqRXmBY5xtyUNvYXyCKH1ShHpQm4nKj",
  "key43": "5yU5UzrtBjZswtH2x8ZKvLkPyRcTnukc772WTEmsCfp5dsSjEPnwnsNHEjiwHm2AKMjfm5tHoG6xSy6pcds81hTh",
  "key44": "4T47kwqYbdAixYkcp2fbGbuwZbafaHeNrRodVL91erxAHdjW3nLFTRKyBsLsRoebsXtovjYSKWt89p9JciFcjjDF",
  "key45": "4Me4jCYwYdNHyy1BHsW9NqQpumMh44Gu5wwtHTHXz4xqK7Wh77kCWCPyKziBDGnLcqCE5xHRnueuLPWQgE7WqS4X",
  "key46": "4d2w1SWuTsMkAzqqVo54fKQ1iUsdpNqR3rzYZSKxp73uo68Tk3nmXk5meVgWyV7f7X8iWJ8J5mLJhRbCj9t4eCUv",
  "key47": "iUDTDpnx7sA5mPApFX1w6sgnJhgwECgnN1BzcNLZMkfsEEWYUyy5uFRiSbwjME4akpDeWXmabQnWp3K2pU1AbPJ"
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
