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
    "5Xor3V2DLGJkUnmhLE6RpCqYhhUDHe7JtezG4xATVXpdMtrLCo8LN9nFL7gAFYgWJxQ3zjbaVXuFLzRHwA9uqg51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jk9nk2YruLWg1aLtPm4Cfvow5xAdjrVD9j6Tzm4Uaa8gf7sTfvykPm5LLJHvt5KUFLAGchhMQLY7oPqf93S1Zgy",
  "key1": "4M9Mk5NTqNEPEXxgGGyQVHdazAa91vJ6W2Bg6jJqxAehkCXxorQTZL6DJZNZGcDevDAR3hfvxuWWMGtSF9DceHaD",
  "key2": "d3UDiqzfzUKGZp8FVCSPM5zgqXnFE95aCHfacXcNGFVX4R8kAg5kZDGEcsEAY1w2iLT12aaGK8peRCN2Eqou73a",
  "key3": "4uV3CCJxwsDBUCQcPkuhWWqpX6SEYEeZAb1H3wucQHGEkLwG8Ea51AjXo2QKC2dK4Eon1vTWc8m1zBdjAbcySXQj",
  "key4": "3yTsPd5g4tBoX49BzHjCDgJGwY85hUf8e7AmTVNmkzs7DwPpesUbpEKkvv4mjJDMacaZY5GPEy3H2oDuTmeegfPe",
  "key5": "4JCf6pHkJeoJs7bdmVxyjwRB9qQY39BddSANizuScFuczJ8UUi8wfPZm3QfvMWSGh54hWpjMsf6GxsmVf641kjhu",
  "key6": "56uEfPfVwjwrmbcxW7LoMj6A2FYFRJbYhAK6SUwHe3CuJsiyc1gf3YidSWJCYBcFGmWiR8DWfjvW3Zu1d7kBHruM",
  "key7": "5nUHpRYz21UvRUPHYv8rc5ccu6T6DDTKH4D3sR1yF24g6xLRXGKdj2udN5VC6pYmev55cdZo9eRBHYVyb1eUMhiY",
  "key8": "9sx4rybCyb8Gp7qwKnjaj2UmAmHQMNum7ytZyiLa4BErJVF3tVqZRRg7hRj6XiqfZT6kUbGw5XP7Yu4pjZDWuwL",
  "key9": "2XjRgvsBMgnP5R1iTR8iGiWThW3Ad4nwKgKxLaQA7HiCCUypJqJNCvRhUkijXkyHzftErTQiZHUzW1p9Nihiz7c3",
  "key10": "2z3vDZHqGqQHhqVyJAaxtJe6QMinYjW8VBJsv9X4a3wtghRYcjruzeHbGiuZXemLoprzXmRYVWenLW5GThCBZQdu",
  "key11": "5zDvMHTuJjSrCC5y3pNRavpVmr7RbY9YTggnGy8r1KuRHhbmQnkWYuHv9t8zCKaRJfHYPqj1aH9pYxqvi8YiStxy",
  "key12": "3WY2UxzXkHBgcxcj4s7YMrTS2nT2NzAAfv8Nn1VTDuf3ArVgJjpSBeFnVFTT3q1yLA9bAjR8qgdFNnwUG8T2MFN5",
  "key13": "5WLYV1d3Coqd79ztJLduyGtjAJFVeodivjCoN5FSnvTJ9njcszFuw8VnsACwGvMWM534kWWREehQdj8WRgJc97FU",
  "key14": "jEQAYFTAv4g4jABFhR7qtYABdntYrgEsJVg5Z6hFFkKNS9CkWgDciTt4MsHmQUK8ymoZh39ahegirmQHpoiwEm8",
  "key15": "3UVwZpbAX6Bmaf6VPJ3am4tWGE9TGbY49ovunANp1n3D6ETweg9r1DN7Q37XxaEDr2L5mNPaZf9cjDyg2pVhuuuT",
  "key16": "44oD8qVUy7aycgdkpMDeNW8JQ7uM1pdAGEuJrZu9kzHwfnw3LTkD2L2bQN4jrsDRho5tNG78KpuLTuwMAEJHFH3Z",
  "key17": "637cdmgJjscoK8JorjwMA19XFZGDCJyrNWGaduAE2dkPRqukZngbCNhLApxbnVmApYfg88TAEk2uPcbtxtJqBTQF",
  "key18": "4w9MXN3tjfi4y8Mg99DohJvd5PVaNLhd1wf7Ro7GwnufygETSoPJLhYuS9DN2MmYbANrUaUytdJomRVnA1PTm6uW",
  "key19": "4LKEcPUzuDR4ePNJoCSKnmVJ4GHgmAq6pFejGZhZmoK5oDXdyZSYt9p5kcf2f6zdKemdbfmXgdkAbhFNuJPyVfog",
  "key20": "3MwzhfZjDSTXM7huHjWDMkyZvJx6D4SVD8VarrDfCx76bziPfxDhpTvzuEWm4ZBA4FC135Lc3VbiwAx3XCg3btZ9",
  "key21": "2rjbp3skerc3TesJJ4yi1GDmbDzSJ8Ci5zP3dhjrvbYde7nijU94C5RyUtbiQtcWT76KcDrV8d5JoJD9byCAEQkW",
  "key22": "5j1EHeUxLnyNDC5jPcf1sRBS2HAoypBkUiPyRtJfWpyjoXt7NFEcvg4vE9R1XMzypQu2WA3qSYQy1j8kn8kmVwev",
  "key23": "3pX7vf89XEo915hKWZmozk1jAQhvfEk6g1cuvGLE8WdxMeRSADti2spArtA5yqXo4BSLTu5PRN6WGD5cagMouoYX",
  "key24": "3igpv2qzh1oEedDdrYDLrfRJkVF8c52zNcmqQFCp1XD5Ywo5C6o7yek6ifx9ydUg7RhYP8TjCqoPWkscXn5nFpAw",
  "key25": "5jRKKGRTpqdx5NJuCS7auh5JYApekYFWkmiDpmkgypmMZoA4PvPJtj5eMwPtNxt2XPuNU9C5VCccgUf6RRkHFqmj",
  "key26": "5dTG4j8c7dsikE3KCcw3yitzFPYQfzUzZ7BBpiby2Xa1G3kpkk8Q22XFCpH5h3WgwkZZECdVbwdeojh6trAFoT8T",
  "key27": "2TMTipvW44b7o3wVy653f3jXzrtJUeu38HKjpGg5BbddcuCZ71yZ2cE7drfNVFwwYnJtFFt3Zexns2kiXF9mUzFA",
  "key28": "3NpWeKWwUUbU8pk8B3WtcMyytMUTGJkqjxdw9y7ZJhB2dh2Y9FZMpky2Hdeqvn4XPfn9egyY9fszvVMTGhqDuzj1",
  "key29": "5yeDeZy65iiH3Ze3sjdcSQkb1TD3s46biN8GShF7JSFzhGzbMoi6PP1sSEBNJJ9Rve2k8TVdKzKzNu4nN98HzanM",
  "key30": "4iFR1JUTkwXW1HmJHZ6rLMnr63LbmY6Eu2nSTwjjLrg6EGxpWq1KTweGYbrXiccnnM5TshoV58BMgiwgcrsvA5HG",
  "key31": "4rJxeB1VcwzPBrSKcuV2k9y5MHwRhyF8cx3pX4GLtwAQyc5V9yNx4vtFL41bc4mrfFrHyhZdt6p4qiPvFcgwv8pF",
  "key32": "3c4GY3EZ3TDwmZWSAM9izkCvDoCrbvyvk7BvSrgJyXR8juKVLh6JaMbqoMCPhQ7WhhK2TVwCZyP5zLCw4XGBSUq6",
  "key33": "ZdXMqK7viy5iTKhZhWvke4nbYuCN377Xx3WkNDCYeDznuJQEfToonGWBaJ2o1WxnMHV4xVqqrtCik9g4rSEq8LX",
  "key34": "4JDZyjg7Yb6Jqs84KQr4oLyVpicMqRZjFcX7btfMKXAhNBcYZ4NASfJHDEy7inFMsfeYVMEYkg5aQSNPgQrKan7P",
  "key35": "2ZBgddUVc6Sw7HqhpbGodTBedSwrZrhWwcA9QoJiA3woDyswhNNwnX8SG2iAAbREtqFEGSTAXJ5FZkYcLNYSrzqJ"
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
