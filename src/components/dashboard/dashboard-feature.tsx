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
    "ZZ7QvfnZdNq5dy7oj8exXsiHZ7CMTt62DndBQHsbNGestbRdFbpRhGFZbRFaUdB1EzHigxFo7HqDV4P5xPzC2Td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yi23iC5ztKyoURQMh1YSiiKppmoz3aAHYZfYWJpih9LF3Ha1dksNN7JXdabAvWQa7JkWsrbVVDxJprANTE4WBCD",
  "key1": "5vfnW78qBWdHAV4cWGGNGL8mug41q9K4sjMc6NBX53DbzXroSqxJUVCoA2hLQLX1mVzt33YX6ioCnF5Da6iyvGEJ",
  "key2": "35p6r9vBZ6Yy7rzxDzLKEhhwijm8W3Y5SZY2jSVG3cwHWTF626gByv7nvsXbJho26siDMWnWWAtd9vXT3qgkkMJY",
  "key3": "2QGk7YSsHduWrCQnr5ZGWDhbpGaGrVW7tNchWEnTcQjNWcGy6Q8gYPe4C6V9zWE5cXhMRbrJGFaX9bTmCdoJiJEe",
  "key4": "3pqQX8FkU8vpWfRETMAW7QZoji3SV6aZm7Y3hHK4GfPJa2Cpw4b8KzrDXk7QJQ25v1uqeGn1mCdQhYCUkMiY3Sxh",
  "key5": "48F7sNQHe7b98kTFovDVLCpMeaMBKPhTB5P7BmRLHqtCjzEeU1JuGCE58A6zMZLvkBPbatjBW2eV4BP4NxCtvSRA",
  "key6": "2QHN7mtawDTeftgXGeTN3rx6EgDoSwvKs25TspUWmuxmp8wkj6LYY5nqEHf2bSmEV4fp11YKHDrzujr4i4yF21Lc",
  "key7": "42xeH3k3JWmbzjCyDji2eFBijA3LwhmHcvxzrf2MedHRudzfRKhsSJ5ZXPA1zEPjRUCnGR9XoYpGAsEBPDJsNmhc",
  "key8": "3j1kSwhwt6AiGV1Wwv5CSde3vyE26yNMs4YHvWsRiD5ZaTq7SJPmLyUyuVbrZ4mAS3gyDiV3dGLh3KAfDcbuCKsy",
  "key9": "3KzDJhBZyCVFF2xpM5DGsYj5ukLuw2Yw3LE89MASYshUdEdFcQRj8RSd23sXYthbgUEUWg8L5RWcEi7p31Wmnnsc",
  "key10": "xqfy6Q1MHi5fRcJrLB6syecC7ZNQPWp1XG6u6VXoktc4hbxJXtF82PAK2ow9NDU1XodjGzw9VqsBToGkt1ZS2vH",
  "key11": "rEeEuMaoPtTDCWTGAWjR1fqXo1h4pdxSd37aHBbzcRf2AmxbZYN5irbCHcbHZwZzUUwbkaEuDVWW4pYVeZUG52F",
  "key12": "qMmuuWvScMU41ajavJSoREQLctVaWgJao5cLJVjJ7iZjju6WjgLv39EjxG7mJCLYKFQETHTwgQ6MqdMRMBADEDy",
  "key13": "5LpFi3pW3MXmcmNqUYDeb3cYc4BnYPpUZ75tN2QmrsD4LiBeHefUdTPArLhJBtewGLY1Ykj46onP7sP5Jf7712iR",
  "key14": "XLy2YhE9Wvrqmvy4cAmbtSoUFpxCSQWN2uvj6yFMjfrtfWWUdiFvR1qYUYNYD74LWagxUZwLieidLHgXFgdCZo1",
  "key15": "2kr6KNSM8cWi5kS23PYvK4YTdBcvRaes87KpJd7WBLCAr1dN4ZmHMmFsFiRjJ3QPBw9kufMZjtJBd9xot5HuUFUk",
  "key16": "26WypjY1SipyrAwm9J5botVKKB9qvo7P2b48G3KGdQncPz1NU6o2ev4iEEfoa3ZTLpL7FqeSByoGJ2hnvpKE1L9K",
  "key17": "2SXNCC2cdpqAr2h3sz5qyvrD8RDth3MzBeirzGbeyVj14WZ4Bjsha9vJ2DBCtu1xdGS2Tdkcshg4YPrcojL6hxPK",
  "key18": "5jBMJk24h8xrJo3rLbFMBTV3Whc5mjkTjiaSGqMT161R5vWD7raLsG47ybtB55QcefspBFGfsbC9GrR2qkumvJEa",
  "key19": "4kXPmZMMxFmTFrZi9ARLsmmoYRoa9nyxQwJgdtsnusm1YHTCtavhafskwBh7QXjuDvihiUAd2Qgj3uT6wugrAhq3",
  "key20": "2yxKa1AzvsXJASmwf5yuJFsW78AbpmF4SBEuXuxpNth5CL3ZrNndbDHHj8twLL8t86U9Vv7JRmXkStKSbvrWvyCj",
  "key21": "4ZjUU2yBdyGa1oLaU8tmwPvHnah5aePhJZwqf6Mtziz9JsgG8f5Ss3iKYwQuUXYQ4wTzmNbKCu6VDME4drWofJMk",
  "key22": "4Uap34GJfCCYCMbfwUg1zb3PfPVnr465hYvL25daesX1zoWDndURu7TBbhaNPfX7pLhDC8mTMew2ayA8gLGvSoLr",
  "key23": "647vRKdqfqSREJWMEmAw36fJ1U4MKfkKoY68U7erA8nEtqYeMsHifR4Ke5VVskPzut8FJBeVUUnoiBLV5jdvKtJ",
  "key24": "5nFcVqscVqFpyqJLMRa2V4AEjtJdEoVAipc5XNa4QQENgxE4tAG3YFUAEGrZ7MGFbzN2JvUCLnXgHaZweBHAJ2Qh",
  "key25": "e2pZ3AxkKrdh9g2WYdfctV9GvChmdZwLPtdUEPrctDNUrVthnsBsZbjHeZDahNmdXK6JVpLeEZjTxRwe3G3Y335",
  "key26": "5hUTA1xPvBG27Gk4dfc6MCJkqo8TyMVTiE4ifHSarMjPgYGPiwJ4wiEVBMU7DPKRz6koDEjWitsvvQNUgRTXUgZh",
  "key27": "3bPrCec2wjMJyS3NL1Lb73faVJBnqJrqXwk5s8BR3KVbMuWamy5R4aUEVKjmTiteF8HAvuLpfoEifG647x2gWRYE",
  "key28": "G482CmZ7dvKdoqf2TmXT5yfZAKkRqxfAezTsYm4wr2yFognwUEmqJSmTu13Ha869AhAV23Zsn8YAW63j3HA6fnK",
  "key29": "4f8vNUxgquiMrmVKEd3cB31w8iSDaACw7v47zoqN1U2xtik6o5d5zmdSGo42BbNU8EwsybrthDGcQyg4VKYN9Eix",
  "key30": "4hYdKERZJ6F9EPL1x5MSCyrcFredfB3FV1cSC21diXD2zF88z3EqoePmFHrrZ3eR1zg8MsAzoLrqSegNrj6vjxzV",
  "key31": "2XJitxKodbMA8ZCNznABfFxhNQ7oeSZ8J16wzV3s1iwJjMt7ZBWfT5CeBu8DqS1WmG4GiDS3ZvyaHFX83Q4zqGbD",
  "key32": "2KKpk8HEEH6fe9dskitwm6o3VuAVxmKXXBhLMhG27VtTucd3JjRywCQSsSuyZfXX91aaFQcRUNMVeX9adM5igGYZ",
  "key33": "2aj5o77RHJBXZCBc1uixeFvvVti4mwGzhmxNrsb9UTPsvqH4JqdYt7iXc54SNJqf2VUizXxByHpEPh94Va1inAEA",
  "key34": "5ePsKAYN79ByxJT81C9qGcxtvzUcLa6UA1MT39fzc8s1SvmGj7Qga7hiJHzkWrxufv7XMdY6E2gUnbxduT5DzLz3",
  "key35": "TmGAhsg5yqLw82M9ueQNt2RFCdwcDfzWubNQAWGbrbRTDqa7idK9JdbJTZcTG9ekLQ2uGgxNN8deKjCVzzefSHi",
  "key36": "56SVH8GDY1TDMsvtVRpCqrXH5Jjo5bzoPAKM6g51DnvNDnUwQ9NEjnFTHckmagkYocg4bc3NdEU5kokZtsujhmqa",
  "key37": "SadtgFDkwe1Qvhm76kpN5oxP9z9TmsbjexgtM4nZZfX8FviDe8NeaTvxe31oCYSx1oGjUyLU6sptP7LcNWmRgro",
  "key38": "3TsJ8zhJRNy3q1zQakWj1E44ktvGwu5Pd9XPfXWDTEjjjKzr3CHaMrprWUk81JG5FXDSemog9cxxT39q15M7nrkY",
  "key39": "5phiYnUf7J7qViigMaaU6LXY7aBJdtDZYhdVnFPaEAyAbNV1v4VzEYcybrbNCk1pURHgvvwM89TBJgCbGTQMPVBR",
  "key40": "5fZGFV6ucE6xPtChtWWgoqTQ4DSQFArrMQwRYKt4Ddt5bTQrZwSNestKE2nRjVLJ83DTD5Dr7C9GkxpFc2iNyR1F",
  "key41": "3ceGhGe3qM99TYGYpRh4QV7C7y2L2eXq4vrdWncxnLgVxQuy1btDj6vQTmCUTca2YK6HabkE5MtgFvDMfqvkWsKo",
  "key42": "3dj6c8d5yn5fot5KynAdVq3zRdJ5qtYShAL6YdMbDr5iSELZSuGgyujTzH1c6GhGuaEGj6gCoKBDtqLvBJ6SM9bn",
  "key43": "4TTMt9nMgM8wjioZuHdyW9mKkTTeGWKAFxoQ7NxrEUoAR5wdpYM8RiE99PEBaNTm9Mj8aqpT768XmjiTE3SAQS2o",
  "key44": "RYGTuYAQWD2YkWis52YcDtfAez77ckeCSNFtcrx9rYnwwf5gUSmaX7qEF65wT7UQdHgeJuJAfCUMyvxDYNcG3de",
  "key45": "5ejMF3BGHZC58Gf7oXiqnyZcX14Nxk2JsTs4XzthdvkCWUQGY9Nw9gNf1YERC7BNW34gtu6xrRmxT7uEJkRcvazm"
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
