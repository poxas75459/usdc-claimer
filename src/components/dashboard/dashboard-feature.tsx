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
    "4a6ZEV3JwsSrAbhTFMBxh8MFXaCSJi7wMet2d45cXJ54wgVuENoC9mXzAqWzSY9LxdNxntL3i5UzXYz5MFYLuwfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oSXWva9gaFyDskWMhti1yPzCWvUcMj9YfWkHLMzQq5tC3rEhdJxi2M4gFD6NHVKCJwYN9MWmMGPKhAuyhTAobMn",
  "key1": "3BHxYUnbQ8AhfMq97kKYHuyRHsjMDR7vjhSBJu8ETa7aErqhP6zfL5FUvYZX6NQAvrZbZu7KVn1aAt5xA5TtZg7j",
  "key2": "2H6gxrbyWp5Uc8rANXEA4rpVrZyGsbuXnL89hLLyJ68tMTsnhtDaqi6SoB7XeEZ8XV564uQzZorQWjms8ntxxkZD",
  "key3": "642xGn7GA4DfFQwHq1ZKHwzFshfM8NcwkCzLR9dPPXFiNRFwzbuNRSMRAMqbn1DoKsde3B1B4Zo2PrN6sEUkeFAu",
  "key4": "2kFu29Ezq5ikzCB2EGmx9RVxCyG4JEg2J62WtvFZWCAjVA9Wsu4H47YJLsyS4Nvb7CAkt4WFzbminMpfjiCTqUkw",
  "key5": "3ofWFtnRBt3Tfuj2Rho6poMHsCzvAN6uk2uWwLQduhKkKGNcNXM7co13d8K4vvQaEXSucaxncqHHA7myUG6pKALH",
  "key6": "22WYjxmZdrFGKX6yefv489V5hLYEmTKnfxD1MXRrMzA6eNwRxHCvsNYEjicU8kjuVx3BkeubvDvXGiTgGZsjdrdK",
  "key7": "cpmr5FDUTnUkfs4Z5ibCiHbJgzDSEnvYbWxxio5rKQqEFEuLtnsbcpzLcieqEfnov8QwFcdtHiowhukfP1MyGR8",
  "key8": "5Sq6nDbUDTVKkjrZjGDwkYSCRZ4TGcgyXrADYun4TWWP4hB4oYASYrCaVYCVVi9odG6XdnFPuk5CvmyueNSpw22d",
  "key9": "X5udwSQYdAkA3pq5KLGjLjUYU7aU5aUnuZzq7NYxwJoaYiR1tijsDfLnUXhkodLkDhqGw1RgViz56Gwh9dRmmZP",
  "key10": "48tr3UG1Kg5GKG91V3hHpB6KK9MqddR7BMx8C9Xr8d2Khmrz8MkTHuKmK4KKaKNDq7QFJYxvfDY1L81arDiT2YLx",
  "key11": "5sdZMMBMDFqoNTk73wP4kaoJzKcxp2yYHvRpje3jd5TfS6TD14A9dqyHYxif5oSHbC3g5sQyrxgTUq42QhCqG4FF",
  "key12": "3mvfNEjgVh3vJwZWMTcefWk7xUnWuhLR7zwSouUnDZkAe8T4ivbRkACGfhncB1gR7TKyJcX2QHuDEkZkG3Nn6MbB",
  "key13": "2nhBbQ3zoksERW7APJFUXw7dspisjXZYc1HfVoyrs9CT6fCg8cPPDWdTEvBA96msotPpjE2d1A6KG18FpWzXWfiM",
  "key14": "62BeRL2khkbPLeJe1P5MUDW8bxF3CAHfzxCV6LxsFybSF5JyP3rCZdt3LcFuBcoR5G37wTZeqfkFD59NjXUTh3gF",
  "key15": "4vHBJSDqhb57eRPfB66qwmBxz5JkS1p4ayWMF2J4z6TSs7SdA7vKmd4KweUpDWL5jKbGQb6TycDLVMzoFLXAxyPt",
  "key16": "5xnwodAUH1wUtdR22HQJ6Vb9G9rq4PZz5yXGk2LL5bREYXhbfdDMdVFk4kjN8yy2s1Rr8w5pefvi959HLipEPtmZ",
  "key17": "3miMc6VY7Eq6rqnCGrWbSKHR9x1W15SPVdgEVvhyjYkuXs54HaCxCP6M9QcP293ZdNveumLPDMK8z8Rd9MVak5j2",
  "key18": "2cGxwvx1YCpMW4DtqSMRDtpThfvkU13vMCV5gAHZ9wiiaW8YmPNAzzNRoaHCA2AYNMjN1RQV3PmWtWmdtXVdujb7",
  "key19": "5NYEy97Lfysm65RzNNvzLRaZCaDDTjCqtgFEcxxNeApGnF3c8KhhSPnFx4neb6YxDsvnLSUtMrnVkrJJgFZJfTt1",
  "key20": "3SjzgssmdgDEoX8kszpKVoRb9JUaaJHM7GUD44KLmyQ12QuYjszZ3GdXPoxDbsHLsU2p1wsFeogNSKfv7uVWgfy2",
  "key21": "2jXCSu1W9HiUB8ML6VZ6CqZSkqa6saoWZAd9FyPdDfQvwZ6TjDz86QfHu9VKkc4gBAgbkckyDJuX6Sg9TEaJ8rvr",
  "key22": "3Qf5LtCbjkdto9NFR8ceSXrLmg2fT4SHhkeDX5kDKRRY5MFD2SwgnzQoUGavYGnyRe3KntfqVfuvJi6zSUvQddnJ",
  "key23": "4tgQHCombMif3hzKAWM4SMeFeRy7iQ9MP8yfVwSisH99GgqJUDo2K6U3Xer4ekAywpTpAz8Hsv2zigcz9ute6a6G",
  "key24": "2bdNiFUoNqEFm2NZuV86MsY1ubQFNt83RJEdpV9n5MAfoqJVrAq5hp4PnJdNiCd3wquNiHXnPB5ez4m255meeF4x",
  "key25": "UmqNCe9kCjsvumYTxJ3YRZap1UhRj1wQwuJCK5iUx4dESZrZrf88pkxtpEg1Q3CuqPCYthUbvZSA7YPcKqL5vCd",
  "key26": "4EMCZm24J7gZ655ajzV8pv4MDw2UAeVGpxyW85NVhz5oy2s9qCky4S7Pkhig1X2skxQnryXxcU139Qr5LTVzCTSw",
  "key27": "5prjV16etwGWXw7Prq48Dr5a9oT4c4G1YUWuDsSt8cMmtJeBBgDQqLwo6o8D77oZrgpykbrfy4QEXHUUUwm4te41",
  "key28": "5aKEgxUbC8DjCVpvtck89A7KmbGzoxWByYzu2ZNTYsfJ7dUL3xdYa8GnUc4Bfhcmt869mPMWzvQpTHXb7unhbpox",
  "key29": "4ihLnztsjnURGVNh7GR4M8A39cLymg3HxfuZy9xwpo5GuWXer1rYUd79aE2q8vsypy8gaLUxZvK52NHa5DghWQNT",
  "key30": "4kKoHWPbe3C1D5bkoVJVEktN1fuxbLuAdHsBLWd2mavCHBvDKYpjPMMt6k1ZXUFFwjfMaecy3MVL93ZpH6LD5fMS",
  "key31": "4q6TJVbLqF46vi3kTBzZFMKHRMvVt6tc4Fi1KpK483RuyCQdfxmL1mZziDvo22rh4V7ywLFi1PEuyiJBTiteFHcu",
  "key32": "2QCB9mS9WQ7coCafZ8h1wbpV7ECjM16Ds8GkSUGRw7Eomv2a5hdUNR7Dg6VaWiSoM6Pc2Cu6JZxjenB91nhja5SQ",
  "key33": "3nB3KXDDhsJWgTV115KXdzDzaJiiGTrhK63ksKJ3NGBFAJwe8mhCjiSLwvtUuj3QeQbcoKfDAbWTTE9VzSkDsSGu",
  "key34": "vSurHCy1BGey4PMwdSKRtCouRKUTZV29jsXPKEWDks4eY23ara5jEffKpJLM3JoZ63GeTA9rQtkCZJvWqt5mNoh",
  "key35": "32oxmjfiHtuXwvedhvXvURQwSsmStPGSegnfcnU8RpsbN2d6QvbYDRhxNyqBCoE2GeK8SUSaNdtvJbh3hoFCLqcg",
  "key36": "393Yka2qZDDBqdWffKesJSdza2Qe29dKgzWjANFQj3jRjaew173x58vwiFtCXZAr25Ay7MeRvyMb7H3UePH7K5yD",
  "key37": "5cUtNYsDnyxaho1mEY96NM5gLZ42rSPUBL4qDuqUERm6DbV1TVEZxeQ3KixJoE6M6BVTMCgKiRQPLGy47jSn84rP",
  "key38": "4kYdzm7FHcK9kgzSuNnADnPRLPhuMzVWviEZcpLxg2V7dN6CMNByYsUsZj2ruTcL6piiKuq9NS9j8q18HdZNfZE8",
  "key39": "3G7ufPiNEkuBWVfW6Zj87iyLDccZYYJcbQ6uqJa3N1kPf5BMdPAwbGjyLhZnJKNeFW5tmVHR8J4Bj1xWvCRiwTgU",
  "key40": "3pzhWMY7g1tTrnDFPr1hsYrETCrn24Q3uq5K9ha4BuRt2Ti3LqujFfo5bHaCfpJLZ4dyw96xwDMq7ovWVXiX5DMC",
  "key41": "GLAJVPJeXEY9iQyS4qMtUjwtjGunp9WpTesz64oWQXCFaJYd8xh7iXGG12Xf16Z4vrR5zfCsUzFEEnh9LUCgXRp",
  "key42": "3EPzBqHuGMyo1kLEikP8KsGcD6n4Qo98ZPcGpMaMfxQW4GLMXKws7WeisHfaUTSzvaseR7XuckNpwcxyR2c5czDm",
  "key43": "27V7oBjsWBVXtdvLycCju5MFvfBXzK83ZgCLJDbNBP5FDGTRtcWf1qMHPF1FxyAWAycYLKaPgTTwmEx84Kdut4Z9",
  "key44": "5BdLadBL42DABCPFfAYdMvZj63HMb4rLkqyNbVuBBGgT2EiV66n6WFn7SfmVCxHm6xZgJkuHAJbxwb38fejkkgxD"
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
