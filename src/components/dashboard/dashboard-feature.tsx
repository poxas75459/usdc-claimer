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
    "q7jvNXY7f7bE3yhBG1yRx1py4nFPX4yvUUS2siTGYBnF1QfYBNiafvmH5JU3nWZhYdMFHwjMpCfdNWrX8mZbuTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xi9soGTcDUyzLXZkaVjY3RubamJu36zAZVc1gE9qmRZPYLGVkTxpyjvEYHB8759Ysg8gjZCX9BvQMXu1BgQnQSH",
  "key1": "4KEzrZc6RvKpugCLYFYqPZXGBGEb68arTQoKk5kGVVhEcCqy9LPuyaDEgTVinpTDvdXGhUtgBcXwm7TnAEHKKwjT",
  "key2": "3U6UJiGJus5DAmn4q7dUf9NrRm8x6xg72Pswryz3UKWJjai6MBC76Cd6vhZj9pcqfjLqaxPV3ETS83TyGJtGEfU6",
  "key3": "3UYJExgvyNZh1BnKxQB3LfWEkuJweczjhbZcTEeKpW9AXrzn5JUUacPkYLAv8jeyxX26NQt16N6PZWUmouu18m5W",
  "key4": "zEZGSeaFYLffz6LEQVqGTo4gP4v2cqF2X98J2uDbA6FmqNgMCSLuwpeUwt1tiS54eY4H1azuVVj68Tb7mkopRkZ",
  "key5": "24HVgTYbYQUJgQKnMVnQYfEfRACDVKd1WS3Rw4yfF1BAmwejU17MuFvTWgKeJ1MAvFxcqaKhRtPHEeowhfYY5Srx",
  "key6": "gn7wDJKG5SCeAuf6chMb1knztYD5UWxDHQk64cN8Uwk2Tmb5D15KNr3nZiaXERe7ahvJzZ6TU5c7pkn2VAWuApd",
  "key7": "3e4h7pUUD444gb2ACh7Pp2gbeGPxrSDfv3Wq34Qumr4nWBBTxe7AYWRGoyZo4MAz3DZZkrs1SZyXXoWjZS1pFvXo",
  "key8": "3rrfjJsvdK8Y1gsFT3HoQZ81B3YKKtC3eyRXjcndAbRo8UHWrBYqAeTSAj7rnwmueC1pt3B6oH7kd67G96tgEsez",
  "key9": "qaJropfY8rMyC5aLhjXnKuwLvSFTDuUVAkMmDQpccBhT6uJs9prjHGeReJkSGs1fHDnbhUn9sykbuUV3ZB9Qt1P",
  "key10": "5hHAYVm8EvuuyXBU2ecqt33EQfGpcHanMFcgVyBcZt6Me4JdrqtSbvQcwYxTpFNhtrPpK4YRzSFcRmCmEwxJTYoY",
  "key11": "372x7fphv7En68RvL2yTj4JTPQ2Tk8dY5mN1Jrvzmjw3REbzGZanmytFjj2dv3VX7J263rJDmtbSj76Ma9LyNuGN",
  "key12": "45xyxxFwDDTsJZ8VmAX9YhX85cMne9PPNnwavphUvcU9zu7ccMwHpWzyT9Ae8gRv48JJBqEXG3CSFqSqHjc67fq2",
  "key13": "25YWqUSyN5G4eBtqHCyXYC9GN4LnUbPGt5hhW49YgUeoePgQg4XDYCuYJ4mbMmZhs576L2zk4dgdp4zMaKFbeZ17",
  "key14": "DoU2KJeEbbi27hh9FosbLGsTv3WPXSHm1t7zCDweKHfD2pSKm1CdmTH1Q3e3m8F7JAjgbVAkdR9toyuAge5L4U4",
  "key15": "4hPfCGdLmuHE7eZ2jQqwAFecxdFLRtxgxvUdbVu6ajtYVtq95xKG9mTdS6D76kNz872ekbHog1m4p39WsdcNmV69",
  "key16": "2jKBFaeJhQxntZcdpuJ2xW6djaPwAUuNxYtfecR4uxLUxoJHpDvm2uQKXeWgZsSBtrczf3KhNGBm71P46tcQAB2C",
  "key17": "2E7i8dY9uJuM2j8b7E77CFaMuS9va1Leswe2gtdGEGBfB51ZeYjfewXf5RS5K5tzBgdgnf2tmL3wgNmPkugcPpyX",
  "key18": "4ojsgWeKvFJBKagXBob9m9z2gPJAVoCDvpzVxQP8Wm9Dc8gHXA7RCiRTKNzgZyMMuX646Rs2rFovxoA2o64FJyb7",
  "key19": "59YRJ8ZrBSwnpLDpsMbyyVAFZqZKZDnTsphwbPKoo5XS7WxYL6yn6xegG36h6EQ2cRTxRfktzdQeoaHJe3cBPp5K",
  "key20": "2a1cJMQsvfrJvpvbAw4KV98oktCANTvQTMVQi2tn9RLyThWw5RuSCScTzxFyQ6aBL4eMy1CF3d5TPJPGP7wgs8bw",
  "key21": "2w2qShB36VzrV8wxprFafEBHEnYP7DhEvgoVkU1Yq17VWJ78gUictz2aLYvLrDhNk8mH8die5XhcmQKD8MwmXfbc",
  "key22": "3fJKSCQmktUDJqhK4Z1DWEZeYptpV5DW9jSi8rNVs4tdiQx8ZcDZYoAkPos3WKQfUkYFBUgRBkL79r7NjsovVzYG",
  "key23": "2YKDd6TFiKkqMbarFWzcFSu8sDhNMoVwhgjcLyuKYEY7i2iqsuKjPWmdtETe3b3nLDKrXVhW6FExrBzQtoiiXYa8",
  "key24": "3hWKaXvGT8QPZ3E3tB6GtnfeVJBCNwfiDFRxcGqe5Y2TBKSYBneqvHmkyt1MpXezJ1RcXpMdpLsCeQiAVDgP6fvV",
  "key25": "3kNaUHrTRHx1GquuANgq9WsPUzoSGns9dqPoKZQ7JAvmQrhMke8zJfZ9BCRKUAtncAF3RRUfjVYSeTepaZEB3CGw",
  "key26": "5pHTfCrDXQLMRNGGwEdHC5NhNx2Xxu2YvPNkh8BddEUR4yjSXyusMDwXupgSAAZQ76eLFPnRB5GHhbf9BBh3Do1A",
  "key27": "2r4DGYF7ANTA19nz3mPavP2WdSiaVUJJQHKHvQq2yCrf8yr1wSq5PYJ59UR8hKKTYNouRHviKMuMAHV3MK8Fi7Ed",
  "key28": "bijHRvVHGHHGRKBuMDFFb751Q6U4DLgkmW3Ai8PBLxG1HnwScnPLZFZnM1jStqtZsTcyZaT6SooAnmX145VdXVe",
  "key29": "jFG2d7dBbmZPatGtdWJoARjy6eHkmggBAA2z997c3tJDTmdPB5Q28dLZQT8tYn5qfQvbyGesDG9NUboZmzra3j3",
  "key30": "v4QhyGeE8Stxr7aqHHLvBxxGyuqA9WX1xwLSeZxZg5kdVDFe1141Vary5TSCobHsHuyCm3M6tPHt5jnrzGvXL4C",
  "key31": "4wz7AZjfQF2BCjoYnf72muGY4k926UZJT7SC632cWzuhb4Dh8zSXgubG2PqBG9faeru3soqDxZtgeN14DVcHPSUu",
  "key32": "53GUmqhGHQ33yqTezb8hK4kynoe9EtypopLhFH7Vs9vtJz8pyP92qbNGMBcUGGxdCsSZ2jtaNHzzFe7gJXweD2gs",
  "key33": "2UARAreDL2FJggLNF4i6hytU8qDaVZq3cA7anbtxqaYFWjt9VMCvdiR5Qt6yCp3kH2QhbKJgXTWFYHLPcUKNE1Sp",
  "key34": "35U3CeLKnwoGZBFoY3ubCRPNFCNyGt4RWwthKAGFZcsyg5jDjyxD72niJdxXXgzxWm9J9dmr626RyN17mEKnEUwH",
  "key35": "4RwE4SkJDdxbAs74xn7oziNaGjDgfdn2p5SuAqSefygN8UeiH1t9z5xqd24N6FfhMDaj3HdoXP3deSZWfmYtshyb",
  "key36": "57ys34nLuGMmpD4NyoX6WuqfhUEzKDGftuERoho6TW9SvxFbk6ZUfbmKdHa3dkauTqRYKHtbdVJE5vfopwezNw6F",
  "key37": "4Bb8vsTG78ynm38S2eZsuLE9Z7pxp5sqeas2adGFmDb3peuUUvGHmPCPTihjQJmJudHg25aBV1qxTT9u58fkDFQg",
  "key38": "2NoCWdGQVdVHgipbHdX8R7toc3ey4U29atcFVRyzUQnSC1AZ1RkE5Sz8Qi26ZGuSy2jKphpuSFvtLxcZhr4qDAJG",
  "key39": "2y2YBbWELMZGz8RVdJ6dEScz5HcJAQaFwHZUJbLDE9jKZ5mRnrVpwnVLobpp5Ez5kDVkmR4SZZjeB7p2AtTmcJux",
  "key40": "bayib2KTv5gk2BAK7spfKsefYCFhJHQ9spJo4eJvpvgF2NSo8kH3TaEakm7GWfuDteCuLSX53G7tCxfr8BRAKvv",
  "key41": "3HPq5qMxRs6az3VbNBzqudNn1NbP54hACyacQUbXZXiqfbtmXeDhkLMu9SFjr43Vu2qqNyvsUTyyq8CcqVTscAMQ"
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
