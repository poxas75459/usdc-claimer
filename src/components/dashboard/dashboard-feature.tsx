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
    "4d3BQU4oCGL8sG8P2QEgye1tQbmVg35x4Kth9MBtPmqHdBTs5vAQFchTjLkfSWWLqkSZvyfrRpjVtLno2DFpJRAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YE375UTVoqVPMmkRdHbWP1Ut7B99aobdYxfChvhSoKn7stXPs8kgHuR38QDFa7heixyRMVDJ5yADphG9q9HEatW",
  "key1": "4zZoWqbXxuNoTyegP3Br4tPkik39ysdvWwXisELXxhdMEDxLh7kyi9LRUjdE6FNa7tNjbktawui8XbrKDdY52Sh6",
  "key2": "aucXXPWh2cKgxYyNHbzS1CkgS4ZbWcoKEFjQdbDzx5ZdKWfQh5RtTPvJu8DnZfjyngP3JATqGSGu1JWmeJPbKW9",
  "key3": "3A4SeTNQrT9GEriuryUnYjns1er3rxxz653nR91bva5qg4CBmNYBgJZRUa6K7y4H57nNKHUMCuYra3L2DuDyYUxi",
  "key4": "37o8exVvZ9V1eK7xZEZ5HRRzZTKusVeyrTjBUZQNcnUQjTzt8qcLa14jzdJLXoEU9Knhg9YWL7sJrazXDLPDDqTQ",
  "key5": "NGMrg9KwhfPwzMNcGbbSmxZiNTiMqmqJo958H9h52R3F4CXk1Rd1DyVUqsykcmrUkShFcDa1YwjDcArDHPkJiVn",
  "key6": "ErD2nrkKpGnQvhNtM6mQpwfm1QYhaQAgKD2gCR4VmPcXsC8VV2tkKFpM3cq7H5G7Mi1iJjgbSpyWiby9i2hMrWz",
  "key7": "UWyKPUede4edHZJRUmwWvQ8TzrVnEdEBX4Z9sut25fYpcwipZU6yH7s64PT4FRFx49Pyct6zqKvGiwxvzGq5s3T",
  "key8": "2R5Khw3SNKbnTt4bq5Jdd5K8NEeB27VY5AmcbAUKPQjE3skhVNhZmQ93oXkaQAEY2mrHaFvBBKUrbKm7crHhYbim",
  "key9": "2YTu9meahY8dPVxuLFwLwxhsnQAFLiorbBxiDr2HQPgj5hhVRB7UFMLf5gucM739zUyvqxcSyg7KdQZ5bDSKTBSt",
  "key10": "3yNGTEY8XmeRme5BXY4G2LYWyvwX1m8y2P1zwaYLTMkW4UjbZJWbEvAwQ912D4gcqF6a9FVyhcWrWt1AHYvAzgvU",
  "key11": "2reA5v5nXC1HfsHTJTQzzXEcCGRky6FgPFJr8KnNZLRDf5AbPxLcf4etSpRsMjkW5xGjbKJ8kMhacmDEkfhzmDDX",
  "key12": "xN6Z1kZYe7FwkatmtGns6ricYB8CtSkTooNQhwhWnRWN1iY4vf2TWXEinRyMzi6khWbT6Gwey2pvQFqV8w3F3zF",
  "key13": "4W4BAL3fVN7Yze5sHQ3XetP1m2uvU8cygoyQ7tMcfAa3VqzMTNMS9UvvzFH9T3ZkAmF12cvQus2jKnCXN2gjVigk",
  "key14": "3xwjMQeicZDKYa2DRERD2tiZBxzV3otLV9iczahXjv9hEmvwMPLV9huHVNWaqEGhCYNZn85RRp5THwjAsXxJ2vtG",
  "key15": "uTREGsyoWicm3ZxxhyFmNmUdZaDHjGHdHWEV15W3sznjGLBAytJNUres5wWgz9zszzEUwwNiA3MDYVgcQ8FRJdP",
  "key16": "5eU22XT9UAq4Z9PYMdRGUyPb7jQaUK9sPq4j4a3iSuwbYDmu4h7bxuNxCHU9hM3qqbvu6vMExQoBkkiV6X1GgrjW",
  "key17": "47EgWyAiVzBWckoPN73E9ZUMhEHBF6rRbDiT1dcKviVRdRfDUmy4BKXakZ8xAuMdTMMpG69T1H94ga4ucirHM58q",
  "key18": "3jKFBVYbSTHoiBLYL4r7nHPWXov9KVw2yDPKVEcFfHqLTeiugLRRyLLuD9UmzyzPVyBTsyng3HpBwwD2Cme87sU7",
  "key19": "2GdWoJSxNTjLAdppomcZMgdCkdhNeWg5zr3sMqRDxNio8U3j1jt3cut6CB89qf6e5k2ZwX9xAnywvTEtB8cogvTR",
  "key20": "2hAPbmxBQ5nrx6RgWPRZkCLX6k7cNWzyyR46ZxtmyaaYcT2vt4FDiVbu4nNU4u5WgCLHT6HkypvDgRGchSwRYRBY",
  "key21": "3413F4FaNptCpd76bdQzxNgym95CtyktUAtWmFoT8sh41ovynha8SANiKFCVCigKSCnNeudPo4Lo1ymP4cBN3dhC",
  "key22": "4YaqMgpb5xDuSBdWmW5t6M1QS4gW75LCukWhzUJwM6KixsVcrRgHyCQnJcWtz4zqwGU497r9st9GGixP3oj7RBn2",
  "key23": "36AkuRVTj2DTJvxdTAbV6TVAa1e5ZTz4wr3bcqmZucmkksa1evfkdm4cSi8vZ4bSm34MZXAmUfUBaZx7NCAE19wC",
  "key24": "5w7JJjLGSRq6sysEjd4wrhHFP3FfZMGBK32X6bHDR8LTEioSfXKLGjDcVwfZtZwdiLMnTPdNQDVPv4BdP9kJ2ZdX",
  "key25": "4RYEed76wfwRk6JPqihVA715WbiDB7EmGvDYgHvmyo29B5MiGCidq2pdce8UqXvySsdrqHqhg6az8tqHu72qmWyT",
  "key26": "2TUNsgXPgaHcTsRsNmy4G4zdjX4TcT5rnXCYzso78CyWdizzyxajuwNuFi28rKnHSwtQ94971yKvoRKXqDiyA7Mw",
  "key27": "Wf2tZNEEerZpA6xMbCzL4Z8x39XsMePzvpnEuc5nXxC3eMqAS1Ydc4NfzoEHP6ye4SZpb4hXeTv1SL3pSojjbGV",
  "key28": "23ue27F7WxyKVPwoW8zXQDte7PBRUXqZVM35zJN5NpxMpy7sf6PYoykerMYCfjqVBcYNY15AZxHWZbe4UoHNahou",
  "key29": "3XBbZ1DGjpPhyRntX1HoYhtybosST4T4Q49nX8RhzTdi1baRoJxKUqtPkVJJwrYrR5VjcC4mcxGFPmpDRax5YzTA",
  "key30": "2nit5AVh8hmnnHcGfydxnMWRNDn6pRu6APb5kDMvKsafDkPiQpxeKsE77buNV1WTvCnSY6zj3gGaqLm4txbkJ6iL",
  "key31": "33usBTJEVmX7gHgoMKgyU4rz6BYxPnbjke6am85bp6fQSD9iqo5RhqWkBNwTpfA918QkjFkBZEsUTT4tEWaTLt2N",
  "key32": "5FPZ5uQrvXknBTyXD28ncg83oRckKJ6dUyQmLhJwJEtS2bPd33td3a8zHC4cnNGF5n9Vh4WgprKEhL9yPtRzWmXN",
  "key33": "3oJjeDZajh9CBvJE6TJATLn4LTFWRB2AaQsTj8UW4eN6PZ86jKNC4Mw5hRdgz8jtzbQjNcYZxT6QswuWWqxsKCbg",
  "key34": "2jzjg7tHMx9t3Nr7pypTEqBT54vbCbXMEazAaQEgYRmScGdTvThpXSSpqvw2HDFQ1Ga4z5fSPYLLEL9VqffEPJSQ",
  "key35": "576xyuSeTWZnYyxeZ1FpUNECRkfRbEM45rYaHmyNekJs9Pqo1uLUNBiFLPpzZWjaYNP1C36j6o5B9F3poDCScJvu",
  "key36": "35qqUvk64CT7ZFH1dKfUbXsnBaeoj17bgqifAVq4NPkzh17E3H8D2Aj2QktRvkWLPp1hzb2Bf3PuhRwh4u8PAhS5",
  "key37": "hzQmhbGwTsJpvtmEzuNG13iTmDTZhgkJi9mMSmr2pdqy2QzGxA1cvEHPhFkxQqQNS3PYyekUSDDepNJAPFNEAKM",
  "key38": "CRWnU364huT4eWJiYk1cLKBvet4dBYHjYgm5yLVjtgvRGczaAo41V8fudHootGwvLx2nJbmnLYYEdW8DhzgwZ1P",
  "key39": "4265Wdq78wnc7oBqZhr4eT9u89qsTwsGvUkrF7hzVQiLTB6cBVg8oXWM9yfJqHeLkFwicwTW7SVZXDPLzRCkLC8M",
  "key40": "4FTa1ZEPT6QhNwxURV7Psp3zfit9TrdHMF3NH8zmgdJRtJFgEPaDzvLMBzx3iusev6izYjULEroT9aZSRRycXe1H",
  "key41": "EJHa7faZBp3drdTiK39ZFPaT9JfEeyi1671ZrW47qvr8qbWEMx1yTBm5r8rnVQk655KVF9s9kWL4GyiaeARNVKz",
  "key42": "2G3Z3pSmLVsWzoBMWf5eQbqfhxsG89HR1wN6ceepKDRo7BkaF7yg14dGaAnG4ciL2zzUYvRSranCcaGt1AAC77vu",
  "key43": "5DcJ6jRBfarwZ7zHTUNJAsfLXaKbDxZiLBcqjJGHNsmufMbNb3uoQAr69Xn9QgzphjUAChX4G1SJXqBSqzBGGkwL",
  "key44": "2k82dBbtBubPqk68raP65ixNMnFaN8Tjx1rGZBVpL8HcCDt9vcZ8oF3jXET8DxCfALrVV5gRQJqw72ZrLfBjpNA2"
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
