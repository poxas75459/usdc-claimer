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
    "28YUCgRFZ9REQMS25wu2up4TVjsfK6BsEoXZAv5VSupP8tqp1KCGr4yCMqsigbJ4j6beCtWGBRDxQgpLrEVYim8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KwK614k7kUzBU5B4VLNS7N5PQcvDnLc4yD69eZ576WXAio5qzkuHWNjS2H76qRPLtWWzVENMaj4sZCjk57B2xyi",
  "key1": "3J4BapgPWu8JNqAwqjwahc9b3r8TAsH71ms7NQHFvtPYJCKiUjjzCbBheqM4EagW9NcqDr3LBoa9mTTQuMzywH6x",
  "key2": "39DdoggFLEsa5JcVh7Hgo6LNvNTteCbjwuwYo6SocoBcGp3936yJchYFKKrbEUt6gy81wUW18Kz5yhDHWkJ8xJ4x",
  "key3": "4utF1UTQfQKmziKapJuSYFhDE2k8UD6MEf2dwFpSAcU8usTDiKKsBstx9rP7ahTLTQvYXM1vAe92W9pWR9JJ4Pey",
  "key4": "5GcbAu1LyMu3DiBAhJZE1XbmEpb78n3efSAEcModJ85q3cGkxQD528u9D3eH5Q51uA2m3Wp2XDAouC2nQSCnifsj",
  "key5": "2mescC9macjjKSH222nFaoKpFo1XoxJMhf1pAHhKxDT8nwDbCm7Dk6p55ni8S5gRHJssycuarHhhonHUeTBXLXJC",
  "key6": "q1YPd6vvgXcQwQSvKHpeeaRkXihgnBD8onSnULWvMJ63sJMVkBpcFqeBwWeJ5j2RaPKcMQKwVQCTv7L6qKNiDBh",
  "key7": "5jJXNkwTf17fjcCjz4WfXHby2VtZ79wr8P7KdDZT1rpzwb1pUq3wE7KsnSSn9QvKHtjzNVfAMt6D6VB8jDYoHWUF",
  "key8": "4qzBRTaSbVN6rFQPFxFGx5o9nsrucUpiAYRQPZRZTobTNJe9wmoNucZN2mAkHkm8uLTsE7DyWuXP8k42cvivRWC7",
  "key9": "59ZkQ77iccHWqKrhK7QshZFVbyRRyVHS7ZAgBGQdYN7iLXmTLifGYARCARLRGCcRM3RE6xAFNLTCagnDG3kZSkh8",
  "key10": "61Tx5vwLAHwWNh9P7afLRY9gjBP8Uy3GR91XV2AWbgu7w2AtsGZYXGpE8GX7USGkR8oaQQwc4qoskkKzRcp1inx4",
  "key11": "3m3bULnFVQzRYw1iS6NCPmJUWnA3q266hgB6XgjhutZUg4869KYMKnfKiGtWPCtmFPmdnFH4TkoKRmMhLJcfSd9T",
  "key12": "Vyvq9RsuMfCtL4pwicZcdjday77vFT6CtbAb8VsJsFuXd1E2r3V1ExgSiQrKBeDZvesX2XdALRuk5Fm9pwVnwG6",
  "key13": "2ieJ2EQa4Am3URWPNbUgat8FXk1LbyBM6acz7jHA6GkMLRuFtvi5rftvBLBVQveTE8kEGQ4HtWZtHikDDvNefjiN",
  "key14": "3oCgSJSjiVh2JvFA4toqkdob99Bsjzv6c2SPhhMf4h2zWypwVRh2kvDha4wpQtMJuzvD5KWaWL4kBjkkwXVLSHek",
  "key15": "2m5bVeZwUGTLjL21RcjADmmGKs5i2fQb29rq8M3Jf97c1mi2BdNKQAJGG5yLNnAds6XJDoQAX5ueGs9LRy4pPbMZ",
  "key16": "4HH2eA5k95vGAQg2LMtjsro5BV1SW6qhKVpHJQAs4PB9k6WTYhJA6najDgU6ZiJz3US2awhKnxxtvKQyCUVqsUQU",
  "key17": "3Ua8K62uWLPSjj29yb61TgVfB3DsZsGGrKXc4BwDhBhXc8v5DUbXLf4gF5j5rWxuPGSCvioo68hsZp7cxVJtvKiN",
  "key18": "7GPXrUzspfZGFY5ND956mshKeG6X1W1qYfcasWL4RFKmTeC4Kznt7HoDTNpZMs4CaHem3bJ5bQbWnd7KFJ8yU8b",
  "key19": "4xRiGSYwBfANAV4BNt3EnWnSvpZwDApDKmExNyFCxjwicVVz7dWbwgJWdMAZjdAqYt4FmgQAmwcYwphijQDxVcvt",
  "key20": "29rx4sEL5uWnrRoyJ4uSVu1n367JUGH894fR7AjG2A3aQrxLizR7RtjRTCqi3GMDaJYJwPerR94dubdUeVjEK3YV",
  "key21": "4qekMYgpcyPzV7CkbS3ATJSeRfE3KwsvESHxa7BLEdXkpFGV4tEoA7LMjU355t8c1cbuHRAbeVo9r3GcHqeSDxdE",
  "key22": "ksNUE3wB4giZPSSMkbpgJ5NP1KfVGLXnBTdbfmTLbgVqysiX4ajhNafy9ZmMVS2sMmx3yf3DmUzVQoQbsoZucN9",
  "key23": "2b9rVsyY2spK5yKz7sjBAojhKsEubrV9tY9uECrLKLnvcaAJLQk2ZJLCXCwyY9QUr9zG3nvWAr5sKpbyZGLDEnbw",
  "key24": "5VQbb7arq524GUFg7Lj2uTZbpU2XhQvdJH1RwRhDGu1zEn1eEFvqMA8g3qefgV7CDBQvk8BcR8VkQ3qoapvy8vxb",
  "key25": "wW4qboRQ3SMmhsyf1v73jco84NZ9nCsLJnfg8NKU8rfhr19mS1MAdEWegf15EcasiEdvxzmgDZGkRNMjTbACNN2",
  "key26": "4jZ8NH97S8eqHiTm34boRjSMM2pASRavfadJsHpg8o32Q5pUqGUe2dsbp6A1LoSAevtg3hozncRSHdPcnvNJG8q4",
  "key27": "5h7gd4vCb98ni7CvMLjAZUpdDrXP3VEREffcSVap17HBkkwJm8DJiRrKDQSB2uDW1czkMtccRzZEnMw1Q7SfXqmc",
  "key28": "55H9iaty3wQ87sk7ukcGzwDvN82d9LS6JseRke1KRfh5gi3ZYJJ8iC5fgeCHe27nXMzmsrDZAZ5Xq76z1zJvD6Qm",
  "key29": "2zGcv1fJpyMz19FuKyvAzBjyAvzUeG2aSVkZmP2GoBBWDwHLhesV8EViJYxiuUik4oCHTBrtBstY9ZtWL8NWMEao",
  "key30": "2z7C9xJsnMS1Kgx4KYWaVdqkJ95ZaCLkVRYpCafbq7xKBjFDe566k1m36Btc5mJEL3JDHGyp9Mjcq51n4JhjPAsZ",
  "key31": "49dt9W184shTTkfT9YkxMc5Uk5roFZ9wYUV2JrLWDqHSjHxefP3jjyzJhDXg5t2fbsVeKDMdpcpBm7tLikKP1LXZ",
  "key32": "qzFwGqAaJzCoAnp82JdiagGRbLzVHDjxMpMg6k1Qj1NdZA3tR377TnPaUhPu7hcM5LsR4HCRCya7nvtWZz4vbVy",
  "key33": "TADh1wrvhTBWeBH4U4EYZCbXSotCKRECCd3bCXbMA3HXfLxwnHyNXQfLHVkWwtpFUPMU4BQfLAkFfNzmqdcaPJc",
  "key34": "3jGYcALwqyM8t2go5kdRJy4bNW4AaRh8KVG1cdjDLmd2NKYEGgnfYzp1rzvQdvJfWAd2TmjLpNH1Lfa8cYhEsFpT",
  "key35": "5o7i1ZuAJNgvFsox1U8iLfn1Uoy3DAUdzemPsypDRrTtdzcUAbvSH2cgTKeNVGbHQHZvjGQsnrsXPjoEg9hqCwLP",
  "key36": "3GM9PArv7DbpCtyK5Bc6TtkfzURa4bwe1vWwu3nz3mjCGsatWnhxCpt1YTxxYpRwf2XPeimY3Qzu8g1oRSbCSJjK",
  "key37": "35Efw3wxGzwnSbEUDhzEJ6kyAxmk6FNvXUYY7aM6tVoWJ69uJdkrYNH9w1PzSqc9zGVhs4MUuYbBC1n3X2tZCJw1",
  "key38": "4yh1awmWCWYAhMmyLFmcRt5FJzruECSFczK469jqtVyEnaoRghSnne23JEL2ixVY5qb8qwyciVpKAj71fWu1GJXa",
  "key39": "4YNBQQ1CgSQ4kEQF91Q6Nu4aYFJtjAKeWCbm5Azyo6yxL3h5rWWz9KPfvYgXmhyeoKpuc8R78FBpau5HKrpquqTA",
  "key40": "4tZg5Sqwh6guVUFY9YfCKSRjMBiLDAJZHfHuGExSjgY4YtSvpd18NedLoFRjK2xg3Nogd6CT1S4oZNFvK7QxwQG7",
  "key41": "2qVyFAT7tZHFtRwGYiXchg7VHmEk3pav8k3W9C6Pa98scp1MqvWUL7mV3RdxWwTa9vS8zhpF5YzShP4cazYvWuBc"
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
