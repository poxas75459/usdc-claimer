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
    "3vdmq6qbVxjpfDeQwVDx3ebWM15JqU5aLHZeMLzycDXygJEGLDYWX1c9Y8dX8Cd5TzJkbgFZin6VicKsGFcW7hX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CHzUYWgYvRFVTt4Y4pCk6bYwJA66P5ynBtbEZbbR9ZaLR6wxAuf7vPUR8GA6YmXzA9EevcTuHr1Dy9Kybe5diLU",
  "key1": "2AtW33eSvxkQWtw6GNK4yxrPS7ktPLUEz2ci6iQLxrmsqJjxbA43nv8jMf7pQvavGeGh2xUREBBV9wseVEqJVxPQ",
  "key2": "2ycqUkUW1cSd49PM4t68qyAczMMbzeF8aKviCieUTDhT7Q5q8jBTcdHjixyMXVMyRaugkgjb5oa5M7Xs137KJDWZ",
  "key3": "634hXmyqczZJjDkSDscxiuSVrzes88K6f2UQV1HHoF7sTic3mx1LSeSX5cWakoXnER6NaC1sK2tEUuMDyNnTpfNn",
  "key4": "5WZLXJW5rVwWSbrB7QQfr931ibxXYbP8T1xQBnxQcVgjTs9P8oVjpLcKAJQbJAcRgGgUG8dYrqLGGz13rxqEvty3",
  "key5": "2p5gjtfCBZtqiG9LCKzkCWaqHWpDTquppHCWtSbPqRGvGor7qpNHGu91Fg1QzKRiTjeQHmWXMwMsm1EzbUJTXSEA",
  "key6": "5vvujUg2svCvX91eeGJCohnrYUamsQgp4pMsv2pQ5xLrVDEcLv7w3EtbDGs5F4sNpnjibPAzizn4kzyZN6z7j2SF",
  "key7": "3FhMtTe5Be59jX5c2Q5cYzMRwMfqbz4mwuToKbxbHZzRd5PisM8eeXch1kootrVRwsB8XYrPCDegRpmAnXjgTzH9",
  "key8": "3GUryt83LTsAD4JmPPaLi3j9MYymTyBCMUHqZXD4bD4dGJ8sjaZ3ktnyeiSYpLEfH5h3G9QY1zuXKNYJBZYaMsFg",
  "key9": "2G4ikJuiVqqops2efyXhnLbnjvhzeb9nKpeHq2zdKNQAXt7rad6nLs1EcnpVcrJ3YAkGFecpdG5jaB51ppM7eYik",
  "key10": "2MxuqXj7EkukcUxb6PK4KSEdfJVcXA8pnS4DFYjvv8FTqDPTzFsKaqjUrPN1SfLJg1Ui6vHDmMJEdPHUXUvDbhJA",
  "key11": "J21mVUk11SqXAoWVNUAms779PDVWejyuPicrLFKYmoMCCb33oCrS8q4j91T9iyyVg1vhoNmSS6PY2t9Uv2CR9ZZ",
  "key12": "4dF3QKtEk7xSKWStUcNcNAVPrwCkVVPN651zSPaYQe9YDZbn6RZAzekCgsxWcxmVXLuSA6iKQTz3J6pcom14E2PZ",
  "key13": "5HJcJnr3Ucy3RoAZtopnkVeNuiDikLAFVmkXSsh1p5B5WgEr7sXJHbbaT8YyPHJqXXHASVy2ovLMSjqxhaLsgz1w",
  "key14": "21bgjb1h16ttGFk8z2sMrz38Vp6ArJqkmvYkhqYP5YgszQbMseXaib1JeLSaYMPZHbKAT52rDwnfUUxDtuzDbXHT",
  "key15": "4CNdEBfHKtFDPzm4YYLbU7vp5sZMGYEJYKMBAfrimYzF82nisZeU11sW9ymnhsMjqaUNkswaehVAKKR22Mt2yYKP",
  "key16": "4MjB8uoVMHoR5Kb41WHn8x6HMTF8oJN8bxhzRnabvMadaQcBnAZ2P2GMEAmxgiQ9egLtFvGbuEGwPzgQ71gE4SB",
  "key17": "66DerHiDB9cdgUUufKmuKASvE12xuhQgAL9A5ysdujkW86aiLzooD2Ba64f2b18wBUuscXQrCz1a84ZsY5z2W81a",
  "key18": "Sd3Sa9c4C4nLdK6bXwuuUQQDQEUR4tU5pqYqDJKqfciyf9UddVNPVSAG8h4Y8THXbweRd9tVRxRTsyNkhtm4CEw",
  "key19": "5vW3VcSc2hf5ZQNaHcZUx3ZZf3JqsMHa2vBAH76y1ouNVXgn8SeLjRrpfAAsLdY7kiz4cvRt2RejTWDLASX5ort8",
  "key20": "3rvSj2JCvxmz94UuG5S6JydfWCZ8smpwqzY7b4Hxa8EPmbBVeSHURvHMikFDZrftyZq1WdkCNXBxw4hM2zCyMeEY",
  "key21": "Mw53t1RJ5nQ34kypHXfnC92pzmLYKLZdrtECTDAd5oVrETdqVQM1VqDxxcZqtUHeeHCHXp4HrXr46QZj4sUJHMY",
  "key22": "3QqKNnxxaouvMT5yxxMZh7TVya2EWy45LBf4kRj4ttxMgkGCmPA4oLEAiay9kcVx3iA3Xeuoeoi9iYz8vBcJkTj9",
  "key23": "4dkmXntSoxmXfWUvCjc6MtozznscUjBSz4XuA7U3cDbwmLhfVaN24bV6gMiUJomf9VSwBD2EJUuqQBDzADkcr1aV",
  "key24": "2Mzxt1Y4T8g16VgXGCYga5z3Hq6ECoPaQXbnK5eiNJKqmqjpkTqQ3AV6xBTJWMAbt5kQ5u85Sjtg1UWfukQ3cDq2",
  "key25": "3t49PuEvvF9QD2xLvQfYavEEH1cNzTyqWjKUGTFck1eouDsjPHnc4o36Rw9gbH8R9UBZkwbJdo4jZJW8D9g1PKFp",
  "key26": "3z29Usy2axP69wCgMH6YqUh662mfYDhpr3dnotgunuaEN54Sba7jyB2mGdgfrm6QUbxk7R6xPMUYBJExdMBSn7cz",
  "key27": "eg7E2Hv4W8h8Avtnsbcs1fiTmb7UskTvFQvdKLHSE896PkuBuFxB3mxEH5jDGqu879B5epqt3kqCN4zaMz8rPnB",
  "key28": "28t1WQ2cB1eLKLBv8RbLPDPyJnkxhYSN5aXwMfE2DPQPZJwHFkgmUHe42iWcWsf5uJrQvaYg7FCAZivQiTBYruD5",
  "key29": "2Ci47DAucPHceKKvHcCjd2Ut6mt1mnfeeWRoGr1RPvdCYd5aGGAUtrE2d5aWiHFi4EnR2w8zDgDbpbP4jPLQ4Pob",
  "key30": "5LuP3h31EDarp24Kh3LPh1oVtu1QiNsZgDHeghYGgRKxpMxveX7fYHw2vXDCwYj55dHoQNJgdCiNQkHGtJs9UA5t",
  "key31": "4fBfmSe3uUg9ZDSoNHDgF3YdSzu6gK4GVcZH6AFbzJUesvzPFcdGnx64WjFg2KupWwmK6PveDY6B3yfGTbQip29h",
  "key32": "5h9LqT2Se7rQai3Tzm7XD4dgUBgqjMCeoNqiiModYGEfK1h2jGFpaXjPdUqTgcKD2TPKsgkKjeahwSzNAFeh5rCq",
  "key33": "5CzzzuBwgSzSA9ScyeWM4ZVB8c9ABXCEE2gqi4Ec6YBhMN4bc2N9VVvMzAtP7SVSwkU2tQJazCT7QtpJZa5FCbBk",
  "key34": "4uyWXcehtYRL7fh1NNDMCUWbtJccy48tmXRBU8zCPsBY9pxNMjp2wwwGnYgzByKYyHJDUi88L5qN2iiPKNCoo6dq"
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
