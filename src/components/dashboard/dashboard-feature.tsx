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
    "5Dnp4YfDfKzMH13LMQJGqcdzgCZ7HKdC5NT5VVJiiW1QMcbk3ycfYDCt4yS35BbEV9J4rhteZ9fSNVu9v78kxJQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EiaKa4G6YV7hkSExx6yTJ7fE5HgtmubRbVX524xbLH9mmyLVJDBdKeRqk53qWHpyrhBTR1PtuiAQtkZLRYKV9CH",
  "key1": "2LryYb4RrZPx5q1CBZRg8ngDgkp6iF82HzwjxfgpKwrGFnjfQcbMeiRLbuX8sJGhnR59RYHjAkmNYdmsctCh2TmY",
  "key2": "3iaDAAJtLiTnK84NSE22cnnqcRAZU34iHTAhXurwjuppQjXZQsiM9pcVSNrF9Yr9pvTJcM46WARcnBpuooAUBcs5",
  "key3": "RwBggZ5XzamKwsRHnPH4MnKsMa7xxZEHCx6osD3Z7SfGZNjGHKPcV6cqNPhqfCzhFSPu9pf77a6tmjxoFDxEUKk",
  "key4": "4Y3tgfH3r1TaDyXoWvu1Za4RWUtSWHT5oVvLgYX9KqjnpuDCveYB7WxQ8T7hyZcJnmJSBozuBM33qRJMpv621qsf",
  "key5": "4wsmCfkxxFpK5sng1WBHmNNwSfsy6LGwvwcLy9XUCGFfJ2zrZcjHeciWofc9dzZ3pYj1Yw3TzDebLh3utzhGaeCR",
  "key6": "4w7xQuFXj73HQFPSUvZEXYk9nducsxzT9uhYMUF1hKdcJUsrocf6PF66twxDMbnQzzXgeNRzVeha3ZPy3Mih9dS5",
  "key7": "7xpVf3v8oCN4y1krf7xFUiKVJV5LuMWDUyqWxHNtwJCiJruPj65eMXaZQ8jwJrHiCDANTxEnTHVH682nXoYta6h",
  "key8": "5dg8QFSa227ePhuiTrFdi4Zjb7WxfXBghQz61cfzBCaQYjFcAG773UQcD6tC3n6EC7fVUvg9PPXBjjfrttdQwmvD",
  "key9": "42iRHM7wCu74Fwn9E8sh11pYvfPZiTEqiDwqW4jHbGYyeo59vBLD1aHgEziAj14GVAKhG54Hef5oE4GVvWVuv9rZ",
  "key10": "4meMvHhidEHuy2YdR3s3gCA3JXMgMD14rAY76zwqPBagvYAjvn6LQP3ALVS6GFyR5HxpefnqY1tiXS6tLHuGjTnL",
  "key11": "iKhdY8PmQPTzycq7Ew28EArttD6pwJp8m9mWGgsj3pScyui7GKtWkeHWkX1gDhwzrM3YTqpxTPpqd2W4jy86Zer",
  "key12": "2tmNtdhznXCNE8gQCfWZWwucq6fPdLneUroEdcM1gBjcnor9iktjm4Ppn8eyvSw7iD4RHfLVnECq9MRP3j1hFbx6",
  "key13": "7CrHt6Wonevundqm7A93RtRsMNauaGzbbBKLnp2z2rK9oRe1NTMdLCRGAAhSFYRqCZ6UwoWEhKCat3STKi8RFEg",
  "key14": "2AHqmMY38JKiZgafqfkdegXU2wj3SKSqNsRnW5A7GwXYbphdoQLd6CVCJQqMLQehmGoT44rLxTvh1AoCkLLjPW7S",
  "key15": "5rrPmkiHqzMdm4kFDbG6gUpu9Vf7e3E1pJgAigbrHxQJWB4JtjM7Z6Hezrio6B973h1aeByg5Dd5y2vqvinjsfx7",
  "key16": "4iYcUFGU3kkRobBSUntmR7ou3oQHUa26M33Kr88p58xBqeFBkJf33TENHPMttUQ2bHwQbDUDUKazhKrwPJZumYym",
  "key17": "5eaX7dKTVk2yKTXDrcnmzdLNarzPyKdym169iguGDbRHa5fpUgoADzQM8LzHWHWqKr7UDoRbgFrYKDgFxD76HED1",
  "key18": "47joEnw9wV2PVwbXjQioWJGWguGsMDY3kbcFaRPitZibvCxQGm7maByozkkVbdaahNPRhgqWyHsatSBf4fMaRn7h",
  "key19": "47mUGw53mZBMFDW4P883Mei6yn2QViLBNv9G5TuVhsR2mjoKbL2sGFxRjTq1bJNdSLeW4kmk4Qvo44MY7WKaXNyL",
  "key20": "9c7sHib4WwRRcLcAf5CYjTnVbDF4pseRg9Xdjj6TLu2eS8eAuUgcuWgqBjdMr29pTEj4pRc7DYuBeNoqUsCX998",
  "key21": "4nYLGbYpCx8ppvzR8mDnSHcgUdq3MHaXxESkaSXwwWc7ouLJAazsJ339Nmgd3wJ8AoYKbG7A4FCWP6evPzHPoCae",
  "key22": "2ANArWozLzNMjD5kKQoKkTonB1WjVxgC2uLAKpTdXvUC3KtUoyBkwDqKTV5ceDKHdfy3KEumvuVFsTnUfGdkeyYY",
  "key23": "3nhTP66GKPhnWbK36nTqm9RrpgYobW6kc8NFspNnBbjnXGLdtfosUvnJ3ftpgNiXXDgBSUtps6jz3rbMXzrRjYBA",
  "key24": "5Pd9duGfmHkBhLFVKzaCr2FucWopFRSnmTmiqbacfDU6VY6c3rhCAToiAy4fzj8XWc48z16FwMnZoJZNXD1HUuHR",
  "key25": "5Sef7Tsp45p4reH5KgNPztiFp6fr7Xr5VNVNJb5wqR1whmE8mt5nS5MDTiumCWqpwVi1ck9jeQKNXk7EjeyE8ehq",
  "key26": "25bZiMcAp4kEv3oTsScH3ieQYuhaqTD525VV8goqRZTmaNNZ7WfV5eitwK5AkD939FqaUXFGptYDwkwXgTShtVVj",
  "key27": "QYBs6p2Xm9r75MsoXmipuc78nmeoV3RVuQa5t73ATaWUWYiCxFqtFgcNrvkdJMYDrRtye73zJ5UHaZwudQxaJKs",
  "key28": "KkZwZTMURsaZWKQbabeAfYrMgRbxUzqyigsRa8MuqL2YT4r6dzHZYL3cJqD4GtYi4hwizTjkHKfBX4vXi4QL4Sq",
  "key29": "2k1zEW47aaRyRJ8QgCVM6pGkiHRHK7qUN1wHnqp3r6UEPVjr8PtGQZtPvsDucZJD2hj46Tp51pHu4evtRp7ygT6b",
  "key30": "jmqHCJcn4Ny3CSMJYbXyDzmWzqdPsEaCJ1N3vyFqYdbJ2mdsy6oDrT2o88aCsRUQF2L1bSppVzt2X5NMdEsgWC8",
  "key31": "53tSz5xPbqdtAsqP3jdRbPvsyfLVs56C5txPK1UgpaRTBoNKsPYRgxiH7hsCWyCXcbkLerF3NLG3hBNu54nXjuoW",
  "key32": "31i5tioptJPya7Z67yHqrTrJ6RoMN7p32LYYchR3CrAQbJP9VLmDAZJtdGnA4ARPrAUAhsmBxKRVFyt1rmt8noqb",
  "key33": "2FPAB6xGzEjpGyGfxS2USz1o9VCbNtYHsBNVA9kQW2hxZWXJmZ3ouDp2NvuthbTanaFz7BvL8m65cqvgQWKAxctY",
  "key34": "5HQ7xKihc2i7VAPQR3aZ6f1AN3qacwYN15HXhxtEEcqiBt6LGqmEuVKkTjy1NiULnywUkqrtLsHVJiYu5HwwqFcG",
  "key35": "5LQ6RtuHdAr9v3eX9MZbv3ggP4CnVD7gCrhZcWHSPqmnTa7CeQWcCMsEaJWyhkzLFfTs4aVJn2Ru1Wr1SbgVhJoA",
  "key36": "3UAEZrqk2s5FwHmqhvW9A1u36JKGCHQa9bWLYCEHfz6g42GWr3BYWYdLPVmogcY1cJAsdrqFctoPTSd3fXEwYGQy",
  "key37": "2pAEwarwQW1juM1GZh1nQo67MmETXXdVKcgvuQSvGkfGVEzvv44GfVqN4wYnizFcYa39piBKLWpHdn4MF9jxAqHn",
  "key38": "62E8z3BXsfhCRStmAwBq2uyUbPU8BiZvr9TgEAh3NQGCabLiS3Rg3M5pp7hWqhLrwoy3zGGKK56xgB7AHcyqeCPb",
  "key39": "44wU7w24chMr71hzx8owJesjaeDgtuwtzKnizzMbtb4oAxSiS1njRfHVhcfB8dnox7Wspu5YFEwzKHyqgBDieh8X",
  "key40": "39UdmtXLFPXvxyZ6XwaB6QeJAxAPZY7fhBXv9U6ybsHtqtWJMQNHVdvrMqWSECnEGRwneM5JwigSPHcxJFHcDkkm",
  "key41": "4zYxzsJTJ4Uwr4m2YbuKVh6MFdBtVenX9t1wirFjGywZibgYmwiVXhiqjM6aKhFCJ5t9tVkwScoKtZecAU1CGWqj",
  "key42": "2VUop151W7T3JUErq5j8Y3uReYsnoTYqVZs75NSsMynSmPwWu9BEVoLu25LF6RePVfd7J6qsYaiJ4D7WCE3nK742",
  "key43": "2ntNAEjLTEKTSq9LbMmMvFP6gPaJhDdoi4jdC88kDqSRr1XVCUUwjwiAmYdJuVo1aijGREuVD61Pi4P7DNL83yvt",
  "key44": "HKZbWKhqDDY7P4QKrrqo6Rp4SMjRGtJ1PNWLqn26wyxrmx4EKrzCMoDu7UjYrYvrJ55RbkMGxT2kNKrJPvnHK2t",
  "key45": "38MUVDDbzcBK5TBkcuYtLQjjbCuSMBXUvwQnqzeFbtR24qmKgkYBXwxrxHu1D8RZwz5p6817MCzYAsdEEqzkpDJ9",
  "key46": "2nmeBykRzcfNEna1PwCjTkcT2XWNnYy9Ap8hcDAYZgoq7KZQVJ4zEzq3uckUz3VhwYvhUv829zDqL1hRsGiJ3rM2"
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
