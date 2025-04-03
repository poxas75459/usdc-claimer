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
    "3wRpxGAawJsB7RyDmXc6qLRYKFWhxBnMkyte5qHtbun7ZdXnB6uaV8pZFv56pLFnGZtVMJs8tHAqrCDpi143ivX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44fRuvQwxMSLw3DYvonL9dUHC2kQZcwnaqmx2Dkw1jWJJmUYCs2aW1HukYdCmZ3dssTq97UXeYa645ykkjHBuWrf",
  "key1": "4hafCC7vXpwHFX3v3RkgTBM9VYusXmEYgT1uL1dDHceAzPeu5sk2giHiK9n1XfkJ9fuy9zTcyGh9ScAaKXhgFWwZ",
  "key2": "4Xw6SPoGiucTckQieatfB8TwFyp2gvFLSZ3YmhFZxcpzncSYQRsw1QJfPZFW4XZgKZeTtbTsfvbsqepmX5QDVMcR",
  "key3": "ZZvt3oMHCtATW8VcCfh2hRQRBqiUL94zX6ebErN3F6QrFNFactNHmux56hhyexqxGnniwhoDz2F1ouiPPZxFbSF",
  "key4": "3sKYV2YXaboT1kbGnWAtSAupKZ3KsMqzg5adjtfcHwwMrvBvQjtAgxG5c8LtmbxoYUCz1iu2Kfbthi65gWdzBquH",
  "key5": "5kKZ1YvbUMCXJnjbu8iHWbsPg6R7ZEwvpKs77hVmPy7uhYbujBLWL4jEZw5kAkRvS7KetsJKi1N3Gwq1JKW5oKWR",
  "key6": "5gbjLFESpJo6EjLKukGubHbDEEw7UXvapW7TezYDU9Kj6G5kef5HYiUDu1TgodSDcBX9mBAgUqRebYQZS7ot4zbL",
  "key7": "3zc5AshhJGuF3XFwpfXNZVEKZpM85oX59witrV8SQacUbyq8oqvWDUEkBMBRSiJFvc8CUehvKa8GPBDYVDNqdNdx",
  "key8": "v17LQxEj29j1V4FEiLEQQX7N3Knz9Sth1vub2hQMsVzZxYaWQUFUNmqWq1Dz5Jv9VYJ3JBKuQZxKmXkm4Zh5LLh",
  "key9": "33z3iDfXh8RdeMLTxrk7KvgLXp7SykpCWAbJQY62o6MmeKbQpavSqf8w3cfVmY7ogNHMvgTi2uPtybjosfhTtrdL",
  "key10": "3fHDBxNEHXi2LAnAKqjTomLcjnmyjmdcKU2WZd5Pvu5T5UUHwe3QEbGFGXx22zG3AYwP6m3ePthrJvUFzR8KH9S",
  "key11": "j7Wv8bnzVmCknVdsZkYkqDuAA6qiLaCPT38RyGGJLGLVUTYeQeeg3uVWZcFzHSGFDyoBQpLrA9jE67E96GP4gRm",
  "key12": "5yXAhzaYZoCjM3i4jRNUyx7gbLT8HGPtpH3Ja1NUyM5vNGiQdERmcyrtbdJr1cc9vHHLBAFDs3PqYWamQT18w1Rs",
  "key13": "4N49b8rb7Y31aZtL8jeuecZ5KZc3uVuXwUBNToHGo1ZyDQNk726CRGzTmYSyj7LM4FXZSd51WxqJNJZLtEEHHSzq",
  "key14": "4n3uro17hZ1UdKMD8Cn8a2kzWwgXG1ybqrbws1XGmvG3fp5PHB6WFFVTySix9F7EfGZ524nybQvzpC7mg3NUN1aq",
  "key15": "4qLk2iRoHCorvqCSnRBkaBix8xwPUhmDeAmgbmHDzpNzDsd24HeXun8ijVanZR9s2C5BeCkj22yJfP4yxUkjHnKP",
  "key16": "67UQYWhQXbmHZifSKRYDqUhWByru3dQkH2yWvMSXWQnYJozQWsAPAMJi9xJb84SM2yHHVT5eV9Xkx9bjp2iRz69f",
  "key17": "49qPfGVkVdheCBunen1TggU9BNRM32xJ1ovugfTf9BjodtkMyDcuBGTVNR781GpBwq2xz8aNiDu9Phc9PjxxWD55",
  "key18": "biGNft2JCbX6a1qZ7DikmgxkhEe9PxCxkQj1i9DN2UVQMu31omEV8mt5BkrcoNffHh7QJxgQE3jXRoYPhL96jN5",
  "key19": "4qNBTa88ejYPRYbtR4Hf4kCF4uNAEqjgsFEQw5y4EYdmmuvbybGZynvF8twe3SXLEYAZDGHonCeUjq58rZUdrnkL",
  "key20": "39vku66iVfiFsBfZs3Bbrz3mqbojUz38LxauBUpvqyqz5MUD6yhgbcuUhUDiCHmLYxzBDkSu5dpjjVx6NH124gPK",
  "key21": "2FxtFj5XcJwxCcYujFYKGU1YdBmnvj4NS4Er8AwhKwhvnBNNbP2M4wW7so9cvJrqwqvmAafaK3C6B3G58Z1boPmQ",
  "key22": "3KZujS8QUhcdDDkdbPPU9kdB9hpQ4yK8CMZKcs4wzwkYJhBK9eJjJsgFpX9NpYt6pxurv4dMqRDcqR1j8W2LLKNZ",
  "key23": "45C9pmsJ55HdQRtwSkh4eNpvdLY2F4Cov5sQGTmT9wuLW46PisaVcqCk4nAbDapJAAXoaj4ENbBtLk358CuJe8CZ",
  "key24": "2G253yRMBA12fek44f5XYzTA9sReuq54bG47v49MbsYTd5rtJ2uN3URqsHV35TmiQQmDdMFZh4iEGYMaBd66o8qZ",
  "key25": "5SXhSNqaHeyvYT83yc4eYjVtf27re4EoWfzAUrSJvE8dJZcwDLVi28sENkdnzENa4BhLJbJCHbXcZTJxYGETaf23",
  "key26": "5yDzibBNz6sBW19RoWDhF3e7ze9sYdN7Miwo5f8SQfctNYLUVqKX9TQbanH7Eqjk2GkWZo3EjGmhUdEfCo9WGrt1",
  "key27": "5fn6PYJs9URfUpCohGGjBigtRFgixRfvsgSWDcoUm3GnzuojCGJTFe6F5xb8WNenPuko8k9sznvPgQmDNXxBtu3n",
  "key28": "zHsRtBV6f2fRFsqGvKZCLqLKGnMXUQF39KBNeJ49y3NpJsTfWyJDd3vd8tXHbWGn5F4DywW73qwkH4D7iRP4ocK",
  "key29": "2yoQEPCEhFjDm8D5FhQrNc3KKJXPBZoniuPdDpMSqP9UESD27GfQSKwpSc9bXxUChQKykbCo4FhuoD5euayHcwzw",
  "key30": "2br8HP3CTY1F77b5EvqjnWPoBnt9SKovmTVvMRmaUxjLWLAFpPGA3S4SLYS5gywJLW6eBRwTz9sAeHRT1ghPoYCE",
  "key31": "427Qsq2E68NgUqdvT2CvcqQKPvXARhZfhAXjcEUgZj3TznJ9knnqgXnHVEGBt3LFR7Fyiv6ntVNmAbvCysmh72EF",
  "key32": "Zo5KRgWkjaUQHZZMJn8EF9iwyVh2wtKQobtF7r9iDDKMmUE9agDcZYWJjCEXK2PUwVZUAPSxYtAFcqypgwwDopV",
  "key33": "43LHfGNKd2D5ssJZruSo6KfMvRXkpyTbHsCfVXo6rJGCDPX1UY29AoZuoPZ8Md1oFZxygtZNatCuzftXb997GzAb",
  "key34": "YJHTznyjXE8jweE7ZMCFJi4u8eh9g8qgLC49ygQNEugAJbrqLx27JE9f9hZ1Gmijkrr7wMUmdqumx2rtVz1WixJ",
  "key35": "5LNSpQZvZ2M34CH6T5E4XcS6CTjUQvcYFQSA8VeuBEDPfhLbSNWnmaxukVHiivBoKEC4QDsEzF3c2qfSCH7L1Kk7",
  "key36": "2srC33khKHSobUehs9hybZCnpTrvagdRz7mnxvvLEAfJZ7nSerxGTUinCs4fD1RhPLTG1aJfBDok5HihaSin3JRr",
  "key37": "WzzYpRmzV4FWMPezMnZc4CpJRhi42r387ffAaTyuMbnKj4QLZSsfChjA23DT4xSartD5DS2UCMXkJETzgJzRv6A",
  "key38": "63DcE3vBzXHYhvpuvxCw5y6tnM3AQpLsLbvu5kEsLkMp9RR2GR2BUkMoGi3CuHwLqcqVAVcVBe71Ap2v5gwTZ9Sw",
  "key39": "4APeidc59bwxp7DLk2WsHEXwC2DyEvn2SGJKXZm799nhhRxdzVreX9NQp5gEU3idjWyqaL56umShfz66xDyMthxu",
  "key40": "4FPPWvsF6Hf6oDp93hj6Ys2EThftKqeJVu1LrptfPT79G4BRNNYrh6ZpLYJFe5x6v8ch1rU1rBHmgsqYyLSTAmNv",
  "key41": "4Z73RYJn8xj6vGNF6QspZcGLLKPsdF9sXguF6LG2XBVoxdWnjZouFHPFyJEdzxZQ5MA1bMMXAyc1QbJc83nffwrw"
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
