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
    "3gchZB6u9BPoKvZQSAPs1FXUcY9FyYnMb3vB3SFjv2snXAZWjdSrR9fFXfrVz5wV9KEjxNp766Bmkf4Y2jonqFw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J4ws9MtWCnEdxAzGejbzH76CgVAWRR6pQQ1gUqXvgdiKjJCA7X1kocjtu6Qic2Syjc5YdbNL567soa59man3WWV",
  "key1": "ty7m1ymiLLsSh74BTfarYx6qvM46b6pygvTteLMUtaJD17wzKgqTAH8kPkQhYLihM1ixnS1dt4UMAwuDjAZSjxg",
  "key2": "4NE8N9fUsFLgK5VmZqgNQpxN5DdMwQSzPbF7z6xkmZ2JgR2e4ujy82H2LnEUASpDBFEQ3J8Yoin7Mwgi4jLz2Y7h",
  "key3": "5zfUvQmWBNF3PRpznPq2pRXy2YjczC1ee8WEHuhk4SfLMw7Pr3FSsBdUg7GfP19mLyS83aP9XpVn41SUctfb4s1",
  "key4": "5Sw48sysbWN4o36CiAXidJQTV2xDQxTBHeFyh9QP8fouoYvwmi48218Bb6rinC5wKrRUAEfsjyvUTb35PT9bNsQb",
  "key5": "48WJNY72WAP5i1HWenTMVTeBkXvK37qjrpZ6MXZu8oVmexBy9JRgPewxXuvTHFWvY2qPHTbuzgwMBPSSiPvEuJC7",
  "key6": "3aKGAEtV47E4gSoGbJCbdCa4t5yyFYBkTfGfmJkYMK8Epqay63tnfkAuf3SJEvB5RCGS6MVKnyYhaKTfZQ5VXyhn",
  "key7": "2bBTULnCCr5rsVnGLx5GGPv11XQGCCeFPXkgZ3iffEPJUe29fhKYkvNgLjRtLhSbccoKUj9LvykHH9M3SHmjnD3o",
  "key8": "3DiQ52Rq1BmHQvMvpZZmvcCnV6kD3pBagPwDzDTxL3MpJxMV8n5FET2FqwiKbTbAiZ7wdNwX2AdZvkd2AvKi1KG5",
  "key9": "3H3EzVECZ3APD21zgob9YUyvbUYxqvSkTYbcWzzCSYwGcHAeX9EfUDaxGCAwcjdqfDSjYQYbCRAZfAMyn9GmMkGC",
  "key10": "5ShPvesChGZAyeWSVjYP7Aas4cBLmwrDpvXFjRQ7AEVZVyhXkAUseCcnwR5GK5HYAPK7cw5AyWb7soySvY4o8EvS",
  "key11": "3tNkKt3UU9s3pkWr5qj6QRf4tC5GstpaooAuiXvU2Lmmyc7b38JNQ9uaSmiWqUvobYB18CVgAZgChsaGLgJTTGtW",
  "key12": "seA17BzYGRSrgGNwm3LkWCSPb8NaTKTxuxRymnuxXYmgGBJiWyP9Yp89gk5HdbXvFhmPMySHt5X8g58JYb2t7ws",
  "key13": "4zmZWPPoY1dWz3898V34Pngv4zgZpYLvse7Kz3RVE9LgG9TLWaYk4yrDuYUAEKQZE38H7DtKbN5otmeWBhFYo1Vj",
  "key14": "2xmEWGZf2dWEPPDS1MdRXwjHFg9m6fTBDyXVG6YK6MvEkvTsnfSjtkPXVwc39j5mk7MFRaPD3a2U4o5TBo5DE5Hg",
  "key15": "9ieq6X5SJMzW48KrYukQDYgD7DeQdy9ey4fUTu8A73jxTx4rFruzJ3yRsgUrNJcVEyZHp3QTxLZ6qsMRKZb96LF",
  "key16": "3uhfGUoar2KxseMwko9L77n9uRMB8UnakYhhaEovZMmMpYgxxchaGvZ4MiZFALL2BJ116FXN4vK3s7VNRu7bd49a",
  "key17": "2AJrfqAPTGmpd29wzgikLKbztcuZu1SQx1PMSZeRFxszSTTD6cqb5NnyY617iVnNLMZKuHwCXxAgWq4b2NM4jrYm",
  "key18": "C6xoaYJe7VL56zCEkLv5vM1M8pb5gDoa2tftGzEgYQnyaCnccUnXgweuowYtaZbDZp1YZdDbbWHrTy97PVUriwv",
  "key19": "439xUv2NrY2Vw2jy16teVSDGo75pbz5NotV3hkeuY6TumkzPxVYHAxToaAUbVKVtPQRjn2MdPtHpMmNF4QkBCuob",
  "key20": "5UXqpRDLDxpF838J3tnjFjqd3Gw2jjxhJ4sjDjmUy2TZJdhsvagcHehHJc63ctu8UUtJuZDCmj3Jk1gwGxFbCyhr",
  "key21": "3Z1dETTcg7zZi7wVFBENg7uhVW8GDEhsnBeCrHHYxLjJSb42Tw6c8kC9ETwiMdEQVyJLe9wCLdrzaqdDrYDkbx97",
  "key22": "5Eh4iphF3c6TwHJjQRQABEh3N5Pm2jEhzGUXag66jCaitQMx415xyzdxKhze4CG9W1Nf6f57nsJJLoxEQC3tvmLT",
  "key23": "4BEEp7NrCUWi8z7TBuxyT2HtMcPB4BBYUidM1CdTTXgotv9VeuT7R1F4mofrHCQGjtbdGo6PyJGSSgwPEQXu2fkW",
  "key24": "33ptei68e9nawtkPMRSyVULHAuTQHVnntWgHbZWKmcWh2w5iYJWcaSpxeVhm3FWs3ozeV31VEmsEPWAk2Ffs5rR4",
  "key25": "sDRceKSeCafrrhdKKCqt4mgVskH8DmhwTHvKYW5ns776dR4K5KfFDpyCj7ihA6W9t5VeyegspECfHZogW4medyW",
  "key26": "2HtTptyK8BTAUPWkudNQjLwCdSneoXuwnrxg9wDQLRJP85U3RAx3JJWGq4hb3jAZBpW2f6vJ4q5xYWKrtKGz1Rmn",
  "key27": "34cJDpxP8yJTSFisp8RazotSYuNtf2oNPNGz7vqStbmTf2U1jFGryYM9JXZDEjMWWBf814C7Gp5ArCwX1L4voq4f"
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
