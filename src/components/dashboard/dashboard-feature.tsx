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
    "3fFeunPdkfJDpKYA1BbjPjzJpnQ78RqqrFB5CKgTqiCzy62Y32bM5TPSPDByd18bRQnfpkcANGAGFpz6fxgUxawf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P2vZ52kMHSFgZfLPJ8NQsB7VvKxuXfiZyL7yBCModaCim558x1i84Yh8swQahxiZQxFMBpazPHfzf1gVnYptL4v",
  "key1": "3ixG6yJZ3bZBDbgEccduuC9BWJTeG4PSpD9R4yCzaGNdK7EA8BmF29dX1LBA96iwF7nH5Dsf7iJjFNgPz9G3Xht2",
  "key2": "3GNk2rf5hmyfpQdaxvogDYuC2K51JCC6jnwnJZvLaZWPLXZT5H6w7BixbgwBh4PUChA5ahDHGsLzLoJAXp5qRP29",
  "key3": "5vd8wfQ8zwB5q31gPvKn3GWkrDcHuv7AszLxribu17u6vMmXSq1PQFABpLM4mr1sX8Zuw4JwNdSjDGm3o6tLDEP4",
  "key4": "2hYBjWzmRt83Myva25fViJByNN8P2vXWuyuMvi8ZDfgtdhSt9bA1W23G7Akjs4tM8HpVTfU1P7wgXfYYgBfT56mX",
  "key5": "2a5aqrBtGe5Bge7YhLz84yyRmiWLk3RLQpECCJoipf7uis3wN2YcNB7rBTZBuprpTAyeqt6ygRcahpbK2urWCjyi",
  "key6": "VAXTnqiPpKzZmBzm74EhwooxDaS4v1UExLGxXCdR1T7jqXdohg9LzUD6Qd9iGPTmoNYz4ex6GmQkefAgLqphuMo",
  "key7": "5asyiTGyxSnF65r79i34vWKddjXfg7Bi7CgbwJP4sYYkjxhFLbzX7mAbwczAByAKjbZG133k6u7pCRsASjqZfP7M",
  "key8": "5mpmUGNdzc36t9Hd4zJksCQKDiwaQrGCrwfZ1Wbaj1Vsr3XKVHV2RgNRSL7Df5CLdoz9K6jnBCzZB1755G99fDat",
  "key9": "uVcZcFcqRpzourUn4tRfYpMGYSUi9fVke1xxmw58nVxEucKVoRYeqCYcp5rHkk8QcQ3zWuirrfVj5k9KLiw3x3B",
  "key10": "4MmqvexSQasDMpbXUjz65M4Wj2dLFhsVZTq5Ahze7BbGiLWDF2tk5FvGRkK5pPzDTS57vxBDxUhTTFGR5mGLy6YQ",
  "key11": "2yf7mYMiwuFR9CrVA3RDV3SzsqvaojWzYZYL9Uk42Z85K5pWt3KzgEjys6d48FDeif6ejWj1qQ1uinAm4fksWs4Z",
  "key12": "2uowQTmvLFyZrMQsnPHx9dceERDwEs5EuMxoVN1UKCp6ReJAxuJzgcRCUrutKmwrzcjgT2PrnjSjPTL6XyeBhZ5e",
  "key13": "4CjSQKMCxHGN4EoPdJ4KDtZXV9n6f1jK6zJ1RLuYMqKHydd22VvA5tbbGS4ohLkFzX3SAJcrE3vqs5ziqeQH3oLU",
  "key14": "4EviiXc4R7hUNNs5RnDDCJqn9oNhvYHYt2LzMBRF9fmziP3BBXs1VtTMvFahj9fd7hEEXawdBohC8g19jEZAGhpZ",
  "key15": "HpHU6Udij5t7Rh2pkWJ2Jg9xar7pGkoMNz3SvruidVhcTSHA7ervWdXpX2isWFf2TtMcjUuqU3baKe4y8AwKH9Z",
  "key16": "2EEt2HYABHbaCXseYf28W5CQ7uJWsYQJX5udb88Qykvdo9gtRuQJ4ShC65GyogMfrJLkmWcyKVZ15c2vLvVdE7Dk",
  "key17": "3Hnv1q1Lzw4wDYWgGCMr6o32iAwiJsnMk5KyEw6okWJqPP8XCpueFAVSYDYMfpFoAMPzUCjsyrmscCYPQHnuTE6o",
  "key18": "2wJbJJciKb4ZTNhZ2jrJgXT7yTdUVMNYuccBfjSCXwwuxKcGba4cntwpHas4dak7KH9rhmv9xVBsqWoj7yrMnk9j",
  "key19": "61PBNVWUufxUpGWageYAtPCduY3PGgQMaDPm6PE9hfb4EAvgbDHC4dMRi2YLSEJroSPScSJwtXVfS96WAWpVYdig",
  "key20": "3XTU9rpgg9rnNAYvAPZQNY6xZ8fHx1tF1nkh5BisvDmXc48k5X1aGQok6nvR2h3XMjDaVbyXdV9WfSM6mfQRoURq",
  "key21": "2YUDX6xCVfQcTLm7MfgyxaCz19fwc1GY4aPt3CxkH1p7XXZheshWKzrJcK19SUod2yN9mCnMJVkwu8jujpKesxTp",
  "key22": "2mjDLYpfKVsQyNJBXGFj5hyDSKkimC5UnBKuf9HntKiKLRFprV2icDBCjnzwnGSt88sr3mSsxrFEEPDUwMiTnsEN",
  "key23": "2RsKgdJv3i32T7a132DqxBkr5Q8Cd3Feq4XjXWawYW5SbyJvKf4L3ovXu4b24LKFeMEkxAis3VErCoetCRYFo3Fj",
  "key24": "5L8GwbfhuRMxwPrGWL6sECAmAGaXVLgcEQ3UGCPPjtW6z63bHEtovrHoq9sXaNanmFEJfCLXE9i3Mfw47XMWC5Vi",
  "key25": "4X4dotfFCjiD8k5aKDGqySA3mhWqVByujVHKHuAEJPHApFHpvESfnwWDG1NTRr7XGNq124bR24sSyDTtbGyt1Psp"
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
