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
    "3DAdBEoN9h9PzaUPmHjuKehCGYKnAfP5QAGksEBfTbGtqjCVDT8zkRr3k7UA4PRX8vbhCDrPVezncS5QbhYb9Pj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tth3ToL6r4gBBro9bCQaPRciqQDQ3qECdJr9Lc7KJbYsetPHMXYaXyxbv33ne8TpaUm5eP6LGQxTJbpLCqDoDPq",
  "key1": "2nfDXZ5gw31MBX5GidQ33BW9GmGbrpgDvMegz9AwGyCHyYcYAqQqvzeqyu2fxCWYyPSU28w4sVihibR9fux6w4Ev",
  "key2": "basUcvfiuKh2JBoyVHVa4wVmdGe5S5UpwbgpM9HVZdTq4fWRy1jipesLafNhTvkrAZ5GGEWqf9yBfeEEwiSZGMf",
  "key3": "5AJxEi6CSmo72dhES7jvdBjqZKFyBzQ1N1mgpvzSkrWhkh9iTLTDoBRksUF27UkmWzQk5pAZQMiR7doxS4BPH7hQ",
  "key4": "58j27UPFqGAutzt8WmcBvofAenGPzoN4wTQDhgsYPSR5qJmBLPB8aWeh5BQCZs5j3Fkmj1L1Yoo3E5PUWb3tcCCh",
  "key5": "5wcSD8GcwM5UZ6zCCzYtusJHThZ6eSEqqLL2tWK61EDRJRgYSTqZKTZBSKhQNhxEe8JLAimxJUkakywbGASD5Bb8",
  "key6": "5k7NtKaymRVfji3fyV6CwgR6je6XZcDAW4QTqZRAm9YWoiTpkZArY2SCdHRj5exaygqWPM6xq4PGnxpwSWhf676p",
  "key7": "2z8KgWcfAp68ART8VuE1H4YBYqvqE8baLKP7CKTSZVLBkxS8kbnEEhM9oMvUMwudbqVKn7JAUcm6WrgxPZzYow8W",
  "key8": "2yWCjv9MR9BRqVas3rWu1KRMk3QKiKfbAGSz3Y5DHkLwvvxFXJmmmrhJUZu8qRsHqU8fFqjgs27fLhVP5B1EoaXg",
  "key9": "3NjpAPK6QDyi3MR7NAyeHjUHEdVQYK8o9v7STA4nRL7ciuK5Mo9LQj6h5QNzdsrUZoTbpkNJmE5PmT8SVcAAKZMb",
  "key10": "gvfTWCdoeCakRBy3B2ZwLfis62m2SMgZPSjbsFrt2wd96NA249bKT8MEAbjEcjMmFMFfL4nWvJzuX7z9edotxJW",
  "key11": "2WnjYdsz2xzaYmsCLG9NDXdCcopm4HVF2nToa6LHaVek4gdphWbTkqoQEcjt7nFMwxK1owCzcq7ZgHCW39hnWxPU",
  "key12": "5VdhFSYJYi9DnzHEQXypnHZHPVmJTzWtoYCxe9CmjZ8GbqnsriXeSi5KN5YDfktVEhbPwGovRiiH7fRsp45C4uyZ",
  "key13": "3NyUEPqEBmfXzHxy1da9fnkwmV2pA51XBxqHi1xVQ4FwXG4DNQsJ3fuhRVexyDwRNryXkC8gnGzpU2RkisU11kCf",
  "key14": "61ckPJ83pLeruWUxRCY2gGgCnemg4BWCQBcEwQGdcyaSDEx9eWUmXLUoBFS8AZ5AdFU5KNJSfq7cu8aDFKus5ix8",
  "key15": "5gqNF9Qefcv8FccGKW6fmPkWp9ZtLAQXePQce1Tsko71gHU4R41MhGeJFqCHnN88nvUeqHkCXtLoopUXpgFvAmdh",
  "key16": "2RSQDK8obQKPhqP1edv3uJdYiZDWy3P2D22KTb8LM1aGFMRpzGBvUe6cwR9SdRwXkLfSETAB8aawWuwWkNiDAgpn",
  "key17": "2D2diJeYsUnWiV88YaU5ijLRo5Qb7mdaH4VbdDDDjM2aY3dcLZvK6nvm5Lr8brB5Q15a1w6bQLT8duKuiyYvW5KT",
  "key18": "4EB3snNgmXGWAcvDSm168vRxuxVqzKGTeuogPbioXGY9fVaw4twcQVXLBfywKEdS91fgiXq9jrTbZGTWp54e9pii",
  "key19": "3G6QhJb6rvjK4edUfD9SaT1ZjQEKbsXAmfDDGSFhovNSAxSf8fZ7gG36q5okK6gsyigzyuu3HeBdQgiGLcRnUmw3",
  "key20": "3sAQourM92VSkV9z2ZzxuDDuabPdj17yHnnQrLxXj3NuobYxzityqb7Ydf7i4zSUBVSk65BvDmbxm5MhEZUovRFv",
  "key21": "nTJvRsNgFcYcvAY5FoYnPCqUszncVke9DA1uZPZRJNAf8QbeX1YUE6mNHRtqtWePsMSrkzJ5Bzz8QsaiCUALq83",
  "key22": "4AV3uBFu3UKerZBb3GhZgoF2KZ2jGZKE7Mw3XdDv8gjTDFmHAoTF2tDWaxMWA8BXorxG91LVi74upbSm6aJjCmy5",
  "key23": "mep17aXnBNmizMwZQEUqPqwbmddnm9J8vN7AV4tnLgBKtTJt256HaiZBDUcYbGWyLa2kHBhbMjbk7q4otZdueEQ",
  "key24": "4pG7MeFdF8G5vD9373xR3Qb9ycG3Gq4S4EmtfEt6GNFgDgzycgFQYoQUbKbXRGEddfYhJDhHgHYJ8f86ZKLAhSwk",
  "key25": "g8YAphXso3qkDW8qPocuC7Ag825zSSBgy1wNeeJj3dRtVaFa41WgEaGWRmCBkKZ2DDihVhzjuUGLk7hHxcy1nkR",
  "key26": "2hqP9xQgGbVCK27VbCpVhEN7iWQ9jVXagQo76FYhUqNND4Tw84Axbvon4QKaA3geJWshTK425HQFjAN5EYMAGYYc",
  "key27": "5N1Q9Z3V6YTwBvE9oKns9mKb7DBTxCSs9XAt7pqdWWFQZJM4CBPutuvipQRpuadXnYjbzZm8T5ED1HyFSxqsoEuk",
  "key28": "3nM6ECuxHJWuDeh7a3rP45pfWbwSzw4iWws7maL7bQ6JJVnSN8fDWbWosEu9C9DyEAUbwAUgV1CHu57ySH7HBTG8",
  "key29": "3Nm8hhsGWrjwRcP9CVV1WJZcbqRDEWSETzVjKmCxtXRt86KAdod6W3gPeSaBUiy3mZALbmf5PD19uNAQLAD1KrKZ",
  "key30": "2LCRA4emt545JTw4Xa8TUErcY7v9BVsEfCmj1XEtFKB9vqNY5svsXe8dgpcEw8sZJsfAynfHUndMYRJTZ3qY1ykn",
  "key31": "be86daJb73K7MiQ76356UYLtKPBUs4GLk9CJVExcAtqY6GTJhPFxWNBYCRBbHgJPd1i6bBS2HEzE5wM6rsWVHxv",
  "key32": "dNVBa97vqJSgsT7hqmWnuDEXANPg4su2E43JvXS8TvLL3nPws5BUiuZd8rNZjVNCHjZuiGKGjXL7UypJfvAmi4q",
  "key33": "38pqJkKMrXQJrWDcENgQnbDeQZj8Xu1wqUjSPpvKsBvERmWrSALHWwZxYmCqAQV65R5Gwu7f2kjeFKCV6GphTQUJ",
  "key34": "4ida8UJWrEUQxRfYBLsPqEEdTLSLCtjsuM9Qj1x6zQXmwJRa3J2omS7RKPV33MhYwE1dLPX9qGWD7w5zKTPju1QS",
  "key35": "4mFwmkv5MSMUS4eT9bkbgrKTwQgLNR64xU2feKrS77uzHfw4dhx3ea8DjypbJmEJxDEHszW1LaBpNxZPDxhc87Uk",
  "key36": "2wmQwmuv1T4Fc8L7L9KY6NVrPth913FLss4zUZ6ukzihh6ZfHQZNPhvdFCcmPGM2vE2xXDW6rGN6AY1mzhdYjVv8",
  "key37": "3NQ8xq7mhe9TEVi6AKEdFjazUvnPsxntzTi9rqS5cGwZCHwfrC6uUifpgB5rmyhUJR9xwguZEThZzSD7dswXERj9",
  "key38": "aWJvfJaTJoiheft8JFmHd1azBLwgwZZuaTRHVaAMpW2J3GBi1ZF7VSMvGtqVS9jFicnk3NziNtSnHXF9w5XTJvd",
  "key39": "5yhJcogjceVKhx83kqqVhTQXEXh75aTfe9UwfMnVUPcegwqa1jTvURJMiqH6SAznDV2VUhAtoVGF5DqgRVu9Lumr",
  "key40": "WCJXXGLuQvcqbnhfyFPJEAPU7C94gEipVcbHzXtkyKKUohrUHnxEZ7Fgc6DosMQwKauCuoXC4RBxE4T9DQ27zFN",
  "key41": "4TkFw6PJfbzS4z3BgToqajxSY7oRhbZfwAirvkLbYtGogSjqYgjX2eK2FVpQMS6J91NnyxMgYBez5UGnJ5yBZGUm",
  "key42": "d49X3FZZZWKXzZR9vnBDmJPx3WQc7BUJb2xcFKfbb9tphMxnp3ZWanhrg4mUp5cGoTkiv3wG5SCKb8pNJJAYhzS"
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
