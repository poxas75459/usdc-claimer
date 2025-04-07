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
    "5XS7u5eccH1ftuPMbFg1Ui36M3u3L7RKCQDXaxrLJY9woBLb5zG2g4g2QHTdcFkHWNVWtKAeutUY3sNSgFgE2h1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31xJf5k4z3AbiLKT5wqGRvKCd7AKghj9kmsU5jLcnCiLYczg3pUY8xeSYbtrrLprnGf9vMbMhViDQFVnS5zH3hP9",
  "key1": "Y7gpacK29QUVmdHXDrKu2TEfKQrGvkpEdFKhTNwZNRWqbk2FRTid3UQ2xxacUfVKCBSw5aEm4g6A3Mn2UbVBTqf",
  "key2": "ieqFswZLJc9PZGRVDH2AtsThHy7NAxw8vLfGhSc2cewmJeZiNsez1gaKaWnwqxUcqShDev3c8RPZKnyTUwKZ4bT",
  "key3": "5m77R4Tsv6DAoW6JPk6fhStAQeVjNuK6yUkfeUfHdiJFZg2eoqpoYVtaUkY1vETizeic4hrSkdCR8PdqeGN8QZSn",
  "key4": "4k8SCpwzovFjmkWM18uoq48TZANLcLw9VTHRgQvDm5airtKKZVYNbEjb6foCwaN75KV3bLSvh2GHUageFLVG2Zs6",
  "key5": "3T3PyPXtii2x5L9US4TadLP6TwQ5QgZCENVoGGvgTfEQpYs3nWexGYRXfwZSbuwKnx2frrPBa6WFA1Xk8eP3HZ9F",
  "key6": "4ubqZK4JGmg9kMw3mjH8a63VEVRtCpfgUXnRfyvStuzprPYrAEP9G1Swb9PhDTJP96HkhwvuGkUbH4bMDcegtELi",
  "key7": "D1GGuK88ch57aDF77e6hgN7Sy1B2nSYS3dgJWZ54bbMLX4D2HRFdjUMM5uHSVaWifxFAvhuRtSpdWCU4ZuGM1wA",
  "key8": "55ci96LjmeEeacfnijncD12a6FbewbmR5Xzokq3F6r5SgX4QQEgoAdYxvDMkTPP4bdbU3UmLZkpksNZxtiCic8oT",
  "key9": "2BTbiDKvgUCRQ8QHjWSJSkb9AFQK86Er8b3SRT7FRnnmJGPxUqJjK8dSMCQ9EjLBatwNCWPZJLWynhrciw6jscrc",
  "key10": "36xb7BqYYutiMvG5kWF3EJskixLPAjcsKez69FZhcZFTWpfsXBJVgt4TzUtxZodfZ9icwWZQXeb1Tdhg3Q3VirYG",
  "key11": "2b1T2So86UFs6WSP9mHVkYmAsheaRtNG79wbNDu2FrbkXEcynmWgUqxT6kf3NyS5k8gy4G6dB8FSge2nkPXtaGvc",
  "key12": "4UuYRxnshdPRYkzs7rx18hooKuk7JfcfKCt5DqUmJreNDoPTX5KdP2R1E24iVuHoUQBdGvnyctJUzsA3eC2XQ3m",
  "key13": "38pD6CG4uunJYFZ4rDuHbN73PMvzG2T2QViNRS5h9czEZaWo24M4sQSrGiWbApmwSYYWeaH2r8E4d4Eupqu16fjR",
  "key14": "9Sk1f3WJ3cWb2A9q9E372bpTHQC5u1fMbbkpmVoohG6uM6A9PkLWb44xbkT62WqhPcSzXQQY32E4wMbqTR3To7P",
  "key15": "3s2EQyB4pSP2F5vQEkB4teDGZeiXr14XDn4E6DpM235r84QVuLxWMMTvk1QytW7y2nHgkXvxyALmDJt3q47DPqki",
  "key16": "4tWEC69nnJMTjwMMZdZXNVt8NiUdLzVQiGa6Jsh4HWYPMjwFfooiDUcQV9eioCAb9VZT8GJETSxd2979372yBBnK",
  "key17": "2PeRx6D1gdoRWxS5bRX9PkhhxnP9dEBHHYgiSjwfrBmgHpmx1GcAtMhZT3jUSjpWit5oGRPTHjEKNmjBEuRwEgLH",
  "key18": "3AZbTasLmk4Jn5AwnF1LK9VfBYPSwckxRtKtB3nHGyhwjeMhBfMVLBA3KNApE9zNxebGNxF6VjMEEexFWwvb46pQ",
  "key19": "Bvgw3Rn6rYdQDeWjm2zSmgwhbaZfY9PseExc5CGaKgipSfrAwQKCG5UPyfaPCLRAfaZmKYUe9kKipi3Vgsaraoc",
  "key20": "4cTz1RAyZ6HeQCekcL84C99iGs5qcGou6Xz7Ln8FMECEAXGYrfFPEX6L3s8RkC1Bh9EnjoFQ2qbKYHj6XwfdVJ53",
  "key21": "5zJkd9CYDghLxdcTnwoBt7q3EWXtJVobDDngBS5n9V5uXisLx7VWGkCPXokk2m8iD6mbByxrsXU3B9j3NygtEF9y",
  "key22": "9hXK3hGMJ5o7V3ARuSEjbDXTA94FWbnZd2bmqvGmJUQYqGLSCQXL5XH5mX8BHixPkMNy51hTPpNL42NC3yj8t1q",
  "key23": "a6bESPcheQyxcJm71eVni9CGVz7mg3nU8G5jtzpPRDGUGeagjX5vuo95YVuGhAo97Tsk35GvCSkaJjzsFPZcDpV",
  "key24": "2muZFziTRDLj8Ze515nZ4YbEbCdzJwz5AtzdM6HqJyeLbC6QE4Z3H9iqLaHhySVDBwALGwor1pky7z4fuJGgYAnn",
  "key25": "2Ys5vRZtzPZwo6ZukV3oircXCkATv5vHkFmi9UujZg6Y98p1VYGqeSpaDkvViLZHq4d3Rr1SPcrQEmPMjghV7e9m",
  "key26": "5GwJHCFMAgq53Xtoc5n1rwh86GbkzxJrUUUcP1hEzzTscJJar6Jesuv61E5DYyvRsg1cqdDnLcvnsrurtymxxn3j",
  "key27": "4kyzyra7r5Zj3PjLMWXgCWtPb1zS5kZmyzCz6YJmbhGHGdb6yz4hgcdPRWFrRFPVQxbEmcRHSDkXx11ydJ2aFMGe",
  "key28": "5idGWqTspFWftZMdBZwTYY8PHzhyWD41Zxot82CKvVWCZvRYuCcmuCc3HE4mdx7udWD41c3CjFjVpdTHxFBaipk8",
  "key29": "5wZYJRsWwn5vyMCTJhWe3wUn95PujXFUAMyu5dizPnrW7bA1RGk1zxFPxyDnakKyYXxt3vu6vFGssU1bqE4upbNP",
  "key30": "2euxGknvnWE2kxhGyAvjXDiQsa59YgZrzZZtPyawz5KPEXFx9BE49TymKrRV4s3ohRb5PwtNSzLVxcSqqWQHVjhM",
  "key31": "4kuqGAHeLWQehWcxDgBzpA2hEd2SdN2tG6xzYaBPKq513cfkpwdw7J6GtB3GDeAKespkxNdeqNeZucM6sZLrU92v",
  "key32": "2kzKdbg7hDzNtJf1WNZVvunLetwBwn8qYxpoX2FGu1s34htDQpzRVPChBiJyYi2tMz9sGWEuPAXHg7d7LJZxGSYP",
  "key33": "VJS6pneykf1NRaLDeTVXsLRKvMKXwQaDUiq6sZAjq7Fc4XPdj4Lu64bQAGLfn2Q7ou3YcmygdVsWK7KpRW677eY",
  "key34": "4LbESU6cwcicEoL69BjzsnunFSgw2FMaSPyULJhALKdc9U6Zvqcmc76bi7kGUnRkfNtK1yQn66VPSsE4b9Egj6gx",
  "key35": "2oSFK1TxLZHjg8NeBQAssig1MMD5j2odwy6N9YEzuMPthMw7CD6yAUbH3nFY8p1VGHTvdDdejiVgFC88WKNz21KZ",
  "key36": "5spATa55VaNHkLxqQSp78AWN7uhp52zRDWWxGG1faqUzoy5GnMR1WixzapUCRBiGyy23mQ5SMnM7UCQoq8SUC5ft",
  "key37": "4m11Gyo4jp4Zf7HVDoMZsxPUVySWBCtbdxodAMicGGkZfGonSY483hdBKVifxccZsHqutoCxJB2n8igVu6nQqWmH",
  "key38": "4EocdtYAvRSPmRwhY13Us8p1G2nkRfb4oRotxDjY4fRBTeBao4zeikCeVLx43UhFNCxpnU3NpYQZLL5SF3JMsFCF",
  "key39": "rfMNkBsCvjs4Rye5LtSqLizcUbULdqBSkxccYGjkBLnQE92m1rmoL9FXdKdSQE2C3g5oZLr1YS3c7T8pnYGmfbv",
  "key40": "4g1L9ttp2QBU9HNTfjMjwZU1xrxe9YvGCXWmptGbcDmonugAPQfJmDS9wHjpgB8C5FeJUYJhS4tabb738vdWimiT",
  "key41": "2UdsJZpHXyFYANQjsjjSEbYVim8FtFVtTnrT2iGcgigXpimbmeqjq4u4CDDs6fjRef6cYhjznMSsujvrjvkqcqJT"
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
