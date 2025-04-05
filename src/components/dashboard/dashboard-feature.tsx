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
    "5VPfuhxJKR7nRvveE5SnG55WPYDCYa9SdwWgYYxGPxRa8dgjXAzAwcA64sL8v5uzdUkXRmBSdYHi6UEn4nTbpjo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iR7h7NDq8EW5qfCL4UTaLUbtRpmEpic9Z3UkwsDqj7bHQyNmLjQeJeY8YYp8Y2ZHAWE2KMv3f6uv1GDYEneCWPm",
  "key1": "5SPVk97iJELo4MJHdJ6NdYxevhiv42QpK4UtKPnsqz7Bnvm9tkXy1c3yeHWV7XkjaBffgsyfRGdC4jD6iwHCeDAC",
  "key2": "2KjxwjJcxuaJSGxpqeSuG1f2gxHV2CuKLQ2GwGVGKirbGqKYfScURGnC76PAoF1TFpFC5bgDzQpsYMquViRiRCyH",
  "key3": "2YE1e5hoSxwHE39PnJS9zvJGgqZmxHc2JEXz3Y6455JvshptDkcMQkGQp8PJysh6HAyxPruJsWgNtnwQLkKhENLM",
  "key4": "64kKiRVdAFbRrwbU4ZFDW4ywAWA5Sq7AnuxjvLFh4L9shQoPbfBVJCcZ9UqxKWFQFucbaNccS37b768uUMj3tHhR",
  "key5": "45G7orXWo69dbbLUmY5rT1JoeAg9qaAyqpQz7FnVRrL1VLqCHZjUT6EJP7h2Stwr7orbUCVUePB4NNCtGwzHZm1Y",
  "key6": "4e12Beof22SVYchoUgpi53bBaC3TP4n3aL2EKzyP5pPt5L1Y9wmKAexciV8tjwLRjqL8JPzVgbHnzukWikPWobhn",
  "key7": "36Bhn7Tbp83oFZSmWAUnrndFunubsjqaDPoLXniVDcvCXbcjTpCPdKmiwWHNyiDvR6uyhM7qZAXSm2P1h3doRToj",
  "key8": "34u3we8utSNDPp4daiQpbPV8FzNDRvZzaff9UUMLqW3bbAuAdbmxe4meRG4PX5J4hYxb2wuv9Tj5KysJ1X5EBR9F",
  "key9": "5r8TwFs9DTHcUuoR2dDXNPkbVx7YGvxqnwvo2jBWVe4paY2TECH3YtZ9XRUBECQ4Yo7CcPaXNSGYbn7dW8QLhun2",
  "key10": "5Z3LDq4v8B7EVtzpXT7DoePBWpV7abgL7P5dPHFNCyt96oMvU5o3NPmf7ByJ8SHb8QYqNovCmkFKsRCHF2T7eXNQ",
  "key11": "2StR9VGMdwEcycYaJoWRKHuoW3mdswB1GZCTJ5bdXXepRiBDYDBQvh7yjphAfrSHFmQ9yposkdbZFspNS3qydVFD",
  "key12": "5MhSUHNGT53Tathu2NAKaXubQgkEUdJUjuAmfu36pqyTe7iypyyEtTMsw9fDS6914nwZ4mP5LQ8VwVWQ9aXarB1Y",
  "key13": "5jH3WwQBMfgzgRHeGyz8Jhm7pSGHCNmog3iaw9Vx7WrhJvnyXU4mmdYF9qXCbLzwR6xTbgkytT2b9MBvvd5WBUxu",
  "key14": "3dC3vbtNKDaRPVejpqFPYu4HK7k6yFnmQwnav3ioVNkmsD4wzNBRdFAY6w9JXRwQ12BpAbLwRt65yA73tRpxsncg",
  "key15": "4ngT95Qt3jfop8zBtmKS23MVgazReKt7zPLfjYucg6e9cpjzfR1xYWpVr9fm2E77Ep4uPGZLW5zUTv5Be2qU2Ye1",
  "key16": "3LCyWTdzoMdpGY5zetdopXAN3QawnZZ9KNrUcRCbQoqibKfNyaKv9dVD23C2GDdwtrdWdWJZNXwghFoqudVPjam9",
  "key17": "4NwBzP8QWVKx1q3ZRjKxVpb8o2hEG89FtdmNjMLdpoPWmSxVZc31bM4eMQHbWusWDkGFmkSmGAunrBXneKPJPsBt",
  "key18": "3sq6u53KMKe92LYQ9Q59MJSeeEs4rV4L1AFRKKturjRPU27fQ9RgeR9UEYBEAoKigAfrBqDg1FNq7jGPrXffAwkX",
  "key19": "47e7jzbMUoH579yVR1ggDm9BCeBYiaCwGPNZgF6UqeqT1E7mjvnmMkPErPmSSeSwcJfhxY6ptPDPyuzfXXQjmbdu",
  "key20": "4tDdSCDdpGwjB3oHkynNRqXhpvmZsCh1EDT48k5xzGDEp5idQ7Rwtri3J4cAagrJSBgVQwKhcaLEATVoWDSh1twX",
  "key21": "5jWHBdCzMjXmpAa2HTFxcbbK5SWpkGWacDnfsF2pcqji4CJcUJdXYb99Wo7x8h49tdFWy9wJUfjpwvrgmrCjoTx9",
  "key22": "2x3dLdcce5r73ZX86VMKwuVwUFY9oMfCA2Zuaxu2vCJqirVcCjjF3HJbJ8wVJQJyu5dFDiuZJP8wzZLVp8oyT32G",
  "key23": "THGf7KktL7AdRRz57oqQ2zjHnN5UrNTd9SGE3CLiTz7vQg5CJ5T3xVso15SCFnWjg55epYGWDw1313nCYdxhgfm",
  "key24": "5TCFWLdq5476bnfjF3p7dN5M3ZdonLUk5BREk44s3nCrABDxMbwnkCHVKvGr8S3FTxTqJGkkJZxnpEAXHrF7R5FV",
  "key25": "3gUJEY4Afw8oEw1kdnKz5Dk342aAbzhMPZZLvyAGF6WJeT1mM8o2nUquUyb7w7xuRb1s2wdSW6nQvzpgLnSgdPc5",
  "key26": "24rbpQ2P3unJMzYoCEkL3N7Xtuo8AHeP9m698yZdNvp1bqfCu32BnhXQMuAHPgGajxLfyqBSKcFqqYeJG1swwvSj",
  "key27": "NsriCoGVK9B3RbkaFfNCjacpREZPcW38mMSt2zVJrmdNawewBtn5G8ktjFqeKPXwYAkKDNUaPEkcdjFTd4ppyVo",
  "key28": "5JU9v7RBwCfPgvuiPXDNUpiH2nrKmxY1KEHfQ1G9eYKRskCTTZCRtr4oZz5CLsZTXSuLJJR27F12iBdGfbK2dQGh",
  "key29": "3yERfvW5Hq6r8XjjApXWVcgk7k6iJJcpjcvKWwpXLXZyRYrUoXEimKBbqb9fyTvNEFwFXcyjkatDwYQ9DtpdcUba",
  "key30": "5G18vvkBxokoPVZzuYSXVdD6arMmnY3muP1n8UHBcGV63RDgPurD3iHvcNTfmRawYyUvnidazkbync63AwVSFcpo",
  "key31": "q7m951RnxR8mSnAxZPDYNxZtuTrhQ91mia7o8ewZ4sHsADEBKavzb8GHqYNmE2FvppeqSwxikoMANb66evzPUPn",
  "key32": "4vDeMQ2Xy6BjgHc4ze1Dj1fJXtqZnmFFawRn19guKNACKkdHMECZ1bsMopS27s1LkhktQm1qsH2YpXuqVwB6mrRG",
  "key33": "gTrK7gfJ8ap52SNUYwphgqH2Vzm1URVgXafGY8BdQbKswLTUL9c6LpJwZUPaLnjbiaZt1UG3eJ6Qwtq47DuUzT7",
  "key34": "4eDwY5enyWL22CvaCuW2PgQQpvJbi7gDz9HJTnt6t3HfQm1S8sgEejke9u5dRBNgtvzWzs2PGGjcefyRhQi92C8F",
  "key35": "4yN2twsrMb9iRsw1zatZyX3nbA7eERrndkxNDjGSEs75WSQKNkFsaTrJtPFpdFGRZZjPbt32rxYJXsk8z38rTVDK",
  "key36": "2HEFcTqCpXQrtVaojD6nASRCx8URsAsW3UUZpbtLV5bm2HqLeVLB3y7LsvJdCoHuhdMQDGcrWyL3yjz9qvg4Xj5Y",
  "key37": "5ki32NzCxWFUYmbg87SbaYUS5oiVomaYANnXSws3J7qacuHkxbCWiSv5RZKeaSJa2JaGmmtgExD44DA44T4JuEy1",
  "key38": "4awKY9nKyHViQRu4y8wonsWakosQnCT62TxTA4m5mBnewGh4qBzbVMn6GBtxfqq8KNkkynkBsrFC96XscCVQuSKv"
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
