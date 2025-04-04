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
    "oD3jQ7sTGL64fXEmUDJrUGhMTngzkxbGkaprvYD6brcu7PbRuzFGQ569s5MpbUvDJp48wdyz1sSKddsaYeixHSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DxeVWs6MroQ1sJg2HkWLdGCJWUT9qTDmkQuU4vRHJcbxwz5Qq1vDxf1F2CAjspEULNSGds5Uwq8X3kPmjV4LDQS",
  "key1": "4M9Lp8cJTeFMY51LZtMY7hBnNKqCH4nkAcK93jVsDSEhU4xzqpPH3WtqTrKGhPq31nvQdcipC6BGAbhvRnX2q5DK",
  "key2": "3LKDnbQ8gLLVtgS8i1LBqyHg5Nf8KyAWB4hEHJ1zuXTy2yH9qjwLNgVG4LbY18HUy6xeuwYmtciDLULJM1H2b2FL",
  "key3": "3icsz1cAYN3JrWotoViWNLGv6zAWvcwc1MgtnQKYPQaZADHcvhN7J685zCY4YtnACDiFf6M3q1G7ANgecehTZBBU",
  "key4": "4F3izrcXmu2uJKEhNCz4WP592bNDrX9PLZ9WvLq3uQVc2VUBP5L9s82FRU4Hp4Y8dHb6VAJq18YK8KvXwJhNcWs",
  "key5": "2DbGhkdmNw9YAudnp28WqEevTyjNyaFEdWJC6Q1Lj6eSUUqT1ZTR4S5mhzEV7S6tf57o2DrD6he6xJFhKptJizU4",
  "key6": "64LCYcoBPqrHkVvURq6ykX5D9KJNazXiXzmyi3GoUowfPtG4WcydNzZ4bdGPByjWBB1NKxYvuWrCszPCCGZaDybx",
  "key7": "52QPxybVX98Xbibg7z6H44BDJ96WUVZtebGqYBqQAJ9cAjbFPyuKmPFFYWptohCUsXMW2gNNk9Crm3btENgCiDiB",
  "key8": "5qhZNpzWnfFUzZQmsRGcWxDAmKAKmDNUcTp7VqZpcgxeh5K9NdF1gZzRBi2bCdje5bmj8piNb9XX2QBaU4HxnyZg",
  "key9": "5TrQiyYNgA6vKJPbzrhf19xd8BHjab8ebmzGnPdGKiiJ7EgE6toVPP5hiwNUcELe6SUFHZXE52uCKxyxygQbaNNe",
  "key10": "5C74NnQVV4BzpXJbv9bJWjrMjBJvaKr1CD2tNeizeZcZ96MGZkXBzwMjhcrjnGpTWkEo4us8iTWXs787yqc7B5yf",
  "key11": "97iGxgLB4eHmWMnJ2zWtiN3TnCTs1UNmGo9N9dXxiwvrdbj7ibBdTNJoQLzHePteTKBnu5N7fCr3QWfQe3CaM95",
  "key12": "BMnRBnmKgiKqUNz7un7aqARwfdbUNYFxdDFTbSbqh6fpEXRwaJCmnP6VWohH3sgYSyRJ5w668AKKH5ercxBSEXS",
  "key13": "5eK7Nyn79mafnWgFJZjDmAmiX2Xw773uzSG3eChvPgP467erXt5jnnkCCKh2NRVbzZVcLzEaRJsxCr86wz7K8c73",
  "key14": "3rX4MZUBZG1AQ1E4J4rbVXzsgC7j51wcPzTdVwhuUCqLVdE2okFs2g56YkoaEmCVsu2SjbQrXrKipaQ1BCqYCyEF",
  "key15": "3yp4jZyGpPoFnfwWMpEc6rT9nt8aGQj5VjDu1Wk14wXMqsVBVeNrhNYHC5MH8HGYgHgcCWALG1pruhbxcuMkHqQM",
  "key16": "2PspqNEZ7sYiGoQb5oCNr23bHEoNJeaajeeVVLmByMWpJh74KF4SGBpXQfESEC9V3a2o8BpJ149r7jzv8v5PnBZx",
  "key17": "LVqeb7ukTnk8bPkQPEYK7kAfPVpvdKH6EDUsFmXbY4y9QVRr3UDjAeuq9nX1jc7Rs6Jxx64Yg8s9zbbcMeaPUNd",
  "key18": "3LAAA9xqEcfvqsL5Qa31uPWEfy2F6NEcZAQkx5oqUWk1oCVLGeswkAa4dVnG53CDHV9RBzaY6TnQJRqEhatKt3uz",
  "key19": "341dqE7ZhifX5fwauDrJo6AT4xQEqZbC7pFmU8hZWB5WhCezciyC8YUVxRAL9tXWJrxveKz1RnzY338JoEKSd52t",
  "key20": "25m74Nz8KQogoRGQHKFmwUaQLWa7JX5U65ANQVz7gjnJC7sYGU1Wi5krbeMKTfFA9kW96hr91UmNU7ftDoB6dKdn",
  "key21": "26QE9fke7udQ8jmaAQ88MoGtsZxLA5ftNpCsVaRF8NeH79YF1WqgwJWSTeuVyV8LBuiozmW8JJEVmZ8vwqYrfcQ2",
  "key22": "2gM2K9bYQCyxJq9ctMgjwJpB6QGD6KCALyvMXjeVYGdNkd8e7uGwG5iNmfVVJcLidKV9REqpCNy4jHAR7qD5yxQF",
  "key23": "23zHxBGL47HrFDFkjz61qsJkvbC8Ci9fnqy74SZbjeQT4AwxfV7ogB6VBta5n94wEPsj5mNM7j7U3t3mrRkj8AYw",
  "key24": "5ZQ3EPhAsDrkizJ5FDkjPnQjuS4WDRh47m5f6JBYpcGCRzYu3g4TU8xprGkKwQVooezNgCp69MFCorcsx6WcE7VB",
  "key25": "24JovTeZbyDM3tKkPSesrUfxX82JtShb9gtB5hituY69rv9V6WXL6tVY6fE6fCw4rqBTbi2GGvqZC5ybZFNrdMv2",
  "key26": "5qtAP2baqxaLyTdsa2QyLujGNjfvhB6XXbgD4eXCoenx5etQYMtLdhE8mhUKVQjSfbwnom7XPJzsX1NTVCSh8HCu",
  "key27": "3uzgPLaX547a5fM8muSDw8CZJHcLHz4vLvUdnGowrEx6BNvb6ju3Y3sygNv1GowVnhyHKCLqEixoagSGAfKnEhFQ",
  "key28": "51VCUYgKZvd3uPxh8UNtyVj56RR8gES2RMtF6EBzMr2jdUpQCopZWd8ViKnUxNrMYCQbzaouRhE1hmZTeuGLuLPE",
  "key29": "5vfzr7gdM6xMtQc5g26CmbhiX5vHc4ACsjkbQqSawSXrwmN9C1tyfrPhJy7xZpSG4Kfg1EhGTBjnnDRKDbCptBkH"
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
