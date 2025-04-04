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
    "FWEKSPUHJ8efFRG8o19rvJJhSqHnx12qtHg3dzgXSED9tZtwQDqF5woJt1aPAb8a5vgmAMioocQZKq5dq1DU4gY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AW57Pya5CqhBkRX2pc6L99zGiy195fMkk7437FaABvYe6Pn36YwsNkveWmo12C1KeLEp1xoFqYC6PGq4UFrXWbY",
  "key1": "FHBV6m9Z9ocLhHbycA2j2X6jc94wmL5nnn4DCHb93Rdhze6KaEoWUEStqSHHfMmhaAUtN5tpFkdvut5dBZn6H1f",
  "key2": "5TWnCaFoNnF1fBeedUP7z95VQqcpQkXXkk5yUCY1K4hKmhD94ERmcQnfyZ79U9PDQAXnUgJ38ZG6FHnTp5riuJTM",
  "key3": "2cLLfEcLy6DoTaq66HPouGXaqhNSpKeq54FQZs89C5NphyALignsGhP8HE6SbF41eo9R2qUS2G9QpDmMXiVaTBJG",
  "key4": "2apcJv5NNsuV8LDPfYxRJmiwuXCA3gSEYHaUNPCijRYT2KFrQVsnGDFu2nTCNdkFBAhtGPhX1ZiD8tGxqCzVVi1T",
  "key5": "4uTEyqyGsDX4adN6skjiyiPXMiAWsYnrz9ix2acn5Wg6uJz7TvAgvNEcZ73hZVgXCVSCT4FYnzhkAcjy9v3JFKV",
  "key6": "2cDsWfNo5jYsy4CWC4eg5WcoMbvjsLxgYzAYzvV3vXU2yYmrEsy5Rof8vbc5YYRENuveXxiYiWzP5ChtGQPZX3um",
  "key7": "41aTnYwuXb2JEga59EMpj7YVLZzK8pGZuZJaggPgvmgbFY9HxAYWzNUVo39qYdwqVqE64nENttXEATK7NLEdwDbZ",
  "key8": "3HbWCd8RTN39LRzN62qKAXW7Z88bNE9D4X24nyAr892gttGdZQBAkwZouYecRJezCokEEDeVecwuBdvuESzg5x3b",
  "key9": "3BwZ7Bv2o5jMBRHzCER84d9xHzd4recZxx8zDGCDPpYj4UWYkzmuVRMuGtDx6yXq9ts6jccwcUwExtHzQx1HMndY",
  "key10": "ks34syxmxsaNnfWH4w9yMVQptmrz2J1hX9BK6tgsY7DyjBvabKmiagKHMktB8s6sw5bcGGLKefwmRHWNDPsJvYB",
  "key11": "H6AdvLwvjGWU6be5N2ENBSjALxDELt8AFpMwj5r8mez9o46e8jvZ9Pfusiv1cDMbGJJdMjFKKEqEjGJF3r52HRA",
  "key12": "4Jqrhjamw4nFGDRsDaYv8cySYoNhbsERbHHPqeEYar5N2keiFqV8xiyR8s9EXLXYt4kiQXDEXExwGbAieqjinrLc",
  "key13": "2SEzxCzn2WfVFHtob7FP8P9ZvXbsJTYsQQW8pcaALfDnVCeoAQzTrNCkUL6Nfs8SKB3XGk9EiLgY5bUnkFgmRz4n",
  "key14": "5pL8UavoixchRnFQV2aRufHFgvUMufxQRjQ8KkMpKQ1WxDDfMFi1mMcH8FsgwWMyWYnaryFS2ou1CRYxN515tNuh",
  "key15": "FZVd7xe4BQKynmwTzo7CrRbZkTVGfZTqqnQZwwuG2gU2QwoUag3Et4EWrS6Jazse9WQigpNjMQPmQ9YdcXgRvEo",
  "key16": "4LVBoFgp9r27pgknfAUkLaRCbwWgSq6kX7F5u3MLmpWD2S7GYJVotn9kzhDEj7Ji63X69vXHTwhabZ1SA3yMBPtR",
  "key17": "4tw6tyikXuuZNCq5UPk6B5srgThBT9tS9osFDoMpSiGJQAotny6nCyb5KwMwJDrEYw6U9aFSBErJGWFrCBQdhw4G",
  "key18": "674gwAU6mtLk1Xs3UHcTz55CVo6EMScFvHePM5FcB4WZEDpEEMJ13Xmy9BkzATYxiX6wobLxuj2tzw3KjJxR5B19",
  "key19": "5fs8mGwaKBifqzozFzT4HE9Mrk2XQqMaPynJYa17SuguGPwi8CJ2Qja5bh1j8dg9VdShaAA3QQzoFt5254yXfDCb",
  "key20": "5Q9Kp4W2TTo8LHVYaWfB9C5ZifZu6yHnzNJXV3Qva6ZKmqcsFprF6vj69yJtY4czWNGPHfDEAZfbfoqJmxEpntEU",
  "key21": "367sjQLM3fNUtqs6ArAUWcJcC51rZ4gNPfHixCc5ntAt7y8neVCEk2ahGgn2hmtaJrYduA9teeNH516aBcbzgeng",
  "key22": "4npginbuUxZ2SEbbvinSGVft1Qi8kdAr3XYFU7f25JyrJhdt75F7G1hjvuhfeW5sb9Bpt6su5gHMhJCFhtQUvhF2",
  "key23": "47S8BZ9UYpCYyDTjFA46hmzs7Ta7aG8TCX3Fik7pqsawufLa5wYeWMVCa7fjh5J93jvGLYYqAtbhf5By76fHvVxs",
  "key24": "28pVZKuiL6ofFtviJ93Jdqcm7A9SaAi8RPEjukyUB5fxqmBZY53Ey87DoWVSEemwFDuooagmTigwFbi6ZUPcwBtB",
  "key25": "mH8YgmzMdMutbPLDMdfFuag11kGQEFCSpmsfiG5TVrNudEfBDmNLv9fgJ1v7uuk2mfL8mz9meEBVvkyrBYvoBar",
  "key26": "9fWVjMHQtVwFY7Hm6LtLKGUhw7Em8QovFrBzmM1EaLpeqqdYyMJncaFdjwpoTqvaF18kf9hwsVJM3Ghj7VLrdjA",
  "key27": "3jyvs1jSLdsAeJTHPi4ishsSjVqynJVb5LudbiZEMH4x9AZ4dMdb8EdHq1HHvvkx9A99fCnQRUr2GzMi7T2KFNEq",
  "key28": "38ZwYQp5Mu37QZf1cCfgcVLmpm88a7fDZHwoGQZJo9YRFV9jeVEUDJ4ijeJxSbsU3dRiuVpyYHaKvQmvqHJ9872A",
  "key29": "HuWoYvVgBBhr7XwSbmswMUYGwsB1wGciD4i5izkan5Jes6D7sZx1dUDJtdXuUYTF75Zp5dxhKmziJK1cwKwJs9A",
  "key30": "3JMKMdBVgguWZSKJYmRmna8u5b5UTBQKAYwKr9MEvXRA2Rfz7uieiiZvFY8kX5LNhBJqmmrtXtVnNyY3fd2SdGYh",
  "key31": "2hA153mu9zXcQnx4bL2uM2eLpnkd3cFw8zgVYMUk8iyqWi4sqpLiNh8XSDWhRnXGi4tyLM5XcKmwg6f1LP4CjmmA",
  "key32": "44YDkV3uvUdZixVSF4Nts5Ytbr3i1croCubcieQfFQPg37tVJ4m3VfZdJVirGqfXbdpfN7NMurwEXxEACKt3bcHp",
  "key33": "4s4aoMTrAT83ESpoUAGU63XByQSUDUDzmv71rBRq78cdHxrLMdhr67RrB5uRv61sbviE9BzxeKcg6DVQEiC3kGfW",
  "key34": "kqceLSi6DPyZmqfmvduvyJ36bH5G2ZjTSi7RJwL6Js1AoHZ97z5R5YurCodKEZVk4dtsLcqQubNjNdSz4ux5d94",
  "key35": "4xAkZZGEswsKk4MH7cZuLrwZBT2fLzx8dwh1M7X9qJXLYsnfL4h66a1TUnNqLFgaDVhiEaLtQvFnLFxdPkAoogL4",
  "key36": "4oqSapsePqvACNm5iohj3bdxZrnmSFvwBabEvxhnyL3hBeud1vQnNC2XgU35uPmbTHDidMBPdYtquzs9RFamS7yd",
  "key37": "4fmtRcoA6m4CsUGvMjfQ9rApHUy1ny3xCTqV3CkUK4HB3GJsGunBMY2w7fDScZroN8P5qpJn2zaYjVQbqNGCwSRH",
  "key38": "5ywx5Ht8M3zGXwxUVikb41qEjmR5yF1TeMyP97PjpZkP3Jajj3XeQefdgzmWQYY4T7dS7WhEVu6vtAXRfoFnRz4x",
  "key39": "4SDHAQJ84aczDTAiZR3B3nJdXBTMsgBtXY83YZu5CWUdbVtxVa1qg9LUQnFiUjHAiPz1Y3D33TgEwNA1h6TTfJnZ",
  "key40": "4953VTkLY98Cq9wjajQ9QZz5BQ3wu1GhdSwCNa2BwptZvjhoanXDxiaA8U4YqyfsRgB77pPprmMiHDLoNH8CUCk4",
  "key41": "4rynGMyK9jirg5XJP5heZU554wLrezWtigwAgLf27sfrRCLcWRXY7HZYQ9pF28TUDUfjT1ppLmSs7zRxb1DgfYuj",
  "key42": "4z2BPELHHkjkrEMKMFsWPeemTdqb6jB3VsC7F46Fi7rpbBQZeKdX2c92RXuXekHhfo9h9r4V94aBTursECVKiEW5",
  "key43": "29XtJL6UmWcrPrdSA8jkqdVn2LA9NRoqhEX3e4UsTTmFdbtHmafca8x8PN65obCsNxtutWEWfDfspxTSEsAVvfVc",
  "key44": "2FGTAtRzj9Tt1kXVCVhf7w3PEiMupgDbuSkD38rUxbS69UEz8hLMJxFHGNLdkie9AiX81CMj2zdmim4TaG2WzH6b",
  "key45": "4wwczYeQ6sGdkouTps5yiXZsHBjeVii97Dwi4wehfJgdvoWnf6B2cx99cdB6Krq5GF9eo2AtKVLfB5EejDd79U9p",
  "key46": "2w7sUAZmLhyhPxhnt6Pz2pYE28WZehS4SjMzfPZnC69GvMR1zGDZQiPSovCdYMZgNejokeYKJ9FjmyS7twh3k7z4",
  "key47": "33EDx9B2Nnpf6SdaveApqUgnkQ6r5qWjUBrvsTziys9RGaHBV5pQqFJrKhzisqCvEgoPXjMj33gVSpFVkuBH3mTw"
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
