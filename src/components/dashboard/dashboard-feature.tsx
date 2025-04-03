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
    "2hWwn1TgDXzozw2He4diFeAUGD2r3EeGqjNAnjFjimG2YK8Cwi9uJ3pHZtq8GquNDuGyaR6bvZGfq9tL2jL78ZWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wQ2o3eThRkTUDiUVa68YZtFpiHMMA4nZ28grFaEyhJ5wSgwhfbJsobGJJj7hfjbPLhoHXxfhWFW7umCiwboqte9",
  "key1": "48Sir37ka9DmCS1HZUsLpT5Z4nh7bvZ5nbsqJM9Pe9mX14wQpAL6DajxriTsLXvjXvKtnsP1ULA4Y88ozJvZGvCH",
  "key2": "2hYc6Dzoj8oXV6Ju2yid5dMnGJewpMoHxNkXg5faWSgJ3FpVvZ9BxtVJXMqcyfxgZusAMr7DuDh9AG5hgB1oPG6D",
  "key3": "npZLAwts22hEbK1dLGSjUpxpthudsnarZjYfMfECRskGbWDtaqW8N5Q6nusDHE2Qk8GbD5ki2YpmvaXYT91zKXy",
  "key4": "FqFGhtQwZjBh319pZhr12upYVFGP4KS6rMM8A1UJKQMeUt9DyEdAS8Dtu6Wvbs5aAfvZuYtGFQcZs4qdSeXnGCM",
  "key5": "v3S8qoiUe5G5V1zUPjjFAHMtKM4m3q6FARvurYE5nnp53iG2mWCLU5P6bVjBofqsMEguuH9d8YTVodC8RTamnwc",
  "key6": "3xsLaNZ2durFa2jzkzC7sCP1EjhcmTdDfXsK9FH5PnutJfuYdxnTa6CXLqEFxM1oXV2oXReKC5gaMNBV8GdkNAPi",
  "key7": "4e3z2R5g5AYBFj9DGbifMRvvqKUeF7eawMzoet5WE8CvjogQJwcxw1UvrFNsprAE4q8N1RLQePuiKUDCSbMbWPgo",
  "key8": "5mDpJATbLEsZJUqmLnPZzYyfFM2LkNiGTvNCpq2ndNFCH4rJe3RjtZPUjqgu4pZmnTrkpJtMCoC5uXZihsQbmcNi",
  "key9": "FDFM6KHLgfoWe1u4PW8XUFgAaYrro1QXkKWHBp9QfJrHGcHXjrBp59vqJBcQqkN3E2KHekcM78G5iJNh6h9Fd43",
  "key10": "5guegR1yfRgF7DwLgTem85Yg8zs2Q8PrJiwJ3bcYv1amoH481XrsRjEXbpJNQz34ZPae7nLnnS8nu3fypFjxj6LX",
  "key11": "hPFGBKaZAX9EjTMzrNGoLM28xDzHARpbTYyr94ftu9Mng1g4PrxzU3tpSnEXK47rWpuRU7YLV9Lxum2mcN3nK7q",
  "key12": "2wexPRQRqQ87UJLgqrowwbXjFVQtYtJ28Mdsa7wMis5PanKuihYSLZkwVT9W5sP6NQ7njeuThTabKZCSPacuNGVJ",
  "key13": "51MMzp73EuzBDAKJqDEH83rKTfUa7AhN1cNJrWCAKkCK4w7NBTphknd9upXMKjtpbVnBcGxYTxiCRBbmMViZiCkX",
  "key14": "62gojHN4oUw7h7JbJU5E5VAFmSS714oVcMbvcsdLDyd8NTm3kJ2biCKFvSrNqyoUF4eSV328cb9xXxJy9iuPg3um",
  "key15": "2VPXnK2iUjHj7kxXuNq8wQRhRQ7Gdq7M1s3kDvWe4uVyVeAMn1CJN87pwCgLtEyhyjkMNz1wWBeecyai9gPR7PQv",
  "key16": "5C7bhVg1FUmWxjP9xdQLMnaaXu21yHZUHgezkSPeoi2ZUtwwdUEAKeckyPLrBJH2SPvYeedMscH1th5obv68chWZ",
  "key17": "4pCrG2YdsG74bvUpjZhEF1VG3Pa2XGREJ1fxXyhVNT5o7MCePKMbhiTMXbJFE7MGaWHNwphhubzgE5TX6TXMXE2k",
  "key18": "5Ri1jiHAF4NZYbDqs2MyKhUpQekSzrhxKGWuagkD5xVhzed6nqKXcc84jqXsznBQ43DricrzgwEDPDppfh1atCPX",
  "key19": "4twK91F5Lbr1uQbi6M7Rjny5YQZnx8XHF2QZftbcCBPXzFF1peXfFMNiKqVR6RYv3QMu8g1ak2ttAxpMSubhsyKP",
  "key20": "2XZezdCwgyP6oXmknKR6TYyjk5RsB3EtK7wiinDqcyajfJANtfuocupi2mWHcoZCCxFRMybK5WA9sNNxfYNmgjcQ",
  "key21": "3xAMN4sX3r4DBwXBnFhS2VAQFwvvu93HQdkEap77HHfAuQDZCJC7PNb114Mw4n5JQM7rSPTnBcSpeAuJoopj4Vwh",
  "key22": "2oFoCxT8FGhz3M4mEKXH9PgUXL72pyhMcYbG2bmpTzUwRUA3Nh5R6MhQuVxFYXSCRHfHfLE3B2nLJV9j7PxX2ajP",
  "key23": "4AEvRL3z7EQC6prMvQv52JqfuAeKRjCLy1YSUi1tmf9XkmNF1as5wv9eFE2PV6GHbtFtKnWGDsqbZt3ZoJsbcnKU",
  "key24": "4M11JpDKxvtQb5ijav9MDW2e4caiCSdNLSZqTBGvN26UWdDq9S7pjQa5jyZ8BLqvi9T1r6LV3QooCQ7aDzN2ryny",
  "key25": "3pYUStHpXdE3cXDBEzipVwBggj9j6jvLLr5VicT4zSGLMb6ndccyZS3Jeeg43wKP3jdeKjeKMEawJ8TuwtcaemTp",
  "key26": "5KEDmQicNxrQiRhEW9e36YokkcdJeEoRBUPt6R9ix51zRDe5T7fS9ju5zojxZank2YShFuHQBW4F2LqavZXnRM7z",
  "key27": "4rUWT6E1A1dhpe4zUmxCTq3CaRpzakKhRJdXRfz9FYXL8EJLUrhCqiZXbrTsz59v9BHQR37W4gwsrL4fEJzVPXAY",
  "key28": "3u39to5ep4XCscwTDzqFLkfgcRwGXZ19ghauwoyFRzPyWJdi6MrreWCWDxXdGZYCsimPWaEeaU2m5kN3Er9Yq4WB",
  "key29": "AZLmmUPUbLwbsNx7v8NPNh1DBt5nEqMWEXBRxcXXWJpBPp6NuGzZ8RdBrFRAHLJN98hwB8vk22CKYqkyYPR5K4G",
  "key30": "2nVxcRqxyFMe9AN13mFLFxZitSynA16R4sQQgkhnsaoE7jcfLVhts5F1LHiaTD7HQBuBPoMXh8s34HzP8rvBEDn",
  "key31": "3kVM9kt1fb5xUFn9h2Cgqm3pmgDNZSfq7mNuhRv4r3c1AhmK3R6uyHM6BERGvt31LTC3bSrALeduARoyrwLpMZEy",
  "key32": "5sxoGGtWVFaTeGMrP71CWnAHRbD4DamFTJckGLEoY8rdk1TojTCf84VyjMoHG8i4dr5BZAPdPXRa7PeXW4TaZMuN",
  "key33": "2os3NapiQpxLqVhDxjq8xjvpBFWWSfjPFVZtRd15b3VuPQ8WnucHPn1Zba6wx9SUQsxbboWjNyyafqk7MS3vVZrn",
  "key34": "4wYtvjpJjA36kvGk5cru1gww21dQzHE5E34zLFRxcSKzU78RpDxfX7D7bDXKmtegupntzTyKUrPobtrYigeb1qDS",
  "key35": "2bp6PpzvsvDA1VCVawtw46irCFc2RPcrc2cgmCgzZybxHsFL5ifGa2njGhjwYV8Hq7Cf7BmJMUp9BiDNrxwsja4S",
  "key36": "Xo29RYG1EHcZUwMRxAQjTyWBQKsffviJaogSqzHHJfKwgixZfobuivGU6akZn5psZEiHZsmGKDWhfxaVW8q4MT7",
  "key37": "2Hqmj3k5dGgsRD2RkF3aWw4aFBSxqJi8J5kTW8y4KXeV5kf3tA21CxDubYu2nKk4LHZGD1p9YVWu9zPA3gynP2pT"
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
