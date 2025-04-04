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
    "3r3gh5xRernD6qwwKV9SjCYYQYC6JJKAG6CA4rFB9JRiinGf7xD3B4Bin8GwFMCamPAYinaEcdSzWDtTUN7gURaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z9jhYMv5ZkdiU7b6coeKAPEoVwjHX2bkwLvDPM4db7sihBXG7DsS5iShGcRqmRCX8UafqJuYKhqFRE8okUzbx7p",
  "key1": "5dVGamoqBtnZD346qhax5saWssEbcUcK3n4YWyhgFoxGrH2DiqLAD56G6F75AE2pVpWdwUhLNqtQVGAiiAa3FUq9",
  "key2": "44HzwFb89xEPwNm2pn6Z9FXZaSDKhViTozrT9daUYuknMZtXPtorAHWe9VqMrH9bKXo48eXXT8MKaqSGMHrUtFVM",
  "key3": "4umwnic7GupN98SDKy4VnmnfVUEX6Eaah5c23TUwLEu2NbxZS6Ca9JTuxSfP8WNg1TFCAnyeLfFjJ5rsyZUFgh1k",
  "key4": "63ovvrQDZBg9gxMaxsdUCJJKkpfVfFYxJxUU4sDAyytJ4zbHkEfTGHWDj7sm1B6z3QZ9QG1dmpWsyTL1HWTsSAMR",
  "key5": "4csFti1Yuw8miFyBKwaoeUy3TeYjTmtQXSFbHsBRc6bbH5f4wvPc8KCDZyJ9XBdME7ax5tFT8zXyExJC8NQV8pow",
  "key6": "3emredym1QoxYzTQ7N7Rw1A3U2a5mTgz7NCtmjG5fSzMzjW4hsTWWdpU26AVjNbdTyYoVqVepVD2Sbk45hUYNAuG",
  "key7": "5QMjZJADoozXEDX2zeS9zqBygXjRjEckehvx3i3nZ6AJn4i6yPmfLUp3wSYEaN1DiydXSoVYQqrv9WdQn8bpS7z",
  "key8": "2uVR59aZ42fUSiCVBUt8oPw7HRMDtbz3RXunDhiiNybxojG1bhzkQ4H8j2Q8u6tgkEfh7v76Qmv6nuCjrkMNNYJ2",
  "key9": "2w9CB9NMGbm6Th534jBY9C6CrF4yoHiwAzUuunezw9tL9B1k7eSGrtHDtFHGUUstBMfMuToSwVE2w2VtzS2Kz5WD",
  "key10": "2X3qDi5bnyeekB3mMUSc8cSyHnXL3nMP19dfHtf8DzwWyERs2pC9ckYkFGDnbHdwxXrjGtbagw4o8yatQUJC8Nsj",
  "key11": "WosUshSjtFqv2HKmAmN4E2sCuy3qXUFU7GFvxoRwTM9WdmVdB6e4fXAoV1dDxbj4qkKmb3s1mi5va6E1bSaKNMv",
  "key12": "CY6QpPj576YmWph92MPA1xzJ1kED9nPJdfbEz4ZsDv5FWxfeouhprPoWJ2UDnEG7SWCktCBtqkjKS1DTDwcwNA2",
  "key13": "21oaqv8koLVvYuiRMP9zBLCpzYPJZU8gMNefMrKWqsJqiV1ovm1uNMsPzPSC47a3m5rSiFa4FhuP9whKRBF8c4wL",
  "key14": "KWafMQmHmg63oCnjtT3FC5L2mQoLMTu2FkRZjRtZG1or6898rtQiwBiiU9TwoButFgYRNt6qXiPCpnokoqEeJ3W",
  "key15": "5p6izxUn9g8HUvJ4tX6eDs4rChMPGn4esBksyyBniRY4HEmhbVypfiyazTs85yxTVYzXL5EAdAFkK17bKsqJMowo",
  "key16": "3dp4CQ9efjKzmgZVVzcGaoMaSZHAJdb7C7tgnj4BMTGyjTibQHUAeDBn8Kt8c4M5f8D7dymGeVrKdAgMrXJa6z5S",
  "key17": "5CJb7RtVfgVbZfSuuY8M7x46DGkwQj3WSrawQVNQZmE85a7pKPHyGJtTs3cnr8HTPKHzhxwchSjb6Rz3kgHFYpWV",
  "key18": "SLecFXvZ39ddoKmuZq4dJw97oGqLwyhu2U2ck1DF89TBdXKKMcbq2BPQiMDrWp4KZe4J8jp4CMjm2hUC5owyMsf",
  "key19": "67nta3YDJejmv64UwXkA9FbyFGbzEqsGoTzg3jE4uzfjz8Zg6bqMVvcE239U6VoqwzWosaJdD8jU4N6Tt7fcMq2Y",
  "key20": "reRiyquajWQ2j4UQ9d6ji3Wpqiz1VJN9Di1oBTSBLaiV41HpAjDnJnFRFCWExYtNRRxrNNBh1zwhGT2ATUcEsgt",
  "key21": "9tBNNUYtGty8SHeZNyR8ikXDSAKF6ksjtja8C93AyfTqRTGtgQU9fynwpCt5dqHKhcUj6nji82nM3s1m74aZMTD",
  "key22": "3XamGJxbLBJbYC1hYCPNzQCmZ2T8gMhwZ1bGZ1U1v6JeaNVxcmjs62AByV7xPKudXPADgPToMyk8NGTAJvqGWmA7",
  "key23": "2Vr4K9H4Wo9N3Ft1jqpC9z8e8qqZ11KLwZmX6GgMEM5xwYUxPYfSTeiVHC8jUpUk5f5JwgZjg4PZzNryiho1DsY3",
  "key24": "2TetG8Wkac7n35CAjjVE8WxtXesAxSeHG2UUYbmEqQNHQsn9KwS14K5xG1bUdXFStUceEX6NpTkvzLFQXXjEWb7",
  "key25": "41YSTZxc1GiXHMdLFfVMSRaHQKdHn3v3dMwk9wHdk7E9QHrNC53DAZEKz7KATm4oUqFdFD5rjTnHpfPa5W2ztWaF",
  "key26": "5u3xaHs3UWreySY4Jy3Y5zQRgsE7nRehfgweQdBkkDocKUpupHVwz1jXTeCCt31MN17fKr1VvTUM3mmZEs6XiqYZ",
  "key27": "5myUzcnRHsReRW896LFXQf15f52r6Kg5g3Ak3kHVYVdmqBEBLqusDBkgtiXLMx2dsxj5GMU2npPb5hngXJPysA1B",
  "key28": "3XUQvKpSE7ZP8h9cv8RoerrLbYuPJTieisri9csVcxn74WKBhSJPwCqHyXur5pqTojnmMsoNt5BAvUbS6hbuBqt9",
  "key29": "2UvZQoRRWweyyBeg885Tfr7wHyjoWmWaew2diZMic51bNYBHnMYvZF2ZfB5pSrhpDjP6BxWgkVY9aa1FiZoxChML",
  "key30": "3wt3u9cPTGhdE3M82W9UXhp6UcACL2DD9XRWaavbnTdt99oUgA4Rdgrr2gB8QBguDYvy6KPXtZ8Sgj4rmRnjcAtu",
  "key31": "2aJvDJcg8364pXYXrzyQDTSeWB2Gz988sTREWEap6nHgNo2CoVgFZaqT9GzwG6q276NgKwsnxHvyd2v2bc9u5idC",
  "key32": "CE2iKmXLjTaah4iVHddEK2nUXq8zjrPVjknbGbDsd9NNNv4bMhegQdEqm1BW6rPrbUo2KeXS7xnbJFKYg1BygBG",
  "key33": "3adj7iJ59fuF1z5EWv8q7v4JNQA2at7skw5my4aGNwQ4wJ11JwbGQ4rZEjx8qMAmTa5kp4dpBQHjqFw9sTvC61nG",
  "key34": "F7SwxcvJiSmU8JxU7tb4tjLdRNdjycT7xEoH4feiE1a5SGaNmGFLgcVoAwW6rWxCQuBshgJx8fNpXByjy77eHRp",
  "key35": "2ndh2W2A3bvf51PAF3CN9J9bUHYVXZFzNDHAeatxcGVRYa1uYLzgs1ospVJz7pX9Wn3XoSxwxYC6TPtTLD8tpc9y",
  "key36": "3NeXJqkesxnhdBTtJygEyXwtc6XCgf4WAEs6KHn64q1JNnJ3ao4nagkCVfVayg8pjixThS3ag37qjA9sZ8AZLij4",
  "key37": "5m1mZxAoPQjFprBMzwgKufvXnfWM8kikfU3a6iQSXtEpe7YbNW7JiZdLcnAGL74rwAwmJ7sgN6PszmrK7zcNAmUe",
  "key38": "2juYytjRqWxrU7nVVmvmihXcvajJTQNQ4hGCG1bXJUdD3aB8tvz2fcKQu4gbmSr8rSJZTA4GxWFXQ1kqz58wmSV1",
  "key39": "3eUtAFAK1mKCFcxyLZTH5hYsPT7iy11f4WpvxJNH667i3novB3qWwkdb7xW1eTUp3AvLKQtce18KHbU6H9ggAgRB",
  "key40": "7CPcVV3VR1GyPf8QLiPBxjNG3CV9nE717GT5YRyeHwrs7jfcLennB9rFtuTv4BY2a82oMJbdMTTRHxQaoUL2aga",
  "key41": "3t42rNNtJFnSDeLKMBzNdMFQu4SQhXJoN99nKrhzsomm2A511GxFxHPJVZTzsU8xhpbJY5vFEeJJf7fR15sMzHst",
  "key42": "59QuF2LGEXf5J2R7kYedJLLB6reyEVJa41uxUFnLH2Yfs7HfGgit9hMoCZzxg1npq4vZQu1AqqXmEqSFHg6WCToe",
  "key43": "52SBxC2Cr1A5fM5b3bPetwFp949tCvH274ghSB2KWUFAwRaU7XrVsdnFsjk3z9kisqqyPQn1sR6PPgXnHDiXnCfT",
  "key44": "2LntKo12ZZzFvLxKFVJ8YwHFzBrj82eV2ZcSZD1PQ3zbx2BdnnYzhr6ysMGDhsC2oLxUD2ga9cdg7ajGv4qWT4FR"
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
