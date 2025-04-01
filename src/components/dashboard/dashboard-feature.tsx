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
    "4LPWBBVCXULCHGPU8fwvrsheJ1JMozDEHpfES7EyuPcgMVYgnbHrktRCREpHKb65B33ZeLR8vcJgti8wwY8HNv65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kg9gcZsgvVyECDMYX9b8yzfPg1ucvJHFphJDAt8dBNC72eP6rpcFLaVLo44bGHpqP7t5CQd3Wj4GzdCEhuU2vkj",
  "key1": "4rcAmiddtg2YZs3PtSd3qoNX9nneFDiYFcB1qWFR5oBa8dDpRjvyRfJQkkqPbwNjQjXb4Tv9hHosdgcgrE2b1iWx",
  "key2": "3iEfGCWyE17sJdnEs5qfvfGdS6Ag51nRXf2yrDaG5G9QvXZzNN1TPiMJn3uy78zzgHyTPjbP7kRQ1oy9rLvZXVQS",
  "key3": "dQBWKpkQth4UNwKJoystNuGQmhZoJr8ooMkNzSK8eAq5arDU62NyxY8joeaNXNpD3v9vsS4fAHHUqn3H27xfcaJ",
  "key4": "5pojRvyiASAse5Q5XFUBjrK9vKq7krwg1JuBuLHsBBwDE7TzkLkjnKRfBKoyJEdwx4KK6mDkECp7hRUXfV2LHq6P",
  "key5": "5HbR9TxuGG6go6jTgbuqqK6ByTNVDFSp82xTBJEhU2WtxM9VycjQLzXo4S7zNKtgtG2VJQPZrozCHPKTYQRHYtGo",
  "key6": "LBerGTdahthtQ2JnReEujCaYiPK5ceGUApAa2frrbLvKMn1F4Rrtfhi5StPddidYnHzsdE1bGdjpmDRuKvoXdEf",
  "key7": "4jnz4eqcf1bt7TiP3wqZNq3zmGy2CCtRHe1HMcDDkxQTcxjbndJUed17tqLqduVhBQXBrddYBnF3NkJSGAfEi3T1",
  "key8": "3VzxGKhn9uJcsK3SRUco2pskaZha11AgmzpTPQKvVnZwffpzApgsC4tT6m2RQ7LBkGowRqtUGxoC4Jw4KNCZD3v8",
  "key9": "2s2mNEiaw2xmcoxGxNaoTt3mmua43tsvHwAssCzzr9DH9iH7dJrRixTVgPjmSEHKS7hfVTkk2g8NrGdm4JX9vHQE",
  "key10": "3EcxqmaMmHqADj7RnizbWJW4wyw3VGkd16rTiYRPPgiuoeVg1rpfwycoymW6ZXKCoxBoZiZR7auHxfNDLsYxdi4n",
  "key11": "2h5dSfoLJve96Kj4kUeACdtAeKW44N2uqVKxe2HJReyJBtF7kLgASfuopqMTtS3hnJLFaQ3BT8b2KdBRmeYmPhV9",
  "key12": "5wXDqXwCw5kMttxFhForJu8owsCY6Jjozi3PN1xQGbQXchTFrD9dx4SFP4mAFi66eSJDyVTNU9e8G2Ae3f1LdKmb",
  "key13": "4ykS95Vo5rHHkwKjespfFU1JmkwPHiaYbTAx9fGDCrA3fW97sXeXRs1n54UU8YYNtbFTq73btmVGhUAauLVnE7RJ",
  "key14": "45vTJ8VWQ1YXdSqKttAdrsPJeVA52T2xp3kQvFCBKbaoMJbZ9EBdfXuwi4MUWKaJmeAuDWbsA3tKeiM9BGTUpD8V",
  "key15": "wc2m5EvAY6mScPxfp9AogFNT4hbUYa8drPTLYGWtXKUtsVPeAhggKipk4J24LHKr2gMc7uWsKgiFuCqdnWQscCG",
  "key16": "5YvTdwjSArBDH3LZFNujkKojCSyF5JvRzu6qkWY52ezv1i5qhbkdMPyUUX8AWj8ueCUjVT4pZT7JQQ3ppubbsKwR",
  "key17": "GwSTn4gKDFZNvS78BXbyPG3DskVtP5gtpYCaPxQzvTEkHuXePfpmp23E719fNRWbmhfGNC1RFA9JCv76xGpcDC1",
  "key18": "58AQXmrUJr1MNqH24Fjgtfpg4mmKH7efZcXCGkXeHzBa8Aekn2pbkNqUyZ1tdRgcz1TqfjW3ySaLQMvJtJn8WsQt",
  "key19": "3n7zZVyTPCXqrgpCs6NTDw85C7AuCzP99zKWx6fHzLRVxhx4eGBpyBMgaTYx1tdaSCWkk6ki5AnNrpcKAxF6UeAn",
  "key20": "3wJFPBXceJPCUL6Zs2gMJA1sTbsd45x9HTt9US7goveS73WQqC1mgcDjuZCh17DTWWrGGumwoN3ZgLvLtrtYPhpz",
  "key21": "5U9LEyyoLuaLeFMf8AetMHnabsL7doTQkaD5utuAP2iNy1JRzay9tD7ekmRg1hjFYAMndUBDJMCkNVEpin6bSxGY",
  "key22": "YLroWwikhrXsXNQfzJQucx7xaXjQsX6MA8Qbwc3aRvwYScfHCsfhVqBNDreufFmG5jhgHe1XWRP9gsBL9kRwmE9",
  "key23": "59dtCyFf6jEZoozMdw2e1wBvmjoeLQ6r96QF5AiHBAgMPhutLK3t9WtcA6NsQq6qsznt9xpKVAN13mRwiDN2iMrk",
  "key24": "wxe4FFNmEMNySrtQPFMfpq17j4xr8sxWGnuLXuZLnYDFN9JbTGzWhTHQtVeA6UHYHeurDj8kjeZCf4dwXwuYs1u",
  "key25": "5yCMKX1LvMahauDKNDxpjjKvRtaJQpg7kHypMd5ZT5qQdu3Zd6YkEhjkcFfABCRtaMMjqjHPSQNEXLPnRbrZhP6S",
  "key26": "4tErtdJiLqztFw8yoQAXsWkRJzUKdWfLA5xiYN2R9uC8cLXgEhP7Srvt5WsMDFavSKHXXpccFsE2qEJ5Gu1tswpt",
  "key27": "2sdSnJXnqKT1HLdefey13uNZTSPNjMqnVxQMdMjzcWGmNRKb13VVufJBuEJJZRJcL5oPR3TDtpuieTASs2TU2zWE",
  "key28": "4pQbqA14a6shZg2JyXFjGbMoFsFKyvCAmqx4BkCpXFB9CHmhqrAaxLzkt3eBssPRLNksPLPxR59wpw54K81PMQu8",
  "key29": "2hR9fFExftyP47HTf5bSFLPVujJZaE2YHVscc1DKdYteqdAbZD2ZVRCEMDRRfiWLi7HTKryCWGUyCLb3E812cxwr",
  "key30": "Xr3t5rC2ofywYi9GEoQjjpYFPuYsNZkYtTj5EiZcXa4nhzTnCbnEfFgYA3EutAHKQGK2iXf8ocwtDEpC6JAnu7a",
  "key31": "2keXHqTmsPxwWBPLFCsFp9TgJKpqmxUczPc44TC7sWtkagGfcPfdwRyc4FgfT768rX1iK5qyLXFVGyjkz5v7wxc7",
  "key32": "3Xg3R1tKRhoK9bb8EzYS1r1jQRrTEvqAddZRpFkg7HCmq13J7KrddETmqUAEPawacK4YGDejRYUf7JjrYBALV8b7",
  "key33": "25ELofvTDm8x6AAypiJPFyW9whF6uAwYUddM4qujRYrD4UVTGjnC2rnEAMe91de6UuTPG8D8iJxGyrgPBPvRBxYR",
  "key34": "4TiTfXQC4XCkzg2xrLGog77yW8Lms2G9oQbzm1rUu8wJu28zwutaVw23VGnG3Yds3TFxtBvriEmX4zVAyfpZfUtf",
  "key35": "AKekR7auNzMHJvsQcmf623tWsfumtryM4iAzqdQjsXcHVQ78A4Mgbz9vT39P5TPF2cXFb93Xhd7XbvHXA5qEaTW",
  "key36": "4AyGKvxeny5MLZmTJZeb8pgqJd8neRCCFipKDRysg9EiXbvShkyPmAub9hnfboyKShEW6TjTnSpZVqS7jxtydK2g",
  "key37": "5LDvUtdbaEu61W79rxCv6f1UrLvXKCT8FwaytyjuemtqUB1CrkDDKFK13SoCsZ9tFiKV78TUbVeAUP2SRUUhW56r"
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
