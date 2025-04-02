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
    "4dUdzJWUxQJVojY6wDPSbr2AynXmztAGJXBENUeeJvUrunV3RB8juKe2aQvkrVrVeRKSJguHKWx9oSS42eG9RHCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hJJKZyQgsrQRjh8Z5wjUG89dsGqzemPsz2mahZCmD87UWV7NWdjwshqbd4d4QWnmYjiUiSXLSQPakBALTfcsZS",
  "key1": "24QSHrTUf7kgo1ZkovBaSJCmwBvdn7szpy4bZn6ukFqSGPRvsLyhNkjNtJ18FLniTqoYQiYcpn6X3Ad7LKC6CH4X",
  "key2": "3QP69LZ9pM5pqzgHTEpUN9j1CxHCpCSn5wfrwcc7NBadQQEbyHvpH5j7hG6Py5aZLPgdAXmn2PTQX4WFxn8r8Day",
  "key3": "4CsfXP6AC3Lkt6kxbbh71HAUBjeNzbfnP8sJNUBNjn3WxEPYQmFbKTZnv4BpCVsgng9DB2FdG4HcgUTcRUE2trmx",
  "key4": "29fsrM2wix4fRFwogS3PXZeuhFYUxyG7dkMM4ZntJ5d85p6ghh7wSufqLXf8ArVHqJUK9kTAwsXACzCnZAcjNnt9",
  "key5": "2zUxzG2Rmz9ScBXYbctedrLApFoLRSY9dZLKeBQJ8QMPdrrQwNLGec5waWVgy3G7jRTigQhP3UiADR47jH1Jh3Zd",
  "key6": "1DVscmDmZAszGZxveP4sVpBLTPzep57eTdscrF9siVfinMUJEhDbQ9VDYiMFNPdrudhx2SV2DrkTSnTJ2yT4CyP",
  "key7": "34SS5nERhA4Q61zZ5H9U11vcvZ3uxFV6mP1SuWs2Mz8h7S4F6CvFsepsZFWiacPL4t96Nyuc1iMuR9SFSdDo6bzB",
  "key8": "3SpdCaMHkKCacn79YhjSDYnzdkNzVro7Sk5un46FSodVmEGN1J9YU9cZ4asAGrZJGKFB6naa4vdtbXLgecm188Cc",
  "key9": "4rM2wtPNXZApMHDkGDah8v1ov6RtZHZtFLK6o9MF3PZggYQpXfu5oymPk1qG9XxDvk2egX7hVw4KqaB8tU36eTUA",
  "key10": "3sjgX94WSkHexcv436BJhwfTavCyNq6THDUhZaC7g62Grk3tPWWHMzwXYScBTs1i9zRQ9a5FkKqZ7LjG6cv3xdyw",
  "key11": "KjS7pLWj5B2T3yrfLJfqd3q59CpezGHFEMHNpHcHaUMHHjjVzjY6y8CX6MdoYZVayZLjQsQGaFYDc834k8dxU8B",
  "key12": "4haKxbRmWMTASdK5McUicgGTnvD6GgHf9M1iujgD54EPruL7by38p3SogEiwJM2pCRKVNejqdvREa5pi5ZKb6Fud",
  "key13": "4uvzJqm2zCkSyLpPE54PWjp1kc7FMEPGLvvbuJzNU9uxY5NjeybpT4sJNTWdvnf7srErRfqEEBjTpwRkafKCeeTs",
  "key14": "62ShtE26cXCktVFZsQCt1489bqso6qpJXrrD5BxRPDJu1oYY5rYkR5tnH6vducQ9vTwHMqSXjqoE7AHQ27LNQaZx",
  "key15": "5XmuLSEJYg7VNY6RQvk3s2SLRSe8N7LDiMj1VR5xMWN5QwvxnQ9cqR1JEBLnJH1Zmpf8P7rMRMKuFVW9oRxevA86",
  "key16": "3TgeUnEAHHSoy6S3VP1C5SjH6vVUCpymtAsvYCWpCVoabqikavwpP2dwAJAfYp2nSPReE4WxwTzPA61M63PJFw8D",
  "key17": "4tNv7rTGJfMATooVuroyxmUx5EtiNcquDv7z1ux47MLJrQP713mh399hgdxaSe8sLaeez322xSyyc5QviGXr3uHU",
  "key18": "5MAm1UBvfgFn892ZBkP4FVcEQavnpN4tUfYbVUUEguD55e2YqusTnU9oLFZ2EBx6CaXNkvjD14wmdtSyrLfDJevH",
  "key19": "5AMqpDy6aoMGwwoQgajyPgfyHR2PSDRji4anouxmXTsroNUND35PPwdF7nWQQ9Gp9dKzYxULzmA5uBk31pLvhqax",
  "key20": "3XwseduvtoK1GngvP6aHoGtnLLVVFhombx8x6bJ3mxQm9QGKJbEvLEKbbUXfGGTneC21wnbWAUS4qQxdzjWs1nFu",
  "key21": "52L9TwXexMnsfEyjPudVRhWqRApig9ZMCRDFwqkEPGoHZnZhaUfkJDWdFbWKwLPc2HnQtapFKuCZ73tHCYXpqDMh",
  "key22": "2eVUSCVVoKRNevCNJHfhCr36tG5aEnh6YFr9XjuqNp4BKHqunN8rgkVLfKCxLVmMRyaxudX1MgczpQu9D6N6TpuU",
  "key23": "94QM738HQin53TKRD97JAcFmh4PtQxhpqqzvAtwURymuvuwYVsh66eY9VbjoM9pf8HKcDoXU6jVaneaG4FXGvGo",
  "key24": "25Uuo8h4wvGhA1V1oie3zXRh3NpQUUc8XL9cRfsLmr4wvxJ5raWTseijbzMF8Kf2nqf9MyoxYaYGpKoovirKkcDm",
  "key25": "3uRvbY5F1Q38obrh8s1iBbs4fVDVXQvKfcqK8FyqDzowGpGUD9EC7SzFfXSdryE6j5zB6Z6asE8To9QZqxxXLav"
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
