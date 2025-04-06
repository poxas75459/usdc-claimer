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
    "5RGwHYL57ehLwPeQbCS2n9nKAcjobp95DCiNhPhoWH325hPXPhBv8qAmyTkFPWSC12xUGTcF727RTKYDxP2ca8Jo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pefXL7ZuTfhKR6mAxbYEQ3Bd29WKTYAsMWGfWsesoKLu4pKXgbteinL5Qz8VeFR87ETKFEwnsr2mdEXvBKJf7nm",
  "key1": "4cAZx7dPR1vfzAXZivV6N67yzMSW1hBWuSm2DdFHUbNuQEwXDx8gYA47vhgj6wBgfAe2teBBTBDKC6eQSdMVsdtx",
  "key2": "3nphmwyhwAsfKs4o5Vrm11gJLrVdhKs8pH7jHDCvgKbPxPFGxvsmEqYJdKb294MDpzC57zAYui8wPRZaiMWVWApj",
  "key3": "4n66emzhfC1qRjvAa3r9rhEWrLKo2oBJLyQcJYQb31YHquc1TwXUye2H2W8jRCUguqYWJNdvFwGXWumcVMBqpreS",
  "key4": "5AwqpGRgkihnJ5q6VNVS45ajedBbazjRxqtcGMr9b3Jgvor4uCzens43WMNBRopoBaprgRRY279Ns9CnHJxp7YY1",
  "key5": "4vUkWsfuCfdefZ8HYMRtCVGy9sTccGgWJqsP7g9DSgCPxny7YH3Bdn8pYGyGZRr1RL1iMxkcoAf5CUZMJBUtiGaX",
  "key6": "4E2Xaa3b3wHtMtoBFY5BFP459JM93xGUAjfsybfMLkcTjzcqeni3uhNxm6WW5n54jfNeNcMNpBZwqvfHbAFGw3Ew",
  "key7": "4ztQiLLxYCkm75GFNbUKKLJqkEvmurBw5GT91TraWzJEtaafqfVokxB6SYLXJzhF6Hjb8tcuM9EevbXRGMW91t4Z",
  "key8": "41CDiS9xmHaL29APS7Dx1ztqm5wtnws8evTsKph9Zib4pvfj7sPkpttyq6dT7YJwhKrpTzHTXAQ3NMgy4gYnYoeP",
  "key9": "2FuHZMLoVQnjz1P1jdzVj31zAMUthJXmr6UWhSBKkXCBAiEBzxcNecKtL2beK6Su1cxDpvvHVwAtnh53Bwcnfpzb",
  "key10": "5ssjhDUBJM2X7zSqCkKdDi2xHqfxT9d4HkFNXQhe7xsRDirG8Yzemozt5oXXmf3G6dV2T3fvzzina4kDxAVGGMAq",
  "key11": "2DngZJETQ6MUrgDHu9xUBbES7xjAow7oD4kwpKADUZBMHW28gmAhi9necCkm7xt7gLNjiGsySmUZe7dJxFoS4S2n",
  "key12": "b4Vocfw8kJmujrdLLqBXnAd3gXbyXYDU1SFGqpVfuNjNhr7R7ayHQawtLoiGVoiDD9Kcj13SxctHMcGa7wrsixo",
  "key13": "3LKs3ygEGJ1QcMccvanZaYLNiuDKL92bGzqVdMSgb1bVGFwVdKZnRqEMmV2nE2nfuKzARZFvSRr2DgZ5qEAGEC2V",
  "key14": "3gidnak7kQyKPo2CzCjKYnxBeyLQ5bFPKyFwCXoSrz5JuY4RU3dGzbCAaSdjRFUjaxNwc5foPdj8tgDdXXUwmm8n",
  "key15": "4x8zLLiRH4UjYb7dhNbvtv2wYLeuYergkoG8za9V5DLSwTwqtZhBAER4XAEW3rPcftEAzugLjFxkJSJVGrzqsn5D",
  "key16": "62X1nHX5LuK3GjnpJP9EYKUjbAzu7pvoUnJwP3pvJdBbmfLsHiXDdhgnLJYf9mDVtJNz9yYQ1r63bS6nZnNbVrh8",
  "key17": "5nqkBdEfXjEt1aFe7t3EBdeKWP7jLBjx8BSGsJj1ViJUk37dkZeDYEBQESV117amDL7Tf1vCJY7tsGi3gETV1fwg",
  "key18": "5uWYpFJtgCmWZeVXhaTMnTR4ULX4hLtdU53zRHKZTxThC4Ln7xVSBmtfLrYopZotzydJVFGQP8K29U93BksrBAFi",
  "key19": "5PbK7nR4iCEdH9NjJF4egEcXqHCAeMCCxmEhc4JyLL4zmJhcmKQ8JBvv7irC3RXzuNGeFypjdznTNFNHdyo8Kd8w",
  "key20": "NuBF1xyHtNDxXagDcUyMQzjnA7SAe9ofaRewo4M15oHkth29adgqZ2kbntpcEMiKSx9FeVzf9xcU7JFyZdcgvAB",
  "key21": "3EvmCTXxpvkecTwHFU775HXCSNz7yDwHXocNqnxRN9Pyxw8j7RrrcjRK8RKhgGXQZHtACkP4h8G4oQGsQJjbMazG",
  "key22": "3FuS3BwNP3inPYisxZCdVwLusjWMZNotpLoPMFxDHdomGQLuU2P6TyPXjbJLnEzjgkpaFhzPiWY1jHv8qn1sGoFK",
  "key23": "3Kzd5zD32TXaeztwX4XLdBFKBf9ECqed75dbZ1W2Ua5vvM4bNGfy4wgkHQ4Q5MaghsERPKasuVgfKoqNsdoS1zcx",
  "key24": "5qaXN5uBanGctfL9Mh5eRiGaygdk2FA8vu72gq8oFuoBvuFUyM1acbGvB6TFgjALW7iC9xDreMhZmu23aRhf6Vkw",
  "key25": "Z5jhSFXqtgiAw2P2dbSAyV3wjeTB7r33g3Xvt8SGbgyFbbiHhKP1LTk4f7cwVxwPnjW5k3pp2nHvKNpqRH4X7zL",
  "key26": "RtVu1qNLfh2bi56cA2GJVFD89FbC7cAVM5QGPy1rWURvqffs26kduzYk4wRXJX4G5Rzk5k2GhHKKWpx7RMcPsLW",
  "key27": "4qJZ5Jt2TVwZchmbwVRMf9cUNx6EFQW5QDV4bV41XYWoPaXz75oZXeDgpHurY4WavTkrD4Bs4VQACTi9rdksNTkZ",
  "key28": "qHhb9GWZWaGN1v2KiBxiTmdDGHoxZhQcf8Vejo1ir4joWwNph7v6qzesECqiUQg2XJb1GfJfXBrLuSNeKiWWTZF",
  "key29": "3ocY5TqGWXgnX1gviUeSbweefu3TPcgCsKD4sLtU7UqLRwaqvYMeM8Pj3u66Qd21SfES7ipMHfuM7TxcGb9pnviE",
  "key30": "3qRdaf39ofeEgmHUA4n6kiNRyu74kadzGYav4KKrNbNceUQz4XE6a6EeCnazYxK1Vt9PDMo7bio51aB4M6VUu7Kj",
  "key31": "3A8oUUxjQauyCZYbSYA8up84PwTc51JKwZyoVsoa58GHJ43GvyGtLsv6PAihiwsNpDRkJ4ey8Z2MAiQSHwgrHrgE",
  "key32": "28zbPwkG9WEcPYZ1SgDKp89Vi44fvLyQHpeUZXCuTczQy4uv5zCNwZpGvY4qhXFjajfKpSHCvZt7MuzmYKJGkpmM",
  "key33": "KKNwAfVoapKUdNJS2MTxu7qnAjEzFEC6s29tUUCQKd49Nsovv6PGLGppoADHxPH9QnLxAYU75KmRdEMPgoZw1M2",
  "key34": "4kqKLt8EoevuKhbzex4xFipDn9LdUie51dqMR7EAF8hy8hE26UWY7dh1rQfro9ycWxsvqiCgGUVezv2MxQLd99Ne",
  "key35": "3WVce6tJqvLpPheT7gDbVPWQpWJL2UoxmhpgphXvQQYW8C2YMYd6gccGd9qgPxPayDyVs5M37vukd9JTN2RVEUSR",
  "key36": "3YDtdSVXuQ3LykPVSmERghjcyT6HixBHJ27WjC6LCDrnUpNtjHyDukQoVGbzoJFLoKaGv86ZsSDYy8dFstvUj1yh"
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
