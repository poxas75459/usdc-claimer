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
    "TRpB5SLEZa7QaHpHATXH9TBtcU7FvDayk9EDCVXVchUajeKbbU4abwR2VauExFPLmZFYgq9MVZCC8hFgukcx5Lf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67ZMnMeYG9gY28FeysqNRYRCe7ttFz1pv51ZcJEXiAaG4sBmCzVkn2LQChQjPVEsWTk4jRx5dU4VNNY4crdsR1Zi",
  "key1": "4VmZ8NudmfsbiUDpoi1ePNELmp9ekqr6avu4jaQsHX2hLdHFT5cf8FphDGExX2RrVn9WoQTVDzHRF8M5tfGy4aE2",
  "key2": "5mbgYAncuRpHLSVBVn48pbSzNE1vsuSttj9dxVCPNdNXLcjYjgXPLgb3pakVzFVo79jpcVZHrZ9sKeesgQr92VJ8",
  "key3": "5JsXwc5hVRLiExdZLdy3MWsfsw5uhf5xiFvLV3cawmW5dfsKPDjK6hyABYpTULfn5xRaudtpjf1fnxmCZsJushEU",
  "key4": "4vujQ7ZCHwQexzu7MnMTTpqMquKafweYq6ka39gnRjS5uBLgHCVbR6ZPXTumh27d6ArS7tqcZhSdBJvxGjRuEhdQ",
  "key5": "3s15zMF8sg4V2hB5b57qr5r6NBBoEd1Q1zKEQ7qJxgmNxHwM1XtdgcPzVTzHeCxPgWqQndTC4jfcMpWTLnnVYSWU",
  "key6": "57hJfu1EKQx82M1CPoeqmVKmFBdmVheZYJgNdF7V5YshyLjAncBUAbBhjtyW4te6CMifC5sVczQTexg1SWEouenH",
  "key7": "2dQhhhraWmD1GwmEqXfqe38GWoZvMjxR6hgujdkukRhD9pUrkm1mjHyLxNNY66sAKhUeRSc2czUresoXS1YC3Y5g",
  "key8": "2AykGLanrRehZDNMbG1aA1NQe1daWxzDsFpZBePb21E8gQijtvGhenPoGumaPgCEyAfZLqeAc63FxbZftG8hVqRo",
  "key9": "3XftrTHXBjVVmYQFBQeHPKkzxJ7LwFCexkfmRwafkCWHPAWzP1JJL78HFLb1gx9XTmkUzJYjHoiSVR2E5XhUz8Lr",
  "key10": "5KQ21789Yc1aTvsU7UaWDpH9FU3Z5PZf1K9nKQea6xvkYz7BT1cVqzKR7bbTzqNhAmtzi2Sx1V9Z2BomuDdbmmW7",
  "key11": "2vGdNtjeYURRQmePUkJHjowkSLNy5Jcmff8bzRK73mFf8kCmDB1C9Q9vPoeo4KedK5X6XkHRav9B3nDf8Ry7CiL1",
  "key12": "3QcJcqK7A5ZfeuUDFRHw8e4UaU24fV9xM57dYXUHARx9Yp5vFP2FEt7p3nZHPKzmNSx1KodhUWbjfmc5fSx2RQoo",
  "key13": "2cUc3HQubQFq5rk6ZP5n3CR4s8TpqgHQKUR2EniuBBxjDgRkkL8YADhQxWxbCMEKvKdZyqCinHQB3bzi2TmF8u4m",
  "key14": "r8aq3KKu8GuTh5z2gtbLDyybTw9iZjv6uNi4GzvFearqETzyqVWX3adGTpjQ6N7tgfwbTu4dTMZbwSM71XVjRBT",
  "key15": "itpZ77f4dadWb3KBKiqo2bpFjHS5sJVAE73RU7xh5sT3he3CjdNvvmABQxwgCfsJzCXH9b2RjaZh1qHm7a7QHgD",
  "key16": "5qdYFQL9fgfCqgU2HaWBHbiZZuReqcJmGBwT5U9m6yqNV7eseKn61nricRasYUB1EXm8CQF9Z7tNHD7e8P3uGdZg",
  "key17": "5Vu9U345bxNdHptjdxkUAvXjZ89GAfCMoRgb3B99uceBbKZBMwPcHAq8ZqTUrYRvxEg6haGXNxy7c3hhk9oyRevn",
  "key18": "5tKQuaV73tp8yZxnUPvZKzCnAe7t3u9kGkU6ix7WfkroYkoBuizc7SZDz1n5yvqs2WxxtpFHPJM9fG3ytbXTgz8Z",
  "key19": "3E7FBwPwB2WzrQrPK9Lw1UpZpuZJKgLTrmiDHEdDkRKW1PNmmVVVTBt3L8YeesEqEFgUzfqZX24LANvRNzWGMQEp",
  "key20": "4yM8ZH1shG9x4J5Drh4PkNCj5iKySC24T95UZPy7PFL4sdN9jU29qTyWHsydBdka9eoBZzfbeNxZUKFXCYwLA23P",
  "key21": "5XCUbmYoLiuY9Dx4rs4u6ractUgKzkqebugRZMzFSj2HmXXqn3srdjXe4cAUaxLCREFbB5pjQR5u3HbZ54mGvYmf",
  "key22": "4CvMDYmtSZT8Myi7esrqeAfssF7VRTWDFWLawgraq8DqDhGozBpJ1nUi8AErgr31RJH1E6ykmgCLjiaR3BrTP86R",
  "key23": "oqiLuJqzXNcQQZc3q99J1icyjCNkNEsxMvUtdCQcZJ9UEp8XwkP5x2WJWa3Fdo2QuQJLR1baSY9Lus2X9RzLcfZ",
  "key24": "25GqBbuBBNcBKchbJahPpADkaaYsKxUQsEXvgnzUrGqyxHjmLEk4eF7a5bnLyY8kFBcxR4BRpTe6EETD3RSPbiyo",
  "key25": "8Vd2UV651h8dBgSJGptvTGb8mHYqNZTenQarhpBbqYg64YfJPF87p7skEz5tZAtoU9AFBjtzix4PJxax8SQSMJW",
  "key26": "3T9NahM5M6MVM63p3sWxMgprAZL69qfFDVsin2PiL2gF4syNy3B7ToWyx9zARmp1Vf7RGbYgpfoqztxiFSAk8f4V",
  "key27": "2d4Lf8SUQmWuTsq3AHt29UxBXj1e7gGQF3naDifx9UMXWxdBSmmJRGQwneNKkK8g7ktSw5k4us741uUd38dL6Mi5",
  "key28": "2dkBSzV6t4uCc5f7uNYKN71a1ZVqLPXi7LLQd8iriWW7fD6z5koRcafk7p1cbm8cAwyGhEweKeMSRgbonruFng8k",
  "key29": "5sWt2B7588j2cQdANTX4jY8mn6TGh8eVyEQ1xt2bvqkwEidibECp4VqPKS4TUtM9GhTA3eVbbvA7h2h4b6oqLa9Z",
  "key30": "3zrfzoD6wCUA1SDB4aGiwm9KZBWdrf8tsvdMCvmQgznE9QPeJPh9b3ARbzrfatDpigAMgbcCFD1X2WKmDbTisD9",
  "key31": "2xTeGatuwpyLuNdJ7Uz7YaTGUZF7tLkFQjPwBw9Dzts7shcrtW99gYeUas9x56g2qABcZLvtpFSGu39Nd7WExH58",
  "key32": "6kHDHNiyiFEGGjoEoFdLpkLyZPHa1xZrrkqHD8oeURJnV5RaqugpadcUJ8pePACpUZA4LzdhBpEywKB24j3QVXw"
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
