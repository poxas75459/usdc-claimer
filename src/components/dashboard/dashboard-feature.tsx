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
    "4tKgdX7XEKbiKPyeGSQJyxU9wm5pELGELQbPXd41BRzJ6iYGKH2qAkssH2qWFXu9H9LMrkTSY6LGqq1MPFT8fWua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WVBy47WJDPzgUYosgtAmaj2n1m8pJGvhBALAbhhkXV7MqN97CcHxvGB8zNDxV1ByEJRQSPpvA1ofWdk4eFEHdxg",
  "key1": "dGgG4iUFh5up1GpcW2rpSgZjTUopcDubZGyn9KBkENYS9qVPBfR65LM6JjeRr2Ycib3piYFt1dLv3JjDKcA2n9v",
  "key2": "MmbUBFV6p7eentigo9fSSGeBfquGfNS7McD2Avs8WpWwvP5cmdyx66m9svfjDxfxStAHCKRyuzzqiBXx76LDPCU",
  "key3": "2ZdyFpv5qBxjz1Z8wEnTnc1mPwPWJbYFQw65dUs7FaL9xwEjciovV3wNCSznPd9iQ7CFs175eSuG1nq6NUwbM5oT",
  "key4": "5YqwcYGebqAU4fkq6tggSaziyaRy5YriAznTQKfCJEVA2cno9h86ba6MFX5wrtT3U2vErAT9FGgoMFzqxtDUGnuu",
  "key5": "2TJAuCcrtEbE3xU4jDy3NAxB14pwGVSteqF9Tj4DkyVDv8PokdKdUDbWiit3io5zRkSWq9wj7UtiNH5M92Nw7FZZ",
  "key6": "2BCgdUkTGUtKL4kapQxcWJnJGeGfEnJWu9NNY54z2Q2Q4H7dHcrvhrJChzGn7PjQ2yTAynwUMkSmqy2jU3eaViZy",
  "key7": "kDoBztzWfKHZvwqyNsnMpi8YwVZreZrmhNeaeRK5UxXArPvoVU66z9QXHt76rkbGNHNKmvU7qHMk4oXn5o9y2YH",
  "key8": "KuizdpiR9VCAYH6T9acHxC2hZ2BRsjwU6SBQnK6PLwRY4g6dFKpeiAaH3hgn1MAewkK7ZPLZXapDuo4fcJmQkJd",
  "key9": "vtghyWBtiHmPc6L2zYqDMnvxKfwwfHg49ycZneDSSfVyCQWZKqSEMKAcWk5BrLTrXQG7GEyT2vCuZazwXctXFZm",
  "key10": "3PeGvn8z9CTL9MuCvAxcujzWUNQZZSbYCHnjA8xTCERykAvvFfJtwHuvDEr1pDHgdTzS2RbsJCCjUN3ebW9T9tvd",
  "key11": "2bCJaU3CKHMz86n12PgTpACpPV3fqiR53sp6pg8gRyLLEtVB6YGgCjwmLvC1EtWEmKXdabpsWNV2E9e1mSdjabzf",
  "key12": "2LrH7Tey1HBvY1ap8L2yWqQEPcDN6YnEPYTgCVhZFURrER2At26ddxeQeYJAyCa3eJYWNjp2ZTridwkTu39hWK2Z",
  "key13": "5Uk19K5ynSkCSgtkwQAgdfUshWHhru4mWcJYr9w6EDdJ4qrD8r6VpSz6W6CdyeQZGXiDf3PX3tuvfkMLeNPWj18H",
  "key14": "51sZQzTgoixR5iUozV5ycPdBt47VrWjZD33FWCNrfuChp2Vqb1Ez6fP9UsRYhrJNP37er713KvzdeoWsWGHBJgd3",
  "key15": "2eZTXab4T4pfLwMKKu6sJDG1aCPjLRLKSizmqn1wqz92CDqBR3jaxwnk4bunoAc63Ji1uj9jPFLCk4SzKSjB1zPu",
  "key16": "3BjPuiXqW1mewBxsg4jrGh9LL6e72r5JVxLwNFDkmv2N9vGU7PwGxXQ3xBJoxbiFjiv95kTybdLsDpx7xhwey6Gu",
  "key17": "5hfeJNku75FV1ChcoSMK6ffagqXrMkzLcbPxRRsUpYWEsRdX9U3Xn9WvKPCDFpPuEHkLKLe6tykCc7sWRjN13Hp6",
  "key18": "2swFcVygUgwc6kSTreoA5Pge1H8xq5W8qq5uGAyGJCjvoAW6Nx6zZn8nYVPaaE9mgonEYctvDdJoaGHyfk9jiFqt",
  "key19": "Sg75mLYX5Aie6gXjbz2U72on6ZtGSyQbiDe917kpsFkWfT2L9UvEnbvV9pP2JEkfmi9AfKtZFiBvHMxxhUwHNAE",
  "key20": "4v15TYa4pGqWsXYvEdWqjzvgpHDDb6N5TsGLwU87xhd8d6ZE95PHE3tVGdj2VRgeER6PyCv9XhvFe7CyDicCdRgP",
  "key21": "4qWkHLW7XnMxgduWeP9mtZeQSqo1gkP6PG6wkENoHKFEwyyvdRiEPKySUJv5BNERYMDt6oYcazDfgYJEdjNaYfaG",
  "key22": "5vNHJeSpN6dMLK2sF45D5Hjd4KKF7p2sGW47YJpwMLaDw9GypFJRQFJC28WsM6hR8BstKzAQgE1fpy2438HsL5Fb",
  "key23": "GDtTvPVUXcQJYX63gWmUUZYetDtjsqFQWDBPapLA4Tg3xFxiPRnGTtn9KLsuBCLyhZBu3MPJpbDbWPEgaaede8j",
  "key24": "5EssfbVC5uuw2FHeX5ZXxgRrnx3BT5zSELChG7E17v8on4TdzgL3AdadUXJvzPMkVEbPxtzDFGBJNzctutQGrk15",
  "key25": "51i1Lur9qREnNBK3QTStqxM71XcqTcEiX5FtjtcVoBqiGWhW9qqMJpA6vjgDTNRfRPXqpCFFQKEfD6VFwXuJ15TF",
  "key26": "3HtjEd6guPh9821NF4HoAWfusRpcWnZePdwJEHGacGdGwCBQtKtqavTUUYdsT7jEdJA1YCpWsHxLPqrXndrevm8g",
  "key27": "2Ayqtruea5mJraY3ESbayFRRzvVohFjtDutANw1N41MjdFLQzmiR1EjrZYa91srWiEzm8KVdtB1GAiPR9rUsrzyN",
  "key28": "2oadPJy1CnzuLLd6Jyp1qkJZ1GHjHogbBG1rTV1AJVc91gXt4tPWWVCRoKmqtXvGFH2rRSYmuNmEGTVkJCofW6cV",
  "key29": "55ypYgajTAQU1NbWzMQ6kVPHbprdE3fBrcSWcHAXP9chxeH9dW8TCVhzqNNyyosxCM56sq8UKkVSqP19zBzWgbLv",
  "key30": "2mDtrBfLQo68mpTViFRYRxZ1kcUtaeZ4tPfMWqtrgMuYQDMiucpeHmXj1vdfof1vgFVUUbtN31TGYz7hAPQHZQ9d",
  "key31": "2yVL4QnFw4NbnUYP6c2vPXK6wK2Nvaa6LbFQ736KcZt2QpHQ4XLsSymjCK7K5bvKVHiv8T8HVdBrqtAuU7SwSrJ5",
  "key32": "59Usr1MTZVwYHyKtiYzRAJSLQTE9XqkKcBCwKhZWwsPvWTNgPGgVJLgP7c5ecuRMrM1V2ftiEcWmtNvKZPuZMty5",
  "key33": "SC2BUBX4afbic8oaAXXsEAivdYMhautVL94z5ovmrxo2Y2Q9dTRCC5tZEUmqfjoPZTGRgMeRwhWV55z4EEz5GJP",
  "key34": "2KNnwRRX2xGgMcKPRpgJAWB2tQq13aU2J6EvZafpQBCFs2eNpDvZeMVKhsRc1jpTgBzogB2vbgeoNJUGcydb29aY"
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
