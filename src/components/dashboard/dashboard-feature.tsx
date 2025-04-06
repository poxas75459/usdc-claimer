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
    "5qGfYi6Mt7Wyee523WbLREQbZWZ5VvxH8n1xwB5SKnhrwy4dYoxBoWsyUWy21AyknjNdTRDSX46cYLBWqAP6FHyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zhVFhBR2mPrwt2nkQG4nQ8kEgw5fhFMzQUBWBuWFzSHNVoU1iJffpq1wyUWakQY7cenh9MXF1Cghr69SYZcRXtj",
  "key1": "dFVp7m5pu44S3zJyBeZ989o7FM5xyEJT4qNGvo8yVfCJUas8tSwXsVt33xDaZtVp9684Sea1NxMtXTuJmmzDhjM",
  "key2": "EXw9bvSMPgGWWL7R9nh5vYLSizuEXY2qUEiXeDm54QfEgjScFkjcmvwkCHcqeKxpRpUrWJX1HGNM2HiVxTnHDXd",
  "key3": "55HGNuHKwJBixAAL2GyBq3BHBLfkbu8AMennsRm7cgW15HgtJjgBdDBJPzSEy7erxbu4cHEmy267WNpQipZBo6oB",
  "key4": "5gLyMkQWDm2PxecMDbeRMDEDY5BZdfj6PqMdobofvnfL7Ty7XgWjP4vMqsM2Bb7jETZmdwg3BZx8Cx36L7y7UYSa",
  "key5": "98yuTHbesmmht6UTX6weynhQurWzKyzCitTM4Rmz3DksZCK4etceQ2zxZqjGHT4YVc9DFoN44HJjKLKFCTLxmDJ",
  "key6": "5hakLRaRaaNJih6YznUQVrdjNTMPB6v6HjjrqogpwWhjNfpBGpTq3xri9mYRruKXPdpLgS1GagFQJvL1mWhW9eC4",
  "key7": "3dx24ScET9CmJMmLM3oozdeC74Lxgjjea1McRyW9an9dxQhFdwdSiADnoQQPG5Dr7q7e1i3YdLuZgko9XCuVsqi8",
  "key8": "2jNXnBhzWAYNCHZvyadu8hx9ME5EArPzN3hJwHDseSeKSorcxjqR1xqV5AH2yH6pum8i1g1Eg9fwcH9tPoGWe76R",
  "key9": "55bmsAgDTXTnbxhQ5Fpip6XuhMnaAEqhoM794pcRGbsQJd27p7CgpwtEHMoDhmW7jwcS8sjKrPwSxFcx8eyiiQPa",
  "key10": "362BP1wxDgnDyyAHPoDv1RVRkTUWJfBnCTNaDFvjGwbM9iCVwi4wWVRjrbqneg3VYzdddAGi5cECYGR7NnePcdiW",
  "key11": "4APmeCusrG8x7nJ63KNw7ENtv7u8KqqvNPvEDQjF8s9KYuj1dD5cDxtL3QWTs4bWxYKDtLT4zpB95KGbr8Ts7RqY",
  "key12": "5bFtsZDN5aa96vEZgxbU1Dp7VHYD99uuRiPfdQugJip8qZhWkstKx634yQ2VtXLEoLWiYSr46RJfSyugu2k7g9t7",
  "key13": "Hy4ze7vNUBreicWWWUCpgctA8uFP7FAS1umgZJawK88vs8GLt9WCqXS19ZbhzVrMoVVwGiwvHJaSQgtt5nbbJue",
  "key14": "4nvR8YkbvH7JMoCFJq5kKsUFuJ1mFrz2xkESzyMmz6vvQUDvzQTQQ7fxHT2S3XJDZLzkcwBSVyD1xJGfs4W81ps4",
  "key15": "3dRZVEohzGboD9jRRxX1kmqh8SbAVDGjfFttgc2LkYP3MmoszU4Mv4agdCbHiPNj36pfyYRobeYCU32DDUNh4HkV",
  "key16": "4m6gfjY6bDTwBVdYULDkkVNuQRVoo28YGUzvTdyBwecC7WpyRpGLEXdQPQNnv5336fMe5gs5n13aGoFamZbvmYnn",
  "key17": "4fHRj8ssqePEcNTfnCRw8PxppPqJVBJqwzzMWGnDL3ekBfT1QmbskYXEcWDEq84Fr9k7hEXVYvBBCnM9GJ1sLnXd",
  "key18": "D7LvASn1J9u2rGYrDi4T9kU6vRUeeeg5CVTQkLe9ndotGWmEkaHQKENcM12hYsLtXhvEQCLSKzWmjmqa16nAo9f",
  "key19": "7So8oNE8ELFB2WYZ261cYAm9bt6JkqHSUB8ngruuRN8fxx5Z99UzExFz4ZqgM3PGsEKzXAnARkqKZKxPr9WzS7E",
  "key20": "ropiF6GcDGJ5Dwcyy3CkyUryZGyyV5qqgYDPNTr7DqwwinhpC279E79i84qFCBHB5c4PZwkodhdAsfywgPTVnSz",
  "key21": "2wyWvGziEchGEWerYXsNT19Tr9Qac9YiFhGXe5AMySX4nSc7LyjboPcn15hZBHYNyaZC65zHLi9sot4fT9RFufGe",
  "key22": "4ybXwN7QN8i6k4wosCCf4UpLM4i343x1bNjfCm8BMwZ9gYg27xeD7EY4BCv1Ky1iebgbA17wJHcwCpFA1feZWbcW",
  "key23": "3xBMMWT4A2A8KdpQv9hup1bQhuwb5na3hPdSWvaNKceSgNZa2zrwsKHHtucRVrHfpppDCx679mXNd36v8eRecvF6",
  "key24": "253f5BtJAAQJebVdHrZztSiANrSvbmWGzfitwAEcLPpJFRkMDjnxdL4AkE7QWBieooKpYoi8wUT5h66iSqchrYoX",
  "key25": "5eFMEUdyXkvdp8m5dUEuGAYCTjYxtaXXgXTCN291ZYnm5Dx7aaJa524j58jewwJQMfwVNQDdD3dKfY2PUB6bqARA",
  "key26": "39fHNWVuNkUqoR77WVSMHJ1HXu9BjTMTeLcf3ZytdKkB4L3MQwq9Yc3VfKqdV9FzW5fAFtizNEp4wxyCWG8aKsBd",
  "key27": "4q2APqDPzzEBJNTWMBhvJUdDYxktckiaizkAcXwLf2x3S6TPuda9LnXJuKZLTTiBs7yzr8r24y4EVo1mvb6jVycp",
  "key28": "sX7vyQTWGpsix4m6iXuKFqvTTE5m1FddyCCxqDhLAcCoLdteioRvmDN6Qobp1MCx5HVrLvM1V3453XrvQYQV6CM",
  "key29": "2he8BcXgCJBqgZXjnTzyv3egLjpG8vUDBVSZgoZUQwbW1q7hGB9AtB3i2yN5bbguDXPNFBT2Rru33KdJGfEeh4qm",
  "key30": "44r4bQ71SjdEngekLdnJM41dqGQTtMdfoTGMvrFU9BjWbFVVjSzWmLr9AqUupC5pmkYdRY5KQtT5DJMtfgNAym5R",
  "key31": "5JEQFjhQHCapJuXwbaWrmKjtFDF32shX8bvGPokM2M3cyd8scKV4jJcS95BPBkpqbazHkt8BkkeJ4NN4a7hyn3x6",
  "key32": "5Li12aX4VzkmmLfP7Zah5E7YmAu89VQNeBYkBNbUjgFM1PfP7qRYvEfvSUP4xLWk8pSCrh8TsaFJd45zeXk2yPUY",
  "key33": "2bLSRniocAHgfY9ct1anLrMsnin9HAK3ANTga4MwtivoFqrW2h7fxUpJ2FhJzsow7Zx5q98Z5bmEPeWqgdrCQxFF",
  "key34": "4LbGbNjEMxW7sDU7UUJzBGniqaf9eiWM3GnSXQVtJrYfErvv1P6zJkdbFz1oYMVeun1jPzXgeNFbC347dCXXR8Q7",
  "key35": "4uMdFW164dRsmFVSLCJef7gseFp9ByTvQv6H1WtgpdNaPk3fw2JcA12SCiYkKiZXJp81QgfwdJM6gdym5Qm9yxqc",
  "key36": "2qWRnnuZtc6NPjSr6NFLnyjyL6fKW9CQompvHb9x6yysdPsT4635gYaUVr8sABDycLdJkZCuBFJXsAtDhXxDwuUc",
  "key37": "2jNxPN7LbykKmwuAao6USJbCc9gVnqUquKEUC2WquuZEzFAHAfpvCnoxaebtvxLZqHSyVbjeEeQqWtwPwLYWFkeL",
  "key38": "XqgnqBqcebqdkrHuqggXcLuQDu85oFC39MbAwGgHU8m7UoU9eVAe7styhoxyvn7KonC3ykgumWNEQanGzUJbnW5",
  "key39": "4Nydh78TJrqFmrNEHpbR5EkPWL9ED4cYeZYb49kybz7Z9hbY6QNA7PrFibuSF428NdVi7mge6CqL9rp6DJb7J8As",
  "key40": "3vHhDQ7te36F4mMZmXzBYjcJbSEnicFqfjDuzMp8suEaYNc3kmNM325ze5KXNbXHajdXrhU1WytonD2UFRk9iLD4",
  "key41": "2cJc2FCHmRbZy1zPWia3Py6km8uNYNefbBtnDhuBBZFdDNxzQBmCr3dX5wVCFfguXqjru9K7AspzgAjRHHHHaswD",
  "key42": "4WZySaWAGG8xQqeZu2TJDk6AMyPDgeQpWE8SiuZ22rf1LsfVqNsWuyUGXvEvX37WkCfWptk6QW3MNRzL48EfpQdj"
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
