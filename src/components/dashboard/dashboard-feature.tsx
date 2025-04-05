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
    "3DBiDgS9EGEGN5Fbk7zX1YWMhWv2gnNECAtdsS8XCRQFowV5uKq2sxpbZzzqUHxvAz1v6bsyedKrobgcxvRFevVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KcrDvSnhGJueyzVKujiFfpM5yspBJyJeZ3nz473DRFkrwpxZHmn4zkeVXGaEwPVRNVgwMuwawaep4Hyqry4im5q",
  "key1": "4UnZQtoLiiWQSZxptaqducH49w8UcvnJEw89aaR9oyBCBgUC8z15ZTp53V5tvAWj9RNjKHNkzBeXikxcDzSwv8rq",
  "key2": "2L6dY6JaMg1aQSKzy3T9swpVKhJmFPhTww7T1xrUgjChiYE6T1Xe2ZSjWJEDWfyzryxNU3WkKvqMT8Jx6fF9CXb8",
  "key3": "2kmjT5XP3aXD5A8g5SZCpz6s5xvYpm2CePi3bHnC2dxZs6BLrDxF48ojkhuQmX6J1FG6HymK2k3bd7h3G2PhYwuu",
  "key4": "5KRZKMMrrLzrc9QiwBj4ZzD7tEUHESqT2W1s6V9AgvTP5fDMtNukFqFkv4RZCJXEiUjGmCrFFf6Q2ZKJSLpEhxbC",
  "key5": "27kEPgSU5n1kmYzzV4Xcf8AJ4z9f14qTsHJnsYTt4ErxKeFq2fUYawVyXUrnWaWigWbCZneRv4LstVCjmXqaYXxi",
  "key6": "k6GUn2GrHGYMx9bPyhCceGciYAk9yqnf2gmYX2nvQgnit2U2kyYmAvrzjYdrK81Ju6NhXazfwdVTQnV2SuYvddb",
  "key7": "2qQvNJUNfetkxNDCA8vNDBYtEfNK5hVx6xrKZHHzBgzmqPo8jahbEzyUP2ZArx61EEbaVbyB6UzmsuZwxE6iz2f6",
  "key8": "4wtpoRNXnnFbb4v2NqRzkqwLeeiGYTsHgACfDWt9TeStxQbjhiq2xFSc9dvWFJG9LQ1ts9aJWxFWzoY13Rd8A96C",
  "key9": "5kyBPytogU1EB1KoNxwHLdsq7QN49v7Gjc1r1SKBb78EgWN4KtU6PVLKFVuNqAAxwkibH3XqBcbsPxUnXh6Nr1mr",
  "key10": "5GqNUpwM9y5qbetav6CYBqN3EWk9exAbQ3tQrw6zdXCiiAQg8Ups1mKdV1mDP2EBcP4vm4vHvWsLbXujsaFeWdFp",
  "key11": "5agkDQCWNGgob7Cip2iZAPnq9725QTbmtQz3xQJt6BZHncySosxhUrmqfFHTswqKERGX2RtsPCNwjPu4JjWzpHDy",
  "key12": "4JfUR24o9us6Dawu6UgfqGrMKDg7p68ADP6N17uSyMkcHAZ12WADBf3bXQca24qBryEpe9ACqAet5pVjjwKKRrYF",
  "key13": "3hjt3QnZUESkhD4QoPpXis9Ru7VQ6nXfAPi9hKLTdRZMb7btGFW4ppr9HfyXFqHwkzne6JQG25SBkrYBHF4BoPWC",
  "key14": "3oakfECCpqNFedbE6Mg1XSZs63qZzUJ243EyvsFs97Pwp6QWSTuPjU6LcgR6ERpDRSnWP472n3qnytbMb9RHV1dz",
  "key15": "6693mkKr6a14J5f9Y7jfW3AtD341NpgnihwAu36fEXB3w8mXLNdKfTCC5MHJz5wvHaxnanXjrVTR9yLZor6gWnwF",
  "key16": "ZboZZCuPdVHFRxuoZCw73rCGrBo1TGGkuQw3hw1SEThdBJju4oYkoqfBqaWQVyMv8hDpQ2Ew4EssUmiu6j2ua2k",
  "key17": "2DAZXP946zTwPFFrCHaV2KbdcRdQnKtdakX4vXbqXAjnXksGkQMbpvBCfFNZaxjQdvNyt6RjMBGdqJrRNtT4L9R",
  "key18": "2z1cTeHG416e7pWCEnGR5YoVHSVxq1gMom97okzizTvAfdEojZ4NrGEvbm6URnKsordJYda8hPhYxprJGp3dpmay",
  "key19": "2t8yBxs2BgZUV3pngondz7EnjZEtyK25CAquy6FJ1CCbXnLucSfd8HvUHG9tF6ogv7tjZBsRSXe5KJzuhC53jm2R",
  "key20": "28CioRKjwwrwCbYeqNKf1xMwoSqRedbMnQ7VDuwpfat1hX14XbLqWTMdmKz2BMQoonybcjfot7uVg5b2fJLLT6mC",
  "key21": "59jA3UMB4uvKhwzw8F7jVR4Qot6KFct2XNF5Ku19CsZ7rBy7Dg3ncHETo4Y8vrkBzJUQbohjKVBGpPbmAGoNrfeP",
  "key22": "z1JDN5wHS8uSkMeT6bLeZHmCaSUQpVwKQkmDwPXL7mLjQBS2eCKibECqstXPiPKqUQpmfzrPqWBjHpgKg5eg8yK",
  "key23": "Z1othmRGDMa7RsPQxYwoHRWuGiJJYGTH2rnyUHobBEk8gCP4KfVvy3js9W1F5MvnqZHwFFGzqvH57gtHP2rZMKp",
  "key24": "3jnYoVZi5wAMxS8n93VoGuqKqCD2gCLdE6hE3zDhyLnDU66CgExE7gUh2YSuDUuphL1jRPqbsKfZX76onYgbNrzN",
  "key25": "1NPsUBhkYzYET8er6mP2n6n7gbhLAA91MJztpejjsAFKrXrrQsaVBdHgekmH2sZxeiGTkzLtbH6mhEAJRV6tDoH",
  "key26": "syHQyvtyGW9dyXp8H7nGGBistKsXEWiPzQF4cqA7fcb5ozxKcLPj1sqoUXGGhfFq3SZu6CrnaTWjquJiwpey3iX",
  "key27": "oMK6UDNJyczKXvLiqucfiMWNYrfAHmdKZ6Myp2CGc4CT2Tvkc4Vv1Ju9NfartBVtVKyeu1ggTStPD6VixMfM7XY"
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
