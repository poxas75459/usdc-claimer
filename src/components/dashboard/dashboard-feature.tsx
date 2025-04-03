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
    "4XpRUc8p88FTzei8cZxf4jia5EGaZBqnDSVMND22DGTDv5MoER9LLDBRsq28Cs6rsYKYc6tShiAM7F7QCGUGvaYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DgZFQc2zGUtCRew3r7v65y7hf3BZ6xqcna27vWzXet4cAxmqN8TLYE5hsdG7qesjyCFTQbT35ZGXEktj2YKQZUC",
  "key1": "VNuCUBLjuYTAVCzYgfZqSHG7Wsr9GpeGSwUyzXJ93UcmbszsfSkV3q3zrkdXfDNbC3byhsB8BQGSwspAPUxGocD",
  "key2": "3gcdt1B5F6WQup7MugD8JdN7LzwcCsZ1hDhBEcG7zctjwgu3jWTPXjTaUxCHvuFGPEskG5DuxT98b5tM9enqZcTD",
  "key3": "3gYDBN1vHgHRjq99ZZtrPj4VqGX7BbayoHJvyiNPtEAZzJqmBy9YibwU7kMVrwCfp7P9w3ZxxyAF4WHCm7UPMq7G",
  "key4": "V148WsQEjw2kUrk2uYFnPMttcXigHSwCP9vNBVov8GX5FsD5dc4Z6TALVgCCJjpusfQbCSPyxwjNURunX84GtoJ",
  "key5": "2SaX3HGGx7ZbQCUMvWLQ2vNxaCWPYtT2SkbHHDRDT1F4aLBLzNkEpsm5dBjUXJUqkdmtNJqr8ctmmAKifZ9GYVtC",
  "key6": "5UQ6vrsA4AmGk8Z18wPCcpg86KJxPopMcQ651XX16D3NzL2bKwUP6D57oiwvkvksggu5ELZS4eUwTRCKsyabadpW",
  "key7": "5YzYvS5CFa6AThiiLMW586zvsU2k7bzHzUrosNGR77iDiFnCVC8KSLkMBWyXpYD5pdnR38s5USaqrUW2HnwKwEWG",
  "key8": "4TMBCYJZLw4oAjyh8feCecXRTGAsmo9gd6o11PzbSxe4yKLbDfXDTwcgcEL54D2mAJ7vbS2e1w2ky5fbnY4vjBde",
  "key9": "E1uRAM5XYJSk4Am3AMHNZN2C6dFCP8Vfzk6L57t6A3bPdYr9uA3AHitzv45vbRkWKc9bq91DnPaX8jyQm5Vohvd",
  "key10": "5iyvj9wEBAL1sSXSWHXjKxbCCHkKKUxwWn8v2knKhYkYo9tsSHJEKv9PU6StoSK1iaSMTKCV6Y7eT2rXv8j7bLkm",
  "key11": "25YpNq7z4eoP3UeirqKFCcUJUXedkyzgAHK1jMkVEqyHUjbEQza3dfdQhb3ikiLkNP7RiZiaHBoyouARhYxoDNKC",
  "key12": "37Eodz3hSq4eKnfRtfbiGSeBgWA6qTKrinGa7daSDbQmNaHc5ecC58PqzXyfk7pXLs3DhMxsB6qfzYrHHkmDCtc",
  "key13": "38ELy5vm8cLQWDMMRFjxygsD1Y8X7YDShKdzopuboopJRT1RLNcvn2YMhGuQaYyT1wzuzaukmKS13HAnaA1RxKES",
  "key14": "UZ49aPj9Vgz8Xx4fvPvLx5Zu2gHzhBk6H4ixhAjruo5JP1H8LjzbGHFkH1Pz18smRrKAdDR5xkpEorU8AGnZMdS",
  "key15": "VxvBv6F5fX8hwtsdPXBDfmYRvwSYSUNUkLwCnm9ediYFn88fKxWRSezhdEmkzekbcN4r8eoV5EAQJCrrYphdx3N",
  "key16": "3npyWNo1riMk4cwGK931vvYqgRjTizrwriWnoXf9hSmXQxn2r8pMx2b1Rmnf8HAAAU8Tw2SDkeztJmift8FtszpC",
  "key17": "2n9D1nw3fYKdB8aU6Wab4LkZ3FW7a5akwKAn3BakuGEWUWX4qvR35hBgPw5j45HeKfqLSLTKTZxr7mRh7QiXKQiR",
  "key18": "4HhspJA4HPPFw8MFTGgqzCkpsWaw8beuxnH7uHqGiNrYCbSDvw9ybM5rXLgvze3xd3i4piYCrjDozXz6F8Ms37w2",
  "key19": "W66U8Xeq1ozer13zAAq2ThcTzUvQpqzs5k9VT9XEqeqEVioFtMh2TBgt91tgyZftBmFYcgYGYrLNZXF7yJ1Fh3D",
  "key20": "372j75otCVdYEQcVKR5i2osF4bhJySQJ2Aiv27osFoUURov563y4Lt7NfzHjEYE3CH8ZLkDjxMDo5dD5UHVHSnt9",
  "key21": "cyNv3aVRmHZmWfVkJ3n8Jr95TFxJdzbTaVGrL61sPjmW2WA91uZVLLkVxYjERDTn3wJY5A7WpHcP8SrRn3cvLNa",
  "key22": "5C8jRcG3wKrBNkkmFcoPrVM33JPFdLczrEUsEAtNSsfLT35ybyg8QBYg8wYebD7fZup3Lpygd7ixktLdp5NFnUuX",
  "key23": "3tjfbFHKWGFMTEVPkT4eCq3GkoXPdDDiAAxMEmdjRJLu8KiKx6KCB3KcszW6b3mJEoj45g3H1anu7bVeahGuupWi",
  "key24": "NhGiCpvpUcAhge28tmXfMjxSeL8hjYVyYJWd9iyUtyqESWDgy4LqhuGgqPVTuVRVheyC9q1d3Rs1ooEs7YSW6ox",
  "key25": "1TFTR77VQUkqznToebZ7V6xTFTmMFXhadSMu8AKmDKX8cuVS9xagwERoGeCnYgZ2e9Pmb1L7p24t4sXxdzNyutx",
  "key26": "3xwMxhYrbos3rJTu6b6vp1iFqYgwU5kCzfewwDD8MBDR2vdXAR68iWbAw8gr4Y8AztncZm2dBuhbL9mH3pBj4vZJ",
  "key27": "4GkpZjshow7VewJiYPaii9Sv6tbKqVTHYxYAVic6WqrAMLtbMQuXFVNWcE4GSdbdm7FwGotLDba95aHDe4SoG4zP",
  "key28": "i8ctgSNv5wXecb7taphkWvm41nekWwhP1NgeGm46f4RL8eCzuCqc5uhpMN5zcih14FXnYgdj7xEVT4PopfAymup"
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
