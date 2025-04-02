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
    "2YuuqacYjPjqyzwdJpCuvbWxGtf4iudor11JgUPCr8auGCMmkLoXezwh1ew71rJiHLWuzRQaE7wk2G8A4M5sArki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uPLpSDNfiZocKxPpTz792G4RymU5VLat19jR7Bpw6YCHxfCGw7zsrg2E1M2UirGYjJMvkK6JkRGnpt51bcrVB6n",
  "key1": "iPX8QCY8XwYD3UE2385fbdVLCbVrR3LXY5nzQ5GTTDWmXHGoMfG7oAZh79Prw1q3SN2tWZTiQ1AJaEqtErtC6t8",
  "key2": "4cvhKvpvMyvaLvWeTxgMjbXk7jRSLX6YRQ75651GpRBRVAJK152a5LGtwYpCF1uPkEqjyxoLrvqDF59wQcv6FM3r",
  "key3": "4Pc4RcGxt2YQjQTADQzquUmqWNnvoJVkqfjM4BME4PD6uVyyr7bUPV23ttTTocSMeZ5PcBGzP1kSh6XDTL8g63ii",
  "key4": "4y9mWDyL4u2DufKbf7rnrXkJkM1d3VFxC7e5JMHoJryWdFXwNmCt9xSor8mirxEHRFJ9ATDLKaNHE7hoSLs2wKQJ",
  "key5": "55kS7azTqCpdifsEzTQRBC4eSrFELKhJ8Y3hsi6JxUVmU6LgcgzHH8dmTBYYYW3T1cQxQdXt5JFA8oLrqknZjMmg",
  "key6": "38RJAicJoumEJctzNrXvTkhNa8Hqr4kPWfh7Vz8YW5CKdFHPpmzE4WMzjL8DRUFwiX1D2Dftuv3rVXrhN3kjqNZt",
  "key7": "4CneCoPpCYiURAuTfhnExKwr44bji2Mw7uPp74rUjC7dp5um4aumBDPU3THw9i7VHbamhzFc8jkZYHAJbuFcZyXF",
  "key8": "5iVJcA5aZr3M4sZSZce4Lfpq2JMJVj4KGptNuUN2NDJKr7pwkqUcvozFGizCL77tpeHe7GDrRih8ssYcWmudm6UQ",
  "key9": "4rrbXv7ihh62a7wLS2D8UtewBEhoVtVe7inpJkxctQnCjg7KZGJfgDbNXc5yYxChYfGovnUT9GKgsaTtHs3be1pS",
  "key10": "5jGPGawjbtKJttxB48pmznoVsZvvzoA6Gqk7zh1e7HtD4xtKzcr8xS9i7TUcx42HzNE4C1p3CXmmcSeVxuhPGTRL",
  "key11": "dwFrx3nVsw99U5eG7q8C8v3fiynJjNktA92gyPDiWRcFi4gik6no9A95uJsvjJaHtpJyqnJyuCH4mFFhHQQasW6",
  "key12": "2CTR6nYu2AEKD4Pm7cyexCem3HuKQ25fNmABDxy486gT7bVjrDwCyyCYMKucsFm5QVQfrrGETdeaduZP6RE4MSaH",
  "key13": "HvgWxLRQADCvXYqAF9xcoMtsK96EQq4CQPjz2hpeDbgpP4tzeUGiDymnpBvnr9zZx2gFBxA7GDbn7VPjUFd1v7o",
  "key14": "4N1nDHQ4L1S4ukUTsaYLTUv4Ck8Cm5KUf9PNE9fe3HnS7FUsg7e7rGY2wfcgdyYjWAc8tv4WJ4JVEp5Rp8LyoE27",
  "key15": "uA5zk7v3XLAHUpzSsmiYkf1pjLTVCFp7vPrYsp4jj1Gqej3qasoSa2GyT8PAZdPX2isPRxfEyjopw4A8RYvefi7",
  "key16": "4yNepqpDGLiBsZUZzCNtgfWVYiYNZ4f395ahGCMk5i6zEfsXHzKDdKBE2BYeHh4uXLXep8fye81gw8v3bvBsL7y5",
  "key17": "2F4cSVetjSCUhaTXg6gEDSpxMLXsyjNH6HSrcF4kfPmp6r1NFJqa27am72ajtqnXYHmd4ddWfGmtgpUeeoe87jtn",
  "key18": "3ioDsF3CxejUo1pZwgg9LosoGHWZGDWFytg6ZKbs68MgpvuUULdZqDXTczH2bBiHHV9rtqpGcEMJfAuNkyYMuoFx",
  "key19": "3iFeQp5athfdBLGAscQaVFYVECPAjqdqALGMD8aB9Z4bD8pxqhnb5jWKsgixtJXqVMwjb46dhmM388bPPA5rHXAe",
  "key20": "4YxS3vxZG7mkJzPgogFPhtXhruPTDyF496iGB15nwovA9FjFvYEBmTHDqtYcUqygSHtjDCHiFTmopv8Cjb1Uv1AG",
  "key21": "2safhjMH1Stbp3Z2QyLYw76LZ8YZX3ahk7dJg66bTrhNGFTEv6j9AEVApiBdBnDPa7YYFPZ2RnkWmomh3J1tdSEt",
  "key22": "4wzgm2nFYc97QVYagw6f2utCJ3iNoXCDmi1wa2AykapBUmP62ADyqsqbLnmWbqAArAzHuyGoXN33KEcDKHNsZo3k",
  "key23": "47xjk6CYFRCvi3wvMZfD9jjKkkqaMgkw2tmRg2Q9uBZBLvxzV2e6T9Fjqwfc7mSVCMFxLpcysqCikHNgSDoBfaQj",
  "key24": "247TbsHtxDu5bp6LKiUawYbhRCYVBh35C53gZWr7NbzJAMG7j5tX33p3oNc63xAJGQsGJJYn87wiJAYyipsXb5vQ",
  "key25": "Ee9f6r6tBotEwNWvJuRgp1iJcfMaLbUkpm14s6wheoMHL1EUbTKrqinRuuBZqCa1KrCwG9a5ffFVwqUQ4MhSpZC",
  "key26": "5DS1hoegfKarNS783vsWEKvjDUinBMpvPX6PGShmcHuLdTXwS5LoKprvwCLdoH5Pd7rVXZHotHrcmUKCieuiQLwq",
  "key27": "51asEvwgvJbs6LZNdNen3gnGgMkrfBZ5KULpCaVYZ1hc2MxCTtnFFM4v1jMZSwL5rnhJFwSkzZaX2wuCV2cU6CoR",
  "key28": "4mKFRwuEm4CF5wTXonADJe1jdVAV7MoqXvodyJY9CPUso16RoNdVKqEHM9yCEg4r3ZFhgv9FLnXi4JeRfS7HbUCX",
  "key29": "2bVKtH2TGbU6ii8ympcFMhyACkUgYbGq2mCgYyYNkHC7PyV9hu6jMVb813z8aEazjbSwj7rbshucgLDxh3qgBKNB",
  "key30": "3uDCger458o6BFTzMm4ANiEyXUxYUtd2eRiB6XCZNBUjL9rH9hriLX7StG2UefpxrmpmvGTviXfqmqxqxGkxMYVJ",
  "key31": "2ibEq8yuKSrerAWheHZAuHZM57p7oFKVKsDQ1BKeM1qg31i329xVmAZxQ86hdEXkvcMHrVd57X4gvPJPY1qfTXme",
  "key32": "5zzUQSHCZ5RE7X2DFH2QdZwyNmEDhY91XESNzYHqonYLrWhTjrGPQaBnte4Lu89NpNasqM9qtqRbacL4Hz1W1gVp"
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
