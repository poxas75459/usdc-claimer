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
    "5dpwLDmzMWFv9cnWMFQaPbUXVgXRdV6WvGGqgVuCscXnhSWR1UXAq3KVDhDhwgDB2B2XtM5aFLL9EPthaMZ3rsXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XxuhXdquCxDYNrVKrwmJzjsmueKMA2T64P3KK2ikajsCggEzVFmsJ8BtpqqwUCat8vqoB6fXyuy7uv6fwhHz6NU",
  "key1": "5Bj5Ad8ur53W687YaUJhBeYQFUa95XrQP9g2dBei4qT1hGD3KaaRU2pwXQ4GE6Mc2wiQ3zTPJ6QLbADR1FSaJU6W",
  "key2": "3T1UZu5sAbYkvpQJ3MY8Fy35CDJKBBdpKmBR5VCt6bnA2cVc9Tbxa8MT98qb6uJrTS5VFPAsRxmy4sXzett8zbr2",
  "key3": "4A9yiuhH4YW9zrxhURoTV6JyWsS4oFkw86DUNLVNbMZkpTLPDsdJ7jvte7kQz7187QrdQgCvjpKhkj9Lxrg5NzC3",
  "key4": "35ZHELsFGnL6A4y27syQbyZfP8hYAM3agMJ2BUss9BYopC29injJW8NdPaFbT17fzyVVu9GkdLD3edxpALar2mG4",
  "key5": "3kPetzNnusPcwTqkMNsjf6qNcjQaMnK8w7F7nXfpaCqEhE74ePU4s33udj6UkcfbQ2rVMwQiBHrn87Jn4qrC2kS1",
  "key6": "66NoABcW7C8CFirSiJpELTLT6F7EzPa9zVLHh86Qpg1fDh5xyfTWdJ8ncfeNdJ6VwrwCWqPAu3DhPPRJdViKTqhQ",
  "key7": "3bZFi9iZ4w9medeUqPJk8Vuc77q5L4kPkvBN1TDyUXiLaEbpffAUmrX8vXSm1jFpVQZG4VtRNknGWHkM4fssoHHi",
  "key8": "4G62Sgg2NEurVBcYxCActvDnr7ePVvaSb7sX8MWKCQPncEvGroNwBfsE3YUGMhQ7KvwnXd66ba4gsFoVKYfx6rWq",
  "key9": "2kJFqCNAjushuWBtcnVnVo69Lc1WoyDiMf1PHJhcwdm233iDfL16VzP8293CwmghC9sXMAzwtuUPXKrMKLiy44nQ",
  "key10": "3VaU5ZumN6GD6aqfnYsFnS3NdN6cm8nyc4U96T3B3Zp8BxeS3UbR4hK3LdUQZLX5qsLiyMoyTs1Mc47FnDWU9wGQ",
  "key11": "62cVaeyKxHK4bMdMiFkoxChtEty21UqabLVcFUFpvwcoV6o71NScDtJvYwe9NyAJnJDeid9LBWQJSyM6UciqcsNa",
  "key12": "3G38u6gqyDKhQpL9fK6FHtTQdbCmDYr4Q2ybdp2pXMMfX4ikV93QL6A1yg2dVgnttBGzyMXdUisrFzW4YNKLPCqo",
  "key13": "4rp4v9HVCQw2nnewWpqAkLhhdLQf7465HDmsqWm2T11Hva9zpAVeobjHwA8QrsFE4T3nPhYYymarcVMvNfKBfpF",
  "key14": "4k9B6kaRd9pAHQRTsGYeqMYBviUeUnZ536LUdc1EV3TqLwwDcrjcRUNAdK6eoAHT9tDD8Z7uGqGYRuybQ6GoZWpw",
  "key15": "4aDkUDsaTWxZxvECyJvuFoR8iyjdX11N3PcFwueCWNvy5H3vLynnDo6Yhd9x1uBrNCDGFC8V52kGwCzR714NzAA6",
  "key16": "5ujeeq2RsTEAnq8QLdV3bM6gVCAZB5mF7tScz9NhjhUkNE5GL82cN2JnJn1VzDeXn2GtGZWteAsXkAeV2jALHC7o",
  "key17": "4qZns2ASj9ujf5d8hTt8Pa9iqegtKTWoXp5g3VP5zzW2iQJdk47gvPxFNiwsa2y7zLnbR81ivuDSqBFQQ3rDyWiZ",
  "key18": "47ZSwYGpRed43nVQrQeoaYGpWBxEJsNDKhGipa3oqwXeFbb92VN4GMzgHgJbZ8WHyDHE4u7nHBMew496ZxFvTLCp",
  "key19": "3xPHhXVyUhRnAGghYvzoYBeom3xvdmuFjLoa5P8mKkKeVjFm8NeYFXhvuJ54AmrCq8vAgvRewqtU6e5iGPGmbtPT",
  "key20": "5WzDCZ7Wp473zg9anxZpNN2Bh4LZd1Cont4XhPrumpohHoYgvG32ijto7uZupJBBxswE2rSkccy5hDxv8WJXpAcB",
  "key21": "3x1WJFV92VNkeMzTJZrk5cbPmRvGFE9Q5NCRcjVpPprmCERpBqcaUiT9KZv2HCwqPgK58kdWAB5258xL1KECUpEm",
  "key22": "47ZZPZxeuvJkNVEo9KcTgfPdgtYxriMPpb9tNocm5o6q2ijhtRNh6Jvp9wLHBL8PhLagfBaked2WqKRPgUGoeofy",
  "key23": "ohuKse6y4RUqFqbPQPQ3Bvw9aMQP9Z8tGMJkoobYL99k3wUycYsSHyF2eoWJc2C77Bst2y9geX1TR36FPnGDZC8",
  "key24": "3MJNj2ohChK9VbwR3YYkpDYF1BMBN3Q2EsEkAKLJBmkXueseq7AzDQyXLfxWdWHHLvbsrEzQpgdWhpfR8GAZDjnR",
  "key25": "fnzHzGRJKxoMhoqt4ZmtA1FNwmVVnxzoa69F6xpRbowyqWiZVSTzEbp8zCAg4jhS1to6QKxMLveapJsPvFMgmfZ",
  "key26": "4Rdhtuju8ubA3SoN1rQcJaJHQRZULx2e4bYyG4kRwx6RzTULy9q74VHRtySddfXKrYKacGqFxttoF7HC43ybSoNN",
  "key27": "5LRTqy86FTwSKp3DrzWuSJRH3AaEb6uHtxEh6z2apJaFqxREhCCPfDvVAGPcnfnojQLtZkVqNUACBxnBk9phXXG7",
  "key28": "EBCX7JJyP8ZYGfVHZF9b3R2XWpyQrwLE7XmY1b2bku2GqM5hfYo4ZZp8uQrd7yHt1tGN7FHfV3rvE7hzhCVq8GZ",
  "key29": "46gAK8gaeQ8Upxo6oKVsJ47DVwEGwWMNRWvZWs1jjRzoYvmDZqkwTQeYwSMEVvGY7mHxpd9fu7XYt4phHiVBxz2E",
  "key30": "5P9Qqobq3D5R1oKPJgHXtR8tYd1dUXoY8hGNSCk4wk1fTW5LD5MRCsoczCa1FxNzHyg9yAWrQCnpBBPtXJW2hPFG",
  "key31": "4W5Kz6dW6KBggKqQh7sifN6YNFJCG7yK28rvJKGrKRNsr7GCBte3Mo3KrYWShhE8LXAqgEAsgNaVF8aEQBS9UARA",
  "key32": "2VAQHCMPHGd5QqCMyjbGGpGhRGg1CZpJiZBvdtphgPqAMNkzGeAWMaKtHN8MjmkxFJMEpknH4D1E3B9LxvfwMPPV",
  "key33": "4LJZRTXMm3E8ud8K3yv6vfkyKF5moTV3WY1xkmHFtdFzEY8NJFBWZB5pW3fUem7a6gLEFXLLM8JCH1FFbGHS6iWa",
  "key34": "4DE2WzYWe9iXMi1dteNeWB7RWvxKoVancpQtgXUoaYsADBLfjYdFcjtSuL1BH6x7Wru1ke1JKjYqi5hNd8V7L1FD",
  "key35": "3XVvzfPmAbVnp44DbHW1voD9yJxL8Y36wciZT67s4CB7QED241cX3Ryj5bg3oKsMaN2H8cnJexZjnwskHBW3Ug2u",
  "key36": "4Ae9tV1NCAgdGS8UvBGd36QGYqfM3wLu1j7dfKxYcvQNYd8PauCMw5DKrE6SxD1DKgAEYw5Z8ZbeewBz5uCnVqV9",
  "key37": "2dkLR1wG8E7KxTKpdWRkoeVhmbEMr471NUthishenfbpeuZtQpHZKe9uwQgRgmDoVa9BHgNxt6HznwrGJXrGbMV8",
  "key38": "4xqXXbRzoj8st2L23iMYB2a7wWyamYQoXPLZfQdV3FDEGK67c7rYu4bAc4bMKw1hrUgCEfeaQ3hEs3c3v51n94Bu",
  "key39": "3hFKADBwThDxUzAiKvdGt6hDezkyW1VKYUKdFaTB2XoBtjgK752GUni2arYz2q8koojQGT2oYSwHmSxgyvNUv7vR",
  "key40": "3dDnTwiTbu4mM1daYZPMg7s6r5o195YY537q9V9zaXjJ4ptUzTiTcvUbNCu42L9bH7oYpgpncL6d9P3wAju5YkdX",
  "key41": "21wWCpuJH7bupvhEuMV1jPjzHSV1dfVDcQZ2v4ifLxLFV9Q1XCBEyC33LX3L2q2j1zKm34u3wAML93zwLW86WNar"
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
