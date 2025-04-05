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
    "bCyMyktDaMGM6V5rA7JYEiFzz6YjSjMB89RsdfxPbZXNFE54bA9mpwvuqUezRWWW7pH7BXM9gnVA653fQXZqohF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qhZoCXa1KrBh6pDuaQukJFs8MTMsmLiMGFfNBvc5dgLh6rBSAUC2dBeAoGybmcvbtoMADjGAnzFE5NaCJfBao32",
  "key1": "C3Go9BaTdbEMHR4CPQHz5kAjrvSFzD5SZWUEdaQPd2piwREEeVE6G9cCuU2AZdSZUk3kmVkoBzN3TcNtfpDwW7N",
  "key2": "3ky4cH1ecLVf67ko9eypCN1gQSCBKKNovkNd5J3xAErw8X1FRoXDV2m8ggGm9hip8Ek4mcvJXurCguDpmqjga3rT",
  "key3": "2yWJmaAmwseqWcKEHe2StTGPqfGDCkka141ueo2gyxx2gfShTUQvxk3bsKw2rvGBTsDbxodCJzqYoWgBCjqVtFir",
  "key4": "3HgT6jsJ2fAYCcDmTMzDWzfwPh8gnuW3ZEdPWXNs1LpRGWe5cDMLviHiFv4MQXSEmmMbQ83ZzcLsZRiNPtwyivWQ",
  "key5": "4qTkGELYQEZUER9hFb7KyaAWgpGsXRgWyXgZzzJExs6AwELkvbWVkMxyN6aXSkpAdVLcP8Mgnu9DQdURs5rLoX4A",
  "key6": "o2r1AYSDZPuHAb25vYAxwoPTpMHoiRxjZpbgmKqYNcmdDtFf4Lq54UHCmQ8fponJ6bXPnzWQK2tCVvP2HddXkaY",
  "key7": "3jBUwzumj1QWZzjaUoU7Z4mnTxQbu952LD73PK3U8fbQwP9vba1eQ1KGT5aPkvwkK7vTCffuzGxnUj4KYJLPf6X7",
  "key8": "5gkx9EYMaTRWPnrneLCZXc1MfusKCzpz8XGEejwHyifhdkefYBDmqKq3pXoz6amt5HUVu1vnhYviXogAHXZHPk2M",
  "key9": "5d4BpqZtt7EjyfN4xD47E98dKYRMZphdXmjtbt72WKcgP6N6Aj7kq7iRTxFvtg577fcJAM8kXmysZbrrvv8FumJr",
  "key10": "4FKpkxCwLmjiyA9Z8Awi1CiceQDEM2LHoPbzrQzg9Z4psNpgKdyaV5LcCcNJayCP6Xfy35MfBoRF1mkat8fqdPnC",
  "key11": "1cTtBCU4q8mbbv4GNBQBWfhYXLSF6sFpSsCErCvyAFKfm1GfLRdpEs2r7Y5NoSR9NFyokEUugXiG2FeKL6f8HMk",
  "key12": "4fTLLiWQ3qKK2rcfnbwbcXKGNHDEQKcuFkFnUYUjJ5SQpwTXevtHy36numau3fNpRrWEy6kqFp7KHQXG9LpeajyU",
  "key13": "4Z1B8hMgeaZBHvAKSFdF5oEz16LvnvKgPrGZ4WQh5hUNcn7oTDVewrXmSot2Vc8mj5JRqxxbibbtfNkB1kvFhBm1",
  "key14": "AgatbdJ8gLBta4ntPYefx4JqQ5xQjkrPKW1Mse1m6bv4gv2bEmR4TUGgGncZFNT3KS1dZYNmcV6Dqyd5QXTJLdY",
  "key15": "4uFjP3GjMM44Kb3uJUkEMjhiZ8BjwjvzydovHxUqGMm659SwtLHRjD5EX6B7jBW6iMrnfpadT8z9SgpEjVF97Ltw",
  "key16": "2NBy8pztAHmGfqz2RNAvRK5K3bpWn97mSck5QCGSYgUEdMKuykyHeTJpwMLCijc79hwkE5Q3Ghb8AGXcENVT8qwN",
  "key17": "5RNc3vxJK6xtnL8TSRA9M8CsxucAEQosGQp8U91i7jRTt9ZcwKZBkRKvPkXYH4aZLPtGjpuGTuMsLDwDTaWoFV8R",
  "key18": "3h73fBWkzg9cSNGnBMZxnToUP4vdJZRg32LHJ9XEoiz3ufXHmT43bLrW2R8ctgchPvnzgkvpX3tDxwaLgUec2FZi",
  "key19": "61MNtQB21ZTf5ApE5fMLDgmA7erRUZdAYL4X2sQH7xxMkPa5MMmfYhT9RVQCTi8uoeqeJ5RDtS2H3MtcsB77FTqp",
  "key20": "5us4qf4NMZDqzrNJALX7vQFPQNpUp2ktKdCBrwqEPYAhHpWT4QLWc54ku7kMQxvnho55hc91bvsMeFMzPfgTFkQv",
  "key21": "5LzSeSrSmsbmcAHB3c2pxGQyduLjtfQa3MPSXjxPhA5FuTTJKZMuSbDDay1e2NnRpRU7xkhm73V34dfAHw8iP9td",
  "key22": "3sS51tW6vduGDdR6hXmV3WjFSdamJcGCGL8yQMmadwYBTdQW6KtgsywFSmWMmSB9F6R75WYVftTRQgmStEmmv7KH",
  "key23": "5JXVJ99sDvuXZFTAQtZfnbPzNsSHRmqM38mQ7XSmLnToboa3Ci1bov8NvoZnkhkzGUzcswrWUvCJDzXW6J4eBQWs",
  "key24": "FfzCqvidjS2DnNvSCcpMKWtbsQrRxtFg7RzBfuBirXyFTAgd8HzSKrKjhHyxapPXfp4RQacXbF3fdJvjLZcsvdy",
  "key25": "4Fbao3J74zQynfKmWeXPityn3oPte49GGreMcGweeBE9jNuVohs33ipGDYuTY1DVwBQiMW3vf9zpUkmAN2nu3F8M"
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
