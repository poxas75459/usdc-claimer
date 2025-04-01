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
    "4eQAm8Ey21H4Aehs9td4otEu5HKcPUB9uRwR5YQWuhVEaPJ4dFDjbKVcVTwqQnkfztk1n53ivfVTS37VENVpB9q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RuVTouaTLRjq1govzFc9avMypZfvWioiV9md2nkugmAL7LpSdAFzenxodQ7o6opSPv7x7mJzKDqsJz8WYpLAHko",
  "key1": "5F3AwePrJ45W51VP6Y6N27oa99N8Lo1wubfqq3WSFMDGmeQP7HWLMJzRueY6F47zSixCxNRyW484ESLW29XYwdPY",
  "key2": "2CY8qHNo8bcqNLgrFT8t5snQoS2j19pHionpje6v562ye1uPHEb1M74eESUrhxStzP4MmeN4pJfQFcgkuh7PgEHR",
  "key3": "3wLxWZoiFbLR2FbSLzZspuQ96xfo1YkXijjdtW3Ca3zmvKc5opysJT4xmGg6mwEed9Gr9MYXzyEw6czgPciCGSq3",
  "key4": "5eNU2Z1VdtThqvenmJwhaEbow9Y1MwDSTpJdC7yCthWiJBVho8dd8EVNAK4sAFsLwNirJwjJBGZmmyd6QgmLSZUR",
  "key5": "2sgiRpe1JxskHarMqo9GvZt54ng3KhLQx9SUCMbDNspJotfaMy8hAy9aybqdCjQxH715ogaCUwzkpVTccSG4HKZt",
  "key6": "4bBURNqA8GdAY6EzWnvvG9nB7moMP1e1KNRmSu1K2zPVKWAqSRGWGnrwUtaHPN4yLQq4Py6aC7s4xCutTWDUpNGt",
  "key7": "4fnao6AVdmh7Q4hNiewnrWFnMUTE566ddRiobswpUfmJnNPBMUoKbt1WR6itGGiyDmX1mpy2i3SJFkgGY5Xy1CdH",
  "key8": "2E1q3b9wVr6aeuM22C7LiF6EhFTJgYyFueMJt6VEGRT9KhMJzLDkUMvDYrou7kPEYQF2NqYU5ZioaVBF14ugqgNN",
  "key9": "4cLmpNJ8dc4bnWZYrjQaQP5Ffwt3GgNUfjrxsH9E2YjzZHFz6xrYQvBD8DTfcfHn341fQ5Ud94znJNxrBkipQoZY",
  "key10": "3g1ivgYZp5fE7nQT8qWDHWLjR5NNmTj2aL7nPPpyTB4Y9bw5Zv6xtF4fRuznQQLFUSBHVb9YdocRrRaP3f8QSBm8",
  "key11": "2n64XSrGrQ8xHhRuzzzyi4kCRPFstBx8WLRCtgQ9f9sR6KFwS8MwUiqYzf28RjRriGo54WbqnGA5JfJDUfFGi2RR",
  "key12": "2em5Qg9xcgMAQjvd5PYMxgCS8DUsaDzAxaCrx2QwPT7CGNkZVkKc8WchDQEHmxGLAWN83N6YiWGj1RcmpBdLeivw",
  "key13": "55G1qTxUvBbyJJGetZWTvuHTecLMT25w6ato56XiZQoBAkweP7FDCg4kGSAk5XEhichdAGDjGQYmdR4KJEUZmDJn",
  "key14": "w587LrNcNJkzHFgTUwoCTexoH1pox2eT3tR4MRRq5HEaAReVNJ8ZSp1jN6ufkL1fwEvsHkpuF4Nezozn2ythHT9",
  "key15": "46WfJGU86XZZxEyfMhTeBVSfYDiEKuqM5oJX7V8iAuXcmyTvDzdNmbpJPhnvGH2CfbeKF1Fz6Y1C94QWCvHtxyQM",
  "key16": "36S5bprpSZj2H4pvB1bQWB9EHEnFbHNFiYGEDy4ndvAytYWBCmD1vNXKeMraVmqqdsrNSGeXHVtiuvRQxKj7QHGY",
  "key17": "5CmkWYnSdyr8VrH5qpThQiY7HgeD3Vekxr3pp8PRgKcJbiAQ4TvX63eSHgtDz1Fo9jp4kfbLq2tKFsJWiANHRiSc",
  "key18": "q37F8v5eu3tPt121eTWznUW9VQWYgXWviRvR5MbgdorwsJs8pDJATHu31ShbZxWRBxdXZi2XmWfECEYb3JQF5Eo",
  "key19": "57nCVjyH22tewcozJHdAbAxAiMsrb6fvqim5FHfb7qRMzphdhSEjxEQZwAeuQn5gwFPwydHviMmZANtojtgW8SRm",
  "key20": "42PdrB7cdmMvy3VE2QCfXnQhq1xx6k1e9aBL675ZLcodikEHx6Vhs1hRyGhykv4WB59Jx4P4QEzots29DTKXBKLc",
  "key21": "CevrCt4EJfVWvTdLSBsS5f5QNgJX7aTuAKyt5My45NTRxSiJXofWJ2ADvNs672k6cpQ3PDADC3isx5SbmzJdnSk",
  "key22": "51F61cPoQ5R3mxJSGVxAzLGCZ8KAZrtoGTP8Y3gAsfdEHkKg8ZvZ3FDa7CBmZEsdLvYqXAEdNaF4VuJ9Ss1vJRSf",
  "key23": "amdFvhpFNZ9DUgnATBgGBpqFt4nzxJEvGW8R2hT5TKxEfm4H5BeKMBUmDJeek1iFyKg4zrejYGCUrE7daT6L8oD",
  "key24": "5zB1aZ2m2uWGjr1Bm78L9TWfi3aQxsFZ6XZ4r5T4Nb8mEgrtCvNgr99oM2rnnrH65yL6f4BbEQdXx99fjZ86HHeh",
  "key25": "3PTFEvvyfgh7KXEi7md7PJaa7YuQ1wb65Q7EqD84qXT1Y6wmkRe3kNJpQjNsiLq4QWPjPWjXs1LaHzhCuqAeYs4A",
  "key26": "4TEt6SYacqBMLbLfFnc1MiQfSR56vR2jg6gmNaCaV8ACRLxHyaNt5jnYD8zLEY8qSCNEZmBhJ2WRWmwmbSyYFTLZ",
  "key27": "21xnnoXUYVRKuPukxSeWs8rgAAHgWSedDhKdR8oCFGSMhUVe1KSVHrDepJibySm3uoYA6o1SebSNMcbuCGFsm9HJ",
  "key28": "4vH4q3qLRthsRitK11t9qKrT9pg5qtcfH56KuE6mSyto4a9RJ5dJmbCU9y5DqEp8peAhY7CrzKukgnw7TrgyD8SU",
  "key29": "YoiwbnjsDueH5AHRtcYLvXVkjUUDe5vq2yn8JJ5uj6tcyfbp9JWTn3cMyDi6xxFFBqXezs5eoB6sijHJtPy475S",
  "key30": "CA21NjzErrp213XAAW8oeVQeachPHH9cgamiaNBaPTsPKjPq2xfFDpF3K7F6aLf5sbDFCpk3SVphocpMd5eUz7d",
  "key31": "4NmTSLRgzUFTX189MVKXFnwvZsa865aDmgAbvy9GhxQkniESyidy5Nex222TiuHuxzpGjaFDtWP8YEjAWsmJcvLu",
  "key32": "5Tg4Y2PBKeQfJZMpcshh1VhznYXhQdUUDTdMZCgdiXxGA2QarzEg7b7RWq5bXNepVwW2SzsHjBpWdVjUWFctoXHv"
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
