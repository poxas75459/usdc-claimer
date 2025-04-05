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
    "61K2feBiGApdrBFfkwJMJHWTLgZE887UtXf7Z9979dyPKMHsvp6SdQPLjPLUSRsTejQM7KYKvBapFrDKrWNsA2k7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xoLXQQ54QxUxsKDT4e4sw7rKhnD213SAUJ4dchpVshCLWq3pxkNeLxzGtaH4ejzjfJn8VXea2nX6GHszVwqrRft",
  "key1": "3hgMAaXCaJTn53KxZjEttWRLqmBxQnzPCEfDmPA3qLwvh8DdUB6HQo3zcxGSbKjfBuJPWe3k23KeMzmqofdKtpT9",
  "key2": "z5q1eLVVxc3ZbAihpgojuSS3NMzPssYobdhA8EXno24xanTUqkmXf6BAe2JPNiub3aQfUMESJSNrHwedGjsoXph",
  "key3": "3J7JoYe97y8Q1LW7SWqGK2jx6Fz612HVPeExnHf4Sk459eFkNJ3EZxjhU3Ar8eC2FgVq9fn5B6Rdbu5LPVFteHML",
  "key4": "3kDAdz943CV2seUBt1eTjDXCJXxtq88xxpoLyQNzaMBs634vAXpqNubLJVYvma4cWPtJg1zWrQK1xtKvAFG68mpj",
  "key5": "2MCjTLy5SoCW7vztFqSS2DaJ3XLHQAZGwPWZP2AH2fLJUDSFWJfR6VVj14FhhDq151v7ffV56BPHYUjEvc6FCCQZ",
  "key6": "2p9uogQjpDXRPVuoAjubcqtHMtgmmp31AeEsMzcReQPDcQSH5xKVX8Xx2DemesodvzxiciyxbRMsnznC2ZHFEygB",
  "key7": "hkRZXV85QCyVv6HPifL97bLVMLcCs38TLdQSH86YFZ7xqYpkuNEE4r1CmgyZnQcyiGKDtXFGCbsDQQyjmuxTkBy",
  "key8": "2uiAA5NfypJ1euUKtSs9cfrtsy21bSbWKguqBu1sf6AjS3K1Ab2KZAuCQS3cFyANbqshn4hERXvqx1t1ZVMPTs3v",
  "key9": "39gWK1Gp4xkncopvFT6L2k8Zo7FaqCg4S1n7s1z22KVcxaryxC8Xap55SHfvtXaN1N7QMFaV63vN4jeMpurW7jWM",
  "key10": "2TBKmQkEpbGjyKvnVDxgGzJKXEa7Y2STShexFcMyZzQzQUcsWmdiuiWmKMYv8ePXWVxmZ94sT8oYHsrQZQmf8zEY",
  "key11": "4U661a6cLi18GGVeuiupXv5sp7d5TQ5zqURbhn1Vi3nUybTWyvTAPPHiSW3nswHDJP6P91K29vL4ENDThFDgLKWy",
  "key12": "4Yvsx9CzPQEfUhxg68q7mFMV6xeZZCuh2JRdpFL4eAmHnoFRQAWuPpQ6bQntSH6u9g7bYn8rPMxHR44bnbCirPiw",
  "key13": "4gELx2Fw3V3hXmYwmzsNEKyNNdZjZkC7mPRL3qAMBMoQLKgFbhuoAMSyuCMWQPJAHw7rJtQJUjhRm5RNMmQdkMsM",
  "key14": "4RhU1DqgcQHRf9JZv3heUtx8ThxzWEDFeCdoHpup3zRd4YndnjrE7RkN1mroY5gKpKRxbk37ab4JMiD7BsxVGG7u",
  "key15": "5jTQ5cMABykLQw2JDwj6zCcR1paKQqB3BfbboFzFLQ4AUcbmt3g2usNyrAkzfHfPA4yHTQZYnRd4TrCeQrckpuV5",
  "key16": "4UU8eHee5PJxLZZCcX674yDjVsE9t9ciwB2mZ5QnVzUhGFfMUdMfnrmSmJhSSv2gqUZ3GtQFEhdwUAJriAGiY3v2",
  "key17": "3gPshRaHtSds9w2VAr2hp4Awsb9z3JqGKCoiWthrzrNtqs3TLY9w91qeUJwQREiBbDwUcG6nnFJd5xTh6cfWC2LN",
  "key18": "2VDmDeHWKo6gRUzE2KjnDvYaZU5cPFBCenKhJhuWtdRUeBBcwTHuc1UHL4ce1ayxRwUthA3NbZAuN7TcyUpb1ZJ8",
  "key19": "57wJS92TaxNQ8ZaMRbMnCeK6sqv7VEDPT2kkdu9w8ANxiXweB5JDxq2xei5p4hNtaj7MRnRAXXH2MCkDiMZyPLhz",
  "key20": "4ThtcjCMQVZbD62hNjVzUBhCvCi7o9VMdoaH2z3kZyv92QbcQLnaDiy2jCzcLRm36LkZoVG4rUgo5CRoct5TRPai",
  "key21": "2oXCwe3g9fn3hkXSE6k39UqMFFuLquUBscoyQjxoVuGAYHdqg1mRn1yBQ3bQ57TuuKZY3aXsrPngRLr4YuzKrQ3q",
  "key22": "orwsmRPvLA3GX2QT4UyRRWfJ7wDCXT5cebGgjZvh37VHg2QWmvr95s7i2uXwwpd9MZmYnNu1KWHhF18ugaHsSKP",
  "key23": "3wS37FQH26Qc2ZMDCokTxT3HTGCbgp84fSpZuc82wDntP9QjowbJ7egDMQMxhPtWJCBMzY6gz7UiDviSHibHYjB9",
  "key24": "4YC3DvRxmoUNUspcTAUmKDKZPr9CAA67P2Towk3aT1sCxdnHMSuChSrf4rbsKf3wp8NXsDkwM5pVpvPJomXNFKM3",
  "key25": "rzEFEL5nCHKui2Q1UCvYDGQR7QmdJJUjXorwgVa6rjX7RRJxnjmDm8C4iixusVyXG37iYZ7FwHibqWnKbuN9f7B",
  "key26": "SJbzNjwffyg1xNmzCX8u8mffbbQAApZpx7mN6WDEkwDEG1XaF3C3wTktW1TMc9zkXvn8vLyzT71QA85xGtZrL5H",
  "key27": "4adV61nUByLbrNTTKNuMjNN7yyw4eCruKANuHrmaT6psgpM7fVWMYL9MmXv4TfN9jGXYQUeg3uafGzBf9W3skzxv",
  "key28": "4YqCXQoy4iisJqKwmzJvKEJL8hs5bsZeM6CuBkYVCvxEC5u5Dkddn8i58bpNLngQKuuGeiMBADAP7d87hikZxD4a",
  "key29": "3NywDJ3P3Wph5cucUU7suCeUm8jSDExprssMZxcPXXBbcugNGr3Jpqb98Wbnw5KdQCZZMcC9YxQJMQfE6u1p3h9Z",
  "key30": "4MK59u2CuHPk7otwrFmhFoeqqLFFRibFkHLz7vvFzM8ARA4QMkSV55WArXfdw4RSZS6T7bVtU2U12tt3Hyb2JPBv",
  "key31": "4ugLJjnX9idxekbMDe43Z3gbTa2bGjmedj4xFBJgwmrSNpBacWonpRREXJuZhjheM2g7G8UuEdCz6oGV9JrndEW6",
  "key32": "jBMLUHt2XfGEFB69V6fotvpHZM95mJ3AtAvXxiKQG2enJ7Gb2E1GUsmhUGSKM9ApzyRFz6dVYAQTxaPdHhA6FDv",
  "key33": "2r55Qw6fb9T7s2PAW7Q499mtoSZeYLsGCBwv3jWjTEouNkXYj4T6pMZF7X4KGRsBgLpUye8LXbhVgYNnmWxVoJ7Y",
  "key34": "5sAMzswA2CsAFZoZ3baifqgGLkMHAA7M8eZtPpmeKuiWJRfC5FMhcAzFZ82Qu9jMTimMsz3tAY8DeA2te6MFeuQ6",
  "key35": "3owTJ6ky8yyDR7JaRbEkDGSojGRBp9c97EN8L6k1HVCg6WbzZQGKbNoVztkxFpuS4uRVMebW3KxFA4eAFfwa6vhC",
  "key36": "2T2fa6aPyXKS8jhTqV8DwCNd1492JUNZVv1k4fbyJhr1A5oDozEKYqWU65ZXdbVKr9DhDuSm47BiPFfS53sUzvaD",
  "key37": "6ZzKjawbQRLuRvtaBDmX1BSBhYnzTNMfz69KH4mLMfpGyCBbnYasapSz51NSKgnBkCJoBaEMVXsvF221Zm3JeiY",
  "key38": "4QAJ4MGY3nx17SSuEUVyaVxrSpr9pFfDpnSiktmEACV5uVi1yeDgNTownoKrPcbiof9ddLcgdnSwsQkXVr8J4ktt",
  "key39": "5ZRQdSrGH2LB7nHKDn2uwFmeKApqTM3DTBgK8dTgaJBs1zQjg19oa1BjMXZKfUe3z21GwGmaZ8oerB5aQFzTsKSj",
  "key40": "5E7MsLb7r4AHkymSH3r3hNbxUsiVR4fLtNEqAZfhsnFW74Ct9S1u1JHzHKcMbTMccUEV3kpXHkULXgc17bsHW9QU",
  "key41": "3FSAYkx8PredpPVY2GK1v717cxnbJf7yKPAe27yT5hG3BfPR6hnsRiJDM6UgCeY8522N94wckQ7VioDnr4sLAGRJ"
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
