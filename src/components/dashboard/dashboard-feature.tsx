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
    "4xKZoM4cn5nZZXcZnHYwCJmYMmFqGEJhd6fnhczCtjFaLsDYD3JttFy3SuHzv2pvrw5V5UMMtLcmUmwLv6FFQGFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ScvDJxuoLTQFsH2eCmXuqw2MFm7N9vSsSWzRwUK4Tf69RcTfxLepR5JDULZKHgn2rx8yZcnidj7YUEyMwULza8",
  "key1": "4GRLcAVTy1ZRaMGmfjXyJdHEQdfgA6ju36LEpgAunsPUcuoBx7PzBz9xgEQDT2XyGdMqL9K8YGtWfUzs2oSpE6yJ",
  "key2": "5eYDngeaq8taap5gc553rENk6qqfF4XnGy79wdpfHWgTJQgUBmvNQ1BEmS7A9pwj7A3muoJmCJZeoFkdHRY2VMwA",
  "key3": "36NWWiqmpLHibc1TAK8g5YtUUMkpJyapDWmgAkx1w68zVP9CTa5jguJ5GXtVdirGnJAQeC6KFdaigYUGE61VHQw5",
  "key4": "58Fgz6sB3YJ2K3sPiDNs1SStEZKZCTYqCuMfmnpnJtKar6yWeD1QVVTcVhJk1dBTTNbAiinRRthYKsJDvhk8A7BG",
  "key5": "rY1gLWd4uyptAaGzsEghT8suHPXHr62GsbLYUFyJqYEHAyRVcaJcQc5uxjSC3moyDSaj2EaRyUfzfar3C9Udqv6",
  "key6": "4Zud2mryLx2fntakZUmBKiZYTY7SNEzRskXGZAw7pCmBP3JquyK9deFYDMmUq4ZJoBzRxb8ySPGWuanYnYcanDF",
  "key7": "f6pL32BqTYonHKKEEGLQKQnHmrcLxrU6R6TMw5qL9oh6poBvcis6ccUuXHpcRc1SqARttnAr7e74yXyuQKuhrRf",
  "key8": "26yvttmXtiqwXZT1UAKb39byTeQqAU57ydCb6YbBV7nojjtdeayxuiHtayyAbbYLEaJJBvVsdTaMhcdu8Si8zKap",
  "key9": "5xR32MAFayWcp3VgvvJ7V2xmWXzcinX5xaGz796iYDU28ZiRiWC6BdmtE9rkpvYJnM6WFsw2EGt7cYHNHsiPa51c",
  "key10": "2HpmYtGCQP8Tsz11a15DVMVsPCAU5kxFViY3ywE2KxH7d8A46GQd9xdBkbmNAGcvbdJ39okGWhEhiFPa2FtL4HCG",
  "key11": "4ZiH4WKpGd9ot4jf9KyjTvr2pFj7pGFVcDNCZC22Cb2JHWecAPLBZSns6dc7BBLMJd9D3YRmFEoei4o3iTZu8Wta",
  "key12": "4qW5aaHRY8GE31uNUcjLbbgS9w8bDzEZo5kcV7hneWbXwLH6x3rs7H3ePyPegUSwVGvXzN79knj1DJzv6XG5Pibx",
  "key13": "4pf1qfnpbKoEFupRAgFRbjKi52Tw9ttjYBUQis6tUT5StBLt7T2nUbHdsb6WqwiH1okh43mqS42ZwokWtgH1Ndze",
  "key14": "4rREpMkmUG5nd9K5CrV8AxNgnitkmf8Ur7rR55z32PsTXq5uB8EF8FgoquUPYTmRZnFosXXbjnGeCSRNUWdyisMP",
  "key15": "54fQgPsQrJ6uSy5yESy3GjTeAdWMeeA7mKTn6k7XmnCUajexd8SDG9kNnb5SkcTxBGg9ssfqpVruQCj1vYz27evY",
  "key16": "mMwyHUuwEoPdycvj53p59kkcBqUjfi8msCEcjgmNUjVQeCBDsDwbfxCzZAq8yBsivsz1gCSmLfg94d6VQaXwrDN",
  "key17": "48xwE9u6FU6P59f3K9APZKoo3pKmLCGa2k7DMJsxERewV82jkSGnf7h6tTTNKBGGbEFBkpt9gz7J4cvB5GKmHkx1",
  "key18": "xYEzjtVbA86Az5saMDfQhh6T2T3CpRMPXiXhyt8E2gKCzoiJndEnSafuEkznZDng7NeDYWJg3exqCYSEGDGsb3C",
  "key19": "4jrAAr12x2shhVLJUwRYYEfzDCki4QAHV3PhJ4CPVbXRX6weiRkwvCH2JkEsyQexAnMWNpQDY7toJdiEyGFkNNMD",
  "key20": "3KKDiPae89bxRDVCRoM8vLREWeWo1Ny2eeEk87k5eLXVFbFuUfDfN2DBT3FDYr4q8z3smwz77Xuhiv1Mihj7wz6e",
  "key21": "25puCGAEpf81vkjviNsEK1gs7sikWf5vGnr9LNUSD1byjh8pTLzp73tcMWxrhBP1Tvx51kKKY5fo4JCPbDnc1C8N",
  "key22": "bCC1Q5sPy7wBavR7bbfPn23g7F6LnRYMiNmF6FVWn44TjCFnojbwK5fto7EGwgtvkafgkQFEeVf31WMhPsJfTnk",
  "key23": "4MRBt3K5k5kFKy4DiVGJtnFWErkQudGGNKJZ91hBv2GXSmgT55tEkyGSMvrm5jFUEukFoJpc6wD8xLzMS86DMMhi",
  "key24": "EAJHfLpBmLKCe6W1YDiojRpdLhNtVazbjEeoyt3jzzDgtMcQiShq4fdmxyJVQhuwhaQh33118bqFPXEn2SeayJ8",
  "key25": "5iHhpFEE3pXTrQv4nYFr1DRZKf1zjdwKGqgq1c45MzcywXqLA5BM8j1G1vQ2rBapoQdAXLMyC1Ac39QzksK5L4XP",
  "key26": "5hxVfsF4zuVpyt1gfA6X27yonXnQo3Bm2w7piJi1WLMJaytBqRCwbYY7TwViPLJPEYZFb7dSbugWcnuuERX7vhaR",
  "key27": "5CEe5M2adNCuCequBVm13rMbYFW6QDgTxs6M1JZri4Snsfkz1JH5HweoDYej8GfYdXuzHBLCXJKPLydXPpzxrNP1",
  "key28": "1yrZa2Vq7j6bYXwDRbL8WiifkCrXruwFy8BSMWQdfG9HTFDbrRSeN6xrPpQiYCnTLrpuk4KWHtUwJfSMTwqEGzR",
  "key29": "5Q8vKkowT5Vvc6dhecdcV4Xyar82KVk6VyL2VjwPcX6pEkcvJnZw1TUvkAJuJdzmUZJzgteMBPAeposPLmnYEe2r",
  "key30": "24kiutoZCWYhgEo1vC33pEkQYbvmHLcoH7KxPbkTPmxpmL9DsNW8YT1uTTJqv65htn6kZfiLcHd56XeW3DLp8bAx",
  "key31": "5Af7fZAAVn7E2QshYfCALN5TZCpZvcnfNLzjjeSULTJ7SUGtZtAkA57jH8r3WqFnVHWQhGA7vAmsgZ2zNDB6U1at",
  "key32": "2oGmvzzinSvGZYpYGtHvAHGRRTqEbTVWwFbZ62jSfBtTc237jWH2J1DYf1CDLoVQrd9VXJnKqjrdJ2DBzUq1gWok",
  "key33": "F1txSsGLknc1FtPsNDonkCVUGaKA8Pj8ZNN9NCjfwWfSnuBc1wD5hx7sdgpxHege2vz5ZPdkGqB4ur1dyeJ3rrV"
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
