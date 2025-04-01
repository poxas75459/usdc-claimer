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
    "MQzW4qJ6vETVyqjzdsSRGcbQHEqDJ6M4iXFnBGm7fbyK4WR9DPzu5E35xpWm3WwRSbt7m1LHebZqa6vbFARkhtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44pdywn1c1enaQq7uiuQ3ub193i5Li3FMgYitioinRYpv6xeEjZdU8MjBGkyJ49Madz2zBP5nHGuSFcXvCQd42Qg",
  "key1": "4pfyJzonVC7Dx5N6pTgx5dPqcMVvrZsMmpa7ZwKnkW6McByfBVFsNcQJg5rKWGsEP4dbTAvQdGApdN4FP3e219aX",
  "key2": "3MGjDaFjiuM9P7oDdEFnMEGZUyCfioqHqVoCbv3xsci5rYoEB1Kkdo1z3RY5cTd8exLK2f3Q8Bi4XeQnsUFuWhZK",
  "key3": "4Bbuy3kq9j3rDhywDLg3MqcPTeZJrFABufchyX1668nx2URSGRh6nJtsbFyABE2kPstosmBhGLLK3oLHAeMaeLcB",
  "key4": "2cFjnu8VoJuo4ptrzon77X7noXaqqo6LuWb1Q1Qq4mA1LNnqkfPR2vX9e1fCJ1r8czz3GDg5Xys8dovENobDyHBz",
  "key5": "4dULG2TkFjX9MigPw8k5xXj6Ua6fuffVq2KQt2hfbjcCYsYew38Fxg4TVk5p8zL3UseZVqxKGPVNRsB7mFwa4dRC",
  "key6": "4q9MQ7payAniESY3ELKtD4c9oYzhVcEZ2ykanAn5B6EgPa5ryRrVGpevqAgVh7daXY71cTnsEoyqysbW3vYCr5ek",
  "key7": "4WTThSp32BRWWfyRDzJDVBeyRV6nh9bqGfKosmfwwStEZawGKkvYT8BSZRPiPVjmQneUGcBsjQtSv4U7P2xG3boU",
  "key8": "53Qp6vofKXiMtp8ygH7x6QvYwYXj4KZcgWQVdBBe4D9ZWi8H9X2sxthatafbfoCpmAziJneXMLh1aHJReiwEwSkh",
  "key9": "2eEoc5Cb7PvkFeFeocKCAGTU2wa3eZJrVGVGaMo7Pb7YnpE4oet67VtMb3Hd6JMYcXjGE2GSh1b2z1bSYfgxCuYZ",
  "key10": "3reffnkgjeMZ26GGZEfwXHMC22HdgfBZ3vNePGRbmcK9AGLCqa5XbHpk5abBeR6aYwFoArbnfCWoWe7UnpbCNvvR",
  "key11": "5xnjhxiY4Fx9TkohNhSYXBk2i4ViSfw3GV8q1u3x2p2ReYuWQrkQpsQWafF44ifXaxrtLU5np7Rpf9VEMNysPKb8",
  "key12": "3yypCfHiYLZr2tPzfZcFetPkPXG8MZCsn3KDUtyf8nku9ohSG4ZS7Fuj6h88FDe9aiwaYBaZjJXPadVRvzRYNYhw",
  "key13": "43kttoCJty63kvBVK2P1VsoMnsgE8uAMhY66unmNX1XPfa6pXhGM2PDhgoYXcscmUwgwerB6vYexwDUuM9EEoa4E",
  "key14": "5ycuhPUPxr6Uen8vW2Hu4uYF4xWqsV5aBrKMcTH3xaHxkdrsSVyB3vEmJVDFabLEYtXe4pJWHVC1u2aFav88FTxN",
  "key15": "5A94mAuRyW9EVszjrpMQp9LS1W38WHEbTBgHsbLZrT9g58VREzL7AfDf82YcdEHoGEuUQV4QDkB9iDp3QSynk8QJ",
  "key16": "5UsSKWy8TUAo8aY3o5HGSGE2u2QKTCTuw7NYJxU43hLD8emnJ8CB8hTQEQCuijKYSkQLY3TvUE9NiqJESvvpKmDs",
  "key17": "Gdiy9EVzTuwWEHP2NdMt7zi6HA7UVRAagHEc8r1rW5QUoN9mQTGJv1KVc58wAegjVT4Q3TcuDgYED6T6A319EaR",
  "key18": "rdpiD8bD8mkuKES5YTCLhh6Z1kd7atuD754s3eyuXUc7JXnUf5YahPLUwhAs4U5P5qVEj8LepBjQvRDPc3S7KiD",
  "key19": "2GH6PMoK2HDdhrwWLx3w3v5Vv8Na86kQszsQaxYzQL23HhzT5JS49r7RhnYaWTjTWzH3hCQjvog8TiLLBKS5dheK",
  "key20": "4TfSXjAvV88XtosD6be5JwmWYDWQLC9Lfb2nWUQk3LWGattYFeAHprxNNYGVvv3nndsQ6RBsQRToZ3nCL6wdVAPa",
  "key21": "4BAua6rUskKCKnKuG7x78h7dXUbgEVtrekwfvAyottYZ13NtmC97teXvcSsLXV7fAyaWrBGs5zEUQHrk2u9DGRga",
  "key22": "4G4LCBzTbVcSNMD1MQJdikroSYYxzoL7bmdQJQmvnfYRu6u5jcgD13aQ43Y3osKugLkisrB6QYbpYU4KCzW46s5C",
  "key23": "2gXerDR617B8gPShZNHJW3yLvE4TK4cRnZ7DABgTtWTpy3CQpAKXoRAsUDcRvgTCgcJsqvuARXuqCqwiv2BE3REr",
  "key24": "2V2pzNTpna63G2WMgy1Wfyz5WBFKW8DoB5efsCUWn3ri1kZzLRiw8DxfcfRHqgeEhwDCEhxG3a3JtTsBoJ1Xmsmp",
  "key25": "65fY8o8aqp29Ge9xhMLDCyixWTAXofTRpMVRVreZF4ZRRJhRizy1fXBQJneG1xfRhSLiqnXWoRDBXNKtHXaeUz71",
  "key26": "5G1eYzqiL4YWf1pL4VZdeasmTRCASKVa3KMrF31sk9TUkvf6krmVY2FyYkT43pbe5o11dTmXL8kAiPisZeX47cvR",
  "key27": "4z5k2CAcLCrNLdJ8noxmP29VZZoWvxeN1KjgWcxZ8A8Hjj5uSFjdPauEVgvrorxiXB3cVkGYcBuCUxUW7vMDAR6Q"
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
