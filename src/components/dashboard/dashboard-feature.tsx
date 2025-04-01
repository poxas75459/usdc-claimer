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
    "ZTEBAd3VmVMRzizLW5b2NL3CjpwgfA2tBJp7K13VDDTkgJB5qLgv8Ue1i338Hi741Dq4XKVyTooBURWxpB3KJKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ckHUDuoCeScHvT88sx1V6EwsrJ4edGY7GCWDMoqeX3pEa61kXNbBoUdpBjVSVbetJzQ1kQBkgFFV3THoLnaySH",
  "key1": "2ZMo5fNVvzSL1zqB9YW8r47NHJKvaZCg5id2gZawWdtxpK9B769NNRqmL6YqgvzQQywzbHQf2Ts3AK7qM5NKXUfo",
  "key2": "3RiUAmCV7LAZ5FbYU5VYiRy5e1p5ae3jd3qgRayZKuSjyBdUx9REGeaoc9ru1nW2knAMxzLeiR7N9bE9rD3LX7h9",
  "key3": "34movcBB1HFw2eFPGgqXYXTUhbqd6CYF71bTRNJPRUao4QB2m9we6JyzSNkt8yRjGZDrD8kn7zQb6JsxqC3FYsEW",
  "key4": "5L5wEtcc6iZ8xgn8HCY86qo6BaX2zddTfzokSeJsWQwW26T2fkXybgQbRvo1Ysht7xAdK2wVAxKaQx3MoXRqxvrX",
  "key5": "4MjZLqfa5C3GRG7j5UuJw8KqoziqhLRMqZ43ZdZLSAU6DDSMsVardiGR1MHEe9ueRFBQnQ6hGYNRkBvYUBhp7SvS",
  "key6": "2SHk5yXGFD4GUbzLtJF3wbGPfpkzP4ZGBJtmkBYEewxJwJWbehDVyaPg3CiYhRh9j3aWSaFiQDyetvvV1qzkE3Zk",
  "key7": "2bLw6km9sjnEJfWRyPoNmQ32nWmkTo56KuAzYaDmWs25NgKqHCCXohQ6VsLr5egcnjDmXcJZzfATtKN3itcq4QAU",
  "key8": "3VvLKPj3Z9VUfiGW65eWGPhRHfPQQq8PYKE9HjrDuXfVT8TVBGmsFmbQhMMzqSyCw8csuiYe9Fk2q8oF3n9NvVJx",
  "key9": "5G8AxsTF5Jx3GuZacpR8x1BUHPeztQzMFGxEfVcwahcsEEQUx8WML7egGKswBQrDYvUAT5TbCJgrPQRS68MLMGwu",
  "key10": "4NFNM19GD1Z8drQ5PXhXD4qyHudJqfKdwfaH3jCeYNkrJLkixkUYtshc92oAWk5ECGLYpmxzTcKNBhUdXiuJad9d",
  "key11": "4dYhxA2JxpasFET4Q9oVpGWYr7DTxHAZRp9evmaNdXRpWBtRbraox8HMpXz3s2QrvGaXfZqwjfj95Px8jEYBiA7b",
  "key12": "4AsBsvkN5KSXReEYjYHUsk681ZwfgvnVC7fLBju7f8yV321BHNGTJfnm3wLjxRUs7nvaPa382g4LYK6NKjTfnXcM",
  "key13": "4TuZXRHm7uULJRQFpXEByGvfUdWnj3Yw3sGnKAtYQGNVeQ2xkxBnhUCzzLQh4mdg8F3urWCr2ekDrRgeZux1gHJJ",
  "key14": "41sKQVJY6rxGbHEzRkJkpGgL2Y3n23ZnZQtNRdZKUWsXgtr9La8m84b3m6kNuARX1WtecwkRGCU83hcgLvwutz2N",
  "key15": "2jf7CKWQK5Lsue9JWxK8p5MbqVVDLqisGvRnfz7QkFSAqhwg1a7zcK41EsmLLxrhCEdsEnLwtm12nBK1yxcNQFoV",
  "key16": "3amiPYzNHvmgKR5abSY7D8iHocFAQA3g22DyayrXYWiTtkXZb3LkHGrzL8GT4tLM6Hg2zdZMeijNaRfNjhXBQrmd",
  "key17": "2BPamuJkz7msriSYCoqJbbM3ZdXQ571WLbEnLCL8WnCfThLiUhnG6L26SW2wi5nqeY7QZdTEwNXQgaqo3syjApWS",
  "key18": "LovAG1ygcJRc7UbTLtHuma2wX5QpDyYTTDgK4QowH5pjXkXaT6PyQLuuFFpxbrse2cEbD344oHky7vwfSXR43CF",
  "key19": "89qU2DrgQiTowFqzETZtc9x5qxhQSrbg6b73RuMiDMVyJCV6Rsrh3wwMvnwTaapzpDCMDNKyxV5jAs9dgtn5w42",
  "key20": "44zCjp1fi3FsC7VMmvGghbuZjgBE3v6hdTEVxLiw23Wmuz9qrm5BAL75THbDuhMm2sZ5HTBnW7WJHRo2VL3htRgN",
  "key21": "5q4MWmMAK4CurZrMsipRqW7HDA5HL1F8XNqJPLG3moHdXvQBMLTZQLn8Act4dPQD7kPmg9r2vR51gBQPkpyR6AxK",
  "key22": "CXiYMgi263CFVvz7n3iYVLYCWeRiRNCGMDkeAEhzXGPw8xq1iZGDn67RTtyNcMT1SMNtz1E83XLriuSuzoPzfod",
  "key23": "5skAgHFZ8hiLQivwNbXLEooCgdxm3jTN23kA1iGcUhe84Y9VoCAAC6UZtsTPj75kom3REAvgQTXQaDmLD453gC7v",
  "key24": "5T5833AJD8jVH79V57Ge8NHVpiMkiH9dRn82eptNNWPgkiZPQKvk3KkzKK2pCM9zo8LMr9wMUD8442qt8wWocHnE",
  "key25": "4fStTcpT7cMFPWg46AchAFLeE1yGo5V1VuE5YMtmYqfcNFKHAdSoZ8wMV8SiBr1e1TqMXof1FnAi6Lf4dv2A6Aze",
  "key26": "5Qfmns8h8Zczofq5MT4hBuEjFsFxFXby6kAUdfQrk2ntwcEECpwy4sJJtVctUnZ59kWdvpDSKUNGtZQ8Hnh5y5jN",
  "key27": "3eD5HfRe5Lm2WtPaQgQMP24Pvg66GScT3DsWk2MJMXKQBq3jPRzruavqS9muXhYXH5jMVacS7FUvMFxRHMghtqQK",
  "key28": "tQonoG4QW5mATgkJr63KbgxQ4TsWmhjBM77y13oN7oEa7GDFHXW8Sf4Nu4QVsrG6XLnAJr92Q8qMUMtht8m8qMz",
  "key29": "2jrov39vjgani6W9zB6afXfV6grXnCWmHjWjyLFJxypADb3Y3o5CMFGg86jWZVe8WoMk6kBFB4XkpaRJVDDSjC6d",
  "key30": "3qymxFDZ6b8C4nN3k6hHu52vQx7bBe6mqRnRS5qWj66SXdnLYuXTWphPEhgCvnzhBzvgiridfUy6JktJXfWkPnr8",
  "key31": "62opwjwQe6WNoSPxBtopm8rK7HcbUKh59yrrwVUcbbgEPbbf4g4H7CmuA4scSLpxCFJRgtgcGev5XsaVTMjPrBBu",
  "key32": "54yAxLy1QyoE5PvwUJ5fc6aNX1swzsfvmDpWHDcNuqBSAPFm5AbN5HPiK6JVX22LzY5d5bPu5VN3nFvUFM3YdyAp",
  "key33": "5MDeaLM8oofiDN1Zh4PKzjC4ML4Yd8CLHKi4vz7uxrBvPs7HksswhNmUXio6uaAy8ciM1Wv2yyVaAKbuCyx9PX3f",
  "key34": "3spKptsawoPzmoq47GrQXDB8iokcjSmFgbHP66wBtHxDRAwjxXUGSfKruGaTGceqEFLHUxQkyXApGLZJyKNGZoox",
  "key35": "uJpameQ1zJfZQnii3u8kmFV127qopdUCKUP9Wxwrwzbs5DZTftQaF1AWdurgTGYLwRXbP1bKSwF87Bahenz3hmn",
  "key36": "5M4NpJJC3QNcSufe6gt2ogtu2APdRJ4VDZdJscsKAQu3z5fa2szhj3vVuDu1GbFbDAAc7VDNXRfpaSQD7oJrePCs",
  "key37": "2fPRkCoK9szuJ71MLtL36zgCkGpkkHyDpdRV2HX7arCvzV7MEjYm6fismNmuMgZCUhY7k3Ga8TRk1T14EseS9mt4",
  "key38": "isbb1q4MYwf9UJ2bdrXqTkyxkwcjQeanho5nWTx7RecZydotLrA5BHvUsCASK1V73zYGG983Ehza4JxJTeCdiLM",
  "key39": "3t4uEu5ar3rLQ978t54o1xNYi86fZUHGp1reywLkEAra9fPudBobnMgEDVPCBTKcr7UvYS1WfesZnWQ1eB3sBixM",
  "key40": "3aj91Ftwu2GHPMjnPyRVfpALfWEeMLW55UJfrgDM6X9tymQPk43FMd8N9H3sFtjQrsG6up5eRjVJfRvik52nbNiv",
  "key41": "3K4ar89st1W1shz3mbuckALxgGKvFSBsnQhr9Az64pVFSjr4or7TJhJr1SLawokuW5aAyCL1LzcVjHKAEmVmhnfh",
  "key42": "2RWyrLXcxjPnada2GWASjc2kw2Wuz53x7qdBg7YZwnWNRy38HGdXkPJd7sU31EjT1jtERPqK3tKm57WvAX92mzRU",
  "key43": "2VYPbTGgLcztRYJmavZL6mxvWzxNXDQGUjwVv5tAKJipZguQmptNBc3YVphUXwFNdhCPihpYfTWBR6Etybw6UGBD"
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
