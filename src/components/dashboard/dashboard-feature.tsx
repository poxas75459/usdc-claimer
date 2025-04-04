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
    "z7fJpfUbQCzig7dg3t5VAwKSEB1nMF7KqVzH3kw8wCXrBgLVRiae3LBRTVqCa5J4mJ5Tj2RVFEdAGYPsHMPurZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ar5JP37EKA1jkdCWd9c4smo1CDQ7TYTyNjXMUxxVTj9bciszRgz1qGhTCKyJfzq31HDDHe4ZjnSDNJAktzcx99q",
  "key1": "5p4pV4KG8NM9pqzEC1E8AWHDiZdEnfQZVoMjVXoDPFcqpRKLRiyTWz3ccp7AAqZoPJiNPUUDfTrmdj8F6GrV7PgM",
  "key2": "5DNq4UU2D4kK9chXcybMmMNAaYM2y2wCbHjUUQWmJhr1uiUq4Av1gE7Rgs7ebBBzwamdFwnBfutA6fVwm2xfZMww",
  "key3": "4JEYXrHy8Yud7rirphCyRVY8Xc52K81Xs7gj2vurY2Ggdim9jkn1QXbu2e1Tue74CRYN4iYPrXxb4tgDcoMsh6fm",
  "key4": "4DzGhye5RkkwnAKvVDRDqaD3YLuPeKHj8gULNfmNNw7KQxzqWuoTcoe2uF4kNwHNTJzK9HFveMgC175x4JVu4YBG",
  "key5": "67EXeLg59AKhjp7TNXYJxX9XTWj8xGrdzSehv31yRESncwo2S6KLriX9WXdkkUbGdTnR8hS19YfwHLPYMX9d4SmX",
  "key6": "5vcy6iR64uAeLw83953UPfdjriwsdvegUvDfrspmZ3BS4npDn2N53rD7j8b4gcowiyrEXnGGP78589b5uH5L4n3w",
  "key7": "436Ao59PqG2V2gZoUjHww39odCpChnmapAQPqLYG1XwphrstrzCv4v6dfGTNNQ3TxcnXFp3AwoyrBb1XZVZW9DvG",
  "key8": "3LFr1jT3XWfsGzJRArP6E9MmrQssEjjXfFeSNHVvCuFLTDttvTPftW3Esf3BqVq6NtoSoZDmJmU6V3LhU21vxFkT",
  "key9": "4mgQymVYJyTRPcozHfHHWPhTXj33k2iKHy9bZjKVbMrGptDSKtY32LFZpLNLv9FnT84w9LY9niEdnCyaWDRPn6U6",
  "key10": "3HzkhYMGFaMnnLZQae1PGMD9N3kghwTiqdBmSYH6b32PMULxgNWbSSGoDhhUxR2B7CHwEhkQx5uMT4jMYtV5ZSKq",
  "key11": "26Airmrh3sxk5sBv2qBLxzwyfqYbxENvEJPFfGojGipgyVmpZakHpbgJ9RHRD7svtgNMGVDeeNbBhVKY16gZVbCk",
  "key12": "3rsXYTuJVC3qka4sPo79hdcRJ2vCqu45nmLTyCaStiPS1Ny3iqd2QmCRELXcrSCZnq7ZxG1XQwFGEGaqgwmqyCYD",
  "key13": "361fBKj7qJLTE3oqF3ysYwS12kc8u9aSQpcHGErboQBWMRTdzYvmWbo9P63yyUBZcWzcnoaGtYB1rRs4oWq3Thk7",
  "key14": "3s6NmLBEGkWmsjLpbskeiUvXn2jdBNNjEvLAixvyTMnphSXCJcc2HrehSZRWoRNm5igf3aYEqBNvEvyFTjB96QZd",
  "key15": "4vbvnJpr1m8cw51pLKoqSjvieNH1BmMmEmkeeoYn5Up4SypFPuxaLDudbGK1igNV8L8t4G9oTQCFvASsn8PAq3bn",
  "key16": "3xADTmDYtVBsp69fYzECSbft4ia2dYzv1ZfzjaazQK2eJweGXBbyDKA6WgEemvRKRecehZTdQC9TswWR4QSka7mA",
  "key17": "3qWjk6gbZV32hhbfg7GEPksqcKcY96zcuGmXqpvNFd2q8brWuZLvxP6J6magXfUJLzWJdyDaMrApAcjNogHvxf79",
  "key18": "2eCk6iWVq9xTw1WQxaM6A1hdRb7Yo3sjVuNXJKqV5Ry6uPqrXAzYbDxAPwEBmgxT7ZHxbHR8humpWHNJXhHo92ez",
  "key19": "4eTBJER25Nw4ZcHvKQeWZ8TsXqzx2uHNCtGipx8JxEJAbRAUj7vw3KYSWZbFXkLejYYdp4DXVYuE6Zj8vJtsUfWQ",
  "key20": "4Kc2RVafPMw62bhL1NDWm2PG4UHeh6pHgq1oYwe5buCXHT5ABSBYuCfQrZR7fr3nph78awUNTQRS9X6BJ1U31mSK",
  "key21": "2g3L11TsewpUZ9mP1g7PkCCh8NKQCd852D7Z61mR22kScJ1W1u3uY25LdiwwyTbp5Hit78KZTuQRK715nA8oJgwt",
  "key22": "3s6sNKoDGnx7ojhyogaNd78zGAG2DuND7aJ11d5mDvUCdPUYTu7URJ2kKV8JH3UrQpvfBHThf6TGDtg4TBeTcm5u",
  "key23": "KHxmi2LZDjPdXLer712qJdFNX6x4DcJuf36gQfps4B9ELfTXktiH3ZYmsuk4xatdgWUgqzAL45euAtUHVkZ4RBA",
  "key24": "33ZL3ECrMJnZRKWjSgwb5hCGRA4PSScChH7wdnt2L9VQAWAczXN4vUFhWkULPGyoHJz8L2DKLpT5oCEfEMB1QV3b",
  "key25": "3tJSDss2WCVzebPfEfF4h1yQMYT62XaG4xEgg7kCZznK1xtPASHKGV4jQtCBBAYrGniCFxu1tqMjMxYw7L8GFCVE",
  "key26": "29xpHeWkXt79QadHeSA39JKpAkcZ5RuCed4wwcxNuAGgyxtLmmkrX2phyNoKaFRLFMoVVfm91Ycwt7NhBL4fukjL",
  "key27": "RUPyBUyKi4qfWjD58cRPfy8ZhpMyxL3L7L3M9jRnQXM3iwagKdb4sUe1KUyreBiLrwgc4Bb4uKrXtr2xxXUY68Q",
  "key28": "535BV9W3LF9RLSzQHDyy3CAucTg1yRmt8AUG6eQFQ2jQq8Rm1q64zdYTfKqGsyDA1WuQY3RexXmTrQ1fswU9PTWk",
  "key29": "2sisQ45mB68werzNao1DUm94mvxRCdHq8KgdoF2iWJTk2Vc3dYRz8tjoLgFiRvQ6EazNiagME2FUYwtNX9vhrWgs",
  "key30": "5Y9G6PR7SB9Kb6UN7Se6jZuQXbtwc72amkj4buDxqJDgLhWnv6zzyfiHYBX9tMRxKj4Ld2jJDTo9VTNQnyDQz72N",
  "key31": "51HanRZErPmZG6fUj2CHj7kW4MAnb1f3HtK1BNTcb9xjiVmEAbDPiQZPEi7fbVzNUX815rhdXVeoDHentmht4uSL",
  "key32": "2LAMnY8uNNUyNjDGKCkeRKP49QV9GUTUMHJe5xoKk9jKqJp8Mg5dKyzuMWLVZVWAruvCUJLYUPejwMvWcqudGcPB",
  "key33": "43NHQhVwtfNgeq8p8seNzsovsx1b6hevCLdTaPSVqCqbBrR5FYprJd6mLBHLNNegV5rBvizC3vUXKjTDuBgeFDCe",
  "key34": "2cMXCtcPfmGn4rTfFZ78GguK2JdEgXKATMK3n7ByJbJnpGmxg2eYcQgRmEPQxb71K2hX1U6bbgd1qi3gL4gHni8q"
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
