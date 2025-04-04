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
    "2rg5j8RFiRgk7BTEjQKrp7HUtNQGUJiLLBq5FCY9uxnens9YYLLTnENGBKsYvQWLhFVKgQv8dkKKtXuQP3Jb42xz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sHgUP5w1m7PawNM7QrMMTihApQsxiHTZ8UE8PmpiKtLfqD9WSLXgUUFd6oineQGNV2sexEq9cBQab6Qsi8KCJt6",
  "key1": "3FGMLcFLQ9xwe2N1d1cVN38ob4fie68VskJqGQos8swK9ui9gnEuuvW7nwWtiCM3jG3abnXCMk53sj7NPDXe9bZ1",
  "key2": "5bakN9UCTMYhDkxKn7NesjGaXcsYnWMQbJ5aBVWTb1CJz1G4sYpyzFSRZwMaQstswTLovm6babn7aAGfSsp4mEYD",
  "key3": "3BQbSEsgEFSCxb3wroqEL4GaYmXiECAbcc4ZB3yXbkQ6CjKt7NMPMshVi2RjbyGHtiZCbA94NtgVjTQQTFvMPQ5B",
  "key4": "3Qf1pLptzB1BeX5Zd4H5CzxVr7YCJWgkuv88LA2Ad5u9bBr9ZidTfFrwukcWryT2vYh4tRdhDcfhyZBTMTtyeaCX",
  "key5": "ArAGdCoecPyJUjrZ5CKJTgEQthYui5rYbTyVLxYWxUnJpS1uxxrRk6KNNBDxdLrqNfFhtSdcGoxnf5CRUS723U5",
  "key6": "4Umx5LTCpui84jBbrwmjvejhpsehZJLsc3USxpTTvSqQqYYQ92j1sde4BDmM7dwCMbjj2HDCkjp9gLgsKUDpaTaE",
  "key7": "moT46VaBp2WPZRtTd8e3eoEaeYw5szm5FHyGmifWS4qYzWgNNV9Dkjrhy7feFhuJW9JhDZXFC4HjyAyHjMCqn7s",
  "key8": "gEnEuwaHpmdNffM8XWZdD3skEK7tEsF2EJeTjzDpGZi1NEJ2DsyKCebobt6to9ss3UvFhFmBgYxdGEDLQas8tVd",
  "key9": "2AUx329qt94MuBuQzyuPdpFH7JUafRdym27RqiKGVTVYwe9i4Y1CWFaSwbC3u3KxXhCH41vqgzmiJhAgrcJXtkvy",
  "key10": "58ULwGFifQrKhdz7SXK12qecFJTSA3PwxK4MmMGtoXQhGoT7MVmXeWKXegiPVtEiqAY77KnZCTW42asrB3jTRbp2",
  "key11": "2TxixhSeuUiBVpJzbWdJnwAJXL94vuUoqNm3X9DTK6cPe78zhRxDEEfrWeGspqT7CjG6PzbGpux9p7wRJijsd4AN",
  "key12": "2Tz5KpESWSBgzQXtQZzv8WLjaBHbmYWANwMeHSop9gMcCUwjEyPDH9XBuGQyXG8g9vpjsgqsE6og8AwSmNnTLP33",
  "key13": "4mcUkNwtaC3W2dhcJBPnmc4bcxNgcYvBXgXG8HyFyHhDZuQXZijgKmqmU2ThSokqg8yX61ah5BGZ6fMyyH1L1SiD",
  "key14": "2pUaAWVJnk5XHwz17sBbxVtHjyHVNgsCkj4VMxytX6nXrqaqaBVPVPtcQC9JPtwn6xL31EpiGzVH6vgysMxYU9Ds",
  "key15": "fZWndwk65cpbFCi4mpQFjs6mTrY4w8sW8RFLWLy9UkFqqNyCjQ69buF19fiTjGpGPGwnRqFjPb8mjUuHdhMtd7F",
  "key16": "2zibsWefB2cxivBiJZfuJDmemAbSQVyZJQgAkmCZv1BagiTVRv5UgGnDxfNtyb4sT76S57b6LLyqAhdhwr24hemD",
  "key17": "62yobXsHZsp9S7J3SJRX5r25ZpekAgJxjJLz34sGYFfywMw9gkn8sMVrUnosYg68ex7npp8spZoCQcweeSyvRBzd",
  "key18": "4Du8TqHwxStBDzJgv9fF2fynBFCxHUbouZVqJurvqeTZ5JUmGKvcKxT7FytHW6wTseW8hyVr4t7WL9iWUUis2D2M",
  "key19": "3Hs6V3DrwqiN4Gi44x5QVRxZSotikLk4CR4eMrnMQmEXppMQk5oQjN38RPzkhcyY7G8BMLrj4Ai9emYVdjvkTd7G",
  "key20": "5GBKF672pPLFP4EzmyLrXTmWB9u9CHZo7a4Fhivi5qCsYeqkyfVRWFckAsQiDMh7QFMtgr57bA9yQN5536W6HcLq",
  "key21": "333ajai3WhxuQGPAGRCk9supgJ1Byxv7g9iD3UV3BpbXrM4PjAmJKAbdFgkBaTBoiWa2XP5wno2nhhGvwGBcEAox",
  "key22": "URpFjJZW53EhL8maPfgRco5H6zrghzR9LynL3PknLXdjS7TVGa8ZTJmsZFvmMcmqtVYHQ5SZgrp9xJ6LK8urdD7",
  "key23": "2QuyzNNkrVfwnwWCZza9k7FwrwC2XLabatYJUK9yuTq2Dq5fRANsLhtuXziEwujcyBdqEGwLVJafkaY2BmMxBnNo",
  "key24": "3ayA5NHXRwCw9p4EaQS2X2H9Y23uB2iFMfzzL6H96uAuFMNbqRU9P3kcxo2hPEAdTZW3WbsCUf3aEG4iTk8Mjyyv",
  "key25": "jHh6eSvMpux4DSJM6CdvrkVbKd35VQhfMrws7L8r7kECyXQ1XjidFm7aa5hTjwgscUYgeYGUyHYhSSwes742xjx",
  "key26": "34YjFHZtF7kmDxdGpCwYEUPE3mDdMoymGyA3t3Rg1BeuDTzLG6jw6G6x4TT2rpSBZChsp2xYcNPpMoEyQV39w79K",
  "key27": "3portKjYz6gVwbr3sku6sbpyoeb8AwhxWFhv1THCczuUEzu2MgKkFujojMDKhy8XvyHf9iZXX7j6WmpSaYHNDZPz",
  "key28": "51UJ1RxsKUBHZmz8auLjRdpEaXvP3AKbcRK7fqDWz4QQpTcusHkBS3mQgz3y8bqyKVb2SkdE12zFA7W55TS56jXk",
  "key29": "4MFNjco3x85YeQScxXiFiwaFGnHJe76mfxCYwDraKv8NBMyRSJq2roEtGQAeGV9eduAm2nPkyNDLVU389X7WWbQF",
  "key30": "2i1Z384TSfJRCnHoQ2TtpN79uSizJ5B8BeUSQUP3d5AVaSFfVCAabex5MzfYvQcvpGi762LWrttEGw7nrXVkjqdD",
  "key31": "3L1gyakA2FFGet2aPXPvVFWV1xsJffiDkPvWAFuTzuCVuKduJVm5wgJcqgDPGgHWt8Pak1oXC9Sy1xfMpX92CUYS",
  "key32": "EJzSw7tx8RysZtWZCaDpvB56tUmbop2Dmi1DYXV5KKGXFxkoATqHCzUtKVr172QUus9ANcW9u4dsN43w1gvShAP",
  "key33": "3t2RW6GYYzVJbbFuniTfiMxbsN61aW2aQV3KS73ZYw8SnAnTWJCe28U2eQJsXjf7jVSFe2Y21PWGZZnd8LfgPKZm",
  "key34": "6aYaTtWLyWPk678GcYB8h9zxTfMops2HVTt46et6YX1AQBKjJJAWDg6F5L6paDo7wcpPreMr746oPMjPcSVuDg9",
  "key35": "eCZPGCaqCREVRA8QvZMEMaH9wJhDqNz4LjmaKHFjkRRqwfHBdxVQXLbczput9JJwdrozp2kvesqah3W9pLhFomX",
  "key36": "3WCWft9HKGYbT5C1Jc7hymwXkhZmFubE4mGfQ9pxgSqGZWseA6Fp51nLcUenKNDsPayNBqoybyYLJhiSQQxFKxmn",
  "key37": "uqULThZotBnG2xiSFe5tVngfu4aGSZDMHea6Brqr3oYJqdNiDJunrH7Jbae2eGxg1gPi23CnqPbuXnAHBFA9kY1",
  "key38": "3nhEmDpYhyz3czw4BkEhow53EDRd8x9tf53T4cFrK9gdyoef7LebEUqsvX8hTabEirUqnGnTzn6NquG3kpU8TQXC",
  "key39": "5K1KuRXtvzKabDhZE9YVrXknyr4mSqgDid7FMZ1UnbpG8phKw2cm64teNkwvgUpmoxt2o2bT4vtVXLxEbSrp7MB6",
  "key40": "4ULEjLbNxMHDr22EwWw48Ddqfsv6ABjiKxCTQoZuUmgG3gkia6SHtGoGskkS7twuEQQSj9ohtKGTE2vs7JkW7NYt",
  "key41": "3BZgQFjrbtkJgN6dUzrQcN9oK6W49CMag3Fq3QjESzJfVxDnVv3ge7zmgDyRhpzWE6KCk4uDWKXkdPLG3DCFXgz5",
  "key42": "5RmkAn6LxMqiGEmStCpVvmmYVXZCrpdqmSMtGnAtD3SA8gJajqpqkpepptPPUR4717BJqG45kCw5okC7U8s429PX",
  "key43": "4vKDaALSZyDWxsLFWZCXZV22FXz6cfhkWVudoSoZQBNFi7ocRLcG1sPv6fVQQXCXVXv9soVRQy4Qoyx6r2bwHnfs",
  "key44": "4peBbeCCdn4dhP3TJiYoEQaTMinprK75knoY9zxRjPtv8BmE8xUoVQbW351MMYTX9TgVmTHPW1D4R8qkSEjhvXnE"
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
