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
    "3Z7CzUnNe12WQ72YbGUJq6SmJqWWzbyV9eqKePmyDYK7q2gRmpfKaAxyu134xSDPEFWBWWHwMUyLTn8RQu8RHq9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yCQKVEZeVYuAhMAbL2JaYaANa1qS4n3ru9w3rLLDvJNLjsrzbNqbfW3TFZC1Y91RQL3rdbUob9r1bbbjt6An7L8",
  "key1": "3bTpUeZF2qQ3k8o9xUbTsxiAcqEBDg8stMeG3YXqqBUiTzRqDX4vRy5e3M8VtMz4c2tfWbFZZA3Mt6o34rAmrbim",
  "key2": "4hpauaEZfXck4nhE6PrAyVf95QBo9KQfgHMxT9qvkmwZMvdv4qq1AvHG4nmVpLP7YCyAzdwcpuoJDenCWbLAS1wW",
  "key3": "TJjxnEjeRJuuvcBPGsSLim81pbGZHkprXGHBG728SzhcpNQStyzp5kayGzqPCAaLhfYDnPAp51Jvgux5iQAm6j3",
  "key4": "yVa3PqqzhJ2GXuvzmSbU71qGbJt9ZJVeRPWZs8P5R3zqpbHVKfE3YvYVWTKXoAixKiMm4uCk3TchGUuec1CH4Ah",
  "key5": "62NEkcyMJL4fnYKT9gneKhQHDUqpquAHJcQz46VtfFDgZTWdrmoyjAAKUQDeE1CxyLU8tVNiJtex56SeSgNqwA63",
  "key6": "UTygMaXvrBiK2YTCazP7CdoYhFgcyEd1DJsetn8F8nfQ6EEvHE768QGxUn7CxfVNRVNArwJux2Px3RqYWhNpNhT",
  "key7": "WYiWE7MdEMArwobDSsTCorGhxcTkvZfy1yhUdrnTrCkMGjd2TQSWK8LkDqFTcnZRiriEWsgaSdbLBoXX36QQxuo",
  "key8": "5TqmsdjNczyxPoFPsTLQ3jSN6AM93uYR7fhSfUZPKB6rt39tdqyiocBBdhFL8GGdD3a7kF9mg4hX8kn2KLeCQYj6",
  "key9": "2CHw8dNY7wrgWhZDzKpZDDY2Wver2Tgk9oSawbsZ7D9DJDYsnSAsFrm76Ht2gZ967XwGyTRDanxRwkPgqLTQgpej",
  "key10": "36AXoXjTSZFokYkvAwjfsD9CaPKgX8Bzc8FNMsjXYSYMMSpCsgy1PwJkJKLD3oxkW55Z3iVyddWo1FnQ26ckiQuU",
  "key11": "2BkgRYdqas6aT5V8TKY9N69JrCVJqEBbuRgke14fnW8JJoYCndLZzrC8PxSAH9s3adBN1xM2wLQqYJ94PG4mLzJQ",
  "key12": "5jMyLTbPzoFzE9E81FNisv24X42H4XA2hRDaWfzdaXT17eAg1zjTwYMf6pC8mjsvUmQRU7Pun4FpGqNHig5FLoE2",
  "key13": "4AmfYjGP51enF2uu33WkGSd6PN9FDqa8sdgiVoVd6pUrpBfMYahxQWt2SJpU7weMRJE7spwA2aro4XdHhs3hQkYx",
  "key14": "1k3GXvA1S1iFpWmWkk8apJKRwh6G1Kbm8LPXLhJXr6H1Xi1ASVYm5kQUTsLGMtQBDxZCw3jfFCKm7FWo19foWAX",
  "key15": "2nx8dcy2pW6ryvZ3mmxeL2xt1u93trQVzbsXMRugFA3tN43USU9Pb5enoF8jCTe9E6kJXJvjqVhwXmNedMunFHF8",
  "key16": "iP5gLq2J4mDLsuMjy2S4DeKzaPtWNfwGxzXJpeHkzbWtNiP1DB361jMe9Ddc6EgY1sx8Ljcp4ZxQZTo2Gaoh6pc",
  "key17": "CXBrfDkAGAzx4xRQCxVUPxUxjpGoW6xtRH1ojSgYVuML4VVNkePT7rCEMiGWhZ1FnmGY1t5gWHQyVCgSERnPnrG",
  "key18": "63rBTDmws3XEH2EJmHGkFc9mxyHVWJEQWpcp2dtgPtqow3fUswmuddeWuzyyxyckgBNnZqWVNcsViynWUkKRdabE",
  "key19": "2msEcuWLs7U9TGLbXYjsx6q8ri2BhB8tYP1pbCFTgi17gbM8osuvMXd99vaWXFR3cwifcQ8kxjMKtP5r86nF19kQ",
  "key20": "3j1VHX3WfWw2CxUKmZn5vAg9PWCGsFYAuVbnzXE3SawsKGTcuL6KNyZBV8MvTUPhkEdwj3sHG4pv5XSXMAXJGCcR",
  "key21": "3gPGuw2CU3JwrjWbxNsJ4WdCcd5tDTi2XvWRdxSHV7EXiVHiRuPnY32opc76Xy5F4DZePaVfnQ7wfT84r9wNtEh2",
  "key22": "3k8nRxJebwzNXLXbHkcPZ3kzh2Ee6k6UkDyLqmWSrXVxiYqxs9o8Nx7MiB4t46kysDUECawxvF3WiAGW6Bdx8dec",
  "key23": "32qSaVeTmwM8V7hFkaJXvMSAuE4MBr8haMTCFkXzQRxQVmeXQjLDwJo8dsFrRBAcucBMN6Eu9ELRmTaMo4Z6u4X7",
  "key24": "3nRQGRjLEYx1U3ZSUDhvBWxcyrCx2QMcPoz9EWwBX737UBu5QM9ofPrAU6upjgrVdXfnVAMXZ65taJxkhxckPG5d",
  "key25": "2dLjSkz1m2PcA8JDmcd5rEgxbPFBEEvYBN9duYBvmmj5VSu9ADn2ccM9EhNEmohZxU3CavvZc3fA26mu4x4G1xaH",
  "key26": "Vq9ue4YSGAJLWDQQrZmpRubeWrdAVvT3Gwmt5VckqVU7EWYgs9X5LiLX214afHcnCgKxpK2YP1wLYY7deSmnYKv",
  "key27": "qPjoRzvuNnGXdTB8t4GNNc5jLUkaJkN9ToWdDhEujK1kbcGBuLYfn8vnV6H12rzhByGiaRZCwE7AW2tVrKzvLuy",
  "key28": "2SF4iAPvn1A3P62yzZVVd7gadZB3XXpmKBVxeV1RWB1NniyHsB8x5H9kV9qqi7KH62Ziv1yk4qTdEVZ21rYrAKCZ",
  "key29": "2AA5S4BoGrdivsHYqdqRTYkgaXTc4TTcNMwNHUhcvj9JsMunv6EQZzTkrWUtmi2P5wn6G1H7Co1aRjdPKGzdD1Uv",
  "key30": "59nD6rx6qvQy2JDfBNeWKKnDi2qgY7JYkQiy9aYNBJDkKqBsJKXarhZ1axb229aKZHuwPJyGt9B7Er2mRpoqUhkU",
  "key31": "2tairJ1UFHbFSEnqSscY31jNhjif54n5S4XPUdUG23WLbfQfVpvM2hBAQvegrZcrWBnExv8uUHPFwj5yDQMbaEWX",
  "key32": "3T2YSf6gmAZuXpCa3Cqdjhau31vsVYYbHCKxrDLEr1Sc2jmVDYYy9TGJugu5CtnvxePzUgDNQ6muG157mq9roqvt"
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
