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
    "BuGAjXPWNfrWCxnMsqUQ46YUWpzEntkX8Z18uJrMJK7ZTaeLCBHYUJXf67GSDFc46MXQ5gcC1ZyLLdhPGL3YeW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cY2PpJ11CC5CHQ5eEXekjRhTVEE2nbK14rvqjZtE3AYpfd8gy2CMcKV9rVkfJDJefKwdcPKeJLVMvFpQ1tnXiYM",
  "key1": "3Ctx2TdNb16LvgXT771Wf6gLfrZuHAoKZ55yxh5soFrXm17GKZBxsKTVwJ9YuRcS8wxpe3S8AWUScugveYBSkKng",
  "key2": "411ayu1UXHbNvHuS5GCVaU9yDF8yeVfBy3g8SGqG2FgXJ1HMLuSmg1Ac5g64eyiXWTZH7utj74ruV4LKV8zyaQoR",
  "key3": "4WQ7dbBZA7sHhS23NWAL4jEfhVaRxWEkRjQcAYqMwkP7Vphmsps8zzzLiJBfXNgF9LSFJ53vQWrLkj4C45PuCWgC",
  "key4": "29fAZHaSSV1xdabv24r1NjrZTC9w4Mp7eb6QHAtDikYW1pkKmymbW8aCc8NJfQSi8P3nGuUAA7KDP7xG9bg8Hmsd",
  "key5": "4p3tcqoTkF4iT2tGAxBEoViTiR7CtCPpZoC7hUpzPXRzPPxi2LjbjMKWSajTVwzH7gkq2AFZ5pFsWyyfwM8HfV8H",
  "key6": "5iZi73mZQCydPe7T36YtQr2Zun4gs7tY7sHTQ9zEYHrUfF2MDsQfMKPzkYLc9T22hLMvnbo2MTAG2ia8whCB4z6K",
  "key7": "2ZSjwTyy8jSzhybEbpwh1C85yCsGKm6bWgsYyaYzvDmKr9NqWejWD94MYB6KtnUqNunqgVMo7EFsqQLBZZmPExNx",
  "key8": "5YJdCkN3f8LStcYYNZnJMmrQbEcZXJN6AwKne11pweHgFj3wRxUdCMFjSdzRRmRBYaY2aX2ziyHyWcDXdCWcBjr5",
  "key9": "4zncAD783DwvPtoTvY4G8TbS7jw7Vuecq1craDKdXzPbh4KTY3HRgUmAswggP1pftZivNbayDwP9ypqMUvnHM49y",
  "key10": "4RC6VyvaftTXc1TGVNKuHixXK8mqp3td98mjiehfT5qx1SrGAyGJP7ZjSWuknGjyxtUfWwttXEN73ueDsQH9hqwc",
  "key11": "2pFvqDTHcNnEmUhoE2WwXG65Fd1w31Ear5N6PwcG3iWrMVypL473XfNGTonNpUxMNDeTAM3QvC3RZa3Bi52UEW8C",
  "key12": "3zS7zzKWoL45xxEjFsbwGcBq1b1sBNjrDdyUdVtUQdzjAQnXmhLxuLyCCLyBKkCKqACq7m48H5FJzDUVHhjSzZhG",
  "key13": "9cUQR7vHNQRCPA7ANDN3xr2kakrZ4ZpiDfhriM4eLg61VSVmoNfPojzWmx5XP3Na1ESm8YZT24N29Y4suxJz1rK",
  "key14": "veoc6Nymi84wfxHZDfXiBZ3rQRhxDxuVmqWL1QzGxYapw2bv5VinLUiF7AHi1TTD91rj43DzgQ4gDzhs32ZLFj7",
  "key15": "4ZuXE88upZ8jrX6f1MMoj7izWU2RgBhcc5PtnGEnABxwZmFgb6aVwmSVahx2njyHNXk4ktPogBNWyVheMhXo5vUg",
  "key16": "4AR4kZC72hBDHmgya14NoRNP4YoBWC8g1JjgHMpAqeTnNUeL2vKwL5RHECknizQ4SwfWrtJZh8TMEYytjDdaKr7f",
  "key17": "5WcioUYwGX6UeJ2Yq9KGMMwWrawFD91EszPLA1RvsBwMoeo6Eg8B4ZXSK1KFVbs5nJBJ8pNzk5bwhVyzgGqPZEtg",
  "key18": "3EtDcxCgcjPqrFU5QwNsvADeYQkCDrWBNppYdaoepXuPQtpZLHczD32z2M6qMtNKgpJWHxKiJGuDwxmxNGvUJK5Q",
  "key19": "2viFfZ4rFSsNiobjJb3BfB5t2gwnYC3vpsgxyECGhyc1EJTguZ5kPeDHXQ4AfGb4ZfJ5EqKvR6Hrd5DbAn1uvMuE",
  "key20": "2wCPujJtayWB5zis2FDFTaujTVthnNQa6RaUckWCUQxZ2YLW8Y3iBVUHHMVwkJ2ivRgoFziUiVNRKiUD7Gbf8Bsn",
  "key21": "2tvhQJg5PAXQJBmPxNsLEZnu8cYQZ3YU8yBHEBradBGdrvbbKcBQxko1yG6mxqEUCQX6rnuNoykxRxnonx6faVXb",
  "key22": "vrMxo4yWJauMJPGGADMgCY8VaJ6ZRGAjnqCsYxjPf4rcUxobrHm3tKhEf8FjetqKv7CXPh5nF7eJfzzRGs7d1Ux",
  "key23": "5PcgojWdxvFsTMXCqxcKAVVMiFLpLcdJiTCLZtcRGTMsRm3y8hewQrB55KPNtMy6BzAjty9HmXvi8hhJbAbXWcjT",
  "key24": "4iyuh81kQViY8svN9K7V6Ss3qWvNvJdUnAhC5EpDSPDi92MvqufB4iFWTgpQhRbLaULfYLAcSw55EpsCo1EgH2NS",
  "key25": "4kHJ9KWg3NoroyQrUFyxETDTbob9K84AD2wN4kH9VFUKukGi6o6MX2chTeeiEL87XPocGEV5mCoJ3xSfCM44eBJg",
  "key26": "4HeMQBMznR3394KGANuA2hZU7EV5QcL44HSFRdaY3stCK64nwQxJJp1iTU5qKV8ZjXKX8f1NtMH3c2VJoCpaFpTt",
  "key27": "6NwFKhTTHUEMDSVLbCByvsGF2Gvj46AwwnZ38d2N5mhCr3VLEhw1x5RMoVeCZS4p7qYfcSSFoaKpgxkpXykbKmm",
  "key28": "2ED7VJxEo8Pmx9Txy9Z9bwzYKLNfYM8ZhXbusLjumj6rBpBfky34ZSPP6wnXyuEGDznWLC8gHQTrj6Jgn1wzErHN",
  "key29": "sKVL4kbAaNYKnc4Yzf6HUNy9W3NMst1HUTN8cRqJUUWNYDBRFvhJozuouDQepxJVVWop5MTreZuM1HXvUpfV6QY",
  "key30": "2RgbeAv6hMvB5Quv4e5xUfgfHPVEff6n5atNuDcgfxNrj4JUsLuwhicr8rT9cCvivMk5SDTjkDJTP2mgGx759yVB",
  "key31": "5q2wRsJLw8PBajoccAh43MseXDoFGJNekNMMf7tEQWvALZTvfnzXTEFH8DecBzAQysiPRKhxdUkDKD3pkAYDzzgN",
  "key32": "56Knw7pEiXtgvdVErYWicqk7XbQU3seDN5kLFjT1QqYUEpnLzqfdxP75CZBwf5HuJKRpLBj84mqnMMZfG9YbJ5ob",
  "key33": "3v3s5ZVWLt8mzoS7SHYUDCUbJWmcy6TAGPdXnoaijqFx4Ln648LmsRLaLSLqYxsvb5JFv9XUxcemndMJMv27aB69",
  "key34": "3TQVZbfy5wi6smsxeqTsb4Jh2n4MCzXrXb4x4x2MgJjF9o7bnLzCTZnDXRRTNt2VDuNLMbrDDnCh2nFuoCycSweL",
  "key35": "4KdyPaTS1uzhoKtExu2FubQX5RHkHQtJh1PChcL2ma39VpujbZCjRqM3StE5c6nJVK3rUDMnqwVFAPWxUaPhUgw5",
  "key36": "2oosQrvynd2xzM9J1Xx7kwHvtWFsMQ8Q4s34EyiHV5jWNeYvYUBP9K7kTJD9GXhb1PoDQc5RWsVYAhCChfYqPAmT",
  "key37": "EoPztyaDvwZ7FU6j9eVPoZMgA9DkbGHxkCEc53QsrwbWZBW8d8WDnJGtEAFm5bkwjxu9GBhms9wy8RiDemmtZTu",
  "key38": "xnXiFvYzVRURmTMjGXpLGWhuGdfWAdaMaV7RF8da6cVHgLRKwZnuHYNHZk9FmaeH5nbymQ7YXdte51utpjuCeVh",
  "key39": "LgqzWCNEWuAP7CqnJq9WnGH1EpoYjxhjsrhbvqVpW7whaNmxKRkg5KVigLBWLbhw5WxztZDay2TekW6UdVhbjcT",
  "key40": "5Gcm9tS1wPnJriMTiiNftacpPkwTV1tg6kKdYhQGYKJFhvGkqd3T7pp9VsAK5ENydyPRb7ajGVLYx27gGSLBVmyW",
  "key41": "5Ti4RSSQeXTeMWudYVP9MHSwu9p712JaRHWM4MwyxLzZRT3NaTHLdu5YLGrAhdaDS3TeWehYvGQohkWhDbjd7VfW",
  "key42": "59p1tY4R1vhhBoM7xzx4KQsE9B41h6MUCeKfXt5jyXAxjDmc8Sm3SdSSEkhtQvXGhhV6EqsmEWTBMUR3eJ7GBs14",
  "key43": "4Rmuc4nXswVyGuVAiDhtVy6MGgwyk5CwzAte9XZDHjxSzW6zsoNAXJ3PjGiRb7q1MZV849jyh1pFcCBUBCK7JRf2",
  "key44": "4nAMsUBzKaG7wZC8BAfXruHK3G1bC6UPLpTdpid49ucgNj2hGQTrXGxhRmMRzd7GhH4QQvNaMk6XzPVJZSK7MyUa"
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
