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
    "5VETfhWqUKBhEJa9tFVSNLDxaXjQSda9NLofcyyT3oxSY6vF1e5Kz9J7oiUjRa2CtpiKda43MWFrGYPMZAxWCd6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "usR1BSWYMpyFsiQrtUYcWcTAi9yHtJrhCiSJAiiySAciKRY81WdaYQZoyi1diao1UNr8MQefF7qpjh6SASKuE9y",
  "key1": "s4SrEfzeLthrA9QXu2SkTQx9NsNVykPcf2cuSfp6ywb4PZEyZhZSsKUT2Tzt6Pr8td3Xs5B3K3WJNJYrB7QAw91",
  "key2": "2W4SDKNuRpyBXoyMMGQUTV5pWvGQQcNHaeAjcPYsUuCePVsxRyMwZvPaYRyYr4WnnQvm1HFxdSafgySgvuJGLpA5",
  "key3": "3KmKYcM8VMfRLG1JP1wqumcpTipzr9Cjjsnd7iDaxShu81fh72RXucGwzhCKJJdz6M2QdTLDW6qx5J6si6sBV8k1",
  "key4": "5V2HZmZ5ABXpsNsthWdboiDoyRVrHpanKDkPWrRJ9iZxb4wE8BbzMMfcnwTrT7EC8TbpgUsrSmZjq19ue8r4QmW1",
  "key5": "3mB7c8SVEBMtCJA9xaAvCNKfKhiXrD9tbs31WYpT21Ez7FamrcLeCzvCa2oV8Ha61fdXmbkX9xCTaRBivHThYQtT",
  "key6": "3QHYCS4Te7wMwXiDk8wpzZMfV6chSWPA9BejhB5RWDYigaNENCBRBnZ5qsewu7HpewMS1iaPeM54frr1RWdgAAo4",
  "key7": "5rHVES8JCADhjaPu3KhEidUfLaGaoQaVUTuHumSFGSCWVs9Gon78zSxD55dhGLkJpQzn9R8vwg5Y7K4DW3TmioTE",
  "key8": "5kc2Code5ZbyJ2kFeGyVXRxvSRFmGZqwfrzAwtni131jD4Ci4VpraSkfTAAPEAUwww1jnTppkN6RxToSHTML2Btr",
  "key9": "47gKXQ69vaiixtq5W7bE1goiYQKvKJpqKsoBZNJqABCGELiCKbmmyKZzyJTLuKkjX3iKApQjGcRUD5ccagmo7SkL",
  "key10": "4CM4x4FaPRhyZo8HRo7VnErdyodediHbgeX9VNvdDqvPUdKbBxbb1fNCVkdHy1PWbrYUrQP4Njo3WACsQUeSqdsE",
  "key11": "2PNaZMjx2HjF87Vn1RPLvQkQ93fr6eLaFSEPdX4mZ223GJqNtRYb7LYD718tkMzoF7oUVqTVsbHbvepWMVA5aVr5",
  "key12": "8iWgATyyyBMobPs438V8k8oNveEN21EoXHT4trcdeovhuswxBs35nAGp3jiMcHrX4CRGCdAVzuRSjjD6daPLdWX",
  "key13": "4Jb5tyArTtyFhhaa5LMasUJ9m3jmJL9Dm1u2yKq4quNMk1UBU7KX7tTRMJ6sVtNfkRse5iQJtQ2MLyh32fqNezb8",
  "key14": "5TncdeLam46kvQfH2jPGfCQfq8Q9TpQFEz99doJxfmHzpH4ivhgZjDxAGdXpbWWCBTgUhYtocbKfiuqnvJtv49S2",
  "key15": "23J9rm77Lv6mGasHPxsbi5K4Jw1EUfMhrsyEGQ9eYCJHd34qiehJd2NWJpwSR34hs6YhHfdgNBFFmh62okFKGED4",
  "key16": "4DoXiTBwJh3jgMPG6Z7EMohaMWdiwWqydafBTGzGyWWGt4qQnc9TAtfZ18UAEcw1pHHwCcwo8TtdNtc9eKivaR1b",
  "key17": "5BQakX15uhDxLMLEvzg4U3jyvm1d6z2u96MyGwSaRFY7mhK4ZUbGso58gdVnMKTseZVWLjAKDuv7i4QJRn21pKfi",
  "key18": "4merWqCcDYCyHKxogMNyuAfYjUvVnscZxApCfMdakZWQhyoQjbKT5CBSRfzp5s2VgPBYPy8sJSCwgL37QhuzFVRz",
  "key19": "5uKrPRyvrBGRUENj2iqTinSvbxuLDYHW7itAWjKgxwZxAiL8vuaapvzF4ppXXPW9GP6iTcDLEPQFd6tk63TX5S1T",
  "key20": "43MyTdh1D9ge33XCqFgqGrrDjcwAp33tZE7FB9jgWroDvfSL3wP9hCVDMEyZVMWZctUFffU7n7oV1u4E9J4qdPFH",
  "key21": "dhx3re2pUcATfa9o8NrWRtzQ3uH2aA4F1zMZKUUPYSUg9WxXQ2eL636YgNcdttPVHxPKXkiZFCoovRYzE8Tossc",
  "key22": "2vuLMLPDobJy7az4zvPq1nMANnCWx1FufDCYHabMgXruioYRxV5WbBaJwbzVLB9ZQWhgwJrC9sVDM1bG6EKFLXzx",
  "key23": "3m3xV3V1BrGkarSkWAQXqPWRSkrFW7PiMFkzFqSAy6Nk3pXWMR3CmEtnikRHudaENUpzQUTri7d3wZyNw4KUSLcf",
  "key24": "5LHfGkzpgHQnnnVv4iC36zma8TgfWV26tE7h9oFshGofbEXPXbPcmrhKjbgz9Q5siPrBZ9ECYc2snj4rrAWWFLQ4",
  "key25": "4jke3YoW6jZ8RzMbV8Uv6KCkyxoYbRx6VxagiXbpwt8HbShwzqCmdK1ApiTjiYtMMd7rSkgQJD8oZPSUr2kymvoN",
  "key26": "aLTh7ECzoBVwSMTsHzKt71NV4tt7f5HoUaEPJQ6t9dMV8GVbtAdtiq7WXAhUtNF8vpaFHjCDHBojsY5N2TKBFjS",
  "key27": "45eYRUnv2A3H4xcA4qgWTN9m4ey6i2SQKg6UTtsVMHMbPaRdvdMre5Xe6Z1fk47EJDFctr6YzosvHSpUEfgtCfMn",
  "key28": "JdJRT37PDCMGGiVeA2U9Z3WC7KamGSh5VK3pR6RZ3Ce8ywh1WVyt5t9nwWaEoooRDXcXB1BQ2ahbi9d5m16dyc1",
  "key29": "4vYbbdaTMckoLgLxreJPmLuHzq7xYBc4SGsVVqsYrAGncKqLxh7mhJJqFN7tGv2x2kHGSJxHcTDksJoMi8SwNL4p",
  "key30": "2B5QHDMWvzPz2E9A3bMx2cWFhWkgjYF4x46WH9SErRDspmYWVUeX5PbJD1YrtAa6yHFF11mhC4p5m1P9GzbeMduu",
  "key31": "4opsEbDU6A1xEZEtyXa1wghXfg2TyjogpzX5r64ZG4BXxrkLabM9c8aNCLj3XbCqpbb3XDj6oGdAfdebqBDvuHMm",
  "key32": "5VvByoN9BwBjPbErHYaEKrkCHHBgsPuZoquR52wHQ6XdeNM1kgH2TdXjDLHguNWaNUcpRqN29tYUGWh4wwPM3wu",
  "key33": "rwBR6jzXm7qpMH2XtWaBqFEaad5XMhjU11pUZBSQSucpyVQnU94feTdzfFJXoCpeia1RtUChCvTjTPX8kEYcWNb",
  "key34": "t39J6KJXJbt9iCzPgQjRNSezuvuiU4B9wU7DzEjCM1rSHtHNtoW9P6FNCTUYeN4BY3Sr7pRnQja2xbUQFpkF4UX",
  "key35": "2bLrvMvGE8E8ucYQHUerGjQLGZHMWxoedXFDh2pJGa8Nrh2kHaWVsHz7JzyxpouCKoryfdACg4eXnjU7QgtuKLnR",
  "key36": "3PMU5upBHQqTmrAsRb1xZZSBiEbMeFCZvpqs5C6LCbyFRJ4EodhiGX3QCwjm2wtTkTrgmdijbJ3hVzGpgoxCNf8g"
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
