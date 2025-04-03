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
    "2Qvmqk4UCVwkaYoauCos7Ab54TSD44NjdARw5A2AjjAyAiyjGofvQauEMxzZq6GjC2WqTR4b9agqTEuq48zqUwMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mJAby2Ni5Q4NAJK6TYdkDSss5nf36upXQxUxVNDUo4Ya26BQwKfZh6Q8kmmvXJfp48fQtZ7BbdnMdvzMM5xH9LC",
  "key1": "5t33MeZvPu6rRBMrqoBuYHL7p4bG7zA2sWERZ7fwN6ZQdzFJKCi56SBKmPJEqMEa3NZbx5pQ1jWJ8XVuGTKpgyv5",
  "key2": "4iWY23dF5T33hdnq7mPkhxr5REW61w1YxyEqSnT3wi2pCwkrGAHiapJM55aWrwxVne9zbVjR3dxU1p4aj4CtLxNR",
  "key3": "3X8LeYt8H1Wa5jXAPGg4e61W4nYrrkNHQGdG2KnJew7GsoA8PHVfoyu44zAkM7Twhmw5EQWMgwNpjx97thTpWJqB",
  "key4": "5tnosHRiVnGJQNfo3RfvmzLNGSX4GL1CXZGAdzx88956U7wYgh29bYHLQzg1Ynv8VhMr6L6NrjuWDPXoDp4Tkf4n",
  "key5": "4c9S3KsQu4kkwD4VhkQXzpC5ConnyMFKmCxi7whv5VCBEXKqzzmtGEoVSXnJpycnZVrd7VDXMXZrQ6Zt4TzfGC7S",
  "key6": "3UAgKoXLrLAtXELhBk7dJFSoRUFXKqiDEmSWhhS6a4cQtP1ZKgtYVkFAg8PYBvcWM4E14CS9kw7m74VY5Bv4YUKM",
  "key7": "3cGPrYqxRFvn5GChf7VtnyDdiHbUkkYEkS6EhRkPjSJPcF8tAi5EfXbLfy71tHT5wyVdeqesiYcsCUWMxkTy574p",
  "key8": "3tzFq2yuyk98kmD1Qo8f6VbYE94wTGHNv99EM4KkG6puA1CLkLH64JimYg77ScpkBC2Mf7K7q7Dqh8KXWZqn1Jk2",
  "key9": "3f577Loe72Bz3qo1rzAUHhfnbQWWPU5TTnmeg1X6Ha4K9Buwq7XR3mAfZJyADwBompWrwR6UGr22kTkHuc97GP1u",
  "key10": "5pRRchyr4iJwx1tHTsutdvAgRzZ3193v6cae88nVDtCVtdESx6XXDkE48E81NByKzycgSrVCwdJvsJogK5SMgyLV",
  "key11": "RjrtVKFrvZPUGH281qJX5pFhtsvgQw3nfDFHeebd4oC3zApgLfSWQLBXicCQ2ky5EEzg8uAJF4UmZsGN3Jvn4Mj",
  "key12": "355WwaBwmQSHYDomAgFBBXhdMBmeNhk18EKDDTrH8BnVAQqnYJYDCr8PwBBgkhjtwxLWLxEc7pFzQ8YeRMPYPXTb",
  "key13": "5wBv8XKk3HiVzMLPNEssEwf7GqivXWvu2SY82WRYbZDnn4RpzLeRqzcTLiTWDbj26upr5AZdnmZKtooY5cvVDk1t",
  "key14": "4PDCLNYCurkRoTyCYebthq1Az5HHsSMcParHddDcYV84Zvn7XJAyKuRJ2LGHbU3o5GsAT2rv6rSy1TGmKyLhq6Gj",
  "key15": "4wfK8i45MDzovYrexSVwHss4QyqGq5DatNuT5XFMyevyyaBU6ohQFpiZYmM5KBnfM8LqUrLomKLgRx53R2ggPtoi",
  "key16": "tFZV9B8dpBNM2aPcZCJusXD9Pmf7ZMFQH4GPrA2TV1m9guYFvvGpAtNtrgV5HXY4xbAyavvdDPvN2JhgPLV2Mf6",
  "key17": "2ZhqW8TGtM1gAhvffQxmXr7ndgpEMi1vVeQg23bv4iHK7tc3B5A4Nd6gyhCskoMxJpK3EwQfcqd7JENTe7Cxca7P",
  "key18": "28CkZcXr4W8MpvFogSFDug8Wv8aSTU97k74AZg7qQ8vChZG5uidn4aJ8MKjTAUSszhGDoGhFthqvebM6H2cRXtW6",
  "key19": "4CiWXmS5jmjJCvJhGqFTeELYVAH9Lh8HoUoq294FsDhytFGrpBRMCQpEJNWGZCSf6c8TVfiitaEgGFF5mvvSjYAB",
  "key20": "4UuDNgy5FdB3ZqBtnpXLmeq4NQ4iQUuYnFpeyiEQfswmUBfCT4NwLSiXLxaSgmHPDXXkxrJxrJqXHF4te7fAdVLr",
  "key21": "2ksyJi5pVgFsJigRw4wwJxFhTiVqESxUqmW5EcqQoC1JUUjPay173TTBn3Nq8C1XNzMwwatxnarr8DcZSxZaJ4w",
  "key22": "3nXXHr79Q2jv92JPQKyBUCUKGvnWisGShMSvLK6PMS5pzhh21kh3HvMWGZf5mprzFGebPtKbyPZVd7zfy2QoGYqw",
  "key23": "fjfeu4ydrasQtxxC8vgMP4sqrQuVkuMD3NTyWPyvTXV4NuRhGdip5gP11XHBfbEHnQX4hpFfPRrbxL62zbDngcM",
  "key24": "2cnKbDYkkuJ8KBRbvCQKLMMAsACv9azejUfvirJrEJeiWbDnoeoNsSgHytLUr15fmQGKpqAurEscxckoJ3LSiDRN",
  "key25": "4VfbdG4ZzVKe3xurfLDE1phogtKWp9xZnJLy63GukPTZsWqFs5AhG7HhqYR54vSabpdSzP1thVEDdiE3tib3YVAd",
  "key26": "2TGsUZmwouM6jAt3WFWFH9RxKTTEj2rxrv4GFJRzZptCtEGbdjXwYTKEhRLVjiT1R8ZjNTafgSLzPrJmCYAraPVJ",
  "key27": "5Dy3T3Q8hhSF1ASYm5c9Cws3CfoiqCnBrG517fXDaD4zGcseAFJcwo4caHunQvaYrDoFg5zkBv6L7Q1D7AWtuGzK",
  "key28": "5pPG8zbSbvHadwsC4NeYuQ5Q9dKuoJkm48gmocR5qVsqW68VNd5ESLVHbQkYS9D4s5DMPxhiSCbotVMuNivn6r95",
  "key29": "ZRXjXMvctcG6U6RktsTbLLg9DoVCgS8yieq6E77Q38pvYGM2SaPdvmZmjtct8Ma1kxX2M1kRmiwJ1eiUyd5Mgmr",
  "key30": "KTWPVRN74pxwj6ZbRmX8WyowX3nYXLc2K4hTG9nwgKdmp1mTkUPp3yLZFrx7eRG6DgUVJAvB2HzBvh4h2gQWG6q",
  "key31": "5wostSN3mTfdKdPSJJgpxzV25cXmrUPZshvraUxmtKEurHPhKv4oArK6q3zyTnNbs3NFhbma4MiUgr2MA3pLfQuP",
  "key32": "k5NKY7WfENYtwp8iSoekDyLAZQArGgbRjnPv2rPDML5t3BHbnCfWMHf8LyWqqcjKG8ZG6XTWTwe76WF1HZDVcPr",
  "key33": "37pfyBBmuGeMbgRXSN3V6ntawgb62t2PGToJAshiFiALjU9PjYsmXSJrcgNJtd5WrGevy2454ADXcF6brca6mXP2",
  "key34": "3PvgE6e1dY9GX5eXTo69EZdeigUhXmfNJGb3LxQTLKoV5kRL6pfrEXgXy3JMEZ7bcGe1Gj5fzLzGuGJCWnSSMNY4",
  "key35": "zAYMUApixZFLQN16ZkAwczc7N1sRYDf41c4m6sY7uLYyvfvVCVKHBjc8jKjq1Y3EYFxsGRLzemB5HRYyRPwcWiE",
  "key36": "ub2G3M3WSpe34TCequUFdtseWNXiqozX7CQMA2Az8aHqWnV23wk5tw5Df3ZBUsLLaeDVvCH7AkhY2CFMSR4tWor"
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
