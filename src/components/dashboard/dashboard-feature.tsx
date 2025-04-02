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
    "32mNyDwRojgQkTdhrDoHx4mDVy3xbSGTuQDvAZKG7hfdzAxQXZkfYah5L72Qjo7tUruBxHuiqayYotGAzvEpbaPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TA1AxsCUX3QGzrkwpVx8GvBjx7pwjr963fz9HU4JqiZACiuNhzehVxbjyJCeuWKqKiA9SfAGkyLBdW58BqoM6AY",
  "key1": "2eesr6bdeSTEp9Dh9i5mEiokkmwdjDvWbbGyKuL6TRHCogMu5dLo628W6XrhauJyA9Xy4UwSBjJZ4YwTkdZ5B3X7",
  "key2": "5ppN5NuYqqyjkK6X1Fm9YMqNNvpfKAPSZ5EEm8yRv36VQgW4tZQVPYBNJvmMzSfaNcx3pSWUg68gkj2D9xa4A259",
  "key3": "3kb1r2KYc91DARFfMkgWvsDM1gQGx2NQDTmBXjL48ZvjZjmQsiij2Y4wZLasWq2itswGNxajhoVfXNmcgiYbbVRC",
  "key4": "4SfNDA7GV6WjasEfc2JkacJz3nupqN5G54mFLpef2kFgKMM89zmyxRmdHdu3L98Vq8q1w8NxX2S3TUhZqCAn8pBc",
  "key5": "KQ4jv4CuEZkDaaeHkkF5g4sXeDm9oDBn9xGyhTAayX43EiH3X5icy5edPoNCdPGPbY3pVvYnStnkcg4GtgAM5X1",
  "key6": "5kreveJJVMdD61rxx5EG29fLxneBnVfzo4MPWVFMpuEFMQJkE8T18TSJhaAb79ew31Tg9pBQaZ5uwesJJQyuuowA",
  "key7": "54mw27ZQb9ZC2wAY6Ddnfw1er2EwXHnJn9k57Z43Y4maJqTq3frF5eGwtdz5aZf59QgmyXtW9kkVE7a9Vq1pcB2C",
  "key8": "4d8iSTfCkoENxqyZEK12eWAJ54QDET47eyvyfHrUduM6gHfb8Pqv6UX4cHqrVCwKjqknm5pD7LPpBCCcxm8vWPEH",
  "key9": "658TNw5qiQMnsay5s38Pdh4jGvTEWmDgdPLRn4vrqMyPhRGKZ3LPmqzNHD3ZZyqaXMq5LpQJzUXqpcMH2ZW32nB7",
  "key10": "28QeRWrUcUi11yFbbisR1WxvA2KkuXSNW4bLAVFSVVtfgLeVGCYyaUftDgRpNZ4oHp2meCWXEAxazK4PwtrJTmDv",
  "key11": "5Rmvsvdb4hkvmgaW872RaQQSwb4qi2rBjTcWDvjQ38GVSJibPoQB8KDZvqzi4NH2dh5jNe3R856NECZwVZwcobBL",
  "key12": "2P3Wap1cQHyfpVFM4aHrKwk9KaB4XEjn3g58V43reHbpXtz84W7QkkbbewDRJnnEzrCM2jusYjY7adyGMfRNZZT6",
  "key13": "3mW7RbkQnBD9PpUznerNUuxzSzmu2g8gyHzCSCCp5yMQzKVaYiEdv2MSecc3uGhJp8zG2tuzH6778ubFm2w8tF7x",
  "key14": "5FM6fZdsf2n9yFmDuosGCnh6DVscFWJ1TkyPz3XMbrASY3NBo4Yn2zrE9DkjmU5radEpchboGWa6ozDtymGjjono",
  "key15": "3EjDFAywv9G22NWUVXF9PgJ9zmXyrPtMLpWti1PDekt9WfeGv5sYi8LfxXcbbpAKPwPofLamSRnZ8xmrGu8D2XFf",
  "key16": "UsGR9eGuNADGGQKNntVEX4ShkZ43cvULAEQCcpufcjFJt9sZJAvBzr2yDoNVbGRi1ShQBUZ2nWUbmNDEGavi17x",
  "key17": "5NtRfxCCEWpn9WDdFTKZYaTXFnN6vGNJX1VEhZi5EqF8N8ELXuiPzSEGw9apG5u8tQWvmwTyz8PcaZg7oDhY65DP",
  "key18": "2PdpNHWegbqKDwZQzswJbSYNj7e1pgP6WAVtsG2EbgEmvCJkLPj4AaX2FLHhtA9M4fQjvNe9XuBZPvc33rjAYjo2",
  "key19": "5GWaxVq3y6AyBLvp3mTcZrytYNmr1Tg3oHVBXrpo76pf7axY895hrCJDBcr4d9M78aeBENMdZyZP3q3bPo42rFfK",
  "key20": "3WNJ8Nqg4pMKL23vdJLc9ZiiCsJSmfLujtYACDb6MF9osY63zUdPW2HeFx9GwigY24hs5fsBVogkcbmJ95DeSENM",
  "key21": "iDY7ihWgdk7TRMvpECZkAaNZCLeiktkaWniuSGz2Um67K4TcxjHibUgFoTbhyBFFpVcQurwJkNXrHxr5TsMDxnw",
  "key22": "5cTz6nPXNbUN8erVUXqULvxFWHYVC6hCZurvCesg5jGSf7y8ACxQ4NDzi4xb4fw3Lcf93bog5vc7KkXk7eFsuQdM",
  "key23": "2r3GbaS4ED9TAEPjF2ZHiD7vFHURLC2cPNUiqbymjvUvhZUUWQog9VPDiADyXF8YALxWboK5so1PVvePy1Q5Mzjp",
  "key24": "x5gwTrdtGuQXPQ2Pt5913tTCJscG1qB8EMcJ7SM41i94jmjGsupDpEqz4vaRJxYNXCxk1ywM5Ranh6zkREyMeS1",
  "key25": "46PZ2dBxeaSe2gt7dk3NJqchnjEw5iyNbKeEJNS2imoAzb959naLxBj3VjJ9R3RpfYqjvJYfsxQeSHEvXtAytzaf",
  "key26": "4dLZ9qv2NZUgW4pTbKFmx74rVeaifQQckKjmU2X1APXE27jC15mEetaKkXtVBqmGhGNpP9WeePHgJgiqyqWGWv8m",
  "key27": "2YWXGeeQedxAgLq1b8tkbSn5zZMXLc4gsjfuUT4uxN9VKP786zyf1mtRhPFocgvQrouk23sztW49eqMHJfrwEtTd",
  "key28": "2chmZ4qNY492XZ1ijTS6AhM2u4y1QFVqQj6izvVzdw7fapBJmdr8ayLDV4cpagQYHE2K6oKYGrKcEBoXLNteGkWY",
  "key29": "417enNiStcfKccb6aozSnykgv1LUrXjcwnqFqVodtVsiDYSETsiDLBLNgLC5U8zbZiAYUVEbDrkTvMVTPue4yzzK",
  "key30": "5Ug8FeohKQ22shxvrDjoTT4d482DTH7oyvd9SgvrBYZgsSTg2W1SvZxt59NuCyo9doipdggGftUStsWuDL9zz5kx",
  "key31": "4onydntq2hKh6SdfSGWcE5CoSX3nBsvG1uQHLV4wewshEURJvoRotvvKWpeRo2egzDG4zfPTBCH6zbJhmXVXnwmn",
  "key32": "xVZ3SGcvGGVW97xigvGXxktC6WKoLqxay3QPxT51tUXtEJPB4M1T78ox8vU9LjgKUWcWoMNEk3pRqavjbSXoXdc",
  "key33": "cjw3b36vdVvtpykF3H7u3M2adYE7sS7TKBB8qr61RxHVyQpFYq3T3zt1JvBANP6p72WZSyfpqtFgAMFRDVJbeNi",
  "key34": "ZXmw581zbRisu1bNs6y8pq8NbzMyWcNzq7ramZmgLDcfWuZm2yQ5tVngKFgE1dZFdPbgkT3DUecTSMV5csBbSmL",
  "key35": "22JRV8UMsAEkUynFrfEJ5JQvaGc4FqhDarueyNxoU2ajTFVDez2beisgc4gPe1rx14kpkv2d3feVtf6j93t8TJco",
  "key36": "4YjQTBRGWfsRXa2yorQemEFLjA3qNM6jCixxiUGsXqNTkEh2ToF1tet99vE57CCFB7Q8BBjT6X8HuAJXK7PSFuWw",
  "key37": "4E8KYTiWaBFMKMswxNRHXTBdLx79DDg7sK6c3FUDHfvsL1PbdPLff21hUVcm7u95Nyv3H2hBHsEFKer6QWChB4xq",
  "key38": "tYt2o98oMB4eZzeCvBshCRrMApyVgMzfdjWh9p1PosLFTKRm2zsEWquT7X5EcvmLhfpAer7FExnDDAPPXEW3BjT",
  "key39": "5Lh3t8MqXebK35ehQR8hiEDnQ2ydQxSK6inRTskbbQoiUBEToShBdHw8JNjm53anZ6W6ZBXVsoEczTkQEzxq94xe",
  "key40": "wqicTg8g1p99xWQKQpH23xG5jhYdkn85xPDeMABWsp4jcMvczvotcsnwyx3bFVaFAe2QvKv8P18RA3BKidcwrdV",
  "key41": "3RTPARoAqTxgc2y9TjCGDSv1henHJQuHuNefRCkBb2itoWsxqmLpehk24AKfuG64PjAiDvq1Urs5X3RVszM8L3bu"
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
