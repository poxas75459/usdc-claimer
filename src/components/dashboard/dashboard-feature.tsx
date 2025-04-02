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
    "3bzppc6SPHFAFV2CDqhiVHdJsYDiWKtqhMJguBioBQkT2uB6r92JgdoZRH2pg6Ss7f7knetraxUHd1oYCRhvqN1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wxuCpK17EUKbyiW1hMQm3J1RZmLNChBHib1i4eWZKg7B5XmvFEbmwa4EPec1Az8Mqg2FmGgpfZXppX1dVNPxehG",
  "key1": "3LGFtEYR2w3LKYsC2i27np57gN4uGQd3BaMVX1wfyxoVWy6q6Pf3nAuaQPDeAxHNEXkLuUELd5bmxjZMwW9m8vzc",
  "key2": "3jWfnBpGSfLaezAH8XGJU3V8dSr5g6zwqqbZamb9Vp5dRarnu8tK4myrwL2SgAe7L7FzCRdhmC2y833CstmbjyBi",
  "key3": "w8mkEMNVFKawNowZ1RNCQbTFz8RsAhbaHQuin1jMaQzCayDERHuDJULmXqH8e1q3W12BVUR3h6SToJrgmtjFXMv",
  "key4": "3uGPFxrskY8E17pVvKHMNG5cAaFrrqRFNywAtC4fUPFKf8Pza7oaHVha2FZzwZzyKoNXa6D5EtTFRTqmsMpif3tG",
  "key5": "5KCWhmQAMNhU6VGoP5VqScYEXjjvEPYjoP9EFnrXLL1cq3QetEqKmn3AKnTGBTFjvJUdB5fCuoZwWAuupZQesqyh",
  "key6": "5a2viwqNeDKsdmJhKXfpfWVY2vSwuETYNHQDitnJM78u7gaWqD3fL6ymKwb13SUvggfyWhzpysMNHbkcHuUpJGdW",
  "key7": "3zeQtu6xXmv5Zsre1MZVEKEhAZfRE8PjYDZpmcDYTAw8XuZSAitWAc5w3uW4JbumWFuiUKN3y18dx5fNAzGnpr8X",
  "key8": "39b9mNS3AEn8mveCu2kf1XqS1QmmdmhypdQh12k9es88Y2qmYYvQhAEUPZr6vrnyANdWK8Ynkjxvatfx4jcUKkLa",
  "key9": "2XM2DhorR2VRKAVuTeYo7pbeuMjBZDE7xB5FPTVyC1BUcJTt4h7SH2vvT5pDcx4CQywmRCPYuY2YM9QYdFV6BBWy",
  "key10": "4FUy94MvW4QwVv8YE64f8htbhPNKYU1ddCr2jo3rWewBS8SPindoRPJWBXBcZyA5eE2MtpPeKXJXDAeNcnJYwrTY",
  "key11": "3E1nNCAknfPuj5jDNUY49h2Gf5bGc9HZXtgZGFHTJZaCuXNdM4xcCDPyJuZ2b3P77fghFNHMzmyp7tDpnDPusTQ5",
  "key12": "5Bo2QJxLWsd4KKiVEt1DAGpdqzpJc84kCDmDKQb5sLTgMa88JUeV4QpGBY89RuE3gnmYCWvXCf2pE97V1mjA1XaQ",
  "key13": "3yQcLugvKUPdPcLtbJ2C52c1SukqkfmxtyntLqG2goJNfFQnY1UFd8SECeSRTBGXtx3T7ojTVBSZiBrPoxadcFgN",
  "key14": "2Qgh86WRAf9z5tTPeFjz9DXPRk5zs8q9eMPv5PXJhFGsXZ8Bk9oij3AyCbZU9hr3J9ZSVgJpz3zj4DwB73hiA1aV",
  "key15": "4xip6yucGojmULtwMDBvuJHy7xZG2VaPDu6sEkxRXvHvDMmND6Dek5SrjBVPPLxNAGyCPSzDAcZudXamJoUt2bCw",
  "key16": "4Jnana6QHW2Vqnxs3wVoo65mUXn9UtPwG4eKLrVghSCpUiPM88mrmcLDcRze8dF31qEFe9LYo5VNtgFfWKV5umFe",
  "key17": "416AQfBCxLPpbZk1wadvZVXenn9dsiKhE2GEJoFHYyypASuoXXvurhPT2XSLYCKUjhmm8g2ipNVk3BJ4Z9eUbyAa",
  "key18": "BGBXfHrAxoMzoJEbpAHWN7WjLfPRTk1fCkKG3j8LNNuAR58EE6LsV4nyPFXHytmX6Y6atfviwaahXELDe7avxvL",
  "key19": "44nshA4WdhZMk5gG43UMHCbeJhXbbcopG7UjrK7VoqXGGVuwxSPZAJkLLWXxk3d199cQd6QCqNfiJtuBkF88bukU",
  "key20": "2FRjLMpyw2WJag7tM5ikYxNmhwW1N9E3tAJqLRjbqAfeDrVtwJTZmZ4Lo3VcB3n21mxoDM5Ht4VNvoymXJquBQwx",
  "key21": "mHyyMFGNQwasBefhrxgYGFQaV7c2kfwRsRnF8BL6p1tQ3LvvUS5R4C3ZLWtGPxhDAS8jzkTz1QUrPUa8eqev2jc",
  "key22": "hBuL32r9KMf1i7i6q8zr3n1XXRmnpbZ5zRhBdQCrgpX9yXFEoauperjD8p2AoJK7WjSjjmCq88yAks3CjWPamrt",
  "key23": "5KnQ7uiB7uJBbu7YXYTCf5XHhbJekj1naGK1zKPCqGbhuFQjURkvddHPtpLtazHsh1XTf1YF8teJNAmhq2gaz8kS",
  "key24": "nEVwpzYuzmhZ3pVE3dLeyWESgE8C4p1Q4tf3BB4gSQP9VUbpJ2eRmQ62QKtuzEtGoc2LukDL117qquxWdAazHbU",
  "key25": "5YrBWPiVMKUGRKRcmGMLhcYtfXPAqSEqNcC3YTRCETHqY3ikG1U9wtD6Whuosndj6eMi6aLamMSzmHtPJukkBo9p",
  "key26": "2noUmpbCnFP6pDWcFhQocT38kt1WznJLubRehQTZHYiN9iSAJNrUPpCVd4aTCVpPLmhdSspEK4axTf6m2VmPMQXR",
  "key27": "2Ga6G5SJCYfG4YVxxupwkh7acnhejwgMsRtTxdwiGwUvwFigAFihcBm9GJQr8vij7AMKaFWnz5aJT2m9zeojsdV5",
  "key28": "3FFszCJBE6FigtoXto1tqVqVWQvEjhU8NdGKxsv6QeHVYyEHCjFJoimPERDEm6S6kYLVJfQaX1wKtMzRxbkTm2sk",
  "key29": "3gCSdQJYjG49qREK4FScW1BuCN7Za3xNQVgEejir4FFrg6veQ9Qya7Ks8E76GfnpSc31JLruom7VyrSYZ3GgooBh",
  "key30": "h7dG4PFY8dGZyVHH3GY7KoAPT2Fixh5jmxHzq5SifQmvWpLJaBDH9SdhCUgF1ymDFtK4Ht4L66NZkYfEBHxSEHG",
  "key31": "corX8uCpaWthgn7smYHXagP3sHMUqyWahw1ZETfeAMyc8HDbzuULAb1ma5siy38n6sXekQ4cQjziuzvaJ3cjqPr",
  "key32": "2VwPC17CwUbmcLogZAPq7UQUducw8x1jW7xKXCEmSt29T3Z9YpZ4WDonTCDbF5VZnfizL9xf1i2DA4KzurGaAJ2W",
  "key33": "2Zh7LESYFDZDreDRpXG6pmaByLXgM6KjLzEvBouXXrpcfvug3RLse4DUTfjGgzSSxw1DYWjtxRQyed6JgXrkRqdz",
  "key34": "2hFo8cNmdyn28tTkVrgp98zPGjGpBjBdPEpHEzcRCss75rM1XRxLJQniien43qH27v8E6JsAGGNgRV3eioJAGLyM",
  "key35": "4n5ckSMaJtcdYrxjj3D43vjACN3aLDg527CMSfTkN9zk828dWrzUQMwwwrR4gKn8WMzdVZCMiz3Tp7Csh337Mned",
  "key36": "2HsUtTAmDekT7H29FstosgxFQCwuGnveEnterZJ93e7TWYayLgh6uS6FcQxzZKHBBAE2ZQLsXrLwyTHaNFZq9Cfu",
  "key37": "43SXCZnLEjGdXeHMmNL9rifUNNiALmsYUVV71YC3FDFUyFNob3uXHARp4ATmzsNWqiAoJBLH626h5yfabSuDnD6e",
  "key38": "4yhVWKFFswW5NJaXghtK9BVkqqBJN5VLSzCmMmDFXWfo5no5nmN9XAhvjB9UNSV2mzyA4KkzSmneCaX4APFUiN2P",
  "key39": "FwuZox9QCkZ5dSyz5LXo7Lx1QMkiZmDdqyMwWPax8iSUEhAscDaToJ96jQztV9RmRqjMFdhLgdteEAQJJYzDkyC",
  "key40": "4wrUSw6gVCZV3Yb3vsNjVz6BCwGFWhzDUyowi8kScGsfJEyfH4X8yYWxRo1xf51BGSofQmUvFAWQC8HBHgknXk5Y",
  "key41": "5r2Q4BwRgXEA4X2NRU3MQQvCGNAaCWJvW2s17fs27qUvV8FszcbZUQz3Gr4zxzeuTCzc8cnWwZqRWPULs9FJSmuz",
  "key42": "5v8Pvoia24RGXRMQDyhnFmaqwYQHh92FmTSxQ8r866o1Tf32vUzwT4PXyqKFtXFDZ9oHmJAsd224k1VcDKbjdwLb",
  "key43": "4ev3SEnfZvzwoBoiv6AiPRLQ2CLxVBqKjUJvUmyPdBrPHGfAopc4P6YxuGBr4pQUWd7HB8qQseZSVBX3ATETfgWi",
  "key44": "2nEoBzRJHxyEgA3ScND8itRxZZx7bYzqiep5EuPQqVpZoYMaDodiEwUZubaJP3skPCXeFpBbqrYyH3Q4nqY2QR6D",
  "key45": "5BrXVbBh3g3Erxxy7QiNaVbUNMkuc9kaBofeSRLnaKqiBuDKfNyqKtVRzEgcwS1nZ6hFctdLdA3hmEon5e74KkQ8"
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
