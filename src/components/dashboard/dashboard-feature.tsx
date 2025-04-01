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
    "3Piw2oktCF6kFbKnjNkMH74A3QHY2Grwf4huGTZknUr2Bb6LpLivgsPhSUX6Dy67rZo3skcDZxaa8iJMBU5ezH99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32qWZSjurjYytVt5LQ7sfKbAbQvgkmQ52jpzaDUaMdCtafAie7vFkBWTwM6iRC88Q1ikjGvDQKWNvirnojRSXGuH",
  "key1": "2Ny7BKV1b1WphBxr9TcMB4Jchj6qKiR6NpZ6tusbAgGxeki2DPUHVKtiR2vUBZX2aXkA6CAybSvw9xYtv2Y2UQUs",
  "key2": "5YTaPzEmGaGW6dn8q4ZTfkRzvpkoYVoA6kdGJvpvgE2xGH85m1cPMUhCPvGXsxP5Cq8nnAhS1A4WjfgT9jzRnJbk",
  "key3": "54hhRGkjWcPDW56xRKF1JLtRSRKNBK5JoH2GQpujMR5JN935FtzDDavbFdyoZ73wLY8kwVxto8UPDSUFoVYgw4iW",
  "key4": "2YJ69Hbm3PxxQks4VJHc8b2VK6LhKtN6tcGdKs2W87Fm4VxRGbVHNUU6weAKcBzQmybgAyB8WujYR6DvnmC1SE2o",
  "key5": "4QQ8CZx2SfyEhB1x3gucpzviYcLqb9k9BJih1JomXx1cAQfnus6pYRAQTJ7XmfLMxXAGbsG5VyhHEp6E5Tvuk1A",
  "key6": "3TUcwshhWiQmM7ErdPwKuixbCbWUH3yk4TdQ3EaW8qZtyW1GsBZr6J9CzKeq2YuFMk2H6wf3iQhvoyKX1uYmvFN5",
  "key7": "4WhKCoezTGCV4UfNvYL8PCh2BwRq5DUpaTxJCYKKivVxXCxvcT7gxbye9gs3AozYePCh1QTTVWLXcqydFFR5JPdu",
  "key8": "4Uo631jHCEBkyHnaPu439WdXGrDAVXLRMSL1LAdFxrouoW5oMWZQMZyHU2hSM9W18ds5wa2oASb5tR4SUUj49Gri",
  "key9": "2NqoLkbrUiiPx9cn4WJNCNdC5zHns4tcnQrHUnGNbsiQn2yD2tLcwBx6qBroms9et8ziN1iZNB8VRBjnQ3ddjqFM",
  "key10": "4fLDRUMszNhUQ58TzJ8WXje1AtKd4zJ2i75rwfjxomQWm5rZj5ByCjGNvpAaJ54mj88St4YphRSN7XC8HkF6q4zv",
  "key11": "3ypUL2iEHUE2Eyg6E8DvY6eRFCNDYDSF8kyzoWrWFpLw86NYAMr8B9q4ie2jie8PQSf7S36qys1Mt78MuQnx2zor",
  "key12": "41ZoEWhn6RtD1XqgehU1Ya4CByDkK1zo2ZBYS496AfnJCRX8RA5pEhhrAmuj4DDyuj16iBAqmV9cb6zvXYNk681A",
  "key13": "2ayNXKHpG2zxvbufbgittTufNyE1qLmS4yAn668cTjRoJfEjdFUcwmNvENHr6DABe6V2khd7oJ57Mbv7hYWCVDpg",
  "key14": "WbriDbd7639QYgbffpcMLiwuc5nfqNRZpiiQ17STWH4fLijxGQKg4bFGSEHyFtNsDv2Zt8uJVdUUdjRTLKXboDa",
  "key15": "2YwYyVuxQBhBJUJHUGmPoh7xkv9474Nduqyqnykjn45JQihRhgmK9t23KMFVUAc8M4MB4nxyUxNefVg2woXE41yv",
  "key16": "3xMhWUNdVE9dtzHv8hsbr8GhsYFrbi371CrjwJtQw56rmTCzwiS29SSomUoneFHzRtAFiy6usdamDPSEGLTLGhYt",
  "key17": "3AYiz6rfz4WvmezpABDLKjN6WyYesAG8Ts9dCejeJvhTEGeWY4YQ1LzveQTtkYCijXP38kW3Gyfg54MrGh6sXzms",
  "key18": "2fp1U5xnpJi5yMT5yxUejcP9YUdZ2QaLDdQPfpPQuCKWhNbGaUc5UquNX2Tf71T516F1X2fuN8FVM3Unfif88cDr",
  "key19": "RuHV5VGkrQaos9AfP2syJhmGNnyYxVFjJ73AtzTdDKV6t3aDUHutjQ9iTCDjXk5rjvid2p2bomPKeXWsaqF73uh",
  "key20": "55YMtVxRCXgksWE6333UqTn4UQNJqxDgEeeG6wt1XD135iBKYboryfTXV7bAU1sy9ZxLJ7R1e1AUTTPhcBDB3hjd",
  "key21": "4R8JCyp3mnXEMQzh4CtLYbN8XDaqj8ino53viUmewkZfG8zQZZTW8mXJswrnYmVEeHzMb3ABN7nPRwsKAs7DD2UP",
  "key22": "mvEfrRw1jw1w9mrPSFn7Cfz4QQZfLJRX7zBhC35kKwFD2N722fT7sXmyvEi3M1v776q8XGmPTzhRJC914crqMy6",
  "key23": "4FTedqseLsWNq97qTLCFARwBsCWEP5gcTqq5StLoCxPZy1gxop94mxxEz8vATMZKyWxtPZaBqhazUpCH5e6p9Mj7",
  "key24": "LgJPsJNVXoCAGvV4CHGHHNUcBy55RX23UsrKAxPWr5Dvc68Do19MyFjmwsKSLZUGr15MQCFosYkxSKepGgEsQLd",
  "key25": "3uLCNX8qtRCDsAfFcNGe1Fp47AAAFDD3tzSTszZ8tzW7WsxAN1SVRgoqKMUoNQ68fv25n5phGvbPhsM9z1XaKSMM",
  "key26": "4M4cEbMhvfsMmVx8Bo8speWcynFeHApgh3TTcZy33kE4qrvsrHcPaTqMmk4scNK2QkjffM9STkdHJTjEnvz5GnNQ",
  "key27": "dVJkDhb861XB5KUD7d3G6mZQXHCLAhz8viDJUMFKbpJY4qkFFriT7RrNhLW2K11Pj6XJvxaa6p5GRxyq2zuY2zM",
  "key28": "nYx1Ami3hoPAqBmBGZqaF28K43KostPkguvRvBpubW4Rr8171GxfrMsQqwRSa2Pen1Bz9r5HnaWyA1Dg3Zxioti",
  "key29": "4NGBqeFqf7DXo46fSSpc2Jt6KuCy1gbG5Yy4WoQySmiziz3msRYki3yV3LrdboEXGbdDQ273fzdFdzAp6HHEyjyA",
  "key30": "3xJ3T7SDLqQBWe1SBsyzhv1uxfyE8iF7ChU5x2yDCQwMpP7hW5uBGDKtkmhTxkZPESx8PcMWJKFFrHRC5k9Cboh9",
  "key31": "5dG4MJzVdPEnB2Z9yrjewunUPUqKJeRqtBXCTeUQqdEun9jWRZTaASguZS946wQQBJE5rujitYpVUcXKMTL9vyLb",
  "key32": "GaS6LNnMXD6vRy7ZAcjGqLhKDJsHybMTWhm1j4zZcQrc6fvMEiNitRLHUhRe56sdXiAKZVNpVz8QhoCgxzJnNTW",
  "key33": "4jfi3GBuSMurjqTsW3udTtkKYpCnojoAkGkkAxYXbHt1YHAEUXB1S2tuAbpj3FGtxWVqhFoUjtMJT2DwAevjGF6b",
  "key34": "3Zg3Wsw6aJShKaUAhiw5zUo3Rkw37J4ZNyQz57bmjPtsCssKjS6p18r73CS1yWsbJ7QMkWdh36UQS7QbFiJU15rd",
  "key35": "5M7yaD7Sgxsgpu784Ch7DB1zTYywhQsujVHTpYUt8RsP9c8CeWSCiqcivRvTnNHYHtUj38Sonjr1QRg79yZW4LRQ",
  "key36": "36uYW7pLH2yiUtWShpTtyKaUpThgmYpLdmSMuYc317mc85zXpaApYyGjnzAdyBaoJ1vJZLgvfa1nqQQcKbPYod3v",
  "key37": "5aGP8NsrqGfkHoPwh5AqxHWyT8vHXyfEeYL9z86sLN3PzzQQsgQAYMhp9XLHwPbmyWB1uy2Ua24815mXVaeq4EXT",
  "key38": "3sdtXuPKuDN2rYwwWepFWMCNh9Z7D5yojZgAruAF7EqTHhAmgAZfsJQ6NUGgmSWzf6icQnw8XetVCXbdz5mfn6m3"
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
