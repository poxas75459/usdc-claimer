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
    "3DqpnZLzu5KSNTuFGBpuCjHUs5ACn2hyRhdUna82wwjWueu9WDnEe5Q11AQwYS9NvAA8nAogtXi59aoYi5byZR7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gqtV8KSetCGJYuxLroLxFvXHektafCxE77Tyd3AJdRCATCFY5QsZVwQgbbxwpy5D1pj8i1Fv5vcpo9kPdvLcu7u",
  "key1": "4MP28x7smKYES8UCTsCqU7DBLdrv8txku61p46dS8Acpc9dt8xjqm95WgTuKYGJ1imiQtbLjNRuhu51mxsL4sB4A",
  "key2": "3MDgU5wjkJLS9ZKFmNnZYs4sAioiA9HZ2jbSRPhVkugd6uVE5xfrNqdhGfuKEKSSWKYSfWR7moXcTS4eN8TXKNn4",
  "key3": "4SMQBdo72tG2fd55Rg4BtAMroAsP7wYCAGsLMtgHgxj9UQADaENZv1wwsEKxgoGG4z871RzTqswQ9rmMwx4oywqx",
  "key4": "cXujz6amsNWWGy1Dep8uBBqSk9aPaQEVqamCpLeryLxsKcdKdzPckir5dYq6Q4JSMmyGgHG1oBYJ4hywAN4kvUs",
  "key5": "2wSVKWqxamysaeiGCTfuVs2LWTtnLjuFJ8KhHqFeM1P9kJ2AZZXUk74tosJyfxrjc2QLfHngJwXJnpNck6NRQEM3",
  "key6": "4RHCpwPfRLr1fZHU4dgFmRhYWNx1aNPZtvHzm6QTbWDFEsx62H1VvNQPjVFDmUP2yRzLY5oZvnHqzCKxo1XMWZTs",
  "key7": "4f1VM21AQV1GpYvTWsNEqWaigkS7JQEixtenj6e5AJEiLGp8raVcUyP4SLkjjKm65T31Re2daYeSSUEpTy2Q2YRN",
  "key8": "4ieSMpR5mTFb1GzC6d74a3YucA3raJ6VeKNsZvRmdFRL9gCKG8rtGVCCuN5GAjEzuL79X5VBRnpQEtJ4X8E3SQjq",
  "key9": "2YU6o4YKVi4W5whYmFXdcNMQ8se2JaadXUdkdeTBSbH73PUBDo6kJqx2w4hCUuuLBovxBpxQNtNJpknjsm7rbRLK",
  "key10": "5UqJnFr2mkmkW5qEWrywkqZCyiGtJynHUst6iwetvZzTAqPCfjxuZZALWzKDCUj2Md9qq1vje1UJsxbBd2tJYUTi",
  "key11": "4e5FYE3tUjkHnTgee6YCKvCnw2RjaLSgpdXoUwneajVK9CUGARHHGG78gbzNWxPD7iDD6xV1NiV5V6JVWMtUNtzx",
  "key12": "2eBMW16WxZuw3GxLKVonEpRBHaQwDQaEjFBR5TVm3Ai7AH3npBA3xEdyZZMQaAE3gTPbDYN6c75YjzXksHH9SfK6",
  "key13": "3DvWVzYmqLpk6KpsYdZBJgUb3S7Rzo5AyfmD3k6QNMPM11bgrsYcnE4W8YBQdxbq7HCP4jXRfLzHdRtye3kpiEz3",
  "key14": "5ttLK52RiqQRe5LEg59v8h6yTTf8qj6KCmvBrZJuZRZjoG6sKHKA1VSvpacmUb71g475QJQtUDJXy2M8eS3P1g3d",
  "key15": "57wfKjiiws8EWNRPhhQGb7X7gWgP9xeEejhHRUeZrc7iK8976fEQrSKxbMHiYnNhYGndvNkZeJ2dnaoFETiwzEKx",
  "key16": "4sqZRF7yYzEgNTRTLjaKSZg3cThdFtwTWGhitVmYP72GbR5pBJZcnMtJW9Er9E1Hvt9v38vDxXevc5cUe5JRwHnh",
  "key17": "4whZLmWdKyi1nwJbwDzTy6BRGmSKodQ5Lqve1a3Ps3GAR9kNCgqq9YjewFBa6uq4VBa3weLVqFsqqXEokyKXvJLU",
  "key18": "3GngADTYEuCsfJg6MvPZP9cHZTHiSbFUvao2xEZpt1um9kF2bDVM4NREEMS2WMtKTuPo5sB3WUB5C2GEg9CF1gth",
  "key19": "3XrqVwxjcKuAKoW32nNb9fJH7pr5BFXTQtzboYCbU6BXcR7QsQpNNxzWfMWCUtrZ5NsPkpFTKtxZE2x2RdfbdCUq",
  "key20": "64jM7xwFjbq8BLhZBZLzPFyb6YyYdChNuBX5qD47WYUUAR1Txzou6gTdxcJrd6aKSdT7ff3WiNkbpnAPXq9bWGVH",
  "key21": "2goSZVkUsRGhpQY8wjMkVz5HKhKy7QtbszQjE7S73s8ibcUVgh4sjKPquyVyNTVLBcqksHoDivcCuxxW3WnKj9Ep",
  "key22": "45JTRwxEEJAhFhku3XAD8sbB2Wa9h1ruwZ73dMYtbdKrYVtPktdovC1V5URQKT2AmS6smmTZLLisLKWAnQSBh7xu",
  "key23": "4YifZjKyBo5c17879PwVAbotfToQnDxzgsXyhcLkP1WQ3fycqxZKuXSXrMERpajGEAmorqAchu8tAjJhQ5Jk6MgQ",
  "key24": "2AFtDteJXvBoXZyfc5wDr7JeoxRJAG61Z6vcMMQSa5CgJ5UrXYgqnsCT8f9tUXThkXeowshupUHhAXCrUxnxhDQd",
  "key25": "2B5bHDckKx4KgXeCHU4EMsWBVnqWKoiHr8T3DhB6sgdzQm5CFXveY1mvn1ieceBp87NPLfTcmS22ncq2uQi7HTm4",
  "key26": "4w5XdAmFxoqXGZ3Aeqc5x7hsSShcB1ZidcXZD4c2nSaoMLoQuR7UVELMkJUDWR574HgFxuwk8aSzz3hLjd4EiVea",
  "key27": "4MTRXFF99RMH8fdwaSMrh1bfPCzfVCoJQ66WKC4PV7UBYNVWx6cYRLFbfB9F5bVWzoG9JKxk7V6LLyUv3vXxeZQm",
  "key28": "5xooAyicHsonXFZoin556eL5vtcWUwrDvJAgojgdoXRtP1Sn12fPBionLXBM8NGTWpDCzib4NoiXxncoT4DzUkZG",
  "key29": "217ydLfrdvcfzmbfWqDKGn5LvaFyFoDDG87xUyB95Kn9TRWABdzyXeeTRu2SXVaAvSk6bxmKei6jjVWqKofZwc1t",
  "key30": "3JrjSxQkcq1v43tFM9uVbH6LFYgmdExpa9FcQnvzR7cJUBDqvFfM5UETioPfacVP6DFUBLeRpEBJJh6HDfuSP1E9",
  "key31": "3aq8FepNQeyt3gWZd1hZCZVU9ma4qGS7et8f6qgHzEyPWkmPtT7ZirHyQxLtbuYtQgDoVo3FazPeEM33wuBZBXBQ",
  "key32": "22kBbsAdjWzzb9sSy1J5XQCwjfBcqyzXz67DbqBaWavvg99pAbNh4pRLvoa5dYs8xSu7K5CAURRX9QvMGLJpVJmg",
  "key33": "2YnNjF9HcWLqsDFEdVq3i2YB4hxkBeuNRn2eCWYzvtycsdZs2aFtzwpZaW2M41SafQRkrm63cwQ6nBfVgcSumEdM"
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
