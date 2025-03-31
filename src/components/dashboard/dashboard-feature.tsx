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
    "2xQQH9piKijb141k1DzPxJ5unmSKfipyuqUupXDBgwMT543NgSsggG2fzBiBDu3Z9akyjDgrwFWaRiVxreN2zcrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N1j4jjTwEX78sxCaKptuVZDK8DCinhEcFXGt595zJ27zgpcHtgzp9yp5Dqx7wD1iq2LrjS4DC2p7jzAp5dvFTE",
  "key1": "8DZwCHjzLWRmY7JRKizV5HGBDA5xs4Us7xAUbUgwvoVZfrhq63nszKypLqRRHcisbES4GUxskzoxM3CKYEvW2Zw",
  "key2": "F5iuRzRDBwsdxYSY3YRtGsH4xugvY9gKq13QZZn5oQNyk2n2C7yuMFAX7Q3D41kpPdbWjBZFN3AGqkiUqmX91wq",
  "key3": "34QNFjDSeY3dhcdZ6Asc3P7fVbrHxn8MzK2eCS7RxTZn4FUXUKjCCUQ34WDUcJ2BTwaSH4DmVCn6xwKwtVPEeiC8",
  "key4": "4tTFsFxQsB3gTDi2LbdksHTxnsXgX2u3VyG3KAoPs1cvxqnpST6Jksyv7HeqgcwiypNqdSYadSeMzfJB6JgBKth1",
  "key5": "5oxhurDdd5KR3xW23mUP8HnwYGFbSvDGt1wtE7xPmq9XAe52gKtBvvJh6JD5Nq9hREQzryTw3u4n5upEuGLyZubF",
  "key6": "3BicjuyXgg744JtMj4PqyQk17M9D9M32rydR2BjNMscwGLi9doxWKVdaVxvZahrpDQPmUpHCvwfsKbwMSjhJubpK",
  "key7": "3GvaXADDhKuXCuvfrcsWpyx3hKnVL3imkgXsNapZRWJBcdVjR6R14x6tN8PLVsVKtEbrt2nk81uxFbVJhujMtpmA",
  "key8": "4oF2EZymWmLCzvr1VW7uquwgoVccnURwYS1NAkZ6kV78QUAEwyeZFxpUZtqTWuGGjgMZ17mo6Nabx48PooSaECDi",
  "key9": "4hbCdmgjN73mK1iKnbRBZZ4sDKeum5a1myimBKrvgLZGW8iSrrDoCVoX6xEhXhgmBi5XGdSZBAyZVJyfPXbCRE2c",
  "key10": "3oQ8CDgdFzQ7cbbHy3q2UEebFNvwF5huesSsXzCN5PBN6csicGgffyPU6hSCh3cQQgaKzrvwAgzt4bNErkUh96VU",
  "key11": "4aT6yUh5EeG6QVeZCxD8hjR7Y5vbf6Bwbf7DvsBXJyqxqW8LiLmeurQDh17PavNNa4NyY4KMjZTg7SgJvbQXuyUf",
  "key12": "22d98m3jxjdUfgpkcHRKJQWzGW9c5hUkA3yq76BYpU4nnfeWvgbeSQHJrc9G6xfoub8Lyc1TsdHJQ6cbpeuUi1gH",
  "key13": "3NKeLXJ1YFtPTgKhemuNAonSaLbC3AqXcmHf5jHYeMA5Gg7dnJjvnXTZsEf2KHT7cABZGK4rdLC6MtGgqKcTQ5nC",
  "key14": "47RvxNz2S1yiP8qE2FaD3XhP4JpNy4URsaWRFkt2rCpJ6vLD3GGxLceuAytqkYg5i7rLu1sMABLgbJaFDXTMMwTV",
  "key15": "23bkgsXvLugiptZqd8pEieXbMaoWFjb4KjREEAg2ZtEH3c8DpXA7fC8oJeYrA4birs7SX5HiZYj8xLzRwPsFDjYz",
  "key16": "5sQHTkQXNBWffDfAxiRA2jwQCKPC5xkt5VzofQbwNtT2yFZ7egzr8F5yMi9buciPa2WpVkbCgUCXDpK5fc7dxH68",
  "key17": "iUu7JDMb8vUSgZqiy6MDEdZU2iujCBdL3jMgfSgGHAPmksrnkDKUJBmZEEFh6TLguuNUSrDTGFHxVctLe2cAf48",
  "key18": "mupUeSHSENF4n9E8mVVjKCBSpn7EX3RZK4QkcHu8GNjCXUjjKJ6D6EWUVfA1sq8B2cX4KiNLDYMQmTtWuBBpPPE",
  "key19": "57tH7uH4Z4ZLQ2SuZKRsTH5wu9rBgM7ZYXHMbU2frVWXW4d4WNQvuqo3qjDW8i9g36A6rWpc6syQdFjECW2bpKP4",
  "key20": "5C3oWiBBH5Eka1n6VH89Cz1GhNNie3UpDucjr4emCQb5EWjkkcryVyHYhvt2TZdA9vD9BMLTrwxCV6LincHu4uLE",
  "key21": "59CpFKUqXECtPnfj39umH2bAA9z97Rb1TpL1f4Pa678LLw97qWoSLFLYNndo8UrRQqNXiH1LQLG1CKzANZJPAiAq",
  "key22": "3pKEihJoppuRxFWf8kcW2Y1fQiqMXW2CqzBP7S39P8DzzaE9UkYHBiq3vJiiTqxM2PdT4EsMDnDYoLyGmkwRXnw3",
  "key23": "5R6koE5Tpc9oqZrjw8hcYveRY4BZJTKVdtRwwy6RRnKK3k8eXz6s3EKbfyyDupcEjsMTQgWS8cWeJCKzVh48LpuJ",
  "key24": "2VRLZzKpv79GuKiZaUFck8wgeJwypLTF15yJYyn7T2PJSDyjT9SF6gLBNux4VWHEo27WqGyhjmYuaiFWHSaJB5DB",
  "key25": "2eKkUBG6BuqaXZQ48anGuCATSWzM78e7tbZ5wS76vSTqg8EryBjXTfd5hEMB8tVKasoe2DMpEzKobZocNMjjiKve",
  "key26": "631YRp7BNN7dkf5ZJKjTo6xAhghCVN7j4F1uzBi1Mwdbc5rbA1tpTJw3BXYSecfHRps3gDr5vCdaiXQFmb3TkaVw",
  "key27": "3CUofL8KxgeYXwKvnAwdnaukCmC9i7qBkdcYZrCkwSmTu4FXBniG1sSbrk4bUQpP3kVqvDA7nR5UxMq6kFx9rMZ5",
  "key28": "3tvc6m4uF5WoJYq7KLhKpS3d8WskyQgSSTnLvsfYJ1EDUGzzFm9F1UUXVHTi9cPrHvcm4PQjjaGDbsQh8vZPBWbh",
  "key29": "2KzLmqafJyX1xwzdE59rkTaLdnYPU7c3iVWPyhzXmM4ay51de9pvhhj4HKjzps5BMfjY1e3AdUpoK4DGcNbwadxQ",
  "key30": "2JJs1Q6htTXKNwtQ5jYW2vtXU1aSvdZksGitfkmCYAopmHQmq3c4cEg977Fh2P6U7sBpvx9zmWfTMDS2VqZ7zsKw",
  "key31": "5rvDxH6UPWzUATvC4fAPzy68Xo5HgK4xUa4PPsGGxeznn27Aih2NeuVo1CVWQyHpWG6wbJXb1f3yyQjKSQmBm3bs",
  "key32": "35w15EefQsHr7y7zyGYiCCJ2GgFL9TZgniM9C43EimPsposw2MHo4FScMzskjND97Y1v35nuzNCFSM8JFDWnoSTc",
  "key33": "4g9esjxvwkg7pRsbJWRjkdXukn9db9dA8BvXaMxrFsTw5JC6bUZ6bLg8NFm3n6fj5wh68kN4EGgyRfjNeLxLxqZC",
  "key34": "5sueZDkELWvobRmR8sNeWAZyGWtGr7rcJnLZtjtpuoGkL5v9jswYmo2BgRmcQobqyRQBHqzBKGvXaTu9vgR9TDXb",
  "key35": "3f5AKdH57ybr3qzNRGd1o5vsvwcSXyYzrGWPiFzasSpdTaMKF8mwj8tb5MjxbCqKZnN7Un3W6p22QMCZkbU3mcSZ",
  "key36": "4KuGLr8f4SisoWyL3pnsaDVbGa26LkNjPuM1gqHL3y8zEZJmhswBxdnLppNYFtqR3eyxw9egzbdTjafJsGnsHcrG",
  "key37": "4ycjQnUvfeBHeFtm1aYppv1ZLeEETpWNWjNzZVMJW58UeVCEykso38VJ2bjBwqhuSzimxWBeF6Hxn9MG8kjQsj1",
  "key38": "554gQFaekE96ehEjxSgEpVmbQTt4P5WaSQgzRCtrnam1A9eRZiZfZDeEAV2diopwhQkrnN3b9F7aBKXDW2Dp4qVD",
  "key39": "3ndVf7T1Yk9U1jxczqffBqhZdTUyPvRXU9QPWEoCst9vmaQYbTdkRpfjpiYqWtAxLQcXH6SuZ2YtTUZUd4ud3JE1",
  "key40": "5QKCQRuNoqCDGw9ufmv1Uj49zn3eRPv1npUpCSQmStNJM6vPcxvvDUgKde8373usWd7EnnBCDfhvfD3fu3FPLhwf",
  "key41": "44DUaPhMPYpJBFPiMHVtwqpkiAhxZB7Eys3Qnrr2x61D78QduouBAsSJ5hmgokoGQ29Cinnc8zFpTvt2PQCsH72r",
  "key42": "3uank3AomG6D7dt65ha9QwSgQojgwrB2zJB2R6nsLj2ykM2t4CxnJWNRDLsV5beDCLkEbfV8866JvkvDjuqgTRjS",
  "key43": "2nsJUFTiX8SFPSzZHB8yJsvcddXaob1RYUVLBHZ18GxPDmdCEByRrkUCSQSHM6vc6oyRdHYCy6ZJiujAquJBWK19",
  "key44": "5j6pQdU7pqoG85ss1LMRzznrQeKx3Xo6Y4btDjYfgcvpduvAZAKwrL8ZN6bKj7dVpRfPpADeXA4QvkQMGw8oZZab",
  "key45": "2ZCHodN34KKtWoHmwbwTRE5Hgw9FBAgjGBDdDUg5VMEDuPW3CLsLm2LwKW3Gr4CJLmNRbb4LosaNm1K2xaYfUMwd",
  "key46": "6MDEc19M3XPr6dTF4qfJF2o72BFYPvpTakrUAtommiEEdkhYGoyB8rKAAzsQitK13KJAcyjD9rVtq1EcqyACnrT",
  "key47": "4otpDFs2J4PUFTYjVfAngumrojDqNWhLJ9ZVJxWRwJSq6XcLpjFSyvNywfW8hAYKkzyBsscbho7d3iDH6zBQzv5G",
  "key48": "4EvtLHHsBbkPnghe6xnerwXdaQKKG7biT6gwNKctxf26os4KsTjwPMhtqAAi7yFuiYHPDRYv66YrqhMSPG9ANfHz"
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
