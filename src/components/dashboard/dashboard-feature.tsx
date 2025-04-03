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
    "3EE5UUUWh7z3bCgjdnBJm5V2ywwgkXQwQ9UU8SvRis4mn4M65bt2HiAXDeigQYcgxy75TRaR8SSsFcH4MLZ5Dvwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HmXURnsKm7Ep9zvKxH6gSzjr2wtr6GCsY94fvCBKhfJb8uUKZeBgHZWhr2HQHx1K9PRLVvZSaTtAfxkMxV7rHty",
  "key1": "4cYompBBh4QJ8truvLGb9P9VdDfz1edntwf3u6JSLFmg1dzZn4L9HD3e8CugUkKJ9dv3Ct3nqFNy6X44RWyorNam",
  "key2": "5g2XLN92TgmgmVQyzrm7CbHr7xLUarXZmncu9UaxiFMdZvjuZwqNHS7721quLGiY9hhTox9BRLmWZkkLDmm9PavV",
  "key3": "2DzjZh6nskp6hQ98XWXRPa7UUB9bjP9koti99MwzMmTkFEgvsFtPw3VTmcxEuVbavQnsDdgiuCxDfXoFTJESaaam",
  "key4": "AcuWucj28ii5kZMkiZfQshPqQxm2ojnW8wHEejDXJZ7AJiwKoVcKQe1HDa1DWqMuXJ9PCvrH3veXofUcKiyfpyT",
  "key5": "cwtxC3BJriFriPEYGNUNwT2iF4F2wUuJU5PhQ9THq65gT67vdjTCnPzZed5gWpoHd7n9j24MKNjKNNuzSckYE1Z",
  "key6": "2WoKQ69pjjj7aaX9pzxV6cqwBnCAmomroYxMqkJBNBMbvFeKkx8eBaWBDKXYMgYhdXS3UEE1nGtJFMiRHiuMrPUF",
  "key7": "66swjCAGTkLXveqNQMZyeJUJyQgbXZfEwpkNZMjX8eoigQcEDo2Ka7qXYCGq9orXYQvKvkZLP4kCqC5CDwewQTYQ",
  "key8": "5CDZfWur6L99oom4VAB3q1B77L1Kdxt4gdydTaaWJxghcz1zjVWcsE7Y3AhepmGi64GHWFf9AxhAKmWPyTMfQLh",
  "key9": "385epVzxU2NoefcvFQGFqmK74Hfh8EMzpaFpAHnmJXGHEWK37zjMf3sXF2f1goWvgPTeLuDrRHsjqDwquD9j1uB2",
  "key10": "4MSqefnMF1RjCgaHadPQzQMoQjEyy4eMt5S1Gp433yCAE24KqAPVDWRrEiXkY2UsKHWEp7tDo3ufUwFEGBT3H38N",
  "key11": "4JiChSpKwi7ZyVnpXLB986w4ZSLfSz8dwxTBuNkR2CRBNX7tQoxTbuaqt1M21H1nab24vSvTpAzVjetLz41YpHYz",
  "key12": "344Njq3xnxtC2fkkDAL7gV5DuDoziEbGHSUf6qkLSjZAedypzidZG7knvKoQpu7hNy5ptuXwcEjEje5NQ4pkEUG6",
  "key13": "4BsHz3V9neZeWTua6Wfeu1L3GbBVowUB2kMDuyhZ92cDLAtzDJDmxuRejnHTvFcXDRRRNMTbjoTJyii2sHWVDaNy",
  "key14": "2s7KoD7xdyw5n8XmwCxkZRELqfFkAa8eA6pDZmwkyYp98tbcb4JZo3ReAarhMDNVoPEmwmNqCmuMQksrhJMh9TqE",
  "key15": "9w35oXQcUQnPEyyDULpmNPdQ5brGc3Rz7P5Qs2QZbuwcSt4mabAYEqhWiJcgGuR33qiECXse4FCCW8rLFtVZsUQ",
  "key16": "5yvGxL3NTKuUjUjFo5M7csfNU2oC1mNSzZLtuk4CUTdMXwpQffb7CB6BuqirFxxgDHvo8tQbgJDXMAfWc21KJXe3",
  "key17": "4GhWkXe8EvumodLJBzFjUWLj7gF4kqtBxAuW6KAUSzZAPggE65HQb1yj8yS8CzwG7BzD4EiGYJqkuiLSBP5py61z",
  "key18": "4JPTDbPyFQdYBD8SbfFyR24KoETZEbhD3BWcpjLdL5ZMbM3T7A69cAmTeZ68RatMgUNkApvxerdCDfbu4hjurqZh",
  "key19": "29ua8jc2Xh3AytyiJhzuxjaqcFZocoUzMXoHJ4BrVCZ2PaJSGtNqyuQg8zCdAEkXGPUCVdywXM4yLkGA9MhJNPdD",
  "key20": "2P6oCv6mgFxBrn915U411ztxWHfRQPDLYF6u67wnAbK1B8NnR9fjUE47xSTpHUZ3uSaxPyUuiHcapvhvrUnqb7Z2",
  "key21": "3nS2Y8BqB6bBM2woiZBMMzZD6wHUH71F5soHWCqKPJd4CS9tsbYSB1WTktHRgBc71YqU8CMuk2eAJEi5axKcBgoH",
  "key22": "3MWS3L11E3pXmHdBoWfFcFmiFnAWAHqDwgenrJQaLnER3bsWphFpgCvv3dJhiHMNaefHBG2RFKCmnUmd5zdpqeQC",
  "key23": "4rUz1hGHEsYU2ZLQmgujLLXJjjT7np5SSbSLUptdEDf28vPCqJZmz6Z8UsdDs4mW8rBq1cyeDBaxcz73WD5rFUCN",
  "key24": "nSFcN4LzfXoMA5SB3av1abcker32xymsFXkMB2HMXHXKqMdvme9ThBBQpTNH7KrXrmbqZ8U6sFC6isiiEbcMQkR",
  "key25": "vZT81FDwU6tQ1UDqD2fubU7QiEVsiDTG6PqEwPPYNf6dWCXCmuX488tHk7ArKf1QvkBWwsgVupqWHWjPGWfXz3x",
  "key26": "4ib4k5yuTfKY5VeXESU6JqVyVkqrvrBNeDGaTnQx5cVNoaRHPDDMPPbtitgDU9ScL92uEYFMnWTKMLQTtDPVPC1D",
  "key27": "5wSyBUspgLSBWwsmPF7mbuB4ZQYfKXQVhFDJgZfehV4MrdWpghZZnFUeqePKYwg9T89yRfdLiHVtDVbcuDRa6URq",
  "key28": "5gcp39ZDPNn68Dw15FScgYkCSvG9Es9gEGdX5VMtttkibaKWiCLJsNpdnTwHdKCTxNnwMAAjkvwofCqfGgr5DYUz",
  "key29": "5tqf7SzuPmaQeWCDjXDt96sd4THS8e3RPvoj9QBBuRd7WsYRicg6DPxjgpBUNTQqe3TKu3C8LSYJWWnwcJwxmaQu",
  "key30": "2dVyoTHuXmYFr3bB8EWhFmrt8WQtn6ok6BXx3422vEYSuEAAfHZD6tQZ62dDZfCPaBcQMgwYkD6tVykmMWMhH6fS",
  "key31": "383yV6V6e6qc9oNcPQwkWGBhMHQetwc3oNvFTgdhFBy94hai1qj2Hy8HF3gedJEqxb4WkyJCy3wH81xVCA59WQgQ",
  "key32": "34GEq5wDeARkipitvh7zrUxyra2Pc2S3VzJTGWDxWi7qEwwQ5rNDJUNXVZagytv5hDetgQ1Vi7yj3NoFcAjFmcsB",
  "key33": "5ucdeBQjdpbPU41oprg6fqD1kfxRLgPdapNuyXNxbqz3EWxo2NPh1Mfgty2XLQQBoWY25R9GwMwBx1gZyX1ess2U",
  "key34": "zpUfy9Nucp95i6yYEPK1Ef2jwpvVHUJDzhNACTfHXa5jXnhBuneC9d9TmML1rJD8SqMjCTP55Dtf59jbKPqsTZu",
  "key35": "46Eis2k7YzbcLRgnimKusLQwkcUGwogkscgioDMGsYpGoQFmCUWyejkhtnBGtnzMbtHLRptGzok8xeZZwBQoTyjC",
  "key36": "C9NsWcRWGSSy5FMcqZ5FzZzTx3s5HUGtCVhfM2244aZRmwTZYdRoLJo2eGKJ8sL4p7HFb5kqrCrYKxgNgRniCML",
  "key37": "5uoYJN1Azjx9GMRhJcRXPqVS51sdMdQ74rt4kvtGGddpnfiLjLhjcfB3PKUAdEWqhJxhEcsd8711MxK4bWAQRuSi",
  "key38": "3KRxDqBu436QVqw9BvmB4V6EG7kez2kN9t7VeVxeXT25Xb1h1jdJUAVcciSHwE7FhUmrYKQ76ys973NfjnE4Fmxt",
  "key39": "2m6FLFQ3u81Yr11sxxkWtmkjbcTZwDEuq53msGexa72attVoQbvQvYQd6fM7ZvfK2btTAzPy83v9rQCvXUwBLjjn",
  "key40": "3MFNjFtqWPFzeK3fUNVWwdrhiMc27NZVfnfgdNTzwiTJdDJPg6FH7buGiWGfVhBQV1Dt7Hbvx8undFXydgVpTgSL",
  "key41": "2qq4oLJbZvNLtYq3u8r5WcQbFgvTT2STNqV1vpuTkAzaxSwmVYr8PN4sPXCKH1QkoHA9JAHqKarTfSd17oq5sags",
  "key42": "4sxWjoTWXEoApkUfetARMWkdJXRdYFs8pLrdMoSNBEnyG9QyRwxEa4xxT6UXnBgjwYkX3K384zdb8UBQG7sHfyg5",
  "key43": "3q85tXhsJGZwW6NBbsT89Fnp6rbJpsFUJck5m9CSgsoPdMZSLhbekW5cvdyq8xgbqmP4j9ztNrKtsxqnZZL9BUqf",
  "key44": "5zHfY3DNqYvP3ARpUTFLPjPnhafoezpGLDT6LucNKVSvnaEk3TNKZufZk1weKfvPJeas87Li2HpM121k9hovExmC",
  "key45": "2PyAjYztVfdSXWSSKafpEY5ficvJRAi1wCMXdZbrEUn6n1FSFR7rL6VL7FojBfBLTTauuNQ71JtX9rGi21bPNsxm"
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
