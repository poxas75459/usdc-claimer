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
    "5H7W2tpeam5tW2FPnmGWvT8zhQNd5CQLkjferbMhk46RdbFciujHVjxyL7X1PM1y2FjCHaPcxPY2gXjmzBdNW6Z2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k66AUy31wFV356foW3baB9dmZr7uHxWbg6e2z4uYzEqkcvw1fq8WrqiRzVcDFUyQSTTRvtmNUQvoW3cbMavjSjy",
  "key1": "SZ9uGcg3vdU2iieTaaPzgLSgPfHaGHatR2Xv6ZB6JMFcqVXBq7DoJkfWGznnu41feNGNY2TGs1HYoapgHGp7PsX",
  "key2": "63mV9pss4wRHC2hCG17mjVGLZRDWA4F8Zc4e4R54kW1eEvrPi8kxWfgAYijmEtf5o82jowaCw732xBw7zbVe5ESk",
  "key3": "4wQPSJc7Zugpcu3Yv2p1ScdjQjJa1Uc4DrBXscagRe17KtkpTVyKgYzqfGeQGPQi4kVmGXvekjczrLrVLAZbfKex",
  "key4": "3eTxmG29czDy377WzPLFU7f5g784Cxk9j3wXryYbm1M7f3Fydbc4iVngYiXnvH84SUF7HX6tPxZ6sr56DwuhNtWj",
  "key5": "4aR55ChPrRt5APsbWRcUaVyV7pb4g8YYc1Ce6oazpK9EoNXhxmeX9gRLecpXp9FKJySxy9pKVsRwubUQCm68hjib",
  "key6": "48WXBLVjMEYVFq99MwmBrxzJBuDr3hFbakChQxdET6BZky8zDXP7rioXXDdx8xMDekkvKz9LEhwgLNCWa2JDWNxg",
  "key7": "5uoTPdEZabZmLdZdCveYpFCC4kgutBvrM8d57CFFamYbvqXJo2xdUAgUB9EmX2zxFeCX6Zdsfiqpxa28QYs5Xqs9",
  "key8": "2eSr6i17Z47q3pkz3U9MwPKDruAPCZDgSuyojg1YCNnScZ7wdwQZAPqQPYaoK9w1oVjD7PAq5gc5vDzvpN9LbJTi",
  "key9": "Zn5vkoSGyP6hLqMBdji8R4y4aUAd8DFpuqaEUdA62WJHSfcEjEpAi5UqLzk7KQD3ZR4v8JuWtEqJSzPMkYWHYgk",
  "key10": "593iprexnXtigmkEs9116UjgpxfsBRkr7My5M9nranJaQgvDEuAWcjD7xY3EUEMqnaTfYgVsGZAAaaHnD5LeERQL",
  "key11": "4h8dKU7wAyRdcKrnhbCr2bX9owSfgnAyh2AJ9f8Fo3Sj1UFQfbxsz8dtgDh9Nzv5j8Qg8cAcq7au47WGNdDja2NJ",
  "key12": "4s2EbziSKgMErw2GfGEtvVdoHC2n7NjDGu5psijntcuxqBQ2UG1k1i3ZNbyBUJoaF9gX71f5H1bWzMvSMgerKAHw",
  "key13": "4t7NBdd4ijBE55tuxKiinxdK6mi5NPgJWVixf3cQm61NpZdBVwzuaguzKNNtZW1ocj8f5MqPdjbhAquE85KnQuTN",
  "key14": "44ybLGDftcfaB1miBMCDEPzZtm8RTdocRFVfMEFUqiH3jSNBK2Rc7vDLcQZGe1JkDV5jGmNYLXRABGCmpoRf5bt9",
  "key15": "3FVEKWgQQzuy2VW94zXs5FRonVbVsjMFxV8zgeXYofDw4ykesAGSkzD7euAtjJW5DEo1TFrH9FkyF32vAQPQAsPW",
  "key16": "2ev66LKeuYKdB3xBrZiPokLhtbxCrBYmDgQx2bgYbf8Q5vqnbEJNwn8m2PEJ2PcWhkkzJxcZ4PpSVpPP9NB5AuvW",
  "key17": "umdLZFsRUz1dBzUfdtJhmHrD8YnYKK9X3yX7r9M8WVnkXx3NPTWPvpH86JNaXr4HSkei71AwHA5TkDeB8v1AioK",
  "key18": "5ooGc62XPNmMUb436sksmhfhWLA86ZCHb4k1kq2vHn22ntE2PPQbi4ZNgwhFEVf96vMRMqZ5wHHJ4vPZKkA4wfTx",
  "key19": "4Z6AXmQF5xAXURL7or8p8G6YZtnspgZD6kN47ZUiWkFmb7CAH1YCPzD2KTfgzmjcQtgpYaG3AB2BwyTWS84A1urZ",
  "key20": "58ZdjTLPETtrFw9CbLKyDoEezaZAb7qTHqjZcQCZhQ6VZht1iCvPTbn5XGkM7tT8xR1E5C1p4eaQCSum4j3m5dma",
  "key21": "5Bmnft6EtyndvDcSEj38DQhGUksqQ3mLHPQBJSpkerKsfkzbCCEpqpAELEpoZv66eBYBJzbqoUbq6YAdH5LFYuZi",
  "key22": "599T9b9jWrJ96xb2wMPshpeVhEMkbCRg2xxaGKiLwYmCbaaDBowZeqydbcqNVMg1UZaCChXe6F6NUKUAxaMLxRZ2",
  "key23": "5uEdet7fVe7hWZLYtPnukqt1Wxyu96h5MEAzt2nVkmsJz4FwaDsaf1Qt4LPWf5Cz9kAiseFWLUwSkN7XanPD8fyi",
  "key24": "5hJuCWw61CCz3DqNudhd9LPLQ94j2P3htVxcv5dvf26YVjeJAVUJB6FA4Wyo5X5KgHAw4oBGA84ceogLbnd1cH4Z",
  "key25": "3wjhz4nEdQYeYeFFBdpUTpappX2YJAbH7kWR3o1JuEc9fAdCf7ovkaNvPE1aFyCLP7ZFngTz5TM65bnuY1aStw7c",
  "key26": "4uZ5CxucatVNVkQrgnWevaCYSdFR3tGDf3rvmDkMkJvvgJEBHKAkjiszrAACmoxavb6TUno4PEU2a4YpqVtj394T",
  "key27": "uVY9asZxjMPC5ZrVuZwt5Jb5SngwwuMSUxSWw7QvES2NKfuGDuEk9B7nXt5GyBJBM5DbkrtwTruh18VngKkP8Wg",
  "key28": "e8sBm49DU66ZmToJugn6AZGB14SQ1V1pmJAtoB1SxQcfzy8PGFwaGAsYt1DWtZu54aYP5jztmVywGhLSuPv9bg4",
  "key29": "3qrsSzKfXtJMphycZrDjjgd58M5ig58SGNquWDfPsGhoL8wag68dEtpeztcynCP3d6mMHXP97Ldic9NYGzp838Uj",
  "key30": "2aeA4LgGwkMCLZLC9WMe6avdAzy44k919VGRjpBgKzzsn31Z2C4SUXkyvRnXL5J6vtFU6wuMvcgUhyrzucLPV4yV",
  "key31": "2YJu1gU3dJssoihcsEYDd8pnsunMDD78MR1fDW8Utig5v7rxGeSAow9yhXVZFXunF2g4UPHyDT17E5umYWXhas75",
  "key32": "wm2g2Tv5apfEkWoSbNAnH4W8DQVKTDYJS6xaErM1ZZkEYV45idsQSYJ2huo2NWGquGimKm1gnmdJRfApKyt6mrb",
  "key33": "mM1GXNPJFEdy5tHUCf1xe9sf5rusoPLNxPmXAc2Fxh2b3ptL5EMYQgxJ6JYLZX9R5Jbj9ZPLovBcEBUDMypdZSp",
  "key34": "5w1pNQvkBowB5m24JjZs6mZ182GnBdoExv6qStqJLVEW9ixHJSKmvVxhi4jTjHVwW61cgGf4rgSJ6xLqjH5ujxLY",
  "key35": "3hbHSLc6VUThshKmkZ8Wc1s2nEovJo2wbJQMaxeKjaSpphAsEsRbpVtQ5butEs1Kn9jfcRjkxorizjjULSnr9StC",
  "key36": "4RRwCfaA244Drg8zRbyhSEGMcVYVomuR27ewnrV7EJa5gN7EcCSYkFNuSYRFNdmnEfDRM4RimE42JzWAZHYP8igD",
  "key37": "CjZTs7tiNSKUVRTiRXQa5E1xgp4XMUg6RHoLa4sXRiMQbySToZvTUmJqbWvzQyYCfRymv7qiMRjRXVkuDTggmcT",
  "key38": "2veHwbEWxExjwCWNH18fETQTYWbKUG1fgVuSTf8Z4oHDpNig8eGGByzytcyGetuuuiJb9aU63GnPjQdACUaN6ukU",
  "key39": "3zmmcrXSR7j5HQgx25UuHzM1k6vn9TmWhpCCSEcbYL3HEu5Kg8pNzAzoXLVLaaEY2UsiQQv8CiBTLpuwi4yyubcM",
  "key40": "7jBGGe86NSNLzNvRqN1727DBUN4ALtgS3BUonTbs58qch5PLB1cLxUQtReqLGqvQ1ZYztkomAVajQhhWw8TmgWi"
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
