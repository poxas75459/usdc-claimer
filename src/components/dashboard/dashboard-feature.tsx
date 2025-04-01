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
    "3zA7dnsMe9s3vYaatSo72SMwKTw2kyKpQp3eYCKHyCfJzky3rf13yNk6uJhAU5Zs3zT9ZfQatFhft7bHaPVe2Zdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44WBAunR1CNihD8TdAkwJ7J9xGzrz5XPe1KyKHVoGfa5C167HydnbtFzjaRo4VmVvzWavWPye9uRw46CFebBQFBB",
  "key1": "38G7zMD9U7ehkq8gvhpK7DhRiGAyguvR2mko9GUEK3PMsDUXccz8938a3n9JSd72baYs8jXasRwse7pXK6QrYP3Q",
  "key2": "3sDJNkyjisRLJ1N7TADrUiCwRtDn9cCzTGZzAsobTmZMfD8dzrEpTd1gW95DeVypzFCwQi3J8GGSh8PRDULGLwUN",
  "key3": "5tHnaYNc1rcoGVkn1xWQnZuquWSkw2bcDsWwuAgceQfjtSR7z9cBpfxkZtHQ2FqDN4RQURQ1XBXxjTfxtkqTL7Ra",
  "key4": "2dAabLK75TY8tY2tCMVdGuDmJC2f6cYRTUwyGRT56CdE1giHBCAeaCuQ4S3RYS6WmKdzfZ56t8khqGD5XgKajY7s",
  "key5": "M6Ckv3Pzh9G8hvJnp1jhNkB2cc4N4gVS3t6vHr6nXqi9rwLQtu6tJazbWT9LM94hwVmHWJu5MVQiYHv6VAKZPoj",
  "key6": "aVxUxRfNuj2nFfZec831oqEKh4gLhYMXsb7erJWh2m2aHr2SixhfHfEB2K6ueF9MGVaSjRcm5YTkBtMAPC3MK18",
  "key7": "3WLybCiS8CKFrxoLxp8zB3NFv6fw7ZTAX6HPjxiKBHoDuKDBK7ZVmdHAdrT1kJMQBYq83r5KqeRq5pXnN3BtWRvc",
  "key8": "UeP4mB54JbVsVFxn48NkDzNjXguQgUfBFZngqHAsMk2bTWaFCFX2vpQXDucUhKsFpiRKkB7mzG2YZVCBZu4b4pm",
  "key9": "xehwffnpggd6Ak3TarudBFbcfwth7gin5onr98Moh1zWnYiEgpAwLRUj7oQshoB38vqUJPCwrMfsPicjsd3fUTn",
  "key10": "52wKrvFF9obxV9jYfBUkdkCMxjYNhCz3xyfdAAgiMpfUjFvJm2GfWMYLH8Ex7nNxEvuj3GwvmNaaUS18ifFL7rUQ",
  "key11": "2evYhMJX8M2jbDTK89LwLqp3mivYDbaf16ZDptVHAVxAEsq4Co7vat7feqME9wy8VEVeBK13gbHuKwBin5msAB6f",
  "key12": "3uXX5Qt8C2rTtPASY4146Ced4vqTHRLdKvYhrDbaZpP5ngg9asJRedwCcPAXTVnDHdZ7MdTv3skJ8erwWxEsUp52",
  "key13": "2Gh86Jg6U9LUSF23WxiAVvv4j2ZB9XsukmSzSThpZ4bGJb8BRohpJJ92a3i1cSUdeoeaNyyTsfPRUSyZaFkS4EMT",
  "key14": "3QghyDihK6GYGfALYEVC2wCQwkWCzax75TQj2xiLh5X4EG3FuWwsStMXnRwGqHRrK8WQKn3L4xfXivz98L9mPKZD",
  "key15": "3LZFqWtTdpK7b1hwnM7G3evRvj8M7r8mprRrKRNrYb1R4jDj9G1r8wotu77GfH3shSTfuMi839EsjrZMQoxeHa8S",
  "key16": "w9HNwvMUCBCDvApSJVR11FUHmnTsPiScY1EMoL1LtR9SanyJJQUU4syPkJeruAb6xmU8wPJLzVB21hj2zCX6YsV",
  "key17": "bPkdNqQaVuVDzrksU3ipJ2p9dxNsobPLc3dFLVqAHt7fr9tG84HPKLWVTckB5STYusXKBfWCQ6TsejwBKAi8j67",
  "key18": "5BVHex7Y5G5t5rNTu2XPJCkeu6sC2RsKyZWeMWAAmFdU6w1tffqv3gxD1uy4tbgdAWyiPjP62qour9khgZQTZNhe",
  "key19": "21CScKXwrgoqSoaXreNW6WSmtnWt17pNWqPuzNnrHK6XuA43y5FEMwPUc33oyAUrLCSR9nsH4xtokX6JNkPwSq4E",
  "key20": "4zDzGpSX6yqZwQZwBwp8y9xFn1sTuhgMaxfxhjozy1PsyDPZeAiU2RM6WzAUyTYkV5kMhHHaTBdYQiRzFEi59jzx",
  "key21": "5KGiKfyz3mzYEMLMDmFGmvv6KoKPeegFQaPaUwCZTxdkFte6qFpXRdAcYuNNsoG4nBmY3STergXBXvhHUdQknCCs",
  "key22": "5GvwTGNzmP5fXwT9dTS7q1WG3hshJ6vp7kMb5f3SZ8MRZPzgFehyztDibVuyogZ3eMEixEUgmzXf6k4scsasBgcU",
  "key23": "5chxdx1zUugEWu7iXfYUqKXgU4sMH5BU3DwWcYfdd8TCYZUKGZtGgtCPA2BLVVCsY7PRt9CqeijxU66wau4wErea",
  "key24": "5czAMA9keEZv6TvAPFtnHp9nC2PjYwGYn7WieTYcgCiQSi2jQMpXTKj9XMkxzwpuoL7aFNdpBE87J9s6Z7FNmgbm",
  "key25": "4SMq9jP5uVVyVWzWuLnr43dffTSSJZHizsiyusdNK1R8bTF4Gtk4JqUnAVsQ7uF41wwDsKcPMiAcBwG64rK8HtPC",
  "key26": "5zbnSq4tTs4xJag8aU7HHievzRPEsiDAH9ohMNpWgGSkoRLJ2FDpaim1hgoVBkktFFgyKJJa27XsQ8eYemiM58RG",
  "key27": "3A98ezThMZrgLwqtNy7Rsu2y8HauPtcpuNuMe17N8Kb2rA8mHeMXBMYAUftcH6X2H84ougCvTvR8tonbggXkYgK8",
  "key28": "3hYEBisaP2ggarXXLj62AXiB26999XLP7Y2LxGigZ9VB5yFNWV4Ak5CwZkF1gaUst1RCW5gpCW2E1WdYQGgXh8og",
  "key29": "2zMNaPzMoZK7PFDeUNbzPzA4aZYkh4JoJJQeGuroVp96NP3RNReQ3kajAwSJ2RjLca7Pjf6zowPfUwMhMFhUF47y",
  "key30": "3Mh1RKzicT5HsqsDFB3DHY5oqXv1JMZSnmK9w8XjmA8Vv2ehoVe6xzLR6yx7ozCyJgrxzCUNN4R5DG5pU6J12s29",
  "key31": "RmuxgkW52MLPdA2iTrWGJjVArtyukqB9jBkvnhMJyMdsSdWdvXJWKKPrWVxyYXLRJzcZBENEbzwCThvXXEMqUqf",
  "key32": "3rtrcx8KXrTzFJiBKx9zfaTSFJ7tAs5gDPCcUzgNnVAwbjP9hSqiCrGMdo9aRyyp9SVU8ydnD3L7wJpvXWKpYhR3",
  "key33": "5eCpVS1FidBi4zS9M9kEvKYEpkSyqoZLd9U2Hi62MKoE1aevc1RafZWeq7VoieeSyZs6a7HV452H5xKfFW8eng4v",
  "key34": "4Y78KdUTedQwRRH3rHQNcnbqr8Fr23wY9Z9ChF71Mv5F7tBYdsVWktWBxvPxAQsc7cYC3snenydDWfuLnVC2pyv3",
  "key35": "49pTdLQRCYhkF8a6rFXJsgMh3vqsHN5ckkdyezKG6bCoJUB85tbAWb4o33devik7eCZcL6GwVtN4E1jNGh6gP5QS",
  "key36": "5hp5iPZAxdGeQWjQFpBbcbVLBFi4v5gV8ZUnJKCT2uGur1D5eqYYixKLBbSukNr5F1uw2uB1LtsBmGg5TE7XeuQM",
  "key37": "5i1ZsvChsEPBUynBjQskJ7EJUdLHtLr3rbuZQ8oAENZg4kEmP2xRgMkEufX2MQk6BycpeNQAhxa7hkqYqJit9zit",
  "key38": "2F5BR6Ydvh3qPYppAY7b4GENFD5pb6GD9diWd99fyUVyWp6ThiPEURXJk5opbGb41AyWXzo9HZEjUdGKcYhQ1WUq",
  "key39": "xYYv1TvJ4YPz1r1ZSwv12KRGTB6pKANMmF2uw8n38XnQCL7GZ2pK3n2gDcZSoWta8x7NW4KjooiKuUKgw73LZxJ"
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
