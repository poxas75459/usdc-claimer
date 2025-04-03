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
    "552w9u6C8gTBaBaDXYcQHEUn3ec8cwT3RUDLJE2FNCamugG97xFS1D6K5Qg6fretAEezPiUfRootF7gnoRVUsL1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ftRLSjNtzt59SPvaWjpwzbAnNQ9cdbmHcQubQuTQvrbuMRwMKotdyvEXGGe4soSaKXQ84QXeGHPdeaPhdjf4cXP",
  "key1": "WTgU7HSjtg9uDgGEMwS7mgfhQFJJwCSYgvV85pZ6fEuhHWH1eRiYmugoFo4dbM6eJquTixUJivKQzzZWeHarhoN",
  "key2": "27ix6gT6j7VkBA4AEVXUEXdVWLAzT2vgk3nKFRSbbqZsZ2oU8rgZ6goU9x5bNngCwp7Ejx8UKWhtE8jk4cDYQVtv",
  "key3": "3S2yzBoC183TYD9L5oQrzCmYqUKGPGsSBDRPwHZN4cS3zspyYUqY6Wg1SiGFBwcV3tQeGiEnTLjmT5WCn1wBSvvG",
  "key4": "3NtC5XabQZ7sybnBZ1GGACzCjhZmzN38EP7Dh3P97j7nZHMfqcexrhvhUz93axzEBbH19mPDeemYoP3jzxP98wvn",
  "key5": "49Z5gE1KGWvmLh6R7yfkq6Z8CmgczdJ7Uw6xkw7SLn3KwqCJv2u98yqmuz69wufGyDw3uzzuncV2HsqsNvDBcU36",
  "key6": "KWiWAhS2qnbCMvRYrJrPVKeHZTef59DhgsvF5oCutrvZqd4AFQjLHrJWharA11zqHaini1hGrp7M7Av9q8WAD6M",
  "key7": "2Qw4tYKbDXY8YGJT2gNvymekAGecv7WWCno7oWb5DEjQpGD5hoeK4hHExSVRKMAp3C53JReSnQZWw81RAhs9BGbB",
  "key8": "534w5Cxb8yuxBN6mekakErACkJA1hDHtyL4G5TsjpHdu2qJdZp96aQieBLyVHM9AkqbUxYFU7ybH6gqpHSmnZbc1",
  "key9": "5gTkxN7vr99BVqteMKmrZ73JvB1ifNnXXVbtVYvfH2uUrK3vJmRj8AsGv8wBicdwsVxvjBRKmJDgG6gNojsdSYu9",
  "key10": "3bF1xSjTELfDQpww9SqSco6mudwT59QuiAvZChjrCw7n6RrZ9Y8idqTLY83NMqmSP8GmJGehzr5ySKX8HpXT8R1Y",
  "key11": "2rQRGHLLdXUCh6DRQph9TYiMhJtYas79H38CqE6rCWV7CLHGNpE3cgk4YVdrgGgTmhg8fTEZPSU1TfDECxWSkyER",
  "key12": "3txb1x56saa7bt3r2rhsz12GyvHQDmouNFHmr6q4sgpSRzY7yJNACe5uD7wt8yxnDXnjp6QdAwVXdnC8YthwK7uh",
  "key13": "4zcJnJ8TzEjeHkd5kQF7YSAWQ8JvZYicDMyAgHtT68hFDYCxmDe4Pah3t9DCbjKbUrn4xZC1UGGTmrPx9SFxivvp",
  "key14": "rhqeXcogxa9T74hVaVxvUuvcNfqCr5SFBchkU3Xb2i8dbEPLEBNbbn47cZNudtWGmVDSbtK5vay58jVzTFjssZr",
  "key15": "3zz9nime75bJ3y9y3LUr3kbEU6KFsQYxMSo1B16bC8TCKSG8e6XzGo1ASzTFryidi1e3PsCDj3YbKgSpH5ChT9R6",
  "key16": "4V9aW1K7y9nD8RiZLQ5Z1b1bzJPrfvS3Zng9YtTBM47tXKX3nHfJcSsnGtzoK5kMjpE66YJcEhFK74hb6fGQ4ppY",
  "key17": "4v3tX7czTWerDELzQUNvKkVLcdimAkSWUxgs1DgrTq24N7oTG5XEEmfbUA9wXU1GMwPamemn6Bt59AUUafEYU6LL",
  "key18": "4kf1g4us6px3BauZ6RKpqufZ1eqeE8vsnxuUqWzaBiGboMXnyDZcEWtT2XS6EsdVzFmF7QhSDHKUsRpfi2tiYjX3",
  "key19": "46RpQhECzj9rxsEFUt1H9VVBvEcvmGeGyTCjYpf9fBg83yyqF5vVL2dHxQsTiLwwBEGEff6NcS6oDvETPhdxEao3",
  "key20": "35wh8ymoqdLVLCjHgwMM3EZG7AkGbhkqgKaXdsDbKnbSpb9P6t5SFhHx8t3ERafVV1fUFCdq8Pc8Hqx1eF7DibH3",
  "key21": "gorBLGoagbJXVnsj6CseEsFBzUqdBHxunQx2CtT3T2rg3FanLSQcUKaEZyP7GAN8cwE1oaAvgR2wtTjsGCGYt87",
  "key22": "3Go8hFZ4L2iBs2vfrGZfyLfot9se4e48Coob8itXT26NeKP6T6GXUSjwEmbbCcgiz9vx49s3Qt8LZFQxTmfjMSaS",
  "key23": "2FsWiQdXMV89rdVgamGgKMP4okbTVTPpSSuxBydoKBwjHqRs1X49BbUr6pdyZSmofUBN8DeGsfJpnhSeTZQrxyWy",
  "key24": "3gTqYFLZ5oExj2i5nmzQ54RCgKhWpdZdfZPnfmXUUJqw74R9P7jQooxEHzdkKA6eme1zJB3waZWfHA9gXQ2LsjcN",
  "key25": "4Ccrsf6pft8U5JKAkV7pXm5FEMgeDU25YiftWrfsYNVz1dANfkRPEQyGBsxMeXwf8eJjpRpFjfECpdNB4BqVNNaP",
  "key26": "4wfzYA9nTnDMkJ6XuvMKRvn16tpHwYhRyqbbwHTAEGUzTXpJYyuJpURk1sm5N5tyzueiZCwgYT7YPeyFzd9Ho6UV",
  "key27": "59vSk68beKdGW6Lgta7iis9skA9hVbw12JaYWGLD3qWQKC7EHiwkHnFZGzFRFkmHtwfwZtuY1k291U95tN5gEfbL",
  "key28": "5pdJV5SRKdqjFVJDzEhwzCuHQUrK9ous3GXB4jaRtkSYUkfXpXTkqisN5LxyyYye2kbzomFzoAfFqithqmeFvXLM",
  "key29": "NgX9pqLgUZkq3zrJkpwHGVDn9kGJcaYdgxb5WZZKobEydVoxwjx8djSRds4DAjt7mkZQKjaBuhka1zCXwRfy5Gz",
  "key30": "5CU5ZWzMSnXh9riP2CAXkdDV92qYEvVgiQWujgHByB9iC5AZEfc7ePCYncg2XjjdatcUPWfxyRV9dsFBoVUf6Mca",
  "key31": "4FXxzD2JtDS7VPk3zLzcuLF8Cyexe5wTRfV7WpbqT4YR9Bt5BFVjsfRRaPw2skLQZVihPFQNeb8rcYXcSJbqzpuX",
  "key32": "jRxT4d3u1AjoJrbcZxT3aJGT66ySV8Md6pLji9eDSfeUin28MbUsbJoG7NdKT8PkdC4GxQZ9yZRCoQJ1HNjfss1",
  "key33": "4FmVYVL67T6kQ6LgkT7rggSzEZmwu2KoextC9UNViKA9Kk5crHM9brsDKoAUv8tJMXNTC3VhFMaiHH4FGoSgFvg6",
  "key34": "LV2fkq1a6zxnBLJdzQHZVki2S2RkFeFzD9WMh45mG3v9q8tsGbwavUQ83x4ikJDVC1SUD4U4x5WSF1X3sJKhxk1",
  "key35": "GX8hFcGPmvY7Zm1MZD9RSXL9b2tzfqYgeQDL2N48WZ9WncRypgJG6LnD2aZiFE7vW8hQPw7ySdbjFwNBkcZGFwr",
  "key36": "4dTfckBHJ2JiwaPiQ5LdbAPBot88JbkxhAPvdfUX8fsm6XgbnwpG83rNzC8LhMfKGs15EAHrpkai2XZYnqYHkfUg",
  "key37": "5yvt46eXy2uVfjwmy5wTggewEHK6X5oe72eEHDZH88wusbqJZtRyRuyyrHWwRNPXEhrbCyvR3uVYQavsoUj1gcZp",
  "key38": "4tfLRLrGZaYweHpLH4h6AXwCXMkN33aSdYjKtPSDsMu3XUkayuSqFuVTzeyA43cq5FfXQoWfFTJSiDPmSk6Y9uZ4",
  "key39": "7CdE5fvfajtpezNMvuysDuhuQb6oDrMNYoRBc6YRmT1uHU5tfrwAq2eTP3PDNfUFKQEpTL3wqAu95SVVXkaxMkk",
  "key40": "5bE8Udf5nMFgjrxuieAYAoWEMdhY8qyCse7Aqdo78ao5LsL6DSRwZvK4z6vUAVFjqTSM9bkCR374b3YES5Rcxedn",
  "key41": "uQ8ZXC7KVWjzQUSKDAW6SxZhZkPU5qJNoGmdHr9P8E7N46qk2m3M3nBmUAJYfgP7qzJV9owe2AYNujhghRQq19e",
  "key42": "tk6xmqrRD8VdwphP1ZAK9VNWd8bRW2eUvpv1axdBi2xouGN4BSa9HteoUcRzus5vgFyWvUjTwEgDnjRKxN7fwc1"
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
