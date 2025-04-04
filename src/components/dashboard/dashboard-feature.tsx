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
    "84s2nkKv3iqy5tbFuFn3D7CaEbkMdWdRE9T25jE8WXTwrRt9WwZycLtFNBqrz32AWy5ruoAghnKrdAEg4EJooxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bn7V5RwVbPE8LhbbpdgNiKfHCBiQLb8DetE8v73E1Q6xww97tDVLdxnBtHZZNE2Q8Mdq77KN1ZrpvTjKKn11oAK",
  "key1": "42mfLnyximgQhYgznoETuLeuMbyGvuQCKHHhW2hfD4A2eEkWQ41Vk1DjgqQQqmHbMrEuidKMUjVbDkLXAENTKSP3",
  "key2": "31FDB1xUmVDWqj2TuNRoQactZN7hmLTNZZMidx54fRLdQxa78V3M9zJexN7Yu9zpn3jY6ehrWixG9bDP8YgnrAty",
  "key3": "4BLZTf5JqXnJSptE9fjLB61YSRiSXcg5TL2UTyZesJCvebP2xuL5SogyWBkzHFqkqwQuPec7YFRdx1qLzDad36YR",
  "key4": "369aRVUHAHEDgxSrTYw5Pe17BeB1gX53EBgQ5cMVkRbKjbb1V2UbgdRXs3XWF28oBtzKNNqNVkXR5n9SbHeV86n9",
  "key5": "3DaGkg3skPmZQgkFJZ3Kj8npqvULwreYJHontrUAaQQoaemVFJVM9hxA58X4tV2fytv7p1UNpqyogDJ5fhmFKUMU",
  "key6": "36PnQ5G78t2To19LqSDeTJ3yVoR6cfAj225WoSLqXjioEtcmjpjjn7vCm7VY7exLNQA45ou62vUBCZFa3dtpAM9t",
  "key7": "2Y6DtRA5y9Kc5epYejBmScjivF78R3HcmYpB9t4Km7PPQj7gZwqSsa8JVHfe7qQY7n2Tu8cU6Wh2bkkLoki9n46c",
  "key8": "3LMnGPgyd2Ld2AZiUu7Yj6vWjEroYvC5AeaYoGWBCp6JMFCqphj9Re1QAmYUrf5DDjsgQFF2QpwvBJBbHTjqhXJ3",
  "key9": "JitZ1eoGBUxrdkM9jRysSQUuDUPbqtrVkrjFKqaRgB1Vk5BUUsT5wjgb7XNew2D3L3sJXKfKttCB9DEHh47uPXY",
  "key10": "4fVAj5zjwfHed8VATHpajjXhiFaVzZUbcfvaBtyEUpeooLPZTHwtvQgPRzDCPxo82bFYr182SCs9T9y6DtaFjc2M",
  "key11": "67FYBQEaqkBKFrdpSKmfSteU4cxNHiSrTnBX8RK5K5YhCKa2a2viJLZ1e4CLeMssLiYBAUseVhvxHQHiy6RDZCvK",
  "key12": "36XD6iBEvdNYG9b7Qeatht5hzfmsB8ehXefb6JKNLeyhcR7xMovyiVZdBZnoF9JesrxtZuWr5TAf2tmEyyJiR2bQ",
  "key13": "a6kopvtJkYk3yHAH5Vxit9NyYHoPp8KPVB6uqCVefBw2jQ8NurBQRzhSwK1eCD72k3yWpKLv2wKnrX9KQxixC9f",
  "key14": "4m1fNU551pWmt8TfwpfdMWcsmZ4r1nFeyibHxHtmVcBmJhxCgHkrzeK9eaNriSsBgiuQHR1e124CpB5mThiLmbuZ",
  "key15": "3JBuVF6GjxmMbHqLPq5D6BE88SShvzSZMP9N6MbM2vFyTfeL98rFRMUaCbC8XEkKgqyt93BfPs7SsnKSqjsPyBCG",
  "key16": "2wEJB4zrPcdQJmW3u3ptP1M92z4agHagdrj4yjbL1LcZroUhw3o2WUPHXWWcGA5Nnz1c9SCvPD5KhKz2Nrr2z8ZW",
  "key17": "4SrNHHBkD3S9EmMvaVLyJUeFVsPGZKdWgSsGrP1d8dA4Gde8bJ99G2XAvNu65U8tUAr9TnLhC8t4f3RCmeaT9yad",
  "key18": "2fRhfwtnYHD4K4Eaif1wXo7ZtfSy5dKRHFqpfBw3Qdk4K7zr64i11x3XamwqQbRPa7TrBqQzTuKPrQ94oWKC2ZJV",
  "key19": "21pQxpaPokm1hrtpwXD4FF7q3zWJktByEncYW7TuKqFaYLp8AGfRTpTKNhDFeG7ZQpdUULfuWbfF5ZRu6nvnZVbk",
  "key20": "31cvwUdXMYunPfbYSWJ2CHqvGk5cciK1U4gutYmJ6PF8GJm1bgQ97RdkSUXFrSzDRYpGQ1PBKPwGKb1e4iA7uGiK",
  "key21": "3uzhKJzLLLRJnuMhTLsQXbGxEbkfSDwYjhshnKRHZSXogqDugYdQG9UAd38CvhG1koehw3eetnjLnU6HR3b2wa98",
  "key22": "65mGRfFEJEqJMErRzentdKQ5P1FUP4CSsc7evo39FqG5iWA1Rzf8CiNASMevqmGrTVZtof1U4is2cf9nT37d1Kcj",
  "key23": "5o7vh78GxesV4FMwSKHE5VMjc5KSTFjU43njBB2Gn64UkgqYR2a5ZSgYuct3mJX2TtrwZ24vE3aC9U1FDizTh3FQ",
  "key24": "2rX2rxnqPbZcyL6sBtGfqDSc5sE19g3Uzu3mfArJtAAmaBdY9gLattPBioJZWu2JuBqxshEEjZHXxZPsrWDoiNfc",
  "key25": "4r6GrFKYGAj5rtFwVwmWpgFhP282G68gDFH1VbjCFJ4qdqHsHL23CyAPpT4mcTyu465gER3c8eZR1YWcAAaXkLKn",
  "key26": "53u4RYchdEeT6GRBah5o5zjntdY8zmqxx25agPoMRXZmeeRumFUsY3ySvS61bf5nztH9fXJzoz43JmQGfgSrWkQP",
  "key27": "3d5rSkq6DhvcchrvyWiyaMUvMHp6uMLQhFoz2UzJEJtXbNooCRJ5j78m8S4g9146kL95H51GXu9fqjsWHEpPcSjG",
  "key28": "2BPUH22ME3DK1BvUQFg3bMJ8crNUMBHNmvDi7ZSUG9hHNFAV6nvoc6xGYLebdrz3696b3uNkGnExbsq4wdhfuNNB",
  "key29": "2CdcyQ6ZhvZqeAa8LXuTNcoBNRWZg5DjGnbmToryetNrkGEd3DHbmmbmcy9T5e6mWHQAcSJk32xFfasChpkWHHaf",
  "key30": "2bEv8H7iZA5Z1Je7TXTbJNiTKBq3UAnxLrCrvin45opKT9zUkqS85oeXcUi2GWmqyZNrek9tnZCUVdXaoGFyVgZu",
  "key31": "4x4CA4LAGFGaL6yfqSWShWbo7ATBqumFymqUVua3o8UgBp9wSWixcbUcCnfeeBbCnNSRpBraqc4hdCXmYY66XfxV",
  "key32": "BWyxQFj578yqTzKs3Lus6BnYeXZ8rN6Tn8BUDiiQyVGjijVEzmi8jbWSNzEHuUY1BuHXFTTLZrj8Z4B5WUrfe4x",
  "key33": "2xQgVY3T8zqxy2bqdZc8693Wq1XtJ8GQdedhu18jQ6UX744EvKTdMMn8U2VRLPNa6TWbhxtstzieKzsVyUyWoEKU"
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
