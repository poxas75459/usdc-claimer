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
    "5tCRpfoewfqSeNR4BNtPZhK4fvV7sVFbQsV4v4frEjsmHj15YtFeLk7u2eLypEnCvweGL5rFucACTJjvhqbdWhtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TddabNjgKumzdvwCQb39DziBk1fiCsoQ8krDwQvQnLAkpx7GrWzm1HjkCz4QTV4aHoMATycQQ8Je1n5iaW2wuh9",
  "key1": "4m9jrUCJ1GtNbLiUp5563zkGrSJG42cC4CvZTFsjqouEMwbs1aSWrEFgWCkzXojfcvWzNSbqx2A1QV8qnEKUjud9",
  "key2": "4m6PvRSTspx1d9xxmpEPFdjqaY7VZYVuoqPXafVDU1Bg5DGuMkp583UgXi7V9n2h3tsa3oyQWfhw43n78hJ1LCYU",
  "key3": "ikhZuKbNjhfDQJHh1yG14x51s9zb8zYMdKwBzmwCxrC7xhu67JMVcW483pVtddN5eR93EUmRH2mfJJ394pmZo5H",
  "key4": "5UmFMXUxXBTSjXSRnQT7w5Z3fLwNqgjGo81beRmweouQ16m2Q4pYWae1UVE7d3Gr5WWqbYsGyj9Gkg1VQJVeRuQp",
  "key5": "2JvpU7mWdjrz1ahpDk2EZLRg6VSS1sppt15ATZJTve9u44k4a3aqcwRpNG1mDBSjTJXWR2G4MM7GmSThnvsNb4oL",
  "key6": "23nA3hBMzjStdukJMCVD9TqAh4hSYgs1QwCDkNcTLvk9jFLHMXVu1DQi8HkgN2nJw5N4gk8ZxauPGxgUF7xFsGF2",
  "key7": "2QHFf77MD4S4jumKQUVTApZNAQWfA5T5k2uoh2Ec51fPk1opJkygJqCrxjvLS9Ycb82y8Lq4FxX6EqjbKrsefhm2",
  "key8": "Swmg8LFncJVHVoNUZLp3GsoaTxzYcvr7FUkLGupgDqdJvMV9X8mpoAxKkXyxMCS2hZ5qDJ922dvT2s6irkWCqse",
  "key9": "34wGSRj48F3GM1W5NVrxEycvBkAXFP7vWkDwa7HahKwmZHku8mYRipY4ATCdStgb9AjhBNBESN4j78uGr4UgrENA",
  "key10": "37gJugRXMbAaZtwr8L1k9SYChhHry4SdmPtu4xNjyacbX21HoNXyCiSajGMJJ91nPjnkTKy3bj27BPSMuyeKky3x",
  "key11": "3SBambEfJ6mV7sB6cVa1v3KtCtiXYTABTZFZZzE5LRWm3eMuoWVZx7TD6KEG3TyAMpZFSta1fiMCR4NofiLk5M34",
  "key12": "3hj88hN3XKZ6TE2QKKsPFuJKQwxvpAyNwJGvBhg3zesNS9UJAzCg2pmVhpxbwEkDF9d8mmSzBJBAeBhoBdv2Zqv4",
  "key13": "YD6MvACGKHamtnzWg5Bk16FPstAzyTh7DN4VcNAwTHyhLMSdcjPUABn3eiXVhDoVpQGTEm6Buyh3GryGeWV7b18",
  "key14": "2SkfedPkmUrZ1inrzmE37ttiBiTaBUZjXaHkXnFutXJVUCdZFPEQqjFpvSmEbN8xGunGEqrC1323D8NcHGkefTN9",
  "key15": "4dTBb2PvJFZvr9mjzxYeNjvstExLQKFZjiGN4Y5kdVgS7qKcUKaMhRAAvpirfJLn56sxpGFtczC8zAv5oQWsUD2p",
  "key16": "5b7XRSseaeLVrpaD9nY8pdNgMp3zbRahj9Dt8BsFn6c6KZswSX7Uk416uYkCch4pUmdVBCwnPyqJwfySSzWb3Uty",
  "key17": "5Fp22bBLkNKrKnpzgaELphKrvkFVk1WRbC77DgKKQBqtbT1eadT7QdboRjgWup9FdKATNjjsBFagoe3sviBj4GXw",
  "key18": "3cykAt2FJAPxSRhxkwy9HmeqQGqhtXpJGMdn4B7vfcGcof9MNaNRdvs89cvWgih37mN7asE684n5tw6fut4XQNYL",
  "key19": "4yE9pENjHvP7mFeBGt2Ke5LPrkUmevDwLoXpu9aLWfc65VAWoeDQfLKGzvmpCgBENR8sBXLQiv3WiMozkXrwRqnS",
  "key20": "3kgx22W6iZfnVjfxcTQBHUKUpRnS7vzuVegPTif4HCtgVANL5Lb9rea7WmkyeLikVVEoHVXFbnATAGq3MmsVZpDP",
  "key21": "5fziTUvFSqqzRC2g1kAPTsUu7iEq64FRRBbEcddJv6wQUtpKdBJZZwfv8m7E1uW3MuhTCjyJjEJZJmncDGyZcwXB",
  "key22": "3GeryPAkMgg78kTsfQYza6uLr1gs2NP8D3wSVrTfBDJE3QhwdGY67kxExgBLRiptfRnej8RJ7hVUe6P7rErR7csM",
  "key23": "2oy2Dw79bMPrpPS3Xsc5eBK1bnjwJauZRQSqZpC3aoJvtDHBhrNuVACRTDaERXvuWHJvAJcS3JzvL49qitbkvTYk",
  "key24": "7osfx8VdffWu4x8eGwjMYhpt9MCCEvRRt6ineYK7S5PFX3MvajzzKUB26YD7Gbv3cGDKfk5dwLoGyByHRPmAypd",
  "key25": "4gqjhW4XMWxmhE2k3LatjUYhj2gBf1NthqDQaU7jKt1FFa9R6kMR8ziLqz3d2P2xfAET5bujgu6mPhEoV28Z5Wje",
  "key26": "2aZFemfTLKseSK2rvykaXjPrEjDcXjGkMwhjLQjFBbE4Z3jSPtoHGQqYs4N95jrqhgXpzkTgVZ8wdkkAWwApaZEw",
  "key27": "44RQyRr59amBgaJnTvkNf3rr7z3My5B41xBwPZDNDnvPSUXJPL6M9ynG7wvkQpqiuNmd6waFb5j5CHr9WbvxeYBM",
  "key28": "3rYnMF4RPH6Yj7u5wHPuUoUomfHzyZpcwBVvuxLic2ZCwr4ApJZcTZ16xxp9xcRE6aMCJXvBjCrCwTWMeikgt2Yc",
  "key29": "ipViLFEgpKvZFZRqHfXZq37u34moxKgTdveVsnckmnRFydrMsii7Hsp3YJ4vkuTMt2ehHdLPByNY4iHnFUYvQKy",
  "key30": "3hqN8ygb53WpMvDFA58nC7iaAEaUPQ8ZxGJTm21fErcbuB6SapMDWnTXgR5GyJu1vhVNr1Pbwjm6zqnM5gt9Gqzq",
  "key31": "5DTEpL3dNcuxWcuQxdNRqUvx3t9E7EQWoxpdDt5hctnEwqTxkv5vy5q6XKV8CgH5mymT3z5JkDcb4ZP59HnKpm6F",
  "key32": "b2ppurnVrwYQSPTbV1pnJSnAaJ9oUus4TzDtVVjTwkoUGst8sy7BgAyWvumS2B2KwfVbdHrehmZDp3yxyZje9Rr",
  "key33": "61W5c7nAiWwe88WgD3BfQEiqnXdoGeaTfLzFAKmoFn9D2m5nTAWJzNTprhfjnhFDatu5Eeri1KLwoX2zkX23rbLU",
  "key34": "24MjDNFxTQoRN8B4UnJcXuZQyPfwhqJCnbghsPXQPCptL9HhknsbygUCH37qdPdwBH28VAz4WxytKYnrzq7dcBnF",
  "key35": "2NAADcV2QG7XrVydbKURDQhmaZYhHaHH7WcU1m2JnAfuVxo5oren1pkQ9c4zc9zACGe6SHYVAHvXYQWViBFZcZJP",
  "key36": "5n3W8nDVAsYpWe5t838ELUVxmCtgDo97X6Suy9KH9aQPLyGGi82pHWLiUkgDKcjen5Cr2oUfRxXi2pG3ynSn6ks9",
  "key37": "34ceKPJgvsBEcCbCnKKaopqSP7tcJX9xPjWkbgWW5BdGzTmDLpeoFJBUWvm2yGoSky9WVnEzPWBW2rgp6H6KJvKU",
  "key38": "QNart8CGjPCvpj7PWDK5jcUDq1DNwTeniTakd45Tx7FEB8719W3PuiFprM56aAvyGVXiCfuPWTGixKmZPCyK2SH",
  "key39": "2BV6wFcfJa6UttQ41BxWfgXVgUHCMbzrj8u2evbfocEYZgHYSfAQs23NFMyYYAy56UqTfUpmt8XomXTe3ToyoEdk",
  "key40": "5EsdpehuYTD7tMUsjyWYyN5xH2SMtbNvoLvqBzLnpeRjBmrLBADJNWpPn3bGEexgEErFZa3HTJuXZEmcFxQXEJQm",
  "key41": "2KqB86zXmZGC6bhL6chLXXv7Lnvwkq9EH3U6zdCnbyuMhDjuFD9yzyymwhACqvw8oLrq8zhB4r2FEo4JhXLCvZPM",
  "key42": "4ehHRLtBAmJPLyifa688wHqDHC2t825upRDodsj7ZAx21CFm2yz5ZhVaGpD9hjBioPZU36EWELwpfnAnpnzV9Sxs",
  "key43": "5UzewysfJrAT7ea4PW9d1WgUBWK5WJEDMnAEXsE7CxAyJQgPVq9foSc2sfZdLMiuhe2HpFEH2R5JsYMBFA9eJUEG",
  "key44": "6XuVVVZxdmBmPqyrGieJXm7oHTLCeJF33rBHSfQASvk8Tw8hcUvDVjGWrDf5KyQZqgk3hM3HpuRL3YpMW3twkAW"
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
