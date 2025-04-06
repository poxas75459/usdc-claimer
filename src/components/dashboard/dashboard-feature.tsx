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
    "2d8Hs2Be4iQUf6ieN8AwDdSW8jUCrd7pm1sitGxEMtmUfJNBHL2keL7BoNo3drDRQYsopjRQrWhjD9u1kwuHqM9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29CwfE2HrBvcQsvEstzqdNXoJS9vimrArNDKCsL4voNaDgvpHWqbYZYhKBGioYgusKBBnj71hxFgsB9RfkzW7ZaU",
  "key1": "4dTo89pLvFG7o9SaD3JQv69LwN2wWj22tmYTPmuVxiuBb4orN3sZtpgxz78BXG5PrZ48B94UG9ZeDaHqKMKHvZmw",
  "key2": "3DxqYDxDBsbxDqBoyTnLkCVTJYYgC6Py7TqggCBmixJbzMtvmeMcmkpiwBwM1EyamvobYKe5caDg8jeWfnjN2sFD",
  "key3": "VwDdRsLx2xMtNVAEuVqa8bfzrbicEy5oDPpr8JfWyUXy7MvWWe2wXn8kefmPTFRbKgvT9h4htVdC9quuyFzFpkT",
  "key4": "2PBfbzAKcd2cBKXZkrobzBstTTibFgWuUiGR63VdNe2DHVDVDm8hAvTwwgTrHRfZTYhhcNBc33fM5q8GZHGgoW9J",
  "key5": "pkkdCF2qFT3bL4VsgjmJft4w4nCSwxBWT8vSBGc26FSd8hkRYbM7SdbZAet9zeFVoxhz2K2Ntfm7xcQLnTUkHH1",
  "key6": "As5kaWEQopNqR6MUTAiViKuTFYAhbExxFJxN5rHzXxi2b6YuJTaupL8sL9ha6hSCjAqymrNYPJCoCrMnFTEWFw1",
  "key7": "31axwz91UPr6M7oTiJKLCnmbD4eKvFsTr6AZ8jEC7FT4oERhMw8CTfwg8XYtxWAq25P93qUwMwCm8Cksb4PiQRFs",
  "key8": "5oYy5Kh7y2cxfADyR9LMQAw2DiyWh8rVmwMqpKrKkNGQj4Z38riPoLV8YK46FdnyKbZ8atjf8Fq5LE9wDtrZPitM",
  "key9": "5ZPgNjwhrNifdY1yhCzFUTv17Yveqn1FvSXwwz291cewFk4MCe57jfPzpptz6yKnZeZwn3CZkU759WbDVG7gcCLp",
  "key10": "2DCvu6Gu17QNNRGVmGCcg6tbwSRfdNYDods1KBZkEhaoNKWxBKB9GmE3UbTNgv8mRioi1sF8Zdf8o9MLPxwHGs1z",
  "key11": "2JiQnYpxPDTCJzrzPA2aCyhGiHYLNASPmBUYSTbD5tQiMsJV82p2LGC1kMRP3vkhM2F4jRW4JBTEzeeTWyzsM8Dw",
  "key12": "5PE9aVvMu7z7UWDe2GVeksXJHDYCHjjYUsoA2uZYzGRnuGvRzpo8wubhcCsyKCnHmGottchToBPLiSnQ9jNBdgqU",
  "key13": "5R8M5A5FaJWRqkSwooCgzvz3XYSYq1WXxb24xr5NZ7jkSTMsTqdNtWNQGY54QF7UqRyq71rn5JXXpYLQ7saeoZyG",
  "key14": "2aVqAdvyeNsnTMXonFsDgdxEDodtcQfv4gPH6biBKvToq6m3XfZkbrxasgUdvH4DR7bxXiM2a5NMPA3mYNG1C9Np",
  "key15": "4hjLGkhFRcrDKV7i8wzFxuU7tB8ed2eUPNGazSnC3QnqD7yKwR5pEWjh6TLcixhjSoEQ9Wu9cvKQBjs5C3ZGXjgz",
  "key16": "3xCh5pdLBNTDLU2wDVPSHHBVjf8sRdG6iWVX7PZ7n81HvXat1rT2qbfcmAqXcmUXDsbTgxf8krmdVJoEBoViyG9T",
  "key17": "3DZAmoEnr2RQgFxWH8SWQYSedzGtNR2p2VRFtRmSRLnvsK4bgdqiL8jeMHoRYGraLQycJtBZYbPdhRFAaU1hGro4",
  "key18": "5fuL6db6sZx4fsNViVejWZTE1WA2XptfqynhzVFfvYofagBcGVA9t7Pq4MpyRCDejbaSGV2Cde8S9Q4oJHDQrv2S",
  "key19": "fQWd13RVZbvGL5fL7AthdCXU7YNpdjzCeiwN8gVJGFtDCnDhXycnksDNZTTjggeiADfjky9HaFpRyzzV5aR6aze",
  "key20": "5HG5ycwFyiVL3exH171cx4BdYgmQ28uvYusz8kuciab2A8mA2oPEffC1ofR4RJdNTzZoUGezmDtJjKDuPRQYwt64",
  "key21": "3VagWzCAG6beLTpqLQJtgr9jd9jcLnJuNs3oBQQrP75jASC4k1U8tbWRxqrZQjRF5dqRMttYt9xBKBvtrsvC99hy",
  "key22": "3G4eCkKEnMG963jvAamuwag235BSFvvdKir4etYPUqEjFwJFg3GuNZBThzMvdg9eE8GGSzfxN44Uv7sKqPbvNzSb",
  "key23": "3dwaSimJ3iXvKAY62dTDvYEw36oNpsCPHHrTYiQF1Mywi7bLGe6gdMcgUcs7kxmyZAa3tMeQ2mRLkXkgRnZg1rWt",
  "key24": "5rLhzmDoAiccL2UKddpXpeFj5xbu12oiQk1VB9hjLHdwAP6E1mzFN9c3wNUnMXas6KDRTAakSLu3wLztZnS54aGQ",
  "key25": "nJP4t5ejqqaECFDH4h3TJQphgvHJHDjXemt41RHFcfHqHu7wahPxvQ2A842s2XZbqQUMiDkrLRTM4ysXpe5k7H1",
  "key26": "2FUQo5HGjc848Rb6douSiS7zj4gfX7nUyqXeDxPVjhUEneWh3vAqA2KwzSAtBNYh3QpECHKJU8UQRREwigcNNSMS",
  "key27": "3CymUjha97bJj7KEfKBbjfCeChfdoqNvgLtcWAQ6ivNV8x9zgeYzFvhc4jJ7WMMgvUcfnbPrupjiDShhGkAgaWj2",
  "key28": "2ADMvdNLFqxb9FYnARg221BDifK5JJxQQBg17Q4W8c8WZcRj652fsrrQRHRvz9sg5coMB3TDPgDEZy3ULiMDzp2A",
  "key29": "3o9J11y1Wz8C8GQbXX8HXKZ3DRR6J9JPZbmpkxcttUNidhD8WLNEpM5miaimw7F97uPo7UuzvpHa1YkMHckwQYn7",
  "key30": "4p8tAkbg8BuSj7uCV7LPEPeKdjf8Cke6cuAz3NJVozd8Mo6z8fzRV7CdhZEWa5mdYxGRbLsbuepsdAAmz54BTu7u",
  "key31": "657qgWccT3uFPDpR1YGk9Lw8cdEfsdDe2aSwyW8g9RSZR6GC6sEwhmNnu69Y8oPfBnoEUYnNZnLAFmDynr9snnJr",
  "key32": "25diRVPD1tJDtrLkfmt5GPiVoy351dP8mk7v6fJm6gVDvmbaw92Uht73EeMBKQD4Lq7XRttsFUC9wgFj5xfKMdVq"
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
