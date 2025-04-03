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
    "5RmUXPykMVucKdD8KP9iHVEaWf5ATUt2kz6HpQc1ob8utE537omUCsrpfBanLd4bYuEWYx3hsmAFd3ZGTiGqGvNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CDxx2hbZKLyLSpahRZdiXsu3wdXeyXq4HjyDdQKoPbhkK7RYHt95WXaRYoDz4DHNpyVr9Jf4XPng59saCS2WnjZ",
  "key1": "4a69PkRhwRZxF9YsS2Ev4Cxo9SA1EsGfqvw9LwsbKHUP3nLz3HTZ6w5WdjafGy3PkmuuT85bZnuZ9KhmfkBCJyMd",
  "key2": "5ZqCF6aDM7PRQWg81emxdkCsn555xcoKzhqYdPmPaWM6S6WzAjvQbJPQQcsHpm1K4gVD9dFihXZXP2MVQNTVoFTt",
  "key3": "RRR4cmUuWd4zhFzbL57WGbhM4khquurYoW4tuPULE4yZZXwjcYRFjZ8M435qvQNZPGKJDtpXopSAjQhVEnfRLdm",
  "key4": "4caGtPZFAi1sfAHHUgPjaMZzwxTRKCPG26YQcPmKC7yaUSRh3Q767Z1W7hDFE4J3xJTbUYDWYexPUG4x3qND9X3k",
  "key5": "2gisFbZaAZyUTCQNDMi71xzVdFZrYR2oypAdwccdJm2tReKXVTYvMH54nCGwUojYUm6mRPocFfg55Ww3X1YkhxDq",
  "key6": "5EpwP3wvmqH5F6S4N4xoVbhPToFf4cfrCDWPgXyM1KrMAooZuwZKzrHYakoDK5j12gNePAkNiFRzxKMRKHGUprt4",
  "key7": "4yRRcUbbquz9L6Bzw8EFU4zwHx2nagcd5A8ykUN2ft7v3UFomdXicXxXNW8Ffx9gGcbfzzU6mq2mg5JuphtUo7Gu",
  "key8": "5t8NxUvbMUdwX1nwf4MqUk41K4QKxp94BonSDG3VCFa8gZNosUfikE41S9QoZhkrtuangr82Hi1g7xv3LntoMmcB",
  "key9": "3U3ZV74dwjPVZriv4VR9EoUzYpPAvyBdBUR9yYuB7VYeYzywJwgm5r6gZPA8FCb2UexHbr7XPGtzp4y8MThX9Sdb",
  "key10": "4X2HnCQb5R4LNKjuisGqumD3AHb52C5KJdJ3P1PCP1ZmZZi2vRFwfaUourYUJVWH7dGHvtDGVo1YExLv6exPVot1",
  "key11": "4wMWmarFfBq16AnbGswdsm3wepvrYDKGyua7y5BmLZrxufUgRLXDkijzRRpaRNfPRoaheKsjAJGUPEUNom7Vym56",
  "key12": "Gb5fVLM6fbPTwhs7GEaqoYNcfhexaKH4pEDoFjw1YDwffN7FKac1ErXZjsfrK74C3VZz1VaerVUa4TzM8PGnwD2",
  "key13": "31DHnD11jabNYDj1YifsGqFyH4FtEt4B6HGq2J6xadCUitvFcBcYtpkt215JaC3B6u5gnQEycwm13vzw6e5X3XzR",
  "key14": "3YYo9nRBfuBA4yQYzXuhMysfj4by8gi9fkMgQgyrmGMU1FprSG5qgr2uMgVLjh8JmFsYyW5E6tyDGxSDza7oD3Pq",
  "key15": "34wC23y4Bmb4mHD1hRJMUM2JbNqtMRG92kMskqcxmtpNWhTjv4Ee29K1TTXbKhqRztvku3oCniXJZyoh9cgvZiQY",
  "key16": "fHkWv1S9uB93qw7AANtBz4JVRreXSg8uMPGhPVadCTGsCPpsMpcs4gZy12MkWXHMyM41o5e3BHxDnfgTuRskswQ",
  "key17": "2dCN9ipCjji6pdSiR1FBwPhAkqiotMdBRDBRkxCcTUAuwtqJCuihJZd4Q8dHzHGY8uEyPeXz93f8T8FCTtzMnA7V",
  "key18": "2s95P7csum99vWTUMtZEdTSRoWBeJTg8UrbGbP8cnRHpdxsDSkvXQGTcyheKPYxZkdvMKxrDGeTJAso6dQjAzqGS",
  "key19": "28rpCj5KDZ6VwuQY25PyDSLVAgGVggFX7pipZtTzgjHSCo9RAbaev4QEbYwM5EUEoHfqjoWtQ1oP9fvwXn9T9BAV",
  "key20": "4BxmvaP9xWCdg6BBN72vbLfxh7DiWsjigjm8ZkD5TJ2PKGF6EuVdaWcqbDzUK8Jz24CLFRHsvaK9cc2HiEAPf88N",
  "key21": "5JVHWNsFdwRTUAT7kpYCZFFqN4X2aHHLnNsiEdGBzZDcYy1JN8YXWZTND5EuQnYk4ftewmdzVX2jzBTxoNe1XuML",
  "key22": "67EEndRp5cTiHQhgjavKdYKiaC3A1cXwuTKQx5UodgGqQEgzQuGV75irsLwsEzDn1MR2AGxVAHBjec1ecDJWQfC4",
  "key23": "3rYd2idDbyQLr3rmfEHyS8gHugt3PMzDXaWEpWssyExxWH573bJehT8eDXMacGfZZj3ZwGFYpzhjAmodHB5HLz7Z",
  "key24": "3fmnzXKnnJbYfnmCkUUHg9iFVthGSsmcdyj8fFGKi3VGPLhehtTdtXyPpgfhtNxo4j3FTjm79Hndf2fWwp7AiwZc",
  "key25": "4XBqLRtXJcHKRxqzyDm22GgbqtpTBqskttAL3o1ypBwpqPN3AasRL7X3RnX8qSNoN6hjdYfzTRVVY2TFkuw2fL2p",
  "key26": "5wzYNLK3PtraTm8NkwbP3XitRa64FcqMTjAqge2zKuBQEZn918Z2Tu95DjpMu3fpxXdEnC5b398Q3L6aKTYUrfBE",
  "key27": "4frzx5HefSrhf6oNn5GC4HP8GWjodXhS9uAzcJDrbobGHNTZaFsXqEdrhnc6HtiAHphpZ86caZRF7gHFFNBMc2Qc",
  "key28": "2jpogWDiZG7ngFC76V44Dj7TbdP5XtkeXKtqBjLtaS7rqakwx7oKEmUdnn7cPVe9MmFoig6oVJkr2Fb4WjFG13pr",
  "key29": "e3ouZMV8aSPqFkJLGYuUPwNUwdHRZPEoz4JcUGs6phoaRnujU7Xjkqv5UJ2ZobRLPPfgSdZqii6tpuimKQa3c9K",
  "key30": "67Y8D7MCEHytpJNrJJqyszc6XkiZNsQ1vUbxNoSGRKZuqbtXgu1ZSvExKZKWx3PyNcANezjfgEMwS13gZWSdsoer",
  "key31": "29tnAfNxryVH4ZwoUJjBmydzp7D9DEGAehCpG9XUNFXQvYiqFgL45upabnsDHGTSTkchHseRJybzijz7RJ1wWH1W",
  "key32": "3UknAaFa2GekFd1AFViy1Auq4tcaAq5jEBHdfriKfq6Yz73ueGES5juT9H6U2knWAJRYxw5vtx2FoyXcbEJAPTH",
  "key33": "3zwUHR85cEf9UC8pvL7Lmw89ysCHy1B4JjuzefZdEBniMuYgSRwwBLNsLKzxRi4JH4qDtxdjuiUT3YCHnkPtM5it",
  "key34": "uZKwxddHMPgwHZ5J76pK5n7PR3oB5QS4uTuqqCojEfwTgTV5SuE3XHUnMJUyCP7o2qhDB8Py6QDE1QcEqF55ELY",
  "key35": "3kBWxHGJjUzfNWTc8M7H2KqT3ehjWXDEci9CeADTFbxGFddCGJP6bSohf6xXjkUNMgtckuVyrCtfX5wJ5MNoDcxe",
  "key36": "285q6gPWKutNVCTTUQ17LrYHmAafqnPzTzugp48BW7SndvCc7Y7kHRfiuL86Fu59LFCkAEwrjpjFFYSqViPeGfVi",
  "key37": "2TFJWEYXCzHTuUnzvVw3PVta5oS2PaWPUqfH7WaxDyPhHuy1zwEvQAKwnb4fre6mpSE3RdDe9UgFKfAckv1y3Xjd",
  "key38": "rJfWftJ5ebDE5Jb5EwC2qgxxpCN1fTMsqQ6P2BZD352CGdvKMhFxPHz7DHm9iSup1FosXxFuN2jLVwFvzh6fkwb",
  "key39": "4Gu7RhVa7GXixRBnBa7yzHXG77h1Vs4kRjKHNiYNhwS6MuL66n6a286oezcJPVqwHbbHZymQ7gaTYm5ELWqqk2B6",
  "key40": "i8Tv5jsaoxriuAGB4RHjR5VRJMpXYJ1q3298JqrtHxa3aLoQRf9azJUHFt7iy8yHnWSMsGLBCj4dzo1jmNBus2K",
  "key41": "5reHvASFF11AwPTqtfTWxJveDCtL8ZukCJ3o2FrYcXnwxHfRbgWeivJ5YxbTBTYi7ij1uiWJc4wjzCqGCXHF1zBt",
  "key42": "3U2weNTVLnQPPy43fzrcRSENsnMpSCVoZK1T1cA3yxFJxFn6Ysb1NN1q96HKqkbC71zcCQbkbNf6vtFxhS17kqKN"
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
