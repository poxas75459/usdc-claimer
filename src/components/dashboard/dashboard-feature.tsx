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
    "5H2bEAinWnMvcRZxsEHr1sqX7y7mXR3UFff81F3CHWW8sYhHa89rNNCJEU4zSwxYRkusdK6eWfDHETPwiPuCstvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aADnSoLKc6Yu9htgmtuTXhDnKmYpgt4DECzAuFazZ9Jzf2fCnHXpCV6LUxU8ZsvEMohAxVdPhvq1pn449z4M9iW",
  "key1": "5Xebugpvfmc97PvsH6TQKY2N9YX24QG6hsuM94eMMmKNaxKnMNxZtWjsfCSTkhNzZ7RGiWZ1xadLVVr1EzWtRrEX",
  "key2": "pFyp1di2B4P9vXqbuNp5KNHKLCTrwRS4zv1SwNozRJUYA35jgGPWAmv6DWtZ4SYiGRQiNomJh9KMvsmeRPyY7jB",
  "key3": "4zyEtLk8SBgegcD8tifsLDFjsrxszSsecJeGcVsjCqK2dpcpnzM8Yo9VhvHYJJfXHAVkSSgnse8ejn28sN4EDx7Y",
  "key4": "5tRNQEb1bkiXEiZxAtKBT64Go87HDH7wMCvFuMSp419UrguAp3bBH3cHbppZFVpnFmggQwQGjeqXBFgGTfGgrkRJ",
  "key5": "22AQPNJyJ6DDPaNrCuHjFbKxEscJhgaR3mJ3WLeGC7eGj87MskD1JCNsCJRuXZeV7AQ6AYcVnTHqrMDrqqHbqohr",
  "key6": "244eYeN63caHCpEUVgtwP14JQoryXroJuzcqgFrZWwtYqbrHLS48RHFqiZBkXREwJcAfnK7DUi5AKcrXNS63M4Pr",
  "key7": "3kjfCPqLn324URu5NzsEjYeEDHVQzDFuvehveqovmB16w9b818DBytDYwE1aLbrEjMmTqWrNi9ga7RoMK2Mrfqrj",
  "key8": "2rDBmKaEaqKvR6PSMPcn1UWK7ZDwZ1Vo5sF5PT3TefeoFangncud8QAnLdDWmBynq2x44RB37Tj7Fh31jp6bFrBg",
  "key9": "k56pfMcW1bzvCk5mqr4XV5TusUroDnEvcFXnAJvuCBfeDD6zq3SX2VtmNmrLY6zFXvj5ZcuYUmqGLGVx3TvRupp",
  "key10": "5zXTaRDSipuBQy12t9B7goVuZ2p9g7Di9Ms5Ghj9J4xakBYhNfVH8CByh2a8QBshHb5jAFTLBxDi8B92Ebw7zjbs",
  "key11": "3R69MikY7eNyfiw1XyKhdv3DnXom1f8DCa9vadaK7oFVjNMKaHf68AtFFsEpT7VckSc7BGHGYhxzEEJ5S5dpBD5U",
  "key12": "2GiAn85y8FndKL4hbbWV6dR8ujTijUCAFEZw3HMV4zjDh244oN1VG86LxR2MGcLiA5HzFKHMTgiu8wRW4bQHHc96",
  "key13": "4LsFHghRqCpRSLprPwmmg34PusYKj2fd4gJSASy86zSS92NFogJgCTJ8mTyEXWsQc6eTS6ACCpHqhBd2coH76FSg",
  "key14": "53BPxXPbT1fqhgBf3XSqZPnbgq41vfDsi5SBezvAvr2hrrSKFeZz1RqbDYDovmiJtobwy7t9jVmiaSNmJ3ctqykk",
  "key15": "5inF3cperTYP6tGjWPMEKLZygJaSPgCjZXhuGbRAfGowkK9E8KCaqs5UsFwqqjY6JmEJ9wvYrEWp4Ys3gR2Y6zDQ",
  "key16": "3MY7qPyJQmjuznwA6eRfiheQXdSMd8purTTvEVciZsWgShgXq2TCia7obQUuYdNhJ9D4kdvHaEgSXNAhU7B9u1uF",
  "key17": "2Q3c2HXa2fkzCieXP5yMZrsxoQePnKmQRh9wY8jAVS989m9CHffiwNNP5T7aCLS9mzmFXvueZrsFXT5HtBEiAssT",
  "key18": "4eEPZ95E2WNCP4bRbq5xEzdwUH9zVFpe2VuVzzoE4DVpyw1niSUELo5iJ81SmLW85nph7Z4X9kib2y44DmMFRJP8",
  "key19": "57RSMWRGQV9Nzsm5DKSPaTGiEVtmBN9bcZEY2qhtUj3LEVzdtd4t1BRFay3wMo8p1uZYrvbhUYxsoxM4ArByrb1a",
  "key20": "4gnQV2NczWAcqBDAXAM8AX5ZXjLQYzZjvayQzHdjoueMsL2KdV8qdndHGuf1csyHGPrjKnyK2t3pwXs8sgGUf7tA",
  "key21": "Ay5syZXYTkyHL1gfVAN4zKH4AUuf6hYKGRHCrxns6R7tQqgt2Vmp2BP3MzKcVhFZ6GCKe3xb6opB6QketbBxmVs",
  "key22": "3aLBcAwtbEgCkDa39LoBjefVET9t4cqs7htRw6hsKLvR6WW9KqgwARG33ut1CYAwX9Xn6iWP5yxN8DDxdqrXAEFi",
  "key23": "3kNNXrT1Sw71Pib7qRtHbbPiBtwcuxvbo2ynwzNkV9BTRMQ4F3SPseSG1jYRDbsjNwU6SbX6akxp2DZuygqzyF8K",
  "key24": "649q7wmiCphArXzTK9ao1edfV3J6r6Z3HgS66awqPNra1hD71AX77pkdvAbzM3jKxXJqXFhU9VNRR44BYr8xvBPS",
  "key25": "31a6aWK8z6SgtjGCVhuEZgsZvMgDZ7fu5VuceCehczLhAUUuYEWQvcPVRnPLB91iWcpkmsQ9G8QqhRgdBued6U3G",
  "key26": "2Avaf1VWhwjHzgdUnygLC2o5FHuZWGhaJ3AgDtfMhsArajXVStKCpv11EVygKftFq3kzSwEN1ecugPC2zz9XgyQA",
  "key27": "2nmHBGg3vPFLWhRViEkjkRgPzg244mgoBrGLaEnABqnjdQ1w1XmatKTw4928fBF3R6ctySc6Ut5ipo1RCJ8E81D3",
  "key28": "5M9RNAXiB2z3P1pGcpv8ioTkLdr1Yhuh4vKdsPAxx8iGmupE7LRiHd8QMbdnqGprGao67mKfhe97PJdNJ1Huzdvo",
  "key29": "366ZAyqESXyCfK3HEhXKtNNRDjw3tkSAPYStseVTz1cZ6tvrYy6fP5KYsBNNaV8QCg7b6nJ2bMVJ5fjtKyxQatHH",
  "key30": "4y8i6iz5NoW9cptaeMxu8t2EBaayLu27Lt3VL5aLX8Ro2e62fufSvSKUH73QjWxbmzP6WEwEvM2gKQksgZMZFHBz",
  "key31": "3VXJPazUyPwisBNR6qi9fRvXocc3zoTELPkciuky8WsSfZ4Lywmx7X78HRjWgAKazJQis91XZPouXv6RTK2SpN1D",
  "key32": "34WCPhAuRaKvh2woaEeiYr6pjVcnV9nDT5AnMi52hhekhLLSQHmKU2AHZkokDGspLNhK6whNEWabmiQuaHVgFUwn",
  "key33": "4vuVZhtRMWSMqr42b7XFv5FidFcdht3yXyrgvTQrnvVsdoLaye9HHeKenPQwkESMkbDL7B9GdRyiC3k54ogmxxXm",
  "key34": "3R7KYEXh37waBiVVrHmnHcYJh4x4E1BbYXdyLZBeJ9PyH467Dmhg7imu3g3wi8io3WbnbuSmaCcMahK33YQXfUpq",
  "key35": "AJtqNxtYuKKSjwRxuAQWxKCaw1m7Z3ewg914tKWYqkiziHSNwt6ceYrkUxL6MywdSg5qvB1AAREGUGwB6rzxP1h",
  "key36": "TS5SVAeP1EsDqc4DTJ6VrrR1JFZATw11cZ5FNmNu5Nzq2XAc6pBDBBdG9e8yWNxR5pT42TRot178F8s9adk5WoU",
  "key37": "4Q9VgvUDduqD8BR6QK2LtMJgoEh3B3YEhTyDLQfWCmz1DRgacjd9coRvg5WsJYVCjXcjwMzdjxoViLf7mk9uv18V",
  "key38": "TsvoKoVtSPB3N8FoNdNGNRYqAHjYFLUzcdbNRcK2JbUUu5bxoJUb5iRZTMXAVxtehggUankmYvWdm6PYTtFnBqM",
  "key39": "5ZwrLBimHKMR23n7tahAnrTznMvjUGZsvqojRtHA1o2LfUjy77azFetCez4Xoy93btUTCLqShiuqegrSETaEKS8S",
  "key40": "51KTMcEmQc2pMME3uMsStUiwF7BsbLWfJ5ZsDTSDr9vYYPDGiTZ4oe9RFgYBZ7oGYeC6SjU4roVrNTAKtV6qWWLF",
  "key41": "2vSFGDgreBmiqfvEQmT3intbnf8Sww6dc5ECJVMsvyK4epmFR32X54Lxepb8zJksBSAqeRbVGxR3DZyswMxXZ2fx",
  "key42": "5cns3uFZufaZ5ny4hrm42i3iaoP2m98WwSSwCdcxL1UiGZYLGGxaDuZGa5Lu7uhPXjfwEgP4AjtAcePihnA9nCiu",
  "key43": "4ZW5yQfEtAEoTfukGuc8RHdV4uZ7rUtBiF5Q2mMiYvJ7PHA2RtheEUHCNaGCaZnSg2Zih4UvDuapjdqcoN7So6tx",
  "key44": "Y2gMNj17bLPhYwRscJe6ft1KvauHV4NqHeDVd5zfySvXqNViY3socSm6WcfDWPRSa8be6VRU3LGNB2yeDSa2YQV",
  "key45": "329hQjH9kSJrsPVdCH2SQbrp7UwJB9vqumo3VovimJfcEeP8iCsaJeMvhmDsNn4ZRSuabQ4dJC6zRnVzj3K7G2zL"
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
