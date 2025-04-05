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
    "3UtBymD6kQvk2srKfQRgzCNobU9DVXPe2JGQBQu6GxRpJNga86JLhsibGqR8VueFRrLY5dQJ9Jd8U5yqGFgXgVPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ouSMffvi1PZPyA2zMv92Lp823w1hPwsBusVuDABD4DmSCnaahQUgsYE7HT5FwoYiTnnHU39mhyitFDXsB5wo1p4",
  "key1": "53jvPY8uhtmtL1gYGPLFknvGpK9GLwG7E9dwmSz711wEx7JGVMEd2ohS8vw2mFxWtBXMXDrz9m2VXhgg6z5Ye4CU",
  "key2": "4AnKjyn5nsJcC61v6943EnYc16jnN9MuPDu7dKkMNTLFdQ7ykApLxc4EhXmmcavwxRJZGg1fhXBpwzT77uWGSZyW",
  "key3": "661LD4Z5uqycky2Pw4ENb2Wkf2mRv1NJzXdWTFjxN85GEEcbTEsixMBFZU7oqUTRPi31SV73hbNhFS8s4iYYfSXk",
  "key4": "58st8mRSYshKek6YRaGrQgXwHqPQiYPdsWnh5A8dcA7crfptTMe3wQp7ZVJLmuHoHGZqXnZQ48zAvBe24HCFuHFr",
  "key5": "NDVTbHiBynN8NnfJoegoxDrpq338QDkfgyfzZdEeEiGwb39zSi8N1QG1qTxiHenVBL3mmzEvXGtsPtrhHg8QUsn",
  "key6": "3Rz7RB66ZNjARgaWG4qLDxQj2AH5YzrgF6paNL3zT9pgjjZqARmrH19U56pZV8qjmFmeCG7HURABUiu49SB9tWc4",
  "key7": "2GECu8fYPBPGzmMSapLAGrf8oEqH6uE4ioWgYrJzn9XCU3dssk3T1vT7gAmYskx2374oM71vDJHLGaZ3TEDAZDfX",
  "key8": "3bTfyFxXo4PFJFQ2wmnMd7QBEXv4GgLQ3BGgRbVZqTQB5bGKXV9NB1VjL4gjbjURkZC8anQ643UyK3QyVpJCBbF8",
  "key9": "5kL9zwFJPCRT2MXr2ULFPv9vm7BToQh9xDBi3PbsnZmBv7EMF7sGWnZtf1BBwuLy7jYEF7XUqVLxrrWXYZxHw4tr",
  "key10": "3faLe8psBDvcDt9o8eYaFU9g2Ybwhvs7aDQkgFeeMFJQY2NuQ45zCNFgthM8PTtgmr7Rs6fXH8cXZDizjHKyTpT3",
  "key11": "4nZ37SbUYLFeE76Ls1oi5XoNa8xaprRpjZmWgWS3V4VCaPwc2WcJ37iUdW3Nrgewx8fnneUA7MFddaW1q46AGDdX",
  "key12": "3kE4SvMws1YVdmsFptmM3ufFHf3hdRmkEUxYSumqMmRTGSBhfjySvQw58Ng9NSo3YRkdhiradMsKhVaZcGeXXFJ",
  "key13": "5FQZtnFUvFd1pFoZWD6DYZxwfTQscbjYXfy2TQz6tx9ehARcgrivaE89LNzw5LVpAoVSdxjVv9pt3CjDR6odoxTC",
  "key14": "pdXjQPHD885jV4RYc9ZBKp3eTHsyRF9mgCwCXPfHvBV6XWwaQiJcX65prPy6PWGVY2P96vzvrfRAQqBzSXYMU4u",
  "key15": "3wHYAbXv2KLYYcLpbaKMYyHtQs3dGvYgtggiRewfjrX6eqKN8rUh8QoEewpet4aoAFv6agaCAzJW8LPJnTRy9eb9",
  "key16": "3r2qBFhRFLWAQZqsemoUQMB8pYt6PEErKxDn3MSLcBwEx2pJ4GBJDL1F96TqenAdbq5d6YEiyJudirEY4n2qSkDG",
  "key17": "3hMW8dLuVC4QPBjxmrH2Q8gsXJhQKCfKMgKBzapRVHHAqgwyNLCV7W3Krs7UejyV5KGePyUPBoWPGDwrTHf3YLcG",
  "key18": "5vAXcromNQCwfXtmLvo7raQsTwNCj4WnFLFWuujcGwwtP3773TprfSCpJQc87vdhS1jjpP6TETc8yUEqfGLmL4u",
  "key19": "oQL6oJn1LCjuKdbTsxxbN3CB8PP1WMabm5vVBf5yf53qL4VSPNwxioJ3KqyykG2fzHVkaERRuRJCkoVxRYQ4mXw",
  "key20": "MQqFwPeLRA64yD6wn9yPZAY5SCxvoxge2i7Q2vbAYaztasoAjCYejKzWBUGcB7cuAChfGngoBQDAZMhjFYFjaHY",
  "key21": "4tZvaLFup4x1VLKwoXB7CXmNhpUdwPggZXH66K44yPKcgvHGphq4HG4K8rueyNCzsGchNcJvQyLJsE7pyyxcftQo",
  "key22": "jbpTCGvFU9Ja6JRpcbGTdaxVgHpfbMpekkn7cBnUvRD696wYVmzDoW3JKqwUPci56t8AuiEpNUPee42TdSVUsWG",
  "key23": "AaK2XAqbSWj2iiGR8fkA1d6vWKJ1wRQHT3BG9Tf2PmDBc7JEa3n58izeoR9jbmAUzovfZiGDHGxjKrv6YZVrLe1",
  "key24": "2dUMcUHPdB6WLcnGy4Ys6kSLSwKaK3pR2YX2w4hPX3v98wtB5ipkEwQDBFsuL6Bw9JNZte826NZhi84dnfn1Jr55",
  "key25": "39y4hnxikc2PauicE6ZMHE2RpX8QZfSn4GEWKdL2J8X5u7EGyk6s2dnG9nowwTBr78DexXAu2DpYjpKjPDwEuWx5",
  "key26": "2a7GAkuF2uPitxyMoT4js5Qy47zuSFEMsKFTbYS8ALj4hKdvAckHsfx8g16FadPUmbVRmt4YrN8a9SuqqRM3GDZm",
  "key27": "q7nCRs9e1ZV857QEuuDcyb91WhDVhY3Go59GKipVxH2MPXg2JUmDpxYKDyK9NvHKkAT5bdogFHvPR6cuJ4eYoKW",
  "key28": "4gL8Zvrt8CbBKvSxunomoeQ3Dr3bwiTz5h2H3AX25X7NJKrfpbeLLq8umw8GfJVC1X1jBea6HybDgbUzuBLFLBC8",
  "key29": "5SfvaCp5KoTk7Widr9Hd3KGb9QsYTFCkA7LSGoAJjoNT493fjNfSHjLNakX7rTe3eRjMk5qtQFxnQWA2AvCKwfvY",
  "key30": "27T18H5HN9hXksPEabsEMYs7iQYBd6Nd39DMB8stHbJfsjPzmxV1bEhdwHoBkZti6RsTGGg5aQYz977qVSZGLJZg",
  "key31": "3AUsByM6PeZuaA1jH7vfBVFU58LTeVQCocAFMPAf4wk1BXzm87ofc7NisJq86WxVBNLcinmcRZSQvdDB9qJCU9fe",
  "key32": "4MCHyKnKtuAdKZH5n81xZ38aYEpUH1BTDG3PN6FaxqquSMPRxoQ3z8WEJ7hfo9sPqVhgxo5Bnpy5sLsgSmBBX1FG",
  "key33": "52YurmA57wrPz9Zqxbg7X7boPZPrd5BitYrX5tMLBCwMSXLAnZK9DxsommzRWoBfSUnBXjdKhBkLrBQsgEA4r31V",
  "key34": "qhNrKTr2BPkXCh9DFZxWops2bxGtSmMge5WJoVdPk3cbswQtrQ62sZWqS8y3EmVmpPvXRGgtSXSdH42Rb4WkdnP",
  "key35": "4upGbkhAow7jrBjnU796greykrvQ21Rz2iPQVgmg6oLvcNL3MymdDaZvx8GpMiDcpzAQopuKLy8D73ijSwgF13LL",
  "key36": "3QHSL9RNnSETKqc1fa17N1MZmaQjcmTdLBnfvUP1Jp2U4Yt3v33UNw8d4TF2A9WqSXoVQQUNrbQxZTxSuvS4mot8",
  "key37": "2UmQZeFc52N7o7iKLrUTYvJYxgUQnAawmJUayjjCuZK1Jb6BpAhfgoVY1cFGSi2N53RW86oieZiCUF8oLwsffsCo",
  "key38": "2KJpq6REp1GpKoSSuBsfBLhNBC2k9UzKHK2YzNRHQmDT81uU74McmRYCjWbSwxzp3zS1Ftv2KtWoPbYA1xJCBaWd",
  "key39": "BfCP8sYtVwoXfZZkpBwV8zbsqbvdtrs3q9X1QESJ77fxZ1tKrAT8QxyRX2gvtpfUhnFpPYXcBdpjMGJuHhULDwJ",
  "key40": "oQNQB3fkidPMGa5ffioKxoYfxDHq8v5w8znNBAHurRhyK7So2R3eywciYnSZ1rG1k2xwXrSQK2P5NNQktHV1UM5",
  "key41": "4QEbdYFtnqSiPjLZoMYsF3U87RXzzMWkPFqxkTMtXtzecB8Zh2eQL81w5C4Uk1jrbiLBXcCtJ9ojvXuxq4vMKVc2",
  "key42": "2oXgDDcUjMf4rM7cn6wAUsaynuLcwcYEQky79qPFpZMBVL1tVCPkPZAz8kB7ZsXVkhwqnw4yJHFyU7iPhju7jqHy",
  "key43": "3TuKzooyibpTBF3Ab29SWJrEX9sKeH81qenvxMH3zfPFtoVwWKMdty1u8wEKCJzeD9tz1g6FRtHhtMdMFYPTi9gx",
  "key44": "eySxWVAFqd7KaG6ncFqcTNwv7RAmzxTeFBwEiPAmSJHZnBi9gyoXmHptcS3mDf7SonFc93FN9j5LKXqyDpXWijH"
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
