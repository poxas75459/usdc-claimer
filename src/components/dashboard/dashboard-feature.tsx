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
    "9QxSdQPvzVdxfUsuAaFkP4qBKBBbo3xW6ScU7nKCPHP7zrge3KMMg1hjuM9WbpHxrochVmaHP2323qHuUsjjUJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U1KB1xMJHfRVHrJNEi9QzoghgPZoV3NB4bQyZTi7LAizAkRc3VusLwLZmcmTct4AsocDC2JDNJ6uUuCPkHzELuP",
  "key1": "2vJ8YHrWD4sm8S6pyHagp6JmvdjV7WPGgsaMG8SMihpRnwMeqiftaM3WCWCV2rLe2BrnzDLCPLSafpeCePBzozXv",
  "key2": "4y69NpCBGoJigaNvu4uioeJY7J4qUj44524FLBnYkVFJVhm1WGC58Gb1cp1keKGBAUSJ4h5kkL7r5ccVh1Z5Vybe",
  "key3": "2rvFaK2Vh9wGw2SwysCrGaCWzJ6VS2VrLNnukh14CDeAC3eYmt3DwutmR3xYQjeD1e4LTBcAYQsk64MABUiTBZXg",
  "key4": "VCTZcwWbDUcWdMTwUJ4CUCR4rZD7US1A2hMaf8NL3WdJshQH52DLmPPUp391Zd8Gs5y7frrdVMK6PGNaTrnukPS",
  "key5": "2PiEyeUgN9XMgLTEKYKnbejcWipDLp7ZN42cRaZR9ps9c828axV6FuegKZuNhWjvRrGFZxTPAf97k7J81RQxSt7e",
  "key6": "4tiEMKqxiuKF8rUPXDTD87WxfSAugcWc63EfaobsEZbLJgkTWHdqMuXTEAQmbaMnTcWQLw3dPusy9fqguBzNHSz5",
  "key7": "5ditP8nTVyZpwa8SvN6epajfuXQXFQphf8nVjGMNFpPQo9u3wnt3tUVbxae6cp96TY9aZ7Q2ZVKSQ1pkEDdH7yam",
  "key8": "4bw6bsky3GSF7rC84cDMFEtWJjNM97pxYMpurfcnaXd8eTCvbB77MbWzvEmhunJPGML8tyaCcyMgr38HDZdNqv6n",
  "key9": "2xYdyDczVVNxZe2vmcbUCTrwygQj8AE2fYesY2gfHpqRiaWfoF3MyR27tWxAv5f9s6fD6vm8TjJyCpXeV8PZn2o6",
  "key10": "5HVqw6rfRn5nEb32Cv4jF6nFsjnX9yuoFc4tE9hS2cwYYYaFKnKj8Ye2b7tjFJNeTQgkato5PwFu5R8zWdNCJ1Lg",
  "key11": "bVkH3ydgWPPjXqNKz89ms7Sq1KcY5cf9N5hB3NB3SDtMgJTDFn73g4XuiYSL4M6bPZeNQgpe3i6KubiojpzvcBR",
  "key12": "E1pRyR2LddoCxXuokcz3iqDq45Rpy6XxhE23ePZhx6QE5ZSWpR6H6NRsgvS75UkfiuBppk2YaZ8m97fq3g3T2Hp",
  "key13": "64Kj92zzGjdWhceAJGPGW9i4w1RN91UT8MZ6PfZKF4n4ANgsswYcmmxbY52ysA5eQFKv24DDktfJzBFgMmuPNn8v",
  "key14": "5uBN35Kb6SqyWuA1SXX1AwnrCduViUSdE5eXB5kNRoFEpBTDbPZPrfY159JNVHsBP3kQ87LdQRcuXq3s8JpGKq9s",
  "key15": "5Xq2yUPFbjYeWHDXYUUCxajyHVbqNUqQXSsn12EzsfrzQGrPYs8ZKKXUSdJhDGFtn6x4XvVmX4Za2XWGsPStb139",
  "key16": "5XKGvwZr7VFE9FmewompVgGLKpPt8m8pEmLfVzARRWNynxU8JMfDczVCoTudN98veVUEbJxBDuc816Apx3NVHjDq",
  "key17": "riGeefWaYrL7tmPBbSSQ2p3a2TpxJfhHhh8TkQNKsxqQ2EcxmLZ3brb7jyrQhxoLSbo897uFd8JBzhcn6hNp1Jo",
  "key18": "2gyiPtvstQ9TkzP87Rh8xrhZNg8Cy2cgwbmW83F2JBxyTbNj4LnaUdWqY5iKsdUSAsyYE5GVDJRmUN4iWL8HMVtY",
  "key19": "5YhF5YCU4LsK7zmiyNPLrEwzLdMDpDtunXbGqESxGfYv9aNAMQdubuBwWWNn83yVHAGsvhfJLfCLnSKeKDJmfmek",
  "key20": "TQ9Z8UY1TZEWjGQcKQF9zJWrxAB7iYJ2rjrFQJd4v8zDNBv6WK9aTVUBGxkaiHRenHhPtL6pEVJ3NHPgiBawuV7",
  "key21": "2MrCcCmNi9ym1Qd92QnPaPeaCgz6ZB5RxH1YPVCK1gpg1oSRQFB6jTHJ8KQDiFarFWNZ8QuUaUYi947SD52YbAb1",
  "key22": "mh5mcMdZWTFjqbArsFS7RrCU5YthxjdrBb9oBUhiLKbgEXLHjP4RihYsTQTZA9RFLBXp4f611w8Qpoo9aw9hjA4",
  "key23": "6uipbWDReCHGpiXmD3KnvCZ3xkNmicKw35vRykK18vz8bdkQx7rgzhDAi5jXtwsVBwTruw5LDRB8DUu3LrKJzP7",
  "key24": "2MhpbSqPda1pkekNiytVCVS472yJoyt5hr5AQ8AFDCmkthbfcpPHKTDNh6pFrTh5ZemU5ajuaGk1XDxNDxG6o7x3",
  "key25": "5SwUssLiTVBuex999btzBJrtjbPs81B5HxdxnTJdGaQiwuaJS6wdJthKArJVXgmSHR6cV5Eg3FvgCbcH7Foak1F8",
  "key26": "WPb881wYRbXqmzau1yKHcZjpJxZS8CB8hYQkDGSvQ74gKRbcvaJGLEuLSB5Am24yy5sPqzMgFiQBezM5RUx4dJ7",
  "key27": "61GYmjQtPqH4hpCHByjvUXbj857eUEUz2ir6J8sA8XmPxdw4ZUEGxKN4MgftGsa64MJBuEGpDJSA5eN8o3fHdfBL",
  "key28": "38iYDQhKxpmMgZHwYJsSBLETfbh57KdEvA7judchukwuZDixZ5EbS5ZpHCSgw6o16AspZSo3B9kzfT9DGn8cME3i",
  "key29": "5eugLUfjKiGgDNe7FC12JyY3GDSHeh2H3Bd5rTBM58Y7PMBAA9mUL63hfufgEU9sggudS6qPCwE6eqTuSrmY4T4K",
  "key30": "2BjuvZKA38L4EQ7a8WcuYA4F3eSoGzrQfhHoRoj3zSkVoNpedMPoHcUCkUsYzTw2zSxZJYFD6tBesMup58SZMMyn",
  "key31": "3cyKW32maZAUjUt3rUdWqZKwWv6Neyi3iAcTnjoTyZv1YCEW2Nn2VgpyS47MEqE1Nmozp2cgH2JuhgPMR2A4YQnD",
  "key32": "5LRaBMq44kWGnuipT514cVitHHF6zmoohbENnWALrQkDz4a2XnaQAgtkXJMb4j62Arab5zge9ALGThjTnixLEKvG",
  "key33": "31WL7arCgCN2MwFr8c4xvfgc2HxgwNz7WRkFyvGX3dTrNTXUs2i5PRapjqcH7aNf6cpnDSUbFdXcdRW5ZH6XyM5w",
  "key34": "2UK8vYgAvnfu2b7K9HsHLf75DVCxWGg3z4V68hX5YkLjms68FSJBS3SxhEaMJ6X6tLyv8q7KayEbB9MpEje9gzMA",
  "key35": "3yiUcZ4jKi6tnqrH2PM97NiQp4cqKrBqHSxPBbpgfi6TWbcn4kHwiEvYKxYedyp9W2WqRQST2LwVxpEoJYNavPFr",
  "key36": "4vb9YkDkzDAuKjcqaKf4RSX392Fgo8gc1pLAEffCkGC2ppEWeFPFs2DTUzpFaVmDnkbKkeLQJPsUsSCmjsHEaGwD",
  "key37": "5WmHHk7x9n1kAtfRihBc7NtxoGE263ehg8GnETXVYJxZW63HKhdfqAZh2v629WmrAH2MbBaUGUvemjM1SG85Wz76",
  "key38": "2cgd2VoKLRqrkwaQ31T4dmERz9d96FYdisKC2tNiCq4fRLGpc5E3CvG6TPwNV9H7jtF7ZApnqUb8j2QB6QUn7cdg",
  "key39": "4GsAsfv4Bkie6EYdi2eVBtxDGtxceRykDwhwd8rXLwTefKMFcvpbLaD84S7SJQB12VKBRbEcvtWFS3NdByDdJDPC",
  "key40": "3fg3fu8Q7JuWLzB6tmx47HnqWuocVKezkEgmQi4xJaEdYGJm1GR5RdVF4sYNHMqemtzXt3YsFD3wqPzU2E55UZJ3",
  "key41": "5i9mRJP4ng4STJWmAh4ejdjWx2HrFJTUpGTRYxJPKAby6U4Rmcq8LKXYqWd17jHQFRVAfiETAyyH8r5qtUzntUAR",
  "key42": "3DXMHRabQ7jEop1bEsa69JEBYwJVUje8UJauyU2Y1UqorJrop3M7MfY2DQW63CdMuvpFU7rNLt1Kki1ty2ajPqNo",
  "key43": "cxyGv6XopYVwuMMDAcjeGKcraFG65M1KyeHtHGwfeydrAaV3FZhFSBxbj5QYDhgYa4MPx9CpmefiCEdmJtPr2bC",
  "key44": "3xyohUNZUbfcGPXEY2F5tN6CHj8Tv3Q6ZBerL55kjKo2pNcd86gq6egZEdSB6bdPZRDvLuswJYdAoeDVp4aCbkT5",
  "key45": "3HhKvHZtAGZPV3qKAe3ujtxmwaAPN5PDSQCfj26RocBaDYcMLdDje8NfFY1fZqnXqxoG9TUyW9Yec6p4SsKxaNNn",
  "key46": "3bC3YqVkeG1E6dFdgwo6V3mZTGnjpCbMU2WVMLAqwL7UB43FaseP7sHRqfQ3noWc7QJxm36Qe4QYJJ1KesRptFVp"
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
