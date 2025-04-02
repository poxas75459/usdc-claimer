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
    "3GUFTNKC8n5TPSy3iE8AT3CPfa2MjJqsESotYtz5E7rVrnLcLXjC6jmE6bDvBFbEg5XNEy7VmpM5vkwPQGg99H2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FA84nvMwJa1yx5BpSBfvGBepRjkpPUw1FvneKkFCi73X2vDpbLQiH4FKQMosgscX85WXBtaEfyJuuuh5mXtyXJw",
  "key1": "3Qa9jgMohFSRDJZEPW4DeDARu899acWBErxk2UyjQcjgYoRG1gM7y5CxxoXG7tZnaZpSx9fBjUqN7XnQJrbNdYsp",
  "key2": "28UZ3e3biHzRk8EZKmWmvcHKG67mwZ8B4v629M247cUrx5kz3SXquWqTm8jvagHketRaRGvKbG5ygmxbLvoXGo3e",
  "key3": "5kjbW1awGwpQpgvGfJnxTGBeHMne5jCajvZExELgF2YqAm9Mb5XQW6LtqfhnheXpt4i4yVaA57epYHpygh8NDjco",
  "key4": "2qmpm7c2YByAwxgcW5pxsNhiGhaA1nDvsriXxNMgTZYaZhmp4ykoA6jpZQB68TiCdEucuytLhPwsUiz6UoQvwgTA",
  "key5": "44dQvJK15EtBNpbsvSx44nGAgLtN8psCfsttne6qb9hbXDP5PtqjBFzgFGe52LMqmynHKMYBUE3BRW8aWjbjrFtx",
  "key6": "stJJyVaw1cW2G8Ax9H2hSFwqtZkAWgFYWZpas2b9kxQEvfjXzotQfsUukj1dq3cKo2AbE4GERLqvCbKnTEqMAWY",
  "key7": "3nuA3YEUQ5fqQuRXERhf9ZvU75qSgm2XueJykpjCjYpHHVWwjEfb1ccM9H9hK56J2MNw6JbS5pEu6Jazk9hSF9up",
  "key8": "srukkkUxA8x9S5Sj1mEsKPQq29wWW9WiDwp72VGQ7RAYjCPipTKKbZRsjY8xEuhQ5zqkujnFnmpm4n5xtrbfK2V",
  "key9": "XFrQybLGJ6H71svssTcUmxP8ak4uHjavG9mYw2zLaHnyJ72s2avW91vbhjpS7vUGWssHPgQXB4k55oySTqNSFau",
  "key10": "3vonb4irmSdbmH6TyEZH1T8keJuoBTTusshBQg5NG4RYtEBSMidu3u6fa5csfijTqyvTmJt4Q6bjNtmNLT93BZ5U",
  "key11": "3WttsBUNrewUKqk3NPw8xDmiRgo3QsNuGuwEUQN5Fx6NC6VRSLFHrekaosgqA2qC8kWEqFNW5RH9R8aZ5bmbALSs",
  "key12": "4BRkMS1bcU72ohZB1rvhuTbTm9epPcHrJVuepymf2n4XMTV1cPWF8GgH53gL6mfLmwLmp32qBPreZEkr8U8d2xT8",
  "key13": "2RXU5j1Uoj88d9WNThGx5hT2H7moT8jg5qegZNoVcfe9Sow9rmqb7DfJ7RYmuWBZrkyxn5ejcZXqzcLCcypAH9G7",
  "key14": "5qPYDq82JPwKQw8Qce362Mh7dCc391ESJZqJzZf7a3U6JSrnoeYe4saxu7JEmd5riRcCXZ3vzhriX9ZTVj8jZzgM",
  "key15": "3QGety9yvZXyeTDjAMTQxRmYu4gmxBvZHTsjV9wQhA53pCL4AHBr9SfBPrXAauYfbd6f6ZnL5UyLbrRpFP62HzLn",
  "key16": "5feNC79geH7JSehJcCWpGeasdqU8JAEzjWfTUSiFQf54fmB1JgrYiyihupTpvf2Tra2iLr7EcktYESkjB3gqEaSY",
  "key17": "2bibm3GRW3pQJif2bsTYzQF8VvjzDkSnoHRxRrkYgTrkhKV5SV2SVyifFHxaeAJ34nTXrx6dwkmyTyhwrcgGhXjb",
  "key18": "yB2Qd2HDR6i4btjyBkKcaGDZFNkUnU7KdBy3R4nC8qf7Fgwj9DoAzww8wyV4A8uGeAckLec9Y6aKX8PREv88i6X",
  "key19": "Wg5Reavta3uSxmAUUveEL6iwdS2ugqFcj3q6W7iK7hYoJVmA3SBYtxzL1vPxqte77wfCW24Vuj6qqK1PhvCEpWj",
  "key20": "3ooscybGjjitw5aagfq9JbQSinR9Pmg879oyshCyjK867ATtjfaFkSQhVGKdEjfGMH2cixzXMzuuFX5TW5xqUa12",
  "key21": "36ZreMHg8v7SdRSdTYtZTZNmFr2SaGkyCSBE2eQAwGcRDbxJMTCkzsSwbynQySpKBEXHh9BjFjZaGvTZj4L8VVM5",
  "key22": "4exGccjKActPHfmUWWHKv8PsQLUinydF8fUDnGox5ph7PFfgGgd6hkRP63mEpNBS3jSpZdXjFyJQEPm7C7uXcj4E",
  "key23": "2XZMftP2xRHA1xytuRZhxMVBYqw95gLgfVDbisGv6RM541csDz5deWJfjvUW2pY9NTTaFLMM2UVnmYxe7HEwBcP3",
  "key24": "3y94hFK2GVNnVw6f7qJWwWa9Uso2jVsPsMzdpoEeSbVNUe3CV7eU8aMtNcJcj1deGDRSZcNYEPpDxQpAAn764A5V",
  "key25": "41ettVERN7KUomu2Ngx5VouyrsDjtx1WVce7s9PQcW8t7R2Ymj15vvZc2BMJa861sk41z5He1UVxapnR1ArcH1zA",
  "key26": "WncBEv7Sk1e5BQbaiQNrCuWV4cJncLCorie3aFuNjuqr1JYjg9sbATZu7ZW2GpWfxsZWzkgwTKriQ34ZQm8TcpT",
  "key27": "2Zc8HQuUH12eGhqv8aJPVpinASPSXwSAm1fa7Vz41vG258BifannkEi1YhQo8Mr1kg7pRVp4sW8oR63YJ4gnJjDo",
  "key28": "33bDpG8C4KYjxPujfr7kATXLYkNEpd2Vemeo61NthbtWXGvJCDqXFE2kwh7n2ztUPP2KsWkkCUzw7VoWyLEQEg1r",
  "key29": "6APfKpoUjHHTozUfFRkmkvGf1M8E28QWDfszzSHLMpxD6N9asUwhPL5DLYbCcxHZEsiYtwpFxrdYTXbmRUptQCN",
  "key30": "42FiiVkQc6rvMUn8b3JvQ1nSp9d1yZxXKyCa1JzLdtKTQX4c2VhLPpkGvo74hvyxQLGpxnXFHw1r7CSyo456GfJa",
  "key31": "4PdeSHxTVtWkW8fhaZ3wVhhLzPVqcKJaMxk6TM7gxxep47jAFVLtXV8evsq4Auo7YwN33kuzP9ncLxk9RwMQEqhi",
  "key32": "4H1T3GwrDFwGmWsRyHoB64jtwDDZsX6SA6JN6a8cKEC3s6GQ8gh5RXYvCeYLvTfW9rFPMqWzipdv2ySY66XgBcgy",
  "key33": "3mABTyJpSrVjLPjhuwYY8Hyr3BjrSa1u6QeZuzQ2qDjpVGfevkHE9o5L1s3AbLAfaniRQg1HqYK19hwexqDuF27d",
  "key34": "3hPM7RZSEJ7SJnXfnYYoqJVYVWtykTJurg9kP6gW49bnG1qNmGAqGrwtXUYGS4zhLpQbP7NR3rxesYXQXumAfw83",
  "key35": "5t8h38dLyqYAT4qwFQnvVgZSGtzBiu3JzAsT4DxHdughX4g5JQgQzMgyNrg98DfywbwoZf9S2xDeLvbYeSZsiLuV",
  "key36": "4iYrrEVTmEBZeQHW6R3aAqswV4N26TfotkdeeQe5g7DP4Vvb6JP1McZ2Q658FLW4LGNNA7JESJ7SUUj4eFZkcRj4",
  "key37": "Wo9oUZaBAU5VXp3DWJaHeQPnoWFT15s9zretfZrQ5XztHoH7KfuBWqrfBz7f5yHbuMMXjmjSwgD2QfjqXVyuG27",
  "key38": "q697MPWvYMkb5FRKaBM5mEaVhxqPJ3g33muK1EZAek5ZQc22Fy3gsu4sguWvsbQS7mzQLvkzadZX3RSmD7jsi34",
  "key39": "2oWNZsUZgSWvJyoe5JNNPV4hggzAg49HxZZjpgYAmfEwGReF1kBfPsWGxgipYLye3xRpZixHBuzEpiCVAL7JZPBs",
  "key40": "5NsmAaaywKogakeUAfLruJr2MWwLmpERozsYCbL23bWo1fhKE45c7Z92DVetBAcDf7asZd5KjeP4P4HHGMn2fySj",
  "key41": "4abzY8wA1FEPXsvQPeukcX3gAy3BVcpXYfJzcoNVuYvS1teMYTcY1Hg5mSCGWPYZHTMNz5ef82yM8KiHVsb3dKGs",
  "key42": "65v6yUn2Mx3uYgYPsj27PgryTJAhx16BRdFPgZpd4RSi3JKzStsDgVC2iLozV9YcKgJ9k3fP45D2KLy2EbfLZhCy",
  "key43": "5y2PcuE1inZvjshuyr7Y2qVQkrLsTkgNTspjmbMmpuoL1wJ5XFbquPu4ierz6WR1aygCNyvH7pgoVZ6uWu5SuqE3",
  "key44": "3d2xyLJZHr7Z1vKFHNuxnbA1K3gbJFRELyvQEV4vcojhfVwVGN7YLKhJFidbHXLiwbBzsw6Rj6AndA7vZ5YM2PFf"
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
