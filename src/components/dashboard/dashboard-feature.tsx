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
    "2YoaPf3JhrHwVLrjsdp1iBYCmi5yiEtGsqLEgVkoZ8SfYPN8641vXiwAr7BmY8ivdSMFAVeXhJmu22WmiTpCiGPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4faKtUnAYc6EA4DrDiDsPvyhD8LZHB1ZSX6N95T5sqh8pM8ju4ZD5ZfeAYvnvRpK67ktQ9UgCzxYWdyVpjWbifzG",
  "key1": "3A3AW4ArJkDk2jdvH31qz6oqGJwmSHmTBkbCcYBJ59KH6QMHqrmH18pE3uBxcSPHxXConiUtCLYGMrGwrPJdsP52",
  "key2": "nNsxFCuGw1DdpkzjCN8eu2YTetYPqyb88KnbzntgrCX7489jsRLTgw8tgyiZg22CDLibW5zNb3iUaimGWayDwu2",
  "key3": "411fnzbEXG3ZWZjnXwrAnmBuABfjZk32duxPVR6RzWjWFecjBGQtfXWi1NXCgvb9QsL8PGkj6FxtKzdr4CYuviBB",
  "key4": "44s6tuMRyzFKBASZn6T44ayRAL3y1tEfSXKNK8iaShfeYg5zV7d8xKVacNUDZfUke1R8hNnc6B9jfEpHc1kJACMw",
  "key5": "5dtE8wMwMhvPDrM8DEw8kTCzRFzGFsCUdukZAyypT6bCpVbYuVfhUr5jYWPKFTwLwUv7wtCjwKXmdCoaXdxnApUn",
  "key6": "2JJdsPqAhurz58n19phQU2ybb2qxoTK1ZMRc2AcWw8V53yi8eeSmE6oA53KUekVpc1P1a5iX28x2hHL9XijJH6ca",
  "key7": "H7dJdn668njQfrmdECCdAFqSL9wvLHbQB3X2x8L8K23JSJFWLY7ex35iJk58GpQk1oDh2Tg4CNQQQ8eoLQGP27y",
  "key8": "4sTqN1DHsQW8rUqM7vJr3sRGZgfyY1ScGQQfJK9y785H2Yi1YJAnAyEXBUymq5ZXGsv3bdKtVe7svkEs92BfgYuq",
  "key9": "4GiaoSoFHgsYVBv7eywkb5FRQikHvmD1mNdBbHi7AHcyXJDg12GQQTd973xinemXt54P5DpWJ7YnzeQyphG9KY6H",
  "key10": "4Jf2d3QNtJfjZYshWF28fAAW72VjXSjPWKwAnN5xa9b1Nc3eBsZij3kpkCqiyxceSWHpEofiirVuyNUzT9gUoLW5",
  "key11": "62PwYRe9PHvsjp8vvpRf2dy88c55VxirDr2Hp4LxdsujWScqRaN3u4z8jb3BKtqSh17jV6Yzj6x97NUGzcGiaf2n",
  "key12": "62phBTDUwqs2YK6JtuB2riLTqvbLWUT4ajkayt4K4sk1i17joGNknSwdif4CXtFpmUmc2Fy3f5LjBucSpC6nfFxE",
  "key13": "7VBQN73RST8PDWvA3bd65GN4tB8g4nvFAu2XZfwGZcaLCfDoEKhu25ChdnT1ueTB2qiEjK6hj1myqqpkLaC2sHB",
  "key14": "wiURFsQQcAy8psE5pTnoNVhxQamKXs6aWHFhS1xgwxFfpt6vWKeJdoVdvjUCpCZnYKM2RHRNifmj4wogwkmegDG",
  "key15": "2BHaED46kd823nKifQ2aYxP9RmoPvyd4QZ32TJfZJmgVQ8TRZLA9Qd6UVLJ4sG5J7BNTVGWe3upL18ikNJ5yzP2W",
  "key16": "CeyzwQKQbDgvx3Mou2wKNquQdHcLg1MqEw33Es6y5QxF1zTBeUAbbvwb3EdBxDb3E4tZqx5ewQxaC39c9ehUQnN",
  "key17": "XpYH4VLEB3RnpzzGJVuFy79i99DeCze6iG7qiBe4RnrYffGwwc7Rv4Lp5CFqrmRzdzxypjnYh5nD8fW1AmiyzUu",
  "key18": "51aBSfqEzbB722xYH75zH8hEgVD8G59G5DX7ya1NHR9scBDFCbrhjSRbXgmsVwQfT8kuH3KXqz3h122bHJy6QB8U",
  "key19": "5uzbJuGGRP5hJupyMNx3ap3Jo7yVsEXf2g5YN8QhAPVnDUgr1TBgmyKB3UQJC8fZfqqWRwMk2AYcC574BkuoGkjY",
  "key20": "3B6jaPpfvCZKFCNh3r47pk4pENnVSRHnkP5gkgBAEdW8NuMHfssXm7igdjKwLVHdHPKvgTKSJPxSW3RWXTd9cN8q",
  "key21": "3AGr3Ea9fJmePmhXizmrnjrurWRSwfarQ1Go9nYqyfgEvJUCxhFTBqPhwgdaQk8v2C95D2KyVbTWtF4fCvEBnAVw",
  "key22": "5nn1XLt1XYuC7KXWZCnHMt9vsGfw2afKtfWig4QeiNdJwFN48T6PTkAbZQsSjoidSGnRwaNgBMwvaXSZt9EhsTLv",
  "key23": "2uxd1BzANqUL2RN2w32t8F7Jm5jSbqFzqvMA7dw5CKDypKbfHpuAzuRHSBG5pNEiJc4tUbyXfsUpTMtswXy32qqj",
  "key24": "2wrSaEDSSTqELjdvstaP6sJkQ6g8Aaoq3y1v2nvXf56zt3Shn9jWPHhdeNQu983AoBZWv7KAJjXemfBYBA67gSp2",
  "key25": "5uXKcRgBxPLbSon83hLnuWwV9u6dd9ZSLHiFMEjxYRkqaLD99S7VRg49RbA9RzcdWRVPAYhwrnJqfpmMk5BnvCCC",
  "key26": "4LxYKTSdgLjauB5KBMNPfqZ85VwexTtPFWS1c1DnmoaR9ykhmMRfKPUDum4465VMpJ8kHm7LkTRUso9pBa4kS2Uz",
  "key27": "2bCo5fASHkbXrthLgQPBEhfkN5Z6XUnLuAGAyvLfaFfWZgcSvet8dNdXj2rF9eTqWQvExLjDMhyEA3ZP2JsczDe8",
  "key28": "EM66x2MfQDK9Fetgxj4Hjqji3oCvtFsNGvSPe9d2NXZW8mpPoqxbmC6Qu2611YT2DKE1G3ftqzMcV6nnM8iFU8B",
  "key29": "2Q9VYppa4vymZcM34BRUrNFwChbnBFxjJBDhBUCU4r6CSXwcWZS2dHDk4sYz8tTEFUG3E4mxsgk21fJHjD4cvLxR",
  "key30": "4PxCaJTSxhTAsYTAuaHqRZTSXsMSKHx4wnMdAV58V7j9FwQ8Zj4m4rkVfJHA7kujmoGoPAsMUoc3pcg9XFhVXZV5",
  "key31": "5rAg2NDd9nhb3BTKa8oiXw8MStEBH9i9j4hT2cdYeyBcHYVMNqfcDWF4rQ4vZFKmG2edikX3EmxeDVMZaCHhcnuM",
  "key32": "2adygv1XSAjiUsxYq2KvUkXgrdgJGRjJ42zz4VaUaw5H4CnE5uNBHK9Hujtqwi7KbarHU3qhYn26DZeXhAZSpvUb",
  "key33": "5zt1BM12KPV3Bzavgemo8Wjs7Dpyv7YF1dh5w1YvahjCVeLhA6tNkE86YhGB6PAK7WE7hWAUiMvP4dbSyEqq5ehw",
  "key34": "4Ny9Cc98DWg3JT8naS3PNXcCnewYwp6wgas3nikizUumwwsJuVoASWVvwWXnVnKcVGZQq6FbkuGepzXcyiNLwu51",
  "key35": "9G5yEguCrhpaoaVQM5VTYG4SZzV4gEw76QBusuimUFdZQfBnwNZvszodQm8mDNrLyZNxjpZ2jqpxgbbmDQohTpv",
  "key36": "8XSGiw35FjjpZ9wQztjbMeutyL9VCQC9bJqunJ54dPohwbpduR3CLSCqW7EiA8qcBP3vWh6oM4oX4sdWLFPhBwW",
  "key37": "3yHVXrw2qHt8SHyvicZ2bcHq4hNccuDyWVonEbAhV1y75dVyY98vyUyUiCd8V9CbPDn3wxQBLMcudLb15VoAg7DD",
  "key38": "3zjBaghqE3K5PX4uTgWstbV7KA8EemMCZyqXpiL4DJ94EkZM8mo4JqVbRMteHYo99Qo7aqs3L5xRQrEsxGqrjE2c",
  "key39": "3nUzUomAJgzXaDgwnWkLHgzhabRAdctF7tkmKWBorRWmmzRdQ66HqyLcthJtJ627r7ALPRRx1KqdjJfUTrZ2yVMb",
  "key40": "3zrDTMub6UkvHaAwmid9af2TCMHYZH1ho2R6odZrrd6jmt61HSx8iPM92gQz4idwRND94yDkanpR2Ca16x6wgnxW",
  "key41": "2C2eKvwWb8Ge2pwWGzHP8mRQmx7KNQiZnjqsneq6QVqUzQpC4VR8W3vz93cSQxDhAjZ2Qgswdr3ApWN4sDdYDHTW"
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
