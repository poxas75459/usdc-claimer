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
    "5PDxfhMEu2ArDGho6R4bijtKkssQQ5UKPZvkre7oph1sLe1SLdiEzSJue3dGGw9e7Uspb5UGFtu6Jmy2fwN4AFuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hxayN8SP6cvDp5D2m3kXPes3cT4xWwtZN8LuQRrSdSX2JEkADtfSXv3je43PazL55BkrNoPvibRAt3L4irZ7J9x",
  "key1": "5M8LGsQcoR9zZaGJ4Q4ygGjfUa9jFQTV6ogM9GSz5EGCgw6NEE1s4oayTPpsoYFdU2QP7t4q2cWUgEj8mQS26tRz",
  "key2": "53xnuys5kFdeNVWzEurkmWZeMRpoJCEekk7rPmun3RksRq8uR43kKjYmHRujSTuWsq97q3TkBHZS1pw5spb5wdF1",
  "key3": "2Qy6a9sWzg714yMWzwEeFVUkA577SpxqSXuRseC9h1vcNQJGPMjpRC7BVHmrvQUQUcNQq1UfHxfWow5spGnDKZ5v",
  "key4": "3W31iRsXDr6o3YAXW6bmxSiQ875getb5SgWWBjtAngy9KKZokffyQoCVadaqxuEuQLxnxgYgeuzGPSWtREnphpG2",
  "key5": "4HqAYFcqsqBCkjV1H4MmEGqAmurUYu8g8GzQ7mQ6sEwYe76DVLVkWybhE9kJB29mRB6jPWKyVxeydV7SBe6WBuc3",
  "key6": "2hznhN5dHaJY2c5UsEePtMSfiUxiCn8yFZ9hauJquTKaUFr2WKqod4i3ijoQKbAsJPezYFPiTev7jn6TtBhWU4wf",
  "key7": "2SzUQMmxZFyiso37MN3gp6P2Rvxp6WXD8NyBdwKquXXRLj7d2M8XzZRYnnNjpx3MyKc4q9xqAZ5wf2w7EGhZgEKV",
  "key8": "XEW8trqkEDo4wTiCVXr7dgp77ZGEhMk6nsDcozqAbRqXuaVXpj7DF26vZmvY6uMLR9B1D7RArmdn667o2kukJPQ",
  "key9": "5Z5bz7XyR2mwx976Mhnyrg9FF8xei3edSYWLvL638wAkY6UztxHYPEdYHQEDJAxzJQxjkCL2o893rGW1G8JvBfBo",
  "key10": "5mBRrsMt756J1oPNRCaWdUGwyB6jg24FmFZrVVhUwuQPjkQiKCeZHc583yid1niNaEcxv79EQP8UdG2w9RQMLVTg",
  "key11": "2okEidvTvagqFAiQZVFtrYvtNs5naWH2oJwKqsLSKfi41mVjpt3AQASXHZuVZcvrwVw16vf87xpUm38oeBcZGHr5",
  "key12": "5APUa5GLziyf5qjagBoybSrjMYuJbwsNcqY2WAnuTUegq1aqgUbyvxgQtC7YVYA9L4R4xmmqRToCtWCeWT4SE7Pj",
  "key13": "5ZKmT9hL1ddQnqViytL2gCYUt6vWK3dGhyQaNdKYEF4AnUYmbM9G1R2DKDh7mo9q6iBjWmHT5hL3pKnoDssL3WbY",
  "key14": "3YpwGopqq7wHLBzhWtDDY2mmzZAbyeeuAGUtJyzqNBHfizqYRQv8muohQrnreTQbNCqo58vmh8N2cf25bGcQ7A62",
  "key15": "4w8qxSHXJmi72d2xXpQLSMzRwHZMwvqWSKbER19HS4ozqKexhS5suyKoHrWXriewUn14WdcLtBE79BMH9YbobeVP",
  "key16": "4xLemLnqLQiKdU7rSbBj7bTLJWuzQP2ybC1YhmQrbYF6sJAidTVXBFsm8LZ7GfMsdcKoBkFUHNpiT8AKBiinpvzc",
  "key17": "29TouXjrpT4HGjMxqHcjJq2dbu1fbS94HGcmxoP7XEzjNTogCv2NdtDisqFB33B8741kvMAH92XRJuYojRs7HBzC",
  "key18": "3nzv1PtMdFZJC6yduQQi4iRWA5zc2kuR9pHZdyHAMsVVtGosBmhKkqp2S558YkswdTmAZMi7pG2qgLb8116JbeXZ",
  "key19": "4c6wPzHmiddfTJtBAWfrgGDsLR2z974GepkDnrnHyC37dimNSB4kvqtjt5QzqiL9xmPFAxP7wtD6YmfBPVbuTwUh",
  "key20": "5DrGS2fR5oigbT7NJpNJGZ3aZXjvkSE72vDej7yGekoSjRCk4gBjLJVrb4hjYDwvrTz6aMZKe5WSvdyUc58n1TQD",
  "key21": "5oZetqL4ZU7ygc9G8VzRuNK8PHYsvf27NPRt54A1MW886vt1riQw2vaerdb7t1wuKPrut57byPGw3wtWRZCUNRUW",
  "key22": "1xsGN9AXz75NyZAZ6DfJZZ4kryVtMr18CG8JNps8ZotwATts7wjmhqT1qF5RdcRB7GL1SEAgukAUV6H5ZHVSpcV",
  "key23": "3LnSCGAGLoDBb371jhjpEMr2pcXn7o7du5mrnq93E7uaxQiGRwBMSJhksAT7m9yNk4Y1EXnnxhRs47jknxzTQgK2",
  "key24": "543Xxv21ZacjXkjxwDquPJe4x7G2wkGBZWZtFcFTaCy3NH4GVMfgDCcEiTs1N2bTFZuCixVBqH6j6YKV1ZAGyUFi",
  "key25": "yqwSasZz9zwfv7NEx3bavUvt6XpnVM9RfCm6hPpREF2rVi7ooxxgZjgjJGpiiQ65BwTTvdsPztggjLtzRWQ4dMw",
  "key26": "2gP3PrtU81zjZxytThbfW7Ta1vjvQBQB5nzY1WZ2Hnh3DBc396VmoLudZV4zqvLKygLqYDLrZMmjsNywnoCBastj",
  "key27": "5SrMAsR8dopbjm2L8JUc2ufBpvhEsGnrXFFumrqUhLpbq43es8UhmzFdqLJ8Yj3N1dvW9jFowRgAGVXNiFDFAxhx",
  "key28": "1SkVS5QoGvgVvn4zgkUYBf1sps1k3NyLpawpyFTuFm44Xv4ZygDD7DGx2WGC2YQaby49JdPKWM6mK5BbDWLFacf",
  "key29": "3dzEqtvv8GU54zYzKRW4RyEn5UMrB4Gd2uDwuWPJDVuyj2JJkRz8ACJ39gqHrHdy9vf9DCCDqud73RHGdEZTUXQ4",
  "key30": "ecqCCDXrAXH5A42Bn5SZjZWFb8X3QXsddPgdwRJA3hnbvsb1vjp98JP41KfZqLCFKtvQTe7k7eh796hZNMrxhvA",
  "key31": "5kVQPCW8xL4UKjcYc1UyvNfqZBQB7EQwGDo5nLajCnXRaxF7qZkkuARwCdunRp79ipRSr3jmkeXBiM5UuQixKY3Z",
  "key32": "5dcz35KQ2Ac8JowwXrytKor9iUoDZCE67BMsevBKUm8vQrFuHsQa3tJYm5bBHk1WqXTJ8v3wGwDcDix8CRUqP4a2",
  "key33": "3oQVe67mxU7iUGavA483mtaHS11oEngdaSzPT1vERFsjD2EniGDZf46vddaQxxZBbCMZPLZX8gBsnErEYDZyZMAL",
  "key34": "4aN2KhNNAS5qg7ys86xx1sJYXeaxFvtyRtG9gDHd29hgMPFwedL58b4tFtewKoC55HKksbqypSgtLNVqyHjAmuqo",
  "key35": "2wDqZaEnE9MWirxgKKwGeDHXbw9rZ8gFV2q3e3kEzbvyobyJYAmixHrnXZmt7Ydh3eu5RgwK8hZXq1Nh3AYUwsAm",
  "key36": "4mB6uUzUHHRhKebYu38xqGQtrkHArW4qQRnetPfVutcDnUES5amJnNNj28Gwynaq2jkFquVeEWYkGPg4rWQffFni",
  "key37": "3JEa5TveD5L6m7eUeNQVDcP6QGmv52C3LZeSvZCeD1okq3uLXKQMh7nqNoscNfq1Fy474TsBhETTqv5NKJ52rd1C",
  "key38": "Y4B61s92MRqWxvVTxM5GSzWQc9beoXJ4V4hLeaDbSH9xu8kLPqhf11kWD6Qcich1C84soSkMcapNtZQ3aZKBAhc",
  "key39": "4AQ79RT4S5FMo8kJhzxwognMNa55duZoWB3FAUsEw8jKMAw1m1fxtxqDcJXAx2dGwVzGdh2JamJ6qwzzFB4CyQDs",
  "key40": "3Pi1N1zP3vac4guRdjawSbMjWhQcqdHPdENWPAhXmCarJiUG7GECqSMew7ScJSrewtu5bQ81ZBfMA76aRsP6LFa",
  "key41": "43utrMDYFeBcxEMb2qKHCVfLtJ5C6QszJ1QcGwxfsD17ZhTHXhpuuHLBAdDEmKdjj8CuazVAz5fHx6XYHYrUJ6sJ",
  "key42": "5DqS4ojyNfx2mwLPdyQNCDhK3P3sZEPStsoqKirfZiHzBHPkFbg8rZK9YjrGC5W793qiyrfwdknLJFTRyMb7Xw6h",
  "key43": "66tzfghoNSarDJYxxBjA4goBk5UGTwqfjGpe2sWSP1fZBxzv8VFESYEN2UtV6utgtgaQEt3414Jr2X9YcF1jRAbZ",
  "key44": "n3gkEQdren7zScXa5WYrjA2zyUWeqNqcPSXdSGZEk67RLArH4CbpPeWepqV7vjBHP92AyEYLyTMyT7snJBVjX6v"
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
