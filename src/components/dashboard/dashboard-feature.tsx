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
    "TT1p1adU98e3G2Mn5ftwpMgbh3WRu72HCgGHE5u2NHmhoS1MH4tMcWYyesxUHk6oFAnNxPSkkVvHAzYY9c4jyR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bu67KKddMkKcG6pvdFg6rVLbFMKbjS8AYPGhPhmcSHJ9mUYwCS86PY8FDZd9V2BZkKx3pVH5SpfNuqggVbmAXok",
  "key1": "2R1eQBwxWdyBVcia4DCbEY7PkQAGuVg4HtJaNbitHVDc14UESe6Vc8fLW52EimMsnAw8uNYyH93vK6numztPZ7xA",
  "key2": "3ZU2sbzLSR3itiBssCvqKkhYeuS9E5Yr7gJu2xEtJ2pS7YryoDseBmkWoQ7TWS5hC6vitRtPZpWNM1xgZkQyAj6u",
  "key3": "652e8NogNeQVtV6BmLBoCde4TjACKofb3yK9F2dq99dTU7meJg1Ui5wYghNegpgUy6EcxnTjrUDazLyn5hxwK1hk",
  "key4": "f7bnsHxLCTQMexHrSvpMRxKWTiZEanjnqw6KGoqEDAsCPkcJjy29kPqchvagYaMCT1hqumwFWAcnBJ14x5QYskQ",
  "key5": "3PX2TezHFexC5xmf1sCLfTrmZErCoAXBbMr4Lbs4gdM283tCxc2NHJb1p28hpUy3fJsHgjcSH9kDwi9Spq7iKzw1",
  "key6": "5JVCZG6SMd1vgCfdhUQzCYB1sWvfEZoYRkY13KrbPVrS6sencfuGkuLvVVFiEnUT9ZrNA4dudtB5SHn6PUCmcwfh",
  "key7": "k6UgnVoLgQ6jXDCjjaVRVrNjuWziHsyXAeHtKNUGiGkCjzjbV2695XY3tWKo8VqG9UzFpgMZJ5GAUzRYPt3nxLb",
  "key8": "46j2vtUToQALE6VeRaa2ZthJwB9JV1kZh8GPPTR4C9zsqVCQfmWJh2yr3UwBtSv4fGjD4rLjQzinbePggo5KSsVg",
  "key9": "hL4j21qqNmsr8mneyYA9kPi3pe82kYkqp6GKYJNaTRPeoXUdJ9LtYRWQX5V5b6TsRDVy4TkEY9NkjJ5cEtekaf1",
  "key10": "4LzAwsqh1k4uhQJDc7cCot5hYQsDNMhdsSZB4VRLuWfK8mcZ7kL2oLzdrSiXNJVmzrS48G1CDqgfYSWmnWvJDVma",
  "key11": "mHHKt1pqUMivxjXrKJD8SGeuhqDysvYnSDeCdKwVonrYkJM1qp8YVnvUQyKRXMPu6gDwxNfqj7u8jMmcndQpbvc",
  "key12": "5Tj6tmcZyfoLaFzf2a5kFguAb3NrPRbr98Lm8Ugt9TR2A4ua8BzrWbDNjKokitRdJMLELStHcRLP68emo48sJUyi",
  "key13": "33JbQ4Qche1vxaaW4VTHpdShEGqaQT2jnxWDm7Yc1s9yMUXNTq6vUSRGYJSwDpNcnsTexvPhxJctEbU3CTXAypRE",
  "key14": "4fcjhkVBtq72LMpbQTjujuHcJteMA4VKCevQEy5Ktd3m5Y21QQfYMxxetssJikT8ngGeyicocSwd7Auw69asDfj1",
  "key15": "y6SV6PEU2vcpzUJVqvounsLr86TUtnowUsEXMwke3X9mjo7YywWFFjQ6BayJpT9raXbC96eBEh9FACHYWdsfy4Q",
  "key16": "3qxZR9CnM26HEAh9vEvMLQXjMKabr8N3BJsaspyToy5eHnJHws3aEPYSeYvZ3TFqU2pv2S9WFxbLBrp1ct1ckmJH",
  "key17": "5xFRMzmW7FUu3ohHDTx1hPBtgbLRN2LPF1uKYaHsR8B3jLsiQPYecyAnXwLw1dMLWZWkTofm2YtadURGTYhL1a3c",
  "key18": "34Z3MBDi7Bicaia5CuE7dSmamWKFKKNzXRXCx1yBskp8s79YhFToHv3GEF1hhqfmo3559f3YE5Htx1JGNysxxWFy",
  "key19": "4Br6NttDT6xgtVNKKvUHkywBk64DGs9s3eC5EWowsRdd52kjazY9wMmg8vCKtpvmVH24WEJjALFum3LUqz7XbLcK",
  "key20": "kwjB8J3td7sPCqaES2bdxpnnCoZetogzC86WLxyS37F4raPeJ3Rv2B2NwaeKiGNE3wKy9F72c5NPCThE2929eqz",
  "key21": "4kknfvDFZcoLdTAtKDpnwjmZgD4vDNQjDk8sYAFZTcxgFiKGP7dWBu5f5Jk7GMSp2wGuq2J39stwLgPWwger7BNf",
  "key22": "4MaeBcdQUgzCrRzmFmsq342vegupBRYsSqs9WDsUaLQycYv5xr7eBfF9AzRUcKBWV9sVWVwfeRxY53cyL5KCkmsg",
  "key23": "39Fhq59Lvj7ZP1Z83mBz6zqKaVzUf764WxYfsREYiX9PCYV3cCK1wxDS8BHGNomiXt2vvAbWx7RzRCQhktczUs2J",
  "key24": "ojhGRHo5d7Q6Q6UWH67yA1NagAD9q4rxSowkMQvZqmkUZvf5p4fEPNGnMm86K5LSuhEXdpb86JbeinbACcjxCAL",
  "key25": "5yCPyQNnuXhzBzNANQz1deMhCwmGg6yfSeZuubgP73AWG6u3rXHuSDPTqv9B4PyfEbmfsGKw7KvtnhrktwQMPGQB",
  "key26": "zMqrWttWRKe8wbLY4CTJhebDbJjQRC1Apw5Fe7FZcnUP5QUWUWhjwmULTuy5Zu22NmBpw2zxLdKwHiwJS6T6Fkg",
  "key27": "4RoQqwEgbjCmzbkqkvRGFmiEiVDii1TtyQQfPQ751HtC8iXKaNDjL6dhUaovqHxQTvSpYtso2BpUG33q5mzWaua8",
  "key28": "2o3wLF5h1kyaLxvSENHTAA5WS5NoxF72uQBJzADajtvj8vaBhXNeae5XbneYrwTNefDjcqYaExgc27Gg8CpPpMwF",
  "key29": "2GyY2wCXasUJJ5Mo7gxNSm5aPSfoM3LZd5oR7sB79QnGoGPHRSVhmonZp28DpP2xk5s5VAy5mUyN5npyoPPk6u4R",
  "key30": "4HjoHWUHEamq4GdsFr2d7uNZka3XE5La2NaPURckBCXUgMdwWfJKFFN5EKnpZNtVqdV16xGUprBqNhzfdbvQU27L",
  "key31": "2bJrBxVKLKR6V8qjbNeyhuZXMSPkvf6qDUFgp1VaQjkDyDNZdU9nezMtcnEpN4mUn9GvKppBEFfKW3iDCrEjiNtS",
  "key32": "5nZ5pCE3x6TSskFDDeR2BLmvnAr7wH1nbVLYVRuWj6phk19UZPdZqN7BViMqnPx6vW5UJAKWoQaSrsrPW5anq2CF",
  "key33": "YkVLZmXNq4Bm4E2QfW7D6MfsbozeQLNskrA5oaqR2cEA2onGB84ktuEuNQjDvdEonzsgmSG97NzK7hhxS3w5kTs",
  "key34": "5mL4D7kB7Bxdzvs1UN5tJgn33oKgUy2q3iWyJ3oLhCcvMGfdD2MqavjP4FXvTUuYaqc7hQaDV6Gsw5APHHM9Tm1D",
  "key35": "Uwb2uSeBDvb6oCXBo7bsQJMu2KmFBZeegAnKXATKV75NkNRCYUNzhjs3ue3ZTAfzicmX66oUmG4AKuwmhrwEXWR",
  "key36": "3EwUUKuqww5o5dBL6V1iCVvh2xEzK42TEXuHcr3i2MxPKTs7nVrKyZRe1NL3s1GaU5bjVMWV8ikSqGLo5KGUxhuX",
  "key37": "2meDTpQxaH5M8ozr3K5s2fEVzTeie2CRcVP8J9vJqjyVpkfpdFxNu4cFphuu9m7WrpZRvvPbmkGeXRyrKhHEoH3W",
  "key38": "QRVndrm9Qzj3GbLNSYY9wbfK6G3gDkHu1CK45Sw4huBVH4ajDpT8uMpbzKeeurFEzJS5xoePWnQrWJqBh5fLmxG",
  "key39": "3x47oRW6xkLPztG1tQBXBwbVzrKHkzjRbb6EsUtJE1sQJ6NvGT5xB8fpRnyrGCvwQ5vDBDBp5RUrasJQfyQA9xYz",
  "key40": "2GGxr41eZ9EgSFzHmdqShcqa3dbiwJNFSHMiHv7h5zg8C6bhywb8nbirBbpE8yHbv7BXDVvzx5YUdbauhWue6MdC",
  "key41": "2d4NPNfS8LMp67f7Nobbb6cmEPkbqTLzPxPv9agxjzLjG2ojVo7hcA3GGsPZgfiJJVXJXpXKR8dhZePVYUBp3MvX",
  "key42": "hgSqzjLQSCShAgB2gAJriG2p1bGQhFeFQ6HB57w1TR3MB7yH15mizPeGf4JVEhqc5dd4SqKbBvV5eTx81fzZzxZ",
  "key43": "nonqpJkc1wA4jw6emzVvZMt39GS5t5VVuKu5tUT8G7rHwWZ1juLoq5rjzvPf9nMN8W7wEHnhPERVtrvanxQpBXp",
  "key44": "3TbdwjZPFc9gQkAuaW96wdBaf52GMhuRYcBiZGCE4rdQdjjDNmFrNqckzk4cen8TZ7MHerzi874srG8d9QCL93JN",
  "key45": "s7mbGccyS8MKQRUJzjWahHCx5G55shA5AuYLbKw2hXEMDvgU3wTKeMN9m3911tHZ757TXxmpgFGBxiQzWvjQNfV"
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
