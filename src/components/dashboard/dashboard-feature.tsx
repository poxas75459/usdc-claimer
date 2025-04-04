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
    "2cxRfYAH93FCgZNpni386aH7bBNmU8BfZj9bXHLKLeGSGamC8t29aRWLx37x29LmnWXQwx366kob4VV2eoyRB5k9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W3yVL52Dr7xpLv7YWx2eu2uKku2NUkK2tbAmWu5bVFcKykta4B8ktM7UarKudHWx6fyQ5grgY43auHJ32H9dBSS",
  "key1": "4bM8RLCthWgvWvAFed8nJDBFN78UgUTQEfutku8Z4oiEWtwPaPTRgGeJXo9y3poNfwYofreWBXtm8TCdS8dwgmGZ",
  "key2": "46GphPqjSGTea4crfYofVK4NrYC6SWwt95RQVYhirU4t4cF4zNVzY5Wqo37jWXQtkRAtCn2yxmNv32Pz7z11FaHR",
  "key3": "5TuytrUdfsEf58WKosaf9Vsy3AeCDchAyGCVxxBHsc7puzYWWkW3RwB7rYxWwb2DCcGT1rTzmSkdsYwcuLeCo1xz",
  "key4": "Eg7HujESRhATXLtEGmzxDrsxpBwyRPoY7aL9NJRu1SvMFzPwft4Fkv6PfWi3UnpirmjnFmQFvwuCda3GdftJc17",
  "key5": "3EUy9bSz9Qj4Zg6VEMNKeVaYrHLjuYbmPfYNti9D9A1dg2Cvi7xCYvdkhyV7SpshsEvqeJhmSg9cTVo9wCFHCqtm",
  "key6": "2bEb4ZiMrD6xHJLzthPCbYMThhyikpmDVsH8dCVhyddutRRr831UktVpzBjz1hW1W43Wrn1hUbrsU7a3T2HFJoCg",
  "key7": "21pRaPZ2ur4h7vQG5PmRcqTVu3KaXLr8MuLqnDofqhT2ecMju2ncPNzvDNX1YfeRJzWLHmHoeBRhC9d7c8L7KN9m",
  "key8": "4dAmW6vWSckpFMoob3gG4cvVNJPUtHFbj6b5JH7k21tNRGQ3kaeRXwvMqMndYwhaHS3yT8DJxevBeuLbyk14XdFQ",
  "key9": "2k2rZjTPjaXBtrLwpvHAX5JuNcWT2Ktky9Sh8saCcKjh8piZjRdSvviyvfhoPgqkRJXQAqJtH7TMWw3BxYspMFLX",
  "key10": "3cEx7bvpQiLm218XJy3JWGrBR3QRdtg3H78da5QnDuN8kD4BQQhmbN8VVNn7U2A7zLAjrUKNih5RmDZFYbqvqukw",
  "key11": "2sbVD9KY8iV8GGfC8559sDSYQCTkHHanQLehq8xLvMqVhySE7UY76FWxRvtaBc6JSHskDk5XPZXcJPbdGgjpsgzc",
  "key12": "2uB8y9Pi67mURnqegV4cXxmCW2kQw25TCRrASohR84TxdWcJVmTA6zR52UZHgxE27FLG4xDRRsd6vdkCRZA21bu9",
  "key13": "2nrDpFbEG8qv6AgrKRCG89ttPBat2pAfF3F1KNVmGJVu5aK5Nd8GrjVQP3rPE1WYiPoWQLFe2Aqa4tFNTtFzHuLD",
  "key14": "5wNoxSBz2Z6H3RsKnJ1EQsFuNZpusXPPeewbhpTSqN4s78Acmc49rMcoBdfQv6dCWBoQPoiBmYGhKZqLUFYhtnKd",
  "key15": "4hp8o1SgMGzVqeSWHxYWv1immHtLSUPAbhzcDswCA4v5x527FbWqs9E9zWfy8nhU9zSvspSbU88cjdaU8qu4tbom",
  "key16": "51jMyV3tXh7EbFNaRKJoSPe6GeFxXBeVuqTmAKZdH5cVDYwcufmAThibEFtbSrogrv2KLEzk6Pxj2vjBFaThsvnj",
  "key17": "3pBytrfRPr2n59f3K9znjKWBrnDbiR4CquQepZry6ua6cRhvQ21sGQiVyv9REBmSopG9knK62Nm67dkcg5nJrBVR",
  "key18": "yeBfBKXvzVUDBfindtTRbKDVNmqpeLrj23MpafjRjbrQRoETdwHMTGktD6Fw232Wx2ix1ckfTw7hZodgLJcTLNM",
  "key19": "51rLcVfDbNNcFRoMvbAxzgmR2QB5d95M5ryCnMgajM1SCRPvFmX6TWJw7GAj1sTL2NTSG5KZA9oagbu3R2LRsz6C",
  "key20": "5ckaopL6saRv7U75eFa3cYJCPYDW6vStr9VqN7pxaxSnSjE6h5413iiRbfE6B1qSgy7Eqdodh7vM6Rxj5XM8PsjU",
  "key21": "5tB9Kw4zhtEyrbKhB6aPfxKpLSryvN9Y8qMbXZ5UkjMBe4Xpc8jtw1wc6CnDpoLgS2C3ctEXKsM3yA2iEXyvgZbz",
  "key22": "5opwwNjMvt8meRAEi1txJCrLqrS5S6FSkwh65D5L2YFGdLi1b682HNr7hWFLjuPzQwBrMfh2TBTVG1dYidJDVbhC",
  "key23": "2rXWyPWJHMbHub7JLfdvTQiKdwKM6kXriLKDP3LkWR1C9DgA5o7jSaMZYrXtR4SnvVLZoFjZCQqyvkPhVrkicbtm",
  "key24": "54irndT6YpUa6h5hwhw9EkHxsGqr6NUtgZYTGxZVxR3uMaCm6UuB68kTMM1ZdmchFqSqyGDhRwouB2UVJux3Reiy",
  "key25": "2HbqGU7nF5KdLJd6Nc5KeAGawioDPQXss5NmS7HqsGyC4DqXmZbEQU9MHvShj2bxUwvRWQoV9xt7Jy3We8Q5vE27"
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
