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
    "WSHJmF9W1Zdu3ybHKDXYvQFZatLehruYFnBV7K5A5aCfKy49sRRh56dgvQJKB4WnkbaRvWCSBLHBo3fUeyPxcxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKzo6bd4VLVpzy1nPe1wLqCobSuA8VHN2qCC9BEyLbo1ZGAK9SC6AbnzLQrrrnnW7tNfTFVzPRBHh4ynCzLioy",
  "key1": "2snRNLWUdpBo22dz4dkqttuXTPTfbiBYgKjnazjmv1M18kCkaobqqjL3WobGxnZvyDo2Bo9Pkq3th5AUftQYbjeN",
  "key2": "2P5iNJU4N2q6G3wzGfpGyjrghbtujCv5oPZ6sYSWJ1NdjFmgZtqYPgUUzEFuD5MtneDsBEGswEiL5GdASJnJP27C",
  "key3": "3mwZ3hvwiXn7TY16JW6HyQViFqx7J9BaLoSu1mAKmESRuGe1a3ukByUtap57nWhfbvXnwVUXgBDbjfhj8KS3coCU",
  "key4": "JcFbSLKkY67U7LN35VGSjEMiRjqe747VknMWdtsQpTR4nvPHoaJBvAAx7tvfxqvZWPBUd6i4XY7VoBK2gfprwgR",
  "key5": "4jsDfs6mZKp8v7V3pCNwUxfhUHSMFLtHrPc97ZhsPBfAiChZ3Sajxa6z24VxW3kejhFWnWLTcc7LzJ9LaHEsz1Ch",
  "key6": "4FEPsXVWPgCzK2mY9kGczUJeWJLV8MwFR4V42FpiyizDLZjpKLCfEJWHSVwumVto8r4E1rHzza6NmSrA9A3LwkW7",
  "key7": "jRQiEeopUnoBBzTTFc186cHK94RvADeJ1APuqA14LxckZD7BU8M5oJGgWeSwJChjRUwLe2i6VGS9Dcv6z1oC5de",
  "key8": "5xQc9JrDHjQaBVLyZKvxVf1rkQKbiMWBwyPYGcdSPi6K74SmVeP5D3pqoKrA9EmqtCcohdAC6uW9CYxVbV3Acfi9",
  "key9": "F6CmF462G8AEXkBjNLzu6ypJVeuYkJDc6HyVpUAYFCcq6YqXg7P5gddNobZ18E5hmN7VNWFUR7pXNfoG2k9Pw1R",
  "key10": "2AqGGsVk5kM6qvWBneRZCC9efFSDQyZwzncZLd81coK9vsz3tvmUVHr1xKknnPs6qHyJqWzvazGySYRUbJ3zPYtH",
  "key11": "Q27K8XbBG7PQWvvbr7hD18Fq6Uh61oo6v6XpPHFvGn2oejDsw3fgBMVYPqvaL1s6raYGaVa2h7nwyFvJX2JvnoR",
  "key12": "3xY8LjvByrLJAQyLbPSYuqXCrE8AjSPeNVmAGDf2EgDLfbVQD7QjoDfyuAi2cQ9E3BGWRq5tsEgSgxYkwwFW6Vr1",
  "key13": "3EhLUDnvYa5LgupUBpkJCAkqDVmDwpzjVcNDZ93rGffbccvXeQtKxqdb5JvbbAZPav8ntQ42yFbCLTrqtUTCNM6R",
  "key14": "5BKoidfMQYjzedtQs4G93maDzDguRSgY26tFYcD3jYX8BezeU8MgQoRSak7qDzg9V9pNp1Wkck43bEVkTi9J5AhP",
  "key15": "5smKFQ8Saxnn3dCpzUd9H4eGSkF9S6GdienkNhq8vF6VAYLVvShrvYqWrfnURAkMbZhukWRE1SvReh9pgZSFHwbK",
  "key16": "4dMQKX29QN6cqXgza2FCh83gQNn4DUX9gcify4XUUiUHUt9T2QYhZVRYLacQKs7qCcdU1HZFwokwvzzgQ25EVTtd",
  "key17": "47Pr2sHsHfTwJwuakpvjrmGpvbtG88XmcL9rL5fiB2etEbbTw3XyFuWChwSJrbu6fXhi7QcgXexZ58Cj5EZt9u8r",
  "key18": "bn9Wg5KuC5gvhkxwDe7PMuD5UndCVGSQJLuTpXevrFCaQ31LvyejbsVqaWy1vdzV5dELaxAxPq8iUuAxAio1Qxa",
  "key19": "5wK3FADwYCDuQ7D9k8Ts7emP572esLNAUfGYJoyFM6E2Cqtz72yrEh1eVzfPKytcXpLD5S7FdKYRkqVAzH3m2ZfN",
  "key20": "ibVR3JrnNFCkAK9hGNqPEXxBXDiGAjosvJE5JkTeQ2dmWBtcGNXQ4zMYrBWQz1v6GYy8u6KNVy5KwXeAmztrwXd",
  "key21": "5PTRNdPfm2zTot5BRXUcMrUgj5n6JDbXAD2k2Ld5NP8FjeXDwCxMchEbqm7ZGRq5yajHd7ZvhgyAxRbcSomaaGCc",
  "key22": "UhiKNdRegAk9vJfzfYAX3BdVVzEQnGSG6UptbsjXrcnGrYbAyqJFSZheEbqvnzWYLXCddtT6Cd4Zymr4jwp1LbJ",
  "key23": "4nU4VxuumBSJ77GKXEpuyNcXhrnNXmTKHw731UWaSA5hgKCApBtQsaA5m34Mbp3nMyGNwqF7qEhJ4ccoR5VDHJRK",
  "key24": "2N1ToC2eaEvAf2wddVYg3rRDNfQjksX4dcNAYpxidtYLQTcdGJUhqbYaUt4f81cccLGupNmhQoErJbW1QyuuUbMM",
  "key25": "5SF7kLZxuZgHYHi9BZkpFR1kf6axfTMBQPApZLbL1cHk2GWrEQ65Ht6ww6SEqawinbfK1b5ugCd5neXC18WdcguM",
  "key26": "2ZCqPio1deDLG419P1U6ziogXZt57r1DwdE2794zK4LYQBTUxcHR3EtTy5sLdwxWjP3vNavzTocVfHWnRXXhbRTx",
  "key27": "58aQsau9st8PrQFnfuBQtuZaqWkEWnRfGBNc4pXQaTaLNCVDcXuQ6GS6XSttGxYkUoik4yJXEJtW7ojN9vJhB9gm",
  "key28": "MEGF1e7bv46BpbWX7xgabxF3mmAMJ4Dx5T9qYjT6Tk2BDVDwPaQH7bwQtewfvSNVcK4ZJ5UnEMBFVWBrhVEyjGr",
  "key29": "3WgHjf9y9KSAn8Ggq6kSJ1rTNbnRPummsQvEgJtbSXE7xrvAgjzcRMcuF5ujUnCEvFaTZKSDrGDbfmshGTz6PWAE",
  "key30": "2HG91w3Xt4X7EvMBx55ZETVy5khadGAMjWzXcCDo4DRwTkqs6wpJK3EeQWUWivdWJnJM2auZS9rEYqTVPJAboQud",
  "key31": "52TZdpKi2ctQS2tUA3SXT2u2EAgutfRaC8K2euCLgf6HTjz4PccAQd9JSCRRAHtx1yZHvnstvBLuBf2wkYtYGxdx",
  "key32": "3m6DLKehzdPtV9sAZTHg854qQGepQ9s8faA6TjAVFnEgfDa6nKL5KMgXfZhvazftBLWv8ox4qbqsaxEwP1xy9Ndw",
  "key33": "61fJ79etZuWKRQZrFbmhTu46qVKyC1vfTfdDqM1Nhgs1fNh7RmcKkpE6bDdFPLASLBPd2kvb8by3aYwHmDvVAg2P",
  "key34": "262Nw7Aa8yJCQsTc8Xn264kKPqrGwYsKjQXMbccSE3PgQR7RjzkCZxiXt4zhomrMDJGgeLNFQvC8vFS2L5Y2Njdo"
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
