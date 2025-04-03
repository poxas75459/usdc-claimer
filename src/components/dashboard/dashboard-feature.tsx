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
    "2uD9rtNYmN8HFFLiXwwCRhDEykcwNYNVcbSe11E9JCecoeXmEj1Ju2QpUZ2D1hCi1GAbNbJia9GeQ7KHiXcSoDtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57YR9B6nYQDNoGGbTYUG3Wiurdoh8rj1CAWGknmRCrHC2yK2ScAaYWs34TDpCSVVF1mQ98TzqpeXY6yLCG4Y5S13",
  "key1": "4uLdCb1rUYqkFKaUZZVSjsjYadTZbs2x5XLe7ybhwMXg4aQxPQDJWuxcyScpJC4SsM8dsihJriQRftmdHG2F5o9X",
  "key2": "4PMWqDzZbmzdGakzTBfjNkkTW5HFXDmebxgWtshZrP4kDYkN9HnD3rj5Fev3o7Uyca73fRa8MwVe3PzBmVKbjsyE",
  "key3": "5EakaC6rfmFai8RjqUUXYe7dUSee6Yt7AqxVkRwK1qjxzPpTYba36hEBuvUUNjxXjzBXVNeuAANHDXa4sUpryqU9",
  "key4": "3JQL2poZrB4DW9dyLJ47Mb2np9B22K4PjiHWPYU2LcUrMQmNXwGRgsz4GR7QqKHH5Jbwy6a9PH9ssSmz1zw4qWnB",
  "key5": "5Y79S4y8MtQx3ES8FA3duSwm8vkQRXnAsc2FtZZKFAWRCWqCjnHuYhw4CWKwZ7aEoP9gFUWDwb4u7jjyXCmMmWq1",
  "key6": "4MLEfrxvesa4LEmsyJjXE9h4hhQyAcFABkuRQCKuoWKsAJFQfzuGZ4vZexBswayqfHvGAwdGQF6yEn9B2U1XnRrA",
  "key7": "qb4X2yRS4wxL6GvJaCGVmwtnEJGEy59L6FfTdTQvzERb4w4CtnffzrgmpMqqnrWJufmrf6oqNYtm5rq6rpNRqjG",
  "key8": "5s8qAnqNDcZ2Vsq6KWceBmEXyZoNtjWGcq3vhXnhiF3rN83d2gkDG4ewFMwu6jauF3wsUgcuoDgkkEorVH1Zm7Tu",
  "key9": "2Qj5nYE1xgMfWM3zAnm7DmyzBfdKhosncQN5hmsHAh338PkgkvGYDjwYeaeVHr59oyAqJkjeU65AaqqSVgqvmgF2",
  "key10": "31wQcLYvieb18Rx2uNEoRd19inHSbgca3Soqqydjkvtxx7ozeMTpGifdNtgfeUtLKihDegxAGb3gGumWP6r3RCe9",
  "key11": "4x49nq3y18BxQYUAm3R4JKDdvjpFqzcdRwC3pcLrrqr3JAT6FgV9JrL1Rfw7j7SNTcBpVX1j4bNd7mrAsATTGd2J",
  "key12": "5f3JU4Ked7JRSXQK3UBRJtjdj6soqPQm658ugk1Ys5BMowR6V1eFKJsWzNW81UsCeSVcww1pprEVyac9EezVx6Zr",
  "key13": "677ZJnnHaUzMWfKdTrUzUFvBrqJuojSZjdbLry2cPgRndy5Bd4CgZVt5tA5RtFBq3bFfBoEtvNX6wvDJ9BY2vE9w",
  "key14": "dtvoPj9sjuw5ZZnmLydKLPPdYZuzR9jWPLZtEe5mgRt3D5FwBsk26dzy1xEeKaJddFkiNe2eKVM5Ny6fXQYdKfX",
  "key15": "2qivYtetVmobWWLENCK9nekr38tr5BTwWH285TUrJqDpZ9K7ozNdVUpei2NDiysJ8d1DkgqUtPUJpUqS6Y5P59mT",
  "key16": "schZLEJihYvDtAkBt7zyoM6yhKWDnxK3tfSR58gmNncZMJnAsLSPdTQoZDd8AM7fNKjjnQR6WiMY4MJNJqUvUYd",
  "key17": "5qjqtcRztz8UBhapEuK7NoUPgiXgz9mVkfUNMCk8Dqe1MLbszuijzq9LPXub8o1x3FJstqPpFz5cCZYntoL3Sxqs",
  "key18": "3gd6yMNqoPxDcB1FtwLoxRRAFr1vXeqhMrenadez6GfcamJBoUDhDdQGhiexP8JQZWNQ1upUG7bMmKVGZzsWhQ6A",
  "key19": "DLjd8KjJnQtMMLgVFL8kDW8FL6T6YBMAjK1qcQz8QrUfhsynWEyox3FAfcu6kGLEscZM2BnoEGc2cVLu8Uc9Wyg",
  "key20": "2CRBBbsyBq38F38ws2gbjeQ9G8UECz2tnA8WLZJPaQXRKACkmsUi1mi85cc2a29HmqQJiF2y17tgqcR2YpPGJ8kR",
  "key21": "5NNy8Eib47zJoGahZmeyKEQRVZzUe352YxxhRV1v5vy5F24K7pBL5ksSDrefRG4WdqPw2hKADD6PSNP1HaYsubpZ",
  "key22": "3isMfPE5Qhs6kajd6CV77W2xVqydagP8ajFCfZ5wvnPo5C6jTZ47E3uYpcAN6JNfxmh4uTHzvB8qHkw7Zin2XVdJ",
  "key23": "2tAY64JCpvR6LFjE8E1L2gXne82tpPEC6ig7BwzypyqEDhDgxZmVLZ8HAmFnS6SHcSxFhQYHrCs8xj4Mg8qCnkKn",
  "key24": "5nUBfkkiLBcWw2AqBiTTXmbeMQ1vVJqPYTFzHbmGzi3DYBv9By3fLwqm1gZVC2ncvygNPxaWrvFq2xtWbCC846j7",
  "key25": "8qgf1uLvHSLXPg7hXT3RRWGH1zh8ZAVm6Lti1JXG51XS3hdRWvXPXGHx4htrjjgdBCyVMzpgAWCyrvz6rq2qFGs",
  "key26": "46kk24jtd942SuLdvzT7xMFFv4UVtQZPWuTncsamj4AZQsUisg36gmP5GoLiRiUTTdmj7FAKUcP9e8V4SygMacQT",
  "key27": "2R1xBLqqjjFqsqocfcfoUCPnDzRB9gGuuNazofidBdDgyyFPxqQKFLAJ4emKwuHyqtA1UfRTGbgDcnX2apVdpiKX",
  "key28": "58Jw7883e7HYUf8r1kT594YeAhzBHnC5RGaFUCrqmPMo52xRpXV6ihWFoFiJTVqBAGRs4ov2fnTeFCbhYAiqnZsB",
  "key29": "3qGGYb8x7xssjzBFg5W437HNyQ7fstTvtWXeBGMpqkRETgkLEDH8Tr2qhwudG9emiwPnZQnpGu3PritjR6Noe8iX",
  "key30": "DRQE9uNmCpNJko9JjJeRjeraWHyYtQax5JAnymgKkCao7NARcKLFDFqA2Aq2s9D1HoAnkeQ7qK2cGs1GWn17GZ3",
  "key31": "eymULtLB568WvAbyqwECgvDh4gprNR5ARg16kXECpwgFotE4RUEy9hZQ6fsN3qKM9FEL62N7ZwPZLJvBZzPG4Vw",
  "key32": "2wPGmd892ccdecu2EpckQT1fn6cF62k9ZaQXT3xujjHnPRfegidP6hHRiu9jDoATArUK5vuz4wUyMsM6i1czqWTN",
  "key33": "3yxCjAxna51oZTXqTdUUiuz779djzDbM4LdcEgahSAQv1dMtuabQjtRNbnS84Uh8LEyHTRQEmrAUrcPT4gQUaPcK",
  "key34": "39EWoJ4H5yTNgMCEasnrt7V6N17628arGAtLiAhsM8V3FMFANXQ7UVGmA1WgxupgtNR2HM2Tj2hggCwX5CZZ5NgN",
  "key35": "39MNQLnK51HrV9yAvFvjdouoP6DKrFZg7qCAC3ygT62bc4yfdVNVR92feotJd2FQqxZtgvbaBtkM1qjTJUQgVw8Q",
  "key36": "5oAwHwxjH5KafompLTLZyB4vxyC4jUtUH2rKiZto1UupSBBp1jshYMGw1k1CcuVws7oKDhmiaUtE9qE1VVLx8LLs",
  "key37": "4XwHgX9GJSWoqSvVa55tLEZ59a6D1AiYuZpKWULuk95dRp6oJY3mhYhRtiJDd6AsqogfCwaE3YyFnTZj3r6cfnWo",
  "key38": "3gxiStVV8TN6HVRwnKoxrCqVKepu2EyeV9Wf51K7dK4tmRn9ssRpdsiYx9fAir5hQ9ZFZG2k85ZugUbEv45WdyQn",
  "key39": "4vUJ7qedPxGJXbcDXuF8V8sWNYzR7i4sTSXHwmZsyadoX5RBatg7oTaTVYT4h3C6kX7WRxxXC754VsZ3GxcyKnUh",
  "key40": "2wcNvhgu4wf74y6ejGq2vi8E4d3VWU5JUnJ6p1359NkM3Po8SFAe35csph3LVaM7ufAba6wSXpWu5pHRbcxGHqas",
  "key41": "fUWPpvemxb8BNu2fAHtX9pFwsLFpAf41NNPChuRnLGTV5VpJkJ26HBJQD5GY3KEYyqSDiebntnzdA67DvTBzuJQ",
  "key42": "4NNp71MQANjuwssc9wWyKmGzwwhdi8KcU3uofkRBrDXktJH9fyfdNXHUZrTp1r8t2sBaDyHCFKw1yiN9fP1h8b49",
  "key43": "nDT6rXm1iAhBSZ6vJm9rw1PCPoHM1Kp1Z9Bt6tiPfn49jfh1XSrStarcjw2vu3o6ZTXsjQw1TFjPL6N4hyyqP63",
  "key44": "Q8uRZs6MgBaVjcEY3hDWEXFh7U8XY95t7LMSSFrLMGh41VBdGFREUWQEJzxPXuLebE3oRBkLpvJ1fVpBnoMEnbB",
  "key45": "4R4w9tb9VrQ11g4Wv4X4TitVqfALz2EmA3LEs93mb6C7qLQNYCjhwTCZ8p4CEFLg2Ak6UUuaZ9RDySwqUUSK57e6",
  "key46": "58ewrgHqAzSSehKMpm4PAUTowD9U3iLTDPzZExQE7rH2jGJwxYxSvyFLZhKVjgAAHg3zD8jEL22cyyBT5EZu3pZK",
  "key47": "4TJL6ayEkfQf5Vw8MyvXov4BjLJYuTAwr5Ci4wXCbpDtNacbpesgThh9demKrSaRDJuXQZdMA3Tjp7Gzf7Fx8aek"
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
