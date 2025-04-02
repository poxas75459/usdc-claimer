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
    "5T29ci6FXETD9J2gpg5qbKAnSyFxai7GoExX8eTCENoXfJ1dySiTAACLjJRvKfF2YTxPJUBchbyRTodEGUW3kjEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s5YZ4WXVWgN2U4TqQuhDQAaPNUWuVpyuf4n7HvBkyV1joHRYhyvFZUGcySQjpNhqbGzjwTfRVEJcPGnbB2pUMpK",
  "key1": "Rp9GSGa9Y9JYsM8wgBxt3emViwhxrTcbseHA4gmfEVtRDteNCWGvjn9cBh1kafF4gG6gRphSQVMnLkh4CogZ3bh",
  "key2": "5yJQc61mqrgt4JyQ5gbuhQ7cd3vXmGtV7BTigGVRGpyniM7m3metiLcA37qtsCQ22Wk83KKy2TgsSpAEb4CXUjkV",
  "key3": "2ViwT3cSgQyGkBL47mUWYipDequHirGuWR93qg4KS2ddshe8nHfn8yFsfqcZ3QoxRTbRMFpTYCqW5WYQtmnNaJnZ",
  "key4": "cxCNpdKiBBA64nqw9eUnQkcQhApdoWm2S1feWxkhkBv2qLP9Y1aBVShmkZ9cvSR77zut3xXXj2zhJ3ASRiDefs6",
  "key5": "28kWV3iosT9kQwETiMdMpZ8u6aEx5XMmmmxxhV7hGkFXo7Jfs3nY9kRLZeRPjSBS3Hp9j3Uq6USMUo6iFji1VRoA",
  "key6": "ZvgoW1k3HoiwDx3wcYJ4uXcoS6cGaHXLQTQhcawue5QC2aEvASkh8reaWjV59L2TyWutFGJ86MpkWVAvpjYGrmi",
  "key7": "35GSirxKJNmjNRgtDDyZTAbUnyqC9Prj4kMT45X6NSSPEGg33JY3npxcizaz31PpUAhAH1aaNcQ9bAJUqMy8V9BJ",
  "key8": "535qSEuNbakGrcLX55yYdJzi2q5wTrSAXGQuX82eJU6nSEVES627GPmzLY5qBAETbL2avvMjAq2NqJ9QfbQJhQom",
  "key9": "6jzDD9XtUdQPDc42vEHwfseKf66ymADhYGC4aggC71zofKZH51m3MXWqeUxaUvRx34XA2JkSxUT7NB8641uGT9Z",
  "key10": "3Cvak7Hiiwt2X5D7ReKj2sPx1nXumRxBbaGYMREuXuspL1GYtuumEeTsHHF9imAcmmW6Uom2DYmkRUmAGcB4nULP",
  "key11": "2WquKV1zSctD88PDCL7p34zvmuCuS8jFG6Jc4pGwmHnBa9aTNqmvorjdxeB43tXMcAJ91HEG7p5zSZNY8sZGe7Cu",
  "key12": "57BXY1gfyXzpMvGsRnFs1qC4L7FCaY1F9FJ6tH5N4X1Soom7dxEmdwCxRckeX5HTJn6vuyhimX6g5BY5UKpoHrW8",
  "key13": "2Jgx5zz6MgfpX94HsQzQ5Wk2m8pvdLCfXF6ZGYM5yUrWL62d4jYymVAySptoW2Jsif6TDM3iqUM4jGCcBtj9LWqm",
  "key14": "4s7hBxHC3zx7uDypU8ew1R7fLLxeF9asjNWnvmHGUbwfYYKY5TZDZhbRasANRHvt8HDqeW4SNGjfUnA7UJkPj8e8",
  "key15": "92z36jJDAFNTVdJtWf1ZyYgkHhkVpiiPqNGGNGAwD7vtwGyyGW1BAKGieDuHxSJouYTnvrhBbNzL5AYL3MxKazw",
  "key16": "5yocVYtDWjxyfrgjvdgtgFM6Rc551gsLkD9YJPkufue1Egb4fpaccJDdQi3b7pZ9ha1KTMGbxeVVQJaGT9fQW4KV",
  "key17": "kuoSGnLV5Z7pHGxARcyQ9nsvyyEXQ1D7rdzZLFZnLUaZY7rDT6WPf6uS4wg7eSGE1fV8U24qmkLZmxkG7gzmZFp",
  "key18": "59MDRtSYgrCc1acN2vxgYRvAsguwrxP15iCTaNiicrKPuoptLMwrP9K9dp2CpvxEJYiBQjHRReEATT5t3FxQNzv5",
  "key19": "2Q49v7wrjtNtnDD12dq5woVTnqm4vjgAwipQbBdGJkzGV1qdVPrYPBReEuRZY5uhu46E7spTdUuamrb3nKbfocFF",
  "key20": "5BQS1So9eonsXJg9WoVCwkM4jvtcmYyjhv2bG1CkEGnrN7krxYgHgTJ9DJwRo6T9VKAPSbBFW6ywEpKvV4KUKGVK",
  "key21": "3i5ns9jjgwzzzMW3pib7RQ7BpKv7vwyK1PhY8AuvBEgbZRQsS8dbtfX63NfmGNjgPY6z3aqNidSicrR8MxSQKJTk",
  "key22": "2XVrqrERoikNw8RDXRD3W19TSVzoazT86UKUbWag81bpcFgn3pbgd22Q2qbwy7okW4LcZhT2AShzDXZVCDiQjfc5",
  "key23": "2P5RWMJQ6WLNPF1AMji4n9cd7PbGB23feop6SqSYgttjvdTHVTPqqCmmc7kmYmHtChwqb8utiHM6xB63eEaUTaNW",
  "key24": "4iQ6GmHZfANgDrc9ewp1wVHvTAwY4N3gZ1JnU5i35dVobpGZvszMKXxvFNUfi7qJLXDDwJrXLWQ7dfNCGoBQqn23",
  "key25": "4M6cRPuVSHyzNw9Se8uqaCgTyTvANw2KhWu92z1ZdC77u7ZJCxjGEgqPA5TqGUXsuMj4neJKnzk7AX53bwYP4Yt8",
  "key26": "GPbK4FgVDBXBysJupHToHM8zNc7rBxGFq81ENkN1XtXRB9a87UV1RZHDUNaqiY1JKqaQ9DUd1ypKnJnHU8NAi8j",
  "key27": "2kSQz5DEGXqcR7MU5prJqJEngQ5XhShRh5PWwA3Fmh2RLW2NT7szibgAnyisRZEEdtdDgP2nfDawBQzENthes4kU",
  "key28": "xfUp9buJowijBdH3NwWaj3Wz8UXgiNJezKto9QDJHygL4vkfFyBMXVe2DYy5CapZcHn8Li1MSFY7myiE2H4bEtL",
  "key29": "3xruuk5GrTt1uxponZMgSZj9eCDBhcK9xNQpxKamEbGdwPfj9FsSEG7JvNFGbSFJ6mKzuUSWwcf4mcqPpB2HmWK3",
  "key30": "5Gr5DAMTMUXh2xwp8h9QJinAP7fyuVvzzsvnipAus3QqWct7buJbX9STg3rHRXY7UHHJioZRjwmSDWP7niFp3PY4",
  "key31": "3WXwXJXxxdhV9nXKYSUwQVKLHPYQnnviwNn5SgnSTA9rNypZY55jp6LjVRYg844GeJSDViT6fZAXEDLzJZEj8TWp",
  "key32": "2azECwTLmxjdW9cSJbbZvyDEk4bKTS7yjjNszF69UqCHsAK7M24FPx85KU4ppvj7BuKk6usTib2Epg9rkdhmZvSv",
  "key33": "2ZeraNLUFbNmF61qeLXfSvGrV9xrbsJm6rpjFbDSMEucEzo2fZwnHuzLxPujyqbRhowr9n1o96ARerWUy9XF8bCk",
  "key34": "5BFuNePioM5A5oqqPdSdKZLCQK88XFWVGz8GZnHYHmYH1DzNijq9w47nQQS8ejdWpyFbyDo99ztj8R6JpGLV2efF",
  "key35": "2uxmYCuUBC53k3SLx95WsR3GQoWZ6ydyWHK9VzauSrtURv2TFv5FqsnJHUXgrhC3JfUdruhKqQcPya3k6fNAAMqH",
  "key36": "XUitmsvdJGfytsevhEdHprqYmj47E3p9JNZwZ5ZQ6J9EPQXJsXq29hKHGsZBWuivutXLwZquM2KrYiKFZhDswPZ",
  "key37": "24f4MYdtDqW4hSogHBCCiwjvymEXvJHamkfRas28GByCi2n3ks5JaPQX8YaYj5qB231QKScrN3BrmNMuALvMiE1y",
  "key38": "4c3tXYh8GVHwanY8ucXwHa1YtRmUe1UVzGAPJkkQbdpFhUTC6Qa3FyHrLM54fCUyeDYpYfK6X3FE63thyGgX6TgZ",
  "key39": "4TgnohjrhjnXPudpyqWfHHXVD6c8S6LajcdipQZkCKPkwNk6GcThhJFyALniXvY6Ya26DhzJWxmVhwucdmQCxBNV",
  "key40": "3Pxzs1Kop2xSo22Xf2KU3DyTjSRiUjzMdJY8vMScdroPRGqaotcjBDy7DM8ikujGrpxQLSA1uQkUdXa6BFPGZ3WG",
  "key41": "4xAJQEcFWa1A24wv5Hzvd3TDSXg2qpoqcUVX1E4zdviVag1rgr99o8xrZtao86BooBDZ7rzuxwtT3RBoTzpErrRf",
  "key42": "3Pwvk7FoQxado7oktXiFouRqoM8jTsTVfDWBRWTDXB7z5yLwbhjCcUYfX2gscpCsd8WTkXDagD8Dk17AUDUZ6h2g",
  "key43": "63zHrcYGZHe94snxzxp6NjPazvHZYhcUo5KChh5HnrEySdbnzjYUTsiUcGbmzffqaRyFjdt1aTVEx2oA6nPW7Uzm"
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
