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
    "5X9kcCgNfMjfuhAp4Ct159324eURbWy2HZGd677X8wF1byxrEfnRUh6pzs69FNSqaLPLdePbZD8k65wkhyrMiqeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YF4wN2r7Jyb86CVoMJzNxjxjRz7j4PbnBuxMG9dJoaHHJiKaFfazher96MLf5xCvF5TMZm8pXERDHPy5Dqk1hEn",
  "key1": "3uJ7vaHpWZRJRQKdX2xVjvSQpNSdkBbQuX7c4kVr45kkzvJ1TfqVrw6nXn866AXC7gnuKz3Rn7HEdtr8yL2e9FPU",
  "key2": "5Lf56eTqvHGPbHVBK87ge7NfhCz2eK5jk5RevfKzLWwuts1ErJYFnArtMdfXyZHVzUgGExocK8RFJAr2HFMVPH6A",
  "key3": "2KsfE4Uj6cHihNRk5XjMiRn4gv6JxQxwVumuGGpdzdkYm1qqySAtYQ73zYLHHC2qNXmZnpTnHW9m2g3mCJGTUygJ",
  "key4": "5WzTNqKyGNHGi5Xt7L3x9v7EkgkCHrhgNUk4UeCBYWpo5YgrF8jC66kQdy66Ym5sM4ePPS8oxEeGtVw5EsBqLKi",
  "key5": "2wSV5HQsTJrbjiq6VX7zBfgtTbbp7ArR7JzM1FZKak1eXdV2FTg2Mz9mm8sQNJtrTWsb4qHYx5h6iHHzVDdwDnHC",
  "key6": "5JtuQprrEPGdgmRTsfnVR9cuyvu8R86E7hG7oJGJhKXBtqtPjJqQSPkwqdEsZADwwzWDKbQjoAJoeYha62JAWN4k",
  "key7": "jBCPSUTH7Lz4HvBjdLr9scUQuKcXn11z1qaLX1xcgR1DvPdG6xLv1KyVJAKuWfg8Q9pNNvk8Q9B6qCh4zfWvqif",
  "key8": "61fwuQ8dPW3HPt13AFdMuAfWGE1C9aSKgrJDUzUjFL6GeTG4qwWoSkKeqzhSS8WhD2ugZesEkJAqJknGyZRbK4TE",
  "key9": "5hLFDp5t9ajNREyXwaoDtj7VVVaTZWquUjVy6JEfpGXvuWkTzS55PEeaWNoYA7VtHCUbcz8t6U8R7ktUWnSVQ89A",
  "key10": "5HXGkvXZtp8aZtxXtSo9PsDuJLHfdRkPVK5PmBwFhokenqELe7VMomgnVS9EXteXUbEKYxGpHbsVjKpWETiPpBE4",
  "key11": "j4tbFwXy7EHfqzTui6vsnsy4nMSNYy4H8U2JWAnb4SmWXSJjT3a6i46tNjcH8jmZeqD5yFMGHZh5VVVb9XfWjF9",
  "key12": "2m79TjYxUVcmwLjqSWmmbyVoWc22itakwXMZDDpAiSXxiJQXN4Sq9D584cmeUoPMNABK2nQnnpCL8pjqtJQ8ZxKp",
  "key13": "2vEKYipXjRWJtvU7K5YDnvvSrekCCLaVbisW3t5tF9AaDBu74A4ScG8X5oQifFQCTRugLxJ7N7qCjLChKr97ptPT",
  "key14": "3FXc6ix1SzCi3i7cysyHyUDNhHnjrKsVDy1vrKGJofV4EmziT38SnvV7QqDiNRUBmh66j5hZpNu7eapgsEeG7P67",
  "key15": "3nXekpVjxLKseUw2VnFp7vwLdi7a7QoWAH6UkYWQagg1UeQZkJxo98y7FKbTwGKgTkAEqVhQi4twDaLfdXUhJQzx",
  "key16": "2Pm9JeQ2qLA6PFc9yr83pLTim46GVJb8XHU377qAn3EJHv788ZX9JocdgKBdqQ528escw8EAtCj56BuKJ7rTtv3z",
  "key17": "52Y7HmweN8DYSqjBmyS8MNDYtkYVBg3zHpCq7JhAqzASNpipetiet4Kwa26owwVxKv7ZR1hRPQVarmTJ7gobeBSr",
  "key18": "4nodceufYG4DUc9w3vJLMdz1FSvaHM5cFQRdHtmYtTbcfiTMwmgHUdsxngHWTs2c7oSEWYWRPYPT2MM5eyfPMvUn",
  "key19": "3T5bmFy5CxdSViFbfwCA3cysPeDt9wd3f3s9XvJEYEND5YngESrkLJAxncte9p2bELwFQpgf8QVZHaRZJig7NWQB",
  "key20": "4HKcUbq54EnYoTxRMso9MmvjiLfVbTbd3ST1kTuy3ATzioKL6ohSyhs5dS9Hfwxu9xLL6KE3qZb676sbDKhzJM4J",
  "key21": "63We7DpERLb1yF7MJXjdD1RTGUiaqkMQhXavkjPFJNKJxRdH7khiU9KcQKu1fma7CpG5ND5RamFUjev7qt6ocigg",
  "key22": "21houJ1vmHrzqDzbA5yuf9TMLzUzMGF6tFWq5E52nd3TrZaGLFP1bccridG2XZ7Gs5ZyrKFZ5osqMbXddcJBfKZp",
  "key23": "zT4oj39Xu3yihS3NB3kkNgN9b7dFQojefTaShTfPJ6qvQwtDsoGo21QnpVAjsQ7pehBi22zXBTrtdP9PBfpYjJ6",
  "key24": "3Np5ExRiyUaVRSs7EyySVcmkfkrVXLcxNJ9ij9KcExLCoABXahxY1xx663inZNvCY1DShPSZ58F88eQduQjd9iQb",
  "key25": "2j5V44pEx8f7iG3wJnm42A6d62LEaqrLRwqAAjbHgyMqN3QrEp4Xknd9FauyemQDNnqYBfV5FMKDa5PkTe7muoAg",
  "key26": "pPzpZZeWiS4cBNz4C62HH7yb9c7SdvbpXKgGqtR5b3ZWwWxZXDRptEj87rwiyRv8y4LqvUGWaZtUGWUEWEDspki",
  "key27": "5gVEXhATKK5BTUDBLovWSPxFip18CVb22yALYEjqWPFffSZed7vq33ZJAtzsWmLMuUjb3Zkum4o7a3yqFv7ayyEW",
  "key28": "55HwF64tvXkoqy38TPuNPBdw3FAzsNfXLoxk2voyKwVh21Gaqmw2RDuYBMB4v68TsXr8SRJT3JQ4Sy525f4URvHE",
  "key29": "5NSJvZ9eZZMy9MCFYhvxZvYKVEndnmUX4ZpGWy9PMnhMV9rNsGWzySqZufEXDEw4F1UAiXVVyu3ppK7gNffdYw8T",
  "key30": "jJABzNwvrtPhrpfiyNzjXKdanCBcqgWp33Qs5uyMZH6LGKijUaEJFB2MUgFqBNykWBPU65Gr8KNwEsD4c13PJmu",
  "key31": "3HvTSRsnNos57oHXiXY3Lw9bm5R9S3fu8waw11bV2Ye3daqWLUepYUdiQHg6YVZCmov4XEcHUQ4g5oY5GoMHtWdV",
  "key32": "5wMWkidW2QdwqLLpXcof1H1f8nWxBu1mVESp33SXPDt7ieo64VrXokMg1ak9Qqb6q3gfJJFN9r9EA2tpcf6sZ753",
  "key33": "34ecHxmG8xtEoyaLsMPgzcMbT296kJxc2XzduxJ44rKAhZHy7F6yLu4B8XAcsDPraFJTsgBRKr7ejMoKjkqRymEp",
  "key34": "2j1XNW9PJjk22GS1VokpXNPF4SN1zc5Gv8VCeBck4ehsvhvTuvkeak2xRzxNXJDQKyVq49Tt7mngU7om6X5Af3hm",
  "key35": "5yyqoZPcQrg21hRNi6g5u6RGDJKDdL419eX8Fhq7gdih6ft1961ST59B2R2nmvBWLrxvCntSz9tsTa9dZWRF9fX6",
  "key36": "j8wBc3Mx9knK1n5Ag4fSVQsq9cavzzte3rXuhZYCPryfgBp6y9hX7zna8X19mR5Yj6GTu48HRuxicfL2MMR9R7z",
  "key37": "5Mmx6J5DXhAPJd3iZrr5i8rY4vZrRSyBxf6yjSBSMAsJpFfHcFwb8z9887BQ6PpbZhznD2UZKnqygygWokV9sB3m",
  "key38": "rY3LsTarzReki7qLaoHp39gAQAGbABGyPfM63zJVYLVmHo68E3nrC4ZP8uj8Ym1s1qQs4sC1m1BYFVYmovZjnwC",
  "key39": "4xzk3cBKyNdgrJy34fUthA5xfhYEmbrNuTWf3ut7Z3n9FAw1MVYkYWJBqJvGvh3Hxyuzp5Q8y4kPt3Y6TKeKVGDD",
  "key40": "xYgEX9sQBATyPedmqVTscQaXTuiR843Qq3LNJY2D4uVjZ5gCJf84QQExCb4QBDPJbmPDUByEZagxFYwrMNS9VR5",
  "key41": "Taa6p47Qxur2GmHZF3VvGXb4SATbHTF8NWpQ3DHW1pUTLafA7ZrGF1mTsx4maQNE3UHs5CLvFyrtadP9JZ751Qa",
  "key42": "qSciZJvfw9zpVP9ZHw9kbKgarSFChHdhPnjsbDEnpx6KRaiMGEMCJZdEmopu5Gu7opvoKk4CqcnCWnDait9VBR1",
  "key43": "2vWdtWqGZvRiXv8kUT1zaaeFqTf7o9UDzbmsN1VFPHpM6fKFJfxMMi3KG3WtitonN5pGcVk8gBkhuP4yvB97DcwU",
  "key44": "CDtJshVBh6BJrJ888Vw4YafBkv8osshFJGhEo159x2ujbAU4EKQkGuRMN4yL7RNJMUZEJ9o9wNPfjUkjUQvu7L7",
  "key45": "3ofp9NA4qtc38mXeZzx19RmUHKyPca5ESTV5zSSXGGytfqFucfaPL8SD6WpAzKZhEVLSkcU47SgNkXJS2GmNy6dS",
  "key46": "uqhAzKfmXMZ2TwyfxFcJxUHZPpdKVuP8ktSvHEHJCJDgwWx3Yz9ge9bUknZk4jd651rMzi2SLfyJAAke8DTBRzc"
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
