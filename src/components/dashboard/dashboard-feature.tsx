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
    "4cnvC2dajc2eKSsrGubKPYYJgf6y7VhbxNXGrsLnL9SyXn5NXGVkuPfw6BZQCjVnG32X68rWoBjA6PFxq22n7M6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23uf1auf1zpsZScovSng1hWR3yeSpokv4RggciQqcw1mdz9jXPJUXWbeRQFvJDq9jPxWhL6EyZCHc8ce184GTv9i",
  "key1": "4ed8bUpBqfwydSsL2q2gPgivVHjYEa5nxDiyH3NeaGmCe4fx6f1kJEXV3G1iFwg18ovyraCzMUk1KVjzEq8VnALN",
  "key2": "2zyAeT6cqzRqtGdVZzYv9dtRoXEV39NhBPNJKmgM6cBbLNrRjcNGqp5a8CHRaysouT9dA1eTaETeu1mg1fB1TmGL",
  "key3": "3qemo74f5cdjA94WJLdSusCXr4THfmjZNUMRjPySMHXr6NNo9N1xSHfNBqTCxurGm2JqPCaxCwGh2KtJmJgErGQn",
  "key4": "4N26Lyxu3g9v7iw7To6pecXxP7YouXJMrirWq24zoUUqu2EAitSUrspCgZpYVJVR3v3wwU9u62hJqRs28e4KFUQu",
  "key5": "64vRBNxtWezdj3JJsV7L1VG6wKFMQ2qqS5Sk5KRnP9c5VeybHhFdk4RLjf8f56T9gG526DiWE8R1k3kBQvEUC7ph",
  "key6": "5HymFPmrU58wJV2VQLNLdih369PD98Jf5LxLFQgw2UJMtnddkxc2bs9tt3ppieUnDut29jHBtyscdy6vALjBpbM9",
  "key7": "5AWDb43hwAQPZuj6J67Ns3JVya8NcWoaBtbCz5LXW6FXQ3aTbiHEWpM1DfJYXuiBb3B5aCvjGXpNDaKQc41AUfuE",
  "key8": "5hyGBiuxDo1zXsWjb3BR5scNzuTce5mJQsbC6LZ1aPoy8AyDaDbWsrLKvfMtdFTpcXxuQXpZpCrwxf6fHKoHPQna",
  "key9": "5RZujREPaqDA4VJpFthxbyhX8UT5VQ6x45W54BtRHLLvqRdTZDmzEnDCH7YvYZjhqS5cToWSw5p6HwFNQDAYmqWS",
  "key10": "bQfm2JoHgaGd8mDtYCe6Qn5iTpzN44wQqUrHyqCGWRuovhmqskR9tSWx36PbGfnLratoA7GDC2J1CYyehPdEaxs",
  "key11": "5LzXu3yxuaN7KdcjZFusfCKwyVij1fxwWrnfdHztkCYyhRhDcaxDytMeePDzpFymzw8HPmFjdqtSRtz2S3Y7H4nx",
  "key12": "2GQ5P9RoZtKwFsSGHGNQoC91H1AG5U1YwaZU1z57mNo3ib11KCKRTUoc6KyC7JyjHhDTYdAP1sCANnYYhoXKvLWS",
  "key13": "kduic6B1E7KLYjBK8GAqW11DgGggK7XqJtKWGb6sC57YQfi6qgKGSafxrX3oBASdk7KxV3F2SQ3KPPGeLsfMGG1",
  "key14": "29e7hYQnx2v9mGJ1nj66ode8jNHmQSVid5TzkR6nJhHXJ26yvC71kdrP54JXgJofenkApsVSZ4qBYj5gdTn8GyPv",
  "key15": "4YbKScPZ4gp2GXQWh4ESgASMMrzWDvHbATgp2xgaaTf17c6FVq6W72m25v2puAFamn1gwqauEGEX46jmkZcgJdSU",
  "key16": "3L238GzYF4ZGFyd3rfGLkm1CyfXR4Zm8d4ThHJYPkwptFVVivfzXjXbtj8SpmagStD6zvZ8VKtNLFYUwqe7doug5",
  "key17": "2Cc9UYwzczmDrRHCwEFCUYNeCUojKEL4n1PRzW1pj6a1dzHcqimTTPRG6r862jJUBaPTV8JWaDUT92VkjvjYKsme",
  "key18": "2q6wZsn7apDbm28iTPg4hUQCn73D141ikzr7UqDbnAJz7zm9uVsBC3QbvzAST6S19ZnaQf2hxmAFrD2pKCnZb1wt",
  "key19": "517vdjS73ZKFsRpuuinrJYhtYxYUF7ckv7s2ULVLjupmqCnVW5Ve6nchz5M3mkPDybnYhL6UqPmCoqf9eRBA2Ukx",
  "key20": "5yMbeCARNxP83twnzDcoUk65rw5YdUTtpgM3xcxCyeG7cbPSRR2dYrSQuVRHokUCEZWiDwRQ2ihN7W1F8X3Nq2B3",
  "key21": "5u2UiJU7VbwZLyGSCUsLKozKttXUdm4incRqjRdupKtQLHwC5Uj2ssZAmCSDvwotpLaFLvj4sehQaGzJatAmF1pJ",
  "key22": "258Qnc87mAzRkbe6j4MDmsC6h3mgvt3ocARxdHK84gXgfAyRJftLyGTncd2sL5NBugeUd7sDFSvf1dnSoktUWueD",
  "key23": "4ys63FtTHcTcwfYnB5XnkEmaSJW9iM8vVizsf6erLpHfmko2qEWt6XR8QSyDG16jnQjK7XAdUUvCuhgVssAG36aG",
  "key24": "4s4SmMj68Hecnfm6114NNkj6cUZE3ncGURmfX8Ni2bQrSYw7RCDEe8mhtDUtaLgioiS6iMLUgQ2CZpvgQ5GCqNjA",
  "key25": "NmmxHGNgmQPejF1fFmRi41yQabRhGFzmKqojGXjCBCBxhfx4fRPnFh9HspL7uD53LRUJMLtjEKx7vRwRu8pihma",
  "key26": "3TDotNe1nyzhLu2pxx7EZwLCGLcn7DpaoT6PFD6SQ2V4jpNnfTSKwJpqyf5gRWLVttLSHEULwmJ9jzwKyXxZ9YSX",
  "key27": "5PCuph2RYc9t7cw2t2noWtG7r7CDQUAVrLSfk8t7165cBoYrELZ6Eoy9Vo6sBfKGkDB3UgqNXgugHhPiCcYvMxBe",
  "key28": "3HuXXzs3ReN7HnDGKCSEuRMSXUBZcqUPUKQLjDctybfDjgrZG1fnQAFcMXkXywKydzaW7vJTmwAqmeJpFTb8wNUP",
  "key29": "3wZf7y48Wf6qd8aUGQ1fPqaxBkMoBQVJLkh3Zx9hPRsp3GK93Ugd4xX9U3SdR955upiWBqLkNXwycV7kNJAp54Jq",
  "key30": "3oV1EftFmzUjGtShYdYdRVXRZcemW4sucv92PtCibTrxWWLnF2qUnPmeKxgw72cqamAhFjkbkoCAbTcrHHmMabUW",
  "key31": "4oCjV1wXd25SAH5UASYzMRrzdRxej69gaiiebbXUpaKT5LNFRZsawYFFWuVNt2Gp1zuoesHhwGNzXwaKPZQm5RNq",
  "key32": "2KqyBSwwaRSEz1aF7TaMkNzcmVuAteybsgzqMbQ1GUi2QhcMLZT73hs7XteydeBAJwAR1DTKohMvosv6yvqUprk9",
  "key33": "t4UJCfMwVdEM6RD2PbcgmQqiacMi3Cv8YdmfDraNesm7TrrDPiZdoibXQPgpuQh5Qm89fUspyV3nkjeFh5UWEMH",
  "key34": "23rqeWVJtQgS82hzPK4i6hVDrKz2mUyPcxCknGSoLhsZDU5VjQ6nU3spxEMwKN698kBzbZkMKhQcYowvUiRcDigx",
  "key35": "2mUQtpKfLutZ8jCUeDdgomSkLYhwZF6173xCudNXUKAgLMoGmYaLuxeZT9RJNp3cRhwZgmmVSjm9EDF9vzZcnDYz",
  "key36": "4L2NoLxHUUJ7DvvuZw4YMWggC7qSWjRYSca6dFjffQzxnnsYwqpLtNicwGRxb8cvupwMBLGhoRwHAw6gT3vvZpK9",
  "key37": "qJw3246UnNdvWPYo3dEEktpMK3zcRPN2k68RAWSHG6YnbMcW9p9Z9wygBasBhVN2n1CwjfvSAYqnWHsUSe3Mu9F",
  "key38": "hbRmUKCdZk98qAaPqbeXCmwYK13Mnc2LL8G9R8nZ1xVaRpGKxHJe6iRdRXSNPuDkFhnW6ZY7vtZHctHz6jaUTbK",
  "key39": "3Qscs4VPsyE4HmpcBypG5kHFVkjC6XyfohEQFNviwfNxAwUW4YHBNdsWryeJS9Rf1o3Am6o5pfE62MzVHW9pwDmi",
  "key40": "38cHsBJQJDCQdoZDQgvBcDpB7u5DPitorNFf6HDyzeWjTVo9o7o28JkFUrsRJdtBTtuRrnF2PFtH2aTVRoDzA3He",
  "key41": "43vxDH1NC9V2WJjLZpufXyZMKjR6ZetHxz9WQkQLZp1R7GX29oNMYQ6sN22CokprTJjyZYXVqyXYpB1tnLPyJD9o",
  "key42": "3hMEJ8JwpTEmWFmEuy7vi4LiBwyYBhZsreYqdYsp9c18Ad9GWPpgU3eQh675pRmrJhKd9fK2eYNfNRYiYyqBWNta",
  "key43": "5VvTbX6pDKAy7nv4wEuXZMJenRR4wnbjSDXjiYWGS4nw3M7WtpZhGYxqw8sqY8Zs3MHQDMMHrUEjrYg82WVKhuWi",
  "key44": "4bzKxjLPLeQjr7dq4x6qPiVheJ2AhztvFfJZADQ6PmBHRC9KiYunq2NnHEujvLL5MJKFKDKKRKe94aVyvxfDghRu",
  "key45": "5aR81CPERTTNtFMEQ7p7EuJcj44LXkVQjxANa7KS1iAejRPG3cpjA7KQ627J3fNjCMhRYJ83eYcoCuPSYQoHcshU",
  "key46": "4cYJ8qSS2DWT9Nnff8ZCvioGviPH2NdzwtLCxdBUKY7QBUiKSY2BBeUjuGhsN8QtAVBFy6mTK2CUVtoFZ7LeLcc6",
  "key47": "2wacpdvfuHg9ufcpZEusbmwL767ypxF92qmTWQG5Xukt2YKDF4JWuxw2PqpMcVzFiLpxNskA7rWixoB2QfATJZKC",
  "key48": "5AqrKoaz4ESkjhAL5fuXs4bz4rFQmmvqcGsZyQaNG8VTSTppYigr3JCQ7MiVKzmdwjs9PJieGKmiJ78Jks9ErEZG"
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
