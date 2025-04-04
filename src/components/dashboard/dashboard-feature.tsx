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
    "2NptQtEE73MjH9kf2BSpmqz5cR4RgHyQwQVSZCnxoJUCJEx5wN1AZ9dE82YcnRbQTccKHVRPqNPyTh3xjGbf9ER5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48QZcyxcjbxqjgdf8Dah8gwkLRyidUhoNW6jNyHqoXKEPpduNrWxgpaajWo7wgck4i8MK3aYxdmxvHe2wpDMdz3y",
  "key1": "4cGQD54Dyv2jh7H2qGjyof9tYBJKPD9BqJLyizR3dxqsuiWnp9d4hg3Mi4wDG8aVSS6Dv1mSp7o1BiPusaYSbozp",
  "key2": "5V1T9ApWVb42vjh6mUEavuXwbBF6vpSakK8W9dFciMptTu4JYPd6QkcGADmUkXN463f6DTaXyedTHF3WArZ4wWCf",
  "key3": "XEEs88WE9TcWPY9W8mLUMEbmNrX9q82mQVvsVwp4FM69sQUd25SNzHAP22VRUiDthX81oDRLm1gjmWh2yuh57VZ",
  "key4": "4wa37ejfP8B6Wv121xnhw5nUEBgGqeryCvL3CbcXfrLeLD8EDNh73V2h9UYfzPdG1MJYdfRAZhEsna26xiX2votH",
  "key5": "2nvWnuZDt8hnSiby337PT39PTU1vAyQLqPFptmM4eyR5LFpEE2aJhFndsGVMbgnAq4iw9cVSpnqHD74fuiKiKNGL",
  "key6": "aL5NZR5YDGwty1DS3cBcPUcXnnWvuE581Uv9J4PHHXs3p6fC2jXsJKVES8SPGLuYqQLiwg1ZfQkAkbc7Rpb9WnW",
  "key7": "3A9VhCsXujURfq7Wjg895AeLb8vqwuaTbheiDyBufQNkSk5iYafGouCwkRJdS3WAjwXE2ZWn58Znx4tHeyPXgHkf",
  "key8": "49yA5N3o2YJqxVgJXEkTjdLteAbRrWAqnpPKpJAgLRbYNrwhGix1Hm7gUgXwTTm9JS6KKTjWHufjgnM1BLH5Z7zt",
  "key9": "YAv76gg4r382osw5pMnsYroj2uykspq9fok6H6UeiS1KEsKv4zhz9yHQeknchLrfYvFgbVTT1nmpx3s8MLUwotn",
  "key10": "4Phrg5bm9XUX5wWFgg1yJnWkxrFvCZMHpR3J4SQn9dRZ9UF9NM3EGFU7KyzuFEUPHHRs79qdUf8FEfaxismfu2S9",
  "key11": "2FJLVHom5o4R8NLy5BqTpgxcy6gnF6BzxivQcKxKNTUdu5oM96XScdTgwdcqN9KdSn593CVq9yKqyeAQpo839SBP",
  "key12": "4tLHPTqXATGgVTzus4Heb1BFV6mwzmreBADzYkaVJGvXNUtvypwrdse893QzsQ7shGNAMXDHdKAfdUwagzGKW5XT",
  "key13": "45GszqNCpxURBeRPL6Qo6xUSH5QwWiVtbLuY5ZojvT7uSDKH4V4fNsMcH9y7JeduVfSdxs7z7TzU8qTexX9YY6qC",
  "key14": "3paLgmUedQJm231eYe4qw1k2Thw399YaB6AHKsMpoBRjbcHLbyZxzMzhSn8cJCfPQZJLhKZarVGT97subMCd3VMg",
  "key15": "5RwtjZYS6yDaidc4tz5nvtYMYs7uGeLFxZyf1bZEqY4pjkCXt7wBzTr26mp1ALvvnJnpTWEdnv9tzFffpMi97z7o",
  "key16": "2joRGhHrVVGnCcnaYp9k7ZtBLSSa24bk57c3snPRLQXE4y5SpB3dzN5q32Hk7PkttANzAjSBb7k7ebDeSfE4Kg4u",
  "key17": "2x5VQ74XH6bzcqsWJDe1UJKBSkiCpkvvun6xrkAoN2EzW49cnmR5Gn7viZmCnRdB5FfY6tjMGHY5L1CF8tBcEowT",
  "key18": "2dvMGiWPRp4MeowjMZ5DM1MWegxFyDroXEdXoBoovKEgnD7v3BFmZC9ySqyHw4fQpgub2DopX1GtMdpYaV6e5Ujf",
  "key19": "3PbYDf6jrT2XZi2CJmDN6NMuhVJ69S7r18pR2wWXCGocvL5D6eyeRTDTWR3AFT3z8CwJZ1V5fGpDTzMv9pmi9SwT",
  "key20": "2xzM1eMhkZoe8HXCGuCBKk5F8VR8iLLVKJbRy68JreekvsBAArAV3ST8kCBHHJzuKtJJ46AFxhAStJfdCfvmA8F7",
  "key21": "2HDUH3TCQQ3Rjs4tnA9BZa5LiRgV87SrSwwGiwnvrezuovFX7oJkthfy7nk2ydVrZ7eCHXxfF6zsKABsDmsfjuGc",
  "key22": "j8egAgd82GjrQJLny6GgwgEr4ncznvvW6u5MttSAUwvnzR1QaTAMFEyLSmDPchTDi1m6aGUy3ebxAeyoVdqasnd",
  "key23": "5N8iUwpfuuUfDAjHvEoFq1ZZfzAdjXJFY3Qmxc22WqUdRZ9qDrXqPp2J1pPTnLCa6vNPfFGHUuqTsE7wdE4kyyzp",
  "key24": "2mrFF5HtP5kh3v7tQ86HzbN1g5JwWHpJvZFXVo9W3TLnv7UQg1Dby3LknA44V7nwnv4pM8pv2zQ58QZaC9JPzXf3",
  "key25": "NMuj6Ez91DrQhzoLMuKuc3xZ4vx2SajHcmiPNPnXbanRFmLNF35kq4GyyT7WMviYzzWtfBVBFD5ghbYaHVbYcFE",
  "key26": "53DHidhsMx9gRuPXkfQn7ysLiQkXpxSgLqo4TJhYDKv5eZHRaH1nMcJW85Gp7nUCcwHmMJGgLNwVbUDkEtbjJX1d",
  "key27": "5yLXg9HGwSfrTaAjSPc3zSrhyBf9j7seJv5WoQJP9ZwXn9vXMkia555G6xjz3b5HCLFsnx8wCmV1p4koY2f6Mn5d",
  "key28": "4rowvC8Xa591tqhQSD2MBi9pRYsKZj1cjJrd8BzXsZnLYF5S2LDMtotQoy9PDpWJTeZLHmFDGQs56VV4jUYoVkCe",
  "key29": "4m5quqQQNuY45XzUnAGMg3KcZXgdUsNFBTX9B4uigDvV2ZGW8pPeEneYZyxTPeymNPHevDYJrd5i7UA82r2zf1RK",
  "key30": "5euJokdTfeN1EfR3b13giLSx5NuUiVnsStfaTXg5KSZN7iCEequ6t85qDd1kVrawkyjU8Hhye25sw2p4Qkpssoxj",
  "key31": "67P8TzW6yqYuZyNCavukDNgvp7GeTW7iZf9v2uVSrTtioE7A9xdTDqh6bp8nfdKsuCK69Qb4crUf8JA4aZ3wxEw5",
  "key32": "wVbcDKiAiWD4PzyAJkjSU3uaN8J4nzGTtMFGpYPHkgAB3mdmU3WNmHLCF834tkXtkWFCDQFzMR9gNY8EWZBFUAy",
  "key33": "5A7pYbd3wxnuVaQ6CV1mJkXi23fgAynZLzD5WfeHHd3qs7kJcJAvW6r9UWgM29jpTPEuzu7mtNxSCTtRzwdkFeiw",
  "key34": "36G6UNR4U4uF8oTw3vxgzBfP1K6y9gC5b4c6YZQ17sJTDHc9W4CkhGQLPGbM8i8Mg1cS73nDMnm6CExhgynhy6mK",
  "key35": "4GgstFQB5qcVMi6B5BBApZ3Tmk1oAqp33kr7925vbNbfiAZTDQeS3v73zqJStHjrpxLYx6tv2DyALusUjuiZw1VN",
  "key36": "q33PRnbebAE7CsdL3EbvtBRuuKvmNT7YyumsyYjUtrriGHwD9Q8M6EZ1eSHhSrPuzCQvDEZpq2TqujHE4dcqGxM",
  "key37": "5Cew6bVRTuozzxgFd7VEiHwSRds7BJYoYVF6MTnahKxrMLHbdv7s3CvKtE6Mx9kKGEcAnFSeSBmtqiTvX4ayTmSp",
  "key38": "2wGDggoMwKmUbkCis5M9yTwiwNPQaSRdyuA5QAPGxn3LsvecPY57gJFnUKutw6tUpfiJEBUNoXUWvfoJTVEx7qMu",
  "key39": "2Mj5dA45zmi4rTqKmTypSZcN2igC85k9iC3JrWPCnDqFWPJNBufVMEp3ypSkX1QHzQeXPKBLzeuc7cUZ2vxHr9Fh",
  "key40": "38yqHbAcU21eHURBb1ZsziujpwbqeuAmZeZDWUBovLLCmFZekKZqc3W89CyuKCt9Xj2fr957rJGXJYE4T2MmodeN",
  "key41": "2hzvm9ALSDiAvTx9fQ6wx9dqf2hL3ckmYe7s3ABSdr33b2XJ825Ef69wrYbYS2HaR6drkDm9hHAh6o8YmE52CxdC"
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
