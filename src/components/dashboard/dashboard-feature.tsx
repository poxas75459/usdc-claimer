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
    "5sbg8J8TUBFH1NKRB1HtVhoayCgd359mQvMqf1hvd9a5puuux7aZCVjoZSoTZQPHmyHLrGHhyQV3S8LQp2CFr8Kz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sAsx4sTQ2QqWEyFmhH28JSSbSTUHJQ5KM2hkZeuqdw1fXtygiqsfND8wJgcMZv6XXMKGXiNcqyg2zJeLFn6jJMJ",
  "key1": "2FkEKk5NfQydtTALoGGzBnmvs1ZgpXRtyaaa9jUwCSMVAoEUzZUACPiyDYju6ppoZAQWdcSKPSxuVpt5c6Gjo5Mr",
  "key2": "3DQ2LRuf832useS9Xt2btXAXwFHvHVvqgTgbkPSFXPY5ybZt2BqZciBztGFK8zACkLEsdnyYmLgs9zLRjyWrDVoD",
  "key3": "5FYPEMzNvjGVAU4aJFuLYbeopQCVwy2kU4RfKMKMhcvwREo13Lg9mdaocuf8DGrmRWZ76krh4tWMGfTUxN9jBqZz",
  "key4": "31YdFFuxyem74iRf1YkvTC8cgmugpjsVdiJqa1GGsprhvZwXDfLBYweUHdUZ6QxKRgLUPWSSQUY4DmDUYwsj1jS6",
  "key5": "hkwnRj7gRf7cSdSiqqquDbYjPT4VYvYRX8uMTXEKZbPdV9CVst4eXVFd25nGKtJcexRngb8EJH4YGTay6VyD3Xm",
  "key6": "4PfHd1WfptJD5xuiJaZEayy76jwYmd7XmcLPTryuwBuZr8U5agV16TZPecTj41wySP1uUwCvNc3oNJxDeVzeKcCr",
  "key7": "61SLPvExcbnjjqv2weH26cuaXQZhvZdtrdaQp2fwK8Ve1Ajy5DCSwEA4qsLGXcio1LuaH4Dz7k4SsNdPEo9WLgJ4",
  "key8": "5BgnRDgTjkR6MJb64zfK6NR4hLoTUDoQuq9BSVPHVL8zgFQ1hXUskcyrWEpypwWmkoE1oLai4RnFwsi5HwrG8PCL",
  "key9": "2fCPoy38NDpAyTHddy53RPAe9URgEGC3xHGsfwrg7dEs1EsMwE3yAByjRNgsydWDiXqvCVSk6yfsaMmcP5TN6qo5",
  "key10": "4Cs5Fnf7oYMGauqvB8smv745xpGgLqta9dNro1Nas6jX6ekwsR4zVwoAvGPySWCDtrQ7z95Dvsab61ky9xjTPfFX",
  "key11": "3tP3GYP7nGgZLz9FQpHXpKk7Dgdb5FuBisLicA7SRATVceZZubmRRcG5pdY4So4wq78z5TMN2FQbpa1GGRom64WP",
  "key12": "3BgiPMLTyQ2jJW5yDEq4Y5amN8hPghUJfajNSzxKoGaAxH8FLeBx7XtxooM7yGv7TGrUz3mg18nwbn2WF7CwzXhr",
  "key13": "3qCAPPFVYG8sUpEVmEyS9P59j7iK8u9QwxCKfbcrJHafi1ujcBAyYBSEV3QBVCng1tdpVTy9mFDVEhqA5iP2qz7d",
  "key14": "3QgzBKkKtupjekxsv5Ej6Z9CHNVk18N1PPw26B58UoVgwEegNUD1VGTDSjf6r2P9H7VU4tXeW494NxpGDVzuBmGw",
  "key15": "3eCndHYME9HPGQKWKbFgS5ScHNudADZt5V2Xa1g2uWAtiLjJoSUHPqTkDRgGrg8vykEvew62E33nixVEMPwagGrq",
  "key16": "2b7mJuyDddf49EohUrRDQG84kVcMJ52Bi4Gst2xw3yZHBmE4Hf3ebr7YEapJribxLE87NUj4Xhfzor8TdpNBkTVm",
  "key17": "2rLXFdy2ZN9fa4vJpRf63dHqf1YMfm4LxwEzc3fh2tvepYGk3yPLh3FpaCiGeDNKFAM1ad8KAhptQXHF6HuqT5wz",
  "key18": "3BMyJJfi3xybMrznjx8tW3P7ZvoxTXaqLiqBgFMuvLHp9tpzEpxSHvGKvJbR1RahAxtQWDh6edo4MZyou1yfAXov",
  "key19": "XsxJamzzw7CYbqEFBxqhn9AQLYPn9R1uRxmvPSQisZuwNUe69AFf9qnKreRN6neSBdkqFuGE2bSyJj7YPpBAKfv",
  "key20": "3aMPijV1ArwN79iDfyvv8FnxKERGrks8ebi9xCZUfRD3LqZXLM1ihKf8bscYvZcBk4LrbohX7iB1wU7woPGgCu7G",
  "key21": "3iqjtek2NquhU3VzokHrdfvMcCxJ1eF35FxdWdW18GmYTuPRJzmJGdvF8TuBuvPdUogm4R4vzjUMHke4JPBcuDfS",
  "key22": "2XMfijX6mF7Mt76R8DEANcpVSL9X6FBaRYKnUX5kTewPFnaDro2SmJQhKWLQk2HdmW8MtL2BDQ9TXJD4wqZX7krM",
  "key23": "3jEZzpUD74Us7vZnLXYc8wZg6sro7QCviWcYAi94GfoUcA75XgpqtTPGdmFu9be9mktKqYincKkQK4sGoZZ3oj9v",
  "key24": "9XpgDuoDr2HyAQpmNeenZC7DVPG4CNcG3mqJafwUutWFUDMjnpdE7XVUea3CGNSKd3ufY9wAtLfjjFYCqF8S8iM",
  "key25": "xa72jfkcaLUHTHTEj516RHCDZ5n1uoQhE9k4aJzibXEKHzMpksW7SRTSg1wRWk7a7dx4YeC1XBL8cFtJCwLYAnP",
  "key26": "5yuGcjV5TQ65oYNz7YCcjt5UrBGkdU8mev1zcGFzDxJAA9bde7R1fen6QJjUr7Mp6mNmLiuL2AWhhGEBUv6pAjMX",
  "key27": "5GDkS7UKah4KHHt3mzEo8VpuPmk5kUE6TfjtVVyATBD4WhkSfTWeNGcnLxrV9gysBDpwdXAZMPapnovTi2WR4Z5R",
  "key28": "3SoK2Ac5pKHChAApSn2D36dtGCuoLxtcALmYgP3WdRGBdSDbzbQwikbchvF4Z6abJ9JukzmpMUxJRn43akb3w3g7",
  "key29": "AJifhGbX29SLvRj1fxRtYL5sWi3UUZhKeAYMwUtGeAiRcgDiLU37qAVS8LEmqN1kT4cfh4gctwB43Tx13KnvVcp",
  "key30": "5Krp1kBqcnpYCEHz9jUGksj4AUH7WhveL1rB4SyULRTB6jMwfGzFQjzRk2qTos2GrBWk1RjSNsnLVtexyL7S82Y2",
  "key31": "55SFkydbdCQ4g6cx4zm6XybnSn7NK8BmpuNv4AoTooLQTEgnVRVuvQT8Yaa5VY9NbAXsBScWjFJEvEATDZGW7o3C",
  "key32": "379Y6VYdNLVqBsQGnwHH1wtTvY9ZT2N2MP4pXeQBwBXPyNK8wHEy3uxCbZ8mLBzidBo2cbdw8ihCsFLTmj4BoeKX"
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
