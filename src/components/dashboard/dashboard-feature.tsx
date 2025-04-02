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
    "4Fye2DRgaGPRsuqNEFhxyjmGiEKYSUGV2numHp7DuiLYrKR7kDvBBP1UegkZUQ1RKk6rPjfEPtmMHKssHXdKP2WL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r1oHenQUrPXzWEvtEF1HB7nNsAXs5aQ1mUXu2egRusDhKKF6Z7jA4UFJfvF7K8MvzGWuPfad9ZBBhZsErKL2Hyh",
  "key1": "4k2KhbKgeqosW4cnXSnGdyWUEg3Q197cbEXRActewtLGjfiVWeUycnCp88xgb6HZrBhgz4CysQtmtcR9JzgSG3Zv",
  "key2": "hhPC1CwUex8pgAaFMZXdRrijH4ixtQB61LHuNPWQ8dtgXsUgBHCJDf7MeBJ1KqGsyFYzjPbh5SPjkarHM2mNJyV",
  "key3": "dA1Bzj3uUmVNPezDFAk5x6jZWdX78UYDzU9vqyaBPHDaWMTSMqgQDgsVEsQ1wWWysdXo2mrF6YZAySAarCoZrEt",
  "key4": "4cRnN3Hwxhn1od39SC2xXCxtU3rSXwaSdwHuHSSCLjoeqvwYY71xUwCzV85ZZMxSJZRNiZzEH4CaHWKA71JYZD79",
  "key5": "3ZSBFuS2qqZBtE6mqG9sFsCtCEdP56X77D62JorQ3esRV96Hz6kgNZcza1uaCh957ctpJVoJBGYpxGdjXWtmW8gU",
  "key6": "5LB8Lp6Arysgoxr8sdeusXTkf4Fur6SgeLBc1BqHuWf1Pk5urE19MRUC7cSZEGeEx1TWZGhJZAfH8ei68hyTpqiP",
  "key7": "4DsDq6JqwncN9omV7TZPKmb8iEctSgWhckg5Exgxm2UvxrQ1ACfJCmBQwfXD2rHJQ4xahJgAx5JbE1JBbMhRYZ4b",
  "key8": "4yEEKNfXJvBg77zHpdYP9SaxsSeW3EvegipX5jSXas9RFFtdrhB6g6TLBXSgoSBFRCQR7iWRGGKSaMxV2VcxKWo1",
  "key9": "4zEvQ4uPBJG39N6xgCoyvwMKGGkbVaXTd83Vvqq8BVUacHzfB1wzthwGvPsSKYPmeuMr5tvqpXG7APTGuYHqCT3U",
  "key10": "3APaXg972bhAFZNZf8P6ri5ur4F47qFPbq4ityMeD5MNcxbNMRAJzm5TKzhpoWHEzg1TxH2RkPZQe2z1xBvna8GJ",
  "key11": "4sDPHSQoJ62z33Kz75yLY9JZ64h63oGwZ7JAfnf65FNSzBuaF2G5Mauunj5iK9T5gzzPHUnNAQmbsb9URykmYgib",
  "key12": "3UGC5umAVGXB9baBH9sYf94gbwB58AktrBTrY2ecc1itp3zd686N9UCpxdbNsY7PVUKsxVXwGvmJ1gDMp3UyQr5M",
  "key13": "kNcv4rQ3s2V3s9M3Y8c2yErHoUjanfAV7TfSx3dryvda75LfizJPyaLUh5gKpJATtbp8BmUYtFoYqifMRUnrhVT",
  "key14": "3QCjNJvayUdiAzw3qBiz8SG4KNSyGEy2jnHEPY3VsCQ2QqgKw7Cog7brtKyumGrLksBP3KPxBjzSCrAnn1vaGAjx",
  "key15": "4n3jHPKzPBhPmjT76MqJcorTPu7LidevZ9ZBnYC5EQuGiFfqWvhb2vRQXTGJTC4BXZ5ehsTkXmRrYQJTotqrzXtS",
  "key16": "3GoE76EV6BqqqNLu9nmGwyzYR2GGmAquCRRjSqVRNW41cZG1XZ9Mfp8qK3TriGZsW6p48iLM6yBhN9bWWteP852W",
  "key17": "YrahRU8Jyw1jaZBTWtucoPkQzraMZgoW4BCv5nztDsMTAvwzGAT2R4RMayeXzkQjKUahM3ixmsNeMJjoEpLAF68",
  "key18": "JaKEWE3M9XunrSU71z5MAh37aVERPc57rq3ycJyhQrKDz4xwhZegwe8fj43RjYVYd8DQNMjYwYMpB7FKmD2mvEm",
  "key19": "4FcYuhLTxy1eWu8vijvFKVdKRAUALec3C32kUZnND6FXP4APYAX9xPknfrTc2t7EjHFx2dgxkAiXwp6fd2S7U3Ko",
  "key20": "2WyWTe43KwLrKem3Xu6rZDEqsk2xcSiT4FeG8Gh1PnQkgVUc2NDcuvFF6wTWXE4FAjtDfBv348LctTNkUJdg68Kz",
  "key21": "4fi1BUqWzov7J8QRfTWM96B8Y2nGvjiScBRyVmxXV2Vdv21zgg2zrMxfjwV5Wi5faybMNrQ2kZ5TWn7AxMq6rbqh",
  "key22": "51ozpTEUsAYekZswxWGjyMvccSjw7FX8xMM84mZE7dbXL4Qk32xWGyiheVH4ddxBAedrFQAP56gb18cQF6aBRC6F",
  "key23": "YTt2StaRmUpTLPmi1w2aWWbMKq9Ap7GSgL6GSh6vMLGTyEeW9fA1msWn9gsji6emvWzjcwrj7B9woqaPZWehN4H",
  "key24": "3VYrQyt9cdiaav3vHKYjRzWX2wtTycrAarR2rGVty2p5L7WZ4XEPeHDhfJAZPRHXc6sQHZpMADffoJHD3VimwwWg",
  "key25": "343WUnCeqyMtRqyshTp6okwRc8aNLqLTgVWW1yq2MHajJeJJgiyykwTBQmkTVq7kw2MWJ5q3UbZEH1AXsCJKsvW",
  "key26": "N3LG9NYWtAsSKZqxNibkF7f9YmnXcyYDQEEq5B9nWA5XiN5AFar2v4chCoSXP1B1bnLrrJGCTQpNcYcNUeABuoM",
  "key27": "4tZhC9SY95xYpxKTik2ag6ENnWUKhnkrYvBjGQcrHo8z2uqJfL4pZGpg2jP36GEGCamCZu2Kwx5v7kFNq29dyWvB",
  "key28": "N8pBaX2xCanX6BinZC45NvavwXGiop5CSi1fMiGMvW1Kw2PFf916kUuo2Z4peJpLWiGNcFi7g9e4NxTquYyenk2",
  "key29": "4qqpVzG1Qw6kBbpzz9GE4DtMB3tLD1jpJfKpD8TXHD99816BkXKn3JFM6b5RWEPGUpjf5zrpVBJaxTYb71paLAZM"
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
