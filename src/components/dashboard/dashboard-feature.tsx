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
    "4Um9fcGbyLihsX7hbVLGwHPy975gxFxUuS5XverVqskfKpMdaywc9mgKAe8S1JPUPApxjV5R5XUqJHpFEAhr8XeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XbYu4yNwsS2aFqzPy3P5WxhhZTnzETm2e5fWPLreFzTyPtyHQW7GNbf5LBg797i9ktpu6yJVkXLrZuXTGB1pPXS",
  "key1": "PSUuywerKES78wTtnMQ9iNmFrHv3FwCgybmuexMM7xMZa6RtTKNL3rLuYQuL8katsGczmAvB5E4mYbecVtZGd4D",
  "key2": "4Fq9KiidgRSoZ5cP7ab69fXPfazVe5KMWasDxR22TipkD7qba8eL5PjiL2Fb9ueng3ws9xfepnx2KUwtGLhRcAyj",
  "key3": "2gvf1GDKPYRCEry3fgX9HeZpd6Ce2rHBzRVeKdWqzup9Gz3pFR3y8ZgZD6kkSTFVbRrB67FG61kffQjG72koBQzC",
  "key4": "53VXUimmWgGSsznyxwr2nzAcdEEMAY6szMBLwSij154sUptEoBEdRbAheYSvz4s3U8r9a2rypyTKESUeRrABU2DU",
  "key5": "4kCh9eDUWcEhHuo1YiYkrgPSiCEzNxgs7ixue3F6M2xhThjskVwBv5MjtVgijwcZSwDBVpRasjLvpMS49J6sfeyK",
  "key6": "4HaLEnVYRQX1QcFZHDkzyNpnMgQyqxsCDxQDzxiiriVuZ4w49rwnu8PyH4e891Hh4MRg6u6mdWGKex6aygbXgMbZ",
  "key7": "4Js6eCV53WLUFG8zWhEWPWFBP3B2ULcQ4hLb6cQ6TEZGCt93vp9UU9QJkBtXLoXYHLgJ5VdKa7zHkuKchj78C1dw",
  "key8": "5NEGpqCaDsKBimuSMuZTrYv8UEaGGvivrxBvyhoDGy33Y1Wqp9qE55UyVBfnWRF1BhQ1zYZQoWzCbE5BnAVL1Liu",
  "key9": "3K1CzvL3wYDQXJnT4rxtZTncQWMKrGfyerjQG2d7MYRnyHqTkGj2LDWcF4ynpsP124SrK18ZBLFwrg6o2rUc2ZZv",
  "key10": "MkwuTJKMVcYkDzrYUzRLquSVu2KGnYv8exBgJjwvxDH5KBjmXt2pgWtmF1Sezyi8q7RDAFEnvdPMdnNxG62jBHL",
  "key11": "3tUH3vfV9F2tdFtZeNFfFxRVaQVfFNDPPFHipLPgdbgBRGDMEMPdK4A74citmb3uhWQXJFyhyi7kJS33wR4xyQam",
  "key12": "2LrcDf94Y53mMAPnX2eHMLaf19ksqfq99mWqveVcC1vuuLW1uh4Ej9NBUCUtsMYyQBwaTZJty6ahAw8JbmHttJ4Y",
  "key13": "2fPd1p7AiMWYY7Mk3x4vabKXyETjHMcQAyrYJJt55CVPcdUmGkSuQYYhJCQ9vkQAZKF8QznAEq4wJpq1JXrc4wht",
  "key14": "3NYWM3MZkr9s3posMmuhymKfi8gp2oRTXqMqTDaJGYJqW15oc5XFRpJYdgHhiGZBpX2hXWuY5fn4hCLBycPBBvcV",
  "key15": "3byLsk31omj6aUCM7CcJoU1gL74tHwpC1jEGgPwXR5ygqSMmpTerLETgMTvJ8pacyzxoiFXQgSRaCvYyLgfUCuU7",
  "key16": "5to8wcoxHf3R7XnThFQ5eJEiegbZA4ZkajRRVunMQKA4c6VGL5mJ7TTkYNyWRxqhruhxfPYDdgbRQYbsYhtX4cW5",
  "key17": "2XPbCUUEitYcrBRWmVVyqDTateoyjo1bwkdLEEpUmQXgXmahR7XUwx2xpVgND6iJ454PW75KschZEsAxvXAJjkZ2",
  "key18": "2rjFjYXPV3MCYZiGJKL25x9v2DWdNx3PeYuJxEvryqhxJnaLKzgsGLwsUyZUC9gKfv6CzzPgoWq5JDGkpLjd5pK5",
  "key19": "3rwHm9aQxgTFLfTxA7pwdM1CGyxX9FKhmJLGDrM5xiTfmYos6RLG9KD499mvwWm9d2uham8hZrNbNVEL9JpHWQHQ",
  "key20": "3ry7FVF9PFLGvcKSeBTFebvV1tWyis4yPpWYi89fWjwSkVe5vLtPCNJNFNrQQhS6Lu6giJHVC6NjU1NdqAvzabYD",
  "key21": "3XthBmJjzaDwSKrPEBSBZVqgJVXpA7U9jngZmtCtYvyXuuJ46yhFrcgQNWM4No7BNZoHFoajYgViQr9UMqA4hF1k",
  "key22": "4V9LqW5hgtxk7uaSVwaamB41xqEt29N65dWz6hqZS8wai2g5ifRjB8kH6SrAZd1hC3pykv4hJttdUBtp5Vh2N6BR",
  "key23": "rNLtMWMR92V8QPNW1ysN9xzbtX2WCtRL5Ybzw6yaKFxhXiy6yLz1Qn9ixboc95egB6ythMH17xbMwVVDVhe2c4V",
  "key24": "2JU2jWPZkBfziaMHtS7mR6UPzE9mWE36iWtkr3QCdYc7PSLShooixyM4smXq3vaicSANtUP8FkoxpNjTJyjQj2TE",
  "key25": "3MdU3i81wZXY8zqc2fkBoTFhb7DEsEBr9s6LkiQhxEMCjcYEmyoqmayzc2Hx4w8MC7dLyReXsi3oDJjFKEZSVHi5",
  "key26": "5qQMza27xv5kp7M6SjBNsdF4GRGZ7oXo2KTc1eZKNxU6oYBB1h2NmWPwuPT5z61Zu6y4nYNHZc4GVQnqbGzSLNUL",
  "key27": "4y7YfJXB2i7KrW5AaSdyX2hhwxsvnKAq7YphKDcEosK8yYvjyfvNhzVYgnUsURTZn85ws4XR1bd3M1UCeZgvk5jg",
  "key28": "45Cn1De1fdrByvgvgREvvCuAEyjrUb5oDXwokcqgTv6BEGgLQ2nZ9K9jy5TpWgZrZZ5B8WCiQDq8YtBLyHzgzeXS",
  "key29": "3sfXV6rAZF3yaj3DRrpdrt1jCfXJQhzdLyW5fGvK6oTNF6WcSbkPx2DiAjuUG7XieiZVuYJH7Yrep2PrrEr5e7zk",
  "key30": "4wNNhaYhrtZ9aotUvdcLtgqr24vpSNEM7ANXKfV5JzYB2bRLZ66TDCndVFUsniPerJvf6PTi5tfQDVG1U5LpWNQx",
  "key31": "4SG8cdoMib3WE2KRPbe3FdkXSdtEZGkPFVu86TooyVBBm5sp1AvLimSuhdnf33V5pQRdrNmR9Dp49VGZbr3NNwYH",
  "key32": "2n3QAhEpKQqgy9EU4LvyqCKHPjmDXXL5nVFV9bEhW93rkPAeZYFtnwMu4cbeKymWweKUBGhWwwweNmTGKLi8esvU",
  "key33": "4gZk5YdnLcANUb2EAhLRPY23AjBtM7Jv6Bg5BP9pM3GNGo3P8Z3v9fcMUwUaFs1ShgxmTvGErGdSbzFYPuFMUa1P",
  "key34": "4XLLX1RYcmBnPxC1HJFqFTiabDxniE1rQZja6wpdJi2UeiKsTpeyn5Fm6APaE1tXEfkn7etyQtSqC8mSqrZ7YuVz",
  "key35": "48SqPcRzUobUsZWF636pzXWw2yPkjEaxRVXu6XmaDfuB3VJSk51QqGn7gsEAsuEd3ZCsnXHSzikvXo8YvWsP7Udb",
  "key36": "5cGusrzR1ahE1Bs1A5AJdx9N93NGJWm4BvsbMThh2SAv4eQJ85xeiyMspobGfNk3YW9ENSUSLVd7ha8MtKYgJxEP",
  "key37": "uxivdABRS241pv1JLxG7i7Rmjhv7XzG6SVVxmcmQ2tFQo57nsaSuvG2su5ixhWBLkConTQDb68A7D2naRN6dRND",
  "key38": "4vuLpfV8k6N2TaspRuE8u7LZRikahxtNoqiyvteSw5LCDZfoD4G1BMRzrZTr3cSH8EE68Kp3eShwH6ociPckgY3U",
  "key39": "2sznYn2P1tR8ogNt8dURdbhmYZ8FB3e6hqHEJHt9wDekZc4dU1hbjShWw1MRgXJ5iJe6S3HR3kJW7qH8yoBVZuzK",
  "key40": "657MuybGCDWaKReqkQ2xU7DsrYw1pJXq2LF24xWxgmfLu2oBcXnBWp4n4X3w55NBGFkpw9R2oFinfyQ9vuoci7fp",
  "key41": "YNNjUKNsUBHHvNZyU5kwYXb3nQdqiRkNo3LrzbEPQMnrXsgKiTZWh5TFKUQtC4M8HkAgkMTuVgYEsw9NK6xbKeu",
  "key42": "3ntA7Sf9Xc98LGXcCumQgmLMs9ZurvrZyqRpDhfPvFr1inmeG3aZ9wWWvtfYcJsV8BS4sS6Cm5Fk6jMjbrxHdaUh",
  "key43": "4RobW4RbqFFL7MKL6VXr5GioAngoXgASW8XJzbYJAS3HeRrrvEwxAXaWSSgWsGaWDoWSMkeMr9TJZdPSFmc2WErx",
  "key44": "HuXjeRLsAQAsQ4rLJZfVoWp5hhwHroTk8bH365whFxHkV1GDavPYAazi3gkeqz3L5YqkkBByF2iiaj16V4jVMEZ"
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
