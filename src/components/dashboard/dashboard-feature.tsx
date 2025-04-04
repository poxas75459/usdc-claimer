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
    "5cnEhER1iNdHspe4DAjfMvF7ESX9WnnYoRMjji5xTorVuDbfRj4k5HmnPhacr54ox6oXAtZacUi25edNtwQeTrKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23FeYTgxqN8c4hYzDxMv1kBdsasV3xB6UGGznSniR7Pxfb6Gw5VUXKNLLjm5tMFiunKHMocsAM9nq9p6matMHWut",
  "key1": "23zkusrcYvN7xNygU7XJNsfQ9YJzV2A8BkX9UU2au1rWa1mg8YyBjd3Rt87UvzGHzqQyzaaqoibtjPrqGe46Mktp",
  "key2": "4S6PYoyyebZqTRTKqcsoknH6FYVvE2Y2U6EKrNLeDWjgSwohfx35e5q7XLEXWoVh7ASPgC4EuXu7ZVUBc5e9PLi4",
  "key3": "2MWTd1WeT3ntdUg2pf5anf3j6HxpiZpCt3tmJHTZWzsN98o1hP3muA7MWeCPe7JimKUzhjZHg16rhYRBtQJreh73",
  "key4": "3EPVLgeiBQwWCueL1qXtzLP1A8wB3MCKBJdxEVKjx7vt2j5RPJCqMjrQ7LiucsVgaAv4hPN5FcbBLUsaTCe7m6x6",
  "key5": "3CiGozR9fGuukPmqu8obeDaauRt7avAo45zCiaqppftCZcGgjr3yCEiPPLvQKXeUAHWmDD8fEGSoXnvkhTbUwxwT",
  "key6": "4LLDvtyEEtbLK6LZvHnaVFKxpQMBgUa4J8sTmpbHHumpAQxYVML5PuHWA74tZYVybhTv3ku5bW8BXac38E2eFHKf",
  "key7": "2BnmbQK5foXbxPzEaLXjNzd25huRYs2nkqC9N16BZkxPuqRLNmN5z3M3Lu96LQiFs2musKHRtxW5g7obZg3oP8GK",
  "key8": "g3MNw4kjGMgHGxbrnQQgAE6WoPXLp2ueEYBHCV5qDhh3fMigsCaeRZDqdyZuKNkdrUd2NRav9k6ohFK6rAAD5y6",
  "key9": "4zXZNUHDGdtXttECA54AVrM5qV4SnNkUrx4s7ee7NZ2rpYuWutPLX7ZJ3FF4wiSSqSTSsnnN3cFXbb7nEZpEJVgT",
  "key10": "5XsYjNpTDsqjiNtiwyBBAPF9GHXjoYorwGS2R7NBUfEbxgXnurr8eD3M1qR2DSVGDGB4Th1cvMUXMUpfuJpoWvNS",
  "key11": "2h7WZN6STSX4eY8KQHMh1Jw4XXV4dWMznNZw8RX7hbrquiiQPb3Rdui2jGNw33YHyZew9Zz9XhenPrGF8r3oYnaD",
  "key12": "5XvLRcaR5NyeqY76W1yHKJisMiHpeBVReoDb2nUyKGFqAGVdr5NqoayMogfgnJzSaq8EvxGYGdNWwoy5T6LGWpZH",
  "key13": "MDUBC2MYkfnFVLfprZpcuu4nhXpTPXJkgLsmbR1JyVY9487TU5NRUy3esg4tGcCYmKybcMvdWcCKuPGVWAN9ZbB",
  "key14": "Kxr7x5Cq2DRXkcCKg2UrwTJB8bDdqqqcxcf9EjXTBeM7ft5unyaqAVMGzkgBs59Eqwn1LCnfuLbJjjJtZnZHrJq",
  "key15": "Jk7bKgCABWQqS1WhisxdmvfCuD1KmyMFeA1DfZ4pZgkPZPsfy6YugFhuAKkeVrHaLALSY6qTyrGP5bU26c3p3oN",
  "key16": "mqpRUqyH7iU7sqRVzyz9CQ3inzwAGyodXzddH2qKtZVcWYdkSmMK1MT1UoGJMYd4sjA3YdxycfjGFGVsSyybQ3t",
  "key17": "4Zh9EPcYPBY8VDvvLDarFrig3gvXMhLka5TAfgR8csZ2ULTiGyauwaGEduCZv1m6nDrrpf1DbRegMx6hSfbKd9NY",
  "key18": "578ar3BqyST7xFXA2bBfkQFVCh2pyNHmZC3hAxskUWpcCRXDpP4WpeH53P76m4QNqQEaendJMRrXVCagZJKqSqvH",
  "key19": "5TdPWgHxBrnEdbfNDk4MPbtGSaPfwPKuemGMQfYnDLCiFrGvtZWLcN4is1EaEW91CJ45FUii6K2NWLmpgdhetkdv",
  "key20": "8CDCtg6YHKStE2FvBFqiiMHGjeb9VR3qPMZWjShJznm2bZH9hgrY5BxjwDAxFjuBFcTk3VR4FR8SBdXnaVtNLrJ",
  "key21": "gkuEdE4zNwMab7Kc6YQxtU1J7BrTt5G36YToKnt4DEiAkBgxERWTzU3Y2sHfcUBZbC5JfMGJizqdp5xKFy6UuaD",
  "key22": "u6uDm7dN5VTx3tR1L9vdk5dEcwmdFthUsxzKVBDSTwKJUZAFU647kWJ6VJ4TJrpoVFCSfUUSX5cuqnvVKazyVia",
  "key23": "61QTLjiAH1WEXEsSAjce7WbvpYSPZaDoK49BTGZmoEwmJD7SfUM7yaTCGxQmYXSDgvykQptsBLsnzZHu6PegQbCN",
  "key24": "36bqfeGBov269ERe9NwmTyxjTJtwoBfazoEtwfeUfSBhMUBgwdoCtafzhiJsGd88tj4auovYp18aPZBFFbujr5u7",
  "key25": "44WFX7o7kYTxSQrvKCexUb7p2Z8dG9D8M5v4EMTXZiofoZueHPGvpNrHyruosbSz3HC9wzxp7QiARbrbJDqerou4",
  "key26": "7FmZW8SHFk8KQcMjYqnCzfDUy4oYVdk44jRcdbKZxJhqNGESqn6uc2wL23aWDWdHHa1QhWJoAGoXyUNn75KgcZZ",
  "key27": "4aBy354Kvn7kvjH85kFfdk4ZiwS2z3WTGGut5aHnGRqddEjNkuiS7txhFurn6wM3uE6pxjo65keCBYSiJEy5YPVL",
  "key28": "5aB2VREuprwSCWLWbEtKkdYz8N3sDdrBjmXMNJQ8jrtwVRW7FGnhZEQEJGKK97f2Vqew3cRELLW2dFhWt2fXkkQC",
  "key29": "2BURSG5qMLVWoMkFmf4Vu3QdP9CZBGRPQuaTYMFTf7F374nitHXj1JrXUdLHBoZJLTj4PzVAG6VWfEDaDcvQcjaH",
  "key30": "228e7NBuNxLk3kZuATHV9vTRxURicdbyLMKbFdZVf8hvQY5hMKs6w5iNafFAEtybV7bG5vKEDYAFwWPj1oPbdip8",
  "key31": "5infder1H3CMRJg9zW5fuwqt8VCxmPAziz7WFVjGvaGGVEd9oFjpC7ixw1FEop58oMGqyF619qN1J6BvXjt7nvnM",
  "key32": "2XtG7V8C5ZhuuQgn2aCApycfuzZKY6r2uRhEiRs6fhTN77oWo86PMvGhF7EBoLoiWSRJxubCBTGDMHmwiBcX7BRM",
  "key33": "3kt5wuHy3gFTNDndrPhj4HTNobjqp7BTpEbJ4u38nH87ftWNmqJxExSYjUF1wxTnHb9yftd4HTwq2wv4pWXihrR4",
  "key34": "2Q1WLEVANNut9jkupi4ZdY3XAUhEwWxHH893z6nkXxj2jKpaGM8XeMjj1rEjCFGEkkZagKK9VWPinDbCV4Bp8KuU",
  "key35": "37cA11yBKCdMHc6Ycb6Jc5Sy4jyajt8B5RirjcQWG83fDcTb8rqDnHCTmRoekqZxN2LzHbBsvhF2Y34VTLwm5oxa",
  "key36": "4RxzMTTjemc7b4AwXAHRKoLpERjfQQPBPnSQRHDGw2oACQHzABWyPkxTGTZPq4TxysWdCuuf6bQccR7kkm5ztXer",
  "key37": "2ZrP1fbMrqVffcCq5qwebVGL6FRh3tqhQGAZXH7rduhTvhCBLjrv693Xt7hAynM72jhCnFALKKhV1WcwHYhM1nAP",
  "key38": "24t4KZ4d2J6qZ1fLXWcEvULun6bbQqymDoKpqb47m3Z4ZK8S6WCdGQasY8zTRPKyRaZwspFNoXoUsWwG78CcRUPj"
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
