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
    "34AyBEUi2DdyajRxb3E9TJPLUznpcST9EEhG8nUHZT9LJZxrU3MK5bjUr3v1QJR4RfyL4DqaE5cW1i8buUZCnk19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26krKaGvP2FkPMtBNvkDt9QdmdAzSjPc6gdYGxBwnWvWG2uj6KbN2rgoqnRPPqGXiosMHeoUpf1XbVCsKfMcBibv",
  "key1": "5qd86i9fq3YcTXWeJ6r3PZsQgWmxGbUxjhrjo4Wf7QpSFNHBNjDadbmhkhJdg24fVgnw1J7cqbK3LaP5MYGGe5hD",
  "key2": "2BrR4am9jSbjEuJwWCUhmByFKHdrneFF6zXTsM4jQdKcaCnKSBX3HKVWxvq4fA5WEE7oFKNhsxkRzdaSt6T4iugv",
  "key3": "2itLjcRAPPFs5NbUC8Z95WusmE4WeMtYyg2b4WYTjfuW2kAM1YiwkYFst49QYnnFc4BdgUGFKShBmXeU5xaZvvFH",
  "key4": "3Xs25djT4xCwKomiKSqAMbrSumegQQM569awMeisEMriwEgSUhAQxfzZrqpibDYt3TQwVuPfcY2KYLdCupQNgo4Q",
  "key5": "5gW1dGsgHeQebVLQgxiGgF4LWmzViwFaJquimViVWvBoYMccF6EQq1i1k9KQeWAhoEuDwhURE18wEAyzVPGcsvQ4",
  "key6": "3FehgpXr99kAzUzHvRCZaBGduE6bzFtNGjPipp5dwDXda5YGWwkoesGVDgHHspjWoU6ojUYcUiGjZNL8XkwtLzeo",
  "key7": "26okueXKAqqBaEUWtGVwqBg7e2jXsfgoRRxpi63pPAAZACMTaELP91CWtyzLJqYZYDdTDQcN4EbHFDnGwL7obF9K",
  "key8": "2ZRJhZ2qCUPGU7VTutKU29B8Pm2hXazxo7qawqxpxi1z2tvD5n8HuMcWAk6hR7fnZzymuqN6qAAXSrwRZ2wrC3kG",
  "key9": "GyukpQyMqLE8DxZo7fns8LJB5QdZpFtpuUmPT74McynRozseavwknb8D5ki6x28SR4VjUtvssrQZKUi1THKcxUS",
  "key10": "3cjH4Xt6oqWbTPLhFm7fQe3jWp2u5oZ5UXLQXbcPCus9z2hPvaXoH2bFf3Vmu3KvL6P8Bd9qwvc4veGGTg6qp9gN",
  "key11": "AuhnN8AyKKnA9BBLGuR6P64GCzdtpdjLRShqGLmPNjWTMXwo32Ds7nWPvjxtr61wUmCy4YAsVBgNC7eXTsohowx",
  "key12": "4TJx8PQFSwL4TGNhzDxxjrJKq3Bgvte1YJ4tmYcQ4q4vARoNVfvBE7aN4T5zWdMaBMUQCda3UbFJCgdY2BKJr5yo",
  "key13": "4JqwDg351rSc8L29AQ3CwGU1hWRBoa6LP5NNnpu3X9m2TCrwKL4t1iaT7xhz3Q5be2oKruUfyCUDkXxsFst1Xmri",
  "key14": "6DYPXUSeFAUyxVGf7Nx8CJvrmZkYc99pG2h5g6TqSFbsWAMjAuxTT9do9QFAAxv7urepDNaD6QNU6iqR17WrDrt",
  "key15": "PDdKFiVJSf4iQRfSEMzhKXcsvnhTriVi8Uiq3rUpH9UoLM2yb1NP7nx75Ts9ysVudUyCU1j8Wm1ivjo9v8Gt1E7",
  "key16": "3okp41pn3QvCiSdKyuseUqVACYKKTbjJjAvpkVeJMcckPiZewqe6Sq3w8ho1ANydy4spQV1TM8UeuvDJBQQevrJW",
  "key17": "ubsd76LZ1TA7eQuZEgqiwWvbaJqEHoCRN1e8Y6nEPWirBSF51GLYGN9mb4dDUKvbNeSAhZSuuNNUa8QMpxwhEGs",
  "key18": "iiCZ7nCtwymWXjFYAuBzYQ4hYygPp9TKvjgTy6987rLbZEzm51i38YYPwrSPmEQA1iG2iSCcdNFQPjPtZay3Rtj",
  "key19": "53TPEBrvBoRkq6NRQxB7TDvyh7KSm6XeSdf6GT32XGQV8KuXtPqTvwNZQ85wbE2hkU7rTwVnmamwQCWZZ6qSUVvQ",
  "key20": "5QfPRKuF9tTzzXyAooC1rh51mYQs3srUjZAqDnR3V3Gr3s3UXi5xjtpyBCBUipajaSqyfmUTWDkwVds93CuGYxLy",
  "key21": "vXEc8FgR8uLFdE3yFQK5x39EYBxbdXrnNFZ6VapZaQnA6rZpS2DG7QtcdhsiWHTXi5oqBJkWRoyDPC5G2wsrFfq",
  "key22": "4SQi7wRhrVZs2ti19Z55TJNARbD22as1ieRRBXqAuTrTPS5NzjqQScKwAZPLxgZiWjxRJduZbWTyxenpUstsfXbc",
  "key23": "3XkY52RZ4HKwZe9SDAKj5J4iPBFxb4ZWfnRqi4dUHQkUwdM5Uh5j4UCjdQcZpQy32wPNsTYtF5N1byDWJiacV97Y",
  "key24": "3WDJPc3x38X1re4HtWj6NLUAxnVLkB8Vsc3vKMCuWmj3eGMSDyuKtRBbzy9mpsFvyHQpvxWvYG2H9zbyp5UViYQF",
  "key25": "4iwU7aer9ynoFcuTEXFfwzMECkuu2FVQXct6YKA7kp4XZVKgw2MuExBTPpxktc16npeyHgBTaperFSsUqnSXnEhJ",
  "key26": "bB74M5kntfKraUhfsngoLFySrr8s7Dr4HbLKkyFzeDoejkzw4wBRNMuJJE3emoGv6gWuoHPzGEbQ9HzWkXS3YqC",
  "key27": "2BSNoTe4278KVXdDYsNSWvAHzZufUtUBzSdRyhYx8rDkkCcLmdQ5AnmHgVbZoeaCW66Vd7Qi7q4TYmkUhh3UBUvp",
  "key28": "3YV4WjmaNLy8c29daa6RCnQRgtTfLzrxETsHJS7oLpHz6xbFxZdtautYd3yEUDiZcTu1EBgn7zqq2cNbD1JiwTvb",
  "key29": "4NensujKxEHWB1DC4hbQnYC87PS7Yiy3nitGHiHybjnjg8DpyThghPeZmBDjBa7gvySvnSHjvapmMPv24DYwMYay",
  "key30": "4S9XV4MS8pFMP2ujjCn7YUp28cRo8jAA44kCWrpqNze7zJv9aonJuFKnP6BTNDVvAAwrth4vknX31oMeCWyRZXnt",
  "key31": "3VPzZ6u4NayZUBebSHyRPuveKfVfRKuYEsqHUEs1kbHTnPn2WWKCkuxjWWcsakH1VApW4EhwZJhSbF3UD4XJqfeZ",
  "key32": "5BWNaVw6kzfio44yofuk6iQ97987X7v66PrRtifqiGu23GEC3dKAjQ6ZaisPpciGDZdjFFNLkrtFy2WZSQAShp3M",
  "key33": "XrnaA6AURkVAicggoKdNTogapbx5CG5kkhced1uWuJuQ53QZn2YBhTnW9PWW16AUUeWirs5hYePRK5FjsLC38ty",
  "key34": "49oipFnCWm6XrjBCmXZdZWZevoyiEc3WhdK5yWQxhbKhDp5Wk1qdUWTE35kyYs1W9yia8cRL3J9yaXYbBxUtBYDX",
  "key35": "37k6bPCBWuxhBDHmjzgqxF6sbFm6iBU39fQUzQmN3CwkcSKpZgnGZDuXHa6BzuhSbe4erkw1EDZgT18XTSD2Ri5Z",
  "key36": "WPsGcrLzjGftRJ2fyuv6bQNDLJerdL5VqKtYTsrYjtUwcoBCacp4xeWZCc68NuFVA311FM4jgQYGz2QYSbCYd8Y",
  "key37": "ZPEL8buMDmGWqF7tbQFhoKu2d7zuKcpbA7uUZ91XAET8mHYqSTABR8sTFeLKcY95m8h7ruFLVj9DSGjEi9RSCbt",
  "key38": "5ZbNWYkxFNBxWCtUF1X9js9o19ZPtyczrUan5kzr1eSgBfE7B6K1fvMz3GYfmn9fagiyhAFK4NdLAXmnAqhMU6Ar",
  "key39": "4dBtUkBeGyzR6Pt7zrPwdJbBXdxoJUUuK9eTDGgs8B3Gin5oonKRxcbitYtzyeXVMj1vQnLHdztCBrsVNE7YXFDo",
  "key40": "5NVofdt1yCboyAudremkLkoEFD7hmNEVsp5UW1LMy6fD8HAbaiNKd6K1ae7DEArp7EUBdnLAkTuPxRsfdnacyg6c",
  "key41": "3ZWVmpEspWH58cwA4ViuvzqoCW18LPHJeUKGVoTcpfeMXxAnLdHaKcKerVfeBzq9ig2n5kTcXyfgtoUqmXvGY4Ms",
  "key42": "41SXRwbZcD7UoVihLr1YCv4nHTJxVQQaYQscRe1BpFArTvBA5x8CkRVut4b9MDGv3GVALyWnwBpCyzXtU73y8fkh",
  "key43": "5Xu2p71X6dCHW9tpC5T2eF6ugAu5CTYd24W2ThgxcSkRMMtQymZ3uTDTdDKr2C4Y42s21UZL72tc9dS52LNJUoqY",
  "key44": "4cqQTgHF4oBiZukQ3YcRqTJ2UCAvf8EcZYurbvH3zTFGz3xKSfaXvWr1cAkzfeN3YpcYAgUuCLGQR1TN8WmZa5iP",
  "key45": "4AWZVB9ypnFguAY5rrTVNJ9UY6mEMKBdmAYk7eTMtujJZF2JZ1RpgfqnmA5xeT6XY8roLhshxqoGWfqjn77JEahr",
  "key46": "m4TLCDMU8AxLAYc34MhnctoLf5PqqEf6uTN3W6FD8EUgrCfRNQefd9t6qoiCuiuRP5CvgkfCfJF5nCo8Vycqqwz",
  "key47": "5Ti1butdvfdhJDoJaYu1RUobKgPMqGVymbRNtHo7WjLwPg7yK1sNZLu4wnvFPM67F3xsaqEZcgoUbVDKfQvzw8iu",
  "key48": "2LEJ5Poym1H64U1LMRmR8UkcbyveGassgNCSrHKxZrXF18vRrwiMrBH3yTY3tWpi1i6XdZnBqQTfacxDNQsmJqX9"
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
