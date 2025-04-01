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
    "kSFAiBP6yPv3EYanAgc4TQDzPokCXJtLeJf4QWxmW2MZr8VhfUJj2FQeCUyNkQauP4dbUjUhJivoqvYUMbfXNAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZCcb1ehZEvqPEdr75Ai9xEYTzcpMXP7JgRL73J46LBG8MqXbtbfaM3eDWBw1D1LJhnG6HFCqWjpANDZD1QeqRhA",
  "key1": "5XJ7EFtHfUx8hK7m6NhTuSo1rKtut2TinEAiznUqqcw9azxzpsw66ZDimSmLv14Sp6iuuwQPKkWp1BM3bsynmCxb",
  "key2": "3UihjHPkxsKHZKRdA8FiSjZjcNwRX3uPxbKjWxmu69aJBp9DTyzcVUSdy7hXgnuez2mDqfUWsHGVhB6iDGgdYm4Z",
  "key3": "5orecDbEVKUeJwSHKpWzA2qou8rN8L1HT4G6HgEWmsd8dpRujqMRthigeQbifBoxc5HCfJfJBpoi5JwWyPHhJ8Ky",
  "key4": "313hG7DSyxjGxFVhsBvtM5RGhDPJTtS31q2XK7ZzDh6m57qJtNi3rTRViQRQWfLu3BhWfX5m9rnunAXUcKvMMZsH",
  "key5": "2jzf8cxpShLbEtEot8UWfacxo5GY3sJaS7aqUgTtrmp1iacHuY2kdP2yQE25QYrbNMK7NmbYLhVHakZjs64qQatv",
  "key6": "4kyCXBgr9qHYVZktJUfXgeJa2WKcH19XVsqnPbtUN1LBiWrepNFQYxAicpCdZtf2QrVwPZH23yGMwcecU94yZT93",
  "key7": "3vfGWh1t12EKwFcBpsFFt9SCg5yU4ddqSfYstAgCFAZ5knsEAUdUkEStkwbMk41KdNwqunU4ovTeR21V8AkxqBpo",
  "key8": "28nB6GV8FsDKF9p4APtFGnHofGbbycEy57JSGu7GQ7Jtt9FHKxkj8GjK6jssYayTQHVnjZE7pdaoV5pEAsGjLK6B",
  "key9": "5A5FmyT9vVVHM3myhvoK9mKV7y2N9ok6qbk1c4d52eLKPDXhthttDZ8C993Xbm51oNJFQ89Us1z6NKYF3AiFQonr",
  "key10": "5b49E7Nf33Bi1a9XAnwqMvS6LKZiXhdmqNt1amd7hwTZp3opE5YiabNfUKwqCMeYXLTciYTwW53xL3SZHbvH3psm",
  "key11": "NPqzKB1CHd2xzscvUwXSNByKqZPjcG8yko62Lq7JYJBqW8ubp4SLhwhVCCs8EgdmVm3RacbnYuK5JU2RMkciQKT",
  "key12": "3QQbMsoA3MxLo4Xfex9oZUxuP86jV5kyQPnU5XrKcQ3MszCUVarbRoPwdCLJStQ2nsFszWmkECdfN52PjvKV1AzQ",
  "key13": "pHzsmTpzQj6dLfsbzgPxJvuiDUSthCYJLHJtLTVVQCQuvc2XQr5RHQREUmYTiXYxrvPF5ygrAnU6G5FFFBB5cbX",
  "key14": "2dyxbEWeiUAFAUFECzJDFRrG67zQBL1DnQdHvpXfo5qRVBLVbmiKV1rZ2PzfUuaYiyLuKRKaufyKx2pBRRXF6aZP",
  "key15": "RYHce4p8W9vHCScKVEJEiUig3deC3seeiR7bV96PzvZFC1q5xB5DAUxvbjgobDP2h44pkMR7HPheHHXCpnugT6K",
  "key16": "wK9cwJCXwxbqBfNkRFdH5PmV8ovm6K7D8xZTSoUF5eos13jNwKiFQbre48fuDRDXvzJiqrBxkoTZ25GCH5PrXg3",
  "key17": "4wd4d3CuncQ2BfAhmRRMCswTWnp2MAxb4FsNBPijgRQbjLPaGRuHKTr8Gz8SbfYLC6aNCTLVAdDUizQ5fHYkYMr1",
  "key18": "2DMLWGnbcHN1A1h5Jvw3cQ8Ef3BNr6sxxNWJCzjTxsVvguyZjVPHpxa3fGS4ywAr5MfBGP5hLoE9RmvddiLfFkGd",
  "key19": "27M9HdW9hYipCDddaLXfqjb5UWyCKurLKPVpq1QDCtAmLjna1QHWrkFzFdY4QWiPAW6DmUkXjHRZR4Sw6H9uturw",
  "key20": "ShWAgXtdZf52pQ34BEe9FfVmEY7XmyH28FMXebhdzW5Xza678kdSFzBXGy1y2opbu7W76QNexskEA1guD5r6LGZ",
  "key21": "5wE71uLhCKkxsAbyBdPVBvxHnp62VuXjdUdNkZcpkCaoXgwUe4yrN3m7mACqBYHA2FHGBcW97vyX9VW6PmSHvYKi",
  "key22": "5U8VXNq4VDdbKdD4umDCmy7frR1WpW2DKyyKzLfFVUQsV53kZ593C1gMCQhhPmp8MgWVo6i55nuDbdvKNrgEk9La",
  "key23": "QZ7h6AfjdMpkQCFkanHX4LK6xmSiXw1dh3Y3p3ZcUaZ6FVz3P6aEpGxLBsXxB7jkfJU9QtnKZ1fPnP8v5Frce2t",
  "key24": "4yo6x3J6TeVRZxscwX1E7pXrF1ypmqJQ6scBL3caNbr4kHsaCGNhbFUPCLRh5W91TfmGB7yaRPyuHCx7Cjbgx7yv",
  "key25": "4BHXZLZwqhdHSKJzPtsbhvFj9WusAe9RGtT6QDeHfRDk7nH7yRBeu4d6SVxQ5AjAsmYWC9yF4L7BYNoGpcSJJ1ug",
  "key26": "2RAdWEuKvj2YkeTfUa4K3KRKhNfUkkyq6WEzXhJEYmu2dqH7ojGCkEk9CkAe3J2YYy9843aGMToSCxrKtkJc5812",
  "key27": "24Bj31BRSNgTA9mE5j2m44wFcUXrY7C78DdgNKLJNNxVMVZiy2dgBvuAsxbYWPLQbgfvYyinU9m97zksKLFkKfJe",
  "key28": "5Vcz7qG7fRZPjBvXGq2eR9VhuvKLPcD57BdKdEPLQ8mzin8sTWRgebEJk3zZfiEsFeScLuevi6dYqXs724mwsHiF",
  "key29": "YmUhTTKsfs4eiwb8T9Z6F7shecPnA31oNdxw2dv61b4HshcN3g1kLADDAYh38aPjHyYtN5rwHkxf5NzKfsVAC6S",
  "key30": "2xrv7PFZb3YPZi8bkWFdt6WoMvd4YyZdL9LcVEdXuR7KHMxQ8gLzVfxroHtWLQxtx49TSCWkyz8A5QfVQHV2Pcwf",
  "key31": "5gw4PsowgMkckfqqfZ9vzfNuWBb93ViWsqYQyZjXBcChXU9jscbcZiVoda3J7P5bRy6wdEmLYE1hNkEJQbKWmjg",
  "key32": "ubuSj7mBvZ3MPdMcPFRVDfhhg83Ki7QHbU5GYKmM7bk54MibgChKMmmitxtrz5M6LUriVJ39tiLwpJ4Ue6UqP6G",
  "key33": "3jYdQhx2NUMoWhrysN6pmVJYyWRMKNDNXFwFWo78mxLbwYjFZcsrymSDwEN2BJN6gKg96JfMKB2WR7DLcaV9wWAm",
  "key34": "nnJLUfuaw2cfDs1byJg4SUf4gqhndy41gRTk37migd6HrAGX9A2PTNpgudKWHqW4XmU1V2H2j4TDv4DTa8rGkfZ"
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
