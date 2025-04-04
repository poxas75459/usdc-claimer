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
    "53zF2JuQdSwc1gaqyaBAwY6TQzyf5gWnoTkmb1HyXP18HuBJNjAkrCxEkDd4XrRFa3NsPi2TnapVXEpRRbtJaQfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mKDomC79QEooXgAnnDW6pt7ynpxjoRH5z1s3WrH2WY4MMrgzL2ogQm7aChDWmqWf14bc9DeruHZG7pQ21bmFJBc",
  "key1": "AwD5TSjRJtQPrm8fm7ByXVVWyc6hxeaYdPJ7wP5Qjx1CSxX2qQZCpQSa3uyPAwrZPK4HNX3MsdX3iy5nJ3gFUzi",
  "key2": "2LT7qyHystezcmzJjr5M2fBhLKSQNp19RnXPu2cfCsDkv6SdVYfu9imxYjA3URLToa8kCsv2f4Us3ZQyt1wZyLfh",
  "key3": "j8bL75kWJPrQt8PR5VVo64RdC13vQoMcCF8xqSHujCfZLfY6pzAaTEMYKyU1C7gyJadmWqQb4RohhraEgqat2Nj",
  "key4": "JMs1ekKWKmRtvb65avkE7Jz4PvnbE7gpjgcWnrCdqDm3kCkfMCycx12mDEdj8mckT9Dzgiy82DbiGsVHpdWzwvF",
  "key5": "2C7pB1VgNQNBKEaELYJtwrd2Dr3BV6oXmJsh1JzzsbqTevyhbifNttrwssaJRfmfCRN5u1AGvc3PfxtUnYTE5VSr",
  "key6": "4dBE9DMA1r5druxmDPhG7JfwRwVBWb66Nxd9t7FdgQDEq9jdt6HksWA5aJCEi3NtoCa6EGJQCDkC3cxTK4w8xiSL",
  "key7": "66XkUzYoSPTAeCECBRYZRNHb1DWkYE8woeDetgnprufmGWRFjP6vi14ihtnnFvN2mnFzN5EXzsb45Wz1qoHB7gCk",
  "key8": "35spi2dX8MmTXRzXdywPRhrRRQ1wtbkQ72wmf4BitS4EVxaLNoFXAatY5KV8E6EmKYbkds6xfbq9xpVPJHesAGRA",
  "key9": "3FFHHNTwUWAS23asYQUvtEGvNRzP8RZJzXujPF7WrPp6RsCT4UpYC5oKWejk1L4fPLT3iBbKXdGEH6sxZQQB8KWA",
  "key10": "43AMkbo6LpSgcNu4HjSSaFQWX4Y5pd31wA6CW6NsCZwvGuksSTGGTLFPSQU4HHrUBe8jMhgr9UhTxkmY15pVDWo4",
  "key11": "2eD477ATE84kvgYUJLLFGL62KFdFNYRwVu9GpQhf16mxo3FY4sFFYtakHi5qZe9oud9VAhjtHdQwHuzLVe9k86jQ",
  "key12": "3h8bgqLFmG6LoViVnan85HugtkNEbHurzSnr66DdQSVFVXbzZ2gCcb8qRoyv6LhVQtSTRY25cZySN4WAwxrQR1H1",
  "key13": "t8WSgjjFt6JfgdyyCzPAu9vjgrFWaKEN5uJFEZ2HWmVmTkr4fqBMXensL7TSdu87pRGwrx6sgQJCqNHLXqmPdkw",
  "key14": "5FVMwZuWreaofAioUp4vZFkJVUgXTU3dfDWVrJ35TdiS9PinEuvL3cutyMr7xujiEaYgj58Lhf1KNAubDYSayFw4",
  "key15": "2XFuK5LQKhmNLyHVwq56EbhsViidyBMQsKZJ9ykRCoCmEhGqn5jGFav9s93Wz9PLmyUUXnmKCbCRghjM3A8Jux47",
  "key16": "4fcePdDw9J6Q2fiGEfMTqwbcKDbMZNjrCXE1NzTAbjroXgb4zM2LcQjzqdQraCYxF1r6uLyNmHcJposFGzrzdpRz",
  "key17": "5e2y2Gp4T5zMNQNsY7t9paga1BcDpTNiQqShYYZEmdQtzpRJwbK4VT58dK7qiU5VVgqemQernPSjMA8S3o6oifmr",
  "key18": "2QvkET3wtv4phbJDYF7ezCWHYVtqpYVmLXjJThMTfwPvcQaFLe92smFAw7vn2CrCrfRxgkxWYvUR1nAngooy7c2m",
  "key19": "3GY6ek9bF5ZnycQkqDxxUXY5oR4PwQG4jkrfDD4dMJE4vU2Sv8HxLEhrjb4BJFRMGHrbjYvQ8ZH2bPUoVMjRvmu1",
  "key20": "5btZCiE4MyehcRdYBeYG1QPCHn7gsqUHrUJnFVwPE2d3KbntkWHFqYh2f6VKH6wyHE2dKVf9xLfTc4Ss2sAuM694",
  "key21": "2kffdus4hsXsHaRF6YYgqLxbWgVWkrsWGgnvwSg6fLvCqjvCrhSWQE6Rz9Zb8SmtvxGK9iaTEzPHXRo4PQhkZkod",
  "key22": "4sk2KzxUxWCfRXaeFGs3WEXLqnGF2gRqRnzgvKmKvcqeStDeHbinwMTdvnBezVVVydT1eoM8RrJxYURb4J4h6EQV",
  "key23": "2MAwUyYwA6DXhkP2Ecqo73Jm8EeSbbGsA2M6uqWAYBFjeFaGjVWfd3e96gNKKKzDAVnNzzZXEGSmenQ8xKr2WjGj",
  "key24": "L5BwMDHHFHt4iRScgevgjYopVxkYvfDHoRFrSeTkvzj4C2HnEPeZWMUxezcj9tVvXzG2SiBmVxDZG8xv7aK6FzQ",
  "key25": "51J2TmrWTxh7EEAciD5rmjHzENDfceT522ik1LgyiH49L1H6Wayvu4ECyrTjPq2pM2ez7zeetG6tT75mfA73hLsn",
  "key26": "3r9B9PKW1s5exMzjwS8vHPwjgeaEYvwKe5TjrPZkcfCKxjBfcQzHqi4W1EWzEe9txMsutYxQWWTK5EftgKnM8CRa",
  "key27": "2wf3z3nEPDfZnNyjvLionn1SeSJubXimFT2MHKRAiAj5oLq3DFRw8jzEGjmUbxz95cssAWMgV3GG4DgYk1NbW2hW",
  "key28": "3eEQg3RBdm1DXe79yCBUREg1HhzYgBUQDbdPnWJLSh8xMXG7VT1YK2nYrTLw8tAYg2Qjm27TBRVP1kdemh79C7r1",
  "key29": "5EGa1c9Wwm12rUWu9kFR1ePbtnLJgjWV7sAABzN6qxPZeqMMELcdhYbpj3i3fuZEcSK3Ckgh8tfW3a2TWadeFnRm",
  "key30": "4YXscw9xK4ZU7HTbx8JEBnLn8nBoyjacSq9pzbmqdbykT8ZrpJJLpgJdhzHhTjFcK7B6k1aGkA1CHMy4Nh97uJPF",
  "key31": "3dZ6J9rurJbmVCBV72UwRoPBCXQZ4JSSjVufeDR1WpDt8S61q6stfDQDhvHD1iYHiukY1CbScm4Sg5DMxBgWwH7d",
  "key32": "3iRK4fJxLqvjSYTtw8HRz4yhyQPUUPNFwGRURKuqnp84MB7jTNPWbxEzLMh1aBxzPNet5LRJxjBCcMjyB5oaNoeH",
  "key33": "3W3jAxndp2R8oGNRatThdtyY2pRf7ZFz3wNFdUXGnMzn6W6RwYFnwp3DxqYTGkY4J9ZzFZVL87m1aA1ndHMqBe49",
  "key34": "2qFY33cYJL9Zp9MhWwqw47FR7FF3FmZx4oiNLgLQCjoFZPE9ww84uQLE6A5KdEmcjhWUmmXd2HqzwP6n821V42Bv",
  "key35": "h1eFyqNhBcdxL7wNzi4RwjqpRPDBiQutS42unUX3UPA1jwL2TFE4CQLZ43Yj655LZTKgpB3BkNZQhdVSaXCJWej",
  "key36": "5C2bMZfHEoJTns7oaY8sdjdKrjnVHU9HXVez3BuCNPFCALNLEDptkbuU8fYgFS43uiSxG5VsfraJKkzMFdWQyx66",
  "key37": "3qJRxR9yTFKHEeYwpKZYm8ME6D62SViF4KXM73JJi9jjCJigtT8wfZtTwYPUR3tdJef3bXdAvkUgyVoAk9LFqyye",
  "key38": "5eoiFoVkX9akqAaKv3UA5JnCv8tVHo2XCnCYfPT4w2cFqK74BexjkwnoAWR9iQFqEKAtwcQ5BMNFQyyCpa8G7Syv",
  "key39": "5SUeE5ExF2XfYadwT1b6LwJ8LDBjCToe7rb7TWaP5XTGDxVttwc79rqnr5AT36tDedPnNn5R3zGNpqCh8sChWXBm"
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
