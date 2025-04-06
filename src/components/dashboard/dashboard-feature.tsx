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
    "3jE6MRrgkr6sthctx3RMUCCu1YC7Dvsu2iPAEMgHcf3Mw7ZZWQVYj1p8j5MRTU2FDzv6JZtTYmcQiiMte3JwLwcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dotgwh1cAippC4PTCci7HDvrJDfy55ZwtXS49MAmVe3T7VoLSKvu3h8V4TjeYUEQuFKK8LjGcq8wCA5GCFEvHfH",
  "key1": "9HHP3jBAEZd236Fz1RLrmJtCXWjeggkTQ5fnrPLGoaZMZj8tPrDNCNvkRwbvJQBm4K7jGYPvFVUBGdoi6BZsXbJ",
  "key2": "348HaMbBjvMrBticq4JvgsAh1HZeQWgaZHemeahNyGVSiWLpMWnhV7VREfRMkcYi5DxjNZtmczRxdgk3xVHSSzBY",
  "key3": "3hvEHBmGKxtCgeHGiyH2rFjz7MMAxD8a1BwvxPLVgyHkZ5nxnSLcFxusd1zudJcSQAk9G1Vx48mgFNAiSWNL3ujG",
  "key4": "SfqMYbaRHS1aX7dPmQTezyTd9zZKsyJAbtWM2zzrfCbyH4vDoYXbTQPdYdXyatRac8NSuzSgW5D1qAkcrVeGpws",
  "key5": "2vsNCFkr5SDb1dkyikortNJerEn17aZotEQDHhAdUy2TwsnKEfGtkT6yf6Zqc8HGdjFi3w2tYfA9F9ECkNC32uLk",
  "key6": "5AGMSCxFG9NzzzNK5t3adfoEcQX2igSKUwUvfQtovMW7Rr3WEzp1xrphBZx6DxLZVo4Qo3tpPLALc5MkHgL1BmyN",
  "key7": "2YoSjnf3g2b2tLmRjiuV3U974EzJWeF11XkWykCGv56bzyVEBNgkopuak3SetC2zHFiuW714r8hQ2EtEpjFX1pqv",
  "key8": "5NDYQCgkc95mViqPqKjEJbtW1vjq4Nvs9xxkS8kf3y76uXaMMThMyrKaxZpj5ggmqKNJnMpWsqdtULPgX1bdxsdb",
  "key9": "4sqBpszPYFLreYjX5YCLLz1oyFJkpvoAFmgeXmtGWWE8qcFecc33Jqd1UQgVfKJQEsXFqL1e5caTUnYnhcBqSJ3F",
  "key10": "5wuSbCEJuJrRYDWsbDinVUWRtrKLzZco2sy1yXHNxy1xZzA3jimzuzVMnzRSRumupyUDTY7WmducD2HPxAdscj2v",
  "key11": "2iST1FmHc3DkTvivBHST1i6Zjjixh2GWp9gQmnsghDFEsToi7DedvXDxa4brRn8e6V1vduCpEDrX4bioUtJnTmbn",
  "key12": "xoypt3sFGibUa8LXRsD1JD1wjW3ETSG4fEfiUekkZdtfjs5c4LDckEdUE8nfwwibe5CW6NTtGoQeRxRDnXXnZDK",
  "key13": "5dBzLmbyKykXZ3VJAeggzkT4BWeS5bCLkejQpUbbAtajFqcLvBF6fU5XycZaMYPMeM1Eot3iUSHqEkLGpBZEeEso",
  "key14": "2mN496tGmG8nwdeW2uCd8eBj2yEic7R7AKeM98oY7YmE6WMT3bTmHS99kTm4WUoZ2AG8uN6j6gC2UHsVd8Z3YQST",
  "key15": "5HoEd2ST1C1LQwj8iEUiHDGkE2K87g5UZMc9t7WuwhtpEx9aZdgkgWjBy4ekj2QcTWD7HZGoa2mMxsorFfQqHvJh",
  "key16": "3zBXYN54h2CQ21wC35gqchfvgnysiAqmL4Es6rFwpYruWrz7ZyNRG1RGpkiqQAucp3R4yWUkJgBCv6npiiM29o4Q",
  "key17": "iUZy3oXKpqWpv8c6ftbGoJHYA9qZGU9PRi59hQgzRLke5ayGLYoxw4GdmfUi9iELKTTLscnqBBs1M8LTzJtxxCe",
  "key18": "2YzsDHE9gb3o7fyAZDcq78iEMsr3xgicBFjz8amKcFrYyohU5ihxZZgMf9gVd1y2RcbZSY8DuTVCRgvvCkrPHf1H",
  "key19": "5bH4ChDJTTYp6ZLyvmHBwJTpwjcLwMb6nu7zwNgouJkRcX2GUdQgvXQ1SKTNa1MGj1wtGxgY9CkTvZPz3ummaZGJ",
  "key20": "5qEt5wh6dmVEiCtcSw1bEr3wZ8NuyqQLhDraAR8Tc54asKDj3DYCWtcE5zpgjzPrnrRTTyLMzP85z1QZPsvpfEGZ",
  "key21": "ENJU5BM7YkUMxzS33F7ZZYbPeiBo5EKgnnW1GXKEHVQx5D7JoKp1N24RmtUzHDYuaQDCftfcWY7tyezJvZPqsBF",
  "key22": "dAhBsr5NL86Cqdaba7Mhbmc81eJ9aRhfnzHTxG5gFa5SfA6qDAEeiWRJofRo18pJpvLLQMCbQt1pn7mH8aqidpg",
  "key23": "Z5uuMtFDputuXWgmvoyHQRHTtkjw9qskVp5VfXr8D3J8t3CuMBmw2Sb5dMpqznwHwfvaMaSJpuEFbFKqhxQFfbS",
  "key24": "38JhfvGr1mApygiSazwMcWoHAoAMTnrQQVBJE6Hio2Hv2X7uedB9yUBCvwcieuWrMgJWSbf9SwRAi3HFpy3DZbR7",
  "key25": "2WhDVKftiiKxwKQH8Usd6nhYdKfZLVU8dvkfHyBVNdsuLDtQz5ozxbupJsrg4ofNccNt2Rfcw7T4XMXWZ7hytak5",
  "key26": "iXDtH85m9UjBnFktLydXDWZBvBBrFDVVs1nGjzMxaSY9g5YyUu625dzGjxAFRzr4zDGLHZhQ1BeDNRi3y5Mx31G",
  "key27": "WS9xv8FuKgSCFQnUkS4MYnsRcJQrtuUBLJWDXsdd3tVk2jdjVVZ6g6bVjjZy7ZE25KNNHwdALCwa5JVUunzFfDT",
  "key28": "47DBj8QB1NBBQgruMQwA2Fr4D98v1BRmJhJViME1e7RLqHX3JBERihVurswdrg3BbhsVmn8RTVdQvi4rB7VoQRWY",
  "key29": "5tUBUiC5nVdFkUHFEUjgeud9RoLYFcuKdWc32SYaS5wT6rvVf4NZ3vy2QsWdrncXX2AeVVQST6dviT4We9VMEDpT",
  "key30": "HGgi9NwBe6qqw52CrN862WmtnqYTLJQTB1gHpSU596J4UonAJstX6mXT28EJek31AGcgdqCkfra4Te79VveFjmp",
  "key31": "4GRZhfxj55SxFm7YMpXnNAponz735JhX8jHNtUDuAaHkfseE4nkfuXS73LhkAEy7crwncz6QATbtRakqj1LetPe6",
  "key32": "MVLNZ4a38B9ScKqh9twV2c2N5AyATS6YyiP1NkAJiD3VVmgivbQxa4jsbaScY5UaszW73LpzrXtxsuzAnXEQPeT",
  "key33": "yCU481kv7pScaYGUG7bAYVdyBdYpQdMfKZ5maqbMeqaHWYZ8yWvqtNqWdyBdGvkzgmUoXD9Jod31gtAr6TjeQLA",
  "key34": "NM12J4ZVodBEkYrgm2PSVDsExkwA7aBZXjvEoTqxK94CeCPt7c7ZKECvhzdNrQkWn1wtdqUtRYDJDFAFUkUvhbc",
  "key35": "5FkcoTMoZHG2T6B4fjn12jQHHLzUKorkeyiTYHojx1MXRDy9KD5Kat5kEYLuCm17HLz9ixbykMkfBNsqwTgksp78",
  "key36": "4tfAtmimocAuESKCadZZStstoPZdhAEL8fxsZcMoj67nVPKL6srUVWgqmR5i6AM9cG9mmfSnDtTqSpP2L1aNXq79",
  "key37": "3uXuj8vXZYJkp2QVUC2nwbMD7CTFxCV4qviqYdp8Wo8LkZzyww1Bqu7pidiPGKmphv81FCdPJCwfuGRApd2JpF9S",
  "key38": "5E7VpzaSBsT5s8mikRmUTgnFznj5Qgb8imYTzSZbo1qrEKHv7npPcttivdnP1Mc3z13b7cHoXBAfCY28FBiZG5C1",
  "key39": "26T6VVeDVzqyoi5GjhJvWZrZtsdfb9cAm67z5PhngyondnXNf2gKUiXgJd2QDrUgXbn3NVdHiLapTiYN5NxPk4A3",
  "key40": "2vCGXty9ATscadappBNbe4XQwJ3YxyUA6RJUQzFy3Wu4fWA63QcmcC4q5dfUoETKWhQw46NgqwXgD18n8wvHRoU8",
  "key41": "2CfCaZ9sUHDpqXykKpBKUPhRPRXn2N1LwLAFrZyNKS2xgBcWhuEP1CsttJGxZgz7i5VR7qM1NBBjwW29SaPDucbL"
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
