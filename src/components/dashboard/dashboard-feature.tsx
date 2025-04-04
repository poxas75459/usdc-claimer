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
    "2NDiH2XsHgWacLKCWgjq4AnaExtnNfmAHgNtASBqKwRn9p4i71Az33VPvb2ZqJAea5uf4TS5G4eUhpR6vwrbAmUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G1n9G5FqrkkuGf8Z3JJ7j9dPiPoun4fgNMMKdfSWect1K5bBg5MgrwLCp7e3QztBV9t19qf1AS1aEFjSmKpLhr3",
  "key1": "3JzYkvWTNegqv3U9eXPFGvmrdj14dBBobgngzsXrBVeg9bXPSgUat6Mf7q16KB6Jojx8ivevTjTqVcrduK5h4QyJ",
  "key2": "5dv4SDZo4BwtoVJ15rgkeKtC27UarasH94W4uFr7N4Tr1B5vydK7KaMe2ebyFndV7p6NPG6dUyynW92iNPQnsvJv",
  "key3": "kZrhjcuHcuXtDUsaV3zBCPd8gEUkizuR6Z3DLR6jPDQAeffX22bnHwidHbQUhDHhDiJDJqxHgzSeq75yPAZMHAU",
  "key4": "5TYwAK8L6M8Qdiao21WKGN5VuZk6jHuD1fwMuwPsdi2PxTDfHHMD94bwWCGoAnAVAcEqKFMpUG1thpFGs7odduJa",
  "key5": "5GNrmQyAWYiFmiDSmmKEanTYTkWbckcQbwUNkAmamQpPq3pwyZDpBbse63q1rvTU7tbyVNUNnHzzgkBwrJ27mN7P",
  "key6": "3mMKEbaXzWCHw2hWZunYedF1qnsbWCL3yxsKJ3qGQdWQ9ePToZCWZxyuMMrqNMU1cGYQdcwAgrfiFxBTV1NDKUo8",
  "key7": "2NXfE3EpsC97p7aVUcq58Z6WvPpoL2kv9FE3L5CapuiYPPpqSnb9a7GqqHXcJEioxt1JrqjXVCa5vthZD96RBoRW",
  "key8": "TvsSGBnNYMGgqaeo7JTHyNLeJ3GS5LzAYSRSM8hHkTtGZWvAJ9gYFokRdnhnzdL5evpBxhydHqWrJ5D1LsYhVKi",
  "key9": "2cBoeZ1JBX9ucSxLGy4M86CdevZQFjxVvukGWi2YtdYXqSLRNsBPC2ZbzEqmud2zMu7ZVZGufnHPRttBXffjJVaR",
  "key10": "3fzd9rcnuqVBs1Cngmr7Hx5wgWRCBHKUpjXYfTuQvHDHg9VkLn8DamR9ythoGYpeWPGfetZgp1cNvXr65Ju4g4uq",
  "key11": "2dBynecVZvoSnVmXJ5XjXHAaw288WZjTtXAXd1QcGpgYDvNYqTG9qYcrj1zDKj8KkZznKhWn9iAeXgQVMFBaUzmb",
  "key12": "2C7X5vcDMSwtY9pUmVG2q8RER2nuRvd1Bcsw99myYHRAD6Cb1ysdisUHfE4JTSRoJBHDKuocNKh2ECRmZSLjc2nd",
  "key13": "3DoCm7qxg9Qgqrpyd9QmvPUVegvU1zprPoTvRM1rcubkreWo6TTyUiKxjgGNAX1UWfbbnNAkmFWFmUo6xj9FL9bd",
  "key14": "oYE5UeShV8dGBKRwujuR1LzJs3RQThPwHMGZXQHiG88W9z7L9M6G6gFyEuVsFtytmJhcsK79e3ir7WArPKQr8BB",
  "key15": "4DBAzENJY23hvTLmPFUPdH8tP3ScrgRZHVSyTMSY2kB7ZBQnbh8uAwDcgemXhkEVhW8NZr7cYkxdKRkyB7rF2cCq",
  "key16": "4xfhBJ2P37MDMdUfZ1BCZ3c6Y4R4DGigWiMw823EbekcrEbMrvunjau1BNeotnbSop1yKuFj6WaF4ELvjU6jmD6B",
  "key17": "66k6HNsWZc3PpjGyT6UvNXYN8ZLH3KazaDqAJKkFX3PMUMjftpyF2dX3vE7ieMZqZZDCWAgaJyPRKUS29tEbiUyL",
  "key18": "3UeXQ7vgmBkzXQUzgGm66nWVUki4k7ptCxhrhcp2DHiwf4pPAgSa6NPPi5xLMYZGgmfdpCJVeEWj5eFjfv6FVU7Y",
  "key19": "4d2Nbq59euBKdNQchyoMe7cVkDFAAJYPy6B8DkHCc8dK4yHYBYbYTueJQBBZ5Q8rhUF7dTNVE2ha5h3frtxcVzzb",
  "key20": "51P2mELEyLhSNqcZBJiDa5Upbc7raS4QgskrZfB5PgnU4UC2S9UUtRjGBTkHZwQeJ56Qu5MCfcM4dYwBwWyekC3c",
  "key21": "5uQ1hJQEfTx9E6XSGx8xDqCBCKyvyrUnwPxsmaDJD1TZP6KSvjaPQNDf4Mim21fZnLVwdEiHU4Z7DHWpT9qiMZuD",
  "key22": "5HmDvtuKPF6FkFDQWaQaZY8oZ26kDoxS5AiGChrGF3uGQJxuogLhnhJ2kMmEkMjEKUzuW1csS7fJb92tXBCRZpxi",
  "key23": "4jHQcko1xvdg2hrUAYaTx5ZzbPZ1eyRHtcUiTPY4ZnGc9tii4RzXg7GwKYLJFsgnWDHQjDqNaMwLsKCpnBt48K5K",
  "key24": "33GCZKq52xs9xk7x92TsyiGZErvRrUApXzVXk8143qBHQoizkzj4Ymmske9j8X8YqJUidYbBLi8h16ozZu3LPvSX",
  "key25": "59JdNMaBuryJQrbpSZCAryvhirh7qsHiuKXv26JJY8uaaFqBchn4is1F2MmApTB1froegtxj4eF7PQC4Yw2ZxBqF",
  "key26": "5Ukgq8Bs4kfLr5ULsKBGjKQyekPgRTJcBHiU38TzP6a9h8k2NXXTvWvqQtfXPSZpBTjbpj6X2a6wpr9qKsgiTaZk",
  "key27": "5aV4ek4B4iMFkNh7krJqnE45LJhzkSduoHk4sH71yjouCD4pmDRpk7ouQjKgpaaE7auCyqnjknNDaoBo6fVyT2Ph",
  "key28": "469wvu1McXn5z5uH7pnCvh1zYsZhiruXU7FcpZTP1swRdicANPsJ4QsVT9ebqEC4XvwXws8GKQ56z6z6quDKfQDo",
  "key29": "4f4B8syG1WXSE5ekUMUd3FytYrGXu2xbegMkdr9yaR8fmUqmgdSBK871hczihbnwnh1xUh492XwYxPt3TwqWgQ8U",
  "key30": "5rBjsHryHzuouPPTQoHLFAiU9EwP9pwxajG3vw38wdq8Bn6oEvcMYapwPHfV36NoN4EoXpaowWQeLEbYND4PmYh7",
  "key31": "D1nPcb2kknZgpTjQcNTFRFG1G1A3btuM8CAaiSne1NgWxaKz8ZgKuodBn8ubMYZ3mzu3qnYVpyNWJ4C2Pj7pyNW",
  "key32": "34keEGaM5JoXPbLvFQ9sK4tsgcxAvgcvsDFKad1cdnKadJYDJ4vRqKsJd5s7wbKEDxDNW518zK6Mf7fFL8TAgWVK",
  "key33": "tZA9z5wcaPsehxRsdGr9JHftiQupJUYpJ6X6xxNdr6fDdqwMaKTUfP8LbUuDxzDubevuKwDpt9qiShbPWSTynf4",
  "key34": "3ANHBBauN5Rb7nC3rUpfywk9yXoox6JDs1M5xkcQXKwqNRyxEqyTe17HDQ7y15HiYg8QyHm6bMLF2YMnRAXeWaiW",
  "key35": "2etCG8xoYvpfhGquJ3Bd7efR6F4RCqYK5QGGTN3PRgNrEiMoi9ret4mkZgWDGDMuGmCLn7RkbXPFEBTtf2Jhmzqt",
  "key36": "4mZw7WpWwpGpXU5xh82DCxtrVVSDS6qpiccNkpxSMeFPRm6NsEqbjdZcRCfXU2HA7pzY395BAZ3jqufQKKGW4uoL",
  "key37": "Q2FmL1d4fvLYta3ucYdXhTK8x2h2W7K3YT83fTUXkGsW44qCiSVoEn5w6VCo3jk5U8Gjmtmh3eKLA2ATzpJBNv3",
  "key38": "3hSXn939iMuifPhSPYLRpyidLxtEmc3djT8GuLqoTKBwYevou2MVAKW8qhBRuPPf19tzhdvFHsQBjEqHsah56S49",
  "key39": "GvPyGVnRCupL6HA4hUtjgVZaJjcVihWUVuvWhEfnsP3hTW2siRQQ7FPuQRJKtcodTSFsrZu27ijYUvoDd1y2Xsn",
  "key40": "4MLa8cLZnA3LFzxtbB2SfjwJR4apt6NBSY5hYvQKBb2XZdFqYkbzQTv3vEsrofxEGZnJo4XfPwQCmDKSXhMVz8nb",
  "key41": "63QnrH4SJiY8Lm92BZPPWwemKNtp7dyJfe8zwymdy6W1WJ7rM67FLRVUr6DAoEnLXgoU9216SsCTyfjWTgpFudy3",
  "key42": "5SYJEotHbxx2fHBVAcMgwv8sWoYGprhTyfMU8VbkXw4ii62V4KdYUMFPRi3RgRHHkHNi31wrfXd2U1FC6b3pBYYg",
  "key43": "2Ljpxu7nJb2Byb4Arm72ige87wHc9BeKg924Cn9oUnsmVCR3eH2BY3PDKxxvRNeVH7iNCQRW6Cf42RVGk1qGaR8a",
  "key44": "3Jw66GVq61XjH77i1ZquVDnoNtTRwXyXVmUiZjXyKMxKCm9HXmSKBe7J6TfA9naegQHkM2dP7UMcXoMSLUaww3di",
  "key45": "4Nt33DgwhXQxHzLq2h4jK9sSf4kk2vVbiFTNmCbHPTEKcdvKqQ2mp7GRGCcJc1JhkZt847PjUzbNH7z9ze26LNwj",
  "key46": "23Aq2rDC2E7KZbwhdVA4PYenuSJGZo8yGpo4PY79XfJs7a4nuVLxZdMActxZ2Rkz7W5zHygV6jZ1QXqT7H8uQGjt",
  "key47": "2vH4T8AcRQpKLLR3v4Hic7CuU72XaxmHmb832TqUc7ewCvF4VxqTe9qdqq3H8kLmm3teQtUueosWJNaeC1i3ycMx",
  "key48": "4ohc3gJcEps6fcQtiqi9N2ZtUQEpxmSiS5FdQUVeGLSbaehVVEsbWHUCGv8wqKD5xd4zXAwjCYBGJkp8Yynjsiez"
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
