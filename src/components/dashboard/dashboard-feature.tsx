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
    "38sS8QjSkB64WVR9gXtQUVuS7xEdzSN8XiKk1Qt7XchvHzgW2WaZitzj3x241owCXFixiiGG6fP3CqAgdxJPjix2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39F8KV3EAagWZUzuYWZC61VojECtbq9GY2w1MXY7mRWwmNJ45bp5DrNWTa27uL8BPo81KGSfrDNVFefz4YLY3FrY",
  "key1": "4vfbQgRCw46ZqLzJvmSM1zRd2WhfVTem8gGB8gwaHBDQgortHGgP6dk5GnAbFFPohGLwhtMYJvjmzXBXyHQbxTqp",
  "key2": "5Yj6QrVxT5EokXZUf2NJqukGmBAazxtGkt9fNEPtBwPp1XLnZZ1HeMFpt8QiHsSBir8BuBk2xVrMBk1k4vsngtMc",
  "key3": "4J3zgwgHaRHKJxyoia1zxJk4ffUbUMGXr5QPBAFvWqXwU7Dykhirz2hULFPk1hRBa5ukbuC6MEWgJ3HdCKH3RcMr",
  "key4": "n11kXWH4972AoKxsGFhAWkz2xPdcP6n4ZCyUnWcV2wMTZU4cJw8pUq2g1B6ihC2p3Lr57MYR7z8umXimnMRV53c",
  "key5": "SCxKd77YNSnBrrk6RHAoS7qxD7f7izTUEn5Y9TFM7EGx4zccSWwqtZFY1PXKyDoqHxeYkebk6hAMRYm79axeNeH",
  "key6": "25d349b8HcuWcHm1CdKHPuwvMJWCEYNqNqATYijkK6BMEFnBRfCKALLcvpHWm7SH8t7Kuvo9VaQYRCCFLE6S1xpa",
  "key7": "ftrSUMNwWjxERWWVzta4Swi9UbmZcMzGu6L2fmFos4nP2vregPJSbSukumh5i196ipEozEwopkjy7RoafHtmamA",
  "key8": "42AWVbmKuaMAKadbCQ2Hkyb2eBzoAJWNbNtEv3875PGUcfLAifgTdV9VHmLYB5sZmqkQi6SRvjqmJem6cDMDnLPs",
  "key9": "48syUSup5ti6wSCnidGD3F2HawdUjxxJEZKp2Y1zEzt35c5HzNE9SoDf5vJ1oQ13zpH1xaxBgnEiu1Vt1VRMuPr8",
  "key10": "bm1kug6LkJAxC6yka7fcCBAF5xt3u6QXJg5kLpn3YWat35eBCvLbbjuvQWbYssg93tbHfgWWA74EFEvyxLo39p3",
  "key11": "5t2hc2BMcUK4aBoe3URPM3BTMiXC3F1yuRUkocTZf9au6N9Prf9zxhtEPghJUiX77XxBVcqJkqkTCq7kgwp3t8sj",
  "key12": "2Wi7mEJitqSFP1bFosbyKxq1VSJjTc8af1Limmgva74ymmok5fQc6DQ1EvSWzZY1zDJMnDrbictdo4XBzHR667TQ",
  "key13": "37Eg1SVJuxtZRCUp9sKN6DYScf3yhty5W4nANxTFqsuEHeyRZPLyJ92pP6xCGz4qQJPi3q39Bp2mRZHgBoyv5Ewj",
  "key14": "25452yLZruAidCbjQJ89DSgjVH8kCnFaM1FE9ZrnTHM1PxkckSRYPorStLqfv18oxqPLHe4DTbS87vH1Gj4vbQNu",
  "key15": "3fwS8PSMGG8PYWePs5ciSZpPjxRH5KDNUbyZ1V2AQMbX8GtY8K58VR2HJY7kGi3NpYGJF4T2irJvoaBHuBWGopUD",
  "key16": "3yAfT8sBxFsQ7apsyAoBEuxpqkDuqr4r7XMbtkRr7FdrTqjnMAo7cNsobmPcnAJ377KPTXhgLe1f2A1SPsTNg8N4",
  "key17": "5NbcgUUwVXDhUERytxJ9Jmp1ufaQZo4d5VbvzcqarvWdDSNmELcwdNkDbCKhDA49HQfsv3MAhNZ7qBjMNs4aATVq",
  "key18": "3bgZ13AJ55pYteFiq556k6Skq9zAJsrMt3hMK9WFB5YTp815Xzw4wWeaZLzTs943YeAAjZ5PU7Z5k62cf8Xnqo5c",
  "key19": "AXRVT7zvvBDnCKfBvieiWC72uoRyiKtd518vrJ6uH9Pmc4ifF5GHPLUC8q5vLpftUQcLhUBsqH4HSVtFzp1yBfT",
  "key20": "45xpSG4esbCqS4FgAP49zLrBat3heijFKezTqVE5yrcGKJZG1mz1eFqF2YCgH8JzgiMvwocbCDUpKFq84pU1aaSR",
  "key21": "87e28aGNM2ufbGP43HttCUXY2w2keyzPenHHyp6Zk9NjEkUP4epPNzs1EakRCyymk1sMcSXwbLg9WGqW8tL9vYe",
  "key22": "3tR6sJaNoUCE8gKjEdjYzJHJMEPW7DRqeicMnPhitnLXzYescFDjH4dN3vTSf5oAWraCNPbXsm5NRftzTnLiBPVN",
  "key23": "2VAg1PqeaALxGKkkQDQNpsXkmrNJiPUMVhqLJYmzhoNfuDaeekMPbyD7GUfbMYsmGN6Uf7bArNtwAYaiorZoGrWK",
  "key24": "3C8UNCxU1vhMqfL1ywj7y9ch9bpZUNA74xuudLKjTU7c89Eic56TgdcGet1fbMXtSBAbwKenFXZAn8xTKzCFqew2",
  "key25": "2e7aTdeB7MnzGEymBX4GdR5XJuCR7F4nDhFAWhixxQ56FyY6eX3bpPDBgoVXRWBMmHCdTyUqwGC1z9MPxpsqsbTs",
  "key26": "5Fh5RKqw3t3aqee4tfCC7bdJnQE1wTnLk3ELAuF5fQUgW7KEmbVSm3KRv3ira61KmSby9MkqYN8Mrbbt8mWKEXag",
  "key27": "4eQqawCbPXio7shir1TeyWAMcZ4YcdbQx247tKe4L2SVQrbziYCxMoZxzq51AKM2wiAMyz1fZq5VhCyoBsJdBEjv",
  "key28": "3thb2CfBkTUjFvme5Bw894FGyAG94GdnhNKEpkEJKn2FfUHVzpM1w5LSXWurDNTPCeLeuujxgVqmCM5Nbr8GyJ8A",
  "key29": "26WSKx1hVHc3x3M3QgDTZNkC6Z3eaUUrJEJXVSGMEUWj7VXqJX5d7caPue5BtnZdhniXNibbCyhqNs8EmuQv6mpM",
  "key30": "pKg1jJZbn4vwEkmZrCXMwVD5aE5ZsmD2PQuYGZbd7N5DwVmYamXYfGHbzKc5hvvMbsN8XujGqtE6RBQWKspQnoQ",
  "key31": "4RVHvdG2xhwHHRJKvn9DvoGebc3Gn2LmoSDqGNfNHZroAZigJTSaeGJnAVdb7oSTnyKFhbMfrzEPyfjtoe29XWuL",
  "key32": "3tzLu5UaSA9viXTKXsFChBAta8T5s1TgyXQeTJYGuqZNfNeBz3c8dJzGpxbKkP8sSYs7CV7695EnurRuvzABWfV1",
  "key33": "5Wah9bxbmSGNFEc4gAE7KpBpjXHdryXbht1HnSsYDjR7Y1zyFDb6iDx3mJbU7x4bzNvivZbwXX3Ha6beHroSfAsm",
  "key34": "3qmuVvU41GsVEGPuSs3BWzVonqNX25wG3RPpnQPW2r97Kr85QHX7cVXyvSWizZe6HCpiAVTFN5Zw4s89jdssxnek",
  "key35": "KdCMv1anEQVfTvs3aJsU8qs3LSfqvBwiUnzF19AsctRp7pNRUSjv42v8tZQhVG41gJep5KDpuYWEVuPZvi3Jiom",
  "key36": "8RoD6gr11aVD6xKmGh6bQyznUz5A8pmqU4qELha6uvXoZ677YxGDGSYPV5nmjnwf34jxGFPJgivcwmhT1G9fwq3",
  "key37": "5LbvYDB9TFn8yutFyBP2FNLE74DVdaZ2VzDRAMzAYNEdEg4scLeudyog3vVgYpGMYtbxC1Q4PSF7oFZcqYdMAER2",
  "key38": "35eXKxhjPfw7jXGC1c7XJRrhAReWuXz2ZZPfFoFPeEVFn1A5srGknutRP34RfKDKStwtwH7YfSZmh1rCC36f6ejE"
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
