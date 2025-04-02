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
    "3e61K9h9TFXaHBsvPBVnrWM6eqkSZerHU42ae8RUWLNnXvkhW3HcBkEgRbcYJ6f3vH8LBZUWEc7Z7yge74cVZX5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3txCrH77DiHGpmrEJaF5SJNfgrE6se1ceutJ61HF7gaHwdMiv8o6e1fWJP4Gho9yo5a8nwy1Bu6xykUh7KLDcEw5",
  "key1": "w1jDH1VPcjZSiy7BQSJMrjxj141BnrBpG6MQAz1DXpkyZ1KgYGNWYz9W5oyBMmvXtFuBvpAQTBsCbEK5WJtxgnp",
  "key2": "4qhgFkxPbK8yuu9KSSrU351cnpUaoCgSUegffZX2irrsiHAhHPR13fY6wY4gtq9rubKponYWLVVrDF6oPTQebFBt",
  "key3": "3iZm4omtcUPLeJyouV3GpeqqGPsjQWsJETMVvVXPbV6ih3y5ZxR7FVLRpcVDAvbTQhwQR97YCE5NPCuvWJTqDKiN",
  "key4": "2L1LrGV3K8SU5RSPX6U9TqmtbmH775YAwbp7D7NXxDPHhxC3ukbTEESsYnRyDQHqFAdv1fSKc8j7RTz2ZNkNhqfs",
  "key5": "3Vp5MUYQRBEwbWb97Pq7YdstfuhRTLj7findR3bLfS1rcXGvMeYt8tsUWRfa1zGxBa2DyujDZkq4VQ1NGsFKzu2m",
  "key6": "4dEp7scjq9qUcQSEYzqvwEEKEznQJQ5vT62NBfcmUfTQuiRhRFqYKRSMZV2adifX45a38rhT2f2RPCQ1qvKapB2K",
  "key7": "5KCffnFHwofWcYhxJuBHK1A9AHgiXMZWfNfQZrv32Khfqdj8hw4f52PAgXswdBq71zpYaAVaUrvJsSxGkX2bBrvW",
  "key8": "4aaZzp9tpFntQ9kmwzGG1Pnq5aiqAhvADYSZyH5qnRJMKbJaV4WE3PtPqjyukcBUQbKtT9yqyjcKKWVTofPcEZty",
  "key9": "2HsbogUARFuxPzYg6i8rDVfaJS1dmzbxGLQX5hLgxngPw8V8fARy7QGNenKHycd6RPL63hmrQWdJQmnW1XP3ihrg",
  "key10": "2afAAX7cYCe2DBqrntGyXMPmrn2zFsyy45mgSxjht5pfrhMJjMPCA46FPzQN4yhMCgN3wKp4MEDeE8Hrrq5JxQkQ",
  "key11": "5xXKDNzP6H3fah9BTHyjaYeGcUT4ZEg34NQcuAk3YxCZznWkdbufRzx91ERXcjRf99uPxHqRMy2fkLy7ai1PzRMn",
  "key12": "4dCp2XNSGE5EjTVT9BxxwxvbYeRPQsHtzjVvX9p7mLMbtji3m7etAcHPv4WsZXXLaGRcayY53d8R8g4rCmwz3jnM",
  "key13": "4uwKjBWtEvCU2CfVcH23LRzjoC2R5Qchoc4ZSidw8PvqAbyruXDD8LWLtzPFNjrjXd1um73CH45chPxpb1Kw14kv",
  "key14": "53GNfipRs2PFRyTDLvtBFm9wEm4UAby2X4WkhySuKx6o3ixCykbDw2isu7VoaN2KyYF18T7uoD9WUDHH8quJ2B7B",
  "key15": "4PCpbjPdQFQn7pZRYmfvQLA4ybaS32xcTEA8vL7zV1FVGXq1C3dSPzuWvzWvKVP4ikxsu9ki8URE3CCmyK3WRKJB",
  "key16": "MBtCxhAU6rJYPTZYJevjyJnw2Ab1HmDDfF2jyP32qNxaU2WLz7ZFJDgmszgnGGcoipSkVDXTp5GT3bN3Ug1jHTd",
  "key17": "4jXTGkaas36am2SWTDDN221fajcepymrjVFh6dMwj8ZrRpRgsejGu41L5eunGwyceHQvdTdTvLgvWKtBvKc5ETXa",
  "key18": "4qPAcndVKGLLg1C3E68omXhtjuB3QjvrTcj2LpM34vL19rm6HZLWzRZBqwBn4HTb4TbS4rM8A5wTvgB99bpZjhX8",
  "key19": "2VqRDV1BKM9phPcebRoc5QpuGP4fbRGB9jC4fLumvncoHpVBrccQ4JTyfi13n6kw5Cic78THXxAHQHRtR3Fv3w5n",
  "key20": "2t8RtkQwVQKCxaEPG7jqUaj81mfVUTetkw7HjkD5AmG6sgPktw8bdXL5Y8NSZBJWG6LHLMaZ2GCnHuNv9JgdSBHR",
  "key21": "2ViJCZhqg9NwEzAz5r6es6BZJGRjccNKdCuCCnzuf8iZokJF1nkxvVouNGh7LeqzsQ7LCQGeF4sZdQGo5PpzkWo6",
  "key22": "2DVRCvrwLz9sUgYB6CATvqa71tyZMCiEdkWwf9Gm1MPH4vji7QSAXLL9sa8GUQ11Kg9HSpdkw47KHgC7muPGaS5q",
  "key23": "5PQLw2ghDX6X8bK1SfvfmHxfqSPv6QLGGg3h6C2Jyy3mbTYmhhQAd3DRStisvvVNyvTS8wzSzRDE3hPpnhwvfhy8",
  "key24": "41ne4eHuTK5b2JeMp5geMegP9wGmxA6hroP2bb64MzmBFkA145wM62YpjTK8qn8qAPwmdD35ov7sRELrcF3r1JVA",
  "key25": "26B9B2TH769oVpiScsoGdhrW1NXis8T2T54krmgtsMu8iqUgm7zD8wNKroNG82McCdt9cZVqRnWs8CoyYCc3ptR3",
  "key26": "22MgYiq91rJLntZDeveov6aNr8UfyhzqnkamQLmJBzzfKn56WwGyhawnD2tUMtzfdsQ2uLc1NFgFVW2JHNfWnvdM",
  "key27": "3VTbbnJkXsgY4azpZC8YAAad68viZLQk1jt2jAD4q8E2Gue2irUa3QTDNrXoTQUT848iSwSs6u5N9yi6xXWWke2E"
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
