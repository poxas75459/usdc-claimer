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
    "27zkgVLxKLqtXjneFAwEv1i1WpsucPdYtSsyGzvv7fMam1fEFPBSN7QfJdy2vCHEk3214NcgWEKrSR1JaeQiAp33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uKzisudrB7G5wuqKJbCkawBp8ozY94PDNqCWfahPSCunjtoVoe7RMKqK24paNVeXKidhVaeZ7qP85L8cvnf5t89",
  "key1": "3ujctQGSacnCR3n6WJenibmn7TATpZPz8atNA47y1SHA2WynMF9498CfRWuDeCKn2rw4Lnut2tDzZBeD5rw7q24U",
  "key2": "ffkaN2WcqN69bt4SK6TGFKofFWJ1VgGfW2R82rJzCyuDDdPDhaAKFKM2jwtEtnMDrXawjxmtHih4XAmB4FW8uGp",
  "key3": "A5Vf9rbhxBwPQkiZabmgzC9XjqsDvPLwH6UQRc2CePetsghdbThaYTNxvP9y49R6JRhyZz28ZECEBDw6sn8pvG3",
  "key4": "3qN7zHGVxmwnCRkabDjLh5T6rjjwSfHFedXGsBPcCVSQSXT5vDBHTMehagP9qZURSrmRnG9a38RzXpn5Jeo6ymvF",
  "key5": "2q3xYMY55WS8nEUYo9EAZdcsGaocFrPiewVsALqDbWce1YTo41HRJKYV5pA4Nn3BykjvNBTmFc3ZZj9ZcjuVNaeb",
  "key6": "32WuXCaAUgUrhgp6w5PJizuorH18qpDgVwgHzo8n3hpz8843Na1JqeHG1WEvLPuBL8BLJ4ArG6tsnTgAXn6Gidd5",
  "key7": "3pkdgvT4ukxhwZXmEk8SUX3epNJvnw9Gdj2RZUxy3jbtJDxZMSoy62Jd4vjWQFX5SVmQU4NhWpu2kQYnt18wLxQw",
  "key8": "2LTdiMzXgGVtiYZcjC7skbMDC4bTDqMBNh5sSxLhVF9XLpifkwUbwKxi9oVPiuMVxbsfPycC7aUU25mkYTjp824x",
  "key9": "3RBJHLjjgS94oHpGv9WU6v8MDn5vCurZCyTc8uWpaSyTBgP7xA5MynqVevmuj23eqtPzQJYLQ88GAWHeh2kQ7eaM",
  "key10": "2nYkhY2QJdwgmEBGcqL3iEKmTNWgvJCdBGgi7HpqowLWtVT1vrSsjcyMe1BbRWStci7SgvNczWkq8CCzmscLgjQD",
  "key11": "5ZvQ7jWw4ayaQNCFMxjV5YBgasa4tFhUjzDGRjpYBarj8EgRMguCWL564Z2on92DXTMkmMgzdCTQ78jpSiBPbxac",
  "key12": "3qQr42nsHyCiyVfBpaqpLndvh8ZQsKKVyUVh7S2kbSvywA3VRB6bjMq6SBnHgSJfNFEFrkzbD7BiCiegUSqvwsdQ",
  "key13": "GZWRvCEMKXAzRoCxtySgtuygwnf4ReNTWWSAKRRYSEHsyjxy2MZ2brHDaQq7MyT18wzTo1cuHS4A2aVjVtTPnkJ",
  "key14": "Nf2vGYu4NHgxmEGBqm52MvttpEEyjrGJgoxtKen8GU7sdczcQabt2vS994iFgzyHg2UTn3x6qzGXNBpJG7SDgTK",
  "key15": "3wgJYiPz4MRrYsJR5tdTf7qLX81jbHf7WW91m7Rjizzw3jbSqVXNpSAesRVPqxuwcSMiYetzxkb4SAU73BQ218wk",
  "key16": "4AapPa4mDdsrUh3R42ECaNqhk8pXrXYvgfWQKMjvLnWjponzpwdSFymZV4BckUnQeeSuti8wdd9ffnU24pdfBPLk",
  "key17": "iBHTiaG9egQDvERQ597MzyQbsvaPPd69QSjpWv39wCYkRR4KCupnjv3LoDk4a9gnHGbicn2jrqiJvycqi8K2Um2",
  "key18": "5KjtQduaNhSczMrxUBm8uEJThvFigiUBjreTLEj6YT9QaZzLzxXRQpbBUfKed9SUDrPSgZcQ6ax7GwUBCD247deP",
  "key19": "3gyC6jW8mn6VoEygGnEbmwwouNnTh7ZMNHBitN76C1t59XJ6Gqh8naD2mz3HvsPatqHEetra9nJuqp9HCy1DTbkH",
  "key20": "5xsAkmA2SeUoazuRGDjNi6V8Ar3rJv3Qi7HDp7S8gxbCAkgS5EKsgWchxF8dcw2LfJne1T5KHZEXiEw88cBtMg4u",
  "key21": "4nP5Q2AXAaPFUcxgo2KFCx5J5xXaTDhz9fiK2Sgpn5cURMuGUnzYvJQSQpmNVkmTy7cjAQuX3BNmmH1s6X1AwjgH",
  "key22": "513jKFYzSSg9qqBjz1tjxPTtvmeuac5uD2bqMk4dhxUsdtT31pSGGHHga5bRqFCatAVLs6cCqMCABGdVnvzThuym",
  "key23": "5t646SH7h51w21HpGKWQvMj8ciHdABLhmzvyDx2gSmvJ3jyMoGG3TDyqb31fbX2fnpmeZu6XfKJVU9qP7kjQn6gy",
  "key24": "44MuBvc5wqZPRenwiNf6KjNk58PQjbYE4An81B7Aa5UreGqA6KrPZXEZUx8m2KbstCLYSKJkn8fyonezr2DA2yn1",
  "key25": "3sr9U3nUXyYUZ3jNwJB8dj97hZ8gkAodPWc982tHVAeL8CTN43MZy6BJkzD9Pb84F3x2QFotj5z8ppmvZQXWd94i",
  "key26": "4zNe4pf35kRCjxQhdhqnxgHNPkcBGwp7g2Vs8MM66zNWkSXZtSgGXzEvNYXZpE6YMzYpuu5ax3iwpxg1t5HMaegH",
  "key27": "27e9RsBjVAtjv4JMpthFLQ6ogftTPDZgfW8fV1TGhLkGkQYX8qkqxfZsG5kJXKQfyC7ztHcRWxCVccjK4BAVrBfC",
  "key28": "2ZZvMHN5XRqRGZ9chBo7HgYY1rb8BXJiohkLPmJuJKYqCqHiEpgjaMNN9Q2V5ddGm9QUrMfvMyForXvHZnqrhHze",
  "key29": "289hSfk8ddH7qkbDWbMfqtnfuKxTKaTLfr7y2q7xsVUti1vUzRxLpdcJfDNxchLBbqL7zAa8uZ99Ec9DEZwCpARd",
  "key30": "4BJHtJTBSEvXETfgQafNi2CBLam9MGRzcuzXPP8MRhoRwdoZW2KZA99eeyiE9whEgBqHfw4tWE348ivffeY1s8Q4",
  "key31": "3Pb2K1sBvzyREqJbrGHEJdexccq1Kqe7g2FSxzDUAmVffSkfcriBZCN4UrpZoaSqjWwqrT6rvry8m83RvWMNnay2",
  "key32": "4r3y4iB4ZkxPxuQuDU8gCEkRcArt3JxQnhvrUieboUKRAKwYNLA5E8q4MRN98YB7roATUFEsAeEiS86JffsndZBP",
  "key33": "5296P3xnopcR9nWv56MsCS4vSZBzqK7D9iyJcH6eeX37YHZTqBoEsYvSNJ3x2KhYNFXjJ8G9GnCCb2sKBcC1Z422",
  "key34": "5gDCdQ8xQwqEQPbXPvaDWwEYFd7nTmKcUUpjs7ptWSUiZgRdWFjzaScrJxYLYDkM56mM9xkggvNXPy511PXyWkKS",
  "key35": "5rqRe9PJpsnHuHPwpFVurEqpZzqs32K46j7wTPqVQdwEMDHVdQLNLfUF6GaiTiWs9cDTsngwoXFZyWEizr6QbJ7z",
  "key36": "4TmarFq2sJqez65zYvhYAocdGt7RDW2DiEsWKTwr4q5hEuH4UuodXKyavi7rP9QkE8rSayLXJfiT3TadDPu2v32x",
  "key37": "2dGo2ci6MpZZL71ZqKAnTkUWaT11j1ErAMWHjdN8X9ygjvt6tfF2B5rDcSw6RpKbQiBmf4TZwMc9eu8ip9xbTVRJ",
  "key38": "3sNRPuRAcx7wYZyWE8acwvDY6j5Eb2xbx9WoamjUWNBt6c6yfK4Rt8itN8jVSMQqgW65mCAV9P1ErBxpnjxPoDZZ"
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
