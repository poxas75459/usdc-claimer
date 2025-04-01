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
    "3gN5TC4ATMysznMZrA1pqoanaZkx3PV8LvWFTPwUeE2kE3YK1YjY6TgAAEjsvE8nNUAneBqrzjHRcgyAkSy8TqVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GPQGtosNjrheX51u29f9tLZ1Ze6tvRFdDHUkGxbxdtq8EX4XKujhdzFaYShGfhQUTmNbTS3HcyjTpfMEMsWUgzL",
  "key1": "4nE3pgenShdwcJvBq6aYwfPKMTk4Qdm36HGviuKuepMwu7uxVujJnd5ofaTswhoHsd5mYXbd9Zqdkf8Sci7c4miH",
  "key2": "4vADM6xGBiL844ZVaMn82kReZ8BMo6aSCSXdX7Sw63HXNgXii7d6HeHYxAKMf819QWqjT1JgteDHFm46nPhjK614",
  "key3": "2krmUSPGTd9mahmfPn91dBDRW5MAYt2BC1QmcfpuEZ5LgufubSABZ4NZfhLcJsbgVE4nK5KYmm3xVfFQkxjSAAvF",
  "key4": "5yBiGjj6k9RSdqFQk4AHGQarKBEDA95gmDrwW6vn9EBhYvGAdATwMaigxAENm3UBkZq9QXehTNQNZkXVk3hjuzWe",
  "key5": "5FpZRdPHvUp3VrRW8yXS9KXo3SMMvse6FJE4YBjHM8nhDhnKkEZvxdeSCxC9gDLegKCA6A7nrmfafmeZLqjw8Nae",
  "key6": "4iEZjeFX4vmbSAfBD6tA6mJdti1BFVTUA7qpvzHUKmY3fn39udhJzm3ZmSHfzCN3GrkCuoU9zBwkacdyeVN5NpPS",
  "key7": "3rRzNNZnnfJ2SVBNqG79EtXhqCJYawZR1R9YbU6UPVUiFLW4qx7U1BgA63GbHBm2QsXGgw3ohWtd8BLPFkecT51s",
  "key8": "5mj9nEU8KCnJYvyQxxP1abdWmh3zojLqutZWhWvzQijginMsByEr6zqQpHxGTMbwCicBX4xcymSr8jCwUNAgnp3z",
  "key9": "5s6f1eheTEZodaoe6E1e4dvTugZ7mLUK2SMPN7q1GKUZ4vWLuGb8EGXNZR1B7zTnQWeKCiJeYFTcAiNd1hbBfKfj",
  "key10": "2VheamBcYzT4ihSCBcZ5bLR16upHLjttWbp9pWrCYoRb8FJ9tSgexoAt9aphMvQNqzYA2bGGdxwnNaJqeYJ5pHZy",
  "key11": "3SnT95vbH2SPQdtnr6CBpGrtbJQmKhA8GYmZMRW6JSYJp54RUZb1yET1x5CGacQMEyWmMcHtJk3iQ4bF5q37z1qi",
  "key12": "479JAcXX2EehqTEkx5NtD98SS6HArdJfDbhmRYFozx735uMMptHM8TxRNtFwDrr1BsFAh98oDw68di7x5yX7MqdX",
  "key13": "4m5L6HVKM3Sxn4YpkegvNjR7HbEnvfuBQGfwir7b3VD3YvrLJ5pPGVBEjvvUzGGPNJbnrAAX5hT3knuBA3f8mJyH",
  "key14": "5z3ZK5oeydiwaTaiK2ACKDi1AhuTCFoazkXhArwAyBXMS1h36vmivj34HNXvmKsPYj2kzkUp37NvnzHNg9QyF7Ww",
  "key15": "44ohLrFVmFjjcXTp1iMQ3QUbCajjZuzzcfZ12dex5q6vhu2n2wLMDyLrQqQqfNwFSAzMS8qoVYySGJWw5jJDjN7c",
  "key16": "2hGEVMtKbTMpxEa88h5SdF3AMgVdKjRcZLnHUfcNzb6KvM1kzFmBbajQA511pYJ6GBZqVYptSESMtz26FNRmfEvd",
  "key17": "2X8D9RDd73nyXNaNCZCWg5YLu3L7bunkpogXgWsuhukUsK9umJisUdkbtFQQPerJGbCVrkRBKwEEPQQWctyuvbbV",
  "key18": "8gp5Gxu5nAMJH4dzR1XCNmiZnSn5SytHQWg1ot7uf8uBYmqKBGTUwsbRDm7AMCAG6sS3Y6ZVvF3BXNutQeHDGoQ",
  "key19": "2RTw6pCXcu2nXqKu6huXxL5p4qxX7NwYBn4sojt2xtgm1ddbtz5VrupVWYuV4UMSfdu4NdbE9P3ubG2RW6M3iNt8",
  "key20": "58fvA1yaSywyE1LUMKknnm7Wt4mtYU6EUkUUPKHeiwyEgMCsBTZ1vnJX36WWKvWSciYJUhJPtfiRBY8tV65Dhk9G",
  "key21": "4V634XNteC4daJ5uUzRndRTeLuoYrFEUbwh3HRRyGDRJZT5dwpbxxj62jXHqg9ZFYCebu4pvJ8EGcgeM4ECASM1n",
  "key22": "2PrRc1iTshAriXEvFisHYou1mAwhH9v2yfE8v5ozTtkjCMi36wdrL2NSCmasaRjABkpBCPCJNk6Wf7HtMoTbpWEZ",
  "key23": "4P6fkHcYBq46idrLUC3KoDqEroAk57WP4Pj6MQDeJVp9n89uTVK8NgAULhScaNjqRMmidfFijZ3bruDgreJA1ZAq",
  "key24": "2TbHxKByG5cnBe4aDKacu6tSh6QMd1x7uEykTMicpcQmbgnkszD7Bwhof6QmNpF62cGPqgN4JNxmjppE9k4gi4Hv",
  "key25": "54HQgx5XnRPVKr8vTp5sw6TuKTDSHfjBK52g4TEa86QA9HieQSw7JVdA2wK3hG3VFdKcFX5rtyYgnnbpbvndEXps",
  "key26": "4VP9iKZfZb8S2ZNNgqJi9ev7ayJmLeRrxiFM6THXdBiQrjjWvfABVrTXLueeLh8bRfdxhCZ2cLeFy1GEc8eqTbm6",
  "key27": "57kuLLoVKpzMcnEUx6h966YyZ9MTvHDiZH1ge4mihVj9q8nLagMYVWEp6yGdSmPqerykCg4e4hfQmR8h2NahyDu1",
  "key28": "4o38myhyw5HRqmn7sT5p3eeX2v8utGQtSBVAvF2RktFBGX22aNKuxbLsfsyp9XyCKtr32Q7L3ogrr4YsZAJgDA2d",
  "key29": "4B5qmSSxZT69KXzjQyiRtCY7YGgeSm8MfjgEPhLjLG7ZLHM2MxHGR2mhmjYQSxsabcFtGnDJp7yRpj1gz55qRiES",
  "key30": "5BgnBmQr82HJGiLkktjC4ay54uZ1vCVQbBTYQGWCPJ1V9wmMNDpSRswchQHxqUdCwDTbr87YMRF6stK39hjHeHuQ",
  "key31": "4y2a2oQdYfsDZebNNdQZ5gdydMgEDNRg9qMzqPPq6cbSzGxi5NRmbo9qhAhoSdzEL5QaTLtUxYiCHjHC1rCb52oT",
  "key32": "4AePE1kVmem78jf6M6kUueY7GeHas4N7uU1ihmxgYqPzGkJHGud5283RW3riZZx7WLA7AZnwVX5rz8tjveuCFKds",
  "key33": "grVg8udhxrzd5CRYPwPmXZnfgXSRTggPuXk2SKYzgGWp6J8526UG9Ggne6aThzD8wvKFbkpYichuTufjiMYx6bs",
  "key34": "5ipUerbj2BYwQgDdToZ4rJreVTRomfJSqEW5b3QYEFAKfKfoXffTT7F4bc457UWnPNrqnpqYGqWZNXcNYZsALiMD",
  "key35": "2Zn3nF67yWjaunGoa7CEGBXrHo8WBpoMHKaZ6GSRJqYNBiCpjLj8JHvK3nrpPWNXdg5cULogPUKpaoaJjRRJ9Zob"
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
