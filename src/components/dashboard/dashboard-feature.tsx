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
    "3GukXbb6HBfzsomC6FEYKJJQUpbk8DbEXVBvxdv1TBr5nwtKezXxZwVT2A5uy77xSSvH48NLvAaQZtmSF52ygnar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jwK47Pva9MM9kFrbzJLHJUh1wDNb2P9NJSRm44V92WyeR8pr5Xhb2gLyUKwFazxDdam6rJU4w6f8o2w2XtaSBw8",
  "key1": "3qbsjT8qH3RWQe3Xc6CTZbuV7vcy7dDHk5jcaGE5nNBaQ9jL7QCNDx2H5BcLPyJD6iDrGU7Y6iY8reVJd7Ze4Byh",
  "key2": "5DJxV3dDpAdUVYLsK19Mi56qQSXgNabUQijz9dkWB8uAHKVxSiC12ajbHDR89xYwPniest6ZqtbFWxfdXPNRo7X1",
  "key3": "5z5y4HZ2jYbPRinDwAp2J8jmhgRomAGd4JHsFKFnsPdzpu8fCrH9H11ucLqNWuh1N6qoKexZ84XHenbbxS9wb8bW",
  "key4": "3puERx2LHd8VKAwfyg7NHRCgHqjtQCeUb9c4LSVzeajv3jaqZPsxK2ZG3otk8GXeBDqkMQb8ZPQB9T6svbX1F3df",
  "key5": "2S59d75WLV4mEG2AY5KoLGaRVD54Qe9ETdUac9gTm8xHG9Pcb1QWTnStux6uuSW7PrSe889tVP8mFzG8XCwq4D8p",
  "key6": "2tm1tTdvhCYMGnpoLu3vpgAHe49GCncKx96u5kz7ts38QXG66jV1aj4rtN7RtGB8bzuYAxQoSxwHmkgAwBm36QKz",
  "key7": "4YZNAi61NepSM4mH1aKhjepZnPgUbU1V4ZuVjBZ5YGHTtjjKSnBWeCy3LLtUXue9xYfmgbNcUXj3koYdLX3fzTC9",
  "key8": "4rDYdHAjgrWKhNdfmYHyVF9DLMfwYZhJGSusSUXMipCQaU1je55934qzEzEzLfbjXQHmFRWP21ofXBTrAnBwQKB2",
  "key9": "3cqXSLgCXGoe2M3uG6B74UWvTSbMRn9kt5Kjy3TZP4v1AumFh9ZdbgJ9mSkQAhFh71TqGF7BcYVD68vdxjSXhZNX",
  "key10": "3gtkoLVreLSTw9qZB4b1GAbjB4AKoNyaTG6PFci9VmgN6vcTSD3UV9pZREjrGw2SnVu7KFFB5Nu5DMqmMvCTaVr8",
  "key11": "zuib53es1wuHNdRv1oo589X9oi8J2P8Ct4CqjKrqzXbmK1oSv442XfYPGeoYYowYiido2yiJXPiU2yCnPSXh6tA",
  "key12": "4U5cA5bhgGMcbfmaRzheqbppq5ns22Nv2o3JPGDXbYjZCdo1TG8fR5s36JJ5jeNnaQUcfuMiVzdtWvCss6EKiMjN",
  "key13": "2DCdncjd16NAPFuwTq4cS7ywQR7tG5W2LvQQq79eDY9oEsFxaxAYaXNVaC1bq2wMxyBSj8dJ2m5cHrfY8NphT7f2",
  "key14": "7k8h2XPzi1Mu68NqJ2a4yXAvMfuFXDEc3exoRhuZ4PkWFRwhzANBQ94a2G6URZp52r7T8vuhQ4bagWNot4gKsRz",
  "key15": "52c5gJmMLaeaxVE5DpZrRGctc2aAVX6YDtnoxSkoMoNZNKntgdDBN2Dnj35VeVy6yDNk9G9UToEh4ETqb5KDxRRF",
  "key16": "3xiwPjqLUyW2ueYEYHxTTTukLMNecXGHCQmnK28PPBKDphrwsmqP9gNqGruVKa8Mvd66Gon9ezoWpySUgtwhmQJx",
  "key17": "5axLgcwVVyzBWoJ2geWM97eBCpvb6j5ErPJNsvDpSPFxB25ae4gC9ymggywPxYF8kvF7xpLAAC4Te6dGNoEFVHLF",
  "key18": "28Kc5TPbyb5TAcpthnXHjFh5USk31YMZqR4sPDucqfiGZqmjBEM26cVXYcfMccn5gm7tyrAuojMXBdrhVSR1DxrU",
  "key19": "5ju8GQYqio6VzdF8oJU5nV8mCofKQAweUNSLr6BRqJ2nQYp9yHHzviZ88qnEBZfsqCFWVTsxfPwmj1CZ8hjKAJWP",
  "key20": "4m6FwKwzBQqktPgQ812EmqktKKQcf7RDBd8sPFBDz6W9UYMZepGEgRGKQ9ee4m3opf9SQWz9RXdXG8GTweGh22Au",
  "key21": "4Tqv3ovj9RNxC9bihxCEZq4Xofsq7tuGYLfdQT1S2NGGceeXcGS5Zcd75kDcNFRoy1NWfucJU9rT2b7W3DeJDKmU",
  "key22": "3wnQKf7jtLNmJNjMGEHW19k2aeaQ9JezF8jY4muE4TFWzN8cZfDJHR5pbCn6oyTaJoUcTvBryznu29gRKDaY9Eyp",
  "key23": "4BSMUtiDR8omNvxLg1jHvYPorJkBdCCMbocdYqbWmd7RhbTafKfRtn5qRzEvreCo1AFfrEMcKKJ87pjNLgqsz3MH",
  "key24": "Sy8v7rTYMDG1jXCquyzYs8M4fDSKqFwdekgv9Tqrk11D6rFeHu9VWJa3udRg5xYBhixdw2zX6dejybCsrMKhxtG",
  "key25": "4tEY8UcNKp9wMxfmM3UkoYWTB1RsVZdGuN8x7pbWhwtU4sSPsfwgorMmM8HcdpNDuCUPkeSXu4CyKM4dWsPmgRHQ",
  "key26": "3CMBmRgvL9PVWwdCnb29tCGy3QTL8UW4HFCzj9xTrAm2u2HBEeD4PVqmFnUn7W2use42ttFfkPmRvJXhoc7FnEnm",
  "key27": "3RFZzrkCxoBoR3yCU32JAXEuWycwGE1Z3vuFMsHVATG625SEYrdbrpvTfAeZsgJjLb678FKpArnDQfJ4fYbQK7Zk",
  "key28": "2UGi238n6wxm3ZDn1uuRnp9A4gn2umTPgj5udcSrARYK9iupBpJcCjtPgRrTsLcNni9DA64z9B6kz8oJjAsFRJ9w",
  "key29": "2URQkZPv4vQCWQYpmmzW7PWBVQmh8yDPbHNfxnxdSw5wuP5XQecTqFtjX4aeaSbaQ8bAY5cqHszhJ3SLX3xkx4JZ",
  "key30": "2Sw9HqZwm5xHomFwurrA6iT5VaZTiN2LKNghPddCBndTBcskTsfQKNN6LcWizXC7ts8KF9y69iziemz9CnbAHgfC",
  "key31": "2xDr8iXVVt6wLrWcQXwZAL346w2VZoWHLYfSYNHkL6v1RRnvYtD2godMw8DEipxARU38bDj3hSkMvHvYYXugGL95",
  "key32": "2rK4yVSftfStC51wBNp2JCpvu6vndtWXN7bwWWMo8VZL6CWZi9JjdAj1UjTWsqK8zyxwzJv6xtZeTM7v6gAaqyv6",
  "key33": "64mpJRNfCfThwbzjGH6rzqjA5jbouF8wqXFzaXUQjy1ENft3BdwAqFntTkQEYMxHAXXUpN43nYnHUjDrFjnmY6Hk",
  "key34": "iLJdmsR3CQQa6HkAH6Rffwb47i81RV1mTR1aYFJrUKPqwMcL2Y85mAcUnkNx5YKLqfxjb5KZ2cVry6tA4m1jYGp",
  "key35": "4eZ5bX6STZDmSiWcMPAQHJymu8xXBmJTwZSKKJcLcdeeGZfqWQigJHJrHpjxhsT4X4V8emM9yHxsVsxrGnxadGYy",
  "key36": "2TocPSqAzf8ycRWt8QBqCnu2PoPiPpYJFLxe2GevRnUFxyXR34WLLCShJ4ZL4RkHKpyfprxKc484MbmajDmsMWqk",
  "key37": "5JZgcvDHoPwWqfWVJjiU5Ax6vKEd5KqrPfUxLbYTb1VgE2cEQZ3nVxzFeX9SKUSdoTCf86YcvLJUzXEpc6fkhAKX",
  "key38": "5qRp4dBdqmdKhzCFErtyBxKJuFRiyoQ259s8pkrrg4eKjVRoxWAVX9RfofEHSSFoCLfrfeAYxBFzzkB7PkzRrZ2o",
  "key39": "4QD6qq9z6ForweBBy6SeNz87A9v9b8Sxm1V31vq8EUt4tYyoRtnKZVikkUMoiDMjte7YeibevTeRBy15Ak9LpW3V",
  "key40": "3Tr6RB5VhtmYTnyy7oCi1yK9nQigBvMqKB2NkwsC6JFkqK1TQin5gEQcesh2eCCJbE5KnzQzp1tXBDQaCmLJcViw",
  "key41": "2TCZYGV9TuKXoqbNRsjKhsBGR2nCkovJpXioa9dxKG2rEPqjoveCPBSQGwAu4wWRYvopkineRLRRsttfeW8aUbHy",
  "key42": "2W4Fgod8zzmVKpU7DDNXBW1pP1T4MjuWyBWPbzy7hWGzhkTRDBBC3DiuM9Ef97bPGF4TLTYW61UTbD6KfJvDxenc",
  "key43": "v791AZyAhXWvmajvR4kMYvu5SgydfvW7AEC8KQx1ieHB5d95KTpJqi8eaKTrBpLhm4QGuac4e5kiWAKqNr5CP4Z"
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
