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
    "52rN8Jk4wHmKtC497wWGr3afXAFg9iaqLhc7wqbGgJ6a5FQkDbwzHbwdWNMfBJdVkdDfrvD9QNB7riSGekVQ2C7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1vuirWe8EMmkKnLBY3rDyzqM54rG2KmgWkRFeYWZwKXhZeF8PxH42BcBsCzJ66yhqM65Vn8eEhBxf7ckuDBvcWU",
  "key1": "2GnX3crtPYvLq2VxvF8f8UruUDmwKhXKxGDaKZHrK2TYNHJNDEAiLA2NNHpAkJjXkv8FpKeYFEvjDneXawptobu2",
  "key2": "3fb1XcggJuZ9n46t932Yj7sNixfQXFABxJcTgxY4MkhQSK5KGyoFbg9QaGnTatac9bkTJT6UoyMXF23NizTbH2dm",
  "key3": "4jk1kDswfFxQE6zjnhuehzN6Uw9Z2b66iFCUVKhxc2XbmvCXhnfKtwuvy3e91Atyvyj23XH7W2aW42qznQ6KhBqo",
  "key4": "3WWdL5yiu38hHCU9XBRLEzTt62PPFJsbYAVcDjofjTboAwsurCFdMnDN7gq9p1tiPKXiaDbJxC48HwPLavKMK3ZH",
  "key5": "2zAHYk8EPFyfhsxU3nXKxdBYf1TjHcor4FppCDvrYZVcbok8bXxyLHhbZcnJ6cWbUty8T24yAPgCG9NGKfP2MMJt",
  "key6": "5wAwca2DEimWmD6n9FNVbGkzLsDCgmV12CwtcyDdLuexq1dYSPmahF1zaaKcRVMC2Hz8pTHj1qjuBCE2n2aSeWrV",
  "key7": "2wUHiPSnrxkXdFAk6JTVGJXQ21vVYNmpk35pkLFpQnkXg3vfu26XBi394mgtavUqf7JTLrsUqYE4M6KQwsBTxxfQ",
  "key8": "2RjaFDAJTTKDL7nRa7aS6zEBsMF8L1cqPjcHHsLvaHP3tQaaiU1Q9gNj5PPZ19seQGQEv4scSD9hF5xguL3ekacJ",
  "key9": "2QBWrgUBEBduPTEHLoMGmhkfosMGFbQKVyZMUYqR7QTswb2cFo3ebVyQrVAUYDwoBY4ntyjac6wvrYxqfPUNqM1u",
  "key10": "4uAnnZtxcZcr9zTVRHKmgppZdJavAU5fE5xGTNU7aqpz7mp24PZnvdD5Ay5NGHHvZZtuPGMYCMYzC6CpSszT7MR8",
  "key11": "3LnDgfzYPoj66bJX8LzLoZQN7gnTTVBVHzMa4p5fXU7WfYQgbYU13NnpXDHb9th7xkAHYM1jCZv5CyDRQ84tpnBH",
  "key12": "3X8HdHAgFmM2QgDx9vZH5TEUMhFtwkY6Vv4SxC94wGo8mUGPbaVLaGeoqZX8fNZGxNHf5jckB1nhjez8cRmkYQxH",
  "key13": "2kDjPFLmNPDz4ePRwvRo5CbiS9BaLrrQ7HxWZTnGVWmrm3SQDHW46UUiik6Mg8b3xAqTHVY3qaBAqmsxKh7Q5MH6",
  "key14": "4UpMf4ZLcvHktftUtCVFDTZdHMrRv15338NxASTfjhYX6LVXZcG2fAfiDi4oztrXhWvVD4QkipnUK6PDFaHP3KSo",
  "key15": "5RjHocKxmR2LcC2tp8kz5X3ho4jaMKgE1M4QX7k665Fms2Ag4KNEXVBSPfK5QPkX8d9D5Pxg7NfK2jwm68FzL4uK",
  "key16": "kfN8SfEoGMwVXvfeoiShz3kaLL8Ajwh2Nv7P4X5kes5g7XwaPZU18vUUhnWDBBqnKGP7XG8KdArdzho4cDjAX3c",
  "key17": "2vCWoN5jFTUJH4VZ3apU6CG2RWhYAo6d7jwe8HzHbL4XNAQ2EnpEjFYQstU1nU5XS6dqfajL2B783YA7Vn9QwxR8",
  "key18": "hr5Svp1Bb8FEpfZ4GJrvWn7i6th2RyTn4CBmKpV96jS8W1YhZHH25tk1rBNhXZZtCLpo7b8wVRMoNhiot3z8SjV",
  "key19": "298xYt8CNahXppqTR6VrFypmnpHL2ZoJBaQMfSUZtYZ8Jm83XohRUFpPi5PfVUMqqj6C23x2X46HaEjdnonD2Jpz",
  "key20": "3itZ7tJixcntyBMBNZdsbZ2SyUZzbn6osFczWB6PVvSx2qsjbqPLHcpPJeud8akUq4PHusK2pN7PBA2m6mXvNR8o",
  "key21": "2BoR2eVJDMmqydR8wXNcvDeTkun4DAYg2aMYMh13ZEjiuw3WMS6on8WdWj9hGF6KrqL1MnhjYAbg1TYiUEmkgeiA",
  "key22": "uMKMGEqRDQLCYED1G8xYwSsCiLL5p4fsCSqHZNiDsPhRQ14Jr1yTCSC4LnfSSyLCdiJjvPthSET9LsQpbgiVdVs",
  "key23": "22g3VBfCCidHsi643TJsFfswXrcDV5TZvjeGvRWUMdXcVNffQgP8JfdyuRdToyC5rmGtTSVmunq1vL82RQFamxp5",
  "key24": "64czUPwEEbvMbatwtpDZ88fQBYgges2Y1LsAcQDxVpp4inuUsxRmBvhxhez9EsrW7SJEHdmt77xkBpQk8f6UpBRe",
  "key25": "38b9BsFxqMhNE5XaoGm1A4T9Smf3Ki3PWrer7a7wxoUabVpV8JBe1NWaKy2NdvJcdZnGgcdLzXjLom48U1W3dhJM",
  "key26": "2o1LJSCkJRwXQQMkV6D8nsvV8rHuR4fvPU9MZHBhqRHFcQcApvnKf93GKy3PUTZvCTdb48FA4qVKT6MZW2PbvbVf",
  "key27": "x6AuSzU3vZR9ZVDWZaWvq6uCZoXLmAH1DPJripP3vnbnJ2ozAbTkk21chxbSxKqXigxwLrwTtyLNydiWHCTXe2q",
  "key28": "5a7jz2SgxuKsWv1R8pjVvtwDsBqiQaBsEF1J8Szvogdw6vWhu94eDqzELJJAqxQb3Zo4457SFbPVTmYeY1GEnKh4",
  "key29": "3HcjWXxvHG1dRABncozGJqsTtE1uYMXhQx3uD7pKvQM5YouvUBNG6BsYKsMJfvH6a2SS6gvBnjd1XQr5YuL46sLM",
  "key30": "5oadwX8FVKWWeETFTSA1b73HErnvXsoBXntVSDkrbsgH9RYKNSsU4pXtauQveiHcfSR8xhAyXYQPw2xk17KrY4NY",
  "key31": "3vwK7aP8x6shCVPJMBs4sZ1EMpASG3qn9pgKHr57Mz8z35cfJHYJzihHw1uqptQKZ4iDmt9KxYTKiGqtiAzNveb4",
  "key32": "5bRud53xkxunUxZAAA2TKKBJoEVLvTET7AwDLeokjN7xvVpMriyJMLmUzrWmfsBX5zMhxctnLfwnrztmQFNCiXMR",
  "key33": "iUBXEkpqgPvNeDy3djPyMcPf1wgQCWKAc9sBwYf9SmV68uDn5GCNmxULz6Djqab9bGvSf4PXH8ezS4h5SQdr67S",
  "key34": "217D17gctrQF63aY3uoseSf1uhnHkxfFJBRxwq18tTnWCLHrSQfABGLycJD8wobXvQCFwq7UJPMTrPdLTPh5CYkL",
  "key35": "4zXtJiFaDJyUigDpjWxUexqQ3WbRWszDLJ6ge4LBJeDZHQidQaBrXS76CAMsBm7J2Ldz21rgtDyWTMXHDStssmcv",
  "key36": "677Y4k15QmK1wrFQirZ5dkeFnJKpFuKq2UbrDWKmWodPuRdUYb1Kjh8gRSs9Pt3Dkj4epaA7b2XPUVngjE6beFNo",
  "key37": "Uagcw5KCfM9p9b6kHkfrCiEGQFRmDFgSDbzhdTEiicmspmUGJ2vhzEMo9jJxcn6fvVBTcBbJA4HwaeVUX3LE1So",
  "key38": "5mRE2qW8kPk7QiCnsAZcdMNKN9oEvPRCCc9Kf41KuykdtGWhHgixpUQ9LB7bs8zkW3o5945GWuFRWPEsizFozg9Y",
  "key39": "243onANatFy1Hy2aJRfD5UgPzsG9dUdX3VqS893yH3coy3GcpGDKcmeq5x8jHcp4Hu1f2m4PNDr3tCS8TQPjoz34",
  "key40": "66uKtC7eX3JSBXWv7PUueLrDWVDN1Y962mZd2SjBNLCATzu9w1JC4jcMraSmQs3oU96wWjnPooXpaH1aymn9tTfH",
  "key41": "5CWKNx6WDnf1f5u8LzEWc5n3GdPzvKqnmH79dCksVffmTEDkWJmb2vcwRPwnKdS1fhufcLW8qHcrKohudyJeEiLb",
  "key42": "4eBapuCcGFAX6LKzRCPiWHZV9Xyywrm4GTQkPLKiwVfx7BtCg34ww7SppqV8nLXjn9yZCYaesWFJ46DZXURP9WJm",
  "key43": "64R4fkyALSyPm2eboM1ykaK9ftvoVAsH989BuccwowevViLaapgz5E5bUoafTp9B7mViRE18rGknVKW58AaoH3wa",
  "key44": "2je3GhkG4ZuXxLpT9AnDzZCcSPaHkT8kHj5iNhfyNk5LYMpSDB3QNKFfqSFXiSkyJG5zX5ga1L3UYm1AwAGMgncs",
  "key45": "qMykrYqGYRmmH9vvTQ3tpbiKiz3BdN4KSE89YGTYisRbJ4zVvsawn2DQYxM2wM5DeunxjtR9KqXnhypZavz8dCb",
  "key46": "jcqMRZoKBu91RAxjg8d6UxNqu1Wm3t1s8b4n5pAqcp2W47c2qyp7BcLjW31JtcwhLR9pfLsfa1sThqNhvUsTzYo",
  "key47": "3WzKzxpoeFr3BGrATUxocENDAdeEeyPbWU2U4HU23ri3TwwFy4BSTTTgVg3CHjHQ9FY6Zs9d5bnjuR8y9bzRqAXd",
  "key48": "5ehrkYHk8QcopqitjJiNBqsuZDwt9B19t3b1hwGtkpsnkU4c2C21uTDhFs5xpmKxneecBk8qRQTc7k8ViaF5hV6b",
  "key49": "WFxaxVv2QugaVGAdPzp8548c1nj85S7PJp8UQs8QYCEfeo6nN9hCaUUN5p617CNhuwyhreacVV8KsnvFYomQgSL"
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
