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
    "4LhczTToum4SvhxJMPNZgrxFNgCLrvqe2k5tb2SPs5w4K4AdcL4r6Q584DuaCvYEarQCNV3CpDtjnvYJcbbU8hDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eWARV427HCQWGGxLcChMpFK1eb4EZ49dwCQqvpXHubcoLWNCFSMCR1GPVX83hmJhvaP6BQvWdz1g7v4yE2LjWL6",
  "key1": "2kD1ZU74AwXi81Qn9rhSThzy4dhNVthTbGLmDqXhpQSNWfgfQjNA7JEKXqnMa5SoyB4Cg4qwgKo3g4RusC1WdbtS",
  "key2": "3qQv3FbueVTfD8jwK5wjhrG5v8RgvoqbU9ujoGNPUGppYtoXKA3nxEzmgfthTacVZeAHdf5MJU1qsv6dePcDazVZ",
  "key3": "2wWc2QnREJSnmPXuYuvcwXurXmeuWeXZhKMBnY1LPGzZFpQf8tVVHD5ZLJFBbowgL8LmYD32qanm3Ksph1sp1Hde",
  "key4": "56DqumM2YSQpW2HYVDUEdZ1QevYJPYFVK7FKw8s7WCNBCK19ZQyTSpqTXaLzmYK96KADg2ZnxLQXQufRwEvrmGv3",
  "key5": "ZeiDx2JmcJ51K7atcwLmxpMksjEwcn3NDpbkQ5ihrARqcsdPiH9qwWywbn9Xqdj4kgUig24v95DeqzWEPHU7k2h",
  "key6": "1UVSB3jeURQBkd6C6B4ZkZS4bjtk5Cu4iSsrP1foFpzpW6TfnThEgcunsg3eUNmNAEBPxo2J3U2d4QPQjMFAGxs",
  "key7": "297REZRXEvsN7hgqdiJ7Daq3AC6UzoMCxCwZAuzo4nXiRSrYYn8RTo5tivH1pWEfGisHDrjdq16AqUVETJ7ro1mi",
  "key8": "3hJUV8oh7edF8Sm19Y5swk1jQdjBwtu5VSbhFHgdVpTQiSBLKMYJsvBeFVgj8crkrdQWVsRizoQ7F8SPHAvErHvk",
  "key9": "3KViMvo7VrjujVHw34tTBskVrUEDBrSqwxYXhQQixjqAZMFNpNseKrmn6qPZ68LvEYcLMAsEnopEfJnrb82VPvnE",
  "key10": "5ySr2NZmWmyzstgFNknwk4uEUr5aSF8NFcsQdoB7RsZjXBS3CUL8MGBK4H6WNU7Es9cG6aihzNhiwvFGRfohyFrm",
  "key11": "5cwPGGnaiTtZbdYG3oFXW8mgkBMxY2p7GAk3VobmagdkkLe1T4ffQ7J6XGNKnXgueEoaUWe98GxHpHa1aq1aACMD",
  "key12": "ZwvEr5u9H2zh8xuTmxk743kGLfYtL6MaWx6G5beK5Bp6vd7sSzpLWF5xBkdbqqAs1RoJG5BQ6SHTmib9fGYFtXJ",
  "key13": "2K4Fa26yELAsj4VKjbjy4qxjcJ3bdMCSMXBSrFpTsS2e7sNvpxp8EH5A5tww75BRhs5LxGJK84dieiWiWnKErTMX",
  "key14": "T7XP6uWs8X1vBMLd5toUhZ1h3Z9BgwRAJ5yrkHJhpXryVVjTqfxLxbz6qP66u6PvRopZckB7LscvbXpXx9a75pL",
  "key15": "5zJu1bA75fGJC9vq1A5qJQs2rfz9pn2Sn9igg98shoxZTRc3Kvydd9hudk19dm7dkp8Ra5Gq2wMC9Roid67fWwLy",
  "key16": "66yYXpzHHEE2uN3jDuDZzxTfXMU84eKUo5BiocKHJ3xz4PHqWgymJjJHNZM4ScnS8u7s8UD2fiLRY6P6ChdaVnoX",
  "key17": "3CjXrnZvFavjhhY9UYnZNYZjrGsVAP2QVMqVJjLkVWxDdmoANC4HPG7WRkc79M4XsQr6Dnf16d9A2pVtJinE2Pzv",
  "key18": "4MNg4H3CiyosSLpNbj82WjPX8imNn1dw5nJXGbrq4DV3yqMuX4gmWaw5aY2C8Utd2825ocbrvKPJAHemeAYnRG55",
  "key19": "3SGxpGo6oDoqw3GbmsbLXCkDu1kagev96K9B6Lxpr93gDUcX5djUResujWk4nu7RyYa1Ugcr2KqytrRxb5thBHte",
  "key20": "druVA97YR5z4E8KSKd2266PnSHXRsfykWitvViX8NGWESF9SwzJsSJkeW22VbAWa4DxvMcsgP9dBjR1tMr4PWdg",
  "key21": "9yGbLG7Q8MpvzqsttmF5cB63gxkbxE6aJaXpobUpCV6EukQqCLjTapvqRYXychETf1YrhiRhC2uYADJnacY4DpK",
  "key22": "4WRowMHdWq8c5BR3KiVsQZZhLAnccDb4c1cCyvVtL4Uu8y8drPoPhoVG6EnC8qBzJwFnkjoZZR4ZR6K9n2YChpFg",
  "key23": "u3C6DweKEUSRkgvDoTTAE6avHU23Cpzbcz5jNjHjtWANsvbt1T9E2ArXZZjahnmgn6EMLH1stkxTu9syEjbuEKr",
  "key24": "2jAJ6Pp2yBkuLVWgkSTa5HZ3NmGiQ6dUBkHNV3hAmukY6oHKrWFBdknabH2rvcB81hmBt23TJZzsHhKb2YUCWPR2",
  "key25": "5eCXA4WfisspJZJ4HeFbhkrDnqKZm8ppvWEwexj2XtC6thvhr6UvHouBF8CexiY8WcPTsdoTm7TraNenRUz7SYeb",
  "key26": "656HPzZtdkNWPB3TNreAPCy5zvkVs5utB3veTkxwwVKXsMAsasCDWvgwxTY27mC9v6Yggs7951n7wjgqTH4uNGx",
  "key27": "mYq45pLednDATB4RP2Vqtp2cL3iPc7ijEcv1bbzRSREagA2earxTnSoamUNxMTaUSi7YdnuQ8oyVCLhwZZrQUua",
  "key28": "o6ej2yZwEhAa5HxpGqreiW5Hz35ZtQYP8yktby5MxRSrvbAtTZfRYSaNbgrvdomRfsSw6TMAhVum73VytJmTjVL",
  "key29": "3yLP3KqF1eFs59zzwhnNP1qmRYZj8HEMRaRVkyc55J7DD9FVP48pbJmkRoKiP2rR1EXtQ9Yi5BRGoHT5mp2guNf7",
  "key30": "263ScJZkabT83kY13PyN9cbnydqv2ZWj3S2GLZ5uhjVkpWVprtnvozdHpj134GK6Ht3NXvwfUmf8UyLqLP7UnFr6",
  "key31": "3spCAmuzwRKPkWFGi3tq2Y2im7EAUZtGVGhSYA5s65oN18X2YLoRTzj7mzyzXzNehXApzXX2xFeQbJ5AHM1GdNh7",
  "key32": "4YEs1xrAt52AS8CJfWZEoNDLAcuHBWd1ZJskSY3BvqQDTz9heamkU49LGuBKK6kD6tmjYEDTPLaA3ZE2vtr8UWUn",
  "key33": "cr4GKAffUA9GwaXev8WdqV1rQA7fw23hmoRw8TsJFYt5xCmQoYk7Ry4jMWnv2ZhNVTF6GBDYBBioHWanHhsqkvV",
  "key34": "51y2pokyZTRuNr43AGNjrEU1hNBWd9hVaRgVyTSwwwzfhvf8XDzvSZr1hj7vVqYkVxX84JcWC3EJx5sGMjsWhJ7H",
  "key35": "5C7yL1JW4FVmRLWpzuNAwNrfz2YHadYtXg48ukUGaxLpr5JXhmbLKSXc7of2yRTEWh2bFPorw8gYdapaD1UbxQSb",
  "key36": "62rq9Xkzvn48mrASW4SyjkdMkYSx9GZDUrng9fvE3pjmycWZo92UB8kLYYZqvJgDBb68972cXzEssr9fbfa6ebTe",
  "key37": "5PAKxY9ghdVdZMXf1o7RriG1DzgmjaB66wcpnY8ZuVFNQjJbaPqN4EaJJztgZFRGLZCPcGq6TpVqDSxSDojTYCsR",
  "key38": "3hkpFtnnYns1ocdbmp5kvnXwEEk5D3wFssTzadHFXunkLhZMmj5YvnBunK211mjuks2cWb2Se5ioxGCmjpEp5kB1",
  "key39": "4roFGtnpDwQ8JYgnBmaQQd4erNSS1D8BFDeDJKAZrWwJzKi6FfxtMPYrjzkSfnjdN6pZn6M5xNciyeeaJzBXtk6h"
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
