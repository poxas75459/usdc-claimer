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
    "vXQFwfra1cEPPCyNbxhQ4r1n2Sqa9Qk6i6abZQQhTeqxGShwjSLAvC9iZ1h1xcHH3R5M9z6jTeVScDNefwPPy6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r86EYy4qpQJJRo4F9s2aWhGCuhoCWJySFXicxgfGJHFfuCdfHnBtJRo3AdJRXhzyhZLJ5P51wquRQ3P6vEvGPGF",
  "key1": "4UcKCP4NxgZ59Db1EQ5VY8YnuxAWZtzrZQXTaxkXeUnPdWmUz2WeSwPSP2BuayPojmM6L35yuVxkuwyT1Sk5v9LV",
  "key2": "4bFrJ6xeoF9EkajmqcQzaJzgsn6ucKbxeZNUSx916cwg1m9UpUEgmDpWht9EHc3YVf69NVGwJ5Bq1ybRU8BzSxpK",
  "key3": "5dXAhPE2WN3cLwt8GEp6D3EZzHKfnqwZ8LA8YFZnMcuhGifCc7tQDmkSqUEdgjYamDYNb4Qx6sKaXMz86DihT2Fy",
  "key4": "66RjuBifhCZjksxQN5n5o7jvLasQcAhqqbjs9AXe7kp1VYxRMAgd4u7a5fGrbXVej2pLMEeHDX5NSjJXi29BWdE3",
  "key5": "3kcwCXdFXbXqnu8v6xvLgis9HVKmmavTmiKFRhHoN5iqrkpKQgciQjcPfzWoLAQZTXkbcfus1UTRhfenLTqCQdPU",
  "key6": "3wUK3MXytuWsPQVVTbFL67RQP4MVg7fqBqDFnH2SQNJLmAadetyyKYU3sQr3EnPGv85pmqqt39f8CLAVNtVHDAVc",
  "key7": "47GqSqyfC5KNrCaubFZrNqTchtGKg2ugcfLkQAGaQZCTMvZs6BXB4E8WHknwMFkDxgHxFAnpGbW2KgfpbdurTFTP",
  "key8": "5UsLH84GPmErciNkBPyt3wA2HjMDeR5AqgS21eabSTqa92nMSTf98yuEjV77D9Newmer5jNoBnX4ntmJXtWsLwu4",
  "key9": "4UwSVgM1jLrQ1juU11cearVcAoMdtEVDbQoZJqfvUDhKKfGu66EsvDuZ3VAthnbEhFTSccq1zx4ziHecbvx8Q3Gk",
  "key10": "38D4HLz8N6e9esLXnHC4ebenVbnmFfkF6MT1Pe6vME9FydBqZqoyvLdub4ekf6Y69WJnkeP15iMQXD9BygnZ44x2",
  "key11": "3ucS6y4yJLu1RU8Uz2pFM73bA47hKcEEybkugHb5J7AQqe2Y2hSgVruiupbrnFknp8QppUEzbAG43hFfpUJE1ozb",
  "key12": "4yAdpn96rMh6ZC8BZTebSXuaTqnr4nG6WpiqMD9Ggzv2dzF5vTcZcowKB8igaoVM9YxAL1hsovCXT2nH3CdWojE4",
  "key13": "5Em29dnXAeGkbAjMxyxtPeVRPYeCsgggqr1mkjeLFMM3H1nsCrv6qeAXFrSAGwXXVFaYanJjhMEm2ogiVvMFYGMN",
  "key14": "3RNbv2ywVXzhacr1xypTvHVGN1k9Nf1PkTwcMpbpAxx1D8DUVXL4WzVTubkMDoQrAHu5QKAxW2y1Dw9gjC2BDSpy",
  "key15": "2rfWKLdcW8Wi6ejQMTGGwcGMrTzfpkDTgP2ryXR1pmQVfkYgrg3V9LF2irNh5uNgcpvyNWCGLdJeWk2sor23LV1v",
  "key16": "62dftcZKwH6mvTUWiXzZ723EUTHEFF6K8ydYK1BKuAAd37Skz8NP9z7hZHQzMt7Jh1UuRXxowpbhVdD37NeJ2PNf",
  "key17": "4kackUAtqJzNnToZu8o4Cy5G6xSxamph2qmVxtm6EPHLzUWKQQsEYXhjnZNGBrEbjiKgMXAqnCAAY2KMBNWCjfB7",
  "key18": "3NRN5VjtzeLEwcw8UCMSZuaKw3PENgGffMjJSXrgyuS7S9Gh3jYvmDNAdDFiF2iHo4PF7DzYvisMT2Vw2BhceKQg",
  "key19": "4DTjDk8GV7CaVR6oDCk1qZkuNdYC2pSY4FpjahsBBJ8Vck8TwuZ2dN26tvxRbyLSiBPtLHq4ikvVLD6tmnKUy9Bh",
  "key20": "22sc5ecLYyTgREBM6jHQk4meKVupoRfdBv7r3swZDWgzVY4RFY4SHCMDCJ6Mr2aCUUQQQtgSKsLbwVXhMoxfWSVL",
  "key21": "3CQEZeoDPUPByqZKhJHqwHhvNCazrQraiTJm22eYjXNh1rHpAwVbX9cSSkdvDXov2q6EGcr6KVTEbwex1px3YTHS",
  "key22": "3VJ2B6tyEemeDNc5z98WZ3qzdtZzmM154tJbnB2vd3BFHvPDPdgEJDtW9uy3Bjke5SUtehY9mzL9TdQfr5UUDYA4",
  "key23": "3yibasE9WF9qQcZYGcozo6jXL6XNrLGZh1yH3CNjVAyy5UWYbQarmEQEYjjdBqjoMLN8JmhaMLuF4p4WzjzBRf3f",
  "key24": "dWRA3J35RR9mLjYY15ci26nYLehCKiv2dTv5mDZ4oyLYnfaRxugM3ZKq11JTiTA1d5pyYBWC3Vbur7f8XqKD8Wh",
  "key25": "57aTsvemZvY6VDbaogVSAFRE2gowfBVNk5EtYs9zTkBc5diQ3GEvkNossLSGkWuQq2BVFXaemMMNB9JWvoSq9v4C",
  "key26": "4zgsLKb5HBRmVprXCrZfetcM23azDg6rpJFCh9xDuqq2GKnbhEGmEx7Pu3eUjsHeVYMWe5siLgrdBHzN1586qHRD",
  "key27": "4DxiRY1GeN4zipKc3u3G1QRsTmjeruZwF3YrXxuJVoVJE7EVJGU4o5jhkW6hcvRZPiprh8SZ7DDiuXS7JADVWKct",
  "key28": "47FBxxYWkEgvtcDonqN5GQ8FMH8hf9E22dScnFSMDcdPmxwbqgjBfHTqPmBvqyZBb7tSNKCzHfT63AcW32XEPiaE",
  "key29": "5aWioQmSXSiotGuNMTt1ATY6t5pDrDfzd2aCsLnv5kFBPPXa5X8yGcxk5wzYZuZ4Wv8hj4JuWUjYqpuobgXF8zTx",
  "key30": "4MfgYn959Cmoz3GhAYuXqMBFqreovRM5GwvVt1zDAd2D41df8xL4SBsWdeLdUx6qK2FeFS9qqkfR7zm5tX57sL9x",
  "key31": "369WWxjEf742nvpdXA2NYtT4k29TszAAE8y7uSfUQaBtMPM5Rbo4NpDpa2koATbGStk3CxhdmHSWm3QqTrPwSLEz",
  "key32": "3s2j347RpecnY7kx7HhU9BXJduwbqTSLx4BDyvcA7Hwo9tMsLwKeoubQi2JSNYBYJ8TTyuEtbx8Cdb4SyoWyNEK8",
  "key33": "3HqDGsjQEb6GnFEgqdtQrhy21TxuHt5Pijt2kLJtfp96gvs9WeosWgNfi3avKT1ccBiCbcXQkr18yJ6D3avoSd5a",
  "key34": "5goBfFnrrWTrmNipFfL3yaGDYxWt8sD4iWNVKUkD48fqGk3yGDMYWTnxzNui76ixjiQLjSxvJKM1PrdJrpyUCfuf",
  "key35": "sXUwGbbG6kFtuDwdZGKKDKfsCBXdTQREkysCKXhARpyxNxm3E3vRHJiRw9KXC89oukHyN7cb3jVp7CnRsJo9Cxh",
  "key36": "476s1M9szyVmUxn5HtkTJF4dPzWpbaENBaVYFUic2jZ2CETiFkpJQJWjiMmJ9uVtAnieTgVqeVbmuncyFRDm4Qmk",
  "key37": "2Jg7dhSr7zJQAiCqJBXMYFPBJk5Fy6hLWP3ve5cPWtFaPsr8uDng7MxZtha4JkfA1AKjeEYVfFEtbJfkSfhQq3RB",
  "key38": "3VqsNdTztgBG2ficYcGDSXqTsfRpoQh9xvTMajGe3ct8q8eujDKfy3MxUiUsUz1mXSVvG5qgr5N8Eym6ETba5WW3",
  "key39": "2D2pTLFABj31FYGhsZs4VSwUBPACbzhHZ8WUsEAc2EdJC1Y1oB9A6eeWRPxS72aMYwraCUbLT1cRUoS4FPbRE9yr",
  "key40": "5JunDx75moXVcGrDWE7Gwa8cu1g76ni97mUxSUwqamwCQRnbULYVYCQxQT8x4jkg16wxthqvY8kwdNG5pZ15QUD2"
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
