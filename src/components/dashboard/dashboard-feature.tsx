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
    "5TRSitToJpubrErAR86naGUqrDzuWToGXjuoDkbesgJkHZbXGKur6mFoTMNM7v69jMauekYBSbzQWWRHj4RYxGEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BCephxv9vQ5W6Ch892t8PUSbdngh2rcR4Ra1kA1MtY4BezQZkQjo27y8ocRhe38q7FGgMRMKApZLf6qcKCCw438",
  "key1": "5LY7wC1tcVhg8ZWHAJUiTbd4jtLQ4inS1iAik58nDdKprkCorXyz4i6kiYSh5CYGnvBJC2HWN2VtEfHjmsdikMWe",
  "key2": "3tY3FFYdJAH2UgFEt1FM9qr62WHnkK2kUyeXtfyMphPzSgAARBgoDtoiiz74sqH7dyQm4DiXjpRR4nrDHf7NaUiG",
  "key3": "4eM5HNMF4kK2V4SXhbphCXryUYjPb3L1UmMiBVantdDJPR52TPkTy3aRZAaVvBmYmEGXUyL33V4XP1xDzEQ6ABVJ",
  "key4": "5Ny7oHPAF1mi9qEWrohqiqdyS46ZpXXMNAAqUbRWFnkoypMYZyBAdKnWburH1V2yNzNww4dcwkhXzJJsqejKFvtf",
  "key5": "3wGWRaSgSHi1gGtAqXSinU68vFtNiP4zNY1UKW3vvQXp1RQ3TVaLFp5i5rYknnsMJcJddiqBuYTfLLectK3JJ2PH",
  "key6": "4tJ7J5taYKUrAY8fSGXqsJ8CjjN1Wr35fAqAAkXBehrBEJyL9X5WFtfh9yyARbrRMowdzdcLQKitcHimFbkJRfi2",
  "key7": "wcqqpejmQtvK75wcBcW9NJEJTBc8dL4V3F2EbDBatY4nfHcZt2bLgjxeR7oGNPU9Q1JoT7EYFbGDvMKrv5soQDJ",
  "key8": "5pn4PPfLmKBZprXbPpkYoNTZ6bmqui3XL5Pei13Sehu9nRBhD6QeVPLLywSyrLXXbco8EtYu35zkpEkvPEZNBAkW",
  "key9": "4E5aMmGoYrcMUNkdhM4DXrCYps9HWcFDFQ2cwPC5TRc3rsqxMjqG2dC4AtC9b5K12u8cziedvt6fVxDPrZeCXqKe",
  "key10": "3SgRwuWSemqhvEtTVQJHfhMdJNB5a4w3K3S3CyuLZ6hTZNK3wkArpNvgr44Nmhg5Umxj7Xd44YUwig47jnwujH9e",
  "key11": "5mdJN3JFZZ2FDN6HTraTDWrDv8i4c9Xi93HxPrPQH4gLG3n2kkWnvfecL6E7ZabbTrC7NsxAH1yRu5g1YbpeHFQ6",
  "key12": "3D3wRcjHaz6aiQhZx29WARu2Do8raEyXaH8w353LpBpyYEctittHwvtako2NosrrA2RyeTQb6Jer4CpYNxnx9gW",
  "key13": "2tRczCNyEia3B5HkKwQYK6Pbqc1D2znUgYYQPJn6LbhMK55T6DDMjwZrCo23FDPNouJu88MHcAxe6QD7GL1jPPn9",
  "key14": "4ZsUJN7ycot578Q1f9P1rUcbBA1NGajss594uPXC16ZDKxAM1RorLCUfhQ9pFLNLHiZTtAjJfqEYMWhqw1nW3FLS",
  "key15": "2gk95Rqb4RQDcveXScyGiEMJ4KyUJJNo5NyBNGpRjLyQWnXwSzahUrNSthiEPveJABSsgaXbsD355wfyXenXiCHP",
  "key16": "29uNTcJ7mfrJ1QyudBDyefefDsaPgXDrrtWYhka8nBX947mmZ4Zd1U5oSU7PxCnYMQqNQHgr76pJzm3YXg5WivRq",
  "key17": "25pvHqZQbAvQLsNAApLLfo9JpfQWj1BosPPWNtFEXhktWsoySdf4LtiHm8GKredwc1diRdiEu66jwGNKHYXro2FH",
  "key18": "2CH1FvtySzKzL7adoFCN6h24GZKmk324drC1vTfAmMbVeU8dtpmv3eScGMURGY7KFVHbpdGvimX8Fr2MNb7sUuRV",
  "key19": "3rDBsKXJtb467ceRCHMWzZKmXx38NvdCv5shkhpdpLzt73wVAY9CtYzaGLvTFzb83bjtkTKfbqD9sYkJCTdFLdbK",
  "key20": "3yCGkyPY6n7nSgtYgeSQuBnSN5ckgfvzJ3x5mc7GKJuErLjQtck4BVS7GT7soZcfN788nm2z3Lq4TctWKYiM3mww",
  "key21": "3Y6hPZgHS7qwYd2NmSJuWyyJ6NxGeF9Q8vtRCUoJMXwjRexd3F6Cb1rc7HyfFxpyYfkiPSMzfMd6T7TqgBMyrSLw",
  "key22": "5mtFFFiM7zMGJQpj62icgSuWoPuYvnF6JxMrrCcymLzcrQxGZiDpQRR3VqSbZf4xdBnYkNhPbqdMVQ4kQAmWTB46",
  "key23": "4PKMbEMWwjzAJbtKB4fg91x8BD8Ss91657QuCX8dZT2yhjuJApMLsjjcmAgDgb1Cd6Vur38s9v7AhfTc7Ks4ao7A",
  "key24": "4QgH1oZgetJySsZ4w6xFN8iXjb6WEPq6AH3VS1afDM2yrhLXjBTfkrA8NrNnyvGWw4CsRDwtgy4Tf3uAPYmmor6U",
  "key25": "5LbVxhJNoUApXg84q9JaYju58YKh3qth91R3NT1AZuLPCe7CMzG52gSHUn8t8khLVdAN6h35sLjZRP3ErrrXcHZz",
  "key26": "auzYQWgHcEpJnJNWjSPyYbCXC2ro36mesTggsvH6BnmqaHJQKr4tA2cZPneqtqfHYnXV9oebUZJJQYkN1CsELsk",
  "key27": "3U1GWAFiEsKZXscPcMxNe8dcCKKJUcTb6Z2hmUVkFjMBM2uVcmdyuK2712cGRedAqQod19X1m2zPC5QKQvVMUym7",
  "key28": "2Hy5xyjGCqHYEqtgqnevJGByevhfkw1xeUhk1qHZ1vG9BqPX1XsvmEVfe5eD5X47jM5Fhssc9eg13ou2Q9YpKFXb",
  "key29": "4oTbRRcNfjmqwJvGATeZAVBq1yo9wtRYW9KDdqSnzR69a2UwGnhRpKUtnq96rs1K9ZuFGAYjA7aCNFnQUwoKejRe",
  "key30": "3e6kGTjisWeu8GES4dCUZzwduZqZzTwkhVB7WCbGPRNWZXTwLZiX25jZf7o5FiRJ49wL3ujkcN7vyPexRa6Rb3Nu",
  "key31": "4LZwDc74ak9G6Dxr4dE2yF3PAHGhs3FNLiwrHirv5J13mbDLbJZ1ew1vpERXBsiXPxbDzi6eLVWBP6ubJ9oYca7c",
  "key32": "2WFukxwy9zyG4odRvR5xkMmUN6KPUUDf4xwRiEymGihMyT9m1Axo4u1CYazbrq2jdeJ2yRwtC2uVZ2KtCY2ynhtG",
  "key33": "3xvMb8fkr4yFks7akqHgPVbUejJFaCDFApYboeiHvaZRyZGSnoeXESs75jbsT5tLPj9WEfhyEXzTE6xALUFo5wZ7",
  "key34": "55jffr4TU9qoCK7EXdUMRHk1FDy587qjMBQmghDxPhEAkW19rFCEmf3qxUATnMayJau68hCgUuRSScg83B2FiavQ",
  "key35": "5KaLUUTY9RDi1JfkUw4ERkiFxC2nB315tJXQVVHG4vsz6LyoKVMYJV9bgxHKytbt8zLGFUBiwYuJeXKHu4EYdBux",
  "key36": "5x6vAkxBUFSyf6MexFriGqeAFu9VwGyozLjzBAHpETGY1A9tUHBL1kGKXEyP3AaMamU3csMdw8Sr2oNgmKAkJE94",
  "key37": "4aybEq47J31CrzD6s2xVwdL2mtiL9L59RwPtNpJkbwRCFY1hscNYu68v5AZ99M7jPkyA7a8UzceJPb3MqjaxeebM",
  "key38": "4yxtNGUPbZ1roY1A4Lsncc3n7G6KbpPuaDUJHZo8ujg8gjzd93DefsxgXUtqDpJ9ueURnEsFVHfb1FjCYijtQTkB",
  "key39": "Gz8D99jyCeBnbvrkVj8gAZJ93HH79ULyobg9wnRyw2MhSQnG3TocZhS1FQKn6ivs8uR14R8VGsw8hCuueJJXZj2"
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
