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
    "WPQ8PJukRJdEUU9CqxWMjsMXitpWCPmVUC4ds2qAud2oGKj1XP79fo6AqtSNnWQJoWchRvVCxzwaw5Z31xvv6JP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m9ut8aGYJZKWF1zvNz6SK9qebSnj9Ck7otThj8WSJd1go3PR48r6qgqFjsNcAXuLNoNPKhHXsCxUjZfNuR78Zqn",
  "key1": "34aauA9bmUyK4oFEidx28ouveGUxFiimZgktYyi9cCjwDs7tnDEHjSXLvD7Mn27WSi6y6HSDGzGMmPHM8FAkBW71",
  "key2": "52KLrNHospEBJ4PAG4PZL6vyvamRApeKUu4JrdMWZu7zzVxJojbgwHDkMBBK9ypjxjg5N68AtgcTKdcSYZ2JrDZQ",
  "key3": "71dQMmETEEBNMH2xDaTrHMu1n7bMw92ZTprT57VkQUQHje9wbfQQeaCNVe4Tsvxp2mWhxAZk1cW5qAn2igeCwwF",
  "key4": "2rxFMcCwZTo5zZWz3ut2EYCPZiLkVERxCbtA7cm2TMqujtpYstcPajevwbe5dBhrfFuG7HnnkjUyDVUZo48Cijyv",
  "key5": "F7XT3vUBvci9NBzGo1Dr2jrqkUw6RkojtntcdKbE3ztP4YYysvaFzJwhA8WY2aJmPBL4VMitbguNXtLvNu6n4pq",
  "key6": "3wriAY5zT5xHXSwAb6sXdFyCeWEfFUU3LVziuX68xTumFDjXKtSyQqGdSJcTUGp6a3y1zwf17yA82aEyv49do4FR",
  "key7": "6mTJcTSTcDcTj4Bg6AWXNx1T3Pi12AA2Gv4Xnx2sP3XcrkwS6c4Zpkb7hfsBM6q91mC2odtPnnFDMXkSrXYArrc",
  "key8": "2qXckuQoLUWJ5udsV1pkba3ykUdF1aeuFrpXFJ7QaUYEAQAPU9gzU38G27BB8ZPz79T182YL2jwdq5ihLhbcgzCk",
  "key9": "64x3Kv6WxJ9Y276jiumtQ2HJuZFCFs9K5e5bgR4hEiYW6jDpW9TpEpw7iMJw6rkiDt3yf8zz46HTUYn49DduDwso",
  "key10": "5XkXsEypvxLb8q4WkF8wahhrswvNdFo73EMqxnPeaNmf4MCvJjHYc5Fk1z2s8QQzAPc8zLzghpq6vdesd4Quk3Jk",
  "key11": "3GBBaGqhei9VjkoAGVoC8uBhN7x2eG8xGEe9UWWBN9cWoLTERQjNJ8wq99hxGqUnqhtLmA5oX25wZAGEL2uScdnT",
  "key12": "2xkwi67gFGKMVhjc2V6XpXA3ctUDirtV8XtyEZ6k1GcbP3rDWu3SuRsx45uKJDD8Q9ZJGodM2kWWWwPPfcL83vLh",
  "key13": "3FhpZ2KMK9xj1BBYPUBfxvPSamhckrQFWaF6dm8FbvLEGeY33wn5gbNfTaNd6QQVQQFFbTrsncV7Af12pjuZ5fft",
  "key14": "S5Kk9yBqt596rM4BHKyfZL1cRMUwvkFXxhGcztTp7TuXpAo1ESoXnP6jQpgfgQiKxaMWU3rKGKMGXGNGCFnJbW4",
  "key15": "31AEWdrgAgTmxyvZ5uAjo8NijyjYxdH31ihNRi6eq78exvqoisgAoCJCrZAHT2hkXH11VV3yCQGoFhMcHbCLmKaf",
  "key16": "5uLB4CgGuc17M6ZJsZ3maroKEbcAjBy9H1zManseDjZfiLCsAxfiVdYftqdFafAhuC7deqNUGy5ZDzJ7v5nBczN5",
  "key17": "r7EjzbBn2nRNQm3iQ3wJ1TjmtLemwkusQ7WtWT62SfCRUhc9mC2CpwXJwyeFP53t7xgQrjuFBz19ErxkQhyRFgq",
  "key18": "5b1rMcDiKLm7NwdjnaNwFVJa881JzT18FTRZKFo2pGucrNUmY5Edu1vVoxHW5sgRC6a3gKGAgjg5prgoWMFJwK8X",
  "key19": "3VKmSx8DreHMWBef22jRVEpV2xXhT6SGRSq57rE6RRCN5nF4vNyvBHLmuAPXPRHpfpPHshRpF2dj2actugFeMc1t",
  "key20": "2cZ5ZkgCgX5h12TwBe6xVXGocApBZR7pi9jv8AV7WVUKfk6kkaAShxpS25KFAvZvqCWkYhUkmz82SkMVxzAxH2Ey",
  "key21": "qSueS2vJM39JYCMmdwfPjao13GjxGcQcpArZb4bDSwGy7dVCh1ReaNkdM6XJgv9b57Zz1bksenjJz3VPGUtWxcF",
  "key22": "44J7sjh9w1eaijEyW5yugqCLGaTeuULPQX77YV1dv8vk4tsNC63hXpvNVXM1rHChLQ85rGEMrvLnVmenUddxEeX6",
  "key23": "buZtYQYWLQj5eQkw3MoVRJ9Q4RLwBP1RvGMyrxizjcXzaDLxKkGLb3K6LeiUsSmcTRZ5yVD79B1JNYYr17aZrRs",
  "key24": "5oBYAXpMQ3XSD5YGKLymnpRj9tMYuMqdjSUooKCbzWomHJiL95DvFWyWTsFsoD35u96F5DC8kAbDHTEnAVQFiR6r",
  "key25": "BCsgVjkwU3xHemBKUCzsxGed7ga963RXoVJSEmzza2vH59bD9QjcZH6aWAADQg4jWGJ9XmNN6qrmiPWMC1LuCX5",
  "key26": "3tPzmE3BhA9cwdeNDeMMGqqocjfiPjA2kVASMqAMxZtt9wTfUs6icwZWFfjAn6mu7BDAtmLnY1M5mFbcosKdU1gc",
  "key27": "d7JX1kuTcZcDrgzjHrX26DMMeT13GYjM9UVMPeqN3hcz2JdQEGchGi7gCwgtToJS5gYwHMyBz6LvBHZdQPDkhdM",
  "key28": "5LQNQiwatt1bc16NoTv9qm7rFG1oJjJUbrNRhoXkVcHKxd4WXWoiqwdbppWQ8Eea3woep8MRhFWEh6DQbs6FaKzc",
  "key29": "3RcynsWtocz2SZJjc3o2dNbdYhXUQ7yRzKt7vsrC6W4W7axm6ngC5ru82dtCnM57WEZfMepb1aZebgHys8UHzXcP",
  "key30": "4DpLA7T9GMdGdUQyfn36rNuUnwjcDvgthcoLTR4UdgEP7HkEvsHaBdJWSMQWugEJwCno58aDhvX7YVfdfhGfHPta",
  "key31": "3ThknNdBUbNy9CLXqXJRxRNPVFb1MRiowKUgKBGQUvBezBKevR3dNVRdHtYWA1rH7U3uGkA9EnUjsoaAY2A4j4Ln",
  "key32": "2Bwq8dtXEBXxEpetTKLquZmwvkQjw1zfAbe5oUswYLGmkrytt6rMij1AmDdJVgQexi6tPauc7qmrWMrEupaGbPV7",
  "key33": "474Dc1XCbNrt6MxVTUFTc2yMs5L3Af37DHfn5vMskpiJQf7RwmVhgucm4od4ukFgnHoBjZvYcE86GhzrgfXjMqBQ",
  "key34": "3WC11H6b9CWR2WYkuPK3RVwPaXQvChtzjHpEZFvy7G2reoW99h94fMhQ7Spy688HTm4cK89kCR5xnxyzGBCo85K5",
  "key35": "2YScoFYSoWybNL5VnndLA2zd1NBx7aRuYyawugvVpHLhNFH8JD3dwvuWtHWHrnEJibJ8yZPL6o11j7VEBNBJy47e",
  "key36": "2eYwjhfZR558sRgVbZ66wGigkj2utF788pcL9oGWZBzd1fexLC6hgAizP4E2V6UjtSeFs8NVaF2XueF6b13Sumee",
  "key37": "5xxrghLhBVyFUc2moTa4ycRwHKuWiwG4ok3ZtvRiY1o1ugzNMDtd7dKdnmZ7ajSYD3LPKR9fYNYYkSAVi6QAaKvj",
  "key38": "GvkYBi5h5C5J5EbMKWeLjQjszRaA7smkxpCh5z21gepxV3p2F9Wa9DeyCWX4ihcy6NSVcWtvnfsDRQhhL7XDGKu",
  "key39": "4XhVDibf9HMJYjfsBaxi3gATbQ499tmz4MR7SqMrgRg67LfsPmN11XNUutiYy8A2Jarhd5zt8UkArEJ1KwnSKfhz",
  "key40": "3pd3Ei1t7dgeugu5N1KRqsW18nUdJDmePeuUDspbSLzRCkBXJSh4r5gqSeLbRjXci1GRkC1iCmxiCyqng6NN8d9K"
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
