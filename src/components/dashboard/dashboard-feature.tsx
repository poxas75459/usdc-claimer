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
    "2yUQHNXbqjpwtYW8xJQzrBHYPr89RTHx2NM89RNLrjKafTtTNajP84q6iuWcUsJwcdYasoF64BJzHPvsLqxGmeuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67VJ1aMa7t6ooWbnR9Ri6qbooaWyY5bUrvYtNYzg7vkEcfD15guk1MPyVRz5qnKfDwzZMbGvQQf3AFNmDJD9nGWa",
  "key1": "4LP2wwNMmSKJzZHoD2Gmtt8PFC45wyEGbm3Dam6J9y9v1pk8GazXatSL2DDzqfrbtHxx2jtEgATkNWAAPnqMcxBr",
  "key2": "5dnw213ryxbAErZSjBMNp26C8WVDNc8cU2AarjsepGnr7kPR3gKjnBinDakifmNH8AgZPNt9NYZYkXCDG1uUvGR5",
  "key3": "cqWxFt199S4ZzPRHqiTfffKmHMYiskYXzSpoW61QuqVTMA9CzLHXTrQpLRRYDXEmjvF4YcEHpp37YV79YqRZKYi",
  "key4": "4zuTPdBfEMj9YRDMyv6WYfCK4W43WTfpEWXmKWwt99xMr8tnuSXuD4smKhaTV5br2sURiYDFGGfV6kSAhG5bbWia",
  "key5": "2ogYpRevnB8apmhChUSadDdgn27qbJcYZMj82JbFNnLDCT7gmmpc4bVWzpe8KXj7tDeJhFebgUMV7YH49MB9MB5H",
  "key6": "41crT4HC5EezXs163MgrnGKKc9M5Cpb2dMHqpSKEHh7Jh6fsi6eWEKzBeYEqNbg8uj63sedMR1VBzGy1oc3QjAFr",
  "key7": "2DjBKZ7jdBZxVmHwb6uCCmw35ChM7MCsTdvofZRFh9FUtdkuqz1KN5aLStq9EEBiUN1toydVkRpNCQSi6ur9UaQN",
  "key8": "3VfiV9GVNqqTed9bhUpVBpZGgS2bRdVkPB7sV3UuQf3ZuFe3DnNX5QXdRwpSyBE9rXqW4tCLseyeNrkrQEjWZAZi",
  "key9": "46XLWfWyuT8WzBbCctF4GMnd8LcqQ4MB5KsEv9iactEfrMwLcchqPexwP7XXo9RAd8F3bgFaHKnnceYdrMNWsuuf",
  "key10": "2XsqKyYQa2UAGtrckAHCsDc664kmtzCeeMc8hzUK8i1Kc14pt8pKDXkCz75woPKcbzb2c1qK44C3k8iUmMN3zBBx",
  "key11": "4cm1qoefgZZ7QXEAogovSJ7zWt4fBXBauozSDR4LVpxQKRsLP2v2JDk28EvqGGc6M98qE5RiSfGwqhjsH5RKXoNp",
  "key12": "yFXbmSDCT7YHDhVV3vLjrokhkgxF594QK18DzM5DiVMfNcWq7k6bvMhvAXxKiW44mbhex94cx4aUZNqoK7HCU4e",
  "key13": "2cSSsr3Vzsh52sMbbHxuFhV1u8ofn57EZTEYcTG8r3gbNSRkTTpS9PkEFdiiJc6ctr2nHm5eyQfzjUQFznDiiYEu",
  "key14": "2bW5N8cTseyFRoy16q3Qxvrz18s6ApjC6dGHtH7k6dsPverzn5dN4e5vx1gR4gGNQUtcEfU46rcUQYowF9y7fixe",
  "key15": "3dJMmJQzvbvwREZ8WNcUTHLdzWL2cym9xJtDaCqAhqEEPv2SS6gFhvcHkGCsQUv7CSFEZh4qZYF7e1ZLHQssZVQE",
  "key16": "QFbDceZ37sHZxjMnRfwBmhdwe4HQrkLxYsANV6uf2p3j5rRSUpXA9HXNgErHQUWSVnpGnkjxTehpYypbTxjcqCm",
  "key17": "4rmyJUjTxJ1U4oRFsBqywvJnnjHscUpKV5esQiHHrDDq2mk8GEnFXyJbCJ3zEFhuiVsqi4tQh4aHGFBhfnFh2znw",
  "key18": "4X2fZBUu1PoF8piLGtBviVUxyLATTL9ZbxzPfBjnSerpVr7vAdKfuQm4Zo2RNeQcF5z43pJ7MZc8Y7evpBUkNRL4",
  "key19": "4tF3izvRL7QraF5UA1LEhMv7KNnuZ1XHhYvJpBmp7JzCBpVb9tMVS2rxHzHTApXw9xiLCWYWWk3vjGxGD6WqBuHh",
  "key20": "5NjEiTbqA4ZK8suosGzTd215fzTUM26xk2WQ4mbncP14DfJGEycYM8A14yS32tjjheV6cykJ9nubjYQENV6fJr7i",
  "key21": "4b1BitnBNuDZ9ryJPun9ZsEbBzMcfr5xTwvcbpyLdQtzBBHdbFQBeDQyUcEW639gCncTBixbkq3TmJsZPzb5JyZ1",
  "key22": "4625r19KijS2ytHXEL7iTxpH4V79UwDUtVXmxU54Z3FbE6JqjD1brDSucesnvxV6ssNWkS2o1EquGXMciUpFjZk9",
  "key23": "2oPnMpHbbsztc2Pux9MyucfiVk2iinoZKWDNexjhLJ8EEkHztmhfSBNZJxDVurtURDvi88qYisW66Di9qZ39LAUG",
  "key24": "2gx1wpfC5hT4vQdPXuHUWosPLKtqCLnekN2KuKUXkbPPyEfc4AXF6wZQKEGft5jMfU6spggm9gK1h6qD9Wj6jA1W",
  "key25": "4tiQHHv4otA1er6hYndeKCNuTEnfGTd3AG6J6E27KXFtcHFEny2KdFFRxitPLk1QPgPnZcaFRhDYuwFrbtE5tCah",
  "key26": "rQNo9ioc8aiCYPMdUKwXsAVZV3nxHWDxCRmygQXtdchwmhpFbPfRikW3XQHGTYj6CTzi595NU5qUq5VSUqZAJ9V",
  "key27": "LzrH3U9ZzNjwpHExy1gJVXk3DLcgM4cAfw3FqkySewUVFtAhrDopyxAXVoig7MaXZzbCUE3tuC8QNpKpuwDbocV",
  "key28": "5VAHCxRaArYMRAj4hUcKg94EGNvBEWGgASWexyVzVb3rDEEPFpaXWbF1YMyQunkh2XyLzSc6MJSjRFVLQUs9YAQ8"
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
