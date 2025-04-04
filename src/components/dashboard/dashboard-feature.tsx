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
    "4uKVUTtCHPKn8ZcT1Nj9twk1jpF26zjVcfxYxaenzktnRpXZcHxsCjPkrejxLTD766MLxYfPHuJ6J8kVzq4R9kox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZdS2zdja3KMMMF8ybCpwbXb54bxTbCqooXhSRG2LCKv9aPEcAfFqJVM4TRZkSd7rMUwsZjVVov28wrYMhNKLYzF",
  "key1": "3m5prQHkNjKBiLeYgYF2eQDW9Tp7LKnGAFLVXGfYGhxH8qzgTimGcWULgMTbP1Kbnv36Fsg3k4krrQMjY7fF9D1J",
  "key2": "21SntyFascwVyUq7cG81pg7eHyHA7MMycrRCTP1F1EPNHJzXjms8Boqpdw8qHPjGsbMhwxabEJYg3irbuYZXkWfa",
  "key3": "3drEhMPvKbNWSwZZBQWWFtFkw8boEifDMG9wiG1XNyaqSNib3HSjnshri387H1QT28Xaz7jNeVPhdYArARAgZMvb",
  "key4": "5fiRrS2te1TWxDCw8YMiPg6XTVhTZFu9zBJWdGmDR7ajYhRv1x4PMBaH78yPERcymSLQQQ5N37ZbksKUjwKfFXtF",
  "key5": "2gotbdPwGvnRw7oXUfHnfejdwvsJbMLtieq62eibTtCcsYsxMYBaunzQV76XRVVM373QohBwhRTjdsVcPn73uYBn",
  "key6": "4J5dTYagx6SWeeMQmNwDENT1tWV2ES5mH4EJmv3u7KVe4jHduxWsBFstCdz1BzrtgMf3c4s6QmLW9XuUaRypGuTp",
  "key7": "3Vq2pmUdE6MoFAp6FwQrGNJk6obCAbY1iSHYHhckJP2obEoJiLURfvzxZN8NLdTTJRRgu4sWiWqJ3VvVgCgSd7uL",
  "key8": "2JPYh2vr4CGnEuvVXhdvaGWKgoZ88jbxZKa54xZm72m3e2mo42xuERETLtfMNxCXsC962LB7ZDQNhyGfqupJ4yZg",
  "key9": "eazM1auB2f4MiH3GGpJMhZ7dx9ak9nQTEfUyiYYFeebR5tuDEewntPH4CtaxY7f6Yu6FpWtgbRkNnZ9QruZHFkb",
  "key10": "GK89UFHbJ8bBbeN2KBsqEDHpyLVc2HF3XLaHWJjdV2wjauMwGBnUAR6E9VW9qH4cUR9P4yaVXYXafP5Kt1rUGcq",
  "key11": "8aJXg8wPwSCxyt4gQnJCfw4s7hCYKSbVUdPaf9npVcsrViuvGvjxuYshZFwmHtKesF86FkgE2ndnWkZgdHPax3o",
  "key12": "2z1x2nCQE1Yf1VLhTbDycTAZdyGtbbQyAYtGqkiQDv2wDYKJczzaQKiapXJK3HNSDMXdZRJZmWbDNjSLzsR9NEjt",
  "key13": "5xwcgFm2AUqNCtFhGnYod8XALVeQgRHrLm5FxMiygHMzfyn6XY4DHT5iDCvzVpUzK2TdDoZZXr7CWMwDs3Hx1EqZ",
  "key14": "4AdnNxE8mZDGpjqp4pEdLEShDQtmUyyGREKiaHeRQRikzWzP95nYnFxEjk5yUB6pcgXfwnNZC3JoWBqPR3mV1M2m",
  "key15": "sqK9PVoqYduZvo5uzUVa9q4NhofpJBrajSmxZZAZirWuLL1BakCerRnqGWiSEJJUwap1ih82ajKSgThpLR8zTyw",
  "key16": "41JCaQSTb9JSUocfp6BLsgCJWGUyZ6PsMdk1PqDjU5x93LDPyAdq4p7HtQk2rEGnJNaFoV9qd3K64Be7MYgkjKMc",
  "key17": "2pupK472Vt5XBkAoe621r4WuXt7YFHHohgDameTmYLk3vZV8WxvP9rjPU968oMcqvZrR5MWeEz48pCPQiaVhVNNj",
  "key18": "5biD8f3Zf8ashp4Ka6m4yNsb2k3je2bUJTGHwvR7aP6M6M7pohRQZ16bpMhYbVaqC18ahG3wUpUu6HbNCy99ge7g",
  "key19": "xh4TevjCk5v5Epuxcux6ezfTJGAbczH9rSV7C5aB2XAMR5i2DCPDQ6NYQMm4gCf1hKx9B7MLkLFCGqNV3iAobqW",
  "key20": "5jVwpjfyhRpX3y6GMDB8LqjPpvWkc2QXyyZ68yxU4i8rZG6FzUEVVsWWk9bBb8xzBLw4LTTXrXpSZU2SmeWZjudo",
  "key21": "4tTTeqZdV9w6HXwR68WLMLRKrrUYW18J6bjK5RC1nq88AZ7FcPZHkv9Ud36M7H3gPwD2anHze88zwrfsuZoTmWu5",
  "key22": "2MqYFfFcJLjBHVfYUZPXwZPBUuNvYTkP4ijUxCrRLuJ4FtGspHhky1ugN2CcAw1GzLk4ydFua2KMEgqcHg1xUkg3",
  "key23": "2qDnRK6njTvk7KDEeRbHuHZbrJdzd56MifQRF7ZtoRrpZLfUqzrFbUn4RmLYNNeBCA6CkqEG2MDAJX9gtVZ2aK7e",
  "key24": "4wdWexYyyE9w39nboFDk7urq7CMjGxnYBhpViLYZPqwiaiXU9PAGdqqJYVx4u1ubhc2FLAoz9kd4Wkb1DC2XuEmc",
  "key25": "5tjELYbnwA9gT3aWG8zrf3TnzjENeZZwNYUFmkriBzGZ3f9FCCoTR1a6of8iRS4MBtgukVExijok4HQyBgZ9XRvJ",
  "key26": "3d7V2jsWNKp9RxuVBTePjck2doFA3NX89yzJoo1bSM4nmDnf7QdyxhdMa18qK7Phf5B2RnyWMq2A1WwdSrVJFRYi",
  "key27": "K2datgF9iiq46vjbxbadmJDrgqs8qqBQu2anEHW2kdNGpjfmwedG3BqGzVoRHCCCKnQEvnwfEWR6719uDZFCHj3",
  "key28": "ViBp3L6thRt6C1acvKybbLQVE3YSoGioGu4e6bthGJ3ouV5WgynLtvX8ffXZ8tJnApV3bmWF2hCteuj4uWCVBRc",
  "key29": "32sFQrfAeeBMehYkA4BHWgeBXsVgFcLep16mdGYG8nDQrojnysgS3RMDBGnwCLC3GdQ7ajpgeT6DTovz5jhbhpUd",
  "key30": "5SnVodxT8MCz98Ni3u8PAjA2mWzeRsRAUiAUdohn3fKLZSTpRWt2N31bvoKB4jJnuLmssjoytMkrxzD1hadeMqqA",
  "key31": "cwFDDy6jvSDLNPd3Sk7JmSrS5H4D8HyHi8ND9BsWMTkoQbmqSRBZ7skpWLEMi516Aft44wghgz7aVcCyfzfpRSr",
  "key32": "2LKHBPYhkb5rELy9CziQQJa3dsCKzh4ZcgpktuFEt5dP9cxz5dgfBnfdG9nyEvCyvAfCfH44u2vtZdWg2eGpAG21",
  "key33": "35Hx8KRPuKLE4pymGVDFUQCVDH8QV3V5Y4nBaYVaAYbZKfgyC38goviNkUvYKCbueMxMmEy94tU6ZSuyuuBKxe8h",
  "key34": "41b6Fi6SYK6hPP119J3rCXqU7BhuxSecFMnc9oTQdrTmrVEC7pbb6kZLa8WSaouzAKnxbVMWYqUJdr6LxSa79Jix",
  "key35": "2V7sZqSuoVqe7DHrvvyDZDucjWJ6JUCWoCyvxK6qabLmDQYCX9ih6DjRfpVvzFjUyjAsYedWWiXr41mtLGYVyamb",
  "key36": "2FQNt8rScpB7FRmntZMCKvLVfpjceehTURHYMW7vuNcJbjv9c7TzRCzkXzoA2Gupb61SD5qLcTo4kg9DnuPBhsKL",
  "key37": "48HRnsgCLcEdYFuGkmQcXQQxjTv2qBSTpdut3uVhyF8GKecGrDXaMFqxV7VYNfyev39wBLnbsh32MwxuNWD2gZZq"
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
