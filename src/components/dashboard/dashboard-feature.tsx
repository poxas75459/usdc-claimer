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
    "4upvE8YQQ2o6QUfnavoCDrc4x9tfKFsyRiRftC2yqHnojPS2SecFA7naHJpo6cHZwaBsXPgDtp7Y32C1QHNKGGqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g5Zv9ehuuePNkjV8VrkUgL1oxNY83XekUcYojzvkGFrR6wbuivXog8JNGw6ZP1TBM6akPZ4G9o3gUvbXAPuG3Pj",
  "key1": "GtZHaaeUNZkdvEHHEy4f9duJQ6zmduYgvk4hiDqruMVGP4zprQgZjFrM4VgT5gdrqPTkhVNmkPz75mBSerbUKc5",
  "key2": "25GmLYWh9qxqHURh9qDpnEq4fTaVw5ZefCL94uXAQAYSWWyFfFz1tBxJrXrVeFLSxffZbJzn5fusRik7drmdAoPC",
  "key3": "3ASQxzyPyHrxwpSsUpVcbU4CwaDW1MJiQE5V9EQfmYofz4eRzAGsjG4TKYDVaXQn3bbgUMHxmA4FGH1pX8WbUJVQ",
  "key4": "47q5saaR896c5iNnkvBosYfb3994QHPLhSxZkrfHi7eNrQGum1C9x48raviT1Gwp3fmRDofCfGX1AXkYxtkFEUhh",
  "key5": "4JK5UgJGe8bf6AvrpEEw2xsjxcit82Zk9N61Fbsky2UzGu7bN9oHcoQbLdueyJN6oVj8hE4yjkLUHjp56zGjkWrQ",
  "key6": "2tJBRSp5V5BtDfhKNuYTFqhZo28zJcYmWswPateCoSnPaSy4gbTxBXK8HbScAwZny72qU3xm6gd7U9UzFMgyFmuZ",
  "key7": "3aTFKZtoXgLbwx59x2aDZF3h2ydkunxBdtwWojVGz3MJrA36MZLJSbCgTTXaA1grW8RTubyrf6rskaqbvGV556xJ",
  "key8": "82APgENwJ8dho2nAzVbY7P1FhfReGFhQyWASQ7CYPWzzdCWebN62ZHsbhj7M1Q9upCbajX8KMK9tmAfiYsCWcuL",
  "key9": "2WbgHLRQB7H9oRQreCy2YhSU3h9sMNpKF3nNskVGaeaSFbsTc7AcjZJGTu8i2nSxZi1ASDNUFaiQxUuJFtqADnov",
  "key10": "bJq6jFsUhnoKLeFw9xX2JXcQvyafbycTwj9XpYMPvEtSrv67RGxpuYfTjWPEFXd3kFDvuUpLftojXugzxa8Ew9z",
  "key11": "i86F5VWT29BKQRgibfp3qqByTfe9G3VFWigtZwa2qKfaSyhVsNDDKwzkrNyUpoPTz6QZqzYUJbuYKVecyE1NBfG",
  "key12": "3zaGt6HXuarkEphVVdtiWJQ5uCJWkxeNnETKXHo5v1dqfKs1KwoJ6YArx6yAYhbLBhpV2DDhWtMHVrEAveQG4gLA",
  "key13": "37s8R4eRyzm6sgiQV3sxMgCtHVwx9JUbMZnxW1EqbjWutDn6BxdQZy4HAJ7wuTdz9YTXh81pxwhRiRfzy7uum8LH",
  "key14": "4gceLn8fTZAdm4EbDamVcZ1sSvsA8yLioEUgZKHozAvKRNuLG35JXQpWbYVficHM3BuWzKqM2GP2e6CJZGt5VqfD",
  "key15": "5zVMHZVKc99pv48ei6MeaZ21LsmpUuMgtLMnHyunTxicPN3qG4XbPURSAJskuA2C9m3hJXat6ZhfdgxUFCjvuxEg",
  "key16": "2JDpTGF6HKn8Cr1Sc4ZGWLzvPCngwwJ7Sgd3oVq8HJz9zHQcBtsgrxx8V3Nnw2MWs2g6auAmRMv7rrfEBAfJZBG9",
  "key17": "NqHdBUKcNwAn1ZsbBZoZ1u9wtsvu3mcv34Qw6bFh1XBmB275jRGBmxVgRjU6NFfNuozYzmHikWfDZLbHmRi2U1U",
  "key18": "2nPKH8ZUDgt1QcowPSLXbEPZZzvtgVDYBVhha1QovSCmf1GVuadWvjF7GkTu98DEi1Bnrk7dUSGJpWYcyiMRq9CL",
  "key19": "3RWp1xYDcgrYr79vjKyhYECT8AY5SxCiiAyCv7cGiHopCdLc5Fbg7otYcMZtW7Lk4kvsJ9ep9P99VqJkcXMh3M4L",
  "key20": "4dpgstmQJfV3N5Frr7fRZgD8fL3Cbs2W1aGKD2MkSz7wCUwhUEq4xePy97iX8GToqCV6bRt6r3vTnbm3METSsXGT",
  "key21": "31aa1oHSLi4rcCjkvLrCr4Vi6gDukECoMCkEy5Bk4qjxm7r9WSV3tiRNFddvT7Bomw7gh5LEtcEsfJ3fMwL9Mg4U",
  "key22": "33Jrs9j9Eby11C2pEbAq9uHib1VD69pDjRLRdXh7hTng3FdPV5nkanxG8dA9QLK9j73HYz1xY4Bb9s9ZxXEe43pg",
  "key23": "2mL7YqsUrRnq6VsSbyBqkWf7qmSyywxci4ouSDqbX63ZhpH66CA7VhBC9TFbDNn4SSBZxUWDNXC6sw9wzEZXYvUL",
  "key24": "3YYLRuu149GgbPC9NW6Ybrv23jzncwdK6javwGmz1NQyHNV1C9DFiMFUpxT8EtHTc8yKpyHpTfzbrVwvVHb2kSK4",
  "key25": "3Bge4gBjbRzwFSLMCgGmhEhhbvUfHftyjCRVVqe2ZccLe1iBYcVW2XiUjk5aPKE7BvtrFJ6qJ1T9W1nsmQjADVfE",
  "key26": "3J47ZhYiTAxmjzx1qvoEbRoNWBWiohtrJ8i7fp4s7r9DaBTG4naRnaUoiqDMgwLeeLFzvudSjPA7j1eWY9rrgqM9",
  "key27": "sGchXoNL5yvG7XNztHptPAYzv5HjM3vCLebP7FXWAmBBeYVfGYVcsSr1NGP7Qj3gca5gYGq1H8cYpuR5euhLwAk",
  "key28": "4d6iJrsDms5frWrRDFp8U8rnpmeKkJuAGpuVputdNCDuJKf3MxLdqpVsXn8gMEWZn5Afqi9SY61aBbuNPNpVxA7r",
  "key29": "61WNhMR6P94Qp72RP4L3XjeymCjZWmQ8ywub4YvaixhW7XNAUhWm4Tf3hyCBYtZrS3JMnJvMoxZfpHwvG8oSFqEV",
  "key30": "5ti3eo68z9nHtYo4vEQ2z8zRwRYS3f4SyvavV4w1dtdXTE9RRRiF6x4tLyA7NuZR829DzENhBeC1aFAwr4Topeib",
  "key31": "3XjbBZosGPfseZYz3e8bpPfSKe3DNfe5mKmzfkeMNvJrwCAoLyi6X6s9mVFev5hfkJRj7uvRQGJftg4CwfC39iaF",
  "key32": "2AzgywU3ex6AQbDZcsPBTqgi7iRadzsSWLLyHVrgt3YmD7o5PqG3wokUHV8hFguNCRbtEWpUuLVXqhBiCSBxDBfY",
  "key33": "4STjg8TBn8LQMdQxmrt7tafNKRyk8Jaz3j4C67BRhKgRZiLibE1C4iLeZKwU5aaf8U5VkitJWpGyct6Ns5NmsruW",
  "key34": "MeiQ4QGtmchoSDJZUtzxR64UgmeCv1Xj616qxT8rXphapZWVsd2hkGBqdavpWxzSLQNrknnuAE49Sh5cdt7ZVjQ",
  "key35": "3T6CkEPBtNpSpJjZhgY6wttMV85SDRBtPbtEfAAmZzr9GHhxXMHpo6FuaWdF3WXZ4D2Rm4QKAG2nntW5hiXv7TKe",
  "key36": "5mT45aLicbpvWojRwKeo7UMV1aNuvN3X6FxKhaSuScHkwnM1P5vJVzMe7tPrqfFYz92gYg3AZjxTsaroi66QrCQA",
  "key37": "2iBjcMzMKX4NhevmNWNomFp4LBbUr9A9ywuYpnQiK4V8viGT8Yx1x6npiMXt37as8vvFoMLGuhqkLa3mzHgH66Eh",
  "key38": "4KB6hjpiStrg2Do6j9EeR7bCBJ8Vjtd6k1Bk3Kg74McQZFTLSmZHSMRBfHbu8mzgiAYGt7q9pUR3gRFihnV5sFbg",
  "key39": "2B2NwYkz2YBjfASg1yeDZ6T2hzPp9vRT2BMh5vvi5oidzGfE3ahqmY1i5VuosFTMA8E1DCXUYMwsZxQm3Xs3cKgw",
  "key40": "2jdzi9sKguSTUzx12xb4U582YJ9Rh2FaDNBEBLmrvaBY62ofarwFcrUPEMee6BjwoNiZV86thBosaRdj88zy6JJh",
  "key41": "2scgkpGNjWQXwKeSJnRJpnbiQrCxsDa7L35BBGJSWxGnT3MSDmXxLr7tiXzKZmeLWhQwceZcJYpeCxLtwUu2ae8C",
  "key42": "257QvRvacMCE5xH3BXKiwwRhtbkve3AtnJWT8FDNaWM7GMXPhAfkuvbSbX6pLL2A99apu3Cshv7KaR7GXQHriVBk",
  "key43": "3abTRaJ1b1oArLdZb35wWTZsEb9LZLMZeJG1kJQFE5Hd1GWMG2RsbavQ6eykMbbeBvSpDaxoHtgbrqfpnEZsUSsj",
  "key44": "4tDmJpyaugWBPfX2oP8B2oYfDfLFgwfk7TTY7qynM2nzWthD1t4DU1Dpg7FydYMZmPZds6c3mKXZzcY3Umhu9PWY"
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
