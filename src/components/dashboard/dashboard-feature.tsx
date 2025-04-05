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
    "4C6XWoceN3jMQ94iSdMMDJmJ7sWcFCLtcmdzbeLvYupqfhpDEttq8Z4uDgoyy5esbjEmsHvbEaCo8AhC6BUhBQgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENJ7WUYVRMm391yst1pBHVYejJRZMHrefuEoMsiTu4J3XEH9Jnef4vKjeHutjRMzFG7sJUzHP6QZXvejFBeQLdh",
  "key1": "3DV5WEmnBFfe5nqkXEmzZD2G4FGXgWJF8GGn24ZuaXDB2Zj9yGWcAvDUUzYZofyQGKz1aDqe9GA9qFWDmTbAkvM4",
  "key2": "4sqdF5FkQew66gxfbZfYiwgVsYEEmaR7upKoSG54S8Zq7PRiDMVpHMWD7eDpUYVxhs6RM5kuK3sU97STynNv7Lgd",
  "key3": "2GKJy5toYu3C8QJLHwFU8AbWbuGG2CXWJBzU27PTknuQfKv42mg2eJ2iya7NGfN6m5ixEpS9EbM8sfE7EsfehBPE",
  "key4": "KiJb4ojiiMP5fa6GcSHSZRorax65CyD49ai6kymjnPhBnpPRnwrqrRtQ7aPtDc1MeQXcoyZXbXv8tomicdBTH8o",
  "key5": "33f5Sve1No7STsY9uzHS5GtUpzJ61qNgPWY5uxWrxMUBGFrRuwRxAsQiFvw94CBCHQkJ98tULtYodRCgsa641BXq",
  "key6": "Rbv2soDdrp2BfRG4fnUNWhVytRTQzCLtpdCWR2qUXRN4dJ8qrezhBHsdSmLJ4JB6Ghjt1e2rRfpjibnVG4AEEaM",
  "key7": "5NQK5vtUvDAtL9dDuwr8TRZ8HL8ZLeD7rafP7jpxWpSNPfBmiTidWxqKXBNyiHzFLyra55B3x9QRzsDEV4Poi7uv",
  "key8": "2kUAzaCFCWoULxgVCvoFYaFWzUGkPKhRG2V18LnLUeGEjefg6f6QsndZ7gZTwYcGVc75ZYmMSJeFUCAK47d2UxY8",
  "key9": "2YHQR6HtmQEHdJsNXatP5kHVjFccb6zgeu2mHsZyLFJWmKGV8UrdgH7B55ronC8XpRHgs1GU6omWXP4rLhmoqpEf",
  "key10": "4j9QdGZS5uQYoSsjyZH482UeALh18398DMYnVCsuR44FHuLmGoRwB2XNunV64Xsd43CoeEAJuKdKQsF1usY8Nxf3",
  "key11": "3mmtDCgsxNCqBbPPwW3JGhXFCAjNtZzTh3c8TpyrR2jZ89oAqQDVxmjYjeuN6hr2nUk7hbVqHgFCfe2QnQJTsCHT",
  "key12": "5yZV7p7x4UDL4jYsRJ7RgMWQEo5GPL5RQ65o1xrfbw2kgU9hx6UQE4BtjYwmqc2ZcRgn1QcaaMUigabybRfDEMPH",
  "key13": "4FKw2caSexCMYzYe36bjyyS1arvhd4t4oDiWinBHTdTPsbufKfdjBrUEgniGTDyMdcXTsxGoqyFohGgBqocvoSBu",
  "key14": "5Bujg6hL5C5cQ617e6hpUpgtbgPeUoNYVhpMZ91vzTTDwQuoPNj5segXP33eALajwt6bXEp8SxBdYcyuSLTVuXPr",
  "key15": "5TS7rmqi5bNc4AZbxJQnmHRZk5Q3VEUYbja5bJfbXqsbHfBp9KsLhyVB4Pu5Rk6qLjynmDvrpEhu3gCsgTs8z1eL",
  "key16": "48Ni7efNm71z2sEd3z1vyi4vzLw1vRQVtPEw8Zi2hMQBbWxQ9S1paGLCwbXDiFywsNeJ5nkpUdW1RHnSm1te8A9V",
  "key17": "2hmP2ZgwmFoTsfucrNZkgcMHS83RFcgEAYfEbNTf9eP8W3PrhPmqH7HwzjqZLt6HHUj8jxza2ThhYJMXaqhsbjii",
  "key18": "3gs6T7izJ5dyM4ep9EmmF143ULPkqKE8jK5rFRmFjoiCBKe8AkCKuvgsjJwoyV3aC2iRNM6Z3dKJNjtfzTaeyd63",
  "key19": "2MpoZP24kxyMWgQSYkUuosgxyV1NHbGKokxtsjcGPFHdcZgfgkT44qcyFmYvjg4kmvrLpcEEW3okDEsoSawuawm1",
  "key20": "2e36HURvgf2NuwcMdkUGdW4ZzhbpiMH4Bqhf2Yjck4xgxGc4PPMsAXygGPrG6FZ7fWx7wcpZMh3jGvTWstmszyUf",
  "key21": "42onEydGuDMZb5SA93m6pMttRMUZprLb31cLiBTnRdCkzuivu8pAfqd6HuwFUXrj8HsY63EQdyciqMoFQfWUa4PH",
  "key22": "Qu1WrvBCXJvUPED47XW6BkML9tvUjif6ezyt6QebGHYw6CV9zq6jKijXBcDBMLMEYgbva58bBCHfWf3TQKJ1vEf",
  "key23": "35vkof7VYE9ZnGUPbciNNsm6D7eBcGkGiwr7DVzuNB17Q5A4Drx9n7EV26aLBkifJScvUUUfvK5ujVB9kL5sgqo6",
  "key24": "51iVdPXXmnWdbRPNGvbviBpdDwjSg19HXEQvMKsCrxuoowZRrj97nuvQs8LzXRzwtm592sLiTkec9MdCDmnG5L1P",
  "key25": "2tVFeKodfSxnCj2Qrk7QUCYZRkXt5bFBC8ucHN2vfqFi8C7qxxinr764E5LqiqTkaWVgk4hRDAUFbVghBkhiCUJf",
  "key26": "2c2ju3D5NtKokaMsuA7cvbVseUrS7cLbzmjS6bc4gBgoVBZYKPFXuaDA7fn6j2LPGVV4A6xN2nPWQy5ksbhS3nWU",
  "key27": "5dGcZhhMW6eSaATA1f3FgqeCqS3bGMJA3NTejGYKygZmkzuQ2b1JBLnkQm2osiNj2mt242SLxj9PUmZ7KmvyBShG",
  "key28": "448qTKJvnHXkHJNKuqr4xjzQ5GKQ8VzaupMt3BS9qnF4uT72TF6vK7CoxhZvB5u8NSu4vX1pyGeREW6WUnsenoyN",
  "key29": "4fCJAdpq4dr5n1y7e6Bhm6s52qADTEgmW287NtMiLcuhaPBSE3qeJmKqfZufcbTCdxYczMfXdM3jYLmeS9K3FycH",
  "key30": "4kPL67rxvqKySGJ54QB4MvEFhVniHkXg6nMmYzpXtQhn132L2zcUsgAxu2MmqAC4TCqvzw8AzvU7UseBk7vvRyuS",
  "key31": "T8SqwP11u9WZ1fHx6hxmQKK9J3Ap8snNUTZvyXwkEZm1pKgFEwj3PyKJcw573uAtNoRvxCEp7mTJzVoefExEhPn",
  "key32": "3xFhXGbkHkCJwRjJQD6ovkgWzVSDgceXokGWio9d8bT4DgmM3WSEWxgsy7vXRjP2VYYasj2oeyaGLb367e5J4Gmv",
  "key33": "3Kew3MYPLZzGvPiXbZE3GSUxVh6KyukjKPYEHpChNFgPMDwhNA462F1h6aS1UHo1owmeayswTpPci9hSqK4is1Dp",
  "key34": "edCrf2FtTxiTgiZZ51EugDN9ueYujJXkMT29i5kgWrB75BcTqZXkaiT6vMfY8MxSzG8t7BTLUuX2x2JWUHLzLGX",
  "key35": "3VmzZbkRy1HFHctT3eD4DURBqVTUQN9cj3Y8mYX48r6G7CyoGii6Wz1FCqYjDKcCxtz9XTq8rKPsTbwoB4VquswN",
  "key36": "59ZzdSfhx6xZNSXJLuxPwprJNK9DDadudvEUtnAxom5hRDofM2nDXuKr488UnKa8SxQYBdLtPt4X2P91YrnT3G17",
  "key37": "Wa9XEtUGQF5gMPRckRaY7fsKuyfkJZ7UKpuC6YkT5xTiMsM2vKoJCsWq1sV3VHMYbbiReEFAAEko9ZZ9spPVSUf",
  "key38": "3A7frVtyRPcTNXRj9JDDx7UvCy9ffGpfV3PEqeeoD8j6usaRN2a1acXoT54mvrHShzYwrWhuaR4fbXo3hmvijwMa",
  "key39": "4MMmFvyn3ynCqK5UF5i8NXhK4UWx5ZUY7CjW5RF9YR62n2Ch678s4weU3gTXnG1FyTAZ6XHNPZSqY88asbXsmv1b",
  "key40": "5QXq6aJoTBSBBopKRELfzZEn4Vi18m8DaYskzJuoDaExAqcduKkySD1jdUfEmXEaVWnArmmbw8LgHHNkCiLXsLbp",
  "key41": "4AT3ogTjGv6VKwnKMwsmLeqkfMG3FajFrxZKz2Eo7hPo79WvLHqLJ3dovqW8LqYvsNVfRvLKxaW6eLLxKt2SJjvH",
  "key42": "4VEHNVK3jwmUf94VA6LksugZAqS7F7kej6afanzoZiydJtEnnSAaWMQKzi1X6cL7QE5Jf77murxPHx7qManQ8DLV",
  "key43": "3Z5AkfXHFXKMddYHtpCSSGn1McvUiTzZ6oWxhtt4rfW8HpZjLe3bhWLs64cHYuPzZniFdpXEd9ogjTZwRyDhtQDX"
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
