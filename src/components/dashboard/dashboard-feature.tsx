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
    "5MWAQhgUbv4kjkFHu5KoDe82QgB9eoNcQDAyNKuG4ut9rSXFAhc2Mp6iQGR4CsjK2TyT5ykwR2FxyZEfnrW3vJcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aM3k3UHzP6VqsUXGTvh2DGpRLpAKeustKp2D1X3S1gRhYZAL5k3H97fivQmYWGWzcbfEudMjiS9L6DkZoaBrj7B",
  "key1": "3LocNUe2yeuFrPXnkWxnhSFy19yxqC7VMivTSF8W9yC7EFAg8zStuKrAgJKgqa6VVxxHKDpMg7HUvexSZATQsK6d",
  "key2": "2vfFzwy4Cv6ejn2bqw7uqdSb7RwzmUTLKfcbMvx2dqY2kVXsgpmnRz8Ww69Q1rz46xBXa9e3RhYwrzRHvGiw1jv3",
  "key3": "4nWJ3RzyRktxcE7bhJiapkpNXBc6BaqBSk5TcezVNsoYvYR1FKohxx19ZrareBgVYjHgnWp1ZpHYYE2m7MZXAnXH",
  "key4": "48wYdmyueQ7ZvDdg6ctXvfe5dPEDouPcx5dKf7yEEGuWBeh2Ctjorrwjit1z4yNLupMrbLecP5Ndyat9RrJBSv5Y",
  "key5": "3tTMCQRiTURttCJdptKTkPsDWyoCSr6RSjxFJfA2vHNPmnNL5HtsRR5G3AEsXUsRNnkmSho74TLPgzg5rQvYnXjc",
  "key6": "5EXBFCdNC1tJKMTwbCqSkmfWXYSEjGeYDye6uHt8dokEq16pi6WXZmDjtzzyd8eeffiinpBAHfzQPDTvoc3q7jTC",
  "key7": "2oYkRsrDkrgyJgKowsfkwhxUqGfzogvjUhHJFy7WZcjcU89bhqQRRWP7q2uWtfSLtp96VGEKj5aMZ7cmsL3wvPgx",
  "key8": "4Y5nEKkdZFj2zdgT7n4Gt9CUAw11Me1TkSfL5U7ksib5obwXKxRhN7LnFdwHud5yXpi9PKDPNGE3YWbCdKepKVoz",
  "key9": "47UDGRcngp2rZBr85bRaasMhPxJUbwL4jor3V6N6Q4geXwmaxqTa6RKn53YLYkF91kgU8ybsVNTsNN457qo7D8Fr",
  "key10": "2icnw1mLpjkpoKvkUCLYkZrTeBP4PyahxxvkBGCog9eeGBvfNycsWpv1GuSAXVwLGJtZsT3cXugrdAgPhddV76dE",
  "key11": "4iPhfefivJbqx7WCwqxpHF5y1ujFwVBQ7xmbJkgXJs3NGHSg3r1pKFT5Fu5e7rmjuaKFpKPhf5DhTWVVkb4Wv2wB",
  "key12": "2joZTk9TNc4fsN2QAJKEoUF55GwUEXm4ytqFJ22EsDEKToaruVDa5yVczmhEJVoQfA6QW3WduWamb1RMFj61PZYV",
  "key13": "2BjvRziNwdwPcBXc4x3r6aNzR22HoLL6xt9xt17aQWwr8QV9X2keAPYiXoSMG9p8ZogDeyiu1JMUAua2mr3YR4Jw",
  "key14": "3JksMfdEcxGDMETgxq9s3fpAPGaBRSjwzmzQZgJJq2iCQZscDvzoTFUr4RaP8NnmNpo4pQ1pBqgp6eUy2gMZep6P",
  "key15": "Acef4VkCReHCQooB8UmyjhzEEiLhQoBA2kVFFCSc69U6m8NMr9dz1GGhS28gVQE2pxj7EuakmbPJSw2nPdRY3ue",
  "key16": "2r4xfoQ3qZH9inLy4tTaEpfenqeAHy1JcsCzViEgGTFQAren13BNKeVHrTHG5DiqpfWeXV8UK9PyEgeUE9zM5Afn",
  "key17": "1jLhSZcPVz3tLqVNH6jjb12yafpFdEuYLyxA7abdkNwHdyuuBLczibxmRj8kQW8DeWfvhR9CVYhwzdzxLLKBhNV",
  "key18": "4KkRT65Pm9jqz1oWTMBHdiiuhTKPebtXWpieqEVwwLErUP46SFz7yrKNFEFgLjLpykbpFyN65wddwZKtQaTfMd1K",
  "key19": "3gQ2fnaLmmTufum3ghwtnkavtRVRKoYgZifgtVo8uvgJEwDGrtxDEfAr2a7LA7meM6784ZJtoNaoT6Z8bMstK6b3",
  "key20": "VuaVDLS3RmpNk7gqdqNKYFgvFhEhrqrnQFDX3mRcTBEwmRKoohR3R5S9gbZP37hYPnkwpGgnEkeeXKWCpe5r1oH",
  "key21": "5kyMRrojy6vYesCUkTuv8itEyuGKDM3YYJXfH41kY4jfuPZb19CA9kD7XgReeiGCsifJqw7wq6eGmaGJ21xxJ44Y",
  "key22": "3BzrJDhUDzyA9bhRo2WBGA7nKqYFqALcwASG5M4ZDu4tHkMPdrvHbY1pNeLR8mNTmHEqjnE7zzk5zYFGVKt7e6pv",
  "key23": "4suG1z3XavWbSdcSsSy3prQSq2Ui6Vp82UBTGveYMSUcrMqRSNpWUwbk5mfL1owvgiNj7F1f5PEm7rHHABjiMQ79",
  "key24": "2BTBEcKsrZq4axMZg7BYte52V842sDZffNyfkVvw1dBu3h2AJTB9BB79bwTXouS7fPLhF6ZLkxjQBfftBfLLhRbe",
  "key25": "2L9MK7T5xz7tm6esQ7PYueTXxt4nyhVbLkyruxK5RyXY8UPAR8q3UjUoC8rDjkSUibxMBrK7koH6RJ5MDfLB5cr4",
  "key26": "4rKYua1HyCjFTromyoYh9JEb25mL8RQ4Sgu2X37wRADNHxPeZBqQWnYLsXVAe6YGFdzT1ptHvrgMKrZxZdjd2x4B",
  "key27": "4nHVb6XK8yzXXfP6cmE8sa6DsbuWZgGePRjFe7Fov9CDtiYsACu89r69NUtbwj2nnYB77AoiHzQk1KzVFwEe3hmy",
  "key28": "AUyTTCerMvxsErnR7jqiYoWEpmMbGAqtWZrgYxLzmhrn756yEGuFSUKepnuDZV9LYsaMvPUB1v8d2rTEoq7newJ",
  "key29": "bwtMu3vyWPkX2PGtoRd8kAUrGDxhXAp4vBEGNA81uLyftRvKutXPG2s5fR38cJZi4n2Wz5Nt95khF4x81rjMEEV",
  "key30": "49PYgv2KP8bJYb3MG92irEEydjCvmDqwEknYWJpRwPzk5ZupU8sXPYFhpAX5aSHsf9FYowfdVMmgyKqpkMmBGVBQ",
  "key31": "3af1KzAMmHk7pUdL6pmSbRVMD3kc8H8eu73A71W2dEcvL65bsXbZbpmEdm6FTvyazGjae6KuP5Q5AhCT2iKNDG1j",
  "key32": "5hRbWU28kXEyBnWJ8gqocrh2vKVaSMytH7cEzkEjz8PQWLNWXNuzL63pMafezyxKD8AdtKv75CLnADVnFcj2n9oD",
  "key33": "2Vggabmh7zGQT2EcW17oWiUBZfd1CTUwzXbLomph7kMR5QgpAYyN9KKsmk9wCSkFbtPpVYKyQHcwYvHJoaaRGzrM",
  "key34": "2NFuh9QAg9wexBdm9G7roS9BmieKbL4dpKd1xLunJq6kko4oVaE9KBMLMfcKZVkmEGacqHY3FooSkCHQE3ypczGj",
  "key35": "4RDf3gqAduiJrmpcdy2r8ryUs8AxRfV7RPLf7NSynPTSjwBVqTna9wS2GeUhpjKvAZgepMue1tUn5DhZ2X6JinyG",
  "key36": "4gyMvtzVzXrPs5eEr3WNvonorTZGWqXADxe6J83qg7DTLDDbjCjk7jDkoiVpdCXDdou5De5yPmeVqN7cPvCKXGKg",
  "key37": "4MHekBt75e7FLLjWhDseUDMxcU1YnDdVhZz2jG1EQgJ47aFvMEDidES5gJgqyk8FMhYCWfYYwh5cSHGUK94Zmdi4",
  "key38": "4BHD4qAPZkBvqzKCToVq9rDZCnf1Jn7JRWTAA5drofDUbp5kQ9V995qYdjzuoN27n32et58Y15V9MqCXB5YSgyPN",
  "key39": "667BuNK4DPngGxst9uoBKLq3z96iU4ZqQTmYP72D5H7BZpMWKHPjqPR9wzpJ6ysYr7vWjuZp5pVn26qNxSQWGZFW",
  "key40": "2hnfYixC8ybsQFgf4EdYFhAp9eD9VUcrEirWdLbDfRgF1A2iBACZG1eLR8nxAMVcJ93tf3e9eVtThAx4CE6ZxJKY",
  "key41": "2Notn8NjzecpjuFG3s2AtWtN8uTWuYjHDhfugu27by7EKoMxJzMSBpUQKnQcRN13ck4WABYPqzGWgBc7QJBjeCYP",
  "key42": "yu6QcCb4KUCcfPCS3uQ2cNqweQB8QHc85n9XamNjUAhSs6smdUvF5XXs6RLkXAhq7qckqzcYwVthexQAZ9MpjpG"
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
