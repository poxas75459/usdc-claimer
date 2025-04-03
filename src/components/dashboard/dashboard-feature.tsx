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
    "2S5ncFo7eivz9atHYoZxzWkyF2vrxy1Mknb6YJdJzHQmnNxqPFQcXpDqoQPQDnAgPvtD8fYFijpWbnX7xYw8RPZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55nt8ZqLFtoJEpJ1ZxwVLSyh1oZrHUQc4jGmb1X8LzYFd1R4kqKqhp11bzFDRf2Vhrk5pHNkVdwrCvn9DYEDz7L7",
  "key1": "3FSMjtJeSWG7U2GdedqTJHJ71hRb3sYHNrNAy9ieGLgECGJ2cU9AvVNYTYYhdxzUTDenG1BeNQtpDZEE6aSCjGD3",
  "key2": "kWRY6LPiRQRJJXW6uu6CeWurun8kQkvxinJRFhYkwPQnCfxy81ihSiBYSR7vqb6uqitqmoHUrK19wapwzNxTqKJ",
  "key3": "2Tkngb8NSq23warVaMmsU21fLeHEt3SC2MgQ3nUUnXCvG78xKcxoK74v7EgvNiw9nnpq66H11Z27UwzXrBV58zaY",
  "key4": "3fftGBZWQrsyi8Syfk5QDu43MVg3MJdLmeCJqmAZWMHzVgDeCzYLDn9keoAQf5Zz9MR9qke56XCrDEjNYjUsPnFB",
  "key5": "9MqeCidMp8TiJXFGzgZSSCtmrTBFBfSz2MEeDwAvmFdgWP89ch9qAV1U2jmhdZpbdMkSB3UDGmDw2BMyBm6DoA6",
  "key6": "4vnUFMZNRHCrHDTDR6M5PqHp5R6NU42398dTCJ5nMQPHSm1o5T8TDrDo6b351jTWkcxCXBw4WZu97YdbjCJhUiY9",
  "key7": "hVACiuuqUbg2X1Y7ykuziDntRuXZGpAAKkUVEX7RzkkT9oagLWiqiR8A6m65SXXfkygnfDCdWhFuvDV4bgbghYg",
  "key8": "2oFGGNiYQeHmsfdwfLKNfxQh1UFsW5Boe7oj27ysEioJFQ1hiHMRy2cF1enKCyMUjBZofhL2czey6vnXQ3bTBjdv",
  "key9": "3S9Ghf7cjjTVGefhNLvpJWxwXqgbeA2ZEsAhucnnqBBe4kWfMLafxrMK5gZ3vx2Pj1jmLr8tdjo9DM2hheX1Vr23",
  "key10": "7XEW7XB1N24KVPMqDhDTqz6qpqLBzABxcW6ppz8W4pmMftmUwEkN37mhZieB7sm8afVecUBfb5JKU8zBfMMncnb",
  "key11": "2gLvuxCZYpo5yhmJ3S31ueeu5bhyNTHpRHWLPGbsXaQYHDC9Apdq29nWREMkokafjdh6JTeuBs47UVzY3AYBr9qn",
  "key12": "39udKm6R7unUv98Lv4ZeeEYMnnnUsamVwmP9aaoS85yaEVMEcfx8YcRhU2TwpdYaC1KgZX3VksV5CFmGXvomYhcH",
  "key13": "2srsH45qmn7WisgqY6dL37Spdh1JawfkLXJSgbHT7asZokuZy7d6EAzVddV7mbuAidx8tjHq84bhVKig79mxUu81",
  "key14": "5CcwuNfDcNsUrKAUUHx3KU9PhCaeaL7XFtnvVudH2bthAGgyCtMVq38Cx7bxumGmUaCn9QvtYEUPoTUJzYUqFKEj",
  "key15": "3WJsxymMVjL9PAicq8hz5JzPyt1QnBoKKasjepGFzx7z8Fe9YNzorUyXbypLzesx6ohR2oJDRvqyosYeJKKftygD",
  "key16": "HaTctrFGrg14wPvpvTFMQhQNQxJiaLC5hxghj1Hgk9Vswo2VMRkQjCqB8kBaXbm9Mja3v9aeaf85AoReNynRXjd",
  "key17": "Q8aokvfdGkmmgrGCP1BjuQyhofj2gQhoFAU3uUTu2kYJAUsakQYsHcwFeVNnS6TooB1bFye1GjM9hka1JKtJ4Hm",
  "key18": "28TRskRJ6LRYLZw3VAUnEsBMqqzGdzwy4958KeJRkMkvRc5qNpDZy9rjZV724Cno88wfVCYdNA84dDo9tMQbHiCP",
  "key19": "4xFmGnbWfXFKwohTT1PG6Zc7RC82wmuVD3tCE5zpjkJpJf5WvwXzz5J7gYrjniQ4ov6EStuvRNGwXa2vnYaQK1UG",
  "key20": "2CprASmBXWvckCMm4Jzz4Ze1CTostDxD39HWYgZJPz1XFQ2p3Ks7KXpQpg2bNwrM6nXfCkP2gmaa1TkwCnFw2igE",
  "key21": "5fn1R2DDhBS6tUYJeecEurRMXynZjCaE69UxRrrbfYh1gZxDhmmvvZzyQ8VzcdBhXVxbZeP3e47dcEYC7jNqatpN",
  "key22": "4YGLwnmi6TB59XZkzy1t3QmAZDPtSEccVPkjYcpzDheCv11JSZwemDMaDucyrJCGfHGRL8rhqQnVy5Y64EdcRDQb",
  "key23": "5v7KsLf9y35GcafbuoJWfvfqJbppEamS3jMBELM4NhUUas9qYjsGMaMJvKdChipjMDBQ6kXrDhL3heNWdLLBc2sZ",
  "key24": "2YyEon7ahbspZWcTELgBfVTJRcFdu3qy86y2byFTcoSztYc9VBtCFVEXSFuwKdzLDEGUxjwFg4qVEfvZHjHoLMwA",
  "key25": "4gDSxmZn8zcjznNyrQpff5SZkkVKat1TtzNrgkCAknREAniFxmhDTLgaQQcP9huLMe2SBfujU8LwCwkvEgZU3vby",
  "key26": "1BEAM1GPzfhjzqpeiQ3bDvJHWsvEE3nGwv4xM8u4xGmXhzNJvmsJLQDWQ7jXg8PYgf88x3n4NWxdh6ZbnUvJ5ZB",
  "key27": "2c1Scc3ySBLgA4KDCEM2tHyFya1VRzNVCyvx3sFpGSYv8ekynm6uQ81XcRkz5dTxXw2tFX5aTRNyfS5YeRuQBM56",
  "key28": "2sGKG8KZ3snJCMnvWzirYzy4JqaZx8Riwck6qxFhRWYfqaRH1gsaUfesgVUHkZCiraxevAAP9qrCJ2VwV8pWxgmG",
  "key29": "4DuaD4GHSPzx18Twt9tbijhdpThQbiGt66DHfcacWdf6qN7j8fhCzCS3p7Shb4sXs9fywHBwAx1E1HW7Wgr45km4",
  "key30": "3yCBkXWwyeumdXJZhBMR4yYp5kzZgx9f9gDCwB1M9Dr8wEm9Ms3MLiE2hA1wRJpYggkQ1C5PsFafXVoikAn7JWuU",
  "key31": "uuzXJ6v2SsZQJrmYr1BUydnqL6TKhmG8atT7zwxzWtFBwqrDANk29WvXKeDx3tNYezCkvSDupycMPdYAgWJUUmk",
  "key32": "cVxeyc8Bgq1SjJJVnQ9WpXCH7JRdGaVQofXzcyEruZEdVqGUQLZnUftRbiJtrmTw6Kq4KfaE7RCqnZRG2MDiufD",
  "key33": "64HDvAKTMY6LJYbwoADcAJ1gDu8EXRBdiNEu4dzSi7xrcRKGtBzWbgbZv72poVKj3fiewNk6vYLCA2GGvejKGmsx",
  "key34": "368581iebbHK2nr2DvUFnPpRrf7r95cRSLt3Hh2d4p7PG9eSuaJheh1dEWmTfzbV5pad9MHkMop6bmk6HEJhqJe6",
  "key35": "4Sbbq9qyb8nwWGytfsRpvv8Dk6YKQUsKM71MV95eSmE96yQGdbtGL1cTZg5xEvWy3DgA4d3UQyMWTxZor83kp7WN",
  "key36": "3Yt8yuynYxDDNPxKANw4p9WXBQDPPigrbMRyUZVEyZhapX4JkbXbowYbJdeejKFwG7vaj2a7nYWC15WcqHsC3T13",
  "key37": "5jExDn1K9muqu9xzPfLpYs6DryF8LAq3TkUdDHq81gMETKufZYD7BK1XwvXekGPqyqnkcURo1vHkfjbcvq1YwTka",
  "key38": "2RKqaTmnwhC3tkp85DxNEjF5Fie1K3NC2j1DaF21ufSeFrLveofiUoVM4yUbCHD3jYKmiG8ipukZ5uZ3sLZzVcCz",
  "key39": "G1c9Qf7tbAA7g1Uo7u1rbSnkr15F3S16zAdSxqhsavRcts3PFnNtLKXEAxQ23mdgSK4HhNmuHfnzS2PZbwiaT6e",
  "key40": "2GoWCsLod3SfX8WzExvWghjTJJ26LMPTXF4iNgaYjnbRkdbogHgDD2uLoVv234UPSycBrpZLY45p7CEkqEXZJ4Qv",
  "key41": "5GZaUMzaHb1pkHLPx4CEq78Rhat86rTnv61ppzyBtcFH6p7Z4VbcwxiDVQWkqjErCPXzsLYBdC8BQXD67fLbEb5t",
  "key42": "23tyRGCrA2PFSV9Ar8Eh7nP4uJGrweX3wfU613bBQPNfa4ZpCsHu4AqAwnTqq89wytUskbM2XvUQcJGx1f9A3G3w",
  "key43": "3ddyqVJsYXz7GQxWgCRfUbxXCB9ANjKMhigBxEFn8R97NoQb6BanShoSJD44BoRj4c4eMrMefz3nQqNvQp6MjC3Q",
  "key44": "3PF7m958r3Lsvd7QzPJ3JbTu23bfkmShsZh22Nzfs5yaLabbHuVXasQ378KkH4qXMuHmw3Lj1mjSvKiSrLS2ujfd"
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
