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
    "sYLR4kadZnwvMiyx3wokbGfM99fsYTVxsBw3cQPL1SQLHPdakyWHeoTrHfD5pvs3A45BvF5MEEWfH4TjvNcU97i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MjUk4VPyQB6zGcfgwk4ugeZobwfeGNFYeNcDqrTMb1ttjmShio6hQWQZwfgbnSMbcPjmEn5rfSUGwHWH9mDEeGg",
  "key1": "3UnsHjUiyjM6pCryM7ASkr1ew7n4Kd78oNy6LE7YaZgr9cSk5vCSkHhHRHJDpHar1PzPUx2ZR9bgne5ZK9rM3SqL",
  "key2": "2fN4dshzswYXa3ZzRiFvwMYJAXA1yqHkRxbk6svf88byPvugZ26QvgwWFcPYbcuqLop17ENbCverZhT2UUhf4CCv",
  "key3": "3eBFykiX2ZMK8Q9u2dcigH9zD2dYhYiwFD23drJgkjua9jrZp9u2tSYt5JkXYRQxYfB6uWtCTi81s1tXNDfXnLPs",
  "key4": "PPPAwhxEtKDCcc8zSW4XHByhRGhGFJ6VfGyrixrykRhJyhDK1myMhvdfB8Gsh34TRY7LQtcQrwEqgT2sK9yJr2q",
  "key5": "m2aZXzCiztKUQPzEsE8ADDPj3gnvzcoWn3eEEomAQ5pS6mLcvYofnX4LLQG71naMwZj2eD5d73pAWeggPMVHLYj",
  "key6": "3CyaPQibEQPmP8noXuLreXJbWwnvQJQHyp2nwjnFAtSghA9f1T9aEWLiFFueTL5SaY9cadq1XK69Mf1RyFsaeK2A",
  "key7": "23a7t5E2nyp2Bn16bR9BGdot1PonzdZtp5vHsP5yM7GCRxBGTW5zhspcUMzJaAMEFBH3xiuPXmjhEiAcQcCSPaPY",
  "key8": "oQETEuNnpB7bqHUbM5wcUivmQ3ED6DihtS8475uioSwL8xiYvn7VbvaLVXsTq6MzBSGapqmSfUTrAT5iJquEQs3",
  "key9": "3bnsi2975M5Juh5E7Zw2hGAcKKLkAe5BDoAbAzaWNZdEYAU4CFNmSn9c9HpsjTxPQyGxwnw9hQcPtACowsYiBDjw",
  "key10": "2r7pUW34nyY7NuTxmHrHB4ZRdwzW9umXfqMWnsiX6AMeNfapHaYVhJ5Lr9onjp4HBuGLVZEnwUup8BimFa7aKwrs",
  "key11": "4SJ4meLXZPqcYHwioffwZZ9X5jMScXM8epRwVK4gbfBqDFs5qr9YzdzhmcvkgkTHKjMEHiFU6cYsFm921NDumvH3",
  "key12": "3XE2riDMwHTXrwf3RLcwJTvqgD45cUeKz9nkfCr2L5pxZYVze6XWQPF8KHaLq6QLdEh6T6zWuYF4kZZ3AfcwY2cP",
  "key13": "2U8dgUBqhyEeopjZqrF53i9YTLgsPvXS6pMAaMhv16omcgxatsYNZqD5b37hyRsuE6dUFrQ4TuAQRC3y5EHKrtaf",
  "key14": "4TiBDP1rMe3q1P7cn2myFju31Jncj84LUs5GpZvLH2bda3V4JPEbzJU4H74jarSt4kSKq97m7WyqrtCYFEd3EfpR",
  "key15": "4fdQa8Lspi7tvC59yCmXTUMKsMDVzUpwb8x6hRnzQCtv2ydf7ZMuMu52k6B4fp4DdMbBKmWUAMuFVttPmrz5Y3Rj",
  "key16": "5TL8fV6uTJoWrGkEjFASqXhooGGT4HygDtasVZdAVjEudu56CaCeL1PLPQZAsdCq9wmtgwvSMpmWSbXz4NekQUXs",
  "key17": "Xse8xPVSpLPu5xHN5TaGEBLS2YheS9xZx6WHG5RzknCJnEH6vyXzG8uUHEnME7TnKBbDdyrv7ufDvtNJtbeapXf",
  "key18": "ZbwWw6XTjdeML5CNPohqCM3CYhMqJWnXL6GB9GtxTn9kti4NMkx3qfdMZt8RpwwQKGXYmLW6G4YyrYzrn47s1Fx",
  "key19": "4sgnCKyc6eTK6urGUkQxh8D3LkdeQ8v1ZEPYPBzLF2xmU7VoMyQYeiZB5fXcnaxXLN54wBhcjkxVrxoHLvs63x6c",
  "key20": "5fztzeaqnyPECyZp1XAod6QuxbRiVv5cSfM7rMGZJKW3t4d6ArmxEwq83kn6WYzeAT3YX7vEUc2PcyZsZmGAHn2b",
  "key21": "Y9e3oA2JyDkfHkbBq3LRy67hWgZFjSqRuBggEkwZrYAiNVHFevzUUDf7N8HiU358quAtj1gzGV6F6AzMiXDqUcq",
  "key22": "3c7rvhSwSGskrgX9ThvNxuG1Yh1qaH4w6ebBoS6H5i4G2GQHHBw7j3e1TXCVeX6ZU5tswEnREpKWBpi2Hi3bcfxg",
  "key23": "3LnyFvQ5VnAjj2XvmARqGF9b5WBcRYzYnJcGYxQhbKkZd1S14fbTXtq4kmKHK6UgzHSAPEtWZ8N6d3RiLXPgFb7n",
  "key24": "2iPaYaSB9K6bSjJEkTpyZfymB1p6PWr7bfH1ogkTqSUHo2cWC3tFRMeRWk7acJdLjJix7tHv8rxXTyY3WRPwfJho",
  "key25": "3qmtz1ZNHZW8HKGNATFrmTwHbBEfPdZCTMATygqZCSGqmiEQRVvmWm4Rd11eDJ5aKcaGGQZvFvT3GHhpBFH1EtmW",
  "key26": "RKvY6mR2AfkrPiDKWuKxcJWmqAyFjzhm59Q7wRhLyw1V5q2FWB4So8HP6GrU6YMEp2BjjegAs1jbNYtSqmzKH37",
  "key27": "5hxb7KRZxEVpBPZjdBn9cTcbSPDnVUYPkEnSGaudgfCWShMWjVfhe4Tk6mM4LBD8Nkv7cwmisDCCdhtGkn39jqJN"
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
