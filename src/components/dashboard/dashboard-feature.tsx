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
    "4jrouZEzTBsVdHpu574xH7zKzppgpDmiFuDujG4HUVbjQjeBLnxeUYabnwfxLjtbH9EAoRWeZYzo1k5qAAmoYeV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nJsPiNNXB2kFdgJ11rY5Uje7poRcN8UAbKsvi12FVt4cHJCAyZBhoMEMvGdMYwV9DGNpgGX1Vjb3T6FSDFrPLYp",
  "key1": "637zKC7P4ra6fLzdB6iMS8fGLVrrjZDk1y5n4MrYAFhHKcko3NP4MjXdMUH954pnHYd78qSSKKoePPzzM8Da4LE2",
  "key2": "3V7CY5pXV1aSW6UekWYCPrBki5vfNHDL9gNXDR8KDCTCryQQkt227HJUq2vVDiGPACkXKeXK67r7R11eZ9n6igBM",
  "key3": "vQ1Vi32X316TQX2sjYv3rCevbtFuxeh3VqTddG2kYTayHz22i9uSRyZwCpgqxjbTYNPtR2X9mH7MpcEchfaNHaF",
  "key4": "5xSuRn4MyFPqgs9LXcnr3VzBhxz4ETTutgFdwQ1L3yJDWfoZXLCBq1K7QJBQr2xZmyGsjmSmaXzaYnVmPtBN2p4K",
  "key5": "4fRrYQqf9L8oq1Xt6U5ZM3UXA9ctortLALQFvRJvTq2w8n1cS3ZHJLZr66jUfpqkrVfsN2R1swyHrsmd1Cic958o",
  "key6": "3rqT12WCxumT6K6nGd1Zuu8fq9bTS7ei5CN8fwv1DoUNN6wJwdAY5WkcZ6r8mA6GGHPvuCfCsNpBBttrVFYVWT8D",
  "key7": "2sH2YMFBPd9dkC9Hfh76UdUK9Tf5MDKVLbF1LMfzHco69NSK8VtSmjnW4Diyjs4AabMuX3Yii3m821dwTikr3zvh",
  "key8": "529D2yireKXnxAWoSXjqM51koKKbpcJdfkuyabyMScRs9h9C5n4VPK5hVNaijnSn68a5wFyVdXDvgrMBT3pSciB3",
  "key9": "3UjHXoRqenQqKNKhxgwEQseZj33SvSNu9maDtdsriYp311b32jHsFwngHapDbZYmcGtSZbjwMXHscqeu8sXfpCor",
  "key10": "5aKvB9ijQqRwKe46GyPxatAsGfJ2vKY9CHxJCucz2mjs9PP5qvijDgK2XZpyLiyHR9UdAN5oqqEAERAoLBL3GHXt",
  "key11": "2bYAF9WQ7W52KB34s2YUGuQ7HH8AtmN7vXJaVkvsM9ZqvrxazVnvSTBzUyQdDGp59hf88JzLNfVH7gugWgVWCZ1v",
  "key12": "4Tbjh7ixU9W9mwAgY4bpmzaMCQuNQ7Jvgs742JoJbWWJy3q7GoHbKDvc8mcqtw9GvMGWyVKJrcynsYiRHJCRCGU4",
  "key13": "aKxAgvK7mrYNgY5aTzaMT3qhbkLhAiaXUaxKXEY2j6W4y9BvRKGAP5Ru7abfR3YNtg1PEMNSyLh36nKfe3FAGHo",
  "key14": "5dG3dujYc9josHcBFv2Yjy8A9D3cqVQ7KJfEVb4FpdFMibSb94UQuLXLFDMMjRGkcfZDrhXbmBiN5HUiuKEQZok",
  "key15": "8QdHezY6bw8WQS7mYEcwTUZH8NN8FkGS2ATgzhm3SR9dBu39Wt2mt1P9KcGWjwVpsAkt88LK5MD3qZ4UTDSG9LF",
  "key16": "2eq2BLQE9gX5iPEAajyhBKW14t5JEgN2m2f1bU6c61b7DRcPNMBnHMA8HUu17T5bvuAYBY5ifJHjPtVVc342ux4r",
  "key17": "3AbpqpKqdu6WW8DeZaiitMEEGSxAbAk4L1SbAVmZTHSZr77xRF1FKvk4TDdGCjzUoZYgGGRVgMPsLKBgDQ7ShrfN",
  "key18": "8v6iDEFXWBeQYgUWcHcc3VBqx7grYwoRcWUHGPXvjU5LpT6QTY9QeLxspmD3Z8sTnrJe2wxfFFhncPUynK7GZva",
  "key19": "66bATRsF9dvWNMT4ynzAPKxSjwBhZVyp53LyXLkZzYLkxPcxYdcXPVFXVyLdNoHcaDhoPgujezAQ8Zf7S4uneKnb",
  "key20": "2TUDtNuYjpvh1BYP3CS53H3QNNMTuH3gaFeab4XWDjWYAMMEYZu6fgDm5PvsMymFBZu8MiiirAeYwK9aiRL3iyfN",
  "key21": "53ipP266KmmdPmhgxHRbyFTkt1wtpq3AZiEywX3UXr62neGaKZY6hfJpo7RffE8YbhtWg9FZ8RJVPpvbT1zqexDS",
  "key22": "4h4j3MJiuDLdMTbnNvnhTCB3syFFMc2amkJZav1YxL4yBwasBnLP5f1GS5npuEB5qm5mL7K5LwqgBQJREVKyYge5",
  "key23": "TTQwERvmA9AXbvoKdXGMVbYLvS5vtWor8YfzitphknpEuaeQ6rSTAN8KQ5DV3vHbmaWkovox3ZtYDHkeYVE55oc",
  "key24": "2HTjomDDz17UYSt9w5aCBbMJMtYHdns7XuueffKdVQUvfCfJ8TDif19vKyNL5YHUWcuMBD5nmeXUCXjtxsFw1bd4",
  "key25": "4qYhQuy5kkQ9mHD8PZyAJMXnnHGAobpCsZunjG6W6DoPhTa8cigNsGtbz1gRu9bjrepHVQ65YfnhnmGtrS88f1gP",
  "key26": "2mXxhDwfnvz1LbcuVWyT2BC6y4jPi92oPKX19rUZoj1ZXD75FxnHNoRk3L6t4gixrWzYxiSxUAPZoixrsGwnJ6rn",
  "key27": "5muby4bQoHrnKwSrLVwHTigxkcoqmQdJiTiYHnAEqs4LYjEEFcDWBFTF7JW2PfvvMZhAJJF94KCEnbrShfhiLW7f",
  "key28": "39HMnvyyE8kC9yRDJFwFC4BGQWXe2bCPENci1tdJvGfNoNevtiRfzpRF8XTq5UDmqqVkFWwnQyur1TF6TMT4M9m5",
  "key29": "2MUd7GTugpgJNVuMXFat9yRjVMCsV5YNoVAWNW6v36a5g2JN6mzWHwzDwxzDKVmZ64fSraDxsacpdy4aPDmzzudZ",
  "key30": "5Vkb2rfgSu9tFbEbcrTFjqkTGf6KyCe9gp2unmbCvUjR934xu1JwpjHaf9reGX9DpCrNVCAj3sfWBxLfuG8qzTv2",
  "key31": "2Fbh1oxYzRxBmLJgvLzFDWMvKrG8BRYBUiTRgW6KYMG2sEwjHFN2uP8d2cUtiqTkogKNmUjBsJqd3J6gB7knM5fs",
  "key32": "5J8KkUM2Fta8opwd4WiqnZYaijtn2BVeMKeVPdui3qhDsHh3By1soLqEHowkirkE5P7VT4ziYDVEdbqEKrhE9uVd",
  "key33": "44kjYiHCYtDfoGGAgvXccBFrSEjdtEicrMYWhNGwA2bY1LuwrkbiZq6pHQt6gLZUhHmGb2W62FEi5iW5ty6iar2h",
  "key34": "4mfFTpXrmbieYw8XU6pfUrBhcdPeSFbFAHioYqRVDKSzHauxxTYEyKFucoW5soeXi6Ldnupeh8p77QokpVwNPUpn",
  "key35": "qMJhjN1nArYJfYvUP1WaGaibaPovCWAikpPKq3qGXmC8ne8y3VpQa1STAnvSSQvdgeuuL1kq6ay92Kw6FjXRDxx",
  "key36": "3qbCkVzUt6utJmQBrbGUbhe3UZ6GfGjJJt7sNa1G69yowvNz3JBaNFPuncy6ayBvfcvCxbHEGQQAnmVriELSutGJ",
  "key37": "66Mq6zf5LbaSxaeVpEAcwHzAbLkJCSD8qhUiGQmm9Nmz2jkxJh3QFUPmMgLQG2X8WkpewgD6sfDxy2st1SYafaU5",
  "key38": "3Wygn4316hw5cXAXo9SuhCPGAZdEgAcY6W83tbt7F3FipmWVi3H5pfYeb5v9r5qkWxBPsUaGMLjUMHWVnDrBovc9",
  "key39": "2TUfXrNwfsAi85CSrFrRQPJJe9GYRbKRPS7VndHrb1MK96Gm2wvy1TsQ4p8HxKnhuQsgFhsxbsrUaEmETUgvt3Q4",
  "key40": "5zNs57UC8YxBUFTHKcSALWY7bBxp9ZPN1zDtzckftnCsszEmrfdojX5d9EPkQsiSxU6PnKcn4aG84SC9CYPJcZQ",
  "key41": "3Ca8KYTWcFQAa616QCGH7NUW8J3iSHTRAZuxUyFLPuzCBNeEFkX1YxrMcEMuopR1uPdYKSssmTFSYhE11RxnxBHr",
  "key42": "5BA8dpQMzxnjqPL7cJj9qJ1TsyKH8LedxG3vNzoB2b12CDLyu5htVDi92gZ4nNCBDU46HRxafFSiCHSPWQwuuKYd",
  "key43": "39AMqL5HVaZnM7LW9H2NMhikZ1oEgTUdLccyG6G1Mc35NWtCGUiKvX5ZczQNaVBJWPyyw3hVP7g9MaCH397LWvoQ",
  "key44": "W3Qu3sjZV4mFfpxFpFFJXPRcx2FVSesR9qQf9VPMZfMt1g85RMTMfVr5hNhv7sZx2SCx12XdSWFJZWCPVPmshvU"
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
