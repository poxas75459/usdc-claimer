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
    "3KbyEAyhzkQGDQuQoBY7XAf2nyBRzjA2C3CguycBsxygBriLY5VuxRsREdiyy62iyJ2EE4iVKPgavM4qz6rqAoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XEAkgkoLPrgGzcZYLmXp4oHpmkfuu3HnEUH2wU8CA5QP3HBYW5cDW58JFAqyUZXW65zqJE9k5cNR4aUdVXNJ9Ev",
  "key1": "5E2MH3HNLTBmtQoFGHjN6jPERDi7kKd9fhdNbnoWRQaB4zLSonkjphEA1NRXnKijU1oT7kD5QgALR78EcWw9ow9B",
  "key2": "2wVHwe7vE8o5q8hbHcyGBCvtzKeXJmcpUXy6niHftJpSmkPNkuHFy4LzdUq4e5A5TWJGiJfnfoYawwdMK34wRfV9",
  "key3": "3skveTFe4nMCZnijr1NPSE1chie3ruKMmFf8TKWmpySxd2jKBEz61sEuxtmjbV192f2SxTZodDb8PdLn2Em5Lw4G",
  "key4": "4SsnmjtZuZWCwUEww49SMtnRzzF9j3ywEthk8x2oi94BC4b7MK89AEfWRiv8f7BKT7JDfCJzYv2XeLavo5w5HxTZ",
  "key5": "3LbehpKxAjkF92QENDDBk3D4tc29ztfFNjGqvYjReTvQYUPnJLsP13kjDVrDbzGTjihp8bWDoFfMvHq1Y5Snb7b4",
  "key6": "3Vf7iXm5oeGa1BAsRVxd7kWqbeVYkqXT9GH54DQU2cPJYuDZgFt37jdz7zu5s1pjn8sjgncmLXWCXFZhq7WiZLc5",
  "key7": "4g1q7X3z4mu3XYKkgdoZN54dgRU6xMKAZGHcVEyVH5qRZcB73dpP98QFvQytbER6XaDXLkrMqwZ5WAXubmmn3js9",
  "key8": "2Kz8VbyiFZi5zDa1aNTFZUbxwQhUedehHCdav8MqHwyE56s4BSjjzS74YiT3SdSzPgixxb8XQEGWRd3F4tToUYRF",
  "key9": "2xnVp1Yp8bUxxQoFxTpgEwj824Mhad7naj38msmHHweh1A3JqgPWMJ3wCvDFAc1YzrKofPaXVwz3pEffbgyJXmTi",
  "key10": "5rbJyVLUuVx27jhrhc9L9ELQvuEKZoETJytjTDzqE7J1EMvzRgdiRYtpLMChD6gmD9fZ1cpE9mDtyjWeoVFcSqDr",
  "key11": "3XWsojWijF99FT95XG43bndsoGVp2Z25QSP9myLtubRnNXGkRZa5UC14vYKWCMbFcs9FgNYoSrA4CAhwNMHK6cYv",
  "key12": "iJ2qWSQR2Tpt6BNM6BMpUrtXunAKPtZZu9EtA9KYYGvatMZENCNkpfhrJ4pf4gKTN1WuugEZmP5SaxFuid25mU3",
  "key13": "63iVztjkKd6cFibsVcCiGuDABedG4oHSvCjwAQdbTSJ7mgjjkmp3R9pvWKhvE51fQrTm4GdWfQdt4bK3G3VTaDgE",
  "key14": "cTKP4TS3oUnAcVVTXby2gaWJcq2R4W6MJdpjZP3eMSBjpFEUYv8mNiPHFLaiUwyH5XC4kVjHLch6ouGiHCNXupo",
  "key15": "5moE3NdH5M2RQreGs1byfygh3izfLoLZ9KTWM3VNp9dR2pfpwkaDu6LRVdKs9W9BHrPqg6Aqrc47BEQGSX8VeDhi",
  "key16": "49PXsCj9NBXTth8sd2WGtMyGwyxeMzNLAiNaMqw1Zg4EwrBrCRgwLzvyXEHuCn36DRKcGsqwauGUi8jaPgEifLPX",
  "key17": "3YtSNiEn5rTVccMPGn2rJWKFgjBihQD44duEXS8MCJUjQb8MXBuS81dNJEsXpffQDtQ1M5qWD6NCcP2GpxAuCZsk",
  "key18": "3MJDm6FxdArkCwVqvB16wtHJaW6vzjyZdiVo6JqT2vSDoNCg3deuk71j3KFAcXbSgfNW2TeQsUYYQvpX82GkpLD6",
  "key19": "5uMkEJ1ow9kEnysfsy1dDPLXCR5ssyAE9rfPjot4paxtnGgtpHepwxxELDN3emPZ6AaFWeZLpej9p2cQvTkkZvt1",
  "key20": "2J7ny4gUbZU6WExUheQKs25hB2dXSF9KRnH37FdC8SgiY7qa6ga2AJXQG6PR1eGiTWHiNQMc8kvskxVbkcs8FsTk",
  "key21": "3TC3w3yg435A8SzH9vRDFBZVtSTGCT9D3YZCvsysaEbECXohDiaEJMThwUwVwZR5ULkDFiDFAxmNiJtRxUzrHPfk",
  "key22": "2qqh3us5eCGqGXTv5odNCJVZotT1HmrCZ2rLmw5GLcTHJHcRUGsxmUUiaCZRS7EbugBrAtCjdv8Ee3GQoueNWgcv",
  "key23": "4bia9iK6MSLrCzypBLH5NgiZZ6MJPyJMcbnMNtA9rdpmryhDYrCrAkoPhG6Sfc631EZSmmUh1Gd8w8bkexNqJ2hv",
  "key24": "4XhpXSyDB2rDasGUpoHQJ8unQsuaeNV775AZHcGp6Pzd1csaeVCmyfz7wLSTZ6qwG2pQmGAdEp72EUCZb3Su1CLy",
  "key25": "64eRmqLr348CfhmX6p5GeShzuekC8rYNX5hrv51btdhuVAj4jVoihYH3CqM61vYqvy1sARFCA75gyDHVk2k1ynY5",
  "key26": "4fGqz7HB3Aft4oPfRm1kW3PazVWV355poWKc67xbAWYai7QRFYATVW9tQhAsp365fmjYVwuZwoW9T4aw5jfkZYt8",
  "key27": "iAsFp4vgwAt4p1QQ3aiVK9BwJjNmG52ioai4LB2kKb8ccpySbSAGgtEQfjGzR3KRQ6nFG2hVjZTcfFEVXpRztVM",
  "key28": "3kCs4FSXebJNFCJAv7319vFFS2MmhGh5DGgxixRX24jutJt5MhfyTrr1QvGd4b6k9Qje6imjNLYaeEzbK5vN7AWC",
  "key29": "29dLaPW5Ln3yLNGgUgAhpULeyrHJaHu8Bn3Gx9EBvVyP7aETdYKUmCiYBZ1Mzo6sj9mrJD1dYaRgxvFSkBZXdTTa",
  "key30": "24rVSASErCMFbYVBMxR5XvYJKtabnrwTaSfkWmHdg3B6FEUmRWBhSM1PVymu9nmbP2GFN54nAFqUBMboCh9cCuGU",
  "key31": "5dm23LKZHpWNgXWXpvj4QgatKDYHb9BnfdAxdPD7NbrFyuXPCA1wEVNiw5BCgEyWR4qzV49wUeD627dtjpQgC5Ad",
  "key32": "35dZvbhvBPok7fWRk9czGnCcRp4irNytFvkMoD89q8LNPhdBv9EJx4MkYAL7fpxGbaSgdjhjmV94pgCTHtws4RJU",
  "key33": "2ywK9g8DAGQsHuZnubURndkfZxNTV3W6gxzDaXE5K2H7iFWFgVcvdQkAefBewH8cQbrAaxfGG58GYZudzMG8Mw4B",
  "key34": "1y8VNtRT6UTUqYH5BfUSEEBshnn4Q3z6K8ukgX2T89PUgGgpbHgqwqk7mGCRTo3KpnvgSQkmCEwF4QH92TwyA8A",
  "key35": "5qXRyXyRHHNd4NzZbGbdYyeBMLBz4jtbpcFT9mSYsm4QA9ytoaf6NAjmjsWwTpxDZ9uVy15oaXvBqr5UJ5NLCYtE",
  "key36": "3rYV873qNXRc3BaPQ8W1nr8SBUY4tK5gusAkP5xeiaUz6HibXCHedvUFfRZh4F8Tm88DnccaykBqv1QrszhDvCRV",
  "key37": "2yQjBoiXd4TQ3xLDHJ8tU3gLpsRDf2hJjnpXjoVBE1ukshxWVAhTgN28kv6iqEbdY7ho37LEJezgpGiBatMWYTAQ",
  "key38": "31H4JwmHoyh7qng7Kx7rXnbo5mUDhUQ9zq8TrtSpbbysY1pw3TC8judFhjbHSiQR9W5XswkUCtQfpkKi7rfUKXim",
  "key39": "oK1F2ZK2EcVUMjcEDgk2pmjsaYe257eExgBzvZk7RNFQJbDh1AAnb6yzyhEPg2D8mHbUwbZrBBMYe5w15PP5q3s",
  "key40": "67bREbqrzuuo6BzHMs8cbSvbkZw39yQy7uVJsk1eRuTQkiQtBZo8sLercuBFAsUGjDaDspHcEuCgcBXf5DRtXUEi",
  "key41": "5DaQsbqRvMtLCzNw78cWC3uQmDA8xZHNjyVJGDVoppsdzwgRTJxS3psucS9shz7vqRQLyDsY2qCX4hruL3LNF7E2",
  "key42": "55HAHmfXkzSNWz1tSjf83nFZrndVeQRGAH7QVDALDJjZ4A3PzB9KaBnTz6qAaMAeDCQURB7134Td4EvoHbrWNsyT",
  "key43": "4zZVCqQ1DKEXc5QRoWbFbBfkiLPFf3QDNuZzPDG7skYQhCXJFrP4hNJtm7vZAFfTXxsLDRQyKPeEsYw3dvVoYRUR",
  "key44": "24seYqtif5MBHSpQ1KgHTVp11x9sTqwpw8s16L9hDYobHMhAr2V3cobjW4ua4nuLDXMAHM8bXAVdL9o8hX6zye9d",
  "key45": "3fxwQhRjvq6kqtJkh4NPwNYncsNT3rn9n163WAxz2D1nCfKMZCWRpLXiN7px4ijor2BJYVxn489x9YH88ZG1SdCH",
  "key46": "3pY1unK8kWBBVBGwhWr8dWoXh6yeRvjuAiTmgd6gYVCsmcqZjJxwuCM2aHcBSdDE9gdAykd97oqwLBjD52cvRpPA",
  "key47": "353hJv6N8MpVbt5SDVPFHrYZ8nq95THJeJ7rAKyAbXrKMemMB1V2tPhLEGBUjP3cCjgmiww7rLH7jGo5YN4u3K9R",
  "key48": "51kHFq1mQ3EXNTqeaTiWQNVTq6ieSqW6VCcKbVHJL8omjtetxvbRa4gyVK1RRAqTydPNENspmEV88UH5BvsB9Vxx"
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
