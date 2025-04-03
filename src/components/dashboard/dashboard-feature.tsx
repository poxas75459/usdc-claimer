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
    "3n7eHPm7oNwqen8m94iUPBX7ANXhY6PmQUYJAPrURUbEKkuJ42pgY3DDMFfsZ9RztFEY1zy2v7s9Xbm6fyR9U4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3phbpeiuHYrW9h8xa5TGV5d6QPTLdpqbJ9KfX6Q7UGyZ9AkGFadijL1wumzNqs9Bin6bhLGSGnisXNb2ZnQmKaWp",
  "key1": "67Bqj17W54HJRxNCqmg39Tw3sygVstf5otafNB9hisTV2LTTESCrn1gDfpjkCnVNwnXKVPUfbp32RCUJ1Phx6gdT",
  "key2": "3sDV4jAbtsvm88ep98tGnnKp1CLn1ptZaTMiKhkDiRQuwQdrk9ggfoTyNu6oJWW47HeyTJZde5KnfypXRtzVDJFs",
  "key3": "4nKs8w1MjoUF7nfrsn8BtKvzDWaCnm1V78ky5ieSkL2gxjo19N7vs4gMx5oE4hrH1DVX1DdqPt586auA5LcJUySo",
  "key4": "48taMWHJ9G3uFA7iqX81VmEvx3zWNCFB4vkS9NCd8J5ZJo9PpjZ82BUyonfz9EktPWEuNieMtL9GMUrdfTm2gf7w",
  "key5": "kuvaixhXjbL3xRrNVZyMnc1qwwuDnbCC8QWzo7Yim6LM7xTNyUrrZ3grJXqKGp743M7yZZJkYqdxgGsv8Aq3SQu",
  "key6": "MDCyaormvB9GPDUqRD4mCWxrBTqpZjkNaaQTVieJUumrvzNwvJHfsnTkQ6t3hV5RDdCvXWpm7DFkWZbYzAkqEVb",
  "key7": "4b8ecB8YHMAxYkvNd21dPAQSMsBaX6ReWHQNu2jfLCLrEVZRe5qfzHSKquMAXuW6GYCDTcx6dXrJr9QEh356bNCX",
  "key8": "wDhdhyuVsi4S9RdBXkiH3ZQMezeFkyH7jhhk2SVczQPTHXbua2nVLHvZSh7eha8PHi8c7VmpTdFPj5Jk6swR5Md",
  "key9": "4U8KrP7VbhXRQHA1NzkbJsyA1WDk2XEQa6PYeGtQwWZmtouB2Cbz1D5VwHYoeVHKdv5dAbTi3Mvp2vzMDFNPgtqf",
  "key10": "3kwV6Fqjh6XD3Rz55UP2hQPc9KLske6xyUbpUorAaXAyqvbkeXW1GBrzbKtNMj3x6rmh1CvwAQxee117Sob7X9Pn",
  "key11": "2ZpKr1eiepRc2pRa7oHTbdSkcxpQMyk1xQ4zwqwb28hVddZjPUiNDFHsftgvjMdVCpxnRXWTByJSQiZWiu1M2TbK",
  "key12": "4kjWk9tnKhMAUBuzYYqSbU6u4M74wBB4bjvFktZ5JUCPU4UmRtqB4Nxgr5HNLrP4t8UQ28GRJsed61fQPVqNa4ih",
  "key13": "HtunohEAtQHaYcFraPsH96KoxFmbRW9joUupsAmqGMnYLLhPoYRpTThYPjtug9gjC8V55t87DFRXrzcUprPZ8tY",
  "key14": "313xnaTJ65r7SAhwFTpoEw2DUc7scyRJfzcfefvHtDKCH4C88eTKdtuNkLAmqRvE4vxnc78136LBU7VVxjNsN8wV",
  "key15": "2V5g41WVPAo4mcLvAmh82J4nB23Z8BWJN4Lz5ihaZKsXYsZJCcQK5gAGrdfdY5h4tTh8uyHr7Sb8p4VXTZ9NF1tw",
  "key16": "3Fv7YjA6uRkq64TKejBuxTApSvo1r23sdfeb5V8uaSmeXF8gHXAYCkErKBDwGtsVBhgFNULL7cCdQGP67rE5TWnr",
  "key17": "662i82b5nB5q9cHYcongSnxcqSvd9V1qNwAeepkVFF4K4X1yTLEe1t6DfFx8hY3tVLKFoPaHACfgd8nBqAuje7Cp",
  "key18": "4Cztq9wguHzTiFXdvApkK8a68JkG9d9bPURXFeQJ7eK3tBwp2CpSARKKifPbZZqPgc76SXkh867ErRsH3nx6ejwx",
  "key19": "qsRrzVMuHn9ujTy7HmfHyhkQHiZkMXmwozAM5fDBghxZ9Vd4uabvCBznsY9KGNQWf6VdCWMmR9xXdZ4z38pq9CP",
  "key20": "4BhQqgQto4atVUK8o8vgmi86eHMgaAbjtBSngmLSKxcGepVBU8t5mixuHzcqQLH2yzZfwbWG8SiGQAGTdfN7Dyws",
  "key21": "2pBVzzkxxt8PyMW2K7VGtk8dX5sZizUhbYnc8QGBUSLv7r31unPPuArrBT6Hy7B9wexX9bp96yEoHd4MYwWpJfyP",
  "key22": "4KtZM1hboBE8dNEMQ8MeC2TmVHT6z4UCxspSAuEH7kgJyWbbJ9d1XP63s47uMpCP7ogZBXZ6rgr6a1uiQzwuPAV4",
  "key23": "488AW4QgRTX2ZrW9M8q4pMPyjrGKEX3Te25wBjC4xWdh2cwDfjkRG9G2eFmGtZG68j1Dp3vZZzyLjnsHtce7f9iV",
  "key24": "4CSifr2k9sA3q9v9upYHZLNCHi8rbB6p7qjvxtXG8VeAvgx1En55TsdHfMGTyfgvp4zqBR3FW3tQTH5326nAbZUL",
  "key25": "95Watt5KcJY9kFjYci1Tyv1WZm1ppNsqkPqCeredkXEh7fd1ZRJqJb8JJ8Dy4SijW18DbT6P9ip1q7cTGb7GYod",
  "key26": "AebuGcAPHK6gbz5VFzZqWTUzned43vNgGVDpMpbXSNNvexFdzi2FYKVHACCD36GWEeekBCK1PmnMzCyKcF4468b",
  "key27": "5wXFUekjnMy88RACGzchaSKNr6UBHD1B22WC6ZoYw9uJ4cmJfrWpszyjGJhs4eQak6mNn9xVuwt1Rs9n7ioC99vc",
  "key28": "5bVZibERpvn9fXQFc9MfZYNqRRTHeZBUT5kwkidTDybFrCMQDKx5KHNc8AtjGFKU26DLWBST3cf4do4gjm24yzKW",
  "key29": "UmWPp6Gj8siBKmYLVZJEQmf7vVQ1zvoA7KmwAMvZJd2c9vrFcMixMaCZtQ7uLXvT4d8dmoqJjEsQitVFZH8kJeC",
  "key30": "21NFadSneZiaxgdq5ytBihP3VtDmcyDdVJkVhT5YfGrGGNQBiPujXWdzrDHVziWdVJhTaXZyckFJmUqhnGUAXKtB",
  "key31": "2JxLaeFoB53EV8k61cDZj1AxHDwyGod5qHqPnLipRNxPCTT8EWbWvWKPmd5EWnB1tigZgkXg8X9G5GbCVwe71Pcm",
  "key32": "2HgLpLrD74Jy4J3ZVfyqwgMyw26udQBjoxXFobvTjjSDPo8hdjGwk4EdDM7G3gxqxtyEVt98u4fTsbGqqoCH1hUi",
  "key33": "5yXia1hXJq5WZ78dm2JXCnLxY5JsCPEd1ZBcFqYWLXofHAK7nHZ4eZAaS2aepAGTfwVC6vT4xDCaWwwtiReqC9S",
  "key34": "2ZMuPkJREszfyuaBWb92ZAy36wiejtpQQkDbShsD7CM2jaoiyPAMwzbJoapo229ssSBYHf4F7YPU3LLLmTfPi67h",
  "key35": "QP8GRubq9VCJ9AdDVA2PfS7nNqyYdJ7GP3Gww6az4nMa6MboykxMwiysJ43GmTzkRXvbWUds8AhQKYTF9ELB5qA",
  "key36": "oNN2CyQ8dMtvg4QafpMvjQaUJBZtExRdRQkm3cE8My9KWA4JyJRzov3MuYRz6CZhXcygiR1eiPrdVvFTh1oVrPB",
  "key37": "5Vm4ZYp6uf42X79wBg87JwtjbazHeFUjuUmwCvqTT76TrfpyESrUWqHEgcshEPCSfy46RfZdV23RxFuaAfqfEJWR",
  "key38": "5hMLqsKnQWnaopD2N2WxtTDj39oVAXZboBs9nErFN1povKx5bVVU8rVWtee2cXyRuVb6nGitz5nmDrc5Ky8JyuyE",
  "key39": "5DCD5PMJqCPz9K1EJxc49XjGkSrvDKo6iPYuFGHXXsDdjQARHy99VWCivZbEwQCTAiDqTiq4g3uqZiMAaLJjLbGK",
  "key40": "4FW7oxCD6XP9H3FnPsLF8XoveSejvUgKVwhvFqNGx7hZVWiqaJmvVsWu4DNkmAYZyE3BpsW6eDAQLdzJaVuLdG7d",
  "key41": "5nAfuchszU8wNLwKnQvcUAXWvmZMgk4GyywCcc2cAipwSjv1MzpZP2mug46QaQCpuJieNoYJL6ruBrDHSw4dfZL1",
  "key42": "44hYyJtmQEWRYUbVdwBBhkgPT8ppVvo7Mgw3i2UsF4SgLBwXVYcrG56XpUVfcm2A1HxdZhyPqDqBhkbTEdg2HQk",
  "key43": "2cJCU3SWGqnBgjNMz1Sa7JnBg5squHMpNUi9UbciZBQSTg6feRpQdU57RRsJCpAYFH5UgZpewif44LD285QXTcv8"
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
