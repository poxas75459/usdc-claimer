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
    "r2MFDvP85b5WNtRaZdnBjE5kDMeeD7LrFerxoRQu9rH2QTShkRuD26mM7G9R3ENQbW4rAVvrBXs43WGMWffR94S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SADLEeDtaxLGjScqTJGAoTN8JzGqd99XA8Y5u53FfUqejJpAKYaTsrFAnZtngQXVGsQHKC3LQ6CSy4KPsXDTxVt",
  "key1": "4p5C3exkR72srKPp3eXVDTsyKQZg9RfouDrG8P6U5fQzKf5zWDauzZphWQMnm6Lg7dosAuVhgXdKa3ziJQspe5HX",
  "key2": "657X1Rd3L31np5PLuET4nRwJ2iHRGd1F18HWNj4n8W86sBVQNRfMinav55Gocw6C8gUuLi4xxR2WLJpVgf2UfgqD",
  "key3": "LWtHR7n7AnxgF4XFamTdLrZ6mB2Q5XfkPrCkEaVoVgLXwo11arUHuBxhJsAPMk5U1nNG4rVN4FbEs1jgvrMtdCK",
  "key4": "4oXHvznT2bxFcp3r6k7wArWV8b1VoJXCwGsVqY1VST7izvSsDDczJ1HVwrJxAyMqpxFuKXqtos1k3cJCPnQKg7Z2",
  "key5": "MUmzx6E5mZV8KKCahtZnCRJQhLEVGBfztcjsmgrwNpVWuc6CvecRhTnXPD8o9kBM7Jeii65eoLjgT8dPJ3Lb9Zh",
  "key6": "3NT78TioEEc9jRiX22WKFEELsGd7x9Uc3LmBiepE95nvNyLNzXdRpn8RgANzARSeCCa4MDLqJzTeo5YAMRxFVc8F",
  "key7": "5vWSA7NtLin15g8MsGT6dVrvCEqaJ6ZLPKNc9ezPr4w7hsypaddjdgJ6hqLSgL3N6CdSr8SXguujpHjVSFQr1CVt",
  "key8": "4Qso6DStZjEwUNKp9s3G9n9zosjPGDvG9f7Gz92ggkeEVyod9Ej2kaYGf18TbJB26QmkboCZmnLbPmnihx4hHda1",
  "key9": "5wkqkiU6EdHohAHrL7mxiUZQmoscJd8rAdPANiZDrdAZRRiDC6U1zpCdruGNdhUcjojFH4D2YnGKEffmnaUuTuSd",
  "key10": "3W1CNDc8wVAMWBMAu5ZRqGWV774LMun2aiaBfonaHDFEtwFqvCthWm7zPPoKBFvNNT5Gy9bnnhpdcuT6pnMcGebp",
  "key11": "61CpBhFQKJrrfRANrYixQURMBBPeGVsLMPfPkynEhFSr7iP463brJ1tuYsAzMYg8bvkKgyPKzeei15h4gUzqwQoM",
  "key12": "VCGfzkeipPPeivmcsA6yhzMJpXrULPJdkyuUEwHLrYrXfJoUZ3WvRv8jwC9LLdML1DseYJrvZvQP9urNSxZEdK6",
  "key13": "6EK8nmXze6EHGb2aNKTz27vvtYdwmaUzdVCsaAESEaPiu9gEHMbKWLgGHG3yTKFY2k639LbzZPWPu8m14a5wQRT",
  "key14": "558LfTcwRUKGQ88v3babbtTkAX2afgY66xynUA5EWmTYtm8m137eCuRtcvqa82bpKdtbyPFawU1PGqwXea2GDAaZ",
  "key15": "2UnQ2qQ5MvRBfpVEFphMsfpEQoT4QdjfC8NCsHZNo1JkZCJDc6FLtMgNw3bdrAjhrZYWLKsHpQKiPQcniYR37HXt",
  "key16": "bdo89jzo2FfKc94vex1iFLho1oFGhjTh6uC5A4wxDbwk3bugTYjYsvSqmGdmwU772VFuM62gYbgmKZ33zn3b7KG",
  "key17": "2LKuCLrmuwKHbaTHbYSTvociCEsLhBZKCfRj4onSQRzy1CE55NnEPRjpZuXn7tdtfj6Sn6pAxPgsffJUzT18tvrN",
  "key18": "3H7bWuDcwvCWK9x9tktcZvK3AJRtt4PMwkmcAQsuEq6MviA9DrF7GBsezKCCPiZx7wgUxC6vQymmxZuZottbNDiQ",
  "key19": "4hLWkL8WTe782txVX65xPWGUrcv85Ytr1rvNBubwqU7tWVvA5fmJtK8275zH13frVijFnfyE1ufFSf5cR3ZjNTqH",
  "key20": "4cWgaGtVkiYybRfXh1TT1mLMSCwpFKRagttK3rz4Bfj89YZfd4VcxWBMMvVrtZwkDZwMUXHiZ2UxF4JjYDsASYQN",
  "key21": "5KfL3YqJVVB1oY9M2k8Q9CJEj8MU5QmMM85NabsTMnB9ubQm3sAd5JtS7jhf7SU2qg21UpL2XfeNgiuvpM2SG5mg",
  "key22": "4HtCKuh6MC1WFnyukneEiSDmWrFuiUYG8r6vtMWJJ6LDGSkenmtPmUoLLMe6Yes2iBfXHwTvBkSgDtrLARtHuYBp",
  "key23": "61JkvATBtaSmkg9ArShA5k52dY6GUzrTAKbNS4rh2yp6rHfErZMbjTAwdyHc9bVNG6a346eEDPd8Mvs6X2jo9fHB",
  "key24": "5StuQDawCNEvkKVpYAE5hLDLQW5rFcBSvdYNjfsJkZr721sG933p7pkH2FEyi2vSo5WGa9YBuwSxHZKxbkPX8fGH",
  "key25": "2wLChvNL2zaf2xDkcwX7ki5Xup9yu9PHYQuwrtZN4knoRyhuB6c84whuufQtCnYq2tLTboCLHvkEAXbZ4SC7xZHs",
  "key26": "3VmWooAoekjjwaBLixmNXcJD9gEL2JyfNKC5pMqjMhDsdYvMHeLGknM1T1QTf1KSKS5gveKm1fPZQqkTCaHBojGc",
  "key27": "2jBcPEBadATeXqFKUMGFduviZ9w697ZkuBdZF2D34mPyhio7a9wE1ka2CaDRRwGJR3ASUvmV2pp9bpHtLqhji6SF",
  "key28": "47jCCN3yrJYFyKYdeAwRgXGHuxLXWy6YeN4YTMVnCPfWkmaFi99rHoPvYsZDQtJg4rXpPt6wfbFbw6Ub8nUdiyK4",
  "key29": "W5btyNMjeFB7kqixcDtwos7dvq1EmX6PweLpeVv5CaRjYSMfM6JsHgntXWmp94uFfyGg8WAFyXEVWPaowjmaqqs",
  "key30": "5EE2Rg9epe5XBdgQQbY6mRbBLja4zsAy4bHU5vKBimYMYDCviUKMyBu1ZmtSX99Pdmqfop7tr7vtXQaXxyRgYosR",
  "key31": "VaMEJ1atbfuNkwxexzELjvSD4qiABVdmjyu2J9Wyte5xeumYtjkCasaGVtr79rMRCB8fFARDSSMHnpqSRRQ2Fg8",
  "key32": "2sfQENsNUXvLybu5F4eUkLfh5L21Xba3ixh2kpUshxoGZxWEHX6WPYz2Ux6Tkt3J7n2smKog9xCASQsuKrLEsSst",
  "key33": "43bo38JfFFTfzPZfSTUCkHaHRT9fsd4iQPgcmAtWwzhLxCgkNmb8GcwjvioivcbzefuUbAGwomvqdjHoAMFy9pBR",
  "key34": "2TJqzejqM2QpBiXSJSZzwuJPgBspG4k3c7YDQyHKbxnHnSAzuhFKf6ihvve1kJcY6zKwBE2xHtQhgrnBvrZtcAt",
  "key35": "3dXJLcGu23482kDxbeynoqi6JBHBgk5fMbopoqJBoEmRBv1hzUAR24s3py4MraLgCrLKvzfsFpXHkPg4BJ99RtN9",
  "key36": "2YJsyAtGbkm6SjQzEGgBuP8fgXzs5ANTam4YBszewwMd7as24GDofQoapPjCPqqnP2nL7cG2dkispTSvtEQ4Y1tN",
  "key37": "4RcBXG46bDqvwoc1R7dnghYZygrpDQQVsdx9u6RZevgKYpyNcbVVUWuFbqqxBkexdHTVeRQLgiBFqepBX7xAKmAW",
  "key38": "3xCHAyEc4VfnSyrVkd2c3ggSn1UCdyJzmSw8UsT3zn7drzjJwAiTvV8NazUxUwQPEVX37wR4biywzwBYUnxrQDNA",
  "key39": "3uhWZiitwtEGdbtAzFQH1NmsjUQ9kBJnKWwCC3zHSH7x8pDsLixCrMXk79AHvq5yhgehCd5PGQ2hNigFkpZz7Ksu",
  "key40": "3yQMFvUTTSJDDcuwEgjXGmNsbteFRJVULsTWekMqdizCrUas9cNxf9anusPZbENYRFX3WTpguufPqV4cbwfvcxUp",
  "key41": "3ux8a7ZpkEhbuaBNqjZSLUCC8YkGmLNDwT8bAjonhMz7KtJVG4VuCb4CvfxYi3EWNsAE1mNrzWAmd4YURQf3KW9d",
  "key42": "HEhDz6tKqHLREnD29dvFjFFhJTUPCy5EJNRyfC1h8BTEnW6HguBW2e6jiTwnDuAszhUcFSZLsvZ62v9VjmaVGP8",
  "key43": "6BKX5NCy3Xz2ksnnNSMNpZA1YqJ1zioqb98tXGRcmPoeAyrkJtUfmnaWgSqvRwq2Ls9SKWKon28nU52QmwjBAQR"
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
