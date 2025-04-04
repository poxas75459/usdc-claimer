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
    "2Jq9mzN5rniXDasnj2RYem9J8qjALAZj6XS45BCLjjNobhDhwrESgFwdvjP7xezHrxAdMQsEmtMSNfZ1ZNkSpU3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24X8W8JV2Q6aATVYRnogpZLmN5ZCdztaZodm68PDmURtYPiwAoHYHn1sTnfkJuXwqefXsLvpUSQPyQXB8mHn93mg",
  "key1": "5214u1QieayKYRCMkhPDfjP8sstp9Qwm1N1W48ypUhVrPc8RMkCBgALU9NfgkvQA4tc7YymxVEVNc7xUDqHhk8Jy",
  "key2": "zihznS1i5ksozkzg1hJJTYQMBdnikKaYRnnrEbpuy5tL2psYke9jkkjMLW2LcTVrVXdXonivLfTPXf3cj7bMPKr",
  "key3": "3LSaJRoUR6iSgirRxmdf7yXd9cqpt7w9PkR8kdriWYd9U5Nwd1MHoqP1BtX9sZvCnV6TU54hWPaX6MHamp9s29t",
  "key4": "4LpyCTQkinexXvq5K53SXAqbeJKMVysXAJAb8LqmAmnfkC3xUTjLMjVGmJoXiy6BRzzPnLsuPDbbsc8YL7M1jZ3G",
  "key5": "5x3YKPhs9GbmgNyhzqUkRfdrFLcrNsV2hau8vCdTRQvuUdaKiZHhNCCD1FCtpxmS12w8EN21LLZMTwbzprXj2V3H",
  "key6": "2dsRFuvDuUfRkaora8dGtLgVqaFpZsW7oKvNG965n29NBH25GhxDggA5Tz5kHq9zVsHqQzzSPwAu2Qex283JEGiK",
  "key7": "ffJzCDsiW2QZccUuA8NUH1PwAoUMnmE7Lm9KUeUTP41RLX8UmWQ1DyTVuLDipCwGZxtWJ1mS1iac7y7byLnPpPV",
  "key8": "5U6GnHwTrWpcCXYyTxHLX44n3StvdRt5A3MkztdRB3Byt2YTnnHokdaKmRQnZRiXr4165WSy2KeEx3KX1xAwdeRH",
  "key9": "2oB65PXKy2eEmnTqxns9AoEv17ZsoD9esuMXmYdY2VsEAdd55UNtSaSruJx2kzLTSxrBBrCyrzpreSpadK4oRbXS",
  "key10": "ypYN3EgUPvR3z7PPQSCoa4CPhhnbtYumpfncGzsX83o1cp9AyJzse3ZrSCcsAh7WbnGixvi4R8Zj3CQSAjgguMV",
  "key11": "4T5nDopC6X48e6ndXPy9z5g9gKWfUZ6zc4MHAC8YZKWg4MNzZRUR45jtKNmLyrjRyPib2mui3EdXjqEZqtbf9QM",
  "key12": "3U1RmQRNsYUkDyqRyVAhs1qMXoerkTwFsfdKyaALrXY9CxDZs57Fx8firYczpmayoKVRhfR92UudNbKkmcisMaro",
  "key13": "4ipgTSerSJVvUBCXmEKRx5hErgVsicZpvEhLKsSG97bZbzJBjdVyFrpF2XfBsSyGhJQo261BrU9TnDHRTrwcM4Kw",
  "key14": "4bFzjQRrckXWkfNkvyYDo6dxZoQjDzUs7Zymzr9Ga3JU7HDEsMXnKJUg3iBJ3Pd7RFXSSjaNGCZXogDASqrJm4AH",
  "key15": "4iB2YrB6mThSZbuVJGpnNkw3j1SLMFogNLmpf1SyoeyZuNUZ7NRyW46PTKWrb5Z1cXJDH5BGH9c1JaXmDgXdBHyb",
  "key16": "3F9pBCe46gMJ2TLMbeeFW5HPjSZmFir8f2DbodWm1F7HY6Hk5H7m5e8Yk6Yit2kR8TgU5UKQFB1Auo2kf4D9ZNHA",
  "key17": "65mzwiEfAfnu492Ck8CBaUG8vXLTZ1gzm7SjEEfdDLAicB3W4JdPCHoFvMRTf9dQAnGdP4MPdsqWSrDjR1GuqoBb",
  "key18": "2LiGnFLYSWvP1vXCmJCvaV2zMyZjzNeFbU1JLCt1ykCL2ZWfRmCBA3MLbG7k84uiyY1CGx4K7PBRmYHFyyWjK6kF",
  "key19": "4MXaxiYbYZdiacKMnGp8fPM15cDM7KEqv8P5fcunR77Lx6B13PJ8bojbRysADJDcn8jPZNQMskYoqFYUCkrpp4jK",
  "key20": "CiFEvuyaEJ78kY8g7atBJWfSWXrhQpgKr3KbHNuvCyFREfhB6eRXbehmyLSm57aEKYSMGZGasFp4rMqBowsGXmg",
  "key21": "3P8o1RvzncdWisYHpzsJSoEvAb5MXZex6N1TgqwNcVVmFu9Y3PkF1nC92WQ1VsDbLaQktVf7q2xdW34y8quhy6zW",
  "key22": "25LwVR1SUmsShXDm53fh46qKrLin8ENrxF9jhMM2DPdkVb2BTaKtGn92bwLp1uerJNEmGsysmk8bXiVSrN99vNVL",
  "key23": "3N75SCzihVSv8xLgGrkPVjwixajMSa69AQTh7yXii1ARRH59dpiVxafvQ2zFGFvUEuySMpZRVnBj1sYzboSTtJEm",
  "key24": "DgLkzTX9Em6UpUpyLwPDazdjvnqMZtXGyXQpfemkNs7otkmRog3pfNJJd6ReMomcShvWC1748tnoWHhvtnjgvDA",
  "key25": "Q5VXGthyuxz4eSTtbBgPoJzxUyUngEwMwF5PmuN2ZeVNH4Lqr9YdRvxHeoamnebzLJnBj6EL22Sjb3WZUgHFiCx",
  "key26": "2p1C6B1jM29pac84dcFGmRG5Fz7hJKEfMUPBbeiNjN3rfhqJEWtmHyQa9vLAVWD5SyoDH7k4pbfvQazM5xkSQyTj",
  "key27": "RNN482qEw3F4dvHiRKjVufDMva53AVodAiHGEJjersFi8d6FjFHF2dgbbtiG4ziaVf2FeFMGw9qvRUfAEkbuUVK",
  "key28": "4hCRninMCbhezxVZZTjv6MiuSe93G2GEevF1Wa278b9mFnFb3qtThxc4r7XbtP2VDG3r3Js8QyckLoinH6koNVVc",
  "key29": "42Sb8nkt1yjWoiUSx8Evpj4xpE2NfCxZtpEjGNqfAiDhnJJPDY6ZB7uW1dPdyRnZ9hTefcAwYpc18pBpNFVRW92L",
  "key30": "3Wv8UUfeLCvYX35c4MBjNtNq8d1DyUadnT8Mj2JnSmjiwktmmscAxaLbR4s4LMoXr3ZS8tS5s57QUDnsnQkEpi4m",
  "key31": "4no47dSUmTh9oxQxKsBAgdWHAPMKnrz1UxphBqzh94oXKnXwrzEm1SgacjpVh41RdueoU9RBZn9aavU23oKbRbJL",
  "key32": "4LShhzYoLtQnMpPZHMX5woHNfKWNM56HyH19sQDSbnQgsKW9Lf2nczcvT9wzJQGPus2ufTgSEpS6W9ShZVdVGweh",
  "key33": "2mbKAsj8mWtL8YCgriGDVHYWW23ER4tucfs1PyPk71G6sotQhxFNKaouJqHsk9BCsbt8go98y7ESRs1JoXqjcuCt",
  "key34": "3cLEaEh8696oprMey7Ehiut8Hp5FPPLPPrE3AW5qoLRG3CvHzv7DSTp48PUt7SfhuU4mse98VmQwvmnRF4qFv5CQ",
  "key35": "mAo4zQ3SbCFGdozz7RWuqjePhVEi7uU6XiHk3gfMBJasWtdogAMQkNrFF6Uvrt5pd3Am8bFahaaDsphHGh4PNve",
  "key36": "5M9u8niEuD8D7WQBPjtcrhSVd6SLmXyHSPnwdoCqZb6Sr5dVv87u4UURTtHKp6fgsKcpP9ui4GmrgmPdVncynf9i",
  "key37": "mEF9x4s99EKB7NSVRxsALcEYhzfi6Q3KQAaKdJEUA2dMFMA91oSVmEnGfwW9NpgL1j1rjBbLG5hDgp8ieaJ4WPE",
  "key38": "4imN5NQNyfsKcpUqhx3a8KwXbuYoXVCRzc7wMaG5kzyDD9tZ4EDNcSifhyBG5TA9uzJoU4BAkbFtRDWDsVr8FgoW",
  "key39": "5gmneFpYVhai5oefqK4HrFopZVfevmUMJ65aXX9f1fikRmUWnYvDvbd48ZTTizAU4gNfPUETWFhswR8rHfCVuRom",
  "key40": "5G6pgPjiBsBM12JPMvhqmK9GdS8eugbhwR3kgy5woSiosijnb6qD2NKvvcom5nML8JdtWTETCNvy9GwhwAdiBZdm",
  "key41": "3RWYnyDEYJQtU9CqzrEcfgrfirCCehKE1zYx6js7haLZMUP3KV2ZdsJ72Uyc6Bn27MJSCBioo672jhfkRv7p6wqM",
  "key42": "5tVAE4bvkYhJwtcqWQr3ynQWyXTdKkJ3e1GBUDvLabDh4wqjtpG6Va6iWwjaLVdc683KNcPeUnhaQBMe1RK1a4Dz",
  "key43": "2uJToxseYeBJvKaTMUR3hFZC9KsPAXqFVrjSjLLiawDF4gEyPbaC2y9Md7KcCU4qFiEZWiDLx17HTP2vqHnXAJrn",
  "key44": "3aQVGTMugCTcagQXqoNeR4o8E2i8iHcqNkHLUeYDLg6N5Uz7rg9D1StpYTyfYiLcZkZqv1uD5rPCCDXAFZMzFTgr",
  "key45": "42M7n5zVULcsRusRj16HU4GGUxXo7ifrpFA1aSpb8dSehH43gbJtKxJy1tJ3FVWgMRRbMZwHkuZ4AgXP1xY77Uzw",
  "key46": "WwpkA3jo8Mi3VHoBCspUpaBLGuhxr3RALfKsBi8LnsPQiMaviViCkzucsT8DbpURsJQTHyvMkd1RYU2zXThNvDd",
  "key47": "v3iRRQtFdnio1RueoAvrAU7Ab2dWfSuyJ4RBLpC9pcjT4QS3X5BDXqaT4rPncvay7GEQDAnSpqtFsd9iNPAAiw7",
  "key48": "477LxpznLvbKCbeTde2Srz1dYq3Er1iijeEf6MauMtqR47bjXz1RsMn4TufEHwbzeTXqap8HhY94aZmHpNd4g2JY",
  "key49": "48oJ8RpG3Ag394gc5P5uw2oNZZGgmXHRkzWtMeaz8ZxDqKnYYcBASFKaSCrThPN9kqfqt8ENUBSyDZAgTNh9AGj5"
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
