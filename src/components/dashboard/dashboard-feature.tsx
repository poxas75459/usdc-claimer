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
    "5VykZ6xAA5XK1BvwQKo9zfrkMrwsWk97kDDKuzYfV6cY2pQTHjN6cQ1XvZeLwXs1xGqs8WrsaGsYcHkJnTViiRco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rYthfhJcYGRxr4rtPBVLN4SRzi1EWNxVA6VNnxupEP3kscJT1DNiXseqLodT7MoGdH9svzYLzH3ePtGH14da7g9",
  "key1": "42LMDZg1y3nZ3a7XMRXxqUcne3dz3N4jwKp5HsvQhaogiBFfq7MS27hR93qo3FC7tyiyjU2MYb4Rs9zzgtryFWSJ",
  "key2": "4JrpdY7U5zMLNfe221n1xYSAWUwjRfkWpEeFcENxxJ9HkRr4Nrw6VSXbjp2rDiJ4G8TMzdnfATj5ZbGMeBvX9uy6",
  "key3": "ZSYdGNg63bUu8KbiT7Vys6ZZgm29hTuXTYUQqhhk8jy7orXgNafmgp7dx4pjFZEAr6BVvdtAnpgHvQj3NzDXwD9",
  "key4": "5NUZkRySth3raeodKao8xTUXPJT7jzhVd8ds8X29Q5tPoyoYFq854FRUxEnsVyywkRxwqxY5TuwU4pwNL46eUgMm",
  "key5": "4SmbAXnW4oh5i1TgZnYXzm6nMz9ZkeQJEzwD27vapUVCTwLtAdwH8k93LM12kePuhM18hRkU6dVJJ6c7ucEiG1Fw",
  "key6": "3LkDnq2NyhWcVC6fFse1WkCg42sD3xbNDE66acfndWNAQG4DnH71GYuhafqFWvgGaLEMZfn3jKV2GmW73zmSGR5s",
  "key7": "4JLMGEH8bW22uwsqaEmGTWkA2gTAgvhS6vpo4SR9hnsM7rMmm8VH11ycVsxeYyacdHuJmCHrspHkFQ3DzpkGeynq",
  "key8": "Wgoory2sSY3oD5MANPh9w9puRibcPvuxP9rMRrvsXEDUauCtEzgEp2AUqoLYnJctV4d9HHZmR6E489C5frBYAEP",
  "key9": "5tTMWQmaRbQTvH6yNWEKJYvGSzUP1y9FsgdUsn8FmzSbQ5kfoPW1SCLJv4LNt3wqj9npwGbkacTz2MoFasMJLBcW",
  "key10": "4xtYk1tdKGubEJGxYyLycyLUuVED8hMuUcode5DELRgHGHmZZw3Cu8Zsp2uu1ggJ4y9HA3KfNhdHzfQ5XsGA9Ua3",
  "key11": "4BeU4EBPJhFcci43Ssw6soezYRM1jeY1QJbD8ydEhNEzMzvsZi37BnBQqp34zR6WrRVgNRref2LX3d4aHA517RWN",
  "key12": "4ih1VXtnwK89ybMfzWhmoGMqhWv5SoodRr2V7r9J5fPrPHHnzbVFcoJS4rs857wUNRd5a8S5iFVb7pqWQvF76QmZ",
  "key13": "4ctJ2goQoxQMqPm5QF35HcQjbzETHDdKdHhGwwK9T2Uwnigqya8z8DBCeqQ1DHb7uHQuxLAfmL2Ce9uP53cVoiZi",
  "key14": "3JfvA22oVqBjXX3DRvDBxw1sGGqjcBVp1iNkpttaENL1wze1z2fAVmwWzY84KBXb3nxvE35u4osRyhXQzaGzDMBr",
  "key15": "4iRvJM8g1EoT625LCeTEsmG2PGZCAQLFZnRgxHTtTzD4ftaCF7BzyP5N3ewx27ct88CThrXfjujL7dMiReUQJcq5",
  "key16": "52igGpH8KzZ4oHonxsT73aT8XPmQEG45kmuiabABZ2VkhduKnAzTsyQgbnvfE7m6CAonLH9zVtor4qdiBXVGfRHK",
  "key17": "5tmMqBKE8YECea7R1ojhimQk8SprZxy4LTuEu3SJiQFgnhGhoQJG7F3xGP9uG3apJszAh6ronGAFPcrknmkgwNUF",
  "key18": "5qq2ocWMhZKULKNfhD59QfGUooAdgTVWFJJSAT9FkEivBmtXhEtM29YYzXum2yS7dP2TWUPswPUpVBfk9gEGbQPk",
  "key19": "5V3E8AzdGdLVLFzHkfQR1gz8EW1J5zoxECZfDNrtp5LxCz94iVzRzfrKtSeCHsfGyohzySKjzeQHsrKeLfHtbybv",
  "key20": "2wzdN5e1myJjZx5ziKwZDM9B5wPvpZCQaC1JMi8yBQtrq4ya4mt89KzuKStTH4PMup3wNw49Ez4PkuXtC8Cdz2VN",
  "key21": "3L86L6JkTxBczdLNuDPVPvChvMT6ZXitUXy4zPgodQwb6ogD1uiBrSZj1poBUE6e2E9sQzoLiSdmpBfZMrWHdgCj",
  "key22": "5YKZutc8Jg9Z8vT1dhFrAkVz4rT9KACZWhfRKfh4buSfC3TLjKXskQnQuNsfshrDMspBuxVm34ZvuEvurM5JaSZA",
  "key23": "3hmAeomMhe2wAPtdLyCi5KwKa9GP8hoESfVm1v72Kqwu4LDF7XzXot7yURGC6jRF7rSKxpTZCfAikoWK9NeLhPgA",
  "key24": "2Ra31ahJWG7iiRMN5HoCM19DYGvZ53SAkqzL79Kuj6RxdjRrizeB8s9f81HahpYvqaJ4hLU7NSHsvatDbJhYJ1VX",
  "key25": "6352vEtUW8qeGqvmfn9nroRF6K6fFDQbcLnkogy1gK6wPsPh6PEUefTL3J7ZiiBYnC8EfpKKt7f9qNk4qkC61DQX",
  "key26": "3enUkR7hbjp3zunuFE4asfgW2PAp5Atjm9MhFGtXtnagBEoaVtDLDKyX5P5JxgbTWc1wQN6R2UgaAZJNiFvzqpVm",
  "key27": "4FGuVwwNVVFBr4BuQAvoTaFQBduQr7U6Zk93hiF1hJfPpGAREFDMXPmYp6MeK3XNFZTnNNFtJPuGgvPCweLkcYto",
  "key28": "2yDRgfDHAh1Zrbz6QakM4zoaFTfcpxCkA7nqJZu551SWKApKR6Uv6XZaZ8ehumAtyJ6Q84zVE5wzHPzokQLDDgwa",
  "key29": "CuG4fMXs6v2a6WWxYvHJi5jSv6mSEXsCSHahKVWtzexaV9zekfuJEUCmwARCCeS7BsB6adcuXUDpKjCmyu8Z4iU",
  "key30": "nxauuzAopi4f8dDZAfTG6eVfLXhrA2ve9VxrTiFtTgJzrSefdqvF26mRUyHTpCxvgw6GaKzu7DEiLTDj5hvXbBZ",
  "key31": "rTm4MkHAG6GSpRrccD5zojQcpdW5Q3fXfFZGdRrgmPbarc2gWBxrwkAs5ixTzykozQfvMP5iZ6rZzKvSmbwmgJ3",
  "key32": "vJBxfTRr656Sdya2u2pa1mD8QihKopLmSr8z3rsf2aYYE6pA6TGwUQuBd4CdSde5EaWMwZKPdan53pW36kjK3xu",
  "key33": "2p3x5vYHReEXu3MnxS4MKeZ4rudKTTr8zRmmdiAJBesmAG39FH5dXxn3eTLMdisTQASP125VRWssqFq3mP1GoAq8",
  "key34": "63MZ4G82HTL2gTdWgtDKoXWquYATJXHWdiaCWQAMHiNzVYktomtVktP9vmN37ymSMpAgAtgj9cgjsyysGYD3anaG",
  "key35": "JdDjfVi65aMwywarRzEALr1CcZhVCEzx8nNxu3yPXoZbeTeZdnjJVLQqrBpMP14cb21JGbequRChQREaT85kH2B",
  "key36": "Fo1pnN4vrbZBYZzk9LWtLZkTzHoh7D75nAYRbXZAuTucJjaeZhxTwQN4QvBZowbCtkdqELK6TLiQbwPvsAjc8Sg",
  "key37": "4ALZUzBwVuj9uahQEVgHjoHxhzVZjGZLYius7dyUddZWa7QsdsLKKsxVdh9MWuRMJiBy76Rmn95Z83habRZnmJ4U"
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
