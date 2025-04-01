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
    "3m5Bgn2qRrs2LvhzeAeesQqPvGWbUSgEN27x4wq7DKKj43HpUR8Yuuynuheo93eRxyeqEEP5fw7gNo9pn1x4jJx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mrghPKWtzaGCmeNfBDjy7tPriPrfmhYiKKTvdmjiTuanYBNutAvm2KsQbgcYGzMmck1AG9CECqyzhAfgJbJAKeY",
  "key1": "2feqke1eJnY5vK5KAT4nW2HFAhoyWukMF7BqTAzZuhcQbdunXgR3sityGPT1EYx3be26ux21bDYVEFZ645HxmouM",
  "key2": "RtBAanRPhq4HhiXqHqEZck91AeoRCxR8WXKnUTE3XvnJxNFy3XLF7e5YmRbd48fXottLvDywMEeSzfc8zmafNxU",
  "key3": "5AMsdciEuCJKYi7VHZQdBJewTwU2eV4hGNJUxX6Zd1QpyLLxp8HwkAn4MQkJ8DQ4uxfcoia5yr8Va6iBrbAbzBEH",
  "key4": "58v3K5pmrqJXfYRCbTgkPxLcjrGCf23hteb4RQDhQTjdzLro4YdjhprrezjwKREMz9oRgLRLBDtjPs94xezgi4L",
  "key5": "qCzk4pKTD7F1m9m7Nk3LfGK2ugigtFrHpZ6JYdqZogyA6g68cJyTJNq6LQ1e2L2Au425LA8vMxYZTC9FYNzXLDe",
  "key6": "4QLtW6VftLiZiC9rRMUXVYupCBMp7M7yfx5S3fFJB7jSq2m55WCjT5cpeTcd4YXLMP65TEJ159cR2eFUuUYLU983",
  "key7": "5nc7adoqBpqnKBPv52f9szTNw1dmk3wnpdV3wwywbdTHE1dpag8F87p83yct1gJ1EQGfkFda7aGdsnX3a9ck4rXd",
  "key8": "4HHz5FEvhGHzKJvxd5iqkbMDzEauQs6TLp6tLdynr17Se56sWjS4hNdmDdvu1EBmtYXwE61waRbp6Snik9vdQRmW",
  "key9": "4Q1VU51DHTrkChEb1VEVtJRaZHg2dJUGhFY6S7UNr371tvkuDWWCJ4PeJEefnDaf5r2CvfGK1B5YM29y9CNUfaWi",
  "key10": "DPRojhFNE3zDwyx9zTfCzHsJpq4kXeaYuPDYGoYJ7w8ATqNfQ7w7TEtT89TmEexjxJjSq2rK1Py8GU22hXAsiLZ",
  "key11": "4twbtorRC2httwGnCT8d5Gdz49G7wbP98VTdsToe7TcYC8wWcAkJ4gqwQGZ87joncn4hb7FAnLzEHHaA919bD7pT",
  "key12": "CXaW5Qk6Zau4gBjsCErmGXDQ1fZvSg42ZpzAkmqQzK26Lvu8F6QDUZcuKv1GvnE4RmiSAvwGG22KeGHzhu3JHef",
  "key13": "PMqLZ2YW8rKLT7Yrvm1EA3i4sSdkSzjV2SRm4pcDSQkbTovcewyc5HMkBHHz8oB6LE2CFfuttoagNHHyXAFDHXG",
  "key14": "2gToixBYYyMRbsJ8CLjrAyNPi2nGCwRoJsrE9QrQ5EGjSoycHoZpynwCPMGdXuT4dDdF1w24NJa6ku2dtY5ziqNi",
  "key15": "4nLMpu6BF877kCbRzuMjpWdLJDkmZXBUAazh3W46v5pCqjNN7STGkouBQjruRkGas2X9rXBu8PcLhDQwiA6SV9TF",
  "key16": "3p6guCiu96dKVdgA6Ber8w7yNF5xPJ4Haw7ins8MXJXw1WM2ymSMeQnQy1NgCesUWAsoUoqeWvYUG2zqhca38PH2",
  "key17": "3ZUoMhBY495iyy3BxrVVSd2Ts99dntc7Y1Pyk9u8R2qagd31UdQyDv2EnuUf2sqBqjWECKLpXocb8dcJBXo8Bggv",
  "key18": "3MYECm7fLWzwdoE8xFqTJ5nVpH38zaCjzXN2eLXd53w77UNa2Js7BUzuydjpPWygLGiyxwtgRtjTiCwSCE29rVyY",
  "key19": "2P6MEt8LVXevMFiQ1DCmAGBfd3q7bR7svLRtiRDVuUUoxMirFwq6H6aASxJXuCmpNXC4KYUgMnvhsgCRf5FVJ3Ls",
  "key20": "2Gq2C7rNefsSj6urCmeSD7Gs1HpiV743tsjL8QghyM3neVmJL4u44qHZSwCGQRCeNEqArFf8Nxn7mnL3m3jgSaEc",
  "key21": "3R7tx6XxMy2MzNEbx7UnfTsuFsZeg5FfGVQyY2CvgUbb9ZdPShCVegFXdfPz3bgDkMBFNipGkB69j95L46Yc7Vk7",
  "key22": "3ay9JjLHQL249hzwsSaAssK5MeRBjsK7MT1pvxLGbK6J3jP718H9cChGWCAovbVSEU3ZWcCtDBV5Wr3mwpdDwAre",
  "key23": "2WwaNYHiv9T3r8AKBor9yhoZwokSFdwM2Ywrcz47ccCu1eSkd8DEVhX9J5Rn74kmdYpWGXrbCDcRYS5pNciKuotq",
  "key24": "3ZuERRfxchbEo8KdUgDkzMkcgf2P3QmaxrKM9ZEPSqzZ27GbhZGZzAFAtXtUziTpBKYUdrkVHZ5vj59W7P2N6oq",
  "key25": "4T8x29y55CwjwSWQHmWsRWoA7a5GAEC7nzs9AdphupeADFDS7Wg7bmYsaoyPjicKWeZpjVJmnyvd1ZUDtC4cmdRX",
  "key26": "3dVvjVKadEqqdqJNxD2UhQK7RQuiHcfk9pFzgWZ1oE6Xbe15ARw4hYo1q2pVCGdGJGuW93cHnQzMPSLhXg3nMJwj",
  "key27": "4Z8msDF3dQdZZbjUXUxC1X6Xt498ZFY7xoRJnafofHK4kV7gjxdXiPxGCsUyNcRQMeujXS4t5a5zH3Dcxen5tCud",
  "key28": "4t46G3ba3c6nz72NVw2Fes7nBaj4HsvrDomwiUV2ReSfvFtf8sVTsNHj1kZR26gP6BxTFR8kkjiUS5xfyEbgkNSc",
  "key29": "HRa9hS4L3u6q1vCVFw9uFfT2b26jLeeqr7ZKdn8HxQXo3cxDTrX7NKW4jafstdBfwUumvqAeezrd4yNGNq3WwdG",
  "key30": "4EbJhoHwVQzeXUT2wbytKeRkjwz2CVJMGhwkw7ArCrRt3iGSj1HkTJHqEuGuj733PRXayW5BWkr7p6eapU3oZeAK",
  "key31": "3HXkXFnN1vj7pfHyuYtKLNmR615w2ua6D5i5Qxqxr3xK6fKJM5bMbWGek8igVptW5qmhK6Kw6f2UsXwikRTGYhRj",
  "key32": "3JRg5SroZRgp8zyREYFbdzG5x6eSsn9FjMBP2QoPVoA2JRoSLJNkqJ68TZcavgnQ78Z6Das43vGApe22hmdovweg",
  "key33": "3u4YHpJQb4VWb6wd6Zqaxks6G8JztEcPQzCaGspzB4n3zw2mbMomsxa5kNb88uZFZJdKeNjjKtf5nwjmgzkpr8WK",
  "key34": "3TTptT1i2HVzEUJ3owqABmXamP8SSE5xETay7xFbtMVb34Xeet7zFJv6AEiKXuM9crWbwpT96iYJV4hmMDJK4UYx",
  "key35": "5yEhdPstWn4gLo4ce8zEqmj5Rb3zSQMes6F5WSqM1kw9UBxmiKGLCobQ9cNPZdLNVgxnrR4XE4yZA6Y1Ep7eLh9q",
  "key36": "2esuCP1uEfa2gijvYFmUFo7AF8J8Dh44fQEf5ys7PpL1Vdj5szU1BKHhwqNNVb6M4vBaZgCSkX3pvWeWXryXQnPq",
  "key37": "48BSjMLdbs3dtvUtoktjGRE3u7fSztyZnyxqtKQ3u2AMKP16CkZbMYfr6LhCXyqWFC957jrZdG68R2HwPRqWMRRt",
  "key38": "2kFRrqzFKCaGSLzn2j682nS28WigwfVTAxX5nftx53oE6ByZsmMzEGYhEnaaPHuk9RkfPtNEJ9jBo3aJRbrURRKg",
  "key39": "3NcARoqDjv1HkgCCW7bzSDsiAgh68sJkDbiBaKU2XFpzSKjKnbUZTXYNaU773fejHcuWAGUMQt6TPkhaCyDP9PyF"
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
