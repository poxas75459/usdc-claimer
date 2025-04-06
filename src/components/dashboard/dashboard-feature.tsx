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
    "2VBE331bPBhffsQhJ72VaRfufYaWBBVMbLRtodoZTqaHF89TxAupv1W1iPnyqNaRbVHDMWksZQRbgBYiyHRbuVgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fcujfRS3QTJqAWhhmvnseYP2p6CYDvYV7FT8iaFFgPgaa6TX1c6Di7bn6RAowqK3tcuw8EM4oTbG2MyWDzVPfyi",
  "key1": "3cuDeoidnLXd3t8id9hFFv5i3VvpmrVJCP9T4QDaPZQmP3ftgavzqmHvoWAJcmTZ3aY7hRxK3P89xjiNPCQWsQYk",
  "key2": "3EsDL9qBwNGnVw8XuQ9LbHwhPWwkZTJKxpm4peEqLhszUMtYxrhfhXg25peZGHk3k7ycpJesp6C2iXiZXzTvQqgh",
  "key3": "6516yqR76KnWbDFepZsyEEaQmAUm6sXZduygq1pevADMHPXUXdMQdNL6gczKkNi8X3mmuF5jFrgpq9wXdEUfZ6q",
  "key4": "4HnRipA4WppA1DTCzbJs6pNkUqjES2uH4u35pjCt439Fq79jMPZx7UMWPPxPNyU52niCRtqwVDsUefbo5ddJWFYX",
  "key5": "5xWjnxNo3NtcMUx5UuzBKa1UNFEejkqiXF6B7Ue9xPLZTe9k85AMVnuiEqQtG72cQFamm5NaG5p1qmYLXsRTnnm1",
  "key6": "52CxhZUYKVFnxxs1vAUFNstqcc7u8hnztPwcWqVNxqpkmQNYWaf2x3kbMEaPs9kn8zcdv7i1Z4VnbXsJroDxLr5W",
  "key7": "5RMDMt7JD4QRA9hPVPiqh97cQyrrjZQDYUHjNGFVbHtP6ZQ9k1cAL2yFLQpMGehUNqwZfuoha64EJN2WChD1vLnG",
  "key8": "4npEDZ6cnfKsaVie9ZRb7rCWUCfq4SsWeWkUe5WD88aCCx4LJSDySh2BAoqmU1NfrRhyX1inXUma62wve7ZX9etR",
  "key9": "39G2pDEXPQV1ehxTnaJF9Uhsh1RGGiBG1M5rkEZgfbwreymiCeMsx6zxMNyaQBpPDK4MHbjMCyyL33qPtj5RJFa9",
  "key10": "5Fv7mXdMzMZqujg4TgMGMoaLpxAttfrj4MUEpQWmq3pFcMo3rNYQ82VjCpDhu4ugMRncrebfVaadwy6VPFiMKdYU",
  "key11": "4oJrKzZr2hapfNhcvMDik3znbNPDrG3N3eJn9U6riSKF8fBvuxWAxEbqdTc2uBhcJ2KmUtTA7rnFC5SBxA8Jt7iP",
  "key12": "4gVuPSTwaGSNi7iQfqS2g56zza6B3bw9WjT4kgRAE8U5NHM3s6Ywe3riMvNz88ye2uxf8D2cfjxutpK6Sg92hTGL",
  "key13": "28L2YQtwBCkZjsaEg7nNuo1xTDXZFTSd9ocidQforzw11MpJe1tL7TK9ni6NqWRCJA8xa7s8ve8eyG5ak3qCyLNh",
  "key14": "XYuuLwEQeCE51RQt8VnVsz7r8FXvXz6rvSgeN6QD9wnZaeNypZ4tG77ZgSgxbcAKNphs8bTtDoMJwXvwAHYhq7S",
  "key15": "JbrQqvoY71pqfeA1WXJmRoyEDcVT1YSYqiY3TDgH43aKRprgtp4ey5z6yakFEcGSNnzYhXJzi4AiNorD4Tcyqzy",
  "key16": "3X2FyfMSorJNv4pgyFH7oAhU9HPkufsYW6YBqTQpbZDW3sdgDHAaQMzjBVmJncY7Auy74MaMo4bQEAGcimEgyzFd",
  "key17": "2ZCWJ4mJE42Ze1eJzCQbQ5JbaTrSLhAbcYNRBnwFhrAjHArHmrvEGm6amoZdUi98BWwsmFecw12C4qNiU5vU28Jq",
  "key18": "2MRnM1FmbfYqcjKD9PbtphDKiGbFDTZKtHAyM4PW8cv3Na1K7FuzkWj5txjVHE4FkZ4p8uxEjdKsH9mim9NuHULc",
  "key19": "46eB7BmLrLMR5gnNvMxc1YLKVCkRqnbySutkpUddSRYCQzTXRuKXN8j6Umnj8SVGfJMC2pC4fv73wVADKi185V1T",
  "key20": "4fjBa1WqDiXSo7s1EWpAjxWa7U5R3vd67kdEG5JYmQcJseXmy2tJBBH8HXf3ntagUDBzjgZGHKSKffmZ2QdbVNvf",
  "key21": "21bVWtPYfZ5XcyyNtWebsxi7A4vERdSm99Ev9qAkyMyutibpsvQTSGvaWTCJop9LAoQwKtEQvss22ymnUt1F16Uf",
  "key22": "2nS4KykXxzkfgiQh7KFnf64Af9oZxh9dAuz9eMxkea5hYVFbAVeAWi7kMjRBW9s6dQVK4gCa7LcFutUJDPHzNnbd",
  "key23": "24BRKodSsCE9tcHCkbDRkexiWMLtzkSFTSstVAMLM2VQh9y73VVX92uowFgK8r5i5SNxJn9zuP8tQXtGcaosLJJF",
  "key24": "3HDtAox2xn9XJbtUkuTZBNSghx5dmQAGd3fttiX2sVNz9v3fqeuvRaemakCGdrMJZbqCaLVMx6u3vSeoj2eLo7bq",
  "key25": "58XTSBpKsMK1nX35h79Qfey2CQXb8Ek4d2Jyd9yV2Lho3YXtTuRhWa4tyzwfgwKEEgUN83DUFj41o78ofJXnMUMb",
  "key26": "22y82uDtNAnUigiQANGWCpQtudKVvXggvc64R7BBym1sZBZMsJs4ZnsNapwT487X4zbjQYgXFQhuAhhor9Z5nYf5",
  "key27": "2mHAHJWDEgJzPsUm5pnLp22AHkGfrgEERXBhrWyZBsnvGgEUr9tsQqsaEaAJvvXwFhzhHgEpzsuA5YhHcnrJeoA",
  "key28": "pmGJNobzAwSYigzdHNvmjMSNyHTKv5Cy4tQzFraHrzNprY3B8SwuUVu1vt4stJaeS7tkc5XTLJuGavRkA7yYp6J",
  "key29": "59PpiTRPy4fKXH1zF3bLBNv77PLY7fxmANzqn32t1VCPdsiNkHjDXkdfEpWs4RRgtbT2C9TEL62CdRnHwEEvtjPA",
  "key30": "5rUHRs6cKJzWLs4nFuB4qTeVwVHqopqWrUzgtGtVUY93gvpo1o8Wnjpm9JqJBXZhyBthWmCpLJeXthrKW9SGeXne",
  "key31": "4zYGhTG5HwDFFRuFcA4u82o8PhakZsy439BFq2p1ptwLTXUY1N16PEyM27btFevavjZPBAcxzEjRiCBAwH2oTHdH",
  "key32": "4mEEQX9WqdhWzhXwBy6aRA9APj4aEcvwtyowy2ugcdXyMu3qb9QnBL8qqgabHi2cUrDhWfEMTHiDvQ267PD5eCxb",
  "key33": "4D1iZhppPhJxZ8zXmNM82DddLXZG1w2zpnfc1xVbXcSpzNBGaD9E4PtpUBwzvcNRWukdtCAMiHKe1d34SCfuXBfb",
  "key34": "QRuY7ac6dJDENLaDmnjy9m6vXtRXHWvMpEYPptFJBP5UTJCoDndaqSyvw7jNrNsQhMRGqQW4w6zNUPbTr7WyocG",
  "key35": "3gjPYQfe5rMvYvrJDnP25AHq4eFeS87m913EuSDUb2mkr9jZVt3RH48Fjxz4syTErFMNviTkAbA4P4dV5VezKbip",
  "key36": "2Qx8TUshRjDCSpcx7zJ5eSe6EPfLouB7wvfeVQhuLME4k6uCeeFF8Li6dGe4jpVmJkhHbFmwGMgsUX2wcf9g83DQ",
  "key37": "g9SSv4VR5hX3AahpN5mefjLfbxv1sU4qE8oAtvm1enGyeexBzxEggNaQPuuPZmAP8ur7hLLu6SqbyjK9rYA6e5p",
  "key38": "WPQGFSqTLuLG8mp5Ar9otdRSxu7RqUseZJje7F2x3oRBcxdTd9RdqyQsMKAwEqRXc6tDFatoaEDzeZMTfYfdr9y",
  "key39": "52C8jMRPb5XGZBQin7fha862KDAZXnYiUGqWLNBerhSHmRBz1xcAufF1SFfjzdeZQ3miqYvX1EiaHx8XeMmv7LMG",
  "key40": "4hDKe7ahsS1KozMJcSsP3tg4ZKQbq2ckQTT2qAPqPWAvdV3vGKHdhmWjbPqSoPX8LMH2QV5PjAuLQRiBCjX6pvYV",
  "key41": "CcMXmNv3WUyMxZjXik3e4NpgE8aTWeMWzKeZR94nRhMFdmZHPGqvdTRkHLXUTaBT5GFYSB1VpJw4o9UTQJ5Euj7"
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
