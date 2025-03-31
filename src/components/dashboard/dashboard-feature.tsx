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
    "ZbQVvZBhZ79BT5814u3UMuSABttGF9KVtKWUVfNq63qBcaoGSKGy5HQUo6ashN9JqzBN4skydzeAcEUTrK7YmyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48VayntUED3ZztA54szdxscwhTkbu1vAZ2ZJneL4ykS11pBZ35Q9zsdJVUWgNFBQy3W4Vw5yuH47CKxrHNPfmXVB",
  "key1": "4QsKWPoARA9TenBS2fj5kGP1aYHnTTZE5xUUc56G4B9yE6YhZ6u2N7qEwR7j9pbUD8eJ6fiKTn92qmN4GWZNHujb",
  "key2": "3BB2GHcYwJHDpRoLD95utnxfrGHm8LzZrouBQrEi37gtXeQZCLj1Qx2mFGyHJ2xjN75NeoVbKiJQkkorxrwSdjDz",
  "key3": "5KjYjVVm3CetXP3jw2UNT3vFJsjxTeUjh6gNjdSTvbH1pxP912Devn3zzMYRkCStWnd9JTFjxZKs78r7zM8NzHMd",
  "key4": "4XDtepYxdnzkRagpxW6hatXotikYDEYS1Nm9bw3ztmQKPhtEfbSCvqkPdZ4iLnj3iwTTA5Gp2fqPm7edqFrBiGns",
  "key5": "2KMoycbFz4UEAFRzWP35ziNFMx8Uz4Qw6XsgvYFdEuhne4k4YKaM8i8VHEoeTSkXXeei2CNCDBQi52qaK6ZoBmCT",
  "key6": "5fMgq7q8LKqKYAP7SWXyaPDi8r4gysUhdXt1FYkgZGRzpUZmrnotTyjbMzhjM9mGmmrArXEiahPxAtBMoc2CAhWu",
  "key7": "38XijdBAfpTkCjrUUZG1HZwAj3c59eEE59taDK51nA9mBqLv3MAcrBrxpprr2kTq48Rj1dpMi5uLe9cwTGJbsqJE",
  "key8": "2T8ajpRna8rtp686Ue9foh12QF7UcyXvmDmSEoeC4DibjLwx9m1gs37W7G5iEHoqtLCLs7Pjq9zJTFuARB6v9UW9",
  "key9": "2A8xqhiSN44MhDs7eNY6SJMvWHqViCZHhvPmmejdoW5jNDbXAQ1wbzkzFvacHmm2AWAYrubbpotQ2XmqzV4nFbSz",
  "key10": "xiEvESPgLJqxjkdgAc3qXF7GYLJwaZF3NvgNuydBC7YTEei76sYSnmz2T94yq6Lprf4Qj8x8WMWDaB7UZhmvkZT",
  "key11": "2JSFMK5HaGyfH4yPvKFaJev4dE6Actoqy8Qjzmp1CFm3puLkRFK1Gopfp7msaCVdA4Emb2HTJ6spbH73UaCTK5oh",
  "key12": "64P1BMF18gfgCj4uGzqBvFXnjFEvhTsA5mKv2V5RhTk9JnN5excSvJhamkffkm7vuS4Hj4bQf1tQHKajqBaZohxP",
  "key13": "341fF5ezqyQ7gMgqYstX4QnXUJ7gUzZ4Xh7ydnV9nAzFoKuFgLgvMAfqmjLg6jE6CWEmVoXc14yf3HB4dcjoVppg",
  "key14": "y3y49H2nA1xkGWL7zjjAY5cTT71RsZxcd7WvTgXn2MiZsutCa8DvnVRWUmnc3RdUY4QsSkYJrEEYmoRALGgHf3t",
  "key15": "Lr4vA4j1f4UHfydMXptvgQAFuhcu7vB8aWrDTsa8sTm8iJWLS8MjDmPs19HJvs16EEeRSRMjkyiUXo9Adr2XQKh",
  "key16": "5cTbxuU22sDTknVyURebZ88Si3CuyGcgr8gNJuExAVKswNTLa3RdsXTL2Kti9dkfqDvPVHYi3fXt8TQ4HAh1THMX",
  "key17": "29ebgKtyzNPmJsFGbkWDu7h7UAHkEWA5WK1kARTn8xLLDFNo9WZjaDAYECpVjY3hFPTtqV37dKAS5vbFxxX7s39r",
  "key18": "4cBJqAU7CEqtJv7vkFwbYnnGFTPxLsXcqAmqAxzxnDBtb29dqYKdVNw1qKFo8AJq1E3hUcTiHHbTXCWBMZ6LFFbU",
  "key19": "29UNYVPaphCW2h9N5pP7hyf2Rmeys5nfSSFfMe64CwUVsbfnqcmCJZFFnELB1xv32ZfmTcMgFUtGYnuHYo3C92bY",
  "key20": "zZ9nN96Sw7tBT28y4reXcaPNBkog7ttpFxPBvbWT2SqcCnGdJbwvPn2xpUuHme2tnYNgY6uRBXbAXn98HUDLcTU",
  "key21": "4A76edfgwawfyzeEFsaX1Jq6WmZUyebFXyRXdmieVVivLTHrdxgB4X6qU1wFadpxYJpGu5V69WCAwHd2uMjkzvSX",
  "key22": "3XUhDsowas7Cvj1uSE22x1rBzaw9rcQKeZHuEZq51VasBFAh27x8r9WWR79DNt8ssfURzzJT1f4hAK9mGifk3mLw",
  "key23": "2BXdtB64KkE84sjF9F3XuWpWp7FngQRujiDJgMmr8VQsVkZX2b4Dq49WEPfwAHGzc5EVBeQMQnJu8irVGCNvnDfn",
  "key24": "3FkqzfLiV8t4XE2nVHxLxmEFBoiHMt8Hw25BmkSTLis7AjKhFWuCtbESZqXKFr62jtJ4YoLmLonQhhfTebXRhXVZ",
  "key25": "5MH8UFqK3zABQFBL79TC1SkTucMX8d6AMpcmWomEL5wzAeWUtz8xSr4TZyWaetyLkpwNoTTPe1348Ug7mBPYVTZH",
  "key26": "5UMsimcg7XgjJX5KrdGbf5JTVutqWgvALKCQ6YBDVsqDMmP5mQkAhgccjk7bTZmFWerVFnUjHXvW4zYHjfSJDAgP",
  "key27": "5w1sa1stf7CSpCqKFL11RyRqwy8xF2P7rjxevG159z3Sc1RUoAqnLo2rNJk3KiDEEE9izu3XDzvr7Qbc5Eexy2xf",
  "key28": "BUxyzkTYrwzWm7tbAnCZdt3xKHo99JXsPUSzArZMAmUXKaoub8kdKUVoBERRpbF5TcgnEhWZygUoiVBV5mUuwV7",
  "key29": "3auWcHakiu9fBpzGCG8u4RgtPBBAA9BUjqS2LsJ653ix9sgjMv8AyPqrKXHodj4muoPzjzLZyjXngxhWgVsMWJ6u",
  "key30": "eAfPm3dvvq6vKCGwsxFBxyuNXtdu6H7oKdjK6QkyZBtHcSw2HCS1onxCKVwLZK5Dd7mYYKAnujM5XoXihCowx57",
  "key31": "4AaGUJto9U2DBgh1AP18PN9PFzL9mzvwkXcsrWn4WhjRHcVPjupAFkB4dKznJK1hC8hTMTrWgKMBF4yuD9RRFvbw",
  "key32": "3BWM8mfEHgx51J929t7Wm4q2HKUGij8Ss1TmNF9TRPdn5zuQmnYLeFRzHpXKiJCaUtLbNQpGp3PJtQCVoU1mGogS",
  "key33": "3wvZnAqYftUzsBfeXUkHKJYNtznvFPDQxw9sLWTWkjTHGB1z2jD5qPDUsPyb2PXkQfQYCAncwhiyuqPF3DVDs2SD",
  "key34": "33C35o7o6ycTf86NAh9xBXd6PPiwtLwY4gJXdQPMwih6moJTNq7EgzKEJ8WKYM5wk456osBpHCE4Mcr8xD75ZKbX",
  "key35": "2abHfMhtaZ7ztYpnBbHFPGGB9wPJTeZSKtzhGCXvHkCHhmZL75yB8WtGtT4z1rdBzGcL2ZJ3VKbSpXpRATogw4we",
  "key36": "4yoJM6JZn6YYxELWUJy8q5kT3V6EvjqixtLhDsNYqEzGH64XSUorrBAf4UKinmT46fmT5RCBZf4wdyEWHT6VNDsi",
  "key37": "39r1oEdG9na4D5PrcNqePybXFPQYdscsBN9KG356N6fJKiEpW7yTPDnUqBo2Uk7THAGQU6tfBgcAk1uZqY9922Tp",
  "key38": "2RaTvdU6EbRnCgfsAsC6LFyJVgcGexjEHPE1vFmNHvDCgNsGrZ3QfKhgPpgVX1RnTp93S5rWVyjmdLGM8JDSrv9k",
  "key39": "3ZEg7cqzL9hAKsZQLBoY9AWXNXuAKCD61PYLEFxqqJx21bNwgu9YdbJyHcmvZs2HZW6J13dH5FoeXSnqasqDjPLk",
  "key40": "5HWJPK2qfd7s3CDxiDnPtRy3AKjsTYAo1VRfcdGcf5HafjYVjDFZWguDSKqmzPpc5FTBDThBXNMzRb4TY2iXZSr1",
  "key41": "2xyBC9hrjCasPcDE3yFzBNnn4fHAjQT2TFkjKauxKeDoh57wMvd8bayRYeVqbdSd3D872bjFdUFVLE8KCaYWySV3",
  "key42": "2GH4ev9yBr71jd9PSY4KWJVGFaqEmcQxgdWRbdHhYn3nvEdvEsQJYtKDrhAnN5JqH5juhvBNummZ1HHKztNz2YDg",
  "key43": "2XsYbwGppW4RXizxgv5eyjbSkWCwnyuwtPhwikuVRTUdwKfFTymYP7KhJNQYwGAdW4L5ujcwiQfkinqmEuiAyzDf"
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
