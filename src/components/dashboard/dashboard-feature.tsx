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
    "4y3mQBcNVq1HSWCwjuNBoYEgBB2CxkNSQ9e7Z2AkK19eWeCapALr2MY6PrrP2h7iro8m5jKjwqPGFT9yupd9PCAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BGDEcqwEbhxdDESaZePGN5VsWq8HXAnKtu6vKhhYdoQNhfSXxcJaMdVGMYiwebh8jdLESXotqyswB75CDqML7Zx",
  "key1": "66W1JZRwmqZ5weNGogydfn2T2394Qb21kTNzoBghynCHjvsjsjr5wDTT32jcGPsoVRP7aF7eSp5eSXpLBZMJSuwq",
  "key2": "53gqdaabcDm5BHTxbgWdezykzxZxtTuPy386g2vYAZazS2BaBScRKvdXmu946PUdhXqtTbW58aX8L6aPgVHinHhA",
  "key3": "5xWPe2SSC3p5v5hLffVEA7rdjHZSEySu2FR9s9cM5X8VZBwtvb57B92PhV6rvUhFLcz5W1abLjEgkyhMBCxiAD9f",
  "key4": "4GCKD3di3LYU5ARLiFruX3VJ3Dja2QhAwLVQ4Jj6a1BaKnBBG6c28vTUTMwGzf2XzuhmXvywpoqoR3eUhZJ81w3o",
  "key5": "4zSiG1ywo4gMBBihAFgcHTdkQUYDYKGJNTgVKJpQrkYNN5yKnfVFS2vbo1hqZPfcgEMMUw7P6CMByZRZ5cJMmrSW",
  "key6": "3Yf3fRGS5MrdbYDSfLJmsHA7dR2jw2YV4D2C5NmRQbC7PXz5gYeegj8FccMrj7n9MGcn4auppxJi1735hjbnehyQ",
  "key7": "y9d8kjGE7xQmNWEkDKF8GRXqSViwCLobUTtPZT4eevjMgL2VMSANU4AuZ9pnjgfw7mKNY6V1mMNxLYt6D3FbdCw",
  "key8": "5Ds8AhErnxPRGijUSj7W7f4MRwgkSJia3X68vznseYdSEkqFJ5Xav8XRygVuKoMn5DQCL73jS2kNeLm8JrtRYDFE",
  "key9": "w3N2pjZHtM8MQVihLnYfHxdH2BucBmogGU2ALze58eRu5jNiNK9mBkQpm7bbqbhhoBD1zgB3kWoR5DXSQFLoWsa",
  "key10": "2q8UnyWeSiWP33Le9ApS3y6ff1hw48ShisXcJvCexC8KuPdErnpsdzGbkJCCMhR1SJpuFSKvcgB5JBNAAStgmkqt",
  "key11": "4mzXHvhqSw7PLuyARG8q4acz41K3QAYgxzJru3fqg34szgEwbDLKQYzUtpKxhUTkKXS85HoyJLqUaAhLLJmdnd41",
  "key12": "GkuT25kaNDwvBvmzEMM1ZaVWuEunW8vvc8TAbT1RX8V4QvGENjBYfA8R6izdG2Ly7oYUH8GV9cEaishxFSTFRQZ",
  "key13": "mHtHBLdYUKyuSKnLPXzW6vPCtH5E6ZKjdceHYJY4EvYKbve9MtM6aEj1NF4fSHt9bt8c3oQiRBo3EYFR52TCswD",
  "key14": "5oNgPnGAouPk25LYhFfZjrmCt9vjqTqvPbQ5sSav3Gyga7AqKZr4perNwj1v3YtSYerPLQgoeKJ7Mjx2VAe5Drwo",
  "key15": "3re1EytVQ3F6je8oMC3eXwbLbQ4PqLvNehZFrDuLft7zzJ3WHEcK4PMA9Wd4BgwgSiNRoChKJ8vZSDw6WxGcbQfh",
  "key16": "2WpiVuwpp89PPNrvXUUWFnhKLDFx4xbAAVhp48GLTfvK6i1iM97g7oU8kyPYa1v1pbEUo4dKF2szFiLWuC5yijXF",
  "key17": "3T6FzHa7pCwin4VDsQWHiPRacZn2Q23mbiQzdukJ8qsT9J2PKfPyBLZgg7ktjFB6j97HAMtx9CRFuHWvsDhWNQ9g",
  "key18": "4b8beUUQ9SitKvEyhfGjqn78vzSBZrmxYScdFWscCUVFgajsa7kBw9nE3b7V2W6R7di5k6nLSYDzJesDz6X3iyxP",
  "key19": "37uMqmaj5CZkuo397DvvksDTFjyhfMaL3jA9Ng4er1Uby5DXGbBsujbrqFLrFNySpyWkTUMo3CxNhSLPfKoNzu8F",
  "key20": "4kde8cY7AkYUikVhUmseZCZ9jdQhc2C5nrVFinNM9GBEZNckBiLK2RrpWJnptYzx6ww8vRCp6CSDtJRjnkKpQUzZ",
  "key21": "dr24zTqYY3ytCGN3oohsGcBcv4UKZxvRM9D8CyaaTNQqTECkzBVvySL1DZKb5PqUADMEtCcrYJQFNumZmHBrVLK",
  "key22": "3xzmgKYG8sskAizXVZaHYFdLkSncYorAaNU5tM44PFr1g9Z6MSKhwaAhJFLYiCHUxaR1b8mFrVsGu3spfvGLh8Ar",
  "key23": "2HSTNvJYYv5mz8bnSqduWynJh8fgx5muJNfACN7sRij4d8fysduvjXViXpnckZXsH9QiZ7Gc896xtWJnvko3ntDE",
  "key24": "RNp2tzdc8yZbdQRqhUibD1kCyEcv6yGcsQ6p9hfVGDqK1QmdVvztbvFKy6YUDUSPRhR752QQrqw8Bq2oe1ReuBi",
  "key25": "3ubvnQ9mWxWWpBBRBbVbdWhExuFnxG62uWi9j7qCVp1XwnemU2FDbJbQh7FHMsHi6HXsCQ4XA9LGCRug36dweGyz",
  "key26": "3WkutXkf5XFCZdUBamrhPDM5wYgZBZSuxffZAt5FGbSXxBKEgj1XGuq2HUWQzuyh2SsCkc5v12LXAzPhAenp2hVc",
  "key27": "2UrwToU39YU33CYVUtxcSX7DCqg82Fk8zqyE428uuYotwK9vRCgLDdKNcd21sex1UNUcy6MJw83cd2mijvcihYnP",
  "key28": "2oK8M3NYxcciVS2vNf34uSWmyxGKssamBo9Lp3aAXZEoUQUnREiRt1HvMvDCYen5th7FAtjZp9dyL36Nf76SRct2",
  "key29": "TZTS3cVmeMPwG9u4xGC9uLnm7d28qHHGFCGWdsdforKcDzP6DHbBkYz9mJsdPMiq9p5se8oELS9BKXFoofWxq2H",
  "key30": "YDzuaUbRwJnFg2gcFKMa3ZbzPckeP2Fzn4ddVspdyMj7EupJgvk7K5kR256WU8UPDUtiDQ5FZjTJsym4ufCijLE",
  "key31": "4TbZTSrcU9FKaUMubfZdJvsHBUrCqmYw87FCuKjhPjABFL7dPGHTcCRuBW9wUEgudvA77kv6hRy8PYPCvVYzLFgj",
  "key32": "4X8fKQ7TMsXQKUcFF5h6idPtnefyUkZdvBpV5RddYiXSXnMWcc7Cmy8v8zQsejsuncPzHQQAy2TGRiyvN3wLj8Kn",
  "key33": "3tvGvpw2vUEvR8Hg7jUvxV5gNaGMmaeaBPRXMbuqJYRhDJ2Nfx1am4chFXF1YCTibhnAoZ4sN9UNdxv9C7DTK3gk",
  "key34": "ZjgQRMUsdQUFUHcLrXRwuYBBTDnDKDLUAquBDtzoWqaYMaFSXhp6PbjBDvjPKdiDMCFoit8P2kxSxhmsXqr1oGj",
  "key35": "42kQB71MiXoRBSf5owe8KeKm7KfUMs2Bj9PYQxuPNhWvWCzdmdA41JUW2x7nmNks6svoRBiBdcggckuko1okVQFN",
  "key36": "wmmqK845kwC9RxwDeRJeCxvfRa6B9t9zh4zKp97NDr6FpMdtB8CnpaBgkeYP8BvF36sozy4Aaiprf28JpsYkkZY"
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
