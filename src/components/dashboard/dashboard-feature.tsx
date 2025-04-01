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
    "HUW6qX3B7BaxoZZ1udFPPA24xv4W8RxKgQh6TKXfY9ibTbZLUbLxXNjHq5AfrJ26zipKwJjtztxxrKLbPM8yRdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QofSr8EwKfyDLrRpY9dxP7jNbPqSrGCsBLPBYdKc1mYNy73jpFNZEP2CNLeqMYqmXSGrvYp2TAdPGEDexXg8VPo",
  "key1": "8WfabKQ8P5EPjhiJThR12FEZ4Y8YugGnnsvpwQa5NQftQk3J4crQBy66hQRvdFqbsfSRCzRJ6AYULjr4dzM6fyN",
  "key2": "imjiBv4Vfn2coEgVcFY91NifiDrbyYdGoZmLoP4tFUzgaQjykLo5NN3RKC3BCmf6UD7SbyCYLgYH9zTQHHi5j14",
  "key3": "4VhmfNz44fbvFwMRN5o7ArPA9QtL4xqge68QBuKJraqGYx5Cutypjnq7jfeQtj1WTmpGmEqEcJJqDUGwK9BWXQYS",
  "key4": "2kHqPJjKzfQE8oQuXUKHszqgaJG9xruJKAFtmMtU5BKjZqsQRuSJTk4kLHRBhejddUmZAFRa6rw63n7R7J84NwS8",
  "key5": "5QSUAVfERE56cZmCcz5qspZeGqLLhC57fyrFH5hGLgumhJxuxJpL9LBBoLCQ88ocm7chX6QtDvGEwXdbW8JvhywQ",
  "key6": "h3sXiTfj6npyXf51LzmzarhZV1rFK5P2fe8GnziEnBvm71BvwGQJmq6V6nC1FAhcRLbajMJ3AcNmJ26rEFDXCc5",
  "key7": "5yAYBVZYFEqF1FmuX8bUTQ1k163oXAoTomaTaEJ8UmPGi76pFy4kuT7yZkzgX5FpVNEGfCyTda5eSZV7eS1fiuSj",
  "key8": "qd9igGXf8uG6H1a8DvRfNpWPuwdMLM5sqj7hSwgwG9mXdmdtAuA63XttLRFK385HCm4n5w5TecTR2hLFKRNa2kE",
  "key9": "4bX9mt5vHvdoQrwQhwH1E9DyoRfRzW8W3jXzeXmakfGhYe9kXSoAPW1TdxQwRaiiiAa8ws5x81R5EGYKLetrD7cU",
  "key10": "ZWSoaCmN5fe6jYC6sxMcJaAcHCsUpTpqCk1nVr7GEWN3PnUuPea1aVkE3tBwsuye2Z84rvU1u6YF9N9Fspxx9Xj",
  "key11": "4me2bV8FPSEvUxu1kUqrQmkPxdZYH33HKWmhbyYVRTh6LnTbZeazks5FxegYy9HSsC1aTVX3MfMPnYbSp52Q9fru",
  "key12": "3eWKjrRvsJoEaxSUpiPDWhSjfEUYUyYDiPF82Tkx2ncNas2F1WDqgCUezTd2NCXDPoqcdgYEwgQHXC7sk26nwgY8",
  "key13": "2RgLDEfNVczaLKVSpvRSqmKdrU8U2boGSGzvcc44S1sshWksxaPj7kdYxmd7BW7BVgjL86zGmpedCppN4CLorm81",
  "key14": "4E5gQQ5WYBixH3Ay3qtN9tkXS4Lgd9mfVfJijmsdtJhEowyZzSMgPDFVp398dgy5pEN6uXQsb54Kn1nBEH1AxsEd",
  "key15": "3qpurRMTAsqpycywn7fGh2Jx24vaTXKAswKi3iPnu7S4X3DJP3Xn86aERobYxrH46VuEYy1PHgMNSvJffoeVjGH7",
  "key16": "4cYrTiFGTbirWF5H6sYSWQp2s6ee6WnYeXZnHm62gTbGSWxBPJ54o4wPv8PZ9LtQrStsw4s4j3wxxmrDiSS3UuJb",
  "key17": "4J8oSwYTv7PEWMXoN7QUkT6NGre4zb49gsEvqWW9YWrWkL8NuGbKFL5njRNroaSPSmck44gjJUQfXgY5UVT7A4bT",
  "key18": "54WaxF6p7eGSLQLEVszGNSCCNf2gu7L6V3x5B6FrzEb3KN9o5UWaAkXwjp7TUDGW1L8n25WYZ3aigTX4TjuDxetM",
  "key19": "3yTRRwsBLXxaTNC7htDv8Nn7vgvgRXgBgXhYdrWeU62iS3szcEVxg6Df2rrsNYvTt77uonA2pV3RgndyAAaZr3Gy",
  "key20": "2z7ZPiFpcygbfToVwDoaaxAh1BEpz6zrBVfMn6b2McG9huD9oPEJVaUMmtTLkvTZXu7gZRBHNMG7qUuH8E6UDojB",
  "key21": "5y2r2S58jHfiYGjJVkuhUHsqXksbLkovg2NKKaASXeh5deZoM4d5VkthXfns2wvVaKt3TfWLUmui2YqkQN4Tgswm",
  "key22": "KkYaV15teKJDhgZF4t9Kng7xD296ggTnAnuA3SLcU7JFi8QzCmu7w4rV4BxVpPSGMCXuVrqos5F5GZL56BcocNK",
  "key23": "5mTGtcSEbtWZ2oNDrqJVBz6nFKK5umQpdY5gqHwHS9MXVTt5spfVX2Gyz85pnYXxsDgxshem4eeomW7mdNEoqvm4",
  "key24": "5ejs54X3c37A9cN3UnKqoZbv6RrCfeZoDggsqGuvL1He3WVeabBG8VntmYUSL6rwc3wWA94sdXZhfrJYsBBP4LCE",
  "key25": "5Qu87QVvrQmRTB2hCUeUeyvV5tioJMkQTMeksNYufngo95oK9PChdDSevBtHghH6rFjHADyzaaKn6Ek7J63XEb3x",
  "key26": "3GokAfabuwFujSqcGWr2eVxxGPiMGqMqWgFZVXNbbDqbQNiRzWbcUQSTXTRaeVFkLdV5tT9H4fTGNPZGiJGjipqv",
  "key27": "3niB3EVRGHt2yoK7mLtogtQbiLP4oTQxmJ2KcF9TjQBgksZAAd9pT5jqMDVxj4DzBpDxaTEkN6ZFTSVHNYRsFdaT",
  "key28": "5HqXMAo8KEdHe14D9m5fPQkbqyQPM7zGqK7ebfGUkmQKv9nSWhxZy4pwMiHaD3hPjRZ9QPNX5fVd9gLDCZUgk76G",
  "key29": "4WVVW8Q4KX91dM67YQRbppLBX4rhqRG8uKqjStjy5sBUJ2yXCXvdGjMsinEDmaknDzuKMLBmfu7RYKZrLTVhxJZP",
  "key30": "5T6eJx9BMPkg9yGqnXeKH5UWfABpSEJnx2rg4GhXzKeoYZg9mrmeT1hXePgEX8hvGNkbZrZ3sMqjmQBxchR2re2p",
  "key31": "2iX8CBnPVxtV8nztvKoHwZw75LirziMMSPyYSLQ3yHsgVQD49qhusSCtvgoyuuKRDqHLSvfpjjJByVdoYeZqA1ab",
  "key32": "3NKmAbPkKmNrq1kh2jBPgtuvDSzbifsSbuMUJKk1fJJzZMsdTF55u1ghHbvyTXj2yuzodsLRoseP6uFTcfsUDY9E",
  "key33": "4BEa6k32umxEtazngh9iFB1AnJunwRcqZk1n8pXvSJ4vHHyXVNUe72TDEuFqArPRMaLUrzXJTnG28z6quLjGE7n2",
  "key34": "5xkvDricHh1zUf4sXWb8JaUfibj3TWJTioPBu3E2qHnnhGyZxLHdFpUbfoF3m9J7oXMmPcNmqXwkq6varq1SmRJt",
  "key35": "4vZUv4dzhku838NAj2gY7ab3fCYPNcjj8ccDmM3jEcwCkGWtB7P9T4BX7T1BZAdJJd29vernATACUAyvGWQz7eYU",
  "key36": "ioBfHv2fRmeAgnxZiBetyNhFo44kCx32Nz788bF4mzVCvwnkJJM5ee9bEimRHhjNZJyQCLPUQ1CGxGetnckJKjr",
  "key37": "33sajWyYSoqc4prum4ZxaUyioBZxCp84npRY822sAQhgWJxbtsrdhk3XKd4empxuuK4Bq5cmskq5SX6xkQtZumXB",
  "key38": "2FFcaKHo3VV651acWzZv5cqTBVTdNXfARy2wqfBgRZ48CNac7gdG7aPUzYLkfd3oMf4X9KQGWV2MhTq9W9Phj4Ch",
  "key39": "66GsLmsMAzCzirRv7MaKojkDZ4rktEBn3woapt9pMccz3nHiaNABtZk1RM3D4RcxrDsRgQXnQmKM7SYz1J4r7uFC",
  "key40": "3sCYkQtDp2YkEJRCKSATqnZ8cVRhH8YBrGFQZqzaNDGyde3xFmgaUpudYe6VbGPjrqaWyWCVGGJRDoYiLGQXGyyk"
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
