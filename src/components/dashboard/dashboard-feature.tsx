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
    "5DcHboQJ5ZbJGscrXx6fKpCgCFYvP9M93nFLU6JLZCAC5HNfYQePbaaRuqEF6WFETLjCMPDJzaL2N7DxdekdN7GQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45bwkBi9JfwUHxPexuJvx4jb8LVNzFVbjhpAGJ6N4cgHJjrFYMUzBg4UwzPhvWkcifZeQB82Xp5r1eEqmtZSozD6",
  "key1": "LTJ6i16nXDUgeSowkxRtVr9zSgjJgQ9akMPGYftArKGTU4J8TDCFxRzNV4LoP7B9pzZJLVC9psgjfVGk3XSP7Mr",
  "key2": "3TvZnK9nPS6xSHmAVmYJmG6vQq8PH9yKBc1hxeJjsb4upmFjTW4eHiZaiuB3fNHaKVDLLYFBMGdbrd1zjTRPntzF",
  "key3": "2UtMs3bJSjWkHbkvzjgryXJvc6BxWXSKoDiuexwDv2m6KJzJ8kBgWadgTHgyEYm4sHrZooKCzR9j2ioMH4NYQWfP",
  "key4": "sYFNgiJfoUiK5pdr1Ge66hy89jdEAzUrHbBuWMZoeVS1Xr42UsCzKyGjPU6N2s5EdX6izkPdsfdPj9oEdxtdCFN",
  "key5": "3Uoov7owMvdr3m8DeVguwdUuVNXn3QAzAVNiwNEqdHJ5bNpnjTZFgSddwgprhnTBtoLZM3f8ZCeupbbfa5v3TiuA",
  "key6": "5X4D8wJTe525myzAna4sECnYYRtHtaHtVHjxZzSi2mGUNG6JYMho18zJbA7SkQ27bkFCpwM65ULypndBESjouf78",
  "key7": "3i656BTs84981sVCgssXP7hRKMfpztRsw9dK4Sv5dkmJ6QQRvR2fJNvJ7hpVPGp68ahAVrwL5kRBhYwec1dkUf7P",
  "key8": "2J9QgdctmEBL3TEhzfeVNYSMYxDxRgDzbkSHzzK1AgLYQjFHHvwzCDg46SWmtYNEuyJ1MTirHbYujxe2jmKaQmhA",
  "key9": "2X7MQKnJa3J6eHkfPtCpnibr61GPHd2qHo2ejekgFdBAqdgmXofMyZGtSsFGHgxCpW7FXMst5ayoXH7CjpCx6iLz",
  "key10": "2GccpixQhW6HJsMKb31x6MEWUNaMACDDttLNzSeaRL9jJm33p6vytqxWSmdYjaGTTmeFGLpXBQrb7qABjEdMDizJ",
  "key11": "3yKDAT68Ez1jjDfm94sMPy3JMF42D2Ke2vykUfDVDT9vRn2vqRKgkfFZyY9u865H2Fdhfxr8DQ1eTs3Hn7iqj71A",
  "key12": "5S1qSsTcWFzBX2mUgGxjAVpwt2Q5EcDwoSX6RYPwSaUyFaxks792siPhg2TXYuaJthr4SSzr7dUmv2eRsaL2vnkV",
  "key13": "HhAMDSDWCxJKPXJLCwSQVztuh49QqRm8g95xRkknfe9yG6FMtvoBCkUHFVZqAxCs2fsbSxKx8Bf9jFPvkqEahtd",
  "key14": "9vib2xMXXdNsuE8BBZrDgFquSRXhBs51LZkWXzRfyrTRT9QBmy2Kcfx3c17vMsjqU8N8mqvTsmwE5Fsr5X1BeWW",
  "key15": "27x229n3TTtXKLrBpnoYvWJAzELoi9L2NXVgfTgkvQZSv1dSakJgUCJyoxmGxWbptmAH7wZioDR5NJoqrKGRPajJ",
  "key16": "4honYNhYPYDmEcUEoCX95H5HjcJnXZVBohwM2xgVfeZM4g5Do4RYSHzYPWnU8BJGMEW3fkxcRCejUjNxYPZFFzUb",
  "key17": "3ZNcMenCv4HJPzM7GZpU3XaDEQaoYVq41yomYjUFsAxPXf9ho8F6QAiUNGSyk9r62BkEgC1m1ziasSNMnD4uSzeW",
  "key18": "21QZZoPrhQaEdDyiDNKKfvqPHAfAbjiMQGYguJU6hfTvWh6sSQ5CQYohSS3uk3jD4rqaHBjuJd6kCRaoFMyusBrQ",
  "key19": "yYaT9oCzcUCcVXotdBLe2JsbG1UDxmqE6GAUaa2W2DSMyJd3od3ekjyyBBkRcXduxN4zuPcjYfky6rjEpzsSvmK",
  "key20": "3H9gNzEVojeCuGYz6UgQtzYvRcJks8XJybqnf9U3gg2DwYAftyx1f5buDTL45BQiycMv4roN7JxeRKNqF2vLCphP",
  "key21": "3qv3rfmQZUxmPMgYtV7WBkeYygKCAp8DTN9UEuNR5ALjN5oqCg3jN2sH7rdVhm2M9EAUPoSMs6wEzp6PRLgTPtDp",
  "key22": "5B68JmAKX1UVAsdXW4ryLbFpqYyfLFRwn8S3RepnmXTj1fN7L5Poh4gQAtHF5PA7gcBPJMJSMw4mPJSNpYSFVt8Q",
  "key23": "4gd8yuJtS4eR12pZ4xWKE9UxzKLEbpY47xVH3eUMRrAuiDN9kgvh8E5qcM175Wsj5xEAwtaS49RAaSYmFeqa3SzU",
  "key24": "4F9hC9ad9JtkJN5cQESc7bJaPmeduUBXxaAf7yXvu7xiyYdWMsFCfA3Mcjjv1GtbiCphxBckN9v5uPZAk8JkriGj",
  "key25": "3DCRPCa7CqGiT6MgoJu3VZgT6YdpYFvfpSNWYSzbkRcVi8D3o8vD64fMa589zXpqeDgDjNnQ2JxGS29WWPGNNkmu",
  "key26": "3Nbyk6q6h6CfuFabEiYpXnsRo7URy9hLhuwzwkoP72J8H55AuXRvSPYsbPvTEy2SLixqMgUhKLVQfnD8QU1eytcF",
  "key27": "622rqyQn25xobNxmSskmDSZCZuKhsHqS49ktqzx1Hn4XiKK3vb4MTdRSVyzvKmfnSoaduTamiSWyNsoY3z39ZJCJ",
  "key28": "3YD8rhnoLC8kY1zutrM3Bjx3PD54KNz7JGKNF3GHbczmX1EWrMHjk6QwqY1asLUiFESGkpdHiRcP6Zj7P3eiKxDv",
  "key29": "3pBj2zCWEWS3Ti29vesf7S7tA554n9uTbmjGKa9cxxCd9tvUy3uFRXFnhiTmpwhmYNjAwRJQ1Aua3yBk3x8Hsu7P",
  "key30": "56yEe5DsaQW3CVXBhZ8ZdFknUUg8aHLD5665ULZLZVZPJEs99KSz6RgEMh5kdhfNS3g2hBqak1uDNmnrhiWbV2Td",
  "key31": "3HYoNC6oFhWEpN9UkZ3X2GJs7NBNtX53hAkb3EBAtwTSXPAijVfRTzM8UFCeYrELaH3zYwKnUW1SPytBAQ3YaYEc",
  "key32": "3seWNBYraKEWPRmaJ2xCL6KVZ6Cv4YRWWLKPYSNSm1viUgtaTEG9qJtxukEkLqGN7y9pU1wXre2XUYwkevZkADuA",
  "key33": "5Y5jjqp6AdxVsSZ63xCPssZmXzbsH86qDiKBEn6gGjcu3mFFPgYzY8SAELpFvFSdxvPFdapCvgUvXrkJ8CUuwBpR",
  "key34": "59JfYKE1oeKwypqLKyJBdxwU7TBwCusH7KHFvu6Ld1Xs83CF96fYHG4CHzaFTiKAzMZbp63uLhKtWAEGK1MQcPgg",
  "key35": "5GRd94xsfYL5J4sH2NntRk7kpZitdxLnSozXMQYLMydsWvF7Vq28zGSuKyFAuWr6SqqGPpDEv5GsGRGwah7bFdip",
  "key36": "2tk4F3xuiipeS47G3eCCQ1d1iehWuxiJMbSke5EpAdrBSLbcdJ3aZRTUvFzKfPKLnrrPM52GxTtni1MgkUNbcf4k",
  "key37": "5g5CTkoVR9eNYtijFSxsjjecsKuVaH5rdFXkeUjNTLfgqeNxkfLbnEaJK6kGfVJjBLHMQUiAe78rnyGFeFSJT5Sv",
  "key38": "5yt8S5dE12BnrENtAhxJbP4nXmoXgYLjT2K2E7WizzE8U5oyJWkG1EtkixBZhHMPiNe6aKRfT4VDHWjkWf2Z6jKS",
  "key39": "2LVdFp5NX1sGAVhmUe6CQg1MfmFETd1rxZpAzDALqw11Z6LCx66B7ZEpJZcbevuEWM23GC57GA4NnxVEwuV7QSFy",
  "key40": "3qGuFBixybu2R96TPhj8n2B3NQEkuBtHnu51QKkARyETHiT76AczCFLkP6K4krBzDsEp7Rwo9PozHhwMgH7ien9p",
  "key41": "3XBjnWx1j7Cp4i2QuF84GPGGTtBQbLux9PvWc4yd61rrp8mxfdRjDFYWL5jNpXCJEETsKav4nBV8ACw61A4Fa7R",
  "key42": "2uZbommsLCNfuvrHT5LvVcwztPWNk6J1mNNvLMA4x7uuzWF1Fsfs12HsRQP27h4S6nfNagVKaCQneZbyvZgN2gE9",
  "key43": "58VcT8MNfoKQYXnU6eygLGHT2aQssRMNx3uVAQWFFxEctQVHKnbBgQLMDXPhqYYZTeseN1xH739ghLZGa1K4HseF",
  "key44": "2FXeJk5Qbzr1gFMzPD3ZsQz1Z1uvxBU6N3DJY1RvifaZHJaM6ztTG9xNHhsNBcGHxD9hurbdjn7G9VVCWFu8eRhi",
  "key45": "2WHKuiZX1nyhnZVAN58QxQQoVgVU1FDju1r241Pnmxvw5Jjofm88sf3q5u2a6RGx9WUoCFgh9YFsejssemwnXvwW",
  "key46": "4uscoeEAGdd1J9ewfW9os4yMaCCVUMtEcXVEHRcaxVQ5PCGbmkYKgEZc8YN2i4gJ1SKqJZ1tYfaHcgCLopxVZnbN",
  "key47": "vuhmf6i8qH957t5WdsC8sEH3aoD7Rx95cZXBQD5gaqikrm6r6a4GmwAdzSS47qgzhSLfwHCGeCyHpXbj9MUMJyG"
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
