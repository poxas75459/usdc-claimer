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
    "5sWsSWg85tZEJyK95TDiikFnoQXrAR2bomdKtECPBGxhXx2SuZPP6y4jTE1CP4TWbGzhSrAFw2bgcM5tGrkyg7sA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hMECGxFk7tWBui5MuitSD3mUCVmRfPz4sZxTLpKpczmFE4zeBtoph52Dv7t6UyTM9yRgWZgzpsxYi1vWvNxsMmP",
  "key1": "4vD1VGxaBrD6WAFZLHXg6QxhZ8rKPrkuurRF3R6gCkwmhfAvgLyvhGeGKE86YRf4nzybpp2kQRYAYMtfzQr1nQVG",
  "key2": "5Q2HpJe1narbw8pyESy2nXBLffCn8S23rZG5mYJ5NkqaiymhtMLQEBVwFnws1jNKZKipvjVKL9HckztDx9CbR91",
  "key3": "2CWkQxn3m9PuH34WKZseetbQjYFkV6p94sSzQAdNf4B5jv9seDpRjnGzcZSQ9iZGx9sfwnNaN54qJeBehNi8wsTx",
  "key4": "4DidYCyxdiNh8p7GDGKLUDRUddHcrgoEVEhba54Nkjp4VAsEjZXJSw7etAAo45P5D5mgsb5DFjBEC9dF6HMX4FJ8",
  "key5": "1x3T8GRUoMdwDH2VFAiTp89G7UjVXGBrXt9RZCHu7LsfJfhPiTUANcQqNvcmyfMzfpgK5ACuTpzGZLrVtWAGrSx",
  "key6": "5Xrcx2RcY7HN96aaz3EsQkdY8VVZsK72h7dG8yYhDdTrsyzStxBrGFREBJ67Fxwbyj2prfjD8pda97i5bruLPWVE",
  "key7": "4Gu8VRSrKeEWS2KS5TELYZH2uxqLvW3dfsX5567ykW8u777ua3CeEV2kNcUq9JhyacDdHAc4aNwBe8FUbtzGTKiX",
  "key8": "5qo4rU3u17RQp6LNNnAv3uoNFrmCGyqR8ZYSCXPMnRxuGbgQBiZFpfdddPp8zV1Z6nCcLBCB6qN8uGyvYKuobc3b",
  "key9": "2rdMdriY3hyEdVZSNpsTAUpa3XFmnNB938KbtyP4rg987XhWbebT1aWwVMaQdbrhFMvMmD9QuqSJBMy5cE3yM5BD",
  "key10": "26v1JWrLuRNsoqBkhuz1yyYWEa49U2cxda23uHctUwA3WtrDdT84VPxSskfD8ReP1MVNLs4oktWU4EYPEN1ajpaf",
  "key11": "5v4dGHUCvhF3BF6NGSgNf7FG8uStFaeWjKK9A5QPZpTaA7bigJj83ANXAwzYpCXsbYBmSJZy2ywJz7FfBW7hGduG",
  "key12": "317Cyp4bKWq2BkWXgsscfDVqZiW1rGf5XDLLZ3JXeYBkPkEcg7mB7A5mQzAhmZ5brh258Jwcrv4CX1KsgobwMNaV",
  "key13": "66jQAcNuP1v9wRuCEZyNcSesWLStsrqksy5LMtfxn4hsHHivxf9Q1QmHLrLFb2s7fmX84HCbyv3KdvD2prPnynDS",
  "key14": "4s3btxnSPaRRfpA4mBZH3XB76kR1nG7DbLdAzEPcAaZTaii4cLmpkboWVqiGT1CmN51dVh2ptar2wSU631Au1sEP",
  "key15": "9X2gHMGCj2jKr5ZQrgf8FvP8GWvdqvmsEyufYwPBbyBwFmeHszALFgbjRDzqvqgtCP58Aq6C9m7sdjJxyBikc5o",
  "key16": "4sd3TVmTQkLk2wj91vG4ED3quLNFAitYWRVYeB1GtdZ7FsrbUQwGbXdc6VsTvAyaqg6MSZ4wwgxwxmHMwuRvQNF6",
  "key17": "4b6jEyq155neLUDzxveJBiQwihpNtafFYt6bUGqorexjLWu4wj8kcF2mitT65GeJDH2C76nix6tVrLUiCWhFFwzs",
  "key18": "46cf9wFXaiw8nvTTcQjtsT6Qq28ZtANBXLieanrF3V2WbqXmpkz1uNZBhLTCvnFkhQE7pMVJrxM6Kzz4j5ztgAgF",
  "key19": "3rcJWhfdYqaLk8bAdwca7k3CJh83axgW4cN5y8vPpUUAEcmLoYaSqWJKMEarE92Xj6yLDursUfU65p4Hv9915MZT",
  "key20": "2JYPhSkFdrKDYQeibiHniugHbmcA5qzymfxbG9CJfMngcFs1ABW84XMpTgDwtTvcJnACM7SsXogsAkcpZLK35ktJ",
  "key21": "4e524noCSG3X2tefdnQ4odGda148NLw4BFKeAjEAxgFRt6QNXcVHS4B3aXexgr5Uy5yVgFdNeAE1Xq1bCNGiJBm1",
  "key22": "31u7jqfjnADMCCY9YtxohjLKpFjYscetgs44RXHKnrf26ZSANp1iMSVPeLBTGAFFij27YHE35nEyKnteTaGFedqQ",
  "key23": "3Wtu9Zgs7uBEiwbdoKvgELRBq2xfHQBxzpy2PrPuhodnuLLsi4zBHZBp6k5vF5dscdygiCjorstpKQBsBGaaWc8c",
  "key24": "4dS3Zc4zXSshcBd6aJjcESNdNdtphYRDR4SbhfZiGBwLbfxZgYUuBeNJxPauo2zwZufrmW2gKnMhZmzCccLwXhDj",
  "key25": "5xA44pA2QSvaHrLJQB2PpHdp98nh9hzAnERPRKgcC84FTQ7tciauv9Z5q52h5bkhtoYY2bs7ezbT3pmp1gkQHNna",
  "key26": "31GDNjxJ1ZRfWNes1hbBGqsMuaT3TVyTFsakV2dVbrXWfAPzY9mE755CbkneoZ18VsuWHtx9h85pTmqtrSDy9qzv",
  "key27": "5ZaJTveLf2gB79fuGtGr79b6DYouoFbGcNNdJuwseNWE2vZeTJGJtrRE3UJFgNdYQud9oWgMH4XkHgnbGYmiyRoL",
  "key28": "4ecUgUPrXBc7FDhfhtMNqM7exqnLBiWz3LJYytuGjoZSKoSMs94p8YgV9CGfsbhzNLJu7RiMnEXurSUq1Gt8cQ5u",
  "key29": "2jCFWfJHVAwn5kysAj34829WXn1JoD5eAyrJQzcAcHkZirvQHVF2z5fUAZaa6WYgHQB1XiYawA3j6b6PX3rVokJq",
  "key30": "3pxgWYL5Rm8vrpYo6wUohM8UReEM53irMij2W6zwEj5857Cw3nt1vQSnXsognbXFtQ45p4HnuJeaoX51QmSpkFno",
  "key31": "5KogjEpYCAptjKP5gshJUTgWvfi445QEt1oZEjVMtcCso7rg2RMS5oT9cdAx8JccBa4AeMw6P5WmHWNiRmVXwyXx",
  "key32": "3RGQ855i4CPxLzuNmmsAWApn5NZBS8n3VrC53iGk4AX3Vq3wgxcth5KoyXtgZksfYhyjE5Sg53fXobaKFrsGCJJJ"
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
