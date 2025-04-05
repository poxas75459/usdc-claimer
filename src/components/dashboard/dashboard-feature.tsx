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
    "2F46g1F4bqZSiQctTs66AGmAK7nhSejqTdC2ZmKXhqGCvUBeUo8ZNn4Q9FXzXYdEdgZHk3SEvCumaFF7EvJhiQH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z98qfuSayyx5E42uqcHhAHKxjfhBaZi39n6BGGSmfmQb58K4fn3b3CpoPET2JshaTnFNer73q5YThb59eTLrqtx",
  "key1": "3PUhprqcPGgDC9vDT5akLiwHbghnyDkvR9ESzA23LqcscK4BxnL7woge3JvPYnhn5YAuJeL2B2bSGzCiJE1wH19Z",
  "key2": "2At3H2UJoCpzcEyLoJ6icQzbgww7ySBBiNjk1qThbo6adv3pwiZe7XK3mmbqDbXNjwLguuNPpHLknDruATF492oX",
  "key3": "5hA4aZJHvzx7J16WUa9YmSq3rLSeP3rGXvYxUvJoNNQ8wDcxQyPrBWFRrHGuB5GDnXuiMvhidzA5bVSeJntEb1Ai",
  "key4": "5hFnQsuvdPfbuKhyJaymKuLs54K456xtHYiDuNVjHyuD1NnwV7jv7puj44TBEhyrosVKuRYSzS25xHr8Q9TUi1H1",
  "key5": "5vv6aX67iye7kXGLsWE9BmiwTAy6MqmwyMdapnrSNhDXo9hv9mbmAR16ftppXd9QGRBB63fMDk6xYraEbEPYHVKU",
  "key6": "2zTJFe2hwtjXSJbEVNMGTfrSEQgxHNdzpBm8W3viGwwTo6rH2nq5kygxSycJRKoPZBMjf9Z1ALeNnEBCdBY7dUqm",
  "key7": "6EFRMM3bNnebZYc1y2jJaGoiqyA8RYHBwqUbgGzT1QZ42nTsHVqhubdBEPoBXvZVhYsVtCTAVVouyxogCmRZJ3p",
  "key8": "4YA6oHtx6wxpHBeBh298qmEVJWt5TuYj6yeqwuQYy67hE9siHLpD3HNTZNH1aRZtiiE1N4FGfNP5UWy7C6YwS4ev",
  "key9": "22ShC4daA1B6DtdAesB5qMnmhSE5CZsCBNFaZSCFaUALfcZcEFvKwuo1GkoMjbBXJ22C2xyFePS1NQVizFxXSQ4N",
  "key10": "2CXBKYiBijcM1nfNSByMzw1QMPYmZXXWCkkheBGW312Xbekvh29YT1igwAK4RUKYHcJyRJDkZUZCH2BsGe8FZdDP",
  "key11": "45zA6oz4tGPXsfDUWQgnrjFXz7tfX6m34U9Fy4aamFRDAuKsLAfNurSahwUyVFZyGDyygi9BkehSL6iAZERfid8P",
  "key12": "1fjGs9afVGbEq9N9oeUF4fj1sYaEhxWVzJon5HsapV1B1yos9bxnmMGg8hdNhUxp3Uc3Vok3a8KXjsyrSS5HJVd",
  "key13": "48fGBuR2w7ynBBRjyr7vM5wPgk24qbPct56rfFQjeCuBg9VSJWemmzqPNuHr5PNtEjohG8j7jLG3rHM83R7GqZqL",
  "key14": "5Ag3zuS9o3gKQBc8XY2YMktdTBeekuLVVXRAW3JaLt738YGP2i7kfozeHgfNy76YJTZUivBMMs4pZ4Gt1KqPVHz",
  "key15": "622fHXGjSunpTCN9JhWjyfqYRyYGefvJTnKTggEsRPmQLXogRDR9sZSHErDfmsFjLQbzy54DUYZ49j79arVoXxe4",
  "key16": "aWhkGiwzYjZSMG24F1iiiquAzz9Vf5qa34Zo7aCsUbA9kkGnkyeaLjmF78MBqkeAuVzwvcRnSsMXSsg6tc5DUhe",
  "key17": "5eGcsZ8uqjsizKkD5DGZMvkYcrKczqMf7JNpL79DyJ3zMkLTfVHkBDHYZXfzVwExUksFHDCMEmGHdaNricd8bNzT",
  "key18": "3YG48C3SZ7rkm7gK1UMFhF94G1GRVZGEAbTCBqaMxecXzMLYhyxSdMFpyeQC3rhFQ7vWkdWPY2RuFrx1Rx9KBAEx",
  "key19": "662j72fEmK2mhy8qwG1uCYTcuX3NS6dfDw2sTfSkNDfdavRp6Sssa6T6PXjyDjHPJQ42a2FnjXAsRbKLN529cK4A",
  "key20": "47SDCVDjNPCPyssiXqXjdFqe9RGwQerfTZqXgEynu9hv585xdUJCfRiiWQUEwX5E7g1oUYm4enELfBgCHP42vuj7",
  "key21": "yJQrJucxRY3cnqhfGmVtKRwuMLcaqYT88grPaJn8MWZuLD645a11ptyFjkPhuGTre5doG4tNHWrJSr7G4C9xiXU",
  "key22": "2ZfVFsm1sgNumRGnYdydUC7xqkFGLjagw8qp7Zzw1DTxSvLeszphmqjAag79JDcmkb3GXKUTHSL6dtwqgmy4XvL6",
  "key23": "5TVyffkTexvP9YbsASqXgmv86TsuRhqv2gid2VfcUvnnv8v67JUafL4sZMJfNWoRqoqTpchwzukrH4bNWWHuZSvF",
  "key24": "2wFZ8adZ86R9LSPtr9VMDENmdfXSDGDCsKzH5g2vezQki6XS9YPTyPVXpQmhJDdoc4ECvCwtDufG87TerxdryGxx",
  "key25": "44qs41HsTummbwr66acMmqCNnCDW7x9MNuUzrVjxFJoj1L9rFYfHfU8SDh3G5J491mFfrUcriJuCAiKvXAZ4DAyv",
  "key26": "5P26WseTNGExPPoa45czVFP8HKgsNDxszbJh7xE2vhQ96EuanQksZB1DLQxxVmFBezUxQJBhesu1vs6y1ibyBRPG",
  "key27": "35PrjjhSBiAZtbvndBuXoFjqrx4XUJumCk8SJoKjXGrsnHRxb6o3QS3Meu5ygftsg2Q8EHhcYPgcAkWwAdxpsFMt",
  "key28": "3AiMkHdYdA1JrZs3a6DCyEqKAmPRcdecBD54tDBwWMejfrHiuvymVkDzVFmj79jxoPG6JmZdKXuR8AtkQXaXgWfB",
  "key29": "5B5y5KyJZsxuJmri2WqYQTAL5yNLEQAPefkbprZbkQKCX4vXZNu4ewxdXtMwRsneAymMsGugy3ddvLD295NbZEhX",
  "key30": "5RdnEzXZ4eqMRccBPNqJT7RSq7YmuAP4dxrx5C9zzKJ1CAKc8e2FT48xpiPdVybHv2af5NrbrwkacFiEFmYkqJk1",
  "key31": "5RgxPNF21yyF5WLVB95KFNjTYabtqx8bQ4KxbiBwtHF4LYDh1qcjaXQERcCiMLatWjgiKtn1XJBXdccUdh68SWZm",
  "key32": "2Eez9jwgS4W7AqYMwQdHnueYKs8PCPwwXfqchAYTP81trU7bhCxjdC9XB89mxW5knvvSDVTzo44cnPGe4WBCFsu8",
  "key33": "4JBTDdha4Se21zK6RW78n6XrANiDEdJcBYZgXL2vuDA4DfEkipxZ7QDh5UTVEYD9upCyQosAPnejdUPvRoeBgADe",
  "key34": "3HuMbpCJqSSVA7mkHLcB2nRr4eXJHUcRLAZffhJqLxFPBkpQgf2JQAQsn6fcFe2ae5V12CKKtV6NBArbmjurETQS",
  "key35": "4FBY84RV6Vj3QvUuVrDr23AKG9tFGtvQKA7tDwonstohPVrdfbNP1G8V2m3SFZXUp3A1ZMWvzo6MyWKZYLLE73H2",
  "key36": "2mqnHZe6mSwaz9t7rnzW7h98FFZY1hHS7Si1i1SC6hgi752TuouhGDcZjf8Mymffd3ED4WUWGZSTEAUyTiB4vqXb",
  "key37": "xsFofD7o34h4zyzRaGyKUoBZzXaQhYufZWwos2uJuBNDp9MPRCcxyM7Sygpny8GvpkeXkuL19PFZEXgYbhSN6VC",
  "key38": "37ugsKWMCqJrXjMXQNBczLoV9QFnyuyDKuZ4r5b3iJCvVzVaqbMhJ3v85TPfjunFeAq4ZvESJtA17Nn9ssroWLah",
  "key39": "3Jpsfynsu6Aqyfx8Njouz4cfL7AYjN7jZHiohkQBKAp5Bbxrysw8tptRJYUAerkXipQDMcNAafG7KTrwVgojDprM",
  "key40": "3cq1zGqmN12GNh1WDZv4GnfLNW15nYG1FX6dGMPmnJ8RzmqYoyxQ2FupyTHTFbNpuramt3CeJDbQPKgRmK39nsPx",
  "key41": "3aCVFuLUcWwqSs7Dsk9M48Wi4NC495nPfD6Cj4KAkiNiRcAgbYMcQ2JfdRejh4gEJeJdZi4fT2s3En7zUghoVBwh",
  "key42": "3fsHV7XRcjj2MPDqsLYrBKQafKvKngxMVK7n6QK64xVTREcqtVsUfQfS8VXErdmn6coTfx1v4Ly6f4SJgz1N2BY4",
  "key43": "4iEnNp3y5GFa2JwxdttHknwxWtjJsAkP2LUJBC4v3J87YfQjQgzUTJp72vofx46cY1v6iz11ujpHx86cbxCfVzWe",
  "key44": "4pukpsU7yAmjvwxfVHMwTwTURarY7yUeR2jQdBHhMDQJ1Rt7z2gyf99hUYgEmjhEWd1dNiDvEUtro55njgX69Hew",
  "key45": "hPc6Ko99p56jw669haY8PVwn8WifNQ63E7zpz6Vtyd7fvk49M5aG6cCqshwScCkteydxfRVN12bnAJQEUDJ5qGK",
  "key46": "3v9ns5qjdtyGpzaVpRHTdzkpfbQsrYhmbUxLt95sfi3g1VTz635Y1Aw9Mvejw7JyFFVHSLmBYntBccvnGsjyKDBc",
  "key47": "3rcz4Y5fqEgP2z6SdZzaGEem6J2BkYVEuw16oVj8wPEyub14HKPSB7zXWvGhHcrkFTgzVPZ7dnHEqRHhRL3maCF7"
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
