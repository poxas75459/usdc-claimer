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
    "iKtvt7QcmsGPPjJLbbA6RWtAWL4T9M6ibAQgp19zgcRNAKJnafqVHdbSpJsF5jbny4L7LpDyauFBfS5UsFSnbNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bwoMHjrfGcojRMmNc4mGw5FVusMrX1XNUvCmNbjpEFtkkReyZ8Cgg1GNuvVzSSDmtqqj3Hq2SC6LH6eV8H6s1GK",
  "key1": "5BGRARjvLXPfLSrwF9bEWEgtpJM2U4LygeeKXtrbW5vykr5bAsKFoR1yT9KjbHcidM2sqYS9ZPqbbL9fBtswSQVv",
  "key2": "4876CA2ySBGhLU2vpgwnXqds7tozX2AQw1xjzhhsqjh9Qpn9Za12Av4EguWvGrPJEz7xGhVe6SwRGDYKoHD7mix3",
  "key3": "318c2TdWQvMZ4X9y3arN7SLHcHKQzj8G2nHMNejfZcmfvRtU3xJid8B8jiKwkmFCTVxgg8mNuMGVcEi2AUwTF63g",
  "key4": "BPVMh7HiNRBQUTfVBjN4UTskaptBxkXb3tKNeTUfrfHu8DWBNyVu6bUL7TXsVBBtpyGgjQcdpk4H8uBUzj6Z3Hd",
  "key5": "4HWA3RbrpnWueQrrubDRwFgrmpofSPgxK4Vrh1Gj4LEbVhoBjvbmPuBZM1tVzp5dBdZGqwJn3FkK2yY32T71N6kL",
  "key6": "5nHaagrwRZxHCDNKHJ8Kt1F3EzZ6pHUo1cMV1ZEU4LTFq6Q5wu5aF13xbWkvYPwTkRVxuGjyMnDU9ffPXgtw8HNh",
  "key7": "8ExTceMCNmDdnF3BfM7QLVR3Rz1L6tDhf1ttq4MP8WAoyvhqKFNHBWhngyLenK1sVf9DrVQvfnVH2P1N7iXgjZe",
  "key8": "4fpsEefDDhAgNxT4Ky1d29nn79uJJFQVBofiYdRVA6gJWNvZZQ6Fp1s9eA8SnW2UkJFQWroQjnn53iTJnz3WtjLn",
  "key9": "2aKMPucptdfTtDBSBHFvP6k9Pq36D4f8fcgWaBhYesjQ31beh64sCTnZEjuQW1CZLfvphT1ZPaS1PPGwCJBKuggp",
  "key10": "3k6mnSNfXPxc42y9e5hcKzMi5JGapPLjZ8CbfkExSm5knK6eHjikvb35R5ziHWnDNhZzzzVskXeWQtxKnfxt2rKx",
  "key11": "5zeSoVg2pGQLoaJwB2buy26Gj3NKTUJyyz3ssQ1h3CztYCP3TGSFbchRiXrYSj7TP2xHhifxwTtTj9rGQNvRRp1v",
  "key12": "4yQXtkoEWUfsoaRPX11CvCpaYmNNsaJYbNwGV37dtroZfxzGn6wR9VN6hk4Vof6prjmcVYhJgAvteffhSVA5hEnx",
  "key13": "3nCVw5RkAjT3AQbpEUWe9yUnmU9JgFKU9yoaKe3Ezd4KbRjCUk1bUBTWAK2SZK768NgN1E8KrareRSjTrEqyEzcc",
  "key14": "45UEsUdDJQo2aWsqnvBpBSmyurs8uPEHVusb1mUz6V7fHxDZDW1N2D4jSVM77qArDgcKMEv4TMw2b4P1RsgpUm1h",
  "key15": "e2WER3MVo6AMsiDPewWN2C7GR1zLQzcBpYqQMhknzSu71JcrmvyJT4jWZYBDuj6WKx31ojHumKdkqKFF5Wuvtbz",
  "key16": "4RsdKZm7Gmy1jbpNjWBxtKrs5dA7nCqzhMNuNPhx9oS5sFVvTWFPNUcfrq6fiXGAjhWa3WCnx3kp4yQyfoALAVZd",
  "key17": "5Rep9FMS9PANjdpZVmmein7c2KVDpeNKpG2kxzy85YmVGjLjQw4NYbpmeCWrn9gXKPi2Gmy3KCCy1QgV1o41oPkD",
  "key18": "5GeBdYEbTTzWGcMqcGGZRFguiRWMqAqNru2ftZ6RP4PkfzpE2XWUXmf7UAZKwQdLEvXFNknu4yJcZcauzTYYuxeh",
  "key19": "cvwd8dU8pBikf7cgLsetYH3Xg2pQpqejB1hd9PXndi9FJ3DuRWuUjX2HZ7rjGq3Ybqr7WRPwyXNRHZLTE28R2K6",
  "key20": "213vqtoV7T7wFMvkdtLi6QD9j8ViQp6SydWW53xuPunqWVrnTnpJBirH9Wqy3pGqiusQkV121sdiHGVZvfLaeRqH",
  "key21": "4wGSGT5RRmZjwLVbSRuGmjHZhgBbqXbfRvbcS3ib9Rk8DuKS73YA2VhvEGQfQz5v2xJuWwbR2BUVosxnRMsMWEAW",
  "key22": "22nu75fkqyG6JLEF2z6f1XLGTnjV3F89XRKt9PLXJyxAP7ftFnmJVxbMwrzZu8TtreSQh8MZUqBnfLowx9HeVDxq",
  "key23": "3GLpq3CMxf5PoTkStCfUz4hnEWd9xYygiC5K9ZJweLp7eaZrBMFAkDEtmCVKTGzRwABGcFCTUNYvTSQujUFeuy7H",
  "key24": "5bBVTWAS5m6Ut5GhVbrE8PiZb5Y2HSyB6AcBJmiuuuRKAxE3BwNLtPitCsP1te6anCNUUndC5x4BbwtxrwZnrFW6",
  "key25": "3CBzRYk77PYrGXHf9ukFMQUWSkXFftB8iFhiQdexJaFyAPN79ZvvbES9kup74y51G4UHkPNJ4S1AjN4Bj2oaPhgX",
  "key26": "4HTTSZjRXZuQk6KWZdoUQMsrTtg9xhegkAGA6zbUw5hKju6uUZuE31iyzWPjwWmQYt7tuqMbhR2VvBZX2ozZAHP6",
  "key27": "4nMA79mBs1nyYFJ4jZfucV1TqmWTp6xfkfr1WcK71bu5ydY7yYrcvUspq3tEFgavzrk1EeGRbapqVb1jWrrKG7AC",
  "key28": "4eCSjyPb55k9sKxv9VoQthRdUMKq69aDyzbYSHNBzFynBdiDugA4oamsf6KVA9kDmoj6hYqkHxhFToqvi8p2tAps",
  "key29": "UcG4NFK8UJJRKn3v9RrvNhh1dpX2RG2r1YimAXdJoUJthUmTCXUk4NBigpPNa5yPm8xR9LK13jNyMKtgtSSVXt2",
  "key30": "5FBv4iQyTptSRhtaTwLUSMJ3JECh3Z2NEc5UTSDsFVophe9fsC9EGspumW1mRAnTf8XYaHHV7TgX55isV374t1Dc",
  "key31": "4Q6Y5Gz6YCJvHEkVGgeevUE2tk12aNS5csUoif5rh2TK4vnjT83RLwsLepWmd9QTaR4AtLzgXgjjkuUvUJjs1r5p",
  "key32": "2DmCxk77UDtqBwT6PVBJRskVMBQXmomm9WhaeMd56JBTSqdtU2DVaxWGRRaw36ykg7eC5uhhWwR1JVqkqzrHVhA3",
  "key33": "3u3kFwJDrsCWL3wkXPPo7zgdGeVqQubKDXaa1FsK4p9poE5rDPWPjY6AJSS5h46NDREzwH3z4McdZjRv88bJrRPk",
  "key34": "qSJ4FcPZgUYkXVd1koNna2oYibjvrQ5jV9ZuVc1bDBV7S17JaSRseNuELFtsddnTWb6JRpUENbE9owpJiN1TUNX",
  "key35": "5kphpgecFH6gD2PosTr1eThoGoKtL6ESpnc9tQU4cASZsszYmkgbBLFEsdwDUsNsW6ZpYDb4LpjNCVYoNhf1aaY7",
  "key36": "JiuCFZCEB4tEDVBgRbUtem5rjVsT1badCMmbAcBNC33oEk49tqFpZbACJ9k9gkaVx3nPSavCVtdJhS42nwAbNyZ",
  "key37": "2Fbq8ym9ULNcMWww6SEYGoXFvPSX1Fnsv1uwEXcaR6ybepKzNgsRqUqM8i9HLko4E1dSAcJhWqsFjWxHgiyBzrnJ",
  "key38": "66viQ9XzXX5mPttsKTupfDVSu9aHHYZH3TdpzEDaK9C8dP86XaimbCQaDni5JeHtpmDtoRhM8qYFE29M6QreEVwJ",
  "key39": "5dRBMrr1UoyesryUnzK83iUoKxkDBJVoQbxVSX9YBjX3nuuGH9ZEZxn8EwkbC9wFy1phvNPGkrBSwLRvs9dSCDfH",
  "key40": "2BDP1TTq2Cr1FkgAhVhmFXLqWR6J5iBTTBRm6HUZWCKndrqKZdCDuRvC7aMBVijYm5Co3z1ANzidpnAL4TMarxn3",
  "key41": "43jRksPNzeE4V34DRW1DgRZ6Wgqbm23X5Xh4koXNB5kvEAEDqAaiV3GcxGoozan1zwcVuaCyfL5CXhm6r2XMFxWX",
  "key42": "27MfzeibpnFLvGbJv3aCbTgHDLGogPYSpUVUnJaggxAgv4WqCfs4YQs1YFffy5vk7cfafZ915FNwzkBPJfpJyNua",
  "key43": "tpjtqqEB3dX4jmZeNTjZw6KjSU7j4asapkdxw6z37nrZduBaRSe6eZrAULg87Gffgf7TPhrMiVJBPzAYC9KUXfz",
  "key44": "4cgo3pxqywiWbim4MRBpczayiVqnPXWbuPnWWGKkt2JfLPStcwtaqcYPGfSZkjL4YMTKRUrrRqmAHNPm8L5BKVYS",
  "key45": "3c62aH6KVMURkmuxmhqc6tvSD8vhVhkmfesqHnHHFBcYEPump5jzQjRnpZQoLYnV73Dks1xuYBnHcFrvbrSkngdd",
  "key46": "2A5cMvc1ot9QsLoN7TrBiuUn3GapbZWqjadG9StfPSdyUuj4Zp5oW6n9v9tuQ8e22V3CT8XJuEwqz5B9hoHepjib"
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
