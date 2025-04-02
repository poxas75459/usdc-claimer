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
    "4RBFSPD2ZxpkvucYRYFvx4JvvQJdjKR1uaV4KRVVZxeoKy7V7F6XbLMyv6nW8MENhEsjevstwmJyobq8LGQmcyey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4psPcbP5XoMTR9kKRaJaNCbATuMFxtqyA8nt19d5jLznvpjT72r21iNaYSfnpDfVxBed7hk9odCSrDYZBnvUUvtu",
  "key1": "35xEsCqhLzwRDqsygoEbpdG29vRNa3oNBidN9Le4roM23yK1L1svjiYCbkfUS4vq1EbDLjRPKoEC38eMtZsHrxuc",
  "key2": "5yec3uW5hFL7DiTwmWVSEErYpUkXmHxAFZanREuCuEM9fBuQLGNzC6dBes1hEPzD3NR9YHmsPMsUuKuGHQJomEJq",
  "key3": "2HieevKrNHn29FUHAoXqd1WDuXCxvErZY4K92PQZAfYVgwEMBY8LdVBAQ4pmLPwYUoSmaN7dQMSocxKWkmNAviux",
  "key4": "4zZUZmjfAQEQKs1Ue536MBsprZ7HZ9iMr2WMjRx5p8E5Ds4oGtLKvXGUqJd5YhGQjS7M66SLFw5ZJDk9gZH3JPHN",
  "key5": "3AopUhzm5JaKM1P1vweAd3qcC5SEjnteEYnrXY8Rzi5PGsYaoNENqvtV1FN5SyYdv33jtC49CJjFjGs3SgUCLw56",
  "key6": "5a9AbQcCQQAiJUGUQtZuXp4CvMh3hKdD6Anp33CMaippjaxLDznkv5esues6vL85S8yLWo775Bd6eqwLRvos5dN7",
  "key7": "3qHwRiCnY95B9vVUtVkyxmektydzjh5UC8NmX8TY7uZQ2fFoC7GMffKxAYEH7pbEf3PYehdPNkG2jRfzvwfK7VQp",
  "key8": "7LmH6WYgeGxuhQGcmN9ijjJSExYC4pdNQW7De6sJKwvBnidqj3HSrDgQTBfQes7AzaVghHwaHVMin35WYeKKYNL",
  "key9": "4P8czEN1ZGK4zSLQRWgCKAqbo2Z1cUZE4CeR2fDH6937pn6UaeTgMpfSMRYJqqfJqhDMvtqxvhYxe3RjV71AYd6",
  "key10": "2SGte3uwA6XBHq7ijYQ6D6qwwjjoVLka4mvqHN32mwMkSd3hfUQvK6XwviNftRhyBB6XRg3WDD1XqGQhtNp3r5oG",
  "key11": "2Tz2UdZ1VY1cWWRexc3LbJ9Wn5kHQMXqu7MXgyBiKgKv23MXek9xgpRWpLPmNXmLCYiAycEr6dxfyPNRQ2X3Zcq1",
  "key12": "4U9329Hdhha9bNvgp1VWxD21sYLEH1yKsKNiyQBJq1afEK4Nxyi9d3gUJsRcmzafqZ5C1RUg91qpKs1KamRiKHnG",
  "key13": "5AtApmbF1Boig61FQbNdz71avTzpfbE71iurHo5vZWCQKN2vKZjaiK5dNaN4Yu9cvJirTcByjp3BeDShpbBDQByb",
  "key14": "3w5P79j9Yq8MbsuyoDBo46RjZ6foZtu1zTGQZ9iwC9sKnx6dCn4HGG7FdKVRXoFsuamo5sVSJgYwBemR2XbLoBNK",
  "key15": "2UBBSqZkxiD1AHoAxwVh6bPanxm8RjUUAaZHfqZVeZg48SdUftZYt25cUGWZtcvLqcoPBZmWdiNE8QAtDWVE6fYo",
  "key16": "4R8y8Tgtp3meqwXuHzX6rYCvdSNiibh9DbKvpFTSbWP6K43TSGegWy6cDXZxeXYh9CXrPruFnDV5rJKmWqsv5TxR",
  "key17": "3LoTeCpt9WkHwT9ftRa3B1sPtRwbcnABCdeafGdU5o1WP1LFoUypgJWD26XsGgwY59UvEwXuDUqVcSEAS4zfgBfd",
  "key18": "2TPDg5APRkkbaNNUvbe4TXZEbbRA9wYCdPwJC6mEG7Lpq4YVkaZoLpcbaPELU3X3R6fytbxTZbGKhdGZWKwHVyb7",
  "key19": "572oWWmZdCJbSBTpFLyUAe3XoRPQ2yyRNvCnK9RLqshTeYzDBjm1gAWaZBXDfaorYvFFhkeuXnquVTfDHx85UiRC",
  "key20": "2qqoBdMoTA5PBovnZcbtLG2N28ySkUbsEzgauf8eW4sv1GVfcwXnenyfPXanrQBaHP9kgkjuL6Ueoveg6wea884X",
  "key21": "qtK63fuAiaw9xcA1jZ227xQo76nNncAPNtJRUJQCXj6wvXJR62YpJSQt1TpnNyewjmUHdYonKFUoTxCgdCuFS3k",
  "key22": "maD4fGjGqcqfK8zWtXBUYXjngAPwY8fgNDdccdZKVpvEwTYmcAUySLckvvmJJEbKnNT2JTWkgzHMoS9tBchWnJm",
  "key23": "3kqhPjFAyBjUbS3MYhct4kY8qZJ6PLjCtq27tsWhgV1Nv26T7dm9BjApAC3NfsibtHZojdVoJn6vAnJGdMWNox2Q",
  "key24": "3ZENWLLwzaK2QS6NuXgkySaMQAaYTNMCe9C9FXoKidRLUx2LZvaGFV66z8y6MSqsMsTJgJbQBiY2jLiYAe8V1x4U",
  "key25": "52xq5RTGF4ifBxh3FmC1qT9jVAATXC8mf1Zh97Mi2myYDTNkLLkcKrfzVAzvgPPy8ySbVANpuEwwxraXLhwDL9bm",
  "key26": "5DVnENpqfErB1PMFzALNb62CCecbHzSWeZJzGUSBzyok6KNSRf9GGqm3VPMs7btq2ScUqFwURz6cvDrEpfFjBneM",
  "key27": "5WZsWKAGifCtfokAwGs3AV1HLabWg29xmDiMxYEVmAcCqQYLQKDwY6c8tEGFRafqzzAKrBjMYrUsmYpJuQEg8GFR",
  "key28": "3w1BdPKqYsAE6TKSTGJQU6xFRXjQixE98Wizon5fw4SsGTQg5ohUvLFkQtrAMK7D9xV1HW7KYmJf4grvRu8tvZdb",
  "key29": "4oHcZDGAR9ontuXQYPKMUc7w3NFmqSN2GC8rWRA9uHEGzpPezpCeYwWvCWRPV3daiMYE9B7F7MWWDAnH5BnqYund"
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
