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
    "4Se48aCYWGmbxUMg76TjNQP9FCL7qafm1awS6z7nMitL3x81b5ugPVQFdvijd4VpdRZZSvv4uUwVXGy29SPHv9f7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J4BHs3zYRNPDNvi8Pk5VbCLdJgnJpJsCpQE6FUcckrfGRiWwcNUWiAeFNjn88ZLL2GxJVu8bF6ZtjjXHeMn62mn",
  "key1": "4nZWLqAoxNRVP1XhJazAnY67csc7e6nnoY84dFR9G9bYuL2PQrQCXsdF9EymUromF6cRfjF9CrbgZtjy1NiTyRXo",
  "key2": "4B6HAhM2nE3Yi8EDrS3tH8RfTdi1qtEabVFexvNaAqyiEY3bmNYyCnL6PMLzhv5m7yzoJWefiUwZtuBQajZWw9WD",
  "key3": "MRwvkqYmEmpgXNG3ud5x6XNzvNEJYSdgjkcNSatKkXGYp5E9tiX1bKUNhjs1p5yPWyKxwqoTqQxz9QGj1mCQR29",
  "key4": "25hxnY1xWDVFawtE9jPi6NebFyYRLLSbiMumPcsEbzrHUsAAWNq7sL2gLiFHxaAPchsdeFnLKuyFKEfawSj6dBaU",
  "key5": "BsR33TnsRH1cxaXFTEqTAYNUPUDqMi2kQ3uVKvA1WGDtZ99VQhH6J4hwTa1wfDwdjzZmEMGuG64cTrRaqoQR2Zh",
  "key6": "4wPXNQb3yqbtwvwcqD2GJjhjiVcnrHSmRCfS2mkXWcCosJ1SyYHwRCoaXmqzWXD9WyE2z7d3Kjzkb5xraLCaQegr",
  "key7": "5qH9GatkXVNoYLbzpXFqbYYVfawfoXGrw1obbHc383B19N5frLV4t9G9gXA1ek5ypoDX9rXehgFzbUhA4UsXDrrc",
  "key8": "5yVBo2h5CUXPSeFGMbS3d8v4QQH1gV5H4rq3BMt6ZYBF4Ewoz36zWFw95FdjR2ypuhaANRTksVDLCJmestDcRatc",
  "key9": "5NZpUyuHkniv6HxZM9BqEo5ec8fNmc2U1v9S8r1bvk8hvUgoz6RARdJFZUfgs4VvYkzzGpz2tXtShwhh2tbU8CJf",
  "key10": "5DbvxUN7BduNp31HrD8XeqdTeasYqcrWwmutdg12VsawMWU9YjJuEcCKhLFNfbEH5uibJUFzexXFDCaK2sxH4eTm",
  "key11": "2s2PncW5L8VEiz5dUefUxzHVAPSLkkBMarEVynwNETZv3P9sWcsLjEhM2vsTKivm7rZD2uEtCgk9VG1m63xLrbRp",
  "key12": "5Lec12fixnYQvEagqRzqViZYPHSRhLxrDDGPJC7g9LuENYRgiErKt1kG1vd5w1Py2vkRVvF6mTH5cN94Pk6RqqL5",
  "key13": "4cHtnrRx6bA5aqgBJMgibaGA8dSe6WBqVtZjP8LjwvYBzNAHL3sAydNavCTyZ1htJWfvEYMU5mgTWmQRW8BkComn",
  "key14": "R5csQeHYA4j25xWu6A86WPHNAmWH4W9QjcdoUDhZJtuWyZ2VdnRSjoTHoGgQAU3SzxbzbhBCPghW3rGd1fLHwTZ",
  "key15": "5muDcRGDizbtz5hkcFXDLwF7vrXZLm7jJZgfXQgRF8YguyMUFsekcuGXyk1iwDGhgfbD4vj84gUP5JJLqaARioag",
  "key16": "5Nr8MNxvgwyius4EaHHqPjRMHTcmd6SPXouZxuRXsHrPy9uKAZJUnQQ6FSzkjuGZKaNAs7zh2LzHDSMemoY9wh5k",
  "key17": "duR1Xe8NRvYj1eSiYHBzBg8TreLq8QH4cdndBWxFfYzsobnkSCkSF6zLt3LPcpEK1iw1FdtWj9PRQkq9q9zVvpM",
  "key18": "4BvFFjpdZt3L79s4iu7WpRTgLby1qNUZxm7LyBKJFp25gmzzUj69dkSUbSUMvo9eY5L7U9th8Rwv2aMoUBiYKBNG",
  "key19": "wiVk3qaEhNWGkS4FggzCPo5Ef9pcVY1yTc5GthUYcWSBsXSe9USH6mkhXUZ6Ts259hXFPnLnNXwvZ9CehpEqQCC",
  "key20": "3cHuyPUcYrk4ceerycxNJvNwjfjbNDqdf3JoJd1qp2pHVLE5wQVJU49XAPxKXLtn5fjfGwLpBmXgtPJVFMnEDFnB",
  "key21": "2rx67mgtjeqauj64mW5LygtsQUUUzmqX7Lhdoh2hQHcZsgTa1DsAGH4EYtSo95ZQhJmGYXfKxuJ5gtDvJiRt3n8D",
  "key22": "5Y6WbLVfDQe75Aq9NNcnGnkSmDTLiRGgyQRyS1FAuBq8vDVtPS58jetrNKWED13E7Q2dubdT2UD1pL3SAufiJBZF",
  "key23": "5mUEEkgC5UonUnthyE38tVi91S5fJcJiajhB78GA2WfT9soxASga8GqT4qACDDouvWAWx2NrZEWxUuCiWRqbcR31",
  "key24": "2aFnePTEU7Q1oiXt1eHFECJBuAMJqCFgMjn6QHstWnatTA6xzU9E5tRrnsTQsfUUNp1e1TK3jKHLXbkJmBLuLpLC",
  "key25": "2XhYRRuWTsFcE4e4NqNHoQKduC9p63jqCqnh8zEs8qTqoVtoA3VzTKyhfQVKu8CSVCwNMpeYKjfmA7M2wkADnhgG",
  "key26": "2GruxGyZiqFPtLzz327vyBRcBNRstuLad31RtaiibHUSM5Br9KEZsSQYnjnub9pFE5zJgEDQpoKNcyYzUYL6aVSM",
  "key27": "39bSxMk3gutKUabmMC5tjBhBMURCcAuZjAtWnbdvLjR5gXRG1C1eJWGxCcm4rTiDXRKnSnVqhZD5FDWsSyTs4Ywd",
  "key28": "66Ws7CxGnabQE5Kjf3HQsuZjkmQ1vsV3kpLtNJofgtcY3m21kCtqHpGSw9vDvDLfT5YBsSAzziVjXbivJivhUC4a",
  "key29": "5juoNokeacDRpyyBxWV8ewv6Faz1r1Efjj4BEbTxHqNQv4Fekdy6KbP4PCG9sd5xhG1cNyjUapCCznx5sH89Q7h8",
  "key30": "vVKYyEZibHipFAdya1NZta8Zjru65oN67YVGqfZ65mrro3jVvqmVRbSBSVvYWoiTtE61yR753zD1Ro8Bh5pDnfF",
  "key31": "2vkMV9RV6DirpNbjeZecAnth9RFsAAzhyPyhrBvCFVfJghmpVsuLm7Gjway6BwtmTNtW7xTxBwfq3fRN6PWywXJ2",
  "key32": "58u97a6LQezi71mU3ShxxQVr6Z84jaQN5TCVu3iKnwfGFCYf8P8Eh12Ztcm3c4B1VSK73yXptdGScn9zKRhTvbt4",
  "key33": "5Xa4a2Ju7WEten2p2TpPosPc1z6GPVnBCiXFNNSpPfYxbHCvyDaAhKjEHsgLZkwncZtpF54CzRL8cVWagtaEFnoq",
  "key34": "dpewjBmgn7biEgR91boBWuJXHD8MnAxHsgEfyYnEqVu8Np3bZ4DLjTG47p9eAi4u8xDPVVsjvPXD4YCc9ATrhDd",
  "key35": "4WZ3ncT6DdAJA2LeJkAhqyXRQs8sFL5g7W54XG4nUw8FFhQEW3RXgk2JSm8js1U17SuFAts1a9DpLnL3M3N4CqCc",
  "key36": "3XJMhzQDLQcu6mpfZHdgAMAiTNPtukkqQN6TMkGyc9onzfugQg9s3kxF1ZXUq9FiRVcKhrrWYRrgVvNt5HFF3DkK",
  "key37": "8E4yQYw66G4HziYa9bpE1NYFvTDQM4oRAPpPUqRu657wVXQw8tW9g5LdnDUNhMvUvH9Am5f1AsKGXS1zcbbmTAo",
  "key38": "3JNQFRTQKCF7Je1UCDonWFhjr9Gj5UJJpDd9LvdSy7hGihk6t28H81Kbs8YVgVByiE3hWBUqXDirE8MB9xQHALAk",
  "key39": "5HjZMyFeYPh4Nxqhhy1Z6s9HejQzXxFhMteZ2Tepwk7EyXNnkDmSVFDqUu6MxSfsq264DpJDVtoMGt4xSBHmjWkH",
  "key40": "AhAdsuzLt9Mqh6GhbtmtzD6CH1SdH4Lz1ua4xqGsAuvyLDfyQSPeK2CYrj7Y7dGyvEX3DYsiC1EmQ5YFf9pTPCq",
  "key41": "5gASdoJkxW28zqunNM1VmLb8b7MzKn4stfofAfpoEG8icnvGs5oTK7XHmQ42JzPCkZUbSKEBxY8GXwT7zEHm5y6P",
  "key42": "3csKTwufKDo9kdbdZEoN3ARc4N6QSCLjvL5Ktb3xehRdwHvXJdMq4C8HbN8hn3XZHm2xVZhnHShjd6brxY3VTyth",
  "key43": "4TsCDee9qeLho7wCuordiPiRCqiKgnviUWQYS7cMZUApapFMxrQvxdXk9xKzZqFmb5FYfnzmZRGKKQ1NjF5E9kXw",
  "key44": "3VKKVKMUyTYoLrA6HBrV4JY5BBMUq9dfPACReJpySw4cEKiE8CFxA8c2jRzoE3j75jn9GTPiNzEVG8mtAFT5YFGY",
  "key45": "2JKHwM3Y4FDgVbzgrX4HCvA995GoSWxFMA8TAn9E7WRq2eWDSpQfscsGVwCXCYesp6upV7P1h1mddG4oxQgBsCgL",
  "key46": "5TvGLQedjyTYNxnBJK3iu7hpnKx3PYEvpz6d1p1e6JmFnaHysRbizGgCLJoptBXaVtQVA6LbssYisgFXT7B9GvLH"
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
