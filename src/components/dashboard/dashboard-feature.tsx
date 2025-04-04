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
    "2ZAqQ2M3JUsF5RaRtSQuFMg7tkw2MDyn6KZ7jAH3xi7EVPePLPGvv9KQgfJs8DiFvi2WFVvLiEsV4go5LFisr41H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VmkCaevdfKTmMJHkhJecpSjjD9FViSPzAjxkqze6Q1sPJLKqX6nPC6gbiVop1yfLh9RSiGx2mb452W9kgeSutyf",
  "key1": "3B4yebuiKCzAdQJYj4du6YBEt9AsvaysyP9C5uwDpakoNUk8rXUPhzPiiAQjLn6fvmiw9TFr1uH6iTTArrLEGiwQ",
  "key2": "63EStQJFirCcpkyetacDVekD7PdKm18iNYXdMyEtorkHoA7doBpssZdRteGwfwK31egkQoduPJusuDqKG4kRDGyY",
  "key3": "34XGQp3F1X2MV2gSnnkLefmTLEvt6qBTJtf19fG1LJp71RYzfMiNaq4SUdJohWrZYECEB39uC1xYUmKPouo3iE33",
  "key4": "eda9pJ9GRSej28XsCoCG5AB7eFM2iSFRaUdPTdH9vVJHrixifkGkostUR1CRJrVX162TR7PCi41ckiPffytywzk",
  "key5": "35NPQMa94YBb25y7rafrUFztXhWLzkks1NPomMhDRwFGLrYQGG6z3YvT6wY5VMujaNmyviqsfM5n6KcFaLrSKGhE",
  "key6": "ZyyKkq2CUkfGXfLCREUHEfR4FwUubJUbjkkVjapMkQhVEeyyYCHZFXVWt967bomiTzwdKaBwVgEGBCA5uRQuwzm",
  "key7": "2UgahGTizc6eLewqkgmABLWkHyYUHpeBz7pjfdmTC5FtFbC8E51ZGMXrE2kUcbVyUiAKwDEweanJhyk2GUWGZiYG",
  "key8": "5jHEKyUDX82iwKjAzTvbqUvMSsLMkq6oi3Mr7zx1ZYiPc6Fc77GEKk3kQtQwsvhGUUWyLvKGQ8BPhpCYokzXkzqx",
  "key9": "2D8GWAYhweqEoSFnnyzhvmpBnxUgXgYHi35LeGXN1JubaeHgFoZQRZRqxs1vLUsztGdsP1p42tXg4hQiWFAyHhec",
  "key10": "38HwbePHb5h1UAnXmhrcbUxqJSEUHvQTnijVLRQGJ8m8j5BSAhEvz5VF2Tw13oUnn9exvxFXmTqdbJpyM2YCs8Wy",
  "key11": "5SYBTuN9SfFeVKBk8hfpmoB9ViG9DhuRLwSjXBYpaL1BUT1EMuYRD5b7BFLXiXqqZgNPL8ETzSxfGh2h7Gpmoa4W",
  "key12": "2UfpTMnCBxP9EQiygyevqXB98YJSnrMsKScVsVgtPTUaJLFG9PZU9vXQNdJbuTy6V7sxMdbRWNMAgPiW9AtZrqc3",
  "key13": "3Y6K46oRfaJjoo4fvZdh4ghn89biVZT78vAuMVzSVQiaaRze4YJsBJr86gB39zVQetC8CULAgHG7jq4CCeVjNXwE",
  "key14": "4gEAecHfcMkqY6z7VeE6tNdF8qSyqFZhHeVmjV1Vw2UAmSVFvk8htzxrEw7sNpTBaYQv4tM25MscVJMDhjQPfVPa",
  "key15": "H6NaGf929zuteUfyjLeXsr8eMA2DCUcxK7Zijc9JFA6Xh1CuTd5qUzaCH1o1BwRxWedhFgbS1iwBXxLf3ys1q3i",
  "key16": "3utYXyKjDvUjbnZdM2Qx95PqwZoRgpewsFRkUh5GEBm2PvTnPTjTwaRDHLpX9pnNzn4s7N27ZyH7w2RuyPiXFaWT",
  "key17": "5U4q293vHRTzUwh8aMhupmjNyt99nFYXSLvFPz3KtqjCZNFojW9tKizNrGeuWk6bYey6dLPiygXxjRRpncYKXNR1",
  "key18": "JEdbtSy5EhTGmTGMFF9TUSWERuRgFEm1ufrqGCm77WV21vDFDAZzvs3fEK78iCL3r2j47DJ9TTWcwRYerpqFom8",
  "key19": "2CDurxRDsSKX6EK3Jwfo4t3TFLZQ96M5DfH3nJAp494SyqTZRoCRHZ6YSeSiguYjnjuTRAUJdw6MrogJjKs9Wa7N",
  "key20": "5hnzdbnMDp2GHGbRCMTjCjm9HRNswHHd2jFz6LERiqScSp4cmDkU6AzGhK7J81xzcDP9F1r16kP7Z7z4dKVrjCWs",
  "key21": "yybmwvSRWurjRgSuTBRkYHBWRumrKF4vrALE5qd2h4fHevwCGATD5qTny9gTbWGZcXG2q24KWDq3A4EUjVBPvxg",
  "key22": "3KEEoKAGNiFYGd2g38AerWTww7AR8Z4TdipYuBdBwLDC4ejgU5mTroD5E1eLa1iQF4dkQPAgex19MjzhoT1un5eR",
  "key23": "2sqeCNoSS9GzMMhxZjnj7QxhGP6wXbTh36RoJt4irxdMu89d6sqYVp9MVSjy2jzdhgBk4W2JmHSABWnZFybCmy37",
  "key24": "2gCC5zNnvsBvXuQ99qiCWjYLYzBVfDxjpVYP1oLMkVFaCMKPRm9gURxeRXpJwLKbSY2uXeudGnir28WZW9ZFjSFo",
  "key25": "3WuVe8BbjTrk9874kP5JWarcPZXWWJ8ze2p1GYPk2zpjpFwfjTxWcyHKjvE76xi3i4bXgJBk5RwoRRnBdLHMgFVa",
  "key26": "2miJB61J6amAkZucHUev9SPmGaKtXTvJRKa1xNWBS2F6KzStvR1UMZpxy3fakrBV7udjNLe9L7Lzfy7r6RbKnNv3",
  "key27": "4UDQqjH27HM9C4FwUYrpiEbE48MhVnTjs2v4kfo3FxQYjRAEbf92xXB7puoYVNHnQfvet9e2hrrpHPEkX7ng64gc",
  "key28": "3nCWqXVRf3EDa5ES5vwN7X8oeVae2GyaEQPKXAEgSxZNQq6mkakNG5UVR7ZvTWyd7rUkSWe6CGpBygpezZa6tmzK",
  "key29": "3p6X3GFMJw8aqo7LY5SHAUiG4BQBZpzqENNjgd99LJQKeRyynpZiPDgD9jpcHwkCBt3cE6ad2dh7dv45eVCHP6Zq",
  "key30": "cMx68wkAoiVECLGrHWEHdyc4rq9EG8GfbPLay8CZMRTXcuDSaqtZfYzWdGCWnDEJnkUF2K4bzAyaGxWye8692bn",
  "key31": "664AtkkqLhWC8uHMpmGH6odUZJLdpQ6vyM8aQnZfqnLeREpYD2hS2AuVvoVvJbWaKbDrCNKSNdtruNpSxnfoXAr8"
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
