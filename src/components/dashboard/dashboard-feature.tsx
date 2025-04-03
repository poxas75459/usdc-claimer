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
    "tmdTv3sdA8PnhRo3ugVvVCgDz7DxT1rbSQNxRUTfARu5vr8BpQ9k1tYc96mVcyrhKA27zuzg5mzAk493dHs6PDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dDEKXKW3k9SJfMafJMaoZfxRazXYjqXf2CDqHfX5DKotuj17PPJWjj3j5XWJHcytFxNnu7yfJWi44dubUptHfGj",
  "key1": "49obiqDor3ac2NcnuKvkvVNhZufbPwSjedKjVhQvdTdPo6UnDdfXvYYxRdufXPUfpDxm2gg6G5LhLFbHyqScqx1k",
  "key2": "2WkuRuAjf2EM4AFzwQj5KgFovu77Lt4SfrycCKpo2i4FQvQKSVm7ix9Y3gBHNkXePkvRdDiNwakNLhPmc3xxY3ih",
  "key3": "qsbYqT5wsFRanKGiFuHRR8BGZWGfX6N3rL6ChjswwoMaYVEbeL1RY72cGinF1y6gES1g2paMdHbivzcdGbWwFTy",
  "key4": "PZ8ph7EYRBQqMqjhN6XBzQ4MfbKuxCAPpCyJf3SMV1uQQpp4vzxncSXahyVSxYNajvFppnk9KnemmfKaG11LJmM",
  "key5": "aQmSX6WCBFq8cr5MDiX6bVxFVwQoHnj7xfjEeySx3M3m7Fcg5H2xp2tgqHVMnxMbNmMpeXvbrVi3Z4saSqbGcAx",
  "key6": "4UmEfUrHvUNuDbYoQ37hUCH5G6rXnPWiq5bcRsQwJKRj1S1PSZMgCxpw1vE71d836SvEzxXPRpGmrRrVdjvgJ8eU",
  "key7": "5doczUKFdZ3nWkghkgNW2VXpGtbBun1wYZFcSH9utLFRxcrhB2J5ve99iN9NFAKE2gv6MHfqaCXxT39rugRUQN4s",
  "key8": "62RW1VowCDRieGgoAWfL5yVHXGAhuoBshL7tiXNoSsireztJuhui2a3NLYwPsu2BiijsjEVc7mQh8QgmGQRMejXL",
  "key9": "67eo8EtTYUBn49v9UpZFZqNpDYTdvDhTsRWXPKEBqduP1v3CSpzHeQtTigGoF56h117MQvhwU6wxopMfCQb7J2J8",
  "key10": "3FqjujxxKoDXbMJX5rRjsHY8UNjE9B3H5PEpAk8RPU3wYSkQQbyRVqYXA1oYUPfaGhiPkF9RkZM9H3Hn8oEYPKxJ",
  "key11": "3qkJRjD4bN8P9Nv3k8wX4CrTFSNdJw7kb3Mvc8cbjrgxnvXqUoh9ksx1oqUQ5PsSJ6WukLRYB9TVxbY2S9PMm5cx",
  "key12": "2VgKje6oV8wVLD2JKxh7g6pA5foPm53afhnEKGuMr81ve6swMBDVz5ZKtmvETkzCTtmhu1o5Jra5K5xTQ7xF8zx8",
  "key13": "2KaF4TvTv4XhtC3ch58MPvTYc3rvreVmRKhpoF5Wuey6WRV6JWqRW7MnPL9oTy97i4yBwnz2kZ6De2sXq9WiW2bY",
  "key14": "4k1u23iN8ddenX3kbGFpG5qfuEqyN55FvLeq3FXmHGUBng4gMPd2kv5imr6wGwpTsngbgeUnJ2PwDmvzQuaaMA9q",
  "key15": "4gnaDazPJH8115iQEYwnkrGgrLDoynSyErsiGZkuxMXcVEfuHdFQTAXSLV8QJJ4iyoQLF7YaiY4sxJzLAXEozuPR",
  "key16": "2sJ5UdbDDLKVwkvnA3kkXfDE6xSY5QTzFscY8UPcbtPu5otsvyhoNJfy2kHPCYiB7CSkxGQU8y1bWch8SPgDtHKq",
  "key17": "5vigebLCc2Juh6umFb8dufnSEjiiqKdFgUxkB9uJsZ6eonbxhyUBQpuKNUs69uW7txTjaVuNaT52KDYHBZiE6b9P",
  "key18": "579JnaLtfSRcHCFGUCeoAjJtk2dagr3Zsdk2fJihQYDtfUkEBBPsobH49oaEbPjjvBFNumwNwDxFe8fzjWmjabeh",
  "key19": "5xjyrMPBtePufjosqfTrSgRi9ccMaxrwQZ5FGdam653adJVz4HrGaYjPHtQxJ2sDw6qy3GmgPZVBdhJHZCrjeFKp",
  "key20": "27Z5GoRGGSg9VNmRudAbGJ1wNdk7vm13JnDrCmxXejnXpMyJ295Sot8sPubg8GFFuLwx6X29mNbuU9YMHcHbqcDK",
  "key21": "26Y6ofJWvmp8AJivwm9hnPkRvb1Dkqw3fa4nQRog7Zr8BfbRNa2SRz2vnuxve2v1jeSr2JdpEotGPycnoBofm11A",
  "key22": "59piNFaYjkRxorFQChPQDu1Sh43yxV1f77aSZGKHvGojpJ96JsgqRt9Vwe38iVWXBiKm34y1jPhsbmC5ecHvULa6",
  "key23": "2MmNjAcbbYU3kDcqUTStvSef4FxS6V77fbaps9xyiXXUo159tRKr2uyhC1xKKYonToQjXVnFnLyydqs7YEid8kYU",
  "key24": "3hCdq1NLE8PP39J5JLQyuc3PcsDW449m8h6wwfGw4h2akvQVMCJvhU9xWsuzU1CSfNTdcCdsfGLZr8ainxyVF66B",
  "key25": "3owmahYUPG3fsMEwSYyfZAtAH2cQZZWzuQ1cCoakrVSykTqJuhd4Hv1WQfVtJ4VUj7ERCNEp6618CawY4yDUNVGm",
  "key26": "5qThf3aizC4sQoiiAe1vjnqDRdBNUEXz3rrxdKkusFqLu9vTUdZBgaZa8iUkeavSjqdP1gJgW6cct7jf81PBYJ91",
  "key27": "jZR8QbRER4X8CRHBPyaDmzBxCVjf2H7xxq2PuKsmgnEkLdUkgw5zYN3B6xAwJAsvm4g9hPoutrD6zejAR6FLqSM",
  "key28": "nyCroRAzLyjwDNESVPSQg7q7p5LqLM2Rovh8sCtMzxQ3Hbs87u11V9jfJYW3wCVBes4PMVQwAMvESkzUboWrrma",
  "key29": "4FE98LLubYsBmCB4bovCp9rWzDoX93UvNj9okwL9t7fXVfTbhmk6xW5GVXJga3zMDijyckpLd9eyWqJKZzevy9bi",
  "key30": "2zyo4xNd1cY61Fo6kMBvWDJVRRupSWVGHsFH9JHf9MZ7NPNEmFaqiLCD2t2B8LhRMqLNexpqFB9dU2eZEgdgifUq",
  "key31": "5mUTzHQTpwMbUafeEcxRjTKmWU9ahSMBx6ufpYV8bWo6LW2m1rFtg7rCKaJB4NxjdKUG6ohY7wBwWScUHNeig2mB",
  "key32": "5AhGMduUrhparjouVuazYZqmCV3FJynEpbbsdSUi7LJXq32r7r2mRfgDbKSfFh2xsd6Px6Kck9fcgWyEfVGYM6kd",
  "key33": "2KUsjHh7bK5j7KW2xaKiAn4DhYq4bNTEiCyCV4tS7fJSRtvpVArNqZY6GFS5Fj4pCUNmGAsavY5cQZfCVJ38cegC",
  "key34": "4qcFDnWAxLZBpFhhybxrGAxGgwUV9e7qbiqYJP9eFdA15dLAgcWbmKmNeNvBEoDuuZzV3gzvBnzo1gRe8bc2SKGe",
  "key35": "2u2KsKHRHZwJnHvpHNpfduYYTGDBVMBwvyyoMPZeqmVaY8nqfn7TskW2WoLMMLCvee67voSUFAguLfBnrR3TCN3g",
  "key36": "2n839SmzTkfYY7h99qqM3tip6ruDWoVAVXpj5aadCpzxoZs9Vc6qF7RVtoYBC1T5xPfbrQztZaRgHgYHxACU9z6p",
  "key37": "3dRf3Q9WkmtgrFnKx1Pz9oscFkc8vdpXBpTRKqz22BjbK63MZmMmGzxesLYXKgBjXD7D4KR4oFLBvj6gTRUjmty2",
  "key38": "3gBcdKxA9KiKc4WVty8YR3gZaq5vRYvmrmPkWzYNxa8rLxcjjBLJs7DD21KGJYsLA2cfWRBdpBJgVMsSGskVNmDG",
  "key39": "3w29T9NkRVcd3P5s1QEEaJDGEkUmYfDMNUgQjs5VcuqUuktPQtgutrCFKSqWL1enxvmQkwVYuC34tATkPGghyGCp"
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
