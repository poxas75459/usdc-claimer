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
    "5RezjaFdjctqB9rT2eSeGGshjwEuFwCW4NMjNwgg9oW5xEkzpBuULH4ZLu8rutLcMwRhdtwV7m6tJ2dk3SmJiUq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pBBsUz6nidMKMpHTVhM5NtLNoiRxVdCoLFmQUNbxCqcjJaTcqF6bsnvgRaN95jNuLr7oMz2fXUuFtoectha7gTC",
  "key1": "65A4EJx5NVuwoRARBcorBUiNJfuPbBqTMdKjTzCmtsKXCSwv8Dt6z7QfHCcqPcxTaaGkE4q41rUBFSMkREPfACCQ",
  "key2": "5M5HmqM4VrPrVGvByVcF47b5pjiBDa2Yr18ow2ZSJhcmJwnJCPTWcUW1cqvkNMTjFiGWgVPMSzHvcJfGHHSaM1ox",
  "key3": "2sm2kcBKkTf3c2RXz4hpHNH1ojopAFUu4TckW8EjkNyuBdNSRuF8dPkiVj148mhwx8wxX8yPLKY12FucJnufJZTB",
  "key4": "39bN5js3vNQLjFPKgf1c4wza1N7gQ8ATWReraTQGnN9eZQvJ1hVz3JsnEj3YU2aNL48FDYMbfbJhEbp3T5LXDuDN",
  "key5": "2eyxEJaD1qKQs5NuKcQn1gdUf8usmJGZRM649838UTpt6d8HF74XsYXd4PwJzHkfF27mF3bkxEt7pE8W8KERNyNP",
  "key6": "5a12cjCmX8v1ja22AFsxAHDJLSwqYnCdheVDWFTuB826DCLibSsQBoHingTD1Jq4DH25rM7JCLgkCavpzw3ews9c",
  "key7": "AN4FsKznKQbSHejfyHJChWCm1rzCM9QjeLDVLJ1qEwGCDLu87yWTXC5P2WoEGjEAqVVHZFi1wpkgAS9gHHupnDX",
  "key8": "1xtwVE8g5NmhiJgGMVpZ74BSCV3AzXrXrt4dDH8YFZzbzVpetd972jqz1Gx7FeuZ3FLV19GbMGiFoTuTqa7ynwA",
  "key9": "2yFqaqJAJyNPBfHNDomQNrqK5LELRwp6Ui3ejxHHqQBdE2Q1piX27QhqZLHcPNp5GceREP9h7pcMJo8EUEPkEu1v",
  "key10": "295exSSjXAZFf3E11cxxJ4khK2ZQfbJDjF56TUfgni3QNwcQU9PupAJCM9Ua7nxh7xXEfSnzANUj2UbUsM1gDVEg",
  "key11": "3teSJ7EQCQ7BdYuk89WdNsJMLodurGNxXr523jsedL1CLhYd6cyd77G99WeeEMFQP7zveFRieNjbJWPnBGfA3sAM",
  "key12": "4cTozxF3KSSEhfUGKW3oLB5XcpvjQZdm2MNNdeALvH4yWcatJ5p9aEMNtshDXaPFmCsWSHWpK7QC88yDuZPoNK3r",
  "key13": "3Vx5NXeQoxhY5ZuYPztQaqRYTxD3YMzLtWsKRK7NSTLL34TRwcVWxnJGY7CTCZjD9YRD1NSV3QcpzDHqjMPwgJp7",
  "key14": "C469iQvd132YggooEwyFDCm44FqiCXkb6dfnpLQNVTUxV1JNubfvuMSR3afoqUb1BwunQKo2K9JYnXn3Nzdkf1T",
  "key15": "4qbZ2exicsf6Bxh7EyPG4kSezSNRdh1YSpeDi4RkTzEX3pLhjfJJXLestpasHn1fuj468yAvcRZGzL4gAGwarGsh",
  "key16": "24omm4afqqWryAMfu1j34UqdcxxXZMeAxYDgdTjvLP229Ho3e1kUgcY1iue3xo5AVdDN991bWdANj44UDjGQdMLy",
  "key17": "4MFYtuqNTyfveRmTLsRWAfgrJzP1D5kUPnSofbp8PhVQTCfviAiRfuSVhdWEJ7b1EUQwTVeDQJPSSE8Ym4XFm4C6",
  "key18": "5gyWLgAVrsxpbSn9hwvGdttnSv1HM5r7t2Frvt1xJzj8qqE9tDmjpWfdnvmy5fZh78V33ZGEkoQHs22KBd2WfeMu",
  "key19": "4VWpC9HF6nWnsiJEnHRDCXYFxDqJDMugcjG6pGHyGpgQrDV2NqY1YPz8kgNYjrUSZ1NTqBLBuR6G6nYD4o3jdySz",
  "key20": "LJ95NuyTcdEDvr9qdCu2m9rL3WtYQXhnjNsLdA2Rbdwbnq7tXphZLqEREyteFwhjtxUgyKohSMMphfcQTbxXdwx",
  "key21": "2ZxmFgAmJedB3MQL8y7NVTQY81SXiSgsnExh17Gqx6vJCLxVBJpSKAUDTG2LTv88i7HhaYF8KWCuL65ttdPctdbj",
  "key22": "4CkqFG7B9XgZuee4HPRszSCAMtBHmScCjW17tsMBAEVHXAdGegRy8rbZybk7GcndUEG8QUmancjRDbZLnFJSdjUK",
  "key23": "4eZrM1Svj7WTomge2ZcSz63Eb9t5nLUoXMvVYv3bzPg6EZ1DND9oYgihXPqsHT5e7NPRiL21Xew38Huwm3f5G4zm",
  "key24": "228YWjfFRfDhzunjdAcnJ4yeHJ5j5XdxRCgQNaMSJdudXA8YK75sTVzESjHzJfM7KQ5QeSL6Kb9CaKGg2ma88w8c",
  "key25": "XnjCpqHbCzVBv5Vd2Ga2NGQKxhYckEZmkCPkAgUyBTnoL1mpc1AaQGBD2UxyFnKVoUEXJ5Bu57pD2KJFvWRyffs",
  "key26": "3GJeZTH33KTTidtcXk9qDGPyooqFPb1PC3wgkM4xMHcJVVvmYB3EtgrREh7JRpW3brni9Lh2i25gZDPg7yAiTVTP",
  "key27": "3TKbPuVCZ1tFQqUcSgCMHvtRmrWPpiLLKBvb39sTZx1bsLZ4KXrj77rhmqQje8d5Six9YR9RoBy5uSSLojYDjChq",
  "key28": "3nwfNHBcUo8Mt2CtcAWPLe1XHcXMu2mSpcgLFCjbBBKuX35Meg4gwEpDEzSQ3RUHAc358W4uaeUXNkWqemfpJ1Vt",
  "key29": "4HXyjAR9Q6QeQG1bGD1CVGYiADV274zmayCRyX1hmrEmFXqiZHNWRCriD5xJh3SjPXUjGLpYZZ7EMXNejQ6AYH7h",
  "key30": "2F8tSYUgXtH9AiPg8SPyzRLmdTBUMxSsV6iBpCdoQuvJ3nVWnubM79DXCK3TrQKZZUBdyB3C6VRUWfortxY9YAiX",
  "key31": "66rPS6UQt4i5hQSv3LRKVZ1XangHTDcDt3Cuz6XxHB7tYre3JEopH6TFLZGTGQMT6vmB4TnkoX3Q6KeSJSQ1bByH",
  "key32": "udoL9aAYfqTMsory2cZ715fZ7xdB9hUDY5WWMzdMygbhCwK2hrQPyemMiUBahyi1kV4BB416EZrvY9S4YVgcPvb",
  "key33": "4EMDu5984BCgCrLgVXhwNbSxoXEVpfFdoyTZSB5GUAguZod3hyib4G3FhAjfsR38XhNULeeE5Yi8K2d2ZkSBDZ1S",
  "key34": "3r7UBWuCufW8ezGsyhG6FuLAym6VgqTxU4geECM4vs2ritN2swGbKqBQm2DBgVMMzy8wK5EmKaoTE4KjQ4uGwX2W",
  "key35": "5T67ug84XdZ5jHWCTnSR7vMmwkdkUnESauTmyncDzHMRJKzw8FxKX9SKJACCcwwDPcRgzWeyWbiUK7dYqiSZ3kGK",
  "key36": "5NRcAw2viZeFBC9xLes9EVB1KwMiA3ovq5ftqe8m8YwfePoAPcZXRdyBgtawUkeW1heoa5X9DxS65owLotp7eugK",
  "key37": "4o7nr8wZxBRX3eqMBpBZ7ovLy3GFunUkEm7fdPxQgPixcZKFWQyL9Qi6aNPyihqn5TxWjNXioZp9FM4AQuKpmGYm",
  "key38": "3V3tky7Q6iVUkExMr2SrrTaY9FqdtnDD8BV7X55zKzLMWi7V5FQR2kJ47Vg8EpUJQt1bCGzHFQpdRSrxfNnSrdMW"
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
