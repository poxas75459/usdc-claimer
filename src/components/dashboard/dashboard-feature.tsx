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
    "3pj4WC3DTbXuQFUG38QJF5nXSB61JE2kPqCQgJFjLgQfNdokUFJqe2gweRdFDUdLrHwrprmEVAPcwn31wjAiLgRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cpvtbsquncKyio9jB3LEfCvsX1vnAbegCGpHaxNWspu3NkuLQH4k6Lwod9ysRExKo45s6gvuGd7LG6QCJSsMtjE",
  "key1": "3buqvfFYURsqJSXhYUxKPETbSEtHK6Enh4YDfsC8nGM8RJCEbD3pu3SDezny7BLxe7DL2YY7tDTYvsvzYQ1D3EV5",
  "key2": "52paQbey9xezDUTgQMwgEixZwW16mJWiru1zKGZ4UKDoSSaMA75whe5DDvL11kjD6o6U3zBv2iFcLriGTbuYJwcc",
  "key3": "2zr6TmZqrKyNhqdwjbHKXvz94tbUHtxNquYuZ5f7Nmi2n1kQ1mvM76PzPijZwgbuEfWXv1qt8mPvmXcD5NwzZxDD",
  "key4": "3JD3MJgyz1ARBgbBBJ3r7Ytb5JvYTWJZPALdsNr68QpP5rd2MerLuE1VReG2hfHJgxNpjgs1e3rDhn6WbRip4FkZ",
  "key5": "48n9BKayJiENzvLbnUX5sRxWcCr7d5oisAK9Nmj4upoVcgv8FEsPhX96bjQ8xm2Gd7aZPxjZ1ykXtrJBsPTKUBZn",
  "key6": "3BaSHEKLTADfZBMresyoPoB94M4Ga7JEByCjSEEecVYemf8jY6DRTUq52wWqypM59M5ay1Nhc7BNjN6maooE1AwA",
  "key7": "k8iYEo1KwPbquk4BUM9ibgGcZ34EPCsEoa5DCmqUrG5tr9wUCdD3czHMoRktLyjfuxcnWkYXnyWjr8HvyAd7RJx",
  "key8": "itNMBysQ9tZcR7SNcpBy5PkgS9fni6iSHBBPxuzqk9b7nWuU4dnPGGNN9GgbKCJJNsFtGCKy1JEDAn5HqkttdZA",
  "key9": "4kDPywv9RqUCiyxSKHFdK2fcW5QV1gA2nqTxKhESnR8DfT1Wp6bkDY7iWSuhTdhaTmDq3CWpowLUxjbisf2Jpujx",
  "key10": "3ympP4bLzk4KxutK7sW5atdiNiCbY4ZATWGMPDdUhA96oxpkjBwUk6ee9mqWnTjgWg19tkfPYL5MoTMULjXfQ37R",
  "key11": "fgWAUMStcTJEEGdivjEB3TtU5s83WJcjkud5WwfNqVE82CnqusjvhWrumTz3FsoVFPB6AvancFJBCVVrXLHKQFV",
  "key12": "5vUk9EP8dvP7eP3i2rfU3YtvSSfQBYGZqYR3vJDD3Skuc5MmUZHKjERCdZTjhne4fzpWPoqkWp9GvgGrkWGcFyiW",
  "key13": "2HFmUNwudJyUrNp3QTD4miduAjn4F2vztk8xzoPWxCikDKoqCRft1R2o8PbSAk4qbrxuvCXoyE3LPvahcKFsDM6p",
  "key14": "38aZ8HhYZa7wwWYGNECNc8v8Qh4foqVKdZprKuPfKS2CKdk3Mbgc61DgFpw9UM7i9hFMebNNKNuQ9Um7CKCM9h2R",
  "key15": "aZcN8nsV9Gcs5xEMWSra9LSdijbeMNkWuorWh6hXVrqBFhJYa82tM7Kajwm4etg1K7bRoF2aacsBjvZhENHrYm4",
  "key16": "51hXaXgpu9Lo9vgAB3WbLeGgVK5ZeeDBNqbnxdZPeihF2jP8hbuSL1ZrvoAUcp6G2Z3x2BxfScSUnCJTKfpy8ss1",
  "key17": "56KqtMNQFEzsENUWrfu32KQc9QbHEKJW1GupxNhVs29oDgjAuxKgbRYapBqHZciivw2WpdPwCnwfkL9YEm5bKEAJ",
  "key18": "32e6ikksC9nmDPyr1GeD3ZxKb5KZptxkQs3ZzLmQ3bs1rmobENgPH7nVZ2wrn3UVHiFeGwznPgARrPzBcBgfFCgy",
  "key19": "rQz73MqNSvBWk2xdXEjsjRjFabSVcMaTqkw8yjrck2vXBaM6msGpg1E2XYAPVBJAS7ZNVBeWnAbdmah5eYUxgYq",
  "key20": "gyZMY9PYLNjGGRcMGA5m7aeMtNCFfwuzik68bjYBUfZy3g5FsCL9x9puB2rrHHk5HVXaroxFdAshu4zb6DC3d4S",
  "key21": "5hsEYnDFhbRRTk77hZfYMMnvgUPCpLGxPGiYgkZRFAqCBq9WzqAJE8ACDJXBD6xJ9LTMHRNw3i23Wy5JdtoRiZdP",
  "key22": "4vbWkszbfjuq3UUnDNrnXajiYHVRy3j6EXqMbZ6fi6ga9YBiifPufgxUvpBYwKE84bqnXwdn3LLWmCRYovGmXH3G",
  "key23": "Ant8nKYULSQgJzWUVzmYbJF2RmVbYiuBbkJ1m7snVWQcxsWveepKvQe6zwrThEqPpbyaHmbWwAFATLxDDJymRnp",
  "key24": "JV43PbPc4fBfp9kGkxTv9k5N3HM5uMHG1SvKamiMsdxP4aUe5DJvZfpUeMfW2tazXsrZk9adcoe7gW89Bmjscce",
  "key25": "dQNiWjcXPHLwUrPXnCSZdmZ24fWLsTH5rp3i4axQWpkoKZwwsqSWCTWzkMZ9EtpU2Pw3HJ4NBjsCBcQK1Me1PmE",
  "key26": "2a1zAQFuao9e1vyFefnwvNid4Zqx2Db7m54mj2E4WxpzUDeNnBvpFZeJq4nEBZWVqq35U5UzwYp4A3Kgcarqy8dW",
  "key27": "4yKT1NAU1EYmjfdvJZCmhtoPW4VzByTVJsW1JzbZitiByQtKkTDmVE92Nr6x9e5K6JStwQF21kQ9Digxyt26719j",
  "key28": "4Wu2mVPR9znAEJZ1zKpwnu75m6Wt1zBPdwufcwKvjdSq1TvQfUwMm1UejGMZ8aXQqD6ymy41JDTbS9AkhqTvyc5o",
  "key29": "2NWjySiV5SDE2P3DmwD6xkhhEJCxZY3wpFfhNiwooSG3mBmsHjAYSMEeZBs4tzaDiKFLW5eapLQyjc7vfZykzB6o",
  "key30": "4vfAvvU43HdGtSWK9VZRFQoTW715ujrchaezKPRCGZpMndwKuj1TyNyXaoZK32kn5wXMwGJpTGRzdndrGh39iDJT",
  "key31": "4AQj4L7A5bPD8qWWkVekKMo4apn9BqBHaF2sKL1mukKdKYGMsxLjyJYv7WjaLjnQdZ1KGWFsLF8hPBU2gGHmgseB",
  "key32": "4zoMLcFPm6bUn9ZTvmzddSJEyTLbzfCqosURnKS1NVDNKgGqTUDyNCxLLPpwWxGFzPaBPGVgz3fdXMAU6oaYL18W",
  "key33": "PoNGjS7EkPGiHmtgtF1LJZeuQwY4sXEXWTV8eJb9VYAsPZXfNVhVzrJKYJwTWDfi9VdDCF4MnmxvcS1Bb8gJ84d",
  "key34": "5QwH4RFTHs9x6YSEvonjkcqCaP12HHQR9pkhCZfG3uCCZmsWEEDLZ3U8CH6XrKxkNChz94rzfB9F8qMXxgDwC5mE",
  "key35": "4qx3spJ6VJFArQmChsZi8LzUEqhEvuQxYTafpzF1WwGbzMAazef6kZzbt7wdiDG9Zsj6xKZr4WyaqccFB7Rd2vzn",
  "key36": "5GMLQxznzdSznY7njkYw7GauGx9Lewz6dHb7A4LMEmBa5HFtBumVRuApRu6yXWBAWgm1ccn9mnMtyYs1QRpVELBU",
  "key37": "5QjeLztesmVJCinppuaw8M7UnLrAHMvQRmEWGPD4Nq8A1MJwSTWL3pBA3DvauCefuB85pHVbr1U6D8GACmTrnfBe",
  "key38": "464oSRJvsmgwp6MBEvdLmzD2P6ikbAgHVycBar4UDEAZSW6WXs1oeEJfX54PP4Choq2T7K7nNdRjJDD9HhfnDNCb",
  "key39": "rgkKirBZS1mn3VpnNUGCMM1Ln2BVSuVx5NnhRoJwB8YehZ254EcQsfbx6j8LPfrZZjGrqQAWZMsmYbudxF3j1Tf",
  "key40": "51XewHmfgCMawJJUN6T967yo78P6k489hEgbtTpYWkS1r6S7Qj1aPRESZZ7NuYWpztrmNZgXhtMpuG15wfSK9euE",
  "key41": "2HDYT9wMDFuiz3CxZFmFDsH4qHroqsN3oFyTwghpEBZ2Lpye8V6cqVYMM1KfPLHoRpXif28sRxLmQNLztf3nBFuh"
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
