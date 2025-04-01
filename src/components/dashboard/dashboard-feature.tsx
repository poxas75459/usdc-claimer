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
    "5phBjmevYeDx1VbxwERY7GgQmAh4W4Wsb7he51HfJGYKJL8imnvWYtQy6QJ7276H1xqBR7TQEawGm7tH762RywJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rxdNCmh45mYwkf5q8q4CViLnwn8ZyDeFieh2bB1y7SpD2A61K821fMj45YVb9LF2NGdWsBALxCe6RjyR3N6Atzy",
  "key1": "7kaVsBgTKgT5i9dB4wt4thANHRBkZL3vxxYoh9dwzYSRMaNd9se3VmDABxQs1WoachCA3a7exuXPKwG95Dq4gju",
  "key2": "52CKbMTj19nkxdEcW9k5QSudEPt5v5fvE3jS1z44s7maLobD1AhdCg9piXLzCzfqFfnkoWrXjqxmzji3Z2n8nbUX",
  "key3": "WwsF7P7w2n1qvduucMPTszgEtvRjsC1po8bhGhodraftuqZ3Go1pVXwFU1Xja7ekYY88De7gonMrs7pWQGhfYH8",
  "key4": "38FMdAQqdags2mFfeaGpDEP9CYMDGBNe3V2yJRrEiLrqpYt9vcScJqhwrezE22nz7npM2yt48jSaJ3rfkTDmx9Gn",
  "key5": "3PtA3PTWVMVDMUcrhWgxufRQMRoaNAmKiwpm79cSXSvDgyKHrQNh7BnJtqGB9kdEMzb7f7oQGRcX3V4Rk5oiK3mi",
  "key6": "4rTri3sZE1DEwiZGHiuYKqzFugp6Tc4S8DNp4BNMUNCdy3c74Su7PAtY5yoaZkKAP8YkfFNUdsmUpU9BkEAf8ceS",
  "key7": "2b1uFAguFQ75fK3gnnVbkuBChNkrMX8B3cff21oPNAtT6xkChcTeg7cHvzoQ3gGwHfLcCepiBqNvWM1VuTcodfE",
  "key8": "vUqY6iiyJx9qFEtfKsqmKJZMPYJ2QuPtNfPVuUZ5oVHF2pZVPXSqBCJuT7zgASHrcrLjyV7PJPpMRz8VBmkrW1J",
  "key9": "4mwrmjeeougxiVjfh3GY2QfwL9N3VAdKwzz5k9cqr8D1DaCAz47tJkq6Jvd7e2X9VF4Ccwp2kdTv25BaK6Fp4cQP",
  "key10": "fAAPzKWPTyDXDZfh9xZNu5qc1jBUkVQLqBZqEZfYEGebWwFY5KVRcHkqc9nj6A2cYobUBkG7kWvg4q96WjLFLu5",
  "key11": "VfZBri8wte8MtHAQzqJyA66Ay4HPAbFtTw9SoZRiCPD7CPppG59SQQEqecbYDPTF7PgeeWJL7cjeX8YiECoaSpU",
  "key12": "74tzrV4yKfc6zZqJPNCnRyjnUpRpLyDMmmWkRutE7Sh9S229kDhedRUGvHqFXxbUr3BLAmTwZXnFYfzGkSzyxhu",
  "key13": "5eetd7cVzmiYE6gE84HLfHfX4ZPjeomRWfdXEBje6acVjCa7SimahTZ2XQ775AxnbCAetuRW8UeEWXEvC9QDiZXe",
  "key14": "2b2THDsVxRUcbT5CorKkirqhZahLZCB8uBJrpr7nYD7CG3QA5mhrbnbFjdBXdJBNqsYr3UjkDREcrovXhDWJgyRx",
  "key15": "3btuw8Z6gDnMziSenJUbCqjuDuGr1XpEMgm8crHhvRvgVfRonW258rQ7XQeb4WZoLjZrWohz48VCm7mBDDcPYRSi",
  "key16": "5Eb6noYSN94m4Zuf7YhPcyBNQJW6pYxjgTq58XaDj3h3T17p4xLoaRh5MaGYhLmCWFisgTQBYjt8AZnG9tccnQPk",
  "key17": "3vrChHGuvxpK1pJy5WfywCjxhwtRRACSet5g6V3FcWDgYbWqkaxPqX1homY6JmkfyhzQbP4DxcotvLsPwDRR9KcH",
  "key18": "43Y1QtaE762NksM6bnJYptXZcKWRSDD5a7CfbFd4JkhnT71TxDL25goDS5cMvu9Mw9TrTnXHnCdDtq4D2FHwj9yC",
  "key19": "5n5BWEiYG67teGsrffZLaVVW4kft2c1AZcqWUMpbVRzWssivtq2QcYuV7HLH3kDD8ZGSfvSUgDWvapbfLAfFxyfg",
  "key20": "5z4kcucSU7Qr5vh4pBxeL4PZ9fGHBKPV6Ws1Sxs67akBAJW65a3j3CBLHrv4jVdTcnqPvgdYUeHLBNaF4kmc1Uv5",
  "key21": "2foSD9y6EZVHFUGHDtW85svRvP2GiZreLhfYB8VhzV5fTSXStD1xwpFjTWcrSTxdGhhG8MbLEtpBZTKdqdC7FxNR",
  "key22": "3AzMn5YDbFivvNm9mUKbkNf2iqMxqH8Cwp6wWfKmE99ipsjT6wj3a7BioynhaTMXodVWJ7ZtVBkFgZVQhmCAd6d5",
  "key23": "2Fo1EmUc9nVxoQY53jKFAmgXKgZGyAn16n2DxbzMbrkJXmsFqaz2sRsPgMnVKoy5gYQ3xwHs4rDQQ2sprjW2a4eA",
  "key24": "3JicPuhFRabvTjQrTT4aknjXzHQYqNxEnX3b4k3WnVGHFR6J6UMwsvSGtJGWhN7UG6G4x1T9oaW82N4vU1kptbso",
  "key25": "W2DA8MmadrtV1a5R3zztKodUuHQpaMdnmFCeotRQRffTvvzU3RonXTzG4TDzruocDoumy2v4j3emDg3szvzvsGU",
  "key26": "4MLumBi4tQmEx6CHydoXMeuqvMoGUqVtDxqY9Jwb9Yw3pvvWhHFpjbvzwaV3A6fToEQFNsYL1b9Gc4F5xZJmhqd2",
  "key27": "5NEcmf1KMPAK7hsxh6nNDoH46MmLqprfuWYa5PARxpq6SHrRwAHkvqnPgrRDuzQGZgE2i7vRU5KzpvYTvP5YGLLj",
  "key28": "4KofiMo3oGMJgN4Dhjkyq4ApDSpHkJ6otEUCf8PjvhxGwCVVoQjQTzQXeMnqTY8npV3Tn4uTXN3p3GujytnGJVm1",
  "key29": "4mCWdNP7y5fvTe2vvBpZVpvnfzJpt1Q2aGVjinKojxF7WWGddyjWH9rtyrymnVvLAgwimArC5qSzaW1ynijdvBhN"
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
