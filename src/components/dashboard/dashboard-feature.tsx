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
    "3JdXqFwNo6YDAcpRqGFvQctsdmjuVQG93eMCMiw4dR1Rr4r9DmyxfZj2xGhj3FS649UikodUzWC7kykNzoqMfovB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pL7mjD5VpGpaQcGCGw68u99QJNSr5hVVtKCwvaAbM57xafM3bk6M275Gmw2GVyoTkuXvarJMyYc38uRkCkZ4Pqc",
  "key1": "2QfWK9zcqoTrGT2YYPyLGGACJevDkJkE6NkWXQ943HkjH5EaPFGhxGQkuW1BK2AcEMxqvfhHosNc2aAiXBMgXd9A",
  "key2": "2ntTV8KTJw4bbzJjTE6PqWcrrGyBpf9rSA79C3onQHdnmWr1VUg8cfbZULzZGPvCezVAnkhpEcHeb5ou9B5pv6TD",
  "key3": "3nnP7hwuNwc7hq19qRDwAU4VfR1EVsPnA8S63nPr3Cck1n2hyWZ5NAuU4qpRToDNtB3p7z3VHtbQssuSwvukN9vX",
  "key4": "53nHwoqQg8zYPd8fTe8mYjP3iXtZ5PXmA3u28BBSct1AdD6Ni72ZhR1dv1SDLhb8iRpTtKnrKXEBjrqEktmYMJKc",
  "key5": "atV1t88nvqWSHj1Y5bjCwymrJ9kj7dxUUQqu4NpwYrkTSKYUpKYLPcyBWCm8Xm8YxZTRYTiE1TkQoVYebXBCnNr",
  "key6": "4UMPcssKQCLZftrnoNyhxMJhAskAgdFEk6vBPrYcbhos7daUBR77cDhspRdcS2WbRdba1y2vTt3fPNFqUY538tMf",
  "key7": "QGbkhJNGC6jQGFmXMzbEKeagasGZpd9NeT1515d4iSHvSp7Gsh5SFmVMZzjd9cHyb5jw5hGCqnABJ2hncXyrkRX",
  "key8": "3FRZpVnDdEmVBuu9WsW2ySX8ppz174fTZdquEcMjndGVRG8sGPVvuNz7TtDcSDL5wbWK7xyQVdHsdWp5wq78mmDm",
  "key9": "3eGuViDEXZKWQSdyQccQCEXrPPbkVyj2SYcE5877GuxKcxLsoM3f7A7XDRFtfMeezv3VXk1NcqfjaAynNZiWhSZz",
  "key10": "2XAg1fqSXpoqe6ubxyuP1VQPqwX4KYFPT2mpnA8fSmsabXg6kD74R3WPg58UowcZ6DGpARLmNhoDK2ko1ZiKRSmm",
  "key11": "5AEPpDotAAFYDgoG9qukKiArccGVrncVAXF86CXb6sU7MzM7Tau38f8EowdbmSaUZnd2QNSCMpi8R9aPu35bG6hC",
  "key12": "2cQMk6BQR47NatmzQt8TLzVCxMKfPnExnkPaLxUX5J4QhxBdPX8s4wc1jT798Xc9Uq3jwQrusspefhS7R3K3pVDd",
  "key13": "2LTN6FduCGbTkgt1qo5JtAYc4XbRc124nfjo9a4KbP2EpSqbCYvotaPxjekuxXB936MHacni2MJ569iaVdUNyQHe",
  "key14": "3MJRqsfE3n5oZi7HNLmQoXKRSKhNAr8d1iKcFpsNXxoWexq6EwuEnPVYZvvjmq2nTR9Hr9q2W1Yfm6pigrc2Bbxz",
  "key15": "5SSTDBLoBhzRNQpeh6F2efCmiJPKFPv9NqsE4TyWq4iPp4xPtsM3fmdHRGidNdtR2BExMuKww8ewQdHSAt2r3h7X",
  "key16": "3RVeXRHH3hDof5ytzeZZ7BcB9a9xkptpxgMD4GsSFmFw8ZaMABYoZCop7Z5WPhyagB5ivxuPPaXFzXYVQKa6hv77",
  "key17": "2EofZmZSCirp7oE8BybasLibJhYT1LQ1kww7cFsajiEHNTUxBz7yfNdenx3TzbphBMyS3vGXaEBeRjLETZRrd2RW",
  "key18": "3ozZNbh13peVZ8hYtwynWhDtBtotR9vTdZez8MMmRHaBW8CP5NkJXdS5ZDpphHiS98W77g6JM1VAegqXSU7Gc39R",
  "key19": "3ecth73q2bd3hb7wfkdu7ND55u96MX69vmR2oo3vq9Fy3Qqw4eGgdSYwJsNw1AoUa5PU1zFw17kbSae1FjjT16Kx",
  "key20": "4QA11Qp6QxvwA17Sf4M9n52XtiHQwnBgeEc4X9kb4yvPUXJBvgP1Qw3EKKrdkY7bzLbHtrtUR5CjkttfLWKQM8Em",
  "key21": "PKoMbZy8SJbUfHsz3z1PRMs33ss4tuMSFxSjTZvie49QDEHYeRuMXNB33H4TejfqrZxdMvYPRfcqjfCXg82mNJh",
  "key22": "27mLhRduzqarmnREwY7ngvEQ3tpdwTakAx9WmRwq51wFCMwbUpwrdofbEQE9zdhBA5sUiaGqsFV2xuaFDANSs4cZ",
  "key23": "5cL9K6WhoBPqHQcdYRPtbZnqsTvAqnwEEWQtYuSFFMhWFBiUviuvu3Yh6Bv7WAqZ6Lz454YYthLJUaAzu3vio9Wa",
  "key24": "467ArjRGjBuTS2e6re99zzNUB5z7wuoCu8F2M6mUifL2411QCL3zBkV12CrLY8f6GL4Wqaog41JqRnDqLi2y8Cev",
  "key25": "2LqX6VdHy3xTUv1cQcTmiWGs3QMfWz9UsjgtKF6LLUog8YgrrdxVjGUmDKvSmfDZGg94LnQgdeFPpLg3iss5bXav",
  "key26": "4AWMJQ5aq4hyiaE95XzCwCA18czCx4151a5RGTdS9fnw3mHisggD7Mf8TqLPtZpRCsBeFQJn99VecD3csW8vvguG",
  "key27": "4SMdBp8J3nQWV1Lrgq3iqgGXGqfJbYNevHMpunyEsUu8Yuwb4scN6pt8VENJcPhUKg9kpmLsPyJGkAHzGpXjNa6m",
  "key28": "2nGBN1XjEvTG7hN6ueUqAYtX4AConzbunaxTRASsvrWsjqvaXzDsZnvxVmfscUSsB6qVqYeK3TuXkp9GuFkxifdz",
  "key29": "2gFPJ7DxsrjzAihhdTbPVUvwwQRept93raAietJ8SHjgG9xC53NEhuTJMxLo6nmPAFHHxT3sjrHwLyZ86dzGihoi",
  "key30": "2T9Ee8BEAfL2EWZe2sLj8spK8hxD2k5ELtCAGU1SoVSKsUHTUNXCHnSKQykjEHHceryo1kiWiyBZpGmjBwQxuGz3",
  "key31": "5w1YtJkiSt5HSe2mKQoa3bkKJqtMbjiTLGZrigXDujrKfQAkHkRUrJ3y7MPdCF3rfgEKmB59Crs21r55EnPtC5mw",
  "key32": "2abthiCQ6prmsx2774GGkr1gFw1gQNjoid4JYhd7sQXDdrEYGZFxHJgEy5omp4qJx7tHndJj12BTTffMrAsMrY9z",
  "key33": "4eDA7atUX2amJKBennCUZwHzSwabu5TbSKAsJf67pK4KH3G59Hti1wMmNjewXJPywTKH7mxxKjwXjxtfVJS2sztE",
  "key34": "mZmkZdieofn3cMimN6i8LwDqrnAvnMUW3gLoDCE4wsKE7QK6nBCXoNPDKsQ3ip3qHHdYdLaQZhQdVZSw4Y42JLi",
  "key35": "2j5GVEW4KGqvaRsjfyokUPFhLSDGeSxC3CeaMzVDMSStJBiJDJAFhfAPErN9YqKcqVktvj8u1gYukNEMjffycNBA",
  "key36": "2Tpdykjoefgx8uxZWrdGriFGsK52utQzfegy4swdg8VVRt7KsxepgZnvnA5g2nnGnpaRcikgcqnU19Qv4T7ijgHv",
  "key37": "BwvNaybkjv8VztGuWj1wRVNtgGtbau617kjgkL6qo8evLcJdPEVwJ57fihMVT8uUvzodHbKjNhh5F6dsFJqwPTP",
  "key38": "3Het9oGcqSy9HAARu9sGssB8sr2CVs3HwMQb49XSKbe2eTSNKXVVBtcR9aktbvYNNjTmY7va4GsFr3mUesb5YUaC",
  "key39": "5d9X2Lppxtjm58mXWJBdtKM4r4BoE2Mt4fJ2oU9sxYS7mjoea9iJoEiLuaqLvmeuHTHWVymoFefRBQyvFujwgFmV",
  "key40": "Yc6qLBUhLGiF9dJD74JMGay1HNC8XWntRK9JiSXjqWxKzMy9ByNNuGDXWQ4DSp2nuKnoguw3x2STQrA2PtHujj6",
  "key41": "2HprovNHcZa72GeLrSeY9TkTkGRHcNLezKscVewhCfj3TU6EQkFLJmg7Ujt4M59mCv8E8oaeChaGkdD3zscHvLB",
  "key42": "2W17tLyCRgM7r4DVvUGJuSWgCNGMaxjMThcvoDKTw2queRuvv4FK8tQMZhCNr7pwvSt3pbBRm1zVBUUKrvX6MgvF",
  "key43": "56Hxd7XBoGHsXS3Hau6Yvy3rQvePcBN9Gh1N1Ls6prVfisvj1s58AYPvDiHrFuzfPWhfrLwT6gc3QUcUMCvALPPT",
  "key44": "UcrYsgkzARcwJA4FiAQjnyaep86rrPo7WAJnLdAHfzP3QZW6BkrAqSnD8Njg8yZvYvEMv635TLVjyv1bTTE73WW",
  "key45": "5EK86433WM9djAFhLo4eeUsx54KJtMkU6tp9PewQK3e4L1qy9aJNZL1KNiwEDg5C7mM8W2sjEXZmk66Lme4d8usg",
  "key46": "2PGKSHRcMv5a1ftm7Mz1bFtiuR84tDtQmQVYmSY1frWYL4bypxDpVyMjNRTWCSysSKeD6WKqUwbbH3f7ukFEdSgg"
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
