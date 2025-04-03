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
    "3yKdC5ZAvUZSp16XncWndo2aFyT3R7fgs7N9SFFphFDpu8kFaFWJ3wQPw2PwGTEdGxf8JdkCgEYZ3H1GkxmneLR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W2RKANetQngekD4hy2vnHxUEh87dEwwBeE99FqkqvbiXtc12jRLQY1mBHsM5eMTv3CCdpLmG8WBkLJS4hFRqoyr",
  "key1": "3nxyZTQghMStq2bmeTqxa8YA8Dybz8MV8xE1yUdkTYU53YJPssw9tNfkLLBkeNQ1zyBRXDUWZC8dhEaNhK5k4rXV",
  "key2": "3hbLpX8KebPSYC1rk5iKKjkLc3jMpcDxiy2javsRzvhz64zZ54364cL5MWYmtfpMqcgBeRX9n6cTt3K7dNfLX2LH",
  "key3": "5Zb3S2QwkEqqNoGpjnggQDbchaVUDxGDr3qxFncgb3Pv3eNKMsw2x8P5YV7csZtDsRvaKJMyQ2FEGrw58bB2yVF",
  "key4": "3VzJrbR28TnmzZV3TwtsgQu1CerQVcMwBYNN4EieoCwCbKuofsZZiqDpEy1Upw5DMCoeMayU8y9tZN6Bjtb5dpvw",
  "key5": "ebfArgwNqjamRaCHWLFeK69kVDGAAXbKQmVe75ddE8b22GFWo14oecCSRm4s6JQGZD2adWiF13vaqPZWo5oenCu",
  "key6": "2CeDiGRSrsEevuHBv3odXYhvA1dAdqsTspFx7JfzsC5zanZsVPTohRBPYUFw5vLiBMqeSp1aEsjosW7HnraSRnbY",
  "key7": "2tSPDMYHxZWSWYxyo4k4V8EEe2GyV3SuMRjLZkUwX3oBPtL4S95j3vaX2bmHbb8sgrPxKnVgyvfQokc49B6CnV5n",
  "key8": "5YmLY1odSxwHZNQFva7t76h9Qff6v1t4Yr4q7KPqx7nrHNAa4qtPonDafo8cKbwE3cvbih3TSh2fvDiTGQXqu4se",
  "key9": "4uNgdiYFfJakNwvbvXaBWJsF4SFJsZQuGjTvW3N58ifvz3DenX5zQkiXnLJ5JREcCHDjyG3qHSYKsVXi2hZXAmZj",
  "key10": "rQGLPEe2YvwBFh1Hpgt6doEJcP6YkYGDaTe5bWouNG9LDGojpGsPcq2susFwayFd2fUMr1oRWiCbGbcDmzsUKbq",
  "key11": "27fbSS6yJRy7kZS3UKAsy1hRu2o8qLM66oGR1v6UttD5WdgrNspwfrPJtF9E2HjczWpcr7McJ2z69ixBt8s69j7m",
  "key12": "fd77stP9PEXqSerJMoToNFdyqfoYfw8N6rCYvxSMKdrDGAa6rBxa14ENYZp8d2Fp3ETYpSfeJuKWxupxHJW3jqP",
  "key13": "2NjJfNMMdzx3aPX8UA2zssmHJpWSJXgt9vrUnbM7BWgg4zkeXYmuwQ5AeH9eJFjsbBHoje3SYsoa1rAgDntnYzdm",
  "key14": "4SqLahaRaKkHQdmFN5Xu5WvsuVGXWVfsY9FFgu5yuG4H1uu69Lq1qv3XgjBVSMXPcuBXWmHUq8AQakf92kaxPocW",
  "key15": "4FHky5bcWsp9K7iSSmpC8i6q2am63PEy3XfyQdNW8UkHCJRF1gf5MGhnP2cjvRgcLKCqJ9jJqsQWBkv1dKpL8y6w",
  "key16": "4ZvnLbpUa9dv7irgrt6jci88AmuMc5hrbEPPhb57TendG5uLg2SQrXjYFSo7g3apcvvxxMxVTcqVvB6CZr3dyTRV",
  "key17": "2dtzf3SaLpmgKjVJKbLJRUkawtfFjtzt74P3KjC7FT7uetQHgFcrHuz3R8L5b25wKifV6SabEwnZN3Nzz3hY3HJo",
  "key18": "3UabAcKUNFEWvbtLscs6DLyQwgcfB15hfxVStvAt7PTTpTu79zgpnYCGPHSag2ygFDLEpXa3vpyewf6b5Mkkxsfd",
  "key19": "2t58GUtvChXTERctF5dj2cxU5nGGZNn1QXsJCW61GzQuq2tmem7C5er3o4HPnYgTWEFmArJPBL6AQY5McEmJUErg",
  "key20": "4oDYtaDsZJSZdkebjpqLgRLoyJuUXgh7poG8e4UBbZZwYmyeqPmmRiywc4g4M9b4bQhV2WsXSkv7iBo3S3qsHBuT",
  "key21": "4GTBjpYYY7jr8U7rZrvWmtwDT6BkWQuxd3zrdnL3a3ahgAyt8RLN4UPk38MfNd1GTnurnpNy1autLqkzx4e7ja2f",
  "key22": "crzAjJMuzz8R4QcRiutgEzhp3yRCnnAkmvgD3arX2nUGe1Kg77kTnQENtR8kUdTYmXnf1Sq2xnRQiUczvnfiEzB",
  "key23": "3M8wkrBqWiBGrrVPqKgyHmCNF3HcT4EJvaJuMwHsufX3ywfY8cSKB9tHUzdnZ2AaxMueWdgQuoUkyFXy5pGXBn9P",
  "key24": "54oVzG1XfFZ3vRUUeBbjaZGm4sQchLmtTRvoSgBxk5mP6e49opPUaSarssqqHyszUMVjEzk4B7hjCNRmZbFkFyBD",
  "key25": "5rnDx5DAzTM9Q2jGnzvucNUKgtnjb7ikaG7DoVcG7ojrhg84jUAEtKadGz1U27MJpKTEKRXDz5rNAFj8Y4MkMDic",
  "key26": "459CvJfLve9yKGJhRtWnALCHd2dyhAHUizAYzexby39AQV2XNrN1MwDDcmmMQkZeEQuE2qoRuQdZ8M5YzYYLpbtw",
  "key27": "5kuaQKUJpBunnhCufJ9ZBkG1PK33ATKnP6q5ZXw7fY1zryjTUcNLVjxik9mbxwyfCdrch9fLSJwR9QQ3DEKbKQKe",
  "key28": "5rqF55EGjVfbqAnMHRmtpxZgGaNbWxY6rP8ztxHh6nAdr6u6dAzZJBAr3zEHSZHEtSPUto1Cf86jG6z44nUNumvb",
  "key29": "5xGWWhw1j81PrHRj1S5ZVSruSNNZUVgdh1kCwUyunHSVxdPyYHEMepQXDJ84XiDz6kjdWPv9FN5PvuNCWaApDn9j",
  "key30": "295ZvGPE2eSTMhuW8VA1EtwvJ2PMwk82JaVz8Y5QjmcMtuAxrrKfq6ru42U3W31ifyvPysxsV86afswobv7MYDqD",
  "key31": "3T2KwN64EMgGuc695UrJoR5w35mhN3qPBkPJbkAStCfoZvD7WuT4DvDVmFqCWxq3hdZbGGnRHddaoJtmu7q1bhim",
  "key32": "5xVgh9cT3Ug8gWJdgjSEQi5mBBycG5hQUYBZft6vjvqcwVMT4YQCxV8DeTboT6c2A786TByzSPg9kHTzv8raEJTr",
  "key33": "4X8kMaPUENRJPije6f5pnbXa1kj6BH6EuUeyuevLRTGqz4BKsggKY1Am9xBvwX2Q6ajpXeKP9YSM255uoX3uDALY",
  "key34": "47Xrjcs1Mv4oYFMJ5UnLt5wGzCW9iVKbyAaVnFQkR5QD8AFUu6r1YuxJjVB6kQ2FL21Lsb1H6C7SCzwfFUP4pVr8",
  "key35": "2NTJo6u51p4MKn1P7uWMzvUAxo5Qfa78jrj68ySah8ju9ri988FZemk37zGq7Lsr6HopD2qhh59LqRhpSAr4FvRb",
  "key36": "3w7fSQqvRKGmKTT7paT9CeRFfRam9cdZELWQk7sqpKwNq1DoiGUvqvcsWZhGCXhfjG6eQVyzu4hoeT8A1DqVkQL7",
  "key37": "2nmRN63EAkrjwGtRZaVH4ixhwJKmKPwYnWWHdkGh2kW8z7829NchvkFFZSjr1Hkr3Cr6kSjTWCPm4NHLhDFouEgf",
  "key38": "5XSY4rZutoqRDhhUeFAbs7BsMHeEmDTi4Zhx3ZQfTtgzRvDp1mHP7tVjmqaMrEEny3T2MpdM2DGnqYxy2pmmD3oD"
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
