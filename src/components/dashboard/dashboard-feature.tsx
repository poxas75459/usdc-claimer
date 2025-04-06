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
    "3DL5zkwXMw1Z7ZxHu48Wf1ZF6eYVFguTrL6ZExZGqRGw5oRMhS5dtYepV24txYPUgTDL1XeFGkUi1Y2XdGMPvzM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZcbNRWfCWjcqZk9MRYrezX1j3RebkVQgTHD5M2qb9KYuxP6UEHhPiBi5hLLCBfXTHNkPnrebe3VS5mCTSjS5uP1",
  "key1": "4KXzYZi7SMdnVmUdKNeHzepg75eA761Z9yozDp92CBcVeuahVG3gv4Xx4H9MMwRnaKcwacRwJ1WsL9BM7LskZHLu",
  "key2": "4rRwwHb5J755ew9FQqWZTMT72Dp7cw78DeaiiUZEcdpaDnuxVkYycvRbHDDDJTK4kZWCn38wAvLU2XNvq5DgxDDZ",
  "key3": "4RAF9dDdgiQA7sJhDrhDijReaYmo1uexC1X7r4i8uHqicZL1oj8QS5kLhrdP9JANyTMryQedQNQ1g7Sv4pEqeNRF",
  "key4": "EeonsZRpTXbDnjDrq8XaAaGJSNKGUG7WRcR3aj4JCRpejujdWdEdGqKwMPASsUY4fcWtdAX6SwWGTTibFy1VVzD",
  "key5": "4sJZF1fHDPzNpnKT4hAu6WWwMVt95aM7RxzpS9VzhPKScpGEPsMtW8aKXx1iZhRAYEpUFwLjiM7etxKCPgPHwfP3",
  "key6": "akysmUWBp8NUoMrzxWUpyfgvSrF7qhckUYrrW2nvomvwrnRsWptDu2dQM6QhAXHQu6ZkJk88vben2nWUVt8dWyX",
  "key7": "Yzz4EdqpQL5hWQEj6zXyNsQFpKAFQgkver3fnBdsU2DSjYxa9WJ3aiKzGLAVvKBPu5XRZSNDQt6V7w46cvnfCLt",
  "key8": "4tNTLSyyk6oTPg7aZXKg83ujpZhkYiPjcxj66tHHUrZ9Cac2h2PkfXxhnFWeHVMkxUTxYtW2hV7PLgyBEyAYcXCw",
  "key9": "5e6No2MA45RteYYrXM7YacgM7QyCTXYTKSKufMHe93QWgR9N8teRGA8JDR78DjKwSHznT8WXbaFv1wX2hricD1RS",
  "key10": "5CgHuQ45siXGTsewySuBScdPkooY2WLJCMRBG6cTX63LC3Lbrn4sAf3qqs9bQLCyGT6WdKNiFPYDcpoCtCd3GPUK",
  "key11": "5FiAs2zbdgyHmMygBW4So4NK8K5zji7dPPWJT2nGHkrrvohDF2y531oxxNGqiVhPyjCDhPMWK1AARf7K6aATkYQT",
  "key12": "3WgQMnDp3hjRhM3sHVkZpb8ZfrYXr6ypVfJJGESegmCo2m1YPPeXpPGeebLKkBeidoNkG9z6rL222dWoAzLTshpr",
  "key13": "3LUyti63G5qR3zq8RicMHb3RSj9pPCnQamXSds6STDrg6gKsL5HEAFvUa8n6GGRE1TF4itN95Wqz6dCzte2VHWAZ",
  "key14": "2FSdfEbjEgfbxsLuJwLqs3hYGwTyaEH54tciNugMy7GwJKGTUX1vC6j99Nbzp5sZkQ6qhnmNZwDCBBpioktVpkys",
  "key15": "5BbBj2Squ1VfjSp87NdPako2io2DTv6c9HX23tKxuSpmJfZyeQZ4WALhL15Q4FeMXWar8CMM3Q7Y9MHAJHbhfsD7",
  "key16": "5WMDbT3iK2RbmzFwv5o8kUuXKU65icb7SGukGmqhfZVGZLB98QoAd7BRMaLq3vAWaWE8BU3YZP2vRWAHFmqw5M9w",
  "key17": "2NjXE55Sz4k78RXtKF184Pw3igTj99CJsqVu2C53keVYBvbGrBprfTHSsvrRhZftZZoYeyqEgSpSZtRG6sbZ6a7U",
  "key18": "34DcbibhztQBJ1D3924LRBZoeg5PHkd2awGX264CsqEiGPW5YQxZefkyz1UwRDcQjjCSgiSGmdYuhyX3n4LB5Aon",
  "key19": "STusdzmfKJGAcdb5Dd4MqMgmybF78RanKU4taRqzmZhp4twojwNtH3Qhgo4qbfHqexG25dGtbZRBfaXz1RToRxT",
  "key20": "3c4wCMx2E3egxakvNJe5UzBc7dvMXAbkVLorZFehMEdD6GF7S1Re14nBs9j9qEKygnK38WUwJ7pbm3vXke3osra",
  "key21": "3JmWybS883pdsTBtsbvcYubynGDHBmdQD4CVcXqEh7rfNkiYJFQNLn7m4EGJUAD6suLVx8mr79PSL6CnLaeCkx5L",
  "key22": "5zH6eUAjoUz95PJiqs3ypNDibBsLTp1k4557WmydTJHiJ9Xf4tQRNXWBx74PigS3SnW9RVSELytPT3zxfy5PdMPB",
  "key23": "5r4DfWy7RGM7my8uTwBPmtKrQxsNLteNCHC8FDAy3Cqf831a7uGex2MyW3zwkvHyHGVg5ZhTNQzfWj6u6KsPBNW4",
  "key24": "4uDFLoxeQkvpdL7WgkaFSjErmbFRLaf19EUZnJk53QVKZ4vjmZ3otWurFQcCm3n7FtBSMqBxrqFHasqfykHjNMcZ",
  "key25": "2awDwmA2UttT1ViZNAw5oH3GfGpJYKTYiQodFj5zYJebRMFMeGMF5fkLmMBKx9uk4E6DXKXARLS2wNJeECbefybW",
  "key26": "4mKLCDtECNUZGFrZUmHciUYkbKfzjLHEseZorqE1ayu2fJP8yumL5qcs9DAVjQDnMWo1SpzTtvtGKvpah4NS1nWn",
  "key27": "2B2Q1mTa6mgWw1usD2pbN8iBmwSGMPCS7BjtGgXpXRKuTQWt39AtRqHoQWjiAzFFJqghwZKeMYnWrGap2QR2TVqU",
  "key28": "2YinGJk216favEaeuC492C8FgjnSp67QSbj1KzWz73jTLB49f3MGrmiC7dFGtj1KUZB69Wb21vhh84xmqSeEDNcg",
  "key29": "2AixRbCYiSo1uh2RhwGup6cLN6ipKxXkTEtLfcfpSLiRTL4agQtVU74AQ6UGS9jUmETJAXfcZSVcr4UmVcAVaJkt",
  "key30": "3grszzYU8JuoXyHYYKN5bU4AjL3hoXpe8FwGnF2sHSG2rcNMQWYNXaDUUEdKDLWsApcBfLEKgtXqq4RGL98caFi8",
  "key31": "5UZLPi8Kdj7AdAcPMCun6qEjgWGnTXnpJCA3y8uYPxkA2gh6Es5kKrMoBuXjTECkHjXYZePBMD6nMb4qn2PhLJAZ",
  "key32": "2PG1K55ZhfYFnYYk8RZwXTWTKuLfL9Ay4RjNbjcgWHejgr39T95GU8Ccuwcak8cSUSo4zKsvx9HWC5bKB54TnWmq",
  "key33": "5G7boB4mVbAj7vrLhs6AXuKboAXBiV963WkksTmXQ91Xydfe8f8XgRUQKHgEfDYEbPyZ6a8tecCCubBDsc28y4yN",
  "key34": "2P76yy4AM2midmx9vyGGZtne9bVYydjXyyT5BmQUFVFC7UtE2JFLwaErCbpe2niQ5i5gWBC5kfbFuc61Nb9r7pE8",
  "key35": "4E2iCqiZTXZqDYysYN4WsffUTjMDgwwWWmEdbddGuCmSVoSL9UNHu4Wzk4pd4byGpC1Ka9poti1TdsNbQ318pwjW",
  "key36": "2kALPBPVDCwZC49aTCEq9LhjRiLDb11XcJqqKjuaDKqDg2XmcbvLHUAL6wD7sejHF7Ed8RmxCCRKHgZncnMmrZhi",
  "key37": "5JLyEwirmjXAgaaFHptUX1CsUnxJQSvavd8UtjeQ2tp4dmyo7Z6DHiLCvjGXSxjMZswzrjuFcmmBuxo8xKEzbD5a",
  "key38": "28AK4B9nnuWUGMtuaWwERuPmtdPpXGSramnP6sL9Ek9JbtQCZSSiEry5BmUgACQrVE42z6pR47DRf6XgPVzJDvA4",
  "key39": "2xSvVwLHppH5X54WtPGGUYqunFyDtRJ4MZYmKuYvhAZShdxsCCLUDjUhzsoSumqpeoTqkWZRiNE4siG3xcPecs3R",
  "key40": "4b6wd5rgijvTnkVThck3mGkBFfV7YcP7ugQQCssx8FEVa9MFmzKB6xk4wU2ynWPCoGWY35ef9tXhX51bKKbvRzS5",
  "key41": "3xqMLZQxKb2wVfYsz5Tqm23CcdP6GLWriPqhSSMtKHLc8HspqXyKJtXi5C7C2GVBuS4kJjMU53nT2vAMXf5g6sSG",
  "key42": "2Rba3AN8PfKmio6A8Q79rgjibdfqvezthvLLyde8EXYA36ABsfhoMy1TQenaD99S8y8tfC8dQob1mRVtCKM2UvV3"
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
