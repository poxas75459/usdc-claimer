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
    "3Lc6ZhRvg94V2nJnm6BJW2xq8fcTFiNugXKUMCPGAuomiW4zdHSN3iXRgxdR15LtkW36byPWxtyvene1HyAyuQcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BwLEKj4cNPPX6XZGt9WZJbRV3iDz8XqnH1NYcXYov6RmBsrLwDD1JeVWdbUXaiWNvUmaj1h64imaEjbEVWfRT2h",
  "key1": "5d5tAeSvkFatTuLyj1mizegGojYgQv1fLiTdZgVZjDB6hqwAmLywzj1HmHnfjasLr2bqNPXbEWaH2WmztKUw9Pee",
  "key2": "2jyzDsEY2oi1vSAg9jWjMAwyMx58bekuFQ3GmVmo4PiX3u7LqMqyvrxhzyhZQx3kAdckLLg6jZFhwdqRhuXhGUDY",
  "key3": "2ZkLKXXrNaJCT2oJzFaiTtqDNFgXXy8efASEzNCHA8YBuFngFM6YpgeoezpXzfCUcWeSYPGEEqpT14JemEhqYVSJ",
  "key4": "3sLAiHnLnpnaSLKyrU3HTA7FmfWvMAjpPMv9WgUikN24QjAzFYAQoZr5LRsGTxuwkrUGxpEkKH3ytvwwWRxrkisw",
  "key5": "2ZtEwFkhXQfK6A6bVtX6ZTR7ShNFo92faPdN7wBBWp8EgmdxXDWdBVANy9Gejt7VuHsf7S8Up39QPXB1zV6n6vM5",
  "key6": "3keLrAMYY28NhTvDAMS5oihMSAgxJ3g3hm1cno3K4kF5ahZnsq2ZEQ7614xmXpfAGrL45vZutqAut5dFBpy5usAg",
  "key7": "4AobN2ZryCBLAasJeEkZeCw2o2YrGfztmf85TruHPWQR3fNjNHfssyVKZVzTVH1EdNTmbz2n44nPN1kX4xZ9rvVu",
  "key8": "3gf4wD61BEYCd2wJCwK6QzmHEAxbE8ubAWVruwgGpYP9YTaQ48SxHCQX8dH4xsCWAXmepxU4xGpG2yrvBeVPCQ5f",
  "key9": "2L4eUBqsU32XU9BNDTsJPUuFsBBc1UZCUk7a4W3Qkd4Qc2qQ66V527Jt2iDsgwnuA2QjxS3XVF8vgU5YLEuwmw4A",
  "key10": "3BcCJUaRTmQiTesVbapRMDyvK5V5B8fxXRxJEExK4Jofa5iU1AWFBd1CSi9zcQG74wLQSfeH9y2iMfHEAhnwLZve",
  "key11": "4QUBGsRiduDZNLk1ASz8bLdQmgedLcHWcgDtKRDp5nJ5SLDDLNjhWQ6Tzdp3RwFYHfMWdrneqUkuRcXdN5dHuxfd",
  "key12": "2vUQgPYx5ZjQ4Tco8PTvkt4BjNC4Fszm8TqvrCtKS5VzrRWBpV4XK2Bi6qQhkgN13WgjWjZ7X3VpTEuq6H1z1Nm1",
  "key13": "47AUEZ6v1tGxwSbrEWmSpXp7HbguUZdEGLXG8dwDXj7oBvxgmRwGzbMEZnF3pQYZbZt9CFGZiBvXGsRR5bGmxedk",
  "key14": "5bDgM6bZCYuraVUguhsuHmmvaJJTfQqPjPKnt7CPDB5dWChuR6EZFaCAzc3aAie6Q3msuzJsVAqTPVkr6aKLLmK9",
  "key15": "4Skcuvn13Z8ceiBhuhTxRHpAdEEvruW9VuWLDoG91gQ418B4tFW8XsRBVqXWChpWbEbtN74qH6gLXqwwBG2Spi2w",
  "key16": "EdPVmndq1rK71aPkDYUnuqTNSjxuzD5p5cz7WV2VWHJsTBY6sr91uCBiapxfzqN4Ljwuv9wpajrB3sKnKzRVFqy",
  "key17": "HT75GuSAXmegdNZS1mtqP1hZLftW7bnGpTL7FnXxTvYtVHGLKCc9NTwFchcNJsYEtsj9FTreuYpDBgWaZRvSg66",
  "key18": "4dujGZapFTZrQHEhqKVgvxW2PU74DSdPhPtLvcgCN9khdrRLJ3wjBq3a9u5z6CsVbTh8ap7yCvabWKsNtP2nZZcH",
  "key19": "2T5KqddcsUBXU9NyfY5Moo2QKM2RL6VUEJjEsjtHSxLyuNb6T13RNRXhoBDvq6VD75g6K1tpmhxaLYK3488sYPzq",
  "key20": "5nuL3G8RMnFyR9dDNoU92b1KTHXqyuoj7qjnrULs572UVihh1u64ybLFqFF8S5RLYEXFz7njcinbgUrhB9TsYjMU",
  "key21": "5ZtRZS63JwyMoa6jDPmG8SRAfGqh6wge3mU6UaGnz1CSbqnAAox1Wyk2gv6vWpdUR1ZT9ESeY5cAcngNwrrufMZq",
  "key22": "Vb2yuCKt1796vpnU6f79WYEf46EGDCe41wBUkcvQkQWuhjrDnEXb7ntF6pfc1e2pkGDm4TyM8Cxo3U5z8TB3EJq",
  "key23": "4Poyv77HXBm39YL6bpAi8snPbxi7imCaEwpdcZLcJG64TKsfpgeKX3pmYouTgegJTrnZ5Chy2G85qULjSCfgGich",
  "key24": "5SZEfhtn8bCy5nLbmfNawG9a3Y5Qkain3fmv1sRCoJt8EeyiykVLvhCdvykjyB6W9ELE3pN2LS9GHsMbePqc6sas",
  "key25": "2CFKZM9kPCCEZ7rSBsMzi6fAWuLTrHrnF74gZY34jmxnPTNs4aoJoHRGVw8f64zmrwoeckjK1mo4JbNy8TukrQv8",
  "key26": "Y5pgwCSfVEVQrH6XbNz1Zt4rcdhdbE4yKzYcjVfnRRWLDQhEMdxHwnrdAowSwbAHEiMLNkdzipLCcyAFqZU53aa",
  "key27": "2mFMSCp3miJxTYgdLh6qhLSzTDoPeNKojP2qBQ3nNJ4fnS7oP2EJMZfB14So2dAdxVbJQkMzRaZsrhRjVEnMrk1f",
  "key28": "5bQZp3W7sqw2khhLTJPJ2mx3K36FFthekLNwvmZ79ugFEB6aYmwGzFUsziN7NB4xn99QoiYq5ALp6EAdWFQSKgxr",
  "key29": "5b1wQoJBsUpGqCDMXmxRvgQEReEDYfqcaza4pbfhDhnwByeoXadmDaad9AaThDBYSmrrFFQAtP3drcCY4SLEKFbS",
  "key30": "2y4tQUBvUcgS1AXeLq998tvNLiiEbU9PyZNFtfr8Khbvcd4DGUYq3ptrH15B1Q2QuFjsgw9Q5XbghSJt8jKzUpAL",
  "key31": "5sA1sjznQmMXjRmZ2XsqmYrTtoE7F2Xc3j7tRVuFKdWuYtxyCousqyBEQkQ9m2aa4Dmr4Wnzp5WG7cZYiL2QSwX6",
  "key32": "a4d9RFSaZgQE2UBpa6Ynb1Y4RPMuoU7rLAZUgRuvimnYPmqF9mTWodZsBVabGTNnQhZCkSZQoBMeJdKrrjdLzEW",
  "key33": "2zgA8z4DYQAdtAnB1fhHZB7AQJuqvWbR2dicJSnsrcVqbpHdz9PfvMN3prnqU43vsRRj9Hq7LN19xHe9SZtiN63E",
  "key34": "39zsNW8fAtXH9HqB5PktL3zFLkmULGq9eWBqPynNn1zQftnoES3ycqtgKCNdMKrpLv3vZrgvKVerMbxauKtdQiNs",
  "key35": "3knXNiUsLF4hbWDgPUiMus5L1kgCHNYPY7NHC8GUkumdRCneGCito25yD5nckhSWa5DT7t5mwjYCeaWkAoqNvzK7",
  "key36": "TQBP5fzCFf4fHwSFcFVeqCj3nWKiWDneaSWGQ695GNNwjUq6DZWRfKDkACuXM7RqmNvCBXHTZ4kHLzzC2a3gEJG",
  "key37": "EPa1UMNYSmQz8pu6quYZQy1rPemPwq7aQQ3CFS853VMWFEx2TLxWTKajAEYCCZsFXdsSy47kLMwu2diKogQyK23",
  "key38": "WMgoyWadU58PahGwoveWRzkP1Y4zGJXwthXKLKNRDh3Epzm7sg3LbdGPVYqnHhqLFYwboBwXHuCTTVjPG6KH2ek",
  "key39": "4p2zSy7oNQoBqBR9UjCRsFx9FGDwLxd5SY3Dq3UfTh3DQfKoFZEW9o1C6xS1GSBMAyexZbdafwPGB6MvjMGbCTcB",
  "key40": "2Bv9FaKeDxhDwDFyo8vNpwsdJqFGCiku6dF9ZjUi1EbwF6SZPwZ7EZpvB6gG5QcJ77kiFzpzaPQ8oDNYKNsSM7Ay",
  "key41": "2PA1SnjcHTGubKG2kNmBtFAFC6QTmYeDaUU59QtFGGzkghUHm3GhDSrrXj2bHYzSg2gYs9aEDfBgJjMTA9iMEd5H",
  "key42": "469zj1QhiRZLH7tyW3dJ6B8JYXp3JPudH4xGkAFJqaVGXkTxDnyeqK6cXAogHMiSePDnWte27aZMHnVFXj8Uu3F9",
  "key43": "5vf1gCZNpyumf7eZN2veWQ6Ema4E3KbT9GopBV3kGnouPrqE4eefVAxNyLiLkmXKWfKoaVKmPpDD8UcxbTLPok2Y",
  "key44": "3TfJKCVhf6AJzeYzSa1xV5oSYDdHvxu2C1Wpd5ZYiQXtmYZyFrAFF33bded7fhLspUoh7SFus7f2P2SFNfwyPgtY",
  "key45": "3B9HEigs9ptddeTEEdag23Snt2zDre3b2kEf56pHGJMHcmvRDTv2H1ETgJhVGRa3m6YjgEkhQLVA7JFCG3PgxPGD",
  "key46": "5qu2h7SZ6yaYaDpDSbdZ2KCdghjeDGQ6u85FHzM1of3iaVehVeGVSRHJ2zaNU7NHNFi8N3xyrQafVoMyYSdL7c4R"
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
