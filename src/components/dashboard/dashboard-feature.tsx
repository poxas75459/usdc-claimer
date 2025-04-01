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
    "4uTfhyfT5B5YrhZY2C7gS4TzxBMPFxE8b6sHDxewdAUDuCrRQiB2xo9JqtJSHfM8RwUDmmSD67dQ8GNFHpw6R8nT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xn7VyFT9f2o3GnLuwSDKJCnameNudVCFzvrmFcSEBUxqqgrCnXmLrUhQox44jaN7DJLqACRWaF84cFghJARDYat",
  "key1": "4VWzcpfy3DsSmUd49hf1ZHfwUEBW88JLgQk7wfWmKL7kCR2VNn5wgsQyqA95KoS59ePeTJhwWcdCQx3ec5BLjyn4",
  "key2": "44awgd2jw6H75skAXJK1TFjcCCLdR98Guu1E9fyJtcv6rrBDtziYZo1U7MKUJXu85wan8fNBNH6o4Gr8J7Bh1gTz",
  "key3": "23X2r6dXR3u2CAGf4MCw4mMPBHzZPNaA9k2GGMkFb4ojcu728uidijSe8HEpSenr8z4a7484g9cwjgYxuUxNa1Tr",
  "key4": "5oW3s2p7481WBypGq9HatX5MV4nFG9dYVduh52BzBUEkafhy8M718Zas3rLWunx2sX28WQsWbnwcVAiWDrW18KWh",
  "key5": "AFhmNii7ZFZ1rmNaxJApLvk8VF3ghh4Zb9ktPPD8uLxU1T3A2d2Y8pspsMypySEXE7ieAzxuTdDDtT7euKaiCYB",
  "key6": "3sa82HDScJtYjBcrT8aM1B9bYWxaxNumZwr8R5tjzqhuYZHh8j73KMRiBVaWZq24zAXyvHjd3j3pgV9ThCM31wge",
  "key7": "3dA1Un8KRdm2YriTjVbZJxDETgXJ1PwVXJcDCvsdQ8xRqppfMvmzAovcg367XC6XUdiJwDnLJFPxn72EBAA4vLw8",
  "key8": "65JCvoxJ9USyCWeTAXU4sJSGdeD5P97pSHscnzw6jAEkna2zsU9X15QW5CGedgdCxYEsKxjuArofPFTQT5tvSPqh",
  "key9": "3jji3HgMbuPREsVrwExBnjPBS8u4wNZgeyofyc8PYLTGohFufrdKxG5VMTnWVmVgSsRAf6YTExyoC3crnftdcymK",
  "key10": "xoKNTudNGoe2iLvYLB8Vh143e6UxHvf9tTv5ZJJGJroSX6dVh5BdbUpkgUyWQCBmpavqnL9FYJVmWjn9B3CqzUw",
  "key11": "3Ci7pJhh82sEafYpaEQTbPQ6JGpHVLU9snHzW1vx2N4qP78a6u5WwWkSq1amoqUHpkdenDCm4PneuPtqWHZY1Gir",
  "key12": "4yxHmEEvgbEAAHfPcpmXtVLcTPqyD3vF8rv7S4j24q2vtYAzrfLPT9RaUpdGoS8JxGz8uDMMYs2p8EvafeYXGk4a",
  "key13": "ZMCEn9xZsaYLwRKXYkx7TSJYSQMiFtJgue9wHiRnCfDCdnoCoH3zsiLdPqiZL3q6537KDcQU5pfvBFDCcmT1U7u",
  "key14": "122Qx5s7EAhyXGQKrz5Ko3DieFeAvG4Vc7oUWjJfDHPW5fm9m5mHX3E3q6deSfT3iM73iYrZruJc2HzG2DUARqNy",
  "key15": "3H7No8BC6QaqzyejtPTkFTzZPGzK6RWTKCAvktSt8LXCAgNgWUFx7fxXw3M7aae6dLVKTFvqaM1dm86nni1pAHoE",
  "key16": "3MsYHhedndfCEunyEQsATw5gC9Dfk7CVE7pnMkDXB5WhctBSW9x6UUSd5VnynQ1tMPDPjWrrcyo8jjtb9cqqYkwK",
  "key17": "3i13LzozDbYbCsxfEKGn6tq7D55afXkATzvztzf7sP66hKY3QU3xqtC8ELbBaLJhLfrqw9Soi1gUR4zbqgqZvpsv",
  "key18": "iPUPoUUQXh49zeyaCxzCgixBHr5r2P6azELnJmGMnVCNxJMpUCXPiVvyiLWnZ3m2XfT5ttJsiXpYPU8ZLWSFoba",
  "key19": "4Pse1QcrYbgSLQmfC843CctzV1FdmhSq9gKjiJW2VezZxySwmA7wBhfPTi59WqtoakQZFS7qjc6WCHauN96yuSmf",
  "key20": "4PAeqwESMehVK1nMYhDAT9MXkNBuZJ7rd5GKHRh9sd2Qe5bSGxwa7smjHkaN9XmVzA8MVKrJedB4D4iux4SYHqXg",
  "key21": "unnuifaiZtxY8o4tRmwVxaMyPefyeE2V1fUndrrhyxSNWUMpMg3kAGMqFkmU5tArCjoJNebdbto5ZUkE9pS11aR",
  "key22": "2FJdssRJivgXUX7xFhNEEiJEXmWokshsL359YRDmVwLid2Uo6Hhn6fnhTiWaxNf3Annq7PJnVxt7zFMhrQgTrLLi",
  "key23": "3WJ8ar2fGYVN3X64WQsHQ3j4JTJ1GDk5mjoVP63z9LPS1RHdPSZnqWGqp2CcrDtwD7WzDUWA4Wnkv25cyEsnqKYh",
  "key24": "Sy9iFC9EpLbBUNbv8TjqkhG8kH769WNzg5z3bbTnxdE2wMufMKzQGp9WbJrveTeGzwMY8BGBj3LCciP8Se1xeN2",
  "key25": "4KdoL32cmwUBFkYZAgov2VjPL3SjzVRuuRnT9LMNaNNmaGnfWpJJAQr55jk87MMckb7Hwf7Q3Xm2NVsNUAgwixJc",
  "key26": "3M3drkMt9SjQqBaRi4nGCfEHEDfc7RmQ37XvfL7EzHvPSNp4LXmXcduYhNCWcwcwJoydXHvyy7NJfzcUDu57qQsj",
  "key27": "3wdwTtUT5kAzgLgf3AG1F6LR8Mrb16NJoxyXQGtFYoBwSyuSSqT9mkwZadBzrkXNsFfrtzjSzH3tJspuHBfbu5Dy",
  "key28": "485AYvz87uTNNczRW3aczBwLo6WZynB3u9b6tbc6SCBv2sT2B4AJjvKCznqrs6KsdTaLk2eMQTMsC1Jd5DMMgX58",
  "key29": "EHf1K6NPTpkQ3jKeufGCGVmRBMDoGDWC1evmqYySUN5FFZpifcGzf4oFh1GrfG4idoh5SHmXfvVFLVLv3bSbNoC",
  "key30": "txo5VQCMdV1h785g2QqoV3C1XwvwtWiXHPKVDRCN5QVBW7c3qWtJtCrXunw49NPAEof4oo1a7NySUjpZdES7Nif",
  "key31": "5aSGEcytwzvNEX6kbdDfkhJnQ7fjPTS9umkt1X4hRqdtULEq4SRAfj2YAC38V5ZTK2rgzJYrPRmEFapbvEMMn4S7",
  "key32": "566Lz1bQBxUPATANr3SLNmDqm16Wix7eBLUcmF5hK8ZYyQ234vPUDgVYrt4ARjBJ25rme6YPidwoQVUUxMuE5NY3",
  "key33": "VN9Pkhjec1mWk8NdDdw4FYVbEs8ovcc7uuBiUE2sq5V4eFa6HqbgSaDpwC8GxaY7NUtFLY5vzfZ7D9hvdXQvGPZ",
  "key34": "31wDQ9AeFJursPwB2Yoj2ZNw1tWa3bHyy5AqG1F9nWpvvwnuiDkBtEBq3SMaaGJV3JjnZHAUpBo2tyiNaom5JBQr",
  "key35": "2QodR3trbKHgV9bsCxia6Gbowgf64GUmP2yB6TUgXsPFjzwwqjzi43fcTowcyt9XM8bGMXaX8pvRfsL8JjBVPrjN",
  "key36": "3qHHy8fGLaXkhbRLYS28NiDmC5hZZNCoRRDqTP9m8PRGraBhYB5hiMT8ZS2b1JqsuwxZyGbpgwED9WeugNozQsd7",
  "key37": "cxJYAE21YHYXf1g1Jotb7HGRQpEX7A8aMVE8R8k2hgKouP4QeLGECko4hnSRvv3XfGP82tmhg1qqJG5vCHiZ8K9",
  "key38": "331oYF3FQN12y69dCQqJtgFUyjwcJLkPnH88vjDMu4estDcK71f2ZZRhQkbeAd3ALtDfsLqwrd6Mkn3hF8xtBGE2",
  "key39": "3FZsADJnLrBGEaz2SzxGEeKys5xxdwGatk7JQA7bTRh44x2jtUF7hgpdGX5TdUgtaX5saheCd8qXKT1jDpAq1hwu",
  "key40": "4ZxtRtD1pewfRta29H2Ub8HjgXSG66sPsJPX2JxQTmZMurthEdQajNMeSFYca7yQHP6APVGvDAf2BKBhrTRo8oi4",
  "key41": "3M6wNj2dd4F4ABGZKtf2P31ebUs6uscVFhettZCD7roLs1GwGgWUiidnBjr7dGCeG4pHkV265DG2zLMsazL7CzjP",
  "key42": "5MUf3DPzQiQvtegSBWJMKo1fxz2bGLw7K5x3vnQ1C1eYmak74fr6LGPFyUjbbQhwR8repfy9AGrAnLWc3E9eNL5z",
  "key43": "4dGEDpxHqkBYGA5aK4pdNvRerK9A7QXuDTDL5553D2XsDAwoRz4p14iWtBL7TvEU1Q3zfdBckEJxsEzAFNaezzpb",
  "key44": "3TJG5nEWrXieNLDEbRtRH7owoSNkP3w7srq3xUzZXKVsyuHdfgh3VrcBL3R3SJdPie1BbcMuFJNsACtkob7xN4X4"
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
