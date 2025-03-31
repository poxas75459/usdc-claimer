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
    "3DiufhRdc32xwqjtHtmBitDPNrg9epdoth4wAXbcfwrHuVhsusSGoufPaoSjz21RvhVNfqQJkYCBhoeJsrDBLw6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hHNjiZHkWQHYXaZEnHD1gjx9Dh2zCEdGbqcWDzCEJUYCbTg2upJD6Xid2V8pPfbNi1MCDGvJx9eToXEEZXqbKqJ",
  "key1": "23KY7nUDEV223SS17cs72fHoPNRJHNCupuaL6FcuhYdMwyNMVkxeWMdX8dLJn4dQcSzwDt4BWkKkpDGnxEW6xxXV",
  "key2": "2pYHTH7W6eLNFsB1sJCc9xb6wtwfiEiNEwYACAUjGPrZvQGLtWwjzCQSmWaKv1fdtYqorfBPUEyskg4EC1mDwErP",
  "key3": "4EkpBGnxxpChLmQW1mqi24Mp7xj2QntU9QaVnTmvQSpML8A8fd4FdCGeicWsiKZhYWF2qYCp6iCa8WjCpxX4M2Sz",
  "key4": "2quFHU3bWfGJfDSJvHVkz223DvfKp8jTMogPcN4sTF3naq557qwhG6y6bHLGeSpW2dEuSvGhCiKzKzbpgXstDAuH",
  "key5": "VAQetWGucVzaRKeXdoBkcmjuRXZuqb6Yk7GJfX16YAGsp2ur43obDbtNgnmBPXojmJE4dwY64WtpXain1m6PuZW",
  "key6": "2N2nfhTDXMAGG9yGdjiHs4SwuBUDuZHFy89EKovNf5wButGM2H6FBmiXBPQfd3rPDsySrJ9PKadaQLmjqm74rMKS",
  "key7": "33RrTC5rEgTMXAahgUnuE72XDLoJWhcv7fLKEPE1VxLnu279M9s4xbwmmxii89WdUQAEB3jPQyD7yf17P47cHPpJ",
  "key8": "2WwdarhS3ky1VxKHa3AmVGpqnUDFYT7n45WcQ3ac53zTBoKpGYhkoyRVhWMuXLfz7Y2iRLkhUbzsz1fVw5iNDoTg",
  "key9": "uB5wt7RZTUZmY26kHqtNo4b2RRxDhJo3t6ryUXWQ8uMcgH4MRzAe4cSwAhJrAnUogzwotEvqVQDm1bLL3RaWFd8",
  "key10": "2B15wb3tHBcybqGxq93gSECufSZ6zo3hXDFksdL6XiyxUZYBNYxVfd9CYSKczE7pLr4rAz5GMLwm64HsavB9P2b5",
  "key11": "3zdDUKx57vgo2UCFSVfJbnDxrTWc33D9iPgEpffwmH5wHp3ynt1fhd5m1LNNHkzrdgbf9vGEG5CbTcJovMXKAZag",
  "key12": "3Wt2zCp5QJhmkQsS4TgztR8bhdqY4PDmMH2d8yZdu5WDnsqX99FbHE3MCu4puuu4Uj98A3UXDLYqzgubGV5E1qBr",
  "key13": "4FPsW6h3ecx6JC7fMqtJ9tTzWFTWd2GycQNPMD2QBrYdUDJZ9wSFjv79ZiqcZAtQMkXNPoj7J4zZAypzfYDjLxFo",
  "key14": "4qkaPLkS92RYZnUkW6QTZPjFg8fQyncTW8GRZZXJKPPPWefbNx8VRdEoaM5DwmdCzsTjG8xYxvL562AUn6qxWbEg",
  "key15": "5Kq3RhWV5dp1fuqyZ9m42xxxiPqjvmDv9cxq8bs5R6zDaRrmtCKWmvKwDKHpSetw4rFwX2tDmx1Ce3Zsw8B1Vrih",
  "key16": "wcFrcHvjJwMr182iMKjtb8fsqH1S7vxNLDiKwxaxnLAZEoV71s3qcPpQcVX16NbtmVtQvuzdihW7p6k88iii9ac",
  "key17": "3qcgPgkaNFB7hKSshxgZjVySi6m8j3wG7Jpir2wm8525kkNk7snTtwudM2C9QTf3MJjebh4Hqg9DYmV1AwqMcc5z",
  "key18": "2iyC9YhLGjmwFM54D3ySSvm66C3nBD9zBm5EAUtXG4TUDrY2UEzNeiZoxyut9siWj3Lgourj4hcknGbeFPnyLDJQ",
  "key19": "64HF4kHDN7rqwXZdfQcxAFtuVjvqJPdAGWLbwaWaCTLVtFkJfSXs4nTvNUzUvhqSn4iAH2Vuio5h9pjHpVhFs3zk",
  "key20": "64ZLLi7Bt3mLrjkKo8Z7K7pwABQ4wiSRn8maJ4SwWmLW372Jcj9VMoPUpgeLDLbUE32ecvqJsdk44NKATGVHZbmA",
  "key21": "8Nqf4Swdf9fKJaBjscMF6fzoEDko6EsdF8ZEKTedxfPREkaQF3Hhdsaq2kwoui1H9r337XmqvTfWPc3xR2QNfUk",
  "key22": "5mXUcn4Y95h1CEQ5wPYYKF6F5rnZMjf7zkXMMxP2VvSCQfJLncZd8gg4WZfxdYVHoHVEEt1tkPZEyJdqyprWGSZD",
  "key23": "4QXs8u4tTL2YTXhkng41wJEUciMgpqZScaKeccmzwYtwJA211KD78TP9HATy6CE8uC3mM91M6CexytqLUantV7pS",
  "key24": "6S6SqXpxUonQMrjLuZk4att6bT4bCxtXoRJofXWx8dHhGSempuMNKt1c4dP9vPuHprukwCtCHAzkKhYeWsejDRT",
  "key25": "4s3ZpLBXuRH8eSxqLXDuXkhjfNEFrTNpfesLrsyMQgUijFdp6bgZi1rLVs2frgBxbAS3n3Q8TpFFiJjZPXTQJU9z",
  "key26": "2sFu8ZQc2dMf7eRv796V7dzJaE5VZE3DMsXj1wbTTAcXBGEzP4fSqJWpdgpdguVpHST9LvEcRbk9t6p1W2AFiwLs",
  "key27": "cU4wEEbpgzQinztz47a36qcd1n3Qri8ET1A5ZCf8YSSz5eamFdiaiGHeBKayMkkw32ZqDK4oX1teEErRnd9T8yv",
  "key28": "5g1pvqpM33W6r3a9VUX8Wjgy8YQKtGbPVk1tfHbfFKhUuKBXh7B9Ri7MVu7fevgeN1ZvBBA9EXK7RD6w6aeRhWbp",
  "key29": "9rJ2BaYsBGjrDbBJry99MAVgnXEFH3zy9v6NgPG3QbWLqW2EwZQdwh4qgmVupj1rgp5R6JzKehdgTJVdoHLLaQd",
  "key30": "qLyGWoDqLaLCgUeZB8MMtQ4i8WUejHEi5my4mzb9Sjnbs6Yr9D1BnJxWQeDJUjf4GjSQDb29K3T26bhcqa5VomY",
  "key31": "5yuS68VDFEh27NCDZwMKre4dWJj3k4tK3uUe1PQrYmF5q91Hbe7QerM5oecfqwcix7JuZjNGxQpr92fKitv3JpZb",
  "key32": "5VfGgAsizHqKnXGCKid25S3sChzh86fCLE3L8yKRZPrikuAwVfb7tXCTEKKmWyAGXudCqzVpfRem37q67byXtumi",
  "key33": "5G5isih2HBZ6fG8Ak1bG8Sjb4dANRmSLd127urPoaHqGLM9ohCMHekPizzKPiyvJgoFXF8mSv6rjZkv2ZM1kPJX9",
  "key34": "3AcLy3cuWt16eXvyF2ZJhyf4mrQNSSMUZt8dKSAne116x1TyzpMfwm7hShe6AkHE2NVqMNAN8Q3FMrwZFyVsktEt",
  "key35": "2CWS9pxVux3woezevfon6CuuZjYX2oVdZ46cf6oMLvqn2e1PhmCtxVNhbk5TMUKBFJFTqSuFnE68RUTMkGNPUTR4",
  "key36": "4eYed4MKHbTdSy5vWpFWnVcfKc7AptaAhoVETdHegU4xAegomNuSqfS1nw5QgMrFf7frNEbm5gDB4xfQ3BMrCfDN",
  "key37": "4a4YBUbaikjZfjvNo3j6xKsvCSHXguYBpUxfiEJxtWTvuL4Zu7HbWoztuuZR3f13on96nhXGkdefw7Mf2vSEdLYK",
  "key38": "3VKzhQa31am6JTkNgxgTeFhQkVEa7JkRaLM4FeLR7JgProS9bgnAcHgvXQiSRWypgf1d88ssm1B9LpnnimV89ojH",
  "key39": "4vBQXjTacsuhuVEx32cXUtsiQnTAU1hZ51PLgsj6DA3Q6JweCHwUNTvktJgXxDtcjuxcvYWTxQxpiRxhDve2j12e",
  "key40": "3mHSojasRF2khA9eqpGMLkBSZTBVAFJa117WbYe7mnzFfEVCLmZDddy8JXDTXHW1jxTdxd5qQX6Tcen8TPrigmZF",
  "key41": "56U3jpKq5gR6XjwApotyR71S9N7KmwEjNwN1hCT499BjSnLBzFetapNwn3ejZpoJXD12AxuotF76YKCHA11qJXu6",
  "key42": "4CFUqFWiEMh6v7RtseLWhtFS7PixWcjSZNRLX1Xpw9dfGu49LXpbs5ZNotasnBZf4x4Fiy2Qze9s1qiu8V93mGR",
  "key43": "49DFHe2jQF3tnkse6gJeBkMDXgVPGmMDa8hGnC9o7W8TFvw9ekLxxoY3YkWnnjbMcpuFfndL8oGPk6ew8bisGFv5",
  "key44": "3gHdY9wAZagn4dGP2XCob2xZS2YzPQZceb7fJsjyRfo5gzBjKVyjg42DdDbzzUc1F7X1PrA1rjNgyjEkr4yhMCjo"
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
