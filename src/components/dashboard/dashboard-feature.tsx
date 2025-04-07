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
    "5eLwsjsrokppbdkeaKuR6zYQaN6wDWoW91Lu6Ljwa9F55JxQYawYATAHFZoxqgvmFZTijKzYr146zKhtGcpqtfH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kYGk2oAw7vYVQWMtMyWgGKqX2nLLJyGti2w5XeHo7cB2Wbyi2Ltycnvx4pkLMHQoEdjjFLjHTWT6SHVaThNqSYp",
  "key1": "2DbZEMPS7o9xU2NxbTiNRFg4RyQFQNd1n2Ezhhq7fuaSk2eLo6m5tq6BqUufo3BiSpvKqnasxfCxfKFxF6v5Ayom",
  "key2": "4gvfiw1P1yeoGeXcG7SoiUgAWAEmt3tpe6UaCpMkw84TF1VE2UvKUUnvrE65GU7oRZa3t6iD1GPrYTFNQEzERUJ9",
  "key3": "LvLUZuy8YNKzsuA7cAoHdPkuGTeDWEYCme5cyrdwjrp3S5ochoF3JmvsdWJ67ZtsyAQsDsZFdb5nfPmQC5iu3xi",
  "key4": "5mxTefkZW9GCuTpMnB1d6XkaQVFrgFTFRpruHnSBYgztBwYw7rkMZmneBagPk5jm5XQ1x1ZbvAe8w2MNUBuqmp2t",
  "key5": "2xUwAQqoUrikstyqYgoN9k95de8RtgGAtksGX1WADetiusGbZVfKVqwEFhLkFE1pecF1eZU7tYuJdxB8Uot59wdr",
  "key6": "5wHkchZ7QEgeKWDo6uebFNLjFZEFJk4E9QsR5kJCbeSXv1kyQb3bEhSZS73viubECqrGPMmpZDZuH8pWV5tut1HA",
  "key7": "T84967yma4zwCFzbcCYSrjcNVfThmhQ4bAdQhqDCPskQTKxR3kAVv6gNr1SFmDCxSPkaeBFfeyuKc92XfMekGNy",
  "key8": "5XTontbySmxqv1GpigRBisGzkDFT2Lfk1PCPQJKRRej531AJqPo4FeL3A5VcRQzjwSeXPihLSXvKwL3Lc9iRy4j2",
  "key9": "3At65DVHGa5SC7BVkCCfwVCprSXTjXKXiB1XjPmJvYQdHkNA3XWgkMnXZJNkxetqwguXygxsSwd8hH1uwhpgrHa1",
  "key10": "5Vufo4Cmr4SEyRnG11o4nLacigJazq5MY6vQ8QbWGtMPfoesfWZEb25AeRWvbEmq1xoYPhM1igFTyeAVpU9Qv5Mv",
  "key11": "4G8nhUBzuCGTgUAKGNiRNrKvnDcvAMXi1qgeS6FLdjvHX7LKKVEVtmmVYLq4wotTuhaHjLWH1DAtCiFHG2YkcGnt",
  "key12": "5KfiV6pFHBhoqrG2q2aTvVx1sk1Bdwhnzn2ncCTcUZLjJtEBKmr528TAs4AkvfUpH3BVWXciu1R5S9MqwpEhJLcj",
  "key13": "5YdNfwwRfKycYHt1u6HU8EPQ9SWfER9d9momLwi7i2bRtaSqJXyhEeAkynaPSrWiVEA7ATQ2epi2FG285Fg4Wr8t",
  "key14": "4fqHt7vSZVWxEAZAUVxjsiMdK4oYLqX2FLCEC29R4QQxMz7UY4fHPUDKKAQUYDFfwML6YWqqEzEPhG7MtA1qVmTZ",
  "key15": "3ikh11Nw4n6Z9sNSkyUMr4LaRxXXz7rz8nQXa1g1An8zJKo6BnWq5hQwjv4YQgyejvkKeyjkApKwUYogkEhhrdtP",
  "key16": "2PF69d48QLTiDnynqkCKde3DLq6QuybURLTca9iEt4SZHb5pDdyhMWM7UHrb2TZgu4U7fVM9ovTRidg9kfHJeaMN",
  "key17": "5Da6m2THf9Fw7ebS6i2pR3gBVsTZMcnwGwT7L9xV6bGY3P88qoWCB64MqWBvF64KaBmXoDy7nGtK12tjP71JW2f8",
  "key18": "8f7MNz64RTBY68UkWNisRmR798822MhqnUUs1X9npxpdX4kQdY5xBaxBmpkAjgFPd3J4Nr2N7Eu26qpDHtx4ciz",
  "key19": "VuwMYYnfGwLHmZMtR7XCjNbkBUymedyyF327BAJXPkrpYoofPQkka9v2DAULQfvNJ29dMbp2rvKqvUToEETou5S",
  "key20": "cQtXSG8AsLERZRPXS7Qr5upy7G7RUjWMASY8VGxR9UDYJ8t4s9HaCrZfL1V3dbJBTvwNuMgJZDePNeTvUMfcKQ1",
  "key21": "VvfZsHoinVzL8hgrg2WQQPdtx57cBdLoGsYqv1fbgca4eNHiPzkFRxxfN3YjsfPogc4xTBhaCXyFzf4RNLZ8Bg7",
  "key22": "nyrbwjZbxtg8ena8vBxyV9EdMiqbkrzaQ1XfyGCarnKgjtNWUDYu4qdkETSzUTCVDqqeyrvaepEEreNN4GefKGV",
  "key23": "3ytkguQzsUJmF6L6sjFAwccxeWJhMcsMioLJ8m5Af3YfF5Kbc9y9owDjxfBECunE9zUQd6TEHfNNtSAGwPCDUP85",
  "key24": "3BdsNtHkDyLHbm6D5QuVLA4y2JccjQP1Kbroot5SSzVNkWgZdEQXS8aU5NXVgdZvnkPrrQoMPmaiNkwSQabry9fj",
  "key25": "4YvFndUEk2gQ782BgiP7yK3GFmLTG4hgLmcBhnGJnyFc97LZfvtRM3hMpft9zikkTQ1bapzDHkA449WAraC3Exb6",
  "key26": "cVtmhdwLrLEJuZtnemnpokjWQArHrvPvHCdo1X9eGYzn4REMDnZs9tyfxdn3RSPi3G3VCtL9WongiX8KHaEUdub",
  "key27": "4wRvjALgEKuVchdFd7EA2r5yT58SvffVSZ6xHTFsCYr6ShVgYsvD4YM4B9fteeDrhMr8BkFDwgtTJq4DTDancs97",
  "key28": "2fkmPyM5z1z8z8WQudpNQDFpzGKWDfs7DePe9psbi2Y8sa6qHk7kosaq9XKkvStnMcTRYc2F85xa4sKBAbuNFh1b",
  "key29": "2kULdjNaQ9C5J4vjrj7VniKh7BbFR4EURe8frashdWs2Snx4RsEK217tAiaVEk3Tovto5JMRcYLwwfSvwJcvfYdu",
  "key30": "2ygxxN8bHnTx8PLTrjKv78GdJhdm4qZEAVN3bSAbXhHMwg9r9G2Cr9euq4ZmQ4wpFxRmL7iBNHboiiGrqZY6miXY",
  "key31": "2oEGPtqdsaBsFr9EsGXV3csp3osFAEYATY4bGBqLaw7ASrvPRr1dWvo4tLjXenrxxAN3UPxgynMTPHQzmc3vGYdm",
  "key32": "q3vyd8bzrpnsQaWoywsALM82pJgPKD7h92CYHGPGTqSKWYJe8PybmYYk1WhmKD3WVMk8mdq5MZm3FZsEKmXfwiG",
  "key33": "63aAiJmSXmptsu3uJKw8pra66mu9oDtN7qxoydABEcJZu7zKEGrXJPM3FCLNEC4EucAN6f1b2pbQ1YsanVNtuxZq",
  "key34": "5vhC4usBZvtc4ovLwfyC7TuCYLBqP4LtN7Dvp8Zdye8N4zjgeXGvjCkKYVM5NcGzjKYsRb11WdbmeqTnbWKUjRGN",
  "key35": "3uqwirx7P4G8NXFQTi7qF6ZSvzioa7jmbRTbdEvMrQbi1LhpuBXmWPEsycXdocBha2SrxjgCis82Hhmf13Mi4LKR",
  "key36": "4xag3o7sruAvqG5QJkc2LPM1TMMzAJRST1uNQWpKQDBjUKBPXvs1MfZ6tfUihwKhejXQCxTceXdxU8hr4MscGa23",
  "key37": "4ZnfkkQ8yo72VBkHpEG3JF7RTNV6yC9FafyNkukUdGVt6PYvqBaRb3RYbfjaF1jpA9TES7humPF9afHDvQZjKyC1",
  "key38": "4zrp4fThV7SrfZthUjzGHykxxhPjEHw58UgcBJqA8ke56V7qDGUALWNWQRW5jGkicZgX1sebQRa3DvUEjUiVMWWP",
  "key39": "2nNWx5JMnJMDrajkG4V9T4FsJp6DSRCjkzee1BN9GSdxtH2i2EwP6WbrAei29Di1AzbmzyVJfbsUUXE6RHJmGWie",
  "key40": "3HLpiFBpt2vpqdLUbmTPGQe1qMidCmSovnmJPWxCdEjCXNMSbY4JvuFaAHra4gLPhTkTKWfJzaQpnGggzojL5qsy",
  "key41": "JnRx2hE4LP6h7KmeBTUYKczJUWbqfkHghot9hYVvy1akdHud8SzbCAkxgf7mmSADgHkchHsHn2Rz5ZggxnA2jPw"
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
