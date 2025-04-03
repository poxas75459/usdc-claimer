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
    "Fy1xvX1KUu8mNN9xGViXpjnRWSQBHWVSNZZg6XFA21LtByXSoZAyr9pqYYixPCn92rBdgqm7zUPorKzCXAu4zND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XR6NCxRnxGmKgiSdS66Nc7sRCxVNihJkmJV1NWjUYgYMUsBFqPGYAEsGPHQWwcivrBxZz6UkVvqhtQDSEijTFbU",
  "key1": "3uGoe8fYC4kyjo3xZwydQzrBdEyRmQijbMPtjis3oC2gAkY9RFyJVLnoGpFjcXvDbwrETeF8ezfHhwqzNpyHiAdJ",
  "key2": "5qmd7BfWiyG64cSCuBcaNUboFDmV9zC29k9YbbCta2fvNnFJSkGj9UEc4f4eGEd8udDC8LzcuLeKDbCoJCNvV8FS",
  "key3": "63GCB44W2vaLPFsXMXTppeWp2VuKCtCEyEGkQcKAp9tyxQXUQfPtLRJkrvpawqmesvughyYaiJ8MwmXBbQ27Zo2k",
  "key4": "4uCg9smKUAtSAr2Lm2pfW7BqDEq38Rv8t36nfhNCcSexaQVSPDe3ZcMqFLL84ZLHFsLdjPAnpNEE6wMDKCus48Hn",
  "key5": "2wuBVrAnTrszHFvwpjLTPcm19hgYQpF1pNeg3VTLuCKsdE4huB8fACXeAjpuTxpt9EEUtmLFc977tBJ2ndufDGtV",
  "key6": "2fyBTHU2BE9KT5gRNFUBKWUiUXsqbh7J68RvcZa6tz3pWQX2hb189h59tqkuSbpxsb7xqVeniqf5bHkGTf3w6PjS",
  "key7": "26hDNzVRZWtjTWF7VrEokzyFesErZ2o1m2FT3kZxRa23DDwgPdtGm4o5eRXP9jFGMXnGmcKJBvUZZimL1ehvjcAc",
  "key8": "3uC4hhTz8ukvZtWJtJNw2D39dkoCiqiVcLpvbxFUvMDJ69mcjH5bhZmNw2qNF2P7f5LA8JgGUCv2rhyhiMA3mtMM",
  "key9": "4V2QrpkxG5Ev51rSxHhVv3tTt6vaPUMrBeiCAFnadGqQgoYL5uvveqDMw6rwMrX9MPmF9LL6rDkqWRGPQD5u1BdV",
  "key10": "3upEW4fb6KYpKnMcuRsWtrHzaYTQJzKkiQCcHQWPELJfYqpMXR67cfUVoM8uBxvJC9WXNRLHYj4zod5YU2ytrk3r",
  "key11": "3kELhQJTB4yWNm3vwUEuALCbNtE8Za1XyCdsaEio97wpmXAMV2FiCeVr4pseS4nH3wdefmk2YeB1CDSGDyQiEsvQ",
  "key12": "EuxZs4gjR1UuWukjdNTXwDqP998c3n438W3BvDgXHa9Hp6yDkYUXxPAW54Na427vxdJzrTFhJi2LcjNiiJTDgiP",
  "key13": "4krdPmVxTCgocUxpY3ueaQMZYYNzTseZbzEzhXo4kLhU7vxT2DmZ5Jmh69dxgD31TdsvQFCpWTPZvFBbEHyKXjas",
  "key14": "4CBzznwLuwLZqPYE5hsdH8wLvVNZinuwaTM4UhiV1jy3mf8aqohXfEVN6batmHLPGTM6mqRdpF8bAWT8rdqFUvMW",
  "key15": "2Kt2RS16aomNKBcAAZbMCcb7Zkn8tSvciVgZmFfmsb8gV8JHVH79LGKq4EY3Y1J6SHYeN5s5s46veXE5caWCFSEr",
  "key16": "2UBJBzQD25QAWCzGLorUZnuTWcshThWqDTEpGTSou1LXtx8UDqaoiN2j7F26SqcTuwZzLGm6kwivw9nRbpz9zkHN",
  "key17": "5iRpBRV8v2DavGiV7HfdSzG5swvbDocoS9qGL6FCHicmjNLChsHLyA8t2UoLZF6JCJ76hXAWBQxjfg5YiJ4CD85v",
  "key18": "55G5zJcxFAzpXx5gAcfMMgLw3h37b1ziEuM5vkky5SeYMpLTGY6RKQQ5m1i7oP35q9SMDdkeUvaQ78aN5Wwrpk2Y",
  "key19": "5T4PJpXYxGZxrSdnW9je1j7G4YzPNnQLEgFasDm9xjxcCs1TFWvxb3PPBfPBBrzsXqgxQETtVc9X1hgitLh8HjDA",
  "key20": "481sns4sffZtDXNkeynD1zzbHnNYZAMR8JvM4ovAyMsdm5tNCyh1USAiAxBZKfNmrXVwQ4CCrepiA1t1cCkjSgyv",
  "key21": "3Jw3xAcqMkwZYBAyURHeNHweMZqcmaHuBxuSYM1SR8MSvajKSncpnWqTLvERsuzXqAK7s2rRbDhxpr7zjL64rDY2",
  "key22": "2WGZEgTcPUKGxGynaeZKXZpnuFmwdqy3UUK1zwjYfcBHK926aiWiGFeCtSHkPm3jo3emCK4qYpUV9hUmyhDkUaLm",
  "key23": "3pS6QCWTCQpj1jf6KQwzzymCPdvDevZp53THuYawJTKmHziifDZcMqAUyXxh9LysGDLjvsYhaYSoKBK9fynwsYqj",
  "key24": "31V5hS8QZLoQFU6di2YF8GvKTYpK8UFvSuxHUdgsVRseoosWbLWc8E3dz1W6M1URmMotwCbHAZ1zjF9Hy9F8YTiW",
  "key25": "3LxGCrxuZdavxdYVsuJcSfkRvL3ow6kEJaHvmA52SRpXSZVMBMTAapaCDMuGg9xDzUfGT85YBfmXN8zvznF6PF6f",
  "key26": "VPD8VbV2imHb8b9wERCZ5aBRtDpgV9xz5qxXEj3te7gXiL9VTG5cgE8yKqeCjCarer93FCovw7fv3Eaarc6t9SC",
  "key27": "G96KUJozdMUcXEWHkCHPvK3R3iFHJieaScqSxqub6JyyQP9oTh5z5KxprDgAqttuSc1bW58Fy3GWW7cV4mMzGGc",
  "key28": "5JHBxALd38BFZZmd2doZz5Q7RJsirBsPeBM7UkbKDypz9VvgbFHV4GMc9rYZcstejHVoXxdC9fstq9q5vwiCMang",
  "key29": "3dpxuDVXQDmVj4p7Xetwx9YsQCDTSgiRvFiW853n33BbAMJuX2gaXyDPScVE2vJcaCG7Zo3iYjiVixfK1yCDZP92",
  "key30": "2FB9ji3U1DTGNeFUzi2SKkebmumnJEi1c6MkMDAzobb1yujGwVbrwwJUx36nrcY1DBitW3kLPzdBVBQbZbbRJLUC",
  "key31": "3MQsdwb8Cu5AQRvwVi2j5y4SRXQA6Ec94yazsTWz1Yz5xhtpDBquTFRT6PKrqZ2Jt8MVVcCRYkbb6CoMkw7skMCw",
  "key32": "FH95eL6nYetoRFztkqjWXCKAZRe5TSnAWZhWC8t1R3fExwHPx7hXeL4kyKW4UnDTGEhukYYMJduiiFJWBhc4CzS",
  "key33": "3u4xaLQJJ5eiJ5nqNhEGzfrkmp9FDbnPmgrLAJ8mWGjzEw7gb59r8btcEjpDLrLEW97pHfqAEWVnG3KfixUvdHKx",
  "key34": "4S6NFbUsE2veK4BJ33rZhmY6h6rDHza2VAhDnXjEj6hFm1jaVHp8sTBW84gUMcK1yhJenUMUJA8BcSfssSE9i8sj",
  "key35": "kYQzwSbYv1W9aqkT6HT4hz1fM529aQfB3Wm9SdnY8xgjPV9DrPFk8bqoz7wPVJHCSzajRMEF4BLECM5qHHGLVJs",
  "key36": "xjfF1b2Ziifg7wFkfUAVGUsyHagoJFH65bFEbv75W3Q2RUH9wXJsaZidDpATgUjw2SdNJGtUkNFbzKXFJzcprs4",
  "key37": "2B2BP4D2BbeKWoFieSg1S48oAVD7EHDC8N7qoDRPmxw3tjA18sh9ydocsYtLh8M2JQpto16iZhPyD6mSJ9Eq4gT",
  "key38": "5qWZRXB8FnAvbVJHnR4dVus7WeUfSZhTe21xMak79ydKTLpzRWYihL8qzaVvr4ydukhaAEWFMCnefPQy4CLWofbU"
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
