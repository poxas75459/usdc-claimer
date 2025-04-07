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
    "2Tu8ZVEVXJxEF5yBhYmG2uigUf4fMMP55B2T76xqrHWTWjy6cz9uz5MbhZogJMzsAA6uqoyy2ZMjXud5vbFSdKzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kyQkmHzQUqG3yiL4cfg2RjckFf2ao5CyMdRpfhT6LW6GoY78tcyiZ4TWoBXw49xxhaDo9aK4CwbP8QwQU3nZq3g",
  "key1": "3EJ1FwbTqZZDfvff7hYc7Yd9RaWbeDvVpk8iHHR4mZzuysVJhFPdG7BkfejQPAvTSStuNZbRZpY9CQMgda4q8Ad5",
  "key2": "4opqU2CENqiLhEGkZQfEcT6oc7KxhDehW7FiWLZXjQ6URYW1DSgtu4Nsja9k51NrzuxDS8cA4f3FLGU6QGRunKrT",
  "key3": "4hbBauAp9wx5E3iLKg7ZR95iJahSqQ3vumpFye52wS3YdkeDc2AdQTEvwei8EzVbZX6NpQCUTv6ceEvszJ23gqeK",
  "key4": "2bQHMsouov1GsX1YpF8NmgniNJDHMiJ7HEfwQZRJK6wDgt3EA1E9DWTYrnKTADPjJ66ghBi8ZAEKuQYvtoTyW1Cz",
  "key5": "VR8xcUkSwZ6TduCaT4rmSLR3pVqiUmGggYh1eufRYG4dKSF8EeoBW1QHXYowERVDFvZA3Em7yzxCebdqQxqMriQ",
  "key6": "nLGH1rfshTFhDEBtzKjCtpuNRByPoaV2G5qVLGS4gheeAVQt344X7SsG5G9MiT19FKddUkrW9rXZjEnEJeb77Cm",
  "key7": "3dmkc5Lsd8KNhwjbNeuhHQzvjP6HtzhPPuufaA1AtHtNq5VppaQypXd2sS1SVBGYfUuhk9dqkXW4bCQGzWoa9ijw",
  "key8": "2fAHSRowJbmurSNYgL449teMJBrW6niTipKCNY9DqW9wk8y7gw9a6PWUArcFXRfijeo5z6PXWnjsptJGKMwK6sGG",
  "key9": "5NThtDJZR2Lb5zeVkqdt1eMUyR4PJufUizCUEJ9rjFV2DSDc8CrZ1qQade7ASjtENEUsgw7PEajC1dT2jP4YZe9t",
  "key10": "L3pZ7qX9qsNYkdGGN5BhkwLBCkHRrrUoEW1nvpYDMd2EaxBW9Kd8T9UYCsYGQnCohUC3ExjSNo9Y1SenYjio6dR",
  "key11": "5NtjxJsWhRfhGq2Wj1rgvQmqCZAi6poo45NtnTt9XPTJpPkKwahCWkVC39thvGnuEVuFA3hthXu4juVhJhY5aAZn",
  "key12": "5Ath4h3wfSfc9Kk1J9JSoPEdsnxBhS8UUdumNc4veKbNfw4ewy1iQ4zzWfqBFhUHRcBQGCbwRwb5SJxADQ4zYs3q",
  "key13": "1XmiYCyqn5VnyEdX33WXF9md8j3rBKuy36NyYPtEQYPmYwyK9rTe3vqcqcRd387YwqeCDDKcDgkrBNoz7LipQK1",
  "key14": "2xdsG1WkcSE4ycnBwPNKQAZU4df6XhLMKNj1fX3jAKnvkMCHNiFiZ96WjewQcJumjUajHRSwirLn9iryWuHb4Ntw",
  "key15": "27dXkKPmTn4K1kzXvCTCndscbnVNKMqeFEoYkreWC34sknbZywVuC6jBLhUxG9SDZs8pfmAofY5CcB1meoR6Z97G",
  "key16": "3EESdGjZaNq4kN4WXhyprqKDMWAnAfWDHiWHb7y7vzdPtVRkb2cmtWN6pFvnGpU8Lez9HAgCHMGnMZZsLLVjdd6p",
  "key17": "SxWUeZvppbAo9qHHDT8LPkDMSEoNzagtGHs2XrJxq5ohXfp37dSuti1u1GDTBrBwZ44eVNBX8x3a1SYLHEbgDjK",
  "key18": "2tkJGHnt7SNiA5GXenrVyMVVHifykDgPt1Bu2jVuT1NDXLjqQcSdMxZMTqMyvR3Lp29UuKHdWWgQsAbzwR1MDTXE",
  "key19": "3J96QhjMPq3XbYN3m8nMrk29BdzmDj5UqfjLx4KSJKwpVrRqnvM6jUcfFXWnXGiyh2m3CnuJRdz5EtXWHygJpaeC",
  "key20": "3EeJydmTqRWhuWJk6bKTvirB82VMKq5BTdYzrqr4dXdPdsirrvChgJ5Cdhjntsp6xrp7u1Vrb8w7oZ7USiRh9LUx",
  "key21": "3ohH3AKYAAzUnZjB5UwXCiGSEUvfEGct9dywxfh6d1bB5Uq4bPsVqDv3PpqvczUcHnLtxnHs4PDSTm4nK1Vp2Sth",
  "key22": "cYAU39tz39avMNuNZWcCvPiG2oM3SosdwYKBnQFwj8LUcKkjmHh5iMhsq3h6sZbgQ8Wsufcb2fjCq842nCaxvDu",
  "key23": "3Xj6BMFooij1gvf86nSgibspGjkXPt1CAPB2knejdEtE1u3zy2pJGpF2oagVxWi3ckW4cwJG3ZQ5GfjQi8VhraAe",
  "key24": "3VHQWfBHgYFKZ1HXkKS3Ljm2SJjnoWPAG5a11afPQf3k1tmVCYDJozVL4e5FQbBH3RwvgJuSDpDCyf6sC6nxicRu",
  "key25": "xospPmzVQEpG3UnGzXHJvNAgnFHoZSFUse22H4LyiFtmNY1tw5EBg2f5YMfuBr8W3JGPFwWFXmAfYhA7hwkffKC",
  "key26": "2fQGu1xrM528jawhYc8iAn1bohMWyTCYukXp5UNvDYCfmhJWLkuxULA9fohoFPR6BcvCQ9t1xzGrGdgGTJSM3T82",
  "key27": "53DLZs7iAiPRMuyJCWabfR9yRg1AtY2rLJK2MCp4WsSfsb7ABnEhLicqoJsckrwaJFfcihFegqN5vY6YntustkrH",
  "key28": "5otQLPTsLn4YzVNJfjvXuD43quxoiD1meS4br7DNPJoYi1X5PaRj8rhpGLpJsdxi3Bs3pKYcx6VTWh31N6cdjjju",
  "key29": "FLUREHaNqr4QdVPh3RvV1bPvkXsVZWbTQiQRn8GfzwP3RgJZMSExdzmXVRi7TT4MVe5tKQQWQWKunr6cM7TuzrL",
  "key30": "5rfP3quCsEPcNjaX98vEVTpN1HodDxsoqrzwcExSupVn1FrXfcUAmTPydu6PbsxdUeSjm4CdptyfAkQvD6m1f1zt",
  "key31": "4FQ9MF5NxDV3REyYic2ZQGcvGzacv8Q7B3PTj617hvWQEwThbqZLD1DViXHCogYBNhq3uqyy2Q8radabxi5Dr86S",
  "key32": "JjrzuHeMPzJQEbP8baUBvWrg2LW4MThR3dY1tNQGNm2YnDgMnnZ24J3gXgJk8N3jktWtY8WKAhAudXUoMBFetcP",
  "key33": "4P29hzUz2kZ3yJVbG5HVDrCaZA4Pxe9RNtXBF9TLQMiJ2Ya6mviUozB4csF5XxRmLLbKBvdnVQXfyzeNxUn55cbo",
  "key34": "37Uebb4PZa4c3PurfWAekcQvQngHmHbnprXGGGFbcMZDHSy7mBvRJw5yFi7NLyDxiNj1dU7KUv8nAjpVuAALwHrh",
  "key35": "34vb5wjBkiJrWSkEnurvHt6d3XV7oepQCMdVYBLH2nnGy4UNmswiCCU1NZUnjxTL9kmLEwwdYVVc7zMZbgW6tgni",
  "key36": "3T48ojcFLpp3UdD4FcwJ93TTFa57xAGqaJrpzrckvcKpGhU9TqMbaLEVgQi4yPjtRvj7t8nn7LD4SfqDvVwtYrRJ",
  "key37": "6re4GUhm5yrWCqsvWgqUniY2pARf6uWhKSsQap1ZYvNVHyZc4EUxWTtefJv3fCcXFKZRZ98KmsrDWTayp5zwiHB",
  "key38": "7rMuzU6bEycYR8ZvJhQSkHfXRN9dz7Sd5kiZ8HQe6w1HfRjjYTGLxHWiFgXUmA5Ff4SfGcWreFzoU9GUGt7ncBW",
  "key39": "S6Tg4dt4VvKkS1fZqUtC1THSunWfZ9zT1k4go6dEamMugRkyrjfBk8AMXap8isjgwmYgxpXNZsCq1EAnP6YbXs4",
  "key40": "r6WmtkvNpJ6YT5TcNScdAHVqmDzQzr3qWs7jpfk6m1fbotp5RNjZkoREuLXNemZWFmWP7JYTt5FJ79PawpTGzCk",
  "key41": "21MjoPudCmyB4575UkqtzpNMDDzJKZUqmndzpLb58tDK3mCnj5kb1J3PSuTsYTv473i28kEp5TamPF4KyabYzyjM",
  "key42": "518ZJ3zgpFhZk2N2ArXJgztHbcuS6NG2ANHL4wYxfCrFLtdDt9d1AxzkhE55xPiscksg37bvRGoi9ZnzLR9QjmA4",
  "key43": "67XH29TG6dWyCb3YRvqUFtDZjHAyVpvxzAbWdavoZH1C8UC5LQ2qcZ71jZT9dC6Ax28CE6ix37hXAp29SjKe5cMa",
  "key44": "RNpqLCCWZzBC1GJBtp4v8mL4Czruo2hLMPBp8uBSrU2dsqAD219GGABosXQvp5bGw5QKg7aU1eFcYD6ErBhZRuE",
  "key45": "4xL2vzs49BfWbYCGiB8QCNUpSHQXABp3Pna6x3jt5APesg2EMSxSC8dwsNWkbGgi2XEX6UyvaTbMrWprjrXecX4R",
  "key46": "444qQurTaUFdfdHWsPS4yBxK3Z5MZrQwrSP65VPXdhJsGgWv2JBJmVFo6DQQqhDaYijtxF5JMcXN4CN49BaS1X5o",
  "key47": "2hXs25APgUQuJXXTQwBNjzUcu25iBFX9FyagrVoeh7Ku4Wbfkio3ZkzJi6jnGBkGeHh25A8omcpRW5qeMTNg1XvL"
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
