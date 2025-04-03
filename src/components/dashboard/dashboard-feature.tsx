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
    "3kzLVgRULiRCbPHoLyZi9TK5qosoR6KwRrYtTg5NhgGTnqQJiTEeSQfL2DpuahFV6XKGiVPzSjBuz4Mvs8A3szN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HgBwCeMG57NW4G6XyBYgJ8SdFgNG6Ws8v3TaGGAtjzQupzTmvCaSxACzbw1CbWMoCR35mnEVxiNojcEJwsZULaA",
  "key1": "5hU5XQRLkQpfmPBTQqXw1i4KzWWX4AfkQKswG7jmXE2kt5CfkrBDusd7UJc7qHNT7Sd6K94GaRB3drRSJhzFvUfF",
  "key2": "4UEsRMdTyRB1nm36J4X74MtSTJqTrxvjffBt9zUSzAdroDTgSdWHzXWEuCfDa52MNtWYc53sW1d5kQnyTH53DxaU",
  "key3": "2jRxMXGzXQHkdM6RU12Vv5uaUkBp7zJ8gGGXkGEeoBfESsPMUek5Wwqq7adEAeutmSDXbSSJmJB5HH9pLgc9fJJH",
  "key4": "4QL4r9hH5ZMtddyEsQQDCxGpHFYfjHWz866CvXvtcBuXD9NSCXujtrY83B4CxykGrGMb6vHUu84DxD4q8dLNXX7H",
  "key5": "42MM7VuNCatmhtsmyJ4B8qXswF72jgtED2UvAweYrDycaiymhj3PCYf3E8PwQi1btE5zu39rQ86C2c8iKgHxAR9y",
  "key6": "PDjZSFASFojK4UmEXY15HMHe7zVssxRxjSJopUdPLvD9EJHvYyMTb6THXgtYuCZEfqHRCfrZ1qmh8s48FbGL4oL",
  "key7": "2hxy9GLS9BtuoAi6ALqvJUid8BaFkq4Z5Z8y4QwK9TvtvnXaQAPTGceLyuZAbkMbuE6Ksvm5ZywqGLs6NpXYKejy",
  "key8": "BYRUVjiYj9M1ZvbkgJgAMXCtB4njfw6HNigjFbHbPf2BffTgsmgxbhsoKchwpsshNeeyATNXFHeG6KxQQcnAiAs",
  "key9": "3DfQTUHgRCWzrnRGr1ZuDE6RZSHk94Bg1auSarzw4Pnqi4wbWvVsGr2Dsr1Ds65Xeo8xvMniyjj2GbBsU3kNT9VN",
  "key10": "5Xbo3GPU7Qd9rSmzysd6pSsRnscokZp77bnsneR4hUQfE1cmMDHEoH6Ge5RJPK2V1uuRU2YSYGs3tBaLBznxhyZA",
  "key11": "5Bt1BkgNn3SzyYpf2yomRog9ag5UfE3H5HGDA1Nny5NMegprj7j3B64GP7ptbS94ptQyc7ip9UiriJHMGtq3w5qg",
  "key12": "5PECRF9pQ49SqhYNtZu9hUsBHftX4MWtWTYBi38tu49pVbSLpRMES88Rh8pyz6q48zZ5EJkapv6qftKzKZNgCdEh",
  "key13": "2y6iq68XE415MWi3J3To7mdKuEP3NovSRSfwdrviwyW8kZc9i6D32krCVh2BKAjB5B39GBTY7UNvWsMazzVsMdUj",
  "key14": "36wYn4aCpBB4aYHicphgC434yrpbKkq2WPQq6bRWw3yQUnBxxiQ8UuMhmefbjMjUyiE2izgtrRkZ6HgNUhEMAAHt",
  "key15": "qbDXLXXLiggZ9KF2XrtAjALPCb9Nkivuxv3GaipwYTsHo5G6Hri64M4o4UmnvqiAo8b83Bs1kbSvymSGxc9ou9u",
  "key16": "5QDYekezfLohksM8YFzodH8VTAQtJh3pYY9HxMQVsaDYV4SC6USPTpsPVLB6WeWCEBJJT19eQp5nS3JYQppz8C3y",
  "key17": "SsCWSQqHUcKRStCbMydXarvT4zvzbHF4hNqKoFDqVhqQseGfmkeT3QXsFyCPykJx6tq8EmewfSXWj91Ug9CPb3p",
  "key18": "2ZpNdqHkmpaiF35rSeP6KonCgMzJ2ySmEd6ZugzrMvCiZ6yzVFt9qhAPqpubHRHZvAV9wFBJGTrwtLNpJsqVJPrF",
  "key19": "NWVyKcFR7FoU5hYFnuCCTPptFvbEAn4NLjZVsFFoWT3rVnJMh3Dr2s65LvgyEuEabziEiBPMPwxpnj7PoK5EceG",
  "key20": "61oVM46jd7wdECNApMfu4ztGENYVKnxurpuDpu8FfDBBfPPWVXAsVo4rw6kqSTE2fi1RinjM7CUJeBpVHbcGM8aK",
  "key21": "4Jvn9XAQY9e7JZ75jP4ZV4p5JN343pnpxU6xiobn9xJbeMViiJJGn2Syx2DiDPV47agbHed1SsYoGt5UMk5pSiuf",
  "key22": "kVKWxA3iUPTPVFzBRDinoaWdFSCf8YMX8xSJTh8hAgSqWEZvoKtxQkKzT3WPwoK4j1z9xKSKed2rdRAeHFidv5V",
  "key23": "4AXmvnRVUNMDqCh38bxi6VjLqXtC4MbfNiwpPtSKmfDGqc8yuMJLSyr8emojfSAmFbUFxbMosfshanvUzfmBj4gm",
  "key24": "59XD4hEZiVF4RFWzTLtWRfEcjygxyZRhphmqvDyN5ZEgiF4x2bsRN36xJ2zdEZ3jYmjRE4YV9gg5EJchkFrHK79A",
  "key25": "8jh1QQEFHxnWbF5j294kitpqZ5wg6u379unZcnAgqRNFqwjPUjRoV4TLroqhvG19GFQMg8yfQCjgtqwyiP5eEKp",
  "key26": "U6zAZrCWxB3SGJctEeT3iGTB4wkpon6Bs8XPmJwic7gefTmE3AjYJxj4FKbo41r2Kyer9sTpoMf74ZVngAuCcJ2",
  "key27": "2Bj8NL5qBw2pbEmkP3PavX2HYScShA3HxsRtsDMpQkG9Y72P1zdbgcncVzfmutUL8eVXpQ3tukVpqsWNCGiMQgeK",
  "key28": "3NyGSWmVpqmr1NfL1ZH5XajRZv4FYBxgkb8rtrsxvLpQSfv9nTmHNMswLfNzpoYbEbfYaBtFEm4dtK87qWDhpiui",
  "key29": "Yu6GxvdnJ7qt9S1GntUquZHLg9LnPHqsJFuz3JiAEbANmdwxwuupurQ6xoeg67BEmUSYpj6aqTwdLkBxhzAGHQR",
  "key30": "39BVL4wGrvT8g7Pt1hjK26sLgtfiVAm7cDs31Ysu4XptnPAj7j2UbAYsUjSUEKDgZo3NUMwKehgNgzN5ZNtKSDGH",
  "key31": "3uuWqHsP2zZu4QYGpaZydGotxxeaT8EXwarjGrdzDD7MsSxhuwLdscySd4ct7irkd5ng1UCJwPs4ecKtEQFEBSGW",
  "key32": "48AVXVoofkNnSntQqJBKkvDfvzM7uG5eY1dJ2KoG5N57F9KnCXMvy4Jpdv1jbKCLzaEMLUXSA1yXNdmxZMg8yWnh",
  "key33": "4vtKZwHhpxdkWf1GVEGtM1Ba9KhbSpf1x5pMn2RoXBx1bnuCT5DpzKMEJY3T4gGJL1foFrsWWmUMX1oiFVZsVorm",
  "key34": "4obVQCNFdMZxNpL6zaHt42PMyX6TCWR1QzVSJ2bFNBksvqE7K3LpHM44GDdpebcx39AebUR3aAd3NzPWnZW1K9oq",
  "key35": "2wXWsLRAANKvmP9Coq2skU18W9pTDZyHTfzcnZRxeCSiLUed4mPZLa3qhutvBKMtSM2RCTCP3qFYZYepf6CeMgf",
  "key36": "2fKyfMvZrX6vKVkMJVQJq16j6tvPpvoXkwYvWkR8UePdinHGvQdEzyf86aHJRgJdMNfp8ktLMnTyBHBRSP8bKLP5",
  "key37": "5q22D9EmyxiSw9KCYt1NQ5bhD7CEL8Kq1kGKnqvq1nLikhwYkHPCaQBw1rRCgqyVEULN2BrQeuJjdjfR5hBJyBEJ",
  "key38": "5YnXSwk7jKhPKo9B5TZgM5oPtSa9GyuanjihFCv39Mbv2SckLp9B7a3zJaDf5MpXK1M7iB8VGA3GBdYbuxreBdYJ",
  "key39": "zCai2vTKf7cokzujinPw2XRG3gg6aF9mdTgzHWNBqi41y5Ju98foY1mg32MpoUg4fAAeBWsSWCgcmjEFXgSa5iN",
  "key40": "irVGS6KrmGBVvEZM9KYavnDQsDs73a3sXFXC5CWYBiwigF3qZkJn3YSfQvJDnXoxz7UacayVRjMMcsx8hCPX5Lo",
  "key41": "4jULD4xiJmJ2vSckFGGbGJnxuXnEzNr3kthk5kSKuYE2Won7gCtBU7GsUKD2UVSQhMCXajpe5wGfKMY7PRPT4Ky3",
  "key42": "29iFd73j5a2TpMjfRfybJAbLRPZAwNYrRpyfnbrdNLVeHjZfLLr4E78p7H8Bq2TdsfJHCh6ZxoedfbK4B5uy8cMU",
  "key43": "59KW5qspkh1vTqHezZchinT591uHfoHarMrJknM7wjo6zPZJ3XPfrtQkMqNMtnTDUNb4xovpq2k8ZtaSC3KprJZG",
  "key44": "3tS73jNWifsjBgWcPicKRpqex6mvsK4N66QhzdzDmcMcMkF3qFzmdscJQ41kJ69kmqyx4n3JJc6hFQVhLRK5eWzN",
  "key45": "57XsDyjoXLXrke5cyc3ZzLs4LKWjrdLS78WVYUGytpPNmK79QQHVmwcyn2jqJ6kZFY8bVPn8dhgEXzt41SJECW4X",
  "key46": "31Fmw1kMnXjGXjYyMcyrmWWFVx8FA5HzZZ2mQrTeCpvrh3FSX9Dqjk76k9mTryeWMdXKPwb3NrT87Z3kPKc9wQ3y",
  "key47": "2jQZx7MeACXY7xJgNTSzViNGHuqE6dyRYVDYxLKNVGYCtVQbdWA6qbT4ZwxyKgafAuzqYxFQJUz3E9cXQMPQy32r",
  "key48": "2bhxCWvQSbnMETaXFwbTGBPWmdarz7FHAh8SUK8ZpQUNKa9M47zGi36xKfEapBemV9Yh9dUaRkUjo1xFwgfJ5Ar5",
  "key49": "4WHv35gHrwy4txEkdoo1zwB7jp1fywaJ8wJ3z3TF8a1caWsAfWcoQnnEnn2t4HRtnE7whyC8JeRkc4V4T9bNFYG2"
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
