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
    "4qTs6xUBgWpKTTGwxZjs5S7RaxPjzmod9ogeBzELQ384HdpvCKtR9YzghvDNoBMCzQSjH2mVX5SZQuiUjZQDkGoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "216vFXVLPEUHYbHVUvPHm9L3THfsko47mAD65mhePcTytSjqrmm4USNfkG8SkzNGUDccB4iX4c5S7phbvaRVTYNW",
  "key1": "4jMzxMZPCJ2LvvjcniAVrABRts64xzgiWMCdafoPvzaG7rR3G2MBMjLXXVmNqAcxWCfQebt8A1YYjjQyPsBUu4TU",
  "key2": "3vbGghoeteDyMNTAR4w94zhKmV3wLGji7MZ2daidnuqeALR493JE7TkJRN6S1Ayz56JGPpiXR1L7NZPri5eV7pU8",
  "key3": "4hzz29YHkBtXQv6N6pPK3P3xGAeavtn1oKzZrqFMr7kxbjYipvAvFTPvgNkLCdbGnE5DQhSHG35JSEqZo8YqrYGi",
  "key4": "aqBuVTDrQgEzDKPbBcepoBuhZiGSbsXxU4Svbsep4grQmxgDUpHY1ULooiCRnchsmM8ZsARVdgVMJMhdpcKz6vv",
  "key5": "5pbWKJkBJUNuJWoMHaX2TgPKXhJhUtN7qu6K7TA42tGLUZn3j7MgCbEfruBPeV2Wcxs6T5yftwHc3C4oZw4sjXGX",
  "key6": "3XxYsQKyP1a9pdKyko8jW18NZE87Lxuusi5ptGm9Vcav2vd7C2aePDZLcRAVCTeKYGy7P7c26zJuyCAdLHDmy242",
  "key7": "4Yc1yaqzML7wskoqVk3FKix3YQxEMMN2roeRqHv8bpxNfYhSrdooBqeezHktp437ohf3ri4Cn5FrJZbEYRGUSDn",
  "key8": "4ZEJekykRLNbsZmcAtcLRNnMppyUd3RBJLFyiK8pJqzcgCw1AmdTDgayU6dRCKW1k6ioima6T4N8sdKFax1aiZvo",
  "key9": "N7Rrmm2KaiUNBzQu8HXtCV5ShEc7yNuScYXsRwjRKYH4cLdjCsFXAZFr7ibvaWuex2y9Wn4c1ANiCNx2P3FEWEN",
  "key10": "27kAVsmACkHGj7HRVaWaQksVSFG3BJ2eNPeP9fpNVZhGDofnKTmjVcMG6K2gQqEe7ngQ4Fv3mKhzeanYyruXucHK",
  "key11": "3WnUv68prevDWPzcJoyvKZ9nfio38YvUQydPYru3igAFD3XYbnDY9X2XPLZGani58BfdcyyLuBd8qHtF7mHKtXDg",
  "key12": "vEiCa2PYY2sxeNXKnnPgb7rtyAT8BcT6MynvZdzveVPaiozWh2ymkXQvNPDzid9rFUT1LayYxyg58iJkBN8APf2",
  "key13": "2fkgtqHV48DPLLGZkp8mRbAmMd6RQ6V1ztQ9Fx8KiM5qPLJjL3qEnxvwG6pP6AVF6eFsWSC1wyhGDG89qgPgcqmX",
  "key14": "5xX4rLsdn4jPq7ZZ23pXG2B2ZNB5BxhWLKadBF8dYVaR9DdTcqMjkEJfSoFirifdvv6BKQLynJ6H2i43Gr4MdbLA",
  "key15": "pqr7NNj7acNRdPZ7w1i3JRG3NNN3z443j1YzBbXpzKLhYLvdh1AVg5nFrmTRgELi8w7bszCeqZDCE9Y8YYqUR3u",
  "key16": "4tujRAygxhbWSPqqeCwgUwabHEfs9cEVvQVJ5ziL9bGGJ7v7LESsqHKfzJkXx2qzSd8SMQqjHCKJZgYMVL5EYQCC",
  "key17": "5hNqXxWP316Xeah8t7uCUpwv7XimTGTGWTzmiup6Yp4aGXhZ8hGaQmU8iMyYXLAZCgXhN6KEYDQfT2hRkSkoYtvF",
  "key18": "3dhVZSwHAAKzWTfDAyy1MuUswx748838Sw1jL6h5us83nixhwYpNak3HQwfVHJ9yEVsSugqJpWvKGiLrKaZfTiAU",
  "key19": "4NryiC97rZzSSfZ7NnURF9k3MtgXKJgCqA5bvf64vhSjV2sUhCAzPFw5TKztcmnqcBvCrp1qZpzo5xX59e8Je3BR",
  "key20": "5A9ENi21bPShKjo7gP8aXhd5xQuo7gErzZro8hfvuCd8UMoEcBWpKFBP1hm1uoE9CC51BPbje9kqHvdc93J6rrJh",
  "key21": "2b9esCuXVFR9XqDyGRbPrKhckMYup73LUL1ZKXzKhuQ5vjnUJXmqp9T8LnNmisxxdLX5CUNUbMsXYa6aokfLJmS",
  "key22": "2RMocviLCtF4EDasLzcRpFLgGWUZtFHK7e5cTD2PsjQ2JHxcVDzjhfThzqAa1pBYhECXBRZC8Tx6PKFRPBWcTrPG",
  "key23": "4iREgmpyXbNfNPxH61uvSQSxx39BRNWGdC2Huq6kfHcqqYHxwHmMWcAKxi4XpvEG2QxgYDVSwqooFsHnt8GWcYNQ",
  "key24": "3FPjVx9NyZsaWQhHzbNuh4PRmYtZxZyutvRBBa7YBL7YVUNGPDceCUGvbWVAzzWCKm1ChXKVehqo7mdmKXK7faHD",
  "key25": "5Po5y6uuCgfrXCnFJHGAemhcG4f6FRcN3pjFabJ9BQGgZGhZtQ56jaz4C6D9PJWK8KYrzvq14kJBfRW88n7S6nnS",
  "key26": "3pmY9zTFyivCDTAnaDLpZTW5Ph5Ny9c51HKtfxEtsZ8KybDaurTRax4rfxFSKbn7ai7dkLjs3EhDHdBC48zjVfpx",
  "key27": "5vws9G2CCAzeNp6UYPSuJm3BxyrqFZV5XdHCupk3GVXKu9miwohmNr4mrE7kLif2txgzFg6fWeWeRqNVPXqxtuas",
  "key28": "3yAf28jVwM4WDommuLwPEQUy3Cjj8XTy5ircZhPwEwrj5WJjkiV5dUrXrB6VpGMe61fg4x4ycniqUMwWaS6rkkme",
  "key29": "Ypjo6tqwFuShoGKivaUwui1WU839QuZCHe3oJYHZqnxsqUR9TUHdkUJa9LAtn7mmBAZ3K34oRMMrDwJR9MoQsnM",
  "key30": "4Tm2TNJ1XJrzN6nJKHkXbwyAXCyGGorU2PdWthzpLj2BemYHBABQscVsfkKUwjybbGQfvC6rGEdVMgaT7BgUJyYT",
  "key31": "4fD1n3L3jiMqZoMe5AmJSTerm4ED7mZiPb52jqeawW6Pn6NhwTpYDPGzCVS6Wxbo6EEwbJbKJk15zjTNNVW6RbfS",
  "key32": "4i5EgLiDmUZYJBj3H9tytpRVhMTXu4C1tWTWn1dP7Z9ab7pvXBYdDKm2agrNyZaJtqUFhgpL4LjfvuUrzXVsrq5i",
  "key33": "5qSmCut1Phnphd4xA29YbwsAYZ9K6xomujkoCt2REUSEzS7itbxDjDyasCyhW3p49Uk13MzuqDFdvRQiAdpQYKSe"
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
