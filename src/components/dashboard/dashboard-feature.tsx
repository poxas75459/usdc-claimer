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
    "cE6iokGmLqVRNApfrrYg6WC2QGA3cVTaCymwgBfqkMbqZoVADuBM5JYX8NbJmfU4rm1DtbNGitBZjEwx6j6jYrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ykcrkHr2cNteENNdNsLyrXsRLCwVZiQnhe6srCtYQ1PjQ12PePA5Ys9fHPzQJ7Lm9vGjmj6kxDKSkhvgryeAQ93",
  "key1": "3xoDK3tbio5LdUwZKTtmD83czv1jpEtwqbuRWRuBzV28QNEKS4JXbjtqAzf7d16Tk28TCx7APUYPVqSaesaw5Zmt",
  "key2": "3NDdDHAK6MHkpYKMPEsVxLnsvAqToLT1CMriUZmQiyXtUuhaQzR5HYMqF5aC5MgPyqEgqpoLM3vFRJkTkADQYR2Q",
  "key3": "jrJNoCapyL5W9V7VDZn9hJ9PrwcycRDBCrYpn1rSexaGM22zMUXdmNTUMX6X3vsqydxqXfeQzVvZMGozDfABLMY",
  "key4": "nkUUmotXX2eSYbJi6h94p9H7x5X34p5ekDcWq12tP68A2b37PkzeBcAiiMQ4VZKVDNBuyXWZhmnSXpzb2smQXmx",
  "key5": "4Sc5kRhfnyHGvB7DvG9k2ycMxnJpuQcjDbEFBJbSiE66GJ5YuWS6J7nKAuqmYs5tz2tV9PnM893DSxGCvvEQHvk3",
  "key6": "2w18ibLy7TamjipJpoCV2xfBCtXwExNqjtSJrg8k8MZP3mTjLaRrern1ASCF1JKTQ7JHgsDSZXYbh8t6dTK8gjsC",
  "key7": "4SdkvoWamzgpujPf3rG8xbrzKnhHv56SAxeYcEH7vqqWMLqMvHsTWLCg4x4BK6FgVnyJQZEjJSzXf2UWG7kMqdUZ",
  "key8": "2synZjDWRWrSeTHorXWegoeHpJMnp1ko1kZ6v3kUR5nb7vwh8sM5toX736amuXLZTvhUdPxJP8GRJ3pvPoFsQDrm",
  "key9": "3v2y1LHEFmWw6dGVLAJ3xWVg5uC6qpzqi8ynjVg37E33QVgGmgBRDvWM2C3wu6UVsK4MELjAfTbRvNVznRbj2HM3",
  "key10": "3gVezjBGjy7oLD6JGsVopHFyVcdpyUGjiYPekyu6Q7aY3HkDRoTUBY6d9M685WXnnToMSLsDYvRLjx7cRGkhQT12",
  "key11": "5FA2nXE6VZnZo6jqQuAwgR37Du2rbyqYZjjTcz3oxxK3ngXFX5WrLxjhva4P7ED9Zqupm5BRZJ4oDfoXvdYnSp7d",
  "key12": "3F9nV7Ety2STTjb25sLNnJJ5ZG7D7HcpBWzm9PnTQesE4bnQFRrS2MXsNNckN6JE5CTeScfCGg6b73BQcmULKRY4",
  "key13": "3YsnZW6pEUNVcAyS9orAWc1UVaQnbFN3wAi9eqg4dE8FxFzJBcv5hUdq36fpngMYAh6KR5faCwijwSnkHijviVaN",
  "key14": "35ZatAhU4swQ5ifGiXcjbiTHHeBxH8MCqgL3upvmcXmyfTEs9HJ1nG76o7k8fSz6PJZVZz48QCGVDuQhLnMZSVer",
  "key15": "BDgsjVfXfd6dehaZW3vT43xyt3fdk7gqu2GWczY9mQmaFGnFBjC4mcoJbGW6G597hB3vFo8DEBrXq3dWL4XQtpW",
  "key16": "5A2TtVtJRCeTrJE6K4P9nd2BBewHQD4pj5HFfh9bDfzh3peiJxNcRVSaGkpP8GPxG35qXcNGSxvj7s55wJCW4CS4",
  "key17": "cSVLsYEkt5F8S3CcCoRQr1dJz6to7XEqpLtk8cWHY2xRsZi3L4B3rbMSeL4QKaoZveo1YbR6t7TTgwbufbZDbJC",
  "key18": "Zm8XxySbweXpPVzAgCgGBTx7be2P7LEMXeJaneD7brwiwzg2pA4RQ7Jr8tqcG9X91tZSGcLXGhUpina1vfjr7SJ",
  "key19": "3aAvwA4NooQwmtqwoEhBsP5ftRN7CqEDw2oQT6znKty61DazAvr7sHpbR4nYQRPnHAtB3DH75B8heJ2dy4ybDZ23",
  "key20": "2x9XyAX7Acx4GWT3cXkt359rRCnZLHAokW7LiPg91kF4FGusqfx3NDLvfLBPLQVeeipfvDGu6Ef8tqEFmEjjaFHu",
  "key21": "3vXHX9gZf35qNB7k9wDRAcyc8tRXUkWkPZUTauRi7aCwwRCAfyiuqQ8yVq9f6bx9LcEP6ggkvEkcdmQ5sFCqT7rA",
  "key22": "3NVzB9B3j77gZDrEcXh2AWvSgqK4LjFREwBzKyhxrqb9YDBd6ArPqNB2DJUuwn7fx3dZdX6DEGxbnh59eDPdChG2",
  "key23": "NriJN9YQFuSR2SXPs78dA3o7LhR4g1fK3txgTTC4sJtj9KR62qSMkFB1wiv2QkVTSPmYbwyAhNnBa2Er3SW6NnJ",
  "key24": "5RgAisxBBSoysDqCkn3Z2AkcYDaFbYnZRdwfisiHWShMbEmf5yfq9aYvDNAWzkfB8AnH7bvQ261h5799Mx9PufEK",
  "key25": "5rxA8JcaYHr45GbhRNA8ESQ46oGSivz35ynuMDkGFVx4Dd4przLBtTtXeVnAQsZkFeVAhkSvPqZL7XKohudohMA4",
  "key26": "B9QCPZPcGd9fRgTVyHN8KCztR2NbXvkeFcWL7PSWoEBy1SkhpZUhmy4BQyTCaWk26NmPXGfXHZVo2LiECxQGtQL",
  "key27": "3wu53aqz9PescRPSdWZzmq4e61PAgHPVfeETeVbTVAzk53896tXAquLLMnMaMd79nqRXndV2zzKxu24z9FizX9cD",
  "key28": "Ds8pTrhC8t5Ab8FfQDSyjzc5yE5poKkqDmGpSnb5ZfmWhXcgBctS1fAc7D9DLCQFdxx4MfP8gB2o7hiTyAc6JG7",
  "key29": "5efMbYu7sTrRR3CFS6P22cpkZvTt2R6ES7oALBU8WSNTAojka8AjBmmPr4J8iGsggj3rrstippgt7sGduG4rHnES",
  "key30": "2F55WoSEWZXtsCMNW7NU2KrjejFFJQ3Fn6dYZuKmPHRSEPCGnfXpJCWMzUi7XTYKhag63v4GHQcDPFjKGpr1tVAD",
  "key31": "4QadgHsdYc9p1KXZpSnmiWXPdcvT2Gpk94kzM9GWn5r4oeAwTj2BFnn49ine3EamMP7k8rcSvabWSg9xcg3dC1q",
  "key32": "47QceE4MYA8SNQxCk5jQaq4CmBXyXqixTRzSaVWYHLq4Ub1gnEjPQVNMNARbH1jkLgiSbF2WM7mcoGaEcN7Fgfnj",
  "key33": "2wrtYrS8bkDR5oivWJYyua8BU7aH8AoJVLcoSbHQgpYS3Gpx6dcsRSrDt2PWeEYNijUjan5oBiCLGaQAZmVG8zV2",
  "key34": "2VYCJEQiEV44e3ACdbbQRvtaKcVhiuUaXaJA6nN8pGxg3zW9NLr4BYH699FfP7VCNdy9PCWJf3KFAsDDyZfviYFu",
  "key35": "3H18LhrkEHPTUoyS8fVYNNrRnn31Fj1E3YdUeJcBkuh6mECcDiSfZVZY9XSdZ71jvBTtJQBhpfKhJMq23rMJqnCX",
  "key36": "4yV78VrZQCK3vqTNRMgMJP43m9GrCZK3StAt6W9hF91VL3FgVMsiUivT6Nc83FH1P1i9bk7KRr57r4ZFA5RBNumm",
  "key37": "5vEhNVycSpijTsNho32akrsEEp6qaLPQwRu1ha88dSEPrUKYrMALUDZsGRTjFx3jy14V4w8rdwhtfQsBEaVur6XX",
  "key38": "49WHZQqmDHHj7eidBpxd8w21HQXuhmmQGTr8pU5xWFsbAS3jG7wxg2KU6VjUXraNUcCMm5QLEmNiPbeWdTduQNJ9",
  "key39": "33tRZ6fMB7t6vRFzdgsi3Yh8BmtZjw72JQVi4VhoyVwYUtgFy7MarfpQtWc3Euoz4xDYG9stRu1UUc7N69yGJbT4",
  "key40": "2UPKohui8sJEcDGegUJW8zWqKsuiW7HjweY6p619Dhb1HG2x5zmrq7574zSK7Tbh7f3GiWQikyzSfwyGRft1dJUN",
  "key41": "5zAF9LaGRVjX3bdQseP88hrjctdg2wtqsufbPzmWHKvmV7q1PkaNL12tuFi998LCwVpaNVwfvEcNMXrbeUqfTQm4",
  "key42": "zHRxLi64YUfdJ3ZowdYE85Q8fwJKHji2EeUsu5YaGXZE3Y1JyzvjaNckqXcQRxosHyvi5h98st8ca9ujdQi5LtV",
  "key43": "3cCuNcvRuStNM1apJgd4zr3PEHTqeCuaZ5R6ULeYkzsf6sJgvhjkaWBurDUMK8Bcs4TjFfCGjBcPdMcTeDUFH4p7",
  "key44": "2X1SPjXNCJnvAVEMY4GVgc61JfbTrJGDwkEytHxS4LiLPhC9dQQ99vRAHrm5oHZ34bfjWNDTQg7171LhZDEJPX95",
  "key45": "2hcBX5cn1c39W5R7KkUHRYr4uCh3AN8prRTY55bwyNGkxnA6iyiDGG7oNREdwgsFETvyUSQDLx6veLDi9uo9oTBL",
  "key46": "3ahXB6gC13yMyVGkyGq8Gth6MXvpqNw7SR6hittishF7aU1wH8wEa41toqZXqEuKWjfh243BNhA6TdXkMbKR9hfY",
  "key47": "fQ1e85zMjRNswK1nK5eyHBnCHYQEKqV8MkNw16MrZM7by4a3NYn59aWgvYCyzRHKokzn5FbDUKuAXU9VxkQsTKT",
  "key48": "3mbRemCFb58WyKm1yfMANEUfK13ywMExvcDCQGwiKd4dzPTd6vaV1QKMXXXeTpZqeLorL1TouysyC8g5MYngfvNZ",
  "key49": "2iqKJgLpYUU7m92jT5DCLJsVUdWwtdjkEgauYYb33nA2xzKoCDpPvwgfm9VZYuRix3jPDNpC7X9GZB2UD6rEnXgC"
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
