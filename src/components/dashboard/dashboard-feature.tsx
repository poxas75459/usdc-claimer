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
    "5K6TwdZ6e7w5CXXoqb2MgQTwVvz5Xdn4638JWnQLW9T5oSf26gGgdQzL9JHswjt1gXLY47etfg4kEhQVfeED4BV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E9U4LzuH7g7WVDw2KJvvumDVgiEGj7w3M1XJYW4dNRs8BSXzJdBCRbWFEG7hxJADRk4mC5AoeeKKhkxJ5p66kr9",
  "key1": "2tmGvE6wQDK2LHwSD7Zj1RFADVjGkGCJzfSJzF3VgT92ayoBV7cUVthoLCnqE9Rpv5LmAoYhYFBh8Qjd2CZLWsz6",
  "key2": "GQFwoX43coQ2n8YYwBsC6bLqwZPvJ2a3196FiaF4xciTKVfJTt9Hc3DkwPoauuToHYofnjVr9ue2YMnNaHTjXrQ",
  "key3": "r9xLN51N7MTh5jpz2XJ1Cnu3rbFoTTc1kU4pnQiWe4F97HQpFKK2UZGzPFLJzMYvhfDESKHcaSgLxariTULJWPA",
  "key4": "3JTabQG2k8YwXupLoTPCzKzePs7GFMxZ8YDNxu8gkRVDgaudvDBttgxbnSNDHMZyoMfdSTJDDt9RjZxYBFZ9nAHN",
  "key5": "2AEvLK5GWU7JZ3me2Ws2ERc4hocMT1q4rrdnFmgRH7pKWMvdnyCE6uydF7koYN8PMP7bg64hWzpoWq8rnCbhPidX",
  "key6": "3Pr1uLiaz89eenPP2oNJqNQBhcM9umx4p9APhckg8jJUgaXnk25Qmj7Fgkpz8L2qRmLeV6gcEwJJLqzHHWLX6w8",
  "key7": "27bYxwW7A7XHppZzsGZMW1yzyZzbss4j3q1aACykW4x6tTBTvXUpjNUUjoSvBRjZ5X8pUBGuMGvmdwYFM4WQv3Aq",
  "key8": "3qkAiwVegTvPNzHvPn94Bxjd9jAXHpeNyLd5myi5hsHBDaNTjVGUErXjWySRTUWcTbhFvUQvfF6b3zacufSkTyjq",
  "key9": "4DDpnVnzRkuG8EEavARyhKy37587MRbd6jp3KpNWww7S64YFGE4QNS8XS7gpJPysRGVh9VywWFwDjaDgNAu8bbES",
  "key10": "4zhGKrYChkekyzQGdr7P6PFMqiNY3HeBtj9RhztvM6ut6frCUoVHgSSepw4wEqN3vebeb3Bedmw3i19ghiQshhTD",
  "key11": "tap92SmaQc8L3J3udYPxwLn4SU1ExQ8hL69vin7dSAX75sqquHa3MYYmLGsqgENkQueahoifKUYJQPE7uczDTXJ",
  "key12": "5C5aurj4D652syf5coKfWL5FtoLtbGf697ob8g3hrUspqApFsSLqexUXYrs2NSmR4ixcyzQGK6iCLe45LFY5Anu2",
  "key13": "o5rf6W1WbvAuVpX4aNY1tYV7pF12pXbzMskmNfPDRa4hDXKdkqE9cX9WEYpCFuo35DUEdV4ALiUxyZHnPbZEddh",
  "key14": "2DW85V3q5ZkcM8Ta2mHPbHqRBYChAUVMTYT3MKct89RWjatLo4MqWCtxzxnNPESDAMJ8z76PqmfcG3nPnZpqZqM7",
  "key15": "4Q2ec98TsaQKJoodrvfeQQJPNYm6BhC535Yiomn9bpkcekDV5fYXHPHb6Y6T13Nh58gR5DJBacUss2WBj6fRv9NR",
  "key16": "F4a9b68J47dishmwa5cgp4FPu8iNUPvGhxGEWyKAD7JjsXLfVpc9sEhCdcSZLHfqZGGX4Tusi2oHC9VDrobsepg",
  "key17": "3QgnTE5GZoE1B9D9Jy2MDYW5YtjJmo7HNSLMxtz5VBw2fT15BKRofnD61qeBTt2gF7fsBWrNKkmRRdP8bAbj6h2T",
  "key18": "4GCJ851bWPj7ZJRqtdhp21gXbWahxPcV8Nit5kYwNvhB67kotX526E5N3AFwwYUMxgGABDChmjiYCgVCZFkgGzUB",
  "key19": "3s6R3gNqN4APb3viTjBkGvs46Tt4DyzHY8M1ArvcmcHT1jtfaZsBHKP8QDCQ3TFqs21pfbH2qY9ZfVwWveWczATt",
  "key20": "NfFhvUpGqbEM1LVAmZxRDDHXWymjBhTzXzu4P8jmzgvFk9bz7JNNYQgTixzE7eRQDYfekwx36fonnskJ68hTTGL",
  "key21": "4f9Qyhkbfgz63fzu9rCQZ8RaAL7HqDRU4BgLYFeWTdNjLhyyZ3qu6LjGDPTMkXjeoNxFbre2468woKsPjsp8D8EQ",
  "key22": "2rjyfWiTdCr3ewhdAHWFeYaWuMPrFEpFn7Jw9F62Nm6Vqho3GA7YBqgwEZXRnGDr8Rh4fmCck6KCkVaeBXow7S9x",
  "key23": "32c2sg3tXP2Pfqqsxy8ARDN5H4oetF2mAEuwLBmmRXMjxX51XkFBXYm8fdBjRn27PBuSLjowzo134tDFKfPfTi1i",
  "key24": "5PSjD3E848b78KG51kCyMjVR7zXPbhcocN2wDPLb2PY3bZNtwpTuFTKsZFSozCdjhCNNaEFf4uogzer3uRKuD5XY",
  "key25": "rFPmMTqJNyETt6gCxmtP38w35XoGzM1i8HqosDK6LQSnstvfnTaHV359dBk8iUxfeAuLqufkcScsxCFusCmHeoF",
  "key26": "29nPtuZjWgWatpVWkme5pqfyoWNeS29ztvxNfVinF1nUiPE9YNcmwEuinjX43QMAiJqCci2MnbKa3sQqRyevXQBM",
  "key27": "S9U1QvL1JNJcupGcYRSttHekzUfaUUV1QKHUz5tpQ5kSPRuJ1J2ByZuChpwot3dAcEubr7R2tVUJyHH6MXf6mrm",
  "key28": "aDkFD3FWHRRRpLtR6FVDFYaQbvP2s6D8gVm9eTSUAtENZbmpNw2tH5JJhSJUXUuxCw6yVeMXZGGyP3tShQ7Lu8a",
  "key29": "3oeqCV3iL4rPtD38UoRhYpC8zZrUNZAyBobtsc8nwxXzooEaj44QFJcC65wSWv1bM3kG4Htsb8gbAFWLfLD5CQXC",
  "key30": "2pVipFbVwHjdck7ExFDfXo5cwpJE5NWSCCqikaG9MNWCyUnwgvxYrjTsjpsgFBKg5NLnNYLFUj8YHuAQ3baAxS74",
  "key31": "n5DoFP8sMvFXijGjHBSa1tzhNiNzGsqUASCEKTpmKJHoa6gX8iWP4CwP6yi9K6QymtvADgb6NqpruqdyQukPaQQ",
  "key32": "4SbHpfFu4rpDP5rddbQKkxeSn2srsGkUbak4fYBoXTkzMmNMQ3R8KzghhDCVvZ9EfgZe3sPEMvmKrfBykCUvDqio",
  "key33": "2rHgrdzzzd6pojf9zZz3kYnwKiSAYsmy2763C4hXarzMhtoZWnKhRgfwVSTYC8LLiSMsdJmJToyzvvGb1NGMgT9D",
  "key34": "4cn8E4b9BLb9CXpjgTW6eQhZvDbCuCUgfHdNQDub1qGNkxz8Axf7w1Pg721Trn54SwFTUyGG5Eh26Tjk2DCDsoc3",
  "key35": "2R9y1G12dHRjeaXbexqetVDBKoyv3VPhfx5kwy6iCJLDyGXELueQuzfk5FqTcELqivqkFH1JSSjGwbpD77VrrD8p"
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
