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
    "5iUnpSKAJAJChAkHyBaSefikxnxUddF2iponNDzHrKEDKgfDfWRFBq2YaKboCHnYHguSjQtpYVpqjFKDpfUQ6YnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E19a26aLkLXQBV8ZnEa9ssZNvkCcQenUf9iPvSjUaFXLdksUodz5ai6mXN7BNCYWoVdiL5bHTYq75GatmJZu1WF",
  "key1": "3FzenraFU59gPhEKHd4EmFj9LSPA35fiDmb4fgnqgEKDEQTdwXsjK29dsFnDN86Ty8cswNwb8wwxqGJPmxkdn9gF",
  "key2": "5w9hBXgZeHNy1yd9NgFCkNHHVFk4ru57CfyNF3XVG2XTTGoBuedd8XHraAoRecKGq9yU4LcKSF1gqtMySGC2Zz1a",
  "key3": "4C2rPUnszZTMFAvbYGBvhcdVU5VTW1nN5PQ8yfJSYbqsGibhee6zQc5H1Tov89N8XsTFpAVSFxGCSA5GeGeDxshC",
  "key4": "4yEqYJctKTS1qjSDDeq92NgjXQktaWmw9RrkHjtJwZ5z9yxF4JjqhBTi5TdYFEXvVsok78AKiuQR6ycD29k3fp7b",
  "key5": "55dtNiiXGacrdpDutHMv399wrQeG1UCxazWepRUo1LS8eeG7A9Xt36YW8sT6FfBraqgLG1CKagiiq8bmjH8F1WAg",
  "key6": "ZcLiMZcFNc8pyouBPf8xBZztV4QiZdeWxfgfWU197tbooQ11GK9CqB5QaYBZG5CZipLxDBrcYEo3LwGymvRKbbH",
  "key7": "2mvfdXDMiy6Yu62eTFrskq1wqDik5BJ3sCGds8RLx7isPSQ6jFWa9aY9LwLwNQozrYRC6vTsaWv7pZmwHxJbFUMc",
  "key8": "2CEm7aAD16P1TsgAg3xAx4fgdEYmYbrDh2Sn4gdMAYSzAxL7eNS73x77yaD4aGV4H6Z3neEWwF4kKgWu2r2pmL6G",
  "key9": "59ti9EqVYaZSN8LLsuhCA2TRXRx8gMsyrh4zZmypuffrnPnM6sf879UtrnDNvH9KYBenkarGCiyJcQxWZ3dc9CAd",
  "key10": "fBhvXtutW1ad7DA3nQXSV28jYtKVysmf85y41A5ooLYmHV73FErN7KVq594nFDW2dma4UFwyqD4H9Lyfza8Yp5C",
  "key11": "emQYuKGNZoTbu885jwUwUb9NpZW7Ph6gm9uCFvHG1tGU5vBTqbrLQDcUL9ZUeMPiVc65aR3nKjepv4iyjMgiFV9",
  "key12": "3UeoejTA1p3psvc254GQATCa5gAm1gSxetA2x2Hg4unJR6ue1dtJfe6iPzCC213ZPTTLN92VzKw82YnS1VTvcQns",
  "key13": "57gKWEKfGFasrzsdfJMPKz7PkVcVkEXPv24sbsALrMxtVptddqmbffr7LpRaW9xfjbk7Ex4zDatF5eQxgQS69HEL",
  "key14": "4qjzbM2CMSL7Fev81Z1j9tTifLxWDF2kV6i3H62zzjknPmqpPEHVYsEPnZC3qFWeAnh5hEGhSyfms5VNaVaL2LKs",
  "key15": "2jJXkwXAhz8srEpuMaRFQrrpYAmaDDrD9CqMh1qQsHXC6TyfNqS9qvmjy7srXnmUzTexXmdPp6AoMtLVRK1KjGMf",
  "key16": "5Tn3FfpjDUQLrW3SLQMmdfbpxT3BqSQGrm7GzisUYMoTqDSnaHkYMFGw7jkUQk3souWv18XSQ1d5LUCEydDqm6uy",
  "key17": "3FMf4SWYaQAXCn2RNUtB26atjc11SBHoVsZLjE1CWeKXbFwTKAxSsNARaFmTfJvqvjrBmDKDvWHxNQeVY7CkHWFe",
  "key18": "SVczULBB4o5DPPPKDSHdyVXk5oRxHACx3LnZgBHRjhoQa3uALuzmCa1G6z7o7M8grV6BH6NskjmjvsddQP1URgK",
  "key19": "59F9ax4wzgtU22ZvFwKc9sU6agdt246L6wpGbzK1tEN6jNPSTf6nz6JqcagMeMGM1Hp3ztdJUNxsm9e5QF9bqLCK",
  "key20": "5FSNJCWKHyipU9h6t932DqJnoRYvKXw1hBFzzuyoDpLo43jU1DtQDcG7afus5Pac2Wn1Djb3WX1bJgZPkNHZDoWK",
  "key21": "5rMv5Kwof2QWJE7DTr72QM5uiDns5UupDWf1PikuGGqMi9Kvchtddiy2h1XkYU8aQh8eGYeKyKoMQxp4ytT5MJy8",
  "key22": "2zRXeffVCH92EfWicQYbyGjL4nMKW2G4YXHtQ2udch7ZxhwFfFPMdUuAYH551TkvfKZLhUTyKFidsdjU58HJRRZu",
  "key23": "2NfDhb8KvZeaG21ADM1g2NY7tiWrju7T97tEQ13LTRwXBMF76d7sUM1mkeBny8qQFhc2xVTdw7udrgcaUq9q3ygX",
  "key24": "wzkyCbMy4Q5NYbRbacH7LB8CjtyeZ1mnC3KPwEu1ZAq3fwjGjq57W61AFtMJKia2AuAeg9Yb6pH9PC6fQhiNFPj",
  "key25": "5gVuC9YC3QmMsYoA8Pyn7FbF27avVZftHaFNew2kmg264Lig4cmvnHhdekgH86P3w9PRAFsgZ9t9ZkvGSfAhLTnJ",
  "key26": "UnPM2Swuep7eEjNE9GPKdakxchN644NotD8htm7cstsTrkhgYEujUqhGf2vuoqfLjWzpEE7wHox152FMp54b9iB",
  "key27": "3cLAJdhXdTTJEt9u2JpX1DrpGbZj5rTTA1gcWjtjprL7yvLiQiystkWek98vMavoXLtV4PxuwfTMZ1w8RSmES3j3",
  "key28": "9dWvwjAipUrZsNA6Mo9Mf7FPjJaE7KLBXEcvRnd1FDs8BzhwHqwmuXXW8HUnW2srUA274CTbcqwzefV7sr8kZXq",
  "key29": "p7VQUDNXPA4bKxKnrb1CwowxrkbJboLS32qLAstW3q2TNaqGdDh9PPnxgBrAgNJGQqa6SRjKvc2nZfk9yHAUNM6",
  "key30": "4Kyv22Nc5R7kmTTkoksb9Wwi8LXiHD9F1o5UmUkVfKg1865GcT7RE49VHh4X3jncffcSb9VUjs8me74m93zSpJsK",
  "key31": "4YXKdU8CFjidq1WAhpdqkbmH6aKyXT8wgFqTVttcrq65u6svsT8htQP1stjkEgSjnZGbeZZqnfu1wGvYtYb6eB9k",
  "key32": "3jqm7V8xHWrVpXLw9SSYXB17GceNzPrj3V2UhfSWkCXFbMaWinwQKDYaCwMDDc68evqifrdBPZjS5JipTVfUVV5W",
  "key33": "2J6QijVeFV5vT7br4fTVZ7sKseSajS93fbAuCRtSuQbbfTDrcq69noqA178hCH9nQgyicq2mYaMS8cfTnxzhx4Ci",
  "key34": "3hymevzQccPTvksCFTLSbUoqJD9wcTLreMCvUoZ3j9rARshzV7TGWhzw36fBeWtV1zQVLRRZ8dXLDXM6UUBhdyAU"
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
