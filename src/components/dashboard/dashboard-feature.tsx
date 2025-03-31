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
    "4EinKXPQ1K2NbdjmQmFG2u5RsWDab1k8YD6Shof2915g9xYoHDfzHqrAbX7oNfKw5bEfg67TW3aeHp36D7NHtWWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kLsmJHLeRgihzh43GuUiHAHv2xvWEQmynpziGoEQQy4LDXwPzEAGzVi4rFyaMqyNAkPcvVfySJMybrUZ3HG31Hw",
  "key1": "4ykEFume1PkhErPXLYsv9YwV8KrkoAcKgT9J6RNc9wnxTSiSzWPjNG6tr1MfYQfFEDirtXfEy5u3AUB4QXEuzkTy",
  "key2": "2xvoVD1qaH1nvsRD5DzYnbVBnL474THcWixMvdCbnbNyqQFAonN8XfNvcm4y4hboXjVyif8D8V6dbe3aJuAQR6KE",
  "key3": "2yL7qwnEfgyCFmgtfjNQboCbb898xsNvBMnfY7TgAsStu17k46jqyURrDtWozUphus9XRCwwdSmaQz9kUeo9ogM7",
  "key4": "mcyi1PnhqKuiYVjtsvqiej2yLKcFsL9XevBcEW9GJXtrRctZVmg4m5PfW5nWsQvqJL9SarX4XVEEsPXT41xZRft",
  "key5": "51G41zDAWq4MgKDjCrRoUmoH4NAHSnC9ergSTpQVzVqb3FffYdaWfisKaUhTPb62PbjrHSWmLmZSCAipHr2ktb4e",
  "key6": "FhTq1ejNZv1JphziKvZPW7BAqFuX8wzWgywUsNKHaWCSvGMwEokSBz2FoupziiGLReQnm2r4Sc3KqbfwNh3jgPm",
  "key7": "3mfN7NvA8aViHYEBu5fUkh12QwE31CyVgg4VWa45RKTPBvSRVDpiiXqYFZRhk63aWTdfFsRWACGNTRQYZtS8ZKh9",
  "key8": "5yP6pbABk4SGrtAw9bQiDZsW2YrUJ8kNRVXeLRya2TQjTWX9wNbU4idpdg4NAnm19ZzuScX9b261SZ8xdxSPoTXZ",
  "key9": "s3c9cQRrRuynKgy7RjcqkPDnB9XDBBfucJXAmiR1gbWaAe6Ek6mhZPsHNk26KVnmqXEZGXmx2dngFhdqjV3qBdR",
  "key10": "28CMAWnn2n8eDdnGofZyxomMXntdmtkLfyw8FwqwXn3Km2TkK6czEsq5crsMSVaNwHkkYyjzVa9Nc957YxbG589c",
  "key11": "4eo61T1fXKVs5USNiGp1PpFPsYdi5W6KaMpZxe6eTA6dRR8ZDRFZJ9BUfytrxCNChcftyWW5mZXuxhWZe4B3AbfB",
  "key12": "4R9R1NjKNgZJAbi72ZKvBceATrXvpmkdMDqTPeimVZsHAcpG8gDz95CiGvsKDQp3PwCfqSkPJM5rgcnssARQw2cJ",
  "key13": "4qQeAGNuZFdLh9QQAm9LtMF1fgAMmhhoQvtJYyknQdadm2XCXd6HiUwgCtyAeekAGwU8G7PnXiuu4oKQqpLxZEqP",
  "key14": "4N26AffCQpZqJbYkqjJhwravJzVcvj4YdT3z7mUNw9o3PdnF5aJMR14jQDpNB9Vys8i8hDmhfpDKBZGJ9Q8tG8KX",
  "key15": "64yVC3buBNibU4dKzGe2rQXwCZLKsDUsJy8UMiZowJ4yoVEs8pBJEwt7kN3uS8GSeg9Wri68wNZfctAvYrQoWqLY",
  "key16": "66WtjimJX2VJBtFdMVjdTpqLhbWBjFeZVsWHMzvGSizY4G1sjEZU5GLC2K6Q3HMqDyMpGfbtLEuqbfFumsSZYB2g",
  "key17": "57ymQyFKDeUJ3XGNXAMYfniUscxSG4GnrYcLz3AiHye9aNNyhvM2AqgG5cVWq3zoWU3Sr6KmRmBtcRbqazcL6ULW",
  "key18": "3vnwfMnxA7Mg26S3x47eJQiVMsaoevrxiWJTvbnVA5PM2gWEPGUXTJsf64UehZVZMEG2XtePp4NM8Vpx1YRsFobW",
  "key19": "ATDgqPUrHiEaRjwM6rbcwy4L9hqNPHZMgQD54MVZiKBppjPqaoXNuqV1E7EWHvow6MGa9tE7MG3LSUKQqs6WLvs",
  "key20": "RqLCN9r9Q8n9fNthtZwB7BbxrmPdmJmexjDKVii8BKPpgUd7QGMKJjJPxxnU6sCd8Naa2cKbEikHetW1ByLKsdt",
  "key21": "5KSshjzphMFXSKH4T5ZWJQH8ps7E11pSxVsXq3BDujWGPPd7uxUS6x2Bi4Bzv2W5GQLhiFw5j92YFgu52iMW7WKg",
  "key22": "4P6EsriMtk4sK8P65ET6JKTw7463C6NVR28zauTjND4LVf179eEao3qA9vJDe6LSWRkEQT9ojUTpiuFYHv6HgAMh",
  "key23": "5nSwftNaLVWjkfoZz1xiFgyHEwaoetsH8gnXMSo8VgSvZ5gAxsV77db2MpEQEh8GYx6ck5D7Rudbok2PckPd59cG",
  "key24": "5wrcepqxfkb88yXzUaVFuGpx9yVUtozwXCvJfu4k5urw4Jt2ykoXuLqUD1viDYWRKcAmQj1y66sUqGrWuXBkFG5g",
  "key25": "4V2ZXrXt1zvLkADUX5tBhokDL1aMW1KcZatTPk7yx7EH83y9c7V7PU9RLV7KQvncNT18QDQjL9wa8yzKRcMHsJ1e",
  "key26": "hWCEeLtBBh2iMy5uo1uuawkS2jUJFNKpNAXbxfahyxu4PavaUhEtEnwbtkgEcKqva47ZLEjHDMDnGmR8bq6L2TC",
  "key27": "5d9HTePrVtvx3bTdKzsueD86bb7VuAuGkE2GgL7LcuZGQFVLEw2TSgJw1odWfWbkunRZSv5ydLNSDYdr9CuAn8rd",
  "key28": "3jPVAci6Yc8ym4Z24rn2PHbp5s3Av638WvKb8yQ9nZHUj2F3oTmR2h2mfFTVeCMmg74rSV6XhbBbmJ79hPg8b6qe",
  "key29": "3a2rQGx3a2W8H6Wvf5SyzYiNqh1uMYdcfCD8JPZf5Mz1F8wov6E1Di5D2uHSw1DpiAJDassXAYdWnz2HGPByns9j",
  "key30": "5j6xyC2Dv9C6v38NMDoXfNVQ4pZz6RqVecaDLNajsTZM3kzrG53XVSf6k6dMQZwwiyhBKgKk84akuPqYWQeju3u3",
  "key31": "3PhyL9WT4rW5dWb5LryJLBpmaHS4VAZGFdUVWo3sPctV5aD3aGS2KLYwtk75UoqmJTw3YqzAeEvUQsNMUmPUeHge",
  "key32": "2MQADjGSYZxGD9QxX57DytXbx7r68u3iTeww9qYujEeQFcuWNkw2xkHjfWNsPTM14ccaB8HFaTTUCFTcWzA3B5ki",
  "key33": "5edaPzmNPZJnAQhafh3Cj8jKx6knUMCUMmCuZfCR4HjGLckXrNpWE9sSwBG9DqsKwYVRsrYzLZhjzBDTedfZSRc3",
  "key34": "64mxs7APddLu3Hp6wXn1TzYbMYAWcBktg7z29W58xTxpEK5rAATdme4H1LDhSxwk7wDdS2Co4NxMriThv18gh491",
  "key35": "rXGdDg1nugKAcHR65R5bRmEa6zomfaYw5R8jxMWhN8c7j63aZTAxofn17NjYCZ4ockSZKL5nArjEGJn8FmbQeRT",
  "key36": "9QLB5xXsJarfUdXFwCu2jqu2wJUTG9tYJeFxeZ2XcC4mAVWf97JUk9KBWz6DsBSip36v5nxusxrPtfx37CxCzZs",
  "key37": "3uMoJ45ZaWK4kCtVQdqzY14qUHPeYtLTNtx5Ycm5Zyhgva3sCLojH8jiWB7tfSN2G2iPjj8yUbM6o52DWT34fZaP",
  "key38": "5FKp743Y8UPQjzmcizNq3kqNxebp7Q8pMQ4f3AvMoM1tS5RdbJmrF7G4VmHJTUmDKNwbtwLQu3xLYDCToTsMMFAi",
  "key39": "2RatCP8q2nxitoLCxkbWoc5kHbs4TaRZTuZMNA3dtbQzd3Hkn8xhMoTcPfvD6W6ucBqqnhuzs1LwLJSY9BtnVmUD",
  "key40": "WSDJM3d1dBYyptWaEHFKw3LpJqVMnoc5fdurceoXscD9ZmZckQdQcPNuso4Rxoq4nsLxNjcsKMJfKpiYKYDR2we",
  "key41": "4mJz1WyH2vG2Z6spF9opqYzznMnNbfv5qvi9NrSta9G6KdLRz4ojZFTRww6wrZgDGQG9uVHpdUSR4iJZwY9tVQM9",
  "key42": "ZqrCLg1Uno7nnUiGvGUgeZGnjijDSFUzCibf4CXaKEmPkpssTp6J24ACfn9h3kZGcQRtotWC47Ape5Qzu6K8ZDt",
  "key43": "swtJNHV6WZPFTVgjXp3FofuvYwUqQMFrMW2uC97aqgX9JnLUH5Lbi1zNbjnuNF1qrAvZvAnF7eBJwtvCkzB98dF",
  "key44": "5W8axMWmKvqi1b7vp1ZPJyMS8e1cYyAdkp58S9ePztekwrsm9krPa2YhY8FoukZuvXoUtyvrb3zL9Vr8GJcfEApE",
  "key45": "4TRNLPqeU3Ejvp7cX9nCPjJnxskaWmbX6phVCdv8XjaV7dz8YdPeEkScEDT7NWsTLAmBwUgU4YC6yrGNGMg73YAu",
  "key46": "3YK5JKp1J27ww7d4FtW2G5WYh8GViWw5q7EkiU4CJ3PxfdcktNsPZkyNkF1GKEBP4kZenCbdfT3KjCDkmSdCVgDW",
  "key47": "41QbJWfJw2ZhfF3XbRx6n9AErMHBc9zagxRupxiXruiLcUC88P35v3kzuGRVtNJA9jUmaAxfk3YqhooJwyVoniAe",
  "key48": "3Jxg734wGLQvySJj8DXemrwBeJYTVq1uB7ZosNZhFCZsRv9KjQ8rncnbL4VL6EWG6raXisRT72TLRwrbtmu3juKz"
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
