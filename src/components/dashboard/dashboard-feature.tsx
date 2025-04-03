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
    "haSybYEUsZpQvBRCGaNAVMYjm2f9UyeSe9KEKkcrMYRx1seP1UvxhyLjwhfaQPMuCaiNSsmce52DovdEpF8dczg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EYxgYoRoqrD1FTGK2xzqfetpkdUjT52cbLcPh4RGbeAJtFUngaoeGTWhHzS1GMbQwr5uAkEk4bSoAVx25wfgkFh",
  "key1": "4zK4RMPExFApKwaTQCJWgaiBwkMGwQQR41yTLqzZcLnruaQ3kSoXCa5E3Z7vTw6GET2XV1GCXC4zXGyPvt3nRHxV",
  "key2": "3rDTJRSrQrWxmw4zsbB1pLJrdkmNFD1ch33h3GoFah58GkktMZHbSMr72uQbi9soy1AcQAqRnF1EQDKTem1inzDd",
  "key3": "4ttN9M1y6owyMkwUQeD3EF6Ms6c2fzpMk7Bw3M7c1K6x2WDTvhKuGRs8LFgGsHhSwKSeQro3WXxYwt8EphJBxHiG",
  "key4": "3AxEmtsuUoh1utPqKTjYPSQ5cGw6p39rNtFbLQEtuv5n97kmy93tZXb56LDRL52pGEQiSoc4kZ3Eafry6ESTgr4A",
  "key5": "4tNzUUo81hJkZXfMwJsYnT7mBkJefAsUecCARN1NigUsj23BizQsGLgy8LiLx6LL3V4kd5xuTd2wgWX62rB29jfE",
  "key6": "4UoSyAKtBwvtma9LpxCMLF2ciUXcZthcDCNb5tfkNW9B8J8jde44fTuzADao1rXDu2ADqLZqiQsDCBPohNepXqRw",
  "key7": "5AvVtMCbC9bEALmu1uC2SNFzyqhWCwF2ELb8EoHwL54QyAAgA3xR5aNBwuS9cpvRGQYDUfKYEVUkW8eKrFnBWxjy",
  "key8": "4LnQ3HtRFNMhgV4B2VjdpeuMAAvTpQY6wyDSqnYueKYyYGyzD46HXms9tM7gdVaQLboyjjCdKy7XuVpyFZs9C9FJ",
  "key9": "2CocKQMMgWtaivGi72JCsrNfberjbAtiV6aDr28tSksB3ddaxvr7541NWEdCAUjvAuaH5QFapBPFwUB4xyBwqJpG",
  "key10": "5sBnuzMDHikte34Zf3hSP4jopD3Vp7ZiGfLt6szHL43YzynB3RQEWkTGQwu9Bbg6UXrMem7cWzmvA5aQ8Pgx5wwm",
  "key11": "2X6yEREgdVbEjd9Jdm4pGBigheCEEnE8bZCLumXVnjqDSQbEc9jztE31joiqxZBvrVezjBku1u3tj8kFKfBmfkf8",
  "key12": "5QvLADBCBsa3ChHmWRVsWdLtyCK5fRaShwWPGXYhVxZApSPKGBr7JHJJsVXb5bn2FmyX14ArbcnggNrLR6HtjxAj",
  "key13": "5XmnTkCGFQGkKuz65G8BA8teaPA3rsTDJ6GzSgiMkAQ12uRoe6CAyDefcejH8Di1fHKmZ7VtBzuh1djvdLUShthC",
  "key14": "63Ym6rbVfZpP5iU81bTUK6vCtQY4PsQWqzKqLcMnEmBq5m6SWagTJuQ1WqYNF1xPP32hRgZ1XVgYTrFkeaW1xhb1",
  "key15": "3sq29eDJ9mj2juifjSrbDsChLfQGMBRa41vSARCQjNN3ggVSNSLAoQ32qhGpdeh3cdtzVgxSUsseMDsDb3RK7wnm",
  "key16": "5uZyKjswL7hGfU1Y9aUbSwuRdpCm26znMDwtQwCKXYFtxdk5KYw8vhKEebbrgwtFxxUBVbdBuNGtgkDedP2ybq4r",
  "key17": "4snH1QkKKMmgnFp1yyBwr3Qc2seVWCNQxmqSn8CbhiyVCD15Tvb9E5XThHPc8LFbP33ykZiy1tULqWN788dwfgJA",
  "key18": "5yLmqvpgsAqVpAVDdAjzV13NEXYKNbMHhnPjzBvWHc3wAuGZ6wR6D1pXLYBFP8tHVwV6ejYjQPoB6hyS53cH3nYX",
  "key19": "2gHQLDbiN8nApPVvTQA5TPyDw6U29mmnfFvXAyVgs5dJk68RMMjzFq7gNbkUrAtgte2naYGvdduFYNZhPLqitSTh",
  "key20": "2HNTstPi3EMUqGCvwa6VcsRwtNCQcMWokTeseofCpgH8LdQ4NTcSStMJPAj2jf3vo8uvtRdJ2roH1TybW9w3SugE",
  "key21": "4CWPKKT82QFbJsHTjLUWuC1KKZwUVYz1y2YKCgVKxPYwC7W2CqTgr9ggMyVU7pTohdcFpwrhhL2253uaS2iKTeLf",
  "key22": "Chh3GDhPUyGtndKrZC7Mn7G3QR1NfkYERVNKC4ZGZ9yd2QsmCRehR2ggpnp29iAs1JRHxFWoBar9pRtVaFjmy6W",
  "key23": "3vB9pJjN9GmLFH5hQW96x4q6XmxHDTxYDPYPTTBSmDT5CmQk2asqBhFv1VsVgTums83AgP8J9VZVqSYRixhZQcWN",
  "key24": "3LHA662FuR9CEZn4Eov6jBRWAJvg1FtUAx5WVxSTCrAwda6ctN35Wai67Q6FqBauSEJbahUeeDduzz5o3kXmXifa"
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
