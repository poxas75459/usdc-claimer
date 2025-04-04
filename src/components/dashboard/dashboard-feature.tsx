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
    "2CDBgsebPiQwYrcZtbqGAENTdLj5Dt81NTtDW5xHRE2rHMkTmu7qQq83imkV2t9u84dLXLNBmq5ZRBtkMYfUTs4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RyZ2BBQXrqHuA6RVqKyzWwjaSifWUmDm6RRbaFj7jzfGJLz5u1DVzetxF5xcWgPUiPDr3x5RRY3CXSDRVrd8ai6",
  "key1": "21MPG3JbpaKhzjbWkrp8Jxda8wWpxybb2Ra146HfGP9iBQsXwAa81XXoRLtM1AyfobbcjXPn87xn2fk4VerrYzih",
  "key2": "2xuqKpXvwMrnRgMz5NRAVq2ViqcqWoGjZYYtH4csLGibH5UwRRkcaUXjQnSJRBQievnmShDfiZXhfb6qXMbqxuEf",
  "key3": "64PKeV4DcKUJTG1mZi43mJnmoT7R13dM6BT8Ao64rrYy8UAMkrUC2dgAEpm1hWhyfSuqWiSo5qEhMcGEbLy3cKhX",
  "key4": "2AGKydvbUhgaqUkNu7aK3oZcahjLBadcwpVqQckWucffvAFSYPA7tG38BjszReBxUUJDuwkUwHav9gKAQhuUADWi",
  "key5": "2yF2RMQbvhYkRMfYf3CwgxqvmNt7yQTahT14zuYkQT7PSijpb7bJoZNZpwSKRWgrooH3YSkPTsCjH4ZG1LAtAXga",
  "key6": "4FSaGk9qGBZdeUTqwz3nVCf63gEjJaKsedp1TogiJnCGrFZa8JY4oYnhyivDwAD9zxF4GAhPYowcNTMJaEaf9p5",
  "key7": "2zKFrYCAV5vMKnEYbwLermQhK7C2x7RsQS6JaXhhSoHcFDwkuJErzDfzijbX1uHjYqZrf2e5KQistAtkBunXhaSD",
  "key8": "5GJVbiqHp9jHUEzjnzW9pGVWVyCzciGxMbsQkbwPLjr6ZL4XaCsktEdAdi9EGd2msYFeEs1fniGuYo9MfJKsxRH",
  "key9": "2KhevP1sYm7pZygS16XbJuLw5mTeaqyk26WRFbpk81smCLkQUkz9mFRfe1J6EdysCmvAGcRqijcynh3pMPeWmSka",
  "key10": "4BGqL4hfAks8bPir4FPtYVtRLngjD2aEgvsYyaBio6HWbRp819kCuaZ7j2yzTpRDFUz7PXR29SCVHsr1NxzSaiWn",
  "key11": "38YyDzFzPAXL3izGdESHTe4g8rNztsRGihmLGfkKikMhh2dCzyKqKeqT9sySS5uYoCz7NALKsT4UsWZVa9TK8K8c",
  "key12": "3uFHQmNwVP3kuB47sk3c6M79VxDumvNf3Ltb8p2o3ew14ShiAepEyjLNqXoTPb9YPQ4q5tzedBuTk2SsFXnuY7xA",
  "key13": "66SqgVnQiKw3nfBUsnpnLMn4G7XicuPS1BWQTW5VVgenAhCfXZfUAKRyz6YiFD5sZfrMDEm6b9XbVrfpGHFw7hzU",
  "key14": "214bZYyYEoCYRy39RhGchmRzKkaoBLmhJGN81zJcAnenNtGrCmi58gennK4diqE4YRBXnCtdNgzRej6Hex2B3NQE",
  "key15": "4oexN7zmFL8x17iCWGWEA7iG8ai69jEuzGJ5KppQ7P2VDGx55Sq9u4Zr31p7FZ2PWBRNmSaSjAwvnJPk7NvaAtvB",
  "key16": "Ygf9j7cgLUvUrZ3Coso118nQpVFMKc5bU3xnTXUmtWzBC91MrTA4xhktr82jx8yC2XKg25cSbAQ2RAxDWXL9Uu8",
  "key17": "53fAsLcsZcrGUpyMnrpRWhU9gmfuzL343TBJUwaRL78ZQYtsuaQ1ZthRymfMFe5ofyEsA9fTtShyaXuy2r7M2hMa",
  "key18": "6Eir8oaQ8G4zKXc7UTiiwY75Takt4JRcqZ7J1ZngTfya77m9gQiwjjA4trc8kY4JQMKdPxo9eUnQ1PBy5K29xM9",
  "key19": "2vt7gfuM7XcgE3esEtxkRWw2F5WXHLw1zgtS3MLjf9kQsXNrDQBf91dYDeMtopEsMiu6EF6CTb5tEkT8ZaKvnpuX",
  "key20": "26nmshLj5NuHmwwAAiYUtUxc2k3YNL4E6T38AMqigUw19hbKDDseV6tFvPTmnjLuxwjzQS2AQayTLBN5g6vJDh9D",
  "key21": "4cn1muSiGSemk5icF4394TgVgSp4KY31y7fqyx9PN3FBgZaDihhbr8Uzftn56cr1Jsj25jHiBYrJNye1QDzk8v5E",
  "key22": "3si1scoTdL5D96RB26kbRVtW3adGE782VXZu5kXP1x3zwHT1gccqyTMrZxB2T4ZdDchfPRBqP3nt14gYZoG29nwr",
  "key23": "2KdS9NAWG5RkWAZFmWiVgxzr4m2CmXtbHzADu8DfbjrpzD2iuxyvWoaz9dnR4qZYe4PQwMsyxjzP9eYDaQ12whKk",
  "key24": "31rF9cUiEStMuvozHTbNrJNk5uD12US4B4x9JGVagyrwr2DrmAFxsczYJ5P2vokn74g5m6Fwor4shVC1vMCVtD35",
  "key25": "26c3axkYuwQgXhYw86mBrawQ4ZtnawuEwajnxSnNW8A7nZP9RU3zE7XRdeCZzgTV4iaYuToTHkmMN7VgKrXRUBKi",
  "key26": "22UcGJJc8cKLK9vaKRtv3DL3ZyWuExUJqUdUN8dwYUNccuwxbNNHJ6LfwziCP2mArteTM4RAGzrpxsmPuur9DduN",
  "key27": "3RG6W7sWApBpZQS3YH1uiLkbxKgjCnZ1tn3454q25VjTwndPAALqojZpzGkWQaqrsZTHXVmgzH2nndRCT7qs2U53",
  "key28": "kwyetTJG3YFL2uqAaQA7N23nLeMUuBHT3mDXzgn7nS3ik2jfMbChnGpD114rbtzGzVPVdFKSRRtbiwdydZhzJve"
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
