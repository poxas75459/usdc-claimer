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
    "1cZjkMLYEaYF1hU6tJ1mT3TZ1SiLibXSCS9WKreAp7G6g15aTw1bF7ZsFRB8zrzMNWu7pr41Z2BzRoefRLdKtS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yoH1WuVHdSr58NQxaQUDEjpi13e79WhKHrzNJFax93EgYR1h94bvbV4yVWhzZpQbmBeH6NUcuf1D6TKrJGQ7Bbq",
  "key1": "2zLZQ5R37nA75cnF8kx55mNyfaWEgn52KhZswUQrvj3K3FwNAu9vnRr4Qb3KrWVeoZEcR2ADCdWqs8oFZtQLxpP8",
  "key2": "3yDiK2VDyj38Hzs3AhaytYYv2N4dFtMAghGqMxHQKjMt2RVtTNCEJfVmSkxnNYzGHe8jczzDAx46UUSDW8a3Rz6h",
  "key3": "cqXHcZAy1c9NJSstghirbp9coUAu2kzdrS2sRuyNJfhduvfaSvcwL5mwgz88v49UL5nnKPQamnTce8KUo5Vmfqc",
  "key4": "3dMyK6BXquNWuTVvsnMianZ2ELJkGwcUaYjvvFYshxHwLfR3Pc5xr8Dmb9KspWjmicFr2JveXbUcPyNRuDUd8uyd",
  "key5": "5nadrTKa9b9oHgRS6w3SKvvchusHCVP6c5wx3EoHfifPnsaqJqqnB875sqB8gArXQDFctfGbkYLJJgHMWHdRfbHV",
  "key6": "5ZxHtB4UiMRRd6Qs6tLXe7bpV6HuFgdJzQipp2FBhYPCfS9eRwWudHeqLBPrceMAnkSu68zEmkSdrs8YH9PLQjSK",
  "key7": "5qVkCtZUYqfEgU7jPtCRyffV5FgDnBBGKUFPepDVpuPYdAxoK9sWr5rUF7SuZoi9TtBDucz3SyTmFG5BMRwKSQLc",
  "key8": "23oT1zqNpZyKFDNhhSX4xgoz7AkYjuYkMnAaxwikYU6m7Hgo578cuy9e4ayrSPREJdNeBWonn6tDYxCxDesUiKjM",
  "key9": "33N9ideZdBn3VD79LL8Pguw95ftYo6EZgMxJ4Xiktq5AyWQ97yUaYH2uqCXRBYTQnBpDXFHqVNRfeZAGNGuKQuHU",
  "key10": "3Dy84DsV6yFT1pLUhuwJEuHCZgwv3jvBXG7LwNtU4trx4nTGEqHnDrxNqYjeFZRnnygYvU1sv4J8STGHGKDtRpbD",
  "key11": "66ZSViKAnRj24MvhjB2z3aWjAxP9vnRLc6Lffb8XRs67Tggcb8Br5TNRGwLxxBP56p3TMX8KaLkCtRbLuBfQUpbd",
  "key12": "BfuUrNVehTFc1wL4FQ77Nftt2q7wmx6FvPNpb7Vf7ZEW3sC97dZU8pqvyy89Kkc8Wrdq43MVa1SSe2cT7Ee9WHg",
  "key13": "57d7ajX6WmAivpS5MMjRZ9a1J8U82Y1uzPyz86rV3aKLHoT9hJfNDFw5bATMBafg9mRE4b6E59hQADYxyA6iaHF4",
  "key14": "61RoZzvUifQjzptNMybiUx4hra9TNTxPRp71AxKoRHzWYYGetb7wtYSHif4vmgHRv2cF6UCNX8C9ipYZhBSEn5o1",
  "key15": "31hKkEL1nkjmva3ncSVMo7cH6vckMrFhAUFeGXnnkpYcTZJqxkuhskp4rwzXp1JJp779tMEYEvUSsYmv1YXwWsrP",
  "key16": "2mo6fBQfmwFmCWyLYMYM4mTQcAHvzq6bTwNoGytKjLGzWKwDQ9c61K4jeDEfv5FjoWV1Mw21Bj9bjCybDkMq6UQP",
  "key17": "58iBCFnjCdmnKM2FDYkJ8eoiKn9FEwZtMxoCCznPJeRCdcVwtd4NMXVbmAPMTnRndVaFDZGLf3DTD4dQyJgGBKWi",
  "key18": "2KrCYbXHnAkq6URvTdyRN3TVAZXMtAijydjVm8QSsMuBoSTLqebcnVM3RHe4bUEo2JvVYMc6zpMWULqBdF34NQLx",
  "key19": "2EZUWdQVmghq6iq6KUdwKRGEmpfWFRTmLRZL5sDVL5vXki7iyEgQeJkvnycXkAuQ1mzGLHC4tQheFEBVrsYyV3dc",
  "key20": "MEZoKznzYnkxqTq64i9QfMQfHo2u174ZnqCUqwxE6bFh1LDdtrH28MiYFo4yqvgEgYLx2qnqLSj6kmpLqpgfoJW",
  "key21": "3rkWECPqnBYoX2ZkPrTePuo2xHKY7UVPzHB2NmtWyrx7wHPSrH6oc3xgH7wnSkq2iAH8453P9vsNTR4nv1wbbqn8",
  "key22": "4YPT6tuXZ4MgVhHyVuiyAWUHW8uqFv9JVJiffCLqHfn3ppjnmNa2cHA2smDhQWdjzHhvyLdCKhQWB7NL2P8RrQg1",
  "key23": "5Hmn1R7PeZ51sF2xx5RpJyup9tCoYPNrN7X8zxBjsc9MRnMt5dbQomtKZZBUhyYnEU1ntXdmxuzGpg23DKjmb3cZ",
  "key24": "4Bod2MmNDGqgoh8SrDG38ZpKj9wB9AaW5AsSxEh7BuExPgF5GcNWUkzg4Z1hJrSX58jh6kgn6ZWwtj92T2vMy8Go",
  "key25": "9Wkb9WDUbLXNBuuSvSFvSyLw1g7XYjWxJLJk5TzPr8J4E63ZFijoHFG23XqyBFXdk29N6ivTSTiL6WwXcYD1cBn",
  "key26": "4aPA854GNyZegJKRDjBX2nrTJHy8BLs3wZ7xEX4DFGR3A8DYc9uYAEv6Y33NDf6UYktebfHiqWdA24H8TxEemBKM",
  "key27": "5zi8Zgy8285PViHHDa7vv914Bstacwr3w9jnqNmr3GRphpuNdqZGT4dhELanpfiHCSGm895f7YuuWNUKompQyqVk",
  "key28": "5qxkkDdqSssdUXq4oKbPJ1r335myLJDBh2yLd68BfVWs5PPDdch8zJg3Lbs4RptVKMcBNgaP1UHcuQEmPjKxLR2C",
  "key29": "2DwsGyFa1jZvyD2cSdqXBA3M9SGsSs5gETF3wxko44CEDT9JMQXDoEGYihEZptrMap8xQ6JzPXnPUJxzxcdknWmr",
  "key30": "2oKsGiz1UeWccsUPwe9ockMCMNkSPrR7BGQhoy2qyGs5ap8JY4xZB7QKZPZWfE3bLMASQuhau4CtmeqjJMrfJz2u",
  "key31": "uyJTZfTMQm8fhZWRi29Sm8tUqqwMihiwzwtovCXRPdrb8YKP95X4y7rqkDyMg7nqPacqw3j5nepKY86E7WPezys",
  "key32": "3Jbim7x2inC2hJYdP5A5e76BtSroqVGQhDfm5dCD1DigpxYwJacqS7DvX4BWa9PuU2R3p9roToZEjsNNUCkjt5Le",
  "key33": "2P7H7Daa2SKBt6i4tLphnJE3rXtJ2AbcCN3EtVZ5SnjZF2dFUivPec2xkzZExa2d77k5zqv2nECyjxZdKv1m6iqv",
  "key34": "24BQ2rFgVgHunzP4qJCHLL1WQwbA37fr1QP8JhGvrSRNyn7Vi4BRsgrddwtRDWFy4tmBb86q6V5tyCgx3bxXqfHD",
  "key35": "4doeaJiHYMiBRYvy6U5zkhMhhvrPq52eaHG21cQFPwghHoenytkujrJcQj49UfkryvHMdeHwj9YUhthYEjemKvVJ",
  "key36": "5wXQxe9DyxAEk61XsnRs9L6g6v27fACdjxRDjqh644QvwBpEKpfT1ajS4azW5wb7yzLJs92vwEwYYXZxhP1K4G5M",
  "key37": "2TvSyTQwRAVy9jffaiySQWvB62cxgVx85cfr6dzRgZhymh9kHFtLi9a35HFLJgYUaMJQYnpqnvCqKH86G84pazUF",
  "key38": "3YY1BjEbzQKDrXwggALYVrTY7YQGxRB7ttzzoUj5ZHvpXjfRu8z1SXV4rUPaGL5vbAJvWSrekVDqKzwNGwHThqWb",
  "key39": "2YAjcXvrQM5MobYqRUtBTJK8nYAyQyfQiGu3efr4ywXa46nGdt5ueiidLbA6Rgw439dmZ927gFLYUKwqjgt6RSPg",
  "key40": "56AjRA4KeWtkQERi71dbTBVyQoufkQ14VTWxYtkS6XG3jveNyMeNktwDtz5gcMRdhTqMYMHcjFtrQRNveCPJBZXe",
  "key41": "2nsdwPQUKDGf7uf8jxE2YrtdEK3dQJ2RQP46yhViegvJLDZyGUhmY663RN6w1fzjtVDvNjbYVc7Vs5Zk2Pd8WFic",
  "key42": "4AFAfwZAfzq1yABypxG9HzjQZBs4Pd6gkrMQtMvDMj6BAbpxCVtH2AAqTL1YhZVNrJ3KC6uJWbL3Gm6SoTma3jij",
  "key43": "5u5mdUkeTdCkRaLMXTDq3WvnBn1RBAv3ixbBgMJjcPifQHEtQCNhnowNGaSLUkDhNrwGZmt8VtJpTsGcdkHUFR7c",
  "key44": "o4QjBZ3YfGCjdfmRYs6aSLUWhCDEmkZHgrMZjS6YFXhXNUxWYMAb3Gfv7LAAreRkMLgD3DrqER259yg12s9WPhE",
  "key45": "5xpNZixTFAL7tU1xMikdUGi8hAQegaybsFgXQDXiPLtZQDvVZZSuxaUZiXXUtWeQsLcXBjcCyDFFnYYUvLjmAGHQ",
  "key46": "2qhdZ6Y7WBz7JXCj2Yzg29xjmtBiVnApkwkZ9bBVXPCMTE568oMBqLuPEUR9uUbdQWY4CiAuns8dN3JGD5a8v9yS",
  "key47": "fThuqvfd9h9dA7cw8KV65pWq5JMXsctLR1X76GUKqnVqdAyyMU5RE2jugfu3ekyKbUpCaURvexnEquzVBrEZMyu",
  "key48": "Ez8myTR75XT54gRXCWGkwgbCicbABq1qh7dX1xtHEH2zvGTJTfE8wHiJrp8kps7Y2rJnobEt8u9Ak7VfQdajt3Z",
  "key49": "5NJyiYD4XEi3fN23D1ytTgaH4AW1bE29pSamRon6vfCAymbirw1L22ZTboHynkDWni9sLENWS2qtCf8Ppfn4rsKP"
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
