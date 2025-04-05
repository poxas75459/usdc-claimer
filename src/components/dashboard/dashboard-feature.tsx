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
    "5mKQiHS39huB2S8y3TFXpMGMriRZMr6SYXw65hZbc5C4U1F1feyNqQZ8qTtktmpPHHtsp4cbpQsCXwS3i5uVLjNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25tJzbxsc8aMgRGQ7ged81b1uQVtZsSLwxoZXGsnUiX3UaTXLAd5W6oC5TnBfWp9xo7kkuZhb9FQNpLBXh3T1oog",
  "key1": "3KsdnWCw55W27zkr2YSPFrR9bnWeBuhcZmGmFP7P4JWTt4twPBvvdeUPdvkTSDGLjGrAWvRRg96GLJ3xdYhDet7g",
  "key2": "2dXbRVGd9GWojPVZBTV1BKjSYF979uqa2cxnfH14DdjXftSkhaHYd3T9Za4mQVGBH3pY4BuYxs6H5Pey2GYYQz7w",
  "key3": "61tCQcTkrKBtwWcJHY7EJfULmmmfor2qx1GkQGmuCQmBmVRcg4Go12ZKPjJKqvZyLAXbbNMf1vtw8ey2fzAoxbkr",
  "key4": "3ZUrTjiaoZR5EWvGbZdUPrGKZa94cENfA3AndgZuZrcYZYfbXQrQRQmLSLGDvXRDGngu6VE5bs6u8Wp8j73pPHRZ",
  "key5": "3jdRhwupbhH2xEFLK8XfQJ16Cr1fzyhwbqHBAGn7CaWnM8gY2eJ7rnXHrWF5nyiXde8VRSSoSkv9iTgwNDsH66QJ",
  "key6": "gPYCL6ZxBoQ269YXTN7Fe9s8t83nZkyQBAnqUdxvjnCAZToE1P1hd6VpoXeaPYYnHR3mGfT4Zbd7N3Jr4XaAuyM",
  "key7": "45BLvprifapNMU3S2ZWxJfGnGRkrgksZTo7qCssLJ6d2jV8HuCCewVqix1CcLSHEzZA31sutV4mpKSJ7KocJU3hV",
  "key8": "3VuHu4rS5PTGDA5Y4ogQrJstMJh3yR7JACmWgSDqv2rhWC2qgK2CPbKPaeH4GGToS6RvTfDJ1suLsggMr1YPvvjb",
  "key9": "4MdUTxXy4jMghYXGZcghoKRNBH6AvcqURm4veprftDHx1SrLXHADgisiPy5tcPQg9KHuDBuw4peVaf7N69LnyxKQ",
  "key10": "4FcM6dP1YhRCfTz2U2tLTtLCPsQanE4jtrs2f8s3ywhZDVuV8u3LqvD4QBQm1BEVBQWPuaKvVr4GhZiRgzVy1BBM",
  "key11": "52HSpCSFc2owaqiawZ7Nz9Qeybrv3SJtRtnSY8NxHpz28StYJWEQof5EGnjpHKYdBUUcFMBJhtdmrC8ZAzqS4uYQ",
  "key12": "3PjQW273dZACpAd9bRLoNYrkvtTGCNw7vmfmq1M5DNHygxXtHKzSj1yQtsyGXveHoK58bujzmgJKH5MGWaUSj3oJ",
  "key13": "5HNetiM7fTXr521j3mRcxjSA829vv6ZgDxLG6TD83N6e4HvkWSN6RKrRCCwhEeZXxSrPTnpgLvaVoAi4Egw3iFjT",
  "key14": "15BNyyKRa3LqDEZVbfyzEDRxGRyitSodFqWd6wAjpVj5FB8z4K5Kx9CjxH17AzLDLbpKzoP7arc2vcnTvumaCrd",
  "key15": "4ZQQjhyeZUTXce6v9ugakXQs2foZgHL3466h8y9dT4VcTMo8J7KStipYZ6hr9Hst1xRfkHoSgTj7mA7n31pSwzgc",
  "key16": "627eWoY4JQyRqjPmcvSQqwZqBWWW3CLCuKy6EbyTTQ2ArsaqfECLrNxfZNkRZFZ6Z4ktRnPqBZnkmvtXWxbDXxS9",
  "key17": "t4EkC9Ax3Fi4YuNtj1NbMJPTXaP2LDSLMKu72QQDRD347epdFF34dcokQX5ykBMtxcuXUsWRSy1VHHCi2o7PUKC",
  "key18": "5X4hjFx1crab9bMvFAcK54t3py9q5gMS5A5gniTtbsrdYYt7DL7HHXHUhSmG49Syotw7iSpDXSdo8763HxjQiboM",
  "key19": "2cKTm3jDcRcBQjkcmqV9oQPEJ4DzqTZQHAGbZ2i9U7xyiABNGxD2xV9UNrhyL7AQNgqciNmBRsDYkZkod4QPkz7c",
  "key20": "j6FfAJ84zwAAMnanniq6HoZJnBPtoh2i1ZVPZ8jUAnaAp7yr5pdQrpr9QGUKg2SnDq6WRennVAgUurTUmu5ABUA",
  "key21": "42akxFxUd98mbVQtv7rM2CMe17KwWsPYenaHSrNPbSfGF8FMgLMrtzWxVXqNfDgT9tD1unzk5fqSuhix4t9w4hPg",
  "key22": "8QUpVBHeKmadFfjpUzQWMCEZsvDQZCpkRYbUop5rmP5ghBdkfDGXH41mM5t6FfEsBm6wTztNbjNiE2tF4yyKsDW",
  "key23": "JVgvSAshVRnL49mUEy6NfF2BTKyagnzCE6NgwiSR8YXEc5ArgDKqYcJvmAjCVani85W2giQqCX77DkTJCCJFMWF",
  "key24": "2pTAGxk5A1MVgraN5CwJjY45FNfN7zDoQHe9EZdos3dy945JvnBjq1mwPP1ZRcAuRab9NcZn6ZRtyFAcqzovzTKN",
  "key25": "YTyzsV9ikFAuXWpHmgk21jNzTMLNwAm6TuWt67kMLHvaN4xtakq1xy4kNb8WbJCMhtGXJCJ4LDkQWLfGW1bQvPd",
  "key26": "4KYdY6GiwsWvgswE6iiP7DMFUZJMZPfJHKkTitxw39cLCsqy6qXj3i3o7Q111ngDy4hd4Nmza3EzVUF1fMp7XoCK",
  "key27": "28udjTWK9A59phLqMfYaacszt9T6TKAbBnUBJ6WX6QLcC2uUDKk5jsehxoTSRZTYCYn637LTajhGS87PzvUky1Yu",
  "key28": "2tyQx9p87YwFiPeqRZKG46qpdoRjBR6bywwBJZqubZ1ngQjftdnChwsxyqEHoQZHymaRnFJdqpGnujENxruKMAZs",
  "key29": "3Cng4JCzi8VKgj8khBbmkHg92J4aDBazf8sm4nhdEALGdeymWpon4YgWiriV1q3cYF9D7pWmtBiG6TWEQmhgSuSa",
  "key30": "4GaiBvfniSost18fsTAjfbBdBiW5sjNihWeQBYe9ces6p4ccMrMMGdAyQEMQCCnJ9KmNTrTNfgJvAumwRY7r1S9h",
  "key31": "nAYkhqzeiSBP7TxWdz4vcWKSBvamB5f9hpEUb1N5MCTyTMPsbmegTrb4uApsXsxvgovERjfW8SVkt5rnX3JdpSj",
  "key32": "2xQPui7qoQC1s4kUaSWU1Lvq7yrHawErnf9yrF7u6H4TvMR67dhdW2n8YmJaaMqVCHoaRTRohUPMZ6P8RMmuzcLR",
  "key33": "3yGuUJdUR7DJk7Y7EscPS3xiCXpNEXuRcKtMN6q1LUsmmDfhco1vBDyNdU5KNo38GgvNJcWpMFndmoaUQ9inRfXk",
  "key34": "3ykMbrGrDVDbUxGxoikvWfxrVavY4YDH8YWxneV69BQGt9TUWmGRb3dJC1trrVBh2siBeXy6bmoo5Bak5L1iXwKs",
  "key35": "2Q5k55YbjWtrPAtm1Te4cQ6JFQFJ9TRSg8Z5TNXifoxxYEVaDx9dPGFYrteUypuL1TVFuvaw2iSte6o8hiwcqrKC",
  "key36": "4WKw6Rcg8JK3n1PHpayVKkJzSNAXLobEW9Y8povwXJkrun1FTya7hq1rExrV9xhzNff9BSxcQvuVZ4AAwnv5VKDy",
  "key37": "2TA2jFjhxsQv5qnvanPG2FxBMQvpaa2dUNvmLChhbWwVvpSZbiL9stKDgbRTME45RVLj5gM4Te2WN9PAjFkASb9z",
  "key38": "Md3n2ifzvUShN8HFiSQaRVvAsxo9SD91aVKd5Yg5EWnH9EwcriGkCjaALgB9nJnimAEUL1wNvL1ihiK9dagLkt2",
  "key39": "3n5UCHgMrPPUMs17YLMTq9cKWRoCtWAvq99F3rkcgi7XDpUZXqCmUomie252vi4QgZRECCVNaSTH42C6kfPAu8tE"
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
