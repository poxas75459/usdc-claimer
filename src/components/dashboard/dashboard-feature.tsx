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
    "38MquY2XyzvxhdtNioBDZvz8ziG9V4GS52L6Yxpa8HrZtLPC3iddtUoXPXE4DNS66fBwfd7tkUfXHyWRvzBxd9o8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pnusiD8LmRsM7suFvBgHwyqqrJQqntXAxJJ2oWh3A2f7SqB7dxNcmFScJ8g9XU7xHWrVhRMip4Wx6NavDmKQWpE",
  "key1": "4UfCRdtzMSkNgUvSGxezdC7TR3H71djDziLWiHJvowHW26HDM4QMqjniQsEYMTNMZYk1efNCB7tWnaw7hhx6pNh6",
  "key2": "4bU137AekRiPzP9FcnEPPnyZprFHKADVRN17toMV3ZhPxPszkLGN1wk2xpBEkYCXfTvxZ5CdAYdwEHkVWvMQd5rx",
  "key3": "2F19Csajj36PNV6m3T637j35F9hsuFxyiobguo55F7dFGxdMfVX9y68d2ta7PV53JmqSuXfeefBBB73WVnRH5XXD",
  "key4": "gjQNCBGctPSaAvEAjw62tvEem6Ezmcf4amZk8WqA6fS9n22o8Q1UunUWhAq5mCXtMzJWS2PPCRUG2ZtoVpcoWEk",
  "key5": "2F2FMzw6F8MNxCuhaYmKqwWdqvpkaTvVb7jgySZhnnYoU2rk7UZ5aYHTrXTXnwiZCzoe98SXVDdAE17uxMxecCWg",
  "key6": "Nu2CbvYAfBkBpfWKdPGpFqeSEcFU1ULa3fskmCjLjKMhoN6umCamr6TNq4NLrLFT4BR3oAfLHKPAgbjBsnQhNYR",
  "key7": "4p7PBdW7sgeRu1KpVwX84Zzb83vE89g5vXHjYJ4ADqwMpHZKqVJATANyfTVsiCjFTaDRWEK3xbs5PNtznaSPmni",
  "key8": "4v6RLwxEpWvs397f8ARQs8vhvH4kPmtKZ2c5Utk3iDyfDE4ypJ8HKoSu2pm5qARz3kFYSF37UrnHuqsiRXW4RqD3",
  "key9": "5TkRahWBBrUoYCSyo2dvM88r7WbjdULEdCRhYVawxBYvh2ck5esFvyyMeBg1V5J1JPFCS8CFUePFFXz9UXutGDqo",
  "key10": "4iAjBM3miLL9X1VcqYZhPucJgCyAnFuz9moSDdTa8Uqhi8ECbHgGk27ydyR2hmV5FCcNAawydBPshRb2K4NFhikC",
  "key11": "5oTtbAbsJTdWUzMokkguVm8r9dWZkjvGUYisDN1RVufxbCX5eeb5uv9uupMCYcZEWHgLtSaU2ALTTXm61XDUP136",
  "key12": "WBBjacoTBuRELr4x9sMMyGn4uA4w6ZCd3kAptmHCyj28fo8hPd4VfKfNFjXTRQZHnSgjGFrYczBV359QBQmWAeM",
  "key13": "2B2YqLxVpZSXVXPKodtxDk8rsaACEuMyFswVb52No1ukYSva9sNocHwTiwNQXTb48Zg1HrmQU58AwrRsywetmFFU",
  "key14": "4NQR6HGnT2qgS5bd6gdKwdnqse4Q2XDDvcTcaDKJRK1w7c7zivVUidy289HMtA3puq5dKZf2TCm3jiwCGFvZnoqt",
  "key15": "42NN7VbMe9MDsMPd9r7MMY3sfZUDTgPjupKYuykPE1iRYJ5RwudBMK42WGhbSzLmRHvEkM8dd8qYpNesdmwKSd8N",
  "key16": "SGvqCzGMzdNu6r4XBkgk9L9JokV8a5w9UtoY9RsE1GjwHTJz9yox4HGRLZ28LcxJpcEWGbxwAbxiJwtMBVb9EK1",
  "key17": "5f1wzrX76jiotAmerXuyeibAghwHDn1pA6AFaM6Je2atoiXXvzwgnDAZFftKSJLX1jhmTt2anjqHFBfW7HemsqXP",
  "key18": "4FLxxHJWPNqZyzW1Hivr7yK2xtpwxUngahfL3Hdhp2E1ctcUZ4uXoz4iA4C3KiGcuuv7LNWWjzrjXexvWMgU2Hry",
  "key19": "4qgeh7pfnmCqNYwvU2or4Qgu37psHnVUmFndqp3uuABTqUeDaw79ywwR99Bxfo3NUSLRTdrUaJedVtknodTMiDhN",
  "key20": "67ferHDdwQwH6p8eEMzJEZKbshD8F9utUPjSiXucnHMofSvnybAAYM9hGiCTbeGQP6BZhXvkLbRw6GhE1LiBfogo",
  "key21": "25PW2vQe2Rw4q4rS8A69pqt128G9RFvNu5Pgu71Di5ee8UzDihfsoMmTi1tCXvPdV1F5UmfNp5TjoTGBudkGpkSr",
  "key22": "4kBWPpanMk8ZKRPXFzTngZNXpSYd8HCVMBhBZPoubBQyvVtp8Rs44Jdbe1fuqwJ84x18vWqVABBNnAy6CMNon2WH",
  "key23": "WxjXU4PcPoBJvhhTncyGsnZCKkrGv8A8BagDMDrQ62SatwrJF2v4gapv2sEbigxZcqWGq6cHXgEUUzRWniqrAAP",
  "key24": "5Qz3ds88UHvt8FTKfoWeaR2L3Cz8TVcv9qhJTAXyDue4rRCSKN2vp5cuJNDmeVVKWdXkbNfURiE5mnfbMdZd4ZwM",
  "key25": "4BNQfaYw8EzqKAJ4A7x19cD3Erh5Qf1FsUwZCdZxMCjZGFSQrwVjjP3NbNkjQoxe2m9YNtWtGtN7SDiNMaS5jsFh",
  "key26": "62o9hcWAYdU9jJWXu9KuMz3xBeEstKrktarmHF4LmAt7Wg3SpreZ6iGoBvBFWEDAyqViWzvYq29KJxKDS8YWpL5w",
  "key27": "53fxW4n51rqH9TKj1prc4JJkRtxWCdVro2SxbczNa1EpFg5kbuyLAREgwDQSTysmZWWGVkQBaZeMxWeT1dfLR4i6",
  "key28": "2vf51DgC6ySvNnXih2D89MapeErGXayFA82dzBoHY5sWiAyG2WgSv1F8b8GjYREdaYrfZZSjceMPMYYuu5JR7MTZ",
  "key29": "WnaRTNawHF6PafAqKkqnT8ankkN7uZLgaWso9NhQUCL6nYvx564HXgZm9BSiseC6MhThjJKZi1hoZA1Z74BLngf",
  "key30": "3Nm1Dq54vk6fvh3EZx7Ne3pjH3diTS2yDvhiLuMPAqWJCZq8MVfxC1wxLP2tSLPBXK4CaNQ7twrxfKxccHJCDkz1",
  "key31": "3XpxFE2sdLEL3AAckRHENMXhx8GRVEBcURtqur6PkiUY35hcnWFE86uGpMLDa7zJGvfPmPAEu3eHe9AF4nK2A5md",
  "key32": "3iBYj2jPMWTjcvN4dyR88fqB8L48WMkKn23FmT4f6SqFXagNNz5K8nVb51tGBBBxnEStKvAZ8jwmNvKd8LKbXazc",
  "key33": "4xP8gxWuYcrSvFSCYLoiMvJXfSdmvNaFR1DKb9FuHxM9dwoJgok1uiHwpVQrMYjuStsCNzwhdzQ5UvRfG2ykyUHF",
  "key34": "5v2Z9eyNY4Hau8Yuvuw6rB1UTQAxFV26LmtovYwr3pZ8KZDosbie4sdMK6edguFW1Y8QUNf1uqCiMBh44Pfe4jaA",
  "key35": "4yBDc8rwfZvLuYkjp7E9z4wE6krQvCrP1ZQ3KwKoVCMwgQUDE65V4JvM8KyviK5HexRLGai1P8msWjxTJFcCW9bw",
  "key36": "54v6vhqMGx9uSDcpdogo2vKLLT5TzZpEyawvku7BgSHGnzMxjDpmtsuZVABy3hJ8vWui34A29AUwzTW8ivLooLN1",
  "key37": "5pf1M7Qds2RqEuxURWMYyyE1KyoVuNoTenKTbaNvH4oohE4HzKTBoaopHKySJvamvTMpaTAGi2LkHxaomrRHaKDn",
  "key38": "5kR8RrXRM9Sy8oX3fzF5p3nsniHaoe3CUzsxtUqhruMiMLd9j9XmyU2nz2CbFriSixEJRr1JnsZwCBemLKwHRqro",
  "key39": "3ZN3mnGuHmotepyJkBA7wob6GSiAr8nqw8LMqeZ4NopT5LEW9NGpfBfVhR78JAG4QwtxJJRGsxUiW5s9tKF5YfZi",
  "key40": "4YfyMqekSy8KofDAbTNm8mANafFvbzRFyQEW5GHh9rvRgm8xVcz27cYPX4SKkLmDsXYqut3ASBooxPDA86BLD9Td",
  "key41": "3jxS2BhiuhwBs6ZGh11ZAFLJYbU6AywZ4LZ8bD6nTJLyKZGrCMaa4NjEc1g3pvgSftnz2eXZybma96KhMZQ5NLhx",
  "key42": "5iixuc6VoKm2vYcE4QdmegArq88RNzdsdGN37KSmQ8EJxTqoyzorcBmefSrtFa8xGUK3hxNeGN2YRpuGzEHG8VYG",
  "key43": "36tW96jUZ37MeGHJN5erqM7LmuhB3LR7j4sj4LZqRZTJmsi5kFscbXDkXgm7UtNU2EzMGddiVZ5AhTcbx4PAKYiX",
  "key44": "4pYHirTr3rRtREURzdqNL1C4wNY2kZV9Jo81yGTS6jzn65S87QHEijpnEkhnDeu11ziGHAgu7yQZfbwS8kJZ3WUA"
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
