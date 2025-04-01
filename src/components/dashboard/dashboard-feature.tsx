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
    "sqxwFtVTrMfPZMH4e2nDYRUWoTeHedahKoGvybHdXyKfh2FDGG3JGmuFMrVbW14MREW5deQhk7pFGA4rciDefmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ifb4T4HZSJPeHnEwLenvPMd1kr5UgBJ3Sh2g1jNCfkXsNzaJHBXsB5KbvQ3W8jtCbmxdtfnAufj5F1VXZcr24Rv",
  "key1": "3RhpRXJABnkkBjXtCGDsD1YUPbJMjfV8i3jKzCMuL7KapNZe3A6ztsrcuJMY21uZEdCXBqVfGZQU7yZP8at6TAPm",
  "key2": "G4n7LJFfkUP35KCQWUUxhDbYoW3qDrZ55hKq9a2TbdDCnE9Zjpr1wb68NAjq5BMsR1oaQQWAcP4BFW7doZaSAuB",
  "key3": "3VDydb6DuM8NC3k6XcZyw9mkxgsk22gwmdHhYghh7Gn8JHgiAYavjuwvKU92ojqaufBR2mnsuJR3riLB21eBhiKu",
  "key4": "2oCBR9jmQTyFhtWDwF1kFy4XvAvYnV18Aqujg29wTRMnuzcXmeuMwvPgDGh6DcSvM5riXsUSDkMNVzoFhB1waMHn",
  "key5": "5LSVrBx7p1LidKeKx73gWMzvB165CmVjri4QUy4QdBeWDgPc8tZMxxPc8hyUVPuoX1RFNVckR9MS5odmYi2NECx6",
  "key6": "3vPxyZVhxFPdanemBpeS6JuPka1iRtjdmty9kPt8fAgG2msdkSrCM62A3TCE2tKezNpjGmeBsqkD6Qf1fKRxn2jD",
  "key7": "P41L1XMgNU4U35MKpfqJFvQLrgVMyP6sCLoK27H7wprrUH1uNSWjXc7a62qk1P1foWjWJeQYwHtQtJrHkKQpjiZ",
  "key8": "4tgA9iCUxNMtbdztmJrbJyyuzwwbydEwdTPaX1x6PQESHpwkBHFXyzQQXuZsAuigzMYxT1ocRRpYC3pRq8u6SuJQ",
  "key9": "5R3N3gYUf3mBgEufFACX6Tk3cTzckgmcwskVZ6Gn48zLkL4cUZ3XssimGwEkKyn9sv5dGBKtjm8LkHzMQVwoJzZs",
  "key10": "5X3bkmCnVmmKYQcNPEQigLFnXY17pzqFFLZdEKw2hMa7nak8KgxqV5xxLSfWVxGJG5qkG1g6bBh3ywynjDed2HbF",
  "key11": "Db8334ok2WHeXxjL6BHdq6tYf1N9ufBbo3FRjm4xdkes22AsnYgue51yvPC4oucjQiM6SNoLHPSdhcbqKgNMbxW",
  "key12": "5L49MnQvPzSN4edg1x7VejD1NzdRme8qWUNXPjayujjV5jMaz3yfdCkNzN78gTTKp9MCpRzyYSMuk5nwnq7uQo3y",
  "key13": "36WSjDz3sA1EChbpnowesNgqLETe4wsYbavhWhnvdiiyeG8C9b9imeGmyYkpPdm41TFAVFncSo415H7sx83ZHTnu",
  "key14": "3uvidmgNGvQox1A5GbYH8kiMcMXaXn3y448hkH9NoujVjTUQUKUvpw5yKpsKRb8tf8kV7zmVjrQYQqpwWww6kbYY",
  "key15": "rDt3fAeBm4KAcQsHmpEdNWu2pCeKQWfKB1cYyPvXsWJri8MGC2h2QJwDeYZWSPckjveuXSxiTVQ4zpH7dMUdYns",
  "key16": "5rV3A15uT2JViWzNUdw8zq6ZVksNTamvf2gvW88NvsF9ZPLF9AB6mjNdBdZ1Yw1FtS3i3eiMwQhas18ScmQ4Nxp2",
  "key17": "5Wbd9Zq7fvQ2znL8F57L1UrWdLriW7TjXX3t7y5niEBjHpHMWwa5jZAdRJNQNS1C7ifaH6cFks8n3tUmr52FAj8u",
  "key18": "3VtM5WTGFxhvjmqeCeuvB43GQnjphFhVLDQjAMFHmGYvSncQwPy1Zbbiz3bB4i83ttUzjzA2okYkQtdjo1HQw8W6",
  "key19": "3zXuXWPE9VHMNLUFyGeUDzTWVCr8h4ecwi6TGmx2DAWi683Dde6zThHayfLSkcvro7GhbYhrXZYKsnazhPbKv3HZ",
  "key20": "nqso7vycoWCDutyoNh6WunewVwfzkuD5FcyAt8jFpfY6t45PYjiJa3kAaCpwdpnYJ1V8vecJnzjxou9XjyzJ1tH",
  "key21": "4c5LAEaNYTJFF1rKV4o9sCgyWvXKKCQxMRKJdkq94Rqmgu2Sus4Fv4kwWVK5KfRn5pWXiJHsuRfyqG44YP6Q47fJ",
  "key22": "2EcNU5FwtcWS9GRCYPHbwpYmpW67mjStMCmTqUeYQLmRfd9p1tnfXejpnkVhtKppDkeeGb9DC6d2HSgV4EfNkiRR",
  "key23": "26eNjXukDcjRwWLVgjycNNFvNwcdp5tMBpTNyuGuAtP78TjTP5Hi7i79TAa8JWh5GeEWZ6vrHMVFiNq94KtFT4tz",
  "key24": "5QYb3LBthR4SJs9hUWfJJe5GBHtAPp25vBWbu4DXMSooHGwBB8Me6dEjwC7ENs69D7gqzHgD9pQXjLmmm965U61C",
  "key25": "53o7wSjgRYrKYqq7UGu8gSKkuNvwE82pcEJGTnPENMvPDREJRe19uxgFFVVuVGpKTrSbdrg38KAf4vrLdPe7mCA5",
  "key26": "3MrCbvk72h5ucqqvX86CgJ8SnuyTxyvhcZvr2X8KqJ58hQGaNMAUU2PGpz2unEjNhqj2wdrnwRCLFYxNNC4achCx",
  "key27": "4ByYPXa26TPsUgF8vXiH2fQ38AtiLMQzUEbpAmY6eBFpW4UH9oqtk5f9mqmW4v1m6nTZBiJTv5wkM1tSDrkWH6gX",
  "key28": "39CqsZo66NbhsRrqE59b4dAi5BPJd9VBH7X2u28Fe4SHJTUf85whAjPMgQXYEbxURih5qHeCxgw1scCSjSskPTg5",
  "key29": "5C8TQLA7vhwHUiUGGeNBfWxnmUqGgaYk7rgpmpsUmZTau21WcshCW3MGaub7eZSG9akEkcPsjNidwLbic33jD7yo",
  "key30": "57jsPpS6oRWxHLWHUMmVv5B1LqGcAvAjpqgHkoyCTHsVU3a3JwoVU5fuVbcqdE1q2aRUdS2xz7fMjL5ntj1xtQJ3",
  "key31": "YVzFvmQuY1UwLB9AonjXh9Xq1GEbR8mZPCb4c3n9MTyvzVXDvFgr3HAYhewSvdHEkWnWMgmAAyzPK9qFbbrhdu7",
  "key32": "2eRnrUeJZCWes1BejtnGrRRpSULaiexh9ezacfLjuWYXjHHRqCLr9MRrdPFXCjvqPQ9Q5pXQPUusZZvf9z7S8Abt",
  "key33": "458jgHdDE1Bz7i8AjhPqnWJ9W7xa1xMHbTZ1kQ7g6FXrxJUyzXytuydSBm2XTKMq9gHySfoAdyeqTdLJt7cDvFgH",
  "key34": "3zJy7KiKqcgJ7F8PYoCGyRFoJu1xYkM5Ut8WdtZXDnyZ8P4NWGnTWMX5TH3te5sy5kdqdUPSfy8F3XSBQGkCuTH3",
  "key35": "3UbiYLX8hSuBoBhCMFqqdzTnonan5CSSSPFof3Q4eBEYJq8WEsqpA1bGERATM85qRMtP2zxBBoi9dyCSny7y6T6j",
  "key36": "u98Y6YnSKvfz3j9WxFayXo4C3LSKBA3iJZJetTT7uVNb18uuWD7iry8worxkzxKewF5T1u66kcPUG1uFTZXvhx9",
  "key37": "39NPMaUULnrzEJb1qJAcMvay5YyoqC1vHE34Q2ovMmNbvrQcyDp3P3NUF8kPSbKmhpWhmcK6EgDD8JLzMaBpCeDM",
  "key38": "4hyyyXiaPi4g8q8ejM6o63mjr9xZDVBNtf4ShHyyPrimGRdjardBWxdVn8QCquTw1f19JxXoscwwrKSU3LFVnpXg",
  "key39": "5itw8YL7fH3Vmz33S2WHFHp2ZdbsTraPzK5gQ5PbCss35ZSLwcPdZ5ZUMbiGWoTvbZhrit6DttoLJdF1dL2LhVpG"
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
