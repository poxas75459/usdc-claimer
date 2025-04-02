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
    "3H3vbri7XErssfxFCmayDWJCjC3HqdXRmH5GSwkn5v8LRXVMYBoVdSrUH6DKbQ8J6bFnQPTtnrVzRDT5M4KM1dYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x2xy5zyLmAX2TrgJrxLLUrdUfE9kzB2NTb1YE4onwPU9ku9puGw4nexcQvJnWeMA82uqLRn6iUVDTjTh5Z3zP16",
  "key1": "2B9U9Jjs9m5PpxPwkE581MvAPZwWsQhKQSBhTwpcMVYqoRx8ZppqWCWmqdpiPhfQjeVk5avk88xeeGRx2qsVWmy",
  "key2": "4jvxiWi1o7JoqRQnKRr14EaraFZh7hn9b5oc6USMeSu3J3repo2KX4VKtQ9fe4jMzgKMw14Ns8yTs2MPHa396VUu",
  "key3": "3yqr54fnrYodnv7rr619vCL22BSRewAeL21hCSGYhnBB41uy4jnwnvCYRxLMSgx18BQ1QE8pbaGMZi5y44D9MMWN",
  "key4": "QW8hEz6nDqUnMSQ6pFRxquTacNnB37oPDRyE1YS96NyXPoCrENnqZMCy9yn9aMxiGubyTC55NSCPbYbxWb4dfRW",
  "key5": "49VYmrj6G9Tmx8CCLijFpZ3VZThjuijLyfpHSQZ98sgR1zLgXYC8TtZe75hZL43JBQ7sJFnuLYwL5frU79bshrsR",
  "key6": "2Q2qFTBSqUD66As9UxthkGbJAffdPdwooZpX6czkQoRveTwauVKQabSLVAKu1YYGnFiz46AuuqVAM2Quje8wsfe2",
  "key7": "5xhB7L4iWRaibdz1MX75eo5jr9C4faYW1GVrM53nqNYoKfsUAysnt5BMUThWvWzHr5e42eJ5sgc8AoqtVpYBxweC",
  "key8": "48dsnsWoGDFKYEy4nAkaZPn9516B2nr5Uwr9D5t44PqkLZqbTjX3Hr3feM8DADx4F5BW8UvqQDHp6tUpcXtsRkV",
  "key9": "5ABTm9F7RfbEc9Rbt3oMjZA9HsS4n4eoMdCK49cMC5w134cJX8eoWuuipvAfWi42NUYxW6pHqn1ZFkAMKfTHu6mo",
  "key10": "MUetX73VroFCUGAPiAv5RQfgKfBuV7epzkkCXPMSKnMNeqjA1R8mC4CPYCintGgyUMeRJ4Gv9kBY3poHQ9vByVb",
  "key11": "2D3CqYmYbXd5EciETvnju9DN9xbDkiJfuS4c52SnvHKEZa7xkX8rQCAFC5AeN3uGohTqpb5BGTkDwqVw4QkW3ibE",
  "key12": "1VdE4vn9p6vNkMTL9sWaaBYRv8Xi5hyUmTDLnmBDLMpf2PC4ewCGpaQ7tj3c72Qpsc1NokKdY3zU11a6G3ARdwW",
  "key13": "4rgJ56NL4yyxUciyHQ1GaMa2yPGKhEj1X5TLAN6HchQNDbY9gsWeb7i1VeDCubiJy15iUCVvqxvk8fZvEKri5c1x",
  "key14": "65UjFPx3hnDd9Y96DfNY5JBcXJ23Yb1W5hHgATQDUDqWq4Aeg7YQWwe8WwBLh3bJ3A5DuRJyZBZYXmBDuigt9tsE",
  "key15": "3g6p52kV4iz2L7ugxnUQDVERGiJXfpVuqtn9aXXs6TuowqMdRzW1gy1xvhZ9LtyrW5tqAwzFL9qL5YTPDUUTssgo",
  "key16": "58stGpuhpp99RgLCj9Exk1V9C2noWX5wM1uKn8EgAX48bjNi3y3zQBhEeGvMWmy2RfF7wrwTW1pTxiEZNKfiooxA",
  "key17": "3ZZ8taboqy2tYtFpsp4h7vHhF5XSCYHpMCmLBwGwYr5ryKfJE7E2JMLRKaWWTxjCTKZMuPapVotXWAV6vcRF119o",
  "key18": "2J1uQBLuyKVv95x4262NYur9f4D1vC1ZZNnD66PErncyLQZaFKw31xqkF2sfaJND269Xb8U44r3buAQCV2CexSz8",
  "key19": "24enS5hyoC4d6fSeqK6pcQhJ4TGEjHPmxXcDFCc8qHbRKvK7DF9icRQyvV1d4m6M1GSGYYemZi4TcpJLagPAre8N",
  "key20": "5b4vdkzz7YH52SgGPHj4xSVYgUXKcbSX8Qv4pMNePPrXmMTvoGtM5Co13VbQCMd9nYqb9wncWKX8JCaVfoeUEwF8",
  "key21": "dihGnGMm2i13dTDgqEM2Fex3YSJUthcfpkaHKwwTyqsGpsXJCX8gskyWYfGpzE1JWQcZwbaNRpdkDR3BPvUjkvP",
  "key22": "jN42RxL9hCmzpRViCS9BRQwzbyxFZgfWXkcAyFMg4ma5AoNJBN4tCuL9PJ1maLDcvgd86UYDwbLFzEX9fD5tuf9",
  "key23": "GdBnJ8bXN8AvEEEBUGA4cihiy45rCf3oVHpbq95Qx6uPQRV97Uh3vjQD1ZYHiA1s3LU3HrUwqV672xyGUo9PETN",
  "key24": "4mYLEZ9ai2AUTs724VUwNLe4PHW4C1VvttpkHJLQQmZsynejD1nYiKrRvDkm4ePVZaqR9vrUbSaZRX5UoNbtdZWp",
  "key25": "2wnE87QzaJQRguz1vaiU9HfJks4isUvSnruDVQTbxaT7WqgzRZMjdTThFfXr6w57LtXuqWqdt8MBK9zFAq67KKZJ",
  "key26": "4rEQJfBEHYvyDfUprkZtjQzizXzbphqSKMNgwwJ1YbifJ3cA9ZEM7uqJFWEvbeDLnfjzGFzVgsP8PfSbm3JN2mzc",
  "key27": "3eBzc5wwTqUH8J9E9mDshi7mM4EW9CzGqNAbSrXoHu2k7p8Ag7dETQyaitjioGj5THmcCTa7KTpdvETQ6JnZy5v7",
  "key28": "5svu9rVYJeUwvqH3zRK4U96BVUWNCwT5jGzBi6eJ2GswgJwFxC7MhWCdU82BsmKF24KUvi3ULpeZpBZ7Xb3RGU9j",
  "key29": "vZWkBtXYEKX7i7WHpeaC4rAz7A6zgwxMA29RvLV3Lae6VHx99xekrnVH9gX8KuUXHMdtPQGEKUKmCp3pii4Wxbq",
  "key30": "2uKS2DrsK1FoC6aRFJT8A5drAbgxeb5G1djL3tAR4Gg6zbqVNGiB5UmaV9p7DGCaK8ASsTXtLq3dVnxom6KjPt8g",
  "key31": "54mULGNUPjGxF4CRsQBsTnoRV97JyfDwbAu5dywRQjMgeBUv91iXsXcoaPBnfukPY41RoiqCbrc1RcB9YJVNTG4h",
  "key32": "38LFY3jtVPrD5ne4CzR7NFAvv9Hk4qGKK1cho4Zh8kSpGyKAgLkZAJ2DcPBaoyY8MWddNoLqtZ4Jmzn5kmAEMUAp",
  "key33": "3wAURDigNsU7rRXbjZKuzvGZNJSscNfxiDncq7hNTKxH8Qsi6DWqa4ZXy55evDrQJPacgpKBwq7BMqGKzoNTa6jN",
  "key34": "bpR5zkKyR8atpmr7hXtzwTL7Z8jh7WtWRbAxDWr3s3BAj1FPtaAiSqt4Gty7JkuXeqQQ6RyGKG2DVAiWZdJMypm",
  "key35": "JUYahaDdQ15R7bktTXpBAQCEZMQ93HPkjzDhk3oQyeibr9nnZWR1oDjmYWyFzEALLNaxLUcwNJ6g8ex6Lcs2P3w",
  "key36": "5FL8eb9XqPCUZTkyXQCssJLLNmZtcVarPspjD6fQ2F9dGBE1TSt8hewXfpn2j4v1VKAvG6RTG9sKpEVZzPV1VU9P",
  "key37": "4KuuZwHrXet7rwf7jsCwZao6wc7RUxQCPcibq7x8nkNZuTs6SzpcvtV9EoYH8g6CuEKnwSs9ttB6BXLdG4Pv7L1s",
  "key38": "4tGcEgGCS1cHdeTBoivdWz41BJv4nJUzgCxUZaTRXsotQ514AVyaQAfe8aSf3dgaVbjgPcEHsD9vb2BbTTXYVWcU",
  "key39": "4iFF4oDwBrCbbErUTuiUHh5rbzAzk3yKAYpgoonNpowtSdEq21DYt52fqPm18WCgoCE2YJDNXZgvUZbP2Z9Gf7ge",
  "key40": "yT7tzkVVXNUxCwnhVRgb8y37dGxMgv9RDkKQMc1TK5LGGYDG88J74PX2q5Wf6KX5dGMcGuFChEArAzGSWA7gK8q",
  "key41": "3FtqUetvDXDv1WU2e3ZXpt4bmHgRJKXYxJypvEHDXS2GECUW529bKqmUMM34ifuniDdUQydujoQxYZ8Ut1CbN5Ct",
  "key42": "3Y1BFVqJEK6QYciQFckDJRjgUgXRP1mZu9Ztu8FeeX35otyUFWVim8ZagiS3mbq6fBzMFpyHjPduYMc4uMxvjDqM",
  "key43": "5Z5yZjMjwtN5HwHRaNn9rkFd4Mf7SHnwakC898HyrWjmvnGnAmXvK7Z76friJmGnS2pcoS7aEnpGRHN7mUm2SopF",
  "key44": "4iz6VoGDF5SJRKXobjEGA71u2tmFANRxgASY1qJVtvvRg3rPMyZgajyLZ8NDx1dS5Qs33sohMg64XZu66gtJ5vmL",
  "key45": "4kDtRnAGcHzUBu2Sa41KHPS4Zr1jAC2MqRXF8MN8LPrMeTX4YCjbMPbes7YzhBLSnNJNXRnqJJSQ9kgkSqgieCDC",
  "key46": "2Xbcm2Vkjs9khyzGyt7Gwgzyti4DsYhVqDqWxeiVUT9SYXWzm8BoKzJbh1tDTzAa7B8GD1t6ed8jBik168nWxEow",
  "key47": "RzSwaNiMw85jd42qpFehiFS24uGQsFqvcdQnrdoupsZNX5BNcbh7zAfbNLZocy6BswqKFEC643rruM9UpDN9cm2"
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
