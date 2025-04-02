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
    "5yqZh817h1gm3NDd7s8oSViUBqb7rp9vHpdZ1gcWxDoU3FDYaUhakw3yG7HAsZNpoQbZtLYHW8QRS8Eu9ZEst6oN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V9zC1jBsgxpYbt9vUCmbZmPKNj5WhoyyFfthRff5oVpT2H23GZauLwkaZPEN8LP3R3yPAuebc3S5UEp5b2qFup4",
  "key1": "2dTyPJCUKrcH2p5z8ad7v4WJw68d7tXrV9wxpLP3jSC1Hxrg1zBeKzpp4doTLL9WNVKj5Jv5nC2FBfyAiJDjURJK",
  "key2": "4JFepuo5UXAE4qjbGm5n8VGZ65NpwYuEYMimf6dxEBHJ887y5ueHaRuYQU6oseQ99JsZeBrtozz4DJPAaA83MhNx",
  "key3": "ZfJJKFqSBSDLRuVtEiVTm9teRchFu4FqQgYK2ipUtPbQiZcPe3EmTykwjcGWt2E94bBoRWUVfLhbFYyuhCB3aUV",
  "key4": "2kTvd5H2UZz1WrifzTNVq6zfkL6Aq8Z43TWEoE1CgJP156ffzVn5Jm6kiiQXRCf4ScNS4qvQqfXH6ZzVqw5yUJ5h",
  "key5": "RNW2ojXoohVvu3VJrKU48kbPLb38tKj3Fd9SY9rrAKU9ZNbsqHxDprsYAoyjHCWdsyuKwDaXFbwa6DZXy1iHMod",
  "key6": "4vjQDjAb6hb4chdCZGFa4sZDfojK8e4TKjXpm61oCyw8XRc7A1ZGW8NQ4GZPJZueomy8Q4EtnsDywmkkyq7d7UGE",
  "key7": "42bYUTFb6zNy5iBAdFZHLgRAAnE97oxTY2hPD3QKhbWN1BbHb8o5USBkby9rjQahNcAp9qSxuTD5z8EfduAeppDJ",
  "key8": "3LEW9WLwEcWbRuBi7cuwgjX3GdiVBh94Qz5K6vPpC9HwS9ZrR6fGaEnSgEiBTnHWKt79zwJo8oqi48BjPpVpyrBE",
  "key9": "54d5V2NGeJQNTknEgcbivTHKRuqJTHhNTpaeq9ec6c1GjjvSQhoj4wXWTc3EGtNNA2UrhFHuVEaxP8B2Cv6a5QoA",
  "key10": "2SQPdu8GS71kn5j9hX7k5ZpVr6eNLA4SMEqpmARTXNvywVBqr3V8kpZ4XFr327ZV9SbMmRgU8r6Vhvr1C77FdQ4D",
  "key11": "3ZR6QfPMrmhvdjdH7FFvdJyqbgZTYK3Ea1cmdErxV1QR9xeEzLbB2oQwCwwdfevzspffcf5MgQ4ZjbAAKWGmcCUF",
  "key12": "2v69PwGjESSvefZ5EFUyEJDfKYXbgzs8v6KNcptkLSjsCgFGez5S3j4heGMBdqtFhgNWsaVVVdzPXqP7F2tTRos9",
  "key13": "34aBH1adU2a4tEQpsmHLFbmZiQQwbZ8napGmraLMyuRUsokZ5PGFdeHZsBPLFP9nbf6oyoPnrxQviNpoArbsgTzg",
  "key14": "fRsMfcDhmg98zW5zZkBXNdEcZCNiKVKLcWm7cJuTajMS4ntf4NCaLmZqqksZYncdiNANz8JjtRoodXvq5BBU286",
  "key15": "5xZoxeftUmJ4nKVPgZs2b6EjeqATUWVpG5UTQF8bvxf3yfxESUAFeRFYJgcNLG8C3RJKV6ifC1UfffDfe6TSFSV1",
  "key16": "3RA6tJ7ExvhFtieLEefdeXxGYDwGzR4vzzF1NX1gw9igrVBZoQnPjPTELqEHdiFNidB7Gdm6ZttEShEEmoMBvnvi",
  "key17": "2tvHco1Wx3q99HPCPmJXZ6Rew8aADCVAvWEgGsmq5x9xj7qrvryjjaTqC7qwqzwza96Z6jagqTHojLWwZCV3PKDh",
  "key18": "55y9Nunw2aRGxSiFMaYe9kem6mjW6t989f2ni1gDESh3p2efo7XBufgx4nMCTVmvAEfuvHkSyDah19SCe7gmxrDL",
  "key19": "4mrpdmFsaVjffSNCjxHVgz8HcFYVHYpM4QH4c5kt7fpHDty1dkMR8DeF3kw3qnDYmi5ovMmMxo9ch8NGQBPqAzfy",
  "key20": "2YsLC37YcX5bWhNjXExXMHzXg5hCgswPSJL72WUAZwHDeybv9hPokX15pjpyvy9diKE8Z4s4t39HtB2VSDHBAmGH",
  "key21": "5RTBq5ypGbs34LBjSYidwBx1Vnm9UdYhRmJ7Gfbk5gFBZLMvMc1Kbzie3x29jYFQLt2Tb7Ts1Kcs9vEAx93UgCR5",
  "key22": "58K8XXGiY43mqJhY6C8riEjQ2pF6FEGLmcceBGVYUtbAmMHN5CQsebP4kjmjKgG2H68VGqf53RJd4XzLxa4Vd7Ew",
  "key23": "3YW2rxQt9hQg2XLCtfhsi6Ak9x923AnD5N7X5am6ficKJT1PrMCv54YqBpu2N32F1yNhXTgy9dH1A1H1xgjUBj8H",
  "key24": "5Mt5ygVHAC34yiwLARzoUjxHTkqJVA9mM425PjkYnLZ9KNSoLQeK19WvCpuqrUvnXuwXwveZv33y7CrRcXoWw2Yi",
  "key25": "4Sy1NwsgbGt4cFY9a7EV8to6EtsgP4Qk6Dh3wAA2rod6vtb7QH1W8Djc4Krd4E5zqHVL1kKSjXeGy1qQrhSeYVXv"
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
