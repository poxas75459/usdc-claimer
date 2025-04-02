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
    "3dVD7WdSALt1aTKQ1WVS6LpqMRM75UAtBZsgN8iKMt8yReMJzkUjkmjtyEqzo6AByrG48xW5E4ATpbXtp6YnAiaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pKXY8wuDQuSLAx1bkDFZH4C37yMNB4fazM7bDxvgkuptMXey2Wypr5RWjY1rxC78kC6EKs54gfrgptz759qxvzB",
  "key1": "3sNE4xMfX8jnb5Scs8FvDkHSv6h37Gs4XzA4GYhsPCQZnTDgXQFHt155qXE67mR58WMjGi8o9KZ4zpMbzsB6RD4u",
  "key2": "3Dr9GFQodBDDqZrS2aQrVpZo3f4VmjftYNZu8MqpNGFxqafcvtPtB3QCn1G2V6WSfwmkR77BgjFSfYcUq6BN2SNT",
  "key3": "5BwHAw3rzVz5bfVKFNLjmYuEQb9cvFs6QzSWdAkhBfe6B5aZ5mhM2LyFXxwgD3GnttLw1mEfEjj5J42ekUVGftFy",
  "key4": "3kq3pgZ6DEQryXKZbttw9akR5gVY1Cwc9F4XieFsVntxPKv4vVTBjGmHskt8in5xD4kYRNtD1nB7ZMzA77hrkg8S",
  "key5": "5dLC7jXYs5P7iv8dEjeu7nG6wYoUgHzj155jGkaRAJrXSE43qJMn3XkQPnFmnSynshGFXQHvnjgv4Wen5humD526",
  "key6": "5B7WAU3YBLSQgcxu6gKDpcvPFeyAtHMu2nuxAJa6ZgzPS5qVjKbirqf5yu9rYoWZX1Yf4xABbXXKTw8kYKPpgSsJ",
  "key7": "aw8NXNDVdK5NWdBDQiyNyAqd3o7BQmSwabVwnvKzMdXZxyJ2mgho7zMke8QJJWaQrhwTe9uyBjdZVeEwYYcAHjy",
  "key8": "2CENJbFW2pWC1qPxQEDzLmQfi7EVCo6GZXuXGzHzceqLVs2qAMQXQdE5t81BHUNU9nT14Z9FG4t4BnhA2BYEA4u6",
  "key9": "HrEwezWYF4bBJeHvAKSGswQcZZvHqMnMXyaWd4igaRnNJEUuhQwLeVkfKJVgUwqfggboWG7AqPPHfQRgA1s9c2H",
  "key10": "2dZrQ4CVvBZzfr6hMbwM5QMGq6Ne988T8ak789eMHGWeQjuygJUKsbZ6vqYRs66thBsJ8xceKK9Mqg8aFYJk7j8g",
  "key11": "3274TiRUtutoB9uDM9Z22YqxnAny7SwKaiZUJEDdVk1dxusuMhyRK3o9EgQMR6nZhhSChvBstGEZP4QuTpYtWNj9",
  "key12": "3RpqAELcadPN3PNzaPJhjZzeuqsxYD9rvE4nLS8HjuLww1YM6KPPApS9FP7SmDECQzAP2rvHtHmekW2tv9gbczN4",
  "key13": "4qDdxJNQZ8UMavDg22QTaay132Emf4P6MTqTdeRLuDxjyKWoQD9zkuT9g1htSS6CPvrdpFmCWxJsHAdBG1eDBovr",
  "key14": "2sNzN9dAeiKKTbhtZQSgh2MaJYovGRRLXZVnuyfRqjqNyPaHTSAjmv1SfSHwntqCXCZa74nDnAdfsuBnDe3ZRiwP",
  "key15": "pCKYEnWAgmMKMSdfPECmaUHR6Wz6LGMUZN6D9ZKt7ZYZUKw5jsUCyohWYWL7dsRDjU7Q5FpU7Lu1rpb7U2AJTfy",
  "key16": "42u8iFuqnVDPNZprSVo2m6WnG2fnPTa6aZkwB2qekEz7fkBtU94sgXNTR49SmjpsmkWVwPbLLA5xag4hNESapPcY",
  "key17": "22B266rqMFXr5SaUUbX3uMrZK9AW3ZZidKsHr3AyD8rvCGvSEwBxqPHN8h2WKmwzcXR3NNcpzMeXRhdiTtGLKn8a",
  "key18": "64VySspRjXGobjYAzZsZxXBdtWK8rurK3j9mGX5mtcpiKz8CCkSVTKGGvnyWwNMv6MMDA8gCvddUXuhZnvnceUdb",
  "key19": "4Wo1Rf7JLDgXWnEdTURr3A46WFDjyz139ki66AUMPBCxytnLs3zSAGeTeoRkGYQNWe8oTSaNfaUDaLLe4L8E2WxS",
  "key20": "3Asrbu2msoop5wMuHKPeNUnERLD1p7A64KcyXuPEWSFV5ZMm1gSmaMvnXyUJ9oYJjJgVpox6Boah6vBiWkXaR2va",
  "key21": "4GxQZ51wNASnSnbKfxoDQaAyCtaxESgcvhpNpfE42n4zLtXYifBX9D3QC99Zhi8X3SinfUoCtkddUPsjWmfaFK5J",
  "key22": "4jVLfJQ7BqLPrk87Um34eEFfxk6oYtX5PL8yX49dh7JP63xsQJZB7QxRbThckasZYq6WNhgJ2ByLWxKWyfG5vpKC",
  "key23": "63tUJGS8zeTFEh3BW5VdtUAEMyqsf2E7oYwhVWaJiQJX2Uee93C5riCgCT8Xacbk1o1K2tPBAEzbwG6jaVPYqbru",
  "key24": "36TvaegrVCKpJ14Ars6jjJ7gZt4JiFQUdSWBNDaUaEHWdKQF4wsijQizs2sETwP2uUf6vYuoGb2GSeQckXnMSJEf",
  "key25": "2ZUWEW3ZYTx68t96eagedWFJ4SYo1ZLAotqNELxk1WuJ1Nr9tbNWuLYvUBA61K3ut7CMysm2dHbLhcUPEWGk8eph",
  "key26": "3Nio2pwfZBYEKb68bPagnNx66RN39R6eU7E6fJ9Sv7YxGJS5tSaNAUXuBc77pG6HsCrQHCHxFZyK14iSjyaHqbqs",
  "key27": "4b5hVd4jLL5SXBSMUgWf1HtPHBpbLFQV5Dia9p9NvWS1sWUGhoNNueHP7BVWsEZYbhFu4C2RZurBhQGtQy39vKg4",
  "key28": "3FWA4bfGKea1U2FSFqK4kJASbnbQ8ybKoS7DofhHCcgCkQuZWKDS91QXnf91XBmdEwHRKRytgA3qoxqH7VKvqcWw",
  "key29": "49HyUi37ZWejKCvac6wQKuhbmLiZg6pbKv9X9y8Jn89Q1pfqkULypW8a6TigD7uEgGMP4gt9vCDozCmVEwxdpAxq",
  "key30": "2jCJzL5Ye4jDd24BoJPad2wDePsnxWWPjaEbsvCTwJHFjqdBwKMuH7g6KUU6oFjmZxuiAQo6mmVZoeHHYHSXziiw",
  "key31": "5SxUnTnao552ptfy8wGmV5RqZPhNr34MvgA6oShmgySLnBAkbHxiKQrg8gz1FfipQFEBp6xahJgXfq7HPHewSbEE",
  "key32": "qfAvDztdbXWVZvUNDmZYwfmJFiy15mjMkAQcNauRfpFuwAAQdV12AQY3qeFsmnWSMrw84DrinGaR6FqSf3VSzRe",
  "key33": "2D9SUmJgAtgNePiynFSP1krRXcSgTAHY9meSz7nL7VNkugr65o1mSFezi6E69UrWsF4GfPv1UjmpiQGVwetHBgte",
  "key34": "4jCcMvCQuK1hi59vTQuThF5nbRnifWScTwKWBT7j916YeKSfHH2j72ucJX99UDrCRy7C1JvAZ6ALEGd3JuHBrxDX",
  "key35": "2xhBsg4d4CYtZt9LDR6yv1hwbaatcdSbeJhKZkAK16137ML9Zjje4Ur5chwisNGZRaBKZrz9CWUxxPn2JHRVFLe5",
  "key36": "8Vd4SCgoC8fXxde2iGLUC5eAYVJ16bdYDKXyb5312ocE7V6XFLCJSBsU1KEjdYacHy4bRVFdJhhyBdGBu5Q7RkQ"
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
