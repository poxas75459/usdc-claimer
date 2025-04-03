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
    "285rJMBeemn3jL27S6CR2r2pXGbWDy78XfK4zXjqHGst3uwpp5ebDZwAJdy1i5nFULNhvXeCD82H56YbsrTcGza8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "679hH1dtgMgvUV4agQ4AC14sXhMXKNAi19TZ3vv4gcqy8V2FfVXCGkqG7B7rE3RuYMRRt8KVC47RR5k9WamUjmX",
  "key1": "4S73muSUsoBAR8at5qJ8d9AmkuMmBC9sdTzoDDTc26HdM7o5RN4vKZQke1sigXtKsW4iBki4xU9DMJo1dfxbEX1c",
  "key2": "Uo9R7gd9SP3xxGrt79dBjM7CDXCbct7yz5k8Eozxb5qeEUKpWn8zvqoECEA1ohRdgADn8WbYjhRzk2wJiFSZNsu",
  "key3": "3eg7RgL8Abji16AZEW8Sckvy4Hjur1EuJmVaRQBTm64XsyAo3XmvTxmeLSxZjWSxa5BMNU1oDtgsAuz9QGkuAWsQ",
  "key4": "4g5pMiyX1VNtMyx2CXCWqr6f2mLis1CujGor6r1mBi2bKrP1JzMu3Z3eV7rusr4KHY3PMp9oY2DtJfwFpCrgWMtU",
  "key5": "4wFAWu4Dn5rpRGiMD7anc77KBvt2KzZgMEBnToaxxQifZ2z6DbcW31SYPBLeey2Fr2U3Yq3jikErhezWrHdjc4Gu",
  "key6": "3WgkzjpozZ8Knsx8o3Bv1YNzqAj8eLh25j4ZA9Vsf2dokxC5hMgAwMkv75ZNXXXeQke8QtCKmGSpCiZ1s75Rs3ka",
  "key7": "64sBFz6Sp18Y4FznwjgEgNvVr4g5inw5f7Y9WQVSQ1YC5WsgaJH6WMoL1KKUXYACLMAaTFVZXEvTLkyRTwgCV47s",
  "key8": "nAQUb4zGuVXTGKXvauejJ9dzSFHe9HJvbWFP8Xgsn57VMcERWnUw8WXjgNJubocc6hAceqaCe8G2jqhYPaY8RmE",
  "key9": "3tzqGZCsfwDxZ5F8oQfJf7Zfkhge7fstmSXCwrUoAJwjQUyt6Wy5L99YiVbEAz4JgYDcdgrr1dWcXnZaCERSBBQd",
  "key10": "4wCyM6zFhM8pQH4LnS8Lz1xmsUnq2cnH1hVxbwZ8MyHkhhrxZfjgJzWD8v8PJTjJ2QKWPFNvGVcHdFduabCNCrNU",
  "key11": "4SFWY4GgDHMxxYsqj3dW5cCq6tonp5LESjZCswn4te8sm3bNswNLNbXZdj8xyD3egc8m2wZTWXukxza28RYZAiiv",
  "key12": "5WZDHPDS2hnjus8tsAAFVLHrQrMU6kAdDj17sNhHo3KRtjV7Coyxo3cnyaWCvzGnRxz6eeE8zHj1JH71s5MaMGf3",
  "key13": "4BNGujFMgTNGkFEPheST9AuPeiWve9M3cxRTsaZax2ADiWmXikNr5B1owBPZs9kwt9Spnc6Fegiry5Y9YccCL1Ur",
  "key14": "4YnFv25MeeEZNd3npRajFbpj9pvaXg9ksj15bQRPiWNBDRLpnSGpnqDQ57zeQYxqexTwz9zVnMxkPeS1pVPKALRr",
  "key15": "5Ptw1eEmQ5UVng67Ladoy6Xc22TbS8kQc1QFYe7inGxsvkEMoFyjLypKHSi3AkwLN3jVYWTMCNcLA5BVKAknowEs",
  "key16": "9vxgzoQPAaQUQytwfV41HN1pmnuPkLfGfeyv78P6iJ6v7Ebs7jE1AfQc612WcmPDiQxHkHPEbRTgZ1vsFhyRTmD",
  "key17": "EBRLJozKHsbn3bo7UbBYTW8xaSb8mYbUUp1iqEF6V4JHT1xnLBd4sqTSzMQYP2LojKc37DN8gMCv5sEartm32rL",
  "key18": "4yPo7aaRHt88HPZYDzL2QfbCPZobWkTSamhqunwpLKAaUApMADogFL9Y3LLCzXMa2HGtwwYbzXsTTQEtVAVBq1c7",
  "key19": "4Cu6r7hExuHVHpZTJwmKYni8eW2fLfdr46hpcHWHxPxEzHvUBVpKEUztVm7uVF8NrJqTK79q3vdVUx9BUrbd21xu",
  "key20": "4SnT4GAeWyt9rSWVgHC1VsJMvo6JFzDWMu32sGMYkV8Lj8vPPTgBGdN1oxFf1ng1GuAfej8Ug7sp6QbQQ3eUoduq",
  "key21": "4VgnBDvgfknobnTLx1HEKLp17LcY3s1PdbZPgmt7P3ZzNCeEhEM2CKScCfKpt3AePKGcYopGCVRUK8irPkVh9Roq",
  "key22": "3En6CdHmUDSviiBxxPSht8jKFZDtVLKNBuEJgsYewUPL3Disbm1njVRPGKU1vaTWBMQMtCU8kVMW7HVXiA2Tg6ph",
  "key23": "3V6SHmR15fk2ogufJxqStvxmUTxpsKd3KoEpbBTLXNzWTfjF24aJTGH1Ee7iNJnHUdRLzmKeoxs2nfZfU84jtFJi",
  "key24": "wMBd1cwVVG1Yh3grQHXWaR99zmtG1n2K9qLxg3N9i7qVnzEGDfYPJejaMijxBz8cu28JBp6WVUky5s1zRG2na7L",
  "key25": "58L6ZxyjgZpzWfH3qJruQh4C5b3RBLa38cLdaDdqGfDLCzP34vrMDYQf8CH4fCEqnki55Mug1gK7T2Ta5xGbD3YG",
  "key26": "3RznzmsGyhRsu5f54nXxk6AUkh9FHtwkuXE9Kv3jRQVVfm2KQh3iAvRWNUvHZos3ifoyy7zwqjVy6XR7dpRFHsM9",
  "key27": "2AZkeVsLhFio7GJe9LtvVR6yQDq5bTpcZzVnGUX1QfwzRQh1VMY48QaM8hLKNeM5mrijFCiDeN9tfhYn29oJZsT7",
  "key28": "3kQ9sfApkznUR3Yw5x7BqEqPNax4sTWCiWR8sKZ9jcHixn2Pswt9VcEM2CbJgdyqYv7vARnHsAsqWMxkDGXXgTsZ",
  "key29": "5H9pisxfRB1LET1xm6Q7w4xM2zXCq1W4QaEtpj48GScRHsWwB8LshxHY5MdVRfpJmn6Zx8zszaAA45x6LdAC5Nm7",
  "key30": "262nseFo1bJE9Wzep3UULT5bQrPQjj3oxN9uiWA3QKPyiLN42SRUU4XnZwxkkzP8VKhj2vY8CJQQWHKWDfiTEAkg",
  "key31": "3ryudn97zuctFzDBM1gnzJagWcCzaGby8T472Sg4HVoVCco3Ki6A7HLXZ8FKkfGaiygWeKAn8UjCyEg7yjhntvz5",
  "key32": "64F3uVobbjYvrEEFT35cKQLy33Pmh6VyjoDm5SZHLKec39CWfrgenRpmG8J1kK9W3uYSZyFwV5k7rMYBuR6NGx1v",
  "key33": "5HHvwAnEuEsj43y93bsHcSAnfyWzYMqWcEnZRZCDyE2Jvyn9V6EBi7Edu4c9bDsknEg4GhepxRKQDLzAnY3mdj3c",
  "key34": "586XMBLNnKDQgrekUu9FtmBSmSzncMrvkZREoK5dxthEY7KhqmuW8FNpLHVY3G1mfcGJ5vJzCiZjfpnpWeuwXvYT",
  "key35": "3pLpGQ5j4wR9WFkUwkU3QHLdF35hqCqvj5j4mm3rBA2EJk1Qsx8UT7jfTTgHRYAwbLpu2K7w8ueGUdvWZv42aP7V",
  "key36": "2qLqfe5jRx5kcxf77emzNzLfKJgRXfgbpqJNYgbRAwiXcitdt37fdhaapYFgYzrckN5baa4zf23vi9wcNZqcLjDP",
  "key37": "3i5CQXu8U3xFkc4UMBRebzMSFMrZgTv1omPVq2SGTUUnY95XiGzbyYzsRf46EV4eAc6uSqDnHMz255kk8LYSY9Vz",
  "key38": "54PRpGfid4nhmsDfv2sYaBQbgEY1AiNf5L2Lfgo4Y3prdYQudbW3mDYEhzfMz9rK4DQRd1f96VyanyWo3YH1Eqaf",
  "key39": "56DoPQfinr39jKdAzVPdNRraU69iUBw9TcWoqr7LvfjMZFbkw4hDTPPT8UuRVCkcdhUBTorzYGDfMrZ4BwpURYDM",
  "key40": "5aKrvHR5R9T3aA1wkXb9E8V3Ae59sFT4utCC4gfaXPwfWmYp7ri45Ys9m5mCFCpZ6MDLTwouy5uV7JpXZEmWmcEi",
  "key41": "4EPrJxqZ3XeKFbinSvL2eoyCAxnVZr4ewMFSeDNUEhcCAxHx7Av7L51TdBb5o5xzP7yQ51gXBoDBWKKFeAvH4tnK"
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
