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
    "3MXyZKw4ayLegEpZuK9gWSfeBS5ZCGiDJmyQKDn8CKQ2LHTTZxA69G48sS8hnWUHZxztnP8CMdq2QUcTb35MCfos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v1JxCp72CeEHtpsDVT8Zon1nuERZMv1MSJaqteo7ygvfjWKEQLeo8N6E6FekWMB629oztj7jvAgUtaUh8UxSw52",
  "key1": "LujuKwmShA7FXeDjDmtbdjaj3vBacbwUmSGpghhSyaCDb17ZcMwGduFkQvTT2WgY37UhqpesWtsPdYFpydjmpYY",
  "key2": "3CK1x8EmAEtMqPD3XyT38ppsAPtTmPEp2rGB3tzsXWvmf2QZTgJh3ytHLqvpYz6KJYFibHkuqtStrtYcZ9AoEm66",
  "key3": "483CHRnXMiThXU3f6xkp7iiKJvUMwsPPcjnjYw7Y6rbQeC8yLEZSrV7BycV5CXko5r9ZjhxmMotfrizEqu1KbLER",
  "key4": "63QstEhZHRM7HDmJQmmtSdZiXH4Z3PR2iVbAUtkT5twB3qMUTYFK9kRb7ZazQ3TXePNn2AfPSRGDz1Pv3mbE1TH3",
  "key5": "21ob677GuqQZmsL56Gj5m11HEMtU4MUXtpZ5iMzQV4NKNmL6NuWwYB3Ppy2KNSALrUU9UU9n3yviEbqWwFgc27vE",
  "key6": "44sCNb9HjVrtFXpGEyiTjEdr44NidRV62MwGEv6MSM4JDRM5hGqqzwrUnn45tazhB7ZtR5k5Z8b95TNW5nb9YZXG",
  "key7": "cLS3yPZWKohH4sxjtsniu9WsxL9pLzGEgPYcknZ67LEvCeRzYuWMoRZP9bCbS2YdKjZuxtkdhWTTxrvhYTr9pD1",
  "key8": "3DitLGPotEoRhZUcWTTbr1mR6c45XY4FsEpb3yEVtYgndAeFjhWkBKQiRpuEHxCie2NyqShHnkgd9sgsacxangg9",
  "key9": "VrFkRhbNHMPz8LcFBY977T2rTUw5Z49zaQ2hW1UWxGJU38Rc5LSDMZVRJoRAz5TNUHGGZae1kcW3KTnjJ5eUKBy",
  "key10": "3v1TnFP1YW567ZxG4j6pYb9PSPmDtSHVMkaGQAQTqgyrfaxbPiZDJw26N5rrHEXkWMxaY7Wjq3R5Upedqh59hGRe",
  "key11": "4QA3YjjZEJm5XZzvMUZgMD5CdoSprSPvNP1YRZm7dpCEqmvVHf9sCQ88JNRZEUf3fjchYscHV9dz1dkDhsY2FLPy",
  "key12": "3r5M6KsSQaK5PwfL5htsDA4otx8JPcbnz7cbeaVLMcYKABof7ynqBa4KTv1sAUFTXd3eZ6yxXoS4BYkELz5Quymo",
  "key13": "3jsR73FyBg4UhZQNZXpcNEeEYfN6Fo5pVksdDPfDocnti73GDGA6MqUa88YUaDoorhuhcRDaRmW5kZknjCUdiqXc",
  "key14": "5uEWgeEM1LoC8f6AAVrYCJZuEEDjGTDBpFGC9XM1m9A6ErrvJtgqVn4Epdjxu5BM5oWzvyTVSWqdFzPQqy8H7KTo",
  "key15": "5CDgfJhLWA3oNcmWgBdwo8CeHqemb4ZKXy3nRq4F5cNrpd7TPjWqEnVJ34GEyS8jRgD53i71LUTFjYSuRj6jh2EN",
  "key16": "4fnH1aE2CkTt3FZ8ZQG9VqSgXSbqdV6VCL9rLBA8zNna2toCd242yeMJwdJRfz6YVTcAPE2bNLTCxN2CCSwQaJHr",
  "key17": "n5d51YBG8RNcjaWgPZmy4fYRuJ5fnhapbyc6NF2qThobqH5ZvhsGMnxhuJWXsAZ525deqWjgLHgBSxXMH8tBTFn",
  "key18": "3YeFDRznCaLLSPvcG36fGzgMoCgTsVcv7DRdAH97GdMQhE3iRAwtUo8VRiZaG7Zf8vFmMBVV48qE1ZfeVzimym7",
  "key19": "3JxKyHH4tSJj8aWQiM9uGHmiSqBChRb6Df9LisDteAvrrFbJGoUcLnpeNcX6APT9dcjn7FvTa8TuT31qWfKbtTtG",
  "key20": "5kp48hSEhdwEyWaBjxWkVTxKgXRQWri7gjrytzfMpzM1mbAKqbrp42gCDhzi1s4A8eDLCVgLuLF1gYp9NaHpU1cd",
  "key21": "2iVknjztLG2o2Jtz5kQVyLR3QbVWqqecuWJx5oDnd9oYpvrrg1wiWsWDKGijGhFNw8peyrigQtS6mYrNJjYLoq2C",
  "key22": "ir5MAQgxoQjEkjs9KynYnywNGGrdbrXuAniXwWf8ZVumEigPwmQ9myHYFqJk4ZYCQ1KJLn8tBm6nGDzUmTgoM62",
  "key23": "CBJUNTTvSKigTjDZfKcpgFdkxQBQnkk6oBwesJy7HzZK31x8yuB3A7Nva8KjGaEVQEcYWN5XgtkJgrzYJwY5aPF",
  "key24": "9pHAGbDmYvPRxf96wj5KX8Xw5Z3a4ivq5QQEzeKYRdPHBke36hSxLHoQg9w72vNpFybB9QReWBBha9S27GkTmdq",
  "key25": "4UvaoycUZLoDMTyAumoAm8255ea1qg7zV6waAcMYY5JHx8QyE4Z4qzKZTXvD4PURtanJgBprVys3ZcrzB2C8DMXy",
  "key26": "4z6Dut3h4xvB8XHGLE1CqtGTT8TA5vtomSA7GYhGPqeLkHJSHFii98BmHXUuHAPsRssWJ5CtwnMuGoC3GzCkyjrG",
  "key27": "ev6dc2r6SWUbn6dfijocLjVqknQGvBhcSLGNk5TX94W4oCXnKrb6MMNUwjGGAZNzyciCxpqAi3UaZcfSwgcbUwB",
  "key28": "4rK438CxNUcE71dytDNWDx7mqYMSHc8bF1WtGGEucjV5Z3HFuXD9G53Hg85WnEo5fVUvXNdusVtTj3vbLEHhYNKx",
  "key29": "5rdbw13E2UMZP8hYL3kaHKM8cLviAhtMsKnb24rUHAVYkDtNvuiBeVDLCbUECpJfGNMkBhkYmyDcgtk4vvfvZbk2",
  "key30": "yv4ZB8RVCbaUdFxbM3TAXCxQGjZNAK7ab4xkH54L6NKsooKgkQidnFvD1QkG5xX29VPuTiwLv8PcJEg7H6z9k74",
  "key31": "3yVuH16qAjx32tJETAx3fyuZid8FAgmVSiZv8gv91aWj5ehNpUESihjkwx2Tj1RZrRs3dhdLUZk4WSh5mze8GvRK",
  "key32": "ZXChSuZm4JdwCrTnpunYp29NisBMFTspskhWRViF2vST8qPrYER5GDLkuf62EbX8hW2tLA5gGyByuJ7vMLz7a93",
  "key33": "4hq8XxDyyKfzB9Xk59MVohgiMvqLyQ8BnZKVn3o2KNabx3r777kN5muPCz4CEYk4SifqmRdz8YnjqvazAxQbgV8G",
  "key34": "5DzvjGfLKH1Szf9rJdZsoW4jujg4Z2JTgQLBJLLVMYZVrjRFcrsHmRGk1TKzNpdhkHKKBoyoV62hr2Ced5SSDa8N",
  "key35": "3cT4vATykLGFw1U9A2QCMgUQvgqD32b6D22k1TvTVqN9BSM5LcqWy34S1ke5UbRbXaGUWaGHXxFbf5poZiXTCRtL",
  "key36": "653LV57QsDDCJTVfJCeWCvCFVntuzCk2trKdM6dYTcKj8JBfiFSaYJMQe5ySwp7qEx7xzA7qGhm4ZKQiMMJdorEw",
  "key37": "28vsiyZV6n1B6pR7baz5XRrqc7oNWY6YCyVcnrpQF9yAQzBjjNt91kz6Jkk9QgpdLu9YXru6VqmZzShzwXXMsut9",
  "key38": "5sxUvKADbqDkGVhxoV17Ci2TT99ZZrAWkGYLLcVTJ3c7JHuN8gwT5gyfpSxczyJaVw3i73sfzBwwXrBbSMtDpELz",
  "key39": "25rMEXqFZmfk1z3QH1NY5QfNqCjEUasR3EA6oPcuMUQTPb4LD6ZNW5kBRYpuiZFjbLNSmP7EuYDHBkbvYnAaWj4r",
  "key40": "4ZoPNBi8HjpaK5ktgz2XcXDmEkKuYefFxKW2xacpXMDtAzMTyTR4wGLysdvAcpSu7tTX4jP6whmLoY1y8cLPnNeH",
  "key41": "sYQtrKKKKfja9D9pEkeHWJKsjUnfrMJNbs4j4zAoaUrcPjtrR43HdkJqQXiX9Lzp95kLc16EN1xPf1JmQFUajrn",
  "key42": "2rs5kauxJb24tU7eSivTw8rAvhzqET5c33hFwtkhQSV3KRvb7se91ybqfXKL4my9W845pGwsn3QEFeAZ8dgx4ziD",
  "key43": "95PDinjv3uip4dktdGKcEzeab4G3PEDGqGChZw86a7ttBfS2VvGK8ab2QZuJdSCVpNphvmynhyKdJi8PYpYfeVr",
  "key44": "3n9YjEbPnJXDnd2UQSaR9q2H3R8wwhSNxHRmyMrAMZB98fjP6d7sMxox5xBECDtctMRfHBCTqipB9EGGdEBMQ2Va",
  "key45": "4k2UU8UB5FujGvihCYFmWr2z36TP9jtqyeDTuvuuYoKSUVpoQ4anz3wxFSx7nWTbDoQasrSxw8DSG21x78yEzE8F"
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
