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
    "3KNGs7aK4w4D2xuLaBK8dPuPSuNZYwAwfFk8c1tX7GNNR7fKR6oEkLxnJWhTVfTvzu2wMBvVLevs2eBYCEaNePsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XU38art9AwofVRnAqxLvxuwjrLMc7aY3EMprRAuJw6RG68PFZGKSgNay67mMFcP8wwMU7b1LFBrbmoe5mcHXVM",
  "key1": "5yUMqL5J6pKQpniR4JM2Pt91am9z7ErFAmsmPFsrumxfCLv6StfREkTnFkxxPjxGzsSsZHtSuCqZX9NTbYfEzSdf",
  "key2": "65bzyYugCKy4AYv94pgwJCREUJLRDJTfnf1QXusdVLNT22iuJxweHGTEiA2ip1su5ZZrzejpMJfZAQqJgAQ9dL4a",
  "key3": "5NmjEaY9LMPA1tKhZHa5TLbYeBH7BUsyq3uHwHf3u2JxsdZVGgPxZkekvUYaLcbVXun2cLpjqGTonTgogwMnASuP",
  "key4": "5CTGNgC5eC8kTMTAXRdyVX4iXmUxK2UB5Gxge3SmMbqdzvkJBZs6amG92ge7tjvV8vdEmKBu8VL7T5Sc6cUKiB38",
  "key5": "VtqNLDTTNdhi2czZmJ5uu1UMvv8xr68KSSwpkMM8zxRmeo9znuvMSMFNvcx5KmG4qi3F4ucykzGaovfaAdE3fos",
  "key6": "WGJoDhzxaizXEkLan5djeuzWLS1AxppAw6LBiuaNptTGEeCPzYNrpbJtZqdikbJTQJbrrAe5LvtXp1zLEGNEkSW",
  "key7": "4onme7dEevVWFRLwwkYxsAfhg53aBaHVmffn8BjXkappeYTecxPCWG7MRFeytuwe9kRMqUBPtm88qikec2chY4wq",
  "key8": "w9PcjkLNEVVG5F2WZhLdKFXaJURc8iRDtiiuzLtD5gQKoqcuJYb9dfw1oxSvaCnCXk3WVc6miEwifhsUfuWmMkP",
  "key9": "4km7tnYeTo7GnY59Djo48rcygKKthX3FWUrvmxu6WgJgm2B8zuQGaWRpnvE4vuiNs9F1iy7tD2B3tZF69vj6qmLi",
  "key10": "4SPu37M2o2iZKDitDnA34AX13wyjrde8duY544Z9pJVFnhjvo7x1ga2Ygp9DEr9GaDNwpb3hzRVy8BKniNKPQBDd",
  "key11": "4vdUTC8Vrt1nyT85y8FhXaF4YRCyrXrwUvekQVnvkpMQRUYZaodwWhtmtemWYfQVzrZVoZtcGTqvifeFAYV9i5vN",
  "key12": "GESXskLtv4aHFKZgGka6rjsoh9iMzQktRwGTj4DtoyqEKYk8CAuoDnZBCf2srtNv9q1XRi72obvznKZ43yNqQHN",
  "key13": "9U4GpzLEEbhQsH9kE8eMmTXUBAtk7fircv4WuyoKNiratTi5szcUXaSGoaJEpTUs6Z6nuBQ3chSHo8tiaSgMDoU",
  "key14": "3oYRuifnCXjg2SX2xX2Ex3iZ7H588u6ULUVHeZGwwiTNoh7U4wNfdEfchT8iEm9obBqrgNBeuaNX1cKBKm8dKmTF",
  "key15": "4Z86pmPTzKbudX8nWadd2redgDUuG97wHXWt3KZUGEoEboDkGGCMSSrLhTaC3KXMext8926EzjBJPyRqaARfUdpx",
  "key16": "4iBHsgoScPi6vvCfJAPwVRsd9i7b9BigYtieTuvvDpY4xJ2QHVH3WkywCeus9K46WzZkEn9mNSwPbXbsr4BGmdPC",
  "key17": "4ezepRejoSWJEWoGdxN7VMV9tX7EMh8QAFQSbShwuxNm2NBsW9dARTtvXDJ3YdVWLP5gVUoy1fyev1gfhRUgwUv9",
  "key18": "4Az15P5MNvV7ogRDLNn6vBhftGi93wZwZYcAJw5nuQNucbYtyipzxUUWmDn2MTK1eW61D7WXT6XPmTifdSpvThK6",
  "key19": "38QYzmCN62kqZBN9wQESetmYydTN5LQkR5pLNd1hGCeXJsweM5RdJ5uHr8NXsEabXcpxQM6k8zkVGN2UxSzas61v",
  "key20": "F8b6haAjZPLwXfBa849w6ewzjrMBMAPX8PxjQ2B7tKNnmDvqRo8Hr9Ym4Hpw5nBBn1Px9Xak2nh3Z45vcKP5Syt",
  "key21": "2nwGDVTtSdKqd1MHTweWquvAWdapEgPVibRzskzLmhwWZr6jcRL6t7nwx6CaYD5eeWXmvqofJ5wZoGky2QE9F7RW",
  "key22": "JxcuAQnAe2kzQzXDJEJkTCnXbTWn5J7QkX4PSb476hh3fun8wTVbTQoG5PVMuZZdB3eVn2XCPvUPxjrF7eCft6E",
  "key23": "2gFXpF5w6uZYJ1ud7hXcvPGWzaWLDgfo2Dnfku2pLA2mN4GMDGRWMih4JBg66KuiyeqU97PWhNa2ZtmGEd5Mngnv",
  "key24": "5bh1XdGoEnRdSrBJ3uW5C15GRQuCVBk3wSNocVPqcmJ8NmchmfT8b6aXtEfQs3crNDgJ1AzTZTprtaYkwpD2m8VX",
  "key25": "3STnQjusCRi2bfGkeGYPRhwiiw6qbMNnVXNe11kv5GrMyQU2kigJgUN5tuWjFCYn5JGqVJTwi2Hs3tiiAdBq41v5",
  "key26": "ekkZprmmnfvjQqjUTYNASjQFVGfSW8bpCpS6fGXLDrCSfYEhb754X3DPFeDzpS7W6q8jRLY6xoMG29g97uabbHE",
  "key27": "5G7euaRKkTrWu7UdQ2Pnx55KzPxCSQ5uPsGnUrkyYaAw863FiTmbpWnTxAmCM2swbmcmLUnaSME3ny5Px5Ekjw7o",
  "key28": "3EWPihXBEjUnFi3PURi1QQKyMexRa7pCEAVQdHSUBNJdPRL5fBLWXtj28RpD7bwWTmRLYdiQuwRedBCB8yrG7FJV",
  "key29": "2gg1jtJSfoEScQZmNzzNEmKP6Vz3FHBaAzbBXREhKQQnereyqMKkeyLuppkPUk426Rsi8puySfSp5NSqC9NcLcy1",
  "key30": "4NAJfaiE8wymdQPAzCDPXjvX71rXzd6y266LxtijK3BYkWufbdZdLDBxCnYz8nxsN3kBWi8dbytxWo9wMFrcFVHt",
  "key31": "3ndUGfY2sc7gpY5EDWVYgsBTSAFArbcSpa6rhqGZEP2y813SKNLrmtN9FN4uPHarjFToCKnd4Pj2jQNJEn1fWYh7",
  "key32": "2JVw9xwdh6NPmSGntj3a6Ze3Jkvc4NxrCuABg7q4WX5XBERX4fbkJWRL1H8FGpFr6wW7JmYf8LuvWukd5BVADNky",
  "key33": "2FX1JxaZPw7sfj6WzVzd6YjzZxKQkLiHHcgpCFA4AVW9zZFS1Q15cGnMeAePnDeaxEKxNusdJKna1SjW6sMCkhBB",
  "key34": "4RG6GvogLbwEkjwnqTKGwjSzUJSJ8orJwAtMz7U5A2q7c57i2ge1LfBsh9BZPVRdewdNr8rMZxauphpQnPZx8YM8",
  "key35": "47TWvuDC4cDTHSJ7QF6aPXDfnybhWNBj72yVw7PqoUemuo1dKZ4454w3GPAoHBZdwmtBfT4iahMp4tgErJvHzqCQ",
  "key36": "yPS8Y8XGYKJrhRArty6S1zbhCUGJLUYpjzzptdyZdGdqx9K5B9uEukUsn6BQzkNawrhx5saQUsxEdVfmiZcCGAS",
  "key37": "mvEfq17YLNnVATHx1esJYzvkuLxvreDiwnfaNbQXNiRxR3wmEKsesc3eRXh5S9WBwuSXX8ZWTF7r5eAAWP4ZzDc",
  "key38": "Q3xrXMfTqtCbrmESa4N98ZTR6mK4bFhMXHCGy1k4itD8CZWuAqy6cZ3mj47amGMUaLCEw26NuswyhQ9X4pdBRiA",
  "key39": "5f1Mgk9m3wPJTYcfzv7LMkQfXJu6b9tR1vvyB1d2Pyw92na94mdojGiHv4okFGWvCszrzJwHGGwGcN4XVqDtSwS4",
  "key40": "4DY5aZ2vdSbswvmMJs3iHd46S3hq8kiNhHhGejAp3ADyjLaDsD59g9oKvuiMS8NzBkt9GbjaLgAjNZu6vvF1esKH",
  "key41": "3szAH1CK1LRipciG4V2bq6BHrqX9AbXS645GrQmaB6NktBisG6sjmYQejyP3aMCdiwBSM9vVaQ9d6FpCYxwEkK2D"
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
