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
    "34DNUU9vMPHLRkbaWBC5534a7ysEWYU24WA6rwjYDA9bi9QWDtLf12GZSYQtVe2fhRjYUGTS43UNNyRw47JPvd7s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YUozQGcg4VUfYvokrfChYT94T22BSYZenZ6Z4Zp3w6dijAeuZ7aZVnsHowaag9zaJCxrSqCSDRnwHPV1ZP2uePp",
  "key1": "w3bAt1t2rs4g5GTrcx5Yc2ZYsNmiTKCT68qcJs6ntCMZg2SKTqbD7RBZFkEXaEQSdVGS2cG8BcvGmwQW852thR3",
  "key2": "FFZJfhb1M6FH85hCYWLe6X1vVh5cULFer6FgW3QTMGz2LT8Pwnrfeymuy7WMcPW5QZPDpgFKnTAiQqGz8RPHajn",
  "key3": "5oMLV6iCifZuYu6kF2nBsDQ4CFFi9P5MqspB2VqibeJkN3t6kmbtvqHuVNYHBndFPhY8Z15VedSYozRAv92XCBci",
  "key4": "5bM75SkqsMctGg8HtjAY4gZgg3ky6UcpAu6xB6iXruNr8aHgZLz7j9QYkfxkkanoVYHMRBTa3RAJFHdBMsESqdEN",
  "key5": "XYTuU28tHVomXhCK5Gz3txBqZ1yC4CkH18LvqrPydNyAaAr3vbhMnk8uhT3mnN6Mbpiq6DEC91Cq8Q4EpWeXdLf",
  "key6": "4GVbPrqTGCgF5i1UVmeRCXX3mEgism2GpGDR91BoqUXTVXjQRb9i8uu9w11vFBYdGakuy2zmCg5Db9rXiEqwW1Xz",
  "key7": "4jizR8m2qhkmJhk4nf6phYiKnpdAuKrKpXUtKPMLKSc7idaNCaPJft64hNit4TvgxYDKbUGL5n3hxp85DBFE7vVJ",
  "key8": "3gY8s9SfdS8THoQxnXrPG71Jjv1z8G3pwkRZsVnsLe2fFgQxqd4nZMtEGJEZsBN4ndKwzfacWSW4ckKBLjMzrwc6",
  "key9": "49cjErf6rQtpTZyZm7PvNZxRbgZKZudj2AZmi2yArv2fZ34sr5JUNnGPPc4mMXNKASZRWCsx9Hj53h798KSBKiQG",
  "key10": "R2EciXCEaEFfbu4um99NFWLN63paxQjGJ1gBhWPhwywNRTRiqr9KWC3NnEpVVDPARQh22cfAthVc8FqHm7Y3XaT",
  "key11": "4i28oMPkk71K9AyY4QudtuPabpYRBLm7WuvPMxHjYdABJzDjuTUAnqhrCaCiF2ivvDnBHKLhKrzD99FnszWTArLr",
  "key12": "5cihewhK895XVJuvihWTWHubdUBhQE91v61PnCAyTGzQogyHZuq6A4w6rpMJiqmfpkMDqRgLbMJUWJp3h5SUH44g",
  "key13": "5skSr2qoYa9kNMpKcGSvkWNPEPszTzRLiCcMm1jq1tuzoPVVZwf6qWQHLeAPhToDTMds96Tvm4Z8hAQkeFXyWXQE",
  "key14": "3pD5wFXHbmLgBo1YadiUWD6fKQigxrsWxyJdjWkPqw9ASueyPCHhZQGgg4gsMFhT1Pnr16mRNpgaJVvrNssm74G6",
  "key15": "4d2fWvTaCasEzCHVWMFh5J53r1NqqUkijg3fiKB56VXrfzEwjGyJs935r4TrZkYqmA7CLbC6UnqnZbzYpdL84riy",
  "key16": "vguLmDadLw7hLHKxUXVustzZqEwVAWWdUNJAjYZFzmzM6KunWzTtftUcH8KRD4eSWpHYPTC57fQZ7LJntLvdRqu",
  "key17": "5Jtq3uxSfYB8gJgbhAJoAc9L4bRWHJTy9kVtNZCxYMvyDSy2dUyMDMm8GzGwVH8X6dFQFGbTBLo7zfLs4jeSTUoV",
  "key18": "Nw6MB36hDgQFmQs6NCTEhd1G4e3KES9mT4fgtXdnMjoHftvo6dktrtyQ111NMjZwLsocV64dQy4B4TTwruAC3f3",
  "key19": "3Nqyp1LFDFmdM7HgpYi5GnAG8RZfiL6jgaPrVC9VCxQAyiQSmTVAjcgNCvi76dzyvcDLpfGdHUXZMpfNTYNDvTVo",
  "key20": "NKehLMVEYekXfYqZrvMoSVMfTDqymjCJvBG2QGS5QXXJzcCnhWqmpGbGrHuUPbMNQ7Y6JTcJhKDjLM8Rqy7rJ25",
  "key21": "2zibEkkspoMhVNRWPykj6muU7BUVrArpgiBjSGrV86hT7dqD5SQAtHnL8hfMjcyTUEibGquDJ1FzwkdkAj28T6wY",
  "key22": "5xQ8TtaHgotoWX4h1LjB1RcJRyyiAu1CTufSApUvNEYsFfJZ2wK8dwwVaVXRWyHxjFGNgXZmeDFfykRFDQCdsDAB",
  "key23": "2rqySZ1jtDSmGTsvhoGdCDPdpyy8xEapi1cpe4TZSDGqXXVnTmjJdRsmKEYJXscbEbH3b7qniiUjD8b2T2RcRuq9",
  "key24": "3da9FKdQB9A2hBRCtjbVNPYaFmF1Jny4RpQjmqDqQnAZorFLiv9Sd7m3xHSVjMh1QYBoFaVeLebKyDLyawRPo1dW",
  "key25": "2dpE5J6BhAtDkzqdwAjxMUhHXUCqoQMmDe2TmZsTAVAAQDVsN9yaZSj8dcW4rnV3dJ9tZxKKvgnhtfK5KYg2cyiE",
  "key26": "2pPfemC7giWPMdKbs8kMKHxpyWm37bnTt5P21NEzEbG81cxivVv6DU5dgqigHfXG25g9ZKG7cJHCSTB6JEYnQtMV",
  "key27": "5cF7n476KW2qGkpyn9pFZezXpB6sy84fz6cRmDQ6LsFwGSeDtEx2A1PbxsuVtMM1GZJFX8fTZu5U8TXxSre4ZxGp",
  "key28": "54WHovX7HffjX8tFiGGVwNwaHD2ya2TFa3T8TrScQrcucVxoNet5r946y5ofNr8CVcMuiCej2ezjeFartB6k9d5N",
  "key29": "2tSBGj3HQ1iYo2fpRtQrqFN1fN9aCLrJk3s9j8WF7CUGwJPvLqEKwbiAhwbAXEQMQRATyPnZmwHUKxHY82N3PZrb",
  "key30": "5uNqUoxDi2prow5nb78KgxigYXfJUNWvprd5HDtG19HggNBUKUu1VARfmHLst6uX5QtmUMkNY4jZEbtNq1ZsyfoP",
  "key31": "4W3FEPqtL67E2ZrchNN6r3YEK3nLjnPxU9XjSStd4mRfpBLuZigUAHoDMwuxjuBt589trKvWNMHg5bGCK87sdyR5",
  "key32": "2qpFygwwDmWiZL8tNozdquxSVG8iFrvDhmogrBpjvVtVnYhf7brgoBXfwmfRNvXR7j34KtBphqLbGxUyPbmzXsR4",
  "key33": "2rQQBrevN4VUQPPgojvGLPwTXTi6wNbr7pUbctMvPSH1TZFJRko3WsDVTdwyZSiUZceVVhmMgvRiakHbqtCMX9h",
  "key34": "4At9ieZrtVHXzWY9gXFGXUY83qApzWD8ru7r6shQg5YgtLzWaYFbghY1frSK6N1mqBrf7qQY1UPFVw8W5ncdWY3i",
  "key35": "3GnznRarLxSG49hxiVAfPPG793koUcPmBUnKDajqypbnXcmxuyJU1a2s2sk7eDs4i2LSMSZzZB9moTZVTxTgNBs8",
  "key36": "49AmFVe41E2gJQFv1MbcY4unCYjEfETjKC63pqND97vQPDHj6ihyvBCZwix6isgdJdpuAaqXk3vWeRpwTdWVRxFm",
  "key37": "5vZGGf6d67MsQz3uFgpfzNygbB3HhTL2eLB5r7MUGfFzHNdf81EHQgcoqES3AcJaLAeWx52sppPS3vAoumpYbAr8",
  "key38": "4njuDxE5WDWHMzjMBWh1kCYoaBairu3LL7HVVq1HDBz6bWAKUSGUJ4edHA6fpReSVWWCkAfCK5YMo1VGnza4Hqfx",
  "key39": "3M1c4P1qQvwqtT1Y96igcXjwQHo8zaRk8eZMm9jMMAkkXgYLMX7kvKjEbSpx9EBAkfs2nEmvgHa4bq3CtmsxAS4s",
  "key40": "3i3VesdbSUZfFVf5XCfdXWMu7vi6nncYS2SjcsnBMtSAk2JQB7Trb8mUtW2DT8MUFBcRH3EzqfdJNZPAfHeSiW3K",
  "key41": "4iSGowheyD6nT9kT8Sq3r8pTH3W86qzmHR4FMgzjSVTUnEJCqnX9cBXE3ErBMC81DbpEozGHJf3b1PVfWbiAPkxi",
  "key42": "7ffvvs7npRx8V2CBtDhXhzm41k5LQJhN3oKBXiDKDbANEZ1qaAukNBpb2nypZkPnRdP81AtaR6TL24zN8S16atZ",
  "key43": "H7dcwhoPsJNiBCPW4ofLiJvZtEZY1rfbBzBaAUoc15E1P2U8HBQZ2Aw8LfMUu7nixR4y7QDcGYRrZn6goZLLZU6"
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
