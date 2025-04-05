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
    "4g4eVQxZGnCCveWeT2WB4ZDc2mmKp4QzHqUwhqrsKjRutQQyWrRit1xTeiqtyS1Tndni2GEK76YxxMTN9xXANMqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NH9m2gYXNczCe9gc2B9tM28Z2ifiB6HX1ctNGecTVQyfW4rWLXTcJXCiBnNB6G5gHLtUhk1qJutdKbBvfPDzLih",
  "key1": "5FC1QS1sqDohLYLh5qXfRD3td7jjUpDesadg3kb9RTgcP3endNb49mFXpMcArHoCFeb1ixqJUbAm95jrEWtcRM6V",
  "key2": "3NsGUR4U8L2hcrqoQTtm99vKyid3M6BMTPvKTUB7b4f35rnWdU5XQpE2cQf9MhiWdK9wt6rBxmN9wYmjhWpTj5RK",
  "key3": "2ELvTjRPptJnRUK8ScWZsKEK3tPKmYzFoNb8AJQBVswhfB92e34YVEw9fdATERNuv1jydBQ899j6Rt8mU3GmmA9c",
  "key4": "rom5hwLazYdUBfUuH3mBsaHTZQwr8Vob7VQeK4DC7iRBsgMxWQvhihuXGo6Lfub51VSGSmFScgzRE83GnCgHpVQ",
  "key5": "wnJ5sXXvNizcxF87ySP9g4pWGacaV9MSypXPm59cMgqgesCwArwoCserco4h5VKZkbbT3unH2siQJtpBypCPwz4",
  "key6": "qQR5JsPEzAnpg3GVJJBeRZPumks5XXMvMh2qPeiS5xX7pfBdbZuVo79zz6VGsggXAqcqJz6HbFEcYqJpQnvEXiu",
  "key7": "4e8ggp7ZMqowRSrskrCeei1wTYizz4gLNYcVbaKw1qbnanWBWUsJTemffpKtrPFnEv1bQz7ZPDXeAqL1pvrb9J1t",
  "key8": "PizfkvtNRdWR5JyKjXWnozk1owpBDjjkRuWftyQLbCanaJKT31jrKp4mCcs3a7R6gPpG4mdu7YUDjh1ChRw2F3Y",
  "key9": "5QHaDYxpGNdUPT4m6UQcbdj8GrUrjH1G716rfnqVmEw9HBzfKxzuVayxx1Fx7ySFdkDFzFNGBXXKqfbTY5Begxmq",
  "key10": "36Z7e6qdHBFddDnPE4S2EUY9EhKrwtKq7RemdxyGLJ4xTjQJV6w6bfpwb5qLwFg4iZWfhkfG2xUUV5zSgDp7YAs1",
  "key11": "5JuUbFDo5FxNPKmFuRDoE4cR77kAXvbZujHZxobDkaUH3raMddED3DCY1fGeG2fMQ8kDxozexaPpgBua6fuJ3wXE",
  "key12": "5BygKj7QQMmQs1rvzUiKve675RxohamJEmqnx2oVUxMtym1TLJwv4gqEtGRDuQsSg8UQh5JKgzhZ3nGLqrx2pfU9",
  "key13": "2MJzecDEmjZJtMijmq72vbbQ2n3C1CqoH5xh2TTMx1S2RDkhfbyAorEZsB8HtvC2iXWtg8ZBvpuTHSa4SaxyF7Tz",
  "key14": "Z8i6LMj7zm1kYkUhTCWDPqbEnfBxF3jvG3ELHMLc5ekihgAwwot98EKTeRHqMKeTzRwzyybwsTpN3uU23pf39Ea",
  "key15": "5jbzk6MCL8rfswjfBfNVQZDY6zpeGT74Ha7jwdbixaitsSUV8zv9FHx2vo4QvGfYyw3EAVDRDMZsZ3KgEwVpDBQM",
  "key16": "5bFFtGe3Jygxcy2sKEJdUgVjpQxsMHtfeAaPS5hnkE2wRrrqHuyTTySm1Bk2qH4sZwo8kVwWkC6kTFxEcQymBHrU",
  "key17": "FwhNnEwxjjvZd3gMQgGfwtxFM2uy6atAAbGhdMB4xuTn8SeQ8KWX3LA1tT3VeFHVPJ39N6ffksNyAXE6SYA6NV2",
  "key18": "22TjndtNuJYop76WrNDfaSzJK4snNJoQvtgYxRtP62YSzYsZPCyyhXrYczCeEDAfdeKyuYFe4DeiVUDjbcPkBJ2V",
  "key19": "65H3bkQzWG6BNV4xxX43tu65i747Gpf4TyBTprsd9bcw8xmUDcWuLVE5RXPYmyoFFT8pyPnhnNLAV7YWY3SwdDQM",
  "key20": "c6Y3eT1RzgHcsm2ZAw56DdDWhBjuWteEFNjxa367mLHea5Fo4cfbxJvty2GK3ttK95MwQPZKU1VHjMWdwJBFazk",
  "key21": "5eUg7yq2ovSBkAv9FWMCPdGh7qqzBtBSfokg4vpkvofgqRJYq62JDkhQnCRvcvZGEEPTZWn3KiFxZnWXXmhQmNqB",
  "key22": "3JgENstcRkaQ4Ee8fCH3p4iF4tajWJJj1XME6rM8L6dPL6dfQNeb4vGQaaW6BoL6mMfTpcW2nnERoSrqDiLxZ2xi",
  "key23": "2DjfvgHPv6CpQeN7dktNFxBxRe9A7vT6mzMcKMSskpDm6EMQtNUsqBQ1nLvmn7xWS3ugpfFkhtdZeLko5w5WCFN1",
  "key24": "j6JmthP6AmnmpMuAFZFpcyuGs9e8Xwx8zDE9pGC7SWA9626tck4RuNPHBU91353reUtNzHmW8PhWzceqqzVrZRS",
  "key25": "2u9ugVjUvFuK9MJqowkPV1PDzgM5K5KdRsXwszBfYY629q6GLqEqfKEXcMz9myDw9Q7LmqwqFcAFwGQKj8bTUME8",
  "key26": "57ECMC6YYbqYhFvpJGWKng7vLJ6r33E1jGnwPrTicUwDdyL55pKtQyuVU8KC6HftfPXE9t1PGPddYHwwN1wGVLhL",
  "key27": "24Pih2tMQPR3eMDDE1HnRoSqeJ6uyCwzFY124wVqDUGnB3Qn5ZCftrKRZHD5xnyy5SMRnBKQMSnidQ8dXbqDKbes",
  "key28": "2Uywps9FZSrJZBHwCYJsMCf7RdU2zABn5zmvJuHPqqNw4uRvTEQSJifKw9swAWYR4cvYy8sFa9Ed2xicMs39hkWB",
  "key29": "5hYFCCyeMMfSG3WeSMSQNMLuP87JNuhLrgPP2y3xGN4m4SjXx82vTkijnjL4KPEtY4BRCsKt8ou3Axdf3SBDZLBz",
  "key30": "3H9DiMsVH1QeENiFQg9FM2WE1wi5uTNW2bY18PPtjPXqxpLysn9XPnKjTXGBz4csmfh4SEUFoj9h4Zi6JVyukmQq",
  "key31": "5Kf8H5m3GNkBrmcfutpRaSPa31FtLLifxQLaJ4BKARZUMr3vRcwLkZzd4Ev432DiqqufV3GysWE4bhH82a4PWbSY",
  "key32": "5rZ8pbqgUwkZ3wc2gnop7pSoURiiet5jubiU5h3XtWLhWYuuJ7txd4P6dJEWwWpXWes5UMQH5Q5Ezp4KuKLMuRzA",
  "key33": "9nPpw2Yea8fZaWynkwcViXhM84cnSu2FGkdYLqAkGh5k2mxF1YXv4Qb66Kd5JjkWWeiE1hvFPLZzx1LZp2JoTDz",
  "key34": "3zscxTnGNMJuEptafFot5HBTof1okQDAh3TP6H6cC8St4CEwEQWnExurYXHbZ1ALLNDYc6gU2PJaYwPRRxF3E7oH",
  "key35": "mZ4QRgEGSkeNu6AAPkEwVYTvLcnt7FEqq4BUtw6WqypE8mGKwZphcLcqp3ReZ6cYPEGeEeyMpfsEjNBcNZ2ifpD",
  "key36": "2dEmuEHMNUDFm2KELpbtngJE7uq5yDuuEqoXYan1tyUF3pcfSqVzAKDZXVxvexfjsWqqCjZ36sJLox3Msiu8CH5r",
  "key37": "2amBRkovfBiZx7p96yrVaw4jhRqUdRChQbADwdZWyaXWqNHCammECxgCYv98mZMu9trjQjHg2FxHY1qEmXfG644H",
  "key38": "3HetGKDdYQomAMAT9TX1egescaS5bTzk5fTyjr4inYrnJUkeJuH1kPG31oKYy1vTZiAxuNQBjAWf8UDdy313K97x",
  "key39": "1mAta3b3dUezP5NHvA5TtMx9wDowmDHtCg5rjxvnBPFHFw1UvUuMMprN6Ye8vwsLppYYqm1AQjgTe2GmvY43PJB",
  "key40": "e9DodTDCZs1yzu3cTDmTUQZMRWsaRLatMK5XwW6u26mzPTDGCcWeBUK7Vw8p9AM53Y5izkiNrzVdKgdu2128NDv",
  "key41": "729w5QipTGnGyvBxtJs8z6Kc1Xso7iS3pQigzxpDiJXCxiXnPTxeQ5sv6aXcEAMZFQ3XkZaikT3dmdWkSiGdFpN",
  "key42": "2A6pH7rasAFd5vSfsqjnVJh5SU7dZaJupotpNGwptHrFSy1mxVoE7RwdWrvTqrvQSLrvb8dUMouhtHRv28sRBH9Y",
  "key43": "2vWnsude2czVajDCT2RSuj5F4MyqLyM7Ac1y8eE2G7GDd1qnQehJ29Myje8wHKodfesJDf7U6r4TK4CXgqMqshfs",
  "key44": "3gw5m36HQ5JdEGG8HX5wo2F2mBJvGaJ79UbaFigraSNT89Emq8ALQk5Mi79fquiEGTq172FBarvEyQz2bujgeMAc"
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
