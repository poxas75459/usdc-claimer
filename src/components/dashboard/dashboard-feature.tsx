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
    "2oFVr2nnGiBRHDBsSJP3HkhMAB4DXWmUkxHEXxgjgPncS8pU8Br3zWGQtxHd3YcFr6HXQV2pYzHA6hhDJpaLFdKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tqMTJS3tDjKxeZmvaonSDB7hg4snjd6DvgGFWajhgp7UHZx3m7sWVZFNrWDxyjLyXxmqYTYwmVwf7L7PBNyrWPN",
  "key1": "28SExDvjy9pmewnjaWSi7K9t7P9r6gMUXk4y1FfTeFNHtPSNWN77LWB98fEFbzikNHr5W5248C2ZXo2TMgpU2WCU",
  "key2": "2LX2Ae7Zh2YChoUrE9tGByzavGWvpeBniwwy5JCcSoqYfvVHucxTyYGLnQN37aR4FTGw5y9aGXAbm8WMVk2FatjK",
  "key3": "xvYBWs2H68ezyAjq6Qsh5MqaA8phCFLy4KZT2W9t7BxrSKPqCHkDQftcqZN7KrLJsMp4qvoNRh3fnZL6sN4XPVV",
  "key4": "3eenonZEbBSSu6GjTtyogKBnBVbKy7Yy9fNTTsE9zPf7UxaQxTSf3SX2mDxptcaVNYQTVo5bsXsFxoTvs2y9CZgi",
  "key5": "5p6sb4wj8iFonEoFTDQf896mdfwc43kPBBj3Kh4VwwvB5jedbffCFu22NXU74wWHfGLqcnyFUVorHFzKYXro4Suu",
  "key6": "whQXmAfwPagREVnmP1kJhjqZzrSCtqe7ELkXSajPBoc2VWm3PDRWjTp5Np9ij3fxrzDQfrN1thLedcqi5JK7cvQ",
  "key7": "5D6E18ooZibjsUfMFCo39GrC36o7wwBNddAAAWd2A1vM9h71T1WP6c4QDKdMULCfxbyVJMPy2E4CmGDxVNKjUHza",
  "key8": "2bYyE3NsYc6fKx3W38s4sFrUM8VXEZbgxhwqN8HsgEnuiKFGNuVPbMAJkWZwRUPh1Q8Anca1Q8TmAsKLxes2Bch9",
  "key9": "52UPZoWsrcKuN1Si6mi8i7RMkhw24EuYRgmfPeLun7obWhsSZz6kthZJzR51vSqHodf3y4o1xwzHj19Zyh7YG2cj",
  "key10": "3FG1dpQ2eQ8CmUB239RaZ5MNBt8rFUZRfmumuNUQxEaaXKjvwbgeZ6ipRwxLSxq7oCvfTC8wovgjvrRxVjdP79zy",
  "key11": "tStNErissBZV8gD5v7iLoT6q3i4Np9CFanwx5FZS8xRvw6HL3tmYTWjzEKjLBRq5YhHLLhg2zr3PMQUYhmpkxmE",
  "key12": "2xprkBHTUvaoVRAkJtsaNGENECCeEPUK4iY1eSUbZVZpzcGgUMhFnHXQxCnh1BwrniSrKeArWjY4SuVDA2JKCpLt",
  "key13": "2YFfQQEhupRDdfLqkZy7jjTv6AxsXMnTzZL8WXWKKZzQ6DYXYke3ZYaa3LNCY5TGkyEySczTt7HcZP19xVjtwhz8",
  "key14": "4b3CUAtgFYBTzGFnJ6atb82xigQ2AySZbGF6FnVZXwQ8MvkXp9mfZLR2Fhg9DN4zXTi1Rtppx8zBtoDHZorvrTGQ",
  "key15": "5LYXaR65M7HVsJ1pdTYRSYBuqPwmVioA1XDgGgxjSRGTXtYss6fxxDwGjPMqK4hTgHafykeTmZvRZQnyViZ9EugQ",
  "key16": "3gmuMJBapTnVpTWxK5PjS334s9SbC6gzCrXmeMHyQeKCDUNsSRzEfJNpzpBz2W7teK8T7QaNDsgqLMnXCrESjdXe",
  "key17": "279Dzrc7hsnf5bF4K8fhRzskAFVhTy8Hh4SSB3P78g4tixyUDnHcj6GKCBfsMTYid8HiHVcuoQwi7KfaemjdBA3V",
  "key18": "5PWTXMM7aKhtnYJwC3oBzV8qpsWaKLuagJLi5gwX8hmGFLLPaJe3a21CsNam5jFmVSKif16sYjgB9tf25irgkHbq",
  "key19": "4GkBFqK4iLfYrsNsMdAigizvtLLVTWJAEKQtW1iT4U1h148gKpEr1j6mLa3dQZWCMhPg89krACuwzYVP4N97NDu9",
  "key20": "5nLrHtv9FvLzoDNw7EecV8FErcEcirim8qPY1SFShqiJx8ZgiaEemexeWpTi6v7Do4tEMTKbieoPAuEt6M9Lwuhs",
  "key21": "4xk551jSSu2kYr4KSsAbTdcRH5JhmpyEkGKuc1bZePakvEmzE162pYH7cbtL6oMTP1CML9JazjGXLf4C5Ke8KQXr",
  "key22": "2nmKwvD42XTLh4d6UP5ashqk6JnEQCmo47nYH2Vfd1VhTUW43MTBTPX58bY6KHFy2LmMNsrzCLYPtbgfu2WGa5Cv",
  "key23": "44fvWB6FFH1cSUA1ZwZm9pdoCYCnZsAE1DEA2gv8J9KnA1M5Fj6RPtZX31XugRNz3AM3HHGvqPU1swApxiVGHci",
  "key24": "31YP5qS5ZEWHFW2iEzKCd58j5PuV6RqNKa3atY2RXUzZTu3csU9rG99DMR8Eyyzc2ifsAjxg6PvubymutL7Ydz2g",
  "key25": "2WLXmzT4aRLAUA7qxjNhukxGEnWPqWfX9wsVFrJ5C4xti2SHiaY63k8w9VYXg3pEJB7quzsgHjwXuNGkAsHsa6M7",
  "key26": "4RgKZ4sQaaSfMBK3AFwAXtreFz1oKvxR7H3LvpP6zoPTkZdVhAwctGn8yhG24bLbfZj3mfqNj2hk8V7rctk843AY",
  "key27": "3JsmKq7j6BGmaKsZdqbDbZcuMnByWyhSX6WLk9opdxPG21bFsoX5gzTysDNr75KurkTobV7RPCk6zNsZT46jhhyZ",
  "key28": "4HcCgnXECCXys52pWkoNpoSZwUCCR1aKvR9vXhJzpu358EbtgR62szPdjPcJEp5kV2gQE8M3S8gwuai5xSwRF3cx",
  "key29": "2vojeHcEKeuKGN4DH2qbTnWdvNx4CdULyY87NVMnf3GybBdhBUTkF8oiVxRxX74CwRZWzH1P5Q6p2b5sz3g6LisY",
  "key30": "3QeSMhwQBiHeBp16n8zJ8H9BF6pW26qw7vSFgEyiHDuBjTcJrFRY6u9JKKQm9dVukTq6WJcD9NM3gowVqmsBgRg9",
  "key31": "3b51ERBF7tYKFCgr1JAoTiHMURApkFN2bYARCNyMe7sYLGjKcg8w766hgHm8qb2SXkdWjhxV5t3LW1i3avHCjALo",
  "key32": "3Ub5RxGM2S4YUuMh5m1aWDZnugs3qnfNZgmwUdvkWAxsrjQt2EjwTCAGeL3Whn21yiMUD81oJkmEDELtBPfUb3Ku",
  "key33": "5GLPRFTuVz5VtzBawDubSUAtvBwGYMfHYh11vuHguW2t34SUninAaRQ64qgzHomBhjb2A54Lt8hzeEcSS9eMZYDc",
  "key34": "5mDnSgqn4LQexSQC2ccWfzk6ESdhPcYwYvrAZZuNqyUPxQhAHGCYvRwhLZfs29boWVjtuz97fXquzrwHW81pQBcd",
  "key35": "477tfiBPVSf4f7US9MEpUojzhb4hPGtaS7fYUZeL89AoeqY5q7t63LZ921b762daxiAnKAaNwCgym8yD6EUpgeCE",
  "key36": "3MGqc38zi2kQTnQWhwtdgBrUVMRJq2QLZJZJJe7MDi1YJd1n2ane7ythzTNiBqBpk1xMenxvFkp2zPuFiT8DPeEF",
  "key37": "3b8Ndm18oJj5ZYJBzyLAhYrd7NRjHop9owVCebBW6Lnq2k6UUxGuzDB2DUXymztSHBDcNboBUUVZkWmyZr3Jhbh3",
  "key38": "Mv85S15ry36Fu8PE17WynnsGSR4vKn9dfEqNj2je7MrNBQ6kod9BrxJbdQdcpmZkr4RcBRQ4njKUUt5CwxLxEj5"
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
