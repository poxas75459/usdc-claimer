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
    "4P8hSxR7xcRd7AJ7yzBnfyEV4bVFBkmsC1sXLDMukPBMRdHx4yrAsKvwBxFrFNtSiaBqUEadMw9gtwGH6azaFJ5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HoZTJLLNQDNssSVnbqzHzMm1Gku7NAEHGrBK5ZZgRwvzUipNg7hFEo6NPrEwgsXYCjRRcF9i9NmXCFJ68gvtRxr",
  "key1": "64HqH6WzASu6YsLEwK3RXQUYzCoszP38cQMxKq7UJc1GxJHKtgpHNZ44DJqSFiJihpY4hy7J7TT3kY89rVrmWoKA",
  "key2": "2N3T2455UXGiTatmffezfcGbT217u9cvxsr9CvPtxpNmr7fM5bX5VWfa5r8T1ZXgqZjmLmfe2Vhytifo6YqRiNfA",
  "key3": "3X8fCGPqXeqAjGa5j9Nkduyhes2Ztc9YpvhVptjkgNjdBpVzCFdAWaWzHJXUCoeZAYxHEbr1J7ZZXHS7x6gMfE6",
  "key4": "4rQhRs6oEuzFKiLZFNteKsEfSU6Qet8YhatoMxichY2jicYzr7EQS8EdX1B2ChLNwx4TptxSxrCX7gLJPq1kayAA",
  "key5": "3t2ho6yNUWwCqhi31uGCGy2ZzUr49UU8tcb5gcueEZs1bhGX49QLLiXNcgSnC1w8KYoZu1oELWGo5Aj6ufLNFxmM",
  "key6": "24eYn3AmriLwsn4965sD1k47FNUbt91DnZbP1LFdFfpCnos7inSVLKvynki66dfXdgZgfUn3psTfCRMeMN8GRbT9",
  "key7": "3GHXMSvMV28rx46AabxYuAhJWbZ3bspVovyXYM484dDHxTAz557fwnmcokSjwk5h3JRe1FyreLp86jT87W45uGu4",
  "key8": "3DAgx33cce5FTBWYfjm5dvF9SMQHvRLXmJc5VSDpXEaEAeoN5SzGfoDYTvRp4tTiPXviK5jbjeGPRx7L1qTFgNtC",
  "key9": "4hWhQHJoFeBp674Rk9FchjabFMxBEBt8KgcNzGxi7hAeGZkiQ9fCVeXJUaFc7TMnFJCKyy62E3FkRVSCKDrx5Zk5",
  "key10": "2mFtdSyqVZSkp4KUfs6Vz5131hYLUA1eWgZgc5ukZSxeWUHugaEZfsXkNScXx2b8bzWynaWJfRsWFbyeVnRhNzSM",
  "key11": "5jBLCcDe2m56DB66xVubcfC6cpnchyMGPpXwQDhCL2x4JJLsm4WPyRz15u6cAu5m8Yff1baoXiCj3t5jDGASooJL",
  "key12": "4dn5o65764LKYr5pcPak6CX18EsT8uMNtpYQFaCTFTyrFyHkJkPykxtc7iQPURc3QzhiyuxS9BJS5JpdvFpBmWsV",
  "key13": "2FMw7BKfsu8kyR2ZH8YKjw6Xya29BqMDtiVCMrncZUEzyh7gS1xHTn6C1pyzXXmNLfjaVRSgbdtk5nnqpdxYacZh",
  "key14": "5uhs6Jq7uxs3XVazzfFoNxk9mnc6SzidueUADTn7Qcok4jz5X4APKNigpheaEDZauQecKkDwKDzyU2eradTibSnd",
  "key15": "43Jicv8ygbrTNVPvLALUZmg1iv1U3JNUzkrs2FTDDF51TPVQD6MayzBLMUTfVw1dVfiJ5zavbnTg5XKKvg4o6FDB",
  "key16": "2M2kcjrbp6EKFpB7FT6j1QXwSoJsJAFS2EFVwSEZF4HT8vR8MWRub3RvngHTmcD5VBQZRmHTasa7Rwu1p9S25VZr",
  "key17": "3rJeJsZrpNKdqBov1GBqk91Mk1GNHnP5PTr8nUGdWHSVvoxRAjEGhtbMgF3NkaPVgGwm2MpYzasdmNEK4dgE3SY9",
  "key18": "Fh6FAcegTpJNmqCCbhFehN3m3ZXbhK5qVr4wvwTNzjpZ4wRBC2WRjas3x11Xo9FvcF7FPS7vhiCSMD4yVRE1M5K",
  "key19": "P6EuYqCTtXLVxGff3u7Cg9WJG2nnQZvD7Na2R6n5xHSrdP7CQaZbj3HYTUXQuCh2xKDr2hCou3J8jEx6iBBdHXs",
  "key20": "57d2cCRDmz5KieHEkWiQTZRr7S3n1Npr9iKpVvtSWAirMVzJ9twebmuA183cyiNAifzzuaBMGVnzx9CPghJFpCfM",
  "key21": "gAgzSmxTYEPEK3rapbg6GVWACY1xA5omdofKLvyAENcUDaAxxGZJh2zowZcKu5iUbR9qeEaqjDaEtjcjptoqXwd",
  "key22": "2QyeRQK8Qy3HV1qtPknobDNLwYaBZU4fY13NEvupEAA7awZtrW5fGebMQwMr8Zj3SxE7RthWeCXqucAgjkqCr7yF",
  "key23": "ZHkdJ9u8ckHV8pexVwDsv2JBrcbHJQ1tjgUBKwkd3m5Y74yJjL7bURCicg7ac9WcAjMBwYAfQwzXjqjpwFFruJa",
  "key24": "3Q9H8ZYjWuhcwsHoAWDyYuARFsuBxphLFokGHEpjpRUbDC3kekdQdmLiq6oDxuQJAxkpEEJrmu1oSFKxpmGtQ35r",
  "key25": "4qhF9JDDQounA3BDdb6F9SNcdvGZ7P5ArzH1uUjrr1UQosy7bzkDaCpxoAvCuxZgvTSefpd8kdjFhBthYS9uayAP",
  "key26": "GXdgqAfdhBRu9FM6yDPT8PCyYmpF35S7rmcAwwF84UFUfvxpwCB325Sai9yqwYrheKz6SE8hx3GPbAtuGjE418Q",
  "key27": "3gD8Nz45KftFF44rH2yaV14eWw9jna2PMwhTMQnwwoLC96ctGUTdvHJaaesjvWUwNLX5uJuLX8zbF7NjNc17337f",
  "key28": "5UMqtQmaiCf7ZmiEguA7VQDhyRv4ZstHcwqwjQKejg1oegQbGrKQYeP5p6M3V6dBw5wPZfzyPWKW2SLks7gHLM3z",
  "key29": "49mtctToEg7THLtEn3PXm8H7djDdqxPvWiKWu6CEYLJrUA6sfeZi7MXCUk9cVL16q9xhGR89uTn1kyb6KWsRc49k",
  "key30": "5Sb8qkNiQabxTeTjNQqYcjoBU6N4rBhbRQFYZMEn6Ye1y47P3qFFs1Qay2sCafxqJjDrMxrXdx1CiyVBzdhiVXbF",
  "key31": "4yg5aAayGVQgaWvgxVL36N1WbdcZdmB5fKwBTwpNtqMidR32hSwZs64VKSGADhkaA3JKPSHTFfra4maJNWb57ArM",
  "key32": "3WtfWq5AtJif4bFUyoDWY9rmjzvmCpa1fETh77mPSrY3oyGmeCLRiXkpbJE1sAUJMjfoLX9vtv8HKzDsk3zwGDLq",
  "key33": "2T8iU53b3CQyAra9kwchavxBfoxtYDEEHkwMJ5NWaBnXGKFpK8xGDfzzjtpkrCFyMBHDH4zTUUWnZ2sS2YWPb7Cw",
  "key34": "XWpQnGv9BRD9VjhiCroDXRa7eraQmrNGVpjg32W3dVhgPr34tG9YXzubCrRaXSnL7aMQZPfqmRsuKL66jJuSg7m",
  "key35": "xixZp3iZtyKx7XZLKiTgJza69XrjeCKng4kVhALcVirZT2BFnuBkA3mFZdZzrZV5zJ34yXFMJNkKSnWAE9JYaBe",
  "key36": "2hTQbiNSNnJ3Z8yTJAuauBdrLgzyd5S7U9b754dLHjfoskR3HFNaBUtStb7KnBY5nQPgKS45in9ZFKC7twbHXMgs",
  "key37": "2ZDd88wHmJapa5EKryp2yihVJ96Np7P9XGoFtSnKwxRp6fEihLgYMRoFoDCrbeRVyA1KDguve2UWzqLYy3YT9bVj",
  "key38": "zZNNVYVPEWTHCsY2jJVDjjFaHG2zDYVNqLiHuoxEKHYMXDj1SYv3A1qD1YrXhnFwEDaKbpNxjSVyKEKbihFiJEo",
  "key39": "2pLHbNkfp2GizfvfFP9mfgSMTv9kdj74zkgC893TTNaJcb4YN76UAYfHb8XwYbf5oxgBX8mcRzzicU9AktPdQUym",
  "key40": "2squjS4f5NCY3PDrUwHk7nhAmt59JnUMKFmkEm7a9wNAmsZZKBDMXrztzBX1DP8CLaWy2yKFY9sAgGYf7jXLKmxN",
  "key41": "6482U9RAeaRx85ZwQ5dq4yyABX7aSGfFGD25o4yuw2j81YDEjwacujPb3HoD6uiJZBJ67sTtyDjvrskKVtBMBSsu",
  "key42": "59f1GEDX4qAZccevi2X1eGrg4C42oKLYephLgC6cmEFcHghrHYKwqa7KPr7T6BdzTJszxUyp3ykvYjcgAKzaYtFH",
  "key43": "vi1bLaCrBCdxS7U2AKDWtf1dnpDpmx1bxjNVc5xPrfiKGer7tmHSZybzF36w4FAhj1rEqCw4Jj5JuPStiiKt3Rt",
  "key44": "3mH1MhKLicYgZ83brHtSrJqbF1mmpqaPwidEewqX5tiWBhw5kZgABHog9kzq5TFMMfmKiCTcPs1KpvGW84Q1vLgB",
  "key45": "NE6VZoQULpGAqwzoAwZPUuvPBJVpFGr59rQubraQcRfvBGNuQDVLGZ5mQei64zoQUi4bRn9WgK3NkmHHhqidMMq"
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
