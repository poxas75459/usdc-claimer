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
    "39gyLZy1VaJPFivkrSYJzfrJHoJW1tCuNg2ZXWQHHb2CZtPWxFKYdcQpmUsUXNJ4Bkxm2mkGpgWxtUVTaoRizyuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TQKNY2R5w7SWGWvyQKTrm6ECn3PmwPwYDURyFtRGC6ciBzsPBk9yxo1N4aHVaERt2pHXhCmMknRBsKW1KNtUS69",
  "key1": "5NYx8bMkXu29pK5kZtaPNB82g5PrCF8pMm4Eq3abdmj57nNQjS4Kjkwp8K37bDJ8MffFh7bG3xCXn3PjoVVeht8Z",
  "key2": "qcdA5qTji3HjCi5fPauDfmZpUsksyWcT7R2U14rQ5B5XVUHfYkBggGHCkCqLocqQbnUHxzF3ymz6JCDwTBXnHYj",
  "key3": "icn2tCvWbDRxnzjRaKH2DfGBj5Uw2KVSBtZMy5ap5HBTk6J4WQazLy7RBXi8uVu6NmtxLC5evMVswVGLEAGNVe6",
  "key4": "qo1NDnDzbAhvm8PQRyR6EwYq7NTEvpDhAVWXr3fK863wrYzWpWB8MR4j3JjtsNGgWsWuCsxQnhqNz9NsatYu8Gz",
  "key5": "3fbB8UQbyWd6XxpnKhPnK37g1tcaFiPmkPUPAfhxVSywB7ow1YVbRcEibYhu8bGofXgQg6TtEB543wVdiyqybqyL",
  "key6": "ssLBHZ9cEuoiesxPrECLRxTjypbNYhWTMrCAiTMuAa6oYDwCAxfmTKyCScK9hgJCeMQkDEVWG8zbFqXE21odTyF",
  "key7": "5T9X7tZ3Cvfkc9FJSRWQXMDs7FZ2JgKYLYmTwrnqSNqcmbvUGED97xDXLqR7yHCkG6KRTCR27kc9Gy8puJ8de2JD",
  "key8": "ymcVS8YWwE2VugoVBdcuN8Dq7PpRKNCh6ycy6WJUr7rvfkEoT9T7kUUAMnZjFkAENqz7w2yd3FffHEhuZJVHwQn",
  "key9": "34VPeAPm8d9AmqrTbC1WkvMrptxkXfJE6EHy5d6vFb7mtmkELXvts9Di1k1dx6Z2Lk1QvVFQ4voDiAYxxieQ3otF",
  "key10": "2qSjTQz64rG2gJi9qoxGeBEPvtQqptA2QpgxHa9jrZqASjWh2HZoktQ2FmLQFzAY3ufG3AD8g3aD8Qeb25xHSy9v",
  "key11": "5e65tCsbczVHBsxETpgVDdwtMSh4aDTByrNiEH52pXbBKTz8hVX6r5E2vyEhU3q5npJCTbQp7a1P3dtEWwrMkhyj",
  "key12": "3UDanbnxvsHY1AHXrWHa58wyBv8XqUUhZKNqi4gVkf3xcPufG5AcnFHe8sCWYuAtaPpZGZHt43ps9gYCTM5nVKsd",
  "key13": "4mVetd6sc3VEzGormPCvnUiEWqrrkXEnLRir9fauQhJkakDGEHqsAJJWArsu1GNGM65EGqS7jVcLxWxDiJT2dF4e",
  "key14": "jGFYtcwzTK6aViw2tUjEjhJFqRLWcJpVdg6sfMFN5XZFaD5MV43Nf4Rh7i6zFMfYQnY7WjfwAKW4b5gL1XyDh48",
  "key15": "2NN73eu6qZgNCPKEFRFLrymgi9uVcHzSGeKBYiRS15UhkgTpNrbXZVQvHCjbcQYmo8ciVt2PHVZwYvE3xi7kKYdk",
  "key16": "5FRksvcxnysvw1kygUEdg7bQgbb7Lmyf444cF1Q3zncBF9xq852xhLNQpWtwRCHH8srSq4o1c7WXgResFzBKqR1i",
  "key17": "5VXZ4QvmW2W23qA6Jo5dZfAZ98ATNjNAE1199AeqjRdu6iuGAAJWUUa9pDNyyieGQbytAXeuFfTQpdZmVnj4to6W",
  "key18": "4DtPCbXzshoR1j7eNXmqyJ44jxdkYU7jWJo3m1VzRLADTVyDuz1Yu68s3MadpDZp54qpkVXyySGAHA8BbNNGFGwE",
  "key19": "2bcCHXweU21JFahV4VrpXwKNVehXTY7qC8FVJEV4fY5fbu5qfRVQjJtKAwuBLhCwfCA5kHKojVAJJM5uTMhfaeBS",
  "key20": "3Cg95Q4bDUHeEED8Bc6KPPESNeS6bM1piT9Ppv8e2nEiASEtchPktxYA1NAVgTe6cUgBgus4j1HrUfCoeBhQN2rp",
  "key21": "3u6pJJRW2bx8x3eWEXwtrzmEdsKtTE4TDGMPLCdY689dHEyDA1eqGLHHUVMryRxxwhTZs8Uv8f1Nz3Ux6bhop9k2",
  "key22": "5mMegH6haRPu5p9ioBRTxxjmGgFqPJLCtBaMEJDrJYWSqjoJQraPw4WoxkpFpWAYDS3vzKhSg4RQf4FLbzHGu3fJ",
  "key23": "2QvBQP2cuAn9JRTkTNrwboLQB71kKtKrAsxnEnkGsFJbLw6s7JUY3riRQ4AKEb2SQPYPR8qwVkn4E7ZeusZYuUem",
  "key24": "5vc3aq8zJCweaVKkRDvuPQd42Dqh6c89stJeuKNsHGvPynE8y1p1JYzr6qpRRDkuFhMRxYxzB5zAJLo4ZRrfS9cC",
  "key25": "2GpjdLdxsHEG1Aep91CVACeALdMfa1Sh4e9XUKB3JuqQaXrYqGRqQ7qDGyMeCjkqLPn84j4952tE7a6ZtSdRwMnQ",
  "key26": "3TvU438Jp8W5kjjyLCf5GAoKxb9kiKR8GCEMSJs4kkXgkLUMtpvoe8pLRYt44hJ5QrsXzm3Hu2p2VyQ45FZ2YKeN",
  "key27": "5zn4kvDUA6gF9g4VfZgsnRU3NDaDUKeenMuho2UwdK2chPR9LrsqhRJVGdbUpqoPj5nxtWQL35yNxKKSSxSrRHFx"
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
