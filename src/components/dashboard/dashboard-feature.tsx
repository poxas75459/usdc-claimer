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
    "4meRgFc5MR7ut3S5jJYdLU5x52FP74GDa4TqQKWqqrypuY5YYk3b232uLpHPeuvHpQV6azv5MWeqi6Zyt3cy5cN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vRQ76WWkzcE8HPQeSN2gL2siGAov5sZrtaZep1P4757JYLx5AsL8RCexfqxhZSxWXDi87chwnCcYpzrwMzE6ViG",
  "key1": "4VjxmBM2rC2Bna3SReYuHCFYwB9vvUM5x9H5oC8WrMupdXJRW5pHqbCYW14P5qY7zUNcRHWcAanvWZWDbYM8VL5H",
  "key2": "2urgrdaV4kbLzjEJq3RnYUNcMdhuzuqJJeBtNfvvtc7QS6MTCNcFKVxQ1d86iYxWR5cAhgX54f5StpUP3PPCxdVC",
  "key3": "KLwTB3GTGAmKr6zDSasTpBEteR4cLtC1XNPQPT2KgiWrN16ujKQ5vNP9C4TrhMPHx9x5wTLrJ4ntXTCMQr9c9mc",
  "key4": "18LB2TuF4SNzq7HwBeuqKUyTL6ZiLBgo9MLdmELyvCFCxnMPHi7ptM5g1n2quJVn5yWtXwhAJ9cjsGQXZkqR5ow",
  "key5": "4ApPRMpFDaitNH3WkRhyk5r6TMadhEw764e9HkeEvGwR6EDaPNX87MZn262vr5LDZphoj7EczcJHTj81pAZgKDp",
  "key6": "2rToF8ntvwKAMhBEocorxehQhSLaRB5D9VTw7hcum6C3Uf3FheFUGWXpzafy5WoBoqAmyDxVN92oWT8MjMNkTu7X",
  "key7": "2V67wLKKvN1cWLAQ3frNnFAtPp7GjGzecwgqn6VzXGicrkhK6zkJYYtM2FVT97FWXm8bXrrfgiHVYksApgxvcnhT",
  "key8": "42SpBDrNSRDpb5h24KaYTwEm6mugtwXvJgjRHpLsTjMqv2Gk4UXC5QKDoTPH9C25byHnBFaJYY1ZvGHsGFiQKoMf",
  "key9": "23cY6a8iJ8iCqG3GeY34kmvFrLe2YVWTZWtF91cA5M8pg68eQSJq2LxNu4wjpBu3dxzdNoKhXLnF5Fb29Jxawicc",
  "key10": "2sevHALhf17nhrTaDycQXaBuLZJ29c3tQYL4GCSaokabnofwfLqYtEZmPAqAYLkRrtpsss6St1wc3UeHbjjH9ax2",
  "key11": "5DgVFrwbKVAu6sDG21jZd47P5vXeCVuvhEBcxbs97j7JGTjnmscGrQEGmLknBnCT4UdoMeGfXjjjT4brBy6kwLqv",
  "key12": "o31BacnrpXS7D5aoDnrn9JeA23G3Ge19C4SV7BPAUZ8qgaDrSXe5rJzwzgvnPoYu3uoDyPbYm3bDupYtqhbmCaS",
  "key13": "4N8PiZ2YG4ojRFnGRouoDjBejM7EdrjjjXsD3fxgm6PU5rHybF5n3oXSCkWNieH4Jjy8NftVXPQSN5GzMgDCN3Wc",
  "key14": "5232KUbV4AkjeapQF8qcUKH4NB92KM7J7gKdq6mu4L4h54EvEaqheqVccbk5UmXtGKqyM5LwtJydfSMAQjRaD8h4",
  "key15": "2RJeS4MGnBGJCApsHETrriPnEQcRLLUnQkHURqNYVQHksXroX3STLWY5eHvcCvnwDQf1Lwo6aLY3ZQuJbvqs7Nwq",
  "key16": "3EDcV6Q1bjZekwVrL1hiHWUHczAynUVk9kMZ3nGjx4yg53yCFVDG1QzzrXh4StvVW2CHpxBLm6WAe7W931JJqCuY",
  "key17": "3bx5euJtKbdyEPNePLPDMRgx4HNwMD7XD2yzE7qkF9ngHgiP8CQwpXMAuQehHrF5p3Qz2vkJUjJ2kQvo2e8CkBT8",
  "key18": "5YTs1NnDEL8YdKUFGnugKVnue7BYDu6S1q2DL1QbTQN5W4fupHdqDSXdxyDYdWYBb1XnuSernS3TLsymMvtxPoNX",
  "key19": "55L6txQbwyQyXYqAzT8irHY5eo7oehfZtRC7T2oWpgsho9fDW5sGX2g4u6wGdP1gNFjpKrcxZyBCQPUzhf9wEUzG",
  "key20": "5bYpr53nnA9dAeTR2ijMCu4KNo5dZXcaTz5RqQuA8F7FLfZfwQjPCTrAqHuY3noN4KToKJwqNvRtcTXSiEN6owno",
  "key21": "2zLccedivUgqj5HS46oN9HGEojFpJLKFz26BpbWuBxTnj2nM9zzLXtwkBfryKniggxis3bDkbvqBPTJrxbUjYGJ1",
  "key22": "4QMJGt1vAfro1ftrZocPgxzm2gbLSxdw4weBDdhQ5QgtadDwadNwzaLaDmzucq4jfZvpohcwrC1xZPCZV61WEpE5",
  "key23": "4deMsyTNk5Q7XDkgydT2EsaoLPnKKGCZodNyAmmMuD4rLjC6ByFxHCdsdMKZJTFJszbZm9YXDekaYoL1LzVKZVXq",
  "key24": "5bwFN12E63R69JsHvcivYAXYxdCdpSQdAL5CwetQ4iLzm6Txa89ZSkfNTw6fkGNEroSGD6a8wWM1WtHdZ2uqkthi",
  "key25": "3Bu2pLj4xEQddDvUtgTHF2xFSrmZjUboCb4rGzNcvgyjJDTULeLrKq11LgYBxfV7UEjqt4tJ9KcdqHSnHC9WVkar",
  "key26": "4uEreFCE8kE1ANAcf3yjTTFkuXXZhBi5JLyNa6jT7b59mERYkvWZY8jqrzZp52pnemUXznaJTqL1KmM24ShqSNgv",
  "key27": "3DQW4SiMC2975ZKJLu6dBqi9x3GyiAobBFZWj2U9CUWHPYwRXhuGY5ubAfTHKsQEdcF4GrdMyfEPnQaViJvrxqWf",
  "key28": "9wRp1Q3z1qhCrRCSjCcW7JYK7KGKkv5FqGayRd2Z8TQiq9Y9D64iyVrrWGHS5ZNznTTCq6GayHsHhFGRn9EUg6m",
  "key29": "2zghjP6bu8SNVytm25U3K1ZWcLYbP8ZZeyCLoS2yt3VuZAZecTepQmGAEzq8jWUi7qW548jWQVbEYnPL3WQU2Rm2",
  "key30": "4o7hYx6FJsZfpsyWLPVSCwQke5gdedeFSprAbMD2FizuqQsdXfep4mxh9DKW68FospBCxiD4wR6R1cXmeTXarZrP",
  "key31": "3w5gcdqfgTDFtmGVmKFhNS1frxLbC9ehTmLQGCzDpEckvF4XD35q498RwbuMHzKtNnNWjETayLycmZMKyYbjFngH",
  "key32": "PNUT2jTXxmJwmBLEV8Mw5MBT9oEsnUhzUwGeVGnUmXmC5oRhAanLcWGc27AEm6rRKuEs4Do6tpjYaNkwCcARkbG",
  "key33": "4LiQrdQt49oUgaL8c5pQ9mA3dRTkdm1ndrpfraMFQkaEmZ5M6iQdxSsADovyZZDt4cK7dLtcMSHC6onvNVFMRyCt",
  "key34": "4XTMSiNEDSxNJt5vQXPxdSoiLKfPGxkAeWcGizLF3Xpm1c2xBP9p9tdASkGNjfGLexK4sGisMCEKQJ6v9FsaCj6T",
  "key35": "2pCb2j2eUs3R5wZyqRMCUWtNo3qPymPk9m4xaDsj9EDvBWCsWASeBczkdQTEUhxC6Jhsj7CsA36JXLSZj1FwFWaW",
  "key36": "3gsYhkjzvk9iodcFJjgf4y5tLt56a4Zumd8GYAnRTcrefRQgqpLEC2MD9tg93kRKUxXj7vHwsGd5vpy5iA7ZBG7K",
  "key37": "4bdb5wMs9MQqJuzsVq2MeDRx8CUn3YRgVur5QsZbHspNcGK4MaCyH87rYzKzzkk9dPjy7Tvu2XAYLwMBFYA91de2",
  "key38": "2nyDG3Fr95unZdYqZJJFLVX1kknP1vdjWB7Crnsy3mRAhJCjP1yS9BhA4kEb3ktZRaZ5WJFe5ngbxaD8bAqBRMGt",
  "key39": "5AnFULi6QXEoKDXAz1VzTh9soDcmT22JiDnkmjjawF5ag3BTRnzQ62nJczHfAFrQnRqRRbj38Ma8RdzQhVgFhNWc",
  "key40": "429xn6tzXgyaPJtQ5TrRcAJKNC9a8mTpfKTL4W9Jguz9tZp3bHeAW9zrQTmVxr3WKRLMa6zEjmusu4sQogaJFfp3",
  "key41": "2TrMHTsyuFB33fScBSuorLfry7BDgqirpdXtKmgGp2HTqww6Js73bqEpjk2qQ3GWYHyNvEYtFbaKHo15g7AiWGrE",
  "key42": "4VwqpgHivd7ihTp7nWWcaUbd7Qdyyc1ARgxxrieqPukv8aEX9e6QwsAmXRks4R87PKk8MvNSr8edKjh2epCSUvLP",
  "key43": "4N1XgWWkss4iwsaEfWseQsyv2JPRU3CN7KNmvonZBoDHQWAB84kcqUS7vEtsFwJhj9Fu3J4aeHnenVzqSUt9mxQg",
  "key44": "dXjmtrardWpASdg2ufAWggWas72c7yXj8zvoBVmA2vLcq7xaYTCAyFLejBzzmk7EFKHcKvTn4LaXzqgqN32EzMC",
  "key45": "84U7Eu6c2iK8vPcKemckHNczCqGhgR4XmjFKGfbo2FDXgDpQKuRcQ6WC5dYiSjiECFPwaYq82rZuNrCdftXHHPQ",
  "key46": "4csFM7SdBKT9RP3gNftC4KkgDKPvMXEyDjgVqiWwpojTWN9m247XuQsMtqqgMthojCRKGfsrngaDtMvXzei9SqiA",
  "key47": "2zXfdsSrGXsgf9PLrkRiQCjYVKHsLb4fkzjXBkghnVw5XviE1WADtbQS25NGRvAWtEJibsorWuksMhoLs8jzJtdt"
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
