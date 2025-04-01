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
    "28hfZZZGLKwyneBUbnye2WgU7oqrhk5xyTHXY6dULAFWikrmbYsqmrLWFM9LvKdL65n33btDgwdKAJsbXcQSg8Wp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K3udJ9RB5KNgVLhT4JyJDRmfvb96rN2akVZM6aj4GSMMHQJCQvN76FKP7PognhFN7P6kKLopu2kMFxHPnA74oA5",
  "key1": "3PrrG6j6r159m3vr9qT6CQPY89TzpZbRFkbWrVU6o3u4GdDxKwum6c7fUcZSxNffDpZsFgQryWVbC9mrqGR7uk1i",
  "key2": "oDJuxHYAb483pWBfDav77NgMAnA7FPrhnotjtrtb8dG8zATRAdAAaiCM23ic16XMjhDetFc1Wir95zpoPRoN4XE",
  "key3": "n8jTHTX17arNRe1nDtzhGaibaj6Ayqi33TPN8YtGRczyC8HJFzJ8Sx9YMw7hcUtxtG2X8of8n4tKGzsZX81FhkM",
  "key4": "5EDgoYyJYAJ3dcKCjGt5TXXvTSbYcSYwT6ZMGys5rqewMz8sJ3LUbtNt3MQ7yPf9mUBDvHE42NvDEba24L76ZRqC",
  "key5": "35v4XAqsqqjJRsELiFgujEDPGpW7EiVc3nCQ8nE6b6rBhhDNzRruJ2Mf5v9QZqsuGBaDAVeUNyoS3d4BpwomYzr1",
  "key6": "YUR9Rmy6ybCm1iAwCe23iuddSVnKeXAo5ZuxmVwbiSTdc5zGa6hGK1JveejnmCzzNZyFjxDpyByNGY2zv6vfr5v",
  "key7": "2AsroA2FyAPi6sS2Xgb3XsySz3NtqWhQM7uvStJnTEXjXKtfALVYJrpSzicpHCpZpvnFZ2TpQdBPP4GmAgmQGqdk",
  "key8": "2FXmMse6KB4qQ4N4QC8ZfYamE4nDpHwN45ua7Gi1SCZ9LByk2aTPrkhsN1vudREE1fEvUTFdGdsAR7NwyHn7J2mz",
  "key9": "3qzm9HYa9fi3RRPqCug7Es6FwLPbAumWnsG7Q9WvCocHXxfDAqJ8EMp4AP5QbNtEjkGvRmvDHBzjeKDVYviZAupe",
  "key10": "4UtyWBPogm5SfNh9PojPhB9Y4NtpfmyKux1vQdiLdzDPD2xM3DfJhPJT7YsYAY4meejEX9gt39VA96fb1UWYekux",
  "key11": "2sX5iRus9wyFUCm2BDPvcLxF3S7k9jRpSmqCQmS9qbt97HGciqqRobb9By3pM5jo4NrzVDQSFL3xQDTENXgnG9vt",
  "key12": "3Az3qHkJcSyY9awPf1nA3VyNVSbSE44XCHzAbu4FrbxttvS9NBe6fqAGN8est5esLYTE6AtfeuWPPcYKKpLTTcNX",
  "key13": "42iGBYg45dhiivVypgu4H7ahC7ZMV5iSMEJrS6ZKmhMz1aUev6Vy219qhv85b789pwNcVzmCc8kL7Ro7k2cgFxnm",
  "key14": "5TLQjuZNbmtkYrZUaYwBnGzuX1mQ2zt1NapQ5avoiLSKrEdCMjgPbddDbcEGrPbDDK6SnfRzK51fLNe6BiiZtVsv",
  "key15": "3j7DGVQDTQaXcmE8npiKm4cX9pU3fFedFbA5anS2SVyhUDTvyXJKufRpbgEUJWH5VoqLtm8deX1uVrhwaruWB3Jm",
  "key16": "ZLEsgR7NiaRCrGH8S9Ej2iMVQc3iqkfo6QcoS3XNFg5wmR9k1HNKREok77xAi7Fb8Z8GXp6vJqWc5zp23Jz8QYj",
  "key17": "39cQrzJDtN3NQZYDZBQ6gAyEgy4fo1nVzqnBgBDYY6RXfEQcKcCqjSSU1a17rf1cHecSQWWQztLcYm97bqEyWCeG",
  "key18": "5wpnu5YoCrMKw4NeuBN6aEh9CWWWXhf27dNawadFgX9n8kZPUMjG1cwAxowoabSYiwtb1PMEfB9Ldx7EA17h7FwM",
  "key19": "UJzKEVc7DKhonLKvUefw7Safp7B6pB5FUQy4JP3Kbqumex57D9SHeymBeAR6gZwXpysqYTBoaDtNy5npUkUrBFv",
  "key20": "TQZPJzbFSzvnxubd5TcfmcAQ31UGVCCZT2hCJG3P12fqAYprkWtaeNBoSBNb898wP4ECrRDF2FhGQ5vx4Cu5oBT",
  "key21": "2RcmQD1Mi11YihmStHAcnNgjHzsgvDW6aYKE2Znxx4g1nxrV4H5G7A5zPv4SqUiLD3dqTfEwBb3qctnaq91T5T9G",
  "key22": "5eu6LJfEkDip3h56Jcx7SYnnkk68DQ8gDqnMsg5WsJWGmVxsEq96FmWNQqqW1YrPM16wxanNgCwV5UMGSPe3J17V",
  "key23": "5NDdMfdoarA5meRrn4M3wRkdxzZys7txdGFZRWpgiWKewEbRBrRurKwRVwecbMq4tbDBPmsxBWkg6xiBu4uwZWyd",
  "key24": "53P8DhbkCTwsUkYyHjKETP6aepkFEerCbKA6qne5a5vbuHeJBq9eJQHt3Kw5meZ4dMgATFJbyAnHinwQESeRQA7m",
  "key25": "rPNcPJBMAjAWASoaH8E1PHYBtBVq38E3yGHcwnVg3cHkXDZ85jyDTdy9TofNfXu8KxdKDqtQXLxeD85KqYtfjfv",
  "key26": "2WK73SyhXmM6YsN2VChLAWCtEJX1Q5Qrx1SMqoJMViQgB74XeyobmZbYGx7cEUAixcoejQmviKp1CCBDwRJVwHyt",
  "key27": "5dMZAKynU3VTBAEFE3vF1pJeb5eDSHQLcsVs4MX2xjr223JVS7RZxKLqryhdsJrbKZKico6LxWFqh7sMsVnPrZu1",
  "key28": "31SoArFWHvNDZJDRWUXTt9sMgpf4kGHgfcj4LG7JzLMhf947xcRedYNxCizqmJPcAwUJLY1QM91RB3EkB3Y3E2Y",
  "key29": "8VT7EwntWkAbZURTPTvem1Gdt3zPW9VJLV1HnwpD7wPq56XBuSAjtEBhXaDKwdunZ4jLW8Lw2JpZdTs41ehYKcM",
  "key30": "2EjedUKq5vpNGE9Sd5MHCCbVNy3DTVM53R36TvnYqHaRzAcNg85Siraqrx4q8MQqKt1U5kn9uo3ABCKyq4zJMgLm",
  "key31": "J3hV2W6ULWBaPKtJQML9WWw6QWxPwanTaWFt5En5DoNnzAqbYrf7bSPJLFdxydYKPjxVpNTcGNxJkgxLnA2HWUp",
  "key32": "2bKD2xgcHhEkR5bspfwZSWY9dL5ovuRN8BJ1Q5K6xZXFaDXyRxufKtiaHCkyip9vMRQxTTpnaHyC2wsqHwevistK",
  "key33": "3o8Gu173Rm7joMe8KuS8s3xt1DNNtXCiGNfPz5TQQuYyobQx78dskPH8UrZamTUwSN7vLZrxXVdKMKWbXCLtKnpA",
  "key34": "43fvrBGFHC4RFr3NChZFt8P8p8P3worztM2oQnHcai6EHKho7UNeVo4m7aCzQJsLiVxqqMGqXaAcXhBL1JkwHQEy",
  "key35": "J1gkJ7Jar3iRBa2NAqS5yFzf1pAUJvqFZdiXJp34S2LCZdfYXLPLLa4sRWfXMDfPJFRsavbD5VZnSmsqc2uEDza",
  "key36": "ovLTeD9TREwNQ5J8V3uEMjPHnCdDsB79p35aQRgqLkGCiiJKFREVCYdSZbVoJvRTgwPYRB1yAKd1ZP1Z7z89b9t",
  "key37": "5p3quC8T4hu9hhtxBu3W6YuZwgizdDH3AtTfQHRC1pt5on9yQcznVpZNv14QUN3davQpeAfa4n7bY6sXnJ5KC72P",
  "key38": "2iq3KJ51vGbgx2S6M7GxWJJnfoxj5m7KZLSDT2dz3CAbDVunQoeTRYGg8D41z5Ass5UTtVSKHCSMvgLVdTsLZE5z",
  "key39": "4XRSHQ4KLhCmYLwFPTsxF5YKUzNTHfJzhSLkwUdmxZKNgHYgGYnG6JDxUPqo8Qe7h64cQcepWTjF1KifmPg6CHWc",
  "key40": "25k6cH3qg2ATxsLCs87oCJt6iN4xQ63FCTbZenceqtcLwhhZJf7S6sRAwTRtky8YX6RY6wMAX96XFazE9Aq8eJA4"
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
