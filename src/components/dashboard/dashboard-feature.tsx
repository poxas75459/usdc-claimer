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
    "U4ufeZMZpxyNB16k1YREfyYD4cK3Y8KfpB46kwdQKRHDdKBoNLKbQhPA9yuqbkNveasgSQUhjxWFDB7J5xf7ZaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qSvFj83mrBunfCwAtYPrdQ8RpBHVT9bC7E1TW4BB63oy78vbgQ8vP3pVpN4mvqSck7eoY1HXmxXA5h1MpBorqLo",
  "key1": "54xpUrJdoTFNYxdrZGnK4tx7W7gL48WtbcMhzsCZh5j14fnERvH5A3LRkMARSv41UGaz3CczeFhviGrEBjkNP9qK",
  "key2": "YR721u4CM24XPxBHTGowF5GYGbpaeKSveDMAF77H1WPVJBmEcn1UZgSQdc8LxMe92ybwsvyeYH2TqpafbJFrPE1",
  "key3": "56LFyxn5d2XRDj7BYvWyf6nv5L95gJmKvtsznNM1vmCZx1yBeDSpVZJZ8hQC5bQsxBJi8nq8JdKxHkjhffvX25aM",
  "key4": "4fi1UMvfCn71pFGpVREDRN6JU6B9m8kyjgiv9nvDr7zTXtP5iEc7oBMXdgKEAW3RfSyETg7typbifAo8krPFGrE4",
  "key5": "oF7sz9gsehgWkwkLSSuKrRAWRsG9osVjmPzabAhYop2yyzCMVqt8D57rbzxZi5PydQkVn7658tzcbnvBfy3gaQb",
  "key6": "4zSiu9yF6inNLKkamBFSb9976VYNn4Zki1huHjscb2nJSfqX4eW1aRUwCT9rWE9roorFbCqSdU7ZpBzQRqLygiu1",
  "key7": "4o2F9RHbehU18g788L4hZheLZaAfhb779kjkxG9D7JtzDddLSdNvjV615CwxoS9oQnzkj6HWpUYEq5rLs7fSXr6S",
  "key8": "33NkX7RdfA5DMYA4L5oRXkbTo623HgXB1HMWFXSm2CtZrekuEsi1TrXBrBuXJdsSGHq5pYkjf61AJd1W5wDGnmH6",
  "key9": "33SFp7JT8yP5PJdbt6BJAM7UvSpLwM6n6Zp4Hba5aESFLMiCSAsg8pUh1JWuhQ9g81Q5LUbVy75zqPPGMv49mpr4",
  "key10": "64AeUtc1DCoj4Bcz9fQx48nAqSLsHtc1zMcSFTmGRVnkumHwoDsxNs9XpVB4kwYTDBHDKXtxWLY3fLTia7ZwyGAh",
  "key11": "2hrcULrmKj7z4MDdHwNGy6mTPwfDivstuopHu2GLsKYSWhG7Fb1sgwok6h28bMLSTA8VTrATdRJSkyszk6NTVB1f",
  "key12": "nvp1bLZvWcvy3w4vrUkn9JVD2DdFxmeSmG1oo7XZqYrHhUExBH6PEokG9cHfYcsNAwarrSBCP3WWU49MhYLHqCL",
  "key13": "2p4p6EdjBMuUPCdiZRJrsCNoWCSchrgMT8JatX5PiDTmqRgJVv1iRth4sDX5MPiUY8zrTxkKnLWSKHxVgwbG3qXD",
  "key14": "5JFDjV1BAeqG6Cv1ZKfq2uuchK27Rkq54BHEZWdFA3sDkcYergbQUxfnRrsthfbwU9oQXa4hs5cLAj7gZDG7KGEU",
  "key15": "3NJNdWeHVKPJmzNnLJhkaL97qvqdNyW6bVBsmqKCpn8k2Goa5htCCHAG2NEfcFxh8zZZcx2532LSdTEXinCnKUoh",
  "key16": "2rLbXJSngdMXsBC83BErxVyuUz4RXJQMKuMfzw1wVDwG43SAV8vEnXxA4ryW9y6Mp6nVywAppGyLQGamzqC49KKy",
  "key17": "2Ht1Tn4jrJ1XHdxHomeWi5xLTcySXBbYGkSuWF9Y5EXTAUX6qreUMSzEHWKgQwLpk7vaMan9nDigmqLFJ9Vr2xuw",
  "key18": "2oectt5UnAR1HzP4Vww13uKW6zNhpzc3tSbqhAQDdEyFRgMKXo9N3ntReJunx5JsHPefQ9KrrcDwNRnMxjPbroEv",
  "key19": "4XFFP5RszWw8WHkomTsehwUdNSNR3S52eaAnhe23C7oZjcJNFLkJCmfn8k61Msz71EhJrvJqg1QLptjeWeDCm4UV",
  "key20": "5i8g1iNxiGBKJYdmAzShE4KsaEML91h2KJZUbZFs2gFyofDpUBF3qjayiFgmJwhxztpPBH9PY7xCT1si6zkLbuPX",
  "key21": "2WDqDQqoZw44AanJDN68sCYYtMQqt6DsQz2383H5b2pZu8tTtD9TMrDNskMUFc8LW7YGknAtL8ESzebmrAyaf288",
  "key22": "42BzZED8KpBJoxMhdd2Az5Cuh8NZiCvqgK7CErvoAsELBX8CmpaxYxFpU5BnpnEKPLDdxcJhN4UXa4tNhiABnNvE",
  "key23": "2FoCjPiqXB6GqMaeu9tVdKR78ijHR6iiSrGjEyh7DvViUTevrJxPtMyv6NDzUuELgfUPKrZPtV5zNEqen8zdnNy4",
  "key24": "4k9kkEXMbo8d9peTaiZ7EC2rm5X4j8rzmLZt4pJ8KpoYCMabmF362HcaryyYvsTi4LoeT8kfzsZGF4mJXwFrQuNx",
  "key25": "5RTBqckpzBurpdZpYc3BJCYfMBajEhEWzdziC7fAuRBwajjxHLqoBmXxY7moWZ8ZeXVBdGtoTpLwPwcPZofNY13n",
  "key26": "2YrRZyFEcUpeCKwEHNnw6KDW1uP1dpZ1a4t2EQQCgisG7TYCegbzbPTLARBbeUPu9f8KjvtLnvPG7oygZEKUptgG",
  "key27": "4vowWTtA6uoesnTnwt7QdKyhMyoE4xxChg7EYUXDofxV4astK8pgvTcFmfUMtJ9Y9AEt7yqWbUwPoMHyGSB7Y62r",
  "key28": "SacAbouSkALzTzoM3eorHYsvyXYBeJnK12ycZfXzyXGPFUExWpcUE77QkJ2sxFQ4KbAp2YXikZAgNdRHDPwcquN",
  "key29": "4vtAUCUTCAggQmBWUwFRnEXNTMD2xWNRFeef51beLT1GzcsYyUpjMFACotYMgkw36wvGwoNFGo6WSCdyszSRVvWa",
  "key30": "3CmPvQHwYa21NdevpfQfZv9pphTfaxEP2sCBd2ALPZ2hzX3jSXYRbpNwhEt1Gz8LANV6bdRkw87GKu6KBM1osCT5",
  "key31": "3UmEiXwRiGExisbF7cRYPyaN1UrrTSwgL46uUZtXwQkcHdiiWw4kCX1EA1Lcn23zetWtSSRXpQ8XAmqPkRQnSa6M",
  "key32": "y4zZXSLN39v1jvCf6kHYk7U5KxVT3SprzhvSjdKEYZ22k4dsoQLPPpgkYaQHMGm9GXd5HDQsSixctDCgta3pHvF",
  "key33": "2rYHLCZ9eBXBgthUAAZ4emoav33e97fNm8hPmsrh3kjT1xQFajqciSEYWcwdDrA7Sd3DWHyHSqh52NXVahiy45G1",
  "key34": "3R4M4p9XtxE537xsg1hBptnxp28xp1kqxzWNiKzVyjav8md9QzkBjzkkTLw5tLWjw48qWPT1hCwFtKTehxaoqoSx",
  "key35": "554it9HvQYkxJEmWerVV2r3YnP5DzGBK9NymxBSBLpcY6gXhyaSztpZX5tVZMKrVRTqBLNkk2fWoh5FYY42C68Us",
  "key36": "2iNMXfLPvxfGvo2xvCCojEyAs9w3jP8A1Q55nDnv2PE2nyJEZoFfKJfT8F4DrdWCKh2yKWo5M9yBxgc7dvAp4GEz",
  "key37": "5DdJGjcAHfzvQSJTa5UK2XACbpM8Pp3ZMDL5b5r642Jan4wZdo2B9zy1rnPpGFTUHc7bkkGa7Kv31FiEBFEM5CGe",
  "key38": "22WhYvfkfEsMisBwzeDMJaSfV7kBJZd5K537wCWQq9cqzXGSZxZ3hbcZakeSKvxwK2aPNwz2qbd41oUttsDtJCze",
  "key39": "51P28Ke15fEyhp3CMQMuF1fvqkuk79TMX46NWm3HJHpzUXmxpZnsFdrPuWewHK9fGKczhX62Fm8BoYhWQCgKgCmT",
  "key40": "2cUnks6y9XvYfUV3pssNqTBgHmroN7ZPDX4NxtBnUTjjds52P33ByGJKs4pXbXVjQ2KVbBJSy9qoa5gvcgyFMbfd",
  "key41": "4cdkLADi8x6sgUS9GEQk2oZixib2L3ze7m6GYTR7r7d6UvnnyT6p3dgDTR2JGbokcA79CWvjhB9KJ9tfyjqqthRq",
  "key42": "4Ktpk8PcHZz1ojrBNQpTmbqwwNpL6vyiaGofL18zbEqtMc6pwAsQ2T59BoTKGjdsvnMxhWM6cCgsuRZofq2rXUFy",
  "key43": "3BZhMEg6dPkhMxMXdryVUXrfLuMzkwF7gUowNy2sKkTqETayGrfkn7i9G2uJyVVjddFieUfG7hawmYM3iTawvFdb",
  "key44": "2fQhwXfHDDX5dS6vcUjA1eiL6k66FoXbMtqS3JPDHaua8mq8grXgFoCutqgYF9nwTXQssiLWPW4agiT9urXoYraK",
  "key45": "3SgJP7m1iJNA3VgGKeFWT6226WRfMj12hohu9cPMy19RpTpoZuyzpGBJPEUWFaqaZoRzPEPAomVLEQf9cj96BRT6",
  "key46": "5vbeWXREeyx18FqBrfsdZQMdFjnK8uo8PTNbrwqZWt6VNqgmu3Louncx1BaJNfbZQk7Yrf8d8Mf7fQ5jGjY8mU7y"
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
