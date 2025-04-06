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
    "5ZswWNf1eioasSVo1o4dQMp8KnppxXbu2StY2HHUrmEnfT6j5dqqvVtX6gfB3FHc1VaBXWgQS7wENwT5hCTnnyoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g2HKSj8wnUv5hEcj8vLo2zDPe4axZrYceSgKXWBqzHWfs8vHjD3sh7XfvhKhspWrSzbCmAWwQueKTJCPA7HqooN",
  "key1": "65QRPEUtWdPqjHKtkPxt935stLKbGqfTdFEWfUUbJwuUQ8LmzDNabvhqLeczRG7WstdbWdgBPZc9gtyKVy3uSYUu",
  "key2": "qZ8QLUW1NEASohz3J27uWB14n9RSoSPpxRgXdYs8TPYf7gTDcw58MA4LUbDsmqwg9Wt4eMkragQmZPkZvbeLfZH",
  "key3": "5GifYhkZTud3reBccXU5gnBcZQJNHqkjbrLyi2o4ikM6kDn4YiP51AxLkfdHw2XzUmrdvbNyhBf9uf6WVuRd3DaZ",
  "key4": "ZXw5qM1HisRduxR4xMMQ7APH8jL5ph7ekpdoYF6H2n46fHQjuP6hDGWQdznp5Fe1XqUjeo3ABdz4mAJUPKEHdtP",
  "key5": "2XxGL2GeG9tqi2iWqwJSzcWWH5sXydZc9JyKqiV6zzKcPp6LMLVa8ugkVqspSD4PPuYVyJMxk4DXyGdruwX635fL",
  "key6": "49jArENdePvBgCBXgs5Hrw64uyuf8EBEyPc2EwamC4dbbQegFzHJVuRWA7azbAYE3wKJBbkvMTcF7LLYGuPhgmL2",
  "key7": "3XyR8Yp6QjCzwvurwfGc5BNLEn1UtNenscvBvNUecpkDcT7jec7ao79ojXG1EzUqngJAQDhvGnnVrUH1W5fprJ5G",
  "key8": "625A13k2v3HM2p4nuv44vxGYXdHjqHMv1xMPkyfFuKgjBfgu2DpDKtB3Fn2Gp53GAvDs3jiTCqA8NscqGzyJ9pt4",
  "key9": "P5Zu6X6KPjtc9CAs6EwyrkZse67QbrvrABdYPrePfGJM9XAZibJmpFzyt5fHRgB1bURVRvEgP1gU2R3r29VpvTd",
  "key10": "3M1eu6qxgJ4PSYTvi6wTCpDyFJnaHTT1dt1tjNJ6juG8s8VRLJL9PVmorrdQSu45nWsfPrCZfAbzzAEyMMLGj3R",
  "key11": "5JVwddBpwEwtifDrySh3SQfGuoXjtpqQTmTUdVF8SvVjpG7btTDBbYC3RkDxSofooq6xu16VestTiyB4rF6XT7yY",
  "key12": "pDBS4PTqJBEduJw2XmTKxeiBuE2JiEmyH69vJiPq33gGZwFdLHGBSW2qQhMG8hNk5PUBPS2ig6T2eXMHtXhY4Tr",
  "key13": "5cxEw1RBT5f9z8mNY8an5D7AKdWVy8P3khj6CAJKAfaYLFzcviBCkfWy1dGx6b6hDx7sPD4G8jhr7SSTrhSKiaUa",
  "key14": "3Hh4MXMCqY1Yru7f67nZ5unUNBFj76s5JvAR7wxoL31DmN73nHWh97NRtcuKve8B1HgQzkZUmtkAoMczutjaoixx",
  "key15": "44498EJskfujjFnwskKYNzDQv4A9k1XdoLKAUYhrkgdpWt9VunBhb9BRsfgksGC2ZAGrizzS2iQqjfYgRykFqVdo",
  "key16": "23MT4ymDPLLupR8Yssyuxe44wsigVDccrpBc6DMVBex5JZkzBciZ1GrT51Yvz6YCJoeZ1umMLWsNG4nzWfiEuS8J",
  "key17": "3g6TohKvzdkRjbX4mzrnwdNH2vRW2cwP42od3n7kaZnVRSxCsx3dnkGbgVADQbGCtVf3GCukETARS3PGmjUyRVq8",
  "key18": "gDhKPcpgsKJRRhxg5P8iFELx7BuWxhJkm1gCKqsA9JQFCjQZqPoF2ebDvsao1MQZBUM4ggrn8aKegNnDEW28yak",
  "key19": "4nVodewWsoTvyrMkfXSh1em3GN1Ui5WVu1avBmZ7Qt1YwXCnEMoJT79ScRxLHEUz9Sb5SJSTkm8Jr1wcDy1Q45QT",
  "key20": "4gcxwEqhLPaEt9CuNaPNYEvfo38Ggdm8N9tpvguaeg5MbeW1SknHLadF51yJHCBw32tfUQWoz3peAo8t3AVbDcVr",
  "key21": "36tKKTDzwsTFn2tvc8cbskkeVjsLKDUa4GCQFQYtJpZPatNytwBxxzY8hpifWb8MzTHMrcSGPjHXD7tGzMLmH8cb",
  "key22": "kkcVD9E4H2m4smfsgJjeBgt6P5FmXXnMQ5vaSKRd7edn3hZgaUkvxurJkGJ5Djb7e3Nso2bYSJ2XLcXTaJUXuQ5",
  "key23": "3AbMAmBkXKaVoPzwquVjHd8P1VgTaFToCjagQtBVgCGTbfbw4ugArCzdTdiwG5zVjt1zPjSy4v1GUpHY3JvkbZ8v",
  "key24": "d9KtogmAkA2ykzs9WrG6dzatWjGS4UBHb6UvM3FGSant2QjQK1g4UoKoaQTi8WnXxB5qYykCPLF6HS8m7sRHcqJ",
  "key25": "2h3EN7DDhSkRpvPFgzSbQh9md2thMZAfCYR5yewiCZ2L2DRJyG2QqfmGUYTRURnryjsHxvhcqjvKAFNCEUxZBVo8",
  "key26": "5P77FbQAJVeYM3nP1gvzcNnhsxTCX5u8M2cfpABLMHHZiFyH1tXRxkAhB3HcjPfYZC3DsRc7n8STpufm8S2R8xv4",
  "key27": "5Bi7AYSGmjTApXUVrXHRTwQs3AsMkHJTni5SrThKRvvqX79DQaE53FU3eG7J9QwukuUAYEvYonLhAPRXGcWKwY7u",
  "key28": "21i56tkshdocGgpKhzJdjCjdwSxkQDtntp4yYqr2cFad4Aa8efYfxd7AJ2ox53iHSdcBwgsmFQJseerUPVHifNx5",
  "key29": "4EkQJj4KFSDjF2B4hnxquyVKv9WpUWCquiDPPNoBKn9YUo3tn7achCfb1VSzQs1wUBGLed5gCBnY1w5izJFeWpUw",
  "key30": "5FBSeuq6hp3EY2pqCJ6hk8Lp5TFuMAhU1p9YkwnVtu9y8ri1MgiT6zbtZ2tEwWWeUHys1yhTRi43uc6r3W5Et9A",
  "key31": "4hh69YMW9ZZ94KVzJE41ejGzeW4hHZivZrf1XB5MswhBrJpULkJGdU3J4au5LCVMznf8YG6UtMhhdiXwf4npkjpR",
  "key32": "5jJ5YMzeVaZRE1YHTXBd8XSxv9LbtHEzMqff7muJCA27jNN6UoK4k7d283BZnginykApfwZS8XeAeHjpfbHH6nU",
  "key33": "46vnAs3mt43f6X6NwngyzDUNU2wTDwZN2zB3W2zB2vLN7vNVN2rT9F3YKH8its5wRGCXbvxiUJis3t4rPxrVtBKd",
  "key34": "5LnKieH48MZiZ3ZxY5t15HHqbqjraMHPCkeB2gMmVNYmbq7RRbmQ7VW7UEPtGhBTY4oFXXYgNV759PYZo4fD79yV",
  "key35": "7JYKGZ6fcwE7iQjS58SVRmhCMnd5NxZAmwgFX8WVwJj1gZFKQ96EqrQfrDcrcPa8nwFgTCBdmHjPzatD2TwzGdw",
  "key36": "3VWodaXTD5rYLqeiNGt9QCApMytMHHvyR5qQfmph1R7prx7SLeNF5BkDWXRorUYZ1TL6mVApXZbDQqNWijE9HcMK",
  "key37": "62hZPiqSZs9zpREtH29r2ipweuKustM6DJRkPCcn8kMd7iaQsXwgku8AsLXcWBpoUeFQYgF41NBhsGVTYyFNzP18",
  "key38": "5Vum6BGsxYWqoo4GBAzh3xfK8mJ4tjkZFbwBPcX6FbNnhf7q7iAcxrmttbrfGYQnbDNybmauumYhyW7AkjL8tQKA",
  "key39": "3uGzTZFVgH9NeNwuMb6WK5GmftS3YmE8zodSgnLUuuLiAPXah3eQLWr61FMVoCZaUPnijAv2FxMGqfGJL8TKPiGm",
  "key40": "38dy7rNhWREPXBJVccm7sD4C4K65qi4xLeuZxTAESvGApH9ZvFhWXqouqXUwWAJdFaevU4NTNMSSxcbkp8ZAADWd",
  "key41": "3BwM5GBgKZqpXEv4T4uieRYMvkACNz6sX26UTYu1m8xubBzYnohmAk2X46tYPiSmNBN73DkHNEkJPkmzhW8cARRz",
  "key42": "2wuGiwg6MkZmQr7hKauVJQpgiGykd2kb9frkZsML5YM6gCwaUQTQcZF5ugYYYF8Nv8BAZ5wevw3iJYUwUqrxhPky",
  "key43": "56jGiTYnNtmnQs2tvyardyGYfoH3goUNZyd5rhKNcpsRiUWgNLHecv1JWTE2DnoZgNtnfYEVmgL63nANn2EQ4efW"
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
