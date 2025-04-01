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
    "27npjwTkNa6r6WzW6ybLsLJX32j8Vv8cQc8hdwtEXWZyehfd53A4b15cGXgNLkQXnundChqNHy4GV63zGNmumVak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oJyxVY8VLn5wPr6PRTbm7vDVoUjTdXD2JEZirsPnvB2D1DkhWU7uXRcWkZA9fGeye8HSbQhQ5UKqCwHGPMV2YGm",
  "key1": "65kXmFyhMTheUcBWDW2WPXTz1H1o3wK6EWjDqPpaYxcQS7tuSxxP9GEhu8Rd3d7f4kzvVKY71xktt6sy2XVhDJRQ",
  "key2": "3GYxUSW2KFTj9K9ivDjkPXdx7FAa26RRrCjiQSfyzPnBSBz5U2cMmmbJFVK41Vnt7NiE8Z2bMacmtG3j1ubq8nZv",
  "key3": "fngpK9KimLmx9Lai8qkrnm7sDRdm8DyrtjX43ZxQqeWJgik9pEqWS1YwjmWU9xQ1deLTDWGDqFNay4jCnYPFgWn",
  "key4": "XaZBRcW4jGj4bsQTvGZmPECgkLsPAdjDuwas2dRPtB8QSX8hDLS96ye7Eez1XTxZqho4MYPkF6mJ6SpCo12v157",
  "key5": "3hH2LEw68jxiQHv6T5zezivSvx4J3qUYWqSSnrCUW5RMaEHGUQH7a2dQgGKvi12989u9XkPNyn2XLiRxKQ4utAC2",
  "key6": "3vCjnEizzgrVqJwrmMaWt9w7HuLQTM4oK9Wd2EwGAW9aD1mdV2fD77hPYQRRbVZPYzLWUhYJLKU1iRopqDbeDcPp",
  "key7": "2RayvevpEZKJA3ZujL46sT8cx6664M6EnNVJhcizpUoNQvqwz5DbfnaWygbAPfC9URKh38cWPPYqcYAD4uk1uuUz",
  "key8": "5MfPpiXHxt9AhVBFfJfQpFN481nci6T4JYBCsRaGYVde9UZNVdnbDFrBurQNWbZ9G6jQfyv9g4Pi1grVXzeSrHRe",
  "key9": "61RK3VhCzxChbQbKTXKGJfV9GWRofpgJPD6oQY7jL5rcJbCQPZ4fNUtsExoNR6wuLAuJoGVZfY7jvkZvhmXGFMRz",
  "key10": "ddU42efCkBwwyFCjV1QvLpeCS1jLPiF7Gc1FcTzRQmzY61HstXEkjSjHjPZsesL9qW19mmw3AtzjLAvcrAKg26i",
  "key11": "3onc7zkNwYdLhAfB64t63HBpptR9waBLFoaM7CUGHf3Nd1AZKWh3uqTwPKs6uPFEY4WAeZutY7dt37A8At5dmi4Q",
  "key12": "2Z9FMwC4UKHz7W5GLbbbqtKtPaYDM28sAeTSVSzunQ3iAXPCoeLyM8wACgwwyypdLesDhGT7LjVZ6tcEEZ84kbPB",
  "key13": "xxs4aPvX9frBVb9EyfEGkJqzyESrKARFmfJFNBacCSabBjnYPRm2GgGkHsPB7kTavyc7PMw6iUWx1gQbji5arwv",
  "key14": "41cmndHd8y7VGMtmN6upXaHQH8o9g1Aha9Przo6r5XKEYyTuTR3Dwhegq8iWgPcegNZHWWiFe5NZxdKxyd7Nj9qg",
  "key15": "3RUUpxB66aePUuS9pMhYZ6fVeNb7w4snobZ4L4i57HpvBn2b4zFZFLRxiqtTkVvXAJRPGNmyYvWs2NUpmgSzC8G7",
  "key16": "2KzoG3b3vA2Zi8HgEzYa63XcyrU2uy6Y9GGwCBkTnpnCQzEL94S391HusGWu9ex9NdQ4EP7iszYeRX33si7AaDDB",
  "key17": "4McJod18Rx1txYAc55Zv5dUu9MNnXVPWa7k3fRafqkMm7zDQMBHDMAwqD1jEsPyhZ6aJ6J5aPuegLE1FJcYjjZjF",
  "key18": "4J6cPBdk1YiwKJNVLYSuAUbcr7hfhfF3m6keL5RFvWzBsEuUMzbH2zUD1Ktoe7Pg99GgCAe4Mge6Suv5cNnq4Vuk",
  "key19": "3XokQ7ZUAxtAStf9S4Kco9hPYvBgPkYZS2cxfvgD53C7qMXCu1zjCwL9kctQ6vqXJAFzeEKKHA91KPCQCShCBT2p",
  "key20": "JjroV2hit13DRf6uHVM2ry4B7Ep3swpn1ajrpyMEq7Np1VfY6hNgUWrY4nJgU8QY3AddYq7MXDNu3qsJQdMY4qd",
  "key21": "61qiMdY8F26zt2fAf1FrW9nzRLHSmNhxPz5rGZwz5jbsAbcPiMP9kRUxwUxuor1eBMMjQ2k5qvsWKP91oN26FYAQ",
  "key22": "5GX7Qn7hG9sQfXXdB36RxzWqK3qpwkTnYALjPHXKwP4sSewE4YtD5YAeTPNhB7uQpzFU5fsGVFWx3YERvxgSnGPd",
  "key23": "4SzcMpN7A4NmqNryFyu7HW1yq1NrHX465ZDrENaKGo9SpipCE1MCVRJ7ZELhuVMkNtD9q8PYgeCaKxXsY6ap18QN",
  "key24": "3TvTZ1oSwrk5rMy81QNbegvJ7s6hh146G7vf4WCEv7zCfrweUQPxY4BM5LnShHbAezoYWbSZK8PUgGzYkpzBAjHx",
  "key25": "2N3TzB97CAaSgGrJYR3NnsH4wk36aYpg2nQtbJpGYoU5ZHgy7o4XnsUkGaUwsFK2t6HHLd9nQXZt2763cuDv6J7e",
  "key26": "57yyZa48c9n82SGYzyiFZqLqsA6rta3aE3GVrCDrtR3Ue4tdE3i2pK6M2EgYfT8Y5eSCu9G84hwWX6tCyvgFS5kw",
  "key27": "5Uif79rh8YVjgG7P3QAk6vneGFc29d1vgxTTHqmmNh2daBLLd8AZ3QYF49aRYvHbmb1bhPL3hFvGijuukEvEXc9V",
  "key28": "2iyuXCyuXACCCyWUkNDUoj2xcrt7zGCTJPx9Rz9mMvdT2wYF7WsnMM5xmB2D4wAm3jLAJszK4UixEt7221j8SLK9",
  "key29": "zGFcPRJ49dqoLja8HQtE3mBANx9PGYiTTV6VUa239m6nRW8YpYSgaHt39QvEKW5qFv64fQxQXJK564Ppd25xXnX",
  "key30": "64sYXcf2oUg68zjJvU7Ukd23HHL377RCXsu9983qteKLHQnvakUCZXQAQcXySyBwF4e6SPwAzn6JNCKDd4RwXS7U",
  "key31": "2hqLUYXjrfsymQY1iDHWnruqevbWcAHDRW44rgjh7yh7fNfkhUeCCaSNFFbVr3fQ5WKHKwGTYxdcJ4HGzyyWAh1D",
  "key32": "2nbaWKHKrKvu5hC5VprersWyC1eDfqmYnaxH1HtGzhf7GP9bW2Aviqy49vsgCPnXco18pmyHNKcx5MNTNEWmJFTk"
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
