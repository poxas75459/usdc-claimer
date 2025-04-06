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
    "NyarcJjRSRTRc9FnuqUodtqRZzFAD9sccVBQFksm67zrrvRMcBvT8Z75J4S7PDptDsiyw7iFiDGLmHD3iTfeSUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BcqFNiuvWhCQDbwcLYXYozWZbo6u9N3GWhYjzECFV5QLfxQ28MuDygE5Had3XEAowuZnw8mwqXpTwVyc8PaPybU",
  "key1": "4LJa1v2zZ7i2vcqyCx3Ujm24kCvcSuzJtG6ctQLw5XUMQXjpADBGYjXrtddjBtCUtUhmVj6x2UUsdx6pTjpXmZrg",
  "key2": "4ukrz9LBhzVeKbKaUX3MV3yy4EFqFN8ERnfU97pTv4zD4gzVn3hZG2cJ3ePmBunX2E2q3g7zZncjAdybxABqRNMG",
  "key3": "5mNdsoFp4a1EKJ77PVmu2XwRzyeY42iyGXbUZE31jcwafzT9LCJL4FVM5msDmujfd12zujj8KXYffQmxMLJPbybe",
  "key4": "CEwHszXhEypxTaNqrazbBp6JJnfBC8C4AnzK6UNi7XESRw4CkNUqYQ4RxNq3QSDSo9sEBihHQNNWsW4zE1uKVFD",
  "key5": "3YYxmrveX1Gdhz3JFNTEWXVu8yS7VVuyko2ATcUWzfQnihPGyXUndfshJFe2QiZHVyzdaxQK4sS9SmjYYiw9R2F2",
  "key6": "5RapkpEdJQouutM7iD9hpVZASFGt5kUpqwHXou8Bm7yWpf1yeAFzUTN1EcYzvhuahyY2CwNLE8E9shsCR473my6s",
  "key7": "5WSAxwmjHnC7Ef3StZ8wTWueMjgkByXGj6Y7bZwgQ2FU2Hj3vvyHVpMeHP95wzzFkMriiGt7MSCmgm8hGFGZgQjE",
  "key8": "36h5DmygsW2AEhtWrbtHJJUHExVtCSBWsMTabL5HGH6yCFfuN6mVNwfmJvjjyxJgTSzdDcUxf5aQ2Deb6Sg4GvHQ",
  "key9": "5WTW1cpRF6e87ZxgqJRpFnqCL6t6DFPt2j7m5nUmiMR3rchUEkZwz4MNV2NNm9HcZhwuMiDDF2QvaFQ54mDSz6QN",
  "key10": "2zep8b8EkwQvLYFjKet2BdyXJXs5xGXTGu76LyUA2wu1rHGiGBQtEn82SfZKKxa3ZKtT44Govqiksuf5e3ksUKfe",
  "key11": "AgiqcKac1qU6ZdxRQscUpXGAT72V7tzVaWLRpnALWQjFLMJ6oGQT3udozhKNAMFmP5Tx4NjacNgxxj5tCQJ8W2F",
  "key12": "31dEiJMCUosH33iTwDGHcFSJZrvGs779dq3bQK87UYF1Eb2D1aBVmtV7i5gR9MzCxd1Ht95sESgyfpyDsYwNwPVE",
  "key13": "3eSN39NV3Nj1RXcbvpxSxk6UaTRJRg9bqkW1neYPSxEapB1MhHS3iy1Na9W8jDJweGiX6moDZduEpo7wkacv85Ko",
  "key14": "23wQz2HSA6AFyYHZmDXH8cDjyyHw2DJf8iXA84UZsNXZDN3g1131Zayfs9f1FQiAULL3T2dxanzoVqUzVnC38kq4",
  "key15": "L7LjoQrgRyUgjxRnT57BxumDTPFxPCB7MajWVKXe5s9oHNPTfSMnkmSYxwJNGRU8tsj4bT5g8qJneyAEHYkRaaj",
  "key16": "xc7gWtXuEgEH3KerpBV2A9GscYUi5JAaaQW2aFxM8xDhHN1QS45zXUGY9jJHmcutMx9CHPvEjzbjXZLDiuBdpFz",
  "key17": "3UCg1Yo6uHCvNk76FmvHzSFzJHEMAoyCXddopxnE4QwJQgG4A9v95X6Yj6R3ZWBCwreCjdBaEga2cay5qUd9DLVa",
  "key18": "9dLHT256ymx61ogXBX7gMxLESnFpNZEtBp7Mf2iKfYJG8ji5n4sm8VPpeZWTyib3JLXsVki6ztcAsf63qJ94Bfe",
  "key19": "5TWSCXSXK3jDmXnXG1g5FgqEKfyScXJb5GooMPwfP7iS793oTjDTD3y7BXxJNJWYCK3iZgPgTXhrscvNJd2BCHFd",
  "key20": "3pwKw6jFyjeyHefyDZT5NvEBUTtVr2APhGXzhGM8umHzYc1z4cKFgEs7BUnDNUgHTRb4zsvZLpWHyMmVjCCQ5F9T",
  "key21": "3P1djBi98v9tyMFxWNhHkYE5r89QRnBYkqp6r5CDafohtnGjXGgxLjvv29oRg4TQcRCQKSXKRPk8LWJqHuPn5ts7",
  "key22": "2tFZKeSxPJbFRhXGK987whfAEgr16MBsyHRYU6sGFwXyAFns3SXREggjqVfgYvDJwRLYGKvLeakmZiRaZ5nkynsx",
  "key23": "mtTSWTN8iJdrssV897RpSDKFi5do5Q2Nt2nJ6gwCJRGCJHm1QvT2MftkRLGHBC9e7zSiJ184NtEt78JGQpAc19t",
  "key24": "3o7xX8tzvDiEDQ2DBrYob5VCxsCcXPpDn8AxrnnQAseP1d236ycTxSvxpxVcppTwAFbAPYdPTYXcDDYRjuyaxsXV",
  "key25": "4ZJ5t8wJKNbWL1amesdjeNYGzKNkywSV6F11TFstY7wS8Kp1Kj99gZtvybcnP2omBzBtJTeL3dTgNZ1HCD1ZZe1d",
  "key26": "fLMKnKoMBbx7Ddg8qfx4JMSsE4HysoZXwkNcqSS1ukTnEzBXW4Xaq1CdiNxvmhmsnkn9GoqpMoZNvGmBcHwBgmP",
  "key27": "3NXvcz3dUsjpSoYdoeome63QPqh6NopYqzh1kQHRsXJR6xuZUAjm8TEFzWec1Y7D1oLZUzvdhGxkizqERyvqkKU",
  "key28": "5VQgupWGEQaU9iRHn8RUmpz1AgPsZFawFEbaBYH58FKwEJHw5C3EkwgVSe993tozoBpeXUrU8SNZiBbdBG5ysbkU",
  "key29": "22UnybznbjhiCZdYGHcNUa17bP6UTtvXRHoe81RPAV5kz9SKi1Jbr8PfiHuA52B5ctCyspwNd5uhFQNZ7gmBwPqs",
  "key30": "4E8FPf2dPGGsonSfNfYYJVnxfMbNy5fBZr2AHg9zUdHkx5LgVgkLyHrfRYS8xLrza7mdkaPrwV33Zh1b7j57iXnY",
  "key31": "55gfnaoCChbqYHxG664GGhtYnbrwZiEFZVfCKtUUQBzUkiqhiGZPDcvNTuSLRWTMAQvbH5ij6LUvnSxhrtMXevin",
  "key32": "2d95e2zSoNojQgED4cCCNTanfiZ1nLTwd4Arv8XGh49N3bfypTgGi8SWkeFM5vkoYC2gF2ri3Ma4p2gcrEupYBPv",
  "key33": "5JNazyDh4ReeLcaTwUcVzDtpUtmA7qraigqvSxVN9G4sRtWixMHZsvM3oYo1S5yHona4EYVqRkmUMrjF6tWtRcQJ",
  "key34": "4Yde1VQrpfZF2tuVkALfhoDbp1NETJVhZ939QmowrftsVWytCC3qr6zLgvKmbHRJz9pg1kGdXbZnRWxAwF94igRX",
  "key35": "fgPXghi1Zn4QCtwRERQJZ85u61bKuAs1q3yYeUm8195WaiqzShWZayPBYb8GRjUFhm4iuK9MQF9hXn9eMotPwQF",
  "key36": "49Gh92QHUHfKLeA6rDJ4SLEZE4RKcQ7Yeg9CFnB6J4VmxSV4sH6qRxwGbbzYmJNvLiyAj5tUfKurFMgLf86J1zv2",
  "key37": "5j6YKNoctXJfKyMghBfKSW259dUzYhukzb7awSGyaPstfkgjvFWmyLP5MzReubtWR6VdVqQ18vQvAe6eGNEtJZis",
  "key38": "5tegfUK9g1pdbv2Nne9u2Jh6kjcEXAMq6wvCqb2f9R8A1PMABiXUeZEJ1APFakR1wt2QSnsBz5wVyjQ6mNUxT1K5"
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
