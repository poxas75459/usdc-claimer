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
    "3bMxVd8tvwDXECUmrxzwseSXFDKHSJxKkHYWGHxxY7mtiETsAPxCP3ohQ1fPwK8sV5pQ9JnUZDJaQ3Vvw3nT2squ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28DsuwEhjNNyzjkEg9e3XfwbX1bmUQbeX4FrwmTc8q2dA5M2uoUHfKncbFg8RwGREdUCAyp6pen3fdY2CJNPwSGw",
  "key1": "3Jkk8c3ysKBUpDNMv9RVzz6UHXQqe4fqnZFWCEtFxXY8Bs1GrHNL467Q1t54SxzXUqDsJBTa6QpNsgA5KNXu5vJc",
  "key2": "4UG4V8rkX8ypDcvU6KL6FRftrMj7rLrM3Z75os1mqZs2BvFV3RV9ChcX4nJWEKe2nRkmJ4nCVp9jLiyvCb8vf2Ep",
  "key3": "4PQsajFqP8T6osWimQjF4DmSLz4y8GYDbCDqKx38teTXpQUykoLtDD9u29DJUxmCsDSUj6bJujWoGVWUpEFvsHgh",
  "key4": "3WEGMvMFZNcA2f85GCXcNHe3CwfNhcKvLLgYN7ArcWAKkDzu7KnqxgmAqMFZmpyuvYsP1vyBETi9i6Mr86LsgEaw",
  "key5": "2gLkwXQuSbzSu431i5yWvTH6pXihzdU7AchafJkDLcoTpg64YeUALTmzhuAgZtNwCGSfcwdXhaXUE7KFRuuQnNVH",
  "key6": "4gifLWnLKZkNuEqz6ZqKb3oH3YY3mJbNBT9Zxj6699DgcfQxV8QbUEBTTGbZMyPHctn2iYvZ9G5mVdTf5L5S9a4d",
  "key7": "3D1a2nsMrQRqdrcFzDb54cYpoxC4hKViYB1LEBRCWhRoQQmFq4yEy1rVSYqr1XWhJ3HxLnnXWW6A5ZuNigP6DhTe",
  "key8": "3C91nKQPnBPB5cCwSQ6WChd1eYs2ntCXyikBc1SQhmEiGzabYgwAGWVF8EA3EhMtpqeMbMrs6Fee8pFQLkS3P2dT",
  "key9": "2qUPvkf215h131j6BQFDAXQCXnkw5Pgs1wHkWbHjtaoTnscYveSQoatGNe7CMj11X17yfB7LUXthAnmEvDckyJ1g",
  "key10": "4s1Qj3GbUrnsQjruRUutn8YPD9Dp1JCvLJNGi5V4wSPnaqEJC6kRX91UM8xXJ6VhsjXU9ShbySeThfCjq8mH68qc",
  "key11": "21pHk3hKfUPxpcdruxLFU21Y7Sm9CuxgPRSR1m7kXFp3fPKuzQoW54bxwkPDaFDNxEcxgPryXSsQ9MnjMjHda7bR",
  "key12": "3w7Ckf3129mYTqFxrU2vQyQTdXmpAH5mDkDRaZiP98cUW4QMJuPX8g733pqd5i9AhfjNgyz5MXiaBYwEWK6ghmKz",
  "key13": "WNUoYJ8wNJ2PXom7a739sTTVh997uwsLdaiymbVxncKQNAY1jrgzHm5VfLSWbA7hY9rArC17KC7xRGEQXbLU6cL",
  "key14": "5AcuUb6VSgXBkU1dVwDXnBRMn857q1z3Z3zDC79AERCT87XzBidBwn72VHXeEUAuQUdE2tPQiHSwWTJHr7sPjVW9",
  "key15": "5QVMQ9yAXFiLyW3BCy4XKPMDkZeFciZAcjLo4Zgqwmnby9y4c6gNN3HEzK6mBxkgBbHzcWJwm7ofF1xGw8bty7cN",
  "key16": "4NESgzZCr6jJeXsQzVDpYzqw2QvqvD4K5vqt4qw6khVfXHqae4wMEfKiBFzNZfpQNgF5aq3ivDwVKSMSoo3irPaf",
  "key17": "3jpKX4jC9a8zR5d2b33svdLqNjtBXY96tYGjW5ZouS3Z69kHpDzewun9ijm5HhGEAnjqnD2ZvHko9h1ZjBRTjctj",
  "key18": "34sVsDdRw6F4ezCqzzKqgR917oocneZhhsQRdEQjS7C5DNJWg5DSdapCiLzhjAmi2nKtCP6XLAsPfbKG7cnjfn82",
  "key19": "4vdZeYGvjfFMsCmNJzsabhsTGxxtotyhjKyRnKQw7fHFWr7m2PKRcB1LJEKvAppQMTBfVhR27ymqfTWGp31NYryh",
  "key20": "pnxTLDg8F2EiGAhRcdtk9e2o8xZSpHnsepNFoFugfaHDhiFaLZ5d6tZwaBstxdYctdc1EjmduoxLr4hzXbN3sS6",
  "key21": "4NhGc9nu5ABoWcwe1EsVNiSJJPgTZCbd8GKrgCtwBs25q43dXGNzpEdbu2jwsRbEMuMuULc3o8Dha3t4qPyd9UVJ",
  "key22": "4Qwf45ga4sPkjpir6Cgp2ZCBUhwxi79drxviUPQWQwS8oQeFa7mY2cEM6ioNavZveSe1JKZxKDVtpZf6PMUvR2Uz",
  "key23": "45TJwfKLpd4Up2TJz1s7YXn6myytJyzenxo923tAKpdt3HWWKsRztw9MUgLsM9SyP78h6PTijFgf7AyFVqi5jN2Y",
  "key24": "tcXm9s3nnnzprGCo8YC9AE5FfLMcknknSgzEDoXRzW84vmqy8CqybGrXjK3YjzaWGSFV6ERVb482JhRVnrCy2wA",
  "key25": "4WwThDbooK6MqEXyK5v83h2pZ6XYLXVYRDLxf8fgZV7aMKy3MRYqoCqq7ewEC5vEniAVGTvjT2iCHW7BBmkkgLMw",
  "key26": "3YrfM6oe4tLi5Cmh2ooyZ3PJJi2RVPgedwD27HBgDFeyNszaacCfJ6LZHy72qFtD2f7TCmhMMzpg6ej31kJSGsEN",
  "key27": "5fs398UWfnkHNNmrav1umcGVKihmg4CH2L2WkDzyWxZyG596opRYg89Bv4qt4vfamBx5cKfF7dzR6Ev2kpqWfM35",
  "key28": "5JW26tzcR5aoRGDyrXC5qEthGqaTRbowfFhkaM6cNdbSE9aJKGuVEhH8GxWky1wkaVAFNPW6GPuWik5AXCyuEDSH",
  "key29": "2uW3VoF8GeNmcnVihwPdmsmnqNPGz9uwCQoUYKBjkp9jBRo5PSmSXEmmn4QApRU44jutDfTbqwXSgFfhN68zvJgT",
  "key30": "aDyn1Vw4Yiuu2NSmMpRnbTM6v3bJmnqkRkSwuGXrVS4onv2ztGTAnXAyFHjMHtrmmWiCGMe1u3GhwyusL8C5krX",
  "key31": "3ZJQsuLjP9BMemiSn2WmKW8hrrgAqkvfHkfTbBCDFtKSze5sRgxRUxHLG5nJ4efC9JSmZreC7mo5d7YfVgQRQmBe",
  "key32": "5awg9BQ4CGevn8HR1TdwzxN7EpWmbsdz9r9gjAdbVgCBS9qJewrjSWRmbS3jH9KpBcEmUb7aQV256a91CFb8niSd",
  "key33": "4urErhxDHkH4Adn8vf6epUPP1izKwFTKbWtz6UR4kzEjMsmLmWQkFR6GZNcf9pfTJk6hHqEgDuqKLtLvzFDNzbYi",
  "key34": "2wcLy7NTEWRYembvrVENsLD7gmzZmpR2beqqgdepSdWq5AKdAziz4gLciNp3C8aUc1j9YvJXonePNJS2gHvwGQr8",
  "key35": "4f5zNGx2XNi3Dv3Q9C254PEYSmqrhLUQZS8b8EfbuVSo56Gp9821GajFnhtUWuDxCtiXCoQfQ5sMJsR9qLmEn2ma",
  "key36": "bvjYxXn5YZa3tHmfUmHaRmBXBsYSV4MAmSwCqNBGwWp1orMUF7NPswpUs5xk1M48HHXBrMjKrKapRGhH82haNgX",
  "key37": "4VD13LFfpBRRKK4zwK4FUJmj4bWMeAswxxU4hA9S4Dx6qit3Bo3DSfWHcLfdUz2pjnv1epzARKczD52KCzNk92Aw",
  "key38": "23wvYcGb92ErwXN1Fp8kukUssYTUivZdNcKw7XA3mwYXxNkBmjQfUegTvM2P7zRVbLnnWVqExaeAu9drarAFWFn9",
  "key39": "33na8SpMEfrcnXu1cmyzaR2mir9anmB9myrnZtjGkhKBGYRycnduyrsHvRjYxf4pi631rP6W8ZoWnRueqhU45NR",
  "key40": "5dYtx75kL7cjSK7i4rJpkLbB4odr1mzyNRKJGyYD3NyyCPnKSkJREELqH183rJu3L4APrczUCU8Peafdwpo64bjA",
  "key41": "pFkpQggJKRfeQqQLRa68xMzYheRLXdpLfMTqC1ZjLYB7UU3k827uwr1hXspbZgZzmurNjmvdCKxJLNpMznDXofJ",
  "key42": "3gGcuLKjar4NN8gyYkMnDJbWZHjqRRtopaeGiEdB6H4pCo5DDSCeJKXyE13zftk6tpU7QXarjUX1iVr5s48Xd2Bb",
  "key43": "5MLeHvQ9S3ufSFBDitWgupeXVcgzfFEhx6NTkMwM7yBDuYq3zounUEHgyET2yPk2X5RhhAiCLP9E9WF5HuboY16u",
  "key44": "4j26JwU7zjMHRjg86ZSXucQv6xDoDiUULz6pr4c8BnCLTRfeXoQPazn31tcK4hJcxhYh7dem8FZpNPAADSt1gxME",
  "key45": "3TLGiuJwZzZKTUcE4vez5MH486YniM6xLtVirx8qYhxzadZaTQkki4BmKNuH22as6RV6e3Z6U8go4QQmwxqsHzQr",
  "key46": "5cPeRCUTbJsrBmn1o2i71JHeeRZR2CZddYEGevwrt8H9FXGTprt2RU2ZosXRdaPNNQbxHmHGFip3Ey2KoLnhqWD4",
  "key47": "27QURPcekeg71vqYJgRcZjNKE66idFuwN4XU53KbqnZKTFsiYNEKHVG7xfaw5JKqFnt56p6NKtXaN4db3aBxcn41",
  "key48": "2XqyTihE2JifzwUnebtgzoYXchbxG8ezFxUu51tZYMgXReZifQv2YrBL91AaRprydmZJf9kd8Trqu4vnAMuPJE8W"
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
