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
    "3GoNXi9c2muNYxQxJGpsX279GLuLuJsu5mQ9mTUiAPKvs5wQh2aYjEMhaSHYDapTei6rHMBPNw6omQyvaaEYMVLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57WVUqBEDS6VvEHsbAfsGZtfDsf1QkTJbnWDdUKg6ZgoGP6QafcGYpX1uUpNW5pfd1CpYeXuQMxpoeWQhtuixEZH",
  "key1": "58zaJXVvFrUkNRbRca6wXH3crJKt9EmRNL4aB5EnD19ZiV4zf1NTUsK5tF8YJQdvP9CGAu9oX2MoV9MgVt9x6m7o",
  "key2": "3q5PWj9mz9ddBn99BtfkA5hvgpL99U729pJCcHzxEwAJpJUQWZdNfd2qH4sTiBWwhQqXwDSguwqmGCxDYe2G3wqo",
  "key3": "3q3ZnFQvhhvCNSi9eQJAX9HyVGRUrEghyc9ywmMyfeaXHSNXaMt2j3qSUVQVHTyWsc8pmMr1uyAv6mACUcZvZkFd",
  "key4": "As92RAjwMTqeniQo2NYiuxvWuF28BJskCYha7gCsu9ySLvn7qELBjWVgQDtxair3Bzrpdyri2XB32mTr8ewu9t4",
  "key5": "36CAJeJ24VVterSeekusYjivDf6pvprUeW4fWt4Eqvys24VMacybnwJ31SoGi6HhULBoypugHJ1BEB68q7NUqCrZ",
  "key6": "Aesk5S7xMNmEY5edRZm1njZpZdfAi4EHKfXpn7QDdWnGzcoH3y2pcnuLzSH6fFjH2TGvRY5mSJXHY6YgsMDwqVp",
  "key7": "oubqQqE6qRaqBDjFZ5HRsCXeoDS5Ckhmcofj3YSnHLAJyHRf2164obGsphAVa7H6iRUGxjMh9q5GmuDviqhjecF",
  "key8": "4RKqvVS16CuRg3j7vqmvx2EQQ1akiC7v1DwfQNhC64UPkhiN9vAitw2VwoMJgm4dpid9q2kY8YVSoCVCMNXY8RKg",
  "key9": "2fy1KeF7kJb9vwYHEZ9vxxAa2EscVqsXaJw2tYSjPQ5N7V2Sark7Wjj4ogh2Xw9KjnyD7LHUxeVhf4EUDeqkyzMu",
  "key10": "5ehi59rQW9kdMtcEaAPQxGuSKjMj9iubkhJXhxKfHzkzxaAZFieSwAwVt96F2iRmBT2L5NJ1mXYAJeqChasXUJis",
  "key11": "584TRZiesJgHQbEjGsHhdmbGR15bVi4Xpjg9L1G6RRhYuUbfsNLTPL1mKrqiQui7SDSbA8ewmecHYMhNUfNbbKQK",
  "key12": "4HMr8ELcoaQNmeVwCN5Xs9k63pXUJwd3A5cEYHHR4vGSa2KscjERkPKWQVRTbCgdpNabqhbkGUe79RGZvkZNzxDN",
  "key13": "3838KNBh7SWgoT3noYGfW93V3cSJccFkDwuSRosxsfzeaxueWSPK896ydP4AC8fKbQ9bbh2o36sLjNtg8AhcZwWz",
  "key14": "3kWnBXhuWjPSoDZeKjqAhdfDQSWNv9HAFqNiYjxoiDRgbvPkAC7VicorHGGEaxhyKvsDNnyTXb9rVWm6Do6PM1Pw",
  "key15": "3NPhtkbZnN4bqkDRV33p53VC6ec4aJgPp1a7Jzk1kvzvPxoTMbhjwuMEGWH4SQjHHdhoKDJnDPmAMLiYikSJxHXX",
  "key16": "4ZFkVGteg1fpCRoHFScKPr6RDiuh9bKwfdiAa7CiEouTvTMWL2XPPs2nuxDwJZxXsoN5JQ8zvUriqwasuvRHqHXm",
  "key17": "5DgNTQyBCJwP7bgCXZZ9Uhhg9snfw79zQpFRuE8VV4ZN1gLeP5JzQQG2KwW43nP6m1N5gm61868m3nHcFm9tAEu6",
  "key18": "8qrHJZpuXNzubohk9LwSRePjUmSecWoDYASy8LKHDPXaQMB4AZSK1tWq1wu1hdQLH4gMo7qGdShqhY3W69bQq55",
  "key19": "31e47FEtKPi2LMYRtJWaSYgQHUYEiU6k93zu6FGMcDPqkc1zTpJGMMHabW7S35eBSmgrWPqVuJCcr7fyKkxmhHap",
  "key20": "3V61TZZvLCSudyHgE5Wk5YHBn8LBLxtsFddMwNLFEBUKSygwGh98pP82VSzVVLih5AfFxdT2PfkctMngBC1m6PV5",
  "key21": "hhEmkFxGoh2ibL4LgzVT2XX5GtTqha1qPHcnxQLSVP2BqCtMEDAJ6c7Yxc214tJYWN82jyedEMwSkhqFhUwABEx",
  "key22": "65XxrFusDMjtiutNHXLaGiii6hvUXGTytvN7BpKA4KH5FQTeEZxsxUvKoNqcegnUVsEuCp8kdzRananRELzL7zLb",
  "key23": "5KNBx9prg9bVM5apUYz3uKan3RWTy5ippkcm2t4bXDpjvSdjTTVFaZR1sa8MgpmVz3EPWvSCP6c4mcrokqNwhvK9",
  "key24": "4KA1YSrxLWe59co3orvX5A94K4jUTScYi1nitJapWxnSDHybRzkj7Qdw25uFDAZvMU4U55KzUmjMqsHkPRQABsyh",
  "key25": "3jpLC9qnNfPLvLtxyZECLbcmz6nAmbNvyLhXFDBG2i2rF13DsixSYALt4PhGpzgfD7AKMmXjjRvAFQScqbqoqeYr",
  "key26": "pAy7331QFqZhTRV75JW3yWocZtdVoUKj6VoxxuyncTaiebxG9dP759Ye172Ea6HAHgM1TKNYVt7Ydr9WiXPWwJw",
  "key27": "D2oTVAtKKfpWsYSXgNX3uFafobXfZT2KSFXtxd3fkRc22wF9JYEECormkB7xvipGVVwE8mG4AXXsmyZjqzaDqcu",
  "key28": "MUvGgajxgnnp1rr9XGwgDpcPkdxhYCF7SmXqctTkEcQWKJPQcESeqroW5Ek8D3LmxKDQxZb3ASMFkdrSx4iNmiD",
  "key29": "AMPMeuFHmUmoyoxfepfC6kpX8ZAsw3zGzFbJKrJ6PzUpFJ2xeM6Jm9LE8toVugaHhZoP1Cw6zG4fzUY7wWSuC5C",
  "key30": "sUqBTHgh124DDH7NEKzmE9mhdrXeukTBaMZqEKV8N6EzfRZawZ518VA2GrosbiV1GtWDj3gtUsqTjzTxr2MZd63",
  "key31": "5iVVXUGbGDW7UYcw9ZmPE9vtLFWqZU95L2mttnHz9XGdFHo6abXwZoZrXgduYfoMuzekb5LJvbQUHKk6wMQ5SLsb",
  "key32": "226jEAwTx6dvuFfGZimqDo92LRwmJwMpQDomicmdbpeNZZy6GY2WkTWmXM3EuaJ5TJJrSYNk6ma2SuMU7P7rhxMj"
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
