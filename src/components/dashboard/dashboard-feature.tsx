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
    "5TqvM3BCExvsiivtDenCQFTt8YXqBCg7VQRoPVudLnmS6P5f8cFYdpssnRqKiszaQaSLrDSCt8ybj5Lsij2qN6B5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kLsELHyzJ3XuHhgPP3eJq5Q2sTfdNoERZqWHM63j6BEyAJX9tLkRXAHNyTJFp7pmF6Bb3kvmm5uNLQEBp9ZxAMy",
  "key1": "3YvB4NGmft6xKkvD12KU7AZhFzVXNYhD8p9LnfugZPk9nostD4YvhxTNEUjg7Dg5RLpzFYVztJBLgwHMzRCHx55f",
  "key2": "i8GNw5AzAdp9UFUkHVM7dzh6W8vXHgiqNF34QF29jX2EqFSQKSogFif3GxCpWFwVrkJ72yi88EbEzXCnEKdafZF",
  "key3": "45v6TXumLn9oaXbsnM9MhW4nQQMEVhmHtm4cBr47pX6crYKWua6NPxyQKBFR83Ui9zLBs1n5oh6uesBTK1rkCQRj",
  "key4": "2iBfq19ZLhesjBtTV2sBVDY3cfdfvvgWAeJtqLfq2mm15UbTue7Hj5HnNTVsDaCXkVUaQkDXvv8n9XdhYAzS7tYa",
  "key5": "8oFYUb84LHfRwQXmvfxxn8qVv4UiqwfeqcvJavr8kTvYoi9tFj3eM2k5Jg2TziWCVNu7jS1GN9qW7TUH2QmrrAg",
  "key6": "5DkdbFfFnw1Q2h3bWrTUWzGHvXd2yGTD1PpRRBZzKnqd8zTjjJkaRe8F7aV2TZogcYy6qgd3RVnfvHimTxTSfLFM",
  "key7": "4UByJXWHsSxLBo5PYK6JjhdWWi4PacPvuF7U3abTDFDWt7bZVSGgppjNdy31YUfaTfXrSjTwGjtdpQXNsDiGbwJ3",
  "key8": "5SgQHiGgwjUPt2KycBgqw9jZQ71x4dgYaERnqZvkWLpji6ZEoZTdCbQPCMQAG1cd6TGHfnxnn2CGfiMcqt65tQsA",
  "key9": "2y8S5XA4MxoPJwoKiyAoRnF9KNAkyjN7LTpicNzS8XtWVMPKms2GiseyKQTQjqodUxgxvr4oMzycq1o7bejSbKHt",
  "key10": "2NtoDMGdiFCP2u5pMC9MreS4vSGhpg14X6uCdiktSGETwW3fxHY5E7i5qBH34ope6KFJyTpaNc29acyyjWCrsMBL",
  "key11": "vRf9TcR4wfBXhmaeoMVspNPDgCgwLuK7gBTkGpJSVzZVe9hazgp2brutyn6UxAsRqj3TQ3kuGrifHXy9M4SDyst",
  "key12": "3ue1d6m7kG8oKziHNt8Ng4BUQtGXdrMpQMZ6h6kFAbUZ44zfzwR9zcy1gTftGAceCJ6drwcn6DC3boDWpR1A4HHu",
  "key13": "3LJVZMWFvFEUCzqyYJyhbXYM2fkVpqCSNFiLKKjLGPQejpfyqanz2fsy5cYtydTkfmduoreexz9Hxt7Gq6EcGam2",
  "key14": "4RkuYcsGn4ENeWDgPa6jEctBJApuh43ActcYDVMcZBNMTcyKrZQ7MFUSW724RnSw1h9sNP6fZxFoLzNpY8U64gJb",
  "key15": "5h7oqjF51U3eNCbwfuKcyz5s6ixPEsK2KnbNZCfhzWacQiFv4j5zvL11bYhMCJuKrvL9QaBrugskMHq82hEbtgY5",
  "key16": "4cicrX3uFZoBDFwsaS7AoJbhNj1nAtCCzAqkYGDkTUqoscYeUgtRYD1jQ5rskLqLwvpfgh5HPyvegfveBGtaUEPa",
  "key17": "3H3HTvBrFmCeAjwMHq8tnCGC2WmbPH7d39MNq3H3xZSBuH3JE35tjQxcxQBqy212ETC2QP2bYrfrpxpNcguQyANB",
  "key18": "n6tHtQUtZNtLNQBNNHbna1enkjWJxctohUsB9iaJxZcbNJM1xemV3vJdY9mUjAYPrHAFWMWpnmN5zWqUquq1Pov",
  "key19": "2W3sqjDbaYpeuHMBwbPscXenF5YpZcbdZyEKctxwK28EdGKvWSDpuAEFHiiv98rWdQE2NMcnQP1pxfSMMcs1DJsu",
  "key20": "wkogFLnYQ9kCTeFJVATxuuSBtdobHX7DuNunz1M5o7GFkXXh6CrusZCt6UkQSLm3Dobct3AdoLktcWBQYauSpLN",
  "key21": "4SbSDW2aYGrgLtmHHMSDqVBbcw1A7NvvvAKmMZmzK7rWhGbQQ8Ab3a9avkqD3SUWGKLuprP6XGYUBBhkifyoeHqi",
  "key22": "2sfiwscCyZZvKRTjYVaQv1SWB28Br7uPyRiD8dHhW5x46TqZppYSKbJFQaW67iaZqqBXpQoxc6DK3k329betvr51",
  "key23": "oPTekNyN4R2PxGtknXyjVours8VgBtLnwWxgn6S6XSj2xutUpo2smbEzD5h9213LuzheHVio3347BXZ6iapdAWV",
  "key24": "3osPi8LdbuJiBNbY6Baoktj79jxan5yncFtV7dZu65S1Qajoc5ZsgkDHH25XexUEjxS1dYWE2M6mQAHxdH3WYraB",
  "key25": "3zunPnvdjgsUZgz5DPabrLWY7qrbmvQckBCEhb96mb8vfqZ9tELv2q1K8qGLGPTRLUyKgR6RnvZwwt6ttGM1RFa8",
  "key26": "fXFrxkXK1eU983PMnAca5hACMy9uuqj7oW7t4T3Mr8uyDBgu7BS11YRaFsfKzseHWHnEMcUpP1kdWLeSzhu8ny2",
  "key27": "3fX8FXKXEqhNhCFrqJe1xd6vFchuV3LkBwkqaAgp6WyUYWfjGEdEJKcuNS9SGexkT7GiTwmdoqjCqL46b99jeVFd",
  "key28": "41UKAJh3qdXL7o47Eo6AizfNgsYij2Po5MKSYSczYKgiH3k5adPuWA6yfZppENJE3yHBgcBMa3rTcQ2GPZEqD5z4",
  "key29": "1e2thCQbTf65L2qgNrqf923885GWQDQ6Q6iF46d3Hs9s5YsT7SfsKN83WX7sjuSBdaPxFFqTXKpbvnqQQeQWSTY",
  "key30": "5nfQwa76DEF5kdHLEQjim8ArL6bcfXYH6JfhPykeHaHW18DzbWpR9MYEF6qEDSWSw1bFMCvxs6f3Ed88bE9uvUgj",
  "key31": "3t3h7bRqe2djnKbzsLJgmXr9aWGM3yMS6JMiSKj3swGR1eBMR3BGrRtGCnzmagKp6r7tG29fvui2RmbxH7ujNow1",
  "key32": "5HHLjin7m4LoK9tT7t56bZZjGCNneuy2E8fwtpEYfFE93J6EyHwXqBdy8S8CkYsvzdVRzfLKvZpyyveiKsLXbvpG",
  "key33": "2J7o524J92SwTUEh7Zr2yL4uhMTHgFF3fBUtZotzEvt7vk9kJj9hmq8r8YhJBH7NJb8GK6J1GRPBuhegdpUhMMVW",
  "key34": "4wAEoSuv19tSfVbNGvpkXqRbcHA43VUKJgxUpuLtGDdZAaUFu9PbaVAzZf8iLBoi8ATZjg9gvPTobCzKPUYSxgZi",
  "key35": "32zqxMTJc9QdoJ52BbXMX2XiiGz1fDZgT3kNrytkQ8PLFhrfSzAGAtFvCPcdaWapnKgDvig9dkKskdBix67B9M3F",
  "key36": "22rKJAzVU1jPHJWVZnfLttj3oUuf1aoP6un9jbQ7KVPKzLbUa6fwFYUSAGyUtytm9ZDL4iN3rf8Ho9CoK5fHzSNw",
  "key37": "2jmivfsJthAkd8pvVHDyhz315utNZqrrPeT3kMPFuuByayypHsGJi84dXucC6q1WfMUds5NbReBVT8GNCTxwXK11",
  "key38": "2hnkpZqu4tb5S4qcoeRM7jGUKMpBtgGuCVg38D2FpS7TLC8tajS6BvCDFwgWbWAd66sF3HKmpiaeqyBbQjJT2Uq6",
  "key39": "5f7367fE1hyD7vw5BFvSHLzoj8ZkwoBGNs4KAWgP9mBncVZskki4PUEPvYwr8Tt5tdM2RUfvAs1Ut6uh3oq8751D",
  "key40": "4CLgLHmzR5MUEsY7JZNXQgwdKMa7ZtqvR15k4b4JGCRgtEomg1f8pqYK4LDCLhjQ6L7WPssiUZUSN1NtM17TPZQu",
  "key41": "2x4FzLap6xm8vpbUkgeRDctQ8fJuLmC3bz6mfhgHEr8kXjsBqmpiyV4VefNjzBBRYdUpdUZgLm6ygYWooHemCu4A",
  "key42": "6448oyQJpe9j2BHFbynRBTXEj4dBpKC6JwEqYtS2sZjD1p8L4VmvAKZQ2bt4xoUY6e9db9b2Y7Uuo4ZMcY4vK4Bp",
  "key43": "5zar6xPjPsAwnTEGSki6QwCJpbXMr5PxnTRa92wCMJ6B9rcELi3UrtinAxfrCUYDcrb7EnFqsv1jrY9MK7h4d6y1",
  "key44": "2vhjPGzH64DbJ69crKPoKFj5qApVXvFTtRXo6vb1nbUARJHDDH5bHUh6ZmY1dcKR7RT2PhzEXR6oywbnYEyigFvR",
  "key45": "3pqQVnyekfRcHxq22iV4yRQsHrjYGoZizbEkG9uSCDjCy28fy6A9xDXkAMRDXg2NXtvvpage6JydciP41Az4pjJ8",
  "key46": "iEk8yz2jEnr9iQVnSY6Yy3zhH9adzAACTU2WNMuJmf6XbGJoAXcYMm7pcXK9ZT7QVjFdJXndYWkH7B57rZbLbSU"
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
