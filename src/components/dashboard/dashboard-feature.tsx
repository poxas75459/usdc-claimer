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
    "5ewZ5HvsydcTgU48KgSUbP64tyNKr75EA5ge1922UKtpcBkfQAnNi5nTpvq3EFMckimGRcK11huxU8hrYwuiPPqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5avYJFw28gVmD6kSD4Pdj6Y53yyceRhoWP4N2ajSuBiKnqrMHhczqxAMNMZsrMDUrzzbPBerqzYu39rpeFAaMn4k",
  "key1": "2RKpSLDyUYbKqwyXC4nxnDcFwBUujzwPHzsgkX3htzNuKV5GXx8Xjg6w8gcLpHBtmnfaUbCrqiQ8oCAKR3CEGz3z",
  "key2": "64GYjG9WwWVNMqq6pZ87JyW7AvHMA2ViFdBpHSLubWhSPc6nuUyTc29MgWxR6JwsdbwgCF7zknvUviF3qusdQD9p",
  "key3": "54ivNy4f5kF13DzW7hEXPHADdRwGFS2fqFkSerR2aiwPzdo4uj67rUQQc59QuEQRgGNYjyuBQoPSwku7WUr8e1NW",
  "key4": "2BKiBZ5G38zxPF7EwGqxaXBzynWR8ujtNYX5kaCr5YzBkkUGpUZrBH9tSoEKNmHjdFaJo874xi7vM7ifJLAXFNVH",
  "key5": "4D8wdFs1xifJ6tFn2iF5q2NJhvpGEc1apSiYxwyHYC5yWSgto9TQHKRq12DcuDP8WGukPodLbr1JuSkDUUNdb22H",
  "key6": "3Jn3CQtnywrYJ8pr5ppefVjN9yVGdiZdQXqkL36Qjx6cCYnM4zrFgvB8b46fdJnXGiGvWak3gf9p8ZFAoA8u35Ye",
  "key7": "2MZwPop8rED4r9HVyYRZXYYnpxpBWZzTgks5kEqSSo58mFAHHFqkgDNYpehLainJg6C81GH2HQhRDbpc8VQi53AE",
  "key8": "k2tRz4xhG1eAzD9VEJGcXDWf2eVk7VWMrazu9437r2YLYrCsy16JdNgZqvyHxy3rHQDdw6ikKBXZAbgte6NQBBq",
  "key9": "2dd7u2N8iY5r7gEXCfEVxoLLvqNBTnTs6df2jx4o4bt72kR2dL4gHWh8LseVKcqedURNwrRUq9GpGE8udvLoUEMV",
  "key10": "5dHBPwg9xDx6CmRxJsJqSqp9seurd8KYzB7zYEqih7Vi8DcWQgXHajYsKP4qR9j36hXPtjm7hjxsEuF6NNuCbrxL",
  "key11": "5Himj2j6Gez5uMbCXJQRcmpTC9XUXng4ns6yQd16wHApSG8GHJXa91i7A1vKMnDRpB6xFdDTJdSb7zPHA3rPzKcC",
  "key12": "wVfHcNVd7HUE85kFqhbbHP8PDziP31EJpHkPWzBQWZ6seRMiKo2a4KL1Ae27i8JTqBo5nhjkJy7cmcQVKVZ1MWA",
  "key13": "4pePQijxsk7E9u9WqK7LJEAt7kN6ed5MkCJxCy89ZcuYczHbaZzJ2LjTniMVS1G6mwK7nG5RuyHwzNSWUnwMgKLr",
  "key14": "Z4FkYkKRzMA7pb9bokv9WZjcFkJdAF6PGEUQRJpxY3ooTLen3vynNNUVGWM6mKebnHgJjiNDhHeSqzK7wDH8391",
  "key15": "4snr4ed2MUoctKdhRWnkKE4qqZLbQvwABj5xn5Djfk7i2tfd4WwKbkYrHD8MH4tXYacpXqVRDL35EBpsQ3aGCVAi",
  "key16": "3mREr1jhq2cTdJA1YsbZaeFqiFuX4xDU4J62U5CP9wum7Cz7Zy9fu4ZHdfuvDirZnx4SfQHhSUEsvoWeJnjkpnhu",
  "key17": "sJSPdaxmTAeuBYHZfbymmp9WmT1vX9BXRj1gKeodRLVLeGgAKbuVihm17tABLDR77s5NdGNVZPw6FdoQncgi266",
  "key18": "2nVnhhfBRCKmqAn93y3ftxZNDCGgdF8ya6AeVhbyXmXcZpkK1hnhDGZBiZihVakKxpUNydWSgnE1EcxUEvLYD7De",
  "key19": "2FGFJTdrGwB8iJJ92V61LAmeTNjbSAGt5hZA4qvS395qirvxDtseqX28bgBwq4WmrrHENNWUnKVVhphCdzTrRuDu",
  "key20": "45L5Y3mDoS3SvVXh1ESg46WbCFJkbQ2Hrn2M6a3ciiEFWPwfco2yJyo8N56CAC3dCmW7NfH1xYETG7tQBnTVgeuG",
  "key21": "5pkxh7TwNxjmLPzFZMdMWibpgLxNN2uUXK3vz22gXzRnGVikNNeJiVsvZ6mUefKrFTLeAMgKQKkMT3gxUzJVtc5Z",
  "key22": "4YJ5yeSAwLYPKppRj4cW8TTH23LScyiNhTaHowxVX7mVVZFAL1Bk2XUUrxPdQNnFk7UwXM5QmUQMKVCgkgY61hQd",
  "key23": "5oKjwzYsjTCY3FUPgJWLeEdMDVJ7RLv552286oKeR5MCBhjgYw5LHZpU2ZDiiDEGLma8AV81gjwpqGrR7o7ahPuU",
  "key24": "5owgZ8TYDzJXVFAYvBmxw8MNGpCV3xLt1ZF8cjWnmiVQn6JoTxCXWiUtZYWNbP3Kfq4d2QV2LYdSUkHBkdFFMYLN",
  "key25": "2HjLq5JeYJddiiTeopAFRQKmYsJfh6hactwBVw1k7Xb2dgFDeqFmNWgtt2LgvUCvg2ErLVGQTeGqZ7macxGiXNhJ",
  "key26": "3pQSjPED3mpmcnc9zJzd3w7jZQCZKJiEHdkELRn4gDQCPRUX4418MQCx5ZbpquuS8Ka82z52HtQSGi9LFHZkXHHa",
  "key27": "2k9TTYhPQ4CZPe3HmZJDvzoG3ucUo6Z5rnPNmJqRJC85ZVSe4rgGRiTLRJ4rtcc4N8ZinJTeLxSRWPcwsh7JQq1m",
  "key28": "3dbRLn6TZmWNs8FYqRfYBXQQeDSQe4pC4uRUnnq22phqmXowVmkbQd9bhb29UySgmCxFioRubYcyhkoJjBEf8m1V",
  "key29": "4NSAyTXiEpJfWYc6qDwJbT542CFDE7aWbi3TnpDUUY4najkZ9zZcLQiSCJwUv7qPhMWe3FDPggY9GiXAxLQwW7A7",
  "key30": "2wStPQnWWcX4NohV3aVcJup58WC9GPQ8i8ox1QU7nw5yW3N3dDza147zZWpgUmeXT2dNzsRtsgFpBrMejhm9ySHx",
  "key31": "56bBmFEDQdFDZgKRkTmusVhx9yo1w1dwvbdSuPNDJedNSJBbDfHMqFjBV7uCstxXx64rsmc4QWHs2U9hDJNWDitj",
  "key32": "5BQH4qk56ZNrJF2bxrKWpnqzptmGu97f79runBprsofyxmsWfgj8Uxwd6x8FMNsNEyN4b76TATUquwnQbebuXQSE",
  "key33": "pv9W4jbfhMvGBk62a1gBZoqJ9hwswNGNoxMefwv913xGjfgeKCu81ENusqkCYRYKMm3NUxbiCkiJi8oErpzxreG",
  "key34": "2TyHFuxeRmsea6BAybqoGSssXdGZJT6QJsawWZnX68WYDJdEPn3aYgRmapjhJvu72mUP4LVKDDmEL2vL3bzRY5im",
  "key35": "59AP9UVTQ6KPgDkn6Wi9qiA6VYZyTwgq9L2aZ26hn9kxgP8mWHx91cRwaHvtkVa9iLNsMRvjehk9JdDg7ERY7Rjy",
  "key36": "2JPYdgBrNPA3C1kEvztWXEYnkZtN8kgUprSkdcXwH3nZwLj5RFUvQ7SmDHaUd4juAVZ3jw7qW5LK3G8PdzFWKPQf",
  "key37": "62PzvPo1HQW2KB9LraPJRcwkd8Sb3CLZQMn38RzGsBkmx8hv8Db8i7yVN33coBxQRhQjNay8A3ZapC3ZbxjwD6c6",
  "key38": "gF8YS4TqHNMx9c1qvJGby8x6Nsu8osBpnggFnM1eGmAk6QDJp2F7PQBumWHoq8uxnttKpjxDkFonCpzja1SsV1P",
  "key39": "54X1Z1urwgR1xMQHZV6NmjVL1u8TAtnUW3RDEMFw7LrggzP2XWuyYAkFDCZLUc3577LDUjm5TbL5XU48xEKZXNu",
  "key40": "3bMD3SWS5ji3zVbyNs9hPjydRgbjmaKgHgTCRsueSBwJTAkaVC3sN2PnXfV5axWGjm7YzygWTcPWordZ3N1x1GSt",
  "key41": "3pS1QfSVDW33gr7evaiFp2qAhWxtbU5cCiKzMi4REJMvfBuDh3mNqGQHdJmpp7QXssQ13CwADeQGf6GgJddCn3YB",
  "key42": "MkYPFjJTpa5SfqbQyujxWBLwNU1zZcEaedyKQACUPXwm3a5zEnykv3VUFitEax98Xayo5q6SwuFh91Q6DHSjvoq",
  "key43": "5w6USJY3DdWdSo7boCB95LEqe3y7GKEU4icNikDR7uK2Hk75s1p8g5vDTaav8s8HfK7AS4XLphxyKroksnxbBM96",
  "key44": "4ipCowTLe1DS7GxAQ8zAEbMr1PyiB2GhruQVbjnrGrHJJyU3iUoSQtjYM4V3saWeG6J1v67NNzWw7yDLADhfAbgc",
  "key45": "4WnwyLxJdBs5Zu63iRD8tHZSjjdoBH5RZJb6H9Jcex2wZbJtVNyjVtoRsuNnpyNbigYd5bLwxujxv75cEUtLtByE"
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
