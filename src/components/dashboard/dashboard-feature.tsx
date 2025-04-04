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
    "t5beig53Dj7yQY1CnibjAwrsrFSu8YDjxJAkUAGEoUwkAC9FL6PYuY7PjW9kX7yNNWFVTtPzoCtyu5uuDXz9o1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Xa68qMtvrqCnjfnp1CaPsforTDc7e9VSQbz8Ptn7kR4xH31zsppepfDuLfEUmnrAZD2ykNyFyN99TqG31wdxJN",
  "key1": "4sgY9cGrPAVn9USUEujGAvRwfudBnVNZW2j4YrcBmMgMQ6Uq6aqEwWmSGfwKtVoT7uBu2eDrvmyocMY9E3LRHJJA",
  "key2": "BG3eyE1J3QMy4bbxqWwnwzUJcbVELeBGXZNec2LsVuzdut9UaKPSr77wRbFo3fUCgTEbv9aje9j5be8uGMtTN2L",
  "key3": "3P8N6v1eWbjDiVH9sbJBWrFtqrvVtYoXKCkSQe5VnT2fESAmYrXYQtvsxmfCEENtpofoHXc7UtRUr3ZrNpi4q8UK",
  "key4": "2Fn7qqUPWwNDdJxEtD8HdLbNPMwikKq8JLRTE43v6hTpoSjDGyTAsLw9jNS1U4CNDrGQNwG3hiQkqXt3qmdPam7M",
  "key5": "25kk557udY1kxBMzW7M9QtxeAEcoxP7T5PD6DyaaWo2qcmuCd1CXvbSkkFHcHiciWBx5ww3M8Ey5xacoZjAPpNsC",
  "key6": "3aAp2wX8nzica7EuH9sTcDWXWutB3URAe25sqLaGdqmYnVKwRGUoeTtwhCsuJbANN2jCDndHS6qLEkswnMj4QYni",
  "key7": "2HbWpZoQTANjVhL1TMbvBM4Nc9H8XCDFxTPw9FFg4GtK8GsPTz2s4FDoGyntBpGS2xCw9AjqA3xM29fSUa8y7bYC",
  "key8": "2ESYGuAA11nY8Kakptd8mEHBdYnBgo1ikBP2rYFFgN2i3JFgXoDUWXzMKMwzE9WdPJore4SPj8KeYx8kbtYSQT52",
  "key9": "4tXki6ohSdxzrszCCFEMe8irG6j5k8sN6NniynbbQZ2HPWnrgRKbufHW6FwuJmF2fz3hnAPYJLWpcbVzJJxnMbBx",
  "key10": "4bbgr4XjgYPM6qPxsvDNxsTZE9FJujbsyDj6hppuvaEwocR6wje43HynmnSBfN59mUtnSQgPn76kgbeCmbU67GC8",
  "key11": "wjU4JwRNnDv5N2XQX3RdvzSbR2C7qFCy5tU9FxK2Zqtp4hFbtfHxWgcHZnvtbW6oB4tjhx9SQg6Qc3msfioCG9h",
  "key12": "66ycyFFpbdTQAMjfw5bTL6pyHkUUn43M32eGsktFwVxJYU1Gy77cHeQS1uqz5tD5Cht8Fg1ji6sgfjrcnbUmnz2h",
  "key13": "8xCpXVFxbBCiSV45gxVPQEVdFjh78TMui7pVmQ4Kor8mSjWrvBzy6LPz4RFaEbpaVhWtc1P1hC2REjTwtBC6M88",
  "key14": "47zje6K1hXjh3mnLYjXJTUuQn3MG7EtznzP4i3LV73v9qkmptAT3S5QFYVH47i8iRKukzc9mLYrKPuNTSmVsDBwj",
  "key15": "3wT9rZ2ZAz36ZpNWj7jugo1tCE4CSv7hmyKJ3EWrQ6LSXYm3auPQ1cgSGg9xeMTbQfLnhhowuFNzk4Va1Rswa3Ka",
  "key16": "4UKJQEMcfCFg8i6BZWoLEXuWAzF74mPoxYSMkaaAd7xaGC2QC8p6f4Gh6YEgxVTK2ZUshqfK9gwimjd7uvGzTFXA",
  "key17": "31oSbnGqn2tWBWwniiN3J7xNf7VHJoWGyAEBJ5nKHo2P6KaGEUpc2TLgjCstSTwFoB9cign1fG947BG8LDrzhDGt",
  "key18": "2TxriWD9AnhC3DhHrnsmp8bBSFSqV9V2Yg6v6zJN8jGW1WfL9hiQGSeky45rZuL2awexgXiDHrq1xa7kTG5kaQRL",
  "key19": "5xPMBWpv4AR57oKN8KQzcRGjkZMhvM7mUesqZS7W1uvRfotXKum7LNf3NwnsLJw5CF4XxKFArro7DA3WzRgQMfpB",
  "key20": "861kRvQVYsuMK6zj6NLt6eFhNbHGVLHipjsP8Gy16YJSaiQ57ZEvGZdrxK363xgmYTd4DJyHvDzuTeNb4tRHDXX",
  "key21": "3zjidJBKexgwNvuhTqRRNvZLMXzvqkowjwkuBNVJfsjLUeg4D18hpff5WAvJDPoJZJzWCp7rCjvSUcYbbTpnS7jA",
  "key22": "2zdXxsSxaUowR3Gp5jfJ6kp7YA93fq4WE9X7VPRo5bG6jHrowSmaYMyKMpGgDNFWXz7bVuGSgZCYVLacsESQiPsK",
  "key23": "3pV2ac5oFxK8D7dFjGLef1BEcsGAqNi2TC5fQBJUJLS6xyHKRySuhVjy7HPzwoxrrAVpSQoYni3VTAvsoaHCYgFD",
  "key24": "3FMPjZZuHyLfi4LrccKF7TQEwRKsM2Jaxsvbj1puDDAfxUNEmb6CZjpXbSXnbsAUjCT2S1KFJebno1jKB57bnZ9C",
  "key25": "2isU4ZH6TRHFYnfr8VAu9dCiuDeBaGZBVSE4pSTvnvUTw74DfEpKYwV2HwnuRy4ajR3U2TvXwGVNLzZGLG3tcXYS",
  "key26": "3ohyWQXh3o2krMghKfKLjf51WHm8jb9mvtTWGaPiSFLhjdjeLNeiMqS9Fz8Qnz5huEJCiQ4QAbMgg3YRfBQ62Lgw",
  "key27": "36reMwdYL69Dr7mvpxjrVJSaRwj5Q7h4SkQ4XoVtQ9BALp8NeLPes2e2hfciWBQfhuTkBbEoJtDjzbG8AjUCMCB7",
  "key28": "33ejH6Wd1f744zEg2Q5EXNtR4vSoZcwzMdv6LMbxd5z6KJEjZGcKNzeB8NKJ17o5UxVjTKdnZioH2vd4Arquf1gs",
  "key29": "3WHnfWNMoJErpSQHu9MTLnRDCNYuJmrDqnypGFvGaAcWNZ5YhCiBJVmabrFSzxfTpy8XAvDZdK8P2MG2vyktqFC2",
  "key30": "229r98w233bsmFBidbhavrGjgRAixDX9R3pbn43TVDFopDMuZ2bPPAiYpCMFRUp2kcdwwSy7ZrCyEnVCcYcdDnRC",
  "key31": "56EQuLb4PQpSHwPJuydY5J4ubDu2kJJjtW8os3mLtQogXgNQtSVgRWUweLz5zXPrGtgQJvDHnptG4PzjntCa5PgC"
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
