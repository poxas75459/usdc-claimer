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
    "4NtXk1vYddd8qTRf1rhYs5qE2dSjDY3byEZR2huoby7dhNaEGnAtwfWLyN8uGDaFi85jRwEmoBG8xy4pU2VjBPFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sU3TWws14d9wKEVdFRCY12WTXgWuCftnuAXMr3ckWDzXaSW77McPUkSWbCh5hRnikUPsKuMypoSkijRbedWre4m",
  "key1": "xJ6L87gptWZcTGtfqaagQ53Mo6W9dFrMdf2zhzCaTHw474EWewuyYtEWxMtFi7cLpJokechugTdtMUwK1iWy8i2",
  "key2": "3dSps3RGfDqNnfEEgB7PgHANFCfSFiBAWB9EPCpoygdsL7uLxZV945RaKANUfzZLXv6kgMhpNK4tB9euEYV89jKS",
  "key3": "4ZPR8sT73KVHvhbo9Ejy6ocZ1rs3UCAqhVqYXRuv2WPCiT6v2eKBwF4xsrcSfKKytgocYUzKYyxMejVGAPTB56KW",
  "key4": "4nTKPPXPZUTVSBuq4exaqEptu2E56tj74jRZDZK3vnYLhpk7Gtuuh5Hb3hbzhWV9ASQUHuf7mWBXaMPZLFkjCNso",
  "key5": "5djycF6pQKZnRL9qCiUDZFjJadsQqH4b2fTBKmMHD2ZFugetK6FJekTU1bSEbExistrUPCTPYUbkhbDqAs62EheG",
  "key6": "337jQmGB2GazEh1R5QkseUoWhUv1FRgTj8nwZhraeRjtWWVdKTJbDDb8UvKPQH1inm1wURLDYAd3tjt2F6ag3RSF",
  "key7": "4xL6UMRfidfwSDsKJ7D4G3hpDiuwK8XK1F7JrEwGJRTBHmbcfqTN7V7pMF5uNr6mCGcGeeHcLFAZqgnzTxHRmefR",
  "key8": "3TwYuiYBELKe293343JCNKX2AV33vhAGBcZCFa2k3saaHYtB5U5yTKueJX5sZXdcinR8RyW9kGePMD2EWMYc8KfW",
  "key9": "39gYNrTd4SAnVPyHvGhsASu48FQ8E4XtSi2tvzoj9JSnbfucxQVdSSecG12UJqQcrWdSFfjuqiK5KRyY1pioEDUh",
  "key10": "579Cj9ZRMcf6nXkfFbLsBrZJ86bHGKFhELUwbENS8Rae9QBjQqMfKh5mec1xq1BKwyt7g4M8T1eP3gTFYeCP9GFB",
  "key11": "42QzhvR69AezfCGwNkT9YUk6WbZhCcNqsdm3sGrkN7cLo83tqvCMYDtpPuG5f3xL5qykLkdfiCpRTyBa4yyWYFS2",
  "key12": "4Ayq1h88LbH5A2htqrTDja2SiNV2N3KF8XWgfHoynsvsryzP4WpUkBRupsfS4kuBVG1UcCBRUqqudapk5yP9VsPd",
  "key13": "3GwXQWZTA5keWjwey7xBskPQqHk7PLGPUC3bvHkaztn9ZLXSgmJ6ziL2LZiwjQDsVd463dEmrxGZbg64RjpdyPnw",
  "key14": "4d7TusMhE4pNizhYmjwVtS91ufFJwqqCKBz923os9nv8fgCYSMKaCX1FQqWQJCEvCinrCdFT6yCamA2BTsu1SgtP",
  "key15": "2a7sS1LzCoK6wc2dw2sUu1LsgnvoZPBnZqokGPDWPSpmYjfW4egmWMrKncAGc1pPrFMhDypZTngXs5rtb3Cz4VaR",
  "key16": "2AgLKgn3LJdDc6zVT7KrzuBWKqptvZ6ynTBKgNg4QgXUscrJ2r6FFeAtD2MPBbCf9pEMeGKdshkD4nCBFNGp9AZ7",
  "key17": "4RiNoj6CeNASqndX4ThyQUbTnPwa2PKTteZ8qtyaLWTwcfmNZDqZzrJ5kQGq7GmvWnzXSeEi1ifBC3sfDQTLj5if",
  "key18": "5zrgLTP7r9CdVJPAACoZJswi1r5M7M6VU5NE6Tg2DjdviQetYXgUj1etMQyVH8Pa8DJZWsC33zAPXhg7zhvtYH4W",
  "key19": "CsmsyUPzgCJmwM3wEroDgLBvSNygTAZBEUdA2eJADArm7knZpGMrmzGwDpx9DYwRobamFWnBvkTDw3Zow1ViyS1",
  "key20": "r6dwCvQnX5gBj1oybC5NWKsFHwuyDiytQH6VAfpezhFVFvKfETm6abToRoFiobNXdQoJiqWf2bTwpsGp5GRmnsZ",
  "key21": "4qkjrBSBqP7TRaUUuT3PoDxkzwU3xyaHmWHGKFEy8XtxSnuoMd3513z5May4vpebLG5Lj1kPpyoKLKUkU8uGVRmM",
  "key22": "59Xvz7S5AUXEA2KmTaCk1WVMiZStzZiyhNaKgEHM8a22qJ4UzmV7sottKLedCLwVQgHHxax52ruKUkSWLTFPnLNV",
  "key23": "5PBqamFSKhR8qvzPJ4qmjXLXRCEsnhBiEvVGQ5nrF6iumMmAH6hBYTFhWb2thr4fLSiwZTSqSftoLrJiM9QVdFFf",
  "key24": "5vD5Ynr6EEYbuPdM5zCcnyLsb9qQjw8bZ7GA6DHS9QiJ14u1nvSpPj5UWQWQMwTe3Y3XEJkMohQQoY89i312bS7S",
  "key25": "5hu4uYSSiAGRHtiaXgoZoe8mQZkE2up3R3bmrL6QzWbfeD4nPERVnFH4gS13uV4opGbytK6Q6fNSCzhhP24RR3iv",
  "key26": "5o6tL2u4JtqPMdmRm3329mUpXBhuxQHRohCn23RWrcvdovAiLvoeqfG5CrfU5ii72fDTAnfpoAWp3it1wyM2DrR5",
  "key27": "3aM6zAj5vUvkeMErm3nSCsZgQArmFBpeCrPsLnqBgtA4r5pYgsie3K6d1Jyhz8TFNrwMWJexagKTncfaGy5tphzU",
  "key28": "4VUsCMYDgEdkE9DGBGTfAKXQRb4JSYopfzhztPVXtAZmA4n8TVL1G7DAESctL314Wqya2z1ttQdyTAutZ6gQ7Se2",
  "key29": "5o7FdiFK5DSeW6TnR5qkjoTzJhHX6wqcueZzCCRjqiWfZzbtwdNWY4ykH8JG56vPdtgypt4XQ5bbovbpc6C3Rxph",
  "key30": "3LaVqStDmUfJWbT7Ree4NXcLp44j4tzG99X6BYrKAfR4mosMVvfBg4Pa8ngxiZMQF6so9WUurRpQdKowUycJFssP",
  "key31": "4ctDTGKnegFknqNKDvroR56NUdSNRrNCmCPkNWQi3wV8xzE4z3NB7LjzYUwujnAQG7Vsmy3EkoUz7g6q6VpxhYbK",
  "key32": "CL4c1SbLJGyeacwCFrQ1JKfBy5gJNhe1GNN5BU7dXeUxUpJcEkQfLkB1rYRqwaKXktDPFyNJok8mqRC2P4nAfGm",
  "key33": "2QZrY134gm7AfMBPk54Tyknkc1QuU9him8UMGPMjJVqCcun2hAeQiew83zkbHCAj45GTKQpuEqTiBV6zqZiq2W5X",
  "key34": "aBVeYBPpaH5UUxhdoNtTYkoNxCA2LPc5WbK9kuBQmNLd3XiYiP8wSWmxjwn2UENBnFp15BznpmiqAbh15mTq4eQ",
  "key35": "65UNNp6a136DzqudzD2nQitogDf7c8J2wkS47eospDRZpaanZPhNtG1EGMFZfQMFA5HJN9rjw6bwS3SjvmrnANaB",
  "key36": "k6Am6X4WLipkhBHb9gzv2w6deQ3XdgtDCSquu9wXp5WCA24kRx41krUNj5c4AgFLapbk6U7XyGnhDcMPsvRvZfE",
  "key37": "JxpWwiPChGGA7g9JFjFDn2937kJAfoX7SnS6hcDCbn8iQGBF3rUWJ5CUV6QwwsAzaaLajrzWSJQbvk857KFH9ps",
  "key38": "5V3f5QY3QcaYEAmukox5Ta6zCn1BnLJrSaxGmMbyMBjPNnWUbKx5Y9RhLnaJSiebNpRx8i2bo164zPZJteUkoAFM",
  "key39": "41rPgh6KmCPzAVUcQujGT8AJmFohKeY6QjZFTxqekToU6vRapyZc4H6puV7Q9vRiHMbEa87BY15eRKm7Zfk5YBCk",
  "key40": "5QEb5vcZTxDi5573mTRsP2XLuTN9FfGimfLo9CorGnjeyVHKo5wxkHsonNNp7z3JU5TpgUyY7A76dVq8yAXHpvns"
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
