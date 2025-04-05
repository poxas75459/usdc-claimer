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
    "4xZAsKPLzd93o8BJBwHaBbAuhMnEayGQefZ6u2co84PtnyWwVjkSP9YXVroHusE9EsWHvvdnXW8J7DxTjKK3u297"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fQieimfwcW1TbSfcWL6tskUNcyTpHbmesM45CCzDx6hejG2TKz6CCJ6XWN7gP1Qse4XE8RV4mHnheC3c5EN728Y",
  "key1": "3DqXCNXnJjqaLauFYAdXC3Sa7WDyEmvMXn6ZRABxSumwDAv1QikPZ5iVNQHtM9pvKRQLk8AqEcbsfojn1GVjQq4z",
  "key2": "5KPyPfdF29qCfrgZZp17PctHvh6BCMoGL3M3KSCiHoPn3gsnCcTkVBoRsEdUXFttChKDrY5RJdp17nwYm39q8PX1",
  "key3": "3cPx7UXKzdUwpNudNtbLPUtnBmgWYxWtZ6B6zvoySUSyTwTjMPCSbPQmJXsxi2pQXTxUR6mxLL2x5dWxKNs7qRQM",
  "key4": "223SH4Ua3H5pk7fNx9NBfzJwHkbVrDaFmNRVFvy7ZuZCfbH2cGGeiKSCHrjem68qM6Vov433LFomJma6mb1zFJgN",
  "key5": "4bi66xfA6RW8c4tDcA7L9nM9TN8SSmEUUexURVCFGMSfWmygWuDXAnoxWPWxKzk32aF6g2nMTQxLferxr5X4qDN3",
  "key6": "35sz9WXyDMVRzQ5tacZDUHzbiXUAivijBtWEhv83dQE53nCCLtHyzRJyCkSsqxgpbvVeX5TzdaRbXKs3a56Z5e5C",
  "key7": "RyuztcVY9uYTybi6wgAdfVcZ1CRiifwPZ7mwftZyagPCTvyDHk34mVgXkH3ym9juVYDy7yQdWmCBAE5cLPYB1sD",
  "key8": "4Cw6LJqYnd81ds5Lw1c7qupRpQExExmx8DWex7FQApciZQ2vwUGY8AdWRmvCPox4veKL42n6yDHT1Ebn5bqc98Qw",
  "key9": "3dv2nr4wQ4rB9UEsipzByu5vfTwFuwLLsgWEhYz1C8rJj1CPUyzgRJn8LPLti9Jjx8R8afMDi4JCGFeDSvNQycc5",
  "key10": "5jGwXxoeaGgRZALEy3291DJv6EsU37JrgGkDr4fHeMjEMXYvMhh9NuVrjhnLV9YWTLxZBEaEUenhxhrxEUQhboEd",
  "key11": "YKKtVwMgPcARx9DRnsH5zUquCXNXnT9K2Bo8PHnoQeG8Xf63UVA12oSxjHpuCucASSVNMdSsQZUKwAe2Z6Egmgg",
  "key12": "2hrUGx24wN1axY6eu39d5uwYqNjf8ioTJVDpKN5GYNubF2CrUWqcvoGZA756X9stAbLsvuEVc7hkSbSsksBDVFcE",
  "key13": "2SxBkQtBCfBJhwjTVuHzTjphKXpkmqfdxqdZDcaDwDKS4723DBa6VrEL8UmSV1123pdsvfZTUZGpMF4TA5UWSgpe",
  "key14": "5EcTFwy4yJgmcQmzC2PP9LG5ZYq43ttXHjxwnwe8TowVTaDBz9z4BgpxCxhUmuTeYXMVR1DaKxJoB37Yu3E8W8EE",
  "key15": "4MSEf2jeeymRYnAn7unX2HvuF6JyFi4EJhWfVBoN47zEuddhsxiXCKLqNEJ6F4JjBiXj5JQaPABF2yKZJynxiRDh",
  "key16": "2DL9QVNRb8unhWS7GGF4Gmf5UZctJPnsemiq7dU33a5zQcQihg8PAhFn4AzfpkNnFbu8AkmXpmND5qnFs6WBpCwA",
  "key17": "3VfFNDqpbJaBVjpzY6xjoKxTmMiTjHTe3GsLBGUZxkyLk4LcqBTVRMsmcWQVZNAmSSjKp6ia1AeRB5MzuTWM6m1D",
  "key18": "2rSDC6yiXzZhYBVXurKn34V8oREpmuuYdUQotKAR6LVxP62ZX5L2xQfGhUBPcK2ZBXtnNvqLCuuQzdfL5e2h64ea",
  "key19": "3GFzGS7SbeYUNX9NNnPn3bZeMqHNN1bdBoG41dpwsZPjSMi7yruxYuqZ5uMywh177WYD3mzGZEMy3TtWBK2tmYKN",
  "key20": "531U7Qytd89iZndj5nn5DvWXey7ffWcdHmwGKf7u8muiBYLUUYFVjHS1K4GcDqmaJSEi9GhX3JPaBnaDR11SHr2i",
  "key21": "42W6Vj7W4bff279TaRKRWpheBYbsByKbBuPw3oGv3iAuK5ADY6urbxcoidr3VGqXQQGckDNBgMZGV3q4vcGSRJah",
  "key22": "2ZQBsYzrLbtzjQMp8RGVKjLgrvqeFtC6r8v46rPy9rUFe2faghQme2x4CA13NAtwWYHf6VK9zDpqa9tXUD25pgVy",
  "key23": "zetFVn4hqerVDqaNTzLdNHDXboczqaDZKpnj5UjynPPyQMWbsC2aPxta5pCdJuB14L9Q9WBTwSfaNFUpztNseaw",
  "key24": "4KisLG2GFp1cjzJHknMWeHjPU7yk5hMbRjEUDykAoynjYmPdeHA1Anfq2Jx3LHv1LucJfdbwdcrAy4vMSjZtbPky",
  "key25": "4XF8MEd8T1T2J9aSov9uhLYYceA578Y2WASSeQjvK6Lv8E3FudC7hS6zPESoSNZRTwutLGJ4ySnapvGV6NX7jQVq",
  "key26": "48s6Qoxud2FMTR9ETiudssCHqzyHwu795SScMXCh5HeX11fDGb7GuztSJxbwKwx87BkTksjj2uHUpJnCeskyPWGz",
  "key27": "62sgxyDsMPUHEAHtdd4mLoHpnYvbQdo2rH1yCvKmuMtqTyKvLKzQtN6nisDcHyLcta9JGA6JDzkz5pN6h34zfbYA",
  "key28": "3A8hpz4eZn2HENARXpZuMXkjQk7FJRr1ovmANaYF5fX8rhWEX3DwkQjrXRvsneYJnJsMGUNCmjHA2p6zphChrVG5",
  "key29": "5KnX6j8x8WWNrxofukttdWUeaHkSMJqCZNpH3mkNW79bxyVKoaSaSgNVrvEN3X597Mi9VJDqNJonVN2B6AcaouoW",
  "key30": "3Rk7DCFtGSs7eEGvScot6xDCtPmtMqHpYyZtuZnPsqapxmkb8tLQPUZRGf3TFjbrQsFYc88AXbkshXE64bkMPQka"
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
