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
    "3KAmw29qCSmZx9TmLZwFtSXvzcy1gPQbuh5fsekYtrVLYtV4HdY4hvavTPbxcPKUfaVwSiWx8MAYX9wz9zvFQGNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QLqqYRi3CQ4Q9esGJugSjSngKdKxkgLf13j1Mh2v2EGUiV3je6Vhkot2YuciUjC1VXpGvHciPdof6S5SDYsedZx",
  "key1": "iXWgCEBbTvJhh5UMRoYG3L46fqz5qUFRRMaZaTuzqEWqWp17Xgf6rhZ34JZgqxRYpRHGoHW6MH92XSvJ4Lwr6Ly",
  "key2": "y2aZouHU8issSjfqM6d9HJf6RUryDxKopxFBJFyCSkzDxZnZs1DC4bjVrkbFjwFhVmMA7uN4kHxvcnWdUE1sNNQ",
  "key3": "4MT69F1zPW3Gd3DsVhutE1dkMrMbQAw7CYBjWs8qniZjFwPWGRTEuDbdBTa1VwxjYDZ8gN5uDp7Pi4F5eeNKdKSq",
  "key4": "AQRtFQHCGaKnTMqBLk4GZEe5ZtPfu79qUsjnCKACLoKJBQcLb7QmGrtqddoYnSfKZQHiTEkzH3EoVYLQmPmfwy9",
  "key5": "5vtVFatbi38TgHSb6ZKbx91ZUiYhERegLo9YAkDievtUNQQdYN5qqqbeqJGWAhCPRa49t7CRB1VyU1Wga3ehvyEM",
  "key6": "5tyDBuvUWYp7CvnNtkbnsJmTgFWGmWFLvDr59o8LkjzPDeGLQeg18yhqDNekcXFzd7hpinXALbxuZbX8cykPHX6f",
  "key7": "5qu1XbmAMa8uVs8J9GdypbfkWWRPCVziFzYnaSVNRLRVd87VA2e8qk2j9DKAkCEoEkPNUMmphnuFKoGBzSndmhWQ",
  "key8": "8FQqMRcjBQpmFpXReoSHCFtjBxYtRyZLDf3TUPR94FoNg6VHLPQrTfGBjjJNuDsDMV4n1esMPhv8DQy82eH7PhP",
  "key9": "4tEE36V4kkNG6KG1dqy42fQajBqDdH46rrKNcTgqoEh7pSmCR2C5MQfbMJKxXkcXhq5FpwxbaMijqW6QkiZRUrVW",
  "key10": "3jR65ym5ZopHZY3yMCCgxDbuG7apDpe4nGbqfTCXaa6i1XSrDcFRvbbFsXW1EALLWcduZjC5JJQG4xsCaUHqdQQz",
  "key11": "2GMi4ePaq6dkyoH6zWLmru7ZCbYD1NNAFBxpPdsoDy6cLen8ZYGfyAJdokWRwzob4jmpGV5egR4JRjYDyTH7Gzjx",
  "key12": "5b5qwfXGkE8A6udr12BCi3MQBEErvRa6f4BHZoJ3P5TyJjURp4CQ4go2hLAC2KVPnbfREgFYhcWh3qMtfy4APxTe",
  "key13": "3zM5M5181CYHW66zVprdJvwjv4CDiaxQKvvd74Um8Mwn43BjRhJiWX1eVu4G8xi5Q8zd3QTD28YUUk9nr1jsV9hb",
  "key14": "2A3pgvJQAm8cg7rwb5aGsvaZ24wmyDJVGzdq1Tjby32QRcwn9YAhF8AsJanV4aPzZVZZ18qgZgKv8oxyDPXP3dGu",
  "key15": "2jh9hUufda79xdvtqd9f8BNxeN41b7ewPXcqp5FQQFVZFNZsD777ziFgdfyNLD1LLc4t35jU5p2AerRAocpFD8jR",
  "key16": "3ZxhooJ7nRUSyUzyk5tnxCw56i1yNwqRURnfvq2bR26e3PwGJucaiumUHVPEaqn63Y2PfeKpQSe1t7ABX9ZBWMBw",
  "key17": "dJQLfC9ErM1NPhWVaRD2Rmii1imYKKgMvAEaV68uXFvexvskP1JeagXWrSZ73Wu99r6HL9juM4GuwL2ZmRkZh5c",
  "key18": "4XhVNei5gBJicbuptttaFpZzhVSW3ZHBdbd9mqiSNr2usfmXrMMdMoTApvsq11i1zSkx3dmHzeHttW5Xi5pXX83H",
  "key19": "65LxNdBANDP2arxjK4wKTEsZmvwbHRmJq9nUt6jnSeAgzH8ciiD16jjkCzHaJpwLUyrSxPQt4nLj5ZCtSXa8Rhmc",
  "key20": "3YjQobThzr6YBSrYMU5W4bDeWe54vohtvGSwB1h3GW3kcNuvxMf1ByJhi6XJVj1cXizC6X4pmCtjecQzxWVubXCC",
  "key21": "4Qm2hWAo8QSfF7p5phjzi95uWLYcR7hEyZdWUeyk23QxAiprogF6VkpgcBmvUYm7dV6AcYyNYzJLoQyAup1A6AqG",
  "key22": "5tsib4a8LNVBmavn6Wvu7nnQDbiLffKYpxXoNN3Qx14HKut3MyjrNQJ8tRVoXLsXhA4Q4sRUsVyv7HSEDvqgP3N5",
  "key23": "5Ji2vJmq6x2zi79yJ4SsHe9gnsjEi7Sk8Nrk62DBXnCmN6J97YpUn2rykefScZWZ1rQPvwQU1wVKdEZrE7vftrdN",
  "key24": "4uXacAM8ncbkdUqUS5dr3dU2PwhUZNsAEuye6jDT4kwQMMCWkB16EPN7gWV28Rpy9Q4rMEkF7oxQPWv98YXG6df1",
  "key25": "3DEMfpYf99N6hjrVXT1bNaSGfqwqdBZP1rnUREeqZkhERHZhksPXENC7oYVB4Byu8wh6q374LruZM1REhwpW9w6p",
  "key26": "Cz7zG6prdhrnqcjGberpsYCcrDwqmRiCg9tnSFXcdbgzqt7siEMwtFdDUwn2UWVDM4Lq1g5HDSuKdWas9C9Mypu",
  "key27": "1BSB3vprUVq1Vc3hKmj9t5wvhnfSiWmFBiyv4Nw2ciR2SddqoTHHy8JXkRE8zEKvMw73RVoTLwAZN83np5RyJ7s",
  "key28": "2LRBM4JF5ouMWqD5tsXNCA2qxRqLWhTKhBtqMS3ga9hXDCbeAVseUkV2hpusTaEjFiynQdEjXC7vVD8ZdZ2aDVdv",
  "key29": "6sFTGAKNxUWBLxUSVHRD31GDQMMzofLd6paBqk9GZ9Z4zNQJy53S2iws2zsePfUWcLm3CNRjZj1tPWoA1VSRTTD",
  "key30": "3qPj8LNxypfcWzkg9t6NsWKGWjPQYeKZoc1C3xg3s8HYU3ouoNBYcs2p2ELB6Je9stdgxzUUkcaB2QG4RkqbaBvK",
  "key31": "WKwLvjb7d2Qa89Gon6KHv2FN5SHES6ZHSZDUkgYCiwnZUXm15i6CCJu5K7yxkfzG5duvGmmp43fUSpy7q649yqX",
  "key32": "4UtkAhfE9BbNdn3NRXnZkPTdwPQM8ex57phQpx2LCpaK495xEZMoj11i7ySSexrhau56KxuRvvBb6wScV26cTepM",
  "key33": "3h1JKphykUhhPesU3H2ndH8qWT7WM8KAbQupDPFDZN2jU2UnXk3Ao1JVcyK2B3wYLSEYoprauUwbGXEf8rGc7JT3",
  "key34": "iwMRmxQ3rQsHHpZ6HKToniJZMNLEgwr2bHB28B3WmaHFrsReNZsmtDgwc3xpYeDZ8As3pWi44iKsxNgxMQjQY82",
  "key35": "3SzLdvt3S7B9Cqd9PznaPhV1GGrGESu3UkCQ8FYwhphViih6nV2swBmLV45sd83DoWuXi15381UUmfHEYmEKqqXX",
  "key36": "3APiGVN6s3iYydFBhGijwQTm9oNGncM6M3vueLcsHJx5dimHKtYwVANSwts7oCEuTfQWdip7SzA7S1PMKsbgQ8Ms",
  "key37": "Lx2dk5mfv3Pu7wKtrvM765Wocf7u1BYDrbWMZBqLBVaQvTmQn3XBBJxUMELsXzd5WD1nxLU3EeW8MXw3gdNV8Qj",
  "key38": "jgkNErgJyyWqCVxkScz4VmhdGCJu6kGMiqzZ2LcQB8fTqRYPssmGddQCGtmb8rXKc1TLDs8b7WGg9QSvCGPNUAC",
  "key39": "zNCkNK6RMJiQFG1j8ULTGDZuQNyjE71XEWqkLQVMm4N24vLVxSTSE4yUXYsuS814zpBBSmM3jSvGf2CUpLspGsJ"
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
