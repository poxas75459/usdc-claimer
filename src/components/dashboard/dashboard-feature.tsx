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
    "3G7NfXafpEz2pLczTDYfDvhfwNBg8fVwfwjUnR8dso3bJu6c43qGwMBhM5LkT7CDijGgm2KTQiEacZNUK7jRxqQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HS2kAr42s7LrHZMEDvtxKFjGEbPdsCL3H9mbKKaTtKT5Lxm3dGtNiv78NHFLCtP6b2xeHjqwe1keJ7bL4rZapQU",
  "key1": "2wWND2RUksdqzmsA7nbndgE78zESdjgCZkKdX6fYurMKYmDhGqtvxzxGPwXCSNvSuP97jAEtLJA7iZwvcGEb2zRv",
  "key2": "2aws3PZ2eW3PicruqdaGwwCsh3eCSLmcEt8kGkrbbVABSkFyWAKnuWDTzSCy7N98KN6jkhiadHbgdFErE34699iZ",
  "key3": "2yJVGWaBW5cmwNEVsKpbpFqhM19kHMC2jMigcc5HFV7efmCXdYWz5CZ6spPozuMADpXyJ71aDm7rCvkurkfo545u",
  "key4": "2fYEHb2QTFa8FmH8FRA6YxdXGPAi1wTEWGZMMKsaVsVMqEaxeSQnDsiR8a2hYtX19eAKdSaT5Gge8AuZNAnvrYMu",
  "key5": "5J3nZxJ719ZnUY3qJ2GGPTYmtKgW11wQ59LmNnVYCfiqTjYQexEio7FyH78zbag8Zyw97VezEoiqggwY9Swq8g5S",
  "key6": "23PUcmopYe1xEbCjkKRBQuSg4xbv7KbZ4DAoEQSBEgLfd1jMM7XMMNHBYgZ6Pc5Wfb5dLRe6xVTsWR9xZtjqEZeM",
  "key7": "3ZxG1gNYNWT8wujSdoR51jz2LAcDJre8n3K5Xy7DETi1XHWm4hfmWTK7oPmVioKPmqnHZeA8A6swrgNpPRJzQkK3",
  "key8": "4Qu3TpYuVjDsffJAA3ybgqJyPNJcXZLM7xehm8xrc3bzRGgyRoRW7wSAcX7GbNcoLey1qhBSYi7kmZhySRW6UAGu",
  "key9": "2sdVARbc7DyKquupWAmwBQvdMQoDD9nFyHPpHy3Xz9YVUe4JJnVo2qLYNQJaWwyCcK6eG7JaDh6BwPw8R5XUCcc5",
  "key10": "23MK6gzgg1fwUwcJnLwWYhphXbawXm3CufBcozbkfsc9gfNUCdZr2cBDrKQGppJWKEWTk5mvibLZP7WSqN4Z7mh3",
  "key11": "3K2ZWMWoXue58SWYN5KQAxw7emxx5qwatwvXRxkajwqzvcizbsoi1ofXECaH9FSZQbBzr6b5NZK5Gnj3YAJqDqoX",
  "key12": "2gTiam24r42u7aCGqiNNyFxDszwsdRByv75fg9HQxp9waujV778opu6Du554y4ycAMPf2fgURb1ESt5F2ybf2t3E",
  "key13": "RfLXRcLB1MCEp6WCJaghHTEor8vD1BtYPSNjaXrhyKTs7pD3oRePueErcGEYBaSjnjRYzkBnwReR7sF5AsVVvyF",
  "key14": "rgEw6FwoRZTzXV7Fp6zkmW3bXDhJnjRsZ5C1EnVVgpdB35HasBMRxa3BbAcTb1y6K56kPhX1dmofx1a2P2bPvdv",
  "key15": "3uAxAMQrKF65pkY82KgpQpNsr7ZjkiM9Fkr56GEwb9w9k4tPRdj1MVB7ZzB2aXeSFX32x9BvKDFeMNVgSH2VMvrP",
  "key16": "MVdsrbKmtcBtLXXQiqd5KbMd92Xcm8UobgodRQ8UC4Fgod1UcQRsWC9RvcZ9p2yrdJqNjxLbSinBF4SjPQMruK9",
  "key17": "3DSZFF4vjh7LzokN1Yj71mTStMFVmM1s8FfpdJeN4SRwaV1tdjz3H4bx89fu9864sd3eNor1iB8RojHkZwBej8q3",
  "key18": "3ZBrYc2D6JF3zp2E3U4Uov2E6CMhEzWqor1SxoSVJHPphjqzRRLPVjakZybQHGD3bDCSMg7RVu97oeT6hrcRbXtK",
  "key19": "63Rq7JsLn9n3xrsxGWxDMuvgGdeNQhequWrErnRe8ePCD9uvYi5DmAtpWJEhKUiV7VJt9UXs3Ajbp4owGEQLp3NB",
  "key20": "5rMun2ZJTZbphJCktzfzffxERA7PcvrUP6axTxnHEfE2odntYkcV55tuDGJtKoUqkED77A1Nr45XE6jtPJjZEfVM",
  "key21": "x6vChZzbqvpgGJFrEHq7UGcxefr6zdrfiggiCJPoqgBwXnZtusRWYyaHP6onpZnFqwnSSWSQxZUPHiaPWdfbwAA",
  "key22": "2hd6xdqRPRxV8RkDqUQSE6cMXJjhvyNN8i4BjCJZUUpyx8Yh9vP9GBQF94BsKuDTdiL9pz3pxF6u2sndHu142aa9",
  "key23": "3KS1JrYRmCryZ1VdkCWMjdDUA31bUEixLUYK5jxsReAGftwn892J5E5QonwbPcz1Rbe37Ti6F6AiKBEB56aQxRto",
  "key24": "4KgSc9F4VA4CpyRff1n7xJ4gqvtMwRAmzZNjDiyFVC5bL8SVp4BmcQMv3t4NfBMe4cr5wT8ci1RXL7Gdmh6sD1TB",
  "key25": "24joW2gGcZvmmcAPjKRZGocY9qkiGP7p2Bbp5fTc8CCSuhJzx8eFRKFxMpNT7emRaE8TCKMpo8JSJ4uTuenAmZxg",
  "key26": "4hFKhFLKGxCXr2DU4icUoX3QbnZ59xrcKqvsTiUXLobUXeNkutvBXHnuhjkD6v48oJKpM3MzYo96wB1mMLZuU596",
  "key27": "4fvsmvgTbatXYKJ5JGDTioxRFE23gtzKTkaAJPdGTMMir3FdTMYEHncNuBXi1oDrYQE8Rxpr38LubC1mzssAS6gB",
  "key28": "2V1pCk3KEHsJLzJTNvTxZtNdPkgkCipBkAy88CdzCTJV4k6ZmMppCg45exPgd8R8XsUEgYqnXSvN3T83TuUwJbiP",
  "key29": "Hw9CAoDuVVktN94BPJJyo6NS1LB9vm7852U88P3fDu9gS6AFoSAL7VsGdjqNdALrbbdAzufbGRFNBYSCVJRF6Sy",
  "key30": "3nMR3S4sn476VhMAZaT5DRsrBm3AfHjSMYn3pLB3X23uF3Q18w6mYWQYcb9GbtBpz8PJ48v3jVDMjVZdrnhPj7Ve",
  "key31": "5gZEcxRPYnjZCKR8LDPz7WUvSj1GCwozfMBoEUtepVYNUBiKeo4Qc9Xn8ti373xp6EkbSTeyvMtfXEqo8arb7AJh",
  "key32": "5U8o6u1Kaw2BzHevdUmP25QDT9GGU6atZwxuuYwkprQhyTQ1xHBmMZDmcDNoh3aWwp2kbTSvWdZ7SRWPEYQMFwHH",
  "key33": "2u19FeyybueFgUM5zepCdqdVLcaq4Rv9BThTWPkLq3U45dmSfeTGbagquBFNakNZycWGMYqGHrSNU7CF6nEXFVSh",
  "key34": "4Jp48gkAJvvjLepSnbAYDpdEt8hJcdExh95tL3ACKGXGXBwhuvPZGjRo7QLdpHvaYtJK8QXbGypdcJ3hu6p2BLp7",
  "key35": "aFtGRdJtPASwL4fDagZFMR1EvYvFrczWwRKCZZs4Jy5JQodfrMTnQfqwEzbZjsdbR5JrHUmaJ4wRExB67EfM9oL",
  "key36": "2vUpFWmhopk3sEK6FT1Bzo3Bt6UuVxX7fY636aZrnagbQd1cDMUTrcx5zUarQ1C94arTZS9Cxg1S7TdHfqR8bqNd",
  "key37": "2RaR3mSSMAkxkMBjDsrGN5x7bLFzLf2tGssfPx5psN55R3MYH6fyJ4uYELsgWpxF1RUP4C55nf8gr3XzkcyGXbbR"
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
