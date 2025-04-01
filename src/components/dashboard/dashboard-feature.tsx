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
    "2rcep5iqm8aU4tQjZcfd2DxJjFJujszXAFPXR9bMSicW2FJPr65VtwSnG71LsMJNwYQBcoMQniUhmWTMGoqSwosk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "evrA4aDRz7XbKwbo3EytR24iUXrQn1sJcsitxk9ckWJtGDkGLcMRNcp2pLFhZn9pFAnrYwCYPxy1z3fZTCviFvW",
  "key1": "r6pwVJNZvYN9L7umXcWuHpuNw9nxs2pciS32mDSMEk53udTnVf4sqn3Ds5f2JVVwqHhYE9LV7XCx8jUVNZBw7qB",
  "key2": "BKmKu7Zmja7sSnN97jfxotz9csAdmkCS8znf3RmtA3vTVCqAsNBwk5LUruujs3z1gwD6jvipejeYQKoZurGBRTi",
  "key3": "5CpxkMzT6JCgU4tX8nSBoWEvDcsTftrSLFwgGj6iQvw5gJdSWJxRpnBywG7bbciP1FfcD9s5ixATDi5kTo5PTqdg",
  "key4": "5SMFer8qhZhpbxgrKw1D2WWwfsh7CKomA44C9BVGCBnRS5QhHa8HZ6YY8ounLdebVFkznVcfTFEpTnJQGwFYw9zh",
  "key5": "WhyvbP3VqGpaABqJ4Qt4ZLeGcyZgL4YfpmR247zVsC2YdoJCMKUsaEophfLxhH1e6GoCo5f6s7V1eSXQeGUUjQE",
  "key6": "5tpUtsfSND2hHnp18cSkY7rqrANn8UyPCaSjeF8c4fprP2cbrK2idZ5WhzTBxaP33YtBNKzojgMo4rkPxuPxzhyr",
  "key7": "39sLtA2KVGkdDa7BWskmJsG8x2Gx4smPZjibYAtc8URQGHwUns7ZbRBbfFa2gTRxB2fCaFHNfNHQEaj1XPRs663p",
  "key8": "3Q2vjqb9rxWcbcN52rmKxbvDk6bZdH2fvyHwfJfY96Yss4X11ujUidmUaZLUagGsZMyfidVzFae3Dr27pYwDscVu",
  "key9": "oj8AXteaKny2L1NewptvUqQmoqhkXmp3XrrsQDvkuYatiokidgznN8oL89p2cFyLHgdL7AZtSwztEnBjbf8PaJG",
  "key10": "4ftKWeP929EbTbtcGxSwKKMYZrUVDGB6vGg4PWkXpfj9rFZn3o7AjvktbwUZWZPsraaiYsLCS2TEAmkawVSEyjih",
  "key11": "57bE4zeKSrVKcg4Y6pU7Xyom7NKXfjnYFnLQrFFtWk49aiFXmRnLo6CjXvzLRPbHkiDYKf9qCBbBxCU8W6RUEKik",
  "key12": "44AMEJDbs38fNZXFpXHK9fAL6go6obvE6uejsqaLsvQhMsRkC5cca7bataNVvPxbZsvgBdCEzfcNz3tjzUycrUdZ",
  "key13": "2P3rxRpaBPcgZDkZxzhyYKqmk3reSwXJPNXL2Aerv4oYnfoG7KoRKhmihyUctj3pkqhh6yy3qM2UjJ93wyNRd8n7",
  "key14": "3pJH5kWEA35FALUjhpxYaKiLAU7Wt4qjhNNqs9ogo9imHdfkS1sBYQsmiN8cAhwmCCotCzS7adYnPeGk3PjrXoMN",
  "key15": "mAv5ya8wvxour4LcMZdgdDjmxCGDfywYnb61vtuxdqTriEQj2yPMwFGLDgng5jn2qTFnSsiJJK2kmJQpC5bzL8c",
  "key16": "2Jqy7QsVXiHJ4hDZSpJMTcK1AYGwiWeszHjRgTAEv8v28dBvuj8GMePfc1Em3ShYqwRHm9j6iqL74CXMwCVPN1Xp",
  "key17": "3dYMgNep6ysrXhhSXcmWpyYUqskznSGgXrj42YXDQpFpBHcC7vvjSr55YS9PA6LwqcXku7bCx5dfJpuP972Tavro",
  "key18": "QSV7kDheSgA2R44UTaDYGURzqW6iFqMNo5o1DbHaSVxVg7moNGfMBsEhT68JQ66RDQYDdePiGXPz4sBiU3nphRF",
  "key19": "2doLkvev6r8PXikrSAaLGBCc4gP7m5N5KM4PdCsVfFYoNCWjRCEthUuChDToRHaoDdNatx7gMFoXYeExAqYaMbyN",
  "key20": "256CpWCKeYbnnqnanaEHYKSpiS2ewSZUdKjAupDuuT1Q2kTpMHQmUvXzngTdJ3U85Jb6LebgmPAHkkydeBtb1XFB",
  "key21": "34GDNhw4Y5C1xXi3JqQXkUgvLw6nRLvQ61vuVZTrX8Q15P5rcjMQ1VMHqSXVj9FzKww3NPYVydwKQNCewgMWM6sJ",
  "key22": "4Q4aVvJKbAHsaRLezxhUZPrxTppm5iPxMyXeDC8mv1GzNeUpPnP4gYp61bfkmLLwtUzTo7mi9JzcHP3FC1KWmtBt",
  "key23": "FRa5g1cESdHeF1j7CRYwxgooJhdWPsxs8evWbJki8J67JbgjiLwmAhp1TpdcviWYihhu2hFvDNZNoVdhoAZWpFK",
  "key24": "2T2FDedXAUTd7idjDssnEjVQ8V8BL1zDYGMvPHBq1q44YbEwEnPvYx31d2HJtPK74G7ZKGc2fJjQVovSQYXprqn7",
  "key25": "5v1JrVvfiaJ19iPGpKGJwxfortsZgUbozFvxt4sxoDscKB3G8yKiHZcYMLD2V2EL8oncC1gkjuHenu8Pvpv8UjFu",
  "key26": "3y1KqatMEenLdE971UyvJMH1jgAa88XaYW15SBjWaXhfTTv2KhUFEyP5sHTXWaw7jhGiE8sVzQT627q1FMS6BJJ8",
  "key27": "2Gn77HmfVxM3mn7ugGwYPfE77AoiyLdJVGnuEfqj5V3yLrrkjoHFfgv5sb7zm4pS8VzBEZjCa5xyynfgVpwKXk4i",
  "key28": "47WAM5tGo7LcnxgDXdgJGN3ZTuKdFpTa7Hq4WimJcJTuFw8PqqGG8Yg6t4xshxjg6Pw1RQjQqqHmKzbE4EmMHRer",
  "key29": "pkKE7oqiCj1C8hUvNKSQjLYFwNu9EqoZHh83sKWVUfS9oNtUftSBc5LLKQ55YQ6PNo33eMMzNeYYhotkLAgbab5",
  "key30": "2U1jKwWmVXWyi4GwsVipxbj8MEFmPtsrcc1BeCw6wW72RHKi9LUBWSAtknQ2ku5fRPoC86UwC8KBv4qpuFuZA7N4",
  "key31": "2qELuo99YQD6vRd1pfLA1zAPNB9oZxyC6nb5omEGbiuQXRe1bNYMLQ5FR45vsWGEZhuFQzUDY7BbVwSZtxaZo2qG",
  "key32": "5fPiHxn8xRyrnKsa6GqQBWJafE3fcu6xnNhJf44mNHjhmDdpLyop6W7DLsucdsVypMSqDbMMN7chRxCdDr67wecG",
  "key33": "2n2bGFMkjW3cFuMWgnhk5GA2Weq27FtkGXsLAVofhEizzqZdiYSN4tL9PFiACjMBfGWZ9RCB2N39mtdkWYs5gRmT",
  "key34": "d8uUwfibPdUzkzKV2tZykiu7wcwSVwQymT8UzvcUK3V7o7jqbQ5gyVRqR3evXgu7imY4UwugF3vXjtztAeXJBgz",
  "key35": "45DbNhq66bRDUakkA4FkDrjptvWNjc9MqpLw229xNUs8iYLDRGm5eMyQHk5A1m3pzdn6adCbdx2n1Q3afSYh3GXM",
  "key36": "45EVrSAfsr6rKdG4iWqKz2EoBH7WmJPjBb4Y8tEPMcfQhmZixnpmNyno2exHcCsXaTGorVRpdsYKGZWSJWnC1ora"
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
