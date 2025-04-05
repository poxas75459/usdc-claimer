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
    "3XmXMjBLJt5qWVHYktkhzNavarz6CYSaJyBjQWUgbpiJmnmTkJy1MD4uoDwifAg2xKDrZt7iGHoyPogDJvkLsVkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NExxCJCeJ7hSEnmsP61aoRcFdoZEa7rhTHfDMYQJn3o4kvA8N3Yn1e58ws4VkphJQ9pwahdyAqaYiDog2dhwGkM",
  "key1": "4JfEMY3ejZkT8YVq6ExCz3KSraiyNVtdgPV7SpQ4xkPWXeJAJ9U4mrBjBRGbdWAKnq1Cc9ZMRwPfnZxsDh73ryYG",
  "key2": "3XZnUPMGVVe6bzNT9GWM31huVBqVaoUL9FDiZrn41wLHZuoHV7T4m4FEdx8JsA5VZJPiem3prXULVeMBNkTgM9Xo",
  "key3": "2BteUa4sJT9zqViz52dqWEybQVRoVvSN4TqBNDCpfBDPd37KWrzewFafRnSWxLbGGrWPmczvaV4Nsmk2EUMocUvn",
  "key4": "4wsmCMhho2nv9vpQMaj1d24PfJsY98uY8LrchyTMRhmK7rsh7dScqqF9CDSSyG6PTUwk6gG4ESVsPjkXECPNpFRh",
  "key5": "5uooNSneqNxHKwGbkt3K8ssjkmYhmw2wGReJU7PqS3E4JbyYzrhZmNqNucAJ7eW3Nx8XvCbo3YMHm3nGjAxuJZpz",
  "key6": "2LcXHCsKbW36NC5K92EhQ1MqRmecptuFLdURXL7QnxyNGtn7AML7k6cWgk5n5vDgEYBQRnhXspRnLPUjYFiu2n7J",
  "key7": "2duVKw3BKX9JkteN8qCNnyB5GVEH7YfciHX7V3tb1SNtST3DgVFtQEWHxHez3AUHbtajhQ8GvjFA35LKamyfCmuc",
  "key8": "3cHXhYFhJeoHymeTDSAuPzwGybrpwE7aukt5nuE1JogW87RfB1DFBdbtqE1CfcDUMNAjeqjuTtHcHD6idf4LYGko",
  "key9": "mKprh7s4y1qvpJy7LjxYXFY8b8XFmrDn2gtv6w48H6EcqdNY2Uq8YhNoFP3rBXiYKWLnorPogQNCLjj3DTPoUvw",
  "key10": "5EV7dk3EdBLjrxu8pdu8eXukWWmFa1idmTTfqH4tosUE8nMzfGME3ypx3ota4jQZuP1mxqib1xKUJfh5z7sCNDQb",
  "key11": "2zg9DGASSrojxZ46WzshZhRH3nfBR2MDdDXyXKu3P2Huefb2uJcPLfuXNcSckPgtfxKUXNmD53gvrLNXZ4JE5aA5",
  "key12": "4SiRj7pLC8mbQdYjqMybPghH73L4Qo8BC232tfYU6qMPaAjiQAfZbXFoNBokcEmhQcXKqfJZS4pm4hy8xgqgRyqR",
  "key13": "4z9deTB5UkAL2aFJLjvp5Wqai5z5JnEaqpgHsD2HtPZerLEdGYF2ebT7GNSzVKFe6sS6MZcXXNLU5EWhsgrgR72p",
  "key14": "4w3bNWrYrpK5pgnWxakcmAjTM8rb9jz4NksWdkfYQjAsV89gueJds1vzxcxfdZuQW38T48BNEPXf4b2RqNyu7fkA",
  "key15": "n4VtSNhZe3vtTfQFobyGgF5AQjMpCVDxo1hU95Z5JFgLhS7qzYtFJ4Uo5uUGsC3ANwcDU3qhh63SLZMN21p2Cqw",
  "key16": "3AQCfNR5Y8SQPJNjGFzQLaariXqZXMtvdLz5nKsJhomD2cnSG8Kqx8c2ohXsrbuHPyisxF16w6gMMhipexRe64n8",
  "key17": "3Uqo6TMCmQYCsJrjzXX7puYNpoc3nkXXjq5GEC6t16wP8RQGyLHNa6WDfyfY1JFvqU59sPMLLTPZ9cj6urXKdQsX",
  "key18": "28eFdKrBMyPVGac3HaXcDdQPjWSJZu5Mhd58zH2Q43mDDwQuDqqji3S13uFXQngCy5VQJCJUrtqGKD4xZNsXvrV1",
  "key19": "2qNvUrXhrrVt6toRsbQyeHigASDKWXeHZJAr4EeYCfMHRyJftbGDkzgox3VXDVNWmG3UEiv1p9XRPL3Bsp9a1nw3",
  "key20": "5SMCZhKyYsvWG5kZdjANTkBBxpnnyzcrHnX7FiZNGPePxmAzM6NcWeFCRkVGXSNv4MsH4KmcrqtXSF3RtjknED9n",
  "key21": "4t41TgBwebJbYvs8n3KG9jJ8U6LK2NTM3h6KcEdxeKAxQgpPZYMPhdSbiW7ZDGAgR1gNcZfUc7z2DTX5pWhFkFKJ",
  "key22": "58BvTmY8NHuLJ3ieYoR6bM1Ets9LAHSSStJZng737keh3NLFwV6566QpeEtniHer3AcFjbZwdTdQm1w4t8rT8aDe",
  "key23": "4LTYRTPQ341PmhuRtLTM7waYFHWCJYmEaXRegLVsGbsduZTe1MeLfmUUBM6nj33yvXS9kcFaoVpfgYXDsJj6T7gz",
  "key24": "3AYGKV8fj9b2ZEBqr4ynSLdtXF8bCx6tgTc6DadpsRr1fbJ2JvFq2XStnUzxuExHNXfRqw6zmApxYVTF7yxrVwD9",
  "key25": "3q4CppUE1VnrW26qTHSE3Cq9aMTywx7J4yU9PBNAAYqmE1ew6Ve1vLg2AcmHj9LuWAJzTmzJptu2Vp3Heap3koQK",
  "key26": "4sGqSgkNAfXpCTbWMXwEBXw8p5WPoE6zRPnRfW2HTKCeoGDvo6mfdQmxT7CDvY2HPNQvLQ85qiEVqofP34CXN9n9"
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
