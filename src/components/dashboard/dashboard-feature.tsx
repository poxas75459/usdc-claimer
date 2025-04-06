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
    "3hdrCQwgsuzjDMoMo4cTH4UQH2VHtiLwfiJCfkzeEvMqpLzo72tM6BSsgx4Lm2cyZscwiz2dCr6himmvw7vLov4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25jFhD3ojHQqQ6UBjeXYZcbZkbxRMuAfenhM8fv3gyiDkGKiTgcoVqRubcr9RRFvK3Y7LF1f6Z7LjEopG8grhnaE",
  "key1": "uEJrzek7Rx6rNu9Xf6fqvPUVbPArURKj1uAfgTULHjwZeFYvEvvW2nxVQ5818jznjujTEh7q9sj2A5Gn2wUjXRu",
  "key2": "531maBo3Bt4XJh1UVrYDNWVAyGtfNcUde1xiS83R6vPo2q1rc4TeyLGdZ1J5HJTnZzZWdUs9PshZbu42va9DJojc",
  "key3": "3Rxit7ZAb9VnmUByUjRmyZGJnf1p6BW8mApwoATTCzZ9xQPfNJWPCGzqKF23XUFihjYEGDaiZrLmZ6mKinMJ4Jcm",
  "key4": "wvHuvBPsTB3h5mbMTuJS6zLQoCweJxW92JquQGczKcowfc9o6PQBvSoYdHs1UUixSqZ9k5RcRdRyPpXcUunC3yr",
  "key5": "5CR6Jvkbn2tieGVJb3rjMgCCN3EkJW38GNKfxUkuEas16utKpD94NJCQxGXz8yRjW4Vm4PTgHH55VzVN6SMno6tu",
  "key6": "3NoEKunt5TYUDPiC7a2LwhkqVJ8AoBjsiEyD9UuoKJ3VBwbjZG7qP27Kpv9ywhaQmeT6fsGWDu5dozFqFBovgphQ",
  "key7": "3Rr9u13ciVfn7RsKh8zz7XnYQJRbnmjrtibZrJggfi1GNqE7NSMpbDVtNygYP71V1qFDnDq83GPs7mJojRxuEzsT",
  "key8": "3Jf62nGwM3MT5q5VsYDXJ4opg5ek734PF7eVHdDDxzTgPEEvqKSrLppecQ8zs2Uu5sLmhfLVckVeoCaFCVHUAJWJ",
  "key9": "3Z5ECnBdbwoM5rexQE82Cng2nEimxfr6KYn1eMkgCcNNwgqm1DtTbxheMt3GohZrg5LQizMp7Xaa9XbY6mSnW9j9",
  "key10": "LB6HKKGfxu943nyT48b4ME47w9CAbBU7s26kPjWSPELZTTUDF3iBwCgG4w4DaFG4QXEhhdR9MbzoM9gep9LU8YB",
  "key11": "rA39uKN98PeU3PN6gjGSCoav2dK1s59ZtzJcy6GGM3rkcYXx1WhZSq3CenWbwwnEpTpL2S1SPwogVWAytYzJq7h",
  "key12": "21DDRCXEaAz8szZ4EJBv6o92CzcCGjAfT436SeKBK4JdfW3pVzp64or9DoZ1bdi9fxjEo2DjzhYhiPpiGEnRNcbk",
  "key13": "3hZUzJeRrkpDPEeT3W6aRwumxfqwNLpDE5qLTFoca48pUa7VFjdjkDjD1BsXMaHjfC4UQhWnDu671pn8UqvihcjZ",
  "key14": "3aoSvXMjF82ZuS49fH6bQDD5fLyoKZ1VaEQjqmQ8E5JL7PgLGa3gADdj3pxPw2Yxs3VjFt3mrceLFb9QuYwXGLu8",
  "key15": "2nRq5LQFVYnBYMCrbm8SYHmyxUXoZexXvuci2i977WQaqoWBFkuiW5KE91St1oFgRpbhG77oTMfwNLPLq5PmWagA",
  "key16": "3wB3wad9Jmuf6VjgeT6Q7YFeWnjVWvuF7Sf4doLHRt6qAr6UpyBE5y7erAdS2nL9Teicj9Up6QmrQR3GX2WUA1K1",
  "key17": "21sR58dbC3RGWJKLNyv35aEiEorAc6akkVAhko88Jx7wbX85hNKjSCGwxLaYwk75ab8f3xzSQ5JPfLq4uzGSiCgf",
  "key18": "4pTmLcxoJLA9Mi3E39f5fe3wt6cfY7cMw8geicu76vyRxDVaSc4WtNbivDtgUmREyEVhTxZQ3dfVd5GDijieTWZp",
  "key19": "4u1Hjd9wVNCqbanGphkCDZK3eygrFv3TVfvTXqFf7AFdkft1bzvHSZnLEPGrm2yNA5dT1dMDfBdihMcXzkpJPWGY",
  "key20": "4AEqqDXRmjqPtsRaxZK2UHoXNP6Six1vrFewY3fBZ5jvSjtSWvQMAFLD6U5FMF4GMabX7tA9tNijU3vt4S5du8bw",
  "key21": "oTjbTB22bCMb2m8atT9fMgBBfaST3uKG7DJ74tQa4f14CahQGGjhpxWQa7N2jRCpoxAaAWdQmLFWG2BkD5Myumk",
  "key22": "5ugBWosnjRupVbrtjDnebgD86veB5WEaZaCWwZk9pVsuCM6EnZAXQkAQAsfbJZaDtv6thoiXjccB4L2A8oaeNfHz",
  "key23": "4TYN1apm3b7Dx6nDAPfgfwfbUg5cE8T6FJHAsKc6GuqJU69aUPP6Lerj85tNP9GKGHKLxBafYjjACqspNrB8gceG",
  "key24": "5p87PRdGnV2sjdGFpniLdDVq9UbvFJcaBGvfaog9bWE5d4JzsMK1pNWa6RQoZk1RSbkS5iD4e7QgDge6rVZNTAnn",
  "key25": "Rdroc5GhHU6zahmf9RHMeKRoZ79cbjV2Brd6gHwARdEiMSkKJmtDWvgS4mPCSEEb2EDbzUUm85ovpcz9xrUAKu5",
  "key26": "5KfzC2EED8TAc4FTGLvSSRKcT563CVnyKfuGPjGjcUtZPfXyhVKxL8gSEkg3NxneUjuJvpbtTiwxA9EHGZw47csX",
  "key27": "613Yjp64nSVnPnFmjfn5gQALGrBTT3bEfcwVMmxvR6y8nqYRGs9UEnwthr4q9rAsQzkDiChQaCMciN1LgXVmD6XA",
  "key28": "36enCHYW9aRHX3yFYh7fS2BLB1FTsZjZzPsTmLeSo5sJx51KMst9UrwcXFpELdhFoQURdKgp5i6DS17ywWn18KjE",
  "key29": "3VBcPXRkayq4auYKoCZT5JM6RCQ4uwtCFSuu59dQiZFPVGEf4eGx1sWxuvn7nByGFUoSJutN9nuQy2J6LWN3cnSY",
  "key30": "5i5CdHTdnyKD8JiXMkAWsLYPV5DcqTrQQ3GM2Yot15Qz75ai3FZ7NHjR1FH7NR9BuxRRD7qZY6WWE1MKVKZhsA4f",
  "key31": "5h7sgRi1XZjSJ2rVnBPM1hkqrXtpsAcHhEfiwNu4XFYBoup6cFTRrprThMtDtRi7Yd6ZYwREcWwKHCawZd4DyowH",
  "key32": "3UMsXbp9qEB9dHfwmnr6CXay6KtRY1PDypY6CqCyVNry3X7p2uwhwuD1RjtLwPbbpXdj72eHhzeeJDrLSf6pc1Ld",
  "key33": "FN2CMcr2BLEHpH9qzSVW7BnkPRqsMaxrqAGQdMy9eyRrHfAGXT4YWr2fQd9SA43GENbXyiw6xUx4KKb3aKMppei",
  "key34": "FPapGBYA3kXmooiNvHhe8kPpxLt5WKdvXnV9CFooeftLacW9jWCMvHkuXYa9vbymeFJ5pox1bBeQV9fdqs2QF22",
  "key35": "3cA7pWuaQE4GBz3ca3bgc4LtBnBHU3kkQhzxjvHvYZiZSjkdVCwXE3RJPXE9Bcm2DY6GjCHUAFc7qjofJsEkuzRF",
  "key36": "4KZ9zK1mzQ51jvvybatKfku449HEEUprZt2VCHn7Xk3S1iDyG2EGYmCFW4Yb2VdzEmzpC5mmeboJPTk7UiaKyUSe",
  "key37": "65v84NPpGConoF2PExo9kvdUqjRvTx2k85tRLW2GtSSdL4R17UPSd9hATNx8rkbtKphvEumTnEDP8YVCyzcSnqed",
  "key38": "P5Tda738QQAtoucuAuU5wb9ZUM6NqyQD4onLXKNm5NdgTSdVBGNkLYET8KonpCmL3Qy2FXYvMaaqeBtWQhrtV2J",
  "key39": "Pe3HqAG7gRvKoy6c4Rq1vmceAdQVQXRuEViqfqEULmLhZyouC8d1xhJz6E8BnwqzjX8eBKSyMKjf9Hm9UZAsjjb",
  "key40": "5p9H5psRP295n5ryv9WDUscK4mUtpnZffvRxjCuqjjHAhWqWU3NZi8t7THtRei5y4VQ85HPEjg2RxLAsZNpE7SSJ",
  "key41": "2xjvnc87J3ES5XKrjPnwEVKW6vmre64TQJnTGrG7mLarsjfCBtz4qxwxvJZnuvENuvcTWxEv9E43LD2SDp4YUnDv",
  "key42": "4yrt6yuZcyASuVEFrk6chza4WVvqnFeYLebwkrQUd8qcdPLX1XQVR77U1yXsccFFGyMBfW5dfs2j3iVnzHDVjKjP",
  "key43": "5bm3SMNan4ZxFoAnCmEgM82NvaiDQ2S8PnR8DPVDZdDUMpsEHi8Swu2XMuoT9WD53KmeduhDk9MczqwhmrbFrTDn",
  "key44": "3bXMem5k2Bzx1gUhnHTSXViwg3MmtdwrcgpVePrG4pyuynJL48FLSDtbNfjiRBm4esAYoCMGhw4agBDtdoDFbVq4",
  "key45": "nG54RuGanjfEsdG9iBkAZD8Cmp7ehezDtEgBWyhagxGQpRmLa1HNGx8FQRriHvMCZbubGfizC1h6TLjCjbZEvLY",
  "key46": "5WN7Nn2mRpPXqUByGzS8B6CFgytmP7eWaBUpCw9nWCnauodm8tbUuCLg47UVvu1Dn4mV1iYt6AFetddwZkq65dkP",
  "key47": "Lgh7mNn5XX6mESiemTZ6HzfZvMXTrqjxzhq9739rZE1FgH6qKSoVMAbis1r1aB6mzN4gDzHhbWKRuLCvcWDrSj5",
  "key48": "F5EVmderYUN2GxFwkRtHnnFkfxLAfNwo627ETxKi9GyqMVafkBzX1ZaLfMwh64RgkZ2GFB9JKr4YLivvGATq5tw",
  "key49": "EXRa2b1kjDhwAer2rKWWLQdauzARtzceDZiDSPBEZRBiiPfHzPX8wFWFNtbapVrDANap1dFwPBA3BGw5yiNC1Ws"
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
