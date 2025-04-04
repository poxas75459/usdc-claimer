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
    "GSyTGvKY8NG3gxDWb5T1TjEUMCM99y7EVvdw6f7dhGAL7u6iZp3Xx1tNmiB1i9pRKUPJjc5rBJbdCmfXuZAukjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L7nsJQSdNwkCGpXeL5NquerCmB3zzpU42XMhP9tsz8wjiJ8ccBAeJJGdeehMs5DTxQxqbRBrXBaZguYEhmQj1X5",
  "key1": "5Lzej21n5q1bQcKTypqudqd8DM8ACHcmShujaDrJiyNNE2CXDJCsMhhwrmUo84v3nc1P7ra6NiW7sSW4acXgkndR",
  "key2": "5TCoG8qp9EgRYbNFcTJhYjjw1Cfm9taGindcaucgv3FJkVF8iSM9J9fM9LBRKg5RSi5xQVrHXGnbey59bmT6fvcM",
  "key3": "39PVumTjLu1PsFHsW3wFLo1EkCoV7YMq9VGVTuJbj4rer5MXNHdrKaEDkPa6aZEEmbXxxSjPwTcPacyGyrzFv7pK",
  "key4": "51ncPMACT2JhDiXdAzkuVm3zMpgTeQaG7qbdbFiYJFU57Mv8fKAWdsLrLxawAmxKqcxLkRFg7WRN5Voi8XAWShZh",
  "key5": "3owsd2BXbzVzn1QJbcxqwfCtACfSAaT19J36c9CvVn6wSitedbv5C5e8axAhZumWf7bms34igsxSAq73TYWt9Uzd",
  "key6": "4VxJdYrUXzZ4oe8d9C8xpxGzfKandVutU3vxBhSM31BExyS2BRspCSZDxDLYmNPEXePz4HZm3tK9UVW3vz83tfr7",
  "key7": "4ZEvbskybYZ5BRtYZhCU3GD134mx5UUebptNs8C6SqgwBPPwzoMVG27K37zMf4CSNCMfcHhkrmtELTGYapYqVVrE",
  "key8": "54TfmutNYdMR5pFRPAChAU6VWM8AQe8nwDf86PDvg5g646wv9QcrVK9cme58E5BE68x3W2b3cqZqktWxrs3jvuxi",
  "key9": "4Nav3MjukiiZHdSyPAwbCkBTdDtvUgAV1aZ2i71G8bCDCuXYXSM27VxBAZXfjDEYr4eSwh1gnrUaafdw85S66dhD",
  "key10": "5skDoiHqD9GitMw5jgevStVM5Bf5FGkYeUqfHTELJhY2jJSzoMLFwW9FYuJ6XWcbFohP7kYyWP2xn8tR8TUw9beg",
  "key11": "2jTpzrsEqDVmnZxD1VKi5U7v1cAvLKvFJSA1PGkCjdvojhMtQdbAx8icJZ2qov4jFBc2zW2utyqNaJDWuc1x7SVN",
  "key12": "8S5RhCFwukwo43ANN9uKzd4gbWCmrku6WbYHGjK3RyFo2VuD2HhqPFuj95vhiiiGu7fmfv6BU3WXi2ebtfG9PsT",
  "key13": "4U2NDxK8jaxw3nyi5SDLgpNgou8BjWt2QuNnHd5bepYT1jvvoADtcB8AwDYfVuzzvW3gSzcMaFPpZqPVg4Z9Fqwr",
  "key14": "3kRJc8XrcaWTnHtgHiVUt7QcC3qhaDGrv7zGmC4FchXgHkpE188G6iEg4tzYZYoTwPZ6r8LStoL9riN14JwTfdWT",
  "key15": "4hKsSEvJ8KAxABuv6FzFE1PVzyavQRQCDvrTzrxYHCqr6MowyFwDJU5EYk2Jp74SoZfxnTBMZeJsCUSGZPx7vUzL",
  "key16": "3xvLTfUyAawj8EChG1muWwfRTaYC8NJw7iNuzKeServpW3phiBdSi4PABy7oiQMjAtvpiuzL2NFYvUJCmQpTqwte",
  "key17": "4voPJyQQHnqSyC9eJiKkB9Z4CLnzHuQb1ZzKe1fASeT1mtMhDNEAFdwvUxw3awxGQTAWTwFKVxVEBC3K8stWR5Hz",
  "key18": "Tw9pmyxoRQssVr6K9Dqw8VnDNGTFZ2EHtBW3W65QqfXtoAxsHG94ZLi5MbHN4djnak6cqCbrY55RpRrGB7u2FTh",
  "key19": "22YbY8tVgYWqY6xKkdv1vSARseTkoFN5Smz3iUzj9uKtiehTnTFCeZ4hcB1uFho2hVcBD9rbrvSB6tTdRnmAFGhp",
  "key20": "1227nEwyP9gbckW67KLTocLB9uT389xYCKmKgBvKniSiMV11Jg7xwgVJhqFiVf9Sfkn68P4pRAqScVFkkGRvf3Hx",
  "key21": "3ffmd8v3RHnX71x5ZRVhCjcMm2niaVWBaGFNxjMimFZ3mrs8AhuvVUpvZB5Kn5asiAUkdR1pnxFYVpaJJWE3bhky",
  "key22": "2PrsREwa8aotcXCk4io5VHDMQ51FTu8Tp9syBnM2pmwZtj6swvqaFMkjdAnFSahrJ7TnqcqczMYwYPTWhHkeyaps",
  "key23": "3gJYNTob29fgMx4u8szyHDiUZeyRYhRfT1ordzySYf6ZSZbLxzKrLoayAaTV6KkoinNNdtxybDZirn9W44qMc5ro",
  "key24": "4ot4YZQ1cTLvLkYUxFYTjXGKxDiVL3sNJ34f9davhHNgqUNkCT9hmcr28CzWsc8V6T3DiMzFKKZhSM53zVbHJhYz",
  "key25": "3aBXZiYWU6cQAjLTfmwWXry6N8uHiD3T8C1zbtJgKExzAbFQQQQpzHxaaCnBTYtrjHQ7Hk4Tvtaae8RFuJCwvdrt",
  "key26": "3YGbvgRELyjCrveruVasudYwNUYENz4vW81hdJ3N8uTELSvvvXST1FqShPLAa38tuzVog6S2x5wcbZMw8fmZo4v6",
  "key27": "5s8BbmGGPJ57YoRVuARY7u1rd5fj9tSu6jvKBXiA3TDtXLftqzqB7v2raft8xAPcM4q2Nu2CxmWygLsGF7JjWnXJ",
  "key28": "3fAJqTV6CtsN8kTXgmfuw7nBLNwtMD2TC27Kwiydn97vGsjeMzp8wdp7AuSFhNz7G6dP8jysGWfn3fmWExHXb8Zn",
  "key29": "2TaGTN8gE5swrDtTR7LpkfJHbkcbvquzGMZHfGv78ppmvbkG1neSxanFwnmaeriK7si2XMxJHabbj1mkC8yXMgtW",
  "key30": "2gYmTLJzBkpcdBQdcBBngK5nWeW84DkxMDUwZwFVMu4R9GthGVZDS2oatXtg6tLuUJyucVagDc6xGnmGxEpeA5kC",
  "key31": "Hz2z9G7WdRcdPLs7Ltm9pQ3etik6xiyETn47ENWqqRXTmtvV6fYFjVAS6qQmwZD1eykuYSyZzsWFgbz2H3mEax2",
  "key32": "5YHyNuhwwZL6EUc9CyLZEXWqZY89WXRaEo6cuTGFDXeV9CUHJgpTBvwSwhbwRxiy466jZHYvRJgAJnk4F7NrcvZB",
  "key33": "5jn1rAwiohMt5xFmTcDmHLckMtUaAqVKcC4ZU9weP7SpSaaWFTiSwbTBVULBLeH84gbzFFBTcywQ2chyoniw7f2n",
  "key34": "5tuww3YxRZzmHti2URnzw8GJGfu2cM4PKCJ1uDeq9Yj572XMmTaLa9Tfhj8sZVH3idqBCycKycwNGws7afKAVfp3",
  "key35": "53AQ5kKA54X79ABV74ZAmK9zKq25aDeKcSMoYcJMe6yiBo8Q8VXeSGsXGmpZGi8TjEEcTX5bcRDABXXhVD7vPn8H",
  "key36": "5xhyg657XjdFm3UqiYM97eimz6H6sEaQgFgEfgGYVUZg9FpKyGAyrUwFvHGA3e3Lac6JWnGyv3JmsxhoXKCv9Aub",
  "key37": "2WbC5io8A8K8esCyYbqigSeqkBa7T35Kw49vmP9ojKeGu4tYvcbkyQjM2AZAzjm5jhMQYLN9NHdY2onNHQod2Fab",
  "key38": "61u1txxmc1YVa3o68oHgRuJHKLRqZBF5WbFVGG6ACbkAFQfnJXicKity7QP7HenPbC3NrsSU7PmzeWHZtAN5f6iv",
  "key39": "3MdwnkafjHXY2AEvBu4Vmynzcfw91DLJcmcwbJdnEQ55XBNhH5YUPDBtydAYD2ZFyLycwLDMCgR7vbfGDt37cWCP",
  "key40": "uxope9411FsSNiukFaMR2wqk6cYGTMD9LJFmKFP8oSazyaNZPzGM7BCgKgGWe7dBuSQNj32DzxnWmRrGHoDHG5u"
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
