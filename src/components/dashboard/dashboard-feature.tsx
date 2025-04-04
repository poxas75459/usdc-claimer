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
    "3yBZWaUEpQQ7YZvL8FyVGL96LXudmArwHpcHEvSqu8sKQuEdFNFkwFYzN3xhrPTRDbyb2DtPAmyp9FqGB231Gdm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TkT65VtJhrefV8F4t9eXZMfDADd7L2AnCW3UdFu6FbZQXofGQuoQHXBQDNtgioMvXk4PheAaSR8xEqune5hrErV",
  "key1": "5AMGd26jSr5SfJ7ZARYNcktSeZ4EvnMQGtwyEPSZZJdK5Qt2kiYrYq6pyWpPaYMpyALmgMoBL3HCcLAFrDk49U64",
  "key2": "32SXiVCesWm9iXmKghCwC3mCqXYPRYAgrHafJALV4GSV5NRPXknCvcQWzuHMA6KccjfwrDVQcQDuhfaAfJkNSrwS",
  "key3": "4T3S1Qsm1yc6CKJp9DxBtw3XHKnkCCHzJFagNUwqXc6GPFPGo8tL75qQWCFNnnsQ4CF8u3dWtFCLVVSKpRY2gzkb",
  "key4": "2Q44sRzbxzTXkum2vaYwVCjVCignkghKZckJ2Stk24kX9tvSskkeGxU6U1rWC4mgXz8AcB2CMdoBmsfTaLL2kPT7",
  "key5": "kuC5T5xMKrymmkQPFy6NuFsjLU2eS1UTmahAXVpstybK82TYQ8YcpGDeK2U9XCLYnrbVBMcCy6iT24HNRg3XkM6",
  "key6": "5qiqpoQbPBs7Un2EtfCbgQ7k3UoPwk9NszSSnyo4oMUUkdbJRrhhM5jd1NepE45vp7DQpe7pxWPqZ92sPe7carLS",
  "key7": "3xymMpWyhy6gT5CK83qwEFgwg37yxrmR1rMWbvmeqZdC74C55BDZCWdz5hhqiTS4WfmKYkfhyGwbYzywJ5TM33kP",
  "key8": "419UFa4MD61Sf7WrrJuZHiFj62MEUxiW5nVMSbUzm4Dmth324oC1nAJDD96QB5ajrtyUN2Z8Zgr3YVr9qrQWh4Gh",
  "key9": "5VchCqhWNHb5zEMvEiwKcLuAfuzQWKejBiASFbSE2V4139VAETvBkRVcbfftCD9D3gdVuJ33GXUdKJLsZsJ8xgGk",
  "key10": "RZTkkMEHKi6qnM6SJZPwEfKAujrXKbRwpZdaTZW4pZVvKFRvCijx4E8crxQzk9V1dRr1SJSYgR49H8uUt4cpKBE",
  "key11": "8LaFp8KQjtxXQ3pb96c3zuh3caagtLyucpcXB1znwBCkHCUgJXYurZ46YAnWxSwk7eJKEGd8SkeHmhGZ41JpSVS",
  "key12": "E6VEvAA1B1MRssvRPRkADAVjZsNgum84soufWkTcfuQY9MBvyWtBrWPE3J4a3w35zY7uLwsoNctWarz5wvxmPMx",
  "key13": "3uuUDJhELhc2HCxaNbgvgzRX4V2KqmPyZoLWa5vrxXV3VacEVJJ5afep6yWjwDLnkjjywwgxbYZyhy6KpL6jNdHk",
  "key14": "4cgQ4dMXt6AJuyu5DgcMg2VXn9nv26nh8SAxDN4arQ6K78yzZJrXYw3yScxsxbjDLF9hHQVMnzyXCfBZ6PGFR63",
  "key15": "4761dVw1KutUbRq9G1Qrsx3xzuRFGk6t7giYg7NAeXkFntGLnunQGthdStySrTfLkngBJYPdid1VwQLU1kYdvkKc",
  "key16": "33jvwt3gbLHctKipDubx5der4eZgsN1AuySxTKZpikZDXR9yRcznDhj5mvED6VR5N6iMhF1XSaz22qoWy9KFJifT",
  "key17": "2G5rfZZ7dQuhKSria4dGBFjUBcHHwDA3z1GRaDYLP2naZ1TT4VYcdwD44pv7UpWRKXyGRWCsTuV2kTTs8DUB4xAN",
  "key18": "2rXNZjfAxVrU1Ttd97bQHGRikDbFaYEn9XUmemdSkVQVRcb7eqRe43J5PkBNVNVwcESF8FA8HHTq5FJPg1n9Md2L",
  "key19": "4R4LojwEESAdMZtp2cNBAJF5Wq8EodTCkGLqwCaE6irJRp49t72Ht9q6fuGVAhZPoyQqainynokq2skk9asRFgK",
  "key20": "P36nvibsk3hmE7kA6HSLAh7R14TyQowPwpAZdjkRG3RsW41XnxafGT2bsbRWeEZtgM4HCYLAktJsJSBkBEzPRTj",
  "key21": "5LKKgrhdwHYF2aZEcWHbT4J55fj2ZWntQ5dYNbzAbmiSSL7cirjpNZ5qiG5znfQywaWs4g6J2narB2sr3DMdvbJF",
  "key22": "3XK3x8VigB28haR9cWBK83NXYu2hGM5UyzraM5P5iTHQohqX4hoyFCi5kj4Y36esde1Dp7TzD6nv5Lnm2zWQ3qmU",
  "key23": "5nbWB1gE2AtHkcaPT5BG6opofytrowuybVxWhsP57EDxcscHgtTs5DvxybfLMKNwcLsbu2dDhzR9aAds8k9zAhYJ",
  "key24": "369iR9oc1FS4koU1xjR7JwsiPxhyVjdv4aQrqeV5ze5nMQAhCNr8PMXShN2MWoyxmT2vPk98SpTWZscThGn71PWC",
  "key25": "61okE2pvdSsWxYL7gE3Nck8wkzyPmzAKBUt4mQHvs7YL43PtHTcGQnsfDm2DPqUwhjKw8WcUxYvDvBHp34LDaa8C",
  "key26": "4awjncnPMxURJXDVN6fmHLogjSCBQw4EagKQQjy62KJExYoENyDSrBwzCTMDGc3fFhdthghj2vAfwp7eGQ9Vkto3",
  "key27": "3qcbbM3WAtcPXTetBZXBAUE8pdtwH7uyxLMPtRRLiVTuESKDAcE8ie6h3ZEFjPyY25q3tocAv1EfUPCXcmNnKgtB"
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
