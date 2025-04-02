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
    "3ZzH581JeFad8DuGMzdmKv4mSDZHYAJtstkBjwdMwi8ZD42ANms3FD3iAFGic8De8kgekuxppZyJA3PnqmfKDD6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5njaseDYstMDd84dUXrXXd19AJrMvYNNVqdnQtcGrvsRA2oJ92h3dfVrrvBnSruCJnZwqJdZCP3BZomzWfxghLte",
  "key1": "4cymmw2MHtiNkxbamqrn3vp7Y3jH6bYuehPoY3Mt7W6ZMS2A4fJmTyuzEH4S612kbQVejHLkHfTnVonPJPphEZMS",
  "key2": "3eiKxMVkMG7pSPghDhTaE2oFJGRj1VFZZRfchHqgCeHYMm8CGZNgxFbUXwUHYdfJ41DhwAAXuhEvDcLMb24RKD3H",
  "key3": "4R4Tpmeegx8CLcRYKk16tFyi88mThCAyLWGZaVF21g5YJDngDmFBiSpwX2mv2M3Gg9UWvHzG94puQDP7wrFQZBT4",
  "key4": "23GEzehh4gRSEg4RmKkiU2jcYAwrN6fzCAxaHvPez8Gxns7pcH3f7xv5KgYfWpw221NfAMZQCtYnGtRH5rMsY5Zq",
  "key5": "3Cyfce8wJj74MW2HgiRLaYBqPUYLoEtS9hCVFKPNznSFYnByEzWMWdv31FnHau3fqux8DEwiRhHBeM4cFwtViVTH",
  "key6": "2NYoTmVFABf4Wzpe3mo4W1RMpvxcSuUpJSkULQCo3AKbpJ5G3apHL46btF7t3pq9h8snvADtV3TRNjK5XSgxcfSx",
  "key7": "F7WbmwSfWSis7dm1V4DCXuNs9ajWo4HvagP2NC7ayLoV3CDQ7EASJ3tWJVBhf36EJUaJcnhGNzgpYhSZq6LJtz4",
  "key8": "2zTkYasgsKFG94XdbcukJKBCQ79V5DXgxGfhhsKnVUpDtQcd6HnoBPbyNYLSHBqVT6wxRKsfjz5zhZKrpz4kNKSc",
  "key9": "4mG8edy6hDZbry175VSsrSbZrGgng3vjhJymN34QiTFSmeSR5LJuzT9ANpXSud1CEwqogpnaawkNRNovCELQ1jD9",
  "key10": "23uxzFPYTKrFL5xqEJEVJNHkdiPDddXMti11tr6kwFRv5XwSbFdvPNiaotDaiM9ujweNhy46Fq5fbB6PuByT6CnW",
  "key11": "4UyWNTL5CeozPt6C3ikAq498hvnUVP4MnLZfyhoJCGroVLQhvT1djMy2sXtdSZ1YkEoBugugbjBbB3wXq3bWKTQb",
  "key12": "2RRMUqeQPx1hmsGgJgb8JnGDrnzbUREWBpj6vTAq1h1ofATcrQLvrbKJTpGUanmL7exS2yPw3mH6EZE6X7gtNdyc",
  "key13": "zbdURBzeFgBuLvfztF2UUamnzYp8HJ4jx98boA1R8FrMXMipGjvE6yjWwShyHUB2nzcXfxw8MSdmLbcgvRuiG4g",
  "key14": "PYD9d6kmjDe1TXfbFbQkbaNf6UGvSd8pmTUA9smnaPqMmCttSVyFvGEP8TSVSnXvLFmvnfzxgx1n9PCqT4kUThD",
  "key15": "4L4wNrrqpPZWBSoRxrP9M3AazeXHbKvacefYn8jY4Ti5DNC1HTiYqtuk7ncHbScKaXVpNTXfPJE6EgkE1hmzVeC5",
  "key16": "2hh2Y1X6TCKxWcDLpoXBtGARbtYQxKeQ6SHCX2BsXKdfcZ3kt3NMez2qRL2LZDxoy6kW5CaFPHD5cPBeDSfAifeG",
  "key17": "5tNsVK13GUUgVCvtXGQCz1JCim7fPnotgDmh4Gc6bRoc1B5rgsULd89kpDdGKV6RD9grk68UAfzoXZCXkkUBrctM",
  "key18": "BdDSVdJZy6U5m37tGujhA1hvpJd68YyJLhNVE8aft9B5jZrkguwRwFiWwVBgKM177NLAcDjdV4aPh77HZGtm43b",
  "key19": "2fuiTMymDginWRycZHv6HsyACjwCn51xJ2co9G3ao9ECYTqhZ7DBVZa3TUWVxXKDzWY3wDtwAQfLfV3suZdfiRVK",
  "key20": "4sjN9USUk5brnZcCGWdHUerpdr9djz8vsz7RrsMctUU7mDF6r5o2iLmSVR9UmMSiQN8axkjgz1yjEqmUcWRek8LP",
  "key21": "48fzsGVBhercD2MJuZVJToLu9Vffcbh4tmx2rAFdUuaLiTC7P7c92xbaj1QLPKFKrrzrXydXeEgKBn1P2QLQuX66",
  "key22": "3SzXLjW4Hs2uVMH7sUhwDL8fzXv6dYK6bbdgdFcRRmc6oa5TZC7FHW3n4YQeat4Y2ZuQX9gpG9yRPhgYP76aDPKc",
  "key23": "4KNDQYDCGsqKbAyRyXaRXnYTRrmYuf1Dqi8MkVjDBCgbWzNb7YDRiDkCJSthD3SkCAspRx4S9afGRvows1WATH94",
  "key24": "UjahmvmPoHK8ZsAqxcbLjfmmGso7tphbJcUxHzDHpwCuMyT44rQyYuaTcD5keSQRy4SZsb2LHir3xR4RoLNjS99",
  "key25": "uBn5wpeigHM7nhMk56AdwY1W9xWpEurZs8kc1QjrgyTuxVX2aDKPpmqwrTH6FZDtRY4SCsU3PWqzrJmFczZjPNH",
  "key26": "36o3u8J76m1vjVum6TmkniH5dW884qEGQvuzJ42QwrJdVhtJTSXtYvNC5HV2RrXegZJgxydYuYPTqm1gK1s4djCj",
  "key27": "32ZNYKMkYCnR1y2caMEXZBL7koQ4WPtCn9sYXY8fCqmQvBJzXKzVedpeGH997WTjLduFWwnxxmSfjPD17QdsLsZ4",
  "key28": "3uPa5rM7vgAR9dpkNEuSMpCCKXEu1nd1rUBhEms83wXXL644Jtkj3mzFkx15pQ2qBwMY6yAWarEkaM2uNTBm4Xfa",
  "key29": "3jiVBfLStGXc6XHJUSb1C8V1pkgX7pU9xNQk8BSi4y4vXRKwwzV1US43NRSzMDQgecVp27xS7DYc3bTi56Ehxszu"
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
