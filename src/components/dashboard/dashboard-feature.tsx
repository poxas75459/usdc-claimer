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
    "E6dLnMJ3AmBagxcw1pK16T5QPeeowJy1UtUNfBDmvsMyMpe1fe2D7tJaBvCaBsn2nj4Ytqxa7iybAzMAAiLBaWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xnipaf991BUQALPbgmShnchTV8tynGjeVcacrjPpzqgGYGToE2bgiShxiHp7vC1QnosNnUdasdQ2o1oNmMdF2e8",
  "key1": "46nyUVFgZyiZsEqX46Ts2qc6rKsPQK3ttGtoELiFZVXRdV3bf3mnYndSNHXSS1EdCegQwB6RfimksAeZT6NvuKV6",
  "key2": "2dFyKAkpRcNhk4wYSTeYGWFRvRnZJjh5GNPHhi4uL3icjQbtM3aX4DekY5oaA3HZ1Kack433p7t2AFocC9SEiiih",
  "key3": "oYyz5ZaZEM24jfKfXBbxnbtbJFSu75g8HrXgPTKPSsP98qj3DjPncbw75fNLgDMSCc3s1REHFFo6gHuR4TrFeyZ",
  "key4": "3G7DvPqocAaadzjfvne6Zokw7jHhbDtQt29p7SLjruNvkDhcQ9vvj8tFs7fahUWmGxBsSd39M9JG5jTUQuF21cFA",
  "key5": "2Sa3HjB1cGRL2XsbxBuBer9uGbW3fsLgH9EBR5Rd16wL2BMfWZPNfqjzrtZ7VxRoc7stmZi776U8CK2NeZUpNQdX",
  "key6": "mw2zS95JiZ1TzyM6ziDLwXDXzxSQRVcnMvP2F2SQUDXkDT247cYRkue6mETDagYNvpkiWL7BZk3hVpUqGdYCwWt",
  "key7": "2HfH9UKNJfj3fV9VVhkVGpaoobQWDVA9cWoxuN3UNATnUg8j1hu8hh9j45i1MD8UUamvtQtvaDfUhtfCGaijAXWB",
  "key8": "5HR13u5o1vm8yuFHJWjdyE2u9tkn3UtMobb7zRkxS86kTCLwcau9c5kRXmZFLNkasjZdHtT8LMJc4y7YELuoyvJn",
  "key9": "4ozg6rbZeTHKJSPNP83XCdmKQWpUBTPi9RDhJWL3U8Y2LMu3Nk3nMjd95Rp2vRmk3yMMu1dDK633NBN4xYxm6bhH",
  "key10": "gL9DEUKD5bKqvQhudeiKG2gPnQdP3nS83wxLtt8pdMWkrrEgppnmWkb6JbYw2aSBtS184x2vLUF1iYPJknxK1By",
  "key11": "2z8f4DQYvznkfJyAqXEE7RDjMwfnrM6mqPDm4d8ZNNSfDpX9b3v3FzhrzpVTfTLefFiEWz2v6imGXfS7TBCbDfrm",
  "key12": "4PbmHpbJHwngggpQNRMbWZ4y6Bwynyv8HoTSgEbpvMCeVRmipyYttSm1WQjRXjeHECr6Bey2UW44gJx4jQsG12mF",
  "key13": "skadXzAXd8SbRCGb8ayjbsLjrJRSDR6WXBaCvsrNSurtk52QMqXyWMb62HbLXubPUdLaWWyegxtG4LGyhDHjdLU",
  "key14": "4smc6rhaAoLsf1Kn4PwdTmAuAQfCeYsE1dQ5MGa73Q9LD1byNCTAXSNx1t41tXKeqU4xnacRCeMsi3a1zmhH8BbE",
  "key15": "L1MMuRMMXT1MHtrSAg6RTBkzp7bHfLgxxxK8hDNTuviqZAgXURxTmkQuGe7GigUAGYm9bBeGnA5otWDU4xY2n7w",
  "key16": "46Eqk5T6dahczH2Cdt2Hg684kWQnMdLJ45ZvC5TMq1HB7AnME8XpNxmmR2bPYWHTvW968ivESewi2KRBaaH6EJ7P",
  "key17": "j4aderkatA5nQF248Wai1xuRLfUswNG69cRWVDLcwyFaiS8zTSmNrAZGN87DqAH3afTPS6iqU9Su24ZQ6UHtXhE",
  "key18": "UNdxYBzPK5NLPvgxg4e2EPQG7SEu5ybmaUdE4N8NcEfJaxss43jW8mP3MUUd5oT6bzCRy1LVHmvj9iTL7A8cuez",
  "key19": "2cmJaD6seKx6hHxWeWqe6FxLaCqAdmy4XtN8ZYib88xDquaZajmT8zzaKAbALrusbfUDXK3RssvzYxzEnYRSyjh2",
  "key20": "4fHhTuh5t2FqvMyvTLjnTbkes5beUsL1rTazbrUEYAoNhTjRn5oBdwGc3PmvLMThfHDdWyPspGd2HJkiQ9atEPQn",
  "key21": "4mzM7JBYyCEPiewxPaqET9qp8XiaXFmtLLMCENtaZvkSFp9cycGrN8cy3mA1XJF2n1q8u5HFym8o6jUByYycsgVa",
  "key22": "3AVRcf4Bjv3RXaYE91davJQgccAPveD8u16jb1HKYYddbvg1yeuUkDJxdVuDPwqFt73dqz1mf3ME3wut8B6PrDR9",
  "key23": "37WYz9VXFj7dWsQTEm4xJSpQefSTFsWfZpdEhC4M3ysymFz2asEjLSyU9YrXNAGqp9ceEYnSg3Htzw3PdNbN3WZN",
  "key24": "3ntqB7bE3PDAhpHQWXLEEAwGpFzAHYXHEzMYLiVQKHczBZudTEJbihynCQtrbFpEXamPMYo14nPY1RZxj3JZ8pe8",
  "key25": "2DvN4hRNBDANJwW4X8sYxDDex33qnbqRgYdKvqU5NaFiCQL3ekiJpYCM2vGqDRiDRBgHXfNwfXPcLv2jojMUuB9Q",
  "key26": "3jdVzMxtpt95GYydifZn3PNmCFLwYMXUxtj94FyXKxMhFWt6hbyrjiei2d2CJ9asKjZ8MXdukJPky1LgTPbsa6NM",
  "key27": "8s54ewGS3ayQq4rGcNV4cN5PZ1k5tcishzPMB9HFH54yLyw4tmTmYSQaeX3ttiVbnDVkrJ9GQYqQAqhX1X5LHvt",
  "key28": "2X7MXwuAbFtcJtmxx4Xpt1yqBmgQ3rtXi9ikGL54BsHNqeun7NirhoWxN6PYXtFiWaqxnLdGM2VMxxEKQ3bQrvma",
  "key29": "2pNih5rsSAFjTvb8XHRbichLWaQC4wEFUFTEqh6LCR6eXJgrxuFp9tuCPxHd6tdMZVFor8746VAmMXhiGT1b8t5N",
  "key30": "4T5pfyGKSHK766nFHeyK1jY83gtXi3pE7vx3kP2QH5NzRbgg1Aate6QkvhWj1mAYuYFXJPnz1WxJe3zaLcPFPFr8",
  "key31": "4JXeLzjPdzCbeNoVtTBZmGY7hvaKEkYsCCzLZbHFqXqNn42NJuFNBk25KoC7qrYzDFRWMFnfvqkgKfddyQtS6Y7g",
  "key32": "GEcQcEt31vMRMrB8tZ4HxabzxjaBVxdbNqwRN633uwKMkFquWe6BYwwNckN5ec51tYWDL6CPdhdKc3jxeXSuMYX",
  "key33": "3Sdz1B3uqmXh2rRkwMVKK8kqrphJMbUD8jHEKjK1WtoAUqDFcnzgDdknrHjHyTG9RCVREWJq4nZMuvxrkc31c2MX",
  "key34": "4LrnPQaMNh4KAgM4oV8BZsrTwsuUM3zy3CJ2KCmXU3XKXBQ2aQdypqHn89w4yXoRrvW3GUZc2yAdvNqtTiFb6K2o",
  "key35": "4ArMqjJo18JMPXu4SLZWuTuV91eE9XuZKAUtnsonsmxfrMRtKLAnCYkXn38cmWeCvNyHAcQTKjPCP7nqjtZXQbjH"
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
