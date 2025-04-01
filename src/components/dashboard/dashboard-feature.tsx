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
    "2zXqjrWs3FqPjxMDfLKSYDDuPH7yrXeB29SFTABwR457LoVq4KmPQCZaQyR4e1tQBagvobniSQvi92inbeWMJTTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qtTKu5AASLUqZ8RNZLfssxKzHSg71dWUnzJf3G9grons4ZMhNK7Phoa6UEcV6RXQxiquVLJpwPbVvjTcrkZRMYM",
  "key1": "5sJn3UsELFBGppsQV3L6vBzZFomE2VjBCXwxJ4NHdv3CSHkYYzsAqM6TMLDzEt4omdoCV3NvcdtJkpYqHsZSTnyM",
  "key2": "58Zbu6puDGCyq2cidagjJEXrjaZzWJy1sv5fRi45JbpwAnqApvGLkezNNuKpiHJGnxjuy62gCBEA1FnZH6qqkyhv",
  "key3": "t7W3KSQJU3tZU8sA8RHmgCU91nb2TX8B9LY7uvtrgtQcmH5c3ed4ey2PXRHuaRBsBTW9TiAgjo6iqXVtv1Swcjm",
  "key4": "5cBacFeKRjf7Zj3iFCNK5tijkpeku3cwXqeaYMJcnXd6izJr4r2BFM8PMDEKw32auQfzkznxzDu7fEHdHEqVX2Sh",
  "key5": "VzxcVY2XtiyWAuLmKsyeFNTi4idvz4BD5MAtWkfwMXDBSnhXM97gn1VBMSmY8afUkprSd21JJW1fETu8vqyL6oL",
  "key6": "5uEz8ZAnU8Evo641aFDk6AEnfPHMpMDXJXimzedpKmTwyCTxsgksy2dfDwdw21XJLa2isQtgidQpyGZYdJhEeHLs",
  "key7": "5jQ7JwkzATA31poEjCys99Soxvmk2b3Q3wHXhtJ1DpM9U2w9VjWgzWhuAwi2pqq2fzjDNTMxob7UPWhHa9GhFWqH",
  "key8": "3sKveiUdEph2JsU26aRdThUoKEoZM1t3vhuNhrR7AquTH8BSe6VXGBwEsB8MKfnzMvTUsYDThhjQVd8KFYQy5vUF",
  "key9": "3HxEMwEr9AuHFZUKRM4MFvNttewzqr9ikCWhsSPZLmBxy6SRDkwPkiF3RckUEiaaSZHANyJ4GdG6UmBcCv6rhrpb",
  "key10": "E3yM7yw6bLcwvVXyoXMFDZmE7UXu2HXxcgtP4dYhRf43dDemfAigLzjQCLTx6RYPH5UYGw6EXNicdjdj6hcJjcx",
  "key11": "3LVkyJEY4PAt2Hv5bXHi5dT2uon7Zai1UBPAWXh77GBJ83zP9kiwatFJkvLQ2Vg4ERR4v622Embkt7cvWEcsXqBi",
  "key12": "58HaWG6HpMeS1TGiBfKmr1sXXahgdxn3GceUjdAC7PH5ZuFZpW6xr7YxbFkqye97uXL1r7CerRUsuoTgmNDbCFDr",
  "key13": "4FhfUgnC4oB2S8t8nYP3177hUedamXBoUidBsoa8RnJyMLLcF63tT3rUriykezrfNvKvqSvQvDwA5j6P67kUvsyz",
  "key14": "3mxLDF3ra8SpkpCLWdSm7o9FeKwK292LLBP3jSYUWRuWdBvqPjW6znYRdWrfAz4eMiGuUufGyvPCe1e7QG84mRDw",
  "key15": "35ChdSsrS9p8SVgAuxrsahESRufxXtPjLykBS8qivWVJnJMehXo1aYYPKcxQU3xsfTSsAMwHeuRr2tRR2DGahgxV",
  "key16": "5H9rJRVwd4kCd8XvfCopabrfsz3Yfmp7ft8sB8ZK6rxjyfx3TfhUXzvND5j4FDRo8L9Yc5ZmdqEVfBTCXBVAGirV",
  "key17": "49DLiXfwgmVgJ9zzDweCL1FJDG5XEfdKGHAnywvBq3JCWfXYYxKzk9CzMSdNRAypjEUnEhDeRacAN5VxLQ5GT5H",
  "key18": "3nrdkK7U6Yu13y3bpnELBPWGr27UWFBqYSwkRu9nNwrHVeSvq6Ejbw7HnCPdq1Zc6iVpVz8GzE7Vvy7AdPtYh9xM",
  "key19": "5dH6ds49LVS1eETMyD6XxExCDuTgAKbTozMKx1qZU9kvLhdqZ4aktEEZomewjFygWZkEp97cubWVQhZZLEbTr5N3",
  "key20": "3aTwqpMegCtny5NhwACrjAMzMMy1pdVYAYrcBm2h7pnZ1ZHBprMnQ8rHtb4nzXjaHQud6gFsY8ZLhGLBz9QGszri",
  "key21": "2kynfhCsKVG9fksXb6DU9ymPErDNKRwAZ93vWgpKue8F8XNmee8qzrTozwCHwN6JcvwJpbDty8xfFEG2KGL4Gnb4",
  "key22": "43JkwdBrfrUSCUPFsMbuH45ztbhBqGnF3StJdYYBThovFg53e6XbtDCxAtkC6HVNa4s8vAv3CtrgDWBTht3yALsD",
  "key23": "2RtRLETErUCPt1bCqiRVoxCVJw91FcNHMn62rHBygiFt9rQigCq3Hdq9gjifjfCMmEa2oakts7J2LfJxqx2k5FVA",
  "key24": "4VD8baQMR5AgPAJqgNtofzPGZHhNUXH7VBbmUd1PxtCzjmPGXPtZpD2ZWHrHs2t7UfN1cqYULPmp36QiCPJBdCUE",
  "key25": "4fYqG5Qh5qrKTpQPG6cLHmVFQfDxKkGto5rDv7yqEmHz5rLLaYEwPwrYSFu8RmWJRiy8CNHwdDEneQnDZpDsf9Bo",
  "key26": "47MBmPKR2f3RFqidhdUC7Zrp7eXWpduC1xGPwRTVJyMAinLtrJ5qqKymvLZhEnM5Gbxb3fPM2DUKTqvfAw8MoEx9",
  "key27": "5tQahn1ysWZ9RGriJsJUNuof9ukvc19aJCJ79rLJZKnQ2z7v6xJEeJK57mCMQYX9ReNwihXJoUhNb5fTU2rmRx2r",
  "key28": "2d5zhxm8omWUu14hT7QL8V8Cx3TcNtyr4Hnnj3sngKHLyuBYVhtfRXtMZriq3RZJY3WgRCg9W4XmTYzXp9ZFzWZs",
  "key29": "45XETmxp4gacWtKZ5ThkgdQh7mTHF3k1Uq3zKKiE7EF595WQS1d8Bpn6JPM4UXFMdwpg4UEaEKo9WW6XznxWRUoB",
  "key30": "4znTrdm635CTst5N4PPffzB1a2USV3uqJU3GZWG9JKZfceV7BSBARzF3oGPMwvbVk6DKFJS2LFfZb2uTUVy4V5g6",
  "key31": "4KPuioBzc3pSpnB68211UMYM7d2MehBKGH2afjfbJvjDoVHyqb3r8ZFT7XUSqYrnC9K91mRhBYadH79zFptUQyHH",
  "key32": "4p94rkn7Uv4WtDi3yKcmgMHDH8nfmKA8DgZqsXA8tiuigJSqnBdwhyer7BTRk4c23aERSZAH5gcTabwbr2yYwNGq",
  "key33": "3Maq5YDMya2UfqfrKBvRHgVziDm4v1hsogzQUPXxJ5Lh2tq9JwHG2dQGePJzj8WLki5kDzczmYvUtveBcSkmDd13",
  "key34": "4HoxkeiGhdmXZowVNrUHdDiBdmTsNgVoVGBgBcv8PcrnEWt8E73XERXMEAdk3aWUQynZ342xNiyc2wDkKKzDXS5N",
  "key35": "fyrZWLGSxc4bdEBKzgv7uxVqiDDtTij7ekdQce3KN8qCiaHk5M9hbgDohcJ3FvouonfWa1Rg1UEcqNzgRT2xdtK",
  "key36": "4ozy51aJVgNdvRDJKBXAhJ2rW7iQ9Bj1Wjc2dUVE2rb14rTxQyHtYfScZE7QUmLeXumZXXKMojiZYLbDo9BYh18Z",
  "key37": "3H6bUe9rcaZvWMvbdTSFUmseM3YqTruLpBvSB8fq8FqhJDAFRg4nYDdpLKrCBsE47HXzGGUuFHrmzxZk9JGWpxbf",
  "key38": "2mmYz6cjiWnAukmbmbmXXsh1hn36cSNZXtGxACWUetbW2be7GgWS3zUYEczfeJYLSMa3dQtyesPnDQvJmf5dBreR",
  "key39": "4YQAQPktKNX6LUX6w2oWzjRWYiccq2E68z2EgfrvxLPZa4vkcTZ5gCytBvvVqomqX5o1Un8UvSVq7Fq1Xui2jBat",
  "key40": "21ESLZzoRz9rHEPxS9vovrBQsBKKAXJThTmTjGXTzormKCdoMcpb8apneDi3zXdAP91HEdiVmCFHCwQ8iMho7M8C",
  "key41": "3rpniANKvE9QWhCh6siUZRUfSH7KTyJW2ambvev7FWZSa4UkdDw7HA4XZMBB6y6CajJX3NgjULtSr8DejJsnG68b",
  "key42": "61XDgKyiBkvNFQFpcpEeDveNRYwpTyturmfZgCtxrBPjrPk2M5cnDWp3UWuHiQT1UdDhkwFkSH6k2RxYGCjUExcm",
  "key43": "66dwLoESpe8we3fj43TL8R8ebfx96TxYpadE8QRNGLaYMS1ahKhqCfkXewqdbauizV8Zp4HRJqJrGWzHA53nrKNJ",
  "key44": "4jxgVX4dM5x5PuCnbLveVqCQ2g87Fy3hhjsmafajBH2GssTWrt58iUjz5mQQusw6jLVM6jvvr6v89ELbKptSkrMG",
  "key45": "59u4MZfapMML5dRAfjSREdwUwdE1KAWasA9pZFZ3CtMUoHQjh5p9mkrvVD3jKfxeGQ1ypfFL8YiqDmmEiMfE2cDx",
  "key46": "8UxHzCmhxHSY9eyqMqaX6X1qccuReBkjVqTmvexp9jAQVW7Vefv8YVZ4kvUwJADPbCdUUemX6asHvUDN8F24QeK",
  "key47": "x6QxkRERowbwUAnC4C4jq1QFx8s9w5aT575eHuVewqyqoyxgK2WTwyAL9vmkk1YYT5SgyFpiBU7muJfvKXXEhkk"
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
