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
    "2uKkyaohYXKQnFFqKTnbpsBa5ZaZSHJBuq9uTQh9pX4zwp4ADWhCU952JX83kcR4vx4wQ4dU9a3dzc4uKg84ibjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2epxJ7Vy6i3mRciBkdWdEHDemSW297aasSNyKWUGWMK93A9twPWvPmDPEXiNqByrpwZtoTya41B6VH5ujdVJ2omm",
  "key1": "2m5t5GNaGvEqGuXn4kP3Z6xUiF36nySQMHF8ZKY2GvTfdyoh6NgVdBadWZ8cX5mMMivprdgNvRFy2dKTJeMLJf6k",
  "key2": "zggxpMyaimvWpT5H2xtHPA2LiyyWzd2HLyUFq4iqVRVmetbha47hjW1S1zHWe1NLLes5WQNPFBV6Nkzz6j3yv4d",
  "key3": "3FqbCPwPqb6kbcpQAgp4ySrmfwSbqZNpDTE9DhxUvjQRBFP48SXyQaFQ7s7Z5LtwDQF6oSnnYe34oVQQ2DBPrT4P",
  "key4": "zFKTVtUMH8Kiz5qfKYXBjydRCm2UGB5AzfSe1PYrDawsWinxxuT9rtRqTRxseBAVJycWrTofBAKmXxEXqvTG886",
  "key5": "du9qak3xXRmPMmzQzUgPQHxkQtRMDqgXXhuDYkrWrzhzxG1EdvXwtrSurgT2JHRv4mqVDFDUdgsJb5SDJVpRKuu",
  "key6": "4GdEPNn5Sqhxy4EyQfLyndQGEG7JhADXsFkUeNCjoh8YFcXAjcEAXckWctiCAWhmcBwsCJddRvS5we2ahBi7sows",
  "key7": "3u7hA1ft4PTgjmBZuqf5Yrx5BxdYSBH6Hu2Q2zWTJ95NDNSKZr33qUKTQcYXcnyb554v5gghHbZ1MSy8f1kPcg2S",
  "key8": "vJSv5itq9o3JfaurQAU6beiKezzVbnuY8ihdnRu1aoPEw1ZihV3CLqAD3ee8CV4rRQHPZ8k7koxdA9eb8YN3JTP",
  "key9": "66D9B1DNgMEv1P5bjMLUNW2zLCcjZxYTvEXAWmQvcAwAVusGXGLj1qCdgHFbkuHcpTLpuGYS6DEFFYhuWT9E5tAC",
  "key10": "2Pv59RjdTuqu2ajwEAdUny1YZxXovUvXkZBfvhKoPaKRpq2N8X5tg5fbLLC2Kbg3Upw7uauCLJ4Zisr9jZ32qCqM",
  "key11": "2W55eVRr2JY9x55e5G18BCWxbrmRXJaMBHd9kfdQqWBmHcEYvo4kvDwVsWpcSNotCAbbg3KG54FpStBRsSP4x4rH",
  "key12": "4Gu6s4zj8Kg6ZTjCsfh59qfRGbQNqTLSCHYXcEcHWtBgEdUm8rmRfgZFmZLK1PaNDVdGP3ZkGLRjnPSBPbrrjZaP",
  "key13": "33bv3UAsfdGPHNmnWQcNiSThWk2Z4cnFdBtQfDAk1CMvuip6HUa5yTrju4LpJFYut2kQtpWeyCipvoaXJh2j2iSv",
  "key14": "4w1bXSDpqNYxiFxEwtJeQpQqYTdt4z34dsEyuTzhwacbuMfwBVpr5WZ3ZoZu36uJKL8XWcGaJYRNrDWB6LJr158a",
  "key15": "42f4TjsCs2bNz37gcveEsDubLxpYWCtvdxA3JtFYdMjs1KfTeaM2Ehii9SzFLF4fDKAoUDLviWuqvrhSqzVw49og",
  "key16": "2K1RvgQZMKA2tAdYwmLtQrAA45kKo6Y6jTw9kQnZpwrccaguB327dVtDh8456J3JDhxPic3gWUG2yrTXERGYXkry",
  "key17": "2dxy2RcLe6vpbfbNtopxYeXkmMaZg8XKVg2BozTVqiYwyCfPY6vPdSzfSEs2iqkeDfqJ8b3wLDS8uyApv5R7EqUL",
  "key18": "4NQfXm9abrvGsMKVGEGx7vARU8B4XJSMbaMcTv9hAxSoaWsT3zZ7nJQrzGsdSwCkZJvN4pknX5r8HjRQEW6afhXv",
  "key19": "323RNqmPqsnmk9YbmN6vgWu2q8B9RgBsPMXLqRhvaVdq8Q1mqSFqoW1NygwCYcnVaVGv93qP1xpcTLVRe1kFidKt",
  "key20": "2G29bb7FgPdLcrpiwPTPHXFBPJDDbD2uQXQ4LxgYVDNRtPbuGcu7uajc1i3MBvqXK4Fr41bHWosJV8Kxe9td5r7T",
  "key21": "2r112vrMdfDbZBEGgdS3f6LZM1ceKzzUnhJwwRAy1oZDJV42bEVyarjkovR6JTpGj3rKxPzwWRwHPLES6oSrE6Ct",
  "key22": "2DrKiMegDv3Yi8tVHcGhDsxEwonwjkTeVG2M5JwktYi6LUdcA7StymnvBgBqquJRWguFurhfvt4V1KsfwrVcaUZj",
  "key23": "4a4S8zKQAPPuRjfSLE1utTuby7QGEPVe566USKZ8UxQwoyrfqb6wwHT1NEzaMuQXgNjMjc5bJNZBX6ybYeik4P3f",
  "key24": "4GA5ZyV1sshSfkmcT3a8zbZjXASvHP7SoHmejCgybohs942zRw7dUYJEF9z5VXoKwJxucAZVVKEJKsy7kxHWd36x",
  "key25": "3BTCE4zJX4SX4HSQWuE14UyMt9ZyidPYL8rpAs2kjViCFeNZCCvYdCLr8RRsyfNrJXmDotztrNDPJCFNgqFoBNto",
  "key26": "4PWuruYRqQq7jHSxmiw53jVG7RUS7AWGy8XcnVoKpuukUD92MWcjvYkKpYrHvwfXzDYzKFSuUAdJHyzjUZYp36iK",
  "key27": "TxZqNrs2tqdHJy3a9QcnHVWemcewELExbMwWt7Eey6uKChZkdgb5CWSkjrT77qBo64s23RcHzfen4gDTHbaATQ9",
  "key28": "5DPXCz4Mvrny18eNguSp2FxFEqpDQhBGj7Cs5eu4PpfFVCZDeZRjt4xM5GyCSk1sFaU7Pf68vyR8HDsCuRofJejW",
  "key29": "E1ipGRZ2QD4PGo3phc3AVnQTZVyNw6ux7hHdbCFNofZcFbRyrJRqiQV33E6sfhmqSD6BetuCgQrpj1tHJuK5a9V",
  "key30": "eNBmepxCtrk9TjdBTVyq67ZY2YQXjzVUW8uUcDz5u9JQtJgBGHHJvfxCp9qmZvoBWF8LBzjb344FLCxSmBBbRz5",
  "key31": "24e6BUcQHcHYzyw8pv2DK1HBSoq89fNmvwmcNvLXjyAwKCDyfceJm4YvqwEVY7YyouWmatVv6RNPEMkRTdNK4GN5",
  "key32": "4XLJb2SvCJVid54zhKV8Myp5yChsMu6qpxTdjshN3DTyQhuv86LwvgQomkuasbDHN6a7ks9SihxLKKx3LCSVrsU3",
  "key33": "65H2eH2GufrcMA4uSVno6nEa3kZWLPw2LAEpGRrKUjrLrga1NbMc1pLMeRJkYkExo1M5zDRhS4X4SJdcPbRyunDZ",
  "key34": "4sP8CmFphoeeoCbWjoCw1Xg7d68uxmXNBY4Rwem5mM2gLrhBqCEMYUzuyop9ReYr1F9sANtkmq2kvjWqcftGH1oZ",
  "key35": "2E4UaKNoLdEniQEKs7XKK3UMGcBdvLZHRyGjJqpntPhxWAHETLU8PUpbpLJBUaTP35EWxnwzYP8dG55gpUSG1pKT",
  "key36": "333dyWgFGH9KuVXGLAPbc5Ax4iz15JqDRbhtCKTAh2NhJ2Faxo3qDPchMkZBZjgJcmfFqsiYVeMWFjCFxETXV61g",
  "key37": "3ox8F8VXVQwsxxTuozWob2Sm6wRXbeknUNneoxBE8BwLEqGJcoM2WDgqTGfvAGDYeb1rmkYRLbc6E15jtPT7S6Qn",
  "key38": "cjAKF1F1UKq7MfyePiNMdvF8JPiLGgcXpkzEUbWJuF8wEQvNoZesi1G4pLFmpxCZLFKuWdCuwW7md5bdCCXrzPd"
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
