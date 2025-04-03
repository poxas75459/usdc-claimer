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
    "2aRpyQzz35Tv66G8WhAoyTvBQeegmx4B8rbGWwymp8UWqqcf2SX97KGqi29oZKwqiRjQ2vit8XitUskyHkR9Z2vp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "379aeGFSfJZdkNpxeR2GqaJ1oQNiDznAVJVS6FeLZWjxwsFv1oAwxbguiBVWrKnm87cyEc6FE5FyzsqiZxm7Gu84",
  "key1": "5eF3Qy4BUbdg6jZLbYU9WezNx7k7MKC5sBQTRjGBPJ5WSW7bvdXZkJQp3qbFKVKdFxRZXxvLcVz7xvH5Ty6L78Qs",
  "key2": "4am6coF6EfZcRXQunGF8g3PaupESmL7dRWNDXUtxsqEig3JgwV1KL6NovKfR2HTLwfhuM6aEaUpFyTUAMWA364RG",
  "key3": "46yqVFwqMemcnhhCbU8JCKoUgLVBkPK7hQB97ykMCp91Tj9nJYEDvCRktpiuLKxKyxPhErXs6zH1j8BvPFkHvmS2",
  "key4": "4VXPwL1UZBoV1p5h1sAX1rpdBJbg5fgB8aC2xHUv6ZpmhCPMsLPwMHTWp1gwHpHsVEuSjLXBt98FUYZWn1cSLL6D",
  "key5": "mtGqRZxQsMeycBsDdchudeznWPfYGn7uhrwe4mV4fKTiQwoukSaZkxnEsr59ATTv4t275gbSBnLhvBjwU6ueT3x",
  "key6": "5hxGAHA55tAxq2cA82UNxUWUKw7ZzRGXq6TDhVHM5M1vpmK8p8tFwJ1efmx87Tc1Q2wYpmt64PnfrXa3LNsxbe2a",
  "key7": "5NqXS4hkAiTQ858iWJz87sSSYurzzkoQskZszVCfhMDXSFLaKXExzgksvmyvppMrtAWf4ECgHYADmF8QcHGUCMr3",
  "key8": "nzyXZy1XkUrcnkDGGYgoyFKBbK41JNbLXXVji5gxKpayRCUjuBpqEm5EqEG4xirW6DeHVP6zbNdPJ5sHn38sZyX",
  "key9": "3NFxoK9teZbBnW8QKX6atKR3qCnkgfGaETbbPoNBBP4vifntbRs1UN9YDhjGh5kSA8XsQAKPrbViNYTnth7xd6jP",
  "key10": "2pG4snM2QpNSXWmLHdPu3e8zTLdS1MteQ2XtTu77y2TLBbiisEX3AV8j4Up8Mb3LPRsfRVq4N4BqRN5ftps2RRd8",
  "key11": "szA345SbnFh3MMDBSyrjBg571bAhXbGYkr2g4Kyq9a8ZXuHksgz8YJgUhrjgdSwvTaFWEseRdeBHSyuU8d3hpT6",
  "key12": "2AFxvzEB5gMkm2ek3G81yfb6npyFYSBSY8F4SrVBSSFTiZK17yYxAMCLQtGYc2QSE2tkNLCaEmJqyCDChy7dEwV5",
  "key13": "58B2wqyJT2XphQ8aA9kyh984hsvp6dbmQQVd7XiN8GmAWtik7zmpCjWWJUqxz8xmFMm5rixQy4W6MdcawnqYGFoa",
  "key14": "5GW53LBPd7tpogLHEnaGpv1pcdgXVZZsBWxRbx6zRU89s3dGncE77PbNoPQUDfLp2Dexn11zziSDeaWRUmugDv7j",
  "key15": "2JuM9AUpLNZYGZtAZPfYtm5HXkwa9YQwefmmGbvDkixySg4B63GNa3ujFfuCQg1yNDgHorrevFSDiLR5j58ZNpkm",
  "key16": "4Coiueh3ornPBPK47Lb9KCp9oGVE2n2PQgea7gPBZqfYUCXnE9pfL8762oaaku5uLqRxdsZhY5fo3U4ngvLEkE1M",
  "key17": "3xgf62RgpGx31d2ndkDP7hkf4YFQ16V431et7rkGgHgf2zuqAVXBHHycYWLU2UjrjeNcp66gcWnCU7B47aSsBcNe",
  "key18": "5D3P5J1FgLW15YNyuxQpguTnghbTS3Z6xjeNQdyKToreGhgsJN1v7nk5AtDhmUkYFyJPRDFwR2Cni6pKWrxug3qc",
  "key19": "2J6BVP8iemQWWTEiw94vyHCry18iUxKb6rnw8LmJM3BPA35dVbHYBfEnHZV6698SQpouvWVnoiD851V4mFTw1jjH",
  "key20": "LRXZhVqo5hHhSbCMj7KP4jRzA1v8aWj6Vd6p7oPQv5jMRYLfwn3ykmXtH1zW112HSa4ot5pS8Q8qzRTV6Lq3EMj",
  "key21": "dLWgVCijehySC7eiZ5kBNqpg8k62mv71UKSEHz3DVP8UTgfuWuwy4LiYDFgXHSUvPxbe7s8W22sbdRiZ7whatZQ",
  "key22": "2FXdLhfKHfWeTogixtpJrN35FnG7HMKsLH3r8tistqM21iHHXrsma31LQaAq7RgghseUx242oeunLZdWDQFyBPUY",
  "key23": "c6a9ic5YexEz5DEzA1f1tPN5Lo9XpXZccqKdapdGnm7TJaJ7YuKLeyrKNf6Mppy1bv9wxM88dreEyUCnp3MRuqW",
  "key24": "3Ltho9nrrfBtu73Wfn54b9uVYdFK5kjusHYD9n6WaPVgB9C6sKsiG2bhXhX2opvkYDncAKH5g3pafRiXTBM75rGy",
  "key25": "4ZXr1hijasnqVgMdzkLntRUVXzG2NEiYpfgr96EHdEYgmhLWCfhE7ZDhpcuKxD8YfD2Ty7aCyqJXNsxKZxrMuoN7",
  "key26": "oK9TvFzhpknkrj9Z34xbprcFddSuFNSkbcKXDHswzudUVf4pxhhZb6rj3SKk6YVgLrKJSZ8bYgvVbgQeonA3Y8c",
  "key27": "615MWHM9TVysnrMsa6aNt9F8pT2MTrFnUBMGDbHYKsk4cTcswdzrKSkFgSAt7oAzJxGXnRJNqZ6QbNFbTnBNnzN2",
  "key28": "41yWWTQrv4gbmGUCRAMKGwU2etBzbNz36HSBeNATbPmcmqLHfnx7gEJSwi4yvq29L6yytphkNgJ1TwTCF3X32JtW",
  "key29": "2qpm82Jdk1shcLB2ui3RgZN5iHTxzaWThXaw5hUuzUgd65Tpvj2pFHf5jez8mVJ9TLy8QiBfGk73tYEvUBE5xYFR",
  "key30": "266d6uUSZW1ZuGHNmEn1BdgCbz1MZUSwPBY8f5yN4VnTjMHZQcXDiFB78xCcjz87KdixCKgStKwWsTC12DMTo7dg",
  "key31": "5UkJbh1oM3MpFS5t9bzM23QaGcTYhu68ZrmT6AYsQNXMMub5ZMAT3WqmfNsAfNH7MbopGcnucTSbAtQC3vEYvdo3",
  "key32": "2fkuQ9gs7FTXhZ15gYCDwkkXzfBWBvksxAqi4bUMTrbmGZy7csXAiADXmP1aokV6j7gu2zM17cWTukNNZcfBYBwD",
  "key33": "5AmeZZVzaLEz5DerRHJJiiQzRKb1PmwMVVisn6s2scgY45MTpfg6LWhUrF7ED4BWuxFmgVpw5ZNp3ZLkWju98qbQ",
  "key34": "21npov8FNPxyHeo79wUXLy5bZb7VM2TKqHgYgYA2yTZuyDkj6pJxVnJPM1NHHR81UFYYcKYV8fnfPzRFmk4qJasR",
  "key35": "66RAfFDiwPT4YTwYKpwhkQS3qffjgBUyqmzMjGh9GWoHSYgJigGYY2fevKRdhoPx5kr1JkEQSmSsrtwML6PE1U5c",
  "key36": "46HHXkUdngbLLGneHFjCf9TjNdEgzJpsXx7fXbMxqn1UuvwiewCwyJDMLNR9etqLgVdnsCQr4QgA4pgbCAqT3c4Q",
  "key37": "2frsxYBZuWRoToUeip3je7JbrZmes6qPchSPi6QDfnzegbHBTvbveAG8UJR1KSxQ3c2uAWsB7B6voGezQFuYTYVZ",
  "key38": "yBpPbZUa5n3V52xrBA15Uv6sRgEcTM9xFK52HpDthZWwsX23ce2QZCfBQDJbnu1xGJXFNpDEPM1Mc46rHeDtSkG",
  "key39": "3WWbZRXPyEYrSejzHmSCNvFi2uUvUtaG4dxnJzwg8ZcVBmW3W6HtaA8mMUAW8ESJEiYCQaVWvJs4fKq6WWNncLcH",
  "key40": "3noytdR2vRXNtY34XmzN1GAxqcsdo46EWRSBqJhGQ7XfgYAFsrqddjZRm3PZczgUh9FQWouGG1jgMo59A7BP2g3y"
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
