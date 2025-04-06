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
    "4xvgvQL7vPMvcLSsS5itG5SSsDiMxBPTsB63F6LsBe5bumHv6u6ZPpsi2f3QjpVTAnWu7V1gMSbPJM8Ztq3sXwHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Z7Xymg38HMh5GFU99hzquL4LNKwzeQ7qSZRZ2mazgtPAYiWdzvhAtERWigjSx3ioDwRJEq7FUeAn2eGCtuhicf",
  "key1": "24oNk1pGpSGZiXDb77h795WWLAVgDsnFLdwFDaCa4E15epBn8KZRZYGJkY9JriMb1uQwvy4F1GYWyFWYfP1La3jT",
  "key2": "4ree6DoEscE6HNVco9nRjm7dzs7Bw46e4gKQdnUeok8kzNXwZmrxfp9khvfC61DfGYdp5J57XqtzM8jp4nThaQsF",
  "key3": "4qUCNiz6FXw7XgY4vsNoKuLU8vRyz4kiZ2PX26v3komer2mnvD12QJEbryMvmg6biPWH1igBUbwfT4847NxXj1jL",
  "key4": "5y1gAFDEjtzv8sTZaWVmrmV1MB4cYfKMwybjeiSq925ndZDKMAPbT8wqCisKj6TQv8j6J4XcnRrfr7zkStJPo6Lo",
  "key5": "5XwDZQUHkyT669hoXcE2B1DBtyi2QLVwoZhgSPopEfALA8a9P7MnUWA3SY6Nh9rv4GW1pdFzcxN3SkAHs7raVLwN",
  "key6": "ADUDgUx911RrZPixnVcY6zySKHocWFZXPcPhFqq1U6WF5sGyADPqRBX2ZJEoYBM8rZPwcuNRBeQiYDLSBrq2TSf",
  "key7": "5JZbZ5C5vojjs8yM6aaCQ7yTsrpYgFuc7Y9RwRX6rdPmv7g6nS28G5pcwNJK5YQaHiJfPivRHg3kMPTMSMQHiF7o",
  "key8": "4c2JCeyVtULWpdMAatmt8Q3WV2q5N5FYiWM1yrud69dHcgbPxKEWR33xxQ2gmMnFrQuA4KV1CYivDEuVcr18SoPu",
  "key9": "4ieURRqAHQZXyG9t6bq7jftznkoQXbu55AwJzCKQstfaE3Cz9HdLqxNvewPLB4e4y5XNYHrVySXaX7XorrK7avTB",
  "key10": "rTW19wB9wcnC3tTgXbnVX8VzTWJLDUSFsTYsNWbgXmHsuQzXngc4WvWKP784aygC6RSCUNySNWdcLbZnU3LrYFv",
  "key11": "3P6gCh7hhAX8YTFFCJ6gN73sFVZVbC9xDtq8ja8Fy4AGWuRwCcBHUMaQsfMQpN5s1zKFJSMuSbGWddDQniVeGsRT",
  "key12": "3F4tFX1uSu2vWEYigVNQP5zUZHvroSNzXBbg9NRXbzAGcACHowrH9Ky3RMoRZPFC7MhbcWViu6qvT7QdtmNXAhij",
  "key13": "2snW5TZX4axsL7uTWExrRf1Ww2FUsoq6XN6CvogHWzpQxzZhQP3StvTkYmy6WAwBa6n5Wca93EciNeRJ5ABBTuTb",
  "key14": "3XXyNbfC2XN4FFTi8uTvVdqV4qBXPWANm4tf54SDfyP3dm2eMPotUFBQALZquGtAyKnLR6QPurs21DPLWBCjmZSD",
  "key15": "2t1AN9JxEFRwFzPbM88Cawq2dEn8btphYszvB2P9SnieEpYpUWQSHRfjcy6x3zFPcz4BNMW7Y9eMAabmMY1dpiAH",
  "key16": "4x681hmS6mVs4WKMP4DRzerGvFDQRzUiujYBi1cEuHQB6UJP9cNwcgJziS9G1CwV5yoJigxTh2yW2yUZsTJqZoov",
  "key17": "3uJ1agrZPgbTp3Yc3GBiGAzXTroRNVFh8rXxMHjtTDKkCHYtu48c6BbYBmwvAUUzPSZwPse2CjqsCSU5iMeboPSD",
  "key18": "32tHBLnA3N9TixKhW1gHGZgmagSevceCB3r1pD6FuoKsKkJt7UNiSAmCP9RiQTwSHYeXrTVtvdiY4cUYULEPeyft",
  "key19": "5aHcoVicGHGDpeFyjzRUjQvkxGQZYv1ovCz8JmKPGcmGiAYi57n3YRuTQHr1i1iChK1C7moGifF45sR7CY8v7voV",
  "key20": "3JYcgjibLCR7xubZKoorzypNEx4cBVd7QfMnuLCxLXSRwih1yMDdLcG2NGEXyHRit3Pgeex16MEF75SnPGts9Nks",
  "key21": "4RU6haiedJhehih796s4Z8qH772dp7GrCwGkXK6Y4HjwUz3QPqgpnUTWzQFaD6kshyXeeEy4jxyGV8UCsHhNUV4o",
  "key22": "4K98dmVmiS33epGvCSY5LKE6LFF2yevRCcDEarhsxACnMVgba6B2g8kJF9mnbUNPXaDPbMx2GvPY5fLDmEyodSmY",
  "key23": "4nJJM1ceMc3CbdPemLpJhQWEwC9y8XEVt3GivdtrASEMbHooznCECfcHfkVxoqcLZDpYjvFQq3XmYmQHYt7GcgaU",
  "key24": "3CkrcCfXGrk6rkUFyQaknyvG9LkBWfZJ8AMPHukyd9u7xmViHSafsCoEh58VFrU8DXDisBcy1UaD8WZWKU8QCgGX",
  "key25": "2CkUeQyRJtmN94akeuXKn46V7ppDqEBJfgpvBniSHE6NZdjTUtnYb44B5XC4K1Xpxuji6gEiyiuXUNn6kuyiVNjJ",
  "key26": "3ak8imvFiVD9gi9p6JpMpmhtb4kLuYxLY3Jgo6iHBKZ574GDeAzAqYUGomfv1WXbCu7fvSieNXGU1TqML8ELZECo",
  "key27": "3thzqnMSt6VcMkn8XYuFuAJM79T3kopK4bwzvdDnoKa8886UKPPxe1iybJ2H56Sm2tdZNaJtJoruWuteiALjZNc",
  "key28": "NiQs4T37nVLAkwhA4MoCY5pZrzRaZVLpjEFN2yi1Yv5PV6qoDDUVx2UXozp8invF7d1swHW6LAqdUv94LUFKJZ3",
  "key29": "4XnoX9GX9wcErT9g6QKsA332Xrmkfnv7zz4URcRgzjodm1BhrLxHELHfeJA11QJ5jC9RNnSAL9NSEZBZozsFGsQK",
  "key30": "3riusP7azwsiXxRjG38B2nmaE633R3AMhFAxqVqCMzUMNGRXi75pTQXg7ScQsxS3BbZUV7utsWtHjXC6UUcLx9SM",
  "key31": "54Nx3HL3m14eNd8DD55Hx46uF7HB8KJB8meFu19mso2ZTwuE8W5wsgkARmsDoDZB4kCo7rVhpyYGePJ6iyRcyYdt",
  "key32": "2HrYY6gujSKTsHGtcMH1wL6QwTge2EhSc5jX4CBM6UwFpV3XwfYMjuJ7E2F6kRbch69ahd9knUb4HfhzVzK23U71",
  "key33": "4nyFy2TDdFzTtt4UPaWhKwEvJYKjWViFpjyiFHwoM4GJWVHnKFjEu5cKKsqKLWTBQAUP7oGinKSMYJqUDBZxq5bn",
  "key34": "4V9JXK1h9ng1F4AKW7QA4Nf3gKo755NvvVETm11UY5UA3Q8xeazrYTnuWTNf6xrepG8bF9Gd9pCQd6meSkz1Vbr6",
  "key35": "FstyDyDMkSNjVmPBwpco43Qu2m52jNakqhL57o8EPoWUtojPfv8hHon6pfzGuE1bKkJcEWBdXzUSVeSVCzGHm7U",
  "key36": "3J77vuuu2k7xFv23i1pbdJCxK4E2fUNMEztUZdhLiY3ziroewLAhZnumiZcPijwnpBxs7A36KP3DeaeJxcAXcdtd",
  "key37": "5Wa9by5THfzdCVNxzHT3TjkwMJiJu1czSKBS8ucTSneZNj52auY3UkZnMbfX4MveKinSFT4mykScyYsG9BhavraH"
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
