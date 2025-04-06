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
    "4pTVtEjhvshobNyhJGsvaZ7rE4W2vgNYC5UTgbQKA66pVoZqHLEqHojH6r9BNnaJcKRPpduz4vw48wmnz3K8Q7CY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QbH7SpRGSySyZGCoftm6j1SM3vP6QjJLcuReTHFLaJyr8wgBq7WwMgTeYazZjPqttWSTPcgD9vfvQK3U9gEgiNP",
  "key1": "u6TrRiPCrd9hermcRSYERGyNAQgm2Dffcwe2mQG5S5uKT4b5AR6Fj73n9SUvLDEp9WQ3rbZxGacsGQb35NhSeBZ",
  "key2": "MW1Un67giw6HqcymLxxg3ABXtxavsRyXskqp93bcLVgEYfnKyhBzsqnGQkbVXmS4TqDSJzzf5aHUGXTcmVgSycP",
  "key3": "2Lmr3age56x3WftK2ud96F3C9mtmx7BdrSjQAXrtjL4GdFb3r3DuF3j9ax15NvJXVWszR64wJfsyitU6rZjQLnqX",
  "key4": "2kdPYxo9EkHrAJAwDefNvTM369PbPBWo8VzLG3i6xbv69rJCM6zWfREoLUfZm4xiMUTTcqPkuCBMgV2UgK6GSbrY",
  "key5": "2TgoE2ENC347mZQ5fW3Yj2sb1atFNCEnZGmZ7qQHQSQ6T1r7YWXJg12ttxQLvX66mnFQEfJ5Lbht9C7aoPvr7jUY",
  "key6": "2GE2psTisQYxJZsLaWZe7PR5jitLjWGkWDEdnfBDxL46p8vTEbNFHNjZ2SDocWUFMqwy5zE77TPKY6tEnsbwGeBM",
  "key7": "5Sg98g9DoVVj56DnDcPxBhqY8tyW67hyzWgSLNNAGwuEzX8kAHNusjsGFhHLAtAmLcWSqx7gZRC5p4fvXNPw9tA1",
  "key8": "35mKPpP6b6enbAhUsGT2MQBGsbdk5ZigN1QPorjAuBiu7jPcWjpSMusAXk39L1x2xCMZitzvbt5Zg5UVcbQtrj8A",
  "key9": "AQqpTcLLkm3bz2KSStXyqwiH9w2YsNWNcqHCcGW7zXf89LX8HwMXVLGxifg8yZfAps424CC8hdtRfKNsoWB3s5b",
  "key10": "48V8bE3UbrPjuzPJxFNbQn8Qutxy69s8SebfYFdFK7VVJNNB1aZevYMTpT5wc5gkJwFF6gMWcjz958c28XnA3E2P",
  "key11": "5qkKtzpcKh5oSnF22UqfhPgU4nPbhBKWPy5gBykfLqeFMQVdSC8DVt6MEBpgQ4w9RQaYVqaHJ1LYsVHGk8b1YPSd",
  "key12": "2fSCP7JLdEGps2t5331mqmByF254GKvdfZ9yCYWpcC5k7VuwGH58xvDVHd8v7R8z1UmFMdYXEb3ZFF5pRJ9Lts6w",
  "key13": "64PqhKkY6ESATB1pr6Z33Up4KYDMcVmN4NuBbQm8ZsJwcABEPFJr9oUw8GyKa8SJbicH2pm6aDTRW4rSQk1xdUZG",
  "key14": "4unWe2jTpwohaREwrFetBammDQcrM4LMFeZ6XA3vqNdrpSPjFwfXK9E3jA3wmGVnaJzuiUK8kTTmcnbrpn1jccfm",
  "key15": "3nkUVqTszepPzThyWAeov1Fef4FfSgCjWBpxSQF9b7ASuayA1aGxHX6qmSeaqrjr1piedPtCSGwrveLPNeWc1cyF",
  "key16": "jzZdfrhKZKjSV9dMg4HHzJdAeC3w56moqkVyayJdPr4qva8MQqgi7P1JjeQx7KpMFGDc6Nfg4zaXCQ26s5nx38q",
  "key17": "4ojMB7SSSba6WEcLFsCvTQQp6gpC54mqDSUvuNJGu596PekLPJRc8ryFCSvm2eBRjZjPaL9t4ZsrqPhxWY6fVt8M",
  "key18": "2iykGvmTF4HfXmhTsrwzqVjxeL7zrWH2GGYvxf3LUsNSiG78CrPF8JKSHuopWKPCzVmTuQ9B7QRTb6DbzjtiiSpK",
  "key19": "55ZsbNy8NDvWZQ9FAgFvqG8m4dSEjcPH5Cy5v4ehqNK8zJ9GwmwfdNXqrd9RxTz224GwC3zug8m7FM6zvks8FxeM",
  "key20": "2Bm9WZ1N1DADqRo4364kgYVjpTmxatsMEhe5PjtcF8gUuwkxw5hbRbYZZDUTbaCnfRjwurz9hULQN2cUGB6mbYPY",
  "key21": "39hoY2X7RCrVzbXKZVJfAaksVFbexqdxwDzN4PednWxczopNhbN1zYLUhNSzjE6w5nWv8ALE1V7K784Zv5gih7oX",
  "key22": "4xkMF2GdRd9cLxorccqivN4mXh3WmgnmGMeME2CTJv4bAM4vtZ1AHSgiW8F9HJzTfXdHPy9tRLK9TXmd2WA3xJ8G",
  "key23": "nkwBTZphgPwqfxzJTMjRjKmB52Q4mqCu1sKJdQtXNaQyHQk2uAFrrjeFs8JTP6DsDSCu7EtwJsue7mNQwCELrb5",
  "key24": "3xV6XiCKR7Wn1AaZu3LpuAYWYVwWwB2x68dU6M2uPkYYWhMhmLBvYHqrvqN6d5PqY1d1UcJtc8eT2ygTTaPokpfU",
  "key25": "32qZTY4dND5VXeTB8zp1YWsgoq1Y5kYfvM721Q4r51fWGPYbeVHiraNJezuXSb5bh552XtoAq5QsYx4B1Yz3GUvV",
  "key26": "4jEhU5NMdkKgryR1Rcmdv3KBpEXyxDBw1zBMQj8xjefBAas2Scar3KMDi3XzVDyTbW1qAfzyuqLhzyDxMt7DkWyM",
  "key27": "4t5J5Awts2esanriTVSSHMMYicqEqPynzif5LXBP7vvhXh54mrkfmPkEzRFb6Ypp42GCeXTT5yXQ3TM7zLFFatK3",
  "key28": "2NRGbfgHgLXo74wCs5vw7pba2MvFGLodeF2Gbn7R4ds9Y5LUqPTBajr2xtzU7a6uSSLfcDxbQmHfqsDD6nfcGnwK",
  "key29": "5Eb3xTpWf7cu44QiLat3eWE2gvKq7H523b1vwbkLG7UPh8zuk8YFT6S4ZvdT2SmXat5jTCA469pibWVimcR6r55y",
  "key30": "59LDhEFdNn1PwUMGjo48nXQARfA45CUaz8bjXBRvHnSYZCT5YWoWLPVhfv6vT1qQMiemoqk6d2XRgDfdjeEP8Fg6",
  "key31": "5t33Rdx989VUST2ib54Ljz4UPxGcoT5Z54MiW3cFdvtSCx8RFYbwTyGjJE1UGsmgQaESqC9yyU1CH6sqj3kzb7dw",
  "key32": "6a6zjqCQMBDf1ZWGrZGbqDqNnj8mfYrf8bj34iSKDgZ8ESqz68SaUSM6dbaHH3gaAZMTGSTJ15fG9TEkSyb4pWA",
  "key33": "23Z2Lcgadudjb54krKbqZPuXgsHxg682MHBabiRWyFnMm9YasN79uwmBWNu9hqHpDfD2rpDhWTz9XHMCwfo9fftC",
  "key34": "X3TKXvDxe6mqAceD791u7zFHigdczEtzx7Kb8HQMwrVM9sAzZtrP9j6Q7xd2AUT6oXq3VSMbvPHU8J7vasddiPf",
  "key35": "52PcoEG3itJHVGi5zBNHTrMYKjTpba9KgPKEmhQZHZBSkZAKg6Jag1WrUsuZaJbAGMQCJFxBchBLhvwZ41yByB4k",
  "key36": "5SKFKUiGBsog6RonVzVAf7WsMhjhFS4N7cKvkMTDywieZ2yE2fWYXf516Yk7bJL1EnVWCraAjUcv8pAZJnYMWtPb",
  "key37": "4tD26i65waA71Y33kQA6ie7QkuVGo1RHH4oQTzMQbwnS8DkGa4yS7EJ2q5C6ksefxzQy9v7Th15yDJJ3LrVb1Uwf",
  "key38": "2sSGmJM7ALQyErzgySbCmtT6NfV7rFbGji2vB7BtRX9ysqdMyVyYyH65RhpzaW4nyhsRuUUoWQESxXoCUAoqQ6H4",
  "key39": "4FecwQEfLkK2W2sYHj69eRdqCySHgSiSzoLAegm39p3BhbyaBSZ7skkEpe2g7d1pML89rdjME2d3tbFz8MCFQkeA",
  "key40": "347Gg99apdgFeEvRAfe9KWMNkAxea4QnKPgjubHX7Qkch2Pgdx1mmSRzgPEUSSuJT5ia3hZWxzNRFFxkpsnwdUi3",
  "key41": "3zLbAeNSPEKdsPcCDME28YbMStASxXGwbZF4S8fjzUgFSrX4GwVymHppqiRXgg3ZY8RJ3NmBRqUJu3pmkqFh7CfV",
  "key42": "RwYsrAHGMceDxVYjNQcv5sxfFKDMvPhbSDK8Uks4wGp9o9LD474inJgaeQ8wbCfHuEe8vAs2eWSMJQXAGzirYtv"
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
