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
    "1Ch9hcgN7pm7SY2rymRyNaEf9HcdmxW6acrbvLZxFEEc7tqatDDPCdgWxjftfhfsZq7KuRmdq3MSxZJDrdWdtZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WfGZsPVSpa8FE3EZpzhW7cDzLTuBd6NW9FtNcMon9PG1JEmwT8E3A4pxsHiJa1XMnpRkRWytCxKSCcxkxhz1UMr",
  "key1": "5jGEDbGngXukNKnBvcqnQF15safPAhpyT9zQ1P3Sf5WtsZfMvxj8nrfDJYhnP9ySmkZtXx3PfJ3xf3etS16kk8nS",
  "key2": "5N1cLSHw2JWxM3at4WSPP4dbC1qnZCnPKghfQbR7GUbi2nXzwGqPt9fbNgcg5sQ2NS4LB7B38NNcfKgmPaVPBcpe",
  "key3": "2tDfzkeZyLgazN9r92r2Hfu7XScav7bcUk1C4b2sWC7UQfD5jNidL8NqbmNZtdYcCR2hewz4zqqvReQGgb7wRJ9E",
  "key4": "Xkgb6jw7mkxMjDsmSvVtpT6PYuyLC4Ze5qd95hYTSVXUy4p6qcPeDEZGQemYZ27jWYPc62ehizhzwCkg8tmJ7mS",
  "key5": "3AUqBwFaymdGFndRpmsk9q9tg8Gfh3zeeetjApRScCop3JeXpaTWzb7MrSxcG237ZZf3nntfY88TJYc2n2HDFWGn",
  "key6": "2SGSYGZUiZWAfQxRFfR6CyQEpxHHbgBMuGsdawHL33ZWu8LdrKH57EN3juvwYpeD42MvYCJxnFUumyVmVQ4DVXse",
  "key7": "3uZvUmwq8Ni6GBPJu1Y8xxxLuFBeqUWK9BCesQMkhpByx3ur6WkVFiWGuBU9ZjWfj5heTdxnVYBfhbs8zrHVeS38",
  "key8": "4dgeGrhNr4MMKs65352vaCmvuARfHmBt4GABCWCG7f1xGiAyYa9ZJ3NWYpVPhucmRn8CGe4gJ59bN1UqaCjatwP2",
  "key9": "5euAj2vwe5w8du62EZECM1LkghsfxKBBenJZaa2iquoZmPkjPTGSP76c4JPvQGLsk5F9xB9BMb3ytPrLYC4AP373",
  "key10": "5H67ZZWw7cdHojMqs1RW9miXZuGk6Ra2VFhJQqS3b3PqWu9pvizXMBrq8ZRWWqCNtbAbQkVab6WU76RuthxKMTMm",
  "key11": "52fXZ5jWsCLNsTL1Y3iumSDiKWeAzJAcCsYSsKAj16bMQDCL512pQ1HjpWrXM96HVGxWXojE1WZvTxKKRs6s6A9Q",
  "key12": "4dJQNh6isEk968aAfWxi3CpVbgCpJ97vmQ9QdFa1fWrXSH4onJPw32k747QiSDWW5K9UCpN3ThGrzJkaXZaSXkom",
  "key13": "ewSMrsb4NweR3zGwW7Yzn6Y5TbMX4kzpjwMtp3zTwAH6mSYhcJc3r4RkRTCEtym2LzzD7EFUmkSViqfJpRSqzHf",
  "key14": "5SC6rLUNvP5AJC3hzHJrMC4FsUNEHVEkTnRrR4hbTv3Ed1qUUEq9YkaZkt3wps3pS17gjCLr4CKdeFVDgS3UHR5D",
  "key15": "2Cws8HjQarAkxRza8ZgNoY1CnhyeiSohD2uqPQwbQyDEifJDD8wCESiqxV2QyubPTD3CQvn1LAsE5LVzfQyW2P5c",
  "key16": "3Qsb2Q9BJ4iDi2vGGEdjKt4eoAqgoK7hSyambHbYGkWTZ71w9QU7ASDaLtUzxjcndW4qV5GuC2gPTK98d2SgnrCa",
  "key17": "5Satb8eT8vd5wxFrRDbumSVvWsBTfBBNY6dGQhzRnzn6NoRkS78dEcMQhfahZA91tVTEAZ4DST36xEv3JbpzN98J",
  "key18": "61Gw8qqsbuiXe9M7dLvtUQQTcJMdJDsj5NZuTJsLVnqAtr4Z7R3NzKDYeJMN3EiMMjvBtxm7rn5ZUDfF2Yt4RVHZ",
  "key19": "4dC1T4pPY5JYYoA85yCbtq1hUqGKbiN4hDJWJRAohcwKT4TRHsGXVPrdeni3FLfXDb2Um1Nxvnw8fLdbfnFFFEEL",
  "key20": "cSi7dvcEqdqMMiG2hjHMaj26x4pWTjXbJ7FgiE1asCEx4733E1dHrRZHCxvN9Qia6PtkzfwuiQgN4KkZKrwP5HS",
  "key21": "4utzffA1Vus8uHDpQ4BD5X5BJ56NvAwdwJphF7mRhgzuHLyUAWzByFgCsYLuVacpPKTBRi9B9a9ctyUsu8nNBwDn",
  "key22": "5gryidANNYpZRAFA53Jg3jsrUwqoyztAiviQXdCLU2BFJrTuJZr2RvuH3uz9ra818JPUwwT5SLxY6Zcp8EKY49Ej",
  "key23": "2NY454i3F1KS3q7cf8CnNhoz4wyEJyiqQVXdgH5Yr5r45CVKtS58vH2v89PksoNcpaaRS5a8fE1epg22HGahmtfV",
  "key24": "2f15d4XrMEHPphe3VsEFoTGhMNcnzSbUeNP81Ca12sETXrvHjG2VqWaXiFsk9BB2SqBnmGwLPRbphf4P9ZByxsAp",
  "key25": "39dv9PCGwtexuRzS55hoUVm9DhxAKDeFrmyEWt49vABQMZ76TidLqSdxuTnWK4qKXdY2CvH6LDpE6wt5tjt9X81G",
  "key26": "5XxZjgELeX1hDxxHXdJUu2ipTzLqDEUDK9ypiRmfab6G2bvZbjb4o7A2ypQHd9swPdWkJXKdz4ekBcvRjdxW8ScC",
  "key27": "5z4NQdyvoUbci6G9PqJaGPPzepq14Wo1tr75785n29UkdfyFLxjsWh4sBHevAjbCc6ExWpZrQeidgTaGs2dVZPwT",
  "key28": "5nucsYi9cP4r5zYhbP48mdTftt3rLNKKty6Vcc5crRtsVWXeViiS35E37CjbyxSNgM6ZQnsaNBcTePskE774Wck",
  "key29": "4jBeF7tJmsDfDbY1yiFzfK6NTgbDimCNkHDX4pkQUBHveuxjqw3pGQQAqRs7iZ9A1u2JQCBGYB8fJitBLH19dEMk",
  "key30": "um8e5axsffk1Kh4UByDd8L9Swze1v6npB6tPk8KGDA3tUAuCVgJ8HEuAfDwUSx2XoTQbwuDE9Cam8G5Bi9FAERB",
  "key31": "Q5BDDgh6SvCpaJaB9crPjtAjehZACS98GshdH5c3EP99n42pNsJeCZa7FyhbdsMtduMudMutdhkNpXexn4fCrZY"
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
