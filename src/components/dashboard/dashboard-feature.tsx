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
    "3gGjZC9CSax2VqyN1hMsrZAzRXC3dmhqMYAAFVGSDDbcA2cYUnhh5thGewMZR1JvQ4NDaEAFH37NwD4io7gHMh6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mpbCQkFAW8QRcN3Y5k993K5EuB6HErCrM7jhb1V5GkBWwUT2yq45K6JPP85LJs63sZa4YL564hrRM3oeud3Pwn1",
  "key1": "2YFf7dSET5oszvJZ5yUZZezAV1CvKB1Meb3LgzUUD5kyMiHWrtixZzzP7jTVp8XZH47ozd4YcLTHQYGEXcSpwbxT",
  "key2": "4e4Xxe9bjDas7nYMKykrGKXDe6ULPf9UFdpwENqCboB7sfm25nt8TC7DmADm8fJnxgDQAhjYqiNcm3yoks6th5L2",
  "key3": "Xs1yftmefKbNcqxhcH7RRbBffpqmFbkBPyYmP1pFQvUf6aHDq31XuSyoWwy48Q1txTipyP73Z5cS4XHBVH33Gzj",
  "key4": "5hMbBKezQRCx6D6QJcS1udgogQQDmPZPTKw2HXD1ufoe2U7j6JEAyhtwyctemUAremP2ePWQgs4dezTSgAaCGUhn",
  "key5": "5bAafQ7rXgkdhrfyPPNnzfSXNf6V4AT72XizpnV15gucJdCJ4QfdjVPwojyGK5Lu82vu1MTaj6QS95xdGPFA2yQi",
  "key6": "UpjtYZpy8PZ6NtikwvJumBbg4qVbjmQyQrmx9PqPWx6paiNviKtrMW6PUDgQz2eciWweWMRTSG3U5Mvz42CriHm",
  "key7": "28T74iquamRePmK5CKM69L4QfFYxXygmwgYyyPkXBQryR7Uwy8MZ7bCS4yPTdg5MivCHHja8gxD8o2gjCyHDWCZ2",
  "key8": "5CHvqUEhRrq4kRP354rWgkgGVPgcXiaeeGq4irp6NL1tcoaSiHE8XkiENw5ft3tYt8yDbFgmDZTfUKkwB5Wg1xHw",
  "key9": "tzhagyFZEmKXnJRr5K6XSZRcA7ECxud4m4qRr3xdG6BeRFQryGWNbcwEoRmruEmrgg95Y2G8WYYuKnrFJaLs59H",
  "key10": "2gmEhDvCkfM8Y6bYvSHpRicaAuNgByuEwxWp3L4KHNaCSdZpHw6tRhzomWzCDMcTXQ9oLUppGA5XDW6zWU8YSEyb",
  "key11": "2ut8MFK5PeS9sxHckUzckHTsNwMeLTawUiH1ChNtYE8vEdQdK8TGptSwrxmvkNSXSv964jsq1PJELAiEjP7dJw3y",
  "key12": "2DZ3h7LXgQ6BahjS63mUNgaxoyBin9odB4UvjFy79shws2hraowA5DJabgJNqTiL3k4XmbMms8CapoKJyKHN3AC9",
  "key13": "2B6dLjBz8y2hk5mBgQDdszEPLpNkhiug74KTV9E8px82t9rhsdqLNsJ4peao7ETprqTg64wWU2MNDfvW3Hfk7pJ7",
  "key14": "31BReZp3hmcj1Jxwd88duwo48wqrRe1WPJKxkMd1tA56bGPZcUnBTCgFxh92WDkwCTy4ASGGfB8QZdHJG7M6sn8f",
  "key15": "4XSkKdqgbRW497ewvRY8Fs2TU6w7cdAAeRV4t5BuFSAsqwFHnKBCfX2kq1BuMQKABPtzBkeQt5XLn4o995Rc3GuG",
  "key16": "3pzFFNEewxSRmrGYnLxXzsQ5u13PRMQuKoDZWEsVBydKB94U66j3Pjr4t2BQYq1RrWBLqmT5v61rLzHY8JdEB17R",
  "key17": "5e8c9122x6eQNbMjzBb3Tafr6FWf7557LTFYCBThDodrLUDopmtXu8d9pCEsKi4zaM7McBFewkAb1diud8kR5nE2",
  "key18": "2bEtpz9LgJBaeLqiaQX89bybXrgzVRqQqdYoyjqLe797yTujeFGWmX5hcoUcrLj3TcWW9a3WPG51ECXwj6qUiLYp",
  "key19": "5EzMKhRmVE8ooLESi8xA3D6LpcVzSxdDvkfFU9WfpgLXLA19LacW4AC6wzdgGCpyFxXk5AD5gPPwVLajfRQzz5fu",
  "key20": "jf2JQJfupsqd6RWb66JHJaWFiRAbxEvsHfRdc8TQF7nmRBxt9ABAuuRqgKtkJYZ6T4kAqRsDvV5QiXUnematL4f",
  "key21": "4aprzXfvGBNHGMJsMiYLkLUkoughjLLhYXwBBA3NjEbct18FYJf9hnuXKh8GNxqCpbBwxGrB8pQkXt1W5SJENULj",
  "key22": "3GbUHXs5MS4R5AirP5ECH8JU6iJvcb2z6MwM9Yrq4aRmQgttSAN9CG8iP6cPrjkGzw9CcMeGs2cdM1KZHQJpnvHB",
  "key23": "4bhyAw5XsmdNE9TieWmab4M7NVwZQGGKDNuCNTaMqa4akTtSCc6axKjpomePaimUMNi2DW2uaUJUWHtNwFzhufSx",
  "key24": "N5tYTLmbHFWhxJjzhBogZgr43Wb9ygde8ahVCP6kU7Le2cPeigwEHJSsi7YmWo6Me5Xrxjci9SYmoMX8tTGtgkr",
  "key25": "5fCr1ADm21kTGshZyLob2bZhnfBK9vHHGBXskmNv5YMwX7o3JrefnrDcDCR3t34QLXvX5VEamTj3CLZYfpJfyLmj",
  "key26": "61vdutaaiRhqWvoZq8sDpCxbDR5r1oWYFqMLLaVAxZdb6w5juddnLzFUbQzueuQy185oUHCw6RrPbgNet58jNT6Z",
  "key27": "bAVypHMUmNv4KfX3xaNjWwjerRhNgU7Fpz2emWsFgpb2GjEfooyTQxiqumXKJYTE4U5FCoCSzgQRnsN4GvozGBU",
  "key28": "3KNETU3xJGdTHTvao62cUmpdNyznntMRb339qW6bwZpBeHkgWHHEb9ozXv27fdtndyjwaSQ9eJ8RNudG1SxvjvCQ",
  "key29": "2JxwaFeKFE8SnxN7LLy7ZcVoWGRKwjXCGTH3N224cZ1zg7CS3dubJ9gz5qKaKLHKQJAqK1994Asc1K2LC3SywMhX",
  "key30": "5HGT8c3RsJQb6EAih6Ah8NU34abuffi3q4oyqFJkpVcjvqb9x7AvEGmUcBegoxTzcTuZVXrjWRvsHBKF3Q1c7w9n",
  "key31": "4sV6JmJRrFsev8CNowfh4jDXgRURRbMcsVXA9s2fTKwHFWuobXNaj1AVv6s8NV7JLBDG7WNnzuksAKM6MaBDmGG9"
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
