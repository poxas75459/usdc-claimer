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
    "2qr83C3Nivc1rdGuYCTCLQBFtBNnGmjGD7JDTxBHpho9iox9HZWgYUaXcGa7Jbg3kcxcQVPDA5ebP4U5d3WQ3ozL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wL7JfXc9xyNRciLXSEBD9BUezgDnLyFQcAiiTAgfvAPhrLb725Qx2cMymdmf9to4KCQrXn6DtvW1hPBvk6hHMER",
  "key1": "4FtfaiWaFJ4JRg6zynnho18fHussUJSEpeWkhZQLYir1ot9F39EwSHmNHckAePB8gQ59NKKKXBPm9P8K9sPSKJjX",
  "key2": "3LVqL6g1aYfP5yE5s63Ao2rzt1W7JNJBxRA6SryJGWku4SvCmAmNiZW7rVJ4rLonwzsZJpemme3UJDDJ49c3x5AZ",
  "key3": "3ZhEGwNNLvdqnZrxe266XnvkfKiHnJoiLFsN7SgrkgR8JYbrdKKtmFhTZbc7kQex3KYg4QYbatBYqjQ63bEA6Mx2",
  "key4": "44oAk5tnirmPU2PUTxMpt9un7uXxio26eP5z2MSGQXhXaVkLn1VmyehMwANa2m8pH5YXMdoZY1xxhwKYpycebsDm",
  "key5": "5dWtMMfaxZPxQ1QXXSk84haUh4SJwoWvR8toTX5FYve5BPFmfDKFnv6CFqu5PbFGC4MUQAeEXBgyt1oeKSYSzKNS",
  "key6": "2WEzw4WSYT3Kyb7QpdGfxa2EUTdSUPprTPEB2dh86xvum1tg7LMAF9tRuxBKRJswE2Q2PoXcfFGU1Vm3ES4xwANN",
  "key7": "2Twgnza7iF9hgQrQt3dNP7mqeG5etTLBRqbkZWC8UywjdNXVMrUMJhXUenBdgHwCsXDM7oJ5P5gJgTHnNMoJ6Hmp",
  "key8": "2ZNXGTV6ZLiqvYAxUAJtWihR8YzwasK5qXNKUDgaeiWiTxsPoax1QdetFpWXZnw9ue68bNwzvKAQy96BYNpUPGhq",
  "key9": "22hTfy8u8jvsQ9QAdvuLvM76usxjeipW4wu25dVMhPaXGFdQmkVTpb1AirK2KghtefZ76H9wS3YjxRFepMJgXo78",
  "key10": "4FMZuNcgvv2QBacDTYvZQntwGR1C3LyCjhU5uCsaRozy3xiFSNHTxeZY4XN23BPHuA82FrTjrFTU23ENvoXh7jDZ",
  "key11": "2aJCAjYLm4R7k6mR3AubhNmPEZu23QVepX58WR8zFFQ4bSZmdPTwcYBKf7bkGuGnrhsVsBcfTSz9EeT5iUrgUzv3",
  "key12": "4S3Kyuj49Ey1PBqkTyPupnYzwUFmTk8sv5XSJ9vsRkh7Dv58JKbpmMaVywiFdetqXFdAnMMYv2BcqyztRFbq4Vqf",
  "key13": "5pnbo7vTsmY6SB8ekgASFqNVA6RN1H5Q95GynTySKmgf6aksy9R6hQyFaMKnYLNwtfz9JfzueZ6h4q8ANypc8gjB",
  "key14": "4SqEw6RvUJd3oGX9TQy62rimdog5noSfxSLyASH4yZhtofr3MZPfGhgEGCEGPGj5EhXmF5EyRz8jwgEHtM7BqcBb",
  "key15": "8AeJUDxdp3NowtBLQKcTfETC7CfzQZdtP2epBhRAd6WJFBiujriC5G3jv7YiDEieYbtcTPdQsTVjWgfuNZUEHx7",
  "key16": "2PTH4YBJbYb6nEj3DQuvWgqxFgTK5Wy4dJ5tHcw66SxSQtBxTDtRu86L5WceQAGbpRMHVp2Tswng1yu42d95z7RC",
  "key17": "2TwWJyBx6iAQUPyjTSQXgAR4sgHDUB5Xs2idui7zpzUEhagYUKnaGatYrc1NxjzYbXn3avbqZZoqkA2RMo981dVG",
  "key18": "34JXko3wPTZVcviFMSxGMsCaRfMMvsDxjhyv51qRTK4gC8RWJHDsqfcCYQDnCeEf7WFScBHk1gtgjgk5TRxMhX9E",
  "key19": "4Gzn6FEGxbWzpG2FYPfghNWBxUzB8sQibmmJT22sxa4vYz6a1sczGJewqkoyK2L1RsPAN9e7qitc45nYeA99kP15",
  "key20": "61UEEshoN3KB4MXB4X7R2TMi6Z86559o91XqMDp1gVeyw2Y4Rdvew6wqqqhq7TKzeLstRyMzLFAUUrJ2cmbjay4D",
  "key21": "65JrLB8CyEMH397fyw2rFXWieN6wYRtPZkAKr9oWPBPVopewz1A8UgPaZVFE2SamokdH3uAGGWqxzkfPLbEwCjn1",
  "key22": "2c7K8YVUTcPtZKFV19SfwVtfr1JH6NouK9kiMWnsmLsWkat9r4axf7U6g3dZyYAXKXJjWu6mgn4BmNUREBuW6Nqb",
  "key23": "4UjHGY8qyvEbVKYcBM2kQ7Medy1Qw8x4pQN8tYdmcVLd48odsg8fDsRFbmvq3nzr2ri3JjERQDv2zfUwoP99y6jS",
  "key24": "2HtmyQCnUcC1qD5jN2Db6W1XtQu1VysPAgDMrQ5P2hjJbkgpoVqkUW5Tg63PvJvNd3ULQHTDExLJhiGmhiFrv5s8",
  "key25": "2JTWp8gPiaP5B2hUyNv3xvtuJ58zt8ikQkTDxEGRXTMuWJFc8fDcwgGifvAebG6vzMX1c2DwAJDQvtQeQ28GxP1r",
  "key26": "2YySAVuvpSVvpRG3vj9KnKWRLPFCGnFAHwe9snJLg4FpJwBpG4yhUrbFYvAjBKAeAEJ7S97YZncCKuUNEyPWkSaQ",
  "key27": "5cMJSWcN6RmsY7V9n1FoyV5KS5vhk9sh63co7PaH6jKbmyni9rvPqJ3aUbcvwLYPgbQ4u4F3Xwy19vauVLtuJyyh",
  "key28": "3JBHfMNBnysNWGzazzDhpFoP2KrkTC2ujqN8cdvVu76iJkgjhAjBg7pGHpYJ5Nw4rz9ua4oofQAFB7Nrmq3ULSTo",
  "key29": "oXFXm4sqcZKTtAECSGReBStfCrLixh6upYUg32UXWnyUrEHPooWYzYqMZAjCFem8jSPTdDWLGHX3tQyukJNr2Qp",
  "key30": "5F4nSYhxiDpmyh84K2vCPqULx6QvZQxLKEM7wSmdb9HBhMcp8ovPUp2nquL7cLxw5sMPXkjr5KobWbe58i246sFg",
  "key31": "2CPvU1wnq2ZQptdpVA8dzyNnpMrdxdy9QHugPh7swXCf7k4qgUCeJTX3DoUfqZaFzYHQg4u88H9SBzK2ugat2sqL",
  "key32": "3YKGFb2iUScxkk87bi2pTtaNCEAyAKYnfnU8NyU8PYLXE4VKP8cqsXTHKRL8BRJZt3GhZ8NoKMCibh2MWufDmmLN",
  "key33": "2nuh7kSMC882Wwrf3aFighK4Arj7Wh13K5r8eNiieNx9eRVuCyBJdUhLUp4Pamu7JZs7z2rojYuazk5ELRRBdq7g",
  "key34": "3RamZ9xvkTTJyeahw94KmbpaL39jKmR6Qd2pLuJSQZaP9imR8vrawoYUtZcPFxfxjQYhEbJ4qtw4PFGCMRkuGQwH",
  "key35": "5jAwGQwavxZwMXkqFQ5mEbDZK6zHyLDUGzHB3zMxffa5Z1iwrwWdrJUXyPD9ZZHgzymYkpVfVYMYV2rE44bEyAmR",
  "key36": "4MoSbzBJQjukEmETmksWZAea96mpfaS6K3oDGm79ze9KVbZVQ9aKJB4jxpevW5yDja1Zve6h4wTshzaMC1NyAgHx",
  "key37": "3dtLxMfMtRbwkju4EC4uujxkNRwyBgdVXFKVnPQrRvuNyNZLfWqoku7JWFR1U6LGKG6b3txAfAv1kZM1P3LHsXRy",
  "key38": "2o6Fr8wo46Q5p8XDA7sZemBWgAPseiDG6KJjV82BVdsjcXon7zvPyyY9BqjgMprJ5TnTzXufqj4jdHbSNSqUGkPD",
  "key39": "RdX3MdfSPGVRXwoDQWTiHxMH3dm89Jbj7cBDvypcUqybw7Ygua3F26CTzgdoPzXmMoBzTa5AUcEyNqu2RXajBGY",
  "key40": "GiDnFw8RKK5Rg1tzewpTPY3a2bbXFwm253F1iD8YmrawUGuzEmEHoEKcNKfGZz2v8QykZVduUr8v9nibVtGMf7A",
  "key41": "2ca6QqP8q7rPHevy13ft2M8PHMWSo5rFh2dL4VNQzY25wViryasytgVxWvNJ8HUJvY1UFq6WHinh4covNa3RuMWW",
  "key42": "3pwKQyWGWVCbaPtMPLTmXPRRnNyfkJGTn4BW6LWEawMtpdHMgrnCPDo2HZ3upcUuNrs4hDKV98ehAFYPPzhqwDxR"
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
