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
    "1LWjmHTw2dZjk2fkUWqUzKsYHLpBUm6mJPmuYQXYgz6SN51SHfrsnJo5v5UekDzgUH969cSiKLtgL9BCNTVw7oA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NGDAAbyazSFJiNywrw1q5QdEq4fmoKKDiyVRxfjPB3EUWWxa6gBRjPjrkodfNemTUJ98dfm8Y39bPeYq8LTEycN",
  "key1": "L2Hc56rDexx6ZdSms5CeJkWAvGQ4DdnUw2JPtr1nK3W7bgqgJmKdJAimWj9HNHKDPPRcGdRpqQfG18ygcGQYTq1",
  "key2": "3t93vHhLqKev6WshVUYmHTmhPfB6JA3RgsvQ4QVdPVi5Dc9mHsMUfpYzmTkZsrdMhvgFEr2ici6gB5bq8NJ5ihAj",
  "key3": "UjMoSbAatstAaHxYAGhSDZL3CTNJj7krYzEJ3Tywq4fsRwvDmfwk2WtiikFnbUS1gZ91cYo6vU3MfQ8WywvF4rT",
  "key4": "LQ1tzyL7HogNQhUB39XzqkXVvof83vCP4ddZYhrvtQWN5RTiU9W76nrBB6CaqddoDQKtNQq8x4BQCt623j8CK7G",
  "key5": "3YTn2YKXnFbMSufmNp2aqBMRZvAPyzQtbbeEhPGok7ZvwSd8c4z1tdF8Y4QmWsfwXHQSCvoCrkE5HD5p3wAHwpfV",
  "key6": "4znQKP7kgGh1auLFLoHDZjvCAcuMukW6DdhbUCr1y4to4d9tiyma6873vYh5feP4MHbVdD1R4pbNVFYJaGm2mvZd",
  "key7": "4px3biohk9LuBYFTH3bWfMRamFJNtZmHymBPur6k1VFmrVSa3omytdacv8iFTazokvt8zaNsQBnuYrqanc7HfQfi",
  "key8": "2nx13EBNgcsUhNuGMVca545NXehDanBv2i7FPunWadJttxHDekXEEdCD16W4h16wXNZL81cysZs75Nt1rFGWhzAA",
  "key9": "4PzDPTBoX6jd4kspQbTsGtuCHcc9fVnj6Nhu8DfMcAhZ5YcStJpRhXrZUNMkz8JyHWEQWzWmrL82E1xUJkEQe8RE",
  "key10": "LVxRwmqYR1PuBFHPGGFZkkjhmiuRXQcsfvU3YXYQZNR3JceA3C6z2z5BQtZf2EKjsrEgLJidySw8nEn8kBviGtG",
  "key11": "2dXKhs1u2qKtogHCmkviaQE7rBAaHSSNRnDSsURu2jJScgX3hfYm37PtfZZuWHVUeUmGCqChcZsD4PkvoG8hMPyi",
  "key12": "5BZs7CaU3UoXomegczqB387utKxxbLZuLmgxf869ayVo6tNM5MeYRXCMeopkuafsxwphdZpdiQRewzrQ2okamu2s",
  "key13": "3vea3rcuuEZxJFTaXNaD1cqkn4L3kczgU2fmo6LQuRQdfPEnnR79eCPS2qp13GAnvX7EbNQdpPBoyk6UxveAuiWv",
  "key14": "23M9xD6bgEZAsgqaEUHM2xTeBPpLKtqPRkosw2meU46MC3XYa9vWHwhdoWWmsn6whjyHZmFvui8XWMrQ3eaxgwXq",
  "key15": "3cNNDTSchBD6M2J5dJZZzxYjhuFareFgq8xB4XWncXP3Fj9NLTSqscWg2Gi8PC2z27nd9NoJvWTzQvscURK3vRBC",
  "key16": "2Ld38X6tn2nAuXBuUn7s23NLMBgDGR4tavUNwwFhep68bJZeqY1DwAWboyAzZdFx9SYP4QdJdeKK51WqNtfKUWWL",
  "key17": "3Gsn7gy8anXU9xc4BNZUtbXpJKWZWskh1k77cc6JF9oTBhWhUdBHwPRjEZuLYom2WhyQBDkx9ripAZJrgN6Cxucm",
  "key18": "4ceyBSYMaddsYCkGKEKqwiiAhtCKJt6vK8mwsMYC7CfsQvepdk4iASwJqCbE4M5QxoAuJk7niDLPvsVdAxzLovms",
  "key19": "4ngULWFNsLEFoNWpd5q781So4Vvy37KWPS4PTd73iMQVsVxH6Y4izc2ZMbjp5yWepP8BFm5FSPdrDqCHXXA51RQp",
  "key20": "5ZTYY2RczbP3isftv62SRdLiugquKVKHLc3BgRArr15o1JkBL4g1hwR4AcvDHWwPvcZgjBELpyVn41Nr6YUsahap",
  "key21": "2vj4wJ2s1wFiQz99HBDGRPvw4nN135t9UnSYuuHWG3GVSMCX68aq1wCwYRScjMEeK5LHAHm9xBvm8Lp3t3J4PwP7",
  "key22": "3jfsRfmCjXx6WCaxjGjWxEoWe7gFRh2NCWp7rCMKFCTsAhzjxhMyxXAp2fV5usFt44uGexSMPe6RG1DcDK4MVE3x",
  "key23": "3AUNj6tu8BcoXsZLCz6HPk2yYvBacfMY2RHn6iCATvP7UPUp9QVqD3kbq8SwMffeVTPz9gaY6fV7GW3zMgQbiGyR",
  "key24": "2ZNVE8EV9ebE3CuGbTsFCqufQ13FipVkfDYgTvq4sBRoEuHBMwP3hqL13HSKXMKGUMeoXRrYKgMBzb2FxVvscje1",
  "key25": "2F3qEQ3HxF2KasDGVxD7qW6YKiGSUZ88gMDcDwv8xxpGe83ThQ6ZFqXawfv1vSreuErcFQtC3NKLA5vkcUATJnBk",
  "key26": "3UR8EKpREzR9p7AUpAWZ7iVVGuEH1gmCnDMgQjy7ABS9RtrnDdjW8H2Jgmcf72hqjnWEAdWGp4fxqDctrW2mbbnt",
  "key27": "UNomjFkAvB4hYLAZjrWeoeMVCqPCe5rtdGJpm5e9NKUE1pAH4hheN1Ujrc3q3cD81szwjwdRrENTayx2GWAfaCV",
  "key28": "4WyBd8qZRBzUi8YrY1bHycoePQeyPzG1pohmqhGuZ7gasdbd97Q1UszSrkDS73YwwCXFtHHMLiGbLT5DdXkpC3Um",
  "key29": "67T3kcPT3qAHaLRGnzdvL6j4RqZQuErUrcfuozgFAmfLo3rMZ4jUnAzAnGTXr3Vx3hwKcVWM8ftPXWEaPZkTZ28W",
  "key30": "2mEit751pa5dp6ewZu2EUnvHZ5FnX1cj4Z6iQj7KAfQJCZ9Xg7BBTUKxzzdHx4Ee9uFyysDBXRiaJRSLwypHkkU5",
  "key31": "ohSQbV8CmrcJTJRr4cjAcFapgHvsiHAHhUk4oB75ZESCCojECVgoFWqSKh6u7BWTekL8TQJFQYXzjT2SBi8SzX7",
  "key32": "4bEVihmiq2aA6XQ5RMUerddpKcRH6ZwfbfWv284seH7GkaP6Npo2CRuh1n8GMNSNRjTq6d5LDvSKyUhwSQnTMe8k",
  "key33": "2KDdhzZMQs1NVYynQg5ktvaLWc1w17j8tGco1LJw252QJ3pv78dQwUBiTvJ2p4vNmUSgt4HhvzKtPLfam4JjPrfS",
  "key34": "44WNDGLt5Pwj1hqCAa92ifiW5axBXb6kUjN4hjcQTshyUdphTkyTXbbuCtLCf3X5xHCUZzu8tUKLjd1terfymNAM",
  "key35": "5LfF7yKvzTMzy3eBvR2jrgi2F5Aqee5p1vNkTGnZ7cQXnseLh2oFCbGQ8ZSAdg19sKqnj5ZiESfAx8fQ49F96mh",
  "key36": "A73rRJcSKhZoJA7xiCZwJDXspttYkDazkDsT4A8oRT5NzAy6E6sFP7wyDejHWHGAy7qRo2UrqPP8A8NBckG1QeM",
  "key37": "54dhpgSVZqVkbgubyf7h1NH3JVaeTSNtFNS6y9CgAko44YKe6SCEKPppdGFXwbVKkQ9RTC3EU8HDEwREXZXcQhr8",
  "key38": "3fMsJxuUsBM6aMRQx7zqs99FrQyUWMKpUEtd9G7RFomfMDL4RdbJEpoxzAKe9BHm9vTmfWUgzFZ1pJZ3ySp6EuTf",
  "key39": "3sSViA2Sw6cmyi5FTrmePB545uMrNV2ibmPZ57Rp5BHTv48HNoCJXf8UxWBS3Ex1tyZoXvmKfvj66yNZny2Mgt8r",
  "key40": "4qDEoozfi2LzMQGfn22UcRqgaVPooourupWvwENB7YZa4P6C4BMZqeSUKaHKLDczitj5U8R5pxxFjUq1X1uEfzGN",
  "key41": "4ejA7jpwfWmx6Y7UuXxQ4ug5yt9BBJSLJNzJvKdwUN2XV9SJGPKtNSCjFwbYJ8EQSwxvm2AMg71haY5kuHZb5ZLs",
  "key42": "3FKSPZHyKdmVFFhXm2papz9PqBzfKHV8aJAAnVni5H4fLsZrXPrJ4pnBtobYjjtTScDvy7HReY58jFfLFqCmotzV",
  "key43": "39je15ssfcVR7P8uVJ599nsgsTZfWBRoHMC9Kq3zPHSHBsgQ2xjwnnF9amzUhiVNtp8Bz3A1zRh2edAfPctuq8NT",
  "key44": "5rgQypHJaNciD3jhU4kGJsi9WvGEF1RoqmgbikKccVhMKkXc1FbxgAMUfPyTnnXoz9uHWd1vfJFWLeMtqBU9KykH",
  "key45": "2bGCsi6c6A6YR4gVTNviwdGgHArvNBB2pb3fkea6tRvJtqpSURTvvxkyujqiEPS341pq19CMBekgHfFTJyXoAVaM",
  "key46": "H99WKWkZRiCobVr1BmbMuFb5PJ2xEggsW4TYnVN5H55h6VJ5Lh6hSugH1tJx7SwxdgjdkxTZRyfRepiPicziYAR",
  "key47": "Bz8RU6t9ULGBw62hfGSp9HMhuDWa8zbqKvX9Em1SZ9NrTeWbYk3dQyvyvkU2VenMsNVLwGD9NjGnxkzQLLapiQH",
  "key48": "2WPjMP12c8Dbutoj1eKPDGpEcHjsZXbYn5xTLwXDRgfRstZ4bc1ru3iTPsVuUaPyow7a2MgBLBSU8eo8RsQ7HxQy"
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
