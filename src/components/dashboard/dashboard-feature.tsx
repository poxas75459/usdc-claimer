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
    "22mVycAwoZ6Y2a9Lba33HKhxxVX5u7ju8MpkKenCgxZk1wqGmSKenYiAcFSRWKVvcr8gaivmigGiuaAqSExuvrY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fxAqQas7g71h5HiJqE6P94iE5Mgu5pDrKUJEbf9uu6qRoLANMufMg9scSouo4MwbcrzT3nMAMJ31mAZacMn67A7",
  "key1": "24DLxz32bAAgspwTQEKioEFdVz3xtQVJ2pz72xccGFQvG4qVTAyG59xjcXPaaaKsT2e3bi4YKPrV8aWm8ZVDmq2W",
  "key2": "5ojJTiKfgmKx19RPMaAVZw7o7BX9bJsCrcZjx8EW3CDFSko6BB8xENktgXStq8kPnbcJ58dw2FyTJnhpcTvDbsqj",
  "key3": "3QAFm8j1Zv4YjSwdBkLoYnGfJ7TwU33ezW7tW7R6fdDTKrANT2asRdZaJFjan6LdNypyKq25hJRjX1bZP7btwPrF",
  "key4": "4gDCC1ox28KGVUZbu1umqYzvLcsSiff3oEdHp5Ke7NbJg7pLo8t4xNk43mtQrd2cHksfGLyEgkKzjNyJ9qr9mspg",
  "key5": "3h6qmyfDRNj443Nvnos5NruBWJWfcZQdakPxQQhVC9ZTfpw4X7HhhyirbEzqmDkQ6pR8UE9Vae3Ek92auwk2icry",
  "key6": "54GYGtF4nkrrA2yqo2FB5RCu5XAm4QeFCUGaTg8BcYDWHLHeYKWggNfaLc5dekVwUpe5mnCuaSZRsgWU6m3tjE54",
  "key7": "3hPSLt6D3qkdqts4YrWwrFfmHxcRLycFe6TeLLFUS1fQPnMZBwVSUM5xUNZiBFsFmZGvR1t7umq59xNyCS2ac2tt",
  "key8": "3ETP6GQT5khyquA4A1433DoJS1UtsJKKqDgLnrCHUkNWg53G7AK2hHcCqv5hk2Ap15R2Vogf4iTaRye5LowCusXK",
  "key9": "27vqgvjf5iQyUCM5AoNn9C1ys5mDS6NmxCov86ijtqbvWKQVB88hdMY4TARvEqptvqJwgPwXFydYn3JJngdT4oHx",
  "key10": "5y5eqqZhqMjWD3Eao6kP6nArJ2Tgzj21ugn7cAXLAJcVoo8Xy4ZzdXjMxtJrU8rb1fmf4K7aKfdTkoka7szwGvXA",
  "key11": "4DqKL7gC3Psp9gFpFLxNt11CQeXjeARSAHD5VPpTK3SistC785BGCjNyq5yXwLs1MvzoWE5ig15341g1YEbm2oTE",
  "key12": "4Pns2jDF7S65ApGHhmWwxtdUpaVHkgRHMNLVx69imAp9UmFb7EeUhwgj3MQn6uiconJzKNBAGBCvojEUCAXUBteA",
  "key13": "3jvWmvw6hB21S3DigNM1pGi48GmE8VUgvVZGcMaemhQX48R1dVALyR3sdDhsUc1GLoSkWKF8Zp4Yo9yMDUdmwmsS",
  "key14": "4aehRpFKq82tNryC5R5ZRuwK422CrVgKuQAYJyZhKvgEQksrxxPowM68VcUStQWAdMsoSJskZCSWb3uQVX7WoQck",
  "key15": "22PQ5nqpqHZaDbGWQcv2sPMrDfXFomM3SSxLYCrTkhRJMfxuV6h96ofpb6anin7AE64yhjirJVMed4k1vNy6FDKd",
  "key16": "LcBD4Wsu4QPmCPhTa1PgTmtJjotXeRTErWtnaZSFteUHdoo5C8J9DtjfT41e4Jg49jtzhR9ob6FNumTpfqTT3Ge",
  "key17": "Q2ao5azFoqqck7VYgZyoYFNsUkyK8u4h1BrQBwXXTP3VVKtaybt2kF9jaKq9EdbMfsdd62QGWXZTpGVpD9buLVK",
  "key18": "J3EGsd6VZU5DEJSYxWdkUy75aUUd9AGAmX8FPEguKPMJJhWst5cddS58LaSuFXJNAU6AtCUwiLw1icuaSNaaZ7W",
  "key19": "2MeFtdz7bKkDTvJabawyCxvBZWwD3y5jUQ8q7YMFwQSWyNSjzhC9f2mTJBB52fEEUAGL2sZknga8gkKdSM82TVE4",
  "key20": "5kLYx8HYvGhomn4Q5o7pQfkLB5GYYPT913Se1Qmq4yrqnqgZammh2rMeWLLpK5CjcQGUVLyqaQJhz1QXo9kqKnaJ",
  "key21": "5XzyUZXx34QGfQ9LCo2aaQbPyfwjG9sqx1tSVXhTh7EQZcPHfNwRpKUDk7XcVfFbqV557NBKD9xTKybTZ6zjNEwx",
  "key22": "5etHEai8RnxvacmBFQe4FMMiiXoRHoL4AJwgvYsGQhjdEfGBUUWryi4MQUishwe9EwXvPm37vkStsKCchHTH8W4E",
  "key23": "3iTBN3f6FeCLKrCCCqwAV3Drx5gH4fr7ZVzCzpnEHUHnPwvdTJ5iVKmpYmWQBzLTDRzqyGBrLPVMBchtatnpNJqU",
  "key24": "63WiuZCbVpf2CnxDNZLUmYcNCewfTUZ3N1unqWBX1XLLdjxSNU4j5xyQbpJddh1pHGxs8Cke3K2sBwWcmW13cwzV",
  "key25": "snKN3hVJDfL7XCChjWVvyaaVpZkxtKQBwGVtBe42eY1TSRCWWLcvnQgZcVWCCWSQcXZAYXAeQsxsTyZ5esieVvW",
  "key26": "67VmBiwUaYamwB6rKnD7L6LcRNCyk9qE8PUbuo6hzK3k1sm3nFW8gNhNwYqM7m5z84J9rFiXEx2pBaXHn4LozVnC",
  "key27": "tRQAAqiS2MYfGMsnhCSjtd4GJWuJ3tVpjr7Z2y8dHR5UM8bhkFDKhKWvA3wdJUDJT1VwPTM5aQBj5Hu5GJcCBFb",
  "key28": "W79zq7g5aQxcNpayjsMEDs2RZ8Hnmt1EVSftgB97Fp6bC8JnyKghd46J3g6vKMC1YXR7i4bd4nnQ8M5PDVuxu5p",
  "key29": "3BHUYrbdVkHBLeHBNUKbvBwhEhwDQvTBEonoC4Sq483XN2j9BxryCjMzdnXFXT55Bzm3ds28h8XmPBrdbR8n7CBc",
  "key30": "4pebcQuFcNbLiSf3xJariJcT8vtobgE1gGmeFDumzKs43PSMYuqRgBEKdhFr8Zhj8znW7qiJ3xutmys2M6TzCKiR",
  "key31": "53Gy9pHA7qdhwM4eJrQZWNT1VZXypUHwtHTVTgprjFPvGDETPktBTwQwtptDBTqMJ3NAkFALChJXDDiMTHS46Enf",
  "key32": "3v3dJAgpMtAcXHCq8UssKzFArAQ1ZiF8BEToV3VUMWqKkKsZLRHiwbSvs55oSZUUzjkqGVtq2HW24MFP33oatgzY",
  "key33": "65TtbPUi8JDYTQ29QfbrTJ8wR5CVCvaAKaWbs4P3KtvUENmHBtizX7fLN27hjaXsfwenDVaZYMWam2Ab9ZQ264mT",
  "key34": "5EjMhtihsrRdyehoGo1hLfBLL7PkYoabgoTYiAo1fCFFFdwaUbYBQDBvVsMXtXjefhhrPEQ3rm1sp9Fz5VJbhNme",
  "key35": "4VWHEHrUMEs41UDAhXcTQShTLdmPsp6aFhPTmUK1R8RBjvRfn4z3sJ9NABUAaKT2mJVGtxsm9QEYuaSUVJvKTRZM",
  "key36": "3TZaSEqaBhPfyqwShKJZTQLiQknpf4yV6J56k3RatTVJfQHffKBeeQD1f19vNUhLCQvnvk1YKpkbV2bJwzYXeSSd",
  "key37": "2KbjAgNpzksQWmmmbX8nRzMctU4n8AxQvuR7kdEr2hSi1HteLjkCufRm6DiQuyvxqUHFXwvuRFaQ5eAKRybZ3Rwv",
  "key38": "2Uu3kG5fcr7gULSaKzGfdYNvuHgKRnH2LP4uup55tyCeGNmFg9urfGH4AxGQn9ndv3udxwAAyUTSMNKjNgqkEnqY",
  "key39": "5UpNNNwDFE8j3Ai7ZASWY1dhdxUeKsnFLXK6Rrr4Wdn8qLU5SYnrRnDbZu9sH5U1MuUWNCq13EJnJhWdiHQt7ifk",
  "key40": "WiH2tCrbW2JpesTAEr8NPfQShb81CMmT7ayQCKaxnBjuTpqtY7B2p1CQCJG16FgEaGYMFzy6ey5YRsNcQpzgrSP",
  "key41": "EUv4DWmhYCW42bTYZxqmfqjr7YxBjurbBK7G6F1wg5V2rDw5ctHer6tVLKfKv8XJh729fppgvJxNhjsuFc5Lwxe",
  "key42": "2kDwZpRXETbcA5j52hncvAiQmwtbJfxoJf2cfPtgPyDAnVgu6EsSjAYkwE1NUxia3SpPv8ip7bzfeA7VhN85t5Tb",
  "key43": "36zdYMaFiE6HtwvGu2hGwVk32ijKZdL1BSNEFJfE2rndyz9g6CSQKYnfKMvqH2oyVjjQDuSAtjHaHuxxFCCG5SzP",
  "key44": "3e7XMsiFmy4v3uiewQQgefGP7WFj8owkGC23gTWgybK9Yv2oWgMSFx5ajQqKMh64ZdfV7wamUPbrNst8FFF5zhhv"
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
