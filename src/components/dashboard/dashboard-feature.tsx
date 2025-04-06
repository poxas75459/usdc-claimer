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
    "3UTj3CuzX725zwGDjx3Y2GwwCemf9RzkDSwU8WA61Mm8LKA1cTePXosqr8hgvxvUQ5xbP6V4qEwqUAuCb1yrLrTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BMayazePHF9uvR9jFbFJBSbfczpfeUEZ9Puns7JJqkALE8YxY9upAtRp9THb42iZNYrMXRHS1PjkFXL9c8HEhQM",
  "key1": "4kjvdf17FoujUaUgGReMRFGCCgArFCCNW6oyHiorbrP6A2XXBV1ayVcNWziLwXkQ9z331Kr7oiMcmNnLc2e3EGmA",
  "key2": "5TyqzW8kbUgJP6yw6YBGhVUEGJsuceXvJsyircLH5Wem92bteXxMCinNMXJKrnQcSaUxh25fXKhSLTkK1ZpC6mp9",
  "key3": "4RZFRwKfgj6dNaygrnRN4bodSJvY6u8MK76iVwtDsPjxnQbUQPenu4iYJjzqcszPdSjn6TS6TQDnv3HywFXPqhnZ",
  "key4": "372mTMF5QKz4bhtyZni49XKs5fA6jdka2gA9Sphw8Cuxw7Gev2TQMvW8V6yNVtuhg11txASmefiTt4nGN2mBLUS2",
  "key5": "4aapegYHBmPJpDabTsu2rUc4FYxvgJeksKkTP38soP1DVkS3RcjvsUTMuwYH2jErXgtzLXiFBsV6Kyvb9ZfHhw5j",
  "key6": "3EXEVB5whoszLvaPuRKxapbpUHPZtra1KmoYLjSASZa5jNqDkkJPBnBrXR8jwxTHc9bFWKzeoMqEga3hdJ6s8ugP",
  "key7": "dkLSpzHNPV4gvQ4pKBJDocnH5EaBgZzCEvwes9o6STvPpWEgLnP2TcZemXuKacnMTRcCEdCYYMZuCbSWx3EF2vB",
  "key8": "5QTUeTsQL8hQsY79E9nYEF3BrhqzdzowakWndbrrN3fwi8nkgMLhBRNLSPsLwx8HwkxA6TqaSHBahiN6nXXx57Zz",
  "key9": "5hCniNFxzekRVXwQdDZhSafDnkfLbPTwm6eWgRnZRkFRyCWdtBJ46q1on1TUMUZkgda7V29gyYAhHa1FxxnaeyCb",
  "key10": "2jvKFy6SCnCWQ1AUoaT1rUy3qPAFfXHSM93rNjZnyr6MSVM3h8dByoyXRseCRBwYec3J1sm7vETTuewYqkbn9B1p",
  "key11": "4TTgm9d6pYnScbWzbxmxQP1UYL4bkGRiNAWF7iFJP3dNNCYpUxSBX3m8Uyn7Sha5qcBSe6acMBPnubtXKfTkuwWy",
  "key12": "2kPg7hFV6ERcbc5BJg68N76cqp4MHct7tuEWJ8fw54ijwkDZDggTbCSqfWV8WME1G1wC7PRMKRsq4FyXqZNr71zk",
  "key13": "wF2csQay8kGkam8hTg8sM5K5RnmygkyYkjTxm8pnW777Tr68MarAP5gBGhy6sPv58XRE8A6PgECSfq9gsJdSvVJ",
  "key14": "3W5MrxSDHKFbiDzVrWzbrvcVYouUMvjTEfXKLafCdqh2FUmnaxuzAS3BCc636fCTfbTHJYu4TAanYoYr4AcPTNCS",
  "key15": "5HKiErCrqhUfuxqbcDg7XoJ4tp82Qv2M92YZUUK8uhE6fr2coSnBohNxDkBptkuYYu6NrvBRoQfk85xprdkKm6vv",
  "key16": "4MQxYG9Z7of6Mp3wtwkgc93fJstpY9PrH34xNDWiSL8mUqweYvvshpCtdLWvD18wvB1LLjBPMJWnzMAHtWay1NVe",
  "key17": "uW7zBKQ1tDqVm5wy7evuVLaBXvg8Q8riNNsPh3eMBrWJGUejdEJ9niPCy5dRJZiajzbuRutxFixUMN8ZjgNraFu",
  "key18": "42MrRpmBkw39jKLGsgno85xvB8feamg2ZSenB78QUSg98r6KQfx1N8yzB44GycakKDggA81o3avFA6ijfXfBDp3P",
  "key19": "3WXrExuKYEvPuaGsAwx3ybTSq9TXbwcR6vs8ZQ2zQarh9QkTnM4xHRupU7XAejKFDyaXKgRwUeFV3NbTzZf9HK3K",
  "key20": "DhybLx5jsVhKC7WoWFgXgDXebCRLq2fpoLELvPBDQTeyimNSdDoVw4T1r8TdLnV7nujuEtZ97GU3KhHFNN5ZG4H",
  "key21": "3khH1Qu8msL5D95MzvcpVGdeF3qyMiwR8GpiuZku4SaRKva2F2HZqDV44WpMBKB8Db9Q4nTk6vaRnXqqZkkTpQGj",
  "key22": "3s1Bj1U7BvnwVsFoy5pHPvEcT6CQ8cCSNPNyWeFXChfg8xwK5aP557dr7PAXJapqnrm2Lv73ELaNLXGj4vjxTwqd",
  "key23": "2Q2XqLhSWsKxqo7Cu8cPUah2fzN6jA1QNAaan9Nhb2yPz1YkPUgbg5P5VLcAcxrAroUzPUDFDh8L9qcv8YQoJdmA",
  "key24": "5LctVNMbXjqzWCkZdTxf6erxPQV4GkUbAcGQQEnj6LKqo4swhpTo1dh8Va1g8S9iapAftY8DJL3necnx3tzEU7Kh",
  "key25": "4xDLP5RmyRWMZEQtdvfBqkS7xuoLsWJBzdVrLwdCfYHHAja13NN6VKe1u2Cqaz8617rRceRyACY78iJ9Kdb8eXHo",
  "key26": "LDQbe2fZ5aRde6DgJpJ84ARKAShr81VXt1SjsqHyptk2H35md7idPorT52qJ5JZXHPTrsSKy3A837zEkR65qnBG",
  "key27": "53KbdvYKwXgH1NmGTDgzWrbQuEnBKsUjgoX32VQee2qQ5MdbpZzGswcqwTidAB87PYi3fYfiseGqtH5t3PQiEPkv",
  "key28": "53h6xheq1Q9yJLdhiGUFQJ1hamU2Gmx5qJjECvps3hCHyJqsptmnUbYMRT3zKGu57PvBqm5kRh1ymBgFjcBTZ1mf",
  "key29": "5mkvgLi7z7yng8L5LRLBacLGEMM7rDP2vmTKGnqH8JFnQ4VZR9t6pjivuucSktg7g9tKDzUuzf1QYjJnuZVssRDb",
  "key30": "3joEvBWxrvUv5rDnj6YHTQgubxpSLxGkWMfPW5GP6cpMtkGHMipf3da6nddtKprWGAhrebc3KMUui7buwPAqu1GJ",
  "key31": "4oHhujKpDgucsbD65Q4KrH8j6Lmc3Bc2uxaMwDs11oifmt3FKgkCmbgNSkH1wi5UdeC4WiX927diMFkjRNYEBq6G",
  "key32": "Xxvs4JHDpXpiEcFu4JPiQUjwN42uzF5MamcV1YjiQJRquSaSsBvSw9HCsWxbJBkCJm6YbKFfkfjTQKe3fft81Yh",
  "key33": "j9Sq386uLcASKQw7mF28kUCNKQ7x8x6ohtgnWbREgmq1q5xvtA17gH4jAmhUichinwjMkr5N3MA3wmbwhLMMaaa",
  "key34": "4LgCnWyV2t8tbGnLYWRNAVpHkd1ww3sAtg1Vg5VN4FXNaiLvUpuFRViYb4ruightMf6Js2Yf3cwFQFUi4ZvGGLUK",
  "key35": "4YQT98nkTxTMzy9RgpWwivmY9eduA4giN8i92NAsZ4ECcY3LNS3hspTLZgBbFj9hVescayoWv9QpjMnf5PWLm9xB",
  "key36": "Gv6g78Rm1KBJBKDnuQ7ZrXvQm6ZN7vBXDYL4Cc5kQKLgxVSeZXDDNZ8W7DrcEKiWDzEopD8fGYtAWuFtgusdY3t",
  "key37": "5xPt11fY5nYKuxWADZxh5HyzY67ZrLaKTz7gShUVG3tHiGNFSzwtovVP3323onpAE6HKcJyBLPJdoJTJpkUgM2pE",
  "key38": "5CcVwFE7DLdDhUWvN5ziTBPrfKJQf8dhg1dNZMvVzHXe7wCxgryLjdhpqSjv6RxmcCV5cAwG75pVjvQL5VmPkLC4",
  "key39": "5NcRNKFNmm4g6UUkTQZq5QpC5tRbV6bpLJYHrBd3sRaUmCVRoyvKJD9KPMESASuwu6fSoR63xwHYiKwUfkYgzp53",
  "key40": "m9u6dC9ncs8zfJcw2gqtUYZbbgx8wYMWrjJEBQnBRcnC3686wrSXvJXByRsF3Np8zQ2eRmSGLYUwiSrvWTDn5xh",
  "key41": "pS18K7zRaJzfywToTqrg9MVDkxTuD6Gb4ZtWoZoci377wRMbWxZsqZxXCAZWeosbcdd4W3Pby347Puo31H9AXUf",
  "key42": "3rhWyBRUfAWfy9S6kiQWARMqXMJjNUKtNFPu5mYZZDu2qbtQeiA7oCnWWRyvNkovipmYXZAKLqxLCmM3EdoriR1G",
  "key43": "MyD4YhEjiLVWXAVE7CEDzi7E5ymnSNVW3GtrkbUEPcfNNtzrNVBhc2e4x7W4EUiEssH64S4oELS1yoi7X51MMsC"
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
