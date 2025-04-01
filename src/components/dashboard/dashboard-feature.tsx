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
    "QC3GdCPraB1ggQKU5VCrJd1PfGGQunpjdaJxKCDT27f6LbXQaRGcM4BwnpodfHXxT7uyLroY5pGiGKnsVnvkQKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RS8v9yro1t5Bmq2KDyAhKoudH4eHbQnquBbeesNQZ7veqxefUv4uRCRKVZGrXcukpuGZXxeuwkZ7xmh7faWU1nL",
  "key1": "3QW36rDbGjDavzF1spPcMq8M3HixD9eWY2yCF1bckzauVpXivTirNnyvk4rJ4hX2Xea4JARUz8NsH9FqZLkV9Zx6",
  "key2": "4PKRyEtZxEgE7MVdR133kUd8ARCnWsfLxM5VEgZpr7dAX9hJVGLBQGvk2TDod2ym8Tzjd4cjU7vo2pwiMTi1yzKZ",
  "key3": "2yFJDzigb32FmwhPCLVehEJZzLhspoGiCxpUEe2qavhbr3hrY9bov4GESKq5Ddnn36eUkhnpat8avPZmY8CxH3mi",
  "key4": "5Ug9Jy2RYpHUd9rpgpM7yXBdux9Uhg4V8RTp3GiXzwt9SW8R3ygEgAGLE3DwkwDNkAmp3h26bebcCaeA5oVHn4ir",
  "key5": "2TasL34f38J6uJ8YZ5cA8WJUdGfH7MssAAc7upE3oKvvURVLDcoZ3NgYNwyy995irtmEyzaynnhBwgJskPKb5t4S",
  "key6": "5sJy2LK6bjkMJjH9xi72jcqW82doAqWcbA5XPoiAvs7zthbGwaiTpPr97ZUqocmHi4xUf8tEn4Yic3bxbTDqdSuR",
  "key7": "Va5D9rQpWWanb1Jn8v1zjWF6ySNppjFpM2yG5GKnLxgvpdorHxDt2pbJFPbwZgkcnfrD9BYRAwHdjk356Z4ax8v",
  "key8": "2pVbAWrsfCYEdF9qQg8Lwp2tg7nAqQbUYL4KVVbr4SHuQvqYWbipPLBJPrjCo1npknEmeiKAdsdLn5jYQDji58BT",
  "key9": "4i639X67Bof9ERQQpS74wuV7yfAEEL8u89uoo1u1qcz9KdtKfpEertcrgAtCtSCxWPBjEG2NkAbcowE4JArQih3R",
  "key10": "5WD95WRghDx6JU6unfK4qQpSd5r8QqSuvZKyeCA5C6Xw35ugtba1UtFCbxDH1sfpsR7pJjCfM6XsBeU2h4hLKB23",
  "key11": "3TXrLRUumFtELtRCWi3so9Zf1p97WHTXz2h4EM82Vm4nxPm483X7C6c9B6aqxjNQxpE5hnFt8tCiUZAMV8V4yW3H",
  "key12": "pweHTHvBxgWrfnnJzsWAtDZUYqbNz7RsEPTDdnBPi4cNfP6UYtBF1rV4mb8PhYfATFq2ADfrNY4qJRdm1F5XLjk",
  "key13": "5eBEHegaTbU78XAk4ZbUZxQsDfmw14uLKZMeCE58gHuYoMh28b5mBbANNaRSJ7dtJoAxo9zspnAE4VDmjt6KN37B",
  "key14": "3cp2ws8BuPWPrGW4TPJuuHy2jbFig5gwiB164kMeX2mGm3g5YA8oQzcQ5XDjEj1UEMMkMovoZXauBGhzzXb218UH",
  "key15": "5ThivErc7yoWv4icWGdUW2Z6jaXdp67TR9bswccVhd1KsUqQwU6vpFEN3CZsUcWRzrvMjakf522sLdeXoLZLQ2VC",
  "key16": "24PswpjFG7tjADBoaafVCySkkyfstDHqQ4JtrWL5vewMTvN57fwaiBZm7eQXyCVYC3Zkvvn6CyMJc1uM1nrT6F7t",
  "key17": "48uuuLKCfratZ3q6sRCKuLVUFGq2fjTgRTQH5vZVPtCpnpFeoMFWQLqvjsykNaoQKZUHwJKBabtkfwvmBhXeuZco",
  "key18": "5SHiWUH34oVLKEgew5zuDW562SJbpwRDFpEQErJVMkWBpZ6H5tMLM5fuzLTe55kjv58KJBo88ZwCaTixxDwo6Vyw",
  "key19": "T4fcn5NLsqFPEq67WgTf75MtGLpWY5yPiExVWNQaq5rZj1Aju8ikR9Srfn7hpBZiaYtRLbFFy4GUUVi9zXsuwme",
  "key20": "3NHtqgJQTgimh3wevDaPLsnwQMyQyeFch3F71yTEcD5vtyFWvvWjtR6zSjr3RtWobBNy1PT9fTuZx4inL6QeLj4U",
  "key21": "TxTRoHtRZ4qE48b5bjuMyoQVBAi8XMX3w8qzzSgGH9fqmGzUuv8bndHhWojXR4ms2Rrr5xWurvQJwGWeEs1s4Jm",
  "key22": "2ozuzdQu4yx9MYpidwSTGGXDeYKzVobgPQCUMCPzxtx9w4EMUd3srnxAe4JxkezuCstXYQyWjrwS7H54CwYYb9tS",
  "key23": "28bPqLDPDNRemWXUYJrbL2gf1CiGyaVpg3axHQHux1LWqFsXkoy3GiPVsjfjR82hNEKS2iAUv9ZgqAVJZtLcBb6R",
  "key24": "4krrKFTzTaQPsA5BW31aSPxQGBSoNRbozWDaRioSdRTB3UVYLXrk6McTtAnbkcbsNKr52WBbMqXNURv38g3ZNbvJ",
  "key25": "4XYc5Wi3ciEfFePFV3xkkw4TRv3bi4ASrq4N9PpCVPZdHaitHW7V8KmsvPuPN7mCwcHbrcpCEqqApPBFqo1drSkX",
  "key26": "uFfnwhuHJxUBZRYNfyvEM2rNEuMvodYX2En1CGtJV5KtmQvg3a9MtrKjkjEYiTUoJ1zCoFKB72XY9mMNZAJHP2q",
  "key27": "vjNtFg4V9mJMztJnm3YDAssizmsp81fV1fGFtJXqqUzEvoGbemGPFa3Zzrh6Xyj6UmoF5J5ZBRx3nUb5orx7Sw6",
  "key28": "2LAcHpAbyLs5MNwmjwy8qFHAikX76JcbgN8SAEfndHz1zeuWNHn8DZwVdDVTZ89PaXxumPLaN8t1rG1Frq8Me7wJ",
  "key29": "3wKLL5KZu1WyT5z6b9Ht9bsgyTHviejLbSG6vp369Wi4c7WFUZVvfR3cRc7NPdzDhuDDQ6n4VuBdTp9hLY89V9fm",
  "key30": "3xuD1VNGoGc6rNyRsCUiZKNnsWh5vbbQzNoDXd7mWVQbNbftuVmNvGUELstEkUiYEbHETP9g7oXw4dx13rK8Xvfb",
  "key31": "4sMgpYqaUkDu7qYZ2Z6UUUz6RqiSJuhVKjUw46VcWktoXLNVExTrjPkNqZvLLcsBpZKcKdDKzmxTQjpMJtbvBTZn",
  "key32": "2299LCcCdDhhbCL1GbzE8hHLwzfmxjarMTdErudHsjLenNzWaQgWoWcmfTHAjWP3YBVPSR4sav4a1qHrb5Kx65tN",
  "key33": "5nB7SoS1GBFBBrMUG8UAP47ACh3KwxRtJK4j6Ty7HHzDG1QoP5rKgC4hV8J6sGLbhwNezBaMPnycEW6gEdHoAPM6",
  "key34": "ThCF4GNmXgag59PFi1trYu51ppiXZ2m8XgAmKkgdqYJbVgNVUpw8yoSFty6xRjDw9wFTAKwxPAGNuXgK8cJzjH4",
  "key35": "M2E6MBYnLVbfQwgvH85dcVUWb2aHHKogg4NA8Q5kdPWJVqzCLAsoaATQ7n59g3R92miGu9r9dr7qg1MykQijv6T",
  "key36": "2EbeCjK81jVc1o2QD8d9ygfNAMsCZzmcokNfLc7nsEFtLDs8DsYuDmsZvjr7SseAuWGTxq4DLYJ9djmiSY5odS5X",
  "key37": "5UXTTriU3Dyg5ceXtG1LpL7BnphQaHJkMcEcowvCkwZ3PQsW7tqsBMiMbMEkaYcbaBKsh1pZrfpn89txGhL92sEp",
  "key38": "43e31Dvx6PECDUY2N5AeZbcU1mk4ZLwZstAvFtJt4PBzHTGkDouJGj1Da7XDbtYC5CNwzikMc8LLrjP5TbPFWtnP",
  "key39": "4bmvVFZV52Xz1PbixeQmbkrRofBpSPFH64mCtZoJkLtYT2YqL6ZsutKBrzxYrNhR88GaVAnR562rmzYp19sWWcXJ",
  "key40": "tUCu2MiTSNEA26XBxmsAVC896eJUBZZmievqyBS3t4GJqm57GBMkiexnTRWuRh7oPthwMoFVQSSP3CpXJG1xGrG",
  "key41": "3YVcxhM1LfVVWXxhXa9Cc1GpprbNqqFNJFCJnaT5EXrfhwiBvtDzahyNi1mXzqx832bNpVt86hGBT3Tsbvod7Jmj",
  "key42": "3UWdAgPFTjQVnBrk1Drmpz48GPDp3azqYhwKkCNCXStrEwbiYboT8ybMbAHhaWmVHwk64S1kA4SAsGFVVAoGoaGv",
  "key43": "5nM97tsECuoHGwiq8Kv6AGckcJJ8qoN9SbscyiNgeNSZT3oi1gu8EjotF9Gkn5nBBSE7ZTvkemGRy9jChReRdxDq"
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
