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
    "2EhKb18BRi69jo14PsmJDwkhoRAkCAo55oM6Qu42WpPufEBiokXDqPQgka1rLMR8SdyKqN7GZ93RYLJQ3Pv8EJGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37PJog3GBPyZ1DuYgnNzeQrfwGEaAX1LLxJrbpjePSh69EeF5EHtBftQKWYsPn4dB1v9hSoJeg2AkrTRnk8Hu9ji",
  "key1": "5YiuJHHSxY2uvw5TZR3mvwJzAUTVRu1PPMwc5efUfHDPmhTxxQygMVj3wnseD66gKfK72xWEz272GA8tRkL29efP",
  "key2": "5gueH7a88VBydfXvs21X4AjJ9qraJVjY5dn5jtEBYVVZv2rFwJDwajrhjbzqv1ktt8zb1s4E1mphije5ADEWoM4n",
  "key3": "5U73PDPuCE2WUCwkLcXfJQwpG4a8epc3giUbm9fRbiKuCHxmABdPFc1gFHwtLJoRjfCxxQ19CZjfwbXavkrLV271",
  "key4": "dCKdeTDFShnK8EJwoMn8bCdAcTLwsz7wCn55Jy7iyQkk3c7thQbQB58h7nmQSsmKAMHpHhcrUg93Zorx6eKUvSi",
  "key5": "2MH4L9yAG7GjfK17ZEy6DbiCWRP12eidKuCwC5UjLSewn6ASXcH8wwZsWUBYdhw2xonHMKvTeKcx4oFEj4qFHM3L",
  "key6": "5tH2Y6M9ckDyDaHA4qkjEdVAutfGx68pMB1DTRiLeC6FwUuKbsQZeqoGFuF3ZRhW7kPrqZEM3LUbgbsn8Pkss7dh",
  "key7": "5rJhJoTcBdPvxXtadJ4R4MCytAXzJJsuDEwZH3smv73nxMdz4w7KB6rb9PHURDiS4gszaitpZSiNzv15cdraFnsm",
  "key8": "3h7UBynuTRije8hbJ5fnQt973wqNkRuX7jvsh7PasBkPSoWpzV2pbu1kHervN85AwzTL6jqjf4fTSrqwTRg4LQZu",
  "key9": "2pTHuNFHXPkoRNUXBMUWkQZXFA9fr2P3spQFdL9j1cd5FGtzuea3eVzo97T4o3CmKWwZ1bzd3FyWbRZWyrBzKLPb",
  "key10": "62VbhUX7KM6efHbB8inpR7JHnE7vzNrqLyS7L65GSfgahnsgMgKN7WvBoarkEL6SZPXTSSYghVcL4NSokQpPpK2z",
  "key11": "4mU7EELnx24Ew2SgJ6Dh4VqzqXtdY2UXZMd2ZK4NdfBSNa18XvwTGDvp3a9ZRXzW9G9S1ZcKVADDCzx1swiXrCqu",
  "key12": "4gkGXPJTXDLkn1hq7h9Dm3R2L8MLcmq2Vfqb7TxNN9fRRXYADwtAH8UrzhfjBvw6nqCv8bkRYqcD47CgsQy29ZS2",
  "key13": "Ene5Gxqw4gvXqN4dfkqXx7cwtEQA8JSPfqVbJ7yTTzp6UUkMUey8ZJbhtJG21VtAhUQes5pCSYxrsiv5Qj9rP4W",
  "key14": "2UNKTtevvmatoE9tqFe7CmGAS4LTMkGLTi5nb9KZLptCgQMKFnUa8AD9j3wmmya8GxGqvVZcTNpA7m7M2f3s4urY",
  "key15": "37cD2FfqRuLdHwn2ZCXZZoGWrUQF781hyZuZzVNLvQ9ze4E3iaAV3bibdw7vy4BqmdMuRKXevRPghA1HbVWEdiU9",
  "key16": "2ghRqHHCfT82qVwfHHqQSpQ5eq19V1NK9iGBsByaQepeHBwfS6GTngwkZzd2z9Cf8X6gMbwLJ7jp25yibY7VxzbA",
  "key17": "3NY3YhykmtWRUHEMd2ufFZj1v7UKp9HCUStQgxHg37GfkiJ9du61KhQmr3hEpTfJLMjfkDnC6uM8HMDKNstt29Hf",
  "key18": "5qYYuiYhEo8K8DiekbjApY3z5mMeoTRxfvpY98GAkubqhEdf7LG5cxLEAGiPTmU3zET81BnHppJZqP1QN9YX6YwG",
  "key19": "2Htf7k53Zn3VbVv1R6YTRcBwHaYYeMxp9JtFjbJPABhjxb7iWP17LrjkvdmqsX4UBhNDUVP6gSAArKLvHnWqZ9US",
  "key20": "2atfA78mczLJfwTZGnN7K6z3AmDiJ4m2xvzcw9epfpBh2V4KjNYczxUtxAD4gZoTifyXGABhQ4fHdNBCnv66YtjH",
  "key21": "5kMFzPuqMCGo7kpfT4QVUFQquCQJcAZYro1cs7V2sXr5vpDjmdzDW47yzWwBqw4s5dRqCs4piipNPfJNf1ygv9Kn",
  "key22": "KWTYw5yYL9WjdLc37ZfA1aSxiiF5dfRdK76Z5oKyy7HZSyyFGk48TrwWKq7zJpJnJ76QyiELV1RSFA75FY5VaKK",
  "key23": "4qnEDbmMbQeN1ebypGCjSBmEE15N6XLXo6DwCmx3vRWCLYCSYQ9xybz5xGkLrg8pLMyYMGr5eWCKB1y1c6mSrgnz",
  "key24": "xJPyYK7ba7RRiapnwnQCoN7YWR22XM1GBtyPPD7Tsx496Bp1XfUHSAsJ4iFPnFjDaYVv8j3CX1DRcZKahMEE1Gy",
  "key25": "ch8frK2y1qz4W954tSwpPCbMVzCkWg1mCriAQNPSQJMDG7grewaW36sqJSYRZv6QPTgvsSBKVjYNxW3PgdDhJ2T",
  "key26": "4nms2siLpWrfURoKVgxbkGQuLkAy9ZcJW3EJWiE6qeU43gP9DTwrZFEcEgj6bET97xAYiy9prEtYfRzYPouJdebX",
  "key27": "5wbsMSKfBs6wJ5ZySfgjENCAJFTfcGPXYcv7bR33zxt7MBSVRfVgrQ69tZ3cUmZeeLBrMARu3T8Q7JiBgfUyp9Gp",
  "key28": "4nSX9Bwa2nPpJVpFMukpmmubf1ifkPVJbwSCoWVtzbdjsoE1NQA6Hsyhvqnjen25SNTszSdpBuzh95w7YLvrcTxR",
  "key29": "XBfFPZGZFWS7DrsKdHp6RpFZiaos35QFdptHyVLpHgYLsLJikYkryrNwXhSxox7LPAYheEYQjEYoZFBFPpZQzp5",
  "key30": "xypru4KfUsXynfitsG9FivbeXgC8SEhp25uqHt5VK1pxaaq23F5bCor5uw1UBhhYwh8bHFitVhoEetKSSUsGjeX",
  "key31": "4Xym8sHkmJFbXLMn2Pxh9wrXecTQ71RtbMyQXt1D6cnUuc8eA8MDEE48z4sS8Y9Ub1xSechdcq89KjsrkHEXGdTZ",
  "key32": "5sRUiY1X4VLpApWjhQVfXyGVZ99RN5nBFPZLbQfRvKmEXvHorFnc3A39sZgVaHPi85qVjfNpb8HmuqMHxEHzT1rk",
  "key33": "3a75AuDgriSRD5Czz3yNLdpmkdmRMiB5VtQwuxoXTM3FLWeZj9tqncTsn1R4VMXQ99G8zG4YLMQeGsgbrYw8KH1D",
  "key34": "42GemXr9fkoAQwM4sWJ26CpNe4rpiiNVEy7aDGLUaod9ejcoNXLvhWMcxh62oV2Rvjuy6yaYdzyi1T353nZuiPm7",
  "key35": "3Yzqysn8BHsBuQYNtTLv7o5zivr8EVfVsrW5h6ao7bsMvi6djnbCruhogXXWqNeuAcsc1T9FuEY9VuEgRDq8BwFR",
  "key36": "377UnwEvRsfzYCFiigXZLg5LBtYbp9DoG4G8e1KToGXVFG2qxVfLssBkqXxsmRRPSvds1oonrRqnkvW2DiVjrzpi",
  "key37": "LTY2PqJxupCn5p9dhJaKAVJwdpfrW32AemgfcWNF8DdsThvyJrDEPQEXvgeneCnKvkhec1UAvru7iyDi2w5Wbat",
  "key38": "5GNSqQF2eLQVbHK2kSe8ojyNvmfs6381xr96ZMCJUN57FZnTTeUog2k1V5w1yadv1sHuNtnaBou9gFWY79GhV47y",
  "key39": "6HsMnxJLaj9D3PCfMWYfgw3rQhkCGUE2Wz9vhiyN9j46RAsPtCWQmDo6hqoyFDR7dN2cMvy9QcBdFimY2P5PwNY",
  "key40": "4tJepBoHGr28Xkfhy3KLAKPK82PJ2yHRMvy5f84daFraogdzz4Cd7RWTF8mjSqcxntouGFxFttSjVYaA1qfR7sxL",
  "key41": "5fiN9A1JsQnkL6kCzgt9pj8EDi5FdQPKaSw3uNXNWVgrr5GDeFsqhNrRLG3cLvUudYYjkkaAf5xUQqK222mP4VCY",
  "key42": "23n1fCCRtAHrt2CkLh9JPaafG641hHR53WKSoGqoM8xRXmk6vGA9d6nAxpKp7n3Jx6xdf1e5K3pc7k6UnLairiS7",
  "key43": "25WVzLqsunyL2M4vkgTBXwZEvsEW7q2QpNU8tshmPe5bJGXP2Buanqwnr6Rp6D4rtd62AcW97nCsNTQvoi75RVM6",
  "key44": "5GbPT7U5JQEFmGn6RnZbT7krsWQNir8PcsM2947JL6MpVkFvTqU4WqhdXfRdke7KVQrmcAvwdiFCDaPrtgPTu8rj",
  "key45": "4JrBiamrrUYk3ZZRCngNWfYKmDpTFTHMdXQd3VAF1cRwqY2Va7jo4vvWFv1Lny1Rx4dxtCaF2oyKMB1XABCyZ9Xb",
  "key46": "2hWLHYQ7kjZcM6iQG3WsntcyNju5yCspcoL5HDZkYDG4WoAs9KLsnmgqxDBFD2owDQegA3hce6JKUycvDDpQNwfZ"
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
