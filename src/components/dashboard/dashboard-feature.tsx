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
    "wXimzpXnka6qaum5zjf2NPwEjDNz6DKchLJMigQiFXf1CfNKH8HJutzSnAgHVViy8GNs3XBDSWfq5WRpVtKwzYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u9RSeqpQoaTSpvTG8h8XCLFR3AheyvoqxpaqmV4TNi4h1umdzcjckuuwpNM84Uv5L2PkAuMkBgGoiNTsDZSgEmV",
  "key1": "54sqrcrg69G3ugLeCD8EwDTSHWeNyiGrPCZ9mfAVjY9rx8afj9e1aUGvVN3jydoW8hLUbyrAMiLwp5PuYCzgNz39",
  "key2": "59jz7FX5dBg6cLHtHNzznE7rHTaEffAEp6vpVxRgD48Jgm7ng3dALGYauZaG9HREtR4eUMMtKAoy2sWTBDcwAHmP",
  "key3": "67DTXMXFVj3i947WWaU5R292GfG9EVMTvSfAnDN5psRQP1oa7NfEZm2etPTSeYih7gujCkRnuHusHdbJeccUgUBu",
  "key4": "3xP4ZiUomzKGxoc7cMTCwNv5ZBo3sGjqa74TZUmChL3Ka7ijPCciXrcGm99LzurMt59HCv1UTqwpczYLCNSpkkxy",
  "key5": "5GBznCPPLyXREfx8GpnTtqoCn4JY89AwfaJyZMkEBqZAY7ueFxQ76HsCHFXAwWjuPCq9KvD3BrndoBAcbi9k4afg",
  "key6": "43q7QeXbQphbgxgFdbrCQYnF2SivzH3wwrMDKL8bsS9Dpbz2RDAyusFwVd9rXbKBr1sXXrjnbRZkzddsLYngeF57",
  "key7": "5gtf39yLZ5DYrvnVjqYGZjUmLpscFR6VRuhYn9vh4xEg1LsLE3pZcx16M5pxVM3KSXwduinhAFyEfsxHGw7Xg4MN",
  "key8": "3pTmWjp3virbaVSs9UcWo616HQJfHGCFR6RLx8L5rfk7uxPKy64SM1Vm2PK9gT1Gec7z1UXZPEv3jLvDqfecD2jQ",
  "key9": "3osNQhQk4Xjh6BnaqYwSntuCqTM5fPbMnvVKKx4UfN2yziE2phEUPeRDzCzHABwWSbDud18exGcPekPKryCWViUz",
  "key10": "3stugMD33BY7psGcLtYZsyFFgS7hLdebXM2Uo4QjDMpLzmJv7PEE755BPKPfbXjDcnuh8tS8GC9cwQmt2RQmgjVg",
  "key11": "27n4Xo7dx2MoXDeS1S9No1hLdydoVcSmPGAwkntmx3UAqTQMZ65dwNqDRBhA8yRGB4MHVFb3jwN5WULNpc4SPUah",
  "key12": "BDrCmSnb5s4SneRUrubDvGPmjtK6UgWi2Ch1RKtSvx5bg4RhVUgYUzTSpeEfFbjRBeuDLoTvL2t5oA5gyrXaPWX",
  "key13": "5qBkVDEz4LwMNLrqgfsBZRVsD45BqMCQuNjnYkjGdBT2grQKjpEr7WrTQAXcxubjshMLpW7UipfD2YwYMXWZuLUa",
  "key14": "SnUEukPUVqTUoCEMAMX38zsgcaQwtatZNSvW5D41o7AbFWHvBKqe5XMd2mJaVWhzxLoDkbFaojXnuk7QbLJzmKa",
  "key15": "573FzW7nzo2akDnWhLNRwXr9J8BTpUpVSpUxiZLp9A4S6VtgFTcduBwfZrQGLQRozmQC197BpitTDE8jQs9mzxzS",
  "key16": "65hx5SfuCT2b95tcFXDyJ8uGRH29fSw2NzVCrPcirZvyEZhrVYSTNL8gwJwGa8GfXEVGrT1qMX6ie8fxcfdtnArD",
  "key17": "5HUcjGBso1Y27TUq9NU9n6d7Nqg2gufwVSGvxhCkisFQ2H43Cq7MtKsKkJyG4cXo4Xf9E8ELEqb6ChdoPQXqTp8y",
  "key18": "5mXJLwq2QANdzocTXUADBbmUYSP13dM66ibqPu5CnXbNCXmvw4ZYEh37jUk8TWQVY6EA3JQvKiUtBtQFogcyFxkG",
  "key19": "dNKD6z3fMEu7RzTnjy4YgDD3Te463NywFu3S524UNuNyyS2ADTfC4Ms9uPPykwwshc6zT158PCM156u1fop53KZ",
  "key20": "r79pXoGwUtn6YriRUz92baWbYbqxuWWPLt1DXqTBfxbe9Pvw2D3PKq9miw8c8j7HNvMXfUYZNYqgD2Z6xaMyTde",
  "key21": "3vc9DADYqkVFJQFm4xs3EDZoVdC3cgSxX9WNd59WeLyXwGDJZZHu1ZLTPAJCMShsMFTSaZoamWuN7wVj1FsejGLp",
  "key22": "4awbr7UXLMgxw6us1XWNy8PDJzGvvCfv2SCMwVCjhB73V3m7mgR866jJxUyoFzWGRtC6LjhnqERoebRPcR7a5vKw",
  "key23": "5UX9V5M23CWUwu5SKFggYSwiR3DXPhY9YrUmKDtQRk9Q47e6EdkkDQEwsyaYjFDni9A17jgT79ACNyngiJM2Cpvk",
  "key24": "67VEqTbwNoSVLoH6m47t82xPnumigbXaYWU5dpKy96LtTb1By4FuBgedXAd77G1Bw1K2Y59XEJkdo3Vwga4kiur",
  "key25": "2pZLy97gW4T6uJ8PYUZCEjp5AUkTLgSDzh1mteSGnwsS3HGou2k3AvWiFWxsy2YpsCieqxZ8izGDqkVn4WNgpNt9",
  "key26": "ekmsTbRCofYLgpB5wvYxm3jexcdXy6gQSSwjVK26VHxf3oFnBm3vyg1GerfdzyXxUUEGq7wixxqSpKaW3Hentni",
  "key27": "3sx1AaYMocYQaVQF5gKa3WXAWioe2MuDknx135AKoHe9fwYjAJQiyJUQXhEQxYNkuZCgQAFKHZL33qT42yn5uoc9",
  "key28": "3icn6sAtQdG1d978AcxjqVf8RzAwRCCdvMTcgNFC7VpEes5xk4SzqWms8tLG8izrsHiP9AKjgxR7VfNaXk2RSay8",
  "key29": "4TygykLBRb7u4ZzNeWpKg3FuhdFBqgBfnvZU9X1YHB44u1UEKjPZJdy4bH9rzuft5rV1iJ9NYWnMnYVs3BrvSCQ6",
  "key30": "djbueMa7oeMKqSpsZX41qgDNxozWD6CMP4TVeGtGnNnVYBKbDoS5D35e1s3ioyvFtanqS8tgNHaMGHXsSuDC76B",
  "key31": "QKNZsqz9u6MC9Dv1w8WCL6dCBKZnoDhYdGKdExCwq35pZVSHrg2UCoLZa1k4vYaPDZYRVh8LcALiHd6RozvqTiS",
  "key32": "3kPXCQ5mXuVWqKJpYbHBJYzziJeYoHjgfKKq2gzedVd8ssq1G2mQzYBxut3vcxeUY5nQxz2xktimzeCf4YL8DWzt",
  "key33": "4S9t2mSCJnda6LVbCvtwvUEWry8C7QeJJmVdzP1zU7XaMaDmFGoVpyAiBxsguRDLkUYxtKknQ2gaVDN2nHk5imeb",
  "key34": "5eYb97Y28DosJ3wU6mw7AijUXg7NVXRYCYyq3VYF8dwsEEcCA718pye4Fb9PCvoD8grVMGTQdTvbwHVTTbuSfJh8",
  "key35": "2enFD7pTCMWAw8ZJBFFJo2QpN2BtxhBVrfgicW8FAuDBYKA8ywVTnYemnuMhsMGJz8tdPqTJQMPUyNUwXx5izMZk",
  "key36": "UuWAZ48amFSwd8bYTJNhE3GzCDqY8iH7v88r4fZPaBds7qoe1wmtA1Vo8Y5sP1H8RcdBhVnomsmzGvj9aXo2ZVb",
  "key37": "4hW9fA4eZYqdrfNusbVuY9zGndi8GTfB3QgSQGjmsATL6YWTnwqCgLTqrEPuUAFMY4oDHYr9c7Cs7hay5Y3SjUWg",
  "key38": "4j2762SoPrGixi8QmrXfG5ipuonNvNSmF3y7vzHRdXKJPBmkyp2iTTrQUppgZWzPxYKHzWnTXSsVDAoZC5Tu4UwE",
  "key39": "2pBM5nCVSG2rdWCoDT28dFCwzLzad1YeLne4YHi8qEaH5Vy4gsZj5gY39BGcG13yymvoa8EALA4dM6KbZQcX1iok",
  "key40": "rUWUcVMyJtzAKw7CtZw5SvyzwexrK7n5jtXKREjiUqiSxqyaKyE3QGdoVsTx5wEfP263u1FUApcKrE5iZXLvxaL",
  "key41": "2K5vADwSLR37uSjat1o2a7VWiZ3PNpQSzdEUnBUEp2VzrMcvZakv9KyhMTqEBnVrY37o3147ypop52JVtGpNeLLE",
  "key42": "3zpRfsfpmqRtwDgVqjocoV7Z4KiaJTJ58mSVHfaeUNnHt5BBjMzw3YLVv7S3XPrBhMKYmhoj3PfsX5y4wh3AbiMT",
  "key43": "4pPKSwDatDtRdHPcDFnv54V65QGpw4FN32UzK5THgWmmV2DBecnFAvhwczxtASNftNtSHD7xFa1n1NqyFCT3x58R",
  "key44": "juNq85tgoqRaRyb1mX3yYxL53PkTf9pvcsdKVN6GGtvxz8jvrfYU846dgkh4cbQqjb8ScTp7D7uzqZdeCf2GXyY"
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
