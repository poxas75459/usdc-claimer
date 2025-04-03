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
    "cjocYp99mpxy9AMYdWJPZ1XHgU86bqUMr5jrziUpRfMJRfwXZ8TbrksSny9XKn9qkB3MuBSCLBXv1tqXECaooJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RrRvuigFL7MaZb12PiLCpRRwzmhevgSxsdz7EHcnfSi9BRkxmX7iNX5q2yAJeGogVpEjWnthfNB6f8ziMytAVwM",
  "key1": "2GntUN6vNri8jetnP2jDjPU5onnsUqw9kFgv1X85gtXZKajMccRB6i1NQntbmq2zMvLVVm6iGGLjf6mztnveg27Z",
  "key2": "5u3BbTaWJWAqEBSwB1GaAS1kGMyAX1g7NtL7vG46jiNMP1ZLi4RpA6opqC18mMrQHfqBHPS5qer6ANFH7YJwVvVf",
  "key3": "2QjSJuGM35cH5XN8C82iBzf8y3AaU1zq5eG9DXKHTanPMfwK68guGbhfiRzXnjPT2jsrP7mmnKZCa5cK2K8UTgZx",
  "key4": "3YBhwUyjPugtmXGAHSDB4oJdLfMEQJicY6fzpwjpVckqZDU3pnNiUNJ2MGVg3ug3wo2kCf1kAEfDHURmmM7zAxuU",
  "key5": "QUPP9gPskNQX9hCiGBrUeUYRrU1KRHMQmoAubehARErQ9VGEvcE4TVcoQqjnxBUp72RKpqDG9PwPCyweTrGPXD3",
  "key6": "PNEgpYEfM3tJ1ZH7iQoJuL6vRXuR4QQUs9qonCAwk6XFDUKSnwTTJLNLARSThd9R27cVAiMjqW5FQ3XUfsVvkoE",
  "key7": "2FBPkmoQSavZznZuLpxZvmx8HSthbFwNKUC3R4trqKQupFZtAxBZb7VpBQPge14ZN3D2cxETkxbZA8544goWs5GB",
  "key8": "3DdjWXNNHGMSyzqfQNAoyaaKQ2pqmLfUfeR6syPdejbxzz3q1A94WUK6V7vyWMNmd9sWTQpL4Yk9meaaPC2pLLVY",
  "key9": "5c9U6H6WfTPtudozextb5fGREEPWcciSjVWs3y2D8KNEKYAgrpSfSCJs3dmZexJpmncGiwAnNcz4kURPKdiLHn3v",
  "key10": "K6FvRo1uRKmUKydYjbV2pL7sefgfzJNrbR6iQbCYbksfMzzRGJTRe5fbbvUEnaDkMtVJor9mdMLmcZxHHA4oWUf",
  "key11": "4vpbS1iu1g6pvjH1QbQe2mLLiCMVjXj3ksHWdjx8EHWcfHWzK1EBU8EUMSBFRLNM3ByxVuLygGtJUfi48SyTBKiD",
  "key12": "4cB4fgKzRoFhw1HjCUJkx6oCE4B8JfKmwxNg7PUNNwbcYmTVa7MunuuBhBt568xvQayoQ6ik6LnYd9rXscSC29sQ",
  "key13": "4TUn3VcbUtzYQytAtNUae1zv5UJHQsa8NUsV7evXyMnHShRi9xiBjko6xfngH5wFHSmyg1GoR718RqyXeTJGhy9C",
  "key14": "4W4BHWLJRuaCM7M9jWLAizMUfKnfSphc1Jo7M6ZhMykvLexwcVm1jWhb14HpVwEW8nEBjzbpncScfbA8ygvwxtZK",
  "key15": "8BX2g1tiqYVjfcY2eZ26GAS1PRmJuX6TvheFjspzHRXdBCvLmszSaFytk9GTwnB8g8z2tNbXNWvh5RGN1AAknGF",
  "key16": "2dbjSEzThz8Yk2VcE4pkGXwVSmSusqB6onDmrrdxQtpQ5GBm9mHpm3qsbbGntY6rqz8f52eA3NKQtYo8NBuUbFSe",
  "key17": "44oMRkkX7Ff17VKqMZzHkPqL51VM7xeMcYiK9pqAWSsPUUtjZSVH18yfy8pj1dqSjuH1krcxGwiRwr8wNyTZeLaY",
  "key18": "2E6GHERdtAKwRpveiTyRSsfwxisZVp5oknVCi9Rr1x6CEQEbLp41X2B8tDjzAyTU1Cr6RMTP9qPgA3XbekM7JqhK",
  "key19": "x6UfnMGNpxZkdVfh6bEwrsWqs7rHuWYTYQ6iiyx4xE492ADyRAh3Uwd9oC6L9VqPW8Mz3K4NVp7fxvzjkFVUK6R",
  "key20": "2CWAVwszfuWEWfLeoaRcVhPD5zuB7XB8PdZscec2CNhW1sjUb3AdktEL1D1qmStHbYZArJVUQde1zYxXaEbAHYQ4",
  "key21": "2JbrDoWQuCieLW9cRVfS7RuScpjNYVZNS8ryPBY6CTQwHgT148vRXM7jekRagA7CHd9VzrhWm3Qha35vBojVC1FB",
  "key22": "3PbV29VvfnuLFPWu3nFq551ESCdeKQpWm67VczBuvQvVYLpBFXC7wdLTzDqy6CoMtLsFBUaqXU7rTUbijKefX9CJ",
  "key23": "veMKsSvvfADkeTwYoLjBATEqRqzpZjrXa1fzfNTMVfjE5AfYCogBhr55uM6djCt1HjKin71W3H2q7TjtbNvqU3b",
  "key24": "4tXEgHvd7ArjVRCWr1MDc4hZH6kN6icUeDSqrdgYRqAKidhdC7NaSxwQxn3yco6wvPZrQTh9W9ZFbxXTc45dWQCb",
  "key25": "3Rj1nYqb3t6uNQM9TVCN58xbG7YAjCn7d9uRXcFak2qzgtHXQdTY8FrDKpM9ydZrXRzpcQ7bL9XFdfqdQB52PcrP",
  "key26": "pEjUPKdJCJu9dwVhd3fq9Zry1euhMy2u6MXCMEK1iNSbLLmbmPsi32PtoJvr8QmHK7JoUGuaqtCbviKz3EKK3jS",
  "key27": "3gWVt4gJFUiNtqq8jPGhtuXiwTETvbLdHHxFSMbJsNdJTDZ2wVyhVwEY2n8MoiieFYrzGZvwwk1E1cyx4VKZWGDH",
  "key28": "4ZCynbqr8geKtuzWuhLiV75i3hXXjePVdauwyh7Fm4pvucZxmRyA3wwUZ2P4reFgzcyzE1HKsikJin4Snudsws7W",
  "key29": "5xFmArqQZPG3M6onzoYyGs8SZ8tDyTNtwHBMc8aVYmj1PaCNBox5UdBBVMnDmQ1ErLsreDyHyRsp2DEY5rFJpmqK",
  "key30": "29jizdY93y27MiYANEyVkJQDuQCP1z1g54SRaz9Xdk4BEVrrgF9TBToTNu5fSqPw7uxRp2fTfMVd2gin8BmeE5bu",
  "key31": "LSviRou1UEuKVrgikuqbAoaw8LfbCWrkXpp4a3F5QidXpHXT9Fa2yRHyF2ZuuwovumH4WXg4SiqLRqZ6BvrqHZD",
  "key32": "3JLMh93zc3BQsp33i8h6Y5q2TJCuSgwfGrVoFDRkKJsHLGwjPQPRR37C5qskpHMB4QavPTkNy4YH3X7YHqSKxewF",
  "key33": "4tFJxKZbrheGrBgVQ6mk7YbFNzarDi8Z7TE4cNcb4QUMAkYyz5HihvjnvNuordjycS4BSNp2dwuqWVuBrJkn9mC8",
  "key34": "3N1e7Vb22WpUhGSNjXoHChvmCvrZCfvtQafAp88bgV7yntDhCgZAKpJdX28fEYMEdmveQ6gNs1DtDYxkcqLNqRFQ",
  "key35": "3VFHaWqcAjuQKfCQZ8dJmHuouGy27wo4bDx6akviFpBnqmq8PnhUqcsjcsqggT6KZ3DkYhCHNkdgsDZxzh2HZJx7",
  "key36": "36kQqcLEJsiSpKjfmJtGhYSSpMkr4e94otD5oTCicNJ2bgHVVMivrtzfudbFKPN6i4k1dCHFf2PiaiGj96vWZMph",
  "key37": "jzZMsKA3F4vAJko2gprovo65UFF1GBdKg3NvukwQsVzZz1yKKXPzVq21kcucUPUnYmRoWUR7zWE4mjfT26H3vcX",
  "key38": "4fWcvA5X9Fs4R9kbUePHaqJc5y864iVZSoupWGEHmRCnV4gnCv4gGdhAzpkFLYUQn88QY1NZimVAYSDG6fNRRhvQ",
  "key39": "2NpYof1pAi3C4YovntQn7cs8ahFNxPCGepk8omtcHbsbTkLxjSJj5drdWguykfdymZJZoQ2AMmGzLgdDKC45VLrZ",
  "key40": "3x3gxsBzTK8gRVZj6BanP1srCFtLc1KzQ6dPBBD1sHh9Hrqeey1jwzCjNoNCWa8e5gs48FZobQSkcYdwPaymX7TP",
  "key41": "4uQferxphyAqE7cyF4CQMXYkNkjAUYmMZ6QPNQfKRuqG93oVG1YvXHaLgqs4kaSJfMRJVjDMD8MR4szMFJoZkjFE",
  "key42": "3eBdT6ZvwPgvoNGXmhom76HJnTMct9anSTvrSyanMwPtKhK1AZG5oA8NgqYZSxsKavWYN8x5EwLMTntmqfGX21xF",
  "key43": "5mW2H3PtGhE2r9asi5UtyG11oGcGgLHK6pUNsvB2NG8DDAS42WpMhPWXHxeyiknPeXWpdEGpamifJLdagKhdRRd9"
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
