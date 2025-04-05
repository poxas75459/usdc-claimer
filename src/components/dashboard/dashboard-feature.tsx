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
    "2yKLJdRwHMqkKZ9KzWQCUVmUi1iGCBJBQ6uwBsWG8153y3kD6knqz5NebpVnZoV1kr1L4fEuiRk1RZtzRcvQMEys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fHfqMkzbv2Abi2cA9SgEa8Fa3F91ama73mDAT3m6uW7JBFr9m69J2L7n7JNmfWT2YEhNSJudgi9RKsCJFY7tAUw",
  "key1": "4QVupkC4J3ZpPsYr5ALtAwAcRYiUYvdWqmfqK11YVMzJydQGtZrC72nuALxakzgv5SG5qku4YXrhWMYyZwCZQ3Dv",
  "key2": "4BnhjEoU9vFDZgJczKEJ2HEHTbvBifUjqQ66oRJx1MwfLhPHVRfSmuiCGKu99Lk877qM7BZNDMkD7x3MapSqXyng",
  "key3": "3bmgGgp9LZ3hBdGfsLJ72dUVLx9MYAFgQ6TrBB8RZYbk8kWpHHZsJvgfoyBH8ZsdPk8G48MsoaFG3EzEiTFzpcTT",
  "key4": "3BaSP8fcdcJ2jnJ3jY6jtwk7UkWGEAnjDgLUCQGrjSbmcwrzQYcxXDQyMxcrnCGq8ZsZkgEiMgu7PvFvbVzfSfJC",
  "key5": "2Nyt5CTV4xjjGLuUyfeLz17q1w6YhwFnqNKsCdihcAZA83Cm1dhZYCVW7wBCd1wuh7o2hRb8Vo8CUpLroQavuopB",
  "key6": "2HnRR8pvBWEApXEnGywbxpsqjHAvZj92VhgMfWju56X8hjBTxhUsauyybq7UJ5RuqZJsMrjfMf4nMWgts4btkD3k",
  "key7": "rKWAJvXwsR1NjzDgBLaFEtZQx1p2knZNTM9yAdaPz2fJzVwq9MV1E7rY53XQQEg5XAgxrdDaAaS67zGiDrQa3kk",
  "key8": "3K7eGUiHzJbXCkMDUuyJZitcZDcXANDqWeZuNPwVc5NZEADrQ2avzaPyqkHxU2tjNCGYP9cJV28RDE1DN7mZEAXR",
  "key9": "4HdH7wqSyCkzYByoiqcbvHwKk8yW2LYuajmC92npv3gFUCgnLKGSBWwcq9MU6uAbUkMEmz75AzJBrP19WKv2Jr3S",
  "key10": "2Ly2Pr4NFTHb7FuSyfFRRkawuXczatGT2Fuo7WXtoVZY8Pvpf75e3UavwRps1KD4vUUfewqvp4EPSfNvSwp2edCD",
  "key11": "4KL6Yrq8vg6dFGKzRGdLhqJtAaZJZe43b89wWQHZYJN8Lqoqp5AXsKa6wxjcR5fUYBzoyfFtSW2SWoo9YEB7fafh",
  "key12": "onGADfaWrmu6PyB9ePCsSUCqyiAVxwb9MRsaF8bycSbNuyirHrsVEngvyEmoeqTGjY4DeTF1JsYvzWS95yaZ5Kk",
  "key13": "4EYn185JvxrNDX28RCykVtkpdEVKaLjFrShfz1rLaNBhDUqsZuCfb1qUo4yqCzUrNJreZwrxa5ahv4EVqvwEufLP",
  "key14": "aBHJM7NZu8oFNKVUdMgMBZZFbwnQcYiZxhmtB4FvhkFf3fXqGsvNxorcwYZzyyczXJnLR7TQC4zHafAdAb3RR2v",
  "key15": "5KDwpQqrUBnBtgqVdY8ZQzscxP7SszCZrTcRqLh3fdvW1sYiJavWog5JzcnnaSMYaMcHmm18uL5V984TBJLt9yhA",
  "key16": "3g2nPBQE5mHMTpU8LBBWbLu23LV2gFNwQrdpDKjt8KnKYe5fjWpsXtR7GiayEQhPaYyKi5eQS1AJPJCaZpGxMnDK",
  "key17": "4yb1ZCaZ8PFmDx49zqMkWD29gfJBszbvXrDdWfZ2yJ8cVsiVoseVFVy6QgdMcDfa6dsYhcbmddZvD1fKPucbJRrw",
  "key18": "2Crp1ERRux7T8a5YCU7MG1cE23S8m9gfRMwfxVpdq8MvdU4XNmv1BtSkAFf8ZLTLzSarPGfFFiiTKobLWgNgFjZY",
  "key19": "3xAVU2FuKTfYCmRuJKmkFS7dXi3wJckShwB5YQc8uLRbXA27QqU3EU4yXHLfKsRkb4sYPW3CoYqAqMAPYZ8cwBWx",
  "key20": "2JfSo97gtqtnsKHr8BErvmudH2SxnkkrpP6Zbah26CB6i8yypMrxveUuK2xdXNeRCAcYc8hi2BmSt5UnoxfGw3K9",
  "key21": "4pC3qc1pBtpvu9HJia6YFt3UhxX3nMUYhXyRKC4wJMDjG5NfHiD9jskApRbQFBHWCnPKeVLjiQxynLGS7TVUYjk3",
  "key22": "44Rqgq8nAgtreE4yVXtxhdkjZQwcbkbLJpRJuNsPGbYY8f64R7qFgr18yUtVqatN8TBeBWXEAczPwZXnsLSyrsEF",
  "key23": "N5E7vwsBhSigaBTUx21qE6xesuJoHkhUVFVQPvgmD293s2sU81nsmjLhHupX5TSeA9sEsmtVuY1w9o6Kdv6U8Er",
  "key24": "2cgd2ae5DFw4SoHF57U7M46fPQnF3oBafJTLdqFmHoAhQxz9UwPFixjGgpAyP3dMKCek2d2Jau9MSj2a1PMfB6WC",
  "key25": "4baWs6SfNDEEVcsmGZYpLxW3dHhPfESbiV8JFL1S3ctjayn7nwwB1QJcWwqcJb9oD7AFzHtuX4gy8Jg3xUqrKryb",
  "key26": "2z385uRYBrdCRryzJbs98ozvuWb1Sdk8X1dA9y6NxQ4w8isiHnvEMtZFShN5UYdayonme1QNTF9qWYohpoUUJfY2",
  "key27": "Zd2rJFgbdZekwrvANmWtexk5HvEMgUngyKdzRBNdk3h5mi6bb48FLTjMQHLNzMmpNXGrj57WsrVkD1Sgg74pMpH",
  "key28": "ueutnjGV9LNxkJRzd6GrswDUy4rknH5z2gsTVPXVp7tX2jTpDF8anmCguXrdG2jspp8W6zPx7DKNvuCpeSKvGMK",
  "key29": "Xb73Y91FJTNy2hv4MdPsgYSP3PfoQQVcmbyeYHGaNTHxqXRd9i3m86285HrNyNki1YrmTsgtHThuPQi8Ba2jbUC",
  "key30": "jvnbJAgComqfWi5ZwQV9GX7G3WsYjThv7tRji1UG17V3j7ts3t2ATGgTBA4dMB8CehpDQLgtyzFYR7wQecPFsWZ",
  "key31": "28vWEM55FXqjBPr65eza3Ayo7QgxWTc9ZbWpX3mkbSnJVsPCXcWmLv8TarPqFCVq5UPQ8znd95eCGPMa3CWLF9H8",
  "key32": "4PHsPcnECEHZsejq4QMjG2oeqZAivjAxGx1ytu6TfAGcfgPnRpKDsFFZxhmHZ8R2V2mYGgu3Z62svSce1FsrviKD",
  "key33": "4BW9TaGsa3EQXU54wbELLPuWFWVg1kVG2GNAf2DFTosecszFXtAwhRpyLmB3akJWNNzL1W9xpbTMCDUokAaibeyo",
  "key34": "4wgDTHsQ6aAv4rBzvgzTjtTQDAv1khkXSM7BVBRvw8MZnNygqYXkymdZb5potPG5TJEr66N1VJD21KmtxC2w53xb",
  "key35": "tAJAMpsV1xytB7rmgw6VYsnqNggyZWUTn1iArdiy4hAcuq7MxnvS1Uh7CZSy5wTw3VZv5xkB9iWhgkXK3Wpqi9j",
  "key36": "EDmoEoeDMqzaC5Uzmuic886d56v82CXbqmRg41rjutccHeuQYPtcEdYvCHkyz3HYdb6J8AeK4TsMfefojj3aTeP",
  "key37": "sfG9SorSMJDA9H47n9eQhk9eKXZhsuYPCXyxygFBxjhGaZBmEAsLwsQ7iLyHYT4UX5GgPU1RcTup8oEEGwMmi4Q",
  "key38": "33sUwVqhpZnPks35Kzuq6wfykHsaFUxbzXedAuCLHdWc1G17CDY9zPdgCtoLq9qy9HgxyFuh3ndCL9qbFBgU71q3",
  "key39": "2DMwu1WkcFHgXoWRJXbGS71P6Q3P4EdS9KytghRpTR8j5bTwmLhWAsvTNhdZoh8cwWwZMSztyX4BWr3Nuogs8sYq",
  "key40": "2t4ttJRDTYx4DEiSqeoWfzzSUxhdSjHyGNt6wiE1gQT2dWcrEmaGdpdWbd5CRxub28cM9mStQzy1GDyb912gRphH"
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
