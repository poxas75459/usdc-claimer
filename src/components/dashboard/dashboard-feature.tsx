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
    "4rpcW8UetqVRjNhHkzHv2aJk8QmtUXEHto2T7tyqgHY8RKZFS5bmdBMkTWNedYfkC3DBe2y5gFGzR2Jgo1UJGTPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vfxm2anqHM8yoYr36n4zWuDQR1iYkRnAWQVdjPWoTrBDbWCYsxAAi48N4c47GztnDCjZBR7rL8gUNYXGAGtgLqs",
  "key1": "UdzzsBAjsy3J338UGWn4QHxsMRcc8LPcmiNL27hEHKhmfN1mXzoRi9H6DhMbVEE8AAGzCyEQxTiLZZnTLv3diqH",
  "key2": "2LZZ19Bg57hVvg5xGTXy8pD3XX2UzA17NFBvCxYGSanp3jjMHhbkDgH57Wqd2iKt9PAdPhrkJGHzoMgD87s1bMHd",
  "key3": "4mt3kNDQNGKcmHXM5Ax7SxS9SGuw6WpAgMShihMZpHiTmsLsXF1g2FCKArvUUiiE147iVCp1qXV3yDZkj93UL2eY",
  "key4": "2kCMCuHi1vHV8eiMkHUKqUMcrAfMVpXyHEKH1fFZpiZVqG4cTvTKkAimCCKztULd9EHxiDYoyVwcXGeNDjT21VYm",
  "key5": "5AsgVAsns9VHe4FjxCgj3byWvMzVT9ReK5DrXXd6qGJuRgZbd6T2Xkyb1cH2T91KCCaEuxdhF3RMkYxLE6iRoGAc",
  "key6": "5VSzDJMJwgxKg59mPbxtvDwvpMwA7xpMfKucVyJAbTytN6tvskhyW2fjyKPyvRqTBttfvkk3uxGNUiUkUF6Fnxwq",
  "key7": "VzGNA1AFgXpw3jy6dTeZ1GfTC47mwGVJtEFBqsUL8giVpDZhZsHaHNXBydS5veckUh1eqEBiyriKN6LrF8J8Gpc",
  "key8": "5Goni3DM597PDhGhNZ8383DaGyk2xtsWAWXdG4CMNHfZx6sixtBMNKb9W4eeiVqVH1WZ1uxLK9Q4Po1ydDjfgZvu",
  "key9": "Tpxdy9Ap5NNTWgP3qcc3pVyZfor4ps3vDyd82FxygPrxiYLBfcvPia5RuPTy2qAZBnA2V26MdEUk9ShHtxtkeUJ",
  "key10": "4YaddaaWywVAvypRuN93xcko7Afvof2Ru9NgNWTtDmiUcdKGBmyCTJBtHxx2aCV4J3VRJz634byFSgLUGSUyj1Lb",
  "key11": "AJjTZ3tgLw2kDkGtWFgcorL1q9NeHTEVf3BKbYJDDes5MNC8HkV1gjN3WBm41n9TjhFEZsEvQxvtKuFoAv9G5NN",
  "key12": "39KF3nJ6PoYSYBNUp4CaF8uVLvviajmMWMmKMG1ybEmkZaRe6aY2wGCXKFiKpZgnJ4ihuYqV5AsQ3siTL5Gxsmig",
  "key13": "3tiTVTNaQ1UJkw4PXtCauFt7hwfaqPrH4xMD3NBWATKN8JmGYsMP2wGQ6gAn1CPDTGRKVk3QtWxFXrEtZsh9YMoL",
  "key14": "3VNRBRhHQJMWKgZgoNTAdmix4ATRKg8DZZ9p6Agai6Cs6NVsyV7k9S1eFwP7ucdu28xFmAowqEE515Y3nGVg9kFB",
  "key15": "4PHhYx7URXB5rMZmNTunBG3STrY3Yv4hEVQn3rEk6EN6tf7HhUv24iGRdmgEPPQN8KtkRWbDtSh3mQEv2f5B9dvP",
  "key16": "5Qcu2DqdFUXVxrD2caKZs3ZoQYk1ts1zeA6hqGnb7RkwX6N9ZyEwE7BJAsuw736oByUB3qChJd3Q2eqX8FW6KR2L",
  "key17": "4vnADcDNKdQMftrvrAWZ9T3ShL68hURDXbzogdzhxc6wNvt5j8rZE66kBzKZARP1cHoCodYSELWpmJV618wBf7em",
  "key18": "3rNt84ojhJs4KExUt42nRPaVf39YkAQE5WgwK9x8ZmurqCHtrvkJpMAGDreptPLq8Ga9GHXN4ykhN1rWYvupFesJ",
  "key19": "2KhKirUqL8qbUQpSoerPwW2JhsTKQYSWv945iGca2djT2Lh59U5rkhUudn92gLyjvQJw1jYxKrVGUSefrzea1eTg",
  "key20": "2e9mr4dybx9esURrRfawCGUXty8vXtVApq4J1sz6EVtPBxy1wpe9FZpy7xdAdDCYn9fWbQxYVDYzr2j1YA8hPyPN",
  "key21": "qfkABeMjTqzM5TFZjK3Fw5yKT2rRhoPH7z6T6EmhD1RcdcJUdFzDGtN4FSezPkvZyNsvjYuFA6ALVE95FssfcUW",
  "key22": "4ue2ezfQuzqVg2CtHvdkcnZm9CigZj8YZgjRwrynngyb6nvXShEnXxqTFU4fdQoaLdPrkVsRW7hhCMnkgcyV9FbT",
  "key23": "4HkDSPToS6xZi1Rw79Nt6YK3VvdYED1UmF5VqyQHtn9FFSuVF9UzsQwTWMULUYhJgnBKMvNdG9hcxM1hbSU3yrV5",
  "key24": "BqX2YVYDfK2hQKddusbLHZcYtPTdZhJXtKWLJDL2sRCmLhBBxNMAiET8NN91Fp8iPEyKuXmLdEpg8Dp1F9gBU7d",
  "key25": "81RzMTvJ49b7rbrHuBjBVb31oKeWH7mJVu1jbboLkXbRTb27TvUrFy5x5KFnnrFQ7muZ36hZsd789PSfx1urSqh",
  "key26": "2iZTLgpB1cWqZi1wZ1KwAqKigaWCBpsgFe3ysA2GjbaqD1NxKXY2ybspG8D397N5BwwEveEvHLAmFCJtJHtSuT8t",
  "key27": "2W4vqWYwetPR1srDtG8j8HPoSAsfnNEHqmkQ7N8hHksn9snHUzDog1sMdaof5XQ4AuSo4U83wzqvxCthS9LGQMDa",
  "key28": "5n4hu9JuF4kATemuVDrC4GNCum8yEJfQUaPzproamhEU8Nt4LdCtTjinXhwtegzjQwXRM82pcg3ABv3veFiWZn7u",
  "key29": "4Tb3CEhXVc4FfbvugsYdgx1mc2JWrPrAbdnhMXqeh9Ndsj7qjzsVU7GAfHDHpC9JHeKj52MTL7d9Zh7hZfW28BsA",
  "key30": "b2S9Do4HJEBvjhP96pTaXq7x4z1779oiGjgcv1FstcwdPvvmvXXEZXoYM8D2ziKLCqEjX6NLREcttXCD2HAw6QZ",
  "key31": "3WWZVKovb2cfXoZmK8RKC8qJ1tNnjW9jaS3bapZ1tbxRoz5faJBppAm8Zae9BGjKS5sp52veNp5yPTuS15CvEmef",
  "key32": "3iEeqd8ZQ8pEU2AuTEcK4mntNAhSjvdxmjm44BMbosYT6z4ExXkLHPjdM7wsBYaxxHFVaATSmuVV7scdHJ42KhfS",
  "key33": "3iRovCx9dVLSLCeuuQPkh5SCG1tmvji4cEN2YfEVkEjdZef9At1vKLkXfWovKz8gCuydjtc52Eq5YNbK5VptTy2u",
  "key34": "5hRNL6dv75sGroJjqQMWde1kVsBdt6zdwDBisKn8J4x3i4rLQPpqNZzyLgnwFDoDTEdnZAuatoedwddTKooYNMWd",
  "key35": "3hXdhVLbjhyX8Je5quvhDR5iX7eRaHYRy7Lv95K3SrGCbtJSsL63TKTRCVSoD56x4v9u9L3fY1hvM7Xxz9WwpaVF",
  "key36": "3f2fmnP79tzWVPRKFuxknJf7ZVedrgiWCkXjqmy6tGrdEfERqoJJDrL3hK1EA6q4YU7SQwmW8A9YrDzXwwLuWQJu",
  "key37": "4z8BEPnXjJccnN9esnz6cD2ChWFYrhkjUywJ8gchkSjqD9S9n9WASuxsMkwJJjdRUnNdtTPRxBeecCEqNCmy1GeF",
  "key38": "2u7D7v8644o1k6MPGwy2JQfWkqJWdjj6nr4yKyBapiN2ejmSXN9fxpLFiituCnD6T9ojQPDp6B6jmSv9QVdQqAm5",
  "key39": "CMyowPuoQGeTK6Hv4ZkCXsz9s2uRxeP7QY2h6C5nuFRDZgygBsSzPMWHUx4yN2pZMB8BMg5ShsLDP51W9HELDxB",
  "key40": "2ShaT9QnuHYqRXSHLVtWrjT2WZqMn3j5hCDz28fJBrF6danikXnkP6a57ihMZpRBjAWsvmEBLRk93GES5fEMekD",
  "key41": "56iwC5f81WssTjY2PXEeNcfnhdDvFUHw2GAhRnnfab9CNcdrTFhSiNi3YKGMX8T4oyG1KHVC6cvRE9FXLEZbdkya",
  "key42": "5WQtvTVi7HXs3wxgA7PNDwie6zptRE6RW7apiNd4TDY4C1sD8hvAKivQvVgNZqaSRvQJwmxchpemcCFueQEYLMTU",
  "key43": "gQYRMEHsbXQ91dvfHEMGFJimSyZay32oegsvdQhYtSGBZDKn4GQt4nueeq4rLnETCsbNF75o5tWnxPPt7r6Si6c",
  "key44": "3QseYcdNa8WU1LZCjPhpXHyFKjWAi6L5LcURfUGsexSfMhdL4DQgYyxNQExqagGx46TAHP3zurXyRnp2VewjhomF",
  "key45": "96CL4DRHyJ7G3hqfgre9Qt5eoZwD6Uwp8z1bksuVQGmbRudYeVokWrtAo23B4bLLC22Xs9BFizKBnrzXFQ72S2T",
  "key46": "2PrQRqzyBz1eFHA1oZpLMQXxzDYALwrS15Wgx2VkBU4Ldp1QYGBZMQr4DwM8caWNBJ8dmX23SvhZbfE6WnmJpdYk",
  "key47": "U9xQNNcyt6Mt9xSXUqexCMQHiTvkhaMbg6Lx9MyiDgHrGMVm1jLSGfQk8z8XzwaoqhAihCmVTEgzF2D2yofbgdd",
  "key48": "224kkcnqJZYkZ1cgA5N1FYbbbPVxVQedYKZV2e9AxYijqyRseB8D6EfwMcVE45de2FUWvT6gXr6un88TLWk3hE3F"
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
