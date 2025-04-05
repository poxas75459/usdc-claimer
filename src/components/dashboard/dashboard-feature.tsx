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
    "35Yw2HrCvupwbVQEkPo8i1A4yXUcuaRjRDVrFzFNNRSRgSVy62uiHJ8EBz6tMq8AcggvYZwR7dVZPuiwxkYoBYpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61s4zC6W9tki2QLDKoFNRc7G7DVjWoBvUzztTFioMhv9mo46v2zzLuv5dn8D6msbrEcyQpfxnBkWMKctAXUNwDfL",
  "key1": "5m1pDJXozw8jMGXpqMqMMoH5CB6Tc7BbJ5sDxdbo43ZEvXKB7t1gkaXDuoqMf5TB2KGvUQu3kG1CHYw1JPAKs1rf",
  "key2": "4DrNNRf1U4GSmH7Xnq3L7Nh2vD5yrnvLkEik2JJNSEZKy686QZsyiSuELsXesg7maCmQxLhcTELxpiSaqU5Lryqb",
  "key3": "3WBF9J3gnLjyL3MCp6y8mQ6wwSTfJmQ1HRTG4pYTp5ie22zdFtBSh8DAdhKhCTahw5EmM7g9dymGzMpLkBxzcmj7",
  "key4": "28bcePGnrTKPtBURYNHoBztNDfbxRD4hApVMz56SB7oc2gYrXAMGbvYsoqnyDHQiCFdzTHTohFqAqw2rmStTWt3Z",
  "key5": "24yLPiHnqT8TPTFUa3KQM3nmBPME1BUvhFvDFVgvJ3mKpthq4kUUmeXqUFSc22u13yzqRarW1T4kr9U2biisTx6E",
  "key6": "49YrUDeHywozpwaMdTPw9vyvJiyKdKbmzWPVzkPUu445Pme1WDNZZoAuXzy92mfwHVNf6JydGq36Mom4gWTfRmLV",
  "key7": "2b2AQ4KzWTEnCGrHKGiMaQNvimmxrLLyfG7kD4wVeXkxDNR6AjTtoUjb3uBBj8gjoY65wNrPL8CZ4vkH2gUjjFAH",
  "key8": "3SrPt7wVdvL78VFwvz2FjmGs38KasqE49iUdZ14kcu12ATu837SfmTWru6Wvy6NqCKU3KvDZb87RK25MTdQc8299",
  "key9": "Cvn2VgPM7ntzwpT7eef6qkVdwao4k2hryv2uvgm3j3nFNymvQPs533FZzPe1yCB763GUdhRa4oYV4XLbHL9RemU",
  "key10": "4tNcuN3BaBtjKLSVLrkywEPx8auiKQ7yBJHm37yhNToEFf1aakcpKYnoq7dvRxf4yDvYmawmQo3fNho2TMz8nPxm",
  "key11": "4SKVVcd9KGD8E7gSyui5befqhGRpr7DcZgtXU8w3mgjEZMJ1ZSvVQStouNHbwmPfyYd2GD6aZdNkGv8eY3M1Zvxc",
  "key12": "W5LXHzn2kUBCvGKB5fv7sFydRy8qzaUgoSUdrvsduxz9ZzD6xNMdvqPs9Em3EaAivNuCznPd9hMNu1FLNY2nCKc",
  "key13": "3P4bpryNeyXdnrRg1u7rWgLHeRWV4zajvLqVAsABmek4XNLaBRR84vvubNzZybo5oCgCjNF9qqRqfYiaTzbFJ76Q",
  "key14": "7qrVKXjkaP8b2DN3bhqkkUeGLeUJ32h5mT78NLxJb7XeL835BKaFj4cuNDbcv92PA77pSBRhD29ocwpmuPSiqbW",
  "key15": "Nci8i2qxzWme7HcD8oux1V6w3AjZvGz9i1RcM1aTaLKH7PAQLN8u1kR4kBt4gXyPcqbdj8NPnGj4BBXFCAtzy33",
  "key16": "6v1gshk5tpo5vqKe62Vn2RFK4eh79zUxTsDevCirrwab3cBiNN6ckPmpVVsYsNrBpUaDnbJxB9gC1wgs4dqFyD1",
  "key17": "A9M7xAz47VWXBujYWm83Nt5LeoQreZHTpTdXDrV4zyHLdV5WsC54oCs4C1UuHBuEeHei8zBHbbJ5H7FuZfTtky6",
  "key18": "2t9DEmBfpo4ZFJhcEKn6Kb5G2UdNfrMQSq7ChAxgwcY7mKB8ny3TDW9MXJ1iX56PHrcg2w9an5137kRwJtH1ZGxd",
  "key19": "3TdKSnTHYEocWaDX9rH1ABpSUsCrLvmvETUZqcbJfjFmjzLp6rw4VXyXpLknNXJFUZtbdobYF5h85ofyZ8DjyG65",
  "key20": "34QJ4vaCer1uBvP9yfhDLQBihVv4bAH7BhGsdxPx5K2gaFYqc4zHHLCEKdoXuQLweA142X4yeWjqmRKjVNhFStea",
  "key21": "2Lzyk1F2UUpoq6NFoJPjJ5GivKpkqpmBvYgznY2JpxmvcSuBNzkteDDHojJudb9p8nPDRj2qJ9MauWKkWb5fVxsD",
  "key22": "3WnR7PkUYXsrBnFz36R652MoBiPmPq1fkpidG9CDYKdkocbSuvyRpJSEbLwhQnuQvypDvWTPCuNwStzFmAPs7Nf4",
  "key23": "3ZNAQrZUNQAYTP2UXYwZVADf2vZts7SXhVHnSwhZ9APmgZxLN1LiMKHVz3139EmcX3Hv8v2ohpmrQjPSQE5cuhan",
  "key24": "28tmWVRw24aHxn6VHz3UNCRKKyNxjhArCdsYCs5uUiw3CKyWV38ozwZGK9ZiXPpqhbeZ9Uha2Wnd5psLMCzHiaoj",
  "key25": "jjn7CZJrfFA2yL25TvDAeuTnLkg1CqBC5DYuaJbRRwEfAC8PFBZZif3rcRry6qVcSQ4GH1oWH9iimXRncnPegs8",
  "key26": "62Mfs1CYihqBkmnzgtrSgmrgXjVNSFitPRBmPsEYVRcgdC2AcBRme1kbNMsijh7A799F3WcgXKXSjJASu3D7YFng",
  "key27": "5sQbrznT1oo95dgUevKwLoyxtTXCj4e9LoejxL1pHHemz2kbaFEt4vVA6wdiLCkwYcWxVVYmgsC14ifyPtDoh1vF",
  "key28": "4o3RWndW9YAkg8nn7UMyJboxGRmn71pJgJ1hz9mRqSLcSx9BRd3zPefPS6zENWtssxhbPWMcpGuDdKV2g5awwK5n"
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
