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
    "4VrWth9SLZcfnDseoh1JLkL9YvZkP8eX73ayjPS8fjwhuK8kqrhNKpDTDHUDjnshwvrZ6ZxUHtAduKPYxvnMbF7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u7wpoNsWKRs16GLozn63AToTKRgue4KizxVSPuojKdKzMm3sHnYMjQcDm6AWwLLy59E8oACYvKn7NmxSeL7NXhm",
  "key1": "61UYrnN9YfjXffo455BdhVWKgUk8J4DUsNCWPrd7SuLcJejHnuptfKw5dmyBBiRPs5cet7MB9a5XfBUVM3UacRV2",
  "key2": "3gJjzo1L4CG7zwJw9PjuAjeXBLzamkxukFyJFPG5UtF6dWZZXso3mdSqdZFzihAbQZuFFNcCZRfJdpQsjT8VrVWA",
  "key3": "3pJqbZwr89x5LEcxkKyuY2NHihrqVp4Aaj8JGNF32iHCVV53oRvCskLuAu7b35noUB2TZPdvpzHLTBLxEQ58wrVw",
  "key4": "3EMgcuR1GxR9myN3K7jFhcG7NuDJzHQitaht9xoquhD5KDGZXiDWG4QR53cbdUJPBXu97DD3y7t7W1FzpW4Vz8h2",
  "key5": "4iaQz5P7JJGW2xh7uRUZuLkuYjkShmsjPHr8ndzCs22N5GTFYWeRz92grdzmWMVH1dUYqPf4Y7xhT42vN5o9SG4C",
  "key6": "UnPFw8y7yLmy7w9ozBvThUv6fvJLt597xRTcgKFuAAsyHWrWyWZWmAXsTxErQ7poDtWst5RkCW6acHJTXTexaL9",
  "key7": "2EveoUXPS15g7eL2pHiyUh1nLdsUekYZmZkyYQ8EyMqTtUF7TkvNTiQcT3oiU39AuAYaYJUnrbgrKbrkfka851hT",
  "key8": "62ykrMgh7mKoDiKNb6hz6L2JQ1zMTaeUKGhHfYGRgB6QXtseWXXQZj6hjSa6jBwQvJCg1tdrr49NPGQCvhwoGH7k",
  "key9": "4qJk7UMf4c9fXXMaCaLuWyR4jJgJrBVKRj4yKtoetPCjKAe2VQcbCP3b5UFzPGpZy2LBM2sDDNwXaFRXtYMrtRKX",
  "key10": "5JTUZpocRTuxYe7CtjYH2ydqkUSv356N2MuNEutiWH56bNufqq3gHW14R58L28ZcFWJnoRCWcVhsqqekw5rD4yPs",
  "key11": "5KS2MLgJmgAWvYRnjxk5SDfB1nBUMeRddnXB466pE9ATaEUmTeWsZaRbH8qMuJSJtJhRPjxLLWktu499QTLQYesd",
  "key12": "j1ofXH5SfR3xwyrEfiBawjFBK1XEJeJA3itbkvK6f4A7rPoNfcx4jBeBMNQCPqDc4cyBkzgK2t292fKJL5rzDN7",
  "key13": "4vT6owihRKfJzSc1bD9cQkDGu6XbwhrShb6DNSm51TR6zJsjWDdeVmjuxXBUqSzWu8ssxC5FDUaXQRpbkFh3NTDj",
  "key14": "XXVgSRpGWEvAe86WJj5SwXfCtDQ3mQVTq7No2UbG56qa8LXW8m2NxFVEW4Aud6LAE2YuZ1kkThS2nfTgXF1NYow",
  "key15": "45xVvTu389pwzsPsA4PMyRvfYwMQkKTuSR97Sgd11h5bbeqdjPZhZa7GzVYM3oTPtVfM1661DWv88kUBtt8znzgh",
  "key16": "9Uq2jcL83Z1EmaPAHTHCww6wR26dTjCf59s4sJWSU13gUAMfJGxoPJZzcFaHD3hR2zXLSZnXg3CjNY5r7WpWxtZ",
  "key17": "5qCJTF93Bazu81yof5epfNeDX1mQJPZRT66HcefubuSwUojscRqoHvuivJBhYZVwDjJFQ6o1ZgwjQVBpJSF7G1e7",
  "key18": "3tpxdzeB2s7n2VeKwj9Vaqzcap5fuehmDd3WAonLs9dwEaA3QrVaLrP9twzJDpxG4hz1ZWiVRn6dLajNwq99Fpjy",
  "key19": "4PZ4ZaTfYjaPmtTjDWR8R7hsPFQyyyZTrY688nDNztKEXQGMNuGK5yXHEqHQih7uLVkspN4H4sNeGDqrRRBEN5e4",
  "key20": "4TKHBQSXbwHtCZfKsJ2okce31FSBYBQ4KDFvGKaBkUGmme6YhnJU4yQB8ShDz2roVr3nApN3i3uDdt9oAo8KeQCp",
  "key21": "3GDduzJEZd17C67N6BgmPfeKQbQHCyfDUZNTqUkfrsj6p4BJxjGxSQkuQAjGganUYzuWwiQUTbvmmR7nGVVY1aNB",
  "key22": "45MB7vQNgJRQG5E5aVesTZEH7QsWJp3KdjPjKVhY4MKRws7CUK3izEHePUN2jES1pvU8t6A4s5EkRTsQDCTBDBvd",
  "key23": "td1hjxdZFQQ7KWVXE5HfxvpnT9pCrx4q69hujHCovj4Zswcs6vxZiRwrrS8zhYoRJaqXmdwD3ZuhvJ7PujoLMzd",
  "key24": "4tFcyS48h1HCDuy4UcvhXCKyWk99wJU7LyPftmyg87V7BV7Y8D2YcK7JH7GE3T6Kj4JhwkaJALojmaSu1E7qbCF5",
  "key25": "2JUK2EMtfCFJw1cqSwZqjG4ZguMNwngkW27XgE5o8bsLCnc7jW7VCvmwXSKhMSKBGiSNzr34NNqxwyKtZgpZksnR",
  "key26": "4ernKzgRhETy6dZ8VAz8xi54seMjSuNUfcwTJ8bYj7Ew3FQVFQ783WSnjfCs5oYnsNe1dpo8XPmBoD4amrr9kJt2",
  "key27": "5AERVigDVQwRxSK8Kb7xWQFpGv7D29pvNjuusWAUgGyi8Dskks6BvwgHBwZ4GQqgVvBLBPmmveLbyhj8UbpBberf",
  "key28": "41NxpxGYZkDnPN2TFJVZYADgsiAT8AUAm2zzPs83o6JAkbMEFaB92q3b2ZArCRNve15orcx7RCFKadQWGrU138h8",
  "key29": "29h1GDHAzpxUvVQReQKd7J9cLC8gecKPkiukTSmEqywT7qk9iMXXVcv9KHp99tc2PoXg7j4FSMZXcyH6bzkUjx5M",
  "key30": "29U2RhwLWbwhcoKUqiJaaV9F23rJHeqwsUfkopU4xNMNSVPabjgdcv8Ct8aSafdDc4ZG3MAnH5Mo3aue3mf3Vig7",
  "key31": "32J3c4pN7bPaY1brf9Fbcv2SnnR4iQ9ZsMp7svUjEdfQdTp8YmvPgjkPruGDgGhY26tfDD3hL5UEAkiHwq8hfcwQ",
  "key32": "4FNfB7qnM1rBJm1efghJ4etTQZdKiL438nzdP934D47DdGSZ925anqbbdfrSWsfR2W8SNsW47uZeT5QQxAN4EFHe",
  "key33": "3YjMdKrciZ1XE25gUqGT2wrbUEppd382ciseALmy5XgFZXt5qxcYeogsoWGfULhja23wqw5M8JE5f2h4yaihxoa7",
  "key34": "5dMASmGD9yw81W4kNYyPNcqimvBtcuFnRDkZvXchApMkvWy2YjTmJYhwa2dNd6tG9B1xQWjf7p9CVYzSAQ7wdDHi",
  "key35": "35cFDTkXeKAoG1bWJg4P6YsQDzUUFAqUT6FgpnhiAfjurL4spMZJpwB1EhqPVhVZ6Trsce6VVHsBsLBUjJEtHLkz",
  "key36": "5PhYmEALnCCmNGPe86ZSLGPgD8VwkKpdjRj31sj6cqVp4mktT5QterCYXqKX8uoJWds2ZmYoo8d7JzbwLYLMC69U",
  "key37": "3ThFfpUY2GmbysxYHiZh7cUBR331CKeHBD92PRySAJUGXu75pDQ8GzMRWDWNhGnqJMSKiR8GcbHDqnPXrAJxNgKS",
  "key38": "5XXeHvbLaybpu5j6CeE4SLWQbzr7ZD15BjjFnxrcoLqq8FuBMoPc4gPksuBQDC4LrkUP442g4rM2J8QASkSLCykv",
  "key39": "56PfRxR2tX8ZQBTCNK2MFcm8uYYHR11WpkoQmRZwioQJLByYDqrxpLsx6tuLyys2vfUKQQ8SzuzTHYJ51McyNp7a",
  "key40": "cFre23ZdTEZ2SbkJ3EKTWG1v2hJQevXtsUhjLCg6u15AgQBnCyB6TujnRYQGtibUZTjCA3h2oZ9TJzdARbZFvtR"
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
