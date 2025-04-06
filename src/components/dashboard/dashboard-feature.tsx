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
    "2FJzQdsFxzqh4CfhomsQ2bJfY4JzqiN8nmgh3Ty1MwVNpsWGoZUWFTWjn78LqyyYRYEtgedvmjAEXazj7t6h8s7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p5NB9pX7PHxdMH4fGKadBRhJXk3uDb55WiAZS4AAjV5iC32iiEpCjxBTNZuq4XGJgGtdYwjVdsnou6RaspNWN9T",
  "key1": "2WGU8oqekEDUhdnhUc6Aku2sgCg3U3m6XrX9eEeM7Ssu4tnHCmZaWzJ9gFriZ25YsN6GHz1SEkpbrmmB96r1iunH",
  "key2": "5us7ZSmJxGWy3jqdK6K4vsBzcHRPgH9CvEuzVtJCYDqYcQVjRqm5VXH3XcEuQFgGxDxEXn8j2TvnoTesRd53yaWy",
  "key3": "4ZbGMKk8uHzPLzDfAkaY9Z6NunMtw3uorMRMkdqWqXJHiCHXqhFHRdWeia4rX4MB8W4BdxWs7bR6CPEJ9EzU61sb",
  "key4": "HeTpEUvNLMhcZUvw8Q3zndahQj9BaT4eAdQFaH6o9CZq8LfXfJGdPjPX7x7xMS9ywqpkx3y68qvny9SV6CMwVU7",
  "key5": "5EnovewniniPvL8WE3s4ehyMLkm8GHzcHfpU8jWhU9TWuFhrNQS7fYuDtU27qTAjY4rgw6rGmPGCdGnypMwXj6KA",
  "key6": "uN4LKrsCwVFpVsyGHn6wJzwZpnTLPuKUCXpaGi4ncxjAgfEqNdhT6mUYKqG4QkLyYEWGoopiW14PQRRequH6uxi",
  "key7": "2a8wbRZvBdhkWUHYXSw3Xbya497c1jxKeHQrfqztwQWo7bT3BtYzjdrqvZenxrZbz9dJLGRLkwpvXLJ7ZSWXEfGW",
  "key8": "4GiBXKRYxCvUkCLo5KiTmVxDx43ueT1VMAFsLJYNuPbMxSnT8HsRDPfTnRRSj6rNnzFBwZcXuaDAJSKAV82YHv3G",
  "key9": "2HdhnLNJmTJvBV8muAFRn7Y3FmyNtiMcC2NQ5JWehsyhWpoGMvNeqwCDTgpqgtTcKsdfb9uzCbkQdkQ3KvcWRZcX",
  "key10": "2YnWWMGWk5LX4ogurwsBrcoRSxPPLnYeULMCbTLg7pax5UgvqngYnLQcvJSJFfVrRCXtG7uaxBQX2btGxmUDcHXA",
  "key11": "4qszgRJPMxzh5tHbJgJHYfbxTad67rpd9hKGMq4wem4yyHuKjkMaQKsKwBcCXHBLEwdGcQqNtXYMAM3Vc5ArLeBf",
  "key12": "UiWfSh6oAdzYuyahoeaTGXGSw3cZGDmQ2isWUN8b1JkiCxtY4aH3hnHWS4UDCdsFYUZ6NcUjkmoH5922CZ4s5K2",
  "key13": "4NG6tMjhA8DCX4Jhvb9T1zfVYpE218UZtmj5jsxkofD3LnjXq4FgdfB1vcTUznc9z1TNKkM4qZa9wGZRAr4MbdA",
  "key14": "YsDNFteKkJBtf8MYntUX34wUSA4ntNqnvRHbuN1KPbfeXPLzxmCxsD3WFLvec4Kvo5tRDoTZoUV6G3ZnjczHvEn",
  "key15": "3AQNJ9DX745HJWTXdxh8YXaKbaTFzUhMCbBaJ6LyVsuCGv1numM6uN93U4tfu7RnAwmRd7sEhmggwcvctL5YqBTo",
  "key16": "5M4bbovA92hsE6PYuqW7qt1dJY1HxJ21f3FCZCXkVYnHAQq5izArQNKnafx87oot9NFGythSSztSyKS9TKLSoYPm",
  "key17": "4s2DfxANGQkUqL8Y1tDWqfgNyUXcgWwowohp8dGmRdE2TudBhK5dw8Z1sZBKHwQ67x5m6S8UiR4rjYcx4HPUwxC3",
  "key18": "2S8KwWgSekRnrF8k9sWrYQn5kcyjGxJRtXknUTKfaJbnXJ8zcaw5G2ws7T2UUdSaAXxapySsYkhkYdhFTfcfSkRV",
  "key19": "55AvFkTCAFbWCu9trmkgHym6puJ2E9mrD3BdfvPJkeAzdSSeFiTPXzQ1ncjTeTBtw4XJpJDhV6ePdHZPiyQ9swGJ",
  "key20": "39WQTB8dRdEBQtq95yyMd58HVxFDPdC4q3AVoNnPXaoRwG6qaXAEmwMjUsE5vCLd4eomfjvHfDSC47xh6267tVMq",
  "key21": "YZZ2ZSxqMXh4UfYbbVoqtozU4T64xF4gFKCzkE4mnfSxAx1p8TcXB3RnCeYoJnfnBmN2P87zMySK8p7eFKDp3pR",
  "key22": "3CTCRpSdfCpxvqKbAfuNNCmBdbit5FsGBZn1u5b87TfsmaWatbza4qbJTy5EQgMD4D2afParodzZAnD8163Nfjzi",
  "key23": "nzmHW7iKQfsaBgjjgmWrZMxyiJYfVik7Wh62ZkS6QNpzsg2mVXmBDVjXdG7hV7ejAKZKpSnWNGQUKGsq1bzcSSq",
  "key24": "5KhUzfaVE3X7VwWzk3xG6jqu3kJDCEiZFrvqR6HspEEwXVwccohAbhYaV2rToeRkDd1pUnZvvhNpveVtoQRZMxA1",
  "key25": "24yJa9er7Wgz7q6dCJmb2L7wGbkadPvdrtX9XXzZvK6oJwVRBgy6hCuo9Cnv44mPaEAZHhGCCmPBKrw6Lfu5YZGc",
  "key26": "5iszuW7ecDJPW8FpZzaVwiLTS59JyDcjdZ1wytQiLj5iGKjnhcGzGXc8HSv7rMVUvVpNJJbKV6ksySLBzoodhjq4",
  "key27": "m9nDSVYrscaUER2FoV6Xp8CUV19HP4Lj1gZmoMs3XKUJeG8BMymLXUjZNxF3Aj2sVzRnPRb7RZSD9JBdGQxY1Nh",
  "key28": "UUsEXv9tJU6wsEfRrZCwPuwrs1NCjXbhWtAMo3uEQ8v5ktk6sRP2YVv1696qKQgFARkCw2WpF8Azwu9SiKtBFN6",
  "key29": "2bLcqC74BkDu8gz5S3CpiKxzKt3da7YPYv28CcxFKvvZMUnwRQQoxnJ99nJtG3saSi6rCHh4LxbM5DRkLR6qy94J",
  "key30": "5vmA3wuFHnv9zBbcLn5kRZNtp8oacP5WKdg5bC2RsXDXihBM2eum52Eh5MLhDHdtJ6GDSnU6M53nbcnuy7SNyNHb",
  "key31": "2XVUJ2hjv51EETHJFUNDB8bvzXfWprkMHQ64BTmVm5rEQN6vV7imxx4R4fG1dmJy31CGZPSiD2NPhGHJWGkHFdrs",
  "key32": "3PGCwXRaFcwyrmGCBVrwh2Ugan21S1RzpxVXDNXPGaPngjUJupj7UkAvQg2M4sVHdr3HsxVzFYmzo3gQGcNTTAr2",
  "key33": "3B4Z94v3djT1R2AkMY14fCTwVJ9NV31HZ3beqwJNas32xMkagZ3DiVj7KVpwBA65zLpnzR7j1wpYn2LGHt93JhQg",
  "key34": "4RCbWP6ahHcGZQ8yr35kVnth3NKBgDdmbfntov4VMeDsG7gzFt1rZjfcn6LUKNoYTT6KBXqk6kJ7cLTYHdLqUrAm",
  "key35": "3yEMZ8nKndAA7ihkkHUXL3Q2ngRubqQJKgTK9WvtvtboPXtrNEVwf8UYL8rbkhSyscJFSDgQj5E9jcxSPAzJtQ4R",
  "key36": "3pWqYoYGuVA57AENCN5kGdTiARMojCH6eHRRvvRnhyq9vDNNd3HTzfq8JRY6RxPohj77gP3F6rK4MEqYTLQnDFvr",
  "key37": "2aSDqVZkTPip75VXv8HUAwRVK16rPgiZSK72yh2NN5v28FH771FZuhsZKywZv3eXET99YrqofvF8Tkvv22GEUngV",
  "key38": "2JsFGPL44gvaA6Dq9D4N9QYuXbeMh1bY1d87BV4Jm9Abu321Qze3eAEYDSGjN5urfXVKtyBpzZEDkSaJXRxo4h1u",
  "key39": "gcQP7TzW5yE3ckukQLzDoB6mAvS8YKDGeXC7JkURwGwhhYPWXajq69oiMw1rjvLr5UhtiDpMtYduWcqR8TiskVy",
  "key40": "5kYq8LXjh8XmgWoXg8HgjvM7CBXKzLQWJfwRe16aqjwgQjX7XpiQQFhrejoEWqEvhaqMk8WLY7AoNomDpddDGeJd",
  "key41": "4He2P8a7UY9pb55tdAYPogruhJLsoahFRTxJqfj6fPmt54UqhFBWif3HGA6Z28cM1AvPu7iYP8ZcGFYYEVbQZb91",
  "key42": "31yjfAzV5Rq3djHhtaeitn9TaXquiNLhHnpRFkohfFmL9iKTBocathr4zQ49x4kr57QCywJqR6LAVrMiEtMcAKWi",
  "key43": "5T6R626hiL18xEjq6xe2QT7Mbm1QKvT4waCVde5KPx5VyjcHHPenGAH8YcWBCiiECnCi6dV8QrqFg6FaTvkta834"
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
