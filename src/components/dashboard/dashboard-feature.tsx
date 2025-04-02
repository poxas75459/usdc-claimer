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
    "5PNebuSfrnDTT1Q6dpJd2zAwjgKivZzaVBAdRwqRERHV4bnKEyDHA1f5bLQQYNgbRHnsuz9tHyERuTcFySgjbbca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zDp2aJRr8be9NhRhZkB4HZwnBHU32jk9BXCpNnE7tPCLUKvFVwvsrcfU87mJBJrvDugTZyHVwDjYVjn4JC5A5Db",
  "key1": "4tqkrbNJvRPVtysKyDVmSvZHuZhqtpTbvcrSmf82XUPkgsaTkjT3f8sbcrzQbsHMnPYHPHNd587Y1STYsc2LbCpq",
  "key2": "2cFK4Q3VALnqmCychKZ61YF26ZDgqDMqmJ3xvqfzA3Kb5xtYbftyn1StHAgaD58TnhvkiV3NaN81pZyQj88rq9te",
  "key3": "5CFrENZ5wjgFyG89nzX28Vo85rHxqJBCFoAzaVno4CBNr1Vf5bYgtfJpNnezJaH9k8MNfK2nBx9WqouZTjqm46wQ",
  "key4": "5cMbArNE9wyaehpwaam7NyRK3hYQ7gKimzW3krxQot1KfreND8zh7cVrUx6izQW2UM2H9YFSoZKFjVXDrVsw6NQg",
  "key5": "3M9WzpXuwS9GVxJ7CioSp4gxpnGjmTD4G9SdhJrcTpEfZJ7aMVpVMjsdpZPnS8ZwSGi2xeuhaQzQKwCr3hA1i1Wk",
  "key6": "2xh4gzuuhL1BkSJQqMbNygzNi7j2yyv8uiCNkJeggM1MzznB1XP27N4RPiHZ8N4kC917rFP8BKjYLgUMebKeT4Xa",
  "key7": "67J7VzgrSVAvx2Es3EghzujE2jAiB6fYzut4eGVoxfgCAWc8snLZsGs9RRcEyw2rf57F7md5Yf6zMLcroWGTZ7Dk",
  "key8": "4vemTpjta4zpkBzSZSH6apBmcEC3N8nWWjTUVFpbgYpLJznoKCV4TRpcShdTE24vaPq4eyCLjbJGU4AS3tTJQfPU",
  "key9": "3B6uZq4a7zdqGH8t1ukCDhwmKgy95mNuEQgPwezyU1Uafvu7tu8oa3SvHVMKX1t8SMzGJ27dkVEweeBUxKaCiNF9",
  "key10": "3bLqXR3HKwDQp7QCwmRr5tj787jvJGDcH6ysTakmff1QEdy6XbJoxUnB6AjnCTQ4o3Aa5pJfBCGfDgJK8Drybsqt",
  "key11": "2eZCkQVkgi86haqU921o6rxEi1gvZg2bVUAQU9vG5UtJ3ZbQuupMmp3vk8VKR24bp7uJFQkdRcDr5d3efNP4WMHF",
  "key12": "2VXGWFVnfBrSSM5nsy5d9KgoNQFb6ThaYyuSUEvtcXqJ8yYzGGDQ8xkSQUNADshSUgeZJ9a233ipaUoXkau9gSSr",
  "key13": "5cbdsiqMm7mrXKePuMpuYUWfXEebmkPgABcmq2MQyzQ6rXXunaCbAVpuismUHEsQT4oB4tZcjcvBESnj1UVfGrDU",
  "key14": "5bj7m16ZQpRikY2o5cab3eNhf16J1WH9KJmxtuDquWVL16pcnoruqwTKKbAhXcNM31xFLGLBcfPnxM7whLQdxdZ9",
  "key15": "3FhwJLxpVTHQL25EsBJ9YiMg7aBJ8oDscnjFEp2DAvkbrgNFkFiq97VneFCLfP9Ka5aZhJMcNHeAAPZwB7T4Go9M",
  "key16": "43bLVUAtn5HowMm6w6iU9GVxHaive2mVhd6eNjBLiq46uDL86zj4vC44NRiumv99xy3CPTDSYKWPJLJVFFRh6Dv9",
  "key17": "2YfRMoXD3MWdCsTpANBz4km11fFdykhtUp7re3HRrKXnVfgAQna7X4fE8GEBRi1RdNn7xR5TCqvGKeoVnpq9EmMY",
  "key18": "5VsC5mbnx4WL1QLCcaLkztRhh6jSCHybKahXLMzYpujLrkaphUU9PtD8PxXQnVzHgmLxJeDxRGCdMTTraBa1Q17K",
  "key19": "3qjyD4dsVm28eGcq8T9EguLS6PsnHreBhggYVTcpyqDVv6oLebFzx6BScCV8vcimuYhSqcaDEAkfhK9GWCc5mGNu",
  "key20": "21oWQmMGvQSgp3DCpt9vKx9Cx8MRrVBZVvSZuh3ANA7dJHRpzHr2Lub8aPsWYqJqp7ftbjpwp6xtah8fCynNvFV7",
  "key21": "3HUwe4zX2xNGYpP98GeuEPnzcszQaK4tHTrNkhaqcxwNppJc4Py7iAmnhD5PSEjBd9J68JriHN272pTTf1zBkyEe",
  "key22": "2Vb8vhsvtsg9VMuJq45FKcSWY3Xucb69F2VFCVa9tLHXfoHQVbbjT2tKdHXxB1nrTokv1qdoY3iymBHgtS18LoU4",
  "key23": "3nTRerz53jKiVpyJjVjChbQPfWgdGY1iCCdi9A57FbD97SmJqDQxYBa1qy2wSyHu3XFwfkQzoiNLL4p3eKvFK9QP",
  "key24": "YrKhA5Qd6fayU4y8k1e4PMCyDvRBgGpMEFFiUevD4QENndd9WMiCaCGzDDs69vK8SSjT6t4JrcZA66G2KX1vGm9",
  "key25": "UotAWFhvjYn6kKZpEitZyyf9XNATRkC4yZD5B1GJSSdsjgeTktfwRADostZ4V83axXVKsDTjyd15zmu6zYpQsXe",
  "key26": "38WbWvzradCc6uki7wgyTVRw8Qxp9ZzHhaqeLRf2UWmNCTLe88p5KvUqQDbGLCMz9QD2DYm7KPM3odXWvp3zCNws",
  "key27": "6VGdE2cGhhkuEKhm6ABTVpzaynHQUpbMo9aviTr3PBCNNYVPngramTwm1NhaPTmxokRTkDByz9rxdxXokvcnoNV",
  "key28": "5UnbTUtBorHmNor2cHJWrykr6PUTdex1E5mz7Nr26nt5xNSwMu9rRuUFvSA9uG5MNEVbSYkas3tHMGq8xVALEtoK",
  "key29": "p9W6t4YKdmY8KeyEGFQnJRSFYcCqtvLNn1Hd7XTykwCFi9tPWcN9cZjm3yfQVE8AX5zVsgpW33vnnXx45AYb5Nk",
  "key30": "2Fnx18HBvgRCK7mgGgRsbfnQg1RsFJcnnejUanZ121ou7eKDMFCjmX4GCtdaRBza1c47Pm3kEUXQYCwbWNoWrvZi",
  "key31": "5TYE2ZozvgLLt175ptn4fNYzaDu9RmZS1AxNVneR9Rg179MaFAcBvP3H7yidwts6URruizSsZSm7uAGTJxHTVwwL",
  "key32": "2pmWpbAaXoLi3M57xhApRdsuZLKNTTA2GTBPDtE1Hawgwo4UhjpgxKbJdFtHg1XbVsiQUwRq8vS9YTVD35YGjiDL",
  "key33": "3gfqK4H4qfcevyF1AB7eYrR28qyi8nnSUEoEiUzQc4oNz5mkyFG7SnXjxVUXUPGp7SEswVcf8Ft1YQcQep5AWP5e"
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
