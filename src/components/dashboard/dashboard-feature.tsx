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
    "64HYH77dGGNAa7Ss23citmfhHmNLGzhBgPN8buntK8GdxrpU67nmsJteThRzVCRqFMzat9CdLbzV43fHZPuNdAp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KXq6mA45asTZCEaMio5YWQ92MLP4EuG9kbFv6WTHn8rVSekvUhbpKf5nbVetDK4FaduQnTdESx5tJjqPb1TPfsu",
  "key1": "2cxJzh7hogR6SqzrGZfGLQ54rsTYUc9DqTSpvUgYUonpHRccNNcT4BdsGQhpWFrjyz2aGFd8uqot789Vy97woF7d",
  "key2": "5aCGhbU7uMramUbUCbQMCvohTBxxVhQTf94kZTh9yTpSNCgd3LDSJLknye8Zx4U7mxBwUxTfupnejXfYVwKMqMBP",
  "key3": "3muXjoJZkePBK8e1KiY5GFRLSrm81X3ztZPvnV8G69BWMxmMTojVvMHKoS3hidFY47qToHunpCtuQ7upyd5E6Hv6",
  "key4": "5epb8N1gHoHuvQvhD3wNEBYuwG1tDxJWjJDAybbJ7vGo3qjZs6BvMnsNDxXDgTqi8z9WsGt3BKB6Hqy1Lx6BAQXN",
  "key5": "2D4c8UjbtxwjpcTic42iC7XXD6s173Lo7WF1tHw1bVAgfGF6ZuRJ64iu7JunJokCwYGdUfGcjeKgguptZynB9pQd",
  "key6": "2sX2rCc7pQSCmN6eVuXASLwtb94d6Ba4bT99GELnkskteCX7shbrGKkte546QMBnWVSoUYeTZNvTYSbujhes2K1U",
  "key7": "1ouytqchChdXyV2VBkJtLwSmyp8D7unwwx2WXDL27dLmUMDFDkKEP8g47quWbMcVciFMzfFnzvTU8B7EM3oMhsC",
  "key8": "5Yarh3dLpV4jXUSrzRUqodKEVGxpK6R28qjiMkToydxhAeUoniPmPnotwU5Kbz4dxsfxhqxWKLuZgrM31WLG9vPS",
  "key9": "3J5upXZc7p6BeuNpH7fME1t9omWryJKpnHBn61wGwDxRJU3Hdn5yDDKfWs6Vbi8CZ7gGrxBPHo3NEigkU9VvGFTA",
  "key10": "2bqRMpwWjPU9DLJESzN4M2oUYyqLcnuRz1B3JPZ3mZLD15eDVNrpuLe85bvmSWLV2mqNVjEiSaSKKE45nf97XGpV",
  "key11": "3WtMVCntZCdRPDmj2YzM9AeNPABGf2bfoBSQwnSXtQXxWgkhj9yv1RThqnmuFR58W3JYKbiSYUtf64R2i6pxTyn3",
  "key12": "2QLN2UrfSEjC5VoAvbJGnXfiLkV5i44RsyWXsHetTV8q59Ls2nqYE1QLNYnN7EKiU4Ph7z1Dc1NAr8Q5rshRPcWT",
  "key13": "3yH77pGX854PUFxFpBosKcfQV5zANb4vfZ294Qg5qjU64CQ4TKfZsiNH3uT7XgsSKQEZ7qyWmXzJGqyKtNsja687",
  "key14": "2a5eqmGhYd6wsGKxGStnMVquDJHF7vJ4s9WDw1qC7AAHwYdUL2645ow4NK96K7ojGMe1YTkDWbQVTfvBj1eUc7Ca",
  "key15": "22tUn9NjUXNc7RhBHFEcCWvrMgtDwmYFWwWoAEbJEbKKBJ93ExFnsAC5umdjNqXbFZJZjebwC1fggu6ZPydhdMSv",
  "key16": "3i9YQcsPeUSYGQc8zpDysThgf8avx3DYDtpXtRAhnWeEGLuQAo2bCUFt8T452styGVyYETxdjnyjn2zwvT9VfbsX",
  "key17": "49fYaDg44tTFPvyfAbptKjgtAGbdq73GgQmtDyegcZdchXTKrZ4s78mM3JtJ61mxacD8xZiqGTAaXRfkTEqRrWpV",
  "key18": "3DKHN6HvCM2Axg7s6kmSsH91MLSnjmstYnKDavNVesgaj7Kg9fCJ4N8C3zS3H8t5Q9jk1JbFg9EAFwUar5bdsezk",
  "key19": "3f12jiR9iTdeiT6kzqVDmdutEZ9xVeYhkaiYSjHMtNrbDRbpHPusfouNSPH6MpS9zqPx7zSvFPwXTZHzeXgTU4YF",
  "key20": "3gwwpaoSogCvKaNfimzuP4LNK5bBMWBqvzp4v4Th7BbeVERvaWWDQajGBpRpofM1vw2Mtj7kWmXtsSBfV7bahTiv",
  "key21": "5Fuib4NES441roYA6CLbmdnqXFyinENRxtaDcUKdjAPWRW6t3UeoooecUWpJhnhbVTn5TMyf7meueWfdmDqfUXtY",
  "key22": "3Pu9L5CXeXyv8JgjtNyeZGacqVVHGcYsqc8wLsuof2tzAtLvQcpbwBL7BTbaZ4iWNpKpsLKhxbHRbAV8Nj7pfo6R",
  "key23": "4mDzHGm3pSV6pagaMVZsESpv4yBurb71gXv62AXmXAPam1XEDk4yFjUpXeBRQkDGaKvYuSGsZDPMKYYyjRvT1TRD",
  "key24": "3cj9mnsQCqZenZwS6XbCCsAxvyHNK4pAtGF1NZ98D95ubxWhbVFZHJJVAS3vqfg1fky1cYjZo6pNGaTYvnjYczPq",
  "key25": "4odQAeKgEZD8nyXv3cA48JyXX6K59HHWY1xEdsbJQMX2HiuH9o2GuDGMjRh3oWgPS5r17q8YM3MUkx5mJfHZcA1e",
  "key26": "3xv9EMAcK64r7KAYnwD9A1k4MQbzHk24yVo9PHU8rrFKQPNzCnzC8o4okBLPRLLP5N5wkvXvQgCofN7sS2qHQjif",
  "key27": "uEWYw1TCmTbvH6Qqn6Fom1nhPXzCMY3KzgZqhff63xP9bBAzmBZzynwzBAyoukrvaD8Q9DzFgqReDpxgFPycosi",
  "key28": "5hSsmJSThQYnhjFQE37hStLXNoyWwJFBEyyyiqFiuRksTPPbD6DmvdFArdXvQUE2g5Nn8Zr6rKkMyTR4TewXfFaw",
  "key29": "5NyAxagVDpeikZWZ6knT9vjF8yRXnX2hHprLeLUj1RjkCxoSZw2qiiYiFvh1LYLs5FTLNgjZR2DzLBaoTGFhsrcr",
  "key30": "QvCuzagRbKT6BzRMESLfdpFanpabNm2gQ2ZcEA9GysbXMmuyKXZWbWt7Z6MS7evxUNtDJXzLKniBJn9d2WBeR4P",
  "key31": "5Su1QAqV51mMuEEAyTzWobmH7svt5WR3diKrsMx4U16UwPjLhHUyuqqM7k9TAFW41TGwpSs9iZ1Mu3TC2QA6cZUd",
  "key32": "43QbJFLfjAf1XUvZYpCWUjG6XL5S3AYpgLS6acrnWEcGSjm2oTF7Z3w8CcafYpQf4Xd5x6mFMYnxXSpa6jHT5eeC",
  "key33": "23XfQYTjJrUoRdsNqzxSFEpuMjC5ZcnW8Mj555PS12TEYh1M3oeX8zzWygFkC5QVcrdaTBMTXkaCx5rLFJ9BWQ15",
  "key34": "4rLsLhC6CcNWJiDMcpQxqbDywspDZi19WZx25Wt98XF2j1ZLcs7a1sUK2YkRFUhrTAmrBbu5GRMarCZCDWMtTyQJ",
  "key35": "2Mi5jhBeu2musKVVZktGtoyeTtRU3W5ZGZqGw5TTtos1an2EUkfto2svAPGyw3KksWDSnx34aUurTA98EBMSrq6J",
  "key36": "3VTQ71sz16zX162t7htN82HVWw1TvKvWFPWtzk99B5bw7TT87GdMX2CPsfKLXntX5XnN3CugPhQsGS3k5zsX5sT6",
  "key37": "2y34f5vsCHKFXqNVseSX9HdW8cLsERHUjsJppo2TdhfwjJjfKDduagbwSstrnzi6QTBBNcX3VFbMijCKcng4gnH4",
  "key38": "32XDbWuNzh44guSBArU9qaBgvk8Q6avsWMDkSN7TpZxB5C77qHr3LEJ1qGzK6AvTM1P55YUXo5BcEKAUwKp6irLD",
  "key39": "4oVviq3jpW6FVXuGPxADZ36Jy3MPoK7pSSLYgfF5PicJDFbEpYZCdQEWSBtMggbJpCaS8jbvvK5Py6i7R2wid6kf",
  "key40": "46LM6NVWmcY5UXaxGwz69s1NmqKbfccezhmAmTzrxswkDJoto955UqAvWuRhJKGVU76M5GAAcNXWacfqgpGqpMGV",
  "key41": "4ENhaZ547xDZXqAMMcHis4EXJFhQKTMrnsjPzfRYV4AorvyrtgHxf18ZqbgcmKkyuRjSDqHBC5JtVydF3TqHkubf"
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
