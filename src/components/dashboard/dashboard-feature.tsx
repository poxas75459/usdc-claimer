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
    "5PhE9kzYdwdcbVgzyBUnP5o3kpnMvnDLXJGVPw84sXAnd8qEXiVaoKh3bdF2f6kQpkq1Krwdt6t9yyR7SFRuQi6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XGn2QwwooCvJVMGhGtDepCxEgEYPdEzvkvfjNf4Aex7WMh9nCcG32bz6GbYKmzPvce42uVvfLXE4hWNu6jdqCNS",
  "key1": "2Ji1KYV9n6kCND6Zia2PQGZcuDiHiDJ7GrXCD2eAyX5XG7vcnfLpW355fZPuhH1M1RFgGHp6gxr4HZq7bPHY1hKU",
  "key2": "pXrUqcresko63LUD2t9VJY2FPyAnW81PcYRH3j7XxTtArKFMmDfNDgDoCCojRC8MPNXH5fSQV2d77r95fyua5wU",
  "key3": "2NCRMRmhkpCZs2YAubVu3xCxhtjLqVCcW634uagb5UDaRdQv7M8p7d1SsKHG7X11fQi1j1c32NWBthrMMuTrnwfW",
  "key4": "3XvEw4Yqv9b7JKFP7uerqoBea5hjL1J63cyuvVjkxEsm1QeQNPz6NSwgiw5sxVDivHiYyT9TkkSuXQrsVKbmXJo3",
  "key5": "7fbuxi6mXzx9oLRN6YojoWZRncDNHcLbLkw9E1vy9hSt67W2711PodFpiEpwYPafLhcphoJbtorhSNYFyimEQNT",
  "key6": "5xhWaKaBMdUuND6iDwnaYxGuj5Eo5GNmsvs2QEtCdKAHbuUwd3swXEp9CZbGMehigWkpDuijouEqziy8ETMx9sEX",
  "key7": "2pH5qQw3i7tDcYC4gD6uVGQiuqPyB2768TqxKw1F6EGweeSZ3NJD3CCXvTbqmnLnGqckbTGQqeMi4m6BcawP4rc4",
  "key8": "61EEUf3fqXV2LPca7KDbQmmMTyVFbmZ1Qk6mHwaAEua8YXuEZaY7Q84oYhUmggxxWcjfGWJMg7CYywaxaEhhyi1Q",
  "key9": "3pYRDV73GuXvhArbgUWBAJzeiDfokJ8YMDKtp7WEEuhy8DaWYJqKTGtaJmrpF7RmnS9JGMcranK6QqSszpbwrNae",
  "key10": "35uWAUbteQtxe67ERzAE7iGyTbbCcRzuzLR4ry1c27q1QQp12BTqg3c16wV13oxhgZmtG8Y4GD6zGDqs9saGRrA6",
  "key11": "5mRPZtLN9v3M3dTNWpgejbmyaNyxhqdfKrQSLf1v8jZzw3nFyMzGGhHUFAJVUXcfn14CN451ShtC2rX1f6e4kDRH",
  "key12": "eH5qTAo3AfpJmdBvhRxSBfJtT1mU6tkpJPnFtZSmcFE6pLm8oYtFqfidW7ckZxuE8xAd9bvaGwrg77xT6q5Sm6K",
  "key13": "3hknyddhTX8q4rmgWp7bacVMdjpVLpGPVP1ELr9Fxij7PbgLtj779acfb5Fg2Rb83xcsrGnhNVyVM8taPVEttkmj",
  "key14": "35pdQ3wC8xV8p8MRrYfW3kp836gB1gCfqZS3moXfAyZsBUUP5WjBoKMjvKHzkPso1YDogwAbdAVKJsAvbFZ7h27E",
  "key15": "3b2jF1R8zeURveZuz4BVvgsKHrihhSfrgFRz1jfMxR8y4GqA83JyRwRgbPhY88voJfEkP2c1sHJ6JKsTJjyy8ycz",
  "key16": "vNzYt5mqsFo8wi4Q7rfCH9JAiR2gauTE5cF2TebuKeHGWQbtaFceTbdNvLS4S4Mut51mXctScDccHkooHFnPEpq",
  "key17": "3RVuGrHUc5Hk3A5NGMvA28Dw5JddJLBTp9DvP7NedGDy1epAo3nmJUmmReqbYNFUrj8t4URa4k7FM6L4ULDQhGh2",
  "key18": "21MLr5yWuw9qwTJWWJassqWG3zuwvh8beJbo3pv6pT1h4DijjAn5nN85wGDauXM9tw5jx9tkN17UQkxzqp9ZcHc6",
  "key19": "amsWRb3MyaBrD8eChsjVDLpWJoD5sEgmRfbAVsDkmfzb2XNADnpGyPsiSLNabD1SscozenGGUiSq74Fpf9dy4RC",
  "key20": "5ym8vPd2Re1WetF8zXx9eh9s6NEGFWPFdofFKPKvJDRkSNwZsnwnaPQr2YGxUYMznnNmf55BUgeEmkWGSnoyG31m",
  "key21": "2ZT67Dv7v3TDcxa6LC9zZcUaC2GBk7zzuGthFN77FdowfKi8zaTnpu51tNezJf7Vn3Tkzn13YoXoBQnQ8a8XJD9H",
  "key22": "BVfwA6x2JmXJn7zeJHruLKK319PvGD6argwchwgVQSD56QCh3zurFxFmyCjqDBKLpt13ijsHxgNExEZ2QzjiDHs",
  "key23": "4govoQuc5VHfACeFEX3iu8aoTQJYUpjxr7E67Vw5UsikzbHXbC1hEfC8djFtZ7sZCbYVrDatpgNLiVrSQe3ery4F",
  "key24": "2nTDGa6vDVESCzU7rRPjX5h5D9Kr29mBLQ7wyzW7RDf3ifZ1vXjub9Jhxy4YyH3xewu7TUupyqczs23mhUntfoxf",
  "key25": "5WYeLpyaMnEfxsXbzJzndUgq6sACoevhqqfPUW8JeRCtu8F7iiyf93XFJHsJc8tMLP2jvXc1Ve5mEqxGFvawsuV9",
  "key26": "2G4VJ4JPFfPATsiRP4d49C8ENaS5Fq3oEkjs6QkM7pm8MuCvvMJnkqts3KnRvdFwNRzcXdsP779TtPRBReHxWXJT",
  "key27": "2Ze2JLMJUJiri6KUsWC4KXbDLmXxA4nQcojU21gZCJkzEwtnpRzLuCRSQvCg3gWyXavX5MpcTcxEtuJZkvDFJhX5",
  "key28": "2r7muTmaBKc2Trpt9PMt2FAbQndhtZzKAXAWuSCZcHHc7tSsngCqy9CxcvJHCQjG5NETZFy8H8nhY4gCTDTJDcDF",
  "key29": "2E1SKW68Jx7HS4X24N1zL8RSWCfasW6AMYMcCDGEXCr5DfBSDhr1zFv1APd5roX3EzWjTfN3yNy6i98qTQ9mZMyZ",
  "key30": "9QJXqX1ZX5LF5q9a9v8A53qR23b9Rq8vmGRB9CHYypeHqz4cfZXydLyrRfvY7Y9Bwo7Q1NhyAP1PGNBB5hvaZk3",
  "key31": "2zFkGqrRZRWLGT7xFR5B6bxAq41GSPRvndkKNc9xfXsRuwfZXp9joBwU5JKv19MmJ7PR22UG2sE6McppT6PcvMk2",
  "key32": "aJBncNZaE2GGDP29HADYSwN2qr1ZHVVkPQo4AnmL1QMgAaiBsjdgBgdpoEX8uv8mCt6J2knWGfqQztPDd6JE3Nh",
  "key33": "31ghyhaoWHPWLccwsKqV28qpYPvJA7RFnFmQPF4BD5Zy1rKNKMzRy3hXMeonDCYzVoXCywT1zBBwsNMYmUa9HXky",
  "key34": "3PH3oVdR89xf1zF1wmwFbjYFfTJsiHBr9VK5cXTxSho2CyrKQjdUUjXLQTQSjwWBVBZCfpcZ71Zh5TdHXVQj49FV",
  "key35": "3jxX97yvN49JpV5U192R3uNvTYp2cgAx296u5mmAtxgwDssPRKXfcEsJX5ALHtiwwkzXpY1rzb9Pe6q4PGkxLqiy",
  "key36": "4Rrub5fcGA6Yw6YyGyiJxLM7UF2EWhD3KX1xGhJZFviBTTkN3WXYX819wm4aWYPj3zGAcGuBT3SQYSk3RqmMGFaZ",
  "key37": "5yTDhcdUyZ5t1xQWQwPActzeiCbpkxaixtZ8wt1G8ipXdoviuhyXoXz2hPH26v1mEEePo1tzkvnGQd2LN8A7u5q5",
  "key38": "2onTbCEb6fv1dAo1rE8pbym8rHAZh3Krutv5zqeAyfbkDbMbgReDKU2DS5hegcQJRoPvUKwZFUbmvAcHVZ8eAs55",
  "key39": "2k98U6ZNK2QokdduugXg8FXqPLvgLwJ4wdV59UWX8Sqy7AHwcjj4QvLHg75oJ36JBZe4bpSSpZ4y6TYaVc5C3PVA",
  "key40": "E6AoSLfAPwAHnKUtxwqL6HCvB1oezUFnankxpjCGLszj1o4ydgEVhfZU9n6xighRfBhk5pyXwDvn44Hmu96L2xt",
  "key41": "4FytT3qLCLvCapnS3Ftz6iqh99xyfrytjYLkR9WbYmXtpp25fpKp4uDt9Ag2f8drxHnd9EXBg5st8g23wrxcH59b",
  "key42": "TP2GCBGKKwu1UozivEf2ExGQYSCy8g4QPE9FJJWw6NbunVxRoqBdwaGsd2qD2kiMy1rkumaN7UbppWpJVr5MFSY",
  "key43": "2nUD5zCn7xsuVExDBrkzdqLybTSnW31Mm8u6ikGq8BXWLYRSLKr9Y4vpFQQj1Sm2ksiYYdc6Vv9Ese8gJJhAztSR",
  "key44": "5xua2v5xwESyFh4E8sC2gnqpmmwRQDWexvvc71UW11EoJ9c6yYKr3fQDwya1cpzscYTSgXrYikWDn5mVjq8X9GxC",
  "key45": "43oJ2KirBHqaJy8MpQvT3QQKxhAVsmhrg8rGvfo6St87zP4Ta3JnqfMSvBhsCkwHGzwsjr9C8AFezsDQqJYLZh2i",
  "key46": "4G87ajfUUY2AQc5WcoNN7tZjFkmCir4pKmfrkpGEMUh6P7WFoy8RAWgjTs7ByVPrsULzT6snn2D12td5JXyNp3UB",
  "key47": "4tZqtDKhHY2rWdWjUUJjauFwp1qsj9Y9FVAGmNj26BSyAzfTe1ZusXZuZhj6tcJbg86bDfKjDJr2HahE1aWD23GG",
  "key48": "2VPJFMcAH7BDTLen3zUohFogFq4A15VXR3iKjbFfGKGm6FVJqF7CxHmegJZx6FxyqxKA4E5UGdm2BAfMJhbPhErn"
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
