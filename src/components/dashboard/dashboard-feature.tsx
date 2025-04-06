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
    "36gE8RcvT1YMJo6kzUyC2aWUNiCtgcZxjeuF6BZff4YV5TxXwAqNq2YqB5GZEaZtxuZuHJuiPnMvXMDqwHmUADVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GPKuu3bHcucQPzBeiKN7MPu5NBoVd6bjwh9MtK5eTo5WWd2ayzo5vhU8Lrr7LrQi84Tv2yPxKDd612LtNbSWsZH",
  "key1": "5JMnFZnoCMY9WuHHVXCoodt12t4CPuXYrFtASkRnoP5qGky2UvTpoBPK2FHag1piHx2gZNJMCtzerPKeZ7uQSFnh",
  "key2": "45MNQpNPQxC7ia4XZhmQjWPwECexui4i25Wgne2ZPrwiNr3RXFqzKjd53jcgXyV3PBzeAti5Vxio1eF97JFyMtAd",
  "key3": "LuLig5bP6CgXgbFdx7nusRDMDHZzC4TLJP5xzKaankK9XYATC6ncRFBbpqoeX7iteSQiS7zDajM8fDt1tvZTmdf",
  "key4": "5EJ2zV8TWKhqmgG2s3Y12zHNkBejye1juLKzxhr5xCBbsYfWW2dLHXWcEA4LLXTdLQjxiMTwpkPKSDB864vVfXyW",
  "key5": "2SMbC2XssymBaHGFYfjpcDfqtaQVKfZwVCoQ1XDECvL13gqMf1pLQF9h2da7xfZkrWxsk8A4pJJc2HpW1B6zbwua",
  "key6": "4Q81VEUqci4bmmMTUCtYT4QzVmKupGwST1ACZLKgWWiECvhzsDWU8yQL98KJPp1X4A1dqEneNgyFv5HsGkPsqwTy",
  "key7": "4q4tB8oZ1TSdywj4u4W13Yfc7CXqiDtjeE1EKueGPYbn8VwET7U5CGxt8N12VMiZvr5xUy9oYaw7BmkTcVJyoxdJ",
  "key8": "56u6gYPtQvK1hFDB2yKUmpAACdjsYYAKcHExYo9wBueXBtX9wK9J3QnhEYSDhRiLTDRY1vCCEr3YLJatEUEe9AJu",
  "key9": "4rPXkA4GuzQFDozvmTPdvsdCqfUw1fdPGibWYMXbwLRcsZd7bKmR2XLVWYYRfvSVkz12MVzhYcGEzD5yZDJqV4YQ",
  "key10": "5hvbU7cFjVdeqSAA4xcgQCXL3GTRtCPaBV4TwFCVLkydECdMPf5k92Xt4FYMcyuFqTLpWwMyjxVdViRSLYvqH3xD",
  "key11": "5WiAm26rYQDmnwvof2aEXyCchaYJE7Rmbontmhq2BxVx684ikvXJrPYrBdRJ5EQT5u9MzjwfpkWqWyU9LURjmMMU",
  "key12": "5cEXH9KKa4kNifLCQak4RGRRdzhdtSPwzFma8GqccCD1Xu6Hxq1LwxxqF6xaHTQa89vgz4UYQ6jqCdb24okkk96B",
  "key13": "3HWLWVKtMsAABLzXdY9fQDHP5bfTj4YU1bG2LdBiwWW5zPgv65z3X6TPgPNvypEXNDT2dMYFXeZXqxtU88mY3ZEM",
  "key14": "47adKpm9fGRtWhznRvVPdEWGtdSLcu98FjHcDc1WrNsk59JMDm5gVGsaBJoVQEsMPLdn41DQ6nTETrZBQwK6j13j",
  "key15": "2VVqiFXURkkJZb3kAPXeRn4GfXmPouKv4RrNLDF8oDWDxtZiGHy92ce8gj4dtmCmMVXP8dXzVHicpwiy1oKb7ToG",
  "key16": "4aSo7JCbAtLYtHAA7HVdKd4SvZhAWfGeKyjuCg7kx6DyogVd7uNv2dh5rMrfVBQRUu5hPN8hT6bZuBCKQtuVQo7p",
  "key17": "4TJ7XqxTWS7NFQgipm7P9ZP4gnaWEkyLLZcVrhBCkdg8N4E8Np9w375BE8ec9j6NMtXMyGi2epVJzMTMAVWEDv1g",
  "key18": "2bsU7PeZdbUAjBkL2zPYGAT9x1AyzAWQPv1sNoUGqC8FkhCn2eAu8yRWQspWjP4UcfJY4TSb1bpGT5prQpVWB2ka",
  "key19": "4JUTSmwp2s7cTJotDVBPM6SqpzoSZvvUyQNnb5KaTiZf1WKESSAbzfUUZdhLchG1c5bDFq5L8iduiQjkW8U9oZVy",
  "key20": "34k3VryqAbSHAa8thw27QyxZV5GXsoD887agi9HZJdqKFijL9sEvPxLzm8zijKCJwwLB7ozghvFnQFSrcrka3bDn",
  "key21": "57LB3XFdRk5ZpScdQZwwgyfdGJQBY8a4tA2LuDLaFf37vonmoGVNTH2Z6HXnthDaJbn14vMnHX341tjgHntHDksW",
  "key22": "2EEUW26i8tMnwJ3x98U8xp3F6p6nLfZkthTzFA1pj4Jp8w3ENjqM9XEpvNJcxTMApQSPSh7XGfBjDCrsew2kxnWY",
  "key23": "2gQPc9Fdy7BTcbpBcetr1vnW2HJBLCkqhvD7KtGMbtpD66waYPGWYbG4tPEKY1BpsjFBf7238eadDY3avyN5WWhd",
  "key24": "2hTLSDEyRHK8dBktER2Xy8AHmsGtj6QLoZc485YqLb8p9EE3EtoF5hbtG38dJ77VBDPQXH19FjjG951rfn9VtmeA",
  "key25": "45NMzp6PueiuuZpdrXVymRPwnwAPp7TmztDLJWZbjWGLTbBZQiKXfeawQoZxT18MTN4eS53rBBjabjPDRweLeLBp",
  "key26": "4k7DbB4Adsc9MhbWUR8wfnBcLuBLXPVS4F2jD7ksgrQpikqddJfbSwfpYqwA9p7Ea3seAW5XKooEDsyVfYRig7BL",
  "key27": "3TtpuABRv1ECnk3RcCpFtG6Q6XegT618L7Apierpb2rYULQxKLPmuxjuj8idjZBkE2mzLGU9HjRUSbDJKxSCLRSg",
  "key28": "4BiAoBmU6PTHp2Mi1VqmPPqxBVrEP863LFQN5RVB82XHFKBAAe24RS5uzyQJNe92wvJTDXaM1MwNGfrhnRaAh9DT",
  "key29": "5GmJNYUdXqrHmugWLjX5JwzTZHhwRAam2WPEgRwWFpB3a1q1BppnSuYk1HLW75hEjwNJW33LACH5WKt3SHjKEXUY"
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
