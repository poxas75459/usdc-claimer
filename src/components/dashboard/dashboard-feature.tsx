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
    "5WRzw8QXeRpPbJf9XbBBGtdGGE1KkYa9oppD19WswkZ6H3F7QKJr1MpUGCGjAm4Qfjs6EQtHJUqaNDLnKSEppEvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wN3Yz7EEXXSx22NQAeBk2uhzkxEXUQysp6fNnXAV2EVzjqkmadHFo7Kst7HAi9XJ6WVKg2p2DDfmGKNtBTx8FY9",
  "key1": "3tPxdu3G6TztQXzhUWufor2WPTXGLTbCUz78ZQv2WdmvETDebEdz81BY6MVXWmgNhgNZ6Jf31qagM64P3H9xfBSX",
  "key2": "5reLGAy5wtWfaM6SWTyqAhatgwDYvyMCfX2oHZQkFqdn69dVeJNaH6Bqw5idGajRggLj9AuWECUNfpyKnBB7DHHB",
  "key3": "5BzDotE7NMGguwxvvEjGsuktjwURgErp3cpQL9n8yhYaFaKRz74emPV5PRBBKvUFWymEW1tGb7LrgWFdJQxqKGFM",
  "key4": "5NUhHEbHDZUmBystb5YPEgTXAUFbf429Bw9Uh2hAzzFHguJgLFz9Bx7Z8G6u2rhNrddZg324oA6LzVKWXbJyoSmf",
  "key5": "58wQpb6oDAQ2VEKtG6Eep859QV2C5RbThamA5D3bxZ9r4YkGb9BWXNS2QQFmqV7unDZgMhmi1ccThLkVWkwbYntL",
  "key6": "31ekNsv4JjPT8cnYCJaS96naSywzxpRXHGnuy77Jg6mkaS1b9mXpB8e7fbwzGeM4MA3fh7SjkJ2gjkEiK8zy4yYc",
  "key7": "3gUGU12AjwYm2Kj8AgCZ6wdqHr5wgYZFwKi4cGx5eDTtGnprCBb9CwmGDRQcQwmxx3fUmsXrSkD9ykNDYx8Ysw4E",
  "key8": "4iCmoSa5BHS8LJ622uzLL28YhhB9PVVVm1BjSefjmQPzPT2rUSzqKvhDxND1h2JpmmK3b3Ar3QQpY3xwjZMRx9Jz",
  "key9": "2nqj15TsWh124vEnStGfXMHf3sz4UdyGzZgdCzGwbtB4yB31gLe6tQrFF5V4NXtCPqTvpXYhAjXsXTjLdkKaKHTT",
  "key10": "3cNFmCW9cQ7AnDUd5fPWrGaLiC1e2s6BMC4g11oadF3qmQtgkbwjm95p7vG71n3GfHhh2yNexsM6LVr6KNEGEnVr",
  "key11": "MjgwtiDpfj9zJ733s4AYGFBQQpTd5rSfGYGWVpLPRxUPnuy6Xes3fpqEwEWDewJb2RYxBdv6PtKHasnrX144MUV",
  "key12": "3LFtcodaEcGLHBZkCgzm13QzRzZYs7eH9f3Gejrtgr2ynaykKHePCPDsQBuqmkH4f6yLfzfdtMEcBhQuG7wCB1QV",
  "key13": "621rtMvN3RHYwyELM8zEzd1rdWZtWRJuw4xw8yMwRmFa3s8Qq6jiW2C3iPyYhzQmxMQoWDQaPPJBkDwACm4qvfLH",
  "key14": "67bHZhFSCtGbjqHY96DHqJNEk8zeEjGf8JeXgArA5HTwtn7mNimALemZS9sE8UuYtNbMFPLbUVoMqniS4MJ3JffT",
  "key15": "4NWtEZCDGQL3u2HgR2DZ78MbCg9uD368ySMLfeBQB1xg7zrs4vcGbri14rQFinT2sLN37W95WbaMMuRiKqDa4ceW",
  "key16": "2ZXJMvWnqwb4ZPd2zdkNZPBMDPMAb7QzRuJhmCHNH2dpejUqyXsVhS1WjyMhqdYs6WHAGpsAukcwpAgwU4EBW1Zx",
  "key17": "TUfyF54r2DmbhVtMXqEsYGvKkmRmd5VT5SHNR2PsxNVv9gu6QRoq9p4yodrGJuSwMB917wUmfSxoHsv2YwCquYe",
  "key18": "4BjjLZ3dcJLP6HjwbS69NUiPFdWVKULtie8RZb837tfcsTT7pw2VNnoTmzUwCJtam7oC5ioMUgTGNduuD4tGUKzN",
  "key19": "5QwSkfwyYDr3fcsd3KYLLB5efsV7dEQEuFUU7KGT81KFoCB4jk6c15xjH1yNokuh7CsBJkdyKu5cZq66qniP78uX",
  "key20": "4f5PArunyuB3PeGy7PPLWLwVerkcB7hubDxxUBZQKwXwBmZXU1MECagLhHZ2H6VGmqV8uwPrLQgXSX6y8wad3tBD",
  "key21": "5WSfLw7iu5MzA1FCtQYDWuFAUJeuDU1CJp1CXpcFcV4hZ6MPpNeVxcDHR5UU5WhB4ZyzikYXwFHtiCaXdVKgXSKr",
  "key22": "3L8NcGPw2NdQ4Rjzr1297id9qG5SUhYkFygj9uuyG2VhWQENtfuGYqT8KD9qPbZWo1isd6st9J8kohRw3rMubgXw",
  "key23": "dTfPs5g6U85SSSTz1mcvZYRW4dTGLM8wxTGormWj5G4BnYutfQkHpg1VAseinPVKUJjqf7Fg3KSZKEafyLHyrzF",
  "key24": "3ysW9Tbm6rcgeorHoAiQBsyvGei8ohH9rzhF21DJ5V9FR99uWDQ3xVzfNZxZHRkhFkQHRNV2U6X2LeMz659WZZUo",
  "key25": "3e92gd7C8HFu5DTmcxewGsmfwUtfJqzKmkgDcLMa76XuFwNfe2gTPcBHkSozzRrBFHVqxa6zSuVzomc6RMtfdcWm",
  "key26": "3vEbNAriFD7G1wHn3Lqv2VUnBBYpFdRMAaKdY1yBPo1mebfijtLbKPPYTAxxzTDa8wEp17PifRbJjRxegTuwVFXo",
  "key27": "5jyoAdMxSA2RFjtJKfSnhGmiYUuNeoeKdJzF4aS3UdZybqXbJnisZ4RHTe27ALUwZCvhTaaDsVRaJfvNXjuLLpU6",
  "key28": "2jwNHV9XWn5gLL9hPJGPKtoXVUBB9UJDYZooDY1rbGgmiikYNcwHsXBcS5LgU1LjRZdjbcnG3fr5UQnDpgpkiEU5",
  "key29": "2g4cFXjzUsP8V7r1wpdXdJtq1Gm9svLUfZTtrBZHq6nGEW4q1S5XYoFi3mzJTPfT2Th4Fnk7AENBVLbuTy1WFeJL",
  "key30": "YLXkoh24ooQeFwQKBvgeSMzd7TzwJ8pa1qdxHgh639o5jsUsvHSGGda7fkY9JJfM7ZgXBY9Sh9oSEzBwdTmNCeL",
  "key31": "3BcjuedCgG1mBKKZk9caE73FN2ArffVaLUX76WHu3EQPGzbky9HM59zhbYZFdUAP6wHFyZXGkEJSjKRYbUm4wtU3",
  "key32": "59hNHwPBPTrDNbK4qRFoQRxGdtD2642ve1XQ5rNfmvpMqy31thGgPRSPB49VMxQ4PqQgY3cwveqVSvaKSPYCLCU",
  "key33": "5c54cfrvKEWmjNM1k2yvW3Rv8Nb1BAzGhs7xWNRAAMxknYAaNQwtfV9k7Sf3WPdtGXHJwMz3k64rJyuXjMWCJ5xG",
  "key34": "47AKTviLmqG5XVcqNQsicU86vynqKS9ta2iCcf1RNNFnCu56FCDiKbXxUeSyms6Be9GBgfhaoC1xdtYc9E3z7XV2",
  "key35": "5Zcdo6hAAJc3Jyq49JE49MH3XEzo8FD1tgj9qp6tmXDDAZwB77qPktcDYbJ9PLgYJ26JKX2T86PyVzoTdbXWHuSS",
  "key36": "4JKHMaULwqWZ2XGBHsZCzVJYXiftPK4yZpQWgDNYYszyictWTwt4MqfZdLEoGjUYkZgwUnZQEWY1zDzvUM4Re9Ko",
  "key37": "5yCvLSBiAuPUet8M8tYui8Eg9H7yxyokWzWrLd7oYPosFzmis3e9VCzxrejM1jiRxYpvR7gLKrMTo3J2MnJhxLJH",
  "key38": "4NpEXGgY6QA9zYGazcQPYsg9HMGa9y83Aj2fWueYZxbJqoLZ8DZKM38MCUDqs4TggFcwvc174dYbNLxHpz8WQrTr",
  "key39": "4hs7exfwnRpCLhogPK19QXq5wRnhup9yic1Q3TQc1xuthjpzQiD6CUXSLF5SpYBSBqn3nvqpofy31FyJk2JRF5oW",
  "key40": "4n34HmSVmdoKAGSQrgFRV4NtbW1oYKxqfFdWoPvB3sYSFYFzpWZa7b6P1RyY4kj6CVcrRfs9Sg98pqv7LLBQEV3G",
  "key41": "5bRtgP8vo8NJpghyAfQjbNy2Psi9aJHnjKsDYwqSDQ13ANYZzU8HU3B5xvTwAU6Tg46xgANW9edqz3pUsu46bFXS",
  "key42": "3ifM2MJF8ZFNc54dYd2wGQSVMtR5C8WFjjVcyM9czFumCtaxCtx9R5k8UejWE1s9478uzRi8NjotybHgfsxtidVC",
  "key43": "2LRjoZkMwdekx25S9D5TXGceTLZMUREyGpt6by115iyusNc9KBW1TmggVXqxRzHvc6UsPkCaLBhnGier9rPFXSyf",
  "key44": "2WA8yDYic3F4mnDozqr6dK7nKy6tkhnASnnFtjEUQ3tF8sUh3CPn4qCZuKKxHj3XbBEZ3NFMWm8NrJwhKD5d4B3e",
  "key45": "4kRfPmoHTg2nrBoJTiCvCfiZdvaErb8qWwd5gkkPvWXrKELdgP81zvXq8QDsWA2T1iCEVHYs6cYgjYUZKmvECnpW",
  "key46": "37T2mUpxyPYWnWiDxjvjRDYDbdnhSkDPHtXuaPRqEs9FgjX6qLnUsLT3YSTc7K2ZsiUJMiBtdkNxB7EJUtLnJ9xn",
  "key47": "5Fv5svPGywMQgpwiDXLZp8iC4Gmk9xZhxHfEbr7LRNPBkofB7pqKTw6jJGHS9tfkdVgNqdjrW6QfmS5umCAu3U87",
  "key48": "wbPFDK6X3YT8VeVzPvjCM2sRttt8h9TJuDxwYKWtkSLBnMGuZ6H6hRnQdLPrN2iL1hu2esm1edZxo7gPGFytvV2"
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
