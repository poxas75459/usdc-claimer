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
    "36fJ8T1XevPu41ARTqFDc6NZm45SjJbaWgvtDKTHZ1wLQ1frtRj9D64MTKTx25brpRBRSMyqYyK3PPuZc83q7uJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mQr74XKDYicWHfVDe4ZeTiZc8xbq5uPytqFxVpVKgAEeV2uzg684dLoc23i6ySduAoPoQf3hyo27xdQBikRLvWq",
  "key1": "3WB2s9BSP5BQ1Z1Q3r3xLojoHUZBkMAmy3oKzJDKWeZKXejGfZbJkyEZoPUDz1HjmPdyJuh2Yq84QD2PriVACEy7",
  "key2": "65mxGDxu8oirEWe7Efx85TBiqDn2rDr3mbzLkXPs9SsJQ5PxReHjvF3vUYnmHci8RRUxpT5mSM2avsivz9omhx7x",
  "key3": "63Bfon9bgtFY5k7oeT5Xc5ZeGQFFBPpemXs5m5ktq9ccWMBJvAHRvg3aLEPduMeW77MywHv2rrBxGw52DiAVQMET",
  "key4": "2eRhD5ymfhn4LDyKsGkwR2Q4TRaaz7GY6JXvRzK5Lzu2gNWevj6ucHiN3QqHuX8RfuDzUvdnFt8NYe4NpB3WUc32",
  "key5": "hUU4H2kuSrosBRX3d2xYqVcT8KFUvUzFuYcH5b6tUATkuJLqWHWLmpDRCxjNBMw1BjSAUCJWKCcbscnxPiecMJ5",
  "key6": "3DKWpKxmw3BqerjSfd8x77qj2ZdAoTi4UZXAhThVHceRNswXi4W9McD7Mo8vtVzfd4z2DigyhZWwcrvMya4iYWU8",
  "key7": "49KQEVUFpch5r1zif8YENN5N7EVuZjtUCoXC3R8Jocw3Vy5FpWfQpyMzNohxpN6inNCsrTf22AKsBB5zAgwSM5AX",
  "key8": "2m12TKPeBSWyHwn3L4UH7TRqnYyyhSoCoSS6fg36v7x6RCdduMFVk7hxYihy3JoTRAnGmC8FXoSPSmjFRq88gvVp",
  "key9": "2AHXb3mj9h6T9LjktmR1E7azfaUHzZPJCqNz6j5kmYWcQjT16Fnbju3XjDigt7tuc9d9cxcQAv1Zksy63moHirV9",
  "key10": "Fr5tUpAPqwHDHgwdC7D9aceicY5HBc7wfQoM4kQNY76wBk98TDwyWMvydchXERhNr8rWfHTuUfnGpX5DWviAVsN",
  "key11": "43w76fGRZiJhBJTML5GmqYUC9Haaq7jKgq8tj2PQXHeJXqDe22DMHcbRHT5a11uur1p6VdfPg1xkoYDgfnMty29z",
  "key12": "2BpLbAuA1qBVE1dP4cd7y3vSvRTPBHDEEFUbN6t3D15hVkxqXsF6Xk8Wze8pVX153t1Lv3bWTq5qG1DddHSxDmuR",
  "key13": "39NmsPRSRbtPLPtj1kU7B1578ukQBhUk8Qxtz12RBe7fYwsjfCYDnQCV2FfZkq2Ry6WUJJJopEQYKfqDnKKxgAt5",
  "key14": "2CUBXeGRAGNtcBtefX7miAYToj9femzKSdtXgY64zgxaxn2o5rYLWTdmMwScg6LkbRR26x5tzL5i3t5UJS5Si2Af",
  "key15": "3GdM1vgELTPUp1pj159HUyjXBoK1re9m1hvHFh1AY3WmAPPLEL89rb2ubBjXxT4p4K6zabdCZJf1y8jvXjKMX64d",
  "key16": "23uL5Yg7gEBxJKv6gXd7ZWPgaxMrRVNLmgwUZA4QUzwPbeC4AzYQDVyez919gVHZiBtjudS87RAER5TS6h96enQa",
  "key17": "3nZZefjz7AyMGujxb9W6cs45y3hcGzT86ZWtufKX3Hz3X5QVCvqsXB724ETDqBKZwNp6au5iwtYRM7QzHniLdTBR",
  "key18": "3ZoEicZ1sLCa6kNkaYW9Ng22BEvs8ndsNmiAHeF6mTxifR2ptdtNKdp4iRDzT2a7seDnshbtv74KvErAi7wNX1tM",
  "key19": "3pT145tUwirCZ5wdqxthSd9EYV9ADMKKK5dmbHbPafLQhjy8vXiMtR9KMV23q9bjGftXp5qUBF3chehoBUECJuYD",
  "key20": "pbfPNXmsFPKNHt3G8pSawvgKYpXrbhH3Uww9nERJiR9BZPRT17dG5hmK3hqngz2RDWdpDqrEYvxDTd5FKGWA8Ux",
  "key21": "3caTsBbemLTfQc8rx7KQtutEMYYcSQLiMPMTtYCJsyHDsExeT2vUdecwu7xPQUmRwrriba9wiD4Ye8EUZ5YFVSLR",
  "key22": "4URxuKadKaWbcjANmmBFaWrPCZaVYtubGDe3SvMs29de7BZ4B3y5kFopoMHQ2Tqks1tZqBCghShi1PWVLf4jUTA",
  "key23": "YPE6Mpp8WRmchaDxEyNfUMjZanVve6TJSQ2frD2DYC98rvj4zzwrNVVzMriJVGAWd4MZwaykSVcJK1CKmmjy6aN",
  "key24": "25dLFjbhCx2Dn2NmiPVo5Wgf5wgaBVSQm4Uft57fmSaK9HJfX6wJ7o3arHyauR8u9m2QvAqAxXf6DCFrUjyLXemd",
  "key25": "2qFxkzduMt1mbWeR58XNusE8CzwVbRPq8wfx2bJLepsBa8kCpTZGXnAMRpYpQAxrMnzYn8BoQEYWKbWzroW1eBoi",
  "key26": "3rvDVuRMKzD2QxSofQctCQinVruPe39bGVBPAzmFHyGfMqrAcBGtXtTQvk1xramWmgombya3WyQLsZJ3WKPzW1w",
  "key27": "3nuW1tM7eQ6ryFhCcHMTDAnZLj4T6z7txDd8yJsgs5eCzaSSRkb2XLKvudZpHBqSzduBnZzmUwSbLSEwvnzTR42C",
  "key28": "4ZceHHb4Ch9p4zsU6RnoeyqWvorzWCgaKvo2UN9fyxfkA1PXgPgULPTTegvD6EayBALM1n3sAejx73yKyQ3E7EPV",
  "key29": "QWKe8tzijjFgfXE1QH1ByoRKCoZD7JEXC1YMt1fcXHa3A534Yv2F94cKFR5rpcG3Gs1GWnVwUGm2QeSVkG13MAA",
  "key30": "5anLbjyjzu5vrUky4VTEE4Ww24sgHZPB2xr5abDK8gf4VZjMHFZ3p2wqgErDu5npZi9K2GpGqEGH6U4kMZ7zAxUW",
  "key31": "4AVo2ypUBfKx6rFPdGA5RwjQFtJCN88FZYVELGu4D8JgG2JmiA7C5BnCX7pVs2pMMzEpYg4WLnB8tn24B5nAHoSp",
  "key32": "3K47q5fiaXTC1omEyCe8nYyHuq14c3t1XRyodrstg6hgVnkZX4GWjSCgVteWmujFN4rvFZaRSUsRnSSYWDZ4Ys2N",
  "key33": "3fN18abcv6A35gG1cGmDBLWzHhm9VEesh6QuRC6vQaG6badgUTqp3dSs52BDVRwjyfAQ9go3RRJWy1JTgy9c4TRK",
  "key34": "3Lk4rE3XCTfUG9xGCQZP2Xs9j7Jdx4r8Wfc4fbVJXNGfYEw4Q57cD6MzL3w3XDEXHJrU35N6t1yLWDmiTpGgPg1b",
  "key35": "3N4tB16tN6TAiFrMiy9WEwVmwjXgnEqFLrxXt1tBBrWuxgywRsCHujybeTAywjAqqaEfzuRTtfjydB1jTRoh4pQC",
  "key36": "23XHJhkyWMAWBiV1pwHjh32MWXNfjJ7JyBdwibm4HLh3ucdvnnJg7mHTo3uqw8dbUz6ELqEDqSmsbd9LWw3TM9vL",
  "key37": "5kfLj3QhXPACWe7eVQadJTC5HAJm4enqtfGCrpMTBrKKkLpVT1SZfCKSy7hU1ibxFU8wjhm4dsYyxSiiekqozaYT",
  "key38": "4ib4UT55ki9FyShhpq78pmCesK4jLi5ZWEcfTQf5uw27r4ShuEkxKa1jbDhVGnsCmvMLmdypDmxi51dbHZwA58An",
  "key39": "5R6r7Js3QqbujV7JJmsdwfBP1F26xABa5tcV31koDoA6DQbf4MswLw7xobSRiQaMjmtgFiEgExX7BjRTMzPAPYD5",
  "key40": "5DJVCQr65yydvYGHdcJhwRyCDaPK3eHMiQpsMVwJeaf4VXPVVweBNU9Zi5zxWpzJ2sWq9M3SnGG55t5svAmmxu5L",
  "key41": "2zLcPfuWcjXbYQ6Hgd7mE8sP59GZ2QQ8Szew7AR3swxYLArSmBHYKLx2yjVFKDsksVJSSKHCW94xaKPWHrHKfEAG",
  "key42": "62HCTdSxMKGK1wE9nv1yT54d1tXoTebPZykJWaWTU5hriHeBUSU8FzjZjhM1nx3pqvu4kHFc6Sp9jyT3zD8GQ6Em",
  "key43": "ACqVYV1TvSdnCxxurUCQZhdTjtkJRfWmAah4kotNM5nN6xyrXWmiKbJdP9ZLRxyZgo3sUf1g5nwrcjzwMr4okXr"
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
