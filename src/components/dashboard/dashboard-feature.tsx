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
    "FjfmVRqJLdR5ZG1EwCwubmfyFPaXGaczMypBC86kobkpShWTe9jTS7Jja8N19ek6ve3cUKJnN2NgjZpeqGi1Ce7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pxRNWbZnZXWwy2Mfn5dhGZADAoqLwABGuD93ufK4E6R2PvJgbfbK6eksTRKXaU7LyWF4zqnVqvV2Wz1UYpKvarN",
  "key1": "q9ASym8nHbb475MeYmmbswcBuN81JcXBz7buSR4Sd5XqQMgqYw5bjxjGep5v8i1jsdmf3avWbA6KmXpCpL71386",
  "key2": "44PYV92ipeDkLcf7MFmBXCbitRP423wnv7qxgJ45cY4PYGXtE22QKjfWaEhZjmozkJ4i36qd5FGpEs9kkyYNWjbD",
  "key3": "59oJPwuKudhoyViyoL6JX5Xf5Mkquhup11E5xnoRz4uy6hBT68BTyzY2rMm6zvFPuwAFF3bQZfy28nnBmiSgtnCs",
  "key4": "2fx1GFM8y3PDbSezEpBvvtXyMvFkGzpc9v1ouKcpxbPSV5AbEoLmtfhgC7w7rhdG4ARwLhjhkY6eyXnCsM7nJeh6",
  "key5": "2XPcvUH3mibD8AV1f1tFsp2U8kXX5npFtst8Mdb8PQ7DMz7gCutRyB2ZNP3VT5fvi9hxzjn9byYfY5ourWN6AR7y",
  "key6": "3TopRvLaXSk9SdySyfWG1DqUCEipshDSBRj6BftDfjVWk3J8pyhECm77mvdiNeCBBAm99YJvuZNQbQnvVtLhCU14",
  "key7": "5oHxtaLXTatVQZVphaFWWbBfJm3bos1H5yHpDxuUau4YCaaa2YdEBmwMUvgugFnbWPA66RqZ8exNrWu58uWoHCuq",
  "key8": "22G7FLkLRyUDrm81ySujeRX1xUzE62v1e8vE3yyveA2zRUaqnYWxXzQ7ZCZAGTcULm5TXGExgzsDA9W6JPgd8WZM",
  "key9": "41MVxF7NbLtGkFQpamNmk3rJeJJ69MFhGUUdPkmkJa6nKqjftSwh6Z5F7CTpK3Bi4GqWDxaxtLWHNKmUhLjj1M8b",
  "key10": "4AxwvkHQi1bs3u7qtEArWifJrXUCmCE5VKPvbzqAZyoF1yek4PFC34MvmGB2Z5DLqDKMDQJU5ngP8HyRs3DrBKTC",
  "key11": "4p5JuBr9w7ftaqJQMmJAM9JNBHk2VUPjuK5TV82o1wvbxp7x3YwNHFerVsgBQSWEfvqdvvmk7gLGqkJgbTEeEhnB",
  "key12": "2hca6b8WBgmjECi5WgbADxcEMnxwQCANmLt8XeDzKXDmMKtvSM4AjG35FCDjDTwSJBMPtFJzqgb14VdqsMT7mAaZ",
  "key13": "5GzX7Xdvrtof85Q74EteV2rWHsDeo9KJeJJbSP7yhCLWvdQnP7H5avx4aVDkbLN9vemg1uFPQnuYfmuA7xRo1jos",
  "key14": "4eXrSCz4CT6QBiWbg5nkDmt3owkSPrLMriLXxxexa5AevpRKnTbeUejYD3wtFsmD16esaDUv3J8Eepa4NVr8Q7zk",
  "key15": "39kBEvWNa15JJC8QwNhabPdZ28jEdYeE6NT4LQNzuYB7uRJNWfMrqdmnMJv4LVH3cJ68fXCq49r2zVZfpcCHDoFw",
  "key16": "3RuXhY6cwAWYrScp5yfkDCXmbTTURrq4XgoEVNN8tpWzfbzWkRAqs9esDN9uLm5Y64q5dAmWxzmYtFmQcxWgHHYB",
  "key17": "5hkDsb5tT6SQg19DPygZkEGXvF6bZ2E1dCuxnVQ31urkb7xiopPdeMexHR3KMMNsgNpxrTKXjvAaBc7oUzn7Ku5U",
  "key18": "5R1GHnKNcnkR5mANrzMSkwrzqQeabzXjeyWGLykGcW3b4BMohoxXzwrEH7yQ39armTMWYyubGAAyc5UnqYoc3j5S",
  "key19": "4asPmD4oLWbpZJ6EYimV1tUQUq6K2V1LFvatFv7st5YAwnaEVDMFY76N94M69TN1fq3WvzeFHC4242rfMAYc4U31",
  "key20": "5sZ7HeKjVijnKtQh2c2n7rP2SDjehCeMPHnN5zCg3z2kXVLYPWf3b5Vw5qrPF2ugEgGR65o22dBFXper8tL7gk5A",
  "key21": "2AD4PoCyVNYKoBNV42pvGwHBrmyybybQe2EHLih7bosi1gCNpcFNzgi2LMtXA76Kh1WYgx4dUQ5oek4RjrFMkQnG",
  "key22": "pFHMwPSTBhBsttU4b3qxX1YuRBVNKEJRPM8XtqmRPKAFZzmTgkP6VCzzGapmjcS79ZG4q46MndvHMrSHRdhaEoN",
  "key23": "3psqNwbE3DJxCjDkhzZUwUuKPa6GFq3qX2m5u1mnpytbvfjRGPNt2gATaxx8L7sbQDHWjFsMLakKYyadQA1hXT9C",
  "key24": "3vVvTbZxREG3XMuwo2WcGJnmLyDrd5e795kEjnMmJP4aLHRNu1KZgW9Gz7ek4govvEdH8i3aYtyoZtECYUgfuFcG",
  "key25": "3BtY3Zg4Ha4vT6tGX4anJh7jUwL7nCRdGkqVQ1MwfWTtjY77WDGUi16nsvzpi97r3RpsaJ3q82XhpceWSoFYPgAu",
  "key26": "GW7EEowMBbvrqoSps7222v3eWrS4DVejM3UZ5iUeHvUrCkEHHbhLbk6StQRUJXBEoSPwh7uKndpezQT2V9waoLQ",
  "key27": "5dWKFrLttUBZHxZZpQ8YhgXpKD4Bd9z31CNrN4ZMiXChV64eqr1MnkWRVo5wUEMwmiRDnv6kercfLeSjKGAtuGGz",
  "key28": "2ZYtTAZhuSAzJh48RoQZQrsU8mtGPFPk1KzuvViLcgs2CULr2CR1JoEDkmyFP2C9FeB1LhGW3xqd819Lt3gxXEBG",
  "key29": "5dFVzMf1wD6Yn1WXpgLLCwchVQvokNvNCJd5r8aSP51RmayqEqZ9vMRCRXNo5WEMBignHsRR7FVZ1BxMEg4ynBmS",
  "key30": "x7MbpHWp13T2puJaa8gq2PCpgvBAjdJ347jxQ4SnPZie2XWmP4UGizVYyEoFuGAByodTUH56sPunBrxrBH1nrE6",
  "key31": "5YCFbzntxgjR4cAcn12tbb5hQPrEdWjGAU775y6tB5KYDt8HK8BTaVgLf7fR8HjDRcUNNyPZ5A1tq1XARsGxeEhz",
  "key32": "3RRtdZXLrZsmxV3et1wYnXfQNRDw9qFUdNCNpQJQoHu2vxi7jZ2UsqH8gwbn89dpkhMb4dyrY7EqJvuYWxEDaC1c",
  "key33": "5iwiCbiAuaawq1MQBg2HNuKwJDgvUTcYAvWnVJtG7Qj3yM3hmu7Vw9nqtWprJDQDpmPbNmzVEUWxKvWAeNXBpo43",
  "key34": "2Snb6Kh5daaBTfh8wdejEecdAJHxWbDaUnnPPyCQ8PKTtwVanzmF2uyfWgqBRtEtrHATKiY2tYSPjAGGZ3taGedr",
  "key35": "3diidhYyips79Nxmz9YgviydLTB9f48MwYKaq68m3VThyZMnsBG8xRQZR1wcHw8BKKz1JmmTBzT75cqagedZuhnV",
  "key36": "4uBz6J6wjdwKygXjB1sUoy6Mn2YK9Eg5hUBpAqstfeBV8wZFR8psMua173UExFU8oF9PAVCpD4L5MG2VQFfeWSnT",
  "key37": "31NHJZc1xMqzD6Av5pdAY62GqJ72RdkiGoZk1Z3pqhN3926HL6gfUcg5MqtHWeCAb1vUu9G8k9as8eXPRFGGtDiE",
  "key38": "4XGVX6G15wxyxAHgpVaKYPScDgXP7hPB6xwjSKUAz9duhBP3M1wrquo8ELCXp2ArJRF4QuqEir44yxtzcC4sq6D3",
  "key39": "51wwZc2jeuCUDAqxwgdh8HzewkrQQRfBqgRE5e4nUgj2Cn9XRh9BD6okkHmhoputhroWfSD6dzw3ZpqEHsBC7SJ8",
  "key40": "65kxfNNum5cuRQSeTYi26Uu9xbv8Vab2UrFmYBdTXSMCCY7BWy6YqJN4EsRyqrNHHZzBEZo23zuuWw9CweqCwNr1",
  "key41": "5q4GjBMNeAiavk8SP5ZvvPkfZsZKzJQT6isq2SzxgakAdzsqZUJJXthAgVAd9D9ZKgpNrCAXRyLuPf5zaLGDJeWM",
  "key42": "3wC9A9psJELWRUNcZN18D78CRqDgZF7uth95YHmV9uJi7ehuVvJK2orgMCpJFsSMrveKM5rc4CRNkJSzDBHxiUJB",
  "key43": "5vM3Vh85A5hTNijrvrJzHr2CGiQWN64pwUPr5LB5P6SQ9ATug7ivLiN9EDAE5sEALequpF9wRSasdKFHypTpuikf",
  "key44": "2bWHSPKofPaK27a9TknaajjHa33Z8qhrT7BLTzLSSngFNiYYRVC4c4nNdevQQXGoDQ8nJvSZ1F3imEUfLbfXTi8F",
  "key45": "5VNfqYHV3GeT46HvdSUFYM7JpPwXU9JvehK5jjgUvsCoBdVxghcmJCpGFNe5C9SVg1c9A3y3UMA1r4kQrUBhn6sj"
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
