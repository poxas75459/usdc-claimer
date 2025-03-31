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
    "2uNGxJ3RkcAPMfWB4apEjxHY28xgDgUKQ4BrFcYucKLNHyK7yyfY3bpURJcwoYszvE4A5bdJfDNn8RQEv8FW4BR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66BpRWaMJnYuFFqCriE2G93FXae5Fq8PVWvoGPTEuqBGxrWZTnvf29WkPC93dwpC8Zg6JAZ2CTSGRXrV97LQsm2t",
  "key1": "48JZMAn3Ec3rJQn9jBekfc8c1WiWfEJSHJ9bfYVWioP9sdYv1J7aWcPgoaFoPdC6APhVPhNPw5ciKyTQcFCsnR8Y",
  "key2": "2yfkwgzUiqjyhqp6UtPPsm3K8cebpVfSHbnWsHweZR356H4KnDFeY5BVrSmJCjetbXiffL5MzYEEGG85gYrttXap",
  "key3": "3MovKNnmjWg96a9izDzQsGvvn4hSqQJthopc3cNeNpJ1BbimJAGd9mxx88qHqyvc4yCdcUsqzuTschctTW6WyHGt",
  "key4": "3HmevVrqwVzbQFGgDfZavETXJmnY29kfNhRSHT26crUFFkPAePyQfM5v3gLb9M7VodPYdPF9vDmgP6ixPFZ7Ksdt",
  "key5": "4eZpGFqpJgvQ5fkR7BcN18pvjeHkyv1Yycia3Eyv4Lh1aVZrwARZa1pufB8KpSFPomLtrQ8pxP7pfsuDGck8VrvX",
  "key6": "o14g8hXErRt9SuvVLqjgakwYYKdnuFk8FyeDddhvsWTk8vmhgg6wh2dpNmuAhDga1TJ3uoFdsDJF3gQGAoy4vk2",
  "key7": "5jtQWmjBfof5437YMxeKxwvPXPFZF4k1XnG1etU1YXjLqEaxE9owYkquhRhc3XsN254qQs8it6icQtYk7eBGoGwF",
  "key8": "5KbRPjNhhrdnF9qv5yR5WuGK5pzRSAxvDhQJcozobEnabZfx4kjpLcxUe6WragMQ5p7VaiS4zwoKg4EcK6hUsWgM",
  "key9": "5qGz9XASeqfmAGH13MXzo4WKeERwRGMSifCnQgsCC1DMoc4g2JWDnQKWosGkLCdT1rnXHRu7KF5uqk63FxqcFF1j",
  "key10": "2QLtZJrvnupvFhZryauYtGuCiyg6GhV4eYWGAvWZph8soEmqxew3atxePGaGfwTSEr8sRVutYRxnqt9wFZQKFK53",
  "key11": "4uwmhbFuA72idUuKkVZ2cTdTkNr9ZR8DxD5zCvMyqEKHd9QUSS7tNy7JvLKYbKSo2xXC6EJMPqc4614ErjbJxiyG",
  "key12": "3W67zuKdgc1iF6iyqLmsLWe4vZAkSvWSo65QdxSMryrgZXZ9yKNyK6QU663qzph6tFirGBaQEguigpSjqRSNsqsV",
  "key13": "5KRDQ5w28KPNTwDNXR711uAJH7qxwFqY1tzyde8AD2mvzkuFAKin3452uzmGMeyHe9DSzJQWwzqpV9oKVNtCSYAL",
  "key14": "2MyP7gjLcUXcnjkmC4pEqHuuada8G4kPnRRyGuDcVUdJm6dXCG83jkuPhigC5rCfF7N2aRboL22v2SccraRuywrt",
  "key15": "4XmdXZTooPw1ptf3qNmbakgkjK2rwymJk2Lk9vCB2m8u6ZjQyyj8jtNmg8CPG1yNoccLQoX7eSnzoxNEasixE2gP",
  "key16": "5VGd4YWEZdg19j7fR3rK4Bqr86S1s8y6R7smsH5oSZrghn2i5MYgvJXTvpepTXeTJhCGxq4irZVZFZuf4HkFcHkz",
  "key17": "3LHDR1gWgPbzerU1fzhTXPoW79w6WBDWufDmVRqwZWHjdxELUN6XFTYVtts6kvBGu4SMdURbd1fy1xoHenrpHEXY",
  "key18": "5ff7aCqGewJ42w4mCBiYzgQbJYbY3HpnjTQGESQueQKaZtamHSKafhNDBUr1A4iis6sZpvokoX4JAsa9jSnuzP7J",
  "key19": "FaAitFtmhsiULpoo5mBcbpYtWjJnzXktNfhx3ZxG9SKGmtpLyMq3zgi2sZ5wK4B2rhCxqANBdoNwAYsBgUzhHfG",
  "key20": "3wyQ8JKDdeV5vjxsc1TxhSPZVYtsgNCnenEskiy2pS1AQcAEWEbgdyik2McfrWBH6ynwvmcYvwURYdeoAgkNwwxn",
  "key21": "3zQdgZuXZ2Fn99m4bGqunNRCKDZeSFiDrRqANg4tZBhHGRAHBkTmks88yjfcVApKJumcFJwGxc745teH9zma21S3",
  "key22": "4sxtQDroJX9qbwN6tyQgu7DjZHFMpbMakKWEVQtwSdUnq8LXw6XC92JyP9DPE5SQXghWrbiUWM9LEgZqArHGjx2M",
  "key23": "5RZJFUT76KuwXpbzfiKWtHKShmzkennu2gPgPUB4Tz3iadQFnz5xTNbEjxCLYTXB1XgGAn9xPFSL4C7MQqvdpoC9",
  "key24": "3bkzdWh91ErqUA9QFcE2QbzKVPMktGuuD38JmjGdmTJgudTpRFgxgWTXPCCenkrD6uGekwjCUyRVytEhZ54puHMs",
  "key25": "2A71UhEVLAqVmWakySQbWG3kv5StrA2WgsaRSSdQieYFx5yD49a3NDHeoC6YuJWn8kuQhpB3jqANDKzHhGjmUbUN",
  "key26": "2orjWyokCXeE8UXRcWZbqPHVnusSW7gvk1FjpWMr5J3XyWhnYF8TwE4zewQwNa93VLwoPpnJYKHfWR5A6jZAQWKA",
  "key27": "2AkG1oxjDHX7BFbwnPTPjraiZZvp1U4spYAw2UydHdvZ2m3KzgQvdAxnApsSJaJxryf4cp9rNyRuEzTucamWnxn7",
  "key28": "61rcodX16ATvk9QFxcB8AT7UW6AzVRF28hVrzHL5N6TthAPHPsegrgDdzk8cTiJF3pFJX25kQrSnAEXQjHs9zZ38",
  "key29": "4LiCypz1MUGDmDRLWzG42R5cu7HNsdyRFH6YWFoqRumPJF3kueE4H4DAApVRwmhLprgsDmVqroE7vYGXymyWGznx",
  "key30": "4F7xUMQxMwodNXpZCjjXTpvSkkKgpeGgS8XfZjANkJrjJQ1dtfwcd5KRCCxq9rj5oBW8m1BoqWjbBRSaovdpjy8F",
  "key31": "x73ErL1qe3PmpUYpJbbYs5Hr1cNyMr4WPSyoSp56NCV1vXLje6H4zn8S7GEfoyzvzP6oJ22C9XVLSCCFLyYHSLf",
  "key32": "5QC2fmjB7XkEpNtg4FrdiVWAPZD588WHughZnaqkAzLkwaNRWuEvBCndwitvCufd1R8HHMEUUK59eNFHdkVbFgGD",
  "key33": "5aocFAQChvQTPmXo6u9v5bmW6Nd6AgvYW1uyvzY7N1Gc8yEhQB2ssmbQ7a9Kwq4c2FGFuyEDBVoA6T7qM87Bg2Ng",
  "key34": "2E2TKGiqa1UDdnPtBbEoFnM64tDucQbvh6FthKJJJK2pRE787hdmqRt5hyGqsvmwHAaZ7WmQ73PtJHFQf5RNBwcK",
  "key35": "5MrXPVojYibmMadxtQfTj2hMxqZJMnon5Udunz9KdHaghPCvro2EGM8eYNKcmh4ZrjgZkucUNcAo2UokK45CPN61",
  "key36": "2w3FeSbGnXNhHtiwkRH1BYguQungdUvW3nkdeB3cRSAF9etK6jXcYnBf586yoyaYVJVqyATh44G4BUgvkXUMtQ4n",
  "key37": "4WtBUgQUSqEwipWcFQB84b9sYBZq8TAu3ZtYFSvKVVr19HrWsR3dtCZnVqK7KdEWqSPvpktfnZEA252mxe49d1g7",
  "key38": "4MCmiR5aVbshUUbxFdFvdpvyWzCwFbNtyyYbRfPDbZsGwtjVNLY36gvqZ9ifvpn16neDHFvxGUpoyoUnYJisYwJz",
  "key39": "48ZjxkTz9tC5Wn2VHH6RVaZc2Mr5ZaMWCNk1r3RyHYXeprNND2p78LQG17udroHXd2bQgaZRT8adkW8YRRb5LJQj",
  "key40": "3FZH41b5wDwqrKBjK2iYEVw7o6BRjnnXw5KVAkviteG3W1HHH7NJByvmU6abmD4s563t65z4HWa4m1QhyWbrZDsK",
  "key41": "tC2D3SsRqFNhXD7JKahxMpUyjA5FE5vNhneWQwWETa4V6P92k5Aq72epPijH5e75a8WrS4z8dYGegBGoWnaJ2fi",
  "key42": "2UeqPrvkeVt5pCGttQZF85H7P8apADG2Q9qD9Q1sxyAKyDw2bjpAAy5F4oocer9LSm87xefyMT9wwzLS9VQc4g5N",
  "key43": "2uHudTR4SPUVhjAapDiJ56hXPmLas2GDPpJ8kgaBMJVAAcGaYA7kwDHmgbYXaxQBJySgGzdGKzeTC6paJVPGeU6B"
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
