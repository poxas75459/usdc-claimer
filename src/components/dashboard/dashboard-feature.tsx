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
    "3aC2RnL56xdLqyGwxwtYYAj11NYfZx3rCzzMFavSpMwfvVSamGdLL5FAE8p83THzc9QZBaym3z1LbiVDsddEoVYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MyVDLBvkHNjtn8uv1hm1ksETYdP7aTuXbvNhBe8VMyYmhEFSofd4C8PgfetRsS79Fs9DQkRMi4ERqkEyKJBvDZp",
  "key1": "3dmtMH4T3x1GYnjvnb4iJggBjCMGkaDKq4KqdaDEsQp2FUzFvv7h8SCH175jga5hLRB4MPuJWhHJERzkGpMUMXvu",
  "key2": "59xqHuPPWAxPh69S2PL215aTb5q4iAU3755x3hLxwowbJjnXM2sbW9f4Pyv3ABpZTuf3TanDrBGbMKbdRHopTFjL",
  "key3": "qskNsinGHvmMcSAvBVizw8RZq5itaRWDwh4Z5Gg5E4mtvU8ftx8uWptsGwqXUudQD5jJb9CSmz4ppxy28XT7ZD6",
  "key4": "2KkZxF5yeV8i7C4E5N6M8kpi51K2N6Du3rt5CDEt1vq9NBCrHejB8kK6auakUGt7hEyv5R4erEjJRMiEnoY38s6N",
  "key5": "4TSsmey3xnDfxnkENRjbcw8SdzZi3V7X8EKVmzjomvuTBkzNQVo1SR2t1UgL83PHqLA9pwU61ymyXhPV9rFDuynA",
  "key6": "4MVVFb1Kzi89hXiv8eZKuV7t31NozwXaaMAxig6RKN79LrPpist4t7hUE3fcigLvenCNvErCL8A4qY6FgHy2M5iW",
  "key7": "3fSTWwTaxcnMNHDDpZpmwAPBUUPqtY9XNPVD5LRaZkhiCYXCS7c6oCWoqgwJz6fPWz4yNejrRNiDv8FiiUWeV68x",
  "key8": "RwWaRoAnyycvBbDQUG3pqMGDEpiEBE8vnDYF32A3z9CXQRw7surNinUNs77W5tSpNMsfHGq443MuToeNSs4QkmA",
  "key9": "2WQNZ2PiMh3eQBPpFj3naHzyDC8Dvj7apNfMn3A4edYS2sNQTJ6sp8yXJPL9iWgww96pAknH3Qu27GePkmdAVXT6",
  "key10": "5yxx83AEHh6CXa563tW4vFRuexkLwPsgaTLx1dQZH7qyvktaYdkTQxzsTW6tnMaCWZ6tWKzvzV4NSh5t2H8Yj6At",
  "key11": "5nsWsbw1quUnt9KSNHS6pnsW4R17tZgZz7Qf1cfgW1Bvh6eURu3g8CkKFmDPsY4B5MhxqjFULeRR76eiqVDUmTJG",
  "key12": "5ZW48APXYZmNa4Gk6FDPDKF6K9RoJZxKdwVUKBKTdwyuKnzHDAoshn29C3FAJB82ZqTPLcJiFAAbeBfRMcSidQTd",
  "key13": "5RwF76ZThqSwBuf26eWdxuXc1ycKot5BGsgFfKx7fUKBwx3tTrozpsPgDauSaPrrKeU2XdmRRrv8Kc3pYcDiTRnV",
  "key14": "YbvFB4PuLDqFS5Cio1gLE81d1mCgEY3YjyqBSiALkgA6FGCtdNWov78ppYWK6JE8cKfCocnDzniyTugrhTaStFw",
  "key15": "3HwqGXP7ktKch8qWM4qRJeM7uLUbKbuSDXMqmwmBWMd2qpmYBvUCWdmox2BGa9SMewzfRXeNpWrbDVC6ymCc9hpn",
  "key16": "5y7kG1RbXoTYRQKaMs7avsE43GKmmeSU8r39vqG54c7dES7q8s6Yf7AcKt8wdyAvqHETWnmRbcNd9WiuTrymQsyD",
  "key17": "4PjqUbtsZJ1fcDNBfp1DXJByvnoFaKGs2v6RWsZoeer1SwL6kVSZujYqYnwCN2hya2vu8vAB6RhG1qGrURbeJn1z",
  "key18": "4hxuAGTQGcmapVuQodT4mDqNaEkAXPXiynrBZ42nvjRacXULon4buLu5BpX8mMnPq1iq6EXweRWLQU4diGYhDMQh",
  "key19": "oQ9NXgrnQm8QLR7xQRubmihynHCvnXLQ63NUr1WxVxGfefAZAetwCdaNWNSF7rxTfCKm6sennR5aRQXHwzyvuM9",
  "key20": "5d3HXRPmpd6LE6FQasT9LA2dBdeAChjRAyrMnRbpYK3hEsgBwWAyXdo81drhFTwQDbZhBEGjLtA1Ai3kdCFowwnX",
  "key21": "5TnMScMHaCBDdoEdMB266FrQLwBgsxhUEk1dk7xtjoUgZZguK1yd9gMa61HgHaEBJag3XGf61166F1ztFvEPEgH3",
  "key22": "3kmAQALkrTTYftgp7hCqTzYZpyRrDjE2bS6U9Eea6WNLn3BH6qhzWtx6yPqy8WZdhUUUn1NXPfsHtMxGqogVY4YX",
  "key23": "5NWcLx3rC65rLgv6dPbc9PqAXAB3iz4XBBy4W5DFAaZgYREKZcJeXcNMUUSYZnFHnTk8H5d3gonWZoakgdfpwYqR",
  "key24": "5CCwUB9JyaWZHE2wGd7B1EM3kap32bWt9dosDrmgnwE2Pmu68Pn1tHWfhpupVkFV42tX7v1ogTNEKu8wkBkeYsex",
  "key25": "5wvrhZr44DRCcQzUtWu4CiFtspTn3jsRAZNZTouSKaLNj6ddSVUZpA17wRyrt3FkyHvLs1KEWFhmFj7pTu5ag8ES",
  "key26": "3bQGng5y3CMgXZAs71HoAXGeFuArGjDarJWwJr1f3qY9TrzXKuayztToyBiFKUPXPUhKmsxNb9Q4aC7pssYPC6rx",
  "key27": "3GkHYAZge5nbkUqTuKBPaYQqFBpo8GiiWxghiMvUae3CPk1rZqEeVaMQVSMBQQJxpHd2QaLwZFnL3UoQaUw73pMt",
  "key28": "5b5kqiqbpDwfWtJSs1RBeNjoVcVgv2Z6fUsqAypKjay1yTadoTaeF8E7DKWh6JYSZkyNZndxh6YcRypPV23kBufd",
  "key29": "3ig7e1UMSg9L8yzvBCgYzP9DTwgJPChdMpKzdq8sEe7trUvArnom2UZ2pidu8KofMyJxWNB9zTJwcH9PTae3gdG7",
  "key30": "TyDNR72XdruXyMesL4jew2XesyPQM85wZjb6rtms51ztUfXnjXKCpbYk2XcDhNEgPSkC764if5upo9tw4drg8My",
  "key31": "2s62pcoF2sCVtGt6r5mfcNUF394by5MKZM3GLpmE724zUchKgmxqg5cgcSJYbFSzbya3vGb2epgKEREn91bYiC9f",
  "key32": "g1fVi77ArCDSAdY8vTM5biMCZx2DDN7sjqwGRp2g8RzeNriKUSznwSzt9ReicrJeDoYQ9Xethbex5VtKhqXujo8",
  "key33": "3Be2d7CxYE98TQi58kX9YYiZrRjTgPFFDPM395S7E8RR1jo8cz7HTxaRTwc9tgi1KqvDghtj6jydL5CwYf1eFmRc",
  "key34": "66acSXHUpfWsTWtVuzyNMZUa3si2ZJttzb63Mr6ksTbRfvEjSneKED98oVh1THZe9BQY3MS1bTKV2mSpLHAV8F4c"
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
