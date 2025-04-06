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
    "4tfBjwVnCwXH2WN7B5rrxH5gqJ82nv2wYyX9yE1a1SSfx65Bwv8ewgbTZ6rspPtj4ADR38PSNbNT6u8ZZk65jreU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n1kF2dBChFtCmNuYQY6TCF4r4vNLbv71zDedM8buAyFWoTgxA9SAB62C33cTbcuLyP6hJpPGTrMv5pKsp44zXdC",
  "key1": "4VvKXbnxXkDWsK4tfFbX4SvhWs1CWgQNaLb394Yf4d2Pk4ffMmLCym1qcuVYzD52uBoXgbYy8hQ2agA9W2ZcUBz7",
  "key2": "2dBmfLBkm6sCAMbB9wsNZfeVQ7YDcpz1CpEpFxuRBGNhEhLYap9sH531UngYMz1GExm4pp6F9E5FP6yZwRuHfyuq",
  "key3": "3RttQR6c1Bn9nQ9wBVyyqfvKcTsNzm3h6a7oyjfEVry233J4suvyeC5W3G59sVecRfmiZYwJWbV2CuFPm5XNcrmG",
  "key4": "kwCZdo8Jutwgf3nMS1VSco9tZpnQ5hdqvrhFDdJ48foCPRuBygKu2h88NxBa8B2fb1u6KotrCmVKeftd5BFkUzH",
  "key5": "4ety1NnwkTa2AawcNb2gmXMbTrYEntnMGL9FXH24aCXf3wuhhpq68ETG1jMT9e16z8ufTwZceA1oA5335tNmU33M",
  "key6": "fwDbrbyXtMM2yd43P3md5X2zsKKN8mDty8hMk3yXfF425pcVEvjoqfm2t5DDSWdzz2DniFkvorPvPEFmuMPJ9Dy",
  "key7": "2jAMnorbfT62z7R1Dc4Hew2kNvx5w9Aci7vocWhtWGLBVC3Kt3xiXhcaBQbQNbykqbyf16F1YUUgy4iDHrqG8dh9",
  "key8": "KCiXxtobKodiD6dAnWC4b3wN8xriCLUZr4xuEZgqUZzAQJtMNwyFeWdnFuWDEyXne81wMMHPy8Fku36HuyByCY6",
  "key9": "4dDBb6uveaLjSot872oDD2UvJAddUZpiuC6ocKyym954UqWmPvqLG7FbqBkzmFfK9bS2wdEBLMBHXcvdj2Ggy18E",
  "key10": "4WuMKdYdzWn98EW1b7tv28C37ZL4mGxZ2j33STyprXX7irmRmGz5j4MNY1rBwUf2qYqRacYQXLCruuZ7qYq2oKbp",
  "key11": "Z38w67gNDgn3BxGJLUDVu81T7E4MJCrGUWQPidJMK8LzywnhCjyhvXUCkZYamBNHhdKPCshp5GbzuXkS3kfrRP4",
  "key12": "3JRbQ8W2CP55SgMm3suXDdkCcbRuQJbcu9RGUfRTv6Tr5z3LXmxze9ECfF8kahBUR5zipehKAnMgJgSqTkkgSCYo",
  "key13": "4jduEBesAc4tfCx2BBGLs421zQB9YEWbvrjMqrMxtTP81bip9oK2VypBVjucJCLaAAakj63nansCQSafbCnhDLrF",
  "key14": "3k17hJ3iYxjn8YH2m1jiGF1SpnpPSf19aQ2qGm7bRsxXjpTUcAPgwDJf8Zr9seU7NeXTtcMeWRmVVaiWBvdxFTD3",
  "key15": "PT6NxJqmU8wwCP5xz5bqBhQfBc56AWxhzwpg6zBDEHnTzfyQHC3oDRLvVRco53NFhodCjvhxv5Wf34Y9BqwDjBC",
  "key16": "PC6B7mVFzs63j1cyvKxaAdhZUmUKizfa5rEuBb6hTSdfhd9LYtUDncvNnfHo5hD2R6LUnHQ1MHfzekShZQSSPsJ",
  "key17": "6uPxiwxzDF8KW3qs4BWgjHjaNRgQUMZ2mNk2MwWxvn2AXnvVYG9ojCBFL4cGahxN5SMxfEEsz3kMfstA7idik86",
  "key18": "4sMo6JxLpzaijRrnq5gRvL7PH1aUCopeC8umLCV4xLdu6QJZYj4gpA3VdjeS7XZQQk3fBS4bq4cZgZb6A1Vp3BrZ",
  "key19": "2vVSVJ6EQubqJDjuCpqAPTVvdiAtzWMvdTxpZLYg89Y6Cch4YPbvMmMscbXzqmAZwQAW9SHu5RRyDSFUzE7FJFgG",
  "key20": "27j4oJNnwQS74LmBT5o8rFYcSvTumKtd879k9FnbP9xykGCxdEeKgZvQNLwUmEtYhkk46qyfU5mLyML7gzBrVxjk",
  "key21": "5wXFt976WnM2jzKiPW8UA8wESi5DPSrdDmV3sg7SjDumwc7BJCtfRCukVPePAH3uyRvhMVhFmk6MDEHZcScT46Zh",
  "key22": "3mn4D38VFrdbo96V3bFj7JL6ermxNizkSTEwvzJuTa8WoWpFjLuAzhkQZBsYR7m3Nfvy1Aw9ZZiftuDssRka1fHr",
  "key23": "2HGubuQUihwnZsqdgtTwPrC6M4S5N6WNK8xqfBHuKjJ28iAc2g2tqWpMe5oNpQdkgeYoBmiZ1rWHZZx4p6NBWqSb",
  "key24": "4B3erBYWptenJGhsHHw7LXAf4YM4CS3RG4eznTrb443ZfovBp6K1DBgPPjYv4yvSGsH3uAhGKczdpHPTE8CiST8K",
  "key25": "zEycQksRohS48eeS9NaYtWZwebiZZHZzsPEmobSs45dgL2drocwgwWqd4WCLTLC6B69wdr7FkX6a5XNKxMiYYjV",
  "key26": "2NBJ9bhkVGqBpMUvYpRMkojo8LjypHASJjchSx1DHzzpHxRvdecKJPxgBvpivSLVTdtCmJCyU1a3DjBrZ9GUGX8H",
  "key27": "3LVt5we1QWqzwRDgoyGThkY1fnyDvV1sPvRjXCBSbqhtdQHdxz7Gvhro67U6guUMAvEaDa2wB96Xq3BKWPkQ9Jq9",
  "key28": "5vcyh4hTY67FTtHEGsLaYQ1je3HGxVVe3ZDPztnQXrkGT4EJZVZQGDwB3QYRMWinKzNe3UuKDUkgcsD2kNdMNQyV",
  "key29": "Ta9Thk1KoSZMHK91stbNND8iYoRV7eRZMjHpPLnN2v5QZ6AkSfxpE5M4mCHci8HSmcoDxYFN1AeATgzgq2F2U21"
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
