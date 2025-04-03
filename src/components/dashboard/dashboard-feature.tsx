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
    "W9Gkz5Z4jPppipFCU2iifL7e26VwgKjkKQXWw3nS5DXnG69ZpmbvmuAkxBysqdquX8fC5a5vkmqGmyp6zyK3rF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pkoYSfvjGgMzdZn2drK7gbgoDs8US86yUyr3psdBNtrnxuUksA1USTvDMwWHHQCjyHkQRdEhYfMuogvXA1JdJX8",
  "key1": "56wCk5CWzoVANAE4vG18STEjNush3t67cYdzSGxs3DUa2Ueyc8Ape8wvfGMwZB6DhUdTERiQbtstTfehyp6c8D2k",
  "key2": "27ZH6rBSMV3ncwxzs6ZpVymLE5ky34KzhakeXgPPKkQnxt22y8b2gfMr4wpWvkmjpYeXrCZMonZdmHVTJpAkZSKc",
  "key3": "2fMhgwNKNMaxg9veE9xasS7GgZ9SCRFLerttg4i3wVZLWjfPzamsNpGgx5qmCM6g4LBcnJjCX5W4bnc7mArZxVSy",
  "key4": "4a2UEHFq2DD82QGBgwwgCvBGhYAXtWZUnjmzVV9yEWUvCNqFVJTFrWSvKnE2tA4iPPJXbJCesEhR2tgZT2AY5BxY",
  "key5": "3epMB7p95BZ47C5VHnShV3B9mJz17CoX1XxAXBi77L3q8wT5BHbmzMJmMKbJhVNdswnJVW8kiJ7kSD7ni4mu32kb",
  "key6": "2YF64vLbn5PSTSgtNG1uEyroDLz6uL9kUgYkG4oG8cL1J3ffQvizZXmwfn1GYx1RfgaNGaDxAoBPq5xRhnV3dkKS",
  "key7": "5WLmxWt3zxyqUdaezLdqWof4yd2rKYxYmoBaxJpSXpcZ4C5vEaxqaE7pNjsVLoAaX3su3NxYFUD4WzLaRqPE2G9s",
  "key8": "ZGBsoEe9B4cMA8uEHgPN6ot4rVsh6Lx6zGe9U3J2UEA7vLpFNxrbWzUH7byt21ncmoJHiTV2S9RMQBrEAKEXb8L",
  "key9": "z4vAHsptZZiMDhx9GNeG44YxDNdWo9AjPNiNN2hg6FN4cdP3hTYFa2jEhTStm186bxSHwS9TZHHtTAm6fx4wm3U",
  "key10": "46Lr9aM4E82q67JXTTdyF7541qrcMf2rifB8tJewLZdc3vUqT6u5Df61z77Vhz55pJxa6wsbHhuRAupU5y8kAmKR",
  "key11": "3Pr83yM1thTxRyk4g5oQJnKcbirSQxnhTRDzywonu4mvKoRRmHCZgZXbCRbZV2hwhRWQNjhmm1hqhjHKSkPU9cdb",
  "key12": "4P3VJ69RZPs7w2Mcid1HWMRf4vj3uVzowrLuhNthGqdDJVu8qMLSDVsePitbCsBxkNeUeTmtg3dUePrpgd2iqG6Q",
  "key13": "29PU6EmiZWmArFutjyd3mwjSUzUUN15SZ8gMZcYPNXeWYSFSQzLw6hmpjjHMbV3W7UTVdrYQDZWk5SNg3GcaihuD",
  "key14": "3P7i4tjLo9n6tqS3a6yvfQDftL2Av2DD4dm77UDESSodba9BPAtm2JHJhh5Rgm9HfezpS6jvuxD44AFzdtprk16Z",
  "key15": "4dygmJuQ4WXgA7rFDxx4ZNdbopCfeFSTQ1AynsstCZR9qnmyrS8Zi7J1dCrn2DbRaqJtrXRYHuXtMx21e1AR6gEv",
  "key16": "2KDiBxgettWcVp5MZsvwwdowySfXHUJgvpKsbuJ3q5ST6c7jBBTqhU5SRdKnvJBTmRCnT3a3AVqqjgmY56vQn4jQ",
  "key17": "2wcCxCF1R62WDzAqPoezFSuJtVrL1kBoUX3bfXUZ4dfuX4FzYJF7CczZAiTcUQenk2J9CPowxA9i8wm6EsrC9AJQ",
  "key18": "zB4UkWfQ9TT1U1MfjNQ8WBEsbaJ2dzLvZFARmmaayHrZsYtUV3CAmFjv7JvcBu6GD5oSi4GijT7Gq9g1HH1Vwpo",
  "key19": "51HEHNBXS2iBJjNnAFL4DMgMokecSERQRHZ7GjVkGWV2g5HY7GhaER9ZzpCH1uRY8BLZeH3Vv4aW9M5J6cHuCZP8",
  "key20": "2RT2C6H7x8nzHh2WgpYubcXzHzJRwayXmjK6MyR7qSSuTnYqup4PwKnmXX4srpowWksbsaZFTsRKVyKmm1C43Ttr",
  "key21": "27oDmXpgd7QN5Yh2rH4DLyYWZHR9LUpGM3XkLWpneuqoLaWTghFcVQ1UNw8WCJ2dukTc1rmf5H4UVtSYbzXCvN3C",
  "key22": "stncuowbQXo9jyLHaGfMJuqD4gKFWuQrFsX9U5ExG7DxFrKrGbhZnXB7x7Y7TnUPMfYYrDEUaSb2CUUAu8oGofn",
  "key23": "c4Z1Kno2k6W4p8skT715r4b2FcxrdJLYfXWtuBcJqnDJN7WtApYm9GQS96FyR3rSGHQP5CndVkZUeEGAPtH9wtZ",
  "key24": "37aQztjM3pLshRQCSd2c9pku9aX5gqqeKaAgsjCU78cmu6SvitGTFdC5XEVaxCkXkusnFt7FAzjzf3gqsGh4AmW5",
  "key25": "3rcD4Q1qRauZHre64o7aR49RjWaYRTEaMYpPkgP1TKbsoRK9xvpXznryBjeuMN4xipQAKMN1FWbdSHdKJu7349yT",
  "key26": "3qNUnzeWfSQXBsbgtwj2TR2CxPXs7gXHpABy3WWe6NT81BDU9gRNnhvm5hHvCcKAUUpuNQu8cyUrnLQq1ChJZyRy",
  "key27": "4B3hQQYwPM1CSGxoaeHMcnXCNBjKzsSvvRcCfSStp6GjssZ5We35RNXBKtEDdG7TsYxA6PSJKs33NNb9MnxhGPfz",
  "key28": "isAECCK6ReLnQL3A6AMAWMLuJ6mu78E8DSLPHkosyx9ndM5G5wDQbVgq3dkwTEhTu5coZMNGXwU9ErjCvb46k8g",
  "key29": "43CZgoP4ufBBqb5akxetbufxvZQ8HYJynsrrEA9eZAAjtn2mu1AYC4JSbbChtYZrSzCy65kFttj7SmQdvmzkKPdT",
  "key30": "4QKEbJ5AWYGyiKokx1Tb2U68C29xwgwfZbhqkrY1xj4cpp45D4ETagnY4jpYVPmuuUzMDe6wRpjstanKEnRGrvJm",
  "key31": "4CQkRiZiCt1i894PpdnaUne6wTopojZAwDpFnVDmoFpCr3aMUe1Ca61YsDkWPpNfSzTRx4GBVst8S476h9iC8o89",
  "key32": "agwo3eHkWLTMJdxEuvUWnjWzLSJffGDJuqJDwz8wFvk1ziqzwqQxtPaXhPKMWrbELhEH1J7aApNFjxRPfRPki6H",
  "key33": "2PjpyRgLgwEGcpn6WRhd1vC2eyX9nv224bF1pDNCHZTh4CaDuyVx5MogP7tTNeRva2qQPnXVj97JGtxX3GE3G7e6",
  "key34": "ZxdcMdJFer5jCkCD9KJWhcbGWbo6ax1u2RW5wsSoE7wdJ22Eb5Ze74ztizaeCT1z9ocZnfgzEB2eHdiPudN4WEf",
  "key35": "37mAD1qwct2kBa1kWWzPX8ZCptnxQNA2hRvEEuUMus4A1gmdpGRM33qXotqTxFk6oiKRupvzjLryu8pgnKpKWhp1",
  "key36": "4sV9bMjzQXBM366x667CfWuJrjsAqaHviWMSNE2p5pYn6jByFx7kBgicqt1JNpTVUUqAfoKLnts8c6wkkGqg4mcm",
  "key37": "3CwSbXtbek1y6yHtcoF23XZmhcUhuL4fHTkiAmSUYqhAdLZfjUVPVERcndmLsLopKowRhA17rS7hjFfB9k1SKFvc",
  "key38": "5ES7qaKdzNLR9iCeF1keHp6dTb2ELdwkn4g72sSjuL657irSfiwYx92UTyMbuGxT2oTdrGZiaHwJTCk9xDhSsR9X",
  "key39": "nuLk3hDYgEEZdnZyTTa3p7XgLBiGpUiCtvx2YnZGes3s1wHjMT5S3T3Ftsdftjq4JJbK1EK1ogBYmC1w2oiQQGv",
  "key40": "4JBd7eML9FCi8wp7EnwLg8zohDy9akrNKzrHBDpiQwJMDvmpf8HUGs94MLCHGdr8iKVCCtUsckXq9qP9GUCzNxZ2"
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
