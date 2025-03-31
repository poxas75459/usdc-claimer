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
    "5m1FtGRjRKF8NZKZMruHmYhL8UicmWJhduUDhTSTwusTZaDc66hD6TZkJQASnVjLocornzdTSNF3WdFWBbBJDwLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QCkQR3FoCWBxTqUrqqZCFer1Rcay1uanWiMmMg5wnvCNKjvhnaioUREcCrVTp5LXZ3Niuzzqgbo7TMXaBHUcmaH",
  "key1": "456P8tGzz4joaSNrs5BE1Ri6k4ES7t24aZtAo2JB15WxX6GcYsNWrvhGqavxAEKrFALE3zZqjQeYsevSY5msECiX",
  "key2": "3xcbQj5tC1PzbNQu2Knss4cfMHkhNpweb6RiySyA1vF7QhMv8bwVLHRqgGwYLGKjYDchphAJ9KqtADkqErPngeuM",
  "key3": "4R4vtGhWsG7zjexRQAirGYtL9sVoEUTmZHYqyvYsh6XU27KdnjgQsgsYJuhiz3FBpizHx3K1sZELdLXJ7uLfer61",
  "key4": "5Ti4vj8X2DFBb4S856BsGBY1KUqS9UtjXspZFdFqjfELF5ZPtvHqook6ptFRmLHS7RQB1yk5U2MDNiHcRp7oDqXs",
  "key5": "3KdXfRKpx2n3wZsmdEjpTaP3wKfiEPkkWnjzuJ3fEsquaG5hMTsPDrQLEZFLmf9rE63S9MNCC2MZcS4oRDzGdMcM",
  "key6": "4VM1QcmHr39AcX1HC8KxTHM3YuTMZdN1NGrELBP8eGYRuhboUB6dYvxtdLpyzF1NuwPYE9UZk4bNpKjZE2QnaFom",
  "key7": "4AgSHVV8T8QdNdZMrbzwnaXxf3uQkyDrwN5fEUH3YYv5hwREU587b4VvL1wWYWPNUwUV5fLcoW84ZLmpZyrdxk86",
  "key8": "2j2BLxUpiCJkKhAzHJJsamvnLcQjvc8xMXaNdk9je2Tg2aDJG7uQykRM2aZVcysNYSVDoKtLXnRNHFK4GEw9R5e4",
  "key9": "3Fr8ABf5EGPYvzU5pX94FzDnFgfeXvrsB29tXY4W3ZEBk7J8k8KDGFBpdj6ZHdtuE7vzDYSpKNMA8fonnqhYRVv2",
  "key10": "uekGQrDpg36RAABBRedji3e691Ejtm4dtF7YGWYGVKChb942zHY9E6aqWgrVukgj37xUiirGvub3WBHDmjjACPr",
  "key11": "3ZJgXhvF4PVcS7aaxmGaZVcWyT5UYZFSyuQoA4NQf9YKnMgMrTotfyyNW94NpmsFuzvgxmT5YYBko9X4arY8HnpZ",
  "key12": "3iJ1arLzwKdYi1Yts3xfPz2ExM1tWYB867aACSZyJsfAaMb72r9Q6VdnUKQ7rby46x3exHRi9snzUuDQ6fA3Tbbu",
  "key13": "kd6nwBdSiRBzCXuK4kxEdd8akwh2wutkAs4gj9TPqmxUFTvfB5eVCqVHDSQyD6K1nrhct9hqV5Vgdd699jXwQeV",
  "key14": "5WWB78nkTmg3f4zintSMXQqXqQE3N1xhdSGgfkBwDKFwh4LBCHjcQ7gcNfaXYKtcbBwKWPTk88ZKAF1ibQ7V96X",
  "key15": "28Jiz6JzUxM43gWtrEdFiK7j2H5CTNaC9YmJH3Zouk9WKDDUqkfqq6wBxP63Jy8rkTCRddLCitRRH3cymfXmCiVL",
  "key16": "XgUt9Cv1LRmQTG42r4swSUY5DGaM8eZAVg85B6JPyTWTWab5seNR9VKxA1QL76u1r9RDZXnayNteTKRXgRz3kcQ",
  "key17": "3Rb2kCg1kf7QP5hGrRVegPvH4ufc5JxHQYcAzD1zKN1tFiBzYboXZsEV4uCQZHPZLVxDfNUh2YJsKjQUVkGof6yW",
  "key18": "35pqBsyaADe3bwKTcFnj5GuocodqyNtP7CiqACEzCHEHnfpeS6jKPxgxJKNMSsLMmMgBAWYsCkG8hWqYLSWXKbbw",
  "key19": "3mivo23ZrSdY8Tke8k5cyeJYf9ZAtCFYfa1dTDYEDvMJbHv1cs2GKn4wDRwBNV7i46mDFLrPhe9jeRuP5QN3XE86",
  "key20": "ugGYXU9org1dnfgaSqRCMSbzEtr9cW1qqgdm9oPc6riF9s4AoeeDgJjfXsuTzsnNaGQTaSTj9RiwnMduoxwECqF",
  "key21": "4EQxN8CPEqnacgiQJ1k6nnpjZWpf3aTms828dUVnN6i69M9ApyV2PhDnG3nUCgDczN5Zy3rXorSJevaYmW9jFcGX",
  "key22": "3ASDZnxFJ6tkBS3ppuEFSR6mZ4e2AmhCnykmDoqk6BGVK6QyXxCgEie8yJF5Njj3fEHxB3NmDEJt9FwrsU3RogWM",
  "key23": "71Rh6gmQvzG3LjzcbbxmscUj3r7oicQdV1SynDTRt4dTvkZS7aXKVYgBZZgdXHkxvXjrzEGgzEXU2JBFiSY9qqY",
  "key24": "63LqqxzqXiYkY6uEVUKQXzkEAWGG94D1sAHWtiNU8tLbi5DJ7cCEegGMsaWMQnum6umzApEMkkfv95gTwLbVwDEW",
  "key25": "2L73ukkj5dKsivs7Qv9TP6Bjgh2Jtrys5BUiDM1Sf7cG7XnbURJ1seCCSbg8WpgNJ6PLjJq84iiHpHRi2VTJ1Zkf",
  "key26": "3g9oEXrVp2iyh9TvALqbFNmcG3tnwkzqQoeVKC5LfGTccNLKRqGtkEc1J5nPV7LTX3qALCzYGS2DCURPnV4WaSoz",
  "key27": "4aTmHhLvvEkc6hX5yosnwg5G7J2S3Zx8bY7XMxZ5ZjZq3XWyL9RykHLcRymVTvqFcnTqXasty5aoF85Kc6mDEmEP",
  "key28": "67WLBEC82Wy7vb5zFmjomiQSk2NSZ1fbTmNndDxod7gi4vR4JrvoYvKZKhovKFaZffxovmFzRGwKrtY6s2uky4TC",
  "key29": "2YJfnCqf1XVig2Y98NgNGYMHSkhNToNTyT7XjA7Afiem7ayau4EYcCWyiCAHtcfprG16dyAvRdswtdVNifkum7j3",
  "key30": "4jNU8LjioJAXcMFsupLXuVPpaBcsoWNY9TxwDixg3aLKukVSYMuMKxALSo4eqQWmVb9AGFF7HbDjxLZsnPNUXWoV",
  "key31": "2KBkMTVW2UJodT7pBaZY7n7Wz1L4odcYNWe5RY5JGvoFJrEnyzHKkHTdqHjzS7evUDY1qTHem3attvPjcgvCauN4",
  "key32": "2TX6uV318VEbB5HDVqf9VxDmVAAUzjXWA55btKmf1qmjb26A8nn6nMtQzpcDz3wJxVouNTBFYMvhmemKpDZvqsSx",
  "key33": "4ZCJrTEVgzab9vfydHe28yjbRRjFKmTF2BGKiB326KTPLkcdAqWcdfcEeWttE5KHappAA99eztJynSUHyZHinnpR",
  "key34": "4AZVgNJx5TaXUamsJea4KtLYXiGh2AXgZqQLCW44cgoVRBHKCC6QVS2Y1dBbY7ouRH3T7FezpK68iKzPyGYYAoWo",
  "key35": "3n3c7RqmtnxKF1aqFZytTQ3QdaFxr6wydPonBnD5j9QTykLEedWJJYa3ZY9GXjdcKwSW4ZUVijKxyZNzMyrfKzEZ",
  "key36": "7zEwbrvQsHL8Dew6EEwbV6LfB4A8pbRrTJ7svq5x7KQmNGEysAL7KJjyEbkJFnjKS6PCvFWmKZZ5z3UYaP1YB76",
  "key37": "5NoDDrQUmtbWT3fRVx2ARdR1821GH4N2AVhsZ6ce46p26LQdoRT4QJ5Mc4fKdDgAFMptkC5JFVYpWhHdCCXMVd7n",
  "key38": "2ZYkrTceesdvMGVPQHesP4f3xFUoAwJXCqpg7mMq8bYXf8AiSFeZz6BkKs4y4pawkqHoMXYRqKeqGrd6Cem864FK",
  "key39": "3chFTgZ4JmhTzpv6bnhei6KqhpFjomJzH4x5jGsMteBdXyHMhUaHvPdMZXLHLeTn1bprpRx3vJnf2YnfudJMWmMf",
  "key40": "23eDmGT1BVS7NySuaNuoEmqnaE2daRhVuhaWL91N4LFZtRGLN5i8ibrGKnozgFt9i5vBBJB19S9D8tbd3ACoWJT6",
  "key41": "2ByUccycHRsLeqH8PQNLCGWUpqDAo1EnC3HEk9t4C1AGqPS8mmHNfa7gLAgLZRXjRi88ZwJzN9Yr7a6GyASr9cCN",
  "key42": "EfTzGtX8zKECLNyPaKMZrWQsHo8nnjyzQx9QPDnMht326HTFpc9obvgPzPViHM8kaPMxNN67hyAnYMG3ZyWKx2e",
  "key43": "4Kr3UWVeXeNTVdQH1tgwa46aPgVykm8phUZ66m4tVrLGY9JViFBne3EvXfTJCMfkUqdvyf5hPfn8EPfYQ7ARJNZS",
  "key44": "3ZqPnzveewhSJE3822vvMtMdEGeo714wvHTF34JKLHzgz71Mud7yjr4gCUZ8KV1tzGTcx7xWybFxWgU2t8FXVZva"
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
