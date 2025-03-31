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
    "y7jxKq1SNvsHYA1PBxhUovQqReGLQZ3iR38CCdP2PXC3C2rCMDnXNeEQP1vvZm5SLkRZi1mPPAmAL54MBqVtQiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ka4WsVbkdmRVDSESzMfc7Ro38GdbPbKp3MwbnzQ8h6SNgK9jaTN5GrYDhJF4W2UMw1QEpcJ2oc7M1QnHTvCbrV1",
  "key1": "5YfDAH1n4N5F8yHwkBwuauMiYg7zjsUhtFYVs4UcTUuHBZqRbHtRRvp17ov4KovPATKQRAVmtGdGg41R7cNhhZ8i",
  "key2": "3bMwSzHb3kaTPaceBWBRchfJWandx1wZk8FnN7nsfJKgixPzDgQH4eXpssebWnCrFRoH7qsjMPbvC1m2v3viHWsP",
  "key3": "4QU4HbmG31oNQyyjWtMjtqXcBEVmX1cEKiKo2uvFubsEGsdpjGmPevmAX8BVFXjXRzBEcydNdNQmmiHVBjMmtEzT",
  "key4": "38Ax8eiwJbwLvsZWFAYY55PhnxX7GUzqfwXDt7wqKLfW4VwYekExtcwhL3bmxsFhUUHXzoESy2bCjDzziRFMXQ3M",
  "key5": "3TbjUs74WXZ9yH6aGbvVE74FxdHXzVoysaS7p7Kgs2GJTrZp4uNri3DjSc1TVsAzZMpjvS4rra8zXhYHAMGYMPgZ",
  "key6": "3S26Labf6fTqaPkWjdZj8vue8P8xZsUEP4EkxASQFYAuWCUDk2MU6qkXFQxVnJRyCEu525D5wXUqjzJepGETZrh5",
  "key7": "5x27xSyrEMJ6ZEN4VpwKF3pPMzVxQtMPrFLkbZS6ct9gCdNWYRG3pMXxDMvL5a2ZZnpxTDrXBDZa5QPZgcwHk3MU",
  "key8": "5ZEqcopN6m4eHHRyMK39MMLrXvaDjbema9atndBCjaxJZpe5ZdM61QGDD5H82qfsJFEPZjCrViGKkgWXnPmYX8EL",
  "key9": "5Ys6vWmfnUFTRoE1uQ2ecnVEBE5VkfZB1JitR97yZkjNMoP3PJWN3goxX3yUucfs9m4aV7j1v51n8QuiAWcMrmDk",
  "key10": "2AcVheAoMSrKsUndVQbNbnjooXMoYuk55Lp32opFCam7xpypwccKhkgWAvo6EKMMgc3TSgFVFK6Rv3pqzrQo6vcx",
  "key11": "5UAR4i43t5B8kaEt8XLtsJnuoRuPXB5zwXCrJ9DQ6K7mQ6MueAnSxPzWQzJ3NwrfRwL3WZjFHaVU5smJnaQgvL6g",
  "key12": "5SApaeusYrHdsrctiDJcSMahcLGaJdV7GZfLkvvQSt9MYnMqZtTq2PcpwuWATrwYQVjkyoZMjGP8b8YwAhQ1dqNy",
  "key13": "D182GewftRXNtcapivwDB4uBnE4CWERvP94wxehQE6EDD1ZCv6X8ZwQ93c7oFpyRFZvowcsc6MK3Rccw6L5bhx1",
  "key14": "WKJVKeZWHCxfptZhXh5yWEZ6ydNqdXbNcpsNVHcK4RwFcMnXRL5pHvwrWQLQFid16imqKZaxT7HmqALJKFBGh5E",
  "key15": "4Qn9nFLRvfJNRNLjjpEZm7JQs89vaPjXMmwLaavzjCXNhf49g9oRF2aM5cfoT4cV1pq4nFDtjo2HVm7jXz8AywGb",
  "key16": "STHC4h5F737WjZsVHaE4inDVLN8RxbjNHbeccmZpxMdV9snbtNNhegRLtZh6pzKJ8vHynEYLqJVtLcpzvTYZZZr",
  "key17": "3Jh5j4rx1A2qifpVP99ohs5izHP22x2PEuU98KmMrewvNuXxTqehviSmRFVgFQFsaBk3qgWoBUwBy71SrD6b9BWa",
  "key18": "2QSECkD7WvqSywX7CC38F135UgeiKJmotEx9r9HQpzg5XoyLDXks5B9r6RpRuh2akEs5KRZ81iHsH5xeX4Q68B67",
  "key19": "3gFoKZ4m1gfYaFgF2HtLT4j41dHNTQx23VZuqG6zo5UBtgf6znTEbTis8ENfkQuKa6Ns8ZBkQmp4aHVTrzgRt5bp",
  "key20": "2BehV8MkQPNSTmdhvsnHPaSYXQyR9ZCBBQ3vfwKfEPyj4R3GGLaypBo7du6XkeBbZTCCi6JGUvC2erLmwxDW8iQW",
  "key21": "3n4nE4df6cHLFU6cCrRJATobncXJHAxys5BYJXyqKCBcBs5ygC8bKdqe43ubai81xei5wf4S7gNw6GKuvJjkKx2G",
  "key22": "5YC3KEpzVHWLwjYuacoAkoKDpMGbHz3m9rPsbEnhpa8UkRLhu3TbhqWnaXaSozoYZdEicG1iat4NKxrSfbzi5XJp",
  "key23": "5Qyzpe29SSynDJh3rNJo4MkZG8U4tyhZHBBiL8XWbd1sKa9H7qnzs2V6ajyBYeKqgizdwoeQE4EFyvDWd6KLvgey",
  "key24": "FpnwUnHapRb4T5bBU9r4nwTuT5uLJzzwgMPPxXeUzsWk4ZuRoEe1hEV4sWaBP4JM7Xq5WkJ7NAdrcP7MGtXwPQ9",
  "key25": "2xLMEcE7eS8QEYeSuror68vsYFDJgaJRQwxJiJyoToUvzR9nC1yymmGkZsZBUUbV7vQk6obxdoDryKmh9SeBtDuE",
  "key26": "3K1r7mHyPrM48ZKtThwBa5ooicmAznvzArDfFCnvHwUhzPGhNNDFS6vZQASEXeeBN9jAPqBktzWnTYFGBt9bxtSJ",
  "key27": "2Dx8aXK1EDxWsURWoH9p8QrbNppobEMptW4DWqu1zhHvh4h3g6Z5Z3QpB5yGzvm8YdQtNqVc3uu22BS4wTBF4YNo",
  "key28": "3fYsSnD9Qt6zc7tCc2ATgbWodY7ZrM9LtbYLCP89JbX32a8SxoLaj4d2oX4zAK6UmkhXaNU4HoN1cXGH8oHAw7b7",
  "key29": "EWQA1Xs5yXZxW1M4E52mYgRMwkaCBWvgUCjZQXzpx2VWsYabj6EdEMDYuUxgJFqGP7U2w3inw1mQDgpUzcFD4FS",
  "key30": "36X9PHXkFmb87dbfH1JLW2x9mqDZMEMnF7tfYFvheyXXxEhuhq1x6tvbiqoX1i6Pbg3RNCzUMkYTpK8BgRDpDpSJ",
  "key31": "3APAZfaExBeY285FB31M4DfZtuAoaV23dxufsA45sCAVbEpFrePx8b7GfB3V1tg1HWfAmHQnyaAk8NMAyFw8w1X4",
  "key32": "4PLRDzZRupmDxk58rToRVcAhxHx8QMxM7ddDd8oRGV6vKa7eNtHEJbrLe8BNsss8mdu8ckuQK9j9BFqqhb4iiK7d",
  "key33": "3JTfGrbJQsF2Ezg1KmuJe9Yt1czxGSrGE3pD5NGR1VxGuPhkbARgdwZjF7AbJW3zEqTiiR7E3ExcptjCzBkdbEqe",
  "key34": "2D8So27sVeEH6NMWApyZXdYnmhfkfBqLx3x8ARvoW9Pi9PS2hjyXZwchR2M12VcE9FK2r8UMLFrnj4V1GdB6zktS",
  "key35": "2Y2VGCAJJFyhDzLDNfgCVhwhqc5ya1quwUNr8Ajbbw7bHaCBvqTDDe3VVGobFRJ7RrJ1g76hpa2msa1ChS9kByo4",
  "key36": "5zV5Rfr21tZL7iM5bhrk9vEKiFMNzoaJsgzyGusc1s6aLpWUViRkvC3mxr3cdYNpLmH4Vj9gYKVpWHm27fxoQ3mA",
  "key37": "64eLVB51brfuaGZpnnQuvGUCpJDoZ4tJ3N2628eZg4MjUtiRUvBjLuTrYTiAovwPCBZo5DG7h2ZtKHk5cFHe7hWo",
  "key38": "1DZcDQW8nQogzj9UL5tWxq7QEAzH5k9AYNj5nnCitEfyvPQHJnPCDEowNnN7TZx6BTURoziX8vtGU22WdMUaz3w",
  "key39": "cLXYwrjqkQC5FJfmKsqMvb2mdy8qrWvEFPn4qX7sAkp7pEKvcCSRP8fPh9CjfUMqmGQRi5Hnopg8aWbcBxnPtA8",
  "key40": "1261oUFTFxFWjos8bD2abXZ36qxfgqvn2UsLN9GpKuYaqRzWw4aQJ4Xs65adNdttFQBkTwrqduLtZpHSSKgVs84w",
  "key41": "5rZezzmU6nuQvFTpoYti3GTHA3C6TVSoNCsiykFChDYcTTke419DzJ8v6Ab451ykJ97iNvW8M2k1pNnpT7zZmkQq",
  "key42": "5MgXHYntXigQCjz1UaovgvCPCLPNeqjkMgftAeQPFLWvBsM8r16G2miv5z6MUzGBzx2pntp3pfwCRdSHf6PHuxzf",
  "key43": "3jRWzEgLJvgEKVQwUcQnX2N1di6xPPhCCqLcD5xh2WYhAC35JseGsPHpDUt6ywoLLxVAYre4Du4agowPDzBRkyRb"
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
