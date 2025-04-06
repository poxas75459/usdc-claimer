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
    "3RyQbNowujyY1tmZyQbNU2bUDPT9gkNLPc6dqFXrjLD88YWBVL2RtBHxERjW2rCxDtSvw6tqKKsPNMTMvmDAFuTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VGTJeNBEwf1nQyMjk5hn2cHAnoxD6dP9jm5HWQARGjuGd2QTY1bcgA22kWg66NQJfAJymTnSopRhieQNh5v16Db",
  "key1": "2p6NG1uKk3tjCTQc3qvEHU9xQyfjjmvmXG6gMmmghrEFXLwdhrF3AHnxCDKnw6Z7uq8qdem2YuLrWduRj1NhYJsD",
  "key2": "MLPyjNee7V56CsCcKBRtPnb1MYStvXEqyY1hbA4Wizbk8kAXzViwfq2yjY7UqwvcDA4aQyidpou41tYSb37p9jL",
  "key3": "22h3UahPChCfcLkavX3tGLVhmpC2FKAp634frLMeX7uq9Ygrnp8aWso4aidBhnE3W28D5UG6iK4mvAsSGpKbn4qB",
  "key4": "5angGygSaC2SvESdrKzR3K34zACojZgJ5ck4wN1XgXxddWWbiYfRCpRUUnaSU7XP6FCZ1c5DbjhTDf7pyoTkyQyv",
  "key5": "46dmuiZ5CqH8NqW76JSsaJLEZecXuQxCD7zsMyUsk7ZzNNfvPuv9D926ESJHKztme7a8bdeumfEcie7YAvKbUutY",
  "key6": "gy7nDATE1pVviRZTVZRHTampUDsJikinwLBiYGpLtgRagGRdHw4EgFgqVC4h2vCD6ixzVvb8rEAzQEJP37JW2uK",
  "key7": "3qRjG91RE8mRoLK3xEFQtg22f4RDzLBwHQHyM6yqJQudA6FL6wQbVEYeXWPEfqcdUEkuAMNufNfSBhKRYyS3ezBD",
  "key8": "aNXFYeqFthbH3Q56wGq8aEj9adoWgE9xuVscKQVVsmpLXwxoBCFLghPd8Cd9Lzdix8VAqpmUzyV5H7kQDkpQmsy",
  "key9": "28iwsamuuwrTdsYukdsRem1kWJpdtnzx3x3hhiieEAz8qjG15etePwkqMumH1gxZPf8uxgYDjDALKoaBDApkgwM4",
  "key10": "3UE88CHJwv8VePsg1fpgzukNawdgHmCu8SwivHuRzMDr62dohGkqtvWrKzNzHyQXV2orb5uXMbneRJB9TEtQUknG",
  "key11": "kmEFxyPoMF7MjE1iK85Fy767cN7pg8nDGyhrDNQ12v2djF73MkGxbs4V7ZpQD1hwaVXBurHjMB7Ntv4Q5ubTx2u",
  "key12": "tqBCPSqa1wn67Fy2tKKeVE4FR4WBprAdxhCTwXzSG2UJAjXBcoRVs9M8xHwFiZK4kYg6P7gG8x84XmFipFzqaBa",
  "key13": "bErD6V6t6kgwBuicfpSARU4UC1MFLKakV8m6M5DbUCUSNnzupE9qUDcaT2gAQyucxcJXUHdEwFFonrcqzWYqQvL",
  "key14": "61PRYvGujP2KTuJkeWJDE573egUqSgDEeTx8J23XTrj9GEcTJpVWZFNo6xo7aCrt672CH38gREPoRAVJNagLrWHt",
  "key15": "5WsHCoSt6vBEZpnApJvXJu9PfnSxSwjz6zTMie2k57u8xD4a4q6ygLUWaZT1KyFTEoC4xz1hVXsE3np5bbYAnPGa",
  "key16": "2YMeoifHv5e26NZ1oYVghqzPWbFkfhurcvWZACXjrgfKeP9L9xiPprgzF6drMnpRDV1TG2FwCbrteXiL7w3paVFf",
  "key17": "3zop8EtnLsicq7196zvTSFwUktY6ahh2dcvd6uiooZvzN19ZjHAHQW4NqsXeyLuCpCU3jiJcEroNmGv3WWiGUxqX",
  "key18": "5SGmJW8JYDhzFPdLbiBFoZMtvaxG6aeadjJsewkZ9nRBNWRFExQ32EtjRbJyWpESQo6B48KGNDqLGh6ejx8tEifx",
  "key19": "5DarZqNTaXqxRzW6m1sg4vxrUaqCp5CgjvoQNktKrGGZ38Zn4jPf5YV2x83Qnca7rB4hfq1goFqoe5wkhcJ6FxjV",
  "key20": "4zhSPVL4CDZRTuxYRdoMpuYCEDmHrLqm63KNgLvFRyKLfTzMQzP8gQpUkwgckv5v4oYHmbBYxXgBye5wM1SKASau",
  "key21": "GeJ3RhWkQeiusQjZC6GNaU7k4BXqQWmbuhJ4dmCpJ6som9PMduj2ru7ccynJZuBqKH1o6MvHUt2Z7oDgTVD9Ui2",
  "key22": "5XANqg8Cxuuz1JfC8j7WqX3msYjC5AHKbdx3UvDCKYdEd6dyynp7cV3wyvqkQBWwyp6qorA5woorAVGLPAWjSa8c",
  "key23": "47DQA7MEizYcdmCvoUTVcekALMaPn15Xd5ZHLX6vGd5cUjeJhHLijtPbrSFxKho3yTxiTu3xZzd4tEG35Jqhhs9p",
  "key24": "5cze8JBf4xkr42KWDZ9o217hAEtTdXNGybBpFmA3AsHR1HNYDAuHPYDoPQK5pQqBNiUYkEjshcuzZr7UKWZ1rk4j",
  "key25": "4bG2pXqrBjnsEV42maJSLSYbxh4eXTfmybgMX1JJd3MDt5BXMEAyF8qMYTM2f1Df8BSfU4dPXFv8ENRxjbMeHJ67",
  "key26": "V2D2BLGohwN6ukboU6SdaFdzbrHCQ9xxGXWphR7HxJKAix6ZJC3U2kGXUj1R7bzrs87Knz39YB5UbgfPdTxbpTX",
  "key27": "2uCnvSDYNwNdhStJbBcNw7CM3389pXXuvx1fXXEx6hQLyZXbcddttTnRtQXqJgncNtX1GHtstp2UVZ5Q2mZdEg5k",
  "key28": "3QQXKGYq6DP83775vPbzX89i887T6WH2K148RDZnoyRfoninwdkGyLLoQ1iXn8ChfGeqvKvACJdsn9L2zVQBMTnd",
  "key29": "5B8j1xNC9bZ7dYgNJWSUvUxneBoe5JmsRYjFLDT1CXJhYpqkxsjH8piS4PtpM5AaTgfrKAAmAUoESi8pbaSL5fam",
  "key30": "4dU8AfZ6xXarU3NS9UhhEkAcA8YV3uMMHD1RXT3zUGt6dufFJXFbEXC8AGexWdPmkYRHb6a4ibKeB4qS3FqcJEvb",
  "key31": "5Mh3tesJsp6BST59Z4tH17AXF8aiKbvvWbPPSeSqpgxiLYt5hwxnPq2Ge6KbzTnoq8M8c1QYku9hybrZn49XD7U3",
  "key32": "52uZaBwoRHoydwCTQqMbsUBzg2tarp4Udm1TZNxkHXyC78ss5zgAZjkFadVPSX6puc6ehsKDrkBdB2ghjcUkNzWn",
  "key33": "5voakX3dhFL9REWwRfSvZ2G6DeujADBecRfQmTYUAvvCJkwc5PZQH1Db7DutmSzkimdkiNXxmLAJJqKN8bpJNi3y",
  "key34": "4YscLNHkxZQg9PkiyTLMcps2vfWqSAyLbS9pCnSfi54XSWpQY9oHoNAVbwwXckGU7utJUBvxnUgs3Cf7hTL3nhQn",
  "key35": "2FihzLcv3jNsnjD14Eep3TsD9RQxaaapGuP1qmdzCB5J8cPZED8p9D37bkT7QTzweGvBBLUbiLyf3mVSS8QvZ3tu",
  "key36": "66PV71QhXAQywDGz14NQ4qUGsiPi9XoCTheHcCF29HKxdmjhD5y45D1QF9a3BZ3PnL8iBJtBEvJjt7FJgEufKERs",
  "key37": "5c3rsXRw993doECNnt5c9LuMs8xV574mH35WrVHmQk9vMq9z9XFVFXvVUFAAYSUxicAYpqbenxPCWucmx7XNAAGq",
  "key38": "3v9gXpaybg7Rb8fenT3p2NXJrCNU7Xc6heQ5xCFTDNSauhtPAp318pchQCEHaHTDhFKDjorBN1oDyi9ehnK6U59K",
  "key39": "2oCAMX7ffCznz36rGMtVYcAMvyQSbQGtSZkP99s9mcwq2ZQpGk99fo9jyZznK7eeCUjDmSwqeeu2FT1dCayhfBnm",
  "key40": "3ziKeL2FDPXpDFEhEEdkU2673fyEp6CjH9Pqw72LhJwQAStSPS1X6i2gEwanfnhwTAEhUM4kof6K79LvrdJ3MRAf",
  "key41": "26BoHbe9xqyFJyau5JyNVkBMYZxk4MahCRajFB4BC2thgz4HeEizUgbuek4czRyTadxSfD7dojFvwG56nHPf16uM",
  "key42": "5xwtSB4rSWm9fwqnZSBTtJC3eXAoDGqggbcJ9LvmNEzUobmwFzuYLK4bZqW5mR21tPYVygDKVdMcGEZ1p7JJSmGd"
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
