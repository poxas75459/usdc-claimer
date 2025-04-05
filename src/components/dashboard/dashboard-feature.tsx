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
    "36FYiHFQFUaYLAc8EWQ4wjLuh62o4obqpS5BtQquvjjxKHmb3URpfxdyYURBArzMCeHwrri3rLLu7vBj4TW3pgGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ypoafsJ3o6M8kVt2ZdVetWVb1P4NMgfNPcYc4vQFhx8aB5aq6AReTjjXsoVGqu8z9ygiSkWQWuuCVy2ATH2uNsv",
  "key1": "tKE5hiJifMNxmFBhF4sSFd8gfctn7jXCnxuCqr9dGqrU81FPAwDJjj5RSStCuudZR8kKXCfR2yEbWyFc2zjCXM4",
  "key2": "rUufQLHzsbjQ84xsogDbBUZnBoDr5KfLRfNtdy9zymZRZYh3avTzBNjWrxrhGxwj6VSv8SMHz3jWYRKvkypEKcD",
  "key3": "43y4gqndutCGtkToqsaamvdY5KGeXJAqKAxtdFNSX7v7K39zodELLsEBKSLjdx9vQydkfaES11PRkafF3Nyg7My5",
  "key4": "2MpXjihaksXXALEk4MgjuGRK32TdCx4DqUKXnvV2ZmGE9ikVupRMHvHT4t286wSPrtSQi2QkfmrcegSoAX6Z9Rhn",
  "key5": "5edM4CMBAVNTGWDHZrPhLVcDAAmEkrJcwY7TgXKox4K47JX83oHpRPUbKT6D7NbdyGfmrao1A9wcGkJxMBdyMCL8",
  "key6": "3pV3eevsgcTF4P8uKo57HPCvP3XgUFTXdmjz57VMGif8gZdZQwvbbDwu4yhVquMWZAPqFgsndx7xzFWFb5SR4YNy",
  "key7": "2dzgNAZXHR8vurJsjtcTSoz2E61HBAwGUdCp5QTZrfbRh9WDXdHjPyoSXsQQxzUY3PhjcC6Bh6j3LzW8NMx4ac8F",
  "key8": "F79ckyPHsFTLiqm3vyM3RpqXvN4vUWkVhxhBMv9HPiLTn9M2pHTzYCukwfQLTb19g6cAN1Rqc9fzK3CwvF8m9SP",
  "key9": "3Kqzaitrq9g6cqqgviZDPwWEe79b1cQeMBEnBg9wKWGzjqhbB4pSZcRRxoPp5UN35TobWXmnnizzimntwHmP96fX",
  "key10": "WqfUdo15ufaS329vDNCYoM6c3AstcZznakj3dz5Wi9TrNiBqqBEse9ePfSVhkkgQHwdJBqDtHwPe5w59qye8qF4",
  "key11": "ihni8YGMmwdSKEp9xjpeg2wPzSXXWpa5vG4jV499E7uvqnsDDd7UDdyn6hDnxGJiKte7b1RxwScNjcjmjuaqd7Z",
  "key12": "3cN4zsR12eSE7BMs9YuiHasTbn8Ty9AYfSzzzi1rmU98C8ofzzxuPAqcHDfhhTvy7ZQLhoRPQdcci6dD6j989uS2",
  "key13": "5zfsQsVjPPBhy7fybktihWu4evyiisDbYL7jdf9qfmwHhHJHq9BXoRDWXgYFmLhzYqBTMQkAm8av5kWpChbZL9oq",
  "key14": "3MyQhrNBL6Jo25PaH1HEqkBq7ErwxJcR3d9jMj4Nvt1jwZgPQe4oxjgqetx8X43d81hyNNAVESNkaUqHZwaYUewo",
  "key15": "5LNDufG6LmqGh3mnvA9CpRaJXLjcAUe13zHU7A6TeZaP81zYyqHdkTqxsX4MCnXXBdR6D8tEVeto7Up4VeAsgk6H",
  "key16": "2cB32v9bzTXTUU23ZKo82ZWW6cCjTfh5nr5mPbs7WNKNU1fHz6tkDeH2nPSMpbBv2xYGi8VdcCuJUWP34S8ojHmW",
  "key17": "3Uwf7xXQibmSj7tpHp8PJBsuNKXotvrCVe49F7ReFrKUp5m23ZmxnwuFqxcoD9hn9yyxAhNyYJWLRcWZ1xBwZDnd",
  "key18": "G8RVNQXQRmB2xF1PHcSP4WcavyHYsYCUDdf1EaqGEeNThoT5asBoBomZ8doU6qraPSzRq1dK2fmyXGaNCCyGvdy",
  "key19": "4uu8J43JtzpBNVVTT4NNuMctbweTEdu5AG7QkVRE98kPEGAecUAXkQeYKV8Kxaf8HFfeBPCR9YgfQzwvWohQzh82",
  "key20": "49ARvhKhW1tRsrqxrvau2j96ga8QSN3roZ8xffsqRL7rDmSD8q7Xk5D9sQfAWWoCTpRQj753NsaCnfNVxc2NYMKK",
  "key21": "344Pw5WYnG24BLT4GfeixHapvch4bD7Pq3Xm8eUPHdroqdFxJJB8mQmds1XBE7f7J5sTJUSzcjNHGgypdP9ZzwqD",
  "key22": "5njVVUFiJQqFAkavtLipg6s4dhz8iFa1HHaum66mBV6h6E4LKTUgUN2LMMKv4tU5U68K3g7vfoc6omnxsdbD8zT8",
  "key23": "5P3MgZN15iQMpdtpMGtJeoEVnRZsMWzMxQFyxXAfzv8Fd7sRTLtczVPEUF4KdgHm5Tk6NyemA8x1SVkZbagMygtv",
  "key24": "3sKM2QZNzpxZiPkXfBHsBS9r1HNukhERuDjqhJ29f1WxSTeHmk62EdwE4MrVL9wCaaYt5RcW5gb7DABhBnuxJJ1s",
  "key25": "PGhZ3GgGDdnUJbStcZgLxgTBQHv7Zk1Vk4emh2jj59Df3AH7S8YqGUvqN3HQ8rN92usRY6fLoYmZbpgN2LZj5dH",
  "key26": "2CX5g44ipHNxs5tfHvsLhh9akzP9MShE6Hsk5YAxtBF3eqFt6KephpFmsbyM6h8xve2vhuotv49rQsgaETvw3Jcj",
  "key27": "2ssr8imNzahoCm18MeLr9H1TjjsSLD8jAPPfsak9E93S7f53WZspk5BR7LnyrUjxs28nRJhLXQHARg559GycEeNC",
  "key28": "3CPAPLJ6xfh3dUTSRi8D9oNpvrzsvoETqaop65cziGiRcp51jQuahayRkrd6uSVuBds8UXN43a9RShvyo8cj3oKQ",
  "key29": "37iZAyEfyCL1PZe8D2myBN535qFymsToHVEvgzVu2tf2kbmRiGJ3M8bNnzzvf5nRGyrRF4tdcjWGy8gfAAveXrj4",
  "key30": "2RfLWAhke6PsakgdkGGPeUtW4vQpxcQi6BbkMZD8skww7rMzjuukzXbEPhYZYjc8AiMFeUypmnqmv2tUBu2nG3S5",
  "key31": "46R3pLpsigoJhDFdGX1ZckQreP4gjEpe2gXguHi8hB7nWVWU1tX5iY94gJRXPnJANRxAm6jbyaihuWq29kBmr9kG",
  "key32": "22dD1AvQTiFPSQwLyDYkpyrwhuHVcnLmVCkarHXPGnEszST7KgB9iQ3AbX8j6osNNgxjJP7rk61MP6GYSMToijgX",
  "key33": "597HQ3c4UDxp4qK7oAWeV9CDQPa67X69rgfbSB5q9PfSE2MZ8QivmpqwgkBvQdg9tHYAwDdHPYnMS4GenJujqgtF"
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
