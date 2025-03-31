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
    "1kEpgRX1BWvjYFtyccxTuL5ZX6rretWDCaWchjfhc2wFRTP3z7798BjWMF1tKhjY639ix5NftJroLdLA4sSb66t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oD1kVg96fvxk2v7iYKDaj4g69fZMrBU3B3z7SvqTRptT6m8H4yD5z16qd7aW6FqLYBmCR9R5fA2cpndXH9KbwJw",
  "key1": "8WxZPejWVMhBXDHykZznKYGZEa1tuA2NFSewxxbcbJzwDtzjfXiTQrzR8vJre91jkbc5jVSzATQ1zGAbmEXhub9",
  "key2": "36azARYvmVFSAxnYeZLNpMCaTqM1U8wwVjoMNXAm2z7DfbQM1wHzB1CGkyWQdv1B7P1oQBEaLVHZ3xR348SKEWzX",
  "key3": "2zSyXG14KLEPYxng6RWonJDvMfGz6nHrtdZ6kyJZzL6KiXnf8YY6TPGTpLcumM7ECpDmqBAFUNPyxdpuL3zVy72H",
  "key4": "21ZDeQYZ9nkPwFQhBSBpxUtZoziJ4ptS2jZb14XipZC7mCh2H2HVV2eTcLrBDNFWp7ecniCReoaw9phRsd7Qpprw",
  "key5": "3WzrFpEMvq8Bjgj8VfVTxqaThCbwwjRPYGKH6NieckvB4KeDaTXWHycmdV76A7mjvRwnVgKmxFubNNTzxijSU1J",
  "key6": "125LCXsaiwsutNARDUsBuNewngeMJ1xgodYumdZi83DYVaSrysHnUCe27HANZDYmXfo7Qr76b2oZ2bWHAzxSdE3W",
  "key7": "H2iEmraRyjpM12QeVp3gG7RsCJeyXwPT6wdSuEmALAEECs423aFexakR7kgYYAduvoydeb7acNzpACzwJa8F5dM",
  "key8": "46QTABxcEEoXksFJVDhJcb5JuSbxyVkzNiquUwZjCnCKwvev7ReFNKqXYytW4rru4m1e81hn7ANUMmEQeH5mzrDj",
  "key9": "tdZqRYygQhKPMH8sAh6qWw71LJeSerNyRRpQ279D2wZyixT9zb25aKPuEG4KWaASk9TxZkPwgGUnFyWLiFpBfxZ",
  "key10": "TXfjSn5gF8ncHbLS64ujEeEeVa3LwRF4gyhnC7ACctNPJwXvsw4MgrvDbyotAtja4MA7V6mEYwWZNweGB96uHAy",
  "key11": "3DChiTz7wsKNCC7ZM8VQdW2VJiw1712AyEKh6jbafAJGKgt1zj9hTv92FxKt11DXghnSMBXbmG9nR6dTuYRvYKmS",
  "key12": "4cJ8yPrdtDk1bqQ5Szz9adXZ6CrChakcB3FrPBEbeMUWHCDhP9uZAgQDB1HdTZxdzcCMmBhtfBbUbpzXf7M4kYtQ",
  "key13": "39hBx6ovzTzeGbj9iwwePeDpEwq2qzZmBdotEWFqPzePQvcMppmErh9jc3XfjiVf3BWSMJrAUym5uNkFmmPdrq4o",
  "key14": "HASN3Z3httCjnGNoHKAEJ5CafP7KSUuDxL3D2SgYPxZc5ir4RiRRhLEhKQUtwWXLEd2Qf4EdsWtiUKR5jB4imGf",
  "key15": "2SCiPhH27KJvtsrSavuVQxs5BAaiXuuEXpzCi22sY6pRQzkX4kW7dLKKc7Nr3sm8cqM9u49qYcJoCYdoiWeVxus9",
  "key16": "25Jtu6oqRDAUiJV1rRPpJ3XQQTxzcJx7t8eHQqx758LchtxK1bufABK1ZvjfKyVnvzF9gyKsB9y396QtBcgPQTT4",
  "key17": "5dr5JaFhfSryBn45uMwurp78VgQJ7iyKi2bt181NwVJ95Fu7tAbsYHq52wmWvp4XJQeRyyhdityWZqH3z4BBfL7t",
  "key18": "AMj6JfcoVRKgyC9gbM5iCRSrUQV4s2bzGiXhYRMVrpQoFGZqsMMFhrnkgW6x3ZMziQu4BbqFd3mACRj8S5zzVrM",
  "key19": "5tfCWCN9Pv2w2upJjUEGezy1y5BmvS59uYhdjDENt6MUBnB7RpLKhyyt2cBAQExbiKn3iTQiaLVbNoDg6W4WNDTq",
  "key20": "4DBoXv7gc5pzR6vY9q9dXrvpTUi1mYvbbaTf6Sm4Ew9eXFQFwNefn9A5H2uZ66bpP8ENh8pHcgPk2Jb4vsaDoZDW",
  "key21": "3NSySNTjji5mckcNNgiPpjpjJCQZoRRAAa94mx1rn9cDBkJVEtnRoDu4hQusuWZagRxWcpBfTKW6u5Wc5Y9vXMRy",
  "key22": "635bnp1L9EavGjKB8XoBJSb2wARZsJR8jkHG5547zPDjvQKatnQHP1wSFoawA6ZgJuVygPtHH3PH8pTiWSySnHq7",
  "key23": "waG89tci89y9zC2dVcb6EyNtFXqgMEinDcBDLbf9anKdG96S7GVdhdXJqhGKvKd2i9w3eZnsaoWXkJjMZUCxkkV",
  "key24": "5pqGKnXv7hcauqyv5tvxRAuaB6SPV7avt5HrPSmNGvDWoYHePXxPbkErn4zUqKxxNwAbupHQVpanuvHjUbj2nBz6",
  "key25": "oZXvmdE8Y5bHf6Wf2QAP5Wi8cEknPBMDbY26aCHonuj6aFF7FGbS2uUeYJRAy1z1Mj8mByV2UgnMDz6b8p3myk7",
  "key26": "4Lc73CaDSLxfT3XFA8KaxmSMeEyQeNNiXKsow4KR62uQxDQQdK1UDGrCSH4SmNkwb7WCEwGQEPTKDeyyK2eDDkCi",
  "key27": "3o74rmpNqwZjXbsWgmYfPXURHpjg862JfJGTjoe2gUa9Y8smNdAqjjnUD91JBQYhZU8sBz8YozpnBNZFou7GJwF8",
  "key28": "2M5by9zjwDdgi5kbv5nZtvyhNPTMkmQMVu1TxDWnnx4Dtu4HpgYrVfYnoZ3UJGt7ecSSg4woAVieWKKWoJcVJQEH",
  "key29": "2CH5RkQ1Z2HVsowLKxN9cXmMrFXUMPpz3xc9XBXmcdNd8sYJvTLpbXbkYUQaaysLmTvAcr9kyJXm5f2awhmuh9DM",
  "key30": "4WK3nnqk5SKmZratLQ8c2UAaAcba1HfntwyoQSW7jkREDdbG8hyDuHZvMcAXVyzxbzeEXaf47ksjh9ynoXPUMYiS",
  "key31": "63Wi972nCZAgh31EygrNNN66UPSKwF63W8twebtrxQzia4e29RTh54wGcXQFNuHWd72byoznNtktCgMvZCQmjB4u",
  "key32": "3FuRKtEjK4LyUfLyZKJRKLGGTvfkotn7TEHHMULXy2YGRewUf21CcoXvikjyd9V8gZFfqmupgRx8WmvzHtviEjtA",
  "key33": "5KB3F45xjqUhof4aDvmCmLF8mzEAJ38UobCtZuxQELwfaJV5k18bW5CJqQZ17Uv8oUrTQ6QXUH3HS5SpibUWj99p",
  "key34": "XNzpaySHLCNfQGUXgTZzddS4V6XvzUgJ3akdsr9F3p1fxXcLzEiuVap2VCSBt64TVCRAjzCvPFqMKzTFJRBa4o7",
  "key35": "2TzsXNa1V1D8e5yMmn4TPyKmcNVdkMh2854dfZi4BED1TW3T76kpFxPhPiyVTTLX3imeyUXzzquakVN9GPAcXkQb",
  "key36": "2stG7jfTV6Pe9YKHUixLfi3PJPWj6MjpswfUZDEeuzbiu5JnXdLbgqFkhdzgtFAXJ8GDAT4Kg6nYy13mBPWkWqNZ",
  "key37": "rRPFDuRggr5LoBRf7c2SbfFiTD7ygmpS7zoiJiw6VDc2fCcQhPT3D8TWVJh9jRamiQyqvm6mz8eL1PDtq6KwRDR",
  "key38": "2zRYiLQzYmMqbY2k6uNnzKi7nNDLyzwWGWNhtKvt6Qz2ERJU8dYu64RADbXX83QGRDYbnjuzWdA2BYSBoExUJrT8",
  "key39": "Sq75erLr4ag1HPD9kdCknNzrXWmPrbs5BktuparQz1cuSho9DYxSZSjvRo6y4bfH7BYkrHLa1pMbUksoMkG8duJ",
  "key40": "Gpx9RpByunyoZuCFTwthteVFT7GXth9XcxdY54AUo1S6z5Nv6JHHPyn7V4eEyuN4E3SpCh2Ym1wLJ3tX24WDJz9",
  "key41": "3WHTeKmAtQ3GV2TLuj8Wp5SG3mwRNMMwUQJyZ2UfUbZMbDgHB58jtHBdh5o4KuYimpyThpY1QHueLGcCz3SpiBGg",
  "key42": "4PXBSocdM4gEEmx4YueYPPeJyPriuFyco2XGJRSiJMTPVGX9fRG6YJUSkYuvWfpAgRezKZBuQw8LGWpLuys6GQXA",
  "key43": "aqCUw71tV8LcqazP5GqFFUZ7a9imWagqDn2V7qcYbCMqKa8tW3C3tuvYHtGppYQDMbqXATkyw5cP3eKj5YQgLUW",
  "key44": "5rrgvqrqLxTJNGQXb9wLyqU5JnPA6V85wjSRoBK9UgkmCxN3zeLbLBb2XD56BBEBh11KqrbfTpBLZot3WuFmhnmc",
  "key45": "2gDzYWkfvdzQmoPqXNVbmvAndVujsrqrc8d8dthF5vxRemkMbG8rJJ6aFqiQZhiAnxzmz1t2gamDJgK6cPmBiHCR",
  "key46": "5rQS4yTXY95xnJyZqeq25UEsAZcdLU2Js21kzSwi4YiYbXhJ3C1ArNVerczDt788dxhqawang3YJCd99V8eVwLZX",
  "key47": "5gipmYxb6RgLqwJSYUZyiszdNgENs5pHDbVrhp6mxUhx6d9ryveWi2PVGRzo5WjxTyPVCzptYvGEqjBQXQFaDCWm"
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
