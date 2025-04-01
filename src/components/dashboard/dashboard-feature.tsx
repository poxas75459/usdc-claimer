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
    "3ZijyGbu8WrFa85ZJy3NbDyxNHpaoDzth6MtiTqzChhV67PzVD1yP5M3Guy5nf8pUGb9SaiN3xtwmzvzxyatjN7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EmehpKsaVPESp3LSAyxXddf3vCEYu3k8G3s4tPvitMPkoeYFJVnLUj9M8mT36dahjj2KKv6ALAReJ1KXatWSVCG",
  "key1": "63BgRBCJnGS3w77Ssr74QMaodfAP4BDJKP1oivpezPkx6gokMmXHM1fxtVvxLjCsUzFPDsdjZDgRNQfADUPzMMG7",
  "key2": "4yUpwZ9Sk64PYwwZzx86WZnt7YRboQGK3XG9HkgGRXXKV6FXHRh4A1ngBxz4CcZeSw7YgHgd3GF2fbpekgd4ffJ",
  "key3": "ECB2wNfgP7gkmwA9m4YQ8nUaC7aSHhRogUPHGkM9pn6DEz41X6uKYv7sknixTAkc78HyQKw87yaLyGLvrcP87os",
  "key4": "2tb81SAtznyV81qvZwmezBptQtSmC1zy9ub3bKo4h1sGv5ri13dV2ayMJRvSgXGkAgRApgeJAXUcMenryZt7xSof",
  "key5": "2dXy8c6dqafynatu5Fy5hQbLYJjgzvKz4xgCRCXYPHyhRkCD3E7i8u6WfBLVXSGTvpUSHpeqrPeWzd2Y23RCCKG3",
  "key6": "36BPRsASSFDP8Mhs7usL3MpjukGqz1m9cn8G8oF5s14eSMxu8JSDxLrRBbuNXv3CgZTc4LoTYb6k7MH3Yvw9sgqs",
  "key7": "BtoQmMjNciYuzPXvZz2R5dzMYWCfx4iJyFE8QKXFiomgumbb28R8EXL2DnB4523m26bcpuA6bY4ujEv6t8UZKUS",
  "key8": "59KTM9PB2aXu3UpHYA9GVJaKTRbyYwueRFdrhWa2ntZi6oM172piNDshoxDgfJXPvmoRHLmUkcQ5tzHRY8Crp628",
  "key9": "9tTXb5hu39cC3iYLsvcc8vbBeh6pMyj6qXa8c4zcE1Hbm8Vpp5TiuAoLt2XfAjqAvr1nWfSpko3z3mZCZonzP9H",
  "key10": "5qAh12G9V7YCu6JE5LVjBWAbLqDW7rHjKB3hZ47YgehqRvhS3sPe73dfft16zp1K4eTScKxbMFwsNAGcL1CqVhkg",
  "key11": "5eaDrVuhLP8VVZpPFZDLdRKP8xfS4ppczcxhs4sRms4fXgFnhuMi1P4VeNLmDzri2TuEZmtA3Wu6vMh9btqtcKJ7",
  "key12": "44RdKGmYvawXEqE3p4p7MkhNecnysdCDhNPTDNHGbCYVTx5LkYACuqCXeUx55TEA3i2ctNmP8qkZxNEcyeGvw6jA",
  "key13": "5bwvqm1Lbb5nqvY7NMWhShsMx5bGwL4nQyo3cTYDsPNGYdVWWUFtgXc4oSeHQ4wGwfr5BtjsNZvjkNJ9pC8F9y6D",
  "key14": "3H6ueck7XMuy1Qv59qpWB8L8EPokFfG3z5fMzqEeFwCnnCXnA5k9ALysTDXskhx3xL5msm4WjYME4298qP4ascvL",
  "key15": "2igM7oiP1XTijoRGyZC6NCLhBfEKSbHapjRkhVD1g9LNpweuFMim2FkRem35haqR474xeuXpzcEDrtSE1zpWaShp",
  "key16": "3wD7GPQm4xWF91tNQ162n4EwicoofsEvBAonZadPQfyyYJbnT7K4wNQxRQYupkgo11QvTAp8xBbAWuXq1vGVcBMp",
  "key17": "2UrgkkgUZxUHrReq6UwAmXMMvgQdf6iE3WJk7gmDWWCCh436NSW6ugvvFwCwMmsuCRsYppcWPYGpAXnpP9msNjhU",
  "key18": "4o6GeJY72vxVcDLCbpNA3Z3Xz1tXuWRKb2dx1CA4eifQRWhVQN8wag5o3CAZrMDuEzEfiJ1cD3u8FDhG9TkVyQR3",
  "key19": "52Rx1m4jQoeZHJrcPnjYcjVPkZ4KNqjiRR6B7ua264zCfwWnRTXYS35Q25ySktVbbPDWg5ugf92iYeDWQtgNUe4H",
  "key20": "CN12mcMkWTJ5RDH9prxJbzrW8JhqRkgT4FDAoHawdHHcriGJY2zkf9BkW6YS5i4tDQUpLfoW9LLYSHEqMk4WKwG",
  "key21": "3DX6mv7pXCZnVcZDb9tDmhsVskHwypFGRWsPJYz813EA8ijp6BSQWv6BaYdUbBTeznWS11es9xVs7uiTFd4R8wKo",
  "key22": "4XZT7i9R7yDysAf2Z4t1ayBbpdSJLSZSZ11R4iJ3dESP6q2rZukNfqPY38wjdzCAzxtLRxzBkaw5UtmHp9Fr4cCS",
  "key23": "2f35jCXEGzbV6Q7LoVNNbrbs2KBfWNPFESj2SeoASd6wiMfPVwnoSejFjCMUfjuFZFWfiCDchx8saSxui2RsbXLG",
  "key24": "2XdaXCEz8E2Bo3ba7vNtXpbaKDvLwy4CJ4hZbzkatVNrXtyCgxLaZ7EFRFgMXHFvGEwNxY6gq75yQNmHTvdai8Vf",
  "key25": "3JieZuSAqmyHR43w7qmCQr1DpFmkdwD6bWMpPB4mTiQHEQVsXh98HwiYbQRsn4tfmPEv9Avysv8EFy1gmEfQn2j5",
  "key26": "5DJk2hPTdPBpnrXhs5xowNJiYtMU61yDR7SMYCLbF8h6WTL6YrqHLPTrTsADLPqinKD9cyWRa42HF7A8qc9ff1xi",
  "key27": "3dRGNxcyAZxGLH6ExSKon3ynkjSNjtM2XiT5YiuPyGmw1mXLJCuWMTzUtgtSRm2x4VUNSLcoPxQ6hG1FxGKr5tpu",
  "key28": "2wD4tQ8ytYqCmeV45eNUhssZmiyHxwaTk8knESR7n54mBysr7YbCQsjKP9V8rAEzpeJcTL9txwyNQBLb8bxZKMmM",
  "key29": "28uqTWCe73G5of2rD6Zhk5Dwp2G66Y8GaSWpWd81SuccSKFRkJMcVNkroTpTUyzKXd8g5mqFVe194a54kDDGXgia",
  "key30": "4sknTw5evkfD1BeVFb3gP4nhgGvFHJqhAvSQ5FyMenp3NtitTNvtHkwfabaMwA17zqZd4f35vmEoUaeamYzneqFx",
  "key31": "5U6XLbZqfc52SuremNPNUnKg3SYkNiETggW8RTjUNTqtouvCyfVaVg6FzVVTvPS89H3XUtM3sDhiv6fxFc6QHZHE",
  "key32": "22MdPHk8GQSK5nvdfxY6PLfVHpPZ2EZZoRDgnpSF7aUrGr7d3REMCJih4Dw1NuiBocEvoSo8DsQA6U9jZMuRZ4sm",
  "key33": "3EmeeVDewqWHATcnN9snyfGPnLU333qQJGVtNDg413q9XTEF1uRDUK6iGCjjAFjeDwyQpY2dCAnMCYc7ooy1ANnh",
  "key34": "37maP1nUJPGYxn2mxBY6PEy1dsaK7SAAqeaF37sVVNB2UUv2VFceK4FfsSSdfp6txfHvUqTp3LvkDf7SbiuSZeha",
  "key35": "2nR6C223CgwJ2FLcp5ks8cfWQgAdBhxbJS8Y9VPP5cVxbsf2NBhTmLKkRLddcCqorvkV2TTSwMm6GaJ6oBDmZsj6",
  "key36": "2eyZEXxtvesWK67oHaybKBZXS2gfKt7o14DtJ8jngKo4vzBXkfX4PjNXPtqPEMNTJmCEPHDpmE3gJXANzjHUwcPd",
  "key37": "5x24iwLLRnFKCUyj858U7sgHjhg81zQtCAucPL2HjwJxQdSc7z5yVz3Tb9v7GQbmXScjBpmpt2qPARZncKoZpZgW",
  "key38": "5K5UKzrz6mDaeK75Cz2hLTKyuaXMt6Wo3zZvKiQ3cbDWzEyPb1KCVSHhtQw3PEVFZhKpJivimYcmFTLAY3CKbpsS",
  "key39": "54yxudn3bt23iJiJC3oRrRVUHMYnPkEoATVfq2Z4HTqKLa24YDpXVwwGqtQcdPFHCsnmFPwC6CoxGM1JrT1BCQt5",
  "key40": "fH8y5PQp1B9JwUz64VWKvDFji2cypFJiVkW5mbL5igarzb3xYZvyk4sJwRxbAcLVaZTBtn1yMpWYy3Y2t96K2rg",
  "key41": "2rhi55NjnJhEpRS7tgEDvK3C9nYpdCWeZzBgUsPcDPTs82A857j4xL96SPVsKWYEpXAtRwVtTcL63zfksWsZqGiV"
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
