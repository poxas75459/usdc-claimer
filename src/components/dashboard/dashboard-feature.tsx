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
    "5jNWGvHg4aXpJdYqup7BjSb65Ta9HtSH7nMeD7Wfdgf8Zk4cMVLGsSBRUej7Thfjk9trUzi1owpdp82dV3jBvYE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZCf2vri7mf9w9YZGiFbMrvUqtjfr7WEGdD4WuJmHB8HqBM8d2L35uJHa5SGUHPe3JKS7Y4KF3CpuLuHY5wp3ako",
  "key1": "3FYcHrZdKKn3qQU6v62KqZ5oK5dEgXJcvtG15qTDMAmBZkChGkYz3sueJMSk1KKNkX3uGwoWANh9HSFRG7CS4Aaf",
  "key2": "4Adhc5Z4en6Tq4Ues5wn3PvymAvYP1AMcUNRi8bxASPN8xDQxjtw7UyL1VkWnZFxKnvj7dqrcX5jr5CWxSuNsUGq",
  "key3": "2M7EF6ci1WkByyDp3CXjcKJrAqcNGir4XvVi1tgAXCMkwAdDAfKd2fyXHXKTgkoo77McGF3WS3NXvNCqHohGoCLo",
  "key4": "Vc9ZZqjHBqgwpL1aX4ADKPzaTMG2FhBZvcJfN4EfQoRrhd2BWguf6BMXhLATd4P1ppbh2717WLAQGWY21g8zS9y",
  "key5": "5ASpq83XjvuUhmiXVHRq3SnQLDYiu7YAe1t8wNKujdsRXodNxz2iS8RnWrtLtihJRCzCPT4yZm6LMNSxrokTNUim",
  "key6": "3E4CEtzkho6sukfraGGDfFfyuECr9JfKkBAa4ik3qvgiSADiEDe6WqWJmgxXf4ajLvNy7tjAmKB7wQT73cnGzQvX",
  "key7": "MHzp69xJLMBL5A1hD5MLQgkwmbmaJJFEjhjQgWmtQTLFNbybPav51MjxBkZEvQpSNQUDJhLpyjp9kqr73S1FoP8",
  "key8": "FQ2X861SPrXSXir24VsufuuiG3apBqnVDqGjL5nHRD2s2Ug3xd1zr3zBSySDzbc5AYGsa7DKwFBbN8mpSB6SX4K",
  "key9": "2f7vE6ippHZHJMgB7etciJ6jtyUToVGbAN6tJPuRsiKK8icLAV1aLHB6uZqgiaSXrDPdxsVbxLMwK3ZBVa5p9nyF",
  "key10": "5MBcoFHZg6i7DZKJdNSriNKRYfnKnaNZppPKuYYQTZyM6sDLzW8m95MbuU98XiF6wB4jjcY3thvCWPD3mr7TvNhu",
  "key11": "3tp1AgzKxBo6gduZDEdmJDV9txCknppizBD7rWUcWmdPN7KFCcTQ2Ttnn6tC6BjtxDv3Q5W5Jr52xVKnJiqUqZtH",
  "key12": "LAjqS8fZYNcB6itgyBqnvSjqYzj9vXpigwaWSX9doJGAxZqMSgwaYrMuRoLqH9oDTdVybTGE1s9i3hy5yVdTdcr",
  "key13": "2gBfJCp2TSmt33vkUAWYJoXi7HKpKkSmG5yVKjkGVFnoFTekjxjfnNex7gXFLDGMPhf6QqnUnqxQUSAAd1MPvJMb",
  "key14": "3rW3af3B24atqoCHcwMPKPRa7eJv3qghdQmJZUXTnWF1qzqWXbFXZws3GKHHvKLsYLi2hie5Z8XxnfXCH4xgKc6D",
  "key15": "yn1oPRCeu2f7duFNV4pAtNUy6G8VPABqkX6bTwDRWQoKzknBsMaDp7XhH9CTsuYZk6iLa9D3FMgAyKQr25UBu4o",
  "key16": "4oJ3uDvppPrycsk35qkDUkkG24jUp2fCutbV4W5eo4DBz9MwR8cqDLMWiqhhdoVr5AG7DuXFGiAYDR6YyGLZRyLY",
  "key17": "65VJzLRimHNDofGhn5yTxKSwXfNCofGC4ApbqZsh1TvgZfthDHNoury9F2yZKZZpm8ehqvW7NRfGbFq8B9TggR41",
  "key18": "5uyeb5rDZBLzhkn8JZQFjUgmgchS41hHnoWXjkFu1VtzMA5ScFWUkce3CbRqoKeQFweM75beqVYfPAitvHbNpqrX",
  "key19": "43cFiwnTh6GZjJtEtkQTKkxwH8GsGXLKGLESRDVgkG4WfDGfEfUoc1BwjbP1XZbeT1RLVu1sXSh4YADCEHN1BXkt",
  "key20": "2PFExugygPa6aD2uKjtztNhzHtQCTATbVfNH6gDtpNdRZrLz1NdnjiPsXYZu7QkjqWh4ZZXjL7uFEURoNK6DoCLh",
  "key21": "4NVxfnAzURNi6YtNabmFJiaPrquu3CYUKb83hC5PGf9MuazEx48KgfVZnVBJawrgi4PpSGSWZ1b5dY6iik8bXUtd",
  "key22": "PECEp3kgxvscL54vHCYzQB9ApW5NLmDUmcoBhM9StGTBaAxw4zFdopgB9gM8qUQHVfyJuN6a3fY42sqSP4Am5ov",
  "key23": "cRo7LokNuNCCvAUj3kb4vQqYRhfs4QdzNFdgnsTJomnKDvaMRoTBD9UPwofNKabnapjWmGrCF33ynRi3fNFDg7e",
  "key24": "2TQTGCGGajAaLWwhyfaohtmZrVmtejmWKWp6NHUEV37G8SUe5NjsvexZScjL2Xt9JSCfkdJvH8fpZojUEQk9pWba"
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
