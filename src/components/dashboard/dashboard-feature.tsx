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
    "3vqGn5sMkgTRbuGvAYfTQeJFkZNdgrXxR59pCskLAa1puNGGSj1PiA1eSYALPxNYBiNAcv9o4nGFvJamwirzDDxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H1oXXAeThNU2rzSccuFtBiABCfJzAbmvG6Jk52ZACVcUJn6oVt7srhoMRKAcsanor73qRSb3LefnFq3rdZtRdSM",
  "key1": "5X2t3Pv8FA4MGf42W6vVmsvDLpiEZFSLsz8hqnfuJXtJ3oJ5UwQJQ934QQN9F2EQrMhkaq2m75CD2AKJnWMjUsJz",
  "key2": "4Dueq3r2o2d5CDUqQfjb1EjPpZyzrt2CCiRKuuyxEdv724ShkaP1D36cskko2ABYBPKzEao2gGMdyhTqSP7DyZYd",
  "key3": "4jNgDQJvFXyu13aAkRnBSFMATT5DPwbfwLHzSVgdESaFBLQu6dnChH9ss2fHWzCJm2tVDmgBzb9dEVXWJsgsuWsJ",
  "key4": "4sfWGspwJq6C5KqEjrMypKfhAUiLHjQnogdAjHY4ZommskiKadBa2xVQkqsuw8FhyeJ95TGbbaiZskRKLcEZ5dRH",
  "key5": "3yc46mq5cKQCXQwV3s3MpTV3mWPLeZXbLuo5EYhBBD4CD3NDEcJsQjAAgTAwsnymDEHYCLM6ggiqkFzChhEAvtNv",
  "key6": "4GXcx7TybogsR746R4q28T7wd6CZY4JzDYKmb3KG2UGi9TiUVSPhQVLnzcXMHAtuYZRdq7xpfZZVCkGbxjPXmdrb",
  "key7": "2EAixovkXfushk6KXxbZtpDPcCWEzdgKfLYfQape1ZGmAvXZgK82pDyvyCsrYqL9jHPDsowtcGY95inM8bsgw9DC",
  "key8": "5zfV1GGkLGxyUp7xYrBsPPwdviTPAmmTPvqfRVZe64H7EHjLytpQUjxgYWbYxgMGfFAUyUt6eqJxHmD2SLAuC6e5",
  "key9": "5cxTgGaCBCJ1baXy3PvV3WdMxMdCpYMhu73xDMUMN58SkiTHDnUsMN8nUER4Z6Tecnbd5C5zNSsnc5rYe5H4tmAY",
  "key10": "2NVqAJwzXBVs9zEWTpFxtAArGAN9qJxbQiDXMZitcmNWkHS9ZNPKWERZPtJZUJFiHWSkFHdWNqbCM7NNFdDeKhNX",
  "key11": "2Rz3FB7Yz2kvsGuEdGwpXJdqVoP1Vbomm9ANZZxPvtpXnYy4jBP6JQhG33Hu4toeE1c3DFfFy2AN5yezxLSd5wJD",
  "key12": "dXxPppueDF4iQaPK5PnmXMQisVuJcDzPXfoEDeB5EzfjbQHJw4iixJRGKp9SkJsng5RKEBX7qCzwUuAhqwy5mp8",
  "key13": "3JSsLEJMjezXAqFZNv3Bdj4yjJtfdyCBX6iqjgawP4jHiDoBhLERYAoXiYMWvfQKaCY32dPSELSXYaE1JG71bsQi",
  "key14": "3eLnM8qq424PnXDfJUBtPsmpQ8frNY81sm9oyACPvwUxq1895JsspeiNvJWGQc85AVjufDzotSWFUsQNB3TPi1fT",
  "key15": "24zJqPmAN8n8TaeWd6yz7tuQNqHxWQLkJkgv7pTpqYzmXGEUnJ5VL1Rc4Q6YKU7BAggu5LEhK1jpuyMGHAABBiEG",
  "key16": "5v86jqzrVXbyGHd9Kkg6pZLVgK2kkCeBwHFGzwcYJeNQAqzFtCYGQHyauPkQbjXNnq5zfhc7js9Xgx5w26kt8G7f",
  "key17": "5Dfz73xhjmi1e57DAcQD4nCkw5V8VD5ZnHPpDxGGkVtviVHqc2APZ8dkkVM52McZN9AjyTzWgmYhuGk564NrihhN",
  "key18": "5uUnuV3uD9Nz1RrB8dwgtX1vC35ik4fa65nAoW2HmEf3mRpxiEptUWMbsLcGTVpRhaHWsuGYhdbB6bkyJAyE35Tj",
  "key19": "zHukQ7cE6HLE6952WJU4X9YoHNtyydD9hnLbtgg7sh4x5EKFBBqiuEYMsRAD7e9Mkwnc9EK8Ko3okLsbjb756Qn",
  "key20": "42mJnWwKRLkWk8Q5rV4SsaEwQz53Uo632yVgSqQeinYiRawas3euwxb1ju7JEsGRvumbJ5ZpS4w6jm3gHnd31kSi",
  "key21": "4qmryvx51bB6MARpDos4QDd8M7oneBQQAYeDN1eBbMV41xuX74rP28iA2ux7QofsXWAjmnGxsJexJ2fo5KKbnLDw",
  "key22": "4epHUQJFveCqywgGPwdwB5dWF6DtMnsuEbuboMAXGG3QrTvnTCvHwwvULsn3u6vJmpxyXvnBP21nAFh6vW8aEabY",
  "key23": "32AHZ4StNwWxPtg8S1dsTP6ZmiwDEJ8zJTQU79twZ7BYmKfpQUqEWMbBjTXDSqjJQtMN5vv2Pnj4DSrWqQsUKs9L",
  "key24": "3HFBegejNkM41VbB6e4CzEernVuYPo9NXGJtUN2GXFQmjYfQn1jfKmGJYSDwVqVGydywrEiEDikEBqzgxXiRWLWz",
  "key25": "5d2RBKfnbkjDe4qwh4mXdL8EVoECFVxahEkQZX2qiMLcY1mkedTgX8Vt32SpuMqVXXxuFyWNnG9rxc2BvZJdgdmW",
  "key26": "3vgzhjG16Cc8GKUgDFmL4qq5F7GP7xzGBTbLFRsos5U2oYmdr9oNtMdsowqSuVMMJnQF2xHJiEkuFxgxotReJAt9",
  "key27": "tTuTRNKv7BTgAs3AHnHerqtutHVULqKYKKSscTmk1CFAQVHWwTGh8uvHheBfoaiwXBgwAXFyChsURsWUBD1dVxq",
  "key28": "PWbvaV9v7jRS8mk4adnbrrgQox4zLQ1hvKT4iwS5C5VfSktynrqCe7wo11NFDSzEZcKWBrQ4shQ4Dno5V5MSpoe",
  "key29": "3RhB1xNcvdhZwEBhqaDMCTitCWPebZ4jfCPCKvqJgnBBkYnKNHaJAi7PFZ8M4cQn81LQ9CCedGorDy8ZYgSR1bgy",
  "key30": "3QcH6VbajQsUcdSn3L4MVNgXuAgR55PrZwoG9L2nTa4fBbDwRAmETxW68F5yREmmZQpJAcUBiaAYnib7QAPLeP4f",
  "key31": "2QPyZDZcNqjowxAa9urqtPmaPHMpwWeTQCXRLFEuLWrs3rcZbWYJTd2dFCgq5wg4QNFsfjLAViaVw25pbDxZY47t",
  "key32": "3jzCuxHN1KV9nkX4rv5DNdbYHJxvU7iguz46pRJnePxu22kocMMzjFK3NxmMpv3RBmk7doveH13YmGqKYsLxQS8d",
  "key33": "45nPgchLZaqFNHXkniUobfk1XiCFhef9RHKWbSKgZnBGaTQoqW4XUt1dh7tSg86tLNWaQossvrot3JqSp8LYAqts",
  "key34": "cBhwEEgWE5SdkDDytYk2sozcj4ia8aEvEYfwJSk4EAa7UcsvBNVi9VCvZFxeDsTZVnAyrWYEra2rPR5DebyQcte",
  "key35": "3FybgqQ2F5WuQ4e3vfYpN89W8y6Qih1jnVbhhECqXD1DzriwMznE8z64eSDrypyWyF1GLmFHvLpwQkareg1rtvDG",
  "key36": "K2qKQi2LYbBxRXZQAVZ764xL5FyUQ7PXsXXM1dV5ajPeCpF8bon6kbmd8itXxHPYoCYns9o2zr4hhKqYxj1yyRq",
  "key37": "56S4uPMQjSEpYPEhPrBAfoiesBEoneQXGzAEhfiJ6nRaXzLf198DjRnkcPymsTYV91WoWAP3peAULskqiLEXKi8U",
  "key38": "2rB9qyqkqvW5zxgixZGWWubwvcejne6pWDSyq34NyzLW31DfA4vxfQ2QRAeGZncWC5SKnCaVyB1pRqziuusE6wCv",
  "key39": "ny75R6DLDEqbvm66biRmzuJcaciSmrxoyAUHEUvpMmoP2CEv4D6CGEV3e6GEpR5KWmtgcvwKAtFjK8HUbCMhYPv",
  "key40": "auzBRDkrWnMZPGGd4gmdPrCi6cjLRsoPV5pUXPzKhSG4pZCxLdDhNiNz4Z7SfAvfLssQ3hkV6BL1sKrcwPmh8Ee",
  "key41": "3wRU8S6L1fm6NvmZ3NqJqd1TmHBV1knz1GpATnYn7K6HtNGprXw9jvrWvbBRVeVBD6CUh16NiuJxzo3KwkxX4gdp",
  "key42": "59kEcgFGEtweQJEr5tDEAGg9kFNPz7x5iU3tsYcPhAeiKD3yGvBMsgohEZjxu4WKSSFPTL2tZWWUPq28w9uvMZ9J"
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
