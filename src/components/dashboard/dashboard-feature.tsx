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
    "3nyM7QiX87hAK5gigwYAMuzScr6otBEr8mtz98ukfPeHnCETRNzbQvH8JgRehFS3cQ7wTTzDJZqX3em4XxAJTy4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45EKL4BB8RcXjw55ne89RjD35tt9jjXXy2Qsvkk89thaU4Ydts7hRxWv29pa1iWPCMSogV3rTDYkfmfmDoZ1rTXE",
  "key1": "42VbFqoafVSBL79n19o3C4yFz6uLw7Pen64pde8WdeQHRYngJ5gZFCK2PKJAur8nzZxfx4jLrwxmmqHbDYFrcrJa",
  "key2": "2nMRxk6EL4tZhD5crHv7kqCfAKpopQ48i8QUXGKVz5VLjiwm7DxfkrceUbYDmzgQEPZQAGeMJw9paGiznUYhBP2r",
  "key3": "HiuTb2BaN2Qcd1oSkXBQqru9t19iX1uat3fPvezG3s4LFVCZfJ2rALiZ1xVAicAGHHa82oqK4CKwRJvKn6ZGdXT",
  "key4": "3uHtndbbfesNeHRk4ZMJoh3EK1JPy47ATZs8ANjLeFtKX8Fc87oP9RTJGjH9jxfHWe2oGDJL6EBEgXV3jXrnV2bZ",
  "key5": "9T5Qy3EZ5vALS3vvDrejoP3RP7zRxwzmuHDune3S8wbhehumPpSUJDp14cpgYFEKxGNLUxhVSnauaSLC7veN4rA",
  "key6": "vHhPRvNQVWDBAkdUwdQVNMLFKfoyfZnzEXwoeCFejkY85kPv7FY9G8XBTkdnpX9CNt3vZv2WWmXz53W6K1QcY9x",
  "key7": "jo9i2z2Z2U1CVP31S4iaTnpHC4rYRXQ6hLLe2qd2pA12DfhVffDUYtawqp8Z47JGgAV5mH51u8M6BLeyCHC2mfW",
  "key8": "5uLLpxdy4nj8fhZZNA9ackCmYWZnqNpbnSvW36ektXRn9n3eWToaY8fSTpNex5NpQ2qpaQTVCtFvsJWNuiZmsfMc",
  "key9": "5v4qt4P7ZvguMCV7ouwatZB951vPT2DMG8mf1hXTYnfQXxkRpF9E5MGoxyL5Lcv9DxoW9kjSwjsMZ9BGQAQDPWdh",
  "key10": "3xDptMe6STEDcVatgTx4QuARhAtraA3NUa6DzRwbTvmvf8PfcZRjMoPrqsaAG7c5J6tuZes7BakwgJWrdT3xCYaz",
  "key11": "3pzvoqjZ6S5nvuzkRo4SQxqdyVtszxPZoSnsuGfrCWN6yBuGKyrY98vZGANEZPLJkLr4k9vjQcXPbQCAcVMgUhRa",
  "key12": "5gEZkqyGRBcJFxYNnmPftSUYnH3oiwD13pwPE9hPFX9bA29JnNXtNfcGL8APvAV9Vi6had83gxq4usoAoMGgT6VN",
  "key13": "N8NevmsXr7VT2kUicpcMaV8Jo2734qxTAxrqpt6UHv1EKSvCy6XWuFfuaCWTTvtcHRtEsjRRsfUYBb3co6HED1b",
  "key14": "4FULqDCRb3ubfDGZLcsyCEVe4JJ3P6hswASVwtJ1cwRUN3Lds1EWnuMsB4oq2d1y76DkYRy1Wx5tFTNS6mXME2Wc",
  "key15": "643Di6JvXsyTntBP48LjVktkRSULgdTfSmPLjN6hwgRm3XpUSRmDj7MShhuGto27uCroYZCjh2rX13cmK2RgZ2eT",
  "key16": "2braYgWt8dJr8X6hWtE8VbKVa379rpLbD6C4Tu38G6BerRaGjFPPu8KNKZdi5XkogG3RYX7EVW7im2FVLfbmpik4",
  "key17": "5i9NUxqvPEZczKvrFAddh8VdumiV5yAfUyRaLxX9tk1XYwpEicrwezAdRdJDEupdSg9ryqHYbiY7KgAa6xLBxxeo",
  "key18": "2yrMW63VqwXWtDBxkDbFJkGXkqVuKyDUmUu4SuXXefYsAkrxnqddE5ZzVNKRtP9UwgbUdu9C3Ev4ZvAuSgj5TEcT",
  "key19": "3XsqgrUVHbTfpDZ1bxR4yLD8fJs7SmB9tZYCU35S7dqAKuEromgRHU6YRHa4opRbBU5nZyyMfi136M48KyEaU26w",
  "key20": "4MwZ73pxvPE3iP1mFMbkpikgsCnL2a6bZbqjegT9BgwNknPZ7qL1HNtGKErRMK4vwQrBWHZcDty7M1sXDn91UPMC",
  "key21": "CwjXWn17qwpQSj1VLmrzcuazmGQsDRfXLJydCjizVkcJXDNwGaSR1twBhtcdCF66gSD47m6WQwL1BgAnDeXTx8j",
  "key22": "35T4BULsuGKRgndcfhUZUyRe4MNWhZV6xR5zcvsjHV8aCQVGhVXgwJwm6jUceZjNWpajPWCwxdhEN3T1SzHQQAJc",
  "key23": "cdhwK1tq5qcg1MAX2RvD4gBgLL2g3QYh29xqHm6DyhMEofUeoiBuCQJF6QLyfdUdUnUpUncxwvuhSZyfvFFoGZk",
  "key24": "3Rw5bM414hzvvrpqpGLq6Ka2yuTmnUJujsiSvAUJMoZWCrGAfXZsbdhtePvAK6vA3jHAk4LFzBXK2xA3UotrGsU3",
  "key25": "5Yh7yoAzWA8SUB325Uk4kiBhtu8uLrbmu5yTUR4vHkb2jo6c8GKfSDtSzZmkv98vQyWhSjwvJB4CP1jojU12mhVD",
  "key26": "5kbG8ntvrebHChtFd8L2kLtyJYa12kT6kid5FUwKgepHMv8ry3wdLvrbEj4auD19UddCtegSvu29Ao6jD6f7XSh2",
  "key27": "2GE6i5EDddput11KFFLhvC9nKUZtohYsyafmGyybRL5xe4Xzq25Ft85QFcVfA9U6h9AGgAXRM19KJ89U3ST2Astu",
  "key28": "5gXLzBdZkyfY9Qfzfdc9mEsXPR7BJEisCHJZAv8Tkibxa2tupoAC66ocE8Y9U4xiW9aZxd1B1KS12fVWx3sUw7Rv",
  "key29": "76bNGKMUN2iY3CTNjin5bPRZSqRNCdkNXpgNcfAND4ke3UN2oe8syS5hiUSGsNef89h6Ts4JjigQHQKUr2sR6cm",
  "key30": "2oaCNKduMw6RrQjNGWcegqYBcRDP34ZhdVwzk8AwbdekUhwKgZhjM5cGhTWKvEEfmrt2pdJZL9erYxcn6mXDCcRY",
  "key31": "3VQATrANA6Ss4ja9bH4Q4XiRGv1E74nbbsYNCoTPiLkTgF3Lsv8LuzzZgQPo2JeV3cByCbRZm2sm4x8BS4VV933K",
  "key32": "4ZtGNiUUEYGxYMqYgUMMHpYkM8Xhdt8QdbkXCjcLLRH7SfGYEiVYXVUL84Kqy6kFyn2kfdW5qjC46rjJkQWV1Nx3",
  "key33": "2r4fRgjAo1bQEVYQ5XhHhwdv6ELMD9uZmwDbt1rLtAUHrCjWTXarZmamXUaHJtcDoJhEeFN9v2uHCn3SPyQ9Ffum",
  "key34": "3ebhkbCjBG7kqxGp46KCnW4b9uGiSHg5eKbUWv5E2hnC6MXuiqP6rzWP1CJRdGcSsCEKPz47FTBvVViqwBdKX169",
  "key35": "2tSh7K1fVs7ncm5ZbUW5G4xN9WKR65JgzSyuzA5xaroTc1fGxfug4ZftjWJmzrPogb1drEyZgVkwxU5FoDPtoRqT"
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
