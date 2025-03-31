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
    "2nJ1B7mF7xtn248HmQLC5wMcc1DsfKJX6w2zjeS9y8vnYnAm1hgbUWRHk81BaArmBccYhS4rNpDGpd2pCiRQKEUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sDAKEeVayWtFQ35dMvmRa2aziKmuyn4pHjj3xyjy8xxQD4MRugSbDQckzqvGJ8JQDmd5XG9pnzNKSTDZ488NuXB",
  "key1": "4TCCMgZquP3VuxFSLmaBd7vtagvV76e7T1PycRdMwxuBmCu133pf7bPexxEMz4H6NZTZLLaRcPXVDy6qmzPvwy9M",
  "key2": "Uj7WB96u952XdBHvoN82T7QWC9FW2ojjANmqkCGM7pnowX8TPaobJxfnsPaAbyYFRUF9Y7ZPFkkSGZnd6WnazXm",
  "key3": "9KT81BrBN3BPy9W7pBf287owEtWrjgEwicbXFA2hPZwFTp6KD14ArMEiGqzx3AxaUKUoQRGjeweqYPB7fCBD6Sd",
  "key4": "37agtQQxPVkjk3xJJ8KL11jaAAbeWaoTdzFhaBdxYWq24b9ExgXJB8WvE8kFsUftY8umGmQnQgyATyAgRHB5q1rj",
  "key5": "3pTETbY4bvy3nYskpfPdkxwjCPzqnYNSmmLquCP9XmLfseFMA8QDwKq1KMjSWo3QKvL3nq7Bfoz1sE55Lg9vczj1",
  "key6": "5ccdjxh9sYWVUCbtjbM8FXPsjsUXWKQ7ri2KgmeNDiXA9XELnDYH1XcnSpffysTu1eW7QYopm6w3KkqKkKCaw2dm",
  "key7": "3CYwKbdnd8MCG7oGyy3kFxRvYVurnofbBk4NmGDuuWvquwizX9S3cW1E1zop7KN4xeMJGXbz36zys9eSzxkcbNCa",
  "key8": "26HEgWzGvwQTCka2y9foibSbrNMibupsoZbEWfDKzM6c5m91oJ4iNQ7WojuA3oM2xqCm9jbwbFrcryUpkSYAt2z6",
  "key9": "4LoYo6QUHqQKmuBYVzUR2HbKzDyoWzpRPyihuF7tEkVWrrnZ5HpQV2HivDPcMj4c6G8r2kMbhVkfPMWKWizyfp5E",
  "key10": "4xpkTWoiBQdSBEqKpcAG4iCWKHFZc1HBqyxDv3cud4h7r6huoe3udHPbne7qbaq4qJuSSi9Wf8xZXfzvUwWbvZ4b",
  "key11": "4ViMA8MNDoyfrCMPmR6Dd9mYnNQdakAZncpsjkXNvCVvDG3pvqFdnsvp9Wjokh4nXBh4tNyVkQhRQ524xSNEY3q6",
  "key12": "R6BVr5qaQqpdp6phJeutKQTWnjUijzeDWRgC1VALtqbCPjrMR6riM3xGwGwic1HEGYPhGPfK1p1PaWcQYrhg4Qz",
  "key13": "67h5UQhqJu7x3eBwJaDtXNJnQBwbGoopDRRcCj9faps3VuRsXwgq8a74ExNCCNbm4acS6groywpgMM1NZfRDxAkA",
  "key14": "37hcnodmcBZxegkMoG31THtE4EEpfFjAeFCMW1KVzvuoA2rZ4JZQBkinWL5QhsyuPfepUKGdJaiXm8KBZ1bF2N5v",
  "key15": "3JEzRoqHju2NNKkt9hV3B1NcDRyoC6dbWPE8TYHwYmncYAHTFEmqNeAMMxCq4ADZCkt9rPg2mLhiVMR5MpKJtAeB",
  "key16": "5ggwV4qpkFaiJMVdwaZQdGCPGfrbBqgS3Jo2Uvt2ZVNfqQ8p9pd7LYN6zsmes81Pc1jmMk1a8AkTYrYD4RJ4wh9u",
  "key17": "2Z2Sy5evQ35egjVMscN9mRcouyMnEJ13ApUYncg5tUMpTfA4MavKaTUSMGjGBcVaxJocA2DAzAZs8xwFraEXHqxp",
  "key18": "RAeYjE9T2fXECTkhMo3DjtCSGCtyWRyFEi9YcCu1YL9bx7hbJoSix5oDUuddptKuuj6DdkwExwChcEXfeNeQ6tt",
  "key19": "4kqt5WewgT4xxGjzaMmJffad6JXr1EwwkPXGdFZYvqjWg7wa8p8Dtt9YRn1RfdFyPhXZPuRrcwFyD6PMa4o6Dje",
  "key20": "VfitRVL8LTKWb7dGagZaUuQojDRJpsTNaSmfVekMkwJd6X7XQ1BkLgrU2vcRL7y3zPcVroYGno1f1rLPFm5jitP",
  "key21": "4Cu4A2255G1MnDwopAZRNcUvQYLhe1ZoX2TQdp4j9VxZTJWK5ZxSgqyiQ6vZbRBNMzdekyf29g6jA4qesfGbSuDz",
  "key22": "2dboNNDNujRhamZbQXecJt8sgA5KzsG8aAyuaY1mQXnEmEU1uUUb1ZwHtrF65S3PCr3sCu64tbTEs2j67wsTYguF",
  "key23": "6NnYcemp7jRMQtj9MPZgXhDCubbUsQ1Z8zicDVvfTMsXDTZ8bNjMego2EBKsgDPPNE3Li6Rhrmkf92DfjRDav8z",
  "key24": "2gLCDEFt7XDMiUBQ1q3BQ9M1tWUeA8kzy2zrrb5tj478DZRk2sQU8NoQLHuoQto7oX8uKQMFYCRJfK3o7CU3JqWi",
  "key25": "4CN1ZBFi3H6kPndsf4JHWzJYe3smGYjupLJzteaWarrtMqHp9Anpq3WtUsujmAUvqUrDRrmqinRDD17775BzFxzF",
  "key26": "5KKjtr3g686jFzWgMj8WeZAPJ7ZorvL9bPjsVCjKKZWaP9ggkCfHBYEkjuvNYaUjo2DgnkDwXsFr2zyu8vYBSfHh",
  "key27": "36rdfdkuWS3A6o98sypndRWUAmUuVWeTqVNu4cRJ8ruWgEXRMxShuhNx3CaoNvkQUFgHATYzW8rrRFHxsgLP7WcJ",
  "key28": "5KjK663PnmcBw4X4wYXLG5UNAgARStupt2D71m9ZyGWbBAmyWbAmczdXFjcXidd2S9ULehFFvQRdD8UtuZaMpqtD",
  "key29": "54uyAz2caQEnh1SQ3cpUmX8ibLUCe7TYH4gKm8Kz6wV3qAVxNpFArC8fQGbK9bcT1K1Cuv1eJefBPr4v6sTJ4yju",
  "key30": "otAYhU9cKKM7rjt9gd8GiGzaRKAbdRGSFXG3AjZNQBfty7ZvXM9qZ2vaE1PJFC4iq1Cx37LJgLA4CVBjB51Sgbv",
  "key31": "2Axthmb6tq4xhXoPMYgD5YqY4izT2DvkaLnx1XC4UHvkc792p6ui7APrygE8t6Xtyw1bc4CLVFQRHwqggKqFV1Gv",
  "key32": "3FWPHbSV8U2TejwBZ3bw8wJ93phiGhGJjJNmD5MwGVx8JxiE2nE1EkS3MagBAACrob7LTRAN4WfW4WsZ3KziU3wn",
  "key33": "3LW8JiFFsCsUxgXtfCrd34ZRcp4pzzEsTYg4VpbKTd1pXf4P1QUP6xpTyoVtxS9e5bRG8diKQFS2YTqtDBgFZXMh",
  "key34": "5cgjXqchfwAjHvyuwjG6U6HgDs3wieQ7GpZY2JECpwZhndQ1Mj7xPRQ1k5CxNmJepFmXDGAQVQVzQUsXcHYDHWX6",
  "key35": "3teEaBTxxDivgbcA7UkaJvojoAb7xYqS3Gy8QQjq2yF3CqqSJc4McANf5QQWUhn2g8UpcHxwsoN6cvgFUYz9jo7N",
  "key36": "8GTUvDoehQP9ghsbMnkSBBuYTekWXE96KBk4Xbxc67aDXM7LH7YZbaK7yhFqJg4A9XfqKqTa7Yp5oQHLwAEMG75",
  "key37": "3HqsnAwzGgxDHb7grb3u7SLUN3fhhfQfAzd8yMHAAcXqtVXJTuDE4nFUNTr2LJwthEypeWRVmWFaN7ho5bqkt4ef",
  "key38": "APL3wpnxrCrpRaw1CMP3uBRa8hnRHEFHKbFSsfj4994ycSobYfrrr9NC7UD5ET1XETzyKNJjbh5sQGCCUV6uvQP",
  "key39": "5LcWDuZdvncoXE8dKyN84WhLYKRn8MD9b5rULNQmViK7P4ZXESimeo2YJTq6G5K9ktJsaGZKXUQMgJqjSvYCkvS"
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
