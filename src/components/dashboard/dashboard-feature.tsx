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
    "2GwWEGas6md3qApkqLFzNeRvzoZiwnK14AiNjDyEfUQHXaQc3LAxzxcBkPikGsj1WMzULkqyqrCzsufjwwR1Emji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n1chFVr8sGyKrqe56MY4BKiDAT9fBcEhuPVM8jrwWRofDCLQevRei8iVGpWPQvadCYq56Qxod8hXhAa2g9ztrAv",
  "key1": "f6PoywYVAGgbMeGvGXKMKhMayHsR8hEgqCEM66hrXb62sEL94551YPchxHgzdWhk64h8bvDqmPPG4wVQ3WrhZnD",
  "key2": "2z9vP6Kyip8uuEEaBL2QhMdtkTv7guZnzzwQVw1CLYQxWGA3XCFXPdRVEz178oFwXmoBXmnvcVubE5V4Bs7hqq6V",
  "key3": "4g1xTkD7hwrP8uyF6u6DtZQQfpA8K3YoHTHeS7mAVF6u7ifnAahRj6b5KbUV8SMwKSF6mvHuC5Y2KnmSvCsf2kbL",
  "key4": "pJMjxr23DMHED3LJD8Jy52br8WGVtH46BXVB8YV5o8b4KqAbkgYGrCTCAXjJY1cePJiwiXDFt6TGXfmMBJjPHq1",
  "key5": "39eRjnxvi76AaREmAnmsFhWneLBqkoT6d6VKnn3Ffp7hrTXFARR6HHr5jZG4qCruteGEyiTZq1N77sdx9Sjn51cv",
  "key6": "4A9mZM85mgt7iSMrSqCcbnTPZa4sizUFVaz8PSSxcGQkUDNwehmU8cTe5WCc2zJm7dAwbye8e943239HrwaP4Bzd",
  "key7": "2oHP75T3ZLKL5AGUU3nNy3VX8oGQTF4Sgcy9yHqUGHuz1UbGvTDTHemut7H24UesAc4xeTAWYKnca3pYsznHzZ85",
  "key8": "3dNUbpuybXZFMZbKgEEDYG49aaLqQWNemEyn5XXfT2jxwynJrXE6FiNU4k4FpTQfDQdE54ioGiY6YoZVSVPjCkRM",
  "key9": "4HFCN4BL8XSigo6P9d7mscPohgVXTEMcyiJez5Rez8aGgPfSqtH7S1EiTCEuLekp3XgQaSjcGouxXSeWyZfXBmWD",
  "key10": "3piixJ23aL18vGpYwJGoAhs4kMJ2VpH98GPHiEA5fS1xkAmTvAPC9hhi9ymEDQSU635MkU4yeX6pkELtRSKdAxbT",
  "key11": "23kJAXjeJGjCbhzP8xHMMjiF7Dv638RjGebgeJcsBAMZ6X3iRL8QJAtb1V8dh16W9D8nDxL2WM7jRHJxiTCSpGNP",
  "key12": "nWfmsHLZBC2bzaQBveuYe7cavr5SengU1epgmXqmWJMxtiTDUgCF2EuiKJ8PCQHHJ8nCEnjxubMAGB6TBQg7c5R",
  "key13": "4r2AvtV6f6wNtaHfDMHJmd19YURP7jbWawxXmc8hUGDE3Bgxuk3TVUxR9kZp8VPRE4UZbDvS3zjHMJhJyR2X4MFR",
  "key14": "4hN29grrmwndPYiJfK5gAaSfspPbipjTQ6VP8YbvqdXAcjjr5RQkW2E6dHRbfpY6VWr4QKhbZZKqoh7x8kWGBskE",
  "key15": "3ftyQGEtQEKwh97gTjQLcVvtC8KJtLr8BGUh24Na3zndprDTmLjCfTBYTZgpGPVRuQMmzypSxMzoxHSSBkJydRSX",
  "key16": "3LmfAqYU34N9mTsdQibzAhJ6Q9VsuUNBCjh9rLLP9zLZxSSa56LV3RLyr6FBs6astagWi5c3wp2egZhDkhoY36mq",
  "key17": "2a79Q2LNa7FT9gdvrdcYzeXUWMPJW8MmuZG6k1P1qAZzAhJXB1LKMF9yjSL25oBWxqMYuDTU48dSNdEdicYpV68x",
  "key18": "5EW8nACuFDVonk1ZUgPBu3RFBABu8cxAZVsJef7vbnPuSmC9AMggxztzTzcZMNKcBzTPPXH6BDNqbBJPKM1owxKq",
  "key19": "4qZMatwkURZiJGC2iUDDcVBqzAohTzuPnxGMjpjPYKCx2em3rRPMZojQPUAxNsvwGwzFbcP2D7cjrjvMdCDxF3zz",
  "key20": "2nYEEzG7Hz7Sr7byxZJ6HV9UVBe8Zk93EK5uZA8GKXKKxrq2tgNBVKqsLQCdrSiwoA2nWvfS6Nf4TXHbSsjpabfq",
  "key21": "5yj7LFv5kgx1LVnnCiydvgVSWu2SJsfNz8X5P3M5arkULSECWTxmWi61CMSqxt2jathDn184k31JTjnreEBU1py7",
  "key22": "62E6zfBV8Yt2sE5PZFhF5kc8ovjShj5tFzgNzuEznwXzktDSEs4hdRwXhipYP3W2f1gsCbDd2psd7cXdiZzEz21G",
  "key23": "48VPnMe9oy4qLUGyNVc3U63YiiqJkDEZyVDqMn4vumiE79mYZ6FMjpKDpqgNMmqfuXmB1QcMuqG8JEfX1Ls3htCw",
  "key24": "v2sicaFruWf5rXn1zjmEr9p1H6cEDZM6DVvvtAHcGzni8oXmDM1L237XsSQu9qGcNAhr71HsSeFfWe3bextt7vB",
  "key25": "3TkajxWdnQaFfLaAyisLwoNV8JaoKRPgh4eron1xqcJuLcTKWzGQfcfydGpMQZyTjtfwjNNepADHesRVUjuxhFKW",
  "key26": "67XgfhYVvNZ3kBmUq5dyygz7xrLuaKTmojacUmFWyGtxXgjGpMxKP3ohHPjko8HaUvexZcBV5TET99HCuBLxPwCs",
  "key27": "MR8sM22bPjnD2HzyEiYVgkWEjGfcYPbGHRYkM1965Fc5yJSwYSCp3pU6vaeR4WwJQ4yxF8Pptz8W8b28DTTN7zt",
  "key28": "3Vj5PRxK4EPfR5jC3mKjfvPCZer7RL3fSwWj8iZHuhVs75zVotsSkiqRJnFMNhtUxfuEi3XDbQiR8jt3MACYtfoi",
  "key29": "3GhrX8VU7GFBmoYqAn9m7X468FGWw4yR9yb6cSXZQ79xDP4uey2txTJH4m77ZESpzzq3iFqfh62FwYzb43jZAzY8",
  "key30": "2dZAVqJgEgDv3ToWgE8ryHHDJVfNHr9NWeyjzRVZm9GxS3cRze3S8JC7Qhwe2bZuQbMNsEED9CYxiBtm5nB5LojF",
  "key31": "4qsBma7Nucy35A373XMr7ioniFdL57abjD5mzJbZJfC45qKY9vvqh8bj3Ub14Ft5LGFVRBXnjE5ZoJrLBeMjmypp",
  "key32": "WVC8eVqM2BvHb5xoLHbPeneDu3bvYsEWQLFrebGFysucv1aeaSpHij24jG2yHK3zE1yHcMrt7Dq9osdHHKnZTvv",
  "key33": "2mwiCkcGmX7bZZu4G2mcYyvgcV8bQ7vpMTgJ7mA4Nvh5SLcbDZBiKtWwuUybjPN2KvBiPGErDM1Myjn8t9HbuCFk",
  "key34": "41kbNNQdR5SnQtkcLuQ9tSEXMubnhwqwBsqcju6hRhemkNKcCwX3R2NuvdwNQPy2wUwdTZb8PqKztHCwthYDAyA4",
  "key35": "4mK6gEHj7a2mtUdRGKMEgNBsugxk6gSn5Bg8iyyM7pHAEKxuU3P1Fn2hraRzQZMKXFeywHGTzuaS8zv82xPnxTHg",
  "key36": "4D4Fa4BWp3U1DAygKWrZ8h2UGLZGc6LGifxVz7EnPwCRXH4rrrzyoZVKR4VA7yKY524n9WbxLZA28k2sfXf22Ept",
  "key37": "41Uia4yTBny8WVK4KUy9WRmMhsykdZ6QNToNtEKHyNc7Tw8Ai6ZkJxHo3aF3XSsjd2pmFJavZb1zK5DnxWeam7qw",
  "key38": "3iZacN7Ke7h6HNFvundRGQBCn2rGFXK3ZUCa1Cq6AwWERjfcSaTQtBScVwQFY1y7Ch1LVHaenZjj7xog1f1q4zjN",
  "key39": "2mgyycqmbQJzKQpkCTqAb2U5T5vpgo3gtH9FSULEH8A5VMv6TcSb4jRVLrMszyRFzfsfazVVeQqD85whQok1awns",
  "key40": "3D12NQ3iAPMjun3jxy5EpWxnq7Sr4ErSHyYyjhfxU6zjnkESKtVSTxtuw1k69sbv6aSMUkrG9iwJGttbw7fMtnBs",
  "key41": "4QKEFrMHqK3potx6CDQ7Q67GVS6LNKs582xZfHYh7SXLZ2ynq8VVbjLZpX9m5sbx4dfg7sS7jTLwCxUbsbFuFt5W"
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
