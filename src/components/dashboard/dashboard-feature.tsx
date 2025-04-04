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
    "3sRvtLsJnFoWsghtmZkZVpauPqmyBmfUG4GiHz5h4rspVzksTmRgcGozPc9g96SecVTTd8aAoC7x6pvYbnSXKF57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DeoxVQwuGFt9Wv9VJfcg5TZLvrXjZ7ejYDFMvG3BoTbzzA6uE5UijvMry1mmLfKNAHNNZ6K1BskswiP66PhQms9",
  "key1": "Qw7fmFDtzCAcMLhXEZCtsPdQVepwfCoJ5NToQn5JPmyDaA9jxs8RHB9QwPuD3ehKyHSyzcjdBAcFhrqpFF8TK4M",
  "key2": "3fcmiFAqVwsuSPubCY8tLr7XYv4gDhLgifjQMgqKe6w6ZDzY1FnuvKYmXG2b75hgZKGRXQj5LFnzy3Y483zBxNgF",
  "key3": "5UUwwEiFcguVk43aQw4ZiYABhEjYdUZ3eRQ7V7jq2ybmdfGek91FRqY4weajpjqwSaJ4izkzPCPbAsAdPJoJfeRi",
  "key4": "46LFFsds1vtA5RAC5oQyusXcrnvMY78Tf1Ynn9UfwGUpysAWX4HY5AJXLQp779patQsChweWNKS8eQiG5HKA4teG",
  "key5": "57XYesjYgLrF8jkqDVU8wk7vy4C1aWC6PvTJ7b6eh3UURR6wG2WBoU9tSKeEmrFR7V3jygwizhCyE8EEM6cUFTPn",
  "key6": "3o4r7VFkMuLEfgy2FQdKVeo5FBDSnjaxyoy6skx33Cvs2gUpS1JU4u7JmQtNPpyArzxw5dZit7WXqxQZphBbnL7p",
  "key7": "3WELeJ9uTwiHrdr9VMejLmHkMLVbZ4oMTxLGG5Aw2WRhwbsp6Y1xAFYQgYhkzMHp2E54jJEMFk2iByWz11ah1UdD",
  "key8": "2zNmPckWBSEgWGZHLSUiZGcvtrwRfZit4nEbRnfbYVrdb58r7WaMf2NZ21XqscsevyCcdFkxdEydPDbZtyszkxhk",
  "key9": "3nMupvQR8BjiaadjF9dXeBVxunHQ2QSaL22EjKWV7p1M2ugB2Mr74cEQeadkF58PGr2aAcmGi7cL1Rwf33mgJF6c",
  "key10": "3HHTezmjm2zGbuMbqZcwdzFUheU3SC5f27q4UzykB8PjVZEcCPZdEJ6v5vtxn7C5w4c8XBR5G7G99xzGPK9FVUzr",
  "key11": "Lsz9QXtsQzYe5Q39kW573q9WPrCqeCepfJ8vbcPJVMvrTpFTCzmrM31XfrWqom9tjifUnePGhViN2bR5Bn4NBaV",
  "key12": "3L6YVZyBHnyDGaKuPArB5iDdh58GCTaM1fc4nafzPFbSxLm6H4yjVT7nBAMchqSQdDMKzXKLwGHfCkm3YinUjsQL",
  "key13": "384uKr8gNWT3UW2BdGxTYPJ5kfCXBceoamxWph2rNGEu7y2jXwzpPL1DwYbPEmKsYaXNN65tTUpfseF48tkFi42T",
  "key14": "5b5qjzjup2yRK6fg5LMB7xqsohd5G1sm9gsHdRixBAMF19kzbSV5fzdXj1rDWmhuxE6YmrG5Ng9eZNMDzbvt1WjW",
  "key15": "2Wqn8S5N9QVXAXriP3zv1VwmF6YYW3k96xdYviaDNbSdejL8Vzh4nLzCZVbk51RurCp1d7WhdrcBF3j4kCXBoSTU",
  "key16": "47jx76AoiLkZx5skBLjKfPeL24AQMDTG132JDBpMXrc1q57GjfV95CKN9QhPU8zLxqHGLm5tbAn5iZKBrCGsqmpJ",
  "key17": "UvkQQ4m2ZeS2CXmEHsyDEqKmdKrJAt3UfdGGiw7nLg87TsNAccwToVtGupaCQ3q73rHPxnvTby3VHw3DB4KcM7C",
  "key18": "33kquCEDCXx1uUHJBTnQBbXPVX97zorT941XxoUtoKELwtr8pgM8rzop5Zmy7gNf62u3siEUFe87yMZgrFF6sr15",
  "key19": "9HPXdCJ3ZTQAhuKU8LpdHid21oBJCfGeQLz4rURWx5XLaMFy2PVbKfaM34o6V9eQwNyaS4tYjbobegnkWPneUyL",
  "key20": "2VT5UkKk5NQ9ga4yB2J2sw9wg9HG46ZeoSBYeXY4dSHxxTj4kZyuqMYQg7p3PD1FhSaqYMscby39RaJpTmj8upEY",
  "key21": "B4XynVfXYmaCSMZ4Ysyo7UbW9JhTp6m43EvCaDgWzxHwbNs33SoR2ZGAz3aR6TBdgXst7mD4uLXAAyrN5DkJMGC",
  "key22": "3RQoS1YqsZXgo5BhF7PQuckimqTXbXqxHkqhcSM7tiSSEFwvbKi9WeZqzfYoBHp8jWxHw5FRge3o2AKQzvKNisAc",
  "key23": "38AhVS5XGrJhChHdqmDu1WGHdwFZuFWmfpNT8JhFE4jrDkkd6VNCPTkdurHLLTLuyWrNsREZsSUF1ntzcwZrUpnz",
  "key24": "4hB5hQarxgyiJcU9La5RjwTwFRFwVyop6h2rbdeKXgUPwL9kRjAWRjUtTjvpahC6d5R58PVbPWugzE7HrhZPULc1",
  "key25": "X1QPpsCt6u7x24u54RfmwBjAR8aASsxzWfguXuGYagwXpa7UsPbiRH67PrTpWwGkDsT2Rpq5SXfDDnASPKE8Svy",
  "key26": "3ETf61MLWCfcyzVsDu3AToZiMJENVsP3ttnJRUg9yMzrakAVdVR29suYYKcCTH4iUMkhR1A1iZBVZ5tuU5bnP7vA",
  "key27": "5yacNx1WHC48Ah473VMXWYCXbKxPQfkLMKyGUb7wcMhsGgMLUuEKXoX5qjjGahHSDxxaLJhr7AdNcTpAhsJMefVp",
  "key28": "1rkgnrqfEUR73YvsAJu3iMYYGu7yCQDUcfTfMkjyKNfYLmMtKrjhhyvw8hAyY5iXrYcNg2LWWodzzTNJNv7kVPA",
  "key29": "445SV6wLUgPkBpUiCBJh91Jbf4CxvqutVYudwqUrpDFQwcAwDb1sF3J6SA9touggjq38k8HgNjaUYv2LimQJHN6F",
  "key30": "58AnWHcJhGQb7GeADE2QZXkk2UqL7Aptnpmge731kXhmLeSZGtS6Yf8647Jqy9qX6AYEfBJhAmJkp45Nty4ZN1ic",
  "key31": "7cssy1CfaVeHSgcC3RzGLbD1Luy9mmRuigpiFVFhmyfML7yhXuf1qfiiaEPMRGWLextjMMEbSKQMaQEpvLzEb6m",
  "key32": "2kwWBcv89XUBM6SPJtKqVeMEMNJTf8dh5F6rxGtTDGYhaVHA9xEvR73JNHTUtnvskuB62NLy2cSvvJ4fHRDiBhTE"
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
