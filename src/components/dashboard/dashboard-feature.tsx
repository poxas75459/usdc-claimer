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
    "3Bog4C2CWGyRfRZ8bkPhRXZRjQd4Qze18hXTvsYsXbosqEKDxS2qDqXcRRbUe13ExW1Ch7MSFs8QayFL7tGKA1jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27SJbwzNB9c2Wh2UeLxUFxnMMpopoiF2awC3iCPRirNBgTxMdusg6ASMVr4uhMeHvy6cYjuC2e67xArBUxHdEDSU",
  "key1": "4vMZRXjyw24kyw6eUHzuyr7sPrizERBkbpbgLyJ8EKjZW8MciNye1t8V645rbn1XvC7EUvaRq8jHkKTiDeFJ9E8G",
  "key2": "26oAbXqzrJeS4pDzsZrxv6FCzbodwxhijQw6YTALmkH5XWZUBz3fHuDpYrWwzjYuCDYwRobVBWRVSmZ7FfhhwWH8",
  "key3": "5H1B4PWeyNZ8kbtKjNVWFqHPge8CJJ4ZRxKq5RojdLFhTEoXkuzh1ahmRXySGHu1sa9oGU6TT2YXvyXoyEge3XNh",
  "key4": "pMePi2WVM8PPctqbFqxhvPY8XnHqoyEmQDpsTFBXGAZKXfBDGUkxL1iGFJn9JSV6qtTXxj6GCr1BxQeqNR2Z5JR",
  "key5": "37kZmVB73YJo1jiMLGFnAx7CpsvT2jWfNDL79AP5UPS1DWdKUNhdkNXi7ykwqE8kba5ThNhZtydtV4P5MkkHdwyi",
  "key6": "5mvNM8WVHYaJHBbwhy4rLqn9GyV9aWpw2nz2YvuxDM46au7ceiH3ys3z2ERgMgKwN19jpeeRASaA9W3wb3jBvATd",
  "key7": "56Cv3X1Kf64uqKV1jkV3F7ZT4jCfCxTMF8KaZwbu44wRxntEuoGcfzbUcvcv1AxZcCK2Huskhci1SJ5TqzpbtXz8",
  "key8": "53bH8ZefihKTLQqF8mNU2k47v9KYCSavyzrxWnZ1d7U3V6GhaPz8ccTmZ4MaAapHyy2v5vwPUDvR7gebZLWUr1hK",
  "key9": "52PtFb9QmooQtF6tebDsa2vf4g7oMhYorJnmfFZbAEf8otCUQLPQHen7FwRKRxGiGxqYjmtKpyG5J9bnUoj3PG1t",
  "key10": "4z5VxRWhhLg3Y2VXk2ap7csdV2sXr9Vt1y2A6qSYSbpV7zTCqwWTERwdv6shcHrABaiYDDLynBHpYuTRhQHt9pjC",
  "key11": "5CPARyvvQZKipMdCProPSAsvRwtjZHWtFZcfpXvpACW7MS8W9PVrzzQ9EPvrYsU7GqF3X42HPbDTUm9WZ4z68fYG",
  "key12": "3dBV4dQnjt53ibCLhkEE61VCXs26Cve5BdXdDbqKxJ6gcZ1D4oNCPxd2o7VkJpMoYci9M77cV2hSDQ39S7a16Y5E",
  "key13": "3dJovBXBNop9LRq1Fhwxt5aVvgJocLwJxrSfDu789vpT1g3t5e2DwfDRkBY7RDRZCMomRoscruAiKCM3MydZ1m6u",
  "key14": "3KbmREYe2DQHeKmK7apkCX7fu77JLByrFUGq3H79P69YvB5Kw97oBoows29G9fvWrTcHFJw4eCbWx1y8A41vnzhW",
  "key15": "4xdkRZyfM4Eywp6b9U4o46D9ZZXSWGPbHsdrpo1DovcgcD5VVZrJKupWYp9XZJpRSRB6PVoxazyquffQKgBypWTW",
  "key16": "3zE9zMHATis3zuQgDvipYWxZxqoLQpyMmpgBPMCff4FE66msBCRR6U6aGWWgy8AMwgJW5jkHN69TaAAJ8kgVvM38",
  "key17": "2DhnpppbxjJvK7MBRRCzcL2mfzwCjcbFw6VoNPU8evXS2Ec6SuywftZ7ygtnWPKx1tjHSPceH9ygN2T1q8jHjs47",
  "key18": "5qetTBnqF5CnHbfQcPcrbA3yXSGxBpfyRGwTWRWiSuXWo6uGM9wv4W4uniEZqbrGxUgymaXUQ3sKYAJfLWKEyL2S",
  "key19": "wywDeCNE2MvBRcsCsUb6PQ74vBYN9mgxuNJWwsHQAu9a6eC924Ga6h7jjiszye14NefuQSyRy8jRrywErjzuAQe",
  "key20": "5gU1EFK4EuXxYV8RycSTXDrHfUd7RmTNuyCyd64ZsKXNxoruajZRSJswhHoLyhdQoi5pwPcUy2aLbx3JvZMQCHhM",
  "key21": "2fzdc4dCgPgzSu4mrGWC5anKVaakkuCzPbY2LGteoQ5xgPbsdQZNPCcB98bxA5S7TFLZMsejH9ZcWGEqv7HKGUKt",
  "key22": "47WPXeTHGFsSd3VyVzCA462YanZi76U5jrKR4EGwmLn7Gy8EEJZUHqRk4LznooMdf6Va97GHmKWS6ow8rxm1fGQi",
  "key23": "eVqxLC7gE94zeYk1WSXT9Ui2XJqcEU1GeftoCX34etS1KZRRNJk1LuspFqw2Msh5aMn8mRc3FjnsHatfEJgPftL",
  "key24": "3UgRBJEwuqhtn3fGZtkgS6vkFoF3qePLejucAPYtzou6UcmoizW8n8g45bjRqFnXci6bAtNMVRRNuib7x8uBVP7w",
  "key25": "2FtqR8CT6gkzbaM8Bp9zKY7bJNaCF88jyMpg6b6yfR4dqQBNSWueK153GxbWhyfznGKoRLxYTSvokpcrWjcYXwEk",
  "key26": "4sJupitbouAGcsJACQP4PoAGyLMRJzZQiEC2SFepCtC2Yu1CGvFjVGXughyVD2xyrPpLNLYgC4tYkJhFMCx6KLxm",
  "key27": "4wjoLjzZGrazR5jxpn7wyUYdv32UG8BxqaZKeaivv2JLbFdbWV8ymBppRZxab263UDUGfr5CufbNVwXkEwJsZvpy",
  "key28": "3Uta9k5qZ6BRppnivPFFTdL94fNfwNVegS34HmXtLEiyQAGNSLd1gLE8Pjxt8qiaKHj4NmHiLwyJjNnZxBueWRAY",
  "key29": "ZAjfZzQuq1mKSGpCgMyxf9cwrRo1FpgV54vVyj6kvy8xGm9ky3M4bMFzsYUPopAMKDbNqYg9wZPUYnwZyuqBVaA",
  "key30": "54UZ4psmNhcoVfpJJiVHfJJ8E68xy8Rt96sTBA6jBkd5ugRNAgBhqvecaCJ1n8KWrytYV1F9RBqwZ5FXMHRAhGF5",
  "key31": "61meE3Qa59PR8feZtU7LoGcE4xHnv31XfyaoEKwnBArP89BaXGkjYGvwKbXPpXPCFjapou8EKcGf18FzikcfiQfz",
  "key32": "2b5WehEcxcYkafQfLReW47co7TthtCoFXuAPmKpMzVdvkUMB4wteQhQVT2M1bAcvHocjS6P1e93QoW8wsF2W9q5E",
  "key33": "41rLiKbsM7MSsD1H966UnZweZPWkbUNLteLymFejJrggzYR6WXhBsu89Aqye17vZsaBNJrQHFC4QJQLwGyyBLCcR",
  "key34": "2Z6zgqQAQKhgCoZcuPGbpqeNF3oj6AAc66ChLyp9Xsdjc4NWHBXExkjVzkHTmbcZL1XwwdXT2zFiiRGphEn4454m",
  "key35": "3ucz7gdsWAFjPbBArcoJpPkf3B1X1yuM8DgupptBGincBvm878YieqNBLWZrnemRbh4TSQS8BAGSvNfbGSAUarRe",
  "key36": "2yJx3kM8KjLZULKST1f6AtYh7LDvPUv6E6H4pygwijYStstJwG9TY53H1x2nfogZkcGPPVWah4JGYaD1cCgFm6fs",
  "key37": "5LiuVa7p1MSENk86qiexW7jMAbbWFfndtG4fam3xx2ZNL8d3ebGxZTKY1fT2zaL3E7R8zVcToU45Jx4gn8JbGVHd",
  "key38": "43Yk4UX9eSXBT4nzgXSamG4MkbTeaotivah5k3K3kSv6GenrGSFMu6Bxi5nVREMa53Czs5RyhnzCDRLFJpTtYQGC",
  "key39": "rJxmHDotdM7KFx4cAxCZLy2SC7yk7FWF1KZoyQ33tdBAqNNp3eRKDiGJVK5Kbn5r4ZMnJXGkCJ3dQb8gHyoe7z8",
  "key40": "2MUqRw4jgLGzvGVrqjuRLeCTZY327sZP1uK4oBddDVMjskJuWn6vspsifHBReWGm24JxGFdaLByFA4oktjfBo4AX",
  "key41": "seP7rqqPDQs9AjJQiNFt89Eyhqvja9SG5BtLB1hYFxZ64eVZPjPcgMqNGRaE6W3Q7gRu345xeUA1HBFStR3vVBJ",
  "key42": "52dPyzXLmzTd3rbTsodK1SJhKfytMJfsvaeNz7buV3UPkKtdUJwW958JsPw9qw6b2ZKm4uCdUgc5SXVf3Px2mhbo",
  "key43": "2gixLRm1ZdNc7Y6MfkivaZRcURe5JyCvXSQKHv3kmxCp5nnicUigbdnZPcSungAGTt91uvGF9JWYmDKedRpcqbvo",
  "key44": "25ZbqqgT9hRpnC43RNDQJcQTRGT2dPuC1ALXKeDj6NSnKtttpijJfNi5gpXLa3uy9P8T7qvAcBN4c2TkR57p6pPM",
  "key45": "4pxumSMr5cXZR1fD8XiSLFMijVmpjq9wBHN3bh1eosNMa9DJX2b36ZhsUgABkGoQiipY8YXuTqBR1vbvHwR7ZK4M"
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
