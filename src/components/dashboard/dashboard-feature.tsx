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
    "5GEh4iP9332vgH49NktyKQKXq1TCwhGePMLMNXuPaY9wPWsLL6ZbEXMAJ39M8VmYMy3bei46jeiHmocvBU6yxr8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aJcukXKiEtQ7cfgWqzTvq7M14TW3M7kZNHqiSv5EpfiDQG3VL6En4vvMpmJ6rQsF3FdcfvupRxs5YZJPyjmF5mR",
  "key1": "5Bk69SVZdy5CNnfmwm3jRnjZttTpff8miAdsuch7yg87iFTLqWsupGyUsoT8PVHDxJqXADjhLStwghTjQFXJzEM2",
  "key2": "Y4rZfzsTkyUM28iYGtRReBoub6h27HWMFGzGrDos2adhpxwjCeQpf79BcDAebrPCK7DUjtBfFnaMUTpNbWCKKnC",
  "key3": "3SZ8iTrTDEXTnpRuaGbFfC7MS6suoXW1TVZCaHznv5ZpakkfrgrNaTRs7Y6aiM9xtWdarFdA32G6aJWvoDBoKtBr",
  "key4": "4Uw5zrgAtvdB52GiNDAJrsXpdfvGfgfQ3ni37Hxk5SBqrvnBH7cEu1k4NrBhmi5M6gjvLY2eWNkHRxHhsitLpy8f",
  "key5": "E1aUsU8cyRWt7j1C2M5pvFTtwCuvG8JFpQ7h6CeiRPRgLyxcSH3mVs4568UyEv2urZuhdC7BocT6YPinhkmGk98",
  "key6": "5CKu1uw1AvMj7u9f8PZYKCYNQa974tJNnkjyTuJhaMWUu9Rfnp9d8UvicN1hE2cXDMYxkMac5sfnLfCTEZVWCwUX",
  "key7": "5mAPs8nZyvzBZtNvLTcYZFqRtFsyaR4snFci1oAzDoGJoN39jhUQQzLbADbPogaaPHNMHsKqunMFsgcffDGWeC28",
  "key8": "5cKuUzGVxEyDhWwqgmsPUqtPZsPLjq4cH1vexDMdt4j5ZifmBx8QAkjiVFuqpGWTJWr3Pj4eFZxV5YFjv9JBGUq3",
  "key9": "3QBkrDS84fnYKauTeknf5aJVu2Q8LUFWooXoVrYDDxvpg1YjmFS9FPxR6fkvfNN8gYwHAWbr3TY5tF7bbrMRKkct",
  "key10": "3BAt1omNXiMRzuRiV58zvzMyUc8uQRe6qnLqLk2GCmdgxv5UVMwTMwW2T2yQHjxvjQ1KqjW9rEeeMZt7gGBZz7NJ",
  "key11": "5sDPrj6JYPTpjmpREFcQbeuyikpYxdk9A9LUYjMQJdDVepzRRs3PBmcEVR8Puy8vCKKXEriscdsF1DvNtCCButFL",
  "key12": "qFau9vrr3Wr1G3wXevMtZqvE3Pw3RxMMgq2qL4FiCJRh5P8CsE3YgBsXrziKp9s4m2DFuB33RohwyMH31kveoGk",
  "key13": "2hZfVbCH2Cq8meQY7TscWAx3qFcBKMEL3kYsXuuk63irysgWTWzx2af7RFAh5aagnsA8fR29vBjNzaUFay7h75z3",
  "key14": "21yZRpxJ3cTs1DUEEnJMVYujXLLKPdZBVMGbW1aNykk7wApRxUGMasJGD72fSp1ALdp7QyigmFyuoYtyBkShbwo8",
  "key15": "2NVCwiUnS7sB18BZZGNMW9s5LJsY1JS4Puzp2bB1RNLt7fEKquSaVAhfgsL6msjvhmpXhJ7k7rZbpfhW8j6TMUKJ",
  "key16": "32BK8PqNkHNnibLheaoXyxgQqnW1xrwrAFkXvQRZg6NvyvDN27XkodrAySzvqa3mQDGXVvWFycD2tEfAmn8GmirV",
  "key17": "CibGEUk6njG4RcLGauvBkiq2RVZNmkpF1yRSwBgJWhpz7AycKQkrijCNxjxuTWYcQVwxLBWsWGjrSoPEqofK9GA",
  "key18": "42DhoWotw4ZXxSpPLamcM1H2WZrYbLM8hc2MdatVCrV7VPTJWQ7woLV4WA8RAdgFvvhsPLm5RtnwcaYYtWDyH8xj",
  "key19": "LSAyosqXcKHVtgQRWHfx2KijjNeSA3L21htJx4PBHqPf9sVEvsqzQUEgEX5L5WBMye5ooAC9tyjKFuKnULdEmCL",
  "key20": "4dwCquqoPigH1HHCLiSDPJ9e7Fk4yfySaBwsw6rxxhrhAYxS4tZFiYpMnQuvb9WJX9hnmNPhWHnkjiDKpJA8qiSZ",
  "key21": "X1ahxnyFnwFCLvMktaEXK5qtDDkp262VZQqfUjBtGUQhSHZCbswErwbsE1Zwyqs7vBdXgMxJtigwEXT7pe5cS42",
  "key22": "5WrcvBVU2yaUtQbc2JKJ1XBtjqJxzEasnBd1eehnCT72QaVacMcvtvk5bodVZa8fXXDGQKYmq9dCf1o4JnB7LUDK",
  "key23": "42E2e6NhZz4uLj3FzMPBkDrTSqkrwPZRJD3xa7yokq3pwW5WxwhNEEzqKj9o86Vi3mipgFz3zh5WACsExNQiH5XE",
  "key24": "4CWGmCEhq1xKSqcWZy74rc9kTK2HsegQUuvQafvnFzQDNaFdZ6hExoxfYQB6gx7YEkPbuQX2tofzr61RV4rvtgbJ",
  "key25": "EfshFGEacV5Px2tAyreV955nWXvjZLrNeGD1VpQ35FsaEG7BUXJB5GPaGVVJBwcPmoeHkA8iNU7qaUimDeksW96",
  "key26": "5St4PtngvP8yTfRge1q23SntVAivKJPQ6MkkRiZQMQwhgNXm69StX4kybzDkdZMxJuGrBRcmmf5qxMdn1PV1wrr5",
  "key27": "CSr9uWMDvExT7LhnHVJ5rWWBUPakwybmjzy89NSTbYSgJEE3qRMi65X29wjRVutESaGjcL7pS8mzGpSw8bwh7un",
  "key28": "3n45UbNwYwaZWxhPX6pDDWeVKK7FrQRPY8ECdrwenEjjPEW8BWCEWs4xpYsFMHgpqjov6wd9GUvyModjvxnozVPM",
  "key29": "2dVvRaauPr8n51VXAUAdfmK8CbSfxT7dcpQnXAkq4jSx286dEvgKCuMBCVosQnjQsQJKqT2j8W6nmUjSb5ud5Syt",
  "key30": "MXiaj9PYriEPcEHkbEDxV3T1jFLuwqm4MCJvFba7EmnWGMrcHbdrafKtobo4M178Mghoro6eU36g7UyL88gudTA",
  "key31": "4Kch4BBghFWZz3hK1DBtGx3AhZD2Jh1mL8q5jYtMSaWvqMF6Caj4AxrppgVPposBRWmp6XbjocSQf6BJGSLpZS1X",
  "key32": "4rHKF75SEKSrmoEsufUxWzXNVEC998EXtxVUv8bEcwyBbqHAgCUCxie8puK4efL68D1MqgS4Kva8wJ6iU4oci6KD",
  "key33": "Dzxc5vV6EFQBxDyGSw89xVcmnXXYoLxtXYnfAs5hgg8xjd4nzf9zpnYVLVuXJUVB8Fx5AHsfKddBkKp7oT6uDzn",
  "key34": "3gTmy8aTsDXYN9wVK4cXbeXmbKtTM2ottUiKhi4afxWVTN5q8hrsunGvoKUCT8vzyQZoZ4W3h256vTPJ8QW67BDM",
  "key35": "2roZAqTNkfvm3GVHhjKHeicabABuxm6fHAmhACsSodnNf4R5YhWDJBopXEPujD28qmEMpogyTJWayJWo9n33agHk",
  "key36": "5CwUTE3KD6FEVBDooiD6XkmfXkhML9GS87A3y56tG6XT2rgFqRN45TBMXnsKZ25WGavmJpEHLBjajn7mUq1Ez7Fi",
  "key37": "3SgU9mne6xy4mCSy5FLUGHrgZpRbnt2JzEbw7bmDY2ux6tFqwBaRHijyEzYGoMFKkqL9FPQQbF77WYkQERotaQuJ",
  "key38": "4FU7dWY4sD68VACEWE7TiDNWMWwh4RoDHKksxTJAxZLyqmfkSX3MmtM4PYkLuJs4dBdcTqnMz2ChJs9qNKn1asHc",
  "key39": "2BFmtpC2TZt3GXwwMxbjrz8f2vQHePtCG3LyH59oZFV8ZpJiKWtVcF6zBYaZd8MZmQBdMLPdQmg4zUdXJ1sURALN"
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
