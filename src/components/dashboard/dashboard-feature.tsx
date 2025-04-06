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
    "4D5Hn1PVJiHhxtmr3VWWnLyU8pYzNcUTqXRUjxZ7yY9YPCku6KpVY5M6b8UkFy4DGVuwKJpp269m96nSKEKARFSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qSvoT2uYhRK9YpHv4WyEnw8DTwmTYksyBq7LfmPi2GFdXVVhFKREF9dBjF6AaKaQxQwvs6pqZKvYFiA4tZRZ2Xg",
  "key1": "bAppKunc8CuHL1KDEdE7HjQucnEBst4cpTiLdNw5NbfWTsvR6ZkbogqPvZP3N9JwYwoXmYZQMGHg1zWr4waMZku",
  "key2": "57mtAnLSTkNTTk1uNcQQYTDzgrE4gnW8esMHHEhsd18GFv7eEJaXvSN6twJDWdb5KgstrXYDm67FKWqL716vvjjQ",
  "key3": "3XEjhux9GqP9azKN9WovneS1oLWdV2oWyikkQJYzk4Fn1gyaMw1MUDCncNvnoRfSAcAMynmZUABeteCLFuK2BUGn",
  "key4": "2zQ2vcAL1kx3Fxko8v3RbBVZarmtQmq46hGc7pQm8YFynMwqyU3G6VdmRngV3KbYsv3eV5TfNbJr3KXRh3hSdD5P",
  "key5": "1R2rkokyUYCbcPP5d6eeXuRnmMXPt79HjKiYFBNHhP2ijL9yb4f5WwH9u3tvNW6iEbchw3EkoLvwjaSoezSEbfB",
  "key6": "nLHT76VffwL5BubW9ertLX8DH2TcnLu6vJ3eYjAa1gu2x7UMt3cgQrDtR1pU5tLCS4ddbNx9BN1qBAFx1SUnPPu",
  "key7": "5XUUawmtzueCViQJ5JkTjTFjZGvg2M7Sddz5ikWSUx7Ci9TgN7BMoQp7iTE8uVM5jr9y8HemwLH5D6q4XgqGXc2S",
  "key8": "2VqgKxZVH1EDPry7xKSsEXbyJGZEvu6WjqaoJruQwXMKjScWVtbgin2ckZXZGiHvg6XF9J3pC8HrFT8arVr7AtDB",
  "key9": "5UfAb9FEXkCj7LZ3XQX3e9T2LnaaCiTxNQhuiWWGuNgbUaLozQoq1fVqrYdH9Z7BvQZup9tcAWntByh7qycJoc8a",
  "key10": "64uK3xgxzcHqLgQ4Kf4NmCyfBdhm5nJ3mAAc9t1QkMhQRdsm5xX8Ku8ZcGF5QmjZ6G5VXhELRxb4pnsQky1iJ3U9",
  "key11": "VkhZGBkJEG4cjd9AZ6HvyqUkLaBjzNcPj2QPiM463Tvf5z8wkJWh2pLfdwJiiUmiQjWhS3XTQEgkBPucQNrH6kq",
  "key12": "4aaSoCkzso3fKjzoNcW7TBSyDT8vZjJKWMN6HBfe4EhAU4Hc5Qd4jtu1CD6JdamQeqG4TUPoZt6mgj5GBLopPCuV",
  "key13": "3bSFbiHj6CTT3f1q54gaixR9yxPhfDWJCDvMEZpto2JJfaHzrYQg9u5zmj12ECTXVshfC2dVet7raziES3N61mvi",
  "key14": "52nnLNVshASbQQDqDJx3QdaBjEh3zVEVWbsJ8qyS4G6GywNLn6z4yyMbTJB5GBZXUNFqeyBu6zhdNdDTNvHs7bAq",
  "key15": "2ya9HqD3VyeCxUudkuFuBV6udUoF9yNUSpc7mwsWtmaQLGkwPxgoxTCx6NB4BGqieqGXrA4Qnex9maHwXux6CSYS",
  "key16": "5e5Fc2ALf4287wxb92ALPG8aEqAkWkE9WKM6cZAD6TScETxQzZ3Z1n7T9NXwRRyUuqgmtfsZqUq73uBwiaxHpRWe",
  "key17": "4RE7fwUFvWxBWJAAhUDRDgXyRbus7JkqnRw65PXcNn9JgNrYhR5uRk3QFdiGk2NmQpdrAgjPgmfMaX8KFdvhaPCR",
  "key18": "3NUm1gWyJicohFfHDMjJcwrjUgWuEskQYBzcKVMZXiBchZZKtcZs3RsSdMkDmPmuczMo2brPRxg6eVfPy5yQU3Ha",
  "key19": "22aAAbV3zdGujig6vydfXqM8V1C9fjCHyWyDq1FKKMR5rvAcZACut85jw1ptAEJWGz9VFeNjsbZtvpXQkdeVYc3k",
  "key20": "3TSoN3nQtpLa1nLEvLq9ZFtM39vLc25nFdeTKXJE2NqBwr9TVx8xgzdcJHRt4A2ozqGYZ1K11h5CYUTijEsZHH7p",
  "key21": "3mWfRxEsovaTRhZR1VAPrthmSStft4pACGooDQ6CyizDim7qzTacdQvg2tDrApcQtu7JudYzhe31kJFGHQijqrnE",
  "key22": "2FVbCpNAg9Ts5WPsM8FFMs1ryBAxdi8wjWbgZPfXrrNhuygKYidomFFShnQVwqo1e8aJRhxepwpWHuwz6duE4dbu",
  "key23": "4dSXTBnR2YmDjstDDqSmZ5rK5YiHhjdyJHa6LTZgGf2G9NpPymvgKgU7DHPoyBsu3Jt1oraqp6y1hMCMoRWxGw6Q",
  "key24": "5Bor17HM5tj46VkiarMKUcti8w1ejTDuWCm8afRkWY8ztgpGnJAQcYpjvduFEQp3d9y4XKKvESyLR9Rjydwz9aKH",
  "key25": "5euikrgBF9eSCwpM88kyRbdkuajVkcgxnp2Ecfh8F1TxRzCyPSqbUdqAqWJuMknayjiZWjfoR3TPW5Laosywrpy8",
  "key26": "23xFBwG3q34364f1NHiksEVt3mcHXyDDkCGC5JopuvAJbXoK9XbrzyPK5o7wvLiD4hHsopF4o1V8A3r5kGxFuhfC",
  "key27": "22S9BX2gQn61DQMrA6owtbHrL4zr7WvrCEMcnQhFCPGT8KuCx9JveYq34CFtW1ezF3NqzoG7YSYLSS4tW8dbQyZY"
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
