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
    "3nTVUMNWgYgDJh9m27ZV8Cq8A8qQ8t1qn77KiV43pFiHaZTenPxa71PJRwBdJLEy29rBepZixv66n5KXkHE6fB9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F2fmJSxJFMrMpfSbACBDYF7Pd7auP5U2twvuwE6XMNzRNQtJZumdHh3psY2qRCU7cfAoNey2bDAPwNB9mAuQctz",
  "key1": "3UtwBUdFzjpPubG2CeSxAqxZ3CADM1AthvG6DYHxzmTtKGwSFX7L3B22jza64jBXf6DjUC2fgMunntTc6Hyimnza",
  "key2": "2qXsudArYUu3td44T27KXiXNB157anDLBiTA3r656qqeryLTBBzo6nYNdyLG6LWLpJAR7tCK6A6qURsZ5oNnTVcC",
  "key3": "63C98ffsNNy8Sa5qYAX55vwBFyprhjjs8fnkQRsgwxUg3mK2iVkA9zrmncnHSEya73bJtNHs1q97P2e7XH4EkvM3",
  "key4": "65PVCb7Q4WjnYKx9Gavf3WY13C8XYVvn5BcmGvtTRxC8Mt7my5wWspe2C9wFPbNmmnMh153SfcC71cnGVdpWsn2e",
  "key5": "isb4f1oWRSFhNizuCy5WJoqwb8uV8mjB9zibrDh3JCh36jsWDrKWTzdCCse7z6Q2weLgtsDLnFNi9Rz1Vm6pYZN",
  "key6": "5G76kSBvajKMYavCqk4wfzSKEtLCNMDFNdgWdk2Tm4QGrWtRRo1h95cpf79DYpc8q4pJzQTgZg2JYfg18eTokm3P",
  "key7": "3iazUTG3YwdqVEge4q3m5VJTY4CRACcxMAuaEBAoggNLyz42PYTLfphetFjRC9ufaBZe35cuJqnPAKDWXkxTA2rR",
  "key8": "4HskyvdkLdPqU23bt8ckbo9LrADM2pArg2fF2KTuKaie29M55AcDCts2fomLpbi8JyzBCeHAA7dXStguuMEegsq1",
  "key9": "4fdG36ATqcFAkH4ZCbKST5j2o9T5yxvCVqpmYEaBKPGCBFsbX4SfixnaFeE9NZztBNLupZDxjfFPCyqxLVhkttKj",
  "key10": "EKkPRqkGdYHhCp2Lgyaq4tpb9tgMcfsTLSjQPBwBp5spHKpik1SRBTP3KHEGCU2jxUSTi6JQSwS3y8Q9g3u2D1W",
  "key11": "2xhpcvkisHKVyCVDWass4gfo4687ydbuT4zFBnzhapyGauv7gNdxc6nSwgkekcA9LovepZvZazJS3Na1mafk3P7K",
  "key12": "3Q6Q4BBeGqaNWY6w5bgWoxDyBtLm76NYwnPrT1hXwL2a1NtqY7VQXKRLNp7s5yx7Fgve7yPHdEBaoJh2MeL21Csc",
  "key13": "2rjsyGVC7JwKXWs3ri2sAXW14jfDYzyY48mPAvci9YUPqcisFbJnHU2FRxWvTe1N3VJSaJbENVsYYEQ8cJ22mBp2",
  "key14": "5vsUrAp46bhKgk9hwqu63Toww9vdPAxvyf42c6XeLH3rRT9UFk1t4TbxgzYuTCePPVhj9d7jgRzWdTurqEqmCr9M",
  "key15": "QY5qEpV9jrd5MX4zNw1EHLUHGefpfQPV1o8k8QXEfvNsSE63DmzgGZBXGLnxYriUmMzgGXy7uWnFbdQbHSNpDrb",
  "key16": "2cqpmCxCuw7gqzKYUwttxsrzdyPBmHM4NdFdWEAa5kboGPtEpGZpcg2eJjjWULgez3B3y8wAbzzpgeu2SgP9m5a7",
  "key17": "WYvjhXTUFLSXYYAqy8hVQbkMSEfWhcRHxwaFisC9PPNermZMzuQuP21KP6dXzyjKXKZgVMPzprCgKQgcdFvwTRG",
  "key18": "39umirZHQymQh3NChand4CiQMcJm4gHRWD7z9a8Fnwgn2gzC5he34d9rmw19JiihQhq51yy9eG9yptLfwNmDTZUE",
  "key19": "2Nx4PUPU4LmSjoK5yUB6k9NdaEapKo6n8tE36JBr9sXoTi9pk8Qg5N1ZeRQu9ReCUwsu5UYDMgRWTGiyQ8stCHZX",
  "key20": "3qgDkjA47BLjNbSa8LYBLEvVqJyAYcXcNBy6KZqoPFcuAd3RtBWjBx1XamZyiiMjcYswCJuA54dLBNbneYox5gaJ",
  "key21": "5tY6M7159UK6yfDgzzj35aV4pkLXBFkrJ7ex16DzH7Nq3oz3uEGqKdY8tXPQz97adbe6puqv4fo3utJbw7dXUoCg",
  "key22": "2fwVQZNJktJZFGcb62vGf9znBdHrt7icDWydpuQ9zskksQutrGeMT2dDWtaqV4qs9S9bdAS4fr6pFyh6JGwJVi28",
  "key23": "2vkesz6GPDTCFHcUyWxiEJsKsLKAf3h4sUuVGXPLyCxv4CiDSLX2RcDydxv4FmpuzyGPHPnwNkq279BNXaLEBTJu",
  "key24": "4czkCFQ2idxB69w29NDAivUhAMsTzn8S7s7HFkp3u86iNaWThaQDW6TtToa8URdc9r1bMJJDRe4EKhygjepsReSC",
  "key25": "3t5yJRYaNBFATmCGetzuL5mWuY5Pc86xPRQg7uzpf2oAnSvKNV1eniy2L4sfxaWkKnwytovaMRhePWWhgSvrKDZ",
  "key26": "CDrGYZ6CKvD7QiJVeV69MRBLSseZDReLa7cZHrWHmbxep56m4aLkYErUjQ3o3crJK3K8oj1Ymc4tLNoEiF5AmfQ",
  "key27": "4CJyefjJQZhQugzn13kYf889NB2qvBwMhG5SM3Tfa5NtBkGhVTyAAcfWL6kxPJJQH7zVU6SBeCw5QnP6BpBix5ZK",
  "key28": "37BaHBwHYa9wA6GumBqXryTw5mfd2EX2fDLoZnh9fzNscLcPi349ZXmcuREYVvpXdQwQL7UYjbyFxgUmedD6MWhP",
  "key29": "2YD9CZbjRkqg4qYyRRLs4xptMFsJ1Nov3oZSvyqmM16WBZ5K6nGEyfTvpEsW6HjTLtXH1JyAtr2CHPgQ15nExCAp",
  "key30": "42zTyMyknBRLmW9djGsk9WfazybZhvZ6iFxgDTcV7WA4pvaSYfZ5sHUwEy9D4gCDfAYjLZaRW4uV6H7EExfEtFxw",
  "key31": "5aJfvFHLq5gNnY8Tqh6JAc7ST4pQqnuyWKMVaAe7cqD7xeM3Pz44QgrdsaKx4RF9PyVGTjYzCHgmBvmhwyZ8C9aF",
  "key32": "2wgzAzD4vA1wPTsUFVUEoseaxQoeR49ie8gKwjzXtsrmd3UBj1VkTWYmCNKb9ky5iFZ6Yncnoa3mMU1HNFjCBcZL",
  "key33": "5GEsPCcY1k1Ya1GjbvJ3ZdePx94EpJPmkLYCW86uCtCa8YWwhD9vHpPbKTXNaDRsGa389jcPjCzZC5PgbA1qFmxg",
  "key34": "P555Ljm7oKK4iEWevPqw7sFhTVf9DxRcXb8G1dQadBiye1coRX11qxtgX4sw3F596LG13xhaE8gZhmMz7uR4eE6",
  "key35": "2rXmCsEHJyga4tLb59BcVFbFwZnjiFC1E7K5Cx37Lt6L4HythoN8c8Ui6QHBfZStnfKL6Ycy7f86ZVBXHjfsK5zQ",
  "key36": "4DJvgzWfiaoDD9sb4wfQq4PkmY4TcGqS282VPpQKtyPpX2aEUxxouRjKcx461PkNVxPN3ET8GKn92UqeATay3Rsv",
  "key37": "5CZNkFiNEifCbiXKqwYLzKFaWfDUK2XoEwDhgieQXU1Y7rJvSFmNvnxUG718iA6k1LzKZxKe9imXSSybSCSi2abv",
  "key38": "3urUgXhAReTs5Qbb9AJvJfgtwZ2fiG8Uzwy1vR3eWvsGAcjGJ9NJUfg1jc5YvzfWNfWh37b4Wwp66dmvbVD1Exda",
  "key39": "4AnfRgCTMqQMQtahZU24Ev4ndK91zMDGxq7EKNbSFCsri8GYjqGm82eFbLSQG6ovHwvbivfTQNBxW9srjZExp3A2",
  "key40": "hUosjh8cUAJBSNQq9r5YBnPCFCmPFYRnWVgLewu5EWoKLQ77SUiAeJrPtezKLpSX8v2DSfdCwoPqQ6bm2TsZtuF"
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
