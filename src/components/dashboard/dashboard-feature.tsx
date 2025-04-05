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
    "5t1QTKj2kjp78JgLTEH7pWH2STvhbUVErBaW4CNtkgzHYeizVssDyivT391x3BHsBEobiFNsfHgpKCrSgDMg7A7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Zb5nipN1DFzAkXnTCAbWbTNLGXn545yirafMxGNt27VkVgzD2fekn32dXKFNmNAvLgVx9Q1LQY99ewUNn1g6W6",
  "key1": "5hDuvAZEEyiKsFhTu4e4Dr3VQNva8CtNuQq2xQwy8qvJ7dx5XB5Z9coFNYEt7rozW55cdZoH6FDH3B5zttjQGPa9",
  "key2": "3SMGh292Ar7nFznYmdVmmLuBLvf5g683TvPoezXpqkNvXTZ8eQ8z9N5f3X268tcEn3DExLBZ45bNQZrseHbPgRUf",
  "key3": "2tff1zPUunMNg5d3s2gnJWwyLizKKjc89DsSMSHQbmx3QgHwLXa5ybRD2KUFUMCmoSQZ4g8ZD7kWxf2hGGQT2fnZ",
  "key4": "3oc2GLsH59uPdZkUWPEeia7eRF45iak1bpDw97emGGKwG3c8FMVKbzFmLds86naTYstm8ix74w3dgVmEgktVAnNX",
  "key5": "41P1T53WnRMAmcn5DHgmPNQD2FLZjnvkWs9fEi7DacTQnmDjxka7T25LZ11LLpJRtQGSAtr2FenC3rGCtL26Yu4i",
  "key6": "5VqoNgobdgwcveuCz55vLkL6cbvdTVrgwtT41yYh3qYjKkt8oE9AJh2fpRCbodN31My9hcdvFqZbaa2skzyYVJ7D",
  "key7": "aFsqvMjCoEznPzi6UJCbT6AWqaFG4NXWc8nuigjYcSAcz9BphF7wLQKd79ocPmBaza9tT7TryDoSbok9W8tk1Pn",
  "key8": "Vyje9nptoWGppq5JfwuRKtGTmUn7P28S6LSoxEegAxCXwCKxZfyrZk7y9bT137x1zTov3LQkdK7jdoyYRaHvk5Y",
  "key9": "3Biegk4i1C1hN3tfzcE7mNjUf6g7M2wfoWcyZ7RHHzMXVkGW2HT5ZuAMDYcW2Bf6jGqqAyMXh6MmkQGo2941g3CT",
  "key10": "4XWcN61z9fe4X8nHnGNXQSacTh4erUE9sVUZqqWWERvggDFkyg2ht5wiUY1g25te3bSdmNiyDF5RLu6URdPBeVAg",
  "key11": "3qpnMo18kFZStLoXNnkhqyD961uyq7zZVYSrLaYqpk2UGnKDwm4vza3YUxDWDCghE3H5WB5MzM3Lm3YZiJxAmMm9",
  "key12": "RQoMqm91JoQVE7tfz6BXkxEPZPLhRDm2emcytLMnVeovDJiiGA5UhrtVwUixe8qFhV459PCTBr5718rq85yK3wt",
  "key13": "5SYehxL9TBQaxj5QgFMog4N7VQfq2qiN1AcoSJiTQKjPL82ttgGPgRvNgiaychwhnxsjvWiRbfKZJrbqSPyPLJge",
  "key14": "2FkigM7q8uqDpPrMTioxkXunLDmKw2SpgPhdqjmeNZ3PdxRpqm8H2CArHWNN7w6poFXTtPgQjEzdEVaVgEb2u1qX",
  "key15": "u19vz6rsmP4pJyD9hYpP8jhLJbF9mV4eMbqbEnZY3BzDzV312YhCcQ8Vz6wtwvzY7DPTGtxZN2AHtSUBSe1ufTQ",
  "key16": "32A953MiqV3E5ZZkyLqCx35fBEBAcptzvXDaifBNhm5yDVQ3T7fusDpwUZk9qm9taYPdFQEeyMQxz8kop1poHo9D",
  "key17": "PiksRCf3YLtALkN33bkRLChjyktSCGiykvCD7vTNAbDxFZV71CNnX8um2ZMANb9WNLKsue1o4AEBd3pWp2N99Uz",
  "key18": "2gmjDxQvEB1SWY7W3nR4H4yztpUiv5txv1UzpLSFgdEvaidkWWQbcAi7YcHUUt6kqQXvr6Phwk8dpxQotSCD1gq3",
  "key19": "32ZbsYTzDXihxGm6pAAN7kUdwgv7iuRQp7Ssd495r5iyi3zUApboiLZoAs87FcvQrWYcjdYR92yJiHc6RBrX2EdF",
  "key20": "47cPHupYyedE6UvZehNrZQyjriP8Xq7TgpD9uezDMPTc7EA1YrZ3GBqHE21Yt7xPixDf9PmTM8qq6CV45tCKj7mb",
  "key21": "5Kc2iixRm2zt6UFhamZuCg6hjcdEghSQwJunk6WNgkXYZeVa7u73NbZ8vaZFwtuzH81JaBKh6pkc5oZXtBQRanj6",
  "key22": "XPB7T72296R3acMHwv6fHxJcDMpKcxzZBYZMD2M1fVEZcwVLFCED6KMq8g8r93FqWp99Thy46k9nYrtn5UwFjGg",
  "key23": "2QnfFTnjePR2PZ89ykbNY5vHHZWHTXmvhgTgdHxV2WiyEUYiyKiqwZbz7PTCqgzMoTcyHqaVL5NL1SHrxD7YAWxj",
  "key24": "4TBWQqKuPdKCqdcYV4e19FFD52JSkL5SqUXboEyM44T2rARCWUBeNVghk4HLJo2zpLrZu9AR5aYSnMkej31iYwaM",
  "key25": "5Jt26JBwo4ScpRTCoKQVqHaBMQa1apBDNu7Lf84JPn83Ve4QwbWymQ1NTK7ShypAYprE62GuDqK5UaZhdfCc3yio",
  "key26": "37E8fdFtLLEBLGPBkkm6HgEKyMZUPfkCep4jqjzfB4Jf8cUBtnsk64bPZoKrznKkw4CVBZpXcU8ezQ6cZVN13cwo",
  "key27": "2HqA3eirDLcYVggfT1Y3R29RLjewiBcXPmeQJsQxntS5VeciFaCTX185jABjyM6BGdkBhpNhxa4Zi7LaNuuRLwmm",
  "key28": "3YzMhpHBVBE4DEmC76JusiQMkrLCAP9fNz8b6xmawh68VJyXLyfTxQayYfK8MP8XfmMi9TU5P5Nu9GF7icxLkpLg",
  "key29": "2Nku8c32eBnuhDRgW1iu3GbHeb14NU4r586xTrY26b6VLyEVBZv9vrwxw3D4bFBZvi2TwSUk7tmJCyVphU1cpPi1",
  "key30": "5VnCQb3kj4SzXuKCbXpknwDA4ncmHvyCuEsRFMkLs9VXKX3J8Q4eEXtCc2g1whBGgBP7MpVa9CFgjyEZkmRT3Zug",
  "key31": "4joHCjAJK5QyxsYGAcjojNexKGHcyh6qnvypFGdyvN5i4tdNiwEjDnoqLWGy7dAUXQeMtEhU4HzF51MNDvVdEVkn",
  "key32": "LJx5McSnE3nBHScbTUZeKUair9FPRckjjyVP5A6qpdFLfjiQUjxfbaWVC49NNRPDj55z2PcuXq1hXMxzF1ypfwT",
  "key33": "MXm6b6JsWg5mHvHrNF24yKNySgLN3XiwpdZPqBY25JSXc8s7DzcjP1VAT59CPjGJGLQFcr5oTGxtVbtJtRUc11m",
  "key34": "qSBu84xkvYZn74kafCQXsjf2xmsaewnUJcmPLjMYvvvncgZJUrH9mJWk4PeSmR9cC5Hg9TMhpmpt2fm5sWTfk75",
  "key35": "ifSKmrSQYxTtcpxaVQsjggureRmMkLSNPMeN7WMHwzKX39sUsTZ8br9qg5TV9VRvmuyzpjMZmf6jrDLtGhmiR27",
  "key36": "J7jUzEhBS8ARkkU3bRDGKQfKaBShnDv2WWy6WNM4b5q7hRpgPNmJmNA3Z8kY6RjTgM3wDdMNFXEq1RgfLSn8Emq",
  "key37": "3Lbk8YbcagFyyWEeF5qSK7QHueCPEYRnoEuC8C7UwVJq1cdPsA1p5s5u32wZqmDRHs5VWukJNMdAhF3AHskQSgEP",
  "key38": "3Qwx2SbXJk6FE4VYsxR78SHMe3peP7UCbKvuEaQQYUpWpmYLGgbsUNDGH83eZDpxCzyrKjCjufmDbAa99t4ESjoJ",
  "key39": "SyGrwPBET4LYhMA2WqHfbDmUkYYJYFZMwpQb5wduN8h3fF4AaBS1WVyNHoMu52E2ffAyce9oPzJJe5sfidycJF2",
  "key40": "31q7QcQCLMusesxPVUTR7gnN7kmw4BxPjRxwsnzzkP5w6CH7mvJPtKsEDbVbbKCSV32dnpGxSbj15LC6dQigBc8t"
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
