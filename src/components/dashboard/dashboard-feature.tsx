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
    "7G1H6ZJAWe7QTy8fXwzJ7L6Dy6UfxR4Uj3YiCmPdrtzWVgKXFKRqJYQaakutVPpc6cdhqRArigTbYHEz8mu8Y6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54XmGfxrssU3oi68kYpKn6ZJW4BNnpt3qP5bV2pAC8UzefQCpd22EJ1FvBB5tYtDc3cs68kQ82DeFUVDxezadHfX",
  "key1": "3jknTcDbCFBH7hvyUaBr6AnKFLKkww1ZaZjDSM8PhmCUb6AH1UVJ4erbv1Sfb6CKswSry9LTiEmfH9kZRnWZdwBg",
  "key2": "5vMnoM73X9W69cz6sUuDXCtGS8eWiDrkpcyiMcECQjj8nW2j27aPFrUQCfpdGHV4jbDf8dAYDzsCA2fTGn39LGCa",
  "key3": "4LaE7uDpwpkVqk3Yi61g3QDwf9wSmvGfjecitndSxhEsk1JyBX4W7FzULsdSePfVXVidoX2Qzo1sKfb93EddqQmM",
  "key4": "3iRjJhF9z3V2QTrvN8vGdYQDbDMx8zByfVmiaPFVnnpsKR5fxQRuus5YkVYStrL9DtqXyKQdf2AFGR9Bj9qBePnv",
  "key5": "3nBjULkuVvbuoFDorHjhAKnZC1b5RXM196kWJLvJhMknvj2aTLLSkiHahgn6Vq34xZWc6fgq916eWtqzCRs2zmPQ",
  "key6": "4DWkdrsgyCtHPu6pQjyaZkSe4WK15LzTNsQd3X31bM8nbmtrF55xS8kVKTqhHna1hBtvgXQkEbV2mGWcNDkMgxrz",
  "key7": "3xJfFSgv76Qymz2YiW7tuUKjAj59mQKA5L2EkK1Wbc2Tcbzu4ziQJkXiWJNbXrdgLaLTxC2WfHNyD7fjcuNRYxVS",
  "key8": "3EXgburF3QmdfE56Vdn4Z3BSRCJ9hA4hXtLm8uTuM1u67LSbHmmu6ZMNZBRq1udjnvjeM8JDvPnwF8MvghPhRK4n",
  "key9": "7DL4D9TvBykpLnWad5py9qnziVfKaEoxQHSpy6LBjWwNEYWRFWs8j8ZJUK5nqewtSMHCc3pwLfU2rRvNKzCDHzY",
  "key10": "3RuwvWj77Rrshmz2UgcXxsUSmSoGYRNFNZKTRsLKAtEsvboRbvQakyUZne2zST67SMNampcpytX2usJspzoiMTXS",
  "key11": "2ki8MF3yB2eYrHVDhdWuUWfjr8AQx6AhceHPmh2zjufTQddaArNPgML2FfKRKFi9RBvDfGiEPiJYVE85aGxUmd2m",
  "key12": "3Vg3MmZ82A7ndvwmRxrnZqjsVTVpVasydFXspgT7D52pJHh8fkeYML69QF5jMJhY5XDix3SBtzn5CvncgcMsc5fN",
  "key13": "2YfLGL4VRqFP5ZxQKq349cupKHPSoQiJrm7gpHzcBFS43RYNWW8H2mCnh5Pwss4GKTaXhwKwYX5EiJuE4VWcb27z",
  "key14": "2WFJ2EPWg57w4cXREy9coHKjfBArfBct571uuhdWF4qGY8RmQ827nuC5aGeTFbNdmZXZB1YaMbPbRzA2U2hPwRwE",
  "key15": "M7mMvR54hjMd4WjwgwVSJSisM9hd2LXTBS55AueANMBo7qYdiQw53X2cxMX3JSNTRihNLNpZcH3k2PWdjv6EfV2",
  "key16": "3YdVAcH8k1bj7QoUSVioh8rgKAZuNZi6t6cbfVFtVTtPAbZygbfrn7EMYzQcxmhhSoVWEp2m3YDkzKaCrdnT2kqs",
  "key17": "2hT22DyWe8hRVk4tysWZS6jCNKStp26GE6eL8VPXoRUEdYvGDyKb9WoPUi1bYTr5y7oRrF57Bes8v7sDJ8dtzEmF",
  "key18": "3znCcUoJP39TNX8dYZ6kz25Fd42Q9LVer65xCn9XGGb3goTifkWaemDyHFX5VsrWCdMc7mP5RxumPzt6g4qpKPZu",
  "key19": "2jJz1mUqsAHtz1UgorKPu9cN1ZJSrbGtS6VyzEf8Y1XqYLnyWJ9ezqRBmEppeDkMBAC197mhmpY6ew8sTZQXKCTV",
  "key20": "5YggXZpLBaySqai1zyRXASE5szv8SbUygbxiN6VnmFwfX6C8iPejzrC9dbpjze2M8YzkT3Yo2pbuz9EFYEi4Tngv",
  "key21": "3jXEhXQ7Z76L1wFKqsVqPTAoAysUimihtqg9s15mQzjSJSWi2wNRUwYbECab5C5buU5FbFCLNCrAaSJPUsfhxxz9",
  "key22": "2ttguYikJ1B7mXHG7F1i6qtVfScufoLHSLQ3ELU34JsWizJb4VRDmbVuqVeek2WWf5Mf4GgSsBy67Pv9UaCgPKvV",
  "key23": "3K4xefKvMDFCCUfCBzh9UcgDvarLmmMYqgdGUAEpA2G7Nq6Z8Q14h5uXFYcK5p4e1wPF9YeU4e2P2QZ12DykSVoG",
  "key24": "2HC4yoB7M1U3bDkbgCygLjMAAQL3JxX6anQEpZWRi55sk83tEecQq6Ki3yRanANnExJr2GCHSLA1QRxEJ7Vsqt7A",
  "key25": "2kUn3jvWpPF2Gi9QLw6rVDmHg9uzCpuAuY3gjmXEvkLfgUYZQyaDXmonKweYWeGaZFLfYrz2hd5CmhdPYgTgio7R",
  "key26": "2a9yk9Yo9MDrQUMmSUZMRFY9scCYhG1i67s4ZGMj3j5oYWR4mBWkGNGTtbr1tMPUxGy4xpsnU1Xu9xc1qxNn38m1",
  "key27": "3HMMrTeQokJ2fQAZjQ1xJHayFv8pvezFwRa2RGnNWtfCWoNPYupmPeYRR4NHyNq7zVSc1RjL8AAz9qLxj2TCJKnU",
  "key28": "4eyGwLPxLJ8NffrjWq1G97UUUetbrc4oj77MevDdSoYoU31tF8ZRzMdkhH6N8cAJToUBUHSRQbUbX6fSimq7pAXU",
  "key29": "3fJMkHHchwnH2KbP2tNyjBEPaMUoJApmJfpzak6AQTZpSXZQubmrsBP7YCSyTjmt6LFuvprrNXMCgqoxQo4qZnzo",
  "key30": "37oQS7q8VF68xu9cJ9245o164wKLAsiEC288KvSm7tS3rWxEPNJCH5vWHqfAv1rvhWpX27cyDCgd8nXpiJhePcLE",
  "key31": "4cAX7trbbB13yKXGJaNf6wH87fgfsT3naW4d6wYTaF1LTzMvw1qKkYRxH8F1SDVoEgBuK2bKGCiddQU8C4KgoCCa",
  "key32": "A13farfdyraU5PpUmr2D9vAiY8gbw6FVDtJ6UYtJG7QDonMDbUaE8AhurXKJJYUXjFmSpehP7TmpqPCMPAVHKSF",
  "key33": "5f1VKwVbcknTi65LTy9tNDD3P45QLXfhkFzxjusznZbdxEYR54KPzsJXEXfMKrKzX2mAdrz7JT5U7PGBQByLx1gK",
  "key34": "2U8gub2bVFGatHZndjj9jGW57KZN123S5TMxVjFQmpAmxxq1VT58eLZkGyTb8DDEQ9epeEmzgvRiTkZSqA2bQ81E",
  "key35": "LhjcU87UA4F2ppq42F2B4zKpiamgCCow63e99axh6NWcCtSvFVjaZ5BjhFwjzhNgVteL7r3pgcCwtSDrvXruKKQ",
  "key36": "4btzdbRhDGuCNJbF4z2RG1AQkiazBezEPScwBYqGDwQRM9oaWuoJxgETffvbJz3WZjThixtWBh7ijG5k5WjWL46D",
  "key37": "3jFHFJipys6ngKBMNHugY4f5dvvuBDnEnU81vtn7vNzryCrfNiJHpsCkrTKrjJGrdntPkYmeWoaRGkSrjvd6GTAo",
  "key38": "MRrQFJkzb4yczKnMPC8ga9krrfNaJxRdKhziJXJv85M5TGEU9LsQ4BPPyiyj3UAgTevXxic7JPKPjQmr9RxUEVE",
  "key39": "rt1L7yyCsrtpPMHYXtsEei5sYw6KmgzmGYvZQpn47YxCuQ3GEpWXgoxxoS1eND8X2SBqMn6Dkk3tXeWP5XudWa7",
  "key40": "Lp19jdVrTg9uC3v5q1oyMYfhJSLKogTbbARhm9GTpLrEx5aw1eyaZ1iXebCBkmro6Hsq72iq5fKHtUMHCXxgK6F",
  "key41": "2YM28JgE8vGcU6osYXNbwC2P1Evr6s6D63XgyPkNK1FYzKVK7ZzeWqc1kcBvU3NKbBzh2hnvuD3QLc8S7znYXthR"
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
