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
    "23ACgWXbZLznuGDB7JbtV5ThtB2yD7PeA9hfuYEjNXVmsY7gQsHDMYjsqmDe1PVrd1swrBwszFss3DtsRhkFNJSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LgA2yfBU9Dacjihg9csSe2vh9caRR6PP71n7GXUULQ96eb9PeYSkwq7m6bAc23cbTtAGcUcoR8WJvtjCnRe8QaJ",
  "key1": "2zut9drS5aCa4CocohtbVBoawENqTnNthjESgyeGoSfdPCZDnqbBvy9YrpGkBd7MXTXWSNSh9rdEC2qr1VA6eR8P",
  "key2": "53AjqWF3wP7uW3pQLahiH34gKVG4hifMjMtRDnTqubuBy3fgpGLWNcEtrNQw3cJhboYsSitirYH7m8Hm98uNhYRF",
  "key3": "3ECxqc9RLQkP6xzAV8CeWnBGZjbMcjqTbBFQbxZNxAs16fpAhMguQU7VtwsbNjp5HKJ7zdsVrFqDjGty4oS93n1i",
  "key4": "2PYgisvc32VrFfZro5QusgQq9nE8yYWQy3kQ8m8jgDjbw6mDfumk4wV2bfc2kX6eNRuS6SNNZuigKEGnyas6htZs",
  "key5": "53GrLvoxbfHUtPgJqRMEVxUkZgCr48SdKq6sY9c6xhRUomuDsReu8oJPbjvnKbA9BZFbbaZwv52355bCGJnWrBUG",
  "key6": "kA56kHD58g4ospHUjD4vToTYbeF7rzEAnqfpc4PE5e3HYW5xKDzrv3Pxk8q2dL4sAniydSQPXKxLb56UPqhuTWm",
  "key7": "5MX4ysmWrfQmoN1TiBncKxS57TkbVNbZT4PFpoEz7q4xd5ESYgz8BwY3ykqRPQSUHcz2QqyqvBiDeweBFPuXhuZk",
  "key8": "4ygwT138kpSkDdcQMEjEVbCUYe1vpM5Z84tFYyQXVxJNJD8rfJvtRXhm5UjYaERymobQDwoewqBZ9S1z3gAx6mng",
  "key9": "5Et3tHSbpoxwau5TxzV7WvDQpESw5HhrHV8JhtbUp4byEN6NkQ7NgedpFh7AvJzxJU7WWbu1v2bReFWkA5AyoWYD",
  "key10": "4UbYLTsN7SGN2sBhWXLRHwJLbr7mgXtkkRGgyvVyyGAn8dsCrHPQwNm1AsDjFKHKy4uWmmDWhP6k48b7Bbssin1c",
  "key11": "2xbu2z8KUY5e2CH4y7tb2viuu9EdTXswhjxo776eK9pcSuRVfX322Q9dkc5M2GG2exbNN3X2NfG5raQdzjFZ3qdB",
  "key12": "3xBQbmarV4ZEu9qdNtuxuFVWema1VNH7Za5wErc7fW9oxdNbkLBhDt2oDsfCbwREAnPRNvjxRZ6Y3JX8TFKQsp8X",
  "key13": "cMrQKD6tXnas1yc3XbnKshRb1txU8toBHmeg24PmTv3Zn2xMAeR2BUnwyQidBzSJgMct4JBHGqqAQNvXRUJi5aT",
  "key14": "63xN6b76fTSk6LbXhZp7t5oraFVzNcCkPVBSHJjLWiD2tvAixdxVKSkgeoTawrwenyu4Mh1LiFY3Heaq5Jb56pat",
  "key15": "o8AFJVXn8oMrNQAAYfKrDGnghRGHVwGFg1d8CfYrSYnxuW2qu1Guv4gddpTGynDnGd1HwrGW7aZ7LzHeaxN2Nmh",
  "key16": "5Jwx568VPYGgGzLEotD26UpF5ekyHJcusGS9wkSNN1oCHeChqRew5x7M9h2wA2vQLx8NTvXHqqSadjDU6jbrK3Eu",
  "key17": "d9dtchpqgtvBBx499FgGBvkeGKEZjepj2TfWdHZCW2SHnEhbrkpmtwE2niPNPJRn1u18cDyXdmpWnARyXv169La",
  "key18": "5RFJaPdY745HLscviZ5mFBi1H3poZ8gJU1npojGn6YgmNk1uNSQtwEdiRfwLXinuTrLYJyy5Xpy5wmCT6JNADY9K",
  "key19": "5Gk63tZLRp5CAJLBdLx5dyjtPXeBiBhL95Rcqbfj6soVTh9yJPiGozzZ4KHUEzpsCQk9fbyogYDpXvRzXrRovcnK",
  "key20": "EqFcraYJ5Pq3RpSrMpxBi7myDw3NnCSMFwkvvUeXg4sZG3T2k7JznSeTTMg5bZKkJX7h5avFMBRxTD4fzT2iMSg",
  "key21": "5FvCty57T9F9BwtjsbUJpngAVAbTAG6rBx6JRyX5u5XJ8XCv9fTiPQ7dUSxn4qMGbFqFCBNfs4b6b8nyxLXrhQhg",
  "key22": "2uQVQFkg9oLzGFfqrnKGxqe6a1PiYBHGZMc4tgmA9xj172roKnvLmUkmYkz52zodt3NAwrbDzb7aTZoeinFVYqs2",
  "key23": "cGvFXY4ephDXK3d1qkB2Z5ZPvufRfknitHU9zr4ZpZMZGpuxSz66XrPtPB8bk7GVyfXkS8S844zXBQgzC7baReX",
  "key24": "2BVPUftf48rsYY8kpZYvJq63a1diN2Mq2x9g3NKdXR8TS4GmoYT4KJVncWYtmdfj5YSmfMnTiyByjo1T6RTkv74u",
  "key25": "2MZ8811aGqcqah5Q2fj2ihmfCLucHygE2rrJa45qhSok7LSfXUvj8PXhLrFLJW9PQebtucigeQzKq1wQfk7xGcC7",
  "key26": "5xDxLxEAwpKhknyxjHymBTtRjBDbKRXGPos9xWD17uZtPABUPUD1HtRN6ujChpfUTxUeLAT3qjjAgaYbHRT2AunC",
  "key27": "3qUtQhv8o5SG3pPg9GrPQPQQ17M7dtJoDjBK7eekpftNPwJxdGKBejC8Y9jDMmudqk7sKqJrboAVkSxks2k3r8Jw",
  "key28": "4WYRX3d7JArZzu9iXhZdyuWBbSXFYyRoq27JMwyLzgtBGzi8d6hhJ6iAkdpFP2p1oKGDP3HibwqyDBW7W52oaL7A",
  "key29": "5gBMZeYN1LA4HvktXBKLcT1GMvyBHuQN5Thg8Bbdhva3KoBJ6YMdhPYm9STk4H8pUjB5QxQaR2tqr3A6czrHrhT",
  "key30": "2yA8x8o8wUyVXroLTpGd6nteBG32jotagvgbQN9yzuo6SpgjJ5R12QHV2tqvhYjbygDj9oMEBJGnzWxtG9gvmSKT",
  "key31": "4cyccKr7LnNPnAoog73Q2aAchK4o7ZjDp9TNXCpe9TBETxTFfENeZapNQX3S2qJLrbQRmnNMtLre1F4gT1fYVMP8",
  "key32": "57kjTUAfXeP9aU68T7A9rWoUcjyagd3oppq7QwXYj9nSYiS5Ka9TGHDzhpWNKevL4FB8aPgM7VJcvMuSqPuXhrcf",
  "key33": "2RZ3fqChiRwK7paHcU3BTbEjDBNhoWrVEDCzVY5sw5EE4HQXk35YU7RRRYFhvTpy3T6TcnKopCF88RytiTqWGVcF",
  "key34": "4N3X3yEaNmfgwb2WewixTZDJfH89ynvfshHo4vLrbNMRrmRXWBn9tYTvJyrdCoLKZnXbNFMWVdKU1d6PgbupjwQ9",
  "key35": "hjBMwwCMwrfAJeXtdGwxBM18kafb5zksRt5hyDLHBiunrw7ghPqQtkc7neNfSpWXKV5bmezuaYrSSs2hHBNvfjc",
  "key36": "4XLXmpDgYsE4r3BojzY3fgiZh6WyE7FdYN2TFE6urovkMWk91vrgKGYpvR7TQfCqhL3ZrnxAvvk66Cjx6SCPJ2Di",
  "key37": "sBLwxV4H494p5TiBXzyRCfi4jzy7Xi9VrBEWaXNzfKp6CHWzKigf8aYhiezXY8NKVqoTXyTN8b5DCAKVLQ1AsNV",
  "key38": "37iRW3KyLU3eihnqWQaB8hHUtVVZHnpbS4heB7gbzVtFNnnv9RmQzwTLCAKdFTpGGvcYnrTAwr12gz4pWSTPvGJR",
  "key39": "5FrVBrpf6fP3CwmNn5b6HR2a8u59v8FhmDzp85UeHb2b17LqVBFBjFHN4iVGjqyifR5if7rLvKtX9weVsTezoKy5",
  "key40": "3ugQm6xSdxg5GauSYGohbgX8YaveE6u6FEdQeC6wJy2tUPjCX6k7JELyHPqbTux3WctAPRqJu5cm8Jb1zVaw8xBw",
  "key41": "4L2BhjmXLMbpUmEiesjqcLCktFrYqFwcT3nmDKTrFCGJ9prTHQfwRBh7rqmgqspCt98o5VjpkUWLfAVxs6TcTcsk",
  "key42": "5Q9v17SPZ7d7mFJnZovt1cUm7daWDbCRK8hjiEWnZt5cGM9n3jvDVaZ1Bq6KgUQ3myUYRRS9RWeEVk8Z1GZ9S5bu",
  "key43": "8ZG8doaVQA78uAwJqyey4gW1ApbrDdfChsRo6EADFzV5ShNsGTgs7RS7o8hgEFBKHDTqxYFRTTo2RsAPaoeNwJT",
  "key44": "eiDYZMeNUnfCdfDYp11Hppowbpu5sac4ZB5VRTybVH1HVgz8DUuizVYQf6hoLMMAqCSamnSRyQwdfbMKYgFf5MC"
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
