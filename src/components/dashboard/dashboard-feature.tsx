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
    "2CbJTAhYMH45LiMzzDYafAdcHuKTrnoZAf7A6wmJoDs7r1zpXzJG6vn7dwZV6dNKuvFwj3wVwPHeSNqGihC2PEx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F58ciTFGz76Eu1Z5iCzwQtpdtA1xBXiAWM7vZdenKLd64Tt8RpN63y9gwdcZMxd2dqHjNqq6WbXn45FaJkC5WMR",
  "key1": "cCyq9NiMoYbyXNtLV6r7QNN8kxQupxNkX7Pjxts9sTEuVe59Kph3RccFu65EDWNrVnuBFkiiekRRFskpcWvi2T6",
  "key2": "2PmHBmwRgsB2QwgGVsahwRUYKD6yyBSrQ88HJevk54VhdwcPxjLtHmwa72Y6nGKgQVUbmqbuS5M9P48REGa4X8DH",
  "key3": "bSg2VtA6Xv8sahzv3jRWWzuGf3AEGGVS8tbiYKYbrcDvK7LwG5f5av17abFJp25UMMND1DDbz8yqTUMQmCLtpgN",
  "key4": "3184FfvCkYEiiR4BiQ7PjNTueCDrMPGuvPs7d6Nk8CRTynkdNaebnyM8dRGVRJ6PmvFRBTQ1v36DnVhPjPTLDVAu",
  "key5": "21M4EdZSNF4cH9cCJNZS9gpJRmk3LRBggSM4K4AdkRg4GAP8xVkRqDc5cBX9sbewDTrfYidwvH6hdFHE1hKW2FN1",
  "key6": "5rEGsVhZVFspewC3rPmVJyA21BKAAEnNsGBTp6Teo7nrwQBKytS2V4jVcJabBxsTEi62NLAuz877We8KQESfvDC1",
  "key7": "38FhKDA1pS7ceLBziz9HuquaGo28uC4s9TLBVD5FaDkf2ruRAjVQRVsSDGbnLxFykyydqceUAVWm2roqf4wzsgAJ",
  "key8": "uy389ojxqTcuTJmkiBqVYh8gLYVhKSEEffLPSSLcr9fv8qSvTmTwfMeKiBTqdsQMpWzcVuH8C2Md39JUUUwkF9e",
  "key9": "Li1vqnFBbidUC7sfu48f7aSGjenrW5sdtqup5o4w5Hf4mz6WNj3Zy32sy5ZNp8mtGAZWp4ySMqFHf8fFBmBpLXQ",
  "key10": "3KCtCHrN7y8jxmDcLbZmZaM4sTuh6yontSA2UHoAUpDQStB3Bb2JxX9MF78ZPXuwBMLoDkWeTsPhooVWPw3U4pjy",
  "key11": "u44g522VNTL4bLGj67uuQcS1zzfuFeqnoKrSLgposzWCii3fEDoVJ3pEQgMMirGoKAKokRHffBytT6SXRUL2NMP",
  "key12": "2rwpxNYkcdMU2kKf9NA63zA4uF3U3WboCr1bLDj1GfD1rHiRDXsRgX9LFyZfV2JG6Jj8ZVQ8RMKzS2WBftE6cWWs",
  "key13": "2NEVsHHmCHdTUSFvW255Ku4SAad7CTkdwAzGBaV1y5H1vmd1gasYDzC6YwUGGC4ccfU7ctqsV6zzbHe1mt4NLvku",
  "key14": "3moyHC9kmeqcN8bhgWRMyeSGcU64KVcQWRnAHCbnKq2qBPVAzABWZa5mKfr6W2x341aAqqcwJdqisa9jPJVVZq5S",
  "key15": "3AsBQLQvmtg8SbX31NV5vsTDWMoU8YgVrefxDQPYUsXZeuHXTjbQgXq6kTUKFGEyTrfHfRggR25hpnG8E7b3TF6r",
  "key16": "5hsuywKgEw4qFmoh9x8HaDCkqjuhxuHYXF8RfmjgGwbJ6hD3Snuwbdzqr86U3VvCsJY8ktvjzh5xa5Jnqry7BygR",
  "key17": "wpu6NTdFSxv2QvgWoqmKvtkodunPG4Z42Hjm5HGXxszKCfwaYqpytwHJUxw1tiApBL2aYDupytsPr1oabFm4LX2",
  "key18": "3mnhTApeuTkQva4LNVbiQiaHJYrYJKMGsv8ZjZxMyVkVcLa1hv5gVuuwDCmBxAad7cVaNudLVMsu1PcHz8cw8NTK",
  "key19": "64XYgsu8XmpLwH6bREccZaQTqWmeUS6L2T5Hk5vxUT5krvfzgGCoy3ke4Qja99nQmWipbzEBmJbCjbAEDM1V42Rg",
  "key20": "2CXLzMR3naNB7qf3SGKsjRiqiUcbDZ5ZtiB9NYbnpRPV9CSs3fmzwDodpvA9xJHFQGEBCQjtxB6bATQWLkNp1KeW",
  "key21": "oZWSGtk6VwZStRKraY2VsxPgk71e2vayJRfUap38xpVpWQrwFzsokyWH6aYs9yWVuz2HcmQoQgHu73ZbSGP3UNj",
  "key22": "2upVWof46adEiC4YonYfHYzPWU9zBSGppr3j3qdJRm15zGc19VhnisrzDHcSetY1wMzwXRsiF5sCiWcrd22LVWbQ",
  "key23": "5XEx66RkMZrJZeLZGijKRCpKgFVGxpnKKo48zFsQTygy5yENnZejDHuCgNmLmMqQvYWL4Lo1kKXTAozs2HtcFsx",
  "key24": "2oyy9TSXj4BFURkAHueEofR4V6t8oy7asa64eihwCLwnmaXbFxkgPZMRjMxt58We9PFx1PaWzucMcPKGbGC6Jd5k",
  "key25": "4v42gYrpnHNQixzJ9nXYz86Q7Gtpq6EeiepEjyEka5CCus8rHJvd26eqEXG5msGSVeyX497aVkoPcCEZhHtSEXzm",
  "key26": "nQLz4KGEzrzZ7CebScAbQuD6gXz3runoih8hf8DQLNpwcFfgpMWjhQsWRc7uxKYTyk9nYndpHSnG1EGKe8gL1ba",
  "key27": "4jpMojJTiegszwYpq4xSjTvAQQdu3FZ7iTwk3KUCqn55vZE6y2qjMpBLw8gCj9hc6cqQvV1pbwsfMZYDGfqnFdZ5",
  "key28": "3zXYAXsF42tgnWnL2wRZFPXAZTHGHWWRPHCckhWet6Ymjsgz9jeNDaH69KeFSu9SpbcxarHPKJyzeYumLnxLuWcQ",
  "key29": "5tzgC9yd34Wf5JrTMLNx8iswCFL7EsjVo8B46PRuFzqaR8tAwySrbFzKEDgq4qADEVvc3yor7h8LFaapgaVycgVH",
  "key30": "2dTan1oU6JEC8YfCYgQSko6j3mdqNJy4CEpNdnHZ5MBg1K1Erk7aBp5gLczAmN1LwaZm1cWK6c9evYTbsHhbJ89r",
  "key31": "5NKXrnHFuN4j1Gu9X6n6jWkAw48fwMs6fjm64DfbXpsgFHaWSABRknYBLagTwPmHrUUvGxqJq8SbL7fw54Gz367Z",
  "key32": "3eKfHbCvF3AJbrYPFQ2k2x2RMHaDVPiaJFdhvAY68f4YC68n2rg7moDFw3xRjTRNUYsvNDbRwAxvkzygLGdkzAv3",
  "key33": "YkagkrWvvLHVPBGEFRZTh6f5dmWVWeqgT6E4f6okJxGnN76qnnq3pJdRrAPLzLG73BZrn5CLABpcnVwFWWU19bG",
  "key34": "5ChwHSKSkrNAKKS7N8LHWQ9WBiiLwP5sdZ15VyoRoHk1ttPpuCm9B2mTa8EyRGHCuWmXbSEtgDBo5xeozzDMJchJ",
  "key35": "3wGHUWFNXcfJa7i9ovYYakM2d29XHsoKYS1FRp2WfM53A5HRNxEX6DCAi8iRyeYBQE4NQCHECruve2wK7W59J1Q1",
  "key36": "2ofS8v5jB62RWW8CwT9h4bfVskVHtSs9QAffERoqjR9FzbmLZsrD9eudd8hcEZhgbbMgjnax2cDKfEeGeCfQGQ4U",
  "key37": "y8ctQ5HebDuzRRxmnkEbJKVK8NUiY4jXUsRVwKgsMheC8NYCZsT3jZWDqW5U5mGfLeUvZJ4hQrEWDtDmAEViMCp",
  "key38": "2LN8GiuYd8k3rwP1fwbQSA3o7LziACtcPCPedhvvgRqZtpRKnB6rCFu1p685cRkjUSjS27n52RfXc9kn3Hme8t7P",
  "key39": "2wr8uzkr3b4K7MFEeQBsHJuUNFXmvBi4sDGf7qZ44njYvqFT6doSR7BQrubrnyp6BDDV1ZwTm5yYvA6cVf2FbVS6",
  "key40": "5aasS9LXpk5PvqJQfw9UVxiyAkao2R7CUtEfTztHZ6jgtTbqdo3ZZdatzt6R8GwgBwUnYhZxmPBCzXGR3tXf8vhD",
  "key41": "4LWtpHRpC4dLmo2hW385BCQ2mLTrV67wkxoy4WqtJGLkK4RJTZzatyKFpD7nUFNVqHqsN8kd7jn7kZLPfwexAwLg",
  "key42": "271ZJBMDHxqE4xf4qu32xTjHbvtxHS4ChsEgXvQ1oXPZ2nb8ueiQ5Pk6CaTE9tQjaFfUS9fFSDfCDs8vW2ETPojm",
  "key43": "31BNqPiyouRGFU7v97nEJJcezCnA7js2AyEyr2uokd2ex58ZEdNCvRdbce5m4WhGVVbvTnjw4GWavSiQ59FuCwCx"
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
