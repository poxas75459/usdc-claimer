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
    "3ADi6RK2k7gY4D1NdYHsBQS88VNhmuwr8YCdKhzJceS5NXPFVWxHxSHmn9aUANSgpXSsPrzVzLPyGGmjwANdNdhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HsDNYwScwLhN1oPaxSYj4DwfhYzMuxmoKv2hwMY2PFMjY5WigW7pvcgFSCvfAzi3sUQfyNWSs9CvjREjA2B66Cx",
  "key1": "4cWWnxPJLcHsAACR76qGsRnX3E11HgDAFnt2J75t8kq7acTNEjQxtY1aBQ8afXv9pqdSHtV1kMP1FCd5JHxdGMJx",
  "key2": "5jPfDiff3DvTX3fZw4zkGSBx7wah79z9Em3ZSLZiWctsDntKrUDDR7B8PS88iCmYncPSu6sJRKB9boZ3Cw4xeJSd",
  "key3": "5Gp5NvMjn8pF2ri4cugCT2hs7FXiPJHRF9gHUsEtXzhVxgW35MLG1X54kdj1RTSbYNihHymXWcbK7vAmvYZn1pzo",
  "key4": "Uowdn2BM8rwsKAefV2JvRJcQTcRVgSysiCZckyxraFYPV3UZSvmWq7u71yJN2yXX4yc5uBBtRRrBugJYNDZ9W3F",
  "key5": "5EnDMioCqZ8HPgnopVxaDgBWRiFhFJnDSvioznmr5AEHnRAqmwVgytT5NKSMYHSAjuLrZ7RKobTZQuKzCtFPdg4W",
  "key6": "2gnQcvZiYeqXUaW43w4ZUARLpDPyrRqMMvdNJhg8QgZ7YUVi5cHLaeFZS5iFNXrWHiNSL7JBzFJx7pASd3FZsucJ",
  "key7": "FMXkxf2Zr4CC59GH5rx3s1rkDd8Ny13J5PmrodoNMHSeSxZC9xJB36PpAQfKQw4a1CQ2zQ7Uu5Ti5posyBnpjrQ",
  "key8": "5Vam2RqLxCz3pesnjo53LPiPF4ygUpQurZ75aH9uwFgdrAyT4nJYbLHdQivSYRpF5nE2uutunyHQqixzEYxUzM5q",
  "key9": "2oaASw73xMddqNxURSTqMuQPznMiACyA8bPiVud4CCpuDRtY5yWHoNSXfhCVETd7Qks1sspfvJLNYb6MYpR8yKYN",
  "key10": "49hWQ915DJ7Bpo1EMRJu4J1Z5bxEQTVRK1Bygx7yL53rk4DZwszYAof3cKhykJ1NgKW5J6D6dwMAb1mAoB1hZUwa",
  "key11": "2p7eYioPcsGegZZdtnELUdPvj8qrqsYxk6qRxWVMx1VkcMidTo927TZV69Zpyo41DshBRvgm2SxSARuuvq41jn5K",
  "key12": "3XgQLcskVqLhbv3K1xRpst8dbLzP4ZXYN2MMg4rwDn4B66qoXN25hhuZN2ZEAKpAzWHZWRBbEMsXivtLPdHSmd8Y",
  "key13": "ii3do2cfwY8hg5VeaQ4c2dA9JJt6r6V8fyCMiicZZ9wR1WDaRRPPJhub3a3wCyQikPtmgGz7ZGqmviMpdrD3XjL",
  "key14": "3reRKFbJFY6zpd1ZGVFBbVGwo6Eo5VQMs2uxuBzZRfbFmHzFRSvL6Aqag5DbLp6hAEoNfZ1YpoARPHTBTfZCWSZS",
  "key15": "3fp9nHWFqHZJw7fCWTjm1VpqVqBA1b3ZUPhifU4nFKBj2Mo68U4iv8YGQRgS4is5A3isFRcz1reTxkhETkpGvo5G",
  "key16": "2HGh5m2ttzKUfeBEyzLZHjx5GJPCicwUzFnwFn2LAVHZLRzstmsD12PC89PJhs9rHxUMqEuZZD7cjDmCTfLPSmwG",
  "key17": "2uasUbwadyqxZNzEiv4fvkR8GujZtjFjxBEYYp6umDm3CRC3mXi4HmuMBQ18japacfBDDFDSHLkqaeCQEUKFxH6f",
  "key18": "636yR8mQSJeGSFmZyLH897KKjh7PPiyeLsGKYhB2jS47sAPoUyfMqXVWnTcyggvjqz8nL5KxTUMujKgPoeRTTB9t",
  "key19": "5ePsUP27f77JGpfA3WjtUu46xKuLPQfqwYixowWZy1GsZVSNTBmbPo3rTpWzr9kkqg7cuSfnTESSncdDhAdMcCLm",
  "key20": "29hjiBktUMziqap5B4UipEgU2fDriu7Lyf7FFhQg6uu3o6B3o1LFpBipYPP8joY65MTPyqjAHxrZD2sWdh9mp4DJ",
  "key21": "4W8EC9st3uexAtPVxrqg9bb3mhCtsJvFddmFh3QASRkSmyMwHi3qvRJt2QmRMUPrdn3BM414TkRvtFevkLkKwk5e",
  "key22": "5P1wVVrt1VztT3CR1KUPUSXSqvDmSpDpZ7MStDmQCi8GJigkW3HAtZ9P1JCWa7Lj2xNvAYEn2mo5dUD72jxTe3qq",
  "key23": "3bHyyez9Dv12w8pxrxBHtZyzc3Xo25MvAiUEvtNkASJAMEp9ZuYviHTfQiYEER2vjkF3tvg7wWgkbFjcGMG5MBHL",
  "key24": "52WWt2vugWVSHosLTWEkqJ4N8vWu1pg7P3BLhzXU2zmwRDM3W6uV6oLx8U1cTXxnbLFs5P3PsLUd4ksGZv3pLyrF",
  "key25": "3aNoeK6ta9wKYQvD8aUaDp55hwYifbE5F5rk8dpufDXycHbzp3kYLLkL4T1CJkoyHXcMPYLJ7yuAm9UScN1bdsXy",
  "key26": "4UY2PiUorAKhvbzuSX2FdYqErduWWTSLbg88nioVuoXKmPyiQF1E8o4J6KD8gwYpA45oo57ooZHma119wt9Xt6vm",
  "key27": "3N7LxX5UuZKj3Jq67kDGPWQTUgXd7Hrbxi9brrk9uYuWV2qGx5QyayPQ4PeDU4mRXdYmrbC5HtsBWBaBT14Eth4Y",
  "key28": "47S7RDqzH7FXTiVFJActChbLQmvmJzpb4nxpi3JMnzBk84smBRkVz3qSuBgWM7rE53iNpx287e2dFei2q7uc4uaH",
  "key29": "4E6ekyzEhTu5WzNN8BZxT71dzcioL9A8qGxb9CGHqCoCTsfqp8N2GJhbTKdv7xQ7fhQQ72mTXDyrMrZpjKP7HinT",
  "key30": "5ptVGxTih3BhvCnRNU8xZS87YZYwDdiihWVTxR3Vjr3oCjU4wPXDnH8A5nCGhtd8dq1N9g8YdEqCe2MQU82B8c3X",
  "key31": "ivRNf3CrbseyF2irG9uQXpWQJe3eFNpp5sJ7MeFWVfk5fssWk6jaTiNRkep8e4sLSPdjQYAqfpQVMnJrMd95Y1N",
  "key32": "5DAiwtBZUKgKRNwj77HL9kCSYVfX154KDM8m51RHpKA3cbpUuXnu8A1h9qqfrBQAMUyWxy2s1fdRRYhPcSRorAjP",
  "key33": "4XjNJicvZUkbxZacZ3ck87dYCEdX6whmhXBQbYgLLg782mLzJJNLznxTWTYEEnq291TQx8nei1BZA6Dv7zUrCUuc",
  "key34": "4MxZKjfytL85kwruGMfjKMFgx1CDLB8NEAShssQPGz4gityRxeRAPxmVEdnAzrjMaWcUQgu7KzuWgKF1KgK9aUak",
  "key35": "4ykGw4jPNX5wawLRCWSYdiSybs43jr1QhqDHJtQSaEJAAhoTzMfG3RDF5gAXWfoA6uEhSkPiW5yR4dd9ukEczBk8",
  "key36": "3wQp3MBhHfBk2Z2bKSJHx5uruJuAQX5tVWsKusTPooKDkDfk3idQhgdUfwXyqvsnumqxPKAni2pDNdBkF8T3aTPv",
  "key37": "5NVUrTxaW767QcUMwkAQjbbcuz2RMQt9eRVQXgqXUCtsrnFaw7YHMqMNvSu9rhbiriJYZbDFCmh6k7EirvCC78FV",
  "key38": "3NEnLNrSq2wvGfuYv2eGhb4aJoRB8aK29taHCUm8PbC9ejisVvYWBZ7h69pkAjRRWzbFiGnMwoA5E1QfeVtKmqb5",
  "key39": "4rTNcE36TCsujFTghHdShrbiEyw5NFD9dEw7AG8igUNQsBbZmvHia8QS6JoFDnWz6TTUhNhjPqZGgrShSFxuwcVA",
  "key40": "37AH7wzL6HesAN4p84C4VRUE9QFfC7MjZPqJve15vRzLn5ovFa3LGboLnEk9EEAjVqTx6qYFVa761BwfxUQ2oWws",
  "key41": "5j5qrUwUFZ9niiFUtVtAUKHNCJvocuKTdnb9FhFjbxYRzG2zin2r1Uq8jJWiQHY1kJxZG1f8RB3NP2nyQGmQPYm9",
  "key42": "5gYdwTwMfWnVH5aoScGremkJU8ztJvFGTqaDcpeTR9om2ahuacKYJwiB8e1ctTQyAA69ADsjMh55nxtHoz2cAMyL",
  "key43": "2F9gS5LL3SqNVB5sii8i3kNN37iYZEQ8xW6PzgrE3rgJ7ZFb1B62Tf1dMs2kwECy9H5UGwDzznp5WWtwzaPPyWHW",
  "key44": "oSH2GXdovfHctqGCdd275AdrDk7hpVxxCvnnB32BC2JP2Xa4bxcATn5HNJEj4bDp6u9XduzzmdZrpwgz3wH9728",
  "key45": "5pabYSH7iopG1Mgm7fUwqviT5jED8jhon3EbVNYRvaafPHv4SeyqTpp3BeQzjtje7KCVHR2SVtkATSCyaTiSFZpK"
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
