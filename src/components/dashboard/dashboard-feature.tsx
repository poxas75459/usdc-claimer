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
    "3wXSgWu23JsvGvQeLKQTuKBDzJrPB394DK1o2dFBXvZSL5GhDtzjRKcTixNE623PTaZghnDo54zSwUAtpj8tNKtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AuHjUrT8JUaZAcR5DJP94Tigw35cbNkjoVV2nnoYo2nhmuKioDdJsK2h2oyLYTxkmvzfAqxbzNYL3ooats4NTvf",
  "key1": "3W9DD4ajvboct1z9XjaYSSQvFDfwevQwWtgvjm4Hb7FEgNLZEx34qtAopNADNfmRx8dbDwS2jraWYZM5FFfoyzKW",
  "key2": "34MMnxNytPC2TqGQHGhQg1MU1uLzrYNhLjLFvGbbFJ3ks6tgZRmjbZtvgSjsK8nTaEj1whTmdjXUnWjoyvVTikqm",
  "key3": "bY1PGsz2mbgUDgaL9wBjyaBgGFNsz4j9wUGmSTCQQjRgHUHpkCk3LRB75sKc3xF5rrfsPzw1CAoD45SB9KbSgib",
  "key4": "3kQ6ymoSpZhMN5mHatXkXsJ95mRpPJYhaWim4gMxT8d7wkNTLueHC2HzL7f4ejHBytEuBA79hoPzf11QZMyPChyd",
  "key5": "XTGqJajAhqhpoUneWhP3P8ZhiZwf1SxxTwPrbXCHQw53gCtkUvuS3FaycYskhcN3XbJ44vTZsCKiejWUzfkom4c",
  "key6": "4mvfyZyZHABu6TM7ckJ555rx4mratgRRdzg4FsKjfBhJ4kN2NNoWGnH5ao4AzZzfu7ZWA1UeAQLh1ij5bBjw3zgF",
  "key7": "5eMsG9xmMeU6PfyeCGS7xToNbFViLWACWXPywQ9zDV3XhMs6b4yeHS1t8Na1G2XkYXnqR6DB2vmCydVJrAND4BfP",
  "key8": "3smbGJ3CcYZUkX8uNSkq2NwQTiaEYKvHFJMN7CCv5sNPGpkxiGvJVhGkMFk33GV68Sqeh1ti1EpsyM6k4DwhY8ue",
  "key9": "2eshrhEMPEogm37SAhBWoUvSPanpwKWiYZgLfsXSBadwAf4j2w3CL56ZPjAfVfbbMwUkDvaA465mGCP3NbELB3xb",
  "key10": "2GY1CT685eVWMRFBbQ7jxj5wWJ9ZyjUTjr92GS76bJPDjpmz5jv7oEMyuZa5NWYmvUj7uxXjHwyBnnyFw4PHuJo1",
  "key11": "GHiUaHfp5Ss9JC3zcWaP6CEnAkeytv7NiLstwqgDRxu5yPK2JgMbyh8zjJdgu5taiZrz5MFkLmLt9E4VPsmj9RA",
  "key12": "cTUTEdk6YHBsQ8H77Q5UaQWYQjoyN735Drand5V6iR2vuuMu97b3CNMhBwmbpggVYxobxrQUsmxWGxnTJqDZZ3E",
  "key13": "6EZ9fEE9GcqqciG6tB6iZKscVYuCXS8zTFbrtzDTe7E5zcwedqwRXudjxpFDb9huk2cUGxSxY8FSreEB6HPf7Mf",
  "key14": "pPXt7uVfha9qxG5wsuK4xSq1ZGyMTEmHP8wbFfuEKbFWPiMuxuQLkVnh7Z2f9eKwL2qGMjdkiN1nBKHTYLY2pW6",
  "key15": "54RarAxxnMvWkWuBoRjTsRXpqc9Q48zCkwhRre5UvS6Ro7k1GRgDKa79WCYDS6NwntmB7BVk7hSsB2PK25Tos5a1",
  "key16": "5tXJWQLTxxUdPwTytCT6rowCvFQWhi8RkRqQfXiZbU8k5hk3AfQa8oUh5DV6Y7u2bz3JbmR68CdRdUX8rpmb7iD2",
  "key17": "2VFfcJF32aYQ4oLXJeG1LvmqvXLtXhyL9VEEkX9akuYeu1uiwavPXx3XBtuHBFfrixbZqyKaBP9VS1tcwNcF2MrT",
  "key18": "3QhaCH8uxZP4uUzV4vaDqid56LVqDLxVdob9A2Jg59eK47LEBChQDaWULqPv4rfNUQyRQ9qboaVes58tByBvvEvD",
  "key19": "5pzkZ2fhARwKnbFtx4wCtytNeG1RuuYvBEyW1zR5ZtX9XGhmmYr4LjYLbPteWQWmXNRhebVdnRDeak9EYAGMh56o",
  "key20": "32Mz6QyE53B4QzrgG24ZszBUBBURG5T4PXrLJBKH4LqoqhtbxUD65n7Y7z1iBYeNtKC8R4KGfrYEUWpdi76jqCVz",
  "key21": "4k9rw8WXeeVVBtsYCgEAQQcbjbj8wGf5zZ9JwAZ6T6gLMi22tvSKbcn5cCiJ3KnTWgPes4CqR5BdrZJDuHW2tJHZ",
  "key22": "VzYxLXEM7ZnNEHwCjCsG59jneA3pbBxA2a3xdh2juZR8SFAQMyewn6qN3G4RjWAA5JP74mnpwuYYGu4XSFbDfBs",
  "key23": "2vwt4G12ndyqYFejjAEwYXohvJwST2AoqWtFqCgBKcaudBz1m3mkUC4NAEN8NEn9QNsGZJnmeQKFeq1MfvMvE2zL",
  "key24": "aNHsE3nkPftLsWHHZB8MWEmfZtbtwaE6FEkfxH8GDooiW9iD5pUoWx4ik7HiJfD4tZETnwJXiFfcXdB2CV6tedG",
  "key25": "4hUFRcSUVmNp9a8GiDsicmR5ZpHeFQ5z9V6ZdrMwYvddrCdV2prL5zGaP9wanTXNnBkNR5Ta2x6CDaNcvVeAfUNV",
  "key26": "5RqEEFAUhojifjnNeM9bdHvay18pXFzZqEwKhQATkEqS3gSuXFigGGqvM92NYWLVQLiZQnDk1j1Rin16pmkzWTnN",
  "key27": "4QMfe29SvKy7TBcXG6XtBWorwtCuDcyaZC21CkkatAYEcfcVZWHzgndtRjk6viaYiUcPVn195yDJ54aA4hzWM4bz",
  "key28": "2dajmjyuc7yBp3FtKsqKEoqw5rffeVatYnisT3UVBJFKRQhVSPsod84UpNtdBVDe6S3yT8CpCKvbjaVNc6ogWheu",
  "key29": "2NqWisF1TDdwoYBrXgXAcwaCp6cgpQ29eGySLr8RrxowMfKMHr83YoGY5jxyGKmAEX3QKPcTfATuwBTtbt81yqWS"
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
