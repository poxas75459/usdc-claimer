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
    "467aooenfXHXnAhCfnzsH3CbTUbwTeLUdnGeQUoFLu2NGwWLQuoJEW4iVYkqdmnPMAgcGUxd5GeLdeDfg1WWNdwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eo23cPrAGJemjuY1iTN6LXSKSvq2K5GUFQziJEfHUD7JwfFS4Pm8mJYsApnxnTQRKevSqgLevXTBqkvhXHVTttP",
  "key1": "3RVG52VumePEgzXazAp1NiN6zmPnZ3vugziJ1xpkyQUX3d6JjUJ3MwfNiRpPWfMHjnBB4s6K7SKGu6qduvxD8hgj",
  "key2": "4GgYkrkbMCmD5thoSqADqyZ1qX2h2nSrq82NAQYoj6unmjg78gBC3hEpJVMBxCbG3wDbsAE6bGLsN32Kb4EVRsz6",
  "key3": "Toyike3SKDBw9AQcV1CjrdNygfk7XkTh6RY9dVz1zaY3cczkHoDB6uCycNMX5tTbZArJtZAP4gFqTjuXJdTypXX",
  "key4": "VxrcjYia63jsC4RqEjsYe6X92cM9cNK1NBy7qpuvKECBgWK7rqCjXxsZoNt12eSaxvqQvfZoscmYUGAvCnhbEA8",
  "key5": "2Pv6UNsMRqimWZJz5T3QoynLWtoX5ia9NKY4XQgHpRg2d43U8o5JFyi1oszPaAmEQ3gA1h2tNzRJY5hrsA63XvPo",
  "key6": "tLcom3BLt9U4nTmFBHddDcV9o4oxEn6RURrqx31VgnBmwMeKxzE1QjudA1vjL1BzAfP3kcwUzFZyqoiKnF6vt9n",
  "key7": "4LiEfipCDWjKmaFozYLn6QR5Z1qFw56wfT5bos9hmJXPLGAVmXLGiAjNTPqXsWtbRyXkQo9Q5VRRkN8cbiMDaa9n",
  "key8": "5w7e3MQ8BAKxfyp8QwEdtoyR1s6MaXTPMqV2tpcR9J6wMUkyi5w8j7LGKepeBWAqAEbBktsWKx8GLpRNSn91Rcba",
  "key9": "2kb2qBWFeX6jJ11Hk9KFWtDgKP4h7eq9ta6seNzvrqV3Sad1r87wdWbxrrAoTXfoyyXoWCwXehGXNxvEEv3DzKa3",
  "key10": "5jDr4mBDXqP9YfEKmyWMzk42kBGgoetwZEsfaB9dXExjvzhXEvbJDDYA128tbevosteuQvDQyEXx7Hq3u1cBj6NE",
  "key11": "3nFYEKgNtTnsEqGkUmek9PanJaRswbFwuDwGTcEPnQTPuZdscjFKgVcPVtJJ7NgozZx5dWMgEpGwyHAQTSEihQDg",
  "key12": "3kt47EEuQArZCMUTeetSFwTUtQHTTYx4MgNJVaDbSon1s15iG1N6LeZwzGCppUJCfL96SQXF3mRwtwd1BVD3gzeu",
  "key13": "54RRLgYixQqBJipuvqv4L37uDkHcby7M5MPUzPkZdhNEfFJx45XHPFoa8h6fN4R3MWfuiJLxh5ZVoc19ntoFKNmc",
  "key14": "4cvc9rkiWobWpEhGrB2riZj2Di6MRciUyeddZMUHmMgAyjrhx9z5K5f2wvQ5DQMzEYuQNTCBkrnDxfof4ezd4VxH",
  "key15": "2WhjdCAjf9urFXoVut9zKYUQmnN8aqVy9QL5aQsLQLB33zeH5dYeczndu2ssoWYUihfsfHH7poDg2VM2EJ8uYVt5",
  "key16": "D6QJfCFzowDq2zduE2JcxpB4XyZrDvK7m9idMNbU87SeYf8pd5UQp1Cy2jEX3ssRDv8vU4kSzZkF4eV44cBG5pj",
  "key17": "5L1k2NGEUYnVgbGPGWF1JQGcsTgB2VfquTku3ewDU8vGcrcT8yawVMQs4pADYjgrraYm2uyHLvenTEoPSTJaH77j",
  "key18": "Q1R4wbtmWhAoUTRnaT2BVDNTGEVVr91TSMcpu9dqc3cECoGXZZdBxj2tobRtzQK5uqcBC3G3LvU8z7oSAnvDHGN",
  "key19": "2dewsJ4nu9VsErNVgmqjZGTS7kVNDhUcAzbCJ1gjwNRYLtPMuWLA9Fb3gck17geYuSnYV1S4tmETUpetMEW4ioeY",
  "key20": "5xGkcoVPuxDzWRwGgn1LvwWwedKdDF4GuLxjZrxX4ptpjZmCYFDSMUyfnK7rbput6enJUu8LithDPSt5fxrJDBUJ",
  "key21": "2EGWuHP9qkXZMAxF4hZ76Q78oz7EioYNckvVbG6MDnMdnukZ72G5s4CBAxd4d9HzNUG5fuJvPxaSWrbC9bmVLPHZ",
  "key22": "52ngtPaWhtcnrZZJwo2J6YNdDqE2FUtfQJPsiq4NSwU3KKpxNiyHyiEKfQyo8yoWQkHpPM3TPy4H9tb5r3UGXD3e",
  "key23": "5DJxYxLHRA1TwQNA7Wn7hQpxYGpEEZK6yvqgwtEYVFMRMS9F1keakwbD4FEtH6JueSgMrCEibidDKkSFzhvCMr4B",
  "key24": "3ewnugkzUYLBKeB8SpRBLcQ4g7YX3PGAmcW4umcweiyycyX7tNuMo1fTCTLCS9e5LbWFpuCSrh4VZYupURooCj3L",
  "key25": "43UJvckFPMCvYmzXndj1HrUdMuxy77W6qZcSPM2Gfsq3xesw7qctpn8NctXtwhixmcDYgsUWA1xu2YGZ4DcVSGA1",
  "key26": "5dZPNDKsfPMbu6KM8SkxKh2ji6X3kWLgs5hHHVKHn6io5KzmuWUfd1CwntJS5ezFMYMrM75Tgq5nKHqSCPh6xZps",
  "key27": "4aPWuGnKjc3v2mb1vFg9gA84hk9jEmgERtoQQjysMcXMUZce5qUxeeEKEx5NUgZNwwQhZb14J5KYT6zoST16LcwS",
  "key28": "4bkNq5qfMeeg7E7CS53cUFKsEoaiU3iAHLRCWkaNPHm8SZDa4Qh63fgEFMy9qfgDbhH9W92W7Aw1RiGS5M5NthdQ",
  "key29": "bEHucp1QWHsuiLrqGRiywDhZH9hZmr8cvZqkUPnwRGn2mn7ksZni7kSsHrwHkTBWa82W61zsVrsRNixW9oUSzzL",
  "key30": "512WN2eu8QHMSbjbXrtwTXhyAC3QE4sEUQDhQiCnAEuDBh5s98SJqZvgAdUP89K4iNk1ta2jFCsmUaf3crGogmk",
  "key31": "25sJ62HWRHPYh9QET3k9QAdxcbBLNwkquQB1iRgm2EUMkpwEfV3HZafjpqeEboHJt6ahcFJjFqJNcKCogmkjcufh",
  "key32": "3qSsTPdNkuQWHQHuDM1jwPeTwkfMpabEwCeZjGxG4YSE9B98yRB6wQtJkyZpENVgUBPHeXV8YG6GS3oejAW7nXQ6",
  "key33": "3Zu6AXJYrG4RnetY46jZF7Daj495XG8LGsFcrbBDxs6rAhZ3SBxRMcRYGoVoEoStEpxzVpc8RyXHy1SAJ3E4hRDQ",
  "key34": "2XBjRRXeSRQYY4Lx7h9H25y9iddSWEY6yLw1EYZt2fG5qGjk8pGhevr32bUtfRZBP5DyH6Tp8KuHWq44hCUcveKj",
  "key35": "5DGdQrXtwqCzSRZjMXJkv6LxPYPp6Epm1uC6M8EMga6TgXNtSP3f2fZAshNc922ELKt52QdwD4uSYM93mKtCoCia",
  "key36": "551uYXmdwfvGrzuCFoSD3bo8g5rHVygE2qEWJhk6RJqzGZswkuE4G135Pg2aWPijay8SAfo16iDeGD9mxVbmxUui",
  "key37": "QrQbgB6j1U7eUjR1ZAzcB1uPVK4iutXwPf6Zp6YSiifdLudQmBFMmtJtroK9uhNxh3p5RUZbhcZRvLLRZSQg3jn",
  "key38": "3j9jUyhfzejKwgQXqTSkEqWhVKZK1yWbaoJfKbFtzpfz4mBGvCaBRJWJ1R5hsMToGB8VxxEsXqa2wpyznsbBRTyy",
  "key39": "5Q81w5yQhcjmxzhHb8BrRpo4hBsRbKaTKmtFxnHgUsU3E6qxVsumxuhR5HhaaocZorAQuzj8rVoQYpds1hnYsws8"
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
