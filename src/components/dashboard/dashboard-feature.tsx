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
    "4CN4RnHngCzYGbh7zjVHJvxea91CjKQcj3fnyJ3nU1hs2fRsJRhiDeiYZLbFfmmGk5eBjsfKHoGHxKTPxMzphqUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hAtddA6nfpreDP8DtrjfFMLqwtVueswgLo8Xfo1hPTD416x586ZhNbv6YoiuV5jdggo97sK8zcPk1k2ynUFcvX8",
  "key1": "5vbwTQD154CQTve9rBKavZ7Nyxea6SmuQjBdrXKzm6hST3hVEaG3ERnbbgiPNvuxuxQTx7i9frDJMFg4aQPgcscX",
  "key2": "3gaa1dEqY7ra2N7xWDSUqKvqKGM3KLmucNS9UKQc4qA7rgWzQc7tYkKyoL3aYMtndqds4cfCXvt5wyGiXvv1xK4h",
  "key3": "2voLyEGaQYELyPFB77v5eLjXT1HTaSmM2cm7FkhV1eTVgck8Je629FnXaA4HbKxVmKLPwGPzvr4joaNH5yUxD7fu",
  "key4": "5oAqxUVdF9UX8fZzWFtQ3zhBgR1MGHFqh9PFaiHViTFKhfSKrgnp8cJ4afxkARRGZRufjYpGhMZxmoPNFd1vyGjK",
  "key5": "RwN8HTLYZKpcEfYjamNJitr3fPE8Cr5qmkLXvHoGMWbmdke1SHV5RCWYAc8Pa3Ms4queG9z7REJnPdBgcnDA9ZT",
  "key6": "DCy2khR8gREQyVrcP7SBwx43EbkcaHU7jmzNY3cQdR2UoX7Z3z8LwECc5wmvHM7RcmWPbEWSnSzo5cVrmd5LS9A",
  "key7": "4KreaY3LjNJUVrLgSsDHfDWGXYV7LiomCTdc3xu6BP6cqmoKbWPoH7sQez4tSX5NUzpnAwq6b2yLemPDJotHVfsi",
  "key8": "211rbhD47CxKDpeQuAbCeq5pmfufvcMRdX5mqKPTTjE7G8Ce7zW7ixuniq1AeWyDgymL6jmQrKp7j9BE2wavG5Ao",
  "key9": "5h2zr6oRaMygQ4GnkYyCisu83RnCxyDgzcZwftmArCPsgpdTHHFrERATpsXMW7eyWJVGsEAz6ciQvJgrUoeHRAa8",
  "key10": "4Cfv5PvAZG7y2opHEUqM3fyZEVoa8U64cgUj2SNx7m4Td7LxquGoHeH6ZZTxxwtkTF8ByPSkNJtSEuw4yhoKhECc",
  "key11": "3LbXmdSFocUQQFJsB1JNsdxi9y9AuB9YmpMvsPWsRhXUtgxJxTgRMz6EsBcpqT15GZY9Z7Rhai6Wrxg9TpZnMZz5",
  "key12": "2equ8CXkyuZ2G9qd5taqY2Mjom1xLBduiTJPUDr6a6YJuzNSCBTXc1G6yqqRVGoRtnUbUPJbetyskf38Ldxzotsn",
  "key13": "476zr6txJBUb17rNkWnjL3fVMwR7MvqGCKNPXgUMWhb1KDPRyGs7eLkJmMjFwqCSJ9eQm97MTs66u8PWXN4XeHDS",
  "key14": "41ZAVKijR1hHJjpYDsWPmAR2ZQ1hJ72pRbYtMHYhZ56ARyWvMBp9MjYP2yhHQvbvto2PLMPHtd1thGgYSyd2T6en",
  "key15": "2WDwc9SGTP296AGWcZ52rcfEZrrqMkvHSnMvyxcAdwcfEiFDq3qcMhxXr58S7KPscPQA8UJ5vZ47pvwthwTEXGHH",
  "key16": "ELLVRSs7pcURh1saEtkkDZ8Zqh6kEvPbziSvf1QAvRnxsXc9xfTQnkUZYzVdKGAALKoQRprSdeJtxvSjSFQu4yE",
  "key17": "4q8Fti3ZFNJUPGmQYMFtKA7YnfbMHKW6ePdCuGM5AH4qhertLKKbDAAYwCtwH2kkvogr1dHrokuLMDH2Ux6Db4JW",
  "key18": "2NkzHYxR2kPgF2TLXrj7izYRJrvJC7njjRrPvboZLsE2qES4M1VraekmnsKgea6bEvvRwAnfwQ5LVv7GwUT7grru",
  "key19": "2a1MWUJkpJ4Fvy34ovYdogTVs1vMSyZc4JEXQuimAV9TaAraWyD69WbnYJ9bngHtmXh8hpe1MybNXeR1TEXx62BD",
  "key20": "5R1Wwx4TWcpwi2DMgMM5Ykpv1AXi1epHXv7WpQAncZJ3MVopoFdhmYAnfgmidriwA54MguRU3P7kqfb7o131UA3o",
  "key21": "fQA8fo3Kop8Cx16jHqNKa7d8UjFKo1GEwYosgAZEuursK4Rwh1C7mK3Ai79UwFccAsRQrV3g3RmMrAwgqze87xY",
  "key22": "2jNyFucYqs7Nx4zkScUnnJfXdThxxZvpkQtdcj3Ln3xj8MzpkhYGn9oFo3gdCHFhu9xYLRVVYC9CXgAxgWDPKHnZ",
  "key23": "5xPk1PcxMvFYGaE3mXkwS4KWX5NrJYGVwWkbEitroCGBz2HQw7LCgtAFBiWUfdCpQHeirsep5FmFmgrRwcY9icGb",
  "key24": "RgsGg5PBTqpFaz8zRUdYsB4zfQpHfjQ1XTHr7ngLjBqFyBAMxk5NjTwz2DjAueLfdSUyantxP2dfkwA3XF6X4Fj",
  "key25": "4RJzftF5YDesFoEKb5JqjLLnPpERL2RUsMsa9NCbpg3EBgqUvswisfECb9HUbFGAXWmumq1mRXjhMZJnzFfB9K1q",
  "key26": "2DNv2NzeNJiZB8UcKgQJ1KSWLbc3pTcEfpN32w1vFF22ChXA227HJv8L9Z4wCsj93Pybwp7WBEVESvX5v2nBZE4q",
  "key27": "5XjLV1UEjS76m67iJ4VdzuDbDsqa7z5UWExovkPrnuJaS8mwqVN8k1gJnxsJXRpCUPMXnJyLebe6i9Y6xStdfYFt",
  "key28": "5wgauTa7MpF3tgPLYEkYrTArzVgsnBvnZN6xgy8fVGfMnU1CEFps2Wvmrigz5imGtfczjpGhEJhYmTW1Lve5woQF",
  "key29": "4p1LyQTqBGTGrBMmMySXCQPJRddAJDZux8PtthaGUfXpdZ4T2higRwsKvpfir4L7DAZYXnsvc7eT991fCUeGGCd",
  "key30": "1hnHx62YypK583ertPuDiR2srN4kN2NVxi7CPfXwgKBhzgwkw1DLUFsPCoTy1mH2Qv5tnoFELzYAeDo1uDf9r21",
  "key31": "2ZWuik77hocVaEYWTC5hMNCLpGfYV6Z2KkjyiapquE89FDpuqaZKPaJQVo17eS2p8MdvP5q4q1fJsuNFALrU4w7r",
  "key32": "3noo9vXjjqRgv5Lw9RpKCaXygcDk6wpAAa6nzGJCicxRBzgsvFXw9t4uL9ZJ4e2ckC68v19y4vyGWwah2pYBpZi2",
  "key33": "5S335qwBzSHFvzcjrrqphDrY6zXGroVUPp699s6eLJHKBTC6dEi65GuXu3kcNNp7DYqYggyQFRu4Xz3Cy9ovGZ2P",
  "key34": "29W6rNLBGM3tJAQFE2JgtU3bpWkDTVdKzcLBTKdmkBN3thZQvip1ShZgaXfc3odqUGjysSqAZvZ4buGJdbtLn8xh",
  "key35": "v3QD6AnDsdfFaefYzfdABGmYp2PDdutZqccBkzXQNP8RKgGygeX1gaT9zdEEmifBKumBoBA47D89jYMVZiDQQH7",
  "key36": "stpXQ4DfpCrgstj3hYQ6eFXnFXf31jkLkMLanTdhrP97Ymonu46zgJpkpkfRZfniw8UTaC6STMYnxpAjkEEbvrJ",
  "key37": "5abtUF3kuQxKRYKPY4L7x4RkiEq2PUNCeRnvxzQFR6n9KyuCKbyUHsgkH6mBiFkLD4hJKeZf3HmZsE1DsWYY6s5T",
  "key38": "4XuFB5SXjFwLdqJewedzgCQZAogENc1z8E9uPhvcXkpeVYtN1LvrFcAW41dkq8hHzqzkG1gu5nV3EezuqZaukAm9"
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
