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
    "2hkZuBhT8ZGHtcXeNRzQf1Sx3UiivnXWbjL8kTLadoUwLfTpYNCm8a6RaFeGQN9Gi3h7QqmQes4tXES2FPm9eJLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33bXGgU3THyry9nsBBjBYHWYFrsJxJKKRrcU9gT19hjBkDx3PsJqzpqGiuvL9oMKKfsmSxhky6rMoVVB3G6yrugR",
  "key1": "27SAEHGjByKiSEnmb9xht4uDcvTExZ2GRMWzQxnt5agFJQVEWTPgSQyUKrNK9vtsQ7VRSLYNekivwibdk26GUuQC",
  "key2": "ZrnBfGH27tcg5Bd93tqXZuiuv5qm7U43ovt4w5k2JPmTyCRY3pv2manMwzH55wybMPHpbVQ6eJDpcAKZmXdkph3",
  "key3": "626zcUyKKsxeRaTgSrqmdgwpTsaHGZXtVTxHygjoSYCE6zbK3iq6M4hXLCS1kKvX3S7KxgQcSpsxrRspJCfBoJhv",
  "key4": "5q8dxB3HJRMHTqncSrNADYsZiP6Q8v9Mds75YrcAovUTvFo5MC9b5kw78dBSaat5Y5KSJdvAuYbQJhM6oXzMt2hR",
  "key5": "4zkxibuPEuRpCeNvmyvKX9EKfwTUoC9WBYeQUSmUoWqFLPMRGDg69ftHsnv2Hzg2nWYtiCghxynpSupprUNDAMTq",
  "key6": "5dkjf1Ey4FojoZUduUH9oW4KuEbXtv5orxyxocCpP6a9CdbS5uixJCQU2mFEgBr1dAZJinSFi83AaSRYj1wJVTXq",
  "key7": "4YmuP5P83f6cBeHWu7isresL9aCeYthvWZk1qFR1EDgJcf8HShw17n2YXpJaBepwGmf9FGB8wjxArrPAosgrAbJ",
  "key8": "5K3PBLQA8xs1hzAuHbKecWrwsLpuH6HmV8crEehD5v9XnQ8EbM4brFmkRSCYLggyjiefMFG3RRyKR1EqVQuMsYwz",
  "key9": "3np6iFmAKs8KAvL4UEd8MnuUaor8qejUNyJg2t3fGvpaWPkQS6kjd3ffgRExAS8RUQ5N4CZmWsmj5p1ndz61h7t6",
  "key10": "4D5ZW3YHQfi4V1iT7CJQ4sdeKi3PTS5JYm6QMMe2AeD2XvW6drtQN9haes4Lgshvc2bc7wf6b4wL5aMx4BGGmnNi",
  "key11": "2rP6KG4pyoifweRwY7FnTZqduh9QrqdZMwBA7tyn3cMF8rFA2YqiSY1Tp95AjPmXABEazPjpyMDP6mHV2mYTWZNF",
  "key12": "4e5v9qKgKniPVNu4rpfd1WspGWj9cfXi64q3MZXk8JpbJmpen6Y3DipAKPHFxX86DLU8JbFSaPkgx69VBtG1yjki",
  "key13": "2iTacW5Km3xQcxGGjt1q8xiubRDTnjTMKRAskqHUKpj7Eb6paCqzU1G1c688uCVWHnGLb4gPZ3Mxqwtqvc9XjDTC",
  "key14": "3LMaLNCu661tWSCb8Ffw5xz5diN4FBvekUZhHfE1YCLdFYwi4HZZ5kPQwUHn9KWAvLYwsJLoy5BtNnrYpGQmE684",
  "key15": "4SWNV6QW6tJcZefk1egFNtiYfJcYSA8KmTXZkVjPA2MmxvsrBSmKjneMMuz5u5jUPZiKANZzodZrPgydXwywGN9K",
  "key16": "2jAamwPAFXrSVAoNuwxCY3WBoG2CTZgX6QNaTuAM8wCrkfAGEV3PmzLNDmgDSUvEYD6u9cjrKoGgRKoMpm2v9vEV",
  "key17": "RemKn2oCkJhN2XrvPQCFCaJpyL9UuybyEsFTEbGDFTrWaqybgYkwsfeqgKddUNbFsjpUgk9SA9BrcnhKML59x9J",
  "key18": "2mMNJ5AsvRhoCxphoY6GCYMY3mknbbQST9BTfwogtqBMQht5Y2WHP3EwoLejbTjB94gufZbuCG2tHFjZZ8i5SENU",
  "key19": "2pVkQiNv64VFyK2gc4ezzmWUv4VDKf8ASgVRHgtcsdWHqgNC6XMGPn4tUFQEQF6D937MBEkhyNuXP2msb3qEEyvU",
  "key20": "5zYY2UkNDfPFGc1pWngmCNGtZkxpsBokCaaRcABJfhEEK3eV7GnuYkJ5y3krP7B9oPWuiNetTMjhsLiXZCpw3evY",
  "key21": "2LebfxP36aUyec1ifgrqq2GH4BYx714RYf6MRDZDUF5Rpp2uBAATXDJV4gaiUCh8Gz2NUQKiw7omzGfddxZZVqM1",
  "key22": "Pypudam1hmEx7Q1LKEZGLEjvWaPFpN8mRwWSNGBB9q41X43pgrq6mGmD5BazG6ksxeL6gZc5k3FEnsjrFUoAhqE",
  "key23": "5wP4fseYST6hreveuuRGM2MAet4uAqv9svEJ541f7y12LNET9uM2PpYb5ZwmBQc3Ltged61Tqf71y2eJcEM72zn8",
  "key24": "3Hu5Ch3YzTA7N1Y7KNV789oKz77jhxwu1ojUF2JvRKCngsVirJberwzmFfHEKH9oUuQfZa6QM1HWCtdtpce6qLay",
  "key25": "3FGiU8nGaycnJt9oawYKimqAuFPbTmG9ftxNR5Rrg8vawMvtrzvhGLiVHX4bLnton19neXsSqwTXQenmc66eBvkA",
  "key26": "4tomhNviTgf6DHFcwYcgWh7GJc2k82yoB7XbcyyB1CEjsVwrQPmpY2SMfG5HK4CEinJji3uWPhHVwcKjpGuF7ugc",
  "key27": "4SN3TbmRwbGrqoU4qDJ9XwB3aFbcsXJXSjL7iF3yuFoi9BDgCvZgGqAkkSyGcHjvEtYGZKMv8FZ6wnFjGC3VZ78R",
  "key28": "4dNmvQnFvDEDVjdB97xpuDUEAwryZdKtVAdV4QXAAFsnYstFv8Kb6rcC66yWJoZp2C13MGAomnrYCDWvELrgRxMP",
  "key29": "2zw2KewLfd9JKBFdHpSVVBopbUNjMw7YC7h5ys98jSHjZzDiYwqmLt8y55bUj7Gg39AxuTikrxuitu3iVkHzj5Sg",
  "key30": "33duVzS6fBcafznHJLKSHwosPP6WbHQGGWmMcEgbrGbW6KP2KkXcEsYYoUAt3ZjrN57GmJNSJpPfXPAvZCFke3sp",
  "key31": "zP2RNMuex4wEpMgUUBEucvBg5FTMrRggJ8r8jf835HqdyGKqeZTo8Ae4e4x3F82ZCdSxmrcFBRQKJPg1M3gbxp4",
  "key32": "4NZVSn4FVzmLyDSBij4JPerNoC8dbHvgsRjgDWHsCRey2TQGGgxDN8UDtD7wKTmdFvQcC2SV2tQ7XkiTKVF4rEiF",
  "key33": "SiwZ646YYakxV6sg2MUehsgWJsXnJXazCSJ8xiA5TJBmxTWPciPBSgUAmhiAZRtMA9TYKNorXNtiA9bnLJupSvF",
  "key34": "2uUzWskBXteP1kFQy8VwZk1qo3ycVLDoirBicw5Q6fme1xAzPk3KZheocQuCBXMDzE1Z8fXuZA2HmyWdTkyESiYr",
  "key35": "3KWSBy3FK5YMsqpn2na6HwdXgeZdWypP3WHz3c1BVUe48jG9wL55YyRj7ucsRx2BzmLeL9YJiWAhad4gL5uhv6jX",
  "key36": "E8gm8Woar6U6QvNNTtt7GwwZ3AKS7GsnKDQpjyyVFEASFCLzFVrys13HH8HX2ohiqThtNikmFepbkEyLx6Apbsc",
  "key37": "62UYGKxmmXNmk8BDw9c37trhwwvoko9PJvtwLoiCFsrJTvC3uGNrCraooCr3ikpF5QEsHWQQ1vme9c9E2FKFnK5D",
  "key38": "3iNcyMkL31zoGuPZkRYpu8RP9HxTmUKD15aTU1Sv5PAfv7njM5YCWm9Km769TN8x8S6vQECn2RupVn9jgJ7HWuKA",
  "key39": "2J3heGaadzcGAiutUeiqgXQ3gTqktXPUYsAunVfJMJtWG6UUz9m5Z9UCSTbq376TismFs7Mpi7rSQ5xE2ot4YjDW",
  "key40": "2eL5ABrVMvkkkbCjKEBqL9qMhNxuy3BjKEnnEDfWjaA8DYBbhM1QF5zJSj6vrpyuyS9hbwCdKCvh7tmzYtkKJEd",
  "key41": "3ZaP1FWxc3iVezUuZsCKr94L5NdZzJT1LFA7AfeuV6dQ72AxYho31HnWaBqiAZYZnmbX1JYchgNsRZcERfbSrPBP",
  "key42": "3puHphFJkkceJiLZDf6D4xGwMQqyPJyWFHn8WSxaqYzMzucUPy2o15oRMzctjexGZvkS8uRVMLn57zTHAZd8JXZG",
  "key43": "4mXnLkktkScpWUYSyeLGeApwMrNmivGkBm8zM4a7FuCS5wEwiD2kXjYcNGshYMYSDAAon9XoEhp1jXDeYGVb4E1v",
  "key44": "3Mwa6fqz2ajqmPAYs8L2Tj2Jdq3hhm5bEVmTMgXFHDec6SsYSKseyZgL5u9xP8DhjHe9j7BjvnPjCXb8G3DGufVy",
  "key45": "rodDBs3TjaqVavLjme71cG1fAf8yhxLau7EfAQb2kdhx7YYbL1YKnD4TS3c4xamv5bbZyECQWhMinhZKrUMjT4d"
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
