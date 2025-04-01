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
    "4A64XJTFWyTMTTUqKDdWiQcJrZZj756m2AQNJKwNyWf5L2b7kFT35ZmGn48CFq78ytfMpmpG2kex6t557CGVcinJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kaU36gPFC7ydSX1TJeXo2B79TpxwkDWKRBeGjsesRRQCg111njNt1PNDjKCjbQcAPEdHmKrRmJgMEZftFRvC87k",
  "key1": "3cntWgeAXJN49QMd66jsp8vSqmnF7AJMFWVWBdVW3tCbkkVHQFskdhxCdH473UcGob7exVWr6AxSiBmB2kA8SutT",
  "key2": "btN4ixKjuFRkTexgj8A9di8sQd9ujYhdy4B8rqKCS7WYU1eNVK19UZVern2G6bt1Uw28GcFdNyF1wTFiVrQgJm5",
  "key3": "5KsS8mszwF9FvmU62qAV64JmP8kWMTMhpYQZbDcdbUnXr8xPzB5EWZx8AA7g4EStLecAZhcq3jVfNL5kRq5d4Bgy",
  "key4": "2aaabuBtdh8mzZoXqz3cgMRcCEz8n7qLPBdwcdD1KY2AaMNBFquUjiC6U3766Q81q2nR6o9S5xxuUqfTXyq5SQwA",
  "key5": "5JStWTEFJnys7wHeL6hSmTN4rKzjcJkzTrUtWdBoiukcd1FssM5qxJiEVBgzuTcqJekvVJLzva7bbNJF2BmTGK92",
  "key6": "2Z48M4Rh7p4ywNgadcwUrFxSrPpogs6qMQ5apZJeBCqx31bXAEKH6wQS7ZZZGTk8YQwj57fzwbLF8fdQqqkDMU63",
  "key7": "44YoF4eSLjW62w1xaWU5mnkdVR75phgXFVZeUf7XXFcPkBeLKXwoobGXmis1Q4iwrRAjkuJSaoKHt5gP3Wbv57yT",
  "key8": "21GsCgXQ1wzV4TQxWXx6P1xkc4phUpkvU2dn4QZzW4B7snq1f9w36xqEPF3QzDbNriRH9VKxEcwzpWs6Az9NGPbB",
  "key9": "A3TZEYuACjvxCmH7SUuwrDZVjhd3CofFimWrxqs6VgRrCPc2FguCuFjcckUSvPiXTC1NGBMFT8juUVyCdfsq4VF",
  "key10": "4dZaAnQ1CFPVms5aSnjwVtXrH2CLGyZzQVQroUcKwWem3KYPZsuEjCPQmYDQ55BfXQCsG8gacZNS14ot8uErLTYL",
  "key11": "5tjCyUBTmFdN3SskcRaUGU7KptaFYeHYFV3NF8KPytoc1KeTNQ2jdh94WC73KGRJ7xFCY8EnJGJyxJYcovjKtuRL",
  "key12": "4dzATvRjm2rHXCmB1inF5VnKCHWb1a1BWrA1Md6QtuZWXa2TLw879aPzYAyeCejuZPjpRpoPqGTyX1aEwc5n5Md5",
  "key13": "DniqFLpC8b7j4SmbkgX2mVhvxuYeYM1qsGR4DnpapML9jm8QvjHjG8WBX6sWuMkTvsKYmeJVZzi7DaBpM4YGEoR",
  "key14": "5EEC4G6rQUm2xumqLE5fQBzhRhpGQELU6ZGj74DDkgp5vJW7L8ovMpWgPJ6r27z1YLjEpotkTS4nAkcsnQae1MMU",
  "key15": "tY8tYKuhiqUcE7mnxfEAwjSGkwhA5tX2amXXhhuqL56sfomJQ2MPkMqb17p6bXV7bChEgUVUp4kAHeXjty9iMZt",
  "key16": "4QWAGJqRYHm7GVZnCvXmaL34V9vFvdoxqPaNy1aEubBFTVraeBazo9jc48EE6uXnQFDERgM3udxcjyrAvZzU1HEF",
  "key17": "3J7UHpa4MuU5aRjfbpycrGSYQ3vdxRWPNDTTmzrh32a3WUtNdJPWYNDnHVSfBPREzVBpz544gxvvDBFN1y9rJHNV",
  "key18": "58GMq38uCffLHQiUeEhndaRR6s6YDmpBehowpuVsrS29EeQ7VZMKNtXPTMHgRr11NRMgHFLHh978tJ5WV2vDTDfB",
  "key19": "2qZ59LMfrQBirFS6TydnA38cXupVk5sNaPnoCxooBA7G5g7GPjbGJcvU5TzZjv6BdJQAckYJBHUoQYLBfyHFtWpf",
  "key20": "3CzZPJcR5YdkttSKpJS9WFPvBuj2zYR4qqsEFPtqqG5E4AuUoBuL7Vh5EudibgcA7aPsdYcY1HnXQpC2fgVvxrY7",
  "key21": "53ZRVfRXF4yaptknbz76xsTLdPGhhZFGx1Y4zEsf3JJLPgxXugGY5rapGXuyAsWMeAcxpNyuJDr5snVEbtTc3GRk",
  "key22": "5pXcRNtg4Tuk4vtZdLdiPjZrVRQsg9zqqUjdSKeujJhBEnMS3zuTjGX8AyQzop5REb9WjTY1zgw5E8gezYggJkGt",
  "key23": "RRR6euRiKu8TaLmfMS9KjQuWVs2zJv7eACM4qBKszV1PcjkBRqwVsfAkisQsrRv5ZiFgf6dhU341fNWcgzHa1Nh",
  "key24": "5XYerGAvmGwzaypMfMinMMsWK5CDLG2DPrqYbDiKbcQsba87KbnULiZdbsAPKFs1Q8DieJVu42W1b1JinXSvmWtf",
  "key25": "67m8SvetTjmeg8nA7Nf9zdaT252uAqHp6LLZ2pU8WFtKenggvoHv6oqE644dnGPLxoRHQyn5BYPvab9yaLkNTM2o",
  "key26": "5DfPQWj2LDqTzxqWHF7kzo3FFNPYD2ZRLZADxpcML1274hMiBTgNUNS4jrWMURpe8kRy5tq9vaAP9gqLFSd5PENM",
  "key27": "4XZrR4d4m43Fx4edui8PUKFVJnApVkcDvq4J8wLQj2SzFUjzbDZAwP9FSU3mLkszZhGh1cswAuzB8HyaJVo3MTLP",
  "key28": "3ei3M2VSjsMXvhnuiXtXWPfZNMDtRCmU52n3Qfu1KKxGZu2Wyy4BqnRWyDzrWrm4M81FCtaxWFhncVv2T2D4pWkz",
  "key29": "2VxerPQboVEoGu4QVXrY92rEQttoXanT82NSYHCEtPxp22i3F4JKcSUJYm3SAWfeQLX3kgTnur8haJg7K3PWCu9W",
  "key30": "3FqJhDnie171aj42mzFQFMHzgzLAyKaSaYMEVH2cgaWVu3NjW7umtxYeAfbBXeUoHAk9Jhaz3cf4p1GSUrg7EBag",
  "key31": "3NsZ7JXKjFCdMMvN9Y6wcgJ2USrWvtCyZTp13w3kNSC4GWWF4L7R1EFZSuGfrd4oPdgPyMPzNHb1oH9sDoc1hJLr",
  "key32": "5TrHrT9eUBLotHYwAYVTv4tSb4NVvPRH76m3rDLuKj5Y2aPxPjYuLtXmjPqiXruedqAYYu47ry1FByw4ShCSii5V",
  "key33": "5GRBH5Sf6EG7nZNn7Cvf664u3kLjxVbw4ogo9vB8pk8YACXdWdWpHzip4WczGJiuvLhfLFCi64m7bEt9ojHfFjb4",
  "key34": "5QrVmZvVE5DrShzp99b4P13QvaLo9YDvG1er4Cj6aPcoYF7g5voRjzLbSXMMj3LVPipxVKwjY6gVr3givQ5iChM",
  "key35": "5BBftNNpX8wRdE2x5vKNipoCYJHSoqHH8sjPGNJKmRqeNGo9raMUkTNxdyJzQ41QmxW6fzL9DQkdG5HUwuyL8yp9",
  "key36": "2KrKcMwtMiN8o7qfxPh7s6nsbzdyBUNPi7FteJJvuTfrecoTyJ7ec8xN2psiwbuanJaUJZ95EejzCQsyZVD1GT8B",
  "key37": "5ZkrorbAZLbSorUXCQcbF125DX9qfmj2Lu3x9WHPGwhLhjjnU2xEn51ARgkr9uJz9giNY7Q5wZG4PKrNPGoMUJSg",
  "key38": "617N7LCCVxokCfLAupJm4khHB1zah8sYB2xL7AttFdL48GTre7kgrJD1WGRSbcVzrzNfUhtX3UNSLYzKuPvivVwq",
  "key39": "2u2tBT1HBLUEJ9rV4FV5RKw7UxADTk3aN9AHVcfVARWEVELmFxcYLBLDuFaAz1fHX5DGG1sNGvh8sFanJ56fT97P",
  "key40": "3y36ouW1hTHrQc8ZKwdHB7NmveLgUEVXwuYx8Xf4wLbXG6VUi9b2siGwtMLyfxjRijNnDSMPvGTXja7eWr4Cmzdm"
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
