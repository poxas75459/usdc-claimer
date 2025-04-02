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
    "64f34oDJNMfPzZmXH2ED9qygB5EaSDQwDdTmByQHmy8F2w64oxHkNtZX9LR2VbMKtBZaMZr1wtD8mc1SNQebEk5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wme19hKyexMjXACnDQa5KtCC9CVKcgVuQwm9KwiWkA7dNeDaJVSyfkGKiA6EYqwgJQeVbgNFuFmmmVKkn2NSsZ7",
  "key1": "2Gb1o9PEZa2J9MTDCu7fTyvey9shvJHMjtiC8FsVc3xZ39QsCyQYHjF8tbJWyfqMgTcHmmiFp3wxD8ZLQ15hSEKv",
  "key2": "3rQbHbRBMYu4MT5riG8PcgkuH6WHWFmcQoP4XQ24JfbazSMgmLgeTZyfFd5UBjnBNmLFs1Nxyzs6hhauLbmzqrG9",
  "key3": "3hD6RHDY6L4LF9HzzrjK4eAsNiVucVnzzGLAQK5LqSMjizYt91Eu19DViXnET5FTanEtQts4epWS21eJ1XNF9QLe",
  "key4": "2BkrTybZ5nbAHeHwhKY6sSK8QWGLVkUiD6r3XBxogp7hhENUXxyuMSWx6kfsbfYKtMMDdLGoC5ZXwQB4wT2prchU",
  "key5": "4xVYbH1KTP1WFaFq85iA7VaMdKMssSxTMa3k8FByBECLstWwhN9KizpBt5uYJ6eepopuT7vWfYo74puGKtEZjkdZ",
  "key6": "2g9FdrDYgZMuuKdhvQPtvEZzpDEG62SE26raAM4vFcwM2pKr22tKgRE8B7tDuzTv3bNJsEFuHmEsmSWiuvsjKrVq",
  "key7": "3MK4p1QDTk3bPHtDJ5HdyumKGAKfXpKfoMs5oqVFV5NxRo7WwU3PghLrz81CMbvq2QovWAtP6ArSyxAFwMyoVPod",
  "key8": "qLXg1AWpS1mT5N4V8HDU6seJDuycqRjaZbfGtY16PyyMYjERpmSih1XoP8fsnRRx2nDJdCaB2NAanxxNxrn67kr",
  "key9": "53Prb9RWhYfxNDraC4h6z9m7sbxLRCjwpSFhCW7ZkhHzgxQFjYchK613vvRKy631qTm3ttca4ThKJZeJS9W1GnMq",
  "key10": "2i9duLBhwRgfnc3v1rQSzkTyPxK4uT48JXEMV2QNRMaJHB8X7dWPoWfyWhSSgy7XLJcywQNbE2cxCk2ykjYHFMrP",
  "key11": "2c58beucwhXJ74PtTx9D6NEgkJjsSE8AN6ziq5pJwn71Mm7wqYeB43T27TBvGD6f3T3ctoiJ7jV4oaFRLPPgUDeJ",
  "key12": "51wzskuYKAY43Xey3KKfFV3sKWTgUyAxHjAj9EU6tmksAwzyYGcUmBWwJgLjfs7doi8FQhhkKX4bKLhLrKBbeQ2N",
  "key13": "4yNd22UUxFcZapsUYPDprwAJ3NA9pcAekZ4S6c5C8axaBMuxThoiJ965x5KPJxYLdgAnJXtf7xHExXmruekkK5pU",
  "key14": "4fqT5ucVyNYxAgw4KQqwGsfeFDFJFviAoL1q7XrSm9jP3yo69AsGmT6ZPqcHb9gKpPCjmPDJjqR8Ahgm8scCBoDy",
  "key15": "5Ce4CTATNHffvQ9mpvRMMtTdd3KpcP8aW8Ts1QrDdxebDSpt6q6MZjvwrvyn7MbnfrFm58qM5NbgVXqxQNowxwg4",
  "key16": "iiJXT12Nde6McR4RaEYu5ehS8zKt9gyuPQ1x6XNyqzN3RjKeKZ3nU4k11GnAhADcdEcoafhywYK2eFRywo3tLYJ",
  "key17": "2z8rBH4QNeFFaMg5D9KMTp5tL1eg6RSUcdyqjfwJcrN5ZZC2H54yztFTDHsUtRXX2on3U34uxq4Pnqkzn995f7DK",
  "key18": "a41aarop5CydGyZxnybBDZxBp65YdN8bgryD1eUVTAYf8sMsTwvDL8Lk7MBF93u7SugN3YqkCtQxpj8eTCsyppU",
  "key19": "67Wp5cGRAmHYuuzRT3iUSULAHU6LxYzsMbm9q16oZxDmRfvbXymKpCs4UURvnHsqwCkqPbBrQxMRHvSKDmTPR7gU",
  "key20": "5zCVhJvBxTP7VRuGve5sbNgix4ZCbU4H5Dq8AbdpuyqsA3JNW4toXm9skxeREy9TCLkPBghqYjy1L1tmy84N48p2",
  "key21": "4z6EKCaJsEi7UXhFbPUx8MCkizVyCxS1CTjmpCxcDnAPDvYLAsFABrZt7eVjzKMuWHTU7BGutyvgsGob6nVPSg5E",
  "key22": "5tnQseEJm5ch5WU2MTrjxJvaTssWzNwkUCqFvkZrKB5iXdRRtbdiKQnSfiMkGxn59ozasKWzmYVd6Esab2AnvLma",
  "key23": "5sCWZtFiG8xXKxRdEgQEh3MpsXFDGUqZwCYfMstvw8Jz16sdApZhqk1pUdFtwnuGKxBzQWvLFbTybyzaYsP65ZuC",
  "key24": "215e3o2A8QKpYsR49uGauUeair8eFCax2nMGrtSJMY9kN6QiC1mZ8sG7xVuMj1RyaYxoq8UVqz5yczBkdLddbeoD",
  "key25": "3E5Pe6mDpvALrUzXXJjSzUmLCtGmrstDgYxMpGGceCfNbDdArz4Nwex6hogdbwCwu1cmkWHu6cR5kE9TqpXUPdkJ",
  "key26": "26sMosHveSwbFoKLFvBepqRQZtTxAY9JR1whFJFHvSxCuMv4V7EzqJGUtvrpPz5MUvKv7245dLkR4whhgJnDFdwZ",
  "key27": "57WxbpvQ7TT4vUNJKBiexvYiy2Ji2dwRUHEs97zf5SjWUcA3E48eEQ8Bfd1HhhrpfWbRxuGJRSbwSMhgGK8scyRg",
  "key28": "3UXbXxQVuVjqGazNpsz6Duz7K9EaYWRkAoG82k378dTEy9wnMYTZQ9iowwX7jDQDS5ynD81b3nQMTUZcN9AUWWMJ",
  "key29": "2FcECnHX3qzZAFekf7TuN1fLwM311nYj4Zs5VZ2MChpu5N6mxHGnsCsU9JwyskPP6un57gYv72nmyZ3fUgFqF5dk",
  "key30": "3WBv1dRzFSiH3osksNPU1JZYi14nbG473B11otYnzhZZq2z8syV8azYHC3ByGUhH9NU6xdquxb3FJFBYzWEoGGwd",
  "key31": "5af3h9Yi9wzU3NfTzFwpqwdQyPSKrc7y8fvoUvMYoyKqaNbK7wPW5bYigdEFPKkh52TXZ7DsQ61HdFJEJzWjasgf",
  "key32": "5c5z21QfES1NnMMU6KREcTfkR6rRh62RDTfHhKq9wdBBAFUPhhaGPmqD1UDA8nTtHyrTNFenbee5kb4dgLSJTZLp",
  "key33": "4mgpA2ADLr4mV1vevMTViyZUMybFDh372A5tNzYfRB8dk1EKSjAVMGpqCaAaNLvJ1GxKypvD1rj1ZicKHY2x7qUi",
  "key34": "ip5FQb5EsCuXMztkUg54qa3WuZUvwQjmrj6sptLfCHURzvs9x5Rekev6z6gaq8Mv6MHnztnFzTvnxy5EGayU2vB",
  "key35": "4FCCQioadZq5efxz9sHCKWHEykpGaA6bGBPt36t7CJcavYGFT73k5YX9CfsYsALZMKnrUFuaiAxFQj8svDqfjehS",
  "key36": "knLeFWLZCbMnvrUwauFQSEQKGeja4xUGh7EcdetwDX6nr1hbQif74KKKqBvmVc94VUHTZUvMyxjMuXKMaNfpLHo"
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
