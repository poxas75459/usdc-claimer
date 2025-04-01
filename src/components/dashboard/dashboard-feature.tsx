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
    "15eJv3P79wP19cZFwg7FViuLhtkvBc77SmBEpaE1ZSj8pmF7yE6c7p3gnWmCRZFim3hvUVnLiW5pAJHCS4E35Kp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56VXJUKX2ebPsii3yhzTJGZpJoGH9sx11HhTUgXMpss15vG9qznJNTp5LGFaius9susaBZz68t2a2MZWX3Fijez7",
  "key1": "5P9KsM9LaaJNM5y63Q89NYJ7nb3q1g3xZGRqLKJVkzhjsT96evedcTPk9H2pwmX95Tp2UuCV5BZ8gbt5MJK2LX1B",
  "key2": "2vPvX8bQbwoP5QZL3T9WR6DGYEhLLtUeuwp7o7BXkrPaKrhnCFD7SDZ5W8iWxp7K1TRNAk5zS58HQbxQsikJnwRS",
  "key3": "oUtrUoTcJs2hBrQxHvMzTTiCmVKjZbq9C3eKr9H7QKpRAWLvV67gsWQPTzWF285o6Ki4vpSJXbGcEPgQfw1UGVN",
  "key4": "5sXCoF7zJW1kuErcxZXrc4tGYHGwSL2gSCPzUW3WetWLrWuWME1u9Toibcbav5TFCwyMqvJNP4FmDcGPgCx6sR7R",
  "key5": "5R7CzB5RtPGqwU9jesfraR61GJr99TcDhvWYSxZA2xTcU67FBPEKBL3RUezgMRP9bEV2zaN8aarGpymaHTmQQnEy",
  "key6": "4yitjEDsTaqZKLrs9x91Gc7MfUMjaQ9vUzscxhgri5hcT971bxJS5DmNBcnnrCY87Tq1qW58ukreGZQZpbwZUyaq",
  "key7": "3pcgX7hnWJbT8o7vPUavxwh1X3PuzEJKDJuKj92WJRTr58gSaiJgcinJP5RXUw5KAJLsyJ8K9Dcd5yBcQ2AQ6VJu",
  "key8": "5UfT8KHJkTgNnxXy7HTm9a1BMQSdBQNcMpkn3w112h4c2FkLBJZCuwJTzP8rwPkyF6NdUSdY9szMzTgzCZDvXAQz",
  "key9": "34JpDVahXXZJXF3dEzDTWMah2yiaWsihvZw3jLwXo5K5QvcGuF8ZBBj6Wq8xFXTjZwkkgBgieLmegTjkp857Fdho",
  "key10": "4iadeueN9TFVBfX8bkfikmti8p7fcJkWiTbf1B2A4dZdANntfVR5aXvUCLfV41fBcDfALaXYQM6ewzs3dLRcPYgw",
  "key11": "4KU3Cd26qLx8CvrGES1AVe4J9erJudJ6SAhNy3NYY7B9bdkspCkAEoNqz1uz2xLPRfXqtfAUCV8r7Y9YPnqGRgPy",
  "key12": "5N1VyEJaNNpAMZhwSw2Fkyzs2mB421an9W33UBcquTWoShcU5XtUdKQLpkbj8KPUfkCAa74btt8eXq7rgKxw668x",
  "key13": "4wB1xCBXWhf1XPidBNGXDdM2R35wfD2AY3idxwSsWWC1kViuuHd19AF2qWwZLMqprrf7X4MwjRpR3vkaLiFpm6vm",
  "key14": "3hns8NgGMwaYmVst25kPBCwYXWbkvwm8D5YSdjsFxS1Zno35yhx8HojpVohdMV2uKgbLBXokiqnC9Nnm4BHi3AFX",
  "key15": "BAHqj9fp1qaFmPRT5YLHniQPeYyFANfs8Z6oRNcU27UxZiLPq8mx9KSyYLkuBY7jp8nqrdkUNjxXr13P9LoPBu1",
  "key16": "56vv3noJXyXqoyoV5rfs1aHbYTxTG981tYVxTorYqhTewVCWKVTerChmWjqSJ6VAxwMHpmC17e9uDEN4HqktiSHR",
  "key17": "3uwcqu5MVm52aAVWC43z8aRxSy9TRGxsZCYkgEC1RNaGzJHuXcRnH6PiCkjCabB3JheN7Yj6caF3FLw1w6B6hL6u",
  "key18": "RGThtKRTdAFYpBH5ac7b5SYe5iLo1quppJfcUkX7dxqGWPecUuEYwsrG4FdRyKfoivh6WQetiqNB9n7FrebDUcZ",
  "key19": "8hS7QcUCRP125KcDmAWqGoQW8RvjjHpCqrarXuZ19dRh1RsToDPT94H2DExyVjcqKu5HKs2PpizzWsAvRQVpPGc",
  "key20": "3sGz1VXSsZ477UySpRE1gVwyfTEtJ6HS6zaGekwT3yL4eHqL714Z6hUtyrvag1t4dHXe3bST1REpseypkMwwjbVx",
  "key21": "4bNVPE2Cr61G7F7RAB2Tng5AzH8vFjTc4kihzSFUT6uiciYFvYS4NShyF7v8UFcyXdfwsCUatRJwLFFhYmyGkdDk",
  "key22": "2xnTkpjvQzeunQ9ji59Ac3TfXzwP3tokaETjv7d5MZUVghorXgHRyTvgVYiRgwE432yEK5fCSnM2kt2CTX2z8mie",
  "key23": "4GvoJUZ4Ekc4f5N3UN9TceqaQvazEMPDpteohxMAveiVkzx2KWPcpWMvc8DGyRMfnLbmvmbph65Cxe8TywETuCSa",
  "key24": "59GotxXR24VaQTimLHz14YnPkPPfHMJQPJkQcnv8znyhdpGYx2rFpvN2kiambz9dfzks6nfQkyWaJRUxiEdY5Pvd",
  "key25": "33THBDgpJUEPxEEtbqWoouG4jQMuoJkuPjKN1PfGp6s4NxgjzmuiMntXgXwAgVmiHrtbkJQKTbSz1g3iCw8kUC99",
  "key26": "3sqMk7jZNGYbgZY8AKz5e6VGX1kom6xoxJgvaJKkaYnPDTAPS8NzhimpMiFgNSK4R7MZkxGpvx796YRGRwfys3Uz",
  "key27": "62q2dB4VtnwJpebaeJMAdJyE7VFGL8xS6JnSsfP9FcZB8BzvYPyAASjtWhdxcc2nMXWPeqY38cuJ7cLTgN9VLcta",
  "key28": "48sQoedViuiztZc2uyowoq3LAttJhT6VGCrhsLFCcozsVZRs93r8mgJqjDG7n53QDQyrkviq99PQGvGnnasxeWsd",
  "key29": "LadAMxJt2crHMu9FiwR9RFeSRkpFrpVn2UrVrFK7EYfcDNM4cUptZvwA8q7gzEjrZVDWsg39RABKyksGYtPSCYa",
  "key30": "5Ym7JJ5RudPU1d95yxnL3xjUfhbXqC6wQbKJapqCztx9mrRb2sx4gQ5QDNf76ZCVMw78AJqj7JB4nc5o4Gradq9D",
  "key31": "2JV5Uw9VjGoEKWJhSikiVCdSEC4Er8LC9emc4FKoDYsYmN8GgiYCaDsuF4zErrM1YW6cT9VLXLo41eYErSzaTUbf",
  "key32": "xHuAN17kErXDKS69KM1u2bfWk7EVb6SuPRJSn71L2x7DGhovXdZyAnvULLZk3kV3iUeH5smxEcwW53jjTieg5NM",
  "key33": "36AFkoYZ2WXJzsKzgSAPW7edWx9QtxbXAd54aU8HQwcAYfbjkeyqezHeJySFcAWphVwwGFDRUqLajHTShrjATLsG",
  "key34": "4DCv5h4vrsYsz1jddkfY2fZBSsvacGmNrqy5xxqetnmv3WjuWdeiTRjLvPaHCF6bmJm2eqgbFG1EqPfjnMYyoGS",
  "key35": "4HQnAr3QM465ghFwwnoQ8u96TBAwBuxAtFwkwEV7Su2p5dtbEHQToo4pUNGhftSVeYXYTBsn1Zqno5WzGf28YYKK",
  "key36": "GpCWfz1PFk4HPkUJSLCbpf2vgXBLcdwfpsXbAGedp3CwddJpxgJh7tTnXzQ6gBxVAffFC9U2yCwmiKetSFiRWMW",
  "key37": "5nxf33XF4pXLFRm8vPBmgX235SD9kQvqL7EgDMmCrVfyVssGyicwcYMSJtGuYqBdwq35dQ4Y7khaqyZbtXoyxdX8",
  "key38": "4B52wn9Lp4wDCGA8dXVmM6iwiUay2FaBCpPdzjZMEvcsUWQy5DmfC6YickDnrBXx4qkKdMJHADV8to3UarrLajBA",
  "key39": "3NsuUrRqFfM9EnZg2iLs6k2w39ome2JgdMMWGkMwXSQZTvVASPxBGaX5miSwwnQTzZ58swNAqhzPdPHMyPk2ERLC",
  "key40": "mnreXSLXZvDFsJQjs4PTw65SZkSWMgmdSBV8A2m9BXimqnEzv6HoKE5AGhBUF4LPSawBZWscabx88bFkj2zw6Ah",
  "key41": "dSQZ8MozhnmkXPSaUhyqerFx8E2LCWTYXvuWFH4Gr3ZX9UzctR7XG6MH6sQTyW7mCpwQSH1kmZ5Qk1hUaLRWq1B",
  "key42": "2aBg7yf8GJiQK2ME2Bs2tATJomWom4sABcpZmYu6EGNxBeuLWwMv2JQYzYRWj3WG8PeTBvUkjrmRCqLHuvBXkG9o",
  "key43": "54hFBzTuYTfXhnKgBEVDGzAiAh6yoK6PZDj9Ub694xRSbLzUe5Sp7jqtHZiqT3xX5psiGdRQzzkVeYYg5513Qouo",
  "key44": "5bcubkVCmi2TxUEnTKiBNvYN4qCEwGxMtuz4VYhwWo38hWMPHrzZ1NmMMdKeSaTk2Dny3kFqn7jfkJ6cza6wMSs8",
  "key45": "4JNTzuA43jCMLG51CwNk1FTaPkJ6eWLq2mSzkV49pKrLvCoL68LychERkF9sKN3Ry8pZb8NMiNeCbo7p7JA2eBJp",
  "key46": "3dQUW8e31ZHMU7Y5ZCxWYwU1F1qFbhkXWDWWYjbUDnHDTBtRFKzm354U3t4U1aMoJUCZzDjjGdaiLQtw41RmFg5o"
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
