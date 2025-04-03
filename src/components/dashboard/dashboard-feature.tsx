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
    "5WAL2hnQG8mXRvyPvLwkGLuomfctWFQ78Fr2x9qGmbyMjkKXba6o7WPTrU3Y3Jgr3T9wbgFArGcXwmyTok6Aqz95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vvgMRRkEHLTyDGVV8EAeyGice6Q2i3edS5kD4K9QWWEcVQH2ZDXGpHLAPw3nmDdVRwbHZ6uU5THzyQcUmqxstic",
  "key1": "2Vpr8rS87Mq3np4g3Wm3hr682LfviT4i8t9UhyT5sHZvknaLxY1HCPJCK8Q8BxpWSAQMJgJxVRchq2Xno6CL8TXm",
  "key2": "2roPe7rkHSeR6QUX7Q4BafZNdpKJ7LzEJLz8C92JBrGQB2pMZGfcUzsWoUTxmDJNZGKfpuQsAKhp6B5XJQXqrdeT",
  "key3": "33xRckCqYxUd1vbvaCdXZsoJK3U96HRzwVkZwRFqXRDZA9BW1EWtuWYmMTE8XetEJBjdjHwP9ZYhNLJTn2BCZDLQ",
  "key4": "wedX9tw6BMAW5XEsEWu1pYEAWoshqmFpZBPKFFgWF3Gmb6tuaVkuQkYpMKaXvsgXQprdprcoDN484YAPrqx2Rie",
  "key5": "5rLaDHE6XBw29sthFLoDdkWavNm8c54qGe4xLCjZRhb81PFbEu4i7K656fAouZyBSn5VArSrTZfQqnhYsPGqnHDa",
  "key6": "2NmUfdT3wG4ew9HJ77tWWxmrpPNk71GbumQMWgyfpJQv1aHGePzxMAsQrGBpomfDN1JTa5x9Ao8U5LB9Vo4wHavq",
  "key7": "24VS7fBHYgSfkXtVpH6ZxW3567zYrSq8aMpt1WdkVYvqKAXvHUvdZK4mrF5jCKpvLXjdY8hmwf4hKJJ9nr1y2Ji5",
  "key8": "2qMHWvUbtyu838N4RbpWAeQseJiriTADjkMqVfZuJwyrhZe7SJZbPxEc93tYSJLiAFyCrqPdUt6Tz1zFAyHoMwbR",
  "key9": "5YkRHb9MS8qkHVRZpkgwjUHW6KoqE3CU2stAURkby7i7JnjdvaJoaNCSHogVbikz71cbRuzY25Pf4XgznjYtfTgF",
  "key10": "63G82Thbm6t95oCoNY7RXRXSq7xysfz4kugSuZJmiftiR6GJBJuDwaxAtdL9qwiDmqpsuzNe183L8D4KdP9kmwyk",
  "key11": "3mVBLmmricFTc4bABtTCB1A1dfzojfMYXQV1W8cBjhcenP8uFKhyhTgSpSRMaNwG1z2oBapYG5S6jpG6nMaFjQpi",
  "key12": "4CBENXyo6Z5wiuGbMvydHGKwkVaWnh5r4W3YHBZZxHtAL99RuXLje75ws7nyW7NqCGRV2dfuaadCJyHd1LNHZMQE",
  "key13": "4obzvEqxbFo8PGjVs8RgDvndWyS8auYPkZ1nvJ3igevrEqfFM75NWQB6ucv2Z9BL7NSSB7H6xh2x99Vr9MHwGdeD",
  "key14": "3vnRGmDYcKuaznYKbq8v8r8BG8BD2BnM7e8U8uCZuZqTTexsAd782uAR8SPz1PrfbRvrfWZmjMzRtdqpr9LyYXG1",
  "key15": "2p4fTq2drQJ1Y5fmND3MAVq8KoQBhQKDmos8Z1PYQLWTqBaZWxha5BqKPRYYhH8KAeEaSUWN1iA7zzVMwdPQgnT8",
  "key16": "47aPk38NbbYGzxbN385S6SeKKi6jHVtTpDseq9fabDghXzpPE3qQinc8uDNteMEb3wMhRiLgrNqucMe2gTdZSxR6",
  "key17": "4k81z8NagzWP1oVVpLGHcvvEUzoqg8Zij71Kae2xpTgoa9BUW8A8PVqGRZnAcveUkGgFQ9U7RcXKiAsMo3XjcZSq",
  "key18": "5krMdQAxvoPq2bWsVudM77N8rbkqEBrjyYG63kqdfwvUvj6FmGEN8Mk9QcQwo6NsTXVp1dC56pnJHee9QNgbC45z",
  "key19": "3F9wi1hR5E1jD1wDGuskRWMWiRWp7gqgTxUTEzpGWv6fTvVd5gqjL1kWTc1zJZMrfGknxWnggXFDXex1ZZjcMLa8",
  "key20": "22zMVYhS4LgsawsyXPXbZfqe3Mer1atd1A1fKmWNT6x1d33UFdpve4nfjsZnsfAMyK98A375QD55r2xecjQGMvu5",
  "key21": "5qVk93bXVkPJDNnbu69XfSgb29YFvSHpvBFmaZBBimyiQ4odU71VgFWsGXYSBr1dTp7SEKc62E7fTaMAJE6HFRcH",
  "key22": "5D59vSwrdBbGWk3trvkqt94nqttn178qYCVWsUwJpbvqyuaQrxFaBq8Lw264AQvdpRyrsakdFn2Y4P8Ez3MLqBNG",
  "key23": "5z3SX5XMirnXFn7PstsdP3doxe6g84gB1ZUyuYpHEkygNppXQWhpxmLgigfpP82HwefU5SzHvyhysFrxYGKBVQEP",
  "key24": "3J7yEe5Q6tkUy546ttHxgiSV6MeFdRDbFg6dhxere3cviWPDChCh8DYFNRGc1ErRHTriR2M18mh1vWXqSwHp6vwp",
  "key25": "3zHUthm3mFGyh8Y1PTyY1baoRtLpannmuTBjBCtWCNBP2eCq5sbKYeGsFbjBXuK6GseW8kw7Lbfw31C3HKVMvYYG",
  "key26": "dsha4A7XyhZ2fWZx1vBJ3sqoBScjZDjLzDduypWpDFVhmL4eBawjbAzzuYFk5rWmDCZbq9Home2VL5jzQc9mNXd",
  "key27": "5c6mJAX1h42BEZRdbvjrkULzXsnD9U3UwR7U32NvfWVQPk8XnHgfnGTZNnm4uDkNGfWrDsjjiSvy2pcEYwdwnnLa",
  "key28": "3vbeq3NxJxknAnAWxKAPCNPNtt97KqiGfGebYm2ov73gc8CuZU3nok3AcMGors2B6k8wWk5Y5NmprwtY2ANmMy93",
  "key29": "4vhTbh86pC4vtBJi12bEzzovNkpfjTd3M4xKrEuMUbD7d8Px2qU6oo2ozUcaboxjdR8MLazjQq5Cs4m5qS3oCDhX",
  "key30": "4W1X2kpM7UecYWAHGJdvnRak1h72eq5aCJAkmE2Mu2RqeQDdkn27uDwhbt49LezbdNCzZorpGG9ezRc4ic9QcyzL",
  "key31": "35YfoSYF8SPUAZiQgdXNoP3kTzNzawupAk3oE48g221Kc5w4e3PLVyKNW98rXDYqixPrmhg3eegkcQUF7qWZEH6f",
  "key32": "5fuPqzctpWKkKXKxaUZFbLDPwgNMuD6FzWs9kgmivZbnrhgSsUGmgpnVg1ayxNaZSYi36edKdBzj7aBTTTsFFqPg",
  "key33": "2qGcoSUp1qpArCdT58Pp8SfdLxek29Dzsy5QorRUTh4DfoV3a7j8Bmj2ZbKbLmykNAcSn8oqzPetBseatqrAJCzC",
  "key34": "LQZr21MvDFpHL1mgWj82HjGzVHd6JGuaT3kY4RqvQAf5kNgsVMZsqoih784X1nE9h7C83ogj2RQ6qMD7yN4RKq4",
  "key35": "HQ7vtuuBAA6gaMtynbtqPKUvZV61qTJUPu4E2QT4G5HmR8hdpGuXmBJJijaRQvCMWzQcDqRUdgLRbpJMw7HSmu8",
  "key36": "64iGPbTxwdvHbtoQYf4rFLn8a2JQkjDHNsarS7x19WqUdTgyXEdQFAS4rfB4gNn4Yju45zet2NCxHHnPPHAw7ZNK",
  "key37": "3tLVRmsJweEvFP7f4BQQNoGVQY13W8d3UayJwGyfh1nuLFsGrraooYcjo49rXouznXbQe17brAQrKYRvn5jxE7PZ",
  "key38": "28gxDCjzDr6gQqHCk3Q3MCCJyq3BniyrA6FBW7smiARaPGWb5dDiwLdXnUMKq39yX5CZ7m1ZD5AwhfS1wwqHd8rh",
  "key39": "2UGPq9XnzYNUSdcCfCAsQysaAcP6VqsaM9GptKCeGZf2QXNGnaF7SwBK1zbpsVTF2GRuVtk3Xipv1faJF4ne75Tx",
  "key40": "4VPhrvgVXvMTzj6Q1N2vRAB5VtwPhnGzuWM3MKC9qv54wP5e8oUzmaQwaVmEzJpy7dv7MppJy4KZJZLtGfgHthS3",
  "key41": "5iZbKnNbY8aQ6dutzsmWzSY1djuvL6KqwggwK2sESR4V8zfmHweambzCUUE6GkZEaiRSV4kW36yXeyZypNpXA53y",
  "key42": "3nxfK9NEpDnHM1nF5cNUZnvMBEi9a8tmDPvLRxuHRes8X2DfC578XtCueYk9Kki3mYtd5puQ3Uw3hcBEtim2LD8z",
  "key43": "2QP2iz6MuhXxkgsDAcey8cFb2DcXkuAo3bEMvYVnL3Mx4pXT9ZwuWki3Ag8usTFRmePrxt991Wot1LJaM4Xm7sJ2"
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
