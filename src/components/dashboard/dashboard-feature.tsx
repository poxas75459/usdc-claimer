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
    "2ZS6FLr9ntM3dHQciBDZdWvhnHpMG1onbpYCTgmjMU6JLHTCD3cWQGYS6Bn3hDDEDw1JbwTsz9TKKfk8eDynPhPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AoR1GUEvcGDxcL9mh4W3ArHV5cNAQ3SzJ7a5R4UKoHEWVAher25YjSgvqrqVmLibZrRZ3t6vDfbMYDEPTb9KS26",
  "key1": "4pauT7u3SVEcjSf8WdDfTNaiPK8QLnH7AD3KpuR5MwFDwp4BEMTFC5nmEaHs7bgh2bYfjoPZ4LyqdnEAmdwu3g2q",
  "key2": "SwaxukRDR4BuiepVW4jvhXyfh85z53qHhWSQNywjAe9Wa2v36pRGKhtzYePpC81dUS3cPW9yCLB3mTqSPyc3AX4",
  "key3": "4aKjbAyL2YoYnQQfZ3WccfTfKPNkrYga21Xf2uHzEDDHp9VNnASrL6ua9u7aSk4eBo3bGPvvLRNoyF6E1snkVdqk",
  "key4": "wtVTHpZ6j8eWLjZ2s2Wfs1ZZn8yGbzUrwfh2EPogK5oTw564Hkm33nLiiVaXB7Wbw5TnDZH1aYuDTgNoerMGtLo",
  "key5": "23p1c3qfSM4Xuf4ihpqqJrHQqdkZjox6GUrSisaMfnJaP6D8X5Vqpsr2d2cJQkE19fpkozRzwyFNkeW4SSSZihKQ",
  "key6": "2SYMLXgJeFp5fya9Na7ZUQ6Azq1QBVGNF6k8XezYDyESwDMedintEzdS44gFsUjTVWBWhUngGhvuj92igryWzvgq",
  "key7": "hfRZ9QeuTGSrvgFMdgbJkyJoJTy2PVfv1ZaRbWA8m7CbbegfAk8ak76oWiEVksJQc6WJhU5XeXFg2aed87kXDUb",
  "key8": "3KAuJhioSpfDJ5sDHR6Zhp9wsDbgPM89N2v93ACYPLtZfF3tPghbw8xh4mteqb3G2Wpctx9r18WGT73j7VMoDLgh",
  "key9": "5psddSQPn5fSTUCG8WraxnL26otTxb87pHThd1N5v2u1kuxxRPiMjLhRNUdKAS3YxNwufVrEsmE4hWVRLXXt4ecz",
  "key10": "5GdU2F2DMT5mNU79iYTSaYcNyPex1PyR4pjxF95dWFcQJ2hdH1gDwKjoYstYYzQeKUQ6FK32TvofibHNejcbTbCF",
  "key11": "3w5SemfBPXtTizqRMSg36jxt6qTAmLmTj8RWCc9EP5xykaW1EuvdMpzVLJR4pNhtsKCxumdFPon5ipeSVRMnKZmQ",
  "key12": "3Q7DVekvLrZC4z1KnjkH9k3pvaT1UBgJgTmBSbUGqrk2Te8ktW23jxWwvVemxshTvZu3XKrbdvesd4RBBw2X4tHe",
  "key13": "2pgT1zZ1Y24iahS6CJGJtyjrqKpANn8rUWjiU58zEo75YZYD79rgDw4srfM2jZQpaNczbqSxLPfu1GAovCZKjssL",
  "key14": "51btJCzWjM5CSvHGVbRM3bzj8MPS7YNraq9z6MNoh2tcqZyUSxhjH7Wmren2T6Xa2dQK9gLrtM99L2xdhgdW8yAe",
  "key15": "Tryqveq7hFMZQXvDbiuCzqypzKS4SctknZ6aPczrBdHDH8KNq9ifuC9xBS4Dqon7MgjEpKQnmBPXNCqgTUz173o",
  "key16": "5S66998Jn6DZSAvZFWkHNTF7RsuPAv4T2LLZefmKQnqcGHbqwt6phuQZsT6r3CT3jybXnw8Py3p587P9xyi4rS1i",
  "key17": "4Jg4S9vkdsuamT1BhrjMyfZU2ZNzXJcsMfyy6fuM1hZnq7YPSQyqYJVCd3wAKyxeDh4y8MFZNaEknwRvZk6VFsX9",
  "key18": "4pLmPtHMJ9qPv2ae6xcZJ75kjW4ADNBpRe996eWBRpj4URrEkaZLdpuzWUMLJpLX2LJqi5BSG4F3iax4PqALbN7r",
  "key19": "5Rk9etVEVpZ5ZZuRpz3dSHRDzh8w5x9o3EaQu3UbBzU51zLvozR9Qx4MgDre2ASEyZqa3LqeZyE4VKMioNYNXioX",
  "key20": "3mpqY7ijLFXUQ859qkZ6y4swRPTz85gySdKRyzXT8BbiNXrGKbAwPPPuetuU7rDtztz7jDNS93GjsG3FW8FiEXJc",
  "key21": "5X4q2oQMTsSXVLzBWERAS77gByaiwBP3k8yp4kqYUzudtZWpppMvDVzWJCoEuSnXr23qjcEpKqazBWLAjogvE8nN",
  "key22": "PPD4AC68nEuu6SxUg1c4ASgDJCawjrqx7vp7b5CuRrg6zLPnKnQQhsVje9KxK55Hv6BCXftWMKccjq1ugKViY12",
  "key23": "3g1ebEccc2u9A7xE6fDEFCz9AQP2Pp3gSkYbBqJurgYLwR7G1BsZ1UYugSpedcSLtVvQzrTDWUzzoNgWpNVRppco",
  "key24": "4ogTHdsWojhLuHYWLdiDYP8GeC7vC1h7uswRp5Fu4GRoWkiaNb3TKwTuzhZz7L94JRPQTugk6ddCdJmkXa83Upb9",
  "key25": "386jemeVhZTJXC32sGEZkSaR7a9E3XABcChfYz5uGLpjyJh8VpZM44BSajvvQkJSrDXY79anrQgHLzwJEeWo21yf",
  "key26": "3W33b4JgSzhtkb2RYJcpscMgagYhwtXSAExDAjaicxN4yxcKTu99EjD6uQVoq3D2vdZycp7uLwQrEs4HFWnRw2FD",
  "key27": "5fWZ6wJFzjveDxZLUF5GboxGafpjS3r7LxvwFPZ6emqQrEH59RwKb9hk262oWyfy11koJKqghzA1x2gUddQzRfHL",
  "key28": "56htRvUDCfyxD1EdzqpXnGA4eu18CSoxjteXt5gqjwfdhbu7E8vEJEA9S9CxkiubpupQfAWixMMxroYyRdGSJzKT",
  "key29": "48znFU6NhLtxyRk9Cwhhok2AaHEhWqhogpvPiFH3k4RNcWJ6NjHtGzgvMDNqB9WQByBwT2HFLcMVvRH2QP5nkkk2",
  "key30": "e67n4CTV1geFfR9FrJBT7ryvGHeEAvFM3RASwMwcvwj88amyLoV6e5XFNCn7Anq74umhaUC9h8H5yGJrTV5z87H",
  "key31": "4AsWyRTdsfvPYrgZQBzUwRR7FZ7hZsxY2SqDku3B79LNpXtDkvgnRw74vS44NXsvZ3QZeGtYmvrSvUYbvU4BKUBn",
  "key32": "4YEH7LFrVNmx2VfVm894qE8wh7GPbBTaXyRbyDUs6Xmm3o1GEocpuRNfHgib7aGAn8VyHyXNL822sqaJTx1ZkfQC",
  "key33": "2didXkV1cvcW44eQD267gQqduyu4ywCe1eNJeuDMZNEsPx1VFfvLVoh2FVT9MUvJHrxw4QQ68xqrug3PUGKoJUV8",
  "key34": "5H71LVvaCHM7JkdXyQrDWEy2RpFGp3QoNn4VAGoGRnAQRkmSeqVPZ5qfQd9wz2Jyd16YSWcjabJYMSeQGN8S5XdS",
  "key35": "4zxKJiHmFT2PQVsfieT2mBkH1VexezH2ndQSFu2HQKcyjyXumw6sp9ycPe9jxcafCKLdsTJChW6KBGQejV1qvKFp",
  "key36": "3rugL49eH75rAw4UzbuDktbP6c2dmGugonrvhZdHhNmSRq6xTTL2dULUGvMWQfRumkZ2AfoaBzFHAetTouQYFtn4",
  "key37": "2GKXfUtdh4vYRSJasxX5Pq9km7uz8oPQ7duchCg25rj8UNLGPxiUTMPk9fXYHkr4fWBk8NvmW4FFjapH3TzLhoa",
  "key38": "2EG4vwfwwkbS2xwHbTxsECvj59xhXTtRpWxEUKFTEA82bDpF5pQEKv8JjSC1Y5cxM3SDdqq7RLSesVxRXM9iHCSF"
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
