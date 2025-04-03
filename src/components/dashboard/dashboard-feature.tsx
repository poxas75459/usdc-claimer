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
    "3TUY4UqVTPw34Scg1D2zG8c5G7iJMhUd2AUbTcpvkkQpCQ2UcgvRLX6wtAS4hnReQpwjFqMmMShv8GCCyw6B7hmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aXQ8pFD958Uboc1WGhBWtivjWWPsAEh4beqrnaAL7nV6KXvTQDDx3REwQC7PYRGCHiau8aNLSy1YRnMvvV7aKcP",
  "key1": "L39eqUAdgTZyzhWjPoMz9rtq6fk5etE53H4h7ENRU8S9mULJreVUriZkyKSa6YFSbssnTusqNHoBQPSKRiwgBR8",
  "key2": "3Z29YaCjMDdqzqWMH9uTocKRYty2KCQRhXboRBh4V67tKrrc5XdYx8mmWnVhtUxzoRJapgDKNtahobTTiqPNgtAT",
  "key3": "VzZtsaiDfo5v1poRiB4ooKEU4tLjQR4qCsrCBCzkP9qmwsT5YUWXokcnkSLr42vDQNeB4qzcXSMcxcGDPwMA4eE",
  "key4": "2q9LXoquULdDthummo5fricfZ8x7sNZRY9sj4s1qJkZ31BpLThzPQfXDVnuP6kCRV3eWCUK8mxkyk9mo7BR9gDSF",
  "key5": "2tdgonKGyA8hxmc5zHuucLbiuP6kAWUEuMmu4R7Mdrg6jZMw3GWV6gpmHUBsMUqrENTu4cdsLkQ6s9CEsmD4MT4J",
  "key6": "23wVF362KG5TdN8CV1UGLTvfyswGoxQP9miRqAapY12PcWDKCWS2YADQHD2duLf1EiyiPbZrwVFJnUWV7JsvRjVq",
  "key7": "5Rie88gniCXRku1vqWM17Du44qmPwwBiEYdwJqZ5UgTHVC2mXbnrKmznd6r9zzkyuA5uBbeLpksRdcRV2d9aCieV",
  "key8": "3UU2PY3eD6EpFFu5juED1z3gExCBeg2zFu3DQxERGU6WNgikBV6JJfzhjZ82yp9BKVHFWpXegkQEgkNV6xiygZVc",
  "key9": "3BDJGeN2dTaS53M7ch2SN3nQzRdqcVm3XdSvUm55yUp5EGagwVtzKcxSmtQHEW4Ga5hH2JrsYQpfhj83SwuaMkee",
  "key10": "5X5koJQXvgsxni1Ak2yULdmnCC54DFrT6wiD9FtQZko4Lmu3RenBLfT1CbKQu4UN5LcxRd5FPetXFbgLfBqDPpWW",
  "key11": "HpFynb4ccyTCaTt6HGCJN48Hdm4XyfAfpRZqq5jmKfj8kK7KiydsWAktBXFpr3jbxfKCVShxd1UYLAu59cuiCbG",
  "key12": "5GNhy3rm3kyn82L5ipMHErd83FwFbkSrUoz9koVLneV9pfqCLHt847sehnYadxdcY99jLKZN5NG6SzTgbikQjZz4",
  "key13": "2f5nkbNAyQL3iCzSMemCTGrEJ2sFtAwA1dS4fqhyxjg42nWWHcQruwY76jsweeN1RZdei3j2QWCLdkFUuTJW6ryU",
  "key14": "5Hff6LpJHDwoNSRaPi45j4Qdq2MqUCLNBNXv8JwbsoqEdaRaDmT67jz6amRexvtELKnqf6CBZ4PvVDDSqKbHo2xe",
  "key15": "4PCh5n2cDbFEkmKCGeZp397NFEcqwcFJjYDPEQcgibjR1YYobhZox8F2Q9RciLZnNkZChdWQeejkn5Y3XvpTSGPY",
  "key16": "4RjSv4ochXE86Wj2LSuukK95SSZ5hHcjfkBE2EH1rKAqTxmGKXS8i6WFKR3W6SYwLBVYCKQX9fC3Y4NVr8UJowGe",
  "key17": "YfcfyPc88wtneSL2cLg9cs8ytFA5yD9wdRYPiQFZbRYbDhM56ZuD9VKmtNCvFSbJ8Qu3Yq4MWrkitdbdSGpYYdb",
  "key18": "3a9yWwYjNzPRgCbmxYMmxBHBKHrw4rQn6Raigqc9W18a86HwSw8AoDxjoQM9U7A2rTRLLanHQYhvegzVqXA28psd",
  "key19": "37eT438sp6nCbsQNyfk4qmwKTcRt4k4dZFNGKq5Qaei2xx9CV1uvxGJrDiZQo4syhtBZTf1XzdbMwKR492oYyt14",
  "key20": "3SxQvXadypxZMsC3Djx5X5G1U6H52AS9tGBL9isM8S8WdMFrh9evD17gYuaTgxd7RmyrMyJBCWSHXWXuppCqh9Nq",
  "key21": "365nMux447Hq9KiaFm1TkJ8imhxEQEMetjRXZWoeaEQY3f1qupipqQy4hxCWSzZpJgdXH4QyJdhv2pAVnKDKdiBL",
  "key22": "2cKVBbnD96Ppua9AELABsQtTTioaUjGVTbgeMk458rB1sumgTSCtZ6Rd1MygrQEnq2uRk4t2zevZJxRpBJzn2szG",
  "key23": "zBdPefSnMmXE5Wr1rjqMK2eweiyyzZr2cB8sZM1e5MZHrnWmtDwLHiiQWvoFpajZx7KyWQRvwcEbYoscbseGYk7",
  "key24": "RAQnDJYEYGoC5iYhQeLBPLZC5Jgfe8F8qi9iV3qefqw6qPgSyTjYUcyrVBMqBWhkxzqj6u8FrKM7agevCd7dLg4",
  "key25": "3H8vKtyRCWxwZjnZvPDTg46p7Zxn9sdxgdhTvmv1KHDcRmodiLcLE3GLEMTHtZRA5pZHiEtFjH8x8ofuacKSNoE2",
  "key26": "p2sh4mUv53tTHhqsxkUq1a3G5irAkrJty7smfd1Q5ESxxtu2AxAaLWfi8t5ZSjCZt27qYU9dPCoH7HgJFtrHdmH",
  "key27": "4zt9oAh5MDbJKzHTA2kJbosM2q9qUwhGLSFU2TtVCMZGVpHp97Gw7peQoqZfMDQ8ugpXuZHyygBRPHtQ9dhbB2tm",
  "key28": "4oTyvcWLGNMAQ8K7a3UCjF8Zw1ymk2EyQu2MWknPhanFH9aktEdsqHBGKqRDBDHMcitMqMGxBNsvu5wfbLqmb4qS",
  "key29": "4t5Px4r3us5UYWCCm5EWa2PE1gobAXy398vfKTteyFwwZFV1b31v5yUpo2BFWz8BJHvqQyKtrEqh79Ndw3JmDxDo",
  "key30": "35GrFv1Xa8srTGwg6mbancoE9J8PaN9jdiyWNNqwGpnRn4ekm3MXqER6MYr4dwXPQ9MYGWy8s62afjBDKF2iZMJp",
  "key31": "2wkAYmQ9q3L7Gipwk3rWP1KFPrpn2CmMJh3eALbPJYS3G6Bg9RQRpQFAcaxdTghHbwCeafuyx7RVQcKXiL3MQC18",
  "key32": "GV81QhvWdBoaDhv7RkBRhn9pACwNYMQPWda3RZNFTURDYvRY5V5gZKJgpixQ7DAdMuPU8panUbGw8XLDtbUgYer",
  "key33": "g3sCXoXYLjRfebwnn6KpUXN6Xo9ZcVgt7DmHWvs91yT3cgaNpUs4Yova8DwJmtAbXtZ23Weh6etJi7xzQSxrWJm",
  "key34": "5sZRFpDF7ZNh1nyWB8ixBRrsUeB9qTnai6PwxejuaAchW3wcRmefkHBwDvLc88QzhpxW8cB4LZuXFTuhUCBvY2X5",
  "key35": "5nEfhrHPMgjCy3upQgHfwV1JG9qvPikZEsq7nHwJfdkz4qW96vjsxXCbGSN8FkVa1uVqEVcxX7PkkfkbAVByaNVc",
  "key36": "ppP2vUhafLEzy2YZHa2uJkjqns7sCFRvrPXAfRDgR6iLdsGYFRG52yPUQQLgaVDWbpXDqM5L2yKpwrRkPSVv3ac",
  "key37": "3K9jyPncSDxdpUGKe9K6wMzi3sjGrdfJfdUTQqzDShcZPjRcA86e91yHpqjhTKuaHfKH8wFhHmRFiVPCitjy5EPB",
  "key38": "3s3R6aXhv5Kw7V3swM8nKJZGBys1QmQZ8f6PAEPt9FPuStAWp6hYVkZLENGg3ZqCytmXHuKu8fqFJfty7Y9pb9hi"
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
