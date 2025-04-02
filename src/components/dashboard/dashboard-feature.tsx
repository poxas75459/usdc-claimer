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
    "4ygNH3GPjg6DFzACmq1ugyUpBqdEaGJgJAdHzCMMyiLs164zK1WBeYkdCUtVhBENP1fGHwqvvABnoB5HgEfF6jG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31RyBkaHCgrxdamqWRd4Lrq2hDAXHe8ujUaahUNVshqe38hSTYPPrVv9j2sTPNFKLBHBrf8QjW3Pw9FfvpiHisnV",
  "key1": "5eeAm1PmU3PJ6nUVuNjA8QydGJtVGfJTZac1ugyBC8mV2zFJ1mAbNwxGEmgxbszbtSzCmtLqkXDrSGWtDupvtKBw",
  "key2": "3VHonrwiS95Tby7DNK8zYQya77AgDvTLWJnoZgLA9wDTAeChUWcddN427LXHAD7aZoD4yR92USrX65N8YVrrqnXh",
  "key3": "2oC9yz4JtJaPAESLBKHDPKqFgDBpRcDnUX6AtdX9w4tsq77Cex9FnAmHdfGSneyMsn1Ntre7hQwUygSuQ7BRXTLR",
  "key4": "3BZUp6w8gfahi53hcGAfyesBMnzzxYM4aC3E65eUzyHtdMP1mSMH3sSXBNDQTxm5gXh35xAXK5aS4omxQCffpUcU",
  "key5": "5UhQHaU5pT8vzpjWwaH8jwsRF2VRCbvjymUTbeM3mFvwCqfCnhd3QPcdVEPojEE3o5QxZ2cX6uPWvTFrJWFdC9ut",
  "key6": "5FXpGnAeMQvYiJNpVgbTkChDUfhBdEHekZy4PfwjjF2UbunqYKVrq1kJ6zhhChEDMEfJWGxntTBUu1qYkLnYzFX6",
  "key7": "3bMK4SCPhg6KSYBDuVXc2kqKAsAWHtvMo1kudyc5zhsehrmqgmH1BP1WigZ2pNwx16wsaVG7QwarGWVVrGJtY35U",
  "key8": "4D7QQsGoQ1FLaHarBDiNWqJo3hxkbQ1DRHDUUBkHWk6AiMb2mref5Wj3pU4cbPuh3zUN3RKC4L3zhLpEHCheZHK5",
  "key9": "5ucmuVbJ6ebvQ4oDN4mBtymY4zdYcAmpCrJGDDcMfFZeTcu69xTkG9GtqfN16igA1LfEy7evntihuBCuCar9LpXF",
  "key10": "4VWt2KQXLXGxq62BbmkDLrdsLfkXJeNwrC5U2FB9WEeGkscBShGVTpt2rDyMMJqWKRPErXpSV8pzMg3xrpiaVVya",
  "key11": "2fNPiqfVw2mtv3mvBRNenpVLDPMX2BJTgbJsdp62uTDY9kq9aLTMnEpFD1dKxfruF6hCf1SkLW3TgZhxBwLUQoKm",
  "key12": "5naiXRCdtu9YBU8JHdPtDHS47q2oMiVVfpYWf2hdS6qXdK4MXje6pgsyYY5Ga7DQQrAQVqiMa394skft5bHJsuzC",
  "key13": "3C9aFepFq81zoCFjwrAgUWFSFgn3jPzot1hE1YjWuBAGBcUbysAFrFH91zCxE9KtgbcKg5Cs6n2VuccfwJ3xJFFp",
  "key14": "WobrDnwj4SrpVFomNwgdkkvTi3Cmk9fYLVNe6rrJYjMPjsjGBUZB4fHVnrxpQthx8FqhBsBLgTUkuZtcYBDAzWZ",
  "key15": "2NUodpa84qJxHfVMNEA34HfrBXJham6hdjti9apdDhSJETkBExNSq8b7PAEyAR9yfvCsBsWYzHFSYPWtAWn92efY",
  "key16": "7hWMtf5zrio16WTdWmi7aw6K5YsZyaC7KS7q2qnJHMkeSUoxASCugQpmSMRDSdwJUjpaCPTPgwdzEjAsAMyFwqo",
  "key17": "3ggASN4LLZk3ujwtDwvJQDMXjfKb5VmreEyPN4sNDetKpyHK4VVKwC4T3r5MsDGHsxpavvcTSUxy7jXvK2gCz83p",
  "key18": "5PHUoH7WPrEB4FXwgLCZSybAwbQ13owFwYEvr6cgFpHx5EAsrrH37dydPBR97BeFhix94Rhd7B2tfZShKRHKKxw3",
  "key19": "D2Bb5bmEQvMhYeS7dr2XgGovqwFFwBjRkwgXmzfsPxizUtNtZsZ2CNp5Q2FG19wTA1yi8DXjmZemixx7tQwk7Uc",
  "key20": "32nT55XK2UeibQzqsChdUcQv7Cy3jpSPyN5nYYM44qZYUmzk6U8JTy4Y7AcRerNEwcJ5CqngcSatDGpMiqM2caTV",
  "key21": "29ymuiBvQxGqh5uZQq89oP1KvJzNAXvK4RHuatnVLqiFLsq5jUw1p87iEk8RegerT66im9b5ojnPHSGaNLKcNQ77",
  "key22": "28fSRdd11WFLLfZvBY6vmMwTWWfa7qMrgB5cePPrSiJuSUZ7tCXFiTodC3cdzAWtry9vrXDJG7Win9BQ8UU4wkVp",
  "key23": "d8BPpNRg8ANCEyGrek1Chzregb3ZWdLjghqYz7hAP7HvWTd7ChP2Z1HhS9AV56A7w4nx1fyECo1JyzV36vdUUYj",
  "key24": "4ZAWHHmFHPBmU6poU9cncr91vAazhc7wpnnfU5W3ESJgiEp5KmTjTxbiCn8dUhbZbaWdTGycwoTbhhj8TYgddECc",
  "key25": "237tkuV6ps9QbZi6wWuVpQ2J2tmUrgbVpgaQEJFFzMucQcrBTdmpEagPGAWTubk7r3v7wQ8b4CCjCdGjSDyWoQE6",
  "key26": "BBxXV6FRY3qKEqmxL7KDFitwZg6JBcYWJXAZF6znE4NAbMHY6MWUWg1PGUhUnTDazpgnTAiVCeGgSvaJt6UEmaL",
  "key27": "RNpMqh7nkini1xACANBq22YkF9VSVcoA2sgjuqbKBLJGL9SEoYGJzdRyCEHt86X6ZxuhoS8saN9vwSRZaU6Nhv8"
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
