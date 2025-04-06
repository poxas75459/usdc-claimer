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
    "5XSpb84nD4pin2ijVt4WS4kkhdzBzhqXoMqQzVjKYehdHTh3wEwcFjMNnR5KZB8iZBxKjSVe8WhCzU2dLrePMPE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rjTCj8ThQpVN2g3113NMiF5ebUnwjoRo7o8M1DUdw9kHS2A7qrNVLTf7EkPxLtXpmfRXmWbXtmqTMJdxazUtiNu",
  "key1": "2wdnqbqPXUWnuMojDu1Mmf57RtW9q8FRqXKUAkE9btXUn8zmGLPWdHF5V3sW5pxtVCmK3KzDCJDzkzD47VXtzANf",
  "key2": "8StspotP3gPVMDQkLZY68GeVCNtv225a3gybamtLrz24qEoLmJBxKXqJXGucxiy1jmCDajzQ55Z6VTYz4TbmfWR",
  "key3": "5MtNyUehtyHJyAWovuYuFksApQPH77zvqBt1jTeWtU9eMj5Z1MbYugCA1Q3ySLNVexx1XGwRPfeyNuT4D9VTdsct",
  "key4": "5rcWgzYAb6EoT17WLy9F3V2NakuWEoKmVkmareyVpQNdKQbsaBKg9yfz68DQxfFpBauiG2K1V2aGv8UkiZLsyrod",
  "key5": "5SBNGA2Sv87ekgX3NYenUCrPHqsLNeUeLcxKgesAaVNsLv36iQ5Co1p6GezRdhxNxrctet3y452YaQgCMxvYrWmK",
  "key6": "2JG63roT7F5E4wCsRmvXeoqdEh61h1CGzCHBCtBqWBJm8kZgcyhqDFgJLF8xDZqnX4EuEBPpdUrMgaHe5LoEbftX",
  "key7": "2wDPQpquttexa5X6e2LB8EKxYVubkZqdWiXQwMuvSEsxZ7fD6vP2ytJMWCwsGbhh3kYfYThsuZNaMzYLEQ3GwaLR",
  "key8": "5RdqkEkn2XkyrP7xKE8MFYHkqgadRNcWAfCeZxX9xEqNtV4LrBC3iSsvV9rUxVAu4xqvQmbWPXWx1LFDuDHKdDv4",
  "key9": "5tQ3mj5eA49WnoQH9mcbxgXTsLAToZz7u5CzRbcuAY6BJKfbaNTfwJKE4WYQrLZ5ft2i4CPaKbxcaYqE7WDrNfh5",
  "key10": "2C7uxkgRZPPUywg3aDxAYhSJMkWqxt1RqQoFfg8V1awk8FknKRVBHFmtL91kdQmzhneE5wdwc8ahx7kPrLuEE893",
  "key11": "2sAkMcHMPfPCP4nVEaXc2u7cp66Ura74DNEwDXzRiZFcVhrrc1g92eX8GNUXDJM1L4J9XqpcfHeXMEsCY9tsDK48",
  "key12": "5Y9WHXBT4CNSbAq3HjasoiF1sbJpwNPZDAx3kLaDhZUJ4hhnCJUSAtmyZ7SjEwdWwesRSCRo43p7LGmSvPBnx3Fp",
  "key13": "27PN2GtK2Zi4kXUHuM7MXvdjGVH3zLEJy8KWswn1KSbuq7UcRxn2vJoRQ7NSrkmQEf73T3Y3tAXt4C7YZGsW6qu6",
  "key14": "45gSTGt2amnLMMwKU5eMcGX3vk1V7eLWGNuH6hUbs7h1njEpBmEZ3uvu4S1FZJnL3CMW8fTPKpEbjCK6L7YruejJ",
  "key15": "YnUfEpJNb7fxr7NE5UrhExSUYRNqgbujt2CA5KJHNThe9ET2igEWpLKWWLZ3aNbkwgAT6SaXvkCG1Ku6Z8m7uAq",
  "key16": "21pKaFp8dkRqJqJPfgEvonbxjy6MPrr1YzTUiRn9KF3khejQj5o8YH1XJhXULKx9WD7uk4nrVNE6s5bmFzSjCoub",
  "key17": "3xdxmMuGQBt3MGgBxrVbMjwvHeXpABwvoS9V2vRkD1tJrJ4fVhjoopWqmDzavEtL3y98rQDd3yn9J5VQhizmAFWA",
  "key18": "mAERkRdmSyXYhfrrsRAZtYL4dL8wdQTsrDKjiM47o7Q5Kn8YG1xmaBKTqfyq2Pp9Rq2r5pcUVHXxsJwbi8jUxLh",
  "key19": "4ba9ZjiyaJaQbZkasiSS1zhXtjXwPZse9bVqxBA56HTEAmW28ZU47ZLEdgJffJAGARSax9bYPUkmCr4pNBszR3m",
  "key20": "4kZesUaGtpLJj2fgo7owBK28VLU5tdeM7eD1qCzuYaRY35SxSz8BoPwnrhSbsozj1FykN3of4xZrzE4UJawNoqDN",
  "key21": "2TZ4N8MiAnqW9zYNmjW9iftDAodRwvJdiEtf799zG3NQmo8kWCASuQYuQ1eUJWGPy8hDVVXtiy8DwqDXDdBu96g9",
  "key22": "dgaNqBejCANEhPPQi1DP98XJVHLSNmkTKYv1Wr3qr7Brzo7G1jXJBvQ946kyn69vtLj5WnXBJZTELJZiAiHKFVB",
  "key23": "2dZrdiNhMeym7vwWFxSTeeKZFysqdTjtvjL7kZfwQFNUyWBzrtM5A9myxoiKsP7bC6CuCWyRr9kaiZkbQ11mCK39",
  "key24": "5bRHDDgZPUB4HTBDwdzGesk54XV5vKjMrMnzwUhMjcLmQB6YL8g1CYTbDPxFVLS7zFyw3jw4yP1XzsqCvXXE5ptJ",
  "key25": "4wiiigpZxKeBwG6MmDYnxmw7ajho6UpsHyZ4KCWXCwxT2tv57Mhp3VSj2PE6hPHmqB7ETedmM2pNEV3VmMLT3mYD",
  "key26": "5jcQ898qXu2zjAvXRTc49Hy4b9CJ4zk6bmpS2pL5ZVb3CusX6RjFDSWrsQyadwyNcRPecbnz3AWtmTGdGk8zsEB5",
  "key27": "5PnEF5cGK4wHTn15ZVfCAkXUeNSiqtpEp8k1JXPnvuyh9jjNGYmZ6qWvzP74XooYFZPQbmcxvNgXqXzMqyJjpYQF",
  "key28": "53wT2NrsQUg9M4VUc4RM53kSyfAiKo4MeCoxfkv6J9XtYDznmteTnCpLcrBnmV49pGfnFhjvpeeC5LxjyvKufPoG",
  "key29": "5UQJTA4Eov4QCYZWjrq6qmiCvSDcchdq7MoCQtZMbiXiBQSPNg1ms3sjCasqn4f17mqUZPKdw1q1vWJKrgzhTDVh",
  "key30": "5jXR16qtjSDSepHrP4J4RyDsriASC9oE8KoLwmPYt2j5VZT5XUF2buJku4SGYMHgwnzp66scEbmMxRwDfHLY6jqF",
  "key31": "3bBXJzdEHB57gukJZRW8eRMGJb5erQmimudoBDea1BCqpnsHAKiYgXDTJzhozgzZ4YNr2crUMZKdJ2B3je3dunfE",
  "key32": "42n3iWSS7fjZzF2fpcfaUwMyrJ45ssaMqP3kHNBTC3izJmuLAF5QpMzL4mYnPS9yrMRpUYkyXKFEHZc4adg6wp6w",
  "key33": "53D5XSgwUB8znnR2NiQ7cx7qNN5RmoSmkCu2P1hXjC9dJyZgSn3UvPH6UymA6Bqstm5w87sNLCWGhjnwXgfXfqnv",
  "key34": "5JVKXnmoAockqDLGeY6WdNz6K3WK99nd6sP7T7VQEcLZnB3wKD5RJCekDFubGmyhovqWWqanSidpqwnGeetr316C",
  "key35": "4NdPHjbk8fyE8dLuoqSZ8nSAdv6FAMWm8zLjj2Xx8FsPs99hA8rdGcrZSSfFNBpZJRdRu7JgqNoTEBQUG5iBkAGY",
  "key36": "4nVMHY4gBAQqtM6Ek97By3GD9FxKFiTfsZvTLQfgC8Bht9zD6Fv4zuVBcsbuVv5v9XSuKckmQEdSSboKHHmjkcSR",
  "key37": "2G3kdh1XiikK5wqrWiRDR4jiFu2WwQ848iJCBFJtW7fQXYomEjMTpy9AH5pGkwTtUt8pfXjUiHeDZQYGiJDNRw5p",
  "key38": "5ctg8DwgS8MHAYQiMTJT3qVocGuaKBkAz4asiR81DiNYirerxgNCNe7uPX9i4t7ocXDZdwVD1U6ag4JPLFy8m7j6",
  "key39": "5nCBR6kNsC9WuPegdUcUUfzB4U5X8mfjcHy9W3s2x6jUw7f4sN1AoHtg9ZcZ8sSuJm8RbcEYA2LhuViQzJwvZ1BG",
  "key40": "3BLXSWLD534Ccm7caECA8tqht4evQ316TnjLgcC2SjnpNuJQSV1fhnvvKXq5JvDMFggwDfmyabT6jPjTUgQoi3jf",
  "key41": "2M62LNEeJGUGqgamjwAQ3L2m8T8esX2AmfDjxk9jq37B1ZcMmowqX83onBitoss599FHpxZiEQPtCTpfjMPJqWas",
  "key42": "4ZYiGF774qma4eTHARiQAU8q9Kz6J5McB8GTQaZ7YjCnqiQQybNYCeXq8wYgCxkP2QRcwZfHQ2i8UBsGGE1TmwdN",
  "key43": "4PAugwhPEcVVtUTfsYUCm2gAYfajqmQwkn4pDxA8WKTEsagSVpMi4U9txciKykHfZAzjWDRC7oa9JuAH8PV7SmBU",
  "key44": "4xxFnU9BvzPS8XvEKyjYvTYG5FQBu6SnzCRPoX1EAPV7s7eXcGAWwSNbJTxEvKtjnrq94HZ7rgifKoRcmVdWe7TF",
  "key45": "f24WznR7Rkq4NXPB65VMsajiRaBRtQE66ejnbA6mRfHsAjrhpWgKGh5gq8ni63JBVQt3SfcKrCszaC3wrqPjtSe",
  "key46": "5yX1bJwtzr3MheSz6VcphFAgNa6u7QUwPZ62k6Q6yUt1K78QQW5zqqZd2edhiC5FRANY5JKyb4C8SahCrqryuXXs"
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
