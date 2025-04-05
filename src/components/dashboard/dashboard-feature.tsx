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
    "5iL1mABDMb8WPSJs3nxpx2W8bt31PJtNvf9dewWberGDhmycJevMqQzsfGSZ8nZQYYojWAJ6G1rCYF7YiQR986Ss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XdPoxyrkoMBN2p8iaQxhBvYqvi7jobHqbQjd9hdXqADfDFoqtCXzLuZZsX8UJT6V1YpZfVRUf4TCpVUu1kvjL2i",
  "key1": "45gjCUB1eoWy76C3K7vqGaXR8LaS8u6Wf3dbTqTh7ayT2jrfgur2ocYMyaTeTPrtbJkwDQsBhW8m3DerayQGAJ9A",
  "key2": "pMLyXLMSBk5C16X7AgRy2NEhBSs4Tra1LGbtE6cAcRwfbzuqa8vGJW5YKKAoSG3kpGf9PARHqjanMUjFKtotWbK",
  "key3": "QYbmuFd8XYGfwGzuBDVY9B4jAU3Pqiy2hpAJC45JTRH7wc9esAD5KVkLq6asB9VTZQKNHVgPPC1apkHFxuZUcP3",
  "key4": "5sR8Dzn5BgP1uwa2rN86bQ4Ssx2eX3qXubbtUQSysyzDXzjhYEQRt6jws2BXCswxeYCmuJ3VCR6hnsPcxqJhkPGu",
  "key5": "4s7FGRyXXxEoAh7ozJ93MBt65fjkxbD5CgaSsN6YLdaTrn4TKuRhEP1CHQtMJhSyjyqcc9WnBAYtLaS52DB8sFin",
  "key6": "3toko9ruYqUVoscvQtnoz4nBz1nBMG6MxGsW8vGJ37GoBnz7emNJDhvKqL8KTD9b75awaFJS1iyKEZkJu6WvbBkq",
  "key7": "4kGxGJ839heMVrEZjd28k2MX3S9mnJoWetJRrhGHEnnj6fpQpjSXURUVSrgpTfaiVfs5cVPr9MHoSjzxKHwQ3DkJ",
  "key8": "4WjjXb1nrmiAXgMmQPG3CcnNNb4L2n2oW8qGEYdjRjFtfRUzkXWoR5WiLJacDhur9zBTQj6JYyBTftQ4W8PvFStZ",
  "key9": "3EmHFzVo95q9HFUQKaR3y8JHZgNtNTf3BNXTQMZkSjqhcGVGHfchG2PgEwmnA9PMkwkPBb3tFQbFEfPGLcvKVgYU",
  "key10": "3ZgEFNKe3ASJFNteFQgFuPmBJfx2URpYLx5UhdF2FPj9pZccyokNr83NpxhvAZFj4zfxxX13RpSTgvSMgqGmywKp",
  "key11": "4D9r64t5tCmhwascct3h5tZiSvQNiuAMpG9pYvZKFizwrs4b62jU5HwwVtfevqc8LfnopNdv9ENV5T1bG3FNrhux",
  "key12": "4JRxqKqrGjkvFtttz32jdqhxp5A9rDYGMdx9pUXWY5NSqwsgATEBKN6LVNwgxtML88xVarfhenUBhQyCRiGuWdz8",
  "key13": "62Vtk7AiTK1QSPa3i7fAm8SCCKJLL5WgvnwtZH4wdZspxAgJaFMG7jXGchZ725wQjXJqVwhMsAe1AASMrcYnRZWu",
  "key14": "4WAcJKrdzK1nf4FxUMzj1RkFKkXC3LU3xzbuaWXMCaqMJFmNzUgcLx8aTHrBp94wV1WyHdfd2qtQTvBfUaR6SWZp",
  "key15": "4Avt5x1ogm3aFG4SpgEUMWs5DWoNBeLkeFiJp1tDW7HribG4verTvL2B77Qu6DBLow9kPCsMvB2S3DUc5FV7pWjt",
  "key16": "3hAKv4vaGGMMabK3LVAMi1b8HqYbdbtLgVGD2E3ZKPewBcncwxcbqan43wWpLmHXfqBTG3VZNxTkVSqFQHAiTzJN",
  "key17": "2vUAnDJqEzeeQ5yq35zFXGqbB6ZhMYr8L5cxywXXA51mdSVveQ5dCguwkjmcQfSpf3ZdsoNWpnRt5HpbahPTeaEo",
  "key18": "2So2hyZeMvxTDvm3w7Sd39b3wewDkMq2WwetBicVApQD82AtQSTzwkGYfvum5912fB5Tck7z1Bg94kPwd37QRLeB",
  "key19": "3o92kziGaPmqMtM9iCCjaVJZ9bNWC1pou4V7YH4bbS1xxy5CjHv5pCp8cH9r8bL42GYFzWMAQuEYqxZyaQBRHo5n",
  "key20": "64uUdDBDZAxsU1hjoyD4DgpW5gdoStT87d58Zr6CrqZV8jrNu7Rm5S6RZtfKcHMimwAPS2UsLc4z5f5zDBLkVKpB",
  "key21": "3gNaW3gPhMucVWpxnC3tbGcJttBAvsRdaQi7Y9Sg9MG5cMhduARfEgUnMi5UM6mkVeNjZK6HJZhBDUPF5D2pNb4A",
  "key22": "4np92APGzytKZDgGb3XkHViBheE5nnuouFoh3eVfvk9QVAvgwTX4WfSbNzSeikkoX23JS1PLNpsYtp6bDUcstzzb",
  "key23": "5RRo5YT3agiuJDYfhpsAYf18D9nXygpdZP5DLB8NjnESXeDgiANFt9sH8u3asm5mtWdNQL8mmaAGGvsQwikHFYJ5",
  "key24": "4Qi7f2UENuBrsgipqas7QXwSCPrkMJCkdS9vw5FZHgwwm3hHudP3vEnrExMQ6zsQR2wXQXSxKQ7Ria3cUXtiC11j",
  "key25": "2yBAwR3y67V4ZzFAc9gBvmbHBgcLVExjsSyAXmMW6TH34e2jusnzJYUvvjsVnM9WmdygUBsNZE8cCCrJRTXcNw9T",
  "key26": "2TRzgANDQyQrrusrGBPdsZWQrJLqZKB4GhSFwdGTCqrWh5bEBUuFMf83bgeCEu7brfNnNQpckoWTzEq7qJ3Cshp1",
  "key27": "5fQyQxzfppkqLSCaLwP1SAePz2VFw3eJ1yM8uFJFDENT5yaTkd9m9PzkqbvYqHDNqLFjVR6mTvMLRrUVn6Mkhczu",
  "key28": "4NP8BZCmimFMZX1ZTcPyaX2YWdRxqcwS9fXuNzD7BKa4FufY38mV15Nh7YPe6JoYo58skWj3wgTH4dxSVzM4ndS3",
  "key29": "GXhvciEm8gMFPkNp2Tkhrh2VZ3gWmxGHoDoqr4hWt8Jy3PNwZEuED1obknknvgXuJBNz6eW9MFfLuTRubbza7L2",
  "key30": "3er67cPSVY7kfMKsTusN3M3zL4ZtAFh9uGz4ChjFgcJaHRWYkZLmJjxaEJYF9mELUmy6xXvcbsTSeoGk6gg6FBgC",
  "key31": "5Rbfnhb7doXYrXJahDwYTQ8PfCw2arBkYF6YB4mUcm9bhiXK1N8AGU78t1TThqQEqXSgx9hNbB3auyWWX7szSvtA",
  "key32": "2dGT6pRbmxm76gZpi1yCfGXbLDHomTCWsZNCvJ866ozKEctjbPZXRK1MPmkF9egVtXL7T5QEgz2hDva6FQbJ24Cn",
  "key33": "RG2Yjp4qhzw8oAnPWpsxRgmrVgV1NrbHzby7VKbnoHtdb7SdKWvf4McM4nj5TFEAzbbw4pwyGpVLJYvMpnecVhz",
  "key34": "3iyZ2JyQBqYxcozKXX8XR6Z7qHuSXzWpkyvwLmuE4ViMFxPeKgSszXSeGhW3gSJJmeVXwb3uH1LKAyx3rF4nBvNB",
  "key35": "56LKqSXfCaUkeeGhjFGKWSjxadZBbqy8v7eTPLfBTUCUAAZcGXxhgm2xL5CpdeYBHgC3pTwnkzhEg7yovDaFJo9b",
  "key36": "3xapaoQ5pW3W1oMN6acV9gk2zGkjvMU8BCVrFfLzpQkhiB8MJBmtTHvZ92mt6fPbKLkL2VbDCZcfovzZByEWCCiU",
  "key37": "1SAwZkjP5PTKpj7nZJa4tTKi2G1L9Q3JfL9tKVz6nEF4N3H6wawTzrVKYQt1XLSoSRFa7CG4h2GxHwVDDinEr7r",
  "key38": "5TynbB7xDH3PPtGEREJsG4RdKJFpe5KGYP1FPs9wTUwkYAc5GkdaAS1VB9fNRv1MKRJJFhbxFdLK8bHDm7LoeWrV",
  "key39": "5omXi54DWjS2YKj7hosVzT1wvjGyv8vncER1CKh1LBR5zkVxstiVRu5NLwVsSYoLHv1CfxBr1NVCz9tdmeVsAMkm",
  "key40": "3Z6HZbk9hMG5jKX77Md5pmmH51VgEqLhT9xHxm4gYnQno2vVhFrUQ29Afm7H1eNvUey9CTCy5bEveiYsvmhzbBw",
  "key41": "5gvjgQWF8huRp332X7uyPfsfuVAusNUf4sUpVowmXG5WW4Wz7mWRCycbpJkwXmS4wtLLrxRmRSwxX1kCUF7RYjHN",
  "key42": "2Wp4M1jpFTVpYgmingiubU99J828RMiAhM3yezVSL3FoKhzChSdQAnQJmEunazzS2zmaFMHmzBUTLiwHy1UYhEEt",
  "key43": "2PmEkdc4cKhBVmHk2zkMeW2euta1TpEGDDH12X7ibZmXCGUeXM72osTVDn1KSUEXS5ZLUXQNNiUb9pXYiRgz7AuQ",
  "key44": "4N1qghzVZKiccu5Ev3tnZfu9o7kScD8dAm3oFkpemg66X9QA46VkKZaSLJsKFjA9cK6jhJYDchqSdXXxThoMSJNM"
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
