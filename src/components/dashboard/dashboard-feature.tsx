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
    "2mZYz3cuvMyq835fYFigDTMKM4Z3k4rSsMyyk4tUxM1UVNCDBoTXdMpjRNVU25GH57HAntHB8oLbxBGMXWZjK5kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WNgB7xcos8eVZiKmombKeW6nJNUgptCvFv1nyZ2ULmL46BbLvyLtskRJtJWjo84iYb6rzY7FjWcVhptNXCFLrD3",
  "key1": "5JNMp8HmiercakSZFGxRGD44ck2fL8ajEqbDXrji6rfTu4sc1qgKnQUt5z2Uc9eUk3w7xzSJCmwMJ8vG7ioBQKtS",
  "key2": "2PSzuhBhWQ7X5a9bj7eg2y5Sq22R8BEaLcjPkFnZeDpHMLodGeXwdFBMms39raRqNT1PWpVrsccyEtqVBMRexCD2",
  "key3": "eTQJbpKNpVsreUEsx9dtShy5oyaQp5o3Eou3asTEUMqqikFYMcfyStpVTsr7e7tv3FKKE9tnjGipRjMSpqgGiqh",
  "key4": "ebWpSPU155NgxN2iHKr1kWNw7vQGzqKg1D3d91dgmXK6GFNuhcji9eEu5cGVeGViabg4LYttbcgrHvbterqEsH4",
  "key5": "4yUJjP6fEhJVuJk5x1CQwPHp9KRNhzCcVNhmFM4pnGVzV9bpRRi5XpoRzewigjfNhVDt6AD8sk4HZqADjDenYAuE",
  "key6": "2EaKQz45G6K86hcWCRGvZovzo5rZ3jZU2hBDDCVMhF7Ut9i5tkZAom928dw9dtCFVG4J8SMQcMqxQMk5LgZiiXuC",
  "key7": "3tSsC1JqpP1tyuqh7oVzHWCvr7kq8o34EjjNvChdk4DrPB7US1MazY2MV8dp2ngPTUQPZBgFaxmtqW4uJMSMzcn3",
  "key8": "dG3om6Rfs4Jdeyb67v1whhh9i22j5DjbqMuuZQYAERt63d5izVNgnESKFJE65TorZeZsUPcYpoqp5PKZbMSMJ8f",
  "key9": "23bQdpF259h7BYme5ZUSwcRyUwnJonnBvyXfCbhCWZCsCkaXS1Chcb56QPUPkfsp17ngGuTBCeH5vXzgPKqioZmg",
  "key10": "saF8zQxU94WTmhRaEd5J1SNYWSa8Yr33grEC3WhhgQUkhMytqru1XfVQ4oimBRJh45K2L81MKdihq5rmCEucxhB",
  "key11": "5tC3ySGaCmJmZmxw91XpKJnuFJhuoRa4UDrw4dqRe8FT6DiW3kX1qA8aK5bG1zGEnsZiF3zA9afMuHpZqSFicxho",
  "key12": "2gx86L8bYBQCNES4qRmEyYtuwtgXmyYXtX3eg8HfNzxHX3m9EhY2r9SUmL3PUqdnJ1ZboPhqPtXH4zr3QPqJTX5c",
  "key13": "2krWFr2aMzyrAKefHD6NK9LXePWSjzNWRSnUP619BrKsVBgP8EZ7iu43N5UHTz4P5WHXsTDhY7PMt5hDCYMHPydW",
  "key14": "54wQVEUqMK5zjh9seN7Mf4AnVEREJa1ZTndBUm4Syx7ejyZhtVYsbwg8LZepUJUrUCv3xW2vShnKXYe3hTyNxz6h",
  "key15": "2iULAvVApQ1gWVCrZkxJ1KmjoSUKuUCWLJgdEDMFGQrg8n4y5LhBz1Ef46yFhV6NNJGKmXbTBBViPnvsHNhLEcaB",
  "key16": "hG3gkHv5Y91L93FeW5MXmvNNxrKHUkvdb3wfSFykssPifd4EWoj8PR4w3YonAY9AKAYvXhwiJJJGyVVe6X6tY6K",
  "key17": "4z4tftcMojhkv3MGyhgzwNmLeLFRhcALN9FZWBbCWchWNGCisVfRp7V7JcafxeSv729P4r3yYxN9ckpBjYeRzxi2",
  "key18": "2NJmrVLv5LHGX5C4gpMD8wz9fArBGqWBazXmCQ3FMh3Z7uLBSuYiChqjRAHYNtzAM9mZ9Wr1wMPC9Z4rrmnpTAz6",
  "key19": "3K9KurdAHWWzzhybBkdbRV2TmahnrzjyEGKPQFwVa2S8kuvk6aCgJGqmFMLPYe2WJzEGLrf73Cu9GKN9KymXUxdG",
  "key20": "2SBe4kwhNNACQTEUCEbU32HZpnaSadrUDCN9mLC79DRwJjGJ5RjEKFKNghc2othm4kwWSmCevgN4nqQCjTPzz39A",
  "key21": "hGkZ121K12zJ982dZmUQpthLtELd8GiDRVaXyPFPbJvFwDDepUTGrZwF29Xd3DZLQi6MeWGubZytbsXZuY8vEGL",
  "key22": "362bYGiZpbqro98jJ2q2H2cMnPbhfUCpetDX4VsYXUZfqcMjfzUTfznRK5QgLWPBjT1qZ6jrHD62dWVDYuaRWvTg",
  "key23": "3d9ZCisB1rhtF58cMhdz3oEozNtHdwwcYNVxQiuA81CFFPBjganCCUmrmJ96iTPTkFehyHUecbCLmq44ZvEBdaAp",
  "key24": "2JAz49T52ZMbos5dqa8E2RyDKYmXPKJ4aqcqEPQaV5PHoteX6CSS8B1GktcQy3BccLb221JxBq6tHq76yegV7Vuc",
  "key25": "51yunTvaYD5bQSjNDtTXX8nBEZsfQUyZ5GoZZemDKg4oc4dBfwoW2ykfi5C1xcbo9EVrc5c71nBVbnZ6ZgWtibwy",
  "key26": "5hUDjVWmTad3KAZcYd9GeoA8wXvMe22FhrCT5J2McNG2CikqsN3U9ETDuq4n1e5ogAWc6GcRvRmwj68h4XmX6LA3",
  "key27": "4MRU4edaFZ7iMVrVz4rfUg2FixsFpoNpQETLs17Z3Cqx49n4XMzgHrADSiD1HXAMSLPPxVcxZRPmcrtK92o1Qrza",
  "key28": "5iRgTGQfPXv6tpq2weu49Y84J7fHEtg4kPmgiJY7KogLdm4Zt4DXcFJ3TiaV4qmqXCzob6r7LLdZ2mjSFLkYWXw7",
  "key29": "3R9Hafc1xWz6SRiWoi872Fd8uHYQqFRwnFMyWXjAy1bjKLJUeCnQy9ZSXgeFd6HJVgTWKEdiLaytadTuMVkwAaZv",
  "key30": "2piYzspaMdayduSR1GtaBmhzuNNDdfaRcaxvXazJ8G1ZSeUM1AfGgVvgh3pWEkedF6mq3gawfpuMaVh7hvnAK9iu",
  "key31": "5h2o7yphmMveaufjbZXR4NvFGUjx1v4saew9FUVJWRRgKkqzAg9Mogup3UsQmMXQ5sYCAdYqbFWLE11vbJdZjq8o"
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
