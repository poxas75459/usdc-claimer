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
    "5MdyjXrXEMjnhYmE7aN1gwktMhZGGXrridDrtZRYN31Cvm8iGj9Y8UxyW533bMyni5mxDn7fH8qASDZwS8veQ8J1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R2xfLDsTyYwx1c7uyGXKHG3W6pgBwMEUgr53TL6GJhd2hjPymfubRL1x8ohbNop1tZAAuxKkLWodseQLdytjCCG",
  "key1": "2wWm7H5apuAGbi3D51YJkFAsBoLTHnkeMyabV9zAn2mKMH7NQDUeeSAqVrG33LDEXB5LHQPAFeh4BKHPdteuhzxD",
  "key2": "2bfcuvcUa6yzNaDJWRozbeiRjrvggruxBdfiynDqtxHiKNXth9bP4AE5gV4oTzTvxNJ2W2gJMMxX9Xv2H2AGDaW2",
  "key3": "2XCzwXSnRhVBdEz4ZnhECYoUpmTUjQKYRU3nAcQbLApWp8WjEg9rGfKsNZK3Xx2PGK5NKU58CnLgerh6JMMjnVkM",
  "key4": "4k3rbCdLy1SgqqLAMYtVnjLeodS8tHaRTHD9xXRuZjdHmR8G44iJX9fSQFg3QF7isvYQxd7ogbxEj7JQxbfiJN97",
  "key5": "21pRh6W3ZsHhUodXiQ1tJ22d9RNEKifLLAmCeSxrZrMjmw9GZQKVinK32jYKss8Gez9poHbgeoBMx4cYKi8YZPpx",
  "key6": "FSd4c9hgJNnuq6isqjWyD5xZcyWWNmRs3VcLif2SqKdL8FkAW2zobQytzHJrm7Kbu2uNqvsga4PM8Eiy3eibJnU",
  "key7": "4xWCTwe5cTwtHeVYjLDoiA6FLXgPHqwaRXdcyrNgsauEFkyx1HNS1XPND9kDCVU7y43fDkAZ5NnnQpsSCuJ7UNfu",
  "key8": "3kPidJe2bzF9HyBFNkceAzFqdwAo9vQp3vjWyqR34uuyuQYzDj181ytegP33WKvhKwcHGrb3Ewe9YqKVmGcCy1ER",
  "key9": "44geGLArgLBqF5XMdXEAQFqGAfTvnekyDVd2uDjUC2Dof8NcCMWfY32XXggJsZodrZAn6odsvLSoT7EKi2E3KWHp",
  "key10": "Vn5uKL17cZ6xTE1afE9Erf2wa8JBTikP6Bc68DYqpdcUyAs6m6SCjR4EGrFgLYAJcGDEGBWgaAdPmjWgUnFNSV2",
  "key11": "5kNshAAHoX77hB7oZjuXAyER4gPHPJSsP7B95BroziWEUKGqHzimsSRCbaY2LRvVBpuTC7LkLExCutvD6T6wCoFc",
  "key12": "252PzZMpRfuopGaTaUvwFUSdeGDptc1FXsCS8dN1eHFe9RpSr7dFNS4yMrmgfSB5Sbjo7EZLFSBjv4YeKv4X8ujk",
  "key13": "29a1ftFRjBdq6QZ1GaHUMHDKVKxFWpk4PVEsW68QjP4LRxgoFjnrxbCjmzXP9bSrdW2wws1c9wpG343tKJ2fEjmq",
  "key14": "2DPvamCLFEJM5dSotu2fwd3KKNr2LbSeVLcPCS4yJc1QWhUNRd641ZPxfZN7h22SRupEbwX1CgHiCjDFdj5Uo45H",
  "key15": "2jqSPRyrJp2GfdtK1dxrXR83MCE5iKGvEzLFacSrn8LSGAGVQ81sAVZ8Y9J9ZW6wxaV3XkksnnQ7CCDkrbUcjuXC",
  "key16": "4UXCkxP6jT9ZgaxpaXbdBuroytiMRDZUttbx3ZofWkGu1ofBABmd9tm35SQXZDvJPMWxFpTHfQWVFodNKczS6n7i",
  "key17": "4D8Gj5H6NY3qQRgSJvsLUFGAst93JoH4myN48XucXLySqNe6KY1EHpnb7VcimWvabdTGhFhy4WZHYWqzRNFLLYAL",
  "key18": "5fuddL1LuEaXddgtYbEshR1v8CVqfgGbnqSMtYYXkHqc8tFSZK9qspwm3q33qz7ThBJtXBCC69MSsunMzHHBHFQN",
  "key19": "5K4RmYrHbrTd49sdmzLqm8cjQ7QJi3LqXBLnjBDzznXahQYXYJcWSgdgTQZKj5yEqhwZ1rLRiG2rJyF3f5Ah12j1",
  "key20": "3SqW4mjF5V92JkhrjEL8poVMRsB9oq3bDhDvD5DNSRJTDEjLp4oDGgqJ94jyWPuLANQbqtuwSD3g8pWFJhNpTj8",
  "key21": "3DkiyEZG6L9BcBaQ7RhiV1TfuxaceSNMhxxm5inyfM8bGqyDFPNRGitgjPmjCWhjKB6EHLKAcUFVz6WmDWQQtJgt",
  "key22": "Nx42qssNJfXgBmjewSvoHDUm9EF4dJSfFdCTdBMLLZ4hSCzxq96soFVxDg2Pp1DJ7T3ecgM9nmsxagBP84hysHw",
  "key23": "2m6ZHiXTgSdGmJFPqbQodfghyK4yGiygVjjHmt7uYyDhWm58duyFuFXTekM17X3xXHdwHCEjMZgCggTphj5X9V3e",
  "key24": "xKrsv8QLwxELfQpaQZrvuD5uWD1R1sCowYsxgF3ziYWoeLjBBRASKvAjAbRxN3ywKozQ4ZfUF8GxALBKcfkq2RV",
  "key25": "65jP3pYXhPtEQRC1L5dM52JxRajRK9ypeh3hPVDdBYLweGihdfxCnvRxrTYNh3NpUNWqxQNreyJ7eXpC2M1hpMME",
  "key26": "46mawLmhahgd8DKC2JXjSLiyAn9L7vz39bAXPAH8YPKxZoeorabCogZLtVmzCzVBwsDL7AQjHESnXbJ1ybJWR8EB"
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
