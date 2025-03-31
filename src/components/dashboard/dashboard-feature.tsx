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
    "4i9vuVDSTBpzKiUaevNmNs1PqR37CuhUBrzhJa2m5SVFLKetMUYZEb44aPXShL7Uk3tEqgZ2vPfefEzFYSggA3W4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uHrVXwMAdoscP7CPKq6kY8Zk6dseaVzyXYiKqWZ1NYkxx7dhBuctopJxUEqUJ2Rvswk1orEYrw1EFgJFAommfKf",
  "key1": "2ERRE792WvkKLUqUBegNbV8d2oFSNTVWCPH63UgYyHMX82Fksn3rFb5HwQWAXyZLAtmXRVtYt78oDkFoUA61xWwq",
  "key2": "3mgEzCQSJed5J7R7uf4bdLmSr3jNZT4oGK8KeSLD86X3WZkM4KQkAEpbwwMxGqt818m6zvhrVrSkmex1UgFBSTEk",
  "key3": "49T9jaRFmyHMNb3p4yDuQDaFUvvvQWgHMKZTr3XAvxZHsq14945QkdbzAaQGpn9mSJ73rEXWZtV13To2H6smpKfX",
  "key4": "5iWVoKbk9YhtnHZH63WWHWU3Tk5Wh9KBUutPLCJACQcpRwtuwASEKEu8XYy5tmcPTmuDyCwHYWfrDJz977fLac6S",
  "key5": "2cHzHjWWwDDVdyyrUxgWgL6jsG81JjYztx4AFG1FwAafQhQ1chhDXWBYz2UyCTDQ9ag5W55hUeWrhg9mgdS8rYjQ",
  "key6": "65oPJG9FZoJRdMCSz8hPs4GqSx4onU1624Wto5XnUxnoYwsbcct3tdcFGXhRHiu2S844R6axG2c71qA7C944Arrr",
  "key7": "4wwLquNbYo9HkceREYvALTFrAxQ1kZ6DE6ZrFVAhDcqStzbV1p38eYVKZWMvWPqRQjV9siWYJBoWG5RVnzpsdCVG",
  "key8": "4Dd9tmmDDVHCxyzLvwF6FX68KJZTYerfWrNwUpcsdzgCZTR1wmhDksCe7REY1jUEpWiJsKWKCq311DBfkpF9GT1L",
  "key9": "5hxHrSuuLKhsmpNzBBQKS7LmPR7rjjiPJe5DjAyJink8A2HzXPmH8DMDD91fY8bz5XVqwZberAAqevY8kVpozUTg",
  "key10": "Mn3qn5ELdTzF7w4nFK6iVWnVUivdGFur7CnuvvPX4VL48DarWeUXriPmLHGsYFyrggCr7KAuohqMxszBomGcaX5",
  "key11": "3ZvF2koK1YgkvMkYixcYqbRR98M862c1j4QFxr7io4PqzWkVGSqiJWQPwr6cty9AsaZpgkBBGX21oBJVMy8Smgg1",
  "key12": "2QwrZAbP8pUEzB7BSai4pz3tWcFMB1Byra3GpTDYSjAkGDdjx3nf4A47hAEKKBHxh5aiNca8L652dooNjyh8jNdB",
  "key13": "3qTB57A6bRx4dQcfRf45LoCskDwLNBaQGb4rRjN7U1iLfy2dCBSeha9reYvspsPp7frzXkGd4UzXWbXcn6XvUL3p",
  "key14": "2FpeAS71am1VA2AzuMMpzqKzRyYxerANjmupLFQA2T8P9B2X3ZbsWxymZi5Eb2jtMq2t69oEdNKGkspuQKRkJjoc",
  "key15": "3imViufdPrmaggNcz8edFQTDGMXTbzGnFzEJm3GPCSqmfokrWG7QExYAr8qaLXNBs78tGQDqkLN3egqbv2WEXCUH",
  "key16": "2BnRhJK2SNGpGaTBYaBzH6yLwVAtGVHg25wCJCk11Lu2UzVFh6CtQMngTLTwBHiAwtExEDdBogEhzKnoZMKU54Tz",
  "key17": "3qvB4wrWDsm43V973UbHWapzkbkJ3Uu3of5RRLYHViMF4Rt2sJNrqDYfzufyyyVRdxrxibJxRmkP2757Nkgirxah",
  "key18": "5UM6Z2hUjr2LvH7m5PfuFzrzwcvwJTirWHdTLHLdiVSmp25MiP2XT2EYjD4PeHLq7qC5igMWHpwrQsUn6ZfgSBMT",
  "key19": "3dgz1fE1qz4ffyZYnjGDUpj5iFFsUL7zdqXfFTeAjC1S7pk9HydutjJnFQUqkxkV84ktHxfFsxjtS8LFB71hjaju",
  "key20": "yt2vrRyeF5odnMc5kZTftJDBd7f21MX9B71p1GGyfpUKYJ29iFmhrPVzDhHLJPJNFX8LFttdR8dH5s1bgNRZFA7",
  "key21": "3FTpSqfASR6jVAhoLWPdPp9ry1RxWcfHMnJwXFQTyxuDjgX5Q9DQpngPxwZWRj6XmoDyze8wKZZdUWXB9KsCe8Y6",
  "key22": "XPMjtZGoRB6yrCwAcTiwj3PB4rZZYoTomEsJZE7XyGfAypZ6Cyrwu7MqjoPCLxriktejFrt4ab84oWHRsXtAnvg",
  "key23": "wGJmavsWrH468cHC2uTYsqr3vxkLZs8FQzCr7XivDq1wTww8ShkBeDZZSq9FkLixi15tudqYeZMaHKG3VoWgHyc",
  "key24": "2ph7PafpqEqUCrX2SF1r3j5eJM2s8S3jqVHGcG4owQg2huUmmkTqJWUs8grNjadGy2sHQSxS2Lqe91w8NouJ5vi6",
  "key25": "nb8rHCSVmvmHmrQaqGYjwWrNaGAHyaiwL88KbzqMWwJwxiDKN297iiDDaUXp6mSiXd4pbabmFLdGTcRjikASA1v",
  "key26": "VeAEFtEYi3ManjLpp9KTFPr5Awq6ftiEpDJt83EXf16QWeVyZB14sNfbj2CUKPKR64SQEPn6Uisc8jGtvq2YqZK",
  "key27": "vsAsamtLv7swHSsJvwSq546zBkHTZNons75xgerNGYRe4taABmCJcnqfPDeWWmMHDVWxHbdBCXjrGERBvgugKPN",
  "key28": "5d2WxQHBypjSSmJjhzteAnFWSHENDazbkK8Z8j3NuwUUwq2vD3Z7A9rEouKJEcU4HNApbbtAkRrRpo2SpsKLixCe",
  "key29": "vyLabvHhG862gmw9uSd3z1oon1UdsiefHvpmGTUjkMGupn6f98kBqkDrgk59XHMJCbuUvjaJAY3cCEwzn2q6wVE",
  "key30": "3J9x23rS2KjAYpxdoX53csgesJUuZA1AoRTK9BwseEAbftG8GdeV7MWYCGdMkBehYs4BuPtUNMXNHB3o8CvQVpWo",
  "key31": "2vW8FRwdYWtKuCV3bRKi5uzmPc3WryR97EfxfyeHgFtvEfGkqnByjVpqe91RJuC9tAdjcFvoKo8d4WoXM7145bKM",
  "key32": "52FDGLECUs73Pgmjm1sdmrf2mtFLMdcVCS8EpXaT32nNcJBSZH6iVaM3nRcfC3U5odGM8K85W4uU3ZpHL6CnSJjK",
  "key33": "4gY7T6gNUxBHFL1dz8ewGyDVkHGmumMLXJKqYLYcX6RAhS9MUnCsJ4D9DmmoNzWdFxjn75m3i1dwmP1474fKXwby",
  "key34": "2jrHHB4Q6gZWKDvYQMG1Wr2g826QT37oubCv9js9kNxTnnGeJW9wJ1Yw3o4CyibPNoaaQGBSH5XuwQXvPtjAyGSX",
  "key35": "2FFgsxQJn3v2LA4CzV7BteHvKuVTbjSUkroz28qK9NjrnX2fL4gY3EbmgqmEgQbGTa4iqHq7JpBkM6boLkK6Yw1M",
  "key36": "2QTkeGGwR88FLCRqdpqBHiaSKzYhsSb9G3RSYPA1ihcTMjvHWjz7HUmG4jWkvG7vFhFvm22nhDRy1TpBjsg2CG6H"
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
