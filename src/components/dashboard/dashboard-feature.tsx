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
    "5UiiNKZTWLHND5STWry9WZABofCuhcYgpysd1JbM5XjELvX73dta38gYpafbUu6qDvyC9dk98Er7WCchtEKN9RRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FjKLXvevT4ZmuQfJsYs4QjfTxKWS6uXVL7oX6dTAUJu3mgUYNnPN6fVXay5SDvejmThJEAPyuWX5DbTiSVxjpro",
  "key1": "4p2fn3wWD9DnUEQhzrnmoVMMSX3uE1M6RmNWQWu26LbWzqbTFd5aPo2ve9Dg7kVmtQfhpXeMyAUrA1sPkMcbhwX3",
  "key2": "4YT5mgVEiAnvtzfLhcK95eUNFQAij2ZT1MsxtdyfLjjYj9p8oAgWCHhdUWoNqYJ3HNV8epBGjFavKYnjpJfoYcTZ",
  "key3": "2NFj9b3yyvzHk9SCKN3JK1694KgCY8QJjJ2RKYUL8oaq2ufazWzpb4Sn4En8m7MRhqbwVzdA8Tqft4PBZ76QeJDF",
  "key4": "2iqah345iuhVW1sPtHhefNqMVCH93faCzrtFUQ6ZE66wnxBiqRYVQCr24n3AbaLVbiiBL4QA3GhT3nTf9CqhV4As",
  "key5": "2ZrhcHGcgkqs63StC9WNhKGxLsTHPgbJNHi9RuZL8gBSjJfw2un8TFbjYFdqw4TJU48Kpe1gAZesuA3qD2ioWXvd",
  "key6": "3ev5LTj4Jd4RaWbiJELPPVJHzCUKmUv2fuiKr8BsY731AtbsTvJ9iPqPfyVbrfTAzqckRjfFse4FSjXoDuWVKTiQ",
  "key7": "3vJZ1dxtLJ5Ho5UpvWde6aHRJdEGm1EXe1cLLQoPaJDfvb1U9y16oUrg5UJmzycNPzym2LLV5Py8QAKJbexUvXNU",
  "key8": "nYqJaBeTdbCQwFqPctzpiX7BnQAQey8YFhUGHNbpBCfT7d2Mo5sGUzt3xM1majKD5f9BFjPr2SCLQed1AnjzCes",
  "key9": "52EaHuA6WwrhGaTdWdhpHv83YsG9YuhiJRZLLjUxUCnNfHXxJUQDBCV3rfjwnPAPFEhtkrCHFbcGHuBi9xedGcux",
  "key10": "3Q9pb6k1ik9oBPVhkLwQEysMmj5hVCQ4fkjwJ3P2CM7Q6u47KEQU4wTGd3ZnXRrJy6x1dZPSFifvb3cAUC8YbPRG",
  "key11": "4SboaR8UeJH2JHQdUVXyeMzgdHecaCN9iGc9puxQyWTRQBLySut2kynEoncFbwF8zyzaYFjFXtL9ppysuLvhELzU",
  "key12": "3demFttZrJAXYhxHbZcWhRWBgRLpRjtWuH52qPYrJdy6piBFDpz6dYULBqbp6pKazj2R6PXyDh72stpeZEqRDBgx",
  "key13": "5rmyhUvza1KvEDSi3CF9NNRFinx6fN9r36aXiZt68zUKtNAZeTjfPr9raRoNzNNUj2MaiW6XQCGgJnETEGZYX2aK",
  "key14": "5bnB1pDtgK5VqWqusApPrpkcg5mdFvgj6QBmJK1cJ2S1JFo4Y4s9jddeeUxUAY6kDX3fP1E9zrNLnBZ96ue4x6xN",
  "key15": "4LXf7gGxQSqBBuozuyrFMKz4vkYAZbfnGd9rNvZrzYwY6FPYh11DkPt9qLrpfN45G7VHRbjvMjjC2ywpTCL7gaiS",
  "key16": "5VX8tyhvYH8hm1diZzZoaK6iY21WVPtCEuJJhF1M1Dc5ZgY3TyWiSjC9XKQMk5DiURm5r6rBx9swa1Zzh2s7486X",
  "key17": "3Lm7B66Z3eAvFXNDLZC2JbEp97EbD49ydvjdibMz7wfRqEgsHMkSaDC6YaPBSHSKSaNv7ZsHBLjaEwQFKYvoHwsk",
  "key18": "41QgXJzUDSnPMvJdXQQiVEJi3xGqcjB82LHGRaPMBJCMBSCKmrKdZ9ogEP94LWWQWQ7aL6ivsRpmRchHXzj4BZKo",
  "key19": "4GyY1NztYRKXuKYHzyQv8ypNyKXsZbnPYZ2Nww4psykVC4QEhnyBTdsowf8qXZysv6EUsfcSCPodMBoN7eXg5Uci",
  "key20": "64b7LeUeNpTTdR4WH7S7h7Lh9vFGcqguWDz6ehirUra41rdGSvoDiHSfy4LkdPkiARpz9NTWCw7uf9fYQDfEpGWH",
  "key21": "2equfjRKjsVhUHWkcWVZTbj7xRBHdv4Ry9ni7vBbK2gjxzmLquxv6g3S3dSpb7TEe6UqBYGEZ8V5vy53MW9rFNuW",
  "key22": "56F9WoCLwvA2wrsvtHzJY7Rc4nSMq3CXo9fJSWJs7Br4f6wrjW1JnBmF2QGjmbtCWChx2GHC88fW5jA4pwxWk5qc",
  "key23": "3BLH2RkHzxM6r3vnSKuSVrWj5c4c4bKYXLCnRduQgHXD5QfbFZV2tBxsr1Hv7jdAtT2WA5CiegrLgZveoNaGdym7",
  "key24": "5hveM5QtiGGHruXtpkpUvMBMWujiemJvawL8nDVPm4hjwzE9Q4437PcvhCcGL8GS4SMAEkeNCcBPJVpjfM36tfE8",
  "key25": "3qEzdH84p5NcdF7kfMkViMrbNX7zbZrP5NQFiZx8yKw7apjCRHJQqjS9JWjyWokSn9imkxaLkACTm29aokp2gQNh",
  "key26": "5Ze17NwMvTcZNxHKe4LpefXsDTEAmZLYLNuVf67LqYHiE4KjH85vM9mLvN4fHn6Da6TcpKq5Mms3YppPeBsM61sz",
  "key27": "5obsN9unqQZzGRfGNGWMBH8AwTqCjy5zvWaqMoRtrMrTBjv9CVVj58VBXuUUtRSHmziwiKB9DbLULqX3Fhe4R7L8",
  "key28": "62r3n7vtG9sWR8Esku7MqPF9fsCcJzdnhq9S2dacN4ZWpXgCx2mzWbM4iavJqNj8UdEaJizssXNTWBUt15Zk57a5",
  "key29": "4H1usiKhGYvnqXai1r4PoiyBvirJsh1gE5E286jhdkKYMyWeaDbbKwGdQuEdNouhYjzYJKsZx35StJ6HDAwHNJiN",
  "key30": "5dwui9JPdauGESvwUF9TDyootRnQp6JXi9uMfHTP8otXjvhh5QwkLFjxP5zXqFXehBhs5rQQeSSfAAH7vaRH3biv"
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
