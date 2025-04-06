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
    "4JRouGSu4tQthCPZA2ZhASL3SnLxijaNgwamNuCtABe4gZHx1ZwZ9BFn4v4Ra8puPJjKXymMDNRL8amwNLxXpw7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NBKLusSDmrLX2NxeUDbe7PnZUwXuVtWhKCBx7eDwduzwTc1zjAxKrJVbamTXBnAePPNvpRcpxdVVkrP5zMgu8at",
  "key1": "3sAFncxJb8LAdE1g72ppiaVMNC6cJfJmMtBVyTfL8XcxUjubvD7ZFiXstHygDK3Xc2PjCkRM8SCM9xDMq6NNhfxT",
  "key2": "2cqZwrnF6D3QtfFvYZebYsuL3AeyKj6KVUz8GJs8owhcunjVEm2s9RdLLgB9sZoaAspnGsmeXReVtmq5dFyAJ9v",
  "key3": "3cYuy4CQb3BLEki9hX7CumoQwz8unrEpmjfBmDoNKzao1MTah1Y3LAtDveoVTRF4xcE6heTbq1etFHCnQAQPrjk",
  "key4": "24tTjQiTrBUgbVRRHj9PtCLTe6sj1HgQfJiS28VVwFU8HKr2QXriW91vHTsM4fVBoghJBdvJm9J1unrck5fFP4Xz",
  "key5": "4L2BHcaq3pz3YZQ7Ka4PrvgZYdcRkkHqyh3E1QrsUUF49hpaVYEGuoQctPiAWZTBP4BDLJYwNbxG8mkbPsVtjKDA",
  "key6": "FYe34bTY9ePgbMkb4wMj3JBWygUT6Kcubva4jv1HubyJXzfvwDNWgGH4nqeyCbLkTy2o897aHAiBckxAhaN13tP",
  "key7": "2DVyd2Mc1bKz15w1Jr1Z8BAZpEaff2NQJGzs1S1pJpoxv6dW9Vj1kczWZfNbpmQ5mShGGMBuimkFhZt4WHLjHqfZ",
  "key8": "4b3wJ62Av7CuvbGoGhW5BrZcVUVaHmDoud1TDYmE4172fGiUTwSook5EKMEGVXoS2uXyAfdh5ZpqhrxjQBE4XoQh",
  "key9": "2qNxCUKXFBqJ1Rvt9JFWSZ9t73uK8cVEWmQDGDRfBnpuY1Aj86rqtjWxz9ifsJW4g4qTm3wA8JmzkPCeCC2kpRLZ",
  "key10": "5GcgGpEGkgyNE4ynU5iAy7og8Yb5P7Vr5xWRJRUiD5TJwzeWNXaAkQyVHyem6mb1wMpsx5DE3s4zC4kmSZnWDE6S",
  "key11": "66pTFijpKW3JiXuA7Ma1q8jW3X3fRJuPGRywaKbmvX8MKTQg2NpHs9ij5iyxQXNNfq5Zhb3tPjfePM8R6aHo948g",
  "key12": "wVy3DvEikGcvJXr7gXecUuWkaGRWMGyeFYvfx3ECGjdoUW6yRvkNSr5PvcKSc1htLSDwWARE46VfBcDKqQ88For",
  "key13": "3tRwtJVqSJ6x2ncjxyyL5CkitotQB6qFB2cYNB9Cq1ExLZZ5tV9bwFdoskexm3zLEj76nhU88M21QzAfxCTXewko",
  "key14": "2bGiSk34fJWPg6Pz4DsgToS631odtoEx3tZyTqDKfJynhP6YMPURr6GWnGBCEk4L49v6FXpfsupdKkUGqAypag5u",
  "key15": "2b61SFHRdqVJWFYY9TfdMWJ4VUQSnh4vjeJcyg1oaBACqHKR9rpDV1xKKukNXxjWN5aTR9soTApJaM52MbahxGGV",
  "key16": "4NaQmUqPyfzJW4HuxqJPbu3k6M4h7G1jccotHu3hpn6q5CQJ5X5QvyS1BNRmWbkBZV1uzkcyqs5CrZeXyiHKY2af",
  "key17": "2moJHqyCi8JhAtSYB8oGiD9cqisserPXGtSvBCMMEPFNMZ8AW2C2Tau5eMWTaQ5jVyi6PZ4CW34AtTrG5rZy7GPo",
  "key18": "xEruRSyYYJzVDjeWBNB8dBAWmd7n4c5Kbsj89WJeZ2LvjzN9fjj4rYdgQPvCqXdF5EdCVafiyvybv65K7j2vLSH",
  "key19": "5kPJW7zxeH3Q6UtzjE3nEQLJLkimTaWpqp4QtVvsRb3huUzu8RxKw8TfuQJxoGS7TKmaLMUd5r3pqbwQqYfAPWC8",
  "key20": "2nQ2ZVRRv64XFT15SHdfjxqWu6aRtG7n1ur92Zb32B47gjNhEyKdzVRMWFAbuFGxvQ5L9K2yA28DbBubpuymWXEm",
  "key21": "4japoRtMWCQ61jnzZHu7ZeYVdRimSqooHUoH4S1KmjoQa1x3dMryz9tMdo9McgrXETU2vSk8mGxgCVoM9di1fYnn",
  "key22": "5WMccYQ3sPAFcZ8jS16zchrkFhTcmucyir9DC6Ns9K8eipW5UFAZiqzrg6ZQKGDoeBHZ76qQ9ZMPX2kD8v1HPzbN",
  "key23": "3C71M2weXeMGCW7DQfjMKxT6HKuMkKXLT6hNELExAxQL6e46RKUqWnJoFT7B61so5m4GQJU1aHK82G2up1bVLY3C",
  "key24": "2v4QDRufjSLnpgLkt4oDdSbz1SUR3eAax5cfT5HGnoK9U6LDkBDo1qA3GYyPsFqR6ixyd1ZUDg9uCYcyhKou1NP3",
  "key25": "3RzWTYEwDFLVtaQZ1YJGwRk1QE1GLTqNd31kuq2qNNjzyuQNYPz2hEXFsGgCFD3pPumP7dd8saW9t4qveyeQT6ZV",
  "key26": "31KGG8aCTvPb63aEEARZcgMG5pg23g1XXfYbeAX4TYkgUB9d7rEuPbzVMTVFahxqkWBSaJdvXwLteBbbQpg1eZu7",
  "key27": "4rJsyzB5LyE6MbvzDhsZk8Q4CAGLspYw1o5JAQu7uyUZgaghS37UXUNdMUFBFFVQ2oMrmKn2jD5WW3dffjqsB6iv",
  "key28": "5kcCrN7eiXWt9YVeZTVeCfeMHhbLM7bFHtyYqbziXANDKCVp7mGsjHpB9viHh2pvmR1WstUmPXR2UgDuYokheAxw",
  "key29": "23g6DTpqSBhXNPvti3sCX3ZSGahyGQcjNkm1fiYvmCCa1r6stosdfM13o8V7BwA1McZK1EQGqAPTS2PePM6zE9CV",
  "key30": "BmPiQCkztJMCfPHCDEp6vzhNjC6jXUGu5ftQXiNaTvbBKMRaYQriUpurrdMvrafM8zpGG8pVnsFSTirSvay2qwP",
  "key31": "2AqcXcmtyNdjce9S8rBW2q4ubHdwC51eWBkBbshHj2ar5zyqLbF5yE9v9m22g5on1CaYbZp6zTsBAauKruzTsRC9",
  "key32": "4ozf5EX8nBQ266CJpRrLicYtxu5EVPHoPhBPkQYjLQ3HJ7vMGSvfiwM4CUeMycqVv2n2gKv5Z7LfQQWa28S69KZq",
  "key33": "3deEeawUS51XhJUTTrsAqjFZpigRzNM8zwsn6JZRVkrxqmtNoPY7cCuVYmywpKepNwepV6wQbeyHR69RAHFNErY4",
  "key34": "5YgtztrPNrFSU7n8QbQrKmLrMDT11GwB4gSX5wwUy2gPXWUvreLKuHg9NtScm7Yrkbu6NcD3WXAEjJqFUDb766oQ",
  "key35": "5C4cn6TB6M2JPL811upFose3STnhGzU6a7rmZf8XWTos5aLRBLak6EhGphNRGVavw8uFsCG44Fe4H3zz255rMq6a",
  "key36": "5nepjwMszUCmued5BjtNtPMuU2GEpFdMfdgPqFajHoSEb5vb58fHMFx4NshK3vhPnH4WZEQ52Txx4hkwXRtihF9n",
  "key37": "5Yk4h18aWDxK1Vsd4rpxRs6srcxfmCgCcm9tXUVp9rcSoeU1e5eCwQt3G2bV8Wi1RSnt1vd5gu8Z5FqiPHQH3Jjg",
  "key38": "4MMGn1hFFPQNgn1M4mXYwdiG5thEQSchPPLGpMN1eKvqkov1cvxw8FARuE6sQDjLTw1ovXCGvwVhgAGQfbbsq7QJ",
  "key39": "WkvjYndXcJiRopQQeB6xp7wU3L9mfmFnMWTdq5fYpAM17M1xf5rPj8AFT96mh7N2731HkW6MHCyFir6WhrLi5iS",
  "key40": "2zaUW5LcDV1TguUzQoW7piqUBxbfRMZhCkuj5mw9phtPTyEdKvsSHYDMkcB3udCD3NTs1NRGHC5ar2UNKka9XpP9",
  "key41": "2WCwPbXKAemSYyrp4aYfbe4xLBc16t1wS4nMJa53mQUikD6sKKZGxjEZGiUtz9hkeDcUXbVwjRyw8qhnv1GJ2rzp"
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
