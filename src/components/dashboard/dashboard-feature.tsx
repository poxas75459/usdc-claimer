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
    "2ZuoSmFbRb2w2eHK8KG4QkgWtCk7utrSqUtMrBfjhkK1VXfY6Fp6d1b3QKE6tDa1FAcSrRR8toK1DWWfHX56pPx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bdREqLtjfQ1tihcjNPzWnDHzAUdUZ9M5FdT5CvrChxfuHZm2D7eNPctCV7swLaj7d1koDDGVsC32cHgZYohL54X",
  "key1": "fUmYtJiGKZptebdue33cfqAdkUiJsXwHfYzo1jyRECH5khdxsGuTfj6e9jvbPjiYAqaRTKfkWVs9RnigtYyAvz4",
  "key2": "3kYSDhW35VLxBcAx8DFMmJQuvcZ9vB1HQ1ZqKLWjkk2m9rZ3FwmRupmbvzx7S725VDe7gxRiKVcSp9LZ7ZMWuNEL",
  "key3": "4XWXJg66S5QvjVVhVkg8UsQVQFy1qKWfBDav5PtTYAhnj3f5dgNDRYajtUFAH1xdnvHVo4HiumAvBbfVNnxBCHTR",
  "key4": "2spMWZjWk1qECC8QphjJc1T2M5xft874n6ZhuZc4KxhR41DQxbJeEvw2vS1Ai4Q93eQSiNNTZiCUz5HkVMqLnCP1",
  "key5": "2nX5J4fmxqzHgMgUWwzQwjSzKqMMU1sEY6VRUGMFweV6ZdUcRwoeQdTed5hk62rLpqmpfq4cJxfUiKZn3iykWSkU",
  "key6": "5Y5gw81j8zfAaiNCPaxNphXj47A2mceaSZdKV1if98bj6Md9EaBi2ecq1WZU83EniFTAwPDazNzXkBzga9q8vnqZ",
  "key7": "3Jxf2ADwT1pnhkkPy9PhsRiksYduHTTBRBgxeAHjeJVQsh6Vxh6DsD1rNokm1MT3763yKkN2un85oR2po76VeMBU",
  "key8": "3ZviL1DjZ8NSwtEv2QzSgjSrPC33wVrnEo4jGxW4z69VXUsKqdRxGbpv1KNWcS7opNjDW5B7JhX7zUEbiaqzYkmq",
  "key9": "66yg2WK7YUWTMCNA4Cp6PKCSYQGSTxZ6mher2A6pi9uGshJGj6zr8bA8WNvSTEn6P79Am79YToz6fe7YRgVztPmt",
  "key10": "2ZhWL4ZPkEwRARyX2BZA3CqUJvMVXDNC5CUg2sFeKhpy2i7ZGgntdbKLHEQR7maDH7JCcxGwtvVJyePpwXVq6ooC",
  "key11": "GZ28LPbv5vv8mmk6eiEc1w5LXmK5svXJ9FzcQXXeHavdZtR3n3W6NbDTRYTtYG19sMTLBecCiZ4UqheUU519atQ",
  "key12": "3FY5ZqpwS7fbWbFLMr931Ac85WyF1JyBq9VicWF2accbdThosQ5n4uiGG7zH8guzuMZiQ1YWUy2xsv5Vn7gUKJ4T",
  "key13": "3EjQcU6ji9QGYDUjPCi9t2NpN9RRW5RePTUoa71qE6PZAupa9XtYP4aqLfnmdUbsaWV8LbhUv5Ff679PWnP2wzQZ",
  "key14": "DgQc2tRioPKhca7NfDR25t979LvUQ4zgiWgEaiqdFuS5HhDBQcSDmc4udM2VsMjTbd6iWRRfyfAao3C6VwA4Gg2",
  "key15": "3WUk7ppxRgpV1TVh435KVjLQC4uosMxafDikwfMEvVj1yNS3Z1BfvSmATkVNdcSp6mXkmpqcDyjLh3Qve3T2fQ3T",
  "key16": "LS9cFoFpX7QkHKmnr1h3KmEFcWhp4QKeR6WqBKdPoEfTvxZcBfU2bwKQbb5akc5Jc7kdNNHS4wwvs5S9Y6Be72v",
  "key17": "32JA5FVgEtaCaB2bEwHnwQpb9T9eh1gkDsFmt9KG8GvR56VgSE1Qk2Abumm3yDUFN7DoFLB8fvAX2nWqrkxxKbZN",
  "key18": "25zqGrEjgvne11H6MvzJBUfhx43UaSfCZgDWB9YhEaFZZvsJF9CXM4iymivVpXCXSF44QEAhqNncUoyt91B5TKEF",
  "key19": "25kcdHezuR47UfPXdYKpQdmXQbMcM26HsTypB2DWajUSU5E7cJjF4dq8VeAcrcZ5LvshKWY8REi6XDsEGPtkivBX",
  "key20": "LeXZXCz6Mi49YmZNuK1maHw6R5KmguAb7Kgbm6fALCpcAn7VMs9RXdrhML6SEeM6wbP1MtKJQFEHTeSBKWsvs9w",
  "key21": "54EHMJ9ZKZtrnPixNr91ypCU9zr5RuGAwosSiEv3NBmJwPFSWfHtEV3DaDMMHDMSE6P2oEH6WNBdN4StNzegbjQp",
  "key22": "2SxmjR2KjA2MSvKQ6JCohUYDz8K1G7jyVvdoTZESdVS77pLwFHXXrgJWPFu4ipsgXBUgf9MTcjM7PWZhS9by21id",
  "key23": "4ctWaCpEG6Wkoa98qGtfmUdaMvssVwHjiQcdhbBqbhBmWNFsspu2eqmzYC7QSCVQJi77asrTAoS79VjGaPE8oSLA",
  "key24": "2shJzetArK7wyQYzwp2kfTuPq4Pm3WcTRJTVe4tmq643VaCFsoaDcFFcyGAbLByqwxTjNjCrcANDa4VkqyM6yqTg",
  "key25": "Db9qmcEGDrG7w4SnCL1W8WubSkBEJDxiB3nf1BD2vE1G2qcxKYJCtxaVcFYGXkHti2Hs88on5Q8VmwmY7cGy74U",
  "key26": "4LYZzpWzBsnXVsutr4gJzXFxPMZRcX5mXUN4jmwqZNSjeASMpevaDtX2rpizuDCVLgJNJeRM51ujfqpqJwK1vznU",
  "key27": "2ZAPMi2gRYN6CzbwQXB49ResWqEKChF5gssBb7vMpjnxjtDabM322TZyJMAjiT79uHVuPV1htAkBjL2KgheGfuqD"
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
