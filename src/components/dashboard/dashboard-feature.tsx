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
    "46Cm5V3p8tBY93bot2tpgSmhUgZeiy64zjRPp689kMAPuwHwL8o9WmtAk8NiQyHDww1JaiRGQtoyDBRheQTJkftf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zTdJuckzCm4NrhRWFRKF2dnn59F1x3cQoqtMUbF3KQ9Bege1pNhAJBhj2cv16B55GHtTW12FLiYhigQuywxyhBP",
  "key1": "4E5VxWEKxDApRUUsVj4Wvwr78GUEoC9BFQnw6SNbPUQUbPMqvwBStgC5vunkDpL1ZEMPn3ggtWh9Hcb3DRfecSi9",
  "key2": "4s6nkLJhtFySaVHxBUZHyrpzHVgQmfSRnHMHwvU9jSYVa7uqjmHsraudnn6ag1bd93mrh3HNXeHgvbrNJ4iUw9GR",
  "key3": "5sdgmnxb84GLV5PKfekpTPUhE9B1k1ruMaehTHDiMPrmkEQdms66n4K3sFxDA8y2nYAAjdFtL3S9BZyicWoZNk2C",
  "key4": "4yQP6QxZCgk5Z71pDrrC5A1j7UcWuxNUiwMdzSJen1BjUHSggGG4ocAeXDCNx9GKMrm89aoLE5j1SKtkwn9kzCCf",
  "key5": "5t7CVtmBDdStm4y5nCfLpnqUmjaVN7ymPGkfvZ3tCTQDhYqckBzEbZnuHBGhfhkoJa2iYNyNyH3HWJdK2mkr8jCt",
  "key6": "4qRaTCio5X7q9BgMJodnoswx6BwAhR58tvT9bFzcSJ7RcsADecGfgu7zbGPmzJfrYhK2hjLdVU6H5cNZjFVYJp3a",
  "key7": "skWoEYPShBqnsDLh9XzfZhdMJTWYrA3RDiF3GBHe6KsP3yjDM66WxniPPFd5ftd9R36VFGiTV7ZN848mBgmxhYo",
  "key8": "5ynftb7b83XVdM6JBbatbBAUMgBpDFJrjaMJeyKBnsbtpXfuAdDe8E5swFXH6ExGnaKwHJeU7WiVrfcS7psZtTc5",
  "key9": "31KCWApKTjGc5JRdfwsQo4Vs5BSK8LShLXkgZENXE2MNB52dGxWpefM8BxewqwB4dhf89MEfa5Lk7xRThkcSBMgT",
  "key10": "ukHHAwRhKMH78aZE6AGhCyDHZiRWUbmMPHXt2yerjMhv5B2T2qHVPoian5cxeRpVaid3cxVs3tez4qkRJnDV3Mo",
  "key11": "433ncfwgKjWqwAcSLujimK5HVNdYyjbyjnoQaEBkGCFYiKwhLCBNver9ZkXot7hiKt4oVsvPWFDeQkPxuTkHo1HK",
  "key12": "25yScJDowEZ3PLgd4gCZwTJhYc7AWpT3LAQkEgr7yQ659jZ7tqPD3YKQdmaH31XwmM4EphFtuYSKdsBRJJ9JJWda",
  "key13": "BfWrT4dN7z91DbxwTKUjwKLm53VjDV926i4qdvDJjMqAcZUDJS1Td65ppZAGEiYmoVnZZjafpDByj1z6Kd9W7nh",
  "key14": "4TJuweJ3UQ6RygYwRxLK5eQahopEd8gxWSaMjgg2cPVh9xegxKMvQwNdSbNPEhLm9xXoQTPkk1AorCijXUKZXP8L",
  "key15": "3kVyzLJiK35m7aJBBiuH4oEtkpiLfsHLeNRFVGQVjhrCTz964p1tJLQawJNL26zHcbXEQxvXWJL6a2A5idnXRz9",
  "key16": "2ZFZm1EdwVTYWj6GWkmVEbynxaRcbfxUGUS7Suv8M3kKgLA2kMQ2dkqo7V7qERURBijKQF7TXSocNwBxypzc9Gyz",
  "key17": "2SYyU4GxsVsULACS3u12ukDojpavgCLfEvkVzhx7ApR7AX5kJRjRNbhQvg9SHvesJy8vzJGi2bVctSJhZFh5zdkt",
  "key18": "4pPRrnGPMLgfvWVcPkUYg7CCuk3SWQc7V2AHXkfjZtduJmBsRZcGX6Td1RjBHrVpGyJTTrktJ2YoN55ZnHX7MZUx",
  "key19": "3wQ3ErYCu6Geuxdxv7Gs9ffB2tSn6KUyrTUhkoByZmEa5baWewpR9ubACNNwEcHNbiiSPmXpJU5szk8Yfob63gtp",
  "key20": "5Dto76ZcrpK7F4RjH6K2C88i4TGEFWNg31kxtRM59eRxx4SHvhrSTePnc7z5rjtXZYPfQYUSkTENorMveDR6c2W5",
  "key21": "3XzmtsJotz3wTN2xGAEbHAqZytzCpUkySo1eJMVdUEjgP71xK4sXmGKbo4y5sN8uF3n5Fs9gAnAnox9U1vEfrH3T",
  "key22": "5D3BreHKWYeysz8CKF7a6SK9YwZTs76Ds5maVVYwhCNRtAZgzXyYeeAsM8QftG3nh8DZFfu1hKWZTt9n1URM1AtX",
  "key23": "4C6pKzqe1Es4SRrApoHLresFxptr1U1skrNi2bceWNcDRCeoEuZV6ZcJZy5Pd6U4Q5euSajtmzTLDXHPKqWkk4Uq",
  "key24": "26omA9tAwid58PGTE7SrtMT97BSmX8fN3jvwmMqRDRwCJ95aKvmfXXF3Y3Mq7jWsY8PA5mqBJqRxNiCR9ogAbJwk",
  "key25": "5NbEtcd4ydcus14rdAnC7iHdxQki7tBoTsZjSMxVoYbysbgw5oiPP6NRz2EGcUbQZ4CgaqCcmwYdGWDKTWxMN1id",
  "key26": "3vzsAzpaZE6vyYWeCNLdsvZPfQW3fufdzAiDBNcxuML1Jh4U6tET8pjcPp3rXnK9rXad4pHKQN9Nx6uH5w4Nr8Ls",
  "key27": "34GyubnHvmnrE463gQafnXLPyqwahgYiimd3mR5XrrhnpwP8RTKBai1VGrt7dVZv6gcdU9w3VXGwoKxt4rH6Ezps",
  "key28": "5V5mNWfqTzShEw8xFRmKiLZeU1hWf3FPZV3HrkaY8kgVHZJEmZD5ba1xejWhooQM9UmzXmbh9UaFsCEN5y4VDkhE",
  "key29": "5udYg6F7uMS7RMMYWS24Yx3Ju95gG6Rg7bxUxpodk6LVu3oXAVZgfYULyuGjXe9LVdZQhMxabF6VB81Qkt5UcYQU",
  "key30": "4SwfL46BXfpeytxDppycoq6Mzo5itcsYbjUmdvGfZcPSa9ijcbGBNZEH8TWZaRTEtvSewwm67tMF14BCjT2mjfsd",
  "key31": "2r6x2ViY1oXodUfeW8x3Hdc1HE6B7gEFB8VvqC4qdFbXAdbQVfqRFERz28A8Y52WDd32tjEkPiEZbv6JtAmepTUW",
  "key32": "eKvi9c2bnZD5Xbh1vW5s6kfXsBKKwphFf3e6iWQLkQ4HnZWrjHpuS6vCrgP37h8pHVcxJAY7UFxxMtzy91UEBk8",
  "key33": "4ZFmQFsprMg5szRoGhf8Gq5mS3Zxdm9zs7nRHi3T7pHqrrVsdW1BDRCZdgKsKKkB2Wn7Q1fvPqHkW9rPeC6qysFj",
  "key34": "5jTDT51YSJCZk5UvqbpFo6Sk9cawaAfGkEKf2QDfJjk9A6YFXSUiPKhKaprw9tdz8zR4w8WaCPtkYTWSSoi4r87W",
  "key35": "3ya5Gc1KFKPprdWs14Tm12Djh6oPXyWiCSUVzBVRV5EwVgRCbMB3uWcnh9WYY3McYug6r8H4pju7jY67pNZ595FL",
  "key36": "32MhbtMjwB22585HXsusorFWqVQfjPwz2W5X6uWMWh5qd74qKmBmx52aYBjbb2VzoDKmbr5JW6ew3hvuNs1XF9oU",
  "key37": "3Rq4EZPNH7x5Nh1HCwMysxrAHUmS8xw35hKiM1AUJuVzWos9JmH6u6iEayWAKtNty8UzatDZ8qaHg3Yx2pkyGEwP"
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
