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
    "2dGhNVp8ZgKPDFH1vfs4pGNR2f39F6LUrNiaz9iDE1zqT9LZA3g9h8P7C33iYMdCpm8hCRNYfJkZXbPAcEZo6q9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RmWPz9PUW8Q4z5TCpgJ4CVTWHthQ9R2CF69pF5ZdpBwraknKGfX5aKSjWC7K6dVSJhYi56Uds8LgKD8Gn1H9ST2",
  "key1": "3dZD8dkzeUdBq5932Y5G4bJBJs6AwqdqcGqsTqKdJofXnUXKRLm6UjTY4YydPUJKZg1EK4ysLvDzT2opN85xWbAP",
  "key2": "2MtPpJE1brQfui3g7dSYmqbTkEWPmVrwU6bGhSZPwMp46GJV4To5mKCzbSQAHbnEC619XqAop8rXwTrMBMsy8yVD",
  "key3": "5bq2hmv2BfTWzxiwPEbQGVj9c6q55PYvF2jX9Fpps5xRLr2xWmh2nNv3XFuSJC1jStLzXjBBmLB1wGXNn7Uu6349",
  "key4": "3XaBbyG9WzvgJBPtmaBUx3XkX9N949rVmcKaD37aos9YucSY6deM35TKuWFT4dhxkeiv1e1DHYi3jDzLbMn8SBGH",
  "key5": "3TqJtAZYza5LT4y1rn2gykET6cBSgKQE3bVUnMwWN8S2oY1rqbJNxbzwp1Kgon7YVSckqtEoUTm5jXnjA4p8Xj4r",
  "key6": "4XoRa7q8WdtYyyBYmba1GUEDHgLKL77u6xeHTtkn9HeHFrAjsshpqvz2dDTXJ7pdkffL7jXuY4ajgMCXYgyPxeaZ",
  "key7": "5MSGYPdoVQNiECnBZwGHWDTpNa24sWEf7tg9E76wz9Qxbt7Aecji3m9JFGDGCoB4ci9Hj6rUV6ekoabscWEcwBwu",
  "key8": "2AAe8Xmbtm3hZFxZt6YfyUZE7WkoaMcCNKACDoh84wFX1c8mya51Zck7HrVVbJjgjBdPapdWXro4dsFPy4PKxqTP",
  "key9": "63fGkdQ1JJTEY4uMg4xgvZTW7f5uP66Nv2idnRtH1dF6FQgCXNZ4HSxusMR5f2j1NUL68dCSNGcMQsh7nfG54YEE",
  "key10": "bxdxtvB6hmjTPTKhLntSZ75qgRCi85xfKLErskfA2touJXnm4PHTPVMWRYVRJ4J9zRMGHK23SJeDjjDP71uknDT",
  "key11": "HpqQtjLRKaD6oxNxmuoXcZXpmrGdK6vSx5XKcr7XWvpNq3skGPmzWEysVHBKfncD4S1LN5ZinresRD2D3zWcZpC",
  "key12": "5HvPq2dgX4SRVy4a6oX3J2scDVVYBApxLjyQjtcRCvracbGnLm7yV4mY2ezTKvSKnynFNXcNkLAYiwe28pjJaGH6",
  "key13": "5YN5ey9C576X5gAezaac4hUGgj12uZVuDVfuevvnS9FcTXUbCiWdfateK2uXfzDrGjCHQpppvuQmirCFuyasqesr",
  "key14": "5SmPXDzm4ZYEBS77HHUjtZoaYY7MgS3X72fs2vU6B9TtbYayh5sPmQaDG4iznxadJHBK71mQxKt6F6hJkHmrrSnt",
  "key15": "4ekj1sfo4oyBm1apWopDoURpExNNdjhcPB2DAi1LeK6m1jPNtVb8kdZhzkCTrHwjFYPGg9599yetHFMX3pJJ5ZeT",
  "key16": "jyK76iDQtkWaaEx4MNugkLY5DX9Df4NUefZUtQfYLppAY7DUdbdXsbbzM8yYTq89JJtyJZsq6zczbffaQKLjjc7",
  "key17": "4oTmDf9BNvA1eQ2wQ5F5jCp5ngSASFMV24mTiRMe7xP4q2eK7YepfTwKxTc9qyp2DfjYk26GsERC2j9s37GAEytM",
  "key18": "5a85eCZhbkCiSs5Q38hcuAWVEzU9g3Anr4VwadNnYKZ9BNSddU8Vk4id1ZUBEoG6U645hed53mGHu6URQUbbesLS",
  "key19": "2zqQFtTnV7vJKqTCLEjAijHtbbfLujbEixwGSsFtDnoht6MV8cjW1xMrJd7WNst9gC62fNeZ8iwpHdxQMMXjNM9P",
  "key20": "5ijGSHJ8DtqPw2jHQxr8Gy9giH3fhM5XiXD3j6tkUkvW8DtDMVV9GQnffyhQRX2S9vHsyLA7y7o5iEDc6oMPk5cx",
  "key21": "2PaF6QqpuYHxVjdK42oKA2JXPR13aUzHv2R5JZYxpPhDRFDAqf1kGqx4MzywKqGTpQ9MgMvgLtzoHnh1fDjGT4Qr",
  "key22": "2qutggSmG1TeDA9NEQYV9hM9n3ZCrGwEkXgepFz9nkUuRXeYH4dxHpgq2HPsMN7DhsEVYZwh5XU9WZt5MjUhLvL",
  "key23": "9HHErSZNZgxg47gXKjEbHwZzz2YJUSM12zEtS3WnY199wKTrG5fjXvTa9jdKnBRmQC8dWcS4biGXZk3RrHM7aHC",
  "key24": "uueVJPU3bFaK7VX6LJyMA8rAuW7nBLEwx2PEg3ui9NtyKF6UnF5M5Zaa86guASAJPcWFxzetzmS21J5cZmbvM7X",
  "key25": "23X7GbGF7hKzTJfowGxKNpQbAfW2h83sLn37xGLkMhLakEGysEZ4LmoohEm4bH1R7pfWMkb33RoehoGWG5zFqziw",
  "key26": "4NzzkjAxk1cdV8xbgg3wPNRZtd7yer4tNHKCQgPN1DhwoQ5NfmdJq3npR8Nmzikgf5dQ2niPiUGSFVHme6FT3LD5",
  "key27": "4FNcbpw7gAR9prkfARfLMgdqc1Vx2hyHPHuR7RWVvzv68hYj1oDqgxXNwoMXzGBuQsbmgZM1cq66kDYSpPRM9sYo",
  "key28": "4kZREQcuHt8S7u3HWSm6mWB1AKG5rRg8FMWmDrXa6zzqXATwiKiQcXxZzE3Riu5HtzWUsjYyAKwD4Gj1GZYjv7RZ",
  "key29": "57ezksH5hoBUaLu2sNVNSEJG8vtYppNjCvCbFwnAPLwnktu4sE4Mkq7r33RZV3jGmJ4zXVNCSpN8vjvZDtd45NP",
  "key30": "4JQNezHsGgVGpBnuaMMFfT4znkHN1A2EuwLvq274x9Zn3LH8tJ5Gc6n4fGxrGPmvoYHdcGKWcEJwC1cLHJJn2QhY",
  "key31": "4Gw5p6RyAarQLWW36HnaAZkUfUHQmCfaDKsVdjViv4ThCCKuJDm5yAUyLgSPSSFcvx33bpMWV89QRNRmjwLCm9S",
  "key32": "5Z1116PLct3KheBsXtW5z2S6PbFvAyj165UqEME5nWWcmPdfxjKDAVSXg96KohZJb54vVAvr8T7BxeYy75JY1VVE",
  "key33": "2ZCnaB5JKood7kahDg9i9xcAX62Wmj4gTqeLz5mXjKbGy7KSAzjoBYnT95TTQnFpqnS1sr3KH3kS2yNjTS9xxG7e",
  "key34": "wLpfcHeM5pELxSdmxgM5k2CT8dSmZCyTJZbd3gDRaPAZviz79hKvBY7SD8eXkbCXNxTcmYFYLRXiL54Pi7wUmuP",
  "key35": "37N6AgVbj7h64mVkcDQBanJzBr7v12VTjVkboS22vs1HYVwVm38NzcBv9BywNi3yTAENQ85peCXDbk5tYfBrP5uc",
  "key36": "5ewuofs2jkn3SDE5uYjshkRvV36XP5asEgEfDAD72SqvwCTAsM3eapVEvPmyuXoTXDL1PhoY5rncSJK1SLQxcgLe",
  "key37": "5uXEHJ6b7QetxnUca6qS9sYZxbWsHEntWvi1gA4HK7Xs7U3Sjb7btoNT5C1gGwT3wo8RUV6emRyXyg4VfNrVRx2R",
  "key38": "3hJXtHMU5qAdb8bp12gEKE1ActmmMPRu3PnUEEHXMi7NAWkwrQ2vCQXE2oXqMrXxofNUUJU6fNFsv8CFd1KsR6u",
  "key39": "4hjBdGcdAspf4Y9B7xkjaXg6SJJsRrLMB2A4FmxLNMf1m8Xt8U9xGBXvgCUTSAp5mCTxk77WsPWdaE2hHDjtBWmt",
  "key40": "2eMh68NAcdmwYkozjnur5WyWM3kAfmaxuoo4bdbKwZV8paC6MCSSuXwpuN2ugrgQAa2Hgsu3CCxQxgN2sxjkkvCq",
  "key41": "4Tkan2nEJTfs5YGXN4RM9rdQ7Dhp3Lr48Avuefa62i5SeQK5BpWgfycxrPac9LTfvcEyu7UaaXcrkZ4aNmGsTbJT",
  "key42": "3qtpAPPqKHbdzZYPevz15ERovJkE9d9ajcXLhZrcNKRZ7QAYsuQF1K5D9gV8N7pdREFQ61neEnxHWjb2UNRCBFgG",
  "key43": "nSuqbmsHNoLDu6y4chnSvcRm9kAFYNisFQkTAmFqthaD2DLamxXLLQUZXTi2ejFb8CKkUN7FkT5JTD6J8YmCUYy",
  "key44": "5MjQ5QeLmy5SbuuSo2FUF6xcGTEmxhnvcvbBUU1yoKXVtpDgqoSTXD7N1Ab1d2q4kDsckKw2mwp4HAnTKzLtgZNn",
  "key45": "USR3C475fnTPQv4eqchnZmMqo6BH247pbVGQv15SWRw5uvX1pLh4FqfoBKbnBDmoQVJdYLuRs8hd78sYR6k4uFm",
  "key46": "2UjEMogTWzXXEMskYCFSDp9AH1Exo7TyBMWvFid1iwHptzB9T4ooUT5QfmMSd85sXUnNFDw8j8dsfaVPiAdKYuJx",
  "key47": "5u5iSCwDwXtqMQaRLTY76m5rqWnG59uqEzt5QHMAep3FCfbRhF3gRZ3sofbjTniZe8b7krdrbPUfPhA9KhKGSmZF",
  "key48": "5mqQzurFn6hmJuy1fYPkpqVG7AzwAattNkNCGaU8XS3o7AYwW9xBYi8nTq72aC3DZt57e47SstBrfxYLWdcZdGjv"
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
