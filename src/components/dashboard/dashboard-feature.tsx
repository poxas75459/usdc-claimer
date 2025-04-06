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
    "w2PXFyKMTxVF1rbywkrqu4mRjcjeYPhjvcCzYpJTrPbUxktN8hJpCoKXbzfMtSAcZskeQTUFCdV78MGGtiBJgtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36mYexJx4YtyLF6xwAsyDfvDKEPhPPzV1jqbvp4it1FuCg45ndwE27yBk5cG2RYLo6RP1fcvNk56xdFJdm5uYbia",
  "key1": "EoRPVzHgKbwcXLZPP5uXwTAn3PGqL3ywb5VMVifFykGU2EKXTWskygeRQJtnXybQSwPpDAzkA4mfFCkghGdpoEa",
  "key2": "4yPm56xpkAp8vzXY6tTkE1jvDVZsfywcLkRpAXWpiwfLPaPq7upAkitPNAhzzkeXwqqSdN5FbkBtdUqMniooYmcc",
  "key3": "CYzUgBuyJxcXD9BkeLUquCudyRrMG7KA76oC3shsBpfQh4R5Nqbai5nnezD3uur9XW39YmSG99P1EvskvASmBqj",
  "key4": "4FQPNKSB4M2rFb15eFgKYRKo8wMv9eqMnLW7gvecHtWEBnfqKE8tj7Si67R72qbTwQzj2BvAhtCLExE7jgw7wwVq",
  "key5": "63J72Z9PxaafWfUXTbMfE5DLLxtYycDLpErUA9sCD6pcC2fAaKkuPBPJxxmDMwrGdaC831JgYhuXwgxPnQBm4xA",
  "key6": "A4DgKoDP8gTjJPDxZY6pFwjTJKZMedyoWjN7rXjLf4MGbAUi2gS4VKS2Pw1Ee2zGxahXgRefxECN9t2sFVDRvzB",
  "key7": "2Atiw2U1Pb68Y3bMPnkUqqo5Lbe1k4ZzLHLxfLn3cYmCmVVQEtW4AFGKDoaPHobaUAAsoRKZBE38FFHA8X1mAK8o",
  "key8": "8Y9kxg627Dgi22o7B5EyaBM8JVmKrMrWsvGuUWxVpJa5ZQQBsPjSG9imK8Pspnf2mnJ7uw1QbiK7tbZN6wxii54",
  "key9": "4srG7DecCMKjz19PZfN5pFvDhecTpuqwJM9RCQLPx52t5jJi5iE33xAjrND7eSKPHfnTBodVEumHxjQNKpj5TF98",
  "key10": "3PN4xeCF252zz8XXRqUP1MUtHCV7TPqk87UQCy7tWBBDxJ3Zw8D7F98fdDzqpG5vvdNyxpV9Tm4h3gNzJWq1o6uj",
  "key11": "3sfmvaiaUpdQNRM1MsYMraevveVNcBmdRjbeRtLWrQ5SpyxCsaBLnxNNDBiGCbiP4xmbZtotr3H32ajhbHfVyk9E",
  "key12": "4yV9zXSg4e8JE5ozuhJFnjKXNHHmU4keMMjktvi7XMf6EFKg48rwf9t4Df4Y7Y2ohN7u52ktFLvws72gVmzfWPYW",
  "key13": "4R2aoSJGUEXhD34N8DqReQ3GuoKGpkafzheTURHYpuXVzSePRJg87kF9h8XkNewU2vEeBaSj6Yc47SZmQCBo48ru",
  "key14": "2raEh6whG6QV19ULSPGZpC23kepbeGaxVwM1mRm6a8LuMFqEDKvuFjiWeuwREZQruDtgASjSdGfPHNnV69xsPAUo",
  "key15": "5Px1boGNqGDt18zJxDAPqyx5ipFwUqbhKiurw2fc6idjKcfT6CE8FSsPKnfsWEJdBF8VZa6zugXnpbUGYXkbXrDa",
  "key16": "48q3abCQxd9DLpFvzTtDABMT6Au19czv7BwbffMiER8YxWajV9k7SbsGvwcME97qwuB2BqysDdeHz1ZJsDRdfyEE",
  "key17": "HF6ELp58esQPUnd6LoLoSLxdZRWfpVHt1U9YLWa5rfpmkHn28WKgMsQNk2tTJ6kphSYF2DXDz4iEAQGxeqmpjAV",
  "key18": "2zvEPFRF1GrXgx38scSmeE42ZPK912uKWwQAxgrxw9LsKBufkWm3KLU6BKbwaa9nSWfMiRsAKi7KdyXGSKogHZ99",
  "key19": "Q1kNRnmPwBkEiDi2pqvtdgGZpg4QHyvVbdU1FBr4jMejzjhzCX7uMtWVM6LevXq8rAmRmzwNDVE6qUhDj1BBweq",
  "key20": "3HPpE9moMJXWDK64oY62FmAEVSznWnAWrTFE6pzZXR9oFW5HP1DXeEQ3xLxnXTRwVfLfJBhRoTQCsMUcdHgm3mrs",
  "key21": "3Gwu6xuUAs1VXAkjh1mxbbk233qeYRiyYYLULQjiER6bVuhen84gYNJnqrucN4nLMQebe18RFMfixBJLrFHQwakn",
  "key22": "5j1WwoJx5cMbWHrBxyHUBtxLMVCBWnj85rXcLyAXFV6nKhtCLvejahtTWBC7ktMow9ghG9DgWhV7KwBULpLv61Bn",
  "key23": "2mzXvZT4awJfs9g63uAkEKhQ57p3WTBrt2W6vkF9KVvGfZ28k4TTYVfciSupzEQbrVqoweWYyzJkLcZAgNF1vmpm",
  "key24": "4TTQULEonympuANk8JCFoZUaJvwgREE8sofhcMqbucLM7wdzAZvt4nq2wMYFimqH4qcEa6bcjJy7kNXRpx1TRZv2",
  "key25": "3YHTrKYT9bVMFNWjqXu421MY1yfbzyoDovyVEp2Lp7N1KNKu7H4THRcxsqWtn3ii9bhpQfDu5gA2YmqNJKwnye5Q",
  "key26": "5oCrUwt2NNShv75U2qQ6EEWHHj73QQgJppnftjRtDwgb9SksEz42HDTCF4C44pW6w6NRrzkvjTtajQNe2S3UXJ6x",
  "key27": "2U8G43DMurbzdoEE9qoGVbRJLjZyY8JBZGaHZimGHRfbG665cbeupYDAmwNkdQGfRMFoBtREXAYU5MpxDmehw1ZM",
  "key28": "5uGQE4oUVW7PzZ7xb6LnS2XbCfREahTz7NNZvdECySB4DrzDRjXRDfRi3NwfrLaDEUgPkqy62wh4DVh8Gd8F1QxK",
  "key29": "3Zij2kA41kogd8WdUisKZsheb8syo7evkLgEKotQA3dUJZZJB5x5Ba4TH5U68q8mDfJD56J5ZGMKkbF76FVuZ9e4",
  "key30": "4wmaJbe3zRUhXiaUvjbNyGDc7dqvh9f2t43aEbutsWANsoXu2hiPXEcfVK4rJtXMk1NbMBoq1c8i3957nDwXMtz7",
  "key31": "3M5YmH3W4Rh4Mowij7UC8TQAn7Kp1ZJQdFQjhd1H4BMCXw1EzR7kNWALThLjj2GAuxYdpMaLaTMn2Aemn6y9U9MJ",
  "key32": "3Hju185MZ5HxdXbTw51fRKdq9qUau9TTNuSDQBwqP2HMNDUPkffXHJq3s58JGR4sejT5GBWWFyUDDE87bnVDXXa5",
  "key33": "McBcmjrd4jCTy1XeKP1iKq3wkwHk2r9Ut5a7E2bSupsnMTvByDzepeT8LoTVrF97jcCNEzdTspaosT2YCRi9HfP",
  "key34": "2LUDe21DNuaCfieXqfK5GnoGZNN8K3ddodaxagnANBx69RHkodEsgh6kFmcPwBwTX2nFGmZGQ1bMMWgSkVQBxo95"
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
