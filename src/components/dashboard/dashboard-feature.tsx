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
    "7cvXXDcZse2shX5RduVwbcd1xwwpw9cZQGV2kBK31yayA9wWU8TtYCvxyK6LbtAEYDwcUiCnFArABcRGWqfKAyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jK9sQSisZfS3XVr2qes6c7QNyXq5nsCRGZD5pEA7ysshSDgUsUdoux6M23tFj8a2SYgWnxBa5S3XGU7Mw9b3u1n",
  "key1": "55jWmbevQ1QSEMMggczCPwgGS2oHRdBqmmyLHsofeEwP5RaMgYR91jiZz1JdFekod7Eg7uGnXSJoQ92EqdLnNmMA",
  "key2": "4GT8TpRTrv1Mpww5TjjDd1tziyeeXWPMmCitjUKnwBstB9AgoH3NBoJ44NWFPr8uexUzghuwQ7hJeFTqVNN8yT4q",
  "key3": "2QBwXGgqskWj3hy8f7kEAVcJbM3xnwcQFpGhLZDDacncSSKR4vX8pDTjJs9amxijDAVaw47rN8FaerDJ6jbX2kdz",
  "key4": "4MfrPU8tiyvioQqZBiAUa19bVkGjVB9gSy9c4SW7baQQagezmG39N4b4kK6WrDmCXP2ePK31Si2PYoqmv6UFQ1SU",
  "key5": "3eaq1U3rHLgFxzF89CARHbAcV3wppYJu4KeHeqz3FvDHwortkGor42qcS3UyyP1yyzC5gefr3CUie4NFG4VcTsT4",
  "key6": "2umU8LdDdz9MC4EZbHKj7rnVSZYeYtBC3VXHvEuFduvrE4znf6E6w48DzQaSHmUdCX6gqm6m9E3VfdFKQQmoVBNC",
  "key7": "3rdC1iumweSXqqNjmM7B6bFc7SmnAu5dVhkzoLft3qErKUmMgZvz5g5UCxMvzDpTNxH1ePkCoQyDmr6u2UFsmxr7",
  "key8": "5bgc2VffvC9avauP84E9bT6xjkANjKHm1ndkQeLAgerDZL69TKPj4YQrYV3UFJFs5wU1iRFMc9icjQhqUjTWRB1z",
  "key9": "KxpC5taemWrkTbVckZ66EMf7ofk7S4wEipAWToBc1e52xV7d2uoL5DgeG1ZWmLwqLCgmQCX6tkyWp3rMMzHyXXY",
  "key10": "4Jotccs4Kk8pEfK7qmqbLKByy8rLN8xAvCw4wDHBV5Sqc394FAwd7Lu8LVSDoWNkxkGwgNhsHQDCD6VcK7uLehAt",
  "key11": "2KqkXbinaYRaqtWziiWEzZvpoiS4AE8a5W8AV1tzwWjdemmPFiPUaQghUQLSQq3NUN9UZwoJSGZDd7z9E9YZfeZ1",
  "key12": "466S9X2ZDh3umeZxtKqU5SSot5dbCnPkaNYpfaXxDrBCFarNgDicF8jbGhJAe1mwjSFKxyyiukcrhejeA9KcuiPB",
  "key13": "3ToTDDaK8F5oKFtLRMRgkecMx2NukQiSXE8FXhrQEmNj9o2qbdhpkF7Rf59qDDznvizGetL18jNwJ5wcV7p4rcCu",
  "key14": "42TuZ27Uf2cZWqhZ9AmVgUpM91pB6sCiTq8UwNcx1p5beHzpUiTf2nXhd1JTQFwsA8DH2F6gP4T8ouEEs4TuZwNC",
  "key15": "3EoXyYnyWgQiMcji6ZAprjj2arwp7GF4GjCRXFpnCxqDBbnaiVeW7vpAV2DAGVx2DwTuKgoTqreedkYr5BQoAQWA",
  "key16": "5J6BEFyWYb2GiPHFsq1igiAa2rGatydzawqmZAHxihHtMLfdnq3pUKaiC1HcAF14TCsmLRZ1yLhysz6jxBcoJwz8",
  "key17": "c4yHA2ueJXN3rhkjaPTYsCfuSX9ibWnkeiyQspsvFTLNdcvLNJyntiTCnZ9bkF722F2CuRGAkDQbtvWBqm4zUfN",
  "key18": "4wuc2bceqUvWd5Syx57WHP5hGDKoYK7cAwuR4Jk3yrFsRUH6R96ts7z1SmCvdQzXZCehr4xRGSv18bS538GRF75V",
  "key19": "4vxb6xkCabQgpz3ZnyPNGov53gpECftGdFctHpuy118JRGmRYydSYPuRMN2rXA835yLzsDakPAxwkWZgoLo2S3dF",
  "key20": "443tQeCojgWJrSv1e24SCdThZfwBSY3MmTCvR9xzRYQHPJqpKMRVh16HqfH1T8GuMy4FDBaMaNsiyQev7ipwAfTj",
  "key21": "4vvGtQqfK8sr4Bq3pWMTgaFeEktZcipmS15axGnNfh7NNFpeCEPHLjNpgdmWAKf8v6Ckf2b9dCKMYe3oGumGnZeV",
  "key22": "Q2ThUYAVrFZFbxBbavhJUbZpN9QfFYijiMBkz4BEP5SarU7qxqxp4A6dBBJX4mMc3dZTbksGSye1HFy4yuRvM42",
  "key23": "65fJVpmyvcLrPBV6UaTwsiHTwhpbGWpoN6rEoT4e4kkaF8GXP6yo4E1r5pVX13na4SD6fvfTyQ1qdQMmd6LgoRZF",
  "key24": "2vVbMrBjMngJu2fTmAxihMSMFsnQ4wFsEMEdUcEYYHZz6ryNj9n6fPSr9Fth3fhz12LQ7imeL6Uh7SheMapNxyFf",
  "key25": "2U5bPNHSJBPkke338DffrkQP2S74Kfz3z45GQDngu9e6Ns7pFj3HysUB1cpC3jQmsdqDjFD7G19vfC7jDdkQQTpj",
  "key26": "5TD2qVFu5kpcKSDcpD1UG61ym18w14Y8L2utYwUDRgsUY8nDGguybX8o3Txom9rQa2CWqunMPeMRbWLrUrC1qbLj",
  "key27": "22WPMNqeNKjQuujzV2dMAZc8ZjtwqDPhKeQogxwUwq9sbqmYekRA9NwDs7hqWkDcSddR4VZcsnepgngnTxkebe5s",
  "key28": "f445AmPYQGs9i7GPagzkp3VAnbRfswEVxPQhgsLHqG8QD3ZhuVfcUouwatdYFctMEZ1sF19tmNAMEYGUh6rnaCD",
  "key29": "1WNQZojKFFucpq8c71iGnRpgv5FDVFkogLua4kAzyzkNZxwznao9jZWXvEPrEpZkbvVCr21ExyxtG7T19GD3nk4",
  "key30": "DvkRqX6C6SPc1jop1Byve4KDaRGSRaswTU82BrCiShEwQhXF93nEsXoHDnx8KpvQbXpfP6FmrPCzG4cSPtcmCmU",
  "key31": "2X4Cf3bvTFZHkj2dz7RbUycP2sRPYAXmna6WJcS8KkJ66gzey8LLpE1bms2Wi2WXZuNHvoyVqrLxdCxyYDRDJUWG",
  "key32": "2TMV6L8WcYSjMFUBKKFnGUynEQmPhW1o4ue5BiXneaferg9QznjqT8RM4Mir3NtCn9FyKT1p9MnvWRk9twoe6EKW",
  "key33": "2fvcLnvuPqe6WerdQhSJPqkSqamerY3xcYypnNfpHdKpbJWBNZ8JwvA6FqspLZNAQQ3HGbxfkPEaSU3HVLHQKzGK",
  "key34": "5SH2PMBftAvXYXAYU2JhmXV1RnHuBrUzopDDH9hTuCn6Gy5qAnpHHERFGoS8DuGwELjjoX5wrxBG5uFmPpXyWLNB",
  "key35": "PaohznC134p7jEnp1zreABZ2CTAqFF1DNvEXiUFFbCzVynWD498c1np5owLJ6KuWsk8NWNKoiRQUPtKivCJwB1c",
  "key36": "5ajGZPYT7x8MHJabFKPdJZgzRJKwbsBBVHUaruwzbsE8U23vrfLr4SjYBJjejn8f5Fc8WEf3f6SQVgaZkhmZV7KJ",
  "key37": "66zRTUFMzev5YDyCVYmDeobCjV1eKg647P1gbKLeKAGtNvcmUPA1rap4A3JobNK28pK3QLkHuaDizvoX7a7KGB9k"
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
