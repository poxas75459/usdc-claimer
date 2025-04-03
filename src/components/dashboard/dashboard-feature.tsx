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
    "2HhvjoCpUR8ZfYrYTbAgoF8Pf33ZR34zpr3bGxxbWcM8NpUwtPuzF7Dbv3bzKfrTkB4YrGW53tN7QM9wVh23q6qw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56MTvegtFKAbkR7rGoY3azZQTnZ5B2LbYrwCkgiUJKVWjyxkUHNCZ52LDFgdshfCgEqvLqxKQXyn6wB4yQukqd6h",
  "key1": "2BJNRvpqvsyCmSmnpjF5Q89D6E4awfFz1M5pshhHenMZmH37TNApniP1SzMCXYMHbLz7kX7dh73CYLABa4ui1zBL",
  "key2": "4Wm75VgQt3vx7VnCLRFteDrBYodoy9iGX1pwE3skShnkxme4rDikA6pMukBrQB7cFYezLpsC6ZgKyBdtZuswfGcv",
  "key3": "2hwQJD6DXWb3XKE8q2Tbw2LRYKp1qbKPZHSUzdTr9CVqwnoUnsGvYywsbVmYj5DCzGfubJtwxYPvgq4FKghJ21bD",
  "key4": "pyXgQiFPeAewQdcsj7Z4KDhukHqHhVNAHqTSuoauQ9WVyhMrw1NheZ7cYRX6Goos8dCLr2J6EEF2dRKTn8mZxWc",
  "key5": "3ZEAsvgdg9pWM4uqx2MqXu4tjuP4WUvbzgAQU5AxoyGAxpHTjtvpqqSQHuc99ujwNJVUgkYphGbEWZ6HG5632DbM",
  "key6": "3N7mNRP5Ah1eVLpfrHgAbW3fcKDaMBCKABRG28KYdByGzZBEHQ3dc6KyeB1NYRYYkKEm3BkXsGnxFHgBCMTYuzCh",
  "key7": "5eY15yPUwb3kH7vKgtPhYx1ADB87BfBLnXdy9tKn6qDZJvjxG656sH4EgR6gvsWJDLj1GmaKD6EwG83mMagLWoDm",
  "key8": "2YuybZ7FYiGMoaGjgycEgGA6bL8MLVM5UiHKnTjztHRf1yUFTjWt7zW6qswU9CgsaAcqN8MH5QELk2veMj5xBjzK",
  "key9": "4EPwDitWLChvRhhTmqduBsLBYJtvPMZFUHB4KddDsDWGZLv3rhSSPSZQnion3Eok9xZKecQbbhnSUqK7uD5Txugc",
  "key10": "5hkcWx9P54aRzZfMq7ByL6REBQ8XqpHHJuxZodfYv2VcES5w9fz7GzdDRRbsz7ekWZRqUtwSFn5kVa9wwsVghoYv",
  "key11": "DJZYmAnBKtontnW3aPfeaB6reesjm9MuMKP1qion35wJS7sFhpqV99pc1AY59CsVtJUNjDswueqsj2rX6kB6FLJ",
  "key12": "3wUtzdH6X2QfroGdQyYEJ7bT6tscGMfmrDdDHt4Qu9voMBexmJwnPTXioFuJAdYCQZTUxpHAXuLjhjoRDRn6rud2",
  "key13": "2oZdjydNCgpiCQ8WJDRjmUkH1pb7fg4Px7Cu5aAokWeDozqLxM1Ke5o3t1UcTChTQzKaFr4XQvJSLUcwAq4KfppY",
  "key14": "59SEETMQ3BL6Gv5cinXoyBtrxM2vTLsPVdG1kVCj13bN1nPvWxDnGrDHJxQMGWdZs5FppyqyKSX5vnzaS3vKDEL6",
  "key15": "63uePhcepXkXrCBtX7dpqP5AzrR3HYZym285qb5pGXQ5c9xYcHpW5DcyA61Ct2hoHpxTqGXy1HjBQCoUvMsezjT5",
  "key16": "44MYX4FZX3xw35RUEL4wseTp1Q86wKVtGH1gJ2hoRRZJ9Z38ed6AKC17vEvCjD6R7uWesdrhcQotz7VHs8ZYYYRp",
  "key17": "cdsMU3L3nE6EXxPD82f292XG4tcR6GGn3hrVUC4Sw1N4BJbxM9KNbQsQ2Y23DVsQdgQhMsF7uKkekV9WzmrXLmQ",
  "key18": "3ErGUoLha5jfYAomZwkX7TrEPuxDe4fPM1MkUGuWdAN4jKkNWWoy49GTPfHqJHScs1jLavT8HSkZGAKWiVm9EgGa",
  "key19": "38dUC2bevoBqaNYiaSzfLYsxZopkG7eUDRD2zhk3nWSfBDdLNi7QBxvgr8y3kHN1YSZ7pG71ayGjwtiZ3Vc686KH",
  "key20": "5qpQg15WqnJtfeh7Qjotpg3FNbhPaxGnADTynAqtm3PkCRXygpzsWNUrrgDXBBZ5m6P7TAqc4c8CfC3t9Pdw7BDw",
  "key21": "5i6bMGWN7vVxky75uiELf73KpTk4jhZx3UjUXDdww981cpSKyyYDxyupkBXdXk8ydnwMse4qkSxkuJn2bgbS5xXa",
  "key22": "4F56DVQ6MtwzzTpq1FotmovTzqQXp9R25qt6Hv8Zp17HSHn6ccVyfu51w5DaCudD8NcpSS3YxnFRmgJk3Jmbv3W1",
  "key23": "WkVy1Uf6eVXnDE9PyGGztKK6qAgZgxPzsRJWg9khacC3T4hM7P8YFFRdqVYDnDq6CbS2MN9kFrmDzh9QMi74f2r",
  "key24": "EwhJWkyitbcW9w9Jzc2GuTk7ZgtAqiqzMzMjC6u7LzSAQpt83XHGjMujxYxh1xavrNXe5jHiM3fkkt3JNHtCbPy",
  "key25": "53C5nvVbMr5uD5F9f494djYQmzHMqV9mUKSWmiGXwdwSNJU9W1TkK2837PPeTBPZrbLE9ZLKtx61FPWJ3XJaYKZB",
  "key26": "QhW9pxmYYwPiagAgezc7ha59ex9mznEVvZvt18HJqQNqicAE2P2YxKEiQp5Nu77p1Ds66YhDL8hT38wKDezqam8",
  "key27": "4NU6Wodu5ncALJA7xJh6Cg3rPyUkoNTQ9ycdxTE92jbwhW9dC7Kn2Mpv8XLenEvz66m24UAwmk2JdPnhi77Vyh9Y",
  "key28": "5CXubcgbgpXCH4cmuwR9Z3pDe2bFfbtddfyT15bgLFGZJ44bdohHUZqJkAwMcRs3Ne53Gi91aX5jP87BMGboc8P7",
  "key29": "zwMBW1worF34ostShpF3S6fkDrDe5JkHwThztdaNXr8cswxSNd5ezecrBJ8ra8dpz2KbB8FH7VuukPNWacyqfGw",
  "key30": "5qGYh5emtpYsDZU3NW4x8jZjsACWsMxB4VK1V2CE7FSuU6FCf1ysqtuj3ceAmtKEsvs8hbxDyyUJARk52LCa4Mh7",
  "key31": "Kimg9pR7CiknjtecTvXqn1yChsWFAoYg8h72wnFP73eD3sUTuKddPHRkW7ijq2nFbQcS2aaV7959zmqjEndccpV",
  "key32": "55HMTJecT62Jqity5XZK6pFVRcUPDn8gv2syA4eKZvg7NFUZpKEyhZAfUCfp4CSU2xU1PVaESGNq6kWimGEXsFt5",
  "key33": "24eoviu451skKASdSN1A1z649xFS8VRBrna6Jpz3qxUkPv7sB51QfytGmuxTj5bbAQHvvDQxrqrrLeELiCfcM9Ye"
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
