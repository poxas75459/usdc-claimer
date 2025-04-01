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
    "2uYyQiMMCsony4KdNQMfECzPcJBse6fV1WNidaeqaSwakseYNKLxvYKDfFCimUtZhV3u6ALeyWtWY4sCbcsQfEqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sGxsU27b1pqqzU9ruB7XBExhNn3d3towRt4z9RooENjUmYHgnNL8oUYDyDS2ZeVSWwUeRFuqaWaaKk6Ap4siiYW",
  "key1": "2CzxBmZpDUKJ5PnsJkGXxxzEkGDvqp4mBr6GyeTbBS8UWFP61KTxQxLpTc62cwoumWHZY82oiTSkB8pLzZiLMirC",
  "key2": "4pVsTFjGVGXsqhEg3RH4V7GMEiTnxYDR5uHDQT5Cmwb67drLdQ8DjEDdqTwWd3dpKeHwLbELqThqEJVbykzdbrgk",
  "key3": "YCNgXwkfXZn2vMhQzPyyiMJQpdMTG8WrDFZjtGVyfTTGFzyouX1YhzQadDJAc6Tie9zEwMPrJ3AnyyW1tvwJt5Q",
  "key4": "5gwbNaLqw857164HiEiFBniGDvt76eEyL9cdRHU4NG1tE7SuR6TRmCAt6vPP4CJcSuL4ciL2sLq3xe4wkyaCHR64",
  "key5": "3mJW8opXoXuWFuAHCWw6JTgYTeRwvKSrY4Mhm1TuCXqC9VG8t7PywJd54BGcw1wGX1AdoLWjTBg7Z4C9jep8eBmB",
  "key6": "47kaUu2Zd6NwwtVmztHFLafBSHSqREJWkN7EFokXmj4P9fjBn8hSN7aPsUk1nB4vr53iwBKWtyAZ9KKHainaZ2s6",
  "key7": "5SKP8cCaFXiWNaddwxDrzhhqbr7fJW6bBYpUeGuuiLoJejimTjkrxQAXD7kf5ULti2cBTYxipETvL62G9mosd2AQ",
  "key8": "2i8Y5fA9QdPFPcbb1pEFdmjVRb42XkaxQ22vUJpQqTZ9LZAqqAq54LVBB9V52WiMyvAxA3fomi82nRMHTgNb4jY",
  "key9": "5iZQFne8hjp97EeyUB8c9GYijsppXcidu31mCNMcGrimUnRqvKMb9cBWhXrvhEvKTyR87a5kWth8MYhgefNFjj1o",
  "key10": "5czvEf2ek835grCLEnpWg8yJZiEYpYHZTBCXRs5QoZUpWNjRcLR5FAYicxckcivo1zfLcwJupEuQ5mHdmPRnvF8V",
  "key11": "3s3fyRRzQ4r4yhnUvvoJLMNJEab98WuEUavAGYGvaL6BQZVZpdiDCQ58tdHhD7w73z4P9HqCm9AWiUp29LJmCxy7",
  "key12": "pxYuybvLS1hYTySzBb9Ti4JyYvn2cGJsPbY347ACKKwsaNkt91nsdQRNRLbRptUqQJLZs8pua5u43YntWCsh84A",
  "key13": "3yGX6bK8qCxpHAnX9JbJqtvJm2rP2wHdH9GJnvwy4VLn4L7QYri6o79y7ncgpLigP1upsFPknfVDQp7ZpaxMPm4U",
  "key14": "23fz2QiE2iMKVPkpsLS7LL6ShDoTTRSTj7dVepMenQE4b8EFwN5ZEZqULko7Suh555K94DdCnuqCfiXCBgpzhNGL",
  "key15": "3gYaZW616j7D3B4RjaSBanXkkCRooyjTxTiMTBiKt7GLVBb4LbBhew6SyyTeU7CNGawbqugUJ7diTcjwEE2jJBd",
  "key16": "ejYGc7Uk8neyzmZnynB1XRfeSsUv16FKgQzWg3credbTSJRgwyxpnn1XdtzRZFcLeRRHjwQNGH3VcsRLrTgvr1s",
  "key17": "36Mw5YpyenHPfSURCiWsfd9GrGCZRGZn7RB6B5swoL394rbgJ7kuh5gufCotMscNQ9vXtAjbbtGN9HUocGpYH4Hi",
  "key18": "66RyeJbeyWirKe3qk97Ze4NHTAVZpKh7ScgsqMcM4A1s5MdYc7N8aFYvw1FPUxoznqVZ4Sn74xvrRq7zRbViLTWr",
  "key19": "5Ja2B9x39iaN7WPvCLhT26XK2iLoQMPhmZsi8QzRYtAMDSS9js8cnTYwQvY11wYkJfW4PD5G8wyguErewvoiPqME",
  "key20": "5B3yG7JFXaFxsDx48jzuJYR5US33XNhNn24KTDHnAVzEJE9WwzZ3ctfJK7rRpnDoKkeMXsbQ75f8LtqeZGAVH4pe",
  "key21": "3e9wjnJf6swxjrnuSKP8KKBdTcuMGHgbo7ftbz6NpQjc6KMcQERmca4sLhxby6z3MNHoHYAgjuaCzMnNsH5JhPqT",
  "key22": "cVSJYaXZmaRdwev4EZnF4mifD97hwxrVUmJ6jadzK9YbKESu1LFZEPpENAgvSbzZfXvk8at6bR2Z7NAZk9QPxUd",
  "key23": "4TByyj5TJqBZPz8FfiPB1oJLpfrtsNZUVfAgRhN5ai2HiqhMiGjrB5Q2abq4kmUNPhTJDCaK4L1GQF5Xuy42eB1W",
  "key24": "3KQVoPqfM3ZxiU1CCKKw46C9TacN7ePysxzzhkfg3roimKG8hRFGjKDd3GcwQcH5hjymspZYNngk22GCLBK9g3bc",
  "key25": "dPWTucjyQvaeoxa8G87haCrxYqE6tPuqV4pp6kCAoCMhTLtv22HfMLKcvK7sRKDm1fZFpLazfxokFDn1aHmidtJ",
  "key26": "5WqQcP89K3jyvHuzKW6cW4VKbqdgr3zroYyz1uRuZvQsNR5uh6RgVwvfhyDbsrTQzYvBCnukWwjHhpEHVWvvHV9B",
  "key27": "3NQjUEv6ZnDE2S42ktVBauUwQmiSAAAaEc3exadubVnG9cSP46cNPRWaM9GxPwYtPyeaT8TaaxgwLFASkw3BTpqu",
  "key28": "57qrLvDeQp6HpQSqf53xXjKgJDPtUvUtZvPd2jcf8yrc4ZcvczG9YRo44eHq4756i7JLbdivzioKrUC5Rbg1HQTD",
  "key29": "y5gn9nXKMBrLP7fMLs9mzU3ZNChgW2VaNJ9eunN64rLZBmYcdnn22Aeru8PM92TA6ygkskiYhkbt3xNLxxMcMKS",
  "key30": "JxEqkM7Cve9BsmY1XdTvDbiRmjhQEHrPizU4TsrN8wB7qDyyssV9AzvHkkmSaDZhQHX7d9hS9SCnzpG7tb7U5Tj",
  "key31": "3HeF67QxL4APaQYqpdKAbK41NZogwUUr9p5xE8QV54L4iFYqnTZiCGDsYL8aMqqwomacuC37evkcEcovzC8QsWyy",
  "key32": "527qvc982YJjLeUQ1h6uu66pcxeBgA7hAwtf6jGxsvzc67DmYZMKhkPQ1My4QMRPfA4ZENbXrK7zB3RT5g8bLspY",
  "key33": "3G9hJ8k34qDbh5W7Nbh4wjmxdueG4kughmktWwmfhtPn7bz4cMcPUWqZqpgGtPpyGCTZAQBUbE8WogLoKVTWynwH",
  "key34": "5vEfc46psfVZ1y7DquoW9CdZ9RPm4hhKFABM8UQ8nU1jgf7pD9V7Ey3k8y8neYT4XeosQyXzWx3SZvpok2K2aivh",
  "key35": "5UPb7XR2bJKmJeCVzLftkHHjpyQZwBZ8TN4GNERNvXbenyD2QCDexxXrvbESxGZ9mDhvuHFMZQpRT7A6tHBRJeCj",
  "key36": "5v1vktxvoT1PhkVQV7F6x6cJqsZxoX6djDk42DZvgTfwbvRictTGJQfTgQfLwbpSU8cz5BJ4CwgBn48YwJ8xh87m",
  "key37": "4VUF19XhMCTvbNWJeEWcfnnB61CCX86nZoofvUTVNDA3zGCghhzxr2a5yTCrGEmPEjUDUbcgog3R9SyCwBaY2nSj",
  "key38": "2fPEjuUNVzoq8DWfnZavGoUgDrRmiPMq8n3PQx57iAaXagw22A6Fxg8iSdUtkYemXML9zXpcx2Mh1JTFMnGJMwks",
  "key39": "239TAmSZLX8kDpoBuiRCXhS3tfkxBXHZWCivX4qTKgeyNuwR3fS5ymtB5Tt1YZwxMUfivpCZEi4HxzJHPteDQPfG",
  "key40": "nYFtE5skwEhbHh5agWEBt2GBX4EmkYoZKpV4PPcyTx5MZGAtbAFviAQrU4WRJpqBJYt3Nx16xDvf2GaXYZ9xsL1",
  "key41": "67cFa2Lb2bWv4Ct9ptxMVfY332dadCPJk2xJjvg4f71KBoLYvTgkFAZ33UMe3PWjcT6wUh6uhGUtbyR1oTDvh7YR"
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
