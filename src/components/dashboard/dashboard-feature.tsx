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
    "59dBajkP3hyckNvmCeH8MCBpsS6f2Xuhrx2eLG92wH8wXqPFDgwrEQVpocLZuMsfV8s1yN3tBZtWj2stMa41SMdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7tiN26vJ8TXnaq9QqvSpNoDZB2FoTThmz69NbaB6Hrj9MoEGt47p97kSuPE2SLniUVzdqmdu3VanmFQXNcE77Cv",
  "key1": "4VmmZ3YfZakt7PYQoZqDR7NoxxHzETw4w7wdei9YM4RZKeXA3PJ2vC3t4hHbAoBiBH8DidLa8LZmKU77uukVoNTV",
  "key2": "4jWreywwJmTSxnsuza2kskZSnm3QaE28oR7CArzuhigWKL4vQZk2aCkfaFjYRcZTL9bCNQszvH5zwCuMSm993dpD",
  "key3": "5Q9qd8vNN4KoUeBD42iqL7aQrCMzYpXf3HjLd8j1yhiv8NXbmZDVUoeo8SPBjMBC8BwCRTeWs1MVufC5mpReaDom",
  "key4": "4ALpPaEmbdhFLxkHmrqNiHEXvRTSNHYuynVH5PYD2izkhF2LSXnKymAYxX1AM2YCDitJfNmcvSuJt5eTWBRMmQHi",
  "key5": "hmGstP7yyosJLkG3EDNUfZhgVB5fnRmpjBJKpjmeikkDx5chKL3h2Xo7cbcMhdGd17R4RDPEKZfbEY2Bubo9ubz",
  "key6": "4dmr6Waes5h1C9g4tQkNSTBw6i3Q8NZZe17vsMJcEMpz8Bj5eHs9w4Xd5p6FfpXvc3of2Lp1pSwhTvQUSaMaQGio",
  "key7": "2MuQCU9DMdeQFCwnZgLesYaPs6v8kGQAF4fWm8WyW3V4vfSmXLyXdiF8iaPAbFpV2wZDbwnbW8MUSLBVU8baebj2",
  "key8": "AqZg4SPA62scckrpCeSJXXEoBMVLjfTjCGo8ciJyZAVNpmGU3cC6RW93vw7AM5MUahembFkSgJPWszCyKXscgt4",
  "key9": "4aix4zYCh4nXZiPgFz7BwkvHKnVGr1617rCG6G8eG4LaruoFrZWasDa9G56JJ6FBJJhiBtg6eWAPJMKSWxVd7uvo",
  "key10": "3cXEQS7cMGqTJBwCJrc3S8jvYwAJuzjXZ5oAG8t6irrCHrb1MSVfA3ywkYJbfLhWTSXJU3jPqDbLvfRrJgfhWw3Y",
  "key11": "9Ku6rWzWy4XNb1c3dFHdrTcj7S6bTJybCKcfPdAFWSYUThMWusz2Ro9DZGAZ2rswmewq4isiSxJUiBQWgFdfGF1",
  "key12": "4vZdMMhWhZea3ntdb5Krx5ZH2YWA891mB4AhYU6PtWJ9Nd1gR9WkZHwLtY1LNf2UUc9EaSrPKAc5mAR8EBnZurTe",
  "key13": "25fWLyue1HnFqYzMcARqFDzRNSykvRD8fXgzEV2uUJCS6oSMkG5k3XCKAsrQbb84m45LDjyEWGjcEjxaV2BhhKHt",
  "key14": "tJebRovSVaK85SUtD9bXCsTpD1e11yuNrojnjK2194o3Q7U22wVocnnub1uDqc1AX7qk2hzs9x1bwcuNkxspdGq",
  "key15": "3ZZuu1NYMdud4q3fh12VvMChDzkF5sta1WicTHuz3xZW1gGqm6aEgfgHfEG76jGLKVNZ7PiNcZNqJqFTF3G3wFif",
  "key16": "3V47UMr2gLd6FL3hJRB34AHdcBASuBimfbh2wEiVyX75nN2VU6dydxeXY5UcbLQsZjYXrrtPvHshA6Vgh2YARnnH",
  "key17": "5im7iTxqRpthmogir6ufGQTFQRo3dWXB3dQCK4oBxbDrGvHLGn41LoYV23YzqQwQLb87P4AsshV9L8am1i2d6wyt",
  "key18": "2EgoNUEbFsSSgdakvbwLD8125BtzBD15w5eCJbNwbPvwLyreynVRfpV1LyKLLttLkXzKxXGQiYkmVXER7EuW1SFh",
  "key19": "4fJGSijnw41xn88nCskA6yZWJiASfoy9sUcEQ3XRGbQx8njkhYnaDjiE7unMs6jq22gWnFwMboirg5PrZ1Qpie48",
  "key20": "ytGWvABYTSpJ8ZQXRbjuLxRPFTya8iBedcBEvwnXMg3oGTqsZobbZyjECoC2Dw2u6M4tn5YhR72f6hxMctP5YuA",
  "key21": "64Hwzfrep3Kp6JtRF1is3G69k3XfjDGQpbZBLKxbeJb2gazXkXSAb4DKe6HkjK9TRxcMEJJdztdoTt45s3yGWquC",
  "key22": "5hxUU23tjUQZ7HEa1ujj3j3L62QiiCr11BJAp3Ug2Z6fbMix4yS5ZzuW9wbrxmjYMSSr6ynwZkSpzEN2CxpcxnCG",
  "key23": "29pBBTyZ7EcqWu3pojNi9cY6uxgZi1z43h3QCi67ucGkbP884ki2WAGkpZcV1QivBHFzG9AHmvp2wwHBhd8yeNJ3",
  "key24": "217sXY9qSJHjJ88QvreBxMQov5g8qQXARR3AAyobSGomoEDwspMqx6Dn8YwwcLZWdQ8nX2q4otV5AMtUa8EZzaUa",
  "key25": "57nF6uJbseiuFKXg9cdQ6dRuEqcTVUARiQrZGiRQZ3wRroQ7KFz91NveS5G8w9C5cVtmqSq4cVoG2iyLeTQn6Gde",
  "key26": "5m3KF6yEpj2MHqJ9iTC2k64v2DEZrVTFnjqgbqLuABBfATPMWLoPSLH6QCo3U2h85jBwRbcPabpaMW6cr2A6dieu",
  "key27": "33PJxNQjA5LH8Wm3EyBeqrubchqYm9iYnZ7ggD7XAoZXxtU9qTKUWnZLCbtvvUVYKbVsDArDWZD4dhu2WKEV5vRc",
  "key28": "4cpSEc5EBWyENSTkXfMwDtzT4FwTNYWgqySfohtaFFiXoyrtF5hN74yp6N5S23M4rTYuB29J8gDWxDuT4jJyVZet",
  "key29": "3zWiZHnDmcYyu61hmUkNU3N2Lm6YMsy9fmVAsYpjXVsB155dArJRABbyEPtnTrT7Sqx7QcqFjkh5TmTtidRREM26",
  "key30": "pu67oGg2P97nDQJrjmkzprbvwLMKtqhkFAcCLisqGWXmdenwPFpASRuEo4Gd3r7TGoDbDfLfmxtTjdrrr36epez",
  "key31": "4rNpQsMJeskvmihFNGu3wPMRMdiGgnCZ4z8cr1cRHwPfBTLSwSRAapD2WmGj8KXQfKNvNSwT9C4iWP1bTqKe7nnw",
  "key32": "k9jHpBUvhK9QJjbCPebeJQuZbFNuhMYCKDhcxCWDjxmLW8TsxPsQGTToxdJFX6qmDENfy8HHCRFzkfShR6fje2v",
  "key33": "uA4xndWinZYt4Dvakv5mLLK67bSAsXEZEKbvinFJvLWecSeYXgoGhhTsDM1NvZKiMpjPegZjipLQRM3c3qmNs24",
  "key34": "Kh9Us1kiTsnqK67a7pKNeFwUtfHSaFPXKwGAPgjd92rN9jshDdxp39eB67FXCVxWphiF9JwSCnpvoppAp4LYM1e",
  "key35": "2sn1VX6b7rnUtkzgFMQ54GsaT2X96FvRXazWta7zkFVah5XyhnG6s57uSkUpw6mkz15BAyLAcgM15fPcrtG2SA1A",
  "key36": "5BAutYmCPK9f27GpiznpiahuDLvkzckvigK5rDXFDXBbth1CKDGqGKhaukFMeHVgw7YqXhG9VG5ZVWPM5A6DP14r",
  "key37": "3MD86mJVLWbMQjYmGD7wXhETxzhMsroHwuEtahmGiBnNkEPJ7TRa5zv5vQFHyHaPCiPZj2BYCWEYaUFYd7yBAcBs",
  "key38": "61rfgAbaehfxbVymJTdHNMoARpt8mXi4FKcmG1F5hUnyfaPDJGwoUXef8qHYydztYHftq99tFr8tBhkK7SrLS7N1",
  "key39": "bEBxeiSRtqqVwidd1QV1zTEDR3ympsKswE6SghbVPUERV11hs5eLL5icyMpMYAGeBjq5Tryz3AwtvQoBXcJ74oA",
  "key40": "57Pt4s2KT1XsvtTDVgWpJ63rM18H6jrXf46VNWc2NceaUtp2QjZb85jtJocfi55ksGjpAV63X5KuJvQvJvPY2WUH",
  "key41": "5LdcxVWv3AAvoVoK1N1P5PFfNVFa5penZ1bWAihRrGbiFFyno2EVo8URDyyrAU6AuXoECa9wB7xg6DDyUeXzJeYP",
  "key42": "2AEitkkuVb7x217Cs3LjTi9H7H7qC1pYdc7jQefZi1wwF1tKB1xWmVPSSm92ZE8ex9rcQj2T3AbJf55rYwj6QFcp",
  "key43": "22qQmmVokGpoxBHpkSnzEWwyiNMexPRXdCqx9MxFRPrsV6WBsSnSE95umwgr72qDg9jDNtVBmGxqahNnnRvdGJyb",
  "key44": "eCkYSFRW7H5qxvA1dtKiL3wYtFN98cXJcBWX1iFU1MxX1gCnELUkVNu5QLEwTyDUnNSWokxcrwP1jP9Rn3pNG8s",
  "key45": "2aPm1XSVaujZKQ68i1ipot1p2nZ5G64Qws8h4HzNj4uDRELfdpCadtdRCg2RJjXW9QXakb4GKi4MqQLeTzF9HojT"
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
