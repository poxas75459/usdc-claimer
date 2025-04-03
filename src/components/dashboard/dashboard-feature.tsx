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
    "2NFcNz7nDs4GRwq4UmR6eBVZbf4Ej8i57sxRwMMA3bWH2YEWrro3cMXLC7ZGhxJtpW4wEQV76gLXQe3z2JAxDRE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gvbMBV2RkT2nqVoDyvTtyUfHynfePitRyNH99bMts9aezAUf97EWX4AXXYtjhpDx9xvmeHaeXXuKeWpk2QFLfDg",
  "key1": "5oBraD6uyESW1jse3Au8375ExPKfDk2eJJoopx5ujMWWPZnSRsKBpTdCX6hCTo9b6wE9apJ9jLMEKDhyA7LWBdxG",
  "key2": "4fdNZo6DoiEWJDbXx1PYVBBczCRTvk2UrQnVkWdDGGfbHCsNumTVL5nhHGpHkK7Wv1ErRDDR3WQXWUQRBqjJxbBK",
  "key3": "6263zw3XSLgPSCQrCjaUaYpDtSLWhjEXaXCvPH6saF22axJACvT5QN4TJmQChNDoHxV3bkYMfNm5gSX6NtaLzhvi",
  "key4": "2egKFaYGKHG55iEkQ3SgXPhvZz1h5GTUCuw12MxvU7vp4xgN2hUNVgcAJjp2gjiwc1nbUxQdtXiRn3gSoh6PY3Tw",
  "key5": "2HiYXt6ypi6cUGKUPjP2QZNVqWG5afCJtn7M6NrcKdyjVc9HVZLrd2HTp6kcAPk7Z43Sa7CMpEpsH3Uh1DW7KbCp",
  "key6": "K1RE2fcABE9ooUd2ahtmJys3HSPtyDq6paqkacMw3aNwqkZJBWEwgdPtgBLf3NC5tmpSQiq1y7Pf6erzKZDtTTZ",
  "key7": "WvJ8eayjT9mc8eiBccMoApaRcAR2X9XLqu9d4ReBTWMBM7JkZHm6w8J9CJSwXBKdaBqMvbu9rMGv7zW2UhSQKwD",
  "key8": "4E3V4Rc8HaT5WXf1BrVpwLNog3JkMaQcmqAWHFWUAm6mZqXtayH9ksvHEwX2HkH4zq2pX9NRWwVFvZZ95LMDv1wi",
  "key9": "67Zw7PhWPhxVLaSUabTfbH9q8ti2yHLgjLbUDKEFMEhskiv6NJZhfh2wnkkFSo7xnJVvp53jZKSGYgCvFXXUk8J6",
  "key10": "3GBqezgYQgXjpS7nBU1HCkq7m2SK3Vm6cGZCNUDkV6cm2GmmD1HbhpN8cvWXggC9A9YmpsXwkvszWkomWFtjPQvk",
  "key11": "2h6Enr3uTSrXF8GJuw8cY8Qgtj14DNDScftQnMAEo19v2qeozbKHwVr4tWpvUZqZmZX9mx9diyBAVXwU2qXVRH5n",
  "key12": "5z3ZSQLeem2XuAcVXTnSfrPgtSxQ8H6WaawYtQpmKaPbCjArd41iAhCVHzZKm7pPUhAjgNE8krAEUdJmGPmPCD6Q",
  "key13": "5sN2JJx978HM2enHxGrZc29rG22dAHfrkf6cJs9pw2mBwx8jN7b5fh5kZma1vCkZKi5BcUXdEB2XWc4qnE1tadSc",
  "key14": "665DzjB3efnunau8Vs42c6XowHZiB66Szum1m1MLaDqjZ6SdJbPznTJK6ZpX2UK77zKakBfWy6LJdDGzjfnwUcfc",
  "key15": "5hKy7TU4EbgWKNB94EBPWNiRjsuvNJgfCYU38ktPiJhNPddZJKCURvUp95JpbqwufvY4gfkxxJEFPq7fdaNAkhqR",
  "key16": "ncXCbboeqFY28B6P8ypRgiEgWQ7mp3vqkGhLHqj1x1wDs7jVRqa5Wj9aoCyuoSZT3Jny42SsH7rgYLc989j4qEY",
  "key17": "5sMNTMDe9gs5SAzevbFb3PaheiJG9oR5nGkJ4dRSgN7C3Lb6rNRt5DhJuM81awUYMwsns6JHTiAezMjSdCRXJRNY",
  "key18": "52e245SrJXPz2jGs1sKkz56uNjnik4tk6mUpVKjLSJhWiRZpVxkmRo2LXH93oA9TM16Zoo8ojTa5x21Tb4mrBf8p",
  "key19": "5cgynuyczG4sU6Z3xsioUVrQoo9QXX9iKL4LbRybFcWK2kcEhdj4a8Am7edEM5w3HwSasYR25cRYi9TNho13Qgb",
  "key20": "2qXrAP6AyqaKLSEADhBUxac9E2rr6kEoqMN2VSSWn55eTySbMeX25jXME4ZdC3VKGe9sV4rA3K3AWx7gfuXdVuw1",
  "key21": "28dtVfDnUqyeyqHNzBWgnGPht3mXMgRiB5YryThrKAkMD9zpwDKN8pkuAAnz6z3tf3QsZ56AtfLVYrJNaxLAk9tH",
  "key22": "2mwhdbjHoi7uUWWX9YLinm3cwmAsWQdgzSCutEuuBHp3cAWWPhiebjwEgqe2vLFgBURCWHPNRzWXzH8ZJkaUoLsp",
  "key23": "4vr2g7FHVe5FCXd5StZ9WgmPnEzjeXU1wTnmemzMfUJD2UaDASX7UuW5uVGFvA8UKQEgugXLw2zj295yNQupZVg",
  "key24": "3txSrLKfNxUssid2KWens4akiDWvtHHw5eqWSq16F7ueJGvHmAsJ5UeyxJ5NU4A2g7BPbQq5LfrDi2uYs3ymkQzV",
  "key25": "38ipmnYbBxzTFidPiWd4z5cT9ryyC1Tgkrdi5pd7fx6wpMPbeSNRycaLgSHXPNZ2iY8TEd1yCx1VYhVzLURJgMPN",
  "key26": "4FQVZjBgzn7HdTWzwqbthZi9xKYAh1UN7zXvpbynML3DZdYzQAdgtTfBmzrMgcNh3KPGohSbt22EVnZXXqZVRwmP",
  "key27": "128ys8mo42PUvaxAoQVfP66uN2Lza1C6Rq4TyDMRTFNpmcEXAX2VHYSSrdaEDmzKtHuuLFf3sQ4pfEVhxcfRCBGo",
  "key28": "489HyG2ZLy5SB2PjNApHj6hRXmrthMJ7XJwPNohJj4MqyZ2M8y8svHpHYa4Vxrn7ZemKB5pjKXbz4FEjzu29FQ1w",
  "key29": "5cba26BWiA6VpQ3afPS97SUu9wPyPupdnbf7YqZudEZFBPBB9bUHZj4FkRaHoeWj1XergitzHvAoR5DKH8ruwSLG",
  "key30": "M3ZpixxMPFeMTip6HsfTgBQMAR8XE5z4Z2LveN8qGJCoeQArdR2CGcDEBj7eqVW8Som6x4e4QXivPoQrtQfr2hX",
  "key31": "PLJDwX3hD6LAi7xLRUvw7PJeaqPPASxRpYw3SCW5T61F8XkaFfguMjBLYJePt9e17ngUkXvXjJiKkSrxiVzMbyb",
  "key32": "3wZV9GXgSRUQGL5f72Vzy7pWx92LWKPyvb35RhZtnDmuMs6arL3nx8TV1vFFRg8w3v1PWfuX97KjFtqwNFfPEXBg",
  "key33": "4a1REjyXb9BVFsedARQpRanJsUEi7CvKNwzwdZ4j2k9jzXD7PNn99jBd6iudA4TUNLucRPvb5qNgyjn4RD3a7tc1",
  "key34": "GAbVjexqsRNQgd4FyMKMf9RLajwpNAazvm4kxUvkUXgmuNzxavUAdEyt32TnZZkt6tV6LEWLxUdjVm7vDogem11",
  "key35": "21aTu6Wn42NoAn36DM7FK3hLMqkFMiCaWJZ4sD3Jbx5amRm7dYWodiw4WDqXS8T8Jur8BfaZpnvp7179Qzua13p6",
  "key36": "3FznWrXks2YWLENERJyG9hx8hRMARJmowAtRzWt5gPc3MpUgU8gErV4RMAg6PnHBx6vTWhZnwQGfzGigtGRSDBSi",
  "key37": "Ai1ih7x8EmZchgscYkR1f4jgvm3LHuCa4UbkoA5ewT8A9owB581donCYMoWMYgL7yLZQiSLAJsXJffpmQRXDz3i",
  "key38": "5qEqbBUTkCWNWR5BMqhUmA28fJyWivDe2wtzaF4AohxGrbEjd7KXAfvhDc9VrjUcA6Mtqjko1Cxba12z1JkizmGH",
  "key39": "3q6utLyZRdfgptZ6s8gPZTaBNkB7pVehRVnPerYJRFTZFrBELbuybd9PScE2fPKx3Hw4UxEGcDPJw1tunDJ1GcwX",
  "key40": "43VMBgDh5fKomszKuoAyZ7sDpQPsA4ZfiVHqDnERB1FU41V8xBHfhuXedeAh2vWDybhUQXmKF4GDSFsnVZ7Fdbur",
  "key41": "4GTYb8kwkV9BpuZqB33YWRsQmPqy6ndbexKpZmxdFMu3XkScYcdU72ncPxC5MYHY3H5Wny797f1tohfok4n35ZtB",
  "key42": "2reVdAhkC3aTBPkh7DV6Chy5BUh2CZFLkaF91LwAW39tLrKw3Z19CAQgy48cazXSAsAtySTyjuahSR6DVA3bkbzM",
  "key43": "rPgRGvvd8MXYUWUB7tbfAfsHBptRr8tNZ4bQyG4wd3TBeY4SaTuRD1QbLJ9kFMK19hQAFQA33meXREdRQRhdvP4",
  "key44": "A9P49Ua7JXkVhPtcKmfSGYRZjLa8eW1sr8diVBn7fESiMQafDmSdTZx3Tx9NESbu8PtW2xMcFDAKvGG8tNYtDZa"
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
