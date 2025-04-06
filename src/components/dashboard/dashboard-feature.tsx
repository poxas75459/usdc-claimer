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
    "2df22m2oDQAF2CjhH4PQH3bt7HxAabRTwyavi6ZF4cVNNju9nhUywm2yyreKSzrnJfbqX4AUyVwJbd9Hxnk9Ctb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27uWF3P8fjcQEWEzZq6T1AEQyikhVZH4WR81yjV8HF6ivKEcjXhqDmB5nyLapRXnF5jUmMBSXagfcyD85v3XAc1M",
  "key1": "3MfQtXPhie9amxrMSmJyTsHkDTXAogRreHabGxEDAmjYnKYa9BgdoqeHnEfGaCCx8nDKn27wzwHEuNBd1z42gDCp",
  "key2": "5XJdtPHSPgQPH2WxrPv7M4MP64J4qyzy23Y4zMnUU29BvPAWyijEN6749e2xKKWg8x7vfraUgwmCjT4bcK7h3Gzm",
  "key3": "5gbbnu3tnXsbV96muHZxCG6RPFPqcm6aiB4RtVTkDRnkACGeG9r98ofzmQGbduSKihAMzdP9DyY45kNLYMEd2Exj",
  "key4": "4SVcQHrawvdgkyfoR4ccRZm63PXN6NZnpuzknbzS6Dx7ouEGyHJLNTYjEBfPedMQdh5kGNrEwtvK5BY6LwREXSeR",
  "key5": "3wDSUrdog1GynMt9DaTDFD9f1yVmZdBe7r3pnrKboKTjVCt52eEQ3yyZDS2GFo8cJ3gNFYrpBmqhaVWR8ToBrNXg",
  "key6": "2MbFg7hZXHBiZxLGQJDGLT5xk5qWTZZvWbBb2ddL4VMoUXs4B1L76RbYeuKxMEwr5VzFjdE1Hncy3GbbztdXXgJc",
  "key7": "3TfbQC5RT6eYCEE8gYQkS9TCtrLLtjFQrnMuFK2t6Best12EhSfqfVUfJV9E8Wqo8eYMAZh2xZwirPZqjJrAsmPV",
  "key8": "29yeiz1pPegu5PjpsTc34GTP3YLmt3MKDZdKFZnzKKw4VUXUKEMN6YVLvwPn8YK1U81acqJr9v8LtMMm9ASDNHn1",
  "key9": "5oSerY2HK3cUvrm1MmmJ2qc7ypTT7MYTFRXJTSD9X97A3vbxQ61qMY8HKc6pcivy2jbj2Wcut7cS7NUkjTXwURy",
  "key10": "4LrmpyPSuq2Uu1RLRJRNqkjSphJQaxyYsiq8G8MsQzGPfS8aAhaPW6ynYtKQeKDXr8HHcFf9Q4VbMaTo4HXDiNAZ",
  "key11": "HYwas2LgDu9p29gmHc8srMfCcsa4dPgk5rYN3MGd9dAE7reMVdwmsk4kvuWzXPWhicXEEtmxu151r11bbBFqwSw",
  "key12": "2EzwzQadfDH81VoupCXn57zfRyMYEtjwAd6aYAik3v4hgDHaPp7GdAgW7uzxCpH84Es6q9QWM9RyhB2KkpGyhPin",
  "key13": "obqNAxcftWTJNbZVgDNC4kckMYve3pQbG4EXB7EaU2GhRVgZBNaCyyDDP75RBozrmQP6NoNL9qTivCTVBMMUstw",
  "key14": "nBZwsGc9NNhjsqQiDdLciAsbtPxCPWpdmTxSSjxdpfkUE1NLdhDBLPmoZVtAjJ9VEnujAe1WBVfZx2mm6DGiB2j",
  "key15": "52Mk69LaFet6iaFKiZGZtJUEANp5jWrxdiHmF6L5TutpPJKmNE8bcgtSywSCB1cN446AhB3b2VQsTfGvZLTkshEe",
  "key16": "5PF9tMqopdHPpamxhRDjmetskjmeLDsCk5Y4mP2g2J3xQWjvXpwpU6Mr2H1xkceUmcx8Ge8DVaZ3Ko77UMjPZes",
  "key17": "51oAnhUH1FqtDZ5veA8TJnqVVp2CCpJ91qdJ3R6TDcHKt5Lu5etdXz2oqxgUYipFejjhWs4QCjfermN42FUzsbiU",
  "key18": "2Kp844TiuEPxAxES2AF1sfE9Ex2mQdv8hprxwrZyaJoc175mrXWRvj1YpAKjhtSWrxwH3B9S9o1jd7YxxdyGd58v",
  "key19": "3JJ6wfC3so2aEuqa6xSM6mHmHXXYY8bu78mwo62NEzHEpm2hhJfgCtK7ahiYZejrFVY54Na9275zWhfEg5ThnBuP",
  "key20": "2agu3u8SrkY3dYxwbWiMX66xrnZytst5gG3qScyvVxoKVqynjHqGVsrquFbV2qSiARb9vCZnXgrvf4YVwBKqqSn9",
  "key21": "4GXfyS3QSpZujeSqdXLoVrwrWxJFR2U3B5rUmgCeyZpSBEVJVpVZZ9NmN5w692J1i5zKYTbAmNpcRXH9EbjEYJuR",
  "key22": "4y21e46ZksQgDtBCxgdmEziMCEZczrs8AxWxqUCTgTbCjK3k5yZPY5CNJaeUUktAuSt5LYkBy9ZK2rysxTpijRnc",
  "key23": "ZRwBge1ckRAMUPGmKSkaEPgohRHUg3w5regDVNMXyKobo3zYbCJ5DTUZi1JKWHJ4LDEUAdxSYWXodjtUWqfFhSN",
  "key24": "bqxpZjScuD2LqUQ8iFG32PXTAYbHadpkDiKk1AgHGCHerTgoNXsi1UkbFSQqwKzQBf4kAqv9ikXzHqC4AHum89K",
  "key25": "3MaphVDaabCo7mLPmKqF86cADvzzefnUHm31SX4yi631ytN4DCx4M7aRke8Gq1sXALpjfJvXKyTi3mW7XW7Zb2eS",
  "key26": "3hDhjATmfzE79Gs6sd7CZEe83r9cTVTNQPP8KWUHEU9YHSGGxn3ptZFgrHJeQ8UVUZiagHu8qfPeeQXYAUYDfhfU",
  "key27": "3SstyFXuppBDyrquUgj2WmNXsWunUaFCq6X582tQVYosiGSPqnNpw9fUSW7gK7w995mydXgH2NCDbiKPnsgjeov1",
  "key28": "ssLKbAbLS4TBp7ZDmP9saouKuUVFEx6QmXss6VQ7q9yNiHGuZgQj8r13yrf3oW1UFV9Ayk5HSMjWxJFerxz2p1A",
  "key29": "47Ko4m3cxzwSokMXtfW9Sf8AUHJYFWB5jCH9rv669tGUsvhtQrJjwtzdJknSLZL9NcRfQS1phDvZZ3PjLGyYL6gy",
  "key30": "8rXEwSbcrgpiTfKBmi8PL5N3xiB1s89SPAzPLAtihSnoZofqfU8wQVz3RbBMZW6sE8WC1XHB8LAcwRSGGa4h4yF",
  "key31": "2y4Q6Q1B2Cyx5ukB3vqPqNLj1jMstYbvWpqmrDCLGvDpf95VGnmxGT5fokFCyKHi9aWD4cDGi5d8QBpvsjPFA5Vo",
  "key32": "4UvrT4whJWd7VCjDabCcg8V5wXnY55Q7s1VdF9s7MCi8Z6HDVhALjzRMfFAsjHf2DGBhTNwCkMjYgmdVfrSZrx3Y",
  "key33": "36jgGyNceQtiECHHZxGR6pW6m2VGDJfUjxmdLXGKMUBvrpwdELy9WJFAxByeQ2TxSmy2WJvcGHKF4wcRQYoKYcLj",
  "key34": "5dZGwacJqSFCps71UfhpoQu4braCB31oEDgt3G7JrT5jXz9QHSSaTCi4xih7kqiWLYUWEd9pjKvSkAGHSQSTprBp",
  "key35": "Y72mQGde1NQAYTymF2Lsix8gC5se6cZkcQgz4sqYAD5BGHSu6PFmKkhesR7bQoDXgyEGG42Xx4XKQYwrXbSb6ax",
  "key36": "5xwvwJy3UfMTcMahPndLY65M4BTKoqHFbfuc8qDSRizf15ibRrUhrKx7NbSgwuArint7y4Q1Snot4WFWmULedZi1",
  "key37": "9iUV795ZjSPxJj3vkF7QTvuPrfrwCxNK41t8TbVgkhaMaFFTisa9c14DQmZ6jVwrEBKS1eEtTBv6J3hS2SipDa6",
  "key38": "5yAWGoAwEzwaFXBiFXLpnxrnXFuuXK1ex9ZLHYDx1n5nP1U7EZnm4sq1x1MTdwCKnr5GfddsBRKGTydfAidStdju",
  "key39": "f8A57aDvsLSchBfzD7NcaSsXf3owhQSpbt8HJ161ur1zUaVHqfjzH4J47uG6a13LmK2DLz3nc8T7LDcjJKkbiBk",
  "key40": "3Ffywn1odadzmUcA8Zw9obgdKVcTiPhHB5Swd8WphS8X9ujSU4AQoPViJLckybBPbqWP8TtDZuT6WKR3jiMCqJzo",
  "key41": "QQnuMdDtrsGpBp9nU1MDozZNTbtpqA7LBvHf52Ndtgsi9sus3yc7uRUbBynMFGLTY1NpYBnS2VAEHncdHUNKSvk",
  "key42": "4YEPt9E9bW7KFLsVTVspMCpGZQ2hevj5beELVUJUHFFnfs2Q8BmkNM8m9DJTGY5jyDradLA544UB3bdNHNz5EYMu"
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
