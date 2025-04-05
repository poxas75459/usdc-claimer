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
    "3ptPvFKs2y2EtCf9GYM9yVmeKzVwP6yq4bgDC7k14URVYMGq5UMhPoJGggrcFskD3x8jJHFbdUr7deF7cYpBfkXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qLf8gDr98nVzMyJz6QRPL2BXvNsqC16eeQQdxyKJ53NhJbBrgvAmNaRSyrzURR394kPfSXmn8VqXAd6LHzQKBJb",
  "key1": "2C2WQkeEcTSarRm1eTETffJ9HcEZMFvRtkJYXq2BJyugrVsew6Fef1yFJAdX5NHhjKFLmnmH7Weibund8BtHwzyX",
  "key2": "2yUne1noWcN35QQzNPor9qkarju4mmFJaZWEGPdpQVa8cfGXddtdaBRsHwxBLhoNvfSL3MGQSE1gsx8YPQuZ4vUH",
  "key3": "49x6t28D4TNmgFyXUuQ35yFK8bZTkv1mkq4rP5yTjxbyGhxmTqQarJwLuQjZZFKoj7DA1q9NuDnqAt45cws1UyRz",
  "key4": "2jQdx95mvk1pjv4spysWFdCZjrDAjvHfhdorqiSpJeadxFdEgkP775z6WUsFcXrVQbNnKhGS56LfunhQ8fGo5rYy",
  "key5": "2Ke2uQcrBfHJVNugKbEBoQ7oQv4FQSjXAeQ6b6R9HKYyx7spatHcAAkM2LD998myAM5LM9cJF4R5fTnwGikkCySj",
  "key6": "2oFB9XwriFp3ozJabVcpEgmVLuG2nen4GYAgG4z9xKSJ1c8M6dCBjs8AnHVVjqoBUsK8EreqpTCryiv2v5VEAHSB",
  "key7": "5u9RsmWso8DDcLNUfaFKTWV3yj9uxNFMUdNfuGwa6KPkgNjedUcjfXDrHUFxGAia9NbR2L4xbN2nqMYXrVCnLZ8L",
  "key8": "DgCbC2hqd5SYUzn5sFFAhT3m2aDNpWG4nmaxqPxHQJigF6ToA7TXUg3N6Dt5p8W87VovtYWeLHQXagNUWfmfpS4",
  "key9": "4zNbffzDQj6zpgKP2hxtEawNjdGNmdz2YQ7hAVeiuGj5CPTWuyDP4j45hYF6iQ8hFFo75CY1A82tCSj4HB9f5Jrt",
  "key10": "5DQPgjz84sgY2VrV3ZZnDLWuaWf8eYmCHnjzGGu7P6SYm64Cc6R26bm9SqnJEpnegSyHsTmCCMJfPuuEj5CmMzzu",
  "key11": "5VirYbPgz9f8urmYx5MP39n5wRYS9afQnXsFXTPV8TBYrE8MZ8twL4mNgDF1bPomCA6ga9k9R7s6VrX2F1EJ5aAj",
  "key12": "5LnGPWTtAN9av6aecepEkovGmcdMrdEg6GhDwQguYUbm3wGTyUH3HjYLzQQHPRWxMqnhjgGj7gwXCqSmodeBNqUs",
  "key13": "3b8V1LxHgEavzYLJQAXdhW5bVUxcE5RXeAraYu9PZhvP5q8X2G3gymVqaeJwNKiGxmXDT3mZtedSduNTmVXTvXCe",
  "key14": "UVaa7Eoxn8thTNwcCvrGgmhaBWPn75eFt8wwZTHa2UQRY8TrezXaZ2WRNqHNQ8H2xM1ejj86usiAmFdDecaWJaF",
  "key15": "2NMhEcm6XWKfuoz4ebMqcDpAu6UGLtaEPsrvwcDNspzA6GpLYZeU1FiJLi3jW9x2Rj5eJoENZL931R4HQwt4aW4Y",
  "key16": "2M1CYcZV9SCq4ZcfhTwqNJ1zZVUmWubrjeu62wxqiLd8sT1nZxEQFHSQfXbrMiYi9fzyYqXHhdGF9zN8sQedYiNt",
  "key17": "4y3zTaP4FK4wQaUdbRz3oHV2aTKXLTcvQkFM1dZ7iJYp7kge2Qc5ABVCBbkFVzkaRAKDJTEruA1P6aVL1F91VjBZ",
  "key18": "5gac1QnyWDxb1sVynyTXTPoBezKA7UKUhZ1hFHddT4taDtHWMFteaFmok2bzjuvAACUqAL2fcX7TGMXkaRLAj7R",
  "key19": "2eqSxySbnq8ZN6iUfumbqg9N1ySDHgTig3bGjJ1GwTmbuKFj1DkM3hkGcGwyALZkCXSTSe5qYbZ9i7SupwHsPsEo",
  "key20": "4GeN1LuuMXCDsHnGMoKX8yQNPJZfhVP6Li4GedmQpFMteU1cpk1HZw4edh2CcHA5SfYkztssGXgJWurhx8hN7kFf",
  "key21": "51XbwWa7b2QHxqMydHn6ZaNU5FcUSrwVti5znjdMVkTXDJaxun7H3s9ep3UYA4CZ3w7eQ9tPy8XTgP11XPXdiTqF",
  "key22": "Z8jvZHEcw1SKuifiw3nEqNEUNqHZ3ZfpAYFm4kouKKoEf6hdWUtYNKxDKinjcUx7qmSTfUbVbQGWcFnX7sA4rkU",
  "key23": "5eJeAPEJHJBHJLzGRXnYqyhgaUtwDmvhAaKSJAsYS9rFAZiXbSikQBia9H2p8zFSuemCiG8A6guSKaUiQ7boHmzR",
  "key24": "3pcLHPGsWkcLBYXwmPtsP1CtuumPgBwS2v74v6jLgL74SX5jfhzDbhTk2J6p9PNWynUu2PVWTCWF962CSCs78deh",
  "key25": "2pSnhdZVFdfprKxfpZopGzDebhQwEcx3GCdN9yNjoML9Kbxvaey4ZUdxQEY6qTtghGQaUYv4YBhxRP2xoLRmWQsa",
  "key26": "5YJLg8653hEpQz8Sh1Tz68ZGhHKn651oE374FHrLiA3dCbkewiAC3nsyUuCaDMzWsKFJChKm7ALm6G93KX6KZv39",
  "key27": "3y8gDFH9soDNtcZ6VsnH7JYsU1igfW9eCfUbREV8ekVfK9FqUd5zhX5fEyxDkiC1W2Pffjtq5QETe7xKjE8nqLin",
  "key28": "3zrVb14tNykMFwjJCvNWAmNCszesGN7kxmpGF9jZ3Jub8XYcbj9J99mZca9ou4XZanThU99hJCy8sPMRaRGHiWaA",
  "key29": "2VXC1ZVM2GZmxKC8bu68E6ZyUbaBxnJfEK4dPuxpypQ2aqC9MwYG41EN6sQ1CURZgWHdXdCarKRYmEyzHERnZqjR",
  "key30": "31Fcb1qLGttLnFQgMRWgvzCNQSmpxtxiF1bqvbxHiRA9VQxTUb7ku5j9qeeUsw5ueUhtUqXAM1iscic7c3cC3LRq",
  "key31": "piPg5imXjGZJpXceSHfADLsydFi5oeUbRf45kra3vAZYqk557si5sHFimsxEYXceK8Tk9iPG1qQAgKWi113NzP9",
  "key32": "5mMTXhYZPwaVFidvUnRcZCXvk3iNUnv1h8jqYU2czpjWix5s8jnd2Kz6mh7DBpAMVM4aj5F1fXM2CafRJoMc3CEs"
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
