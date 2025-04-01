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
    "3suavp26fRXKkHhBL5Ym6LMjKMDSV8aWUS4Fd2gr1C2NAexxg3FXufCQbyGmGR6qGMkyANQPk5eRfBbq18qw414G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nuKhYtwKCtByAiSSzYtiCzubNhRZDBaSMmCz9PF5Po1Mj7H89JyJETXP6ZhWNtskzmrdEMFQv5WLp5KMJebFK8p",
  "key1": "5Kb3HJrgDji1v7jwaspVre78MMAc7PzCimGjjL2ibUv52eiTDHRhwL3ECRKowJLzj2HfngVpKRpZg22vw3Wkjgxh",
  "key2": "2dCTvDhko6VpC3ew1xoZnrsuWNRcLJuTUUDdvQVph1ofa8yxWsDXSVruVa8u2CnPcaMG2ASS5LCHbXvAmTsGTLNg",
  "key3": "5KvL4UPRpETjTWS9PxHHJCqhYGstPCyMmKteHKo4RSDoxni9JuvBY4Lq6GfhaLvhcu1QueFaVrucNwiSssNCKfmz",
  "key4": "k4RmAaejLxS65SSx4fcXQU9364zmsaYiYsMftoQLPYEweUp99wHX4veKqvuWAZ2YsBbW3gCQYek29ZkEEug3y96",
  "key5": "64fnsqBZipCeiGbCQFELMbwEDjrRprTZoMU4DvKA8UJsLmihdGs8Ut646r3MuahY5Zf34Pgx2X3pKfncUxJF3ZEU",
  "key6": "4cPPkbpfWhD72DpAuManNULDTJm9sdz1sBWarcuggCZJxREMfxLpHsYxeu3hHWpvKpgWFAnsCL9BBKJU4sdCde8y",
  "key7": "5beVLXFr5EzPvZzRJ2CEmRsf7yDMmix3XWaZmKCHT9mxLwFtTxCnYHzAvQYdRdyYH8SNtJiaRrEdHaNJhvnPjbcq",
  "key8": "3vwuBjwcKZz4bESw3iguVL7DMtr6j7ESH68pjs4rwzWuKbXwycWN2GoEFddoijBsjcyk9wE7YTzqwDVQF6ofk4HL",
  "key9": "2wsib3HSYgqeM8Tp5kr1jdK4XhLmsM9LL7eGwhoyd86LcX1nPAe5F4N8ahtKaFMU5dN9kG4CgnzjhCayYDdRigzG",
  "key10": "4SABNaQskDALXm1AZTzLV1imP3sZmAZvWxSWnVJDAFNL6SAqJSRdFNrpvTRkeAyv7GoujZbp4AZuvJe5JUNaiih7",
  "key11": "51He4jvAbGjU1L6Bhry3HSAF1JymHd6LmWhPQmNrif2aDgwCBxQPayjZKJPFDm52assC6WBxF6iMAMtxow5XqTju",
  "key12": "2XQV6xGseLobwibwND96Q8cS5mgxg3V1Ej9ypvMsFkDRKYF6ATY8RQJrHHJK5oteDrzRniqDxAkSLqqzF8wGTR3o",
  "key13": "38rPv4S1wmNvZAGTCL9j8eVquT4jzi8y8o7tFxQmyitx9chioP8BTVQqQzkGhSAcQzqJMUdZyu8q8bWC1ecdtrET",
  "key14": "2BTBNaRd6WTB4KjgcXJ65Z4t5GrLwWzzrkdRE2aiBmxA6EG9kGeqVaxEDw32PuKRrvW7WietLBGY7PHgzYQizZag",
  "key15": "2EmV1edjLgLynhGvocvoUvWgEPwMT8xkX8nn1BGwKUgvou6jEmFBDudDERDEfnARWSTp7XeGHLN8SpaJwYKmZXi8",
  "key16": "3E7RVbmb4KHDWaGtAH3ZZKDY4wxGGY4B547oCaoDXr33RS4sPi4xryXoLzXpMjKYbCiwCQWt38q2JKLBC8G35iiL",
  "key17": "5pC5CDpGTmxdp2ymt5XfPArXvxrEnwnvw3xr8awmWiYSbAMKhRh1fYenxMd7VaE71am99F1kr6GNk8D6vMA8znnL",
  "key18": "WbiUEWuhRdWRDxVsPyGYoHj1MkCEiJgLYq8UUp7Sq8H5fq5VLdX7NVSSzzcf7oGDxk7yNPT6LndYWGXQuuexo91",
  "key19": "35osmbnMYYcAodZ5hqHz4RGD5Nqbj4UF6vBMm51BUbt7aUEwK8yF7bMghzh6f9PDebpDXktjZHhZ7pTareqrXXvR",
  "key20": "3vvt2YwnSGo1LGaMFaykdeAniJQsTMmSyj5Ru1aBApLUZtvFyCEzycM8UEp8F4zRkR4xHydBap83mS761ZpZHZgN",
  "key21": "67hv78tpfsAag2gmeNq1i9bZWypMs6QHWjwRNBqtHW19bEHGxPzF9NmiJPhRHcroE57UELzhzhVSB1vUBY1hpX1E",
  "key22": "5HmGC1NRDkoaqVA9t3pb1hA2wxBaUFyEmLVoKTLBR9Xsrwx3anPqSDztJ4Uu8oRCZgFhCPfWe8J8ynDo7fBdho6c",
  "key23": "4DiZY1akwKQMUQaya9tEH9Xv4gU2ShRvXDnbPAFWMm2FTHqAbUgwqBPmTgcx7QFTcGgagaWG8gbY8Q9ipogzFpSJ",
  "key24": "4PBjqhUn4uMjC9a37uEXWcC9Qj24EWhKaAX93SP5oVzBUbpix8KtYSzcAy8stiknwRbWpEqYnoBfJT1ric2TWr6G",
  "key25": "3BzRCBm4nTr5Jhw5D6sSVbRy4m5KwVPUB7uk5u5vX7aVLmTFrqktAE5yUknZ2CzgTSLYPhpGjfKE663HaUdASxx7",
  "key26": "3t4wgN8ZRoaBeDdM8aYag4vSNJqAqr58QUkS8PYzQDunpyLpuSiRA6T8JHG1xUy5Z3g8U46UMxM7mHcR3oGeqmQa",
  "key27": "33oN5VdVfe7N1f2bVoKn4bLK9JxPvsSFDx89XNJsmvFMBFCobwBEsar88Wyd3yrDQDvnmaj2JfhPVLko2JqUJ2B5",
  "key28": "4tkhgTPdFBLJhQxJAUcUKcJxG7rH1ztzyfsJVq1H78UcVg6bpqMgXz26gDrxy436UD3CmKKcUt6YXwB6Jfn16pr2",
  "key29": "3pyXmyP1UxJvFgvhZvj2sS8129eLq53of69rSciyXwiXRqhfbWpfbjxq78Zc7pBQGwFrEBvS6zczeAdqCtKGVFHQ",
  "key30": "4HQqBYNJ8fm3y4d5wwTCzTwzep1X1agbNF2QioEAbumVtXz77j139omXPoCKbHbaXSt5zaC7G55P5CTRp2RNUecK",
  "key31": "4ZgEKJi92q69tW7wTtRthrEaqeZE8hoqozTsHdUdFEwcGozZzVt83LTetEko51fEdZVGL6fskWU59guv62jv1ADQ",
  "key32": "3BEC6Q6MT89KTRmHknVJLfS9v6ZXpgwBJdbr4D6ToGhSiKfNbC6EL5ZZj7PVPznj5utmhEwVbWsRvPgM9KjMKYHi",
  "key33": "5Zm9Bm1byqK8HnGUqKPBr7NaEXXix3Wg6LAZ7A4YtFc4rCn4A6Wniqmw8n9xMnQuyAhYZfjXAhk7uhNxJZnGV4AN",
  "key34": "ZfvA3MuDiqtV6dKmjZpjKzG2MdTUhmpgPwWS5UUF6MxWU8irxBVfpDxxmwFKFcjmnWRkfyoLSdUmenrUmoA5X22",
  "key35": "5Kpi4pMNppJ9rzEkz6SyfhreXwu9ostXaf9xHLXvBdgGySNSxnEcpkAENNJDkGtSk43GS2DJyminnYnH9ct7Dzyp",
  "key36": "2ZkjcYUxRQ3BAAseRF9ACpEkPXbHFSSe3WiDo7WHtVefoAZJb1BC45vZLXR19zaUnXAXuTtaKtnAv7FDUicyehKt"
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
