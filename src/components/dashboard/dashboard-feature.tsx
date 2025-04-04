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
    "kUwiLYW2SsdjqhJCuCshN6ZNgtrBsMivYbsUrJ6XHErD6eDinqVcBjfTR5aTSi6Kgiu9TRx3VZzkjjWnwWor3w9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HoXcpevPNAdcX4XqK8JR7UkMBe7ehFu1sdP7bf47ej51kUuS4Nghnx4YPy9jJMqR7638gUqRRic92U44s22bm6N",
  "key1": "2EuGoLBoMatZa2G4qdugoVhLdgpWD6uE5ssnyQ3VZ5WRHof2c2aDucDYUKqd1BbmwLzdgmFPbnKiXUfCrMhTdGAw",
  "key2": "67BSSCmbyvpEXT9axuxCgXfU1825mcnNDPQt6BMUCFaLjr98WTJf6aXWgXCEb61x9p2SkS4KbUSZXHStQULcHRd1",
  "key3": "3zJrhVqi9jksktWQBkoybRkRhFSxjWDTZ7bizFiCD59naB6BaDY7pgjh3tx8ZuQBcjSVt9zwvkypUSgN3ZYWXC4N",
  "key4": "4E9fm6XoKZ4cyRtZ2mozy3cvdVvRVQDixPhGoVgUWiqk9kxoy4fE86JSoAYtwdE6y7tP8Fy8VNfA9TZA1t4rP6Rj",
  "key5": "4m9CMzcFRQRgXcFmeKMTQdmD7Xp8EbigY77N3Awgkq1QLcfRtc7BdRp1p34oZKTXnRJcaqLduXjFiiwFHJoPTvBf",
  "key6": "2f6Vg1ybRL5LEH18vjJp2LMWskguG5Nx7JKb8q3wnPkvrtXkNQLpEUCzjQ2UpSDxZHS3GFKf4bxJy2NzdUDZh7uj",
  "key7": "31NeixSz8XaqBJdDvyMMK9wZWhRv6Fdef9DCKLg95EzZGYvYH8VrP8FCcjc1JDzdJxNYDAHBzgnxtfwnkFQwgVXH",
  "key8": "4S4J6SARff18P7HAZMFEWZLYcJBY1BwEatnPkyT5RkCRL2GesZWR7bnrQS3pJj8NVSLpbn2SvymHnghhUPf1pVcR",
  "key9": "3ft6BGni8YEii61STha3bCSfBqcUkFDCb5PtaPP8JH7yHpGNnC1s9SsJaS26zvUcW6bztBHj6bwrCXLKpiRzyYQj",
  "key10": "323FJbSf2RgFGxEDBAgR158unZHube3GkUbtVLTcc1g19nFREtugEKRxTYH6JV87qJR42D3JPDJaR1Gs3GCfFTtv",
  "key11": "2hgD6AYduhEYtVjCauUtqixsbRKEwtJRa8YeZN5MTcE7xy9QFnLQZRCqvPmY6AVd2hvdi6bjqWG8HsPpTtu17RCZ",
  "key12": "yQTUvVWFKzrzMLrcAjmE3wGRnM4q5xZCB6T2ayvkZos2A2LYYbeDg9Y9aBnzLDWysMiBBrgUs3djYvTTi5rDoZH",
  "key13": "2Zbj1SQAMjPDHBpAz7QmdYk1yMFyjNQvsKfnGom5C38Sy5R3EA5o9pa251qYv8J2sGjY1p3xzN6qc2Bd9a5UN5fu",
  "key14": "62w5Pxj8DzYryRW6TPHxHYtuPUBykzkiF9dc5xcoqDC7nP5wd7oqSCbyqD5YbzHUHXsAXTREzUyhonKnyz73kSd9",
  "key15": "56U97PZgW7HrDHXozEZs28iicHSZZY3cJw5oGPecBr4KkeQBMhgo1CAg9jvP6fV7iiN9tKaNkMUFwft3CbvibVc2",
  "key16": "3NC3GyeFDGFEFZnFuboGDuy7nw3HWQvnEEFbf5DEScw4JWEf1q7mMs9zcTkkFcLpD7vrQ35syrnw8TD74GYxr8L6",
  "key17": "oAgisx3Vsv6EfDtY5bABswp6cCvRMRWczJQGbJovJDzs6ByodAVDLWZibSpe2jTExypZJtuUJpdEWuUeniHzVQb",
  "key18": "HokPxtt8AgYniAFJmHLNnPp7bQQz5LvkJ3hg7JhBL1MJFz4mDV1tYiKbQUxCZ4BCPem1qLMefkEyKFaHmYR6RBQ",
  "key19": "5D62qxebCkncm26nZkbMdNGA6EgPf4JyCGTcEyhzAdXhmNyzrTKP4CnSMdHdkfv2Poec8JPwQZB53jV3RAt4FCBY",
  "key20": "39JJxzVscFdopSgEtCc6SEWYh4gQkGD7qPTDM5Yk3Bd6tc9AUYbpvSnPJqL6b5BJi4e6mNgHZCFdWna6YZxWXYZE",
  "key21": "fcEdHxUjHiDDLwHYX9pVGdQCwrjbTHzp7c8V3r1YhjJERKz7ApEn9LaTFfFbEX1sFddYfLUTyb3Q9d42UHywkrW",
  "key22": "4rPstPHnpDVwYTpdTT2zTT2S1XzENpKTekzumSmkDS2SHc6MSKQNAWGLTYV4EbjRyUGGoyktjo7T2Dg3cAWjbWXX",
  "key23": "5u1p35jXtKj7HbZQAt2E6qTeukxA53SqRG5vqmDGx13o5JYh4t7R8TjDHXGtXSQXM5cAoftna2DyJhKEThUsxfrz",
  "key24": "2YoSFjNQpN6MVm2WLV5jrHSKH283bzKuB16XQQNxJcp7grjFEVzLJbSdwXpMtpXHMq9WhzphR7b67Egcc7J8Tq2E",
  "key25": "3RqrohyUnqSAq3rHU5Me8xdRpgdnL7n3e6ZuKKRD1WZWb2MFEUx6JjfnJpSM94e9Rka4KYGv4PvMxh3cNx66kHAu",
  "key26": "4aqZZgH1nzcjHATpo5Yqow3e2vebbmwE9ersXyb2iAJSx7Bv7mMvXzjvdUFMjcWTqn4yAsridYEUaBcrQF5pLdzF",
  "key27": "32HvEFAZkVEK6a4j4CRhfdFatJbcNKRjwNFxyyctJcHXWVXKYXztPwwqC4gwMA3QTQNdgSSW4MK9HVrAPvH4JYeV",
  "key28": "5z9GZTaEHr63kaw7xtb3Kv2gefBwc9hh9ciJ7qW3PHfnoZXZ3hL4r58W4mZumV8DhiBvq3tXBz4yqWLTChhKr5fQ",
  "key29": "4XyHJGVZhuANfqTHdWRnAw8gmw53cnzJeCT9sKo7btcz8ZcNJHv7j1yqdnw5r8hRpN4gCsneV7XBCBPnZ4Z352Kr",
  "key30": "5cRMBjTnAwFn5iDPsaazaaZdqFBB3CScnnAdsmDdzxKZsnzPdz9N2JoojgSaxs9moUE2Ao5HeJdF438EpsEKfANx",
  "key31": "2wDKE6Js9ondRPnfYCPU5dzJkbd6teNDwHM2sHoLgmacRCTTKU3wKzJaccyWEEy4Z4QpU8KSt8yJFfJ4iGFvscNa",
  "key32": "4ySADAMCVWYJUar3VqsSpqdPkSKC2A7d4nLuXB74ZVqVJxWZ8eudJdNpc75CQHsGbj2d7ponqidHUnqr9rGFLSBr",
  "key33": "3ppekc9ESrTiGL7Uc2ov77bgzTVvtFtSt43aTusQnw2ErVdQmAUdyuBY44NvpysQSWqzXe5LvkXE2SKmcgEDAx23",
  "key34": "j7sMmirzvNonZXf2MsHZbLLsQHiovDWAEEfmFMy8tUWFFwHdiY47XCe6uZp5NMUvLKhhQhZqnSRLnFxs8x2wgyF",
  "key35": "57pbFjNzAnSKi1qXqiQdHeinFyMh9NEx9rAtQND9e4ZCsw4hziSow5LUhMtqjaXbS6h2RVUqkwHMF8MDkqp3WmF9",
  "key36": "4Guy9Z8wxqxfCgra9o5vuqtMCz47LhfYM5BpNVWBHSkmemj5LC1pJhJaJiWGtciVvAvcHdj4GU5YVY6H7BUN63VG",
  "key37": "5w8sxGfeU1MCdVKVLafQQSRNWSUeTyYKhGr5mMoANBEBxbYhtrrxTy6CU7Uf2GUjrVSuNRECkC56zriR6WeXvRC9",
  "key38": "5zSmj8XtPWLga7wC9UHdan2P3Maqm6xTUWAyGGExQqGiKjTgiY2VQviDBhj9APuANAbtwdHeVHGFtHKPer8dvRgx",
  "key39": "VUKHksN1rGFRA4MMTWg6HLVVZk22o76XYRyaPmHRUCfh98x2Qp3nwuT2cfD7xveM8QneV3crqZqrFQRw6eqmEPW",
  "key40": "4TxJazf6CfxxogeC91hU3J6amJb1Qxhy7SAe7k7YHgBi8W6qaVtacg3krBxz8u8jM6NVhg4pKFDQsenbuUsE23YP",
  "key41": "3j4UZa1uDPGs49GnEXJpsFJovjpEEigPRZhSoGFp2pghtHbdQeX9iVjDkBPaRoTnX66rQhnKB2LmGDoAZ83NuZwN",
  "key42": "5s9VSmFyS5z2UJBKY4YysG4LbKrNg8J41CbXZwk7dvDYKPmPtJJfUqhjYmYRwgj8gm74MwL2tstT1fBe1JCtpb3U",
  "key43": "4fHv4eGu7QrRJKKUD1qa2GyPVDMVfxkMSv5jgsoabNppE96FmYrwdyXvMtWgzYxpcKK7q7b9dcYfRkZP3c4dUvab"
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
