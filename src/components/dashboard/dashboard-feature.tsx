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
    "44frMW9zZLZ7suTRtBrpXgjzpsNXf92b998tqqaog3jkqLx5NTpb4eFxnj4svJcbmQDwVnsvSgMKjkBN6dfZB5JL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q15PRoueXSUX4MjReKRX7JgCCoxt4R4m7uqfKMxJwK14LgonkF7RTtvXLscywmx5MtCXoS8TRDqn3MEnHKsGgvL",
  "key1": "5fpGZkVfxVrEZTdbZnWwWGYL49p3JYduXEntxBn1TX4MHFvJqHhDpPrrudPUA5F6LaAGQ3Rj4bsCTpJbfRSryuaX",
  "key2": "AhJfPFm4j1AU6ursUiPm8PPoHmEX86HUnQ9tYDLFgDEwAYcfhiVqZ9bvzazbKjGaaY3XpFauuHphunjq17U2kY4",
  "key3": "3hyi9uVsNVxfXuaTgvBUPhyt5qPC927LBYv4j2peNrBU4B5XxJ8fZ7BDk7ucVA3WRaJFN9A8fXfDCYQJFVXeFsAN",
  "key4": "5BSsJc4ZkCZrMbWH5En3H2EgW5kps6bcpUxLXroEfgViN6n7TLLJzMf8LpGekvQu4JnPMyzqqJWAnkLMb8R9BtLX",
  "key5": "2t6YW4M23puwEtvSi36mr7R1ivwoiyrdEijGFFr49N1xXyLeCGGBHxhAH6oE93JFsm8u5iRVmNJJteX6AKVXKFjJ",
  "key6": "2bz9mfTgBzBCdpM2qf87KTwQunJmXZpwmRxnoHJ6Zokq7VRUFJmbDN8y2pc2ZDGn3Q9ahahjYPrD63jiKwaMGP5F",
  "key7": "3BunqsnDvnXicXJQeTSV8r94TWoKg88ML1ywAeNngxe7qhYBfJzHrFmPo9aWHFdCCkGTXmgiyTW37yYTybV5jtf3",
  "key8": "2wXGSscuDVGGrKEdoZvZ5Z9DRVLkoZ3j69RAnW7epKzZR6rHXpqnoXT2Jnvc5zK8wDfMvj7BWSamKhw341CB8MqE",
  "key9": "JjGDRC9GziYpmLsEyaT1LRxcJhABchFKQMMtVVCbXFSmUz1oUnjsag6vY28NqeCzA5kkhk8s8DYsLAZZ1SwCQBH",
  "key10": "3jy22JfAMJJRKyogfr6xNhZ5XmtqcMni3CKZWzbmTaLWz764pBnMPqmdtSkzGxJj9scNm16jUt2VaChTqRD86PXb",
  "key11": "V5G8Jyto3vTBiNgX4V6HZcswitbYKbwxmxSAtGgJpbRL8KMAgcisPZCJ15c25ZZBsTxwHQzdnDEAkyZEXJTeksi",
  "key12": "2cKbsFZnHPiHUJLL57GuF48xHSDEGa6DaR4UzdGoxrtCyvmV5GJhLSr6Bm76Rxq7kFxpNLeh2FskUKtJWKGhhAxa",
  "key13": "2TMNhqqUJNUotK1RvMMYoV1nm3ztgkadjMkqqYehYbUCL5pE8xGrg2nWD5PtndPUp2B6W7iw5tNma7Xjinkdpyng",
  "key14": "5geWaDxSWrvFH86kPyTa8Nbri4i34cRqDSJMrYvSW1oHu7pMT5HDfV8wG8iJxTiayargCepSR2dEy4sx6WMRgCc8",
  "key15": "G6ktCUCCPUhmEF9Ruwc9ChkjyWqNgeDNmWxFrEjGTT5cRZD2qh2cUws9mHtYWFuYBfxm7fy1fVsRVntuE1KeBPW",
  "key16": "3DdR5p8oiadc9wb5Pv2tjTBgZKmwoj9NSSFnNo8LKmDqn2Zufkj81dd6sQTT355kEUQEpnptpnDKf7dy1q74WS97",
  "key17": "5Awqmp3iccy3bKkEdXsPUYsawWEztMoETV5oqoUVENiKPsrzVkNFmZsqrK9Aa9mLMa5PqSC7MLLTArcLwUn5Rf9D",
  "key18": "5N7Q75QA8x5Vy4q9eWb8rBwBMHrQq2Nqc2w2q465t2cF58MPy2Rj32dHeTY3TvPvS8aZbi744hbVvX2mbournAGz",
  "key19": "5SK4Nr5mxdFZbaB1ohvDiqv3BXgez6qwENtxJTvzKBNLxr33W2vNL4TZp7VFkiFGKj7K2ZC3XafHoF7sMHfDkpUC",
  "key20": "2NMDeWFpA7xijhwns7CLmh6K6KmQtq5dfSEWce9UBANHATKxwdTCfreHH4T6SjyRr1uSppNWfSrQiSwWgQbj97Sj",
  "key21": "57BExmkLLsrP6LE7ZV2uudHf6ui5DRCSB5odd63ZXAmCUj4W4KjKAaSksJWr675VfjM2AgS1pJWr9k64Skx9pWGz",
  "key22": "3LSjnqtwSNrFZrLzhzjLytV3AcyxYEhaVtHkkekg3MCvSU3fPEPiESLnW2qknmo1jKmwpbzenFCNGd9V8VDK1vK1",
  "key23": "5PCjtcRNNNg337TKg4cHwcuP32shcBPTrAFkAxmCjMoYb4VxXmxyWEZrhDwtFGozFQMX8BAdCvfAkviWw25EZCCf",
  "key24": "33mpjeUgwHLjvvdFaqgiGs9Y3hNcNaxC5YGgTnBLsv245jockbZb71vb6o9npSYE1QDKM4jgSuhmSgG9xKBhHCuQ",
  "key25": "BAYnCYtwJeKTGYKSajF17tJsZoAm3Yf8NCRm2TThSWGD6cA1UMF1C5TjdckTcT5yQ5zdsKHrBL7Qra6wfXxV6A9",
  "key26": "3WwQZi7WYDW2vkQshkebg8Fy7sASXTpbMwKvMURHBZbs5MXnTbpvAkNhaVUoXKDGv36R44g1zvubjoYA8CiYUDFr",
  "key27": "5dkctXhL98zV6bwcJFSq79eyG8jbQ2SGWxvCTKMMBqpNsE4BBt7AKRouCYzjHuKhp1tCSbCe4VZZD6ZEtSApqcwk",
  "key28": "4Uhfp2UaoU12Rrq5erjpGV2mqiC7MYDTKn28PdKjWriK1dH8uhekYnXT1F8N2QNz3LeUGp6UrNKCBDgocUgETgAD",
  "key29": "39MmSpsuBwS8RPsYVCvr7nuk7uRGeNmBzUEcFWZ6TVdNH3wC2iDABLkxg2LFUfGUA2A21CUQ9pC1VQ1h2vvZNFvF",
  "key30": "51bwqqDBW5MYnqRgNxwixkjH8SfQMVaKZ3sxaQQ7nTUHpmwEBxh1Eqk9LaMf2ef9BYAaVPzSnnCTtiy9tyTe618J",
  "key31": "5iFCaMUusBG8qCAGpeL3kbdEU96XPwjmUDj7wcXGjX4SvEPTducQ48WgBTxu6JYfQ8h9Aw2pRnEgaKfNK6jRUfvt"
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
