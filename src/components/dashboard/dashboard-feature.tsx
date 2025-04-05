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
    "3q58dovEkBVwrbKpgSdvc6khd1d3FsNFkEHH1WuYGR7hEWV7bUKPfCFWbxyZAyFw7az7CdnDpTkuAataBGTbMAbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39C9pWvL2zgAb9YaATHsaXVc3KMPHifWDJ48CTyvYXTmF3PZsvckTAszXwgKFbnAefAPobRpxsg7JxyvwqNFj8i7",
  "key1": "3NfUSuxLSpzcz6hbeomvtRJv5yvhixrdS9TWCjiN1uFJxZZhgwvpJhoFStYbEX8oFVQ1ZswyapRx2wH2wpjpUWD7",
  "key2": "63VTJB8mqgUnidQNNzFERpxuZ7GEqfBijfVzKJQLXGUX9CRo1jyqDta98G1K7TnU9v3wSKRtA6BY5JwCoz5w4HWT",
  "key3": "BsV5T9MPGDryoTsW2Fr6CxJY8VCZsM4k1UWTEGRHVLQs3iBKowr7oSMVwoEsFVeRhmSgvQGmFqWycaNe7jZ4vB6",
  "key4": "26V3bzZPEntVgdsYb3g1ihKesr4P7BH9ATrhnGtpBF9EKVCAUWzNVaJweQrjxzETs6RJpJReZJvg2y7MzAgLPh1Y",
  "key5": "LAnUMYuNAfz7Qj99VFbLskpxqAYcfDnBqTuEUpwfWNeW7FLvfUZCCJcNPvifC2BKGPeVEgeTgQ4XjPZbkJYpU5k",
  "key6": "S7CmqG88qu3bq37gpAMuQHraTygjSkxbrCphNLYke8Lq1RbEJVuUSnnEarkGVCu8LSTTgxi3QJWVDibFY7VES2f",
  "key7": "2rdT6zg6TSein6VbGe5NWs3qo8w4C2drMKqgpcgBMLUTNKjpK22Prz47tqEfK9TDzGRUNe7BFrDANb5ZpnikK9rY",
  "key8": "3C9GheB8Sbro6Uz4nh5pShHuGiGBhYAYc13SGbbY7hfhiqi8RGu6b22hg9NW6gFUArmqHS7iZMoWSvYpJxiCm9pb",
  "key9": "4ohEcc1pEnJoXgEEQwa76nntxsBUDwhCfwDcmHoWL81cFHtvRrfrEq7nc3MvKr6ietityKZ4FMSgL32D5FnbRQy3",
  "key10": "2mYFuS7NMB3MAAoyEMxFKW4KSg89Ry1bujh2fU1j4oce66d6B6BmNcgsfS8jrMXcj5ppLQK1GtpwxJYmofUgKWbe",
  "key11": "3za6pKntcpncYjJRcGoPM2B48wEi5VAwbFWwj4vfjDiic5wrWz49Vza5RubH4YVrf2BtdpzEEgTnaBi2MnhCGH11",
  "key12": "wxyijGThXAeJfBdSDvTXzKW7oVdYRio2xEEmUmaQMm9f3w9nGcuTfrazpB2mV5a7SShi8iNNzYTSWymhZEkUvwT",
  "key13": "C8T1UR9G8qq4fxoxTY9RtSmcCEFtGND9zSEiJ42Qn3drtbGfthYFDDu1u4iiQteapYVpr7Ha9ezsMAR1kwsU9eL",
  "key14": "2Bkw3Q1nLmMZWdh7ubJxj9UDYCgz39D2HgzYomvg77LbAHX2vjSKfXmgiy58ccCXzXKozBqQpBvUKcWdsjLZf1eq",
  "key15": "4R7eCYmFarFirHyTN2QdFWdpyBMSn9WSASGYEmNw2oUcGETHU3BFYsvKErJy4jyC3CWBbG5wHiAjwNduaubXfp4o",
  "key16": "263BYsBsWdwxa5T2v95P9MdXgiyfN73UswLnzRQNLgGTeKxLZLApAefo4qYpTyn2axrXZBoizr66VavQL5BaadTz",
  "key17": "3BNcyhnzckpQeaLQHsUAxBBEohB67u97oWMSHRYiB326CodjaQM4qNideXcskzXM44w2a5GzVhxyBeSuzNmVbzX6",
  "key18": "5LUR1vRkGx972ikj8uakUE4JzU6Nqj9pJcYqWWgxuX5hdC268qm4CyefRtZPyFxTXwAXHtvGUdkdjfTDbiNg1ANw",
  "key19": "3GuvEwTMetJgMFwFM2yszy5hh8bApR7u5qTtTxcC4mDQcUd4uAn49AmVrW9wWWixL6H93jkyBAy89KMUD3s37tF4",
  "key20": "4eHNAe3Nm8b68Urbw6oBYseivhNSLChXUhi3vdeBNiRRGw5q7tWW4z2HH1oCMTEaGWXpGwXKXYpePVXemg6qvKGU",
  "key21": "24PZi964aNYtus45tZsL1ihMUWsbEtmedowjeYNha4USvGEzogbLPhdBaRRcwBRsJh9xXnEinV5drJ9dzXsenVLr",
  "key22": "4iuyAK5omxiFmuVJHTEcqm4EahsDWVhaz7p6pVT4NDazqb51x9NYKqqmCjvSTgkgy67ycn4tZ8oaP4J3a2MEYhJq",
  "key23": "5uaDSz3drjVrBxWhqtafcDVomagXghVTt1RU7fz9BR3hYAjWWn82aT6bor17djmHGdgdairfVVCqAjM2oi4hBSSZ",
  "key24": "5MTA4PymHnwbgHJhupmYgZVaEox9hy391uSrt2vUPpVhPisBVdPqKFCXwzsRQXYWcyAWruvXHK3JVqpzj2RfDDgo"
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
