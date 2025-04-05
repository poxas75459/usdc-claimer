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
    "57EDDSk7ghKxvDxKRZWTaMQmdw2aWufBM9R7g99eqzZMoLm3Q6Z25jjKEeKihvfjCXiSHj6Pt4gPCyYJzwEvYGk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aqab3dwmqCRNLRTTPGLpUbhqpfgX1EQZN369kfcHWMbZzMph6qU39FwWYXHpScup6qxiiujfTchfEdkPma3j2Mt",
  "key1": "2F76QohboVY1kDmhdyCtD7ZSqnFHjdeUaC5KwgwCmbWqVZYw4ECRT2ud2uh4YYP31jH5ucp3no6LcZccGURzKs93",
  "key2": "qE42XrK1sggA1dE43cm3TnoAA9i9MvKPS2i6bNK1J8yyisiE58U5KdHWUDKrh6WhKTCMnAq3MzrySYMQVenaNLP",
  "key3": "67MygkwekKUot3ccsp8BhMTBBJ1F3YiRtodT7u6R47WSr4xFG42Z569VGJqQkca8KzGWK72XyEGqrWi8HB5N2K2B",
  "key4": "63bktC6MYWxqN129HCBFw4ETWThxRvj9CJNSgFQfABc8WmutA3FLcqcYNEFrEPdZXaUrSmRfoVc65zt3ZpeH1cEq",
  "key5": "3yiQps89QnenJgJY9JtvT1LuBokBxkyVNuep1g81DiH3kWDcVHzZ7ke447WqJEQdNHqgjjW4EptKkMDC7QBC5uuC",
  "key6": "4Z6t5dAWWetzMJdrsevvyEpZXWUjYjCMUwbmRk5N4PJz5pZ3wTA3DYfjeHbYvqejFboWCxkNzS5HYJtP14xBEokN",
  "key7": "5K7tAh3rtK155pgGL32eHbxA1pvQQW8KPdnAk7YvZ4XB7FHuirAhLSp1cs2QdkCRmsZDxwhcgJPkGo2sWvRScUQs",
  "key8": "5HEbJ4Gxw3M6DrbFfX7hwBnx7NQxb1ywEF5hPXRJtFHXj8txu4bGrPgHiEx1ic2VxQmfVDo6b2e14axFwwDjBALp",
  "key9": "4iDxgjYLM29ssUT6csRcxxUXHK1qdPKBdhTWJf9M8gthGSAhFEsVt1ZQVPyTvgHgXV3K9qqPFrf1wgkH1w6gmkgT",
  "key10": "2zDfjJ8Pg49HmzULtnVySDPkcWmbbfSTZGc8ftZNZehkbDoV1QDK4cz4eeqTrFWwWxoZCgVUMDKyzmN2XkntjiX",
  "key11": "5JyzGtuzV9hkdDPm1yRZackNKiPme6ZRAsGqH6QfFuPm4eoLLvh4Et2FpB45NuZy5WDCzGoHgHN9gdLYiEe96grv",
  "key12": "3KRxujheKh8bEWs83EzAZS6B6f8cebxsm6ggd9XTyyres6xRLuPd3QAZjUq5UQMznQEMiKaMDnadHzMrXtyBZJAp",
  "key13": "EsnTfBRPGPqb3xXXzszgrDztc5QJ2u2JpTYYhMb7ohpcxTFs4yyACzStyCPcD8aqPaHAdkRBsygS9BthrAgbXLQ",
  "key14": "5m5kGymEZkPTXgeAUedyFPmijEugiuPSGQHkVw2bof9pNRS8JdMy6NFWj2VMmXfPh7jMoPAQ92a6mCxZ9hrh7Lvn",
  "key15": "4UgUc6st4b6rYZDehqU1UpJvXNg6kKgsP7JQMeLjQCuLmT9DuhWEzGSg5aLjSZ5pik4czi9uzovGWKLUMbf8hnbn",
  "key16": "4kEUsU9tRynsbSreU6QjLfYJNyPcPii55AN87FUDKSzz83CuEi7s7bZcHNhGMjmUzG5uHjn6obi4BzzYsrbfSvu7",
  "key17": "5KcRWJrbXN9B6svyWS8VV6huyjUpowxWhDJuu7DnV9xjTq5fAbGSy3tqC8eT4tC5BjwLDfTC5rBJUXmBCdydhdts",
  "key18": "3yNmjkUAx4sk2HdWd7FMSfRtxXSGCGwnZRR1CJD1g48QakhBSnc8XwRU4TpAHUaBMDtG3bcCny3uw84gdQjXgR65",
  "key19": "4MS2hkX85vQhJG3QfPnZXzKAy3C5YmhwTo6gMuQbj6et8fnbircDGA4tazFuyhUn3RDgNzjQ9cxmjUaVGatuCmWa",
  "key20": "4HQmbcup7spdj42qMh6c2nHgJTmaNHev6Ni9KeittznYJyxZieH9hZxxNdLyEy6bQrzRhoHN6trf4vqVTF3inEEu",
  "key21": "4RjxVBYKWo5bXW55EqVp5Fu2KZaNgMJjd9kCzCBsLPdyeJRKK4wWiX1yc9bYD3gRyoNx5hPxDqh1Rk9VY17qr1f",
  "key22": "2iW3ULqR2k9N9ytXEWR4oVp869tdtvxwSRN7mBJ4LvaCdo8qFbNHiN3jsvGx9qySUwUcTJ98SYrkdKkydFm9X1kG",
  "key23": "2YSq9d1yUpfzUfLBGpreNghCQChsi9ZkR4msutLLe7n6dWxqb1rc2pa12EZeUgWr9nnK8bqWVChpDS86FyR7g1fg",
  "key24": "3PvEcMvH4PBFHNYCPL67MdKoutSfTe9JLzWkJctR6vCqFwS9T7rPbnQCT8QQFwjv5p91XD2QPY5PMaxbqDirKX7s",
  "key25": "2pehkpZgnTcVTtseN9jMLKRZ4f9d4NUVwjvLFtGRTjZDXerU96Hw37KhZqLgHcHheWZctnra5YSckkmqDRe6fLc5",
  "key26": "4jsZrvWpecHReAuCwkbJ6kVxT75xQrzNuu7wgkBXfLf2Gqcfm1Qpicmy67Vyn6DNZScXthNqQnGewWkahavn1KgB",
  "key27": "4SYZt1MjmecWhsxjWwEKUt2xDCoqy8yCcpYqHfr6LPUy8dBbrnchoDZz5C1k4pQe7DuSCKdGFhuTP8LuB2BAzjFi",
  "key28": "5nGBWpzMWNNbpi5c4CrE3vMeiFgp3MfU4ivGdbhknr4pjiFnnz9D69toVBMayBwBdFgoD6axTBNfd2Yc9iw6aKTg",
  "key29": "4hT7QDonbuRJbzBELmACxpj73j1TXMxMGhJmjUfcdo6kVF5Z5uc3oRjHyA4zJxS9mHrJ88o8Yt3gunxUsbGsqWay",
  "key30": "5M2NbLdZaxW28ERggZtCcTXKWnM6F5hPSeynymmVeAFhmRpPoCJyct7LwXmGPYxfAg6txNNoxkALQxuLe6Mh3JNB",
  "key31": "5P5rvYwfRhfDcDw1FJhQhkMxrK2RRzjgTKbQjGMcb4YyNy1KZN2QjcfWxwWG9QmYGEN3DwWMY1bqkppxx3j6XGR3",
  "key32": "3upmszRdPLf4dUdFQU94R3T6ewowvwsigtGtXYDuWQBLmfJCA6np4FS4DqFv2Q8Bbfqq5LTNyba8tpsfVQPRN9pX",
  "key33": "5dqwvvktwhPFkPAJrhgRUqoDuN4QiE4P7p4uQ7LmwppHTo4phcEAK5ZoGoxNeUtLVX2HS2Bg4gpVa9bdAhErcBYR",
  "key34": "664cykjZuuzJ7xpQUdqhshZSTeQnwMm6v9yKmEne6zpYZRujRe4okdVbSBaFYUCg9fKUh81ygqMiQJyjFy7FhBcG",
  "key35": "3KCoqFAuZDui67AhSCUzua2kEuHz4LnMBEHYvaTtsz6yUfj6jL1mH259eRM63GsTfBb4GyaaeRC4K48NcRLAy8i4",
  "key36": "3dCibqZFhaFqiFr7n3XSefN6FkkVq3rMhbdNgNpGDjMHd2Vm9sNABFMgibmKtmAuWpoc5n5pHzDEkdY74RJKpCUT",
  "key37": "4SQL2Lx8bU5WnkzyCyhTPDWycoB5WxUSuyMFbc4D8281j1HuTTLfzSv63UQWuriE3iEVvknmQNKjdsFeBVUjRRFK",
  "key38": "33mXShymaTqqMn5dBe63KsbNJQhKak6vQ7pMdGgoH5mXxWyTGQch35zV7rJUEZXxBXyfnAjoegHiufAzU4E16xGh",
  "key39": "4aDuUBNUQ6F3t97QCAH9QGTCBSzfL79em7AhyT3dwoDNbihUCMbjkQzSo8NtHXWPsZeNFrcMjcnyeHCejW6pncf5",
  "key40": "3dT8344EswsWUqc1bk9UJCddCQsbykLMCVmKMyV9AuWvE1fWY2Ucyp1ma6MotEgh9csmdPK5GoTgLngmyC5axhpm",
  "key41": "22U1C8kwifxjExzKfGymXqHvw76YbeZKvFF55vJ39BmJzWEPothoBVmpi8g5q1NnE55YosVbhd69DgFoYx5CSv1J",
  "key42": "jWvGqnBJvA8cyZmF9EZxGRUEgN6Wnag39NBYBPdKCeErQsk8TAQipCfjHMxVA68KVXVwtJ6rPcKpPc9PRdnTwDD",
  "key43": "Akq4cBYisFAsuK1UscGXRVZJJGL1CD6V9G5QyrEC2PXQS3hfukejNZ3rpLR9xU6j893HvEdkZRUuaRkSr1FaL8T",
  "key44": "32zfhj9Ycv62nTfMh2Sankhs3QzZjDFuMfSfxshkqw459FHXKCzSxXAHCgNLrcfQX1JQF8UWXd4zmzBH3DKrAcuw",
  "key45": "4XXS2ZDW4k7zuXgSoS7hs9TBpRJyZE9SufLwfCbaj8aAf8sKzQS8Bdq4LpaTZSd7HpDW5BeZkivtZPvWWcrvdbpX",
  "key46": "4ESBJrgYWSdgyHmQLfebhTpXwdhPJQtqB8TL76Lv4hJxWwfgAzj2E5Q2znRcEJsr65HSJP1vx7DfkcZJCUcAaFFa",
  "key47": "32jCDTQN4NFbQKqAxypVJ2oNFCkBeys6ZZM1pgnUF4EDPo67gguzykRjbwzsm1PtTPgMapCUjdeHzxstFrdPxzZG",
  "key48": "4Ce4TZNx7u9rudunVfcXnaBJSNHr382Q2fda89ofM2YQKfEbxi5xJkSSNziHEpDFdTYqPTxyWNpbaGgLTq1WFEVa",
  "key49": "4bwquNuHnD1hyKcp4gHQ5G5oyVqkPiiWEaE32qMM33CPEZnZJyCuko1nhMhx88TK1zRgQDpdxeH8DReKq22UQsHy"
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
