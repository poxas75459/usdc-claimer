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
    "42EFsFuDpW2eEtvAmRp4oYKRmeWaYphCUxgb7Ht7AUAQcfqzeGK5d3tQUragZH3FRhG7r4Tf3bV5mVX7rrvKcLQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wn3z9cj4epuf9YJpSvNFUYjULxFn6vH2csRCvABGytUWGPntMdNSqeWP316nb2tgUH9x1nJhCeTAHjFGRAHaKqu",
  "key1": "2KWcnVK1wKY4cM4H8x1CQp91KeyiXqk6yKZwB44iC7t75NRzUJC4BChtNeJZpGRE1FKMS8QyMfSoFFKhSegbv4yn",
  "key2": "4EJZwnJ6nJuhEuxZuMyCNM7S5dA6JxgJeFkrTZsN8AB54JNZdYG2RuK26YYTVkpn9Q7dYfsPTDA1TJBeYusoTxaR",
  "key3": "8ScFQFutPsbfj6zeH6LNfR14dBqvjhCDNMYmNgyDNkQKQppg3hczgNrUSCi8tF4KXymkVLyywB1h8yDvxisvKZG",
  "key4": "W646kia2GC3ZLwDQ1oN18FG3GcxkHkRbd7g5cwGxoPnCLN9ZgzHC9jtNzosKa5fJBvSt54x9J2VpuvanviYWfMC",
  "key5": "5gaqY6EcoFDiCKmbasQqjHmfRVSwDJ4wbKeAvqLynPPkwU66noXg19QfhFBA29zB4Mh3E1h4SQ388UxRC3RD3oSL",
  "key6": "62x3aZwSg9FkDxJ5cNCKRTVZmuCARZmmLLuofhXcqSZzRT1yK6MHAPambC3hCkWxmzMUcAV5QdP7qvDfvjqncUfJ",
  "key7": "2XfkbTnM1EytxJvWk56mVjJe2ii5YyStBvLHe6CmemseQ8YPjGeKVpLoRBCzxzavGr7vUFvcRSJwzRzLKLq9fNht",
  "key8": "5TMAZpwyQQGmVWqfHx2coYVidyDRT81fXtddSoMcJU4pxBN868PVf4MJt4Y883Ws4nZRGpXfn1QmKTe7Wwuxe4VF",
  "key9": "2Hk3hYYHDDt7qBbMBEJvVvamtbiTNfAPuRGefpHMY654TUWGZmfNostMgM9LG3AyCKRoJhxrgabq4qMXzSBcitJk",
  "key10": "5pbGs6WKmkq59Ek6TJ4Dv2oPzo4t6HTvpWZxP5C5ux3Lg7nsTaiVc9M8pm5ohgvWoUVV7PaRCpxTdztPX1hxbSTi",
  "key11": "3b2CaF6dNVXRbnxjDApuvMuhfGPK4CVd4ihfa4HsiWCqxnA4WXrCHkfT9efM5SR4c4zHhjzank7hFjUJFUeKK2K1",
  "key12": "36nhyjTQZVxK3pDZZwUs8ZCo76sTFDPsLkLf9r9UWvseCbJTh3YcYoYoQJ15UyqYXaZ17Xy7C43u12zgv94UdTdq",
  "key13": "3RrzcUjAvPPQsyA6YSgT2komefaJeC3tqrp23YS15TfUpsADwcaqWgWdhRboRFJKUSSwLp5bK2ZsWq5A9oVQT2GC",
  "key14": "4LLm3K2xjU6TcMtyRc8MqTo46GB9hZoc7cCkA3hauWgqdUE7H1bKNuC6V7atRotRzsRHX2d5BDCNQZNFCyrB7VrJ",
  "key15": "HgcYW5PnQMCHshfha74PUBE5zGkT8jrRzbdfVtpCEEJAWAdWkHW5P3da6Lzo7TCGgR3XDkzuDXkvXdV5bALBW44",
  "key16": "3oNG6LnDCN21dHcadtwQ373uoPe8bbPtZm9n2LGcvpzcmWjcBPPnVfXReb1bfzuekWDsWdBrxcqg6SEBYo6jcCHF",
  "key17": "4gcjDA5tsyLfGmdpv74wvVFz1zopwhxmdPaH1UCoEgXvQFCzaBrfhSS1E1Z9wTWUpyqdAMV7Pra14YpjsALt5cZt",
  "key18": "2vh7SQcMUdenby4A4MeM27hByP96UPzd3H1J2FSCqHhzcS6ccXa4PgABvhNUdVv5ogJyj2igGmrXpgsBunPmPDEr",
  "key19": "3poS4AchGCL4xqmxzxq7HdoEmcWGKTrjpb4LrnQpb7ravn2MmLXQq4K4XY1eBsv4AcHRq7TxgSYTnkmfoPmcEmeo",
  "key20": "6645qRr5HyUgKcHqcHVERkPsZZSos4H4oDbaJyj7S6hD99geJZrrNyf6bQgh9MzrwGiHcNRu33jzH7DP7xQYqYMj",
  "key21": "3duzHQaTyW3m4xZx2wRfzwPjZFge8XZLHFpn6umL9HNUUZiAT3dDsJtpuQKtBFaEUurf2EAoZkV6n85UwdX5XgM7",
  "key22": "5bpBAvbwPVaggdE8vuvLbtui8HwPPjynKH5UU2NpcdgsGA2wuMEwea98wSrCKqUCacKezv6z2xXz2X542zNoYSwv",
  "key23": "3uV1f6BdoPxafRn5bfwXBeRbnSL2NWgzKhZfY1u2KqFufGumAmwZtDVHVUGs9t6j6ey6K6i19SLW9u6PLoMXGP8g",
  "key24": "3YNGR3M3rqwvS6curnUrpz9seErSBTXgwwom9dkos5AAmcjxCoUXUBxJw6oycJknHULzR3udCuCxfZfiXHJiW9ns",
  "key25": "5QY7GfkpnCRBnVXxNKTMJP5tGJQr6pYx3M7ZdqWR2KgcJJh7Pmareu12yBRjddmUX55aCjpgFes92cyVCtgqMZEq",
  "key26": "44xnieqSJ7HQFKxJJW2yynVA2VxT4WaRxFCQJsK8PUd7d9YB1dg3o7LYTW2hFBh3GWfvQtJnSu3Ru3CknzPwtZqm",
  "key27": "3grLfsgdgNnmbesRYcjNmqWaB97Fpy1skBHwd5wh2Q81oVKq4MzXmGRmchMo6vt1kX1sU9gA21KXTPHEitN1vieK",
  "key28": "5dbAkegShxdHq2qTNMzZmkzLWtanZz6buqZTCi4VmM3Sjjt7dLDg2vAZuvi5o5aEazQF3q8Y1Wz7Paf5EzteYHKG",
  "key29": "5zq1BR4s3vkpX4gGpK7uZ9xLdZD1Rd8yXui1RNAZJFL5Wf12ZsTRhUmco6oKgDih9viY1ThGiNnCCbzJvUhbibVY",
  "key30": "439qopW3pc8UYivQHr4kZW7ZeM3j5zMWpdUS5F7kVw6gUooe2twXxop2ZQtXMu3bsgL49mAkKEZNJ24iFvtmYWKk",
  "key31": "BAMNgMHiKvkZq8whYFnRZieLm6BZRN41nr9kSyyEBQNdzegwfB4HW4SBwcd6RaZmjSATogMWpaWtqrwmdgg3wot",
  "key32": "4pSWVUf5qDWT5sfeGeDCQ45CCGd6toFZ3sovdxFvxxiCKoJVG51Eq93F2xmSE32wab2n6vg3qx9PVCnQDhV6npHf",
  "key33": "63JidpfgiWHv1DYWGuKq2fr3ZVEqC7KvuSaomKBvaseYK4Y1PHhYkadP7heE3v1BoyGekE5j4CFy3Ls8GPZsDfYK",
  "key34": "oRoxSHruzDzu3uwr2r1Jx1r4edKgNvKssPEbasTBskFLgCT8QRbZUMU8dkZ5EwYZjbHuBDRY7DjsdCGFWHBHgxn",
  "key35": "2bfvHStptAJkXUtRatzobFkttYCByZbi6kdsahJu1yebmU2oZj11jfYTDQrWitHnM4bi3PYftgnbcZ4TZXFK9unx"
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
