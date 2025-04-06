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
    "2wiLF62paZf6V7BmudrgBEhsi1Y5XXnHomnQ91FF4UHdiELBkwNTUd6sGqX5QwwXB8pvJaToWaRoMWx9VhLMCjme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ukRRLUEGFfCmD4ncvuLrE3J3CQSSwtt5PcCn3DmVH7AdVCvzvRrBzVm95boPdBSuNEzx1e9n9zUcU77km7hJjEX",
  "key1": "4dF6A1APuu9cHa5j81fKyyDb1zQXxkGyy4t4UiJdJZogUTgQoj7BnBJ5mtR38vyUoVUT8rzqyZU3fDBGeybhp5gj",
  "key2": "32SYcYq1aJJj4kNuSjSujTPjoKPYFf6MN6EHgYmapBvDdFFTbvbLNJAERL9ezoqFwYE9k3odHKq2FsS9BM5Bb3x9",
  "key3": "2nnYpDGbaKgBAvUvJYtNXmEepnkgFbeBdXhvdm6ZUQFB9KYGj2SGud6qHkZLFDNhwHMbXw6pq4Xs7igKMZqBTBKm",
  "key4": "5nJ7F4Hq5vtiUNcnpW55T2rKk3hWwodTiFqHtiCXyDoxpQQm25XhdnrkSrJ6Hdp3hpPVqzm2tdY3LTo1JLJaN3ZK",
  "key5": "jsNTzfaFo7ZBriWoCRHzqtrQLVvHe99V57tdekuw2Br2kguFrfBJU1dK8FtbsegeqSc3PPLYAHfzGKvQLtnSNgB",
  "key6": "4YmjabYrdM1pvM7ZtTxFyWw9abgwk69ArNL26prGf6Q4RYRPuiwGZv3UTh1f6TaXrFiqdHuaUqtPfPXNAAFt39nN",
  "key7": "5yGz4zVfqRDkKmdBmyqBgrRrFo2eQdiKztoV7QexaTSKdvX5J7r915XZcJWsdR1kh669thTZsMeeNLD6N4pJ4LfX",
  "key8": "4yjyn8MyFqY8LMnM9SK6CgJZcG9wdHPsXdYQR5xhma36q2f1oRYT8PNLUi7QNZFdLhX8TjPGR7yHUR1GCu7uvPDQ",
  "key9": "JF4mnVxCHT1si7My7rhpue1K1DMn8pvFiAjHE4f6NqRcZcUge2VXyTRpREj16hKxf19txLgPJB8znVc28gkfXrz",
  "key10": "5UahYvmWwRqwFYHmdgeArJm8nxdKq4cCisin8rbtaxw2rnghfLakfJNbGNwrWX6pFjWRxtx9KZNwb3MupoGuSLsg",
  "key11": "3MiQ3hw5AAMteJ9rhwoB34Gkmunkscg9mXGykXLGSv77GibWnHts4SggzuHnPErp1FMDCsqLUnGW74nR43pheBLL",
  "key12": "3FhspwWAfoDz3thsaBK47pYEUQxtL6uLDM2L1qvNe1Zxha6J2p6dDsVyj2C7Q9AuuHZYJJA2En4dEXc5aLm48xMW",
  "key13": "5xVL1vxo7u9dcx3gnRRfCA4K1VAibHaHufK2E8Pi1UhJKVjeJm33Q5PT1RVrhFm1ToEde5MZAZRYwn6KLX7p1gs6",
  "key14": "5jLMeD72PxkHRiyowGyTwPbScuXUCG5Wobbn7rhmXaDc7qzLZmzEgsWHwvcjNg6vBi2xKCQcztSefQwSfTKegbxR",
  "key15": "51tjJZtsgjr1ciRem2tRswQ7AKgMvBfEoawVgkvKqnwDexSQoSiKq3ubYyAeuD69aYdkMfVd1SkwxVy7ZUtCVE2y",
  "key16": "uEogZzXJS5NeFTVkjT537j2gDDWw4GUCyjAJiCJCDYXvYwxqfcALgrf3u4kxwqhWpoG717nQG52XAsWG1Zxa5JS",
  "key17": "2FUnTnbTtLikJW1NwVswpXeos7fVAgAkXhewERb4783KqW7fUdWFj3UYv8BiLtzkcHz2MWFAze7VUPvXasACxpzY",
  "key18": "GSnCsvM9oURQpJaA859TFeS7zX5J5fVUa39jYrabg9Po8juiSFkmoWzzqp1FrU66rK9n79SDJpZjSukdcD6VYE9",
  "key19": "3ZaK8KsZkv857TC1qXpAhfsQGTog4UndpyFKhkX6tCmJciuD8HXwgVaTJNca8FLLeE1XXKoE1bcyNfWmRX4fBiHm",
  "key20": "3tiXWPCE7bP5qKF5NiJZzkwPZYAZuC12YciPJ7wUfS9NexkDz2wmK3wEoduDdCuYfPDQFreAPzqG2PMnKBLNQMg2",
  "key21": "h7Kh8mcxopGvWLB7s2m8RBFk1AqYP8n1UXiGjZn9Pv8zv6GaTYWBEuHCjgRNTq6cECh5bzrehu4DUF9STuWFZfh",
  "key22": "3bYP8uP2xP98yToj7JHDqFz2LruoiN3wUJTyqFpEwm2tvmnKJxeaPwFENwZi9RQbv2bPiEv9HEyEqRfq2Z2EY2Ep",
  "key23": "4WWWBhXMQFUMmuohM8QX6Xi9MdJR3NVT3RhQRDc6dg5NLtR3AagGSrZTjpDRDyPLMAjqoZMP5PmnW1eybRjEpop6",
  "key24": "5FLvvWXzrggbBXfTqANrgti8ED12R3wTynwwS2W5aKKfcRT9AqY1Qt534idPrRwHRj9Bh2jm4sjNMXsc8WwWXDgn",
  "key25": "2oiii5CNPkARTTGUGULibHKgU7qENWa4vMjnDDs8ZtMSxAmsw3bPywMzxRmtcgFhqPRsnnFGG8UgXzmZBJYMCAnF",
  "key26": "4x8QP3trGmZvYNzxapWUwrje7V1yfZy5XtbZg4tiNLNJB1L18c7Rm6gUYdY551MsAkk5ALb1TTXi6mUgMYS49WS6",
  "key27": "4kTeATuRK8kXirVA8pr48wdvH9ANfGGBtYwQ3Sx1wPu99ZqjveGSWFidmJ3BkVHAYJ8m1QRRUv9y67syFWmY9g8h",
  "key28": "SD3t1u4pdoPYv7A7NeS3KaPVfrLWRsnUtrhZYd4ZVbixt5JKHH3tDyfWCzepzDKHCrsRzeh7rUX9rXnyey96tZX",
  "key29": "5Bvkh9RtHxuL8AeqVHT1bVW3VVjzeywzPwRTJ2qrUhcN8DoyfRrTuY4tFTD3mWdTb5mVqBDXyuwza3NUYHtS6NR5",
  "key30": "3YvNJgSD1gTPBrCuGQbrgnvWsLkFRDyokJ3nFr18s8bEJjVxqP879WUnMFTAimcijSpJ2gY69oQHrsoh5vgv2zGF",
  "key31": "32VVaa2DZ5C9VvwvgTaJ2EWkr9ktHRAhtLyKC7JDTtXRh22YC5tWb9M8JAYiL4ZYZaxEBSSnivakD9A92gR6yLEY",
  "key32": "5FvPZFX8VeTsExpUJvKtZPCjqvYaJLt88apkLQFMqbX54XsfuD4vCcHLVxorPCk7beeksaUrjFVai18Vhq4gce62",
  "key33": "ELKJqyQupdyTxcJtqPAkERhQAkGv2m6WbYDW92MMhDvccxwqKnNJKXcCuHP3v2W2pVuWunAK4svrQKnvHbMUdAw",
  "key34": "39JB5KqbtWnUuNfNpGu3ej4RPqJ4XMMXpWwBMs21nfmxy99kCSS3KeDEecL2vA32fjksK1NqwMqNbrkSXcc5c5hq",
  "key35": "A9dLHrXEtcGZXiXcHjpfQoRQ1tiKgBFUfmJxrSLYk6ejd2TJKvMmANaswVSmcU55scH1EhYsuFZaP3s2sZF24HJ",
  "key36": "42Z881VsGiv5FvfVyyMTKzASiNv7Jv62cvYVSpBB3A1pNm6zxxfcfL4Grd72rx3rYNAxgokAy4rJLXazDmy9QqU9"
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
