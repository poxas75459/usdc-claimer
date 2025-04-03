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
    "4uXSmUUyDXUzEnpt7ty9wG7zKdUJ96gAXz1VgUMpxyq4BpUz4rqSUfKCGR9RwUja4Leh4j4VvugACcCUCDPQQeTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MV3RUFgTZegCJncyBLCuEz3ftf6qBoNU6tRUKMm69eZaf9D4ZbA7Ame8oVj72S8SwATWuve8DzGKrqHgf9DQ16A",
  "key1": "5VAXSq38sseopcuyEs2aHuqMhJ5E6FgqGxRYDrLCBu9hDBZTwiAcudtsz8HeC3F8VA64k1wPATiM7wJdjW9yAVi7",
  "key2": "3TuyjPxuCpQh1iFD3Vhhhau8oTJ1KNQgXc1yEirUokWX39fuHsBiG8a1i2piNNSNWuzVKAbDEMEKqGTCNAcgiHxF",
  "key3": "3PNJAvXaTqC3MoxhhkYFsiGoHmykRm5MhTFickRTaU8rky8gHM39NVMj9iqEnX7ozGKauCkfGvkwKuoJUon69YTc",
  "key4": "3RWepQ5s9U78RMjkQ52SU3Yz7xpfCUdUH5Xk4jQHCdrJNbgvUXrCzYq43RVJnfyWBi6w7kKaHvcZR6SYH9NT62Cd",
  "key5": "3xnR8yuYauR8kpWzQ2GxVy29Z7uTE3RrzD6TsnwKiFggmXfePXa6owVTYtGbENMBUoW7cXCW2tsgbGjt8Z4etG5H",
  "key6": "3jNo3UfZ2i2x3M2AD8VbZ95zkGqRA2YAWdTvXJMwCtpdsp3oHGgqpFxNGErzpSYDLo3HYzPUwtdaHFmkQdNUJxYy",
  "key7": "6aEQsgQEKnHvHCzqSbHJvWqjsPAd8dzZJQm1LvZHPT2yofqybfHVaqqPST4b85CKzX6XWCwC1PmrALWEcQ4FgnD",
  "key8": "4LHNF9tVHNtX85f9b8raoCF6SkpgRZBK6aQcL5Q5Cb45jJndwpkkmWw5yuyo8AhTK46uBHUjsTdK4XkKxwqJ9vdE",
  "key9": "2eENVKie8VgSprJRfj66QWbeaFTKVn9Q54KfZv26h2ikcwCMKCYcZZwUJHvBUFzxXcyNvUzdnG1nsTwYixTTv6Hi",
  "key10": "4XVA3akoYooUzv1wrViNu2rmuNHUj6xssySXsaYxtEsmtfVb3nCt7G6yBL14JCGwqrkdeevXJgjyJfHYd5inrFnY",
  "key11": "2mMQocT5rsauKftABvSUmpBKRMeyaRwXnjgpkkSjEQCH5JphbEbhTm4xNjZ1jier2SNweCgSsyWpu6LuZqHVWUo2",
  "key12": "g9K9yYbjmYCCuoY5a82qLjTc2kMV1bbCogeh2QKfy932tf6s15z92rAaDS1R9HxS28mZJ7aqD5VvkuLqvsRi7gp",
  "key13": "2iyjTjeWL9ems5fMVpAgD4VioejA7JtFo1agcnRgf1sdZyDiDESqqZo7DaNdmz5X5KY2nJhY85JQbs5PFDtdUCKG",
  "key14": "AdicMzDFBreYG3ot8d3emTXMumVR5eTCp2z2pcnUhkPunjG62o8d9qRPv1hrMou8N6S3qRvg57cFtet4KCksYNd",
  "key15": "4RwW9UQ8obEteGh6zKCqF99AXc3DpfAjSfVwCCzZZFgS2YY8v5yGqc7WPZZJqiiTPDQT1G2Zd1Ttyu2tyEZr3ma9",
  "key16": "4AWUxmNYpHU8rnKgyB6UUHWmKbKD39B7JHSQS1wWscuphCxPNGiqSmdiyPWyTizVEJswHtXaKGFbV4srucJ6Vhhe",
  "key17": "vyjHn9Ts5hQCzqrKFBSXPyjzSRbJWdQsYY61RL8R13WX4A425MN2gBYiRrXnJEMXrPAc19CSN9ptfkKTMjGML2Y",
  "key18": "5NYhAhJNpQ3qGSYzVj4yTGefxCz9YzAcPojDz5pCVtQ1DDP4wqug5EjTiv8nEpYuutBRV62pwjbCU1D2nbFsLniC",
  "key19": "4oraV9yd2vBHNkS7J7zNpx7to7PryCT1Mk5QavRGWmfgFyUTqwipbjw18gcer3zSqBB8ALxXiVryLKT8gztX5Gwp",
  "key20": "SfkL1hsP6DfEk744oJscAGaC5fkkH83JzwWqMzJF8DTSVxTCufad7YwwMDC3BQz74rc2C1fCUw8f4HCVQ5JzxtE",
  "key21": "2L7XwrYVsjMK7SDynMhqCQ6KCFbufFetjmjgXSLF8K16Wtm8AHHyV5VXSaYMpJo2uXy53qbV5urmF2m19kDp5D2W",
  "key22": "5BH6YUuof4dbxsgBNTVhdib61wvk1AJRtAcunUAU5Pz23LDwXQR8yo4MEsyDCM9Rdx3RhVqZaXTxs1N9rsTRR6LM",
  "key23": "2ycxFV6pAoRJJU1qYzRbT99cdbbuKZiuqWvY9sp9BAxB2JawfDHbrUMnt8jxKqwEJ8suCpWC8CEVzoyfbrvNQVpE",
  "key24": "2GiPXUe74Xrd2zSYFcv1WiFj54k9ft2fWxtPfpmcH8LCrQ2nDEyA7dGEuHQ5XGZxBHskhxgT6Zj254TRHEKDh5CM",
  "key25": "5zPJLm6k99zbhotbpvm4XD84inu5s7vQakJGk9zoVxvJiNGMKd5f4urfDwK7cw3Q4AEDjBnpsRM1TXpscaJvgdFK",
  "key26": "3VFPwUSawi7aU9q9kT7q6QRtDXB2nkhUskxVGqE1yRbqnR6aiXvASh6vJo4pheLcLkTHHfQBPaWjFzR4i8DufkPh",
  "key27": "2AsY87EKNN5BgkqkQkUv27U7TkUgnKSLU9DuYgV3jpbywhoRswQH3VmDR4HxaJF7HviddmgnnH4BQWwiK2jLdZmp",
  "key28": "3V5u9wRuzTmh8b6nkKpgYDEydkFDec7brJ6Wdi7wTQq5bWhhrtG3pnJ1jMqSTMZE7NApxXYpiKN9Xq3LPEsuCEgR",
  "key29": "2HjfkQ4c5kMmoTP62iqoFkXAXHncFTZb6mDLcYXabb3S3WSDcJsAUMXABv8HRN8XTKP2iygBeYHFRhVZCpji9gsN",
  "key30": "3qefmqV5tpdid6bKERCDnRokceTevLNQDqv6B8wGYYVDM7RSq4UA8spFDsCkGp8kqkKzLWSXyi1FsXW2bLK1TTfA",
  "key31": "4FPaE2VHpm2xKGtmQgHXZa6i3HnFSyY4XAwDyCwpyuhFs2WPBDcBVwGt5hdc24jHj9F4GeX6HXR69uewKZNqNit2",
  "key32": "2J1gWCtHmVyK6hKykYCWQfCDguivqKAp7oaeTVsr5eP3ttJGx8jABffrNZLuZziVu9meZ78FtYvod46dqbNegjap",
  "key33": "4N8pTXrYtEqHZYkbsimnuh65yPCTWqQajGZgsDV9CeDK19oDL17C8pagsddQL3zS8DoPibyiAWfA8uY8ZBSbFvwf",
  "key34": "3c8G54KCvWdCAgNP6LxpCPqX4CVZ4rPLqhw3i8vcUVq2ksqwaJik58ifp4mJbLPuKkXfZ5jrxhrrpGBPX1hQvzFL",
  "key35": "4YeWqrmyVbiNKpegocGsRNR3vqthMEwBwPH9pLW7BFbQWZShY6wExKh2T1S6tnK2h9bj6rRBVUiyzU93zhM72Zt5",
  "key36": "YPVHtfsZ3QdcNqkixReGcid73VC7T2zVGEzbS7KNaxvUiDXEf67kP9DNhpUj4ZFy8uxDuNYAVyptqZKocsMv8y3",
  "key37": "4c2B4sfFKxbAxReiZbP3ThzUdim3sPmvuZhVo4zjRd8DZWSYr8QkdVQqiX9ZK5HReDxWp1Ws6sVVULhkvfMg3UHc",
  "key38": "3p394vRJ8Q8zacnd6rCEeA65kwa4ogmJqrqhEqfUs66n1nXvojAd7N879srcn3buu3BfoSovVer7YrNM5iVcYT8G",
  "key39": "3fFzTrpnjzeuxf4nRWGeTDoaYAY4D8fPaWWufkFQcfKYxaMfX7autxWjferPNXC2YmRZ1jaNzWrBHUc9Pbm5wqAG",
  "key40": "bRMYGYUuCYitdBkTT9znio922NpWJcwS8cBZ8teDbn3s3z3j5HefQRuqeZxXp4t4ypkb1ZjKixg6jtYPCyR9Rje",
  "key41": "5LPojZxoXTbDLUE3peBRfqDKMiDap7M6xwKq1mYwT5QgqVqTLKd5E5ZNxbkKTLXU6Kbt18cgjzKCqDaehVKnsHqF",
  "key42": "39sLHgPpGQ4iSh7rFzwToaSrAmfsPuNsF98LXJ3aWfQN31YhC8EQX8tor1gheudKZTkyFUcvL6GzRZCKYECRAamj",
  "key43": "3QHxouSM9EqU4XxQB55BzhsxwF6SFk6uKLX2jwaBQKSAJW7vrihSPby2ihpzrCT3NMYfeGKV6TGo6qSr3FeLYnyu",
  "key44": "5Kbx3ntt6h2yhm3osVRAEG2s3by9XRimq8FpdKG2tyjK8xs5KMJAeMNqEaiNNPnSroiDsCSN6ddX7JDnNrD87G1G",
  "key45": "2G2Rcbqscvx4tTH6hwZi4ru8CpdZF7dpCopRhggVPJpkqudQh3osx2MjhhqxQLZfTBVrqDBUJYak8AXaJfFK6E7R",
  "key46": "2rTB51KRwfXuoWbYwCVVa4NZmuEGwnr3nrE9F3gM3XVsavFKvyzQHinHDUHy27mRm9UjT4xXquuSNQ64dLNhQfsF",
  "key47": "4AezSfSNsWYrH3QfChE54C1xkzPPiphSp48U3i2LjJzEqVGdNaVuZk9dsfzCFwzvKqqXSPHCNd74iATkeaZPSLNx"
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
