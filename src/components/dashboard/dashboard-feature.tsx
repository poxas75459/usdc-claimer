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
    "5ALSmxTymNezbcTMGScQmgcyaCXuqyWeLqqm1SmgicYWUJLTn7VCDzEyFttV7biPPfbBiJXp6Ckwkf7oGeHyVMTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gJNem9SvkQvtPzyunFXnvZAPWSGs1eDNQ9QTedPLa3ViAwWWG5VQKnMW6CeT2AoZZdBkgh2QWbDihANdt8uPUFY",
  "key1": "3J1favZB8dkPJWyVnRDEQneeBVXhjRZ8sozn84BAbbVLJGQSd6NiFVb2kehkVnEPGs6bSoHNeQmnx69wmwrWZ1pS",
  "key2": "3QsBSmLACQDTdccHemeyLgEXN5U9fQ5MH3sZ3TbeY5LgCg2RijacZVbCNTUYLNH8zH5cYrjG1ZrJpNv8VhtVf6LA",
  "key3": "66Y996KsT8qhbTSvVJ5KU4BJsbpF9C8J43eh7A2ECuDJNDgadEZ2vXKgDwSqQ17KvcC3Hf3iwLiKhCA79iMk7p4x",
  "key4": "42FYx4ENFL2bV6WckYJNKxyqxDfbzHS3XPXEd7u9afdZtKXHohNK7EVWJaQxPjoNussPzM4T9nb5sSeCMSdQVzSr",
  "key5": "4j8zZwPjhqjcnt6Q2rnwP94E2hQg2HwxZLMg1rp8DQmDfNtNrR4y21BkwNWXxadmMr88Gu9zNnEEmr1fs8AfikgJ",
  "key6": "5Xgnmyw2MKRsef6KNMyPd6LeHZGD9H78M8UVLKqWkDKRZxgyHDUBZErztipZetWfCdyhdUTagwJa23q52gv1xdNU",
  "key7": "4NPuxZJ36U2CEB5uqwefYeKQmJgedFJADahJZvPPXkQ7D8wHrAK3kDzcCorKUq18Z98rtjmDtxN7ccDKzxRXSKpN",
  "key8": "eBPj797emDXB7S5MMCzfmbj1BVEcLFSVQMvFZfrwacqPkPYgYZiT8eg1a7LSKeQwCshWTeQUCtY2Vfn9YEpAw23",
  "key9": "xeqUkDuwpBZHWEARL4SSw73rvtM5y5amVVtCoftajtrFJ9FC7zt9tveCUgvjoP1VzXBtpgJQppMaYGFYnTucy65",
  "key10": "5JRMYMiGiuPRszAzeZzkmuDtDnQ1KxqwNEuFSyNQw1wDPEetJakpMherbUsufpu9zhpWWsfqvtEmJdMnF1bqQyC4",
  "key11": "5a5LhV9KoYfKvF5iC8YfXMVjAVFNLuWwCazwvVGVh2psNtEbgBuUXFxRiQfPVsBLMP531Uakmfim1Pn6Au5ytuR9",
  "key12": "5St2M2nH5btikWLZgqnT1H2tE6wPeNvv9g8QjSLPCh8dpdiwdg4RpDpEK2xhZTL2RmX1kk6WXVbz2e4bcetLMoiL",
  "key13": "4Ua3KjEjWhYoFPDhbfmgD8w3uFbSnaA5zU269kK6bFxAUS38qxrvGTw255RrbgpCPo2nrGnUpsMTF6y2SQpX9aLa",
  "key14": "vMaMRcbDq6DtDrUA6ijbNHAz9vUTxSRmq1NM3Lr1uJ2z8qBDDDrDbjxhvRhtkuKniSfo1g1bmj8nMMTVkt6K1JS",
  "key15": "Uhwat9fbNR95XEe5MwWKjT1k8fDWnc2YRrY4qsrXLnzYXGcqWAKRZt4Ctn4LSaNfD8ko8URMN8XwpnJpC3DQ4a8",
  "key16": "2KoHh295JvHuNXYnhTrYsFaSyYp3g3ivGoGBPK5Z1nUAnb2bhyvS7kwwmpMTt9j8VSXAdeBzwH78ohvTxiheVz32",
  "key17": "B9k47t3q5F5q8R3qztdCPNNHGT6ivfvpqf2UpVpqs8PJ218iAFGqRPcrirzYLdVmjBXtctmTWUFJ1sPDCT2fmBD",
  "key18": "4PkTVmmEfAXeQaQpWmKRALVvV1XJEux3eHrLBGZEu4Dwd2TzevZK2ctDVfsuWZSF9TysfwCPgmAbLMmXCSnKzEmk",
  "key19": "3GmXPn7oy5febcPZeGcEL9DNTFc9jDofPvgUQDeZFyfN7kQ87BEh7XLzutsbCQQveKr7VB9VjjESYxfzk6zqTEbW",
  "key20": "23yT7HpsznAX1UqpES8AZnBpoYixeHiWGWjP3rGVNkQL5mPWpULrMxHYRWnGp7hyJy8f3UsXx22CReajfw27V4CX",
  "key21": "THkhFo13dQ5Kzh5r5gx47UHWzMZmjsRzhCfeH7Dsv9vBF1hF9UYGw2eNqX54VXVPSTMoWXBYBdypjm634hCuDbr",
  "key22": "z29pnDRYbV1orhswFZ6xp5SBbF55YoKZkkprcCwGb4ErcJzgALvHE7kWc8z5esRGUc7GsHQxtwkfSCAeZ4VYPZQ",
  "key23": "2TdJgwbUzJdUx3BaD14Zvc27YUG9fckytu2APcaMW111HtLpx4s4v1gXc65nSQkTpCGpGYVmuqKoYFNiBgWdXFi3",
  "key24": "4MqSi2B64bSpLDFYsLAKwxk5cLRfMDG4X5ekaDmz24od8NDb76aFh9LTZw9vYkbma9GZyR7cTtDEiDjgCU1EVrrp",
  "key25": "2GBYe89dFSDaEhV1s6YGvafz5YvCg81YzDJq9bacxzD6Piofe41j8sNmi5Du7QyvWiu9knqzuPXK6WuFjbXDUFnT",
  "key26": "3o4WKX9dJ6UwHRdwZfk7SLDB8zB7Z8copfNeSSs47R7cqHB94tAzrd5eoxU8HXq9HuwM1tRX7Sa6rgZZu6GAoHs2",
  "key27": "hMZ5koKBstNZ4kRWrgKMpVNUCh2r2S1AuXkCsoZqpMLkNGFcoFoBC33D9qFS1f9PoJa6ZLqJRo7UdZFFyjbHp68",
  "key28": "5ASGnCJJUkGD96yJoFtwPFN2yce9FvbNkbebfhV2F5Eoue5AvUPDYZy7C1t7dgWTJ8Arhyb2RwRWtJi1ZupSKzTb",
  "key29": "nfucYH5g6RtWsASERjwn2YL8kYpWqF2Uq82C7NLeqXm8Nh44cCJ9WdMu6gSVqXoSZGLgWo5mGXagDEyK8Txv8pV",
  "key30": "6532eB4XMUCaqdjKQQ1kPrtzNEWTSVyAdji3CE9kQGLnenB4zWE3JBjkZZhH8TyJ2CJjU6oYrBYDrDPwWPF6EPKc"
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
