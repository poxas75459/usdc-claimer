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
    "4CMpGYkh5sJeDWJXJNL1AZQik1prCP1vHginieCiGQaG9cAApLJZ8gS9s92po9nhg6nWso76vRKHMdFCVPeW8JE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ct7x8NsVU9iwmsPkTamSx2K727xZhSNZpQqDWZXoWoiAAoy8VTe3iRRL5UttU4fsm3y7rAEpyfMmcaBNDt8C3hz",
  "key1": "56hLPdQ2cnJcCGqkA7PCxqkN2snjjZpY32AiXE5d8Wka3Myo4rxkinJDwDJACq6BPn3BqcGwQBh6tUFDUoxbuGvu",
  "key2": "676sb8o2g7caVuoYCZeVzKz4MWKxLbzXi8D17iyt2g8ZFqhVRaPgdRToom8vvgG4ak85Cu6sGrgQ8LRNAWeZgnDy",
  "key3": "Z4HG6sLqjtkwKfY8Ys9GtDaBaoZZVjJfoH1Z3HryGA5X5hEzHBhLirbbwF5W1zjW6DsdYnN5v68h8U665eVCUkX",
  "key4": "oAHtQmFetTKzgj6d2DwE3iVKxE7GdP49t8G443fEr4RfANXLsY3RYG1DtsagEKBN4qM1HXRjPfsQVLBupKypBTv",
  "key5": "3TUEoWG9TvhTaaSzNgkzB4uBvSrvDntJYNeREtz2t78vQN9CVuuRmAbzgVrbXLc2jErzoquUp9zMzTYoYm9q2QhZ",
  "key6": "92jF3eguXFhATprXtfSBMEApNoro4N8RkZtMUfron3sWATrAegfAtJCkBYcdKtELrYNdEm7E1hxBDq4PZ8a49VX",
  "key7": "5GBksFaWaaWLFCw3ePRn9JBZ19uGyfAWvsTNNzb9ZaXJHPFuUhrgYx3z7A2mSte6mvDiRxU5k22pyUYjWQ8oMGBc",
  "key8": "5e9CZhQTo3HGJdonse7pK6XTTvNcWQa3XGZL3HeiuLxuq575qwYMdaUrr9FyQ95mRJAsXtKfW8QCMPWhRGeoT3dK",
  "key9": "3ufzRwaFZRkPk7KZsykPqf35S6pXHFKG6tBuoxmBGv7hdApvzgpvaSVyD8RShDgSj8rsrwhdpamRabBi1qvabxDx",
  "key10": "2amcYBhJDCd2DGJu8mYNmNSnCkDc1Q14svDUAhW4sQsMyoSwVkNJUNPAdfrXW6qdvatDaEa71YKKS8DhWdhc2qjZ",
  "key11": "3AscBZ46hk4tch6kUJ6Zf5kqi4VnLRHZ2ncwYxr5A3fHC8z3jkZFAe9aXXyYjNqwjr7F8F4ecGV4fFKeMiCbx51d",
  "key12": "5YmGGGMmBovwGja4jvKSmzCy8RfSTyMeH8hiApZBzH9xMNGw2nJEZKv7dCdzRtuUQ45rc2fpigvASx48Fx8uqAMy",
  "key13": "2BeAwCpqFuuBgS9sgPJYf1pUtwzmXvbQG5g9zpFJR2iRNajfahxN1NrFAQjXMkwtie4nKVpjzZLKE3fsqWoPZtEh",
  "key14": "23fYVnVpZRgfJAhH53dbQKbCGw3of16PW5GmXEkzcTKRbEWnMvU3q4uSSKn1QhoFYFgg8QYkQMbQApxeaEVLP14S",
  "key15": "3hseJabspjD33ESPvwVzdevHqnsscJBQvqbVteK1agecosSKPBfMHPq7DomzwDMsvWcV6zWxLLVt3NS96N4KEYmz",
  "key16": "3xD9gZcRmnabzWaRcVGW8CKzyC3NAkALteAtdDjyJjkpizkXX94acjgnzR3K4TYovQuTrVksr5FDe7XGg1QwHRmc",
  "key17": "3yX8tnZ8B7RdTn5eFrrsb5SxYQDo69D2X5Htc47qNboyF1pbbCMn3v92qijgaJVULNkQpPexp1HyzJk3rWJXcm8C",
  "key18": "3LV7n8URDQKJr4Nk9L3uL4JkfBenVoCMfCtzHwBypYXXvzyBDy6dn1mQPubMYg9chqcsJWcaW5psTkcygMwDz1wG",
  "key19": "4AiKDU39eC9cb56GB5AaHgc2DMmVs9vrYguqXDcAEUuVMkZHXPr5jpeYsT6b3itjBaKs7pRM2eVVVsZZyEbYHeEq",
  "key20": "4dDFeGZgKuBdNKVqxhMiShKy76vANxYw94643LzrBg6V3M4MmG6g2cFGNVih5v7Nerje3KQsNpsFXVFWzt9S8rDP",
  "key21": "6GsJAvcKFUFC5b5NgpW48yKmQisFPR2N9s2N51Kak6BxVRULLLPV9nS4CJ9G46UXwuCf8DSrGQxJBMms2qLm37Y",
  "key22": "3SubTSASoQmr8ENfHhTRcKvxBNELHtW3Kvh2qfAZmytFSsYAnWLCVy6sTZs6v1Jb972ZJGs1pTYgoip9caH2cARf",
  "key23": "546FwNdC2zC3s1aF9dpSi7FFmDswWtW2jRo5j5PNX7yo9UwiGbB6WKQxms4pVwW2tzFN2uNYm1sa3Sb8zGvHBYGY",
  "key24": "4MpSzndz1CWUujdWSN2JrHAdB14B1ZFCk1nxm99hZ1oe6yNSqXkf1uJjEwTMbme3BjHXjfLCPndrfCaRAFANdZHV",
  "key25": "5Qg1HLNu2MJRUbA31SEKX8A9Mj1VqKAEezTkYwMDZ6omC4iNW5sb1eDYWVVbFkDjzh189H87Jpq2gPQvyd98y6Uy",
  "key26": "4QaZBYuxkVpZUZacgiXZM7XusdwZkG5o9GgQwkQLMizJMNbVSuYjccD5LPTDKNnbAb6m4T3URKmhhGrNoZdJUgHE"
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
