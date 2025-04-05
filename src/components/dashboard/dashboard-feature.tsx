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
    "2ijG7R6mqgNHt1aw5i5MBnAqVYL9dkEUAyyK9N4PMmekR4vPJjBsi12c6tzZLsT7ro7YCAXydPyQf2AKdzttoMAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zQ4BfyjtvQfqM67u5i1V3tHn2m9Y9335US7aKNb6iHUGkfpV8gFwWNEMqEExU7aHG9DGekBFavXea9AW8naHztH",
  "key1": "49svC4jxHmrGeYL7W9vUPYDpLBhBchgYHzw69ne2K3Rp8HFKqkoSD6W9pq8dPohSu94PRoEBsuvGWVcNPaSEYdMn",
  "key2": "4aVoBm57Pr4d5xEUx2TmZbJ1rsZ2JkxtCGcd69NtkzLeDA3iJkpS2yzYK33LF48Uroq9rYjd2eSePcqGrkbDiRjM",
  "key3": "heCNR9sS7KfGxmZX5LdeTsiBqscCGc4sSg8BzLWHvbK3u3SKbDntD8XRvsDVRnV8rGcWycRmUK59PjVtz4TUJds",
  "key4": "63BC18AByj4GoBzMHa9TLKYCbNQHrv92coEb8FbnXcMpKGw4vvNNCp7mbVYPPdzyUxSAF7dVe1AtifvKoq3QR9CJ",
  "key5": "5r1E5xkXE8E7VKECxVwA9cchoXLZhHNhvH85pNiDDyaEjk9WkxFUvY75QVBPQan4LBM2CkMzKXPr9p8UciM8aoCm",
  "key6": "wvGBsBKqAG3RKCx4tfYRHWoZhwYaXQsZqcjd5sMe7xM894onAZFXVQkvSSCetiN7n7M9uaZgYBb7zRZTfmx3erd",
  "key7": "2mPhdXbztN4tRXsQYCqu4hHNMQUVAhhnzkCZHgpCB3vsNHY6gxZztWLEM8GKYTAxD6DrWgWv9KmdLf1vPEkinM7p",
  "key8": "5F3gQ9ZcnNRdgJE6Sd7VMMXvGGkSbFBvnro4yNFkH8i2uvG114ewUNyK1avzsyiP3n5i2xnsB1iADZMFBstu4Fbs",
  "key9": "3fNsngyksbw3rEpRLeAMuz1tcPeB18sf17zPT6SkaLodY4QqsNCgZ8aN8aXxFx2UX7fTEh35d9zCXJNQygRUqqFk",
  "key10": "3ivvBHiXhrLM8aXZ4LWwAFU5mzUXVnpEbwAZz9rQ6naYStcniC48TSLhbDdHiWQUcm6QHPoeeyuSi8H17g3VUUiC",
  "key11": "3r3g6VsfDxFvpJwbZSYcxMurVNGSSKVXPPDbRYAZtHmFqibx7WCKxztArzx8Kq2Mpxufz4ZWydZLZScd4wzq1ySt",
  "key12": "5Y4YGZ1wuT8LxfGWN1gCaaiGhjyanA1DLhDhqCxiuXHcYnnpUGzzUQcKgMSPRPSEqLTAvGQkouD4mu31YBKNNsEY",
  "key13": "eEiRmho46rAJKcqYhcJ8ML1Cf4nAYWAx6nqETAAdKYJgVPhdmCnVrJhMJ6sy9mk2KQeFHZv8ciufzkMomemgXBY",
  "key14": "28r2bGfqJcKsegUksQHwmPkCR8odreFasiPUvLtxj65qbJ8CFfqbU3QqjPLoUHmJ7cGbmfc2WT6L9tBg2T2rL28N",
  "key15": "3kqZdVFvvEZH1bAJoLHapUhyuhEymC8zx4waiCZpK2m2vhscSxjMN9QZch7X3nPZ3QpBbcRpYvi4rbzi4tRHjnR6",
  "key16": "3nLRTJvAMrs5SXYuwGGLHdMVz7X5miZzTcaQCvTGGWQkAXqoTPi8wd4juP6sxc3NFWdjcVq7qB6hxFUoL5RfN25",
  "key17": "3ywC1rRJVgcEmAcJs1WMsDnwESDgBS8qCVE6uSgFmgnHmPU2i4rrRf2fyxzffNBrYCeFMNjzmC14NP781FD8N6V9",
  "key18": "5zz6VjB6jC1Cbu8cG8vYDXZtTFFTvaEerkhF4ziCP9szgkqipz7dFL1wmoUN8bD3Wd9LaydeWepYFCvPpNCokogw",
  "key19": "59MTfstfM6TQkefuiah5f6GD7ieqm5fLjjTroMhmewMfZRhRrVM6Vt63YFcmjdK1SyfqnBG9GnxgUSaDVigkwVVc",
  "key20": "5CT5h9GqRXqXBSt6Cnvg835jymqwjikqkXTypVA7DUNywMxP9pXVwR3T8FtFKjx8QdriART7HpKgEZAxPLKAHGoM",
  "key21": "9uYgchPqw2rQZ8eiw7vLheGHfHTivcv8B6WE8BYkBFbZsyFGmgjqhtALUYMitaH3Jmz34TDmPqwRqcqf38hAjyS",
  "key22": "5UziPfzfRFRpEfV5qdaJRQTR6rJJXVZiTjKyvJ683NYxhGQeTDRYidDqDarjEpetSdfWPFgGrmsLS3K5wkTX4rK",
  "key23": "28uyWgb1GzTBoPa8r6wZyJrHZgsx13TX6AKNJ96KkbU9DSsB6xtqc1z88C4nWM4JkFKZ8QELVUCZsrnuWHcj6tZu",
  "key24": "4FkXWQ9y3v7L9Zcgg24XyR5hq5YSoxGhztQdSrHaUMTu5Chnkoin3qGrYFbjCNJvYuEHG58XHCfBzykGP5ECkzCr",
  "key25": "51RGxKHsxtF2qbBe4Cm9Z2oavZsm36eNp6RRqeQoZ6NxGBiumUxsUmzo81nVp6UaKmNYiaWJ74kPGGxuFSRvEjPK",
  "key26": "3Y5knmnUARxYDZVKF2Aq921pcc34z9Vxi2nUVi3UHCtTGpvVUwqQa4DPX8L1aN9EJAKk1fvMJ7cZBm1wfLzmqNJw",
  "key27": "2FxRv9xi9JaE9gZEDmB361KMJKFjFdYL4rzsHmYoK4NUvtfzAuBgtY6pErF9TY7Hxnajvz2R73MweZc44duBW68s",
  "key28": "54r2gvhsuYFYyDrKpsnFQQG6PVUp9Z9ibVbGyH1Us1aResmrrmsFDnBNSj8oaKCkWcRgKxGCB1S6ZijfmVHktAKg",
  "key29": "2hs83ZYRTQfkjqm3P8jg7cACUxrr4QCKyLRb3bLxmgnoyh23pHUvBmLi79DM5HacNL5HCyYLkCrzw1b5yGpyUjy",
  "key30": "2FERYYDRYdvKd3fasd8uHVhb2MQivaLVTTQLn8P6pXupWFZJCdc1x82uHvVge6yXztgMmmKiaFruwMMop8EnNdxf",
  "key31": "2E9hLYKfufEfWUBMpVkAnVDL6HYNpvBkyKAuWZnXZx28dgNzpha8haEZKSv5zqGSXMHVwQ1Vu6oa887fhPE3VhHm",
  "key32": "3s4sGHWaKMU7rie8kMdVgKT3c3X3yV5rYYkqLXvM7mh2m4Yhi2VSuvWkSqEpzVC2i2avyZhLBAtKMyZo2CNkYTH7",
  "key33": "eTeyRA3HLLpcGqdtX4GvPgYGWWQC3XBUU8QdfkkVxny5PeqCMZfijQQKQg4h8uVtcJU1CmUePXtLdxmEbYhggfp",
  "key34": "5ZH6X3KHAPJJTbCHexKBSmdVDaiUatngGUKdULqGZsn2ZB5LrCJUhLikN2YiTbfQPWcu8zQsq8nGB2c1kft2Aew8",
  "key35": "3iRdFyLJgveRMbxaHXkYGbqNc4gQoS6qBRPQxFKBQTgxcVScvoRzRy3uEdpEaDx4LQAb5MM1esojNg8zxEHsVkqv",
  "key36": "2EQoqdno4HtYf6Jr8KZrz62SENHNw8gQAH3QfMFRE5M3Sen6nt9frfD68AtecNFJuTtcJspX2kg1EaLepGsjMvY4",
  "key37": "34EdpHRwE9DPjvcxab6yJKXADrmXYYE8XSwb6LKF31NiiiiemHT472FsZSdmsaMh3NFfHi82mBobok3nQfyvxWqy",
  "key38": "4enPevSDH3ueAgxM5N8hn9veXaB5D34Q6APLVgGup4NJgGMNzxkFG5Tdxo5QVnYXYHkBcFoPJ8inDPAkzs1ZWBLv",
  "key39": "3Da5xpqUxGm382q1ou9HoCsPw19wRz3bvHA8sm9bhbgey4g39hs4vywfW16zLvd94wP4RRjP42EKZEAvrvJoFgE3",
  "key40": "27T2Szeb8qyxjnq1fSPz3b8GqoGzWMpfMP3prUbEhQN914Lj3fwRHwK9G9Upy1SsgZSVFCWkfnuw4Fc3R8dRXmsS",
  "key41": "3zMQUTdiT1gWeCVizEnkNKL4pqCFCMUGCGrCVPpeectEv21SVg6qVmo97141P9Gk7tR2Rg5RLjrFSsjoJzeHAAr8"
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
