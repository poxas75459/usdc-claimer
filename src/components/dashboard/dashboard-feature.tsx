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
    "536VLZhc4D7jjJ1hNLMTZ5k2bV2rLkjudqtReaZnPt9kRyi4dHyp25CneypMsUY2Vvb2waNEgxav9Dr5GkVqommJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61j77QFg33zVLtVKkGMcXp4ap6NT1VTsb9pAgB9HTzK5QysoSnp5MQFMzhJBAXHUDup3KHYsHySoqjpxkPDQoSAz",
  "key1": "2PzRbXyJ967Qu52EH7dxF4HBkUdCEmruE1BKek5xy2Z7hryhKMjSADNhYCiefkK7mgRESTugZ4gRjYqDMxUrrFAY",
  "key2": "5217G9PuvhzYunAPf9TN3tEnSLgvNDxKC1rpEuDgCYrMZbsmQj2bwCKejsBAUFhqJ8GAZwNDzVsBg2x7JtzZKeN5",
  "key3": "66f4UhwfSEoWrsCM3huSvtxa8ianSTLGX1UDaNPfZ2XrYcYUxYTgCHoCijEoGQM7UB1K65dNtgATQscb9WDNHHTh",
  "key4": "46nVxF2SeAvSmzH8u1UFaoWT1TKaB1aub9GcVsR4zJuNoERwsX8ftJPWgZw4pPJKo7hfNgmbotRUq16NUFd8TFXq",
  "key5": "38ZQ89sweYwpZv1hDtnEsebxnj34kJDsv9i2UeNThgeUf2aEZedv4q2zsmEMNHTYihUfHNzP6FjzkqcbcFHxku2B",
  "key6": "4WygvMDFcKBMPP87Vg1PsBf2EYQrqjLF2ARuXcrTeL5uShUWNj7TgSKVCcmNDxxbi8Z79Akto1s3vDgQ29ki9jFk",
  "key7": "4n385sorUMHn1LsQVmozN3z3nT8wiLsBspsrB3TuAn46GjxF9YSr9D1buxyZm7ybA1XYNJwHRZy1wZAZrE1pXzF6",
  "key8": "2kQLEB3YJKwr2BZR3pb1VB9jXQJSYFFuq8jrJiUhqTCb16Sbd9jX9pdSfZa1rGGoa7Rgn7eR3D6azczbQKKUqt5i",
  "key9": "qGghnyPDSywWafiP3U2sSGz8cQ4kEFxuu9n3HT47i7auou4YDNfhDcYBrE78Qq8KX3JJmoB2tb9WmAt5bivE8wx",
  "key10": "sXkW4iK2gfpzdH8hWvPkEC7K7ia4sQUNWmYFhEc7w57couL2n4G7QGMW8Uw8nhh6N4mbrqewS1BC9TBowaT8pmR",
  "key11": "35qVe9eX9QT9phojS8KZnksXVFSnsYkRuooEqXfzaWpfeKwuMJJXftYiRb7CX5185m3kfocsPGxW3phwThU7DMQt",
  "key12": "jSdexSSQJxGdPx545WaziVV2KXmHKCFZZ6222spRjt2eBYLWomjj2qJaXx1wiqkXsJ3SPfs7JwXjXzN7jdCBXUh",
  "key13": "22fpyfuzywtHJLEw9jBDMnx8XC3qbNyd6YsoqVgf3hwgPPv3aDwUKhf4iCZV5oDc7B2RPW5HnwqB9QZUshit1dR4",
  "key14": "594wW1C5HwuYnzzWBZd8HEZmCjgKB9k2V2J7yuNMRiBUHCruxVLczL65qLbRFMnpjcCQphBEZ2N3J9m9fANTuV3h",
  "key15": "4t9v4ZXBzqnppHp6f12aT3r1Au8X9UA3AUvMZ6ZFntgHDqTtVDPXuoVwEb77q37bRBkbF1giDFdsSY9Xd1d9s9ya",
  "key16": "4nGGraBAyam4TCucQmWeQGgGSrrF2uXtiWDjtihp3gfpYiCiunfBcvFFbsdmsfQ9GTDEe93fwhuyWa9cpo4AwRis",
  "key17": "2GPgzL9zqoYmfchuwxUkKNpKvUiPu6aYMNmrLKS3cn5s5wpbMn1mgSiyTWHZmkqm1QVUJjHbKZUa6bTPvk3gtFHu",
  "key18": "3vvk4sJWi3uy8LD59DG8vcXQJfZJGG5vV951zbAxViKtapi9edTaenkEfwjo1cVEZbrGC3LMGcyRJuJANHzNR3pg",
  "key19": "3kJxFhUtLkjVGTA5s1rduA9VM46JYF9sdJSZxGwZrKUw4BRPiMdKWDSLDdsoJx7UoxknnkePQxoTVJqZaD7UT9sQ",
  "key20": "2FKs9pyS3MMHTG9B3XrXmP6XNTszFhutnLvvobiGKQSr3rpGG9xGou8ZLga8yEAPTv2bwJiDJMpLZr8qBrTm3Xxx",
  "key21": "3xuqftUd61jneidaot6xS2fK6kuNouD21UdvmdYFYtyd2CcPgB1xPgqW4cGHdeqzLepzFu2bpWDwvbimfMhF7Q9S",
  "key22": "3PKwkRgoKboaJ84Js1tgg7GoqLnP8VRoTGR6fkmLRWQtfcu2JEx89VtGtdSuccdEEq1ddBoP75o8Qd3ctpR1cEUw",
  "key23": "4eYkavSK3GAmftP6J7QqTYLvv3M9REhbXJGGE5ZmaZiwHJEbPTxnKfXVFyTRCHoVPjhZG4vsJoUKC195o11sWm6R",
  "key24": "3x1H81Z2DCqMVounzmANJzhCyqC3EgCSr1uWossfEEyGePRFV5LkyRagTSi3XR6x4zyFMVqmi9jYkpsBA9g6pSN8",
  "key25": "5n7XyitSNuSYVBVyPn8Qv1rFP69iVXtv6Fsm9WVTRHRVLdkp5yZBpB2Kv5ArMTsXfBUCTYWR6Mpd4p9ryHU376oZ",
  "key26": "4h6fmiu8qUkNjKzPSsqbwjncb4edqFcL6ZGBnmah6qBuCE49f5QqJ6iDTCkNnDtrs7zAiF2VURiE1BuvfkiXHvSr",
  "key27": "2a9ov9vDvCcnkVGPaB5DP2F6uxkwT6JNSrvwupqbEHSNtYuFcY52zcGVFGQSnMZWMYwY3G7RAKQrSkxvkEB4gxEF",
  "key28": "4sCxFk5pfwHbCGuW55RJTkaDfkGUF9gDctjRTNr6KCHxqq32iPfmw2C8PHG6x4jhxhAhTWNT8CBJnYh2VnwsExi7",
  "key29": "2H8MdSbYX9HtuGDaJ7mFHvGQrMKFy2XpQ1ynDE2bekG64vwd3pp6v8rv7216Wf39MCbYsKAGPYEJ9T4TTHsWVTMF",
  "key30": "4xLrw22ZJ7X2DkxTkRCdyVKX18GtDgbwLAXTDDkQqMgctmhs1N1Aoz3to9FfRSyo1TjY3PW16kbz2i2T1FgtxAHe"
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
