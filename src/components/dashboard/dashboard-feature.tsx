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
    "3NF5ii594swFRATSCfLH8pSD8n5kuiDM5T1SZMwj6voaJYo6Xj3arMa5Vptc4cCSSGuNfePePmp3HH9SoCZkUqsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aFgniqJ77ztngm8sfXHM2fofpSjfmDBmTzUANGjs8GubzT9caBQzvRSVpn1UZFEa6Q3V84W595iRqGXoHfUcmX4",
  "key1": "5upmA1fNeu4JYp6MC6gHoUMeZaXSTBZ4oRBbkduf62rZmCNXfozD1B5GnYxbYbBjDu9Pb3DBcErLGyNNrq9rqvcx",
  "key2": "4uK3aTbvp4S2UesfPanThu7ZyZ1HwDrr3HuymzWBnkFbkWrBdX1WpX2EMQd7Mv56Myj9FjtVSfSWLH1zdu2DbS7y",
  "key3": "2azn1yWxi19KQb63B5A4GNZwgTKgBxNgecJizpb7boei3NzcXMJQmtQu14qJMrGQqT1bLwceNBHrM1MKCJABJXyp",
  "key4": "3PLkhoje6yNhaJmPftJkcskFkgVqzo1X8eyk1KfyDmpKALjuZ6Bn4zZRdWDpfzEaBznX74nKEQgpgtDgUEejMxgt",
  "key5": "5gDpiNJtFP6DmTmLPbLxk58nsUUUXewcr8ZjqFzvnKU1Zuc3h6z44NekDk1NSwSZwn1mKGyh8AfQ721NT6LFDEWt",
  "key6": "yPC9PGxQR7d4S24daxnEAjjWYGsabcYQrhstwbZC9Kvk57YUQYQQHU847UL5fgGXShqS6W8aQpkGxP4F9aZXHL4",
  "key7": "3N3UvHC2dCfmSrEAmxSMkeMgLBU73NjwiyeRsiJAxnD8W87w9nH15wdRHUzUZGeoXDyKSLZFxYz56UN24RRJpYPJ",
  "key8": "5J8tJSFGL8kbBRSMBETUnueNnVTDYA9AxqNDUGtBsGitEEaQDQ8AHRMYeU2TzhrAPVbs4U9C5ozDinkQhgHgYDGv",
  "key9": "24vUeynrXz1hdjtFRbDakeFGBDNSZYJ4KAaqg6WohsC312TMJAFcxqVTzbQsK2LiTnMQqsZ6GDS4n2811fbTUfvm",
  "key10": "3KHgxczh9aGM8Vvm4oZB866p3F9sJ9K8kiubQ7bt5fGtEKcck27DfhxLj9Jx7yV85hD8zzfNno7YcFL1a3x7hiJ",
  "key11": "Ufrq6yjWqW9HXXzpLTshP9tZXrpH3e5m6a1nrNHyURdLTouhjKPWXCb5Tg94S3mY3aRKw1tzUrbP6mh4LzL76Bh",
  "key12": "2FnR3MFdfK4YTfhiQSuPveaPEWWUScXkbAkMraHLYuoFbMcjPJ7MS79FqPTuBvf2rRYjbENqwiaUjnRBRkU8gZbk",
  "key13": "5LmopizNaacgw4NCnYRJcuQptjatsBxzvu8rQmHTfgA4Q9FPjtisLKFr3serwX5Rp4c7haPaHJxdThqjGLtsx7oa",
  "key14": "5wBieBtUGfmVQYud67857bVg9qYA1FmDm7gNioTpSRQ3e7TiQ9uG6xoDNUdN4A6peeNcAzBsdSUegJLjuQhnLenM",
  "key15": "43VHiSyvLZ9qU67gV3Dea7xwKGKKkAN3vxWAZDxz6Q25B2Vygy6gRgBgaDfkehTro8FdhX1cqzZBimxHNhJzrfeJ",
  "key16": "3vdepHKQpMyacGooSfLoanY6WPSRJ2XMHxV5PGhL8n6qaZ5fuCb262QEgmgmmneChr6NLXieB5i7SEZJ1VX1NAb3",
  "key17": "4PVkLZrpsufTnTXPE5uezsPhMYxvxrWuDeUyuM5MUcwiG91JNn4uCE5DJ2uCS3ufiePgCPfCms1GVDjUZT3o9L5H",
  "key18": "4LFvQ99hiF7WjpUT4gWeBy4yxUrJp1QLWESvS4cdz7Mjmg8A6KxxbMDEMx1nV4jYRrCF89XmLMKnERaekp3C1zig",
  "key19": "4ki4Sia9V8pogp73vbHWAsFQc7A9Lb8ZYJ9EaLL1RtJJifUHpRmNZLn6MtcNmEpLJF1gPjDj7E7VcAxkcWboqR2X",
  "key20": "3c5xoC4wLj5gYndTPBc8snc2DPphQTB42NygpuLkPWosPjyTr8fwS2mr2ghepr1Ffdb2G67bwrXpdT17vDjanArp",
  "key21": "4rdFUjdhqLqc857Q6dATrL6FDeBySf2NaNGSead4iNjRiZNgEkzNYuE3f96DudXMoWAYG6K1oP9LEEytNvYT27cc",
  "key22": "5nnBcgZTd7MaEtXySPM1qFfUebdN1wCSgV4y4QY9qWHoCav3DxZABvJUXr1PbQT6bZJi4CFnrNSUHQEjVxi64GXT",
  "key23": "65Q3vLTfDzj74iHHTJBjtwfe4eaXu8y6CNgfAMMBLJhKBUbc5tKhmLkBR5coMX2bVbFGfN87DF43poLYAjwBBpA4",
  "key24": "5CtvRXLJERRq2PmcZ381oN7Q4jLJYTjTqn3oH2FXwiWLFunYCd2oRo7rxhYuwgM54z4TyfJKmYbBKtF8knYnomVn",
  "key25": "2QZWJCa8QgjR76BzskJpGV1fc5ZyCDKo8XWiozEeMHtwowjNVzzMMDe4HTQ1uk2489oNibHpAYpECUCUdXttsKNj",
  "key26": "2sqyDKjBJGWr9soyvhurksa3nEeKqFQuDg2nyttH8RL4Uxpy7Wrb5b3ZYPMmSXiPdcYveKtUrij1dJZ7ptA2sVaw",
  "key27": "4Rq4z3kdugPdWS4hvpWP3EBZB1D3RCzCjW9G5udwfeSASWeMtZtzBJ8wwU7zD2LfXFZFtYZu5RgWqEyRmDFJvEuS",
  "key28": "66GLQJyLJdniFAxeuFG84yUWr2gUnTPoEEhUd7iR6L57sxxNs8AZAFBGbqKxHqZSuFvtcRcFQySnWE8yQzNiJ6Hb",
  "key29": "5wZULvTxuYiFjhCqnDeGcKvcJ46iCtqt8FwXbGTefKMdoVAedVHShhWs4SwX6W9oxtBkor3At8zqSuzDcPLx3wAi",
  "key30": "2WCgJe2t2mHDShJgHBVvU89f8kBhaqhSPhqX5Mp2bZAc9ZygftLRnkr9Cyq7yJgAZ4ntT6QJK56od2vj5f194LsA",
  "key31": "2BYMqJepMYb3L37tLNYu31AmzVxoMeMuP1UpWzjZnqK6GSZiWB2h6cUU74FLR4yETifQrEaRmWUdnBBzakibBAmn",
  "key32": "3L5s4ehsfGqvbHyqdJM7kYhMNC6R7Hj17tvXZ9u8Crx6S4SpR1JJqmtwuyj8giSwNxQ7X4NuWSbzmEd2j8fUBTeC",
  "key33": "Wdfd6VbTebCWtZD56tZuW8SwWkVanjRSJcyoDqcrZVYR6hduhnNE2WAdwbCujeusWZozU25G4ffYTzj8h8Y2MUT",
  "key34": "2JnpoddW232788yurCJoQhXfwVT8g8xKqmMHkRDtBa3FbPnX2aemkkvXo32ZXpRYoZGM9kDv8XPcKrmSChirV69a",
  "key35": "3LsArzdcUUooS15Hp9BRDoT64TQkCCM9WPCS86qAMHFHjYV2pTaQS4TWWZPjAhqFaqD2VmcE6wS8PNPfVDfRZ81q",
  "key36": "4KFzHJ1rJ8fpA3JAXAvPZcfgTeTRhcaGBVfhcevYRimM1LwhxPKv6KGHU65a3K69sXFibbX8RVBHkNg9ReEdhFqs"
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
