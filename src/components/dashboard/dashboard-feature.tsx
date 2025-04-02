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
    "5FSZD78JNVzUsTanBa1pbcxyPM6VWpW5go7JzFshrFme7tPeENedxtajMSdxbCPN6vjvXn85J8YCBCZs6RsmwA7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nx1N9bUEWpt1Dbork55B8hcdJCZgNh9aa2L3PvhBjukFoLaUg7ckppvVJ42AZ3Pu8psowagotSuUxdegWWwqxeP",
  "key1": "36gYXQjtWw35cWnicXSPM5vaFQf8PY4Wc4y5kxBaqeqr9hVhiyHQ9zbED7hx2NRduxy878dXAwumNkVncP6eGT7v",
  "key2": "3ekn4ZDqU1KsxKboeaPD9VAWcJWswWPmiAudunmiCpBNTKMczPgNcF8Y7XK4QNXyjb4LTghDYZFMa63yqDU2NzzB",
  "key3": "3Nn7zQ9XfsJ2Ps8BvzRwR1qYoK82D5eJrkG2GVeCT25a3HtWPqNzocipKm3goTWtyJEAtkBYCfWwAoR2Nts8DAGr",
  "key4": "2zh4KGrEwSgd6XBhqRn4TLeBJojRgxWQvTMzCHa6EBu88wDVVapU74fhTUzq4ZqmwsbvZ3hDseANiohGC9ZMCAhY",
  "key5": "3G4QrK5FuTTYcAsUXQA47ALuQn59PnC62je3n41quFNstFAfxVkm728UiKhsZRp3vyMYSgAptWr8TAsPwzntjhGY",
  "key6": "5cY8a5byWRTSc3t1EjKBmMM4aHZXQTvTssfvw22kK1teiLHTRGqPXgUaxEy99Zi3vNyG1gbTMzGB2GLu9nz48ARK",
  "key7": "33o7TMpXLcHMTSqCpFK9XiEjk1a9MTzDdc2hAjpcDhB89L6koK8LNfc7GRzgzPpmd1brTyxU3g1bvFEpKtBp6env",
  "key8": "3aXdFoSJGao1uhG94GfAsV3pWiyfsJAdC2t1DHgBkk7dSmL9cRw9tDedoV5CFs1baXWVvFw1s5pr1fBfG85KBu2W",
  "key9": "sQ7NdbiHQqR599YZB747Z6a4huftMRUSsbEBCirgz4jTM1qdKst3GCq9q9hML1cwrMCMjnmCUKB8uLoBinNALJo",
  "key10": "67XEwn1haqGbzn5UzJRkEtSdGLYFkzsoNJkDY6bCAjKECCSrZqxeb7hmNExfGztbhUjZoowku24tGW6AiqkTVnY5",
  "key11": "3HDZhF9SKMmUadsyka5HhXQM2mfuNTWvAFJkus4kLjXaRmraDiiFSPjYAfGZgFBkLePfMTG3AocWoGKoMyppHNas",
  "key12": "5TdVNNd56qquHjJ9Ktr165a1qZN84zmG6NdYxajgU3MYe1eK5qa9ScV9YR41vBVJo25JWNxqLvpXiWjTji31JS9C",
  "key13": "2PDAvLYq3J1D3X3sauyiJNTPdKgoCncxxjPnsUPchDA4pjK9NvtKLrvH2MVSMW1jPJyWz6M7P8p5sHPdD1Q6hjRp",
  "key14": "3w45CMXsvgqiqimFepUMhegYzwgZntFu13tnvRpXCyPjUfgcxXYBwrjJTthUNSWmskSey5a9BTTrTbmqFhdfniSF",
  "key15": "4UdH6fGwnUd64qZZxfJaPFcsPod3XTiR3Bh72cEhntbNT1cVLc4BzsUNbojmm5NE9KqJpHdfqvtDZutpCV2WKi7u",
  "key16": "3yRofk7MvzgFLyYUsJMTCYKeiAiBNvtr1yLqSTirzxPShysw93phxmW8vFo8JqfAEGYsipWEofrgsAFnXiU9ivm2",
  "key17": "4GXcpCRC3TpZunAENMqz1h2hzA5gwSQZPoRKfpEuhmLHRtZVRhj2kakRSAXY9LUb6raSuNK79xmDxM8oGaKH32wj",
  "key18": "4MUxbdqhqTspg33nm9Nf3TLitpzUzC6UR7LAsSkg3ZdqsCL1u9gFVpo6Un5an5VXdhCW1JVNBbDi3faFuk8TEi2M",
  "key19": "332V9KPTAjiFhewUKXazNoAWXCby9V9ptNHj1E99JnpYmtDUsR43JkQ4TKA2RRy49XyJUX62EvkCNGfPvcTtdQQG",
  "key20": "5Rk8MGcCipRXyMtaTksVchw6LgZvYxumPrhS717D8GYfzGy1MVhDRA5guvcfvt4emx9uZmFbFqtStebqjMteUBAf",
  "key21": "62mZagerChQQLYm3uvEU9Bzf9iazPeKSSsTqbgH93iXpTEyAEPYnvnet1JhRivm727JFRLKR1kgVBDfN11AHW8Xc",
  "key22": "PuhfnVKvRZXi9XD8FCiJVdvqAJKRELuhpTZTG6rYDpDq1GFwHoYTZ9mKqEHz5TFn8ZgDins1zJNwSTh6zU7gtp9",
  "key23": "3NH3KqE5wdPYLo68GeAmjkHgy5DTkNJzYqppPqqXuPZgku4PXgUUk16HcdDGJrvrGofbv6vU7LUKHmnwEvf9yU7A",
  "key24": "4x2uQtUZXpNj6m1uDo3SWcnNnce1ruXddXGa46kuX92xx7ECC8aXi4Z218o89uApsRHLe7DCzw57VXs8AcwM8E14",
  "key25": "RyaeMUg3L3XFrPvZjZYmvYf1zFjsh7gZPsUiPEbmUuidiSSUNAB2QatC72wwk8DDLzRpkBZJxHkPAzDUNXf4oPd",
  "key26": "4L8EpqvFcvrJy7NCh1Q6WeiLRVib2hEGoZKoe1WSdgCELcFn5atguDfesvk5N7WVaEYQmxLxVn8aKDiwbUxUYCWu",
  "key27": "3u6NqpHdW8Y5ukupnYGRcaijHhRoJUB9J9aNSNhBHYpcopSMe1o1Z2weXYVRGuSG2KNcC4C3NS6cLrx5Bu853Kxe",
  "key28": "2RKPEfFzHbqfNzqrxAk9tiMGEoznYscsn9EURMjnh2zbsZcETfHfbGCiPK1EbH52QvCu9eyYrzDojZQehqMafXLr",
  "key29": "hpPkDyFozrGJ5W9VpMJsL9d4HuoijdduCnakBcKsre9mWSUdhtjow8vuPXFULKFPerHSQtryWmZRDtW6HEiEiRR",
  "key30": "3cvxH4ddR2iy4Xj2d8axeosEuaWEeQHzBzudXWVdrNRdkKwVR8XRFjXPu7LswVPrd4C9oFv9J1QXc14W9Mof2oCy",
  "key31": "2M7BGEourph49foQwGaHST9cyFDHq4JZyKnJA8aLCMSkGuinapwzWvLN8PTPQtJXXtt5n5jNEZk17DzMjg7u4TpK",
  "key32": "2UzkQHitSLiczBK3pM2MSENdvFknn2Mg3oYKtbYYPd1bnSEdJPPmAw7LfCZbtvwfQrPomCrxXWc8eS7nBB3Yxx7",
  "key33": "3QDkLza5gdp8cvuenCrzh4oUA2cWoJSsjqmysW7QzF7hjQmyg6yzREUmsjD633ZDsVKVrQf7S3mbGPjSb1N7GAHK",
  "key34": "4hLunXMRLLfPKXBTxKTipVRpvYwPrVfFRswbyocmZ9BpD9s5DomwPktqwY2Gb2WPpL1676Pm969hx2TbtN7oZUGj",
  "key35": "5kZZhpCoDjpsaE5LWR9iTVDzDGsVXRR1gaX6tn8MR57dwj8Wm8gb6TAf4CYEwMVhBxe54h5ayMKn4NrEhxzmwqpu",
  "key36": "2PHTksRscosAW5EXoun1N34a4etAhB5be29QFcCSojrXFw5kWEbt4kjSsQo1Pq7Ud8mAhk7uatCD8pSAXD91ayuV",
  "key37": "2S5dScLHRcyV3qdHBgbSPrPPtXSzH4P82mUGheSmtzzkAwuaRv5iKP2mEbTUaqvNp3iBqZY9FJzNfHjckFK6ke5P",
  "key38": "5vFv2MqTfTw1erUhHanNTzjvagU8CrADrG1r9DnjLsgZxwFNikgnasvWmyT8rwDq7dXSr6zxbxqb4vxd2ZAsUxJU",
  "key39": "2UY3yUyxovVDb4TomPViJB7NXeZjezTXCX1GiG5Es2Nhjij3tGjb41xPCrjuRUV71Wr4pLE73ArdWaEAXNdha6hY",
  "key40": "57LBJNA6pYJa69tMWyqo67tBosXFD3q9aYq93NBzRZZ9EhpzzH2fekk8p5mrmWCAkAddyGLULyyh1PTjnopH53H8",
  "key41": "c3NTdc17WjfjgUx6V8oDgvPQ4WexhWm2UeTZnMN68nty3iD3wpTTSqfeLKELEK5WVDHVVJhBqYTjJBMjZ1o9F92",
  "key42": "41az3kyWJqU6fKTErngSgRfgKNBGDb8FRUdThtqopBbgpyapRXUQY7p9cCwbdU4f3mvbr8W48ANzhYjgf9beu4eE",
  "key43": "3XNPKSWeKWrp3bC5BGGDve8NPPp5KFjf9Qn87ymxXVaCZbuPUXjGFCPZEiAg8UfraoSWXnRWXGM6HdHXBvcckBmc",
  "key44": "YdVsL7iJpQ5Gn7W5Ghn3QN3iYpAXmfgTo9oQmZ3TkhePUkbpR7UWRSL1VZumFDvpx3CX4PzU5Z1DuhWyfhLwG9u",
  "key45": "4djHzqdDgQ2kwaHJGsZni6gBUWjECfdiCUdaiWFenBoGQYXHsPSdFQDsUQ2eQyduvrY57mrs7k2m6BQBdfUUDmMW"
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
