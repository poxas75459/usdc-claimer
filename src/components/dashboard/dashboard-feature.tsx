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
    "4N8yaYH3iLd4X7d4Gg7VXpdY7AYrJ3CMBp3Am2dzhcqj4rJMqnBPYvZMdsV5pvsQZJUBo63xWn6Yy2xt78wKnWjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sJrnWREcP8MdbcThr7btvvsf8ihoUM4Gsc2mNAQr3yBjtoL9JwDSkCcqxTZ4xcbuqdUKdLAUxEvTUku7o7nEhHk",
  "key1": "5rfhzWLhjXQxJN1bxM2VjvtNHDUqJka1qykCqvjCwbhvxBoBHRQcWdud84HG9qnf1oM8h1Khgmf1UxzCwDGYWh8r",
  "key2": "5uC7wAnHuTFrutYPvroJxLTWozWcuS6qxxaaZgu5GyBr9XtQbaMAbJXCh4mw2NFgXDNk4EoJHNxRdAryYn27Fge",
  "key3": "5WQZTQ2HED6ikdjjkbm3uzpujc8HP9aoxgcM7s5t6MMYaiGyShSis79m85SQxB6XuhfdNF8rhCGk6zPPUFbUvZWv",
  "key4": "5wHYep4YovAXMAoeBgibDWqYd8H2qxsRVAXZYR3HQDSXchkBR3C6Y4kxMxDMQgfBV74s7UEVWMBYmBnQY3Z98We6",
  "key5": "nc12Ngqp7hQQZiUWMeNufFWMajvUQMkafz1mY9zgpoZtXi8mvqC3JFb8BNLMbkA3LcUo6f6wxJmsT9B91Ypi7L6",
  "key6": "45m81LggfkKh2KoisCTqrH7GrHj9asNXNXUevwmzLjRjHy1bfKU6yrcAaRwovMouaNmPuZpz6qcNLTa2BoWJGRsQ",
  "key7": "KPLeUy3yXjCzY2d9GERTpxKJF5ppVUQE2fMvaYKHKGFA3wZDaXu6Ead3gj7bUJdGbnCH8SvZKkAwKsoeta7qwKr",
  "key8": "27kZZ6EA7Fq8uMvQQT639h1jQxVaJJHitQUV3mampjVG2qzvomFowbLBX6PxMkZTGaithS63m85QaAa9ueBWRd4Z",
  "key9": "3woyG3Xz1kEuxRRb6r6aQjGgny1ZC6QtJR5S1vxFpc6phWVN4TaDBCDeXaEsNi6z46qwK28JHtDp9sHMbvpSyLEp",
  "key10": "2Cd8axW1f3iZ3C6Ccz75zrNXGsze2WjJprVoUTPnVemDd3CSxPsA92PvoSWXVzVgqLDgdNnhbVPoKSx4fYGj4nPt",
  "key11": "5WejhE5szWYSVoj6ZJtmVU8QnsZ6LKaWEHiecKbjGfRL4LQF9dDjVZLzMsZ9Ns4Wwc2cbDg8Lkvsa8GpEZBdLLVi",
  "key12": "4FtARvRzBhC4AWiBoAzoJAd9fn2itBzRvBSx3Nv9F14peXdiLzLq4FjQtD8gmjwXaphNJGudtQkyMikt3r1jcz4w",
  "key13": "4Rv316dsikzch3MsHWMzR99J46hSfQvv3iLjhTAM3R4ZBoNjVcQCzwVX5QgW3VEGkg7Wr65k1QYzVPF7yWgzWW3k",
  "key14": "o4ND6j5m3StkHKjvRKnzfdqup7Sb7VbiAWnqbNttBG7bVV7ioVM6DjWPFXFzgw8CzcFwnUeWMP1QtHf2zRY5qHe",
  "key15": "pgvz13xSDv38gRF3veshcsSW2EHN294mikiepPDfMJyUUmfRAAq28VjjCYPpsLZ2kingaTAckv1FE1wRGYgMM3c",
  "key16": "4DKLbZcNNWYJip7fFZyzYw7TZcB4QwQAFaS7Pso3rKjE957YS5W5fbpaCEj7vwhABQYPTiREr4ideBwEbmGWSThP",
  "key17": "54bprmcKsGAZy7mMuay2RAqYsbYbrrqa2L6VjqeMZwhk2LVMECgndoWRgVB3VpbUPTuFFxgq8hLQSLpf5RHcsHxU",
  "key18": "kMV3VsxK7T6zWpvXJ2UXVGK6QZQb5qYKJjGVAgHScWJpV3tAg7ZYVQsF4Wpy3Q9fVmi3DhUksfd5Bkupz4eJZjU",
  "key19": "3P5DWzKXJ8TWEpWkEgsKsm9qQyozDmZWpF2LKvogPiwf58bnJtVdqd3YgY1KofdQmDtgauT71r6rzhFDmXRBtF5S",
  "key20": "2VyAuDzqD7Avzp5FcQdMXJAwobrLtc8D8xgu6bz84g2kxx1L4D7wp5VX5bGL2sR3EPe43Xz4pJ8dK3Y5hPbArnAa",
  "key21": "4wqoz6JazWcqXaQkPhAbZ4RyzF5MqJFmfj93eQpHJEWppWLk4zBZQnY5XvZ9GXwfWNeqSD8N85fb211vzUb1MdZ8",
  "key22": "2EXHfVoEp94ffUBbDNLCty5ihnfGNzizTdJC39bk53QjinY9G3t2ePfSvR6YtVV6L3DcLFjZDjgoM1HDj9KgecFJ",
  "key23": "5Dy8hjFMkQKygWJAQafuAj4f4nxpJLtNtiN7e1X5UX7ipXe1moV3mmV5VZmP8dcxaPTuvLzUGRuBsHr41aKp4FMm",
  "key24": "3vNQDFrFEfVbko5Zi3vU9i8AzNhg3SNwVxKag3iZM938pUAhxAnTw1J1vPN4r3YK8X6qPLw9F1yVbDaL91sTB5Wf",
  "key25": "51x5CL6Ppy2biUUYbTJk33FyBucNoaZefXphdyuSgE8DvQhHiBZEUfV7m7cP42BJ8HNMjKnRP1P9BK5WkGTAuG1A",
  "key26": "4nmpqNVKhe51tbBKSsqKBNLsw2ufM1u46myGE9UfqgEdYSPsL7tif1fXBoUxrUwSmX3QzycFWwf8WgJtgiMWAt4o",
  "key27": "2xTHDGoEYtor7P1JYVuAmT2wmYLuauqYmeRFbq8BLDQiefHMNU39oze7Z7Ug1MJ6oebABpkucQJqqW4VqnAUFXYZ",
  "key28": "49jCp3mwYz6eHcWCBUnUw68FspibQCvJ9jbQEuQeEdvYb5svLqiS7ouxWMKRmd1pnXcsZDEecvAs4YZzQgzYFrd3",
  "key29": "3ZJzrc6NUUEZQmqmarTTm9PaYTGhUMUQZarvoxDhjT3zCFyTSdkdXZf2rCLUFT1hz2zUtvtjg8csicep5JYBdP98",
  "key30": "46ogodksdE39Z3r5jd6B9Lw93K8Aq7C6Twk1QaWwSUK7XJCxA6v2VQBmnHV97GjgoeWE4L8inRAbeiSacPTQd6Py",
  "key31": "5GjsgvDgbYVpwmHQhn7Pm2gzE5SaytT1ux3HUJJwtRJT3zeuaejDoo5hQsfBE2nTsPuzCmGwTD3TRp4pwy7NGXo4",
  "key32": "3TqDQu2yjVvJ2fd3UXAShuwNakJZcX7WSJKJHHBVDF9VUqfxHAyZ9M3oGuMum1oMMXK3QqdK6v5FLtC9zZtQFEu5",
  "key33": "2J8bvBe4yXXNBjs59DN1T3DpKruzZtyqtTbDCgpiNXrf2AqLso9fww3fbfQHAKmrmLPeB9vXyq32oUWUhqJPJ6My",
  "key34": "3fPw7YDysiZjJM7dYb6r9ovCWYdqiNgBhf8QMjrhmpSfFq1AktxxXS6AEEFBYGWPn4RsUEwKPcevG8b4dSyCAjQe",
  "key35": "5NLLzhPwZcoicwXAxCvNF3XFf3Pumm8cKHo7qobTGrUFDu7G9S656b3fuoUbkYoMLzP5fPzAiuPTw4uWjzFv5yat",
  "key36": "4Qzv37hcsoKzor1ysMANyXYqhEaWst1MekMAptvKdCeDH9TPKYG2wceryU9262ExE7e8DRTonaZPLF4s3N11NZ9i",
  "key37": "2Bty5KU2EgDqGWm8v3g9cCBuFsmK5omVios9XUBS7BdkqCCy4nPhwxBFF13jsoMmPsrbv3XJysCVDBMJ2M9Xd2ML",
  "key38": "TuGGTx94DdpaHjPJspqJrhhwBaUgp9ur3vHPenMCLPsbGsdBZVPuX9g1MpRSCbDxf758Z4nH4ANPP31eHxNXMa6",
  "key39": "PCfSu7Q9fPp4FLKQoeCQ6z6T5krwgn8NBGWRYP8j5nhf8mwq7xDRVT617UCkc5gsp594HuyPJd9DvkcduWkgygi",
  "key40": "tUkrPCPPy16VnA24AEuWYFpEUjfza2GYSQvDXdZnBBurCmqR6BDrd51arYV7mwqS4GrB6RqwaZNavbSgy8SofTr",
  "key41": "2TnoYotVeEU5yjvdxzHr68fLxd4722wyu6YngwBw7t76FUAGeAFBRGek8azqdmr8AkmQEQGpQ4YtTAHFwJ6XqXoD",
  "key42": "5GfBb5n7aoKj5BEFoippfbxQ9yzxbXofm1anggJSgwpVm9CmQuY1VEvR5Lp8qKx9nbXdaviuKPr8PRudsQVHMpxu",
  "key43": "4BQCxZCGnjZBzzYxn9dWU56T2L1kLRnidNAJT4xvJUhcs2GL8LyeRQvG3Gc8CYcJtGWpYaLjBNJXWKC6et8MTQbb",
  "key44": "4whmwTPfDrbfbHHdSkpCkvGfSbL2qUj1wAXHH2redgwSgbDppExCL13qbFPEY48c3nCaQj4szR6ScT6uJ1hFaLvB",
  "key45": "2Qx3hyENosJsE4YovEJUEmyQQdAMVspJTen4RAjdjjeH5nAqFjrXPkP179hNVWp5GYTwdmHmKfUiek4ZEDtyjdHW",
  "key46": "vuYJEc3UGTD25v4R2Vj4GLiTpu2Tuwqqg36LiTLTDrvZ1ewSh87PB84vBA7m4po9WDjvXLMtToPwp6SriMgaMxv",
  "key47": "3dzFV8dBUdhnJagS4i8G7vN9pYPBywpEi4B5T6oh3T9bxZtVWasNUnzTUFtvngD4ySqFMZN6DmGLdgqBBbzCctg5",
  "key48": "J3KBwhKNvxarVfiGctw5McR22vLD1yUp54cvRPioUt4YiGVuZjAYCRZXBgh7qCDS68U1k7Kkx4qpsPAsZ25CJkZ"
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
