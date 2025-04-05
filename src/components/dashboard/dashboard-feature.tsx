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
    "44BFCuM53R5jarDMMGkFAPvhADhvbCQexkQZgYgEfpuUSmpVUokTF8hwpJ8v1xpasoQUUn98C6dpgAaaL44wVmbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wHdLrUMUt2aKNbVPPTCUsNxAyUYtjuPtJ2yGnAckVzatqGc5RAZ3mWKHYYDGdqgB3jZWmmpz5WQoGt9aaygJGdY",
  "key1": "qoBu5m4ugagrqJcCvMj7GMLdu2NBPwXPxEPv4n89Jr1r3zT4PnBaRFowdS9qRCJJDPmzZLExNY1qhZTDP58vqnM",
  "key2": "2V7rvQQV42WsPd2mgEEEdmZEdAQWx9rWzYoc94t9rjGkBKNdm1gxnyKF88u4B1CibeL4aR5BbcptYaeYd3tsaAAw",
  "key3": "5Xkwa6UoncZ4xppGNcVk1jhuup9FvWZkmAtox7U6zMmf1m11nzT3cfJDY3VbR4ncWojpFKBQB9dNeQdRCd75nxdj",
  "key4": "4xuKM8vM5ByHF8tdu5B44DZ284M4cJFDHCn8J2xYuACVRb4SKoLozYoiQieFCeYsxRdi9qHZjcRjDbv8mRFJqtm2",
  "key5": "5rBgNHQCW35VkmVQV727nQt9V3rQo3DcwKSFn6PKh19YCZQKU2dMHcQhUas4HbmNS2o5fAiQNrrTAv8arVrFsHK2",
  "key6": "bmVTJMDfrNYFQZqr6Q6Ha5qCPzHkuxGLohw9dz3NrrtUnJEk8pPETh66v319f69iVfCUxWNxRAu9Rgk3USpZsyV",
  "key7": "2PBY5kcTRF3xUNYurxL4CW6YHVVvFSix8uj2qnGEbWvSeU5h1YdrJw69TWLZNSaAZoPVNFHCWFGTZh9hbkptmcSd",
  "key8": "3vQBq5rkiNZmGuc3AFTKwMbPcq4gXH9oJDxXwYHxZ5E9hfNmwhb7gcXLqHVYsgKdc9Jagb9aY32hRdXLqYZzVov3",
  "key9": "2qs2jwzTM3EFMQuCbHAr353jzyesQGfLY25ronAQmAyPGKvSBgFrAhFmfyuuT8TjRY4DUTnzyGCbgZsi7KxYUEn8",
  "key10": "5N6EJhFNdiUCHxRaDiskk7QLReWgdwvkSPECbqtuiWfme7vPnxs25r3s7mn6qd9Xuq8UWuyjbxEdXVtMqm4e9CrL",
  "key11": "5guhiKAiv2X8euKqyvXZZRQqhEmbrcC6YWJtRUjub8weP6FDZXFb35h1LjUp6R5AZiC6P5qFXppaKmEGtWc1VgHP",
  "key12": "5p97aJmi4dWo1uTECmWgsiHMHzHM28SD85Fu217A2KyQQW3vU5haNmEAgRwBJKdiuMiepjcR7vhvYVDDvizKxTZV",
  "key13": "BduHcduzjc8J4hyGLCvZk9m9rS3uU13154wHxA5i9o89RUSQuNrgKz87PmNtcK3G3ndTwcfNPXKdszTfY9wcXRp",
  "key14": "u1SrmcwL4heJX6prsVHsQVYqNChbLjZrvSDcPrdk9bKAjAh3JmQ9HymKwxHjTr1LiTaZgn1DLk6QXoRfLhdDup4",
  "key15": "2ZorXoM2X3Mi66NUBJo4jnim35d4iKvYoqXMBH3CEHBPweaDH4QMopr7gfNRKJ4TBGiiUrEq8eEJyhpiWRAFLQZm",
  "key16": "PDSRi4XQXkBBF3MLRqYk9Y5hdsra2z8mdXYPJG1EcCF7cYsLeCKqQNAtoSemhqbj3sGkzfG4e7UZqocA36iHNRw",
  "key17": "2KJVrM85FYGRNXNxXvW4tJgNDCyEsaBUK4SSEzqcZPiXVnbqUWsgS7dotpqkYz9a5jRNi3gu7QwzzSYJCXiKEWju",
  "key18": "5FJsPP4tJkFwmYM6oapEdCioqr7cLsHuP9N26pErbxj1AaZQkQo5YDDWvrataAH27qymhnWPdCM5bosPt5uS4TMp",
  "key19": "2KKMo7UiYXEYx3xev8JfS9NGHNnNGvtdV6Bssuscv1vJk9hr54KwS872567bqUqRbqJAuv4pjpWrDmD3KSLq15UJ",
  "key20": "2GMPnDTFhyo5ATfRRtkgBMwxdj8q6VUBhdhbhM2h52s6w22qLMhG4e2kr6A1YnkRWK5bsNETcCcBojG5fuoVynkX",
  "key21": "5hptBLzS66Jqs2LsbbEJmc6JFAgzuC9PoQqfxa1LJDfc6ou9AfypK5qrZasEFHFTGAKe5CXw2TfpiboUC9bGgSuq",
  "key22": "r3rNn4ZyExSqGN4RQPuy65m2kLan6gWhLzUYpSPs8M6F2jaWAFpt5k75YnV6bqskt5SHkrhz5KJiz38u6C7jk2Z",
  "key23": "4bWSeTUHsozXjA6Ca9kmRay4a27BGiVvdXFFx3LZbP26hBQcGbLzp3PBdF1q9oUyYuuSrqvf4D35ZjK4iakespyr",
  "key24": "2YgYCLoW5uP148DhGpYDn7PgWUq2LGyAZzwQJrn12vGQDvvPr8DVexM8wdLUs3ws4C9F2dktkPpL2FGescJFm3NG",
  "key25": "3nGkheCFUBBrayAph8XjNh5jiWpsePScNoTYKKAiAUko9xbcUo6xaFzM6HKa4tn2QNV36BUPtjGe1MBLfdLiuBnr",
  "key26": "2DXkExiZgNp3ThCeiccWRBc8qfR1vJFrusGcGsriqRyfYig7TCjtrY8gLhHUALS728BY4K6KBrXXnFL9LiEi7F6S",
  "key27": "2gTy3RWKg3N4pEjwXXpFSyg74TPuuD2rdhAenUFn2dwGpoUonv6Yc1gN3bZX6KpsovBrxviMFJY3HmkVXVP35Xx8",
  "key28": "3KCEyoejtW4AQCF77YsKBtcVSFiHk8815CMpxqRz4Cct8S5rpaGZpPDpDe25TQR5Mk5tXnaNYuTA1NYMiNbT8q6Z",
  "key29": "LH98wzaNqjmXLM5wHquxd4S95Qm6uL8BF1dnQVxs4fVC6ujwAU6crVJHSQtQU67wcQxz2uJW8fYv6ycfurbZ1NK",
  "key30": "5f6PUc3NfrScoKvc11ouwavoREXY6yt5MeEaoo1mBvUBjyeGppFoSH9EsabhXNKLasiwJjxj9RWsoekzBk95oETx",
  "key31": "AWukwLKbjyB1NrHktJz7zLh4opSfy5d5e9LwvPD371mp2bqKu3WKBaK1j94epMowYAgeJbFKUU9dZycm3mZVgcb"
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
