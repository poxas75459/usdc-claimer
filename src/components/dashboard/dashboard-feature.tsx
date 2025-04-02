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
    "47aCWdgTbYCytxufXJYS3R1KHdPmjdvYSiFUKQ9hY3UUV1XyddYGzUH3Xhm58cbnHwmgetfjSJpEEfqSusiZd36E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PgdS7AgKW5PMxm3nhyhGQMraoCXymnARuxbCt5ufayGKGt4nYAoNJhXQhibRdwCxeKLmrrfJ1p1f3wCHS6N1wch",
  "key1": "32y2WDhyBvg68tEe9oyY7zyJ6ZwFjbpngEJ7zy1sNsyZ8cAXYRt9CLTDvfYaEzQdkbaFBEUP4sxsAJVZGz3quFqw",
  "key2": "Un14J3jhaPjEeUpRKJjPydMLWNQniHT4Lr8yx1QZjneGquzghjM5a5mDGwmC1RxCznTpv3ybTHeYsEVxGoqTBF8",
  "key3": "2Rgr3SnxwW3q7HyScDzTEm9icsNojckirBeQw6PPzZBUwRhmdiyZVZ3qm3DWTMTRqv41tLjb2aYpcrSSZoVGva5t",
  "key4": "ya8kKw8UMiHUD1pvfUHupGK61YQAFXaHcDtnnfTjRgBbsqZu6Kg7ZSzMgBXqFucWqjoMFdYW8VHa9zdLig23Xw9",
  "key5": "4MjN9ynxB3rm5mKTHCcpiFn9rbp6iMV4SeF3vkMMCoufkAxiLBmcxkpjXim1MQVotpEtMA1U2ha6AS5rWE3wTwJy",
  "key6": "5nkf41oXag7914DtG9gaNReRoECZRDmRqtedmF3fi4Ye6v3zVmKiftrGufJYrkR9YCtRBtdx8jA6jpQfoemaULmP",
  "key7": "3c66HZWhxggNrgBhTwt9Vk2ydwn1LErkdHdfrKtGgHJhUA4SHDrQiXoAdknfFJ5Weu1X6YhyZwiqtGqLbPt5YCrX",
  "key8": "46jjWcsPrC2qb5Dc5S9XVKimDFvEcwCSRg8AiW8aPNm8TAd11frTUNeXCjM7rqL3CU7X3aCnonjW2mtxiwmrScDF",
  "key9": "UoNW7bRsRE3k6dW7QUGgRyv7rPUyAQqVPSizNzcP1L6wN3xEK1SBD955DMqP48dK4gs3RGtpmrmXUxoNgQJ4Uh9",
  "key10": "4UoWvUVq6ztWuZMF2gLDqmm8iVhgRFmQga2ELtZACcz3RV2xkTsY2Mb6k1QoKJBkdfXnBQUB2XBWv5w5qJfm4pK",
  "key11": "5Gus1HTxrx8LX3Exnq5cKR23MK7kuw2gfDLXozkq8xsXYsZyJcA5FmzT9TTqkUxKjqNXsLcSkkfFKFNoEtXQCDbc",
  "key12": "39xWErdfTaok24o5iymPND77g4cGiDeDyED8EEz9oTsWBqqGTZTdETLWq7r1U7zgmFuVHNCpqq9ChmV4GnLCnfQe",
  "key13": "4s37SVTRjf4KpXoQTUfroJLLoUnxWSbu9tzE9PQAkAy2QLQLtuH2Ri2NVLBEcya645G7xQKtJejWjVExqnZiwEN1",
  "key14": "57VLBDGnNokFpWNEiTaM9Fczc8yPhsHD1CDmY9HuNUBRga9C7LJaCoxejDmWsjCr6rJna7YYLjxAuYZMJj7yxBKT",
  "key15": "Do186VN3VqNvbfPNL7k8txyEWrkpoXvsZLCscTPFHgWytim9KiVs9wqyfUb7e3mkLaEzFJq5geC61yD6apJNC7Q",
  "key16": "3PzmgbvjhtAEUzoVjvmUPMvbN3wJCscrahoBmzkhW7f9LT7yqyNSpCG32C9f5b6rjZ4DxLL81X6VzunenYekdTNQ",
  "key17": "57Q2sWNGsnb46oqbg4aWiBaeEQtHNvBPrmbfvh5ikR32Hp1Hxx1fW48FTZDPReapNCL6RtRwh6Ht9oXUrhhTSP6K",
  "key18": "4HQG8LBnoe92adeCeeSYCGmWvALV67CjDDS11zBS9tWBHYbn8YKDLaq7j2g5ztapph2JMcZmmt4vPBfbuzFCWuoP",
  "key19": "3dFHm5zYnjK5Uuf1UBDFU1W21WmpkapEF9Ms47XsUJwXpcTCpeNj9KB3jdHG3M957Uvd4HQCBmH3mV1NiNxQ4Cha",
  "key20": "62u4LkMLE8xfe4WZ2qg2NHM4WUgei4rGg9Ct4bgJxzpCzTDWbiW1LsAVZEaaj6F8QW7GzdBhGBEtFVumrbvPQ6QU",
  "key21": "P4oCy7mGCoj7wrP9dAxT75mHSAL444DknSjnm7jmAkgaB6B5SAw5tUS5ddNguZxwDVRPPmTaZXKraJZzPqA3jst",
  "key22": "4Y2UjzbkEJqg273C6fmRP1AvJyV9KDKXvAquYWQuvedz8Z12gFBJCsisHf2zTdZc8mNrM56zPoVWuFUsrmwv7hsA",
  "key23": "3azU2WxE9Xfz6kY9mWvohtZ8tP1iobzFMRdxM8gKiCsKYLgByjCjMw4NLTSkbqweYZEisR8wyL7DS8tKhA3ZGc2J",
  "key24": "2s61GiQbjY7BdF1NC53k9DZHQS4xvb86Mmb5EzjusfNntNiQJ5ZXAd5G2gB2tpcHuwbrveE6SP7Vek9BsYWtxhn9",
  "key25": "nTQbhapjvFpysweoxAbaBGC5ZpyM9DUGMPt14nn1VxeEJHmuKwdaHzmosi8XssS2moyaZMzWRT5cNPPpCg431CP",
  "key26": "YhK1kBfjTUbVuRkjZwwLJuucEHvMBEDLAhUp7ho5eEtV1gyGMmXaZAsSsE3w4hE151cVb3hL14yMd6aQ6tiBiex",
  "key27": "61kGc5tp4CoTeR8FvWbSVhLK1ACG2FWbVSK6rPGziPsep2MsBBEBW7F7p7Jf4C1fi1DNNVk57UaRvp6YL1nno29D",
  "key28": "YC9QzhHHA5QRpiVcfq5YRWFwEvd6A1ZdvnY7mm1aHACGtXmfejpZsE4CyMybBMniKnBiC8iPZn7W9w9NDpzVzGz",
  "key29": "56u7W5whWWKECW8ovXzZBD2treSeVV2tPwvHzCrdZtgibXW8ghdzjQSh4FDpJQTFx5RcQGqndbEYCRXngvf2kpPf",
  "key30": "2F7dL2bNwxiDrBVM8i5L5SfLUNxvpLcRuKvaA1G9jLnkjP9FqYMJZv35AANTfjdwNM9bUiGAUEw5Z7PmjVBLNht3",
  "key31": "2VxSoj8fDPd3a1XoJPji9twyer5QYJV3X5g1m8WUYqxwhMCW6iYog1btQo6CTdm5k1vH1bmZaue6pggi6srzLJW9",
  "key32": "3YVqfjanJJjfxAzewmAtmJ7C1C2sY1aLf88sNTi7wBu7VMo1uF4wXg2QJ5ff1avhSDs3LisKAbH67Ae2qq4zbjcU",
  "key33": "4NZrgVTfA6SV8zvChRKYip4uhUCXyGHV5teXwqiZXXyocz9py9xSCBuJice9W3N1n3mynPR7EFcxZrVQYH3EXvWM",
  "key34": "S7byikbgfc8PDtB9RAUTEweaiybUZUcZSPr2UEypvmgrq2ryo7VsTMnqvBkx2nTRZcVCF5tMKJqgsoJvjrCh9Ld",
  "key35": "2ba872cPq5bopPRcgSWLKoDoWbgzVPfECbkxzUEQuMBCJDsdQjtgbkFR7EuYzxzVonX3eq75KS4XyHP2ZxDBuvVb",
  "key36": "5XfPaHCjjhCfH9YsiqLFVAPpBS1omPCS8zQzCjdGcWT8fUcDZm1KBrcGTp25sMYaDhpDdwitc3CVhqozHZeUJGRt",
  "key37": "DLdib9McpJCfmSzfxPgPwwMS5UWUR2r35XL7rL8bTJ1bRQvW93nauWqdd8eponNCSmAUkdtgnQUyVPdC9RUo9aa",
  "key38": "3fmXy7BZ9d9CEjUpzhuqxNaipxv6xrYM4j9farpY2W4Tin83tToUYdCjamEE1171XLKYHRzA9LzW266gs3v7vFbb",
  "key39": "31TacDgxRrshzoHdbrV2rCq4nUKiXNy7yxRrw4qJAskwVYZhUi64E4rFuiwD136ZEYQ1i8FUk69DEvuYKyNZjM2G",
  "key40": "2Xoq7cV1U1E6X3M3EQYE31MD9QkB2bzUz4tHdFvWcN1tQNmgPVgNj1ikXq8eTJC7mPYJQZZ6F4dEbmD19bGmEvhG",
  "key41": "4NgUFLbvLFzAjQF2vKfMAsZMt56S8yN4gtXLprvgwmvr62HW1eM5esQ4nkrXy1fwfNP5QTLAsRkXj3qmnihjAyzf",
  "key42": "3dKyUMrLDEuQchJc8jGrJwqrHDucsUMitiprHreaMh9em44H4FByRfVB5doWCgzUhX9a7SZAZyxRP1YUyZQQtquX",
  "key43": "3qh2YXKwoeu22KwfUkTiivnq52DgNQYGkoAyez4X6WRtJHDfRgYK4Mz5zjEqYFmVXX1zfL7tCQZ2fd1jetcR2uDg",
  "key44": "4Sd3cAwkyFQHfr7HKWUfHRskFsP9AEux3VHN6TfcyzR4JdqouPYmDPeVYEYfH2jrjNpxgpj5o3NngMNAv8uDactQ",
  "key45": "37QYZ8ZtbbDTUHocaqK6hUZDSBnMWKGVRjVepco462MHGmZ8CrovJbDg8oQ5JPDasGLaEEVf8S9MapE7U34zT83t",
  "key46": "3Xc7BoVnDf9xF2o29w3z78woLBPLtXVn9Me7oydR456EfkQEEd6eB736KYWYBaTKnaDCry9otC4nXHLyEFKwS19d"
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
