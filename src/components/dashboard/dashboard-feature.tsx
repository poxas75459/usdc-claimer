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
    "4gfysTyvuf6FjwT88TyGQxgbTATrz7VjHGFYxFnSunVUtaYNy9RMYpqkM2GvbUM6NAic7ngEksRYUYB8jEEKb8Un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7A7ZmwaYNqRWARLAQbccLmiEYjCihKJxkz197fZkekZ4maChEUFp4P98e8f2NY5xoPZJtWFLkiXHcWJ6ijmpJi3",
  "key1": "3vJVcvRoBJekwnmyFWkAkriLpCHdxyd5P4n3WPZUM2QyfPg4CVNbUYB7FU4Rw2PNQayzvgYHAeP64AGiLVmD9a5e",
  "key2": "4Tppmgd5akLvj6x7WRWSCMwzQjZCwZ4HMZV15mKAwCKKu6RgdC5YBrrLhq6dLHR4AZrgny6f7qVMMRYkkQQTkXCA",
  "key3": "3o7V8ktofETq6yRuiRNDFMGZUyE61CifVQAPkZELTEmyB9pUCVxCErzf9zR57n6Vrzy5aahVgXepggN2Q5vARTA2",
  "key4": "3GVPrsWfveEPmLFoxkG1K7CYjc4szjpgm4kBDt7jPar4bswhJWbnNM7X6kNwSgk78VHno3E6sHxAfgG1MMSkgesT",
  "key5": "2VD6eTwzr9pMPGNK8mrdsRxMjMToxmSPXt5vEQoLjBVuez6tLzw9uLu6uSTLDhajiPZ3e6WDixWN6MMXQx1tufs3",
  "key6": "5x54gDfdp514JtcHAqUAjQ73BnmgvybQKX3R9EZxVVHyvCuFECCZjVK79uQKweouUzLGfwC6WVQwvm41Ph8k5cj4",
  "key7": "4BysgWn5U2hX1NR8ZyhGsC6xavbtLjVBnhgSHx7dERCoakyaXMTfrmEyH4HHEVkxi2uctfdMQoXnPnmtUgirny5e",
  "key8": "EFG7KjTecuDoGwoPvnopwczGeKXpoKmyghqQMcKGpvQumgtv5nQzoZqT8dTJrbSdgxmthjjGEWNpnDcgj3aCyr9",
  "key9": "3fvZhUvGbakkft4t1Xs3DV8RVU3ckY8ZQTKrJ2C8LYeZiNKj91ggjgToXvzS2aQXRLnAYUtsr3uMjXj8P5uQGioN",
  "key10": "2tx3niNLhiE3CFZTF6gZxULXtMFiPry9daaW9PDt696tEnekCzV1yGZgaizbZJfALfrPon7q3VzRrML3N2hqrdWH",
  "key11": "2oLm65YCHHS5QLmhWnSzucLuhZdApdiqvitYd5bjd8uzPz4VKQH7qvzgkjJaf3uqcsfAzpXyZxqtfVaUha4dJEJn",
  "key12": "4DKygUNDF8bnQYHxBpeEDbv31oe7pzvHi5KLUtuRkqhfq5c5DEyQsxsFXnfgdMdLMUpCfzBxQyuNAgLXnCmksAU",
  "key13": "3Tc1DfbpsC8RnEboeePLkzpGWZQWW1iEe3Z62NBJ6h9JzVnyyFxjhvh8Xk3xHN17iJfoSD3RpkNmSSVV1iY3EsoH",
  "key14": "3MA6dw1B642tGRvGhCJ3hoCHg3B51Rjrvj1rb8sTjnVun4T7f1TnDN5JoiVvt8TJFUgEoax8vppLSjaYMPU53sbE",
  "key15": "F1qdcV87kdNyLt1qu1ms6DP5nVL3b61qsJ5cC3fhrGib14scK6qe3xohZYtJvTq7mi4eDFv9sE8SbZiHtHVxtJ2",
  "key16": "5HpMDMgfJ5uqCJPeTZ8pvgqqhaAuhK2UkVLPft2TWgEmaDAPTJPMrwxXv2tU8QN3tQfjeH4b1VXkzcCH2YN99z94",
  "key17": "2PYdTvuKcm6QEE5ZKhVQUR9j8ncjsj15RJqYtQtHkTsNLZxw5dxNHH4MSh2mpuAi1LMkiaUYbMG98pV7bE1anihJ",
  "key18": "2pqyNq36ESu6sCs7DHGpFKBFvNi5YjQkNZTqjqq6n7bfyWnzk9iwdM9bpm3qqSKPK6CZ6eG9z2o4fpHh1ypUtWcx",
  "key19": "3tinA87aUKFWQTgmdF9yfRgf7kXh4MeBHpAUSfXHuTnhaEpJYFN45z6Le7MFsj2LGqitSir8p83HWTnquku3BT1q",
  "key20": "2UhHAZZUtYKT2oakEVAtFKi5uZ61yb9P4yBLnmz8rPq8k7X8XfowSietoF91HVG7enQ7CRQWFaHXiRmynuNknm7H",
  "key21": "52qMTT4ivD14xngFkHPH1uj78wgJdX3NsfNB3uDqHAf817Kr5Fsn1uer5mBb314GE9vFGteVNKEVAV6FMkHUWjbH",
  "key22": "Njp2HydqnHxtE38RKv8rxJL4JaZYXZfDMLzgWJ6f9Nu9KpXUgtqQ4HwvmUDTAFggFGTLj7H2bVJjDPFJtb5X4SD",
  "key23": "2qte4uaihdtfo7KYz1JAHXiUjsAiKgXAXBLLPT3yEAERJxZpZ59WTc2ApgUjMLZXqGPRYsvygXHb6KHPAmTYyjhY",
  "key24": "3sKn3GKbZsyjq1jEaoi5vVLH6BZn23yqgub5nft9tGNf5LG6MCqMuV9mF2zLHGsyCtcm9noVREtu2mzxssrf52st",
  "key25": "5VCFVTZMYWHb74bFiTyNVKq3G68uKhtyCoPbmfCNafbD8WWCgJjYp1CCPPyaJn4RmKQSBLUgpkHNJ23iPbfhopmZ",
  "key26": "43VCP9a6zm4GstGthaVoN4xrZKbFuV3ZbmcfifAzb6kVGycpkFfDc2aFwP57fgRAoiDW5cXPFkHmwy5DDVCokowV",
  "key27": "TJSsJUx7BUP1LzjXQwFTyfoS691bk4J1u9auMLMPGC441H9cNrM6iZ9DGbMGjV2wixAiaczABB62a9CnzPAGCus",
  "key28": "5xf1GFphJo4c9DP1UBp2zpqj94c4vRa6PZkXdwasX9p6tEAEGYLo2FWbCnZiPfqSGBF2cabMHJqvMp2MWtB5PUwU",
  "key29": "39DsR6VAv7Uw95ud84v84Av2AcynpK5hXnkm5kmbvT62ZX9ycAnxfKUWHi8Ki4vJdgyivhDDNoNYFVbEnAgp2VxX",
  "key30": "5ssQrwdupynxXeaMd4iWTa6HxY3iQq2En2rVKH1DekjwBBDjwLrSyZ7pRTkzoSZRpoLnZHyEygvdkjpxgs6NTikg",
  "key31": "3YMFvkd94HvuCV9KmYLq2YjauvVi8Pfc7deHMPSQbVFfv8sfajyFb6srR5MAstw8tGc9V5u8hpZXbUw9PwMfw1q2",
  "key32": "4gb7mEW6cViptxpoJuhS8B9g2kqZbnzwf69Jd1vGfwjQnpkDVA3R4Ws9iDTLvCdZgzKJuoYx53aPmqmCxeiWEVwg",
  "key33": "3Ar9ib5Q9Jsw4BVf4AWqL97SeYtvkyFiPbGRW7EiV87zS7gGdWoeCAzCVX9JPhN6fQfjdCG85PxS93MUyhKWzbU5",
  "key34": "2obbMEJBLKdcEJQVNYEnmFtC3kmiQ7i1EeMuuUEKHuLWBwZou6yHCz1kfsFxRogSdzWz2uYyZE3bFcSj4PkzzpJu",
  "key35": "3JM4Pb38Fr8Y5JN5T3uejveshACKZYu3ZY7RSQBHijpqqthg6cuZWuvbiZF7dQdqKH3bVjRiF7srr3x2AJVpWH71",
  "key36": "46N1nu7UaE6f6xEX93Ms2ntKyu3sLfw2Wib3WoNCTKep1yRMCeqJHpuMEgWwNCXGjioXzeGt4YZ3yjAK9yvAfw1P",
  "key37": "3WGe7SPWRqETYXW1SkXha6JYd9YjokYqjfoE2NopNVKvZ4ZzgSceBKQAU6fsHMLkqQ9FFdDwWmGeJLsaH28SRpxA"
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
