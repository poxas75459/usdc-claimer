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
    "RyvXKEoY2kt369wtrXFdQgw49wiz2nW7gG9GLHR6sHxL5ZkjKgDrVVE51kcG9RLVAx72DvYL8gaC2H8f6HNcFba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kGWSRGTheYxauK9HWPXe5NGAKppZbpBASWqzi3R6utLMzDakUhbXfMhjgNCb29H3kk7jQPePB8Uvy5VwK2jtAeb",
  "key1": "3mCqQ372a2erSDdkjVckMixvJkfmae2a34GzN9mYj72HgLsqHLBmY2EXVYxhkB8KPJuaAESjPSax2n6GxFaTFVfE",
  "key2": "Dk3geBQSKr7gfnYygYvh3BR3XPMBjBQhnJcb997LdpKdvEKzCTeRtVbCWwFJQaTYjvp2YvrKXNVcQ6VEYBPvtms",
  "key3": "JPm4sQrpXEiGUaTizu12gkSMwbw3gdknc5Wz4rVka49coGVhNbDttphPFoverKQburR9CjHKLRFdxM6sThxToSh",
  "key4": "2bm9iTUu1EC5dkq9XvjibE3JVyXpFxR3qjs7uofQurc1gpQwUjF7ap3FunpufPDrVK9RmjopqCJxwjr4DXoNjuhs",
  "key5": "3aLJ5GR1ib8BkYG65bRSyCHcpWgLZaRbaakRSjXckBgtpixTKeqRnCrvQDxhBvWfhjLREZBZKfqPZGm15965UKLh",
  "key6": "2xzFzVwm7MFdFfqbMsKCp1o4KcVPoVrc43hiAddkCKEURK7EuiELGVKut8kNy6Nxr1QYL8W2MFncvf5RtvpWTmaW",
  "key7": "2vkCFNmvsdWZBsCHaPDemFvWSNKeMoeZqAvqhLLGsEvaENJxWZzeB6MXfyjvYnnFXuqvNc2UjQ2Psfb2no1d6oNT",
  "key8": "59Cc9A7Rmj8HFbJ11u5MXNP1dKp7wrLz4QoAcLkBTRDqUGA9MKbnaDTErcbmoZ9vBsuj5D71Barfrn3VwK9DnvNU",
  "key9": "3NSJe9Pf7um9GjRLtcVUHzeN91bmWn6ywmSvPVGTrQJkdWVf3SLuUuBeQq2YeVCwyrGtX6Ah2N56krcU3AHvPoXW",
  "key10": "4bgxcU34HND2QJvmpQ9GAU34UGuP4rxYo1iZ639A9dzBVfqDtRHFaFeLri5EXoWgDuGu6XuCXjMWoj85y87Fdu35",
  "key11": "2G16KYaTYaiCF4QwRK5wHQy9Ye82n1uC7B4hCbuUahU3Ht7xsTuHWFoL1yi7ie2SdXhjWFoWwWT1xjKnQEdHNEXv",
  "key12": "3xGU7yRHr3dQp6UJ8vsKrSKoxCJjh3wTyhJ5e4YWevFguFjVMNNni3WnkHZraxLovk1CFinMKYrvuNWwm9uNjYCi",
  "key13": "3upoy32R4WJXBcEfQ71hAvyNMQXk8jXFiyfDwWT7PXBKZaaVWdcmfJ9VAUKTn6RL91uChLajn67uKR5QjqZ9S3tU",
  "key14": "n2npVMFFxfzKvd5NQhKu1LrmjjFuntKLpASkcVTwz6V14NdVv8A5oHgFj2KTsYTqD9rSi8BCzTkbcMjuuiz1Ejm",
  "key15": "36kLZTDbY2jVKSv7yjohVrMv1QHFcjhYd2oUxhLC2tRwtm3LMQbsF9rtL68aoXmDs7duwseUC7h8xtfar9VB9zBb",
  "key16": "neXeeawLFuJksjcVwLkFhtXwgJV1cvXbrvUtRnmPntrdLDGKrKi8tnqzj4C2F3F1GyA5te4j93qET6xD3DXQhmN",
  "key17": "TxLqq3rjZbcKn28hH8DVQu9LJLD1Y9M6unp2GzYPvQ2fiX6eixLAtAhcYSVnrPsnFQRBjR3wMEqK3CxnUz8HmNr",
  "key18": "28CKF2T4Fzu6oqHWsbqu2cncHPQP5J33g3uhBMrc7uF173jbTLQNJPJNSv6QkyimEeewCx3C76VZ1htNJrEdEKpr",
  "key19": "3LvaWuyDjXrVKcyj8mY19HVVp5pNtJmzAWZ2yRA3qxjubXVht2dqDrUkzyNPLxWhrUPouyEAd8kiB2FS6mBFzcBC",
  "key20": "4ZRqVybmYd2iqqgLtpfEp9WjDF5v62EKsAuB8PnhdNkCzGGSWYSTxpRpwgrzTZf1tYpV6xbhv4UwQtxxDD36LswM",
  "key21": "3YRvP9AY5AdMzg1w8j13EVnAGfzfcMvisnVHjbyWBu3Yu6yZ27FRYqANzcFhYcZM4LMzgYyVLy1f6GaXrro7ViZu",
  "key22": "4YckdJD4mYJopNkQGakcChRCPeNEg8LdgNQvWm73ZTGkLh6AQkNJSQeuQ6rfkM5wnJn4TXuL4DZadgntrePBfEYL",
  "key23": "Cf4UcDmQgBRxYSDz2SqohKpFCUuoJwTCTPLDG5TTFAwo7HpwiM6BrqHSCazWUFqMbK9EoMM48FeLpLaFSCZ9LVm",
  "key24": "543Tirx9e3jtr7vDKQRxK9ErZjeEaGab5Adk1ksPZt3Gc19SQ3GypKA1b8ezh4SnoGUbMyCgQogtWHVhXcRhYcpc",
  "key25": "wXYJmDVoTwbNnyYuoGPQGpQT6fqFURKfXMjs1vVBLZNmpTJeiBEoojk7ExzDiVP86AzhJxmJUamn5J6mpv2nMCP",
  "key26": "ZEPa4uaF9kXWppkQCHJbNKMR1jaNfkKASYtyvd5xGGxeVo1pQioNDUSx7kHjiqFVWcHkoqnnR35xmae8HrA7C68",
  "key27": "5zHfY2BjHN5VDC1bQeURPn3y8792xYpfmanhr9pbEViduZVJ1Q9NqURA7zDKGF2yUEJ6gDykgWvEcrDLEeWyMgGM",
  "key28": "4MeU9P2jpgfsY6N6KS7CDKLnnFTq7fbGfPPQBo4SLdkn7AfxMqTTz9NNGsw6gjckmo11SqUsMVVK566oBaLkQ4kC",
  "key29": "4KJyJK8gFftSg1QgvhJ6n6N29o9F2HxsTVraND33GTN1YAC23s6b2Zxr6e6UCEM87K3usQ75uUNPscXW3uY13qXR",
  "key30": "5pkGyFCSjzM7Br8KkXEnVqHpNGqMvhJgHZ8cHiWmCHpJj3ZiDRbsYdwH4Kjf5M7JBttuJB7CGJSoYvG5Ztrpn28y",
  "key31": "2VVLEa7WKbgsipVqMLMbU2QN3WyGq37kzVMLwzRQrGS6sLh8go32qtQn7G4hQCfvNf1g8p34g4kRbqZvPskA2Edh",
  "key32": "5GkHCWU1EbG9YcbX3hCy3pS2Kk9p1GaBDTHDCKZdCc6V82Xi2YpwzyidZpBEQ8MVRzAvGyBrmXhU7JAmPzKUMpNc",
  "key33": "38XvnzbQ1kZPZvR92oK2aR3BQCmDk8NGoxHLLGxhRmdD6TEuVCPsokGBbfrAfXXADKaPVKchR5FwB4E4YuTqouSH",
  "key34": "3ywiZ56tzANGdRMdSJQmnFijhGfAeD5PmVLHBwh6SKLJNYGd4CzXChSAGGuWwehrb3RF9SyxzFffi2zBgb4LLMqx",
  "key35": "4GFDYXtFb3xn8Uxe9YY667wpzAGFU5AVVrUsvVQMxgcqWSdCekLzgdXXqYrRvrrSLgBBD6JvDCWs1S6cTajz54hY",
  "key36": "3AwdPiDHjKfdTTGz2XksMVqsyU4M3NY3D96gybDWf8hz1BNyAzdLPsJA5j4LcJHovVWwm26KSaM8EMLQbVU9hauj",
  "key37": "2gqby5HqyVPE2B51uSo3PFN59Y4gdhJwvbJt5cXutZnPBw8TPKhwevMXzLagbHVtgZze7oAKzmNG9F6b6XV4VDem",
  "key38": "gWWJuHjmVaFjwq3z6kUZPheuLsvDZfYszE6YevEkVEzm8NFzKwpYbUmLNbjzjJMud1A9obR9sueLcA2ty9DTwBz",
  "key39": "54HUKa3LBPMXpChzvXY1qMWxtAVM3KyFwUEmQn8wtNNj1QFJTcr5vejzJVgPN6A3usf3FAWVi3MRJi2FnwLCZ5kX",
  "key40": "K266epkUYqnd9g7mBMWCAfphQL6HUapweTcjcg9vnN4R9z6bBbTs9tB7oUfe88SX52eGzn5A16EVaxA6uxmwP5b",
  "key41": "5Ht1U4dipVrnQpnQUrA4K2ZfDcjaNaFGsGFR8cBL3pHYKgrMfvkNY8TnJ3rQF6fxJmginoQhhXtbqjtALBsNnLaa",
  "key42": "24zGBRicVc4H2CTeh6gotKY6UtY85Fho2QQYzrYYThNDpzPDX8U2ggLrg5V9maSu4TKcSqy4PVcvQKNr3SUbYF8f",
  "key43": "5emEJW8MqifNCCAQ9gUHjhAFoQguG7SRoKaksBRRJPWZfyKdjWYFFw9ZBTVyJHPi7RHViYLoX2HgNsyazhoHpY5S",
  "key44": "2DKFmwKQQRxnZZ4g8tXeEsJsNQAYkmQpNhDNhJG3rsToR2NGZ2ntJqsr5cMp2ghcPn8k5JDZnB7mDPn12y6MXxk3"
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
