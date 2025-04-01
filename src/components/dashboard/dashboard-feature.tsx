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
    "38K9dpxWjwBJLqBfEjwXfymEe1qvvEJDwzcNNQ8mQitMksTuaXGXCdMrrQAX1smQPYToBeZsTPcyJxGzjTgASmxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vokN6xgeSEw8rbZbbZBrPj9eKtokL2PK4dM6XjyQEP2D2exUdSebVD5oafJeNEEKEVawY2XKgDfPHZ9BYWmqYYQ",
  "key1": "YERH5G5JvY1Cmasegv9QU8z5RroFvpkNjvm4XAz1ogrWSdiVDuRq7bLQqJrkS2aoQuHmwTQpRx6xXqa7mSjvt3D",
  "key2": "5zs8MXtfLX6tDKqet6FttEVDTk3CsrnQnYq3wmx84u2tjuGky6wYXxZRcyv5biZKpf1aEeDm4ouPRuPsJ5DTtYMf",
  "key3": "4oufQ8jrHgsZeHM7dacHFE3UW8vLRwMpHBNT9HmQE1bpnJgdZaW3dGXGmKM1ZcAzaJXkGAg83UBJ2gWqKRkDYEUw",
  "key4": "3h1hLZrYigxgw1pfQ9zekyqnh86aabz8avikEHK8JX1q7FGdywEL4D5cfW1P87nvdTmhXetpd5ZHwhVzfnTJkeDn",
  "key5": "3kzGyPM9DLn5SZus4bSn9aadJ37XAXKwgVuoEVkPvF1EmBJ5HPLBFfotiEz1HAZ76QDLBabE7GZTrH7KKidDUMAg",
  "key6": "53gDWygbgF8k9BvdJ3FdTYxZZFtTZHGW5yr98tj9AhnYCBcdyhiBHUL48eJUyRCLixp5FCLXhZxnf11f1jcBaprY",
  "key7": "2zf6cDsvzp2bHBYH1ovu7Cnmz469Nyx4U1dSqvYUcn555i6tQTtAhSqy6zjQYvKviwCiVf2mKDUjwddr2dkoiKnh",
  "key8": "584jpZFeJpkaoekWjpC4TwiRmvDoU6RZ7Rjww1QZqwyvRBNpau5DCP6jP9aaGf6ymmueWJdM3Upffkmh6iHJWXAy",
  "key9": "41i7igaKXHrU8Z9GLdtx1MKNcWSTJwpZg52iSsRMbevrNbhRQsrmYA9MQrQkH5s3idY8D94Wnaw1JB4JNgu1cN9U",
  "key10": "AbFtsn6122HcRBTXfqvrXZ4w6r8k8jM8RRzmxRXxfF5ht6cNQzhKzrrvKxwu2EqSTUrhqsB3xiDYQKbPiEvpGAM",
  "key11": "J5G2R2nQ5hnVgv3KsmAf44gn1wdCYd6k5ikkBeDWEt5MK8CFzSL7SRRsBQM2whzotshDxMY7bAxrbfzE3pRY3QN",
  "key12": "3MZfxr5HRz3cR5eTnE5xTU7KZ11X4ud7S3rtKAYP7gPsCJiGXZprLvGWPP9bnyaFSiwxipytFDMKK2qAMEEi6sFV",
  "key13": "4gsb6McWtYUAWNPhCyTfEQx9mfi5fNJvhunF3XutUsCUGupNV7Nhi71W78tXFy417a9aFfnRRK6z8oXiho1Y9th5",
  "key14": "5dj6EktvhrzJSqmmhAFSBsrUVVHZdeCoZYCSzAkWtn44Zcri9eRgppRk6F65Du4CqrS6u2gkrPSgrzmvfyF5YtjM",
  "key15": "6325TmhyxqaohVMEfS2gNRdDoNT9EjgncZBL6iixPf9uwhczgBEur65dUkzNG4GfcHZvG44CbJk2xuo8vw9Xuvev",
  "key16": "5A1ojCwX7VAn3woxcm3tujYPjqsYsE661jNqjczgpp822F814kwtSsPqn3P8NZEp2LvZf4SMNX7fJDbT5uYdiBW8",
  "key17": "4x9dS79kWKsRELXNWUHfMFMoyEGVUXKU4MbDYQWXvh3jDb7j7Qfog5F8XyRCNG8qkxaZfRni7HLnMafHNdAPQKX3",
  "key18": "5VqzGwpTPS5znFUtKzxsSWc2cNS4JcJN7vgyCP7GK7MghTH5Auc8oq3H3Tq1KkVPdyAYvz2ejRMDgcno8aN8uT9y",
  "key19": "z3aaf1tfkYxnNmATKf5TJWfV1xyMYkdkBSFXb876cUZWF9GqxMBhiAcUNMg5V1g9m6ESPByMAB87vcU7kpHpV9H",
  "key20": "2D9c22vQxs7CVPUiRCNCEp7P7LFPgMepoZSLjAHyfHFgCP9FqstJ1hcMLyfwzGeHh6oDrpiAqasNvjHkDiFUK59G",
  "key21": "3TUqCTco5W43pPcsjEZFf9tAVTuwaXQcTEbhXxtuGtXeZXAbzmdxoWEeUs7tab8AXTX2zNSPt7PkjwwZ7NyG15f",
  "key22": "2zgQmkbyV6YDAG9wJkBdq8GawQeYNtczU72MALcSKbMTKsNH2puam65oFbK9g5ubr8SAZ2QHvgZzN8qo6JidfjVd",
  "key23": "nUvMnQtoAhxHDqn5vHRmgW2GZ3AQyurev1LJo7saqahkfvTjqCFKs2ot2ge45jDgfc7TPEyuesaYvwkydgx7RYa",
  "key24": "T1af4SYxbPHY54oighDH4TS4BE3AgEstgcBvv4a7LkaANYp5gmfg6NDT979sc4RqTmKYe1iM3hFHEZPriwivZRs",
  "key25": "2eNgBU5fGeN66BWfDJh9rNhL6J1pEDmGgakP6sJtrfQ8LtF62jKMCL3e8FZUmciRTKNiwG112s2bcJpN8ViZRCYN"
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
