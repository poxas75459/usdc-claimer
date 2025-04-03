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
    "4LABs74AmKfxPKALkXTbJJBNzbXCf28YN7wnscJnCGv5SeLg7Q7trVJuFuZFErkDxpzbfK6y7bc6aSdY2NMu4Jyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GynJJz8H3HKYHxxrLwbE2fWS68rMm4gUevXXqhRdRtR9nDar2tahZXsNjHh9aiaAgFgQxKrpdR29uYbRfHYhu6n",
  "key1": "4sVZhGEp3DwbUmxRLH5PprnoiRv2GWNRKspdFkB47FnduATcvmGgHLVH5hgNYZXCikJPXuckNBoidWd3Y6StrFtB",
  "key2": "37CRSrfcmEqjc89rwi7DJDi3niak75vWFbjgctM2ps6jXhEpeHWhif5iXmudd9wWp9cwaK5yePVbWT1RfUw3oCq2",
  "key3": "3vNoPNF8JNN3wQgaWJ9qyHpXJiKVNVf75En7uh2DKTCDZN5akgPKu39EgEbZ6GeBwXb92epRnbbqAQJsRovwfeBk",
  "key4": "59a5GTNBPpknsJap7BtAyg5BvTNFe8dBarfMnBLsRFvVFQZ3kfoXpJYHFBgfdYDUihc7onhepxf5d4LSiBD1D2XT",
  "key5": "FckuCedgyTYJzDVrYHQBeJXankBkK7Ff9vxMPDj4W4TsQ3uEyJ25w92u78FFWSapYE7ttdbeJN9RRfCD9WNiB2t",
  "key6": "5reaPkfZLMTCnFVmz7Ztmd8GoTDUPcczFZh5nSg46FCYYcRT94jc8jtPrzaUy97XKjLU4msJXRwViWZ2QpNu2sQa",
  "key7": "2iKTYJvHUdq61bSmitjocLy9THphbPnMne9AyGwt1hob2UdZVfn21p38dYiLNEhPA7bY8G2Nv9dmgFxh83W4A59z",
  "key8": "3PKWEFpSHdj9btJXxKBiqY9oq9cYeFXJ2feg8M2THtdaQhFaZTLkuPPNB1Dg8hTdBX6fXuA36ahPcaSFocCPXf6a",
  "key9": "5nkik9XDTEL6YrncM8pZRRh2ApuxRRwKex3NfDswNXmxGs55yR5NkdKkCbZCbNYj78n3u7q7dGwbvKUQRj9PecWT",
  "key10": "5Rqv4yTz6z8DZs4iHEZxnnwwFwqXLtQxMJUnp49vncNV1WFpREyWxqBh4MaJPZUUc1Rx2CpCdhMKir1BKux3t1M",
  "key11": "5FMhzruewtxD56vK5WNeHVedpv3rubWVge4FF8vfwkxf2RDCBgo54jjysZo2sjtT4aK8hn5ienxu2xizMg2FzzwX",
  "key12": "4ftSqMii3irmRcvvAU3cNaEfFyRU1qMEHWHt4SUg8rEe96yoseG8YEspcgWwEUf2NpYPmn4KD9XDnWU3iZwvJ4Um",
  "key13": "4p5jD3SSCEgnLwsX4BzWfgcahER2Z19zK4FdAhQEBASbGYq3VNo8XkaDpck3RvZmFXbQKegwCGNubHGMG4AeCTMH",
  "key14": "5YbCZVqr8E29jiwpUpTk42UERW87Wv87nbpzvuM1a4hD6qPPARCaMRWYik32vwJPTNAnutUSFcK3gFaxgqsp9JPi",
  "key15": "4T6nPs76tx7RhTyBHHamxrtmGDKu8BGKQp9HBjRcSHJ3kDfwTbXVaY4uQYeNinxjBvu5CAWfNfEXrPw2g1YmqvMg",
  "key16": "2zP3yHAFy4d1fsQFhYv7rsCiEbWGtyQtUtzqzAoTusa9guuJqknwmBxvhvAYqfkwgbWyV6RNg4egpsKnHR211GBw",
  "key17": "5n3wMMbdthrfQU4q2jfVive2kDQpmHSJuaPdKgEfRNP5b3uj7TobomEKNpWvfNgDPJXP7Wk4znMouaMUZ29ik5Dn",
  "key18": "3mFLT4sWrJb99w3ixmjiZmo6tmJmB3jMKx5Eaq4pmQSjDtK8zQwKZwFi5MEvfmwseNaAjE5yEt2vL5Fu2UTSa3Fb",
  "key19": "5gaaDuoH4Dkt79r847rrKVaSTXcibKPcMpd2UddWcYR76zou1wc6DsGbGyjJJUmL6P3nXw8zZvij8KPQA6ycov7n",
  "key20": "3KRj2MVtFyqhyg7FZkKvATWADJGPeH9KcZ1JAPU8Aj5dDyEA6DzT3pga5k1rZFMyY1nirTszj1NYbyJK7zm93msr",
  "key21": "sM5QCDiB8mr3AzoqcUTjaMFetuX9QaXkagS8Uz4hLsDvRuVbvsxd7fS6nNxsHbESADasoUTBm6U7qKfSp1iTG6E",
  "key22": "48MfxxfUj27K18u15RDPEoMBrt6kz63re89jUYLZQH5rcVjQKMSft3o7UW3Lz8YDqM3xsuR2NEgKcmj3bysUJwHD",
  "key23": "4TXb1bV9SJPwo1VNJWGmRvj2oWCPR9bitZQi7zR7ejP7czkRsCahh8W9QzaBHu1ojmpYhZHseUJH5YvrWJ2E6LCi",
  "key24": "4C3he51qwkdwdcZK7m3h2hVQvhGwpZLJ4Agsioaa9m16Vqc4aayFuuxNQMonn4KCig1FM92MJ3B6e7ewQ2gmLKc",
  "key25": "67BDVdC62SD3vDiaW177oaAVcej8WTxAoQyDcx1JNDYeMzHGaBR4snk4fQt1Bq8svsAuNVzMdiQ8WoFYXRYxBAVC",
  "key26": "53oY4LXtvCfnLRNnm61b4evKm7cQWzovoxZCpajTYVwfBei5xMLEsRunLfs9jNYg5K41fUGefPio2gC1JC3wFThA",
  "key27": "3p3RgR9GoBM6YtA9PURngdvTgn53t2DJ4PvNdKWiMKsLGER5ybswnFhzTkipPF8KDpu4n6UWKwEE6zGFt99pLHPq",
  "key28": "2dFBQzqGwYqwhkEQieSixEG9VqXhaJPEACyLem4i9x9SUaeDNyrkUWZGCWjgq261vyhufFDBufucY7cjeJDRyg7N",
  "key29": "2KscuhzNynfcw4qsU7e5C2ZuiasYdpUpLyfV9HBnLuPqDtJWofrjrKVr6o8MhVB6yrq9ttnNcHvQAaGNZB8pWjWM",
  "key30": "24y3iy2Mi27wUCr78kHcC7f8nhimSYq9E4tQMt4dMBFHb9cxp7DtF2CfBJVuMQq7Fq2NTUKHizkEuaEMmnXjFxFB",
  "key31": "NsPNZJyqMdH9kgzVBcLDvoisFFpmNgL1pm3s4WTEN3Gt5nhBdnvtx3NhAfMWpPJWGPMC9a7KUyGRGD8wFy8ZX86",
  "key32": "5ubhji7SDnfQAgiB22JmNb8hpxwoSuqkWDympGZiknHRGB4GrJedkAKHUcn8hBEeECXiq6CeGvPLN8KMfqPpEZKc",
  "key33": "52tbnAc3A5YcaiVaiWEfsrrNsi5bBYuNrYxTmitANm658mFAj1stdvY773jcnhQam6Za2o8toyKNfV36v532sUGo",
  "key34": "2ztY3oTzeWFTQ32RPQPW1qRWp7g6KA6HDUtmzGTLSKtyVhwM1FurKdqLAEJYWAmbMWq34eV3Ke9TzQ1zgK2SU84x",
  "key35": "5GPNcn3cMatnTHPJtpH2Se89JQvuw2nt6dY5KhKREzePvMgg86hSpYtdckWxnMkDsSgi2kdgsYnGgisUgLpsoNsb",
  "key36": "4T2EvFDesWX2vCgdueCcjCYWjvnMbdbEoxgsNrXpr5noLDw2LyqKpakba4etwDoEet5SYjpxpxGPw7koQqzHNUrK",
  "key37": "2AThPSnKw5qD6jZL5oBhopfrKraohHsjf1qpTtWJYEXZ1uuSUvhHkVEwv9LDCJJiqRt3YjiMoBteePPF7k2paXVF",
  "key38": "zQxHEX8V4LwcQ4HtnLPgnDRo1vmGrbPa12pAgYgd8DJZChhWVndxk5oQSGCc4SZkNZU7qe5pDW7v8zD2KTn5KuA",
  "key39": "5MG6gehv1LhewHJtq514Vtke1s3wn1fLEVzuHptmq95XRKRjYyXwmehz4ca15EEFUpWxpHDTefoUiUd3FgFqFQNW",
  "key40": "4do7yBDfRSBiEEZG5S7VwY1MULwjnHNK8d2mrKP9Cn7oXiLjwwfPAMH6KZJegHzRf8pv2Bwhj5uS6vmE8F7BVptn"
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
