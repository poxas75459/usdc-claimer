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
    "62NLhHPq6towHbgRbbJBp4uxMChYREUWKSoAJhNLwrk9VGEnyWpsLZyhpAFRt86KNWedLhLx2PQ3grZcLRbCsqu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "679WvppbogzgheXXCb7e2QGQYxb6HwWowU8hGz96LjXv8xJwjjSCQj1k8Ecg3Ft4ibBpTBm8VoFrek1WM6j4w24B",
  "key1": "5qrcP8AgtGqpFT6MjpvLJ7koePD1XUt8KAYjgjQxnGJZDnTByy5nShrXAShPSV3ynzwf7JANCvR6ZXb9XXF3q8a3",
  "key2": "5mMXUAo4SH8AXcYHezVRQ8cVokbWWDwe49Lwagn7jQHMR4pS9XDtditd4Eh3c7mBTxyZKLJ64qgxJ48bf8thwagG",
  "key3": "63gJWipTegtXtEvVnXWZf6jJZMNYdTdZoowDbPEZjJ36SivaKvzAEMnA9AoFegXcD9wxCm7Wsu8DdeXfcvzjctHT",
  "key4": "3PSNEGvff8WPsRFLdQr7V279Wj82WFroR9u8BBaJJj9E34mnDAAXjzDwtdCYoT9cQ1nWxGDAzFjUcsKU4bcenByt",
  "key5": "4nodsnxtkrNjhdC9SggFZnixGt2rWv8vNN8xasPC8FcTNkoZFyBGgG3MUcDD4MWJZsMP17KBZ8nKVZvVBfUpC2T1",
  "key6": "2Gdp64cwj7MibG4wdJRE5CwhzdZBoxqXpsFsRv4Q1xM7tgWYwke52FDYCgMZccPfXjj3usN5jdEYvgEAWdks9RHF",
  "key7": "55G1zJjPZpJQXWmE1bHjawcpMbafMtWYUczumWfZF8AvpjfywiLHW3TmBx5TY75frhsmxso139wsPdPjhME4G65u",
  "key8": "goNTVkoqcA9h9R84zNp9XXhfxXc9AFMos2P7LwA6p2Xpf6K3J4L5yx65UkQc3bVJGMgSafRKU7T7xGQBG3MA213",
  "key9": "Cs5bP58UzTy6k5uCTWnhtQFce72CYbJ861tVUqiALkjsN4Jwj7td9g6FuLWbkFuNCJSSabcJ5JV2hno8iQ2LD1W",
  "key10": "3HKKkcBoDbQjoyTi25NhJx3wFhz7Su25pHQ2wRjCJzGYa8BorJnC3iXYieETGnf1FUwCSsqao8KMrspxLpAxT5Zr",
  "key11": "3osUD95MZ7B1KZkoJKwSi8KsWgbcFy6iKZrw7eNwZgr2MNmsXPqKqqNC2ve27KmeUcGzm9w2MA1zqt8hGHZyTuxW",
  "key12": "226aFddP2QXEq2pmRmGw6hvTNSN9Bu5GreMptQWUZWHSBCLdUFxiMWqS4XQW6dUG8Vi5fEWBE4232fsRXxuwPW7C",
  "key13": "cqfuQhDRX1kkngXCrR5FPdR6vCP6RKLpn7ntcXjs3zPsxe9LA5vfLDWR8WTUQMrJveC4LtwWUZbqCkFrYNb2bnV",
  "key14": "2kwxUxF9HD2i9LB5PWS21sPGmkUo3oFScPrRW8MyfDtr4FALXnhPrSYkTUmFpvQ5FscR1DGS7f5SQSYykDfT5MR1",
  "key15": "2CkALTHxnM1uuYJdi2qkKZr81rZ4FtDsdXRNmLLkqqVfUGB1dkLjJdJFJxi3EuDwwjBWNCThv5PaF4kDoh3tkeQ3",
  "key16": "24Cia4p9iGkQic27JaQZLFY9z2J1DQswZyaycxayX833XUJhphuD2AKimZd2LLNw4XirB5uiY7YxZzmQNHHSAVua",
  "key17": "h1VqEAF6vSP7ojHV6sKtzyCDA9TzrJ5LJ9geoECc6mjYjEUX9jAYzhY62upG7uNB6RdCn2jiyayCebzK5ndjwTr",
  "key18": "Qs4rJJbSWKJxTGePn6Hd91QSBRbrJbPSKSaaAHEoqUTC94mH593X5zugMsCMcgepuD5taezwwy3YXaFGphi8Pxh",
  "key19": "27L1RR1DhyCDiDdf9j4UZKuQYD8FropbbRzrHt2itG7QanBbsSFyG2jL4p2ztPbL1uJFe3ijS2k2LpvaTG89QMV3",
  "key20": "ykmKAxmyASnyfCDExqnHUXZ9T5DGxuvZhxL3uKzoMsXcxrdxDgWeSYdL6MfbhNxkaaFBHxM1LEpYSwA6jrpd7vi",
  "key21": "ft3QqzpipEBMitzYQHzoCTW7xAq4hywsZfUBnx3Fr4Mog8Df676bLkvKV3RypQX68YxVka5hMQBiowmcNFWFoCv",
  "key22": "361bNJjcn5yise9KgxqKDvDebx1VLBhE3nEeYeSPYYFaysFmxQWgHxaNBRab7P4X4cf9kbdokpVtbySnY49BKKSa",
  "key23": "25oXP2wBhrGUdspb2naJARLuqmrKRwMKpL1T5VakGwd9DbXYEe9q6m9AuogoxCJTjYhDA5jvHYrEfsyR494LE7ot",
  "key24": "mBDy3qJy8bKEpygX648Lig6F2jb7ZnZYaxxuWNry6TiNoMF5tqUntXPov6UTAsZvqVPAVYV39pFr1jnT9AanrTT",
  "key25": "57eHFnUbvV7tqGkhNVkJ38TerWwuAURu63bvVkvK5YW6B9mHCNLbn5QvXVUpTMsHF79E2odCqNRzUsodrFsfvfhr",
  "key26": "2TxKoaryU5YoqmZmpuUJ15gpncpd7MUfUaVFUSmT9Qc2XbDFooBu7waJWr8uFDzxQ1ZQHaw913mq2bHKaMZpVXqq",
  "key27": "5weigeUwN56aqULNizmSMwiezeMtP1rpHSntvGDPk3gs67q17p19QLKQs8oPafFDg74qWi67Jde8wTH4o8R7yHdF",
  "key28": "sfbsJHkYU6jZ6R8LKtCA2qN3z5C47LKsHhRuVGbPrSHMt3fMyntMDJBCwvXMMtKsDRxFej6CwJSi2PenFNeuGo9",
  "key29": "3hX9cFwdXfFMekb3cf5FkKFeVe6D6AguEumuV6VKSmeo94LKm1infKxX4RryuT5YzT7sKzYMo3btefxDUFUh9zHw",
  "key30": "3aPujYZnswDWfpA4HFzLHS5tDsNqKAitiAeGXyCK6H5av68erzW4TiP8NGruJGtzpWrYZmMJEBNcCUBAAtAccfR2",
  "key31": "UZgmEBH8FUGamHhzXJsvj1zdnzXqvSFUia7ai4pnjsXsK9gWBWyFyWicrgw8zzc3mhv6zUk6rET91KQbNgnyfeh",
  "key32": "4DbjEQov4yvkGhdGvnaZx28kahzfBtpTrMxsyFcU3m1aVtu4bLdwK1RyPcQu9g4U5rjMbTRzBVKCHWHwDi6ASQaX",
  "key33": "3gCsRBHryQeKbguWYHB6VpVrH4LbLZbjaAHifze3nT9UFdYA9XHWQuD7MP3m5i6BoUNaRNGL9wpLbRcfMSm7QDat"
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
