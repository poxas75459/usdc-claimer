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
    "3F8ibakcMMZVx3Qu7QoBCGMoNLNPfKRRniFUKtoASQ4WVGSkifPWgwk2PV9wWKFM92w1ypfmBrGtVbn88vTPvjux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xihMMnkXNfX26YzRFARxEj3HqXL8R6uo5tw1A9MhKAibHUNEUrHJ2K4LPotE2QYtup4RtLWWtfVzoRK2MZeTPsz",
  "key1": "5ePg5khPgjXVp8P6nXZDkTBN9gxXZhzZGcHUD3nxfTyoxBponZ55FrXYTYZAQUWN32w6QrF3edX8mjdKxkJogJju",
  "key2": "21QZaokHvkcVaqP9eWWP31DVNw3DWXkbCjaqwedChuXr5mK4tyHYZdCsLGWSyzfJjtAfxEFjrMqUKahymASM52Wj",
  "key3": "4VppmykdBLzGeM4yDz2zEGw4MjC9GmCduvQcxhiLRbpQBvjvedg6r5JTVqyDQr7TwPu8nGd7VemSfF6az27c87go",
  "key4": "2gTEwaacjKaZk4CaqnKiHCf3gkdeZ7YYYsn8yL2Gih8E2vApf43MGc39kkQY4cmvFhpqv9cuUe3UCAggCUpJoRVY",
  "key5": "4eSCNwaGNyB5SH7M2wepYZL84kZotwB8XTLA4b6PawwkmydJwqrzgnYYZs97CxRgprfoN1hxHUD9GLtSWu7SrUwJ",
  "key6": "MmnzqHrZwvN3JVo2MLpHXBmC7xy9vPLTqMi8HWd9AWjDnHoMTrmSjsRTBd6r6NtgtaBLGNoWZugXuWUW4zEWsfP",
  "key7": "4mzQfWXbBZLAJhtSnuTQyv38cDDNeAM1UGiZNioW4AKqD6zTKCD4ah1373gxHCaaX3SpYcKL1ghdiopcpkQ7qekY",
  "key8": "4eNThNaTRAgjDG59ud1DU6VRdRyHwgppPC6ogBsJffjHUhCFdX3U8is1LGnnPniqKFST6UeD5pQ4HSkCCrM9x8dz",
  "key9": "2yDvLioLAoDPGWZJfVqqSkJjWnktHGZd5EoWDSBLehoHJQAYzMiAUFoAvJvGTu419Fqi4nS3DhVC57Tc1a51aLKM",
  "key10": "3e1hF4cMQ9rg9u9CYF5qs1FFTAJKpMFyhKYFjQEP21dT5rXwZCK7P9NBhwFN2tFDCVUk7vQ6uNHwSqtrWgWBYkB6",
  "key11": "4nkaTYcYdzF7U9iY5rxhyup3vq18mFTUdXnM2Si3rqopT8GLg1X9NnQjJdAWAxYLRd6j21xNNDiZF9qow9KExiuw",
  "key12": "2H41iakdfPgSDduMowGhJK7CGFndvuJTCDwmRwENRsVNb6d9UiekmLmAoYTDZxsxcMxMQcqmatbhHqof891XRLmQ",
  "key13": "4LNsiqDQ2T4EpGQCo3piiLEmVkYEfp8vLh3MbWx8tUTXv67wxQf9sigeZoF5PrUtvyknmW8jYxbgtHwug4wkZnbx",
  "key14": "4LGH8zJ7ssimVdJyqLgjNeikn3BwyjxYJxf3ksY7JkZkGjrrrUrSRPwLtXxsTLPgEkz3KcBTobKxnjCuhBCiNzWk",
  "key15": "3YRbS9RLRMxii2e5GKcEGibyqYo6K3NLSHLhfe5d46zSwN8jV1doBKi4dXsT7i5SDaq3RZBVLU6Tq7NFLKsffm6r",
  "key16": "5vaKjruFyg8YTbDJDzTK88jA9uLgm572UGPLYD7eBgzW8mAZZcXCnwVZMFXWrAsNAjS9tgjLuLcihWXiYdBpSbCX",
  "key17": "41S1DnmBT75JXBnweyF7Jwhak17FFyijpPq4bGqLhmMR9uq5Ha8VVsVS8hwjk3uXG5sC97HeSeid7pTwEPq8RKAM",
  "key18": "ajaMukzEVrUsF8tvyLEXGmAZoU41u4Ei1mSe89JHzi9UmKuDoWtEbNu2Cm5bc5fMPERVfpM9oSXVKfGJe5cRNL9",
  "key19": "3D1B7J3kQvAa6ewpu5L8Em7YaWTJLHMfWJX4kSJ7MfXy76zuEV2vQF2z4gYPD1vjhDqd95G9h6NgDDWVLsxAoGJb",
  "key20": "AGgYS1fo5NHf5WoysV47XS6j9wVYTpyPJyAUFYXFLqeJBhMuryVF1sMGsJPyjzid9pG69KTXUXSdroGCoPducWL",
  "key21": "3F2Rur1TYzm7c6sTojDrkGvwKTnBWWcZTovBH66TzTL3Zz1q9QDftK9fpWt549B3sqb4DSAtLG6gE7mZqZMT2Dok",
  "key22": "4Wjo91nC7caFhE6QrExUQihxdz16S58ifwq77FL8Df37X4UM8AdcdnqEbdBbgExdJu8Rbsyetzb1dcR54mVg7HGB",
  "key23": "iYb8K7pqsWHyB44jrxciJ88ezSS14Df1tc3U2rgZVc9F7wxbEgWf3wecUTUKME4W5UUJABzcztDmQSw5w2wdg74",
  "key24": "5xKpdb7ejnr1mybhpKhGUQ2yX1UQ67HRNsorehfPzaj2mHSLyNYnMacaKzCcGjuUXCDwrDHXWV4fqLijFE6y9kBC",
  "key25": "5iboBTcYVJg539hDaMriuRDrh1wZDEzfKnx63uTpSUbvAr1rMYAQ9ryBf5kbtHSvmGcveKhjcDmw7CsPHtj6dwwv",
  "key26": "d7Vcp8Tm1AJKmpKsR4cXWPZm4Xa9KkLJ3gaNdBVJi28s7UHs8UpHDsCakbyNdfTAr2732QDNHZVfTjSsekd3257",
  "key27": "47fd6rsobPJpvR629yGzcmfCGVM56R6DDu1nv3g9Q1f1aopXNMksAFuzqaHzG2HiQf7L1QhoQMkeuaV7eax9imQi",
  "key28": "2PhEjLW9NtfatdC2nHeKR8Ut4YQya7WeX4BMv1kmCNSLDfjMcFtGenjZ5B8bgKZAXLZBMjAF6BET1Bn7LGnpioVh",
  "key29": "44nA9Eia7R4LGSU4SdDoj6BXH7HBYqzwgVmR1nnGHiUaTnBKYmvPKCrxa4wR1uhJFDoEQniFxPbEmAy4D1dEWwGJ",
  "key30": "3FywhEbPRMG2dGzBf5DovPKQ1jtRtmbmKhK9ngr62n9sLMFXWHsncCsGLnj7fGqUStRMndhX74y1ViKu8GM6yKtF",
  "key31": "ATDDyHqeg1mxpYgh3R6jN9eKc2553tF5PdJ8wDfoaXVMEfZneQt3NwwG3X5tENxnCEFJavuaSqZWG1mRXCggpiR",
  "key32": "2XbJ6LhDtdPdpRv6dTxnpD8MSmvoSgNtnibFkibG5MBSmQ3wbM3B9GsVdFxsHS3QHnEV8huLUsN2XN7XKxuWXAo5",
  "key33": "2Qvs7BBWGAeGQEa1Do7BE3qZ3rGtWxGWQmgVxpw6MLAnHu6vCGDsJiNeoxHXz3n5K4u4RznrLQjC4E7hhFAUA4Wg",
  "key34": "5JdhXhA3dDg6NgFSxcTvNGiaHLZiBGGmEwHPdbK4m6NU9GPU5GkiMeCtNwGuU9Zu37ZUAXWxDNJ1a3C1n4PWMKQF",
  "key35": "2AAoryG4RzRW6gtVQdp7UaFVC9SFezmf7sHLUYj1S3N8kQ7ANFJZPH9LAWvFsRVkxrmbFoxMYA2WLKXvUYGBjL34",
  "key36": "56fkuKECKeTR4NrdVbyhF4SpY8tYhPjKabKSeDjc7G6YkofKduZJNAcGbETHSo6dZnn54bgRExaiqPfpvFQ8Bfux",
  "key37": "3EJpZmtb4Cx526KVDAKMSHhXrth6MaSotwdcW8JNBKMMQ2Hc2hi6TUQRLPSPnhTjjmynuQHcRWKcJMrrzKPnEJit",
  "key38": "xUmojAhdroK6w9pQPXznxTVajHsxF1FDjHhBVumYpUHGax5zzEUo5Dhuege3rhUufCd9sQ8gQjFjgq5frZEcXDq",
  "key39": "2Qtma3TYkRi94N6KVc5WT1T8RtKUKBZSoqnuDUgmXNFzha84zHC3Jd2pu5xvsiwABAyWc2ijaMCiuFW1GYD9rjeV",
  "key40": "SGWfAR9iYNx8mSewxJr2ADp1u72HUUiLjZzriHXvDZAZmNKHykjBYpMo5QRaRu8Ej84g7aMDhzZEdC2DKk2V2J1",
  "key41": "3iXPStZNsodxguiERMsfE9BtUgwpBiYmgVna8d3X733StBAJAt1eYb2w4LQfssSd1vWDHGVEsZu4Z3pnRfGXQiyx",
  "key42": "42mYvpUxUif1oohhJBLgGKwwDuRU8QBeRff3D7PrR2Hmw3ffBiqFs9Rdy584hyNFfDLNFQCMzjUxAKXXhnC95vLT",
  "key43": "4SDYi9jtuhusRf6FxENFmHG5gDmFR6revbF5KcgfX6uDqQCiyeGcdS8Z2LBjizWcR2VpEjfv8nTvdJRAdWVYXHGW",
  "key44": "24cfZETbEEo7nNqpAQ64Qgh45Pi7H2t32aYMZkbpqMsAajCjjYDiEfM42xWsXUUKUaVofxQPaURojCEPQEQq3gQu",
  "key45": "5odEoiuiYpzkDwqb29d7YxE22hktL7TUngav6yfotumvkYgLQETWMjmCxvj26ZjvqmJw2xJAr8ZDJYemUfybqjRV"
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
