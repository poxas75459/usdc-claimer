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
    "3dztEUX7LjME8EyYGqKb7HLbzQfswrzt51aiJdgyQfpmLr1mPYYwmCGhMbMF7kGFfgYaXvF2iHWuyCnpeo34hWyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WimkLv5C3WT8TqxWXEkmr8DcYZhK4Qy3zMpTQYCN1u7fjYSEVGLrEAYiXEsD1DUv9Vx7afEX8mnyExbTS8cF8mw",
  "key1": "3rYvG5x3ApGuMGcfpmzZUYXFZ2SwASVQ6bxZ4ojjFTqgfBUa8bJxV5pC6DSdxyFD11UsAtoBTbaFYsgDZiwtA8H4",
  "key2": "5yKrZSeEL7zVLtioabydyzWPb78XegQh8nFukdvGJAnRi2DSoNdGTmWiTkipZK8d8kDchbt3Qbo3JXVpPMEQ11KK",
  "key3": "22SPoW6CZAekSHtmfJDdY8iPkHHnKb2pCtueSccrLotyE6oGibPiUaZtQEie9wMQJhGZ54VpAPQ5hqZfx6b6sGoZ",
  "key4": "4dDUsBfKP1oCWS1iwJxUrL9LJa9AJaxaLjqT2dYm6tzppNSQRvBghrVH7ZYXNtyFarTiribQvSfmiQ1WQavK1PMw",
  "key5": "24wdw9WB73UvKaNVAJFnA5ECs35u1tEEqm4FPVTCq9TH4X1bQHg5fKdSrYfPUpgFtfB21XB89jNTHbcX7sAg5iEG",
  "key6": "3Jo5Men4Vrbs9KW37j9JEwrUtfdJHxbicj7oK2HUpQFaB7YaHkVSDby2sUhH3pmx7CEAtFH9BfKcCA7hZGkwiFxN",
  "key7": "5k7Cwpb1CVB717P1h76SFYFbZdDuPP38eHk836wN9HBob53jQkPDH9QNiJdSU38BwnYUPm33gTUZTpyLQfYwb6kB",
  "key8": "2LVknk2ZagWciEHD6udpZz9CHM9dTMUeWPvi53bEkJeZJf1rvYZXSriB7QTr5yK8q182SiDH3AKuqEmhnNpaoJbf",
  "key9": "5wGbcn7EjEmBAvgEUMUzdL9vN95Si3hPoy3bL3o1yL58HNEDJMpmRaowue4jGjakW7sEtyqnF7wVCtWoqGko39xd",
  "key10": "vFV8tW7PpTNWf3m895ZbafEY9UKmnVpu6KxLLxy8zhSn4Ft3eCgitwMEtsFzhQXuFBaLnJizk2ApxTeaTiFTojc",
  "key11": "35LzRWNeqYa2KZViKwyiw4ogSe1J1wSWjY9zg39ZyaPRxWZUUdcRFXhxzj9fe43XZL1PwyJnNVjbTeUHPQyZJ63B",
  "key12": "5vMm3JHcbWbvwbWjtSctMQENpy87MgNuh4TvDAtGUBYVWG3kSVK76oG1CVseetySbnq5MwUsuBSL2XQ5hGpquC8o",
  "key13": "3FvqsvPLhdpMc2QULAhGyAmvDU7qKwaXeG3Zka85fZjbCg3LgFeNieCkLamzQgv7fwn1QjyXAjYEVitLuQbKLnd3",
  "key14": "4B8HV7511KpXsTrDh1hZkneBBXVNmSm51v95ADiLrB5oPT9gGJAoDxh5NVW7eR4b2GcUdwbSJ9o7ArRnhmih2RuU",
  "key15": "51ea7iujcn65noJ6UPHtT8n2BederTRN8GGdpocmh2gZSxgfMGC2PvYEf2sCytthBVLtfpEHxXSALLaweUJNWxWf",
  "key16": "4wTgyzKsYHAZ6UGvusansMMdo1b4Un6h9ZeH5TFCkxVSRx22HyqcugWdeFDSX85k4NAw8a7ajq4ypU7Tjab9WQtK",
  "key17": "4Ajvkvm1gDEJK3r4KtPoqT3qxV2eehGokFw5TMNjpbLKu4apMRnbacXheYaYeD3Sp9GnRXWrZyg7ij3G2SnMqtUj",
  "key18": "2g9YKgGrA8XkentZy3eDbfwrrFrXs9XZarH6rx1FjayoRRCQUv9mV6jfzRGpa1DvK1exMYpUhofJ8g9sxF3x2Ty7",
  "key19": "2w7gZPH4DkookmpR87RCJmeDYeVHBTrBSVrwH5GoirzE9ccunvAZDY34yXgsDnjECnDdzjzMUXwpLqom2fpCfqNn",
  "key20": "4m5tMGA4cF2g5vaV9SGTrRzrbshoheVVQ5thQfXXd5nUMcY1DxUMHqGPT1hAzzKSqmxU73e2yH52qmNGHubQqE8G",
  "key21": "4aYfRhjAonYHBE177P5WCgp5b4GD2UXqJS3Vdr6TFJcS8F2D2WZzMUeTCDJSqt7EBkKHgjuuSfr8AiyfXkkmZeBV",
  "key22": "ukSLzdta8GFjUvM9cyUpUnvn68bHoTZCXpanh7aCzpB7dtZygeY5vQoZYePHCy9wSLjwKrg1GeVoegmYttHLZQK",
  "key23": "3T5AVxQTjc6RWUDyPXsZj9dcy7THCjU9P2BjXdF44DGjo8ETfXD1ceKy6K4knK5QLJ1J3ujXRXeyRqqrVcJg3oAZ",
  "key24": "4zmHkbNZ4pLf5eY7Wv7raWencgPG9yFAMk5yKFw2mLDCLwpzYcdBdHoeCZXDib4vkiCpsCBJPRyaRudfBKpeErMX",
  "key25": "4EVSc5vMYtJm3qavJMXFB8zskdcdRVHB5FH4dbDouKxFKjZAfWvG2yJT5Snq2exxKwmuZg4T9axrTp6v23fJcuA8",
  "key26": "3qHbWfwF77CViZeQrDzCzresKmRhfZqnRTqr2gSoi3wfqVq55YnNbFRJYFrkS2Fp9H2dPwBeB6gse8mLKgFkANUk",
  "key27": "HhMXdSyVoYGKWkkJUhhj1GAsHm2BCqpGnyTUxgWqzxKJnvTw1FWGiKuBghUzqaRNENX74zPpSg1LFgGCckgWpX8",
  "key28": "5uVG8kzyS6TiNPhaeyPQTxAUK4gheBeZUEr7Z5N43NhMXDF4UPi4QBJUmZht7QXDHKBqsjz8FxCWoNMRYncxRQ5C",
  "key29": "2vjmQ5tXFqQo3gsvvpHrTTvYMg4bCn9kNVxCZFtiHE7o9B7dYFMDmWTv7w2qCL4MMqNfp3PAV5jmYSgnWxH5sV67",
  "key30": "3MmtushXYaK6H2VHeKu1PXKyvHBW7PmxZm3nnWFUXVBo5i9NtTKKHvMTFxv816y2hBMZRqPbrv8MDBeHEHGLJrzQ",
  "key31": "4FtMXcjdbijR8ejxrwA3sXctLU9CzdAxRs33SHsvtfRHd6H11ycDbEJoD43DgFQiLV9h6o31TH1uD3kRaiz3nwT1",
  "key32": "fE1E6mhLHXSFSbyBPX22GcB5FftxWSZT79QRwUMxbC9DKPTPaNF8iymmfijxBS3K5UaU6b3dGQ7uVwVLiPoAxcW",
  "key33": "2Z3Sfdz8LWm5NiWPAreYE6LPexuLqEGtSc2CCbUtzbkNU8qRBh2Jdj7L3LGes4RmGPHx8bY2N72kmwiBT6BTU4wx",
  "key34": "2rFTndz2NTQYgMe3rkgQcB9h5CJR2eXXsJZkCwtkXxb1tBEnaT7FnMLcSwr2DUkeHTiSbhE4voyZbxPEyzYaM25W",
  "key35": "5JpBXTFYEkGoZ5risYLXRkAYaDv13H3q4P43MMgMQgLJp9ska5ztLkW5nKur3M9TTcPRroiTjvQjJcESHEFmZy9Z",
  "key36": "557MCE9jqc9tbXhzxph96tWXDHedDEdUALioJwUzXMsbmKro51LHhMeYPSYHzYVNGC1BvbmhDR6UrJsS4TEwDbBn",
  "key37": "2NGGaRypAh7tz3Ysf3ovNbtPh15By6KSv8gaa7APDjywohTEmwabCkQQ791jLcvp57MkvAZL4LMU3MrPBXTDrdCo",
  "key38": "3YDg4eVcRRtapc5HkpQNp9dwj8jBYrsQeX3Wn6pR6Mg1ywv6n8dW8LamSz4ZBxcSampmK6mYTaBew4GGGYMDYs8j",
  "key39": "56go8b6Ej1eXPe6rb342ve3t8vyBz9G1gG5BkYhvjvaQS8ajgU38EML954Yc9bodnQCK3AkZ35Jbgtfb96zPsTgp",
  "key40": "3Geu1ixzF6hXvNUHBLZTuiukNEQWPujeEZgUL2pFUFiS1YUoL5wVLtRhWwheb4mvuti7m2iiUDS6HBjenVHUtmuA",
  "key41": "24cHMvUGi7razpw4DQu6H2hCyRt6eM8M3Xe89s6wf8SBrRiw6j7oABpb5AsR5U2yHkCrftVrnH4qK81maLvb6gxP",
  "key42": "62Fvm4e5Sw5nzKHx8xosdztZbpmJvHT7RFgp3CsY3wnYoKVt6XRWhGa9jTPsxwsYjCQP7ZMgL6bGjaH24CvCsV2q",
  "key43": "3UuFjyodc6sk9iKou18Q8e5SEPUcmhXXBdNK4Xpyk93VNNkg2SNnqDhFV7GGDeXMDwmF4VgtDqAGcK6GagFc5L4W"
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
