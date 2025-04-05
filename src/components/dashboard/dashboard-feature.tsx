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
    "6rRy9EBM28JmSN8Lf19iLzGGnbsXPfNQrMG7WD1joEwJ3K4ZVkSUHDJxXLtgw8JDswnVjxsurQfEJf2tSkAPAiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6a3cwPQstpr8FHfaFSidsJ69sVYYJF5ahky7xrshmmaTycnFBAjRVoW9H145SuYRAPFVkE41x5iVZpCL3wx3i3E",
  "key1": "52MNradyNoEJGnD9Y6iyqb8C7D23TxHtGbs6xrvff1qpYgEH5AzBRfqDxCDWfB6nLKYXmf8gEFS8tudQAPsQyhf9",
  "key2": "5xAzs8zLmvH5i4JZQZfMxwQaKc92ZgdUYHHujwghbESDRzA99vEMiU6UJrhy1b4JtJ7wzDHQZ8qBJBV14QHobphj",
  "key3": "2gYifVbfRjHDUJpz4Qd6rnwMFKSBNuvhAYWHqBQSyykV7ykfbYUM5D6Up4uVA6qdqemSNZNJR6i9WZPaaNykybAk",
  "key4": "2151ExfXgbP4DhUPqCcxZFjXoit1xN6yDXjHKek4QQXyBekS1akxL3Q2MXJR4vWVvZ78BpUGmLyLQudRC1L9jkcK",
  "key5": "3uZBpssHA2D76HcgMouP4vNFxamnJz7n1ZkuYQA4JcdtuFFcNcmypW9kZZzRiVukwup7ptfRf8YtgwwLpUs2qHwH",
  "key6": "3aa4efhdvHzYmRrJKRTGVqEMppf12BEqG66hkuGFvM94MFwCibAwU3zzzWLNSMsYnjdVu3zpDBqP9S4bU2S4hLBY",
  "key7": "4PGt8HAcgWA7AmTQSeTKgxQiB1W8KyoK3MAXF48LK8SbWnPQynEDx2jzufNBN2XJFk9XfPziPg62JzZmmEqY3gER",
  "key8": "64XZ8MZtBKJYZuECDcr28g9DL3MfgWkYxuD4YNRcnm8it4Z6hnDuc8EYtLr1GYdu3UTiTXBVaSVXx4cy5QAfDUH2",
  "key9": "4Nqbya6YyJUN7WjUcwjtthuwmu5DkgwMqwP7Nidoa7nZHMXtia6rFQ9k9QqN61uq19zvVfE5Nd1g5PCX3fpwadqP",
  "key10": "3va2vigabZgEMwR2eA59JDj73eN1URCak5NgPDaFgTnhb1KjwBMeVZ7EYf3ycWFaG64umDJcA7Hf3YrXChd42tN7",
  "key11": "2vfmQ6zkeki7cTY4TV3UGdWbG8UKQznEs6bJw5vBmhAizV5peoKK9fnWzmhNfbdCi6fBz4a9P3oWgQkJn8S6Tj4d",
  "key12": "4SD5tXRSqdiSqXWLExmGdsXRRiqPFj1CkKKi4Z9nFJiv1TkapvpB9NjwTa2T6e9Yp8M9rJR1EpeFtp7XhtRsdpeM",
  "key13": "4K6QVzeVKmqzitUmDQwKDT7vLmi9koBgCDBRNDDThhbYoFsE1wQWJxNw5XiJoXAE8fZdh9najcwHCd2Vi86rPMRn",
  "key14": "4j64rqQ1VLz7XtcUCDBNN1iTr46YxAxweGEwcFopUvasZCajCUdEYd4BT35hEZfwvBGaod4TPUyuepW7Sq72EUYr",
  "key15": "4EC3M8iYS6RwrhXTmTUJcjHCSfFbFtkDGVvRDznRrw5KV51VndViWeiBv97aBjRcftdgySH1fWCuzf5KsyewUZZW",
  "key16": "yNDeFLSHiLA9zJszsNN5P6wzv6JXnu8AeWb8gbBTfV4GG1GrH72vLZmwMwyjZZJncYLsN4inexafRBJQEyta7b4",
  "key17": "2AbJGvjgJhw89HgjJ3zAw4SETzCS8Ex3iL7FnYEuu5Py6VNLAxcZMdVgPEC5yxUyTQxjqcGiBZXqnuqU63PURXmV",
  "key18": "594ZfdHC2Hg5xxD3Lq2Z7zng8ergpKDUKj7HL9EfVUhWdT3bh6NsEEjkc91vBh912FiT9dCw1hxMQRCcsbTxYxNz",
  "key19": "3qFp67pMoULFPpMzGiHZXenoiVG6C2CfPkYereytjVcQyKMR6wXxcdrZ28naQiTdoFsAA8KUtMkko976JK98KdSm",
  "key20": "xNf1RAqgxsrg7ekYLNiYL1JabeihrdrVeTFFEiGNEN1ErdUUPFWXy51qeLfzypyVDaR433qDFCMdByADQxAy38E",
  "key21": "9we3LSSxs1PqycTbo39673aFDpeZWNcWijkWeyk8dXtNJMvf5WTZu72WuSh1UzNb5FGBLd7PkxxU97EofDyejRt",
  "key22": "5aB3VV3xH4iSSBnKyE7xxBkG84up1Pme57RhoAHuJRAyNDiRPju2tHQkVTdGUgsRrfB2tXfX9h76rbQJuHVAJ2nS",
  "key23": "325MgMAhfoSvjqcGPweF8GKY1V4cozKaf4fBpEUgWQjSwcn9p3vbxKcvteNFrMPYXaQ4hxgQFuXwiqbvx6CjzFET",
  "key24": "3qheY47SDpTfgf26nMYAZz6WzkwpB93d727y6sjMx3QZVSRYDcEdr3a3SLya5owUuv31EtEohRGGfff9fdTdZAn2",
  "key25": "5MkQmFt3YMYcnBWeLS4WPJgGp9PnAQSccThkNJLKYaGw1DSEiK2wUBRqeBe1VpLFbvRrXE32N4H8HKZd5fJWBP5p",
  "key26": "67QTvccW4LgBQ5JfLReXQEv7DwuzUwFxiTcfQ819MSw7sUFp39e1cbEaNUTmNpSEJzQ8bSLBvNM3DGwW1BGk5V8e",
  "key27": "3ea7nnmLTpLfqTc23ekRBrhxZRjNvJiPgnEyuyHbRfcNaTdoyXUbBprEpMa4AQeU3jS2pauEKUhdRAHobQ7KHBtY",
  "key28": "VCmA9cCECKnXqk4Dib9ZKuQjsECKF7yZuxah9asKnw6daZ5EDvbR18bGov8Ez4hdDJYhhxKjPzLEhvnVAVA2S5f",
  "key29": "3v3PQWsqL4A5844RcBCGrfBpAo6YYx9B1YgrM9KAJs1Kn72q9BxdiwyKR61Ts49qeh5kBA19iSCr8hhvGscME7dG",
  "key30": "2UVnVBZr8gZNxu8McJnJDaPuQJREVjiNkeKFD83pywJ43uckgN4z3ES2T5XVzoAcUv6PayvinBn8pj7w34XafQnA",
  "key31": "5hKMwrkZKb4TdVVNWtfsMgacMQAhNUc9KfYag1TeJtdjmpesEcy5jU7Fs6bHbN7UGt72jhAe7KoYmn89LFDwL4pY",
  "key32": "2zCDmWKU8tZbeMSyFvrHFoz1sTGoqNE3B2dA8c1YmnFtJxsP5F69cDJN6NQEZLGbTnDmcbsis7byE9PKtk7nArqv",
  "key33": "4ngohn4m1diu5mJ9NETFh81VKD19YFz7U9mXJ6jtmByzrxUphPUViyUbBNrbYqPqx9ZVS5Dj4S46svze6q61S3ox",
  "key34": "4BWfSpRDYdh9nqVJryHE4uzVtLibbxgvkag8mMKuwdt1dySi4rZuRTXcUHCTvhmEzd92nPZcExpcyssS8BWwBQRV",
  "key35": "5PXBi1JmZ5GaKRYHQeJ4knqrcRMsdKgDxRD5KBeLu51DCpoY6KZEnZgnKASuHZp26S3TKrMnMD8wDmLAmN3sfdGL",
  "key36": "5E6hvzZRwFs774rqtbLjemeE6kdwfWomDqxBxDPjupePt9xuTG3kxaCR7TtksupyiPL83VfutkEo7aJnSVzbYgrq",
  "key37": "3ReFR3EkP5n7enCAoKQA5s3hkpvwu6S56rKDyafGiEcomMBBugwvRrksdDTnvukZa9UBfurVeuZFp2ptDkWqYoWK",
  "key38": "331tVjoTjmXdroyecKYYUxSyrcJSyJdmkPiqkYcB914Vxp9mBJEMYk4gT7CPYQCsBA7LYkjusxMmFAbJKzimRTuf",
  "key39": "4KNA7TWVKZU7gShBVQFu3raJ4naFwjBYkh7MtBQTvgnASc65f8dsqs4rLExL8Y58pPyfqjM16ZmhFaS1QU2DuS1i",
  "key40": "65Z7SDfBrkeYzdwo4aKPyy3FwNsV62hTKiVT1dSyWvQ3mxzbrGY6kWomsYWJuhWaCVDtyZYhpTZNCZ5ZJGS2MXaK",
  "key41": "4K1BtWnqVxvX95rdXQAXP7JkqnvfCfq9DEgjJJ8eiptgE6nuwQGb2gMqVo7HQ6aqNNPYDxTccPfPUw3tzy19vhDz",
  "key42": "4a4zy5UjChhr2qW6MizJehkL3wT5SbnQZGi9Qdkgi9pcScxjJZQmZtVaXYvCDNz6KXVEJo8efqhFjtSaXWxgDMG4",
  "key43": "3PU2eiWSqeooiK77CGtvnCT3S5MpJs8jganUvvApC8AaJVQuYp6C5Rmhb2ZnYwG7gKEUDePQGLamDAHADw33yyDV",
  "key44": "38SgXJzY2VbjJerwieatqndAU7FG9HUA4onTR4VFsL9jVjTBLXaDHT6JXb86hLQQjdmSP8HmpAnVAoW7ogzAfRFe",
  "key45": "4V7V1BkndpU18WKGmi5kcScaYkmcQ3NCRobTK5jd2PpvgrTU6iSCkrXwg2a6DFxDKK7usdX2QB6U3nP5Y5Ah6Yc",
  "key46": "2e6cirDXgmL1Hg2xCtvBptmQZ7gV78NEf9HXDxVu2URMmYU5trgde7KJtdASXbFSYK4EibazyRDqpfrFYKbMZX5J",
  "key47": "3aqDoUs35BfdMtmVkrL6iebWYP2bD3JQcmqabZpC8y8SB7aqG4aAnhf6outcB9neZqJvgrjFAgvxGJCrSGdf9Fth",
  "key48": "4Jp3unjowVGtkEH2ofMK48Pzn3o3bdQmAciTTwJwux1GEpKKCQ48kaUA4ybUCNYUJCJJohjWf9R8u6XKeDV7LRTo"
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
