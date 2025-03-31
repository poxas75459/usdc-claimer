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
    "41ukMPQ7usem1qMvg9syaakRkVtPhmxbsoMXxmSAo5WqdZKsuxZgGu82usfhYf9JyQeeuUHmvpsVHbFzwrN8uc1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ugB6adh5CwRsdvuACgJgedu3VaJ4PwuBSPoruBhmJLHMreDtXdbKH3jucke5pWvtEHSiEf5WuFsm8CPrVfJxkBT",
  "key1": "Ex936qZSsRvb1YaaDud26ExHgY9VNeXhCUXR9KPTciPr4QEdKc2HwyhARuTqyaGJsGy5bZBm2r2WMEsAc4jy2nu",
  "key2": "4tSUGvrSn9ypKnGNM7KKrWf8WDuZBqAEL5WqAsyoz8a2Ai22ZjvssH1ge9kDp4heyFL5gRpC8J5TpBgFeSnWaajo",
  "key3": "35QiDPKKibmuRG68ivYFpWraCSMKHvV9A39nANnuDCGLjW3w5vHPK44TBXbmnFewQBtACqEGpEuRCnf9kYDVdEiL",
  "key4": "gAeDXt1yXtTUiXStTS136NKcHcuCEsuaaK3u1KNVh1B2WevouwgaVR3s2oHhDyTMpGh9aEwR9RbEwuhQ5psWxWa",
  "key5": "5QcYgzyEVfgDGmhy6Sx1NqoAwNhmSFkto3YZUTb7sr4BsSgWqPUZkgmHMQy61kYYSKDxZbQKC1i78RbnNXBiVMjb",
  "key6": "gkvMeJQmVKPhzis9Z1xHJHi4TG7i4GhFcvH3roWRuBio5NKBSqWT5GBkAdQmN6JpWS5ATNrqnb3hEA5UeXarm6N",
  "key7": "2ZS36AuEEHe1to431YQqHphVtuxHgLAiHUMX7TohMAQgNxRV93DPShoSFRJarbP9KSpJks9ANAq4bLrVnJRdogvq",
  "key8": "5YPcwTpaGWruKVkbHUHY55iukB2cqWx8EckskNB1HunKuW2Rp852Krehd8dmercXzTYwckxi9oScYWdSkiQ6gicN",
  "key9": "4gzCBBqJE6nWYeYcuBax5fEDqQjXjANj9NBwPQrVY1fbzesbZcsQMqBu4NM49wsWci8ttcWcZtZTcbS7PK85JFQU",
  "key10": "7w38G28UN3LHXWPRnRQqGmRMcmK94g5DgRPM1kU9Q8bY5iitdZJw1oymczCVRbvraRtmo2N3n7B2WEsJwpDNdih",
  "key11": "2kcHuG8nsQmz9Aa4UQryKxaigGTj3nNeSx5p3mkkBb8h4ZBzZ3QoEa2f7t2NQvwu9zk6bpmrQRZ9vJwkKgviesaN",
  "key12": "oquPAWooCTAdnMGrmsfXNUv1tiWiG5KENqJuEzwu5rGzy38cknKaeDUA2vGFVC6PixriCHxmuWY61suWNocnuAE",
  "key13": "3k2UbK9cAN5tbmgxRZfC7ZJWwUL3jXF6pH9iuPegS2ztrG21R9wysP2ngAXCxB4m5x3V7vsA4BFbEe4ipW2wj7GZ",
  "key14": "55QieQAPRf64GT6n9BYHoLvnZ3oEurMh4cN8E4VkDNyWGikJicibhxgtToiNUVcsdXczqEnRu7xCL42hfCW4M3yS",
  "key15": "6qoXj8Th2VptsJ1brnattcZSigVytsWNPtdcPVi4toBbKYnpyDuNfnUShsMkoSFRMw7LQGnSyB8DR4hgHViWQhq",
  "key16": "63vdTnbkuKRb2qM4Q3uBZZXvkHELVmc1nFGSzU8NzyyTbrfwkqY8aiEu2dsMhq8fJmdiaiDYcEPvaBBTSXJ6kPJa",
  "key17": "5NDLnpR89R4W4wAvAJXfAmGdFsznF6EyWKq5o3WuKwfCHPAaZAKuYp1UKEMDzc5t6Fu6PJPYmeHUMjSb6ndXvuyf",
  "key18": "viqFmZkPWfFNZCbNjCnVmtfrL6jZdDiGsGzpDbWwMvJZGzEKy5Ukki1wTvCdqyQ5KAba7tnZJrra37XScNkkt6n",
  "key19": "5SviioVKE3NhvJ8eVrCE8BpCkhR6hrRwtpa1rYDktzwQVjnVLwmgTsvWuJZX4WfGGBBsy3UF88Qps8XKPkCGvsyS",
  "key20": "2NvqShmEdYeE9aeKcdfEZh9ZqjkuAAft4twL8N4pRtfLNa17mYJPoB39xpU893BYQg7Xr3DQex3K3AsgTE9kqpte",
  "key21": "58RPSVxht253tLoL9dBn6Gp9Z82Arf5LaAE8ZtxVHkaeWmu73kv17hGFg4EzT4bd4P5fkijUy4nb9p5ssd1Hmbvv",
  "key22": "55CYdBRvQdSoWSje3UZFDtg4Q4wFZYUksgPC3WtYFmEjsD9zakkjuFU2mZ3AWkN5KdDV4oKwTMwJG976aHbxEP9H",
  "key23": "5xEbQMeqXfw48vf4ThMFCPRj3UssXnfjNLFskC2WwjJ3bnhZaEtqRCwWtm8JecfZ1kPAsQHX7AeBp3yZZsJAkHud",
  "key24": "5C4ieuQ6ERni4HRt2gPfXhZCMUAKySz7eCo7cNztGMMvgP9mTrb6pctVHAPAevjfSAJpCTe8kJgzwXbMokDtaHrx",
  "key25": "2QfWi7uhq34dXjALgMphspwa43wf3uNyNeMNtgTGaFZQu3kLTPAEQUcXNHJbcCpiiCaVMhvagZ8xDmjUsx8mXo82",
  "key26": "o74LJuT1i9M7D5NpQ5YibjQt2TAkhK2Z4E6UFA758yXboj5xCftn8wVoxK31LPFUBfDAY7opoBUk8UGPw84F7EB",
  "key27": "5HRngiJae5qcv6EuddBkppRezpZMwPEcY8KTdHWmxB5iog59P2ZVADXkSTcZmcPohNY2o8ev2T1DsC1k4SbmA6oe",
  "key28": "5Wk2dB9SHoSumDx1AJFhvCDVDY7sUaPMhJTRJsVoTnxZk1CFDcT6zTkhPJgtyGJPd4Ksaerzt4meoxjG3RNQYHZ9",
  "key29": "gXZe8Gjq1pdwR2USoq4Y41xL9Cs3zSej6Lm4HQiP4gZ7123wSDcAjkhFUpVNBWNoyVEDGi7kTqDqi1F13PCdgDh",
  "key30": "BU9d9K8UYnx8oT6XSPXNtdtdETzbLDzFSfjChBSJbvxpech8u6ami9rpv8LDN19Hs2eTjrkxArehzEaKDYq8MMi",
  "key31": "AYG5cR4thv6yhuZV7grwgQneKJMpWqGvAggtwdgrJNWS82UEazr6NrJchJDNQdu8FMyXt9sBUPKLUtdcfsTRpDZ",
  "key32": "4ch2f55U6KmDNsQRvZPjyH3pLvZwy1i5JwLL8EuHyuRxooa3Way4wtpkiX3QSEwnvgRcehyrcYFxWee9A3JFCHe6",
  "key33": "4ah9FcC2fk21UhC88nNw65evWLbd94XDgunkCpbAv2pKSbmKi5sBNmXN8M2W9BN9A6y3Yb6d2pG9dvaGTmb6sEqA",
  "key34": "3ZCHV4LPBXzXWcGL8hQ15FhoQRBitpxpBYzQ6A3tXLxpPqvVtvLp4ktCkw4mK2L325fWeSg8CzvFKU38BV81Yp3v",
  "key35": "3NnYCaBkUShSosDrXuRboy5u6Z9yNanvidH6P67Wdn4U3QNmSyHerNK8jYo9eCteDJ1eKfPJTF7kKP2CvjMfoSRy",
  "key36": "55Z5RSEBSdax91TbkbysbbeFuErnwReQvH2msjzSvHSGUAhhkaQ2W3397ftu25wxBpCoowfBYnppKBoaKfCcU9yd",
  "key37": "4jsAGYm8ReorT77aSii9qDmmbtMjtXAjHErSRdYNpCHkj7WWhaJGS8BdShVpd3jo1NpoWYwPSw2MmeeHE7x3UVqx",
  "key38": "3nZgvqLc1hxcACYqibackPTULQBD8JTin1jgTt1u5RG7HDSsg4Gx1rP9wJHWNMrcRWEUt4J5cS7z1pwYAnyQSMWe",
  "key39": "2b2FZatpNKVXkFH7ahn8dVLzNW1d5B1afcwommPR4TZciWEE14oZM4oNsCqz8gvNghii7FRojzBByC94uDf1jkMc",
  "key40": "5y7KaUVhHsQVRxV43wUfxQPaRkVgxS4qi5Sb1NkZwQs65tdyLKq1g7ZHqEoEtS2UnbtaKFRSDBTtt4bYVpp7rmQV",
  "key41": "5UqHqPnj4iWWf9ouEFfmMjdeEQ9L2RxiK6AVbfTm1tkai6yCTYPKLLC12ovPTz4FhpKR6mpZbqnVDZzjx9Hy618z",
  "key42": "4gpPgJX9b9i4tVYVDuEMYwYHvpQbRnDupAAVgt3m9DsRpTFAUgBbEPGi3vdm3orNrFrwRttBWZ5N94eRSnY1dVTs",
  "key43": "3vQq8r1m3Bfeg8U62mR8eNc5mfFQ92WGo85kmfyovM7XB8ce5B8y6bpDg9oLQ1pvz51mJszNXUNfHMtf6wsjVkan",
  "key44": "5LiqYSc7JWj6oWLMwvwWWxVEg13kKgn7ryNx6EAVDNdDaN7qsPjN2G1bEtgUhj96SM65XZaFx1sxYyujFLvctMcc",
  "key45": "4gcg8nW23XbGN4om74Rhe1d2bWd6K47eJmAjak8kb2cGBuNuWik5RsJAkMExNTZX6jqFo1TrAHEXuH3SwtwBtbSn",
  "key46": "33mgmzgKFuZTxnBFyWocDPkMQatqRt3K3sojnAwnfKEHxRXhZeppdSgkbW1e2Krd21UxU7rw5RQ7qdgj6cyKTZ1z"
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
