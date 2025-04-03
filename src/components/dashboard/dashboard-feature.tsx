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
    "2CReCygCqtPVNcNiw4uquQSdyfKBeiU4JczUgavETQ6smchdyj4etNeyQVibG71sXZanc1w5TjSQegjXo8puFfBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kkDZBqTrtkeBeCBr2dMGhBDPf78oGZ8z9SCCm8yi8Rrb7tSbV1DSBbwn8QudpoQjCfkGyMemMVSeK19pqH1o4cg",
  "key1": "5cTh8Uanri8ck8n1J27zbrGnQGaeYSTRYdB9Z5tN7qG9gmKYUj8cTYB2AowTsqc9quEXbh96sfAC23ditFWuSU9M",
  "key2": "4bhq4DSs5AsmTEKVTPws42eBAoDHLPHZYtsDyANsAGkKoby6Js4yHHSwdSjBNNiLM6t8T49d5Z5Wv8mrQhVFteZ2",
  "key3": "3vaFYyFiskiAW2y535DmKdJvvGuJTzAnYTtPD7hqpYNJj4R85PU3ajoCgPbLy6Ky6WYh6FA7cEXwRzXVuHRee2Aj",
  "key4": "2UVMSF2vmkQ6fgbPuk2ZwMmhy79CwnEy162UTU6JYhdKB6Jv7koUhNQNZ7iEh9obaSosScaPh6W8qd1otW32jcvP",
  "key5": "5PiEMszzQU2raU7YBy2kLDwNKaqwn5yMTcPZuibuyKmaJNtRpTFeZ62Hjqx9128fRwJRcr6KxnBnVZezLFhAwtiT",
  "key6": "22QnHLJA1fFhtPcQ9F896G4t8hHbeqA8sncuMrNXJ53yvePDXLWNMR6vcPVr2XELF9ki4UaQ69GP4twuEGQQdSmn",
  "key7": "3wEjwYPg6hCs5ohdv3KJuoQFSdSKe1vdgiRh6aQw5DXTdsr7c6QB5gx9XWoYwBPypqtBP3udf8iTKEFV33SqZtmq",
  "key8": "3ZBkaLEFBSW2N1VFn4HGEvfYwMHwv6SrhQMN9C3EZrE476nVVYywt2tovGhAUCDn3S4hk21rGjD23WGc1cwkyGRP",
  "key9": "24CpGYFMLSEEetW6ADTHpz24wRJ5cGvPwBd9mC8STbsbmA8PnPhnUw7XL8ooM1mnqkDUuchmUzoS8arvGaQCa2Qu",
  "key10": "4VtoYtF7P9wrFV7jHR4Ru82Rv1dBeexq11fMk2EPmEsoQJzyS4jM7AxP7eAuyHYZubECer22tjGB87TpbH9AyKBd",
  "key11": "2uCfcSChd67GnvvbcZrdXpGYkrZZgWpWDndQirqnSMEbtffB5SyRG7sW67KXM4EeWCN3eFn26SNNKeAVQE4NYNyE",
  "key12": "PS9d16Q1XnXPDZMjdF4ZXXMfKHE4EU6NmUcRLYoGvER73M1fd9XxFnS2vTDE65p7QimeragWThmtnTv4Ez4d3XW",
  "key13": "vd2Qn3KUS6insr5MiqmkZMrtLoZNtif5BDBsfpqivg2ZHh4725usipTSHAKn9hWowojp2QXVDVxibhu43WHDLmQ",
  "key14": "2sinGJM2UEwpWPbQ5j16463zpp2HxnMF4LZd1z3LUHa8bCuRSJoPzEZDgDZt6qPEomzPBrMKc42v5cu7g4gcjvcx",
  "key15": "ZS68JACfgESMuL2ixvDGGmXTMmpmSb3b9q5quvNmaZ9XUAZ5jUAscwmjns8gtF1H2Wr2KJcX1yxdp3mTKtabQ3A",
  "key16": "3bHTzWB7ABhf7n9hmjEotioDyYKtzfgUYHw7J5FfZiLJB6RKCXD2FXcJmCzDD5uJaQGJ5uEnDkH7HormCG85uCsi",
  "key17": "5PG3gcSxHvxzTUV2UDQTgPbuJEvxaVekxRjhgWtwE7PEhpAsRQWiwNVyqLc6nErkbQPput7qQjqzqPDVAN3AJcx1",
  "key18": "3bXqWnpK6554QWGKtZZWaqVA6YGX8ymyPRfJ1YbcBPiNJcpqMEQbdG6MPekZe94ShzhiPxopLY3FEztcmvSXgob8",
  "key19": "3Wycn2Y1hX6NpxMSyGFiG2Ysu7omm9tZifiTV3DeK3RiE1bYrFrs5ZJzhsmRtvfiVJ9aKaZ2gotcD7saWUqm7GMe",
  "key20": "2CSJtdxaXruLsXxfgFZPbafJX2CEZqUqkAqQKRPHGhPi5TaZn7t84F5162xeKm1bsTGwzRssGZzHZZ7VGKnQcmNB",
  "key21": "Ti5UTdyX4LYU2JBRPXrYcCcQAo9RRK2kow5TArk8h3pgBDk5xZDyfQadeDi4dGAPR36XRmtZfXKUdz3s7dEEgUb",
  "key22": "34zubdQDsWAvkhAuom6uAdf4QNKd4tFYpuwA6AftUSusfMLRTdKf9oZ74u4bm4Gg1dahWYqL9ybZNqdqjYgzw7he",
  "key23": "wWodckgpFQdYZ8PmirYsbGr4MuUE5hqJfRZtrEPAC9FpsdpXohFPmUF379TKfrBBhZPoSXFnr53NVh6p1obMQLM",
  "key24": "5LRfP1rbwLtNhgkuQy2KhTqNY8CcbQXUU5LEcdEzBZcYGrSfuupL5b3oQHMxTQcSTcvJX3afgJA6YtmUu3WDSr2G",
  "key25": "RG48qcnrzPeUW79nsdsC8mfV3kCZXsgPVfs8YrEgaBeCPkc9TUTz6Xr4xg6Lf4ejTsGMRFA6cL3sq38BuSbpc8E",
  "key26": "XwRqWmoQyEj1Hi3ejcYMWAvmxoBqrKRiVrBzDbLDgecY5XxLLccFhZLrf4T86omo6GeWMnBoovXaWXfnhrYJecd",
  "key27": "26ShTKaE7jrXVt3RcvVi753mWmVWRqMoGacSBLYXg11e3GiLzmMS1nNJf7GPPKt7hrbagJqhuqFJD3UeQjUfjwCh",
  "key28": "29cZ1dSPHJ1pUHUo1xxt8UzzPp9az8xfULvTGPxr6Xa16FWo6fmdok7dynGr4jRBKdYcfQj4vRumHjE3UHqPAk57",
  "key29": "4yGfQuTrf3dzELX8tNAC5B1MNHfCci71L1tawqvjfjuUJCm4qVkavTmfG5dE1PcWDtr3r7eR6ckLANRiFSqdpGsi"
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
