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
    "5T1MvoZ8NE8AwECt9BaKJTp3dgrpBcVb9LN9xEcGt7BWhK9HYwKRyQZKkaNyDX5qjcrot6aWrkgQGk2c34fEWMnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rXzQcbTS3irZ6fPA35H5yvK6fdP3G3kanJPdzjurK8F3mzLf8mCw5WXxLA18aEETg9R7XzS1kkK9LRjSYAuDRSX",
  "key1": "2vChtHUjjsi8q6pCfaf8THhHM9cDiomiTnkgK9kfVp4P8o2db7ZtHtUepcFK9YBY7SJTnAxmYGcyPY8vL95jqc7u",
  "key2": "23gjV9MH75QXX2u7RCmzsdaTVEvT5WN3ZapViYufrxaFW1qPsKkoVp65K49pZsu8zZcpNJtUZjua8i3jJs74pV3m",
  "key3": "K3FpMZkA18bCbEeyZ3KdBeJ2mBPsC3f5KQdvK9B4sGmXmNkwm2PgL2uJEXrWvaTAEZKiTiNqhkFDnF77tBbi4Yc",
  "key4": "4vkP4nzbduwn7UD7Gfy8Ahcdg9tE4WHGaYaBsNoRuV82tEW7oBatSBvgkHBcfZh8rG68u544PDCuposCRdiLj2BM",
  "key5": "2tZQotBqAXH2866ZkZLDfDnJGkC152FVHnrJ6f1mjDnQPVFEg6LSABrWMvGLyb8j8YbUFYs2zk759WmQXuj5adaX",
  "key6": "4v5YriHQMqtgt4Q8Tzf52Ex6EGdjp1NBypsmufor2swLCrzijfZQjD4b5PNRzh3iUa8mXFFyjE7Ad26WLFSB2BEA",
  "key7": "e6srhzfuk5DwEQM3GGgZzFfuA23d67GniGW6D5uQ5kSDFHTjPyucQt7h6mkZH3NBvuEhH2e4j7pBfE4X6PVg5NP",
  "key8": "4rB4voDMBzS5yBjRaUiXurbJZieasPFXnT8CfCMGJF139WWfgVgxKggozeTskkh1EQPAdoxgBDFZhfzA2dSZbR2n",
  "key9": "24acDjEqJ7t3Z7KYKf1kpC99QwcTi3i2SSJTbHMZvJf3GTgkkkgNmRDfKRUu9tUysPLBq4WobxvwUoFQFgL2i2RE",
  "key10": "254yCnvPKBAjAabsbyzDSkwmvkzRndE7vq3nNUrhUNucuRGbX4psqQR7BQo931vsdLaLjkEvkTNw3wme5bUUgaht",
  "key11": "3VYpJMCA27NXwZEntPJq7RqU4ecv8VHbHgMK1ic9uR1xeQi1461Y3twxVamY2TMaVBXWXJwBzEmjYfZCSZNok2aE",
  "key12": "SQp3DZcqVDTmyYrAeSRFxf1D3aJuH29CXBDHjzPZbnawFtNCgnv8tz5Z3oj1CUHr6mo9KbNa3c15aDh7BKoqF7K",
  "key13": "64cQkEr7zZ8Bdfmm4BkkSVEJtkGufC5CnHAt6CG69DWVzksFQTNHmMFkBnugtSEJJLP9jibEqgyrpYcKvMGXkYEA",
  "key14": "3oJykNkdbcWuNpU2DNjFfDBu64x8eogwiBMSc8qq1VAsiSHysNDjic5uSuAVr4nneR2TR8SHaAnLeqLpRT86Er32",
  "key15": "UguCFKFKyhJ8qMbPWYoaEF8q4s3BbMjx4JnC9zDdLUkizLAtdgWJjL9FDecPx6MJeidjFRoWXywRNyJdjTJi1a9",
  "key16": "5UPGjMPoKR63GWzRyZBbBDEQkH1tUGjyTsHw9DSdb417TtV546ZgjtS2h98cidHno7hHL3aWt3b9apupuKViuAEV",
  "key17": "5YtnmbeqU7RJs2PjShXyXTVmD3GAMS2xev2WfP3YiYCa18TD4bC7esLt5yJBqrhT4pUX6n4DxUL2YZiWBFDpQ3gn",
  "key18": "3umFCVWVxqBGZoCeHtTcEEzvB61GGpyEafK4zUgUATXU3y5HtC5foH5rB6RtSeDF7saihsLcLGnzSu65w3X6Fa8V",
  "key19": "7m1MyZMCukh9FJuSyX4vT988nL7nrCZXQW5v6xfkEESK2EzmpjbPkTURACknh82y8JDvB8CFmw8xgpYP2YJZ9KR",
  "key20": "3iQmuiMfpfR6rLu5Dp8VisS2MnmovBL6cY5cjAgLwM9xgj1uzRBfGcXD8JMQTjFTYyAigQiJ7ph3YTEDvGQQ5zA1",
  "key21": "45XGgDRCUAdRfUBF91CkaDxF1hnkVbVissxyVcbRerneSfApSNL37kor9CaRFVBEnDaYTziMFAyUbtND5ZXMBVVU",
  "key22": "V9L4PkhAt1bNSrvwD1whwthwQP5mQS4KxzXwq3Ag1smZPgkqzpv937aPZzDKxniNPzyEKz5skRT8YUoF9xxTLDx",
  "key23": "21gLdbPg4GbTwUKos93y6ToSbQWHcCnuBmMgxxqXXmJik1oMxCrJJdiQKfKPjEHgs6EfkHWk6s26CS3gBg97gdUJ",
  "key24": "5qqcoJPqe4fF4NNtCeZLpk3qb3DXANxxLUAi1hAw5SMgF6VL5igNptpdpLZDqQ9iup1qGgf8HP1fZQFfxdxRBVJA",
  "key25": "3SQ5cUxMB5tt1TL8k3qv1vPG8uGJoN2AkML9MiV4w1th3FD98hiD1wzA9PJGcT6a1ZKTtbZmQ1Ty2qeQ99Y12PH3",
  "key26": "4YbRW9BaY4hxew92dHwdRbs8qotm4BHstnthePCmDMro5eB7p5MS6pneGxHgn4qKXGud2pubwnnJVcpd9V3xTdGt",
  "key27": "5g8gg8uiBsHVNme2QNGiqeuNHY1ym3UvcmJ9G7SSGhWHbvAD2mNX2MszstTaBEgfhk8MbEMP6bx5ub3wUGWWT4L2",
  "key28": "mj7TjpmUgS8ux2xHfJvhq2W49oH4NvoPDDyF2DvjqeigxZkSgmPQqsHvwGUoriF5pHU8t9FkFCa2sVJ7PuFBCeQ",
  "key29": "nc6sz2LqQNvcLrmM4YppH2gT9vpVCKWgGdUCtNcEAQD76p82yi3UZCQPhbKX9mLzCvJ5xiAq2kjGZ4dxrWXWYCv",
  "key30": "2AFiehfaWoZHkkAQbwQK4Lnqcms9GATZEsWW7A28vPhmp8yt3KB25tBsPAjcwFJFycPS2AjFiNxfS6tnWz2FP5Bh",
  "key31": "3SNmZrY93L355cmTc5FBB5ZBiKHDpJppxhgNx37WaGrxrH94CsdaUcoE5BcSYZpejvnBqvYt1v42dkrvPJUnxwDE",
  "key32": "2Zpg8P2TNFPY6CPeMpMCQrWkdmDRRpgio6E8LBMDs3DYDgkvr7f9os3SYA7muR47z4o761p7SC2xXPw5AzyWqeZx",
  "key33": "SJkYiLsNWXrTE65rYPAmHmr5r6hWHpSeD24xmjBkNRbCnCCL4oikutK7xGrkxt4AAZzw14MXEHbaZrkB3aJ2z9h",
  "key34": "Ub6vcMVh8VKMg2t7CTS9ubqCvhv3wP6M8m3EsQPQEpd5SGwXQWbruoEzSyGn2Z3nVpL5WLYRFQk2qp2AWGnmQR8",
  "key35": "2kuyECEpqxJoA8kHDVMViGGg29oJDAZifMPCAUuSABAcgLxgKEEQPaiuqapPfqfei9PHCEMtP4fBd9qzwqC7tpJa",
  "key36": "5LxMWpWGum5GYbAfHdnT5qo2ZncSkGDg6SbmwSBKMGXXELsZMLNwciCmwz1xa7KtPYzdsUJv52YzXi14nutXahCo",
  "key37": "45xr45a4rLi2uuSAZuDSZspSfdA5KSPveVzC4yWGqi8bGcH6YYJ6qFc3o7Cr2JrNXnJdxT4VicfF8pkyz2srCozD",
  "key38": "4nVndhxWV4vMvP7jjyJswAqbgf4cWTnrJqMagZ6TYmRc2m73zK3WMA5R2A15JoLYFsiHCjLxxFWNe4jYbC9saUyH",
  "key39": "25tq7T6FUhvVRDr4zjpNgvx4EuAZPEqfwRnemXkEZZDJwNP9U7QcUZhG4b7uQSF87MCwUZt39Nn7petjiEfKvFPx",
  "key40": "3HoQzkJTd6D3KqFGiZhnSm3yoTZxHixJByE3Q9uMygxobwLW4z89RpFyTHjYi5DB7MV5Q35vJGbjytfxo8KStHtV",
  "key41": "5hpyfzqR85D6EQ1gwvJ7tbLgydH1xKopHmPcFP2uTcmnS83wC7vBEBbrYGaYA9LqiLWpnFtYfbiS3aCVzZWgWiSd",
  "key42": "4xzKsDSN9LqgrDPsdpWzDGo35GBLFHrRyMoXLFvCxmfjpMrBCCEaX7WJn9kQm3UPgswZZn8bYNMADjRpMeEnCm2n",
  "key43": "M6q45pJerktKV2C7uArVkvWvpNFqsAQcbd6gSKA9hHam1rVwhQC8khe3XU3QV9tJLdPuHvJuotmdUwyUrD4JvHH",
  "key44": "3ATxxju8sgGuPDJSkY2jAP7xfYGyorPKmByjQGRva1t4csoZtacUT6TyvfSU1qN3SHbNaFzc6Bs4VmDMsCf4WoBK",
  "key45": "5vsC81CWgcUmCL8P9guyWdSQxB94ctT7cmaKdRsPqeNVwoyXusayMq7sjYmBsxciq2X5SLnWzShCDmXa4bDMSrdq",
  "key46": "5rzWNrHDETERLQAS6FgeVqKRKP79bRDeJkq3APHLgVQ14hbS2HdF9rPyxzHaEUtChsSyJFs6es1aTxyZMHUcReX7",
  "key47": "23hG3CFCnK8MCtu8pXFuek8ByMkBBeLuPM6Zr85d2PTj2P1GvkqrJFtGhTkr15fwqVvrCwFrLoswMCUTpzG3S7vB",
  "key48": "HEGFHo7tT8Wj8v9PY9afh3A4PpgeUVK4phaseSUptMKqKSq9zJYEh4G5cjCBsCWX6oVnYHqo5EcRxRm8F5sbSQg"
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
