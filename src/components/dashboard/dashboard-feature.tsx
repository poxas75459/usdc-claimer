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
    "5HcC9et5t6RpRvuLF2734DpAPVdL5h9vEKD81WGNKbvRYzXnivVBXH5zaF7PFCTUrQjjhJG3FLa5E6G8k9TnsXsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ftCoxYVBQYd8UuugQc5R6M7U9aeP9TR4xo162wL9uWL5rNeNmt7bWutzDFJYzjgSKMJBG3LT6vDvfx1sfTU6UkH",
  "key1": "mFko8hDpgjdnEYTL1xfJHrxhfD9h8S4tWxAgXvym8wnPesQiSeUo2K9FZjkodkCyi9KB2NQ14qCKnp2kgDsNHm7",
  "key2": "2CWGVbTsNgFpqCe152LnPvtzFPJHN9uQ7uFRGUR3r14VMzBvdcuqTRUyk5Svay1MR8rDdUta15xC9MnJmbFCR7W",
  "key3": "6Asvd1jrVUurxS4YvwzX9tpJyBcGaAqyhmiZWWUwjwnypH6Ld5Xykd7M9dhjXxQKrN79bQQLbveGEe1beisnFLv",
  "key4": "55RhwGFrmPAbLZC5hpkiBS38utvyoAjdgXEpqD7e29KeMC748gNbAhR2HGULPu7ZWp4vQ9qTqsMvp4YZHWmT6iAf",
  "key5": "4bQ6V3khPyXNCSTWQkeEqf9atJq5deiBLeX7yPaEZYHPngyti6sXL8snqBUAameA7JAStX697ksY6NVGY2LmTjS1",
  "key6": "5YF5BaBS1cCBe6u4nqJ6kTduaeoYETQ8JzqoiR6U55RqR1FTaNyHBaDTVbygKTcZnnjkPtGzZ6xjVpzPKdqsBRau",
  "key7": "hEjJJTVuX4Q3VfVSERgXh29wjPFxjVDjTZNL4WbMoTkkuWse4d7bgGyqc14FtLejmiaB57BJ6hHw51qmDYcgTtX",
  "key8": "3jhk54EbRjVwNwAykiVsdLoKTaGPjcAnya6shYZyz55TYJmrj5u4vk3A3ghC3f5qHvocFuipMgQrRuYbFYawLf33",
  "key9": "vjdm8w4T4QGKvk4LC5jGvnwrxy4c5wVahU19d7hkrLpR1Tm5LbN4cDGWYvZG5fqKJrPDqzuqrXv8LGd2GLQGM6K",
  "key10": "GJ3L4z7iH8mX7Drx4G9xfczgf9WHahDkHHrA5GVCx98MJMXcqSUsv31p3xrs6tsDiHhX2g1FVw2KmTjHqvVz7vQ",
  "key11": "VhgvaP12dmYxW1bD4uGYMAv1vpAUnPiGVc9VMdgvMsQVW8WinmTfVfaVnBH6U9XFznR7U1S6o8CsdQB2bjfFDPD",
  "key12": "55ocHdoZRcdkuAjtJ1Se1Acdjiq6WLXHNKPLZWsibbRLTqapbsSFt4r8xpcJm5JQMhYhfuxEKpcF1DieYoxfcpa4",
  "key13": "QtrDQJBv2bdJeReZpDbnU9yooJKopQWiZnMmHyrvqqBDKwT146HybQbwyY8fTR2AE5bxuKdGK9XJv8kBaC25vT8",
  "key14": "hqS1AW1hnPsSF1oajZN1X11PGQGDyLaFMkXeLGaabBxRW9KouFtq4ftLa2HXnbmhhrHATdoSZhCcNTMpPBdE8nL",
  "key15": "2WAo1EgRQbVcgBuP6HfS2qcVhggPn1zt5SKxRbrPkEnRVgqEBeeFevdRdQZ6JDLqtSXqAhPEYE3adjyM177PvDdM",
  "key16": "4CAV3P5Q8L9Luu72A66ACagY5w6g9sSHDVxpDrdSyLU3fhbN1Y7nj2ynvMCKeUUaNK9DdZa85kjSdDeZXqg137PA",
  "key17": "3u5GybVUb1e9SWPkxNs3gGnfMvExV4GxE5iVb7cADHgx6QBsMTtKRB77mNeagsab7ew7B3fhvyz5utWWv1Rdu1Aw",
  "key18": "3wyNAbWMdakn2aXKChGEjPDh13VBXZsMjBCprb9UioJxmFiMzMe6nNxDyQf5WTPXje9uuxBffubh8CM8RSYQZCVK",
  "key19": "5QvRiD8t1ysSa4mjbiuMZigFTCcDrvnLAQNUNFK2CL6QABnRwZmhssZDghCRRPKoZmWAnLYQJkFAGeBMysa2u4SR",
  "key20": "sdrWFwWXMG4G3YGcbQFNQnTeEB7Sh5JZy1qHHCz5ZMLZ827rdvSNxvzbTbcPVwGVTYEjS4sFHDDmhDKHdXFphBY",
  "key21": "5LvAfDB4SnXAM6ganYbs6gCJzvVUUVxPrkzLFXo4EooUH3mChN4bDAeqqT1jyPewDyLTkNSgM9jsebC77EtB8o8t",
  "key22": "2vxPJoBBLdBSCNqXeRMRCnYrAmTpWmdd11RpDQ2kDJ7EdohcjhTwMbftC4P7FBnDATDCfdmFNc7eLC1zuQP9Vxei",
  "key23": "5BBKy6jpkR9XtP6Ly56H5yE63PqKjBAKCVXjwqXTNfujFJ7ds227uwS12zimtQyBtyrWjKWWq7Ko8mMUgDhJY2dN",
  "key24": "5rgWP1PMAsPpEw5y2hC3yHy7n7ezeZmwY5wjwpqogA8mAoJj5hRMTPNfpbfQruEMUDGFj6sahFEVLB9qy1DGRrpm",
  "key25": "61B6wt3EvPjtntitTYn4Dev2tN2Kawjn7C5PzvE9aqLEgFSbGS76GLT3wwfpebmUpJ1uW9bTzYkV17KE8AEYVAox",
  "key26": "5P9KTsKm5exr4ihWTraXpq4SEVn8BH5PNGjCAbP8YHb8QHV7vRPugL6ZFwoSCJDiyKYDUaWkF84wGqPdLDNXgoFY",
  "key27": "2UWgDoyWdVLyqppPwcuKEKcc5guVmjpGzJhjFAqhdPUctSvvnzVkcSzySLoDapzrqZzAq6awvT5YT9uHjR8wMMRS",
  "key28": "4GpPYo8UGBqiGCob3Ws4z21bacapDp8NMqgSzTNvRAEG4DKji1WaK1fo11wcVDH3dxYzbj2ukGLUy8ANCc8CCnKh",
  "key29": "2m4KWauecdhrqEWL4MbDhV7xRjUZTXQFxMT3zzUU4rV3ecEhCw56wYD5vSxuXPdaakjXXMmaUkbY5SfUSMUpurih",
  "key30": "4to7zUyAQPi8URRyBXWCWeMYFNvi3UuBKPtkyceEgAYo7UEbYJxEUKLGUJLDMyLCZjEvM22TAcwEh3zCAXVUfnJS",
  "key31": "2EXQF7kHMS7FuaBjstnzt1eBKkCgXXNL3SkKfAxpTqNzGxGJbHrYES92HqyZ9UBj8VY4ZvbrgymrNcbcLRUbFKUG",
  "key32": "4iwRVu4Nvjjf87ffk8PFJtp7nD9JVPtBCC7DJSk4aMnU2TnMWE5gAePNL7MGKGk1YbkXwdSJqX3cYurCFuQWgwCM",
  "key33": "3ZEd73dMAV8ZQwBbUBDhtipoQHfUwpw5eDEanUL21AxPUYGhbWLVHXQ5RZM1XoqDFGTb4Ff6FrxB5eookk4xpd7X",
  "key34": "39m86gr8rnsFgTjHpznon8nfd4Ndhjm9DcgfHJiQaGaoRuFpdXDuf8e3xDPyFou4YHaDZsXpsMEaGuXqWZLHGUvK",
  "key35": "3fG9BLHLchayXFSyjHo9bKbrhwTRWj5HtRZaiFZABdNq6c7LNAhL8KSn2iNw1wZJUS5sDSBkvXwzGDTLm3D1zEnX",
  "key36": "3dTD5d3wW5WLgpMycgGcpQAG8QVJX4VZ8eb3XJp3efB72krw7o5PNNCpJeeLcaY1pemxj1RZzxWhwP3FB5qpgVWA",
  "key37": "5zZ2Eet4DEcvxp2aYUcREyK2HJcsyrmzk4vxm3jiQMcAJCcCoxwKHyk9p1FSqoqTT6tTtCkeEYxziVoDVD33LG9C",
  "key38": "GhjqXvMaUfnKXHH5TK67SRPX4Fjq6yzAc1A5zHRiw1jRbNRNdPuVCMe6e8N4LnGn2SJaUocNvrAhHEu5cWND7CE",
  "key39": "jHpJVv6FkNw5WmUWdT4ZtkgKa4BWL4YcqFkcHi6h2YCAXoFHNeuseiPLgj4NHVALFTKhwKnSEZB6h7xrWStDdMq",
  "key40": "5v1aneFPcYv2fVgo8hi6YFCcek5TXzzgkZmRiULRLJ2tmpA7nBYvvG32y2rR1rk5Pqia4ToMhHAytuvbXoKZkUAm",
  "key41": "4otuVmtVvysnVF1FzSLydomWDUCqpfEzgBT6GLLPyZSynX1GC5FLv2jFQpQQvrUD8LQf69BgDhfcuuiL9B2BdZB2",
  "key42": "2De7hTugvJcEoooB1qQKUkz2AGP14W79sijg3AuDLXSwX9jGpWCbE7s152PnzorLhnyAQ4FXYxTvgocSodKxZcXi",
  "key43": "69j1PmXsXM1DxcKAyxDyw7eGBehAXDasDGaBu4WVXWuKe2GdiB1RMFpQN9YHMLM99tVkFLcopaPpv4eqfLfwdZE",
  "key44": "DzKP45x8FhsNDr4pQqL7NjEbAyjMmzjjCY3mYp5wDLkyQfJCDeukQ7QptspnzvroajAwjmmEVQb2AnDHag2jrya",
  "key45": "RgPLJPp3wGsYUXiDuYbmB35m4LcFP88TXXf2MWSVJrD7ejm8qsFkoJD143CzZZmw2ZWM31gkznHdxGgYR6ag3rL",
  "key46": "4phSxAVQQwzeQz6JQgpnqcutUz4MvoxH5bfjJdetkuCMX2XzuVY1XUURwWS5AZU6GU8JgEoSAWAwUFL4whLc5RGo",
  "key47": "KsUw71HZVb96moVxLNn7bF6tEGw7rQ2s2TRV3kPSqwUizaeMgJoG9u4bgW4HUq17a6txn6N1wDE1JA1JovXnrT4",
  "key48": "4xwHRNAxZpEQPNun4Nu6hinTS6AgXgFqXVrzER2hxFysnMbzqtKVu4x9F7syPFVjVNw9hk8FhHsYFBWyPi5E153e"
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
