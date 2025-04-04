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
    "3m83QWPwF1PyQKVqWfuGCdwut2mgiuEi3BRsa5aCCzrVZDXJjByr4X4PNZY52NfgtmgsU5mEXNKeaen79goQA5DC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TjwUUPpQ4Q8e5yFotPf4Z2JRXQ3jJ2YKhUkyL3A9vYBUx178SQuVjhzAHuWxxu5KkBVUc24HkwvZTxtS1DbL1ei",
  "key1": "4H2VyDsN9jKHPXUsA8vjt3dACVMRttM6xQqCWzchmr8FrCYrvUdboev6ookoV7HhPvvrfU8ikHzS4TZGF7d9CCSz",
  "key2": "5vAZXwEzqU5B1tBkoHY86JwBpmzaz6DQFnU3Cgcd8QvsztzpAPqPykMhUxSRcwHcdHkim5aZi5D52TkGwuFsxJXW",
  "key3": "64ew8RdRG1xPfQpmTPN6kchvDMeEciRh8XADFPa4BZyKWdSzkPAnFKEPJNCxcJdiLbGQ6D2YizZAWiMBo2Rp6Vik",
  "key4": "QztzJomNmXNKQq8evQsfeCDtzB9qZmtRiBv7ApWDWHzNrCEcbprbTgRK1r9bao7F5isVG5qxiHrDwHuWfAaT8hD",
  "key5": "3BEmfuxzxANL5Fo9dea7RzZTPcjuueYB4QCEumEZ3XHQRWZvRjTAfuTXrVLnDko8A6NJaTV8WFxeDnF9mQADAVAq",
  "key6": "2buhHhPC11YZKYLLXtVChVYA5xVsgyBtVteMbTVBQ4zpcm9XMy3mSbTV8GPTyaN3t3XFkV3e4TNkCF4L1Wm4xoB1",
  "key7": "4tmaHt2CmvRwtGxSb6wT728YG5zyVpfhm8ayKYeUeVTizNVMgieXYPVU581r2WAzrWGReuYg63SNrK3e1p22EJae",
  "key8": "4wnZoEeqJFpTuSeKxLGsLdUqZezaeEMkuxwcH9nZaK8PG8S6uB4LYFnXRotd7bKihRo45AsNWg8zhSLw5mhYaGJ6",
  "key9": "KaF5A3U4BJJRsFsRfE5NtEeGHgw1TFddQDW2edfduyfzjKxKSSTsdJNJumTq8Lz15audAC145jvDQUxsDLr8vpC",
  "key10": "5AU9dakzQ7wVkRvPrNXD9aekkRYjh3HGDEqcR9XqNzPZSvG2mnf2JexgLVJ79NhsshwA1u2jbjyQpVgzEvBHNPWd",
  "key11": "8kvPLJoJsXPashJ8GmzXZevftNeUAqvscVtfixaB2BMUgchCZrzdbVPh8CKTCgDXbef5UDJheGv8negWdmR1M3E",
  "key12": "LCjGJBwcKQk6DbDbruYhoZEdrrDUtjKZceQh6oyjeb5TrBoKMhpH98KLApSzWaQAbpAUBtvzZZDKrNZe5dkMbhX",
  "key13": "63R81atKj6pECdM1F9Ai3giMHqwbkaM6mb6pjbZ1QGsjAPkxWKaquVqBWtD5TS8HiruhVxnzZ871s6WzhZ16BC6c",
  "key14": "2pUbNKpdLvhq9qLoDVQha5BsDMZAGNAFKtoCY2WNNLhQaq9JeDQFA9MpFwVBM31m1AxSuQoyk1YbdorJhSd6jeKM",
  "key15": "3KsdbJdXf3HZQXnSdwzrxfGgWn9bq1oCawd4RcB9UWVM2yp7ZyihHQicB1HPmuMqhHfHCeeYgf1NTGoGcLoq4Fv8",
  "key16": "29Z2d9GvTRj6WDJB94LZrvwrG3DcGHfAw88awvKyKphNcbS5o1fzks1dgJxDKBuiSs7bMpysxrriqSxFQCpez8q4",
  "key17": "4zgqiZTmzBubrMXtRrvdU3gMzVNPUCvc3VyT149JGP2giw3hLa7G23e1SXtHscTeVw9hh2hh9QuWVATqj6xRC7AA",
  "key18": "2CLEV7XdDD3UdJNuT4gS6LQFjbbrJf8HJ5GZLTuFDh6VtLCmJza7giasFqAuNKZrapEeB1yZ4qo2NnzLsYwaSacH",
  "key19": "5Kpn5rxPHkv7FnEZJVrK3ioVr8E8fhqTUKE1HKeZjFJLB7B6kAshwWSeZ5aXfYx4cfWeaJTwSqWA8gdrsZ9vG56",
  "key20": "3JYKSRkAi9b7mGPx9aYPSY5LtkVmUE1tFTWxfxL8CL8oYbnf4W8Ts1aspV5zkAAjYe6LwBdWohxgFnX5aCJkDTLc",
  "key21": "Yjtuu5UPPNAZWmuVv4xx2D6PHHU7sF68hCf2abv5cPZDy1QbqX37932XUHP2jRc4C72i8KFBVirwadTgf3Jqncy",
  "key22": "3eVRA3XZp48p4V862XbG9vvhRdez9Ud7Zd4mBrZjoEJq5YhJYeNN8emWZ4pASj3uHXYJN1MUESNpu6qoVkRg2hC9",
  "key23": "62MEFiJfV645sWAFh8tnwhfZFnfB4tcgnn82G1FuXon6ySDJjEkDDHfJSQwDgkJu68BBnhZDs4asS4xtLR5YnL7F",
  "key24": "2VGQ6nRioCq924qmNc1rnaom7Kqg1czBA1uownLgZFD1BXebrhZHXfccPqaQQXQGKFTSfZ4nXs5FCTpSFw7NxkBq",
  "key25": "5KnC9UDy41Wv1JTHRSW19yzwr7ZpAyWXzNQe1FqEzgK4JmVwiq925hpZRYY2wsctP7HAkHmvnwgCcdHaieaeyrqd",
  "key26": "3sMdqUnywVk3CJRjCtnhqJTDwbyEPtMyyaPeVdLsLXumtcUX2FSYCbkFcDYVmkzeeRXtC3YqjBLionqzNpaBiodk",
  "key27": "SnRJW9tYJ77eVHVTguMEScYkG38EDqmKtyUX5X5DeDgawz2ewmNyw8ywit13Ta168Q1b78ZhoLC72X8viaKwweE",
  "key28": "4y9aLViY84PboazjNUKTMcVzRV3EYhyNDh4EhJf7d77gwq4KffiavhtKersJZndRJGFJazXuNktHTCUsUwCwC9QG",
  "key29": "8FkSCXiFd4SwHtC9Xuo3F2omSLYGFjaNwQ2iN1Qh1QnbzULwK2zQjbNMSERpqjhazm22QJBjsXWrtkxDYKck8YE",
  "key30": "2LRTLz5MSx7wRiVU9zp6QRuwnjS9v6vdUpR2MJhZ2Ez7EVF1niPEGHaqNimWyoNmrVp7D4haKDrk3gv1YxLADQ8W"
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
