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
    "36aEkXgEdnT8zBLSLmTafehkoYXef3AiRSDrxV9SG872aNuqYpHU79mWAxzZhZRrRNsogsHezUzExKU43kxVPL8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dEVUxjejCgEFQuUDvSYwMTJHHs927bFUbnEogcqvDGGnAXovHryaWE9se3kS1CuNWuSxYit7D8QdFFxYjjsJrsB",
  "key1": "2MvtUYrzGX4GHiYqBLkk9MM8D9QixxCpsBLJFBrpCmrZwNwuqVtZHipvqheEQFPt6uWqXnZF4zGvPDSA1MgW9dEv",
  "key2": "66TLrEzoYsVMyJuw9bD77XeQBxaPVS5brAZArKT9SZpZAg2VwGyNMqLcpKBRMrWdmNisz7NpfJQoxHddnEUGZJrb",
  "key3": "3TzscnGRyef95ym8xMfm6aQkzzcYUx17N8XLHcqNYxC5ZYoR5C3R8FzBykeCRHnguqPKwf9FcYhoHwroBZfuR3d5",
  "key4": "3UXtZYH8XTc6HR2jC1sNPFdkEGmeiyzttRzTy7M3iqUWqAfEqFJoQGRqcUmG8bk5bhtYXrRonDgsXZmYy78TLdo9",
  "key5": "TftfCq8fB6fgpqHE19Pwr3xVSYTmRz9fX4VtZritM9mEeqNytLNsrZhWpVEiFz4XPg8jeXcJH99dPPm5XBXP1gz",
  "key6": "4FRYPJv7REnQMPLu6VpRePvZhXY71wPcgSWfRVwZNDTHh1kxS2xWzR2KiD7FwtJ9G2vhTQXMeuKouHob7rryZDFU",
  "key7": "zwJSDKLRfthNdfajyEatBf44FhYnZfW1XEuuVtzdgXrgYVoYnfhLdQbmP46ZRSxsARENen7moNB1j4aFgFGzPMP",
  "key8": "2Mo2oALxTRPBbevUSdFtNyUmo18ZV749RGNxf3jxDHoM8c5w9WMAe7Myj16vugNHgDwMhhXofCgaw6dbXwUYUJhh",
  "key9": "4ttJtmsLeF5Q8Emf8KJCb3LYZ1GEV38JUw1hwryLevzBEU6qwmuJWTkD99z1EM9uVfLy4nkHGeXNUuMYyPmP7Aje",
  "key10": "2TTTpgjiGr2ELfWCDaq9zx8deZHJQEcf15XQdWCwCJfuiLsKDB7xUUPZ8Z2spQvF583iZGX15mQyGo4xm8Axyud8",
  "key11": "5z2v3LMzUHRBkjiQsLuHmX2H9oNPQG7kpAQYpU34D5Faf6YatijujcFZf86GYJY7CLp4X5BemtpuNnvvy2GuLWUF",
  "key12": "4Yiq5iCSKHseqodKrTEZYYcYaaaroBZiARH32xBmHKnFbEiaPstXT8v6kTvtbniwoDFNpWpqci5g1PWfMoRAohva",
  "key13": "3CvQsavG6CWdJ5syHqxT6Ft4JkJGvScQjCgHCwhuqCfuStUVcGxz9WiqigtiJUyCXhwwUBHDtWpzwgwe99ybyyxa",
  "key14": "5iAYdZ31tUNUBULsYZ13vp7gVhizw8bJ9Y6mgPtMTRZJ8V13AWFXKBSK8y6a4qvR7mPhbeY8mTTZRS8p89U4Vjip",
  "key15": "EgRFAf9dxQ79BGcxpDPzn2xor9vgSRSwsRfpmQSLVK63iG8utkF17bvZup6Sxtu6PDa9auYDKRupdwnZgbmmqFB",
  "key16": "4Ph58aUgGbSunVm92usFJGmrUupcM1r1azcDT5sBiYSaC1fv5DLEZfWLq6fnNz3Awffjfy7DXiTE4LvB2WPiFUKo",
  "key17": "35H9dz2LJEQmk3jsjC6HDf5EbCr5kSgoFNaW56sBbTbnLxRkr4j6jZcE59ybo68377g8Rwf1wnwqtARHin6Z8ijr",
  "key18": "qnMYuuYCpThnoUGwiQsodAHvKsTWPuafkqvTZBMGFopecidtywVEphNWkpGc5EAj8XsAeMs58TkrwJELLWPQ8KW",
  "key19": "3FsVeYkho45UHHHerrAd68G5XT2nj11WRLLaTEv8b84wi6YYwXN21ZPuGjTAgYWZH1s9N2TdKQSU15sQ4X4MrKzE",
  "key20": "5Mtf2sq3zJCU2ZphRu1opW5oQijbH1vU2mSpLqhdM8Uo3czmMjZGYfMmLmbPypidePsk9Ca2NoGdm82SAStWTDRr",
  "key21": "uEu55Vmvgj5jWQGdy1nBaPE6DRR1fbsGbNaNKPyDNEooepE2BhB4j2vaKZZqAchzasSVyRKvk82kA7U6Y4AWSGT",
  "key22": "4jmZV4dF5APETrKBfYFaWiHfhgZCjUPi43uEkCxyzFXq1Jfuy64X845jPpYoobDEJ5YpcqB2AuNn37RJofJ83NQ4",
  "key23": "4fKhVkAWipMF2wHiECtgmCq7dYoJW5Zjx378wrgbQ5u6GFRCW1KxFWW79BVeodc2wihs7nZQit67cVxgwL4tk8zC",
  "key24": "3ngtSR5uYNXX1gv73bscWeFeaHwGhm7XBbjcpGejWis6RCFWasKkdNtq6mzEodDQATLqodAfcKAYyLFPNxpDxGrb",
  "key25": "3AdVMes83pKwU4eEXbcY24qJAiPTb554rMPKVWdM1z39B25A8qnV1zWVkxEPKfxmgcQAGsVWe4dpqEGxAas6r7Lr"
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
