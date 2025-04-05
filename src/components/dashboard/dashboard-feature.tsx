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
    "otgYaqYJtUMgkouQuHpCymWarCPzjtyNAvt3mmsEdqFNG1d8nRpHjFGfpanDDEEE6k64ya3cwLgKprm5onfdErN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4st49wDrgFpvBBpQ246d4hArX99fc3U24C82g4njHFWsmAh6HUJjKqbwPWxtGi6F2GAUgXeZrkaRC5qQuRW6zLCV",
  "key1": "5SsNsmZN3aLFzun54r1huBeQZZfnp19iCcZya3BGw2AGysW4SBMN3mUTWsEU6HXE7ADhW1xzEP3XznaRaj3jUHso",
  "key2": "W8Tou9RBRkVpsTdsdaGKP1x3Gm6Yg5iKPWwJFDfYhQs2EyGFg9JqpF6zMAWKYJ8B6EN1TRDVrD7x2ViFNLVbfPK",
  "key3": "5CT6bJRGSsM4foEncRGMqN39NwrFUG83sb4zGBDp3nRokpMp9T2rUzDZiVCPWDvMz39LmgordzUUoHutkBZNxnxn",
  "key4": "d2mg6ikFZU6Y7S3L53pCvYwMfhK1yB7ua5Q4uyQXBVzBExTsodCZwKjhKWZZW3LyDLSshn3p45jVeUoiMsBpD97",
  "key5": "MYrhoQYho8JYdb76XQysyFgGsHygsyZ8wPSKjeaiBavaoZSVFUkQG6Phsaw4kcQG8VnsRPY1f1ibLLqGw3g1bMR",
  "key6": "4ntFACr31SnBRfTdbPTi725sYiZikQS57pvvkmaGiAFu68D5jWgXKjuZSe8ZoKuAtQLw9fukRnRbBLpSk1R8a86K",
  "key7": "5VwmvzSAysqsxFHWxiCmLT2jTzLp7kN1G7V4FMfcWjBh7tbWfC4DwK2kttHusvAqgxqyKiD2WBEZPy1h2zb2JMqq",
  "key8": "3hsEt9ytYLbKVD9nDeFjQf95E7WjYtgxVKQfp6JiUsTjXPbgLvSA2bG6veiXYaweSxEkeE1U9NmiU3krR9BjhFZp",
  "key9": "2b4Ya4Ht8rEvMe9NWC96Da4mkuFZdowijKqMsZtiuzTJkAnZWiezhMELdkCzbQtLRJD1QG9ZKj8z6SrqDQsahtmY",
  "key10": "22o67brurr3um8S7rCvCcMnD3gYhFt7PeVwcLv3ZiwqQcc2vR37QWqa3sGVkNCpmmnc2PApSbPMiDTeCsyE7djNN",
  "key11": "5bR7xiSARGGUdDM3mD2gHBMrr3NMdj5qvcJq3263mc19QUJGskpA9xcbZE4VVjm9qF2PaRDX9c98MHdhm8VvquHb",
  "key12": "4ruzEbDYStFDEJPV3dt2DrENRw6yf4VzpGu2U9VpaKUjJm7UYo8geCaabpkV5nJjD2E4bz8p1BeTWkb4hKmLed4q",
  "key13": "228QoinEPgx7ji3ca35yVVSRwL7oQhaFuCrMHr9UPNxHv7XS8Px8fETekjLcm9j2GbjShTrfKuRbezBT3aan5ETX",
  "key14": "3patPCRNQdD28gWoCo8aqYPUfbod4yBouBVyFdbid7DNS7KF9W4Cmhi15FdQJZfsvuMac6SkMoE52oBxFxWVHTq6",
  "key15": "3dZjfkpqp6zfsLhgMufoa82AFL53qwd7zkaUZV2iMfdKdTZj8UHDLFuPxjDdw5cVVBVb33sGkqE2DCvzuZ3bv7RD",
  "key16": "59DgMRPGhnoKH2NDZLFDVLwLr2rQDJ3kiHddJdpWubTcNa8Tih3u2nWTz1SyRMrZGuBzrT3SYzoWdSwpAW3j3AzR",
  "key17": "36dL84t7ZKpRvMKjEyqQK3WvX94t3P8FAvgbJWtV8LrdPUZ46EdQpLhg3rrY31Fb2CUQoQHnceDGBdC1KmfMtQrR",
  "key18": "4cM6zvVbbFdTCB3EPyVr2TJWcZog3L61PMxhZvuoxJLAhDQscVi12FmWXeSS5tmD9Giwo22SoQ4qhQhd5W4PrYMx",
  "key19": "95paZh79S261aLjQqdvnf3U7QDGyyg2XhjsBXY2XARdH5tn5g3ouNksJrSRprAv6tgic38b1UREdCTZx791KDed",
  "key20": "2tB5ZYsiyQnxNdnSG6Q5GqP9Un44PUzxfU3hPNpi1z3hj4bUEZjAEfdHMbPmMJ2vykU9rTu4pPB5AJ1pU7tCtMKr",
  "key21": "5rXn9Lq9nAgGLe8t3k8vNyVAS8B3mUDNtJFMpjwk7b2EHzu6d24BfWADjBPvs3HDDaW2AwGPtcX9Ac4ZxUjUaZmj",
  "key22": "5JVYv253PAUcUBAQ67GcikHHHz3ThbZ98GVvhWa7ynWctHgLCo9QjsB9pjd8gKUH2poXvB9JmaWoGEYUyKdWUsZz",
  "key23": "5o6xZm4JBbJDmJKzUHquwxdz49796ZNU5tfsHR8jB5NKE9AhPySLDtczyvSbupAdDcPhqDAqnp7Xe78VeD6do2Ya",
  "key24": "5KtrPx2U2faRBZQ7MjJnAcPe687Wa2LurNLgriJf2r3Lm8spiLxDrEqVj6DDZiQF19mXsqSfwo4aZzcM1EmVFG5s",
  "key25": "5f1WJ6tZGiodQPY6hZhgWMYTjStcDqG9kb64hvuF1DJHBRpsLphN46MR3dTpNe5xSRSK7Ffxtjs8BUcMZ4ZoqRku",
  "key26": "2rCbMSbWxsK8d2Bx6DEETq5dGdBx9aTqaVPDMyPKbiqqz1GPtY8QYUBmwCMDAQBMSm2ieWY9nZmJSqSzuDd4xdDt",
  "key27": "5DJgjETEGAiTCWmjBcjiBULDSqLiTHTNePzzWnpAnfUS6yeSm8L8GWnJcYtwTpv6i54tUVwy6dup4RBXZ5vyKf31",
  "key28": "4y3Xj9YLvSgLsHNn2rNxfSo5peWGwBbqifPwb7NFxvBvTrrRVkm452KN67NaHYxfE4XaT9jJcPVgYugrRh6mbH8a",
  "key29": "QShn5ZK5Z4vHSbpTAZjFwZReuoqdMCBvf7AfDVDwCjRCj6XS8XuXpdk2Zu8aQh9vivzqyhBXuusgU2DhA16XP7n",
  "key30": "3D18DPhrvApHgWm8TV9w1Ze4AE6RD2BSdqFSQp48u4vpt6kfTxvWswEqBchrmXjDTGVJrjdVsQyVzo2XBmGivcS2",
  "key31": "3NX6Qp1efxxtgsdJVxjWJAd1WXjTwkca2Hqw4cztz7ZSnb68JsyEGRbFNjdpVZPYJRVNBaSVbuNsjWkH23NXqfqV",
  "key32": "4CZ3aGWSjTpGZGRzjTXpUtAvbA1nns3UMcLneEiNFoAJmC4K5gqpfJ57iosSmeVXPjgwAvLjHchp41f5raV9sZRw",
  "key33": "2nJWeqU4ptC8nzKfvky1gcsaWkFLuXoUUqtAotrvqya56AoMxH2TGuMv8e3mbrzWK47Uq72Hpndpry9LTijMkCp5",
  "key34": "3kYSPNCfc5Dr6g6FdLx8wHcFVFHMUPxMW9h4hWLHXgvnGWQMxGdgaM87eQA7eQSejD2ujMDPVi4b1FEC8Q6Vv5C3",
  "key35": "264FxgC7jjZVrtZzYopibX6Eop3Ye6jAjELThQihntnxAaUQhwibkxxkXy99cyEn2WsVVmPHciDBq9Ceaticcpz9",
  "key36": "29e9prrMqSgyzdHu8N9Jq59v6iEMsUDin7kD3drzanqnwfZvrrYwjs6k3VYWd8Bp8MvvFGodQxRzFfgm3cKDZFMN",
  "key37": "3sHehVKd7M5Wi6UVHD1w7wFpRguAFDahYy172Et3w3y8A9866LWsWKDiiVTSdQ56QAYvvEUf2LuPCdaNppPi64p1",
  "key38": "2wucx6Xp4YEM3WyU5u7VPNQPoXn4TBTsSBh4zwXPC6iPPgnqmGJPNj7pWNnTPsfng3B2TRjv9KQ4URg8xrRqdT3h",
  "key39": "4NgWRSdTzJBuvSN6ezoMV26Qwfaw6Bw8n8kPNvABcTbiiogtZJGVYmo9bL4ZUAbytJTtMKX4Bye41hBRX8kLnEWk"
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
