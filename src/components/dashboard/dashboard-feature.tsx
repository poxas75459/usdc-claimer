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
    "3nKbzC7qwmYyxwuGP37FD2PeJx1ew5FqmNGDxnCHSe48cEQWFSYf6vchjfWCkZDoZCArx1FQyKHQXC1B5rbXRt3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pWMxdeLLRwdKhLgnoiRDXA2syTYTmBq7R9RGQXRLw6EAgo9EmNp5AFp5C7JgMhjkKQFAhY64owK4nHR2B8jLb4B",
  "key1": "63Edc2hf7BZ9gsw6veFJykfPyudBAssXFibRKYm5oPvBxw6hPzWHdomLEgTsdu3ij9meFTarQyL1m1LGXW2u1tre",
  "key2": "5mA7xT8mEhQjpEhXLZCFFhK7eroQtpZ4qaX4kYvrHJyNUBhG4rYkD4X8HWJwPrmYDkzhax1kbpKwKCtRVCiqjqKv",
  "key3": "4dsSX21WwLr2d9LpAVuikUvPXEPfLvQNv7tTRXiF25uMfZBMYXgPVs8pvAFUAVjMbwxbVca8mJvoz4Z3UTgPL9LE",
  "key4": "5aXxXYC8rPtXmmC5q1YJMAcQv5sMTBtHCuUgWrP2bUYi3NX7nGzTHFTEt34ZaJz5us7rjVyd996hiK4VnaiMKmVp",
  "key5": "4r7HozQNdGoNNSZwN7F5M79waJmyX9GGGA8GrbtM25PRywhXeujxqm29rQ2zkkuR4LHJvC7amzEUoZxtovJbZWGn",
  "key6": "F45XgSkwCFdC7LKA2kc5iSZmXZufNYemPXV1VzedZhmeAcaGejEDc3NhHTkn9AgREpBFq3bQnGuxsKLK1cuyBVu",
  "key7": "4RaYuxDwSWrzdnmv9W5a8RisaNwkwR8k3ujxLsjKWa8SA2fhenwegeoM5HmXRQbEn5yUCaCXBqdgZa4S1e87L4h",
  "key8": "46h1HsQKowGLZitto9wudjViLrYFFxFHQ2ePTyw61hchgmy2C9fQBjm2GUo9Csr4JWX2r1aCfL8Td7CfWouLCPyL",
  "key9": "21DzL2RDbwQC1dyTLoXUYsqWswW8V5fm6mhQZjceiPzn9Xgdws87vvDob93gkWAG5EVVo5zDToQHqUdirbytQMEX",
  "key10": "ByKqqSk6hNeFFzNoDvDR78mzhiPZXQVydH1hjGrGcbyNprJjFsL4q4PGYN7LjVQdZSHLj9BNSCumtH4nJv1U6cD",
  "key11": "2twEgjgz8X3WnWD5hZUg4yVSCr8adUYwmtkRDWS73xVes3bDy4yXmXKZx1rxrCQfyPk9L1FteD4w67PZkup2nQ6q",
  "key12": "5E6AbNT4ukJgN5f679ER6a6PMSVF59CF3KPjkA6DduVwz1Kjvpyvc4zY47f7TYHk8mxnRK9MshsrF7Uk9BLsoNQc",
  "key13": "39mC6Yh43JDAKzjbr6Pwq3mXCjCXZqevryB8aqzXTjs4HU2V9bJ8H6DeckX5Tymgs5sqmh9cSQaC5dwFfmwVFmUG",
  "key14": "5tU92NwiuyUwnVKfqJBRBcPhPXmASqPCgZyvtLLqtUDdM6DDjeUZXiHzK5z6yc8JY7ZgSWaGzs4Qnkss1z9KAaPp",
  "key15": "3KE1DuXgCyx2YRU74k95uBJUgqd3TtsNigcgtVkXYud9ZPuyPtsKFexXnmtPpd9xHDaqL9qHfzWBwLwXMdJFqPmk",
  "key16": "3z9xYAUHDDHjyGhWMWrQMKJsShBZfzYZyjy4LqYDUwULT3bsvQpFkW4tEJrv2q3xms4YKww1yfyhCe1mPC8wD9bm",
  "key17": "KnBXZ8wauh1zFh1Df8BmLcu2b3xmM8Ytfm2C4nJoCfZbPGeUN8VmiPF34SjNbJzSDBsnHkrP86Xv2JvGvrekjb6",
  "key18": "Sc3NBxAW2fyVr64rUzTSiyif6YCiP7nE1dyQ5hds9GKFSJkqrXd9wL4DrvUoq78NN5Rh3R2EcmpSEB56REFjTEr",
  "key19": "SsUr9uPcUWHfAkG9n4S68yRYHNNberD2FV3HjCdhGuKc96bCbxaezL2QhwhDQDMYLemCHFrGTfgAZxpvr46uUrH",
  "key20": "5JkC8qxJYjGMRZzRfQYqFAT41YVUo3X5MtwLq63WwFMawJHM7QDRRpu7jUo4YjfxvdfnbSkyche2opAtZWQxtAwK",
  "key21": "3h1YcvxC4bG2NpUvFmdjR2nJyZe366TcbFSt3vsEkTHH8jc2PzZDJJ8uP38z5yb6mYZV8cZka8Yw28m6oNLQyGqj",
  "key22": "Jt4kteBdXRcAKSdLWKdXsxA5p6CEkkzAhqFodNT9CDFq3hrMthtApQK8jPy1AyWD3sU6UWZUpBdGDbAR8GNXtY7",
  "key23": "3qajzGbJJbQVvWhzWaboeYcMD9QbMcBEoqwnuPewd7wy3hC8gbtD3ogQzhKehmfhuFtyn2sQyHACYD7me8c6482S",
  "key24": "3iBV7utR1oWihJeMgfqJDSY6dgjSWqCFCqPggzRZHqU5PBPq2GwpuvASTGFtAtpmDBXAKFnXZt4TqEdMUwGNgaqy",
  "key25": "2iRGTASBcwLVCCUDQyCTxZniHzssLUeLuG5pwEFWVHjjHQbEikAbwxGLEQ9P99D5cW2BPHsk2ECga4aq5MN8Qg24",
  "key26": "31EMR9eF7ic96UjUopSnQFSBErRNUCPYfZQ3byJT7ZDcyCEYGL2iS41nHTMWV4yQqqcPVwbvseMM8AkH59dv2xwj",
  "key27": "4XWNrPKCMZyc2zm1FL8cVeW1Pmb1KCX4UWwtdQzHJ6xcyku7KPiaKsSCXDTwzaPAFukGfs1n2U297KPcMaCzaihz",
  "key28": "3UnMKCK2NruDP1WdLzdUKqeF5vhMnHNjkk4zVA9LMbbALpuED97ZT3rQtJEv41ySZnsdypv6Bv72Sx11118XD6Hy",
  "key29": "EF2AqNH6VvqLECcVWkLUPVBQvvoQn1p27ismAMqoNYPxnjhVhW31yigM3PP2o3xecWx4xp9DwAFudEyy11GxzZf",
  "key30": "3aQmQjYrdzg42eevmL214L3NGiBnbn5NZf3LJs6KXpXViEY3pFJFEjg2QSobToJSwz2Q7dkr41hv8rpqmbzKemeS",
  "key31": "3iQwJ2vRqc8PKGKrJwdRi9N2vNUSh5hjEF7bXEZkmAQAmTNKHZYsvMaPzXuEje91PN4G7fUhfeHYnSodavUiHACn",
  "key32": "wm3UkDtU2d9sD8HgkoEFkyR1YbcDnb2pZfdBtR3bvYaSkAeoAS8Z9BVRbzhnTufs2eeQrxpDLcEju3cWFhrbLU8",
  "key33": "2WRFZGhyKG1JSnAtZxohTjiY6GPcFFf8g6jDU1NZSoqP97L1s36ETYkzc9vc9Y2EdyN4hUQvowbzKjXApd2knNMV",
  "key34": "3BfA1ezSkJP7MCgYtSrt3qJGDmbNyVsuATpVV5AkcWK4dJTQXUCCPgz7ySLMAEQzvZAkSnmUUrAhVwNpCbAFEeCd",
  "key35": "xiB4i4hbpvR9eyGYiFjXb5c9vddhBQJrEX87rq1yzJBJkAxUBUgYzGe5WzUt9xEss8aDN9QtnMniLjFW5FGy63P",
  "key36": "4rcTXsk4sPFyNQfTS5GyjwqFuqERzLEaa6YBMmDnWo7TXchLbr5ajYtn9ffzZHJnWipSVMxSNKYPwSPKLhu2hRte",
  "key37": "4m3ARnhRR19cb2mt4DFEMtvjyfAZ2PaByGogCaJHDCWKDMNkpyqnHqP7aGdmZiR8dnnYTHBTTMniwXN8o2rZnqYM",
  "key38": "5ihNr6Sn7tooct7mnGFhrVfKYThsj6peAi8mSkEvXGto3xpH3UMnVbn8PxZA4LM12CkUXqarHRqRt22mm6rnfz2P",
  "key39": "XL82F2tX3hbw6qZ3UByKwAR2gcfk1zYtKuzmQj9fTud7svQhv9dor8Fgvmt6cBYqj23YWJq5auN9bCvwFcapy5Z",
  "key40": "5Z7W2HUMDtB9Nu4HrAEbWwZEQYEFgEcKtoPE4JoaLxn1vzJCG5JM6cQDujw737DfSU7DQZa4Jf9YJzowS1Rfr5ou",
  "key41": "2sgTpvz7hgLzY4EHxvp4aQdHFV4J5juabnZUnyEabgWou4qwAgHwr13LKWek3QY9DXo7E2GF3QmKG1qKpjCejjCM",
  "key42": "5rSza5sG21dTecPY26tnGwDGQkwKqpJg3qDT8QMKkNFFqDieZ5oT86hwqzjMhhNr9jAmi4rMFHr51yjaQf8DDyiB",
  "key43": "225C8uLquJMKf3vRgBhXn7zNMivDDML4VwJxzSL8oU4dfi5aFxqWd6Jsr532Z3Ei2rHAWEEdEz87YR9c4MXsFs4m",
  "key44": "Ma3uRKD98xAEkgtvbdvXtF71bDiAsCtRUvo82rgmozsN4fyTvBwNgxqMs1BX4RvPv1LdfjzVBQbSJ65mom6rTvB",
  "key45": "2YzAQRkZzAXDT8p1XdcmxnvJfkKWQLmutvaSbZYSgEz6pfDRq9dGkmc8t4V7upQRYU5TmWy7SmysVCUe8ejcV6AF",
  "key46": "2SUG3Nh42XxJNZ3jWu1d4oJZqh6j3Pet417UuqPb3u9KTWAPEahKScW5nqRNMPdkB23zVkCt6tueXE4tnZwp4V31",
  "key47": "4jdxQbRHuD6bPFu1st5NrKxHyHrGKDfyhrvEK6Hi1YhTELVbj27HwFZFSwExwU8h378YsyTtzmLdpSf9kuUZcvnQ"
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
