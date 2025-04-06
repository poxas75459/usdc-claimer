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
    "2ReDhuHdxKL8NsBwW7Wj9VX2jQGUb7CmqwHpc8xpr5dxj2zB1FiwRX64drqD7Ln491DYRubU7d1eUHpqqW3boRKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HGjW9uTuYj2o1ruHHHEd2gQnuaRmFwibUXmwgHmsyir79e9XBvX1yhHxymXdGyzwS4AbBTSzn7rmBHAufmNNg5f",
  "key1": "2wc5SD8LRAYXUyuKCE6gnEyepLvhU14oVtHcjhH7amGCJeLKjCGMLWq39AX3xzqbGdst9ehbAQsbk2b1Tyv8WCPu",
  "key2": "2rb2grzCLEzjG6tTRcpn4MZBWugJ7HStQBPFeeUgjtQit6tLeTvp8PpCbDTaMycH1FJ5Cub4Qhj2itDhse5LvQgQ",
  "key3": "4sHHzbAVZmaKHXJCv2JrCcFy582XDR18XALSFinN4bH7aTPcWzSd8DuN5S6YY65LuV45MRJDVzwLPsmHQSeeuEob",
  "key4": "HsWpBR34bJn9f4QjhV8KBuBdUMw1kpeEVfJSwKqvF3PCany8v6phLQoKg2woKL5bnSeXemhyjGw6R6cgYZEkd8m",
  "key5": "3wefnNFFbHqjQZ5tPzaXxCuPivy3YqCBrZrk9KdYUQmP899BUwKNw8TJ3ufWGU4YBBvqC8SLmTnJtCMkb49Mxy7N",
  "key6": "3L44u28GsL1ESrcRwgWVvxsLJRbMraqCtC6P51sEULQCwNQM3pyFuz5zY8quNBi13VUci4tCNoJMYePBEJszbF4z",
  "key7": "3mWNmgCUgPVUZNhzFtw2sYLVtMqSjFEtqZA4VHYNo5qqHMGJiTHGvzfuy6WX7sV4QYkJyB3nFeQwNhkABX38G8UP",
  "key8": "2VZmmrA2PwcayCX2y8KR9hZH1B1hrfPWS8nbftQJAwbNzAuL1YoKKeKeXWFaV7GQ811P8kViKPB1jumDdQvV44o3",
  "key9": "LJw1HatccHPihTGJRgQNFcioheTY2KdG7kLhbu5PNhvhJFjjgHgLw1FtiMxoc7p5CcZJbA1W1MGp7J3EwibhP4p",
  "key10": "3EFK4KYUNnx1F5knBm5iApZdcSsVxJGhFmBaJYRNCED4YZ8gmiwp7GyWQCTr4c4iuRo1usyBVXvHkQ9oxLSZpi41",
  "key11": "3wYk4hucG8LrCUuf77cFpvwtYhNSZf7NhZi4YhBr1nazPuCyDTnBqypVZHSCkqYtE5rAbPrmMm9ppapd2E4uoGee",
  "key12": "4FfVK3w8mrCWkhrs4qWbL18iawBhwTrbdLyoTurnomQ9WL2z93XWkrU7vKXmL6dQLMJNxwjnVM3Zroc2aehngmMC",
  "key13": "51ktJ5W9WuJaMAxd3LmZ61AsQCyQXsWd5G7NJWUcNny3oRx4HByFumN71qrfD8dau72VxJGmVdXK4GH8TTt65SCh",
  "key14": "4TxLn2x8SdpcS4uuYtCAKmHdLrbxqXFEtpMjKpV78MpoJtZ1dY8DkwZz85i8ETfZCYLYCo75bPKCfC4FqEGwkGir",
  "key15": "4MstvZWn9syXSHaPvBNzSezFXfSg88fD4WXNPgnxE6fn6YwGLL35Zo8twaitYZqQ7bnrnhYTjBjymcNnp9ttWNi2",
  "key16": "1NTfDFWUoDBWwTATSMnncG5WNmBMhUigRwambYQEZRodtayCjmCfyN3DZPGdFhyVKmLwBacAV75CPLh9neHhVYp",
  "key17": "4Ajw9VQAqGZ8j5mrsvXMLuSAB7dbKaP1ZLZqufSf1SWvKV33mDExtEcPJbteG4pUnn2SeuV3h4aAsM7kMzCrz7nW",
  "key18": "4SzQV8Gx89Hz3iyd5M6U3BwgbifmSZUVy49SQKnXyVdXqSWVzCp2irJNf6e5cYJ3FK4ntxiqEEraYy7kLJB2XrbU",
  "key19": "4zHSfQs724nMgU2evpdc62mEuFr6MXrmbyeHFAjcuee6Fmj4StMttoT54zxxftUEx9Vu8dUhRb3kPBGxq13CTZAa",
  "key20": "3r1CNtSSGcP1wjP9izoyvd9KW5hRXEXoeCne9PB3T9mNNTgHefogPBys1oJGKgf45MX564zPwKbYzfSJEyhG5RLo",
  "key21": "3ujXXnWhhrRcSn7aUVcsh4aaQBno5aF9aF38E2tVgoutZ8Dw9uM5zb4c3wcxRVPRARfCvPcfZALydBZzPzj6YybE",
  "key22": "2UaSCbNGkbqRzRQxcYQkw6FnXzNNGnpnsp3kdMjqhrWEmvukX7QneKiwsAusp3thdzc15ogTH8j7dHGi6Gf6xKs1",
  "key23": "3f9X8wJXTNGJhGkyZcxzSNyjSeRzAmZizWrm5saQVtc2cE3X9h29Nrh6Ya7ypKzmRtkR3ghq9kAhU6G9aa9JWyUg",
  "key24": "GiVzFC45UpbmchuqTHpepC8dQk1uYSvWd1hNwKJaCypGh7hpP5HuqxUmW24x2MgAuekBBLPiB2hn8Y2Ku5XXAMG",
  "key25": "4hdeiGDXtWhjcRsmA4PRtuvBxxatTQEaucqeAMMnV6DYLus6wXFjvMtEHtj3j5yMEspN5M7B5VEx5griaioALHui",
  "key26": "gXGWuwpsBrZbnJ7AhguvrrpKj7uGKuXjGLLXNtYxgTmEiczbhbNepgS9KDckVx6mGSwQentJdZ6TYg8ZPJ9mszQ",
  "key27": "4ZgDoff5XJEyc8nUW5yHiQApHao2rQHVBURxKU6LpgcNCTH9XZW1aGkoT7onSFQQEiWZiVRVxf61LNekhP9eamLm",
  "key28": "3phattRXc1VYnyxGQyuEv7EdN9yo35fuquEJrat4Ct3XWVq8gCX2ovQHBaRnGd9uWPjH6tHyW5BNb6r6ezTqCYKj",
  "key29": "4hFWEjTPbKmkxbyV9kvzgAzjuDf2RGxPJxU6bi4qQRBE2pEv5FVc3jr1UtK2GLkpXwJibwoKMaZDhKT7kknvXpPg",
  "key30": "55KTYmgHit2AofrV673Fz4TGVYtmHCHLTWZL5u1PjcAP2pD5un8L9tZhmQBtR7cqoY8wagTfRJKvZXGcFFDPyDi1",
  "key31": "8igT9ZazhKhrTCo5w7nzDpKDgDMV3xc25ptBVcnVAWZqrH26dkKPU365BTemHMYmrgcBTBPu2H6AwjPAWm2VdHr",
  "key32": "45wLek4A5oSatFtq7hNGmDcD9eV9LfiP6ekkFijutv2ZddWZKSXUVwHgm3SfkiTHx19fZXQYmztkcMuQebNtNTYQ",
  "key33": "4i4PezjmxZkXEq9ZKruq8gpgkYFnx1KDq1LbQZj6yFQhPEkimzpLzmPKHt1BduyWgsMXHpFNwponpVfh5zAuKqvm",
  "key34": "5V9Eb6kwRwjoLKKwHGB2hqnVAn4y6uEmkLvoi6BH8ZUre3U3XokEJVK8pRSNjtycWbDRBR2xHQBZ9CRPAxs5TK31",
  "key35": "2weDoUBBVFnrRKRkcGe1CnvV38kJEKZfQmWgJBh4eDByGQnTm7PfvUcvuzMWphUJWCR5TKMfmZkXSJKqzKa6aWeW",
  "key36": "3pUuSyWss8NvWFezc5grznJZti163UogM2DW2uLm5ECCF8QTDcp2u3GXeVFtSWFBetG4L6zGsedLAymj3W8be8T9",
  "key37": "2LruH2uupyE5UfZSHmtHj99K6Z9RmxUQ5XqmUfyJvsdS35o6U1dbhzcduWK6isrYYGDx1tKTPDpicRYotSXSEmeL"
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
