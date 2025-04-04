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
    "Mer5r1BpNcZJWmQAjj7fLSB4Z9F7TgDXhLAgNsAPStQDttuAiyssyCumogKBXKinmXA1PtTWKbjCXUC5HHPcTtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EdSUNvJgZM72jmqC5vfY3WwYBF5p3dtwEByy8SxpvpJvpyNKtvoxZPQU2QmdRS94B3CVGaCzyJwcmzrLo8dYcyi",
  "key1": "5E9a1joAqLBNFV9dDLYP58Nv8SawtNRT4bHrW6NQoSTjXdgLaz2vWBQ66N2NaPNZ2GqimynF5njUWe1NeVAsvFqq",
  "key2": "mCjCaQdvYaCcT7gEsvuZs7xZAeMakoTzi2y4A7iKaCWpTWbDG7xEJe4jm3ouPqX1Me7gT4u9jMdtDUVvY4J6wnK",
  "key3": "58C4gCALfSn71WRbEMA5CKs3N5e7LRSzG5WeFcUafAwVcBaND4RA3MxTFh3yX51zcFcCmt7TQzPMnt6GTb61vKTo",
  "key4": "5oqDsimZrSh9XSPJgd6Et7FjryQycZMNoTVGQ8fMvp5e8isGrwtgVazFsA6FCGzheNKhHqD2nWuCUkRa33sKnUvj",
  "key5": "5JErX3E3Hr4Kt6fDwCZ9yxMm7jvnkcxqaTZUns7hGBJFi97PXBSoQr7pDnL5hKAcd4TxKCGtMX2vXdo8zCTHKdfC",
  "key6": "NVHKCE9ajvKSwZdSaRHDmP75ixzvefTXWDxYrSG3J7WqCib47eCsDswzrueDYaigRRisNaMgu7oVUa7iLc9vCPq",
  "key7": "4kSMHCXQS5VdMU1EJM5mVTxityUH86yHgKFVGgsE5bVdcvbv1ETqPXEcf3CmyfBVzHuxTvQ7BPyjocnAmnxng1rh",
  "key8": "2BFNjzzhVTTmxNXLaGZyXcoNSwzKsJSNouzdQ81q8hyYQHqDA6AAzqxQbDYk2pLSZJC8vRF35ST64UDKTt4GogB6",
  "key9": "3iBf17ARRGwQTHbEjdf8dNgi4dMFYY7Y9qG3QFFQMWLRLw2ux9z981jSfzba6UEmhiEkXMwgmi2ruWcn5CTNe127",
  "key10": "3A8Capp9KUsm3zQejGToqbNw6KGG16esnevLJqeZPu3aHZKkKoDp59Sk6dw98JXXPkhUo2vMvqmramp9Q3J1SMLM",
  "key11": "5SdivzYAKN6PwXMYbsMTf3NdjsdWmkFw48QWEWj9qyMMtdQVKZYak8XZ4mMoViu9UJDgZDF9XnVjzC8AnLRZoLrq",
  "key12": "FBjjackyHNdxVVWFyqBBKhSvAoAvgrYRRB1BQzkgsBXKwv4vBPhUDy5tze34cCDsq4HcVKR1asEsMKLA93eso6e",
  "key13": "4iHj5LhChoJGecyZEzzoj4pR4mWwE3Awd2SrLmVg6AtpgcyRAAZkwGL3NqH8DRSxws9piGkRsF71X7o1pNyusT9Y",
  "key14": "vtBs1FbxzcgXiTr8Uhn985XWd461pUGaJyCD2gfdGxgCw7eyheK9u2Zk6e4yY443giijjBCmY5f6QjL7szztAZN",
  "key15": "62wzt8ZbCSkBuGZtF7hbRfgbWVfvTqDc3fwnLikGUB6Rt3GeXENj1QB7VJk39eT3Yega69bQy71HpqmpfDUbFAZ4",
  "key16": "5UjgVV9KF1msDECAg3bQQgiC3BU5ncpCkd2UsmRWyK4dXLmAv1wJkkLZ4sVeD4QjTpGcwbM3t5EdrKnjFB7UANgb",
  "key17": "52V16fbCTpstAxTTWA8HXTJo22Gkf2vjcSUPLwttPg3ditzUpEq5aG8uVNM57YMhc2Zfg2Yao3ure28sPuRxuwfx",
  "key18": "3Tt9reGAjqmv2kGtG6AtRpcMaodk6oVMPD8kfqiJDBf1jKXNGDTYiM8YpjA7qmg3WSPaTSgLuTnXbHGzs91NdGSU",
  "key19": "5o2XwtLFqMVzHxSsyhZ9fqcRA6B3TqUfX1P3KSyqGquav3p2YBCKWmkMqqhQ7oWDvDrdzcXNoj7YhzA9PusLDm7P",
  "key20": "3XhUWdjjWg6d4PqNUcpitqdjVqm4Ss1nTHGTV67NQnpLVWQ4HSuXpxvDCofnbVgQtcrwDkrLuzTUwm8Z2wMVVmLs",
  "key21": "31Us9rqUWDJyQYYYcAdnLj84WzSJytHeVeUL1sgufwPgwNhTwUKfogcUz95CkWYrUh9pkPxJ9pYovs3R8bT2XSxV",
  "key22": "5WmFnVUEzyqoMyAhoZyoLKCgPtKe9ZUVF9waW4briHUdMDbMXNN8YT25jPByuNNtxgTXn3iGF5JFExor5X7Qtpqb",
  "key23": "NwTy9RYHUbjG9TkmZ1oVd8enhwLCSATzNN5Kjgq8V2rnLxTTw5BtASRyPoRMadwUsyrmYsJC3V7EbZdYm35jHJb",
  "key24": "4TpbBuJUqHGC79BWzVMqacTLbzusGKTwYa1oD9k3ZQDGh6LgqdmNZXHF3iaJsH295mAQV6aoNox2J5jyzGfs6gDv",
  "key25": "2g6iKqnMuz5w5SqhUZiMPvZLGXPKpscCnEijpQc178S5zxc81nnz6iUMFBvsNk8Ry4fVeWdxecm3731v7425SbnL",
  "key26": "4kCGMuKQdAxQRuRWmFyDGNv2epQF7FMZCuXhzN1a3411N7oxPL8UMwJeipKkaUZnWrWvJrAXMEy9cVFAFPVMDnpG",
  "key27": "3EVvCoEEpjYBwQ4swS26mYJimEHdvzsr4tx8Q5FNcQMD1Q1prpgtpV4p4W2YphXwQGMcTHGXP8Wwiz2Mjfm9TLUh",
  "key28": "57EraLhU4efGxVUVQYT5Nyb6LSSao3wzCJfEiW55ZYGSifRz2Fh3Zuuq2sYEvgsooTbaUzUfWkEsCGcDvaaykP56",
  "key29": "v5XS7UhhXkifLW9vFb9sCV8dcxvD7bCi7RVtD8L3hScCMN29LbRZHFhex7GSyFQqMvNwYUWVuAYwKq6yDaSvFfp",
  "key30": "3wcibzc5RYaPy4fqHvao9Eo4WPHQRLBfXUX6YVUtsvCGZQW75baC6iUGH2jpYmJ4a3qk7sYJSSmSyNSzNY7bBtpz",
  "key31": "5LwrJ9GUoHnsLRc87myqoqvYjkjmdum3Cjx8t5vvKLyVYqvi4qPLzfN71w6DQXGfYa2cd7KQDg75khLbmYa1kbxQ",
  "key32": "izDGMSgotsvnSB8K1gZ1UZLyyzuEDXYaRjaXb1a72bAq1MZ3ZSYxnG1ELERyWSJ3D7fJJaSj17e32YDeCUKCu9P",
  "key33": "LLXQvY4tNKgo1cfiLguZJSU6cSkZrungshmaefZ6njRNdfHqR9ftWdtwsSPmKLY37i3gSXkEsheuLJ6sWrzAA4N",
  "key34": "5tX2HJY1wUZLZndXQcTBV9P9jvt9v8KR8h3zaR8PWJP9AbFWBzhaCgvYNn7iVPEyqY6kxyTeCkCZ85qjPfK3s2DF",
  "key35": "3yYUDKC2FH76V2PHyCp6goTXV9M7u5rj7sYgBkgkzB4wvRbQbPZk1CypsqPGNagCSWnQZs6GCNSBD4BbjFRMHtP1",
  "key36": "4yA59NwVzZoHsQkXvbb1mwD5wQH52FHJ4ZuVVDqCQGM2LEt6DVRDd1feDBrPXcXXc4o8YHsZG1eve5Yg8M5iw2tB",
  "key37": "4rDWNs5rkz3M5w5bBod4GwhRZ2bq2AcbFYFmZQfx9oxFQgrq3PAUfnL8JBMifS2MHLvmzb2z8F6HVsnkd5FRHjR1",
  "key38": "4Psf1VKYCDBFfmzb312STqxXdKMqnYfzXkRZz31ZFJusSdQdYCf1Ky3dUqWurug7uviAmhHDCmP1hjtyuLufLXSo",
  "key39": "2JKnwnm5EeKuVv6wxJToF89ry8SthAu19e5k7BNrnqZsd2UjihsgpBspKLpuGonLecP6Kw6s3zsdX5TdGS2PjKaA",
  "key40": "5kpjXeghFid8FvxVZ8qYhqoW6HV5u5S3zgFsxh6WL2M5ZpW5gBazueVi4fAw6t46yjq8ywc5paXwRSFZYuqbdkZ1"
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
