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
    "LGDLRj18V1XbCaEHzh63FAeh5oUByBcocNVwQ8XPg8ZpxbVBEf3UdvioBXoNkKmRxVuovhUmf5AzdXZtuY38KvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQSvWHwvV2PHuMAmvxzyB89dpbYopcSe3ppRB6DRwKy7vPp9TEDzXRdxrdwsfbqz1DELxQRKR4LGDF8XPjbUpCa",
  "key1": "58rvS1uxfwUBYoneACyUDbFxg44HYnYXvDuHVPqcdxBGw3EEPkpLDS812Ajkm79L4BbvHTxPNZ6TkheocRmVRDKw",
  "key2": "4xoV52Zq241ZghppjkGRJJoGYJcQzDNFomz7j1sr56zmaSVBKKyF8nQKssen9J4jJEwbQHXJTXryKTGzESn5qzbY",
  "key3": "4aHRaiYPYqtNSGPvYsAofwpx6YhnpMu1u7NJmT5Kncmq1gpaMd7rVFiYRZ1ogBQLx21o3FWrNPpig27xQY59SAZt",
  "key4": "2RwyxnkiwcxBtESpCtBH4t2ArULSigBrsAtMG3Ltaa1sbEE6DsJ3DZxqjAE9JqYqAUHUbmf29tDrgKS66mds4LXF",
  "key5": "443Zfe1usTuCraCNKqwJrwCiNFBLDLjfEUnHguM7eEAPpb1BXugniaTuydZfUwgqCkzno5cSmuEF9g2NnNrMRths",
  "key6": "4tk15GpcosVAW2DhdxmdamGNwFSyfWPXJk7fF7eTxtKoAVnKwdJ9ycDbkkzwo7jP35sWdDmFxB65oyqJzXPcAqWQ",
  "key7": "4AXTJUXeeFbRvZ8L8Tq4P7ivTjdTqR6ykT8N1gHww4D8yi2LHjcUssFDH121mqoCS6LpBGyCK9uVBqAqCQvvQ5n9",
  "key8": "22suaKN7U9iD9bGkRwE9SFhkRfqxhXfzEAyv6ASTvUTnqT3jttdBk4V98geAwxUhtLBMzDXspEoEAxi8d4XXe67g",
  "key9": "4uikK6tejA5a1h7G25mLTKtDSDm2G3qsLACAxyme12bpkpnir1jaFgLkzCyX5D5kQrs9Jg6tNqtp5wRmK5FxEoCX",
  "key10": "3rrMXeiRjhv8VG6KMSttdRhDFaaRsHRCyK8f8RucEMQ9h2xee2Rk5vJmGZh3irqxiuYmJuMfaAxikA8C2MBTsgWj",
  "key11": "2Zxf5AFkDhxk1p6SdkR99VbC7f1qHc9GHNwaKrsrny8Xtke1EaMaynRjRK1qeoqpdfvFHGhicQ9yDtLiFhAXeuRC",
  "key12": "EMNDk488MiDyS2kZP1eJAjMUKGsFnex12eLHuSLRrzLS2Q4UL2QqBuNSKyHWD9SJYsDJ65ZhV9FTTfg5D9A1Yit",
  "key13": "3SvXEozk7J7maWP9c4qdMzkYH3rAJfRZhswMVR1DHxCjczw4qH5VG4WC3sGShRYkYsUEkC6V5AhQ4d1CKwQXAwoX",
  "key14": "JnDGET3wJAMbRZFsft6827QwRH3MEhQ2w7BintcQLbqL4v8fE4DY2yXfLu2UFRzj6JHq2vy7PKLLxYtEcRcKW9C",
  "key15": "5AqDz6MyqdsyBT5x4TVVHWH9xzYQRu6HcUUoH1gEMjXFQXGe3jWXt1hmWTHKhAM5jLPTPQ7m284ydpGKMLZ24Mnj",
  "key16": "vohSYGoQaXbafFZJFCHjzB9cDznrFnS6UFrCxVA4eicsau2WrSY5NaHPQTJjXq6eh2NKbmoME63vM1Vkvei2RBs",
  "key17": "2vba7RMyENRXiXpmdKrKYWb2KRX148Q9Yn9hPPQhfGWwrYn1bzUB7WMLmMEppd8hRdRDVV3Ar8TGTi36SKfQcJMe",
  "key18": "4Gi8RTrXprY8gi2RUyj62dtxC8DbMqSxSMzbadAhZsP3eEV3NGz68FCBH746ZgszztsxkD1pk6JQ34BCzGNWrf56",
  "key19": "46GSCwrUqyDRow7g2rbpy44a82AuRE5wym5FARhvNZPD2TXf67R2ZEr4jjTMBs7szTd1RZw6PSeY556tQyVYHh88",
  "key20": "5pMfjBB23jyeMbCSGiQteqKNFZamUwqv6mWt6hygiWUJVYNFDioLQZfVmVEnMu3YjF3XttmWJyF1qaZ9j3D2oD5E",
  "key21": "4ASxHYMLo8a3ZUan9oVai3tk2vmjjCPhsCwBh8PrV8NSnLTUeNBifYEQzVVugj9MbiFCR2jwamzWERKtbwBZAXxj",
  "key22": "5K4CTgvvhqn5KravXmJzSKF4UnwT8Bwhoj6n2HNRmW6ZncrfCV8KYhkJVMWiHkK5rd6RooTh94AhGYmGFi77oTMF",
  "key23": "NJb6D5UyDRC5vpRNtCuGCLxBE4xC4Uco6m3VhypsiuMRAbYdfNxVJfktvh5ty85TWDqKnF4zwyvsxDPXpiouNSo",
  "key24": "4SQ1Sj173CvDGogUGnTRPVLNjpJRaMfTn54fTvR67FZoeK515orPdjVEDbLTmAdfRdw9bgZJNv4Xt87n6a3Fr5Gh",
  "key25": "67Ay8X61Law7gfgJypnc3WXsKyBwSX7TUGqeicaPJJGrPPf1XkXrBqyheGyRDy1RH1ceSyiDwENtub3AXj5XBPEw",
  "key26": "3cPrNEEYaG9VUwATVrgDa8YSfqmUpsJzXfsMehQMF7r17V8SBtg5gDhNgd2PzeEnm9YKh1TMC2Wxh3kJzzfXXrhd",
  "key27": "47FaESvFHPpWGbJinfGjBCDiFgdXNekfRJ7EfRiqQUSSUp96U644dTXSV5Q5xyLnjPWNaZLV4128KtRVCsXc2iLG",
  "key28": "BGESBahwop8YAJhcrvVuPMrbd3s4xNwxZemkwhDn9G9X9ePbGNfNUDqCUmBjJ4xrYMepnZNmwsvcqnDs8qpt53w",
  "key29": "5h8CgXTefPXQW9t4FY7dqvW172txUxuLVhmf7zLRZ18VBqZPYJMLySFXbYdM6LsyzTdnWjZdz9yPzuGjdi8n6KqG",
  "key30": "5SNurGMeai8E5HckMEf3dW1949UgHoLNGjHvSTDfFqXgkTvPvqHeiGers66izbTGLT1PQCQNgompGppudXLwyRdY",
  "key31": "2Us7aVYbjD76wAvnXv3LmNuvcEnaJ8bgZF2Vo4pRYa1HE7ncQ8Jdkww1ohPe7r411bRFrrFoB8LGUf9inJGYeaJm",
  "key32": "4khKFYE8m7gDYoBmnY9rNvaAmyr3iJXwoDtJWz9b5dkLjwrCsjbkmFgCqfwoMmw8ouPpRziCunfNRt2sbf8eM52s",
  "key33": "MatEPGv8XtmSP9Tr6ES9vsST4jCLEdDoKS9gNZEVEbaCUMUkNBQtigWpWLLjbxGdKEDia9Xky8MTq4SBmmmWpVB",
  "key34": "5qpnXLNst1A6f3m8btTSgJ4hCkCKXy9fawipS42eatgpxQGCfhqiKdK6ntxXzSrc4RmFrxuYq5bkV3J8fCFds9Fg",
  "key35": "38mdoZfdjgCDu6Q2xJqbHedLGC79K3iQoaWeQCUof4jepyjA2tUkAXa8gWgEzzFhxnLj7K52vf8oY2yTH98UUVDD",
  "key36": "2xLv5Wf7rbCgzFfNyXLP1VB2ordMbGpoCNU968wd18GNe95zQVrnawQDcDmu6hJ6tVHyLYt21TUCqpK273N6nFS1",
  "key37": "325TPfGG6eDcgqpCa5tMg5pFTS4PxugXG2MLhRuQjTpaE3XfFK6eDv9W9RogsWQaBHAqxGCUM4BB4gxyBwsLXWN7",
  "key38": "2bUPBeCaE4UM6FJg8dBkoCgE14mePdFBm4C3Qg2JkbyTRPjJUC7Z9J4PgNVYjsKsE4ZzekYGvJHXhdLAekxMAhHz",
  "key39": "3NzBApEyHe6qgH9Xq9cCLG1SwEAeX3mdzgLv8D2B9pQRiZ5CiREjRnArg67A88RDwD3pQi2V89zUhxPUbhaYXtcG",
  "key40": "5eNUmNHLKg62Me6f1NvceqdMnAaStqVUNeMfEku9jTp72ffhCWJcH63tcDox13mc7bJ8PdqRbsWMWQ76fJRP8xtr",
  "key41": "5jMwexeiudPXcvPdCZJd9muzKwVZNHa9aArK2bFpnvmqn5MC28dgJo4R8pJyw6fj3trVv3aubDJj2qRvXAk9Ny8E",
  "key42": "3NgjoE62tLL4EReotiuRcLiv67U4y38NkbctprM9YagFZk5GmNQTyq7m4fCaLompfc9zx1i4ETUApMCZpsMifsA6",
  "key43": "84CMgWywpmdZ2ppLMV5w6iHb34VPyqmoAfgHfmJ6npt9YsfpKQXQi12jgENbnGaMSp4qrny95RwC7RaPbv4RpmN",
  "key44": "32enwZdE88PcMDuY1pS5pk6i6QKZdhaLC6W1b9pTLEUsmgGgrSBjRZ5SgoqK3wue63ZXF91fvuf7JwgBEZ2kJtci"
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
