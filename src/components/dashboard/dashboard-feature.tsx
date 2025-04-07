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
    "2MpbsVoxGxfaf4LAghVSjU2Mf3rWCqLuWbe6iyEi1oGpCJiTb7hHWNkn6nhghFm9Teg3NDKLH2FUdCSKdHLmKW72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kQnbDsQH3Sgk2AfQshHPtmheug4gWdQ7uNUxWNZGQeYZXnK3py7nKB3FdjZEHXSpy9bv178chcDhdsJUsWvF3sc",
  "key1": "SpBzBndPG5ioXAsRayH1jzmT14WefojWANNSQsQUMNvUMe29ncfBcDiYFmnmQTmY78Hx3JKqLt31S4uQC3Fepxf",
  "key2": "kg7bPhA2p4LBoCqvYqUwJgSRtwbXHN2brHhKjpmjXTj1ePponCHtHh4UUMknegN8TGaay1LWsGmYwABgDi9tDtw",
  "key3": "tKUFMgn5Fy3YNmrkhpigqtg3KkutuXQRQrAW3Naw9XjY2aDdbCZehVUKeZ4sb7kYPGRsyzWzGwnQNPYqodcSpJm",
  "key4": "Zq12g7K5hZ6o89DnbmUUFSd61ccHm8SeqHksV42UGoXRvS32ebmuKfRkq5QePRfxmfw3HJ5UVjTU1gsyBs99E9x",
  "key5": "3Mi1hpTk11U6HCsHW8wKWpeCHAmSrsCU17spc2uP3Xq4dgPb1UYPda2GQJWgjJnw6jXWRBjE7FfW8aTKvasBCaYZ",
  "key6": "5UjuCtKffXXA3kqUKepwCGQr6iNvbTzPcX6bLWmoNGipjQ7uiv9UJGVFfR4qATPKRxgaphCyFujrqQ4qqZfJPMkP",
  "key7": "qfmr2mYikPD3G5cPuuhzSBef8YQovCQuu5qLXHe1bZvdWu71af9DAd92eB81MfavRyHmq16DUhNAeEFThqWW8im",
  "key8": "4B4xrobNRjFBt5qbpNtvUbyq7bNEE7yY45ScS8AQDeiqzN6srGjPTe2XaVRPLJ9qJodec48qD6p4wtnTd37pjFNZ",
  "key9": "f6UbMKBqNc7xE84GeqQA8hdrTSA6HfpMzsCf8szWn5R4SNqGgiZCfpXbrMKkv8KPmPNN1x6UuatvwQZUV2Ct57R",
  "key10": "43TKNpwL2AawfUfiuBTSrNjyLS6yPFu6HfJsMj5vTC4MWNUE2RPEGLBiiz1RYRujiBqPLbD1SJpr9SFK8ub9Ndqu",
  "key11": "4r6o6Qk7i3CaaXzcCK7keiDtDo7dyKxbtyiX5RYscTtYt6L8BpQg24rjTbrt8RumLcR7LFto4fUE2FpKzrkSvnmE",
  "key12": "4P1DP4xAa8bHj3dZx8mrcfrBe5oKk4ottYm4fyBtZqoopGRSC6m2Ln5fgvFjdoX2Xef9yeyWy36Wmxc3FPYn6ZAq",
  "key13": "4KzFeUPwj5psY9jmmobxYZUDnEXiHi54z57DdwaiShEm1LWdGUxsjnrxqEaJN68mu83a2PwKzq1GBGdxvTVNmfv2",
  "key14": "3gGpgemufp1Bv9jvCBcH5VS5E4fBie8nb91hDTnZW8sdzncYJWVG8bud2oiyU8e3x4v2YW9RGdhiQ4MqqKCKvJSB",
  "key15": "2UchDMnPy441VaQvdCrqtxYeDfpQu5dzgrY1WLN91638LGUTdW9kAC1R6dnLuGEwjKG7SFrQFrhWx63KF9Y1dzjj",
  "key16": "3L4gKtRWidRkXZXhGYmg5Ghu68wTd5X5x3YYeRuYAShD486Yo8ABXkf4J3wReUYfzmVRwYid2PXqiuH8Wx4w9UJC",
  "key17": "GgngBtAF1P4hGYZ4dpDRyHKiLGHjKS9Z5FHF6D6oN5D2KgL1xYNgFnihnAB9xexVyruToibpVs4MW7Gr1ezydqW",
  "key18": "63YdFkjeh5BUzPo8D84HaR8qbWHmAc7ViPBcHwkvfAZq89iher6WzPTEcG1am4CsFyCuvpkymC3LG3iWNGZiEfBb",
  "key19": "2MuFten1RdACBUiBLoZjbxcWbvvtAAWigR1pe31zSkM7kYVbYW6u65bVJacnN5ugDHLekL6jCRHMDfKVCNinR8Kc",
  "key20": "4ff9wNenasoNcyXhvz2tdLUkLUYyEJJoCNGfpNQemzH9ZfBdxKLUQuoVSpSJRm11hPxUrNa2zqg8GKv1ZdNpJJmM",
  "key21": "5ncfXNM5Sjd38JP72q7QPt4kcXfJcuB6vHLf6DodmSndKhzE6XWKA1kLgnTpFeJjwRLvuW9tjmXENipUEdR8sg8B",
  "key22": "EGFjXH4wSH62USyqhB5WcCesbE3kEQ3mAfcqrgh97Ubz9S8bRdE5GzdhwpkUDp5oUPdtBi1M1WdLBE4UHS9WarQ",
  "key23": "tpYdY9gkRkYpdUS3XWzUKmYviNojn3RE8aA45RfruMU9SxiczbuG3TJCYqGe1oXZB9dgWFU1V8cMkokTAtP2zYY",
  "key24": "kspYJ81RAkjCvXKo1XuwTazjSJzjDX5mYznWZtrPzFHrKpzW7Gmjjb8ZjRYzdwFoPaHk1uDXoQJTaWqsYZS1ZFp",
  "key25": "4psbgQt89SHaRnwsjTmpnysmVyuroMtMtAbtafXxsLXjfTozAohSZZbdoNsNCQaR67cficMTGH5J4X1Zayvuqspz",
  "key26": "4TYyTDqTrCdXiDZUzAm86yg9XM97fqRGTzkRE7sAJ9ZtGcTwyLFUCBPysBWjt6szRmSTtoRZDWDf3EQZ3TAazmAM",
  "key27": "2y73yBz5WMPoLbcwkrcF3MqCmtAAhfXHJVwVwHJpVYxjRZnH55xv5jXCwXF2jnxTFoiCFgwRPmFdSoHbbA5YpFf1",
  "key28": "4UqfQUGu5BLfgfWdeJn8SBnQQi7vYQEHNgs2mBfUk5ShLg3hHcNwxe729nGPFy4GqAeCNLUAaxdvAmp47Gpms1nY",
  "key29": "RoFs9xoJ6TrVFjyP4KXsZcxDQgfGXk5KyT3G8SAjD33aNodW251TwuGnRGErc9m11fFuHrPKZWnEvvy8EW9EHby",
  "key30": "5i3rXCxVay2bpQbhMjatNitLhSzqjx8KnTPrvt8bfgAnhmgvaKW1HLZ7s6ZuevkkfCNckZAABLkR3BgEAkMtCN86",
  "key31": "5oY5rBWq8DwTJfErhnEQpmjZufLdvn39s38xqeyxh3vqo1gRwsgxcBraMcmKhJkP4kpptpPyy496d1Bwtg6W7AHF",
  "key32": "2rX3ZLcTm7iWYYxuUBywz1kaKo2giferFi1Zvd8T2P5SJMxjUKYZ82fc9rxL59QFeM8ZKTZRSJTWCyRWiWYwPDYw",
  "key33": "5t8eJVqyKGpsRVuRwRDsY5ry4dLjvL1bPzuRaAfsm1EtDfHQwRPmyALvMFztyGi8YQ7XssjDuiR5kKxUugPxA9Ye"
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
