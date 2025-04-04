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
    "JQ2reAH8eeM6ZqcsMfMSeiw1tyaQEgxaeX3Hq9Ud15qp1CuBjnkLqwDvicVBQQqKhdCfpqXAfmAJbjMjnUNqVBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZEUWPdXXnyfN51AVj6gm26d2qiSyNeokryWF6ie5UfGPLgTWwsGqcLSnNC6c7DWSEAKwsDLrvgJ6atW9L3Gf1XF",
  "key1": "2EZFFygeun8xAs8EWWn77StccftWvbWsUqXWE4f1Lmkikjtq75zQG3ZczP7uXZ3ZfzmT4ERijbv1GveMvWy5fPUB",
  "key2": "4xBBHzwnkLRtQHYcYvVDykJNM8DfYA4YhAjXLau4ZccTjHGpdRSXLfHeVVWEC3kK9gux45NiyvG5Rg6fvSU93Ps4",
  "key3": "5i8yq38BjKKiaCRadnHq5wGanu9X2zgPLjt9NPgKwCi8ZaxAwrLpfVwbnuq21yU8oBCGASsnQoXzzrdRS8dbxoFS",
  "key4": "7hRaG77qiXEZnYPeGRxqecUQCByjcMm1S1UsmLxcwVFEm5UzyoCiM4GQ9TLw7uzhtA8hq2nPwUmNo7w3fbRvqqi",
  "key5": "4K8H25hXEtZdnZ1abMcNLAMxPRuNSoQ9HKDv6w2vf1D5nneoqurAdDVXgZQaxXygqxs55Xy6JLSZNt7x1EVm7WJa",
  "key6": "5MAJjUqkGAbbvfTEd23naLCrB6N31HGW7AHhn7hnwViZQ9M3DL4TrrMTMTJ7yjwgK74CJs1aHDu3D2eeHvSNcXkt",
  "key7": "CvZmJDLKAMcW9gnf4me9D2hxJ8hGuoSGguzDWYsfbkbByuFcF7KmAhYp6R9W8eqn5smFXBzzwJ1QrNRBvvv4vYf",
  "key8": "PAUyRdewPTnygQeGmRdHvBjigxEM1rxxS1W4bM4yQPwoyMnFG1TRJduz58M3pKLgCKUs2TKLi9MZQyir96cseRW",
  "key9": "5Wr7VGzxX8D24rmEXJ6wBm9qxXvMS6tq2P99DQsugEL3fQ2rKSGJVhN7SSPp7K4qJwhHwnLrz1GU9yGCjzugMfuk",
  "key10": "5m3Ru5HpWYogS7Y7XPUugzfp2djNgXB6Dr6meSminTRaihGicaACc1rw2k4zHHknt9sgSkxwX8491jccx91UKuMC",
  "key11": "5VKAdNaYbYeFDV7k3zGFX2aGk2j7cLM6GAGLjATc1GATCqHkg8JChrcRZJdfxyafnGqqiwWoCGdtZNYfRbPeGh9e",
  "key12": "4EHq1c8J3542K6CFd774HFZaeZuanQyYX6Mak6kV4HmtdDyYt451Vg1iaNsMWj3imDHc7g3n1EZjeEh55gaiJzQs",
  "key13": "xdCxR2NxL5WYt5vMDZLn4nVrNNsqyZ2KbUeRLKCZeo9vcGsaaebvRAxKLbQCohwHXWD1dUCUJwnPxwS8gUAkcDF",
  "key14": "jAgZ2QixqCbRjMmT9z51cMYcPbkYJS9fAnC22iw8sWV13H18k36fA4LPxsW7ksX8s6ykUpkQhP2LkLtMpqXFe56",
  "key15": "bhFLVGt8QunQq4FkXhd7bJNGLJnHvZKFFRP22msDTeewdinw78vax9eYv8F5foE1BnZZFbMm2UvXY79a1o7gkVr",
  "key16": "2ZtwV2eYTcdY9tdot5Ty1Cos43bXewkAXUZ33gUFh1cbL8yZ2jwRjFZRArafrkGgX4Wvu8ZbWuTezpyfw2c5vkep",
  "key17": "2GdBMS5azvrpRueWw4JZ3DfEppbiGSny2vHqW56KGFxKEbdnHUmGfJH5aVxGBq8xAnNvTHMUWua3YephKtzk85Zb",
  "key18": "zWt4V6fShT1LvozGbBPzoK1vvvbcaWk5ko66tfnDeT1VyivEVTNBdRJNisuRMpCAZjqQxjcCSFEj3N65L8Wgyzw",
  "key19": "trh1QSE9hXjpzg9ogHGuDadUaTdovjPYewfGcHsnBjuxc3fkMFAd2jgrveuPS7duhevxUuagcDzTXNmZeagJT7J",
  "key20": "3V2yFiEqzotvNj9LoYsDyFivL8MH4XxY4cfMaQQVEfbPXkXBT1hK5TFj4Z7TVWxpE6eaV5P9TmVaVoJ2uemtG5yv",
  "key21": "5kk5FqueMagrdUPvEFr739AWR7dUX8Xca84bWFDdv4YoUMrXgXp24cXfAKF3eVnwRdiMkxdnb2xo3nQfo95Bijxe",
  "key22": "3zWn11up3N2zEzrZMAb64Q73oTVqsqQpk6f81Lf2AyzPGQu2rjFo7qvjWQ82QLnnFgpaUfK8KmQT6Qk9UtUNi7qS",
  "key23": "4NMtn17Tdx741mjk9dDT1Z3EBc7oj3yRubFmnbm9jQ9hx35RUPqGKaSdVFqJfAtdoq6JYi554QueFwUL1hPamjzX",
  "key24": "3eKhqMpWrxp3dgj6Uk27xLzMoxZcXeKo4QpvLtsZvHWvuY9x5wWt3sTr9nhEMNMMXduzswRJWhAV7CBqY9yH1LvG"
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
