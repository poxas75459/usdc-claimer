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
    "3LtPVY9GtZQdysdz7brt4jSJ47USZefco1QJTF4c2ZeyT6t67kccAcdbrKfVc3VR247BUXQgkAx2QyMY6NW393wq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZfNdFgBpaoqKHDdmGK9yLPXfqn3BNFLji6rUHP4E8iob1F815KZMuHR5VwNWVpj18YePysLNhcm91qCGLUPaVnt",
  "key1": "62TvNJfzsKTutLymC66ah7eqm3ipphMEeBavkS47imRZ8RZCDLeivCR2ksGNLgqGuLMMEys1HVDgdWyCn8tSEJWC",
  "key2": "5EjqQEvMqt3aR15Mg8ByyDbg7GPmB73ieWJ5wX2pXaoy9Su1vjuHUToZGoj97CpwtKKBZFUbAeKS9Tmd52yNtkva",
  "key3": "2wokrzwL5zfM1rAwL2paBNd5pnKC8cjf9v6TbFcjba9fMCh2XFHqAPsv1vMRpD9KybvGaZXUGvkyf4Pq3hbgHfKc",
  "key4": "25a9etvwv6z6zXViGaZMveiiRbGamsP3M4aE5SXjUzwxEhrTJzoBJW7YmEWAcNKQnnRcGeQnBU9C4Rrh6j3hfsZ1",
  "key5": "2pR3nyG3r49Thaf94jiRA42aEwnh5HeMPxuHHdu2rHYgJjjCcU2Pp7HrNnq5S7rabo9ckz2UVsDg9CAecRoWsVam",
  "key6": "2UmzXmyKeiZK7UxESnNNKzA39YxQv2YpEjSczrzsQ96dZ54fXHFqx7Hw5xhXhvorBLkCQXmfAxdzTLchihVDHFK",
  "key7": "5AwRfxkVokMpfgCwn5V5sjhF43qrJCVo6cm9Q3Yqvi9R9mp4UgTLTYifKULpQDCii9QfxAM1HA5DKo7NkrSaLVYN",
  "key8": "4i4rGs6VbrecdvHobMRcPS1mHY76Msen4djTSyQtz8N7ZGQneJYNzXNMNrtt1qAsvcCdYyWHJuet3UoPBBc6w3Kf",
  "key9": "XPP7jFWu9h4mUKtB6YTRxsGdDrFnYhKiK1h5JfPnvJCHanNHVqA9uUcHghjAQy1yxuu8fm33rnTX1VqYDUQvZE5",
  "key10": "5rBUx2JHebtiQDrj3v3ggBiG8gjg3SrJZM6Sjjc5uAf9yjkjVxh6kiju7S92PuFq1SA5jm1JKq6CwXxfKgxM5Yq9",
  "key11": "5GMz3T9kmbX1B2zMx6dgjvUcxKyDpFtyyKzeUauVis6dt11ZLF3k35BAi8daJuTxEBGWfZCRABrHEyXdvnxBn6nP",
  "key12": "G1YLXKkzw7r6K6yoNXA4eyoZCvvszUNeceVfnvdCh6xM5TfsRpoTjVQQ7N8yd5xPgSHvoTFtj2Ji6LNNt1dTKPP",
  "key13": "5u9LSAfLRDNP6LNXYzHrkvv2qXFnDrUGVthy1tHNKdRc6rwfC8ZQt3QQ2NfUNWGAxj8Gv5kW7kw8kW2WFUMip7FP",
  "key14": "3njfM9s668Hj75YdQKmpFkRdSvCus9eGUKEWjjHXBGBAfxak8K1zGaHAoP2kteqoN1PgR1hZVqwogRzA2Goh7wF4",
  "key15": "4NdMJCQrzubir9qb8GtYEhSWz9TfYr1q2SpNxR2sKW2nm6whAtyEHXYEWEMkcWtCeUSipDFZqJW46z9qLgNbL3tu",
  "key16": "36bKqo6Fonwmvse8uTz5rK9hEPwLqWJyHPGBLcua9EMymZnRcNNPHkduBxPpnXHKPvAuyTne2ApLzDKR29Pps78o",
  "key17": "5MibdgKQMW1hh5uv1uen4sKVmfSKDLxYMxbqGgx3C4SVQHVTTrjcBDmRiWGg423xLXJ26BxLNbobLzj867LNLpZw",
  "key18": "aa2c5XHfEHEgfuf4asRM6F852dzqZz3m4i3XdFexeWk3Gd3bSWFAf6GYhXdQuEDXYhHLBAfn9VJAf32ZxHwLFSN",
  "key19": "P2146NMMVZgWvNa9xaUMwuVSjw5auMvWuYwzPpVAUJ3CduzwAaAf8c4Uaub4rYHyCQcdf8MgCcsnDAg2MU15n6R",
  "key20": "3LvmjVvSJ7Yr7xqpKSk4Asp3htURMSv8aWpB4aDfukJVMpcpe9N3hc2gjeWfzKCVTSy1YCmVsemQMFr9vXMY3bpm",
  "key21": "24MmatE3w1NiEad4rMMFKbXEK3xnFaSSAmbjBzELmi3D16EvRBBxxdemcWvXvaTjDNAPqz3LUyoyHTQfFN4MjFcv",
  "key22": "4LfJehh2CN5Nh7AbukyuK7TQPnsAA5KYev7XtGyWdH7hcNZSSuRZK6c8KX2ewqVctNDyZh4mRGAMXnicmsXRx5sp",
  "key23": "3WEtxvjQ96KhmiXXqaXKLd8sPStjeksxin6gRdbfU5LVrDkhVD1m3WbhM695WhX7ahFPtJ3T5CoZmkGh2XbbJ4tv",
  "key24": "2GYKTCgJ8gPavRxM4j46wdT55NRsZTT58vKNfjK9EQzAEStyJsTNQSCuzfCGkhV7qvSD8cCLWKhHDZ58ihCHRQ9h",
  "key25": "5tXHh71zHoTKFJJxkWirox1BnhMFthWYnG21Sqhk8zFNZzS6VK6mMrXsqWgEGQBJBp26Xc217h2zCyMKsQToE36G",
  "key26": "3bS3dm3aK6es7N2uKiesc5rzHCrUtDivK15P1RxSBxBk5cYDsbrfxPrVJr9chKTMA1N6evFDMLgjSTUgwAZz3KC5",
  "key27": "2mA3DM3HP9cXxTZf7qDtZZyNduB7NQdBWEQ3ncNcFYCo5FecofSLn4f8Ljh94ztGL4oQDmZaRug8UKA13jwAN13u",
  "key28": "3GW3RRdQWutc3EJF9Uxyrd8GsPufPzK4NYcTkdHRkfJzPT6n58p26HT8WMBzYYH3adpE47P8BL6zxoB3JdpvKTaL",
  "key29": "3oNDfuC4aTKWJMsBQPp3sCz4T1ppnAKpFghZHPEGT982qpcSmJ2KRyKZLYgGwY6kLWXd9ydVSp1v73VuyoC25dUw",
  "key30": "RVTnVPL5jhi4CnE5z7d8A3uLrRwjGPS6fbxEA33u5TsjHyrGZSyQy1h5Uu6F1T7LmZraoGpbNugaae1onfW2UBi",
  "key31": "4kUk48PHLCbopV7fz2ZGuSXD3xVKoN4HespMp13UQPrrc7GPPa6pAfG2QJNDbE1XihZuZCnftmT1ZUqhVrUXxYQw",
  "key32": "3i4HKPt43iRPAyjeGw2PxF8X7cKTULyh5yduk1tTeW6Xpdr6dtyibXnTtY4DP2htkoDhNvmDc4HBvXzkQryk4tLM",
  "key33": "gCddxGTVxwo4jLHpoQay1KCBVGZKbg9teTV9eVAjsqfkpbHHt5G8Leh7oPMi2iinKDvdzBce6bGwK279CKUJcqc",
  "key34": "DmfgYpu4ENmGsy4wXHcRYw261jgkGurw6CNLGAqreuCZ1UTAoeet9uVRSy45Tubx9Tf7cD5LQgEjCGpsCnkmc3n",
  "key35": "5VrzKSRhF1fw12yHBWUfjDnoB8BqzmiXnaSZ5pdajochKkK5FAYMpiRzegWxximEt2t9YHyb2Va7RvxUJxAi5CDr"
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
