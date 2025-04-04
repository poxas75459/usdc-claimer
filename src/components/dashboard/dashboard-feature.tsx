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
    "CiZy4KtQzgU1NrVuLsuaL5YBrRfcxQJpSmew2BSZ7V24SDsaXHvpvGmrHReUVVtSB45VvvcRDsLuq6Jq6apFNDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bnw8c87zk7JwZG1o845oHBbRAwv73RZ7SKrGkw1nWGX8LHS1u2DJnZtGBdBaefdEuEF99TMGidAdFBitejy8AuS",
  "key1": "2iaU4x3nqDgexF8xHkRgyzHMRsfyEUByEpuDmWRcKucYLCwEecx6hkyTEZeL3uzzSqoBFPne4UnqyCE7wuSsPaBs",
  "key2": "3QzYWq8kPHYqadAU5tinBwFzkazggx5UZJyjUsAg6e31GaE8dgXZrg7Ct5QPRSX39mvH4KU84UhFUzwGjgG1gvAk",
  "key3": "4r5o6XcP8YG2uyKgyoJU7DtHU5EVA8dWHzsizYv6nh9rVdRGL32ziHWroY1eeHANR4UgBMun4rX9n3yR6fiP7jhp",
  "key4": "4xFZo7iNxUaxiZipjzsKAfu5q6nBfiAbdYWcPxtYAT2Zt69PKhVmCa8i6Cqr6B4hsGVFTC3rF1WaJsSvv6aktJfC",
  "key5": "5NbB6NcbJKtNo7BQy69JF7bb7NW9ytavHc1Mdz9W28FPgghaM4x3mT1kwwvk4WzsMYPKKuRBWw2BxU92ktGaEAfM",
  "key6": "gsBzw3RN5Htg6btAy2wyQQEqjm3fTnEJS79RBR15UpurP2ZNBu9CZUUFZKb1VVXuFECQVC6LJS9vziCZAgLUbgN",
  "key7": "2Qmb9R8qbTa3R6aqoqpom1SKmUbvfTcYwosLZHfA9sKUMDXTgtKh6EW9qZZcGxPmDwy5miX8zYtgH2TJnHQSRxQB",
  "key8": "4Ht745yt1ZPvc5WjrcYXS5BQHXMwPDHeHGqLQgAuEaLZQNRvenp6rUhgL7d7oGDFd6xn7ahLwtAeWUcpHkTAuGrK",
  "key9": "5DJY4rfzNhdtWurqDcKpyysE8YynxiYTiABZgHHcBnG61Y8eprmBky59rcDHUPWBJuRVuQY5C3KzDLiqcDbpdKty",
  "key10": "3WtNq6aZJ28Bw8sirczZg1FD3tf5g5MtS6d6jJJWCiBePbkEysvMVyeDYq2SpxudLZSVtgN8e52cjaMyXZ1rs8Db",
  "key11": "3MutKbCMQRs2vcXXh8kF6SJU15mz2k4zB7mgPJmNTjwgfPkxPKZBzZfQQMaFpNwr2cEEgT8ihGXsq8Y9ipm2Pwjq",
  "key12": "3c6iyafHZWqxYuXgDiadbtxWwpaGWVUwipy1VHZA5CBXxviqbEWcjwUnDWmHxZc8FJUTNr3icP63puQVEyGFQV34",
  "key13": "54tFjHtEaa8xT7xpB3rHnx4x3X7hDzk3zohWLRNVMq8yUkT4in3MPs5ZfW3GMx3givkvQEgDGHAdP8V7tVWixXVt",
  "key14": "2fvTj2zbus2SsLtsgkooF3auXjoRkq2uDrtQUQL61meFxq2K9Zzn7VJJQmGT4kHPj6guGJCjooK25RDu1WNn2znv",
  "key15": "HWrHHMKA9wJPKgHXFwFC4DB2ghNmrcJdZngG3JpXbWwEAQbVYJLuoUB9bSCepXLuLzevgRfY1a86VeGhybN1QEG",
  "key16": "sF5zFXZiDQWWrRGDSUxiEabGL4WhYvEjRZTsaUJmyxCLtw1r17cSqx3YnqRxZr5EtvS18C4zsoY63hs8uJkNgAh",
  "key17": "64EJ2ydJLd7s1W8dbHn4jSgwTxYXz2oXtyCz5NKMnEKj8exHQJXEEa3pMb8HxC9dhikdtDgoyaDVcLeG4htQSAjW",
  "key18": "5VKjgMcTLx1xXY7c6cCMRARCbahmwwastNubBPzCcDHEsDm6boqNnEjsTxX22eePSk1MKimpXUeDZr1HHXNrEtHW",
  "key19": "LVUmbMRb2yNpkKu2Br8fYtSnvWeK1TBzw8GF2aaKz56sRt8Kx8w7WgkWgtXFTa1nDBCtZj2zNVMGvjeH3eaW6im",
  "key20": "BcMAxBPyoDZmemjuhcgrnTarhejXNBXPGV3yEYdxRukBA6Ky5Ubq9J6ctC75siJQzBrzYGGowznYJLg4BkHEwem",
  "key21": "34LF5dsDqTnF1uAeZig4WRfgigNsTuwsq2qEqCin4vDv6A8RMEspLNMfBfg3qDEVwwFJtvKPxW6CUpeNNK7QFY55",
  "key22": "RJrijN9Fp5Yf9W6hBcSesKUdMXrwiuF8KBSZ5mwhvdAWXjfAEi5yfuneJyjjmdpuVk3464xsz3Ph6jXdEc48K8h",
  "key23": "4K2FtMq4jtxAuZkgcBwq5EMjbh2EgDJFGU27BRhCin66J4d34LxodNWVFSMbe5QPgWD6swPnLJZMTTF54r5FpZj3",
  "key24": "jeyoF2SVbsaiXFSAdA7njvzXSo2L18dxotzrfpgWNoU5S9mPGqp8KPKEV82sFftRidrz6o46oUNh5vajaqWzK1v",
  "key25": "5wvq1uRbSUsFegn4h5XNHW45it7DGBtnpRssHNf55j69CMwUZpKRWxTHgVR4xT8YzZTy2AvNsJzmrqRNiGFZQMP4",
  "key26": "42c4ssJe4Ek31B4cLQ8abbp7cxytnMrES9QksqcmXEzAHBcqhTnijHPipEfUa5s3R3F36wH6ejP8HcorWMKsEwkY",
  "key27": "2ek5wJRV6MaNGcqRHYw9eymwwLuk8cBxSvb6Zthqc7tJjpcnDhKTy1n7H5f8TCvsbRavZvY3jiUpxuy3fyfDXex6",
  "key28": "ft7TYr3FZxU62PtyogTWEiLp3EtW9Rb2ZyLyc8H2ZBFGFGk9EkAEGne9WB1ZhdZU6uE37oWz9dT9cq47FkRGKoY",
  "key29": "2isNm27532kW1EZwiWu1nKXnuwcjBKF9uyMpepZgcHE3WT5gGaCnz3TV7J9GX6vA45vp58dR1R6AygacmLXRTvXX",
  "key30": "2X8qxBQDWuFeVTUB5gdcUfXs6rj2g8EvQ4FniuvCHDdqUdKBCErBkeNYsCn6RyrHyMSF8UUBAn1Cp13LSxVbi4kr",
  "key31": "36VX84Cta22Kc74DbeVJA3HxaufaiVkE2sbz7e89u8Mfw7NzZPrjAFYkfi2KQ5FkqK7MFbtWm6cJByVkAF5RtB5F"
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
