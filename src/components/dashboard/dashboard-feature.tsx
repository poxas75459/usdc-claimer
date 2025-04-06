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
    "3STGgr4m1JGPFERpebcBPwHsUNf8Z8jUqEKYqWvHoQtv4FZ3cPEETDwDZtDxHtUx7SUzEJUjrw8LSMgXCmvFs8Ad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wqVKLagfARVycXwErnFvEcZzCt6MeEwCw6dFygFRHVqGH72SMXNPYDt9pE4dGKvcJ9nLTwRVizehy3uSDRAGqnC",
  "key1": "3NcHwgqrE7TK87BNnfazSkkE5APucGAm7VY3NsLkxBh5dQLW8Jb2anCoK7pKqhaPLL5iKWVQtJJLzLKZvkBqQZzw",
  "key2": "2z6K4Rkw4qjdQf4BvC1jK2Ra9FRe3VuExpL3VL1CBkq3ehFiReyF5ThLXnBc8MG83u52CyybnpJ3PxPFKW4syQHN",
  "key3": "4xAx7gWXEzbL6SAsovWGWaa8SjtteuJV8CbDWroLvd9UR6onYhswm1qpTHdDFKP1k2xHbSbwYjVjSzbb5qJDX4yP",
  "key4": "2GMqJjBwfKMN1kpJjmq6aT2Gkdy2UYEKGRWq2aMGxnTsyJXg5Xk7hZVp2QBzMW7Djg682wDUp1YLakw9sHtVwuMt",
  "key5": "tem5mzB5RDMk7vsWFUmmcWa4RcUuSt1zkfvwvNaw9utdSGoX9pKNNnueN2AwuopSDd7MJv9d3wjEczoQPjdzQN7",
  "key6": "5VarQXfEvRCskgoh2QNVwg155PCAg5BuYxNzNvcA7kgD3zxpFgVzhSmwTqXoLLvyYkdTsvTsLMzis5qKzpWeJtKp",
  "key7": "34iQfRrk3dU8kjqv7pADBip8R9WhJjbae2EjzoRpFzMxxxR7mwdr5vPnvWmxkPeJatNqGG3n7BgfY24f8HmRmvnF",
  "key8": "CBZBxmwVPJgNqvwmvTnvmL8suJbh84pFJKXMKvtvxkK4et6X91TMMzQAQ3U1zfxRSxoFP8jH2V5cBj8MQYvC4hJ",
  "key9": "66CRRZ79tAUAKaxthXwSBQa7mB3GXV8UdA8Wut3rcrk1C2Mdn7SYcEx1rYqnFEtCWVPDdj9BwVXuJQ4AJ3XtoKBo",
  "key10": "4rAyNwiNngAeEqD2zeeEcCtFbVp63tf1qszNQZh9f2fMQuBN9LVaq6KJvyfqb2C4siL5iMpfz2bdF27kiwhX1nob",
  "key11": "5Sw8iMpGsbbjTKMGm5DF2NLGmVLs14qiJhbGVJWZvPTJNWHzfGSrTMpmYh2LE8NNyuU3BYNR4WRSJJAiaaZmrJUe",
  "key12": "491xo2uMVaw7esHDhzyKf9mA6G3ogRmnu3SNYtch6kfHuZr19H9WeKj6vjGTSSVq81S49T53Hhkz6KNz9xHsBk1v",
  "key13": "6vgNTX1xM5DZHvJvxraczdjZzpbTy4o54187M37MueGuHBcyjr6gfnZNQPUxyKiGnnKyuDeicvAbhoY47eoMDsu",
  "key14": "HopQnJCpsyMxoNsugpkFB5mLBBXuR95UaeSp7ay2ySPVokui8LeBnuzPaef7CqzhZrT9cj1zz9KerphUkYrwjNb",
  "key15": "25DmSuJxnmv86gaj6sQPk3438YAKeq1J3Hgr7qEuuyacZEUPPVjxCppxg7RFWCdEC8XEEV2oCjzAzwYX2KX6i1YS",
  "key16": "4ePg5TFVBGrjqRkUiTQsXskyJpCbs9vqCjbeaz2UFpxmTMWKQK1N2hV9LTyUd87Aq6NW5PaVQurzJgVhafLCCVh",
  "key17": "62sC8Vx8vmK2wSMKFygPwzLH7WSxxk2fVwAuDXvMVmpvpFrx9bCRN31QwxwpKkm1Ava4MFujSpy8UmhqsfrpEZx8",
  "key18": "23VC6xQCqqWbpheDgMAa1AoWsg2iZRVcRaKd41tt7sqj12357tuCfd5xAAp7mNzP9YzKmcfzdPnzUP2YfPGGEM6c",
  "key19": "5HCFxSL2iw8uv5Xe8rsFg976pAtRT5zV8HCJaXSG11QXCwTJN8r5MNQ5APtKceryzzGbsVzSx2c3kokBM6aidG5z",
  "key20": "HBwEPUEw6YK8P11tHYvqqvm54k7TQ1L3Ts8yAZBKY4mdGrRBrx4U7hDGMNNU42rwATemyJ6BP713eVsULSmzi2A",
  "key21": "Fyhbv3rseHYBbBRxWTXecHTxcZrkWsKC8TTVwti4LoVLx5ewK19bAP3rzbMiEpGPz2jBf5FQUdeu9RxZTB2bspg",
  "key22": "4SPJDFtFMzq9wAvcu1hFYDP3kwBBCKwutiZUJBDurQWDdiGF5azisyhy3MvSURFz9o4ERFTXWk2bHQUFcp64r14F",
  "key23": "2iYtjmB7aJRfRYTpSTc8VKtf2u2xkm1Zu5zHQhUM7beYFs2Ce9nJUvqcZN72Cp83KAa2rBQLqHvfuFUzmbhUoqq3",
  "key24": "4X9k75iS2xcr9e19qYDZvQHVjxKHkwi9LpEwZS1wDRHt7zXuLdCeZNFawmnq3Jsr4z9wn9rfyK12ZSVm1qKhQsJ7",
  "key25": "kGYtwgL8QAsqACu2bXNizUhKGM2P563JhkxXZGigrcAHRprYcknWGF1qZGzVMFXCLfhhMD5X9CTfiekxPSz3Z9U",
  "key26": "3ixC6tSKwVaa6DAFX9vPwzoojNXQdcfhWDp8gmqRqDx22Jc5PmLT3yexyho346DVXfpJAP25KaD8hxovo6EG2AWo",
  "key27": "Cq7PdQpuX5diq9w2Exmi2Qm4JDuuJhUp9djHCu8YsntCkRTqdLJsGhKds6yuWQNCqxskE5j2PtXRfv8T5z7yMF8",
  "key28": "3a3Negcb6hTE4njhFfKc5zxL5ZfA4rJVhGupzCt52ZQ7zgHDrWziCL56EkNAtfTgXJaTQGwvWC37SJ2B3PaQQ9nG",
  "key29": "jN1bSFbHjDydRCE3YVN7BG8reojjdhrcKBf8tXtUHVA3RM4RpXDukxgbUFFm5xVB4Vemcmh2KbSyvjr2XAcbQy3",
  "key30": "2UUFKy5YgeBTrtVCoaFgzBF8MNSTRP3uu5kYeWSLS36zqVHyJa8Cynrfw2FJ1cR4W66tvDd6urdYF4vXHPoeDDBW",
  "key31": "4qHK226wAtz22NTUHxYWQKqcow4zeiNQYAMeTLyH33prxZhgGaXxr6VpL5dD32PeBMELDkG738VcVh7ERBbXYDw1",
  "key32": "63kKZ6yXuqBA1V1vyiFToJSs1R83h7dkEmgzrng5bv89LVZb3RQCju4xXx3f2DBPPwNTbqPpLSiQSH6XYwURCu1d",
  "key33": "36eAVCvk2qDEMC1VkGrM7d3th2u8RC2qofGKyY1vdm751zwEhRLUuacReuSMaqVTN5j9abPZuEmNbCx1oCFxkKor",
  "key34": "4taUC66p4xJWJFZ734vAXiyDzW1pFWkbYyKzJarh9QnwQxk3WTgnFAYvo1gnA968s4W1oq5tgeyPy4CmU6UisZuX",
  "key35": "4M8VZaAmaWEZux1WvEYb8vYJZA7dZpa4p7QWvqVqhPxu696YRwqttrzay6fptnNu33SqGL3JMckGti3L8s6Hmfy1",
  "key36": "47mdocSKDQcomvDbKgtNWdzamuCDSFHVSVMQAUaTH4i5jVshRN3yKHZk9rKKDRawvypLWC6jLG333YjqMWx5UDDH",
  "key37": "4uWm15TNC9Jf8scQdYKxUAa4MbkQAuBzAhoGvf6UNcRcqgLmg9GUyGjXjhnE4kjrWX9twbo9gCfyAuApi6tnsWtk",
  "key38": "5FWbQ5TrVsdXR12uihfnUYYd2d1fngrYGGQFPhdpHaCdSZnKufmYzMwVL6x6ZX83nA8j2WSzp2foA1M9Mi5rfDs3",
  "key39": "5PW4eFtCgK2xY4NipPeWaQkg2KxAq1eGMNmx2Y9yDuM5q4JE7QgTNBzvBGDuBgdZHBdDwuLjvb4dpuYAAiecPaUH",
  "key40": "3ch6LZSawZmqMU5V3rkLRen6w9YLy3dkCAjancQPXNUCqryiKqFRnpTUmshrMRiib4CMaM6wKxdwkBHZT1ABS9mp",
  "key41": "5UvLUiNo7vSMnQSrnzXefzNk3NFSzAcupgnpTgha2wMcXL4e2ymPaz8efzAQCpQMdiqNQUgqMvj9vadUt3sP1ooV",
  "key42": "5FEpavQuNKcuEajki3Ayxyj8wte1az5jyp3SLV6BMW1d2EyeFeoJRQqaXgxsq7feSztkKqYXPdFXZBfqoRJhK4Q4",
  "key43": "2kpGzUoqjbGkLQp4Gjj1s7uNmxNtPdNe1L3DbR3HnKU6ayfuzMk9HcMhPkHDBBtYpa41GJbACQCpoytezSZ9FG3x",
  "key44": "3j5o5GxA3wuuxnJGNHSfsWmHMGNesnr2wcSM76hhhXeN3VbJJpfZar1kDKqALHajj1N4zTs7pnkfG5DbrQ9Rvxih",
  "key45": "2T5mDw6yECmb7fvPJssnd7Xh68VuomcA9k5HxRWrNtp8cMSPsxisJZeo4aqLQmtWJsTn3P3Tjk9Xf6dJD6vehQ7H",
  "key46": "2DfSZGArQniJL6ccfQGZrkGSxQyy7SVf6xGDGMwzpk9Exi2ufh4KsE6v5qDadv6vNMpHYt46GWeApe5gxyF3jjve"
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
