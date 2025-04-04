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
    "4pzCSr7giY9ebc5QxHjhwztVPPcqEZ9UHcVb3irkhWq1TCbsmgQo7jhHTVBHbQ8LySXyPQJq5KAS3o3fg8oGskev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cxX66F7ZjE9Nf6n1wdmzCtQ4Q1HKbaoAfGr7pfMAGdoNFKFiZYsggPmowmdSo8kCN39ue45KrCnuowkyNVgNC8c",
  "key1": "2T1afu6gC9NANmCj8TT6Mu1Aj5us4Q1QuEZhvNwwtVe9FdFcAKNMVF3FQAb8X8U2xkQNMF3dnEdjpu6dDByLSQrg",
  "key2": "2NTdqTh1R2SRc6D3H5zZW9VHvPdmzZ6KXsuLRuqRLNkJPwxSP3VW67hvyfZ7jXCYeLrTDMcjSqkL2Z7AhrtxiGy6",
  "key3": "z4PGMs5efNJMPJscwD4PWuQpzYVHiPS4E6fGcbh2Cr5zVrot5ddoDtzXuQ6rDi43bqsEQk8bYCxZJcQb9xb88JE",
  "key4": "3VS1x2ZWtYbcsSbiq4TrPLx77zsiL9eyWRQhnDEaAFZgwBtPfY3Z6qccy8kozeK4fX1MG9WwPU6cj8NAK6r8YpFp",
  "key5": "4eWcBndeoDGmdXKjY4X5U2ojiDR1K9AZRWG7iwTfGm4ENQH7g4a5bZNVfKzSTqWABB8b43KGMuHUz2YTJXuyXc8j",
  "key6": "5pJxKwtJpX1LtifKz8LJqYRHvhpX6FgaiMTWDxFKpFYsgF7RaMFZ8zZr9ZfwqrP9gLub89uGuTCMqqRVtMZ4Teyf",
  "key7": "2rtMGk5HizbjtKcm5Ls7nzjoEWPSUdBcbFv5jtXW9rvngypG8CtGTVxXQtcdibwSQyBg5245FtWRLnwMyJEaV3nD",
  "key8": "5oNqZpcQQ2UPco82QPxTqhNaE4Rsf4tajmGTJHuJQhWaPa56eFiAEcK7aJBL3vAhpPzuAByyT8py1qhmHeyRJkCz",
  "key9": "2ZfvpaJGM5VQVHuwKFd7pSEdAGvx2hoAZ9nDftRnG3QNBNsmHZuLFVrYcJ7E6YK6emUisin9C6ZsgCVmif7VFAdX",
  "key10": "4fcsbMYGJJgVQgetWfmT96AWTopJQ9tESMEeWzpW2bZvynM4ZxZoRDX7rRvyPCj1DLNaCspWk9eK27eLsNYgXmuj",
  "key11": "4K9oCDZZUGCpYJ8zRvvE3zGz5XFgUWAzhMEvr3e2iPeF3tuG4szbK5XtLbpqK4HUC91EWQXW8i6WwtWRVosLq17h",
  "key12": "2q15qfKqxRG2L6tQAZWZkBQFrLzyeD8gVZAZxpjMBDvtdJtaKuCgJVf68qD9ZuWADyDvep2ytu9QW6wmBs1ThvUM",
  "key13": "4A2i6GMmEhMXQMQ7bhT5pRaanVDuFtG3dyM3hMoMKZRwfcyTYG4r44gdVMmosMhEVLMSemFuUmJuoK9qadiHKmpW",
  "key14": "4ZMjNvk4vWxvUYbEFS9Mh3J7HuR3gGsMMBZYBShpcdnNUug6fNrB23VYKn5tK6hebDe2bJtWeMLZUFg4K44GzvRD",
  "key15": "3CtJ779ePqF4Dvk2ZwNvRkWKGrpRZVdfNmuDyFxh4mc2bbGmibBaZ8rmNb3xvLBCQN8EVUEb4ySnECi8gt3qM3eM",
  "key16": "4J6bUVDjAXeSSTwt7Fyi7snxMyb2E4LxJkHmTjrCvKeFQPRGGgLt2cwq5S1yHz45T4SqdadcPH3fPhDjbRjtP8GL",
  "key17": "4fyN19ABCE2mDb1jASDGxJNTpkwLrW8N17WgiVV7nTp1CeNGDgKRNzymPHi8yUcBk6nhtMMWZVpkrnTUTXdwMCBM",
  "key18": "4w4b4oC7qKxmqNXymdWRJBuUyTVehUC3GEd68UFnH1XuSZDdQCmBijp2VhP2qAB9gQnaHc8w8zhP5aBX1H2Seq5Y",
  "key19": "pjRxryd9JmcYQN7mKyanGhX3h5ZcJR2N1An2dxeBKf3RwBfRin22oCc7r4oBXeU2QYpgwKAuJMEhFN5pjuKAtfi",
  "key20": "3DMSnXf3TkKzkBNXMZ3ZMVXZSPRSgBRCPEGCfqXHVeJhStMef6Li8raxYRBeTiWNn66GLqAvZFvB7afgQ3jbSAby",
  "key21": "2bW9GhEoNWHggbDoGt3cQ59wpQsXEc7HMvTDKQfxLbLZ8GBW8BxoQ5HCvuHgEWBDnp1saQzHEzn9BaCzmjPnV8XR",
  "key22": "4YNhzkxn8MMLKz2V77MhTnkZzoSpkdDdpFfh2LkdP7P1ZdbyWGBMyvJu9dZhPhixKJGbDQsV2v4HP9ug5p76o47K",
  "key23": "5TQj7etm7BuW5aQw5sBWp5ZjngH2LiLRzQZK1Ce9NvFfCxG8t2Q9Hb3i1WycmxsWSy3SxQW38tZVwyCJ6NckhRTJ",
  "key24": "2HaiTPdZuXHwV6TXiqSr8k8xsQjovtTGDeab5nr4fWNmDYdRUbr9dg7LcixN1G2p3onMD9msVkx5zSQLjLjMKqHS",
  "key25": "54ysPMNeprfmd3hHv987nno3cbrUdNifr8q14KnwW3mqbuDPVJ2ha8BCEHCKaodHqfCo46NobyCFTtGyZW16HDkS",
  "key26": "2WsovND4QbSMUcKu5AnGXrPqLEA7vYnVRENRFrqC6cQc2WmUQyrmBD6WZZoqSKGgcEiHgB36WXH4S9sQX4JbWoks",
  "key27": "f9KURd3JV24RcuWVP85yTn47tppcF4erjhCdvLsGWZycsXcFfBRdyeQqgKGEn1iEgQtzxNqRscnUGEBUoch2SVM",
  "key28": "2BXsxWz8x4Dm7jMVs2YWtZ1V7wHpb7qJTNKyJEPbnLWhBXKVkPnCZBVGnHPK4PMpbnDBkDDxWpnwdqwg9eB6LcAa",
  "key29": "5Ti2hN2VQ8YTjQYVHHNd2ovQgeZJF8tq7tai6EiUeR9J9142kUQRiQPQxcr1mSXsTEJWDpwwJ8Zp2VvdRuDWXPpn",
  "key30": "37PYqBfnTD7x9xUfnqmXD6r4zovXw5MjJ89vqNr76iS2ANeCBbzjydudmiL7ujiAHvYzhS6DECEeUatG3sTG9sTW",
  "key31": "4bYXVR3PNrkQct9n79vK5KxWCpNr62cz7pLTBmLwwrRSk7xjpJn53BGMPvsbcd7dXwkaz3MPq51LCGJ9W1HngSjB",
  "key32": "27BMkzPaAqcD9EmcCdtqoronXXxNmgLr3JkgX1GEDQEvDt8FLkmUjmgvVSbmMMX5BMLkMsh58A4sqKzHt3Wr4ftQ",
  "key33": "Xw5SJ4vvfivu8PESTLdpbgi1nAsFhtN19oxJ8Gq9eaEJtGLtufuxrZpWJNky1286Pf8iMsuvv1inJNu1f6ytwRo",
  "key34": "2DdMNR42yh6S5RzdchxrsRnxmxaYHpeWyJ86HuqyLc7gb8NtwfBvKykKDcTFN6dEipRMj1k9G3i9G2ptPaSRKNrh",
  "key35": "4tENCffZsTwaCnzgyVF8rqcpvCVr2G46ArkeduyatRBPpRsNgo3Xw6uDzYMdqhQiirc3NRH8iTVLHCnSNh4sSX1D",
  "key36": "2PpwcSdmdDJFNzascGxfjrDgHqGxjfjerf8Y3DimUohGQufYahrLF8eeFEzuWpABC6TnKXsCGjRfP4jqZhYxpWjA",
  "key37": "4C4RHzhj11q27MiJZz56roVXSRQkzmCvrnngehbD5TVY4mabAE2n2inWBeBYrBi3XJdPpLGZRrcPBvS2eHkDfPzw",
  "key38": "3DiMUCkYWEEFxtoTAZhPhhUdqDfDcDLtVvVSppTb6LV3HtjD4tzg2n48ojNdjEyFvMCQeVFJA9fDKzgXEQ821PdU",
  "key39": "bNurUSqRBBZHpTmWNgFp9g68prE6SYaTbXL9r2EiGpYnynNKaP6zx4h6vA9dJuPxZAKGa2iWZbaHum4tUskzL6h",
  "key40": "4drjwrty9U8cKV3MXd4bTn6MnJ4CmJM9RVEfwcEw1AmgSym9chQYLk73PzxmgoasaMggvULUVAswLi7MFZUHC87F",
  "key41": "2Fc3mXAQwp1naNmowqCY3M5y7U61AtbU65bjiKJUwaW7MNRgmL4A9ze71RJ7gU2df6TdD1SzbNFLiSuCUVFoKRr3",
  "key42": "2Fm1Nx5V4T2g8SDZH9yAsnZWqo7K4AmXo2H8U1k58gZpD1rCFoSRA1wi5LMugzg5t2wSqzCeAqSpyaobT92hfZ7H",
  "key43": "2QzvtPLZYsmzbu8hX1y5MexkJnLccJUK1foyyayXCQUTpCcPeXmtRuoBwzB5mpyUm9vdG3187uXgdMYd5JjV7qy9"
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
