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
    "2eC9e2wEfso9yTZC3v7VntD1nQr6ZiKD3P4o2RndSEUB9CMvzuw5hjFiTizhrgvfaQkzqeEy72fLrfWLq794szJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xowTKHwDjqjDSq9tGu5QgQznqx3ksEuNxSNDJhJji6m2kdDVSGrbvFWmgFkG6JWtWZGARj9fBTu9dbv7zAWFkNG",
  "key1": "2tddSMeituj72WZsaHWWd4jNjGskgT27hPvfAVzr3pDJyqW6rL2Fi2nv4B2tB3wvUo2sYxqyYBJXVUQPrivh5CZy",
  "key2": "KyvaFX5BqU3b69sbFGzqZ9i9sGpSKP9VPN2XNG6rtFsQstP8QnqZNqriWncFMgGRKPQ7cCxFh5FpprTcfp2paoT",
  "key3": "4UWu77FDcDqqnSoncM8y6Gshd1ehaZvnnekVwn9cveuEdGrsMm3pKpUjL41Lgwvw9qjeWZY3jRBn3z9DUPPTfncX",
  "key4": "3k4HGpNdzm1GjpSiJnaH84DpigroCgqtMhMSezCH4cswJNuAw2WDcYRBxY7BhxrE73AcLG5hJrHbq9ni8Chy68EC",
  "key5": "4kG5CvUe3M3qFA2o1MHtRthmJW4PAVvyezpVUxxtYn93vtpM1QDpWqqR5Pr1YJHNjzzVuuLjbQGkZCBZtWaL1qo4",
  "key6": "Rn7NvXN3uqM31ebPeTUPXYiDK2XzDCM9pbkhQUX5oMaLrqkX9dfC4xF6yQBGnx9FCxsfTzakDVjyH5jrqQrvda8",
  "key7": "YrmvUWKWExwx41sZkY4uRMcyDr4VStg3FyHS7Z7Neo4NujCxDSmgt8Yi7RZo9b7yorRngQU8569rmZoaA8KE31V",
  "key8": "5argpr4G7K8MYpZazopzwvMCYvy1NEFnV968DX9qrUAJRyDTpRwADgPaxQKk1KX12oF7RLCq3N6njegHdJgHgkpL",
  "key9": "EQvf4YS74SL9PdMNQ8gabSPmP7C4M21HpZjwcYwo8z4fuiofEdTBvR7CqamUFdjNxDa1p1of6YDRi6YKaX22iZV",
  "key10": "5nRYZdv9ejPKUqC7qrgdAzDcV9df4jPv6vpiuzA4wGhViyCyUziLcQ8hagNZA94Px7tK8qgH8uDwDJYCsDTTtXHa",
  "key11": "4eNNQ1eiYDF9fnQ9PEtCj9ZX9PAVDbcacwoVuo4Lnr5LcA4wr7BNL1NgxDByUTEpWDFBpBTAyeKiVrH3itKZbKcK",
  "key12": "4DCHzVoypXeDcNQwm7D4ZRTMCe8yP6mQFUUHnZA87ojLzhSJt85tQj5pkKY2fHS2WWKyHQAAKWKMTtpax56su7zK",
  "key13": "4nxw45fEvch5STbyYxoZwTrb5UNWh7XJ3fTUpJPM8VNiHP55tjqyasxN9oj6NAvCH25NkgTkEusLiG6rxEbShxex",
  "key14": "55YbrZa7HG4tLQmWoXRipsrERXnQjkeyQUjqXbEARERNo8FzMLapexninCBi9MjuKBoNnNiSfQLsDQJeh7TAgtgm",
  "key15": "3ysXGZCvBKF4og3n1XqSod8CBEEodWoNPkckFMDLQR7j7KvNHhbu1mpGQ5ybfBQAr9Nr1fa5FuUQvBWcKcYbb4Gv",
  "key16": "5e5sjeW21QqcnMkY4CD97YPiJvTCtAM1rRngqNy2panca6EstPRaXZG5AwoydDPYgBHdXXrmoMSJAeXLgWhU3Fsq",
  "key17": "5w8AD7WeLVP6cqqTDactrUGaMGsvdS4dNAJaGBpBXxMuk97ErVQ4AnBA7wVtfUQn137AByyqncynNMxNpZX4MBjZ",
  "key18": "66wXwZvk1TDRqs3CSUMb77fnkdQViyFjxJK1q1mwsMrJVaFT2iqRDfHB2RCLAgqTAHNgdzpQBHGMQRrJFemsrEgr",
  "key19": "4gRwCH636j2KPYT9Wyof8hSosLRL9NVjwkurVcXq4a81SNZ4vJ4Sra2VHxwUjPxkL6C4EsKrPckTZ2Bsuh2DXjXM",
  "key20": "3wg92jdjpHtmGmH55AuDp7BYiHuobSFciU1nkGkXb4LQFjtYphGGaFdAidHmpuRXHCuGSgV9RJxTKYqFXWeJFm9G",
  "key21": "2KfknabWw5hX9XJ93rAxeDHNbCgZGxShohYt36hqaewHPQyKGQ4UmEFmPbsueierxoPJZJAJ2zA4jbT55fmYns3T",
  "key22": "2ifRqzGb3wLaWdktdkY6R4FpUPyKNzPtq9d67AzA1Ez2W8XoKKmEUxtUNuccfZFRRiEe9WC1DKwMo1VRZnoZj8fy",
  "key23": "3TtW8yX1CpSGU8mBuvspjXmCnJVjFzqKhQdJRcghTGGvrVGTcCPidztdsAGNVBtoSiHwdKJWks1sLiUQExUrz9pm",
  "key24": "mgjrsG5p26rvvf6aP675Z8CQffFQ9JdG6Fj3sUBcVdDcMwjeTGwWxNoKrS8FfcmTLGegoC5Wv3ceCpe1w11EjwY",
  "key25": "54ND3dMATjgCDkZyvA9kjkqecDCJP9cSU6Dyf5MF3Dz2Bauas8YBaEy2FwKYDWVJ2fRWqQm8eiNj9CYXGpXug93L",
  "key26": "yZ2huHHeMY9kbW4vJbEsaL67evs6kKoiW9ngn8fzxA8wVbueJy58JPYwPKneG2ecgYmxwUdQjC7nKxcAbVARbti",
  "key27": "5fmNVGTe3SAeN3iuMaDe2XEKLt6gw4PXATE9NJr5f7sj87BrN5ByimQNyKhmYZjMNgr7DTBqfN4bKEMMCPA52CN2",
  "key28": "41P8TTAYd1dUXAfGsHRr7GXY6GNQdn5PutbwZM7vqgmmx3NAqKzhgvZZVoPJMV32hiqkX7Py11cKM6aWmc2zUzE5",
  "key29": "2ymJNRk1Z5Cs6VCHdzMswq4DTGY4aoDw2K2HiLRmcpCMBbK4ojLALeb1VWfMs7H5vtxvjndFb4Ae57fL6HBnBV8y",
  "key30": "2T9orJUaVBi3J76UWJHyqXRcfNv3yuGBaHxjwqC3aipEwFBs1GzMqbGQJ3GKKRnaNCHZaoJX4aP3fJdNV58gb3SE",
  "key31": "25sh7W4xUDUYypPaN1K8Uv9ujPmnTzWR5ASNUXzTATnYCHZGtSZxLbsZxQkatASKJjM5R7n9xFpzLQ5Lwq366d7K"
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
