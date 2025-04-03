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
    "KQEhXfEStni5CgCfkQZsadX29UiayfxWYiUcuVSJanbZ1TLc6RdBBw3PKzC8v5vbdbFjV6oQK7vsMvLGKRbeVgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cCkxUJcGNP8Yh6nWCfYWUQcED6Htj1Mn3ifzSVc2wQ7i3ETSAbD3SDPb7ynaVW793ASdug7jXZh1srTAUwobRCD",
  "key1": "4FArjNV7SLWNoubzJ6WBN9was3fDSY8dMHHcyHJFqccQuKe9wob5dcnGA3t4S6DmP41Cp7zCQq2yuaT3y1sxMY3a",
  "key2": "3cAemnHq3uX5hmaMSLLmasRokxYjf4NyEfvr6vtqKS1yYHx2t2hP5Bp4U8bwcaCLynhteBAECcmj76tLCPhpRujA",
  "key3": "3aqReq3tLnQLBcBpp5gBL4BNvWBn5DghwQyaZLGnvmfBe8Wr79JvZzsKEMnQKWJVYrTshFp25dCCtPNKDs8YAmhM",
  "key4": "5phrUZRwFNMbNtwizH4pXcftRy48pEnDUEsRNhHgCzXv1G51esYhCgcY6sH7epQEM9bctgMCmrNaxm8XxkHkugQ3",
  "key5": "3DULrfiaGVhPJCRRVYJQoxLi48PnJHU4TeRq6L8CK1vEZrByHgHEYCmLkVMDZzSUEc2TRmivCf58BUTsfmVFdpPk",
  "key6": "4g2J1JGSd3Rgk4fBxMEBQfuM8PExXA4LANyHrxv2Ajkeo1FP4EyimALWzCDRV6AZGWBFocZ7YTEMG1jPfEhaZGNn",
  "key7": "4FCTxKKo8rB1bdPjX2PkVEfALgBnS86eZEC5LLyT845ibrscUbY4aLTcV4BZwCXJESK8yTiqtXX7DixPjyD3foCc",
  "key8": "629A7G45MZvgg1KR93DCNxJJ3qBSyp5oK7wCj9wirEhx4fxHmTpCzmpYG2QzPt2oUN9fXD6FtCNuDddP5bS1mHwT",
  "key9": "2pMrCww1Fcf1cPNyncFrDMF4yUuzj3TRfWGopNnngFqdqp5TYCoJ1tztCcThCAzJT6rDDo6qJYiXVvXWRY7nYLL",
  "key10": "5eoGybsCiXe1Q4KZQBtQy8rL6iJ5LhHdWGtCYqUhK44R9KYuTm5vbpfH15DFi5NkuaRs6jPBCZeFRmGdVajvPk3f",
  "key11": "53PMetz7oxn34C9cPsUhXSX2DVBydFu8X8xuq4d1H4x1ipjR8JtA2UtUkjKRHd9if5QiBfyYpsJe5TnjKJ7cyNRC",
  "key12": "3PmtQsBaTeS2pMVNSxH4GFiTMXH14NaADUNvu66M32DNeUnxjM6eamHebaTzzr9vRS1EPx5jowTJ52e4wETpw59E",
  "key13": "byLkKK188J4aaPW9KmYZmoDi8Yyt1PevrrxBv7h6BprHxdWeBvweFai6iJsaq2E3AfdejTXBCKitnLy1B6DAdRR",
  "key14": "5Tx5XxWMrGyo1hXsrC1xPzU5UydPyR2b2cznxBmSdLGWRDBkYt1Sn6yeFNNT6en1wAz1TfqdHRmU6YynSTgW6eHK",
  "key15": "3qvW6uWs5Eb2R2uqcPEFH86cjU8EB59ZzbffbWJZ1gZpsjUF6CcTPi9dpeHUL9ThZmxmzwoznmWqCvxrBRRYR9uX",
  "key16": "2knhbfbdsQFHXRNTMBpeEkkeN74CfdNcXa7LZQ3QAmEb5ZUy4ibhkyV4JjsB14CYZtHBzKmioeo1T26JHsuAqVD",
  "key17": "21GPXTBTKVr1NBGSWMRfqLg9HpMSg7a5XT4uWhpkcNcxoeCF6yK4qJW2Ye9Ew2dBApecynP6AQq4D3KMRDLxFMjo",
  "key18": "5M2hSMvhKQ8owe2VZRMAW4i1ZtpWED1MFZhVFyo3S5ZBATwMTeh2RxGZ6NN2gzhykRkijWBvf8urde7WNt4MC8dA",
  "key19": "3vhdzxBcgHL9URNMssXYfrmixLLpKi8K9qLwMkGkym9cyGo4juCTXuhRCdP6rJwhk5Aco8JzG1e8nvY5wxoYkgwG",
  "key20": "4fRHswkptw5aE7hwZYd3ZYY94EwTBCSmDX9zhLfhc6PpJe9KWKZUTzgvxsoyXQuPmwYWzYC855j5otZBLeJmY2cp",
  "key21": "42ZcWXG5KGXV6zPg7c6J9eYRwQmfYE14xczMqJkp5BWseux7uuhL5EZBud4n9UHthzoir95KLMaQ3ADBfUXKDsKR",
  "key22": "UU2pCHK1uEvqmEg94M9N4ahcKZxNKyd5QHwpKhJomYBVKZyWVAZrnktgg6cgc3ovUgCZbuepVPp19SfzcpQJmRz",
  "key23": "3hscka5K7envn6WvUAL3dwN9RmfnWo4jVoNDTVzRR515ZMUNrbVjxKaQhWv6ZTbsUKo17LPC1wxJgxbjtw3RkRQ7",
  "key24": "4XjePWiuMgtwPZWQEumyYpJfKyHATnCRaHXRZ7s5SoN1YanLJs19mNgm4frtUGtPK1crEugBymaN2MtJ1exauQC5",
  "key25": "3CwCmKdSPgYhdFHqd3G6wAbBXKjtNfnsTSjq8vgovThwDoP5yhYJ1uVBk7cNMfbPcmz98ReXpz8nk3stbCQNaQRP",
  "key26": "3LncR5Se16fSWoo7BY2VERq88WjUq7BC7VgXx6GtqNcHa5L8F4QHgMfZAjhMgZ1rxXsGHwdQkK5aA2Z9eWVDUk9s",
  "key27": "ghcMQhXjzwvukZeeSevn5JE4QrvER9a8JtmeX7zY4TQPuimvAEjkNK7TqxYNkGYppTaquLA7QG2ped7kkwDZCNz",
  "key28": "3a999E8g7FKEbcht2rb8hx7KUEiJn7wjyQgRiJboMTxYorU9pFcaJU7LnCK3K11x1iznq6Q4ZxEVvGx1LsbGrvWc",
  "key29": "4WqxgiWjcAJ3w8NR78suqPFVa2uTgDfA3sruQUgQEMHJ8A1Fm4BBy6Kge3v14vtRJ2AQZm4dov2UEBMTbHKA29yc",
  "key30": "5PuELpDE71hE8Wg7RLsd5WHHCSMEBSLHKQFWZcbLDop3iCYQi4p1JsPuASocc6cWkFvAm4KwX9FpXzi3BnMftdQ",
  "key31": "5WuRSfYJADjFgvbBgyMSRSrqNQJAE8zcmCyyrvjvoXDRankUayBNSe7APR39GVx7p3hzsBvAKVaNK378WTpGae7u",
  "key32": "3TdiyTmB9gKVeMyDC6MepDdFLeLkhXkuDGJS3FXj3hdCLei52hYE6bg91Zerec33pcJJA3rb9SofPemCL76np4gT",
  "key33": "4HArqorU5aPdqFkmLs62gP5WLAhvtjPzWfGGCm98eJff5FEoY1QFpXbq1kzURzoZuYCoNUwaq8RsLrRdgJYwpvjA",
  "key34": "x63gAELxxhqjhQL7QTxywMi4tZXhaT39muz31egCnkVsHpFBQN2jZUoPwS2LibqRSGSw82sBdgWUrjsCpm3WaqG",
  "key35": "5yZJ27MXrd5MpJDrzqLNmYybGdEEGwAZotGPTUpTs182XxjZVJ41XVNMEMffxtAHjAUSGiXEPGVqPEPthQdysReB",
  "key36": "4EYMB6ad29Czodnr91kiBkdeDmZeXV3R7E3VcNj17MRz8Lj2EgNtH5fnDKrEE9tGVgAuSrEi54CuM4C6uujixKum",
  "key37": "63sD24AdyNXsDryUzSCnqyESAkbp75mvWMAoigCmf8hRhYvVjTsfv3tFwxH6xLQsUtCKxthCiynrWB4tTLNSHt6t",
  "key38": "4Qvz9ksKJpngs1fEy2faAjSa6yHjPmw1yo5ywBPf6NuwAHDVrpqj8rPJN6tP9UiEv7QwhFBmNmnp5b5ZKcL4JfWD",
  "key39": "4RpyfaKDDS5XnwPQ3qCjTD4Pudc3eHu9ganb216TWaJBct63Qyj5SBWnvyqWFHK6mHdwakSdaU9iHWuCbZ1H1HuD",
  "key40": "4ZMecoheLcbXrEXZEkDFUxoxaQED3JjfAiKhoduBJW8uVzpoZmcBcmLfHV3t6TCVA3SrGtdRDDknQrsLSK2q7iis",
  "key41": "SekAWBNHo4Dq7neTvYKUHtUaUN9zHBp54ZV3PY9brc7xeKUHG2kDFyLdeZuwaV9diBxYMndZvYT4gCdL6nCr1Nv",
  "key42": "5j9URrE8BGDh9mz5WPf5GAqg1jSqXqip7FjKuFNzJWgKxW6BhPN7HA2pMq9pbM4AS21DnY7TL4A6v3Cwc1aPHg86",
  "key43": "rCxpTCHwK47p1r57f8LzBWwYTJMcJHwnDBJ6TE8ddwKEqzNHbheSvDAbphocNuEY52SoNCL4eS2KStzqqbxy7A6",
  "key44": "h96UzW6c2Ko47HG6vqCx2ewirTFHffr8LCLSdnkV8kTwAsdajLHtRFZauGWu1aVjd74wKh8ETXnkHtyZzXMbUSW"
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
