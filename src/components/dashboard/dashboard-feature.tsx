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
    "5heMtJsKSCg51VRSdcZYUxFZgBqX48WtV1oErSWJnNSYBZHZSXjztb31c74mEWvarenc1MgYe7sSQtx5Go8Tte7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SgfeRF3LmnGNyTr2YrmpxGJfBrZLNqbvfY1GNXDNcvSYjBuAcHVXnNJnvUNbhVGojPoCfzyME7draYp6MKGkvGG",
  "key1": "3YJTWiXyh35TbHTc2xZBztnsCUCNPAzxvqTFNkrHXJum9TqBmxpQQKPvk3kGadAuPUHSpySD3V5DxKQaCKu5hvXy",
  "key2": "3izZPP5pkJLB3P2DktDBoM4968Fnvt3M6xZFxiUSiDQ6BVRH76ofGjH2VDLP8NfM47gdvaZiF7WQJwBJDXMmqQgm",
  "key3": "5sLM55XNEdi94DLc6EQVjvh9Ro8CXQ66KqCnhj7XiEfa8cwqhDDSJYANd49hU4CgEFbG36R5UMvEKvGDqCunubUJ",
  "key4": "4zjSeZrSVBqeiJCiY8yqCncirJLF38JnfSpe14F2oWaAMqNj2cVoBv3dgzn7dARvRPxnapUvBZq7v77sDZ2jf5EY",
  "key5": "h1ZLASLy15fGTR9UArXz5MUF9BeDmzw8x5woHnzB5a3SR1HngP467stLfuNPupNg1y2c2AL3BixF4UCm6a37j68",
  "key6": "2Q3CEiWSvU91R7RqirgbQaUmNxcJPYA1jX7DV6xx4Qvy85D5JVzRR5GptW9hkQo5A6J3gkJrWGArJLSnub5bTzpH",
  "key7": "43hxS8KDwTuTyRSCA6m4gYKtkdhGCYLM7nEUaif7T1d4cFHte2pu2oAJQNE2qS1NuVZRJe1o8X48d4Gc6guVR3sd",
  "key8": "2JpkTtPqCFeKqfQ6gPearsdNi1bgJ9uiw9cD6AUC1P8VV6skUXFaTC8sANv6oaC9d1Xw254uThrbSX75bu5cgbYx",
  "key9": "4JHs45cWcP15hhFhzD4umRH2SvQkj6KT3dgrZDM3dPboEpP99rbpGux16iHQn7jPSx6MeWaBU1ndBKV3qy5pkYUf",
  "key10": "3f19fz8FuKvd7oC5vaVRpWRfrggeNMmFHRVEJZZxDiAWkpPdtS1djN4q6WoX9c5ZbF4iDwV6HnqMLR6iojyWioiM",
  "key11": "54JanMGWHjMQMFk9aTnwiLDzDvR87TD3wKf6wBpf9tGPi4heKp8fnEcieP57M6NWFPJgS1s2rc3bR8HY9jS8WtCB",
  "key12": "4yYy4A7Zh9rr3G8G9UXaPwoyLbqUBbZHWs91PPdfVd7ynmatdNYSdmRXLKYsW1kzH2kTacEKhnKEXtbHUUmTpghj",
  "key13": "4bA1NKao2MqTFzZXqopNjjsFefvSZFrRLy46fdYP7Rvp7TjKnS6EVQ51ybXjjD3b8oFq32sSF7FtH8esZcCrTa2v",
  "key14": "DUvP1bEwXKXdxhqHhjW7Tbtxdy5D5v4FC8ZscTEWmMtoFTpqKtViriKRHUHYKz2zCyjptZ9bVT6j1YXfqpisMox",
  "key15": "trTYrXcAPpb2o8yBVLC5VLN7XHNGcyrBnHnnCudKEvMxaG4CHZgW9qtTXL78jqngBxWX7wMLHiN3CNdUNMEMWC4",
  "key16": "4P1Qh4JvZtf8VUxgQb3MfGfYHu7avSPDALhBwyMvbXyUqK1aARim4svJNe9rscrkWCTByxFFkL1Vbmqtc5cwPZuG",
  "key17": "3xUrqc5yKohg3o6gihe9V2KFNwBoDxYc7rRdw3WNnKNfVJrPdGK6aBWfHPUXRdSjktxkE6m2puS9vpABUn29BTP1",
  "key18": "4CuA1twZFdZMSRPBWSgapp4QjNaPjx58QrxcrMRPZVgqGFx4qbCvmzfcWh2ckCT4JhgpULgiZCcCNnzhXFgt4QrN",
  "key19": "3MQKfRa8Kx5448yJHSB7kc5d68CA2Luuu1kvLUP4HLArhPguyz9Qog2npM2732hgFtyLEzUWC2YZnZQRAXLPxfrm",
  "key20": "5wknbzVEpvr1htGGMcwCiwLYZbrfxrsVSCHhex6SuSFNjtMKtTTUp7PD6GxsqKFT9ZRVAicTpCrn2r1qKjoBiSCC",
  "key21": "zxi8NsJfhYGnwCWzGSfV3y8bb9jX4M8ayShxJkbqGxqX9m8BdYxGgv1sEutCKF2zdBxTmmViGpnathEjBqpM9WU",
  "key22": "64GWqJNXQHRjqS7Y7EuB1q6b7jgzniySNkwcDnfPPgiNgEbA6C46qfyQBTjzmkqWQBwLVNa3HwJAiTi61qJzsRhd",
  "key23": "2gtXb5r8eJAbs8m6ysYYViCRLKjSAFjHy25MVP425fC8oiX6LUhyNUj2uQGKvr2eRUPAXRxGWtY85De5txWkGNPv",
  "key24": "3DNPzKAyjKv1xJ3KkDkVAbaoHJwwBrShZVR9k6ZJckWRkheGNpp4cqUvhwdw46cQZUx4ms3BobkNQ3jVokFLMMT4",
  "key25": "2p2qtXJjwnz7PGiYQ8DAoiRBzP4nA9TVy8AyHNRQApWSTPjKArLF4UJqQ7DHE286DRRQuL1tpKK4RhPWqwd3S5aA",
  "key26": "4FhJ17HNUxqdcV7s99U43kACabGGahMF4zNBRT6LSrNaa5z1UR7PfEW73yokhidv7sicyz3bF6q48g5UquPjbP7U",
  "key27": "4agoBuMVh1k1SP5wmZNt9pfZu2ck3CiuuvXge1uLLBsjaPLS9AGgb2RHJuvTTKAdyJ2sbAVVgyWoyJ3MBT4tQ2BQ",
  "key28": "3px7Wk6FmeMHvVpZCL2JG2tdfeSuSx89PuiF2qSAgxMvDHyQaggbvjF24EGq3mUM8CYtwJCB4RgiZ3preN9noTTR",
  "key29": "5n4iQUF5Ha3DEmpLVrgbnnumarMYNXxiH2m8QUwtGU9sdM2EqnUh5BPngDtmBz9NMZa7fQhLdBvLEbihiZwAdxAe",
  "key30": "37T3vmig4jS7hA1yJiLRqA2ajrVeqAuFb7q88S2MkuYz1EQwx2RmzGwQD9Dv4Euc7PepBCb6takrifQrYZNN57Cp",
  "key31": "3nVxzjUdjeURUiGCKU6idaddyX4pzc4QQKbxcXXyCJ2Yg5ybuSzBgSx5eeGwQzGsKuq34sLpdASMW5p8GTG3jxb7",
  "key32": "4uKW2pXyCyv8PoXmN5iH7G7DXdxTG8FjUz2RFLFF5HRCyCXQZxRuU8k8CVZQMmSTs7oUVsh5CNPf2EnBESV5m8jP",
  "key33": "4PdHzkA5xhqRSX3tBgMG1yZ74E6B8zVrSGgCZirFn1N1kx78o8sxSuhhSwE7jGTS28ZHvztMq4f27WwzPqmJLHEk",
  "key34": "4zqTN3FzE7AWMWcrpZwhb3FurMfJeJ6rDVuTMUrjUsVAQjtyzg3c9jhn5WdiAGtSJjyH81VJ9acPswygDEYTzMVH",
  "key35": "26DrN3mfmj6Yr1mhBhJvpKM7qCXT8bxy8VZUozKJTXWkxhiTmGhgun6NV3XKXMapCFJo9f5rmJrL6utAnmGTGfdW",
  "key36": "2RAMWXNKH7ZETisBqdu2PvUaq3MJGyPrbqWD6J9kDMm2Vjrgwxhesnt4A7Qb5N2MgC6bqA5YLYsTREGvq7u9yPFY",
  "key37": "7rKMFxekYWKQ1m5iWbRH8f3E2i357yevjwc7riphTG7TTyMkBE83Q3eLu5EgjZXj9mhRu2o8moBHZcYExT8kSpo",
  "key38": "4yVr1oEfLbVpHPdhebH5xjZmg6ZtKFpCmDijHeFrH3fiJMx1UXFfmMs7mbVxsx7uAht91TkYANUiZ7zAkGFrm2rH"
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
