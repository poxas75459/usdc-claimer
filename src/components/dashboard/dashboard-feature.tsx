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
    "32f6GvqpfMsrq1LLr99YvJhqDbcbiVgN2rkmBgND9u1w7QLaFBzD7sZJKXior2XCAPoCkzqZPQAdmW7yPpF7P7ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pTrSrVHj8hmogMsEtcBQauj6P6z75Au6zs6HB4gbL8H2SmQEafjufCVGtwwSoFBBFF84wxzX1BgWAZmKeANvenZ",
  "key1": "2dfijowzHEjsTho7htQjsXskKGYLRvTviiGbNXXgoTgvfZ2FDVF7duirHi63ZAhcGTEhrweZT1aMB2j7pBjvRUFG",
  "key2": "2Cf2T3dmbG8rxLtA3guo4MSRbgBW92SibwWVT5r7hJ2PG4bek831YAUJxmM2Gxne661ReWCitaV6ghGdXHh4jdaz",
  "key3": "44LFZHr8FtgwSzjA9UHewT9A3HCLAimc76ZArDdudrBq8T3WCWSixPzuHmtSB5HSSmoo76ZhHHW5KY5Jf6BkqiUe",
  "key4": "2hApmwufRcKZEGifWsQ2xECp6NdKhxYCJFbsmqTghGP23iMqpbWQ77auGkWnGmSYoGSqYZWmQuR6oQVoVnF9HVFF",
  "key5": "2nZs3owK2Er5TW1RgpyQFiEbq5dGMMN9rUTyNFVHLGYQ9PkboY3rH28CuP3mMGiuWY5vhJLvdCt38wPbghftuoCF",
  "key6": "56j4ooDnb8UerpU5w9rH7GYhPoAggF34ATBfEGiAXnfcu5XDgQaqwS3PWJSaS3AN7iWdUp4Uo6oKZho6ZiqrqZAy",
  "key7": "5X4wNNk9H4FWijKoieta7K3XyiGXQmmbRDPND7eeZjG91ZEc8znXYKrDPkRKFTr2pA4UG6hv6sFmGducgMjbtAyv",
  "key8": "3JySP4W3VXUZq3DuMJKaTadSJcPq2p1GtQcEBX4WYsJUmqVwEDmw3QBUAEm9RbQLNep8Qn22bTcXAn641CZ2Hk9v",
  "key9": "mEWqRExwq8MrT1h9D6Wd6t38iWU1AyTQSUvFdzR7Swa2Tnswf6ZzGSZ9VYf8NMZ48w5383DoyqPdSQPJWdMTrvz",
  "key10": "5JvpSeUjP6V2CzVBp4Ht1JE9xCcdFMyyngcGFVN2WvxdnqwGwAggznVbX1BYqX1LhRXYoUrJHtEEJRNYe9WA4kT4",
  "key11": "3P3CDqRyZnSwaPSBe7w8RBnyRGUJ1MCs3odxpE6ycNk3ZqASTeX6u4xB2CtkWiBbfeAdzjPz6Fp9W9vPRTtZBRp4",
  "key12": "2xnX1uvG5kuoGAMfdg7rfyaUo94wPKMdBx5M7CR4QcvcMd54BoXwmbc6GQ6thrnQDNjXAsAWgihrhboi9TN5YXcR",
  "key13": "5d5msQ1AqZL3RPXHxLTUMPAMJa1T2V3mgoTpsQKaVdLLKVFscwdquqsvYzhxzk2rPh42Sqz9B94UPZJpnfg26nJ8",
  "key14": "5VseSNKcyGmPt5wVbkA1XyHRHNobkpi1tNZ8oUb3NeB6j9mDCLZi125B4FiySv7GZvTJzdEumimrYcUYg5BDPeF2",
  "key15": "3qfnRwK6TTrArDnkMXfyBMA9xvq5PqQinzC78VnktnTvjtZ8aKzDH8tquyhkQnSEePaYF5MU9Ls1tqMb8uX5g8Vx",
  "key16": "5QdHuMuELWx5wwudquFyfF5hcRzmFYiwbJYsZdvVgEfcSGPE8TqD1QYPEDvucp7gUXUmKSb6RbzstyAL52RG39P6",
  "key17": "37i8ybguHQh99yXdDVMKKNUHsPBXdmxtuwe3DLtik97SrLpzdjmaLdSj92zxBgqGwgwbLvGXSprNx6Jze8Cda4CT",
  "key18": "3DwRmTvvLnJ7CmLc9x7r32c927v6kRnXkQtnHqvBgjUT1GUqD23wZLc8vXrUFVgTGY4Tc2JhLc1WonGjDWx4rZAq",
  "key19": "JjRQdZiBMy9CsRsJifkeLQfvnaDGKxpFphwhrXCG8VyBST3MBi5LpD6FyWw2s2nji1Mqa171NoK1JVQLcCdipmR",
  "key20": "3py6hq1afUymAfzYfEsDR1cCbcYqodKbuX14YaUP12TC3uWywxfvuBTKj4G3iQFgLJsRc98Sa4reJFT4w9zeMm2K",
  "key21": "2GWf7z5gUYWBY7FMGnW73P6nbnwGNza9RxdTpfRDYJmU2QEfgg5oAjMB1n3XoSTwjPSptzWMyxR4qfXr6uuXxCPv",
  "key22": "3YtsV5ayipf386nuWc1srTWnGGFXhCjN9yE6kQcL14nX1hq58ikz2gHPWnUcnvU3UT5Z9ckytGicsWTXSvH5y1KM",
  "key23": "4GvgRtCsZfxepf5QW5H55N6cUrYsbESGF3SXisE7WJUyAzJCSXAkMEeFRHAfeX32cmAZnuJ3jp2pEMLuNobNvDPb",
  "key24": "oFL5AuTxaC3dxuurjFitkczuq1p2eGvHkoukpJXfhGHDbuTGtur9J9DxB1mJoHL71KFdDLVotydh31fUyefpZQF",
  "key25": "3YdeWR9kacK9UMjaW54aYkYCo5YUrj3moVeamgQ6Sz2aYo2Si82bn45C4AyAEVi1x67hCjUJJPU7BhWA4cG9CEmF",
  "key26": "3N7Ri1ReoEqorc4mqSXEzxPku6FNHRHr2Rc3ABS1UFgUAGHXmiuge4h6A2X5ApurnqK239kzBnHmhaYEuQ5U91oZ",
  "key27": "3gKFbAk1WEvqx87eQWEVeaaGBAy8M7DvS7F9qvW3F46CjdjUTv4Nv6gwBgjn8b7DGv7HAxp49BnnGqAQBcD99dJV",
  "key28": "artXJArWopTwE5t1am42WDFaJ5WSdLnLZSzpjCd7MMhZQVzov1x5XwiR8XrN9drHM4v9bwP9RKe3JRKDeAMR1wM",
  "key29": "3Tkt8WgyRARZ2BsJ4aCVxYuv3m9TeGpHoHaCskvGDco95anGvnUzZ8YfmJPedKhNSfJfseXkmZQZWbtp3AdnPsgt",
  "key30": "2UZ9zjKxkqR4tcp9U66xRDbBmDoe2P41qQhfU6nDVJpqAWWbJnZ8PpE5rGMtHFy5PPc7K2ZU16aQ6r1vf11wn5M5",
  "key31": "LeibqKJ4FMPrywgrvN4f56TzsK5aUtyJP9PkXSxmWVk6vju4ppQRMafc8odF1W6KhrcrUZvEdx12Wj2WHdJKth6",
  "key32": "59Ju2NqZMAnJxkzTXnEpPvtcNs8e64nFnNmG9Gf4QP9uVbyJJceTBZa24hDXkGnTeo8SDh6ARDJUj4qTfRn57BM8",
  "key33": "2CnwSUcP1SwJmYi62LC94X78UBcHtFqUctXmyD6H3qA65ZQ57Fq2uNCUpni6GiMBo1gGU2Tqr1dy9EBUWysAdJvP",
  "key34": "2X7MBnmccijw16WiJq81SSsibeVXkz7h4tJQDyrxb2BTE6bii6PbnSbW1T7jcYxC92dqqsTjmdRVCpp3Hg93b1t2",
  "key35": "iKFg6ycJ11FZGWvxg2sfhi4tc8zdgdJhPZ3mpWP4e5XRXGnNqvqgSvbyEScct9FZGqCTg9MuqJius4WWSRApt8K",
  "key36": "3BUpZ7o7ywURHmWd5M9ftj1o3RSHorBXXSoDW4yrw6oHLC93vhCdAdRSQ3Jy92pYHDG6jPxta2DjaEdK4zGKgJGk",
  "key37": "j7tzJz4qBCGM1WszTcQYa8ektLag9E2dSwVbHP18dCb25C4jjeAvkLCjHMoMhUU2ssRn8zo8hxuSMHYbE1mXi5G",
  "key38": "4cBkHrK2XnoLtndFaqZRkC7CyFjJapBTHSGdoS3X3TnkWHLRW1KL4txiNfjcbWfcuRWFrMdBhZQpj7s4sMbNQ9Xu"
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
