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
    "2RvL92z124yiabVeuwKUhgiTMCVc3JL2y8XuV5PRA8mQJy29G7guQ9mBrk4KHeJBna1VU2DeVrrPuvsPQkPJk7jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4evHXY2ZEskF8zWjf5JXc9sScGmZEFbSHjxKYYdYRW1wvm9Jc3yAiEyBv1NmEWmHLvztfizcgYGxW6ZQuyYuT4ju",
  "key1": "3ybjbmmhyHrWWztgR4dq8dGnaEeEXK6A8Cgvm6iZjVZepr6bmkN84UiEYKyBb748QvR8qdSng2zeqjPA1F3JV4mC",
  "key2": "Y63vhZdFFiDmvD6MiGDzzszR71Ccd8ohW1kKcNQakpDgXkPMNdR6GJJELrwNLnKUukFnee2ejm8cGgXdhxyPZFN",
  "key3": "2Ujpka6tW7aU4c6CPLbFZc1UGSoxtnbqUk44AXL3nrEmMhcYED96rJ3C1N7gwuMHaF9UTMQN16BSPjPvFdJtfBwB",
  "key4": "5fTKyy1NtEDhK5uSeRHspXJ434qubUEMtfstpGcRxdDYRZsiXcq2ntYUX9N157kC9xAMfv7nkPDXVxQbTs5moR9u",
  "key5": "tpRFyfSt5aGJakHCpZ41YN6mh56pCk5QbM3BBdpWRZPiu6ohPE6nXgzBowxcBtRpLh6wJxqEvxHGuhqUbyjPg8C",
  "key6": "3KQBiikjWJrfNCuCiEWU4W7Sm6hLpfXqz2xw71T1vm6oRkzZ6pqy8mZLD23XYPyfDEoJ5r4RVVUYu9CPEz91kFvk",
  "key7": "47EVE6s4qSwcPMFaDPTLa4hzYKMZy6vyFRv2ndHVe8TjQbZuR3WBBqe6SEoF7ayFrqGdnqmHt1vA3Pf3yNnp6zS8",
  "key8": "36SC5fSsPY3BEaACYJW99ypnaDESu9A8mMEReZ9rC84ZCi66qWywwfLNgA2UAvBHu3vbKrrSnwQNDJLFzRdtzeE3",
  "key9": "4gsrrVFdoxQxK1mnDAwBRSCakkCXMYTNHjTgHiopnzevgqARXwz5PVwFiYedkynyYUiaACzbLsb2aXrzzZvR8BLZ",
  "key10": "2YwbWFt6sqX3H3Mx7KFiGmmqxMZ3FEBx1AMGKAXQKefxpUyrFNVeTQUUuDFCootcoWAVB8bgCTyKWoqueGByWnuG",
  "key11": "PJ6jMpxbcRfYjLiUveLYxZ6X3VGS3NCPgbxjqbGhvhn3K1w5HQZwX8GqtvJygAv3mzBJpkJ172EixpzBp5hBmJM",
  "key12": "2vt3PuBbxYvBGqmQ1qAJkr6AmMYBZEBh7hPdRBSfE3ctNz9rHmhuAfp6T9HK32BvwPdQhrXK9K2Tk2P23xUjqbXh",
  "key13": "4nJTh6CFQc5k7HwJWscPzreGSUZfm4cUdDJ6jTduxmC63FqzifCzwmtGZ7n6qGdQQxXgzrzrocGmUsuiqMiZaxub",
  "key14": "2fHyFuTyt131WqEakJi3e8hfAZn7hE77hNfTMGXMXTGS26cYPwpoXrJQoiqFWhXKPPdbtzxBNCxqXA7tXPkNYscC",
  "key15": "2o2N2vcUabdeb4JWoo6q9rPNmmJg8XBmLpV36CpY2t8CqWrsHpzQGTvvLMV16hooeN46CnLSPZJzEEM6SZ72myC5",
  "key16": "2mA8vagzGaJzZ9fYviVPy4NmZTKJgMD5mCPLKPWEwkCeiFVLfReAt6Zm88e1BrQNQRR8Lb7iXoVPjmRMUBpSc6zQ",
  "key17": "3NXhzowTFVNRvwW38mjGU1m9yHrohTg5dJJwGUhxqSf4pnZwUTeTSqrGroQtmmuisG2puSESkV3K54NdVy45hvsF",
  "key18": "5Emxw8yrYkJ4iJ8VFoNdkkhJUnBNvFYAg1GaBjW4uvmoXWjG1sFyBc5WboCqC4WT5ocgE4Ys6MLX9Z8EwLTZYY6a",
  "key19": "PLVZURCHMDkPKKKBPtKPDga7x2DuLYjRa1yjapj3qyYst8aHD822ppmfb3wtfNq5YXS7bqCkoVTh6FexqSNMP63",
  "key20": "4frkUvN6cvTAjsLBpNeRs98HQfyW1TkbYeSa4mdnknU5EXM52kSgejjsrNBtenrYY5L4kuAvg4RFrvSrermzNo9m",
  "key21": "2fpVkHtWcz9vj4e3BCr4dvp1zBqFaPrPhrWQAuKxqwfkJpfFoTPXFL2ji84wiroZWeBRi6uUXSDQqi73zPPWc65Z",
  "key22": "41UyJHB9v1ZCyzbboRhm9DdLZKTEMHJ5jTWDPzANnki7Geg32ok2vngscjQPR5batGh4sjReeBeGxENqmrJxQwhV",
  "key23": "5dN1haceDpzQpbFwTPm7kRpXwq64xvYNk2ZjHz2ag9GWVcNPKA74GNFWC6FnuFNag7zNqQA8TQuxNoEPm7hu78Z3",
  "key24": "4NRASvLmt4RUotkYwpNAAaCisUNkHhf5CZUT8maWPLybBGnA3YXLHMehZoFBQy2v6m5mAycTY4DbegkDft9FQo2R",
  "key25": "3di6UZtCMNHySWBeCL9Hq1WkjCypJet7BotiU4U8Wtc4zAAw1ZovU9X8KUCeyJR79Qiz98QVYectvMjqxKdHw7WL",
  "key26": "4UMp9q1SGXVCL49ombNkSVL5PRyh5GxcWvF16dcEDBBgx3Rce1tLReK4Zmjh5BeSxFWy9Mx8bZyx3JjHbYqK3wwM",
  "key27": "3NL3xQKhERAgVdSorDRXJrv9z33ScFZcjqEvXCQrf3EJSfLA8MwsugRUH8h5M6yJqjVB5uEfcg25c3P6X4uqdMyw",
  "key28": "3VCDYXfpmUK1qmYDLr1pbd2RinaWGUEigcrw8poK4Sfsmq1ng1thFu4gm3ri2JN1JwRwhakn2FBebW6h7jEZBSUS",
  "key29": "8G6qPwrStmxMLyLVWyiA3ZkYp2faQqsF6k7Jr5yDAivD6c9BeL7nT8N6SpGm7JkB1QJnTQtHYeQuyf4nKgT2meA",
  "key30": "F22L5bVGBw43pahRqvUR6mhQw5pDcXsTpDKfCLqSdP3wW27fM9f3ftphy9dP3MairtPupYajVcWb7UxazakU9ij",
  "key31": "2mZjVSsdAmnXj2jkBcu3PkjRWXHrPixksab581HJcRVJjP3wc8hsvtto6ucaxYo6Fb1GMn5cKswxLCnRZ5S4Adv3",
  "key32": "2akE85TcBreyunPADftjqsDRptVFPP3hJcdXiH6gigEitwSRUDcsiF1QDmYDJnxVQnXEH5GgQa9oiKdJrBBkTHyt",
  "key33": "25PCQg34HqAQdp6ybMxCnZDnvAEY9TyQZdHq9a78fCTXhLWMFujcj5m8QLA1ZTznTtC4MWJu6Pgx84XrmEjcGoWD",
  "key34": "q5NGfDervpPG1zCzEgWv1WxwR7JMbMyjUV5VV5xjHwotsxz4kmQrfVbfBK7NqKAbVZSQb1ckcRALLrR5meig4DF",
  "key35": "4MwhpMLapq2Sq7eF1YcfQFxFygegpCZMqXR9j5yqqauuE2udu6iLJaq5Vad5mwZCFFBW2MeaAD3sYUen4wN9LkrJ",
  "key36": "4bukQF97LaFqdLbFc7SmHxqYA5UPPRnR9D891oK7DvBPG34171bzm8aRSC4E2KKhLhSt41GXtnV7QLToVaDmTsR3",
  "key37": "2rBQtEba5ctRsKEWvC5vTYs8XxSwuPezGW4MVd7FH69zSDw8eDLKS3YDVvPyw4yfMxsZTDK5Co9CvCR9nE6YidHj",
  "key38": "fHqxAWhPFihwpZfU4CdaWxDwBg9hmKxZQ4VBXzrrMSctF6RjLjn7W1MYzVY3HR6B1GL3M2ehEytqDv7LqnQXZEW",
  "key39": "42ZNGtBQ7zUMfenj1Ld5xAMxQMFvASNVVfaMZ4PfQmcPQqFVkCRYMJ8Zrrv1wsUDwgo9CfG6XnGUQR6AapeFhGSj",
  "key40": "CqaCr5Pm2AtH92dMqRz15dp4MpKAmQaTjzwaLgLhZ4j5p5gis3nrj4pWNfXcYHNcG2qQhrNsPt4eGrKioqmWey9",
  "key41": "5M6ATX31b1rhPH9HWkdYJm8pDRT4GiM6aLNuLCf6REEkKA5ZWKkwk4Td6TKkwTyZmi4z9jaqjApxgEcFAm2T27zN",
  "key42": "3UzTZonaDnZ22um2yPoZ7qCM57doqnnvF1NC4JKVzoQHoFUZKV6QX9moKhAv3kzfPnjKTpiec5RScNejbcMv9wFn",
  "key43": "4BCjzaVRAJi4sTw6i1WGSFgLpwBDc6F7TTT9hsm4UMHwZMjgSdizsYCiVyodKGmqtfWJA6UuhGguHLe32Kx9hCXp",
  "key44": "3L8vApnEyzqaTXeFPoqdEJzjRjztEMCD97axa1QqjaND8k2MBwGdQ52gL4NT8hicwSVV2w9naJUhc4cifXc5hVPp",
  "key45": "4JLgcWTzcFDxJN2TougSHkSN2hajm1QNVFaz8rPktPPFC1GWA6nL6SjvEqoZ6or4dFLX9mybYi6KAuH2hGA3z5Ek",
  "key46": "Jt2EeG5TqY9xu19Pxfn1s2xqLjBbSmdE5dPdardnLzZFYB3EFfgS2L4C5qxgYhUnSQqhPQG28Uwk9ScRgD5u2zK"
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
