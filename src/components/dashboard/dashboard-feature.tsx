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
    "2iRq1B4jTzAQuoTRkbkPfZmh8178D6xJQVEdBnpXH5gxDg1bjcqkfVWTbP7d8mHy2pkdEaTj7333kbJ6y1P7YspD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "476zprZhCmwEtMwQUiSS6spNfMoYUtDriy6V9H1rBfD1EZXT5FBBnoe8tHsbu8RX8Brto8s18Yf5QcfLbeP9mBVq",
  "key1": "5jNATrJcJPcPiD7vpDrS5XkvZXfimzMin841DYycbU9T2VQDcWBQTxMTByeNPYDqPCFBMr5CrpvonEawzgKygzFg",
  "key2": "P4R42r2GgzuCCJuiZu4KN2GA5zKez37kW9TfUiTBKyLXdyjkeSag4JVZCQ7u2gZcY1HM9iehNC6HcXiR9A78iJQ",
  "key3": "iZhYPBLEShnzyWGBPmWqUKtueqkPiqFFEFLH1pM9G3e9SVwZrEs7MxXRV7Tn2vUHFTmWwwdgmiQougLDHNfb9aA",
  "key4": "4D4AL8kLRjjFGcWJNeJtKoTnnNpNs9pRcaBKNcGDiWmQYMcU8X6kp6k6WB6ubLFG1BrKHz6MfoNisWmvYDrdVnvh",
  "key5": "3FXDGhExhTZtBX5MTVHMQ6eJ54J3L879DZ4PqZmyMvwtkFoB7u2LyWBpwNaqaxJLAobUJhGd6nkASdFaQJVxhMxN",
  "key6": "51QzEiX32JHVpobPktHTxPpx9DEPg9wz5LoqFV1WkAybGauchEgWsQxwLt8RcAgmssMEc4B28DmpS4yCpPCHmfj9",
  "key7": "4X7HsSURxkinoSDGTp2fbyXFDUXSFEomLU3cXZULKyCQ9ew2rbVJUovJpEZK93bD9z2DRk8ZTRa2uqUk2QLroAAs",
  "key8": "2xwL6q4PA7F3nauXrg3xSAoPWmU6sE2t8zn7NWqfDLW4b7e3YfRdL23WgqFsfP4cDrbKZCzi23LnDVJfXxB8KEBb",
  "key9": "BHmS2dX6q81Smp356VVtVBcvVpbiPzG5XbvJxARKxj3FUjjBbSQwLT15f2GRAWYjoEqknGeMjX5DTrD5dkFR1Ni",
  "key10": "4yRKQVDWQ11BnvhzVxKv9TnaPNJNkjdXya2hQpt35HNwN5WuQZDSDrgZAfL6mzjQFGvqV2XqC7AvNFAtaobWh4je",
  "key11": "4j7uxR5qE4s7f1kc4rFJcHH48Fuq8vSBgKn8o3ipcaBGTvTLh4KeBssjGity2JdRB5CMc3ocPnHtkfiE16KcxmGZ",
  "key12": "3w33RyThQ6cvnRKrqKugKcNSwtR5vPmMPmfJkctmgYRdtYYTMv8jujzsDmJpBpo2sSynZs2mP1mTmDgbx9YRSmVb",
  "key13": "3FmKwuSZwk2fY7PGpfaR5qinh9A34tudyC88z5sXX1NrZ4KQzP6nEukgk6uBGeZihhuXzVCEiB6qSsdwohkYwrBS",
  "key14": "1ctFsWveKTB3ApS7YhEVvBJ5ostiTgtP4VgGMHzb9bUWEGVdRyVk5aRsMLJCzQ65ZGSRz3gU53Pawsrs3xXPUFW",
  "key15": "Z97aD2bvTcbAKimz7TZ598Dtn8QyrUNk7HaSU8TXNATA4Vm4nm61H7mNWT5JxNtehxZTJJytMRAKxEaYnBaxTTp",
  "key16": "4Vz7N9BKHEavPNzWy1XmoWqWmMJViBzw8gyNeoM4nNJvvE3NadM7D6W3H6Z3s475cqQfLZ4iwsXktbdLk4yDNwad",
  "key17": "eyUuhu3WAyHvFh3tTen23aJVop1dGrkfb3cm31GVhNjSREgDx8HxXDAmAZfGCxJy5zRyssRHvX8RhcN82pyD3Y4",
  "key18": "4MjWkGcRykDiDAfDR7SH5jv4NoRrUd2i66ySTnddVj54SMQJsJVpMjsTBQP9HuCk5daZLNpGKHeHusANtpcYX9b",
  "key19": "5suDheXV6CqBVg7h7GdxrmBo2S5hddTgWBh3jVPWQdjGV5woVbNCoQTzzCNb762ain6N3iPXekAb9Jb1cgjo3vzg",
  "key20": "4zqDvMNGMsVRGFKuiEZAqQMh1jCABkpv1UP8qNKp5AbYYgBYiXW7bzvy8KVT3GFfyCa3xQtemHSAr34BfKpF4GjE",
  "key21": "5RVqYFECvZhzNEHWnnUTgWZPTSPPvMZ2om8t5Rr1TaJmgJRRmkMEKcPZ3tzhUcLtbWJS2hjVxvqqH6H9uxbVtsNb",
  "key22": "3PyRzony5PTJAgjFFAMCS5JfraywFWw4UYsxHzjBnSr77EwNwiDL13Vm7Jtuz272SG3nkJj5VT8LhLz2MvX6aiyF",
  "key23": "5pwNVrL8jDQ1T1iEceLdKQip2YBTKiJmEEmmvRb6Wyw6DpNLzVoHr7q2MRwFzF74YxVsN4cGrjASQWQrS1Mqznd",
  "key24": "4SWw51R5nxVNq4a5TW89Wgu4prQDEWSV4dwnCzuQBrmWrFgytQHVUdvturQUUUFFR2sx2KJbyHk4aJWpbUMzNxrG",
  "key25": "2nxCkLAeKfcFQkDgzr13VTM2vsy3uQaohGNMcX1qTEQMRX88hSLugR3wMpyFaGDZ8twxU6q97e6mjrr9nzAdch7L",
  "key26": "2dK2wK84zhDEjSBR6MzpDrQ7tMh4xNw63zk5Wyj8qkFwPiYrSZE7ybi1vD9jnxPZZoUU2fgpuarEMuph8Usd4pCd",
  "key27": "3kU7MuzeBWX87q57dNP6EZTGX5deYNbmBo3CarAxayre2Z9rwdrTLhTfC5JFx6fmPHEyuRJCRrcuw1bDC1RaZBix",
  "key28": "4b4FFhY9EaEN3aDUcXYtLC2JcyX1RybGv4p8RCNpZqh4phqjU5A2sX3wmxmZFqLVWtsJTSmxqQ4NrC9pLsYqDCaQ",
  "key29": "WuEbW2RL8AcaFM7KwaK9YGLgM6LXQKgmoCBhfMfSjSL3NcDsrVFTMifK5PcQr85DVkk76oJJ8KWyfcJrjsVhJXK",
  "key30": "55Tw6x6oSLVUo7Rnf9jYqyxhy326uJ7zmH6Z7axm32FBX3CBFTFudPmQLVUP6fVvaaaC13iiW1HyT35uFxQ7N6ds",
  "key31": "2YeHxKWFgUxUc2ZFbwFKcHe2As1uEUZruWMLVdR3CPbrejp6YYvsfGyQhVhVmjqchDontgYmBWg912v2CGbgTjZQ",
  "key32": "3xHKEin7UQc7Sz6iaFuCrZ5phLuWHobS4vaZZASYvtgndrBDyFSbPNPJkdXu4Z9tBU8egvA78SbZoXSXKpjULyaa",
  "key33": "3SXgjU1jriKWBUSGoYpVaF5cbiaXrLjPrqZPK7tYvCL1XHnmiCmMixa1hDPvMZnifFMyzq3b7qbPNd45MDuQvgU",
  "key34": "2w46soDxo3hCoM8wPCKTwT2jTcxfVZZ5VViikhfwnrDZdsqcC4zhWwF2V62JL152gzwB8G7yNSHLpjeRRF6gS3tE",
  "key35": "3Nqn9zW7L7R2T4iNxYCXRAhVLU4edRWqpt7Mw5dGQjYqya6PQxEzsCvGMZuGZzmTjBhMiVTdQjmU4F3oUjRVpHK5",
  "key36": "5GPPs5mjx7WLZELTzZdRzPGdfGp5xNcooMomgbfG1WkicdGcyRrkDgkJMfUSbupUCXFL4ig8bMnC2TZvXENJFrwQ",
  "key37": "4H5pDveMwodeH8pWcsgt17FeWzQjihJ358TNBYdDKQbwBgAQY8BbgnToY9AgxShbedDBPUfmJ7uJBn1RzntKKKEJ",
  "key38": "sFHWpjJqGe6CsBqrcWZYMc8pMiac3LrgD5FAUP3TRgFcHhFcsfpDRBBD5SaG96aCgW5Lf6r6cGvLBPjYne4XFYa",
  "key39": "5bwkhdq7iztkWS471m4gN1eGyH9WTqjnRvrWhnjtpCXn6A7WX7TRsKXywbT8nAep2fM8mbt9xL2RYLcLMxYNE98C",
  "key40": "2QDCEK3ZfAtjdAEcFxv9U2Rc4sL7F38rP28Hyxhkmq9h8sFbS87s8zuYEzK4tWb5Uh3TTg9HG5Quk7mPCfoA3TFN",
  "key41": "2jVaJQybtXbsCvK1N9kxJfyqkFsXNAHaXScHKup3jVgr5bBNSguXzVgmKZ1EP3fRMV6iF2jaGSXMHpwwc62jF82r",
  "key42": "6da65toxD27Jft3fTcJZEFQgGJZHmJAPS1ZNBDVK6XFY7LaRvJWjk7ED9QP5br9Ap2zhndgdpuhNYEXuyJxunge",
  "key43": "QorH4waHXsHzU4Yu717zx4XoW2LUBG31HZtDvNncAF2ogqKvkGchr7RSQJDrzMFeZXEpTwDoo2WiC1bfXYxcgoo",
  "key44": "5MRmxenu8rtVyNaCnBFJmC2HgRszLKgV14DHK9zUDN5s9bGmXGZFkF7qAcyrrJSz1NZbwjAvhbA5xrKGZej3bvLw",
  "key45": "2Ym5GM1RTPyiqpABq75qA7KMc7SoHuvu6Ck3DDo3oYVS3CxvWhAGMtXPuZc3KYEGRrkjKbg5eBrxWgC1EPHm11Ej",
  "key46": "5VYMAbzri4J85RV2LTCFThWL1Liavn3WccKeopLovuNwMnHSNuKt3wDGHqiczUEM2Pt8dc3sNZD6nPfhYnyZGjkW",
  "key47": "29wNBfKWMYWS9jKEQ2Fi8MVzqkxg21cJkmTvm8pN31k8LjDTLZ2PwfqqoWmLkcwLogmGxUmAS2G3hxPsAmCJ4wxY",
  "key48": "5HNbfT97LMpd5sVDz6ndXXpjBY6GXnFALCs12yPjF2mu6rUtb2AWJ6YVXhjVipcjpZcfuQ49yTXjZuUfhzJcJXdi"
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
