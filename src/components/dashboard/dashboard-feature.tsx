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
    "2E3tH3SyaZ6aJ6Puu9xoDHC9Ez5G21ZjqyR4XhgTy35m14dBpd68rGuhdmEhdAYN57PM8EPGx5jFCtVnUrWcaczP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41BJqsVH1x3jQR3CZXj5PtxhHL4eF3oXExQvASHxChQtGk2vizKft4tsMUm3PjTHkrRwaoAvrreYw4C3zLtEXzBa",
  "key1": "2WaY8Cc39SEZSJMBa77Mu9gFdbEPQ3SkBeoRJL1BZkNPktUaD1wK1hN1LD1V4zFwxS656WYH6JFkGvkHmGozgGZP",
  "key2": "AoY5GL2FNLZg6Nr9SHfxfBpCvCYnTK44PTcu6Hc2rh1iAYRHHUGPEMVsQHgBJ3LfSbESw4HXdC3oEDCwckSvcpt",
  "key3": "Q6jgGZqPTebM6B4CrH5XwV9W6Mye2ezbKo28PjAT36PnF4UJTRPFS5EshRRKjZX36ErNZ3BvcF5PKyzfVVfPGdG",
  "key4": "5SBMDiWe8vpjgfYub9hKLpGEbkeDpMGTw4WKnVj2eva8Yq3fNjzitnoFL6vbTe1SpXJ5pJ4cs3kdJ15pna4LUgse",
  "key5": "wC9PFqNhB5RfHAA2LbKdRbw8ueug3DXehaRX7sb54d8Bst1WFEega3yQrQuR4SWABPvsPcwo7ECRBPaf14yfg8Y",
  "key6": "2qxRQcp2xgns47WixmSWUtYauHPwf29MWpWizMMYvGeY8KwJemaBHr8aSx1DWJKcttrYqn9roH4JkZhyeHfN87vg",
  "key7": "2MkJJbTnDneXyDettn69byjniDJmbc7BJ7J8evPrnn8mQwZqp7AUJxZ7uqp9EUDYRKBpwsvfSAj8zCAXNx1X4DCD",
  "key8": "5WJLPnzVqmdenVQMmrqAFwpKcft2m66SbDbV1YoMojJJAAcYPiu7ToXmHzV6T25iZhmUkeov4BRnUNCC3a1ooqPQ",
  "key9": "twcsyeBmWM7k4URCQpfWr2vxhP1BqDaUycFeaS1PWc2Nd2PnQeFvkah1PRpppbYH3zP4iLkEtdaREJtnhd8SfAQ",
  "key10": "3ec77c4A8Ek1aAH9PbcE3ioxQm2cPicoFDVhf8Dd8P8H42YRV9KsjHWw1qKieYB5AjF1JVk8tqkBMia3tks3srWo",
  "key11": "35sbHFzBVdnoHJa4K66Wso2gs8yMU4kVgDNkPg5n9JezdXDa2Jj84omkvtNzri639xHx2KpZQSvBgNKWeKBbUeLN",
  "key12": "52XATBAwMvQS4xd91WZCKPd4KJ8VAoeSLrGwazvNQKzJ7ZV7PzCDRVz4so1iwTDUYQjNaqAcKB8vzafFhPAhvYFb",
  "key13": "3Y2oUHxvbxhBsQAzZcoK9aQpMkdq34JpuLLTxZZA9PtMuafD7U3yveYCwP2PQBfvAu9eyZQrqgyZaeUCcKLLpTXF",
  "key14": "3QzagyzP9JQp6LxSMgXjV9LCh1AXHTdu2WgcsY4cEjYpwFWjFY4etfV114doRnBTZ6fuf52LeiUQVq98voS98mWR",
  "key15": "4FtKKLrYNxd8VUXQ73NBw32YGGdd1MxNr6ALPnBW61xtD8dTNVaC9RtYxU1YsP5rgFbQ1YQPEw4Zdvwqq3TzrxCU",
  "key16": "gh5Jwk9wukMe8G7YcrfN2jhvcsmkPcwbR53YSveA9a7tThHuR9bg3Pe4oErSVExULQwe6XqSRXaEKg9AnHULgU4",
  "key17": "29W5Sm4Y18TUD4GFzHBC3gt8rybshWaPXjKo3m3JYmsVkX5s1K3ML4XWLLxbtfyRtwffEM48s59o87L5S7Kzm278",
  "key18": "8PLPYEkwFwd9xVDDPKRh3h3t7AEtWSUZrqn8bf3rhAEmsvcwqZDBxu3NVb8JbZGPDBX9bu8t2A6669gSfKmGP2g",
  "key19": "oaEDfg6vgR8YrzHurJMawL8nzGcZ1TSDnauS7ByxJganH4Ygzo59DqWx6ZCoDDyhEeVdKQsfNaua3LwmEyYjCX7",
  "key20": "4cbqdQyh6WeXhoJE8CaNZ6L5nhW9VzPJBcU6BXaVfrfUGd3tMMqVbFav9MuuP2oSf8yQVQ4grUWy2z2qRQ1DjaQp",
  "key21": "5jg2ZPLyQCrGGHPvgnu9JupuDjrombtiViiLhpEoxsKThzJCHrhiww61yxwLuZH3E8eakVKTVUpxY61k59ubTk2p",
  "key22": "5BFi6ndejG1gwSVAX9YYseTR59j9fELhZci1KM6F9Pw8SHodTLFy45gfnA2bwLsV7dF3xbrAFNARvC2JsLACch2P",
  "key23": "5QVomAksk2Vhv8kzDMU9kXquWxRuwuSyzmtCGaKSu1w1TsuNwvWT8aAsCbRjMQp59fbiAzqZ37XhHqFFVXiv7saB",
  "key24": "5pWEdyXhyKK6FAyaaJ1DAsRoc4B6FNzDVoQwbvtPVwcDKogmkLQaGPvugUjeiHLZatwtnVYXf7aAmgB1FcdgNsrm",
  "key25": "679QcE9BCGPLeXtBKqXLxHBXrwGiB4YyEXV7ZpKHZE5nPNojC2nkp3b3HRR84rJUHfQ2L61fJDkhef1uofUbKdV8",
  "key26": "Pr8odv5VydTvLscVnBwr2q79eEiKMMMrRqSAEhawcHpCywydoaXMn5mUUbxKWiTW3gr6uWYxLGKzgo64jfYPuwC",
  "key27": "567reMqNEdjVV66R4rsWZEvPeyc1zKaCatUSEVM68aSPAPX7LNMve6tS9a6Qn71faXRAPeW2DYPBcJVbdvvjWDgd",
  "key28": "gcrVgfBaz57HZmVnyofrVWSMqFRcAy82bRXNgDAogJD3p7ngYrK1bc8PmNHQYp9i22bCPQGK5vRGpFonyWvBXww",
  "key29": "bkthCRfzUcBEZtaH3x3gNGvVTBiyLzyEyZ1qUUdcRvfhKnBY9apJmUv1mTFPeWbsZ2Peix8ZPCyUoAm7LHrLruH",
  "key30": "3UyergtvW7NZ96eLMUmcq2QBzanVzXUGabAmhTiLskAid7Le38uiTnYiZqyXN2nrW5qoLT1EdhmjU3pD52Gr9qXj",
  "key31": "2fngXWLpD6kF7CebJMK2FPL7QMcmLuU2y4T8PDrgtkvL8JaaFUP4xMJ8cjMydH6DN5VPLcSct8jAJHrPkWKAdCEA",
  "key32": "5cxov3FmiWUgu3SKDusGouBLKRDuGF2hkbRJsWweuYoEB4N3HWzhzVKkANsmVXhNjEDEBNkjt7sz8GcM3DWEFmJ3",
  "key33": "4jLdHkocTkD6ZHR9yw5zKqj5xw6Xrfsn8Bawr7bTvm3HyYWH5oATR3T1Dxi9eLKBCxoSLgsSYayG6hpYE8zudEkr",
  "key34": "3ppeBp8ozy1Zk68Fjet6CTua1r62j3nT7Yozuv5FPoeVB6qF5HzNH3YftdKwMe9DAcuNp45VvCNY8igMAwLGCo3w",
  "key35": "4Y5SUGyxq2EDpTcvLqUDNqUQhCWiWXY3ac2mCdFKvCkFuAESNyXre6PGbkDhA2oELGfwdQ9iYTCvVa8PRQYE74sy",
  "key36": "4qUHvWDwE4oMj3bPAhwCyw3NZUJsbv1pTwMuX8Pvt2N9mP3t9h6rxCPqmRkCq5i3PdBxzsAZnDZfEwy6UJ4j8unZ",
  "key37": "4yz822cEQ2rtGo6e6Ruikv7v9nDqx4ckMdvCqiA7ioXkg3czGuZhsKBwzSM26UX9hqzTtgcBeYZo3JT1KdLFDdUm",
  "key38": "3dfQcSEia5Zvyxcr37A6hTaeqVmhx3td72TEvrQs8Yqj12P3npVrfCyYKdSabiiFTXxDUkAPnv8HYPMhRVqTdZ9B",
  "key39": "2JtDELTTmScBjDTuEg89SXepmi88GwGzYnkBBzxRcdAnqTWV4Qsd1rKLmwKZCcNcQ3GS9qMEXYKeXEJbpQj91FUQ",
  "key40": "2DCNtP4mipr3jyG1roUZgtg2xzSxUvLQep94YpHLPhcwcPDVwjkeSSmiTa4d54vfrphDmHCDYmfRQx4aAEYytoP9",
  "key41": "5RZfTDMkffvz6WNiNP1GDYYhh3auXEvHkMrAxsPbtZCfdv3GCMgDMXGgMEkK5S2yMPeqdDBCBNLHWbzrvtfGTi2m",
  "key42": "2vm8bMVUHDnCwjmgjFFuzevhnS2LMjQ4H3Y4nhTgkdkDaykczrYDY44qqE3YLaA9z9SmUkzbeg1nfutDkkouQUrv",
  "key43": "4YK1BQR7iyVea189caSsxr8qsCMioRkH6oo8pqSUDAbFLX33jRkCXHt6x2ZgmEJdFCjBdTH51PsisErX7YXg6uZU",
  "key44": "5W4RFeuVVyd9synPbqkgmkJCinMJV9hVkpK5X2X1mRKPZBuBFW1zYNhDw7SZRdcQ9d27b4XC2JfRZ1QaA7LTmWY5",
  "key45": "RQb54yM2wvqdREYUupiPMCbSdDwTE5VGmHfvieFbb5QXwbB7MFHZHNGjnNwxgmGYURgV5fLvCUjzYnhBttF8MNt",
  "key46": "4adPCEAzGJZCNYDguYuGr9rpimHHxGWMTdb724vLSrJdSPeZD7Jdy1M847ZH3xQZJJHGAhMXFSoPZwsk3WXW3KkN",
  "key47": "4jsoQxH1RaM1eh4Twu6rdtfKczjH72uXUPMXtvdKkw9tTAXr4gwnUy4Uut6nDiLFCAe8Vd3sQncMQZupVbdfGamw",
  "key48": "4RbwexWJRc248C8r6jviQSR1fxiJw3itAJfVfc2Hn11DiUKSgmSDn6saUmvBDFeAQwGjwePaRkXH6eBgtSz3k1fo"
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
