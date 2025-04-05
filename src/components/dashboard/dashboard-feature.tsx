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
    "59zaUsNqYQ6n8mE5hF5YcSnciZaH6FQq4UHqoxoPX1Ptz2CeRsdCRNd19dVzTexKaqvKUiR93JPLVHQB3qwnwNso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zQTXuEawrRswkPZ19om57KcQmDyN4ps2JYkfBfxiapce7yNmcZz45e87QDJYYciyfpc9uJuu7ePxkLjmjPj6rRP",
  "key1": "3pB9ffvU6DJ988LaFyyrgW4yQ6b9SsjR9StSaZHMM6VWrPpRkq8znQQJexFeysRwN5ZGQRzkH85Y1QYcyHuhaz8c",
  "key2": "2PxNR66psRw6t9AKqwcYYXHB2zTwrZ13ioaDQMyk54eZBKRR2LcuN5xZAQz6jpAqtxKczgsreoRCDEG3TdT1BzPe",
  "key3": "U5UX9SNHK1hi329tpY5g1GiAm1MNLrzi4U1mdTbmnp3hVdQxr4yBs9rvg39jiUG3JuVj4A43LsiZCdcmMY1i95E",
  "key4": "bZBQjAMFdmot5mfCsY8Dw8HLcCf8M9JmjqtmTUiWFV1PLaJmPSx8AYrAPAoNNx5f1zckyLYpoC6YT933axabPuC",
  "key5": "5KZGRbmHCuZH1sTvXVFkkh3E4SSzJ4BHnoJRjvQNMUg42zc7eRY6pykxx8UvMtDQQa1jgswDBcRPuCjSPMQSgto2",
  "key6": "24dekDkSzXWfVFMrf9o7A5QqUxN4TTuYbkAPMUVy6wB5pKLvZJYdRmZ1whH1Jbqd9ahCsyS5aBdP3V6hLXU464oz",
  "key7": "4qiduXvYanhToWmxygmPm8TzieWRQGgdrDQFvbFGaiFAju8N5xGjhPaKjxfvf945KfnxRPKJvctn1JswYkvEwmvE",
  "key8": "3efQRqJqEo8u7WyfrWMPBKKmfxB38D8AMkKot8tMoXz16AbSQZ5EFFWYMumxT5caohKj5UbNAM7zh9JCnXovKmq5",
  "key9": "taiosEPEfwDdbkFMGMTyQULU18gAVBqsDu8LGwA8oAF6dmqqhtxDddw6NzoEnHVa1apJKuW1M7tHocyS6bVDAWG",
  "key10": "5WcfiB5hwJNgKbf9KMkdQ8YRm5t638iJAZaSYmkq8KFFHcHyLg3QviGUAg3wKV8G6uttJRrCYWdeaXKUwh8zKZaK",
  "key11": "37KC6BzqFQojz1LMXUYPTNwautTojRhd8Lp52N5241VrMMU9rknTjx88hb67VfUxkSML3qUs1pK5sKrUxDo8vEk5",
  "key12": "5HNpnVbUFx82A2hfySZSDH6CstFfKg6Y4VDXP7F6vJPyF7Ug8eiHumnXBEPD3AMNZvCG3pnDAq2QRzSB3725fBP4",
  "key13": "5ySRnccXUQf9u6845eLiBCdrnfVb7rMHaKuLyipBTMqqBcCZ8RRXP7QyZzE7BRAiGU9iuGhsU3WH9Uo9GukGLBXn",
  "key14": "34tRveucLQ9gnF2QhtEAF9YvMAnhkFBdTk96gdm8oAyfMFJrCED8FsrTCgeqQCFRgEMbwY7pYMHGasJ46QpvkMgP",
  "key15": "3zaNA7w6NndGQJvnVXmLcqPk1S8aA9mK8s6LQkYjBVpveowaDxu9BHVrigdL3eLNA38cd4yLn8qHkD3A3dpo6tUy",
  "key16": "3HEDhKJhopoHAWmjq7WnSeqYRaEhvEdeRdonLQfDzQTkAahbPN1MmphKQE5FXhRWzAtNdKF9tGnCjU54or1jQbMF",
  "key17": "2fHYzcjLEWBpnxxb2qT5ZvQTcpjE6ZY9DYP43DznVj5z3c2aFAjUBYh3sczhvkQvRdNLbXtfwWJxqMVdVraaKKmL",
  "key18": "4ZcdYRo6asKqkGZ8ytKoWspG3szcoUYw8ENYtPPztpd8pGSAcZDpcZ8NwBridgvrSvXWVnrB8JKp6Fv82Qjg6LXD",
  "key19": "DjWFdLLJMi64eRXQ32nyuMGvPymaL7Z2PfHnZ5XQnR3y83wXoYZHuGz1rQYGANaQ5JakjU4usA2bEjvMmAqytUC",
  "key20": "WDt7xGVEkRK4UEhConKHYtZqauXaeroMB9feHFR8GAnAuNBKrBCxwE7sPhAwvqUofMvyAUZzZk4F1qGBtVtbAtW",
  "key21": "3dbwrCVFk8AXSrSiszCenXfj88NULaKXfBCARjwdzV31renZ9bQzBMGCbMqycq1mqqoqBQLa4ACHtZ8MsGvkSCUT",
  "key22": "2hiqNcZiihBfhBYqd6UnAZj65iimeJy8ajSkPZNUTPVTT7KR9GyyiGBK3xWn4fXfLWfBDHd6GErvMDwAk6p8scBt",
  "key23": "2ZNA6x8X7yyNZtiFVxkgRRjFkjciM43L74HrgGmyPyr68p1VVeZU8fro7np6NKwW8fJtSwmFA6D7gJxSTCKn2k9x",
  "key24": "4KzKMhr9nnVJbJBQXRD4eftnrzTJ6SZmpNTpeWs8bFGEysRBWApepmCtLTP6hFTVFq7nmrwzgKfxARxL1qAfqbHN",
  "key25": "5exa5dkVR7Y9VeJiyyfxY5RL1EqTxrof42cv6qUHBiaMRtrWssANkjTSpARVK24YeBK2AzaSjNqnoX19sVq6e1by",
  "key26": "3L4UErp4rf4gQE1eHqmVJwMUWehQuTFdf8itGcbQc55JJoSr8NxcPbddYJfVF8vPiD1PWun4AwiD8sizxVRXfp51",
  "key27": "4oJL73mYt7jJe3AZPp6FQ86E2FtgAdeeo8aAH9gegGwVs1ppFQFT5WBVQ3pe9Ksk4kGjaX6D73NLecHaqyVPXh4L",
  "key28": "2JPVfZx8xJ77HNpjPgXyEncADpi89G9uYmQ7UzcEkCKYwSyw1HmdZ4R4rKq4euXoQyR2r3caeYXBHmFzLetANM8Z",
  "key29": "5xTdVWY2yMjQUSHcF5DDyxiu5567MgpJjSHRsZxPjAVXAKpf9EFJusFCUmytW2dbtrLowSLZ9x1iG8jBEUAfsptg",
  "key30": "2roXzzmSpeBvEySvko76R7asgzzVeN4scXwZddxpsC9MLy2Cbg4tipDnwEYEUcf6oaCzLRfsjkz3qoMnHfnoiwnf",
  "key31": "42yNQMHv2n2wbp8BnqnunwqHZVzvdMCXFqFgsR4g51CzY3fu2qGW3ftVXeWKdk2wkPGLuVtVdwmZLMyoHXBTAPmj",
  "key32": "3sf3EcwvwFXQzf3FzFc56LzbKPwDy4iPKoupArbh9NPfU9f2AAw9nx7pH9fjRv4qFB6fZFK365vBb81YUs4hKr4U",
  "key33": "4KyPhrQN9Ac69ZGQtWXjou2F2aiS3nXtrGeiB6B55TBXv5nmCfDZCFPNmRezcuGYsa3vHttfgnExPkxixLFzh4ke",
  "key34": "2mkKv9q5Wggtc6Zimef9RhuiLEsfCEsXKctzC28dbvDEebRAXQDtsYsTQABXioCumsvqiB8qRvpz6eirMq2Mz8Br",
  "key35": "y6uVY5Cr2yTZdq7qTBA1nQcRJ3dBxNPN1yFN4eHhcBQaVmWvPrM1ArxSPj2W3o18zfmD2w6P8PbSfHaiQrFntUk",
  "key36": "ka49sZEwjAbDaLgPMX1qfrzoBKTZZTFX1xToVSjeQBWUDwLhjRM1YazwdwyZ45SxAu9jGfH4eP4Y4mJ1GfD63Hv",
  "key37": "2y1XGnihXNYLh4xr7MqqpcRbE7PcFKfLwSniVWCQVszrtkibWdvqDaypVigyQh9jva774VYj5sTr5dgwJdW1Njwo",
  "key38": "5c1VAt4WJTMUKZxZoNWRJEwaRQ8ExJcPrXzf3qQ5TEaLjR8BjhLL36gyYwBh78FneLFoUMytunznnLDQEeygEEBY",
  "key39": "2iSaYji1dJqvCPp3zt1dmnm3k5qafbm1JYZSr75qnhbzvXayjCiu1T5Fk7X3QK1uLW57tfjxCGFzzGJzd9hVAPuH",
  "key40": "3xqcgjnogU11xRss9D2LUZV4h5d5QPU77TFC3DyUt4TvpHsj9To8ft8PqNuThiFuqBVYG5Z6gjcV5sPro3fEv1cM",
  "key41": "3gqWLKrMjWm3H5hrEftAMdDZ4d2t8CGB4qm7QnNvWkKAi5Vftc8YJeiWyq1k4ef8PA1gCbXYacBC4ifiRogeKL3j",
  "key42": "4VRtPBR7MveN139wqoJ8QrU1vNpWnBYWMkN4RFswdxH9XaEYALX3ju3Jbx5RTcQbgbyijh5Qhv13hFaEi52c4SUS"
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
