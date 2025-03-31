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
    "5B8pbUDhLWceYJW76xfU1p9nnVjvWFcM7gAFAVAXpFFPHCxX1jGzd3XqoRn5kEfSNwpbeSUQWHAvyifRpJF4Vy26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R4gPerVXKknTyz8uEpZQ3BHv35w1eLwrT8itKjqKMx2daBw5VNmRbmRUcd2JRXapiyzK2w9eubJYyTEyTkeUNNx",
  "key1": "5brUMPES8cfA1hXYWEvU1FP8QfAh4jQmyFSmTgS44R7b1NeWiaG5Am6axbAnzNEiXzigwAjowf26yZj2yqFaVpr4",
  "key2": "4esJEQxC2bRQuekfNdVoGrVJ8XsXQia8RJW3B2uyTf33Upm2mVmzYiVB3A4VQup4iU7LNuG1FH2qL5FazRvcRyrY",
  "key3": "3nohf8XgHtVsKT4juE98N7kBjVPZTRJWH16rWa7DPaHLYQdtGbWuz1KKBPYvAQXhFs2fYpXQkCm7XHw9kCWkDVNy",
  "key4": "28cRiW5zoywSKM9z1fSegonFvR6iip32KKHv5re7by4MGstG3ZGJA9za6h4ZpGHP5pq7XargbLzQQf472TnCVLdk",
  "key5": "3WHXMf9Rht1rZYqB4aDpBHocAGwPdQgfGHd2qXGHRQ9dqkwfyCjKEZ5if2p7tDyaKU8QhifApFgj5EK4EmHVQ4a9",
  "key6": "66Wvby62TwST8aHRU9G95UgG93buuVavNrFjk8udwYCjb3Uq3U97of6GXzqorieTq2zGvEB35woiEY5fiKQXFbHk",
  "key7": "4Mw9TNCTgGR2US1rBavRVXHTSnoRWRUyZinoctzs9AMyM9LL8GqhtqDr2YYPfeUKBPvLAsai59hZvvJshS3MiZaD",
  "key8": "iwySpEhxDxapYgLTeL6r2SVtobfdup7WkYB3BX8NFJMWKC22QYyU7VNoEWHRunU1DvF5hveR64sXuCgShabgH5K",
  "key9": "HqPC1N1fvB8ZNwsacdyCHB6UVFiSjieG6wF7eixs1Dwk3uwpx4evzDYZc36FvSd4Wy1JioavLEGvxdF5Y7JxC48",
  "key10": "5QptzYj2xdUuWM5yGDWyx4KKBq9n6PTsSfuR5o9QH7BBzLZUmYp5g9rm37Yryz5CWSEMiDaDn9pG7bZR6UwfSP6Y",
  "key11": "42xZ3YcxQPyD3qc9wGT5hq9PnErDwxhEff8bJ3fNtpZcVGuYK1f5M5xd7z4jVtmZNwz4mv5jdHicDymSGgYyGMJi",
  "key12": "3sVxMasRWconPhkmu3EudFamN9isyRJQHp1HBcXRxV5mhjkrrHR4BJ8vJ4gpZyXmJJZ4ZhSdFGz93TBj7tuikSUa",
  "key13": "39p6bk57F6pYh9zbwRPDgk8W3TuSVApvHaHgxv3Aj9HTXtJLU79fn8ET9eBiEBucD4cg1N7oczgsa3LiXcT2NbnK",
  "key14": "1Wuzc742fMqbwXqzFEcFjQFLLAuZq88fqCWPHDtaSUEgH4kSAVzfyUYanrSfv5H1AtkoJvgi4t9R8K8wwXrn6nx",
  "key15": "4a8TYFg5hKxNP7jEiupzSv5a8jLg3VpaJJ6V1s4J2W3NAYyG4v5GvGGyDHWmmcNBxvFjo5iY4YbSsGJ1HSRSx7To",
  "key16": "3sKipMm2FQse16caGzkFCS2JN2LRMKgb1rC7rNTUzPQhGhZnxMu6zd56VZUyjUzD9KgCPKrvdADHCzyXLvWJETQP",
  "key17": "4EKri4EtJcdCeU5BM4XmYWR3PwX7VjYB2H3UesiLE5M3n5rCzyNGaCnzzG9xnTshvqMiKsW2Uqx2AxjyEdunT7xY",
  "key18": "4SLUWZY5vH3sDdSfMoR7XjHtHs9czuqZMzSErxDVKvN9snc9BctuK2bGvqRQ4TcVMDhwe1gYD8fNx9eXNpUXjJ6e",
  "key19": "3xHwEWPGdADK5H6poGXdWxEh8MXz8JDPsDFGX3b213K7othrf3oscs8e6gh4oFinQRcUZCYtoE7Pj1buCFKVtpgK",
  "key20": "2M3azare2iPXgvYFkSJAkdFfkAkfx9EGNeJ5LM1LtpFX9iYLNKt7iTETbciTRGkBUywpxXVovnZevEZEB6g8u6oR",
  "key21": "3MHBijHqBPSJ2kuMDNh9CWxrLhgPpRQtL545R5evk54BGQ89ovkei2JvvbVUfVJnhxS126i61XWFJq8HGopy7Cbz",
  "key22": "4GJ7Q5yNQrDBTiRLGbntDm9gHV8E7o33iNf6h8TLVWzCSy2d3kW4NprWxbuw9FrHmNEk71x7RgDbZyWyNrPMz8iN",
  "key23": "3LaG5ULJ1bHW5wwWW8u2guCQXpi42PnSJYn4Xqm12ed9saXeKxTEqW4rPPV3iJ2kYM2WCjHwrprLC1apmEbtAtpd",
  "key24": "2g2MsrMvuvf6CTRg1ie2axgAXH6dUCkDntncNfCS4RSMmMxEYjpkA3GsjurZS4HGMj58B3XmtpNnco6bx5MBmbhi",
  "key25": "5Ci2wgFke6ZhUwSfixFED96rfXQvbpdDXx3RwHHJC1yZsGUckt2SicPnPiF1r6sgh6ZyMhfjXSzj1BH87E4RRPhG",
  "key26": "yPrEe36QpTAPBrMirmk7oHkhrW7HqBde9Tt3pV288bTrmmJUUsTq2Gu68BdvXYVtKpXFuPdnWGMCSJHRbaeFnwF",
  "key27": "FWEhXuoPGPA3VuXLNyMA7n1bRHVc17MxapQxhbCzX9Sj4rk6Hi1WAus6xKEU8nHUv3FEUUP4D2fi7sUVeDq1i51",
  "key28": "2DY8WKbUwC1d87Kpy2NikeLW2nDQYx1iPf7eikJworgYiioh4Hc3pS61gNqVwBedBNHcKAxhjCFioPq16n58xGhD",
  "key29": "63gaCVBXboQMMRNd27asnbcHbC6saghHX39hmQizw63SAZZ4a6SYXoDbc9LJ3GiS514vKTYptBRDiNtaiswoPkKW",
  "key30": "tTdmen6iBHFa73qobNfd5b8RJq9QSX6SHJ3SyYKsQTmnu6A7AV1XyFsc5jAP6rka6C9wN3rPvTZUnWNKWfRfwqX",
  "key31": "5Yz2fPnRCUBaj8V4cjrgRut5EBoFG7VLCGadQXs9vbQfLA7g9zh7RQ7gkyfMUHFAeLaeC3CUL56dMMRYnZHZFnjz",
  "key32": "nAsTwH1rgCWbE46eiFDK6d9ZByxZfMhx8hqGCHURML7ns1P4B6ugvy93S3HJ6i8V3po3TCNNp8EB8Jo8pkqMJZC",
  "key33": "YbC7VG8q1vacgbcannV4uQv6mP8sv6HzUNLTBNjFMEzkGvqjgXoHWpYAwjt7KrjZsDvemiMHZHi3ARX4JhrRRZo",
  "key34": "3Fy1LCquDXLeHcKgebZVj6c6JAkCn5wKuWcggfhLyS6ZyGv7WCbsSTVMGNzzfDGH6PoWNjzALg9zGzzJAjvry636",
  "key35": "5DzQEuyW3e4Qi8ZJbpwrqbzBg6Ma32reEkwX67c5idjJgqx6fDtJCL3aSzUyMstTKCK1x1VSSV4dBkP1WKrp6Nat"
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
