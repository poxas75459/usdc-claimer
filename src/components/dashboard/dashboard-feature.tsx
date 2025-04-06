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
    "sxBbgLwhMcYbZbhxz53XopGkrT7RAVLaB6tVoV6RAtcETKLnyfyxYmNHg12cCSuN8wrcc832ZrDdtPEU7Vmm6Wc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vEi5km51DunLR2CJKJoDhqGR45Qxtu1AuhPvCP2nkd3xfwSWnsTyo2oTnVHe7C1dHrZTi5YhR3wQ3djWPHZJqpJ",
  "key1": "2gqXYe5EuwRtzi3QDP6TeNf3xSVYp4m1M2dVnezaPE2a8DLMdXJtFbzQr6fatTBiyxK55npU7gZRyKNKDwmyvwAY",
  "key2": "xCqRM9pwGqBhGie598CuVFbVs8tejpW6gEvNvUd7RkvhwEL2yGA5bwiELAZ99f8AZxYEtgJ2nZNrhWrG6nDarfD",
  "key3": "5vv6QZJAFro4Yu5QTKNeh5eY8JPUsLSc1a2mTw6J515y9fjJFMq1ym4vCE3TMsTxd27VsZHghScevEdHRnDMkEzp",
  "key4": "4uug9mtXXfanchBBv5hNV4nmmW9ro7oc3jUzmvLNzBYZDEfxo33Wyv1TCUZs8adct5RKjx4VPsDYWUoSjvDwHMbU",
  "key5": "wcHJsENDPkAhUbDhqdJas6bwZyofVxo6vzuSu5V5uuvRhUsyAmscC8SHpfHp1wa8if74tm27TTP1sZnva1mpffs",
  "key6": "2r4e5LZCGmkkyHefdbc52pjKWfcxN1CbxQTzY9GuAQ4qECcdmiVnBJ7d1eSkDhRJFnpc926ZmUmdcQdBCGP8brHL",
  "key7": "C1cAZ8mq5BBzHKCVfHtp5S8caLGnwGFg6HHLurVPxTJGGtYGsmRA6MFtydJi7VhAuEFAjib7qEm2jw5ZemWLkT7",
  "key8": "3kwodnuQEqePYQ2eEhavzquWgLZfxEmydujPgLdTcvzWgFyP4Q8m2ZHEzLsxgZUHBGiqTaWeueo3UdvmMfDmf7m3",
  "key9": "3TfBtqtwtqJ2EbzHKyc7eCUaQUBN8ZLfWa7RzHiu15LomAGwT86rwkYZUAwV5h8Gmez6eEEYyeweje7A3YzCHZBc",
  "key10": "5CKr6JYbMss3QWzf65EyM5MnntJLBvBSVx8R5YeGwT8xa9nvEZj9twMTp4eGWNvpneh8iw5nc6etBvW2MyX4oBrf",
  "key11": "52ogo7t26ChgtF4tTaK7SsiEdgmRj13541fmXJWCq3M2m3xuk1EmTx3opwSvVkkmHiPQaba4DFp4eyYYNMrnfF5r",
  "key12": "4ufLzad5feNdLrtPJ3o7oN8WrJ6ZeqFmBsDyxJ181W5ZJP9wZok4QCZuR2SbhfBoqDoFnaPP6WVNiVXyZ34Dqent",
  "key13": "4v7WVf2Nvn4YHA5BcKdmzHbnHpN7BXUEYvC6t2FavfpD59bWcXnhzgSsCydZejNYWnKqrykkBFWaDkdazUY5jQch",
  "key14": "4Cc1U6wvpiR3riLHWryNtwmXbwQmUEBG5f6ryHTgyTFDqLxRMnwVcVXQfZJj6ueUArFPhscSDgj5iYcQsFnvQ6FM",
  "key15": "4cwhRNfUwzyX9eSuo4S5QXt9Mvj9x2AqZZC5M4RQebqMVGFEwTVhuvJHeHUsDdT7ojYQpWmFLitUk3fx8hiNnYAJ",
  "key16": "4phUqapYkCJp4NKr7M1EnqaFejuXDXoS1DHSyYM38g9C2BCCsL3f7X3Ka64fmNGArguqbrAJVEsRV9ytzSNTWJLi",
  "key17": "5eP9A2CmG2ENvVsyyyZ7WDbMYcbPWXggyEC31CxQ8mW1rkfgJNzSzFravBqhnYwcNvnXm7iXRdNJn4oHrcGoMH7U",
  "key18": "2vjg54LBY5TDWnSta7J6iyAhkqDLs8m8PfLMb98iJcmmNNBJazGnx4rQQxvoeugqN1ayJuxrtvzooActfXc6wwf2",
  "key19": "5ETxji1bbUaummif7AvqHB6vn6XXVi4NCYzywip7KQUWfu3CCuCxWs3m4Mp2WqfM1tjUPvqvVohbEVbUpEiqMysq",
  "key20": "b81SscF4u4oGKS3rWxD58btVDtxZ1smfaWx9xgQTVLYoyWCphRkdsbnhiLBomuyBB6kYjw9U9mVAZ3BSMiTmsUE",
  "key21": "pSwAuPR8piseqXH4HYFRYgtyDj6dq8DE1LdM9mhJENHyaeJLQ413XobefmVTTupdkc4u7Whg9f3LGxpYiYYQyVC",
  "key22": "a8R3gzZmquvuziBtMYzBdHGUy9a6CF43ft8Jy6jbNuPhVBrzAMaypZLbU4VDLHp5L9uwYu1iNYSkXz4AS6qb398",
  "key23": "4u8DzpPRWJPrxagsTc9CrhW6ES8U3V3CeEK4vGEjreX3qfiktQPMZzEcjxnWd8L4ro1tnUdCwCNP4n7M6HwEudzk",
  "key24": "3xpaBnQhs7agj3i1njGw5W2B713fMs7UKY196exM3ThQBnKnMfY4XffJj8vo1zgeKp8VfWAwVUMPTfjWjAXMKGXC",
  "key25": "4yU3a8EdT5wwYSYZxuk5dHnLX85w3J52DPCna91V2zF1eDBPZHdggTcvs2izaJ4cPWgg3jsSLaYoMAnErXcShFLx",
  "key26": "4TqRWQsRmDEixuMcBev8nuXBf7giThDhERxjXBeaHMZseqzFWsuhEZfRWNsDfMnqJvCm4Ei8LUA1acU7SSJpJ7UH",
  "key27": "2231eq4VWM5vkDmmX62WsyeNLHPr1TZzm6MbgWMumMZWuq2fSr59yD89UPG4K8fRcdSp589WABtN6zDaLrdnQZqM",
  "key28": "46ssg18iDLnS9bbHtoPbPmsTXBKqvQeatPqgcgQxQGddemStn9Hz4UUpN3w7tD6PWwsW64zMrqzBr6ntvcTRvFME",
  "key29": "Kqxjiak8TcwMkoeUzw5YXfd76YNp91C4HYZWpfyAYm6CBnXeXLnfzs9qq3tC7wU9ikJ3rwg4bqv5MoPZs4wVNwH",
  "key30": "4zziCg9WhPW377iH86shZZVup3wgqVYhKWspmG6ZJHs54GrgajYvHn3uubDARGbT8XPEvv7RfDuzGb5ZBjf7KXzb",
  "key31": "5JzJQHkVsKK7KrpCS13JHZvWTQkQEzRNyDJqLi4WyuxFcgiLgLMYHph7npnGhmPzQjVeWACPyLp5nnc4wVSoc9HJ",
  "key32": "5br1FMeMWYJPWuoHbkJCreh2Zf9VshS4G5f5quXJiFh6mXEKard4hzbvPstFkGJMaxZtGTnuELSF5U1CpBNNJtBr",
  "key33": "2eU9PELSvuKDC63DrvVr6x5RTborch4RA9CkBcASGm3tnaG4nrxEHzPhX4325WHLR3mkq11oK7QpAwAqFmrKPdej",
  "key34": "5Ly8ouVwfvPccrhG7fVSTxKE3JaaZ3p7uooxj2or64c2WQnTVfu2bj6AEdTy4VKHLqsEWTonWySvJxzb7DAkNFbN",
  "key35": "3xAciTcwd3XgsHX9HJiYoLwZumgjpTvWVvD4uANqQGeP2sYodDUhGgqcPThaBezV3mwYMc1kpSe5Na9Mo7w9L8J1",
  "key36": "3utXxumQ89dV3dvz8LgwdRAt91pKDwwqCejiBkixjsd8Y4jUEReZ3PQP5vg3sTHLy1B8kAeqcfgLygr96yrxmzSc",
  "key37": "276yKBFYq4uoQSBNWobgrmqBmksx3Z2w7vxx6BP1XCQEBqXqVnF7LNRy3nXDYY7SGwVcbwhpcFfNBxeUb9jZKWNE"
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
