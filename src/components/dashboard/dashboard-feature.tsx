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
    "ATAd6yB2rjWtp6pskNewUQz46M3jHnDV1JFZTHpm6495ASxqPuyMvZKCy5wDsX68Nu2orPPhPEskJcZvMh49kz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q23bVq9hpdz5f8kyVysLQECqcxtkRQvPLtQttpbopBjtKxb5BAACxkcwNqMhVbkwtRTcS8kr9GxmkDPefhDBeC6",
  "key1": "61pbKEHykhdpy4jAwdAgASrXz7oYtE5Z8XrLAqfK3bDuDQ3MmMkiWC5gqmAxeu7KUzs1P9WbNwHQDc1hAT2egEsU",
  "key2": "5Haub5Jv4Q2ceHsG14DLBDRhkPQqWc54aoPV1XNcZAKwC2Hiv3MMqV2SqAdmjuHkNe2vQe4STVYrKYpAWN8fCtwT",
  "key3": "4yuTbuQi3hMewWJLSpTX8NWUitfVtPhLCyZUx2LoX6sV3tCjeWT7ZetTkYLbRaTooibn42hapMY5sZ2vwaYXBRUo",
  "key4": "4BxAvyfLi64Y2VqGruU3y7gBsctM332KGCmmAkAPn7rgn8788Wzm5gBvCmAVzz9p3fKqSweyA3cEo7R9yYZPGtgC",
  "key5": "E4UWR7NWaEBKw9SYyCzqZRcW9cmLg5du5EQrvwmvtZ5eVBGcZBRP5YmfK3hyVyKUHPVwTbU6ZCJYD1XRejXfDHe",
  "key6": "2Regxt92QjSzRdcNpMs2qVVbKs38Zbh9xPQHmUBEF5gvJNRHRU8VPCJx9h3iCh5iMyHXuhKR1aZg3Ww3u3bqunvA",
  "key7": "5aQ4GBkM2ktjytyHX6LLHwLK6UoZqfrvjC1xKVT4xJovG974yJMsBp8tKNQSyPyMdHg5xUqvKTC3Ky7LoeeSrCLV",
  "key8": "JNsCqWyRRne4Awx3m5gZxcWRzs1Th4mDesLEf3Fojj3zMH2EtARqgNenH1d6qjBu69RVW3Bzhcn1f5iSTZWRUox",
  "key9": "47WQS6btawLmgmMHbesVRoidNvBnCsuaJjzsoFhGs3nLr2Jp27nr7H58sdJiDhATgKvgRvXP4w1ERzYKhE9DL7x5",
  "key10": "4Zsk6jcP48wxfbjaj6sH7R4mBGwpszfj6NZYcN9SP7VargHZHLHEMsQKMfTbY6NWFpyDHETJUuuZbozj5j1MMAXZ",
  "key11": "62f2fARQGAS2CXhmrKiW1yWDzacsuAoZjrivyHEudmjndgqVotu31C3s4YMGg6869YjKHSigcwaG7xTomGmLkRhA",
  "key12": "3fPa7x7MUNcikMY2sJ1yZPtSuQfrTHsNCooZuPz3Pu6L8pi4w1cX7cSeD8ZbLxDyvnnVGPARHDqwGjmLfFstY7fS",
  "key13": "2iZtpDdrJ4CFb6WCzsWHqC2jczPNhX9mDaGLJf2prRXZJh3VciYCQcDfWmBbW4fNvN2iHAoPR2j9ErH7LQV2t5pg",
  "key14": "3VsgpcMWCLjBMPk2WKJPjUgDxNYz2E3PTR8ymcW31uFM6HDyH2Vevjq4ZhSm6RmcpArFbQAs46fsZjtDGTMSBDSj",
  "key15": "2WcpZM4Xs9vHbJiuRPzvQMMHapHdCa4C1amyfr4EoNBHuzMcAyDFPhPFFdCHfVcVdtZC5fmfHjxXjJUwNsUPotbd",
  "key16": "2a7yaqoNujhscmTmKXfbT8cMBec8YiAWpvuRAtN9K4QMFXYnYPMjg2SQpQZGcHSTBHhEYDbww7Wvo9nWZhnARvdZ",
  "key17": "25JWjVrhfG1o7Kb64dd7FPj7NM7sppHFe1F2zeDkZa3WgBmkGwusRsJwCVzGWZVVyJzc4vzChN5EgLfCwBXaznZ3",
  "key18": "127WNsQncSNRbk8qJsTJ87Uri9zQ2NeEZ8BrS2t4hB8GzDv6iTEVB4rDvkKStmD6MVKw4GgLGJjGsExXMxfVg9JM",
  "key19": "58fzTCWHJn34TdrDADLoGQ1vUj8Ti8967bE48p4u9zYR1pSJVqJ1uXP1zBEi8V2dL1LPP9aZztNP9pP49XeHCWzn",
  "key20": "3ZGUQHjtapgMwDm5NhLBwXfhxirGtDXfsv2BbhQQyfYgdZ82F7H8Z6M8Fdz95TnkYE1VcDBCjr8FNyHDETfqmYe1",
  "key21": "4SzCD1R2TAyNhaPf5LNPNkxTioDwXMuZUzq1VyPCjfb2H4bMDQPXHKCV36Qv1W8tzE3xtdHoVM8t2nbK7sJBDFkG",
  "key22": "4VSQmLFubHmnG8BELuxcALtJRrMWqKavNJUwHUykZKrvEPJ8p2vmeeYyv8gwccJwigcSGUnuae8xTGPmdxNSqXbi",
  "key23": "3XzHASR1uryfLdoESuo54VAbg4uUMnnx29CFeZNr9WHWnGQrx8ib57NCyYLVQ3FzsHMDXde9LMnKmCDoSnr7vcTp",
  "key24": "2B9g2guv2yap5ir5AKuzB1kdqW1pMnNTebmrwXoCTtwqSa2WxipqBkEVxyEPYTq27HxQXmF5nAkHDEAhXgmT6sua",
  "key25": "5G6QqbUzBq1KSq8wL26vqwe1ykHVEc4pgVeRkGXVxRFLkPQpZkxCUFx6ize4fNrTzrWhryitXMmDN3CEs7Qore99",
  "key26": "3rUi72kxjjJKFJbr3ctE8QNnfnboKuHyHMFMM1BgPjkYUHBvWZSURS49zHaDmqsJ844dHRo5z76a3SCuc73hNwCv",
  "key27": "5AcGjMj6UN6fn2dJPC9mbKq2EtDs38T2UEKRSiGLJtpxNvtULABY7LHcqNU2YyNGZDbsEcp4nQU7U45r5W7CfiBe",
  "key28": "34k4jhLyyunUVGcueYhrpnQWTjs6S23aSmy6pDvJcXZYEmsegsxWqLct3HxiEX5DndHvqsbGygGhcpHcSj3iNqzd",
  "key29": "xgngzVv86vYFNhHiNxWxvq6fnB2Y6qLErBhzqKGKFRxzTK8AUuRm9SFeebnWWXSprG4mcVNKRnmDhUPjxayJevZ",
  "key30": "5u9o9654oayTmzY7ajZJgaBFrtVtYsS1CYkDbneiQg6g5333ZCuV4cPtwxhSsGyaR3zqGjGpWAtN9UMU7q6Dj5LB",
  "key31": "67HrMzR3u5KLFgYoMPwkuJsdrvrrrUaPSL2Yo3LAM3kQ3LundTgeLRftT9wDmELcn8LwiYL8MKgaxhUYSR3yBRRz",
  "key32": "3butZamQ3AC4wa9PSuVjBUpRb37ZbXByYc4qF8g3CgR9rXbx3b2hv5TXbx1NF4FDpkpy1JncDToULNyy3MgVpPVR",
  "key33": "43nxBEJLLrvNyR5nzL5fqSDxRZVhibahgoMQAwVuFtQqCmxsfoZMMMefEJdd3oZfapRqi7bCM4VXM46dvZHTqtzf",
  "key34": "4zU9Y8VTym7xWK3K55B3LmmH82nfNShUjosmNk9Cv3VyJqVaBZ8R7WVyt2Lx554eSBknfpfNVcgBULN1F8nFWShj",
  "key35": "5tZJZzkjUuBSX6gSPTEPwoLsTh3aNQREfVwndPUzoW8FyWVvjW7ABc5tyikDwSx8MvnQpQVJ3PV14vRLoaxQJYz8",
  "key36": "4K6BTRERTJboBSsCoggHspUWDjXm2RiBSuAXRKz8HRi7WECrunGHt42a1FwnRJnWm2V2CfuQeMmkpSE7Et9uxQtz",
  "key37": "6AJwFo4uCJw3U4zQr8PBk383XWV4mZYnFfrATvHRYRosUnau3M2aRSHBLo7dRmkadSwWGfShBN9PLQ56syAZrqP",
  "key38": "Q7UtB5pvvvq8KmqTxRAuoSy6WCJY6JG2QGsfB5CgiAkvNKwcuvfnEJdZTNGZwVCtdzXFtMsNgSuZH7Q7fUwgjw1",
  "key39": "gJm7TK4F2mxDu62am6xJRtKZStCnYXqffuFjjYHsNugPQv5NEFjX4vtZFerfJCpzwd2ZtpGhJUwvWA4AK1acs7K",
  "key40": "3LQZEyvmDEL6qv6Bd8YLdt92SCZcd8i6PcD8FzBefgotZDN1dHxYgKaogtLAbgkw5Db7GHLLCkiCgAtxn8UCtpDS",
  "key41": "59dxh4iDwHBYqjDFbQ8v8R2qcgkDgBTMLETpEjvCZ4bjBx2qPd4GVsghK5ni3DUTQ8k1yVvCmmwXXoWE9tbcSLpV",
  "key42": "ryQHdsnCDsPALxEeJLnuz5PpScSmy9NcoWezZbhwpvYcRi9GjgUuA8zPXRZWKUwdn6zBvPGveztudgkakxMPoZi",
  "key43": "5wQfHzji19QQUTfLZXpBnbive8d9ziYWz9wJDKBnriZcGUSk1j3FUZi8r7WM1NPwvPBbtGMK5dJsomUbM8kSWSpX"
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
