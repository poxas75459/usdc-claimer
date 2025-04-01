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
    "38obBf4yRGA3LjVpXiH6A6mxXtwQ1QFmF7PAxkEKgUmQABmkbQwZAZKVAAFRiJvkvw2VoCNL963rzbh8bMsViWvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E3GUC8EKQDnk2RgCYQzC63SsqohLeiNyGnNag62QqESAx82HqRS19d91UcKXN7P1wKGP6JQ1GD6yNKVD4YFvqdm",
  "key1": "WNAdU22wJHdZg7mhvFE1QFBNtjFGvvkYK8Dg6PdcpiDWV2c8jRY7UKRugXggY6TQ6hQa8XTTeiK8roMrQYPvNhj",
  "key2": "5HQgxh5kkViKkNW71NZhsybU5DibYMbNKUVY43wfbeWhN5noY7or8AiJHLii2QuhcC3p7edSwrmdDQM6m4t2po27",
  "key3": "5Z23265ojSQRKBa1vHM3ubVrvfvtqGuqwyRX6cBvAXr7qk86pBeEpgqVJYkAHZCvjdkcUSH6yvxJxbeUX5JVBAcm",
  "key4": "NFjRtuQAKGPxKjh7XfBH58CQ5oWPv4w8pAtSfHfsyYzACf51pRX1GcPiZfeZ5cnz3Pihm2NGCcUpLhFW5dLBW1c",
  "key5": "4rSapzftZKMx3eTCCX1sQ3W4Ly7Pke4MyD8GPcLXDyHsafxpGCw4GLCPt3B5WHGwqWFJdEFLDuDLm8Dy7vYqhB1a",
  "key6": "514wNecV1jjWT1Urx2hmmMJGZ2g5HpJCYZDFcsrWWjxV46LUJEdAZ5neCYrj4g74borWbzXgNPz6VCA1F74tk3pP",
  "key7": "f8TzqEsmPoMDZTT7AhDgYF8fHAisGXYxoMRLqhZJd68cKaFRai3yGBqEKRp22YKnu9hj4RDeU8YzzYQbefnhdKQ",
  "key8": "2Zg7DJqz6RLMDDVg2VpNNJaaumMiwEaNmypsKFEAsFLR999Vfcwazya1hshaavA3GJ8XJUBLxvgu4MY9UxRRd6iK",
  "key9": "2caDqDd9sGqw2WvjW1LQE8uZECdiDnmJzdActFCH8z4fzgUyg2D6nFt52LwdbG6x6BWxwjER35V8Han7UzBzT4cK",
  "key10": "4nQsPKnqH1PXDfUKLLj4qcPXNKDSGS6ikJhXihMeDyiUkX5LCSqAL4Xw5JCzah6p9ruAiuyvFZG234oKwmYZfnA6",
  "key11": "3XBm72KRDeM852a7dSQFFLdPRqdMpAc6Pamt4dfKyauCNc2T7iyNEujh7MGGVyUQJSbu4tCSaGbEGLnBAQ5kRnmt",
  "key12": "3rAvfNYnCFgQithfjYPwUZkPr5ab9pS6DJZZ7gGc1MYvqiqKzDbdsXMdEJghF43wCP1LcsA8Bv8ZbvZi9B9pZUMz",
  "key13": "5MEaKaTLeWSPb5UBMPpHWXRpsNVV3tNd5B8YSsJHAKCuuqx2Eam5yBFfsEV9emQ1CZxEzFGehtRvViyTMJBeEqnr",
  "key14": "5ay8PFcmeqTp2CojMp8KZsqsFYHkyMwUzjKsbmbWoBgUtt29NFVtGjbpdP8jrfDRPWyVBvHAbBi7rqZfYn2s9Eqk",
  "key15": "2VcewnivBRBYmXa9LgqMYqxCMWUvcjEZqGxtWnyogPzbFBFJGvGZLuHd6zAs1kLgfsdsYJMjGdW8QR3byKCWCicL",
  "key16": "4PKiNndLGpYt29SjKorVYmDiSEPU1fxrWVEDNexes5maa71JGbtoQZ21nHQEDm45HdMHvtYuBbSvqRWyuj28JtAP",
  "key17": "2UgL9TDbQGZ1k8XWhHSRyYMtqv19kzoSTPLZLHaq3F2RCAaNCX4B7CChbELrs3xzcGqs1Xv1QhjmmqiggU1zBtrW",
  "key18": "2FqsiA1hagpjqHRL5nKBnbDLWnBHRBi5kGBJ5ZMZmV86J2saSRJTKnJQdLctuZ7ATkMyyfGnoV5t5rx5GDVa3VYs",
  "key19": "3n97ZEwmgvp7Gax9xLAL2eoaocKtpGunseB3LEyUzD29cwwoQ7fS3BxFTWbyQgXbbbLx4N63pYS3F1resRVSmKw1",
  "key20": "2KyTBmpBHmW8TyEbGXQxfdyY9imodYSvVrwaViSxJRxujdGVDEAwGcFcAm7FZFSSTDrK7o4Y3hNbMhwZjPxQUhLY",
  "key21": "3g5UeHupigvhb4ymfY6knX4we5H4Cim2NA6HpYKM2QSXd3PtNe3rgKtRzgfsCfdSTWb8PfXXqVp2HSMQ94MqncND",
  "key22": "162tK9fiPzFnipVAQRTjFjcZ4EZqqQrLRPmLaNN1hj11uervMsjMgvYKWUhNDN9a7xtQ8Wx1xg7Kx89jfpbAfs3",
  "key23": "TqWNSFnY7jWX6PHzC7YQWFTgifxzRYtAUGfoM5T9GPwL7773zjt93XzJNZhvpu1VpfDf8JGNY25CTCukGe8XcK8",
  "key24": "3XW99kujdgfNd2n9d2aQN32ryAVo2cqYQCAYPDEBGPFiNd3eiMY6kPZNmvmWSfy7y3zYUVUnDfZP9se93sXK4rNg",
  "key25": "33g3ahSLR91kj2vX3h1bXJmusaeVXZFaSEEXxVwFCA7XkFe3qoU3yFkSrDQ1HhMuJuU4HGSdi99ErrFvXGTi2UA",
  "key26": "3xa9mM8LZz77AMBPpnuTWcuDmNQrxHcZK8buD3eX39cVAkesipZxNFZC48t1tGYgCGH4BA8y1RmuCqCBWJuMx4Zv",
  "key27": "3skkz5rPw1dbjWQtt4pRLzn9t8LGsbzUNMTHtMu5tE4Ua3vN88jBBMYYvQDxXGrNLDrsQBzUjAH8cd3BYjL3EwL4",
  "key28": "qwgmBsYrPhCMvakkuMLUBG1GKZoEaLLWG5efVxxA9tToVnsYEdLVXqaKvJ2e6t56BwTFiBu9eNp1uqm9Wo72sVe",
  "key29": "ZrUXytBmTw7kkEioy8X7Nw25Keeibmn9zxGNY2rWfCux6b2Ya1mUreN47X7DZVWAFnb25M8Qz59SEvoKZcUyBtN",
  "key30": "u2AfLtCvJpqfvBh4z5DvYUkd35uvsPpew2qdjJz1SavJxUyN9pNuufsPh7av8Hntt38q1qRQyzj5M1Q6uB2XBn6",
  "key31": "53qo9JQd7k7RCjMFwA9V85GZ9H9ax1Qbza3QAdYC6ZSB4DRd1QAq8Rd9BMiFKD9vahXkfruMqpy21f3psx1YTSVe",
  "key32": "35Jhru3gGfhNUGWm5qBNrHakVSqcHE9TaytS38iK3bqJYQRUNwzVpM3eF4LEwL6d93fv5mrajDrz9DAhkuGJyj16",
  "key33": "MV19qgeKHgVp8LPSAHZ7vqJAbwKn5hFiHfCuN4D8Ww8i6NkmonfA1oC3qM8cpmwrMqWfjCCHnTm5cXY5h9xZGVV",
  "key34": "5mDEgnvmp3XKzTetX3yoosxX4c9cMV6TFRpnahT53zZxBwaD4kpFaC4KJjJMZLU7Tf9g1ytgrEhssUJiHCiigHfN",
  "key35": "3KiAEz4roFHDjhq1Nq4TMbSB6CtiQWHSA12kdp8rX9FB8Ui9cuHwujVnuDkSTxFSwqrDdLWL2Vxeqyd7sJL7fJoo",
  "key36": "59nRkFWZrkWsYD5AexHhiV7Ng2Dw1CPeFKEFgkD9gY3kjk3JW2DXtyq5RQK8zLmHzGZWe6np7uXde8cuvMK41DEn",
  "key37": "3qRYssk2RKZ5ERa8K19LG3Q4MomVKyd8uLPUxYfjhA8MLFgVvk9ocbQUHv7YMk9gajt8BBhK4nrPUvNJmGoDRMJZ",
  "key38": "2c6KJXZKij3sXHpa1Er66riiAfgAEKB8cLvPj5o6NpCmogvsHviVjdYWbGLWFPM492kjZsDJpADe9bP3yFstKqz4",
  "key39": "5ZDuncbyBgkuDHBGDBqRve227K5bBMMQB4HssKNkDTVgUtwxY6HFRnQbg1LfrzjVhiZDhv3iT5gaRUXZ35ySgxGB",
  "key40": "61ZXL8N1XCT8gRriHBSpBvuAn62d3Lcpsdz2TfHgwEQT1xWCH7sURA9vPPopSJADsTawJ8VRqink57PTf16cPcXW",
  "key41": "4Wr1ASTTuuRH3S9dU67bN6WDuvMaVjKicTnhqjofaUtFda8GMspLuCAHRTGqYQ99WZSrmSYquoBzdcz9x9gqNjBn",
  "key42": "4YVyB8eU8jKXA6Hny3XwB5gDMpNZwa3J6mXuMfGKxa3TJKDHjZDGM52TeePNm3ynrewSQQFTjRLXrrg8i4A8rvh1",
  "key43": "4iy7gN3iW5BpWgGCHjBvQ7MQ2CV18soQsMnHLhWo2D94rXvmauzBMo3rUEEe8XN6M2LW5p1qaroXV2BCWiomXLdZ",
  "key44": "5r37CP3PsoRRVRJULTBuC4m93vDt2LWjvxTqS5FrfuLqZwHgx2vYhBvzuUqETLXkrMSZ52gXaycovLEW7rH6j7X2",
  "key45": "3CK7Wb7F3QfsnWVfdErDu38wC5nuHboye6a6VhasD9rt7MwbAfDBLa4ZfBwj5RfgEXvC4x2eq5fN1LwxD8ebg4ap",
  "key46": "2VriRTQGhXNjZQpnqjUMhrz4cuk4sNgBrHX9oK6JZNaWqK6hZNeyiNNn7kiz4ga3fv6esj9S8p8xV2co1eJZWRQh"
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
