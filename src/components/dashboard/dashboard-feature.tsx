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
    "5HvrvgmNrVRpNn3ajN8goc6yThencFFNtFHABEBRedTdf5FfnZki1WDLrWKhjEHVQX9M3mHTVyK98daw93jBCmAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PKTqzGpNEzbSKePQ7gvcivj6CJ8YqkcMNDnPQBnZ7YueM1fErdwEJa8CKq4mVyX67jzy9PwV2Ap2UbpmTYNK2DP",
  "key1": "evdMBH7EGSoBUNy2T434n2ovbD4ceA7NVxbm4BQ2MNEWYpCBJ6tabG8zAT9cdjdSBnu3gTGoPtGd6ggkYLaeTHS",
  "key2": "5AApoD2ucEonmSGdAGTKB6Cwjkt3SUGmfxAjnzvXYzB6ebuj253rUYjjVJvNzWx5DXmNBBekXv2jUpXmBxswUhFX",
  "key3": "43ZjiSGa2UzDdjAPuZLev8R1fwbjr8FA6CwpsGbiNgKFvgZKyMpLnYafUNdKxDh7ncyr7BFrYF67ZWTveuzwZtcp",
  "key4": "3Mf4v3hwr4xGRDFUzb77x5ENVTgKzgQnmsfveBhxDiEJw3JKh9SJoHJAxaAYniqKn9TePYXVNnFc5LKL1k3gXyJF",
  "key5": "38jbtVoc1KUyWAN7GKJnFZ7kmY9Zd5Yj7a8Aan4EiT3CPDS45eQe59HvCHBxHqEkrZspumAbHESAyg3947YWQeFQ",
  "key6": "2sj1n3q13KMWVDzyznntULbZfEHLmWFaJBBnH77gQkWWHHnPqpxKF3sCvdvZyYsLVCVt9kBronN6FicLCzecSCWp",
  "key7": "5MbfVBetHCBffZmWmVc6ErsiEikdytW6LtsQzzMs64dH9FPQPsDfsDgqvmaJparjTroCqtfFr1CkdhdN2YRhBYxy",
  "key8": "tdHuD8RJUo1F1WQpk1aNbPArzhfHmSigcZcafm9VG2j47o7zmfkjhj8CMCYj66HkbWiyfjyvSnwgikS4JrXvd2G",
  "key9": "w1wKCG6a55GqE2mmLcfNRRRNbCjqjbEN5Gwj6nFsGGRmSQFuzfYjfnLaWXiRTYvx1UmrH3EV1rr1gpaPeit7aii",
  "key10": "4KVyWUCAv6f1V94hEvCTTYHFHdRKTgnnXtFLshGseWEDNGkLqCKfLTSz5zUbatWZqhepeDuZg41yjy4bdPsGbSQJ",
  "key11": "4qMwvnmoWMkWPQD6jG4oH46DBE2z9yQSJQTqDjUf2WmT6MgN2wajvpCULbfpFmva9TgqvuEhmaHKXDvmAH9CJ6Rt",
  "key12": "5Tq9fzYHjAMq4xPEzzbsN9iQzHKXpysAvPqiFZ6fDVZr9nYcieZquKE8ATihDkWHfqXhZY9ErvXUcta6Lskh3EbS",
  "key13": "5ae6uG2DjfozZrd3NTczfThJc3cH4GRvvEX1C279EZ56LxZF6RgmZaytx2T6FVaHkEphw2UBoUiQqKf7i5q1wMHV",
  "key14": "49NpqYGJe8EQCahudiVH2A2xEfbSfBQKo9AQSJZbWzPSbAq8smJiaHjrRyEZ6AVwDmapYnXtbFg7Wy79VWX5WxkH",
  "key15": "MWDWRJDt3zmXUAx8ZDgoTAEoP5jAi8pkRKqHbW3JXts4f7JBp7kntu84yifVcM1BYKkXCwDvjgcmP2Cwr2XYkC8",
  "key16": "4YfR64fzUF1iL2PyLTwoxMWVHprG74ZPhVobGHM2N4hDYskKzu7ioih2BNrqz8GBqvBVJwmPeBrkDwRtBForH2hS",
  "key17": "3uRHe2GE1gzDT2bfA2FxoDkbrq7rhnVi9LAZ7hybAfCKrXeQZkCG1j4f9LReUcqxsTonyjZqeL1nh1FW13pff5qc",
  "key18": "p3RNNLh3PsdPZmi2qTBusBgjMZNSCT2Hfay6zCsgCDGGAAz5zNxyGZ5frLbobEgjqRmDVMym8BVLdHvCBiGkRgD",
  "key19": "48L6icpYmETzKoVUoXg6qgiuj1ugV9UU9b1qpZZiKAvN8jVjrqeWs8LCL48RpvAsksSPdVeBdoFoEH8Nxhde4hd1",
  "key20": "24rB63KETWP29or34xR7zsNM1yGM8QYa2ba7iyCfiUNsqqV53wgx35LdUZnbyW6rhPfYkHoppidKvjRWtC5Zyr9V",
  "key21": "5Nf1or732XddF6jgcA6idWPww9NnGxLnktTbeyx6N3J8rLuEPigbTdQYeeyJKdWAPodZvEWaZpbQaJrXE9UdT9qm",
  "key22": "6TwpgLdUMv1BSCve7YvbC4fjZVGtnnGxhotFpWP5rt6LdnsRUsfrCPDP9chHbHPEwUoMMKJ87YwVjN9oRugQaQN",
  "key23": "5fhfph3RGa7AvbtoBc13Qt2NMnViP1Znf5TViN1583bT1rkWVJr695GCVZdqKJGpEMSL8C17gGxEfni1jC7fLQcr",
  "key24": "315cUa8DJA1kKMCYFpuCjF6nwB2N8CQMtP9xJN6CxLLnMKovwbT2VTGV7FhMcpGhiWmGrBSLRP5dqZBR7MGwx7Qv",
  "key25": "sXRR73xivpFvjXP3zConXZgJpioom3mzNpUHdoL4b7aVH7VRDu16oceQaedcV4BMbNjZw4F1aUxxyH5u43PvHe3",
  "key26": "24AdMAAhWiEZvTQxDu3qfGuJo5bG6PZyAvMnmyp71WyiDS1NBA7LpFgKoymVcrHXKedh36HW53zS9HQqQLnGf8i4",
  "key27": "2bjR4Bqf8rjmmdbGx9CbU8vsDSQYU8rfpWwMsTZEvgsFtHf2HZ9M8uDgwzwN4Zw6eWPmSGHagAsFqXkeX6FPzPdd",
  "key28": "3efWi3te59ZBZBWrzzKPReBergzeeR4dRTe36EyT7xChY5a6spzraexeMnqhTee8DFs7r6KCy64pGAgpvDKTqsPQ",
  "key29": "4BwBbviGtsryFB4XueqhPraBgpFbquoQsuz9KDbTZdNyXobmyuz3FswY1LNg36Pwh8rJK9kNdP3Ne64xS2coS99H",
  "key30": "2DMFeWGwg9jbLceZPBodzr1eBpsNqZtwxjueJJnYA2Z1qGmEruYHWwDbAEJwfcegEmAZ3ZUJTa2hjA5pWHismNuk",
  "key31": "5MW2hdCLt2iVnFBU9XnVBChKCtoRz3BWGHf6Vn5HtGuY7Yea2L1xspyQYWoEqsr8YTMjamwxHhADexupahx6KshL",
  "key32": "2yqT8E84Ute37bqiFcXoasA24zNP5RGht5Xog4axNokpRnXRw8MfFpK57JJonnnjGiRLusS43aFdXztMhRgAKMRa",
  "key33": "2Ln2eRrfincDkpc8MKV3sUZQzk8K433oh9NtTSYzAxEfJmrouAFzCw3QtxkSrgR48xBgt6wAhWGLubEHTbKmW67w",
  "key34": "3eq6hFuNU31a8BsEkavc3UTW6ckitCsGUa3Xzhyx2ms8HMq9WGm9Y7hw3GoosKfNTbQ3yMRgT9XASQ3Pqtb5gwzq",
  "key35": "pkTy6VJpHcAv69V3czEhLLsEKjy5fcKg7hXTj2vhfcYN3o6qdCpgoKBcMACQCMB5afGa4EY2Fg3Wk3cG8vZ9Wh4",
  "key36": "2mX7hpefVJ9Tpxo8JPxfuw9SC9rXPk6aESG2KpWWGZdX4xZUTAkyJk1xYbdNzk4tpmaG8Mx7bJ4JoAjRB65ftFHX",
  "key37": "5zCNnut2BdvMoXJnx9NjZjhsFYLg7K9jjndv1BLHMrE2bvAGVMuMrQrhv8EkJoPULt2UUsPn8vW8PGrLVionq8Sr",
  "key38": "2cemwSTiinHp9nhNZjPBjmeCz6tabmUbxceSqGfcd2jvrdw3GdPLdvRytcmwNWuSxNyZTyzxW5G4qAGGwVmhNVVT",
  "key39": "2EB7Z3UqPMuhhExHra3CaNbsQ1Lg3kQDAd2BAFHAAC5eyWNDXJ7YqpbpZayYBdNhX3XfCxipMZFGXr3FQE7CcKyp",
  "key40": "38px5NyJVdRTCbqskuMeJpV6bhRMQoywPVLCnRjBKUDVHFoKfGFZB7nqxnhX6hoNYmfKcPRrVmpexaqJpqe5bjpQ",
  "key41": "3ZqvWvrY6jFX2qj69rEHFLRb4dYmWcTdiHx6HCXp3yEM57dZLzLTuttTvwJ6uD1dpdoDtQs6YsZzaLTRWrR8mRwy",
  "key42": "2kcbwMDXH7oMfpAkgcArxY1Ki9vFq8PDFB9wM6cT1tksqJmUjyx1WsdzJVNzdsWm3cwaKTnXAiDquuQtBdDq1gjy",
  "key43": "2pcj1c5txBoZVBpiqfHdEM9FE8uJRwbhcfER2sznMDoXckusa1dLsouMK6sreBMCejTfDGo6o373ifBujrua94P6",
  "key44": "5KVxbgiBCRNjGZVLMVDMdx92MnAiQm34PGKartaTs1Hdw17LQJrJabDXw9WjEYCxfUR9oFGkUaMgQi2KW4RQZtQg",
  "key45": "4kcJthdjQSR2B53ctArYGj6nzHsJ8c3aXVsdQYAEWs27bsULQc2kV1Uvj9EHdPt1pXcL5bL1o8pp3Hm3j4axGdPE"
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
