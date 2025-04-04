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
    "3kmaLJiWqDZFVKmJEBv7LQyCa9SCxUNnECKoJtm3Gi5w8ZuJnD5YdX2zdcqLdsLV5LAJxBD7zSzJnszkhJfnDpFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U2DEoyEUzsF95LfWpwVmudPmBnByhopsu5bJ7wdVsTVDcrgUuwTUVAx9M2wyWCEv8kYWXS15PLNtN7RnGqAu52D",
  "key1": "5dx7m9Lrsxn26FzWeVytEen9JGNLMJSUNHbF9764UxzqW9RBJ2FHDN6JFvTHiHyeLXxxnbWooTBdyPeoR85ihdh",
  "key2": "3bLFYqdS3D7tJBsHFBDHPibrgx9Fq4wuMfYeVfWeoEKNSZkAgDJhHdack1DSa9zRfC7ry1zZ6CFgTTCoryZMEPPg",
  "key3": "5MhEtDLYsUoZGeFjxbLnGia55Wj1XzM2YEQ7V9QU6BsFYzmotjkbRLAKsqvJ2yByGAKUWKBEsT5qHwV7skqo5ydZ",
  "key4": "5YmXkvs1EUE9WjMvaeA7QC3GSoLNz2F6kQ7S1UAfrD8BdSwxnqy1nPk1JPkA6DzdTdNSy6DY9yci2QynuRq1Zz8r",
  "key5": "4C67gcXhtXCUW5EPhvJFkoLeFRxrka3Er9cxz2XztE6qYZcq4ZGhcDBxapRjddoCruZvGeCXoE35NPGg1x31RNxB",
  "key6": "5JhA1HwzztwcoSm3Xyz4cZMjBtjMDjWsAVjn5SaAhdet7MogYgQpLc9yWmVvkSV53j54rNKXBiHvEEDy7tCFx38h",
  "key7": "5nkG9Utytnd7DiyrWCAF4X5qmUksxLJ4EVky6ZECuqudbiq3D6ctryELqNcxdNdHvsfPQvbhyk1yRGkjZdNdYPaC",
  "key8": "2W2LYiijQVYRCEeMQcwMnJ5Gn6eomo4sc4rKxGy7dTcR9kXVqXnW9rHHLDyP1wj7jTuXH3NreBCT9gt6LFWqyeRX",
  "key9": "2b9vSGMr9gVrrkJXexuahCFuAD9zajkejshigemTmgrPDpid8vYSZdfqpJGWUSRv27teJYxcgkZkmcWjisAD3MpU",
  "key10": "5XFDTYsEKnvBt6jYPH9M5VzGhXGRjz546bVFriqKcowyL99T28MoEBzWXUtMoMT7s6CcDmJ9JAy6QQdSP9Y5dbrJ",
  "key11": "5uGf6KadGjrUEGN45rcM9Xyp3euMZRdwYJoCiTGn5v3FwZsfmtQQ9w9LWMvmZ3u13JruSP6WB32oi9pNrc251UAU",
  "key12": "5kzjt2XdpXfLDfLQ8QQP2Bi5GsRqhEi5ZZ1yEtxyJ7S5EpcSw67u6sDj8TCH1s5zpX4jnFk52H3MQ7Kz7ELSP19M",
  "key13": "5ydybgKmGVS3Ay237svCbsAGJSuDoMib9xgz4KBdLUH7Puw2DKfre6wFp8PMBWBKnAtJpgBdTvWsaRWNfRL17cDg",
  "key14": "5jfsTYxooBREv9qSKWp6yshAcwEAzNLikh2NbUiSK1zGzkEnASYZkL9izTKzDkGU6Cen9TUXyz3TbESYusqzU7fW",
  "key15": "5qfUVrbrRbaEUwBYW72khTyJG5QKoGrWrjQz4WQYGYg7wZ7DEfH28e35397UqfEbUgux2gd3LaEdQmBA7vpVf6Li",
  "key16": "3tRJWcnJr2D2WVxP5TJWUhqQCivjRKuie6ye2JHo9FXqKBjUb5qtKEWVUXeeJUKyq5dH2uYWQn8tCPBEY5sBGVU2",
  "key17": "3s1j9BmtsQ3RyL837kPgfKJumZPNqufA1c4Ni2DvksLrXXHmuH8QRTuAdyV8Evabwt1nbW63fbqiyx24LrLac1FM",
  "key18": "28uJteVY5FvTg9py6umS5QsB5mtubPDGnTHfRNfY3PmwHMoDzcmVpd4vZHX2hcNMHx5sQt1QbnjHzogDTvuHCxNc",
  "key19": "3WL5x1fk5maJQNDNjRrWARFk3EkTGPNA9yUFxRxddLZTvMd4v8qDvKb6vbjs9UUqxrvKihf8tXt229Q36oDwsu2x",
  "key20": "5L5CqZQRLSisBM9AszSiz93S7t4hfUEoKrsp7PE1dwgMg7uhLTLTwA8Tdibg6aJtpTSiARHQtU1VMm8wMgz4ir9w",
  "key21": "2Wyqh9brGQvXQJyS3fn3ssPpAfR9H3rzQKbsA6r8jEy2XDJGihEUuQrQFcu7Rj2EANxxuHMwEjAuh7phb2fSdJew",
  "key22": "3PxxDtNWfGKELKa52HANkj5tRtshXh6JABYnpG2kA4WmWtYBuMv9NVEMMNAGXu3F9bUT8dNWscTZ3gtxDW8FrFDE",
  "key23": "3ewjg7scusTEXuSAEEzoN2otLeVB7zj8sxGBUyxVjuRjw1qANVjj2TnxuQ7eFvRwmZ1fA2vQxvo11fCbYx6wq2z8",
  "key24": "nw74mBJZL9qqtmKRN5ddPC4gwV5FWU5bcjNUDMaGwBpzdwQqCfrzP2kKnosZC8f71Q29xXduEsDfd5od8z7X6pF",
  "key25": "3yApvGRdfaCmav5EDxWbBzsaBxgPzHfgdK6pxo1oDNEc7iMhTwvGaR3ryRByqbELb6PCG6WMZyEW35nTp9CVGAGm",
  "key26": "3W3uX2czNprZyFWj2bUYjxmQXHDyKR4E78n5LFQh6es4MvZBCPFPeswrV3cBF3uwnSo7PhNzaHmg9t12jGxa4UZr",
  "key27": "5weBeua8KMdfn9nmB486ud3xXRm7YhkRa1yYFFbMt8XdgzHbHs3ita7waPnbDhTzFwjxbjjQFSVbzcDfYHawD29r",
  "key28": "5YctVwwwKYBRXoz52CBUmYxHyfo9nvWKKMtTdjRmb5HT8bu6u3SnKwEnY8WmeXa53wbdCqPvQ6eDvc2GL9MjpE7L",
  "key29": "3hd9QThBvUX9cWFfVpBjcCsR56RamvvoFwX4tZj6P1wSyFJZKct8MFYADZLCiPKWojuWF88yWNi5WRNW6kTFDRnX",
  "key30": "4k11YPSr98yeYQZ8hKjyHRjw5fjfYQDJ3eVXMdaVEuJ9U7DDGoK8F2tXd6BrTXFunmcHs1cP9sVELFMBYHSLQB9p",
  "key31": "5osU4Z6QknUGSXswmeMjj4kNFjnrMK3xo7xLLAgmFe4ER3QLZrYBxxQPrabedW9ZvUBDxSWHqXJ7SnbkWus4ktwe",
  "key32": "5cYupyzePXAL19vU6MvNZ4T3qkcr4TcAxuH9vyCmFnyrABF7WifNGasZNmAuaeWsETf2LrN5uSYo3HyVpWqpHsZF",
  "key33": "3F1LqkGoQQyEM5YHbght3G3uDEKkydLD9TRsPFmZvqZxBoGu5yiK6teyWHKPSMfnfwG4krhJxFJkJGufEoEvuHvM",
  "key34": "3b3j3HYPneWd3tPz4dsjSmDXcMG2xkfXj25L3Wt3D8ehriX3FFf6GSkDNon2hwCsurBy867j3vHKKF38hfY7m4sJ",
  "key35": "4DDSskPhcsBUNRFLdF4Tfa3MfyG56sPrT4Wt7GPQ1x9fPYRnR6pyV5trvJRayBBzpS7DSSbNyyY9DLrKntPugiJb",
  "key36": "2evYxPVoRnPovCPSPDX2GGUAEmNPeBaj4rCvwYnmu2tAHXMydLTxMZzhR6yfW3qbUTZ8GpXWduPmm2Y6yPgpN64w",
  "key37": "5G9xgA2w1dqAqUEmfpmdehbcZXP7JXvDC16wSCdsBdqt7fF5GW5z8WMNoSuHQp14bqiBmUisVwUwLFw2SF2ggX5V"
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
