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
    "4p6wQJvzx3vsJR5o6z5KYvTud3W4teYgu7y8v3GEoMwMBQ7syUmMTw9GLUReP1hojczkXc9XAQ2njJ34qheJvaLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EgT2ST6pCWS5MhkKCJtfonBy31vCgxJLCEVNDmss4sJBnYLHtDnvnXP6JLoM2HzVRE86vStdCwuDGsc5yTAwtiJ",
  "key1": "3GCcVj1x79Jhivu6P5vPQBwdz2DS4QfFKZ7K7qFkmdQ57BM1BXKcUS66onrpMjSM9MB7PWWf6KWwApxRdYWid92C",
  "key2": "5jx9hZU1wujB7Jb31A7Jq3EbZR9stCqvyfTc3b2YFcJg9MHDVAmpkmb37EsYFkaXWds8nudUXu36NBT8BUC9aMQL",
  "key3": "2WSaUADZgvnxG9c4PRhQyJY5D7VuBFTYEtxkoirmKiByX99opzt2N3Sp6QGL9M1w5nqNBYRGK1RkgihK4JRsZ71S",
  "key4": "kYBfmZfTGPbBT3DtC7enLBtFBoWjnWGz3o5h25THPAhU3jhERX3rnEWx9Ho3RFvUPoBx8BDGWKfRNMfaYKxbqiL",
  "key5": "4poBNK8CzDnz43CqhY7BBZqSah4QNKKZMQeaZE1qbn3GwKEitp4qrhh7jNd71k6Hxr9ajqxS96y8E2qBb5cxeFQd",
  "key6": "5ysEDxmVPA1LYjgTsCdm1fTYGnrT4TRVmpPwkMbpHgP7JT7uFs9BZwEACfRydpoU4BsGGU17Lx6fMeYVjcrAkUdU",
  "key7": "5GmNEkLQDGBaob3YNJzCSqWF8RKVHa19iyU5TnwDzhfApsa1Amyepo2sNhGhAtyLdYsACs5Xs9nGFiAfQtKgeePj",
  "key8": "3MNTsRD9AWjY3sqpg1ZyK6wUcK6TbZJXQKhszAfEzaecVTKUMbiBBuP5f5fNkmV58aBMu6NpujzGHTWEeTxSaycP",
  "key9": "2hXjz9FVsqKuXp6uxrbSkFGdnhcCJkwMXvquFsKeHuzGBk9gKnpei7Jgx8JtmjaW77gyrd5MaVvGy8rRZXLEJC3u",
  "key10": "uTDk6EpkvjjmdVKdbw1SroC9mRof56RhaTTw7WrAMQ2WPc1TkpmmQnDRspCb5P1HxWNEVa9Miu4ad1VbRSHikpY",
  "key11": "2m39a1meG6Q1x384FgxZtoEt3xPaEsn5x82HbMmxz4Rpbcseh3zuKReM2acUeRE1duU6RgeYPXFqrXSDf8jCyTL4",
  "key12": "5NLm8YVmGJQiGfpfHNxwmuM1woAFkgRjBtNFQTe2qiVoQBoARoCjkcBRuUpzNBaouyecLU431uvh8QzNUsAYojvi",
  "key13": "4cGVknWrkyhRLqi5Q7mfUc7Di2RzBjipLsUMxmvLepC4zo5uvS6ScJzeJq6CbhfGzsLwQEmbw4juzaYhrCHEMcEA",
  "key14": "3UYQ8nLnraSwNt7iwemQqAgMLZDV5FemQFBVr3DUEvFff1go7tb5FUtpkanGVNNa5Bj3Qfwbk4Q3YfTM3q7F4iT7",
  "key15": "3FGJNYTUHEMLt7BXN7XvD1MGu2wsReWbnafQBRoMgthJwpUWAMJjuk9LVwUT2a3fQLpekcgTCFbyWBeH4A5gr5TA",
  "key16": "3KF2pByFThmoLk2fXUK5XAkPXe4ShMZGJmDpCsx82NevnBXLea2yfPF8ZfFiTBnd4v32ULRi6p7edaFJw1AqUH4L",
  "key17": "3QjE7MUGG1BwxDt3fBSmVLAYatpGDWiBobjqjgLbNCGGDgY163bGjBkxAPeHSzUeCLzYUKrfDjtFhrjUUHHm2FBt",
  "key18": "5E1WFxJ1fjCCgBH1G9tT1xF4CsSWFxnr5RtLenB5rLgGnMejt3R1x7WeK5qffXJ93m6xmXwwY6CJK2LjdUbdu4jo",
  "key19": "3XFRB85F6gztZz4UcR8mrxyr76rXycWvCqADX9t5D6PUUhTa4DDwR1CvCiRK8c1PLN8AHdyFTyWH56hYvVTDb5bb",
  "key20": "4NKHJxqqSu46uCKRwTtiV1Nuuu4ggM4Px8LgszXRS1yWK2kUyUENWcdKy3kJtzJYNDxuANEykwt2VGMFRCg8bBKC",
  "key21": "3yzgTgZuVvmhoNb8Q6AZbxQFpYtuaSM2kWrsK8z7ciq7gmCuwBqsyuGVKkzDaBFeEn8GfUjJjBMkhUFYbnbFiwQd",
  "key22": "2kJ5uoM5tB741ACDgXXHQMEk1Fj72JTJ9x7e21F412T6zjWsZxLSE4owzSL9ET1hnS2tzMtJR2BHCHcfJRyvF2V",
  "key23": "2tKhzadLjfz4mHyjyUyofr9JJRq5LmWGyCkvH1FAUwxoDKz5hikfzc1hWhg28UtTECZ8ZVzCvc5RwZwfbzXSaCbB",
  "key24": "5Dh2U8yyGAL7Zv1NhYLMKoE3cbBWrcrrR3CqcKRkePjPYhAcX7ZMFv2B5Y6cHXDC5ryVMeQdkJvmbBgN9cTxNmBt",
  "key25": "4SacaXXJbNqwbFGHRALQcFDN43pRoSjWXMkybnHoWvLs2MdKKukaHqDAHL69WiLZziRtAZPPwa3pex3itFAkKDfX",
  "key26": "7B9sPnYmUD8j1WTnWBZhs9BPBd8MzcBZdTSX5SpPtdzybJWcGmQHPNaXeNRhXkpT2V4fBayP37grzRUfomEGTSS",
  "key27": "4cNKLDF6HjZBKzPbEbZJjwz6JCMohPktxHh14Hh68VoVaDuN96VVWy3ndwYT9kScoK1tvbhKbcVTXJYbe9cWgEyU",
  "key28": "2KjG9kMQBGHzAo8bxSzd2ERHbo8c9wXrG3TMn6diAXzJTUtXgvJxbgV4ruQDJWoA2apFnJbpj4MR3nodaUX1tpUm",
  "key29": "4TK8qeCpb3NNfSbwjhWg7QSkEpfTuvG2rJCLGmWw6mueJFnQKUGJGaDqhsWj9k6yF3PzhaU3sCUuhA2zBBzr9M39",
  "key30": "4qHNqXi8xmCmK88cZz21wfmTFP7jzTR5c3af2mwrpRL2T4DabywwzT9McEiGx95GxCzV67VrhT9pStXcb2eGBRH8",
  "key31": "58WYt2RQ1sK7VzdfJdFYC4w5truYjJ4kmpKmN3gHZ8fWHMjEFLpeuQM7WtWiMrTbehBh46Ydtapw1wUD2fQPdYsR",
  "key32": "2fPrxkMdgcWipNgSdhBydvS3mND6AFr5bF2L2TSvDCRcpseNqa4FEyT51nE7hzSfZQwAM18QzncLotcL7uSEtYXP",
  "key33": "54rLE6vA33xw8nuMrVkfFAqSBNMa9v3uJ47MRQEttmLCp2L8XfQYxMAqoTFxigSQJcKfDrYiMacW15oiks9B2Bkt",
  "key34": "3bCXJjRdhsbWHdEn9MYffQe3Ef3Ma7xesZmcdcoLe3LSVwnd8YzQiqnK5ynx7VeRpyekXUehp7wEitcvKYaBbSRG",
  "key35": "3Yh4NgSyvrbC4mEYAUkEjVcGBzovydUwMEUqWSuZxLrrh19jy41vojF9UG2SRSAU6Kv6osoLgviBqabirB18KZn6",
  "key36": "4P7Gs1TPpXiFjke6z7eUcVYj3t9qsZpvcCyg28wtT5yN51J4iuFGEynmhJh274LGBq1g8ZNDWeW97yHnn6erpyjQ"
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
