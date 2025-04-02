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
    "5aTiRVUW6tL7GJtzDruVRZmRCHTS6DP1kdQRb5nWKJb2nNR7hvevscUU4DVYGwSDTZicn3X4wscNZA4RgMkouve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yfo5sEdJkgPjgCyPaN6XoupD17hwqDVD1joT7dQs4sxMWQT3fkAkFBWUhQvJwdt1Gc6MGUpUsXyU12z5EaGWb5Y",
  "key1": "5xkyU4g5ANdtonM2kiuATpoKhhd6urvZgnQpo4e17uBi9rx1CtGRX6x1idY6BYSuiGqPXgAc2sZrY4YAaBiyYYUa",
  "key2": "43Pca14smM3qtmECk7VNYvpzTWh8AspSAKXgyHrpCYStA66Mc32SMivQQtVq9Rwm8Bg4oD996wsku2h7opprzsZa",
  "key3": "5f7ZRpYdoHQJgn1DjjnCzU5n8Ar9CQzi5dAo8WdVQzkyRocqM9drpP6baHGgGiC2CPTWGKkSnpPzvV4bUj5YczPT",
  "key4": "483ZnQKiJ4V1ja9DiojvC2AtjxagPnXJr9nRDJMZYgveUTxBjV5AT6PTmC6GDZKN6qQQcqG7weSE54gNZMNucZdw",
  "key5": "3QL3prQqfg7SWyQQzdLiWGGz97PM63RNC863YWXRnCg4GXTfsL9XYCa1StTdukWJCg6dJ5ABSepy8cE34jSmP27V",
  "key6": "3e7tkdQskaJwa6nAutChf3uSPwkc1FCaAiKqin65gm3yqmf3d2u4hFNzJRLxzY3z9cofwbfRPPxwfxkp5uWubAUD",
  "key7": "2AbN9zmtU5wZqfPHpYiVY1Qf2KtR2eeubrpheiJzrPk4mTe65TSWPffLyL6rEYGr2zzUp9iA757hJFHM4XjDzeh6",
  "key8": "5cMXNCyKnhWb26Dz43gU1WND6nQhsK7bH7FiCYDCu9j35hqYhKX1k32CH7QNQFeWZ6NUdKyHGPWcPdwDAqKAwiZt",
  "key9": "3sNivkvdVtJDK3kpKc4GzLFmH1VPeoFXjx2KEPZaSo3xk4gDkdAThy4skymMM7L6XgsNFmKFSxVrqkhi5u3RNz32",
  "key10": "3wxguDcxJ2FGoboJ9QqrenrM4ki9PVnwu719ZW4K9QcN8QPBtfTHaT9sbPG5VPXGHac3WQMggRAWzFWjmHESde74",
  "key11": "25ahTuJ97s77L9pXfJ5pQDcsn8PMGxXLKTz6yhqygVfixLccNjppJLKymhnQzDsSACL9AmdHyP4SYEcWhxdiEeyW",
  "key12": "3Wf8yJz3msWnhmK3WdpZSBoVFHNQSZmuDzrGo8JTeiTkjPYhfmvU976nWd61iZ9XjebZZKtZTfF7GK8cnhqEMF8Q",
  "key13": "49aLyy6XQocsxkvHPdSnCc5BB2gBBZcJLUG78edbUycjS78js6xrjTUDwAbiPKyHvu2iPH8uaPBxoHjYrq44GKw1",
  "key14": "35mT8oKY8CiVHBvcgTVVL2HHYrnY1UDEQPNzLCvgAmcSw5kqJvEygrejfpas8MEKUmQCKsmYz1AWnPTbBGeBtwAf",
  "key15": "28R6pxEgSCZq5k8pr21UsyBqhMVtL7tqGQ9xxtEfeC4qxauEeaWTMUfPZ4EWEEhmjxr6U1uMt65or8wjKDPtE1qj",
  "key16": "4urZrTjvumto83oXsNtZgC7hWyrHKqBALakgWuHhMggLCocWGvos75gLyeqMudSjPY3WZzRUpzT2YPTeUSar7Nev",
  "key17": "4555SkgPTG75SPn8ikvzL5s6ymL2bp5YKcQbjRNCWyGPD81Q7x7HQQxfpSHNavpA5jZ3fQ8d3o2HDSSjvBJr72Jm",
  "key18": "3HdATshuaeUmBErHsc96GiNKgN1BR1abVWstB4MBkWez8xHxdZ6tUf6zcLMcHoAjfUUqys7hWMTaXwycMV9pXkNs",
  "key19": "aimqzrqESQaL74YuDdjq4B5fVxLtWVXGBevLYBbHRRJtkpqqHyQkw4rn9mNJ4teRDZhi5pLSoVcKFWQ6ihDrQTg",
  "key20": "2NNi3utDfZe8G22mTMdvWYVzHDqyT5XfxZqPUw1NgD6oDg4aCLu2hmjgGHJZEKAwbpKc3BS78J77pHo6c5zx5Rfi",
  "key21": "3vvXUY1ze6yoytwPtUKmssbeVqGQhoCdjfhcCyuoszwLQSgPJXm9HTjfhj9WbhPiw9SAxp7rKSnncvQGAzNycbaH",
  "key22": "2XcyBr9ndKgwatekgRNJadwLFYUtpFZpY3GsZhn3yXJp2FhptyTWG5R7fPc5M9De3QoK8c8EGDNd14nHqzLKYEF1",
  "key23": "5uh1myShpXoqr2E9LGYGGyrGebY6UZBtiQjQR638KT2GsDG3rNHDgVgXWTZBjeYKtna6HvrKzo2artR6ucWM4SPb",
  "key24": "3srFcMyd7KtQREepasKMFa19sNPmhLfbj2pb6YTqCfj91DJeHzcWraj1Hx19ujjr9PqmDv7iFiDTksD8QhSibYcp",
  "key25": "4hsQXqQ7JHC6HSntudaeRTbFWpgj7LP9MDgabdqxX56bCTa8xaPCpzRyfR9GxWMLa9pYcmFKgfzZtuQN5d6fmTHE",
  "key26": "5M7NrQZamsN8UZrS57afKkbuY6muK5FMiqeKGjFqNySHmWxHdX9XS6AXZK6PTuKs9JVz5oqovhKpKPpPja94nUjE",
  "key27": "3voCzRaszqkEZydYXg9qJgFRDNXmQFhDxbxnfKU1WfRsbDtphC5yGoc8QNgXHcGS3xP61izU93e9JCgiSxkGBPZD",
  "key28": "2c7Cy7D99gydg8Hmi9gAPSDTJPEgRExkMvCLkAiPZGPLa5aMpiYBi3fwMBN6RvLWyb7Lvfu1kbQXWqwSvpb6hxqf",
  "key29": "5PXNLLskjSopFoxDdmQx8bAP7dTopHqwzaF2rHw2Nakn5z4uumE3DLVT4tqdHtrdDb153bh72p9U4dZgJGSsYSop",
  "key30": "5CvKRjg1ncZxhrGVViJJg9TWNS7LVQZBj8cmYtzhbSwWewPf9QceiqHbi4MLZKcCVJJ2BZfwtetCJxUCsCzZMQDM"
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
