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
    "4RMCETejpCsWz7iQqewagfiqhWr9o3ayyMi2r98urnVGjZosy4bnspM3NPEFHp8PG5B8gekBpksdgeUZkpE9xKS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wKpGaP4fn4YtGN6tqYzAq7jqn8MGEnwmXzjDZwCbEMJNg8rGuqP2SVq5UyyR97CNWwSEyxGVC5MwjCULkS4c7tD",
  "key1": "3RhMxCfEG5wZEJyY1JJ66yH7Nw6Xx9Gztbawdqv99LSu1kg4CfSWzLPuyf1UnR1NPp4kvhfNyJbukkZaHHibwUMd",
  "key2": "2YAT18Tb4GWutWe1wqNYATaV7uHyGmvCyCR8i5vY2VTkDhsCmqmN81xmz2QeLWegUfwSVKRLn9o5UGSoxV6Sf9MZ",
  "key3": "2H8Z5YHoiq4BshyjHy5FUKjESLj62pmgVXsU17WkR7d2enkE596cF5eEWiP8s1N2r8cUsp4TFQDDVnVv5NhLxhqL",
  "key4": "5n5jcPVNANijd739nnfZSDoDXDRat4UnXwM8GAGQJ5TyLz8GonT35YUinGkfjiKy5XRbLVt8jAhULgx33DW3bVpF",
  "key5": "5MatB4LJYthYDXTzitnZs12oRRr9E3Ega2LVaejsXf9FuRg3cKRa9XHMui7Kyqt6tosgnyvUXGvzLWQsJGWR5JBc",
  "key6": "3koPEky9tyjUrvXqzM2uj8zSoZbh6HRwWVYT19wvCfkjmTZgRe7BtVxYAysiAQmSK3C3R2tamLVjj6y1si2yTvbn",
  "key7": "JLwCzki2XmqPZtXZfB6jfoQnbKfPkeg6kbiZyP3vSZC2QjgN1Yq1N3Jr4UFhLVcNPkksfybdcci8FYuQnGvdKxr",
  "key8": "2Pmi2zyvZ3QDoRWZ2aWMSDTuHZRvjggCgoGU1gECdSJz6CWkkWSfCKCWeQeSZhAhaeoFRoRuESW6fsJUXsXF3UxS",
  "key9": "37oqSS23Bkegv1GX1NcQThzH6aRjTNWuduf59uj6K2vp5QB1CyvscUvYLTY6zxnTnmRfjGa2HJBUnNoLda5Bvz5W",
  "key10": "3hBDx86dFq1VkCGx9skkiCQiihCDmntSFaKiMJVkQSCyDiUaN6HpG4t5A4678uFu5GiMPPvzrU9qSRQq2s4RaMAY",
  "key11": "2ZDW3baLiVNrEr7rfAUq77AqXqx1CMn5a6C5cSkWKea5shrV432kbaQ4XCTDMfT9Fg3FN2Ybwg3qETjfmsmaQQFg",
  "key12": "TXecawogeLkh3hYLYgZLqopxBXDaxGkyj269vhN46D963GGXwMF3W6s5heyRaJQdWEUFPsMKGPvUx4XPzaVkwmx",
  "key13": "3JJ8vQ2Ctfp6bD868agQajrQnssqJyx6c4ZxsVvA6fqgqbZdN7X2NsBWfLJnwq7Tj8SEVeekbYBKwu3KARDc3Tza",
  "key14": "42GbyiEadnkUvFrVkEmUcoE1bsHAAVHmcWR8Zpzh8t5byPQwdRhWDSofoWpYzhtq8U5G2xz9YcP8mJkA4rhVGeFp",
  "key15": "4xu4u6mSToaJSh9fwuxQh5B575QnpNoNmh9DPodNVmceMb6dR9nNQs8weThcm6h5VcZxr4Rf64gTxRH5bgUxuzKa",
  "key16": "64DPDEFRxHVRmjbdn3h4WZHs4BQ6caKiSrFRFtXYaMcoJvDNw4H9QGta6V6UyyAQr8p2rTzPdbCYmCb1hq9WuQzA",
  "key17": "3SdiVzvjsezg6qsMkh5JTtYeskS61t9A6MJbRZf5wpVPY5ijw2RbgNKS5U75qQP83bztes8MUq5Uwixgs9ucWynj",
  "key18": "54yLN1QvJcYnGuaiZgRNQQjJvYmeHViD1BHygyZ7NnFGy67DvjMguUoFJtEE3rnqMceMs36DkYkS7G2Z4buw1cxu",
  "key19": "4ALBaAeGdfbg5ZF2cUv9a5yKafjG5zmBcQWLdFmTJhSRZcwL6YhKBZK56n3qd2kyriZ5EXzhRm659ktwyu1bBUa1",
  "key20": "eemkXAoQM614MjSsk1pBL6vbRwFQfe9jMoEc8T97qxRE2MZTJq1ZJxCKdGwMreTBDXyfXHZ7i4etqoW3dCREawc",
  "key21": "5c8tj9qHWvLEC1Yz5ptmwgekwGyJ5gZjXnvr9NCL5Lu4d4GitGoF8mqK2U1qW1fYVAP5tSqvc6B9ZgHqQ3BNVTSP",
  "key22": "W2PU8VqoQ2YjnVXZdYVmdVbFusaJAo5vguzM6t8Yr5j3F7GKQZoMF1ZPFHWS1DXQmYvdqHaW84voWLDSjdDWSV7",
  "key23": "hAdLJUTaXf1FubcoBCYv5FT9mqMAHgjfrVr9XU3LBSLWpNVCV43y4EEsLh7BpHeYXzwvHhcBnaGjFFZMY5W8ZBu",
  "key24": "2ts6DtrkxYQHRk1c4khe5MdaxtwBVCqMYVkmA3riyFagMMtTVGLGmMzbcAXPW3j8Q4bnwpZF6jrYwo3KGQHZ9Xyo",
  "key25": "2wtrLhZ7HeDayS3T2XqP2fXa2erxNMTHLibW3G76gRjXnYNYNKxNtgtqhqXLeCdRc7emjWBB4pt8S61Qya31Khzs",
  "key26": "2ELsNGyHi42kRHzjhLqu2dJ5PeY1WYQEDrWhKs7YxCnPw7ydczdzch6fEH5PVnzqMC78C1FLNV2Uyg53Xm8E4chW",
  "key27": "3AEMky3gxGU76pduW3wp6gDFnoCCkjnfQaunrjQuARQocLN4o7qFY39gCSP5f9ewsYSopPvJVsUGmw76WjvntyG1",
  "key28": "3xP6VY9vZn7vG15M6EeQQBbCUs6zRUdDEj96dbHURW3txSJgAN3t4U21VgFzAWaviHke72j5KYTa1yxKejiFqafE",
  "key29": "3gKZS3seqxgV4mbfGT58vjXkqw1kSrymE4cEGp5rZ1YWNa6LYjiqYzFZH9w3HSRbB2CKmUg1RiSUJfhhfh3oxU7E",
  "key30": "4XyDhznUffjzGDZJxK7piub76qz5kPyjsaHUXdHnrUZJsV4GTvJXMcxAduh8T8KuTG3r1rpFESuh9HhaYWxS5Kwo",
  "key31": "LkCWy89cGvgJyJRcvvXPko45QXiqkQVKiURs9WFPDVHMKL37MSHusYCPcPZgSgL4wkjfBE773Yripbn2R7LB12H",
  "key32": "3bHa4mcUcyAus7wv2eU9EpvViCzLsM5F58Qf1Xsa4vrUu1Sap8wHQeGbBTQX6QuBTwpyF1MZoW2YMC8HUZipSeEd",
  "key33": "41NcL5CMwYtk18ri5E8xPpevAyRAJxHjGvULfHevEq7dDdnE3mYdnDURmDiQ8tdt9kk4P1JPwecoRxKXRrCLGhtN"
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
