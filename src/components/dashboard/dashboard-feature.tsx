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
    "3QQjmZhDHExM5ffVe8FjuJmASCZQqtYWfqAwYechz2sUUX93PYo2BoUKpYcEeXmohNgvky4BjuLP6m4kMvcWDyb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jC2udmePxfSsfXKLJ8sqBVXFDWXkmtbbo7HstWHMikwJBZUYrPAFpthpfxTWRiF6nxjVfD1Y7HBVYBRacfGMJbe",
  "key1": "37vMvyUCUcPXTyzGN2o7H6aKEvCzdcSAmJUrzwxBpf4ezJTZ8V8iKhuoqgPUSESHrqDkRmvA1WdVvrY5ws65Gto3",
  "key2": "3pGw8kMvPk3GisbWfCMpKpGgjKvaPBjgtZGvsnJaVXD9xPhK6jJPzMbfpLwHowwM6ZAiEqs6QGTxeZLx7mq7KojG",
  "key3": "3hQQGcLg91kRJdbLMiMMNCkFHFedXJMM27viKswoWJXgqwZjkj4cEcH9ioqMfpYbwpfZQfyBEt6djVd3MkmSv3yJ",
  "key4": "4x6EYrb4SGNkN8dFBGPChqaEtvYuhDmxM7y8oswDivyNZZeALjhYDKqEcsFsbCPcZi9vmDFeDYtQ2jGL8ipVucrJ",
  "key5": "2aDAFC6ExAMQLsuRnUPBMEjVG3FBoF5UtRQZ5s6oZVVLGNxjBVzjxMzAGbEbPkKzHxXABZF7aWZBoLJwXVKFRjys",
  "key6": "2xya2WxwkaPZQWtzK7JfW77jJpgW2wTBLL3hh2GYF9SYRU6bjfTmiJfXRdwuR3xnct4HJY8ptHuZonCwXmvgAhBb",
  "key7": "5wXwYy4ZHWAmcsXzjwa7dLnqgUHziMJeDEJ8AJsLnVGpNkA1TDDn67QBc7sZAgdXr4Ap9nhE4u2yH8L9nT1a1vQB",
  "key8": "5hsytXRggNypVPVxPvbfZiT7KNDNb9hArvZdjVuuvg8gSrNWyYE9cRapyP3tf6SYJN1hJpniLfSZa3rKX9U5jXVP",
  "key9": "NP93XJJs2r5YHeWh848dGFvKP6a278GQnwHdtmjxuyLzysLGabqfnvSJVkDpzkHnFVNc5LbmokhA5e5vVjWG76D",
  "key10": "51ATaDPMnGcA5RaBp3HZ9UBcnHmV8dTRHR6FpsKdVbGcQDT1JyrwH6GtTHEYwsMhvgZ4xtT6UH3AsUKggYnozdGV",
  "key11": "3r1CVQQqUSZYB5FrE8zmaVPCek9Zgk1wFLRyj1Vb9iPY3kFrCajdJ24pZyYfdNS5VChp4sHTvJDwpPXpPzU7VtQz",
  "key12": "9ujvxGezJDRKGTrSX68iwTT9ymL59dibT4xMxiPSCrZSKSwoevo6ioV3n2SGnafdpt7BactYQX2mNEotTxDVJXm",
  "key13": "7a9AED95gwTLpQkZDYkuqBQLyrVrhKtc7BjLPLnBS7iggPFopP4QSrLwKZb5uAAT8rsEVLJ7v478q71U3gJm9eu",
  "key14": "tM4zTqMMKYWwz3Zyastwtx6KHiupvXqEc1hpzyAqNEXcnZg152DBeBLAsQM6Vr712z1kE5KBsvBtZLvYwis352L",
  "key15": "5LNkkZxKWE4XvRNrpWNQLi116yKHd9UEfpfb6nAuhGKJHgSimyqd4MP3ewsiCJcm5VPeoRnGiE2HiemJjEBE2eGy",
  "key16": "2Lj9H7CW41q3N3ag7zmNBXzacS2cQX1ZxzDLWgn9jYi8g2QFDyGuuBgjy2ppAXYUtHjBfrxFPzR6mjhWxtwnwsZ7",
  "key17": "3gVWpsbNVmYuCZLP8xUtFSPX2cBRsDbkLLhMLTyawGrSA7gU1jqjHnG7kXC6vrpCJaDpk7BqohnsDpZSn6vTdTQ2",
  "key18": "33e3FeAQ1CgTEw1ArXDxFcEqEYK58RZXc2emKqcTeKTknPNCSJWn66rEN5dkpU2trJK7tXxACoEC6fGreXuKdjVK",
  "key19": "3QnwTF3etUMbLJYDSU6S31WYWR37VgDKniAbh6EMfdKj4ePrXZzPeg4KN2JHFZbPU1b1jcikhctuAPgHkh5NM9c7",
  "key20": "5P6cFF9BQw2vx7VSwsvMiRpXVA5tFD83XtnxPgsxnXxMT7kMJdfgauYSE4PSVgtGJ5GmB9gJ4QGNL1pJXHtDQ54X",
  "key21": "4CP6VZ3dk8tmMPE8wVVFgPKQc65fc76Ys6689x2fvyjWnr6GRsbhaM8T1Zbwi4omMe3p9zHdjr2VPGnzpTv2JNtN",
  "key22": "26of2Lo3HxQixJXzzUjXtLS8N6MC9Z6w1MdDSMjr5aBs5EgB8j5Pjn4urjx8NkaCoPY79zxV7zC79FD7orPR6YyK",
  "key23": "Qm8qvzcVPgUUBjxgV28dcrCmPhPuRVJbNgzaZdmf3L2iHcQXk4AL8hU361cinkC4UGXEpMhqXjMLS2SQRTLtHNy",
  "key24": "21jc24fMb5UoVMoqXyeCEKhxUFu9GJHnpCE2hr4VywgyBaZHnb14PDQyqEwi6XPsGZUETSM4N6sugnVX7aewC3eD",
  "key25": "41BPXt51oGu8HinWwY7Y6oS8cyDLtu6m2mokg5oN5CuHpeSCLSiVGddosG8BvLLhgUA4Pn5xT55qdeLmM4ALR866",
  "key26": "4DaerZ946T6XPn3QFKYosnsS6zx8j5PDuRgAhWrGAERAKB327mbV5y847xd5vU2zk5UF3M7M2Ks9ot8fLWxNAkW6",
  "key27": "441VdRFSHfduDicvSCDsPap96AEQqeQPaE1bke18XSmmvZdee28PLM3xp3zAqS9ph9nULPDj9pSGAgNepFLHNgtv",
  "key28": "5XL9YEFeYE8VUvsd3WCUwDTz8ukAq3r9QDDHzuwtCEJLDoM6PAGKU6zvqHJZPgo8XsWyY3osQqQd1FPADmx8418i",
  "key29": "4Bj6WTRwNJiw3CaxpvJ4YDXpFMGv28S3hkLqRivkQF9DC8LNEipVb2kxqgUBFyLf8cU7jp9JSzCN2wy1QqqNUCvH"
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
