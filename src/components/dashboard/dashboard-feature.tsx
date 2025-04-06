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
    "5QnsgF1r5x9X3hRKa2agegcB1KGi8pmrRcA6DfoaQnLQhjeHCD6zYZ1iin2T1t4Huq62gWSsMDuV4nvMKftBFE9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TbPXiLNDPbjdwkyuC8d17hMMc8Dk4jkxMVQuN4dk2uW2iuwhTbFfCa8ckZ7CJxNT5xc7HPdSvtzTgjmsJ2MnTjg",
  "key1": "5mJB39jvMppP6spfX8ys5RXpT4G8fVCUgAvameGdXUkP1eiPRshYUhsmFAzPywtkvEs38o1srTQoUoRKdbzZXgqZ",
  "key2": "5H3xD5jD245fR9K5W8A8QwKWsctKYRfigYjLnMNHMW2GinbLqY8uQaTvMaXWYjMSByg9QtCeoGMo9BpL9xSthy3g",
  "key3": "4y2EscsiNa3StsS4HMiA5WjCawRGETzzrB72wwxzk9zJJrFfeL1qZqCdW3situ5HZjWQo9GpS9sCK8ZiCi8NHzEW",
  "key4": "64WhEkLHEEp97aU27oYYcHewrcfqwur6GHuUsZxG5HdQYYigrgMSm7ZXbiPRu1ipzKivbNDawjU6pS7YAAQ9jk5",
  "key5": "5y5Li4Udg255tA9C5cKVyvEsc748fdqswBdVaY1GDyv3Xr2LSifVo5wqcvpRAC5fvCxGaPPhcqFF7MERfADy88f7",
  "key6": "2RfxCj8YLs9wDq7AYxzWRn1GLYzw3D6yMpsMHfKhmMjrf7MdQaAuPXUdGPRSR9CTz7iNr2ap6oGD5YXK4nk1uibE",
  "key7": "zS8xcEpg6GTG7hqX1QoGEZ1VcouAhKU2Cn8cFv2kzhDJ51S7ajEq16ZYvBgUEQ1K7B28sSQ8bgPHsa8ZQBNfuQt",
  "key8": "2o9JQfmiDYwpuqqFptJMuioHXQAZXSLZXp2J9ZfQns5uarC6Qqc9EZ7HkS2Hh1dYsBVZLkxLmB743A29nY2kknJu",
  "key9": "5Y5KiPKospDXofV6N2LnfsUAqQhFohmHNt6yS1Cs3gPU9Xm4d5oPcXCSLvm6a5KZYLwpqDNmWy5JkQuiSq6rtWrK",
  "key10": "3BHa35BKoH2MinPXWmvixHG37py2rxauMNv85RETZvLKsDaoEzvv372gQPpCpWdxpK2XuBMap62LY8Nk4jay8vfU",
  "key11": "4oEX8Gjjhd8FrVvpYhMSxSaL8sLuT9X4PgsoDKtUJRW13X3FSZhunNNZDbNYEFfyKkcmPzKgk3Y2Z8vKqT77xgJD",
  "key12": "2fRrRpi7kMcEdCd1hgrWMFzy9rDS5eSKfnNk6Hs2iRdX5P7swH1AmpjVQN5gw3MzdgRc1QEWfZe28aRgAU4TDrkE",
  "key13": "3CvtVFiTt2DyKF3YMQc4GEWEWmK5tNHck5G4EsXDcW618gKqWmfHKa8eHy2SoPUo9D6HUzgUPoLFxuWYRrnGbtRF",
  "key14": "4YYTPg4WJDojRBxKoZV2YGdZRCW8MUnTokSNNwDDqCVZVjWoYFa8RvV8PQMd8iMR8z6CVURDxoJyGzDcnpAupowh",
  "key15": "5wMYMaqyLMiYbLQxYCa9TCp2aq5qHsUpRLoaxFD2PRgRbvXzQy9rBngNWipmg8vGCMmuiPs28jTktg2462eWojUA",
  "key16": "43G5p3QjHWW7hRfR34gmFz89KuPQx79USE9WH9kyy1Wfia94d7TBMaRrYBAx22iSwPxD9npWYuMCGHAfrdodGzBo",
  "key17": "o7YR9tX21iqYypwP9UHV5Gd4qz6ybH2F9n74SdEizWAoFpkrqptHKdBpHojHsPSwqCtF4QpuyNNY5WsAt5MjFWA",
  "key18": "5yFuqbFv6tS6L1R8GYvD85TYDyZzjNJkvnuQBYpXho2QmXEU6AK1GBzBCTtv7tdzN6G6y9Qv6yxo9wLWBQeF1E1W",
  "key19": "xf7tu685whRPZGb5qbf2rLzZuULG8gqAxLREu8uyeWenH5pnb668PzRRCvJfrvRRqs5adH8s1vfB7kNdacf9ypw",
  "key20": "3vsj4dXJxTyeuMTY1hrzvv2rUUiX9d57zRUzrcXokjwz9U5JvVzi6uaSoXjVaQVQ2nmBLc7X8K9Mno18sQF7y2EC",
  "key21": "2eiJmFWtStpERZfNHBG1LkRqVfFRM6WkKQn2ccXBvTYo6kUAkJFjJk1z22A9Z4rYEYuQFbpVxaRQtCkcveCTnbgP",
  "key22": "3wcpjyLWEe3XiwAvwujZc6Wu9zs8iv1Worbvu18wx91RD1d6CroSCP1UapirVuvJY4SfN93oDXZfq6zPStbCgFKH",
  "key23": "2LnkpGUZ7xP7uSaRgbbo5ovQ43PJShr6LMhAUWFFzC6Tse7jA15ke92fxwY9SeyMsAHCoKb5pHms7pmEPT5xG4fm",
  "key24": "2uYDQFCLc5q3KVvqqJgptTguTayYwwPYfoapZwZcZZBLRj62cqpsQJE8tn2TRrRDj4fPieoJdihYbWcRjEqssvDm",
  "key25": "3mAk7oXAsZgPbMH9hPKi9shLWL6oZwy8VnqaCVj9DZ4fi3tjqyoN4hUQVUCVraR9u9wJaqUTCnTyerg1rzqf8EcU",
  "key26": "4Wmb8HcUeUnpR7NFhoZxM1jQJfuJbR1qLxro61k7kz2KWLhazHEfMHe8ypjFLvQpY9RMHDGPwhunXEwj5yxef9BD",
  "key27": "3fYMEYkeVnbZiqLFBWfsoHKi78zuNrnNDtjJgkEyREGDFJCwvx2Wfa4xgJvBQUXamh6shmPBDCiBrt5GdKTyU6XZ",
  "key28": "CyCsYaJu7EJpfbHqdALmhjoafTKtK6y5CceGY8NU1yVYAq3RuKJD7Uem7bH94E7JLFYsqTEpRBUhNkiSiq8kq9V",
  "key29": "5XX2qM9hCibNECdi3fLvp7ZuP7RRgVqxT6yMtku2D84svobCjmg4LkkcDuy6noMD2dEoFrc2QxQz2MX7WiKPVLoT",
  "key30": "5Vnkgan49GQFtaXXBFu7eM2ffyK5aYey1Td2RzDxNdhsAzHA97Cnvx2daEr1G6qHTEwaPR3CUdnjakj66P9Ui3Ug",
  "key31": "2qNGLbzH4Pv7n5E8VXbQ8ea1vyASBTxYiMhmTUfU4xLESKxvYEpeXWLncMbuiTRw2ujvA6YBBpfox5g3GNAkXkei",
  "key32": "dru5foPPsddZcev8h65NiogknXym8yPrLkFyaXj57JETaQ3HxfxFYz26tH6mH3qWP4yH2JAEwa95Rp4NS2irf59",
  "key33": "67Br4WqMc85V6uyv3ectY22ASnpa6nWPtS9ifmdHwxdotdF94fCApUPVrN8jLK7ikBsPJa6wWSsE8dfyM3QSGoA5",
  "key34": "5jYfw3zpTuRRVW8haVHqy4Y4MJnh3T95GebK4CoMgRA5o73hWuBwQXfvnL25WBy9cvaiPFKhGTG4UxzaME9DBQyL",
  "key35": "6687CGZN3TxxoAgoSxMX9oStLrrprsUGfWdveAw7dDxU8bDZQ78aoBLsj7bHnuxxRsweU7cJZrzUee5RPsWcYWcg",
  "key36": "4FmXXjX2eyxhkDgRjWJ1NudF5DwHdkXv3nqvGeE9tARRwx8Y3aeHsezK9xK7jrEoTh6jEvqCoBziwrexJGD2CgP3",
  "key37": "5noL9xF13i3A2amrpRdv9qG4j7vMavzTaZRr6Xcd8jHKwJtQmBDd4Tc2cE78h9HDDNBcR9MDJsgJq29RvXs446L8",
  "key38": "26MSGBGx7HSHSyLZrmxec2c1gCA5FtLPss9mD4gW37Z4bk4sW743wx4H9n7NYX17a8rP7XkV2it6vtwpESRVPaAZ",
  "key39": "58MW1JpP7FEpWjeMhWBqCe1PY8USp1ktK7J6HFQg1LUbKVvtLFXj8Bgn6UwfbVezmyrpqCog4zW1UEZm7GoEu3r3",
  "key40": "HzDRkXqazi9nNt5U5VFEiQXv7gnAj1nuZ1niqFwv45aNPdJ7bVqvt7gMokbZYJSqXsVV8XHSESsYVSjpdkGsxGg",
  "key41": "4XKezsr7K62LUBJjgEgYZmwbhGvJQq1tudZ8p8trgMkrz6cqHzVQ9judg6Vtj3ACfy2TD23H3Mr61n6T572SuNZu",
  "key42": "62jRpKRZMCKfKx9em3ynSw8E8GX85WNC2EhfWjXe15QbYgso3oWgiwUUu8DmjXKNpQyC9STSc3XcozafXAxG2dUd",
  "key43": "QUfLLjUb7aEFLbsaeDWfYYvYQbwEeWc7CbgAsD1GtsMjaD6yk9rfi1u65ipFuhXxhmBfeg4yMUevyrLYZfS7pD1",
  "key44": "KHDTzoN5xz4G7KyJPVS1JEWZi4dxDwgStiUpDaLBpAeKTXsXVNF2q1E9hGbQmxyr7oy5yMuEEug4xifKXaVegz8",
  "key45": "4PgLwAA7ZCYj1DVEwpMc2PtvaV76b3kuU3oUyxUtiLUZSAHV4Jy2Wp6XACi2vTSUFgnxKSnVKeDizut7L92mtZVD",
  "key46": "5Zaftz4GfebKxVv5UqWwaijyhgR7XvCAYQbMysLVK7EHfns3o5EURoDBWe2XGhA5MwDEMdUD3npDWneZg2UVvPxp",
  "key47": "3ixHTZWFpnZ9ewE7XiVWzNFbTwqxd65zXWyddCEFNBEhZW1WK6oxrwRuizfScab8QrEwJt3vv7Q3SVa6MP6cczq9"
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
