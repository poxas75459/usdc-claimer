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
    "EGi8bERVn61hviQwVxJs5vBQT9J7PUQ9RJwhUmQm13nQcpLC8GwJXFiKH5JPvmUoneT4nAQUe5d71nDRvdSi7ZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rm5YGiXMKZCKRcSGDLMDe5YtkYpZqHsRfXXW4B9c6pPWbFw4EHyyBBaN7Nw6tLE1GkpKD73Pohk92grGeRJewUz",
  "key1": "5mNAqgrXrhL6nhvShNMKGDxa1WmeS81wz5XcfrdPs4sjg1bGpFBtNCHjd3JfzzSJ2S2LjFS6LDsCcMq5MsXdxfBw",
  "key2": "251iErZRxKjCQRBKM5MpumfoEvjhfn2VKzw5meagmo5gUCbmb6USc6nRKVygFHqYpxWva11dybiSoDW8HJkzXdtb",
  "key3": "3gQ4NvH1agmPyLHAmyChyL1o5bzWFMhub32sGfqHh8j891URVR5Bv45zaqG8Ez7dY9T34yqM5cKBFFyFTAWUzGz2",
  "key4": "51c2AT7xPvajo45b7ZFvtt7zJxeGJSgVZk82xcTPvPJi6hL1sryJkMmxya5wJk6rjNNRMTPT1RGwqAMtfffCvok2",
  "key5": "3K8hd1WBn9acM3Pq1NWkHt5rrVsBPRRffKEjKNMHytcLsuWNfgTFpVPsYvqyGQMuZAsrSqu8udzacQkEMZfC19Ea",
  "key6": "Es9fYJfBvBQad2XqiJKxjF5UuE3HuVmcSjNqxdjJgJXU1oUZmCkgMYcYgn415GnEi7ZMjx6PFrLmWvi9DmaC4JS",
  "key7": "2kVYrcCGQWVBenW6x8pjUFXjnifboNL5Nv837vow2y3yktPAZ1EBQR7XE5p48UtkcH9LeYy715m9Vq9uCyyjvqPe",
  "key8": "41dPirL1ib2xjW7sfq8MxDTHavEicXTRWwE2RsrHjgmgY1H5f2aP4J1s1eCWef1M35rhYKSdXw7zfAbJxxi3fEe",
  "key9": "UNhgc8rxzww6j7SMP5Af8FvsNeeMpfVcSA5ckZwh7eKfH7TjoVLj8uneFAPqieJ4sJM5MH671guSBwCMc4bcvRT",
  "key10": "4Ydj7uBU4E94ubAJA9btYdS9dgfxvNeZ78HcRDNUsguFTCF6LrMcAshZxYxMmGVNpcnXXvj4Erj8cZF7FFPg1UXL",
  "key11": "DRYg4j6MCgUwKr6jdpKifQdgreaAp3RFPyTm9sDskP4r3cTXiyj918FHqE2E1bZ6KroLUDohNfiS9gHtAAMCFiC",
  "key12": "2Pc6iuvPccbHVW4RTVYiA3rvyUFX8Ceeiz316ojCCkYpVxB4NqgJ7Wqke8q1SJB2DsYXwKrRDKsvDbXmXtWxrveE",
  "key13": "36nwezYfXw9eA9zadD6C6NXdHbfaUjqbGwxsyKNm4n1z4NAJHDcdpqw7Aqdz1g5eWGcA4uF5C8K9ab4LxEGVZS5m",
  "key14": "2EvRLbNuvvjZP9MgHuvraxJpB5nmzqTnd9T37JkgQgrmLJ5WifU9iUdagNEqurojTDJYyq3BCEmmoLMW6eNEwUxn",
  "key15": "38wSWdyYcRjwuYEkunCjS98uF56Qy7eCmYn7CmjNmSWEbJRLt4pf7HeU6GJgysALK6Hp4Ak2EeLZn72G33Ew6Xv2",
  "key16": "J1ToHwYVfKnNCTtgY1qe7oLhafSJiz3qCCrua1SUTQ7eu2rvmJooFcapzV6V6RJQ595UfMWPquL9fiH31kfs9TY",
  "key17": "MxFSkGCUotVW9tP6s9HhP5FJoQ9pyJcUNqz68Js6R84NhJMRqxsXcXdspiNuBnM8ZJtsKDYjE3TaetiDrhGCe3a",
  "key18": "4pvaftvPAqGsTbTmXTcfTGhZ4UtohUhXgDC1cL2VhWNu6jacwuweMGr77bYZWTLrTuVwPX1AdPHodc6y7DDdyUby",
  "key19": "559Tn6PCpw177vr9qv1Ex899VUg9KgDcsdmATb4XSGHKiumpoU9iHWuSCiMQ3vVGvmGaEn7nJG54VvzaobX6Fg18",
  "key20": "5MDv8iNZw6nzY19j548sVjU42yf5WJE4tXWo1tGjG1RkEBfiMTrCzaKKioo375a9SPPzxLR9bMyDdNacXEcoBYZq",
  "key21": "43gyusVsarp7E5BMTFsAY4zZQ9TPeYWpjWvbKAMPVML5fezcAQYhnBkj8LQChVmTXcB3K8b8S4SpLabk4YVbgUPL",
  "key22": "2yTUqryEECV17uyvawgTiQDnX5LHCYuvcAPyNpAPo6MLn2bMnzgPT8661GTosCoofkaYKaqUN2yRj44ysAjvjpJ4",
  "key23": "4Jr5doiDuAcR4HNLVEmSeAAqfBQutpkCEU9bajb5aktteFUuEyU9M8bNLLFutqLW7C3YZx6LaNmU1KW2AhbLJPs6",
  "key24": "4aMMJWYmTY3PDzhxmyDaDxiyUB2ncg15Az9nWanC7JYLAL7HzufFyYz55ScAgwvQKGpoeJLjn93S5R58ma8ZtEgN",
  "key25": "4e23sLB5GAJmAjZhEMWQoXHtLo7D9ERbEp8kaS1RQB5ep9fP69yvhqoJbyve61auc1cqp1qZLsKMye3vSEdsPtb7",
  "key26": "2tez6zbCyWDZmcwLnc9s5y9dNKUyE4rX3aRREhzFc81pK6v2PvyWNfBUnjEhTeD6K1DJMRJawDGMVEx3Y8mmPbJi",
  "key27": "5ptQLqssGkYDEKUmoE2cvzTA5tHGviurxQQDQHEqDDpvprQhJ5NUpWPxoHRJSAhtZWsNq4LqJpGCL7yWcp4Dbm5K",
  "key28": "5iFy1mnt3yYVe8SRiPegk5rXocySjDZrqaVzRAvBaGy1YbyJqfDnKEo7grnYPDZpSdVfwmgzoKn1Z4WstiqCJ7su",
  "key29": "67Ymrne7VZiauQWwzgwT8bBZdU4C39z9zBJntbGPYUb1Wt17QBehWcqXWVtPM94KT2LwzM8WyHhEH8uen6xpwhUP",
  "key30": "5NAwQP6GLA4Qq9GMsopK42jMSzhwAEGKhGfoHSbHAc56VvQzJazswU8okF2s9fPCAcENvvCBxHXhLNgJSMvgdEo",
  "key31": "4MFNqHn14UquwkTfR6ZxQ1hrLs4mAzTLbuWZqXT8h5GNXfyay5q93o9TBk3Jebbc6BizpvTNPRPpG5iJyz1xrgyZ"
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
