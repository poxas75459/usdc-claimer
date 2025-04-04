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
    "4q3m77sDLzLCrHS1G5tQBNgST4qDaFUpNL1moChXwAfvjZFPKEPPaJzhUQiHAujadYt1A1iNbo6q7wbEXiGJB5p9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "syM8g1efmMGimsAAsjkEUHMYRN2aJjtUt226KYuUaynN2MNh3xVqoCXP5oCriPUL2XWt2uAbgS4d5t8BHMqzrHu",
  "key1": "461Vaf5AaTaNjKMYDhiUSvmzxv4iS2bmdq29cvkt3xCRvBHtRncxiwV7ZBtArncA6cT4pg2ckVbWctNuDtCAeRjg",
  "key2": "4grdSaRCgroKcSCEFZeYtkAut3t6kawxoAs5vv98WxDoxngrFJT7CJ1ArMQtcA4bm6zoSQ48nE4zUrsAaTUT32Mi",
  "key3": "214eXThK4LUjkPu2EAkMwsJFkvuJrp22iFvuuLx37syDzCLYyUftFUSDMSnXAQVq1fkqea6GxLYq4iJJFWLgieVb",
  "key4": "3Pjx2f4bijrSqZTU5VbowSoBm5ka17g7WLeo42ZiYwFuw9snrNdqXXY3t1wGNDk6FmsYzoXmVBZTnVbUXXwTq19z",
  "key5": "6YKfPNMwXW7V4cdY9xWm63wmtNtw1PJ55q2prHxGtwbZ1HVwK8yPL1mm4LPa8NCirUPiJwiATQ5pqjdQbGfZRdE",
  "key6": "43Z3b34EWGX6xNKekfxPuW25VoDDiMrDsg2hMk4YFq2ZBVDhJvJK2Hw3jfh1wpgqyivUxiMhZZGbPv8vNaFqV3Tc",
  "key7": "3mVgx4UzfxxwBkjRv71qMDzHJJpqCWBi4HrGcQHrK9Py2mbNe5sZo1dSKG7GVtcirh1gun73k3HVkhmcgZDqfFqA",
  "key8": "5x8MiLgS9tSnCGBFKPo6aE7dCffWy91PZFH2yU5CSXEefKgbgK8h1WkwQu4x6VFH7eQkj8Bw5SCiBgu7J5Qypor6",
  "key9": "2mQaHvYsRRvPS7M6MiChx2gPCN4p1Xt688RuHYD38N3oE2WS7X9yxrRfBNMKbTCfiHZrVFmrtgY8BzsvcBLw3Rcn",
  "key10": "3iF9d2DBF5VjWj2HPGrmncsnDmbqwVUi6ie8bGd52xD8PSZNb57BMH5qkPCyuczS6CCKXrEi4GmtEPi9wMNCappE",
  "key11": "4rAmP2pX68QVZNf4KW5Ygtd5cejYZBKmJPApDvUCp3pDpusuxyHfCGxGiLeW1GTowW8iRCiKL2fRKruf9eWfHpDL",
  "key12": "iPLdxjP37WHrKavUn5prvB6gJVCnNKtLF7eY5NFZuyds8gaBpBzftBGr3CGjdm2HrgWSuodFUF5rXHgJhcjKLNf",
  "key13": "21eEtwuBpDPfDFPj2NGgbPw78GeMSXpp3DhvnbEYj2X6hcMTq7yeQwTQrrxwhPG4ViGLaCayMUqCFB7xjdgBkNq2",
  "key14": "yKCxPM4Jowf9kxWtCJkcaHuDYHwxr3KFrVxniDzGkUquAukeAPNdhMgfPy3D5GyXFK2wZ8ref7CHo1vTaYnGfNC",
  "key15": "5MiRjbkwJq4hUJrGpqNDfaXxNzrWRSzvwSaRUgvYhFAGqpZy7R6Wk8udpeaoNGUuShk8FBhFBSvZUkZeJPksRwrE",
  "key16": "3ehbFda4ixAf9dHg5WgQeTyzJmwKeBhnDSSMUsjLkMKZTMHN9HmytZfVMvuytZQRFTbAUpXt9K9AJsa4GdtseHDV",
  "key17": "61o3RUVP8FjMoM3GxapTv77JRUTXc8QK9kE5StF4NUFydEUw8BEwyVpHWUAJiXwP2zYorR3yy6bq3YUXUrSqQ1Fq",
  "key18": "5zk6YUCquaNn1EqrPDUGmjCFu4qg6ezrGBRGhuM5MEtk1JVUr69ZnmNMi6Khv5m1wSuFjBVh3wAe4YoQFzjA6TZu",
  "key19": "4tWGvcWbSmn4gNyiZWVYvKMCFq5A6xJuhGtkaFXHZmHnayC9WeFVnWd9ioiCyHP5T3yZYqrsHrhje3KQuK5u5pqq",
  "key20": "5GT7akJ91qxj4AtmxRQJMtd6oRoHVaENX2137vu5qd2f3yye9SZuZJeYmo8JZ1JuSwtTba1bi32kkSvKU2NQY9u1",
  "key21": "5bdfnYbCaQ8kSbvZi1CcWdNxX3jyDcKV3QpurvneDkhmFVmjUQr2dxJ7TL4qE1HXCNphV4j9DYgRoY2YRaAHREhW",
  "key22": "4mwTxvGiKgUTDoH5Tz6Qg9z74oYWbEYMjcC8EKWaNfHAkn6wJCUbvEGwk89zYoSxpvysbbWwuKLeqmBZW1X6D5TG",
  "key23": "5U5B5wdHsNpBARnSQYWiAocC6NnZBn8yg2fMoLYT2H8Euggz4k1pSRPcojp75XJEW3HcXDUL7XJcUuP9owTiaF2A",
  "key24": "5pSXPEb4gbvFie6QsN37zUgQqKkYU7KWjNwHXZhigU6fmB9xhB7RVCN7B7sjY2Kx1e4XdoAo6qtUZJBTi2AboSJ5",
  "key25": "3cJBrpzCtEZDA8ZGSYzcz2qbC4Wwx7ZCEYCqSL8i2EUkz9UHcRDaWzuXeYD1gvXpsKcF8siSyELGUvsN3aaWRETU",
  "key26": "67fUDRwg2ifiw95PKdNTjH3LipHxtmsdTh1aQwqHpUHhAsa8iV4tiZuo798psMd1xAjngKgRQvJpxwFLm8c8CSVp",
  "key27": "3TkpSrjAeL9ozW8vKhdrHiED1ogWtkD98cpqEuWZy36xvDCyw8H74TSS9fXDLViSiRnP6fJUFyFiowooB68cvAJS",
  "key28": "4pQYdVF4HjryfSjtYe5Du2U9qE42UTZB8V111epZY4UDkxcGeC6WVoFY2QryK4uXE88bpsJbdoUFKpbJpfHuwpZY",
  "key29": "3sgLcrgG76cTucB5mmyTBm1kfoepyrPg7Exn6NpWxcjHicDJKk14ERSN714pbmJS5m84yKNxXTYNCLqYJ5bnQpQN",
  "key30": "5QdPiUdZszdSpFhAyi5VjBSbNw61zpm23uZpax5fEFUjLKenFx33W2AfoQwzqk5z5iDvssoUrCAqqGvKz3c5AAdQ",
  "key31": "RmpdvNF8uJWgADdHs37v1s7JCvnLpqxR4S7bXw9Cas732iN7qSDqVp8T87bJvHTZBteyktE8Nk56J6DcBszCWVU",
  "key32": "4zGoFThZwZA2SUjbaaQjXsxc1xGj8tSF7jxVgGQhsxeHEc1Fd4QKP6xJtcMP8zhrzpZfF1SBaGiTcFk7GTny2MEf",
  "key33": "gStoWKTA9jrLpCVo8TbTa7Coe7D6Vsn1gGMtJmtYd3Y2pWjh5qJPVTPeKDYNxvhRT6tV4fzfyuyotzuB8JjwVQs",
  "key34": "5ME2cisRZ3Yu8QEv2qNRgGh8n5UkemU88373yf24UcGT2qjc5LUFwno4xuxcVc6pvyTfSSCENATv8iLriV5mRAPP",
  "key35": "3ECE6GHhBXfB2xK5UGnZZ5EicZ7gNt5tGXLPkrN5aDcKdubRp251Kfd1DM1f46Y4QB1d5hfvTMncdzBxcuD1xBJr",
  "key36": "4Sj7w9WZJ7VdNFSXfLXyGvoTPstRECsBcsYJZmqgR7kguVdqtw7ouuiS1QTq8DPy6rfTCh5NreqDy45uzTvJdjam",
  "key37": "4hugLmuex5nVeb8BwGb2E6LrzZ3NAPKm6XZBEBDycgn4efdALH8oh5xNheKL8NmaWh1K5azkUGw8CbikyqxR142r",
  "key38": "3dqmd1GWFztaFtBTM8kfTkJaKnHdknpXUMhFMe2MQ1BQaUTh7RkqE4W9vx8SKmHAuM2rGx8MhoZ47MKwpatbc86Q",
  "key39": "5YPc3CCPW11mCbTcUC1oC5gwd2MNQiHkgszn37V486RToR835aXTxECKyvR9BbbAaN3fJdW6BPaaFGd5V6eo6KP8",
  "key40": "4vPcJAUi8q5FTHhFkpiNoWiyEQLa1yZsne8RnJziGjhWh7kqn3E8GwU76Jo2fXRCktuuBjUv1asBExUXiRwe65oC",
  "key41": "ppuGV6LpSBxC8ZARixxFGzVxV51s5LC6oyQUEBkHVyr5K9D9AUvKtmTWSmTbsXiQNYMVWA7SQEFzKVS81Ff7NL5",
  "key42": "4TUja39NuPXz687crSYxCQoxzZW9c8BkXbNvqP5X6BwJ5y7EWFArTJzNPVMmNUfH1wBtpg2wFAWhoHmFaKugKNzu",
  "key43": "4qw4ZiWFkP8uLGHCpGNZDkuAetjfRtketreydfYixX28g3dc8REJSER1uDWW3QsxhD6UKynS9UyBUN8vYknwLnSM"
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
