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
    "2EoDtTFPvqRvxf3CCcAg9W8eiiQgsYAhohRu5GGfprbr4ht9LGgMZadqvtE557CESaQxjxdaq6Gj47yNuDYbbmE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kDctAEddcotyHPNRVgsoNSrHUBacGHfVAbtzDeGNGp2VwzWiVK9Lui7CiTwEX3ec5ueg3Mk8Cnc6NP1CTP77YmF",
  "key1": "5h27Tx6oxeGURTXgT49AstPM6jjWfEj1bKP9hAF511aJnDSU6CdRkm1537NHjV5R9yLyitMzdYNocfC1Hy5hs369",
  "key2": "AKdBSbvkPnjNugboAH1P3xc72HD3q8RRnvg3itrFPWTzQXmLEjnZG5BSyKn7kTCVktNAi23dBNbyo4eW87tACKm",
  "key3": "5drxA7GfeEkHfY2v4WbckMLf2iXjVCUwnGomHcQdWsTWXJKyGnCXEosdHN7Qm34z5hbMRmCRtj6qfbDm9dZQuiwL",
  "key4": "3p56bxgaKwndEMNaFAf5e6smfHdSxYubbDGtcBLBBkcWG71U6B9VNbUjHGbbmEDS87h11xhmHNMgNxFg86cJk6gF",
  "key5": "NjCqMKz8GEoQ2KCYi73DFWwf7RsSsFbwL9jZELGBf6AdDvx3DFWoJtFLLNuM5ef2b3rAVwvvAYQsu28VcpwtXiG",
  "key6": "ZPqg8MHx6bbEPpFUJAH8HRzZs1VZeG2yAkiGT8URjmQtaRmbod2csJ3sc4HwcX4zUFCajMx9GMVpQFrAc6pdFuq",
  "key7": "47wQj9bGAK5jGzhAj5Eqi7gPzip1s9x2WR5ceH7Xdbs1eekgshz4qEdetRjCwomJawGR7cWECZzY5H46NTET7Qoz",
  "key8": "Ci88eR4MbsERGQM4gt4MHgv6gbYxGidZQPAQhfcBjEdw7kyd8RMZuiSbSqwQSyG9AbkcintkoQH3beSwqgft7no",
  "key9": "R2nSgFSa2zD9uwpYddJQdbYeAwHkYbwN5scfT51SmaXc17mog3vyVgnefiRbjdP3SYQXYm46BURQzBjgHEjHMjz",
  "key10": "QrWrmaXzLrQRcfZREb8V1FxwnGX876np8GTvJQLzDeEGiComop8mfTmw7bPX1rqC26KnMYHnffUf4dm7vtM9jRq",
  "key11": "59MN6hPZxPJMvC2kknGLnKSp7i2QTYvqx3QHJckqw3MadkLPvMhc9opWdU8YWWc3A7va41n1GFaddfUKsh13DygA",
  "key12": "5MEUyNM6JqjqLSkZAsQoqagnhBWkomYMyRs2yh66cBDvzMbZdQbb6fiAswTZu6RBVxB8KGidZAZdyNQqfPUBDqm4",
  "key13": "2kWh8KjybzzsL6aJALMQhP32KUBASTxUuzYsTq7CniuRAQ3PVuoc2CtTuXCboiMQZNfyuW4vN1J23hQjM4kgiwaL",
  "key14": "G5WtiBwwoBgvFQBVo5B1siiL5w6NGw8nLQXYYCXYbiN9F7HGaNUPZLynyWhYPZodCyQWhL66f1Q8gULFAbZSL5U",
  "key15": "2MK8yq8iR76z54R5hdZku6Mpm4ydTwCDqQUJJtdo4U8MhpKeHPHMaHBWtpYxR1a8M5CZYPGPuA8onhxcsEnXFJqX",
  "key16": "3PFBEyPmEiZUkdidPoezK6cMuLrTZks7B3Gpk3jtDFKgfMUt9ZRCbkHZnRDSU17EKwz2AeXFib88nyJ2p2hXYU5x",
  "key17": "4MXW1zgUtvJNz1YDqdRWT1nSNVWeWVTGbt4hgQVRbxf2XjmZqs29JMBJgQACPfHMqMcwAUvZ7f76mTczXRJW2eN4",
  "key18": "36wvJrPT9eK1FAhWRpmdFc57L2MveipgKfW7bLaMbcCbycctP1gmjkRdLKwuuPh1R5bi55azX8uaUWH83c3we18r",
  "key19": "3C3xZGDGBpENKPmAy7keiG2iJq4RKiydXrQTh11ysHwZFFRSmKjFbsRpBKPttQpDhuw6LKCyXvLTnLZsKhSDEXYQ",
  "key20": "258ggapybkVkJQWaC8ywqbNdJCxL96Hn86Xvk77WdkvzqvjHjpZujtxAGZTFTpcnUNwGSffKsijhsezqUij1p5u3",
  "key21": "3FSEY8afS7Y8jj79pr2fXRSGdzBJonGRCJJqxtJingJ912uBmNGHr5KBSGBryAzrviyhwxr6BTiPGVYXJYqKzsZS",
  "key22": "toYvRq9qNSeSRxKULUFL9rxGifx3vgdyNVj32Q7UQGaoMFGwZYVyEbYotNKj5RKWExDWJgagpAApiTLSyeKpZSW",
  "key23": "63QPRTHtik1U5xmC1ZvsrMZ9v2M1xoRCUWfXVuEKhnJujBNrKMXxPNXfw4wc4oxemEAJ2w18cwQGJM12fBkfVnid",
  "key24": "63htVj59ibwfk9wfBonoiwZVFEuitqNFRJSt6RiLCzbWzCa7xSerwBd6Z3PAdxekMZ5FmmpLafFWyyBHKDdhKSRU",
  "key25": "319KWYTvsBKR1JhsAHkSdsCaD6ocnRmr2j31bJd2n839AMYo7YHnBKAwFuaYc6cWr5BNXn55MwQzRbhaCccXeuJw",
  "key26": "3rPkFnhjyU8dWsc7rZY38fERED3LQ8gLUVosVnFqbFfgGS8rDiJig9P28ziT1LrxVVdTdUWagkEG2aESNoDZiq4t",
  "key27": "2oGoFrnm9ke5UesSbFHiSakiWcdq5zEo1vurg5xVpPSgsEbFDeKPfDytoBRAkZUM8CqyLRhsF5reVpPtYtqiRJG5",
  "key28": "3DKn7HsEvFJRdM4kAxkJPuyEBAo35FtT5Lk1QWiB6iKztiF41VgpqPyqzgvCWfbzWfdBD3qSvqqhw5xfD8aPgqJC",
  "key29": "2yLJ3roApxxcekfhE3PPrjEH4sfLUn8rEHR1w7YU3VzQogS4PXjeSPLGmDg8D3FhPMdHLS6nB8LAZaLz5Apb7127",
  "key30": "3peFJn24Ymqfay4gyFCN1sZ5EbRX2FV6B6HWkAjThw9PutXKH42QQ61itTxXZRTEhRBQ14BXsfxpbnzPWYE5ZLVr",
  "key31": "2SstZ7m8HzM9RNuMYLRrxWiqx4qQGuZc7T91qo2LiaPsqYtgMWFyZF7bpYY64w1n5zAw78JKdkYSMitKTi1QtJce",
  "key32": "2StfBkP1iDbwazfgMTqgb2D7siens97gBMotD7QGJ6z3bKHL9fGXFSgczNrkqAfeh1sut8e4WcKjXMCr5N6AfWik",
  "key33": "2YXRbRUEKL5Av9oBecyLzq5bLFpEjwD81iAeyK7SPGPnythcaHYy44MXLwun71HiZPcSWeqSvNEiaako97dzUw6u",
  "key34": "P9ZhQsWcwtyuVU6RbjNUG3YG21DQQztAKMNwzRp6pwKxduGA72pA2iTrguRUxhSaa6EamXiWkjNJRFcBgohDZxx",
  "key35": "4auwh83YkenuEtuURmeHw7CJNaNHZe9jQXLgvxkdbdcfPXMZxw5gbkCZk5z87ax6YeBGNzteZnsqVhMyTcmHsq9K",
  "key36": "xyxYtaU8Qtx6ACHamfHqyC71HQ4R8QAxkaP9qtAGQtp4zEZhYpSmyrwtM8u6DSARQTZEJbHAm83vNP11AiP9YJy",
  "key37": "xPUM1fFjvuKEAPWfpE9sgbKiDxVrwepn68bGJxc3SjDQG4Xk5iRYKR5gbJv44t7PqGn6D3A6SRkwGeNThk25LGR",
  "key38": "LCPouSU4VNmXfx4J9o35WFa9SFHTE9ZC2JKqgpvX9xRp3mr9bnc67V7nkx4aJbBdLGKJozEybGhxYHRd6kft3ye"
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
