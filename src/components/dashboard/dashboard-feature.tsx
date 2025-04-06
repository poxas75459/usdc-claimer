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
    "2EN5qRKqnk6JSmbCwZ87TaTtkWonzLEdLzJHwZ17iseQFsuL1Lyx1yX5g4qZZ8jSHMsA2TfTSJTrqpp6agfu3Zz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D8VbcVqvHT5Zngamoj8x1LRhm8FvPMzcqwK5yVyqEfTr8kGwk6ezPLXgQmRch26WhU4puQYgBPNQ5teVHbgdNRW",
  "key1": "3F7DesR7NeKEuwvkdrHpaoK2nw2waa4ZQMJkp9iBeh2B2RP2B4LCw9b27R75j13VzoA5BdvHBxK15SJzSu7zq3Ag",
  "key2": "64nmickaZ9AuWq5HGDYU1Stpt4tTuDgLBQzozfkxgxQ12QigNdTne12GRW61B6oRzRjXj7gdEjNpmQGqS84N4fUU",
  "key3": "4tD2KqEnfhEogWVvXQ1Ge7L5hPtckatnnZz34kRXBWuzQWua5Y42n7CeKWYFm7Nmd5xcacEwcaG7oXCSE4X1QYG8",
  "key4": "3CqHEiSMmhM9A7Pib1TvvvmXPLxzAmjwne3hZPLe5YkCZzrmeahLqovE7w1hAZ2cjHWGNVHU4ZdwJmagT1gR3KYh",
  "key5": "2mYaoEpzxYdGEyTV1EQhcqzgXFnyS4QAhAmHmcJX75FoutXmHKvMFEfJws26QiuqV99PRYkphXXzr2gWBFvUPyKo",
  "key6": "3xzJ9bUFSYKVRXjfjHBzHTMN1dMLBWsm51F9TD4WPPm9ChMv2u1gjXX3MktVkHJ7rJX5Gzem6t9ZC3SNF1HhccXN",
  "key7": "yFpgsFKocXPwV2xjRC9nAsfwNiYNczpmAz8ZVd4Em2jasW3h6umSh9zsqZpyhTuHGocuP3B2MATkFqxEHyrfcps",
  "key8": "4psssLmV8NddBr99n6EfDZLnKwz9AWT8ENhdjPPJFJzhh6oA48V8idqdsHV3yEnWK7QJ4bFiS4uM2o5x9BTPgrpQ",
  "key9": "5t6x7Qu2pT3b94rrQRMkJLHyCsHf7Q8ucyGsFCCc2Siy6ANmeR2FyaJRCiLPXAyTTQ8GPbMz8GT4QgywSABwwFgf",
  "key10": "25NnbEZ6ibzzJBS9uytj5n89noc8RwX64sa5DT9Beae5EfT9KKxqdzhZvrKtvnNE5paPKa21jKp8C8Lw1KVCcvxj",
  "key11": "4VdCMqttWjCvJUQVm6wMAh9AtRHKvsv9A6eyR75G4rpJQrcmcszFRbmJZgnjd9uDYi91mVJX78QynVFxgsgy6Rrq",
  "key12": "55coN9BfKatY3aGqZRh6L6rshJjNxfFPJ5c5KDFQ2i6qrRZuyokfXBwXvyazKoWztgTWu1keZfQah35vZVF3ydQB",
  "key13": "2FjA779wQ7mRK9ueBfo7d7fjgvvxPyzmDeTAWr48vTdionMSjVHvihWij73sE7TVSArDwE5xekqeLMgjtya2YhE3",
  "key14": "4GbgH3Fp8HY9yk3WNdFUc5AUNzignjZMY7BjvT3TQhh3dMbrNe7yYrcrr1PNbJzz5sZbeRYDNyNoSyoZrPkuEKRJ",
  "key15": "5V8eX7SJbpF4qRtCX4f3qDQWg351SPXt6DAdaaF9XUJc3ehVuwfZmvPvzaiC4fmUmBBVNhkvF1bUPa1nT7NQsEuD",
  "key16": "2H2BH6E2s6ryj6Xz4G4Wb5ufVaHPr74rMVkPgGuQ6HmDrfEhN746hQDVC7mvBd4gwoJqgCig6AFcEWN5Meh8ai6v",
  "key17": "dboCXM8mFzFcRJShtnigUpm7ZvwMubWFvx92S7CgXBgAfuAs6wbZNt9ft9GJDNpeVrmm7cnwfPrSixNwHM4KbPA",
  "key18": "59jPbvybpM4RVyLeELwRhsZxV1v3jxvivX3nyCJmsg4UxCistQheHXhrvUh3BxmXrkJgvHXtvvUxrmyZULmJXQbX",
  "key19": "3rqUK8B9XJroqKiQMmgGtpsEQoz9w5YdaaC7WeDWz9CTDDzhsu4UEuPS6zcEu5LF5x3Wg9VUYoE4f15GeKmUTWjR",
  "key20": "2GqcUXxAdpcoNxXSeyFaM1cwNkZFCp6JnukYnQtx5KMw78WLXsuzYfgYYrdEqUQXuVFGksMGccuznfZ84ZiDU8mk",
  "key21": "3h2Vy4x5kZhRWeXhvLjCdr8nfLqPdjWLfDKA8YcjzfPdbAS3CPuHoWMYyjpnAPJkgj9ztfaBG1pQkuA5Ygp668Le",
  "key22": "5oFdEMQS6EDSCTsMbKUneVfDUb886vncY9MPwB5SscqUjZi1CBQDEw5Yr4Sji3VaXoaJuUcCXTbE2MHbNuvfqMWG",
  "key23": "33k38Sx6dXyTu9Dyo1oFt7Sww27XPSzQqkY6WSi45TdBLXjCYpSB8pNk54xHEssmCu9o68CY3nY9JQo6TfRFfWLa",
  "key24": "3xd8XqNtjQZpkjyYoY4Hx3YUHqoQhTQf7X1QjWVvuCKzTMeM7CXbhgFoHXjhU73dVABfCcArHLN9XbguSpZsNwEX",
  "key25": "2htSSRVvmz4vBoie1vgrVTQm9LnJ8vnPUPYZmo8H2aLhDk9YDnFPQiPDyad4AYk7mw9mpyqbt85CF52k2nYiMtE4",
  "key26": "t1fDzmmKLHeY7mEwSPsNV9KzCyghBEouKYFrqJNVyf8XeRPYwXvHHNtU67zo7RsMwATyeCibk9czuAzgELgXeCB",
  "key27": "2y6RdZBoj4Rp16JykKbtYbYJVvRE7psqHGvYgyJxXMiyaqrnEcWHQmG6XVw7RiR5sQ8fZpa5xBbrKwYhu8SbMMBz",
  "key28": "ywDK9csd5RUQXLbXriynRhDNGuP27UDrEvWpCHTesDjVZaDVM5ckfwQYCJLAEFj9yStLqG7biAoJ3H1sh4UNBxk",
  "key29": "5BHAzVjWEtRRbodto9h87kibuPDVjL5qB6bRcGM2t7ch4vCMv6CHKavN6x8wEzZn49Pkfk69kXewtZMYkrw2KMTw",
  "key30": "2ribmzPc64MSC7rdQwee7nHEJMSLPHyuaD2eXG1ac7bbQ1ytYujLs3mKvE4mLe8YGSqun4SGUZfwo5f2etrYb74A",
  "key31": "YNusnfLfEeaHhQgiWqEXuYHAmxi3nhca2brRYe72uEjsYjodk3h7cBh2n67jvvJrpvEEUDVu5PZYz8phQkxEBga",
  "key32": "5a3D8nxyeK9mup1oyTWfHooTLDEYoJ19XXmp6EUSNPUJ5MBu6tUqpih1UYUQB9ppoqiN4xWRgqrrLjqdKK7yN71d",
  "key33": "4Wq9sfD2YRGGAHbCqqsJygYTTVLLorz6THcF7y1SZbmQ1nDDScix2DkU2otp2EVWxzabWEeJUWbvcppFZRA2H9UQ",
  "key34": "ab5JUckL3ZsHdMvAEW5wCDymsvJDTLATR8PQ637caztBWBKL1FdU9oUG5dipPdcqjUWcFHSRvfHriYxzAzoPEqz",
  "key35": "481xUjFvWbdcbwy1t65pbB7kFcbEwxR45Y8t6Ubad6sKwChpS2QKpgoEX1d7G7x2dCnYfE5WXvWjr3wG9d8TG1y8",
  "key36": "3FfJrZ7cTvNZNXJy5KWoKRF8sxDpJcinqwoZmDnNUWEndaQ61j5GrH8Qr72ziGsRwQPeiyoKNwQHavCowVmm5oTk",
  "key37": "5apESuCovYcdhEgb2tRcuh9n5cG5deJUKpXpvjCYkKd9gifCsxXU4VzZdwkBXbxS4CLbfHxgbKw4jxzJ98644Sgy",
  "key38": "4VBnX6dq1x2AggGoxfCkZwcWavRmSSzH5hwmwTKq2GYMNfB5kn3ykY9dfDk1qbimJ8hSLgciWsfqmsS2gzPpA1bi",
  "key39": "5bHQ42FwVBJPZYWNsC45jfug1vwSx2V1cqvcGxm8kTtuYS39uEaSrjzwxoa7nkKzjQwa2BwpsVpL46uc8WRG9Dtc",
  "key40": "4vLNKmtQxQLP7R3eTgLcPRnNgNhb4Xse85RACaS5Vob2JfYoeiLTPueEKATpbHx3xGgNFPymcddaBHpct6VgPtJS",
  "key41": "2fcfrUwGyD1nkfLh4uTe9w2u2foxQ7r4d1TVedgFcnvTJQREsFcrXRY8JwPhGCFACNg8u8dcGTS868DAbWqSCnMx",
  "key42": "3V6M2cS5Cg5pQrG6fxwybrRJvcNixSY1ieFMHCPo246wWF6d1iGsyCk1Cy8UJaqPvusc3VS5aLZ7Bhe7nZQVusx4",
  "key43": "2867pZNQCZc3aHbeuq7AGuG3oocwhHUnMR2GgDmQcNfthFnWg7e2fRXmgfmnKNugCxGJRvKdpd8ZZ8zcWHmhySmJ",
  "key44": "4vSxD3eKYeTJF7Urj6SdfozEbHSqNUukG3x8et9JGyicTkz53X7nQRHFRz2u1FnJzptcPcnLp28U2UhdZy37yMYr"
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
