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
    "5MeKSptNivsBxJuYya6bcaMst71GkKDJSMPLWwxxgqQ6FCpptVRwdXiQNDHwaf3vXsPkfRoWtYiGu78HE83UuF86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A32nVRNuKidYGK1V1hUTEQBdzU7nrcsGz5qRZyFLnC9uMz5efDFu8GxL4Z6Mt8WCKe8uyTVnybCvZDLMgBc7zBA",
  "key1": "65xbw2Tcx8VDPYT2J7nLQhHn5B3pAdrGnQJmVPy3W8cPSzpji4d8ygFSNnngCwGHBfysx9Fdt2YHdA1piZuH265R",
  "key2": "mfbLhwcD55Rd2paWvUZ9QsWsb6Sn4E6LnSzHujjwb7y6HbrndykaTyGGwXubVbeX2jYcpEoQon468CNzKu4KB1L",
  "key3": "3ftKKhPM3eU3srtHGMnoc7wpHz1FXWwbh4ZvYGMwDQaUcrVMxPNyer7nGYN65hJW5N92qniecWTVwqz5yG54gA2v",
  "key4": "3eZhsMEVsPnRJJRx9KaJizWSCve38VkBK1oJ6EcGAcZmxkkairL8W32mrbaJceK35Rajks5xyev8NwVKR2y6spW4",
  "key5": "ewaYKq5en2ZGsjLGMUAqTzVEj9fX2jNARZapob8vuXMpp9BjJKsrxYxnpJXZv8s5HbvFn3grEMw7FkBg7VhG5bm",
  "key6": "4zdZ25Gkt9VJ7j1GSCTkKvi6iwFZ9ogi5MJp2cQTkcU9xbHLyTh9Vg8rMUhnoDd7UwD5ztBqNRruR3SPkcxFwB3S",
  "key7": "1YMuhPdKUdb7dEyKyGB9PzQSUGkmZTgE8gRAhtd2tZ9cMidGDfvsnkYjQepuVHECf6PV66oSgDwTrXmexH5NhPq",
  "key8": "3dyx1ChwFz115HtA2krkFyueHHiRRqScEbZsGEfV5ioQJEP5JdGPamt16sRnEHnout2QwRpkUUgrHWj4qwVQBqEc",
  "key9": "3WzoGTxqDTTCo8wMexNkRpJmkYcDnVAjUYs2unu49XDVjvujZRAm8DYdu7tWCZgb6xzNkMLzed115SbkFzh9r4R7",
  "key10": "3dm99ctn6dcB7psqEWQmq4Gw9Jw6CPkBjBHQBkTdk5PbJRcbWphMCR7LHN8fxztUyBfJVKkbPwm11ynSnBhZvqAY",
  "key11": "2bCrapxZDpnv5nhs9A1d731JG9SXwd7uN2D2Z8m4Wy6a1DEJ1RBCjUqWVNdNoufZygLKY7cBV9hNq9wS4s9H3SAh",
  "key12": "KAmei3mBSdwzHQXZdTJ4mfwdmM5ke1WetMrqSqhEgXYhfn5trrhpFRJ2RFkpiRyzfMZouADYUeRZBrdpr7JukJD",
  "key13": "38fBgHdPAUYUnNDS1ddGonhid8s6toptGNhTk7H1Gq2zqDe1jwVABJ7GwzGvpFcUMmzmBS53TfFdeowmumSgutBg",
  "key14": "Sp48EVePtWdG4gCyFEtuAyr5pbxj4xvhnCchTftoH6aQuMJCGdeHKNSHNQPRexFeVi4ayTGTFVHHwEQjXifMP7K",
  "key15": "2fXAtrxFZVhXgwWm4CJ5Lo6a6WY91Pr2rDavZkPaEa5tRRgh6A336yLKMfCBNmmfojnA3icoAMSRB95cxjYhbroT",
  "key16": "H1G3TanFEQZdjuZhLj5aDhWHLUQfgCdHGgqRT6kdj92SfMZLVxqQjBzz8U95bCCqWCuH57Ri5xkTmn3CNRSciTi",
  "key17": "3anteb5MamubstrDnAudnU1TWN3FrxydLwU4NFHDNTsTqM15k7ngXpAnrqJiJViJRTJRHTw2zdFk15JfcBeEiiEu",
  "key18": "2Lg4wiinfSEPfJRAAaLo4mT8WRQuXcF1yYqzxA9XpRdY14gzoP7mkE7eVFtEHnztFDE6NKWJCemGEKnQ1X46xjFa",
  "key19": "357iVC5oAi7Yk4njaYRWE9tkftnXCPkYAT7rZPo9bEjd7qhySTqCT9JwJTP4288Bxkhwm5EQmK6ChyeQEgDkCsLN",
  "key20": "4ZZN1mPp77mtHbQYRvJgjnAEGiPKv5Fh7jhxTAfWhKG8mwuqCsiVUVuujfSEjg3VFnma6yziyboNu6jEzPquJfeZ",
  "key21": "5UUTKxQNFwJhzsEoT7Qj55pXCmNo9LFEr4LHjYpuLkEvCT5b1mrkPXCyWUtLEqHvzssFDhxfvLMNhfNFynDgSGXY",
  "key22": "5AhB3oZHn5sjkLjzHk46Gd8yUDgW4ZRQRj6Fms7rAosifegsHJTniaAUM96LLz85nTLKcCsNfvYnMsmAzeib2SLg",
  "key23": "5qfkz6wv8NJK9AC5B6h8hyWRn76wpqhGYtpfPCGoFZBYFxryVJguA35u8Hj3JXtTCYjZ9era5twqSGzNmDYSAN2V",
  "key24": "3CeKy29xzGoUXwau2PhHaR13GTPyFaGu371TS66tCktBzvXJeenhhc6A6svK6YaVpm5wmWDvJwQi9T7ahjF78Pkj",
  "key25": "3XozheoRwFADQPWQFXKmxEuABFXGAPv3Gkr7EUAtNxPnuvNup2HLFcVmqTUaJy3j8VvHf1zXU8Ea9v5Qw6zt4fur",
  "key26": "2UviYwJ62ki47BgZyDCh9RKckWCKF9hqL149qnzeuY2WQYLxSHMXD6egYhGtUw1gvEwn19JogaEzpo9LU1pYn5Jy",
  "key27": "33mVFHeh9wZnQct6GdD55qwziEQLELL2ec9mt9YmCWxT83PCRZRbq3H5RRyarLcqyfjKzf6fTt55n7jgW7WKbNRy",
  "key28": "3b83aukw9iCERihZ6WxSRTQ1LnCehENDzoRAsMJsYxTQ5Ff1P6ZswWETYtYiwt3AiqmgQuEFAiJDKwLxn4WXLk5x",
  "key29": "325ncUMkKxb1djAJvhfQLKJ1iQ3MNbr29KsL29aC8TxsUhVz5o6WiYPP7N43rJrDb7tZSovcs7GrwsgXDZJd3qd6",
  "key30": "3UG9fFAFAqc6XZJP7S8cbx4wHRoho65KH7D3Pu6VYXMr9nY9tVa1VuLkj1d1JkNJmzPJVwd3CQ7bjoGa7P1nGJTa",
  "key31": "5uV22yrMYCbqx47WFW36iUSLXMVAbF33Vh2H5RPnuTAsnAhZyJFvjCzE3Rq58DQPmgE7KbVAZteuFg3TGB3KA5gE",
  "key32": "V3hsg5Bo7GLxbbA7gzU2nxWBAnjRMyYnFeqwVGvT9oetjEho177BeTPAGKqm4nLCPtTjEiyxSHkQT6L5AKeS8L5",
  "key33": "2YGW1F6N5xFGMSSaLhe43XuNhxwVCiZpzjnJv5A1FadMv8brRfWtfPrAMG2jyDiDpfMWCAQEm3b9MgTkifD7hVpX",
  "key34": "qCKMbts9ebaGFnx7jJ6hwRhHuHDGJSQ646Vtb6DaRWahjH7MsoHgasvg3oNvEBt1eVkGbr25mxWVeXRbXn8Hxyf",
  "key35": "LrC2J88ij2ytQHezWhJrd9WNBHw9RMnFbSg5omdEzCt1UgC8ceG2mNfiqqnjiNyJBpWYdeGUbLbUBGoLhqkXcVc",
  "key36": "4GXpDyU4GAFvLQ5nnAALR3vxBKd3UZhLph3fVaMVkfoiK2RKzzPZSuPJwMdSqwC36mJ3YrgEArjKhcY3xzEBNeYi",
  "key37": "5LRodmGWeT6Xcq287EfJnr3KPJPWbtearcdtjx3DLbuxmQ6EEo3JDyDAwJ1oz4awYo2EGBhTrPW28jD5HeEqyf9Y",
  "key38": "4ee4yRTybmY7C4zXK5KywF3NYP2iEaWa6JwMWsy6xHgYAhZwCZNuJbjn2y85SjGDsWgHDUtniDbELrpg7vApxyd5",
  "key39": "5y8DMWd3aEv5HKznANjE5d1GtRKWxat538M76oztRMZu1F8XbY1SqaT7ad5tNy5Gjo3dAzLS5xQascQQuMBGHoFi",
  "key40": "2MWdgy6tSJP7DC1BRWVsAJESHtcfPMe1VpjHAvsjG4omsdCLujo15s2DpAYbiDiZbfihEQDhyLYpzusGLXUwagmG",
  "key41": "TSx7caKzABowwuBJ3q9DuTAKbYHB19qTkw8KXN9a311u734MsSQYDZft42cuFAqd8CRz8eE74hm6WqSrfMntfX6",
  "key42": "2B6Lkag1ZTaCyBRkrGbzkFNmEUvRUZB3XMh2JdbeEbabYj99PV1fjt1THS8gkGgnoTuySqLr3uvGwJk1jk3Jg5ko",
  "key43": "5bn5wY2kHpxAKEvhrpSkFzDZHt4y4jKUFosLTov68eFjTTn3L4JivVqXwsYCSRRjrZy24ameWrct93TyLkA24HKB",
  "key44": "4bsyu36gxnW2NNnQamWc22QCELJLsoLpKVzCrsSALjvifbQyaNZ41aVdKoNL1QwYkRNVtofU7ZWXPhGMvE4d4p2X",
  "key45": "eE954nZJwkJe1q8vpFvAuJcH2CXx3tN1w5Pf5ikeZpWvNM3Xm7wfhYeKTUPc9k5VeLcBcTsDm9h97WE89NHQ1BY",
  "key46": "iLcNAHsj7t8kSHim962gfLWoSQUJHRx8QGx7GxrCZ3AwDxpitamEMmb5WJag1xmEFHyV3FxNWsxmpgze38asmQR",
  "key47": "3hk9ZKEo7yAMKyUnd5UM3V2x3BKRk61fuNoAigJGbJLTXpnPGhZm8b39NtS6P3vTZ3KaJGQ5q89KmMseFSuPtDR8"
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
