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
    "3AWzNWzzWZjX1aJZkSf94MuUh2gxnUb2Fbg544fxZsYV1Q9UC71XY91YFU5xg5uoUmx8n1P3pyBtqwPoL4gw9o8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TTC5RibkrzuUR4zkqeNBdMVdie79PtUwVwQKc8DaY8EAegqUkPsUpLFdv3bZ5pVhRGGQ6DVzuiEHFN2ouqApnoD",
  "key1": "36RUWUYbVDPquktLyDZEtbT2kimiM1AoRjfHNwjt3dmAjL4GtKXo4HvTpSky2RAYA2gwrKvXUow8BfMqDhHTU54i",
  "key2": "3qN57uYAgr79EoDYXduF8qMAy14j1Jdrue7mKaTrHMBYjRQBAD6cGVaWGzZC3DBbGDwnDryH45iK5TpeaugiaEeq",
  "key3": "2okyDGz1UsQwaPWLjCDivzBn3mVFwPSRnEMKdRf5DBfNZQeHmzbsx5SJrYBpTvQTdQozBQwjBHJRqR3oARsAC49a",
  "key4": "33rX3HzJX3TXb5ZaktVrE1LiNV69KpbAeUYB5k7TMREu2sbtNN7ZjibnNw9YRnMZe94sJ25G3HSrvYHM3p326JSu",
  "key5": "2PnSah4BDvPVYsWSN82xoW3urcLadSZYBfRqYftmasFvvbQQjCpFiVRBye8iTTusdiFGAmzdoyof5Ehe49i4PyDw",
  "key6": "8iGva1TR8FuSWDynhkbYK25vHnVZ9RXp88ZJ3GxiXE9HBKeHbyBcTyRM5wcYmsxPN1DAWWSpHBEi4824NfzAPGS",
  "key7": "2gaYuC857Aqmqekey6BEhzdSjEZUZzNUKDzgrNLUJNAYD5uWbctz7qGEjVmTVFm54ytNnGNhyfU7JUo8p29VyPSH",
  "key8": "2HDTSMTQqDzrWye96YULcWkdU52rz17V6oVoT6D7Ja4N8b2Zn8CcLaZ3TgJtqGaHZaLqgawGChxdXuxL3r3eS91g",
  "key9": "38o6FhYp1HGUPsydWrx3jFbyJ66Z5W3S4gWfFxVWXBUCR5BFhEgcbbwhEg9npcWZzQmzUWWjQjtzo3Kq1dVHLHUu",
  "key10": "3wrg6MacG9qfTn5UqiLjPmNqrjy3dfLroPi1GwBiH5DXGVKhdjFNoUtUMKz5nQpEDkj2gddpAH4kMgVnG8ekEtLS",
  "key11": "dXwJbmnxhgfvzyub2YYwCcwaGs8QkT2YNkTe5rJYPhCPmKvaAvf2xKKgdCbgKUcvQJSU2uu9bJqH8f3wbZWBxCr",
  "key12": "5XHR5PxH4iYBS4tSweSvKpfN3sELRz98KkuB2vqRy7EdqMA3qm44eNqgzkJvRoVyvuGeT1tWVzntSRCNTg7WcYxU",
  "key13": "267nS4HxZWsdVpCuvLrXeK1tQNEwZjVmR7qekwXMuZbi1PgxPT7mnY1sWL3f3b17Ax7bWNbTj8wrXNRwqGUBtnHq",
  "key14": "5KVQsz3tsTv97pApsAc13h42aKr6P4ZBQecFXFFe87qv6hZxeraDjGi8UkspHHASAPfGiHtjg5qgikSiHHdFCKET",
  "key15": "2eFxPXJGhEiB2qnd2EL9wTgY3WSeTW6uX9kiFcz5D5NsebrmdrgQAqPaJPXfMmbb4rQVowvQgionSW68JfA2ZnnN",
  "key16": "RUZTDZqUViQDyEhT5F1wseavfzhjd2PH35rLJxcREkwayGsfYukUfaRHXjU3TsChJGqRiTg7UVUNJjMkmt4qXZJ",
  "key17": "57TdTXus6n7zShqUTki6kXfWdxDLJvnpH2um1AZs1CwMBewubKu3KqLCXPpbXYFNVrpVUfn7mHubAo3SMMkqLStM",
  "key18": "3ojwNaQFq8RCW2iSDLZHyxskVuo5TbrcteSdcXyYpA1K4ZkEV3jqYVdGkVBrGs7VKDvfcrzGoVLFQ26PdxBqNVks",
  "key19": "3vvrUtNRYX1r1RC3Sgd2vhRXyvG4N6ve8DWn2yrKZa7SzFXZEpkG7BGLvT4S7MnMoFMQEsegopFyVbB3XNpmnHTg",
  "key20": "5pEQsCcK996XxDsNKKNX4hRocTsxjfo1K1jgupN8iv1CvCtwsS3kRHe7zuh1iwb1N6No1x6eTQJwqSAwTg6R4UXg",
  "key21": "4JjELBLfoGfKDbNaLWbKh1uQwJCqLUEDDbJx9s6eK8Q5baNuzzrLikCuT3GgYmBEabwFNwYe63WFqxSe1TZsbsFL",
  "key22": "41dzRGDqq7TC3HEAFG6aqutMe8BPtsph7k4tTj5aFtbtzRZt22fmVwQNrPmND8YXTVQH8NWXiyjc5oB3pjtFBJXp",
  "key23": "66ZWBCSPZXUb7bYTz3hNDFfA6NCNfzijL89T8AAFS2mi8gS7A3JM6NQ21wYyo7vK7pwF8gpYA8N68aL3kS9kjyyo",
  "key24": "iCNuveFjbPprfd7QjBRHcSDfwLEU26iUYc16Kq41b574pqdWXPqKRLQy2KepAiDk2RQQs5pnE6V5LppfJEKMD9i",
  "key25": "3ip73CRt1twpGEsERNXhR367j2GapzB8Cfoab6LggbHzfFwXufREuRMnwar4bNjLevHkwj9XoDt67bEd5UzbLtLH",
  "key26": "5M7bNmgLr8z2HG8TN3nvZtjEGzZ3rWw7XhfDywJEMGF4XK9spSfnddc1oq2gca8mEfeSjYHCJz6Cv2sey36ThvQN",
  "key27": "2DagCgJwZTiraYes1JdaKVK7uf1LAA69HtW1RhCijypvFEF5bDAV5FHRDdjjLejmmGdtoNT8DPwnywMpnULJnywM",
  "key28": "4TwcNSrfqd68TSAWsbXZq32R5JuDVdfsqN4Tykj4DbbxSzUKnjw3sPHxUdMaAJ3QCzvbTdz3KsRDnyL8xaLvbd5K",
  "key29": "cTEW2LkPs2t3146tqabp9TBx7stJKtSaZvwPHAtynumHMpnit6qTUY2it2edRLTckNuE1D8ipWrz1MgyEubG9Lj",
  "key30": "2yCjYnRrD1Rv66VSTTwFa8r84WCtrigeBademawkd6CNHygb5aXqyUQqbaGrtU5ABgAq2Yk4nZD1CF7gNjJphLCX",
  "key31": "64sW4wjS12fLJqoNpDGwy9jJVhbVpaXZFVkoUsC3cWdzHrN2kXmsicAHdnaqm6vDtsRhXUMyyXGkWb6k4XD7cNvw",
  "key32": "5NnrkVqrnQWfBayZ4Y8GXTQ5WgNqUsJiNy7NRcwSFVxNLvv9uQVe8UfQTTCAEEg9CQcXLFur9V3Q3VJGiVLvURA2",
  "key33": "5CJAEhrMpu1jR6vHE3u9ju25NZ9K3LUdaci98QAR6DdiXCR3MHxrJcB2rongi4bEnQmsvLA2am5JEknnhHTwwnc3",
  "key34": "2oLsj2XuHnT9LXmNQ3rj8x1gBvhj6bgYF3PLSwPbxTxq5p5knJmGCucMN8HCThVTMEJbfsQmA1fnzHgLnLaDEdnS",
  "key35": "36daXJ7VBrSHB2JjqAVWuC4ngYryUufjWvaeimS4o9XPncAPudyS8VJPZcvqFMDXwuLdCYmPbfHRNmhkDFffmW3A",
  "key36": "5MhzjWy1n7UwSrnK4tgnhFYstrEWAVJgQxhtWYkjdKsMevk8aViNUJmxP3Mt5k4g3ZxySVYFQFzZZZwGSWKL1YhB",
  "key37": "HmHKisd2pPm7GWY48jUP2NikXF6D58Qcqn4NxRoAaF9veQeo4zRLPadpUPmBs6gVSsesCrNGg5no3TmGoj7K8Ws",
  "key38": "4GcKqZxvvE8T3fJdurMxaxhmEsDmMy4zmeHL7EbwUTCJVqVkitzLhWCeRj24zf2GCZBurhEeuS1Ak5PWS4fXaNz1",
  "key39": "2E4urGcUkzJbgLYpHb7exi1WoaNTzWoMG3eeqAPgk9kzPwqfAXTPqPiFqDkYFELKj92ZLZSwgFrVLeUQn3kNb2d9",
  "key40": "36NvmQT5KGdhJg3DSjm8fhbED6qdmw4HAkwP3KrUZs9oiooweXAd6mcinWtTT3BkHSyj9SLUNsPnifJzKwo8Pea2",
  "key41": "65CuXjxohA4JJfHFsFBLFkeqsTtjqRj2C1hHkC1ttoq66gbCTzmPt73TABaRBCjufJnu6vYQNY8j4U7faeRfbtZ4",
  "key42": "3fbNU4ZFrQ8sEPE7Dymg2mqXidojXYyrY8wk6QXhdJH1G3DVUxtQ7SNXsabZECShAmzU1e6mHjmHkANtxedKD2tv",
  "key43": "3nAqVTLK4ybhH67SXWyKqsM2et5LkrHqCccV1L4xVAgkr3g6qhdapTKLFergVnj7FdcFoWRk3NdZpAsyuWqJbfQo",
  "key44": "2oS9CNJed31DGpDPY98y5QQY7xiSZRraeJpf8LiwLiRV7te6PDHY5YxKEW16j83ybjcibAzz35K8XNPXJm3PRMzC",
  "key45": "4ZHF1xCERKNXtj3v7cpMNYx9FDFMDupCpP4Jdhj8aMRZy4YgqgNcXzsfJpy1f6X1UErrVNerHDWQjoEeYxboNqEY",
  "key46": "2f5w4LD37ZEhydYhagtvT74gkciTfCyrP1GA8RD72JYny5Th93pThb3DDu9n9z8VTGA5KQr39ybVBpaPfZboH1Za",
  "key47": "52ZBDMNdxgiouTcnt1FrQMzHMYcrACkqfoUSH7MSKLZ564PufYmchpdKZbGWyzrrxzpv9D1mwHENbeb3vXZ78mpQ",
  "key48": "5Sec1iiQ6wDfPgFgWLnVHeN7UT8fQBwDYMtTzP6bfs7qqsnDKFxg4feLBfYsPN1PPumvNzgNobPTFSPCqSNSfwga",
  "key49": "55umP1xteVsbM26vbHKCZqT87X4KGszU4o6xVpPeNHqH9ApAV717ceiLAd9yoxFQTAinFWpAnxWUS2CKN8owrRPh"
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
