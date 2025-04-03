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
    "29vVC1dRB1ycU1SnUzW4NHCJq2kW6wWcP18iHLGZ7ttT2wEBHiKBon2nCxvfHA4BaEncvwkZkCxvwbmfzU4YsVXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "URrRqtwB25Km8DfiscmSAUwLPrTHgPQVCkZZ9MvjkMQKFbdJEK9CHMac9pMWu2caYB6VcspBi3T9pKmP42DDWxY",
  "key1": "28VwhckfqDm9jkSBE2sdQNrePEitQnfir1tWk7sJFdhjJnHF63EjD7hGkB1mpstMxdTNnnhsDqbUpizfP4tCcmMU",
  "key2": "4fhYditfzMnpHML6bDcDXPwYsYQPqTPwfwHMiuFL1rLhCdEtzAwvY6yGGNCxjXe13h5y2DaTANwnzo23MF8kvtaV",
  "key3": "4BNh6m7oRJ6GrqHAKZxrHkQ9Cs6nd6t4kvnu515ctTqrGVSWUDD1Rir2eX7ppHcKYAS6Ee4s4ac4dhjC2PchJ3rV",
  "key4": "2iyfke5r32uV5znebhKJFumCGPZp8eBtK8BvGyZ3pV2UsQyEaskHLG5dtDMDfYknG7Fmq26b8FUDdQE9zfoxBJyY",
  "key5": "4EVWgat5xz7kN9YecMYMS7DGFAdHGmEejbMJRCtFebdfBEShNNDsXG7vKQvoCageXxrWzhFdMzvfuofrGFKCQxLK",
  "key6": "dvPJn3HDPnYxm7ZHDdYCAHhtyjejCyCC4uD5RU5Av8zXKeDoM8b3hGBKW8AwaEZFwXPeCxvaNYJeGQGiZMoXc2R",
  "key7": "C4mvkmtbpUYHbj6rkUtiaH4eavBcEL9H4Kt92uxv7mQLX6VRWLnJQ8ygLummLkxCDve1kvkRAXBt2LqMiuwiRMH",
  "key8": "3fMhnjFWkjGz7ryy1X64H2QZfQTmZC9ajP9cR96N1Mbsn2eJtCjv2yxBDhf6YXGMGKgCkruM32Vq8sXuJ65obcrT",
  "key9": "55SnErvekF5wnS7nBBK7EkqbbfysdDu5T1mrKnkMEP1brD7wWHXjA6RU73LvbwRCsgGZ1Gice8D3JFjuwXmf4yaN",
  "key10": "bPafTzv8ANwAwJRTC1frSKHVsUuGMfnrW3e5Aq4nRQmgHYKQELcRWsK8wyLiGmVPzSQ5B1o6LR8EyL6d8FadULH",
  "key11": "4EKU1BKvcxpQ6ArPzDekihaSxJgJvMbwuJbNKqwcu3v6KqN5Tb47GVVNw88mn9h8eLZmtmBbiSdFV3tvhG4jsyWW",
  "key12": "57YXs4vGHwgKmLykjC1RqkHNJ6BpZoL8yE9CyBbDhvUfkd5T5iosQ87eEBNHxJBii4ryj4ahsE2FbLbS67ApvsHX",
  "key13": "eW62bQr9nRiX9Sh2RvfdX9eX8sBPFbW5eCLFonvVJ2K4NHACrrQwgSMLV3oPAW4qYBnq7Acb5JrtQCxNvF79QjD",
  "key14": "3g4sESJM3NtjHr3yUoTc8LmhRHhQGVJ5xsV65E9B7MKnLb6UStoGKuz4juj4jU5ZJpUhMpNgtiByWC2mcv7c4g3H",
  "key15": "58KNCEP9CW4WaTC9gqfuLcatoi8wmvsjZTQH8UoEfhpfaPCaitSDYtvjPurvuXccWkCpjzgHEdGKGjT2UGjXoS3k",
  "key16": "2b1wAUJxcuRLs5craFeyHWtDhe3zASqazXy48efoeanqMEJu8a8AYCKrb3YcGP14Dfu7kQDotAmACyEUViMguoZg",
  "key17": "36McGaFDEz541tKgmJMK4brBzARLGRaNHMZCuCpx98L1TyWcLYzUAQ5Z54Pxj3Nb3zEbEnARd15riwPFVZZ7iJj5",
  "key18": "5DCxAKxMgYDH7N9QwR6M8cAW5KCJo7nbuiaLp6G1cZXQ7Ph7taza8K1DDPrgHKB6T5fTcAmQVQpVkgZa1F1pExxu",
  "key19": "425Nt9GFhdTc9DgyvGVxcGv943awCxS5aA9mYNZ13nkqnjKUtNzSdUBeeJFAmT9kdcuoKYRPRipgSAD9qcRy6jFj",
  "key20": "XCjsWFAGWS4RwEDEkSpFdAe3Z85D4iEtho1wHA2V3UW7QgYh42DymHqN9rUFtwYUqSCT1RsUDovZ1j561X9gJfK",
  "key21": "u26wCxXArL75GF4m7eiB7fUZLJKfhRmz8cmQWUaC2wE8oJt13eTizFxZZnFxhKsAqswGScgw7xmYjAXaD6Ykk7h",
  "key22": "3BFaCyT4tacCCmKAT12Khrdv2zzpvSZM5KZnyd1o9PDDMJWf8GKJCEyWqitQt3b9AvbxDN2AbRJGoSK2h8BdnWB2",
  "key23": "68zmNa9qBT5oH2gQc6nsnyT2F9isEyRfJptjG2Vqo9jo3UjGM1Pe2hkQqBk6ngVNmvhXbPC6RYvZRDuLb1BxZKF",
  "key24": "4bXYSzF1DzQ3K8fjSKWkaKvjZ4MZH9wacwu37bbnfsbzSmEar9QTiHoRx4y1rX3WMMXpmXSUHwc4i9zXookfEhgA",
  "key25": "4UGCUwf2vVUSuVbxtqKhfjepvtrbHSPWVRoZqkUMdZRLbw96cfyNfVAWTxkM6rkGDJpyaQorPqmd6KfRdZvYCPfZ",
  "key26": "3zyj6vuffHQMsD7aJ2XpSz3MNJw1MUGN6uzj8QwmqqPa7vSstgERMKZiLzwHsxqfttoCQ8btEbbFCxNkfGvvPnfP",
  "key27": "5EaWECphnU9r3m6yaCYt5sS6ZKcDvmogAEoiXbUkDeKpudEpgJ9ttqg6MN25Sf43Mv8DWZVds496f7xqKWB1aSKf",
  "key28": "3V7Xjjpi24y8ZaJUm5sakcSz3otxAeE6RL8dTqZH41wfaqEuqcq5ejmH5udPUkKEfQoEGTBPy1gk58tU7h1cbP6k",
  "key29": "4CzRJFwaqngxwiAa1jgL3Wd1XydyNcmYb7hsEfCTg5Mi1Z8HDRTCYTCnxjR7sJoZgMBbsSDvptUwuZakiioze2tP",
  "key30": "qNQxgbMwTQ8MLzANoJcCEeSurqnSFQ5TBQ6NpF9fvRR8Mb91ud5GomSKP5ET1kGDWeAR2ZyyGdGuDbG1XXqtvBT",
  "key31": "8YDAg5784gWPExwtgyqLgCUihVHtMesJcPxRf3Ct8xd6igSHwXBuPQV3tRTVycLGVxVrLfr7RUKYD9znFx4k3Dt",
  "key32": "4Q8SEKgdXzCebaUvWJAvBjmJTXPDWRUieJy6xGwGnXzhCAvRiQosRASJP3thULwrXQmxPrq5RaYPBLj3A13zg5bK"
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
