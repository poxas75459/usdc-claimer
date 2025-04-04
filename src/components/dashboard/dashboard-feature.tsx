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
    "3ZXu4rqqxba5f6q7HXzES6edXAaQZ5QeHEFR2cU9GSkjrguWpQw1kgtf8x9Rjho9xPSBduXiYRBep9ujCPq8nMvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65NzepW6YLqoZqTv3uw1YV5wGJmhqAY8qyb7odcct9AdaWCKAne9BBqy2x1p43DSZw3kcrcipM25Tmn2pVZRAGSw",
  "key1": "2VZW9e1Ctbd5e4XUqpKu76ZDe9b9aBe52G5XTF9Rpr4VmAGgZChQxdFbF9DmxjMVPUzJeMrfUVkB6KEuEYTgJVNV",
  "key2": "TyP7hbnsa5ikxEpteMX7h6vULMSoZUvLQmbSw7iisu9KoH5RbnN7uCXCVGMyeMLZp2Qb2t1DA3uhkJQspf312kZ",
  "key3": "2UhFVNn4MWRmrvjC55PNxqd4ooRMrWj57MYR1aLMqfKwgJag52izFY75fpjsCKAiv2v2FwaabjpxmjTxZgiJRNEb",
  "key4": "5aabMBru54vko7HNh5Lz3JuhBqW5M9c6WCEKPfDt2NHjYQFA95gLG2y9wUgPc8yPrFqS6f1yBWf8dEFfU85f4A6a",
  "key5": "497w6VjRfDJAU3gAqHkAH97opAF37LD41oJ6WS7Jy4LGDSWrotPiYq7nWJgwH7Ds5zuJxNxvqVLesET5rDyJTr6L",
  "key6": "34X2gsY3oRJTeu15MSJ71WgPK8zzXvtvESs7RPp2eP4NxXvPzDgnzfPbJ6emqerFwCgrkBXeU32tWGCbSkqNXCcB",
  "key7": "4eJ6rjxsD3fh9YMxnZ1q3Kfr8e8TuesaC5ErjBaP5xQnqTCTxWCptk12T2q5nv59FRRhqc8CDnS2uYvkb7rVqmtW",
  "key8": "4ZUyA2q8mVdsrJGn1DbeB4zFEx5cuHwSrfMhsHGswCBmDp6FNfkHcMLty1hh9GDrCWR4jLiom76h2gy1dTGEquQ7",
  "key9": "2usrGU7Hy6D9zWBy9BW7WhWDFixDq2B4Lu8YRiLMb8VTy4MKnv92e26SXYXY7yEHEvdNhF3AjeDXqCwZziobfS3Q",
  "key10": "4A25JPjUjwamNeziQDUb3A9Y3CyvfRfmYTJ3ARQ2ydYBV2cwYu4x2KTF8E9Wqe9p2cg2tgcm1xAkm1wdgMr7sKwh",
  "key11": "315mm9H7gkeRoev4vVXdqjjAp1hxnXLBPcyfGPXf6Zs93anNKVXQsLZSqR4HYodt4NUhTxwuCzANLJnemmdE2SUw",
  "key12": "41hB4EDhzqepXK5PZmNcBmfSSozCQPrnoDc2tizSMVY1RD7CWDLdpoeHYGisTwUmdbAHHkML3x1yC7bVaGw7fXs",
  "key13": "2JDTnnyRuVPeAHp74WTUx4sD1w7fmDWfQS6su2rNGi9e96xRmbTbs7DXt1GJ6ZN9VH8dHeQbw7dwMvhruXsMZLLF",
  "key14": "5DZuvvr3hjGXgb5Aav3eoaNrHf5dUZDxdYbfCLkSPYGHRHcLGFxgMqTHZJE8ZhA2y7ZBzfg9g9aX24GcqvE1X1D6",
  "key15": "2yPSFDoT9EHek9UQFzfr5RSy56dtM7GexpKDJWXscuLY3FwUmjaYYbVb8cTihN6PEERA7RgSg9pxaHeFHpKEXuYf",
  "key16": "7eTB8UAFaro3WMH8LWeLQ9M3AdBvpNBYdBDpRxpwLTZqPNyua3jvAFAi7PWsNdQKutvih3q56baHjpZtzajDwvV",
  "key17": "3C7FJd1Lm6ctosKXgHfXp7eC23Gd3cdcFwXdu9PBjfx5UBEDPdu99NQwkkekihWiucJXmaBM8h1W44Sf9MCD2q4E",
  "key18": "1wTtqCWVJRBhKFXcZ24vRjPGkAezTvTR63cbX1ZKNSjwhTXjqUdQGbLD8qi7vAQHvTxMjEtpLXbvQiwCCEX8R6q",
  "key19": "4B6vsFgkH3ZEnDoy2uosJNCcrBRfrbGyP2jV5qFQHySY8BfWwkCdi9TuX7Gh97946KPJqLKg56ht7xypxvfj1fDb",
  "key20": "4PK8mQZhwq9z7g87YisfozMVFygmttMUuLasESWmQ2GbmnBcDSiptoAtCazy4MmNZUszypBuyqtXbgSq6Q5gwSt7",
  "key21": "2amL6xzahihjCH4wbeKRXqzQzsMNCN4dAC4pb5BscYB5tj191y8U7L7i5jmkKkW45JB8SxE5C3Trev1m5TR7aaP8",
  "key22": "5va5AyZr9fnNfURqo1zAELSPRTYtST85KVdKYabURAfLNRQoP2zAmscCk2VMk9DsVTy3xy1KmZ7hsb42ysEhqUwB",
  "key23": "mh4iG9XQjgbKRNwoWX5urEe2X71iFHxH1CmdFCfHtk9uerf7eVyhG7himPip7TfG9yXku3FDoqsaByGAvNKFcdF",
  "key24": "UnGG4tqSuz3o96EpkoTqzzRqY2Xj5wPLSBpwWUbkYRUVTt45dBvHWDRUToxJKCHCfcgAaJBQHAWp7nLU4vTisrE",
  "key25": "3KQ5Hiu36gGKwJ4pvCj8SyWsA7cR6uWuz1dmXvXtVmJnVKMzY9ttwAHQYnvdm6cdsJSxf7ZRHf2KmVotWi8V6N6m",
  "key26": "4uLiCTwqkXHVDq2TStfdDkX12v4CRVs5XYBrRbNvREeBhZW5UqPdTtYqUbM1QHeGjfxghfYCb9FizvuxEbP7MPPx",
  "key27": "BuyhwMgTWHWTWeUDbjXvtk5wAhv9uecdLH7BZSAqMdEu5DnXSgchD2uf98zw39sm56MNRWb1hqtMjHYTY9ZhuAC",
  "key28": "5Eed76ws71tYcacDqiwMkR7Xy7HTjgpVNw76mEYMdq3uynNASnUWVCPd54KxhCaRiYiy9JnddFaC4D9ZygoPwbg5",
  "key29": "3SPmxzw7zQFoT5tdMT4CXJjBrzf6H4z6hmsqSa4KDKjHvQa7LtCkUSif4hjrQF7msosy6WkTreuRBeLf8B1Nxq9g",
  "key30": "TsB1UC6sPuc4gv4iHR1kXi8DMB2NQf9pDJvMYDcb7PvBgcBAWPeep5XJTeJ7kHWzt5ZTJXkX4LMnxoqjKuQbrk2",
  "key31": "3jsU5ejA3ktHyYF3fQa3mFNZBsn5rte3Wd42chFLbrmyjHrMhzLPtft6T3Tu2zA1cR7U1n7ZpvYzhMCF9XrYXEim",
  "key32": "3wxh5TX6FyWJbi1CzKs4B3WMbQ8AtL7AC4PJ8LicvBkkPNUpNoN5RiubQT8FMZyN2g4vyqqoXf3kiEUoW1xY239n",
  "key33": "66xPf8WAXxu2iHV2DWqtMSXyfQBfDPqti2tZUP2cFzsmwYgeoza42TvBusWEJv1atZUqhomQPZevoWTHjBYhLSEF",
  "key34": "2oGxgWsRHmqNXxmmZE7rNLWpiGyuUzYZUrVbUbtntGuX9X4DfubZa8Z293CkcMysxuMdrBnPnjxHmjJVU1h9AhnS",
  "key35": "52i9M3Xj4U7obkKdsd8Ao1Leg1f6rZhV5hiYQnWYGNTLuHihLcmnNxWmamgV4cd1LrvtRvEy59AWVSbHsaYkGLJ8",
  "key36": "wZkmnL8AiHcigPc8kWmtT9JNhnh8TmgNJG1oYq6iFZxNhPFxBdivGdYsB2yexADxAERkfruVX9HRk7E5aoFcz93",
  "key37": "422Zsadqiba4VsEyAwx7B8DkWgPScxTfeG7Mfpx5JbhxEau48AJcGtot4L3FzeyxrQSjuB7URxsp9cim6nsWNXQi",
  "key38": "5oVev1W7d6ghHXwwkMBiKnxBuLaaKXgDTheXRqvg6gvkX3JodAyAd5ckpC1S1qankRNdp5vUyCHcLzdP7UbjDRKg",
  "key39": "5Nr3anrCuPMWcbgQeFViityqjv1bCnXoY5NuyT2iMWBjB37PNre7pRUbnn9WzAUXXAFncjjV8dWvvkEhVfRmnobm",
  "key40": "4hnFTWBT7oaua312wNMnWWnU3w1CFXAE9khjGeSupFtDy6pLWHAtgVJXZ9h6BNEkRqXXraFGDe5EWX1xPGWbCZY1",
  "key41": "9ZcMJumZoNHFKd5y3wgoz9vFoAMfymSZqg952pC4Lmqg2TPdL38CeZNu2GNA7xw4KRVRp6e7Cc2sfGMGtvkgjDS",
  "key42": "4mU2vTXrxJZc3PD4TYZ1E3f45tSqJJBqB2W6zHZHaZkmq2dYBD4kAmvsDFYeZQmhtk6MEmy3GF6kDcNG4redw3s8",
  "key43": "4dzVw7JLsXRncBfDfdaGTd3wPkthtJVqD1qShHPeouEiV2u6QBMdHupZBuMBxGyRLbJUadQB9bhFd2oTAzw5n34d",
  "key44": "5ZN3zUWVs6uKrBE1aFusjmoNtLjapoGKLPZF6FBSkSARk1A1xkzazjfzTRynudTYuFo12FFgezavvB17tT5dCP8E",
  "key45": "5nXHfRSUGXXvqfG5V4FeefNFzG75wjdCgUdxBnYftLo87QbBTYWkbMFEJMTC42nzFf3L1MFugArX6GmvREqzuvok",
  "key46": "3TDn4xAkPXT9QMx2VqQ2tzrbLXDgXHdbhKKmzZJfXqXDg4GNgep4SftpSwwfmtj7Tenmt5Y7QgL28mbZyhBZVaeG",
  "key47": "3pXsZvAcF2Y74rU9wNXBKN9oL8fhofRogd8GPUjKJiSfXwemnY2abpXqMgdek1D2ZGtpqqcBKPfe8wxB6g18qnCN",
  "key48": "4nZUJQs3Ri4TfJXXhzbeLT21HSHFJEnatcGunBjG9HdVNX8s7akyDEvXruqhPM4D5YNyDtbt1Mt1xR4nLmBv9gZP",
  "key49": "4E7E9UDQcMWPnJM7iTMRPhZwmH5VkQHbGybPeTJuzzWMuEEBQ1oV7DyD8iRnJyBW64SiSRg6F5GYqz5yuVwBProj"
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
