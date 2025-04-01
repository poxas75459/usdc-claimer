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
    "54A8Eyen46Q5rrAsm6BH8qAxyEd9PdFQSHrAifSvbzcxnX5ntaJNT5jp3fMpGo8xXxFm8PE4eAc2dfJi7ia3Urm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yRkRyuN1bYNfhmkhvp9axKHe5iPtBskwjErdkoJdKuPjNjcbCCw73FMMPGPRF53cobsFUm3HwzoCEnhTAXAqwmv",
  "key1": "5KkKYBojzpkdFPy3DJba7jouEqpeA9W9oZtQFjvQMfSB8fWmtuHtf8v9WBH5ArnP51ay2dcYNJnkKkUX3PRTp8n8",
  "key2": "3jue3jfcLoy99n5a174iAHtCySaePJW9JGNcxwo5ZG3ppzC7WwdvSkVcUuFU8RfVZFreRGvsbLXk9M9PfBxJPmJk",
  "key3": "34roC7SMrfghfinGDT5JcjifNzK5xAPWzJ4oXDvjcxf6tkjAUe6ULDBov16nw5nMxx1dhNU6PQuq1yvRS3dWRW16",
  "key4": "6dtcohgZQd1M57yJZgChce8tFbNRrQV6Eew4nV3y2UtweT2RVLuYaUyFjZbjiPaHspJTkK29GvdDuRFmahcifPr",
  "key5": "3t1MnuH8qDGtbZ9vgH3xPC9mks5raEbj8nm1NL1vkHzdQB35ZFSxUNfXNgT6qWg7KgJbTSAs9NMrSD8Ur5EdRTtc",
  "key6": "4g6NCXmFM514HZt4BHhceiK38UtWvYFrV8F5hLGgz8xGYYTUQRe5eQvRBijrKr1XyXSYCxMxLAopqvHXxnWLu4sN",
  "key7": "bEFjsNxaqZqN9spkX1gSZvKJ479VY6Xyb4XXFDN3KAAp5wSZ3QHBdVhs8u4gsLESFpRnMXtuZ9zqbeiQDPGt8XE",
  "key8": "4971LuWMYsRtxZ6ZPWjUry1gPAyEkan888ifcj5cCeHLuGU5ajYFdUpdnCanjEYTEPmzAV6DhGQB4XHK184XNdB5",
  "key9": "4EBpWphwPdwEK4LfrDTXTy6KZFX8qEuD7qKJW4Gu8ebcAgGGf2aBzQctg78U3f4mLVzmZpSMamgsEPxawMk1nMfo",
  "key10": "uoBAApNJhs8c9dPcDnpDVv94NRpv5EbLFjvez23TdwbYa68d1XpvSTHkZYX3wwtGXaJ9dErWw6Asa2S6tVUPi9S",
  "key11": "xXTwdECsFHbEn1wXwvG75f3iJhcHJk3uHjZrBJfQjSzxqgGWWeNBR3t5zumXqM1EzCV5XVsyEW6AHeUJ8Z6fKyt",
  "key12": "3PNwRHNSj5bPJU4S7Pf66DGsUHp36aWAuvms8e9guUSWj7zZ9X3mfGzz4Ld6Vv1ZVkybJ3XwJVFyQYmeuKsDsjDi",
  "key13": "3DRaSGca3PNcP1PxbU6dBQRCHfanwbu7caismHuWJqwP95K5M8WKXoyNDBG6gPt88pQPqQ7XQWy9oQkwFFZWP8JX",
  "key14": "5KWs8SwdwooyEyPoa6WJRfBsMCswy3Luc5a5b77jzX2G6tkLnzczpNgX2irRReB64Re4mWvM962WikeyeajnjKX",
  "key15": "5BznAJF1561vhUMRuHKs7B96gqXkP9qGUW66wVH7jMnCoPUMcZaJ2mCizWrwxEdJ61ws1EB83VeEXttMVpDtVyHr",
  "key16": "2nQrBDfoHSwHxpoHQtLHkyqRJ5Y1JaosGYXP419ME5KHD96bZvvTyD7kivPri1kEz5J1JCXGN5enWp73hEFZpe3v",
  "key17": "2mTLBJtoNZBqdAG8jjyRHKDmozabvcyHfN88de6Rpw53mTSr5TnFGBtuncg5BjddHVkW8CoZoFiXJoKJapcV4hts",
  "key18": "5xn8QnpEh1eYYTXENVasLASef4zGgYyVVZg7SuyNhKNUhZstrGZV3aahKvQi8xhqAf46oAv9XrBHZBndQ9xo6pGw",
  "key19": "4jJRy8gdBKUgU3BpU9HY4Ayw7KhTbQECKAo45h1U1mgnSEdCGsyBnNFFg9U4Jk33pXyh2PZvzHyRKTZ2C9PGLKTT",
  "key20": "4xnXjtVPnWDpeZ5kbVLVvU6LTf8YZx63PUQeJuptMzqLt7yjgL6ZSsZn7CTDEfo5mPJBxxYxY1s32xNgJb4Ayvfk",
  "key21": "5CuEYAqfk38xVCYhPsW9kb3fS8TJgauLxpcXXEVsPGxgY4HoT9KjszyYYDzyrW57SWrpzvU8ckCVRLXb8inyenBj",
  "key22": "48htF7W5XkGSrtF6gGzgiC5kyHTxLzgUgM55ko3m6yPwjerFMCFNTFgXGXwZdLM8R98HREv4b3mhr2oayM3AEGVR",
  "key23": "CgjpT6ovUhKwF5GxYXDpPaVMdurqQY3h61fYj1xDMycHx2DQQdftD1bLkXMdYPBwgQU3vF8W4QMUYHqwANj9h5j",
  "key24": "pLVNUutdJ1MnVstfuPNNL6BD2srPNYcfqeRmDXN1NLyVKnSAFUmCS88WG4k9QogPBgBM82B4YGymZyuFNVNXhTk",
  "key25": "4FS3aMt9A1bBRb19j8JMzetfAqFUu5fAKbn8rDfH79pr1TZtbTc6CbsfmukhZh63NrhxenDooWyQNKQgG5YEunuE",
  "key26": "5d1ckUooVhvwmhrnb8fkgy1HW4xf7juJ17YfU8YgJtAoi1tx4L6CYzhSeTAgsPnNzhGbr36WXYyiY9tKYTY72aw",
  "key27": "jhoRoXp53mP7MsM1oCVh9cSJVZQThuAcbaNf7P8vP1mS5QJs9XXAQuQ5eMVgLdGMN5FD4KVTbms2yyBTM7FAHaT",
  "key28": "5LFqN7w2UZtVVAWC5a7ee9id12J76UDi61fdYNzQEpFWFhEUhcstdGNoDDaZH28Tx4ymGY29ZK1f3sMq3Ldbria7",
  "key29": "auQfnBJDGB35qeFSSFVettrvW2JB6mDnMXXgybPGwNLARC8gaJZxmUoeMvLVjfyGAuJXjfa4kk5aehMZYxDs2Ur",
  "key30": "3L4fUmcQKx7NdgwL5puPv49ei74W5Jaom7FsdkgNHSUhFTMxskAinU8Z9m6ZhpZYSS2qPUEBgPm9u8oQzMJ5HkkL",
  "key31": "zFK6RBLVUrMmuDKgaznTdpG4Etixwmd3zS7H4p8c4qQyZQbH5WLWYSjnENpJJVUMYdMzJG8Lg3B8nF1HBXtUWyY",
  "key32": "2LADjSgdR3cMzMunMn8DKKyYQmHdk8WFUmwtvciViCJ5TKdUBuSJ7tUfSQkUiNG8SFevFdkkDKTxGqQYLWTfZEEW",
  "key33": "3YnfZBSGQj8ZR9sn8vFDWHJnGf7DJrbzw2KtfrH6XRsjVmYN4J1Z2RZa9A3EMcYFVWcZc2vkiUJ8R631HLSJwYvS",
  "key34": "2p9WD1Qwkti2W3z3TnYFKW4GzkY6aCGbn56icyom1a5G6FwphXFH1ZnU4GyxUM8FHCAPFTU3DJyZ7rsYtcXKafPn",
  "key35": "657Pi7TTrDyfPsLCerF23J3u2XrtQpUiBz8o4atskThgfjmt6YVNechqf1V7ogKKEAzSJWXjpeB6H94LzQcGWKwj",
  "key36": "3eHE79KwgCJg35wKAix9zmUajmiKCxxgHCJNaecisCjwo1VqBuWZ11LnFgwKwDG8JRfhLAB4VgHwFjkVKcewfd9h",
  "key37": "289M2ofM7yK4hQJE7aKt3JvHunhCg7rEXQyE86onPAb89hxufRZ7mzxtHMXBTj5jsrvGJwCgqzqd5ZCudeNyRXQt",
  "key38": "4m42gnf3T5AawjBN3mvi6Z5qZzjS7XiHfAPqhet3ZV2SGTLCthpjcyDQ2GN9p7LsiMrnBr8BoXwKNEcQkHprVvGq",
  "key39": "3jvSkP4P5Tyyt1n5u239oRxVHfFQu5Hq6usjYxGpTgy8boSAGXsJ85qMndxqQPpCvBsssTVzfCGHjWWC5nhBJvz5",
  "key40": "tNmSxGye184tiGdAAW7WPdpyof9Rq34w73TswF74gjK8mk5CPkqLYxVNQU2qa9i5UJDRmxmbciYJv2ATxovx6Yo",
  "key41": "Xj2mepyEJfFhDYt6Tev6UoaYZfbSGLYKu9WQ7YuBmSWv9RBva9wX8RHuJHfUC1hAbny3ARo3HMJWDnQua4QSYYS",
  "key42": "4ztmXrMPEMViW4miKifVnLSZgQdkqDHinEmw97NqUhHtXJ6rZGQyfCNR6vC9N6Csr9L9JmF5b1CDWrtNcBH6UdyG",
  "key43": "2fA9LigVDE69jxCLQya13PK1vz5EE33KykxyhoZhEamvmVcA2meRjDChLqP2NLNzQ1tDXp6TTqGV9NiAjCAfAww3",
  "key44": "5oNXwWZPQPGZEWqbawQNrGnMzMdzWWcgn5zs3vwfC1cbmfNVGLFJ4KtdGiYHQJiazpbi8k5vvVh6sKsdhXU3ikEZ",
  "key45": "2iL9YaMjThD9rfbczryfTWxDkC42todWrWyLr4yMDRASKw99yQnZ9YvXENja7ppUqvspwJDzRs6W2RRn3DaPPSGR",
  "key46": "2PoNbSJVd1XgYnNFTBgiMeTARpwWo7FeduEoK23iT6FnnkukoGyoHn91V7rRjsETPhHVN6n5cK3GmizwrT5Kqx4Q",
  "key47": "ej5jczBvuVf23s5UwGAPiqPyXFqFdjdcFYCUE2uXsXMRYE4t2a3iR8GY47xdtKzyN9e87YSS5G3zt7qSWmsgZw3"
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
