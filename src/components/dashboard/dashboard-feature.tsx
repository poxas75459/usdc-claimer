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
    "4KqZB26fJMsLjmtjHsV2w664J8rKvTbKK7APCgpTcqL7hFR2zgNo8yCTaevmd86EL41yH2TEgCDo5aqEc9dCWzRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44o1H3gZ7jQcjFWZy6hTRyTybhdQikV8b48PnaRMJNgPjNRmUkAkNKQee6LDjkzCQccpG1ijcXqz4q9g9qoWetp9",
  "key1": "49ABtahgfUtUK91bnwisWGkmqxE1uA7XbhdpDtDotXyZge37DdmF3uXqPT6mVFaoqGaJN6XWe9UBqDui823eS2HX",
  "key2": "61mpEBfMv2u85yvCY2MwXJVd1hKaSWFmb8ic5BhAgNZbESZVNYMdkHAmfJeKmQk55dNQqBhLmUMXRefvEifKch7m",
  "key3": "3dZbf6D62mJy7vwJk6PQrFTNea5hwUVkQBATMhkUorU6nxuB3QJXYXQtVMzbawbxNhucYhZYEikjCijrYdJH7uQB",
  "key4": "52EhRZH8d5qxxH2ucu6oUzCe5u8fyct72TC94kUwu7FVSZUN1uF3WfKfT1M6fnURZupEewnqeL14PQN3MN1ge14u",
  "key5": "34HZAcobf3GxwU4ogCP86JtkbcjN7FRejirRgdprKNKxZm3M3UgaKbswhLcrSGN141xoEW6hEAx1NR2k7mo3EqT4",
  "key6": "5oSmuDxd3Pa37t139M9mQZNr8xkv2S8t3h7agcFd4ndQhYaynoCT1c9YLxqCa669wChNGUa3yiTad4P2eV5x7tN",
  "key7": "4NytTbVi6sZFfCBCDvAhnbqjx9Ktbd1En6bb9d68nppFxLvSoguqE8j2c85UxiMKwK2prGXcmLHeA48wUygvCHG",
  "key8": "4qqyhQHXARWoKjNgpftNw9PzKqZc18YWM637fyN5kvnEDH4B71Szvm6HWDNNhxiTs4nVMnwfU2ic4yJZYdbUVsd6",
  "key9": "5jztwSPCrN2tmy5WVXmLJXJJWK7pofk5ytPLe7CJa17AKjP8fhCwguPwnU9Ecn8Rgfq5A7cUXLzDk3QNfqogQCBi",
  "key10": "4Sv9EH1v7DXhDsGKV75GjhVyd6Uyf62SJPTr2jKEVwdoAGxohXWfBnpFegEzgGQhnA5wjqQ8d9yUzFjE6g5XcWTi",
  "key11": "zLiBSidXcdHR3HWBtyHgEjq4mQghQ3iCvsgTwhwBdGNtgutwxT1K3gUBnWyGawTXha6jTicmqZtQuj6dG1bbaLb",
  "key12": "5YTsZGHSmTP23KyjJkJ4wb1aes5R6ygYwcaF2BEBpqSJVK9Juaqs2qVndqWYDFC8TycwZtJxgUd7Yt4RQY1EuPoA",
  "key13": "2nprz9GhATPdBrb8kc3wdWLiiDX3wQMpWehxoonuBBM1zqpcadPzN2gEwueMyHFZt3RbYQWSTHr9rtuGLpXFiYJX",
  "key14": "4bkqejVurZLHnqHGSoR2umWZPEpTPS1bTk4Pu9rqxSLgtLVupZrfwEPWuYJLQMRECFecXTebWKdmVqTUyiPkVEjv",
  "key15": "7Zj3NNxH8UH8xWGaYKZh6qXN9HarJn8EQzREZ7kLAvkApV8RwurgRJy6oPgmScL3VjAfVgoT7Ko4GgyZVMh6SLm",
  "key16": "434HGUTLxo4TU4Fc8Yvqnon3xjJwTNBdSckftSUWDZbC7EukcCAjZctbVbRS5YLa93wySbHWKeS5TiScJynQ4JGJ",
  "key17": "2h69McoPBWphwTWH3faJcpC93NBRWRRJPcq7q8DyGJasiFzotraTDp22qaeSsv5xnqy5kfqK8SPjUBJgXFuBs4J9",
  "key18": "4h4Te2HUy9LikWpJG6BCRBwhA6PAcWzb5cZ2iUZHR9tCr3MpEEKaEbSuZaEksTK5LQiR1qxYd8zz1CbzBVFUZkqq",
  "key19": "cNbwM8U9CRhnkNU7mkdzRts64VGx5CbtZP8g1mepCqC8zAsHDVV96BGmJ14xRgHFE2VnoK53jr6XkozKv5nbaXt",
  "key20": "2m8D99Y52kWjhHHMjsVb7xNBz5tmEiDy6LsDCnryrEpkLaDj3wUnewURWqY9zSouW8QmzLq7Aj9qvRc6HR5aRvKE",
  "key21": "5Er4xEKGYzG7r6U3uepbxNVovK8uAF3ri3xmxFXASt8AKq9w5yMcfPcPgi1ttnfHkDHfTBaZTQigq84qJ53epW47",
  "key22": "3tSvzRkP9okXEZYgmvHpAiNUV811VvAmCifgegE4UN3Pqeq58LQsf97oQAnuhcjZsvzwDWZNEVPcY11TCCvkA67E",
  "key23": "5s9ssG7gPyknUEfmBQ1ecKt94pHLjT4AHZsciAMAFpSmWvJgRgFkW6dMnpz8n1a3uMiXPRGsEss4qhUqKdF4wneL",
  "key24": "3dvrbfC74FM6ozJAgsqP9oqQ1FygVsAjKWoy4jH9Cut9t4HjkrUT7TmW4EeFVzNtNcNsTNZMkF5ifSA9ZvKz9rph",
  "key25": "3vcdZg4khspEdjJqjqgC7B6Up1YK62gE78GEX6K7UXaCHEYftoL97u6h5wN7A1vm1LGijyEAjZrkrFEnoGhB5bFb",
  "key26": "5Rz4xuWePZhjgzoeQQHBjdsfi3mqzWdDPgjxy4ua6GAKTdN4ggCHJuDS3fiJXbwLjXTvSbfYpacK8wrPrXahnTso",
  "key27": "tt8uhJHRKvaKTzgWUpin6radPLkujAkf3CWoxYTGmhn3gieYsesiFbkeuhMNNnFKix9BN8CdsBBDjEsbYysUsvH",
  "key28": "3FxmHcjECW9wAHqmVTm2rHXneeb1YYjFy2cHqyM97EuWC71R8JbiHrj48UGyzWyJqF6zwcn8f1265AZPh8M9UE7m",
  "key29": "44jHChhW2DiPpXgCzTuf3JCKxsHqJVq7qQDNS7ZUSbUPzcHXczwQbBeUXkRpUDBzTVoPcd7R7qUVXaCKaYBhaXNR",
  "key30": "4UCko2SR3EMaoBAtjxVhFAyNgcb9iFCqJfJ765MWp5bDEzaq9b8AiXeP9pPmkewPBvxqA443zwrjNbeK9ex9LCXG",
  "key31": "2cqu5cXTRi3doAZiQxabiWJqY8wy7JHGBiM8Ahn6WpY1MPLykob8QCyHiNHv4syjtwtLzMrXjztsxvMqXDjabwCE",
  "key32": "2TsMyuRXcJ59hfuo4BCZJvKvAWnWZY5Un1pYneTQMNuYQazbzaSscTraM2dcHBfkH87eTd12qy9uA6oCGxUQpL2V",
  "key33": "yu3xSEd5kQjfqMdh292NDT1j9rew8xDBjasLxbqsmsDUZZGXJxmnmSwArQxCYdFBGPwLJDSR1CLKUHy74N5S2Aw",
  "key34": "2KZ2sw275dv1yTymqshp4Gs3UUKVn3yjSFkEQBiMSUGUqyfvjspPQzNUbmZVvfu7MB4r7qwBQhG5AsUupYYTzm8G",
  "key35": "Vd5Kq3BC5uatyAoWCFos7gEhx866iDU3oaYEf3Skm85uaLsEewer823q4xJxcY1jEfAwrinV6ij8S6wXWx5UDVh",
  "key36": "rQ1WzGuSQ11jDWuQ2dg1KadK3kGiKbh7osDXRMKtMeesm1DhaMdoeTtC7Ymr6zN54LwS43G3mPT2ASYnn6Bvp5j",
  "key37": "36tRnHHTNyyaDhpWbJrGWg3fXiH6cahCNJx2fiZXsLh1zfCVB5dmgohcqsQNwq2X4r5zQ9T51suu34CC1TcuZWWM",
  "key38": "2VdDFWCkk1QbuSjxFaKHKNpEodHKbWP4zyqdoVvBSAZJKiXiFZdCrboEjpCM9CZJd1irvhLYwDPdGDxt2j7uUHhC",
  "key39": "4HkS7QxA2jfJawRZKK6jWSrvymK22ZFyiH8cuYHnfeWH5r95hQbLLY9JTVCKoYtyxjZVwvxLJygs7umKVvkmf2z7",
  "key40": "TDzL8AZXegTiZJeMXoXrF8AVVLvspCUvNhYTwq72XBL32W3vdtmCzD9MHQ7inWP8T5fKeSvSC8Bc1XmbUubz6ne",
  "key41": "29VvHPCLLjijNQdq48TjDScxUvgndLCSaJKvXxtTzedZKePnkwnVnKEs7nVhrrMNd76eTUzickMXeeNRtbbxDpg6",
  "key42": "4tjXTPVV4zSgDqTVqUsLAEtiqePNAcEjbka3DQ8fUFhe7oZE5nR2pGRzauCwV9utvdbKSPpU3dZJjfAWiBYnKMD1",
  "key43": "v3hdBx12wL7dkCcFKqUhfFqeqXXE3zei41BunWBTB43BaQaV49QM1V9D8QYWxQ9p91nJayqEdPWiU2ZMdKkLVtx",
  "key44": "3JxWi1DDqpfp6DAhyE794zH6n6SGJdrPdfgowNCK2mfE8dVZpP9agSAqVswDq3q1WeJR4871Xd3ykFpHTBVFMqKM",
  "key45": "485XNHPmDtJo3NLFgxr3wJBwQXHixjsfsfM3CLqLsPjQDCJMMuqtTm2uN6qEwn8hEsgkVYXemX3eYYwd2cncNy28"
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
