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
    "5TNSafuBLDfaTYajeQ54hyYM8S4LMs7jxnAhstxQW61Fkq6uBAhZWqLKuueiCsHm4NySWsG9GeXx5L6gZk6nHS4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4edskE8uMSdf68CajTezGpgAx1URBK2JgEhCCMjWmarPWFrzbxCD8bT3S6ZUPCyPEhWnerotLREerUxnhiTjYhrF",
  "key1": "2gQiBxhKu2mb5QXKWDnvZwBfwu71c3V2BaqcUf55HifVRAVqapExwCgkgm6mDHn8Ro9dQM6vAwxCW42FSsKddHKG",
  "key2": "4qby8cmUm1pYDyWXPeQweciRe5DChKdBLw6evAjfRjSBNgJU9i2R8Tv3Erq4ouPh6HcYcqtTxy2SNKwRuqfaNNpN",
  "key3": "3CEo3eDtWD9PqEs3j1ghj8Jmf3c9Zcyb3PX9x1s3zwtsrT6YRfLNCbf9N4oXg3eSPUHnD2PMGzpDsvKf9zuZ4cfc",
  "key4": "4SdE2N2czgLCcSv1ixZsMHsgtKF531dyLhqoyx9QCpMCe7WzDFrrnLQxsWT8H3ftWmmKLbfUJeW1FknUp1jXVwnU",
  "key5": "o79nU5tvsjPCEFxg3bLSVQ4auqiuy8PZSXUijNjuw3qkjc6ahipyL23BA2dkoeDLNJpwd3UQLHNGbt5KySktMu1",
  "key6": "4Kpb3CwuK73RSgbybKoWXkVoWpR6EqiDRfjhKU9fFijZNDjbAvJNJ6y6if4uBDmGsyaN3MfBnuwQL1b7rA34KajJ",
  "key7": "3S66JFxdrgno5ybsLiFau14Y5j4YZdg3TLgqV8vVqga3AUXdyH8Mb9yGTse4BJn6VpLkWFpcDbhpPjjAddAQGzoe",
  "key8": "2jkZCVCptH4b3h7tyYth8smrPVSGhSUNxYCowMaNuYsR8z5ngnbcgB5DTjWYtaQc4MZoXgWFivHWjegi3N81ojDd",
  "key9": "3ubCSjmkRt3x7oaHHSVK7XsAG5DDYzX1DFJtTLsnAc7aMY5hjg4HHMaWH7EreT5d4rVHdNk2arDaC2rvnYDgYxf3",
  "key10": "3JGCBHWjY9coBeQAB6qR63uuJNNSTBJqXMeCmcaGjP9KNr9dzkfd51AVfenvQsWSZcm1pb8NU2u649qKgmhm2eGu",
  "key11": "3aohne6jRpRKUGUAvWvk91LKSBnbjfNtmgaNhpaGABDNq9ymYKsMaFR9UF3DX3pKr6zb9RHSd3TxY7dAmyUiJ6cW",
  "key12": "5wrH9rcncyxEe9anRXRmcos82paQpsePTQ1QXUpSYqeXg5BP619L8j5N45bvKWyGqF4TBKup1VNzRdSFqFWwmcVF",
  "key13": "DCjAzd4bN3mTXddGcU1zkHoD2mM8wrM68xh1KYF9Uc2hUXQVJC9i98cGLHCZaXA4URfNXxrtnMFXaZKx8XEeR35",
  "key14": "56yCQaFd5HTctXbNCMVUJcQHCq2ZTFQigyfr8RTaWBfMuJ9bdjApXn5gXLkb6aLEfHxJ8QaCiRAchXsVaESnedVE",
  "key15": "21opRBqkFrRdvQbWjKmP5qsCUgMtD7qU43MWb3kyopwPdWucZFcx9oBxRT65yDj4YGv8LTVMzem2RL3AUuWAG2R4",
  "key16": "45u2SB8Bd42BDSgG6jgapPmCLT4ePm6WCqXLqEFFq8f7F9cstx9Eo23tRDZnSVTTKJ71jvj5Q3HxEiDS9GRNTo6B",
  "key17": "2YTPtLZGqXRuouW5yK7DYhYGFpFe1uNPuSnY42dqr4NDPLkGGqDwLyxBUas7KEeJRX31CdjLDT6zXnMb7NvFdQvc",
  "key18": "46duwS3c71UsPJuLPUQ7MDFuStHz5vFJ7xbhx7jy7EVUmyUBAoZ1zDekELUoDxdLbFY9GqAWRj5mFUcKx2Xfn98A",
  "key19": "22xCs9kMHySEB2dPhmHBqhzcYk8CvUebWNXPt4GbKJJFiCAqp8RbEs7nWz5peesZGJ9pfe6H5eed4BKS8NYPEs6R",
  "key20": "4JoaLtvjjrshHbPkFWsRdHgTGsQyHwBXnvu9twdARdmMRZMJsmr9W6TUHQBtseix61RPjURTSSts7K7HGixNEij6",
  "key21": "3gbTxkqzBoTWy1XXA9tkwAxfkBMLdY34f4pVDUqwajaCTfoL8qHRimk1yMeyGDbqeUkcdLHuTsYWLVAcMTtAhxF",
  "key22": "ryhbg7BmoNaiiPGpreH3hQHM3ULF59U16KLjsUrtz8FoKMJcwZ5LcHMfAjdPPzJR19EmidEjbUu7bSAui51qR2F",
  "key23": "5Rp14mU6pVFXQKNSGfZzi5puUsB7bNYCG6hanuQjJD16ni7sffPtBnDMT2bHZwgGpkBSGRLYTxRzVEWdBxCvjxb1",
  "key24": "2tW1EuMHhsUtScBGZQC2Z4nLWxA9z7Koc1BVd64pYHBVgaQCRDfRubkxoh8ewbQwCbFS6afDHDCtzAVmjsxciCbK",
  "key25": "2EGHhxnkei8wuJ2wrtwY6sa4ugpBku86MdZakSMovmr1pUg7RuoPbVVEvBW6X3niUdXDNkVrgjvkMa3w2NMjn3B2",
  "key26": "fk2D2mBsibVAhsWqbTZLPaUcavciWwdRgMYevoungQ7imZRBsR2Ru2jERdcVvdcSYe1RpPxjJFCRgnqd54QxnVq",
  "key27": "4fhh2FeJ9rJfHK6Xp3TrBg1yiUJCcht7JppYXwzvNJcw6HD8V5Pcu7e6LxMuF5XamJFjSBiYtQh52DvKUp965koS",
  "key28": "uHCmyepCubATLSTGb7aXpEpaJuUR1fkuhdViYxskKNzruTv3x2R57Grwhu6NoZbQhENcP8nANc1BbfWzFpaWVjh",
  "key29": "34mJjeDkp9s5YJnD1yw6R1VEptQ9tx4zA3ma2WRSxzYUQYXfVcWosXxiGmLR3eUwWeCEU9Jvxosr7PRujX3TLmJb",
  "key30": "2BcbaVJpfnWzT3QHYP7QkEzd9zVSRMMsuckYSNga3Lz9T7eYhXEgCqrpM3ojoVRGDTAzyFYdyyVy1FjT1CCeymRc",
  "key31": "4fcWiS9QnpLjoBXTVD2V3iAK8i1NLX5VLdmeXy38nacCAxD89uUYAKW5dM4sUeX1ZzLRCp3KqyxSKyAVxbe1qbzY"
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
