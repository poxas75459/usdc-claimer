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
    "4174PzYJkzgwxgvXJk4w6sUdNMjMStRwKB5GbH7nLS7ygso26dKE36GKYpJwgN2niG3MU8E2tBSzzEs1UsJh3m25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DfyVKPZffMwkPVJsCGsyYkfWaX9Xcj45DLajjV72DEhC1e7t99aRDJwr99datSAAGyPEG3AbKLMuxxz7r2dmQ1M",
  "key1": "2Fh7pHAEA3zwrqJERcwXt5vgR5NuqtzTMiHSdKUKivAdevSH2QT6Uo9zPcumhrQuqSMC4iREsUxNAp5i6a44Zfex",
  "key2": "2wTJqzt6kLP61MRog5X5ymxQR96vgQirSMiSNhuzPqByESCSPuikrHCbBjwcBv1o23C7YyHJVxQh625WTc4RiXp6",
  "key3": "2FZPJc9Bj4WpXKztk5VGXj5KjQtTmwo2ZVpbi7QfwPkRxMKQcBGc8H2KNSeVMTag7Gv25HnTRaS1M616E2s8srjD",
  "key4": "4Ps79abVW2gzwQbGbeYsXwjFqrjdR4Buc9yu3tCDjhX3vUtWqhp8PRSqmf63YYv1cxWzN8gvbyDGCpatQmziC8Bg",
  "key5": "36FD8oZzunK8iWvSTvwWJCZ4ZhzsBQv4DPp9KQ79TAjkfaPqJDbqwz1XSQ6JnZmjhFz27rQWWqVxai3n8bGw3LUX",
  "key6": "5Cmw5XTkPQY6nqUeV8fdwUz71647h2K9LvuVV32Ge62FjGbcKgfoynNi5yZVFzYcRiKkvkEyJJA4fgTqgvypKwqq",
  "key7": "2Xgh8NiYp4ED5T8CsWCP5QWTF8fM91womqY4c9LmGNiWrU2hj8agTY9q5R4ozj9ATWecsQ9agUvb489T12pJMaHn",
  "key8": "4AW2w5rCx3Jb1zR51gPvTeRdgiAgMCXTMt3nmWfbYVUuM32YEbD8a94qB2h12DNdHd2mvPPZEqbgUeJAqj2G82KD",
  "key9": "3pvNWBhexw4zZhoYAMsrMzBiqPPqS9qdWCrvDhaYTr1QbHi2V7EEQGNA3DXKgMwkh8qkeP8bVCtRFqZEzbz8cNhc",
  "key10": "5rGpVJS6wxnAFmsWyaup1kujY9RFpt3Wx7Q9gxx2qtT2CE1BJtUUfSHHcd168c4HwajHd3q9c9BpKUuGSp1z4dUs",
  "key11": "3hwwqdKqsN6tGAK1ZTrmC6t96MuR7aXnvGXdDLtpz3WzvgfGPgTxV3jWNN9ZmSgqZvcixabUv1y95gyMxbLx4GmS",
  "key12": "33vqEDAFwosqxtoyBsDQKUTPCAJu4tjgz7TLpu7mo2iy5xn3nBNCg39KUPwYXBgo6LwZ4pQsqfaH3Mizisxth48M",
  "key13": "2cVEZUR6A1tt97NKZ9wwqkrZ8USXJM5iuU9KneKn8ekvFj6xFUxDRGLR5NxYCpNt3BMStowHn8rEEsgT1nCSsnwK",
  "key14": "3ZaJtBTANpjeLbwtuQfifaEZMcwoQCE9vvehwuDJM2M5VMG4LJkcjgQj8ZzusB1K2HyogmgZaWrUnEtxpHXvyygi",
  "key15": "7oQzRMtmPvM6kmamD8Lmew4FCWRSUzcp5v3J3KCh57jGpqvX1AjZ1rCs1DXpMDgAzoWotUYthsY3G21Quk5QA6D",
  "key16": "5A8Yhrrx6P8dqMq6qpqthJgkEjyDUi4AMdeSceQY7qWyGum9JcpZZo61K375GpnFGMGepDEjdRUavsMppSGvf1Nw",
  "key17": "4qZ2amXfHGNBHCvFan3fw38BRNX7iU2rHHHBUxeW3h4c93gjDEMiptUBEBCuWvbappQuYkks5T2NrgYNZtK5g27R",
  "key18": "2XzXJaS8BkyZbwtrrQ4aHmrZQoyxPtZrB15ZoWQwpAXe2p74fFaEQY5nZJ2XrhpGk2y8zKcf4amtSbn7pYyBRq4S",
  "key19": "2mvDfHL7cXEtHeb741dfsTV3G1f3Fuj8moQXkw5YsrQVe4G3LsxRw1ZuZG9Zy39GYvsvYJzWiv4ToGvcedsfrWCq",
  "key20": "4XrUFyPSpmnJAvFTsS1ve2XzqiacheF5Wx5bFWo3xb7peEgjsxZjuiStSQNtDKJRuTDbPJWWNBY5No4DFG7gqDxY",
  "key21": "3cLMThTGQk3MJaoBSBzMTsuyCq7wQ54ft2jtGxRTwoxhwoMoTJroGWD1engpLU72MA8gkuCs5JwbgZJ38FpbXnBp",
  "key22": "xxks1AWgd9Xnuh5ARPRVjgunyWpDK1YKcMKqBtK9WkdpRG816bVMags2TFpjmqTiF9LqXKnzfZGVzgxQLFnhDFj",
  "key23": "38ZLwVT9g8T2X1x6aECoGbwuifeqb3Cnexuw2mRG7ezWKxuMk13RmAnxttRdZ85yUsikf9FfdbKkMYkUptF1WtTw",
  "key24": "3ctgfWgoBTm5xw4zKoz8xgVxQxs7uq8URx3EBY9UxzN9MKxRQagZ3BxoYBdEeYBEP8PeiJ7wWoP57XfTDfXgt5dc",
  "key25": "aoJsMccKo2LgshnyVVqJPoXpxxq7fn9DLEb4LjncLzX9GE9LwoPUbviAragKpe9SDuwBEsvdXFEe8CXQty5gYGq",
  "key26": "XY1KJfndQqsD4ws8SqL55mjzpGMLv9Ur9eTArRsVQBw9DkTJgzRtg3d1JfaEmSjxiZg5EM1mBqiuU8WeW7gqDe3",
  "key27": "3Hv6naEympB6aq1LP9vW7WvQ2ecFnTYuEUaKF92nLPc6URbGwafPQN3NbbAdGRT42yAwLhhv6vvdGbTLBdaHqDJH",
  "key28": "3kXfpCyHfL6q9Y5aH7fCEL2WimkH6jVvrmEiUdFy791rtC39aruLMv2MES5sL218H2CisXWc7GNEdKcpaTfE3z2L",
  "key29": "4CW84s8Xh1W1aEJsdrbKp13dpWumG1KfSeesWyY59TpWdC4MB944jWrZfxf1n9xSE9w3eQjpmxGwSWCwfbXXXXmU",
  "key30": "59Uz4ReEWitrnVEfy8b7iBH34FyhCQcW3HR89d4UrdVydPufqZVJuouenSx5h9GL8peAhvC7NX7QgPpxfWsFS6R7",
  "key31": "51fj3LWAMoXh6Zf7yZDQGncyiAoTuHGhcaQMgrrdRtr3nYB6fzejeCL9KbC22ypSD4efhM5G9CzB3xK6yHxPukDE",
  "key32": "39vayCFDVdHG4frdw94KZX8VoP26QwZtmUxqSBXfPy4r7Bk552i8HrEraBhhstXFCkbGWmaoZpc7P5bzyPfXHtiG",
  "key33": "3WWcWGVT36RpgNtHHtVN2RrWvChxa94LAgwPVKTBU91GCj2c8444uwhYCbSPVFQ8LYcoZUw5M5p1CMEXWqjuBffP",
  "key34": "4XDJSt5w4ukiGPGoYH1etJc4brB3gY3363ac29KTdjpWvsTXHd5wtKar2HU96XZbv9c8toYkQM7HkVn8WbGf65pa",
  "key35": "5kYBfV6DKruekWsKMR5x6S492t1GCv7zhmuTe5WUPrPtbpXwGKmP99vPevuTzppCrZcn2jTN5xNGXvgsyQKxum82",
  "key36": "2shdbEQ7thpe4SPsCwxfNGctwgpA1sqAkc4sdrfHuiiabStnpBHyodQptJP6seEsmdPTipsVWWgwPwhP8vZghnEf",
  "key37": "3gBgH3xMApG9UEZ39TTcsYxupjC22QVxkTirBCsiJcQuLfsU4EDWKp7hkQ4XxyQD1U7mDTYWe2VjKSysJ8aE5RTN",
  "key38": "5QJueMAhLKiDikuUU4kRnKamhJ8QKmWRxBtamZpCjeMHhVVrQETAYgVNRLawVgtdGjhAweVgjvqMVeYU5zdJyvEE",
  "key39": "4VQdzz7679W1wA5xDBctRfGzcgGjGfS3jLxmgA6iKzTbLajELJkA4xHtgih8xamNBprdviJC3HdWnoeDzgPATYJL",
  "key40": "2guiSJSHXjTQF4x5QanvMDcpYYnazViMRFHdecxXsrEusoy4WYmwitbj9g6PQ9wJMpmxXv8n1vSTLsG5Cs3rAqqF",
  "key41": "5wjQ2b9ofrA8XM2S5jZciVSzr58Wk7mb8a7AFYDJUeMVGwd5W4HDttpsDDgsmLCXunvR2VXuNQKzq1FfQA88uGEn",
  "key42": "2msXtjttm95DnLoCPWJftfKQynPUuXok7Mckm5X9HjehcZb75vJkqwXnpgS7zgBbL88ZQZziSxQ5GcKh3WSchrV8"
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
