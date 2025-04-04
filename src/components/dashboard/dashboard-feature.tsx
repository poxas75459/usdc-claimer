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
    "4WbjdnMtvw95TgXEqLZWUyPoEKwQ47hZtWvFSaizfWv39hWRWp4zKyjLdvzmgDyWJmE4PqCdeQ5kxK6DKzGwQLQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mThvLdq3B4JeSymkj4ojJ1mVr2ztWNSyiFa6kRZj59P1A9cuQakhG83ddJ2frNUmEArRPqbjjao6sC9srkGukbB",
  "key1": "4GnsG7ppfUW9pEuDBZvZhhQfNY6NJwwBNomazaCcHSKGzCwQWg59nVfGjbPgFqwVRkUdcG7Db3r3QboUTEFLb4s9",
  "key2": "4wNLwpB22MkW8jNJ7jWMUNxWsfxe9P3z3PNFreoMjrn9fdErMs8udzZFtmFpGoYP4NAXw3pj9xnWnYtZJgEHyhyM",
  "key3": "nRY6gaXnoD7JtRQx7QPyZfiQdF1SYMbyCHGgXyzTtjb2TyW3nB1Mpg2NhXSPPF3NJ1vjXYPp28GFAP91rhuJUtr",
  "key4": "2z5ZAa42Ce47rWUFz6MTaXHtkXDXHTMx4whuuRDTToi5hA65h1ytdMTyx35djhZBskFJ9NcVzAd3MqXSJaVycEFG",
  "key5": "63c2RBRxNFLAoyTBsEPK1TDmdFnq1pSgzp4APtbTrdehrxWCr8RkuYPaGbxDyNg56Y98e95xZfkcnYojpsGgV1Nq",
  "key6": "5GrBk9Syn4hscosKpHtz5wY9ECgq9qU4fRM6cRzp8NJHnboeSyP7GivZbMb9XEyZ3h8tpFmLmu2ZzTbRwvDZ6EXy",
  "key7": "3AcXEnMHEsAGSRQBAsioK9i2mGKZuRf48DGKveF49ELBdWmEFe1ybyUFWJhcpzGZg4aT5pnn8sDH1Jhpj8L4uE1b",
  "key8": "jN65FrvzdgrvSVSWqmpp3oyA6eHU4toy3y9K6oV9uH43F6awbbQJ9kjUewgBTSDDhh2RCK6Y84okAssiJipe7eR",
  "key9": "KWQFt3nKzKv4vbaJs6JrVDvniPWzcbvwivs9FeMkRo2HxmwwFT3F4gUZojt5zPPiUyNp7UCNkCJe1rRcSbU1XZb",
  "key10": "2aXvvprtZBZhsPXAaLMt1D1PRREPo72yvoPKfqBKrBGFQY8shpQYaNs9dsZQ4qHuk9DTdoFCnZ3RfKedpczc9h82",
  "key11": "3AVuALpPr6BixfZ12QtRm1yMamBxzuDJfsyS3SkjpWkDj1FMbwKQEMCW41nAD6rhwe66Zzm1N4rB87kvESLDinWe",
  "key12": "39NP1fjHhbxtyQ9jAN1BRk6ZUSGJd6ToGpqsyc2kh9bQhLABbET3Yk84AYaZSua2LFoTLGpfpwrJEw4EELtHNA34",
  "key13": "4AxbKx47krmr5DrWRca5MRrsrcenz33gfHUEDPVdMamyj6638upVnyGPckNDaxS8rrYZonxw7UUnCJVKcPAr2AXX",
  "key14": "E6gMLL8QqVjuEikikNsc8F3G9xEqBqtEPjGjySJ6DX9EVYjJSRhsEyDBRoZ28gwW8bfnj7LpQrDMWDKptgkdyd1",
  "key15": "3CGYHtLy1E9NYiZB7g57mubUPgwCxzB7hkThxdoBw3LgnsB4uPezH3nx4L6keXjGLMmo4e2QspSDYN77AxmCNagm",
  "key16": "MwcrxUYvHBpdCsdb6JpcoPu9NnV8Lc8CxxUXknMp56MUUUpDhUw5R8ehZi3hKsc4MDYpFN6gtfbG78YMSMviMBP",
  "key17": "3TU3k1cX9MezCQYy68ocJnYwdCoLxA723qFN7nYgEvJiD2HrsKcmVDtxanHyosKLVUbnSAHQgM9nPeqEXMH6AZYq",
  "key18": "2ZkJeUt94BArGXSQ2qFZwudgeCT6pu3EhAEPvofitDqqhNSdV4g7pkLMdijpRMEMjJZ6BLq3fhapR7TTBSrYFzfk",
  "key19": "5q6NMiKbSHgNesg2X1NcW5jkSSRXsUZvwurArn7xJPbc7yr78cxcrWpF9NZ9bNntD1fQhcQbKcJgsAucgQp6iP4R",
  "key20": "5LwXR4sixfRE14AsApwfoGz4mkhGaAJRDNWd8zZWU5cdzC5WKyGvqSPtTuLbQmBQrJMY3NUdJcH2EoxSmsuRpcDB",
  "key21": "3ggn3omTprSerde5pD46mDtM1fTUmr3Log9rMHReA6MUa8gJ5K15Zwepx7pRXqoaA3X19HWYqpDjaf9qvRDm5u5Q",
  "key22": "CC9RK7NpeFrNo9XGedAeAaDARkkZjer2ykc2ne7inHwor6UjG5yyVe4Tv8eAnSTN5re3NnHsjxxcxQfF79jUFVU",
  "key23": "2mFjvzGj5kqgyhM95djoW8ZPY6osLvU8GrEwgf5SoKigHkseV3w9gygDZfsvNJ8ogzVfrGPurTYsmvUeTG7c6sMp",
  "key24": "3xh5nWPQDzgpXqsTUSinYjmfxhHyrTV23bEqyc3Vqf7TxXH2YvuPr6wMT5hSKBBkkN78MCiHReGQmX6Cd8BtK5R2",
  "key25": "zkM7GF8axzF57ZQ5BUpTsDGrnxHt6DoRUJtheCspKysTzN8zLJLeohovZjsVr4HgyYRmSw8tTZVvwWAVN3c9RaV",
  "key26": "3CnLH3FzJWyZygJL4pzNvdiYZr5jJPodsqyhjRfnu6KBp83QssrjrrgoMVvW7GoSo5gVKmuRC5AUcPEjnM5m3PaE",
  "key27": "3nbsZYf1FGeECgzycLRMuuk8JWeftAEfHviZUNfqTzjJsfKd35Wv2DuL6qP3aL3ZZLnadDgLpEas7kc65VjGUBLQ",
  "key28": "3duxpsEJKv6c4rDSbPVLFens6Z3BfmwBZqEWX9yJveDABrEFRga7pthmhHnDzZZ5ogUNURuNx2QicPjsAy3eH2Q6",
  "key29": "eCP4cYJsAmGyoXrLgNVegVMYi3yARreozNZpqJPtAtiAVaKhSg8c8J2TyGEcVBUXZqrHHVHw1ofaRstSpWXf5fe",
  "key30": "36qCJmGPRQ5vRrY1hfb4SL74b7ydNwGPCAYSwmce3PcD8GYsBaGGj3z6yJgib8nagM7ga6XaS65effbXBobzxRVL",
  "key31": "3rBwJ4YsFXN1Dx5er385SWfsuca9CP385wyYaeuTKqpSjrECebprV4FR8x2juksUUX8fFJfEx5qjpCow51NnCRdN",
  "key32": "qSchwUGpyF2bFhJnGoCeFVQYbWhSNQvbLSYyvAuf3Qeu1C67pBe6jW2goSorYWKiPtc1Xnh1AK1Ee2kxRnmFW5U",
  "key33": "5cZrvbgGdfjwRwV4p6CdxHDFECuN4w6PYyYy2M3BD4fQZfzu4eXcJiv6EszMDs8QHm2VBUAfSUutzEu8g4FJUzwa",
  "key34": "4zNpbhrxt4mfuboVYPiLgZbwnmWdqV9QgnE9uZgib8Hxq5XAVxNXMtNKe9D6tpgnkfK9GWA92CVP8rpBaoH3Yuvj",
  "key35": "rNMsJMmiFjBUsMueQfFv2PTHfxDjDanfr4yadRTUNj6cjW3CkstToTiG9mGoHNHccJ9k5zjfcJodYiG7HbXMVnu",
  "key36": "jo9YcFj58G2ZgYnu8Yff35J8UzkNYH2sCMvyYeaoTooSieikmpUs3LuWsVHd3Ypo8mSYbRdTHk9FFopTsLuKYWe",
  "key37": "3AqWL9yqR74N89gjeTftq4EttkQCC1qtECbypQ2vZYmwWAXB9T4Kr9KojVZPrKAgFT3bztaK8JWMajJPcLh54A6a",
  "key38": "SEkeW62nhPEEYX1wUmZmyHiLJysqYxni9yWvy7umXhVGazP1gWd12Hjii7WU56j6CHDryQjEhwgAdy8LtwfV5FS",
  "key39": "2MAt52DcxHrBokZ5xZmV9E35RLUK8rxDaHxhpB4zxP6zow6JW2j7YM8uKMJxvPVNBBiRGf9TD1bg5UyigH9LhL9y",
  "key40": "679obFAQVzQbhBM4esHJrNz2WV2Xx8GuMVjGm1M9wEeo8zfzvgUe6vvPULoZVZ4etHXXKMXLkR4b3EyTJTQSKsUE"
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
