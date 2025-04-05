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
    "3NPr21utRxEC442RPJtW9KUWU3WscL4TQ29MKsJdStnpv5tvA6tNPATSVVF2GcaidmHym5Yhow2nYmFRpu9y9xdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JdLozRvhZdyHfV6Xzgct4h9rHNVgVamo1wRqmVc2GfQE9Crf81A4Li5MssoaRfQ4i32GrRWj7xbAar7YT3kM9Y9",
  "key1": "3B3UzXxBzcS62QmYxMWtYxLQAhcMK9ZTfrMtTDiTfWUBxCS7LWQvDd9ss3od1sWkFRBptu3i6AVpEfTDdkdcMkBx",
  "key2": "5U7QtLBcBdUweEGBhAzHtFgkbszSgYW5VgahMjPnWLFiAJLHR7SyvYnffZjnH8TcKBx18D4izCeKJYLSVvGKD3qy",
  "key3": "jJ1o6wtpAF3mF4vDySzBhWte5MXVymdkYU6rgTXzFDVZYYKnYgVKaGa2eWHfAYrjNWyJpPcgkFcmHdFhPNtsZBQ",
  "key4": "3GWC8GDSj7ed5mM7xYbzdL7FU1pYLhCUiWKnA8wgXdbAtrPtf2yEFMzXWpFpowXBHeNniUV12t3aWeCtYbMr6PBG",
  "key5": "UpJFjGKSZKh7URcariJEde92AjXmj4iXZU6FL5hevgyNWfc3BLKmphh9ohUsDRrvW7ouCGXYu4tdoLD7iZZkxz1",
  "key6": "2Mf5kKMUEbWLiBTU7iJtm4tFQimvxLVfqWXTdPi4QB3hGTysE1TUfACTHVJHrrA5X4qoMxPYWznWocxZMrx7sQoE",
  "key7": "2nNgoGd4iCUtYfq7bSTnGZgr4Q7jyrEKw5ZkJtBRqyU6DGKNEGJbm9QRE6nSfZpDBbXHVgD8rNW4vM2HRribBPCr",
  "key8": "Ukutxjwhf8NyfXYfEqwx9eHQzYKsGin2caJN8GWtNu1VZX8UAhCMrkaeysWYi4383t8ax4LZngHB41EZ7ivLgsQ",
  "key9": "2ebh3auwfffZ8GKJEH8EmND5CGmskATG8wiH5BSX99yoGogTsMEfJXCD6wDn12q4vAKiV3ES6DSbso9t84BtokCL",
  "key10": "2hpvdZ8wHJxpq1XvXvwtWRF5SKPkpzQwbjuYp8Y2zzvS14GgTXqD3CJnSz8zutPtJj5GgsixDhcxLADMgSKwMqGF",
  "key11": "3AfVkFz1Cz6TTX3s4m4NHmSHrAujz9ihwRm6pvcaoHvgMMATHveHfWEGcCWt7VVNB1QrKWcuthCbkb6hcDyd5iBa",
  "key12": "5e8E4aJWGvMMcQp8cFtruaXp3rCufXUPZQsQyoFgJ9uWmteukowCTDZ69u2zRjo1xuJVwxH6HpiLgAucbCd1NRaK",
  "key13": "kauSH3xMrzhseH1ymexF5EVF3KmLLS4EtMQV5kTjMkRkDtHyJCpcfzCHbuVm6F2LxqbcsfNxTjgdHQFei4NVacG",
  "key14": "Ru7uDcPeXKAy2n6Z2NKjJVwtm56AWaWUeqUzV6P22xMCn1NyCQtAaoKgNBcffvakHVjjkVvYmg98PcZxDnooA8h",
  "key15": "5j5XEKg1Dte6QqzFs52MbCBE7wr457snFCYGt7fY6k8JDvJvzYhkKEYzfbn1hfNFZT4hrgKT5iSbsnfG8az3fQCi",
  "key16": "3pLmfrnRGpV25KLmjiFhNjV8Fxz1mGTzEDU4Cxj2mRv9ss97C8w4s8jtsbzgM5vgbMpsJ56iVxgbDAYq8imjjFBm",
  "key17": "3tGWF7twiEpiKRPaury3aCdo2tHzmHfPtY4AbHmw6dCdqkzDrrdFrPsEosadhv5uRewxLBuncaZqoX764tCyJ1df",
  "key18": "5FAwXn24kdFSftoC8h5sLwsWn7p5WZdZmJFfNZDPqfjm29ttM7xqwCZAZdn5MCtqYLnng1b1jRfEuGWZX8jvazZQ",
  "key19": "4jWiDLViKgBrmTJdL7DXVkbgVgKDYVnbeeconAVuUFKEF2xuRpcHHY1JqQZJ5itEYdpCr5B7msk1dyX5aiEshNpr",
  "key20": "z9o9CHLxALCVqqiyLjTuN53CxRsKS2UFu7g2keSc7VUKyXVuS19NE6pyW4EonxqMVSTaNQJLPMtVTbkawh3uZjW",
  "key21": "4XdTDzyd98dh5FZWFMvwtfwnqNZrnj8nHXhpyyQtotdQemyy4grcjpTdAqpSNDhDC66TfpJwLwv7G5f69BBBYHV3",
  "key22": "vto1d6EgNTMqstdyL2kuJ2hZt5qdGt7qJNNAYPwkA4ti1zSp5tgqunTYRddwE1tkPYBMrPadaCwfkJjZz8qBf3H",
  "key23": "48crwf8XHfykvY6dtwUKy3HfmZ3VVGA9jU68AcSF8SD5WwdY4bDmmxfMKBTT4knL9vgWJUmeSR1h4ZRk8J2n3Fzc",
  "key24": "4d7jFFE3AR1KTSBoH6Htf1LUgp8gaB4P6GSWgFrSZfaCRavKZABc6UVVwjCN41eedBFF4HkD4kzxMVNJ7yXgdwA9",
  "key25": "3smfLLWG53GznruqyuB6whRCfULuHz9UYUi9rr87NnQh8iTTQNA5WUWUmCJ8p5yXKKCZT2uMi55DRDmwwiEDJuCx",
  "key26": "2f15fZWAznfzPe8orCEzPQsm7Ls6BZ3ugE8cMCkVviCarouBGSJEWKhF5DrPMYa5mMJgXat2ua6GBCzvJcWktHai",
  "key27": "5oW4TQ8PsQUp3nLUNFKYAxwSt84NVxPkhimEvomDBvch4gMEzXsAGEyHsTyPkDJCS5xXSLcmyQNbDeVWd6YQHX2Z",
  "key28": "4uKkHj8jMJCTh4STJNgyVF6XHJURBpaWWgCgSG77JjzRQLgvVACBxMqUavHjENTjaRPEGUfX361fet1UyCHjUdHE",
  "key29": "2FYCfAxsX19Zv6mp96D2DapuDkgDjbCx3AwhMAUGgkD9ceZEg8T9ExppJnFnPnvZTum4ARVV3MQD6n2YVdXAGFFh",
  "key30": "5f8HmCwv7r1ahpGqzcyUQ3iRtsA5n4jxJxAC3fjSbR11Ytkr9K9TmVZPw6Ny8xhsM1hhbX9skNkUYnFNtxRLZGqX",
  "key31": "632dmkSEarxh69YfHCsC4Z5X2rfmjn7vDrEK8kkMV4fgWpmpKT3qaSEFrQwsbL2v33regK1jAUYHHnXqjwNxGJzu",
  "key32": "EoGBBMrNDe4xirNLDZmAh3n7YCTvKMnfdgBX1K4VCM8NkFaWLogE2oLB9k4Zkh2rqfB4kfuML1nxtkAqZpMCaC7",
  "key33": "NKm2M9eje2S3DJzjazudWdH1bfzhJwJqkY57tu6AKpt8zQaq53aHYtPqduLaTwdVmYeapWxfivUT4X9meSSqUPo",
  "key34": "2SWoVG7yht1g2Wtumu21y37NC7YvLDxQ3jrxTCAneA4RAMGJuN5rqf5GhsfbK2FegRorSQqL8xaUT9EhWzNhNoFu",
  "key35": "5DFoiHqDJqK3r7cXRXQybWqDZ6Hfuue61ajzC9mwRVvkqdaU6hZcJEbUjoYdUPngadEGP1yj5iB7rj3ipnc965LQ",
  "key36": "3Wuc8LTzLDBQV8W3igzXpk8KCE42y2Pz7UASVBtua5oFsHy5ckSrrDW9nEpUbWunYuBXAQSL4FvWVsNN5hayyH5b",
  "key37": "f1UL4ByjhG7uKxNSKQX7hxoN2Y7TRSG2kpyAsMkj5f3fhGQ5SwCoyM1D7aCuKBih6fuwSJSN6VFqpf2mdP6BfjU",
  "key38": "64GnksM38Zi9nVXgnHdJDnHTuzd18RBt9K4u11czRKnd5yL2uetx9RVwoi3YNJLEKJipAGqbPF5JdXTnTVTDhc47",
  "key39": "dBqv5fViuHUGvYyqjXpUnDTYcqGmYEdFKipHVncrnmErcbAA2xU1VhTBgHmseSQaStjLUYs8MZGyn8Kjm5LiVNQ",
  "key40": "4g4bwKZu4TeWPnnfg1v6BVmibJiHgHHHg2cmsfiguFs6pZKfisKkVgXySA8Kaq79GNMmyAU3NYhGCT3r4izDAnYY",
  "key41": "3rGitkVGp9MKtTweHhz2WvXf6BujezX26YR32JXqFUP7xT7rwHdM5Vu8vxu1BhBA7uZRiir6WaWhdAyTD8qRAHPn",
  "key42": "28QzeZCrEv9KnDVWBtbtZdivTgo8YJJ7ZtQ5LZzdS6Vump3VEqMKgHvFuAnjN4mw2wKmJYxb7SxZDJgvV6QAHLWH",
  "key43": "2mv96WpdmTNCPsLjkfBNksK5hU3DECDbFw7iN5isFuaSwbWnqfTVDT9FzzhCiuiHtkuNWqxohASqFy7UhESCMQRh",
  "key44": "bDCST46JXJ7sJDKDq1JhMrsSRzmtrVBKfbk2HXWKBmVgAetbm1cZua5mtWUca7m1h7uFgwVzRgTrHi8qCMPhY3r",
  "key45": "3ncCrBHkZpbBsJ5kUFsbowSA5rznqr7TuySk4SZDMYMt5AG1hgtttDbVVacJP7ZytCBn64qyH5RW94nWA35dGZfu",
  "key46": "LAYKAyHHjEKzibK5XHYqmgdqXWSfbrjoSPQ11E46iEqLgzRfZZXiXyYrdjYsVLesgLBQXhjXpE5YxR31v6hACaS",
  "key47": "4hk4JtdmQY3WqSBxdfwhAWXEMBgejs5oKCtzdtU8LABwZuyJEWS6zikW7TBJHv8fvsPx4CTKBzbrDeKvEEJY6rGw",
  "key48": "HtpseUC1LgSoAPqdq1A68vqxmtnkC4kPXGSTBTrJNCo7NopRfj7dZneeJczy1WwH7rYjNjBwLCuDfJd7BaqY8dt",
  "key49": "HBivtEmbRTNfYAxrPHXx9PCpXMdKW6AWK4W7XJ1gindPFCJXXLfLkjdJCT3oKDJ8bM7tqRVSDDnrBqVCYr5SVT3"
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
