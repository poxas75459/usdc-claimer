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
    "66YsQwEu6pXdJcRzM6rMcvhrCmcn7LxSr1cz9WWRtNoUNbDJNkCVw31BPoNZV2UNRKicWWi8Tn3q6dgszvUYTmWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rpV4ESKgS7QpaNJvtLnzThWA87emuoeGkbfY6AuMdv2TK7uUMRHJTjpvPHqrc6LuByr9CNcpsPrY2hwy1ybiQPZ",
  "key1": "3qycmpoaR6iPczFCj5sLoEvcbLhfbZtr5yXgLzaRtBPjZdcid141nLp1ohGwfP1rfW1PMhBapintJNG1oatNqBWk",
  "key2": "2HvhR1B1AgpnsccnNgAJX8b7e3UF1ZVxSKzik49x2DxBPESbFCPsksRiEMFCSVyZPzaWkF86nf2JiNiwi1jAbHRw",
  "key3": "nkbC7uoYxLq26dpLm9jMpYHUcqoHWubctktsyYKv1GfmcRNywRWt5Zy4x1jKTcbSeuVahVcaa57nCNZH7f4KV1f",
  "key4": "SFVAbQTEi2wUgpBEw5m48czN3gnEGUamA7oEWDc17uGZWaQa56e1KFfJmPtuaxVZEd2Hc3ScooGFMQPHMbr2KHo",
  "key5": "ah8qJmKj5d6LEUXSNMrF2c1TGS7NunU6CqR8kgVrbmvSsPVjA41bdt3mHg6GrS3mXXYf1BE2yNLd2gszhvq4Dc2",
  "key6": "sgi1VQfZMqGsnEsZpaxEMwNMs87jCrqHketVhCZz2hyRm2vyHSbLBRjjg4CMGJ1253jy3BXa3R4FKVHxmsH9Sbv",
  "key7": "5ruksRrX6393RsfgwTNc6cukAAehXfxGYHxSkhEVis2VBnfweXZengYrTHuF7EFeCqAC5Jy6roZfvXXw5yW1Xycv",
  "key8": "5SJqYPw5JNwjA4AWMtiS75e1LfWCrxupcMhA9jKpSNvh3yVky3isyw13AbZnHyVNSJp58CvDicMV1uZqmttPLYMt",
  "key9": "4UmkMu3V6jAzPJoFnDfsg4kXrPQgBKC87NEWXtzjtmGjBrMJGjcoRnThErEHYLCwkCV6VHAw8vTExB574iEdnjvc",
  "key10": "627DHihM3t1NUTMmDYGA1tVU3pT1EDv3jZnKB7CdFVqs4AaRFfGtrmLR36QQP6E1xiXuWw5pAz625KPB81RuRPkL",
  "key11": "3DpdsXd58iCQxH71nmFUz9vTYNoiFtAHTMnqHGv1JfSbkKNbD2aNnog13eS8rKv3y4MqKrnZzFPXcis78NQzEyCK",
  "key12": "YFj2bP3r8B4bVuNtbftNwdGZjBSZv4B6twP2Csb6UZcFrPj73Gm2WYEPXLznr96pKRTWyyHfqHrYD6hLV8kNSUr",
  "key13": "5TT3fG7EVbyLkyNHy7nnRcmD1q6PtQnNUChMTwzAE3GNtALDzZ1ExWhPqvA2nQ6SLYyAdG9XgkKBYFcQW1p3MEnE",
  "key14": "3HY6CviBhPhJBSjatMoyLD1XyM4HsaMkqU3ViStCpRB98oWBF2HGZEJDmsNzYHbsJ5zAp5839qpSjCkF1R45t5in",
  "key15": "3pPkeSbmVVrrZJR3DbsxtAgu1ym38nqodzVUKiBSyuczJGUQToBFmmagPdeyKWyNkWK1kC6uSaSxXUJQ64ST76UR",
  "key16": "5AJeWTM371MB4tswYo1QsEqVFHgfi4RcBvFLPu12WCVPC6vsCMgvnV6s2u6dNMwspEnePAaCNUUzVPJaHEeentJn",
  "key17": "3o2z4aphfYPkactrguGfsw441K9Tsb54smserun1hMFnHLsMcsA6fGu25avFxRoXXmsz4mm8q7g5yF85ntoyxTPQ",
  "key18": "5XtJvqY4DCfyxgrF9M4gnP1ZGCFU81P6EwSzG8EtSKMXxsgKqcrcuHvZTM3mxEWk9uGsANQeikZnGmh8CjHhJNhC",
  "key19": "3VMTHeupmRx2s8Dpvt12SE6dKRfMS6BGgcEJGHUqmPhgYZ63xcixNEsENZP9eVNyumRU3yYfXQSBpxjCEoXHjdap",
  "key20": "58WWZswuDNMomVgd7UqgLBApDPt8MxFSzkYuuWwhkhHjH84RJSHknT9B86H62a1iPJt6qSfgo25yQvRAzVzz3g5C",
  "key21": "iczAsMFJ6JEk655euYuufKHCRwdQSk2TsGx32fnmRT2x2vJHLqRWEKzpp2wLyyKf4PsnbPwiFEvKTkwj5c93X2R",
  "key22": "2qGMARS79xXdZhGs4m3rGY6ydc5ZwZgK4ndUCd8NGf1FbMx5LoaBqWseUd12TE8x2iRCnN6roAQQd4GY5ZnZi9K4",
  "key23": "4HXqLgg8iHA9ayu4sZ6hraae17fWjqXHa9MGSELjyZm6irVUsh7WuzdK9s8VUj4JmRKaGmxeDHA2MnfmiTBWsVY4",
  "key24": "3p6ZgGTGAmpDo5sqwrz5SiFPEiPLcfTX3WfAuecrWex2tHcxcP2C76eochmodRS6T4YLYyieLWxfeALUKxN1Tsn2",
  "key25": "4Z56bZM6iNu6Z6MCs87JENhGYKPmBC6kBV8SXvxettTaaFyjkWrvh3fkxMY7JSrknmiUsnJ6oUV478QmnKMu32UK",
  "key26": "4ZqtFsSJaRVrss4aPtsC9d9XyVAhrPa2Q5MqckiTYPuSA2oCA85P6Ucf5sJPp2HA5Lxx4wpvGQBhXqLqzxcheQJr",
  "key27": "5eRBz2L3kHLgK8GE2n1fxcHYaSn2EQSBM2ZQURcLibkU9TF29XdUcEemLqd5eLNjtNhMxCYT1hSDpsnt8cSs8Ki7",
  "key28": "mWy2DCkCBbG81WGgJ3VDY7LswiBFhJmnF6icML9RGHxiZvZrRrLHGFow2krnGR2bTbtPBkRgdNtb4pdkwzm1TYm",
  "key29": "5xiSraP6c4MW3wimyVYpwr3aidhKgKkzxzyWKN3AQEi5H2PFQRA5jDAdxhUAK2SGAdMWapmokMFznoSf6dEvsP46",
  "key30": "2LRkU53jbHqF3dLyWL1WbLBFeH6Bquy8DhNfygd3hxPBPMMMM5pCGQa6u8Cgu1We4ATkuWRyBjMyMqpxbeKXFEjJ",
  "key31": "4sJFCoUwyg9zppj3PDhS4GrQ4v4g45rEMfVjNUPZBpqXNWvinVc3Em1qS6SaZa3CNbAYJYR18Am5WC59ng1RvPKL",
  "key32": "VHxRmvFgZtKSRXhxkvP34bL5YqJdCXTkxthLeWUxoZbrBDBPe8oDVc5td9fZhGgjHEjJLUMstkNgSjhvvMyavPD",
  "key33": "Lu15vcHCjRRnGLJhAyUyU7PWKfFxgBZJ2R1HuuVjeRNHiMSCNWBDYVfg6mR4dYEUJ88jEh6iVL4dRGgbwyyGDoa",
  "key34": "5a1uHQ2gphGmYRXmB1bSUzkAvV1qgghtyKbvFPwRJkNKHu4shn7CkwkCBUdLZfNdxDyg1EQqrbLd1fuaSdQoGoQe",
  "key35": "24A1AF3h1LZ9UiqE8YRz32CGq3mx9D5kF7QwBWUwvT8nptKyyoYDGEPrUvWJ3Tmk2XX7dAYHJxqWKfe36xaJPXbc",
  "key36": "4yXi8A6AZwT81uW4KDyBGrdi2rXJYT4gHPVJKskteiZuuGZDzETVGBgrtMMebVQqBSoeGtyJ6GL88EG93xT6KraY",
  "key37": "B3vCvNT9nCvQMgFbhjbGj6CVpTx9YcMkW59KqW6tDDP9JgR7FJx1ZCZ9cVGt5d9xHhu9jSubzF3TayEqeSKXKUb",
  "key38": "2epB9CXauATALZ2MTmTx1H9rRasFu45y5MwSwfGQaZsqwqZLiKiCh1eARQR1aTi1ZzeAT8bH1P2xUQpwVjaY8n99",
  "key39": "hyyUjYrKG5KZ9ZiDE23RkkyB9A4MBbkAiydaAcK2oLJcxV3P49pa4SLqnAKHo9y2AgrUcm4Pw4SeTHFQCkCb7KA",
  "key40": "89fBZNd85LPT7JRjJ9Wrha3HtBUzeztWvuJZUNiRvXiaEQiuc4CNZmGtdJnXVatE3H4sCbvnG2L3zM7KsmFYSw6",
  "key41": "35R3eBk3N4cV3Tany2CFeJFQRe5k2ieeSzuxCRWexYes7GpoPkCvaN71WCKJBhqY2wntER9wwUgiGckARj6k7knd"
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
