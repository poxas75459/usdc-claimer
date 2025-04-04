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
    "5RtYc3J1WjuxJF54XYKsmcxQeVVnAXh39zKYZd6Moeh79fzCPQXyE9q35JxCMYwXVfChPbqvqavH6q2kaxbKSihd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51RSonCyHhNhhw1qekMXLcMVcKn8SaWFNhQW6axtero741JgCQyH9F6LWtvFmm2KAVxPqhF2TRdHKDNoxS4byuKn",
  "key1": "3wmbnheesoKcq1cFPWGcyFVz7Sc2duu3utX9redU4qk6V91PoMUZUZKkpGqM2LF3W6uoBr5SkEmEjFFHGvv6tLNm",
  "key2": "5bA2RnfFp8VycTCsSBk3GMUF1pRPfWuWg5PDV1aveFqV3qzyFf4Ftr4oJDqSrDmDtdbsSwXWd7pc6RjGH1SWqZEZ",
  "key3": "AHsBxECXeEZdCVjnJu7PkMZMjagc16kGNUEbNXja3hbT7QX8vQSkVNEu2exKkTez8WLpHzDpuqTgL9EHGSq8rmo",
  "key4": "4PZEBgh5BUiAvDTD9Jo6tDi3SFWL31ANbkQ3NLs5abEEELyJoKMhW5GUAy6ANkhWEKHjab463m1pimgRFYvJwy8n",
  "key5": "295FL8nHYoQ9uDodqDPFP1VB7aSsb49qpbovR2Z78vc9wCFYmDhbN6EtUYyBPR18QsF84uSLJGUU2XwbAen86Yxi",
  "key6": "54BefdUGWXCYfSNN46jFfdkRPyAkRN1RjtNW7jNhrxzYi1pFiPN7qn94q5CTdEZnyBJ3nDsm4LfCVEYSTL5eNExn",
  "key7": "3zCsgKhMwmY83uRrCpjWbP78uvgVtm3RB6FEozbHJemhBmkVUQtfW5djc7jm195WZCYfYHgyDTpPjkVVxJMfbBrx",
  "key8": "5kfTrVCGxKJvD1F2Qmp32CAkJ6vXiUmgi8issU7GWGB8vsr6bd5iunbrzV2U4ehmy3Vki34W2LyAhhAqpQrTUWt3",
  "key9": "5KVZ9SyRfTwtyPQnqYdQQ8ayxvq6ZKSzjhdr8mo72JkyjCENc9TerPZETkxySE9QogDayPTN3UASoKXrixR4rPHW",
  "key10": "5ittCrU2s6tMwtYMjwKkXDpseacpQ4kwZb3U9ngLJ8YFs1QzqYPPxebBQk6a4P8THwuwQx5JG2y875qMYVaZ34Fu",
  "key11": "5kRxcAr7RUMEnk3zp8DjE9v4zfMYS2rizowBe5fDpBtLTjbvtuw8yAY8b5iWX6cex589tJdCkvvxQAAp2qDFGLxe",
  "key12": "3mmj3CcTdhSGwyGsNbsRuW4isbbvg4pBFUko5BuoaB5sHQebuu1fwfCDVXW2AG9R3csMujmi8BgbWXHSQSFtFySt",
  "key13": "Ja1Bk4uWCuQiqd2ii7CnwVw4heTFBPzWGnFBVVpdEaB22T1LLCxderLKfn5ejXHEXGyyCic7W3Zmj5FAU4WJDaU",
  "key14": "5CyJsHUhwkhtaBaWKNbhgAiBVAxZapsmyDtqoJAwGLvvewYNRKbtXy8v8rYFsqFAyKaRA4hJHq47eym7Y7YJVxaf",
  "key15": "4efKpC3gAvpCm7UZzvKjRiK7b28hSt6eqJDnMkPk5vD3H3kuwQWEbtgr2bK3eySWj1hpjWKU7WZGFGD3ogCzzWtw",
  "key16": "pToJS4rhnZtXUGd3ZkpqQnKsnidfXiYdjYxVfCjeLE2njunicG83u7qWmSfCELTR21zS3fcdXymbeSLDQRvpUoC",
  "key17": "4VN9D76aZmTTLaZQHGUDkmpWXimjKNb5uQtTVRVp6Zc6iw769m1tGivLuknDt1oygJdqp4ScDZx4UZjhpFvUiehG",
  "key18": "5SUdDBd3NkomEHkxdqPYUjyCidtsbSFva3mdk1mZASReYLTtmATU3GJdThs63ScZyHd4Y8QEGEsJmbbPaCD9hWN6",
  "key19": "3GxqpMq8oxDm2kvhvCLVbm2f9pvsVDeKF5N9SDNPBGJ4ZRFPF2QnBQuAmkmxiRAFH4MG24h3aWPFmew7yxqg5aVH",
  "key20": "5ouaSUJywMrzjJASyC9B5QDKCqwfYsJZ7nABQZUTk3uborTT2RHJPQgiHAqJWGE8frwmuazFbwkHFudv59LeX4c1",
  "key21": "2MZX5tHfE5mXx3VAy774av4RdvmQ99gxJFajxpjpabq84S5J6aHpiTh4yEDLSJCiRNJt9nLk5PeUQDYENNtnocV1",
  "key22": "4ULE7ZmzLfnVSUCUA2PNWhbJWEahFePr8XcpZ5kq4pR7dob8VsexVwPn22sYwHWttZG3EibDb2oG1D7KpzqjXEiZ",
  "key23": "4WocGGomTrbTUsxoRZhffasdFPccUhkmC9GdoPua6KcYnVEtLgQsrVR7CpacSTP1mxYosHE1QzfNffrn4WSUBEcu",
  "key24": "23UYxjmFVbYWk6HPaXmwZgNVCocX4vFN2XmUAQKNYLCPX8kf44NKgJkXMxGCMTfqFhzZFetc4ZATGNmVrXHGTh7C",
  "key25": "4kzbfbyiEKQ1cMZR7eaQcc4WZMFKfVZ3Es9NuPJEj5GoVynnoPZ1gNiavYbxMT6f6Ncx51gAsHs6RQvK5aAFn6nW",
  "key26": "4h9gKMVL794tk3abLECNcQf8VeQCVtXphcWAiFpeARLmQMLPrJSxqrDqXn9poNnkEDmCQHxquU3TEX75W9pR9e49",
  "key27": "2DdX3EGRdyFN5vgMKBCax7xomdk4QRhFx8ooepjusy2d4dmxihXwDWQEpCkybJWBQKSBJkg1E9nY6f5ZCW5Zu3Fc",
  "key28": "4Ls4Gidcz9eBtygBBsYXFY7k3uvQ5EdFYngJX6sAivGFAHTKFdoXsL74n8ogTdZMnpCkFL4t257NrLLzkrAryywg",
  "key29": "4Az5hH9bp2izmdHRuRncmJkUr7gAVfvE8ib11P6CQAWkqurcktrQQPBz74LSdBfnyo6g4oN5LwBcLcvEi4QFBwXk",
  "key30": "5bwarjPPyqeQRvcj1qkL8DUPHNQNrB25YsSnD8shH9w9CshMbRoQg3KUzxWcqt5CP5aN5swS3dLXntwMiVZJHopk",
  "key31": "3SQnmPnAZo4yjQqmU3JmVC4dHd4Pkj8QD7aXRCwHxZuG1R3hsaEQZUdSP93YRVRoGuh7dmBfomWc9at96hyHWqzK",
  "key32": "3bjViqXwtF3C7Mt2HLK7xyRoJi5bXSw4UekerzDwh6cqLtBm7pYGdo33de711PZaTHJVKT88P2DGxTNQ6JuUtZng",
  "key33": "5waiZDhfYUEtvanrWF6hQcjcVkZhc353mDQ7WYXrEZx4wcZZvagTuioAHDLakuvp9x46BG7eymtBrQcdyg13DteG"
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
