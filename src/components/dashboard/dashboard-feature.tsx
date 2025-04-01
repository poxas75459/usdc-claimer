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
    "5fk4UxNJjdbGgj2XXqfVC3m4ZPjRCKMJXgKoFFqkk62hjqg5qEiNM3VhUBsZ2PeVUbzGhhJ73jT3nRJksahFn3DY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PQPchUozZtNgz6FBsbx5AqsvRmkcT58YB8MN2Mw1JfZdSLqEWR1p9m8cMcJ6ApJDp6kDdjxY7eSrK8CbJTcqD9b",
  "key1": "3dZewaRY1HidRJUJ7i1up56e168K5WsVKoy88wZswsMJqEACUNcwABWdWyUxx7RBMUFnhRdBg18VmxXVbfgeASpg",
  "key2": "2GHvJXcrffCqJZWNaf9vx6ePidhpaaRtLwuCnQHPd27ykn8tbTcvr2x3DJE6uwdXBZpfKPDVJRxA9HkTvSBTpyy5",
  "key3": "5PYLqvdrdxUXwosrNydfGojV8iE6yNkyzNaJh1f9wfCSb2SDrtBvjMc9TyWqWUDix4dBFguZfC45wFTftv9vn2AL",
  "key4": "4VU1K84W6Va2wAKH4B9yvBXf78j6K6dtyHdMksE9p45hExYRDanEcj4WPZuhtdztZF6WQYqycxhXuACc8Y1caLLq",
  "key5": "7wYVrA6b2QYTrRDgioRrgjrZn6kwKDVL52yB1jvF2gELyu6fab6ZZiN2Xc2a9QcVg9xqSco6R3J6D86Nfo5gSbz",
  "key6": "2bya6AcwrX7C1JtcaN9UonwS4ujP2NKAqqQuugBGxhWYPedBhLBZuDFbRKuqXuXunNwHzzG2caDsPpJrQsedY6hk",
  "key7": "555jE2kFypECjvjQ8zKMgtVwRAUgNYdxBZc8uwP3LwPjMLayH79DdkAhQYRQ1h2XG3w1DBAKLgkPBMp1edbnsAZf",
  "key8": "4yAFefGdgHMNJdR73GCU5QFveYhpRqVD3QaZ4gPG2ALusc7q3KX7TZcbN8byG4gNVkbfiTA5wjAwnQHJhzpsx9uA",
  "key9": "4yHeMiaicP12WwEb3Jtacjxvufsy4erBAbAETfhARP3CnN94QPTA1NhEQe8cywWeFQc5kqC3fmVtjEZDNnFrfcji",
  "key10": "4k2ZfRCzgzJyvML97RderjsbmSE7Qpy3U24EXUitywarLJieB8TmRvaG2n7MbNSm6Xf1WyGgS6P8WqK548rqMMRh",
  "key11": "3Y7u58siH2UTozhtFG5vCL9R3qeWDHfL5G84rHmj118tQjf2uJiV4tfNGuMUQnCUgWjfF9Rs8TiJrVXvC8DCmJxx",
  "key12": "P16WtQ7SbouTs8kbBRUww3dSd9Zw2GQTaGm5JMKk2HDJKPiCpqcMbfLFekzc3JZh8cNDdw6qV5DXLXu8LKpT2bE",
  "key13": "5vY1ff3RaKdNpYr5gfAQGacxBXwurqbuqTDXX2JXrv8yUWBAcp316yqunf5pL9j3hHtXUnEq6STeR4DJPQEtwmmg",
  "key14": "4XGupuLWTwhnkbEnRpb1pegphF8gCwBJrBriFx6jRvEG2GytYr71cqrHFrHogcFfzy3VEM57nA8oedi5Aejv8szc",
  "key15": "5UvxGygKhs4QPDiC3rZTgeBgEgitPpryVN82sZntzT1MkSKaA1h34P63aKKUmtEnisF6E73yu4JpazBuTFVdWsUi",
  "key16": "5bjDcsUBDRYD5bBkopYAQV8roXMHhkiEw37WVYWidhTeLXPh1vBLzRxU9wuSJNjj4mnwZoFQDTfWpALxdf1DWYEE",
  "key17": "5nq5ZPBF84a861vUttzbWPiqFrYKP7bbxQ7MuDvWubTvY2c3Y63jWXkbhjNgY5CWs7PWnrHiZ9aRX7Z7WVd1SQvn",
  "key18": "3SDQkSR87eRWEgVg6e7N57tnjDzzVAZJaTQvWgxP9nF7XFL2D9izYoSb7B22EVC4SPTvqwYtmyFih3Mm6PL8fNjV",
  "key19": "4cDkz7q1MBqhQjurqmfXA2F3fvFrVt9gEJdcwQ2Y1ksg5aiWQ5VNDfA5rwe6vmMuzAHsNH2PZJUMBcLdiqyoCG6S",
  "key20": "2TAvvGUGRKmTq9XvDixF4NfVdDoKEvVoFjhSznADggWBkTTPvrUJHyJSqmBxJYotakk76Hn2UPvsGEx4iEz3igf5",
  "key21": "4oe1vQb4ivTpFdGxuMMz9AGMWzKWWapA28Zr5TPoRq11Mj4D7qpH9LRhmjzac1jU8EcuFeJ9hanccRP9QSh594wp",
  "key22": "ekeEpGkDcF1wVwwsDbFWZYWBMqxQyqqWLRRCxJeqhnKZT6HrZkMcpuzUgwb7sAEyx1ftrWXC95r34WMskLdtbFt",
  "key23": "4DgXeKEKxB7hzvR46X2QoSv448CLLTGZj8rcYL9eGiaKodsGEXz6Rj8VedBt5iJsjkdsbmGMn34D28EDkPgmo8ic",
  "key24": "4DaCqiCW1eUvYoWXBSYYXt4tpS2UVewz5T3XYP133NmPnmkgoFyUo9M6qXLbvoFUSNHAuWbGH9v9C9Cy6AsqQZHe",
  "key25": "2SgdsYEt1toeU2Zm44syhawRiuTRx8nWGEifsRmG4ED51A3ithsXLVD1wwbXsTordnjPxWqxWtR12X7wAfEEwv6p",
  "key26": "39PBxjwUNB4jU95MdACHmfDAcCaR9Nu8xYKVKZNVDNqAtyP5NGVxKhMtwUipTz1y6gzsXycDHXLQFi6R8N2kF3em",
  "key27": "czd5acXi9U88Cbn59DY7R7fKEM1p61Mqdz5Qb85KAqR6UNc1Ym9Sh4N6ZaSW1Z4p934Xu6aobBgHiWEcNYCy8Q8",
  "key28": "Aga2gWrKKYYnPNGqTsnyJbxF9yRbsN7RFwR1KGaAsu212gjNmwdQLNkRj8mHaqxF7sRns8XVEU4K8RRRwKRYhJn",
  "key29": "22mRGXEsENHZgtno6sDt8utgND94afPta6tRPtaVCHzGV7RB12qXaguQMQA2H2Tk4xuKa3pwBF5aEKsW5Kn6qPLz",
  "key30": "3J49k9Ds3QmZMWoXdBtCK2kDK5vpyJuWJvF6JwQ8CuUsZuKWYQpDQW8BU39KNf15GPqEFF6U6Gk1pbsaiG5xThaQ",
  "key31": "y3thotvPdiC5xaB6P9XKwLTyYTJsrprXTnTpeHtFFXCzjYG4u6C3v55NHMeAqW8SZpFdt1C1fvbZ6zCSLmRtWFV",
  "key32": "35dmjG7ZdWCqt21PSY2cmuwnGuDTYFRjgELL6gRhQhk9J8SQPk6GDSgDJgLqY9nyNpwMbGd7UFsF4WwLxAqXHBQi",
  "key33": "PnX4bpF7yuVcKhPFSJ6gbS34TTSehZAt5ie167T4NcgAzdavmS8Kdh5wjuuzeVMu5c1dwJaxxP9Aw8p6PEpTMzN",
  "key34": "4ho1xK2RrRm8YgTjwJvHRgTo7VERx2KSgPBTq2BcuJokomjoXbeZLAp1pAadPb7GRdZcMyQFpoZe5gUmunngQ57J",
  "key35": "4b1i1VRo7RB7FEt2V7GaSVyzkV87YmBF8SsrR3YVv3ohjtXNtyLSPnSXovLTTb9N5B9ZEhm1qj8UXbXc7XL1dMWk",
  "key36": "4cG3pxnaSkihQCKXeAxCeUQqeEYdAjWV4YyNJeFDtCNnRJrqnA7PuhK2wszpQYSrhhjee5sUbjdJArSXcKnYQKys"
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
