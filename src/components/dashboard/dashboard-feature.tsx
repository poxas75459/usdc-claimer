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
    "5Ac9NSbtnJi55skLurhprfPgMTd8q7DGRHfGoJNNtDu7WnKV2f4RRt4eHLqtHKYmp2DxrkrJvmDE3LrVxb93znMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65mKRDKPX42yC3Nv4RhvAW5YGRsKwsJB3NkLHtWxNn5qWgf94nQJgra2raug61JAbfQv1XmjweFmWDUtmXW2fbuD",
  "key1": "5ty1bhqsbRg7avK2ChDceEV76JWfZk578Y45pJKUnKwpwkewjanW7URzptcj5tCtaQ53qzuXeD3QovnmYdgPBLCu",
  "key2": "2cY4wH6t31nbGGKMEUvvRVMwQVGUWu7pNQd5ftRw9bsFtYntJim8x3dj4LstoqrSYvZqCmHnaFksdKwEsKc5JxZS",
  "key3": "2fUiE6iyEkkPose8E7FNGV2fSnLUn7z7EaH3KzTBcLkYE2zUPfA5gCkwsfK514iG7jUiRhdnvYC1fMprHoSg5NQH",
  "key4": "39fadjdeZfCgHohpyStSHzXAkS9igBtudMsYVtaJQDjQwBgGCfPF1GtXs6BLJCLTAFtcGvaC1FmQrfGsg51czwZU",
  "key5": "3su7rLeehTZcinAfC3cxptFWDCmT7JKs66NzD4NvQZk4SaYeaKC8ipiq91C28FHsCnRctpKucmToypbz9F6apixQ",
  "key6": "5h2FH6AsstbSdThEGNoh7692iJEDX6K5qHMbs3c39eE4yE1cBkcWRTDfxN3Vo63siCdWysyecXYkTKFkt8YSrRGy",
  "key7": "2m3kQMUziHkuUNGwxc2i91DZvd3Ajgkmy9prgbtJXzDnibHBKgv8qt4sKjtrisNPvvos666hfXs6vBGwWs7QS8sJ",
  "key8": "51p7PjMdWjQufLj9iF4xMTwQL9qcaeWYhgRSDDxzsajRmU9nRgohpKhQicgsqyTtkxuTrLbRY9C5rkx33ytBiWQ8",
  "key9": "5WH13Yg5G6MFNDFJ9mogyfJ5Bki1FpbXvBAVfbM6fhStAQ5JVAgiuhA9hYZimNq7NEwHuCT6H4MDXCBiVwSxEtHr",
  "key10": "4A3cEnjABzdpTAKTdzMGeWLHxxCBvdPCHQqaeWUyzfnqdGEsr4kYJRk4B4WQ2j6q4VuB3Piwzgo5NRtHa4Kw2nHD",
  "key11": "3mFHbq7uXNbBYKkXto1ZeYd9u4aLwEcbpRWVJnQLxcYi1iL3gWFF341ju1ZMgbrqy4NyYMfUBUNMpnvbhMXPdW8U",
  "key12": "qXtiDL8vuctD7Xdrzd3GRPyD1rQbtMgNxMtK4v9LqbYupStwff9z8bk1qPxafpJx8ReLgBQJ1YXGmVBBViqHwKk",
  "key13": "4Le5ixZHRzw3x6CEzjkT52rmvWiXCK86D7zvhakaNttb1sEpuwRk6eUddUpvVbZyhczVZs7XDJ2DL4cQqZGeXYiu",
  "key14": "TCG7nrZ8SnojFnhVcQcPSA1eX6cQdUnmCina8YFT9y7Fz4nZq6P3Ai1FDuBXjujYiwEmHZWJrJeqcpetmbm71xF",
  "key15": "2JiZmdaAYWRDoGHPvhUdZU8phxPBAZjnMeQx32BZ2dM6uCRLL7QMj4oeARtucG4bczw3AyTZ4xHsQWdN3x1MSXnR",
  "key16": "423vokoj6JNYoUTpgSm4atshQtbLkfaV44FjLgyjD7EsBnSRU6xkRaBZWR2T3oGAZcADUeYKZfvtL2LVEG2kDUvA",
  "key17": "3PzieqckwPLrFWbsdvsrRn7Wro4tXgptbQsDyMAVnjJ1G9oziZBYmj8RXMxLci2WiTgrxPBZdiCqhbe4LA4oKbRf",
  "key18": "3q58Ba5PmsjwdAcfxUpXt6pSCgKcQW2FcPVbUXqMTYBWqTRKgcHPU4ZjP9AqkpkmEMzg7EjA3NVTFtxat8gi16wK",
  "key19": "PgGMcffA9wBEsxwqqyMS8eZbTqTBAvUSzj4pLC9ocg1msKyWJnooVFTLLADaWgKzWbNn2oDcoDUW7KkDrw8vjCu",
  "key20": "34VAEg1sts1g5vBptYAKzyfKYrMtbPkMTagZ3bBwBtztdDHPsEvL1Ng1d4pKaZfHfGq5Emurs8RXt4FH92ji8w2B",
  "key21": "638E1Z8LjYa6f3GRz73MQo4UfzS2wdrvjbcHKNo7eKqq8W6Atri79AGB2cbhZKZuoWDyKzghHMPyR2faYuM9bgnu",
  "key22": "39vn6hB8tdA94iLBqDcF79fbwnW9nnyBuz1gaJHsHd7Cv5tWAi3XZ7LMUYBUTaV3WCLwjAuQJ4YF1nfMcM6VMouV",
  "key23": "4RHSTTbfAddvkMzBQkkvZM5Sb8NdEjKa9FWHppwLysjPxBFDZfhrT5XPJVbXUVRYLoJZkiPER4BvXVbR4zrxo8XJ",
  "key24": "maHbN2QcbT96fvEa2ofPdWMZ1SZ4F9ogoBE98wDtbNyZxQ6sKJcWcAL9qNAnDJnB2GvD71L1nxUJnhyLymgNtZb",
  "key25": "5ELhbLKHWQMbVZrsoDi9uM8KLsZjptJEUTTdP2GrVaqk3HgnM8VzEgptGG6hW9eKSDbRGKUN3XbJGbrwRp8Ckw2N",
  "key26": "4aAazm75YWzN53wfufjtx6sqTgVBffhiGjhYRinBsARxiu9Gf32QWDCCznTDfd7MqEKz4w3wYf1Lv9L3ExPRF1Ks",
  "key27": "4S2GXV9gSGikYU6Q36apWYyKEybmidwX6k8pcVvkiLFyLohsBAJHcZ2Wy7dRchcfCrmvjSAAAfbdEo9bpmQVZkJt",
  "key28": "5Rj97HLsy3BjFneeeTZNMqDtUuAd8ViHR3NLrnGKFjQaXf5vEm3qcVb3qZS5GQ9kn9Z5JxbNcjF79TwXfbrkJQ3E",
  "key29": "5F46mWRJcHpgAaCSw4aMur4GhV8JT9RgAoJMcRDfwW4hgCSw5egLASWUYE4pzcBck5PuME9YsLGNE3JMys9uUo4B",
  "key30": "uXQWeTbgPFTQYmYPkYNbsTZgxr45Q9FC2TK2iKeaMg6kd2wyKp8oGBfeisq3Zyj9H6C9SxvChp4DHkBKNPMfz1g",
  "key31": "3mDkmkm4xcn9ppjmz1hCTuE8opeATxvYbt9sh5RW4sqY1pgcAd48BbStpWjLuimt9fTeFRVYopSKTTb1Dnt4hpbH",
  "key32": "3soJV5RtqHevSQM9TtfPrDi8oNGrUnFmTzZfxJxpuR8MzcKX7hXXg1ZbHpsWZnrWAxdFpjYV3gUobU2fou7ST2We",
  "key33": "3jbqcrpaWEHtRz2tMUVuckrvfCTS9NizGME8HphCUNSEVmLD84nEYsyE4huxMuXS3XydDBgk2VdF2idJsxYrCpuQ",
  "key34": "5qsS7CkAkRbWkcjHLsrVcsDVrWR3K3km27vsHdGDevKH6BQSgdoPp9g8k8yoCm6KZr5cDMvJAnozRbaUbBVdpZhp",
  "key35": "5mBX2NzGeq5ipu1iuYADHLU16XBoLAn8bZyZ9HiHzRV3qYeWfVZodiqK7jBEhfbcTdYMW9wgwTAeKmmnrUK6oeDe",
  "key36": "zSXegTBci6piNg9rSMT4DvQKSSpj2U7bZfzT5z9gN98mLg75B7RUPPS1Vcr6bWhDAPHwPPLVXt4asEd3JTEzMT5",
  "key37": "3wxMujMnQ28nJeDZ624vW96CpJDuqajv9KBkHHrvoBBs6bm1S95rkhj2B2ESaXNYGLrq5NQZWB5jkPveBRbFn1wc",
  "key38": "EcCScAFpXowPBKGUFQ6mkGKbnpUqxYaUsXGJ4pugh9HGw5BrQRBWjsRRAtZC1i7MTbbTm9jx7pH8yGPFbteYVtp",
  "key39": "3X19Mat7DqgqPYsRwsPtFwSC1S3h52mqqNbZR3CDWh41j8k7TAHecpBiEh4QAg5vgYmJPEpSTVE2yFCMLxfotXik",
  "key40": "2HLKnfbnyiWZ1g2UUyw3GhWhCBnY2vDHVEgwvcH9fBdbXJHqLP4TyZpEeSC61x7Tiah1VW1nekT2u5s5ZZCg5jxK",
  "key41": "3gDwr8CCr9LnDxtsCREU9crdG1SPMuDCwFioGPDbEmbmyREJ4hDsNWT1rHzHVCruy5uen2sbEdeMuq2ukEp4UBzy",
  "key42": "4LAmyp6oJMJLo5PbMXqwfsXdSWN219S3DhwbwAeDLCiT8o7EoHjTWXQa9jzR5VisKp6baXWLpB3PmHzW5qiPyQYH"
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
