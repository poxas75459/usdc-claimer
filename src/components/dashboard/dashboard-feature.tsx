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
    "5CgjtSEQLPKvq1nhmekhPUcRapAef6Vdze2QnZJ6kgh8t4ULAmz6gYLHL2VfGdhnJQY22EEVdYpFxY61q2eVTPs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59jcrRHw1TXzkHDxs3DoAvrSTp8xPu3oBaw7kTfveLTUquMpiFZnDCqiZn6QN8Q97cYnDPHRRwMKeZ6DpNMMv3Sw",
  "key1": "2VcK65K3J42jfop36qvzPiBe4WRy3xdZPsJSddKT6KY28MeZguHAaLvhGPzKPVA4eTJ9j9uXNRWVWDYDwodwX3Pk",
  "key2": "26tHjoS9vtLge2QsaRostVoxXp1GNH7SxPjQPwsjGYDYXSymB7NJEFP1cE7G2mmJKriTDGLHcDoV1D5CLmqqXGPX",
  "key3": "4oPNwA6ToYygYjWypUKnGxFh4831ct5brfcMeqa8aXc5RYNcZi5cCCcHtJ3bRtCtXgGPY6AB415sYzyS2wb1LXEV",
  "key4": "5MkmMqWAPvphi6SbKWuWkW1qvXBxPCjJZi5ABVJ9KmHSA3tNKjLrq3ZLiYexJhGAMrSSpxLTZoads2PqiHP8dG5C",
  "key5": "3u56Woiay2xtd7JwZK7BHuxtxrCeQnTiQMvkwYGnJz1ME2iiF9gtKNiwSk8x7hV9W4Eq5vcA7XuCzd4fASS7fxX3",
  "key6": "XMQZoZC2xYBVTMFCoYjEghrxdvUhQcsLuXaQfmJbUwjWxUVTMRqDHXgLwkvss7Sz7iU7pVPf91XuamPrM8hZubN",
  "key7": "32Wsw5as39BCmdNwitJ2uGMwJkYYA7NbeSG7gPPiy3JwXDk9KCYuHxJj1as2QLmcXQJ7poZLvSWdGwamUKRfSWND",
  "key8": "3xw6UHD6cAX5n95JWNvLnxiCWZPmLq2jMKP6Jd6HwTgYDK3phgHe82LwY1Jp5cYfh9aDMCSraAaKYezyWZTerLK",
  "key9": "34Y7t4SNyyfV1pdZ2MuAoW2bdBCY2Tdy7frKFFYSsZ6a6omAJjmsPmrL3Yn8QGKfRAp4woc7WMpQARSw8t3HzGdM",
  "key10": "3XA2wuatYhAg5ewpZe5RnFhLZmMoVpmaATmiUNhzSbqbb6NVkCbiRX5hQ2dVHTyrv6ukW2Cia2hWjGLTFgm1r846",
  "key11": "3aEDAEnr2VNmoTgWxE6Mdgyr5rMAvbAgWy8EaenKhVYdeBvjJsQyP2WH8tEWwaXMZCjwL9vFqRwJP4FWbmGcZbhm",
  "key12": "4RYc1TtPs3G8KM5bVrCkrNJA3x46Djg7ViiixWTwAbkgMJN5UDHVWf5VxYScT5UcLscHXH2iUWrDLS9WABUy7xds",
  "key13": "3pBiLJspU1awhFf2rCeHMhy5vT5AxrqYRBxzdsdvhr34XbEYJ19DW3cyvfa7j4ut7nx98MChtpCjRsWzejsh3hKT",
  "key14": "48aem1r3boHpxSCQVXdvoD47FNF8GUmu93wW4RjQtSxGBpYEBbZu9xTuKEytMhTeBuEXfPBGnR9cVCmXR8hkYhsK",
  "key15": "67fNxv8vGxEHbPMQzmzG6NwB9rsoVPAS7UWNiV1kG6VPpd7TBcwge7YfB1CpJ2bazCpVTdZZUMmoYkq36iuAxJpR",
  "key16": "3sM2LhAeQDVymJeFQEg75wruqLuwRGvU8qc96oVGMPrUF1YAqDRZatKFd8ernoBRvzF7HvQUKi5Btejsv1Jy2P7T",
  "key17": "2gGXddk9Gz41TReDV5FWFapdVHBqCvruMeZAVhQx4fDt2GdnbF8KfRysHNZGNyFEbwpUZ3p8QvZYwLVohxL35V7e",
  "key18": "4YTEsXNSJGNsJasKi8PbuSGnneL8LQQkebwQe41SsQ96wM1nzY6Xagz79sk8dvxpj5HaqaCF52gDxqYXPijDyudL",
  "key19": "5XSR5rZBqqGj3ryAsPo6z9UHuzXXqQEQSnK7NErHUoueepXHyvZah6v39f7YpgMqjoqhyieDTdhoKDnpmAkYpedd",
  "key20": "3p7qWtc9FmxaSev1RuWjGLggiaxgsYTE8mA2t7Di9kbh76J2S7dAU8VLQtWbQWMCCrtrqCXssP5uFHzZqqU5Hvom",
  "key21": "63DmSQrjVk5kQrEZzpgPUbUZALYAPUhN7mEDKybB4oSXbgCaJFd2S6QAnDRpeoJxkhSXUaZ45GDYHdkVeAncx5Bo",
  "key22": "4DFnMSLG7jNL26wKHk8y7ugMRXN3ARDV9VuzYj7eLBVuvZRmzKmujYHzAktuATMERTy8LfNu5XS4rjzVg7ZYFCBH",
  "key23": "4bsyVqFyfvZc2SFmWUSqSVfndu6pD4N8Wt91687rrMSp7YMg4nY4u7wG8XLQQfKKkKH5usaHmpmvEfZ4sjnzbdQs",
  "key24": "2z61feXb3GkEfq63kfUyKkjrJf9BoY4BCWiXLM8Whd2tdmrf46zAJ9fwKuJxMEe44BVHjMtvKRNvZQvm1bPxsC5n",
  "key25": "3PAkm9JzXikmnLVEtwfuHoCqcdSYy3D7nyDdjafZV3AKA9NsP5HUVdtxsUjaKcwJANpA8VjJQamcTveJGQVw7BeZ",
  "key26": "4UxFN38yj6bwh2KPjxbAenzMDYv2SJDTKURBpHoHKQkzFNTq8uhS2qDK7gAypvJRvU6Uxsvz5qfPNUEyuyujTgXW",
  "key27": "5sjuD9nqrS1u2E2DSZZAkuRsBvZ7Gxpix7kVWqpbAaPnUtRZGsvLBy1hmqSpMK7zVuEQFyjuDDwgURBfLfKd5zco",
  "key28": "3L8o9wmGuNpYEdMYF1EbFfTHm45Em4ECRGpMuC5YZ7SqSw4aHm94u9xz4JqnGnfycoSriHrySpBPhqvRPVQA2Gib",
  "key29": "2WWmcuAXvDhnbUbA7BLB5vTkRc7Gazya8dg1obQ8v6TGY8h888qZPpxukHyA1V6iCRYsY89ebS6N23cwzUb3YftF",
  "key30": "47KQeb7GhVy7arhBhZRUnf3qbT9Cs5YcS9vrJB9ByznzPoSpH2aF7To3n3Si8dqNgGYo8EMLJ5Z5UmQWgwqP7fBf",
  "key31": "5gNxEkxRFRVw5jDDpyANArPEJBPH3bLEdR8qHYp1h1qP8zLpr6buHUZCWk3Pqz54cosf3bbMCjmvosSibb3VVXTd",
  "key32": "41zihPct9q1AjXRgJJ7XgdkBbnxxT3XgLWp5fTfqYRwrFcVykQSGRwBdkrUvJMHHTuux4STwydjZtMHXudZnq6Ro",
  "key33": "36XwTRUG8eyFK8ta1waFWUfmdW6BuuZbZTbEz3dHhhRoFPAmuUxX6ZhLG5WEyMRFwPL4b5ytdW2p4V4uWpv9Sgsd",
  "key34": "3vXLGkSsCyNUwHLT2tCn16yDkszXyr49PgbUKz77UB5MYZahis3Dzhbgt5iSsMArbEMqSwvuvpZB7kkSW9uGuLax",
  "key35": "KmxRi9ys6Ykzyb1aAxWbQRZHesjSoeuKmcEZn7eYLreLFcsEn97WE2NpqKWBbHnJAmjQbgrhBiKMJDmAaM13UxD",
  "key36": "3pRJNQucvSdpna2Zv8iAEptchiHEd1cnCdmV9ZsmMss7yK9SMW2tuiGeSi3mnjFpwz5NRbJ3A1wRzDVxMfG9sNFb",
  "key37": "3qU2wqyrnBkGSR3opV8it2oe8uZvS294xpQ7EReGLrjk8kfDnogSogkd7SMkYA3Ju3kh7RqCTrdCaKGX2Q11GZXt",
  "key38": "5fxji41GBwHc4iRvwbni2gGHVM4tQZ7D3md2niwArTA5DCu8nYckXQ5o8qTbGA358kUW9wEh23ytoPPnAZeDyxWd",
  "key39": "2CCuVXrxmVpgqApcmAhR4gQDEJF4xyKfhRJcPYU7h3fPFaxaqppLcDGkKwbjW8p3xxEziZar7j8TymSy7GeBTS3X",
  "key40": "47BVgEdcGnvkZ5owDVBpGMcnVjnvnWrhmEM4FH6B4wDjbb7sRB8Efor6UmjMdGqWaBm2RsvcYSWE8gQcSgfdmPC2"
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
