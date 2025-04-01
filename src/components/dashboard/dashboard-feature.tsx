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
    "3KFoRhvQrSBu7EgvZ3mvwDayAzEiMBHkiU1B2fWByQyxRXUq45ztssL3Cp1ucrmjGYjGt6k8wh1xYVB7VGxxiLwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJQ5Cb4Agzk4PUfeUqtwwAQtZhgAjuCuEbjUHYQJmi8uKMq6gjGW3GVhhzvAKpVB97FxHbaRHS6Za9qcMfWzcV4",
  "key1": "65Cgh5Ste3ooZHz3YF6tL2YUGD58mNVzKx4TLx1zAje8oCXFnJCMQr6Gb2kf3gETJX86fnHjVUtLGwLWbvuKRGtw",
  "key2": "4DvbjjwTH1V4wpj1VbyDDjLBVWLJc5sF7jzttdNkhQj4E9Te7W7k21jxPJ3QDtAFK3C9ivAhdZnLrRVFTVq7ftUn",
  "key3": "JWcge5LT4oNDiYKnHVdT1Br98NDQ7QPa4a3Ee35yP36LHYEXVKvLh4VujRS9DoCaNrt8b6z87rxMhgcXnWuGwkf",
  "key4": "uCYyS69bDsqrYXp1GjJXzeF6BaZY6UBqFRWKeZdCzcPYtconfiukKxiM8utJTbwFGHD7MdmWH4JQ1g1NprnrXSE",
  "key5": "2hUa4YoYzHMzc8FiD3YXS7AW9n5dZz1g5iQPv5V2xTrRwXpg9dSmftbPjN68dGAiecVxKGASpvhNYJwRFn7aCRkc",
  "key6": "3QuSNaZbhYETuJRbFkaRqwg2otjnNYxSX1V7pPNHRx4E6gGBKbeDoUorPxAkiz2GHsgpDxQgmK4GuAwiAhJ9bCJJ",
  "key7": "5Cqgf9RzEhaPXkLVMBUBnkP8nNMvZHqo63vY1doEgswYwwQDgQpL4pBdP9yHUhWu68wgQcRJtqLLgLCUQ7MqayFj",
  "key8": "cYPNwtdCUL8xHbWm3vrH9ToWsmLfb9nGWhxAQzY2GaWdi8KYuVLuwY9hBbEFC9kEhfFMKCdd2RPJasJdM5quz2e",
  "key9": "HVafB4qe3R17m6mMwM1nh9yxRpXtU7r6rVa8gYj62naDR4FbzMiCVz3gG9KkPidwbw4tWk5xTuzwPt6qCR5fa2G",
  "key10": "3cN7HyYdsK2ouiHP45aQLcYJTBd2cnZRYzGGvzrC4dQK7pNkVQZtZQoAAAcenW5WiU4N2Yt4FAgPm4Yfj5zD8vmC",
  "key11": "4azBNU1B7ia5pAHr1dA9eTRzUsSn5VkZe96Pvm4k1EYmwdeDk61K4j1oqNKvoG7X5SoDtmDvR9x3EPznXHR9XLic",
  "key12": "4U6r9yyesyubUebJSNaeRcJrBf5PLYeRPgAfg4gfXVCtc4MqVnbM1utMVuEwMsVFzei37ECH4Goiz5WoHFNaV88i",
  "key13": "4vPvWdfnefVL8Jpidor1vKwFuzMgbBnzG5HdVSE3wPHWBFAtiP8WoU56C7PN7kXaDLhxdTdNr2eh7P8VEyM8G6r7",
  "key14": "3C3z9PUB4LEhf2uGmzqtAWy4h6XeP3H7v7MvcdSHUdYz7nGXRy8Fytyo91HqKifBKtfoZ3Pb6pjfHmfv3XUK5j8T",
  "key15": "7k1LJSmKBA3JM56GiJU3PV9FANASSeK8reTV6jRTgR343jNuFz6b3Y4Bwa1q7ehuN4cedY5Kgv6rYsegAk9LpfH",
  "key16": "3df6gZyohYAZHEmDQdzNXFoXTMAtMh3KgPU6v6HzJeFaMYxhyRz29YnPzMj7t1nDmPa8YYoHV9CfhMaiKm1EvUjg",
  "key17": "jUL8AUnvBmycwqRFnabTJMTPpZZXqZf95iMcj9hLxnhuuyrVECPAJAyGoEEw3nk2MUW3A6twiGD4WLiwtjrZm4U",
  "key18": "5eu8RJ2R9FSQoQYtFuUrpvm6ujxHMrjNhFXJuUcJ8xYHres9A8nWLYnvTVfbUgWMxbFLMGUHYjHiMe3koy4JiGcH",
  "key19": "8T7GeE5P22cuQoG2EVScEyDMS37311RP4UTdJahkXbvKztupUP2x5DpMf7VJ5uZDTQhxT7FsgCvhFQzxPcHga76",
  "key20": "5nCDV1LfTJGWw9cn9jrcwPZyNNeWav1t71f58yeBFZqRFcZh3YkDTt9w6wWXMSWGNzhLguZh6gpBVu6JLYw3mVRL",
  "key21": "fbcNrsvrWBnj4PxpzE5iMSzmTdhkC5LodrsSqcadEWHjegZgwfhQgRJtqXLgtAKWbsyLwRFXQqCGr7kQGSDccaU",
  "key22": "GzeRgzUd6hn8z6uXDGbhcCq3E78XNxWburinSKvyZn5WzydsEgegXkLxv9Fenrd7UFLvzHjqbSEMdrNh8WEbb7g",
  "key23": "JqGBVshDweG1CtQmLqWSNjxMupNjpu3QUifp2mZMgkKPKPARaE8HHhSFbXMoVZmBa9iaC9GCUSbqmoGEyKk4DNQ",
  "key24": "3wfPxvCmEom1t14VVnpPA1PZwYScUdgT6XnfaP3taYqayE2zunQY2QKLXxtATKdMUPtHKU9vd9S8thmQ9U3kcoQB",
  "key25": "2EWxzJ8oxm5NxtJ37qdbLX3EgnT1wJ9mP4rcmnYrud6THyZDModxR82JDP6ho7JAfz8UrN1FtzgLVmA9MCqAPobK",
  "key26": "ypTnnyWCZTfSuEdonMrVfYxFX8srwkYpvTVKifHeMB2s5TV2jjxduZWsxWB5KeMmaEftgshymSnybH7pKs4JPGD",
  "key27": "5GL1qUy8HA13D9XHyforvVS1CXeuNpMjMkiTBaA9HFTzpEmcozx6oUXD3xzbx3m3ZbwJ4DNa7cuiUNjfHfZbufJ3",
  "key28": "tM14x1B6dGx8FF8PF7mTrS9WcMj1G6z7yXNfHykHnjznJuEkAxt9bxtLwQ9M7rwrPFirnz6ifs8Jc1fhe8kDvd5",
  "key29": "5rzPF7wWH7wjSqKaoRuhysqzfxTTwLcpYyRUByPP9wuQSEVAyCbX2fNtUZq7mU2Q8CgGEEuiHDEPsbv9PnwXaYP3",
  "key30": "27dieasFT2c1NTCxy2ir5R5sgYnKSd6ps5qEfCR6FcbXzyPYiTBwsoSbJTWjF7bMbeEv9eaPCZuNESbLPYs8Lo7T",
  "key31": "3MAMGuGPMiudFKpyQ3Vi9R8fz2FAjF57G5VVsY3JkKdhpLDbh9GhS1an1Eu29AmpXjpbBKgUu6E8gWbeyrLLstNT",
  "key32": "3ZD4WEnDh517H3iXSzAcgwrMWVz57RTdKnuKmpEhseG8gPAnW1ngPnKccEzfwZrVPDJSgkmyACWuuZQh7Ww3YfVU",
  "key33": "27BxWg2KaeNGYR9dEQHdxDgUEXN85G2t5UAEJBtgRJG5XVd8qjeZARQVQDL2PA8znS223ypuU2VMiRTpSD2DtMVE",
  "key34": "28uUSxDAKQUB4QrKVmBdvYxTggSD7bqWZwo5vkavBtyr4QXGQozqryPAySfXEH6qbdEnrvRcx2rp84UUncJnpXvY",
  "key35": "3CMgQVuA5CFg8uDd3mc3R27mFienGyp731oijUUA9dSzVMJsQz9EzFRv6y3n3Xy9YMAFodPb6fvK3iCSLfN32vvk",
  "key36": "4yHSFC63cD2RF5KopZECS9XnV3T5DqirXjH5PSJecbnLTbV3Yruk6otLN4RHh75UJytNDjFUqeyj14YEHoeHFeN7",
  "key37": "4WLn2tkSdXWN1jaQ9aXF58ryxeh2ZkDbw9wr7ouKv6u5aNKXoQHJcTgQobXxN3aEa97pLU3aNLZ8EAyDyx84kkq4",
  "key38": "5yGYFzRspWPiiv6rbMCw35RagSEqS6H3VnQ2PsLBj6SGTyKeD6ZxqhP881gktViYWisxSCt4xfFBL5wcxHqqzu4p",
  "key39": "3T4QCwdPBqMxQmzzqYK4zXj52YkzjKrqJkYCjPo6L4rMUvyqn2CQ5uKbyJeHg1KqLxtFSPaNNcwtwEnyn6rPKm9m",
  "key40": "Xq31eTbaqGXRy8BEAb6eipYN6zGV52WD2XoVMejD98ztQ9TiEXUESdwCnU3K6FFwvsqNGywMJdHCMFRweRTqVKZ",
  "key41": "3o1oMbWKW79TCL9mmddpBe1G9KKWMePEXK7BtoPtDBWNrabPnn48kpEShL73wSeVooKyxLXaaT5nWs3VxTbGURSS",
  "key42": "5wx5mPgR2qUihjXm73JdLikr9Z92v7REyhJNE5rh6HzXZxTf4LMqCeSGaDF4aPBWKBcmCcUV7GH2kFXHEqarbbCc",
  "key43": "yhhgFhYQrzDF44Nx4dM5s24RRn5CevDy5quVWJ2gf9hz57ii1dvLTsDS7nsUbzm1vszoGLzNAnLoJnQVyUDyJLA",
  "key44": "5DEX2vR6ZsXGg4L2ffhGVUb2b4d1ggUDPEwXW6vijzrvevBkVCxF1phFVZM4mR2HT6xWwh2oqGV8DkXenVC9skuY",
  "key45": "66axTi14V58AX6Zq7BuHBQ9TzFzTjMU1fJHj6xJysdCLeWxRvsjjBzSZuQposm27cj5zEQMe9eACg5otu13GBVFA",
  "key46": "32wNqHJr1DbTe7HH3CiDFNJshpCwZE2DVRCMNWbz549WasEidueeoT24kCcJZNH2wtXtFkdwN4DbyvX45myML1Jb",
  "key47": "5g4dyJBWoRfh4sLRmBAnVW8Yq8HsYPfLb3osfordbVaBpKVcuZALyavcwvQhSV6yLGJWUhdMcNSoUwyAA4teHddT",
  "key48": "33UrziM6MWUuvFN7JkMv29sj3cSkPyuZwNijNBJbU8rKTHeqFWPU5nbsNSqHuADToxjQMrorJL63oFajn5it9cBi",
  "key49": "3Cean1KYejEGgvwahXSHh1vAHEVXGnb5NkgXGWjkuVVvigW6MZQLbN7CS1XNcBsH76fX5sNtUHvqXuZkTopNmeYW"
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
