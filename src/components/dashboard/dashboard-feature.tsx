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
    "4RRrkvPZZE2EKsc7FbGMZf3QVAv1mYQGMehrQy6taqtZs8SfNBFw83bkD1J3b1EurjPZvJ94S3gbjYCrmtoKz1E5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "545WuUYjfxcQ8zLmsoLKYxLai641fpEqihaSCiQpyRfNWZrg96r3q5xLGabExnquBL3uwqUwzYi5ntwsnDVrFs3r",
  "key1": "8CW6XdyHYSnVtWUGJMqzchu8sf9fC1QW79rJ4EEAtoB4ivaU4TkbtEKD9utt5YbaunsdHuP3vxaGLWzG4jfsRqa",
  "key2": "58BsAC7FhJZFtquzX7xALAtJEGWVBy94rkTDiqW7TpeDcqf86roKgyf7ZyWwdkfJV3PwBuJ4Ti6iND2bmiqgsqKa",
  "key3": "3cYMcuwPTxG6dtEfC53UKcKub5WU6NNFNX2WbN9LUGTg94nto4WnysJLAFWiXzs9ZAwDa3ed21NtgJ5ab8ugQ7Ho",
  "key4": "5pyTzom6qDKuxMDDCCT1iD7rKXgUd1SQzDnZK3b4DJPViEQ8f1tPxnMJfVfrRU8cudLyG5mdBFDPHw4JZjrMNbMV",
  "key5": "2K511358g5gifh7DwDwa6HYjLpyLJ8sm3coyw6mjHn969KwuBBPcyDvA8GpXdECkL2zisKA9p7Rt4ooFGm2zc5wq",
  "key6": "2HNJhCy4G5BF3mQgvkcDSfQfRgr1xh96NAoyvcc4yAyhroykPxoYsw7A3w1fvUkMEuTY824Z971pq9bhk936bRrL",
  "key7": "3yjkj8ryBPGheT9AJrQUfe89jud11ydPxB18b8rx3WfkRFpWjfsAx22eEX8wokbSN1LyARWU7aL1NaQAr6VwDHyK",
  "key8": "33pv829hdTP5KkXUzuof7RLy7mHH3U1iiZKVLgNtKKQ57pCW5xFpNzLFrQUaSA3B6vJYxUstbUgw4991NfVhEsqk",
  "key9": "4U4hbkf8oiY4sRnT4JiPuwkrBi7Ph2QPGpHEQ4ykXRoBWNDoNH39dsq1PTqp6zeyYPrEBVkCtx273g88mUL28xV",
  "key10": "op58fV4PrWDyJDHAyrbQopBMq14Tu4HFmGfagw1io4K4Vi1PgVjxHbaMK5k3QGurbuyaLMHZYkvNAYb75vTgsA2",
  "key11": "Q7mcvcT5ZhmBsswVaHfxM9xEoEVyLJtcpv7rhTomSwhGbK78syhbyASdKT3DHZ2B68njppv7QUwTtNp4HZt2KU1",
  "key12": "5G8rmH3BG41gbmaeT6p9Y1cR6RLrj8dDKCAtN9zztmP52QAiKYoLWJspcCkACnEoRtoUW4xKxT7sCuw4oJv57qRu",
  "key13": "3xB3yDh1x3s8myHLz8V7judituv4mWCAfQySyMq5pjgMUcuaBckJuEB6goTNQS2QfcQZmbAFucWUBew5pD3yNoxG",
  "key14": "5niNUYeG4YgcJxzHD7o1RSwuSZohFsSPs21NRtJCZ5Sfq25psPyTXv9D8dW3dKxmxdEUjaXFgAgrhUUfD879363E",
  "key15": "3Mvq9BMDNVzpdbAzEGgpACgwrAdUL1HqiG5tUgjyayATURfwnrw8kquQAM96KNwGkHGPRgq3uxRKK1Rdm71b6oCY",
  "key16": "4gwwbUuLcYHvCXqn6qPHmB5KWnaKJ1RyKB3FNLg44Q3gqPhnppnU7gsesR4fSqpuju2EGgPAxgDJAWDiEMHDpqPN",
  "key17": "3yM8wpUttXnpQMseNun412TGxH1YwKtdtW9RXLpTheJvPcgpxdcwNX1ofLfKcVW5bJN8cUQnbgLfJcaM51BfYK8k",
  "key18": "2g8Uuw1ZC5Pfvz1N3W8qZgXoSB7b8SSNYPCawVLD9FnvTK8pejkwUbgcayPUa5uKeYumrx1EQ7T7BsRkGiGtdbsX",
  "key19": "4DRXvTfB87VwhcmRbYdqivYzwH4cBbpJHCCZ18DD1JytvqLreuP8zetQYKjKpP14a4N1XFYEC2Y8tePMFR7YU7ms",
  "key20": "4WbW1o6euE6XwrKVi2D4YTXaqy6pow4PafBbaRYy8bRk9xdpX1Kqbs7vngyRgh8MJ6s2j3Wfpr8nNHUQwtnwcwAf",
  "key21": "4H9g3UpAwVcZFL1mMyCndVawtsX2SXCBeohwFARSkUq16f73fAEX8nDFrTWoUvUnBz7Dw5dyPhy9KafuQ2mzg2yB",
  "key22": "532hZbkvVuFAaXpFswshsSE6WPwSVQDB9yUDFbkBrNh7TsY8hLJgMC4Se6bMg7dsQFxTQ1LtdX3YieZvUgQWgCaJ",
  "key23": "idHqJfEtiWrmDmYL6CWRzp42XoCMZSNxxjW9p72P3jH6z3L4224e8tRg5uUCsGWV6UxYxgtLsyYGjTKVXZUoKdr",
  "key24": "2KvF5DxMLpF3BSLqLLAtBEUR2zLu34V4xKHQiDFzxSeCP3c6n9ZGS3s2JLwx26e4deQT3cBBpCpV9WwQaMTVmL8d",
  "key25": "67N7rv6ttUdLErXXMY2xG3z5Nz55624u7gdf92jXqniL982iMjoxMjwxRTp2R2HMQjUxbgvChshBqaowQtmmrLK6",
  "key26": "2d5KWixTBPfZPCA2G87LwJyUCVGKoQVKo1E1QoVnNjN8pYRy5cbH83TSEjJHB8tf8a1YboTfKMNxiFsrgCmxjNfV",
  "key27": "5TdLztuWt8kK7ovBqvJ9onN9PndQke3wqV6xr6o2jqpZoawEzY3uAQbVoxuiyXjUF2kbcuCFHWh12rXook1UVLyg",
  "key28": "2bdHr5Xrf14g649PNUgJjsQeNeDrD3yAF6dhqZ3y7DpNbXfiP5gzd3PxVzMhQrC6iKgQREoyBAGYKHRSRebyoSAa",
  "key29": "oDuMrQc4pUJQqEMcfXCQ7eo7KoEmd3QFw6KXo1nbuRpojAibp45KxbyGDfpdLKSKcFu8Y1dAxRyvXwDjta6Pg9T",
  "key30": "zowpovoENjmuaftC5FiRKiRFh9XBeCAsXmgS6vzbwY5pcroLEv4g1hnvLB2WCPW8vLdLjHXqCVjdAk3fxqhgrQx",
  "key31": "22xA2bSwuyeg8RfJJs33kd1d2j9qP14k7MoXiuntodMXpkHrtcYdFz9iDLboMd475GZXyJPoQNzu34vyMcsZE1Lq",
  "key32": "33U1wpKL5bW4kwNrfHTee9xjrqhHmTx9NskcKtXdEVifb59kkwaZXsF1LK9fvaVdzifyd1cK6E942bAonKgW8JoB",
  "key33": "UgphytAqezd7xMina8sDQtw4ELhpd87GvRWdFMsnLKFjz4NWNTg1f3Sh1LHZCRp67NoK1QkCceLLvNUVueKk3FF",
  "key34": "VdfvDSDbDvKhsoFXeRuLEDGpfMyTL5dRS4tPyCb1qLeiyuSjPfCY4ZLQ9FWRZKKSUrSEuaoWk6CL5VtLbCHGgHp",
  "key35": "45tJ2FP1WayJXiS43xXAYWDg521Wem8fmda6pm8xG2uSSk3VNRCpXVoK9SFHrz6m3bpQUiPyF6o5byiFGQaAVqHj",
  "key36": "5Sei3kxBrmip9iSbhE9etjCHLTuiJH3jvmSCj4LEbNMM6mc7Vdj7DyGPAVLhgxt7CNz3kW3WW1LnCFhKpopbd7Me",
  "key37": "3HtijwptLN551oqSnzMv6EBPr4hT6r22KR62trjzzXinAFFr19ZAqhWJH2nVZniJm6EeKkFPPcowWHeUAa41HmwZ",
  "key38": "4NsX95RaDGx9RChCWX27aD9RLGMAgjw7wDF824jhDyLDErJj84U2GDcim9CD3w58PNYpWvRW7xMLk1K6BiER2kRZ",
  "key39": "UPyFBAEwdSmkquf2cUwoTc3QWohhwEZed7dojwssx8zknFhR1UE3TK6YgcJ86WBKEwT2surz3oDKDU6BBUf4XZj",
  "key40": "4RX1enfXAwHYvqn8JWioL912GKAsUbuqBheVzZwaH2UKZTrj8FgkvRZeiQygU8MAMR4x9BwmimBL6AucucgLgMW8",
  "key41": "4NPZvZCNWWiXUKM37KMi2AyyYzGynwrgpd8nrg3GaRJSZ8DfkVQk1y97tyz4HSksj69HgTD31YewFKbC6K2WGnJP",
  "key42": "4gmBhfnaQGab2wbsCUGXu1LhR4dMWpSSYyE39TG6GaMHAcPVdqNfynxf8GnFegzezuGzNWfTxxV1QvNZBE3CgcDw",
  "key43": "4RFRekWt6y9v34jR5qNAiAcJcNSr1cW5LhMtRFT64ggHGEypVz8dSkDt6zHxFwYpeTgtzLqhKcVSEukSNkHHjsyB",
  "key44": "Xsj5v12bQBdjWDBJ7Hn5ETF8NnT3cAXSFVPKzZZjqLmMFEAS24xQAM7HNHvqbh89wo7tfs7sGcRnB4vmsZ1mDvU",
  "key45": "67oZMGzivM9MTQ8TuRdHZZ8hGPZmhwGJTVw9JTQwEamaLRZyGchoQCd7yZucTCU5W8hq4KwBCfGrFkrDQpVGF7CY",
  "key46": "nfZ7mKaUxPZGcSpKVHvnJjXK2qMvH6gSReuqV3uV2TbLLbFvTU4tTtXg19hhHqrs9uT639sd2r2GTQx86sUfjDb",
  "key47": "5zQNmUSfXcX4ehENMT52U6koSqNthCVAd5WCgLSJAA9kxuqsJccFdhAQFL6wCoaCJTvFwVJoPXieFpgpk2H72Xwp"
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
