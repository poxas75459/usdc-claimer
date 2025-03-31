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
    "2k2bQZKvPHyCGta9rGtb4R4MKjSd8U9xUWfQqSeWQm55CVQGK6Gpcons8LEkHWs1VkYiLFMGDHWiWub2H4ndADUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54T899ixCjggBgTJ3qGJsBJ3FiisSGrBFqaHgHejGKHNVLWswbdKU1YsFpjUqNrghaztB2gDsMWN1zd3TnNAvKzA",
  "key1": "5tUSdnd9VTpdQjDbeco7ZWcPvd4s6jS5zd7b28gBffFHEMRasg1J5RBnuUncDBDkTHB6pJz3VA9sjPrrjXkdisFo",
  "key2": "24eLWJRZy7SL71wJEf43jhfQAZcYFhYDeZbwnhznQZRXUtYnZCrLwRWHxTmGSzJ8SKqrN58oQdB5QGFSoJzFjQa6",
  "key3": "oCefZzT6Qgo5TwHhqE2CctbZh4pcKrLJoYNYA3ttC5W5MSXkM5WtB1V8DfPsciYVaMBfbWFQbS9xFsni1vg9hzg",
  "key4": "4qChDTWqMC2Qu88vaMWM6aKx7DcGtJ3XSiATb8jTDS6W4gxuSqenvhU4bT6X4HQyk1xCoA5ZaL1avbZZd9rKbV5A",
  "key5": "aHov7wfJuBRAJEunaFnzSLDFM9qXyY7DsMh1K1wbzcYFCeFibZf2gepNyAfmKFpwmRVbNBkn9HCQ3VY7VA9BvrJ",
  "key6": "3AavZLrMp2yMNVFQJ3Xrcfvnmkc2Rc7DV39K5H2rAbaCCpoviPGNZwxY83kMN4LMSTYbbwjQ2jB2FQwfSQikng7V",
  "key7": "3DGFTWTJVPuQv3SoPofEqBWRWuy2L6QDUxo6pYRz57eALpQLdJGP4NoCKpGxmci7KRBDLWVgohQAYxqTZtAVrdpe",
  "key8": "28AjRCdc8BqmQGPkjn8MAwZYKpRtb1pni9fWq4kHto9RMhFChsqqARDj3tioY7BWuVjSKfDbhcvsKb6dxTPZsXJw",
  "key9": "sUXjvRw2ac33V63NJ7CeSsjf6DEBDwNWqQi8LW1HR4cuzqhakXLggbgvt7ohej3XNGMSmnVkiTqdY9vRuc2PkTx",
  "key10": "oQZWtbfJfvGGhackqFfBRgnhqoDC6CwC8QQEvHjGpvkZVveFMvb5m4QcXsDPsBHxRbbUcjfRNr7ptJa9rKZQfBF",
  "key11": "6tqzXF2FdZV1PNcjX6Mg2USMbNB8LoNXmL34JuZXjusy2613e5uDGL5irGxrXzvDmvgiGLUnhvmF2EBJMNA12QX",
  "key12": "2Tyc6L4Ce77HrThsWphrppYejRsZSpCMMfZ3b374djr6ATetXonQRx7uLu6iB9ShJDmur9A7VUxxUgMEx9VWzLBC",
  "key13": "2Fz1HuJzTFSGXDxV5jPfnf1g4UkKFC357DUf6CA6chJu2t8imrpWm5ZRcb1vGuizKyAq6AD7oa4zH5cUUcdeXjYM",
  "key14": "R38LsN9dD9ib4deHRQf7QMLcEVnjTzZctLvB5c2u1ZEfsnnGTMZrscBqCR8jeUEnAF3G7RRKNMoeWrVn6Urwbc6",
  "key15": "4MXHx7CDMaFgiwnTFNn4PMwtxG9Z2Wknm94B176aHYoemsSaJowAKKq8uhToEnjHHYBryGZo4Q2zPqtFwtGqfv9C",
  "key16": "4RH2WpQGT2Kaw7qx2oNWTpy6zt2dWzvsaXf3SaPwn9xMVTTQFrVQPTpbWnBcPfvXwFFrrWoyhiaaNKnhpJDKaK92",
  "key17": "A2rpkmHdoUnVDUuDQoHFbFNL1ZsHZPrgffvDh4Ur6bbDuxFv9PSSkNjKvfYEWzSuVRHwfGDyZDuhk6ohuEDuWU8",
  "key18": "MnaNAjhN4xDx3W4jsj4ZvdZ61LwreqT9gTnoJWFCJ54h16UWrG4cNtxc2pbQduFqTvZnBmKFmdx33keBnw8wVMb",
  "key19": "2LKE37ThbeMajhLRUpD9kdoAynfN3tGBdsXCSrM7owZCLiwVuTaLUGRF4ufr1ygJTTvbWcoXc8wdvkpnqaM8DWf1",
  "key20": "fpiW48jLDBLmTPLmh4PDAaqcYYbZF3fRyteR6Qy6uENNYu6h66D7U59bGseyziXFaX7XXomVJPqKxsmuZEzdtKd",
  "key21": "2nD7nS9XDJdNXrEXkzHyznbxPzf3rF8WqSiEk8J89vMZxeEEHycm8YJbetQnLSozfdBiVaUWsY61FK9neJWcXkfz",
  "key22": "4EVgs7GAMJVcTYzwZaEvGuTcJq6izQGK3bQA995QaZJRh3xKeTPQDYazkSFWLKQTCQ9T2BeXrSgY9rTZWqtLnRtv",
  "key23": "5DJF9Cy9YEKFhGFCwu7p4GJq5mAVEqRH6RTWUvXfQMn6ypfFhdxeQFfyTMoRfh5HehDhSQqFPug8BLfKinctGAZn",
  "key24": "3k9sfPGMm4qwKKFsY9RkVhCJMHNo6CmrRgKAUjm9ywmaoT8XbTvG8DNsT3Bzs3q1bfmc7B6aFjfdbNFVNyNTacTN",
  "key25": "8YaShQ3otjLg47Lc38fLw52JdEhBkqkbwsZWaZAk4HYHSdsaaxqU5N7Z3uDbkYgQf47sdYuAhfHno643Wov76xc",
  "key26": "3SQTWNNbQ9h3ducPzMeeVo4CRaquThtEEQ26FPFJRAmFo2fVA8yFo6is8cXEU9uYM5fN7Qt37RzQHsPwYCGwi4qh",
  "key27": "57y1x9YkL8YqX5w4V4gSk3N9R4Dg48kJnp2H2jLsVeYA7Uhj3uYZGuFfSzzoEBjMLo7iNjFQKZz2k1LzFk3j6bRQ",
  "key28": "64iuezJU497mfGtd44BhGEEQogCGnFTsR84AohVQmoc2mC3DNdTQou7RLXW5RxHkXH4yqySLWa8CGZ7ChDnFJsct",
  "key29": "NVbMDo1qCwarQcacRU1CYkVtK6T5HqgXmoNQSreUWqBqDz6uouK8P8RhitxREqqg8xEpRN2s2cbM3GFSdnQY9U5",
  "key30": "4moeiq2d3v1RwqdDuCu7qJD7KNsLt22a121tZT2GnC3nEoFrWnrMfnKoLBoAM4uiGcLWRYvxwvf7UeamVpdNYU2e",
  "key31": "2hrAuQVqshyKR2U3d7m3vGYguhqMta7YViWYreTxL69o7CXgKWbNySEd8gvZH7BFCkLqTbuGXFFJkUxhmj1i6zAL",
  "key32": "4sCUPU7HX4vGfGe6eyqDknfYWnWnb1zp2mfWUL6MUzN5YN3m9Bh62E4U5nFQiLeyB6gkGpWGxa41xe7poKehWkKh",
  "key33": "xAtmA9d1ViGUsW51fRX2v8xsHQbM5quqX2qm35tF8vEuiuVoMB5hYSMVmcCw6KHQrHGEGpezgXQBhtMoNEienjq",
  "key34": "4yRZEipw27RCXWbS3A3JUGruk3QGKWVSpB9FEMZ8g8tuAnBvYRTrPXVuv3AT3ReJRhmqb3tzRPFj1SGrn452QZRx",
  "key35": "dxtHYAH6zXzZH3U2hGBucUQCQ1FecJkKS7VXx5u8LVUGU7nzC3bS5dmrqGZvj33Wi7fL3LDPhNvx5B2FQwaXeNz",
  "key36": "5cd59j6qwqsPNptaJZTUBocWr5XW41cbHYY1Apw67gbANWF9kuwWETSTCJh8QoxA3S5wp7U1VGUSmvaQrUtrjPhf"
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
