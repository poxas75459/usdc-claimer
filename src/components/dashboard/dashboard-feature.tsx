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
    "3s8NLNo9kd6TDdD1AJ4vJFpAKVYpz4nQmHETa9SWn6HowmxNmPV5RncxQM4njKY9g1NX23xbbrw9Z6TNRpAxkWz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kfS7S1mmyqPmyUkufcrnFBdY2aXaLc4r6xXDLfTtvJD7zu8cTeRoVwdAmJvaNZVop87mKCrjimQPTN8qmxwdbkw",
  "key1": "5J68CY6Eh7UrZL9QwVbTc6eWc8ShVLjTj8Zk9NCiv25RPAtj8Z7hswtDYYLzswRPb5GwScLkGHDoYVRq5F9DSdu5",
  "key2": "2DLkVBkxht8p6SSowHzU2FmwNjvtyv22c9z1GoGWKpYcZXbGwj8V4MNaMna6FBtR6oeYRzZxBjq6YtFFmBQsPgwY",
  "key3": "R9u9YuhcamVU8hFFUaRxXu659T73EYtdfR461bB8uwdcVeL9ruXvxdGTUfn7xPgDjJJt9xq2RGt2U8PLZgcfmZa",
  "key4": "5uzxa2uzZAVxo3RJVpTsaMRi3GodxBhCwvnwzgQ9SmmqEh1SsRkT2RMMCWTmegY8cQBYmTM45NDoq1X1GFEt59hu",
  "key5": "3iToX2aUGQmxgTpmM1y1az8cJSurAgeTW27bWu5pGnhuwGahEdyoCy8UPiiemJqzgK5RQMU4BsW4DpDcZXWxo4YH",
  "key6": "SakCAws7f6tySdS7CndwQfXn6yrBDHvVHbWZQU7634Yw2GCEHSeFX98fH9CxVKaZyNb9vrM9JWurDnJ98KNxkYz",
  "key7": "2gLwCu4KGgj19VieNutCWVCT968Uj47mEAFw83DpmzW3YqGkTySfuti9x65ysB3WupuHcB192u22mxvteHP9nHv",
  "key8": "2yQEtzC35FXbPss8wDHSjtf2FD3wG7oGFtkQERftaemBLem5GoxocWpHj4bPtQvLHXzZ9KcaXd4F9e9xsYHhEHne",
  "key9": "5L9PHPhDRaQvpgiHWBGRHkMuEdrE2MfpeFc1TLBVX1Jwn1DHuaEr8dU6gkTtNhwXGD7NMNBKBcvzdRzwKxH1q4hr",
  "key10": "4ENtPdyMiukxGx1aLNiob46p9TdhdKJBYCRiXkRVE7f7mtdBDKQ5uUS7u7aByo3KWemJRcUJDF72L6w4LPAEBg4n",
  "key11": "3c9FZUnmU2xk3gXGy96b5W26reohxRJLveiEKLpNSjXRoLtd64bNpsJ1MgKPdHSwBtcJS4m3Sv6rJQUnngpE7DfN",
  "key12": "2mf6KwEagqywGyXav3BBTR6iMrvDAJaayFg857nYV1Ydi2bDMHS4LLXkJhYa6wRcATYASkZxS4C8oXakibZgPdaq",
  "key13": "4iye1W2ess8KHaTDjvf6RQaA9uJHAERRs8poCkqXzSKnyyPFgVDf6MA18fTqtcUaRqtMy1Jg5ZuJhYN8jhdnTGu7",
  "key14": "5G5GRLVhuM9KQHFfKrEh5f4GEUXmtsD3nfMvnzGv2Q8vVmmyk9vcRXxdKxHyK3SomMKGeR1GkdRS3dFwXL1YKB9T",
  "key15": "2UJfbbvuJuq1zagTuRh2CNfWXztLX5Shy46kWdZm9R1ouVFXuiLs8KJFrQsZSrMqnUzQotPAfLGtR4okk1bjrKj4",
  "key16": "vKPiG9VNYfPHSK8T7G5rSk2fWngJEUrzhz8qgwP8xtnLeFshBchxZZ9o1PyvXVzMemnAMorS224KV38gserwxgR",
  "key17": "oyK1fLsDaHnPVtTSNCgf2dWRqbUKUy3UNGQ48gi1v2uv7mT7SDm8ZmsDKqdKnmS3a92dLLE5HjQGuP1AffT9Bjt",
  "key18": "5X9dExVNRM663miwcq259mDTUbazgxsRnobsdTcsfDVfdW1fxRJAWL6GC7kCG2viYaZ9BMo1NAp38voLYA6tsdnC",
  "key19": "5RsVzaPweCdS5RMoNZYXFgrkvUF4ufk1QGWW56jeWQzAhLzSERoU8MPez6vGAvCvXoB5CY69PtWz66wh6v5iRxmw",
  "key20": "44DCMDjPAzYtbXnGvYbwHeRSXskHR3V5gZDRQU1FsyyVxbMZrsgn871u5RL1CRdwgquUDUaMUzjWAxVFySH7MAtw",
  "key21": "4kyPwdwpgver1chRoHD23SC3Ba3RgpTLpNsTMCMvKccYjgsfiJrcuscNriPZXz1mmcFmzQ6fF5HpTemdErKd956g",
  "key22": "36xxAJckZaVq57waypog4q3zV4GfaysaGVhqz4uFsdihjAQ1NCAdXJ2War5gwwd338oTWt2H4YCXQKFZwF7akeHP",
  "key23": "3GY9Vg2g7xomKudprY1nUyfCyhz9C6iESunpeYSwvgWYnfMqw5P5NoBfhmRLYadF9z6ZLdMLt1CWZV1qZ6bcoakh",
  "key24": "ieT444eKa2aPuXW622ZcRRumz8Ub6Eq8E4v96BaeqJvwbSmCA8fjuC5W3TtQKGpUVuLfK6N74ad6xd7fmMezioQ",
  "key25": "5kHYpFgJg8g4owQ31scoMaGkc28htyiWnfFS6d98fyxhEcxUhCKWwZBFTQFidgu66SjDBmhbd7BjFNpcBkkF3rwB",
  "key26": "3XiVpxmaYG36aVhiGH6V82rpk4if4btGuyBkCpUCmm3FbrpFhUGxEzuDA6zr67ZtYR8LGrZBBKM7dQT7E2TkGP8a",
  "key27": "48YmAyxi1Qa9cFP7hdvL8TDtEZaGfz3i9hLsJH97n5o8de9wi4c37tfaVGFGEsNtintjcM9UysKurtAQJpUxzXK",
  "key28": "22gis5cKQrr2sCScRYQ9pw2yaGz38mp1nVeUMXcUApe9xpUjEgB8YweJXbvxV31ydoncYWu5XtXgNRCtxftXuD41",
  "key29": "2d42rgy5M57sxrcTfmsbLiaUTxxqvNqwqmS5ExMUk8TCL3ng8o3PYqqMeaDLx23GUmoPohgxbi4esjMFK53FGns5",
  "key30": "3GQkc3gZdvqsNmaY9t3y1GWQZFjWsgGsXkqrBfBWUUdWASQLbnNNFbjCxwj1XoKnNGATMtNyDubVmWdx7CfEWV4p",
  "key31": "2AazwmBD7mTq8dVQ8C8jhXJh8VWj7zkxArVjiDJutcQ7SbHL9d7Ux7caxfRPSvbDX9oU17oLAq3DrgqUucoKmYTr",
  "key32": "5CiNMSRNoLb489imnBu3xBgCYukp5BtowCLZFwFp2tuVji3Jsdmdw5uCxmPfoxtbbTsedtoDFZKb6eqDnBvwnjTh",
  "key33": "3VjdxmH9qyaS4ySU1YVWaFxhV4fWrNrJ4itUGEEREzeKutSb5uhYEH6scSQDyHw3RC7jzBmnLvaRhCx3gknMJwS4",
  "key34": "3XXTibGzkYPpoxDPPpYFbHDtNAdQqLnncu3tMFFfupGoKBp4yvFNmAJyAN2ifRhL9dVkEcomnTmt8i9M7EuBaDM6",
  "key35": "CjVheMXKJZDb9XPeCihEoNPYnhsBVViZvWRBJCV8amA1zcthXm7BXpmR1sr8SVcrXRKuX8kLLAxqGsomNF64qbc",
  "key36": "3xoaz134uuEpKYBNxE6PHVb9q4ThkpVCHnqny9VqJiSTKgPE7M3y18hL1n2wvwfTpoSJUP8zAooedsECYEkbyTHr",
  "key37": "4WZsYZ6ZQKvXN69XuTuCkQ75C5Eo3AzXKYDPbdrzbfBLoh3yTfo21eRwrtMW3MTYKrD3TQPGHfHYQSiBnfK1JJqL",
  "key38": "5gQy7DfA3ysKC2UHLRenMSUMkZBbnE3ieJbcqiSd11nGQKhRXtqPKH9A3YCbpzCBSuZnkcLYLSriNKZAGbJuT14X",
  "key39": "4JGuBjpSgqqVCFNvXGYfcFU3te7VWBrVEWffaALVopcp4tNN3FPda9QcYYtWNyAYte86ERHMiEUfNCmgPMmYEos5"
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
