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
    "3n2e9hFCtGGZduXkoucNijT3RmGm8gzeB3RQDLBSSzMegfXSWBtSiv6kNE3HkpsMM9qFpaoEXTwepKJNmuSkdnYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQyXRnZNxjvw4web4LAw9hAgahjjv9BJ9n4LpercVyjBTpoutBw3aF24HQsxmzTik8P6zyPMYoco45XmDhiUaBs",
  "key1": "5a8J9igoiBVzdzrbUYAH7vmuTvWhSD4U7fjCDuC7cBch9BnFhAhNskLcsEBWCFHNWZBZjrqiPeENv4RkrZFQZFwg",
  "key2": "5eVx1EwDBEbHiMBZRUHtmYPGAbuxBuf4ETuPdT6r2yHxHFgfHcJzZhzUorPNtwCp8Hy3zjukgPbPYLRAmPWexWiV",
  "key3": "2Kmet2fzFosZNCc3mHMHeAhAUnsNq5ohqoAp8BueYff8ETj3jLS8dHxVUcbpMzeWQpeJvvSdRQDwMxKbPmfU95YD",
  "key4": "LeKDdKGqUP5AymfhfJDQ3fCSwHNTwj1dkyJWS8hzG9mtLwBGq5QwFG18uN9Hc7MkFTAM3SMRicKCyW2pZt4cr6C",
  "key5": "4ofs9tra5HTCMsNqkMFHczyVm69bnqedsHsQPKtbHy3GNxF8yeCmrK1z4kh7nwGZumAksRCfegYR8Nox5hdrFZgw",
  "key6": "5yBQzBPzhbp9LJCfasQ7eTa19jgxnqMTZ5ngySdnfKgQixtAQcpyvr2HuQnC7zpWeE2QcfTjAozDuFQxMHU18XRW",
  "key7": "2xdX4WTbMXVkfxpv46d9CRPgeuyDTtiBjVhLbrG6XmTGJ6Vfn7oW8ec1heoJtTq92WdUma291vokYfh3yiHxyu2g",
  "key8": "2dZM9NqphhmKJ8YuQwTWXjsSCDHzaztjZo2zqnF2XDbXBvoPs17b7URNotD6bULLw19pjTjwarjMMdgd2tfwfE5n",
  "key9": "2f73fBZ47K9gVzbbnEybKAeJk1TYoULygESL3XweCChg5p6LYVGApCW94vCN1Xmmn4L2FxaETHgNtWD2Z9cktmGp",
  "key10": "5XK9PhcYQhtxmD3QdShVYMzuiZSzhaQGsvGZcjtiLHzcftQJXZew8StqtehyFMMSt5jVqDeuDHivYA1oGu4qRtS6",
  "key11": "HkFPRqdR23Cwzdk6U2iM69NLd9whhXfsWaD6tshfKjvUJZBm2DqgWFSn4TDHpSPF6W63fbs4MyYWKXLiMtjKoPg",
  "key12": "2aktLaBybf33RvYmQ2C8vfJ3rBW9qzD2F7QLo4AKY99wNSkAX9i9Nwo7ShhCw2gtY2VnZLS1FxZ3rAhkN4mL6VQD",
  "key13": "3Y17f2cDAjFYBqoX7wT1ticrPo4Q1V4VbWhubAsj3dbhxG2yJnP2f8bhZBRJWFD8Ar3afWhvp5qonByMps9qEA2S",
  "key14": "rKyfaqvYyKQGEXJB9vAkLyKRXuYvebsMFh3PmLYG7VmAeeNnjBLeQTDV831Vwm8kUbTwj4VwGFoPb9Hvk8LWNur",
  "key15": "4eb1xpjnBsrrPsLWTgbUtXJndtsFqyAegmEsPUMU2TAtwur5XShURuHbucCxW8wts25i6EhS7xEgUD1c1VVEq4fQ",
  "key16": "52R7EKhBd4hWtgLpmSqksF7cHqnGmBjVxS62xC6q2Yo2S2UWDAErmpSo1mxVmEBqU34z4xcpHznpPWx5eYzPXoyT",
  "key17": "Vyo4eYyFut6BEheaGiBw6yq1SXe8bZesK3eMhsLUtvSE8QMXob78RwikNCLyv112qtY4tb7NvfHMEMV7xBq16hx",
  "key18": "3FcCJfLHq1jJjbSq7nd6rhdfxoxC95Z44iWTRDBdd6yPrFRc8za5nFzJnwV1438eWjUWnhC3zERsJApdMoN1ux7m",
  "key19": "2Tcsv7bv9fzuRa37YjWdWirHiHoUCnFw9YwNnEDkWFh6AMj6XLp8ZuQwiRd8gERz9wHLrg5HZfi8ogf1b3mvejgA",
  "key20": "5pRLab8CXh6eAGjSKVSA9DUJBPHSnjky7WqfCgtufyeWZfXq7wTbxXXFnjWgfmkMs3EB2TVokmLR7komUg5qZmfd",
  "key21": "51tpPk3RaL1fbrLRnaoiPfwTsGPTBfr3BoRb7aDZjssH54encGWC5BNZGKrcG6xRM4xBpvnUjeNuJCNyEmU68URa",
  "key22": "accpM1WG13yeYPbfCiJDAy5KQNKE5RS6VrMpvfddgquxVr8oUn9Cva1Weuja4pQmvhB4ZP42srfuy4aRacXqKFA",
  "key23": "3FPgKNFsAHgFFzpKFGt4MKZXNGnxy291ie2v2btUdLYze6kvGF2KT897UdS96VP9GoEsUnF3aLERqWafoRwSuYW3",
  "key24": "5ToshQjSy6gPEN2eDZLWXN5VRHZg3BgtxLmUf7z4uxXYkAE5uog4WYtSnndEVDLzzEd6dbPPbDShVoua6RHt9gHn",
  "key25": "3rKNcUdWnoeYKKSbXdEeepv3jnGSTJpT61Dkin3kNqBnaa7ezM4MTRUpTQRkjRNzv4RfHQQDRbJWBjSdfNxKWuDJ",
  "key26": "g1rTjebvBhyYVdWdiKj5KESqVfv6p4ufsL7Wcph9Ao2fbKMBkrXSgX3Y82pjgE9XaaEj6cJqKAz4k8hhTVVK7eH",
  "key27": "5JYmh11jxMGdw2fcnJShppBNzmU1XXWpvEvnDo7g6VptaJbfENFijCbhqV2yiPTffJzSdEiKjn2fupUPReqb3dme",
  "key28": "4WhdGyFwWD7tknSTrsoK6PougwVuBXq4t3mJK8DTYxCrTXshSReqa5mhfJjGvHquicmQnzARk3N7c194X1rvG7mC",
  "key29": "5Aa9fAi9beKcHBwpv3ejDH9J3xnD66v7PGHkDHyD5b5mZ3D1L3t3EUsDtiM5kA1ZCsqDkvMdyZBLZYGfCeQ1eMFQ",
  "key30": "5z65z8bJfWLzDMBDFpKgWuyHiHmgUGPoQtg2RPUE2gVamx49gu913QjXMoJZGhydxD2DgeiPwKzY4eirwKWjcuFG",
  "key31": "5RJk1mUX8BcHbooretabzVwe8C8z8sThKGbp1xTcegnbPp8ZpyioBz4tBY2idHoq6uKCRoo6JBHZZZkBqVJvhFVp",
  "key32": "5A8zs8KT8vBAPZk7FDj9hUkRsDUmqhKYeqrqcre6GV4pnub6tpPvts6wkf9xjgqLN2HPZWk5g594tMzAosKyD5hX",
  "key33": "nd4ty8nXfxmTQ5dWE9aFinkkKFwbwMvBoxnXPMT2papi5oTeuyibYW29X6SZyCmpP9KVsAWCQoKMBLDeA4dA3Ce",
  "key34": "3bTmcRrWCr2rxT3qc5QvzRd4Szu9uoKoFXq8iv8W5nVnnL6uoKzKfsYpmKat4QPryPfPkcVkFSd2gLGtF7fN9Dng",
  "key35": "VnWtBn6b11U27RLQRp6JJVcGfxnYL7Z8cNP9bNEFs85jtMnMbQLiw6gtTYwm624Vj3BjRXZhxWnCN7iKTjuj98C",
  "key36": "nJJeH9rdyQJMZ3nDPL32xStgp9y8hqVtCPfUPAzJy7Nnj1zZNYRMUcbGZAWCjEcnQbMWY1BSV68fxzeGtccqT5B",
  "key37": "58BYC8KASEdxpa6sjNQTxr7i3eS3EMdssTDbka57oKoNtUamK7dnJfFXoSM8h8e29FgUTVuSk53Hi5SbTbDfHjR7",
  "key38": "4tHHoZH3HzBmDQipd2GauF3EJKLPXHo2YJf5TPT6ttAUGG2a4onyozRKGktap6bCVyJAzr51HnWHnfnNMi1LCVD2",
  "key39": "2av5xQvg4ukQa3LH2bxzVejGbiumLBMq4PNXwvbp3vjKB9MC6ZFox63yK48uVzhqNzpGm48ijYRiFrNrrCvWrwwp",
  "key40": "3KhSwjKL7iRpCW1KWRf9p1FrDV6ZXn931Q9FWamuwxM1HzjVk9prTQDvKPLpK9oqEaW6TdZMVtqwHFnWLxC6zUbh",
  "key41": "hpxpwfqtu4dMF7oDmr79Gr5kWMuzst8x7FHGoEGcnW1RiHrsy538c6jocjBPDC6qLmPzKT1adxMXxybnFxLWcZ7",
  "key42": "4gQ32atspncGPXqdxNrS9uXevmXjnt4Z7prHs4jvQ4KPjVLafnKJ7KLJcpxGgppJiSUrEC2DVhZ2GGWe4qhpRPSj",
  "key43": "3fufygk3SEDwwzL1ZJW8RUPzV19roBQBpHByhB9MVYdRm8zFWs13NHDoteUHMt1etwqwqfKmcn6m8g8vwDGoWG6u",
  "key44": "2udYGxpv6veLqohhvdKdBZ1XMoqxWVke81m2k3RUHndawoCg6Sufvstsuj2inzvuT2H7ZNGmmfiFsceBwxgE7mvc",
  "key45": "5grLzufVF75qWkNensJbDHQh3VjWHbzcokMNigi6LBrYRUXR63ADwUEdiP1FFS46iTDDzrUs2tCHfnAyu1Knnmvp",
  "key46": "QGQ2zPZ9gjgQNPERookwX1aPBCkcDxJNRgMNuUSq42oYb55VnYCYPXxkuibWtQ6YwTjsbyZc9DC6aq7JAdgt1gr",
  "key47": "AU5WJ8RqVgZapSnVmzQnumgSsjQn2JbFeynLL7C8YSMQcX4ghGNadLTVjTqemSoCLEccNytcGMAWYGpmfYKMXFC",
  "key48": "2Cc69WrhLgNCYEcvdFj5wXgrkC3MUxnFSPaYivtg4qavEcw7AM1vcqP8a9zKp8Wu3x4aZJCEpYHiHiHs3T2Rp6hK"
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
