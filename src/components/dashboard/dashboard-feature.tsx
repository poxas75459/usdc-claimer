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
    "2kdC4s3JTq19gorzpY6FoZoPRyaLgZx5icEs4gqhSbpdSgwUvu1UkHBomBC6B17nCBtRnHreGDVqmNABep7m4n6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25QjBRp39bAi5z6s6V9PPRpBuEgAjyU2z5JyF7okU1sUZG3pyaazUBeUi7cQz4tY9yKWEsvbRswf978uNdeLSLGH",
  "key1": "4DSHJKzAmihFQcGHWmjiCaU6oDMaUYWkn8Pcy8kXHxzFroif4wfFLh983kQFggGNWYcGJFwp6iLKxk1bPN2Gd5Zs",
  "key2": "5GNwhgU6gRQMxTdoKvG29P2DrmeZrFEbxXqjJErDAB58Bmiq2cnGWTapAtjeaBMQn9PzL8TMkdDtbcFtyFDw4NNt",
  "key3": "3yEDt4TygSft5Y2ow4r2fYgVj89r5NZZrb4rNx5twvfxohhYzw7DGrxg2B35QftifWScmvSPsgJoNGzZjkSteGDD",
  "key4": "3RQT4Tvxrpe5ixZBVx8qqYk8QA2a8C6S6nX3pBCWCvvCL6zXugy7w7GEic6fREPxD5nQLR3dFHR1odsX5K49tfCU",
  "key5": "5cEefXKggAb7TsNSLPFZtt4sZeu9qRdoeXL5GHA5SZoy3WdFnjcYMWWCtHTCRxPtDMRwVyiHy2dWR4HWDiWkkxtF",
  "key6": "2so8bRtue9i6pC7dAuFgMxYLLvkxZXaYUhQz12bBZXsdy1SSX9vtiNx7ZeeLdetpJwN9944ere7YwiGfCd7EhJHs",
  "key7": "3kiukGgbtucngSaivu8ECT2me7fvRwrP8KD8QsuWu4NEz3xQk76Z29kLYNW39EXZ25gJus2RttbJTWmcpEMvErCH",
  "key8": "2gZ3gLFt8Twh3gnf6pFrmDexu5HFKRD87AXEKxjEKyV1WcB13BBBQ41XM1hVrjyQgxZEB9DUDCRNRCeKbePDrkMS",
  "key9": "3aSifJn7XFoeMMKRr2qrCpkw2QRDvbAeE5LprWcLbhWeNsDcBexMFS5K4MWxhChAvkv3nuWT7oZKAghrMpdSzSHG",
  "key10": "435jsFdBfshYYZ818QJ5VbzRULWE32XQruKeqfGmXQ5JPuAWJ5FAW4ZZhtLqBTeg1vfUkTHDkhEu1fwebbHRLQFV",
  "key11": "3Jw2FFK3WUwATcGogSB7eLWrycHX3hYPELn9nzRCJWYUWX3pkje6fPVnVTi4p37KPCWrBWCB6xNNkMY58ahprLb3",
  "key12": "w9a11VJxHyWMVXG62qt9pxKJjgvrQRiSUhDm9AjBu95apyXixSXtyMWXkQkzAcRZXai8KVFsHnAMe6cnyiryZaY",
  "key13": "5HbAn4Vu1kPZwKvE2rHAbxNsvKUZwdZzKst6Ps5pXaKquKYYyUbJpZseSJRJHX4CDLMQozQkrCrcGF8i68SgFSwz",
  "key14": "5iZQYEqLVJF3NZYi8hMeRz6d4Czz8TE24PXuwSMU6DbQ78R3Y2kW5qNkz8yjR9p82BRJ4URRAPsvM2vpriETE9Df",
  "key15": "66BSaYWLfsEAWetkjoTENJKYL3XWJiCrCqFUQKVYg2YTk1qkC28ZogTTdvC5QuCxcV3TB7aKUom5BtYYuNU93FzR",
  "key16": "6RizvYW1x3yZmjh4VtRSnWdjcPZ6QZnTGpyQ6McM6xWMFF4SnFDUxyY7M7cnyE3YRJkpGiJmyJbxp2kkhQqR4n3",
  "key17": "UoN1qVcbsuT4sH4mFvbipmetAmdwsa666VtrfKwCQkaQaeVLCQeNpeXx8jD3eEdBBSyZLjjhgQLJg9toftuwHUk",
  "key18": "3bQ8YRAYSCCq8woqtfCZ7dKQgsEmqXfjmEVEVEDAxUe18Fe8LRjoK3hWXxNnStmCdxheVEZ9J3eCvBDxpFgyPssP",
  "key19": "4wCVdMFNm4cvvPPBT9zWiacEZcDfLhbQZ4RSr6m728G74WfGfMZ963pSh6svU1sAAaQDPFSvJSsABXstpVHz8xuR",
  "key20": "3aikSxriskGjnfKMjATyCfxmXRTibPCUXwjfCKJDkQCVPgiLxhsoQbcsT8YaDYc4LnuGXXLeuAPM7m9LjHi4LH5f",
  "key21": "3jM8fZr77XFG1937JJuWCnB5EtPuo3K5SD1buJai66XaK3H2vtdJ2Mqn3T9Kg3woeh2j11rssfw5hJQ7FSqVgvCt",
  "key22": "2Q6FuMok5r6TRKAFKSZsgaFqp4cuRiQvTS54ospDkfdX8ALhgC8ip66Z9HfBBsKoZhG3HevQSvQkzEAJ1NmAd3Wy",
  "key23": "3QP2xNqg8WXsMUT4FCF1uyQhMtjGuZwXPzCWe6LR4tywWZwerFGJ9bWvvMUhvR6bdNMFg1x4xLmsjBhz7qs4AUrZ",
  "key24": "5p7oHc43f5Kqfwy3K6eMcM5evrRuTiDGkK2uztQrRWVaJpNSXr5n8UQFikMnsPrmJi46xtJbmLj72zYTvELSM7KH",
  "key25": "3GC3dVywdeCvmBdMDTJenXpA5hVPyBsKafVcFaxBXa11oq5zSycqREMC86daXtrBBUF6V3sB67MizvYR6j9zQYLK",
  "key26": "67YgP3WVxTG1BKJtZM8JwpQtHENW5tGxQ5mL8TNhvahZq186hkmcT6rvNDTEysv1qqFRfp4PvhA8vkfwbAfPefNe",
  "key27": "5be1iKubNdh9WsguZZqyoYA6Vn1RFWqWPjGPwHRD5oJ5PQwh4QnZzfxLWU4ES5PgSPUcPq6dh2M3vyN6yLg5ThgC",
  "key28": "3SmwJMVjKTnmCrbUJqQzoM7xK2Dau2Czq7NE63cuh4aPVQq1fJ94wehbiGa5xBGzuFtVWzbTCWotFqZ7TXUHqq1o",
  "key29": "2SbGVMfYbFqDe3X9XofrWnmxyCyAVyDZk8WWQYn6fNi75gkQUcZwDycUxubEkPSpbz9rMmHyYPKXY2WmvZUpX5zv",
  "key30": "3vs9mJxWX1G5AS33CxFtPTpBWr843WFhcVt8Q1btomB2uTp5kut2mSPUupB8KgZ6G3yzZcxtqjEn7QiZXPjG48Hu",
  "key31": "iqa534K8te9GrQ8MKNLCG32FjRkxF5eemo7s2PC1bWFSoC68ppDxr1whXQFQYxdoaXHkFKoMV4wgSyLBYNNcDWw",
  "key32": "MrApq3j5yUwrSA25VHUXuy2YSf3drVNFWzxMEm1QcKE3ZY3cUn9yQsnoyHjSFaVUvLJfLayisMv2XLYgK8DiVSr",
  "key33": "2yRGXQvwbUgxLKwEfTZdtbVJHkBFwjJEwUbAzH1nH7Nd2yxW8JnSrAMS4PuFGD1oC9rex8dvUcMtEnpE7hzaPZX4",
  "key34": "2h2qAhT2rLogoy4SqTft1auAAiQqKuZMQvex4e6h6uzqJTwRxGH2bQxX2h23CKa23inAdY9dyRBFvDKwH3cSTYdE",
  "key35": "2PXT5ohU3EPN78PwXw69pxxZrCz76wzQCtZV13nKoas4s3cqotbujDuQRNuTSeh9dCZA4nc1PPLeWVki3oCcygAi",
  "key36": "2WiPE7s31E1mnTN1MoXKJiHcqJ1URsBaSoZrpWMo1PxpXyYoXGoSJKXA3QQhgHb9TmPN86bQTQzHU5im8B73UjBk",
  "key37": "3bBd3bZAfiUCbD7MvbdhSnhVQCY9WoLfsBroPa9rrQwzhD8fGPHKrCJzhmyYkzXXGwq2EHmNm5UDQpSt9ZPwThhx",
  "key38": "3kDbwP8zubAJEYQpmRd7sA8Y7LxEHobxvgVZ58eCTEr3AkTaHFU1pGL2wFmxxiiMCPbsB8cNZmiM8oyCoGHePzYf",
  "key39": "2hM4pES867qxQCED7GWjjHPpANZ5BQqkWm1A7hKo2SzWBS2x8PwQ7w5HVdpLv9Ww4g7C6UgyH7sSNAYL5wNNnFwP",
  "key40": "2LuDf1iosa9y9c8jkCw969Jzjr7qp8D4XDbQVsz9yLiYkbaCDmCdFTbDQ7f6h6XfTCgAhv5uXps2mjJp38c1EBxC",
  "key41": "CxTE9BN1H5upHj2PWZMRooXMQ5WhVqhTeRMhMhSCajATFRrGiQ2TNZjGoVuGiZzJ3DahXhCYGeb4st8ceLK51aj",
  "key42": "3YHAfgQhtN7LKcg8NQp6oKivvLXVwzAKbKit7BktR1bJTCcDTQo4CsJD7v9sMptNShaTEzvKhLRanjsvSeVC6BY6",
  "key43": "22uDTDT7htm92Nvpxd4HBjErt7Uc5HpAQy1wgPtaRcPuoTRnAx3DjV3KYMTKLXdQHUepFkC4ijD4heZQBv9Sk1RT",
  "key44": "3HAXYTzoCkoYhPy3eMaGBMppzgAuUucXyaM4HMtZnPa8PvdzFQJ5UvjosR1w4k3unqTxMjodNpaPYG5AcgcFmTCa",
  "key45": "dS9WWba5QEsjPzZAy62ynsVaax2CWS4Sbo9J82VxfDh7qEh22hr7sXyRjbHFFdS8kSU7PEtNj5iuCjHcxa9dPiE",
  "key46": "2xxEVmVVYLUCPbfn69rWYGHuw7hBJ5jyBym8XWVmQrKpA8ZVcWcudCLZgqU2EyLj1hiRT4s1NUqEdJqBZo6RBr8t",
  "key47": "2oi6hYV8thYWwjFPgeFKByTSxxXX2AQwRh34BZkN3Hhk6jetWo5yFyhWykmxYSg9vzjcZnCRiSChPxVCA41up5AS"
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
