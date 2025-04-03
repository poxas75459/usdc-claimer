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
    "QZd8kPiyCsX8yw3zN69PTTvx3jPJ24xibarXrZLBctuWwMQTRZC8E91MVxiYAr1FCiHwk4mTHbe1Gt3JnCSGZaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VTdDVTPkoJK7XkG8cygmv8L6V2XP73H3nirfszg3fTv8gvj99ca1S7a9UqbrRLmvgZ7A7DV87s6wugsDfzywYfX",
  "key1": "3SLgTuEDY7kd2ho1FMtch33xTdCFLfwBcqvbMxgTa1brerp9cpqX6nrtikUSBJaZ1UMkRvycaHW4fEFmWtCwFie7",
  "key2": "3EFS2ZCuyztJW8WvaV9U88tUGuoRLFXk34TuTeuPDoPXwrRuh2vDwr4BEFhabGZqoApVUp7jcDBpbcf26Qx9Z11z",
  "key3": "4L3ZfjtyqBdYtfrDA5GxjCd8KdvjFwLUWYDWurREAiGEMpB2hLYFUfx9UyBqpcD2hnK1DXTGKdQeBC3rewX5b2aH",
  "key4": "39jGxCToJ6xv9HrL2VZ47SwjTYMiir7AcJhj9Cd9yNmPdPjns51ffPYNgegJKUwyqbd79iRNDtWSs6jwN7hiS721",
  "key5": "3SrsgX5YQmzGWSyrCphazCGyQNDdr9bq645SYwSpDNqAL1pirksqWsy9fvhFgj3fhP2nn4mbUsFQbVdAHvJQzmZc",
  "key6": "3BhjUP358bj1Whzse89zC1QCZbssNwq4ZqoZLpeQEpHk1XtkQNG6ZU6DbwFDCfMdkFq4hzVUoCPAVcrKEivbYFHC",
  "key7": "4SsfrxCqjALmYj39PTjEstbnLX9Yewr5xMWLTmoJfsFXddfhJrpNs5KtmuQbVa1e7ae6NnAnAv4AwjkxYRe45hPb",
  "key8": "43Y2uHmAiEFuiKQcFYkrsE73kFsLsKs1uuCNW1tudYMLYdJgwywM3dBrrQS1QXJAazZZB1RQXUy3b1i3hhfG5Woh",
  "key9": "24CY8GxKfohAAzT7fY7evQYULu3SBn8pRTa8mkY6oUP56pJ1Jh1Xm6RkrQKo4f7DpaCbdtVWMgNmaFFdBYX3aamV",
  "key10": "4uriVM1Ys1oqjqPyxpdT15xkL8GjReTrTBBUG1aTsBFyDp5q8JRuo5syGnu8ennqDXP3GPPjaSdZP4mNShjnBRp6",
  "key11": "2QKmPTMcv5yB2g5ieSekqTM7FXEwnTZJSnGgZjBD8c78bmFtyFZ1eCNUbyD7Fm3RhDVoqHFkGxi2CchA73pdBtoF",
  "key12": "645s4Zv4iwq6V8M77XEMpevh11XRtyHTwjxzJEvNMBWFRdUQw8E38ypawWMZHckkhJGb19FXX7Gm7ENDok1a2j4w",
  "key13": "43ZUuHLgKUbeuxvYst4mddX75y5ezYmV1TfRbuXC4mZZe5fhmMXKGYujZMAruzB2CtVrD7FKrvFkecfoT6ztHPpL",
  "key14": "5UmMoasnXx8pZaoMQUzzbC2dJT9LJ8zhdA9xP23AKawcxMqk3GR4bRtZyvFS8dd3gFTZuaK5vBRgtUdmvEo1AV1v",
  "key15": "zFwgfESiSnh6QZvbqpa8otT9EGipfEGemcqSd6LSf5esBGqvwfbVnbf6qXAoRj5YBthMiEuQ2jxZ2mi3nzzi5EH",
  "key16": "5vMQiJi6cCSDtVX6QUPrvEjsNa2h9XnSygWhNv3EEAowMaWPgeA3kPktMzwf73dusfF6Pphwn6YehyehE6rEMNMZ",
  "key17": "5WJm9QDxibuvwsPxTKu25poVsp3ME8WrVRw8XQp5SJuAE81vnDppBsYF2KzT9TrdNxB1GskNzhiNmZxCu5VA9Q22",
  "key18": "4yQ3GHDaeGtAzQwPjtbqGzkwyumjSnKooVnbR8mhzZev8uBZVj2gXLzrfXseTMyy6t7oMB8TWJuagVhaK5J4i3TV",
  "key19": "2eKwm64XJoE47LyxpUPKsQCBgUXu7hgbyyVX7gNs9Tq3aeGn1ssodzwba1hfcLRv9E5y8UmGWsteC95a6LMdrQyp",
  "key20": "3JmMTvccVrDsM5CSubTMFmTrrhmzm3tPGiJucYpt6VqLuVfMakFoSxDkmrpjHddboo13sZX3UKiLzaNFa7nRJJJS",
  "key21": "3Ajhc4c2JyvptB43eEaSHBfDnkYKMw4Lg15EWspicMaYifzwfqp3NuAHc6PziWWUErJV3NHKFs8tyQ18WuotgpMY",
  "key22": "jawKnwfCcvHqWpHDt2q3R8bJqfwAGuaspJBUDV8SGNxaykyCGBiSbcgLjzZFtUm68fmfdqgtA3Mc1oh7RjGvzSn",
  "key23": "2TVNYMMYG6fc5KvNtm5df5M2p7AFgdkyPZqrsUW13ukUN31FDpShsDTW711cghScM96Ni46hKzGfBef1noYDRWrf",
  "key24": "ZJecHHZadmAhkdomQiT1vxappJkp1Kk1qbkjw31eXH2MafrJVXHkNmogpqcX8QgSoDtEVogadA9kJcLLUwGW2Zf",
  "key25": "3bd8k4PxCuvngwtvTPAQjJdprHFrXvfKhHLtmSiUUnbnzJqeHyTs1HDG2fVDyPMPJYtatK6QcZ4sriSYe2o3dhUM",
  "key26": "4AkvmCKs2cZi4BS9GEYAUVVzxPFC2an8J2QsWRNJqJqSnVN84387xryx1EYSd91aF3GGHixQvusAsxMtnVkyMLSV",
  "key27": "3qivxRspEpEqA3jH2Zzuph6BSPqDQg8j83kk3W1LVVDKjAPWYea7gDQnUTmvXzKVP6YtM4ycj4ji9XKcbMuXohCL",
  "key28": "2gWbM3wizirzGHAKpcoV3LuSez1Birz5dTuGLdptfTDMQeVHVMt6K96x245K7kQsUHYaAh5rhsohQtWs8kktg9Up",
  "key29": "b3cMRW9qLNuaPjLKuvGkNadSW8Cw3kNcktAgGZwLG7nziyLP5qrmvZojiFJn9cXqAH4i3Wh7yYQiAxpvskLrgcT",
  "key30": "2tp7PBh9uzXgUNJAwzVyQ5KxMd3KdRP4vPzZtFxV7X7i4M8sMqdVpY34B1UpTxWRRfiVXArJzLF4E9WRCLJrAdTw",
  "key31": "5qSiWKza99tpJBhvpuzTYhMztAWZF2aUyGnQ7EW5YqyDeHpmWyGjnqeT45abZ8vM4MBLoa45YrerQf945omzr8uv",
  "key32": "3xPWafNLLcaazrBpvqNtutk7UdhtqPfwQzm44zwNnGB5bdxZgHv98Xywt5nbWWck6wNzbPGfgW2xz3mz1yTpNzad",
  "key33": "4SRHE8vSFoQqYkqJsCm8Tpu6zgPznk4oiDESA9J6vMGFumcR77X865mNJbXcCAEeZ42mW1nACezFBHfRzqhMNpTn",
  "key34": "2ihtfKptwhYEhv4HEoW4WNoHVoVuLWaczhUTrVVn6tHpjHLMjcPMaZysp4SzTuHn5fMuaFhGwVDPEHL7w2w3vZDN",
  "key35": "3USr7SQowwTqHDRgPJw1K17WaEzFVY99kyczgvhRZNRGGv7b8iNF1o2wXe1pn8qhugCQEtCYAzz4FU5Bzxz5RKE1",
  "key36": "2adRcKUKWsQ2z4T6p3opCUvnuV96HBEegQk1TJr6mGrJ6J2NWzrPN1CPHMoMmRFRVdXReFDdaWTtTiRXLxxeJEzE",
  "key37": "2tP1QJ9GdrCg3fWuHTZsxidiqsY2ASsNYwtYDXz35sB7bdAumrsuT9jkSMsRLANGTLqvcNw71wSSkQzFmLbwxUb3",
  "key38": "3D4cdYEVeXqAREuVxCtmEkexBLQz7EyMo21Y5AL6TpR8AkLKvNMk5nxN2vETj8TgPtrgv7a3zmhFYbrcXSEzQeAM",
  "key39": "3AvbeydJJeTCkVw45utzwGhYQ8h71JNcsX6PXGqLziJvo3dikANY9XaFSZKSLEQKvkQmgSu9WxxbhFjA9tdFwynv",
  "key40": "3nU2tJmXqwzkKEGhcG2mTHRSgE8aD7x7WApwA1YBnJCYeVe6vGuNEYtZnCBUvR9HeVRxPBkrvw833hukoYxjq8eF",
  "key41": "3RZ4x1kpGKer1AtzYPRyxouNWRZLzevEmYkPshFmfSpKmTrw82Hs83K54uFxnQV7FUTqXkMxEcnaVJpmpWffJvkF",
  "key42": "4ZbJSbNfMm1X22ZfgJsrchhE9ohKyYm7SbppBdbgGC3dQZNXAg23UWAuJNZ6fRvcYxh9WrsFL3AiwxJpAggRrtDd",
  "key43": "65U91t1TCXonnoHKA211EVgGwKQp6QZTiUQ4LoDEAu4Z7F9yN9tYFWM5zvnku5ZAYLcX4YvaMBDbTAtekdsGgYx9"
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
