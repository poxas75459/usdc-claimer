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
    "2RDdrp1uzk79EnpyvU685UexY67rcJ9LsyVEDaY4KazDd81yVnBFD36zknPtmn8UJvjMHcANmyFKX3SHr8ydN9f4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tZnGpPkg7sumEYLW7MG5hMDC5uFS7RL6rp11Q1LTWRiM6YcZRwpvpYy5wzU25NoyhTWG3ctjaVWjSyhKmBbDraz",
  "key1": "4jGqNxYk9wq4TT8etpKeQkMn9dMBFPCzmwx5PM5eaA6YGH64dR9vqvHLihqi6xd2Z42CkWywaZQ89ZAupqNtwemr",
  "key2": "2YqX4AKsnA5GrspTrewXwGGUw7X32No9TQPQRJJSodxMSH7rQ2SwHHvp5GKfB4ngCFP12qdzN7EGyFQSe4grX5Cg",
  "key3": "2jNcMhxTTNyByiJkWVnTJqH8yTNSki6vhUYSoo4ShTz1F769S6apsKSkCKGoxTd3rQiRxjTXbBtZDBWQcgFoftvp",
  "key4": "5mVZ1CDQT5NiehvHS84B1SsoYrERMFf5uECZ3N5R4Cm6oy5sSACC9LMfVEUNEWDyB5Fx3jSqQ6UaD3ynT82ZNzBh",
  "key5": "KLvw7u69FmH4mnefnvFhyoxjiAP5wzVsPossBheCtEBfSpobwK8FLP9Dwz27XzH1zx6yNbLAc3LamgZVuA494XM",
  "key6": "5wX1PUeBnQVsysRWW1N4YBnWy76HTGftYE5xz3Wv39NiziUA9DMCWZvWQoHUBvpfFFvuTdVA8jebKkwEi3uwT36",
  "key7": "4ZUHcPNss5uLkGw2tYVDHe2UP2kUVrh4jGBj4EWDUY3cm5yTwoa624Ga3VxsLP5XEXuU9Ab5pLPifei7KPUmXno5",
  "key8": "4JWPdzgbDWoGDSqvWNWiQLs9o9sLWgA92Sm6PMv9wS87HFKhP9Hmuno9t3V9V2amXhXF9iKXDSccPJMurJ3xdr9i",
  "key9": "5TN99rQC1tymKxL2qnUiw32Y1JmSz7Wjs9eLJmMrfKQWnqpTunthazVojQkTh4NLEsW8sECVirEZbTTC5WEeKV7Y",
  "key10": "qXo5izeKzZshbTn9XktD1n6tKBt8838LnxizCNAfdGmpdU9bLNtG9crjRKnv21Kb187DWqVZVEPUXUjro58Avoi",
  "key11": "4RDbwvXMTVXAfhce671v3DXxr6jVssPcqCM2bBsuyxu78wwMyvwA2JKuEQFxKBh4vw2EfnWcr94fmFuSboDRL2TY",
  "key12": "5pqMKJdjSwapyY6Bq8jdbeAjE4AH7XyZiBMgqDJztAZqCV3BPjwkaDXWLGUaDxLrqZFC7enZLMwuUynGBFxd6WyU",
  "key13": "2FjbAxHk9KtWRxBxVWMdX5aRMi3tpHjL6wZY4B7ZtsWvc5VsT6FCoKn7vVWoPCRJjqkEz3UoyAQwmbvrJgvFJmVA",
  "key14": "45AG4eCy53poRJh4Ts8e8gAdzafJkmXC9mCvUDcrZzYtsfmNScxhRHytv841emaYheEMoRNNv9h1NWHofhiUz7Ku",
  "key15": "rCxnYXGGvEXf8k9tmKSVbrHkYhVS6nzwadcqkBoTpym4roirSSY2D2QzmZKUEW6jkvuXhZ7StTThLasiGuvd3cU",
  "key16": "2PYoRxkHjMJzrW9hjC5neD8Jnn57m962zD5ZjMaiUzebvs8rP6RGtAHAAunDoVrDUALtMdvFQx2kP13TdwdncVtk",
  "key17": "4po6aRYtQ78dKDdRkPxAp7Z1Knsazpzg4PsaqtknT3ZmD6wkZ3ZGARxJJfEUrA7uSCkX9T6vXJjpsKDSp6eZv3nJ",
  "key18": "2QnYQejzvD4tvsCfFiXK41pJLFu36YSwTQ8iVeWfeH5EPDvGt1U8cXgqjB3JLH2Mccnc38uaBF73GLYWHrFCC3B5",
  "key19": "4nNiQmDxxAcFn6ar9nfXzhAgLrudw7HhvUHkeYdYwQG9A55RZh7n5QKbErMhXdXd8GaPLCXm53GyAC8eCcVQSQqM",
  "key20": "5MPe8yDuxbFVhNsVujz2hjRqsT2MvBWiUqSjM8TS5vw9sxv3ZKu1gvBZ4jRf8MwmtBaAQ4NcjxDR1a58NPusgCAh",
  "key21": "58qPdNSYWVgFTVQVoEQjYxJ9yXv8we49hLyEqimduMvi7ZX8J8Gw6dQQe4vWbgsG1Sykcdg134ZCdLFda5jMZohe",
  "key22": "3TYBaKUknJn51XXbSCkPrah5qzwPCaAaKX6jzMYvY2BUST3JQSDERtM1QcT447yRYE3j46RzCMMwJKCaP3h4tddt",
  "key23": "57DLcTVikRA8vTLtZTaTN1GWiKfDPAwLe4zGGDFqQhzB6U6sLfnzzkPvMU3RfcrctDkVrX4j1fuSi2q2Ko3Yu51b",
  "key24": "CeefU416NqKpxFXL6x1jNgAfuzSFKj5PAR9q1afC1a6DQDmtZV8iyMNWuHPk1ymsYFq89e54LVgnBVTCPEXZKsc",
  "key25": "2WDH8aV99hcrXjyGQYZMoKddXxAEtgRiyQ4dPHrXZ3HCxDLgwLz394tKSzCvhNMx1NJRQwqc2S65UTSx8k6ssqpw",
  "key26": "3RnMnPuAGYbfcwYdD4EnHEit5PLxaQkgAPbCwQSc1fXuGZDPuQg5tnBEas77qG2QUKszLvjtofBSShMd3i2xDHup",
  "key27": "51Yaw4QZUC18eFi9VBLFNJTct5A12WMX4DH2Twp386hPLTps7XMWUYDbERufeJxTGBMrhPny2Uh1oKpZRNTkd5ar",
  "key28": "289Ccj8KhbayvdAHqdAnUTwN2mzyCRK6ZCSGo4CxmcYCL3nemuP22Coyx9ohxn3zBLApp9sB69hCndaBRjEXi6en",
  "key29": "4RHH5bti7NUw8FAuQMmhQMNwaiJRYsMtkQ6YPnVFHxK3KmMpdoAHfKcmbhGevCbX1jjCCTVTEMe1TpF7rYrQ1raB",
  "key30": "5j4fv1xzBj6uZvuiPpvGWsUu7JW3ZivzN9HDAGrfd1aWb6WWu4zi1sNrJgDvugT3LPHYg98rNjEGJKq9rgVcfDvX",
  "key31": "3J28e7xkaw64dHPVstT51uyNdY3NBRwpKjBJ1LN1aPaesPyMtGvqanZ1ThAG6wbcNMXEQvzDCnbjTpjEDRx1SbT3",
  "key32": "3Kwbu7LdGnbcB3DdNuDrFoh5j5dzsEymTnokk7CZJuYKobeiwdHXPnTYS5gtekeJMrAuxRKKximbjqEWdkMRARux",
  "key33": "2XufpoggV1HbtNCqqe3v3N3DWFWR4T9Ze2WQB4GGDUjrt8yiBsXXKGLc2Va6S1EFqTwMA97tLoxZhoFEr5cbyJ86",
  "key34": "3toistYPrFChESYUbNctRPh4TCt6gKRirztDG4ZcDqzAY1vEBrhKgXGvvvA5WfLnM8feWLZk9Z7m6gSw5DCexsF4",
  "key35": "3X6c8oBBtqHHZLgnk9CAnW6buNcajq7NipKNMDbYXHSjFd1cQcthpLXMdi4nvVq7oDvwsnU9fhUrG6roxGdMKHF6",
  "key36": "5vEQfznxyuR7GvkNzH38JsCWtehXjJXuMipxhKLSW8KMYHHw6CPN5NGrsXeEydBnSJP5VEZcRoXtv1vE5h6jgc1b",
  "key37": "5BSEgRtgo6k7Cs4DPWaDBiQGWdStKgrWfSqyYi1vDbfBko5q7ZCeDVqHzq9kAWWc5oodofFfkUBo5CPYykD7NaFs",
  "key38": "2ifL7nQN585NGoWh85d4uAtfi2iGx3ijcanrg1RaHEsxKCeugJ6hpec1SgXVKtGL5NXd6Yda3CrqQ6yc6xRffqLw",
  "key39": "5bAsPzq8J7ua8t42z341tuYT3daHpMxsXsJrBM8HbqX3jzWtjDg3b9RWcKiHj3sQoueKz2vhZFw2X2DAGmg1b1qd"
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
