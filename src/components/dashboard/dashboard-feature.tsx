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
    "4j5C15pUf4BKXoL5Fm71bUaY4wsMzzaMKqw6g59QJtGcLT8RAq4JZP3tnHP8KZWiudbWKLaZdpTPXKbsgcd4iMKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mxE2j4VafsNhSCMZYc9vs45rL4nePpfJGRAmz7HHXcoT9LATVbnSp36sdUE9sHwmqdUt9f1kGEaiwaJ6h8hhXDA",
  "key1": "5jNdFSSwoHVqsL52qwGdkhr1QPLf2vMzfxigfu6afd3vBYcm1EkiAryqWA5jq4p83fvPiPMJcE6eGNtfLjXvWHRu",
  "key2": "5ANPvFX8AqwoFQ39S2BtRZi49Kp89gMgoJmocSf3mftux8uYvTPVECiEQxKV7JYiPJStYbF4NX9Z6hsMBrXb3hs4",
  "key3": "3nuciMnRiVP6ki9KPEAgEU2vkohdUw5ZhRH5KL1nFiGAe2Ue3HauQb7wE8rpKUJ24ryJEA4ek6o74ZDmfpNrXYVn",
  "key4": "7m8RdZ3JbPCVxRq2bitu4qUrDNpFxu6yY894FSfu5ojSPxjN2rmCoBdLPYEZuszpNtgEBVQaBjRvu5XQrF4sTrS",
  "key5": "4ThU5de9hbP2NK2ubAdUaggEcpbjdKFsz5N8y3mHyqcDefDcui9mko1FppGYaudwjWvfDwTfFE5YvUvHuwF9pfzg",
  "key6": "5pdm4KqhZh1nG8TXCyE91hQT4pqhrisZoN17diG7uf9tDNzBi2bBPNEuVrYW2S2z2r3xE1oFASnF39FVS6B9dd9b",
  "key7": "2UCKRxokgq5yRz4hG7zxApgo1tnjkm1C85J2quqUiQDF371cEEreMpzYfC3GVzN3PRSE5W5AcRTgj4YBgfiknbVr",
  "key8": "2Pp4wLJvb81HuVKjQ3YkFPZRuJ7nbHVAp9SEhFGYFnFaABzmrDJxoVs4ypUtBMPNYmqAwsYU3TrHDhsJFF9RTFXb",
  "key9": "4kbEzDpQFHXWy3vehsHi3fgAdihYAsKU32gx5saXuk32s7sGyGVdfxscQHNBvAP2cXqSCp7Grog9btTZp5i9n7kg",
  "key10": "5Ur6qByAZJirFV15cuuKw2YTtSRJgvL64vEp3v3xgvTFX14khHP1zDZBjV2RoETfMzfysM54bnD3GowECs2uYBXP",
  "key11": "3FYRk6X15WKEfaFnGjaC5ZQfBxJpeEFkscEiMjwadKdKhbD6DnJMDo4bh2XHnzGZFgrb1nsHeH1eb5hasQTQUwDy",
  "key12": "43LgsLms1Ph1Wgw1A3Vb3bDfLhgkjpUggbUPmyrG53HkwRBYpFP3z9wJ1zXFGZ7WLCojPFXX3WXee3TnJ5LcJabh",
  "key13": "3wzrVveRg9pHaNvjt4ZU5HGSgHwmgdJafyHhiG4fnfBhCsvdNTJD4fHY8vmmuZzTbRxu3D2KShzveq9gdPzYwj3i",
  "key14": "1TTtWUugH5oM43Ln1Qr3LQUmp58skUR3brb8A8biJXKYWzY4Y9gmry4hSDucpMtCwVEGTwEyhuyB49TZkbWRHDs",
  "key15": "2rYatsuNVAEJaMuxSPTvbwuF8uiQXe3t4n9VQcFuKwCjYuM7Vs5H5XpBCJimX1dhdoDnJWWCwp53zLgNju2W6fbJ",
  "key16": "5tLT97epRfRnehxA5JYmrjZ2Rau7bTt2TDB1Kx1dUQM2t5dmr3VV1G1thFQpTvE2UpaXz5LSDqpyhdvsip48d7HN",
  "key17": "5JZU9WfmaMerzgMUEZZaU31NiJrw8vBDEZ4Dv8pNUfJW6Y6HYvzRbp41Q1HNi5bGnjbae2sGXvq5VJDpiHSuCRLX",
  "key18": "4VWo6s3RKDwsww5cApQV1r38pbVppDTaHdCY1T1Gos57Wfv1Czg8PqGQSXSoDVAaj5m5RfPWMv8PD5eKSSAxtcZT",
  "key19": "2vTp7D2QQb1ohtqRsHWcF7jcNnBcjQrhd3NisMEGwBovVuTYaZa7GzyeqWNsWHrqksiZ2KmQ4dETCeokWHQitavp",
  "key20": "c2UyAQWhMgQSnAU2kgtZehVCQYpHrU3vp6gvM7ZsCvuCzy22sGpDJqT8Uf2x2CsZFBmZe9LUFCDw7ZJ54R3YtW4",
  "key21": "2ZH6bqTba9gGc9183PR7L3h8qAGr6EQZB6Gde7wpaSrK8qcKxRGQMrjtpfVUggS39GXW5MdJeiKxL22y6L5FWjas",
  "key22": "4nZNrrd5hG2KH3DCUSCtjLbsGwp8ja475aMHLWfrZ2t42AEJPnjkBKKSQQkNYSvHanpdyi1xzurJsAZeCN788FEc",
  "key23": "32juFfduggAyq3MjJ5e4j25T8AZU93WnpTG1RmtStTgDASkLn7R8PDX56VaHAAbKwjxjdRy8QicrTq6JXsnMDgxS",
  "key24": "BNbk8dr2YFE55zKNEwN3NC1NfLXyFxWXknCa5GnrGKLRuJcQhqWc6AED2Zsv2qdC1XQ263GZEP7ZQbKD18VN7U9",
  "key25": "vgyYbKrLEmcxJhbTQEwRmGCd3t5YzDGqSQMN1eo5W3poRxFGCqfgvDrVvaagkn4ChdrTjT9ejf3ynuG3Y3xBHZE",
  "key26": "3G7TBnHsbyzsHvSZfzGaeDExu6xbr6L1wRXxE7pWDMedWdMHJJyPAXgRNne5Tdw3XpPGW9tehLf4mgRSpWwMbCpx",
  "key27": "36z2tzUyFtmcvY1kNLExwDEcfkiq8KfcMnyh7NfbLbdUFgdLWFjNZHgVcobyjcE2yNvZAEsbGMpVgBzGUF8S1v9E",
  "key28": "o4FXYQbkkaghLy7Ax4hZn2YmwRrG658T46MQi3XyZAStqd4LRYTY5igLUPtynsdiwvqS7AXMqht6hQXugq9ieco",
  "key29": "rzqfdGFDV3V1htxfj82vhAc5dcBGjQbMPS5pDjvjTWHgkGitNEq2dXyPJQLr8RAUAtSAnjRoYyTKjuPLsnN5V7a",
  "key30": "3GNkze2Lkjtmd1Sw2dyoVNxejkmWcJTDSmaayEbF2sh7HVZpuk9iSZj7EpgD7VMqJAmFjNBxFqjmuvZ7WQCfYsVo",
  "key31": "5yDLnbcv7yTedUydcQq5nmtbQXBBeJdKPFT2oZDXXQpYTFovVrzSmMJjLeFjCcDefZ71u9t1esbQAbXCKEnRr1uV",
  "key32": "4djrwPDvPMnUFpJJjhkjF2LFd7iJB62KDsrCCyo7nZVRidAJeqUe9nGpwXkHDFos1jDAb9gd265qsX2pWMCQZAbN",
  "key33": "EFcAydjiU7SAoPfRx9i3yakUZNiW5mQswXU3XYiY7o6fSGjQMBPut48jrnueeu9iwpjMkhkQ1ECtTLm92cfTgET",
  "key34": "4qMa3KP5Zs3RrGxYg7F1FEfr3JSnyHkMq5fZoRWWTMz6ZbSkYadibEpwqYxTbiRGoSpCutnZCpm64ERWUYzYPvt6",
  "key35": "5iVFdb8ykd12tWUxatPVaG68mnn9Ra9CmBfkUv5sEDyL52gXPpVBeWgRksPsN18pR5RupKqoSp9Sw9SH3qsMR8RL",
  "key36": "Ca57PzDn2WL5gpDt1q2vYZ7kVfcM6EFrCWxHYpbR1ESMYYWsUZ59rMa6WcsBbXf5PQ36wHnnYeD97eCsr5BsXsu",
  "key37": "2AnQJhF2adv1R5TTVWGfAApS541R9d5T5612SW41z4uJmvRCDB3x1og2ziimJpXbaNT3jAG1oE8RSxCqjrZhj73y",
  "key38": "2mTJ9mWEoLRbx9ekFRXavaVMiH2qaGYSRjwBsCXEpp2yfAPJLj768o3nQPdD67VLDjUMKCbUYqrHtLY26vm8wifV",
  "key39": "2KggyMTKQqDMjnWPo9zNVEwozkY2JMCenJS9iZnSLDio3bsct6NckAWg7TQK8cACs4qTyFG7CQL6mMvzyHCZnHXr",
  "key40": "2rPpQqaK2WixrkUTE8Gv2HTJTjgfseDfGUDiPcWkydLpZUQNvGKNZrvDKZUAWkZvRVebbdJ6kZQoZir1UhZnVFfR",
  "key41": "4WF9GZUQHNjgSHX9DojmX1CBXyajXH811Ug484oCVuzygniS2iPYokL55FW8ZiAqbMN2khk4ysYBSynZK7QsuGSa",
  "key42": "4oUm637YRFZP1SCYM7BiA9ts7PAXg9KAyi88TrdV3CJHvCbisKnBs6M7N2P3WJ6abC8bKC7zvTjT6LMi1gqAgzcr",
  "key43": "64vbJzQNZBGLjBiJMzEYU2AX7SM1N1sBVdcX5dQN98B8F9bZaKXfjhPh4sQWBg8bowDBnNoZYo9giwmd6u1r8ioX",
  "key44": "4zqUq5p3Xsxg7G2wc86K9KDTKu5aKtnDhh7QCo1NGtLZPWV8k2zfFHRiMxaxyPTFc8wLgRKSChfoH1oawNd2Zoqu",
  "key45": "P1KLAHngXGD2an1zDY8FetMqv8PcwDkrwWsZrtR2CBHCe6zPsAzj5J5P4RFPQoUVTVxJXM8rgLsNAFFxZJP1i1B",
  "key46": "5JGvSiWdnX3dLRbVbVzkoxzZcQ38q7kpuGioj9v8rLojZF4iivoE8g3kBZ74bDYR2kfTAsFyYJ68vrR3YpiD8Um1",
  "key47": "3SBm2pkffHQHT5mQVjVwiQpAmPudZdFZqAVrsSis6psUeWAhgpYTG5fQwuRPufRjHR3aAc6KyqTaMY4WGHGn28vy",
  "key48": "3CTB3PVXZqJq4v5bmud316ahaDD4pngiP98V7QndWxBZiTYUUzQTci1HHgqqHv48egeFFC458RZ5cTzx8JQekDmy"
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
