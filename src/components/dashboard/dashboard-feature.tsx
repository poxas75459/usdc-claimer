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
    "3uKEYQFJTmrMbsfDmnALg1kZCeUmPc7hn3Hm4a43J6JuTkUnng3bJAw2PAbTj3Mk2egCRHEBtmXmvmMmzu2Cr6KK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EHNcmeCCisds3LAXcVcZyXGw298HeAyP38TXXpuJjK4V825h36B44gvA8xCnXsdqhatzdFKtkPTfVFJGfWAm45y",
  "key1": "5bBJtZVi8LFDbv6QHmUpPzAutnSY1LMM5HQQNumyXcYxWoAYwR1WgF9rjJ8mAkQwNsGXN142xv4QpfTCMCfetPpA",
  "key2": "4mbRgkeVEipmFnaQjN9KZ7hXLvWjMX8GYo7Tr263CNFixZGxQ8hur2ncfu2jCe7s8nkyicdV7XjK1enBbrRsFNex",
  "key3": "4GnAnTHrM2GnHVsUGTTicQ16X4mzTxoB9SJGwdFfWB2C5Rqr5fHSXdEh8G1UWfMffaQZsVM8B3VQvYJ2WDpNBnw7",
  "key4": "66fe4DQ88LA61nd56RCBMDhB8G5NZcQhewT4WMQnKmSTTVB89DSZSJWbFePzsHSKhAZQgU9j3uyPsq4jyumcqi6i",
  "key5": "5TreWdAPeU8zzDm521N9JMDEEgBLAGHJJWi9BhNgWSdFNXC9a76cs5eY2mq4HHTmf6NuBpcF61kui9g6ijf3ikzY",
  "key6": "2U22Ash9bP1yTGV2CyqLeE8m5uGozQDPwWzbjgAv6uqEUHKdvWS8fXoNK9kpBbQGTH7gZkNBdgC2PwabcBEXUETK",
  "key7": "44f6T6jqtHEaN9yLze6Aw1v5AVHsSpvsZeL8ieC3jagrpWG9VHw6ExpuDJkeK5acaMYshgRrH8LtoKybje11RyHu",
  "key8": "qhQVvk9cgZoWRLN7mDGVgmQcMHWe4QThSJMCRGSB5Hjer8XKHYuv3A1ssZoXw7nrAsCF1i46xdV55tP9SxDT9eV",
  "key9": "5KWkS9HoHCL8acWRH9j43Mhdd1ejGGxjL5dMLcoWCXcndkSMk35Q3CQRYg8hvsaXZiqm1DgBTLHokWBVZwFABAKJ",
  "key10": "5h3dZ3PM81dscskugbo1L8gaQmp1JDFknPAq4b9Uh5CFSWWXTEYtHUnbPYAesG75UZWpwarqsLSbrr4fnCxsAxCz",
  "key11": "3MMCdUmbFSvg83PrSJKKfciKWfifSJDQ2Bs8iv4xrSEvcPdQQYSDrniN9qzqTHgDvxSccyfs4c6peeaCkhXGTmGy",
  "key12": "4BfUgedYYavHovz5PRfuxuw8Nv9KFNXUynvXjhSRmxZhxHTPCgHPT7B5Mtb5ctB4vL93Qg2dFWUMbPug9KyA8rgg",
  "key13": "nqFLWvVXhmq3RLCmpjHDsgftPBJ47nrp5iLjzkkhZEBCLuZbkjJSF1RnS7ZXaDQAaS3hcTdJRwUQqrknn5LdLBi",
  "key14": "39jXqYNcMcx2Aj2h2seSQe5Mo64zFMsR8C5joQNH6NCEhTqXsCEU1EGdhRTvmmpZyQ75s72iZ9ywp7Vt2RGLuwAj",
  "key15": "5KQ1kgCwSGXuiwRapJN7af8DSChCgp1noJTUefyMp9yLhv1Fm6usja6PBa9T3jkwzqbn2Sk7rrwqnXMw1S5cH5KJ",
  "key16": "bFS5NTU3NZmS4QjHaUjF4dui67rUn1TzWGxaRKzwZrfL1jHt9LAfX4i3sbzfyEb5w4CNbwk5qi4JXPowcr6NkyG",
  "key17": "Dy7Np8Kzn28rhcEMQs8wr8QgEZ4t9JzGtZhbWMmW1PCy3nxWYD6k9PN8drPmbrq1SXbFs9ipsaasJDUJdLLTfzS",
  "key18": "28GLwDvy7KzdnzXxrN9WMuDeAKJi8L9d1Ty1rcTPfTBJTrUGnvYKV8BNSYRhY9VLDWvK7v2kSgCz7hDezKzLcUsW",
  "key19": "4hAmKUmFGKdjc8cUgfeAiUFN9ppKEotJtthtoddnLd2Ktz3bxcGvVdpmNSbdb8pS4QbzBSU21BYr2vtH9LW1W77L",
  "key20": "5HK3ZpwuCwX29HdKPkUbitYFtVoQEFqwRMcNB4s2dUm2tGZoxLUoHQ9sW6Lk3198LczjeBHwZLFJWoZT8Vpgkjme",
  "key21": "4YpDqtLpe3NiAD3Dq9EmRwQa6zkePuGM8E7ohEZpRGyH8oN52m4FceQeLCCciKcjBSzULuEnHswECdvPfsvEkQQ5",
  "key22": "2CYov1giJQLpJTZMCwBetw55VGbroXPB2kP1nfZfDqsw5czXw4GWvFobzNxGNnYPkxJVt4haDyWafgcvWoGsZ1bF",
  "key23": "3X9TMTNKnStr3hybSpWR55gaWLM1un6GJaPVLZQ96zCrF9YqPEYKcaYePN9M2GcMVQjR7iPv3tAv6H44ZBdbenNQ",
  "key24": "2REY91XC4UxhWFc3r6GhznM13pVK28YcwwohKqBbrj9RvLtTJRLMQnjD8xDtK6UKcVNcNi7kgogRBWnKMKwcbcEV",
  "key25": "5zvdasFa1gatQvxtjYF89UtgPQG72c67q3Bzi5BHgPjMUNYLCfDFapAvPZAXBHEqqLD23WHv7VCUtPqf6YPEf3fs",
  "key26": "2PaxZTBN12Bc29765htkHypGSWVNN8opFcNMwBBwpB9vCtRpLmpGnZmbt1KAWSK2YLQJyKh85mphxGN4sySpT7ui",
  "key27": "5jH8gjni9icXNkq8Bk734DBYPNtkNx3Cr1fCxwLvep3KEbGxE5SaJBJYAvD8YaeqLSktRmuZBDSgduYg3uTkyrWh",
  "key28": "4KTssPEz7Nmj4WztTCqsK8c5dv1nTCm5ZLioJkTbzYWhX8SVHdKomPJvYgDpgkzs5WEgspHFzp1M7oqacK5T4FmD",
  "key29": "5ckpfK1W25ehNUqTQzMZjENiFWeKF7TxNDn7GNJTnSTQaZVKHTEj7mNPXu35SoQY4SJCAKvjneusyknTQu1n12KE",
  "key30": "2JcQvkmS3hAhVK9myh2FL3CC6u8jE9tEyPN2k5qai3NGaiQjqPEGFe5FKUKSYFvY72KjEs8KZ1GjcQfbvbSxdP3m",
  "key31": "61HPcq9Xqj5fDirKcnUuMN3TP7WoSLXRREfaipsF8m79P7isnRQiKtDpCL5j29nBJun8TVF2PNMYyegrdHmWzZKj",
  "key32": "PWaukEChSDXcPpZ6jWQ5wHreEtR6PyjwdUwZ8CMcgSuYpToYyBrAJc3wh9pFVS7iFbnAaMdr4meQiMbTWDJpBAa",
  "key33": "J3pjGTyx6VPmujyjjqVnGBYtmQzhxcAdB23S9tAEegdedgZR6cVZ2iTE5962vSUSW5Xr7hCho6xBMwteyBSPXXm",
  "key34": "64yWbF2wAhowViQKjdU8aWGSY3yhvwQAWJ5mWTh9BmeBtT7Wi4KRM5z1XYCZkdarHBhUtJ8iBFMpFT1Bv99Q6mgW",
  "key35": "3zRBLZfCJjwtk1HPHUZF2CsvKNgfpR4u9vud7emZHM3eVaWSuoWyCm4BajyhCJkTJuKtKvdAF5LJreaNSNwMbmHd",
  "key36": "4E6JGvbtMoYJSf3j4yHoUcCD2THfNvE1u1sonB8bdwM1GF9fcoGXh2xGWShPMZfU3EtAmdAp1rQvY1W4BaDMZbqr",
  "key37": "QUS6HUQSr3ij4uK6Xd6CNqMZxYiesjNZ7BHrNWEiqYtErq5cgiTGd4rsmesyw5ZiqrJk2qSCjDAi2sEuB8RrDWL",
  "key38": "ziDQQSQUCWgDBQZbVGnVdvTCK6Rni85uNx92dtKcBdoqjE8U87euoaEC8uLMwbTyqGuNfkg5eTQjWKmgXhhfC8b",
  "key39": "61jLKqr1LFYNuXKkkmMuetbG1fdQBweWZ4HYpfysysYzXntdH6G5R5UVswSxbZWWef6tLi26XGADqdHHYiTD5d5p",
  "key40": "3Wtvwhk3m6H8KuyHTJNJz6931s93xS4Nq7CgfSqwnKf54ACB3FUoMRGs9mLUPfUqxbri6pATKcw2sE72NiHnYkRC",
  "key41": "rXm3o6JWT5ztbZ3LWbvTXLazCGt1BqdzLKR8y7G7KtnJ81vLWV6ridSqUVxyL75bksoZfoT1KJtn7ZQ58saZAsJ",
  "key42": "53bVr85HhXQLkGFH9SwPgF2jCwp9MSYFHAv15fGyae559S9owhLp8RRMyeBo1uZw9zqjaUAXShX9xBH56XvHwdY2",
  "key43": "3a1W6MbUVvZwt8BxUuNKa4GXWSQy97qLvryfYpnnXmZggGRTq2gYgkXyVMtKCtV5HuBq5Caegxj4EEzaKvWWDhrh",
  "key44": "ppmWAikT9p3LC3ySc4C2ESF7LBY6ABr4fMbQQXNovsgqLJYuuQAZfJr12w3Ux4YNFLpxr1uZaLtHtRNwfP1dnd7",
  "key45": "5oCoaukMJx3cBxUwoR4axJ24kUeE9v3CbNcrp9eYCSyUNV2KFTpCvRCiWfhoJfhn5s5pEgbYb4DKSomVEbSjHqUH"
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
