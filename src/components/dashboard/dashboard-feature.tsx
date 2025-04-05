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
    "5yaHGdiWiR7XM2XPU3BjiU8jZyxSwqaUe5JUMfhetPL9pYr6yxgz59c1vhW7cBYuSqs7xUvo8mCgmvXzVdy7k8o4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L3nYvfjzp9L763QHzEpX9z2927vsH5Eg1WnfspiCREgzT2aUfALSgwt2hbWWDVBqZrqxmmWNqaFFPnG4rJ89yg5",
  "key1": "w1hwUe4Tnykqj1mc8geGrCkmwCD9QGbsBJqtQcRAqNRXjbfRyR9vw34NVJpTjpQJYgEta8rhF4ffjyY7SbMxnnr",
  "key2": "4XgsEbRZX9Y8d8JP882QhnrwcZJT6i9fzZ6Khx8Zy7UqPstHDCPB8TDZRUAk2LCReYvrJTrbre5HuvvoSN8b3yXt",
  "key3": "38KRt3188JcvKageUE7jSiuN8qCajuktzHkwPWdiCiZhpZLrzTiRGJARM8YeGmbqZSkiue8C4ZXxCsNrsotwsCZC",
  "key4": "31GNzwzf5LprDtRXmtDd4Ce4mttg3vhCyEe7fqGeRJABw7taLt9h3pp1BuJP7ya6YU8Jt7DDzVk2qFMWRbE1WDtV",
  "key5": "3a1dQUHSVZRYJdedTXhgqGW7eT7RxSLmFc5tsNv9Zwphpz7QrNgSHFUeiuzszpae2zuGbaefWwHBzNNRAXwpstsP",
  "key6": "23vS6fd1gKw1nvbPu5ZvGgv2AzdgSaZ15L1VQnUCi8tmcmP2pEzxEJUH4egSB1bCohcEspSv3nizokgsyzYWFTjs",
  "key7": "3bGWRsjpEZRQJFvC42af5gDDbxpLKGrnGh5zzTvKRWczSgrTryCsPN1PhUhJkbvG4XGmEphv1oAjXbaHNsGcYXVq",
  "key8": "p4fLS4hp5kwsU5oKWXMUaYgh9hTZgEt2UnfJSiqo9nzidhXpoxWWBqCRW4gYrt9LSyxo66efeMFucPJv4aoEZ5T",
  "key9": "48jof94m4zS4xACBgqAES4e5HVRCBXEeK5xfpxFSD5AvJQTX9xQA2duGADmByyGVLoCZhsztJVua8K3RNVnwViY3",
  "key10": "2hCjcfLQzoHhPkDfuChtFysb8X8DWx8E1iQA8ALP18XfoouzAqvE82W9faviXQWEtxN87ARaqGbPedX1TeHgcvv1",
  "key11": "ZG6RRxDY1t9eZ1V9rJDJ1YtSGe9UW8qCdtrUyEcHxkcSvkgbj4jTK2YobUz5SjzaDHPqj1H3F7YFWscv3sA7v4j",
  "key12": "5sg4Ga9Y9qahZuutAvXS3DnoUSAU6qgPcE2YbjuKqVvc73wCgKerfq8vvX52nTqyHR2pny2yXoW8xN6XFm7s3CAc",
  "key13": "4tfRuoHgmJWKEZVDcm8xkqN6cEE9tB8e9gtVtQKGUowHBrZttpCuKKJr4BbPY2h5a2cbVaKJbTex4DhFpUbEDCcZ",
  "key14": "3VKZhrR6RcUYP4n3WrDxsgRo8FKemHMJxyiHKhy5FpurLveSvW6c21tf9q93cAc9vAaAz8sVWNGAHpXpQEFgD4LP",
  "key15": "24upX1nJv7vMLZjibwsyMoopZ6Qgb33DfnZHrFjUxqPJ6EKsue5oHGpBKPLKoVKHLS9NDy5tSBMXsjzJ7XtD3mc7",
  "key16": "5v91qRMzzyVuPQ5wQKvDefXcY77113U2Pka7oAcjsxjhF1zLEFesbnSHYViBpEKXsMpDCtRETo4d8djpYhJ1GrLE",
  "key17": "673m61FoWKCLLzrQ6tbtMMUmGskzFHVtGGQV951WnJo6JJAgfyF2KoMzZAPtBh8r9rpPAbUzAKhW3xunABLhEvqK",
  "key18": "2yYjw5rhtF8uq1pyXLwZt7FuUWp1RgZU3dE8pY5NVHoCMp3vNRPQtUiaTz4HxVJFDtBfoe7nLSfLLup1nmYwqE9X",
  "key19": "29wgKks74aUvzZeaiDHeWDhy5dVMhBBJMYunqfFFZkeyav58UqRZoEZ2dZe5xZD3QDXzLijrdQmez6Z2GgpM2HjS",
  "key20": "2ZpDkwkLdY2mRWCNYfWVZa6UGBT3xjT6QXuTTtETwiaQVdNX1FTyL7czWrUXcG2Bdri9QmY6g4JWgG8pFhYLxaoU",
  "key21": "3BnhvTbAFbLmgKj6tadANMU6HziCGmXRy5EVRgGXWg8xh1SSb1ywqFVubEeNMdE6HX2PHKZHRYGbtozF2xvCiLqg",
  "key22": "TyTxCN3jQF9ftxPMejY4WXLUnKyfRJvAiU6xTtvRWGsRWCyxJ4itSvXQrj1mQLpBD62dwRiJfzJgs5JoJRTwXcb",
  "key23": "2Z5Q1D14rsSeKHbssASBhCaigPsGppgHLSrUzgXqNSe2h5g1sRPagCwm3aqa3e1c6tdMkQnKRKL5H19pDVcCif5X",
  "key24": "FpaBVvLRxi6A876sTvBXsVqWCNYVoQPbu4nw6fEtVGE2XpezWLbjPC1Fz2q7WJb67u79wdvUrXkxKUeZvwHTHLC",
  "key25": "5ZXxZDi1L8UXAmSQeTJjmbE8k8Qv6QJASgCqdSTD7UM8kdQ6GWvikuMy3yLVvpsLdYw5S8RMUdwWaQ7oZodJyD4x",
  "key26": "PShfzYWJGbEW6ceW8xUMHJAWruwX5ANWMzVEdiD1WsH5TQUCdfwX18eyE4kBfm9qYZTY3NNde2v58qx7F7RTW6p",
  "key27": "2ViRxZKsfTZCmdv3ySDYquqS3WqXGSuFUvjWhXaZj3T9gThZLco266n8sAvzXyRmJbjLmKqKS3WJ2cyrTfmA6pPg",
  "key28": "3jfizDdRKTHR4m9JPcHdrAyK5mC8XKJYKXQ1bRCtgfvgJyi4rWDaVturqKnkdiTqyG2Y1pD9vc7f3gCYRMuZP3BR",
  "key29": "528RJaAi4QoGRaPNLvrNA7rRvWWmt2GWLYDX3tfwLKTuEojCdFhAgRVGCSKg8M69pMtpUK3ewfCJyLPgK27CCDqK",
  "key30": "46KYgeEgQSHnMgLLZGGR3EbKZtyTDcRz8qNHPCpTLnSJMBi3pcof9iNtxttLM7dPnhjipRuSYGSBCYpvZkk6sisJ",
  "key31": "jTVhJoWAxwvVo7erJeYrAgCHNYUUhQnA91vxx3xzpCQwLHy3ZBM7S3Q217nuaZ7cVWyxhNpvAKijrGBHpYxctjY",
  "key32": "4EFd3V8ydU5zEeoSxTrWtJ4gRgWmuqYKND2yHys1m5rRJfkYFwacn3ZTW9sqKP1Pv8B1DJ99a7m4hYvkXYZtj3yz",
  "key33": "2fDkkGHKyznjGL26uZipsBzzboQpYSnbJ1JqhrLWoCmsz4yEQwAwr95GsYA2Q6F4RXe1oWFWN8CJPXH4Uqeygf5h",
  "key34": "56zJYxt1G2CMi5HC6YhhL3vSibNedxRATn4fF36TaJqUSLba7qRrKARon7Z7fNnNT9nDffAbviUMAhtAuuWPFQAa",
  "key35": "3HwHe3NQS6mebj3pmqMrWmVZY5tBn95KSh8ecm2Zh9GdGtLrnWGNAaFDB3TMHvv1F44yUJE64MhC5wJ7QWfT7DMm",
  "key36": "5WqG51PscrfnP3s5XVDjB24tYFT146atgcPMCLw5dyuEELuL5g57qLSeVFxPwKBbwy66o9MGGXFcE8gZHx2W9fx4",
  "key37": "3F77cbE4x7f7tWPZb4cTSb2bxPCknhj5hDKGzEWuMwqGWahFRXUUqZSdNP2TZ3egqyHxMuYXiEqxuQ2JVUw6VSC1",
  "key38": "29ZEMuust8LYQbAmUUE6szVmPTSMudWFyQFkawBdSUKXbKemjvmnikMi1T9kDrf6oqCch5kzq45npzzMQw793mRX",
  "key39": "4h8tXAp4tdLhMaUWHojTg5waertSc6zU2soHDUyBGi9fbsicrDdiLogbYV1k18KwPeuFL2vHQjLFHXxytQN5E1K6",
  "key40": "5ZEQ7e6oW3Fe5N6ojWKfhQmBdG4y7ZgFFLs8KEZ6HVEFWGAzERZTHQzjWN5Mxg3VEVc9PCW5Ehh2JSAJ2tQ2yX4y",
  "key41": "5AztLu1HWsA6z6FVpDrfsy3N1TZQi4mDk8YsbqomZML6N6ze1fKhwsg94bL6pGzrn1AEPp9VqWCgr92k2iZA5hiJ",
  "key42": "2LTyxic1qhMhw35Szri8jVKgu77E9hEWEcHjqw3xxtNScjxjv9yPZ5kiKcvgR5ffuycYBfkeycymx8CLoKxRZ96P"
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
