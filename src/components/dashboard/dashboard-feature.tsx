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
    "29DzjBZHSeZUZuSCH8HhDbuQEjUD9JsRF6a4TcqRv8Y6JPMP49N7N44rePtAu3matR5izGpZgW1g5k5bBBfnvoMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n2tXysogugzsEXHeRNGue7fiKrSb3HzfX2DLZCpwKCtBxMojTX5GCrampdmXGLwNrjNTtkaK7RUjDVrfLhsmk54",
  "key1": "2DyNaNiohyiLrGaXPF8nJ7E4jEFzW945VXnNCPWWjbH94tk1Gpwwqp4GLqU8tp2tZjURb4Bj2TAn7fEoVXmwj24z",
  "key2": "2YxukwbMhiKziGLUNg9kMwst9Htu441CrA8o4TvNZ47birXh9NZq6pq7fvzyGRe8fKPz5ryLFMWVNBNh6YvBdUz3",
  "key3": "5PC7Jca3bRr3QPgsQSWZE1YgGm2mweJJmcvHRrNbNHMxqiBVhnS5SojxtVrurMvsAW8cdkLKugTkUKvidp3VY4ie",
  "key4": "2eFRGGoBD3KYHtLXQvY2AjHaxYdRMUEFx2t5ZPR8nH76ko9WB7gRdxNZFo5Ni5Zpd2dCehNQ5wJpAUiv7DRsEgFg",
  "key5": "3FLAMvpqcW3khZcyxyLaLNc8dtyrjQ72BhT13M4TMF5AemriBFSkLJC5iZvpWVrfyAXy42184jTeHiLu3jxphgAt",
  "key6": "4JpKwDfNfEUWcrqqEBFTXNyBHfRyuXkJWRCaRFcTXawfwMSVePFthdXWDC1TykKTmGCiBD8GSB4C44pG3kfDC2EK",
  "key7": "4QNQQEJDNw75y8koxv2kYb2d7fnSgUG7feu2zGaTrzYVXnfSeonys87u17H2RRSmS6WweKe4tszy2fsDaJMxNMTR",
  "key8": "56fHHuCNhhkV6GiGeTZArcHnikbo9w44ZrahRDdtAt6pEt7brYtDji3zpLCKzCRFyLAR1HXPFFrvCUKHxYCE4zx3",
  "key9": "3eWLi67Z1a4jrJ52t3AGCE4kmQco258uficoVxVTMgUWaSPycgsNnXWM4o7xp51iNVXAoK3PsA7kXJDKjyJ5STVu",
  "key10": "4yj2fakxqVENJCu5asnZdXaqK9ESvTzVpbLLEGrAjSxqqCY3ozyq42Uad5WxsV3bsQEwmk4NyHKorwnJwXq9Eyiq",
  "key11": "4eQvKcp24sirpbg8qDquJfR2arQ1YqzbqHr2jC6dDznVJ6qJxmsaLhTGSHG4GV255Zs5ZaTkULUP2Xpz9AS89aCU",
  "key12": "3f42P5owZVqYdLxzMdtxsZKGkc5FtuW217QV7J4XbZxBgzsPEmort3zjL9CHuB2DtqYWJNB18ZKENcjYpHTB2ms2",
  "key13": "58W3LcNX3Q3MLdxS3m7uhRyrRhDe5BTyaXLNYg6Gq8wQaAACQFiZ2bdYVJhGqnukkNHukWUv3zd1XQ9xjhpzNaUw",
  "key14": "644JGAFuVqsXAxMFXnMkCgCTkirSyNKLXpvzNzwh7tYH3BNJw6iaTFwHNn792UriX1Ht1pN7ksP9MGgAyy2MTaRx",
  "key15": "zbHeWuz7DPJAf6aNaDtoLizn9AjyAF8wCneqqAGkSxApVgb4queQv3BFq2JbHvQmHiEtKFPGxD9K2JDCPv3yPqw",
  "key16": "2qVZPGtB9YJYnSms5HevGiAJ2UbzbUdsLdWF71ANsFPRURgoVp5Eivmd5wvNSqCrgoRFhBfi6MFAaHKktv17wLTK",
  "key17": "2gX9SgHiPtb76bEUG4i9CEy1Thomt36t4eznu8Lm26Bxy9ofSr7RnZRcnJCtx7R5eCEEJqWPbAA4JWuwwxGzhb5D",
  "key18": "zXSYkrNr8SXu6QUuSBf7AQiENJMpYPm1Kym3vq3ANDuMMfg8YECJ1ySSyDEFoGvwd43dXNKfQwBiAchp6j9tr7Q",
  "key19": "4Hz9PeeZ7B9dUcxjoX9mYmw5y3J7qdxbwURn7SsRtKee6czWGfEsmwZXuJhArRn79Psnz4JDWE9MCixu3S5vgarM",
  "key20": "2WfHsdyhvDWdr5c4Zye76yg5U1mXqYJ76Rs4GQx8HJYgoEnTvPdiREjPgoJAWT8pDA5auVYed441otnkAj9UaHjv",
  "key21": "Gv9F4oJFVuBX7nA82xekM2SGmquJDrGphjC5acckjMmYDma3VYBWQMB1Jj8roaunC5hpND1uQuJesp89M8wCdYu",
  "key22": "2uVnNVAsetuoBcAJab5b4Vr2yNJvf875rYEoJHt5MdXTUZmjUoYYqqoyQex1zyGmhYhyihEDNGMK5UP97B4t2B7c",
  "key23": "62HCoAUYEKHcPHdELHHcV1KvgzKm6ZoqS54pEu16TJQH9v95PmTNSApSjuwtbdYXpmMhEZUqgMg5AmwF1X8wWpPx",
  "key24": "4E2Hnp8XPUXsWFf4zM7jfdLEveAQgZfYKqhuRb3B3Y8zPt2WreXdiWSPnEtAWYNpr75WWqGhCSHxFWjyrjM8h375",
  "key25": "3coXqvxHXo2tukzzoLg5KPQq1fnDeS4DJsyBazMzxVpiF9BKR3rEmY5qcryr8t9KYgRGopubm4pvdExoR8bMQ1xG",
  "key26": "54KgMPxHSVgnLKE8VvZC7ZcTruiUrBWzybM27hH3XrevYtTqQsbwSb9NWjPgYBv9i4SV4HPQAW5CLRKXTg1gbWjd",
  "key27": "32Xck5qXCWMN5eU1GZDcPxEE6RCiUzbV9ghLmbkuCeEAzmWL9pPDoegK5Aq8Sg1zabCpEeGiCpdo6HRLU9p285f1",
  "key28": "2BYhciwfkLxpqnQZSX7FW87wP9H36dobLZjGg7p48dbSKSqvqkRs2svYnDFV38q3zCESWqABxoryBB5ARFP1sb29",
  "key29": "2HgZYEiGG9WZQbVLSZX1gpuHUZv8xVSFApZwAB8vfWwRraMF4R9NmCZrG9PuXFZtDGW6jTWfbg2paZ1VraAZ7M5L",
  "key30": "41uoUtTAGra8nxd74sEzyuzUdTvnftA6qhQ8s3Wxtg3FWdseCXPVqYUbMM3dxW9WMZMG9npkHre7FtZK4Q4J4NTB",
  "key31": "4g7PMBj1CoMhnYv9nF39hxHaiugyNaeFxtxMWU1yLzNratpmNmRDCEMxapanoxzHFKCDvkC5fYVaL7veXnYkoPC",
  "key32": "4eEfqyodRAjhQUPqodN2zu2fXyzHuXWFJ4BeBQVznRxevtUd13zHhxKQDWufztFuESq1KRS9Pch1QnzqmBwsWx2D",
  "key33": "2YN6r55BHSgJP5mMQAMGGQYEjHGFYYVWFvS2FSrnJTpQ3Sz46SNDa3fD5RSNWgeSn38uH8BRW9UiupJGa5kUS8mV",
  "key34": "5y78KPL3DjH2s8WAKxu2QPjJJDUYzNPsDt9hnBA5BxesoqYpLp9uV6kxg4W6hhMXUMDwpsDHK9UxBpFu8BLVofWH",
  "key35": "5PUf6FTCLj7uCVTLJs4RKWCUDyB3WXSW2Xni93dvQkGLTpnXHae2KmmaT6z9X1uiXZ6VvdvUobp7daVCboGYf6A1",
  "key36": "TEc89qBv56va2VxGXUwGKRh8Ti3XdgWDpD9Nux5tPkA45YnAfPigyZSfT6pZcB2o7YwEB68PFRw4Tmome1jbpkN",
  "key37": "4Xy9xpLmeR3PrPPfmrBJuVxg9kJ4ZF5gMrkm8kwqN3zAvbDV8AfQgEvr7zQy196VPfZMgpo9uwnKFEtsSAyAFWob",
  "key38": "2S2aoiWjszNS2ZZH7jeFwunqELMZYV6nWfAHFNBkpVd52NM1YEQHrZ7FWHZG4RiDK1wEf4JQDc4r5TkBQUtfcJ7t",
  "key39": "3a2cUxdNw5yEYVwfj5BBLRABRLKt7vsFzLzSQLhvVWbTgYy1h8TJS7zSoQ89TVj32c2hxcxibqcDwgy6WdrWkFsC",
  "key40": "2Nma3gu4ffG9PPweFDwrKWtR6ocMsg6qxWEfTaTLzUcvE85yqHnWF864571vrN5MkiKarb83vF4YDWWU3MkaG9xh",
  "key41": "3djwPUuD2bFSaFxxwhEKnTumQSdfhFanfovUaWrnZ4Un2CDhhTXKi8u21hYwocCgPCpSEiAwevV3ATWUo6RhqXVY"
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
