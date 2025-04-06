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
    "3iEsHuRe6SbVgM8X6CWYmGxS2YMQqvKtWZGZ3QrTj9qKM4EKNv6KN5fiY3nqPSPGcL8DfQ9hbJVEwrD4F39HHytw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2thoYTZwR17dEf3gZfPDGdehNJyp9yPRw3X84eRzTwnKqNM9ZFYJECqXG6cZnkUMGaH77m2mUhb18VdiZTnsmZiH",
  "key1": "5trAbpPCbfget9QRXEGakudAUCR8YCiH2CNTArnuBctzkwuyGKJsxWa2XVUbsFAL4vyTXvbPd57qifEjK4XAXPdT",
  "key2": "3eCk6ZZKiPn6YZzDdRLV6fZAG5gmL9tA47si5rmGs18SBnXGsASj2fDaUW6QCW1rXfENHgc8QuDB1WaHbxfRHCNV",
  "key3": "5EhtqSf3WfLq7d9mcunrWN7AXWmJAVz9T3aXqQx1k3a6Cue3XvkdceZec2Co7WeQuzM6n8ANcvuu7ueteZdjWG4s",
  "key4": "2xLzREisgQJq2gjxHahmWeMik9oehbjNE6aPYkqNpGck9qtcr8cfD2YXgpbuqcLuAnLQ6bLwLkD3ghzdRY15vz99",
  "key5": "aYVorcK48QVe5z7k3WuGBVZLjpkWC6gSdqVX3mHbWvc7CG6t27SFKEizVfYdduBWZXGT2Kh239b6EMRvHQ53cyQ",
  "key6": "4DytPnSJnye9pUGYi2zgKsUAsDjdpGXX7FqMMEpabW2hCE1xKRqSj6dZgbsFviNeNgEV7tgN25JzzrCEjSpiWtbD",
  "key7": "z8K2rMF1NLVAYCbtHJaEv78qhkH7PWZqXWvexrFEcBc2ukqA8xSqGHyT7AWdg4x8pueD6Yqtr8QF8t3tytrXRsM",
  "key8": "2wwLmFHs85VAA4evHbEaEWMDEVFnr3XLfDKobi8HFf8DcXtgw5xeSQTk8atRkDup8dmXNW8m8scKf9tC96YixofF",
  "key9": "4CKaqjhXjp2rCREhNDqx24fm9TnccrMZXNwLiwQMTtgSajdqTMyLn624mR9dvoD1G7PncbersK7gAmJfJUiFnCa4",
  "key10": "5vJCQoK5Rtn7E4SaDcWuEtupCgns8RuXWa1NhpikG2QnZCmoz3XzPRtrW8ZTdpL44JAkh25JiUxore44ejrxa2zr",
  "key11": "uiZsPPBrGccGna2EWzLQoXdUzaxiqNbDncnttWAsy94u1LCqUpEwHtTkyrCkKqVcsw5yH9WEs5pMQMKjuQdXSzS",
  "key12": "4tw3Pm7T2Sna9RdKpguTmMW1vYT7wSYqCUBQiouYhTbAB8t6K1PHpVjoQPKvoLZrMD3Uo8poQoMqWfrfpAcJqCaw",
  "key13": "3hBJeYEfz5qbneJnrPPygweMcSgkdfSrT5BtY9icu2JDpi8QWgHf6PVestoGaKvQXPNG7eK9XZj9JMz14QkXhmQA",
  "key14": "3yQZTc3NNFx9oaASVaYTxj3omx3uLtLgnXov5TJWAbegM3k4fAzvSVZGkBrRfJ9SBtp7VDxTQVhWxdWwMCveKmLN",
  "key15": "239RzcD76JgiCwdeCeJsViHEgQyFnkYVuScsScaD3aQUuz7Bqo9Wpy38a3MVtRj8mEzgF2tPoVKVoB4bBP5zBMjn",
  "key16": "2ddr2ez6uufjcnh4dqVp3ZRj4Cw4xnnK18js4ZwiVE1kaAVC1R2nWCMDXeVzcmTAeyNhGuQjZ4CJS1NXH86oMyc7",
  "key17": "4pidU5dvrhHYH86xuVL37VFEQ7SPFmL7BudxjdVpiBq45wywDLGamP38JMFkyoFNkCJ1zyszvvwxvLTVcYUMpkeZ",
  "key18": "28W7QZuLzYroK2z7LmW95MGuW66UqEomwvi7ZRn4dsJ1Vucy7QMTcmtkXkmdT3GjvY8N4va6McidGNrWdtkmtsw7",
  "key19": "2VkVNn9JhupKdzUVNDdhEFnG7yfgn1pRnSUeE9ArGH9rRzrXCnZ2A1JfcPk1tBZ81dPszeYkavTbKJr5dJvqwGqX",
  "key20": "2AbsqVBmGoynfvSX7ia2xr1EUKEdamNs2YRJ4QFFnuZaQegMB8eMRf2rZTqDLmtautKEwNDEby18EuNyGsijeptv",
  "key21": "3UVkgG9221i1Rzw59oQDdNmqmRNHcjnKY95bpNFXoiSxGucxgxxiGeVU2MuPEyzGjB6s3geojUppbh5JZVo3mVNd",
  "key22": "5KLezkr3rZJXimRjBqvb7CGiZ9kotXw44H34dAL3Xh3z457cXMv6fteuVHokbMiyD8C4i4TEUZM4zQ7NB3F7x1zz",
  "key23": "4FbpXE7DAwCR2PrZqg3PNCddKy2nthp6wMc1adPVv9DHDDJAT615251m23LZNM9Pgo36CuRcKoE8NSUbmooxWM8S",
  "key24": "5dTGJJfcQDaUMMKCmwm6wtAjYLJm5rRRgFqw5Ghh2HyzYKfkGmntv7QtTirAXmKYmnhNxq6uFn9J5XPQsFbbPz7V",
  "key25": "5eQPUUtqDGZbL6TBK4isRkCd3LbwNtvtu9NfWPGKegFzqmiTxn5NNoruZzXZ7zqYH6V8XDG9UfSHXRzQjBkWHsja",
  "key26": "EwZ2Pg8JhG2QSZSGyLNBBwAQCmxUV9PfMbT2AGVUP6znkGGJYac7c4Mpbjc1EiHEuguqnccT6YQsYXCjNrzKQfE",
  "key27": "541ysCGda3d2ZyinaCtakmXYdJFNvvqY9ciwHfWpCig2TS3zbu4mKym6iTaqXB5HqSKtGFQr5bSLVoXdqPY2Q2H3",
  "key28": "3MoxDvKQJfvi8cjGDjGcmgyfY3Rz4x3u4h4zJAsJkf5QMkSfY3goeXXbtJVhMHfLcRtQohuHiBH25C94o5N2mWhz",
  "key29": "5vrJbR1TkbaL3JcYvjHz8BxLGYdV6nKZNC755mihfuu1jDJMw8rL5PtvjdgWkfwQgvc4x9gJpRJ4tttP6hG6mdCx",
  "key30": "B4CXmATLrzXsu4fTZKDNwJzEN2uYW7jTZmwQpwdyvxn7XvBqVSfWyJN6j97bafckpnEy34BCNReb5giScupq8uD",
  "key31": "dwqa2egkKTNRb6sx2mpbqKw9AtrcAhH8vgtuRFcPTdJLgTzVjni4sfWGUNKezhJswJpoVkbdSZSqBh5ianymSrg",
  "key32": "486g3tJC27fY9QMKs8cyWk3o1C4PqPvUpmxKjZoJ1SQFWSq9WKKdejw1b14omATKARwPAH2iydgEQFSpsUftcf7d",
  "key33": "RfrUsVzBY7cG8vEjbJQRcZfiBs235EVd8QNREjGkNcvtcQMoHFGv9DWdUGQLisnZruWjMek98aQr715otEmEd2X",
  "key34": "4FC24CmTZrRKMce4AU2Kt19MexeguLFBPT9ygZHuMbGGAw12QMb7oyggETdgGQURdVnBHichPqp5DN6K4NFMU84E",
  "key35": "4cJ6B1TNpPaz8G9hRueWYByuTYdhZW74w3HUjsQuknQZL7gmjCqCy1Gzn3hXWJ4jnmdsvo3DUv2jbLwRKGaipYmF",
  "key36": "4emAqW7h9cEbjmZNFbRhRKPSwTyzLWEoxMTbhgjEcyRv7YvskKRpyj9Dwk4KnsukzeSGDN9hP8vsz2SGjQ52f3cP",
  "key37": "6LTGjdqC9vAEVnQZ8iwgNtTvpUTuoWZt19LavnK4yqksm2xnotRvbGRWeoSswyL8pwwGojUuaEzevS49ZCQvdK8",
  "key38": "Ze3RHHEDaHbp3UyLpAEtgMp8P8AmYfc4LQhaajyK47ZSKudDuEAWPVhVQa7o1nXPhM42GnieQwVpS9YxQpDgrtM",
  "key39": "2njiYkpEtRi8B1KhTtzhWq7WuPoeJzRtNPqJ8r1KYKxcqERKBepB7fawz5iPgshHRkhbcqiGrfE6qNHwJuGN7AgS",
  "key40": "38k3L3aA8PFuTSKfwuGMZeLx1uC72eKxGv3zBp3UpLmdJstTBvLAMy3ZhDDwLNWQWLV7FVS6x5zkmxKxwKMqpnRq",
  "key41": "wTjLkN67b1yLEzTXeimMaU7GM6uvR2Jk4NaDByPnqXrN7zm2sKkx2bZhr2hPGVznTb9QeLTMepgKWM6tj7vj9wb",
  "key42": "2d7jVFTeUhmCxKkyzEdeKpge3uFBk77YtLAfpkCppzuQAq7kstt7nDcYquY7ELJzkBs3PemiDPUi5edzuGjSjwNQ"
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
