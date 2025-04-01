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
    "2MKNqwEp6ZDQ5jZF1iXqvvL3dMtwUhmybWHtyFvEKvqc9ZCisZGxtoKDYSg1Euv4ukYdEVnVXc2zWnfX5dSy4j2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aoCB5Un5qZFj1KT5dAV76LYbKpmRQDe5L6g5Fr3i2WivkRxk8vKqQAmWWHoo6b5qbnwh76e349DyhXjSTDFooMS",
  "key1": "2BVR8ZdjoMG4T3VGZnntnoetduLESXuodHptEK9L6AcB2JUUPm24s1fCGEMFaQNhL8CAUmAExQbocwWQiJoc8TC2",
  "key2": "4h9VRjE5mFgxtfYcecDynZx3BSW5fj3NY2wEs5RNnfpcJ1W9kz7JRE1zCUWbMrQhx4Kis6dp8VUwf4Ms1FVPQuPz",
  "key3": "QAHYbvdNdLweWdaxz8fJxsqAoYyo4DpVhiNRXmpNPwfC9ggvB7dCLhQhTMygFGucrYyjdMp4DzK6UkCr47jEb1w",
  "key4": "4LgbKidJVHM1KbArdMxA1CHufRxpHLcpKkB2kKi9CUs22mYzKup8CpAJuTnRiR1B15yJXZ4VmLhBhPgWoxBmDgL8",
  "key5": "N24paKrNvJZ12drqnXfsSkE2LCGHigXqqA7u9sXrf6BzJhLUc6Gqzt3WP68bSdarCYZkhXxKJoG6Y7ZSdpBVPco",
  "key6": "9TbRTin1bCSBrCKssaD5GRPXsJC7AksPUHjWfRXHSCJKHWj5cJQXq2xEiGHf1tHVLp4gmXnmfgBTrpYnQyNtPD8",
  "key7": "WcK2yXsWdnRYkKPrqZwYqveDkxDiFzLV4uwXsfCtRC7vVY3RoEcQQuY4cKWaZuR6yQ85Z3VdrVsZq1vKpPAFvPh",
  "key8": "5ZojVZnY8Z71NsHo13Q8H4kHHV6eUgqEtijsdpNhNGM8UFxq3d3WpUHQh1LW6brgDr95FREWZWA4S6V7bKV7W7vQ",
  "key9": "2uPXGNf8mFAFGr2vbfqAqJkmq37EdSq8D9czKRo3WsMEGdV44Yhcuog8MVz5hUDRoxGatN3FreY926HBYTJyveVc",
  "key10": "4GZhbtk1KvoZBvkkN2i3j6Z86gB1coLwNSYxyf7sQtjV678vLETpniQrh5NuXVHZ2snnEVKX3b1JyrD1UvZ4fHw6",
  "key11": "2GQgkQ8gVtK3bdGYxVpydS8jQVjySfTHs8wiwFf6nw8tGF2Sdo5t5zcAnpfGfq9eeA3k1LDZmPoXmgfbSP6HNspr",
  "key12": "HoTmKbzMmEaDPGDtbjzpXEzb8Tj7NQgQ7ZyCDyqj6ab4YCLKBN8b96eQC6JqekPy1RSWWEbjYwjJSYz7JHtJM13",
  "key13": "4AkZP9NUECko53pBNDeRJwn49stVUa1KrHreBmzrUpuSdZmezVUJ9Zj7xD7nAmpWz9azAzqWNh8WqepXw8HZMPKF",
  "key14": "3eaRj8LnVdbowR3Yv7RddFeqEtnRDWu63EpYJZ6EoHLLcWe4KHQQkRvoCEXmskDV6bz4Cd17DrFK2i2qceuPwck2",
  "key15": "4FeLdDkReMX1FaNVm2VkSMxHSiM6R4g1WEeTD4Naavjyg3c5RrvzaiJgAEHWiFdHajSvDwocmqDa1d68hZsxyr9S",
  "key16": "3Vqy8oQ6UXBNY4FSSGVNMJkK2b72WmHu7nFdMbg5Dziu7wd9GZe1oS1bh7P3i23zJXZsMBYNDne2U2bt9LGGinac",
  "key17": "2tUy2ndSD6Jw3UtwFw6eKevH3bNZM2aQBA9VTFA2br7AdXLhJtGM2TBsvQgvHnEeYdgucaNXMYXbMCCRd48YfHHn",
  "key18": "52wSMdQ9FZgPQtNTZC5jV6QN645mf5trMT84ETRSz6n9SrDwrLaBXoJaRiQnBwZK1s3T5TUG9qNiEvqCNmRVCcgj",
  "key19": "4vyLWzBE4MnajFXa3y6Z7XC2asVdMcqaG1T8HQiiZ7oWxicEBmtDeZdLJJ7aGBhoygqdL9o7e8YZRDPkMroPHpyd",
  "key20": "5Q2P4K7c4e2a3dcrvV5g7RuJmfamJaa2NgMW1B1Pyso59mNTdavjefom4zLcM9N7rr2DrP1rmKrSrDMjsueLys13",
  "key21": "5herEin2PLe2opftGwddGzAP7vKb8oQZwqUDGPZd4bMfk4dFKBFi3he6JbcL5gPdZbD7KSC8e64ZgNtmki5Hyajp",
  "key22": "YFkngKrBqyyXEp7bSc2LvuTQYssKYQswnPGFgh4up4MkmBsWERaPEp2NC2HRKdLDtmPPXpnRKDyn8va9HnqQrmy",
  "key23": "518QXfnZtuscJ941334VrC11t7xz8VmvnCStz53RYEL7DoTLcvkFJEYAqpNnvqoaFpCSARqUb2BTvbvM6uUpmozH",
  "key24": "2GrBHEzVBpmv1br61Tag9oCFnbBqTvPLgDoToJpg6nCBLXQ3ueg2snB5t3GHiHUqfYxVuDgF6KUVWefpute1JuCn",
  "key25": "3qxUSPRMoAhEUhKUVB7Lby1uFd4BuxsXgomg5XnAT9esUhnERinrqWDY7mxKZvYMGwUjUX9CUqyMA4mqo7qKn3A7",
  "key26": "eNuQY7s2E2jTmJGj1HD4p6A484zZ5UwXaHQRSBezLbRfvWerY1ACZzSVEsVCJuYcLkfcX56EMRK9VaCnE2nDMt6",
  "key27": "A3ABtHM1FDhrTJWhpdyNQ1MoXkXJgfYV1j17YzR7pjoT4Zw61Cj5Scdi8NQnXiyyuYqAmy4PSLkc3N7CjXxatgT",
  "key28": "5KnjXALYxntf9U7vgJMm4qMDhRUx26pgg46hj3nDH7x5sjtdiCWn44WvnNetPsdgo8Ya3yBhkSFznzy9EHm8g1Tj",
  "key29": "5GRNGrqkKWoQzRRh5Lv7xLVwgzu7eiKfrcwcFDmq4pEwPbnP5M2Ej5TSqhu4JYEt8yTQ5gddQ7ZriX2GSQuExfcG",
  "key30": "3bKWYqBE3MCPZsxUeSsF2h6ufZbdK6Dyi2Qidxkhw3NE9VdNsuxos7bjwzmfCZ4G4gdmYR8GPDBc4QjmKGBg43dM",
  "key31": "3ABngms3WTj9KhTHhzDxsYpKyMZdWvhiM25iEh9EcZEAeSrv2DD75gcjesEfPHJ97yxykSeVHXvbUbZb1M1MJstW"
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
