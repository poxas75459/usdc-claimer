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
    "AdkcKsrmsPVvodRraAY9TVaEPjirF1EXen7FTUfgNZiEhsNdYk1R6sKyoExifyJhy9zJvxHsWqMyCFpKeP9NkAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZMLYVs4JqofkTMKCeGQaYrdhAZnHg9xfwJaLvTzdU1zv8xMbR4cpAj8ghWvdBt7srJQ4ea1Pvsy9GmFkmW4Ahij",
  "key1": "JvSDdJBFXFsatXQ5oAd2BNefjgGLVyyLHRkpBPQzSu9iNeowZWt2Db4nTRNCPwcXteMhpvyyLTjYpc4mJzKv9NR",
  "key2": "4E1aW7GCqyUXWzy9eTxXg5J6HZ3ANMAvUeP33u5p1AvpSt2HUDM6ccmwuA8B4SWn6JXjNDPKy7rahAAYfPxQpGPq",
  "key3": "3yikSeKCZCESNEno8Jn7KGHNscN8u5Dhk9TnyfKMLAxXC94uKz3L46ZoSDwzmrvizkQrKTbWzv7i4JqNyLdMp6aT",
  "key4": "ZaPkyx9SQWqcdcYXmctfsEXfCgXj3yffWrgZDu1ymgJwJGnMjkJM8sf4KtC6b9MnuAHsQL4iyGcmvPk2y8Putqa",
  "key5": "3fBfiWyvmGbW85Fz7PhJx5HxAv567jRc9C1gap3C1tbDDFdtAcCYanwGw9s9q4oqjPiDBSHjQqyPrL5eFKznBNUb",
  "key6": "39EuHoaWnKQXtiHCs3cQEzA7wy9t9H6rw31TWgNeLt9ZH4ACZWWkNxaL7Rb8FwatVBscnJdKtXsGtn7eJqVgVdGW",
  "key7": "3Kh5wW2JHwttHkatpAhzGAduyLFD2phqtzHfJ3McCfrS67VtYUjX24YnAsZwEf438mHuLJEgF36CtUHHRwTdFCSG",
  "key8": "5MEMecGxDiHWDoa2FjxUArQRxt882xhyPGhoVL7F8tNMUPoGxGGiQPWSyxtb7RFE9iW9La8sYn4DBrgHkYS7okHL",
  "key9": "2hQ5zGAQPTuoq2Lm2uZRjWvoLHrJArny3bd3RLBJCV6QypcHfnz5mXrbe7SMMjWQ1S9XLRYCbxqvPqfLuigrGC2g",
  "key10": "6FbqLi8PatxbCem3uMtwAviPLCdPTvFeSEvjGvuSU2Pj2E11UM2pSD4bAg8HhWnQiyn9xT6nBYrmtc9i1Mvnjic",
  "key11": "4y5aD3sheu7gBwZYZ6nj4yn5Aj8xkxijuLknyFApdArDtMHmgaRPd4mNmxMVDZp3QewujQsaVBqc6sN4tPvUmqyX",
  "key12": "2gwW7twCPgfDLvYGCKwiwSmzsADfbS6hP956uPVdaCPV3hXt3LfAGe58xzYUaSCh68E28BF9t8PujbgRTaWxkSWw",
  "key13": "3p4LrHVATz4STtChJ6vG3GQntTUrRi3YDJA2kMjNU38hnj2HRLQSKNahkQduHoteSJ3f5mfThUU2B4tnGdE4zUey",
  "key14": "2agrKwzQRuj3qiza64pKJ6qmR6A3LKvkHuxBrPRw6qGU9eNKBm19HTG87a9kGUAirfRk72GmaqbjxDthP69ptQU5",
  "key15": "4AzGwfQ5q7JZxTpPLVKSH6xgAgbt2adBG5aToRPgWGcvSx4FoJTNxzrPYgCJXVTK69PSoxwhZ4XxHe7kKQDT5J8B",
  "key16": "43Fv5iCXpwLxvNxUqKFEq1hpcVsuHrXxDuZJa2rmWLsmGhDuxfFtDv9Mg3EeAEBGfTkRTjZYTBFTZuT8WEk7r9j6",
  "key17": "3hJYmJCFHv12ZBi87epretqqVvHQmFNfCJmFG3qwVdp5X66cD5R7mj1AkqioTFbXfmKWwbdGeSTys3Gtf7KVuUBV",
  "key18": "6HfK9fHAomaYaxVzF8vtHKaAg9MeoiV4YNb9q7Man3zY5zEKGEceC3A97oePcAhdY4iTSBcAkjZXygkpWJLvBEt",
  "key19": "5MWS6XsbtNKd7HUnsCzNoLjHkUHR4AhA98kCUgPGJ1WWjWhDcnwAhckg6QbUzwuetCtJv2YWNLHfzySuD2GtFwh",
  "key20": "2WFo8McnRWh7CQV9jCpLyemt6KMyh3Zw6NSArnbmDHmHAnt3njRfrsBMRuyKM5QFFzBKRtHHhmKAV7xLrCoRBHnw",
  "key21": "3cyqPwZPgJj6ryAx3CCH5LnfBUDDJrq7wpgUgp45eYX2timAacMEJeBWVRHcGpk7hNzAcCGrKveEd9oKGkd4JJW",
  "key22": "5eNd2xyRKqVRzv6pX8HjCovH61NV6Tedc3NboA9K1Yntz6qeD5j6JkxUMzphC696PxYZt5aD9wrhqBfiFopiRf9m",
  "key23": "juPdLs5kRdj8ykjrae2hbHkcNRGAFcPv5GEdJRFkttdr54L64Aht2osaYuzBkwLWeUA6g5Cfut2U78ArCwmJS7Z",
  "key24": "2oTn7YvU7g71FovQcZ7VhiU8Gn2PYGRaMzg976epcvHfRCi5jyxeQnVNYV1dQ7nMy3MaLP8eanJgiVTcjsq8g6z5",
  "key25": "3r4J1FeJePUoRGz3fPfvLLYmcbh9BDdXphsaMSCrmt9hDCfxHKToLAd8Hqg9o1ERd6emNRZXMyPreGnvemPa1yWc",
  "key26": "6Sd9iVyAQ7eHdUT1BEhtE2vGf1azMwbPfYUYf2U4cRXABeqMTLBpXHaF9WjxJ4AEzYtXNdwb45FzYLM364fGGp5",
  "key27": "2acp6NA8sKr8RV6Ja7EkCTerHhxDUfuji7XL7wzupYncc5GJSn34E8hr1avD6uTiETzGkKAm6Bfv7xKQ5ZoNZoTe",
  "key28": "3PjDBkjDNv21sXps57hMCU8xTu9pTK6y6BUP3t8o7NfofHg7MjxWxgGmESLEikxAGz2N5D546How9b9dBjXBsnNS",
  "key29": "PPtEMki8w4w1nsSfpbdU1xHBceqdeW7GRCYbC2t2yWYn3pRaN9vSVT8iutWcHyDMKggQRaPat4AfySMD7v8Sc5F",
  "key30": "5ky5AsZRdzFPdWqGVfUrfrJKt6KTHHEW8JXrEjga7f84ZsFVi4MAHiXdLDLo7dLhMYHfChQr47VXAd6Z6PVS5ME2",
  "key31": "4dvXBpEXrmzDHzWzuwp7nGY2JgGzu48NzS9RbjtdmjoXR7qKcUCF4rX69ERsoNpMb9bMYgFykd3cM3ZKHxQSFnry",
  "key32": "3eHUPZMuJbvBgyvvSB57xScYJXd6XMGEm3asLjvACrZtjbuHf3ZYrJnJLWnfsQEyqnRZQB8ufWVPdUuNvDQVrhhS",
  "key33": "3ysmR1CAbaWrzgEPH5vpnpnaSECvLpKE4tHyz9FropbKKpCp1JTVagp3aBksFCZhf1U7GwQaQPBmsb36rSTfiFG2",
  "key34": "2XDqdzQunHU5Bs2eeqP9a8oFSzHaxbxqUEQq7mwRQm1Zopi9eojp8sk4qbmsiNNds6UNb7y3q5wxmKkc1iWk9K8m",
  "key35": "3C5NR5xoBdKHNdmGuq3B9goPRKQaBKeYqXod116N6yv9XEFrn75FyUTSz9Sjzbm9j9JEtBg6JoqyMc2KD74cpemk",
  "key36": "3CukP2kvnzbZYzS9ZNiTeAerPZDoLKU1siktDNoMsRL5t24f3K95h3Bujob2AE5YfcfhEEj9PwTa55zGvC21YmMd",
  "key37": "CNiUFE6C83TdF13XL5R64tkZi6UY5dqst3iGWTmrQsMRRRQ6EpMcUUfRBNQeFmJ5L9ZbBkigT7eBV92z7mkzRxo",
  "key38": "4sLzKjxsgc4enbNPaYBWfpywnqB4VeP7iqk7XR9iN3gR9Sb2CiMzPRx2qpVJP6tkW2Zj1Egfg4LeWfyeGGxTMDM6",
  "key39": "76bjkLNiSravzFJN8ncrSS8j2okydp5iZ1L7LHCvm99x47AefrXNF4tzhFLZK3FS5hi5K7LaNkPsq6xrzM6Nfv4",
  "key40": "663hj1sYbcZeUyCfaNXcpjEQHoCQCzUVaiJeiMjHAKpSAe9nrDGuUmkgMSjrU1HsfiLX8oAs6wvFmJPsJ8YQ9Jg1",
  "key41": "5YzsKxdwEQjoASzHo542zYViJgaPFxKRVto6oRWVuZUL4r5p9AogR8bVvRymFYYYnBpFUYxdTAYz17xN7K7YA1x3",
  "key42": "ksWabUJKzaWYHhbAt8A7AF49VQBsUQCQSxVxqVyEujSVrCnKtmKr76gHhQuU19fQ1pka3jCmrPGaYjqGUo18e73"
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
