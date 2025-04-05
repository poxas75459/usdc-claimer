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
    "2sJdTeYZJydVVeJ3nuzvy4gG7G9GCnpu5QZ9pTSfMjRKRSNPeQhMpTRqu691HcoFaG4dwrLhFrxHYv2nJ32uE9a1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zEs5iBF1LQymHSP9ju6fCYExZm6oVWax8oWTtkHytfH6njmA47s8sBSJvAi5gorJdEGp9K97s5zvqPAtHTR5AFP",
  "key1": "4Qb4XjXpY5J96UoFcekczZkT1ZnK17qEsABjR5v1EpHnAk4jQqrAD9YDPRwGCpafQee7JKHo4uBQ3CajoFPAFiDi",
  "key2": "5cWzxwfhVzJrrnrPKi1U8YzgCx9CNmDb4JqRbSn4rU7R1Pc4ig5NQG64yAWYNeRChf1Te89VvcexGmRc3cKvH3P2",
  "key3": "4LijcGtEgyS4QBx5Hxivoo8kpMnXSMz6fTtVAfVUP8Hks8WQXXmGHDkRs6u3GiqW3rcVRYwZq5wEXVfzFjLJzMS2",
  "key4": "5EousL3vqFTcV1qiyQjxxGSzHgMyXSWv5fzrgAMMY4c4LDf1y1t25AEUn4Lz4A41XqJSdnGH86v4aDrMjSLLB3DQ",
  "key5": "5H3Z2iHJ35yQjnTysVFA4fiYY7AECfm8PSCwjbmAF37cFtLHtM8bvn7rxQsSTrG1LCKWTBvamYUGamCjLUhQZhsY",
  "key6": "4gHf8CT1s9SxEcwS5hq9fbnwy7ChRqJkRT6u46fhUSESxQswC1Z4LJJvLTrsUHQcnyEL5wyZQsUtCRB2XCGnT2pk",
  "key7": "3HyHEgcdisAaLiZyJSCyL9wcHs1suStXry8MWZaTftPEQqvzV7e1h6CMPGUboYpxt3Wu5C9HZzW2FJEvtrrhDwX9",
  "key8": "4VN7b3Fj68PwoRnbcJo16rzeyzo7wsiSae8sRKPVSiNm9EGABFx2FGqUXJBA9aqtSunZTadxinXGcX72Nkyx6xh",
  "key9": "2Un6Jeb2F7GZ3bqPmgr1se5Z4z5usMGQSNsmR2iAWtatAw1KEEawonWAD9R9zPFn8nLXb9e8afCyX3wEYDpYKhbu",
  "key10": "46TJgSTF8shAhu54h8XCvgWT2uR8mXaD3b9Gdk8oPYcUqKiMxxRKxYMRQJgBBMUpz5d73bfTzEd3AYSR85bHwn6F",
  "key11": "PDUpmNLiCVHfEydj2ngyjiaAEihuMBw3CAcK9qE9fNSGNHNHP4nfcXCgLt9LvuNz4AHiufagSn6kPRyMJUgk5Bk",
  "key12": "2jKgW5xfuNinZ8VJmynF1WsEEmLMQQRdDZPxg4PEG7EJZJLKsrcpN8r4zTwv61bkU14R4LvV8RZNcAbN7MC6mYjq",
  "key13": "61uKUnAQcrCZUpeaatT9L3buZiQgs88WaYjoYYyRB65pXy9k937dUTgxRH8LEd6rhvuXMyNd9Lo8MM4KDrByb7VL",
  "key14": "23VhhqyV6UZGiohKigSUx45y1MVY8Qnu2MNA5bpDmspNdTxW5jLAz1NBomswPQXWUwHZqpB5bd6buTkAU51UyJW6",
  "key15": "36rdSE8x7EZKE4QyEq46ZA3t8bAHxkzjLE2dfFdRg3reEaoa2QSirZxpQoRYbVzWa7qVZYcmaEyhStcQCMuQCzof",
  "key16": "5g7S5XfpEAPRdXuM4rRA5buLzU4ahBmxobngTZLvUfargq9yYiFLqjfHN4tRkGzTr9WiNXY6Ej3B7GKfFBhkVRgq",
  "key17": "5YTim56ZJzkgUGBF9Ek2cVC8FqPHt8AGm3AhhBWkaPHxKwPU1KDpD2KJ9SxB9obd3eu5Wq9rhy6FiSHNHYb1MbC4",
  "key18": "4egydA3z9jgibNw3jGjs74zUsY2hui2A2Ri3zfN5W6GbWEFiz9Wxz9rCLjEQ8fapBGdJLGreADqUbLqGDGVHdGRQ",
  "key19": "56wmBYQ2H1cvnpni6oai8jmRyGbJodv7XioveEzeNwASMpQsSgAqNus7pFBVbnirzkVz57QatxqWQCydz3ne8v2f",
  "key20": "26dUReX1SbkmXLzqTteFDbWtfiLKg7z8eb4XrQQT5381CKFuaJNkvzkeAYknxEAphN1vuCK5HqZqvfYKSSxDVS61",
  "key21": "3VfJo75QRff6smfMrNiLTAvkh8iF5c2YSe1c7pmDGN7iLC1iDQUtZnSWprCCMmf13uhgJmxrPu5to88eUGeyQdVv",
  "key22": "3hxSMiJnzaZejLSDuMRRbCd3pEiHuuFbyRpBpXie75gDTKMpCs98v7AMbhhsMHzKHvUdBKHNNQwgrZsb7fE63rSc",
  "key23": "5VMopWLD2n4yvuosskR4zEF1nezxuU37Yz3SgkHZ2agY2RVHycLojpH3cxCV6YY6W1eT4F8ZaQQLeT1ykeDiwhsQ",
  "key24": "3AyMn5kWGTiKWyqMqGRqBHoevi1sS2HL1TbhtX7Rn4wcLgmbvSMmsQ6a3n1ZJ8Wxecyp4SoUyxes2RNU18UEwXJn",
  "key25": "5FWv1knHkquJT6Mer1o1Hmoc86Cn6Xj3mTWQ38oW83f8QwNZnipRJGhhoDZxZTH6m8PArrPA5dTDDhexqqN6gs1X",
  "key26": "CpvGkP44Pch9hDo8DuMLRWt3RwCRhVenaezencDpaa1VE4vRDeQxh8o8WFvwgEhRBe5YhrTPe2AEbPMWGCn7mmJ",
  "key27": "3Cj96d6itycytRn6j9a4mnk6q2Nig9hwpfCe6W2sMkaFj1rKk5YqwREhxnZFuRWoTxMSk1eKf9DsqDuu9S51BwoD",
  "key28": "3DQMuCxN3LcNdxraLLuYBJfpDH82bi9mVUXvuMrr1k65FBGE748nADeTZh1J4U9aft4mS81GuvEcPsz1eMsmZfdM",
  "key29": "4ru2fT8qraZ48Br4Bxygk8dAx7kSxKruuifpeas6v9rLzvFXGA7Jf4eEHqeSjnHfD18fQ6SwhQ57skjeunwyqTVz",
  "key30": "2W88LoGZb1MDQUf87e2TYXeryUWaBjM4J3tNqteZgfaQLLdweZL8hEvunWCE8vcgv4vHMQ126nGmSwkXqQWoooRC",
  "key31": "4UaPWQSHvYs5suV25XQLWqkfAX5SutXdRo1dwsZ2aeuedtzRnS9MDLb4PoHa5Q2xcS7sPvLaJGzpeV6rXC6C897C",
  "key32": "E68ApRbUwAEU16udfgboJd8QnJN6PmsHkgz1ujZYfaDJmAtUudsU2pKRnnTsbHp2vURj5vB97iPDv7sDvUrnHgz",
  "key33": "2W1SXh16gXcZ78QYaYUvAv8zqKFpBUcR9gsvN3ZNgLR7njALGeMyw4oqAxEGhuW8G9mEZr7kFfM4G2HWVQHPwn2f",
  "key34": "twHUJ1jpKUvwJK3Us2QGizrCrqS9Jwc7v5Jc9BSKarAthDuv4cXqRNUM8MhuZHzESrbKqbPknRAqYSaRJFWrwsv",
  "key35": "3PYS5ez4emXw9oQD5P4DwTimbc9ZzNjv2vBQtEEmfD4uexquAh5jXwvVmmzkyyw3vj4t5eR1ZAUmqmGV5c1jLif2",
  "key36": "3GcDiUrpvEEJS5rCsEkkx9LYDdqJRNdr9eAiL3nfD4M7ZdT7eqBDZ5TzHbFRrrsAcr5F7rHigp158oNnBJej9T1e",
  "key37": "3tzGKzFjgUeQHy6JaffAkGWJRS4TTqVYGKnYPatVw32ZPAhzyo3uwm1BsAQfF1T6kBe8UdjgRQjA2iK2JeybHWxW",
  "key38": "gLyVAa1S1bcQfLBELghsTMRoBmsqTL7kozdyWtXQZ1ZA5VDFxfW1oz2jfxrLrC16RaEgMVnnuac1kdHbTzXUu1s",
  "key39": "37cz8jEqJSScMTXhxSLyvF9vW2bAMhPJdwe8M8Ux6DaQvdTPX6hpLJNCcXjPmfWkWd15DwrgW4fGMwE3wKeKscYT",
  "key40": "4zYpNF6x5N41Cwtwss8hxFqMiuJgUM9NDRHUmpEV9ujmgrr5eexizzPJNPzCrCeY8NDrEajtTui2ji7LYbhYjKsf"
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
