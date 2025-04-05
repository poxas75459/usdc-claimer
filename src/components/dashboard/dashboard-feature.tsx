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
    "38G719YCsWo1fVmmcmBWYTbK46r94YWJFvBJVaR6YrwaQsAKLzrHiwJMHEXEh3mxc1ua8GNnJKRn6vjQK7R6N6j4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H8KgLpheTFJYvVeiajqBPZWtSrzwJcrTrz3BX9XZkRUiUmZA4ZhHUfiziWuL24AdMHEUURTnFJ7gSvwnuAGHDNC",
  "key1": "3NwQDv8W6qt1oxtJsErkmqaP1EB6DEU2o5Yinda5E5DuRpQq6SSLMhtvYfXnfScusnmNghDY1ysqsppiVuxngF3R",
  "key2": "34z3Lk3eDVg5GhmHTYDTRAxhEGz8tpWAsWcNCitijQGHRx6mJVehmR1iEgARxQnHDUTgZ7pcaPUCx7vRLqJQQeiK",
  "key3": "26cyg2zjNAgmvzmgoKspoE3gfXvyaLgXvzM54PK3YdfnsqejNyxg1sLYZXsrng8puWtjN8KiKMqRgk7c2A7rSC95",
  "key4": "4GSBYFwim2xAszzmMtNPHkBMWmeAnYNwh1drSACRU4BpXRFPJ8T41em4EsWjcRCjaPXYL7dJm1wsqrdSiZtUwGND",
  "key5": "5iRi2cdtM3g7YCbV9CVB54Z8Da3LdSKQNScKJvToJvvqgLo8kUjvcTpRtuPUNpqoGLivwT7QPaAcHXnsdpzfgHjk",
  "key6": "2dqXZ8yC1i8yP5BeVqkgrvpXBzA35K8BM1xkaJqLvxut7NXzADbFbZpNxas2XdMSwiyntrna1gCQhK5dJJsCj7VJ",
  "key7": "WXykN4Pvka6uqGw5BkmGSTsuBaHVTVDeqXdtLo4zX7pWZG1xC3Y7w5GHAiU4EQetFiyKrAQ8E46EBSyafugonEF",
  "key8": "2itJdG1GfaEmD1nZiMMj2fcrSNL9jfCJKZMgNUVmT4KHhZQM8SXQ9VWH9o6oPuqDQ3r71joQVcR8LerWdA8iX498",
  "key9": "4CBgrb4K7Vgp7BE2tzK4Q9pbmJ5bmMBvsRtV6BJwLid4wiMxukyoQD2yhZpVdUzfha328KJyPuHYKcdRKVfhzfwg",
  "key10": "5e2fwLa8xUZpzgVQnwYVtgF6rKaAN5StBvQXBs4fUGyCDEatsBc6Tx1ypqNXZbUonwN9m8Qy9PYgzLBEKDwtaTyx",
  "key11": "5JhP5TCkRPHGKz5itnXjgHxktJqo3X5SGk4URoPDLWDBE19ZH1QG7obHsBGDcmJn1MUTgkkbe5392J3TqCEfDT5H",
  "key12": "2HoLJECyFHMktwGrT6W9Fg54rdqNyaP6DwxBwDQaLBmo2gEnKSzLM6bht83vsEpyiSc4cpWdMHaSCxPsJhvWqQk2",
  "key13": "3jkVhusNm9PRYqVBwbEEie387cfWABeaGuxoGrNPra9jyBNGaLnfhkUsWiSzeyCBAz3123V7GWPDRQnYTFixLKWy",
  "key14": "62rMqi5vJZji8UTXpCehJ9ZtyyBuyaksZ6zL6sWTUx3UWN7hWx31TXnUc2vpHx71XctmSPPFP9EUnGcdxM8e9Xxv",
  "key15": "28zSwGzfdYc2csLDKnePYQeBGFoeJjc66eMm3JruzUyok9sDcRnubHfAGsxg8gWKhhLKmq6bfVUqjLGpmuYkGYLw",
  "key16": "5QEQ28vDcVFagCphBcNx1xLXSD27JGdka9zPhJUA9XgJRa1iC4iya62fUWRtYPabDhSTWPD1UfWNM1eUMFRv8CVR",
  "key17": "4uR7zzA6uDYoyX9kPDmnJVcCvpNvv5zAbjXoV4eyRvAPTVjJsJXA2SNXu8Hm1i2zdv2Ye2ufn4qjmx7ByTKKHKGm",
  "key18": "2ns8w54L3oGrScx1CX8amEed2AiAQZ1LfKY4vrPDb64VihAMyiwTb7GHkY1WGUprJTUVqnjPSq4VmuxQaUJYNgZ9",
  "key19": "2UWWW5oj2qoCs6Ebqpigyf2gSva6dp1HdptEdNgonS3fihWe7PQTQC1TDMWYRiZQRbp54fwPDsZhKLCqPD27dK9V",
  "key20": "5Snmdx9sQk4KxNkWpGAR5dBboh5wog9uhNMBMnEkbiQxi1VYwydzfpfUKCAWvFFL2X1ssgxz7zdm94LUQDbF4A1E",
  "key21": "QeCUsfV442z8xX9fg8HXNq7hn29izR5hoxfV3bZC4WFmQtNf4ZbkmtESMnNUZ466UzmoEsbBPejGMKghHLgS3zq",
  "key22": "5tPrJAmVPZ4CcnbaGNi5ytB9aJYLNtvsE4r5sHKo1Jm84VNvXLefZi3P39eA8dmT99nubAEtsYn4nCUD1XkiJDsn",
  "key23": "moE54YGzYfhygkG3ts2YBPGKkb9nRonEW4hayGzeFtX4fH99Kup883ejZZgqWRSHh6LJbkLxriaVy1CHrAfzsJi",
  "key24": "2QzBZ3K5ip7pVvc591Q6U4DJsaeX7jCZ1z8r4oc6yp4NXZM54ikdmB6rG6x8QrBmB9QqYmFHd3JYvt1kbpAtVz9g",
  "key25": "5nYrqRxMh9aPjDatENn2GxeD2MCzMWToodeKVWHrKBC4er7k2jfWjtSgaWUM1HR87nLkbigwnoo6pcukWqzKffUF",
  "key26": "3thwXfE2oNc4jRthaQjCpAMEbxR7b9uQWDL7TpyNDkTY2iRbzzoHYrX2rkUziwTP342t2h9qucdh7yHc4ZLyRiMG",
  "key27": "5Jr3QfEtmaXEzM2toZ35xKpkMm3KRpxnkVuP7Kskfkmh2HodiFZnzij342vj9YeRTCMY2yJQ2y6ggeeLq3ynbLty",
  "key28": "224BL6hj5HaoHCoBsXmYzdsGZ6teDKtJjjN9uLNCpuikNBR6FHJEKbNCBPqFifdh4PT5RknGyhCyjT2WTFeE5FE3",
  "key29": "4TfPdF7Rx3kb3HBxPN5FYeNiibv6xX9Bzoud6JZWKcFLv52JsQBB6DVzi1FjJfKNMXc95EuJZu8tEsRaHre6MSxH",
  "key30": "3xNubV5dqmXUMTqfk3DSQWDoE6Pr8Vi33avN4AqAsbw4ou2U6br3oyhUDAFHJS2T5DVo1Y99ZBUhfnigz23F5X9f",
  "key31": "5VG8j7p5vMhs9WwhqCybXGqywZ5bPmkRgm4mzrEUxKxrw11phtPowhxuuhNUYGHHtWBDbc7jdNyws5cAE4K1VmUm",
  "key32": "5zpPRfZqKkYWdPPqvyx7KCM6sqQEyZwuDkCpWabHeWtVVWQSqUMLQU4WLDtvKULcEkDxPUzLnEGUN2qxa5a9r3Vu",
  "key33": "4JRhFrSp4RaHVftcf4RsX1XEoUZgETwG6w43HALhpNH3PtDvpo3zHMP2s3uNA68Q47BSke5Hc7RguFtwQYSvcwdk",
  "key34": "aH2LSTtZ8avEBuu4mzhVELsEreRki51xQrit8eHrG6eBxYFAvtnAg6dSHMPDLdbqASLjhdjdbKUkQMpDL4kkUcT",
  "key35": "4zxLT8vzscr1bANXKNdJSfeQHbWDbGU7X7QgKTUzjxGz6NNLR6XLgRSP9uCFMSA2NSr1w6jrKcLUUAEtP2pWjuuF",
  "key36": "4eSU58r4qmgWQpKA5BGAd6iQRJ7XDtjtZEcJiaEdpvEMuzRBd9SB98W88veVjNDLTJgXLSjatmpL1PfkXHM8vkti",
  "key37": "299dRiV4BPTaBMFXMvMAjjua2S55j3QNLHco5S6k6k8EsP63jg9iP1pDnf4RvGgM12LUz4FNi78uoxFyazzCrdQB",
  "key38": "2D6J9geaYfynDzEaVzB9cee3TNL82Da4S46iHREMEjKQ5DNoCgnNa3UHsU1KKvK7HjBH82hnoWkEcuBqqpCjDedN",
  "key39": "5TJSKvXgsuqGB2UB5wMkNjgTQ51PR9t2xYBxN9vLvxt9eQPY2EzTaN6FRAFU8vjihegbaB9bxTdpPypnicmSid8u",
  "key40": "5n5duffYmNN2V1wmHYWdjftTSgATTehjRcHutaCEanbdg9x8QRbE72ZaimRiT55G7Jqm325hKo8jPRJCCZMnKX7S",
  "key41": "5oEWBv5dmAQW2SHjDyDnViNyjz7jQL54y1e2ZpkSbeTTbJdcNgA64MDRhfGTXbBoRY3kzLEvNQLo6FRj9dQnHNAV",
  "key42": "4tvvQeqcabshVkvspcAeeDXk6h6n99bCnfJnG1D5vEZp6xm3VqY1hUNDWvGx4PwubasrgQDkWUHashF5hhRwDtom",
  "key43": "rfuL2HSrbTg2huaxqz9YEDdU3biLYoZabADKAKinzFCKtkXaWs6vuBdqUMKVSJK7VPQHhg1e2nEy12RSckBQsha",
  "key44": "4UjA99nxmxLKhaYfECSBjzs8oRSVXGYhXWJA7jYGDRbLqkApV3UNd6DvdYYDeiZvyeEFHXVWLmRijGry4eJhgB7N",
  "key45": "5qHsJ5dnPb4cztTBCUGSJ9ML9rXEABZfyCPu93SexNXuW83d6CT6qwA2H5jbd7cWPLMm58stxjHaHcep57kHkkGv",
  "key46": "4vWT2srCrHuUqhgKW7RobszGW2eZkX7MWJYQjJ5K1uTgmhYbXxftESnWUvRnT87hZDZ7bFWhvs4oZvJwDfCrM2FB",
  "key47": "3xD4zCqLkiQCSAxfeoG2zCmUGcy2vHwLAkhqSyU7dR1qrC6ho9oW7HrJBg25jsrSxkMBMFnDmzxwsQUDrEbVxbfw",
  "key48": "3kqs2XiDd3yHuySkAz6tJ6g4y3vBygME4rb5doHRuA9Fz1ud2wrWbiH6kwLTgKHUw3ez7eGCjyyR8zxUFpndBsbh"
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
