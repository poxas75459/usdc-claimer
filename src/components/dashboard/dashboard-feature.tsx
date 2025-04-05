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
    "2kt3GAhRbmbRc5rhyGG662GArDakAmgfmd2tK6LZkEKDw7u613j2CKodiW3vkCb4RJjTxgMDqEKA2Qz7uQTNgnFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21SeYx1aMLqug7DSPSxcZxYfXqX6cCgiiKsA9FFgJhuYb7HKaTR3NWw1N9STNwVGsQNJjt5rYvJWvXQHoY8ddrTX",
  "key1": "2UgPDbVoGvsEbLacrpad48PyDYchJdxzYmX29gnDUxC24Beoxv3R4bB2M7WPQ5goNhmrJthgNGvukFMzBASAxa31",
  "key2": "61uy23EASjzdFvhmKxQAtQzyeYF19rDf8mVG34XQcGJEqPY9dTZk96pkT52rRp1k8TbkL1Lueizu9fgYW42yDbRv",
  "key3": "4KJvtR7Km4nwV3YRBe2ecjeZkhan9pwvNs8fxgpxZQrKAgvCDUZM5cvhmn92ve5uy9SL1jSUFY3TMRCZVLfrEasX",
  "key4": "2npBY4fM5xpAYxiXUerZ4LVGbNUZA9wZJe9jTnTyDDcpeDAeXGxKjKV61vRHk6mCFjFRSRaaCJVXpHHi727ZjPGH",
  "key5": "22NxVoF1wNxiCyhuM4k6sR96tZoQw89jymPQJXRNfKt99LWpHcknHdEBcwMoeuoJoZ5Hqb8HWcNMKYyNoP7ZGR4K",
  "key6": "3nsYEEysmDDK7pgiW99EHXMH7Ky5tgvNSGUsPLrBSFonjgto1DZnAaZt9gE4Ego3fwViu8YYTai5ws65UrVP87xr",
  "key7": "2LjqDnuBXnfbPscNCRiDjUAg7Aoh7bSZVj3ifx9GLSpkimXM8KvhA6UAJzNFpoce5hyTyWDNEqYYEvm5MGjCwH1y",
  "key8": "5gvHmCMcwaUeDXsmzPwDCffLuiSqTvYNebsnXDBcrwc445LjBoazHJrf5BoxqG4aqrEDtMJ2qnPBYH2oX99R7AXH",
  "key9": "3KbH3Zwk6GZyVDAbUsNJ8s9wVxGE3FUq59QBBegqvAK3pDvHkbjKwMEqpzSCppYE9Sa4V5j4Bh7zVqQNvgu8rmZf",
  "key10": "4xPtkxF5it6fc2tcUSLvDR8h8T7Gf6TfYMsMSjVLBAQ6oHKogU34z5TpNhYEz1UypQegjCLVVeM1J3C41JuSg2rf",
  "key11": "24J36pZU1HtrgDPH6zefmZMS2MFQnE5Fe2J34p44CKWDHHZjumTUCUUVEPxQH1juPJ4iPnExZTWeuhMvMspqtZQi",
  "key12": "28NdpqkpUJybQdo851wvbcnoMtcncXqk2uBuKwt8R1XccrmKZWixE6FyZm27eFobRH8Ch9nfh18juWi19hF59x3s",
  "key13": "2DJkcijcHtpkL7hh6CwhMVwq74icF6UDLYtt1SZAApKfzRR7U8UxVrLs41CfKKpECFPkAUhqiDVs9e8KZd59ppS",
  "key14": "2iyHVJXBstWzhEHy5Mw9wDQq5MAL3E8G17ybsenUSox4Te8yntDpbKRYUaCMBtCVvuMavGe32WoW1ThHx38wZH2h",
  "key15": "3k43N5SJg3GXGULXQpPU9LuXGzJVZ3k2UftWsqF1qSdC6GtccNnsXsnMJEdzwuDYjXg5RFKyKGjUHU44Qt5QtwKJ",
  "key16": "kP116emmqZuX4mVQHdGwHhNjwwcuTdHfMKHweMgHr4Gseq83xuuVE9wvt1L5v6iqvkfRffmRDZE47ThcSwDe2gf",
  "key17": "5ogHzUk5QiAyFEnVbmJks7P5BdWVAFLxSixWwzUe9aKHA4QmLHjzhZf1V35KnMq1ZhGbdRGwsqvFx5VB6Yu6p8xt",
  "key18": "4Qfyr3xmhU8M1KnHZoi1vNbjArypU2EejJ6rsiExVTw2aNFJ9xTF6CaKQadu9xZTkzMiTCMzXfeKtibLqB2tnpRA",
  "key19": "2te2x3VeVPz5fo6PBeVHPgXkTfQMYQVsj3vXG5vViST1bwf4tjYuqL3j4Cf4fe6AzAXWtXfA3Y8Y5VMiWZXD6u6D",
  "key20": "2RWu1Kk1UePB38ztvknaYqGDuvwzqDGjdNPHdLyrreU6FoXS7TReKaGeCm8JcnZGbhW52KbEz9PgLZNyjgAzrJ1R",
  "key21": "54uRBSWZGzY42LXYCYb2rG5VEhLGhkpXTck7Y89vQ4TCiBm4Gc8hwhUu1Mb4LJp9YocogqM7sjwRAoPi1159uv1N",
  "key22": "3y2nTTnKkoBwzBq2gP1uQwUnZLsUtdaJSGDgNrcBKAGRAyUq7P2dWmv2pnd1UrEFRfESqHRrxkkso8xL2jF5VyNV",
  "key23": "47HHfGG65V4Qpg57qKMsdyY1fm2VGoj1jUnf2CsHNmJvyxLYKFR434nFuZw8UQEhfZ8u7pvhV7ufufksEuzJEVJa",
  "key24": "2Z6dHSt987ZqgrLrVsJtALJpYituESP3ggbh1Upm43Gyr8XmNGHwsJr48fhtGnLtXV1CLXWupr9WWGw3y4NyFSSJ",
  "key25": "5JmK4mZKXkmpjp2qEMPgai38aFBkoJGNxv3sYLKxSCodT4Sw3z7DFHtUK4d38tbvYK5PGd6XcKXpbFKHFRXaDcjW",
  "key26": "2p95h7AAD2LzCVCANBskyjz1e6M3r572Vu2B24gYJe3JM2AZCrPisPqeFiDQ9n9vRGGnczvi2skA9emUCvuG6jfY",
  "key27": "3CZa5Eev2mFdrdvjLobtZ3an2PHk9MDpHcMaBfoNeEnkDvByFKbKYWDNAuVxgPwG9qXsNonext3b71YrnKm6zxek",
  "key28": "3zCQGbSRBbZCKdY5qPgsxkrYtKPY6eHwBgpCHMhCkLgxcic2e4oPF3pABNSprMboU6QrorjkYbC85uGYteosdrCh",
  "key29": "4axqSaZNuVUkRjyKQumuKAnHYHFgDGwj3v6dUGBHtShod8HbqnU6KVuG4iYEvPSqvVep9KdsoP4EvWRr2GGoumJi",
  "key30": "2zXNs5mgcFDo4zL8VZUcnCFpdJ8wMngyREyjaS9PcwPvkBQGN1x5S6gGn1P9uyJMDfRT13ZkezRTvcBs8hwUF3BD",
  "key31": "W6aPDjwRLmDkcajQ4yYmsK3jPD29Ep2o2DrPsjgG1ZkhYnepHLiAWztRUUNu2MjNadjJfSsrnvFFi5TLy1eHPJz",
  "key32": "2mHmVodoQkZFPrpRSFBkoPT4VVAG2bip3vAT741iEWVKqQiuUyDc6Ck7xNk2j49Ax6xa1XJ5tVZxaRdba8nDSKHx",
  "key33": "3jZe5pgpPzZGcSWWA1EHLUwrWtAzDpxmY4GY5PXXcdy8LAfNGSpDZYa9keiEnewyieYFGM429CRji4m8i8NPLu1h",
  "key34": "4Zm2ShKSYjxGAG1uQe7hkfwwRthJowz5MiKzGWfow1RoQxJz4fKLf7UzeYe5MwcCRvYHaGCFoE1hwkYZ6rAbRs57",
  "key35": "4NVdC1SE9GEayE5noQtCNUHjSAiB3oAMzfiwDHm9NfWf25paU6zVVKLd78FY9Dp77WBiBVLYEktmENV15Vd3h37Q",
  "key36": "5AcHzepeKECGu8i5QN1bfDH5smDwU2whxx3UL4BfKkq3ZEm8s325bRQ1S4cBbR9srZudbAibeLqhEMd19dSVTNs7",
  "key37": "LM1QtKaeVRmbbPw8dCiTdKad9VqndwgtzgH1aMwYvTxxYbDfAH2Fu8zffYLuwJTRSMhCYgscnwh3CUAzCfmDppg",
  "key38": "5Dbcc92rdi1rzm7GqCPzyYFieLToPv3fehug5t88dgckwkH8QGaFoyDWxZtoB3d7f1sZvGtamNwepfC7Yje1t5B8",
  "key39": "3QupsGvsvM2WQifTvBGX9yb2toEkZAUYWDV8VJhjAMDqtnBAx3aKBE7MYvTerLaEUMjmRtUjggBHXdhCPZgkfgaW",
  "key40": "5GnXX7VaqRSn5YeNNkQpyjTY69pZ17qAsGW9Pe5FWy1GPTmHTDufSQECMP1Pd1R54u9MSSLSfym7gDHDkEwg684S",
  "key41": "57RAuZUU3BjNrjQcQd4RrBnv3aXUzcCgaTVhDCXhHGft4F7JzJjyT2MGuso2oBH2femeiTwK4PS6c45Q5dtsMbj1"
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
