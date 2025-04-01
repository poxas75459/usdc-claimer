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
    "43j4EZcJTtuoMzqPW3FmQNrXaoz8Q9JKSNPHZsEoQjQHUWgfPavkLA69ncZwT4JCmNGcCa8GYgMMMXbJqg5b21wq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LkifaKstLhQfnJirgUMPXEeyPZtyAcjuaniwxPk5rU65zT2cTAmsZuDtv13HWr6u2gML55ozhWpC8XLeFM8ZGNm",
  "key1": "2hMjM1VGCE16DYbkLDomLNjPdEpXoV7kJkbZJVf1pFPYefN314TbFuQ8TB3LnYH6u9Xn8fzguvMWiDXNAggoV3vk",
  "key2": "EgQ5eKRjyJqPsSXfcN9McAH9A4XHHCRvrzrTNwLB2KSHdgVzxRhVRQ1qwZdzvbcSZT3z6ZrSSaCHKyFtWJ9kzJh",
  "key3": "5dcNTUKv4GrhaRYgv7nkCHkYRHJu3mjkhvr2gsdtvwdyzma7seJQu94bxKTcv9A334JmNbJpL36GhwxNwF6SyKqU",
  "key4": "5aZWgWUTiJLBAW1UVgvdqihX7jcKHPbJjdyVL2W3LdrBk77nX8NGhwFJNyE4NoJ4vWgN3bXUeTYHv4L1vqoMYrPS",
  "key5": "3DTTggvMvT1YaLHajjgCamo1ZNSSuruBXssEpppWPzqvFuFSmEitJDvRvL3ez3jsXmU9XVgTniSsF3PSCnW8wNpW",
  "key6": "5GoLyYhqpV1rdp5JmST9mjUv7zsVNgpAaRcQL9BobKHn47kgPy43eXNgdtZh5tiejKCjQna5hkvEdzhSnU7VqzSW",
  "key7": "5gzMKBnuTocYb65u1RQZkwTMZ2XuwgQ1YvqTY1sj5CvqceUArG6fgr2vqGNn9kAbo1GpK51sDrAY4u3GgYW161AN",
  "key8": "4FaC41hgQREv9vU8kXXYKV6pY4kfdby6NA8yTHWwodjP9QGojMrMc31FKVz5BTP1jvcEY2ZAs3P7b6zUwoJjCcdu",
  "key9": "3iNmxcfBkgCo5aT4nm2vcyHq2nQ75xKw2Vhq68HMqwn2UEAb4cXkjnUQjpGkQ6K9ygFgwUyVE8JjGPB77u1PLfAB",
  "key10": "dTaScabNbsrLMNAuLYE6GUfgueeiESAAxZzYhQsYeQzGAJvYM1PKKwfTjsm3RfqXADvRiuoMuvftRY3a2NmJBvn",
  "key11": "2CUsafZaUar5WtRZaiKaRu9iYYfNjZ68eVkjaKTvZUazvPVEZrFjC9eraZ5XeJZgXqPEi5WuXbKaDJDVhhQUZ4WX",
  "key12": "2YsKukME45cLif5Kh934zQU4bkxQ777vGfhZAEWv4WPQjYsf7eaT9XEGuzGzHy2aYHjjAamtzpyE7UH87jT7XzE3",
  "key13": "2b7z8DTZPocuuKvvnb326HRJzDeKieRnpTXcB9CZcT49RWCsesabvRyQ8uGynA5sGBDWQCaNuX6ARTAUZwFcGGB1",
  "key14": "3y7f3W1GW6RSy8dNTVAdcchGhD3yAxsAfkJjBydhnMGXWUZueShzouXuwrbXeZMvWZDf1NxoP7ZQqtvp5FU2g23t",
  "key15": "2mtyzTdfmWwWUko6vBcbeezXZd9eiGLySKGA5dvFHP1FYRNizEhX1zqgXbafHwRyFiLGwsHvacN216YqzVa9sJ5o",
  "key16": "4feCDoo485XuTarBqxPKJcSCy8QQHtDxjMBLYhPgfzDuRtLSsNs9FcF8u8JYVPRW2hLqmYYfMAVsuNuTKDLRfMcd",
  "key17": "2GzveaUJRF3xLMEVDKcTPgMaKCHr7WmPKgKwpsftieB2WJmFDMo4QrjuT8KdszGLBi4tWww69h8Pxr2XaTRfyGMz",
  "key18": "3oDxqJ35HXHykHU1EYN23EA9Grq3SU5X9n6WTkoRnpgCyQz4Rwb5jyTJFHhWqEhK95pwdxtDRkDV8fD7qrbofoXz",
  "key19": "hVVT8zES2u4dkkM8DkbMxdvtLQPgw9EyRWf56wmuAT1oEopB9d47ssZiZ9AYXsdXUJbkGz95mBc54B9ukpes2Wm",
  "key20": "4wojCyPtFaUFcJDNneW11nDDde4nbkGxTcUit1Z4W68oZf2trS8M7P23g5DCFPiscpre4o6wrsyx9ZfXi7WrYCHV",
  "key21": "YAreX4WAvqhQvH86j4KXdfwvs1uM1tHBgdomRzXCJdnNSW1giSGudQr7ci7TdmxXDW9Hjxq1qXdnsqkm8Rs8dmW",
  "key22": "24T83DCffbXaSy1BNjQbFuDas1vFKuwUQUQ9ZKoSdyrmXGu7Gu8Dy2P5pJ5n6qrYs8ZMziT1WWeMevh3fBzhBiu6",
  "key23": "4dy3ja13mXkyhYRXrAWR1QQrwddPRTdEoHSMmoH52bf48mmSgNNKmYwaPvq8vdiNzQrQZssE2X4oPP1SyMQip9yq",
  "key24": "3AQkJfyMVttLhdiH8nh2bJA6Za75V6gMJ2WC6UL7nFVGXDDk2CM8YegmmQXqocZu8hUj5BSWp24WDkGypRMfpSNk",
  "key25": "2w2ubMuVXpQfQ9mvsnCRKnTzwc9CDyd3SUfS8JyWQuazZ9jJc2VgYPbDwrze4JrM67hjMg8oh8psLoknSzsx7axk",
  "key26": "37tZL8CQ9XDFnBJvvWCWYAFbXCpAhHvXRPg86HTTtXav9DALkTp2vE4nNW1NbEdbF3XLcSLcmHkwihZnM3T8hcrv",
  "key27": "Fc6VBsN2uQmVxMykRrrS3t3YLqaWCZqFb1JbgkKwMPNdqXNUNUkhXXSuyXCBhejqwjtyrFnn1vwn7sb4Cvrd3ew",
  "key28": "3V28JjhgY6EfdQztQHHnEq1kpqvDrrPyg5QF8b2AdS13e5Lejw4Sj5HV4LvguNzJZZJhQUv8qj4TyFNKP9fhbdYV",
  "key29": "5mwRDosEB9QkroFvvAeFbrvBERQXbPmDJtLo8518t1XGcYw8RoU1Rx4f4mTkUFdXnZzukY3eCTMLMfAiqXGSujWv",
  "key30": "3NjkqdoepCjosTaQ9n9BN4WK9hdzT31swHYoSuS9tQb2843iPAd9kZ3HZSNkfN4zQVm48s2eZuz6grvcq7XGrd5p",
  "key31": "ciGxmPDtjT8ihPVcPnwfYZPrH6P6zMStYZXyv5Xh9Eq63ERGt5wwDqHpCM5icejQcBZchKCD8XXS5kKcoTmvEK6",
  "key32": "GygMH7nCWhSgMMMLg7isHMiFMU1NJZy9zV7EvwyVzbMYJJ3bHPxU9JngaFkTUmobj5JkgVyfHB3pHEGdBzQpfQL",
  "key33": "cUEH6JJVjW2z2jWDzG6jXSrmKTKXwt9GxTdeetbjVxFspWDzr4H3ADf5hYoEiCELcT1ZyUiMTTfr2EuYTy7WLY5",
  "key34": "2vfQ5mLQX31gfziruuAFwYHdba9TqnDJ6DqsAJD8qWYUooniWXLze9RJE4Mhem8wZqwhxfwyZxfGa1jtp6vETJ7t"
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
