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
    "5r59CKNysoiAQi8e326JZ2uRXaMMEAE4XPDxhf1X4fjA6ePAs5G73Cc8SieWZKw9BPmFzvVThsc9hWDmbpExGfC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A48rwgMurkqWfYu3XC2awrAnyHTuiZtVSerc8wHok9X2JsZgbqcuQEEVjJQ4inbSJRGCW8KjdYQCucWAGrfPoJ7",
  "key1": "7ospuXCUDC9BAzMyRFdUshoS2ukeEogqdu1URdVY1faJf7tGZeiuRu1b6N4Nmn9HViyuyyQXB5Cy9pP5uxZc1mp",
  "key2": "2fsbMY4H4HvnqsZKmsNsnHH1qzX1oGp8jnxFDC6u4oeRmbvKWyc3i91Lf9K3QhXe5A2A4e5syNhfWK2zC7n7jpbZ",
  "key3": "34UTgnpHUhiTdKaBRZvY7xkhcRs6vXYRU1TELbXbKpcMRTKRdHmRygf4wANyXWiiwxZBgCfVRPLndZGcMsphrTTD",
  "key4": "2xXddyrsZodScpRG5f6qhcwRCSL1fiFVFZ2xJdaeMvnat7HwvwNo3oP5pkjiW8CTvTkACKYc78NLGvd3g9nZgggU",
  "key5": "vUzFsyukw3cncokooRDNFP689ziEZR7SprjsLojoybWfTet5B7xuXKYjRapRghSebiJGNfbMUJL9J1Ke4rT3tJ4",
  "key6": "5wXjFvELyA12RE8Hh6wwwZ6q7SyoanAQwoN7bT9CbjzRi4nGPpN4a7VGPzYCaQTeocZ31XMwcmWasJAtia8QYR49",
  "key7": "zjmDNdtmuSn7wVhgwNT6NGvUA9rwwBrkJvXFqWS8CyfDyN62iRvExXR6wtWrtwVKaPsAGMxV3gk6u8oXjQznhfC",
  "key8": "5S64MeVnuPW92S9gZKhqHGGNtxzZyMyMm3sGaoGKpXVDvwRqqLchtj7BGjBUyj1bejoLQwWahZgaM3grK1PK8jMZ",
  "key9": "4gm7mZRChWievgup9urJQYvWjQhc86qsnjQfwRPpU2iRuaftNTTny1uSAjUDg1XFQaBfv9XbMEtYuWS83AmvLDdt",
  "key10": "DdpHRvZdTyas1Eq9Go4qBxL3H5tEiQ5FSQCttxVb2tQNoHwQZHeYqUETZVSsDXVwUviZxN5QiDjumBAsow9sxVy",
  "key11": "5s7HzdG5rhTc4cW8jdQmixKDHKdG34D2bZ3QyKvWAULf5NuacTbmsAQJH6kVGfEdRA7SxKZcGULrhQoN5nk54VGq",
  "key12": "46eEs3WYtS2YMpLt7ZusLTuNm1SjKAshczd4u1N1y3MEU6Rq4b8ZQJmFfJ1TS5Gs1Ds9Nsj2eSNWNNxoLVaeNTz2",
  "key13": "2ux7LvtvA9zGwfH9yfUGJN8Psf28oDwH81nXmqgdu38w9Nx69Bf17xa7sfK4Hf6T4HtkcWFX1jGUuJFWtU1tksBA",
  "key14": "3SHfL6HZMNhhbRPijTWd7bYPCXgrqiGCUGxdTVNkTryF54LyUVyYjuMQns5zP7Bwk5uMpphWsnADFMz6ZynEjyyW",
  "key15": "2cPa2ZxYUshxBNZuS3eDn4Vhxt4p8sfPruHLhkipRpYNg8K2z6kTV9zBDcnzHKHzcnGokVcFy9fxgfABq1kHp8Gy",
  "key16": "3R8ZXELsEx6GzABVKMkn2wkFwykFr5fjhWhiPwosxEvuHWiQYiUdBAfAgCwnzYJopBbE53tTDhm6t1cUXjh4Npce",
  "key17": "yJdeB9k31kYPDUYagN83bTeHB6CYV4Lc5Phjr3NAD6dR2ugujfEKRMjUK9ssFxevSxy4s2kaCM9jRj5yNfCEbLY",
  "key18": "4SDubXd12Gccypcq5cJck73cK2yaWshE6wK3ugHx7vMCXk8Zr6w8pZKr5wjH76fFtK6HUFK3RmccS5xeUt9PjGnX",
  "key19": "5gEEEHYb9US3SxUZvDiRbdzjd2yqApg5bSjthPFsrcVMA69iKM4FywdNoXuuevHro7yecT3iRUV2K1PxWpNyjZ58",
  "key20": "58NxH9TKKjyuSseDbHv8RDB94njSGFC5e6nWLj4okMDLhkLG4rGvsggzWEmmt3aEHw1MyebZqCQ4c2EXRi45fEmw",
  "key21": "1ru9sn5ChLr996aWJcmmkGckHVagubcDxdNAoJoVvXWY21G3oGthcijD81A2tjLsMaM25ub9GCo1FJycbPYqiQC",
  "key22": "2HB11nwVTE2fsdd6P486HTRFXxwmCPMudjrTH2L4qNF6pUdMmEedJ4uDrroaVNv6LQDeimrBqCghAKqYAQopc6rN",
  "key23": "2yntr3cf2AKRLrKtvgJK1XK2BeRn7JoJVrTbcH8qk97YGyQgDssL1v8mjWyZ9bojNJd1TJvHXrQGf3RPdNgaudM4",
  "key24": "2JmfURJFjLKLVFsj2HzfAcKQsQ9KpnFHn35PM1b5g9hJsFb8JEmLifoVRZ8gTw9k2jWqvDJR5ihDtMZDoDELEqbB",
  "key25": "47yjCdM5zQ9ffcArSYMvVzBk2WSKjDYsSMqnkQuwPGteu4pShcUKaWYxkKS4hJAsvb6RFKQ9XkBVvBrGekkar99h",
  "key26": "5AnvK7yBMRvP2JFXme2kiwxQyZ8surgj2ypqsCrmQTGbd6NwnR3pPitociPNaCL68ckk2gpbsjn7qS8bFoVKo8Qt",
  "key27": "jWy9BwLp33dzW7NRX5X6ZuSKB68V3qPXKLYBtqCXzQVtddGpCDLrMom1YVvtF8ZwBoYLxhuS6GaLAsSEnGvt8Ap",
  "key28": "4eST9umnA8bWE7jYPXngghuWmbzVuSvANNhdDfoJbMF3obn6KTkrDeQ6M3uUzWFYAnqUpBNbh4S4JH2zCVmZfQEa",
  "key29": "mfEtJZVjE8wBhWWxRUtsnSG4KiDRk6p4YYHhRdaKaHUVWfYe1cvPwZvo32bVgPqPYJLbZLGdLj5qNR8cG6LLMnN",
  "key30": "23q1gvcBRsAqmFU44CLYwbnD4KdbBGWWV1bhj3jfpZGDJgMUNKXMZAoimv3JsmQHTn5x1ALbyVhfKrGx8vrQyYET",
  "key31": "42TjqLzJL43TCEok3MK8rQuerJEHxHkrY2k9ikTWPSxNX5N8VptBYvAFJ9fenXss5FckA3hGx5HfRr6hEv9S87QK"
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
