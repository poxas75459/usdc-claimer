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
    "3QFTPUKXbAtX8xLFnRxmV2D1e13D4tckXB914VDmNYGqG1AtXpMYw7DCdTLs1nUX1xzswhXBqkxbu7ZVJzNhSHaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45zUL1m5xUQ89bdc4d6LUmpqT7GMkekAp8CGLzZRML4ibgH6rwhe8WENYXcxJdw3UACqV1TTjbryvoQ1rcdidPnA",
  "key1": "31knfXWYdfFE5NtUY8H5217oRVa95ivsjcB9k3f4myKse7uRVHwGvGgBtHbcgYC2K1bvS351G9Qyah2dDBjfTk91",
  "key2": "29uyBMfAjobZJqrXv9Z8pFrMwpAvshZWoqVHLcfBru4muZoq1BUGb2VB2x1EWWCneXbJM7ZnpeYvxAGveoREQHo1",
  "key3": "2Hrbw1AztWpsgUmJaf7acVRuWkFBapn42B2XPVNjcaxgeHwKjCwKAAkBjnDjrsKQqMdqE1GEiDgXo58gCUAVXNL5",
  "key4": "3v355RAYyhshvscneWve3SdMt4vWpLjtUhZ8pPt27DtULwx9Tz9CaLKbZg74AKbhpE3oPJndjLGcYJ5RrgwL3Amd",
  "key5": "2eqKnb6qAaQWJGPX9WRg9nTfVz964aT4TZtQrMasNbckaa4zKT9bu1WRn59HWztNZmqNdVvMrwJJrvjR9Vz6uyRH",
  "key6": "2UzsYbAsFMS75eKrJzTjd2PMKgzRLVazXDuuLiWwwCbt7kqpbWCx4n8vr6F7tsRmuYqXtsytr6Swyxv85FKdirUe",
  "key7": "4JBgEAT6NKnsiaWxzs7fXHjPcqcQX5w8iawm3oLMvTfxmVNqBAskYExFZacZibFpvW5bVqE4Umg33pCXBVGPY3cC",
  "key8": "4HkLush9oCn5JAP4RPixa6gE2GEfPoWwFbqmcCFgToS7rQbM2mb4VFrbLztMvuZvvGpfrwCNF8qtFgmf57hyAxdL",
  "key9": "4Nt47HhG6nBE4NWqn5VPe7XrFV4nvjT58YJ1kQ7HMtASBVWwM3TQdhvM83rAXtgjnmzERq4oJ2iYL8xaPVL72thy",
  "key10": "2yFcnSyxjq3GJnb9drcSQqPtvNynuGMFhAcdbTEqR5AtNwE9CmMVbcNJXEaZ1dxTCw9JfkREq9P45mkXuWBAbd1T",
  "key11": "65nqAizFUciDqhokJZY84ESr7FqV2bguX6nrgv4YP6VbB67JMYQKxgGvKUiSdwekXxuLwJG8ZLfXKMiQ4AuWtr2t",
  "key12": "4vFHhh1Mib7Hq3FW8nAdvkxSXsDczkc53eEF7f3tGXhcRRWmsS9D37EMkaK6nM2WZ94BcMM7NKiR4cPDJ5D45kqr",
  "key13": "4SjsVRTR4RaQUVvX2TCzKZy3LZkH3hAR6CChpXKwq4mXh6MxCWRj9dnqAQ4Xb2r2yxjywhNMrPznbosfiLpPT5sG",
  "key14": "5Py3uiBq22rPa65g2tesaAZrpJAwSMkTwRn51nYTdfXcaNck199xQzueEpRJqfhr2o7j39K4KZDCJ2wjbquBsQHs",
  "key15": "4S877usUpRAKV8gWmxX1Zq3cuKXhp4GyHxA5jFR4YjiaLV64vn5s5Qmfuf2H17o2RioGM3DFTGQyRY72pg3rsQZM",
  "key16": "5VA5cj3QLha6V9mfNWFR34YCC4Mi4DGmqgCpaZxJzNbytsyr3ffLkV3BMQGkqCj8VGQKp8HeSBrkjqBcpjYX5w1W",
  "key17": "4dbZEULkSZi7xWeh4ZwAwyPf6HLomUSisxNgsRKhEEUfgLp6Ch6xnnzmWdL1FnUJqtvcH4WzVHTgMRsjD41VdjU2",
  "key18": "3m1PHzms9eX8WZTzqcfwVgqjFMVdf7UPnoKRr7PUexiv47jG28YZ2fyjBrvuKM99SLty2kXCv9GNCk8AKtR9RxW8",
  "key19": "5mAD3fQvzMNHrkpQQU23cGBB1GNQL1cacZHun8gD3SH2qqDeN9tLdmYK7tZejiZ2EziJSGSDCRMWtyuDzmYQp8FT",
  "key20": "3ZCi95dL2En1s2eX2uNNL1pXL7KwpDGCw3HaRt22HMgu8Gm3KNb12wJtndzWZk2ST572UQkvanMA6iU5VJEp6La3",
  "key21": "63t1M4TxmD7TNaXLnv19n8kLzMDLQBXQnYNJhhE1tRthCuvHP9RLjjvriQxmfZhNkCNjmJ5QWDL9wv8F6jGJdVZ7",
  "key22": "43pe8wyMBekFvH2UAmqaZheGT6TK7n9Tz1RhTr8MLwFGKcXwkg8zTQe9VisQAnU4sghdtujVpzU321vMe1nxuX7W",
  "key23": "3m5jAy8CpaSteFrDea3yihScTw7LkSmoP7XeArWF7pp3eQU85d97QQ7ee7nxcaM8oRTzRz59LNLEJHd3vfaa4ds",
  "key24": "25FXw3831vbxKHcgbNGkTKeXvYBdm8ZMXeRyF8HYBDod232yjdHVGTVgZm324Qq8iFfpNFFkPWHNv47xBoMtSzDJ",
  "key25": "3vE29nRPBpx6MuKibJN9WUMpRJXhhUdmKsoeUTX44bZvEnLcHp3Jfg5SqaCcTdBhozgdMtPjn87s5jziactX3i1E",
  "key26": "29SS4ekbzELUEPcu8q3T13Be3U8ubZTzXcmV1KN7X8umXvytb7niCsZySAyqpimywp4tHmT67kE7ziFiJMTaDBdh",
  "key27": "2Qomic8frF2rNMLmBQGAWQsxFNwqtXPz51mkwRmt5n1m475r3aDfPBVQpfwX2Pfx82G2gsHTbm4gtzMR5CEPLeKY",
  "key28": "32c8KpCPZfXrYXemWbPBQxS8aSdAnzP3dz1LqGVLEfebEv4q2RkAcNr3WxGXkar7dcgNsGaSiTXUu8uFpxVZqpfz",
  "key29": "67FjHriudt9t1JgAP3zfaZmSioJP1ogcpJkrDG9WwSRJYE2MZjR7MMwqr44GBrWKqcMZufv6gz4SwnspAvVd9irN",
  "key30": "4NPHSN2XUT1mJL7Y1zbw6adyaAA313gPYh2HMbwJKDuJJETSgqiYso9LTdx1eWPSvutJk1HqRzYQyGX9BYswqyCf",
  "key31": "39TJsLPHBK5yhacq8Qo4EetaZLrBw7Z2tXSqEYgYPWNsRUzcwQPTm1B7UMVZ2yBRPzdNXsf56oPwptUYQWWmRuJf",
  "key32": "5piueumU8QJQcU2rjiDFeJCW62ooUW8bSFu8TeJ56UFEwgn9ieAs5tyfLo8D917dPa64bZsxCkNfLT8MCrbhai4T",
  "key33": "38YGjVyMZsPY8RWH2N5CCf7M7fPnQUdWjrkedndqmtuczUPcjDrknPYRHL7yyWZgw1D1V588ZqWF2f74oZkooxwT",
  "key34": "4y3NsHF624vppvBW9vivdvnBnsiGoSCyHTWE6vgQcvQGX5Gcfb3u1QNhGmAH4JTyQZtDunbuvRCv74c6KzhJB3GG",
  "key35": "5Vu91k6Xb4mLzSPVp5ABwtp5czQDuptwMDwXt1sGyPxUjMYjPJnCngXLeBzuhG5AhfeaZG9fXtvLjMFgkc6zUQsq",
  "key36": "5KB8aqx1mst5jrkj3PMc4SMVFGkotWvWRg2cHd1QZtsnuwhYFvxTGhK9ZNV9zV8hxGEN6Qthwc6iDz8E45U2vBhV",
  "key37": "5vpZ4j9hopYTqy31EjPwXSFoAyYFhBM8WPxpvrrFJf9ogakDEdNdPyNKmdCe2MHqCMdewSoGtTEyxv5pezxy3Grh",
  "key38": "5TE49qttn738gL3UPAK7AUXtYCyffS3L1juEBAcGapLsdndKLPsgUfdp837FUbHpVWGmjrw8TeNkctcnspc3BsVU",
  "key39": "4cGcUN653e5bxoijtHZfvwXMwZAdfisNcdFbqR92XS1Tf8rpwnyLR5qD9uLvogbmujoxAWz6z62XZA2tPsrVtKtr",
  "key40": "4sFv3uZfBsYq3mV1PU3C6CSQUc5rXL5dpXzDbhVaq5LsA8CyaFN5Fsw29GFe9Vsck6PpN2ypfxoj5U9cYkt7aG6N"
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
