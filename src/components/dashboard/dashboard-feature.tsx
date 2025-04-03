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
    "5t7aH1axQBwoup2YBGzXaWUsNytNAHNQt2iF1g2GqatcaXj8XPg3pLpKvNyk4QZEGzh3qYDwJLrmRXUdPcZ6yT19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d4uLyAgbZSwDfjFAriqsusFFHAQ545M8QNxWtnjjHtRagvySRx3FNKEUdm8uVWY2jJZdTRbHJaZdh11LsvACtVv",
  "key1": "4frZDFZHkLACKrGnTa5nWmQQuwErwcmoWg8SJmFjyMcmihWcFhZVf77mRSNxZBFDEoWvXt9ZBtW8QWGZvc4n5Sgb",
  "key2": "3JCWa3nLpiooNttCkxVi4QB7tAMMxWqwjkKVDW8NDXRxpH1yuqALF6qZ9VrQEZ5SHGSz6pGBro78GSqKf5LQiRrg",
  "key3": "2ywn2BEmGxYaVKhWL1f9SF7C2EaKQMsXKf7dboF7VLbYkcJ5UHVHvEnNYsNBTsyfS5Dmb6hDcKPsM6ijUotpksiD",
  "key4": "TFozWaXXRs63bVNGkqmfVt5XaR56EdFtKtiCbq87tTEmifTjiezWGpof5Wh27QCBLjirGUaTbYzpG8DJC79zd1T",
  "key5": "iuadPnQyi13kA7TutykgJfJeo4Vj59TsYozRgpv5gRqUxqaRkAV9oDdVDfANPpYBUYQ8scuBzJTAXgBxCwLqpHL",
  "key6": "uutMc3aokekRewbkxR1xcVGgLsaa88Hd8PrtVKV6QpxEiqKUQqFGmoDx4DXbyoUmBNLrLAd9oK5UhUmA2FGys4d",
  "key7": "3zePJ6G3HVydizsN2NEWwTu4dY6jPQfLaP8F4hoKBaxTzVuMtbCyj8YgWhb3Pr56r8EixWKEe2sVikEW34RbEUQV",
  "key8": "5iMwrvV5QEigwAqD9pB6tgdc2kQHML5cTdMiecFGLCYiszyUrgNBtAzU1u69NS8yaWAqzvhYSBRggJY9gJLFDNai",
  "key9": "sEPkpyiaxWsj1g8VDB3u4p5fU6Kpc2AAjQAwC3y5KSAKzrcesCo8fuw2Y167nv6AC59EjEepG8bjc7UZxA3zZc6",
  "key10": "5for2ZcTDwbEnrAArcbi5Yv4rCJZBj48RyDfcPmjFUp8C9YGRGFEaewMQCuAMHCKfcWUtuj6nsJusRFq9SvbU23J",
  "key11": "29rpBEaoAQE2M2JmHSAThU8D9MrwbtodJoVLsXpEHNJfnmgAM4vvmt7gtHdE6PFWU1ESnnummSyQMU2rz7ZzWKS6",
  "key12": "3J3Sa2HAE135gtY1577Zcei3Roc43QamAuQBecmXpvV93YQgFfnTDASPpnsW6QkfKdMPYhcEtsffUyaXFhegbTQz",
  "key13": "TkrnakTKbeDiXPNMzqjmggA6wZRpbPwVyBu6i7koct53hMZLhGLE7ixr7HjgWSFMSio9ZJs2eNzFbTYjAVLjcB8",
  "key14": "dkEKc5emSasCT2wpmGpr3k3PNuvKRkdBgkoPnbxrdxWVjHhL8mja87yeTcePEk8PTzsJ16e6eGRBnHP7pHDcd3X",
  "key15": "3SeKH81rcYACkbj3b6VjjD4op7d9Y7nkf7BEN9XRBtJoJR9d15VWGpzzN6FyFXBZQYWcDzJSBiBUyGNgmk61cEGH",
  "key16": "FsVu86oJV45mQYw5ubYsd6q4NJnHakYbHSsdsRoYqCpSHEFMMyXsBQb7afgsiB8NcYSe4k3iSBgjy5ngTvuFWDk",
  "key17": "4E9zg6uUqb9fZavueC4pbsBu9cK6hFhkhDDwBRWW85jdjqqBnqnhMjg7tSR8VwAA39k9roAeU859FpY4L4hPwgiM",
  "key18": "5ER3ohHz481piCk1omxHBAnTguLt4b8Rfz94icR55qaRRpkw8CdSnfqzNR23CgVQcErzZMXg2Qz3t2FcMmuC5rch",
  "key19": "5ypjabvGDCibaGzgTXfbWmrJbwohow4dBiWED6TiFEQHx3f9DrnduYK5rRZzbDMwsDFesxC1Um7WTPsyqsyCe6uG",
  "key20": "2HjDJ6E1GBZXncho7enwuoUaiodW2x2iJ1FS5JtoknZMio37iAZUot254Q2ejZ5nNqpSarZzgWpKhejuZfzBLpW7",
  "key21": "5k9YdcFrG1QgeiYRuoy32ikiy6mz1154HKnjK4rq7QiigbtmiLPPBPeQda5mbTp4HdnZE9ht6WRhMqmmLmVAPNmQ",
  "key22": "4SWNHvjGHJch9HxsczLrh1rWma7x5mE8ZHkDWSeHAJ32kKnGQMo5JGbd7Ak2DQMQYbvA249LeEu5Yw14AkbZWDFw",
  "key23": "tCQgChuJsVgkUj55QAC9notfhgy8iqyLZn625Jv1oNrvs2GRWTYFWB4nUugtzUx8EBkGJiEZPY4jDw3idfR296G",
  "key24": "4GU7ch52ZKGx4KCqWYXhGC9aUy51xzpwux4152HQLouBdqkCpTjj7TPM4bFSSmsh9ArhVbNG2Y4yJeqRufb5DUfW",
  "key25": "miwo84S29wzakamsqkzp1nEUEWDQDV46KjxEUgRva6mLPuY6eNsYMJLWnyBvJqi9DAAb6Y3o9kgmwtyNjgvMMYJ",
  "key26": "4Z7QdBrQ6HSmcqmGRjxBjtREksgwB8nrtzwVJ3vYpXvGX8Pbjyy5SRwdGGoGiFDtFNcok7K3sgKgY5c1nUe78ENr",
  "key27": "2MwJU5Lw4jeChtm8PUEinTKwxaMHaNDwbb7rjyZ5m2Wi89QTV6zrRno4wNz63V7mBGmn1ZVH1yD2SDi6ujSz9k2Z",
  "key28": "2TeMbVM7bxNJjpbbmBHfo5Pm1nQRcWLwinS7TbU7C6xkijpo3VsNvZEjiNcERigQF3nsa91e1DBaLVcqSXpa6Lo7",
  "key29": "62FtzH1Bf6B4px6HvEQYkvXvp7RhPv3ai33aGf6BgHmuC7nye47arPL3NJQwZgfT7A5LjCSydfH4STXGtczKuJn1",
  "key30": "5ioTKmZCiandZ831EPjJ36A15ediVQaHzPjDEbnvnn3jCwPVozMXcjjJJ7oqHL6zKXG5gEfimDvuEaQxk3Ax3VfY",
  "key31": "eb8Dt1qC5MtCRoKMST6DaZiAJ8NiTcuRdbFJUVHmZjrLwvzdL3G8Bz7L9mhtWovv4PnUwPTkJ2vjAzp7gBYx4GB",
  "key32": "59XrPrAs5WVz4Yj5itLSP6uYCvDpRgxYK742PM7Fkdq96xghw8jDMtaPrMPVinkqifvtWvo68Pysj8TP1zYvRMj5",
  "key33": "3Vyi1K4j6qsLHinwfhR4oDZMYBg9QiWnPkDAyaBSoY5789kLuNTPotyf2vXRZ9AJ67vK98cwFTMvvYiYzK7hc9yM",
  "key34": "3GUxZ72Rkt5311gFAj9Lhsi3V3udRo6tH9wDpSVDCfNskUESKpdvx1QYUjN1GW7gcBu2rAafhL5bCdMSR7hizh8b",
  "key35": "3ECRVsa7PEnRw8GYT9q5JscJtX7ftYm2YsnsSMXSg2QwgWtk26H5qjXAHfsMtQ3JLyPnkypt5S4ZEutj1iYC2ceh",
  "key36": "3PF377nmXzxCqQ3eA7cnh2sbr46kZFNts6i8h7NgSo3FPMWkpR5wE3LTYQHxMs5zqWiWpG55er6JS6qqhjJkcqfb",
  "key37": "63UfYDSLxhfd1D4gJgq2PfpW3Mj4QNGdMJrwoeD2JjWxXFpv5ndoZD1GMvw45momTbPdviSfbFck78v9huVwQepm",
  "key38": "2T4g6C8jKjJfsKeoc8JyH6FGzsbQAMvWtDPkvJYzg9HZ8pwR4xq3LzUXyhWpU3VeWXtPVY1cDn837GdHajv9qYtQ",
  "key39": "3P5LSPqJRfrvKvHMGns3cMGi2bAnTnENGtkVjcv6sGANeQiKLqTLmWnasx6bjg2as8B3PqrJyH6489x1qM1Az7z",
  "key40": "5iBV7ateabkTVwNLX4V9HtuKioz4hztFm93HWiAkxqbtZJquGVZUsY8jE3xYFRMz4CqXLsifTD9KVAeETHtVEPLm",
  "key41": "28zcaWwQAifDDnZ18VJKZ4Tsw2Ry6u5ygvfeAeXezPwTT9MkjNdguWqcdGo8m7g99qiLiz6fCSbsLr2T9Vy7zGo9",
  "key42": "628gvmpPaMs1rxHyo2Y1bgpUHfnvjUTJLqLsMjHUeqjUgWnQC2hdgHEyPpzXw3C2bBvW9cVW7UsbBgNDUg9MKYJ6",
  "key43": "4iusCnM1z6UZWSC67bn8Ck3Aii8Q1ZwDNRtW7FCpcWgqfTxW8DmoL9jKN2uQ32byZEmmGNxXkuhRFzBrNBeMZhTf",
  "key44": "6145ETqLubR4j2QPeCr8MW8W9HziEopaqDyxA9TmHCw7kPktwNgsHVUPD45ZwpJJq19u1PqeXtQFNyrAzsGixfEK",
  "key45": "5LGvmvoTXZauZRVAM4WVzgqyXjF2TpQAYX6FbePWSxCJnVmTPTkE74St7L4T4ALZoKBqPMhgEAVsteodhbMyuXJG"
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
