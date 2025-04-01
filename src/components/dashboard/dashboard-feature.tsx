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
    "mvjhesZVEi53Jhcvi3nGJMPYkfMoeJX6eeEKHcjs1nmK9eVJLwZpExifMYW6H44U32grpGPvnDFVeGXD9nJsyyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GCB418yxBSK6vv6nR71JCjw3ZSRXpo1EDDAd4gXf1qMZw3m3uW877NZPDrnhFTLd4LHm5VSTsMb4zrtRUP5FK3A",
  "key1": "2ep48uCUipWrTFwGogN6RAbTbMWNkj1xLA6e4LP2FuLxJfijjJzKgKJY6i8GHM5yjwRTLwdeLkzXQjJ4aXGNqPfG",
  "key2": "2EwBB2UV84DXVFxm7CsXxiZZoWjPaTdTzPTp926gqdmr7iPyX5atUGNF8zXGgCS5KMmKoiBWPmmWUy1zLp3Sgxfo",
  "key3": "3eNsFvYxFKYRkbebnhuajbpyuUVhR6fuCJgyrEGwmauHHPyPotw5NtKFCxKfETK8fYqDHapUjkHBetPmLR2ERjmA",
  "key4": "4R5AmEaWSrPt15Y7NLTSNkEBcQSkfUQ4fi67mPztA8jTr7iBsbeJyRpohSKyrp2qPREDjur7EFRhgqfavWKGgGjZ",
  "key5": "2hfTzodAjF6o2GYvmMutJ4gSWqqL42CpPRCMCHtVZeKweSQacdYbJNEf4tFcoo7rgSuLGJN4YXpqGetMMSxG6YB6",
  "key6": "BF47SDBpaJxsjAPceYPn4Eq7Q8YHYmg3dpdVykAKbBCN63EHbffw9WHkfryTCsE3gmhQvFs5WzVD8DSxnVHLK1q",
  "key7": "2yNzs8BzU8sq7QK3s8hhNgJPuceeW7HwTeQMVfRZ8BQuK4dw4K8ji6fY1tS81dkRc9KG6ycEUwCfHrGcBoGnxo3",
  "key8": "4GsTPZWc4P9AbiCcL8pVKXVpXsB1qUgLvwSWqT8DPTBuHJrQWSe391JLfmrQeKpv5AFdFmczShKH5yosj3qdkeHg",
  "key9": "4fGKg1sBFwWA5xy8RwwcFPkQotg8uHmjbz8iacno65cfaSsmZxw25q6zvuGuGVc2esS1X5qCnZzuZDGQzVezqoX1",
  "key10": "5Rzi6GJzTdBCkKXMMpRwh9BHxJiiS9WedYWqnDKVKPNEgZ4hwmfXvyRzK32TpWGfXyg4C7b2NSDbownTfxczBnR7",
  "key11": "drL4ZNaczxTA48g6GTacBvy4MMFjovPnMRgxdkSvshNhfQ3BqMQ5GPYWkwqh3qiLq5a3PZGdyVDGa3Y3pZsxfMS",
  "key12": "2AYqGetoHCwkVvHn7kncPFpZnmkuJ5y6VN83FWMbKbHTRNW5MzdctwDX1sT6GtXW89JNNNZZJnoNTxHH3B1jytwH",
  "key13": "2dcVLPKtTZy2a4YjKvW2VXGX1JaSwGZSQLA2q6GVX776Tay59DnTi46syD1nyMetfqc8UwEKS45SBdFucxeiCjYb",
  "key14": "SdaXsXNdzyK6VpirVxQ35GzqcZqcfyAwu6Pa1r4yC1igCqfnRXLJZmDzZZU2vPY1u42d23WwRwWBbaJoUogPzCY",
  "key15": "YTT8XTJFJy6RnESKH85HnCyw1jsH5d6Vt5yqw2zv5Rst2JyYmMLg3ASuUYgUAb45ao9wAgGd9nYbmnyUJumTvXP",
  "key16": "5WrwEWNso9qCERM9j5hhqvgxY8wHHNETxTwcYHftyrd5YiFbS1CfKdD9XmjWrfSErwLRbqdSV26iBxkeMXyCcVQk",
  "key17": "Xt71QhXtZ26hC8tjhvksMiYbemcjxhTiGXaQpgkQicragqfbZ1t547y3sEH2eZXcT9WVxVNLijYtr3r82zoGXza",
  "key18": "4WZkvx1gaogv68ubLYKJe6hinv77qQ76X88YRtSDQe9fQXCwgCEnY3ovs6cLBnPx3oWf3PmTcAujY7u7Frjeaav7",
  "key19": "3qzKFN5bxNitQtffv6k92RXHj8CsDzDtYPPPhKDJkRNJZDKbfs6iA94cLiyEYA1GyMsMjQtBJivqxLacnTQ4gMX8",
  "key20": "ndspQrzAmuHWFgKnCSBWnsmBzaYYorNSKdbSGjdWxexYdZ2q2dQxWgBiJUXj6KpcJpW4sMfNEt7TcBtfwkiQrcj",
  "key21": "5GyX6NSaAsmWKU6k8nn7NGywfvd1D8ajyJkgLZo4cztekSp53aKmxScPSo5sCp16cJqcQPdbu6Tzz2phWQ9fKJow",
  "key22": "4xPaPXybBMWaMeLxQZQVbMSGZoE1oxKjcAdg9kwyG21wcgvhA52pztUbhKjFZpFEWotRRLrYDQej7PXaaLdQNjB2",
  "key23": "SYmDfXjLcpNUiJUBf2Eh6VTPFRcys8aSrUHAVUAyxFrqWLYKzfdjHVva6bDVf3EwqLvevok1xaCJ2wzh3jexaqV",
  "key24": "2xSr2ToXAT6hdXhNFVkhmmYLSe7RJN2Qqb4vvjcs2Cx8vdnuYwKij9vxWXZxQ9yq34RcBhn42efP5HfPoMP5KnEa",
  "key25": "j9rAEfqWjYaStNESvefdAuNXzHXL8gDSTFbPn8qTryxnEB1EK5xPEMd2W5KRBPaZ818F8LLShvihAMqQZs3d2cd",
  "key26": "3yGGJLZryKvbXFCKaZoj7K33fjV1awyCFq4Pmog4JKWbpd3LJqHVXr7ECYtBmu5GCwfXtDSHXJ1CrZ2BgskmdhLe",
  "key27": "5zP9PMM1KzyBvvY3qg4QQugeRrMKLSZhYkMv8UGx7KENfoT4nPKJ8uC2xH7ja5CnUnkxDDoU8ERQ5Q8opTitQtdX",
  "key28": "4cLPX2mKgm4JunA5Rur6CxzccCn8Lmi5ttEW92taEq9kz4ZJ3nMf2BdVkHEx6kjb1Vx7rbQchyUoTHwVXW58Qvrn",
  "key29": "5hpGQp89nrDJUhdBGg3ts1G4TK4pWAvkgfkvhEd2PNmdXmTwHSiiWDf3t1qsYPzRKrWgDFddS77aCCcPZsG1AGwd",
  "key30": "ACGKC2zoFcuEFYxNL8sWCh16vUSh6xafywnwRT6NkbxPjctaS679CXqBN773YRsmnULZvRKMiXbszdH1Z1DBX3J",
  "key31": "235oHCtuZT3PrmDL8hVQL8SB3uRBAogQHmq2xwa5yX3CPpoR4PjCwmUaR8oRGG7ZrNU4bYdipvySL7rWwxJN6Jrq",
  "key32": "6Ckn4WDoAvAimorTqTBKQNuAadUJnGrAmv8vi2Ux8www79vg6XC66wyG1ZfYN4EuCTiLRFNRaTH9rBZXkp5VmvF",
  "key33": "trfYGLRNNEZK5RQioFVbaBmFELNsdLm67Yt1hb8ofhk1ZPtFk7Q75pRqtYyd3ziBRtL1W3yJL69aXrxL8BpTdXb",
  "key34": "ncPv1NWr1tiVeA6mRbpftnQPC9DdX1ts2hGpU7fapbFiH5MXK2aEijJze4J32xCvmgioRfyddAseiQ7fZqZy1dA"
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
