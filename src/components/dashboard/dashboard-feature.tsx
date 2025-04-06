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
    "5NMyZyp9koaEfY6yNhKf65nQ7L5RsvmmiFFsytdNYGjgsoFC21BpVAPkejPdjGP8d6fcjzaAWoSQ4DP3WHNXehPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wvK1SAN4fjk1vaFudPoVQ2zWu9iDMgZBV9t7MxD5CLoPn7FWAQekaENzGJqn83tDVLh4qUJfmYVx1CQxR5SZy26",
  "key1": "nVDvtp5j66mmeynLywVpsJcsky41a1J7gzF4Y3npdiUtERBEUkmj5YJyip7DGwuGPJwZCXWZUQx37TGikpKPpch",
  "key2": "37ayUPP7ATDc4LjgcJ8ze3GqpiAfqBghThSR8PGv8KJTGJSzrbqb7U69hFZ9XM17UmZonmxyp3UhXARhFyVJRHWc",
  "key3": "5MuP8hH4hngJg8FwyFxRKK8xXcJCV8b2J4AQKMgpFmG7UWPhUX3dHrhUaToDm7udgFTRBpogQLJB8wrNMVh1eRky",
  "key4": "4RbEE7XksmNTJV9W8ffvch1h122J1hspkHg6yLDnuuoxsREDshP6YCv16jHMEEJkuo6tcswQjjJy7cdF6tCc9Hv2",
  "key5": "56Qx29GoDiYCWdD1tCkU1kewr9h15UtyNMyaQwSjvTsYx3VeVJPWmUBAqpgjWRqNBQraoNBG8miaszfPQQyQs9pG",
  "key6": "4txHb2TSWmGVEvfSJuXFhTGLSPTvsC28nrUXUkootYDwQxy9VqquZmR5e2f8hnyKwXki4XzJt9byvhoAMih94HqR",
  "key7": "4TVY45t9xDaq2U7iyKskVe45uYmNgfYUUb9dLYMuqUYXVQqZSkZXjqRJjoiFBAr9BNeMURaFTrS8xBgxRJuCRAzU",
  "key8": "sFvngbjro2NYjQFKhZWDbxgo117ENz8qzT5J2VRzP7XX4TZUxxvVjoDYSXLJjQZaarT1BvtEgnn16u7ZSMoAHPc",
  "key9": "zrzsBLmFnz62wWCPzNC9yWACwCw5fs8SvqWLaJzpmW8QjNSRJ6AE6iMZ3QfFXtN8FEYqvrk4JF4nA8kRQQDZb81",
  "key10": "2xj9ULYgVYfyjqajMqMaEwktkaujajZRqGj68qp8STnSXR7hE563v3abrLgJaYfXRWEnegvVr8MJxdmYcteM7cgV",
  "key11": "4hkwfqM4wywoSqnQRSGE9BGeMVd4eG8Q5CbgnG4fUWmiPeQhuJ3PEEDzCezVxsbTwK3tmiRPuim9936osR2Whq1X",
  "key12": "1VB379ZmjULcSb9Bj1xqqfRaB3dsyejbDFkAzCM4wVXEaSZrXCr9wAZsv3WkjDFjXfqeLYbzUD4LPpGeoowfPwN",
  "key13": "4T9LGJsxRP3hn8JQ5sR1UiRAGQcyZwMZtJhcnLNSctXRre6FM3ApK9exv2ifuaMZkLCLazR17SLWUoU8qyT6QUy1",
  "key14": "2P2ZiYbvkMJRhDxSZYaCSuTSnKcappVyDZRb3gs9TNaZXDrH8MKKP4KAScAXrz9KAzRqa3sbFRdw6iGFVBCcaCza",
  "key15": "2ku7AAMtQCQFYq3mHH2rzSb97cm3Urej2pCKu5U4ouUZfJ5BjRoXqXFuCJA7nr94Gwdb9FnVPK8YZQgSKG5vzu13",
  "key16": "Sqq4YEMQKknfrRgpw2MDfDmxSmBwfneCXzPKaaHcRKimkCATha4bknjX5cJFVAKGEFsdmrMWQUete1c2oSzyAqj",
  "key17": "2YWP5uadz4sMriwaQJqToMYWp5aVnMsqVGbwhaJSya8rowXQRv9ARLH1R9nPFW3nL6pxNVtoTqQ3fhh8yzqe1B8T",
  "key18": "3vGmS6uL3w7mUQurRaxF2gwpbTjS4GbsaVLXXLQcRKPeBQ51MFdFWYvWtsKJ686Acvbp3cnHPERAEwF88Hqai7YT",
  "key19": "2kQ4z4e9NWXtB25fejedKc8tyLcK8KCdpdF2KBLFSdhieiaRWSpUMncuRWzcB6HYRKfSmRyQ6qTf6M5UGv11r4GC",
  "key20": "274knS2q8r32s115uEkpYLro12SmxuW4NkGDMEHiwg9TrgQEjT7XM1U1WmY7aJT9fHu3KSwNm5wcvzCepEviqCpT",
  "key21": "4Haj4BTTvZTSReREj1idv8J6Bj9djsCffmY1VZRvWxdi29Ex1Ruzw8DhjTufr7SbcTBaQA81NUmMeQKrwcb5din4",
  "key22": "4AL28rLKwGr396h1E4PShjQWuZf8xeyB1C2JJo9uvFqFqoiUA4E2cs5qySmAJUxrq3XvLevTScfvJBdmdziFXtQb",
  "key23": "53ohktiFLEWAbCanPXUsPjAWsk2zkEyxT8tANfbQuADa9cwMs7n7EkWmtj9zzTh8YeTAGXAsQt4eHSYa2Nj3UNNC",
  "key24": "3r9fxpAHJsCJSLJrEEQQnAELJMDV7MWDv4uDMbmQi7cQxCFZoechwYHUHcsf7ULzQqqsm5duaAnEctFhcYbdq5wj",
  "key25": "621vynYefVjT9j9kcDPmW4M96kzuZvstBbJGgS4gshqiYuXxaMMn8T9KcqNSQuKvcWykMf4gMvwYDwRLEyu7FPiY",
  "key26": "5fX1FNFKnScoxwrVyKXBr1XGJoEMjoZcW3EWxkccMG1rJTsnNZeVZrKRiUDhKJdaJk9vvVpMTtByyFvBWW8AxEVx",
  "key27": "4dpMsz7mkoi9yNeQaNGA9b2oEfFtT6g7LkWpijUniT9oqvqqYz4EXADMGrf42p8tzk6fG2AQJfjxTpa75xug5SsK",
  "key28": "3P3XGMX8aHPYgYDxu3bJrxCBnh1YWFhdFkecezK8Ubuy6DJ882jhgCzDP8GgmD6GxnXB4Xg24HsgFb2mnogFmiTN",
  "key29": "5H29xCw8L1jjQpnMfxjqstnKEgTA5sf8zo7AJQwHLtPrnooWnuFwCLicYEN1V1QQx3dxbNEYifudBR3RHbqDKkkF",
  "key30": "5XGcvoPyQcETSkYDFjMxbhWyBhBxLFBi1BsGp1Y1SxL8eFzAyWaBwhbAG6nMQPDzs3dxwoZmhYA9h4p8Wvijo79r",
  "key31": "54uczra8XrS6T48CdQSgqGHYhNSrLnUhcyiyV8qTYqNUU3DSXLMkrNe91vxPwzHfSkMRGny6WuHgwC7KrDxYBT4B",
  "key32": "3vh4Es3L39yPmvJzPvK8GquFgykF4v5P3c4wiBqBvCEJdMrNspPne62qKcVQ3HNe981qFSBDhcqrnSSKWpxCUcz4",
  "key33": "5waxMMJkLPSS29z3pvEg2mCVTKkM9w8aY4urzSm634FR2APkn2LW1j4WxrRWcmwtCj5YfkkgMUxGLHqUAA1Vfczp",
  "key34": "ZQdYvuPneQgHakEjMvP7oHbTDjFmKexN9iqTQBzuunmehweQ5uGE3DdNyk7jzymk785bUagzKYhWQfozc5XSedt",
  "key35": "tTzxNy6eCNXPbsQmbsPLaKWtaqQUBBUxJSCWh3HExrtLeB9eP5z7FdX2svVndAST8pfVHUWropTP4BGNuftbXGd",
  "key36": "4VxDeqwXaR7eu4EUrBfut5i7vY7BNLVizZB96fydYimv7xRtm11iGJ5kBvMetJSC3JFUUqFVEzi881UzviuqdjsZ",
  "key37": "3FH8YjhQaXEFeDPBtatn51AtqY79B5LEPRZWQGXkNfcVChexKvDJ4GJnXDQfVMJTMThRE6eTJqEGAKNUxdqFVC9",
  "key38": "35HrmixGkz9AX6mKs39fyqRJsTz7NMs6hsKbdFWoXWYVxNnzV585YiYb6excNjqon5c3aDLGypFFwNsbZJSZ4VjX",
  "key39": "5SvJqNnksuubA5mgx5iFhdbC9vfYgAuG6sTH28zVhR436BMT4h3CdDHakCNDicQk2N5SgrdDThEkF412tp4ZJxom",
  "key40": "2jQBqwKFwwWCF1FBq3eiS3e5PY65rHPati5qrZU6ttd6atZyeFzxyLKDfsrBa5bSH768juD7NuHJaoducMq6WHni",
  "key41": "5VPNtsyUcjSw4RoBq9b6SAg1H6Y9M8MqmkTgVfu3bHJFivpkdF7Z8iQhG3JLsw9VJqAiNx3acFqaa8Wsmd3b7Zva",
  "key42": "3fziQ66zLQQ8xVFmbMaWqWSxGzUzCitGm9JSt7XhY3uyTpCKbPVYKFg4KQ3cVGwbycc5dvTVAB9V1iEHwiGGQGS7",
  "key43": "t4FmCUvQY41GUs4jQwxfUAEA5DQ2mbmGn2n7yZSYKw7YB1Kyz93uZeku16H1vsCwR7eUQU75hbDvCU1Em5p5kyV",
  "key44": "5EJypWRmzqd1pSx9Eqqb2Sbgndggew5Rj8ipkdAKDe8H9sh7XV7cMkwdXi4aUe1AHjpcuzCvDqSBkBb2wXgBqQ7a",
  "key45": "K7RF6kSa42qhhqPHSJg15hJQTXBuF3ASoT1tKYJZUawoMBgQeAk2EQrCi5Ze1MFJz8ewtk8a7nSrRbchVv5nniT",
  "key46": "3UypsTQ8a8AmUJ7Hb4hsrmEgzeL6Q5CLH7JZLHcjhaXyWRiUqQ79h7NspqkWxTHZaL1pPxq4qgTQgABbBomwBNpi",
  "key47": "1F3DTh5ebvizjRUArjMTH8x6kox7awkYc9wxqngB7pCjkLJREZyVz2P1hHZkU8uDBYEa2pBWDBBMfDWWhXsWfML",
  "key48": "4d51nuVpXL1rjZMH9JAyFfUVJyT9umeu3ZKhtmoFU6eowZoNy4jiMMkWps2vUbN5HQCjJwy35S2etc6zc7EcXAP2"
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
