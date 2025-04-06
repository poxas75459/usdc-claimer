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
    "phzw1e4UpZcQoTCgCp5aZiCpaNFi4hRRy12Hev6mieazuFYD4JLV7RbtAPUBuEp76ErquRmmQNoMgFiY9vnTJ5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VfQsivsA9h2tVtgj3M4Lyf355MvSqFeLe1GPe1PnbEjqZcUFnRwj9P6eBykhC5iuv3opZ4Y2Yj2SnwvMewnPuRT",
  "key1": "NDjLzCcTSKwBA7hR7qX8TwprFEQYUJfYz6KDZzAittSxBYSLdAwrk4pfwVDqUZ2J5BpBCDZWCoKseXxc6dRkosB",
  "key2": "6puTqkiHNuRTUZ42TvXT2xGV23PZwpBD7ierRPG4n8damWWERC6FMqXdk652GwVBPmguq1bHCzvjzQJXvifoQyo",
  "key3": "3Gvioh8fXvSRqFk7sXtu5nNmSQq5W9VqPiuaAkpqZaY9x9SjjX2Rgb8ibmhysE1VmB3NB1gXsJdAYCT1dr9euqhG",
  "key4": "3qmaNFQScEX5Ay3mKyfUKW38Ug6vUjN8Kgafp3rfjZi5XusMMaGXx7KdWiqE8uGYGdouK7wQVNmFvuaVytkB5bdS",
  "key5": "4ZDMvVua2VWattCqCyk2tfqYwKLT7td2MdyX5Xtdpb8iPjZj6dCYoRY3vWuT66Wewmfca4e1D3j29nGkmr2Z11rw",
  "key6": "51pRsojMGGSXtDqWFx86gt1DrFy2vYVTErqpUaQM6JWUD8bU6bvFGqPd8inNKvdfznGh2DzkzwUsEXjsrZSNjDpk",
  "key7": "5YtAybi6f7Fy7SAZxzLX9kng4yxzKx7iVzMCHgwEGENWmvz29VYjqXsWGmNo1ZX4hMvWc36S8m6hDX2uEnKnxBeh",
  "key8": "344EmBkDa9rFzSkakWnRpMWDg1pZ5RmxGNUDjuZHART4NeYeKcqHuv84gthgWAcu3mg53VTvPDhgpH2FcjoYeT9k",
  "key9": "Bn3jFbt9PvZEN4bajT4NzPyfcjLTYWZDJpYxJpYTvnVPECycTkmsB2zXL3wivZFiNUsGcTcCjqe6zyuxaevCgfM",
  "key10": "3sRkfncDJ1ViV7y7LR2qjDLDgd8CpctoBfK5cFwHZ7Z5J3wzsrzsqQLPQjb8JDH1C1Rj2q976K8A2hWHU9XRF8Ec",
  "key11": "3SXZ65p5ESpv7CncYy9Xb8Ptq4bUBDGkeJJe26v7QP6jMxQHUM867Ka4AQgy4rJE7p8BVLWDeJ72Z4TmsotcJwmG",
  "key12": "56kGPw6J8KwU1LkRC2SwtszGKZiEHJgZwTakKHQC7oPe3W3M2XxL3hiRoeJkywBXRF3htsAegCVW8Qv6XEQsQgmh",
  "key13": "2jaZapdiKaMV2m3aL9USjZAoU6ryLM1YTXQ3NSAssx6mpcPCTXJTPAdmq5WWZ9CsHfpXp6MjHnHq8vFb7XPCAwcN",
  "key14": "5sQwXKo5ZTpvEHnPkL4kQKhsmKpwduSvNeKyJ5safQM9QpjbKR7bEonAPE4FHqvsxWAzQtN5yxAYHGquQ3nksEzp",
  "key15": "3wr72dVPhEv6aH9XL1h1JdGdJYXDdnF7PkzuaoHXExqD5kAB5Hu74v7DtmXvamuCvUBS4Uh9VE54uaX8QuELt3R6",
  "key16": "4wx6UzNQRzmdJr4TrHGNazkKhouN3PJDuaAXk4ze3R8HiSq65wrYJSvnP67tN9RhMeRYQ54StUCEcXA4Bfdb8A7V",
  "key17": "2cbeHim2bzQt16faQvjW42h8AhSm8txaKWP2HNbC8p88xdMg1vPYmmNGrrfKaXQNjNNe6VYj4VXoHSpfQCHrmyp8",
  "key18": "3nxTB4paMyf1wgBTHobkw7LTExkQAsXXYnhxCm9VyV2m2o7yixgCmGmjRQpA2K9VUX2pGjaH4mHdSumfPStGPxGa",
  "key19": "5w83YP5DT4bSQfq6wuxU7DdTbRqM4SwLDaHLKytNLJMt39mAv5wAG5JXj9TpPmdzGmH8ttVQ5HUWumAExJC32er4",
  "key20": "5BXwRDcQPSYx2hYStTg6JRunLukAwtaEZ8gUAb8GtbzSmeDbwmgoF2xoCoEpqgWvrErEMKSraC2tn4CAndgfCVd7",
  "key21": "ofVWA6vV93YddTHY2cCmEEEvvwA7eeEXhNXhyea9WPDcFrRb1sQVmG2dM1zMKWDAahzD1dEZV7MZHZ2tnmDA2KF",
  "key22": "ESHPGFaFcuH7E8Fs59W2YJ2y39axP2m8sRS76zKCF6FFmxuJWC2Q4Wk9kpS8WDbp1Ro74FcCLLLwJBh3uuHLAtT",
  "key23": "THk9CyKWs7jpiHny1St16QQw2RJft3obCqRF4U8tByaKpFyz8aYw23LTm8LoKN4gEXmsUtMzFDd2oo3h2zgPkx5",
  "key24": "3tGaCVqDiJbRG4itcChCb8RJn5uUQxhbf4pZGE5hjoTrPDa9DxjhcRe2qPvgqSFt38izc8S1GfUdwtR41GnfyEY",
  "key25": "41Yjd5qRbc6KrZrM3HGt2YWqXemkVct3GPeiHdhhdtysa95t1bfonuPKWDHtMonfvoo1882vKMUypsqXwRGXHSJv",
  "key26": "3ps1X1CRyTBEcxXTBGXC9WBJiNXRdT2dDB2iKYVjYvXQAGby3ABqrEkFwxhomfeV2b4T94xY1Vvnhzc8fZcACCE6",
  "key27": "Ls2CBuKZqrMUXbnAAhi84ck1vexZzEPCu3zPEBxvyKweZcNEro8VbPPe2BQ1GqnE8pZkAEPTWmVK2itecxeedmp",
  "key28": "3pxyFnQvGEtDD3scfevHznPz1b5GnEJdiHBeuNeRE4mtv4YhnPgZLiQDzF26eKhYtjab4Bpc5eXDF3ntvf4KvSPp",
  "key29": "3cFrbs8NdWKgq8JPW9JTNwGRRKXpWktwQqSE4QGLkexT528AdU4FWhA3wKGoV4dP99Q5rXjw99zebKegsDwsp7qm",
  "key30": "5CzGZmfTrkGxUCXLVUABR2oBGXcvryNzNxKUYkMe3dVkgFjdiBfFDAGCAZgMLMV1DXNHurQYZh593omth2mpjQEH",
  "key31": "2nmuEPyoSYngxZBL4SGM7YbjPhuG6zZnoJzYeFnjjwmHBgeehUik5p18A5ghqd2pLzd3r2NDKJzJjqTaWDSJAeEy",
  "key32": "4EyqSjPuDWwu7xsEECvfJmxNHKwRnVaeTH4JLzABkEbzTU2S7q81JbiNnEapLrBwcLVJGHPgA3F5eMPtGDWaSftc",
  "key33": "2DyD98FcjvWAWgTZxDRgUjUFzmK1vbNQf9MpujgCC9R4GMkRp9YBMU5z77RM9L4xcv45gqrDofrpFDHwZQpBWrsa",
  "key34": "3d9GkufEVaWXQ2jVoCtCTm5LtX2ZXyhLsPnXRcrBTTwa6UDNaThk5QkiXnfopQomr9RhX8JxKgovgZzf4pa3wq7T",
  "key35": "5ds2ELgU8jEB5GP31W7kUjEeAzkkVcUaDdspUB2VKJT6XARZMVQd5hueam2UA14f2YiVd7n75GQw3zACSEokQid7",
  "key36": "wRsQRsxUKVaGa8Wvd9zJ7ZdQUPYESK5oa8p9CWnw7X7KzuAZV65rmxTo1oYu4GCWe1jPCPhrrd84adYdVfmWpsS",
  "key37": "3sXg9ncbjQZ6DPMtGoqDAAWyNet1baiTBKCMzEfD1mTMFcvEqurjbJ8aSaCUmDFnmJF5DscRinTFcJnyjmh1v4Rq",
  "key38": "3GYGFZ6vu2znVYmJSqXtEDYZsAp9UqrsUpLSQzy1V2bcLECnQctor2N64MkKTxK5cwdnZQzVK4qQq55wrEUESfaw"
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
