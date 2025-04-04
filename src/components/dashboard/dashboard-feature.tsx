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
    "4hSpcZzfAUmMPmGhDCGDq5AcHkNARLFWC1WvrXU42RpuGAJoHFxpUNzsEUxPUQWezRBAV2YerDbZeXLSwqs3zW35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aetdK7WGRforjDXbEzNipwvX4o43E54jKJewkukCiBhHqJUWybgGcGzHCEaCULJfTydWhhxBZGp4id4DKbyn3nB",
  "key1": "56UZUDxcEoanveav5jutssMayQh12Ccyrjav4S26vJKrVa6B1wEJRzM2YDqVub3pWB8zBfpJiKrBH3ERjYRHSCh8",
  "key2": "21iBpfrm8Q5th1zvpM9GHh5TzDQHbTG2EvzFL2DB7Rez9EmAt8cpAB2acdZb2HvMTkjDrnVkvfQozWnhscini7Mp",
  "key3": "nFSN8o8RofgE38yfirbpB6hex3ySCNRQFWAh36H1VNsxBw5kT6qibMEstTgyqYwaigpEi6mBos4u1ciTXdKmuuY",
  "key4": "2NUq1B9LV1vCUNL1bVmjcvekpExsKJ5cSLmXtkbqHNM1ummUWCDbq5zq3HrmPDBQd5WV5rxamR6Jd4hRovjyN3au",
  "key5": "4ama76Pou1URm2rEw2go52uehNawiTg5YHMM24aP2U1SPS3tna6WseNwDsQJ7BDoqmcUhQHhnxFSfevEYPDKXaDb",
  "key6": "8MCVYw38VKBaKfjr9nSsqaCuksExFE6Sm4Bbagicw13o5icrk7jPZVUf9qsTuaE3sW69kF3pPSa2Pnc2FWVhQUW",
  "key7": "5Mz5vaU3tnVvDWMg1Eqr4ZcvDX1GFfc8U1rr6ftgQHy4x9oTAxRFjjRgZ89eHeHkPrMyrCiN77X69pGnngBuxsgu",
  "key8": "38mqc1RfRnt9BCRSB5j5VsmjzJvxtNcT2gMnrxoTVkdaRpW1pzhq8P8KpwCT92B8qjRX5djdGo6GDbiJ7knsH7ap",
  "key9": "3LjxV3dmA1oLczvgYWxuCPaTVQaDLmXXJqaTH6A25apR9cY4j8cXBADL3UDGbHkGGWrzYaPbHM3XheWGMFZqWKVW",
  "key10": "5WsL5262XTgQurWpQVebpKyQLV9ncyfkdyNevV45BjA3Cx4DHEWbzbWAq1nAUAGWpxfczL3YgKfiR9NMCDtA7KxJ",
  "key11": "xQDkvt3rYth7nSE9T1s4L6tNhgaUibKdtVcCpx15bEoFdWWcVEq4toRavQttpAc2v17nogdh4LvRVdWUbUy9t68",
  "key12": "4LXmPdDCpfURZoRCarm835Ep2CDDdnvWPkSzJXUQsbW6mUNMnhyx5P92zs55yaEXYtG6LsxkPMy8JsziCjWKugP2",
  "key13": "4UHivkp5MUMBWt599hGXtFg3CoXTfZ5xwYgbu3xR1NDqLkqDcyq66BquzQw5iyMKJMZh3PiPRroHhvhdYBMYbDYq",
  "key14": "1BKk3g1rAEAhQVgb6xgDkT2A4kBn8KbhuK4356y1VcCGYzuQ69jaqkTuxddbf82rBWpwxhnSmaZjUa8La4P4DaT",
  "key15": "ytYtJDsoEuwgMch4RnQtDfHHP9XttqXY1NbUSE7kJ3jEoqTfzVLwhpkhafJsxsyu6BsxP9gqFzxgsg6MKypE5Py",
  "key16": "2jz6HvPB9FSKoN6j1tTWmhSEV5ED7WKe9xXQCQRxX6WKuf9MA7zECvEYhfzQSUXz1wkL6rN7DHvKhgKAan3GMofr",
  "key17": "3ZyfuCTsraGJUgVdLHfxPiocQaqkNQNQscJM1i3fwRABqTpGrFvi8xn6efWtqNWTmSwYSSW8tXh6DsXcqxABKxfV",
  "key18": "3Uzmcn5pS8VwjaojqzCATAHaWanguJ6iBWn5wqqEqbbujxRMc9vuLqZXXDocf3pcDC3zU7qpUBv7BKgkkjBN5Ss6",
  "key19": "5DUgwresejJG5jzVhW5q9aFi44Mu2TZVAggJBh79yT1xTQxue1oz5aXGpKoMKyp3feYL79nLwxRjjChrCVYPKSCk",
  "key20": "2iuPbsDphxWnjcvu93cY7xwK9DWjuKvsSrcZZM5AFbfkLncpQxduJ2uXLqYMUMhR8MWgXB6CG6heHW6LavfqYjP9",
  "key21": "4Gw63F4MzacH59oi6F56ALuENQoUj3gy4NETREgY4yYJBeCFfYvqjF5s2XPVJiBjPzcmVgaii5zYW9zTtsaT9gLV",
  "key22": "5bCBeazyJLC5YCXeXFzs9YP7AzNyLZ1BWKHzaBBTyyfXSTcTRV1w6kPFfcT2aD7GkvwYG7CHqK2yrdUPsC9fEXUQ",
  "key23": "5U4mqq7bBdeEMjGZipj9eWsugwhqZiRxeWsHtR5QEGTfiwgY6gCLH57b696HbQeAyH9zJZej2PB8Bc2gh1HQGBeX",
  "key24": "3GjZ9gEjEnBPTyHctLbDu9v3iY75eZ4ShH4s16RZtMWvf2Y5wHxtNCcJoyBcY7LvP2PY9k3z43g8eEKnNW8H4wq",
  "key25": "2ojtFPJXUp8NGSMFyLH3srWd4afDNXc6iNUDTtKK98Xcr1BLP3jKymDzySf9jB4SdV1ZyR6egZPokP6JCaNHDbNe",
  "key26": "2vVw2vgssv9SQ3tKQu6knL5zeJ8BM6wsACmBQjFHuErEVD35M7VkPrgCjgYDi9bKxJaAsWhL1okUHZ5sU5Y1h41p",
  "key27": "46HCPYrmMGQVwiAZf8ukfTU7seKEC243KpxqwWfhj7FF1AwucD7QR6WWVhPzoLCwencxCHPs2vLPUVMbJ31UxChz",
  "key28": "2iVDZAyH99JcS8qmuoxdZToXiYgpK2zsMDNRSWkNaiDNeCd6CU9SG32bq9Q473k6oKoH4QkGKvir1sak8uX9e7iQ",
  "key29": "2wqBHQhQXjpChJ1iW5JSRnZ4feXKrLqveyJVyZcjF3m47mHxuLEgpTW12K5UcnQsNHf81D7LKvaHuu2JoEo1DFH9",
  "key30": "3NgYDVtJcYXJgaWzeGpKpZdwhYojASCXXgrYYKuoW4XLtWcG5CjHxxeQVM1dkd3ZknHsAvMhqFPrAQ8A1WUaAiGL",
  "key31": "5rPo9PnyWLho4HiTGcbe7CD9HW2XzNXc78znk3W1WqCqyyTnDiy4okm7utfaMD7Atypg5FRT19utwJj5DtPpUwvD",
  "key32": "2724fdabEqrctBB6o3fjmpLKKo7rnjJD7zV8N54aqqzAeDBYCha1Gnnu6JVahpga61QFHp35c6XF8ggyCbiPjoyt",
  "key33": "56XL5or3h7KQuMbs9NMJ59JXMe2dsSZ9XKaKEYZ2JKnMqnoKPLwJzYPoQMVjmg3ERXFBrHAELdcugPjriK7ccMiP",
  "key34": "5cPKGotgkZw6xtibKRKxptTVR7gVkLm7CMQq59rkGSNgv1GAdJpRRUdiBztxJ1Jk5tmuv3VAR1i1sYMFuj4i2e1D",
  "key35": "4DB77PC1m6Qm2Mr1YLTiVZuYJRv5rBpNyffu7K3TxBTmdqEBH7esj8r1hzMCsDJwYzfsWu1C5FHZ2XKpikxiYP4f",
  "key36": "3QzoUCm6PZbRj5NWVuiVqpK7ov3K4ZFQ5rBNmqifC19FGuqt7HKcjTUwdWtLwe4ZNhdr8zj6JuVGuotjLiLYfbF9",
  "key37": "2VvENZ2dPKLdQ3Xayd9zNZdALk2rPA9A9teHtEi8M1NEKo1wNPm2exq8dZriLrs8v11GSn8mE6EPbDJvCDHag41c",
  "key38": "5expNfyAPRUK9rU8QABeoXpcbpnXdd1M9Q5RmGq6rM8L4n8MU7vRQ2nHoJ5PfUiksoQwQDaUcTTNmhwa1NGXCCTa",
  "key39": "2VVujz1hJ8JoykWeHXhxqTVAWnZbp6e1PVedUEx3KRSyNsG4r1U78caPowcpDxZ3qcmFj96xzS8PxfqdbgMu3izo",
  "key40": "Pe9TweHj3BXAxnH7EhpdrZBxxHksvuyKvtj4DoG2Lw5rYBbsc1ME1yteCMw2WfBAcqiLuQnb4GdNz9BLaCfrtz8",
  "key41": "44g1d5T8qjp5DgpaxdBLcQdKT6a5RszQYARQFZbYNZKu3AZQcfMjHqWnU18ssazSeD22SM5HVDH3Rx3FtE9k13cx",
  "key42": "57P1j4P9EvAYEYxGB2ZDJAjwc18ZSrfnVkU7TxnV3y6zPcN58rBd2zW5iAP6RE5Scv6fcdsvRu8r3yVvkUzH9FBR"
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
