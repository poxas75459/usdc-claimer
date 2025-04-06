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
    "5VwGFSsVJF5S8gDqAPxs9DBiGWXP6ycEpj5QqgR8ZCaExBt2RxfyRpHNPXvr4CyQ6ZUaWkJZNfvEHrEBADHN3rja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y6s4vUPQ9NqxjfwasFvLPHBE8uLvN7SqgENGLyBhhEbaDUCbccpRWmeCGhDSfTvern9E7KXQqpEhixsEJ5ph6cT",
  "key1": "5vWWZSbjvsFrmYfCbqyCwCghXSjJhpF9Yk4q1b1RLGedWGfGmMPuxjzXHcLuN8FmLQhesmGndBmeFhB5xMiHvGEb",
  "key2": "5MeRtjBvMoUZQFfkGSKR9cGPN3e8Z93j17xo3PJRnDariTbfQ5RTDfPaEZaxLYNQq7J4KE7aZq85Aq8wRfoNHNE1",
  "key3": "4aQ6RRAimEa7PQC8rgF39dEqVwKWgLRC3vi7EYKJf3aSTtpGpkCKkLoYiMLujvtTZKscfDRS6ojoLpkZfQabiU3h",
  "key4": "3TADzMGaoJu5XfpU5ew4VMuKmaGBzshx1p2HxFvThwDwEYNBogbhbYjr8wDomUR8fq5hrb9PJjWXCkYzRj1JDdBy",
  "key5": "AaXdpAVkLPwYYnSsmQMZPYHj7LPqcF1nMxkjf2veSyb1wYHYDVeXjEyxpwRGKDwWBfK11ws8WNVBsRbPPhxqGSQ",
  "key6": "3cSnSY9fY6SGppH562EXoR9zuW976Qwsz5VLaVsB44SQH1XKVRAtwRLLvL4UWMx4UTms5f3ZNR6c2s3ZRi9rCsH7",
  "key7": "5eoX87TYCd4UwUcsspp9RftFCrF62S5W23m5iB7G4mHLFGaPucX2GLZLYAbDHaxMYNN4R3aZUvkz8TDWEKqvHDHL",
  "key8": "3X6JWkDLfiEKKRgifzpiD4tJ3w4iVmCZcR1s7Xz36i6jhvPLVBo8LNcS6McSftS7LEESmJNb2ZYKVAhwgaCpjnUd",
  "key9": "n18g5sgE624zHaYadxvKQaHNnFCR78RqEFe3aRV5bzjGK7siJPjmhbFzmBuwgxmoBkznQJMYhC9WWKV3gbV1G3J",
  "key10": "2B5VbedU39ZF3idnTEozEU5Ac5kmSKJpbwtWCVDfSKnCRx9sD2XwPEahfEStKGP11CLEa7K6DDr2A6uBqyaaRqGU",
  "key11": "3VSYwGqxXvUn6C7HVhCpiQz4znSBzto4BDw7yv6Ups5jsf5fVmUeroXNp9hGaSoEirxvJcGWSxgPLCmNW8UHPRXX",
  "key12": "61b1qEhBuAdMqDFLhjgRkgiggHDCXeqPPzpfgExkfR1EhUSbRyJhrX9yvzcAG9iyoc1KGPK6Yd3DvoGAHFx2DLah",
  "key13": "2nQ9ckBdPDUFEHb7ZPbaUawDTLbxBgWXUrHPe9b4Ck2oDe5XjMUe4JBx8D1FsEU8SazEQxYp61mP9PgzkQokdCQb",
  "key14": "5gNzZWWwpTqFM1bhbrnMt5qTUbEPtn5pSyCgfF4dFtp7HJ57gJL7Sus2gCfDWxzBRvwCkqgfX4bXZo9Q72Bax3D6",
  "key15": "3kdRranzQyA3PNC5HZ8WyBbYXqXdP8AV8kLUufVnH72nVAB4LFT9qMtGuVWs9JsrZXAopHvmKcpZDZgf7eWEBN6u",
  "key16": "4jzoPY3G6cGfTsZX9TAprQuwH36RxHPLHDUo2wQPnMXrMLsBxvUrF8eK6W4ai7WCQyGxt6ZTczhHYArHqgjw9G54",
  "key17": "3Cn9JmjKgFTqWrvbfGbxNjNvtokZsxJEEvRimG3nPL7WuXzVWhFrzLB1URR4XAhxpAMYMFPTwYbXakcH9peCFxJ2",
  "key18": "5xqbSG5X6qXDw7RtbWhQ4ZCRQXDyWpoGyhszj1GwvMuasmkuZHDkgRgsKREryLyCuAWziy1RUPz3BhZWtRoCnsxF",
  "key19": "57W8r9g7SZxNFJY9KHjeY1f53MfKmY9GW6QnbUsFuCpLUjmX2JMgVVsNk3zeT2fkiYrkvJyeZavkFvT2tks5fywY",
  "key20": "51GAiK8SKDDfqzrX7VZvAJtxbAMEEjgTQpLeLC823bve74jQwnDtYkDZRx7Cc4a2J57ger8GZs83GEWcYFnjW49b",
  "key21": "4ksAB7BNzTzyGVAX1icopz3Y8NCyBLnPBQmw6ZLhHCYeXqvF5FL3eZx3JpMH1TWtpCqFbto1A8FW1KinMf44mEB6",
  "key22": "2xuX1cbnwWQUUWQ4Qbd6v2ZeP3JDM9LmqGofsD3b5gC3cKpw8thpHJtRsbRfiZaM7tLzojBmZmga83iaUAU48Sec",
  "key23": "2XNyH6WR6n4U4ToeEFBs6bQcUQqZPVJrQ6b5m1ZDp6HvR4TcbqoNvwBAkX9Uff3GZjrt9DzwRmgz8kZo3s3fY52y",
  "key24": "66SfQC76CntpJDYi8JygyPCQqyvJbnaYTfo27R9qgiJQMMEH8Z5gcYLNGeJQgmsanSt1ZF4k7JdnF61jBbjNrXh1",
  "key25": "2bUr2hDALwHZxRya9L1z8g8r6QKFrW6xyhMK7WfT5QmVz32PGx3Cs7wAVJiGUcYZAqCxzs5RBgmFYRQkM1cag2D9",
  "key26": "KtLHSaQ9Yq34aQ5BYxeVGABRZfrReo1pgdFPXfL2FfW4qZM1aLsA9VfNVjTdKH7iKKfgtNFvVcHyjnNAzg28Tb4",
  "key27": "4t8gBp3PVP9o1gfcxbBUWUZM7QbKtQGY2JdZABmVejCTSJrw2YqGegKhFw2kGtv2QqWCjc2q6TtcjTYT75GhHUdU",
  "key28": "4gFsZhLiF2i8fAW9wqT6r13iJhTn23gykC4y69d3v5SYDtofcfuiMQ6LTgiFVtDpy71fhqV8Q2adQKvxcKSu8aE5",
  "key29": "31XuMmF7NziFfgJ3h8KqaECbK2PUj5JzKtVr3S63ognYG8iA7P7VVqscNfS9GRYjWVAtv4WV7bnx8h9L75inNfVb",
  "key30": "UPuGqkMGnjGdqLyGpJ1GbjQwcYH4VGbBRW2QtPw98DBowtaJcJZiw729yoBfW2wEwyYQqMvoGL95qGAmKQyH9Cp",
  "key31": "5hSjmWXwNX4LpcHURTLdPNCbEhjXCrzKCkpk22yj56vBsqWBZ5RoRSE744p4Uqi7SbZv9121aWuQp6iAgo7WbEVW",
  "key32": "kfZraFAqNAxdGzE1tANLGLcGomqTziZx4yBJEvKs4bGy5ReNd5Y2dNTWiWH5zCRnUxCX7ivDgeHB3dcRBwB85GM"
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
