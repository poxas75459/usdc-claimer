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
    "oCRPyYx4aVQYWRgSiRhFWtKToD3ggtgJoJUaqfVdrknDg9CZhE8k9yom35Z8xvYoVUFj2Jo349SRbEwUBCYsrzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JnxiksJDSkJtScE3XPuBfdLo5c5ieRWXynxH4XmChwUynSjiGSCnRt5BF6zyG9cepRVevgqNszXbgtEnCVR3otb",
  "key1": "2DPRKyPTNn7xgSL7ykB5kWTh1MvY9SEAaszvz9uMV6NHCHHurp5TvqsR22wMTT32S9xuUAVg9bYwJNiKmSTQxHsc",
  "key2": "mCRJyyTfLxc7DivruLugmydBpK63DWpR6MmAopWpEDcnANqbDG8xqxkBa3TAC5CU2DGeBs9ZrdJGwkx8VMCrcVR",
  "key3": "2zp5GU1fbSJ13TWK5mRWG7buSMQ46ZK6whaa6nYjB4ZgsQhLwaRwtCtyc5DkKVPgqbdP2ro3e1qYUwv3TYujUpv",
  "key4": "3NXYe4aJ5tE1iJGscoWJHNqbQRs53q5rgHL3iJ69CxniCegrQuih3vCJAtMBP4C6VyeaNXCsbFBZb4k5kjYVKcx6",
  "key5": "2s35FpYVvdZNGq9iMFdCPeBvGPr3oNgbZHS1kGfetYxG1beZf45DvCQBNW11TyEFVvmpWixkuugKXCapMF8ZUTfn",
  "key6": "6SWPfEgnAnNmtd5YX5y6qP6mekZ88hJyNaNfox7APP6C1immzTgAwSmcAtjpe1bNBBXb3L69ZqjCg4v66buxgn1",
  "key7": "5pwx5ggNFEQ5cQ7Amv35gqEWVJdGEefCKnkS8nuBpA52yVejvRFDpepyCeyqxSfnzU2TgAfLvHi5Ya6ZZRrcGrbi",
  "key8": "5knd9oueSqCfnqNQThtw7JXfmrFLt3LuGzozCt56PauWd3fBEwN6Zdv3yVh5zBavUYPBXj9tFcpkZg3gwgir4tW",
  "key9": "5XhurQnFPZF9tZ5eM3k1i38TLpp2FmVNPLae3gLATxaQcE1WJU9hsCrqEXk5nuMq1pnx9zQGScpBaNDip3UtuF42",
  "key10": "3tciHbouCU43EG8HCcXrYepUWXhQC5b8sXW59cBaJ17tBXi7SUzJjzGQfZV5A3hWbz5iMoYDyWSavbZ3WgyvjoeU",
  "key11": "3otDofx2gtKHAMcN8JCWJnLUNQEMdJD2LzE8Bwm5WFpNBqMaA5deN8JddLkVnv4pfEXnG1z9CdziG8jYiscZW8uv",
  "key12": "5Y1pBANwRR81BStAGk9ywcqsa2i7FPXHzP14sg2HvH89rq3mfFmsLQMgaMAqN4aFEgLEFC1dqnCjssmwfsfvaKoa",
  "key13": "2igaw37TU9k3HjEjXkE9xGgURFrEVEsKKyZmJ7q661aKCZqE7KhigzaA14esbEENro3vaKeyimbQbyyHPMe6HmjF",
  "key14": "4hBzgPqNGvcYUcDhxBjcvacyQwnqiaB5qMSbUDKFbPYHdRW1YwefSECWcMH9p8LEsJmcVPu6xR4nokxadasKo9dW",
  "key15": "GxHd3kmaACKVSbLHNp57Wv2rXV4sgZTpRF8m8h9BuY1vH8t5uGRAQKvjYjLWb72ZayCs9SqHEv9qCDWdC74ihYy",
  "key16": "4NgXYrQRyRn4ThCmjdZcQzNn6vobffdbNyrTHihGr7nyixovFJimzWfsoKTzEv9g7WHs7J6eq2gshqH3ZLGvKryM",
  "key17": "2BrpyTJB27DCqxYvyP75S2TFjvKSaGFUAis6JiCks9AdDQbpAomfLJN7vRjfU87hXu4PuuAPnmZ82Y5iVbXNLXP9",
  "key18": "4y493uzXXMuaYuwKhTE2jpC7rN3DK1mNBati8TDZJhKN7ywrwDuaCwoTTnNGs5yxvqQJikNyqaQ8aFupiNEXgZUH",
  "key19": "3n1RSe9zxeoLKZ6YWXXZrZ5cnrLBredSvhgqpjcHs8P9S6dNNYf8LgfTpVsZMkMhaFEKb9zK3SLdyVJ4ceRxfP4y",
  "key20": "4P6XBamVRvLP5wWSFPCX9uoZLuwGyudDV7PacdQmFyXPvK3FL2kAL4Z24YQej7xYEjxSR8RMWjB9nT1UeHRxXCZ3",
  "key21": "3w4s6qQ4G8gZnFtpye8vdrtfHRQASRbeyXXd8BBCUBRvspjASG6XhR8TsFKSaYhUgW63WxkXHXykBSMZ8YsW5WAV",
  "key22": "BYawmx4tjJMZwTQ7VZU45ZJFgAvumFaDPJMH7q6C6HTm3RzGHE7vPNPGr7Dr8aiLNr57fHdK21FbutvHDLtyjrJ",
  "key23": "57a7Ls4d54yLixUnxx27nTyZfPrr81xW8ve1y3KhRCYrWBYyCw6U2bZPmMa9rhoCS6bJ9HPUQxwgeb2WQHULv7ua",
  "key24": "3V3gVxMFqzTLmK5nwxJZHvWsNARUb4NGfzcZJBNKQNkqevVdfPrk69hb4Jg7jYsds4aX38P1YRDTUfCDLwYd4aD2",
  "key25": "5DC6XH5nxc4y6PEKCmaGMQ3uhXCynmN4xN1yx81Bsobgpjy2Wecq6vSvDPR9qnfevXCE3L3d3VqMMpBWEZf3F24y",
  "key26": "SvYS9pqtY3u7TpZriGcDz37deepa43rMsAorBKKWZrgEN2F8VAz6DVtNagJLknke7BRZp2nSiyyMP5QyLrRyfb8",
  "key27": "5BmgdwoVQXhNzm9nrww2h7vv9Zx9cMPpni2MJLBQzZf1jKPWMAhqMreLi9oroM8UwrNWBfQxt9ZsTse8p8a1ajdT",
  "key28": "5BMWHtmuyasTBGa5YTZu1wjhkR85k8bu3qREaRepp6Xv18QwH6oJw117KrpJhSEiWEFAQaMbE4g9cpV1MMhnedXD",
  "key29": "5WmeSym53si1kn7nt1uewrKmZrf6JUXrdQBSyq9CJu5BBfLxYiYJzrvEvkxRQLZHH9A5ptzYVXz2rPeJVwDp2DiJ",
  "key30": "3gpp59wb9VmWYe1PWKxhqGMmjPWeN7nZ1JNsYJ7LfLoN6Lsdi5bYgpn3k7gTAmsGC9iqoSqWMRuLggwCPaFpvcqz",
  "key31": "5zZngdys65byYkQr9Q4xctAKNisRz9ZUk3XPvgHZvdSgdCTDNuzeqPGZZq6CDVaPB7GmHF6fz6J4RH2pdKEcttqe",
  "key32": "3V9vQiqyKCojSFnxrab1N9eFiDnDLUx94CykRwF5x5GDmFqPzodWBUxeWv8icow7KhedD1kjtyiwtYotNDsfACLW",
  "key33": "4FW5sWqJ5Qb7CN2CwatkYZG961qJmPu2aySmRm2MVYqXsEqpKm6YDWpwZAefCAREaEW5HzXeDjnmR6VKP4bhT78S",
  "key34": "3TrwjmyhUGvHiUaS36stsZwuBBC8op72oqqYqVamq9nFf3hgtFcpM2enaHWEnF6ZGUBhLLSuhhWmtxEjgY4UNFpA",
  "key35": "2F7urq6xkaemKg86WRsM7Vdjjz9qcijELfcZtdvcQi1brPfK5SPEcV9ur1d1ND2c3ewBCBHkuEkVLfgjRTSsWLMa",
  "key36": "3bLsdgPXsCb78S2pvUKUeStRhmRA5EPdKQjEkPZnQdwz38q7pmoKQzuViLciFpjenzVnDPsVoBzeDyiGqApbF7uV",
  "key37": "5NSRcmNCUaXu3Ghav1yQJM4bayiLUaRcCKuf3k9pH9UweMxGej2Kt6GxNNjGUesCM4m4P1cXQYMRshoBxAku21Y",
  "key38": "27TyZBZNtQLdXyr5p45caKUcd5vZLdRo6Yp6agqfSDC3vwVFDA7CPJcD4aXPaVTn3h6tKbNcNfTxQRRZRSKGQ7Lv",
  "key39": "5yjZvwwcxJ3abxJWPgMdT94Mj1SqMGVGjnEAunNotPKPHzcaEovkkTjZMzaurcmrAmeoQYrNSYAVeNfBcmDgUaYN",
  "key40": "36FWKfSGL2Eq3zrqi9goWrVwqCMCbmbvWuVURXBmHz5acX2DjFhERJFjKM6jFX49jETTcj929yorN2h8v1L3Lnb9"
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
